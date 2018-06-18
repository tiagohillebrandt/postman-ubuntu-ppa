var _ = require('lodash').noConflict();

exports.loginUtils = {
  getParamsObjectForLogin: function (options = {}) {
    let {
          isForceLogin = false,
          deviceInfo = {},
          userData = {},
          additionalParams = {}
        } = options;

    !_.isObject(additionalParams) && (additionalParams = {});
    return _.assign({}, deviceInfo, isForceLogin ? userData : {}, additionalParams);
  }
};
