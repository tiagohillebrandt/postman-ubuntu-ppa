const initializeUpdater = require('@postman/app-updater').init,
      SerializedError = require('serialised-error'),

      electron = require('electron'),

      appSettings = require('../services/appSettings').appSettings,
      AppUpdaterAdapter = require('../adapters/AppUpdaterAdapter'),

      APP_UPDATE = 'appUpdate',
      APP_UPDATE_EVENTS = 'app-update-events',
      CHECK_FOR_ELECTRON_VERSION_UPDATED = 'checkForElectronVersionUpdated',
      UPDATE_ELECTRON = 'updateElectron',
      APPLY_ELECTRON_UPDATE = 'applyElectronUpdate',

      ELECTRON_UPDATE_ERROR = 'electronAppUpdateError',
      ELECTRON_UPDATE_NOT_AVAILABLE = 'electronAppUpdateNotAvailable',
      ELECTRON_UPDATE_DOWNLOADED = 'electronAppUpdateDownloaded',
      ELECTRON_VERSION_UPDATED = 'electronVersionUpdated',

      /**
       * @method init
       * @description The initialize method which will initialize the updater module and call the callback based on the updater
       * ===============================================================================================
       * = Callback will not be called if the app start is invalid. Decided by the updater module.init =
       * ===============================================================================================
       */
      init = function (cb) {

        // Initialize updater
        const updaterInstance = initializeUpdater({ adapter: AppUpdaterAdapter });

        // If no updater found for the OS, consider it as not as error, just go through it
        if (!updaterInstance) {
          pm.logger.warn('UpdaterHandler~init - Updater not found for the os');
          cb && cb();
          return;
        }

        updaterInstance.init((err) => {
            attachUpdaterEventsListeners(updaterInstance);
            attachUpdaterListeners(updaterInstance);

            err ? pm.logger.error('UpdateHandler~init - Failed', err) : pm.logger.info('UpdateHandler~init - Success');
            cb && cb(err, updaterInstance);
        });
      },

      /**
       * @method destroy
       * @description It clears the updaterInstance assigned in the electron.app object
       */
      destroy = function () {
        // Destroys the updaterInstance
        electron.app.updaterInstance = null;
      },

      /**
       * @method attachUpdaterEventsListeners
       * @description It attaches the subscription to the app-update-events for the following events
       * 1. checkForElectronVersionUpdated
       * 2. updateElectron
       * 2. applyElectronUpdate
       */
      attachUpdaterEventsListeners = function (updaterInstance) {
        pm.eventBus.channel(APP_UPDATE_EVENTS).subscribe((event = {}) => {
          pm.logger.info(`UpdateHandler~${APP_UPDATE_EVENTS} - Received event`, event); // Logging intentionally

          let eventName = event.name;
          if (eventName === CHECK_FOR_ELECTRON_VERSION_UPDATED) {
            checkForVersionUpdated(updaterInstance);
            return;
          }
          if (eventName === UPDATE_ELECTRON) {
            downloadUpdate(updaterInstance, event.data);
            return;
          }
        });

        // Sending through bus is not recommended here
        // As, the app quits in this case which triggers a crash at times
        electron.ipcMain.on(APPLY_ELECTRON_UPDATE, () => {
            restartAndUpdate(updaterInstance);
        });
      },

      /**
       * @method attachUpdaterListeners
       * @param {Object} updaterInstance
       * It attaches the listeners for the updaterInstance actions.
       */
      attachUpdaterListeners = function (updaterInstance) {
        updaterInstance.on('updateDownloaded', handleOnUpdateDownloaded);
        updaterInstance.on('updateNotAvailable', handleOnUpdateNotAvailable);
        updaterInstance.on('beforeAppQuit', handleAppQuitting);
        updaterInstance.on('versionUpdated', handleOnVersionUpdate);
        updaterInstance.on('error', handleOnUpdateError);
      },

      /**
       * =============================================
       * =  Event Handlers for updater events starts =
       * =============================================
       */

      /**
       * @method handleOnUpdateDownloaded
       * @param {Object} event
       * @param {String=} notes
       * @param {String=} name
       * @param {String=} date
       * @param {String=} URL
       */
      handleOnUpdateDownloaded = function (event, notes, name, date, URL) {
        pm.eventBus.channel(APP_UPDATE_EVENTS).publish({
          name: ELECTRON_UPDATE_DOWNLOADED,
          namespace: APP_UPDATE,
          data: {
            name,
            notes,
            date,
            URL
          }
        });
      },

      /**
       * @method handleOnUpdateNotAvailable
       */
      handleOnUpdateNotAvailable = function () {
        pm.eventBus.channel(APP_UPDATE_EVENTS).publish({
          name: ELECTRON_UPDATE_NOT_AVAILABLE,
          namespace: APP_UPDATE
        });
      },

      /**
       *
       * @param {Error} error
       * @param {Object=} updateData
       */
      handleOnUpdateError = function (error, updateData) {
        pm.eventBus.channel(APP_UPDATE_EVENTS).publish({
          name: ELECTRON_UPDATE_ERROR,
          namespace: APP_UPDATE,
          data: {
            error: new SerializedError(error),
            updateData
          }
        });
      },

      /**
       * @method handleOnVersionUpdate
       * @param {?String} lastKnownVersion
       * @param {String} currentVersion
       */
      handleOnVersionUpdate = function (lastKnownVersion, currentVersion) {
        pm.eventBus.channel(APP_UPDATE_EVENTS).publish({
          name: ELECTRON_VERSION_UPDATED,
          namespace: APP_UPDATE,
          data: {
            lastKnownVersion,
            currentVersion
          }
        });
      },

      /**
       * @method handleAppQuitting
       * @description This will be called when the updater quits the app.
       */
      handleAppQuitting = function () {
        electron.app.quittingApp = true;
      },

      /**
       * ===========================================
       * =  Event Handlers for updater events ends =
       * ===========================================
       */


      /**
       * ===========================================
       * =  App to updater delegate methods starts =
       * ===========================================
       */

      /**
       * @method downloadUpdate
       * @param {Object} updaterInstance
       * @param {Object} updateInfo
       */
      downloadUpdate = function (updaterInstance, updateInfo) {
        updaterInstance.downloadUpdate(updateInfo);
      },

      /**
       * @method restartAndUpdate
       * @param {Object} updaterInstance
       */
      restartAndUpdate = function (updaterInstance) {
        updaterInstance.restartAppToUpdate();
      },

      /**
       * @method checkForVersionUpdated
       * @param {Object} updaterInstance
       */
      checkForVersionUpdated = function (updaterInstance) {
        updaterInstance.checkForVersionUpdated();
      };

      /**
       * =========================================
       * =  App to updater delegate methods ends =
       * =========================================
       */

module.exports = { init };
