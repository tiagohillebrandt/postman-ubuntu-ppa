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

      // If cookie is stored as hostOnly in electron cookie store, remove domain before setting cookie in cookieJar to set it as hostOnly.
      if (cookie && cookie.domain && cookie.hostOnly) {
        delete cookie.domain;
      }
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
    path = sentUrl.pathname,
    cookiesForDomain = [];

  // Remove `[]` from IPv6 domain as workaround of following issue in tough-cookie.
  // Issue: https://github.com/salesforce/tough-cookie/issues/153
  // todo: remove this once the issue is solved in tough-cookie
  if (domain[0] === '[' && domain[domain.length - 1] === ']') {
    domain = domain.substring(1, domain.length - 1);
  }

  // todo: we're using a private object here (hence the crazy number of checks),
  // because the API provided by the cookieJar is not good enough. Need to submit a PR
  // to the upstream "request" module to expose this functionality.
  cookieJar._jar &&
  cookieJar._jar.store &&
  cookieJar._jar.store.findCookies &&
  cookieJar._jar.store.findCookies(domain, path, (error, cookiesFromJar) => {
    cookiesFromJar.forEach((cookie) => {
      let cookieObj = cookie.toJSON();
      if (!cookieObj.hostOnly) {
        cookiesForDomain.push(cookie);
      } else if (domain === cookieObj.domain) {
        cookiesForDomain.push(cookie);
      }
    });

    // Push cookies to electron session store
    cookieManager.pushCookies(cookiePartitionId, cookiesForDomain, transformedUrl, (cookies) => {
      cb(null, cookies);
    });
  });
}

module.exports = {
  putCookiesInTheJar: putCookiesInTheJar,
  addCookiesFromJarToCookieManager: addCookiesFromJarToCookieManager
};
