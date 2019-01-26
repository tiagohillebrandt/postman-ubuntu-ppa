const sanitizeConfigValue = function (value) {
    if (typeof value === 'string') {
      return value.replace(/\'/g, '');
    }
    return value;
  };

module.exports = {
  getConfig (key) {
    return sanitizeConfigValue(require('../config.json')[key]);
  }
};
