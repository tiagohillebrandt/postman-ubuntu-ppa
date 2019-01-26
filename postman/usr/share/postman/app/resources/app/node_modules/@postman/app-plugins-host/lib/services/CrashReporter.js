const osType = require('os').type(),
      sentry = require('@sentry/node'),
      safeParse = require('../helpers/safeParse'),
      PROCESS_NAME = 'pluginHost',
      crashReporterRawOptions = process.env.CRASH_REPORTER_RAW_OPTIONS, // eslint-disable-line no-process-env
      nodeVersion = process.version;

/**
 * @description Crash reporter module for plugin host process
 */
module.exports = {
  sentry,

  /**
     * @method init
     * @param {Function} cb
     * @description It initiate the sentry if the crash reporting is enabled.
     */
  init (cb) {
    let {
      isEnabled,
      sentryDsn,
      environment,
      appVersion
    } = safeParse(crashReporterRawOptions);

    if (!isEnabled) {
      process.nextTick(cb);
      return;
    }

    sentry.init({
      dsn: sentryDsn,
      environment,
      release: appVersion
    });

    sentry.configureScope((scope) => {
      scope.setTag('processName', PROCESS_NAME);
      scope.setTag('os', osType);
      scope.setTag('node', nodeVersion);
      process.nextTick(cb);
    });
  }
};
