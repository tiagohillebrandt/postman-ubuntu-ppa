const os = require('os'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    { app } = require('electron'),
    { Originator, Collectors } = require('@postman/app-logger'),
    { getValue } = require('../utils/processArg'),
    CrashReporter = require('./CrashReporter'),

    /**
     * @method getLogPath
     * @description Assigns the logging folder path
     * @return {String}
     */
    getLogPath = () => {
      return getValue('log-path') || path.resolve(app.getPath('userData'), 'logs');
    },

    Logger = {
      init (cb) {
        // Assign logging folder information first
        let FileCollector = Collectors.File,
            ConsoleCollector = Collectors.Console,
            SentryCollector = Collectors.Sentry,
            origin = 'main',
            sessionId = app.sessionId,
            collectors = [],
            logPath = getLogPath();

        mkdirp(logPath, (err) => {
          try {
            if (err) {
              throw err;
            }

            // Set the logging folder information
            app.logPath = logPath;

            // create collectors
            collectors = [
              new FileCollector({
                file: path.resolve(logPath, `${origin}.log`)
              })
            ];

            CrashReporter.isEnabled && collectors.push(new SentryCollector({ sentry: CrashReporter.sentry }));
            process.env.PM_BUILD_ENV !== 'production' && collectors.push(new ConsoleCollector());

            // Attach the logger to global
            global.pm.logger = new Originator({ origin, collectors, sessionId });
          }
          catch (e) {
            global.pm.logger = console; // defaults to console

            // Don't fail the boot if logger fails
            pm.logger.error('Logger initialization failed', e);
          }
          finally {
            // Initial logger
            pm.logger.info(`Booting ${app.getName()} ${app.getVersion()}, ${os.platform()}-${os.release()} on ${os.arch()}`);
            cb();
          }
        });
      },

      /**
       * @method getLoggerRawOptions
       * @description provides the logger raw options.
       * @returns {String}
       */
      getLoggerRawOptions () {
        return JSON.stringify({
          logPath: getLogPath(),
          appName: app.getName(),
          appVersion: app.getVersion(),
          sessionId: app.sessionId
        });
      }
    };

  module.exports = Logger;
