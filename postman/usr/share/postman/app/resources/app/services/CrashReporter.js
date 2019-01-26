const os = require('os'),
    { app } = require('electron'),
    _ = require('lodash'),
    { getConfig } = require('./AppConfigService'),
    sentry = require('@sentry/node'),
    environment = getConfig('__WP_RELEASE_CHANNEL__'),
    isEnabled = getConfig('__WP_ENABLE_CRASH_REPORTING__'),
    sentryDsn = getConfig('__WP_SENTRY_DSN__'),
    appVersion = app.getVersion(),
    PROCESS_NAME = 'main',

    /**
     * @class CrashReporter
     * @description Crash reporter module for main process
     */
    CrashReporter = {
      sentry,
      sentryDsn,
      isEnabled,

      /**
       * @method init
       * @description It initiate the sentry if the crash reporting is enabled.
       */
      init (cb) {
        if (!isEnabled) {
          cb && cb();
          return;
        }

        sentry.init({
          dsn: sentryDsn,
          environment,
          release: appVersion
        });

        sentry.configureScope((scope) => {
          scope.setTag('os', os.type());
          scope.setTag('processName', PROCESS_NAME);
          scope.setTag('node', process.version);
          scope.setTag('electron', process.versions.electron);
          scope.setExtra('versions', process.versions);
          cb && cb();
        });
      },

      /**
       * @method setUserScope
       * @description This will be called to set the user scope anytime in sentry
       * @param {Object} data
       * @param {Function} cb
       */
      setUserScope (data, cb) {
        if (!isEnabled) {
          cb && cb();
          return;
        }
        sentry.configureScope((scope) => {
          scope.setUser(data);
          cb && cb();
        });
      },

      /**
       * @method setExtraScope
       * @description This will be called to set the extra data anytime in sentry
       * @param {Object} data
       * @param {Function} cb
       */
      setExtraScope (data, cb) {
        if (!isEnabled) {
          cb && cb();
          return;
        }

        sentry.configureScope((scope) => {
          _.forEach(_.keys(data), (k) => { scope.setExtra(k, data[k]); });
          cb && cb();
        });
      },

      /**
       * @method getRawCrashReporterOptions
       * @description provides the crash reporter raw options.
       * @returns {String}
       */
      getRawCrashReporterOptions () {
        return JSON.stringify({
          sentryDsn,
          isEnabled,
          environment,
          appVersion
        });
      }
    };

module.exports = CrashReporter;
