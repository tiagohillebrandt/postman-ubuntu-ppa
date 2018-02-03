var electron = require('electron'),
    Storage = require('electron-json-storage'),
    app = electron.app,
    shell = electron.shell,
    BrowserWindow = electron.BrowserWindow,
    path = require('path'),
    _ = require('lodash').noConflict();

const SHELL_PARTITION_NAME = 'persist:postman_shell';

exports.windowManager = {
  primaryId: '1',
  openWindowIds: [],
  requesterPath: null, // set in initialize()
  testRunnerPath: null, // set in initialize()
  initUrl: null,
  windowState: {},

  initialize () {
    if (process.env.PM_BUILD_ENV !== 'development') {
      this.requesterPath = 'file://' + __dirname + '/../html/requester.html';
      this.testRunnerPath = 'file://' + __dirname + '/../html/runner.html';
      this.testConsolePath = 'file://' + __dirname + '/../html/console.html';
      this.webViewPath = 'file://' + __dirname + '/../html/shell.html';
    }
    else {
      this.requesterPath = 'http://localhost:8777/build/html/requester.html';
      this.testRunnerPath = 'http://localhost:8777/build/html/runner.html';
      this.testConsolePath = 'http://localhost:8777/build/html/console.html';
      this.webViewPath = 'http://localhost:8777/build/html/shell.html';
    }
    this.closedHandler = this.closedHandler.bind(this);
    this.debouncedStateChangeHandler = _.debounce(this.stateChangeHandler.bind(this), 100);
  },

  focusFirstWindow () {
    const numWindowsLeft = this.openWindowIds.length;
    for (var i = 0; i < numWindowsLeft; i++) {
      var bWindow = BrowserWindow.fromId(parseInt(this.openWindowIds[i]));
      if (!bWindow) {
        continue;
      }
      bWindow.show();
      bWindow.restore();
      return;
    }
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
    if (this.openWindowIds && this.openWindowIds.length) {
      numWindowsLeft = this.openWindowIds.length;
    }

    for (var i = 0; i < numWindowsLeft; i++) {
      var bWindow = BrowserWindow.fromId(parseInt(this.openWindowIds[i]));
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

    try {
      if (!this.hasExtension('React Developer Tools')) {
        var reactDevToolsPath = path.resolve(
          app.getPath('appData'),
          'Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.7_0'
        );
        BrowserWindow.addDevToolsExtension(reactDevToolsPath);
      }
    }
    catch (e) {
      console.error('React Devtools Error: ', e.message, ', Path: ', reactDevToolsPath);
    }

    // try {
    //   var reduxDevToolsPath = path.resolve(
    //     app.getPath('appData'),
    //     'Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.5.0.1_0'
    //   );
    //   BrowserWindow.addDevToolsExtension(reduxDevToolsPath);
    // }
    // catch (e) {
    //   console.error('Redux Devtools Error: ', e.message, ', Path: ', reactDevToolsPath);
    // }

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
    if (this.listenForRequesterWindow) {
      var mainWindow = this.listenForRequesterWindow;
      mainWindow.webContents.send('electronWindowMessage', {
        name: 'protocolEventOnInit',
        data: this.initUrl
      });
      this.initUrl = null;
      this.listenForRequesterWindow = null;
    }
  },

  quitApp () {
    app.quiting = true;
    app.quit();
  },

  getWindowPref (title) {
    return {
      title: title,
      webPreferences: {
        webSecurity: false,
        backgroundThrottling: false,
        partition: SHELL_PARTITION_NAME
      },
      icon: app.getAppPath() + '/assets/icon.png'
    };
  },

  setWindowMode (windowState, activeWindow) {
    if (windowState.isFullScreen) { activeWindow.setFullScreen(true); }
    else if (windowState.maximized) {
      activeWindow.maximize();
    }
  },

  newRequesterWindow (id) {
    const windowName = 'requester';

    this.loadWindowState(windowName, (windowState) => {
      let mainWindow = new BrowserWindow(Object.assign(
          this.getWindowPref('Postman'),
          windowState
        )),
          mainWindowId = String(mainWindow.id);

      this.windowState[windowName] = windowState;

      this.setWindowMode(windowState, mainWindow);

      this.attachDevToolsExtensions(mainWindow);

      if (!this.openWindowIds.length) {
        this.primaryId = mainWindowId;
      } // this is the only window. make it primary
      this.openWindowIds.push(mainWindowId);

      mainWindow.loadURL(this.webViewPath);
      mainWindow.webContents.on('dom-ready', () => {
        mainWindow.webContents.send('shell-loaded', {
          id: String(mainWindowId),
          type: 'requester',
          primaryId: this.primaryId,
          allIds: this.openWindowIds
        });
        if (this.initUrl) {
          this.listenForRequesterWindow = mainWindow;
        }
      });

      mainWindow.windowName = windowName;
      mainWindow.mainWindowId = mainWindowId;

      /* Whent this event is fired we check if it is ok to quit the app when app window closes.
        MacOS doesn't quit the app even if you close all the open windows whereas on Windows the app needs
        to quit after last window is closed */
      mainWindow.on('close', (event) => {
        if (app.quiting || this.openWindowIds.indexOf(mainWindowId) === -1) {
          return;
        }
        event.preventDefault();
        if (process.platform !== 'win32') {
          this.sendInternalMessage({
            event: 'clearWindowStateAndQuit',
            object: mainWindowId + ''
          });
        }
        else {
          if (_.size(this.openWindowIds) === 1) {
            app.quiting = true;
            this.sendInternalMessage({ event: 'saveAllWindowState' });
          }
          else {
            this.sendInternalMessage({
              event: 'clearWindowStateAndQuit',
              object: mainWindowId + ''
            });
          }
        }
      });

      this.addListeners(mainWindow);

      this.sendInternalMessage({
        event: 'pmWindowOpened',
        object: String(mainWindowId)
      });
      return mainWindowId;
    });
  },

  closeRequesterWindow (windowId) {
    var bWindow = BrowserWindow.fromId(parseInt(windowId));
    if (bWindow) {
      this.removeWindowId(String(windowId));
      bWindow.close();
    }
    return;
  },

  newRunnerWindow (testAttr) {
    const windowName = 'runner';

    this.loadWindowState(windowName, (windowState) => {
      let mainWindow = new BrowserWindow(Object.assign(
          this.getWindowPref('Collection Runner'),
          windowState
        )),
          mainWindowId = String(mainWindow.id);

      this.windowState[windowName] = windowState;

      this.setWindowMode(windowState, mainWindow);

      mainWindow.loadURL(this.webViewPath);
      mainWindow.webContents.on('dom-ready', () => {
        console.log('Sending test runner', testAttr);
        mainWindow.webContents.send('shell-loaded', {
          id: String(mainWindow.id),
          type: 'runner',
          testAttr: testAttr
        });
      });

      this.openWindowIds.push(mainWindow.id);
      mainWindow.windowName = windowName;
      mainWindow.mainWindowId = mainWindowId;
      this.addListeners(mainWindow);
    });
  },

	                    newConsoleWindow () {
		                    const windowName = 'console';

		                    if (!this.consoleWindowId) {
			                    this.loadWindowState(windowName, (windowState) => {
				                    let mainWindow = new BrowserWindow(Object.assign(
						this.getWindowPref('Postman Console'),
						windowState
					));

					                    this.consoleWindowId = String(mainWindow.id);

                      this.setWindowMode(windowState, mainWindow);

                      this.windowState[windowName] = windowState;

                      mainWindow.loadURL(this.webViewPath);

                      mainWindow.webContents.on('dom-ready', () => {
                        mainWindow.webContents.send('shell-loaded', {
                          id: String(mainWindow.id),
                          type: 'console'
                        });
                      });

                      this.openWindowIds.push(this.consoleWindowId);

                      mainWindow.windowName = windowName;
                      mainWindow.mainWindowId = this.consoleWindowId;
                      this.addListeners(mainWindow);
                    });
                    }
		                    else {
                      console.log('console window : ' + this.consoleWindowId);
			                    let consoleWindow = BrowserWindow.fromId(parseInt(this.consoleWindowId));
			                    if (!consoleWindow) {
				                    return;
                    }
			                    consoleWindow.show();
			                    consoleWindow.restore();
                    }
                    },

  addListeners (activeWindow) {
    activeWindow.on('closed', this.closedHandler);
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
    this.updateWindowState(activeWindow.windowName, e.sender);
    this.saveWindowState(activeWindow.windowName);
  },

  closedHandler (e, windowName) {
    const activeWindow = e.sender;
    console.log('Closed Window (id: ' + activeWindow.mainWindowId + ')');
    this.windowClosed(activeWindow.mainWindowId, activeWindow.windowName);
    this.removeListeners(activeWindow);
  },

  removeListeners (activeWindow) {
    activeWindow.removeListener('closed', this.closedHandler);
    activeWindow.removeListener('resize', this.debouncedStateChangeHandler);
    activeWindow.removeListener('move', this.debouncedStateChangeHandler);
  },

  openUrl (url) {
    if (this.openWindowIds.length > 0) {
      this.sendToFirstWindow({
        name: 'internalEvent',
        data: {
          event: 'protocolEvent',
          object: this.initUrl
        }
      });
      this.focusFirstWindow();
      this.initUrl = null;
    }
  },

  removeWindowId (windowId) {
    // remove windowId from openWindowIds
    var index = this.openWindowIds.indexOf(windowId);
    if (index !== -1) {
      this.openWindowIds.splice(index, 1);
    }
  },

  windowClosed (windowId, windowName) {
    this.removeWindowId(windowId);

    // send event to all other windows
    this.sendToAllWindows({
      name: 'otherWindowClosed',
      data: {
        'id': windowId,
        'name': windowName
      }
    });

		                                        if (this.consoleWindowId === windowId) {
			                    this.consoleWindowId = null;
                                        }
  },

  openCustomURL (url) {
    shell.openExternal(url);
  },

  hasOpenWindows () {
    return !_.isEmpty(BrowserWindow.getAllWindows());
  }
};
