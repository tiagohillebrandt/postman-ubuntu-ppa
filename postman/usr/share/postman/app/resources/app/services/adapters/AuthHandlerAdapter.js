const windowManager = require('../windowManager').windowManager,
    app = require('electron').app,
    os = require('os');

/**
 * AuthHandlerAdapter is a bridge between the AuthHandler service and the electron app.
 * This abstracts the internal implementation of app away from the auth handler module.
 */
let AuthHandlerAdapter = {
  /**
   * @description Used for the communication b/w app and AuthHandlerService
   */
  getAuthEventChannel () {
    return pm.eventBus.channel('auth-handler-events');
  },

  /**
   * @description Used for the communication b/w AuthHandlerService and AuthWindow
   */
  getAuthWindowChannel () {
    return pm.eventBus.channel('auth-window-events');
  },
  hideAllWindows: windowManager.hideAllWindows.bind(windowManager),
  showAllWindows: windowManager.showAllWindows.bind(windowManager),
  setWindowsDefaultVisibilityState: windowManager.setWindowsDefaultVisibilityState.bind(windowManager),
  getAppInfo () {
    return { property_id: app.installationId };
  },
  getSystemInfo () {
    let release = os.release();

    return {
      type: 'app_native',
      platform: os.platform(),
      os: os.platform() === 'darwin' ? 'OS X ' + release : os.platform() + ' ' + release,
      architecture: os.arch()
    };
  }
};

module.exports = AuthHandlerAdapter;
