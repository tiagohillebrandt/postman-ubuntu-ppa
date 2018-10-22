const _ = require('lodash'),
      async = require('async');

const { ensureProperUrl, getURLProps } = require('../common/utils/url');

/**
 * CookieManager on main process allows to interact with session cookies from
 * the main process.
 */
class CookieManager {
  /**
   * Return cookies from store
   *
   * @async
   * @param {string} cookiePartitionId the partition id of the cookies store.
   * @param {function} callback executed with cookies
   *
   * @returns {undefined}
   */
  getCookies (cookiePartitionId, callback) {
    const session = require('electron').session.fromPartition(cookiePartitionId);
    this.cookieStore = session.cookies;
    this.cookieStore.get({}, (error, cookies) => {
      callback(null, cookies);
    });
  }

  /**
   * Remove a cookie
   *
   * @async
   * @param {string} domain Domain the cookie belongs to
   * @param {string} cookieName Name of the cookie
   * @param {string} url url the cookie belongs to
   * @param {function} callback callback
   *
   * @returns {undefined}
   */
  deleteCookie (domain, cookieName, url, callback) {
    var sanitizedUrl = url[0] === '.' ? 'www' + url : url,
        httpUrl = sanitizedUrl,
        httpsUrl = sanitizedUrl;

    if (_.startsWith(sanitizedUrl, 'http://') !== 0 && _.startsWith(sanitizedUrl, 'https://') !== 0) {
      httpUrl = 'http://' + sanitizedUrl;
      httpsUrl = 'https://' + sanitizedUrl;
    }

    this.cookieStore.remove(httpUrl, cookieName, (error) => {
      if (error) {
        return _.isFunction(callback) && callback(error);
      }

      return this.cookieStore.remove(httpsUrl, cookieName, (cookieStoreError) => {
        _.isFunction(callback) && callback(cookieStoreError);
      });
    });
  }

  /**
   * Pushes a collection of cookies for a url to the store
   *
   * @async
   * @param {string} cookiePartitionId cookie partition id
   * @param {array} cookies cookies collection
   * @param {string} url url for the cookies
   * @param {function} finalCallback callback
   *
   * @returns {undefined}
   */
  pushCookies (cookiePartitionId, cookies, url, finalCallback) {
    var sentUrl = getURLProps(ensureProperUrl(url)),
        domain = sentUrl.hostname,
        responseCookies = [], // these sync back to the view
        existingCookiesForDomain;

    _.forEach(cookies, (cookie) => {
      if (!cookie) {
        return;
      }

      // copy over any cookies that were set during the run
      // todo: is it better to set them _during_ the run?
      // convert the cookie to a format the App uses internally.
      responseCookies.push({
        url: `${cookie.secure ? 'https' : 'http'}://${url}`,
        name: cookie.key,
        value: cookie.value,
        domain: cookie.domain,
        secure: cookie.secure,
        httpOnly: cookie.httpOnly,
        expirationDate: cookie.expiryDate(),
        path: cookie.path
      });
    });

    async.series([
      // Removes deleted/expired cookies from the Electron Cookie store
      (callback) => {
        this.getCookies(cookiePartitionId, (getCookiesErr, existingCookies) => {
          if (getCookiesErr) {
            return callback(getCookiesErr);
          }
          existingCookiesForDomain = _.filter(existingCookies, (cookie) => {
            let cookieDomain = cookie.domain;
            if (cookieDomain[0] === '.') {
              cookieDomain = cookieDomain.slice(1);
            }
            return cookieDomain === domain;
          });

          let removedCookies = _.difference(
            _.map(existingCookiesForDomain, 'name'),
            _.map(responseCookies, 'name')
          );

          return async.each(_.filter(existingCookiesForDomain, (cookie) => { return _.includes(removedCookies, cookie.name); }), (cookie, cb) => {
            this.deleteCookie(domain, cookie.name, cookie.domain + cookie.path, (err) => {
              if (err) {
                pm.logger.error('CookieManager~pushCookies - Error deleting cookies in Electron store', err);
              }
              cb();
            });
          }, callback);
        });
      },

      // Add cookies to the Electron Cookie store
      (callback) => {

        async.each(responseCookies, (cookie, cb) => {
          if (cookie.expirationDate) {
            cookie.expirationDate = Math.floor((new Date(cookie.expirationDate)).getTime() / 1000);
          }

          this.cookieStore.set(cookie, (err) => {
            if (err) {
              pm.logger.error('CookieManager~pushCookies - Error storing cookies in Electron store', err);
            }
            cb(); // swallow the error, because there's nothing we can do about it anyway.
          });
        }, callback);
      },
      (callback) => {
        finalCallback(_.clone(responseCookies));
        callback();
      }
    ]);
  }
}

module.exports = new CookieManager();
