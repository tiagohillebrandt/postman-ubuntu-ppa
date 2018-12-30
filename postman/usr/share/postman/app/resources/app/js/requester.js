webpackJsonp([24],{

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(1);
var PropTypes = __webpack_require__(9);

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

/***/ 1242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1243);


/***/ }),

/***/ 1243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init__ = __webpack_require__(1251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_requester_scss__ = __webpack_require__(2269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_requester_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_requester_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_TelemetryHelpers__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_empty_states_CrashHandler__ = __webpack_require__(451);









const Requester = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: () => __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, 2575)),
  loading: () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null) });


if (false) {
  window.React = React;
} else {
  window.onbeforeunload = () => {
    return false;
  };
}

const rootEl = document.getElementsByClassName('app-root')[0];

__WEBPACK_IMPORTED_MODULE_2__init__["a" /* default */].init(err => {
  if (err) {
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_empty_states_CrashHandler__["a" /* default */], { showError: true }), rootEl);
    return;
  }
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

/***/ 1251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__boot_bootConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot_bootLogger__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boot_bootMessaging__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boot_bootWLModels__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boot_bootDBWatcher__ = __webpack_require__(1580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__boot_bootAppModels__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boot_bootSettings__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boot_bootTelemetry__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boot_bootIndependentServices__ = __webpack_require__(2236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__boot_bootSession__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__boot_bootRequester__ = __webpack_require__(2246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__boot_booted__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__boot_bootThemeManager__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__boot_bootConfigurations__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__boot_bootInAppMessage__ = __webpack_require__(2258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__boot_bootRuntimeListeners__ = __webpack_require__(2263);



















const windowConfig = {
  process: 'requester',
  ui: true };


window.pm = {};

pm.init = done => {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig___default.a.init(windowConfig),
  __WEBPACK_IMPORTED_MODULE_2__boot_bootLogger__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__boot_bootMessaging__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_8__boot_bootTelemetry__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_14__boot_bootConfigurations__["a" /* initializeConfigurations */],
  __WEBPACK_IMPORTED_MODULE_7__boot_bootSettings__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__boot_bootWLModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_10__boot_bootSession__["a" /* bootSession */],
  __WEBPACK_IMPORTED_MODULE_9__boot_bootIndependentServices__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__boot_bootAppModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_16__boot_bootRuntimeListeners__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__boot_bootDBWatcher__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_13__boot_bootThemeManager__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_15__boot_bootInAppMessage__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_11__boot_bootRequester__["a" /* default */]],
  err => {
    Object(__WEBPACK_IMPORTED_MODULE_12__boot_booted__["a" /* default */])(err);
    if (err) {
      console.error('Error in the app boot sequence', err);
    }
    done && done(err);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (pm);

/***/ }),

/***/ 1580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_DBResourceWatcher__ = __webpack_require__(863);


/**
                                                                           *
                                                                           */
function bootWLModels(cb) {
  __WEBPACK_IMPORTED_MODULE_0__modules_services_DBResourceWatcher__["a" /* default */].subscribeToEventBus();
  pm.logger.info('DBWatcher~boot - Success');
  cb();
}

/* harmony default export */ __webpack_exports__["a"] = (bootWLModels);

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(35);
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

/***/ }),

/***/ 2236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_PmConsole__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_Shortcuts__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ToastManager__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_helpers_OAuth2Tokens__ = __webpack_require__(2238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_cookies_CookieManager__ = __webpack_require__(2239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_helpers_OAuth2Manager__ = __webpack_require__(2240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_ElectronContextMenu__ = __webpack_require__(2243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_collections_CollectionClipboard__ = __webpack_require__(2245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_Toasts__ = __webpack_require__(652);











/**
                                                *
                                                * @param {*} cb
                                                */
function bootIndependentServices(cb) {
  _.assign(window.pm, {
    toasts: __WEBPACK_IMPORTED_MODULE_9__models_Toasts__,
    toastManager: new __WEBPACK_IMPORTED_MODULE_3__models_ToastManager__["a" /* default */](),
    cookieManager: new __WEBPACK_IMPORTED_MODULE_5__models_cookies_CookieManager__["a" /* default */](),
    oAuth2Tokens: new __WEBPACK_IMPORTED_MODULE_4__models_helpers_OAuth2Tokens__["a" /* default */](),
    oAuth2Manager: new __WEBPACK_IMPORTED_MODULE_6__models_helpers_OAuth2Manager__["a" /* default */](),
    contextMenuManager: new __WEBPACK_IMPORTED_MODULE_7__controllers_ElectronContextMenu__["a" /* default */](),
    clipboard: new __WEBPACK_IMPORTED_MODULE_8__models_collections_CollectionClipboard__["a" /* default */](),
    console: new __WEBPACK_IMPORTED_MODULE_1__models_PmConsole__["a" /* default */]('builder') });

  pm.logger.info('IndependentServices~boot - Success');
  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootIndependentServices);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_backbone__);




var OAuth2Token = __WEBPACK_IMPORTED_MODULE_2_backbone___default.a.Model.extend({
  defaults: function () {
    return {
      'id': '',
      'name': 'OAuth2 Token',
      'access_token': '',
      'expires_in': 0,
      'timestamp': 0 };

  } });


var OAuth2Tokens = __WEBPACK_IMPORTED_MODULE_2_backbone___default.a.Collection.extend({
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

/***/ 2239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_async__);



const session = __webpack_require__(17).remote.session;

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
          !this.cookies[domain][cookie.name] && (this.cookies[domain][cookie.name] = []);
          this.cookies[domain][cookie.name].push(cookie);
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
        return;
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
        _.isEqual(cookie.domain, domain) && _.isEqual(cookie.name, cookieName) && this.deleteCookie(domain, cookieName, cookie.path, error => {
          error && _.isFunction(callback) && callback(error);

          this.addSingleCookie(newCookie.url, newCookie.domain, newCookie, error => {
            _.isFunction(callback) && callback(error);
          });
        });
      });
    });
  }

  deleteDomain(domain, callback) {
    let cookiesForDomain = this.cookies[domain],
    cookiesToDelete = _.flatMap(cookiesForDomain); // take the values and flatten them

    // The delete single cookie logic deletes multiple cookies with same name
    // and then adds back the ones which shouldn't have been deleted. So we should do this
    // in series, otherwise because of concurrency we will end up with some cookies non-deleted
    __WEBPACK_IMPORTED_MODULE_1_async___default.a.eachSeries(cookiesToDelete, (cookie, next) => {
      this.deleteCookie(domain, cookie.name, cookie.path, next);
    }, () => {
      // wait for all cookies to be deleted, then delete the domain too from UI
      delete this.cookies[domain];
      this.loadCookies(() => {
        _.isFunction(callback) && callback();
      });
    });
  }

  deleteCookie(domain, cookieName, path, callback) {
    let cookieStore = session.fromPartition(__WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].getCookiePartition()).cookies,
    url = domain + path,
    matchingCookies = _.get(this.cookies, [domain[0] === '.' ? domain.slice(1) : domain, cookieName]);

    if (!matchingCookies) {
      return;
    }

    if (url[0] === '.') {
      url = 'www' + url;
    }

    var httpUrl = url,
    httpsUrl = url,
    index = _.findIndex(matchingCookies, { path });

    if (index === -1) {
      _.isFunction(callback) && callback();
      return;
    }

    if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
      httpUrl = 'http://' + url;
      httpsUrl = 'https://' + url;
    }

    cookieStore.remove(httpUrl, cookieName, error => {
      if (error) {
        _.isFunction(callback) && callback(error);
        return;
      }

      cookieStore.remove(httpsUrl, cookieName, error => {
        if (error) {
          _.isFunction(callback) && callback(error);
          return;
        }

        if (_.size(matchingCookies) <= 1) {
          this.loadCookies(() => {
            _.isFunction(callback) && callback();
          });
          return;
        }

        // If there were multiple cookies with same name & different paths,
        // this would have deleted all those cookies, adding them back
        matchingCookies.splice(index, 1); // remove the one which was intended to be deleted
        __WEBPACK_IMPORTED_MODULE_1_async___default.a.each(matchingCookies, (cookie, next) => {
          cookie.url = cookie.domain + cookie.path;
          cookie.secure ? cookie.url = 'https://' + cookie.url : cookie.url = 'http://' + cookie.url;
          this.addSingleCookie(cookie.url, cookie.domain, cookie, next);
        }, () => {
          this.loadCookies(() => {
            _.isFunction(callback) && callback();
          });
        });
      });
    });
  }};



/* harmony default export */ __webpack_exports__["a"] = (CookieManager);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OAuth2TokenFetcher__ = __webpack_require__(2241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_backbone__);




var DEFAULT_TOKEN_NAME = 'OAuth2 Token',
OAuth2Manager = __WEBPACK_IMPORTED_MODULE_2_backbone___default.a.Model.extend({
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

/***/ 2241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ModelToSdkTransformer__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_postman_collection__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__ = __webpack_require__(2242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_backbone__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_VariableSessionHelper__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_VariableSessionService__ = __webpack_require__(203);










/**
                                                                                                       * Interface that talks to {@link OAuth2TokenRequester} for completing OAuth 2.0 token generation flows.
                                                                                                       *
                                                                                                       * @class OAuth2TokenFetcher
                                                                                                       */
var OAuth2TokenFetcher = __WEBPACK_IMPORTED_MODULE_6_backbone___default.a.Model.extend( /** @lends OAuth2TokenFetcher.prototype */{
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

  /**
      * Sends IPC event to start OAuth 2.0 token request flow.
      * Also takes care or resolving environment variables in params.
      * @param {Object} params unresolved auth definition
      *
      * @fires IPC#oauth2GetNewToken
      */
  startAuthorization: function (params) {
    let environmentId = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id,
    globalsId = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore').id,
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id;

    Object(__WEBPACK_IMPORTED_MODULE_8__modules_services_VariableSessionService__["e" /* getVariableSessionMap */])({ environmentId, globalsId, workspaceId }).
    then(variablesMap => {
      let authParams = {
        grant_type: _.clone(params.grant_type),
        access_token_url: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.access_token_url), variablesMap),
        authorization_url: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.authorization_url), variablesMap),
        client_authentication: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.client_authentication), variablesMap),
        client_id: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.client_id), variablesMap),
        client_secret: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.client_secret), variablesMap),
        password: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.password), variablesMap),
        redirect_uri: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.redirect_uri), variablesMap) || '/',
        scope: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.scope), variablesMap),
        state: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.state), variablesMap),
        username: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.username), variablesMap) };


      __WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].send('oauth2GetNewToken', authParams,
      {
        useSystemProxy: pm.settings.getSetting('useSystemProxy'),
        proxies: pm.proxyListManager.globalProxies.toJSON(),
        certificates: __WEBPACK_IMPORTED_MODULE_1__utils_ModelToSdkTransformer__["a" /* default */].getClientSslCerts(pm.certificateManager) },

      { cookiePartitionId: __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].getCookiePartition() });

    });
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
      pm.toasts.error('Could not complete OAuth 2.0 login. Check Postman Console for more details.');

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

/***/ 2242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection__ = __webpack_require__(70);
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

/***/ 2243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronContextMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_DraftJsHelper__ = __webpack_require__(2244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_VariableSessionService__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_VariableSessionHelper__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_EditorService__ = __webpack_require__(94);









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
    this.Remote = __webpack_require__(17).remote;
    this.Menu = this.Remote.Menu;
    this.MenuItem = this.Remote.MenuItem;

    this.currentSelection = '';
    this.currentAceSelection = '';
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
    this.currentSelection = window.getSelection().toString();
    this.activeComponent = component;
  }

  buildMenu(e) {
    let menu = new this.Menu(),
    isInput = _.get(e, 'target.nodeName') === 'INPUT',
    hasAutoSuggest = _.get(this.activeComponent, 'refs.autoSuggest') ? true : false,
    isAceEditor = _.get(e, 'target.className') === 'ace_text-input',
    requesterTab,
    selectedText = this.currentAceSelection || this.currentSelection; // Fetching the non empty string

    // Resetting values so that context menu is not triggered on right clicking anywhere on the screen
    this.currentSelection = '';
    this.currentAceSelection = '';

    if (_.get(e, 'target.closest') && (requesterTab = e.target.closest('.requester-tab'))) {

      this.buildTabMenu(menu, _.get(requesterTab, 'dataset.tabId'));
    } else
    if (!isInput && _.get(e, 'target.closest') && (e.target.closest('.collection-sidebar-list-item') ||
    e.target.closest('.collection-browser-list-item__folder') ||
    e.target.closest('.collection-browser-list-item__request'))) {
      return null;
    } else
    if (_.get(e, 'target.classList')) {
      if (e.target.classList.contains('requester-tab')) {
        this.buildTabMenu(menu, _.get(e.target, 'dataset.tabId'));
      } else
      if (e.target.classList.contains('requester-tab__name')) {
        this.buildTabMenu(menu, _.get(e.target, 'dataset.tabId'));
      }
    }

    if (!_.isEmpty(selectedText)) {
      this.buildEnvironmentMenu(menu, selectedText);
      this.buildGlobalMenu(menu, selectedText);
      this.buildGenericMenu(menu);
      this.buildEncodeDecodeMenu(menu);
    }

    // Display generic input menu for input
    else if (isInput) {
        this.buildGenericMenu(menu);
      } else

      if (hasAutoSuggest || isAceEditor) {
        this.buildGenericMenu(menu);
        this.buildEncodeDecodeMenu(menu);
        this.activeComponent = null;
      }

    return menu;
  }

  buildTabMenu(menu, id) {

    // dont need isPreview, duplicate can be done for all cases
    menu.append(new this.MenuItem({
      label: 'Duplicate Tab',
      click: () => {
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].duplicate({ id: id });
      } }));

    menu.append(new this.MenuItem({ type: 'separator' }));

    menu.append(new this.MenuItem({
      label: 'Close',
      accelerator: 'CommandOrControl+W',
      click: () => {
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].close({ id: id });
      } }));

    menu.append(new this.MenuItem({
      label: 'Force Close',
      accelerator: 'CommandOrControl+Alt+W',
      click: () => {
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].close({ id: id }, { force: true });
      } }));

    menu.append(new this.MenuItem({
      label: 'Close Other Tabs',
      click: () => {
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].closeAllButCurrent();
      } }));

    menu.append(new this.MenuItem({
      label: 'Close All Tabs',
      click: () => {
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].closeAll();
      } }));

    menu.append(new this.MenuItem({
      label: 'Force Close All Tabs',
      click: () => {
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].requestForceCloseAll();
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

  buildEnvironmentMenu(menu, selectionText) {
    let environment = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore');
    if (!environment || _.isEmpty(environment.values)) {
      return;
    }
    let environmentName = environment.name;
    let submenu = new this.Menu();

    let environmentVars = _.reject(environment.values, { enabled: false }),
    environmentKeys = _.map(environmentVars, 'key');

    _.forEach(environmentKeys, (key, index) => {
      submenu.append(new this.MenuItem({
        label: key,
        click: () => {this.updateEnvironmentVariableFromContextMenu(index, selectionText);} }));

    });

    menu.append(new this.MenuItem({
      label: 'Set: ' + environmentName,
      type: 'submenu',
      submenu: submenu }));

  }

  buildGlobalMenu(menu, selectionText) {
    let globals = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore');
    if (!globals || _.isEmpty(globals.values)) {
      return;
    }
    let submenu = new this.Menu();

    let globalVars = _.reject(globals.values, { enabled: false });
    let globalKeys = _.map(globalVars, 'key');

    _.forEach(globalKeys, (key, index) => {
      submenu.append(new this.MenuItem({
        label: key,
        click: () => {this.updateGlobalVariableFromContextMenu(index, selectionText);} }));

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
      selectionObj = __WEBPACK_IMPORTED_MODULE_0__utils_DraftJsHelper__["a" /* default */].getAutoSuggestSelectionRange(editorState);
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
      selectionObj = __WEBPACK_IMPORTED_MODULE_0__utils_DraftJsHelper__["a" /* default */].getAutoSuggestSelectionRange(editorState);
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

  updateGlobalVariableFromContextMenu(index, selectionText) {
    let model = 'globals',
    modelId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore').id,
    activeWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id,
    sessionId = Object(__WEBPACK_IMPORTED_MODULE_4__utils_VariableSessionHelper__["b" /* getSessionId */])(model, modelId, activeWorkspaceId);

    Object(__WEBPACK_IMPORTED_MODULE_3__modules_services_VariableSessionService__["d" /* getSessionFor */])(sessionId).
    then(session => {
      if (!session) {
        return;
      }

      let values = _.clone(session.values),
      enabledVariables = _.reject(values, { enabled: false });

      enabledVariables[index].value = selectionText;

      let data = {
        id: sessionId,
        model: model,
        modelId: modelId,
        workspace: activeWorkspaceId,
        values: values };


      let updateSessionEvent = Object(__WEBPACK_IMPORTED_MODULE_5__modules_model_event__["a" /* createEvent */])('update', 'variablesession', data);
      __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('session', 'user_edit', model);
      return Object(__WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__["a" /* default */])(updateSessionEvent);
    }).
    catch(err => {
      console.error('Failed to update global value through context menu', err);
      pm.toasts.error('Something went wrong. Please check DevTools.');
    });
  }

  updateEnvironmentVariableFromContextMenu(index, selectionText) {
    let model = 'environment',
    modelId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id,
    activeWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id,
    sessionId = Object(__WEBPACK_IMPORTED_MODULE_4__utils_VariableSessionHelper__["b" /* getSessionId */])(model, modelId, activeWorkspaceId);

    Object(__WEBPACK_IMPORTED_MODULE_3__modules_services_VariableSessionService__["d" /* getSessionFor */])(sessionId).
    then(session => {
      if (!session) {
        return;
      }

      let values = _.clone(session.values),
      enabledVariables = _.reject(values, { enabled: false });

      enabledVariables[index].value = selectionText;

      let data = {
        id: sessionId,
        model: model,
        modelId: modelId,
        workspace: activeWorkspaceId,
        values: values };


      let updateSessionEvent = Object(__WEBPACK_IMPORTED_MODULE_5__modules_model_event__["a" /* createEvent */])('update', 'variablesession', data);
      __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('session', 'user_edit', model);
      return Object(__WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__["a" /* default */])(updateSessionEvent);
    }).
    catch(err => {
      console.error('Failed to update session through context menu', err);
      pm.toasts.error('Something went wrong. Please check DevTools.');
    });
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_draft_js_lib_getContentStateFragment__ = __webpack_require__(400);
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

/***/ 2245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionClipboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_pipelines_user_action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__ = __webpack_require__(52);

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

/***/ 2246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootStore__ = __webpack_require__(2247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootShortcuts__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootSyncProxy__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_UIZoom__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_ProxyListManager__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_AppUpdateNotifier__ = __webpack_require__(2249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_tcp_ElectronTCPReader__ = __webpack_require__(2251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_requests_CertificateManager__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_ProtocolHandler__ = __webpack_require__(2252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_XPaths_XPathManager__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_ModelEventToUIEventService__ = __webpack_require__(2253);













/**
                                                                                     *
                                                                                     * @param {*} cb
                                                                                     */
function bootRequester(cb) {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_1__bootStore__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__bootShortcuts__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__bootSyncProxy__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_9__models_ProtocolHandler__["a" /* default */].initialize],
  err => {
    _.assign(window.pm, {
      proxyListManager: new __WEBPACK_IMPORTED_MODULE_5__controllers_ProxyListManager__["a" /* default */](), // [settings]
      certificateManager: new __WEBPACK_IMPORTED_MODULE_8__models_requests_CertificateManager__["a" /* default */](), // [settings]
      uiZoom: new __WEBPACK_IMPORTED_MODULE_4__controllers_UIZoom__["a" /* default */](), // [settings]
      updateNotifier: new __WEBPACK_IMPORTED_MODULE_6__models_AppUpdateNotifier__["a" /* default */](), // [appwindow, settings, app]
      tcpReader: new __WEBPACK_IMPORTED_MODULE_7__models_tcp_ElectronTCPReader__["a" /* default */](), // [settings, appwindow]
      xPathManager: __WEBPACK_IMPORTED_MODULE_10__components_base_XPaths_XPathManager__["a" /* default */] });


    __WEBPACK_IMPORTED_MODULE_11__services_ModelEventToUIEventService__["a" /* default */].initialize();
    pm.appWindow.sendToElectron({ event: 'postmanInitialized' }); // Initialize protocol handline need revisit

    err ? pm.logger.error('Requester~boot - Failed', err) : pm.logger.info('Requester~boot - Success');

    return cb && cb(err);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (bootRequester);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_store_handler__ = __webpack_require__(2248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_model_event__ = __webpack_require__(5);



const STORE_HANDLER_TIMEOUT = 15 * 1000; // 15 seconds

/**
 *
 */
function bootStore(cb) {

  Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["j" /* subscribeToQueue */])(__WEBPACK_IMPORTED_MODULE_0__stores_store_handler__["a" /* handleModelEventOnStore */], STORE_HANDLER_TIMEOUT);
  pm.logger.info('Store~boot - Success');
  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootStore);

/***/ }),

/***/ 2248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleModelEventOnStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_model_event__ = __webpack_require__(5);



/**
                                                                                                                     *
                                                                                                                     * @param {Object} event
                                                                                                                     */
function handleModelEventOnStore(event, callback) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["u" /* transaction */])(function () {
      // listeners are synchronous anyway
      _.forEach(matchedListeners, function invokeStoreListener(listener) {
        listener && listener();
      });
    });

    callback();
  });
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_AppSettingsDefaults__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_HttpService__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_ShellHelper__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_domain__ = __webpack_require__(2250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_domain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_domain__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_InfobarConstants__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controllers_Infobar__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_backbone__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_backbone__);













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
  primaryAction: {
    label: 'Restart',
    onClick: () => {
      pm.updateNotifier.applyUpdate();
      __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'app_restart', 'restart_banner');
    } },

  onDismiss: function (params) {
    __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'dismiss_update_restart_banner');
  } };


var semver = __webpack_require__(394),
AppUpdateNotifier = __WEBPACK_IMPORTED_MODULE_11_backbone___default.a.Model.extend({
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
      pm.toasts.success('Successfully updated to version ' + currentVersion);

      // Send analytics event
      __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'updated', null, null, null, { noActiveWorkspace: true });

      // Notify update information to the server.
      __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__["a" /* default */].
      get().
      then((user = {}) => {
        Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["n" /* NotifyServerOfVersionChange */])(user, currentVersion + '-' + currentPlatform);
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

/***/ 2250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file should be ES5 compatible
/* eslint prefer-spread:0, no-var:0, prefer-reflect:0, no-magic-numbers:0 */


module.exports = function () {
	// Import Events
	var events = __webpack_require__(35);

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

/***/ 2251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__ = __webpack_require__(104);




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
        __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__["a" /* default */].
        get().
        then(user => {
          if (!user) {
            console.error(new Error('ElectronTCPReader: Could not create history. Current user is missing.'));
            return;
          }

          let currentDate = new Date(),
          workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace,
          historyCreateEvent = Object(__WEBPACK_IMPORTED_MODULE_2__modules_model_event__["a" /* createEvent */])(
          'create',
          'history',
          _.assign({}, request, { id: __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].guid(), createdAt: currentDate.toISOString(), workspace, owner: user.id, lastUpdatedBy: user.id }));


          return Object(__WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__["a" /* default */])(historyCreateEvent).
          catch(e => {console.log('Error in creating history through proxy', e);});
        });
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

/***/ 2252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_conversion_promisifiedConverter__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_Importer__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_UserController__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_controllers_WindowController__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_controllers_WindowController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__common_controllers_WindowController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(16);







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
            pm.toasts.error('We can\'t seem to find the collection you\'re trying to import.');
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

/***/ 2253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UIEventService__ = __webpack_require__(95);





let allowedEvents = [
'created', 'updated', 'deleted', 'duplicated', 'shared', 'favorited', 'unfavorited',
'joined', 'left', 'added_dependencies', 'removed_dependencies', 'requestDispatched', 'responseMetaReceived',
'authenticated'],

modelEventHandlers = {
  collection: function (eventProps) {
    switch (eventProps.name) {
      case 'created':
        return createPayload('collectionCreated', eventProps.data);
      case 'duplicated':
        return createPayload('collectionDuplicated', eventProps.data);
      case 'shared':
        return createPayload('collectionShared', eventProps.data);
      case 'favorited':
        return createPayload('collectionFavorited', eventProps.data);
      case 'unfavorited':
        return createPayload('collectionUnfavorited', eventProps.data);
      case 'deleted_deep':
        return createPayload('collectionDeleted', eventProps.data);}

  },

  environment: function (eventProps) {
    switch (eventProps.name) {
      case 'created':
        return createPayload('environmentCreated', eventProps.data);
      case 'duplicated':
        return createPayload('environmentDuplicated', eventProps.data);
      case 'deleted':
        return createPayload('environmentDeleted', eventProps.data);}

  },

  folder: function (eventProps) {
    switch (eventProps.name) {
      case 'created':
        return createPayload('folderCreated', eventProps.data);
      case 'duplicated':
        return createPayload('folderDuplicated', eventProps.data);
      case 'deleted_deep':
        return createPayload('folderDeleted', eventProps.data);}

  },

  headerpreset: function (eventProps) {
    switch (eventProps.name) {
      case 'created':
        return createPayload('headerpresetCreated', eventProps.data);
      case 'deleted':
        return createPayload('headerpresetDeleted', eventProps.data);}

  },

  history: function (eventProps) {
    switch (eventProps.name) {
      case 'created':
        return createPayload('historyCreated', eventProps.data);
      case 'deleted':
        return createPayload('historyDeleted', eventProps.data);}

  },

  response: function (eventProps) {
    switch (eventProps.name) {
      case 'created':
        return createPayload('exampleCreated', eventProps.data);
      case 'deleted':
        return createPayload('exampleDeleted', eventProps.data);}

  },

  request: function (eventProps) {
    switch (eventProps.name) {
      case 'created':
        return createPayload('requestCreated', eventProps.data);
      case 'duplicated':
        return createPayload('requestDuplicated', eventProps.data);
      case 'deleted':
        return createPayload('requestDeleted', eventProps.data);}

  },

  workspace: function (eventProps) {
    switch (eventProps.name) {
      case 'created':
        return createPayload('workspaceCreated', eventProps.data);
      case 'deleted':
        return createPayload('workspaceDeleted', eventProps.data);
      case 'added_dependencies':
        return createPayload('workspaceDependenciesAdded', eventProps.data);
      case 'removed_dependencies':
        return createPayload('workspaceDependenciesRemoved', eventProps.data);
      case 'joined':
        return createPayload('workspaceJoined', eventProps.data);
      case 'left':
        return createPayload('workspaceLeft', eventProps.data);}

  },

  monitor: function (eventProps) {
    switch (eventProps.name) {
      case 'created':
        return createPayload('monitorCreated', eventProps.data);
      case 'deleted':
        return createPayload('monitorDeleted', eventProps.data);}

  },

  mock: function (eventProps) {
    switch (eventProps.name) {
      case 'created':
        return createPayload('mockCreated', eventProps.data);
      case 'deleted':
        return createPayload('mockDeleted', eventProps.data);}

  },

  requestexecution: function (eventProps) {
    switch (eventProps.name) {
      case 'requestDispatched':
        return createPayload('requestSent', eventProps.data);
      case 'responseMetaReceived':
        return createPayload('responseMetaReceived', eventProps.data);}

  },

  authentication: function (eventProps) {
    switch (eventProps.name) {
      case 'authenticated':
        return createPayload('userSignedIn', eventProps.data);}

  } };


const ERROR_UNSUPPORTED_ACTOR = 'UNSUPPORTED_ACTOR';

/**
                                                      * @param name {String} - Name of the event
                                                      * @param data {any} - Data associated with the event
                                                      * @param meta {object} - Any meta information associated with the event
                                                      */
function createPayload(name, data, meta) {
  return {
    name,
    data,
    meta };

}

/**
   * filter non user events
   *
   * @param {any} event
   * @param {any} callback
   */
function filterUnsupportedEvents(event, callback) {
  let actor = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["c" /* getActor */])(event),
  actorType = actor && actor.type;

  // whitelist only USER actions
  if (!_.includes(['USER'], actorType)) {
    callback(new Error(ERROR_UNSUPPORTED_ACTOR));
    return;
  }

  callback(null, event);
}

/**
   * build analytics payloads from event
   *
   * @param {any} event
   * @param {any} callback
   */
function buildUIEventFromModelEvent(event, callback) {
  eventTransformer(event, (err, payloads) => {
    if (err) {
      callback(err);
      return;
    }

    callback(null, payloads);
  });
}

/**
   * queue analytic events
   *
   * @param {any} payloads
   * @param {any} callback
   */
function emitUIEvent(events, callback) {
  // bail if no payload to queue
  if (_.isEmpty(events)) {
    return callback(null);
  }

  _.each(events, event => {
    __WEBPACK_IMPORTED_MODULE_2__UIEventService__["a" /* default */].publish(event.name, event.data, event.meta);
  });
  callback(null);
}

/**
   * Job of this function is to transform events from different event buses to UIEvents
   * e.g model-event, postman-runtime.
   *
   *
   * @param event {Object} - model event
   * @param callback {function}
   */
function eventTransformer(event, callback) {
  if (!event) {
    return callback();
  }

  let payloads = [];

  Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["i" /* processEvent */])(event, allowedEvents, function (event, cb) {
    let namespace = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["g" /* getEventNamespace */])(event),
    name = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["f" /* getEventName */])(event),
    data = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["d" /* getEventData */])(event),
    meta = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["e" /* getEventMeta */])(event),
    handler = modelEventHandlers[namespace],
    eventProps = {
      data: data,
      name: name,
      meta: meta || {} },

    eventPayload;

    // this should never happen
    if (!handler) {
      return cb();
    }

    // convert events to payloads and accumulate
    eventPayload = handler(eventProps);
    if (!_.isEmpty(eventPayload)) {
      payloads.push(eventPayload);
    }

    return cb();
  }, function () {
    callback && callback(null, payloads);
  });
}

/**
   * handle broadcast bus event
   *
   * @param {any} event
   */
function handleBusEvent(event) {
  __WEBPACK_IMPORTED_MODULE_1_async___default.a.waterfall([
  function (callback) {
    callback(null, event);
  },

  filterUnsupportedEvents,
  buildUIEventFromModelEvent,
  emitUIEvent],
  function (err) {
    err &&
    !_.includes([ERROR_UNSUPPORTED_ACTOR], err && err.message) &&
    console.error(err);
  });
}

/**
   * @param {any} event
   */
function handleRuntimeBusEvent(event) {
  __WEBPACK_IMPORTED_MODULE_1_async___default.a.waterfall([
  function (callback) {
    callback(null, event);
  },
  buildUIEventFromModelEvent,
  emitUIEvent],
  function (err) {
    err &&
    !_.includes([ERROR_UNSUPPORTED_ACTOR], err && err.message) &&
    console.error(err);
  });
}

function handleAuthHandlerEvents(event) {
  __WEBPACK_IMPORTED_MODULE_1_async___default.a.waterfall([
  function (callback) {
    callback(null, event);
  },
  buildUIEventFromModelEvent,
  emitUIEvent],
  function (err) {
    err &&
    !_.includes([ERROR_UNSUPPORTED_ACTOR], err && err.message) &&
    console.error(err);
  });
}


/**
   *
   */
/* harmony default export */ __webpack_exports__["a"] = ({
  initialize() {
    let modelEventChannel = pm.eventBus.channel('model-events'),
    runtimeEventChannel = pm.eventBus.channel('postman-runtime'),
    authHandlerEventChannel = pm.eventBus.channel('auth-handler-events');
    modelEventChannel.subscribe(handleBusEvent);
    runtimeEventChannel.subscribe(handleRuntimeBusEvent);
    authHandlerEventChannel.subscribe(handleAuthHandlerEvents);
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__in_app_messaging_InAppController__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__in_app_messaging_message_transformer__ = __webpack_require__(2259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_APIService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_HttpService__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_postman_collection__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_UIEventService__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_NotificationRequestActionService__ = __webpack_require__(2260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controllers_PopoverController__ = __webpack_require__(2261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_ExtractDomainFromURLUtil__ = __webpack_require__(2262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_services_LessonAPIService__ = __webpack_require__(524);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};












/**
                                                                              * @param {*} cb
                                                                              *
                                                                              */
function bootInAppMessaging(cb) {
  /*
                                 * Consumer of in-app messages need to register its ownn handlers with in-app
                                 * message controller. The controller just calls your handlers whenever it want to
                                 * perform different tasks. This gives the consumer flexibility and keeps the controller
                                 * unopinionated about what you should do when certain message needs to be shown.
                                 */
  Object(__WEBPACK_IMPORTED_MODULE_0__in_app_messaging_InAppController__["b" /* registerHandlers */])({

    messageHandlers: {
      toast: message => {
        let options = Object(__WEBPACK_IMPORTED_MODULE_2__in_app_messaging_message_transformer__["d" /* transformForToast */])(message);
        pm.toasts[options.level](options.text, options);
      },
      banner: message => {
        __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__["a" /* default */].add(Object(__WEBPACK_IMPORTED_MODULE_2__in_app_messaging_message_transformer__["b" /* transformForBanner */])(message));
        __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__["a" /* default */].show();
      },
      text: message => {
        Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('TextMessageStore').addNotification(message);
      },

      popover: message => {

        Object(__WEBPACK_IMPORTED_MODULE_9__controllers_PopoverController__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__in_app_messaging_message_transformer__["c" /* transformForPopover */])(message), _.get(message, 'message.target'));
      },

      backgroundPush: message => {
        let { action } = Object(__WEBPACK_IMPORTED_MODULE_2__in_app_messaging_message_transformer__["a" /* transformForBackgroundPush */])(message);
        action && action();
      } },


    actionHandlers: {
      appAPI: data => {
        __WEBPACK_IMPORTED_MODULE_7__services_UIEventService__["a" /* default */].publish(data.action);
      },

      openURL: data => {
        pm.app.openExternalLink(data.action);
      },

      openAuthenticatedURL: data => {
        Object(__WEBPACK_IMPORTED_MODULE_4__modules_services_APIService__["u" /* openAuthenticatedRoute */])(data.action);
      },

      makeRequest: (data, notification) => {

        let user = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
        accessToken = _.get(user, 'auth.access_token'),
        string = __WEBPACK_IMPORTED_MODULE_6_postman_collection__["Property"].replaceSubstitutions(JSON.stringify(data.request), notification.variables),
        request = JSON.parse(string),
        headers = request.headers || {},
        domain = Object(__WEBPACK_IMPORTED_MODULE_10__utils_ExtractDomainFromURLUtil__["a" /* default */])(request.url),
        queryParamMap = {
          showNextLesson: [{
            key: '__skill_sdk_version',
            value: __WEBPACK_IMPORTED_MODULE_11__modules_services_LessonAPIService__["a" /* SKILL_SDK_VERSION */] }] };



        if (_.includes(pm.trustedDomains, domain)) {
          headers = _extends({},
          headers, {
            'x-access-token': accessToken });

        }

        let url = new URL(request.url);

        if (queryParamMap[data.action]) {
          let queryParameters = queryParamMap[data.action];
          _.forEach(queryParameters, queryParam => {
            url.searchParams.append(queryParam.key, queryParam.value);
          });
        }

        __WEBPACK_IMPORTED_MODULE_5__utils_HttpService__["a" /* default */].request(url.href, {
          method: request.method,
          headers,
          body: JSON.stringify(request.body) }).
        then(({ body }) => {
          Object(__WEBPACK_IMPORTED_MODULE_8__services_NotificationRequestActionService__["a" /* default */])(data, body);
        });
      } } });


  Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('NotificationStore');
  pm.logger.info('InAppMessaging~boot - Success');
  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootInAppMessaging);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["d"] = transformForToast;
/* harmony export (immutable) */ __webpack_exports__["b"] = transformForBanner;
/* harmony export (immutable) */ __webpack_exports__["c"] = transformForPopover;
/* harmony export (immutable) */ __webpack_exports__["a"] = transformForBackgroundPush;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_UIEventService__ = __webpack_require__(95);


/**
                                                          * @param {*} message - message sent received from InAppController
                                                          */
function transformForToast(message) {
  return {
    level: _.get(message, 'tag.level'),
    title: _.get(message, 'message.title'),
    text: _.get(message, 'message.text'),
    primaryAction: _.get(message, 'message.buttons.primary'),
    secondaryAction: _.get(message, 'message.buttons.secondary'),
    isDismissable: !_.get(message, 'dismiss.disabled'),
    timeout: _.get(message, 'dismiss.auto'),
    onDismiss: _.get(message, 'dismiss.onDismiss'),
    dismissEvent: _.get(message, 'dismiss.event') };

}

/**
   * @param {*} message - message sent received from InAppController
   */
function transformForBanner(message) {
  return {
    message: _.get(message, 'message.text'),
    priority: _.get(message, 'message.priority') || 100,
    type: _.get(message, 'tag.level'),
    primaryAction: _.get(message, 'message.buttons.primary'),
    secondaryAction: _.get(message, 'message.buttons.secondary'),
    isDismissable: !_.get(message, 'dismiss.disabled'),
    onDismiss: _.get(message, 'dismiss.onDismiss'),
    dismissEvent: _.get(message, 'dismiss.event') };

}

/**
   * @param {*} message - message sent received from InAppController
   */
function transformForPopover(message) {
  return {
    show: true,
    immediate: true,
    title: _.get(message, 'message.title'),
    placement: _.get(message, 'message.position', 'bottom-left'),
    allowTargetClick: _.get(message, 'message.allowTargetClick'),
    message: _.get(message, 'message.text', ''),
    primaryAction: _.get(message, 'message.buttons.primary'),
    secondaryAction: _.get(message, 'message.buttons.secondary'),
    isDismissable: !_.get(message, 'dismiss.disabled'),
    meta: _.get(message, 'message.meta'),
    onDismiss: _.get(message, 'dismiss.onDismiss'),
    dismissEvent: _.get(message, 'dismiss.event') };

}

/**
   * @param {*} message - message sent received from InAppController
   */
function transformForBackgroundPush(message) {
  return {
    action: _.get(message, 'message.buttons.primary.onClick') };

}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIEventService__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lessons_LessonManager__ = __webpack_require__(710);



/* harmony default export */ __webpack_exports__["a"] = ((buttonAction, responseBody) => {
  let action = buttonAction.action;
  if (action === 'showNextLesson' && responseBody.data) {
    return __WEBPACK_IMPORTED_MODULE_1__lessons_LessonManager__["a" /* default */].startLesson(responseBody.data);
  }
  __WEBPACK_IMPORTED_MODULE_0__UIEventService__["a" /* default */].publish(action, responseBody);
});

/***/ }),

/***/ 2261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_UIEventService__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_XPaths_XPathManager__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_UIEventConstants__ = __webpack_require__(251);





const MAX_TIMEOUT = 60000;

let xPathUnregisterHandler;

/**
                             * It is used to show popover for a given target xPath path.
                             * If the target xPath is visible, it directly shows the Popover otherwise
                             * it attaches a listener and waits for xPathRegistered event to trigger for the provided xPath.
                             *
                             * Also this xPath might get hidden due to some user interaction. Therefore as soon
                             * as we show the Popover we attach a listener for xPathUnregistered event, which is used to
                             * hide the popover.
                             *
                             * @param message {Object} - Popover message to display
                             * @param targetPath {String} - xPath of the target
                             */
/* harmony default export */ __webpack_exports__["a"] = ((message, targetPath) => {
  let triggerPopover = target => {
    pm.mediator.trigger('showPopover', { target }, message);
    xPathUnregisterHandler && xPathUnregisterHandler();
    xPathUnregisterHandler = __WEBPACK_IMPORTED_MODULE_0__services_UIEventService__["a" /* default */].subscribe(__WEBPACK_IMPORTED_MODULE_2__constants_UIEventConstants__["i" /* XPATH_UNREGISTERED */], xPath => {
      if (xPath !== targetPath) {
        return;
      }
      pm.mediator.trigger('dismissLesson');
    });
  },
  targetHandler = __WEBPACK_IMPORTED_MODULE_1__components_base_XPaths_XPathManager__["a" /* default */].getPathHandler(targetPath),
  unsubscribeHandler,
  timeout;

  if (_.isFunction(targetHandler)) {
    triggerPopover(targetHandler());
    return;
  }
  unsubscribeHandler = __WEBPACK_IMPORTED_MODULE_0__services_UIEventService__["a" /* default */].subscribe(__WEBPACK_IMPORTED_MODULE_2__constants_UIEventConstants__["h" /* XPATH_REGISTERED */], xPath => {
    if (xPath !== targetPath) {
      return;
    }
    unsubscribeHandler && unsubscribeHandler();
    timeout && clearTimeout(timeout);
    let targetHandler = __WEBPACK_IMPORTED_MODULE_1__components_base_XPaths_XPathManager__["a" /* default */].getPathHandler(xPath);

    triggerPopover(targetHandler());
  });
  timeout = setTimeout(() => {
    unsubscribeHandler && unsubscribeHandler();
    __WEBPACK_IMPORTED_MODULE_0__services_UIEventService__["a" /* default */].publish('showContinueLessonAction');
  }, MAX_TIMEOUT);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extractRootDomain;
/**
 *
 * @param {*} url
 */
function _extractHostname(url) {
    var hostname;

    if (url.indexOf('//') > -1) {
        hostname = url.split('/')[2];
    } else
    {
        hostname = url.split('/')[0];
    }

    // find & remove port number

    hostname = hostname.split(':')[0];

    // find & remove "?"

    hostname = hostname.split('?')[0];

    return hostname;
}

/**
   * @param {*} url
   * Takes a url and extract
   */
function extractRootDomain(url) {
    var domain = _extractHostname(url),
    splitArr = domain.split('.'),
    arrLen = splitArr.length;

    /*
                                extracting the root domain here
                                if there is a subdomain
                              */

    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];

        // check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")

        if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
            domain = splitArr[arrLen - 3] + '.' + domain;
        }
    }
    return domain;
}

/***/ }),

/***/ 2263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bootRuntimeListeners;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_RuntimeRequestExecutionListener__ = __webpack_require__(2264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_PersistResponseListener__ = __webpack_require__(2265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_services_RuntimeRequestAuthorizationListener__ = __webpack_require__(2266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_RuntimeConsoleEventsListener__ = __webpack_require__(2267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_RuntimeRequestDownloadListener__ = __webpack_require__(2268);






/**
                                                                                                     *
                                                                                                     *
                                                                                                     * @export
                                                                                                     */
function bootRuntimeListeners(cb) {
  if (!(pm && pm.eventBus)) {
    pm.logger.error('RuntimeListeners~boot- Failed', new Error('Could not initialize runtime listeners. Event bus not initialized'));
    cb();
    return;
  }

  pm.eventBus.channel('postman-runtime').subscribe(__WEBPACK_IMPORTED_MODULE_0__modules_services_RuntimeRequestExecutionListener__["a" /* handleRequestExecutionEvents */]);
  pm.eventBus.channel('postman-runtime').subscribe(__WEBPACK_IMPORTED_MODULE_1__modules_services_PersistResponseListener__["a" /* handleResponsePersistEvents */]);
  pm.eventBus.channel('postman-runtime').subscribe(__WEBPACK_IMPORTED_MODULE_2__modules_services_RuntimeRequestAuthorizationListener__["a" /* handleRequestAuthorizationEvents */]);
  pm.eventBus.channel('postman-runtime').subscribe(__WEBPACK_IMPORTED_MODULE_3__modules_services_RuntimeConsoleEventsListener__["a" /* handleConsoleLogEvents */]);
  pm.eventBus.channel('postman-runtime').subscribe(__WEBPACK_IMPORTED_MODULE_4__modules_services_RuntimeRequestDownloadListener__["a" /* handleRequestDownloadEvent */]);

  pm.logger.info('RuntimeListeners~boot- Success');
  cb();
}

/***/ }),

/***/ 2264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleRequestExecutionEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(7);



const NAMESPACE_REQUEST_EXECUTION = 'requestexecution';

let requestExecutionEventHandlers = {
  error(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.setErrors([{
      phase: eventData.phase,
      error: eventData.error }]);

  },

  exception(event) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event),
    exception = eventData.error;

    pm.toasts.error('Something went wrong while running your scripts. Check Postman Console for more info.', { dedupeId: eventData.id });

    pm.console.error('exception', { message: `${exception.name} | ${exception.message}` });
    console.warn(`Error running scripts: ${exception.name} | ${exception.message}`, exception);
  },

  requestDispatched(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.updateDispatchedRequest(eventData.request);
  },

  responseMetaReceived(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.updateResponseMeta(eventData.meta);
  },

  responseHeadersReceived(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.updateResponseHeaders(eventData.responseHeaders);
  },

  responseBodyReceived(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.updateResponseBody({ stream: eventData.responseBody });
  },

  cookiesReceived(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.updateCookies(eventData.cookies);
  },

  assertionsReceived(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.addAssertions(eventData.assertions);
  },

  finished(event, executionStore) {
    executionStore.setFinished();
  },

  terminated(event) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    // do not remove by origin, only remove by execution id
    // removing by origin might cause race conditions
    Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('RequestExecutionStore').remove(eventData.id);
  } };


/**
        *
        *
        * @export
        */
function handleRequestExecutionEvents(event) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["g" /* getEventNamespace */])(event) !== NAMESPACE_REQUEST_EXECUTION) {
    return;
  }

  let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event),
  executionStore = Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('RequestExecutionStore').find(eventData.id);

  if (!executionStore) {
    return;
  }

  requestExecutionEventHandlers[Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event)] && requestExecutionEventHandlers[Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event)](event, executionStore);
}

/***/ }),

/***/ 2265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = handleResponsePersistEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HistoryResponseService__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipelines_user_action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_WorkspaceController__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_HistoryController__ = __webpack_require__(216);








const NAMESPACE_REQUEST_EXECUTION = 'requestexecution',
EVENT_FINISHED = 'finished',
SAVE_HISTORY_RESPONSE_SETTING = 'settings.enableHistoryResponseSaving';

/**
                                                                         * Handles creation of history response from request execution.
                                                                         *
                                                                         * @param {Object} event
                                                                         * @param {Object} executionStore
                                                                         *
                                                                         * @returns {Promise<Object>}
                                                                         */
function handleHistoryResponseCreate(event, executionStore) {
  let historyResponse = Object(__WEBPACK_IMPORTED_MODULE_2__services_HistoryResponseService__["a" /* getHistoryResponseFromExecutionStore */])(executionStore);

  if (!historyResponse) {
    return;
  }

  // check if the workspace for the history allows saving response
  // to do this
  // 1. Find history
  // 2. Find workspace for history
  // 3. Check if workspace allows save response
  // 4. Dream about how this would have been just one SQL query joining the two tables
  return __WEBPACK_IMPORTED_MODULE_5__controllers_HistoryController__["a" /* default */].get({ id: historyResponse.history }).

  then(history => {
    // if history is missing, do not throw but force the workspace check to return falsy
    // to skip history response saving
    if (!history) {
      return;
    }

    return __WEBPACK_IMPORTED_MODULE_4__controllers_WorkspaceController__["a" /* default */].get({ id: history.workspace });
  }).

  then(workspace => {
    // validate settings
    return _.get(workspace, SAVE_HISTORY_RESPONSE_SETTING);
  }).
  then(shouldSaveResponse => {
    if (!shouldSaveResponse) {
      return;
    }

    return Object(__WEBPACK_IMPORTED_MODULE_3__pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('create', 'historyresponse', historyResponse));
  }).
  catch(e => {
    pm.logger.error('HistoryResponse: Could not create history response. Something went wrong', e);

    // for crash reporting
    console.error('HistoryResponse: Could not create history response. Something went wrong', e);
  });
}

/**
   * Handle save response flows, by reacting to request execution finished events
   *
   * @export
   */
function handleResponsePersistEvents(event) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["g" /* getEventNamespace */])(event) !== NAMESPACE_REQUEST_EXECUTION || Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event) !== EVENT_FINISHED) {
    return;
  }

  let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event),
  executionStore = Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('RequestExecutionStore').find(eventData.id);

  if (!executionStore) {
    return;
  }

  handleHistoryResponseCreate(event, executionStore);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleRequestAuthorizationEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(7);



const NAMESPACE_REQUEST_EXECUTION = 'requestauth';

let requestAuthorizationHandler = {
  authorizedRequest(event, executionItemStore) {
    // update the authorized request
    executionItemStore.updateDispatchedRequest(event.data.authorizedRequest);

    // need to give this alert that it got added
    pm.toasts.success('Request headers were successfully updated with authorization data for preview.');
  } };


/**
        *
        *
        * @export
        */
function handleRequestAuthorizationEvents(event) {
  // invalid/unrelated event
  if (!(event && event.data && Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["g" /* getEventNamespace */])(event) === NAMESPACE_REQUEST_EXECUTION)) {
    return;
  }

  // bail out if event is unrecognized
  if (!requestAuthorizationHandler[Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event)]) {
    return;
  }

  let executionStore = Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('RequestExecutionStore'),
  execution = executionStore.findByOrigin(event.data.info.origin);

  // request was not from this window, or no longer present
  if (!execution) {
    return;
  }

  if (event.data.error) {
    pm.toasts.error('Error in authorizing the request');
  }

  requestAuthorizationHandler[Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event)](event, execution);
}

/***/ }),

/***/ 2267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleConsoleLogEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_VariableSessionService__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(7);




let consoleEventListeners = {
  net(event) {
    if (!pm || !pm.console) {
      return;
    }

    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    if (!(eventData && eventData.cursor)) {
      return;
    }

    let payload = { request: eventData.request };

    eventData.response && (payload.response = eventData.response);

    pm.console.net(eventData.cursor.httpRequestId, payload);
  },

  netError(event) {
    if (!pm || !pm.console) {
      return;
    }

    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    if (!(eventData && eventData.cursor)) {
      return;
    }

    pm.console.netErr(eventData.cursor.httpRequestId, eventData.error, {
      request: eventData.request,
      response: eventData.response });

  },

  log(event) {
    if (!pm || !pm.console) {
      return;
    }

    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    if (!(eventData && eventData.cursor)) {
      return;
    }

    pm.console.log(eventData.cursor, eventData.level, ...eventData.messages);
  } };


/**
        *
        *
        * @export
        * @param {*} event
        */
function handleConsoleLogEvents(event) {
  if (!(event && Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["g" /* getEventNamespace */])(event) === 'console')) {
    return;
  }

  let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event),
  executionStore = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('RequestExecutionStore').find(eventData.id);

  if (!executionStore) {
    return;
  }

  consoleEventListeners[Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event)] && consoleEventListeners[Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event)](event);
}

/***/ }),

/***/ 2268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleRequestDownloadEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_services_filesystem__ = __webpack_require__(546);




const NAMESPACE_REQUEST_EXECUTION = 'requestexecution';

let requestExecutionEventHandlers = {
  finished(event) {
    if (!event) {
      return;
    }

    let executionStore = Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('RequestExecutionStore').find(event.data && event.data.id);

    if (!executionStore || !executionStore.download) {
      return;
    }

    let stream = executionStore.responseStream,
    contentInfo = executionStore.responseContentInfo;

    Object(__WEBPACK_IMPORTED_MODULE_2__models_services_filesystem__["c" /* saveAndOpenFileForResponse */])(contentInfo, stream, err => {
      if (!err) {
        pm.toasts.success('Downloaded Response');
      }
    });
  } };


/**
        *
        *
        * @export
        */
function handleRequestDownloadEvent(event) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["g" /* getEventNamespace */])(event) !== NAMESPACE_REQUEST_EXECUTION) {
    return;
  }

  requestExecutionEventHandlers[Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event)] && requestExecutionEventHandlers[Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event)](event);
}

/***/ }),

/***/ 2269:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = initializeConfigurations;
/* unused harmony export initializeServices */
/* unused harmony export subscribeToModelEvents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_Configuration__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_FeatureFlags__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_model_event__ = __webpack_require__(5);





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
    pm.logger.info('bootConfigurations~initialize - Success');
    cb && cb(null);
  }).
  catch(e => {
    pm.logger.error('bootConfigurations~initialize - Failed', e);
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

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserConfigurationController__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultConfigurationController__ = __webpack_require__(407);


let

Configuration = class Configuration extends __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__["a" /* default */] {constructor(...args) {var _temp;return _temp = super(...args), this.
    layers = {
      user: {
        controller: __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserConfigurationController__["a" /* default */],
        namespace: 'userconfigs' },

      app: {
        controller: __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultConfigurationController__["a" /* default */],
        namespace: 'defaultconfigs' } }, this.




    resolutionOrder = ['app', 'user'], _temp;} // The order in which the layers will be resolved
};

/* harmony default export */ __webpack_exports__["a"] = (Configuration);

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let defaultConfiguration = __webpack_require__(408);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAll: function () {
    return Promise.resolve(defaultConfiguration);
  } });

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = {"editor.requestEditorLayoutName":"layout-1-column","request.autoPersistVariables":true,"user.plansToAllowUpgrade":[],"workspace.visibilityAvailablePlans":[],"editor.openInNew":false,"editor.skipConfirmationBeforeClose":false,"editor.showIcons":true}

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserFeatureFlagController__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultFeatureFlagController__ = __webpack_require__(410);


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

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let defaultFeatureFlags = __webpack_require__(411);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAll: function () {
    return Promise.resolve(defaultFeatureFlags);
  } });

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = {"inviteByNonAdmin":false}

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export activateTrial */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return upgradeToPro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return openTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return openAccountSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return openTeamSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return openTeamBilling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return openUserSessions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return openUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return openNotificationPreferences; });
/* unused harmony export openPostmanProIntegration */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return openInviteUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openPostmanUsages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return openCollectionLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return openAuditLogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return openEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return manageWorkspaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return openIntegrationBrowse; });
/* unused harmony export manageMembers */
/* unused harmony export shareWorkspace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return openTrash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getEntityDetailsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCollectionPublishURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return openEnterprise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return openArchivedCollections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return openCollectionsTrash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__ = __webpack_require__(143);



/**
                                                                 *
                                                                 */
function activateTrial() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard?showtrialstart=true`);
}

/**
   * @todo need to go via dashboard `/dpxy/buy'
   * openAuthenticatedRoute(`${pm.appUrl}/dpxy/buy`);
   */
function upgradeToPro(options = {}) {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.dashboardUrl}/purchase?quantity=${options.quantity}`);
}

/**
   *
   */
function openTeam() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/teams`);
}

/**
   *
   */
function openPostmanProIntegration() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/integrations/pm_pro_api/list`);
}

/**
   *
   */
function openInviteUsers() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/teams`);
}

/**
   *
   */
function openAccountSettings() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/profile`);
}

/**
   *
   */
function openTeamSettings() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/settings/team`);
}

/**
   *
   */
function openTeamBilling() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/billing`);
}

/**
   *
   */
function openUserSessions() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/sessions`);
}

function openUserProfile() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/collections/private`);
}

function openNotificationPreferences() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/notifications`);
}

function openPostmanUsages() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/usage`);
}

function openCollectionLink() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/collections/links`);
}

function openAuditLogs() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/audit`);
}

function openEntity(type, id, workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(getEntityDetailsURL(type, id, workspaceId));
}

function editEntity(type, id, workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/${type}/${id}/edit?workspace=${workspaceId}`);
}

function manageWorkspaces() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/workspaces`);
}

function manageMembers(workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/workspaces/${workspaceId}/edit`);
}

function shareWorkspace(workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/workspaces/${workspaceId}/share`);
}

function openIntegrationBrowse(workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/workspaces/${workspaceId}/integrations?view=browse`);
}

function openTrash() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/me/trash`);
}

function openEnterprise() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/me/purchase`);
}

function openArchivedCollections() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.dashboardUrl}/usage/archive`);
}

function openCollectionsTrash() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["u" /* openAuthenticatedRoute */])(`${pm.dashboardUrl}/me/trash`);
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

/***/ 555:
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ 650:
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

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastManager; });
let ToastManager = class ToastManager {
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

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_sanitise_user_content__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_sanitise_user_content___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_sanitise_user_content__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_DashboardService__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_messaging_Toast__ = __webpack_require__(653);







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

  let notificationWrapper = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this._ref);
  if (!notificationWrapper) {
    return;
  }

  notificationWrapper.addEventListener('click', e => {
    let classList = e.target.classList,
    allowClicks = ['toast-dismiss', 'toast-primary-action', 'toast-secondary-action'];

    if (_.isEmpty(_.intersection(classList, allowClicks))) {
      // This check is there if the target is SVG (close icon)
      // and its parent is 'toast-dismiss'
      const maxParentNodeLookupCount = 4;
      let currentTarget = e.target,
      targetClass = currentTarget.className,
      notificationClass = 'notifications-wrapper',
      lookUpCount = 0;

      while (targetClass && targetClass !== notificationClass) {
        if (lookUpCount > maxParentNodeLookupCount) {
          break;
        }

        // Do not prevent if the icon is a child node of toast-dismiss
        if (targetClass === 'toast-dismiss') {
          return;
        }

        currentTarget = _.get(currentTarget, 'parentNode', null);
        targetClass = _.get(currentTarget, 'className', null);
        lookUpCount++;
      }

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
          Object(__WEBPACK_IMPORTED_MODULE_3__services_DashboardService__["m" /* openInviteUsers */])();
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
    position: 'tr',
    dismissible: true,
    autoDismiss: persist ? 0 : timeout };

};
/* harmony export (immutable) */ __webpack_exports__["_getBaseOptions"] = _getBaseOptions;


/**
    * Returns level for type for the react notification system
    *
    * @param {*} type
    */
function getLevelForType(type) {
  let map = {
    success: 'success',
    error: 'error',
    warn: 'warning',
    info: 'info' };

  return map[type];
}

const _show = function (options) {
  if (!this._ref) {
    _.get(pm, 'windowConfig.ui') ? console.error('Notification System not initialized') : this.getEventBus().publish(options);
    return;
  }

  let {
    type = 'info',
    message,
    dedupeId,
    primaryAction = null,
    secondaryAction = null,
    persist = false,
    timeout = 3000,
    title = null,
    primaryButtonLabel = '',
    secondaryButtonLabel = '',
    enableActions = null,
    noIcon = false,
    isDismissable = true,
    onDismiss = null,

    // HACK: quick fix for 100K. cleanup.
    skipSanitise = false } =
  options;

  // react notification system takes seconds timeout
  timeout /= 1000;
  let notificationId = __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default()(),
  notification = _.extend(
  this._getBaseOptions(persist, timeout), {
    uid: notificationId,
    level: getLevelForType(type),
    children:
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_messaging_Toast__["a" /* default */], {
      isDismissable: isDismissable,
      noIcon: noIcon,
      uid: notificationId,
      dismiss: this._ref.removeNotification,
      type: type,
      title: title || null,
      message: message,
      primaryAction: primaryAction,
      secondaryAction: secondaryAction,
      onDismiss: onDismiss }) });





  if (dedupeId) {
    notification = _.extend(notification, { uid: `${getLevelForType(type)}-${dedupeId}` });
  }

  this._ref.addNotification(notification);
};
/* harmony export (immutable) */ __webpack_exports__["_show"] = _show;


const error = function (message, options) {
  message || (message = 'Something went wrong. Please try again.');
  options || (options = {});

  this._show(
  _.extend(options, {
    type: 'error',
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
    type: 'info',
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
    type: 'success',
    message: message }));


};
/* harmony export (immutable) */ __webpack_exports__["success"] = success;


const warn = function (message, options) {
  if (!message) {
    return;
  }

  options || (options = {});

  this._show(
  _.extend(options, {
    type: 'warn',
    message: message }));


};
/* harmony export (immutable) */ __webpack_exports__["warn"] = warn;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_InformationIcon__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_CloseIcon__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Markdown__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_UIEventService__ = __webpack_require__(95);







let

Toast = class Toast extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor() {
    super();

    this.handlePrimaryAction = this.handlePrimaryAction.bind(this);
    this.handleSecondaryAction = this.handleSecondaryAction.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  componentDidMount() {
    this.unsubscribeHandler = this.props.dismissEvent && __WEBPACK_IMPORTED_MODULE_7__services_UIEventService__["a" /* default */].subscribe(this.props.dismissEvent, this.dismissToast);
  }

  componentWillUnmount() {
    this.unsubscribeHandler && this.unsubscribeHandler();
  }

  handlePrimaryAction() {
    if (this.props.primaryAction && this.props.primaryAction.onClick) {
      this.props.primaryAction.onClick();
    }
    this.props.dismiss(this.props.uid);
  }

  handleSecondaryAction() {
    if (this.props.secondaryAction && this.props.secondaryAction.onClick) {
      this.props.secondaryAction.onClick();
    }
    this.props.dismiss(this.props.uid);
  }

  dismissToast() {
    // The notification system provides a handler
    // to remove the toast
    this.props.dismiss(this.props.uid);
    this.props.onDismiss && this.props.onDismiss(this.props.uid);
  }

  getTypeClass() {
    let typeClass = this.props.type ? `toast-${this.props.type}` : 'toast-info';
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'toast': true,
      [typeClass]: true });

  }

  getActions() {
    const { primaryAction = null, secondaryAction = null } = this.props;

    if (primaryAction || secondaryAction) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'toast-actions' },

          primaryAction &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'toast-primary-action',
              type: 'primary',
              size: 'small',
              disabled: primaryAction.disabled,
              onClick: this.handlePrimaryAction },

            primaryAction.label),



          secondaryAction &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ 'toast-secondary-action': true, 'toast-secondary-action-only': !primaryAction }),
              type: 'text',
              disabled: secondaryAction.disabled,
              onClick: this.handleSecondaryAction },

            secondaryAction.label)));




    }
  }

  getContentClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'toast-content': true,
      'toast-content-shrink': this.props.isDismissable });

  }

  render() {
    const {
      title,
      message,
      onMessageLinkClick,
      disabled,
      isDismissable,
      noIcon } =
    this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getTypeClass() },

        !noIcon &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_InformationIcon__["a" /* default */], { className: 'toast-icon' }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getContentClasses() },

          title &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'toast-title' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Markdown__["a" /* default */], {
              source: title,
              onLinkClick: onMessageLinkClick })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'toast-body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Markdown__["a" /* default */], {
              source: message,
              onLinkClick: onMessageLinkClick })),


          this.getActions()),


        isDismissable &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'toast-dismiss',
            onClick: this.dismissToast },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_CloseIcon__["a" /* default */], {
            className: 'toast-close',
            size: 'xs' }))));





  }};


Toast.defaultProps = {
  type: 'info',
  message: '',
  disabled: false,
  isDismissable: true,
  noIcon: false,
  onMessageLinkClick: null };


Toast.propTypes = {
  type: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['error', 'success', 'warn', 'info']),
  message: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  isDismissable: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  noIcon: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  dismiss: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  onMessageLinkClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func };

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export findSession */
/* unused harmony export clearOrphanSessions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bootSession; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceSessionController__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_WorkspaceController__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_v4__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__ = __webpack_require__(102);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};






let getDefaultSession = window => {
  return Object(__WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__["c" /* defaultUserWorkspaceId */])().
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
      pm.logger.info('Session~boot - Success');
      cb && cb(null);
    }).

    catch(e => {
      pm.logger.error('Session~boot - Failed', e);
      cb && cb(e);
    })

    // Prune any sessions that are invalid
    .then(() => clearOrphanSessions()).
    catch(() => {});
  });
};


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_sync_SyncManagerProxy__ = __webpack_require__(657);


/**
                                                                    *
                                                                    */
function bootSyncProxy(cb) {
  _.assign(window.pm, { syncManager: new __WEBPACK_IMPORTED_MODULE_0__models_sync_SyncManagerProxy__["a" /* default */]() });
  pm.logger.info('SyncProxy~boot - Success');
  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootSyncProxy);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_backbone__);



/**
                                  * Handles the socket, and is the interface for sending and receiving changesets
                                  *
                                  * @class SyncManager
                                  */
var SyncManagerProxy = __WEBPACK_IMPORTED_MODULE_1_backbone___default.a.Model.extend({
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
      pm.toasts.error('You need to be connected to Postman Sync to restore a collection.');
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

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone__ = __webpack_require__(53);
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

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyListManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection__ = __webpack_require__(70);
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

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_backbone__);

const Certificate = __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.Model.extend({
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

    const fs = __webpack_require__(39);
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



const CertificateManager = __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.Collection.extend({
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

/***/ })

},[1242]);