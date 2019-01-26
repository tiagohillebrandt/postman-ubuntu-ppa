const start = require('waterline').start;
const wlSharedNeDB = require('./common/adapters/waterline-shared-nedb');
const wlSharedNeDBFileConfig = require('./common/adapters/configs/shared-nedb-file-config');
const pmModels = require('./common/models');
const electron = require('electron');
const _ = require('lodash');

/**
 *
 * Initializes waterline models and returns orm instance
 * @export
 * @param {function} done
 */
function bootstrap (config, done) {
  let waterlineConfig = _.assign({}, config, {
    master: true,
    dbPath: electron.app.getPath('userData')
  });
  start({
    models: pmModels,

    // waterline adds a model called archive to store all records for `model.archive()`
    // `archiveModelIdentity: false` will disable the `archive` functionality
    // see https://github.com/balderdashy/waterline/blob/cc758f44c9dd2a771233a7acf3f34dd641407c5b/lib/waterline.js#L397-L400
    // to avoid setting this in each of the model we set this property as the default setting
    // for all models
    // see https://github.com/balderdashy/waterline/blob/cc758f44c9dd2a771233a7acf3f34dd641407c5b/lib/waterline.js#L850-L854
    defaultModelSettings: { archiveModelIdentity: false },
    adapters: { 'waterline-shared-nedb': wlSharedNeDB },
    datastores: { 'persistent-nedb': wlSharedNeDBFileConfig(waterlineConfig) }
  }, function (err, orm) {
    if (err) {
      pm.logger.error('Bootstrap-models~bootstrap -Failed', err);
      return done(err);
    }
    if (orm) {
      pm.logger.info('Bootstrap-models~bootstrap - Success');
      return done(null, orm);
    }
  });
}

module.exports = bootstrap;
