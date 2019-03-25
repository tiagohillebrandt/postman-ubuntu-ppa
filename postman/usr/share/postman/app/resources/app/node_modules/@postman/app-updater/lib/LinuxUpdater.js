const AbstractUpdater = require('./AbstractUpdater');

/**
 * @class LinuxUpdater
 * @extends AbstractUpdater
 *
 * It overrides the methods specific for linux updater.
 */
class LinuxUpdater extends AbstractUpdater {
    constructor (updaterOptions) {
        super(updaterOptions);
    }

    downloadUpdate (updateInfo) {
        this.logger.info('LinuxUpdater~downloadUpdate - UpdateInfo received', updateInfo);
        this.autoUpdater.downloadUpdate(this.adapter.getAppName(), updateInfo.downloadURL,
            updateInfo.downloadVersion, this.adapter.getAppInstallationPath());
    }
}

module.exports = LinuxUpdater;
