let _ = require('lodash');

module.exports = function (config) {
  let eventBus = config.eventBus;
  let broadcastChannel = eventBus.channel('waterline-shared-nedb-file-datastore');

  return _.assign({}, config, {
    adapter: 'waterline-shared-nedb',
    master: config.master,
    dbPath: config.dbPath,
    send: function (data) {
      broadcastChannel.publish(data);
    },
    listen: function (cb) {
      broadcastChannel.subscribe(function (data) {
        cb(data);
      });
    }
  });
};
