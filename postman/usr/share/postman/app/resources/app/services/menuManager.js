var electron = require('electron'),
    app = electron.app,
    Menu = electron.Menu,
    MenuItem = electron.MenuItem,
    windowManager = require('./windowManager').windowManager,
    path = require('path'),
    _ = require('lodash').noConflict(),
    menuManager = {},
    os = require('os'),
    BrowserWindow = require('electron').BrowserWindow,
    appName = electron.app.getName(),
    APP_UPDATE = 'app-update',
    APP_UPDATE_EVENTS = 'app-update-events',
    CHECK_FOR_ELECTRON_UPDATE = 'checkForElectronUpdate',
    { createEvent } = require('../common/model-event'),
    { WORKSPACE_BUILDER, WORKSPACE_BROWSER, MODAL } = require('../common/constants/views'),

    // Documentation for registering menu actions can be found in App.js~registerMenuActions
    getOsxTopBarMenuTemplate = function () {
      return [{
        label: appName,
        submenu: [
          { role: 'about' },
          {
            label: 'Check for Updates...',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('checkElectronUpdates', null, options); }
          },
          { type: 'separator' },
          {
            label: 'Preferences',
            accelerator: 'CmdOrCtrl+,',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openSettings', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER, WORKSPACE_BROWSER] }, options); }
          },
          {
            role: 'services',
            submenu: []
          },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideothers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' }
        ]
      },
      {
        label: 'File',
        submenu: [
          {
            label: 'New...',
            accelerator: 'CmdOrCtrl+N',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCreateNewModal', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          {
            label: 'New Tab',
            accelerator: 'CmdOrCtrl+T',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          {
            label: 'New Postman Window',
            accelerator: 'CmdOrCtrl+Shift+N',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newWindow', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'New Runner Window',
            accelerator: 'CmdOrCtrl+Shift+R',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openRunner', { type: 'shortcut', isGlobal: true }, options); }
          },
          { type: 'separator' },
          {
            label: 'Import...',
            accelerator: 'CmdOrCtrl+O',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openImport', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          { type: 'separator' },
          {
            label: 'Close Window',
            accelerator: 'CmdOrCtrl+Shift+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('closeWindow', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Close Tab',
            accelerator: 'CmdOrCtrl+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('closeTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          {
            label: 'Force Close Tab',
            accelerator: 'CmdOrCtrl+Alt+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('forceCloseTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          }
        ]
      },
      {
        label: 'Edit',
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          {
            label: 'Paste and Match Style',
            accelerator: 'CmdOrCtrl+Shift+V',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('pasteAndMatch', { type: 'shortcut', isGlobal: true }, options); }
          },
          { role: 'delete' },
          { role: 'selectall' }
        ]
      },
      {
        label: 'View',
        submenu: [
          { role: 'togglefullscreen' },
          {
            label: 'Zoom In',
            accelerator: 'CmdOrCtrl+=',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('increaseZoom', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Zoom Out',
            accelerator: 'CmdOrCtrl+-',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('decreaseZoom', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Reset Zoom',
            accelerator: 'CmdOrCtrl+0',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('resetZoom', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Toggle Sidebar',
            accelerator: 'CmdOrCtrl+\\',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleSidebar', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          {
            label: 'Toggle Two-Pane View',
            accelerator: 'CmdOrCtrl+Alt+V',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleLayout', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          { type: 'separator' },
          {
            label: 'Show Postman Console',
            accelerator: 'CmdOrCtrl+Alt+C',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openConsole', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Developer',
            submenu: [
              {
                label: 'Show DevTools (Current View)',
                accelerator: (function () {
                  if (process.platform == 'darwin') {
                    return 'Alt+Command+I';
                  }
                  else {
                    return 'Ctrl+Shift+I';
                  }
                }()),
                click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleDevTools', { type: 'shortcut', isGlobal: true }, options); }
              },
              {
                label: 'Show DevTools (Current Shell)',
                click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleShellDevTools', null, options); }
              },
              { type: 'separator' },
              {
                label: 'Show DevTools (Shared)',
                click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleSharedDevTools', null, options); }
              },
              {
                label: 'Show DevTools (Shared Shell)',
                click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleSharedShellDevTools', null, options); }
              },
              { type: 'separator' },
              {
                label: 'View Logs in Finder',
                click: function () { menuManager.handleMenuAction('openLogsFolder'); }
              }
            ]
          }
        ]
      },
      {
        role: 'window',
        submenu: [
          { role: 'minimize' },
          { role: 'close' },
          { type: 'separator' },
          {
            label: 'Next Tab',
            accelerator: 'Command+Shift+]',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('nextTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          {
            label: 'Previous Tab',
            accelerator: 'Command+Shift+[',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('previousTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          { type: 'separator' },
          { role: 'front' }
        ]
      },
      {
        role: 'help',
        submenu: [
          {
            label: 'Documentation',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://www.getpostman.com/docs/', options); }
          },
          {
            label: 'GitHub',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://github.com/postmanlabs/postman-app-support/', options); }
          },
          {
            label: 'Twitter',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://twitter.com/postmanclient', options); }
          },
          {
            label: 'Support',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://getpostman.com/support', options); }
          }
        ]
      }];
    },
    getTopBarMenuTemplate = function () {
      return [{
        label: 'File',
        submenu: [
          {
            label: 'New...',
            accelerator: 'CmdOrCtrl+N',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCreateNewModal', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          {
            label: 'New Tab',
            accelerator: 'CmdOrCtrl+T',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          {
            label: 'New Postman Window',
            accelerator: 'CmdOrCtrl+Shift+N',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newWindow', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'New Runner Window',
            accelerator: 'CmdOrCtrl+Shift+R',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openRunner', { type: 'shortcut', isGlobal: true }, options); }
          },
          { type: 'separator' },
          {
            label: 'Import...',
            accelerator: 'CmdOrCtrl+O',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openImport', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          { type: 'separator' },
          {
            label: 'Settings',
            accelerator: 'CmdOrCtrl+,',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openSettings', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER, WORKSPACE_BROWSER] }, options); }
          },
          { type: 'separator' },
          {
            label: 'Close Window',
            accelerator: 'CmdOrCtrl+Shift+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('closeWindow', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Close Tab',
            accelerator: 'CmdOrCtrl+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('closeTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          {
            label: 'Force Close Tab',
            accelerator: 'CmdOrCtrl+Alt+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('forceCloseTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          { role: 'quit' }
        ]
      },
      {
        label: 'Edit',
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          { role: 'pasteandmatchstyle' },
          { role: 'delete' },
          { role: 'selectall' }
        ]
      },
      {
        label: 'View',
        submenu: [
          { role: 'togglefullscreen' },
          {
            label: 'Zoom In',
            accelerator: 'CmdOrCtrl+=',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('increaseZoom', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Zoom Out',
            accelerator: 'CmdOrCtrl+-',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('decreaseZoom', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Reset Zoom',
            accelerator: 'CmdOrCtrl+0',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('resetZoom', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Toggle Sidebar',
            accelerator: 'CmdOrCtrl+\\',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleSidebar', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          {
            label: 'Toggle Two-Pane View',
            accelerator: 'CmdOrCtrl+Alt+V',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleLayout', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          { type: 'separator' },
          {
            label: 'Next Tab',
            accelerator: 'CmdOrCtrl+Tab',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('nextTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          {
            label: 'Previous Tab',
            accelerator: 'CmdOrCtrl+Shift+Tab',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('previousTab', { type: 'shortcut', allowedViews: [WORKSPACE_BUILDER] }, options); }
          },
          { type: 'separator' },
          {
            label: 'Show Postman Console',
            accelerator: 'CmdOrCtrl+Alt+C',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openConsole', { type: 'shortcut', isGlobal: true }, options); }
          },
          {
            label: 'Developer',
            submenu: [
              {
                label: 'Show DevTools (Current View)',
                accelerator: (function () {
                  if (process.platform == 'darwin') {
                    return 'Alt+Command+I';
                  }
                  else {
                    return 'Ctrl+Shift+I';
                  }
                }()),
                click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleDevTools', { type: 'shortcut', isGlobal: true }, options); }
              },
              {
                label: 'Show DevTools (Current Shell)',
                click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleShellDevTools', null, options); }
              },
              { type: 'separator' },
              {
                label: 'Show DevTools (Shared)',
                click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleSharedDevTools', null, options); }
              },
              {
                label: 'Show DevTools (Shared Shell)',
                click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleSharedShellDevTools', null, options); }
              },
              { type: 'separator' },
              {
                label: process.platform === 'win32' ? 'View Logs in Explorer' : 'View Logs in File Manager',
                click: function () { menuManager.handleMenuAction('openLogsFolder'); }
              }
            ]
          }
        ]
      },

      /**
       * If current platform is linux and SNAP is running, removing the update flow
       */
      {
        label: 'Help',
        role: 'help',
        submenu: _.compact([
          app.isUpdateEnabled ? {
            label: 'Check for Updates',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('checkElectronUpdates', null, options); }
          } : null,
          app.isUpdateEnabled ?
          { type: 'separator' } : null,
          {
            label: 'Documentation',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://www.getpostman.com/docs/', options); }
          },
          {
            label: 'GitHub',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://github.com/postmanlabs/postman-app-support/', options); }
          },
          {
            label: 'Twitter',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://twitter.com/postmanclient', options); }
          },
          {
            label: 'Support',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCustomUrl', 'https://getpostman.com/support', options); }
          }
        ])
      }];
    },
    dockMenuTemplate = [
      {
        label: 'New Collection',
        click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newCollection', null, options); }
      },
      {
        label: 'New Window ',
        click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newWindow', null, options); }
      }
    ];
menuManager = {
  dockMenuTemplate: dockMenuTemplate,

  createMenu: function (shortcutsDisabled = false) {
    Menu.setApplicationMenu(
      Menu.buildFromTemplate(
        shortcutsDisabled ? this.removeShortcuts(this.getMenuBarTemplate()) : this.getMenuBarTemplate()
      )
    );
  },

  removeShortcuts: function (menu) {
    return _.map(menu, (menuItem) => {
      if (_.has(menuItem, 'submenu')) {
        _.set(menuItem, 'submenu', this.removeShortcuts(menuItem.submenu));
      }
      return _.omit(menuItem, ['accelerator']);
    });
  },

  getMenuBarTemplate: function () {
    var platform = os.platform();
    if (platform === 'darwin') {
      return getOsxTopBarMenuTemplate();
    }
    else {
      return getTopBarMenuTemplate();
    }
  },

  handleMenuAction: function (action, meta, options) {
    // If the menu action is a global action and is to be handled in the main process itself,
    // we put it inside this if condition so that it is carried out without checking any further constraints
    if (meta && meta.type === 'shortcut' && meta.isGlobal) {
      if (action === 'toggleDevTools') {
        let win = BrowserWindow.getFocusedWindow();
        win && win.webContents.send('shellMessage', { type: 'toggleDevTools' });
      }
      else if (action === 'newWindow') {
        windowManager.createOrRestoreRequesterWindow();
      }
      else if (action === 'openRunner') {
        windowManager.newRunnerWindow();
      }
      else if (action === 'openConsole') {
        windowManager.newConsoleWindow();
      }
      else if (action === 'closeWindow') {
        let win = BrowserWindow.getFocusedWindow();
        win && win.close();
      } else if (action === 'pasteAndMatch') {
        let focusedWebContents = electron.webContents && electron.webContents.getFocusedWebContents();
        focusedWebContents && focusedWebContents.pasteAndMatchStyle();
      }
    }

    if (action === 'toggleShellDevTools') {
      let win = BrowserWindow.getFocusedWindow();
      if (win) {
        let webContents = win.webContents;
        (!webContents.isDevToolsOpened()) && (webContents.toggleDevTools({ mode: 'detach' }));
      }
    }
    else if (action === 'toggleSharedDevTools') {
      let sharedWindow = windowManager.getSharedWindow();
      sharedWindow && sharedWindow.webContents.send('shellMessage', { type: 'toggleDevTools' })
        || pm.logger.warn('MenuManager~handleMenuAction: Shared window is not available while performing action:' + action);
    }
    else if (action === 'toggleSharedShellDevTools') {
      let sharedWindow = windowManager.getSharedWindow();
      if (sharedWindow) {
        let webContents = sharedWindow.webContents;
        (!webContents.isDevToolsOpened()) && (webContents.toggleDevTools({ mode: 'detach' }));
      } else {
        pm.logger.warn('MenuManager~handleMenuAction: Shared window is not available while performing action:' + action);
      }
    }
    else if (action === 'openCustomUrl') {
      windowManager.openCustomURL(meta);
    }
    else if (action === 'checkElectronUpdates') {
      let updaterEventBus = global.pm.eventBus.channel(APP_UPDATE_EVENTS);
      updaterEventBus.publish({ name: CHECK_FOR_ELECTRON_UPDATE, namespace: APP_UPDATE });
    }
    else if (action === 'openLogsFolder') {
      electron.shell.openItem(electron.app.logPath);
    }
    else {
      let win = BrowserWindow.getFocusedWindow();
      pm.eventBus.channel('menuActions').publish(createEvent(action, 'menuActions', { windowId: win && win.params[0].id }, [], meta));
    }
  }
};

exports.menuManager = menuManager;
