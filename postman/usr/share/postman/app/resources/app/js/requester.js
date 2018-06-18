webpackJsonp([6],{

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_PmConsole__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Onboarding__ = __webpack_require__(1110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_Shortcuts__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_AlertManager__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_helpers_OAuth2Tokens__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_cookies_CookieManager__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_helpers_OAuth2Manager__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controllers_ElectronContextMenu__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_collections_CollectionClipboard__ = __webpack_require__(1159);










let alerts = __webpack_require__(391);

/**
                                                 *
                                                 * @param {*} cb
                                                 */
function bootIndependentServices(cb) {
  _.assign(window.pm, {
    alerts,
    alertManager: new __WEBPACK_IMPORTED_MODULE_4__models_AlertManager__["a" /* default */](),
    cookieManager: new __WEBPACK_IMPORTED_MODULE_6__models_cookies_CookieManager__["a" /* default */](),
    oAuth2Tokens: new __WEBPACK_IMPORTED_MODULE_5__models_helpers_OAuth2Tokens__["a" /* default */](),
    oAuth2Manager: new __WEBPACK_IMPORTED_MODULE_7__models_helpers_OAuth2Manager__["a" /* default */](),
    contextMenuManager: new __WEBPACK_IMPORTED_MODULE_8__controllers_ElectronContextMenu__["a" /* default */](),
    clipboard: new __WEBPACK_IMPORTED_MODULE_9__models_collections_CollectionClipboard__["a" /* default */](),
    shortcuts: new __WEBPACK_IMPORTED_MODULE_3__controllers_Shortcuts__["a" /* default */](),
    onboarding: new __WEBPACK_IMPORTED_MODULE_2__models_Onboarding__["a" /* default */](),
    console: new __WEBPACK_IMPORTED_MODULE_1__models_PmConsole__["a" /* default */]('builder') });

  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootIndependentServices);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_UserController__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_AuthHandlerService__ = __webpack_require__(242);





var Onboarding = Backbone.Model.extend({
  initialize: function () {
    var onboarding = this;

    pm.mediator.on('trialDaysLeft', this.onTrialDaysLeft, this);
    pm.mediator.on('showOnboarding:signInReminder', this.onNotSignedIn);
  },

  onTrialDaysLeft: function (daysLeft) {
    var days;
    if (daysLeft == 0) {
      if (!pm.settings.getSetting('trialExpiryNotif_0')) {
        pm.alertManager.enqueue(function () {
          pm.alerts.warning('Your Postman Pro trial has ended. <a href="' + __WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__["F" /* PRICING_LINK */] + '" target="_blank" class="alert-link">Upgrade to Postman Pro</a>', {
            dedupeId: 'cloud-trial-expiry',
            persist: true,
            layout: 'topCenterAuto',
            showAsHtml: true });

          pm.settings.setSetting('trialExpiryNotif_0', true);
        }, 1);
      }
    } else
    if (daysLeft < 3) {
      if (!pm.settings.getSetting('trialExpiryNotif_3')) {
        days = daysLeft == 1 ? 'day' : 'days';
        pm.alertManager.enqueue(function () {
          pm.alerts.warning('You have ' + daysLeft + ' ' + days + ' of the Postman Pro free trial left. ' + '<a href="' + __WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__["F" /* PRICING_LINK */] + '" target="_blank" class="alert-link">Upgrade to Postman Pro</a>', {
            dedupeId: 'cloud-trial-expiry',
            persist: true,
            layout: 'topCenterAuto',
            showAsHtml: true });

          pm.settings.setSetting('trialExpiryNotif_3', true);
        }, 1);
      }
    } else
    if (daysLeft < 5) {
      if (!pm.settings.getSetting('trialExpiryNotif_5')) {
        days = daysLeft == 1 ? 'day' : 'days';
        pm.alertManager.enqueue(function () {
          pm.alerts.warning('You have ' + daysLeft + ' ' + days + ' of the Postman Pro free trial left. ' + '<a href="' + __WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__["F" /* PRICING_LINK */] + '" class="alert-link">Upgrade to Postman Pro</a>', {
            dedupeId: 'cloud-trial-expiry',
            persist: true,
            layout: 'topCenterAuto',
            showAsHtml: true });

          pm.settings.setSetting('trialExpiryNotif_5', true);
        }, 1);
      }
    }
  },

  onNotSignedIn() {
    let filteredCollections = _.filter(pm.collections.models, collection => {
      return !_.includes(window.postman_predef_collections, collection.id);
    });
    __WEBPACK_IMPORTED_MODULE_2__modules_controllers_UserController__["a" /* default */].
    get().
    then(userData => {
      if (!_.isEmpty(filteredCollections) && userData.id === 0) {
        let text = 'Backup your Postman data and collections';

        pm.alertManager.enqueue(function () {
          pm.alerts.infoWithAction(text, { layout: 'topCenterAuto' }, {
            label: 'Sign In',
            callback: function () {
              __WEBPACK_IMPORTED_MODULE_3__modules_services_AuthHandlerService__["a" /* default */].login();
            } });

          pm.mediator.trigger('onboarding:dismissSignInReminder');
        }, 1);
      }
    });
  } });


/* harmony default export */ __webpack_exports__["a"] = (Onboarding);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__ = __webpack_require__(18);



var OAuth2Token = Backbone.Model.extend({
  defaults: function () {
    return {
      'id': '',
      'name': 'OAuth2 Token',
      'access_token': '',
      'expires_in': 0,
      'timestamp': 0 };

  } });


var OAuth2Tokens = Backbone.Collection.extend({
  model: OAuth2Token,

  comparator: function (a, b) {
    var at = a.get('timestamp'),
    bt = b.get('timestamp');

    return at > bt;
  },

  initialize: function () {
    pm.mediator.on('addOAuth2Token', this.addAccessToken, this);
    pm.mediator.on('updateOAuth2Token', this.updateAccessToken, this);
    pm.mediator.on('deleteOAuth2Token', this.deleteAccessToken, this);
    this.loadAllAccessTokens();
  },

  loadAllAccessTokens: function () {
    __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__["a" /* default */].
    find('oauth2accesstoken', {}).
    then(accessTokens => {
      accessTokens.forEach(token => {
        this.add(token, { merge: true });
      });
      pm.mediator.trigger('loadedAllStoredOAuth2Tokens');
    }).
    catch(e => {
      console.error('Error in fetching oauth2 access tokens', e);
    });
  },

  /**
      * @param {Object} tokenData - object having access_token and other optional attributes like scope, token_type, etc
      */
  addAccessToken: function (tokenData) {
    var accessToken = {
      'id': __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].guid(),
      'timestamp': new Date().getTime(),
      'data': [] };


    // make sure data is added to token response for any response
    // openID and other implementations may have different keys for access token
    // this allows users to manually copy the key from the response
    _.forOwn(tokenData, function (value, key) {
      if (key !== 'result') {
        accessToken.data.push({
          key: key,
          value: value });

      }
    });

    tokenData.access_token && (accessToken.access_token = tokenData.access_token);

    // @todo: the result is not being used anywhere, confirm with kane before removing
    if (tokenData.hasOwnProperty('access_token')) {
      accessToken.data.push({
        key: 'result',
        value: 'success' });

    }
    __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__["a" /* default */].
    create('oauth2accesstoken', accessToken).
    then(() => {
      var at = new OAuth2Token(accessToken);
      this.add(at, { merge: true });
      pm.mediator.trigger('addedOAuth2Token', accessToken);
    }).
    catch(e => {
      console.error('Error in adding access token', e);
    });
  },

  updateAccessToken: function (params) {
    var token = this.get(params.id);

    token.set('name', params.name);
    __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__["a" /* default */].
    findOne('oauth2accesstoken', { id: params.id }).
    then(tokenFromDb => {
      if (tokenFromDb) {
        return __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__["a" /* default */].
        update('oauth2accesstoken', token.toJSON());
      }

      // @todo Will this ever be called? This flow is only used to update the name of an already saved accessToken @samvel
      return __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__["a" /* default */].
      create('oauth2accesstoken', token);
    }).
    then(() => {
      pm.mediator.trigger('updatedOAuth2Token', token.id);
    }).
    catch(e => {
      console.error('Error in updating access token', e);
    });
  },

  deleteAccessToken: function (id) {
    __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__["a" /* default */].
    delete('oauth2accesstoken', { id }).
    then(() => {
      this.remove(id);
    }).
    catch(e => {
      console.log('Error in deleting access token', e);
    });
  },

  deleteAllAccessTokens: function (callback) {
    __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__["a" /* default */].
    delete('oauth2accesstoken', {}).
    then(() => {
      this.reset();
      _.isFunction(callback) && callback();
    }).
    catch(e => {
      console.log('Error in deleting access tokens');
      this.reset();
      _.isFunction(callback) && callback(e);
    });
  } });


/* harmony default export */ __webpack_exports__["a"] = (OAuth2Tokens);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_async__);



const session = __webpack_require__(7).remote.session;

/**
                                                     * @typedef {Object} Cookie
                                                     */

/**
                                                         * Handles the 'Manage Cookies' modal in electron
                                                         *
                                                         * @class CookieManager
                                                         *
                                                         * @todo Incomplete
                                                         */let
CookieManager = class CookieManager {

  constructor() {
    this.cookies = {};
  }

  // when the app loads
  // load all session cookies into this.cookies

  // when a request is being sent
  // if the cookies header is present > (call webContent.cookies.set)
  // and add to this.cookies

  // when a response is received
  // for each set cookie header, parse the Set-Cookie header and add it to .set and the store > NOTE- this might never be called
  // also get the cookies for the request's domain, and re-add to this.cookies (if electron parses response headers on it's own)

  loadCookies(callback) {
    let cookieStore = session.fromPartition(__WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].getCookiePartition()).cookies;

    // This makes sure we clear all the cookies in each domain, but retain the domain
    // We ignore the cache because, now the main process can delete cookies
    // and we have no means to update out cache.
    _.forEach(_.keys(this.cookies), domain => {
      this.cookies[domain] = {};
    });

    cookieStore.get({}, (error, cookies) => {
      try {
        if (error) {
          throw error;
        }

        _.each(cookies, cookie => {
          var domain = cookie.domain;
          if (domain[0] == '.') {
            domain = domain.substring(1);
          }
          if (!this.cookies.hasOwnProperty(domain)) {
            this.cookies[domain] = {};
          }
          this.cookies[domain][cookie.name] = cookie;
        });
        pm.mediator.trigger('loadedCookies', this.getDomainList());
      }
      catch (e) {
        console.error(e);
      } finally
      {
        _.isFunction(callback) && callback();
      }
    });
  }

  /**
    * @private
     * @param requestUrl - the URL as seen in the UI. Electron will do the domain resolution
     */
  reloadCookiesForDomain(requestUrl) {
    let cookieStore = session.fromPartition(__WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].getCookiePartition()).cookies;

    cookieStore.get({ url: requestUrl }, (error, cookies) => {
      if (error) {throw error;}

      _.each(cookies, cookie => {
        if (!this.cookies.hasOwnProperty(cookie.domain)) {
          this.cookies[cookie.domain] = {};
        }
        this.cookies[cookie.domain][cookie.name] = cookie;
      });
    });
  }

  getAllCookies() {
    return _.cloneDeep(this.cookies);
  }

  getAllCookiesAsync(cb) {
    let self = this,
    cookieStore = session.fromPartition(__WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].getCookiePartition()).cookies;

    cookieStore.get({}, (error, cookies) => {
      if (error) {
        return cb(error);
      }

      _.each(cookies, cookie => {
        var domain = cookie.domain;
        if (domain[0] == '.') {
          domain = domain.substring(1);
        }
        if (!this.cookies.hasOwnProperty(domain)) {
          this.cookies[domain] = {};
        }
        this.cookies[domain][cookie.name] = cookie;
      });

      cb(null, this.cookies);
    });
  }

  getCookiesForDomain(domain) {
    if (domain[0] === '.') {
      domain = domain.slice(1);
    }
    return this.cookies[domain];
  }

  getDomainList() {
    var retVal = [];
    for (var domain in this.cookies) {
      if (this.cookies.hasOwnProperty(domain)) {
        retVal.push(domain);
      }
    }
    return retVal;
  }

  // Acc. to the spec at https://tools.ietf.org/html/rfc6265#section-5.1.4
  getCookiesForUrl(url) {
    if (!url) {return [];}
    url = __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].ensureProperUrl(url);
    try {
      var urlObject = __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].getURLProps(url),
      hostname = urlObject.hostname,
      domainCookies = _.values(this.getCookiesForDomain(hostname));
      return _.filter(domainCookies, function (domainCookie) {
        return (
          !urlObject.pathname ||
          urlObject.pathname == domainCookie.path ||
          urlObject.pathname.indexOf(domainCookie.path) == 0 && (
          urlObject.pathname[domainCookie.path.length] == '/' ||
          _.last(domainCookie.path) == '/'));


      });
    }
    catch (e) {
      // invalid URL
      return [];
    }
  }

  /*
    * cookie string is the value of the Cookies header
    * add these cookies to URL
    */
  addCookies(url, cookieString) {
    try {
      var urlObject = __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].getURLProps(url);
      var host = urlObject.host;
      var cookies = __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */]._parseCookieHeader(host, cookieString);
      _.each(cookies, cookie => {
        this.addSingleCookie(url, host, cookie);
      });
    }
    catch (e) {
      console.error('Could not add cookies for invalid URL');
      console.error(e);
    }
  }

  addSingleCookie(url, host, cookie, callback) {
    let cookieStore = session.fromPartition(__WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].getCookiePartition()).cookies;
    if (!host) {return;}

    var urlKey = host;
    urlKey[0] == '.' && (urlKey = urlKey.substring(1));
    if (!this.cookies.hasOwnProperty(urlKey)) {
      this.cookies[urlKey] = {};
    }

    // cookie will be loaded once the callback is successful
    if (cookie.url.indexOf('http://') !== 0 && cookie.url.indexOf('https://') !== 0) {
      cookie.url = 'http://' + cookie.url;
    }

    if (!cookie.domain) {
      cookie.domain = host;
    }
    if (!cookie.Path) {
      cookie.Path = '/';
    }

    if (host[0] == '.') {
      host = host.substring(1);
    }
    var cookieToSet = {
      url: cookie.url,
      name: cookie.name,
      value: cookie.value,
      domain: host,
      path: cookie.path,
      secure: cookie.secure,
      expirationDate: cookie.expires,
      httpOnly: cookie.httpOnly };


    cookieStore.set(cookieToSet,
    error => {
      if (error) {
        _.isFunction(callback) && callback(error);
      }

      this.loadCookies(() => {
        _.isFunction(callback) && callback();
      });
    });
  }

  /**
    * Called when a New domain is added from the Cookie Modal
    * @private
    */
  addNewDomain(domainName) {
    if (!domainName || domainName == '') {
      return;
    }
    domainName = domainName.toLowerCase();
    if (!this.cookies.hasOwnProperty(domainName)) {
      this.cookies[domainName] = {};
    }
  }

  editCookie(domain, cookieName, newCookie, callback) {
    let cookieStore = session.fromPartition(__WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].getCookiePartition()).cookies;
    cookieStore.get({}, (error, cookies) => {
      _.each(cookies, cookie => {
        cookie.domain = cookie.domain[0] === '.' ? cookie.domain.slice(1) : cookie.domain;
        _.isEqual(cookie.domain, domain) && _.isEqual(cookie.name, cookieName) && this.deleteCookie(domain, cookieName, cookie.domain + cookie.path, error => {
          error && _.isFunction(callback) && callback(error);

          this.addSingleCookie(newCookie.url, newCookie.domain, newCookie, error => {
            _.isFunction(callback) && callback(error);
          });
        });
      });
    });
  }

  deleteDomain(domain, callback) {
    let cookieStore = session.fromPartition(__WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].getCookiePartition()).cookies,
    cookiesForDomain = this.cookies[domain];
    delete this.cookies[domain];

    var url = domain;
    for (var cookieName in cookiesForDomain) {
      var httpUrl = url,
      httpsUrl = url,
      path = cookiesForDomain[cookieName].path;
      if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
        httpUrl = 'http://' + url + path;
        httpsUrl = 'https://' + url + path;
      }

      cookieStore.remove(httpUrl, cookieName, error => {
        error && _.isFunction(callback) && callback(error);

        cookieStore.remove(httpsUrl, cookieName, error => {
          this.loadCookies(() => {
            _.isFunction(callback) && callback(error);
          });
        });
      });
    }
  }

  deleteCookie(domain, cookieName, url, callback) {
    let cookieStore = session.fromPartition(__WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].getCookiePartition()).cookies;
    delete this.cookies[domain[0] === '.' ? domain.slice(1) : domain][cookieName];

    if (url[0] === '.') {
      url = 'www' + url;
    }

    var httpUrl = url,
    httpsUrl = url;

    if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
      httpUrl = 'http://' + url;
      httpsUrl = 'https://' + url;
    }

    cookieStore.remove(httpUrl, cookieName, error => {
      error && _.isFunction(callback) && callback(error);

      cookieStore.remove(httpsUrl, cookieName, error => {
        error && _.isFunction(callback) && callback(error);

        this.loadCookies(() => {
          _.isFunction(callback) && callback();
        });
      });
    });
  }};



/* harmony default export */ __webpack_exports__["a"] = (CookieManager);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OAuth2TokenFetcher__ = __webpack_require__(1115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__ = __webpack_require__(18);



var DEFAULT_TOKEN_NAME = 'OAuth2 Token',
OAuth2Manager = Backbone.Model.extend({
  defaults: function () {
    return {
      oAuth2: {
        accessTokenUrl: '',
        addTokenTo: 'url',
        client_authentication: 'header',
        authUrl: '',
        clientId: '',
        clientSecret: '',
        grant_type: 'authorization_code',
        name: 'Token Name',
        password: '',
        redirect_uri: '',
        scope: '',
        state: '',
        showPassword: false,
        username: '' },

      savedOAuth2Tokens: [] };

  },

  initialize: function () {
    pm.mediator.on('addedOAuth2Token', this.addOAuth2Token, this);
    pm.mediator.on('loadedAllStoredOAuth2Tokens', this.loadCurrentTokens, this);
    this.oAuth2TokenFetcher = new __WEBPACK_IMPORTED_MODULE_0__OAuth2TokenFetcher__["a" /* default */]();
    this.loadCurrentTokens();
    this.on('change:oAuth2', this.updateDB);
    __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__["a" /* default */].
    findOne('authhelperstate', { id: 'oAuth2-meta' }).
    then(helper => {
      if (helper) {
        this.set('oAuth2', this.translateFromLegacy.oAuth2(helper.auth));
      }
    }).
    catch(e => {
      console.log('Error in fetching oauth2-meta');
    });
  },

  updateDB: function () {
    var helper = { id: 'oAuth2-meta' };
    helper.auth = this.translateIntoLegacy.oAuth2(this.toJSON().oAuth2);
    __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__["a" /* default */].
    findOne('authhelperstate', { id: 'oAuth2-meta' }).
    then(helperFromDb => {
      if (helperFromDb) {
        return __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__["a" /* default */].
        update('authhelperstate', helper);
      }
      return __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__["a" /* default */].
      create('authhelperstate', helper);
    }).
    catch(e => {
      console.log('Error in fetching oauth2-meta', e);
    });
  },

  setToDefault: function () {
    this.set(this.defaults());
  },

  processOAuth2RequestToken: function () {
    let params = this.get('oAuth2'); // Currently entered parameters on the UI
    this.oAuth2TokenFetcher.trigger('startAuthorization', this.translateIntoLegacy.oAuth2(params));
  },

  processOAuth2DeleteToken: function (token) {
    let currentTokens = _.clone(this.get('savedOAuth2Tokens'));

    pm.mediator.trigger('deleteOAuth2Token', token.id);

    currentTokens = currentTokens.filter(function (tk) {
      return tk.id !== token.id;
    });
    this.set('savedOAuth2Tokens', currentTokens);
  },

  loadOAuth2Token: function (rawToken) {
    let currentTokens = _.clone(this.get('savedOAuth2Tokens'));
    var newTokenData = _.zipObject(_.map(rawToken.data, 'key'), _.map(rawToken.data, 'value'));
    newTokenData.id = rawToken.id;
    newTokenData.name = rawToken.name;
    currentTokens.push(newTokenData);
    this.set('savedOAuth2Tokens', currentTokens);
  },

  addOAuth2Token: function (newToken) {
    let currentTokens = _.clone(this.get('savedOAuth2Tokens')),
    currentTokenDataInForm = this.get('oAuth2'),
    newTokenData;

    if (!_.isEmpty(currentTokenDataInForm.name) && _.isEmpty(newToken.name)) {
      let params = {
        id: newToken.id,
        name: currentTokenDataInForm.name };

      pm.mediator.trigger('updateOAuth2Token', params);
      newTokenData = _.zipObject(_.map(newToken.data, 'key'), _.map(newToken.data, 'value'));
      newTokenData.id = newToken.id;
      newTokenData.name = currentTokenDataInForm.name || DEFAULT_TOKEN_NAME;
      currentTokens.push(newTokenData);
      pm.mediator.trigger('newOAuth2Token', newTokenData);
      this.set('savedOAuth2Tokens', currentTokens);
    } else
    {
      newTokenData = _.zipObject(_.map(newToken.data, 'key'), _.map(newToken.data, 'value'));
      newTokenData.id = newToken.id;
      newTokenData.name = newToken.name || DEFAULT_TOKEN_NAME;
      currentTokens.push(newTokenData);
      pm.mediator.trigger('newOAuth2Token', newTokenData);
      this.set('savedOAuth2Tokens', currentTokens);
    }
  },

  loadCurrentTokens: function () {
    if (typeof pm.oAuth2Tokens !== 'undefined') {
      let currentTokens = pm.oAuth2Tokens.models || [];
      currentTokens.forEach(token => {
        let rawToken = token.toJSON();
        this.loadOAuth2Token(rawToken);
      });
    }
  },

  deleteAllTokens: function (callback) {
    pm.oAuth2Tokens && pm.oAuth2Tokens.
    deleteAllAccessTokens(() => {
      this.setToDefault();
      _.isFunction(callback) && callback();
    });
  },

  translateIntoLegacy: {
    oAuth2: function (newParams) {
      return {
        access_token_url: newParams.accessTokenUrl,
        add_token_to: newParams.addTokenTo || 'url',
        authorization_url: newParams.authUrl,
        client_authentication: newParams.client_authentication,
        client_id: newParams.clientId,
        client_secret: newParams.clientSecret,
        grant_type: newParams.grant_type,
        name: newParams.name,
        password: newParams.password,
        redirect_uri: newParams.redirect_uri,
        scope: newParams.scope,
        state: newParams.state,
        showPassword: newParams.showPassword,
        username: newParams.username };

    } },


  translateFromLegacy: {
    oAuth2: function (newParams) {
      return {
        accessTokenUrl: newParams.access_token_url,
        addTokenTo: newParams.add_token_to || 'url',
        authUrl: newParams.authorization_url,
        client_authentication: newParams.client_authentication,
        clientId: newParams.client_id,
        clientSecret: newParams.client_secret,
        grant_type: newParams.grant_type,
        name: newParams.name,
        password: newParams.password,
        redirect_uri: newParams.redirect_uri,
        scope: newParams.scope,
        state: newParams.state,
        showPassword: newParams.showPassword,
        username: newParams.username };

    } } });



/* harmony default export */ __webpack_exports__["a"] = (OAuth2Manager);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ModelToSdkTransformer__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_postman_collection__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__ = __webpack_require__(390);







/**
                                                                        * Interface that talks to {@link OAuth2TokenRequester} for completing OAuth 2.0 token generation flows.
                                                                        *
                                                                        * @class OAuth2TokenFetcher
                                                                        */
var OAuth2TokenFetcher = Backbone.Model.extend( /** @lends OAuth2TokenFetcher.prototype */{
  defaults: function () {
    return {
      id: 'oAuth2',
      authorization_url: '',
      access_token_url: '',
      client_id: '',
      client_secret: '',
      grant_type: 'authorization_code',
      scope: '' };

  },

  initialize: function () {
    this.on('startAuthorization', this.startAuthorization);
    __WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].on('oauth2TokenRequestCallback', this.onOAuth2TokenRequestCallback);
    __WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].on('oauth2TokenRequestResponse', this.onOAuth2TokenRequestResponse);
  },

  getVariablesMap() {
    let environmentValues = [],
    activeEnvironment = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore');
    if (activeEnvironment) {
      environmentValues = activeEnvironment.enabledValues;
    }
    let globals = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore').enabledValues;

    let variableMap = {};
    _.forEach(globals, global => {
      variableMap[global.key] = global.value;
    });
    _.forEach(environmentValues, environment => {
      variableMap[environment.key] = environment.value;
    });

    return variableMap;
  },

  /**
      * Sends IPC event to start OAuth 2.0 token request flow.
      * Also takes care or resolving environment variables in params.
      * @param {Object} params unresolved auth definition
      *
      * @fires IPC#oauth2GetNewToken
      */
  startAuthorization: function (params) {
    var authParams = {
      grant_type: _.clone(params.grant_type),
      access_token_url: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.access_token_url), this.getVariablesMap()),
      authorization_url: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.authorization_url), this.getVariablesMap()),
      client_authentication: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.client_authentication), this.getVariablesMap()),
      client_id: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.client_id), this.getVariablesMap()),
      client_secret: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.client_secret), this.getVariablesMap()),
      password: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.password), this.getVariablesMap()),
      redirect_uri: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.redirect_uri), this.getVariablesMap()) || '/',
      scope: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.scope), this.getVariablesMap()),
      state: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.state), this.getVariablesMap()),
      username: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.username), this.getVariablesMap()) };


    __WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].send('oauth2GetNewToken', authParams,
    {
      useSystemProxy: pm.settings.getSetting('useSystemProxy'),
      proxies: pm.proxyListManager.globalProxies.toJSON(),
      certificates: __WEBPACK_IMPORTED_MODULE_1__utils_ModelToSdkTransformer__["a" /* default */].getClientSslCerts(pm.certificateManager) },

    { cookiePartitionId: __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].getCookiePartition() });

  },

  /**
      * Listens to OAuth 2.0 token request success and adds the token to the OAuth 2 token list.
      *
      * @param {Object} event Ipc event
      * @param {String} rawErr stringified error
      * @param {String} rawResponse stringified token response
      *
      * @listens IPC#oauth2TokenRequestCallback
      * @fires Mediator#addOAuth2Token
      */
  onOAuth2TokenRequestCallback: function (event, rawErr, rawResponse) {
    let response = rawResponse && JSON.parse(rawResponse);

    if (rawErr) {
      let err = JSON.parse(rawErr);
      pm.alerts.error('Could not complete OAuth 2.0 login. Check Postman Console for more details.');

      // pm console swallows anything but the first argument
      pm.console.error('exception', err);
      pm.console.error('exception', response);

      // dump it on dev tools as well
      console.warn('Could not complete OAuth 2.0 login.', err, response);

      return;
    }

    pm.mediator.trigger('addOAuth2Token', response);
  },

  /**
      * Listens to OAuth 2.0 Token Request API response and logs it Postman Console.
      *
      * @param {Object} event IPC event
      * @param {String} rawErr stringified error
      * @param {Object} trace trace from runtime `io` event
      * @param {Object} cursor collection run cursor
      * @param {SDKResponse~definition} responseJSON json representation of sdk response
      * @param {SDKRequest~definition} requestJSON json representation of sdk request
      */
  onOAuth2TokenRequestResponse: function (event, rawErr, trace, cursor, responseJSON, requestJSON) {
    let err = rawErr && JSON.parse(rawErr),
    request = requestJSON && new __WEBPACK_IMPORTED_MODULE_2_postman_collection__["Request"](requestJSON),
    response = responseJSON && new __WEBPACK_IMPORTED_MODULE_2_postman_collection__["Response"](responseJSON),
    consolePayload = {};

    if (!trace || trace.type !== 'http' || !request) {
      return;
    }

    consolePayload.request = {
      url: _.invoke(request, 'url.toString'),
      method: requestJSON.method,
      headers: _.invoke(request, 'headers.toObject'),
      body: requestJSON.body,
      certificate: requestJSON.certificate,
      proxy: requestJSON.proxy };


    if (response) {
      consolePayload.response = {
        responseTime: response.responseTime,
        code: response.code,
        headers: _.invoke(response, 'headers.toObject'),
        body: response.size().body / 1024 > 1024 ? 'Responses larger than 1MB are not shown' : response.text() };

    }

    if (err) {
      pm.console.netErr(cursor.httpRequestId, err.message, consolePayload);
    } else
    {
      pm.console.net(cursor.httpRequestId, consolePayload);
    }
  } });


/* harmony default export */ __webpack_exports__["a"] = (OAuth2TokenFetcher);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronContextMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_DraftJsHelper__ = __webpack_require__(1158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_pipelines_user_action__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_EnvironmentController__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_GlobalsController__ = __webpack_require__(69);







/**
                                                                           * Handles context menu creation for Electron
                                                                           * Currently, the context menu supports:
                                                                           * 1. Encode/Decode URI Component for selected text
                                                                           * 2. Set as env var
                                                                           * 3. Set as global var
                                                                           * @private
                                                                           */let
ElectronContextMenu = class ElectronContextMenu {
  constructor() {
    this.Remote = __webpack_require__(7).remote;
    this.Menu = this.Remote.Menu;
    this.MenuItem = this.Remote.MenuItem;

    this.currentAceSelection = '';
    this.currentSelection = '';
    this.activeComponent = null;
    this.attachEventListeners();

    window.addEventListener('contextmenu', e => {
      e.preventDefault();
      this.currentSelection = window.getSelection().toString();
      let menu = this.buildMenu(e);

      // Empty menu fix for windows native app
      if (menu && _.size(menu.items)) {
        menu.popup(this.Remote.getCurrentWindow());
      }
    }, false);
  }

  attachEventListeners() {
    pm.mediator.on('textEditor:selectionChange', this.handleSelectionChange, this);
    pm.mediator.on('contextMenu:inputActivated', this.handleActiveInputChange, this);
  }

  handleSelectionChange(value) {
    this.currentAceSelection = value;
  }

  handleActiveInputChange(component) {
    this.activeComponent = component;
  }

  buildMenu(e) {
    let menu = new this.Menu(),
    isInput = _.get(e, 'target.nodeName') === 'INPUT',
    requesterTab;

    if (_.get(e, 'target.closest') && (requesterTab = e.target.closest('.requester-tab'))) {
      this.buildTabMenu(menu, _.get(requesterTab, 'dataset.tabId'), _.get(requesterTab, 'dataset.tabPreview'));
    } else
    if (!isInput && _.get(e, 'target.closest') && (e.target.closest('.collection-sidebar-list-item') ||
    e.target.closest('.collection-browser-list-item__folder') ||
    e.target.closest('.collection-browser-list-item__request'))) {
      return null;
    } else
    if (_.get(e, 'target.classList')) {
      if (e.target.classList.contains('requester-tab')) {
        this.buildTabMenu(menu, _.get(e.target, 'dataset.tabId'), _.get(e.target, 'dataset.tabPreview'));
      } else
      if (e.target.classList.contains('requester-tab__name')) {
        this.buildTabMenu(menu, _.get(e.target, 'dataset.tabId'), _.get(e.target, 'parentNode.dataset.tabPreview'));
      }
    }

    if (!_.isEmpty(this.currentSelection) || !_.isEmpty(this.currentAceSelection)) {
      this.buildGenericMenu(menu);
      this.buildEnvironmentMenu(menu);
      this.buildGlobalMenu(menu);
      this.buildEncodeDecodeMenu(menu);
    }

    // Display generic input menu for input
    else if (isInput) {
        this.buildGenericMenu(menu);
      }

    return menu;
  }

  buildTabMenu(menu, id, isPreview) {
    // Handle if only one tab
    if (isPreview === 'false') {
      menu.append(new this.MenuItem({
        label: 'Duplicate',
        click: () => {
          pm.tabManager.trigger('contextDuplicateTab', id);
        } }));

      menu.append(new this.MenuItem({ type: 'separator' }));
    }
    menu.append(new this.MenuItem({
      label: 'Close',
      accelerator: 'CommandOrControl+W',
      click: () => {
        pm.tabManager.trigger('contextCloseTab', id);
      } }));

    menu.append(new this.MenuItem({
      label: 'Force Close',
      accelerator: 'CommandOrControl+Alt+W',
      click: () => {
        pm.tabManager.forceCloseTab(id);
      } }));

    menu.append(new this.MenuItem({
      label: 'Close Other Tabs',
      click: () => {
        pm.tabManager.trigger('contextCloseOtherTabs', id);
      } }));

    menu.append(new this.MenuItem({
      label: 'Close All Tabs',
      click: () => {
        pm.tabManager.trigger('contextCloseAllTabs');
      } }));

    menu.append(new this.MenuItem({
      label: 'Force Close All Tabs',
      click: () => {
        pm.tabManager.forceCloseAllTabs();
      } }));

  }

  buildGenericMenu(menu) {
    menu.append(new this.MenuItem({
      label: 'Undo',
      role: 'undo' }));

    menu.append(new this.MenuItem({
      label: 'Redo',
      role: 'redo' }));

    menu.append(new this.MenuItem({ type: 'separator' }));
    menu.append(new this.MenuItem({
      label: 'Cut',
      role: 'cut' }));

    menu.append(new this.MenuItem({
      label: 'Copy',
      role: 'copy' }));

    menu.append(new this.MenuItem({
      label: 'Paste',
      role: 'paste' }));

    menu.append(new this.MenuItem({
      label: 'Select All',
      role: 'selectall' }));

    menu.append(new this.MenuItem({ type: 'separator' }));
  }

  buildEncodeDecodeMenu(menu) {
    menu.append(new this.MenuItem({
      label: 'EncodeURIComponent',
      click: () => {this.encodeURI();} }));

    menu.append(new this.MenuItem({
      label: 'DecodeURIComponent',
      click: () => {this.decodeURI();} }));

  }

  buildEnvironmentMenu(menu) {
    let environment = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore');
    if (!environment || _.isEmpty(environment.values)) {
      return;
    }
    let environmentName = environment.name;
    let submenu = new this.Menu();

    let environmentVars = environment.values || [];
    let environmentKeys = _.map(environmentVars, 'key');

    _.forEach(environmentKeys, key => {
      submenu.append(new this.MenuItem({
        label: key,
        click: () => {this.updateEnvironmentVariable(key);} }));

    });

    menu.append(new this.MenuItem({
      label: 'Set: ' + environmentName,
      type: 'submenu',
      submenu: submenu }));

  }

  buildGlobalMenu(menu) {
    let globals = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore');
    if (!globals || _.isEmpty(globals.values)) {
      return;
    }
    let submenu = new this.Menu();

    let globalVars = globals.values || [];
    let globalKeys = _.map(globalVars, 'key');

    _.forEach(globalKeys, key => {
      submenu.append(new this.MenuItem({
        label: key,
        click: () => {this.updateGlobalVariable(key);} }));

    });

    // Show Set:Globals only if globals are present
    if (_.size(globalKeys)) {
      menu.append(new this.MenuItem({
        label: 'Set: Globals',
        type: 'submenu',
        submenu: submenu }));

    }
  }

  encodeURI() {
    var selectionStart, selectionEnd, oldValue, newValue, args;
    if (_.get(this.activeComponent, 'refs.autoSuggest')) {
      var editorState = this.activeComponent.state.editorState,
      selectionObj = __WEBPACK_IMPORTED_MODULE_1__utils_DraftJsHelper__["a" /* default */].getAutoSuggestSelectionRange(editorState);
      oldValue = selectionObj.oldValue;
      selectionStart = selectionObj.selectionStart;
      selectionEnd = selectionObj.selectionEnd;
      args = [];
    } else
    {
      var inputBox = document.activeElement;
      selectionStart = inputBox.selectionStart;
      selectionEnd = inputBox.selectionEnd;
      if (!inputBox || !inputBox.value) {
        return;
      }
      oldValue = inputBox.value;
      args = [null];
    }
    try {
      newValue = oldValue.substring(0, selectionStart) +
      encodeURIComponent(oldValue.substring(selectionStart, selectionEnd)) +
      oldValue.substring(selectionEnd, oldValue.length);
    }
    catch (e) {
      return;
    }
    args.push(newValue);
    if (this.activeComponent && this.activeComponent.handleChange) {
      this.activeComponent.handleChange.apply(this.activeComponent, args);
    }
  }

  decodeURI() {
    var selectionStart, selectionEnd, oldValue, newValue, args;
    if (_.get(this.activeComponent, 'refs.autoSuggest')) {
      var editorState = this.activeComponent.state.editorState,
      selectionObj = __WEBPACK_IMPORTED_MODULE_1__utils_DraftJsHelper__["a" /* default */].getAutoSuggestSelectionRange(editorState);
      oldValue = selectionObj.oldValue;
      selectionStart = selectionObj.selectionStart;
      selectionEnd = selectionObj.selectionEnd;
      args = [];
    } else
    {
      var inputBox = document.activeElement;
      selectionStart = inputBox.selectionStart;
      selectionEnd = inputBox.selectionEnd;
      if (!inputBox || !inputBox.value) {
        return;
      }
      oldValue = inputBox.value;
      args = [null];
    }

    try {
      var newValue = oldValue.substring(0, selectionStart) +
      decodeURIComponent(oldValue.substring(selectionStart, selectionEnd)) +
      oldValue.substring(selectionEnd, oldValue.length);
    }
    catch (e) {
      return;
    }
    args.push(newValue);
    if (this.activeComponent && this.activeComponent.handleChange) {
      this.activeComponent.handleChange.apply(this.activeComponent, args);
    }
  }

  updateGlobalVariableFromContextMenu(variable, selectionText) {
    __WEBPACK_IMPORTED_MODULE_5__modules_controllers_GlobalsController__["a" /* default */].get({ workspace: Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore').workspace }).then(selectedGlobals => {
      let isSelectionEmpty = _.isEmpty(selectionText) || selectionText === String.fromCharCode(1);

      if (isSelectionEmpty && this.currentAceSelection) {
        selectionText = String(this.currentAceSelection);
      }

      if (selectedGlobals) {
        let values = _.clone(selectedGlobals.values);
        let count = values.length;
        let value;
        for (var i = 0; i < count; i++) {
          value = values[i];
          if (value.key === variable) {
            value.value = selectionText;
            break;
          }
        }
        let workspace = selectedGlobals.workspace;

        let updateGlobalsEvent = {
          name: 'update',
          namespace: 'globals',
          data: {
            workspace,
            values } };



        Object(__WEBPACK_IMPORTED_MODULE_2__modules_pipelines_user_action__["a" /* default */])(updateGlobalsEvent);
      }
    });
  }

  updateGlobalVariable(key) {
    let selection = this.currentSelection;
    this.updateGlobalVariableFromContextMenu(key, selection);
  }

  updateEnvironmentVariable(key) {
    let selection = this.currentSelection;
    this.updateEnvironmentVariableFromContextMenu(key, selection);
  }

  updateEnvironmentVariableFromContextMenu(variable, selectionText) {
    __WEBPACK_IMPORTED_MODULE_4__modules_controllers_EnvironmentController__["a" /* default */].get({ id: Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id }).then(selectedEnv => {
      let isSelectionEmpty = _.isEmpty(selectionText) || selectionText === String.fromCharCode(1);

      if (isSelectionEmpty && this.currentAceSelection) {
        selectionText = String(this.currentAceSelection);
      }

      if (selectedEnv) {
        let values = _.clone(selectedEnv.values);
        let count = values.length;
        let value;
        for (var i = 0; i < count; i++) {
          value = values[i];
          if (value.key === variable) {
            value.value = selectionText;
            break;
          }
        }
        let id = selectedEnv.id;
        let name = selectedEnv.name;

        let updateEnvironmentEvent = {
          name: 'update',
          namespace: 'environment',
          data: {
            id,
            name,
            values } };



        Object(__WEBPACK_IMPORTED_MODULE_2__modules_pipelines_user_action__["a" /* default */])(updateEnvironmentEvent);
      }
    });
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_draft_js_lib_getContentStateFragment__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_draft_js_lib_getContentStateFragment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_draft_js_lib_getContentStateFragment__);
let

DraftJsHelper = class DraftJsHelper {
  getAutoSuggestSelectionRange(editorState) {
    var fragment = __WEBPACK_IMPORTED_MODULE_0_draft_js_lib_getContentStateFragment___default()(editorState.getCurrentContent(), editorState.getSelection()),
    oldValue = editorState.getCurrentContent().getPlainText(),
    selectedValue = fragment // eslint-disable-line lodash/prefer-lodash-method
    .map(block => {
      return block.getText();
    }).join('\n'),
    selectionStart = oldValue.indexOf(selectedValue),
    selectionEnd = selectionStart + selectedValue.length;
    return {
      oldValue,
      selectionStart,
      selectionEnd };

  }};


/* harmony default export */ __webpack_exports__["a"] = (new DraftJsHelper());

/***/ }),

/***/ 1159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionClipboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_pipelines_user_action__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__ = __webpack_require__(33);

let

CollectionClipboard = class CollectionClipboard {
  cutItem(item, collectionId) {
    if (_.isEmpty(item)) {
      return;
    }
    this.clipboard = {
      id: item.id,
      type: item.type,
      collectionId: collectionId,
      action: 'cut' };

  }

  copyItem(item, collectionId) {
    if (_.isEmpty(item)) {
      return;
    }
    this.clipboard = {
      id: item.id,
      type: item.type,
      collectionId: collectionId,
      action: 'copy' };

  }

  async pasteItem(destination) {
    let source = this.getClipboard();

    if (_.isEmpty(source)) {
      return;
    }

    if (source.action === 'cut') {
      this.clearClipboard();
      let moveEvent = {};

      if (destination.type === 'request' && source.type === 'request') {
        moveEvent = {
          name: 'move',
          namespace: 'request',
          data: {
            model: 'request',
            request: { id: source.id },
            after: {
              model: destination.type,
              modelId: destination.id } } };



      } else

      if (_.includes(['collection', 'folder'], destination.type) && _.includes(['request', 'folder'], source.type)) {
        moveEvent = {
          name: 'move',
          namespace: source.type,
          data: {
            model: source.type,
            [source.type]: { id: source.id },
            target: {
              model: destination.type,
              modelId: destination.id } } };



      } else
      if (destination.type === 'request' && source.type === 'folder') {
        let destinationRequest = await __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getRequest({ id: destination.id });

        moveEvent = {
          name: 'move',
          namespace: source.type,
          data: {
            model: source.type,
            [source.type]: { id: source.id },
            target: {
              model: destinationRequest.folder ? 'folder' : 'collection',
              modelId: destinationRequest.folder ? destinationRequest.folder : destinationRequest.collection } } };



      }
      if (!_.isEmpty(moveEvent)) {
        Object(__WEBPACK_IMPORTED_MODULE_0__modules_pipelines_user_action__["a" /* default */])(moveEvent).
        then(response => {
          if (!_.isEmpty(_.get(response, 'error'))) {
            console.error(`Error while moving ${source.type} ${destination.type}`, response.error);
            return;
          }
        }).
        catch(err => {
          console.error(`Error in pipeline while moving ${source.type} ${destination.type}`, err);
        });
      }
    } else
    if (source.action === 'copy') {
      this.clearClipboard();
      let duplicateEvent = {};

      if (destination.type === 'request' && _.includes(['request', 'folder'], source.type)) {
        let destinationRequest = await __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getRequest({ id: destination.id });
        duplicateEvent = {
          name: 'duplicate',
          namespace: source.type,
          data: {
            model: source.type,
            [source.type]: { id: source.id },
            target: {
              model: destinationRequest.folder ? 'folder' : 'collection',
              modelId: destinationRequest.folder ? destinationRequest.folder : destinationRequest.collection } } };



      } else

      if (_.includes(['folder', 'collection'], destination.type) && _.includes(['folder', 'request'], source.type)) {
        duplicateEvent = {
          name: 'duplicate',
          namespace: source.type,
          data: {
            model: source.type,
            [source.type]: { id: source.id },
            target: {
              model: destination.type,
              modelId: destination.id } } };



      }

      if (!_.isEmpty(duplicateEvent)) {
        Object(__WEBPACK_IMPORTED_MODULE_0__modules_pipelines_user_action__["a" /* default */])(duplicateEvent).
        then(response => {
          if (!_.isEmpty(_.get(response, 'error'))) {
            console.error(`Error while duplicating ${source.type} on ${destination.type}`, response.error);
            return;
          }
        }).
        catch(err => {
          console.error(`Error in pipeline while duplicating ${source.type} on ${destination.type}`, err);
        });
      }
    }
  }

  getClipboard() {
    return this.clipboard;
  }

  clearClipboard() {
    this.clipboard = null;
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootStore__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootShortcuts__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootSyncProxy__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bootTab__ = __webpack_require__(1163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_UIZoom__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_ProxyListManager__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_AppUpdateNotifier__ = __webpack_require__(1166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_OnboardingManager__ = __webpack_require__(1168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_tcp_ElectronTCPReader__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_requests_CertificateManager__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_notifications_NotificationManager__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_ProtocolHandler__ = __webpack_require__(1172);















/**
                                                             *
                                                             * @param {*} cb
                                                             */
function bootRequester(cb) {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_1__bootStore__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__bootShortcuts__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__bootSyncProxy__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__bootTab__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_12__models_ProtocolHandler__["a" /* default */].initialize],
  err => {
    _.assign(window.pm, {
      proxyListManager: new __WEBPACK_IMPORTED_MODULE_6__controllers_ProxyListManager__["a" /* default */](), // [settings]
      certificateManager: new __WEBPACK_IMPORTED_MODULE_10__models_requests_CertificateManager__["a" /* default */](), // [settings]
      uiZoom: new __WEBPACK_IMPORTED_MODULE_5__controllers_UIZoom__["a" /* default */](), // [settings]
      updateNotifier: new __WEBPACK_IMPORTED_MODULE_7__models_AppUpdateNotifier__["a" /* default */](), // [appwindow, settings, app]

      notifications: new __WEBPACK_IMPORTED_MODULE_11__models_notifications_NotificationManager__["a" /* default */](), // [appwindow, user, team_directory]
      tcpReader: new __WEBPACK_IMPORTED_MODULE_9__models_tcp_ElectronTCPReader__["a" /* default */](), // [settings, appwindow]
      onboardingManager: new __WEBPACK_IMPORTED_MODULE_8__models_OnboardingManager__["a" /* default */]() // [settings]
    });
    pm.appWindow.sendToElectron({ event: 'postmanInitialized' }); // Initialize protocol handline need revisit
    return cb && cb(err);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (bootRequester);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_store_handler__ = __webpack_require__(1162);


/**
                                                                       *
                                                                       */
function bootStore(cb) {

  let modelEventsChannel = pm.eventBus.channel('model-events');
  modelEventsChannel.subscribe(__WEBPACK_IMPORTED_MODULE_0__stores_store_handler__["a" /* handleModelEventOnStore */]);

  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootStore);

/***/ }),

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleModelEventOnStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_model_event__ = __webpack_require__(3);



/**
                                                                                                                     *
                                                                                                                     * @param {Object} event
                                                                                                                     */
function handleModelEventOnStore(event) {
  let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["g" /* getEventNamespace */])(event),
  storeListeners = _.get(pm, ['stores', '_listeners']),
  activeListenersFor = new Set(),
  matchedListeners = [];

  // @todo: this may have issues, when a top level event does not have a store initialized
  // but low level events have stores initialized
  if (!storeListeners) {
    return;
  }

  storeListeners.forEach(storeListenerForNamespace => {
    _.forEach(_.keys(storeListenerForNamespace), listenerName => {
      activeListenersFor.add(listenerName);
    });
  });

  return Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["i" /* processEvent */])(event, Array.from(activeListenersFor), function processEventOnStore(event, cb) {
    if (!storeListeners.has(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["g" /* getEventNamespace */])(event))) {
      return cb && cb();
    }
    let storeListenersForNamespace = storeListeners.get(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["g" /* getEventNamespace */])(event)),
    action = Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["f" /* getEventName */])(event),
    listeners = storeListenersForNamespace[action];

    _.forEach(listeners, function (listener) {
      // we create new functions instead of binding
      // listener is already bound with the `store`, we can't find it, or change it
      listener && matchedListeners.push(function () {
        listener(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["d" /* getEventData */])(event), Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["e" /* getEventMeta */])(event));
      });
    });

    cb && cb();
  }, function () {
    // wrapping all the individual listeners for an event in a transactions
    Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["o" /* transaction */])(function () {
      // listeners are synchronous anyway
      _.forEach(matchedListeners, function invokeStoreListener(listener) {
        listener && listener();
      });
    });
  });
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_tabs_TabManager__ = __webpack_require__(1164);


/**
                                                        *
                                                        * @param {*} cb
                                                        */
function bootTab(cb) {
  _.assign(window.pm, { tabManager: new __WEBPACK_IMPORTED_MODULE_0__models_tabs_TabManager__["a" /* default */]() });

  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootTab);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__requests_Request__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_CollectionController__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_UserController__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_CollectionPermissionService__ = __webpack_require__(190);











/**
                                                                                               * Add some extra properties to backbone Request instance which are not
                                                                                               * present in the Request snapshot from database
                                                                                               */
function getLegacyRequest(req) {
  if (!req) {
    return new __WEBPACK_IMPORTED_MODULE_0__requests_Request__["a" /* Request */]();
  }

  req.collectionId = req.collectionId || req.collection || null;
  if (req.collectionId) {
    req.isFromCollection = true;
  }
  return new __WEBPACK_IMPORTED_MODULE_0__requests_Request__["a" /* Request */](req);
}


/**
   * The notification identifier
   *
   * @typedef {String} TabNotification
   */

/**
       * @typedef {Object} BuilderState
       *
       * @todo Confirm what latestRequestMap is supposed to be doing
       *
       * @property {Object} tabs - Serialized representation of all tabs
       * @property {UUID} activeTab - ID of the currently active tab
       * @property {Object} latestRequestMap - Serialized representation of all tabs, keyed by the request ID
       */

/**
           * JSON representation of a tab
           *
           * @typedef Tab~definition
           *
           * @property {UUID} id                            - ID of the tab
           * @property {Request} request                    - Request currently loaded in the tab
           * @property {Timestamp} timestamp                - ID of the tab
           * @property {Request} iinitialRequest            - The currently active request, this is used when calculating the tab's dirty status when in request mode
           * @property {Boolean} isDirty                    - Indicates if the tab is dirty
           * @property {Boolean} isGhost                    - Indicates if the tab is a ghost tab
           * @property {Boolean} isPreview                  - Indicates if the tab is a preview tab
           * @property {TabNotification[]} notifications    - The notifications associated with the tab
           * @property {String} mode                        - The current tab mode. (`example` or `request`)
           * @property {String} responseBodyView            - The response body display mode
           * @property {UUID} requestRevisionId             - Revision ID of the currently loaded request
           * @property {Response~definition} initialExample - The currently active example, this is used when calculating the tab's dirty status when in example mode
           */

/**
               * Backbone Model representing a single tab
               * @class Tab
               * @extends {Backbone.Model}
               *
               * @property {UUID} id                            - ID of the tab
               * @property {Request} request                    - Request currently loaded in the tab
               * @property {Timestamp} timestamp                - ID of the tab
               * @property {Request} iinitialRequest            - The currently active request, this is used when calculating the tab's dirty status when in request mode
               * @property {Boolean} isDirty                    - Indicates if the tab is dirty
               * @property {Boolean} isGhost                    - Indicates if the tab is a ghost tab
               * @property {Boolean} isPreview                  - Indicates if the tab is a preview tab
               * @property {TabNotification[]} notifications    - The notifications associated with the tab
               * @property {String} mode                        - The current tab mode. (`example` or `request`)
               * @property {String} responseBodyView            - The response body display mode
               * @property {UUID} requestRevisionId             - Revision ID of the currently loaded request
               * @property {Response~definition} initialExample - The currently active example, this is used when calculating the tab's dirty status when in example mode
               */
var Tab = Backbone.Model.extend( /** @lends Tab.prototype */{
  /**
                                                               * Returns a set of defaults for a tab
                                                               *
                                                               * @returns {Tab~definition} - The defaults for a tab
                                                               */
  defaults: function () {
    return {
      'id': __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].guid(),
      'request': new __WEBPACK_IMPORTED_MODULE_0__requests_Request__["a" /* Request */](),
      'timestamp': Date.now(),
      'initialRequest': null,
      'isDirty': false,
      'isGhost': false,
      'isPreview': false,
      'isBusy': false,
      'notifications': [],
      'mode': 'request',
      'responseBodyView': 'pretty',
      'requestRevisionId': null,
      'initialExample': null,
      'originalRequestState': null };

  },

  /**
      * Adds a notification to the tab's notification list
      *
      * @param {TabNotification} notification - The notification to add to the tab
      *
      * @fires Tab#change
      * @fires Tab#change:notifications
      */
  setNotification(notification) {
    let notifications = this.get('notifications');
    if (!_.includes(notifications, notification)) {
      let newNotifications = _.concat(notifications, notification);
      this.set('notifications', newNotifications);
    }
  },

  /**
      * Removes a notification from the tab's notification list
      *
      * @param {TabNotification} notification - The notification to remove from the tab
      *
      * @fires Tab#change
      * @fires Tab#change:notifications
      */
  unsetNotification(notification) {
    let notifications = this.get('notifications');
    if (_.includes(notifications, notification)) {
      let newNotifications = _.reject(notifications, elem => {
        return elem === notification;
      });
      this.set('notifications', newNotifications);
    }
  },

  /**
      * Marks / unmarks the tab as a Preview tab
      *
      * @param {Boolean} value - Indicates if the tab should be marked as a preview or not.
      *
      * @fires Tab#change
      * @fires Tab#change:isPreview
      */
  setPreview: function (value) {
    this.set('isPreview', value);
  },

  /**
      * Marks / unmarks the tab as a Ghost tab
      *
      * @param {Boolean} value - Indicates if the tab should be marked as a ghost or not.
      *
      * @fires Tab
      * @fires Tab#change:isGhost
      */
  toggleGhost: function (isGhost) {
    this.set('isGhost', isGhost);
  },

  /**
      * Loads a request into the tab. Also sets the tab mode to request mode.
      * Also updates the `isDirty` flag for the model.
      *
      * @param {Request} request - The request to load
      * @param {Object} options - Options
      * @param {Boolean=true} [options.checkDirty] - Check for the dirty
      *
      * @fires Tab#change
      * @fires Tab#change:mode
      * @fires Tab#change:request
      *
      * @see Tab#setInitialRequest
      */
  setRequest: function (request, { checkDirty = true } = {}) {
    this.disableDirtyCheck();
    this.get('mode') === 'exampleResponse' && this.set('mode', 'request');
    this.set('request', request);
    this.setInitialRequest(request);
    this.enableDirtyCheck({ checkDirty });
  },

  /**
      * Sets the tab's request's URL
      *
      * @param {URL} url - URL that needs to be set
      *
      * @fires Tab#change
      * @fires Tab#change:request
      * @fires Request#change
      * @fires Request#change:url
      */
  setUrl: function (url) {
    let newRequest = this.get('request');
    newRequest.set('url', url);
    this.set('request', newRequest);
  },

  /**
      * Detaches all dirty check related listeners from the tab, effectively disabling dirty checking for the tab.
      * Also marks the current tab as non-dirty.
      */
  disableDirtyCheck: function () {
    let request = this.get('request');
    this.off('change:mode', this.checkDirty, this);
    request && request.off('change', this.checkDirty, this);
    request && request.off('responseChanged', this.checkDirty, this);
    request && request.get('body').off('change', this.checkDirty, this);
    request && request.get('response').off('change', this.checkDirty, this);
    this.setDirty(false);
  },

  enableDirtyCheck: function ({ checkDirty = true } = {}) {
    let request = this.get('request');
    this.on('change:mode', this.checkDirty, this);
    request && request.on('change', this.checkDirty, this);
    request && request.on('responseChanged', this.checkDirty, this);
    request && request.get('body').on('change', this.checkDirty, this);
    request && request.get('response').on('change', this.checkDirty, this);
    checkDirty && this.checkDirty();
  },

  /**
      * Compares two examples and checks if they are the same
      *
      * @param {ExampleResponse} savedExample   - The first example to compare
      * @param {ExampleResponse} currentExample - The second example to compate
      *
      * @returns {Boolean} - Indicates if the two examples are the same
      */
  compareExamples(savedExample, currentExample) {
    let pickSavedExample = _.pick(savedExample, ['cookies', 'headers', 'language', 'name', 'request', 'responseCode', 'status', 'text']),
    pickCurrentExample = _.pick(currentExample, ['cookies', 'headers', 'language', 'name', 'request', 'responseCode', 'status', 'text']);

    pickSavedExample.request = _.pick(pickSavedExample.request, ['url', 'headerData', 'data', 'method', 'dataMode', 'queryParams', 'pathVariableData']);
    pickCurrentExample.request = _.pick(pickCurrentExample.request, ['url', 'headerData', 'data', 'method', 'dataMode', 'queryParams', 'pathVariableData']);
    return _.isEqual(pickSavedExample, pickCurrentExample);
  },

  /**
      * Checks if a tab in Example mode is dirty, and accordingly sets the tab's dirty status
      */
  checkDirtyExample() {
    let request = this.get('request'),
    responses = request.get('responses'),
    responseModel = request.get('response'),
    responseId = responseModel.get('id'),
    currentResponse = responseModel.toJSON(),
    staticRequest = {
      'url': request.get('url'),
      'headerData': _.map(request.get('headerData'), header => {return _.pick(header, ['key', 'value', 'description', 'enabled']);}),
      'data': request.get('body') ? request.get('body').get('data') : null,
      'method': request.get('method'),
      'dataMode': request.get('body') ? request.get('body').get('dataMode') : 'params',
      'pathVariableData': request.get('pathVariableData'),
      'queryParams': request.get('queryParams') };


    let savedResponse = _.cloneDeep(this.get('initialExample'));
    if (savedResponse) {
      currentResponse.request = staticRequest;
      savedResponse.headers = _.map(savedResponse.headers, header => {return _.pick(header, ['key', 'value', 'name']);});
      currentResponse.headers = _.map(currentResponse.headers, header => {return _.pick(header, ['key', 'value', 'name']);});
      savedResponse.responseCode = _.omit(savedResponse.responseCode, ['detail']);
      currentResponse.responseCode = _.omit(currentResponse.responseCode, ['detail']);
      if (this.compareExamples(savedResponse, currentResponse)) {
        this.setDirty(false);
      } else
      {
        this.setDirty(true);
      }
    }
  },

  /**
      * Checks if the tab is dirty and accordingly sets the tab's dirty status
      *
      * @listens Tab#change:mode
      * @listens Request#change
      * @listens Request#responseChanged
      * @listens RequestBody#change
      * @listens Response#change
      */
  checkDirty: function () {
    let request = this.get('request'),
    responseModel = request.get('response'),
    responseId = responseModel.get('id'),
    initial = this.get('initialRequest');


    if (this.get('mode') === 'exampleResponse') {
      if (responseId) {
        this.checkDirtyExample();
      } else
      {
        this.setDirty(true);
      }
      return;
    }

    if (!initial) {
      return;
    }

    try {
      var current = this.get('request').getAsObject();
    }
    catch (e) {
      return;
    }

    if (!current) {
      return;
    }
    if (__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].compareRequests(current, initial)) {
      this.setDirty(true);
    } else
    {
      this.setDirty(false);
    }
  },

  /**
      * Sets the `initialRequest` property of the tab to the request provided.
      * This is used to compare the tab's dirty status when a new request is loaded / a change is made to a saved request
      *
      * @param {Request~definition} request - The request that will be set to the `initialRequest` property
      *
      * @fires Tab#change
      * @fires Tab#change:initialRequest
      */
  setInitialRequest: function (request) {
    let initialRequest = request;

    if (request && request.getAsObject) {
      initialRequest = request.getAsObject();
    }
    this.set('initialRequest', initialRequest);
  },

  /**
      * Sets the `initialExample` property of the tab.
      * This is used to compare the tab's dirty status when a new example is loaded / a change is made to a saved example
      *
      * @param {Request} request - The request that will be attached to the `initialExample` property
      * @param {ExampleResponse} response - The example that will be set to the `initialExample` property
      *
      * @fires Tab#change
      * @fires Tab#change:initialExample
      */
  setInitialExample: function (request, response) {
    let initialExample = request;
    if (response) {
      initialExample = _.omit(response.toJSON(), ['sdkResponse']);
    }
    initialExample.request = _.invoke(request, 'getAsObject') || null;
    this.set('initialExample', initialExample);
    this.enableDirtyCheck();
  },

  setOriginalRequestState(requestState) {
    this.disableDirtyCheck();
    if (this.get('originalRequestState')) {
      return;
    }
    let currentRequestJSON = this.get('request').toJSON();
    currentRequestJSON.data = currentRequestJSON.body.get('data');
    currentRequestJSON.dataMode = currentRequestJSON.body.get('dataMode');
    let request = getLegacyRequest(_.cloneDeep(currentRequestJSON));

    this.set('originalRequestState', request);
  },

  restoreRequestState() {
    this.disableDirtyCheck();
    let request = this.get('originalRequestState');
    let responses = this.get('request').get('responses') || [];
    if (_.isEmpty(request)) {
      return;
    }
    request.set('responses', responses);
    this.set('request', request);
    this.set('originalRequestState', null);
    this.set('mode', 'request');
    request.trigger('responseChanged');
    this.enableDirtyCheck();
  },

  /**
      * Sets the tab's `requestRevisionId` to the given value
      *
      * @param {UUID} revisionId - The revision to set
      *
      * @fires Tab#change
      * @fires Tab#change:requestRevisionId
      */
  setRequestRevisionId: function (revisionId) {
    this.set('requestRevisionId', revisionId);
  },

  /**
      * Sets a tab's dirty status (`isDirty` property) to the given value.
      * Also marks the tab as not preview if isDirty is true.
      *
      * @param {Boolean} isDirty - The value to set `isDirty` to
      */
  setDirty: function (isDirty) {
    this.set('isDirty', isDirty);
    isDirty && this.setPreview(false);
  } });


/**
         * Controls all tabs
         *
         * @class TabManager
         * @extends {Backbone.Collection}
         */
var TabManager = Backbone.Collection.extend( /** @lends TabManager.prototype */{
  /**
                                                                                  * @member Tab
                                                                                  */
  model: Tab,

  /**
               * Sets up event listeners
               *
               * @listens Mediator#activeRequestChanged
               * @listens Mediator#ifecycle:completed
               */
  initialize: function () {
    this.latestRequestMap = {};
    this.saveInProgress = false;
    this.saveState = this.saveState.bind(this);
    this.handleSaveState = this.handleSaveState.bind(this);
    this.closeOtherTabs = this.closeOtherTabs.bind(this);
    this.closeAllTabs = this.closeAllTabs.bind(this);
    this.addGhostTab = this.addGhostTab.bind(this);
    this.debouncedGhostTab = _.debounce(this.addGhostTab, 300);
    this.engageActiveTab = this.engageActiveTab.bind(this);
    this.on('contextCloseOtherTabs', this.closeOtherTabs);
    this.on('contextCloseAllTabs', this.closeAllTabs);
    this.on('contextDuplicateTab', this.loadDuplicateTab, this);
    pm.mediator.on('loadRequest', this.loadRequestIntoTab, this);
    pm.mediator.on('loadRequestInNewTab', this.loadRequestInNewTab, this);
    pm.mediator.on('addedRequestToTheCollection', this.handleAddRequestToTheCollection, this);
    pm.mediator.on('requestSaved', this.handleRequestSavedToCollection, this);
    pm.appWindow.trigger('registerInternalEvent', 'nextTab', this.switchToNextTab, this);
    pm.appWindow.trigger('registerInternalEvent', 'previousTab', this.switchToPreviousTab, this);
    pm.mediator.on('activeRequestChanged', this.handleSaveState);
    pm.mediator.on('request:send', this.engageActiveTab);
    pm.appWindow.trigger('registerInternalEvent', 'saveAllWindowState', this.saveAllWindowState, this);

    this.addNewTab();

    Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["l" /* reaction */])(() => Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace, () => {
      let sessionData = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').sessionData;
      this.loadLastSavedRequests({
        tabs: Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["n" /* toJS */])(sessionData.tabs),
        activeTab: Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["n" /* toJS */])(sessionData.activeTab),
        latestRequestMap: Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["n" /* toJS */])(sessionData.latestRequestMap) });

    });

    pm.eventBus.channel('model-events').subscribe((modelEvent = {}) => {
      Object(__WEBPACK_IMPORTED_MODULE_5__modules_model_event__["i" /* processEvent */])(modelEvent, ['updated', 'deleted'], (event, callback) => {
        let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_5__modules_model_event__["g" /* getEventNamespace */])(event);
        if (eventNamespace !== 'request') {
          return;
        }

        let eventName = Object(__WEBPACK_IMPORTED_MODULE_5__modules_model_event__["f" /* getEventName */])(event),
        request = Object(__WEBPACK_IMPORTED_MODULE_5__modules_model_event__["d" /* getEventData */])(event);

        if (eventName === 'updated') {
          this.handleUpdateCollectionRequest(request);
        } else
        if (eventName === 'deleted') {
          this.handleDeleteCollectionRequest(request.id);
        }

        return callback && callback();
      });
    });
  },

  handleSaveState() {
    window.requestIdleCallback ? window.requestIdleCallback(this.saveState) : this.saveState();
  },

  /**
      * Returns the current state of the builder
      *
      * @returns {BuilderState} - The current builder state
      */
  getState() {
    return {
      tabs: this.serialize(),
      activeTab: this.currentTabId,
      latestRequestMap: _.mapValues(this.latestRequestMap, (value, key) => {
        return _.pick(this.latestRequestMap[key], ['revisionId']);
      }) };

  },

  /**
      * Saves the current builder state, open tabs etc.
      *
      * @listens AppWindow#saveAllWindowState
      *
      * @fires AppWindow#quitApp
      */
  saveAllWindowState: function () {
    pm.app.saveBuilderState(this.getState(), () => {
      pm.appWindow.trigger('sendMessageObject', 'quitApp');
    });
  },

  /**
      * Saves the current builder state to IndexedB
      */
  saveState: function () {
    Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').updateState(this.getState());
  },

  /**
      * Responds to all collections being loaded from the IndexedDB.
      * Loads Example responses from IndexedDB to memory.
      *
      * @listens TabManager#loadedCollections
      */
  loadTabSavedExamples: async function () {
    let tabs = this.toJSON();
    await Promise.all(_.map(tabs, async tab => {
      let request = tab.request;
      let collectionRequest = await __WEBPACK_IMPORTED_MODULE_6__modules_controllers_CollectionController__["a" /* default */].getRequest({ id: request.get('id') }, { populate: true });
      if (collectionRequest) {
        request.set('responses', collectionRequest.responses);
      }
    }));
  },

  /**
      * Resets all tabs and loads all requests in the currently active session
      *
      * @fires Tab#change
      * @fires Tab#change:reques
      * @fires Mediator#activeRequestChanged
      */
  loadLastSavedRequests: function (sessionData) {
    this.reset();

    if (!sessionData) {
      this.addNewTab(true);
      return;
    }

    const { activeTab, tabs, latestRequestMap } = sessionData;

    if (_.isEmpty(tabs)) {
      this.addNewTab(true);
      return;
    }

    _.each(tabs, t => {
      let tab = new Tab(t);

      // Normalize the saved tab requests
      __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].normalizeRequest(t.request);

      let request = __WEBPACK_IMPORTED_MODULE_0__requests_Request__["a" /* Request */].deserialize(t.request),
      originalRequestState = t.originalRequestState && __WEBPACK_IMPORTED_MODULE_0__requests_Request__["a" /* Request */].deserialize(t.originalRequestState);

      this.latestRequestMap = latestRequestMap || {};

      tab.set('request', request);
      if (originalRequestState) {
        tab.set('originalRequestState', originalRequestState);
      }

      // fix invalid request lifecycle. set to idle if the request had no completed.
      if (!_.includes(['idle', 'completed', 'error', 'PRScriptError', 'testScriptsError'], request.get('lifecycle'))) {
        request.set('lifecycle', 'idle');
      }

      this.add(tab);

      if (request.get('isFromCollection')) {
        __WEBPACK_IMPORTED_MODULE_6__modules_controllers_CollectionController__["a" /* default */].
        getRequest({ id: request.get('id') }).
        then(dbRequest => {
          if (dbRequest) {
            tab.disableDirtyCheck();
            tab.setInitialRequest(getLegacyRequest(dbRequest));
            tab.enableDirtyCheck();
          } else
          {
            tab.disableDirtyCheck();
            tab.setInitialRequest(new __WEBPACK_IMPORTED_MODULE_0__requests_Request__["a" /* Request */](tab.get('initialRequest')));
            tab.enableDirtyCheck();
          }
        });
      } else
      {
        tab.disableDirtyCheck();
        tab.setInitialRequest(new __WEBPACK_IMPORTED_MODULE_0__requests_Request__["a" /* Request */](tab.get('initialRequest')));
        tab.enableDirtyCheck();
      }

      // Switch to active tab
      if (activeTab === tab.get('id')) {
        this.switchTab(tab.get('id'));
        pm.mediator.trigger('activeRequestChanged', request.id);
      }
    });

    this.loadTabSavedExamples();
  },

  /**
      * Responds to a collection request being deleted.
      * Marks the currently loaded request as not being part of any collection.
      *
      * @param {UUID} requestId - ID of the request that was deleted
      *
      * @listens Mediator#removeCollectionRequest
      */
  handleDeleteCollectionRequest: function (requestId) {
    if (!requestId) {
      return;
    }

    let tabs = this.getTabsByRequestId(requestId);
    if (_.isEmpty(tabs)) {
      return;
    }

    _.forEach(tabs, tab => {
      let request = tab.get('request');
      request.set({
        isFromCollection: false,
        collection: null,
        collectionId: null });

      tab.setInitialRequest(new __WEBPACK_IMPORTED_MODULE_0__requests_Request__["a" /* Request */]());
    });
  },

  /**
      * Gets a given tab's position (index)
      *
      * @param {UUID} tabId - ID of the tab whose position is needed
      *
      * @returns {Number} - The position of the tab, -1 if the tab isn't found
      */
  getTabIndex: function (tabId) {
    return _.findIndex(this.models, tab => {
      return tab.id === tabId;
    });
  },

  /**
      * Checks to see if a tab's request has been updated (via collections)
      *
      * @param {UUID} requestId - ID of the request that is loaded in the tab
      * @param {UUID} tabId     - ID of the tab that needs to be checked
      *
      * @returns {Boolean} - Indicates if the request has been updated
      */
  isTabRequestUpdated: function (requestId, tabId) {
    const index = this.getTabIndex(tabId);

    if (index < 0) {
      return false;
    }

    const tab = this.models[index],
    latestRequest = this.latestRequestMap[requestId];
    return tab.get('isDirty') && latestRequest && latestRequest.revisionId !== tab.get('requestRevisionId');
  },

  /**
      * Returns the latest version of the request as stored in `latestRequestMap`
      *
      * @param {UUID} requestId - ID of the request
      *
      * @returns {Request} - The request
      */
  getUpdatedTabRequest: function (requestId) {
    return this.latestRequestMap[requestId];
  },

  /**
      * Responds to a request being updated.
      * This will update the tab based on the changes that were made to the request.
      * @todo Confirm what delta is doing
      *
      * @param {Request} newRequest     - The request that was updated
      * @param {Object | Boolean} delta - Incomplete
      *
      * @fires Request#change
      * @fires Request#change:headers
      * @fires Request#change:headerData
      *
      * @listens Mediator#updateCollectionRequest
      */
  handleUpdateCollectionRequest: function (newRequest) {
    let tabs = this.getTabsByRequestId(newRequest.id);

    if (_.isEmpty(tabs)) {
      if (this.tabClosingInProgress && this.saveInProgress) {
        this.saveInProgress = false;
        this.deleteAdjacentTab(this.deleteTabIndex - 1);
      }
      this.saveInProgress = false;
      return;
    }

    let nextRequest = getLegacyRequest(newRequest);
    nextRequest.set('headerData', nextRequest.getHeaderData());

    const revisionId = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].guid();
    this.latestRequestMap[nextRequest.id] = nextRequest.getAsObject();
    this.latestRequestMap[nextRequest.id].revisionId = revisionId;

    this.handleSaveState();

    _.forEach(tabs, tab => {
      let request = tab.get('request');
      request.set('name', newRequest.name);
      request.set('description', newRequest.description);

      nextRequest.set('isFromCollection', request.get('isFromCollection'));
      nextRequest.set('name', request.get('name'));
      nextRequest.set('description', request.get('description'));

      if (tab.get('request').get('id') === nextRequest.get('id')) {
        let activeTab = this.getCurrentTab();
        if (activeTab && activeTab.id === tab.get('id')) {
          tab.setRequestRevisionId(revisionId);
        }
        tab.setInitialRequest(nextRequest);
        tab.checkDirty();
      }
    });

    if (this.tabClosingInProgress) {
      this.saveInProgress = false;
      this.deleteAdjacentTab(this.deleteTabIndex - 1);
    }
  },

  /**
      * Does basic bootstrapping before loading a request into a tab.
      * Checks if the request belongs o a collection, write permissions, headers and header data and sets appropirate properties.
      * This function is not mutating. It creates a new Request object.
      *
      * @param {Request~definition} request - The request that needs to be prepared.
      * @param {Boolean} isFromCollection   - Indicates if the request belongs to a collection
      *
      * @returns {Request} - The new, updated reqeust object
      *
      * @fires Request#change
      * @fires Request#change:isFromCollection
      * @fires Request#change:write
      * @fires Request#change:headers
      * @fires Request#change:headerData
      */
  prepareRequestForTab: function (request, isFromCollection, next) {
    var newRequest = getLegacyRequest(request);
    let requestWrite = true,
    collectionId = request.collectionId || request.collection;

    newRequest.set('headerData', newRequest.getHeaderData());
    newRequest.set('write', requestWrite);

    if (isFromCollection && collectionId) {
      newRequest.set('isFromCollection', true);
      __WEBPACK_IMPORTED_MODULE_6__modules_controllers_CollectionController__["a" /* default */].getCollection({ id: collectionId }).
      then(collection => {
        __WEBPACK_IMPORTED_MODULE_7__modules_controllers_UserController__["a" /* default */].
        get().
        then(user => {
          if (collection) {
            requestWrite = __WEBPACK_IMPORTED_MODULE_8__modules_services_CollectionPermissionService__["a" /* default */].validate(user.id, 'write', collection);
          }
          newRequest.set('write', requestWrite);
          return next(newRequest);
        });
      }).
      catch(err => {
        console.error('Error getting collection while opening a request in tab', err);
        return next(newRequest);
      });
    } else
    {
      return next(newRequest);
    }
  },

  /**
      * Duplicates the currently active request to collections
      */
  duplicateCurrentRequest: function () {
    let request = this.getCurrentRequest();

    let duplicatedRequest = request.getAsObject();
    duplicatedRequest.id = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].guid();
    duplicatedRequest.name += ' Copy';

    let createRequestEvent = Object(__WEBPACK_IMPORTED_MODULE_5__modules_model_event__["a" /* createEvent */])(
    'create_deep',
    'request',
    {
      request: duplicatedRequest,
      target: {
        model: request.get('folder') ? 'folder' : 'collection',
        modelId: request.get('folder') || duplicatedRequest.collection } });




    Object(__WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__["a" /* default */])(createRequestEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        console.error('Error in duplicating request', response.error);
        return;
      }
    }).
    catch(err => {
      console.error('Error in pipeline while duplicating request', err);
    });
  },

  /**
      * Duplicates a tab and switches to the duplicated tab
      *
      * @param {UUID} tabId - ID of the tab that needs to be duplicated
      *
      * @listens TabManager#contextDuplicateTab
      */
  loadDuplicateTab: function (tabId) {
    let tab = this.get(tabId),
    tabRequest = tab.get('request'),
    newTabId = this.addNewAdjacentTab(tabId),
    newTab = this.get(newTabId);

    this.prepareRequestForTab(tabRequest.getAsObject(), Boolean(tab.get('initialRequest')), newRequest => {
      newRequest.set('responses', tabRequest.get('responses'));
      if (tab.get('mode') === 'exampleResponse') {
        newRequest.set('response', tabRequest.get('response'));
        newRequest.set('lifecycle', 'completed');
      }
      newTab.set('initialExample', tab.get('initialExample'));
      newTab.setRequest(newRequest);
      if (tab.get('isDirty')) {
        newTab.setInitialRequest(new __WEBPACK_IMPORTED_MODULE_0__requests_Request__["a" /* Request */]());
      }
      newTab.set('isDirty', tab.get('isDirty'));
      newTab.set('mode', tab.get('mode'));

      let latestRequest = this.latestRequestMap[newRequest.get('id')];
      if (latestRequest) {
        newTab.setRequestRevisionId(latestRequest.revisionId);
      }

      this.switchTab(newTabId);
    });
  },

  /**
      * Adds a new tab adjacent to a given tab
      *
      * @param {UUID} tabId - ID of the tab next to which a new tab needs to be opened
      */
  addNewAdjacentTab: function (tabId) {
    let tabIndex = this.getTabIndex(tabId || _.get(this.getCurrentTab(), 'id')),
    newTabIndex = tabIndex + 1,
    newTabId;

    let ghostTab = this.getGhostTab();

    if (ghostTab) {
      let ghostTabIndex = this.getTabIndex(ghostTab.get('id')),
      tabs = _.clone(this.models);

      ghostTab.toggleGhost(false);
      tabs.splice(ghostTabIndex, 1);
      tabs.splice(newTabIndex, 0, ghostTab);
      this.reset(tabs);
      newTabId = ghostTab.get('id');
    } else
    {
      let newTab = new Tab();
      this.add(newTab, { at: newTabIndex });
      newTabId = newTab.get('id');
    }

    this.debouncedGhostTab();

    return newTabId;
  },

  /**
      * Returns the tab with a given request loaded
      *
      * @param {UUID} id - ID of the request that is needed
      *
      * @returns {Tab} - The tab with the given request loaded
      */
  getTabByRequestId: function (id) {
    const tab = _.find(this.models, tab => {
      return tab.get('request').id === id;
    });
    return tab;
  },

  /**
      * Loads a request to a tab
      *
      * @param {Request}  request                 - The request that will be loaded
      * @param {Boolean} options.isFromCollection - Indicates if the request belongs to a collections
      * @param {Boolean}  options.isPreview        - Indicates if the request needs to be loaded in a preview tab
      *
      * @listens Mediator#loadRequest
      */
  loadRequestIntoTab: function (request, { isFromCollection = false, isPreview = false } = {}) {
    const requestTab = this.getTabByRequestId(request.id),
    requestTabId = requestTab && requestTab.id,
    currentTab = this.getCurrentTab();

    // If existing request, switch to it
    if (requestTabId) {
      this.switchTab(requestTabId);
      let currentRequestTab = this.get(requestTabId);
      currentRequestTab.setPreview(false);
      this.closePreviewTab();
    }

    // If current tab is dirty or a response is present, load the request in new tab
    else
      if (currentTab.get('isDirty') || currentTab.get('isBusy')) {
        this.loadRequestInNewTab(request, {
          isFromCollection,
          isPreview });

      }

      // If "always on new tab" setting is enabled
      else if (pm.settings.getSetting('requestNewTab')) {
          let firstTab = !_.isEmpty(this.models) && this.models[0];

          // If first tab is not part of a collection, then replace it
          if (firstTab && !firstTab.get('initialRequest')) {
            this.loadRequestInCurrentTab(request, {
              isFromCollection,
              isPreview });

          }

          // If the request is already loaded, switch to the tab
          else if (!_.isEmpty(this.getTabsByRequestId(request.id))) {
              this.switchTab(this.getTabsByRequestId(request.id)[0].id);
            }

            // Else load in new tab
            else {
                this.loadRequestInNewTab(request);
                pm.mediator.trigger('activeRequestChanged', request.id);
              }
        } else
        {
          this.loadRequestInCurrentTab(request, {
            isFromCollection,
            isPreview });

        }
  },

  /**
      * Loads a request to the currently active tab
      *
      * @param {Request} request                  - The request that needs to be loaded
      * @param {Object} options                   - Additional options used when loading the request
      * @param {Boolean} options.isFromCollection - Indicates if the reqeust belongs to a collection
      * @param {Boolean} options.isPreview         - Indicates if the request needs to be loaded in a preview tab
      *
      * @fires Mediator#activeRequestChanged
      *
      * @see Tabs#prepareRequestForTab
      * @see tabs#setRequest
      */
  loadRequestInCurrentTab: function (request, { isFromCollection = false, isPreview = false } = {}) {
    this.prepareRequestForTab(request, isFromCollection, newRequest => {
      let currentTab = this.getCurrentTab(),
      latestRequest = this.latestRequestMap[newRequest.get('id')];

      currentTab.setRequest(newRequest);
      currentTab.setPreview(isPreview);
      if (latestRequest) {
        currentTab.setRequestRevisionId(latestRequest.revisionId);
      }
      pm.mediator.trigger('activeRequestChanged', newRequest.id);
    });
  },

  /**
      * Loads a request into a new tab
      *
      * @param {Request} request                  - The request that needs to be loaded
      * @param {Boolean} options.isFromCollection - Indicates if the request belongs to a collection
      * @param {Boolean} options.isPreview        - Indicates if the new tab needs to be a preview tab
      * @param {Boolean} options.isAdjacent       - Indicates if the new tab needs to be opened adjacent to the currently active tab
      *
      * @listens Mediator#loadRequestInNewTab
      */
  loadRequestInNewTab: function (request, { isFromCollection = false, isPreview = false, isAdjacent = false } = {}) {
    if (isPreview) {
      let requestTab = this.getLastTabByRequest(request.id);
      let savedRequestTab = requestTab && !requestTab.get('isDirty') && !requestTab.get('isPreview');

      if (savedRequestTab) {
        // If the request is open and it isn't dirty
        this.switchTab(requestTab.id);
        this.closePreviewTab(); // close preview tab, if it exists
        return;
      }

      // At this point, if a request is already open, the tab is dirty, or it isn't open at all
      let previewTab = this.getPreviewTab();

      if (previewTab) {
        this.switchTab(previewTab.id);
        this.loadRequestInCurrentTab(request, {
          isFromCollection,
          isPreview });

        return;
      }
    }

    this.prepareRequestForTab(request, isFromCollection, newRequest => {
      let newTabId;

      if (isAdjacent) {
        newTabId = this.addNewAdjacentTab();
      } else
      {
        newTabId = this.addNewTab(false);
      }

      let newTab = this.get(newTabId);
      let latestRequest = this.latestRequestMap[newRequest.get('id')];
      if (latestRequest) {
        newTab.setRequestRevisionId(latestRequest.revisionId);
      }
      newTab.setRequest(newRequest, { checkDirty: false });
      newTab.setPreview(isPreview);
      this.switchTab(newTab.get('id'));
    });
  },

  /**
       * Loads a URL into a new tab.
       * Actually creates a request object and then loads it into the tab.
       *
       * @param {UUID} url - URL of the request that needs to be loaded
       */
  loadUrlIntoTab: function (url) {
    let request = getLegacyRequest({ url: '{{url}}' });

    request && this.loadRequestIntoTab(request.toJSON(), {
      isFromCollection: false,
      isPreview: false });

  },

  /**
      * Closes (deletes) a tab from memory.
      * Opens the confirmation modal for dirty tab.
      *
      * @param {UUID} tabId                    - ID of the tab that needs to be updated
      * @param {Object} opts                   - Additional options used while closing the tab
      * @param {Boolean} opts.skipDirtyCheck   - Indicates if the dirty check needs to be skipped. This will force close the tab
      * @param {Boolean} opts.saveRequest      - Indicates if the loaded request needs to be saved before closing the tab
      * @param {Boolean} opts.saveExample      - Indicates if the loaded example needs to be saved before closing the tab
      * @param {Boolean} opts.duplicateRequest - Indicates if the currently loaded request needs to be duplicated before closing the tab
      *
      * @fires Tabs#showConflictTabModal
      * @fires Tabs#showUnsavedTabCloseModal
      */
  deleteTab: function (tabId, opts) {
    let showCloseModal = false,
    nonGhostTabs = _.filter(this.models, tab => {return !tab.get('isGhost');});

    if (nonGhostTabs.length === 1 && !nonGhostTabs[0].get('isDirty')) {
      let newActiveTab = this.addNewTab(false);
      this.switchTab(newActiveTab);
      this.remove(tabId);
      return;
    }

    let tab = this.get(tabId);

    if (!tab) {
      return;
    }

    let request = tab.get('request');

    if (!request) {
      return;
    }
    let requestId = request.get('id'),
    skipDirtyCheck = opts && opts.skipDirtyCheck;

    if (!skipDirtyCheck && tab.get('isDirty')) {
      this.switchTab(tabId);
      showCloseModal = true;

      if (this.isTabRequestUpdated(requestId, tabId)) {
        // This setTimeout is needed so that when you close multiple dirty tabs, the modal visibly flashes
        // to show that the user is he is working with a different tab now, otherwise it looks like
        // clicking one of the CTAs had no effect
        setTimeout(() => {
          this.trigger('showConflictTabModal', tabId, this.getUpdatedTabRequest(requestId), 'close');
        }, 200);
      } else
      {
        // This setTimeout is needed so that when you close multiple dirty tabs, the modal visibly flashes
        // to show that the user is he is working with a different tab now, otherwise it looks like
        // clicking one of the CTAs had no effect
        setTimeout(() => {
          this.trigger('showUnsavedTabCloseModal', tabId);
        }, 200);
      }

      return;
    }

    if (opts && opts.saveRequest) {
      this.saveInProgress = true;
      let requestSaved = tab.get('request').saveRequest({
        source: tabId,
        skipConflictModal: true });

      if (!requestSaved) {
        this.saveInProgress = false;
        return;
      }
    }
    if (opts && opts.saveExample) {
      this.saveInProgress = true;
      tab.get('request').saveResponseToRequest();
    }

    if (opts && opts.duplicateRequest) {
      this.duplicateCurrentRequest();
    }

    let newActiveTab = null;
    if (tabId === this.currentTabId) {
      let prevTabId = this.getPrevTabId();
      let nextTabId = this.getNextTabId();

      if (prevTabId) {
        newActiveTab = prevTabId;
      } else
      if (nextTabId) {
        newActiveTab = nextTabId;
      } else
      {
        newActiveTab = this.addNewTab(false);
      }


      this.switchTab(newActiveTab);
      this.remove(tabId);
    } else
    {
      this.remove(tabId);
    }

    if (!showCloseModal && this.tabClosingInProgress && !this.saveInProgress) {
      this.deleteAdjacentTab(this.deleteTabIndex - 1);
    }
  },

  /**
      * Closes a given tab's adjacent tab(s).
      * This is called when the user closes all other tabs from the context menu. Proxies to Tabs#deleteTab.
      *
      * @param {Number} index - Position of the tab that is used to calculate the adjacent tabs from
      *
      * @see Tabs#deleteTab
      */
  deleteAdjacentTab: function (index) {
    const tab = this.models[index];

    if (!tab) {
      this.haltCloseAllTabs();
      return;
    }

    // If ghost tab or context menu (Close Others) was called on the selected tab
    if (tab.get('isGhost') || this.selectedTabId === tab.id) {
      this.deleteAdjacentTab(index - 1);
    } else
    {
      this.deleteTabIndex = index;
      this.deleteTab(this.models[index].id);
    }
  },

  /**
      * Closes all tabs
      *
      * @listens TabManager#contextCloseAllTabs
      */
  closeAllTabs: function () {
    this.tabClosingInProgress = true;
    if (this.models.length > 1) {
      this.deleteAdjacentTab(this.models.length - 1);
    }
  },

  /**
      * Force closes all tabs, discarding dirty tabs
      */
  forceCloseCurrentTab() {
    let activeTab = this.getCurrentTab();

    if (activeTab) {
      this.forceCloseTab(activeTab.id);
    }
  },

  /**
      * Force closes a single tab, discarding dirty status
      *
      * @param {UUID} tabId - ID of the tab that needs to be force closed
      */
  forceCloseTab: function (tabId) {
    let tab = this.get(tabId);

    if (tab && !tab.get('isGhost')) {
      let newActiveTab,
      prevTabId = this.getPrevTabId(),
      nextTabId = this.getNextTabId();

      if (prevTabId) {
        newActiveTab = prevTabId;
      } else
      if (nextTabId) {
        newActiveTab = nextTabId;
      }

      this.remove(tabId);
      this.switchTab(newActiveTab);
    }

    if (_.size(this.models) <= 1) {
      this.addNewTab(true);
    }

    this.saveState();
  },

  /**
      * Force closes all tabs, discarding dirty tabs
      */
  forceCloseAllTabs: function () {
    const deleteTab = index => {
      let tab = this.models[index],
      tabId = tab && tab.id;
      if (!tab) {
        let newActiveTab = this.addNewTab(false);
        this.switchTab(newActiveTab);
        return;
      }
      if (tab && !tab.get('isGhost')) {
        this.remove(tabId);
      }
      deleteTab(index - 1);
    };

    if (this.models.length > 1) {
      deleteTab(this.models.length - 1);
    }
  },

  /**
      * Returns the number of dity tabs
      */
  getDirtyTabCount: function () {
    return _.chain(this.models).
    filter(model => {return model.get('isDirty');}).
    size().
    value();
  },

  /**
      * Closes all tabs other than the currenly active one
      *
      * @param {UUID} tabId - ID of the tab to preserve
      *
      * @listens TabManager#contextCloseOtherTabs
      */
  closeOtherTabs: function (tabId) {
    this.tabClosingInProgress = true;
    this.selectedTabId = tabId;
    if (this.models.length > 1) {
      this.deleteAdjacentTab(this.models.length - 1);
    }
  },

  /**
      * Prevents any in-progress close multiple tabs action. Can be `closeAllTabs` or `closeOtherTabs`.
      */
  haltCloseAllTabs: function () {
    // stop the close all tabs chain
    this.tabClosingInProgress = false;

    // reset the selectedTabId which is a filter for closeOtherTabs
    this.selectedTabId = null;
  },

  /**
      * Saves a dirty tab's request
      */
  saveCurrentRequest: function () {
    let currentRequest = this.getCurrentRequest();
    this.saveInProgress = true;
    currentRequest.saveRequest({
      source: this.getCurrentTab().id,
      skipConflictModal: true });

  },

  /**
      * Returns the first tab with a given request loaded
      *
      * @param {Request} request - The request that is used to find the tab
      *
      * @returns {Tab} - The tab that has the given request loaded
      */
  getTabByRequest: function (request) {
    return _.find(this.models, tab => {
      let tabRequest = tab.get('request');
      return request === tabRequest;
    });
  },

  /**
      * Returns the last tab with a given request loaded
      *
      * @param {Request} request - The request that is used to find the tab
      *
      * @returns {Tab} - The tab that has the given request loaded
      */
  getLastTabByRequest: function (requestId) {
    return _.findLast(this.models, tab => {
      let tabRequest = tab.get('request');
      return requestId === tabRequest.id;
    });
  },

  /**
      * Responds to the active request being saved to a collection in memory.
      * Updates appropriate fields to mark the request as being a saved request
      *
      * @param  {Request} request    - The currently active request
      * @param  {Request} newRequest - The request instance that was saved. Ideally, this will be the same request as above, but with collection data
      *
      * @listens Mediator#requestSaved
      *
      * @fires Mediator#activeRequestChanged
      * @fires Request#change
      * @fires Request#change:id
      * @fires Request#change:collectionId
      * @fires Request#change:isFromCollection
      * @fires Request#change:name
      * @fires Request#change:description
      */
  handleRequestSavedToCollection: function (request, newRequest) {
    let requestTab = this.getTabByRequest(request);

    if (!requestTab) {
      return;
    }

    let currentRequest = requestTab.get('request');
    currentRequest.set({
      id: newRequest.id,
      collection: newRequest.collection,
      collectionId: newRequest.collection,
      isFromCollection: true,
      name: newRequest.name,
      description: newRequest.description });


    requestTab.setRequest(currentRequest);
    pm.mediator.trigger('activeRequestChanged', currentRequest.id);
  },

  /**
      * Responds to the active request being saved to a collection in the IndexedDB.
      * Reads the saved request from IndexedDB and loads this instance in the tab.
      *
      * @param {Request} request - The request that was saved
      *
      * @listens Mediator#addedRequestToTheCollection
      *
      * @fires Mediator#activeRequestChanged
      * @fires Request#change
      * @fires Request#change:write
      */
  handleAddRequestToTheCollection: function (request) {
    const currentRequest = this.getCurrentRequest(),
    currentRequestId = this.getCurrentRequest().id,
    savedRequestId = request && request.id;

    if (!savedRequestId) {
      return;
    }

    // Set duplicate request as active
    if (this.duplicateRequestId === savedRequestId) {
      this.duplicateRequestId = null;
      this.loadRequestInCurrentTab(request, { isFromCollection: true });
    } else
    if (currentRequestId === savedRequestId) {
      currentRequest.set('write', true);
      pm.mediator.trigger('activeRequestChanged', currentRequestId);
    }
  },

  /**
      * Closes the currently active tab safely (checking for dirty status etc.)
      *
      * @see Tabs#deleteTab
      */
  closeCurrentTab: function () {
    this.deleteTab(this.currentTabId);
  },

  /**
      * Opens a new tab. Also closes any preview tabs that are open.
      *
      * @fires Mediator#focusBuilder
      *
      * @fires Tabs#addNewTab
      */
  openNewTab: function () {
    this.closePreviewTab();
    this.addNewTab(true);
    pm.mediator.trigger('focusBuilder');
  },

  /**
      * Switches to the next tab in the tab order
      *
      * @listens AppWindow#nextTab
      */
  switchToNextTab: function () {
    let visibleTabs = this.filter(tab => {
      return !tab.get('isGhost');
    });

    if (visibleTabs.length < 2) {
      return;
    }

    let nextTabId = this.getNextTabId();
    if (!nextTabId) {
      nextTabId = visibleTabs[0].id;
    }
    this.switchTab(nextTabId);
  },

  /**
      * Switches to the previous tab in the tab order
      *
      * @listens AppWindow#previousTab
      */
  switchToPreviousTab: function () {
    let visibleTabs = this.filter(tab => {
      return !tab.get('isGhost');
    });

    if (visibleTabs.length < 2) {
      return;
    }

    let nextTabId = this.getPrevTabId();
    if (!nextTabId) {
      nextTabId = visibleTabs[visibleTabs.length - 1].id;
    }
    this.switchTab(nextTabId);
  },

  /**
      * Switches to a tab at the given position in the tab order
      *
      * @param {Number} index - Position (index) of the tab to be switched to
      *
      * @see Tabs#switchTab
      */
  switchToTabNumber: function (index) {
    if (index < -2 || index > 9 || index === 0) {
      return;
    }

    let nonGhostTabs = _.filter(this.models, tab => {return !tab.get('isGhost');});
    let nonGhostTabIds = _.map(nonGhostTabs, tab => {return tab.id;});

    let tab = null;
    if (index > 0) {
      tab = this.get(nonGhostTabIds[index - 1]);
    } else
    {
      tab = this.get(_.last(nonGhostTabIds));
    }

    if (tab) {
      this.switchTab(tab.id);
    }
  },

  remountGhostTab() {
    let ghostTab = this.getGhostTab();
    this.remove(ghostTab);
    this.debouncedGhostTab();
  },

  /**
      * Materializes a ghost tab, if it exists (making it visible to the user), otherwise creates a new tab
      * Also creates a new ghost tab
      *
      * @param {Boolean} active - Indicates if the new tab needs to be set as the new active tab
      */
  addNewTab: function (active) {
    /* if ghost tabs available, make 'em real */
    let ghostTab = this.getGhostTab();
    if (ghostTab) {
      ghostTab.toggleGhost(false);

      if (active) {
        this.switchTab(ghostTab.get('id'));
      }

      ghostTab.setInitialRequest(new __WEBPACK_IMPORTED_MODULE_0__requests_Request__["a" /* Request */]());
      ghostTab.enableDirtyCheck({ checkDirty: false });
      this.debouncedGhostTab();

      return ghostTab.get('id');
    } else
    {
      let tab = new Tab();
      this.add(tab);

      if (active === true) {
        this.switchTab(tab.get('id'));
      }

      tab.setInitialRequest(new __WEBPACK_IMPORTED_MODULE_0__requests_Request__["a" /* Request */]());
      tab.enableDirtyCheck();
      this.debouncedGhostTab();

      return tab.get('id');
    }
  },

  /**
      * Creates a ghost tab. Ghost tabs stay invisible until they are materialized.
      * Returns early if a ghost tab already exists.
      */
  addGhostTab: function () {
    if (this.getGhostTab()) {
      return;
    }

    let tab = new Tab({ 'isGhost': true });

    this.add(tab);
  },

  /**
      * Returns the ghost tab (there can only be one)
      *
      * @returns {Tab} - The ghost tab
      */
  getGhostTab: function () {
    return this.find(tab => {
      return tab.get('isGhost');
    });
  },

  /**
      * Returns the ID of the next tab in the tab order
      *
      * @returns {UUID} - ID of the next tab
      */
  getNextTabId: function () {
    let visibleTabs = this.filter(tab => {
      return !tab.get('isGhost');
    });

    let visibleTabIds = _.map(visibleTabs, tab => {
      return tab.id;
    });

    let currentTabIndex = _.indexOf(visibleTabIds, this.getCurrentTab().id);

    if (currentTabIndex === -1 || currentTabIndex === visibleTabs.length - 1) {
      return null;
    } else
    {
      return visibleTabIds[currentTabIndex + 1];
    }
  },

  /**
      * Returns the ID of the previous tab in the tab order
      *
      * @returns {UUID} - ID of the previous tab
      */
  getPrevTabId: function () {
    let visibleTabs = this.filter(tab => {
      return !tab.get('isGhost');
    });

    let visibleTabIds = _.map(visibleTabs, tab => {
      return tab.id;
    });

    let currentTabIndex = _.indexOf(visibleTabIds, this.getCurrentTab().id);

    if (currentTabIndex === -1 || visibleTabs.length === 1) {
      return null;
    } else
    {
      return visibleTabIds[currentTabIndex - 1];
    }
  },

  /**
      * Marks a new tab as the active tab.
      *
      * @param {UUID} newTabId - ID of the tab that needs to be set as the new active tab
      * @param {Boolean} focus - Indicates if the focus needs to be shifted to the new active tab
      */
  switchTab: function (newTabId, focus = true) {
    if (newTabId === this.currentTabId) {
      return;
    }

    this.currentTabId = newTabId;
    this.trigger('switchTab', newTabId);

    let currentTab = this.getCurrentTab();
    let nextRequestId = currentTab && currentTab.get('request').get('id');
    currentTab && pm.mediator.trigger('activeRequestChanged', nextRequestId);
  },

  /**
      * Reorders a tab before another tab
      *
      * @param {UUID} sourceId      - ID of the tab which was dragged
      * @param {UUID} destinationId - ID of the tab the dragged tab was dropped in to
      */
  reorderTab: function (sourceId, destinationId) {
    let tabs = _.clone(this.models),
    sourceTab = this.get(sourceId),
    destinationTab = this.get(destinationId);

    if (!sourceTab || !destinationTab) {
      return;
    }

    let sourceIndex = _.indexOf(tabs, sourceTab);
    tabs.splice(sourceIndex, 1);
    let destinationIndex = _.indexOf(tabs, destinationTab);
    tabs.splice(destinationIndex, 0, sourceTab);

    this.reset(tabs);
  },

  /**
      * Returns a list of all tabs that have a given request loaded
      *
      * @param {UUID} id - ID of the request that is needed
      *
      * @returns {Tab | Tab[]} - All tabs that have the given request loaded
      */
  getTabsByRequestId: function (id) {
    return _.chain(this.models).
    filter(tab => {
      return !tab.get('isGhost');
    }).
    filter(tab => {
      let request = tab.get('request');
      return request.id === id;
    }).
    value();
  },

  /**
      * Returns an instance of the currently active tab.
      *
      * @returns {Tab} - The currenly active tab
      */
  getCurrentTab: function () {
    return this.get(this.currentTabId);
  },

  /**
      * Returns an instance of the currently active tab's request
      *
      * @returns {Request} - The request that is loaded in the currently active tab
      */
  getCurrentRequest: function () {
    let currentTab = this.getCurrentTab();
    if (currentTab) {
      return currentTab.get('request');
    }
  },

  /**
      * Serializes all tabs, including the requests currently loaded to them to save the builder state to IndexedDB
      *
      * @returns {Object} - The serialized tabs
      */
  serialize: function () {
    let tabs = this.toJSON();
    _.each(tabs, tab => {
      let tabMode = tab.mode || 'request';
      tab.request = tab.request.serialize(tabMode);
      tab.originalRequestState = tab.originalRequestState && tab.originalRequestState.serialize(tabMode);
      tab.isPreview = false;
    });
    return tabs;
  },

  /**
      * Returns the preview tab (there can only be one)
      *
      * @returns {Tab} - The preview tab
      */
  getPreviewTab: function () {
    return _.find(this.models, tab => {return tab.get('isPreview');});
  },

  /**
      * Closes the preview tab, if it exists
      */
  closePreviewTab: function () {
    let previewTab = _.find(this.models, tab => {return tab.get('isPreview');});
    previewTab && this.deleteTab(previewTab.id);
  },

  /**
      * Sets the currently active tab as busy, and saves the tab state
      *
      * @return {undefined}
      */
  engageActiveTab() {
    let currentTab = this.getCurrentTab();
    currentTab && currentTab.set('isBusy', true);
    this.handleSaveState();
  } });


/* harmony default export */ __webpack_exports__["a"] = (TabManager);

/**
                            * Indicates that a tab's property has changed
                            *
                            * @event Tab#change
                            *
                            * @param {Tab} model      - The new, changed tab
                            * @param {Object} options - The additional options passed when this change event was triggered
                            */

/**
                                * Indicates that a tab's `notifications` property has changed
                                *
                                * @event Tab#change:notifications
                                *
                                * @param {Tab} model               - The new, changed tab
                                * @param {TabNotification[]} value - The new value of the `notifications` property of the tab
                                * @param {Object} options          - The additional options passed when this event was triggered
                                */

/**
                                    * Indicates that a tab's `isGhost` property has changed
                                    *
                                    * @event Tab#change:isGhost
                                    *
                                    * @param {Tab} model      - The new, changed tab
                                    * @param {Boolean} value  - The new value of the `isGhost` property of the tab
                                    * @param {Object} options - The additional options passed when this event was triggered
                                    */

/**
                                        * Indicates that a tab's `isPreview` property has changed
                                        *
                                        * @event Tab#change:isPreview
                                        *
                                        * @param {Tab} model      - The new, changed tab
                                        * @param {Boolean} value  - The new value of the `isPreview` property of the tab
                                        * @param {Object} options - The additional options passed when this event was triggered
                                        */

/**
                                            * Indicates that a tab's `mode` property has changed
                                            *
                                            * @event Tab#change:mode
                                            *
                                            * @param {Tab} model      - The new, changed tab
                                            * @param {String} value   - The new value of the `mode` property of the tab
                                            * @param {Object} options - The additional options passed when this event was triggered
                                            */

/**
                                                * Indicates that a tab's `request` property has changed
                                                *
                                                * @event Tab#change:request
                                                *
                                                * @param {Tab} model      - The new, changed tab
                                                * @param {Request} value  - The new value of the `request` property of the tab
                                                * @param {Object} options - The additional options passed when this event was triggered
                                                */

/**
                                                    * Indicates that a tab's `initialRequest` property has changed
                                                    *
                                                    * @event Tab#change:initialRequest
                                                    *
                                                    * @param {Tab} model      - The new, changed tab
                                                    * @param {Request} value  - The new value of the `initialRequest` property of the tab
                                                    * @param {Object} options - The additional options passed when this event was triggered
                                                    */

/**
                                                        * Indicates that a tab's `initialExample` property has changed
                                                        *
                                                        * @event Tab#change:initialExample
                                                        *
                                                        * @param {Tab} model      - The new, changed tab
                                                        * @param {Request} value  - The new value of the `initialExample` property of the tab
                                                        * @param {Object} options - The additional options passed when this event was triggered
                                                        */

/**
                                                            * Indicates that a tab's `requestRevisionId` property has changed
                                                            *
                                                            * @event Tab#change:requestRevisionId
                                                            *
                                                            * @param {Tab} model      - The new, changed tab
                                                            * @param {Request} value  - The new value of the `requestRevisionId` property of the tab
                                                            * @param {Object} options - The additional options passed when this event was triggered
                                                            */
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__ = __webpack_require__(390);





/**
                                                                        * Backbone model representing a request's body
                                                                        *
                                                                        * @class RequestBody
                                                                        * @extends {Backbone.Model}
                                                                        *
                                                                        * @todo Incomplete
                                                                        */
var RequestBody = __WEBPACK_IMPORTED_MODULE_1_backbone___default.a.Model.extend( /** @lends RequestBody.prototype */{
  defaults: function () {
    return {
      data: '',
      transformedData: '',
      dataToBeSent: '',
      dataMode: 'params',
      rawEditorType: 'editor',
      bodyParams: {},
      editorMode: 'html',
      language: '' };

  },

  initialize: function () {
    this.files = {};
  },

  getFormDataForCurl: function () {
    var dataAsObjects = this.get('data') || [];
    var kv, key, value;

    var body = '';
    for (var i = 0; i < dataAsObjects.length; i++) {
      key = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(dataAsObjects[i].key, this.getVariablesMap());
      value = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(dataAsObjects[i].value, this.getVariablesMap());
      var optionalAtForFile = '';
      if (dataAsObjects[i].type === 'file' && dataAsObjects[i].value && !_.isEmpty(dataAsObjects[i].value)) {
        optionalAtForFile = '@' + _.get(dataAsObjects[i], 'value[0].path', _.get(dataAsObjects[i], 'value[0].name', ''));
      }

      value = typeof value === 'string' ? __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].encode(value) : value;
      key = typeof key === 'string' ? __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].encode(key) : key;

      body += ' -F "' + key + '=' + optionalAtForFile + value + '"';
    }

    return body;
  },

  /**
      * If the data array contains a file, stores the encoded file here for use with the interceptor
      * @private
      * @param data
      */
  storeFiles: function (data) {
    _.each(data, datum => {
      if (datum.type === 'file') {
        this.storeFile(datum);
      }
    });
  },

  getVariablesMap() {
    let environmentValues = [],
    activeEnvironment = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore');
    if (activeEnvironment) {
      environmentValues = activeEnvironment.enabledValues;
    }
    let globals = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore').enabledValues;

    let variableMap = {};
    _.forEach(globals, global => {
      variableMap[global.key] = global.value;
    });
    _.forEach(environmentValues, environment => {
      variableMap[environment.key] = environment.value;
    });

    return variableMap;
  },

  storeFile: function (data) {
    var oldThis = this;
    _.each(data.value, function (file) {
      if (file instanceof Blob) {
        var reader = new FileReader();
        reader.onload = function (theFile) {
          return function (e) {
            var name = theFile.name,
            key = data.key;

            // view.appendFilenameToInput(event.currentTarget, name);

            oldThis.files[name] = {};
            oldThis.files[name].file = theFile;
          };
        }(file);
        reader.readAsArrayBuffer(file);
      }
    });
  },

  setBodyParamsString: function () {
    if (this.get('dataMode') === 'params' || this.get('dataMode') === 'urlencoded') {
      this.set('paramString', this.getBodyParamString(this.get('transformedData')));
    }
  },

  setTransformedDataAndGetPayload: function () {
    var dataMode = this.get('dataMode'),
    data = this.get('data'),
    payload = null;

    if (dataMode == 'params') {
      payload = this.getFormDataForRowsAndSetSerializedData(data);
      this.setBodyParamsString();
    } else
    if (dataMode == 'urlencoded') {
      payload = this.getUrlEncodedData(data);
      this.setBodyParamsString();
    } else
    if (dataMode == 'raw') {
      payload = this.getRawDataToSend();
    } else
    {
      // binary
      payload = this.get('data');
    }
    return payload;
  },

  getFormDataForRowsAndSetSerializedData: function (rows) {
    // create a formdata object for an array of rows
    if (!rows) {
      return null;
    }
    var transformedData = [],
    serializedData = [],
    paramsBodyData = new FormData(),
    count = rows.length,
    row,key,value;
    for (var j = 0; j < count; j++) {
      row = rows[j];
      key = row.key;
      if (row.enabled === false) {
        // this row is disabled. not adding
      } else
      {
        if (pm.settings.getSetting('trimKeysAndValues')) {
          key = _.trim(key);
        }

        key = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(key, this.getVariablesMap());

        value = row.value;

        if (row.type !== 'file') {
          value = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(value, this.getVariablesMap());
          if (pm.settings.getSetting('trimKeysAndValues') && row.type !== 'file') {
            value = _.trim(value);
          }

          transformedData.push({
            key: key,
            value: value });

          serializedData.push({
            key: key,
            value: value });

          paramsBodyData.append(key, value);
        } else
        if (row.type === 'file' && value && value.length > 0) {
          _.each(value, actualValue => {
            paramsBodyData.append(key, actualValue, actualValue.name);
            transformedData.push({
              'key': key,
              'value': value,
              'enabled': true,
              'type': 'file',
              'mimeType': actualValue.type });


            var serialParam = {
              name: key,
              value: [],
              fileName: actualValue.name,
              type: 'file',
              mimeType: actualValue.type };


            if (actualValue && this.files[encodeURIComponent(actualValue.name)]) {
              serialParam.value.push(this.files[encodeURIComponent(actualValue.name)].file);
              serializedData.push(serialParam);
            }
          });
        }
      }
    }
    this.set('transformedData', transformedData);
    this.set('serializedData', serializedData);

    if (count == 0) {
      // make sure a blank FormData object isn't returned if there are no rows
      return null;
    }

    return paramsBodyData;
  },

  getUrlEncodedData: function (data) {
    var transformedData = [];
    let encodedData = '';
    if (!_.isArray(data)) {
      return '';
    }

    _.forEach(data, item => {
      let { key, value, enabled } = item;

      if (enabled === false || !key) {
        return;
      }

      if (pm.settings.getSetting('trimKeysAndValues')) {
        key = _.trim(key);
        value = _.trim(value);
      }

      key = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(key, this.getVariablesMap());
      key = encodeURIComponent(key);
      key = key.replace(/%20/g, '+');

      value = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(value, this.getVariablesMap());
      value = encodeURIComponent(value);
      value = value.replace(/%20/g, '+');

      encodedData += key + '=' + value + '&';
      transformedData.push({
        key: key,
        value: value });

    });
    this.set('transformedData', transformedData);
    encodedData = encodedData.substr(0, encodedData.length - 1);
    return encodedData;
  },

  getBodyForCurl: function () {
    var dataMode = this.get('dataMode');
    var preview;

    if (dataMode !== 'params' && dataMode !== 'urlencoded') {
      // raw or binary
      var data = this.get('data');

      // if not a string, return without -d
      if (typeof data !== 'string') {
        return '';
      }
      preview = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(data, this.getVariablesMap());
      preview = preview.replace(/'/g, '\'\\\'\'');
      return ' -d \'' + preview + '\'';
    } else
    if (dataMode === 'params') {
      return this.getFormDataForCurl();
    } else
    if (dataMode === 'urlencoded') {
      return this.getUrlEncodedBodyForCurl();
    }
  },

  getUrlEncodedBodyForCurl: function () {
    let data = this.get('data');
    let enabledParams = _.filter(data, param => {
      return !(param.enabled === false);
    });

    let retVal = _.map(enabledParams, param => {
      return __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].encode(__WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(param.key, this.getVariablesMap())) +
      '=' +
      __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].encode(__WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(param.value, this.getVariablesMap()));
    }).join('&');

    return ' -d \'' + retVal + '\'';
  },

  // Fixed
  getBodyParamString: function (params) {
    var paramsLength = params.length;
    var paramArr = [];
    for (var i = 0; i < paramsLength; i++) {
      var p = params[i];
      if (p.key && p.key !== '') {
        paramArr.push(p.key + '=' + p.value);
      }
    }
    return paramArr.join('&');
  },

  getDataMode: function () {
    return this.get('dataMode');
  },

  loadData: function (mode, data, asObjects) {
    this.set('dataMode', mode);
    this.set('asObjects', asObjects);

    if (mode !== 'raw') {
      if (asObjects) {
        var cData = _.clone(data);

        if (mode === 'params') {
          // Change made through an event in RequestBodyFormDataEditor
          this.set('data', cData);
          this.set('dataAsObjects', cData);
          this.set('dataToBeSent', cData);
          this.set('serializedData', cData);
        } else
        {
          this.set('data', cData);
          this.set('dataToBeSent', cData);
          this.set('dataAsObjects', cData);
        }
      } else
      {
        var params = __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].getBodyVars(data, false);
        var cParams = _.clone(params);
        this.set('data', cParams);
        this.set('dataToBeSent', cParams);
        this.set('dataAsObjects', cParams);
      }
      this.trigger('change:dataAsObjects');
    } else
    {
      // No need for objects
      this.set('data', _.clone(data));
      this.set('dataToBeSent', _.clone(data));
    }

    // console.log("loadData: dataToBeSent", this.get("dataToBeSent"));
    this.trigger('dataLoaded', this);
    this.trigger('change:data');
  },

  // TODO Store transformedData
  getUrlEncodedBody: function () {
    var rows, count, j;
    var row, key, value;
    var urlEncodedBodyData = '';
    var transformedData = [];

    rows = this.get('data');
    count = rows.length;

    if (count > 0) {
      for (j = 0; j < count; j++) {
        row = rows[j];
        value = row.value;
        key = row.key;
        if (row.enabled === false) {
          // row is disabled. not adding
        } else
        {
          if (pm.settings.getSetting('trimKeysAndValues')) {
            value = _.trim(value);
          }

          value = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(value, this.getVariablesMap());
          value = encodeURIComponent(value);
          value = value.replace(/%20/g, '+');

          key = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(key, this.getVariablesMap());
          key = encodeURIComponent(key);
          key = key.replace(/%20/g, '+');

          if (pm.settings.getSetting('trimKeysAndValues')) {
            key = _.trim(key);
          }

          urlEncodedBodyData += key + '=' + value + '&';

          transformedData.push({
            'key': key,
            'value': value });

        }
      }

      urlEncodedBodyData = urlEncodedBodyData.substr(0, urlEncodedBodyData.length - 1);

      this.set('transformedData', transformedData);

      return urlEncodedBodyData;
    } else
    {
      return false;
    }
  },

  getRawDataToSend: function () {
    var tData = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(this.get('data'), this.getVariablesMap());
    this.set('transformedData', tData);
    return tData;
  },

  // TODO Store transformedData
  getFormDataBody: function () {
    var rows, count, j;
    var i;
    var row, key, value;
    var paramsBodyData = new FormData();
    var transformedData = [];

    rows = this.get('data');

    if (rows) {
      count = rows.length;
    } else
    {
      count = 0;
    }


    if (count > 0) {
      for (j = 0; j < count; j++) {
        row = rows[j];
        key = row.key;
        if (row.enabled === false) {
          // this row is disabled. not adding
        } else
        {
          if (pm.settings.getSetting('trimKeysAndValues')) {
            key = _.trim(key);
          }

          key = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(key, this.getVariablesMap());

          value = row.value;
          value = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(value, this.getVariablesMap());

          if (pm.settings.getSetting('trimKeysAndValues')) {
            value = _.trim(value);
          }

          paramsBodyData.append(key, value);

          transformedData.push({
            'key': key,
            'value': value });

        }
      }

      this.set('transformedData', transformedData);

      return paramsBodyData;
    } else
    {
      return false;
    }
  },

  getDataAsKvPairs: function (dataPairs) {
    if (!dataPairs || dataPairs.length === 0) {
      return {};
    }
    var count = dataPairs.length;
    var kvpairs = {};
    for (var i = 0; i < count; i++) {
      if (kvpairs.hasOwnProperty(dataPairs[i].key)) {
        // 2 properties with same key. convert to array
        if (kvpairs[dataPairs[i].key] instanceof Array) {
          kvpairs[dataPairs[i].key] = kvpairs[dataPairs[i].key].concat(dataPairs[i].value);
        } else
        {
          kvpairs[dataPairs[i].key] = [kvpairs[dataPairs[i].key], dataPairs[i].value];
        }
      } else
      {
        kvpairs[dataPairs[i].key] = dataPairs[i].value;
      }
    }

    return kvpairs;
  },

  // Note: Used inside collection runner
  // TODO Clean request body management first
  // This is horribly wrong. Need to fix this properly
  // NOT USED ANYMORE
  setDataForXHR: function () {
    var mode = this.get('dataMode');
    if (mode === 'params') {
      this.set('data', this.get('dataAsObjects'));
      var formdata = this.getFormDataBody();
      this.set('data', formdata);
      this.set('dataToBeSent', formdata);
    } else
    if (mode === 'urlencoded') {
      var paramdata = this.getUrlEncodedBody();

      // console.log("param data is", paramdata);
      this.set('data', paramdata);
      this.set('dataToBeSent', paramdata);
    } else
    if (mode === 'raw') {
      // TODO Store transformedData
      var data = this.get('data'); // MUST be a string!
      if (typeof data !== 'string') {
        data = '';
      }

      var transformedData = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(data, this.getVariablesMap());
      this.set('transformedData', transformedData);
      this.set('dataToBeSent', transformedData);
    }
  } });


/* harmony default export */ __webpack_exports__["a"] = (RequestBody);

/**
                             * Indicates that the response body's property has changed
                             *
                             * @event ResponseBody#change
                             *
                             * @param {ResponseBody} model - The new, changed response body
                             * @param {Object} options     - The additional options passed when this change event was triggered
                             */
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_AppSettingsDefaults__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_HttpService__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_ShellHelper__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_domain__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_domain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_domain__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_InfobarConstants__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controllers_Infobar__ = __webpack_require__(325);












const APP_UPDATE = 'appUpdate',
APP_UPDATE_EVENTS = 'app-update-events',
CHECK_FOR_ELECTRON_VERSION_UPDATED = 'checkForElectronVersionUpdated',
UPDATE_ELECTRON = 'updateElectron',
APPLY_ELECTRON_UPDATE = 'applyElectronUpdate',

ELECTRON_UPDATE_ERROR = 'electronAppUpdateError',
ELECTRON_UPDATE_NOT_AVAILABLE = 'electronAppUpdateNotAvailable',
ELECTRON_UPDATE_DOWNLOADED = 'electronAppUpdateDownloaded',
CHECK_FOR_ELECTRON_VERSION_UPDATE = 'checkForElectronVersionUpdate',
CHECK_FOR_ELECTRON_UPDATE = 'checkForElectronUpdate',
ELECTRON_VERSION_UPDATED = 'electronVersionUpdated';


const AUTO_UPDATE_TIMER = 24 * 3600 * 1000, // 24 hours
NO_UPDATE_BANNER_TIMEOUT = 7 * 24 * 3600 * 1000, // A week
NOT_UPDATED_BANNER_ID = 'not-updated-banner',
NOT_UPDATED_MESG = {
  _id: NOT_UPDATED_BANNER_ID, // not using id since that will be overridden
  message: 'An update has been downloaded for Postman. Restart now to install the update.',
  priority: 80,
  type: __WEBPACK_IMPORTED_MODULE_9__constants_InfobarConstants__["c" /* SUCCESS */],
  isDismissable: true,
  actionLabel: 'Restart',
  actionType: 'button',
  onClose: function (params) {
    __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'dismiss_update_restart_banner');
  },
  actionCallback: function () {
    pm.updateNotifier.applyUpdate();
    __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'app_restart', 'restart_banner');
  } };


var semver = __webpack_require__(596),
AppUpdateNotifier = Backbone.Model.extend({
  defaults: function () {
    return {
      status: 'idle',
      initialized: false,
      data: null,
      changelog: null,
      isAutoDownloaded: false };

  },
  initialize: function () {
    if (window.DISABLE_UPDATES === true) {
      return;
    }

    // initialization should be idempotent
    if (this.get('initialized')) {
      return;
    }
    this.set('initialized', true);

    // migrate existing data
    if (pm.settings.getSetting('autoDownloadUpdateStatus') === 0) {
      pm.settings.setSetting('autoDownloadUpdateStatus', __WEBPACK_IMPORTED_MODULE_0__constants_AppSettingsDefaults__["a" /* default */].autoDownload.MINOR);
    }
    this.updaterEventBus = pm.eventBus.channel(APP_UPDATE_EVENTS);
    this.attachUpdaterEventsListeners();

    this.checkForVersionUpdate();

    this.version = pm.app.get('version');
    this.appId = pm.app.get('installationId');
    this.userAgent = navigator.userAgent;
    this.platform = this.getPlatform();
    this.arch = this.getArch();
    this.updateServerDomain = postman_update_server_url;

    setTimeout(() => {
      navigator.onLine && this.updateHandler();
    }, 10000); // After 10 sec

    setInterval(() => {
      // If an update is already downloaded don't check for new updates
      if (this.get('status') === 'downloaded') {
        // Show the banner if user has not restarted app for a week
        const hasCrossedNoUpdateTimeout = Date.now() - this.get('downloadedTimestamp') > NO_UPDATE_BANNER_TIMEOUT,
        isBannerAlreadyOpen = _.find(__WEBPACK_IMPORTED_MODULE_10__controllers_Infobar__["a" /* default */].infoList, { _id: NOT_UPDATED_BANNER_ID }); // same banner is already shown, don't show another

        if (hasCrossedNoUpdateTimeout && !isBannerAlreadyOpen) {
          __WEBPACK_IMPORTED_MODULE_10__controllers_Infobar__["a" /* default */].add(NOT_UPDATED_MESG);
          __WEBPACK_IMPORTED_MODULE_10__controllers_Infobar__["a" /* default */].show();
          __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'show_update_restart_banner');
        }

        return;
      }

      navigator.onLine && this.updateHandler();
    }, AUTO_UPDATE_TIMER);
  },

  checkForVersionUpdate() {
    this.updaterEventBus.publish(Object(__WEBPACK_IMPORTED_MODULE_7__modules_model_event__["a" /* createEvent */])(CHECK_FOR_ELECTRON_VERSION_UPDATED, APP_UPDATE));
  },

  attachUpdaterEventsListeners() {
    this.updaterEventBus.subscribe((event = {}) => {
      console.log('App updater event', event); // Logging intentionally

      let eventName = event.name;
      if (eventName === ELECTRON_UPDATE_NOT_AVAILABLE) {
        this.noUpdateFound();
        return;
      }
      if (eventName === ELECTRON_UPDATE_ERROR) {
        this.onUpdateError(event.data);
        return;
      }
      if (eventName === ELECTRON_UPDATE_DOWNLOADED) {
        this.onUpdateDownloaded();
        return;
      }

      if (eventName === ELECTRON_VERSION_UPDATED) {
        this.notifyVersionUpdate(event.data);
        return;
      }

      if (eventName === CHECK_FOR_ELECTRON_UPDATE) {
        this.checkForUpdates(true);
        __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'check_update', 'menu');
        return;
      }
    });
  },

  updateHandler() {
    // populate release notes for current version
    this.fetchReleaseNotes();
    this.checkForUpdates();
  },

  getArch: function () {
    let platform = navigator.platform;

    if (platform === 'Win32' || platform === 'Win64') {
      let userAgent = navigator.userAgent;

      if (_.includes(userAgent, 'WOW64') || _.includes(userAgent, 'Win64')) {
        return '64';
      }

      return '32';
    }

    if (_.includes(platform, 'Linux')) {
      if (_.includes(platform, '64')) {
        return '64';
      }

      return '32';
    }

    return '64';
  },

  getPlatform: function () {
    let platform = navigator.platform;

    if (platform === 'Win32' || platform === 'Win64') {
      let userAgent = navigator.userAgent;

      if (_.includes(userAgent, 'WOW64') || _.includes(userAgent, 'Win64')) {
        return 'WIN64';
      }

      return 'WIN32';
    }

    if (_.includes(platform, 'Linux')) {
      return 'LINUX';
    }

    return 'OSX';
  },

  onUpdateError: function (eventData = {}) {
    let error = eventData.error,
    label = this.get('isAutoDownloaded') ? 'auto_update' : 'manual_update';

    this.set({
      status: 'error',
      data: null,
      changelog: null });

    console.error('Error in update flow: ' + JSON.stringify(error));
    __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'error', label);
  },

  applyUpdate: function () {
    this.set({ status: 'applying' });

    // Sending through bus is not recommended here
    // As, the app quits in this case which triggers a crash at times
    __WEBPACK_IMPORTED_MODULE_6__utils_ShellHelper__["a" /* default */].sendToMain(APPLY_ELECTRON_UPDATE);
  },

  onUpdateDownloaded: function () {
    this.set({
      status: 'downloaded',
      downloadedTimestamp: Date.now() });

    pm.mediator.trigger('closeSettingsModal');
    !this.get('isAutoDownloaded') && pm.mediator.trigger('showUpdateModal');
  },

  notifyVersionUpdate: function (data = {}) {
    setTimeout(() => {
      let currentVersion = data.currentVersion,
      currentPlatform = window.process.platform + '-' + window.process.arch;

      // Show alert message
      pm.alerts.success('Successfully updated to version ' + currentVersion);

      // Send analytics event
      __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'updated', null, null, null, { noActiveWorkspace: true });

      // Notify update information to the server.
      __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__["a" /* default */].
      get().
      then((user = {}) => {
        Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["p" /* NotifyServerOfVersionChange */])(user, currentVersion + '-' + currentPlatform);
      });
    }, 5000);
  },

  downloadUpdate: function (isSilent = false, options = {}) {

    this.set({
      status: 'downloading',
      isAutoDownloaded: _.isBoolean(isSilent) ? isSilent : false });


    this.getAdditionalParams(params => {
      let data = this.get('data'),
      eventPayload = {
        channel: window.RELEASE_CHANNEL || 'stable',
        version: this.version,
        appId: this.appId,
        userAgent: this.userAgent,
        platform: this.platform,
        arch: this.arch,
        downloadURL: options.downloadURL || data && data.url,
        updateServerDomain: this.updateServerDomain,
        additionalParamsString: params };

      __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__["a" /* default */].
      get().
      then((user = {}) => {
        _.assign(eventPayload, { userId: user.id });
        this.updaterEventBus.publish(Object(__WEBPACK_IMPORTED_MODULE_7__modules_model_event__["a" /* createEvent */])(UPDATE_ELECTRON, APP_UPDATE, eventPayload));
      }).
      catch(e => {
        this.updaterEventBus.publish(Object(__WEBPACK_IMPORTED_MODULE_7__modules_model_event__["a" /* createEvent */])(UPDATE_ELECTRON, APP_UPDATE, eventPayload));
      });
    });
  },

  noUpdateFound: function () {
    this.set({
      status: 'updateNotAvailable',
      data: null });

  },

  updateFoundWithVersion: function (data) {
    this.set({
      status: 'updateAvailable',
      data: data,
      changelog: null });

    this.fetchChangeLog();
  },

  shouldAutoDownload: function (version) {
    let versionDiff = 'major', // Also the reason for keeping the fail proof, hence defaults to major
    autoDownloadUpdateStatus = pm.settings.getSetting('autoDownloadUpdateStatus') || __WEBPACK_IMPORTED_MODULE_0__constants_AppSettingsDefaults__["a" /* default */].autoDownload.MINOR;

    try {
      versionDiff = semver.diff(pm.app.get('version'), version);
    }

    // throws exception in case of wrong version from ARS. should not be the case as ARS also uses semver,
    // happens only if the data.version node is not available.
    catch (e) {
      console.log(e);
    } finally
    {
      if (autoDownloadUpdateStatus === __WEBPACK_IMPORTED_MODULE_0__constants_AppSettingsDefaults__["a" /* default */].autoDownload.MINOR) {
        return ['minor', 'preminor', 'patch', 'prepatch', 'prerelease'].includes(versionDiff);
      }
      return autoDownloadUpdateStatus === __WEBPACK_IMPORTED_MODULE_0__constants_AppSettingsDefaults__["a" /* default */].autoDownload.ALL;
    }
  },

  getAdditionalParams: function (cb) {
    __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__["a" /* default */].
    get().
    then((user = {}) => {
      let deviceInfo = pm.app && pm.app.getDeviceInfo(),
      userId = _.toString(user.id) || '0',
      syncEnabled = user.syncEnabled || false,
      teamPlan = _.get(user, 'organizations.0.plan', '');

      cb && cb([
      `installationId=${_.get(deviceInfo, 'id')}`,
      `userId=${userId}`,
      `syncEnabled=${syncEnabled}`,
      `teamPlan=${teamPlan}`].
      join('&'));
    }).
    catch(e => {

      // Don't block if anything fails.
      return '';
    });
  },

  getUpdateStatusURL: function (cb) {
    this.getAdditionalParams(params => {
      let updateChannel = _.includes(['prod', 'stage'], window.RELEASE_CHANNEL) ? 'stable' : window.RELEASE_CHANNEL,
      appReleaseServerEndpoint = postman_update_server_url + 'update/status?' + [
      `channel=${updateChannel}`,
      `currentVersion=${this.version}`,
      `arch=${this.arch}`,
      `platform=${this.platform.toLowerCase()}`,
      params].
      join('&');

      cb && cb(appReleaseServerEndpoint);
    });
  },

  changelogEndpoint: function (cb) {
    this.getAdditionalParams(params => {
      let updateChannel = _.includes(['prod', 'stage'], window.RELEASE_CHANNEL) ? 'stable' : window.RELEASE_CHANNEL;

      cb && cb(postman_update_server_url + 'changelog?' + [
      `channel=${updateChannel}`,
      `platform=${this.platform.toLowerCase()}`,
      params].
      join('&'));
    });
  },

  fetchReleaseNotes: function () {
    let currentVersion = this.version;
    this.changelogEndpoint(url => {
      __WEBPACK_IMPORTED_MODULE_3__utils_HttpService__["a" /* default */].request(url + `&to=${currentVersion}`).then(({ body, status }) => {
        if (status === 200) {
          this.set({ releaseNotes: __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* default */].constructsReleaseNotes(body.changelog) });
        }
      }).catch(() => {
        _.noop();
      });
    });
  },

  fetchChangeLog: function () {
    let currentVersion = this.version;
    this.changelogEndpoint(url => {
      __WEBPACK_IMPORTED_MODULE_3__utils_HttpService__["a" /* default */].request(url + `&from=${currentVersion}`).then(({ body, status }) => {
        if (status === 200) {
          _.isArray(body.changelog) && !_.isEmpty(body.changelog[0]) && (body.changelog[0].isLatest = true);
          this.set({ changelog: __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* default */].constructChangelog(body.changelog) });
        }
      }).catch(() => {
        _.noop();
      });
    });
  },

  checkForUpdates: function (isManual) {
    let currentStatus = this.get('status');

    this.set({
      status: 'checking',
      data: null,
      changelog: null });


    if (isManual) {
      pm.mediator.trigger('closeSettingsModal');
      pm.mediator.trigger('showUpdateModal', { origin: 'manual' });
    }

    this.getUpdateStatusURL(url => {
      __WEBPACK_IMPORTED_MODULE_3__utils_HttpService__["a" /* default */].request(url).then(({ body, status }) => {
        if (status === 200) {
          if (!isManual && this.shouldAutoDownload(body.version)) {
            // silently download the update
            this.downloadUpdate(true, { downloadURL: body.url });
          } else {
            // either it is manual update or it is auto-update but version is major and settings is set to minor

            // show the modal for update and also show the badge over settings icon
            this.updateFoundWithVersion(body);

            // do not show this modal if the user has dismissed it already once
            if (this.get('updateModalDismissed')) {
              return;
            }

            !isManual && pm.mediator.trigger('showUpdateModal', { origin: 'auto' });
            __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'view_update_available_modal', isManual ? 'manual' : 'auto');
          }
        } else
        if (status === 204) {
          this.noUpdateFound();
        }
      }).catch(err => {
        console.warn('Error while checking for update', err);
        this.set({
          status: 'error',
          data: null,
          changelog: null });

      });
    });
  } });


/* harmony default export */ __webpack_exports__["a"] = (AppUpdateNotifier);

/**
                                   * @typedef {Object} AppUpdateNotifier~releaseNotes
                                   *
                                   * @property {String} name Version name
                                   * @property {Object} notes Release notes
                                   * @property {String[]} notes.Bugfixes bugfixes in the release
                                   * @property {String[]} notes.Improvements improvements in the release
                                   * @property {String[]} notes.Features new features in the release
                                   */
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file should be ES5 compatible
/* eslint prefer-spread:0, no-var:0, prefer-reflect:0, no-magic-numbers:0 */


module.exports = function () {
	// Import Events
	var events = __webpack_require__(38);

	// Export Domain
	var domain = {};
	domain.createDomain = domain.create = function () {
		var d = new events.EventEmitter();

		function emitError(e) {
			d.emit('error', e);
		}

		d.add = function (emitter) {
			emitter.on('error', emitError);
		};
		d.remove = function (emitter) {
			emitter.removeListener('error', emitError);
		};
		d.bind = function (fn) {
			return function () {
				var args = Array.prototype.slice.call(arguments);
				try {
					fn.apply(null, args);
				} catch (err) {
					emitError(err);
				}
			};
		};
		d.intercept = function (fn) {
			return function (err) {
				if (err) {
					emitError(err);
				} else {
					var args = Array.prototype.slice.call(arguments, 1);
					try {
						fn.apply(null, args);
					} catch (err) {
						emitError(err);
					}
				}
			};
		};
		d.run = function (fn) {
			try {
				fn();
			} catch (err) {
				emitError(err);
			}
			return this;
		};
		d.dispose = function () {
			this.removeAllListeners();
			return this;
		};
		d.enter = d.exit = function () {
			return this;
		};
		return d;
	};
	return domain;
}.call(this);

/***/ }),

/***/ 1168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_OnboardingConstants__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_OnboardingConstantsOrderMap__ = __webpack_require__(1169);

let

OnboardingManager = class OnboardingManager {
  constructor() {
    this.displaySignInReminder = this.displaySignInReminder.bind(this);
    this.attachAllTriggers();
  }

  attachAllTriggers() {
    this.attachListenerIfActive(__WEBPACK_IMPORTED_MODULE_0__constants_OnboardingConstants__["a" /* SIGN_IN_REMINDER */], () => {
      pm.mediator.on('loadedCollectionsFromDB', () => {
        this.activate(__WEBPACK_IMPORTED_MODULE_0__constants_OnboardingConstants__["a" /* SIGN_IN_REMINDER */], this.displaySignInReminder);
      });
    });
  }

  displayOnboarding(id, callback) {
    let onboardingOrder = __WEBPACK_IMPORTED_MODULE_1__constants_OnboardingConstantsOrderMap__["a" /* default */][id] || 99;
    let toDisplay = true;
    _.forEach(__WEBPACK_IMPORTED_MODULE_1__constants_OnboardingConstantsOrderMap__["a" /* default */], (order, name) => {
      if (order < onboardingOrder) {
        toDisplay = toDisplay && this.isDismissed(name);
      }
    });

    toDisplay && callback();
  }

  displaySignInReminder() {
    this.displayOnboarding(__WEBPACK_IMPORTED_MODULE_0__constants_OnboardingConstants__["a" /* SIGN_IN_REMINDER */], () => {
      pm.mediator.trigger('showOnboarding:signInReminder');

      pm.mediator.on('onboarding:dismissSignInReminder', () => {
        this.dismissItem(__WEBPACK_IMPORTED_MODULE_0__constants_OnboardingConstants__["a" /* SIGN_IN_REMINDER */]);
        pm.mediator.off('onboarding:dismissSignInReminder');
      });
    });
  }

  attachListenerIfActive(id, cb) {
    if (this.isDismissed(id)) {
      return;
    }

    if (_.isFunction(cb)) {
      cb();
    }
  }

  activate(id, cb) {
    if (this.isDismissed(id)) {
      return;
    }

    if (_.isFunction(cb)) {
      pm.alertManager.enqueue(cb, 0);
    }
  }

  isDismissed(id) {
    return _.includes(this.getDismissedItems(), id);
  }

  getDismissedItems() {
    return pm.settings.getSetting('dismissedOnboarding') || [];
  }

  dismissItem(id) {
    let dismissedItems = this.getDismissedItems();

    if (!this.isDismissed(id)) {
      dismissedItems.push(id);
    }

    pm.settings.setSetting('dismissedOnboarding', dismissedItems);
  }

  __reset() {
    pm.settings.setSetting('dismissedOnboarding', []);
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OnboardingConstants__ = __webpack_require__(597);


let OnboardingOrderMap = {};

OnboardingOrderMap[__WEBPACK_IMPORTED_MODULE_0__OnboardingConstants__["a" /* SIGN_IN_REMINDER */]] = 1;

/* harmony default export */ __webpack_exports__["a"] = (OnboardingOrderMap);

/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__ = __webpack_require__(73);




let

ElectronTCPReader = class ElectronTCPReader {

  constructor() {

    _.assign(this, {
      socketId: null,
      socketInfo: null,
      port: '5005',
      target_type: 'history',
      target_id: '',
      status: 'disconnected',
      filters: {
        url: '',
        url_disabled: '',
        methods: '',
        status_codes: '',
        content_type: '' } });



    let readerSettings = localStorage.getItem('readerSettings'),
    readerSettingsJSON = null;

    try {
      if (!_.isEmpty(readerSettings)) {
        readerSettingsJSON = JSON.parse(readerSettings);
      }
    }
    catch (e) {
      console.error('Error in parsing proxy settings');
    } finally
    {
      if (!_.isEmpty(readerSettingsJSON)) {
        _.assign(this, _.pick(['port', 'target_type', 'target_id', 'filters']));
      }
    }

    pm.appWindow.trigger('registerInternalEvent', 'proxyRequestCaptured', this.onProxyRequestCaptured, this);
    pm.appWindow.trigger('registerInternalEvent', 'proxyClosed', this.onProxyClosed, this);

    pm.appWindow.trigger('registerInternalEvent', 'proxyNotif', this.onProxyNotif, this);
  }

  save() {
    localStorage.setItem('readerSettings', JSON.stringify(_.pick(this, ['port', 'target_type', 'target_id', 'filters'])));
  }

  onProxyClosed() {
    this.stopListening();
    this.status = 'disconnected';
    pm.trigger('proxyStatusChanged', this.status);
  }

  onProxyNotif(action, result) {
    if (action == 'start') {
      pm.mediator.trigger(
      result == 'success' ? 'proxyStartSuccess' : 'proxyStartFailure');

    } else
    if (action == 'stop') {
      pm.mediator.trigger(
      result == 'success' ? 'proxyStopSuccess' : 'proxyStopFailure');

    }
  }

  onProxyRequestCaptured(requestObject) {
    var url = requestObject.url,
    method = requestObject.method,
    headers = requestObject.headers,
    data = requestObject.data;

    requestObject = {
      url: url,
      method: method,
      headers: headers,
      data: data,
      name: url };


    console.log('Recd request from proxy: ' + url + ', ' + method);
    this.addRequestObject(requestObject);
  }


  isAllowed(request) {
    var filters = this.filters;
    var methods = filters.methods.split(',');

    function trim(s) {
      return s.trim().toUpperCase();
    }

    var filterMethods = _.each(methods, trim);

    var flagUrlContains = true;
    var flagUrlDisabled = true;
    var flagUrlMethods = true;

    var result;

    // console.log("Filters are", filters);

    if (filters.url === '') {
      flagUrlContains = true;
    } else
    {
      if (request.url.search(filters.url) >= 0) {
        flagUrlContains = true;
      } else
      {
        flagUrlContains = false;
      }
    }

    if (filters.url_disabled === '') {
      flagUrlDisabled = true;
    } else
    {
      if (request.url.search(filters.url_disabled) < 0) {
        flagUrlDisabled = true;
      } else
      {
        flagUrlDisabled = false;
      }
    }

    if (filterMethods.length > 0) {
      flagUrlMethods = _.indexOf(filterMethods, request.method.toUpperCase());
    } else
    {
      flagUrlMethods = true;
    }

    result = flagUrlMethods && flagUrlDisabled && flagUrlContains;
    return result;
  }

  addRequestObject(request) {
    var target_type = this.target_type;
    var collection;
    var target_id;

    // console.log("Settings are", this.toJSON());

    if (this.isAllowed(request)) {
      // modify request for sync
      let headerData = [];
      request.headerData = _.map(_.keys(request.headers), key => {
        return {
          key,
          value: request.headers[key] };

      });

      if (request.data) {
        request.dataMode = 'raw';
      }

      if (_.find(headerData, { value: 'application/x-www-form-urlencoded' })) {
        request.dataMode = 'urlencoded';
        request.data = __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].unpackUrlEncodedData(request.data);
      }

      if (target_type === 'history') {
        let currentDate = new Date(),
        workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace,
        historyCreateEvent = Object(__WEBPACK_IMPORTED_MODULE_2__modules_model_event__["a" /* createEvent */])(
        'create',
        'history',
        _.assign({ id: __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].guid(), createdAt: currentDate.toISOString(), workspace }, request));


        Object(__WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__["a" /* default */])(historyCreateEvent).
        catch(e => {console.log('Error in creating history through proxy', e);});
      } else
      {
        __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__["a" /* default */].
        get().
        then(user => {
          target_id = this.target_id;

          _.assign(request, {
            id: __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].guid(),
            collection: target_id,
            owner: user.id });


          let requestCreateEvent = {
            name: 'create_deep',
            namespace: 'request',
            data: { request },
            target: {
              model: 'collection',
              modelId: target_id } };


          Object(__WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__["a" /* default */])(requestCreateEvent).
          then(response => {
            if (!_.isEmpty(_.get(response, 'error'))) {
              console.error('Error in creating collection from tcp', response.error);
              return;
            }
          });
        }).
        catch(err => {
          console.error('Error while creating collection from tcp', err);
        });
      }
    }
  }

  startListening() {
    var model = this;

    var portToUse = this.port;

    pm.appWindow.sendToElectron({
      event: 'startProxy',
      data: { port: portToUse } });


    this.status = 'connected';
    pm.mediator.trigger('proxyStatusChanged', this.status);

  }

  stopListening() {
    pm.appWindow.sendToElectron({
      event: 'stopProxy',
      data: {} });

    this.status = 'disconnected';
    pm.mediator.trigger('proxyStatusChanged', this.status);
  }

  connect() {
    this.startListening();
    this.status = 'connected';
    pm.mediator.trigger('proxyStatusChanged', this.status);
  }

  disconnect() {
    this.stopListening();
    this.status = 'disconnected';
    pm.mediator.trigger('proxyStatusChanged', this.status);
    let interceptor = document.getElementsByClassName('icon-navbar-interceptor')[0];
    !_.isEmpty(interceptor) && interceptor.classList.remove('active');
  }};


/* harmony default export */ __webpack_exports__["a"] = (ElectronTCPReader);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_services_SyncRemoteFetcherService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_APIService__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_ModelService__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__ = __webpack_require__(21);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};







var NotificationModel = __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.Model.extend({});

var NotificationManager = __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.Collection.extend({
  model: NotificationModel,
  TYPE_NOTIFICATION: 'notification',
  TYPE_BROADCAST: 'broadcast',
  BASE_SYNC_ENDPOINT: null, // set in initialize
  DEFAULT_COUNT: 10,
  socketConnected: false,
  loading: false,
  unreadCount: 0,
  endOfFeed: false,
  nextMaxId: 0,
  unreadSyncNotifications: [],
  queuedSyncNotifications: [], // Used to store `share` notifications till the team library has finished loading

  initialize: function (models, options) {
    this.BASE_SYNC_ENDPOINT = '/' + postman_sync_api_version + '/notification';

    this.fetchLatestBroadcasts();

    this.nextMaxId = 0;
    this.endOfFeed = false;
    this.unreadCount = 0;

    pm.mediator.on('socket:connected', data => {
      this.socketConnected = true;
      this.fetchLatestSyncNotifications();
    });

    pm.mediator.on('socket', (data, verb) => {
      if (!_.includes(['share', 'unshare', 'subscribe', 'unsubscribe', 'destroy', 'notification'], verb)) {
        return;
      }

      this.appendNotification(data, { realtime: true });

      this.trigger('change');
    });

    let modelEvents = pm.eventBus.channel('model-events');

    modelEvents.subscribe((payload = {}) => {
      if (payload.name === 'logout' && payload.namespace === 'user') {
        this._nukeEverything();
        this.fetchLatestBroadcasts();
      }
    });

    let syncEvents = pm.eventBus.channel('sync-status');

    syncEvents.subscribe((payload = {}) => {
      if (payload.status === 'online') {
        this.fetchLatestSyncNotifications();
      }
    });

    let notificationEvents = pm.eventBus.channel('model-events');
    notificationEvents.subscribe((payload = {}) => {
      if (payload.namespace !== 'notification') {
        return;
      }
      this.appendNotification(payload.data, {
        realtime: true,
        initialLoad: false });

    });
  },

  comparator: function (model) {
    var type = model.get('type'),
    data = model.get('data'),
    date = new Date(data.meta.notification.createdAt);

    return -date.getTime();
  },

  fetchLatestSyncNotifications: function () {
    this.loading = true;
    this.trigger('change:loading');

    __WEBPACK_IMPORTED_MODULE_2__modules_services_SyncRemoteFetcherService__["a" /* default */].
    remoteFetch('notification', 'find', { count: this.DEFAULT_COUNT }).
    then(res => {
      if (!res || !res.data) {
        console.error('Error fetching team notifications');
        this.loading = false;
        this.trigger('change:loading');
        return;
      }

      if (!res.meta.next_max_id) {
        this.endOfFeed = true;
      }
      this.nextMaxId = res.meta.next_max_id;

      _.eachRight(res.data, datum => {
        this.appendNotification(datum, {
          realtime: false,
          initialLoad: true });


        if (datum.meta.notification) {
          !datum.meta.notification.read && this.unreadCount++;
        } else
        {
          !datum.meta.read && this.unreadSyncNotifications.push(datum.revision) && this.unreadCount++;
        }
      });

      this.loading = false;
      this.trigger('change:loading');
      this.trigger('change');
    }).
    catch(err => {
      console.log('error fetching', err);
    });
  },

  fetchLatestBroadcasts: function () {
    __WEBPACK_IMPORTED_MODULE_4__modules_services_ModelService__["a" /* default */].
    find('broadcast', {}).
    then(dbBroadcasts => {
      __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__["a" /* default */].
      get().
      then(user => {
        Object(__WEBPACK_IMPORTED_MODULE_3__modules_services_APIService__["h" /* GetBroadcasts */])({ user, maxId: null, count: 10 }, (err, broadcasts) => {
          if (err) {
            console.error('Error fetching broadcasts');
            return;
          }
          let appNotifications = _.map(broadcasts, broadcast => {
            let dbInstance = _.find(dbBroadcasts, dbBroadcast => {
              return dbBroadcast.id === broadcast.id;
            });
            return {
              id: broadcast.id,
              type: this.TYPE_BROADCAST,
              data: {
                meta: {
                  id: broadcast.id,
                  action: broadcast.action,
                  createdAt: dbInstance ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(dbInstance.readAt).toISOString() : __WEBPACK_IMPORTED_MODULE_1_moment___default()().toISOString(),
                  notify: true,
                  read: Boolean(dbInstance),
                  stickToTop: !dbInstance,
                  notification: { createdAt: dbInstance ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(dbInstance.readAt).toISOString() : __WEBPACK_IMPORTED_MODULE_1_moment___default()().toISOString() } },

                data: {
                  title: broadcast.title,
                  text: broadcast.text,
                  link: broadcast.link },

                model_id: null } };


          });

          this.add(appNotifications);
        });
      }).
      catch(e => {
        console.error('Error in getting user data from db', e);
      });
    }).
    catch(e => {
      console.error('Error in fetching broadcasts from db', e);
    });
  },

  fetchPreviousServerNotifications: function () {
    if (this.endOfFeed || this.loading) {
      return;
    }

    this.loading = true;
    this.trigger('change:loading');

    __WEBPACK_IMPORTED_MODULE_2__modules_services_SyncRemoteFetcherService__["a" /* default */].remoteFetch('notification', 'find', {
      count: this.DEFAULT_COUNT,
      max_id: this.nextMaxId }).

    then(res => {
      if (!res || !res.data) {
        console.error('Error fetching team notifications');
        this.loading = false;
        this.trigger('change:loading');
        return;
      }

      if (!res.meta.next_max_id) {
        this.endOfFeed = true;
      }

      this.nextMaxId = res.meta.next_max_id;

      _.eachRight(res.data, datum => {
        this.appendNotification(datum, {
          realtime: false,
          initialLoad: false });


        if (datum.meta.notification) {
          !datum.meta.notification.read && this.unreadCount++;
        } else
        {
          !datum.meta.read && this.unreadSyncNotifications.push(datum.revision) && this.unreadCount++;
        }
      });
      this.loading = false;
      this.trigger('change:loading');
      this.trigger('change');
    }).
    catch(() => {
      console.log('Error fetching previous notifications');
    });
  },

  appendNotification: function (notification, options) {
    if (!notification.meta.notification && !notification.meta.notify) {
      return;
    }

    let realtime = options.realtime,
    initialLoad = options.initialLoad;

    var notificationToAppend = {
      data: {
        data: notification.data,
        meta: _extends({},
        notification.meta, {
          read: realtime ? false : notification.meta.notification ? notification.meta.notification.read : notification.meta.read,
          notification: {
            message: notification.meta.notification && notification.meta.notification.message || {},
            createdAt: (notification.meta.notification ? notification.meta.notification.createdAt : notification.meta.createdAt) || __WEBPACK_IMPORTED_MODULE_1_moment___default()().toISOString() } }),


        model_id: notification.model_id },

      id: notification.meta.notification ? notification.meta.notification.id : notification.revision,
      type: this.TYPE_NOTIFICATION };


    realtime && !notification.meta.notification && this.unreadSyncNotifications.push(notification.revision);

    let subscribed;
    switch (notification.meta.action) {
      case 'share':
      case 'unshare':
      case 'destroy':
      case 'subscribe':
      case 'unsubscribe':
        break;

      default:
        this.add(notificationToAppend);}

  },

  getNotifications: function () {
    var notifications = this.toJSON();

    var partitionedNotifications = _.partition(notifications, notification => {
      return Boolean(notification.data.meta.stickToTop);
    });

    return partitionedNotifications[0].concat(partitionedNotifications[1]);
  },

  getUnreadCount: function () {
    return _.reduce(this.models, (total, notification) => {
      let type = notification.get('type'),
      unread = !notification.get('data').meta.read;

      if (type === this.TYPE_NOTIFICATION) {
        return total + (unread ? 1 : 0);
      } else
      {
        return total;
      }
    }, this.unreadCount);
  },

  _getNotification: function (id) {
    return _.find(this.models, model => {
      return model.id === id;
    });
  },


  _updateServerNotificationAsRead: function (id, isUnread) {
    var notification = this._getNotification(id);
    var data = notification.get('data');
    data.meta.read = !isUnread;
    notification.set('data', data);
  },

  markAllNotificationsAsRead: function () {
    this._markAllSyncNotificationsAsRead();
    this._markAllBroadcastsAsRead();
  },

  _markAllSyncNotificationsAsRead: function () {
    __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__["a" /* default */].
    get().
    then(userData => {
      if (userData.id === 0) {
        return;
      }

      _.each(this.models, notification => {
        notification.get('type') === this.TYPE_NOTIFICATION && this._updateServerNotificationAsRead(notification.get('id'), false);
      });

      this.unreadCount = 0;
      this.trigger('change');

      __WEBPACK_IMPORTED_MODULE_2__modules_services_SyncRemoteFetcherService__["a" /* default */].remoteFetch('notification', 'update').
      then(res => {
        if (!res) {
          console.log('Error marking notifications as read');
          return;
        }
        if (!_.isEmpty(this.unreadSyncNotifications)) {
          this.unreadSyncNotifications = [];
        }
      });
    }).
    catch(e => {
      console.log('Error in marking all notifications as read', e);
    });
  },

  _markAllBroadcastsAsRead: function () {
    let unreadBroadcasts = _.filter(this.models, notification => {
      return notification.get('type') === this.TYPE_BROADCAST && notification.get('data').meta.read === false;
    });

    if (_.isEmpty(unreadBroadcasts)) {
      return;
    }

    let currentTime = __WEBPACK_IMPORTED_MODULE_1_moment___default()().toISOString();
    Promise.all(
    _.map(unreadBroadcasts, broadcast => {
      return __WEBPACK_IMPORTED_MODULE_4__modules_services_ModelService__["a" /* default */].create('broadcast', { id: broadcast.get('id') });
    })).

    then(broadCastArray => {
      _.each(broadCastArray, broadcast => {
        broadcast.set('data', _extends({},
        broadcast.get('data'), {
          meta: _extends({},
          broadcast.get('data').meta, {
            read: true,
            stickToTop: false,
            createdAt: currentTime }) }));


        this.trigger('change');
      });
    }).
    catch(e => {
      console.log('Error in saving broadcast', e);
    });
  },

  _nukeEverything: function () {
    this.reset();
    this.unreadCount = 0;
    this.socketConnected = false;
    this.loading = false;
    this.endOfFeed = false;
    this.nextMaxId = 0;
    this.queuedSyncNotifications = [];
    __WEBPACK_IMPORTED_MODULE_4__modules_services_ModelService__["a" /* default */].
    delete('broadcast', {}).
    then(() => {
      this.trigger('change');
    }).
    catch(e => {
      console.error('Error is clearing in broadcasts');
    });
  } });



/* harmony default export */ __webpack_exports__["a"] = (NotificationManager);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_conversion_promisifiedConverter__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_Importer__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_UserController__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_controllers_WindowController__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_controllers_WindowController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__common_controllers_WindowController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(9);







const ProtocolHandler = {
  initialize: function (cb) {
    let channel = pm.eventBus.channel('protocol-handler');
    channel.subscribe(ProtocolHandler.onProtocolEvent);

    cb && cb(null);
  },

  onProtocolEvent: function (params) {
    __WEBPACK_IMPORTED_MODULE_4__common_controllers_WindowController___default.a.getCurrentWindow().
    then(window => {
      let currentWindowId = window.id;
      if (currentWindowId !== params.windowId) return;

      ProtocolHandler.importByURL(params.url);
    });
  },

  importByURL(url) {
    // url is postman://dsf
    let mainParts = url.split('://');
    if (mainParts[0] !== 'postman') {
      return; // some other protocol
    }

    let uriSegments = mainParts[1].split('/');

    // current support: app/collections/import/linkId
    if (uriSegments.length !== 4) {
      return;
    }
    if (uriSegments[0] === 'app' && uriSegments[1] === 'collections' && uriSegments[2] === 'import') {
      let linkId = uriSegments[3];
      __WEBPACK_IMPORTED_MODULE_3__modules_controllers_UserController__["a" /* default */].
      get().
      then(user => {
        Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["e" /* DownloadDirectoryCollection */])({ user, linkId }, (err, data) => {
          if (err) {
            pm.alerts.error('We can\'t seem to find the collection you\'re trying to import.');
            return;
          }

          let text,
          urlVars = __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].getUrlVars(url),
          referrer = _.find(urlVars, { key: 'referrer' }),
          referrerValue = referrer ? decodeURIComponent(referrer.value) : '';

          try {
            text = JSON.stringify(data);
          } catch (e) {
            console.error('ProtocolHandler: collection data is not a valid JSON', data, e);
            return;
          }

          __WEBPACK_IMPORTED_MODULE_2__controllers_Importer__["a" /* default */].importData(text, {
            origin: 'run-in-postman',
            link: url,
            referrer: referrerValue });

        });
      });
      Object(__WEBPACK_IMPORTED_MODULE_1__services_conversion_promisifiedConverter__["a" /* default */])().then(converter => {
        converter.checkImportEnvironmentFromUrl(url);
      });
    }
  } };


/* harmony default export */ __webpack_exports__["a"] = (ProtocolHandler);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = initializeConfigurations;
/* unused harmony export initializeServices */
/* unused harmony export subscribeToModelEvents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_Configuration__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_FeatureFlags__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_model_event__ = __webpack_require__(3);





let servicesMap = [
__WEBPACK_IMPORTED_MODULE_0__services_Configuration__["a" /* default */],
__WEBPACK_IMPORTED_MODULE_1__services_FeatureFlags__["a" /* default */]];


/**
                * Initializes the configuration service
                *
                * @param {Function} cb
                */
function initializeConfigurations(cb) {
  initializeServices().
  then(({ configService, featureFlagService }) => {
    pm.configs = configService;
    pm.features = featureFlagService;
    cb && cb(null);
  }).
  catch(e => {
    cb & cb(e);
  });
}

/**
   * Initializes the configuration caches
   */
function initializeServices() {
  return Promise.all(_.map(servicesMap, s => {
    let service = new s();
    subscribeToModelEvents(service, service._getLayerNamespaces());
    return Promise.resolve(service);
  })).
  then(values => {
    return {
      configService: values[0],
      featureFlagService: values[1] };

  });
}

/**
   * Subscribes the caches to the model-events on the event bus
   * 
   * @param {*} cache
   * @param {*} namespaces
   */
function subscribeToModelEvents(service, namespaces) {
  pm.eventBus.channel('model-events').subscribe(function (event) {
    Object(__WEBPACK_IMPORTED_MODULE_2__modules_model_event__["i" /* processEvent */])(event, ['updated'], function (event, cb) {
      let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__modules_model_event__["g" /* getEventNamespace */])(event),
      eventName = Object(__WEBPACK_IMPORTED_MODULE_2__modules_model_event__["f" /* getEventName */])(event);

      if (!_.includes(namespaces, eventNamespace)) {
        return cb && cb();
      }

      // Bail out if any other action except updated
      if (eventName !== 'updated') {
        return cb && cb();
      }

      // Invalidate the cache if changes are made
      service.invalidateCache();
      cb && cb();
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_ConfigurationController__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultConfigurationController__ = __webpack_require__(159);


let

Configuration = class Configuration extends __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__["a" /* default */] {constructor(...args) {var _temp;return _temp = super(...args), this.
    layers = {
      user: {
        controller: __WEBPACK_IMPORTED_MODULE_1__modules_controllers_ConfigurationController__["a" /* default */],
        namespace: 'userconfigs' },

      app: {
        controller: __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultConfigurationController__["a" /* default */],
        namespace: 'defaultconfigs' } }, this.




    resolutionOrder = ['app', 'user'], _temp;} // The order in which the layers will be resolved
};

/* harmony default export */ __webpack_exports__["a"] = (Configuration);

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let defaultConfiguration = __webpack_require__(160);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAll: function () {
    return Promise.resolve(defaultConfiguration);
  } });

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = {"workspace.visibilityAvailablePlans":[]}

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserFeatureFlagController__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultFeatureFlagController__ = __webpack_require__(162);


let

FeatureFlags = class FeatureFlags extends __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__["a" /* default */] {constructor(...args) {var _temp;return _temp = super(...args), this.
    layers = {
      user: {
        controller: __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserFeatureFlagController__["a" /* default */],
        namespace: 'userfeatureflags' },

      app: {
        controller: __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultFeatureFlagController__["a" /* default */],
        namespace: 'defaultfeatureflags' } }, this.




    resolutionOrder = ['app', 'user'], _temp;} // The order in which the layers will be resolved.

  isEnabled(key) {
    return super.get(key);
  }

  get() {
    return new Error('Feature Flags: Use the isEnabled API to get a flag');
  }};


/* harmony default export */ __webpack_exports__["a"] = (FeatureFlags);

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let defaultFeatureFlags = __webpack_require__(163);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAll: function () {
    return Promise.resolve(defaultFeatureFlags);
  } });

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = {"inviteByNonAdmin":false}

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);


// @todo Must remove this to browser sdk
var sdk = __webpack_require__(49);let
ModelToSdkTransformer = class ModelToSdkTransformer {

  /**
                                                      * Converts the representation of a certificate manager state to a raw Collection SDK CertificateList array.
                                                      *
                                                      * @param {Object} certificateManager - A representation of the current certificate manager state.
                                                      * @return {Array} - A raw Collection SDK CertificateList compliant Array.
                                                      */
  getClientSslCerts(certificateManager) {
    return _.map(certificateManager.toJSON(), rawCert => {
      return {
        matches: ['https://' + rawCert.host + '/*'],
        key: { src: rawCert.keyPath },
        cert: { src: rawCert.pemPath },
        passphrase: rawCert.passphrase };

    });
  }

  /*
     * To convert model headers array to sdk accepted header format
     * @param {RequestModel=} {request} = The request model
     * @return {Array=}
     *
     * @example
     *
     * var sdkRequestHeader = ModelToSdkTransformer.getHeaders(req);
     *
     * [
     *   {
     *      key: 'header1',
     *      value: 'headervalue1'
     *      disabled: false
     *   },
     *   {
     *      key: 'header2',
     *      value: 'headervalue2'
     *      disabled: true
     *   }
     * ]
     */

  getHeaders(request, addDefaultHeaders) {
    // Don't want to have the object reference to be sustained
    let headers = request.get('headerData'),
    hedersArray = _.reduce(headers, (accumulator, header) => {
      header.disabled = !_.get(header, 'enabled', true);
      header.key && accumulator.push(header);
      return accumulator;
    }, []);

    if (addDefaultHeaders) {
      pm.settings.getSetting('sendNoCacheHeader') && hedersArray.push({
        key: 'cache-control',
        value: 'no-cache',
        enabled: true });

      pm.settings.getSetting('sendPostmanTokenHeader') && hedersArray.push({
        key: 'Postman-Token',
        value: '{{$guid}}',
        enabled: true });

    }
    return hedersArray;
  }

  /*
     * To convert model url to sdk url with the pathVariables
     * @param {RequestModel=} {request} = The request model
     * @return {SdkUrl with path variable}
     */

  getUrl(request) {
    return _.assignIn(new sdk.Url(request.get('url') || '').toJSON(), {
      variable: _.reduce(request.get('pathVariableData'), (accumulator, data) => {
        _.get(data, 'key') && accumulator.push({
          id: data.key,
          value: _.get(data, 'value', '') });

        return accumulator;
      }, []) });

  }

  getRequestData(mode, body) {
    let content = this.getBodyContent(mode, body, true);

    if (mode === 'binary') {

      // Collection transformer uses this to transform to v2
      // https://github.com/postmanlabs/postman-collection-transformer/blob/develop/lib/converters/v1.0.0/converter-v1-to-v2.js#L175
      return {
        dataMode: mode,
        rawModeData: content };

    }
    return {
      dataMode: mode,
      data: content };

  }

  getBodyContent(mode, body, forV1) {
    var content = [];
    if (mode === 'raw') {
      content = this.getRawBody(body);
    } else
    if (_.includes(['file', 'binary'], mode)) {
      content = this.getFileBody(body);
    } else
    {
      content = body.get('data') || [];
    }

    if (_.isArray(content)) {
      content = this.sanitizeBodyContent(content, forV1);
    }
    return content;
  }

  getRawBody(body) {
    // If request.rawModeData exists, use it, or use request.data
    return _.isString(body.get('rawModeData') || body.get('data')) ?
    body.get('rawModeData') || body.get('data') : body.get('data');
  }

  getFileBody(body) {
    return body.get('file');
  }

  processBodySource(di) {
    return di && di.path;
  }

  sanitizeBodyContent(dataContent, forV1) {
    var fileId, src;
    return _.reduce(dataContent, (accumulator, dataItem) => {
      if (dataItem.type === 'file') {
        fileId = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].guid();
        if (dataItem.value && !_.isString(dataItem.value) && dataItem.value.length) {// Process the file-list
          _.forEach(dataItem.value, di => {
            src = this.processBodySource(di);
            accumulator.push(
            _.assign({}, dataItem, {
              disabled: dataItem.enabled === false,
              src: src,
              key: dataItem.key || dataItem.name },
            forV1 ? { value: src } : {}));

          });
        }
      } else
      {
        accumulator.push(_.assign({}, dataItem, { disabled: dataItem.enabled === false }));
      }
      return accumulator;
    }, []);
  }

  getBody(request) {
    var modes = {
      urlencoded: 'urlencoded',
      params: 'formdata',
      raw: 'raw',
      binary: 'file' },

    mode,
    body = request.get('body'),
    data = {};

    if (!__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].isMethodWithBody(request.get('method')) || !body) {
      return data;
    }

    mode = modes[body.get('dataMode')] || 'raw';
    data.mode = mode;
    data[mode] = this.getBodyContent(mode, body);
    return data;
  }

  getRequest(request, opts) {
    let defaultHeaders = [],
    addDefaultHeaders = opts && opts.addDefaultHeaders;

    return {
      method: request.get('method'),
      auth: request.get('auth'),
      url: this.getUrl(request),
      header: this.getHeaders(request, addDefaultHeaders),
      body: this.getBody(request) };

  }};


/* harmony default export */ __webpack_exports__["a"] = (new ModelToSdkTransformer());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.Immutable = factory();
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step > 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    findEntry: function(predicate, context) {
      var found;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findLastEntry: function(predicate, context) {
      return this.toSeq().reverse().findEntry(predicate, context);
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  // Temporary warning about using length
  (function () {
    try {
      Object.defineProperty(IterablePrototype, 'length', {
        get: function () {
          if (!Iterable.noLengthWarning) {
            var stack;
            try {
              throw new Error();
            } catch (error) {
              stack = error.stack;
            }
            if (stack.indexOf('_wrapObject') === -1) {
              console && console.warn && console.warn(
                'iterable.length has been deprecated, '+
                'use iterable.size or iterable.count(). '+
                'This warning will become a silent error in a future version. ' +
                stack
              );
              return this.size;
            }
          }
        }
      });
    } catch (e) {}
  })();



  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLastKey: function(predicate, context) {
      return this.toSeq().reverse().findKey(predicate, context);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    lastKeyOf: function(searchValue) {
      return this.findLastKey(function(value ) {return is(value, searchValue)});
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.toKeyedSeq().keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.toKeyedSeq().reverse().keyOf(searchValue);
      return key === undefined ? -1 : key;

      // var index =
      // return this.toSeq().reverse().indexOf(searchValue);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var key = this.toKeyedSeq().findLastKey(predicate, context);
      return key === undefined ? -1 : key;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : value;
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activateTrial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return upgradeToPro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return openAccountSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return openTeamSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return openTeamBilling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return openUserSessions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return openUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return openNotificationPreferences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return openPostmanProIntegration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return openInviteUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return openPostmanUsages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return openCollectionLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return openAuditLogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return openEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return manageWorkspaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return openIntegrationBrowse; });
/* unused harmony export manageMembers */
/* unused harmony export shareWorkspace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getEntityDetailsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCollectionPublishURL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_controllers_UserController__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(109);




/**
                                                                 * 
                                                                 */
function activateTrial() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard?showtrialstart=true`);
}

/**
   * @todo need to go via dashboard `/dpxy/buy'
   * openAuthenticatedRoute(`${pm.appUrl}/dpxy/buy`);
   */
function upgradeToPro() {
  pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["F" /* PRICING_LINK */]);
}

/**
   * 
   */
function openTeam() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/teams`);
}

/**
   * 
   */
function openPostmanProIntegration() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/integrations/pm_pro_api/list`);
}

/**
   * 
   */
function openInviteUsers() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/teams`);
}

/**
   * 
   */
function openAccountSettings() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/profile`);
}

/**
   * 
   */
function openTeamSettings() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/settings/team`);
}

/**
   * 
   */
function openTeamBilling() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/billing`);
}

/**
   * 
   */
function openUserSessions() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/sessions`);
}

function openUserProfile() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/collections/private`);
}

function openNotificationPreferences() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/notifications`);
}

function openPostmanUsages() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/usage`);
}

function openCollectionLink() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/collections/links`);
}

function openAuditLogs() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/audit`);
}

function openEntity(type, id, workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(getEntityDetailsURL(type, id, workspaceId));
}

function editEntity(type, id, workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/${type}/${id}/edit?workspace=${workspaceId}`);
}

function manageWorkspaces() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/workspaces`);
}

function manageMembers(workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/workspaces/${workspaceId}/edit`);
}

function shareWorkspace(workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/workspaces/${workspaceId}/share`);
}

function openIntegrationBrowse(workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/workspaces/${workspaceId}/integrations?view=browse`);
}

/**
   * 
   * @param {Strin} type 
   * @param {String} id 
   * @param {String} workspaceId 
   */
function getEntityDetailsURL(type, id, workspaceId) {
  return `${pm.appUrl}/dpxy/${type}/${id}?workspace=${workspaceId}`;
}

/**
   * 
   * @param {String} id 
   * @param {String} workspaceId 
   */
function getCollectionPublishURL(id, workspaceId) {
  return `${pm.appUrl}/dpxy/collections/${id}/publish?workspace=${workspaceId}`;
}



/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_UserController__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipelines_app_action__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_PostLoginService__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AnalyticsService__ = __webpack_require__(20);






/* harmony default export */ __webpack_exports__["a"] = ({
  channel: 'auth-handler-events',
  login({ isSignup } = {}) {
    __WEBPACK_IMPORTED_MODULE_4__AnalyticsService__["a" /* default */].addEvent('account', 'initiate_signin', null, null, null, { noActiveWorkspace: true });
    pm.eventBus.channel(this.channel).publish(Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('login', 'authentication', { isSignup }));
  },
  reAuthenticate() {
    __WEBPACK_IMPORTED_MODULE_1__controllers_UserController__["a" /* default */].get().then(currentUser => {
      pm.eventBus.channel(this.channel).publish(Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('reauthenticate', 'authentication', { userID: currentUser.id }));
    });
  },
  handlePostAuthentication(userData) {
    userData.appUserType = 'currentUser';

    __WEBPACK_IMPORTED_MODULE_1__controllers_UserController__["a" /* default */].update(userData).then(() => {
      return Object(__WEBPACK_IMPORTED_MODULE_2__pipelines_app_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('bootstrapUser', 'user'));
    }).then(() => {
      return Object(__WEBPACK_IMPORTED_MODULE_2__pipelines_app_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('migratePreloginData', 'user'));
    });
  },
  init() {
    let authHandlerChannel = pm.eventBus.channel(this.channel);

    __WEBPACK_IMPORTED_MODULE_1__controllers_UserController__["a" /* default */].get().then(currentUser => {
      if (currentUser.id == 0) {
        // Request for userInfo
        authHandlerChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('get_auth_info', 'authentication'));
      }

      authHandlerChannel.subscribe(event => {
        if (event.name === 'authenticated') {
          __WEBPACK_IMPORTED_MODULE_1__controllers_UserController__["a" /* default */].get().then(currentUser => {
            let invalidateSessionSignin = currentUser.id !== '0';

            __WEBPACK_IMPORTED_MODULE_4__AnalyticsService__["a" /* default */].addEvent('account', invalidateSessionSignin ? 'invalidate_session_sign_in' : 'sign_in', 'account', null, null, { noActiveWorkspace: true });

            if (event.data.hasAccounts && !invalidateSessionSignin) {// This is not the first user AND the user is not locked
              __WEBPACK_IMPORTED_MODULE_4__AnalyticsService__["a" /* default */].addEvent('account', 'successful_add_account');
            }

            return event.data.userData || {};
          }).then(userData => {
            this.handlePostAuthentication(userData);
          });

        }

        if (event.name === 'skip') {
          __WEBPACK_IMPORTED_MODULE_4__AnalyticsService__["a" /* default */].addEvent('account', 'skip', null, null, null, { noActiveWorkspace: true });
        }
      });

    });
  } });

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderResponsePreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return saveAndOpenFileForResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return saveAndOpenFile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sanitize_filename__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sanitize_filename___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sanitize_filename__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base64_arraybuffer__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base64_arraybuffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_base64_arraybuffer__);



function __errorHandler(e) {
  console.log('Filesystem Error: ' + e);
}

// electron
function __removeFileIfExists(name, callback) {
  try {
    var fs = __webpack_require__(24);
    fs.unlink(name, function (err) {
      callback();
    });
  }
  catch (e) {
    callback();
  }
}

/**
    @usage
      For converting the buffer to String
    @reference
      https://stackoverflow.com/questions/6965107/converting-between-strings-and-arraybuffers/20604561#answer-20604561
    @something additonal
      The reason for 65535
      https://en.wikipedia.org/wiki/65535_(number)
  */

function __formatPDFDataForElectron(data) {
  var bufView = new Uint8Array(data),
  length = bufView.length,
  result = '';

  for (var i = 0; i < length; i += 65535) {
    var addition = 65535;
    if (i + 65535 > length) {
      addition = length - i;
    }
    result += String.fromCharCode.apply(null, bufView.subarray(i, i + addition));
  }
  if (!result) {
    console.log('Pdf conversion failed for electron');
  }
  return result;
}

function __getProbableExtension(mimeType) {
  var mimeExtensions = [
  {
    typeSubstring: 'text',
    extension: '.txt' },

  {
    typeSubstring: 'json',
    extension: '.json' },

  {
    typeSubstring: 'javascript',
    extension: '.js' },

  {
    typeSubstring: 'pdf',
    extension: '.pdf' },

  {
    typeSubstring: 'png',
    extension: '.png' },

  {
    typeSubstring: 'jpg',
    extension: '.jpg' },

  {
    typeSubstring: 'jpeg',
    extension: '.jpg' },

  {
    typeSubstring: 'gif',
    extension: '.gif' },

  {
    typeSubstring: 'excel',
    extension: '.xls' },

  {
    typeSubstring: 'zip',
    extension: '.zip' },

  {
    typeSubstring: 'compressed',
    extension: '.zip' },

  {
    typeSubstring: 'audio/wav',
    extension: '.wav' },

  {
    typeSubstring: 'tiff',
    extension: '.tiff' },

  {
    typeSubstring: 'shockwave',
    extension: '.swf' },

  {
    typeSubstring: 'powerpoint',
    extension: '.ppt' },

  {
    typeSubstring: 'mpeg',
    extension: '.mpg' },

  {
    typeSubstring: 'quicktime',
    extension: '.mov' },

  {
    typeSubstring: 'html',
    extension: '.html' },

  {
    typeSubstring: 'css',
    extension: '.css' }];


  var numEx = mimeExtensions.length;
  for (var i = 0; i < numEx; i++) {
    if (mimeType.indexOf(mimeExtensions[i].typeSubstring) > -1) {
      return mimeExtensions[i].extension;
    }
  }
  return '';
}

function renderResponsePreview(name, data, type, callback) {
  name = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].guid() + '-' + __WEBPACK_IMPORTED_MODULE_0_sanitize_filename___default()(name, { replacement: '-' });
  __removeFileIfExists(name, function () {
    var electronPath = __webpack_require__(7).remote.app.getPath('temp') + '/' + name;

    // write to the file
    var fs = __webpack_require__(24);
    fs.writeFile(electronPath, data, function (err) {
      if (err) {
        console.log('err', err);
        __errorHandler(err);
      } else
      {
        callback(electronPath);
      }
    });
  });
}

// works with electron
function saveAndOpenFileForResponse(name, data, type, callback) {
  name += __getProbableExtension(type);

  // sdkResponse override
  if (typeof data.mime === 'function') {
    name = data.mime().filename;
  }

  name = __WEBPACK_IMPORTED_MODULE_0_sanitize_filename___default()(name + __getProbableExtension(type), { replacement: '-' });
  var path = pm.appWindow.sendSyncMessage('getSaveTarget', name);
  if (!path) {
    console.log('Save aborted');
  } else
  {
    // Buffer is a browserified Buffer that doesn't work in the browser
    // NativeBuffer comes from the background process and works
    var fs = __webpack_require__(24),
    NativeBuffer = __webpack_require__(7).remote.require('buffer').Buffer,
    base64 = __WEBPACK_IMPORTED_MODULE_2_base64_arraybuffer___default.a.encode(data.stream),
    dataBuffer = new NativeBuffer(base64, 'base64');
    try {
      fs.writeFileSync(path, dataBuffer);
      callback();
    }
    catch (e) {
      __errorHandler(e);
    }
  }
  return;
}

function saveAndOpenFile(name, data, type, callback) {
  name = __WEBPACK_IMPORTED_MODULE_0_sanitize_filename___default()(name, { replacement: '-' });
  if (type === 'pdf' || type === 'image') {
    data = __formatPDFDataForElectron(data);
  }
  var path = pm.appWindow.sendSyncMessage('getSaveTarget', name);
  if (!path) {
    console.log('Save aborted');
    callback(new Error('Save aborted'));
  } else
  {
    var fs = __webpack_require__(24);
    fs.writeFile(path, data, function (err) {
      if (err) __errorHandler(err);

      callback && callback(err);
    });
  }
  return;
}



/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(9);


let _ = __webpack_require__(0);
let { ipcRenderer } = __webpack_require__(7);
let { Item, Request, Response } = __webpack_require__(49);

/**
                                                                  * Pool of all existing runs
                                                                  *
                                                                  * @var {Object} RendererRuntimeBridge~runPool
                                                                  */
let runPool = {},
authManifestCache = new Map();

/**
                                * A list of callbacks that runtime fires over the lifetime of a collection run
                                *
                                * @type {String[]}
                                *
                                * @see https://github.com/postmanlabs/postman-runtime/blob/develop/README.md
                                */
const runtimeRunCallbacks = [
'start',
'io',
'beforeIteration',
'beforeItem',
'beforePrerequest',
'prerequest',
'beforeRequest',
'request',
'response',
'assertion',
'beforeTest',
'test',
'cookies', // custom callback
'item',
'iteration',
'exception',
'console',
'pause',
'resume',
'error',
'done',
'stop',
'abort'];


/**
           * Disposes a Runtime run object.
           * Also makes sure there are no pending callbacks before removing its instance from `runPool`.
           *
           * @function RendererRuntimeBridge~disposeRun
           *
           * @param {UUID} runId - ID of the run instance
           */
function disposeRun(runId) {
  var runCache = runPool[runId];
  if (!runCache) {
    return;
  }

  if (runCache.pendingCallbacks === 0) {
    ipcRenderer.send('RUNTIME_RUN_DISPOSE', runId);
    delete runPool[runId];
    return;
  }

  setTimeout(disposeRun, 1000, runId);
}

// The collection of callback reducers
// Each reducer takes in serialised params and
// returns an array of deserialized params
let callbackArgumentReducers = {
  start(err, cursor) {
    return [JSON.parse(err), cursor];
  },

  io(err, cursor, trace, response, request, cookies) {
    return [JSON.parse(err), cursor, trace, response && new Response(response), request && new Request(request), cookies];
  },

  exception(cursor, exception) {
    return [cursor, JSON.parse(exception)];
  },

  beforeIteration(err, cursor) {
    return [JSON.parse(err), cursor];
  },

  beforeItem(err, cursor, item) {
    return [JSON.parse(err), cursor, item && new Item(item)];
  },

  beforePrerequest(err, cursor, events, item) {
    return [JSON.parse(err), cursor, JSON.parse(events), item && new Item(item)];
  },

  prerequest(err, cursor, results, item) {
    return [JSON.parse(err), cursor, JSON.parse(results), item && new Item(item)];
  },

  beforeRequest(err, cursor, request, item, aborter) {
    return [JSON.parse(err), cursor, request && new Request(request), item && new Item(item), aborter];
  },

  request(err, cursor, response, request, item, cookies) {
    return [JSON.parse(err), cursor, response && new Response(response), request && new Request(request), item && new Item(item), cookies];
  },

  response(err, cursor, response, request, item, cookies) {
    return [JSON.parse(err), cursor, response && new Response(response), request && new Request(request), item && new Item(item), cookies];
  },

  assertion(cursor, assertion) {
    return [cursor, JSON.parse(assertion)];
  },

  beforeTest(err, cursor, events, item) {
    return [JSON.parse(err), cursor, JSON.parse(events), item && new Item(item)];
  },

  test(err, cursor, results, item) {
    return [JSON.parse(err), cursor, JSON.parse(results), item && new Item(item)];
  },

  cookies(err, cookies) {
    return [JSON.parse(err), cookies];
  },

  item(err, cursor, item) {
    return [JSON.parse(err), cursor, item && new Item(item)];
  },

  iteration(err, cursor) {
    return [JSON.parse(err), cursor];
  },

  pause(err, cursor) {
    return [JSON.parse(err), cursor];
  },

  resume(err, cursor) {
    return [JSON.parse(err), cursor];
  },

  done(err, cursor) {
    return [JSON.parse(err), cursor];
  },

  error(err) {
    return [JSON.parse(err)];
  },

  stop(err, ...args) {
    return [JSON.parse(err), ...args];
  },

  abort(err, ...args) {
    return [JSON.parse(err), ...args];
  } };


/**
        * Invokes a callback on the run with arguments safely.
        *
        * @function RendererRuntimeBridge~invokeCallbackSafely
        *
        * @param {UUID} id       - ID of the run
        * @param {String} callback - Name of the callback that will be invoked
        * @param {...*} args          - An array of arguments that need to be sent to the callback
       */
function invokeCallbackSafely(id, callback, ...args) {
  return runPool[id] && runPool[id].callbackMap && _.isFunction(runPool[id].callbackMap[callback]) && runPool[id].callbackMap[callback](...args);
}

/**
   * Adds an IPC listener to a callback
   *
   * @function RendererRuntimeBridge~assignListenersToCallbacks
   *
   * @param {String} callbackName - Name of the callback to attach the listener to
   */
function assignListenersToCallbacks(callbackName) {
  let listenerName = `RUNTIME_CALLBACK_${callbackName.toUpperCase()}`;
  ipcRenderer.on(listenerName, (event, id, ...rawArgs) => {
    // See if this callback has a reducer
    // If it has one apply the params to the reducer and then
    // send them to the callback
    let argumentsReducer = callbackArgumentReducers[callbackName];
    let reducedAguments = _.isFunction(argumentsReducer) ? argumentsReducer(...rawArgs) : rawArgs;

    if (callbackName === 'test') {
      runPool[id] && runPool[id].pendingCallbacks++;
    }

    if (callbackName === 'cookies') {
      runPool[id] && runPool[id].pendingCallbacks--;
    }
    invokeCallbackSafely(id, callbackName, ...reducedAguments);
  });
}

// Adds listeners for each callback.
_.forEach(runtimeRunCallbacks, assignListenersToCallbacks);

/**
                                                             * The bridge on the renderer process
                                                             *
                                                             * @class RendererRuntimeBridge
                                                             *
                                                             * RuntimeBridge is a pipeline through which main process and renderer process
                                                             * send and receive `run` related data.
                                                             *
                                                             * When the app wants to create a run, it asks the RuntimeBridge on
                                                             * renderer process to create one, with the set of options.
                                                             *
                                                             * This RuntimeBridge then sends a signal to its counterpart on the main process
                                                             * passing along the options and a new id.
                                                             *
                                                             * The main process is where postman-runtime instance is created. This instance is
                                                             * stored against the id on the main process for future references.
                                                             * All future communications between the two are based on this id.
                                                             *
                                                             * Each callback on the main process sends a signal with the tracking id
                                                             * and serialized params.
                                                             *
                                                             * The bridge on renderer process deserializes the params and uses the tracking id
                                                             * to pass it on to the caller.
                                                             *
                                                             * In the same way, if the app wants to pause, resume or stop a run it tells the
                                                             * RuntimeBridge, which then converts it to a signal and
                                                             * then sends it to the main process.
                                                             *
                                                             * Now there are only 2 instances of RuntimeBridge talking to each other
                                                             * over a finite set of listeners(one per callback).
                                                             *
                                                             * This approach has advantages over `electron.remote.require()`.
                                                             * The number of inter process communications is reduced to one per callback,
                                                             * where it used to be one per each property access.
                                                             *
                                                             * NOTE: A signal here refers to an IPC call. All IPC calls here are async.
                                                             */let
RendererRuntimeBridge = class RendererRuntimeBridge {
  /**
                                                      * Sends an IPC call out to start a run
                                                      *
                                                      * @function RendererRuntimeBridge#startRun
                                                      *
                                                      * @param {Object} runnerOptions             - Options for new Runner
                                                      * @param {Object} runOptions                - Options for runtime's run function
                                                      * @param {Object} runMetaData               - Miscellaneous run related data, certificates etc.
                                                      * @param {Collection~definition} collection - The collection to run
                                                      * @param {Object} runCallbackMap            - Callbacks for each run
                                                      *
                                                      * @returns {Promise} - Fulfills when the run is created
                                                      */
  startRun(runnerOptions, runOptions, runMetaData, collection, runCallbackMap) {
    const id = __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].guid();

    let runCreatePromise = new Promise((resolve, reject) => {
      // resolve promise with the id when the success event is received
      ipcRenderer.once(`RUNTIME_RUN_CREATE_${id}`, (event, receivedRunId) => {
        runPool[receivedRunId] = {
          callbackMap: runCallbackMap,
          pendingCallbacks: 0 };

        resolve(receivedRunId);
      });

      // reject promise with error when error event is received
      ipcRenderer.once(`RUNTIME_RUN_CREATE_ERROR_${id}`, (event, error) => {
        reject(JSON.parse(error));
      });
    });

    // send a call event out to the RuntimeBridge on main process
    ipcRenderer.send('RUNTIME_RUN_CREATE', id, runnerOptions, runOptions, runMetaData, collection.toJSON());

    return runCreatePromise;
  }

  /**
     * Sends a pause call for the run to main process
     *
     * @function RendererRuntimeBridge#pauseRun
     *
     * @param {UUID} id - ID of the run to pause
     */
  pauseRun(id) {
    ipcRenderer.send('RUNTIME_RUN_PAUSE', id);
  }

  /**
     * Sends a resume call for the run to main process
     *
     * @function RendererRuntimeBridge#resumeRun
     *
     * @param {UUID} id - ID of the run to resume
     */
  resumeRun(id) {
    ipcRenderer.send('RUNTIME_RUN_RESUME', id);
  }

  /**
     * Sends a stop call for the run to main process
     *
     * @function RendererRuntimeBridge#stopRun
     *
     * @param {string} id - ID of the run to stop
     */
  stopRun(id) {
    ipcRenderer.send('RUNTIME_RUN_STOP', id);
  }

  /**
     * Sends a call to stop the current in progress request on a run and stop the run
     *
     * @function RendererRuntimeBridge#stopRunRequest
     *
     * @param {UUID} id - The run id with the request to stop
     */
  stopRunRequest(id) {
    ipcRenderer.send('RUNTIME_RUN_STOP_REQUEST', id);
  }

  /**
     * Disposes a run
     *
     * @function RendererRuntimeBridge#disposeRun
     *
     * @param {UUID} id - ID of the run to dispose
     *
     * @see disposeRun
     */
  disposeRun(id) {
    disposeRun(id);
  }

  /**
     * Authorizes a request.
     * 
     * @param {Object} request - Postman SDK Request
     * @param {Function} callback - Callback that handles the authorized request.
     */
  authorizeRequest(request, callback) {
    const id = __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].guid();

    ipcRenderer.once(`RUNTIME_AUTHORIZE_REQUEST_${id}`, (event, err, receivedRequest) => {
      let authorizedRequest;

      if (err) {
        let error;
        try {
          error = JSON.parse(err);
        }
        catch (parseError) {
          error = parseError;
        }
        return callback(error, null);
      }

      try {
        authorizedRequest = JSON.parse(receivedRequest);
      }
      catch (error) {
        return callback(error, null);
      }

      callback(null, new Request(authorizedRequest));
    });

    ipcRenderer.send('RUNTIME_AUTHORIZE_REQUEST', id, JSON.stringify(request.toJSON()));
  }

  /**
     * Fetches the manifest for the given authorization type.
     * 
     * @param {String} authType 
     * @param {Function} callback 
     */
  getAuthHandlerManifest(authType, callback) {
    if (authManifestCache.has(authType)) {
      return callback(null, authManifestCache.get(authType));
    }
    const id = __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].guid();

    ipcRenderer.once(`RUNTIME_GET_AUTH_HANDLER_${id}`, (event, err, authHandlerManifest) => {
      let authManifest;

      if (err) {
        let error;
        try {
          error = JSON.parse(err);
        }
        catch (parseError) {
          error = parseError;
        }
        return callback(error, null);
      }

      try {
        authManifest = JSON.parse(authHandlerManifest);
      }
      catch (error) {
        return callback(error, null);
      }

      authManifestCache.set(authType, authManifest);

      callback(null, authManifest);
    });

    ipcRenderer.send('RUNTIME_GET_AUTH_HANDLER', id, authType);
  }};


/* harmony default export */ __webpack_exports__["a"] = (new RendererRuntimeBridge());

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true*/


/**
 * Replaces characters in strings that are illegal/unsafe for filenames.
 * Unsafe characters are either removed or replaced by a substitute set
 * in the optional `options` object.
 *
 * Illegal Characters on Various Operating Systems
 * / ? < > \ : * | "
 * https://kb.acronis.com/content/39790
 *
 * Unicode Control codes
 * C0 0x00-0x1f & C1 (0x80-0x9f)
 * http://en.wikipedia.org/wiki/C0_and_C1_control_codes
 *
 * Reserved filenames on Unix-based systems (".", "..")
 * Reserved filenames in Windows ("CON", "PRN", "AUX", "NUL", "COM1",
 * "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9",
 * "LPT1", "LPT2", "LPT3", "LPT4", "LPT5", "LPT6", "LPT7", "LPT8", and
 * "LPT9") case-insesitively and with or without filename extensions.
 *
 * Capped at 255 characters in length.
 * http://unix.stackexchange.com/questions/32795/what-is-the-maximum-allowed-filename-and-folder-size-with-ecryptfs
 *
 * @param  {String} input   Original filename
 * @param  {Object} options {replacement: String}
 * @return {String}         Sanitized filename
 */

var truncate = __webpack_require__(261);

var illegalRe = /[\/\?<>\\:\*\|":]/g;
var controlRe = /[\x00-\x1f\x80-\x9f]/g;
var reservedRe = /^\.+$/;
var windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
var windowsTrailingRe = /[\. ]+$/;

function sanitize(input, replacement) {
  var sanitized = input
    .replace(illegalRe, replacement)
    .replace(controlRe, replacement)
    .replace(reservedRe, replacement)
    .replace(windowsReservedRe, replacement)
    .replace(windowsTrailingRe, replacement);
  return truncate(sanitized, 255);
}

module.exports = function (input, options) {
  var replacement = (options && options.replacement) || '';
  var output = sanitize(input, replacement);
  if (replacement === '') {
    return output;
  }
  return sanitize(output, '');
};


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var truncate = __webpack_require__(262);
var getLength = __webpack_require__(263);
module.exports = truncate.bind(null, getLength);


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHighSurrogate(codePoint) {
  return codePoint >= 0xd800 && codePoint <= 0xdbff;
}

function isLowSurrogate(codePoint) {
  return codePoint >= 0xdc00 && codePoint <= 0xdfff;
}

// Truncate string by size in bytes
module.exports = function truncate(getLength, string, byteLength) {
  if (typeof string !== "string") {
    throw new Error("Input must be string");
  }

  var charLength = string.length;
  var curByteLength = 0;
  var codePoint;
  var segment;

  for (var i = 0; i < charLength; i += 1) {
    codePoint = string.charCodeAt(i);
    segment = string[i];

    if (isHighSurrogate(codePoint) && isLowSurrogate(string.charCodeAt(i + 1))) {
      i += 1;
      segment += string[i];
    }

    curByteLength += getLength(segment);

    if (curByteLength === byteLength) {
      return string.slice(0, i + 1);
    }
    else if (curByteLength > byteLength) {
      return string.slice(0, i - segment.length + 1);
    }
  }

  return string;
};



/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHighSurrogate(codePoint) {
  return codePoint >= 0xd800 && codePoint <= 0xdbff;
}

function isLowSurrogate(codePoint) {
  return codePoint >= 0xdc00 && codePoint <= 0xdfff;
}

// Truncate string by size in bytes
module.exports = function getByteLength(string) {
  if (typeof string !== "string") {
    throw new Error("Input must be string");
  }

  var charLength = string.length;
  var byteLength = 0;
  var codePoint = null;
  var prevCodePoint = null;
  for (var i = 0; i < charLength; i++) {
    codePoint = string.charCodeAt(i);
    // handle 4-byte non-BMP chars
    // low surrogate
    if (isLowSurrogate(codePoint)) {
      // when parsing previous hi-surrogate, 3 is added to byteLength
      if (prevCodePoint != null && isHighSurrogate(prevCodePoint)) {
        byteLength += 1;
      }
      else {
        byteLength += 3;
      }
    }
    else if (codePoint <= 0x7f ) {
      byteLength += 1;
    }
    else if (codePoint >= 0x80 && codePoint <= 0x7ff) {
      byteLength += 2;
    }
    else if (codePoint >= 0x800 && codePoint <= 0xffff) {
      byteLength += 3;
    }
    prevCodePoint = codePoint;
  }

  return byteLength;
};


/***/ }),

/***/ 264:
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {let SdkToModelTransformer = class SdkToModelTransformer {
  /*
                                                          * To convert model headers array to sdk accepted header format
                                                          * @param {RequestModel=} {request} = The request model
                                                          * @return {Array=}
                                                          *
                                                          * @example
                                                          *
                                                          * var sdkRequestHeader = ModelToSdkTransformer.getHeaders(req);
                                                          *
                                                          * [
                                                          *   {
                                                          *      key: 'header1',
                                                          *       name: 'header1',
                                                          *      value: 'headervalue1'
                                                          *      enabled: true
                                                          *   },
                                                          *   {
                                                          *      key: 'header2',
                                                          *      name: 'header2',
                                                          *      value: 'headervalue2'
                                                          *      enabled: true
                                                          *   }
                                                          * ]
                                                          */
  getHeaders(sdkRequest) {
    return _.reduce(sdkRequest.header, (accumulator, header) => {
      accumulator.push({
        name: header.key,
        key: header.key,
        value: header.value,
        enabled: !_.get(header, 'disabled', false),
        system: header.system });

      return accumulator;
    }, []);
  }

  getAuth(sdkRequest) {
    let authType = sdkRequest.auth && sdkRequest.auth.type;
    if (authType) {
      return {
        type: authType,
        data: sdkRequest.auth[authType] };

    }
    return {};
  }

  getBody(sdkRequest) {
    var body = sdkRequest.body,
    mode = !_.isEmpty(body) && body.mode,
    params = !_.isEmpty(body) && body[mode];
    if (_.isEmpty(body)) {
      return {};
    }

    if (mode === 'urlencoded' || mode === 'params') {
      params = _.map(params, param => {
        param.enabled = !_.get(param, 'disabled', false);
        param.type = 'text';
        return param;
      });
    }
    return {
      mode: mode,
      data: params };

  }};


/* harmony default export */ __webpack_exports__["a"] = (new SdkToModelTransformer());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PmConsole; });
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};const sendLogToConsole = function (label, message, type, data) {
  /**
                                                                                                                                                                                                                                                                                                                        * Tells the listener to sanitize and dispatch a console message event.
                                                                                                                                                                                                                                                                                                                        * The actual console message is triggered by `onConsoleMessage` event.
                                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                                        * @event Mediator#consoleMessage
                                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                                        * @param {Object} message console message
                                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                                        * @see Mediator#onConsoleMessage
                                                                                                                                                                                                                                                                                                                        */
  pm.mediator.trigger('consoleMessage', {
    label: label,
    message: message,
    children: {
      type: type,
      data: data } });


};let

PmConsole = class PmConsole {
  constructor() {
    ['debug', 'error', 'info', 'log', 'warn'].forEach(level => {
      this[level] = function (...args) {
        try {
          console.log(...args.slice(2));
        }
        catch (e) {
          // nothing
        }
        if (_.isError(args[0])) {
          sendLogToConsole(level, args[0].message, 'LOG', null);
        } else
        if (args[0] === 'exception') {
          sendLogToConsole(level, args[1] && args[1].message || 'Error', 'LOG', null);
        } else
        {
          const isMultiArg = args.slice(3).length;
          sendLogToConsole(level, args.slice(2)[0], 'LOG', isMultiArg ? args.slice(3) : null);
        }
      };
    });
  }

  trace(args) {

  } // not supported on postman yet

  /**
   * Used to display network log on the console.
   * @param  {String} ref  [Current id of the cursor in the runner]
   * @param  {Object} data [Object with properties => request and response]
   */
  net(ref, data) {
    if (!ref || !data || data && !data.request) {
      console.error('PmConsole: missing parameters');
      return;
    }
    data.ref = ref;
    sendLogToConsole(data.request.method, data.request.url, 'NET', data);
  }

  netErr(ref, errMsg, data = {}) {
    if (!ref || !errMsg) {
      console.error('PmConsole: missing parameters');
      return;
    }
    sendLogToConsole('error', null, 'NET', _extends({
      ref: ref,
      err: { message: errMsg } },
    data));

  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertManager; });
let AlertManager = class AlertManager {
  constructor() {
    this.notificationQueue = [];
    this.isPaused = false;
  }

  isVisible() {
    var notifs = !document.getElementsByClassName('notification'),
    tooltips = !document.getElementsByClassName('tooltip'),
    fullscreenModals = !document.getElementsByClassName('modal-fullscreen');

    return !(notifs && tooltips && fullscreenModals);
  }

  enqueue(callback, priority) {
    this.notificationQueue.push({
      callback: callback,
      priority: priority });


    this.process();
  }

  dequeue() {
    var minPriority = _.min(_.map(this.notificationQueue, 'priority'));
    var toRunIndex = _.findKey(this.notificationQueue, function (element) {
      return element.priority === minPriority;
    });
    return this.notificationQueue.splice(toRunIndex, 1)[0];
  }

  process() {
    if (this.isVisible() || this.isPaused) {
      setTimeout(() => {
        this.process();
      }, 1000); // Try again after 1 second
    } else
    {
      this.isPaused = true;
      this.dequeue().callback();

      setTimeout(() => {
        this.isPaused = false;
      }, 2000); // Separation between notifications
    }
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_postman_collection__);


// Add Unit tests
let ResolveVariableHelper = class ResolveVariableHelper {
  constructor() {
  }

  resolve(string, variables = {}) {
    if (typeof string === 'number') {
      return string;
    }

    if (string == null) {
      return '';
    }

    return __WEBPACK_IMPORTED_MODULE_0_postman_collection__["Property"].replaceSubstitutions(string, variables);
  }};


/* harmony default export */ __webpack_exports__["a"] = (new ResolveVariableHelper());

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_sanitise_user_content__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_sanitise_user_content___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_sanitise_user_content__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_DashboardService__ = __webpack_require__(240);




const eventBusChannel = null;
/* harmony export (immutable) */ __webpack_exports__["eventBusChannel"] = eventBusChannel;


const getEventBus = function () {
  if (!this.eventBusChannel) this.eventBusChannel = pm.eventBus.channel('notifications');
  return this.eventBusChannel;
};
/* harmony export (immutable) */ __webpack_exports__["getEventBus"] = getEventBus;


const setNotificationComponent = function (ref) {
  this._ref = ref;
  this.attachLinkListeners();

  // Listen for notifications from windows with no UI
  if (_.get(pm, 'windowConfig.ui')) {
    this.getEventBus().subscribe(options => {
      this._show(options);
    });
  }
};
/* harmony export (immutable) */ __webpack_exports__["setNotificationComponent"] = setNotificationComponent;


const attachLinkListeners = function () {
  if (!this._ref) {
    return;
  }

  let notificationWrapper = Object(__WEBPACK_IMPORTED_MODULE_0_react_dom__["findDOMNode"])(this._ref);
  if (!notificationWrapper) {
    return;
  }

  notificationWrapper.addEventListener('click', e => {
    let allowClicks = ['notification-dismiss', 'notification-action-button'];
    if (!_.includes(allowClicks, e.target.className)) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (e.target.tagName !== 'A') {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    let link = e.target.href;
    if (link) {
      pm.app.openExternalLink(link);
    } else
    {
      try {
        let slug = e.target.dataset.slug;
        if (slug === 'invite_users') {
          Object(__WEBPACK_IMPORTED_MODULE_2__services_DashboardService__["k" /* openInviteUsers */])();
        }
      }
      catch (e) {
        console.error(e);
      }
    }
  });
};
/* harmony export (immutable) */ __webpack_exports__["attachLinkListeners"] = attachLinkListeners;


const getRef = function () {
  return this._ref;
};
/* harmony export (immutable) */ __webpack_exports__["getRef"] = getRef;


const _getBaseOptions = function (persist, timeout) {
  return {
    position: 'tc',
    dismissible: true,
    autoDismiss: persist ? 0 : timeout };

};
/* harmony export (immutable) */ __webpack_exports__["_getBaseOptions"] = _getBaseOptions;


const _show = function (options) {
  if (!this._ref) {
    _.get(pm, 'windowConfig.ui') ? console.error('Notification System not initialized') : this.getEventBus().publish(options);
    return;
  }

  let {
    level,
    message,
    dedupeId,
    action = null,
    persist = false,
    timeout = 3000,

    // HACK: quick fix for 100K. cleanup.
    skipSanitise = false } =
  options;

  // react notification system takes seconds timeout
  timeout /= 1000;

  let notification = _.extend(
  this._getBaseOptions(persist, timeout), {
    level: level,
    message: skipSanitise ? message : __WEBPACK_IMPORTED_MODULE_1__postman_sanitise_user_content___default.a.strict(message),
    action: action });



  if (dedupeId) {
    notification = _.extend(notification, { uid: `${level}-${dedupeId}` });
  }

  this._ref.addNotification(notification);
};
/* harmony export (immutable) */ __webpack_exports__["_show"] = _show;


const error = function (message, options) {
  message || (message = 'Something went wrong. Please try again.');
  options || (options = {});

  this._show(
  _.extend(options, {
    level: 'error',
    message: message }));


};
/* harmony export (immutable) */ __webpack_exports__["error"] = error;


const info = function (message, options) {
  if (!message) {
    return;
  }

  options || (options = {});

  this._show(
  _.extend(options, {
    level: 'info',
    message: message }));


};
/* harmony export (immutable) */ __webpack_exports__["info"] = info;


const success = function (message, options) {
  if (!message) {
    return;
  }

  options || (options = {});

  this._show(
  _.extend(options, {
    level: 'success',
    message: message }));


};
/* harmony export (immutable) */ __webpack_exports__["success"] = success;


const warning = function (message, options) {
  if (!message) {
    return;
  }

  options || (options = {});

  this._show(
  _.extend(options, {
    level: 'warning',
    message: message }));


};
/* harmony export (immutable) */ __webpack_exports__["warning"] = warning;


const infoWithAction = function (message, options, actionObject) {
  if (!message) {
    return;
  }

  options || (options = {});
  options.action = actionObject;
  this._show(
  _.extend(options, {
    level: 'info',
    message: message }));


};
/* harmony export (immutable) */ __webpack_exports__["infoWithAction"] = infoWithAction;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export findSession */
/* unused harmony export clearOrphanSessions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bootSession; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceSessionController__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_WorkspaceController__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_v4__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__ = __webpack_require__(50);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};






let getDefaultSession = window => {
  return Object(__WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__["b" /* defaultUserWorkspaceId */])().
  then(defaultWorkspaceId => {
    if (!defaultWorkspaceId) {
      return Promise.reject(new Error('Could not find default workspace while booting session'));
    }

    return __WEBPACK_IMPORTED_MODULE_2__modules_controllers_WorkspaceController__["a" /* default */].get({ id: defaultWorkspaceId });
  }).
  then(defaultWorkspace => {
    if (!defaultWorkspace) {
      return Promise.reject(new Error('Could not find default workspace while booting session'));
    }

    return defaultWorkspace;
  }).
  then(defaultWorkspace => {
    return __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceSessionController__["a" /* default */].
    create({
      id: __WEBPACK_IMPORTED_MODULE_3_uuid_v4___default()(),
      window: window.id,
      workspace: defaultWorkspace.id,
      state: {} }).

    then(sessionCreatedEvent => {
      return Object(__WEBPACK_IMPORTED_MODULE_4__modules_model_event__["d" /* getEventData */])(sessionCreatedEvent);
    });
  });
};

let findSession = (window, options) => {
  return Promise.resolve()

  // First, check if this window is supposed to be opened with a workspace (New window with workspace pre-selected)
  .then(() => {
    // If this window is not being opened with a pre-selected workspace, move on
    if (!options.session || !options.session.workspace) {
      return;
    }

    // If this window is supposed to be opened with a workspace, just create the session
    // with that workspace and move on
    return __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceSessionController__["a" /* default */].
    getSessionFor(window.id, options.session.workspace).
    then(session => {
      // If the window is not supposed to have pre-selected state, move on
      if (!options.session.state) {
        return session;
      }

      // Otherwise, update the session's state with whatever is supplied
      return __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceSessionController__["a" /* default */].
      update({
        id: session.id,
        state: _extends({},
        session.state,
        options.session.state) }).


      then(sessionUpdatedEvent => {
        return Object(__WEBPACK_IMPORTED_MODULE_4__modules_model_event__["d" /* getEventData */])(sessionUpdatedEvent);
      });
    });
  })

  // First, check if this window is supposed to be opened with a defined session (restore flow)
  .then(session => {
    // If we've already found a session, move on
    if (session) {
      return session;
    }

    // If this window is not being restored, move on
    if (!options.session || !window.activeSession) {
      return;
    }

    return __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceSessionController__["a" /* default */].
    get({ id: window.activeSession }).
    then(session => {
      if (!session || session.window !== window.id) {
        return;
      }

      return session;
    });
  })

  // If the window's activeSession exists, continue, or else try finding another suitable session
  .then(session => {
    if (session) {
      return session;
    }

    // Active session on this window does not exist, trying to find some other session on this window
    return __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceSessionController__["a" /* default */].
    getAll({ window: pm.window.id }).
    then(allSessions => {
      if (allSessions && allSessions[0]) {
        return allSessions[0];
      }

      // There are no sessions on this window, creating one
      return getDefaultSession(window);
    });
  })

  // Verify if the session being restored points to a valid workspace.
  .then(session => {
    return __WEBPACK_IMPORTED_MODULE_2__modules_controllers_WorkspaceController__["a" /* default */].
    get({ id: session.workspace }).
    then(workspace => {
      // If the workspace being pointed to does not exist, delete this session and restart the session boot
      if (workspace) {
        return session;
      }

      return getDefaultSession(window);
    });
  });
};

let clearOrphanSessions = (activeWindowId, { activeSessionId }) => {
  // Find all sessions, if for a session, the window / workspace does not exist, delete the session
  return __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceSessionController__["a" /* default */].
  getAll().
  then(allSessions => {
    // First, take the currently active session out of the picture.
    // Don't want to ever delete that
    _.remove(allSessions, session => session.id === activeSessionId);
    return allSessions;
  }).
  then(allSessions => {
    // Remove all sessions with an invalid window ID
    return Promise.all(
    _.map(allSessions, session => {
      return __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default.a.get({ id: session.window }).
      then(window => {
        if (window) {
          return session;
        }

        return __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceSessionController__["a" /* default */].delete({ id: session.id }).
        then(sessionDeletedEvent => {
          return;
        }).
        catch(e => {
          console.error(`Failed to clear orphan sessions on window ${session.window}`, e);
          return session;
        });
      });
    }));

  }).
  then(sessions => {
    // Clean the result, remove all undefined values from the previous loop
    return _.compact(sessions);
  }).
  then(allSessions => {
    // Now, remove all sessions on the currentWindow, with an invalid workspace
    return Promise.all(
    _.map(allSessions, session => {
      return __WEBPACK_IMPORTED_MODULE_2__modules_controllers_WorkspaceController__["a" /* default */].get({ id: session.workspace }).
      then(workspace => {
        if (session.window === activeWindowId && !workspace) {
          return __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceSessionController__["a" /* default */].delete({ id: session.id }).
          catch(e => {
            console.error(`Failed to clear orphan sessions with workspace ${session.workspace}`, e);
          });
        }
      });
    }));

  });
};

// IMPORTANT: DO NOT REORDER PROMISES HERE
// 1. Getting launch params from window
// 2. Get / create a window
// 3. Find a suitable session (find / create). Session create should always be after window create, otherwise this might be pruned
// 4. Update the new window with the new session's ID
// 5. Complete the boot process
// 6. Start pruning orphan sessions
let bootSession = cb => {
  return __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default.a.
  getLaunchParams()

  // First, initialize the WindowController
  .then(windowParams => {
    return __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default.a.bootstrap(...windowParams);
  })

  // Find the window being restored / opened
  .then(windowParams => {
    let window = windowParams[0],
    options = windowParams[1];

    return __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default.a.
    getCurrentWindow().
    then(currentWindow => {
      if (currentWindow) {
        return currentWindow;
      }

      // Worst case scenario
      return Promise.reject(new Error('Window to open does not exist ' + pm.window.id));
    })

    // Try to find the session that the window opened wants to open
    .then(() => findSession(...windowParams))

    // Update the Window table to indicate the new session is the active session
    .then(session => {
      return __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default.a.update({
        id: window.id,
        activeSession: session.id });

    })

    // Complete the boot process
    .then(() => {
      cb && cb(null);
    }).

    catch(e => {
      console.error('Error booting session', e);
      cb && cb(e);
    })

    // Prune any sessions that are invalid
    .then(() => clearOrphanSessions()).
    catch(() => {});
  });
};


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_sync_SyncManagerProxy__ = __webpack_require__(395);


/**
                                                                    *
                                                                    */
function bootSyncProxy(cb) {
  _.assign(window.pm, { syncManager: new __WEBPACK_IMPORTED_MODULE_0__models_sync_SyncManagerProxy__["a" /* default */]() });
  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootSyncProxy);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model_event__ = __webpack_require__(3);


/**
                                                                                                         * Handles the socket, and is the interface for sending and receiving changesets
                                                                                                         *
                                                                                                         * @class SyncManager
                                                                                                         */
var SyncManagerProxy = Backbone.Model.extend({
  defaults: function () {
    return {
      socketConnected: false,
      loggedIn: false,
      currentSyncStatus: 'disabledSync',
      nextReconnectTime: null,
      timeTillReconnect: null };

  },

  sendEventToSyncShared: function (event) {
    this.syncInternalChannel.publish(event);
  },

  requestInitialHydrateFromSyncShared: function () {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])('hydrate', 'currentSyncStatus'));
  },

  attachInternalChannelSubscription: function () {
    this.syncManagerInternalDispose = this.syncInternalChannel.subscribe(event => {
      let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["g" /* getEventNamespace */])(event),
      eventName = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["f" /* getEventName */])(event),
      eventData = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["d" /* getEventData */])(event);

      if (eventNamespace === 'currentSyncStatus' && eventName === 'updated') {
        this.set('currentSyncStatus', eventData.currentSyncStatus);
        return;
      }

      if (eventNamespace === 'timeTillReconnect' && eventName === 'updated') {
        this.set('timeTillReconnect', eventData.timeTillReconnect);
        return;
      }

      if (eventNamespace === 'loggedIn' && eventName === 'updated') {
        this.set('loggedIn', eventData.loggedIn);
        return;
      }

      if (eventNamespace === 'socketConnected' && eventName === 'updated') {
        this.set('socketConnected', eventData.socketConnected);
        return;
      }

      if (eventNamespace === 'conflicts' && eventName === 'show') {
        this.showConflicts(eventData.conflicts);
        return;
      }

      if (eventNamespace === 'issue' && eventName === 'show') {
        this.showSyncIssue(eventData.issue);
        return;
      }
    });
  },

  initialize: function () {
    this.syncInternalChannel = pm.eventBus.channel('sync-manager-internal');
    this.attachInternalChannelSubscription();
    this.requestInitialHydrateFromSyncShared();
  },

  showConflicts: function (conflicts) {
    this.trigger('showConflicts', conflicts);
  },

  showSyncIssue: function (issue) {
    pm.mediator.trigger('showSyncIssue', issue);
  },

  syncIconClick: function () {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])('syncIconClicked', 'command'));
  },

  restoreCollection: function (restoreTarget, cb) {
    if (_.includes(['makeNotConnected', 'disabledSync'], this.get('currentSyncStatus'))) {
      pm.alerts.error('You need to be connected to Postman Sync to restore a collection.');
      _.isFunction(cb) && cb(new Error('No sync connection to restore collection'));
      return;
    }
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])('restoreCollection', 'command', { restoreTarget: restoreTarget }));
    cb();
  },

  conflictsResolved: function (resolution) {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])('conflictsResolved', 'command', { resolution: resolution }));
  },

  forceSync: function () {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])('forceSync', 'command'));
  },

  forceSyncCollectionAndContinue: function (id) {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])('forceSyncCollectionAndContinue', 'command', { collection: id }));
  },

  forceConnect: function () {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])('forceConnect', 'command'));
  },

  fetchPendingConflicts: function () {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])('fetchPendingConflicts', 'command'));
  } });


/* harmony default export */ __webpack_exports__["a"] = (SyncManagerProxy);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_backbone__);



const MIN_ZOOM_LEVEL = -10,
MAX_ZOOM_LEVEL = 10;

var UIZoom = __WEBPACK_IMPORTED_MODULE_1_backbone___default.a.Model.extend({
  initialize: function () {
    this._loadZoomLevel();
    this.applyCurrentZoom();
  },

  increase: function () {
    let nextZoomLevel = this.currentZoomLevel + 1;
    this._validateZoomLevel(nextZoomLevel) && this._setZoomLevel(nextZoomLevel);
    this.trigger('change');
  },

  decrease: function () {
    let nextZoomLevel = this.currentZoomLevel - 1;
    this._validateZoomLevel(nextZoomLevel) && this._setZoomLevel(nextZoomLevel);
    this.trigger('change');
  },

  reset: function () {
    this._setZoomLevel(0);
    this.trigger('change');
  },

  getCurrentScaleFactor: function () {
    return 1 + this.currentZoomLevel * 0.05;
  },

  applyCurrentZoom: function () {
    __WEBPACK_IMPORTED_MODULE_0_electron__["webFrame"].setZoomFactor(this.getCurrentScaleFactor());
  },

  _loadZoomLevel: function () {
    let zoomLevel = pm.settings.getSetting('uiZoom') || 0;
    this.currentZoomLevel = zoomLevel;
  },

  _setZoomLevel: function (zoomLevel) {
    this.currentZoomLevel = zoomLevel;
    this.applyCurrentZoom();
    this._saveZoomLevel(this.currentZoomLevel);
  },

  _saveZoomLevel: function (zoomLevel) {
    pm.settings.setSetting('uiZoom', zoomLevel);
  },

  _validateZoomLevel: function (zoomLevel) {
    if (zoomLevel > MAX_ZOOM_LEVEL || zoomLevel < MIN_ZOOM_LEVEL) {
      return false;
    }

    return true;
  } });


/* harmony default export */ __webpack_exports__["a"] = (UIZoom);

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyListManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_postman_collection__);
let

ProxyListManager = class ProxyListManager {
  constructor() {
    var globalProxies = this.getFromDB();
    _.isEmpty(globalProxies) && (globalProxies = [{ disabled: true }]);

    this.globalProxies = new __WEBPACK_IMPORTED_MODULE_0_postman_collection__["ProxyConfigList"]({}, globalProxies);
  }

  toJSON() {
    return { globalProxies: this.globalProxies.toJSON() };
  }};


_.assign(ProxyListManager.prototype, /** @lends ProxyListManager.prototype */{
  saveToDB: function () {
    pm.settings.setSetting('ProxyListManager', this.toJSON());
  },

  getFromDB: function () {
    var globalProxies = _.get(pm.settings.getSetting('ProxyListManager'), 'globalProxies');
    return globalProxies;
  },

  update: function (options) {
    _.has(options, 'globalProxies') && (this.globalProxies = options.globalProxies);
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {const Certificate = Backbone.Model.extend({
  defaults: function () {
    return {
      host: '',
      pemPath: '',
      keyPath: '',
      passphrase: null,
      _pemData: null,
      _keyData: null };

  },

  resolve: function (cb) {
    if (this.get('_pemData') && this.get('_keyData')) {
      _.isFunction(cb) && cb();
      return;
    }

    const fs = __webpack_require__(24);
    fs.readFile(this.get('pemPath'), (err, _pemData) => {
      fs.readFile(this.get('keyPath'), (err, _keyData) => {
        this.set({
          '_pemData': _pemData,
          '_keyData': _keyData },
        { silent: true });

        _.isFunction(cb) && cb();
      });
    });
  },

  toJSON: function () {
    return {
      host: this.get('host'),
      pemPath: this.get('pemPath'),
      keyPath: this.get('keyPath'),
      passphrase: this.get('passphrase') };

  } });



const CertificateManager = Backbone.Collection.extend({
  model: Certificate,

  initialize: function () {
    this.loadCertificates();
    this.getCertificateContents = this.getCertificateContents.bind(this);
  },

  loadCertificates: function () {
    let serialisedStore = pm.settings.getSetting('clientCertificates'),
    certificateStore = {};

    try {
      certificateStore = JSON.parse(serialisedStore);
      let certificates = _.get(certificateStore, 'certificates', []);
      let sanitizedCertificates = _.map(certificates, certificate => {
        let sanitizedHost = certificate.host.
        replace(/.*?:\/\//g, '') // strip protocol
        .replace(/\?.*/, '') // strip query
        .replace(/\/.*/, '') // strip path
        .replace(/^\./, ''); // strip leading period

        return _.assign({}, certificate, { host: sanitizedHost });
      });
      this.add(sanitizedCertificates);
    }
    catch (e) {
      console.error('Error loading certificates', e);
    }
  },

  saveCertificates: function () {
    let certificateStore = { certificates: this.toJSON() };

    try {
      let serialisedStore = JSON.stringify(certificateStore);
      pm.settings.setSetting('clientCertificates', serialisedStore);
    }
    catch (e) {
      console.error('Error saving certificates', e);
    }
  },

  findCertificateByDomain: function (host) {
    return _.find(this.models, certificateModel => {
      return host === certificateModel.get('host');
    });
  },

  getCertificateContents: function (host, cb) {
    if (!host) {
      cb(new Error('Only supported in Electron'));
    }

    let certificate = this.findCertificateByDomain(host);

    if (!certificate) {
      cb(new Error('No Certificate found for host:' + host));
      return;
    }

    certificate.resolve(err => {
      if (err) {
        _.isFunction(cb) && cb(err);
        return;
      }

      _.isFunction(cb) && cb(null, {
        host: host,
        pem: certificate.get('_pemData'),
        key: certificate.get('_keyData'),
        passphrase: certificate.get('passphrase'),
        pemPath: certificate.get('pemPath'),
        keyPath: certificate.get('keyPath') });

    });
  },

  addCertificate(host, pemPath, keyPath, passphrase) {
    if (!host) {
      console.error('Error adding certificate', arguments);
      return;
    }

    let certificate = this.findCertificateByDomain(host);

    if (certificate) {
      this.updateCertificate(host, pemPath, keyPath, passphrase);
    } else
    {
      this.add({
        host: host,
        pemPath: pemPath,
        keyPath: keyPath,
        passphrase: passphrase });

    }

    this.saveCertificates();
    return true;
  },

  updateCertificate(host, pemPath, keyPath, passphrase) {
    let certificate = this.findCertificateByDomain(host);

    if (!certificate) {
      return false;
    }

    certificate.set({
      pemPath: pemPath,
      keyPath: keyPath,
      passphrase: passphrase });


    certificate.resolve();
    this.saveCertificates();

    return true;
  },

  removeCertificate(host) {
    let certificate = this.findCertificateByDomain(host);

    if (!certificate) {
      return false;
    }

    this.remove(certificate);

    this.saveCertificates();

    return true;
  } });


/* harmony default export */ __webpack_exports__["a"] = (CertificateManager);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CharacterMetadata
 * @format
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(239),
    Map = _require.Map,
    OrderedSet = _require.OrderedSet,
    Record = _require.Record;

// Immutable.map is typed such that the value for every key in the map
// must be the same type


var EMPTY_SET = OrderedSet();

var defaultRecord = {
  style: EMPTY_SET,
  entity: null
};

var CharacterMetadataRecord = Record(defaultRecord);

var CharacterMetadata = function (_CharacterMetadataRec) {
  _inherits(CharacterMetadata, _CharacterMetadataRec);

  function CharacterMetadata() {
    _classCallCheck(this, CharacterMetadata);

    return _possibleConstructorReturn(this, _CharacterMetadataRec.apply(this, arguments));
  }

  CharacterMetadata.prototype.getStyle = function getStyle() {
    return this.get('style');
  };

  CharacterMetadata.prototype.getEntity = function getEntity() {
    return this.get('entity');
  };

  CharacterMetadata.prototype.hasStyle = function hasStyle(style) {
    return this.getStyle().includes(style);
  };

  CharacterMetadata.applyStyle = function applyStyle(record, style) {
    var withStyle = record.set('style', record.getStyle().add(style));
    return CharacterMetadata.create(withStyle);
  };

  CharacterMetadata.removeStyle = function removeStyle(record, style) {
    var withoutStyle = record.set('style', record.getStyle().remove(style));
    return CharacterMetadata.create(withoutStyle);
  };

  CharacterMetadata.applyEntity = function applyEntity(record, entityKey) {
    var withEntity = record.getEntity() === entityKey ? record : record.set('entity', entityKey);
    return CharacterMetadata.create(withEntity);
  };

  /**
   * Use this function instead of the `CharacterMetadata` constructor.
   * Since most content generally uses only a very small number of
   * style/entity permutations, we can reuse these objects as often as
   * possible.
   */


  CharacterMetadata.create = function create(config) {
    if (!config) {
      return EMPTY;
    }

    var defaultConfig = {
      style: EMPTY_SET,
      entity: null
    };

    // Fill in unspecified properties, if necessary.
    var configMap = Map(defaultConfig).merge(config);

    var existing = pool.get(configMap);
    if (existing) {
      return existing;
    }

    var newCharacter = new CharacterMetadata(configMap);
    pool = pool.set(configMap, newCharacter);
    return newCharacter;
  };

  return CharacterMetadata;
}(CharacterMetadataRecord);

var EMPTY = new CharacterMetadata();
var pool = Map([[Map(defaultRecord), EMPTY]]);

CharacterMetadata.EMPTY = EMPTY;

module.exports = CharacterMetadata;

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findRangesImmutable
 * @format
 * 
 */



/**
 * Search through an array to find contiguous stretches of elements that
 * match a specified filter function.
 *
 * When ranges are found, execute a specified `found` function to supply
 * the values to the caller.
 */
function findRangesImmutable(haystack, areEqualFn, filterFn, foundFn) {
  if (!haystack.size) {
    return;
  }

  var cursor = 0;

  haystack.reduce(function (value, nextValue, nextIndex) {
    if (!areEqualFn(value, nextValue)) {
      if (filterFn(value)) {
        foundFn(cursor, nextIndex);
      }
      cursor = nextIndex;
    }
    return nextValue;
  });

  filterFn(haystack.last()) && foundFn(cursor, haystack.count());
}

module.exports = findRangesImmutable;

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SIGN_IN_REMINDER = 'sign-in-reminder';
/* harmony export (immutable) */ __webpack_exports__["a"] = SIGN_IN_REMINDER;


/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ContentBlockNode
 * @format
 * 
 *
 * This file is a fork of ContentBlock adding support for nesting references by
 * providing links to children, parent, prevSibling, and nextSibling.
 *
 * This is unstable and not part of the public API and should not be used by
 * production systems. This file may be update/removed without notice.
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharacterMetadata = __webpack_require__(446);
var Immutable = __webpack_require__(239);

var findRangesImmutable = __webpack_require__(454);

var List = Immutable.List,
    Map = Immutable.Map,
    OrderedSet = Immutable.OrderedSet,
    Record = Immutable.Record,
    Repeat = Immutable.Repeat;


var EMPTY_SET = OrderedSet();

var defaultRecord = {
  parent: null,
  characterList: List(),
  data: Map(),
  depth: 0,
  key: '',
  text: '',
  type: 'unstyled',
  children: List(),
  prevSibling: null,
  nextSibling: null
};

var haveEqualStyle = function haveEqualStyle(charA, charB) {
  return charA.getStyle() === charB.getStyle();
};

var haveEqualEntity = function haveEqualEntity(charA, charB) {
  return charA.getEntity() === charB.getEntity();
};

var decorateCharacterList = function decorateCharacterList(config) {
  if (!config) {
    return config;
  }

  var characterList = config.characterList,
      text = config.text;


  if (text && !characterList) {
    config.characterList = List(Repeat(CharacterMetadata.EMPTY, text.length));
  }

  return config;
};

var ContentBlockNode = function (_Record) {
  _inherits(ContentBlockNode, _Record);

  function ContentBlockNode() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRecord;

    _classCallCheck(this, ContentBlockNode);

    return _possibleConstructorReturn(this, _Record.call(this, decorateCharacterList(props)));
  }

  ContentBlockNode.prototype.getKey = function getKey() {
    return this.get('key');
  };

  ContentBlockNode.prototype.getType = function getType() {
    return this.get('type');
  };

  ContentBlockNode.prototype.getText = function getText() {
    return this.get('text');
  };

  ContentBlockNode.prototype.getCharacterList = function getCharacterList() {
    return this.get('characterList');
  };

  ContentBlockNode.prototype.getLength = function getLength() {
    return this.getText().length;
  };

  ContentBlockNode.prototype.getDepth = function getDepth() {
    return this.get('depth');
  };

  ContentBlockNode.prototype.getData = function getData() {
    return this.get('data');
  };

  ContentBlockNode.prototype.getInlineStyleAt = function getInlineStyleAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getStyle() : EMPTY_SET;
  };

  ContentBlockNode.prototype.getEntityAt = function getEntityAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getEntity() : null;
  };

  ContentBlockNode.prototype.getChildKeys = function getChildKeys() {
    return this.get('children');
  };

  ContentBlockNode.prototype.getParentKey = function getParentKey() {
    return this.get('parent');
  };

  ContentBlockNode.prototype.getPrevSiblingKey = function getPrevSiblingKey() {
    return this.get('prevSibling');
  };

  ContentBlockNode.prototype.getNextSiblingKey = function getNextSiblingKey() {
    return this.get('nextSibling');
  };

  ContentBlockNode.prototype.findStyleRanges = function findStyleRanges(filterFn, callback) {
    findRangesImmutable(this.getCharacterList(), haveEqualStyle, filterFn, callback);
  };

  ContentBlockNode.prototype.findEntityRanges = function findEntityRanges(filterFn, callback) {
    findRangesImmutable(this.getCharacterList(), haveEqualEntity, filterFn, callback);
  };

  return ContentBlockNode;
}(Record(defaultRecord));

module.exports = ContentBlockNode;

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule generateRandomKey
 * @format
 * 
 */



var seenKeys = {};
var MULTIPLIER = Math.pow(2, 24);

function generateRandomKey() {
  var key = void 0;
  while (key === undefined || seenKeys.hasOwnProperty(key) || !isNaN(+key)) {
    key = Math.floor(Math.random() * MULTIPLIER).toString(32);
  }
  seenKeys[key] = true;
  return key;
}

module.exports = generateRandomKey;

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* unused harmony export Response */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RequestBody__ = __webpack_require__(1165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_httpheaders__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ModelToSdkTransformer__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_SdkToModelTransformer__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_services_filesystem__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_postman_collection_transformer__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_postman_collection_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_postman_collection_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_RuntimeBridge__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_http_reasons__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_http_reasons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_http_reasons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_pipelines_user_action__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_services_HistoryService__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_ResolveVariableHelper__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_controllers_CollectionController__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_controllers_EnvironmentController__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_controllers_GlobalsController__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__utils_vkbeautify__ = __webpack_require__(668);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



















var sdk = __webpack_require__(49);

var AUTO_ADDED_HEADERS = [
'user-agent',
'accept-encoding',
'cookie',
'postman-token',
'content-type',
'cache-control',
'referer'];


const DEPRECATED_PROPS = [
'currentHelper',
'helperAttributes',
'tests',
'preRequestScript'];


/**
                      * Backbone model of a request
                      * @todo Incomplete
                      *
                      * @class Request
                      * @augments {Backbone.Model}
                      */

/**
                          * JSON representation of a single request
                          * @todo Documentation Incomplete
                          *
                          * @typedef {Object} Request~definition
                          *
                          * {UUID} collectionId         -
                          * {Object} data               -
                          * {String} dataMode           -
                          * {String} description        -
                          * {Object[]} headers          -
                          * {Object} headerData         -
                          * {UUID} id                   -
                          * {String} method             -
                          * {String} name               -
                          * {Object[]} pathVariableData -
                          * {Response[]} responses      -
                          * {Timestamp} time            -
                          * {String} url                -
                          * {Object[]} queryParams      -
                          */

/**
                              * JSON representation of a response
                              *
                              * @todo Documentation Incomplete
                              *
                              * @typedef {Object} {Response~definition}
                              */
var Request = Backbone.Model.extend( /** @lends Request.prototype */{
  defaults: function () {
    return {
      id: __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].guid(),
      url: '',
      pathVariableData: [],
      queryParams: [],
      systemQueryParams: [],
      name: '',
      description: '',
      bodyParams: {},
      systemHeaders: [],
      headerData: [],
      method: 'GET',
      dataMode: 'params',
      transformedUrl: '',
      isFromCollection: false,
      editorMode: 0,
      responses: [],
      body: new __WEBPACK_IMPORTED_MODULE_0__RequestBody__["a" /* default */](),
      response: new Response(),
      auth: null,
      data: null,
      events: [],
      testResults: null,
      testErrors: null,
      selectedHelper: null,
      write: true,
      lifecycle: 'idle' };

  },

  // Fixed
  initialize: function (args) {
    this.on('cancelRequest', this.onCancelRequest, this);

    if (!pm.hasRequestInitializedOnce) {
      pm.hasRequestInitializedOnce = true;
    }

    this.populateBody();
    this.mergeHeaderData();
    this.mergeQueryParamsData();
    this.unsetDeprecatedProps();
  },

  unsetDeprecatedProps() {
    _.forEach(DEPRECATED_PROPS, attribute => {this.unset(attribute, { silent: true });});
  },

  getVariablesMap() {
    let environmentValues = [],
    activeEnvironment = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore');
    if (activeEnvironment) {
      environmentValues = activeEnvironment.enabledValues;
    }
    let globals = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore').enabledValues;

    let variableMap = {};
    _.forEach(globals, global => {
      variableMap[global.key] = global.value;
    });
    _.forEach(environmentValues, environment => {
      variableMap[environment.key] = environment.value;
    });

    return variableMap;
  },

  mergeHeaderData: function () {
    this.set('headerData', this.getHeaderData());
  },

  mergeQueryParamsData: function () {
    this.set('queryParams', __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].getUrlVarsWithDescription(this.get('url'), this.get('queryParams')));
  },

  populateBody: function () {
    this.get('body').set({
      data: this.get('data'),
      dataMode: this.get('dataMode'),
      editorMode: this.get('editorMode') });

  },

  trimUrl: function () {
    var url = this.get('url');
    if (url) {
      var newUrl = _.trim(url);
      if (newUrl !== url) {
        this.set('url', newUrl);
      }
    }
  },

  onCancelRequest: function () {
    var aborter = this.get('runtimeRequestAborter'),
    runLinkID = this.get('runLinkID');

    if (runLinkID) {
      __WEBPACK_IMPORTED_MODULE_7__controllers_RuntimeBridge__["a" /* default */].stopRunRequest(runLinkID);
    }

    if (aborter) {
      pm.console.netErr(aborter.httpRequestId, 'cancelled');
    }

    this.cancel();
  },

  downloadResponseData: function (request) {
    let response = request.get('response'),
    action = request.get('action'),
    previewType = response.get('previewType'),
    type = '';

    if (action === 'download') {
      Object(__WEBPACK_IMPORTED_MODULE_5__models_services_filesystem__["c" /* saveAndOpenFileForResponse */])('response', response.get('sdkResponse'), type, function (error) {
        if (!error) {
          pm.alerts.success('Saved');
        }
      });
    }
  },

  packHeaders: function (headers) {
    let paramString = '';

    _.forEach(headers, header => {
      let prefix = '';

      if (header.enabled === false) {
        prefix = '//';
      }

      let key = header.name || header.key || '';
      if (key !== '') {
        paramString += prefix + key + ': ' + header.value + '\n';
      }
    });

    return paramString;
  },

  getHeaderValue: function (key) {
    var headers = this.get('headerData');

    key = key.toLowerCase();
    for (var i = 0, count = _.size(headers); i < count; i++) {
      if (!headers[i]) {
        continue;
      }
      var headerKey = headers[i].key ? headers[i].key.toLowerCase() : '';

      if (headerKey === key) {
        return headers[i].value;
      }
    }

    return false;
  },

  getHeaderData: function () {
    return _.map(this.get('headerData'), headerDatum => {
      return _.pick(headerDatum, ['key', 'value', 'description', 'enabled']);
    });
  },

  setUrlParamStringWithOptBlankValRemoval: function (params, silent, removeBlankParams, url) {
    if (!url) {
      url = this.get('url');
    }
    var paramArr = [];

    var existingUrlParams = {};
    if (url.split('?').length > 1) {
      _.each(url.split('?')[1].split('&'), function (param) {
        existingUrlParams[param.split('=')[0]] = param;
      });
    }
    var filteredParams = _.filter(params, param => {return param.enabled != false;});
    for (var i = 0; i < filteredParams.length; i++) {
      var p = filteredParams[i];
      if (p.key && p.key !== '' && typeof p.key === 'string') {
        p.key = p.key.replace(/&/g, '%26');
        if (!p.value) {
          p.value = '';
        }
        p.value = String(p.value);
        p.value = p.value.replace(/&/g, '%26');
        if (!removeBlankParams || p.value !== '') {
          var equals = p.value.length === 0 ? '' : '=';
          if (_.keys(existingUrlParams).indexOf(p.key) !== -1 && existingUrlParams[p.key].indexOf('=') !== -1) {
            equals = '=';
          }
          paramArr.push(p.key + equals + p.value);
        }
      }
    }

    var baseUrl = url.split('?')[0];
    if (paramArr.length > 0) {
      url = baseUrl + '?' + paramArr.join('&');
    } else
    {
      // Has key/val pair
      // removed this check due to GH-2136
      // if (url.indexOf("?") > 0 && url.indexOf("=") > 0) {
      url = baseUrl;

      // }
    }

    if (silent) {
      this.set('url', url, { 'silent': true });
    } else
    {
      this.set('url', url);
    }

  },

  setUrlParamString: function (params, silent, url) {
    this.setUrlParamStringWithOptBlankValRemoval(params, silent, false, url);
  },

  encodeUrl: function (url) {
    var quesLocation = url.indexOf('?');

    if (quesLocation > 0) {
      var urlVars = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].getUrlVars(url);
      var baseUrl = url.substring(0, quesLocation);
      var urlVarsCount = urlVars.length;
      var newUrl = baseUrl + '?';
      for (var i = 0; i < urlVarsCount; i++) {
        newUrl += urlVars[i].key + '=' + urlVars[i].value + '&';
      }

      newUrl = newUrl.substr(0, newUrl.length - 1);
      return url;
    } else
    {
      return url;
    }
  },

  getFinalRequestUrl: function (url) {
    var finalUrl;

    finalUrl = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].replaceURLPathVariables(url, this.get('pathVariableData'));
    finalUrl = this.encodeUrl(finalUrl);
    finalUrl = __WEBPACK_IMPORTED_MODULE_13__utils_ResolveVariableHelper__["a" /* default */].resolve(finalUrl, this.getVariablesMap());
    finalUrl = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].ensureProperUrl(finalUrl);

    return _.trim(finalUrl);
  },

  splitUrlIntoHostAndPath: function (url) {
    var path = '';
    var host;

    var parts = url.split('/');
    host = parts[2];
    var prefix = parts[0] + '/' + parts[1] + '/';
    var partsCount = parts.length;
    for (var i = 3; i < partsCount; i++) {
      path += '/' + parts[i];
    }

    var quesLocation = path.indexOf('?');
    var hasParams = quesLocation >= 0;

    if (hasParams) {
      parts = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].getUrlVars(path);
      var count = parts.length;
      var encodedPath = path.substr(0, quesLocation + 1);
      for (var j = 0; j < count; j++) {
        var value = parts[j].value;
        var key = parts[j].key;

        //				value = encodeURIComponent(value);
        //				key = encodeURIComponent(key);
        var equals = parts[j].equals ? '=' : '';
        encodedPath += key + equals + value + '&';
      }

      // only do this to remove the trailing '&' if params are present
      if (count > 0) {
        encodedPath = encodedPath.substr(0, encodedPath.length - 1);
      }

      path = encodedPath;
    }

    return {
      host: host,
      path: path,
      prefix: prefix };

  },

  getAsObject: function () {
    var body = this.get('body');
    var request = {
      name: this.get('name'),
      description: this.get('description'),
      url: this.get('url'),
      queryParams: this.get('queryParams'),
      pathVariableData: this.get('pathVariableData'),
      data: body.get('data'),
      events: this.get('events'),
      auth: this.get('auth'),
      headerData: this.getHeaderData(),
      dataMode: body.get('dataMode'),
      method: this.get('method'),
      isFromCollection: this.get('isFromCollection'),
      write: this.isWriteable(),
      version: 2 };


    if (request.isFromCollection) {
      request.id = this.get('id');
      request.collectionId = this.attributes.collectionId;
      request.collection = this.attributes.collectionId;
    }

    return request;
  },

  isWriteable: function () {
    if (!this.get('collectionId')) {
      return true;
    }

    let collectionId = this.get('collectionId'),
    collectionStore = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('CollectionStore').find(collectionId);
    if (!collectionStore) {
      return true;
    }

    return collectionStore.isEditable;
  },

  saveRequest: function (opts = {}) {
    this.trigger('beforeSave');
    var requestId = this.get('id');
    if (!requestId || this.isWriteable() === false || !this.get('collection')) {
      pm.mediator.trigger('showAddToCollectionModal', this, opts);
      return false;
    }

    if (requestId && !Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('RequestStore').find(requestId)) {
      console.warn('Request not found', requestId);
      pm.mediator.trigger('showAddToCollectionModal', this, opts);
      return false;
    }

    if (pm.tabManager && !opts.skipConflictModal) {
      const currentTabId = pm.tabManager.getCurrentTab().get('id');
      if (pm.tabManager.isTabRequestUpdated(requestId, currentTabId)) {
        pm.tabManager.trigger('showConflictTabModal', currentTabId, pm.tabManager.getUpdatedTabRequest(requestId));
        return false;
      }
    }

    var collectionRequest = {
      id: this.get('id'),
      headerData: this.getHeaderData(),
      url: this.get('url'),
      name: this.get('name'),
      collection: this.get('collection'),
      folder: this.get('folder'),
      queryParams: this.get('queryParams'),
      events: this.get('events'),
      pathVariableData: this.get('pathVariableData'),
      method: this.get('method'),
      data: this.get('body').get('data'),
      dataMode: this.get('body').get('dataMode'),
      version: this.get('version'),
      auth: this.get('auth') || null,
      time: new Date().getTime() };


    let updateRequestEvent = {
      name: 'update',
      namespace: 'request',
      data: _extends({}, collectionRequest) };


    Object(__WEBPACK_IMPORTED_MODULE_9__modules_pipelines_user_action__["a" /* default */])(updateRequestEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        console.error('Error in updating request', response.error);
        return;
      }
      this.trigger('saved');
    }).
    catch(err => {
      console.error('Error in pipeline while updating request', err);
    });

    return true;
  },


  cancel: function () {
    var response = this.get('response');
    response.clear();
    this.set('lifecycle', 'idle');
  },

  deleteSampleResponse: function (id) {
    let deleteResponseEvent = {
      name: 'delete',
      namespace: 'response',
      data: { id } };



    Object(__WEBPACK_IMPORTED_MODULE_9__modules_pipelines_user_action__["a" /* default */])(deleteResponseEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        console.error('Error in deleting response', response.error);
        return;
      }

      let responseList = _.clone(this.get('responses')) || [];
      let isFoundAtIndex = _.findIndex(responseList, ['id', id]);
      isFoundAtIndex >= 0 && responseList.splice(isFoundAtIndex, 1);
      this.set('responses', responseList);

      // @todo find a way to update the request in tab
      // One way is take it from store directly.
    }).
    catch(err => {
      console.error('Error in pipeline for deleting response', err);
    });
  },

  loadSampleResponseById: function (responseId) {
    var responses = this.get('responses');
    var response = _.find(responses, ['id', responseId]);
    if (!response) {
      return;
    }
    this.loadSampleResponse(response);
  },

  loadSampleResponse: async function (response) {
    pm.tabManager.getCurrentTab().setOriginalRequestState();
    var responseRequest = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].getExampleRequestObject(response);

    if (_.isEmpty(responseRequest)) {
      responseRequest = await __WEBPACK_IMPORTED_MODULE_14__modules_controllers_CollectionController__["a" /* default */].getRequest({ id: this.get('id') });
    }
    if (_.isEmpty(responseRequest)) {
      pm.alerts.error('Something went wrong while opening this example response');
      return;
    }
    this.set('url', responseRequest.url);
    this.set('method', responseRequest.method);

    // This should trigger change events in Backbone
    this.set('data', responseRequest.data);
    this.set('dataMode', responseRequest.dataMode);
    this.set('headerData', responseRequest.headerData);
    this.set('queryParams', __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].getUrlVarsWithDescription(this.get('url'), responseRequest.queryParams));
    this.set('pathVariableData', responseRequest.pathVariableData);
    var body = this.get('body');

    if (__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].isMethodWithBody(responseRequest.method)) {
      body.set('dataMode', responseRequest.dataMode);
      body.loadData(responseRequest.dataMode, responseRequest.data, true);
    }

    this.trigger('loadRequest', this);
    var r = this.get('response');
    r.loadSampleResponse(this, response);
    pm.tabManager.getCurrentTab().setInitialExample(this, r);
    this.set('lifecycle', 'completed');
    pm.mediator.trigger('lifecycle:completed');
    this.set('response', r);
    this.trigger('responseChanged');
  },

  loadRequestInExample: function () {
    pm.tabManager.getCurrentTab().setOriginalRequestState();
    var r = this.get('response');
    pm.tabManager.getCurrentTab().setInitialExample(this, r);
    this.set('lifecycle', 'completed');
    pm.mediator.trigger('lifecycle:completed');
    this.set('response', r);
  },


  loadRequest: function (request, isFromCollection, isFromSample, isFromTestRunner, isFromTab) {

    if (pm.tabManager) {
      pm.tabManager.disableDirtyCheck();
    }

    var body = this.get('body');
    var response = this.get('response');

    this.set('id', request.id);
    this.set('write', request.write);
    this.set('editorMode', 0);
    this.set('url', request.url);
    this.set('queryParams', request.queryParams);
    this.set('testResults', request.testResults);
    this.set('testErrors', request.testErrors);
    this.set('pathVariableData', request.pathVariableData);
    this.set('headerData', request.headerData);

    this.set('isFromCollection', isFromCollection);
    this.set('isFromSample', isFromSample);

    if (!request.method) {
      request.method = 'get';
    }
    this.set('method', request.method.toUpperCase());

    /* Set defaults for unsaved requests*/
    this.set('collectionId', null);
    this.set('responses', []);

    if (isFromCollection) {
      this.set('collectionId', request.collectionId);

      if (typeof request.name !== 'undefined') {
        this.set('name', request.name);
      } else
      {
        this.set('name', '');
      }

      if (typeof request.description !== 'undefined') {
        this.set('description', request.description);
      } else
      {
        this.set('description', '');
      }


      if ('responses' in request) {
        this.set('responses', request.responses);
        if (request.responses) {
        } else
        {
          this.set('responses', []);
        }
      } else
      {
        this.set('responses', []);
      }
    } else
    if (isFromSample) {
    } else
    {
      this.set('name', '');
    }

    if (!isFromTab || pm.testRunner) {
      this.set('testResults', null);
    }

    response.clear();

    if (__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].isMethodWithBody(this.get('method'))) {
      body.set('dataMode', request.dataMode);

      var dataAsArray = true;
      if (typeof request.data === 'string') {
        dataAsArray = false;
      }
      if (request.dataMode === 'raw') {
        if (request.hasOwnProperty('rawModeData') && _.isArray(request.data)) {
          request.data = request.rawModeData; // to accept older collections with rawModeData :s
        }
      }
      body.loadData(request.dataMode, request.data, dataAsArray);
    } else
    {
      if ('version' in request) {
        if (request.version === 2) {
          body.loadData('raw', '', true);
        } else
        {
          body.loadData('raw', '', false);
        }
      } else
      {
        body.loadData('raw', '', false);
      }
      body.set('dataMode', 'params');
    }

    response.trigger('clearResponse');
    this.trigger('loadRequest', this);
  },

  loadRequestFromLink: function (link) {
    let request = new Request();
    request.set('url', link);
    request.set('method', 'GET');
    request.set('isFromCollection', false);
    if (pm.settings.getSetting('retainLinkHeaders') === true) {
      let headers = this.get('headerData');
      if (headers) {
        request.set('headerData', headers);
      }
    }

    pm.mediator.trigger('loadRequestInNewTab', request.toJSON());
  },

  prepareForSending: function () {
    let response = this.get('response');
    response && response.set('__id', __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].guid());
  },

  clearSystemParams: function () {
    this.set({
      systemHeaders: [],
      systemQueryParams: [] });


    this.get('body') && this.get('body').set('systemBodyParams', {});
  },

  setHeaderInArray: function (headers, key, value) {
    var contentTypeHeaderKey = key;
    var pos = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].findPositionCaseInsensitive(headers, 'key', contentTypeHeaderKey);

    if (value === 'text') {
      if (pos >= 0) {
        headers.splice(pos, 1);
      }
    } else
    if (pos >= 0) {
      headers[pos] = {
        key: contentTypeHeaderKey,
        type: 'text',
        name: contentTypeHeaderKey,
        value: value };

    } else
    {
      headers.push({
        key: contentTypeHeaderKey,
        name: contentTypeHeaderKey,
        value: value });

    }

    return headers;
  },

  setHeader: function (key, value) {
    var headers = _.clone(this.get('headerData')),
    originalDescription = '';

    if (!(headers instanceof Array)) {
      headers = [];
    }

    var contentTypeHeaderKey = key;
    var pos = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].findPositionCaseInsensitive(headers, 'key', contentTypeHeaderKey);

    if (pos >= 0) {
      originalDescription = headers[pos].description || '';
    }

    if (value === 'text') {
      if (pos >= 0) {
        headers.splice(pos, 1);
      }
    } else
    if (pos >= 0) {
      headers[pos] = {
        key: contentTypeHeaderKey,
        description: originalDescription,
        type: 'text',
        name: contentTypeHeaderKey,
        value: value };

    } else
    {
      headers.push({
        key: contentTypeHeaderKey,
        name: contentTypeHeaderKey,
        value: value });

    }

    this.set({ 'headerData': headers });
  },

  setSystemHeader: function (key, value) {
    this.set('systemHeaders', [
    ...this.get('systemHeaders'),
    {
      key: key,
      type: 'text',
      name: key,
      value: value }]);


  },

  getXhrHeaders: function () {
    var body = this.get('body');

    var systemHeaders = _.clone(this.get('systemHeaders')) || [],
    headers = _.clone(this.get('headerData')) || [];

    // include system headers
    headers = _.concat(headers, systemHeaders);

    if (pm.settings.getSetting('sendNoCacheHeader') === true) {
      this.setHeaderInArray(headers, 'Cache-Control', 'no-cache');
    }

    if (pm.settings.getSetting('sendPostmanTokenHeader') === true) {
      this.setHeaderInArray(headers, 'Postman-Token', __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].guid());
    }

    if (__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].isMethodWithBody(this.get('method'))) {
      if (body.get('dataMode') === 'urlencoded') {
        // only add the content-type header if it doesn't already exist
        if (_.map(_.map(headers, 'name'), function (name) {
          if (name) {
            return name.toLowerCase();
          }
        }).indexOf('content-type') === -1) {
          this.setHeaderInArray(headers, 'Content-Type', 'application/x-www-form-urlencoded');
        }
      }
    }

    var i;
    var finalHeaders = [];
    for (i = 0; i < headers.length; i++) {
      var header = _.clone(headers[i]);
      if (!_.isEmpty(header.value) && !_.isEmpty(header.key) && header.enabled !== false) {
        header.key = __WEBPACK_IMPORTED_MODULE_13__utils_ResolveVariableHelper__["a" /* default */].resolve(header.key, this.getVariablesMap());
        header.value = __WEBPACK_IMPORTED_MODULE_13__utils_ResolveVariableHelper__["a" /* default */].resolve(header.value, this.getVariablesMap());
        finalHeaders.push(header);
      }
    }

    this.set('transformedHeaders', finalHeaders);
    return finalHeaders;
  },

  getRequestBodyForCurl: function () {
    var body = this.get('body');
    return body.getBodyForCurl();
  },

  getURLForSnippet: function () {
    // unparse the URL
    let url = new sdk.Url(this.get('url'));

    // add system query parameters if present
    url.addQueryParams(this.get('systemQueryParams'));

    // compress url, resolve path variables and environment variables
    return this.getFinalRequestUrl(url.toString());
  },

  getRequestAfterResolutionForSnippet: function () {
    var ret = {},
    resolvedData = null;
    var oldVal = this.getAsObject();

    // getFinalRequestUrl replaces URL params
    ret.url = this.getURLForSnippet();
    ret.headers = this.packHeaders(this.getXhrHeaders());

    // escape double quotes for certain lingos
    ret.headers = typeof ret.headers === 'string' ? ret.headers.replace(/\"/g, '\\\"') : ret.headers;

    try {
      let serializableData;
      if (oldVal.dataMode === 'raw' || oldVal.dataMode === 'binary') {
        serializableData = oldVal.data;
        resolvedData = __WEBPACK_IMPORTED_MODULE_13__utils_ResolveVariableHelper__["a" /* default */].resolve(serializableData, this.getVariablesMap());
      } else
      {
        serializableData = _.map(oldVal.data, datum => {
          if (datum.type === 'file' && datum.value && !_.isEmpty(datum.value)) {
            return _extends({},
            datum, {
              value: _.get(datum, 'value[0].path', _.get(datum, 'value[0].name', '')) });

          } else
          {
            return datum;
          }
        });
        resolvedData = __WEBPACK_IMPORTED_MODULE_13__utils_ResolveVariableHelper__["a" /* default */].resolve(JSON.stringify(serializableData), this.getVariablesMap());
        resolvedData = JSON.parse(resolvedData);
      }
      !_.isEmpty(resolvedData) && (ret.data = resolvedData);
    }
    catch (err) {
      console.log('Error in processing request body', err);
    }
    ret.method = oldVal.method;
    ret.dataMode = oldVal.dataMode;
    return ret;
  },

  /**
      * Extracts body params added by runtime. Right now this only looks for params that could be added by Auth.
      *
      * @param PostmanRequest sdk request object
      *
      * @returns {Object[]}
      */
  extractSystemBodyParams: function (request) {
    // bail out
    if (!request || !_.includes(['formdata', 'urlencoded'], _.get(request, 'body.mode'))) {return {};}

    let bodyType = _.get(request, 'body.mode'),
    requestBodyParams = request.body.toJSON()[bodyType],
    systemBodyParams,
    sentParams;

    // this auth does not add any body params
    if (_.isEmpty(requestBodyParams)) {return {};}

    // filter params that were added by Auth
    return { [bodyType]: _.filter(requestBodyParams, requestBodyParam => {return Boolean(requestBodyParam.system);}) };
  },

  /**
      * getRequestAsV1
      * used to get the V1 format request object
      * http://schema.getpostman.com/json/collection/v1.0.0/docs/index.html
      * @param {Object} requestJSON the request json of the request model
      * @param {RequestModel} requestModel the request model from which the data needs to fetched
      * @returns {Object} Request v1 format object.
      */

  getRequestAsV1: function (requestModel) {
    if (!requestModel) {
      return {};
    }

    // Picking only the things needs for a request to be sent, since the app model layer has lots of stale and unwanted data
    let requestJSON = requestModel.toJSON(),
    requestV1 = _.pick(requestJSON, [
    'id',
    'name',
    'url',
    'method',
    'pathVariableData',
    'description',
    'events',
    'auth',
    'headers',
    'collectionId',
    'folder']);


    // Request data and headers needs to be sanitized before providing to the transformer
    requestModel.get('body') && __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].isMethodWithBody(requestV1.method) &&
    _.assign(requestV1, __WEBPACK_IMPORTED_MODULE_3__utils_ModelToSdkTransformer__["a" /* default */].getRequestData(requestModel.get('body').get('dataMode'), requestModel.get('body')));

    return requestV1;
  },

  send: async function (action) {
    if (_.isEmpty(this.get('url'))) {
      pm.alerts.error('Empty Request URL', { dedupeId: 'empty-request-url' });
      return;
    }

    this.set('action', action);

    // Some stuff that needs to be triggered.
    this.trigger('beforeSend');
    pm.mediator.trigger('request:send');

    var request = this,
    defaultHeaders = [],
    collection = null,
    requestJSON = request.toJSON(),
    collectionId = requestJSON.collectionId,
    collectionV1Model = null,
    collectionV1;

    if (request.get('isFromCollection')) {
      let dbRequest = await __WEBPACK_IMPORTED_MODULE_14__modules_controllers_CollectionController__["a" /* default */].getRequest({ id: request.id });

      // It is not a collection request, might be deleted or isFromCollection flag is wrongly set.
      if (!dbRequest) {
        request.set('isFromCollection', false);
      } else
      {
        // Always get the collection from the dbRequest.collection,
        // Since, the request may be moved out of a collection.
        collectionV1 = await __WEBPACK_IMPORTED_MODULE_14__modules_controllers_CollectionController__["a" /* default */].getCollection({ id: dbRequest.collection }, { populate: ['folders'] });
      }
    }

    // request might say it is from a collection, but the collection may not exit
    // collection may be deleted after request was opened in a tab
    if (collectionV1) {
      let requestToBeSent = this.getRequestAsV1(request);

      // Adding additional headers
      requestToBeSent.headers = __WEBPACK_IMPORTED_MODULE_3__utils_ModelToSdkTransformer__["a" /* default */].getHeaders(request, true);

      /*
                                                                                  *  We strip off all the requests and provide only the request that needs to sent in the collection
                                                                                  *  By this way we are ensuring runtime, that we want to run only ONE REQUEST in the builder.
                                                                                  */

      let minifiedCollection = _.assign({}, collectionV1, { requests: [requestToBeSent] });

      // @todo Remove the disabled variables, needs to be handled in runtime #RUNTIME-450
      // There is a case where the folders having an undefined value in its array. Hence we are compacting and sending out.
      _.assign(minifiedCollection, {
        variables: __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].getEnabledValues(minifiedCollection.variables),
        folders: _.compact(minifiedCollection.folders) });


      let collectionV2 = __WEBPACK_IMPORTED_MODULE_6_postman_collection_transformer___default.a.convert(
      minifiedCollection,
      {
        inputVersion: '1.0.0',
        outputVersion: '2.1.0',
        retainIds: true });


      collection = new sdk.Collection(collectionV2);
    } else
    {
      let item = {
        id: this.get('id'),
        name: this.get('name'),
        event: this.get('events'),
        request: __WEBPACK_IMPORTED_MODULE_3__utils_ModelToSdkTransformer__["a" /* default */].getRequest(request, { addDefaultHeaders: true }) };

      collection = new sdk.Collection();
      collection.items.add(item);
    }

    request.set({
      lifecycle: 'executingScripts',
      testErrors: null,
      testResults: null });


    let store = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore'),
    globalsStore = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore'),
    activeEnvironmentId = store && store.id,
    activeWorkspaceId = globalsStore && globalsStore.workspace,
    environment = activeEnvironmentId && (await __WEBPACK_IMPORTED_MODULE_15__modules_controllers_EnvironmentController__["a" /* default */].get({ id: activeEnvironmentId })),
    globals = activeWorkspaceId && (await __WEBPACK_IMPORTED_MODULE_16__modules_controllers_GlobalsController__["a" /* default */].get({ workspace: activeWorkspaceId }));

    environment = environment ? _.reject(environment.values, { enabled: false }) : [];
    globals = globals ? _.reject(globals.values, { enabled: false }) : [];

    this.prepareForSending();
    const showExceptionAlert = _.once(function () {
      pm.alerts.error('Something went wrong while running your scripts. Check Postman Console for more info.');
    });

    let runnerOptions = {
      run: {
        timeout: {
          global: 0, // infinity
          request: parseInt(pm.settings.getSetting('xhrTimeout')) || 0,

          // @todo: expose a setting to configure script timeout
          script: 0 // infinity
        },
        requester: {
          strictSSL: pm.settings.getSetting('SSLCertVerify'),
          followRedirects: pm.settings.getSetting('interceptorRedirect') } },


      host: {
        requires: ['lodash', 'crypto-all', 'tv4', 'xml2js', 'atob', 'btoa'],
        requirePath: '/js/libs/' // this is only used for the Browser sandbox. Ignored in case of Node sandbox.
      } };


    let runOptions = {
      environment: { values: environment },
      globals: { values: globals },
      data: {},
      stopOnError: true,
      iterationCount: 1,
      disableSNR: true,
      useSystemProxy: pm.settings.getSetting('useSystemProxy'),
      proxies: pm.proxyListManager.globalProxies.toJSON() };


    let runMetaData = {
      certificates: __WEBPACK_IMPORTED_MODULE_3__utils_ModelToSdkTransformer__["a" /* default */].getClientSslCerts(pm.certificateManager),
      cookiePartitionId: __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].getCookiePartition() };


    let waitingForCookies = false;

    // @todo: get current workspace from SessionController
    let currentWorkspace = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace;

    let runCallbacks = {
      console: pm.console.log.bind(pm.console),
      start: function (err) {
        // This place is too late to update the UI
        // request.set('lifecycle', 'executingScripts');
        // request.set('testErrors', null);
        // request.set('testResults', null);
      },

      io: function (err, cursor, trace, response, request) {
        let consolePayload = {},
        requestJSON;

        if (trace.type !== 'http' || !request) {
          return;
        }

        requestJSON = request.toJSON();

        consolePayload.request = {
          url: _.invoke(request, 'url.toString'),
          method: requestJSON.method,
          headers: _.invoke(request, 'headers.toObject'),
          body: requestJSON.body,
          certificate: requestJSON.certificate,
          proxy: requestJSON.proxy };


        if (response) {
          consolePayload.response = {
            responseTime: response.responseTime,
            code: response.code,
            headers: _.invoke(response, 'headers.toObject'),
            body: response.size().body / 1024 > 1024 ? 'Responses larger than 1MB are not shown' : response.text() };

        }

        if (err) {
          pm.console.netErr(cursor.httpRequestId, err.message, consolePayload);
        } else
        {
          pm.console.net(cursor.httpRequestId, consolePayload);
        }
      },

      exception: function (cursor, exception) {
        // This is a separate function so that multiple errors do not stack, and only once alert is shown per request.
        showExceptionAlert();
        pm.console.error('exception', { message: `${exception.name} | ${exception.message}` });
        console.warn(`Error running scripts: ${exception.name} | ${exception.message}`, exception);
      },

      beforePrerequest: function () {
        request.set('lifecycle', 'executingScripts');
        request.set('testResults', []);
      },
      prerequest: function (err, cursor, prResults, item) {
        if (!(_.isArray(prResults) && prResults.length)) {
          return;
        }

        var scriptError,
        { error: errorObj } = _.find(prResults, prResult => prResult.error) || {};
        if (scriptError = err || errorObj) {
          request.trigger('prscriptError', scriptError.name + ': ' + scriptError.message);
          request.set('lifecycle', 'PRScriptError');

          return;
        }

        let result = _.last(prResults).result;

        !_.isEmpty(activeEnvironmentId) && __WEBPACK_IMPORTED_MODULE_15__modules_controllers_EnvironmentController__["a" /* default */].get({ id: activeEnvironmentId }).
        then(environment => {
          if (!environment) {
            return;
          }

          let environmentValues = environment.values,
          modifiedEnv = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].mergeEnvironments(environmentValues, result.environment);
          if (!_.isEqual(environmentValues, modifiedEnv)) {
            let updateEnvironmentEvent = {
              name: 'update',
              namespace: 'environment',
              data: {
                id: environment.id,
                values: modifiedEnv } };


            Object(__WEBPACK_IMPORTED_MODULE_9__modules_pipelines_user_action__["a" /* default */])(updateEnvironmentEvent);
          }
        }).
        catch(err => {
          console.warn('prerequest script: Error while getting environment from db', err);
        });

        __WEBPACK_IMPORTED_MODULE_16__modules_controllers_GlobalsController__["a" /* default */].get({ workspace: activeWorkspaceId }).
        then(globals => {
          if (!globals) {
            return;
          }

          let globalValues = globals.values,
          modifiedEnv = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].mergeEnvironments(globalValues, result.globals);
          if (!_.isEqual(globalValues, modifiedEnv)) {
            let updateGlobalsEvent = {
              name: 'update',
              namespace: 'globals',
              data: {
                workspace: globals.workspace,
                values: modifiedEnv } };



            Object(__WEBPACK_IMPORTED_MODULE_9__modules_pipelines_user_action__["a" /* default */])(updateGlobalsEvent);
          }
        }).
        catch(err => {
          console.warn('prerequest script: Error while getting globals from db', err);
        });
      },
      beforeRequest: function (err, cursor, req, item, aborter) {
        const requestJson = req.toJSON(),
        requestUrl = req.url && req.url.toString(),
        requestUrlHost = req.url && req.url.getHost(),
        requestHeaders = req.headers.toObject();

        pm.console.net(cursor.httpRequestId, {
          request: {
            url: requestUrl,
            method: requestJson.method,
            headers: requestHeaders } });



        request.set('runtimeRequestAborter', aborter);
        request.set('transformedUrl', requestUrl);
        request.set('lifecycle', 'sending');

        // @todo: remove after runtime sets http request on aborter
        aborter.httpRequestId = cursor.httpRequestId;
      },
      response: function (err, cursor, responseObj, requestObj, item, cookies) {
        var systemQueryParams,
        systemBodyParams;

        // in some cases where request did not complete, runtime would not send a response argument
        responseObj = responseObj || new sdk.Response();

        // remove all existing system properties
        request.clearSystemParams();

        // Sync back the Auth params to headers, URL and body

        // headers
        _.each(requestObj.headers && requestObj.headers.toJSON(), function (header) {
          if (header.system === true) {
            request.setSystemHeader(header.key, header.value);
          }
        });

        // query params
        // extract
        systemQueryParams = _.filter(requestObj.url && requestObj.url.toJSON().query,
        function (queryParam) {return Boolean(queryParam.system);});

        // set
        systemQueryParams && request.set('systemQueryParams', systemQueryParams);

        // body
        // extract
        systemBodyParams = request.get('body') && request.extractSystemBodyParams(requestObj);

        // set
        systemBodyParams && request.get('body').set('systemBodyParams', systemBodyParams);

        if (err) {
          // this error automatically also passes to the done() callback, and is handled there.
          request.set('lifecycle', 'error');
          return;
        }

        var responseModel = request.get('response'),
        httpReason = __WEBPACK_IMPORTED_MODULE_8_http_reasons___default.a.lookup(responseObj.code),
        responseCode = {
          code: responseObj.code,
          name: responseObj.status || httpReason && httpReason.name,
          detail: httpReason && httpReason.detail },

        sortedHeaders,
        responseHeaders = responseObj.headers.toObject(),
        contentLength = parseInt(responseHeaders['content-length'], 10) || 0;

        request.set('lifecycle', 'receivedData');
        responseModel.set('time', responseObj.responseTime);
        responseModel.set('code', responseObj.code);
        responseModel.set('responseCode', responseCode);
        responseModel.set('text', responseObj.text());

        sortedHeaders = _.map(responseObj.headers.members, function (header) {
          var key = header.key.toLowerCase();

          return {
            key: header.key,
            value: header.value,
            name: header.key,
            description: __WEBPACK_IMPORTED_MODULE_2__utils_httpheaders__["b" /* headerDetails */][key] || 'Custom header' };

        });

        sortedHeaders = _.sortBy(sortedHeaders, 'key');
        responseModel.set('headers', sortedHeaders);
        responseModel.set('responseSize', _.clone(responseObj.size()));

        // Response body mime settings
        const mime = responseObj.mime();
        responseModel.set('mimeType', mime.type);
        responseModel.set('fileName', mime.filename || 'text');
        responseModel.set('previewType', mime.type || 'text');

        // Settings -> Language Detection
        const languageDetection = pm.settings.getSetting('languageDetection');
        if (languageDetection === 'JSON') {
          responseModel.set('language', 'json');
        } else
        {
          responseModel.set('language', mime.format || 'plain');
        }

        // Used only when downloading response through send and download
        responseModel.set('sdkResponse', responseObj);
        responseModel.set('dataURI', responseObj.dataURI());

        if (request.get('action') === 'download') {
          request.downloadResponseData(request);
        }
      },
      assertion: function (cursor, assertions) {
        let accumulatedAssertions = request.get('testResults') || [];

        request.set('testResults', _.concat(accumulatedAssertions, assertions));
      },
      beforeTest: function (err) {
        request.set('lifecycle', 'executingTests');
      },
      done: function (err, cursor) {
        if (err) {
          console.warn('There was a fatal error when sending the request!', err);
        }

        __WEBPACK_IMPORTED_MODULE_7__controllers_RuntimeBridge__["a" /* default */].disposeRun(request.get('runLinkID'));
      },
      test: function (err, cursor, testResults) {
        // Add request to the history
        __WEBPACK_IMPORTED_MODULE_11__modules_services_HistoryService__["a" /* default */].
        getHistoryFromRequest(request.serialize(), { workspace: currentWorkspace }).
        then(history => {
          let historyCreateEvent = Object(__WEBPACK_IMPORTED_MODULE_10__modules_model_event__["a" /* createEvent */])('create', 'history', history);

          Object(__WEBPACK_IMPORTED_MODULE_9__modules_pipelines_user_action__["a" /* default */])(historyCreateEvent).
          catch(e => {console.log('Error in creating history', e);});
        });

        // Check if there was a test script.. if no, there's nothing to do here.
        if (!(_.isArray(testResults) && testResults.length)) {
          request.set('lifecycle', 'completed');
          request.set('testErrors', null);
          request.set('testResults', null);
          return;
        }

        var scriptError,
        { error: errorObj } = _.find(testResults, testResult => testResult.error) || {};
        if (scriptError = err || errorObj) {
          request.set('testResults', null);
          request.set('testErrors', scriptError.name + ': ' + scriptError.message);

          request.set('lifecycle', 'testScriptsError');
          return;
        }

        var result = _.last(testResults);
        result = result && result.result;

        !_.isEmpty(activeEnvironmentId) && __WEBPACK_IMPORTED_MODULE_15__modules_controllers_EnvironmentController__["a" /* default */].get({ id: activeEnvironmentId }).
        then(environment => {
          if (!environment) {
            return;
          }

          let environmentValues = environment.values,
          modifiedEnv = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].mergeEnvironments(environmentValues, result.environment);
          if (!_.isEqual(environmentValues, modifiedEnv)) {
            let updateEnvironmentEvent = {
              name: 'update',
              namespace: 'environment',
              data: {
                id: environment.id,
                values: modifiedEnv } };


            Object(__WEBPACK_IMPORTED_MODULE_9__modules_pipelines_user_action__["a" /* default */])(updateEnvironmentEvent);
          }
        }).
        catch(err => {
          console.warn('test script: Error while getting environment from db', err);
        });

        __WEBPACK_IMPORTED_MODULE_16__modules_controllers_GlobalsController__["a" /* default */].get({ workspace: activeWorkspaceId }).
        then(globals => {
          if (!globals) {
            return;
          }

          let globalValues = globals.values,
          modifiedEnv = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].mergeEnvironments(globalValues, result.globals);
          if (!_.isEqual(globalValues, modifiedEnv)) {
            let updateGlobalsEvent = {
              name: 'update',
              namespace: 'globals',
              data: {
                workspace: globals.workspace,
                values: modifiedEnv } };



            Object(__WEBPACK_IMPORTED_MODULE_9__modules_pipelines_user_action__["a" /* default */])(updateGlobalsEvent);
          }
        }).
        catch(err => {
          console.warn('test script: Error while getting globals from db', err);
        });

        // Finish
        var thisResponse = request.get('response');
        thisResponse.trigger('sentRequest', request);
        request.trigger('sentRequest', request);
        waitingForCookies = true;
      },

      // custom callback - not part of runtime - to handle cookies.
      // @todo remove after adding a cookie store to runtime
      cookies(err, cookies) {
        if (_.isEmpty(err)) {
          request.get('response').set('cookies', cookies);
          pm.cookieManager.loadCookies();
          waitingForCookies && request.set('lifecycle', 'completed');
        }
      } };

    __WEBPACK_IMPORTED_MODULE_7__controllers_RuntimeBridge__["a" /* default */].startRun(runnerOptions, runOptions, runMetaData, collection, runCallbacks).
    then(runId => {
      this.set('runLinkID', runId);
    });
  },

  getDummyFormDataHeader: function () {
    var boundary = 'multipart/form-data; boundary=' + this.getDummyFormDataBoundary();
    return boundary;
  },

  generateHTTPRequest: function () {
    var method = this.get('method');
    if (!method) {
      method = 'get';
    }
    method = method.toUpperCase();

    var httpVersion = 'HTTP/1.1';

    var url = this.getURLForSnippet();

    var hostAndPath = this.splitUrlIntoHostAndPath(url);

    var path = hostAndPath.path;
    var host = hostAndPath.host;

    // to escape html escape sequences
    path = path.replace(/&/g, '&amp;');

    var headers = this.getXhrHeaders();

    var dataMode = this.get('body').get('dataMode');

    if (__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].isMethodWithBody(method)) {
      if (dataMode === 'params') {
        headers = this.setHeaderInArray(headers, 'Content-Type', this.getDummyFormDataHeader());
      }
    }

    var hasBody = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].isMethodWithBody(method);
    var body;

    if (hasBody) {
      body = this.getRequestBodyPreview();
    }
    var requestPreview;

    requestPreview = '';
    requestPreview += method + ' ' + path + ' ' + httpVersion + '\n';

    // only add Host header if the request doesn't already have it
    if (!_.find(headers, function (h) {return h && h.key && h.key.toLowerCase() == 'host';})) {
      requestPreview += 'Host: ' + host + '\n';
    }

    var headersCount = headers.length;
    for (var i = 0; i < headersCount; i++) {
      requestPreview += headers[i].key + ': ' + headers[i].value + '\n';
    }

    if (hasBody && body !== false) {
      requestPreview += '\n' + body;
    }

    return requestPreview;
  },

  // For Cmd+B when the raw body format is JSON or XML
  beautifyBody: function () {
    let mode = this.get('body').get('editorMode');
    try {
      if (mode === 'javascript') {
        let oldBody = this.get('body').get('data');
        this.get('body').set('data', JSON.stringify(JSON.parse(oldBody), null, 4));
      } else
      if (mode === 'xml') {
        let oldBody = this.get('body').get('data');
        this.get('body').set('data', __WEBPACK_IMPORTED_MODULE_18__utils_vkbeautify__["a" /* default */].xml(oldBody, null, true));
      }
    }
    catch (e) {
      console.warn('Could not beautify. Invalid JSON or XML');
    }
  },

  getRequestBodyPreview: function () {
    var body = this.get('body');
    var dataMode = body.get('dataMode');
    var method = this.get('method');
    if (!__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].isMethodWithBody(method)) {
      return false;
    }

    if (dataMode === 'raw') {
      var rawBodyData = body.get('data');

      rawBodyData = __WEBPACK_IMPORTED_MODULE_13__utils_ResolveVariableHelper__["a" /* default */].resolve(rawBodyData, this.getVariablesMap());
      return rawBodyData;
    } else
    if (dataMode === 'params') {
      var formDataBody = this.getFormDataPreview(false);
      if (formDataBody !== false) {
        return formDataBody;
      } else
      {
        return false;
      }
    } else
    if (dataMode === 'urlencoded') {
      var urlEncodedBodyData = this.getUrlEncodedBody(false);
      if (urlEncodedBodyData !== false) {
        return urlEncodedBodyData;
      } else
      {
        return false;
      }
    }
  },

  getFormDataPreview: function (getDisabled) {
    var params = this.get('body').get('data');
    if (!params) {
      return '';
    }
    var paramsCount = params.length,
    body = '',
    boundary = this.getDummyFormDataBoundary();
    for (var i = 0; i < paramsCount; i++) {
      var param = params[i];

      // two hyphens before actual boundary (https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html)
      body += '--' + boundary;
      if (param.type === 'file') {
        body += '\nContent-Disposition: form-data; name="' + __WEBPACK_IMPORTED_MODULE_13__utils_ResolveVariableHelper__["a" /* default */].resolve(param.key, this.getVariablesMap()) + '"; filename=';
        body += '"' + __WEBPACK_IMPORTED_MODULE_13__utils_ResolveVariableHelper__["a" /* default */].resolve(_.get(param, 'value[0].name'), this.getVariablesMap()) + '"\n';
        body += 'Content-Type: ' + __WEBPACK_IMPORTED_MODULE_13__utils_ResolveVariableHelper__["a" /* default */].resolve(_.get(param, 'value[0].type'), this.getVariablesMap());
        body += '\n\n\n';
      }

      // if(param.type === "text") {
      else {
          body += '\nContent-Disposition: form-data; name="' + __WEBPACK_IMPORTED_MODULE_13__utils_ResolveVariableHelper__["a" /* default */].resolve(param.key, this.getVariablesMap()) + '"\n\n';
          body += __WEBPACK_IMPORTED_MODULE_13__utils_ResolveVariableHelper__["a" /* default */].resolve(param.value, this.getVariablesMap());
          body += '\n';
        }
    }

    // two hyphens before and after actual boundary (https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html)
    body += '--' + boundary + '--';
    return body;
  },

  getUrlEncodedBody: function (getDisabled) {
    return this.get('body').getUrlEncodedBody(getDisabled);
  },

  // returns the "encapsulated boundary" as in https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html
  getDummyFormDataBoundary: function () {
    var boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';
    return boundary;
  },

  stripScriptTag: function (text) {
    if (!text) {return text;}

    var re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    text = text.replace(re, '');
    return text;
  },

  saveResponseToRequest() {
    var request = this,
    response = request.get('response').toJSON(), // @todo, this always gets old response data, id won't be available
    isNew = false,
    callback;

    if (!response.id) {
      isNew = true;
      response.id = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].guid();
    }
    if (response.__id) {
      delete response.__id;
    }
    if (!request.get('id') || !response.name) {
      return;
    }

    response.sdkResponse = undefined; // @todo Prashant What is this?

    let staticRequest = {
      'url': request.get('url'),
      'pathVariableData': request.get('pathVariableData'),
      'queryParams': request.get('queryParams'),
      'headerData': request.get('headerData'),
      'data': request.get('body') ? request.get('body').get('data') : null,
      'method': request.get('method'),
      'dataMode': request.get('body') ? request.get('body').get('dataMode') : null };


    let requestId = request.get('id');

    response.request = requestId;
    response.requestObject = staticRequest;

    let responseEvent = isNew ? {
      name: 'create_deep',
      namespace: 'response',
      data: {
        response,
        target: {
          model: 'request',
          modelId: requestId } } } :


    {
      name: 'update',
      namespace: 'response',
      data: _extends({}, response) };


    Object(__WEBPACK_IMPORTED_MODULE_9__modules_pipelines_user_action__["a" /* default */])(responseEvent).
    then(eventResponse => {
      if (!_.isEmpty(_.get(eventResponse, 'error'))) {
        console.error('Error in creating response', eventResponse.error);
        return;
      }

      let responseList = _.clone(this.get('responses')) || [];
      if (isNew) {
        responseList.push(response);
      } else
      {
        let isFoundAtIndex = _.findIndex(responseList, ['id', response.id]);
        isFoundAtIndex >= 0 && (responseList[isFoundAtIndex] = response);
      }

      this.set('responses', responseList);
      request.loadSampleResponseById(response.id);
    }).
    catch(err => {
      console.error('Error in pipeline for creating response', err);
    });
  },

  serialize: function (tabMode) {
    // @todo Need to figure out a better approach to handle mutations on the properties of the
    // serialized request object without much performance overhead.
    let requestJsonBody = _.cloneDeep(this.get('body').toJSON()),
    serializedRequest = _.assign(
    _.pick(this.toJSON(), [
    'id',
    'isFromCollection',
    'collectionId',
    'collection',
    'description',
    'editorMode',
    'folder',
    'headerData',
    'auth',
    'method',
    'lifecycle',
    'name',
    'pathVariableData',
    'events',
    'testResults',
    'testErrors',
    'url',
    'queryParams',
    'version',
    'write']),
    {
      data: requestJsonBody.data,
      dataMode: requestJsonBody.dataMode,
      body: requestJsonBody });


    let response = this.get('response');

    if (response && response.canSave(tabMode)) {
      let serializedResponse = response.serialize(tabMode);
      _.assign(serializedRequest, { response: serializedResponse });
    } else {
      _.assign(serializedRequest, {
        response: new Response().toJSON(),
        lifecycle: 'idle' });

    }

    return serializedRequest;
  } },


// A static method for class Request (http://backbonejs.org/#Model-extend)
{
  deserialize: function (data) {
    return new Request(_.assign(data, {
      body: new __WEBPACK_IMPORTED_MODULE_0__RequestBody__["a" /* default */](data.body),
      response: new Response(data.response) }));

  } });


/**
         * Backbone model representing a single response of a request
         *
         * @todo Incomplete
         * @class {Object} Response
         * @extends {Backbone.Model}
         *
         * @property {String} status                 -
         * @property {Object} responseCode           -
         * @property {Number} time                   -
         * @property {Object[]} headers              -
         * @property {Cookie[]} cookies              -
         * @property {String} mime                   -
         * @property {String} text                   -
         * @property {String} language               -
         * @property {String} previewType            -
         * @property {Boolean} write                 -
         */
var Response = Backbone.Model.extend( /** @lends Response.prototype */{
  defaults: function () {
    return {
      __id: __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].guid(),
      status: '',
      responseCode: {},
      time: 0,
      headers: [],
      cookies: [],
      mime: '',
      text: '',
      language: '',
      previewType: 'parsed',
      write: true };

  },

  initialize: function () {
  },

  loadSampleResponse: function (requestModel, response) {
    if (!response) {
      return;
    }

    if (response.id) {
      this.set('id', response.id);
      this.set('name', response.name);
    }
    this.set('status', response.status);
    this.set('responseCode', response.responseCode);
    this.set('responseSize', response.responseSize);
    this.set('headers', response.headers);
    this.set('cookies', response.cookies);
    this.set('mime', response.mime);
    this.set('language', response.language);
    this.set('text', response.text);
    this.set('previewType', response.previewType);
  },

  clear: function () {
    this.set({
      'status': '',
      'responseCode': {},
      'time': 0,
      'headers': [],
      'cookies': [],
      'mime': '',
      'text': '',
      'language': '',
      'previewType': 'parsed',
      'write': true });

  },

  canSave(tabMode) {
    if (tabMode && tabMode === 'exampleResponse') {
      return true;
    }

    let responseText = this.get('text');
    return _.size(responseText) < window.postman_sync_rawtext_limit;
  },

  serialize(tabMode) {
    if (this.canSave(tabMode)) {
      return _.assign(_.pick(this.toJSON(), [
      '__id',
      'id',
      'name',
      'code',
      'cookies',
      'fileName',
      'headers',
      'language',
      'mime',
      'mimeType',
      'previewType',
      'responseCode',
      'responseSize',
      'status',
      'text',
      'time',
      'write']));

    }

    return new Response().toJSON();
  } });





/**
                               * An Example Response
                               *
                               * @typedef {Object} Example
                               */

/**
                                   * Indicates that the request has changed
                                   *
                                   * @event Request#change
                                   *
                                   * @param {Request} model - Thew, cahnged request model
                                   * @param {Object} options - The additional options passed when this change event was triggered
                                   */

/**
                                       * Indicates that the request's `url` property was changed
                                       *
                                       * @event Request#change:url
                                       *
                                       * @param {Request} model  - The new, changed request model
                                       * @param {URL} value      - The new value of the notifications property of the tab
                                       * @param {Object} options - The additional options passed when this event was triggered
                                       */

/**
                                           * Indicates that the request's response was changed
                                           *
                                           * @event Request#responseChanged
                                           */

/**
                                               * Indicates that the response's property was changed
                                               *
                                               * @event Response#change
                                               *
                                               * @param {Response} model - The new, changed response model
                                               * @param {Object} options - The additional options passed when this event was triggered
                                               */
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getContentStateFragment
 * @format
 * 
 */



var randomizeBlockMapKeys = __webpack_require__(723);
var removeEntitiesAtEdges = __webpack_require__(724);

var getContentStateFragment = function getContentStateFragment(contentState, selectionState) {
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();

  // Edge entities should be stripped to ensure that we don't preserve
  // invalid partial entities when the fragment is reused. We do, however,
  // preserve entities that are entirely within the selection range.
  var contentWithoutEdgeEntities = removeEntitiesAtEdges(contentState, selectionState);

  var blockMap = contentWithoutEdgeEntities.getBlockMap();
  var blockKeys = blockMap.keySeq();
  var startIndex = blockKeys.indexOf(startKey);
  var endIndex = blockKeys.indexOf(endKey) + 1;

  return randomizeBlockMapKeys(blockMap.slice(startIndex, endIndex).map(function (block, blockKey) {
    var text = block.getText();
    var chars = block.getCharacterList();

    if (startKey === endKey) {
      return block.merge({
        text: text.slice(startOffset, endOffset),
        characterList: chars.slice(startOffset, endOffset)
      });
    }

    if (blockKey === startKey) {
      return block.merge({
        text: text.slice(startOffset),
        characterList: chars.slice(startOffset)
      });
    }

    if (blockKey === endKey) {
      return block.merge({
        text: text.slice(0, endOffset),
        characterList: chars.slice(0, endOffset)
      });
    }

    return block;
  }));
};

module.exports = getContentStateFragment;

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(1);
var PropTypes = __webpack_require__(16);

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];

function isWebpackReady(getModuleIds) {
  if (( false ? 'undefined' : _typeof(__webpack_require__.m)) !== 'object') {
    return false;
  }

  return getModuleIds().every(function (moduleId) {
    return typeof moduleId !== 'undefined' && typeof __webpack_require__.m[moduleId] !== 'undefined';
  });
}

function load(loader) {
  var promise = loader();

  var state = {
    loading: true,
    loaded: null,
    error: null
  };

  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });

  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };

  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);

      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });

  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  if (!options.loading) {
    throw new Error('react-loadable requires a `loading` component');
  }

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }
    return res.promise;
  }

  ALL_INITIALIZERS.push(init);

  if (typeof opts.webpack === 'function') {
    READY_INITIALIZERS.push(function () {
      if (isWebpackReady(opts.webpack)) {
        return init();
      }
    });
  }

  return _temp = _class = function (_React$Component) {
    _inherits(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      _classCallCheck(this, LoadableComponent);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      init();

      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      return init();
    };

    LoadableComponent.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      this._mounted = true;

      if (this.context.loadable && Array.isArray(opts.modules)) {
        opts.modules.forEach(function (moduleName) {
          _this2.context.loadable.report(moduleName);
        });
      }

      if (!res.loading) {
        return;
      }

      if (typeof opts.delay === 'number') {
        if (opts.delay === 0) {
          this.setState({ pastDelay: true });
        } else {
          this._delay = setTimeout(function () {
            _this2.setState({ pastDelay: true });
          }, opts.delay);
        }
      }

      if (typeof opts.timeout === 'number') {
        this._timeout = setTimeout(function () {
          _this2.setState({ timedOut: true });
        }, opts.timeout);
      }

      var update = function update() {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
      }).catch(function (err) {
        update();
        throw err;
      });
    };

    LoadableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;
      this._clearTimeouts();
    };

    LoadableComponent.prototype._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    LoadableComponent.prototype.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component), _class.contextTypes = {
    loadable: PropTypes.shape({
      report: PropTypes.func.isRequired
    })
  }, _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

var Capture = function (_React$Component2) {
  _inherits(Capture, _React$Component2);

  function Capture() {
    _classCallCheck(this, Capture);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Capture.prototype.getChildContext = function getChildContext() {
    return {
      loadable: {
        report: this.props.report
      }
    };
  };

  Capture.prototype.render = function render() {
    return React.Children.only(this.props.children);
  };

  return Capture;
}(React.Component);

Capture.propTypes = {
  report: PropTypes.func.isRequired
};
Capture.childContextTypes = {
  loadable: PropTypes.shape({
    report: PropTypes.func.isRequired
  }).isRequired
};


Loadable.Capture = Capture;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  return new Promise(function (resolve, reject) {
    // We always will resolve, errors should be handled within loading UIs.
    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
* vkBeautify - javascript plugin to pretty-print or minify text in XML, JSON, CSS and SQL formats.
*
* Version - 2.0.00.regexp 08/2013
* Copyright (c) 2013 Vadim Kiryukhin
* vkiryukhin @ gmail.com
* http://www.eslinstructor.net/vkbeautify/
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
*   Pretty print
*
*        vkbeautify.xml(text [,indent_pattern]);
*
*        vkbeautify.json(text [,indent_pattern]);
*        vkbeautify.json(text [,int_number_spaces]);
*
*        vkbeautify.css(text [,indent_pattern]);
*        vkbeautify.sql(text [,indent_pattern]);
*
*        @text - String; text to beatufy;
*        @indent_pattern - Integer | String;
*                Integer:  number of white spaces;
*                String:   character string to visualize indentation ( can also be a set of white spaces )
*   Minify
*
*        vkbeautify.xmlmin(text [,preserve_comments]);
*        vkbeautify.jsonmin(text);
*        vkbeautify.cssmin(text [,preserve_comments]);
*        vkbeautify.sqlmin(text);
*
*        @text - String; text to minify;
*        @preserve_comments - Bool; [optional];
*                Set this flag to true to prevent removing comments from @text ( minxml and mincss functions only. )
*
*   Examples:
*        vkbeautify.xml(text); // pretty print XML
*        vkbeautify.json(text, 4 ); // pretty print JSON
*        vkbeautify.css(text, '. . . .'); // pretty print CSS
*        vkbeautify.sql(text, '----'); // pretty print SQL
*
*        vkbeautify.xmlmin(text, true);// minify XML, preserve comments
*        vkbeautify.jsonmin(text);// minify JSON
*        vkbeautify.cssmin(text);// minify CSS, remove comments ( default )
*        vkbeautify.sqlmin(text);// minify SQL
*
*/


function createShiftArr(step) {

  var space = '    ';
  if (isNaN(parseInt(step))) {// argument is string
    space = step;
  } else
  {// argument is integer
    switch (step) {
      case 1:space = ' ';break;
      case 2:space = '  ';break;
      case 3:space = '   ';break;
      case 4:space = '    ';break;
      case 5:space = '     ';break;
      case 6:space = '      ';break;
      case 7:space = '       ';break;
      case 8:space = '        ';break;
      case 9:space = '         ';break;
      case 10:space = '          ';break;
      case 11:space = '           ';break;
      case 12:space = '            ';break;}

  }

  var shift = ['\n']; // array of shifts
  for (let ix = 0; ix < 100; ix++) {
    shift.push(shift[ix] + space);
  }
  return shift;
}

function vkbeautify() {
  this.step = '    '; // 4 spaces
  this.shift = createShiftArr(this.step);
}

function isSingleTag(term) {
  var singleTags = /<\/{0,1}(hr|link|br|meta|param|input|img|col|area|base|embed)(\s|\>|\/)/gi;
  if (term.match(singleTags)) {
    return true;
  }
  return false;
}

/**
   *
   * @param text
   * @param step
   * @param proper - if true, proper closing of tags will be required. If false, <hr>, <br> will not indent.
   * @returns {string}
   */
vkbeautify.prototype.xml = function (text, step, proper) {
  if (typeof step === 'undefined') {
    step = null;
  }
  if (typeof proper === 'undefined') {
    proper = true;
  }

  var improper = !proper;

  var ar = text.replace(/>\s{0,}<([^\/])/g, '><$1').replace(/>\n</g, '><') // Fix for GH#1610
  .replace(/</g, '~::~<')

  /* .replace(/\s*xmlns\:/g,"~::~xmlns:")
                          .replace(/\s*xmlns\=/g,"~::~xmlns=") */.

  split('~::~'),
  len = ar.length,
  inComment = false,
  deep = 0,
  str = '',
  ix = 0,
  shift = step ? createShiftArr(step) : this.shift;

  for (let ix = 0; ix < len; ix++) {
    // start comment or <![CDATA[...]]> or <!DOCTYPE //
    if (ar[ix].search(/<!/) > -1) {
      str += shift[deep] + ar[ix];
      inComment = true;

      // end comment  or <![CDATA[...]]> //

      if (ar[ix].search(/-->/) > -1 || ar[ix].search(/\]>/) > -1 || ar[ix].search(/!DOCTYPE/) > -1) {
        inComment = false;
      }
    } else


      // end comment  or <![CDATA[...]]> //
      if (ar[ix].search(/-->/) > -1 || ar[ix].search(/\]>/) > -1) {
        str += ar[ix];
        inComment = false;
      } else


        // <elm></elm> //
        if (/^<\w/.exec(ar[ix - 1]) && /^<\/\w/.exec(ar[ix]) &&
        /^<[\w:\-\.\,]+/.exec(ar[ix - 1]) == /^<\/[\w:\-\.\,]+/.exec(ar[ix])[0].replace('/', '')) {

          str += ar[ix].trim(); // if the closing tag token has spaces or newlines after it, trim
          if (!inComment && !(isSingleTag(ar[ix]) && improper)) deep--;
        } else


          // <elm> //
          if (ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) == -1 && ar[ix].search(/\/>/) == -1) {
            if (isSingleTag(ar[ix]) && improper) {
              str = !inComment ? str += shift[deep] + ar[ix] : str += ar[ix];
            } else
            {
              str = !inComment ? str += shift[deep++] + ar[ix] : str += ar[ix];
            }
          } else


            // <elm>...</elm> //
            if (ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) > -1) {
              str = !inComment ? str += shift[deep] + ar[ix] : str += ar[ix];
            } else


              // </elm> //
              if (ar[ix].search(/<\//) > -1) {
                if (isSingleTag(ar[ix]) && improper) {
                  str = !inComment ? str += shift[deep] + ar[ix] : str += ar[ix];
                } else
                {
                  deep > 0 && deep--;
                  str = !inComment ? str += shift[deep] + ar[ix].trim() : str += ar[ix];
                }
              } else


                // <elm/> //
                if (ar[ix].search(/\/>/) > -1) {
                  str = !inComment ? str += shift[deep] + ar[ix].trim() : str += ar[ix];
                } else


                  // <? xml ... ?> //
                  if (ar[ix].search(/<\?/) > -1) {
                    str += shift[deep] + ar[ix];
                  } else


                    // xmlns //
                    if (ar[ix].search(/xmlns\:/) > -1 || ar[ix].search(/xmlns\=/) > -1) {
                      str += shift[deep] + ar[ix];
                    } else
                    {
                      str += ar[ix];
                    }
  }

  return str[0] == '\n' ? str.slice(1) : str;
};

vkbeautify.prototype.json = function (text, step) {

  var step = typeof step === 'undefined' ? this.step : step,
  arrBody = [],
  arrNums = [],
  str = '',
  delimiter = 1.234567890098765,
  ix;

  if (typeof JSON === 'undefined') {
    return text;
  }
  if (typeof text === 'object') {
    return JSON.stringify(text, null, step);
  }

  if (typeof text === 'string') {

    // save original invalid numbers in array and replace them //
    // with valid delimiter to let JSON to process the string //
    text = text.replace(/[0-9]{17,32}/g, function (match) {
      arrNums.push(match);
      return delimiter;
    });

    // beautify json string with delimiters instead of original numbers //
    text = JSON.stringify(JSON.parse(text), null, step);

    // split the string into array//
    arrBody = text.split(delimiter.toString());

    // restore original numbers//
    for (ix = 0; ix < arrNums.length; ix++) {
      str += arrBody[ix] + arrNums[ix];
    }

    return str + arrBody[ix];
  }

  return text;
};

vkbeautify.prototype.css = function (text, step) {

  var ar = text.replace(/\s{1,}/g, ' ').
  replace(/\{/g, '{~::~').
  replace(/\}/g, '~::~}~::~').
  replace(/\;/g, ';~::~').
  replace(/\/\*/g, '~::~/*').
  replace(/\*\//g, '*/~::~').
  replace(/~::~\s{0,}~::~/g, '~::~').
  split('~::~'),
  len = ar.length,
  deep = 0,
  str = '',
  ix = 0,
  shift = step ? createShiftArr(step) : this.shift;

  for (let ix = 0; ix < len; ix++) {

    if (/\{/.exec(ar[ix])) {
      str += shift[deep++] + ar[ix];
    } else
    if (/\}/.exec(ar[ix])) {
      str += shift[--deep] + ar[ix];
    } else
    if (/\*\\/.exec(ar[ix])) {
      str += shift[deep] + ar[ix];
    } else
    {
      str += shift[deep] + ar[ix];
    }
  }
  return str.replace(/^\n{1,}/, '');
};

// ----------------------------------------------------------------------------

/**
 * 
 * @param {*} str 
 * @param {*} parenthesisLevel 
 */
function isSubquery(str, parenthesisLevel) {
  return parenthesisLevel - (str.replace(/\(/g, '').length - str.replace(/\)/g, '').length);
}

/**
   * 
   * @param {*} str 
   * @param {*} tab 
   */
function split_sql(str, tab) {

  return str.replace(/\s{1,}/g, ' ').

  replace(/ AND /ig, '~::~' + tab + tab + 'AND ').
  replace(/ BETWEEN /ig, '~::~' + tab + 'BETWEEN ').
  replace(/ CASE /ig, '~::~' + tab + 'CASE ').
  replace(/ ELSE /ig, '~::~' + tab + 'ELSE ').
  replace(/ END /ig, '~::~' + tab + 'END ').
  replace(/ FROM /ig, '~::~FROM ').
  replace(/ GROUP\s{1,}BY/ig, '~::~GROUP BY ').
  replace(/ HAVING /ig, '~::~HAVING ')

  // .replace(/ SET /ig,' SET~::~')
  .replace(/ IN /ig, ' IN ').

  replace(/ JOIN /ig, '~::~JOIN ').
  replace(/ CROSS~::~{1,}JOIN /ig, '~::~CROSS JOIN ').
  replace(/ INNER~::~{1,}JOIN /ig, '~::~INNER JOIN ').
  replace(/ LEFT~::~{1,}JOIN /ig, '~::~LEFT JOIN ').
  replace(/ RIGHT~::~{1,}JOIN /ig, '~::~RIGHT JOIN ').

  replace(/ ON /ig, '~::~' + tab + 'ON ').
  replace(/ OR /ig, '~::~' + tab + tab + 'OR ').
  replace(/ ORDER\s{1,}BY/ig, '~::~ORDER BY ').
  replace(/ OVER /ig, '~::~' + tab + 'OVER ').

  replace(/\(\s{0,}SELECT /ig, '~::~(SELECT ').
  replace(/\)\s{0,}SELECT /ig, ')~::~SELECT ').

  replace(/ THEN /ig, ' THEN~::~' + tab + '').
  replace(/ UNION /ig, '~::~UNION~::~').
  replace(/ USING /ig, '~::~USING ').
  replace(/ WHEN /ig, '~::~' + tab + 'WHEN ').
  replace(/ WHERE /ig, '~::~WHERE ').
  replace(/ WITH /ig, '~::~WITH ')

  // .replace(/\,\s{0,}\(/ig,",~::~( ")
  // .replace(/\,/ig,",~::~"+tab+tab+"")
  .
  replace(/ ALL /ig, ' ALL ').
  replace(/ AS /ig, ' AS ').
  replace(/ ASC /ig, ' ASC ').
  replace(/ DESC /ig, ' DESC ').
  replace(/ DISTINCT /ig, ' DISTINCT ').
  replace(/ EXISTS /ig, ' EXISTS ').
  replace(/ NOT /ig, ' NOT ').
  replace(/ NULL /ig, ' NULL ').
  replace(/ LIKE /ig, ' LIKE ').
  replace(/\s{0,}SELECT /ig, 'SELECT ').
  replace(/\s{0,}UPDATE /ig, 'UPDATE ').
  replace(/ SET /ig, ' SET ').

  replace(/~::~{1,}/g, '~::~').
  split('~::~');
}

vkbeautify.prototype.sql = function (text, step) {

  var ar_by_quote = text.replace(/\s{1,}/g, ' ').
  replace(/\'/ig, '~::~\'').
  split('~::~'),
  len = ar_by_quote.length,
  ar = [],
  deep = 0,
  tab = this.step, // +this.step,
  inComment = true,
  inQuote = false,
  parenthesisLevel = 0,
  str = '',
  ix = 0,
  shift = step ? createShiftArr(step) : this.shift;

  for (let ix = 0; ix < len; ix++) {
    if (ix % 2) {
      ar = ar.concat(ar_by_quote[ix]);
    } else
    {
      ar = ar.concat(split_sql(ar_by_quote[ix], tab));
    }
  }

  len = ar.length;
  for (let ix = 0; ix < len; ix++) {
    parenthesisLevel = isSubquery(ar[ix], parenthesisLevel);

    if (/\s{0,}\s{0,}SELECT\s{0,}/.exec(ar[ix])) {
      ar[ix] = ar[ix].replace(/\,/g, ',\n' + tab + tab + '');
    }

    if (/\s{0,}\s{0,}SET\s{0,}/.exec(ar[ix])) {
      ar[ix] = ar[ix].replace(/\,/g, ',\n' + tab + tab + '');
    }

    if (/\s{0,}\(\s{0,}SELECT\s{0,}/.exec(ar[ix])) {
      deep++;
      str += shift[deep] + ar[ix];
    } else
    if (/\'/.exec(ar[ix])) {
      if (parenthesisLevel < 1 && deep) {
        deep--;
      }
      str += ar[ix];
    } else
    {
      str += shift[deep] + ar[ix];
      if (parenthesisLevel < 1 && deep) {
        deep--;
      }
    }
    var junk = 0;
  }

  str = str.replace(/^\n{1,}/, '').replace(/\n{1,}/g, '\n');
  return str;
};

vkbeautify.prototype.xmlmin = function (text, preserveComments) {

  var str = preserveComments ? text :
  text.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g, '').
  replace(/[ \r\n\t]{1,}xmlns/g, ' xmlns');
  return str.replace(/>\s{0,}</g, '><');
};

vkbeautify.prototype.jsonmin = function (text) {
  return this.json(text, 0);
};

vkbeautify.prototype.cssmin = function (text, preserveComments) {

  var str = preserveComments ? text :
  text.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g, '');

  return str.replace(/\s{1,}/g, ' ').
  replace(/\{\s{1,}/g, '{').
  replace(/\}\s{1,}/g, '}').
  replace(/\;\s{1,}/g, ';').
  replace(/\/\*\s{1,}/g, '/*').
  replace(/\*\/\s{1,}/g, '*/');
};

vkbeautify.prototype.sqlmin = function (text) {
  return text.replace(/\s{1,}/g, ' ').replace(/\s{1,}\(/, '(').replace(/\s{1,}\)/, ')');
};

/* harmony default export */ __webpack_exports__["a"] = (new vkbeautify());

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return headerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return restrictedChromeHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allowedChromeHeaders; });
var headerDetails = {
  'accept-ranges': 'Content-Types that are acceptable',
  'access-control-allow-credentials': 'Indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials.',
  'access-control-allow-headers': 'Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.',
  'access-control-allow-origin': 'Specifies a URI that may access the resource. For requests without credentials, the server may specify \'*\' as a wildcard, thereby allowing any origin to access the resource.',
  'access-control-allow-methods': 'Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request.',
  'access-control-expose-headers': 'Lets a server whitelist headers that browsers are allowed to access.',
  'access-control-max-age': 'Indicates how long the results of a preflight request can be cached in seconds.',
  'access-control-request-method': 'Used when issuing a preflight request to let the server know what HTTP method will be used when the actual request is made.',
  'access-control-request-headers': 'Used when issuing a preflight request to let the server know what HTTP headers will be used when the actual request is made.',
  'age': 'The age the object has been in a proxy cache in seconds',
  'allow': 'Valid actions for a specified resource. To be used for a 405 Method not allowed',
  'cache-control': 'Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds',
  'connection': 'Options that are desired for the connection',
  'content-encoding': 'The type of encoding used on the data.',
  'content-language': 'The language the content is in',
  'content-length': 'The length of the response body in octets (8-bit bytes)',
  'content-location': 'An alternate location for the returned data',
  'content-md5': 'A Base64-encoded binary MD5 sum of the content of the response',
  'content-disposition': 'An opportunity to raise a "File Download" dialogue box for a known MIME type',
  'content-range': 'Where in a full body message this partial message belongs',
  'content-type': 'The mime type of this content',
  'date': 'The date and time that the message was sent',
  'etag': 'An identifier for a specific version of a resource, often a message digest',
  'expires': 'Gives the date/time after which the response is considered stale',
  'last-modified': 'The last modified date for the requested object, in RFC 2822 format',
  'link': 'Used to express a typed relationship with another resource, where the relation type is defined by RFC 5988',
  'location': 'Used in redirection, or when a new resource has been created.',
  'p3p': 'This header is supposed to set P3P policy, in the form of P3P:CP="your_compact_policy". However, P3P did not take off, most browsers have never fully implemented it, a lot of websites set this header with fake policy text, that was enough to fool browsers the existence of P3P policy and grant permissions for third party cookies.',
  'pragma': 'Implementation-specific headers that may have various effects anywhere along the request-response chain.',
  'proxy-authenticate': 'Request authentication to access the proxy.',
  'refresh': 'Used in redirection, or when a new resource has been created. This refresh redirects after 5 seconds. This is a proprietary, non-standard header extension introduced by Netscape and supported by most web browsers.',
  'retry-after': 'If an entity is temporarily unavailable, this instructs the client to try again after a specified period of time (seconds).',
  'server': 'A name for the server',
  'set-cookie': 'an HTTP cookie',
  'strict-transport-security': 'A HSTS Policy informing the HTTP client how long to cache the HTTPS only policy and whether this applies to subdomains.',
  'trailer': 'The Trailer general field value indicates that the given set of header fields is present in the trailer of a message encoded with chunked transfer-coding.',
  'transfer-encoding': 'The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity.',
  'vary': 'Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server.',
  'via': 'Informs the client of proxies through which the response was sent.',
  'warning': 'A general warning about possible problems with the entity body.',
  'www-authenticate': 'Indicates the authentication scheme that should be used to access the requested entity.',
  'x-requested-with': 'Mainly used to identify Ajax requests. Most JavaScript frameworks send this header with value of XMLHttpRequest',
  'x-do-not-track': 'Requests a web application to disable their tracking of a user. Note that, as of yet, this is largely ignored by web applications. It does however open the door to future legislation requiring web applications to comply with a user\'s request to not be tracked. Mozilla implements the DNT header with a similar purpose.',
  'dnt': 'Requests a web application to disable their tracking of a user. This is Mozilla\'s version of the X-Do-Not-Track header (since Firefox 4.0 Beta 11). Safari and IE9 also have support for this header. On March 7, 2011, a draft proposal was submitted to IETF.',
  'x-forwarded-for': 'A de facto standard for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer',
  'x-frame-options': 'Clickjacking protection: "deny" - no rendering within a frame, "sameorigin" - no rendering if origin mismatch',
  'x-xss-protection': 'Cross-site scripting (XSS) filter',
  'x-content-type-options': 'The only defined value, "nosniff", prevents Internet Explorer from MIME-sniffing a response away from the declared content-type',
  'x-forwarded-proto': 'A de facto standard for identifying the originating protocol of an HTTP request, since a reverse proxy (load balancer) may communicate with a web server using HTTP even if the request to the reverse proxy is HTTPS',
  'x-powered-by': 'Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)' };


var restrictedChromeHeaders = [
{
  label: 'Connection',
  category: 'Restricted HTTP Headers',
  type: 'http' }],


allowedChromeHeaders = [
// Standard headers
{
  label: 'Accept',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Accept-Charset',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Accept-Encoding',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Accept-Language',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Access-Control-Request-Headers',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Access-Control-Request-Method',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Authorization',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Cache-Control',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Content-MD5',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Content-Length',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Content-Transfer-Encoding',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Content-Type',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Cookie',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Cookie 2',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Date',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Expect',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'From',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Host',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'If-Match',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'If-Modified-Since',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'If-None-Match',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'If-Range',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'If-Unmodified-Since',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Keep-Alive',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Max-Forwards',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Origin',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Pragma',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Proxy-Authorization',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Range',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'Referer',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'TE',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Trailer',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Transfer-Encoding',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Upgrade',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'User-Agent',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Via',
  category: 'Restricted HTTP Headers',
  type: 'http' },

{
  label: 'Warning',
  category: 'Allowed HTTP Headers',
  type: 'http' },


// Non standard headers
{
  label: 'X-Requested-With',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'X-Do-Not-Track',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'DNT',
  category: 'Allowed HTTP Headers',
  type: 'http' },

{
  label: 'x-api-key',
  category: 'Allowed HTTP Headers',
  type: 'http' }];





/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule randomizeBlockMapKeys
 * @format
 * 
 */



var ContentBlockNode = __webpack_require__(649);
var Immutable = __webpack_require__(239);

var generateRandomKey = __webpack_require__(650);

var OrderedMap = Immutable.OrderedMap;


var randomizeContentBlockNodeKeys = function randomizeContentBlockNodeKeys(blockMap) {
  var newKeysRef = {};

  // we keep track of root blocks in order to update subsequent sibling links
  var lastRootBlock = void 0;

  return OrderedMap(blockMap.withMutations(function (blockMapState) {
    blockMapState.forEach(function (block, index) {
      var oldKey = block.getKey();
      var nextKey = block.getNextSiblingKey();
      var prevKey = block.getPrevSiblingKey();
      var childrenKeys = block.getChildKeys();
      var parentKey = block.getParentKey();

      // new key that we will use to build linking
      var key = generateRandomKey();

      // we will add it here to re-use it later
      newKeysRef[oldKey] = key;

      if (nextKey) {
        var nextBlock = blockMapState.get(nextKey);
        if (nextBlock) {
          blockMapState.setIn([nextKey, 'prevSibling'], key);
        } else {
          // this can happen when generating random keys for fragments
          blockMapState.setIn([oldKey, 'nextSibling'], null);
        }
      }

      if (prevKey) {
        var prevBlock = blockMapState.get(prevKey);
        if (prevBlock) {
          blockMapState.setIn([prevKey, 'nextSibling'], key);
        } else {
          // this can happen when generating random keys for fragments
          blockMapState.setIn([oldKey, 'prevSibling'], null);
        }
      }

      if (parentKey && blockMapState.get(parentKey)) {
        var parentBlock = blockMapState.get(parentKey);
        var parentChildrenList = parentBlock.getChildKeys();
        blockMapState.setIn([parentKey, 'children'], parentChildrenList.set(parentChildrenList.indexOf(block.getKey()), key));
      } else {
        // blocks will then be treated as root block nodes
        blockMapState.setIn([oldKey, 'parent'], null);

        if (lastRootBlock) {
          blockMapState.setIn([lastRootBlock.getKey(), 'nextSibling'], key);
          blockMapState.setIn([oldKey, 'prevSibling'], newKeysRef[lastRootBlock.getKey()]);
        }

        lastRootBlock = blockMapState.get(oldKey);
      }

      childrenKeys.forEach(function (childKey) {
        var childBlock = blockMapState.get(childKey);
        if (childBlock) {
          blockMapState.setIn([childKey, 'parent'], key);
        } else {
          blockMapState.setIn([oldKey, 'children'], block.getChildKeys().filter(function (child) {
            return child !== childKey;
          }));
        }
      });
    });
  }).toArray().map(function (block) {
    return [newKeysRef[block.getKey()], block.set('key', newKeysRef[block.getKey()])];
  }));
};

var randomizeContentBlockKeys = function randomizeContentBlockKeys(blockMap) {
  return OrderedMap(blockMap.toArray().map(function (block) {
    var key = generateRandomKey();
    return [key, block.set('key', key)];
  }));
};

var randomizeBlockMapKeys = function randomizeBlockMapKeys(blockMap) {
  var isTreeBasedBlockMap = blockMap.first() instanceof ContentBlockNode;

  if (!isTreeBasedBlockMap) {
    return randomizeContentBlockKeys(blockMap);
  }

  return randomizeContentBlockNodeKeys(blockMap);
};

module.exports = randomizeBlockMapKeys;

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule removeEntitiesAtEdges
 * @format
 * 
 */



var CharacterMetadata = __webpack_require__(446);

var findRangesImmutable = __webpack_require__(454);
var invariant = __webpack_require__(110);

function removeEntitiesAtEdges(contentState, selectionState) {
  var blockMap = contentState.getBlockMap();
  var entityMap = contentState.getEntityMap();

  var updatedBlocks = {};

  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var startBlock = blockMap.get(startKey);
  var updatedStart = removeForBlock(entityMap, startBlock, startOffset);

  if (updatedStart !== startBlock) {
    updatedBlocks[startKey] = updatedStart;
  }

  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var endBlock = blockMap.get(endKey);
  if (startKey === endKey) {
    endBlock = updatedStart;
  }

  var updatedEnd = removeForBlock(entityMap, endBlock, endOffset);

  if (updatedEnd !== endBlock) {
    updatedBlocks[endKey] = updatedEnd;
  }

  if (!Object.keys(updatedBlocks).length) {
    return contentState.set('selectionAfter', selectionState);
  }

  return contentState.merge({
    blockMap: blockMap.merge(updatedBlocks),
    selectionAfter: selectionState
  });
}

function getRemovalRange(characters, key, offset) {
  var removalRange;
  findRangesImmutable(characters, function (a, b) {
    return a.getEntity() === b.getEntity();
  }, function (element) {
    return element.getEntity() === key;
  }, function (start, end) {
    if (start <= offset && end >= offset) {
      removalRange = { start: start, end: end };
    }
  });
  !(typeof removalRange === 'object') ?  false ? invariant(false, 'Removal range must exist within character list.') : invariant(false) : void 0;
  return removalRange;
}

function removeForBlock(entityMap, block, offset) {
  var chars = block.getCharacterList();
  var charBefore = offset > 0 ? chars.get(offset - 1) : undefined;
  var charAfter = offset < chars.count() ? chars.get(offset) : undefined;
  var entityBeforeCursor = charBefore ? charBefore.getEntity() : undefined;
  var entityAfterCursor = charAfter ? charAfter.getEntity() : undefined;

  if (entityAfterCursor && entityAfterCursor === entityBeforeCursor) {
    var entity = entityMap.__get(entityAfterCursor);
    if (entity.getMutability() !== 'MUTABLE') {
      var _getRemovalRange = getRemovalRange(chars, entityAfterCursor, offset),
          start = _getRemovalRange.start,
          end = _getRemovalRange.end;

      var current;
      while (start < end) {
        current = chars.get(start);
        chars = chars.set(start, CharacterMetadata.applyEntity(current, null));
        start++;
      }
      return block.set('characterList', chars);
    }
  }

  return block;
}

module.exports = removeEntitiesAtEdges;

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_HistoryController__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_CollectionController__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(9);





const MODEL_HISTORY = 'history',

E_SOURCE_REQUEST_NOT_FOUND = 'Could not find request for creating history',
E_SOURCE_COLLECTION_NOT_FOUND = 'Could not find collection for creating history';

let HistoryService = {
  sanitize: function (history) {
    // wipe any file data in the history data
    if (history.dataMode === 'params' && history.data instanceof Array) {
      _.forEach(history.data, datum => {
        datum && datum.type === 'file' && (datum.value = null);
      });
    }

    // wipe any binary data
    if (history.dataMode === 'binary') {
      history.data = [];
    }
  },

  getRequestFromHistory: function (history, opts) {
    let request = _.omit(history, [
    'request',
    'createdAt']);


    if (opts && opts.retainId) {
      request.id = history.id;
    } else {
      request.id = __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].guid();
    }
    request.name = request.url;
    request.description = '';

    return request;
  },

  convertHistoryToRequests: function (historyIds) {
    return new Promise((resolve, reject) => {
      __WEBPACK_IMPORTED_MODULE_2_async___default.a.mapLimit(historyIds, 10, (historyId, next) => {
        __WEBPACK_IMPORTED_MODULE_0__controllers_HistoryController__["a" /* default */].get({ id: historyId }).
        then(historyItem => {
          next(null, historyItem);
        }).
        catch(err => {
          console.warn('Error while fetching history', err);
          next(null, null);
        });
      }, (err, historyItems) => {
        if (err) {
          return reject(err);
        }

        let requests = _.chain(historyItems).
        compact().
        map(historyItem => {
          return this.getRequestFromHistory(historyItem);
        }).
        value();

        resolve(requests);
      });
    });
  },

  getHistoryFromRequest: function (request, options) {
    let history = {
      id: __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].guid(),
      url: request.url,
      queryParams: request.queryParams,
      method: request.method,
      headerData: request.headerData,
      data: request.data,
      dataMode: request.dataMode,
      events: request.events,
      auth: request.auth,
      pathVariableData: request.pathVariableData,
      createdAt: new Date().toISOString(),
      workspace: options && options.workspace };


    // sanitize
    this.sanitize(history);

    // collection request
    if (request.id && request.collection) {
      return __WEBPACK_IMPORTED_MODULE_1__controllers_CollectionController__["a" /* default */].
      getRequest({ id: request.id }).
      then(collectionRequest => {
        if (!collectionRequest) {
          return Promise.reject(new Error(E_SOURCE_REQUEST_NOT_FOUND));
        }

        return __WEBPACK_IMPORTED_MODULE_1__controllers_CollectionController__["a" /* default */].
        getCollection({ id: collectionRequest.collection });
      }).
      then(collection => {
        if (!collection) {
          return Promise.reject(new Error(E_SOURCE_COLLECTION_NOT_FOUND));
        }

        let baseRequestUid = [collection.owner, request.id].join('-');
        history.request = baseRequestUid;
      }).
      catch(err => {
        // cannot find the request or collection.
        if (err.message === E_SOURCE_REQUEST_NOT_FOUND || err.message === E_SOURCE_COLLECTION_NOT_FOUND) {
          return;
        }

        console.error('HistoryService.getHistoryFromRequest: unknown error while creating history', err);
      }).
      then(() => {
        return history;
      });
    }

    return Promise.resolve(history);
  },

  openHistoryInTab: function (id, opts) {
    __WEBPACK_IMPORTED_MODULE_0__controllers_HistoryController__["a" /* default */].get({ id }).
    then(history => {
      if (!history) {
        // @todo Update store also. Should we just remove this one entry or re-hydrate the complete store?
        pm.alerts.error('We can\'t seem to find this history request.');
        console.warn(`HistoryService~openHistoryInTab: Object not found for id: '${id}'`);
        return;
      }
      let request = this.getRequestFromHistory(history, { retainId: true });

      if (opts && opts.newTab) {
        pm.mediator.trigger('loadRequestInNewTab', request);
      } else
      {
        pm.mediator.trigger('loadRequest', request);
      }
    }).
    catch(err => {
      console.error('Error opening history in tab', err);
    });
  } };


/* harmony default export */ __webpack_exports__["a"] = (HistoryService);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(727);


/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_requester_scss__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_requester_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_requester_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_TelemetryHelpers__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_empty_states_CrashHandler__ = __webpack_require__(193);









const Requester = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: () => __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 1442)),
  loading: () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null) });


if (false) {
  window.React = React;
} else {
  window.onbeforeunload = () => {
    return false;
  };
}

const rootEl = document.getElementsByClassName('app-root')[0];

__WEBPACK_IMPORTED_MODULE_2__init__["a" /* default */].init(() => {

  Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_empty_states_CrashHandler__["a" /* default */], null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Requester, null)),

  rootEl,
  () => {
    let loadTime = Object(__WEBPACK_IMPORTED_MODULE_5__utils_TelemetryHelpers__["a" /* getWindowLoadTime */])();
    __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('app_performance_metric', 'requester_window_loaded', null, null, { load_time: loadTime });
  });

});

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__boot_bootConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot_bootMessaging__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boot_bootWLModels__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boot_bootAppModels__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boot_bootSettings__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__boot_bootTelemetry__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boot_bootIndependentServices__ = __webpack_require__(1109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boot_bootSession__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boot_bootRequester__ = __webpack_require__(1160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__boot_booted__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__boot_bootThemeManager__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__boot_bootConfigurations__ = __webpack_require__(157);















const windowConfig = {
  process: 'requester',
  ui: true };


window.pm = {};

pm.init = done => {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig___default.a.init(windowConfig),
  __WEBPACK_IMPORTED_MODULE_2__boot_bootMessaging__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__boot_bootTelemetry__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_12__boot_bootConfigurations__["a" /* initializeConfigurations */],
  __WEBPACK_IMPORTED_MODULE_5__boot_bootSettings__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__boot_bootWLModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_8__boot_bootSession__["a" /* bootSession */],
  __WEBPACK_IMPORTED_MODULE_7__boot_bootIndependentServices__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__boot_bootAppModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_11__boot_bootThemeManager__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_9__boot_bootRequester__["a" /* default */]],
  err => {
    Object(__WEBPACK_IMPORTED_MODULE_10__boot_booted__["a" /* default */])(err);
    if (err) {
      console.error('Error in the app boot sequence', err);
    }
    done && done();
  });
};

/* harmony default export */ __webpack_exports__["a"] = (pm);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
let

BaseConfigurationService = class BaseConfigurationService extends __WEBPACK_IMPORTED_MODULE_0_events___default.a {
  _getLayerNamespaces() {
    return _.map(this.layers, layer => layer.namespace);
  }

  _getResolved(key) {
    if (this.resolvedConfiguration[key] === undefined) {
      return Promise.reject(new Error('ConfigurationService: Could not get config. Key does not exist'));
    }
    return Promise.resolve(this.resolvedConfiguration[key]);
  }

  // Single level access support
  get(key) {
    // cache hit
    if (this.resolvedConfiguration) {
      return this._getResolved(key);
    }

    // cache miss
    return this.
    resolveConfigurationLayers().
    then(resolvedConfiguration => {
      this.resolvedConfiguration = resolvedConfiguration;
      return this._getResolved(key);
    });
  }

  // @todo Lazy loading implementation
  //
  // NOTE: PREVENT MISUSE OF THIS METHOD.
  // USE THE GET METHOD TO GET SPECIFIED KEYS.
  _getAll() {
    // cache hit
    if (this.resolvedConfiguration) {
      return Promise.resolve(this.resolvedConfiguration);
    }

    // cache miss
    return this.
    resolveConfigurationLayers().
    then(resolvedConfiguration => {
      this.resolvedConfiguration = resolvedConfiguration;
      return this.resolvedConfiguration;
    });
  }

  /**
     * Resolves single level JSON
     */
  resolveConfigurationLayers() {
    return Promise.all(_.map(this.resolutionOrder, i => this.layers[i].controller.getAll())).
    then(configurations => {
      let resolvedConfiguration = {};
      _.forEach(configurations, configuration => {
        Object.assign(resolvedConfiguration, configuration);
      });
      return resolvedConfiguration;
    });
  }

  invalidateCache() {
    this.resolvedConfiguration = null;
    this.emit('changed');
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })

},[726]);