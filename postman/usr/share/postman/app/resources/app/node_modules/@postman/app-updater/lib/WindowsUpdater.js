const fs = require('fs'),
    path = require('path'),
    child_process = require('child_process'), // eslint-disable-line security/detect-child-process

    AbstractUpdater = require('./AbstractUpdater'),

    SHORTCUT_EXTENSION = '.lnk', // https://en.wikipedia.org/wiki/Shortcut_(computing)#Implementations

    /* eslint-disable */
    // https://github.com/Squirrel/Squirrel.Windows/blob/8877944cf21a58c18341d6640bed2014582d1380/src/Squirrel/IUpdateManager.cs#L16
    /* eslint-enable */
    SQUIRREL_DESKTOP_ENUM = 'Desktop',
    SQUIRREL_START_MENU_ENUM = 'StartMenu';

class WindowsUpdater extends AbstractUpdater {
    constructor (updaterOptions = {}) {
        super(updaterOptions);

        this.on('versionUpdated', this.createOrUpdateShortcuts.bind(this));
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
     * - squirrel-install - It calls the updater.exe to create shortcut in (Desktop & StartMenu) and launch the app
     * - squirrel-updated - It calls the updater.exe to create shortcut in Desktop(If already exists) and StartMenu
     * - squirrel-uninstall - It deletes the shortcuts created
     * - squirrel-obsolete - It just quits the app, as it the invalid version
     *
     * @param {Function} cb Callback to be called with error and updateStatus
     */
    init (cb) {
        // If it is windows, go for it, or else bail out and call the callback.
        if (process.platform !== 'win32') {
            cb && cb(null);
            return;
        }

        let cmd = process.argv[1],
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
        cb && cb(null);
    }

    /**
     * Spawns Update.exe in detached mode with the provided arguments
     *
     * @param {Array<String>} args
     * @param {Function} [done]
     */
    run (args, done = () => {}) { // eslint-disable-line class-methods-use-this
        var updateExe = path.resolve(path.dirname(process.execPath), '..', 'Update.exe');
        child_process.spawn(updateExe, args, { detached: true })
            .on('close', done);
    }

    /**
     * 1. Moves the stub file to one level up
     * 2. Updates the desktop and start menu shortcuts
     */
    createOrUpdateShortcuts () {
        let errPrefix = 'WindowsUpdater~createOrUpdateShortcuts',
            desktopPath = this.adapter.getDesktopPath(),
            appName = this.adapter.getAppName(),
            desktopShortcut = path.resolve(desktopPath, `${appName}${SHORTCUT_EXTENSION}`),
            latestVersionDir = path.dirname(process.execPath),
            targetExe = path.basename(process.execPath),
            latestStubExe = path.resolve(latestVersionDir, `${appName}_ExecutionStub.exe`),
            rootStubExe = path.resolve(latestVersionDir, '..', `${appName}.exe`),
            shortcutLocations = [SQUIRREL_START_MENU_ENUM]; // Always update in startMenu for now.

        /**
         * With squirrel 1.5.0, [a change](https://github.com/Squirrel/Squirrel.Windows/pull/868) was made where a
         * stub executable was added at one level above the version specific folder.
         * But, this stub is added when we do a fresh install or when the app using
         * the latest version (>=1.5.0) of squirrel is updated. This is not added when an app using
         * the old version (<1.5.0) of squirrel updates to an app using the later version of squirrel (>=1.5.0)
         * So for users, who are upgrading from <= v7.3.x Postman to >= v7.3.x Postman,
         * the stub exe won't be created/moved automatically.
         * This stub file is used to reference the icon in the shortcuts.
         * Without this, [the Postman icon breaks]([https://github.com/postmanlabs/postman-app-support/issues/6897])
         * So, for those users we are manually moving the stub exe to one level up.
         * This workaround was suggested by a squirrel contributor
         * [here:](https://github.com/Squirrel/Squirrel.Windows/issues/1075#issuecomment-311488107)
         * -> If a stub exe is present in the latest app folder, move it to one level up while renaming it
         */
        try {
            if (fs.existsSync(latestStubExe)) {
                fs.renameSync(latestStubExe, rootStubExe);
            }
        }
        catch (caughtErr) {
            let err = new Error(`${errPrefix}: Could not move the stub exe to parent level`);
            this.emit('warning', err, { error_message: caughtErr.message });
        }

        /**
         * Update the desktop shortcut only if it is available.
         * Reason is user might deleted the shortcut after install and adding them again on update is wrong.
         * We use the --shortcut-locations options to provide the places needs to be updated.
         * - startMenu [As for now we are always updating / creating]
         * - desktop [Only updating, we won't create on app update]
         */
        try {
            if (fs.existsSync(desktopShortcut)) {
                shortcutLocations.push(SQUIRREL_DESKTOP_ENUM);
            }
        }
        catch (caughtErr) {
            let err = new Error(`${errPrefix}: Error while checking for existence of desktop file`);
            this.emit('warning', err, { error_message: caughtErr.message });
        }

        // create/update the shortcuts
        // This is not same as handling the case when the new app starts with --squirrel-updated flag, where it should
        // quit immediately afterwards
        // This function is run after the new app opens, and it should not quit
        this.run([
            `--createShortcut=${targetExe}`,
            `--shortcut-locations=${shortcutLocations.join(',')}`
        ]);
    }
}


module.exports = WindowsUpdater;
