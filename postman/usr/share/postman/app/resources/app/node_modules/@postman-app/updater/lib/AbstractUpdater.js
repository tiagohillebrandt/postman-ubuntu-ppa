const EventEmitter = require('events'),

    _ = require('lodash');

/**
 * @class AbstractUpdater
 * @extends EventEmitter
 * @description This holds the common functionalities for orchestrating the auto-updater.
 */
class AbstractUpdater extends EventEmitter {

    /**
     * @method constructor
     * @param {Object} updaterOptions
     * @param {Object} updaterOptions.adapter
     * @param {Object} updaterOptions.autoUpdater
     */
    constructor (updaterOptions) {
        super();
        this.assignUpdaterOptions(updaterOptions);
        this.attachAutoUpdaterListeners();

        // Assign constants
        this.FRESH_INSTALL = 'freshInstall';
        this.UNINSTALL = 'uninstall';
        this.OBSOLETE = 'obsolete';
    }

    /**
     * @method init
     * @description This method will be called to initialize the necessary things
     * before we decide to proceed with app start
     *
     * ===========================================================
     * = Callback will not be called if the app start is invalid.=
     * ===========================================================
     *
     * If any updater needs to stop the app start, it can be done here by not calling the callback.
     * @param {Function} cb Callback to be called with error and updateStatus
     */
    init (cb) { // eslint-disable-line class-methods-use-this
        cb && cb(null);
    }

    /**
     * @private
     * @method assignUpdaterOptions
     * @description This is used to assign the updaterOptions to this context.
     * @param {Object} updaterOptions The updater options.
     * @param {Object} updaterOptions.adapter Adapter that needs to be used by the updater.autoUpdater
     * @param {Object} updaterOptions.autoUpdater AutoUpdater to be used.
     */
    assignUpdaterOptions (updaterOptions = {}) {
        const {
            adapter,
            autoUpdater
        } = updaterOptions;

        this.adapter = adapter;
        this.autoUpdater = autoUpdater;
    }

    /**
     * @private
     * @method attachAutoUpdaterListeners
     * @description This is used to attach the listeners for the autoUpdater used.
     */
    attachAutoUpdaterListeners () {
        this.autoUpdater.on('update-available', this.onUpdateAvailable.bind(this));
        this.autoUpdater.on('checking-for-update', this.onCheckingForUpdate.bind(this));
        this.autoUpdater.on('update-downloaded', this.onUpdateDownloaded.bind(this));
        this.autoUpdater.on('update-not-available', this.onUpdateNotAvailable.bind(this));
        this.autoUpdater.on('error', this.onUpdateError.bind(this));
    }

    /**
     * @method onUpdateAvailable
     * @param {Object=} update
     * @fires AbstractUpdater#event:checkingForUpdates
     * @listens this.autoUpdater#event:update-available
     */
    onUpdateAvailable (update) {
        console.log('@postman-app/updater: Update Available');
        this.emit('updateAvailable', update);
    }

    /**
     * @method onCheckingForUpdate
     * @param {Object=} update
     * @fires AbstractUpdater#event:checkingForUpdates
     * @listens this.autoUpdater#event:checking-for-update
     */
    onCheckingForUpdate (update) {
        console.log('@postman-app/updater: Checking for update');
        this.emit('checkingForUpdates', update);
    }

    /**
     * @method onUpdateDownloaded
     * @param {Object} event
     * @param {String=} notes
     * @param {String=} name
     * @param {String=} date
     * @param {String=} url
     * @fires AbstractUpdater#event:updateDownloaded
     * @listens this.autoUpdater#event:update-downloaded
     */
    onUpdateDownloaded (event, notes, name, date, url) {
        console.log('@postman-app/updater: Update updateDownloaded', notes, name, date, url);
        this.emit('updateDownloaded', event, notes, name, date, url);
    }

    /**
     * @method onUpdateNotAvailable
     * @fires AbstractUpdater#event:updateNotAvailable
     * @listens this.autoUpdater#event:update-not-available
     */
    onUpdateNotAvailable () {
        console.log('@postman-app/updater: updateNotAvailable');
        this.emit('updateNotAvailable');
    }

    /**
     * @param {Error} err
     * @param {Object=} info
     * @fires AbstractUpdater#event:error
     * @listens this.autoUpdater#event:error
     */
    onUpdateError (err, info) {
        console.log('@postman-app/updater: error', err, info);
        this.emit('error', err, info);
    }

    /**
     * @method checkForVersionUpdated
     * @description This is used to send the check and send version update status to the renderer
     * If the current version is not the last known version
     * 1. Notify renderer for version update
     * 2. Sets the current version as the lastKnowVersion.
     * @fires AbstractUpdater#event:versionUpdated
     */
    checkForVersionUpdated () {
        this.adapter.getLastKnownVersion((err, lastKnownVersion) => {
            if (!err) {

                // Get the current app version
                let currentVersion = this.adapter.getCurrentVersion();

                // If the current version is not the last known version
                if (!_.isEmpty(lastKnownVersion) && currentVersion !== lastKnownVersion) {

                    // Sends message through adapter
                    console.log('@postman-app/updater: version Updated', lastKnownVersion, currentVersion);
                    this.emit('versionUpdated', lastKnownVersion, currentVersion);
                }

                // Sets the current version as last known version
                this.adapter.setLastKnownVersion(currentVersion);
            }
        });
    }

    /**
     * @method downloadUpdate
     * @description This method is used to check and download the update for the updateInfo provided.
     * @param {Object} updateInfo
     * @param {String} updateInfo.updateServerDomain
     * @param {String} updateInfo.platform
     * @param {String} updateInfo.version
     * @param {String} updateInfo.channel
     */
    downloadUpdate (updateInfo) {
        var updateURL = this.getFeedUrl(updateInfo);
        this.autoUpdater.setFeedURL(updateURL);
        this.autoUpdater.checkForUpdates();
    }

    /**
     * @method restartAppToUpdate
     * @description This method is used to apply updates and restart the app.
     * @fires AbstractUpdater#event:quittingApp
     */
    restartAppToUpdate () {
        this.emit('beforeAppQuit');
        console.log('@postman-app/updater: restarting app to update');
        this.autoUpdater.quitAndInstall();
    }

    /**
     * @method getFeedUrl
     * @param {Object} updateInfo
     * @returns {String} The updateURL to which update needs to be checked for.
     */
    getFeedUrl (updateInfo) { // eslint-disable-line class-methods-use-this
        var releaseServerPath = [
            'update',
            updateInfo.platform.toUpperCase(),
            updateInfo.version,
            AbstractUpdater.getChannelForARS(updateInfo.channel)
        ].join('/');

        // app release endpoints for windows. arch is included in the platform (WIN32/WIN64)
        return `${updateInfo.updateServerDomain}${releaseServerPath}`;
    }

    /**
     * @method getChannelForARS
     * @param {String = 'prod', 'stage', 'stable'} channel
     * @return {String = 'prod', 'stage', 'stable'} The channel for the update to be checked.
     */
    static getChannelForARS (channel) {
        return _.includes(['prod', 'stage'], channel) ? 'stable' : channel;
    }
}

module.exports = AbstractUpdater;
