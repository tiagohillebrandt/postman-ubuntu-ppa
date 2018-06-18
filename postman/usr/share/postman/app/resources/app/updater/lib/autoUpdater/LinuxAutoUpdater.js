const hermes = require('@postman/hermes'),
    { EventEmitter } = require('events'),

    UPDATED_FLAG = '--updated',
    EID_FLAG_REGEX = /^--eID=Postman/;

/**
 * @class LinuxAutoUpdater
 * @extends EventEmitter
 * @description It orchestrate the `@postman/hermes` for the linux auto update.
 */
class LinuxAutoUpdater extends EventEmitter {
    /**
     * @method constructor
     * @param {Object} options
     * @param {Function} options.quitApp Function to quit the app
     */
    constructor (options) {
        super();
        this.quitApp = options.quitApp;
        this.updateInfo = null;
    }

    /**
     * @method downloadUpdate
     * @param {String} appName The appName for which update need to perform.
     * @param {String} downloadURL The downloadURL of the latest version app.
     * @param {String} downloadDirectory The directory where the latest app will be downloaded
     * @fires LinuxAutoUpdater#event:update-downloaded
     * @fires LinuxAutoUpdater#event:error
     *
     * In ideal case, the flow would be.
     * In any case of failure, it emits error with the error and the info it holds.
     *   hermes.download
     *         |
     *         |
     *   hermes.extract
     *         |
     *         |
     *  this.emit('update-downloaded)
     */
    downloadUpdate (appName, downloadURL, downloadDirectory) {
        this.updateInfo = hermes.init({ packageName: appName });
        hermes.download(Object.assign({}, this.updateInfo, { downloadURL, downloadDirectory }), (err, downloadInfo) => {
            this.updateInfo = downloadInfo;
            if (err) {
                this.emit('error', err, downloadInfo); // downloadInfo will hold the error info as well
                return;
            }
            hermes.extract(downloadInfo, (extractError, extractInfo) => {
                this.updateInfo = extractInfo;
                if (extractError) {
                    this.emit('error', extractError, extractInfo); // ExtractInfo will have the error info as well.
                    return;
                }

                // Reaching here means, the file is downloaded and extracted
                // For consistency with windows and mac, we are emitting this event at the end.
                this.emit('update-downloaded');
            });
        });
    }

    /**
     * If app was open with the flags '--updated' and '--eid=Postman-xxxxxxxxx' then cleanup the directory
     **/
    cleanUp (options) { // eslint-disable-line class-methods-use-this
        if (!options || !options.appInstallationPath || !options.appName) {
            console.log('LinuxAutoUpdater~cleanUp: Missing parameters, bailing out', options);
            return;
        }

        const eIDFlag = process.argv.find((arg) => { return arg.match(EID_FLAG_REGEX); }); // --eid=Postman-xxxxxxxxx
        let eID, // Postman-xxxxxxxxx
            clearInputData;

        // bail if required command-line args are not present
        if (!process.argv.includes(UPDATED_FLAG) || !eIDFlag) {
            return;
        }

        eID = eIDFlag.split('=')[1];

        clearInputData = {
            eID,
            appName: options.appName,
            directory: options.appInstallationPath
        };

        hermes.clear(clearInputData, (err) => {
            if (err) {
                console.error('Error: LinuxAutoUpdater~cleanUp', err);
            }
        });
    }

    /**
     * @method quitAndInstall
     * @fires LinuxAutoUpdater#event:error
     *
     * It calls the `hermes.swap` module with the updateInfo it holds and quits the app.
     * Incase of any error before quitting the app, it emits the `error` and won't quit the app.
     */
    quitAndInstall () {
        console.log('LinuxAutoUpdater: quit and install');
        hermes.swap(this.updateInfo, (err, extractInfo) => {
            if (err) {
                this.emit('error', extractInfo);
                return;
            }
            this.updateInfo = extractInfo;
            console.log('LinuxAutoUpdater: Quitting for update');
            this.quitApp();
        });
    }
}

module.exports = LinuxAutoUpdater;
