var _ = require('lodash'),
    { stringifyCookieObject } = require('../common/utils/cookie'),
    { ensureProperUrl, getURLProps } = require('../common/utils/url');

/**
 * Gets cookies from a cookieManager instance and adds them to a cookieJar
 *
 * @function NodeRuntimeBridge~putCookiesInTheJar
 *
 * @param {String} cookiePartitionId    - cookiePartitionId is the partition id needs to be used for the cookies
 * @param {CookieManager} cookieManager - CookieManager instance with cookies
 * @param {CookieJar} cookieJar         - CookieJar instance to move the cookies to
 */
function putCookiesInTheJar (cookiePartitionId, cookieManager, cookieJar) {
  cookieManager.getCookies(cookiePartitionId, (err, cookies) => {
    if (err) { return; }
    _.forEach(cookies, (cookie) => {
      var domain = cookie.domain,
          url,
          cookieString;

      if (domain[0] === '.') {
        domain = domain.substring(1);
      }

      url = 'http://' + domain + cookie.path;
      cookieString = stringifyCookieObject(cookie);

      try {
        cookieJar.setCookie(cookieString, url);
      }
      catch (e) {
        pm.logger.error('RuntimeCookieIntegration~putCookiesInTheJar - Error in adding cookie', e);
      }
    });
  });
}

/**
 * Extract cookies from a CookieJar instance and add them to the CookieManager
 *
 * @function NodeRuntimeBridge~addCookiesFromJarToCookieManager
 *
 * @param {string} cookiePartitionId    - cookie partition id
 * @param {CookieJar} cookieJar         - CookieJar instance to read cookies from
 * @param {CookieManager} cookieManager - Target CookieManager to move cookies into
 * @param {URL} transformedUrl          - Final request URL
 * @param {Function} cb                 - Callback called with the cookies
*/
function addCookiesFromJarToCookieManager (cookiePartitionId, cookieJar, cookieManager, transformedUrl, cb) {
  var sentUrl = getURLProps(ensureProperUrl(transformedUrl)),
      domain = sentUrl.hostname,
      path = sentUrl.pathname;

  // todo: we're using a private object here (hence the crazy number of checks),
  // because the API provided by the cookieJar is not good enough. Need to submit a PR
  // to the upstream "request" module to expose this functionality.
  cookieJar._jar &&
  cookieJar._jar.store &&
  cookieJar._jar.store.findCookies &&
  cookieJar._jar.store.findCookies(domain, path, (error, cookiesFromJar) => {
    cookieManager.pushCookies(cookiePartitionId, cookiesFromJar, transformedUrl, (cookies) => {
      cb(null, cookies);
    });
  });
}


module.exports = {
  putCookiesInTheJar: putCookiesInTheJar,
  addCookiesFromJarToCookieManager: addCookiesFromJarToCookieManager
};
