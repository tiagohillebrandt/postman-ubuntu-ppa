var electron = require('electron'),
  url = require('url'),
  path = require('path'),
  Storage = require('electron-json-storage'),
  app = electron.app,
  shell = electron.shell,
  BrowserWindow = electron.BrowserWindow,
  WindowController = require('../common/controllers/WindowController'),
  uuidV4 = require('uuid/v4'),
  { getValue } = require('../utils/processArg'),
  _ = require('lodash').noConflict();

const SHELL_PARTITION_NAME = 'persist:postman_shell';
const MAX_WINDOW_RESTORE_COUNT = 4;

const ALL_DEV_TOOLS = ['requester', 'runner', 'console', 'shared'];
const devtools = getValue('dev-tools') === true ? ALL_DEV_TOOLS : getValue('dev-tools').split(',');

exports.windowManager = {
  primaryId: '1',
  openWindowIds: [],
  initUrl: null,
  eventBus: null,
  windowState: {},
  isWindowVisibleByDefault: true,

  initialize () {
    if (process.env.PM_BUILD_ENV !== 'development') {
      const htmlFolderPath = path.resolve(__dirname, '..', 'html'),
            shellPath = path.resolve(htmlFolderPath, 'shell.html'),
            loaderPath = path.resolve(htmlFolderPath, 'loader.html');

      // url.format helps in encoding any not allowed special characters in the path
      // The fix has been added where it was not possible to load the url for case below,
      // if user name contains #, creates # in the path, which is delimiter breaking the url.
      this._webViewPath = url.format({ protocol: 'file', pathname: shellPath });
      this.loaderWindowPath = url.format({ protocol: 'file', pathname: loaderPath });
    }
    else {
      this._webViewPath = 'http://localhost:8777/build/html/shell.html';
      this.loaderWindowPath = 'http://localhost:8777/build/html/loader.html';
    }
    this.closedHandler = this.closedHandler.bind(this);
    this.debouncedStateChangeHandler = _.debounce(this.stateChangeHandler.bind(this), 100);
    this.windowBoundsHandler = this.windowBoundsHandler.bind(this);
  },

  getWebviewPath () {
    return `${this._webViewPath}?sessionId=${app.sessionId}&logPath=${app.logPath}`;
  },

  hideAllWindows () {
    for (let i = 0; i < this.openWindowIds.length; i++) {
      let openWindow = BrowserWindow.fromId(parseInt(this.openWindowIds[i]));
      openWindow && openWindow.hide();
    }
  },

  /**
   * Sets default visibility state of window.
   * This effect Requester, Console and Runner Windows.
   * @param {Boolean} visible whether to show windows by default.
   */
  setWindowsDefaultVisibilityState (visible) {
    this.isWindowVisibleByDefault = visible;
  },

  /**
    * Show all windows.
  */
  showAllWindows () {
    return WindowController
      .getAll({})
      .then((allWindows) => {
        // We get all windows from db and choose the one which are currently opened(they are hidden)
        // We apply the full screen transformation to opened windows
        allWindows.filter((window) => {
          return this.openWindowIds.includes(window.browserWindowId);
        }).forEach((window) => {
          let browserWindow = BrowserWindow.fromId(parseInt(window.browserWindowId));

          if (!browserWindow) {
            return;
          }

          this.setWindowMode({
            isFullScreen: window.visibility && window.visibility.isFullScreen,
            maximized: window.visibility && window.visibility.maximized
          }, browserWindow);

          browserWindow.show();
        });
      })
      .catch((e) => {
        pm.logger.error('WindowManager - Error in showing windows from db', e);

        // show windows even if there was an error,
        // skip setting window mode for now
        for (let i = 0; i < this.openWindowIds.length; i++) {
          let openWindow = BrowserWindow.fromId(parseInt(this.openWindowIds[i]));
          openWindow && openWindow.show();
        }
      });
  },

  getSharedWindow () {
    let windows = BrowserWindow.getAllWindows(),
        sharedWindow = _.find(windows, ['type', 'shared']);

    return sharedWindow;
  },

  sendCustomInternalEvent (action, object) {
    var message = {
      name: 'internalEvent',
      data: {
        event: action,
        object: object
      }
    };
    var bWindow = BrowserWindow.getFocusedWindow();
    if (!bWindow) {
      return;
    }
    bWindow.webContents.send('electronWindowMessage', message);
  },

  sendToFirstWindow (message) {
    var numWindowsLeft = this.openWindowIds.length;
    for (var i = 0; i < numWindowsLeft; i++) {
      var bWindow = BrowserWindow.fromId(parseInt(this.openWindowIds[i]));
      if (!bWindow) {
        continue;
      }
      bWindow.webContents.send('electronWindowMessage', message);
      return;
    }
  },

  sendToAllWindows (message) {
    // send event to all other windows
    var numWindowsLeft = 0;
    let openWindowIds = _.compact(this.openWindowIds);
    if (openWindowIds && openWindowIds.length) {
      numWindowsLeft = openWindowIds.length;
    }

    for (var i = 0; i < numWindowsLeft; i++) {
      var bWindow = BrowserWindow.fromId(parseInt(openWindowIds[i]));
      if (!bWindow) {
        continue;
      }
      bWindow.webContents.send('electronWindowMessage', message);
    }
  },

  sendInternalMessage (message) {
    this.sendToAllWindows({
      name: 'internalEvent',
      data: message
    });
  },

  hasExtension (extensionName) {
    return BrowserWindow.getDevToolsExtensions().hasOwnProperty(extensionName);
  },

  attachDevToolsExtensions () {
    if (process.env.PM_BUILD_ENV !== 'development') {
      return;
    }

    // Don't move this to the top,
    // This should be required only in development mode.
    // This package is not bundled in production build.
    var { default: installExtension, REACT_DEVELOPER_TOOLS, MOBX_DEVTOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');

    // Just include more extensions above and append them to the array to attach other available extensions
    [REACT_DEVELOPER_TOOLS, MOBX_DEVTOOLS, REDUX_DEVTOOLS].forEach((extension) => {
      installExtension(extension)
        .then((name) => pm.logger.info(`WindowManager~attachDevToolsExtension: Added DevTools Extension: ${name}`))
        .catch((err) => pm.logger.warn('WindowManager~attachDevToolsExtension: An error occurred while adding DevTools extension: ', err));
    });

    try {
      if (!this.hasExtension('devtron')) {
        require('devtron').install();
      }
    }
    catch (e) {
      pm.logger.warn('WindowManager~attachDevToolsExtension: Adding devtron failed', e.message);
    }
  },

  getDefaultWindowState (windowName) {
    if (windowName === 'console') {
      return {
        center: true,
        height: 450,
        width: 950
      };
    }
    else {
      return {
        center: true,
        height: 800,
        width: 1280
      };
    }
  },

  loadWindowState (windowName, callback) {
    if (this.windowState[windowName]) {
      return callback(this.windowState[windowName]);
    }
    else {
      Storage.get(windowName, (error, lastWindowState) => {
        if (error) { pm.logger.error('WindowManager~loadWindowState - Failed to load window state: ' + windowName); }
        return callback(error || _.isEmpty(lastWindowState) ? this.getDefaultWindowState(windowName) : lastWindowState);
      });
    }
  },

  saveWindowState (windowName, callback) {
    Storage.set(windowName, this.windowState[windowName], (error) => {
      if (error) { pm.logger.error('WindowManager~loadWindowState - Failed to store window state: ' + windowName); }
      return callback && callback();
    });
  },

  newRequesterOpened () {
    if (this.listenForRequesterWindow && this.initUrl && this.initWindowId) {

      let channel = this.eventBus.channel('protocol-handler');
      channel.publish({
        url: this.initUrl,
        windowId: this.initWindowId
      });

      this.initUrl = this.initWindowId = this.listenForRequesterWindow = null;
    }
  },

  quitApp () {
    app.quit();
  },

  getWindowPref (title) {
    return {
      title: title,
      backgroundColor: '#E8E0CB',
      webPreferences: {
        webSecurity: false,
        backgroundThrottling: false,
        partition: SHELL_PARTITION_NAME
      },
      icon: path.resolve(app.getAppPath(), 'assets/icon.png')
    };
  },

  setWindowMode (windowState, activeWindow) {
    if (windowState.isFullScreen) { activeWindow.setFullScreen(true); }
    else if (windowState.maximized) {
      activeWindow.maximize();
    }
  },

  newSharedWindow () {
    let startTime = Date.now(),
        window = new BrowserWindow(Object.assign(
        this.getWindowPref('Shared'), {
          width: 0,
          height: 0,
          show: false
        }
      ));

    window.loadURL(this.getWebviewPath());
    window.webContents.on('dom-ready', () => {
      pm.logger.info('window-manager~newSharedWindow: Shell loaded');
      window.webContents.send('shared-loaded');
      window.webContents.send('shell-loaded', {
        id: window.id,
        type: 'shared',
        startTime,
        devtools: _.includes(devtools, 'shared')
      });
    });

    window.windowName = 'shared';
    window.type = 'shared';

    // special handling for shared window to keep it alive always
    window.on('close', function (e) {
      if (app.quittingApp) {
        return;
      }

      if (window.isVisible()) {
        pm.logger.warn('WindowManager~newSharedWindow - shared.close blocked');
        e.preventDefault();
        window.hide();
      }
    });

    window.on('show', function () {
      if (app.quittingApp) {
        return;
      }
      pm.logger.warn('WindowManager~newSharedWindow: shared window shown. hiding.');
      window.hide();
    });

    return window;
  },

  sanitizeBounds (bounds) {
    if (_.isUndefined(bounds.x) || _.isUndefined(bounds.y)) {
      return {
        x: null,
        y: null
      };
    }

    let screen = electron.screen,
      nearestDisplay = screen.getDisplayNearestPoint({ x: bounds.x, y: bounds.y });

    let isWindowVisible = (
      (bounds.x >= nearestDisplay.bounds.x && bounds.x <= nearestDisplay.bounds.x + nearestDisplay.bounds.width) &&
      (bounds.y >= nearestDisplay.bounds.y && bounds.y <= nearestDisplay.bounds.y + nearestDisplay.bounds.height)
    );

    if (!isWindowVisible) {
      return {
        // APPSDK-34 - return nearest display x,y instead of null, so that in multi monitor it returns the x,y of the
        // nearest display rather than null which results in the app opening in the default monitor ignoring where it
        // was last closed.
        x: nearestDisplay.bounds.x,
        y: nearestDisplay.bounds.y
      };
    }

    return bounds;
  },

  getOpenWindows (type) {
    return WindowController
      .getAll({ type })
      .then((allTypeWindows) => {
        let allTypeWindowIds = _.map(allTypeWindows, (window) => window.browserWindowId),
            openWindowIds = this.openWindowIds,
            allOpenTypeWindows = _.intersection(openWindowIds, allTypeWindowIds);
        return allOpenTypeWindows;
      });
  },

  createOrRestoreRequesterWindow () {
    return this
      .getOpenWindows('requester')
      .then((allOpenRequesterWindows) => {
        if (_.isEmpty(allOpenRequesterWindows)) {
          // If no requester windows are open, there will be only one requester window in the Window table
          // Restore that.
          return WindowController
            .getAll({ type: 'requester' })
            .then((allRequesterWindows) => {
              if (_.size(allRequesterWindows) === 1) {
                return this.newRequesterWindow(allRequesterWindows[0]);
              }

              // Worst case. if there are more than one requester window in the DB, create a window normally
              return this.newRequesterWindow();
            });
        }
        else {
          // Create a new window normally
          return this.newRequesterWindow();
        }
      });
  },

  newRequesterWindow (window = {}, params = {}) {
    let startTime = Date.now(),
        windowName = 'requester',
        sanitizedBounds = this.sanitizeBounds({
          x: _.get(window, 'position.x'),
          y: _.get(window, 'position.y')
        });

    if (!global.isSharedBooted) {
      pm.logger.warn('WindowManager~newRequesterWindow - Bailing requester window creation as shared is not booted!');
      return;
    }

    let mainWindow = new BrowserWindow(Object.assign(
      this.getWindowPref('Postman'),
      {
        width: _.get(window, 'size.width', 1280),
        height: _.get(window, 'size.height', 800),
        x: sanitizedBounds.x,
        y: sanitizedBounds.y,
        center: !window.position,
        show: this.isWindowVisibleByDefault
      }
    ));

    this.windowState[windowName] = window;

    // We do not want to apply fullScreen flag for windows created in hidden mode
    // since applying it will make these windows visible. Instead, We will apply this flag later
    // (after the auth window is closed) when we want to show these windows.
    this.isWindowVisibleByDefault && this.setWindowMode({
      isFullScreen: window.visibility && window.visibility.isFullScreen,
      maximized: window.visibility && window.visibility.maximized
    }, mainWindow);

    this.attachDevToolsExtensions(mainWindow);

    if (!this.openWindowIds.length) {
      this.primaryId = mainWindow.id;
    } // this is the only window. make it primary
    this.openWindowIds.push(mainWindow.id);

    let windowId = window.id || uuidV4();

    mainWindow.webContents.on('dom-ready', () => {
      mainWindow.webContents.setVisualZoomLevelLimits(1, 1);
      mainWindow.webContents.send('shell-loaded', {
        id: mainWindow.id,
        type: 'requester',
        startTime,
        devtools: _.includes(devtools, 'requester'),
        primaryId: this.primaryId,
        allIds: this.openWindowIds
      });
      if (this.initUrl) {
        this.listenForRequesterWindow = true;
        this.initWindowId = windowId;
      }
    });

    let windowParams = [{
      type: 'requester',
      id: windowId,
      browserWindowId: mainWindow.id,
      activeSession: window.activeSession || '',
      position: window.position || {},
      size: window.size || { width: 1280, height: 800 },
      visibility: window.visibility || { maximized: false, isFullScreen: false }
    }, {
      id: windowId,
      session: {
        id: window.activeSession,
        workspace: params.workspace
      }
    }];

    mainWindow.windowName = windowName;
    mainWindow.type = 'requester';
    mainWindow.params = windowParams;

    Promise.resolve()
      .then(() => {
        if (window.id) {
          // Checking if the window to restore actually does exist in DB Or not before updating.
          // This makes sure that when the window starts booting, a record always exists in the DB
          return WindowController.get({ id: window.id });
        }
        return;
      })
      .then((dbWindow) => {
        if (dbWindow) {
          // Restoring
          return WindowController
            .update({
              id: window.id,
              browserWindowId: mainWindow.id
            });
        }
        else {
          // Not restoring
          return WindowController
            .create.apply(WindowController, windowParams);
        }
      })
      .then(() => {
        mainWindow.loadURL(this.getWebviewPath());
      })
      .catch((e) => {
        pm.logger.error('WindowManager~newRequesterWindow - Error in loading window from db', e);
      });

    this.addListeners(mainWindow);

    this.sendInternalMessage({
      event: 'pmWindowOpened',
      object: mainWindow.id
    });
    return mainWindow;
  },

  newLoaderWindow () {
    if (this.loaderWindowId) {
      let window = BrowserWindow.fromId(parseInt(this.loaderWindowId));
      if (window) {
        window.show();
        window.restore();
        return;
      }
    }

    let window = new BrowserWindow(Object.assign({
        title: 'Postman',
        width: 400,
        height: 400,
        backgroundColor: '#E8E0CB',
        frame: false,
        show: this.isWindowVisibleByDefault,
        icon: path.resolve(app.getAppPath(), 'assets/icon.png')
      })),
      windowId = window.id;
    this.openWindowIds.push(windowId);
    this.loaderWindowId = windowId;
    window.loadURL(this.loaderWindowPath);
    _.includes(devtools, 'loader') && window.openDevTools({ mode: 'detach' });

    window.webContents.on('dom-ready', () => {
      window.webContents.setVisualZoomLevelLimits(1, 1);
    });

    return window;
  },

  closeLoaderWindow () {
    if (!this.loaderWindowId) {
      return;
    }
    let window = BrowserWindow.fromId(parseInt(this.loaderWindowId));
    if (window) {
      this.removeWindowId(this.loaderWindowId);
      this.loaderWindowId = null;
      window.destroy();
    }
  },

  newRunnerWindow (window = {}, params = {}) {
    let startTime = Date.now(),
        windowName = 'runner',
        sanitizedBounds = this.sanitizeBounds({
          x: _.get(window, 'position.x'),
          y: _.get(window, 'position.y')
        });

    if (!global.isSharedBooted) {
      pm.logger.warn('WindowManager~newRunnerWindow - Bailing requester window creation as shared is not booted!');
      return;
    }

    let mainWindow = new BrowserWindow(Object.assign(
      this.getWindowPref('Collection Runner'),
      {
        width: _.get(window, 'size.width', 1280),
        height: _.get(window, 'size.height', 800),
        x: sanitizedBounds.x,
        y: sanitizedBounds.y,
        center: !window.position,
        show: this.isWindowVisibleByDefault
      }
    ));

    this.windowState[windowName] = window;

    // We do not want to apply fullScreen flag for windows created in hidden mode
    // since applying it will make these windows visible. Instead, We will apply this flag later
    // (after the auth window is closed) when we want to show these windows.
    this.isWindowVisibleByDefault && this.setWindowMode({
      isFullScreen: window.visibility && window.visibility.isFullScreen,
      maximized: window.visibility && window.visibility.maximized
    }, mainWindow);

    mainWindow.webContents.on('dom-ready', () => {
      mainWindow.webContents.setVisualZoomLevelLimits(1, 1);
      mainWindow.webContents.send('shell-loaded', {
        id: mainWindow.id,
        type: 'runner',
        startTime,
        devtools: _.includes(devtools, 'runner')
      });
    });

    let windowId = window.id || uuidV4();
    let windowParams = [{
      type: 'runner',
      id: windowId,
      browserWindowId: mainWindow.id,
      activeSession: window.activeSession || '',
      position: window.position || {},
      size: window.size || { width: 1280, height: 800 },
      visibility: window.visibility || { maximized: false, isFullScreen: false }
    }, {
      session: {
        id: window.activeSession,
        workspace: params.workspace,
        state: {
          collection: params.collection,
          folder: params.folder,
          environment: params.environment
        }
      }
    }];

    mainWindow.windowName = windowName;
    mainWindow.type = 'runner';
    mainWindow.params = windowParams;

    Promise.resolve()
      .then(() => {
        if (window.id) {
          // Checking if the window to restore actually does exist in DB Or not before updating.
          // This makes sure that when the window starts booting, a record always exists in the DB
          return WindowController.get({ id: window.id });
        }
        return;
      })
      .then((dbWindow) => {
        if (dbWindow) {
          // Restoring
          return WindowController
            .update({
              id: window.id,
              browserWindowId: mainWindow.id
            });
        }
        else {
          // Not restoring
          return WindowController
            .create.apply(WindowController, windowParams);
        }
      })
      .then(() => {
        mainWindow.loadURL(this.getWebviewPath());
      })
      .catch((e) => {
        pm.logger.error('WindowManager~newRunnerWindow - Error in loading window from db', e);
      });

    this.openWindowIds.push(mainWindow.id);
    this.addListeners(mainWindow);
  },

  newConsoleWindow (window = {}, params = {}) {
    let startTime = Date.now(),
        windowName = 'console',
        sanitizedBounds = this.sanitizeBounds({
          x: _.get(window, 'position.x'),
          y: _.get(window, 'position.y')
        });

    if (!global.isSharedBooted) {
      pm.logger.warn('WindowManager~newConsoleWindow - Bailing requester window creation as shared is not booted!');
      return;
    }

    if (!this.consoleWindowId) {
      let mainWindow = new BrowserWindow(Object.assign(
        this.getWindowPref('Postman Console'),
        {
          width: _.get(window, 'size.width', 900),
          height: _.get(window, 'size.height', 600),
          x: sanitizedBounds.x,
          y: sanitizedBounds.y,
          center: !window.position,
          show: this.isWindowVisibleByDefault
        }
      ));

      this.windowState[windowName] = window;

      // We do not want to apply fullScreen flag for windows created in hidden mode
      // since applying it will make these windows visible. Instead, We will apply this flag later
      // (after the auth window is closed) when we want to show these windows.
      this.isWindowVisibleByDefault && this.setWindowMode({
        isFullScreen: window.visibility && window.visibility.isFullScreen,
        maximized: window.visibility && window.visibility.maximized
      }, mainWindow);

      this.consoleWindowId = mainWindow.id;
      this.openWindowIds.push(this.consoleWindowId);

      mainWindow.webContents.on('dom-ready', () => {
        mainWindow.webContents.setVisualZoomLevelLimits(1, 1);
        mainWindow.webContents.send('shell-loaded', {
          id: mainWindow.id,
          type: 'console',
          startTime,
          devtools: _.includes(devtools, 'console')
        });
      });

      let windowId = window.id || uuidV4();
      let windowParams = [{
        type: 'console',
        id: windowId,
        browserWindowId: mainWindow.id,
        activeSession: window.activeSession || '',
        position: window.position || {},
        size: window.size || { width: 900, height: 600 },
        visibility: window.visibility || { maximized: false, isFullScreen: false }
      }, {
        id: windowId,
        session: { id: window.activeSession }
      }];

      mainWindow.windowName = windowName;
      mainWindow.type = 'console';
      mainWindow.params = windowParams;

      Promise.resolve()
      .then(() => {
        if (window.id) {
          // Checking if the window to restore actually does exist in DB Or not before updating.
          // This makes sure that when the window starts booting, a record always exists in the DB
          return WindowController.get({ id: window.id });
        }
        return;
      })
      .then((dbWindow) => {
        if (dbWindow) {
          // Restoring
          return WindowController
            .update({
              id: window.id,
              browserWindowId: mainWindow.id
            });
        }
        else {
          // Not restoring
          return WindowController
            .create.apply(WindowController, windowParams);
        }
      })
      .then(() => {
        mainWindow.loadURL(this.getWebviewPath());
      })
      .catch((e) => {
        pm.logger.error('WindowManager~newConsoleWindow - Error in loading console window from db', e);
      });

      // Reset console ID when 'closed' is emitted.
      // 'close' not used as it is not emitted when destroy() is called.
      // This makes sure console can be launched after switching accounts while it is open.
      // Github issue - https://github.com/postmanlabs/postman-app-support/issues/5409
      mainWindow.on('closed', () => {
        if (this.consoleWindowId) {
          this.consoleWindowId = null;
        }
      });

      this.addListeners(mainWindow);
    }
    else {
      let consoleWindow = BrowserWindow.fromId(parseInt(this.consoleWindowId));
      if (!consoleWindow) {
        return;
      }
      consoleWindow.show();
      consoleWindow.restore();
    }
  },

  addListeners (activeWindow) {
    activeWindow.on('close', this.closedHandler);
    activeWindow.on('move', this.debouncedStateChangeHandler);
    activeWindow.on('resize', this.debouncedStateChangeHandler);
    activeWindow.on('restore', this.windowBoundsHandler);
  },

  updateWindowState (windowName, activeWindow) {
    const bounds = activeWindow.getBounds();
    this.windowState[windowName] = {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
      maximized: activeWindow.isMaximized(),
      isFullScreen: activeWindow.isFullScreen()
    };
  },

  stateChangeHandler (e) {
    const activeWindow = e.sender;

    if (!activeWindow || activeWindow.isDestroyed()) {
      return Promise.resolve();
    }

    const bounds = activeWindow.getBounds();

    this.updateWindowState(activeWindow.windowName, e.sender);
    this.saveWindowState(activeWindow.windowName);

    return WindowController.get({ browserWindowId: activeWindow.id })
      .then((window) => {
        WindowController.update({
          id: window.id,
          position: {
            x: bounds.x,
            y: bounds.y
          },
          size: {
            width: bounds.width,
            height: bounds.height
          },
          visibility: {
            maximized: activeWindow.isMaximized(),
            isFullScreen: activeWindow.isFullScreen()
          }
        });
      });
  },

  deleteWindowFromDB (browserWindow) {
    let windowType = browserWindow.type,
        windowId = browserWindow.id;
    if (windowType !== 'requester') {
      return WindowController
        .get({ browserWindowId: browserWindow.id })
        .then((closedWindow) => {
          return WindowController.delete({ id: closedWindow.id });
        });
    }
    else {
      return WindowController
        .count({ type: 'requester' })
        .then((requesterWindowCount) => {
          if (requesterWindowCount > 1) {
            return WindowController
              .get({ browserWindowId: windowId })
              .then((window) => {
                return WindowController.delete({ id: window.id });
              });
          }

          return;
        });
    }
  },

  closedHandler (e) {
    if (app.quittingApp) {
      // Windows are being closed because the app was quit, don't try to
      // delete window records
      return;
    }

    let window = e.sender,
        windowId = window.id;

    pm.logger.info(`WindowManager~closeHandler - Closed Window (id: ${windowId} )`);

    this.removeListeners(window);
    this.removeWindowId(windowId);

    this.deleteWindowFromDB(window)
      .then(() => {
        // If there are no more open windows, quit the app on Windows & Linux
        if (process.platform != 'darwin' && _.isEmpty(this.openWindowIds)) {
          app.quit();
        }
      })
      .catch(() => {
        // If there are no more open windows, quit the app on Windows & Linux
        if (process.platform != 'darwin' && _.isEmpty(this.openWindowIds)) {
          app.quit();
        }
      });
  },

  removeListeners (activeWindow) {
    activeWindow.removeListener('close', this.closedHandler);
    activeWindow.removeListener('resize', this.debouncedStateChangeHandler);
    activeWindow.removeListener('move', this.debouncedStateChangeHandler);
    activeWindow.removeListener('restore', this.windowBoundsHandler);
  },

  getFirstRequesterWindow () {
    return WindowController
      .getAll({ type: 'requester' })
      .then((allRequesterWindows) => {
        let requesterWindowIds = _.map(allRequesterWindows, (window) => window.browserWindowId),
            openWindowIds = this.openWindowIds,
            openRequesterWindows = _.intersection(openWindowIds, requesterWindowIds);

        if (openRequesterWindows.length) {
          return _.find(allRequesterWindows, (window) => window.browserWindowId === openRequesterWindows[0]);
        }
        return;
      });
  },

  openUrl (url) {
    this.getFirstRequesterWindow()
        .then((window) => {
          if (window) {
            let channel = this.eventBus.channel('protocol-handler');
            channel.publish({
              url,
              windowId: window.id
            });

            var bWindow = BrowserWindow.fromId(window.browserWindowId);
            if (bWindow) {
              bWindow.show();
              bWindow.restore();
            }

            this.initUrl = null;
          }
          else {
            // Open a new window
            this.initUrl = url;
            this.createOrRestoreRequesterWindow();
          }
        });
  },

  removeWindowId (windowId) {
    // remove windowId from openWindowIds
    var index = this.openWindowIds.indexOf(windowId);

    if (index !== -1) {
      this.openWindowIds.splice(index, 1);
    }
  },

  openCustomURL (url) {
    shell.openExternal(url);
  },

  hasOpenWindows () {
    return !_.isEmpty(BrowserWindow.getAllWindows());
  },

  restoreWindows () {
    let lastWindow;
    return WindowController.getAll({})
      .then((allWindows) => {
        let allWindowIds = _.map(allWindows, (window) => window.id),
            windowsToRestore = _.slice(allWindows, 0, MAX_WINDOW_RESTORE_COUNT),
            windowsToRestoreIds = _.slice(allWindowIds, 0, MAX_WINDOW_RESTORE_COUNT),
            idsToDelete = _.differenceWith(allWindowIds, windowsToRestoreIds);

        if (_.isEmpty(idsToDelete)) {
          return windowsToRestore;
        }
        return WindowController
          .delete({ id: idsToDelete })
          .then(() => {
            return windowsToRestore;
          });
      })
      .then((allWindows) => {
        if (_.isEmpty(allWindows)) {
          return Promise.resolve(this.newRequesterWindow());
        }
        else {
          _.each(allWindows, (window) => {
            switch (window.type) {
              case 'requester':
                lastWindow = this.newRequesterWindow(window);
                break;
              case 'runner':
                this.newRunnerWindow(window);
                break;
              case 'console':
                this.newConsoleWindow(window);
                break;
            }
          });
        }

        if (!lastWindow) {
          return Promise.resolve(this.newRequesterWindow());
        }

        return Promise.resolve(lastWindow);
      });
  },

  closeAllWindows () {
    _.each(this.openWindowIds, (windowId) => {
      let window = BrowserWindow.fromId(parseInt(windowId));
      window && this.removeListeners(window);
      window && window.destroy();
    });

    this.openWindowIds = [];

    /**
     * Earlier there was a windowController.delete() which used to wipe out the complete window file,
     * so on restore actions it never used to find any window and would open a new one.
     * Case where user does a add new account, cancels that operation and clicks take me back to signed in account
     *
     * Also, when the shared process is booted that calls windowManager.restoreWindows, which keeps the
     * MAX_WINDOW_RESTORE_COUNT number of windows and clears the rest of them. Hence clean up is done on
     * every shared booted.
     */
  },

  /**
   * This function handles the case when the position at which the window is to be restored is outside
   * the bounds of the current display configuration. This causes the bug where the app is loaded off-screen.
   * If this case arises, this function displays the window on the primary display.
   *
   * NOTE: This function is triggered by the 'restore' event emitted by the window on being restored from a minimized state.
   * The 'show' event would have been more appropriate but 'restore' is used because the 'show' event is inconsistent
   * across different platforms. So it would have worked well on macOS but not on Windows and Linux.
   *
   * Electron issue - https://github.com/electron/electron/issues/8664
   */
  windowBoundsHandler (e) {
    let window = e.sender;
    if (!window) {
      return;
    }

    let primaryDisplay = electron.screen.getPrimaryDisplay(),
        sanitizedBounds = this.sanitizeBounds({ x: window.getBounds().x, y: window.getBounds().y }),
        finalBounds = { x: sanitizedBounds && sanitizedBounds.x,
                        y: sanitizedBounds && sanitizedBounds.y,
                        width: window.getBounds().width,
                        height: window.getBounds().height
                      };

    // Case where the sanitized bounds returns null i.e. the bounds were outside the current display
    if (_.isNull(finalBounds.x) || _.isNull(finalBounds.y)) {
      finalBounds = primaryDisplay.bounds;
    }

    window.setBounds(finalBounds);

  },

  /**
   * Function to bring the requester window in focus
   *
   * If no requester window is open, a new requester window is opened with state of the last closed requester window
   * else the existing requester window in brought in focus
   */
  focusRequesterWindow () {
    let window;
    return this.getOpenWindows('requester')
      .then((allOpenRequesterWindows) => {
        if (_.isEmpty(allOpenRequesterWindows)) {
          return WindowController.getAll({ type: 'requester' })
            .then((allRequesterWindows) => {
              if (!_.isEmpty(allRequesterWindows)) {
                window = this.newRequesterWindow(allRequesterWindows[0]);
              }
              if (!window) {
                return Promise.reject(new Error('windowManager~focusRequesterWindow: Unable to restore the last closed requester window'));
              }
              return window;
            });
        }
        else {
          window = BrowserWindow.fromId(allOpenRequesterWindows[0]);
          if (!window) {
            return Promise.reject(new Error('windowManager~focusRequesterWindow: Unable to focus the existing requester window'));
          }
          if (window.isMinimized()) { window.restore(); }
          window.focus();
          return window;
        }
      });
  }
};
