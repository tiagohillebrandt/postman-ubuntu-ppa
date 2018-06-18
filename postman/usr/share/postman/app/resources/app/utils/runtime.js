let fs = require('fs'),
    sdk = require('postman-collection'),
    getSystemProxy = require('./getSystemProxy');

module.exports = {
  /**
   * @todo: move this to a common util and use RuntimeBridge and OAuth2TokenRequester
   */
  populateProxyAndCertificateOptions: function (runOptions, runMetaData) {
    runOptions.fileResolver = fs;

    if (runMetaData.useSystemProxy) {
      runOptions.systemProxy = getSystemProxy;
    }

    if (runMetaData.proxies) {
      runOptions.proxies = new sdk.ProxyConfigList({}, runMetaData.proxies);
    }

    runOptions.certificates = new sdk.CertificateList({}, runMetaData.certificates);
  }
};
