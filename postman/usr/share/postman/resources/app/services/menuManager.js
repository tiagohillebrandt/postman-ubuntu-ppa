var electron = require('electron'),
    Menu = electron.Menu,
    MenuItem = electron.MenuItem,
    windowManager = require('./windowManager').windowManager,
    path = require('path'),
    _ = require('lodash').noConflict(),
    menuManager = {},
    os = require('os'),
    BrowserWindow = require('electron').BrowserWindow,
    appName = electron.app.getName(),
    osxTopBarMenuTemplate = [
      {
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
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openSettings', null, options); }
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
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCreateNewModal', null, options); }
          },
          {
            label: 'New Tab',
            accelerator: 'CmdOrCtrl+T',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newTab', null, options); }
          },
          {
            label: 'New Postman Window',
            accelerator: 'CmdOrCtrl+Shift+N',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newWindow', null, options); }
          },
          {
            label: 'New Runner Window',
            accelerator: 'CmdOrCtrl+Shift+R',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openRunner', null, options); }
          },
          { type: 'separator' },
          {
            label: 'Import...',
            accelerator: 'CmdOrCtrl+O',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openImport', null, options); }
          },
          { type: 'separator' },
          {
            label: 'Close Window',
            accelerator: 'CmdOrCtrl+Shift+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('closeWindow', null, options); }
          },
          {
            label: 'Close Tab',
            accelerator: 'CmdOrCtrl+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('closeTab', null, options); }
          },
          {
            label: 'Force Close Tab',
            accelerator: 'CmdOrCtrl+Alt+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('forceCloseTab', null, options); }
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
          { role: 'pasteandmatchstyle' },
          { role: 'delete' },
          { role: 'selectall' }
        ]
      },
      {
        label: 'View',
        submenu: [
          {
            label: 'Reload',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('reloadWindow', null); }
          },
          { type: 'separator' },
          { role: 'togglefullscreen' },
          {
            label: 'Zoom In',
            accelerator: 'CmdOrCtrl+Plus',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('increaseZoom', null, options); }
          },
          {
            label: 'Zoom Out',
            accelerator: 'CmdOrCtrl+-',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('decreaseZoom', null, options); }
          },
          {
            label: 'Toggle Sidebar',
            accelerator: 'CmdOrCtrl+\\',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleSidebar', null, options); }
          },
          {
            label: 'Toggle Two-Pane View',
            accelerator: 'CmdOrCtrl+Alt+V',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleLayout', null, options); }
          },
          { type: 'separator' },
          {
            label: 'Show DevTools',
            accelerator: (function () {
              if (process.platform == 'darwin') {
                return 'Alt+Command+I';
              }
              else {
                return 'Ctrl+Shift+I';
              }
            }()),
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleDevTools', null, options); }
          },
          {
            label: 'Show Postman Console',
            accelerator: 'CmdOrCtrl+Alt+C',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openConsole', null, options); }
          }
        ]
      },
      {
        label: 'Collection',
        submenu: [{
          label: 'New Collection',
          click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newCollection', null, options); }
        },
        {
          label: 'Import',
          click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openImport', null, options); }
        },
        {
          label: 'Runner',
          click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openRunner', null, options); }
        }
        ]
      },
      {
        label: 'History',
        submenu: [
          { label: 'No history yet' }
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
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('nextTab', null, options); }
          },
          {
            label: 'Previous Tab',
            accelerator: 'Command+Shift+[',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('previousTab', null, options); }
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
      }
    ],
    topBarMenuTemplate = [
      {
        label: 'File',
        submenu: [
          {
            label: 'New...',
            accelerator: 'CmdOrCtrl+N',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openCreateNewModal', null, options); }
          },
          {
            label: 'New Tab',
            accelerator: 'CmdOrCtrl+T',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newTab', null, options); }
          },
          {
            label: 'New Postman Window',
            accelerator: 'CmdOrCtrl+Shift+N',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newWindow', null, options); }
          },
          {
            label: 'New Runner Window',
            accelerator: 'CmdOrCtrl+Shift+R',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openRunner', null, options); }
          },
          { type: 'separator' },
          {
            label: 'Import...',
            accelerator: 'CmdOrCtrl+O',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openImport', null, options); }
          },
          { type: 'separator' },
          {
            label: 'Settings',
            accelerator: 'CmdOrCtrl+,',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openSettings', null, options); }
          },
          { type: 'separator' },
          {
            label: 'Close Window',
            accelerator: 'CmdOrCtrl+Shift+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('closeWindow', null, options); }
          },
          {
            label: 'Close Tab',
            accelerator: 'CmdOrCtrl+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('closeTab', null, options); }
          },
          {
            label: 'Force Close Tab',
            accelerator: 'CmdOrCtrl+Alt+W',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('forceCloseTab', null, options); }
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
          {
            label: 'Reload',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('reloadWindow', null, options); }
          },
          { role: 'togglefullscreen' },
          { type: 'separator' },
          {
            label: 'Zoom In',
            accelerator: 'CmdOrCtrl+=',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('increaseZoom', null, options); }
          },
          {
            label: 'Zoom Out',
            accelerator: 'CmdOrCtrl+-',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('decreaseZoom', null, options); }
          },
          {
            label: 'Toggle Sidebar',
            accelerator: 'CmdOrCtrl+\\',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleSidebar', null, options); }
          },
          {
            label: 'Toggle Two-Pane View',
            accelerator: 'CmdOrCtrl+Alt+V',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleLayout', null, options); }
          },
          { type: 'separator' },
          {
            label: 'Next Tab',
            accelerator: 'CmdOrCtrl+Tab',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('nextTab', null, options); }
          },
          {
            label: 'Previous Tab',
            accelerator: 'CmdOrCtrl+Shift+Tab',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('previousTab', null, options); }
          },
          { type: 'separator' },
          {
            label: 'Show DevTools',
            accelerator: (function () {
              if (process.platform == 'darwin') {
                return 'Alt+Command+I';
              }
              else {
                return 'Ctrl+Shift+I';
              }
            }()),
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('toggleDevTools', null, options); }
          },
          {
            label: 'Show Postman Console',
            accelerator: 'CmdOrCtrl+Alt+C',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openConsole', null, options); }
          }
        ]
      },
      {
        label: 'Collection',
        submenu: [{
          label: 'New Collection',
          click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('newCollection', null, options); }
        },
        {
          label: 'Import',
          click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openImport', null, options); }
        },
        {
          label: 'Runner',
          click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('openRunner', null, options); }
        }
        ]
      },
      {
        label: 'History',
        submenu: [
          { label: 'No history yet' }
        ]
      },
      {
        label: 'Help',
        role: 'help',
        submenu: [
          {
            label: 'Check for Updates',
            click: function (menuItem, browserWindow, options) { menuManager.handleMenuAction('checkElectronUpdates', null, options); }
          },
          { type: 'separator' },
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
      }
    ],
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

  createMenu: function () {
    Menu.setApplicationMenu(
      Menu.buildFromTemplate(
        this.getMenuBarTemplate()
      )
    );
  },

  getMenuBarTemplate: function () {
    var platform = os.platform();
    if (platform === 'darwin') {
      return osxTopBarMenuTemplate;
    }
    else {
      return topBarMenuTemplate;
    }
  },

  appendHistory: function (items) {
    var menuTemplate = this.getMenuBarTemplate();
    var templateWithoutHistory = _.filter(menuTemplate, function (item) {
      return item.label !== 'History';
    });

    var collectionPosition = _.findIndex(menuTemplate, function (item) {
      return item.label === 'Collection';
    });

    var historySubmenu = _.map(items, function (item) {
      return {
        label: item.method + '  ' + item.url,
        click: function () { menuManager.handleMenuAction('loadHistoryRequest', { requestId: item.id }); }
      };
    });

    templateWithoutHistory.splice(collectionPosition + 1, 0, {
      label: 'History',
      submenu: historySubmenu
    });

    var menu = Menu.buildFromTemplate(templateWithoutHistory);
    Menu.setApplicationMenu(menu);
  },

  handleMenuAction: function (action, meta, options) {
    if (action === 'reloadWindow') {
      var win = BrowserWindow.getFocusedWindow();
      if (win) {
        win.webContents.reloadIgnoringCache();
      }
    }
    else if (action === 'toggleDevTools') {
      var win = BrowserWindow.getFocusedWindow();
      if (win) {
        win.webContents.send('shellMessage', { type: 'toggleDevTools' });
      }
    }
    else if (action === 'newWindow') {
      windowManager.newRequesterWindow();
    }
    else if (action === 'openCustomUrl') {
      windowManager.openCustomURL(meta);
    }
    else if (action == 'openConsole') {
      windowManager.newConsoleWindow();
    }
    else if (action === 'openCreateNewModal') {
      windowManager.sendCustomInternalEvent(action);
    }
    else if (action === 'newTab') {
      windowManager.sendCustomInternalEvent(action);
    }
    else if (action === 'closeTab') {
      windowManager.sendCustomInternalEvent(action);
    }
    else if (action === 'forceCloseTab') {
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
    else if (action === 'loadHistoryRequest') {
      windowManager.sendCustomInternalEvent(action, { requestId: meta.requestId });
    }
    else {
      var win = BrowserWindow.getFocusedWindow();
      win && win.webContents.send('electronWindowMessage', {
        name: 'internalEvent',
        data: { event: action }
      });
    }
  }
};

exports.menuManager = menuManager;
