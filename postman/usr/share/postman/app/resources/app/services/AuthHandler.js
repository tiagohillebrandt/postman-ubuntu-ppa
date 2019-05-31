const { BrowserWindow } = require('electron'),
    _ = require('lodash'),
    url = require('url'),
    path = require('path'),
    app = require('electron').app,
    { createEvent } = require('../common/model-event');

module.exports = (() => {

  let htmlPath = path.resolve(__dirname, '..', 'html/auth');

  let config = {
    getAuthHTML: () => {
      let authUrl = process.env.PM_BUILD_ENV !== 'development' ?
                  url.format({ protocol: 'file', pathname: path.resolve(htmlPath, 'auth.html') }) :
                  'http://localhost:8777/build/html/auth/auth.html';

      return `${authUrl}?sessionId=${app.sessionId}&logPath=${app.logPath}`;
    },
    errorHTML: process.env.PM_BUILD_ENV !== 'development' ?
                  url.format({ protocol: 'file', pathname: path.resolve(htmlPath, 'error.html') }) :
                  'http://localhost:8777/build/html/auth/error.html'
  };

  let locals = {
    adapter: null,
    window: null,
    initiatedUserId: null
  };

  const authEvents = (() => {

    /**
     * @description attach listeners in auth handler channel
     */
    function attachListeners () {
      locals.adapter.getAuthEventChannel().subscribe((event = {}) => {
        if (event.name === 'add_account') {

          // Incoming add account request
          authWindow.open(event.data);
        }
      });
    }

    /**
     * @description sends the userinformation + handover token to shell
     *
     * @param {Object} data
     */
    function send (data) {
      locals.adapter.getAuthEventChannel().publish(createEvent('auth_response', 'authentication', data));
    }

    /**
     * @description initializes the sub module
     */
    function init () {
      attachListeners();
    }

    return { init, send };
  })();

  const authWindow = (() => {

    /**
     * @description attachListeners for browserWindow
     */
    function attachListeners () {
      locals.adapter.getAuthWindowChannel().subscribe((event) => {
        if (event.name !== 'response') return;

        /*
        * Data structure
        * {
        *   success: true,
        *   error: null,
        *   cancel: false,
        *   authData: {
        *     userData: {
        *       id: string,
        *       name: string,
        *       email: string,
        *       access_token: string
        *       handover_token: string
        *     },
        *     config: {}
        *   }
        * }
        */

        let responseData = event.data || {},

          // It is a locked session only if it is initiated from signed in user
          initiatedUserId = locals.initiatedUserId,
          isLockedSession = initiatedUserId && initiatedUserId !== '0',
          authenticatedUserId = _.get(event, 'data.authData.userData.id');

        /**
         * Cancel the authentication process if
         * 1. It was a locked session and
         * 2. The initiated user is not the one got authenticated.
         */
        if (isLockedSession && initiatedUserId !== authenticatedUserId) {

          // We are cancelling the auth which will take to the same revoked session user partition.
          authEvents.send({ cancel: true });
        } else {
          responseData.isLockedSession = isLockedSession;
          authEvents.send(responseData);
        }

        // Close the authWindow
        destroy();

        // Show all other windows
        locals.adapter.showAllWindows();
      });
    }

    /**
     * @description opens the login window
     *
     * @param {Boolean} hasAccounts
     * @param {Boolean} isSignup
     * @param {String} userID
     */
    function open ({ hasAccounts, isSignup, userID }) {

      // Hide all other windows
      locals.adapter.hideAllWindows();

      if (locals.window) destroy();

      locals.initiatedUserId = userID;

      locals.window = new BrowserWindow({
        width: 1280,
        height: 900,
        title: 'Sign in to Postman',
        webPreferences: { nodeIntegration: true, partition: 'authentication' },
        icon: path.resolve(app.getAppPath(), 'assets/icon.png')
      });

      locals.window.loadURL(config.getAuthHTML());

      locals.window.webContents.on('dom-ready', () => {
        locals.window.webContents.setVisualZoomLevelLimits(1, 1);
      });

      locals.window.webContents.on('did-finish-load', () => {
        let queryParams = _.merge(locals.adapter.getAppInfo(), locals.adapter.getSystemInfo());

        locals.adapter.getAuthWindowChannel().publish(createEvent('initialize', 'auth-window', {
          hasAccounts,
          isSignup,
          userID,
          queryParams,
          errorHTML: config.errorHTML
        }));
      });

      // Handle window closing
      locals.window.on('close', handleWindowClose);
    }

    /**
     * @description handle window close (intiated by user)
     */
    function handleWindowClose () {
      authEvents.send({ cancel: true });
      locals.adapter.showAllWindows();
      locals.window = null;
    }

    /**
     * @description destroys the auth window
     */
    function destroy () {
      locals.window.destroy();
      locals.window = null;
    }

    /**
     * @description initializes the submodule
     */
    function init () {
      attachListeners();
    }

    return { init, open, destroy };
  })();

  /**
   * @description initializes the authHandler service
   *
   * @param {Object} adapter
   */
  function init (adapter = {}) {
    if (!adapter.getAuthEventChannel) throw new Error('Missing getAuthEventChannel, failed to initialize AuthHandler');
    if (!adapter.getAuthWindowChannel) throw new Error('Missing getAuthWindowChannel, failed to initialize AuthHandler');
    if (!adapter.showAllWindows) throw new Error('Missing showAllWindows, failed to initialize AuthHandler');
    if (!adapter.hideAllWindows) throw new Error('Missing hideAllWindows, failed to initialize AuthHandler');
    if (!adapter.getAppInfo) throw new Error('Missing getAppInfo, failed to initialize AuthHandler');
    if (!adapter.getSystemInfo) throw new Error('Missing getSystemInfo, failed to initialize AuthHandler');

    locals.adapter = adapter;

    authEvents.init();
    authWindow.init();
  }

  return { init };
})();
