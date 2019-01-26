const os = require('os'),
      mkdirp = require('mkdirp'),
      path = require('path'),
      { Originator, Collectors } = require('@postman/app-logger'),
      CrashReporter = require('./CrashReporter'),
      safeParse = require('../helpers/safeParse'),
      pmBuildEnv = process.env.PM_BUILD_ENV, // eslint-disable-line no-process-env
      loggerRawOptions = process.env.LOGGER_RAW_OPTIONS; // eslint-disable-line no-process-env

module.exports = {
  init (cb) {
    let FileCollector = Collectors.File,
        ConsoleCollector = Collectors.Console,
        SentryCollector = Collectors.Sentry,
        origin = 'pluginHost',
        collectors = [],
        {
          logPath,
          sessionId,
          appVersion,
          appName
        } = safeParse(loggerRawOptions);

    mkdirp(logPath, (err) => {
      try {
        if (err) {
          throw err;
        }

        // create collectors
        collectors = [
          new FileCollector({
            file: path.resolve(logPath, `${origin}.log`)
          })
        ];

        CrashReporter.isEnabled && collectors.push(new SentryCollector({ sentry: CrashReporter.sentry }));
        pmBuildEnv !== 'production' && collectors.push(new ConsoleCollector());

        // Attach the logger to global
        global.pm.logger = new Originator({ origin, collectors, sessionId });
      }
      catch (e) {
        global.pm.logger = console; // defaults to console

        // Don't fail the boot if logger fails
        pm.logger.error('Logger initialization failed', e);
      }

      // Initial logger for host process
      pm.logger.info(`Booting Plugin Host for ${appName} ${appVersion}, ${os.platform()}-${os.release()} on ${os.arch()}`); // eslint-disable-line max-len
      process.nextTick(cb);
    });
  }
};
