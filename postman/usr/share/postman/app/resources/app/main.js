var electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    Menu = electron.Menu,
    shell = electron.shell,
    dialog = electron.dialog,
    ipc = electron.ipcMain,
    circularJSON = require('circular-json'),
    _ = require('lodash').noConflict(),
    async = require('async'),
    electronProxy = require('./services/electronProxy').electronProxy,
    menuManager = require('./services/menuManager').menuManager,
    windowManager = require('./services/windowManager').windowManager,
    authHandler = require('./services/AuthHandler'),
    authHandlerAdapter = require('./services/adapters/AuthHandlerAdapter'),
    appSettings = require('./services/appSettings').appSettings,
    uuidV4 = require('uuid/v4'),
    loginUtils = require('./services/loginUtils').loginUtils,
    getParamsString = require('./common/utils/url').getParamsString,
    setupRuntimeBridge = require('./services/RuntimeBridge'),
    setupOAuth2TokenRequester = require('./services/OAuth2TokenRequester'),
    os = require('os'),
    initializeEventBus = require('./common/initializeEventBus'),
    myWindow = null,
    sharedWindow = null,
    bootstrapModels = require('./bootstrap-models'),
    initializeUpdaterHandler = require('./services/UpdaterHandler').init;

const MOVE_DIALOG_MESSAGE = 'Move to Applications Folder?',
      MOVE_DIALOG_ACTION_BUTTON = 'Move to Applications Folder',
      MOVE_DIALOG_CANCEL_BUTTON = 'Do Not Move',
      MOVE_DIALOG_CHECKBOX_MESSAGE = 'Do not remind me again',
      MOVE_DIALOG_DETAILS = 'I can move myself to the Applications folder if you\'d like. This will ensure that future updates will be installed correctly.';

async.series([
  /**
   * It disables hardware acceleration if an environment variable `POSTMAN_DISABLE_GPU` is set
   */
  (cb) => {
    // https://postman.zendesk.com/agent/tickets/19959
    // This has to be called before app is ready https://github.com/electron/electron/blob/master/docs/api/app.md#appdisablehardwareacceleration
    if (process.env.POSTMAN_DISABLE_GPU === 'true') {
      console.log('Disabling hardware acceleration');
      app.disableHardwareAcceleration();
    }
    cb(null);
  },

  /**
   * Initialize the event bus in the global.pm object
   */
  (cb) => {
    global.pm = global.pm || {};

    // initializes event bus on global `pm` object
    initializeEventBus();

    cb(null);
  },

  /**
   * It initialize the updateHandler and assigns the updaterInstance to the app object
   */
  (cb) => {
    initializeUpdaterHandler((err, updaterInstance) => {
      app.updaterInstance = updaterInstance;
      cb(err);
    });
  }
], (err) => {

  if (err) {
    // We are continue proceeding for now. even we see error.
    console.log(`Main boot sequence error: ${err}`);
  }

  let argv = process.argv.slice(1);

  for (let i = 0; i < argv.length; i++) {
    // to check for the user data path flag
    if (argv[i].startsWith('--user-data-path=')) {
      let arg = argv[i].split('=');

      if (arg[1] !== '') {
        let path = arg.slice(1).join('=');
        try {
          // setting the path for the directory storing app's configuration files
          app.setPath('userData', path);
        }
        catch (e) {
          console.error(e);
        }
      }
      break;
    }
  }

  global.isSharedBooted = false;

  const eventBus = pm.eventBus;
  windowManager.eventBus = eventBus;

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
  }

  // Postman's API will run here. will be used by the interceptor for sending captured requests
  var API_SERVER_PORT = 8082,
      thisName = null,
      thisPlatform = 'OSX',
      initUrl = null; // URL set when app is opened via a postman:// link

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

  /** */
  function attachIpcListeners () {
    ipc.on('newRunnerWindow', (event, arg) => {
      windowManager.newRunnerWindow({}, arg);
    });

    ipc.on('newConsoleWindow', function (event, arg) {
      windowManager.newConsoleWindow({}, arg);
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
                windowManager.sendInternalMessage({
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
      else if (arg.event === 'postmanInitialized') {
        // sent by the primary window when indexedDB has loaded
        windowManager.newRequesterOpened();
      }
    });

    ipc.on('overrideRequestHeaders', function (event, arg) {
      let viewSession = require('electron').session.fromPartition(arg.partitionId);
      viewSession.webRequest.onBeforeSendHeaders((request, callback) => {
        Object.assign(request.requestHeaders, arg.headers);
        callback({ cancel: false, requestHeaders: request.requestHeaders });
      });
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
  }

  process.on('uncaughtException', function (e) {
    handleUncaughtError(e);
  });

  /**
   *
   * @param {*} e
   */
  function handleUncaughtError (e) {
    console.log('Uncaught errors', e);

    // Can happen for proxy error
    // explore other possibilities
    // TODO: Kane
  }

  /**
   *
   * @param {*} url
   */
  function openCustomURL (url) {
    shell.openExternal(url);
  }

  /**
   *
   * @param {*} action
   * @param {*} url
   */
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

  /**
   *
   * @param {*} url
   * @param {*} method
   * @param {*} headers
   * @param {*} data
   */
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
    app.updaterInstance = null; // clear the updater instance
  });

  /**
   *
   * @param {*} window
   * @param {*} fileName
   */
  function showSaveDialog (window, fileName) {
    var savePath = dialog.showSaveDialog({
      title: 'Select path to save file',
      defaultPath: '~/' + fileName
    });
    return savePath;

  }
  attachIpcListeners();

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

  /**
   *
   * @param {*} url
   */
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

  /**
   * Determines whether to show the prompt for moving the current app to applications folder
   */
  function shouldShowMovePrompt (cb) {
    if (process.env.PM_BUILD_ENV === 'development' ||
        process.env.SKIP_MOVE_PROMPT === 'true' ||
        os.type() !== 'Darwin' ||
        app.isInApplicationsFolder()) {
      return cb(false);
    }

    appSettings.get('doNotRemindMoveToApplications', (err, doNotRemind) => {
      if (err) {
        console.log('Error while trying to get "mode" from appSettings', err);
        return cb(false);
      }

      doNotRemind && console.log('Not showing the prompt since user has chosen not to be reminded again');
      return cb(!doNotRemind);
    });
  }

  /**
   * This will show a prompt for moving the current app to applications folder when running on a mac
   */
  function promptMoveToApplicationsFolder (cb) {
    shouldShowMovePrompt((shouldShow) => {
      if (!shouldShow) {
        return cb();
      }

      console.log('Postman is not in applications folder, showing a prompt to move it there');

      dialog.showMessageBox({
        type: 'question',
        buttons: [MOVE_DIALOG_ACTION_BUTTON, MOVE_DIALOG_CANCEL_BUTTON],
        defaultId: 0, // Does not change the default selected button as mentioned in docs but only specifies the primary button (changes the color to blue)
        message: MOVE_DIALOG_MESSAGE,
        detail: MOVE_DIALOG_DETAILS,
        checkboxLabel: MOVE_DIALOG_CHECKBOX_MESSAGE
      }, (response, checkboxChecked) => {
        // if the checkbox was checked, we need to wait for persisting this setting and then move the app
        if (checkboxChecked) {
          appSettings.set('doNotRemindMoveToApplications', true, (err) => {
            response === 0 && app.moveToApplicationsFolder();
          });
          return cb();
        }

        // otherwise, if checkbox was not checked we can directly go ahead and start the move
        if (response !== 0) {
          return cb();
        }

        // not calling the callback here since we the current app will be quitting anyway
        // no point showing the splash screen
        app.moveToApplicationsFolder();
      });
    });
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

  /**
   * This will be called when app is ready
   */
  function onAppReady () {
    promptMoveToApplicationsFolder(() => {
      // Populates the installation id
      populateInstallationId();
      windowManager.newLoaderWindow();
      sharedWindow = windowManager.newSharedWindow();

      if (process.env.SKIP_SIGNIN !== 'true') {
        authHandler.init(authHandlerAdapter);
      }

      menuManager.createMenu();
      if (app.dock) { // app.dock is only available on OSX
        app.dock.setMenu(dockMenu);
      }
    });
  }

  // This method will be called when Electron has done everything
  // initialization and ready for creating browser windows.
  app.isReady() ? onAppReady() : app.on('ready', onAppReady);

  app.on('open-url', function (event, url) {
    event.preventDefault();
    handleOpenUrl(url);
  });

  app.on('activate', function () {
    // bail out if shared window is not booted
    if (!global.isSharedBooted) {
      return;
    }

    windowManager
      .getOpenWindows('requester')
      .then((openRequesterWindows) => {
        // if there are open requester windows do nothing
        if (!_.isEmpty(openRequesterWindows)) {
          return;
        }

        // if there are no open requester windows open or restore a requester window
        windowManager.createOrRestoreRequesterWindow();
      });
  });
});

