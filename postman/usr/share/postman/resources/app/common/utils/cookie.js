/*
  Utility functions for cookie based operations common to browser and node
*/
module.exports = {
  /**
   * Converts a cookie object to a string
   * @param cookieObj
   *
   * @return {string} cookie
   */
  // @todo replace with sdk Cookie.parse
  stringifyCookieObject: function stringifyCookieObject (cookieObj) {
    if (cookieObj === '') {
      return cookieObj;
    }
    var retVal = cookieObj.name + '=' + cookieObj.value + '; path=' + cookieObj.path + '; domain=' + cookieObj.domain + ';';
    if (cookieObj.secure) {
      retVal += ' Secure;';
    }
    if (cookieObj.httpOnly) {
      retVal += ' HttpOnly;';
    }
    if (cookieObj.expirationDate) {
      // *1000 because electron expirationDate is no. of seconds since the singularity
      retVal += ' Expires=' + new Date(cookieObj.expirationDate * 1000).toGMTString() + ';';
    }
    return retVal;
  },

  /**
   * returns array of cookie objects comaptible with electron
   */
  _parseCookieHeader: function _parseCookieHeader (host, cookieString) {
    if (!cookieString) { return []; }

    var cookies = _.split(cookieString, ';');
    var numCookies = cookies.length;
    var retVal = [];
    for (var i = 0; i < numCookies; i++) {
      cookies[i] !== '' && retVal.push(_parseSingleCookieString(host, cookies[i]));
    }
    return retVal;
  },

  /**
   * parse a single cookie string
   */
  _parseSingleCookieString: function _parseSingleCookieString (host, cookieString) {
    // if this was set using the cookie manager, it might have path and domain too
    var thisCookieParts = _.chain(cookieString)
      .trim()
      .split(';')
      .filter((part) => { return !_.isEmpty(part); })
      .value();
    var len = thisCookieParts.length;
    var retVal = {};
    var i = 0;

    var thisCookie = _.chain(thisCookieParts[i]).trim().split('=').value();
    if (thisCookie.length >= 1) {
      // Added this to allow cookie values to have '='
      // Zendesk 1344
      try {
        var cName = _.trim(thisCookie[0], '\n '), // this is the part before the first =
            valueParts = thisCookie.splice(1), // parts after the first =
            cValue;

        cValue = _.chain(valueParts)
          .map((valuePart) => { return _.trim(valuePart, '\n '); })
          .join('=')
          .value();

        retVal.url = host;
        retVal.name = cName;
        retVal.value = cValue;
      }
      catch (e) {
        console.log('Error setting cookie: ' + e);
      }
    }

    // process all the other parts
    retVal.secure = false;
    retVal.httpOnly = false;

    // if max-age exists, delete any cookiePart with expiry
    if (_.find(thisCookieParts, function (cookiePart) { return (cookiePart && cookiePart.trim().indexOf('Max-Age') == 0); })) {
      _.remove(thisCookieParts, function (cookiePart) { return (cookiePart && cookiePart.trim().indexOf('Expires') == 0); });
    }

    i++;
    for (;i < len; i++) {
      // session: cookie.HttpOnly,
      // secure: cookie.Secure,
      // expirationDate: cookie.Expiry,
      // handle special cases for httponly/secure
      try {
        var thisParts = _.chain(thisCookieParts[i]).trim().split('=').value();
        var propName = _.chain(thisParts[0]).trim('\n ').toLower().value();
        var propVal = _.trim(thisParts[1], '\n ');

        if (propName === 'secure') {
          retVal.secure = true;

          // https should be present while setting the cookie in a secure way
          // https://github.com/flarum/core/issues/1084
          if (!_.startsWith(retVal.url, 'https://')) {
            if (!_.startsWith(retVal.url, 'http://')) {
              retVal.url = 'https://' + retVal.url;
            }

            // Reaching here means the url starts with http:// we need to replace it with https://
            else {
              retVal.url.replace('http://', 'https://');
            }
          }
          continue;
        }
        if (propName === 'httponly') {
          retVal.httpOnly = true;
          continue;
        }
        if (propName === 'path') {
          retVal.path = propVal;
          continue;
        }
        if (propName === 'expires') {
          var date = new Date(propVal);
          if (date) {
            retVal.expires = date.getTime() / 1000;
          }
          continue;
        }
        if (propName === 'max-age') {
          var date = new Date();
          retVal.expires = parseInt((date.getTime() / 1000) + parseInt(propVal));
          continue;
        }

        retVal[propName] = propVal;
      }
      catch (e) {
        console.error('Could not save property for cookie: ', thisCookieParts[i]);
      }
    }

    return retVal;
  }

};
