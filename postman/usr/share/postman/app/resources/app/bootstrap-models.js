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
    adapters: { 'waterline-shared-nedb': wlSharedNeDB },
    datastores: { 'persistent-nedb': wlSharedNeDBFileConfig(waterlineConfig) }
  }, function (err, orm) {
    if (err) {
      console.error('ORM initialization failed: ', err);
      return done(err);
    }
    if (orm) {
      console.log('ORM initialization successful');
      return done(null, orm);
    }
  });
}

module.exports = bootstrap;
