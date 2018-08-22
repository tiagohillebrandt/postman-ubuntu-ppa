const electron = require('electron'),
      path = require('path'),

      appSettings = require('../services/appSettings').appSettings,
      windowManager = require('../services/windowManager').windowManager;

/**
 * AppUpdaterAdapter is a bridge between the updater and the electron app.
 * This abstracts the internal implementation of app away from the updater module.
 */
let AppUpdaterAdapter = {

    /**
     * @method getCurrentVersion
     * @description This provides the current version of the app
     * @return {String}
     */
    getCurrentVersion () {
      return electron.app.getVersion();
    },

    getAppName () {
      return electron.app.getName();
    },

    /**
     * @method getDesktopPath
     * @return {String}, returns the desktop path for the current user using electron getPath API
     */
    getDesktopPath () {
      return electron.app.getPath('desktop');
    },

    /**
     * This will return the path of the Postman directory
     *
     * some-folder
     *   postman         <---------- getAppInstallationPath()
     *     app
     *     |  resources
     *     |    app      <----------- electron.app.getAppPath()
     *     |      main.js
     *     |      package.json
     *     postman-xxxxxxxxxx.tar.gz
     *     postman-xxxxxxxxxx-old
     */
    getAppInstallationPath () {
      return path.resolve(electron.app.getAppPath(), '..', '..', '..');
    },

    /**
     * @method getLastKnownVersion
     * @description This helps in getting the last known version saved in app settings
     * @param {Function} cb
     */
    getLastKnownVersion (cb) {
      appSettings.get('lastKnownVersion', cb);
    },

    /**
     * @method setLastKnownVersion
     * @description This helps in setting the last known version to app settings
     * @param {String} version
     */
    setLastKnownVersion (version) {
      appSettings.set('lastKnownVersion', version);
    },

    /**
     * @method getAutoUpdater
     * @description This returns the autoUpdater to be used in updater,
     * at present it sends electron.autoUpdater
     * @return {Object} electron.autoUpdater
     */
    getAutoUpdater () {
      return electron.autoUpdater;
    },

    /**
     * @method quitApp
     * @description It returns the electron function to quit the app
     * @returns {Object} electron.app.quitApp
     */
    quitApp () {
      return electron.app.quitApp;
    }
};

module.exports = AppUpdaterAdapter;
