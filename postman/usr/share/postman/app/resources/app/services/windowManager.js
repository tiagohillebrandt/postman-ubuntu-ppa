var electron = require('electron'),
  url = require('url'),
  path = require('path'),
  Storage = require('electron-json-storage'),
  app = electron.app,
  shell = electron.shell,
  BrowserWindow = electron.BrowserWindow,
  WindowController = require('../common/controllers/WindowController'),
  uuidV4 = require('uuid/v4'),
  _ = require('lodash').noConflict();

const SHELL_PARTITION_NAME = 'persist:postman_shell';
const MAX_WINDOW_RESTORE_COUNT = 4;

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
      this.webViewPath = url.format({ protocol: 'file', pathname: shellPath });
      this.loaderWindowPath = url.format({ protocol: 'file', pathname: loaderPath });
    }
    else {
      this.webViewPath = 'http://localhost:8777/build/html/shell.html';
      this.loaderWindowPath = 'http://localhost:8777/build/html/loader.html';
    }
    this.closedHandler = this.closedHandler.bind(this);
    this.debouncedStateChangeHandler = _.debounce(this.stateChangeHandler.bind(this), 100);
  },

  hideAllWindows () {
    this.isWindowVisibleByDefault = false;

    for (let i = 0; i < this.openWindowIds.length; i++) {
      let openWindow = BrowserWindow.fromId(parseInt(this.openWindowIds[i]));
      openWindow && openWindow.hide();
    }
  },

  showAllWindows () {
    this.isWindowVisibleByDefault = true;

    for (let i = 0; i < this.openWindowIds.length; i++) {
      let openWindow = BrowserWindow.fromId(parseInt(this.openWindowIds[i]));
      openWindow && openWindow.show();
    }
  },

  getSharedWindow () {
    let windows = BrowserWindow.getAllWindows(),
        sharedWindow = _.find(windows, ['type', 'shared']);

    if (!sharedWindow) {
      console.warn('Shared window not present!');
    }

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
    var { default: installExtension, REACT_DEVELOPER_TOOLS, MOBX_DEVTOOLS } = require('electron-devtools-installer');

    // Just include more extensions above and append them to the array to attach other available extensions
    [REACT_DEVELOPER_TOOLS, MOBX_DEVTOOLS].forEach((extension) => {
      installExtension(extension)
        .then((name) => console.log(`Added DevTools Extension: ${name}`))
        .catch((err) => console.log('An error occurred while adding DevTools extension: ', err));
    });

    try {
      if (!this.hasExtension('devtron')) {
        require('devtron').install();
      }
    }
    catch (e) {
      console.error('Devtron DevTools Error: ', e.message);
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
        if (error) { console.error('Failed to load window state: ' + windowName); }
        return callback(error || _.isEmpty(lastWindowState) ? this.getDefaultWindowState(windowName) : lastWindowState);
      });
    }
  },

  saveWindowState (windowName, callback) {
    Storage.set(windowName, this.windowState[windowName], (error) => {
      if (error) { console.error('Failed to store window state: ' + windowName); }
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

    window.loadURL(this.webViewPath);
    window.webContents.on('dom-ready', () => {
      window.webContents.send('shared-loaded');
      window.webContents.send('shell-loaded', {
        id: window.id,
        type: 'shared',
        startTime
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
        console.log('shared.close blocked');
        e.preventDefault();
        window.hide();
      }
    });

    window.on('show', function () {
      if (app.quittingApp) {
        return;
      }
      console.log('shared window shown. hiding.');
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
        x: null,
        y: null
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
      console.log('WARN: Bailing requester window creation as shared is not booted!');
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

    this.setWindowMode({
      isFullScreen: window.isFullScreen,
      maximized: window.maximized
    }, mainWindow);

    this.attachDevToolsExtensions(mainWindow);

    if (!this.openWindowIds.length) {
      this.primaryId = mainWindow.id;
    } // this is the only window. make it primary
    this.openWindowIds.push(mainWindow.id);

    let windowId = window.id || uuidV4();

    mainWindow.webContents.on('dom-ready', () => {
      mainWindow.webContents.send('shell-loaded', {
        id: mainWindow.id,
        type: 'requester',
        primaryId: this.primaryId,
        allIds: this.openWindowIds,
        startTime
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
        mainWindow.loadURL(this.webViewPath);
      })
      .catch((e) => {
        console.log(e);
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
      console.log('WARN: Bailing requester window creation as shared is not booted!');
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

    this.setWindowMode({
      isFullScreen: window.isFullScreen,
      maximized: window.maximized
    }, mainWindow);

    mainWindow.webContents.on('dom-ready', () => {
      mainWindow.webContents.send('shell-loaded', {
        id: mainWindow.id,
        type: 'runner',
        startTime
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
        mainWindow.loadURL(this.webViewPath);
      })
      .catch((e) => {
        console.log(e);
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
      console.log('WARN: Bailing requester window creation as shared is not booted!');
      return;
    }

    if (!this.consoleWindowId) {
      let mainWindow = new BrowserWindow(Object.assign(
        this.getWindowPref('Postman Console'),
        {
          width: _.get(window, 'size.width', 1000),
          height: _.get(window, 'size.height', 400),
          x: sanitizedBounds.x,
          y: sanitizedBounds.y,
          center: !window.position,
          show: this.isWindowVisibleByDefault
        }
      ));

      this.windowState[windowName] = window;

      this.setWindowMode({
        isFullScreen: window.isFullScreen,
        maximized: window.maximized
      }, mainWindow);

      this.consoleWindowId = mainWindow.id;
      this.openWindowIds.push(this.consoleWindowId);

      mainWindow.webContents.on('dom-ready', () => {
        mainWindow.webContents.send('shell-loaded', {
          id: mainWindow.id,
          type: 'console',
          startTime
        });
      });

      let windowId = window.id || uuidV4();
      let windowParams = [{
        type: 'console',
        id: windowId,
        browserWindowId: mainWindow.id,
        activeSession: window.activeSession || '',
        position: window.position || {},
        size: window.size || { width: 1000, height: 400 },
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
        mainWindow.loadURL(this.webViewPath);
      })
      .catch((e) => {
        console.log(e);
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
          meta: {
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

    console.log('Closed Window (id: ' + windowId + ')');

    this.removeListeners(window);
    this.removeWindowId(windowId);
    if (this.consoleWindowId === windowId) {
      this.consoleWindowId = null;
    }

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

  forceCloseAllWindows () {
    _.each(this.openWindowIds, (windowId) => {
      window = BrowserWindow.fromId(parseInt(windowId));
      window && this.removeListeners(window);
      window && window.destroy();
    });

    this.openWindowIds = [];
    return WindowController
      .delete({});
  }
};
