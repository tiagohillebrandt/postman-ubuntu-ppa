var electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    Menu = electron.Menu,
    dialog = electron.dialog,
    ipc = electron.ipcMain,
    circularJSON = require('circular-json'),
    _ = require('lodash').noConflict(),
    async = require('async'),
    path = require('path'),
    electronProxy = require('./services/electronProxy').electronProxy,
    menuManager = require('./services/menuManager').menuManager,
    windowManager = require('./services/windowManager').windowManager,
    authHandler = require('./services/AuthHandler'),
    authHandlerAdapter = require('./services/adapters/AuthHandlerAdapter'),
    appSettings = require('./services/appSettings').appSettings,
    uuidV4 = require('uuid/v4'),
    setupRuntimeBridge = require('./services/RuntimeBridge'),
    setupOAuth2TokenRequester = require('./services/OAuth2TokenRequester'),
    os = require('os'),
    initializeEventBus = require('./common/initializeEventBus'),
    myWindow = null,
    sharedWindow = null,
    bootstrapModels = require('./bootstrap-models'),
    initializeUpdaterHandler = require('./services/UpdaterHandler').init,
    RuntimeExecutionService = require('./services/RuntimeExecutionService'),
    ProtocolHandler = require('./services/ProtocolHandler'),
    initializeLogger = require('./services/logger').init,
    { getValue } = require('./utils/processArg');

const MOVE_DIALOG_MESSAGE = 'Move to Applications Folder?',
      MOVE_DIALOG_ACTION_BUTTON = 'Move to Applications Folder',
      MOVE_DIALOG_CANCEL_BUTTON = 'Do Not Move',
      MOVE_DIALOG_CHECKBOX_MESSAGE = 'Do not remind me again',
      MOVE_DIALOG_DETAILS = 'I can move myself to the Applications folder if you\'d like. This will ensure that future updates will be installed correctly.';


try {
  // set the path for the directory storing app's configuration files
  getValue('user-data-path') && app.setPath('userData', getValue('user-data-path'));
}
catch (e) {
  console.error(e);
}

app.sessionId = process.pid; // set the current process id as sessionId

global.pm = global.pm || {};
async.series([

  /**
   * It disables hardware acceleration if an environment variable `POSTMAN_DISABLE_GPU` is set
   */
  (cb) => {
    // https://postman.zendesk.com/agent/tickets/19959
    // This has to be called before app is ready https://github.com/electron/electron/blob/master/docs/api/app.md#appdisablehardwareacceleration
    if (process.env.POSTMAN_DISABLE_GPU === 'true') {
      app.disableHardwareAcceleration();
    }
    cb(null);
  },

  /**
   * initializeLogger
   */
  initializeLogger,

  /**
   * Initialize the event bus in the global.pm object
   */
  (cb) => {

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
  },

  /**
   * Initialize RuntimeExecutionService
   */
  (cb) => {
    RuntimeExecutionService.initialize();
    cb();
  },

  /**
   * Initialize protocolHandler
   */
  (cb) => {
    ProtocolHandler.init(app);
    cb();
  }
], (err) => {

  if (err) {
    // We are continue proceeding for now. even we see error.
    pm.logger.error('Main~booting: Failed', err);
  }

  global.isSharedBooted = false;

  const eventBus = pm.eventBus;
  windowManager.eventBus = eventBus;

  bootstrapModels({ eventBus: eventBus }, (err, orm) => {
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
      // If it is a boot process;
      if (_.get(event, 'name') === 'booted') {
        let process = event.namespace,
            err = event.data;

        pm.logger.info(`Main~AppEvents - Received booted event for process ${process}`);

        // Here there is a problem in booting shared process
        if (process === 'shared') {
          if (err) {
            dialog.showErrorBox('Could not open Postman', 'Please contact help@getpostman.com');
            return;
          }

          global.isSharedBooted = true;

          windowManager.closeLoaderWindow();

          // open requester only if the window is not available, otherwise it will open on all hot-reload of shared process
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
  });

  setupRuntimeBridge();

  // setup OAuth 2 token requester
  setupOAuth2TokenRequester();

  // flag set to perform tasks before quitting
  app.quittingApp = false;

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
        pm.logger.info('Main~IPC-MessageToElectron - Starting proxy on port: ' + port);
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
          pm.logger.error('Main~IPC-MessageToElectron - Error while starting proxy: ', e);
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
          pm.logger.info('Main~IPC-sendToAllWindows - Primary Window set (id: ' + windowManager.primaryId + ')');
        }
        else if (parsedArg.event === 'quitApp') {
          windowManager.quitApp();
        }
        if (parsedArg.event !== 'quitApp') {
          windowManager.sendInternalMessage(parsedArg);
        }
      }
      catch (e) {
        pm.logger.warn('Main~IPC-sendToAllWindows - Malformed message, ignoring.', e);
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
    console.error('Main~handleUncaughtError - Uncaught errors', e);

    // Logger might not be there in this state, hence the safe check
    pm.logger && pm.logger.error('Main~handleUncaughtError - Uncaught errors', e);
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
        pm.logger.error('Main~shouldShowMovePrompt - Error while trying to get "mode" from appSettings', err);
        return cb(false);
      }

      doNotRemind && pm.logger.info('Main~shouldShowMovePrompt - Not showing the prompt since user has chosen not to be reminded again');
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

      pm.logger.info('Main~promptMoveToApplicationsFolder - Postman is not in applications folder, showing a prompt to move it there');

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

  // app.makeSingleInstance will be deprecated in 3.x in-favour of 'second-instance' event
  var shouldQuit = app.makeSingleInstance((commandLine) => {
    if (myWindow) {
      ProtocolHandler.processArg(commandLine);

      // Someone tried to run a second instance, we should focus our window.
      if (myWindow.isMinimized()) { myWindow.restore(); }
      myWindow.focus();
    }
  });

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

