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
    uuidV4 = require('uuid/v4');
loginUtils = require('./services/loginUtils').loginUtils,
    getParamsString = require('./common/utils/url').getParamsString,
    setupRuntimeBridge = require('./services/RuntimeBridge'),
    setupOAuth2TokenRequester = require('./services/OAuth2TokenRequester'),
    os = require('os'),
    loginWindow = null;

setupRuntimeBridge();

// setup OAuth 2 token requester
setupOAuth2TokenRequester();

// flag set to perform tasks before quiting
app.quiting = false;

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
 * fetchAndSendInstallationId
 * it gets the installation id from the settings.json file
 * and sends throught eh setInstallationId event to renderer
 *
 */

function fetchAndSendInstallationId () {
  appSettings.get('installationId', (err, id) => {
    if (!err && id) {
      windowManager.sendInternalMessage({
        event: 'setInstallationId',
        object: { installationId: id }
      });
    }
    else {
      installationId = uuidV4();
      appSettings.set('installationId', installationId, (setErr) => {
        if (!setErr) {
          windowManager.sendInternalMessage({
            event: 'setInstallationId',
            object: { 'installationId': installationId }
          });
        }
      });
    }
  });
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

/**
 * Forcefully setting the installation id in the main process,
 * This should be triggered from the render process only
 * Using this method we are migrating the existing installation id in the app to main process
 */

function migrateInstallationId (data) {
  appSettings.set('installationId', _.get(data, 'installationId'));
}

/**
 * Forcefully setting the lask known version in the main process,
 * This should be triggered from the render process only
 * Using this method we are migrating the existing installation id in the app to main process
 */

function migrateLastKnownVersion (data) {
  let lastKnownVersion = _.get(data, 'lastKnownVersion');

  // Set only if the lastKnownVersion is not empty
  !_.isEmpty(lastKnownVersion) && appSettings.set('lastKnownVersion', lastKnownVersion, checkAndSendVersionUpdate);
}

function attachIpcListeners () {
  ipc.on('newRunnerWindow', (event, arg) => {
    windowManager.newRunnerWindow(arg);
  });

  ipc.on('newConsoleWindow', function (event, arg) {
    windowManager.newConsoleWindow(arg);
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
          isEnterpriseLogin = false,
          isForceLogin = false
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
      app.quiting = true;
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
    windowManager.newRequesterWindow();
  });

  ipc.on('closeRequesterWindow', function (event, arg) {
    windowManager.closeRequesterWindow(arg);
  });

  ipc.on('historyChanged', function (event, arg) {
    arg = JSON.parse(arg);
    menuManager.appendHistory(arg);
  });

  ipc.on('closeWindow', (event, arg) => {
    var win = BrowserWindow.fromId(parseInt(arg));
    win && win.close();
  });

  ipc.on('getInstallationId', () => {
    fetchAndSendInstallationId();
  });

  // We are not going to use this listener until 6.0,
  // at present, this will be called inside the migrateLastKnownVersion function
  // ipc.on('checkAndSendVersionUpdate', () => {
  //   checkAndSendVersionUpdate();
  // });

  // @deprecated 6.0
  ipc.on('migrateInstallationId', (event, data) => {
    // It is been used to migrate the setting.installation_id to
    // appSettings json in the main
    // The reason for this is all the partitions should have the single installation id
    migrateInstallationId(data);
  });

  // @deprecated 6.0
  ipc.on('migrateLastKnownVersion', (event, data) => {
    // It is been used to migrate the localStorage.lastKnownVersion to
    // appSettings json in the main
    migrateLastKnownVersion(data);
  });
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
  if (action == 'reloadWindow') {
    var win = BrowserWindow.getFocusedWindow();
    if (win) {
      win.reloadIgnoringCache();
    }
  }
  else if (action == 'newWindow') {
    windowManager.newRequesterWindow();
  }
  else if (action == 'toggleDevTools') {
    var win = BrowserWindow.getFocusedWindow();
    if (win) {
      win.webContents.send('shellMessage', { type: 'toggleDevTools' });
    }
  }
  else if (action == 'openCustomUrl') {
    openCustomURL(url);
  }
  else if (action === 'newTab') {
    windowManager.sendCustomInternalEvent(action);
  }
  else if (action === 'closeTab') {
    windowManager.sendCustomInternalEvent(action);
  }
  else if (action === 'closeWindow') {
    var win = BrowserWindow.getFocusedWindow();
    win && win.close();
  }
  else if (action === 'nextTab') {
    windowManager.sendCustomInternalEvent(action);
  }
  else if (action === 'previousTab') {
    windowManager.sendCustomInternalEvent(action);
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

app.on('before-quit', function (event) {
  // bypass state saving logic if no windows are open
  if (!windowManager.hasOpenWindows()) {
    app.quiting = true;
  }

  if (!app.quiting) {
    event.preventDefault();
    app.quiting = true;
    windowManager.sendInternalMessage({ event: 'saveAllWindowState' });
  }
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


var myWindow = null;

var shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
  // Someone tried to run a second instance, we should focus our window.
  if (myWindow) {
    if (os.type() == 'Windows_NT') {
      if (process.argv && process.argv.length > 1 &&
         process.argv[1] && process.argv[1].startsWith('postman://')) {
        var url = process.argv[1];
        windowManager.initUrl = url;
        windowManager.openUrl(url);
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
  myWindow = windowManager.newRequesterWindow(1);
  menuManager.createMenu();
  if (app.dock) { // app.dock is only available on OSX
    app.dock.setMenu(dockMenu);
  }
});


app.on('open-url', function (event, url) {
  event.preventDefault();
  windowManager.initUrl = url;
  windowManager.openUrl(url);
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('activate', function (e, hasWindows) {
  if (!hasWindows) {
    windowManager.newRequesterWindow(1);
  }
});
