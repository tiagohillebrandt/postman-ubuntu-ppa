var _ = require('lodash'),
    urlParse = require('url-parse');

/*
  Utility functions for url operations common to browser and node environments
*/
module.exports = {
  /**
   * converts a url like string to a sanitized valid URL
   *
   * @param {string} url
   *
   * @return {string}
   */
  ensureProperUrl: function ensureProperUrl (url) {
    url = url.trim();
    var HTTP_PROTOCOL = 'http://',
        HTTPS_PROTOCOL = 'https://';

    if (url.indexOf(HTTP_PROTOCOL) !== 0 && url.indexOf(HTTPS_PROTOCOL) !== 0) {
      url = HTTP_PROTOCOL + url;
    }

    return url.trim();
  },

  /**
   * Returns a parsed url from a string
   * @param {string} url
   *
   * @return {URL}
   */
  getURLProps: function getURLProps (url) {
    let urlInstance;
    try {
      // browser
      urlInstance = new URL(url);
    }
    catch (e) {
      urlInstance = urlParse(url);
    }
    finally {
      return urlInstance;
    }
  },

  /**
   * Returns a stringifided url params from object
   * @param {object} params
   *
   * @return {String}
   */
  getParamsString: function getParamsString (params = {}) {
    if (!_.isObject(params) || _.isEmpty(params)) {
      return '';
    }
    let paramKeys = _.keys(params);
    return (
      _.chain(paramKeys)
       .map((key) => {
         return key + '=' + params[key];
       })
       .join('&')
       .value()
    );
  }

};
