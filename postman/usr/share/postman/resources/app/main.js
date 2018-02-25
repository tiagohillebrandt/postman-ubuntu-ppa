var electron = require('electron'),
    app = electron.app,
    autoUpdater = electron.autoUpdater,
    BrowserWindow = electron.BrowserWindow,
    Menu = electron.Menu,
    shell = electron.shell,
    dialog = electron.dialog,
    ipc = electron.ipcMain,
    circularJSON = require('circular-json'),
    _ = require('lodash').noConflict(),
    urlParse = require('url-parse'),
    electronProxy = require('./services/electronProxy').electronProxy,
    menuManager = require('./services/menuManager').menuManager,
    windowManager = require('./services/windowManager').windowManager,
    appSettings = require('./services/appSettings').appSettings,
    uuidV4 = require('uuid/v4'),
    loginUtils = require('./services/loginUtils').loginUtils,
    getParamsString = require('./common/utils/url').getParamsString,
    setupRuntimeBridge = require('./services/RuntimeBridge'),
    setupOAuth2TokenRequester = require('./services/OAuth2TokenRequester'),
    os = require('os'),
    loginWindow = null,
    initializeEventBus = require('./common/event-bus'),
    myWindow = null,
    sharedWindow = null,
    bootstrapModels = require('./bootstrap-models');

global.isSharedBooted = false;

let eventBus = initializeEventBus();
windowManager.eventBus = eventBus;

// Populates the installation id
populateInstallationId();

bootstrapModels({ eventBus: eventBus }, (err, orm) => {
  global.pm = global.pm || {};

  global.pm.models = orm.collections;
  global.pm.__orm = orm;

  // initialize event bus
  let appEvents = eventBus.channel('app-events'),
      runnerEvents = eventBus.channel('runner-events'),
      errorString = '';

  runnerEvents.subscribe((event = {}) => {
    if (_.get(event, 'name') === 'launch') {
      windowManager.newRunnerWindow({}, event.data);
    }
  });

  appEvents.subscribe((event = {}) => {
    console.log('App events bus', event);

    // If it is a boot process;
    if (_.get(event, 'name') === 'booted') {
      let process = event.namespace,
          err = event.data;

      // Here there is a problem in booting shared process
      if (process === 'shared') {
        if (!_.isEmpty(err)) {
          dialog.showErrorBox('Could not open Postman', 'Please contact help@getpostman.com');
          return;
        }

        global.isSharedBooted = true;

        windowManager.closeLoaderWindow();

        // open requester only if the window is not availbale, otherwise it will open on all hot-reload of shared process
        windowManager
          .getOpenWindows('requester')
          .then((openRequesterWindows) => {
            if (_.size(openRequesterWindows) === 0) {
              windowManager.restoreWindows().then((window) => {
                myWindow = window;
              });
            }
          });
      }
    }
  });

  this.ormInitialized = true;
  executeQueuedActions();
});

setupRuntimeBridge();

// setup OAuth 2 token requester
setupOAuth2TokenRequester();

// flag set to perform tasks before quitting
app.quittingApp = false;

const AUTH_CAPTURE_URL = 'https://erisedstraehruoytubecafruoytonwohsi.chromiumapp.org';

if (os.type() == 'Windows_NT') {
  if (process.argv && process.argv.length > 1 &&
     process.argv[1] && process.argv[1].startsWith('postman://')) {
    var url = process.argv[1];
    windowManager.initUrl = url;
    windowManager.openUrl(url);
  }
  if (require('electron-squirrel-startup')) { return; }
}

// Postman's API will run here. will be used by the interceptor for sending captured requests
var API_SERVER_PORT = 8082,
    thisName = null,
    thisPlatform = 'OSX',
    initUrl = null, // URL set when app is opened via a postman:// link
    immediateUpdateFunction = null; // function to call when "restartAndUpdate" is clicked

function attachUpdaterListeners () {
  autoUpdater.on('update-available', function (update) {
    console.log('update-available: ' + JSON.stringify(update));
  });

  autoUpdater.on('checking-for-update', function (update) {
    console.log('checking-for-update: ' + JSON.stringify(update));
  });

  autoUpdater.on('update-downloaded', function (event, notes, name, date, url, quitAndUpdate) {
    console.log('update-downloaded: ' + notes + ' ' + name + ' ' + url);
    immediateUpdateFunction = quitAndUpdate;
    windowManager.sendInternalMessage({
      'event': 'electronUpdateDownloaded',
      'object': name,
      'object2': notes
    });
  });

  autoUpdater.on('update-not-available', function (a) {
    console.log('Update not available');
    windowManager.sendInternalMessage({ event: 'electronUpdateNotFound' });
  });

  autoUpdater.on('error', function (a, b) {
    console.log('autoUpdate error: ' + JSON.stringify(a) + ' ' + JSON.stringify(b));
    windowManager.sendInternalMessage({ event: 'electronUpdateError' });
  });
}

/**
 * Populate installation id
 * it gets the installation id from the settings.json file
 * and keep it in app object
 *
 */
function populateInstallationId () {
  appSettings && appSettings.get('installationId', (err, id) => {
    let installationId,
        firstLoad = false;

    if (!err && id) {
      installationId = id;
    } else {
      // This means it is the first time app is loading.
      firstLoad = true;
      installationId = uuidV4();
      appSettings.set('installationId', installationId);
    }

    // Assign the values in app so that the renderers can make use of it.
    app.firstLoad = firstLoad;
    app.installationId = installationId;
  });
}

/**
 * Reset firstLoad
 */
 function resetFirstLoad () {
   app.firstLoad = false;
 }

/**
 * checkAndSendVersionUpdate
 * This is used to send the check and send version update status to the renderer
 * If the current version is not the last known verion
 * 1. Notify renderer for version update
 * 2. Sets the current version as the lastKnowVersion.
 */
function checkAndSendVersionUpdate () {
  appSettings.get('lastKnownVersion', (err, lastKnownVersion) => {
    if (!err) {

      // Get the current app version
      let currentVersion = app.getVersion();

      // If the current version is not the last known verion
      if (!_.isEmpty(lastKnownVersion) && currentVersion !== lastKnownVersion) {

        // Sends message to renderer.
        windowManager.sendInternalMessage({
          event: 'notifyVersionUpdate',
          object: {
            lastKnownVersion,
            currentVersion
          }
        });
      }

      // Sets the current version as lastknown version
      appSettings.set('lastKnownVersion', currentVersion);
    }
  });
}

/** */
function attachIpcListeners () {
  ipc.on('newRunnerWindow', (event, arg) => {
    windowManager.newRunnerWindow({}, arg);
  });

  ipc.on('newConsoleWindow', function (event, arg) {
    windowManager.newConsoleWindow({}, arg);
  });

  ipc.on('startBrowserLogin', (event, options) => {

    if (loginWindow != null) {
      if (_.isFunction(loginWindow.focus)) {
        loginWindow.focus();
        return;
      }
    }
    let {
          url,
          session_name,
          clean_session = false,
          isEnterpriseLogin = false
        } = options;
    loginWindow = new BrowserWindow({
      width: 1000,
      height: 800,
      show: false,
      title: 'Postman',
      webPreferences: {
        nodeIntegration: false,
        partition: session_name
      }
    });

    // clean the storageData only if the session is provided for safety
    if (!_.isEmpty(session_name) && clean_session) {
      loginWindow.webContents.session.clearStorageData(() => {
        console.log('Cleared all storageData for clean session: ' + session_name);
      });
    }
    loginWindow.loadURL(url);
    loginWindow.show();
    console.log('Starting Browser login with URL: ' + url);

    loginWindow.webContents.on('did-get-redirect-request', (event, oldUrl, newUrl) => {
      console.log('LoginWindow redirected to Url = ' + newUrl);
      var error = (/\?error=(.+)$/).exec(newUrl);

      if (!isEnterpriseLogin && error) {
        // Close the browser if code found or error
        console.log('Error: ', error);
        windowManager.sendInternalMessage({ event: 'browserLoginError' });
        loginWindow.close();
      }
      if (_.startsWith(newUrl, AUTH_CAPTURE_URL)) {
        // send back to renderer
        console.log('Send success back to renderer: ', newUrl);
        windowManager.sendInternalMessage({
          event: 'browserLoginCallback',
          object: newUrl
        });
        loginWindow.close();
      }
    });

    // Only usage is when the user clicks on the retry link in-case of different user login in enterprise flow
    loginWindow.webContents.on('will-navigate', (event, url) => {
      console.log('LoginWindow navigated to Url = ' + url);
      if (_.startsWith(url, AUTH_CAPTURE_URL)) {
        if (isEnterpriseLogin) {
          options.additionalParams = {};
          var params = urlParse(url, true).query;
          console.log('List of params from Enterprise login flow', params);
          if (!_.isEmpty(params.error) && params.retry) {
            if (!_.isEmpty(params.return)) {
              return loginWindow.webContents.session.clearStorageData(() => {
                loginWindow.loadURL(options.loginHost + params.return);
              });
            }
            console.log('Hits the retry case', params);
            options.additionalParams = params;
            return loginWindow.webContents.session.clearStorageData(() => {
              let paramsObj = loginUtils.getParamsObjectForLogin(options),
                  retryUrlPath = options.loginHost + options.loginPath + '?' + getParamsString(paramsObj);
              console.log('redirected to url from for retry to', retryUrlPath);
              loginWindow.loadURL(retryUrlPath);
            });
          }
        }
      }
    });

    loginWindow.on('close', () => {
      loginWindow = null;
    }, false);

  });

  ipc.on('messageToElectron', function (event, arg) {
    if (arg.event === 'startProxy') {
      var port = 8080;
      if (arg.data && arg.data.port) {
        port = arg.data.port;
      }
      if (typeof port === 'string') {
        port = parseInt(port);
      }
      console.log('Starting proxy on port: ' + port);
      try {
        var ret = electronProxy.startProxy(
            port,
            function () {
              sendInternalMessage({
                event: 'proxyClosed',
                object: {}
              });
            },
            sendCapturedProxyRequest
        );
        event.sender.send('proxyStarted', ret);
        windowManager.sendInternalMessage({
          event: 'proxyNotif',
          'object': 'start',
          'object2': 'success'
        });
      }
      catch (e) {
        // error while starting proxy
        console.log('Error while starting proxy: ', e);
        windowManager.sendInternalMessage({
          event: 'proxyNotif',
          'object': 'start',
          'object2': 'failure'
        });
      }
    }
    else if (arg.event === 'stopProxy') {
      try {
        electronProxy.stopProxy();
        windowManager.sendInternalMessage({
          event: 'proxyNotif',
          'object': 'stop',
          'object2': 'success'
        });
      }
      catch (e) {
        windowManager.sendInternalMessage({
          event: 'proxyNotif',
          'object': 'stop',
          'object2': 'failure'
        });
      }
    }
    else if (arg.event === 'updateElectronVersion') {
      updateVersion(arg);
    }
    else if (arg.event === 'restartAndUpdate') {
      app.quittingApp = true;
      restartAndUpdate();
    }
    else if (arg.event === 'postmanInitialized') {
      // sent by the primary window when indexedDB has loaded
      windowManager.newRequesterOpened();
    }
  });

  ipc.on('getSaveTarget', function (event, arg) {
    var retPath = showSaveDialog(event.sender, arg);
    if (!retPath) {
      event.returnValue = null;
    }
    else {
      event.returnValue = retPath;
    }
  });

  ipc.on('sendToAllWindows', function (event, arg) {
    try {
      let parsedArg = circularJSON.parse(arg);
      if (parsedArg.event === 'pmWindowPrimaryChanged') {
        windowManager.primaryId = arg.object;
        console.log('Primary Window set (id: ' + windowManager.primaryId + ')');
      }
      else if (parsedArg.event === 'quitApp') {
        windowManager.quitApp();
      }
      if (parsedArg.event !== 'quitApp') {
        windowManager.sendInternalMessage(parsedArg);
      }
    }
    catch (e) {
      console.log('Malformed message, ignoring.');
    }
  });

  ipc.on('newRequesterWindow', function (event, arg) {
    windowManager.newRequesterWindow({}, arg);
  });

  ipc.on('openLoaderWindow', function () {
    global.isSharedBooted = false;
    myWindow = null;
    windowManager
      .forceCloseAllWindows()
      .then(() => {
        windowManager.newLoaderWindow();
      });
  });

  ipc.on('closeRequesterWindow', function (event, arg) {
    windowManager.closedHandler(event, arg);
  });

  ipc.on('closeWindow', (event, arg) => {
    var win = BrowserWindow.fromId(parseInt(arg));
    win && win.close();
  });

  ipc.on('checkAndSendVersionUpdate', () => {
    checkAndSendVersionUpdate();
  });

  // This will be called once the app first load analytics event is sent to unset the property.
  ipc.on('resetFirstLoad', resetFirstLoad);
}

process.on('uncaughtException', function (e) {
  handleUncaughtError(e);
});

function handleUncaughtError (e) {
  console.log('Uncaught errors', e);

  // Can happen for proxy error
  // explore other possibilities
  // TODO: Kane
}

function openCustomURL (url) {
  shell.openExternal(url);
}

function runPostmanShortcut (action, url) {
  if (action == 'newWindow') {
    windowManager.newRequesterWindow();
  }
  else {
    windowManager.sendToFirstWindow({
      name: 'internalEvent',
      data: { event: action }
    });
  }
}

function restartAndUpdate () {
  if (typeof immediateUpdateFunction === 'function') {
    immediateUpdateFunction();
  }
}

function updateVersion (arg) {
  var url = getFeedUrl(arg);
  autoUpdater.setFeedURL(url);
  autoUpdater.checkForUpdates();
}

function getFeedUrl (arg) {
  var channel = arg.data.channel,
      platform = arg.data.platform,
      releaseServerURL = arg.data.updateServerDomain,
      feedUrl = '',
      releaseServerChannel = _.includes(['prod', 'stage'], channel) ? 'stable' : channel,
      additionalParamsString = arg.data.additionalParamsString;

  // squirrel-mac specific endpoints
  if (platform === 'OSX') {
    feedUrl = releaseServerURL + 'update/status?' +
      'currentVersion=' + arg.data.version +
      '&platform=' + platform.toLowerCase() +
      '&channel=' + releaseServerChannel +
      '&' + additionalParamsString;

    console.log('osx other channel release server url', feedUrl);
    return feedUrl;
  }

  // app release endpoints for windows. arch is included in the platform (WIN32/WIN64)
  feedUrl = releaseServerURL +
    'update/' +
    platform.toUpperCase() + // Uppercased due to a bug in release server
    '/' +
    arg.data.version +
    '/' +
    releaseServerChannel;

  console.log('Windows release server url', feedUrl);
  return feedUrl;
}

function sendCapturedProxyRequest (url, method, headers, data) {
  if (!data) {
    data = '';
  }
  windowManager.sendInternalMessage({
    event: 'proxyRequestCaptured',
    object: {
      url: url,
      method: method,
      headers: headers,
      data: data
    }
  });
}

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('before-quit', function () {
  app.quittingApp = true;
  let sharedWindow = windowManager.getSharedWindow();
  sharedWindow && sharedWindow.show();
});

function showSaveDialog (window, fileName) {
  var savePath = dialog.showSaveDialog({
    title: 'Select path to save file',
    defaultPath: '~/' + fileName
  });
  return savePath;

}
attachIpcListeners();
attachUpdaterListeners();

thisName = app.getName();
windowManager.initialize();

var dockMenu = Menu.buildFromTemplate([
  {
    label: 'New Collection',
    click: function () { runPostmanShortcut('newCollection'); }
  },
  {
    label: 'New Window ',
    click: function () { runPostmanShortcut('newWindow'); }
  }
]);

function handleOpenUrl (url) {
  windowManager.initUrl = url;
  windowManager.openUrl(url);
}

/**
 * Queues an action to be performed after the ORM initialization is complete
 * 
 * @param  {Function} action - The function to queue
 */
function queueAction (action) {
  if (!_.isFunction(action)) {
    return;
  }

  if (this.ormInitialized) {
    return action();
  }

  this.queuedActions.push(action);
}

/**
 * Executes all queued actions
 */
function executeQueuedActions () {
  _.forEach(this.queuedActions, (action) => {
    _.isFunction(action) && action();
  });

  this.queuedActions = [];
}

var shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
  // Someone tried to run a second instance, we should focus our window.
  if (myWindow) {
    if (os.type() == 'Windows_NT') {
      if (process.argv && process.argv.length > 1 &&
         process.argv[1] && process.argv[1].startsWith('postman://')) {
        var url = process.argv[1];

        queueAction(handleOpenUrl.bind(this, url));
      }
    }
    if (myWindow.isMinimized()) { myWindow.restore(); }
    myWindow.focus();
  }
});

if (os.type() !== 'Linux') {
  // For Linux it is not supported
  app.setAsDefaultProtocolClient('postman');
}

if (shouldQuit) {
  app.quit();
  return;
}

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function () {
  windowManager.newLoaderWindow();
  sharedWindow = windowManager.newSharedWindow();
  menuManager.createMenu();
  if (app.dock) { // app.dock is only available on OSX
    app.dock.setMenu(dockMenu);
  }
});

app.on('open-url', function (event, url) {
  event.preventDefault();
  handleOpenUrl(url);
});

app.on('activate', function (e, hasVisibleWindows) {
  console.log('activate', hasVisibleWindows);
  if (!hasVisibleWindows && global.isSharedBooted) {
    windowManager.createOrRestoreRequesterWindow();
  }
});
