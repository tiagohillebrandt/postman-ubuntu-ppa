// Plugin process has been temporarily disabled
// since this is not actively consumed and adds noise to the packaging and execution
const isPluginFeatureEnabled = false;

const Logger = require('./Logger'),
  { app } = require('electron'),
  PluginsHost = require('@postman/app-plugins-host'),
  CrashReporter = require('./CrashReporter');

module.exports = {
  init (cb) {
    if (!isPluginFeatureEnabled) {
      return cb();
    }

    pm.pluginHost = new PluginsHost({
      env: {
        APP_PATH: app.getAppPath(),
        APP_TEMP_PATH: app.getPath('temp'),
        CRASH_REPORTER_RAW_OPTIONS: CrashReporter.getRawCrashReporterOptions(),
        LOGGER_RAW_OPTIONS: Logger.getLoggerRawOptions(),
        PM_BUILD_ENV: process.env.PM_BUILD_ENV,
        POSTMAN_PARENT_PID: process.pid,
        USER_DATA_PATH: app.getPath('userData')
      }
    });

    process.nextTick(cb);
  },

  cleanup () {
    if (!isPluginFeatureEnabled) {
      return;
    }

    pm.pluginHost.terminate();
    pm.logger.info(pm.pluginHost.host);
  }
};
