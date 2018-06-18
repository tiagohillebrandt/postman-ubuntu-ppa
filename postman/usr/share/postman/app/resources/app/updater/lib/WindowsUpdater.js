const path = require('path'),
    spawn = require('child_process').spawn, // eslint-disable-line security/detect-child-process

    AbstractUpdater = require('./AbstractUpdater');

class WindowsUpdater extends AbstractUpdater {
    constructor (updaterOptions = {}) {
        super(updaterOptions);
    }

    /**
     * @method init
     * @description This method will be called to initialize the necessary things.
     *
     * ===========================================================
     * = Callback will not be called if the app start is invalid.=
     * ===========================================================
     *
     * The callback will not be called when it decides that the app start is not valid
     * Callback will not be called if the windows app is called with following params.
     * - squirrel-install  - It calls the updater.exe to create shortcut and launch the app
     * - squirrel-uninstall - It deletes the shortcuts created
     * - squirrel-obsolete - It just quits the app, as it the invalid version
     *
     * @param {Function} cb Callback to be called with error and updateStatus
     */
    init (cb) {
        // If it is windows, go for it, or else bail out and call the callback.
        if (process.platform === 'win32') {
            var cmd = process.argv[1],
                target = path.basename(process.execPath),
                quitApp = this.adapter.quitApp;

            // Create a shortcut on fresh installation
            if (cmd === '--squirrel-install') {
                this.run([String('--createShortcut=' + target)], quitApp);
                return;
            }

            // Delete the shortcut on un-installation
            if (cmd === '--squirrel-uninstall') {
                this.run([String('--removeShortcut=' + target)], quitApp);
                return;
            }

            // This is called when the out-of-date app is no longer the newest version
            // At this point we should just quit this app
            if (cmd === '--squirrel-obsolete') {
                quitApp();
                return;
            }
        }
        cb && cb(null);
    }

    /**
     * Spawns Update.exe in detached mode with the provided arguments
     *
     * @param {Array<String>} args
     * @param {Function} done
     */
    run (args, done) { // eslint-disable-line class-methods-use-this
        var updateExe = path.resolve(path.dirname(process.execPath), '..', 'Update.exe');
        spawn(updateExe, args, { detached: true })
            .on('close', done);
    }
}


module.exports = WindowsUpdater;
