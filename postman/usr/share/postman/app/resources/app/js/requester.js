webpackJsonp([28],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sanitizeDataMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return sanitizeRequestBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sanitizeRequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return sanitizeHeadersFromSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return sanitizePathVariablesFromSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sanitizeCollectionModelFromSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sanitizeDeprecatedScriptProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sanitizeDeprecatedAuthProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sanitizeAutoTimestamps; });
/* unused harmony export sanitizeRawModeDataFromSync */
/* unused harmony export sanitizeFormDataFromSync */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_utils_collection_tree__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_RequestConstants__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_RequestDataModeConstants__ = __webpack_require__(143);




const MODEL_COLLECTION = 'collection',
MODEL_FOLDER = 'folder',
MODEL_REQUEST = 'request',
MODEL_RESPONSE = 'response',

NAME_UNTITLED_DICT = {
  collection: 'Untitled Collection',
  folder: 'Untitled Folder',
  request: 'Untitled Request',
  response: 'Untitled Example' },

METHOD_GET = 'GET',
DBP_FLAG = 'protocolProfileBehavior.disableBodyPruning',
ALLOWED_VARIABLE_FIELDS = ['id', 'key', 'value', 'type', 'enabled', 'description'],
NO_BODY_METHODS_SET = new Set(__WEBPACK_IMPORTED_MODULE_1__constants_RequestConstants__["a" /* NO_BODY_METHODS */]),

NAME_UNTITLED = 'Untitled';

/**
                             * Converts empty model names to `Untitled ${ModelName}`
                             *
                             * @param {Object} model
                             * @param {String} type
                             */
function sanitizeNullNames(model, type) {
  if (!model.name) {
    model.name = NAME_UNTITLED_DICT[type] || NAME_UNTITLED;
  }
}

/**
   * Sanitizes the collection variables that are coming from sync
   * It will remove and non-supported properties and also,
   * make sure that the each variable has `enabled` properties (and not the `disabled` property which the schema supports)
   * @param {Object} collection
   */
function sanitizeCollectionVariables(collection) {
  if (_.isEmpty(collection.variables)) {
    return;
  }

  collection.variables = _.map(collection.variables, variable => {
    let enabled = true;

    // While importing from sync, we give more preference to enabled field
    // since sync has the same data which app has and in app db enabled is the valid property
    if (typeof variable.enabled !== 'undefined') {
      enabled = Boolean(variable.enabled);
    } else if (typeof variable.disabled !== 'undefined') {
      enabled = !variable.disabled;
    }

    return _.pick(_.merge({}, variable, { enabled }), ALLOWED_VARIABLE_FIELDS);
  });
}

/**
   * Removes the body from requests where the method does not support it and when the
   * DBP flag is not set. This data can be present for collections that were synced from some App with
   * version before 6.6
   * @param {Object} request
   */
function sanitizeRequestBody(request) {
  if (!request) {
    return;
  }

  let methodDoesNotAllowBody = !request.method || NO_BODY_METHODS_SET.has(request.method),
  isDbpFalsy = !_.get(request, DBP_FLAG);

  if (methodDoesNotAllowBody && isDbpFalsy) {
    request.data = null;
    request.dataMode = null;
  }
}

/**
   * It will set method to GET when it is not valid (a non-empty string)
   * @param {Object} request
   */
function sanitizeRequestMethod(request) {
  if (!request) {
    return;
  }

  if (!_.isString(request.method) || _.isEmpty(request.method)) {
    request.method = METHOD_GET;
  }
}

const REQUEST_AUTH_DEPRECATED_PROPS = [
'currentHelper',
'helperAttributes'];


const REQUEST_SCRIPT_DEPRECATED_PROPS = [
'tests',
'preRequestScript'];


/**
                      *
                      * @param {Object} collection
                      */
function sanitizeCollectionModelFromSync(model, type) {
  if (!model) {
    return;
  }

  // shallow collection
  if (type === MODEL_COLLECTION && !(model.folders || model.requests)) {
    sanitizeCollectionFromSync(model);
    return;
  }

  // shallow folder
  if (type === MODEL_FOLDER && !(model.folders || model.requests)) {
    sanitizeFolderFromSync(model);
    return;
  }

  // shallow request
  if (type === MODEL_REQUEST && !model.responses) {
    sanitizeRequestFromSync(model);
    return;
  }

  // shallow response
  if (type === MODEL_RESPONSE) {
    sanitizeResponseFromSync(model);
    return;
  }

  Object(__WEBPACK_IMPORTED_MODULE_0__common_utils_collection_tree__["c" /* walkCollectionTree */])(model, type, function (node, { type }) {
    switch (type) {
      case MODEL_COLLECTION:
        sanitizeCollectionFromSync(node);
        break;
      case MODEL_FOLDER:
        sanitizeFolderFromSync(node);
        break;
      case MODEL_REQUEST:
        sanitizeRequestFromSync(node);
        break;
      case MODEL_RESPONSE:
        sanitizeResponseFromSync(node);
        break;}

  });
}

/**
   * sanitize collection
   *
   * @param {any} collection
   */
function sanitizeCollectionFromSync(collection) {
  // convert all null names to Untitled. New collection models are not allowed with null in app and sync
  // this is for backward compatibility for old requests
  sanitizeNullNames(collection, MODEL_COLLECTION);
  sanitizeCollectionVariables(collection);
}

/**
   * sanitize folder
   *
   * @param {any} folder
   */
function sanitizeFolderFromSync(folder) {
  // convert all null names to Untitled. New collection models are not allowed with null in app and sync
  // this is for backward compatibility for old requests
  sanitizeNullNames(folder, MODEL_FOLDER);
}

/**
   * sanitize request
   *
   * @param {any} request
   */
function sanitizeRequestFromSync(request) {
  // convert all null names to Untitled. New collection models are not allowed with null in app and sync
  // this is for backward compatibility for old requests
  sanitizeNullNames(request, MODEL_REQUEST);
  sanitizeDataMode(request);
  sanitizeRequestBody(request);
  sanitizeRequestMethod(request);
  sanitizeHeadersFromSync(request);
  sanitizePathVariablesFromSync(request);
  sanitizeDeprecatedScriptProperties(request);
  sanitizeDeprecatedAuthProperties(request);
  sanitizeAutoTimestamps(request);
}

/**
   * sanitize dataMode
   */
function sanitizeDataMode(request) {

  switch (request.dataMode) {
    case 'raw':
    case 'binary':
      sanitizeRawModeDataFromSync(request);
      break;
    case __WEBPACK_IMPORTED_MODULE_2__constants_RequestDataModeConstants__["d" /* REQUEST_DATA_MODE_GRAPHQL */]:
      sanitizeGraphqlModeDataFromSync(request);
      break;
    case 'params':
      sanitizeFormDataFromSync(request);
      break;
    case 'urlencoded':
      if (!_.isArray(request.data)) {
        request.data = [];
      }
      break;
    default:
      request.dataMode = null;
      request.data = null;
      break;}

}

/**
   * sanitize response
   *
   * @param {any} response
   */
function sanitizeResponseFromSync(response) {
  // convert all null names to Untitled. New collection models are not allowed with null in app and sync
  // this is for backward compatibility for old requests
  sanitizeNullNames(response, MODEL_RESPONSE);
  sanitizeAutoTimestamps(response);

  if (_.has(response, 'requestObject')) {
    let parsedObject = null;

    // Now we need to try parse this value as object and send it to db.
    try {
      parsedObject = JSON.parse(response.requestObject);
    }
    catch (e) {
      // no-op here
    } finally
    {
      // Value should be a valid json object or null
      if (parsedObject && typeof parsedObject === 'object' && !Array.isArray(parsedObject)) {
        sanitizeDataMode(parsedObject);
        sanitizeRequestBody(parsedObject);
        sanitizeRequestMethod(parsedObject);

        // Filling the requestObject
        response.requestObject = parsedObject;
        return;
      }

      response.requestObject = null;
    }
  }
}

/**
   * transform rawModeData
   *
   * @param {any} entity
   */
function sanitizeRawModeDataFromSync(model) {
  if ((model.dataMode === 'raw' || model.dataMode === 'binary') && _.has(model, 'rawModeData')) {
    model.data = model.rawModeData;
    delete model.rawModeData;
    delete model.graphqlModeData;
  }

  // Brought as is from PmCollections.js and updated for adding binary data persistence
  // Not sure if this is still needed
  if ((model.dataMode === 'raw' || model.dataMode === 'binary') && model.data instanceof Array && !_.isString(model.rawModeData) && _.isEmpty(model.rawModeData)) {
    if (model.data.length == 1 && _.isString(model.data[0])) {
      model.data = model.data[0];
    }

    // Always make sure data is string for raw type.
    if (!_.isString(model.data)) {
      model.data = _.toString(model.data);
    }
  }
}

/**
   * transform graphqlModeData
   *
   * @param {any} entity
   */
function sanitizeGraphqlModeDataFromSync(request) {
  if (request.dataMode === __WEBPACK_IMPORTED_MODULE_2__constants_RequestDataModeConstants__["d" /* REQUEST_DATA_MODE_GRAPHQL */]) {
    request.data = _.isPlainObject(request.graphqlModeData) ? request.graphqlModeData : {};
    delete request.graphqlModeData;
    delete request.rawModeData;
  }
}

/**
   * transform params/form-data request
   * @param {any} entity
   */
function sanitizeFormDataFromSync(model) {
  if (!_.isArray(model.data)) {
    model.data = [];

    return;
  }

  _.forEach(model.data, datum => {
    if (!datum || datum.type !== 'file' || Array.isArray(datum.value)) {
      return;
    }

    // If type is file and value is a string then convert it to an array
    if (_.isString(datum.value)) {
      datum.value = [datum.value];
      return;
    }

    // Incase of unknown type cleanup to empty array
    datum.value = [];
  });
}

/**
   * Removes deprecated properties 'tests', 'preRequestScript'
   * in favor of 'events'
   */
function sanitizeDeprecatedScriptProperties(model) {
  _.forEach(REQUEST_SCRIPT_DEPRECATED_PROPS, prop => {
    delete model[prop];
  });
}

/**
   * Removes deprecated properties 'currentHelper', 'helperAttributes'
   * in favor of 'auth'
   */
function sanitizeDeprecatedAuthProperties(model) {
  _.forEach(REQUEST_AUTH_DEPRECATED_PROPS, prop => {
    delete model[prop];
  });
}

/**
   * sanitize headers
   *
   * @param {any} entity
   */
function sanitizeHeadersFromSync(model) {
  delete model.headers;
}

/**
   * sanitize path variables
   * pathVariables are deprecated in favor of pathVariableData
   * @param {any} entity
   */
function sanitizePathVariablesFromSync(request) {
  delete request.pathVariables;
}

/**
   * Removes auto created timestamps.
   *
   * @param {Object} entity
   */
function sanitizeAutoTimestamps(entity) {
  entity.createdAt && delete entity.createdAt;
  entity.updatedAt && delete entity.updatedAt;
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 1580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(1);
var PropTypes = __webpack_require__(8);

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

/***/ 1665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let InterceptorInstaller = class InterceptorInstaller {

  constructor() {

    // checking intermediate states for interceptor bridge installation
    pm.appWindow.trigger('registerInternalEvent', 'interceptorBridgeInstallationStatusUpdate', function (data) {
      pm.mediator.trigger('onMessageExternal', data);
      if (data.status === 'downloadStarted') {
        console.log('Downloading Interceptor Bridge...');
      } else
      if (data.status === 'downloadFinished') {
        console.log('Downloaded Interceptor Bridge');
      } else
      if (data.status === 'installationStarted') {
        console.log('Installing Interceptor Bridge');
      } else
      if (data.status === 'manifestAdded') {
        console.log('Added manifest');
      } else
      if (data.status === 'registryKeyAdded') {
        console.log('Added registry key');
      } else
      if (data.status === 'installationFinished') {
        pm.settings.setSetting('interceptor.interceptorBridgeInstalled', true);
        console.log('InterceptorBridge is installed successfully');
      } else
      if (data.status === 'error') {
        pm.settings.setSetting('interceptor.interceptorBridgeInstalled', false);
        console.log('Error occured while installing Interceptor Bridge: ', data.errorMessage);
      }
    }, this);

    // checking intermediate states for node installation
    pm.appWindow.trigger('registerInternalEvent', 'nodeInstallationStatusUpdate', function (data) {
      if (data.status === 'downloadStarted') {
        console.log('Downloading Node...');
      } else
      if (data.status === 'downloadFinished') {
        console.log('Node is downloaded successfully');
      } else
      if (data.status === 'installationFinished') {
        console.log('Node is installed successfully');
      } else
      if (data.status === 'installationNotFinished') {
        console.log('Node installation is not finished');
      } else
      if (data.status === 'error') {
        console.log(data.errorMessage);
      }
    }, this);

    pm.appWindow.trigger('registerInternalEvent', 'interceptorBridgeResetStatusUpdate', function (data) {
      if (data.status === 'success') {
        console.log('Interceptor Bridge installation is reset successfully');
      } else
      if (data.status === 'error') {
        console.log(data.errorMessage);
      }
    }, this);

  }

  /**
     * sets up the Native App ~ Interceptor integration
     * i.e. puts the native server in Applications/ folder
     * puts the manifest at chrome-specific location
     *
     */
  installInterceptorBridge() {
    pm.appWindow.sendToElectron({
      event: 'installInterceptorBridge' });

    return 'InterceptorBridge installation initiated';
  }

  /**
     * checks for the presence of manifest and Interceptor Bridge executable
     * checks for the presence of registry key in case of windows
     * checks for the presence of node in case of macOS
     */
  checkInstallationStatus() {
    pm.appWindow.sendToElectron({
      event: 'checkInstallationStatus' });

    return 'Check Installation initiated';
  }

  /**
     * it downloads node installer in case of macOS if it doesn't exist
     */
  installNode() {
    pm.appWindow.sendToElectron({
      event: 'installNode' });

    return 'Node installation initiated';
  }

  /**
     *
     * resets interceptor bridge installation by initiating
     *
     * 1. removal of `InterceptorBridge` directory
     * 2. removal of manifest present at os-specific location
     * 3. removal of registry key (only in case of windows)
     *
     */
  reset() {
    pm.appWindow.sendToElectron({
      event: 'resetInterceptorBridgeInstallation' });

    return 'Resetting Interceptor Bridge installation';
  }};



/* harmony default export */ __webpack_exports__["a"] = (InterceptorInstaller);

/***/ }),

/***/ 1666:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1667);


/***/ }),

/***/ 1667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init__ = __webpack_require__(1675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_requester_scss__ = __webpack_require__(3314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_requester_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_requester_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable__ = __webpack_require__(1580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_TelemetryHelpers__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_empty_states_CrashHandler__ = __webpack_require__(203);









const Requester = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: () => __webpack_require__.e/* import() */(24).then(__webpack_require__.bind(null, 3572)),
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

/***/ 1675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__boot_bootConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot_bootLogger__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boot_bootMessaging__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boot_bootWLModels__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boot_bootDBWatcher__ = __webpack_require__(2017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__boot_bootAppModels__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boot_bootSettings__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boot_bootTelemetry__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boot_bootCrashReporter__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__boot_bootIndependentServices__ = __webpack_require__(3282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__boot_bootSession__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__boot_bootRequester__ = __webpack_require__(3293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__boot_booted__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__boot_bootThemeManager__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__boot_bootConfigurations__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__boot_bootRuntimeListeners__ = __webpack_require__(3308);



















const windowConfig = {
  process: 'requester',
  ui: true };


window.pm = {};

pm.init = done => {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig___default.a.init(windowConfig),
  __WEBPACK_IMPORTED_MODULE_2__boot_bootLogger__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__boot_bootMessaging__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_9__boot_bootCrashReporter__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_8__boot_bootTelemetry__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_15__boot_bootConfigurations__["a" /* initializeConfigurations */],
  __WEBPACK_IMPORTED_MODULE_7__boot_bootSettings__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__boot_bootWLModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_11__boot_bootSession__["a" /* bootSession */],
  __WEBPACK_IMPORTED_MODULE_10__boot_bootIndependentServices__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__boot_bootAppModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_16__boot_bootRuntimeListeners__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__boot_bootDBWatcher__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_14__boot_bootThemeManager__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_12__boot_bootRequester__["a" /* default */]],
  err => {
    Object(__WEBPACK_IMPORTED_MODULE_13__boot_booted__["a" /* default */])(err);
    if (err) {
      pm.logger.error('Error in the app boot sequence', err);
    }
    done && done(err);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (pm);

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sanitizeRequestDataForSync; });
/* unused harmony export sanitizeRequest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sanitizeCollectionModelForSync; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_utils_collection_tree__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sanitize_collection_model_from_sync__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_RequestDataModeConstants__ = __webpack_require__(143);





const COLLECTION = 'collection',
FOLDER = 'folder',
REQUEST = 'request',
RESPONSE = 'response';

/**
                        * transform rawModeData
                        *
                        * @param {any} entity
                        */
function sanitizeRequestDataForSync(model) {
  // set the raw payload in rawModeData
  if (model.dataMode === 'raw') {
    model.rawModeData = _.isString(model.data) ? model.data : '';
    model.data = [];
    model.graphqlModeData = {};
  }

  // set the file path in rawModeData for binary data
  if (model.dataMode === 'binary') {
    model.rawModeData = model.data;
    model.data = [];
    model.graphqlModeData = {};
  }

  // Sanitizing graphql data.
  if (model.dataMode === __WEBPACK_IMPORTED_MODULE_3__constants_RequestDataModeConstants__["d" /* REQUEST_DATA_MODE_GRAPHQL */]) {
    model.graphqlModeData = _.isPlainObject(model.data) ? model.data : {};
    model.data = [];
    model.rawModeData = '';
  }

  // clean up form-data with files
  if (model.dataMode === 'params' && model.data instanceof Array) {
    _.forEach(model.data, datum => {
      if (!datum || datum.type !== 'file') {
        return;
      }

      // If the value is not an array or string then don't sync it, file values are always an array or string
      if (!Array.isArray(datum.value)) {
        datum.value = _.isString(datum.value) ? datum.value : null;

        return;
      }

      if (datum.value.length > 1) {
        return;
      }

      datum.value = _.isString(datum.value[0]) ? datum.value[0] : null;
    });

    model.graphqlModeData = {};
  }

  // if we have headerData in the changeset, then we need to add headers so that other apps will understand.
  if (_.has(model, 'headerData')) {
    model.headers = __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* default */].packHeaders(model.headerData);
  }


  // if we have pathVariableData in the changeset,
  // then we need to add pathvariables so that other apps will understand.
  if (_.has(model, 'pathVariableData')) {
    let pathVariables = {};
    _.forEach(model.pathVariableData, datum => {
      pathVariables[datum.key] = datum.value;
    });

    model.pathVariables = pathVariables;
  }
}

/**
   * sanitize request
   *
   * @param {any} request
   */
function sanitizeRequest(request) {
  // Localfile references not to be synced
  delete request._postman_local_files;

  sanitizeRequestDataForSync(request);
  Object(__WEBPACK_IMPORTED_MODULE_1__sanitize_collection_model_from_sync__["a" /* sanitizeAutoTimestamps */])(request);
}

/**
   * sanitize example request
   *
   * @param {any} requestObject
   */
function sanitizeExampleRequest(requestObject) {
  sanitizeRequestDataForSync(requestObject);
}

/**
   * sanitize response
   *
   * @param {Object} response
   */
function sanitizeResponse(response) {
  if (_.has(response, 'requestObject')) {
    sanitizeExampleRequest(response.requestObject);

    // Since requestObject is 'stringified' in format in sync server,
    // we are making it stringified so that if there is any conflicts in this property
    // both `strings` are compared instead of `object` and `string`

    // Since server already stores these value in stringified format,
    // we won't have any problems converting this to string right now
    response.requestObject = JSON.stringify(response.requestObject);
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__sanitize_collection_model_from_sync__["a" /* sanitizeAutoTimestamps */])(response);
}

/**
   *
   * @param {Object} model
   * @param {String} type
   */
function sanitizeCollectionModelForSync(model, type) {
  if (!model) {
    return;
  }

  // shallow collection
  if (type === COLLECTION && !(model.folders || model.requests)) {
    return;
  }

  // shallow folder
  if (type === FOLDER && !(model.folders || model.requests)) {
    return;
  }

  // shallow request
  if (type === REQUEST && !model.responses) {
    sanitizeRequest(model);
    return;
  }

  // shallow response
  if (type === RESPONSE) {
    sanitizeResponse(model);
    return;
  }

  Object(__WEBPACK_IMPORTED_MODULE_0__common_utils_collection_tree__["c" /* walkCollectionTree */])(model, type, function (node, { type }) {
    switch (type) {
      case REQUEST:
        sanitizeRequest(node);
        break;}

  });
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ 2017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_DBResourceWatcher__ = __webpack_require__(1149);


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

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSyncTimeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SyncStateService__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_SyncService__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_sync_services_SyncIncomingHandler__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RealtimeSyncMessagesService__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RealtimeOutgoingSyncMessageService__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ConflictResolutionHelpers__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_SyncStatusConstants__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SyncClientService__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_uid_helper__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_sync_SyncOutgoingHelpers__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_AnalyticsService__ = __webpack_require__(20);















const ACTION_UNSUBSCRIBE = 'unsubscribeSync',

SYNC_REQUEST_TIMEOUT = 20 * 60 * 1000, // 20 minutes

PUSH_OUTGOING_CHANGES_THROTTLE_TIME = 300, // 300 milliseconds

NUMBER_OF_OLD_VALUES_TO_EMIT_TO_NEW_SUBSCRIBERS = 1,

MAX_ERROR_RETRY = 2;

/**
                      * Implements sync timeline functionality
                      */
let BaseSyncTimeline = class BaseSyncTimeline {
  /**
                                                       * @type {Boolean=true}
                                                       *
                                                       * Identifies if an integrity check needs to be performed for this timeline.
                                                       */










  setSyncing() {
    this._timelineStatusSubject.next(__WEBPACK_IMPORTED_MODULE_8__constants_SyncStatusConstants__["f" /* SYNC_STATUS_SYNCING */]);
  } /**
     * @type {Number=0}
     *
     * Stores the current state of error retries. If this error count exceeds the maximum count
     * bail out from sync flows.
     */setSynced() {this._timelineStatusSubject.next(__WEBPACK_IMPORTED_MODULE_8__constants_SyncStatusConstants__["e" /* SYNC_STATUS_IN_SYNC */]);}
  setIdle() {
    this._timelineStatusSubject.next(__WEBPACK_IMPORTED_MODULE_8__constants_SyncStatusConstants__["d" /* SYNC_STATUS_IDLE */]);
  }

  constructor(timelineId, options) {this.pendingIntegrityChecks = true;this.errorCount = 0;
    if (!timelineId || !timelineId.model || !timelineId.modelId) {
      throw new Error('BaseSyncTimeline: Could not create timeline. Invalid params.');
    }

    // populate attributes of the pipeline
    this.model = timelineId.model;
    this.modelId = timelineId.modelId;

    // Timeline status subject is used to gather all the status for that timeline
    // we use replay subject here so when we subscribe then the consumer gets the last
    // value else till the time the status doesn't change it will not recieve any
    // values at all.
    this._timelineStatusSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["b" /* ReplaySubject */](NUMBER_OF_OLD_VALUES_TO_EMIT_TO_NEW_SUBSCRIBERS);
    this.timelineStatusObservable$ = this._timelineStatusSubject.asObservable();
    this.setIdle();

    // populate options
    /**
     * @property
     *
     * @type {Boolean}
     * @memberof BaseSyncTimeline
     *
     * Set this to true if the entity exists on Sync and client always
     * does not exist on Sync until it has been synced. For normal entities /sync call is defferred
     * This is used to differentiate from the usual behavior where an entity created locally
     * until client changes are synced. Omnipresent entities can start /sync call even during the
     * first time they are synced.
     */
    this.isOmnipresent = options && options.isOmnipresent;

    /**
                                                            * A subject that the timeline uses to dispatch events on finishing sync.
                                                            *
                                                            * @private
                                                            *
                                                            * @type {Subject}
                                                            * @property
                                                            * @memberof BaseSyncTimeline
                                                            */
    this._onSyncFinishedSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["c" /* Subject */]();

    /**
                                                  * An observable that emits when the timeline finishes syncing. Sync finished here refers to the
                                                  * state when all pending changes made offline in the App and online on the Sync server are
                                                  * synchronized with each other. This process is triggered after a period of disconnection
                                                  * from the Sync server.
                                                  *
                                                  * Note that sync finished does not mean there is no further communication with Sync. It just
                                                  * means any changes done during the period of disconnection are synced with each other.
                                                  *
                                                  * After the sync finished state is reached the timeline continues to send and receive changes
                                                  * directly with Sync servers.
                                                  *
                                                  * Each value emitted here contains
                                                  * `startRevision` (the state of sync before it started syncing).
                                                  *
                                                  * @private
                                                  *
                                                  * @type {Observable}
                                                  * @property
                                                  * @memberof BaseSyncTimeline
                                                  */
    this.onSyncFinishedObservable$ = this._onSyncFinishedSubject.asObservable();

    // trigger the onSyncFinished hook every time sync finishes
    this.onSyncFinishedObservable$.
    subscribe(async ({ startRevision }) => {
      pm.logger.info('BaseSyncTimeline~SyncFinishedObservable: Successful sync ' +
      `proceeding with integrity check and force sync for ${this.model}:${this.modelId}`);

      // perform integrity checks on only on successful sync
      // performing integrity checks otherwise in case of non recoverable cases
      // will end up DoS ing the servers
      await this.handleIntegrityChecks();
      await this._handleForceSync();
      this.onSyncFinished && this.onSyncFinished({ startRevision });
    });
  }

  async handleIntegrityChecks() {
    if (this.repairIntegrity && this.pendingIntegrityChecks) {
      this.pendingIntegrityChecks = false;

      try {
        pm.logger.info(`BaseSyncTimeline~handleIntegrityChecks: Starting integrity check for ${this.model}:${this.modelId}`);
        await this.repairIntegrity();
        pm.logger.info(`BaseSyncTimeline~handleIntegrityChecks: Finished integrity check for ${this.model}:${this.modelId}`);
      }
      catch (e) {
        pm.logger.warn(`BaseSyncTimeline~handleIntegrityChecks: Failed to complete integrity check for ${this.model}:${this.modelId}`, e);
        this.pendingIntegrityChecks = true;
      }
    } else {
      pm.logger.info(`BaseSyncTimeline~handleIntegrityChecks: Bailed out integrity check for ${this.model}:${this.modelId}`);
    }
  }

  async _handleForceSync() {
    // do nothing if this timeline has not implemented force sync
    if (!this.handleForceSync) {
      pm.logger.info(`BaseSyncTimeline~_handleForceSync: Bailing out of force sync for ${this.model}:${this.modelId}`);
      return;
    }

    try {
      pm.logger.info(`BaseSyncTimeline~_handleForceSync: Starting force sync for ${this.model}:${this.modelId}`);
      await this.handleForceSync();
      pm.logger.info(`BaseSyncTimeline~_handleForceSync: Finished force sync for ${this.model}:${this.modelId}`);
    }
    catch (e) {
      pm.logger.warn(`BaseSyncTimeline~_handleForceSync: Error in force sync for ${this.model}:${this.modelId}`, e);
    }
  }

  /**
     * Returns the timeline identifier
     *
     * @returns {Object}
     */
  getTimelineId() {
    return {
      model: this.model,
      modelId: this.modelId };

  }

  /**
     * Syncs pending changes on the timeline. This makes sure the sync server and the client have
     * synchronized the changes that happened when the client was offline.
     *
     * This needs to be done before we open up channels for real-time incoming and further outgoing changes.
     *
     * @note Does nothing if timeline is syncing.
     *
     * @returns {Promise}
     */
  async sync() {
    if (this.isSyncing) {
      pm.logger.info(`BaseSyncTimeline~sync: Bailing out as isSyncing flag is ${this.isSyncing} for ${this.model}:${this.modelId}`);
      return;
    }

    return this._sync();
  }

  /**
     * This is a private method. See `sync`.
     *
     * @private
     *
     * @returns {Promise}
     */
  async _sync() {
    pm.logger.info(`BaseSyncTimeline~_sync: Starting sync for ${this.model}:${this.modelId}`);

    // set syncing flag
    this.isSyncing = true;

    try {
      let lastSyncState = await Object(__WEBPACK_IMPORTED_MODULE_2__SyncStateService__["a" /* getSyncState */])(this.getTimelineId()),
      lastSyncedRevision = lastSyncState && lastSyncState.revision || 0,
      lastSyncedTimestamp = lastSyncState && lastSyncState.timestamp,

      // get client changeset
      clientChanges = await this.getPendingClientChanges(),

      // find a create or import changeset in the client changes
      isCreatedLocally = _.some(clientChanges, changeset => {return this.model === changeset.model && (changeset.action === 'create' || changeset.action === 'import');}),
      serverChanges;

      // if the entity exists everywhere
      // or if the entity has been synced in the past
      // or if the entity has not been synced in the past, but is not created locally(could be an update)
      // - find server changes and sync with client changes
      if (lastSyncedRevision || this.isOmnipresent || !isCreatedLocally) {
        serverChanges = await this.getPendingServerChanges({ lastSyncedRevision, lastSyncedTimestamp });

        await this._processPendingChangesWithCR(clientChanges, serverChanges);
      }

      // if entity has not been synced before and has local changes
      // it means entity does not exist on sync, so we cannot fetch server changes
      // just sync client changes
      else if (!_.isEmpty(clientChanges)) {
          await this.processClientChanges(clientChanges);
        }

        // if entity has not been synced before and does not have local changes
        // it means sync is instructing to create the entity
        // process only server changes
        else {
            serverChanges = await this.getPendingServerChanges({ lastSyncedRevision, lastSyncedTimestamp });
            await this.processServerChanges(serverChanges);
          }

      this._onSyncFinishedSubject.next({ startRevision: lastSyncedRevision });
    }
    catch (e) {
      // rethrow the original exception for the caller
      // @todo: also do we need to do any kind of error handling here?
      throw e;
    } finally
    {
      this.isSyncing = false;
    }
  }

  async _processPendingChangesWithCR(clientChanges, serverChanges) {
    // if client changes and server changes are present go for Conflict Resolution
    if (!_.isEmpty(clientChanges) && !_.isEmpty(serverChanges)) {
      let resolution;

      // resolve conflicts for changes
      try {
        pm.logger.info(`BaseSyncTimeline~_processPendingChangesWithCR: Starting conflict resolution for ${this.model}:${this.modelId}`);
        resolution = await Object(__WEBPACK_IMPORTED_MODULE_7__ConflictResolutionHelpers__["b" /* resolveConflicts */])(_.cloneDeep(clientChanges), _.cloneDeep(serverChanges), this.getTimelineId());
        pm.logger.info(`BaseSyncTimeline~_processPendingChangesWithCR: Finished conflict resolution for ${this.model}:${this.modelId}`);
      }
      catch (e) {
        pm.logger.warn(`BaseSyncTimeline~_processPendingChangesWithCR: Error in resolving conflicts for ${this.model}:${this.modelId}`, e);
      }

      clientChanges = resolution.clientChanges || [];
      serverChanges = resolution.serverChanges || [];
    }

    // process the client and server changes after CR
    await Promise.all([
    this.processClientChanges(clientChanges),
    this.processServerChanges(serverChanges)]);

  }


  /**
     * Process the outgoing changesets
     *
     * @param  {Observable} changesets$
     *
     * @returns {Observable}
     */
  processClientChangesObservable(clientChanges$) {

    return clientChanges$.
    pipe(

    // send the changeset to be processed
    Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["c" /* concatMap */])(changeset => {
      this.setSyncing();
      return new Promise((resolve, reject) => {

        let timelineInfo = this.getTimelineId();

        pm.logger.info('BaseSyncTimeline~processClientChangesObservable: Started sending changeset for ' +
        `${changeset.model}:${changeset.action}:${_.get(changeset, 'data.modelId') || _.get(changeset, 'data.instance.id')} ` +
        `Timeline:${timelineInfo.model}:${timelineInfo.modelId}`);

        pm.syncManager.sendChangesetToServer(changeset, function (err, response) {
          if (err) {
            pm.logger.warn('BaseSyncTimeline~processClientChangesObservable: Error in sending changeset for ' +
            `${changeset.model}:${changeset.action}:${_.get(changeset, 'data.modelId') || _.get(changeset, 'data.instance.id')} ` +
            `Timeline:${timelineInfo.model}:${timelineInfo.modelId}`, err);
            reject(err);
            return;
          }

          pm.logger.info('BaseSyncTimeline~processClientChangesObservable: Success for sending changeset for ' +
          `${changeset.model}:${changeset.action}:${_.get(changeset, 'data.modelId') || _.get(changeset, 'data.instance.id')} ` +
          `Timeline:${timelineInfo.model}:${timelineInfo.modelId}`);

          resolve(response);
          return;
        });
      }).

      then(response => {
        this.setSynced();
        return response;
      }).

      catch(() => {
        this.setSynced();
      });
    }),

    Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["c" /* concatMap */])(async ({ revision } = {}) => {
      if (!revision) {
        console.warn('No revision id found for response');
        return;
      }

      return Object(__WEBPACK_IMPORTED_MODULE_2__SyncStateService__["b" /* setSyncState */])(this.getTimelineId(), { revision, timestamp: Date.now() });
    }));

  }

  /**
     * @param  {} clientChanges
     */
  async processClientChanges(clientChanges) {
    return this.processClientChangesObservable(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["j" /* of */])(...clientChanges)).toPromise();
  }

  /**
     * Processes an incoming changeset and moves the revision id marker
     *
     * @param {Observable} serverChanges$
     * @param {Object} [options]
     * @param {Boolean} [options.unordered=false] when set to true each changeset does not wait till
     *    the previous changeset to be applied, use this to process changesets that are order independent
     *
     * @returns {Observable}
     */
  processServerChangesObservable(serverChanges$, options) {
    // process the changesets in parallel if options.unordered is set to true
    let isUnordered = options && options.unordered,
    concurrency = isUnordered ? Number.POSITIVE_INFINITY : 1;

    return serverChanges$.
    pipe(

    // process individual changeset
    Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["g" /* mergeMap */])(changeset => {

      return this.processServerChange(changeset)

      // catch any errors report, but move on to the next item
      .catch(e => {
        // log identifier instead of full message, message might be too big
        let identifier = `${_.get(changeset, ['meta', 'model'])}:${_.get(changeset, ['meta', 'action'])}`;

        // Add analytics event for this changeset drop
        __WEBPACK_IMPORTED_MODULE_12__services_AnalyticsService__["a" /* default */].addEventV2({
          category: 'sync_failure',
          action: 'changeset_dropped',
          entityType: changeset.model,
          entityId: _.get(changeset, 'data.modelId'),
          label: changeset.action });


        // warn about the error and proceed
        pm.logger.warn('Could not process incoming changeset. Skipping it.', identifier, e);
      });
    }, concurrency),

    // update the sync state with the revision of the changeset
    Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["c" /* concatMap */])(async changeset => {

      // might be some error handling flow, just ignore
      if (!changeset) {
        return changeset;
      }

      let currentRevision = _.get(changeset, ['meta', 'revision']);

      // if no sinceId, return an observable and close the iteration
      if (!currentRevision) {
        return changeset;
      }

      let lastSyncState = await Object(__WEBPACK_IMPORTED_MODULE_2__SyncStateService__["a" /* getSyncState */])(this.getTimelineId()),
      lastRevision = lastSyncState && lastSyncState.revision || 0;

      if (lastRevision > currentRevision) {
        if (!isUnordered) {
          // the last sync state is ahead of the current revision
          // and the changeset does not expect it, as isUnordered is not truthy
          // Add analytics event for sync invalid state
          __WEBPACK_IMPORTED_MODULE_12__services_AnalyticsService__["a" /* default */].addEventV2({
            category: 'sync_failure',
            action: 'changeset_sync_invalid',
            label: changeset.action,
            entityType: changeset.model,
            entityId: _.get(changeset, 'data.modelId') });

          pm.logger.warn('Sync state invalid. Changeset processed is behind the last sync state', this.getTimelineId(), lastRevision, currentRevision);

        }

        return changeset;
      }

      await Object(__WEBPACK_IMPORTED_MODULE_2__SyncStateService__["b" /* setSyncState */])(this.getTimelineId(), { revision: currentRevision, timestamp: Date.now() });

      return changeset;
    }));

  }

  /**
     * Processes one single sync message for the App.
     *
     * Does not update the revision id marker for the changeset.
     *
     * @param {Object} serverChange
     *
     * @returns {Promise}
     */
  async processServerChange(serverChange) {
    let timelineInfo = this.getTimelineId(),
    changeset;


    try {
      pm.logger.info('BaseSyncTimeline~processServerChange: Started processing changeset for ' +
      `${serverChange.model}:${serverChange.action}:${_.get(serverChange, 'data.modelId') || _.get(serverChange, 'data.instance.id')} ` +
      `Timeline:${timelineInfo.model}:${timelineInfo.modelId}`);

      changeset = await Object(__WEBPACK_IMPORTED_MODULE_4__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(serverChange);

      pm.logger.info('BaseSyncTimeline~processServerChange: Finished processing changeset for ' +
      `${serverChange.model}:${serverChange.action}:${_.get(serverChange, 'data.modelId') || _.get(serverChange, 'data.instance.id')} ` +
      `Timeline:${timelineInfo.model}:${timelineInfo.modelId}`);
    }
    catch (e) {

      pm.logger.warn('BaseSyncTimeline~processServerChange: Error in processing changeset for ' +
      `${serverChange.model}:${serverChange.action}:${_.get(serverChange, 'data.modelId') || _.get(serverChange, 'data.instance.id')} ` +
      `Timeline:${timelineInfo.model}:${timelineInfo.modelId}`, e);
    }

    return changeset;
  }

  /**
     * Processes an array of incoming changesets
     *
     * @private
     *
     * @param {Array.<Object>} serverChanges
     *
     * @returns {Promise}
     */
  async processServerChanges(serverChanges) {
    let perfMarker = `incomingSyncStart:${this.model}:${this.modelId}`;

    performance.mark(perfMarker);

    // set syncing in this function and not in `processServerChange` because we do not want status to be set
    // for all incoming realtime changesets, but want for the initial changesets
    this.setSyncing();

    try {
      let serverChanges$ = Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["j" /* of */])(...serverChanges),
      orderedSequence$ = serverChanges$,
      unorderedSequence$ = Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["j" /* of */])();

      // this timeline requires filtering changesets out of main ordered sequence
      if (this.filterOrderIndependentChangesets) {
        orderedSequence$ = serverChanges$.pipe(
        Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["d" /* filter */])(changeset => {return !this.filterOrderIndependentChangesets(changeset);}));


        unorderedSequence$ = serverChanges$.pipe(
        Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["d" /* filter */])(changeset => {return this.filterOrderIndependentChangesets(changeset);}));

      }

      let processUnorderedSequence$ = this.processServerChangesObservable(unorderedSequence$, { unordered: true }),
      processOrderedSequence$ = this.processServerChangesObservable(orderedSequence$);

      await Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["f" /* concat */])(processOrderedSequence$, processUnorderedSequence$).toPromise();
    }
    catch (e) {throw e;}

    // set synced in finally block as it is called always.
    finally {this.setSynced();}

    performance.measure(`initialSync:${this.model}`, perfMarker);
  }

  /**
     * Subscribes to realtime changes.
     */
  subscribeToRealtimeChanges() {
    if (this.realtimeChangesSubscription && this.realtimeOutgoingChangesSubscription) {
      return;
    }

    let realtimeMessages$ = Object(__WEBPACK_IMPORTED_MODULE_5__RealtimeSyncMessagesService__["a" /* getRealtimeMessagesObservable */])(),
    processIncomingRealtimeMessages$;

    realtimeMessages$ = realtimeMessages$.
    pipe(

    // filter messages relevant to this timeline
    Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["d" /* filter */])(message => {
      if (!message || !message.meta || !message.meta.timeline) {
        return false;
      }

      return message.meta.timeline.model === this.model && message.meta.timeline.model_id === this.modelId;
    }),

    Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["f" /* map */])(__WEBPACK_IMPORTED_MODULE_4__models_sync_services_SyncIncomingHandler__["a" /* buildChangesetFromMessage */]));


    // This is how we buffer realtime messages till pending sync finishes
    // 1. We first create one observable that uses `buffer` https://rxjs-dev.firebaseapp.com/api/operators/buffer
    // to buffer all changes till offline changes are synced
    // 2. Because we do not want buffering after that, we terminate the buffering as one observable
    // and concatenate the original observable with the buffer
    processIncomingRealtimeMessages$ = Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["f" /* concat */])(

    // buffer events till sync finishes
    // then spread the buffered events as individual events
    realtimeMessages$.pipe(

    // if the timeline is syncing buffer till the first sync finished event
    // otherwise just subscribe
    Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* buffer */])(this.isSyncing ? this.onSyncFinishedObservable$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["j" /* take */])(1)) : Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["j" /* of */])()),
    Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["g" /* mergeMap */])(bufferedEvents => {return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["j" /* of */])(...bufferedEvents);})),


    // concatenate the original stream
    realtimeMessages$);


    // subscribe to the realtime stream and store the subscription
    // this will be used as a flag to check if we are subscribed and to unsubscribe if needed
    this.realtimeChangesSubscription = this.processServerChangesObservable(processIncomingRealtimeMessages$).

    subscribe(null, () => {
      // @todo: observe probable causes if this happens and perform retry if needed
      pm.logger.error('Realtime incoming changes observable errored out');

      // cleanup subscription on socket error
      this.realtimeChangesSubscription = null;
    }, () => {
      // cleanup subscription on socket complete
      this.realtimeChangesSubscription = null;
    });


    let processOutgoingChangeset$;

    // take the stream of all outgoing changesets
    processOutgoingChangeset$ = __WEBPACK_IMPORTED_MODULE_6__RealtimeOutgoingSyncMessageService__["c" /* realtimeOutgoingMessagesTillSocketDisconnect$ */].
    pipe(

    // get the timeline it belongs to
    Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["f" /* map */])(changeset => {
      return _.get(changeset, ['meta', 'timeline']);
    }),

    // filter off changesets that do not belong to this timeline
    Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["d" /* filter */])(timeline => {
      return timeline && timeline.model === this.model && timeline.model_id === this.modelId;
    }),

    // throttle them so we don't spam DB with reads for a single action that created
    // multiple changesets at once
    Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["l" /* throttleTime */])(PUSH_OUTGOING_CHANGES_THROTTLE_TIME, __WEBPACK_IMPORTED_MODULE_0_rxjs__["d" /* asyncScheduler */], { leading: true, trailing: true }),

    // get all the pending changesets and then publish them to sync
    Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["c" /* concatMap */])(() => {
      // @todo: investigate a possible performance issue due to
      // queueing the calls to getAllChangesets
      return this.getPendingClientChanges().
      then(changesets => {
        return this.processClientChanges(changesets);
      });
    }));


    this.realtimeOutgoingChangesSubscription = processOutgoingChangeset$.

    subscribe(null, () => {
      // @todo: observe probable causes if this happens and perform retry if needed
      pm.logger.error('Realtime incoming changes observable errored out');

      // cleanup subscription on socket error
      this.realtimeOutgoingChangesSubscription = null;
    }, () => {
      // cleanup subscription on socket complete
      this.realtimeOutgoingChangesSubscription = null;
    });
  }

  filterClientChanges(message) {
    if (!message || !message.meta || !message.meta.timeline) {
      return false;
    }

    return message.meta.timeline.model === this.model && message.meta.timeline.model_id === this.modelId;
  }

  /**
     * Calls /sync which internally subscribes to that entity
     *
     * @param {Object} [options]
     * @param {String} [options.lastSyncedRevision]
     * @param {Number} [options.lastSyncedTimestamp]
     *
     * @returns {Promise.<Array>} resolves with the entities from the response
     */
  async getPendingServerChanges(options) {
    let lastSyncedRevision = options && options.lastSyncedRevision,
    lastSyncedTimestamp = options && options.lastSyncedTimestamp;

    // throw an error and do not retry when the retry count has exceeded maximum count
    if (this.errorCount > MAX_ERROR_RETRY) {
      throw new Error(`BaseSyncTimeline~getPendingServerChanges: Could not make /sync call. Exceeded maximum retry count for ${this.model}:${this.modelId}`);
    }

    this.subscribeToRealtimeChanges();

    try {
      pm.logger.info(`BaseSyncTimeline~getPendingServerChanges: Starting /sync call for ${this.model}:${this.modelId}`);

      let response = await Object(__WEBPACK_IMPORTED_MODULE_3__services_SyncService__["c" /* promisifiedRequest */])({
        model: this.model,
        action: 'sync',
        meta: {
          query: {
            since_id: lastSyncedRevision },

          pathVariables: {
            id: this.modelId } } },


      { requestTimeout: SYNC_REQUEST_TIMEOUT });

      /** ERROR HANDLING  */

      // make sure the sync rejects when the API returns with any non success response
      // this is to make sure we don't mark the entity as synced if there are errors in /sync API
      // no need for any specific error handling here, the polling service
      // will try to resync it after a period of time
      if (!response || response.error) {
        // Action for analytics event to be tracked
        let action = 'initial_sync_fail';

        // if the server returns an error or no response (also an error from server)
        // increase the error count for this timeline, so we can stop retrying after a limit
        // do this only for server errors, continue retrying for client errors
        this.errorCount++;

        pm.syncManager.sailsIO.url.includes('premium') ?
        action = action + '_premium' :
        action = action + '_prod';

        _.get(response, 'jwr.statusCode') >= 400 && _.get(response, 'jwr.statusCode') < 500 ?
        action = action + '_4xx' :
        action = action + '_5xx';

        // Tracking this error as analytics event
        __WEBPACK_IMPORTED_MODULE_12__services_AnalyticsService__["a" /* default */].addEventV2({
          category: 'sync_failure',
          action: action,
          entityType: this.model,
          entityId: this.modelId });


        throw new Error(_.get(response, ['error', 'message'], 'Could not get response for /sync'));
      }

      /** RESET_TIMESTAMP HANDLING  */

      // if last synced timestamp is earlier than the reset timestamp
      // we trigger a force sync flow for this timeline - if force sync is defined
      // once it finishes, to continue rest of syncing we return empty list of changesets
      if (response && response.reset_timestamp && lastSyncedTimestamp && lastSyncedTimestamp < response.reset_timestamp) {
        pm.logger.warn('BaseSyncTimeline: Requesting force sync due to reset timestamp');

        this.markForForceSync && this.markForForceSync();
        return [];
      }

      // construct changesets from sync response
      let serverChangesets = _.map(response && response.entities || [], __WEBPACK_IMPORTED_MODULE_4__models_sync_services_SyncIncomingHandler__["a" /* buildChangesetFromMessage */]),
      lastChangeset;

      /** MAX_ID HANDLING  */

      // max_id is the last revision in the sync's revision table upto which this /sync response
      // has processed, use that to update the since id marker to optimize sync performance
      // in subsequent /sync calls

      if (_.isEmpty(serverChangesets)) {
        // if there are no server changesets, and there is a max_id in sync response
        // set the max_id as the last synced revision
        // that way when we start syncing next time, we can skip all the changesets upto max_id
        response && response.max_id && (await Object(__WEBPACK_IMPORTED_MODULE_2__SyncStateService__["b" /* setSyncState */])(this.getTimelineId(), { revision: response.max_id, timestamp: Date.now() }));
        return serverChangesets;
      }

      // if there are changesets take the last changeset
      lastChangeset = _.last(serverChangesets);

      // and set the max_id as the revision id of the last changeset
      // that way when we start syncing next time, we can skip all the changesets upto max_id
      lastChangeset && response && response.max_id && _.set(lastChangeset, ['meta', 'revision'], response.max_id);

      pm.logger.info(`BaseSyncTimeline~getPendingServerChanges: Finished /sync call for ${this.model}:${this.modelId}`);

      return serverChangesets;
    }
    catch (e) {
      pm.logger.warn(`BaseSyncTimeline~getPendingServerChanges: Error in ${this.model}:${this.modelId} /sync response`, e);

      // clean up the subscriptions
      this.unsubscribeRealtimeSubscriptions && this.unsubscribeRealtimeSubscriptions();

      // bubble up the error so the isSyncing state can be reset
      // so on another subscribe it does not bails out and subscribes again.
      // also if it enters `this.sync` and then socket disconnects
      // then it also reset the state and next time subscriptions can go on easily
      throw e;
    }
  }

  /**
     * Gets the pending client changes from sync client
     *
     * NOTE: This function will sanitize the format of instance in client changesets to follow format of instance in server changeset
     *
     * @returns {Promise.<Array>}
     */
  async getPendingClientChanges() {
    return new Promise((resolve, reject) => {
      pm.logger.info(`BaseSyncTimeline~getPendingClientChanges: Starting to get pending changes for ${this.model}:${this.modelId}`);
      Object(__WEBPACK_IMPORTED_MODULE_9__SyncClientService__["b" /* getAllChangesets */])((err, changesets) => {
        if (err) {
          pm.logger.warn(`BaseSyncTimeline~getPendingClientChanges: getAllChangesets errored out for ${this.model}:${this.modelId}`, err);
          return reject(err);
        }

        pm.logger.info(`BaseSyncTimeline~getPendingClientChanges: Finished to get pending changes for ${this.model}:${this.modelId}`);

        // Since format of instance in changesets returned by client may not follow structure of instance in server changesets,
        // We are doing the conversation right now so that every changeset follows same structure throughout processing them.

        // Earlier this process used to happen just before sending the changesets to server in `SyncManagerNew.js` file. It's been
        // moved here because while resolving conflicts we need to compare the changesets and if instance of client and server changesets are not in same
        // format there will be invalid comparison
        _.forEach(changesets, changeset => {
          Object(__WEBPACK_IMPORTED_MODULE_11__models_sync_SyncOutgoingHelpers__["a" /* sanitizeHydratedChangeset */])(changeset);
        });

        let filteredChangesets = _.filter(changesets, changeset => {

          // filter the changesets for this particular entity and return
          return this.filterClientChanges(changeset);
        });

        return resolve(filteredChangesets);
      });
    });
  }

  /**
     * Returns true if the timeline is subscribed to realtime changes.
     *
     * @returns {Boolean}
     */
  isSubscribed() {
    return Boolean(this.realtimeChangesSubscription);
  }

  /**
     * Subscribe to realtime changes on a timeline.
     *
     * @returns {Promise}
     */
  async subscribe() {
    if (this.realtimeChangesSubscription) {
      return;
    }

    if (this.isSyncing) {
      pm.logger.info(`BaseSyncTimeline~subscribe: Skipping new subscribe for ${this.model}:${this.modelId}. Timeline is syncing.`);
      return;
    }

    pm.logger.info(`BaseSyncTimeline~subscribe: Subscribing to real time changes for ${this.model}:${this.modelId}`);

    return this.sync();
  }

  /**
     * Unsubscribe from realtime changes for this timeline.
     *
     * @returns {Promise}
     */
  async unsubscribe() {
    pm.logger.info(`BaseSyncTimeline~unsubscribe: Unsubscribing to real time changes & subscriptions for ${this.model}:${this.modelId}`);

    // no active subscription
    if (!this.realtimeChangesSubscription) {
      pm.logger.info(`BaseSyncTimeline~unsubscribe: Bail out for ${this.model}:${this.modelId} as no subscriptions`);
      return;
    }

    if (this.isSyncing) {
      pm.logger.info(`BaseSyncTimeline~unsubscribe: Bail out for ${this.model}:${this.modelId} as timeline syncing`);
      return;
    }

    return Object(__WEBPACK_IMPORTED_MODULE_3__services_SyncService__["c" /* promisifiedRequest */])({
      model: this.model,
      action: ACTION_UNSUBSCRIBE,
      meta: {
        pathVariables: {
          id: this.modelId } } },


    { requestTimeout: SYNC_REQUEST_TIMEOUT }).

    then(() => {
      this.realtimeChangesSubscription && this.realtimeChangesSubscription.unsubscribe();
      this.realtimeChangesSubscription = null;

      this.realtimeOutgoingChangesSubscription && this.realtimeOutgoingChangesSubscription.unsubscribe();
      this.realtimeOutgoingChangesSubscription = null;

      this.setIdle();
      pm.logger.info(`BaseSyncTimeline~unsubscribe: Unsubscribed timeline ${this.model}:${this.modelId}`);
    });
  }

  /**
     * Terminates a timeline. It means removing the sync marker for this entity and unsubscribing active subscriptions.
     *
     * @returns {Promise}
     */
  async terminate() {
    pm.logger.info(`BaseSyncTimeline~terminate: Terminating timeline ${this.model}:${this.modelId}`);

    // cleanup subscriptions
    this.unsubscribeRealtimeSubscriptions && this.unsubscribeRealtimeSubscriptions();

    // fire terminate hook for the timeline
    this.onTerminate && this.onTerminate();

    // wipe since id
    await Object(__WEBPACK_IMPORTED_MODULE_2__SyncStateService__["c" /* wipeSyncState */])(this.getTimelineId());

    let partials = Object(__WEBPACK_IMPORTED_MODULE_10__utils_uid_helper__["b" /* decomposeUID */])(this.modelId);

    // remove all pending changesets for this modelId
    partials.modelId && (await new Promise(resolve => {
      Object(__WEBPACK_IMPORTED_MODULE_9__SyncClientService__["d" /* removeModelsFromAllChangesets */])([partials.modelId], err => {
        if (err) {
          pm.logger.warn(`BaseSyncTimeline~terminate: Could not remove changesets for model on delete for ${this.model}:${this.modelId}`, err);
          return resolve();
        }

        pm.logger.info(`BaseSyncTimeline~terminate: Finished terminating timeline ${this.model}:${this.modelId}`);
        resolve();
      });
    }));
  }

  /**
     * Used to force stop a timeline, i.e. stop all real time subscriptions and set syncing to false
     */
  forceStop() {
    pm.logger.info(`BaseSyncTimeline~forceStop: Force stop ${this.model}:${this.modelId}`);

    // on force stop of a timeline set the isSyncing flag to false
    this.isSyncing && (this.isSyncing = false);

    // make timeline to publish an idle status
    this.setIdle();

    // unsubscribe from all real time subscriptions
    this.unsubscribeRealtimeSubscriptions && this.unsubscribeRealtimeSubscriptions();
  }

  /**
     * Used to remove real time incoming and outgoing subscriptions
     */
  async unsubscribeRealtimeSubscriptions() {
    if (this.realtimeChangesSubscription) {
      this.realtimeChangesSubscription.unsubscribe();
      this.realtimeChangesSubscription = null;
    }

    if (this.realtimeOutgoingChangesSubscription) {
      this.realtimeOutgoingChangesSubscription.unsubscribe();
      this.realtimeOutgoingChangesSubscription = null;
    }
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_event__ = __webpack_require__(2);



const ACTION_IMPORT = 'import',
ACTION_UPDATE = 'update',
ACTION_DESTROY = 'destroy',

WORKSPACE = 'workspace';


/* harmony default export */ __webpack_exports__["default"] = ({
  toChangesets: {
    created(event, rootEvent) {
      let eventData = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["d" /* getEventData */])(event),
      eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["g" /* getEventNamespace */])(event),
      rootEventMeta = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["e" /* getEventMeta */])(rootEvent),
      changesetMeta,
      changesetData;

      if (rootEventMeta && rootEventMeta[WORKSPACE]) {
        changesetMeta = _.pick(rootEventMeta, WORKSPACE);
      }

      // default changeset data
      changesetData = {
        modelId: eventData.id,
        instance: eventData };


      // if the model is identified by owner, add owner information to changeset data
      eventData.owner && (changesetData.owner = eventData.owner);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__["a" /* default */])(eventNamespace, ACTION_IMPORT, changesetData, changesetMeta)];
    },
    updated(event) {
      let eventData = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["d" /* getEventData */])(event),
      eventMeta = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["e" /* getEventMeta */])(event),
      eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["g" /* getEventNamespace */])(event),
      changesetData;

      // default changeset data
      changesetData = {
        modelId: eventData.id,
        keys: eventMeta.updatedKeys };


      // if the model is identified by owner, add owner information to changeset data
      eventData.owner && (changesetData.owner = eventData.owner);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__["a" /* default */])(eventNamespace, ACTION_UPDATE, changesetData)];
    },
    deleted(event) {
      let eventData = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["d" /* getEventData */])(event),
      eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["g" /* getEventNamespace */])(event),
      changesetData;

      // default changeset data
      changesetData = {
        modelId: eventData.id,
        instance: eventData };


      // if the model is identified by owner, add owner information to changeset data
      eventData.owner && (changesetData.owner = eventData.owner);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__["a" /* default */])(eventNamespace, ACTION_DESTROY, changesetData)];
    } } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toAppEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model_event__ = __webpack_require__(2);


const EVENT_CREATE_DEEP = 'create_deep',
EVENT_UPDATE = 'update',
EVENT_DELETE = 'delete',

ORDER = 'order',
FOLDERS_ORDER = 'folders_order';

let toAppEvents = {
  import(changeset) {
    let model = changeset.model,
    instance = _.get(changeset, ['data', 'instance']);

    return [Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])(EVENT_CREATE_DEEP, model, { model: model, [model]: instance })];
  },

  create(changeset) {
    let model = changeset.model,
    instance = _.get(changeset, ['data', 'instance']);

    // remove any child references, and child order references
    instance = _.omit(instance, ['folders', 'requests', 'responses', 'folders_order', 'order']);

    return [Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])(EVENT_CREATE_DEEP, model, { model: model, [model]: instance })];
  },

  update(changeset) {
    let model = changeset.model,
    instance = _.get(changeset, ['data', 'instance']),
    events = [],

    updateData,
    hasShallowUpdates,

    // look for order properties in update changesets
    orderUpdateData = {};

    if (model === 'request' || model === 'response') {
      return [Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])(EVENT_UPDATE, changeset.model, instance)];
    }

    // if sync sends an order property via an update, it means an order update
    // we can drop order updates with `order` and `folders_order` for null and []
    // because sync will never intend a remove all children via a parent update
    !_.isEmpty(instance, ORDER) && (orderUpdateData.order = instance.order);
    !_.isEmpty(instance, FOLDERS_ORDER) && (orderUpdateData.folders_order = instance.folders_order);

    // look for order properties in update changesets
    if (!_.isEmpty(orderUpdateData)) {
      orderUpdateData.id = _.get(changeset, ['data', 'modelId']);

      events.push(Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])('reorder_children', changeset.model, {
        model: changeset.model,
        [changeset.model]: orderUpdateData }));

    }

    // remove order update properties
    updateData = _.omit(instance, [FOLDERS_ORDER, ORDER]);

    // see if there are any other updates other than order updates
    hasShallowUpdates = _.chain(updateData).omit(['id']).keys().isEmpty().value();


    if (!hasShallowUpdates) {
      // create an update event without the order updates
      events.push(Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])(EVENT_UPDATE, changeset.model, updateData));
    }

    return events;
  },

  transfer: function (changeset) {
    let model = changeset.model;

    return [Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])('move', model, {
      model: model,
      [model]: { id: _.get(changeset, ['data', 'modelId']) },
      target: _.pick(_.get(changeset, 'data.to'), ['model', 'modelId']) })];

  },

  destroy(changeset) {
    let model = changeset.model,
    modelId = _.get(changeset, ['data', 'modelId']);

    // @todo: need to change all collection model deletes to deleteDeep
    return [Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["a" /* createEvent */])(EVENT_DELETE, model, { id: modelId })];
  } };



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isTimelineInCache */
/* harmony export (immutable) */ __webpack_exports__["c"] = getTimelineStatusObservable;
/* unused harmony export getTimeline */
/* harmony export (immutable) */ __webpack_exports__["d"] = syncAndSubscribeTimeline;
/* harmony export (immutable) */ __webpack_exports__["g"] = unsubscribeTimeline;
/* harmony export (immutable) */ __webpack_exports__["f"] = unsubscribeAllTimelines;
/* harmony export (immutable) */ __webpack_exports__["e"] = terminateTimeline;
/* harmony export (immutable) */ __webpack_exports__["b"] = getSubscribedTimelines;
/* harmony export (immutable) */ __webpack_exports__["a"] = forceStopAllTimelines;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_timelines__ = __webpack_require__(933);


/**
                                                  * Holds a reference to all timelines.
                                                  *
                                                  * @type {Map}
                                                  */
const _timelineCache = new Map();

/**
                                   *
                                   * @param {Object} timelineId Timeline identifier
                                   * @param {String} timelineId.model
                                   * @param {String} timelineId.modelId
                                   *
                                   * @returns {Boolean}
                                   */
function isTimelineInCache(timelineId) {
  if (!timelineId || !timelineId.model || !timelineId.modelId) {
    return;
  }

  let timelineCacheRef = `${timelineId.model}:${timelineId.modelId}`;

  return _timelineCache.has(timelineCacheRef);
}

/**
   * Returns the status for a timeline
   *
   * @returns {String}
   */
function getTimelineStatusObservable(timelineId) {
  let timeline = _timelineCache.get(`${timelineId.model}:${timelineId.modelId}`);
  return timeline && timeline.timelineStatusObservable$;
}


/**
   * Returns an instance of sync timeline for the given timeline identifier.
   * If instance already was created previously it returns it, otherwise creates a new instance.
   *
   * @param {Object} timelineId Timeline identifier
   * @param {String} timelineId.model
   * @param {String} timelineId.modelId
   *
   * @returns {Object} sync timeline instance
   */
function getTimeline(timelineId) {
  if (!timelineId || !timelineId.model || !timelineId.modelId) {
    return;
  }

  let timelineCacheRef = `${timelineId.model}:${timelineId.modelId}`,
  timeline = _timelineCache.get(timelineCacheRef);

  // cache hit
  if (timeline) {
    return timeline;
  }

  // cache miss

  // instantiate timeline
  let TimelineModel = __WEBPACK_IMPORTED_MODULE_0__sync_timelines__["a" /* default */][timelineId.model];

  if (!TimelineModel) {
    pm.logger.warn('getTimeline: Could not find timeline model', timelineId.model);
    return;
  }

  timeline = new TimelineModel(timelineId);

  // update cache
  _timelineCache.set(timelineCacheRef, timeline);

  return timeline;
}

/**
   * Syncs pending changes in a timeline and subscribes to further changes.
   *
   * @param {Object} timelineId Timeline identifier
   * @param {String} timelineId.model
   * @param {String} timelineId.modelId
   *
   * @returns {Promise} sync timeline instance
   */
function syncAndSubscribeTimeline(timelineId) {
  let timeline = getTimeline(timelineId);

  return timeline.subscribe().
  catch(e => {
    pm.logger.warn('TimelineHelpers~syncAndSubscribeTimeline: Could not subscribe to timeline', e);
  });
}

/**
   * Unsubscribe from changes for a timeline
   *
   * @param {Object} timelineId Timeline identifier
   * @param {String} timelineId.model
   * @param {String} timelineId.modelId
   *
   * @returns {Promise} sync timeline instance
   */
function unsubscribeTimeline(timelineId) {
  if (!isTimelineInCache(timelineId)) {
    return;
  }

  let timeline = getTimeline(timelineId);

  return timeline.unsubscribe();
}

/**
   * Unsubscribe all active timelines.
   */
function unsubscribeAllTimelines() {
  // for each timeline in cache unsubscribe it
  _timelineCache.forEach(timelineId => {
    let timeline = getTimeline(timelineId);

    timeline.unsubscribe();
  });
}

/**
   * Terminate a timeline. Includes deleting the sync marker for the timeline.
   *
   * @param {Object} timelineId Timeline identifier
   * @param {String} timelineId.model
   * @param {String} timelineId.modelId
   *
   * @returns {Promise} sync timeline instance
   */
function terminateTimeline(timelineId) {
  let timeline = getTimeline(timelineId);

  return timeline.terminate();
}

/**
   * Returns a list of all timelines subscribed at this point in time.
   *
   * @returns {Array.<Object>} returns an array of timeline identifiers
   */
function getSubscribedTimelines() {
  return Array.from(_timelineCache.values()).
  filter(timeline => {
    return timeline && timeline.isSubscribed();
  });
}

/**
   * Used to force stop all the timelines
   */
function forceStopAllTimelines() {
  pm.logger.info('SyncTimelineHelper: Force stopping all timelines');
  _timelineCache.forEach(timelineId => {
    let timeline = getTimeline(timelineId);

    timeline.forceStop();
  });
}

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(37);
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

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toChangesets; });
/* unused harmony export toEvents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_utils_collection_tree__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_event__ = __webpack_require__(2);




const ACTION_IMPORT = 'import',
ACTION_UPDATE = 'update',
ACTION_TRANSFER = 'transfer',
ACTION_DESTROY = 'destroy',

EVENT_CREATE_DEEP = 'create_deep',
EVENT_UPDATE = 'update',
EVENT_DELETE = 'delete',

ORDER = 'order',
FOLDERS_ORDER = 'folders_order';

let toChangesets = {
  created(event) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["d" /* getEventData */])(event),
    eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["g" /* getEventNamespace */])(event),
    changesetData;

    // default changeset data
    changesetData = {
      modelId: eventData.id,
      instance: eventData,
      parent: Object(__WEBPACK_IMPORTED_MODULE_1__common_utils_collection_tree__["b" /* getParent */])(eventData, eventNamespace) };


    // if the model is identified by owner, add owner information to changeset data
    eventData.owner && (changesetData.owner = eventData.owner);

    return [Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__["a" /* default */])(eventNamespace, ACTION_IMPORT, changesetData)];
  },

  updated(event) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["d" /* getEventData */])(event),
    eventMeta = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["e" /* getEventMeta */])(event),
    eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["g" /* getEventNamespace */])(event),
    changesetData;

    // default changeset data
    changesetData = {
      modelId: eventData.id,
      instance: eventData,
      keys: eventMeta.updatedKeys,
      parent: Object(__WEBPACK_IMPORTED_MODULE_1__common_utils_collection_tree__["b" /* getParent */])(eventData, eventNamespace) };


    // if the model is identified by owner, add owner information to changeset data
    eventData.owner && (changesetData.owner = eventData.owner);

    return [Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__["a" /* default */])(eventNamespace, ACTION_UPDATE, changesetData)];
  },

  /**
      * 1. Create a changeset for transferring the item. Sync will add this item to the last position in parent.
      * 2. Create a changeset for updating the position on the parent. (Response move doesn't have a parent update).
      */
  moved: function (event) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["d" /* getEventData */])(event),
    eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["g" /* getEventNamespace */])(event),
    transferredItem = eventData[eventData.model],
    transferChangesetData = {},
    target = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["d" /* getEventData */])(event).target,
    changesets = [],
    lowLevelEvents = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["h" /* getLowLevelEvents */])(event),
    parentUpdatedEvent;

    // 1. Transfer changeset
    // 1.a Add model info
    transferChangesetData.modelId = transferredItem.id;
    transferChangesetData.instance = transferredItem;

    // 1b. Add target info
    transferChangesetData.to = _.pick(target, ['model', 'modelId']);

    // 1c. Add source info
    transferChangesetData.parent = transferChangesetData.from = Object(__WEBPACK_IMPORTED_MODULE_1__common_utils_collection_tree__["b" /* getParent */])(transferredItem, eventNamespace);

    changesets.push(Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__["a" /* default */])(event.namespace, ACTION_TRANSFER, transferChangesetData));

    // 2. Find the updated changeset on target for order update
    // we do this because a transfer changeset only moves the item to target at the end
    // hence the order should be sent as an explicit order update changeset to sync
    parentUpdatedEvent = _.find(lowLevelEvents, stage1Event => {
      return Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["f" /* getEventName */])(stage1Event) === 'updated' && _.get(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["d" /* getEventData */])(stage1Event), 'id') === target.modelId;
    });

    if (parentUpdatedEvent) {
      changesets = changesets.concat(toChangesets.updated(parentUpdatedEvent));
    }

    return changesets;
  },

  deleted(event) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["d" /* getEventData */])(event),
    eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["g" /* getEventNamespace */])(event),
    changesetData;

    // default changeset data
    changesetData = {
      modelId: eventData.id,
      instance: eventData,
      parent: Object(__WEBPACK_IMPORTED_MODULE_1__common_utils_collection_tree__["b" /* getParent */])(eventData, eventNamespace) };


    // if the model is identified by owner, add owner information to changeset data
    eventData.owner && (changesetData.owner = eventData.owner);

    return [Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__["a" /* default */])(eventNamespace, ACTION_DESTROY, changesetData)];
  } },


toEvents = {
  import(changeset) {
    let model = changeset.model,
    instance = _.get(changeset, ['data', 'instance']);

    return [Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])(EVENT_CREATE_DEEP, model, { model: model, [model]: instance })];
  },

  create(changeset) {
    let model = changeset.model,
    instance = _.get(changeset, ['data', 'instance']);

    // remove any child references, and child order references
    instance = _.omit(instance, ['folders', 'requests', 'responses', 'folders_order', 'order']);

    return [Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])(EVENT_CREATE_DEEP, model, { model: model, [model]: instance })];
  },

  update(changeset) {
    let model = changeset.model,
    instance = _.get(changeset, ['data', 'instance']),
    events = [],

    updateData,
    hasShallowUpdates,

    // look for order properties in update changesets
    orderUpdateData = {};

    if (model === 'request' || model === 'response') {
      return [Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])(EVENT_UPDATE, changeset.model, instance)];
    }

    // if sync sends an order property via an update, it means an order update
    // we can drop order updates with `order` and `folders_order` for null and []
    // because sync will never intend a remove all children via a parent update
    !_.isEmpty(instance, ORDER) && (orderUpdateData.order = instance.order);
    !_.isEmpty(instance, FOLDERS_ORDER) && (orderUpdateData.folders_order = instance.folders_order);

    // look for order properties in update changesets
    if (!_.isEmpty(orderUpdateData)) {
      orderUpdateData.id = _.get(changeset, ['data', 'modelId']);

      events.push(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])('reorder_children', changeset.model, {
        model: changeset.model,
        [changeset.model]: orderUpdateData }));

    }

    // remove order update properties
    updateData = _.omit(instance, [FOLDERS_ORDER, ORDER]);

    // see if there are any other updates other than order updates
    hasShallowUpdates = _.chain(updateData).omit(['id']).keys().isEmpty().value();


    if (!hasShallowUpdates) {
      // create an update event without the order updates
      events.push(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])(EVENT_UPDATE, changeset.model, updateData));
    }

    return events;
  },

  transfer: function (changeset) {
    let model = changeset.model;

    return [Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])('move', model, {
      model: model,
      [model]: { id: _.get(changeset, ['data', 'modelId']) },
      target: _.pick(_.get(changeset, 'data.to'), ['model', 'modelId']) })];

  },

  destroy(changeset) {
    let model = changeset.model,
    modelId = _.get(changeset, ['data', 'modelId']);

    // @todo: need to change all collection model deletes to deleteDeep
    return [Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])(EVENT_DELETE, model, { id: modelId })];
  } };



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCurrentSocketStatus;
/* harmony export (immutable) */ __webpack_exports__["b"] = getSocketStatusObservable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_SyncStatusConstants__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_event__ = __webpack_require__(2);




/**
                                                                   * Used to get the current socket status
                                                                   *
                                                                   * Status is one of these:
                                                                   *  offline: neither connecting nor connected
                                                                   *  connecting: socket connecting but not connected yet
                                                                   *  connected: socket connected
                                                                   *
                                                                   * @returns {String}
                                                                   */
function getCurrentSocketStatus() {
  let isSocketConnecting = pm.syncManager.get('connectingToSocket'),
  isSocketConnected = pm.syncManager.get('socketConnected');

  if (!isSocketConnecting && !isSocketConnected) {
    return __WEBPACK_IMPORTED_MODULE_1__constants_SyncStatusConstants__["c" /* SOCKET_OFFLINE */];
  }

  if (isSocketConnecting && !isSocketConnected) {
    return __WEBPACK_IMPORTED_MODULE_1__constants_SyncStatusConstants__["b" /* SOCKET_CONNECTING */];
  }

  if (!isSocketConnecting && isSocketConnected) {
    return __WEBPACK_IMPORTED_MODULE_1__constants_SyncStatusConstants__["a" /* SOCKET_CONNECTED */];
  }

  return __WEBPACK_IMPORTED_MODULE_1__constants_SyncStatusConstants__["c" /* SOCKET_OFFLINE */];
}

/**
   * @returns {Observable}
   */
function getSocketStatusObservable() {
  return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["a" /* Observable */](observer => {

    // push the initial value of socket status
    observer.next(getCurrentSocketStatus());

    let onchange = () => {
      observer.next(getCurrentSocketStatus());
    };

    let onRequestStatus = pm.eventBus.channel('sync-manager-internal').subscribe(event => {
      let eventName = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["f" /* getEventName */])(event),
      eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["g" /* getEventNamespace */])(event);

      if (eventName === 'pull' && eventNamespace === 'syncStatus') {
        observer.next(getCurrentSocketStatus());
      }
    });

    // listen for changes and on each change of value
    // recompute the socket status and push to the observable
    pm.syncManager.on('change:connectingToSocket', onchange),
    pm.syncManager.on('change:socketConnected', onchange);

    return () => {
      pm.syncManager.off('change:connectingToSocket', onchange),
      pm.syncManager.off('change:socketConnected', onchange);
      onRequestStatus && onRequestStatus();
    };
  });
}

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 3282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_Shortcuts__ = __webpack_require__(1497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ToastManager__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_helpers_OAuth2Tokens__ = __webpack_require__(3284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_cookies_CookieManager__ = __webpack_require__(3285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_helpers_OAuth2Manager__ = __webpack_require__(3286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_ElectronContextMenu__ = __webpack_require__(3289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_collections_CollectionClipboard__ = __webpack_require__(3291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Toasts__ = __webpack_require__(920);










/**
                                                *
                                                * @param {*} cb
                                                */
function bootIndependentServices(cb) {
  _.assign(window.pm, {
    toasts: __WEBPACK_IMPORTED_MODULE_8__models_Toasts__,
    toastManager: new __WEBPACK_IMPORTED_MODULE_2__models_ToastManager__["a" /* default */](),
    cookieManager: new __WEBPACK_IMPORTED_MODULE_4__models_cookies_CookieManager__["a" /* default */](),
    oAuth2Tokens: new __WEBPACK_IMPORTED_MODULE_3__models_helpers_OAuth2Tokens__["a" /* default */](),
    oAuth2Manager: new __WEBPACK_IMPORTED_MODULE_5__models_helpers_OAuth2Manager__["a" /* default */](),
    contextMenuManager: new __WEBPACK_IMPORTED_MODULE_6__controllers_ElectronContextMenu__["a" /* default */](),
    clipboard: new __WEBPACK_IMPORTED_MODULE_7__models_collections_CollectionClipboard__["a" /* default */]() });

  pm.logger.info('IndependentServices~boot - Success');
  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootIndependentServices);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone__ = __webpack_require__(88);
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
      pm.logger.error('Error in fetching oauth2 access tokens', e);
    });
  },

  /**
      * @param {Object} tokenData - object having access_token and other optional attributes like scope, token_type, etc
      */
  addAccessToken: function (tokenData) {
    var accessToken = {
      'id': __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].guid(),
      'timestamp': new Date().getTime(),
      'data': [],
      'name': tokenData.name };


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
      pm.logger.error('Error in adding access token', e);
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
      pm.logger.error('Error in updating access token', e);
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

/***/ 3285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_async__);



const session = __webpack_require__(21).remote.session;

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

    this.loadCookiesDebounced = _.debounce(this.loadCookies, 300);
    this.callbackAccumulator = [];
  }

  /**
     * @private
     *
     * @param {string} url - URL of the cookie
     * @param {string} host - Host (domain) name of the cookie
     * @param {Object} cookie - Cookie object
     * @param {Function} [callback] - Callback function to be triggered
     */
  _writeToCookieStore(url, host, cookie, callback) {
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


    cookieStore.set(cookieToSet, err => {
      _.isFunction(callback) && callback(err);
    });
  }

  /**
     * `loadCookiesBulk` accumulates all the callbacks and uses debounced `loadCookies`.
     * Once `loadCookies` is triggered, all the callbacks are called and the accumulator is cleared.
     *
     * @param {Function} callback - Callback function to be triggered
     */
  loadCookiesBulk(callback) {
    this.callbackAccumulator.push(callback);

    this.loadCookiesDebounced(() => {
      const callbacks = this.callbackAccumulator;

      // Empty the callback accumulator so that we do not miss any callback during flushing of
      // other callbacks
      this.callbackAccumulator = [];

      _.forEach(callbacks, callback => {
        _.isFunction(callback) && callback();
      });
    });
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
        pm.logger.error(e);
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
      pm.logger.error('Could not add cookies for invalid URL');
      pm.logger.error(e);
    }
  }

  /**
     * `cookies` param has a similar structure to `addSingleCookie` method's params
     *
     * @param {Object[]} cookies - Array of Objects containing cookies
     * @param {string} cookies[].url - URL of the cookie
     * @param {string} cookies[].host - Host (domain) name of the cookie
     * @param {Object} cookies[].cookie - Cookie object
     * @param {Function} [callback] - Callback function to be triggered
     */
  addBulkCookies(cookies, callback) {
    __WEBPACK_IMPORTED_MODULE_1_async___default.a.each(cookies, (cookieItem, next) => {
      this._writeToCookieStore(cookieItem.url, cookieItem.host, cookieItem.cookie, next);
    }, err => {
      if (err) {
        return _.isFunction(callback) && callback(err);
      }

      this.loadCookiesBulk(() => {
        _.isFunction(callback) && callback();
      });
    });
  }

  /**
     *
     * @param {string} url - URL of the cookie
     * @param {string} host - Host (domain) name of the cookie
     * @param {Object} cookie - Cookie object
     * @param {Function} [callback] - Callback function to be triggered
     */
  addSingleCookie(url, host, cookie, callback) {
    this._writeToCookieStore(url, host, cookie, err => {
      if (err) {
        return _.isFunction(callback) && callback(err);
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

  editCookie(domain, oldCookie, newCookie, callback) {
    let cookieName = oldCookie.name,
    cookiePath = oldCookie.path;

    let cookieStore = session.fromPartition(__WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].getCookiePartition()).cookies;
    cookieStore.get({}, (error, cookies) => {
      _.each(cookies, cookie => {
        if (!cookie) {
          return;
        }

        cookie.domain = cookie.domain[0] === '.' ? cookie.domain.slice(1) : cookie.domain;

        _.isEqual(cookie.domain, domain) && _.isEqual(cookie.path, cookiePath) && _.isEqual(cookie.name, cookieName) && this.deleteCookie(domain, cookieName, cookie.path, error => {
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
    }, res => {
      // wait for all cookies to be deleted, then delete the domain too from UI
      if (res && res.type === 'RemoveCookieError') {
        res['domain'] = domain;
        _.isFunction(callback) && callback(res);

        return;
      }

      delete this.cookies[domain];

      this.loadCookies(() => {
        let res = {
          type: 'Success',
          domain: domain };


        _.isFunction(callback) && callback(res);
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
        error['type'] = 'removeCookieError';
        _.isFunction(callback) && callback(error);
        return;
      }

      cookieStore.remove(httpsUrl, cookieName, error => {
        if (error) {
          error['type'] = 'removeCookieError';
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

        let bulkCookies = _.map(matchingCookies, cookie => {
          cookie.url = cookie.domain + cookie.path;
          cookie.secure ? cookie.url = 'https://' + cookie.url : cookie.url = 'http://' + cookie.url;

          return {
            url: cookie.url,
            host: cookie.domain,
            cookie };

        });

        this.addBulkCookies(bulkCookies, () => {
          _.isFunction(callback) && callback();
        });
      });
    });
  }};



/* harmony default export */ __webpack_exports__["a"] = (CookieManager);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OAuth2TokenFetcher__ = __webpack_require__(3287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_backbone__);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



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

  processOAuth2RequestToken: function (collectionId) {
    let params = this.get('oAuth2'); // Currently entered parameters on the UI
    this.oAuth2TokenFetcher.trigger('startAuthorization', this.translateIntoLegacy.oAuth2(params), collectionId);
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

  updateOAauth2Token: function (updatedToken) {
    let currentTokens = this.get('savedOAuth2Tokens');

    pm.mediator.trigger('updateOAuth2Token', updatedToken);

    currentTokens = currentTokens.map(function (tk) {
      if (tk.id === updatedToken.id) {
        let token = _extends({},
        tk, {
          name: updatedToken.name });


        return token;
      }

      return tk;
    });

    this.set('savedOAuth2Tokens', currentTokens);
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

/***/ 3287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ModelToSdkTransformer__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_postman_collection__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__ = __webpack_require__(3288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_backbone__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_VariableSessionService__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_ConsoleEventTypes__ = __webpack_require__(266);










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
      * @param {String} collectionId
      *
      * @fires IPC#oauth2GetNewToken
      */
  startAuthorization: function (params, collectionId) {
    let environmentId = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('ActiveEnvironmentStore').id,
    globalsId = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('ActiveGlobalsStore').id,
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('ActiveWorkspaceStore').id;

    Object(__WEBPACK_IMPORTED_MODULE_7__modules_services_VariableSessionService__["e" /* getVariableSessionMap */])({ environmentId, globalsId, workspaceId, collectionId }).
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
        username: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.username), variablesMap),
        name: __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__["a" /* default */].resolve(_.clone(params.name), variablesMap) };


      __WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].send('oauth2GetNewToken', authParams,
      {
        useSystemProxy: pm.settings.getSetting('useSystemProxy'),
        proxies: pm.proxyListManager.getGlobalProxyConfigList(),
        ignoreProxyEnvironmentVariables: !__WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].useProxyEnvironmentVariables(),
        certificates: __WEBPACK_IMPORTED_MODULE_1__utils_ModelToSdkTransformer__["a" /* default */].getClientSslCerts(pm.certificateManager),
        requester: {
          strictSSL: pm.settings.getSetting('SSLCertVerify'),
          extendedRootCA: pm.settings.getSetting('isCACertEnabled') && pm.settings.getSetting('CACertPath') || undefined,
          verbose: true },

        script: {
          serializeLogs: true } },


      { cookiePartitionId: __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].getCookiePartition(),
        strictSSL: pm.settings.getSetting('SSLCertVerify') });


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
    if (rawErr) {
      let err = JSON.parse(rawErr),
      errMessage = err && err.message || String(err);

      pm.toasts.error('Could not complete OAuth 2.0 login. Check Postman Console for more details.');

      if (rawResponse) {
        errMessage += ': ' + String(rawResponse);
      }

      pm.console.error(__WEBPACK_IMPORTED_MODULE_8__constants_ConsoleEventTypes__["a" /* CONSOLE_EVENT_EXCEPTION */], {}, {
        name: err && err.name,
        message: errMessage });


      return;
    }

    pm.mediator.trigger('addOAuth2Token', rawResponse && JSON.parse(rawResponse));
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
  onOAuth2TokenRequestResponse: function (event, rawErr, cursor, responseJSON, requestJSON, history) {
    let err = rawErr && JSON.parse(rawErr),
    request = requestJSON && new __WEBPACK_IMPORTED_MODULE_2_postman_collection__["Request"](requestJSON),
    response = responseJSON && new __WEBPACK_IMPORTED_MODULE_2_postman_collection__["Response"](responseJSON),
    consolePayload = {};

    if (!request) {
      return;
    }

    consolePayload.request = {
      url: _.invoke(request, 'url.toString'),
      method: requestJSON.method,
      headers: _.invoke(request, 'headers.toJSON'),
      body: requestJSON.body,
      certificate: requestJSON.certificate,
      proxy: requestJSON.proxy };


    if (response) {
      consolePayload.response = {
        responseTime: response.responseTime,
        code: response.code,
        headers: _.invoke(response, 'headers.toJSON'),
        body: response.text(),
        contentInfo: _.isFunction(response.contentInfo) && response.contentInfo() };

    }

    consolePayload.indirect = 'auth';
    consolePayload.history = history;

    if (err) {
      consolePayload.error = err.message;
      pm.console.error(__WEBPACK_IMPORTED_MODULE_8__constants_ConsoleEventTypes__["c" /* CONSOLE_EVENT_NETWORK */], {}, consolePayload);
    } else
    {
      pm.console.log(__WEBPACK_IMPORTED_MODULE_8__constants_ConsoleEventTypes__["c" /* CONSOLE_EVENT_NETWORK */], {}, consolePayload);
    }
  } });


/* harmony default export */ __webpack_exports__["a"] = (OAuth2TokenFetcher);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection__ = __webpack_require__(74);
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

/***/ 3289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronContextMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_DraftJsHelper__ = __webpack_require__(3290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_VariableSessionService__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_VariableSessionHelper__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_EditorService__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__electron_ElectronService__ = __webpack_require__(144);










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
    this.Remote = __webpack_require__(21).remote;
    this.Menu = this.Remote.Menu;
    this.MenuItem = this.Remote.MenuItem;

    this.currentSelection = '';
    this.currentAceSelection = '';
    this.activeComponent = null;
    this.attachEventListeners();

    /**
                                  * On right click in any input field, text gets automatically selected even if there was no explicit selection made before.
                                  * The text which gets automatically selected on right click, depends on the cursor position.
                                  */
    window.addEventListener('contextmenu', e => {
      e.preventDefault();
      this.currentSelection = window.getSelection().toString();
      let menu = this.buildMenu(e);

      // Empty menu fix for windows native app
      if (menu && _.size(menu.items)) {
        menu.popup(Object(__WEBPACK_IMPORTED_MODULE_8__electron_ElectronService__["c" /* getCurrentWindow */])());
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
    isInput = _.get(e, 'target.nodeName') === 'INPUT' || _.get(e, 'target.nodeName') === 'TEXTAREA',
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
      _.trim(selectedText) && this.buildFindMenu(menu, selectedText);
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

  buildFindMenu(menu, selectedText) {
    menu.append(new this.MenuItem({
      label: `Find: ${selectedText}`,
      click: () => pm.mediator.trigger('findSelectedText', selectedText) }));

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
    let environment = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('ActiveEnvironmentStore');
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
    let globals = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('ActiveGlobalsStore');
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
    modelId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('ActiveGlobalsStore').id,
    activeWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('ActiveWorkspaceStore').id,
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
      pm.logger.warn('Failed to update global value through context menu', err);
      pm.toasts.error('Something went wrong. Please check DevTools.');
    });
  }

  updateEnvironmentVariableFromContextMenu(index, selectionText) {
    let model = 'environment',
    modelId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('ActiveEnvironmentStore').id,
    activeWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('ActiveWorkspaceStore').id,
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
      pm.logger.warn('Failed to update session through context menu', err);
      pm.toasts.error('Something went wrong. Please check DevTools.');
    });
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_draft_js_lib_getContentStateFragment__ = __webpack_require__(535);
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

/***/ 3291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionClipboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_pipelines_user_action__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__ = __webpack_require__(36);

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
            pm.logger.error(`Error while moving ${source.type} ${destination.type}`, response.error);
            return;
          }
        }).
        catch(err => {
          pm.logger.error(`Error in pipeline while moving ${source.type} ${destination.type}`, err);
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
            pm.logger.error(`Error while duplicating ${source.type} on ${destination.type}`, response.error);
            return;
          }
        }).
        catch(err => {
          pm.logger.error(`Error in pipeline while duplicating ${source.type} on ${destination.type}`, err);
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

/***/ 3293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootStore__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootShortcuts__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootSyncProxy__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bootConsoleInterface__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_UIZoom__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_ProxyListManager__ = __webpack_require__(929);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_AppUpdateNotifier__ = __webpack_require__(3295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_tcp_ElectronTCPReader__ = __webpack_require__(3297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_requests_CertificateManager__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_ProtocolHandler__ = __webpack_require__(3298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPathManager__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_ModelEventToUIEventService__ = __webpack_require__(3299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_InterceptorManager__ = __webpack_require__(3300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_InterceptorInstaller__ = __webpack_require__(1665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_InterceptorBridge__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_InterceptorBridge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__models_InterceptorBridge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_UIEventServiceHandler__ = __webpack_require__(3301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_AccessControl_DbRollbackService__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__bootAPIDevInterface__ = __webpack_require__(3302);




















/**
                                                          *
                                                          * @param {*} cb
                                                          */
function bootRequester(cb) {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_1__bootStore__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__bootShortcuts__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__bootSyncProxy__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__bootConsoleInterface__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_18__bootAPIDevInterface__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_10__models_ProtocolHandler__["a" /* default */].initialize,
  next => {
    Object(__WEBPACK_IMPORTED_MODULE_17__services_AccessControl_DbRollbackService__["a" /* initializeRollbackNotifications */])();
    next();
  }],
  err => {
    _.assign(window.pm, {
      proxyListManager: new __WEBPACK_IMPORTED_MODULE_6__controllers_ProxyListManager__["a" /* default */](), // [settings]
      certificateManager: new __WEBPACK_IMPORTED_MODULE_9__models_requests_CertificateManager__["a" /* default */](), // [settings]
      uiZoom: new __WEBPACK_IMPORTED_MODULE_5__controllers_UIZoom__["a" /* default */](), // [settings]
      updateNotifier: new __WEBPACK_IMPORTED_MODULE_7__models_AppUpdateNotifier__["a" /* default */](), // [appwindow, settings, app]
      tcpReader: new __WEBPACK_IMPORTED_MODULE_8__models_tcp_ElectronTCPReader__["a" /* default */](), // [settings, appwindow]
      interceptorManager: new __WEBPACK_IMPORTED_MODULE_13__models_InterceptorManager__["a" /* default */](),
      interceptorBridge: __WEBPACK_IMPORTED_MODULE_15__models_InterceptorBridge___default.a,
      interceptorInstaller: new __WEBPACK_IMPORTED_MODULE_14__models_InterceptorInstaller__["a" /* default */](),
      xPathManager: __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPathManager__["a" /* default */] });


    __WEBPACK_IMPORTED_MODULE_12__services_ModelEventToUIEventService__["a" /* default */].initialize();
    __WEBPACK_IMPORTED_MODULE_16__services_UIEventServiceHandler__["a" /* default */].init();
    pm.appWindow.sendToElectron({ event: 'postmanInitialized' }); // Initialize protocol handline need revisit

    err ? pm.logger.error('Requester~boot - Failed', err) : pm.logger.info('Requester~boot - Success');
    return cb && cb(err);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (bootRequester);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_AppSettingsDefaults__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_HttpService__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AppReleaseService__ = __webpack_require__(1264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_CurrentUserController__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_ShellHelper__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_domain__ = __webpack_require__(3296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_domain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_domain__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_InfobarConstants__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__controllers_Infobar__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_backbone__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_backbone__);














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
  type: __WEBPACK_IMPORTED_MODULE_10__constants_InfobarConstants__["c" /* SUCCESS */],
  isDismissable: true,
  primaryAction: {
    label: 'Restart',
    onClick: () => {
      pm.updateNotifier.applyUpdate();
      __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'app_restart', 'restart_banner');
    } },

  onDismiss: function (params) {
    __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'dismiss_update_restart_banner');
  } },

PUBLIC_CHANNELS = ['prod', 'canary'];

var semver = __webpack_require__(1263),
AppUpdateNotifier = __WEBPACK_IMPORTED_MODULE_12_backbone___default.a.Model.extend({
  defaults: function () {
    return {
      status: 'idle',
      initialized: false,
      data: null,
      changelog: null,
      isAutoDownloaded: false,
      isUpdateEnabled: true };

  },
  initialize: function () {
    this.set('isUpdateEnabled', pm.app.get('isUpdateEnabled'));

    // Disable if the flag is set but only if it is not a public facing channel
    // Used while running integration tests
    if (pm.env.DISABLE_UPDATES && !_.includes(PUBLIC_CHANNELS, window.RELEASE_CHANNEL)) {
      return;
    }

    if (!this.get('isUpdateEnabled')) {
      pm.logger.info('Updater bailed! Running on Snap!');
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
        isBannerAlreadyOpen = _.find(__WEBPACK_IMPORTED_MODULE_11__controllers_Infobar__["a" /* default */].infoList, { _id: NOT_UPDATED_BANNER_ID }); // same banner is already shown, don't show another

        if (hasCrossedNoUpdateTimeout && !isBannerAlreadyOpen) {
          __WEBPACK_IMPORTED_MODULE_11__controllers_Infobar__["a" /* default */].add(NOT_UPDATED_MESG);
          __WEBPACK_IMPORTED_MODULE_11__controllers_Infobar__["a" /* default */].show();
          __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'show_update_restart_banner');
        }

        return;
      }

      navigator.onLine && this.updateHandler();
    }, AUTO_UPDATE_TIMER);
  },

  checkForVersionUpdate() {
    this.updaterEventBus.publish(Object(__WEBPACK_IMPORTED_MODULE_8__modules_model_event__["a" /* createEvent */])(CHECK_FOR_ELECTRON_VERSION_UPDATED, APP_UPDATE));
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
        __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'check_update', 'menu');
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

    pm.logger.error('Error in update flow: ' + JSON.stringify(error));
    __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'error', label);
  },

  applyUpdate: function () {
    this.set({ status: 'applying' });

    // Sending through bus is not recommended here
    // As, the app quits in this case which triggers a crash at times
    __WEBPACK_IMPORTED_MODULE_7__utils_ShellHelper__["a" /* default */].sendToMain(APPLY_ELECTRON_UPDATE);
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
      __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'updated', null, null, null, { noActiveWorkspace: true });

      // Notify update information to the server.
      __WEBPACK_IMPORTED_MODULE_5__modules_controllers_CurrentUserController__["a" /* default */].
      get().
      then((user = {}) => {
        Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["m" /* NotifyServerOfVersionChange */])(user, currentVersion + '-' + currentPlatform);
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
        channel: __WEBPACK_IMPORTED_MODULE_4__services_AppReleaseService__["a" /* default */].getReleaseChannel(),
        version: this.version,
        downloadVersion: this.downloadVersion,
        appId: this.appId,
        userAgent: this.userAgent,
        platform: this.platform,
        arch: this.arch,
        downloadURL: options.downloadURL || data && data.url,
        updateServerDomain: this.updateServerDomain,
        additionalParamsString: params };

      __WEBPACK_IMPORTED_MODULE_5__modules_controllers_CurrentUserController__["a" /* default */].
      get().
      then((user = {}) => {
        _.assign(eventPayload, { userId: user.id });
        this.updaterEventBus.publish(Object(__WEBPACK_IMPORTED_MODULE_8__modules_model_event__["a" /* createEvent */])(UPDATE_ELECTRON, APP_UPDATE, eventPayload));
      }).
      catch(e => {
        this.updaterEventBus.publish(Object(__WEBPACK_IMPORTED_MODULE_8__modules_model_event__["a" /* createEvent */])(UPDATE_ELECTRON, APP_UPDATE, eventPayload));
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
    __WEBPACK_IMPORTED_MODULE_5__modules_controllers_CurrentUserController__["a" /* default */].
    get().
    then((user = {}) => {
      let deviceInfo = pm.app && pm.app.getDeviceInfo(),
      userId = _.toString(user.id) || '0',

      // @todo: until ars starts reading syncEnabled info from service send this flag
      // this flag may or may not be accurate
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
      let updateChannel = __WEBPACK_IMPORTED_MODULE_4__services_AppReleaseService__["a" /* default */].getReleaseChannel(),
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
      let updateChannel = __WEBPACK_IMPORTED_MODULE_4__services_AppReleaseService__["a" /* default */].getReleaseChannel();
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
        // setting the downloaded version
        this.downloadVersion = body.version;

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
            __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'view_update_available_modal', isManual ? 'manual' : 'auto');
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

/***/ 3296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file should be ES5 compatible
/* eslint prefer-spread:0, no-var:0, prefer-reflect:0, no-magic-numbers:0 */


module.exports = function () {
	// Import Events
	var events = __webpack_require__(37);

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
				}
				catch (err) {
					emitError(err);
				}
			};
		};
		d.intercept = function (fn) {
			return function (err) {
				if (err) {
					emitError(err);
				} else
				{
					var args = Array.prototype.slice.call(arguments, 1);
					try {
						fn.apply(null, args);
					}
					catch (err) {
						emitError(err);
					}
				}
			};
		};
		d.run = function (fn) {
			try {
				fn();
			}
			catch (err) {
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

/***/ 3297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__ = __webpack_require__(60);




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
      pm.logger.error('Error in parsing proxy settings');
    } finally
    {
      if (!_.isEmpty(readerSettingsJSON)) {
        _.assign(this, _.pick(readerSettingsJSON, ['port', 'target_type', 'target_id', 'filters']));
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

  isAllowed(request, filters) {

    var methods;

    // Captured request URL should contain the URL in the proxy 'URL Contains' filter
    if (filters.url && filters.url.trim() && request.url.search(filters.url.trim()) < 0) {
      return false;
    }

    // Captured request URL should not contain the URL in the 'URL Does not Contain' filter
    if (filters.url_disabled && filters.url_disabled.trim() && request.url.search(filters.url_disabled.trim()) >= 0) {
      return false;
    }

    methods = filters.methods ? filters.methods.split(',') : [];

    methods = methods.map(method => {
      return method.trim().toUpperCase();
    }).filter(method => {
      return method.length > 0;
    });

    methods = _.uniq(methods);

    // Captured request method should belong to proxy 'Methods' filters (if any)
    if (methods.length > 0 && !methods.includes(request.method.toUpperCase())) {
      return false;
    }

    return true;
  }

  checkTarget(id) {
    var collections = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["getStore"])('ActiveWorkspaceStore').collections,
    collection = _.find(collections, item => {return item.id === id;}),
    editPermission = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["getStore"])('PermissionStore').can('edit', 'collection', id);

    return collection && editPermission;
  }

  addRequestObject(request) {
    var target_type = this.target_type,
    collection,
    target_id,
    filters = this.filters;

    // console.log("Settings are", this.toJSON());
    if (this.isAllowed(request, filters)) {
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

      if (this.checkTarget(this.target_id)) {
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
              pm.logger.error('Error in creating collection from tcp', response.error);
              return;
            }
          });
        }).
        catch(err => {
          pm.logger.error('Error while creating collection from tcp', err);
        });
      } else
      {
        __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__["a" /* default */].
        get().
        then(user => {
          if (!user) {
            pm.logger.error(new Error('ElectronTCPReader: Could not create history. Current user is missing.'));
            return;
          }

          let currentDate = new Date(),
          workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["getStore"])('ActiveWorkspaceSessionStore').workspace,
          historyCreateEvent = Object(__WEBPACK_IMPORTED_MODULE_2__modules_model_event__["a" /* createEvent */])(
          'create',
          'history',
          _.assign({}, request, { id: __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].guid(), createdAt: currentDate.toISOString(), workspace, owner: user.id, lastUpdatedBy: user.id }));


          return Object(__WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__["a" /* default */])(historyCreateEvent).
          catch(e => {console.log('Error in creating history through proxy', e);});
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

/***/ 3298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_conversion_promisifiedConverter__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_Importer__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_UserController__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_controllers_WindowController__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_controllers_WindowController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__common_controllers_WindowController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(22);







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
      return Promise.reject(new Error('ProtocolHandler~importByURL: Incorrect Protocol')); // some other protocol
    }

    let uriSegments = mainParts[1].split('/');

    // current support: app/collections/import/linkId
    if (uriSegments.length !== 4) {
      return Promise.reject(new Error('ProtocolHandler~importByURL: Provided path is not supported'));
    }
    if (uriSegments[0] === 'app' && uriSegments[1] === 'collections' && uriSegments[2] === 'import') {
      let linkId = uriSegments[3];
      return __WEBPACK_IMPORTED_MODULE_3__modules_controllers_UserController__["a" /* default */].
      get().
      then(user => {
        return new Promise((resolve, reject) => {
          Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["d" /* DownloadDirectoryCollection */])({ user, linkId }, (err, data) => {
            if (err) {
              pm.toasts.error('We can\'t seem to find the collection you\'re trying to import.');
              return reject(new Error('ProtocolHandler~importByURL: Error while importing', err));
            }

            let text,
            urlVars = __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].getUrlVars(url),
            referrer = _.find(urlVars, { key: 'referrer' }),
            referrerValue = referrer ? decodeURIComponent(referrer.value) : '';

            try {
              text = JSON.stringify(data);
            } catch (e) {
              pm.logger.error('ProtocolHandler: collection data is not a valid JSON', data, e);
              return reject(new Error('ProtocolHandler~importByURL: collection data is not a valid JSON', e));
            }

            return new Promise((importResolve, importReject) => {
              __WEBPACK_IMPORTED_MODULE_2__controllers_Importer__["a" /* default */].importData(text, {
                origin: 'run-in-postman',
                link: url,
                referrer: referrerValue },
              () => {
                /**
                      * always resolving promise as importData is not providing any argument in callback
                      * to notify whether import collection was a success or a failure
                      */
                importResolve();
              });
            }).
            then(() => {resolve();}).
            catch(error => {reject(error);});
          });
        });
      }).
      then(() => {
        return Object(__WEBPACK_IMPORTED_MODULE_1__services_conversion_promisifiedConverter__["a" /* default */])().
        then(converter => {
          /**
                            * Even though checkImportEnvironmentFromUrl is an asynchronous function,
                            * it does not provide any interface in return to resolve/reject promise here
                            */
          try {
            converter.checkImportEnvironmentFromUrl(url);
            return Promise.resolve();
          }
          catch (e) {
            return Promise.reject(new Error('ProtocolHandler~importByURL: Error while importing Environment from url'));
          }
        });
      }).
      catch(error => {return Promise.reject(error);});
    } else
    {
      return Promise.reject(new Error('ProtocolHandler~importByURL: Incorrect URL', url));
    }
  } };


/* harmony default export */ __webpack_exports__["a"] = (ProtocolHandler);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UIEventService__ = __webpack_require__(141);





let allowedEvents = [
'created', 'updated', 'deleted', 'duplicated', 'shared', 'favorited', 'unfavorited',
'joined', 'left', 'added_dependencies', 'removed_dependencies', 'requestDispatched', 'responseMetaReceived',
'authenticated', 'skip'],

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
        return createPayload('userSignedIn', eventProps.data);
      case 'skip':
        return createPayload('userSkippedSignIn', eventProps.data);}

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
    pm.logger.error(err);
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
    pm.logger.error(err);
  });
}

/**
   * @param {any} event
   */
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
    pm.logger.error(err);
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

/***/ 3300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_pipelines_user_action__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base64_arraybuffer__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_base64_arraybuffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_base64_arraybuffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_CurrentUserController__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_InterceptorUtil__ = __webpack_require__(1458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_InterceptorUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__utils_InterceptorUtil__);






let

InterceptorManager = class InterceptorManager {
  constructor() {

    // [INTERCEPT-15] maintaining a boolean variable to avoid multiple 'Disconnected from Interceptor' logs
    var isDisconnectedFromInterceptorBridge = false,
    isInterceptorBridgeInstalled = false,
    installationStatus = 'BRIDGE_NOT_YET_INSTALLED',
    connectionStatus,

    // store for interceptor settings
    interceptorSettingsStore = __WEBPACK_IMPORTED_MODULE_0__js_stores_get_store__["getStore"]('InterceptorSettingsStore'),

    // store for installation of interceptor installation states
    interceptorInstallationUIStore = __WEBPACK_IMPORTED_MODULE_0__js_stores_get_store__["getStore"]('InterceptorInstallationUIStore'),

    // fetching domain list in sync with Interceptor from store
    syncDomainList = interceptorSettingsStore.getSyncDomainList();

    // the ipcClient will be connected to the interceptorBridge
    // as soon as the main process of app loads
    pm.appWindow.sendToElectron({
      event: 'initializeInterceptorBridge' });


    if (interceptorSettingsStore.isCookieSyncEnabled()) {
      // syncing back all cookies once the app restarts
      this.enableCookieSyncFromInterceptor();
    }

    // starts capturing requests from Interceptor as soon as App is opened (if request capture settings are on)
    if (interceptorSettingsStore.isRequestCaptureEnabled()) {
      // start syncing the captured reqeusts
      this.configureRequestCaptureFromInterceptor();
    }

    // preserving state to avoid the multiple logs of KEY_MISMATCH errors
    // false once app loads, true after first KEY_MISMATCH error occurs
    interceptorSettingsStore.updateKeyMismatchSettings(false);

    // handles the interceptor response based on their types
    pm.appWindow.trigger('registerInternalEvent', 'interceptorResponse', function (data) {
      pm.mediator.trigger('onMessageExternal', data);
      this.handleInterceptorResponse(data);
    }, this);

    // logs the encryption key being used for App ~ Interceptor communication
    pm.appWindow.trigger('registerInternalEvent', 'fetchEncryptionKey', function (data) {
      console.log('InterceptorBridge Encryption Key : ', data.key);
    }, this);

    // logs the list of domains in sync
    pm.appWindow.trigger('registerInternalEvent', 'getSyncDomainListForInterceptor', function () {
      if (!syncDomainList) {
        console.log('InterceptorBridge : No domains found');
      } else
      {
        console.log('InterceptorBridge : Domain List ', syncDomainList);
      }
    }, this);

    // confirms interceptor bridge is connected
    pm.appWindow.trigger('registerInternalEvent', 'updateInterceptorBridgeConnectionStatus', function (msg) {
      connectionStatus = msg.data.connectedToPostman;

      // here, interceptor bridge is connected with postman app
      if (connectionStatus) {
        console.log('Connected to Interceptor');
        isDisconnectedFromInterceptorBridge = false;
        isInterceptorBridgeInstalled = true;

        // updates the connection status and installed status
        interceptorSettingsStore.updateInterceptorBridgeConnectionStatus(connectionStatus);
        interceptorSettingsStore.updateInterceptorBridgeInstallationStatus(isInterceptorBridgeInstalled);
      } else
      {
        if (!isDisconnectedFromInterceptorBridge) {
          console.log('Disconnected from Interceptor');
          isDisconnectedFromInterceptorBridge = true;
          pm.interceptorInstaller.checkInstallationStatus();
        }
      }

      // re-send cookie and request capture data to interceptor
      if (interceptorSettingsStore.isCookieSyncEnabled()) {
        this.enableCookieSyncFromInterceptor();
      }
      if (interceptorSettingsStore.isRequestCaptureEnabled()) {
        this.configureRequestCaptureFromInterceptor();
      }

    }, this);

    pm.appWindow.trigger('registerInternalEvent', 'interceptorBridgeInstallationStatusResponse', function (data) {
      if (isDisconnectedFromInterceptorBridge) {
        if (data.status.platformSpecific.os === 'MACOS') {
          if (!data.status.platformSpecific.nodeInstalled) {
            installationStatus = 'MACOS_NODE_NOT_YET_INSTALLED';
            isInterceptorBridgeInstalled = false;
          } else
          {
            if (data.status.manifestAdded && data.status.interceptorBridgeInstalled) {
              isInterceptorBridgeInstalled = true;
            } else
            {
              isInterceptorBridgeInstalled = false;
              installationStatus = 'BRIDGE_NOT_YET_INSTALLED';
            }
          }
        } else
        if (data.status.platformSpecific.os === 'WINDOWS') {
          if (data.status.manifestAdded && data.status.interceptorBridgeInstalled && data.status.platformSpecific.registryKeyAdded) {
            isInterceptorBridgeInstalled = true;
          } else
          {
            isInterceptorBridgeInstalled = false;
            installationStatus = 'BRIDGE_NOT_YET_INSTALLED';
          }
        } else
        if (data.status.platformSpecific.os === 'LINUX') {
          if (data.status.manifestAdded && data.status.interceptorBridgeInstalled) {
            isInterceptorBridgeInstalled = true;
          } else
          {
            isInterceptorBridgeInstalled = false;
            installationStatus = 'BRIDGE_NOT_YET_INSTALLED';
          }
        }
        interceptorSettingsStore.updateInterceptorBridgeInstallationStatus(isInterceptorBridgeInstalled);
        interceptorInstallationUIStore.updateInitialInstallationStatus(installationStatus);
        interceptorSettingsStore.updateInterceptorBridgeConnectionStatus(connectionStatus);
      }
    }, this);

    pm.appWindow.trigger('registerInternalEvent', 'refreshInterceptorBridgeConnectionStatus', function (msg) {
      if (msg.connectedToInterceptorBridge) {
        console.log('Connected to Interceptor');
        interceptorSettingsStore.updateInterceptorBridgeConnectionStatus(msg.connectedToInterceptorBridge);
      }
    }, this);

  }

  handleInterceptorResponse(data) {
    var interceptorSettingsStore = __WEBPACK_IMPORTED_MODULE_0__js_stores_get_store__["getStore"]('InterceptorSettingsStore');
    if (data.type === 'COOKIE_DUMP') {
      if (interceptorSettingsStore.isCookieSyncEnabled()) {
        interceptorSettingsStore.updateKeyMismatchSettings(false);
        this.addCookiesToApp(data.message);
      }
    } else
    if (data.type === 'COOKIE_REMOVED') {
      if (interceptorSettingsStore.isCookieSyncEnabled()) {
        interceptorSettingsStore.updateKeyMismatchSettings(false);
        this.deleteCookiesFromApp(data.message);
      }
    } else
    if (data.type === 'COOKIE_UPDATED') {
      if (interceptorSettingsStore.isCookieSyncEnabled()) {
        interceptorSettingsStore.updateKeyMismatchSettings(false);
        this.addCookiesToApp(data.message);
      }
    } else
    if (data.type === 'UPDATED_DOMAIN_LIST') {
      if (interceptorSettingsStore.isCookieSyncEnabled()) {
        interceptorSettingsStore.updateKeyMismatchSettings(false);

        // updating local sync domain list
        this.syncDomainList = data.postmanMessage.syncDomainList;

        // updating store
        interceptorSettingsStore.updateAcknowledgedDomainList(data.postmanMessage.syncDomainList);

        console.log('INTERCEPTOR CONNECTIVITY: Updated domain list : ', this.syncDomainList);
      }
    } else
    if (data.type === 'ADD_DOMAIN_ACK') {
      if (interceptorSettingsStore.isCookieSyncEnabled()) {
        interceptorSettingsStore.updateKeyMismatchSettings(false);
        interceptorSettingsStore.addNewAcknowledgedDomain(data.postmanMessage.domain);
      }
    } else
    if (data.type === 'REMOVE_DOMAIN_ACK') {
      if (interceptorSettingsStore.isCookieSyncEnabled()) {
        interceptorSettingsStore.updateKeyMismatchSettings(false);
        interceptorSettingsStore.removeAcknowledgedDomain(data.postmanMessage.domain);
      }
    } else
    if (data.type === 'KEY_MISMATCH') {
      if (!interceptorSettingsStore.isKeymismatch()) {
        console.log('INTERCEPTOR CONNECTIVITY: Key mismatched between Interceptor and Postman App');
        interceptorSettingsStore.updateKeyMismatchSettings(true);
      }
    } else
    if (data.type === 'KEY_VALIDATION_RESULT') {
      var validationResults = data;

      // validation is true only if the keys are same at app and interceptor
      if (validationResults.data.validation) {
        console.log('INTERCEPTOR CONNECTIVITY: App / Interceptor encryption keys match');
      } else
      {
        console.log('INTERCEPTOR CONNECTIVITY: App / Interceptor encryption keys mismatch');
      }
    } else
    if (data.type === 'CONFIGURE_COOKIE_SYNC_ACK') {
      if (data.postmanMessage.enabled) {
        console.log('INTERCEPTOR CONNECTIVITY: Configure cookie sync acknowledged');
      } else
      {
        console.log('INTERCEPTOR CONNECTIVITY: Configure cookie sync stopped');
      }
      interceptorSettingsStore.updateKeyMismatchSettings(false);
    } else
    if (data.type === 'ENABLE_COOKIE_SYNC_ACK') {
      if (data.postmanMessage.enabled) {
        console.log('INTERCEPTOR CONNECTIVITY: Cookie Sync enabled for the domains - ', data.postmanMessage.syncDomainList);
      } else
      {
        console.log('INTERCEPTOR CONNECTIVITY: cookie sync disabled');
      }
      interceptorSettingsStore.updateKeyMismatchSettings(false);
      interceptorSettingsStore.updateAcknowledgedDomainList(data.postmanMessage.syncDomainList);

    } else
    if (data.type === 'CONFIGURE_REQUEST_CAPTURE_ACK') {
      if (data.postmanMessage.enabled) {
        console.log('INTERCEPTOR CONNECTIVITY: Capture requests enabled');
      } else
      {
        console.log('INTERCEPTOR CONNECTIVITY: Capture requests disabled');
      }
      interceptorSettingsStore.updateKeyMismatchSettings(false);
    } else
    if (data.type === 'CAPTURED_REQUEST') {
      interceptorSettingsStore.updateKeyMismatchSettings(false);
      if (interceptorSettingsStore.isRequestCaptureEnabled()) {
        this.addRequestObject(data.message.postmanMessage.request);
      }
    } else
    {
      console.log(data);
    }
  }

  enableCookieSyncFromInterceptor() {

    var interceptorSettingsStore = __WEBPACK_IMPORTED_MODULE_0__js_stores_get_store__["getStore"]('InterceptorSettingsStore');

    // fetching domain list in sync with Interceptor from store
    var syncDomainList = interceptorSettingsStore.getSyncDomainList();

    // syncing back all cookies after App establishes connection with Interceptor bridge
    pm.appWindow.sendToElectron({
      event: 'forwardInterceptorRequest',
      message: {
        type: 'ENABLE_COOKIE_SYNC',
        postmanMessage: {
          enabled: true,
          syncDomainList: syncDomainList } } });



  }

  configureRequestCaptureFromInterceptor() {
    var interceptorSettingsStore = __WEBPACK_IMPORTED_MODULE_0__js_stores_get_store__["getStore"]('InterceptorSettingsStore');

    // fetching filters from store
    var filters = interceptorSettingsStore.getRequestCaptureFilters();
    var url = filters.url,
    methodArray = Object(__WEBPACK_IMPORTED_MODULE_6__utils_InterceptorUtil__["sanitize"])(filters.methods),
    captureResponse = false;

    pm.appWindow.sendToElectron({
      event: 'forwardInterceptorRequest',
      message: {
        type: 'CONFIGURE_REQUEST_CAPTURE',
        postmanMessage: {
          filters: {
            url: url,
            method: methodArray },

          captureResponse: captureResponse,
          enabled: true } } });




  }


  addCookiesToApp(cookies) {
    var newCookies = this.addUrlPropsToCookies(cookies),
    bulkCookies = _.map(newCookies, cookieItem => {
      return {
        url: cookieItem.url,
        host: cookieItem.domain,
        cookie: cookieItem };

    });

    // addBulkCookies also has a second parameter `callback` if required
    pm.cookieManager.addBulkCookies(bulkCookies);
  }

  addUrlPropsToCookies(cookies) {
    var url;
    for (var i = 0; i < cookies.length; i++) {
      url = '';
      if (cookies[i].secure) {
        url += 'https://';
      } else
      {
        url += 'http://';
      }
      if (cookies[i].domain.indexOf('.') === 0) {
        url += cookies[i].domain.substring(1);
      } else
      {
        url += cookies[i].domain;
      }
      url += cookies[i].path;
      cookies[i].url = url;
    }
    return cookies;
  }

  deleteCookiesFromApp(cookies) {
    var newCookies = this.addUrlPropsToCookies(cookies);
    for (var i = 0; i < newCookies.length; i++) {
      pm.cookieManager.deleteCookie(newCookies[i].domain, newCookies[i].name, newCookies[i].path, function () {
        // cookie is removed
      });
    }
  }

  checkTarget(id) {
    var collections = __WEBPACK_IMPORTED_MODULE_0__js_stores_get_store__["getStore"]('ActiveWorkspaceStore').collections,
    collection = _.find(collections, item => {return item.id === id;}),
    editPermission = __WEBPACK_IMPORTED_MODULE_0__js_stores_get_store__["getStore"]('PermissionStore').can('edit', 'collection', id);

    return collection && editPermission;
  }

  // Used to check if the content-type
  // in the captured request is urlencoded
  // The body needs to be split differently if this is the case
  isUrlEncodedHeaderPresent(headers) {
    for (var i = 0; i < headers.length; i++) {
      if (headers[i].name.toLowerCase() === 'content-type') {
        if (headers[i].value.search('urlencoded') >= 0) {
          return true;
        }
      }
    }

    return false;
  }

  // Used to extract form data key-value
  // pairs from the captured request
  getFormData(data) {
    var formData = [],
    i;

    if (!data) {
      return formData;
    }

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        var itemLength = data[key].length;
        for (i = 0; i < itemLength; i++) {
          formData.push({
            'key': key,
            'value': data[key][i] });

        }
      }
    }

    return formData;
  }

  getRawData(data) {
    if (!data) {
      return '';
    }

    return __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].arrayBufferToString(__WEBPACK_IMPORTED_MODULE_4_base64_arraybuffer___default.a.decode(data));
  }

  addRequestObject(requestObj) {
    var interceptorSettingsStore = __WEBPACK_IMPORTED_MODULE_0__js_stores_get_store__["getStore"]('InterceptorSettingsStore'),
    target_id = interceptorSettingsStore.requestCaptureTarget(),
    request;

    request = {
      name: requestObj.url,
      url: requestObj.url,
      method: requestObj.method,
      headers: {},
      headerData: [],
      data: '' };


    // modify request for sync
    requestObj.requestHeaders.forEach(data => {
      var headers = Object.values(data);
      request.headers[data.name] = data.value;
      request.headerData.push({
        key: data.name,
        value: data.value });

    });

    // different types of body are encoded differently at the interceptor's end
    if (requestObj.requestBody) {
      if (requestObj.requestBodyType === 'formData') {
        if (this.isUrlEncodedHeaderPresent(requestObj.requestHeaders)) {
          request.dataMode = 'urlencoded';
        } else
        {
          request.dataMode = 'params';
        }

        // TODO: Think about removing Content-Type header
        request.data = this.getFormData(_.get(requestObj, 'requestBody.formData'));
      } else
      {
        request.dataMode = 'raw';
        request.data = this.getRawData(_.get(requestObj, 'requestBody.rawData'));
      }
    }

    if (this.checkTarget(target_id)) {
      __WEBPACK_IMPORTED_MODULE_5__modules_controllers_CurrentUserController__["a" /* default */].
      get().
      then(user => {
        _.assign(request, {
          id: __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].guid(),
          collection: target_id,
          owner: user.id });


        let requestCreateEvent = {
          name: 'create_deep',
          namespace: 'request',
          data: { request },
          target: {
            model: 'collection',
            modelId: target_id } };


        Object(__WEBPACK_IMPORTED_MODULE_2__modules_pipelines_user_action__["a" /* default */])(requestCreateEvent).
        then(response => {
          if (!_.isEmpty(_.get(response, 'error'))) {
            pm.logger.error('Error in creating collection from InterceptorManager', response.error);
            return;
          }
        });
      }).
      catch(err => {
        pm.logger.error('Error while creating collection from InterceptorManager', err);
      });
    }

    // else create history
    else {
        __WEBPACK_IMPORTED_MODULE_5__modules_controllers_CurrentUserController__["a" /* default */].
        get().
        then(user => {
          if (!user) {
            pm.logger.error(new Error('InterceptorManager: Could not create history. Current user is missing.'));
            return;
          }

          let currentDate = new Date(),
          workspace = __WEBPACK_IMPORTED_MODULE_0__js_stores_get_store__["getStore"]('ActiveWorkspaceSessionStore').workspace,
          historyCreateEvent = Object(__WEBPACK_IMPORTED_MODULE_3__modules_model_event__["a" /* createEvent */])(
          'create',
          'history',
          _.assign({}, request, { id: __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].guid(), createdAt: currentDate.toISOString(), workspace, owner: user.id, lastUpdatedBy: user.id }));


          return Object(__WEBPACK_IMPORTED_MODULE_2__modules_pipelines_user_action__["a" /* default */])(historyCreateEvent).
          catch(e => {console.log('Error in creating history through proxy', e);});
        });
      }
  }};



/* harmony default export */ __webpack_exports__["a"] = (InterceptorManager);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIEventService__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_UIEventConstants__ = __webpack_require__(283);



/**
                                                               * Initializer
                                                               * It subscribes to the UIEventService and attaches the handlers for it
                                                               */
function init() {
  __WEBPACK_IMPORTED_MODULE_0__UIEventService__["a" /* default */].subscribe(__WEBPACK_IMPORTED_MODULE_1__constants_UIEventConstants__["b" /* LOGOUT_EVENT */], _handleLogout);
}

/**
   * @private
   * @description It triggers the logout for the app.
   */
function _handleLogout() {
  pm.mediator.trigger('showUserSignoutModal');
}

/* harmony default export */ __webpack_exports__["a"] = ({ init });

/***/ }),

/***/ 3302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_dev_public_APIDevInterface__ = __webpack_require__(3303);


/**
                                                                        *
                                                                        * @param {Callback} cb
                                                                        */
function bootAPIDevInterface(cb) {
  _.assign(window.pm, { apiDev: new __WEBPACK_IMPORTED_MODULE_0__api_dev_public_APIDevInterface__["a" /* default */]() });
  pm.logger.info('APIDevInterface~boot - Success');
  return cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootAPIDevInterface);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIDevInterface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_APIDevService__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_APISchemaController__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_APIRelationController__ = __webpack_require__(981);


let

APIDevInterface = class APIDevInterface {

  constructor() {
    this.constants = {
      schemaType: {
        OPENAPI3: 'openapi3',
        OPENAPI2: 'openapi2',
        OPENAPI1: 'openapi1',
        RAML1: 'raml',
        RAML: 'raml0.8',
        GRAPHQL: 'graphql' },

      model: {
        COLLECTION: 'collection' } };


  }

  /**
     *
     * @param {String} model
     * @param {String} modelId
     * @param {callback} cb
     */
  getAPIForModel(model, modelId, cb) {
    if (!model) {
      return cb({
        status: 'ERR_MISSING_MODEL',
        message: 'model is a mandatory parameter' });

    }

    if (model !== 'collection') {
      return cb({
        status: 'ERR_UNSUPPORTED_MODEL',
        message: 'Specified model is not supported' });

    }

    if (!modelId) {
      return cb({
        status: 'ERR_MISSING_MODELID',
        message: 'modelId is a mandatory parameter' });

    }

    if (typeof modelId != 'string') {
      return cb({
        status: 'ERR_INVALID_MODELID',
        message: 'modelId should be string' });

    }

    __WEBPACK_IMPORTED_MODULE_2__controllers_APIRelationController__["a" /* default */].get(modelId, (error, res) => {
      if (error) {
        pm.logger.warn('APIDevInterface~getAPIForModel', error);
        return cb(null);
      }

      if (!_.get(res, 'apiId')) {
        pm.logger.warn('APIDevInterface~getAPIForModel: There is no API linked to the model');
        return cb(null);
      }

      let apiModel = new API(model, modelId, res);

      cb(null, apiModel);
    });
  }};let


API = class API {





  constructor(model, modelId, apiLinkedToCollection) {this.id = null;this.name = null;this.version = null;
    this.model = model;
    this.modelId = modelId;
    this.initialize(apiLinkedToCollection);
  }

  initialize(definition) {
    this.id = definition.apiId;
    this.name = definition.apiName;
    this.version = { id: definition.apiVersionId, name: definition.apiVersionName };
  }

  /**
     *
     * @param {Object} options : Additional parameters
     * @param {callback} cb: Callback that handles the response
     */
  getSchema(options, cb) {
    if (this.model === 'collection') {
      if (!options ||
      typeof _.get(options, 'schemaTypes') !== 'object') {
        return cb({
          status: 'ERR_INVALID_SCHEMA_TYPES',
          message: 'Invalid supported schema types' });

      }

      let definition = {
        apiId: this.id,
        apiVersionId: this.version.id,
        modelId: this.modelId,
        types: _.get(options, 'schemaTypes').toString() };


      __WEBPACK_IMPORTED_MODULE_1__controllers_APISchemaController__["a" /* default */].get(definition, (error, res) => {
        if (!error) {
          return cb(null, res);
        }
        if (error.status === 401) {
          return cb({
            status: 'ERR_UNAUTHENTICATED_USER',
            message: _.get(error, 'error.message') });

        }
        if (error.status === 500) {
          return cb({
            status: 'SERVER_ERROR',
            message: _.get(error, 'error.message') });

        }
        if (error.status === 403) {
          return cb({
            status: 'ERR_FORBIDDEN',
            message: _.get(error, 'error.message') });

        }
        if (error.status === 404 || error.status === 400) {
          return cb(null);
        }
        cb(null);
      });
    }
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bootRuntimeListeners;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_RuntimeRequestExecutionListener__ = __webpack_require__(3309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_PersistResponseListener__ = __webpack_require__(3310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_services_RuntimeRequestAuthorizationListener__ = __webpack_require__(3311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_RuntimeConsoleEventsListener__ = __webpack_require__(3312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_RuntimeRequestDownloadListener__ = __webpack_require__(3313);






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

/***/ 3309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["a"] = handleRequestExecutionEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(5);



const NAMESPACE_REQUEST_EXECUTION = 'requestexecution',
MAX_RESPONSE_SIZE_ERROR_MESSAGE = 'Maximum response size reached';

let requestExecutionEventHandlers = {
  error(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    // Adding special handling for request error when response is greater than specified
    // maximum response size
    if (eventData.phase === 'request' &&
    eventData.error &&
    eventData.error.message === MAX_RESPONSE_SIZE_ERROR_MESSAGE) {

      // Return as this error is going to handled differently
      return executionStore.maxResponseReached();
    }

    executionStore.setErrors([{
      phase: eventData.phase,
      error: eventData.error }]);

  },

  exception(event) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event),
    exception = eventData.error;

    pm.toasts.error('Something went wrong while running your scripts. Check Postman Console for more info.', { dedupeId: eventData.id });

    console.warn(`Error running scripts: ${exception.name} | ${exception.message}`, exception);
  },

  requestDispatched(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.updateDispatchedRequest(eventData.request);
    executionStore.updateRequestSize(eventData.requestSize);
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

    executionStore.updateResponseBody(eventData.responseBody);
  },

  responseBodyStreamReceived(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    // At this point we are getting the buffer from the IPC which is an UintUtf8Encoded array
    // Note: global.Buffer is used due to a problem in webpack causing buffer library to be shimmed
    executionStore.updateResponseStream(global.Buffer.from(eventData.responseBodyStream));
  },

  responseFinalized(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.updateResponseMeta(eventData.meta);
    executionStore.updateResponseContentInfo(eventData.responseContentInfo);
  },

  cookiesReceived(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.updateCookies(eventData.cookies);
  },

  assertionsReceived(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.addAssertions(eventData.assertions);
  },

  visualizerDataReceived(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.updateVisualizerData(eventData.visualizerData);
  },

  finished(event, executionStore) {
    executionStore.setFinished();
  },

  terminated(event) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event),
    executionStore = Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["getStore"])('RequestExecutionStore'),
    execution = executionStore.find(eventData.id);

    /**
                                                    * do not remove by origin, only remove by execution id
                                                    * removing by origin might cause race conditions
                                                    * BEHAVIOUR: On termination if the request is present in the staging area it's cleaned up.
                                                    * If the response has already started then it will no longer be in the staging area
                                                    * and will not be removed from the UI, instead the request will be cancelled
                                                    *
                                                    * If it was the case where a new request was started without canceling the previous request
                                                    * the `RequestExecutionStore.add` method has already cleanup the execution and this will just
                                                    * be an noop behaviour
                                                    */
    if (executionStore.hasStagingExecution(execution.origin)) {
      executionStore.remove(eventData.id);
    } else {
      execution.setCancelled();
    }
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
  executionStore = Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["getStore"])('RequestExecutionStore').find(eventData.id);

  if (!executionStore) {
    return;
  }

  requestExecutionEventHandlers[Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event)] && requestExecutionEventHandlers[Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event)](event, executionStore);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),

/***/ 3310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = handleResponsePersistEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HistoryResponseService__ = __webpack_require__(1304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipelines_user_action__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_WorkspaceController__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_HistoryController__ = __webpack_require__(137);








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
    pm.logger.error('HistoryResponse: Could not create history response. Something went wrong', e);
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
  executionStore = Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["getStore"])('RequestExecutionStore').find(eventData.id);

  if (!executionStore) {
    return;
  }

  handleHistoryResponseCreate(event, executionStore);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleRequestAuthorizationEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(5);



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

  let executionStore = Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["getStore"])('RequestExecutionStore'),
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

/***/ 3312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = handleConsoleLogEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_ConsoleEventTypes__ = __webpack_require__(266);




// @debt: The events for the request `net` and `netError` should not be in
// console listener. Console events listener should just listen to console
// events. This also means changing the runtime execution service in main
// process to not send console events for request. The logging of request on the
// console is renderer's responsibility.

let consoleEventListeners = {
  net(event) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    if (!(eventData && eventData.cursor)) {
      return;
    }

    let payload = { request: eventData.request };

    // If the cursor has a scriptId then we can safely assume that this was an indirect
    // sendRequest
    if (_.has(eventData, 'cursor.scriptId')) {
      payload.indirect = 'request';
    }

    if (eventData.history) {
      payload.history = eventData.history;
    }

    if (eventData.response) {
      payload.response = eventData.response;
    }

    if (eventData.error) {
      payload.error = eventData.error;

      return pm.console.error(__WEBPACK_IMPORTED_MODULE_2__constants_ConsoleEventTypes__["c" /* CONSOLE_EVENT_NETWORK */], {}, payload);
    }

    // Emit the log event to console
    return pm.console.log(__WEBPACK_IMPORTED_MODULE_2__constants_ConsoleEventTypes__["c" /* CONSOLE_EVENT_NETWORK */], {}, payload);
  },

  log(event) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    if (!(eventData && eventData.cursor)) {
      return;
    }

    pm.console.write(eventData.level, __WEBPACK_IMPORTED_MODULE_2__constants_ConsoleEventTypes__["b" /* CONSOLE_EVENT_LOG */], {}, eventData.messages);
  },

  exception(event) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    if (!(eventData && eventData.cursor)) {
      return;
    }

    pm.console.error(__WEBPACK_IMPORTED_MODULE_2__constants_ConsoleEventTypes__["a" /* CONSOLE_EVENT_EXCEPTION */], {}, eventData.error);
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
  executionStore = Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["getStore"])('RequestExecutionStore').find(eventData.id);

  if (!executionStore) {
    return;
  }

  consoleEventListeners[Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event)] && consoleEventListeners[Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event)](event);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleRequestDownloadEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_services_filesystem__ = __webpack_require__(580);




const NAMESPACE_REQUEST_EXECUTION = 'requestexecution';

let requestExecutionEventHandlers = {
  finished(event) {
    if (!event) {
      return;
    }

    let executionStore = Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["getStore"])('RequestExecutionStore').find(event.data && event.data.id);

    if (!executionStore || !executionStore.download) {
      return;
    }

    let stream = executionStore.responseStream,
    contentInfo = executionStore.responseContentInfo;

    Object(__WEBPACK_IMPORTED_MODULE_2__models_services_filesystem__["c" /* saveAndOpenFileForResponse */])(contentInfo, stream, err => {
      if (err) {
        return pm.toasts.error('Error while saving the response: ' + (err.message || ''));
      }

      pm.toasts.success('Downloaded Response');
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

/***/ 3314:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export getCommentOptions */
/* unused harmony export fetchCollection */
/* unused harmony export fetchTeamCollection */
/* unused harmony export fetchEnvironment */
/* unused harmony export fetchWorkspaces */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchCollectionRun; });
/* unused harmony export fetchNotifications */
/* unused harmony export fetchGlobals */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return scheduleFetch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_SyncService__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipelines_sync_action__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_UserController__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_sync_services_SyncIncomingHandler__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_async__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sync_timeline_helpers_SocketStatusService__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_ACConstants__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_SyncStatusConstants__ = __webpack_require__(155);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};










const USER = 'user',
TEAM = 'team',
ALLOWED_PERMISSIONS_FOR_TEAM = 'ALLOWED_PERMISSIONS_FOR_TEAM',
ALLOWED_PERMISSIONS_FOR_USER = 'ALLOWED_PERMISSIONS_FOR_USER',
actorPermissionsMap = {
  [USER]: ALLOWED_PERMISSIONS_FOR_USER,
  [TEAM]: ALLOWED_PERMISSIONS_FOR_TEAM };


/**
                                           * Interface to get stuff from Sync.
                                           */

/**
                                               * Fetches a collection from Sync server.
                                               *
                                               * @param {Object} criteria
                                               * @param {String} criteria.id
                                               * @param {String} criteria.owner
                                               *
                                               * @returns {Promise<Object>}
                                               */
function fetchCollection(criteria) {
  if (!criteria) {
    return Promise.reject(new Error('SyncFetcherService: Missing criteria to fetch collection.'));
  }

  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])(),
  collection = criteria.id,
  owner = criteria.owner;

  return new Promise((resolve, reject) => {
    // request for the collection
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'collection',
      action: 'findOne',
      meta: {
        query: { populate: 'true' },
        pathVariables: { id: `${owner}-${collection}` } } },

    function (msg) {
      if (msg.error) {
        return reject(new Error(msg.error));
      }

      // extract collection
      let collection = msg.data;

      // add meta information to collection
      _.assign(collection, _.pick(msg.meta, ['favorite', 'permissions']));

      // return collection
      return resolve(collection);
    });
  });
}

/**
   * Fetches a team property of a collection from Sync server.
   *
   * @param {String} collectionUid
   *
   * @returns {Promise<Object>}
   */
function fetchTeamCollection(collectionUid) {
  if (!collectionUid) {
    return Promise.reject(new Error('SyncFetcherService: Missing collectionUid to fetch collection.'));
  }

  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'collection',
      action: 'findOneTeam',
      meta: {
        pathVariables: { uid: collectionUid } } },

    function (msg) {
      if (msg.error) {
        return reject(new Error(msg.error));
      }

      return resolve(_.get(msg, 'data.team'));
    });
  });
}

/**
   * Fetches all the team collections for a given workspace
   *
   * @param {String} workspaceId
   *
   * @returns {Promise<Object>}
   */
function fetchTeamCollections(workspaceId) {
  if (!workspaceId) {
    return Promise.reject(new Error('SyncFetcherService: Missing workspaceId to fetch collections.'));
  }

  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'workspace',
      action: 'findTeamCollections',
      meta: {
        pathVariables: { id: workspaceId },
        query: { team: 'true' } } },

    function (msg) {
      if (msg.error) {
        return reject(new Error(msg.error));
      }

      return resolve(_.get(msg, 'data.collections'));
    });
  });
}

/**
   * Fetches all forked collections from sync for given user id
   *
   * @returns {Promise<Object>}
   */
function fetchAllForkedCollections() {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    // request for the collection
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'collection',
      action: 'findForks' },
    function (msg) {
      if (!msg) {
        return reject(new Error('SyncFetcherService~fetchAllForkedCollections: Invalid response returned by sync'));
      }

      if (msg.error) {
        return reject(new Error(msg.error));
      }

      return resolve(msg);
    });
  });
}

/**
   * Fetches a environment from Sync server.
   *
   * @param {Object} criteria
   * @param {String} criteria.id
   * @param {String} criteria.owner
   *
   * @returns {Promise<Object>}
   */
function fetchEnvironment(criteria) {
  if (!criteria) {
    return Promise.reject(new Error('SyncFetcherService: Missing criteria to fetch environment.'));
  }

  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])(),
  collection = criteria.id,
  owner = criteria.owner;

  return new Promise((resolve, reject) => {
    // request for the collection
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'environment',
      action: 'findOne',
      meta: {
        query: { populate: 'true' },
        pathVariables: { id: `${owner}-${collection}` } } },

    function (msg) {
      if (msg.error) {
        return reject(new Error(msg.error));
      }

      // extract env
      let collection = msg.data;

      // return env
      return resolve(collection);
    });
  });
}

/**
   *
   * @param {*} action
   * @param {*} criteria
   * @param {*} options
   */
function fetchWorkspaces(action, criteria, options) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    let meta = {},
    data;

    // reusing the same function for get and other actions
    // this is very wrong
    // @todo: need to make a generic translator function that take a sync API and makes a sync request
    if (action === 'findOne') {
      meta = { query: { populate: criteria.populate }, pathVariables: { id: criteria.id } };
    } else
    if (action === 'join' || action === 'leave' || action === 'destroy') {
      meta = { pathVariables: { id: criteria.id } };
    } else
    if (action === 'import') {
      data = criteria;
    } else
    if (action === 'update') {
      meta = { pathVariables: { id: criteria.id } };
      data = criteria;
    } else
    if (action === 'archivedCount') {
      meta = { pathVariables: { id: criteria.id } };
      data = criteria;
    } else
    if (action === 'find') {
      if (_.isEmpty(criteria)) {
        meta = {};
      } else
      {
        meta = { query: _.pick(criteria, ['dependencies', 'populate', 'type']) };
      }
    }

    // request for the collection
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'workspace',
      action,
      data,
      meta },
    function (msg) {
      if (!msg || msg.error) {
        return reject(new Error(_.get(msg, 'error.message') || _.get(msg, 'error')));
      }

      let data;

      data = _.isArray(msg) ? _.map(msg, 'data') : msg.data;

      if (options && options.pushToSyncQueue) {
        let syncResponses = _.isArray(msg) ? _.map(msg, item => {return _.cloneDeep(item);}) : [_.cloneDeep(msg)];

        __WEBPACK_IMPORTED_MODULE_6_async___default.a.eachSeries(syncResponses, function (response, next) {
          let changeset = Object(__WEBPACK_IMPORTED_MODULE_5__models_sync_services_SyncIncomingHandler__["a" /* buildChangesetFromMessage */])(response);
          return Object(__WEBPACK_IMPORTED_MODULE_5__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(changeset).
          then(() => {
            next(null);
          }).
          catch(() => {
            next(null);
          });
        }, function () {
          return resolve(data);
        });
      } else {
        return resolve(data);
      }

    });
  });
}

function fetchMonitors(action, criteria) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    let meta = { query: _.pick(criteria, ['workspace', 'collection']) };

    if (_.includes(['findOne', 'create', 'destroy'], action)) {
      meta.pathVariables = { id: criteria.id };
    }


    // request for the collection
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'monitor/proxy',
      data: _.omit(criteria, 'workspace'),
      action,
      meta },
    function (msg) {
      if (!msg || msg.error) {
        return reject(new Error(_.get(msg, 'error.message') || _.get(msg, 'error')));
      }

      return resolve(msg);
    });
  });
}

function fetchMocks(action, criteria) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    let meta = { query: _.pick(criteria, ['workspace', 'collection']) };
    if (_.includes(['findOne', 'create', 'destroy', 'update'], action)) {
      meta.pathVariables = { id: criteria.id };
    }

    // request for the collection
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'mock/proxy',
      data: _.omit(criteria, 'workspace'),
      action,
      meta },
    function (msg) {

      if (!msg || msg.error) {
        return reject(new Error(_.get(msg, 'error.message') || _.get(msg, 'error')));
      }

      return resolve(msg);
    });
  });
}

function fetchNotifications(action, criteria) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    let meta;
    if (action === 'find') {
      meta = { query: _extends({}, _.pick(criteria, ['limit', 'broadcastAt', 'type'])) };
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'notification',
      action,
      meta },
    function (msg) {
      if (!msg || msg.error) {
        return reject(new Error(_.get(msg, 'error.message') || _.get(msg, 'error')));
      }

      return resolve(msg);
    });
  });
}

/**
   *
   */
function fetchNotificationEvents(action, criteria) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {

    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'notificationevent',
      data: criteria.data,
      action },
    function (msg) {
      if (!msg || msg.error) {
        return reject(new Error(_.get(msg, 'error.message') || _.get(msg, 'error')));
      }

      return resolve(msg);
    });
  });
}

/**
   *
   * @param {*} action
   * @param {*} criteria
   */
function fetchHistory(action, criteria, options) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    let meta = { query: _.omit(criteria, ['data']) };
    if (_.includes(['findOne', 'create', 'destroy'], action)) {
      meta.pathVariables = { id: criteria.id };
    }

    if (action === 'destroyAll') {
      meta.query = { workspace: criteria.workspace };
    }

    // request for the collection
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'history',
      action,
      meta },
    function (msg) {

      if (!msg || msg.error) {
        return reject(new Error(msg.error.message || msg.error));
      }


      let data;

      data = _.isArray(msg) ? _.map(msg, 'data') : msg.data;

      return resolve(data);
    });
  });
}

/**
   * Calls sync api for actions related to forking
   *
   * @param {String} action
   * @param {Object} criteria
   */
function fetchFork(action, criteria) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {

    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'collection',
      data: { name: criteria.forkLabel },
      meta: {
        query: {
          workspace: criteria.workspace },

        pathVariables: {
          id: criteria.collectionId } },


      action: 'fork' },
    function (response) {
      if (!response || response.error) {
        return reject(new Error(_.get(response, 'error.message')));
      }

      return resolve(response);
    });
  });
}

/**
   *
   * @param {*} action
   * @param {*} criteria
   */
function fetchCollectionRun(action, criteria, options) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    let meta = { query: _.omit(criteria, ['data']) };
    if (_.includes(['findOne', 'create', 'destroy'], action)) {
      meta.pathVariables = { id: criteria.id };
    }

    // request for the collection
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'collectionrun',
      action,
      meta },
    function (msg) {

      if (!msg || msg.error) {
        return reject(new Error(msg.error.message || msg.error));
      }

      let data;

      data = _.isArray(msg) ? _.map(msg, 'data') : msg.data;

      return resolve(data);
    });
  });
}

/**
   *
   * @param {*} action
   * @param {*} criteria
   */
function fetchGlobals(action, criteria, options) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    let meta = { query: _.omit(criteria, ['data']) };
    if (_.includes(['findOne', 'create', 'destroy'], action)) {
      meta.pathVariables = { workspace: criteria.workspace };
    }

    // request for the collection
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'globals',
      action,
      meta },
    function (msg) {

      if (!msg || msg.error) {
        return reject(new Error(msg.error.message || msg.error));
      }


      let data;

      data = _.isArray(msg) ? _.map(msg, 'data') : msg.data;

      return resolve(data);
    });
  });
}

/**
   * Perform sync API actions on workspace settings model
   *
   * @param {String} action
   * @param {Object} criteria
   * @param {Object} options
   */
function fetchWorkspaceSettings(action, criteria, options) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    let meta = { query: _.omit(criteria, ['data']) };

    meta.pathVariables = { workspace: criteria.workspace };

    // request for the collection
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'workspacesettings',
      action,
      meta,
      data: criteria.data },
    function (msg) {
      // invalid message
      if (!msg) {
        return reject(new Error('SyncFetcherService: Could not get any response from sync'));
      }

      // error response
      if (msg.error) {
        let error = new Error(msg.error.message || 'Could not update workspace settings');

        msg.error.message && (error.isErrorUserFriendly = true);

        return reject(error);
      }

      let data;

      if (options && options.pushToSyncQueue) {
        let syncResponses = _.isArray(msg) ? _.map(msg, item => {return _.cloneDeep(item);}) : [_.cloneDeep(msg)];

        __WEBPACK_IMPORTED_MODULE_6_async___default.a.eachSeries(syncResponses, function (response, next) {
          let changeset = Object(__WEBPACK_IMPORTED_MODULE_5__models_sync_services_SyncIncomingHandler__["a" /* buildChangesetFromMessage */])(response);
          return Object(__WEBPACK_IMPORTED_MODULE_5__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(changeset).
          then(() => {
            next(null);
          }).
          catch(() => {
            next(null);
          });
        }, function () {
          return resolve(data);
        });
      } else {
        return resolve(data);
      }
    });
  });
}

/**
   * Get options object for annotation service calls
   * via websocket proxy
   *
   * | method | query                  | body                          | path |
   * |--------|------------------------|-------------------------------|------|
   * | get    | model, modelId, anchor | -                             | -    |
   * | post   | -                      | model, modelId, body, anchor  | -    |
   * | put    | -                      | body                          | id   |
   * | delete | -                      | -                             | id   |
   *
   * @param {String} action - model action
   * @param {Object} criteria - data needed for the action
   * @returns {Object} options for request
   */
function getCommentOptions(action, criteria) {
  const methodActionMap = {
    find: 'get',
    update: 'put',
    create: 'post',
    delete: 'delete' },

  method = methodActionMap[action];

  let query,
  body,
  path = '/comments';

  switch (method) {
    case 'get':
      query = {
        model: criteria.model,
        modelId: criteria.modelId,
        anchor: criteria.anchor };


      break;
    case 'post':
      body = criteria;

      break;
    case 'put':
      path = `${path}/${criteria.id}`;
      body = _.omit(criteria, ['id']);

      break;
    case 'delete':
      path = `${path}/${criteria.id}`;

      break;}


  return { method, path, query, body };
}

/**
   * Perform sync actions for comments
   *
   * @param {String} action
   * @param {Object} criteria
   * @returns {Promise} resolves when sync returns
   */
function fetchComments(action, criteria) {
  const socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    // request for the comment
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'ws/proxy',
      data: _extends({
        service: 'annotation' },
      getCommentOptions(action, criteria)),

      action: 'call',
      meta: {} },
    function (msg) {
      if (!msg || msg.error) {
        const err = new Error(_.get(msg, 'error.message') || _.get(msg, 'error'));

        err.details = _.get(msg, 'error.details');
        _.get(msg, 'error.message') && (err.isErrorUserFriendly = true);

        return reject(err);
      }

      return resolve(msg);
    });
  });
}

/**
   *  Fetches default role for an object type
   */
function fetchDefaultRoles(action, criteria) {
  const socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    // request for the roles
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'roles',
      action,
      meta: {
        query: {
          objectType: criteria.objectType } } },


    function (msg) {
      if (!msg || msg.error) {
        const err = new Error(_.get(msg, 'error.message') || _.get(msg, 'error'));

        err.details = _.get(msg, 'error.details');
        _.get(msg, 'error.message') && (err.isErrorUserFriendly = true);

        return reject(err);
      }

      return resolve(msg);
    });
  });
}


/**
   * Returns roles options
   *
   * @param {String} action
   * @param {Object} criteria
   * @returns {Object} roleOptions - The path and body for the call
   */
function getRoleOptions(action, criteria) {
  const BASE_ROLES_PATH = '/api/roles';

  let path,
  query,
  body = criteria;

  switch (action) {
    case 'objectType':
      path = `${BASE_ROLES_PATH}/list/by-objects`;
      query = {
        permissions: true,
        populate: true };

      break;
    case 'object':
      path = `${BASE_ROLES_PATH}/list-by-object`;
      body = { item: _extends({}, criteria) };
      break;}


  return { path, body, query };
}

/**
   * Fetches roles from sync by the given entity type
   */
function fetchRoles(action, criteria) {
  const socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    // request for the roles
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'ws/proxy',
      data: _extends({
        service: 'acs',
        method: 'post' },
      getRoleOptions(action, criteria), {
        query: {
          permissions: true,
          populate: true } }),


      action: 'call',
      meta: {} },
    function (msg) {
      if (!msg || msg.error) {
        const err = new Error(_.get(msg, 'error.message') || _.get(msg, 'error'));

        err.details = _.get(msg, 'error.details');
        _.get(msg, 'error.message') && (err.isErrorUserFriendly = true);

        return reject(err);
      }

      return resolve(msg);
    });
  });
}

/**
   * Updates Collection Roles
   *
   * @param {*} action
   * @param {*} criteria
   * @param {*} options
   */
function fetchEntityRoles(action, criteria, options) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])(),
  meta = { pathVariables: { id: criteria.id } };

  return new Promise((resolve, reject) => {
    // request for the collection
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: criteria.model,
      action: 'roles',
      data: criteria.data,
      meta },
    function (msg) {

      if (!msg || msg.error) {
        return reject(new Error(msg.error.message || msg.error));
      }

      let data = _.isArray(msg) ? _.map(msg, 'data') : msg.data;

      return resolve(data);
    });
  });
}

/**
   *
   * @param {Object} queryObject
   * @returns {Object} entityQueryObject
   */
function getEntityQueryObject(queryObject) {
  let objectType = queryObject.objectType,
  actorPermissionKey = actorPermissionsMap[queryObject.entityType],
  permissions = __WEBPACK_IMPORTED_MODULE_8__constants_ACConstants__["a" /* default */][actorPermissionKey],
  supportedPermissions = permissions && _.values(permissions[objectType]);

  return _.reduce(supportedPermissions, (acc, permission) => {
    let permissionCompositeKey = constructPermissionCompositeKey(_.assign({}, queryObject, { permission }));
    acc[permissionCompositeKey] = _.assign(_.pick(queryObject, ['entityType', 'entityId', 'objectId', 'objectType']), { permission });
    return acc;
  }, {});
}

/**
   * @param {Object} queryObjects
   * @returns {Object} permissionQueryObject
   */
function getPermissionQueryObject(queryObjects) {
  return _.reduce(queryObjects, (permissionQueryObject, queryObject) => {
    return _.assign(permissionQueryObject, getEntityQueryObject(queryObject));
  }, {});
}


/**
   * @param {permissionQueryObject} permissionQueryObject
   */
function fetchPermissions(permissionQueryObject) {
  const socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();
  if (_.isEmpty(permissionQueryObject)) {
    return Promise.reject(new Error('SyncFetcherService~fetchPermissions: The permissionQueryObject list to fetch permissions is empty'));
  }

  return new Promise((resolve, reject) => {
    // request for the comment
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'ws/proxy',
      data: {
        path: '/api/permissions/check',
        service: 'acs',
        method: 'post',
        body: { checks: permissionQueryObject } },

      action: 'call',
      meta: {} },
    function (msg) {
      if (!msg || msg.error) {
        const err = new Error(_.get(msg, 'error.message') || _.get(msg, 'error'));

        err.details = _.get(msg, 'error.details');
        _.get(msg, 'error.message') && (err.isErrorUserFriendly = true);

        return reject(err);
      }

      return resolve(msg);
    });
  });
}

/**
   *
   * @param {String} responseKey
   * @returns {Object} { objectId, objectType, permission }
   */
function constructPermissionCompositeKey(queryObject) {
  return `${queryObject.objectType}/${queryObject.objectId}/${queryObject.permission}`;
}

/**
   *
   * @param {String} responseKey
   * @returns {Object} { objectId, objectType, permission }
   */
function destructPermissionCompositeKey(responseKey) {
  let objectInfo = responseKey.split('/');
  return {
    objectType: objectInfo[0],
    objectId: objectInfo[1],
    permission: objectInfo[2] };

}

/**
   * @param {Object} response
   * @param {Object} response.results
   */
function transformedPermissionsResponse(response) {
  return _.reduce(response.results, (transformedResponse, value, key) => {
    let { objectId, objectType, permission } = destructPermissionCompositeKey(key),
    entityKey = `${objectType}/${objectId}`;

    if (transformedResponse[entityKey]) {
      transformedResponse[entityKey].actions[permission] = value.allowed;
    } else
    {
      transformedResponse[entityKey] = { objectType, objectId, actions: { [permission]: value.allowed } };
    }

    return transformedResponse;
  }, {});
}

/**
   *
   * @param {Object} criteria
   * @returns {Promise}
   */
function getPermissions(criteria) {
  let syncResponse,
  permissionQueryObject = getPermissionQueryObject(criteria.queryObjects);

  return fetchPermissions(permissionQueryObject).
  then(response => {
    syncResponse = response;
    let transformedResponse = transformedPermissionsResponse(response);

    return Promise.all(_.map(_.keys(transformedResponse), key => {
      return Object(__WEBPACK_IMPORTED_MODULE_1__pipelines_sync_action__["a" /* default */])(
      Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])('reload', 'permission', {
        model: 'permission',
        permission: transformedResponse[key] }));


    }));
  }).
  then(() => {
    return syncResponse;
  });
}


/**
   * Fetches the permission for a given list of objects
   *
   * @param {Array<Object>} criteria
   * @param {String} criteria.entityType
   * @param {String} criteria.entityId
   * @param {String} criteria.permission
   * @param {String} criteria.objectType
   * @param {String} criteria.objectId
   */
function fetchPermissionPerObject(criteria) {
  const socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    // request for the comment
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'ws/proxy',
      data: {
        path: '/api/permissions/check',
        service: 'acs',
        method: 'post',
        body: { checks: criteria } },

      action: 'call',
      meta: {} },
    function (msg) {
      if (!msg || msg.error) {
        const err = new Error(_.get(msg, 'error.message') || _.get(msg, 'error'));

        err.details = _.get(msg, 'error.details');
        _.get(msg, 'error.message') && (err.isErrorUserFriendly = true);

        return reject(err);
      }

      return resolve(msg);
    });
  });
}

/**
   * Fetches data from sync for an entity to check if it is shared
   * with the team or not
   *
   * @param {*} action
   * @param {*} criteria
   */
function fetchEntityShare(action, criteria) {
  const socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return new Promise((resolve, reject) => {
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: criteria.model,
      action: 'isShared',
      meta: { pathVariables: { id: criteria.id } } },
    function (msg) {
      if (!msg || msg.error) {
        const err = new Error(_.get(msg, 'error.message') || _.get(msg, 'error'));

        err.details = _.get(msg, 'error.details');
        _.get(msg, 'error.message') && (err.isErrorUserFriendly = true);

        return reject(err);
      }

      return resolve(msg);
    });
  });
}

/**
   *
   * @param {*} param
   */
function scheduleFetch({ type, id, model, action, criteria, options }) {
  if (type !== 'request') {
    return;
  }

  let currentSocketStatus = Object(__WEBPACK_IMPORTED_MODULE_7__sync_timeline_helpers_SocketStatusService__["a" /* getCurrentSocketStatus */])();

  if (currentSocketStatus === __WEBPACK_IMPORTED_MODULE_9__constants_SyncStatusConstants__["c" /* SOCKET_OFFLINE */] || currentSocketStatus === __WEBPACK_IMPORTED_MODULE_9__constants_SyncStatusConstants__["b" /* SOCKET_CONNECTING */]) {
    return pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, error: 'Could not fetch from sync. Socket not connected.' });
  }

  if (model === 'collection') {
    if (action === 'findOneTeam') {
      fetchTeamCollection(criteria.collectionUId).then(response => {
        if (!pm || !pm.eventBus) {
          pm.logger.error('SyncFetcherService: Could not find event bus.');
        }

        pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
      }).
      catch(error => {
        pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, error: error && error.message });
      });
    }
  }
  if (model === 'workspace') {
    if (action === 'findTeamCollections') {
      fetchTeamCollections(criteria.workspaceId).then(response => {
        if (!pm || !pm.eventBus) {
          pm.logger.error('SyncFetcherService: Could not find event bus.');
        }

        pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
      }).
      catch(error => {
        pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, error: error && error.message });
      });
    } else
    {
      fetchWorkspaces(action, criteria, options).then(response => {
        if (!pm || !pm.eventBus) {
          pm.logger.error('SyncFetcherService: Could not find event bus.');
        }

        pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
      }).
      catch(error => {
        pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, error: error && error.message });
      });
    }
  } else
  if (model === 'workspacesettings') {
    fetchWorkspaceSettings(action, criteria, options).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
    }).
    catch(error => {
      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, error: error && error.message, isErrorUserFriendly: error && error.isErrorUserFriendly });
    });
  } else
  if (model === 'monitor') {
    fetchMonitors(action, criteria, options).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
    }).
    catch(error => {
      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, error: error && error.message });
    });
  } else
  if (model === 'mock') {
    fetchMocks(action, criteria, options).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
    }).
    catch(error => {
      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, error: error && error.message });
    });
  } else
  if (model === 'forkedcollection' && action === 'find') {
    fetchAllForkedCollections(action, criteria, options).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
    }).
    catch(error => {
      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, error: error && error.message });
    });
  } else
  if (model === 'collectionactivityfeed') {
    fetchCollectionActivityFeed(criteria, options).then(response => {
      Object(__WEBPACK_IMPORTED_MODULE_1__pipelines_sync_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])('create', 'collectionactivityfeed', response));
    }).
    catch(error => {
      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, error: error && error.message });
    });
  } else if (model === 'workspaceactivityfeed') {
    fetchWorkspaceActivityFeed(criteria, options).then(response => {
      Object(__WEBPACK_IMPORTED_MODULE_1__pipelines_sync_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])('create', 'workspaceactivityfeed', response));
    }).
    catch(error => {
      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, error: error && error.message });
    });
  } else

  if (model === 'history') {
    fetchHistory(action, criteria, options).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });

    }).
    catch(error => {
      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, error: error && error.message });
    });
  } else
  if (model === 'collectionrun') {
    fetchCollectionRun(action, criteria, options).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });

    }).
    catch(error => {
      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, error: error && error.message });
    });
  } else
  if (model === 'notification') {
    fetchNotifications(action, criteria, options).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
    });
  } else
  if (model === 'forkedcollection' && action === 'create') {
    fetchFork(action, criteria).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
    });
  } else
  if (model === 'notificationevent') {
    fetchNotificationEvents(action, criteria, options).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
    });
  } else
  if (model === 'comment') {
    fetchComments(action, criteria, options).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
    }).
    catch(error => {
      pm.eventBus.channel('sync-remote-fetch').publish({
        type: 'response',
        id,
        error: error && error.message,
        isErrorUserFriendly: error && error.isErrorUserFriendly });

    });
  } else
  if (model === 'permission' && action === 'fetchPerObject') {
    fetchPermissionPerObject(criteria, options).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
    }).
    catch(error => {
      pm.eventBus.channel('sync-remote-fetch').publish({
        type: 'response',
        id,
        error: error && error.message,
        isErrorUserFriendly: error && error.isErrorUserFriendly });

    });
  } else
  if (model === 'permission') {
    getPermissions(criteria).
    then(syncResponse => {
      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: syncResponse });
    }).
    catch(err => {
      pm.eventBus.channel('sync-remote-fetch').publish({
        type: 'response',
        id,
        error: err && err.message });

    });
  } else
  if (model === 'roles') {
    let rolesHandler;

    switch (action) {
      case 'collection':rolesHandler = fetchEntityRoles;break;
      case 'api':rolesHandler = fetchEntityRoles;break;
      case 'default':rolesHandler = fetchDefaultRoles;break;
      default:rolesHandler = fetchRoles;}


    rolesHandler(action, criteria, options).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
    }).
    catch(error => {
      pm.eventBus.channel('sync-remote-fetch').publish({
        type: 'response',
        id,
        error: error && error.message,
        isErrorUserFriendly: error && error.isErrorUserFriendly });

    });
  } else
  if (model === 'share') {
    fetchEntityShare(action, criteria, options).then(response => {
      if (!pm || !pm.eventBus) {
        pm.logger.error('SyncFetcherService: Could not find event bus.');
      }

      pm.eventBus.channel('sync-remote-fetch').publish({ type: 'response', id, data: response });
    }).
    catch(error => {
      pm.eventBus.channel('sync-remote-fetch').publish({
        type: 'response',
        id,
        error: error && error.message,
        isErrorUserFriendly: error && error.isErrorUserFriendly });

    });
  }
}

function fetchCollectionActivityFeed(criteria) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  return __WEBPACK_IMPORTED_MODULE_3__controllers_UserController__["a" /* default */].get().then(user => {
    let isTeamMember = __WEBPACK_IMPORTED_MODULE_4__utils_util__["a" /* default */].isTeamMember(user),
    sinceId = criteria.sinceId || null,
    activityFeedUrlParams = { count: 20 };

    _.assign(activityFeedUrlParams,
    isTeamMember && { populate: true },
    criteria.maxId && { max_id: criteria.maxId });


    return new Promise((resolve, reject) => {
      Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
        model: 'collection',
        action: 'revisions',
        meta: {
          query: activityFeedUrlParams,
          pathVariables: { id: `${criteria.ownerId}-${criteria.collectionId}` } } },

      function (msg) {

        let record = {
          id: criteria.collectionId,
          meta: _.get(msg, 'meta') || {},
          feeds: _.get(msg, 'data') || [],
          error: !msg || msg.error };


        return resolve(record);
      });
    });
  });
}

function fetchWorkspaceActivityFeed(criteria) {
  let socket = Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["b" /* getSyncSocket */])();

  let activityFeedUrlParams = { count: 20, populate: true };

  _.assign(activityFeedUrlParams,
  criteria.maxId && { max_id: criteria.maxId });


  return new Promise((resolve, reject) => {
    Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["d" /* request */])(socket, {
      model: 'workspace',
      action: 'revisions',
      meta: {
        query: activityFeedUrlParams,
        pathVariables: { id: criteria.workspaceId } } },

    function (msg) {

      let record = {
        id: criteria.workspaceId,
        meta: _.get(msg, 'meta') || {},
        feeds: _.get(msg, 'data') || [],
        error: !msg || msg.error };


      return resolve(record);
    });
  });
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = findOne;
/* harmony export (immutable) */ __webpack_exports__["a"] = find;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_SyncService__ = __webpack_require__(78);


/**
                               * Finds a single item for a given model from Sync server.
                               *
                               * @param {String} model
                               * @param {Object} criteria
                               * @param {Object} query
                               * @param {Function} callback
                               */
function findOne(model, criteria, query, callback) {
  let pathVariables;

  if (model === 'globals') {
    pathVariables = { workspace: criteria.workspace };
  } else {
    pathVariables = { id: criteria.id };
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["c" /* promisifiedRequest */])({
    model: model,
    action: 'findOne',

    // @todo: compute this from path variables in SyncService instead of hardcoding here
    meta: { pathVariables, query } }).


  then(response => {
    if (!response) {
      return callback(new Error('Could not get any response from sync'));
    }

    if (response.error) {
      return callback(new Error(response.error.message || response.error));
    }

    callback(null, response.data, response);
  }).

  catch(err => {
    return callback(new Error(`Could not get any response from sync: ${err}`));
  });
}

/**
   * Finds all items for a given model from Sync server.
   *
   * @param {String} model
   * @param {Object} query
   * @param {Function} callback
   */
function find(model, query, callback) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__services_SyncService__["c" /* promisifiedRequest */])({
    model: model,
    action: 'find',
    meta: { query } }).


  then(response => {
    if (!response) {
      return callback(new Error('Could not get any response from sync'));
    }

    if (response.error) {
      return callback(new Error(response.error.message || response.error));
    }

    callback(null, response);
  }).

  catch(err => {
    return callback(new Error(`Could not get any response from sync: ${err}`));
  });

}

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = publishRealtimeOutgoingMessage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sync_helpers_SocketEventsService__ = __webpack_require__(345);




/**
                                                                                       * An RxJS  Subject instance that is be used to publish real-time sync messages.
                                                                                       * Subject guarantees that the observable is multi-cast and shares a single listener
                                                                                       * for every subscriber.
                                                                                       *
                                                                                       * @type {Observable}
                                                                                       */
let realtimeOutgoingMessagesSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["c" /* Subject */]();

/**
                                                      * Returns an Observable of realtime messages from sync socket
                                                      *
                                                      * @returns
                                                      */
const realtimeOutgoingMessages$ = realtimeOutgoingMessagesSubject.asObservable();
/* harmony export (immutable) */ __webpack_exports__["b"] = realtimeOutgoingMessages$;


/**
                                                                                          * an observable of real-time messages from sync socket till the socket disconnects
                                                                                          *
                                                                                          * Use this api if you are eventually resubscribing else if you don't after once socket
                                                                                          * disconnect you will not get the messages.
                                                                                          *
                                                                                          * If not resubscribing use `realtimeOutgoingMessages`
                                                                                          */
const realtimeOutgoingMessagesTillSocketDisconnect$ = realtimeOutgoingMessages$.
pipe(
Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["k" /* takeUntil */])(Object(__WEBPACK_IMPORTED_MODULE_2__sync_helpers_SocketEventsService__["b" /* getSocketDisconnectsObservable */])()));
/* harmony export (immutable) */ __webpack_exports__["c"] = realtimeOutgoingMessagesTillSocketDisconnect$;



/**
                                               * Publishes a message to the realtime outgoing
                                               *
                                               * @returns
                                               */
function publishRealtimeOutgoingMessage(message) {
  pm.logger.info('RealtimeSyncMessageService~publishRealtimeOutgoingMessage: Message received ' +
  `${_.get(message, 'model')}:${_.get(message, 'action')}:${_.get(message, 'data.modelId') || _.get(message, 'data.instance.id')} ` +
  `Timeline in message: ${_.get(message, 'meta.timeline.model')}:${_.get(message, 'meta.timeline.model_id')}`);

  realtimeOutgoingMessagesSubject.next(message);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sanitizeHydratedChangeset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_sync_outgoing_models__ = __webpack_require__(550);


/**
                                                              * sanitize hydrated changeset
                                                              *
                                                              * @param {any} changeset
                                                              */
function sanitizeHydratedChangeset(changeset) {
  let {
    model,
    action,
    data } =
  changeset,
  syncModel = __WEBPACK_IMPORTED_MODULE_0__modules_sync_outgoing_models__["a" /* default */][model],
  instance;

  if (!data || !data.instance) {
    return;
  }

  // do not sanitize destroy changesets
  if (action === 'destroy') {
    return;
  }

  // get the instance from changeset
  instance = data.instance;

  // check if this model needs sanitization
  if (syncModel && syncModel.sanitizeForSync) {
    syncModel.sanitizeForSync(instance, changeset);
  }
}



/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  default: __webpack_require__(220).default,

  // workspace
  workspace: __webpack_require__(949).default,

  // collection models
  collection: __webpack_require__(950).default,
  folder: __webpack_require__(951).default,
  request: __webpack_require__(952).default,
  response: __webpack_require__(953).default,

  // header preset
  headerpreset: __webpack_require__(954).default,

  // globals/environment
  globals: __webpack_require__(955).default,
  environment: __webpack_require__(956).default,

  // history like
  history: __webpack_require__(957).default,
  historyresponse: __webpack_require__(958).default,
  collectionrun: __webpack_require__(959).default,

  // user/team
  team: __webpack_require__(960).default,

  // notification
  notification: __webpack_require__(961).default,

  // comment
  comment: __webpack_require__(962).default });

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = initializeConfigurations;
/* unused harmony export initializeServices */
/* unused harmony export subscribeToModelEvents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_Configuration__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_FeatureFlags__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_model_event__ = __webpack_require__(2);





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

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserConfigurationController__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultConfigurationController__ = __webpack_require__(553);


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

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let defaultConfiguration = __webpack_require__(554);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAll: function () {
    return Promise.resolve(defaultConfiguration);
  } });

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = {"editor.requestEditorLayoutName":"layout-1-column","request.autoPersistVariables":true,"user.plansToAllowUpgrade":[],"workspace.visibilityAvailablePlans":[],"editor.openInNew":false,"editor.skipConfirmationBeforeClose":false,"editor.showIcons":true}

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserFeatureFlagController__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultFeatureFlagController__ = __webpack_require__(556);


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

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let defaultFeatureFlags = __webpack_require__(557);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAll: function () {
    return Promise.resolve(defaultFeatureFlags);
  } });

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = {"graphql":true,"graphqlAutocomplete":true,"inviteByNonAdmin":false,"collectionAndFolderConfigurations":false,"schemaChangelog":true,"requestValidation":true,"schemaSyncing":false}

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["b"] = resolveConflicts;
/* harmony export (immutable) */ __webpack_exports__["a"] = initialize;
/* unused harmony export getUserResolution */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_conflict_models__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConflictResolutionsService__ = __webpack_require__(730);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


let conflictId = 0;

function generateConflictId() {
  return conflictId++;
}

let callbackMap = {};

/**
                       *
                       *
                       * @export
                       */
async function resolveConflicts(clientChanges, serverChanges, timeline) {
  // no conflicts if one set or both sets are empty
  if (_.isEmpty(serverChanges) || _.isEmpty(clientChanges)) {
    return;
  }

  let modelIdMap = {},
  conflicts = [],
  clientChangesToDrop = [];


  _.forEach(serverChanges, (changeset, index) => {
    let identifier = `${changeset.model}:${changeset.data.modelId}`;

    modelIdMap[identifier] = modelIdMap[identifier] || {};
    modelIdMap[identifier].serverChange = changeset;
    modelIdMap[identifier].serverIndex = index;
  });

  _.forEach(clientChanges, (changeset, index) => {
    let identifier = `${changeset.model}:${changeset.data.modelId}`;

    modelIdMap[identifier] = modelIdMap[identifier] || {};
    modelIdMap[identifier].clientChange = changeset;
    modelIdMap[identifier].clientIndex = index;
  });


  let newServerChanges = _.cloneDeep(serverChanges),
  newClientChanges = _.cloneDeep(clientChanges),
  placeHoldersMap = {};

  _.forEach(modelIdMap, changesets => {
    if (!changesets.clientChange || !changesets.serverChange) {
      return;
    }

    let { clientChange, serverChange } = changesets,
    model = clientChange.model,
    conflictModel = model && __WEBPACK_IMPORTED_MODULE_0__sync_conflict_models__["a" /* default */][model],
    resolver = conflictModel && conflictModel[`${clientChange.action}:${serverChange.action}`] || conflictModel[`${serverChange.action}:${clientChange.action}`] || conflictModel['*'];

    if (!resolver) {
      return;
    }

    let conflictResolution = resolver(clientChange, serverChange);


    // if the conflict resolution drops the client change, keep track of it and remove it from sync client
    let isClientChangeDropped = true;

    _.forEach(_.isArray(conflictResolution.clientChanges) ? conflictResolution.clientChanges : [conflictResolution.clientChanges], function (resolutionClientChange) {
      if (!resolutionClientChange) {
        return;
      }

      if (resolutionClientChange.action === clientChange.action && resolutionClientChange.model === clientChange.model && _.get(resolutionClientChange, 'data.modelId') === clientChange.data.modelId) {
        isClientChangeDropped = false;
        return false;
      }
    });

    if (isClientChangeDropped) {
      clientChangesToDrop.push(clientChange);
    }

    if (conflictResolution.resolved) {
      newServerChanges.splice(changesets.serverIndex, 1, ...conflictResolution.serverChanges);
      newClientChanges.splice(changesets.clientIndex, 1, ...conflictResolution.clientChanges);
      return;
    }

    let conflictId = generateConflictId();

    placeHoldersMap[conflictId] = {
      serverChange: _extends({
        id: conflictId },
      conflictResolution.serverChanges, {
        index: changesets.serverIndex }),

      clientChange: _extends({
        id: conflictId },
      conflictResolution.clientChanges, {
        index: changesets.clientIndex }) };



    // attaching id to conflicts rows for lookup post resolution
    if (_.isArray(conflictResolution.userResolution)) {
      _.forEach(conflictResolution.userResolution, row => {
        row.id = conflictId;
      });
    } else
    {
      conflictResolution.userResolution.id = conflictId;
    }

    conflicts = conflicts.concat(conflictResolution.userResolution);
  });

  // drop changesets from sync client
  await new Promise(resolve => {
    pm.syncManager.removeChangesetsFromSyncClient(clientChangesToDrop, () => {
      // swallow errors
      // errors are logged in sync manager
      resolve();
    });
  });

  let userResolution;

  if (!_.isEmpty(conflicts)) {

    // setting isServerSelected true so server values is selected as default in the conflict modal
    _.forEach(conflicts, conflict => {
      // bail out if this flag is already set by the conflict modal
      if (!conflict || conflict.isLocalSelected || conflict.isServerSelected) {
        return;
      }

      conflict.isLocalSelected = false;
      conflict.isServerSelected = true;
    });

    userResolution = await getUserResolution(conflicts, timeline);

    let result = applyUserResolution({
      serverChanges: newServerChanges,
      clientChanges: newClientChanges,
      userResolution,
      placeHoldersMap });


    newServerChanges = result.serverChanges;
    newClientChanges = result.clientChanges;
  }

  return {
    serverChanges: newServerChanges,
    clientChanges: newClientChanges };

}

/**
   *
   *
   * @param {*} { serverChanges, clientChanges, userResolution }
   */
function applyUserResolution({ serverChanges, clientChanges, userResolution, placeHoldersMap }) {
  let groupById = _.groupBy(userResolution, 'id');
  _.forEach(groupById, (resolutions, conflictId) => {
    let placeHolder = placeHoldersMap[conflictId];

    if (_.some(resolutions, r => r.key)) {
      let data = {};

      _.forEach(resolutions, row => {
        data[row.key] = row.isLocalSelected ? row.localValue : row.serverValue;
      });

      let modifiedServerChange = _.cloneDeep(placeHolder.serverChange),
      modifiedClientChange = _.cloneDeep(placeHolder.clientChange);

      _.assign(modifiedServerChange.data.instance, data);
      _.assign(modifiedClientChange.data.instance, data);

      serverChanges.splice(placeHolder.serverChange.index, 1, modifiedServerChange);
      clientChanges.splice(placeHolder.clientChange.index, 1, modifiedClientChange);
    } else

    {
      let resolution = resolutions[0];
      serverChanges.splice(placeHolder.serverChange.index, 1, ...(resolution.isLocalSelected ? placeHolder.serverChange.onLocal : placeHolder.serverChange.onServer));
      clientChanges.splice(placeHolder.clientChange.index, 1, ...(resolution.isLocalSelected ? placeHolder.clientChange.onLocal : placeHolder.clientChange.onServer));
    }


  });

  return { serverChanges, clientChanges };
}


/**
   *
   *
   * @export
   */
function initialize() {
  let conflictResolutionChannel = pm.eventBus.channel('conflict-resolution');

  conflictResolutionChannel.subscribe(message => {
    if (message.name === 'submit' && message.namespace === 'conflicts') {
      onUserSubmit(message);
      return;
    }

    if (message.name === 'pushPending' && message.namespace === 'conflicts') {
      publishPendingResolutions();
      return;
    }
  });
}

/**
   *
   *
   * @export
   * @param {*} conflicts
   * @param {*} timeline
   * @returns
   */
async function getUserResolution(conflicts, timeline) {
  return new Promise((resolve, reject) => {
    callbackMap[`${timeline.model}:${timeline.modelId}`] = { conflicts, resolve, reject, timeline };
    Object(__WEBPACK_IMPORTED_MODULE_1__ConflictResolutionsService__["a" /* startUserConflictResolution */])(conflicts, timeline);
  });
}

/**
   *
   */
function publishPendingResolutions() {
  _.forEach(callbackMap, (conflictsMap, timeline) => {
    Object(__WEBPACK_IMPORTED_MODULE_1__ConflictResolutionsService__["a" /* startUserConflictResolution */])(conflictsMap.conflicts, conflictsMap.timeline);
  });
}

/**
   *
   *
   * @param {*} message
   * @returns
   */
function onUserSubmit(message) {
  let { conflicts, timeline } = message.data;

  let callbacks = callbackMap[`${timeline.model}:${timeline.modelId}`];

  callbacks.resolve(conflicts);

  callbackMap[`${timeline.model}:${timeline.modelId}`] = null;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getAllChangesets;
/* unused harmony export getChangesets */
/* harmony export (immutable) */ __webpack_exports__["c"] = removeChangesets;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeModelsFromAllChangesets;
/* harmony export (immutable) */ __webpack_exports__["a"] = addChangesets;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async__);


const TIMEOUT = 5 * 60 * 1000, // 5 minutes
CONCURRENCY_LIMIT = 1;

/**
                        * Wrap all sync client functions in a queue so as to avoid multiple read/writes at a instance
                        *
                        * Works something similar to locks, and to maintain this concurrency limit is 1
                        *
                        * Because it involves multiple asynchronous I/O operations there could be invalid intermediate
                        * states. That is why we wrap it in a queue.
                        */
let syncClientFunctionsQueue = Object(__WEBPACK_IMPORTED_MODULE_0_async__["queue"])((task, cb) => {
  let done = false,
  timeoutId = setTimeout(() => {
    done = true;
    cb(new Error(`SyncClientService~syncClientFunctionsQueue: Could not complete function call: ${task.command}. Request timedout.`));
  }, TIMEOUT);

  // if undefined or null, assign []
  !task.args && (task.args = []);

  pm.syncManager.syncClient[task.command](...task.args, (...args) => {
    if (done) {
      return;
    }

    clearTimeout(timeoutId);
    cb && cb(...args);
  });
}, CONCURRENCY_LIMIT);

/**
                        * SyncClient.getAllChangesets
                        *
                        * This is a wrapper function and internally is implemented through a queue.
                        * @param  {Function} cb
                        */
function getAllChangesets(cb) {
  syncClientFunctionsQueue.push({
    command: 'getAllChangesets',
    args: [] },
  cb);
}

/**
   * SyncClient.getChangesets
   *
   * This is a wrapper function and internally is implemented through a queue.
   * @param  {Function} cb
   */
function getChangesets(cb) {
  syncClientFunctionsQueue.push({
    command: 'getChangesets',
    args: [] },
  cb);
}

/**
   * SyncClient.removeChangesets
   *
   * This is a wrapper function and internally is implemented through a queue.
   * @param  {Array} changesets
   * @param  {Function} cb
   */
function removeChangesets(changesets, cb) {
  syncClientFunctionsQueue.push({
    command: 'removeChangesets',
    args: [changesets] },
  cb);
}

/**
   * SyncClient.removeModelsFromAllChangesets
   *
   * This is a wrapper function and internally is implemented through a queue.
   * @param  {Array} modelsIds
   * @param  {Function} cb
   */
function removeModelsFromAllChangesets(modelsIds, cb) {
  syncClientFunctionsQueue.push({
    command: 'removeModelsFromAllChangesets',
    args: [modelsIds] },
  cb);
}

/**
   * SyncClient.addChangesets
   *
   * This is a wrapper function and internally is implemented through a queue.
   * @param  {Array} changesets
   * @param  {Function} cb
   */
function addChangesets(changesets, cb) {
  syncClientFunctionsQueue.push({
    command: 'addChangesets',
    args: [changesets] },
  cb);
}

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["c"] = getUserResolutionForNonDeletedEntities;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dropChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyServerChangesForConflictResolution; });
/**
 * Use when that conflict does a no operation
 * @returns {Object}
 */
function dropChanges() {
  return {
    resolved: true,
    clientChanges: [],
    serverChanges: [] };

}

/**
   * Use then when the server changes are directly to be applied on the client
   * @param  {Object} clientChange
   * @param  {Object} serverChange
   *
   * @returns {Object}
   */
function applyServerChangesForConflictResolution(clientChange, serverChange) {
  let clonedServerChange = _.cloneDeep(serverChange);

  serverChange.action === 'create' && _.set(clonedServerChange, 'action', 'update');
  serverChange.action === 'import' && _.set(clonedServerChange, 'action', 'update');

  return {
    resolved: true,
    clientChanges: [],
    serverChanges: [clonedServerChange] };

}

/**
   * Creates user conflict resolution rows in case of conflicting keys
   * If there are no conflicting keys automatically resolves the changesets
   *
   * @param {String} model
   * @param {Object} clientChange
   * @param {Object} serverChange
   * @param {Object} [options]
   * @param {Object} [options.fieldsToPick] these keys are picked from the client and server change for resolution
   *
   * @returns {Object}
   */
function getUserResolutionForNonDeletedEntities(model, clientChange, serverChange, options) {
  let fieldsToPick = options && options.fieldsToPick;

  let localValue = _.get(clientChange, 'data.instance'),
  serverValue = _.get(serverChange, 'data.instance');

  if (!localValue || !serverValue) {
    return {
      resolved: true,
      serverChanges: [],
      clientChanges: [] };

  }

  // always change action to update
  clientChange.action = 'update';
  serverChange.action = 'update';

  localValue = fieldsToPick && _.pick(localValue, fieldsToPick);
  serverValue = fieldsToPick && _.pick(serverValue, fieldsToPick);

  let localUpdatedKeys = _.keys(localValue),
  serverUpdatedKeys = _.keys(serverValue),
  overlappingKeys = _.intersection(localUpdatedKeys, serverUpdatedKeys),
  conflictingKeys;

  conflictingKeys = _.filter(overlappingKeys, keyName => {
    let localKeyValue = _.get(localValue, keyName),
    serverKeyValue = _.get(serverValue, keyName);

    if (_.isEmpty(localKeyValue) && _.isEmpty(serverKeyValue)) {
      return false;
    }

    if (_.isEqual(localKeyValue, serverKeyValue)) {
      return false;
    }

    return true;
  });

  if (_.isEmpty(conflictingKeys)) {
    return {
      resolved: true,

      serverChanges: [serverChange],
      clientChanges: [] };

  }

  let conflictValues = _.map(conflictingKeys, key => {
    return {
      key,
      model: model,
      nameOrId: localValue && localValue.name || clientChange.modelId,
      localText: 'Updated to: ' + JSON.stringify(localValue[key]),
      serverText: 'Updated to: ' + JSON.stringify(serverValue[key]),
      localValue: localValue[key],
      serverValue: serverValue[key] };

  });

  return {
    resolved: false,

    serverChanges: serverChange,
    clientChanges: clientChange,

    userResolution: conflictValues };

}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = startUserConflictResolution;
/* harmony export (immutable) */ __webpack_exports__["b"] = submitUserResolution;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_AnalyticsService__ = __webpack_require__(20);



/**
                                                              *
                                                              */
function startUserConflictResolution(conflicts, timeline) {
  let conflictResolutionChannel = pm.eventBus.channel('conflict-resolution');

  conflictResolutionChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('show', 'conflicts', { conflicts, timeline }));

  // Add analytics event for tracking conflicts modal shown to user
  __WEBPACK_IMPORTED_MODULE_1__services_AnalyticsService__["a" /* default */].addEventV2({
    category: 'sync_failure',
    action: 'resolve_conflicts',
    label: 'conflicts',
    entityType: _.get(timeline, 'model'),
    entityId: _.get(timeline, 'modelId') });

}

function submitUserResolution(conflicts, timeline) {
  let conflictResolutionChannel = pm.eventBus.channel('conflict-resolution');

  conflictResolutionChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('submit', 'conflicts', { conflicts, timeline }));
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_sync_SyncManagerProxy__ = __webpack_require__(925);


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

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(5);




/**
                                                    * Handles the socket, and is the interface for sending and receiving changesets
                                                    *
                                                    * @class SyncManager
                                                    */
var SyncManagerProxy = __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.Model.extend({
  defaults: function () {
    return {
      loggedIn: false,
      nextReconnectTime: null,
      timeTillReconnect: null };

  },

  sendEventToSyncShared: function (event) {
    this.syncInternalChannel.publish(event);
  },

  attachInternalChannelSubscription: function () {
    this.syncManagerInternalDispose = this.syncInternalChannel.subscribe(event => {
      let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["g" /* getEventNamespace */])(event),
      eventName = Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["f" /* getEventName */])(event),
      eventData = Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["d" /* getEventData */])(event);

      if (eventNamespace === 'timeTillReconnect' && eventName === 'updated') {
        this.set('timeTillReconnect', eventData.timeTillReconnect);
        return;
      }

      if (eventNamespace === 'loggedIn' && eventName === 'updated') {
        this.set('loggedIn', eventData.loggedIn);
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
  },

  showConflicts: function (conflicts) {
    this.trigger('showConflicts', conflicts);
  },

  showSyncIssue: function (issue) {
    pm.mediator.trigger('showSyncIssue', issue);
  },

  syncIconClick: function () {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('syncIconClicked', 'command'));
  },

  restoreCollection: function (restoreTarget, cb) {
    let isSocketConnected = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('SyncStatusStore').isSocketConnected;
    if (!isSocketConnected) {
      pm.toasts.error('You need to be connected to Postman Sync to restore a collection.');
      _.isFunction(cb) && cb(new Error('No sync connection to restore collection'));
      return;
    }
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('restoreCollection', 'command', { restoreTarget: restoreTarget }));
    cb();
  },

  conflictsResolved: function (resolution) {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('conflictsResolved', 'command', { resolution: resolution }));
  },

  forceSync: function () {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('forceSync', 'command'));
  },

  forceSyncCollectionAndContinue: function (id) {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('forceSyncCollectionAndContinue', 'command', { collection: id }));
  },

  forceConnect: function () {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('forceConnect', 'command'));
  },

  fetchPendingConflicts: function () {
    this.sendEventToSyncShared(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('fetchPendingConflicts', 'command'));
  } });


/* harmony default export */ __webpack_exports__["a"] = (SyncManagerProxy);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_ConsoleInterface__ = __webpack_require__(927);


/**
                                                               * Boots up the console interface
                                                               * @param {Function} cb - The callback with error
                                                               */
function bootConsoleInterface(cb) {
  _.assign(window.pm, {
    console: new __WEBPACK_IMPORTED_MODULE_0__models_ConsoleInterface__["a" /* default */]() // @todo: Change to pm.console when we replace the current console
  });

  // Initialize the new console interface with current window information
  window.pm.console.initialize(pm && pm.window && pm.window.id).
  then(() => {
    pm.logger.info('NewConsole~boot - Success');

    return cb && cb();
  }).
  catch(err => {
    pm.logger.error('NewConsole~boot - Failed');

    return cb && cb(err);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (bootConsoleInterface);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleInterface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_pipelines_app_action__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_ConsoleEventSeverity__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_ConsoleEventTypes__ = __webpack_require__(266);


// @note: remove the below imports when removing the `clear` method. The console
// service should be responsible for interacting with the pipeline.
// see the comment for `clear` method for details





let

ConsoleInterface = class ConsoleInterface {





































  /**
                                            * Constructor
                                            */ /**
                                                * The ID of the window that is associated for an instance
                                                * @type {String}
                                                * @private
                                                */ /**
                                                    * The types of events that we're handling.
                                                    * @default
                                                    * @type {Set<String>}
                                                    * @private
                                                    */constructor() {this.initialized = false;this._eventTypes = new Set([__WEBPACK_IMPORTED_MODULE_4__constants_ConsoleEventTypes__["b" /* CONSOLE_EVENT_LOG */], __WEBPACK_IMPORTED_MODULE_4__constants_ConsoleEventTypes__["c" /* CONSOLE_EVENT_NETWORK */], __WEBPACK_IMPORTED_MODULE_4__constants_ConsoleEventTypes__["a" /* CONSOLE_EVENT_EXCEPTION */]]);this._timelineId = null;this._windowId = null;this._sequence = 0; // Initialize the sugar helper methods over write
    this.log = this.write.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_ConsoleEventSeverity__["CONSOLE_LEVEL_LOG"]);this.info = this.write.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_ConsoleEventSeverity__["CONSOLE_LEVEL_INFO"]);this.warn = this.write.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_ConsoleEventSeverity__["CONSOLE_LEVEL_WARN"]);this.error = this.write.bind(this, __WEBPACK_IMPORTED_MODULE_3__constants_ConsoleEventSeverity__["CONSOLE_LEVEL_ERROR"]);} /**
                                                                                                                                                                                                                               * Connect to the timeline and register event types
                                                                                                                                                                                                                               *
                                                                                                                                                                                                                               * @param {String} windowId - The window id for attaching to the console stream
                                                                                                                                                                                                                               * @return {Promise} - A promise that resolves if connected to a timeline successfully
                                                                                                                                                                                                                               */ /**
                                                                                                                                                                                                                                   * A counter maintained to establish strict order of logs
                                                                                                                                                                                                                                   * @type {number}
                                                                                                                                                                                                                                   * @private
                                                                                                                                                                                                                                   */ /**
                                                                                                                                                                                                                                       * The ID of the console stream (timeline) that we're connected to.
                                                                                                                                                                                                                                       * @type {String}
                                                                                                                                                                                                                                       */ /**
                                                                                                                                                                                                                                           * The state of the console interface. It is true if the console is attached to a timeline.
                                                                                                                                                                                                                                           * @default
                                                                                                                                                                                                                                           * @type {Boolean}
                                                                                                                                                                                                                                           */initialize(windowId) {if (this.initialized) {return Promise.reject(new Error('Console has already been initialized'));}if (!windowId || typeof windowId !== 'string') {return Promise.reject(new TypeError('Invalid value for argument `windowId`'));}this._windowId = windowId;this._timelineId = __WEBPACK_IMPORTED_MODULE_0_uuid___default.a.v4();
    this._sequence = 0;

    return Object(__WEBPACK_IMPORTED_MODULE_2__modules_pipelines_app_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('createTimeline', 'console', {
      id: this._timelineId,
      window: this._windowId })).

    then(result => {
      if (!result || result.status !== 'OK') {
        return Promise.reject(new Error('Could not create a timeline for the window'));
      }

      this.initialized = true;

      return Promise.resolve();
    });
  }

  /**
     * Check if we're handling the event that was sent
     *
     * @param {String} eventType - the event type to check
     * @return {Boolean} - true if we're handling the event type
     */
  canHandleEvent(eventType) {
    if (typeof eventType !== 'string') {
      return false;
    }

    return this._eventTypes.has(eventType);
  }

  /**
     * Writes a log to console
     *
     * @param {String} severity - One of several severity levels for the console message (defined in constants/ConsoleEventSeverity.js)
     * @param {String} eventType - One of the several available types for a console message. This must be one which was sent while instantiating the console
     * @param {Object} source - TBD
     * @param {Object} log - A detailed description for this log
     * @param {Number} [timestamp] - A timestamp to be used when logging this value
     */
  write(severity, eventType, source, log, timestamp = Date.now()) {
    if (!this.canHandleEvent(eventType)) {
      throw new Error('ConsoleInterface~write: Could not handle event type: ' + eventType);
    }

    if (!severity || typeof severity !== 'string') {
      return new Error('Invalid value for argument `severity`');
    }

    if (!source || typeof source !== 'object') {
      return new Error('Invalid value for argument `source`');
    }

    if (!log) {
      return new Error('Invalid value for argument `log`');
    }

    if (timestamp && (typeof timestamp !== 'number' || timestamp < 0)) {
      return new Error('Invalid value for argument `timestamp`');
    }

    if (!this.initialized) {
      pm.logger.warn('ConsoleInterface~write: Cannot write as interface has not been initialized');

      return;
    }

    return Object(__WEBPACK_IMPORTED_MODULE_2__modules_pipelines_app_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('createEvent', 'console', {
      id: __WEBPACK_IMPORTED_MODULE_0_uuid___default.a.v4(),
      timeline: this._timelineId,
      sequence: this._sequence++,
      timestamp: timestamp,
      type: eventType,
      severity: severity,
      source: source,
      details: log }));

  }

  /**
     * Clears console events from the persistence storage for all timelines.
     */
  clear() {
    if (!this.initialized) {
      pm.logger.warn('ConsoleInterface~clear: Cannot clear as interface has not been initialized');

      return;
    }

    // we're calling the dispatchAppAction directly to clear all console events
    // because:
    //   the clear event is supposed to be just like another event in a timeline
    //   to allow exporting timelines with info before the clear event was
    //   fired. Until the export capabilities are not added to the console, it's
    //   useless to keep the events in the storage which impacts performance.
    return Object(__WEBPACK_IMPORTED_MODULE_2__modules_pipelines_app_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('deleteEvents', 'console', { timeline: this._timelineId }));
  }

  /**
     * Disconnect from the console stream. Once this method is called, the window
     * will not be able to send any logs to this stream.
     */
  destroy() {
    if (!this.initialized) {
      pm.logger.warn('ConsoleInterface~destroy: Cannot destroy as interface has not been initialized');

      return;
    }

    this.initialized = false;

    return Object(__WEBPACK_IMPORTED_MODULE_2__modules_pipelines_app_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('deleteTimeline', 'console', { id: this._timelineId }));
  }};

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyListManager; });
const WHITELISTED_PROPS = ['disabled', 'httpProxy', 'httpsProxy', 'host', 'port',
'authenticate', 'username', 'password', 'bypass'];

/**
                                                    * Transform older proxy settings to newer version (globalProxies -> globalProxy).
                                                    *
                                                    * @param {Object[]} config
                                                    * @returns {Object}
                                                    */
function transformOlderSettings(config) {
  const defaultConfig = {
    disabled: true,
    httpProxy: true,
    httpsProxy: true,
    port: 8080 };


  if (!(Array.isArray(config) && config.length > 0)) {
    return defaultConfig;
  }

  config = config[0];

  if (!(config && config.host)) {
    return defaultConfig;
  }

  let pattern = String(_.get(config, 'match.pattern', '')),
  httpProxy = pattern.includes('http:') || pattern.includes('http+'),
  httpsProxy = pattern.includes('https');

  return {
    httpProxy: !httpProxy && !httpsProxy ? true : httpProxy, // unlikely but, set at-least HTTP proxy
    httpsProxy: httpsProxy,
    host: config.host,
    port: config.port,
    authenticate: config.authenticate,
    username: config.username,
    password: config.password,
    disabled: config.disabled };

}

/**
   * SDK compatible url mach for which the proxy has been associated with.
   *
   * @param {Boolean} httpProxy
   * @param {Boolean} httpsProxy
   * @returns {String}
   */
function getMatchPattern(httpProxy, httpsProxy) {
  const suffix = '://*:*/*';

  if (httpsProxy) {
    if (httpProxy) {
      return 'http+https' + suffix;
    }

    return 'https' + suffix;
  }

  return 'http' + suffix;
}

/**
   * Get bypass list for the proxy setting.
   *
   * @param {String} bypass
   * @returns {String[]}
   */
function getBypassList(bypass) {
  if (!(bypass && typeof bypass === 'string')) {return;}

  // split by ',' and '\n' and filter empty strings
  bypass = bypass.split(/,|\n/g).map(h => h.trim()).filter(Boolean);

  let host,
  i,
  ii = bypass.length,
  bypassList = new Array(ii);

  for (i = 0; i < ii; i++) {
    host = bypass[i];

    if (host.includes('://')) {// protocol is specified
      host = host.endsWith('/') ?
      host : // already a complete URL
      host + ':*/*'; // match all ports and paths
    } else
    {// just hostname
      host = `http+https://${host}:*/*`;
    }

    bypassList[i] = host;
  }

  return bypassList;
}let

ProxyListManager = class ProxyListManager {
  constructor() {
    this.globalProxy = this.getFromDB();
  }

  getFromDB() {
    let config = pm.settings.getSetting('ProxyListManager');

    !_.isObject(config) && (config = {});

    // migrate to newer global proxy configuration (< v7.9.0)
    // @note this migrate as well as set default config for newer versions
    if (!config.globalProxy) {
      config.globalProxy = transformOlderSettings(config.globalProxies);

      // update local storage to avoid this migration on every load
      this.saveToDB({ globalProxy: config.globalProxy });
    }

    return config.globalProxy;
  }

  saveToDB(config) {
    // bail out if not a valid config object (if present)
    if (config && !config.globalProxy) {
      return;
    }

    pm.settings.setSetting('ProxyListManager', config || { globalProxy: this.globalProxy });
  }

  update(config) {
    // bail out if not a valid config object
    if (!(config && config.globalProxy)) {
      return;
    }

    this.globalProxy = Object.assign(this.globalProxy, _.pick(config.globalProxy, WHITELISTED_PROPS));
  }

  /**
     * @returns {Object[]} - SDK compatible ProxyConfigList object
     */
  getGlobalProxyConfigList() {
    let globalProxy = this.globalProxy;

    return [{
      match: getMatchPattern(globalProxy.httpProxy, globalProxy.httpsProxy),
      host: globalProxy.host,
      port: globalProxy.port,
      authenticate: globalProxy.authenticate,
      username: globalProxy.username,
      password: globalProxy.password,
      disabled: globalProxy.disabled,
      bypass: getBypassList(globalProxy.bypass) }];

  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_backbone__);

const Certificate = __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.Model.extend({
  defaults: function () {
    return {
      host: '',
      pemPath: '',
      keyPath: '',
      pfxPath: '',
      passphrase: null,
      _pemData: null,
      _keyData: null };

  },

  resolve: function (cb) {
    if (this.get('_pemData') && this.get('_keyData')) {
      _.isFunction(cb) && cb();
      return;
    }

    const fs = __webpack_require__(32);
    fs.readFile(this.get('pemPath'), (err, _pemData) => {
      fs.readFile(this.get('keyPath'), (err, _keyData) => {
        fs.readFile(this.get('pfxPath'), (err, _pfxData) => {
          this.set({
            '_pemData': _pemData,
            '_keyData': _keyData,
            '_pfxData': _pfxData },
          { silent: true });

          _.isFunction(cb) && cb();
        });
      });
    });
  },

  toJSON: function () {
    return {
      host: this.get('host'),
      pemPath: this.get('pemPath'),
      keyPath: this.get('keyPath'),
      pfxPath: this.get('pfxPath'),
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
      pm.logger.error('Error loading certificates', e);
    }
  },

  saveCertificates: function () {
    let certificateStore = { certificates: this.toJSON() };

    try {
      let serialisedStore = JSON.stringify(certificateStore);
      pm.settings.setSetting('clientCertificates', serialisedStore);
    }
    catch (e) {
      pm.logger.error('Error saving certificates', e);
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
        pfx: certificate.get('_pfxData'),
        passphrase: certificate.get('passphrase'),
        pemPath: certificate.get('pemPath'),
        keyPath: certificate.get('keyPath'),
        pfxPath: certificate.get('pfxPath') });

    });
  },

  addCertificate(host, pemPath, keyPath, pfxPath, passphrase) {
    if (!host) {
      pm.logger.error('Error adding certificate', arguments);
      return;
    }

    let certificate = this.findCertificateByDomain(host);

    if (certificate) {
      this.updateCertificate(host, pemPath, keyPath, pfxPath, passphrase);
    } else
    {
      this.add({
        host: host,
        pemPath: pemPath,
        keyPath: keyPath,
        pfxPath: pfxPath,
        passphrase: passphrase });

    }

    this.saveCertificates();
    return true;
  },

  updateCertificate(host, pemPath, keyPath, pfxPath, passphrase) {
    let certificate = this.findCertificateByDomain(host);

    if (!certificate) {
      return false;
    }

    certificate.set({
      pemPath: pemPath,
      keyPath: keyPath,
      pfxPath: pfxPath,
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

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = initializeRollbackNotifications;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_EnvironmentController__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_HeaderPresetController__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_WorkspaceController__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_GlobalsController__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_HistoryController__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_HistoryResponseController__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_controllers_CollectionRunController__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_sync_helpers_sync_api__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__ = __webpack_require__(99);













let pendingNotifyChanges = [];

const controllerMap = {
  workspace: __WEBPACK_IMPORTED_MODULE_4__modules_controllers_WorkspaceController__["a" /* default */].get.bind(__WEBPACK_IMPORTED_MODULE_4__modules_controllers_WorkspaceController__["a" /* default */]),
  globals: __WEBPACK_IMPORTED_MODULE_5__modules_controllers_GlobalsController__["a" /* default */].get.bind(__WEBPACK_IMPORTED_MODULE_5__modules_controllers_GlobalsController__["a" /* default */]),
  environment: __WEBPACK_IMPORTED_MODULE_2__modules_controllers_EnvironmentController__["a" /* default */].get.bind(__WEBPACK_IMPORTED_MODULE_2__modules_controllers_EnvironmentController__["a" /* default */]),
  headerpreset: __WEBPACK_IMPORTED_MODULE_3__modules_controllers_HeaderPresetController__["a" /* default */].get.bind(__WEBPACK_IMPORTED_MODULE_3__modules_controllers_HeaderPresetController__["a" /* default */]),
  collection: __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getCollection.bind(__WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */]),
  folder: __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getFolder.bind(__WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */]),
  request: __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getRequest.bind(__WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */]),
  response: __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getResponse.bind(__WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */]),
  history: __WEBPACK_IMPORTED_MODULE_6__modules_controllers_HistoryController__["a" /* default */].get.bind(__WEBPACK_IMPORTED_MODULE_6__modules_controllers_HistoryController__["a" /* default */]),
  historyresponse: __WEBPACK_IMPORTED_MODULE_7__modules_controllers_HistoryResponseController__["a" /* default */].get.bind(__WEBPACK_IMPORTED_MODULE_7__modules_controllers_HistoryResponseController__["a" /* default */]),
  collectionrun: __WEBPACK_IMPORTED_MODULE_8__modules_controllers_CollectionRunController__["a" /* default */].get.bind(__WEBPACK_IMPORTED_MODULE_8__modules_controllers_CollectionRunController__["a" /* default */]) },

SUPPORTED_MODELS = _.keys(controllerMap),
SUPPORTED_ACTIONS = ['create', 'import', 'update', 'transfer', 'destroy'],
COLLECTION_CHILDREN_MODELS = ['folder', 'request', 'response'],
WS_DEPS_MODELS = new Set(['collection', 'environment', 'headerpreset']),
COLLECTION_OR_ENVIRONMENT = new Set(['collection', 'environment']),

TOAST_DEBOUNCE_TIME = 1000, // 1 sec
TOAST_MAX_DEBOUNCE = 60 * 1000, // 1 min
debouncedShowNotification = _.debounce(_showNotification, TOAST_DEBOUNCE_TIME, { 'maxWait': TOAST_MAX_DEBOUNCE }),
TOAST_TITLE_SUFFIX = 'changes could not be saved',
TOAST_MESSAGE = 'You don\'t seem to have the required permissions to perform these actions';

/**
                                                                                              * Rolls back the action performed by the changeset
                                                                                              * @param {Object} changeset
                                                                                              * @param {Function} callback
                                                                                              */
function rollbackWorker(changeset, callback = _.noop) {
  pm.logger.info(`DbRollbackService~rollbackWorker: rollingback ${changeset.model}:${changeset.action}`);

  let { model, action } = changeset;

  if (!_.includes(SUPPORTED_MODELS, model) || !_.includes(SUPPORTED_ACTIONS, action)) {
    pm.logger.warn('DbRollbackService~rollbackWorker: entity model/action not supported', { model, action });
    return callback();
  }

  __WEBPACK_IMPORTED_MODULE_9__modules_services_AnalyticsService__["a" /* default */].addEvent(model, 'rollback', action);

  Promise.resolve()

  // get the remote entity
  .then(() => {
    // For the actions where an entity was created, it won't exist on remote
    if (!_.includes(['import', 'create'], action)) {
      return _getEntityFromRemote(changeset);
    }
  })

  // perform the rollback
  .then(remoteEntitySyncMessage => {
    return _rollback(changeset, remoteEntitySyncMessage);
  })

  // log and call the callback
  .then(() => {
    pm.logger.info(`DbRollbackService~rollbackWorker: completed rollback for ${changeset.model}:${changeset.action}`);
    callback();
  })

  // on errors just log it and call the callback without error
  .catch(err => {
    pm.logger.error('DbRollbackService~rollbackWorker: error while processsing rollback', err);

    // Do not bubble the error up
    callback();
  });
}

/**
   * For a given changeset, returns the remote entity
   * For update/destroy operations: remote entity will be the same
   *     transfer operations: remote entity will be a common ancestor of the source and destination
   *     create operations: should not be called since it will not exist on remote (if called anyway, will return undefined)
   * @param {Object} changeset
   * @returns {Promise<Object>} Resolved value is the remote entity
   */
async function _getEntityFromRemote(changeset) {
  let { action } = changeset,
  data = changeset.data || {},
  entityModel,

  // Get the populated entity for actions: destroy and transfer
  populate = _.includes(['destroy', 'transfer'], action),
  query = {}, // will be using to pass `populate` & `owner` query params
  criteria = {};

  // For create operation, there cannot be an entity on remote
  if (action === 'create') {
    return;
  }

  populate && (query.populate = true);

  if (action === 'transfer') {
    let parent = await _getCommonAncestor(data.from, data.to);

    if (!parent) {
      return;
    }

    // for transfer changeset, the entity to fetch is the parent entity
    entityModel = parent.type;

    if (entityModel === 'collection') {
      let collection = await __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getCollection({ id: parent.id });

      if (!collection) {
        return;
      }

      criteria.id = _getEntityUid(collection);
    } else

    if (entityModel === 'folder') {
      let folder = await __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getFolder({ id: parent.id }),
      collection = folder && (await __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getCollection({ id: folder.collection }));

      if (!collection) {
        return;
      }

      criteria.id = parent.id;
      query.owner = collection.owner;
    }
  } else

  {
    entityModel = changeset.model;
    criteria = _getCriteriaFromChangeset(changeset);

    if (!criteria) {
      return;
    }

    // for collection and environment, the id should be uid
    if (entityModel === 'environment' || entityModel === 'collection') {
      let entityUid = data.owner && data.modelId && _getEntityUid(data);

      if (!entityUid) {
        let entity = await controllerMap[entityModel]({ id: criteria.id });
        entityUid = entity && _getEntityUid(entity);
      }

      if (!entityUid) {
        return;
      }

      criteria.id = entityUid;
    }

    // for request/folder/response either id should be UID or query should have owner as the parent collection ID
    // we are going with "adding the owner in query" approach
    else if (_.includes(COLLECTION_CHILDREN_MODELS, entityModel)) {
        let collectionId,
        collection;

        // when entity is deleted, first get the parent (can be request, folder or collection)
        if (action === 'destroy') {
          let parent = data.parent || {};

          if (parent.model === 'collection') {
            collectionId = parent.modelId;
          } else {// folder or request
            let requestOrFolder = await controllerMap[parent.model]({ id: parent.modelId });
            collectionId = requestOrFolder && requestOrFolder.collection;
          }
        }

        // otherwise get the entity first (request, response or folder) and get the collectionId from it
        else {
            let entity = await controllerMap[entityModel]({ id: criteria.id });
            collectionId = entity && entity.collection;
          }

        if (!collectionId) {
          return;
        }

        collection = await __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getCollection({ id: collectionId });

        if (!collection) {
          return;
        }

        query.owner = collection.owner;
      }
  }

  return new Promise(resolve => {
    __WEBPACK_IMPORTED_MODULE_10__modules_sync_helpers_sync_api__["b" /* findOne */](entityModel, criteria, query, (err, entitySyncMessageData, entitySyncMessage) => {
      err ? resolve() : resolve(entitySyncMessage);
    });
  });
}

/**
   * Returns the common ancestor for given two entities
   * @param {Object} entity1 has model and modelId
   * @param {Object} entity2 has model and modelId
   * @returns {Promise<Object>} resolved value has type and id
   */
async function _getCommonAncestor(entity1, entity2) {
  // if one of the two entities is collection, then that is the common ancestor
  if (entity1.model === 'collection') {
    return {
      type: 'collection',
      id: entity1.modelId };

  }

  if (entity2.model === 'collection') {
    return {
      type: 'collection',
      id: entity2.modelId };

  }

  // Both the entities are folder: a request/folder was moved from a folder to another folder
  // @TODO-rbac: for now we return the parent collection, but can be optimized to return the least common ancestor
  let folder = await __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getFolder({ id: entity1.modelId });

  return folder && {
    type: 'collection',
    id: folder.collection };

}

/**
   * Returns the criteria with which an entity can be queried from remote server (sync)
   * @param {Object} changeset
   * @returns {Object} criteria
   */
function _getCriteriaFromChangeset(changeset) {
  switch (changeset.action) {
    case 'import':
    case 'create':
      return; // for these actions no entity exists on remote

    case 'destroy':
      return {
        id: _.get(changeset, 'data.modelId') // @TODO-rbac fix this for history destroy where there are multiple items
      };

    case 'update':{
        // globals are fetched using the workspaceId
        if (changeset.model === 'globals') {
          return {
            workspace: _.get(changeset, 'data.instance.workspace') };

        }

        return {
          id: _.get(changeset, 'data.modelId') };

      }}


  pm.logger.warn('action not supported for getting entity id from changeset', changeset.action);
}

/**
   * Returns the UID for an environment or a collection
   * @param {Object} entity
   */
function _getEntityUid(entity = {}) {
  return `${entity.owner}-${entity.id || entity.modelId}`;
}

/**
   * Rollback the action performed by the changeset using the remote entity
   * @param {Object} changeset
   * @param {Object} remoteEntitySyncMessage
   */
async function _rollback(changeset, remoteEntitySyncMessage) {
  let { model, action } = changeset,
  data = changeset.data || {};

  // If the entity does not exist on remote for the actions that needs it for reverting, bail out
  // All actions expect where an entity was created needs the remote entity to revert
  if (!_.includes(['create', 'import'], action) && !remoteEntitySyncMessage) {
    pm.logger.warn(`DbRollbackService~_rollback: could not rollback ${model}:${action} since entity does not exist on remote`);
    return;
  }

  switch (action) {

    // if creating an entity failed, just delete it locally
    case 'create':
    case 'import':{
        let entityDestroyChangeset = Object.assign({}, changeset, { action: _getActionForDestroy(model) });

        pm.logger.info('DbRollbackService~_rollback: rolling back an import by deleting the entity');

        await Object(__WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(entityDestroyChangeset);
        _queueNotification(model, data.instance, action);
        break;
      }

    // if updating an entity failed, update the skeleton locally
    case 'update':{
        _.set(remoteEntitySyncMessage, ['meta', 'action'], 'update');
        let remoteEntityChangeset = Object(__WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__["a" /* buildChangesetFromMessage */])(remoteEntitySyncMessage);

        pm.logger.info('DbRollbackService~_rollback: rolling back an update by updating the entity');

        await Object(__WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(remoteEntityChangeset);
        _queueNotification(model, _.assign({ id: data.modelId }, data.instance), action);
        break;
      }

    // if deleting an entity failed, import it back
    case 'destroy':
    case 'delete':{
        let metaAction = _getActionForImport(model),
        remoteEntityChangeset;

        _.set(remoteEntitySyncMessage, ['meta', 'action'], metaAction);
        remoteEntityChangeset = Object(__WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__["a" /* buildChangesetFromMessage */])(remoteEntitySyncMessage);

        pm.logger.info('DbRollbackService~_rollback: rolling back an destroy by #1 importing the entity');

        // import the entity
        await Object(__WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(remoteEntityChangeset);

        // update the workspace dependencies: it was removed from all workspaces during the action we are rolling back
        if (WS_DEPS_MODELS.has(remoteEntitySyncMessage.meta.model)) {
          let uId = _getEntityUid(remoteEntitySyncMessage.data),
          model = _.get(remoteEntitySyncMessage, 'meta.model');

          pm.logger.info('DbRollbackService~_rollback: rolling back an destroy by #2 updating the ws dependencies', model, uId);
          await _rollbackWorkspaceDependency(model, uId);
        }

        _queueNotification(model, { id: data.modelId }, action);
        break;
      }

    // for transfer changeset, we need to drop and import the common ancestor
    case 'transfer':{
        let entityDestroySyncMessage = {
          model: remoteEntitySyncMessage.meta.model,
          model_id: remoteEntitySyncMessage.model_id,
          action: _getActionForDestroy(model) },

        entityDestroyChangeset = Object(__WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__["a" /* buildChangesetFromMessage */])(entityDestroySyncMessage),
        entityImportChangeset;


        // delete the common ancestor
        pm.logger.info('DbRollbackService~_rollback: rolling back a transfer by #1 deleting the common ancestor', entityDestroySyncMessage);
        await Object(__WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(entityDestroyChangeset);

        // import the common ancestor back
        pm.logger.info('DbRollbackService~_rollback: rolling back a transfer by #2 importing the common ancestor');
        _.set(remoteEntitySyncMessage, ['meta', 'action'], _getActionForImport(model));
        entityImportChangeset = Object(__WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__["a" /* buildChangesetFromMessage */])(remoteEntitySyncMessage);
        await Object(__WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(entityImportChangeset);

        // update the workspace dependencies: during the delete operation as part of rollback, this was removed from all workspaces
        if (WS_DEPS_MODELS.has(remoteEntitySyncMessage.meta.model)) {
          let uId = _getEntityUid(remoteEntitySyncMessage.data),
          model = _.get(remoteEntitySyncMessage, 'meta.model');

          pm.logger.info('DbRollbackService~_rollback: rolling back a transfer by #3 updating the ws dependencies', model, uId);

          await _rollbackWorkspaceDependency(model, uId);
        }

        _queueNotification(model, { id: data.modelId }, action);
        break;
      }}

}

/**
   * Returns the action to be used to create sync changeset for deleting an entity
   * @param {String} model
   */
function _getActionForDestroy(model) {
  return COLLECTION_OR_ENVIRONMENT.has(model) ? 'unsubscribe' : 'destroy';
}

/**
   * Returns the action to be used to create sync changeset for importing an entity
   * @param {String} model
   */
function _getActionForImport(model) {
  return COLLECTION_OR_ENVIRONMENT.has(model) ? 'subscribe' : 'import';
}

/**
   * Will update all the workspaces' dependencies for a given collection/environment
   * @param {String} type collection or environment
   * @param {String} uId
   */
async function _rollbackWorkspaceDependency(type, uId) {
  let remoteWorkspaceMessages = await new Promise(resolve => {
    __WEBPACK_IMPORTED_MODULE_10__modules_sync_helpers_sync_api__["a" /* find */]('workspace', { dependencies: true }, (err, data) => {
      err ? resolve([]) : resolve(data);
    });
  }),
  localWorkspacesById = _.keyBy((await __WEBPACK_IMPORTED_MODULE_4__modules_controllers_WorkspaceController__["a" /* default */].getAll()), 'id'),
  wsUpdateChangesets = [];

  // Generate the sync messages
  _.each(remoteWorkspaceMessages, remoteWorkspaceMessage => {
    let wsId = remoteWorkspaceMessage.data.id,
    localWorkspace = localWorkspacesById[wsId],
    remoteWsDeps = _.get(remoteWorkspaceMessage, ['data', 'dependencies', type + 's']),
    localWsDeps = _.get(localWorkspace, ['dependencies', type + 's']),
    wsUpdateChangeset;

    // if the dependency exists on remote but not on local, update the workspace
    if (_.includes(remoteWsDeps, uId) && !_.includes(localWsDeps, uId)) {
      _.set(remoteWorkspaceMessage, ['meta', 'action'], 'update');
      wsUpdateChangeset = Object(__WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__["a" /* buildChangesetFromMessage */])(remoteWorkspaceMessage);
      wsUpdateChangesets.push(wsUpdateChangeset);
    }
  });

  console.log('DbRollbackService~_rollbackWorkspaceDependency: ws dependencies update changesets', wsUpdateChangesets);

  // Apply the sync messages in parallel
  return Promise.all(_.map(wsUpdateChangesets, wsUpdateChangeset => {
    return Object(__WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(wsUpdateChangeset);
  })).
  catch(err => {
    pm.logger.error('DbRollbackService~_rollbackWorkspaceDependency: error while updating workspace dependencies during rollback', err);
  });
}

function _getRollbackNotificationChannel() {
  return pm.eventBus.channel('rollback-notifications');
}

/**
   * Queues a rollback notification
   * Notifications are collated together based on time and then flushed
   * @param {String} model
   * @param {Object} entity
   * @param {String} action
   */
function _queueNotification(model, entity, action) {
  let rollbackChannel = _getRollbackNotificationChannel();

  rollbackChannel.publish({ model, entity, action });
}

/**
   * Subscribes to a channel to get the rollback notifications
   * It will collate then collate those notifications and flush them later
   */
function initializeRollbackNotifications() {
  let rollbackChannel = _getRollbackNotificationChannel();

  rollbackChannel.subscribe((message = {}) => {
    let { model, entity, action } = message;

    if (!model || !action) {
      return;
    }

    pendingNotifyChanges.push({ model, entity, action });
    debouncedShowNotification();
  });
}

/**
   * Shows the notification for all the collated actions
   */
function _showNotification() {
  if (_.isEmpty(pendingNotifyChanges)) {
    return;
  }

  pm.toasts.error(TOAST_MESSAGE, {
    persist: false,
    title: `${pendingNotifyChanges.length} ${TOAST_TITLE_SUFFIX}`

    // @TODO-rbac: Implement this
    // primaryAction: {
    //  label: 'See details',
    //  onClick: _handleNotificationClickDetails.bind(null, pendingNotifyChanges)
    // }
  });

  __WEBPACK_IMPORTED_MODULE_9__modules_services_AnalyticsService__["a" /* default */].addEvent('rollback', 'view_toast', _.toString(_.size(pendingNotifyChanges)));

  pendingNotifyChanges = [];
}

const rollbackQueue = __WEBPACK_IMPORTED_MODULE_0_async___default.a.queue(rollbackWorker, 1);
/* harmony export (immutable) */ __webpack_exports__["b"] = rollbackQueue;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = extractMetaAsChangesets;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_changeset__ = __webpack_require__(62);


/**
                                                   * Constructs archive changeset
                                                   *
                                                   * @param {Object} changeset
                                                   *
                                                   * @returns {Array.<Object>}
                                                   */
function constructArchiveChangeset(changeset) {
  // this should not happen, but if archive changeset has archive meta
  // makes sure there is no infinite loop
  if (changeset.action === 'archive') {
    return [];
  }

  if (!changeset.data) {
    return;
  }

  return [Object(__WEBPACK_IMPORTED_MODULE_0__create_changeset__["a" /* default */])(changeset.model, 'archive', { modelId: changeset.data.modelId, owner: changeset.data.owner })];
}

/**
   * Constructs fork changeset
   *
   * @param {Object} changeset
   *
   * @returns {Array.<Object>}
   */
function constructForkChangeset(changeset) {
  // this should not happen, but if fork changeset has fork meta
  // makes sure there is no infinite loop
  if (changeset.action === 'fork') {
    return [];
  }

  if (!changeset.data) {
    return;
  }

  return [Object(__WEBPACK_IMPORTED_MODULE_0__create_changeset__["a" /* default */])(changeset.model, 'fork', { modelId: changeset.data.modelId, owner: changeset.data.owner, forkedFrom: changeset.meta.forkedFrom })];
}

/**
   * Constructs a favorite changeset from `favorite` meta property.
   *
   * @param {Object} changeset
   *
   * @returns {Array.<Object>}
   *
   */
function constructFavoriteChangeset(changeset) {
  // bail out for favorite changesets
  if (changeset.action === 'favorite' || changeset.action === 'unfavorite') {
    return [];
  }

  if (!changeset.data) {
    return;
  }

  if (changeset.meta.favorite) {
    return [Object(__WEBPACK_IMPORTED_MODULE_0__create_changeset__["a" /* default */])(changeset.model, 'favorite', { modelId: changeset.data.modelId, owner: changeset.data.owner })];
  }

  return [Object(__WEBPACK_IMPORTED_MODULE_0__create_changeset__["a" /* default */])(changeset.model, 'unfavorite', { modelId: changeset.data.modelId, owner: changeset.data.owner })];
}

/**
   * Creates an update changeset with permissions from `permissions` meta property.
   *
   * @param {Object} changeset
   *
   * @returns {Array.<Object>}
   *
   */
function constructPermissionsUpdateChangeset(changeset) {
  if (!changeset.data) {
    return;
  }

  // compute updated instance with `permissions`
  // need to keep the rest of the instance as well, the rest of the system assumes
  // payload for update is the full snapshot
  // @TODO-permissions
  let instance = _.defaults({ permissions: changeset.meta.permissions }, changeset.data.instance);

  return [Object(__WEBPACK_IMPORTED_MODULE_0__create_changeset__["a" /* default */])(changeset.model, 'update', { modelId: changeset.data.modelId, owner: changeset.data.owner, instance: instance })];
}

/**
   * Extract meta properties as their own changeset.
   *
   * @param {Object} changeset
   *
   * @returns {Array.<Object>}
   */
function extractMetaAsChangesets(changeset) {
  if (!(changeset && changeset.meta)) {
    return [];
  }

  // process meta only for `import`, `create`, `update` or `subscribe`
  if (!(changeset.action === 'import' || changeset.action === 'create' || changeset.action === 'update' || changeset.action === 'subscribe')) {
    return [];
  }

  // do not extract meta changeset for meta changesets created by app
  // this will make sure we don't enter loops
  if (changeset.meta.changesetType === 'meta') {
    return [];
  }

  let metaChangesets = [];

  // this might not look very elegant or scalable
  // but has better performance
  // do not try to make this clean by iterating over `changeset.meta`
  // that will iterate over all keys on meta for every changeset
  // the probability of finding a valid `meta` property is very low compared to not finding one
  if (_.has(changeset.meta, 'archived')) {
    metaChangesets = _.concat(metaChangesets, constructArchiveChangeset(changeset));

    // remove the `archived` meta property now that it's handled
    delete changeset.meta.archived;
  }

  if (_.has(changeset.meta, 'forkedFrom')) {
    metaChangesets = _.concat(metaChangesets, constructForkChangeset(changeset));

    // remove the `forkedFrom` meta property now that it's handled
    delete changeset.meta.forkedFrom;
  }

  if (_.has(changeset.meta, 'favorite')) {
    metaChangesets = _.concat(metaChangesets, constructFavoriteChangeset(changeset));

    // remove the `favorite` meta property now that it's handled
    delete changeset.meta.favorite;
  }

  if (_.has(changeset.meta, 'permissions')) {
    metaChangesets = _.concat(metaChangesets, constructPermissionsUpdateChangeset(changeset));

    // remove the `permissions` meta property now that it's handled
    // @TODO-permissions
    delete changeset.meta.permissions;
  }

  // mark the locally created changeset as a meta type changeset
  // this should be used to prevent meta changesets creating more meta changesets and leading to infinite loops
  _.forEach(metaChangesets, changeset => {
    _.set(changeset, ['meta', 'changesetType'], 'meta');
  });

  return _.compact(metaChangesets);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collection__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workspace__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(965);





/* harmony default export */ __webpack_exports__["a"] = ({
  user: __WEBPACK_IMPORTED_MODULE_0__user__["a" /* UserTimeline */],
  collection: __WEBPACK_IMPORTED_MODULE_1__collection__["a" /* CollectionTimeline */],
  workspace: __WEBPACK_IMPORTED_MODULE_2__workspace__["a" /* WorkspaceTimeline */],
  environment: __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* EnvironmentTimeline */] });

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTimeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_timeline_helpers_BaseSyncTimeline__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_SyncService__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_WorkspaceController__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sync_helpers_create_changeset__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_sync_services_SyncIncomingHandler__ = __webpack_require__(99);






let UserTimeline = class UserTimeline extends __WEBPACK_IMPORTED_MODULE_0__sync_timeline_helpers_BaseSyncTimeline__["a" /* BaseSyncTimeline */] {
  constructor(timelineId) {
    super(timelineId, { isOmnipresent: true });
  }

  filterClientChanges(message) {
    if (!message) {
      return false;
    }

    if (!message.meta || !message.meta.timeline) {
      return true;
    }

    return message.meta.timeline.model === this.model && message.meta.timeline.model_id === this.modelId;
  }

  /**
     * Integrity checks for user timeline.
     *
     * Creates missing workspaces in App.
     */
  repairIntegrity() {
    // fetch list of workspaces joined and create then locally.
    // we are fetching this list on bootstrap because these events may be missed in the old app

    let userId = this.modelId;

    return __WEBPACK_IMPORTED_MODULE_1__services_SyncService__["c" /* promisifiedRequest */]({
      model: 'workspace',
      action: 'find',
      meta: {
        query: {
          dependencies: true,
          members: true } } }).



    then(resData => {
      if (!resData || resData.error) {
        throw new Error(resData ? resData.error : 'Could not get workspaces from sync');
      }

      return resData;
    }).
    then(workspaces => {
      return Promise.all(_.map(workspaces, workspace => {
        return __WEBPACK_IMPORTED_MODULE_2__controllers_WorkspaceController__["a" /* default */].get({ id: workspace.model_id }).
        then(localWorkspace => {
          return {
            local: localWorkspace,
            remote: workspace.data };

        });
      }));
    }).
    then(fetchedWorkspaces => {
      return _.map(fetchedWorkspaces, fetchedWorkspace => {
        // if user is a member of the workspace and the workspace is missing locally, create it
        // do not attempt to join it, syncing might skip the create changeset
        // just create the workspace, the other parts of it will be pulled by workspace integrity check
        if (_.get(fetchedWorkspace.remote, ['members', 'users', userId]) && !fetchedWorkspace.local) {
          return Object(__WEBPACK_IMPORTED_MODULE_3__sync_helpers_create_changeset__["a" /* default */])('workspace', 'create', { instance: fetchedWorkspace.remote, modelId: fetchedWorkspace.remote.id });
        }
      });
    }).
    then(updates => {
      updates = _.compact(updates);

      return Promise.all(_.map(updates, changeset => {
        return Object(__WEBPACK_IMPORTED_MODULE_4__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(changeset);
      }));
    });
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSyncState;
/* harmony export (immutable) */ __webpack_exports__["b"] = setSyncState;
/* harmony export (immutable) */ __webpack_exports__["c"] = wipeSyncState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_SyncStateController__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipelines_sync_action__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_event__ = __webpack_require__(2);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



const CREATE_OR_UPDATE_ACTION = 'createOrUpdate',
DELETE_ACTION = 'delete',
MODEL_SYNC_CLIENT = 'syncclient';

/**
                                   * Returns the sync state for a timeline.
                                   *
                                   * The sync state includes
                                   * 1. revision - the last revision id synced in this timeline
                                   * 2. timestamp
                                   *
                                   * @param {Object} timelineId
                                   * @param {String} timelineId.model
                                   * @param {String} timelineId.modelId
                                   *
                                   * @returns {Promise.<Object>}
                                   */
function getSyncState(timelineId) {
  if (!timelineId || !timelineId.model || !timelineId.modelId) {
    return Promise.reject(new Error('SyncStateService~getSyncState: Could not get sync state. Invalid params.'));
  }

  let syncStateId = `${timelineId.model}:${timelineId.modelId}`;

  return __WEBPACK_IMPORTED_MODULE_0__controllers_SyncStateController__["a" /* default */].get({ id: syncStateId });
}

/**
   * Updates the sync state for a timeline.
   *
   * @param {Object} timelineId
   * @param {String} timelineId.model
   * @param {String} timelineId.modelId
   * @param {Object} state
   *
   * @returns {Promise.<Object>}
   */
function setSyncState(timelineId, state) {
  if (!timelineId || !timelineId.model || !timelineId.modelId || !state) {
    return Promise.reject(new Error('SyncStateService~setSyncState: Could not set sync state. Invalid params.'));
  }

  let syncStateId = `${timelineId.model}:${timelineId.modelId}`;

  return Object(__WEBPACK_IMPORTED_MODULE_1__pipelines_sync_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])(CREATE_OR_UPDATE_ACTION, MODEL_SYNC_CLIENT, _extends({ id: syncStateId }, state)));
}

/**
   * Deletes the sync state for a timeline.
   *
   * @param {Object} timelineId
   * @param {String} timelineId.model
   * @param {String} timelineId.modelId
   *
   * @returns {Promise.<Object>}
   */
function wipeSyncState(timelineId) {
  if (!timelineId || !timelineId.model || !timelineId.modelId) {
    return Promise.reject(new Error('SyncStateService~wipeSyncState: Could not wipe sync state. Invalid params.'));
  }

  let syncStateId = `${timelineId.model}:${timelineId.modelId}`;

  return Object(__WEBPACK_IMPORTED_MODULE_1__pipelines_sync_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])(DELETE_ACTION, MODEL_SYNC_CLIENT, { id: syncStateId }));
}

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workspace__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__headerpreset__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__historyresponse__ = __webpack_require__(943);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__collectionrun__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environment__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__request__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__response__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__folder__ = __webpack_require__(948);












/* harmony default export */ __webpack_exports__["a"] = ({
  collection: __WEBPACK_IMPORTED_MODULE_0__collection__["a" /* default */],
  workspace: __WEBPACK_IMPORTED_MODULE_1__workspace__["a" /* default */],
  globals: __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* default */],
  headerpreset: __WEBPACK_IMPORTED_MODULE_3__headerpreset__["a" /* default */],
  history: __WEBPACK_IMPORTED_MODULE_4__history__["a" /* default */],
  historyresponse: __WEBPACK_IMPORTED_MODULE_5__historyresponse__["a" /* default */],
  collectionrun: __WEBPACK_IMPORTED_MODULE_6__collectionrun__["a" /* default */],
  environment: __WEBPACK_IMPORTED_MODULE_7__environment__["a" /* default */],
  request: __WEBPACK_IMPORTED_MODULE_8__request__["a" /* default */],
  response: __WEBPACK_IMPORTED_MODULE_9__response__["a" /* default */],
  folder: __WEBPACK_IMPORTED_MODULE_10__folder__["a" /* default */] });

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conflict_helpers__ = __webpack_require__(73);

const FIELDS_TO_PICK = ['name', 'description', 'auth', 'events', 'variables'];

/* harmony default export */ __webpack_exports__["a"] = ({
  'create:create'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('collection', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'create:update'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('collection', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'update:update'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('collection', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  } });

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_workspace_helper__ = __webpack_require__(939);


/**
                                                                              * Auto resolution for workspace level conflicts, handles dependencies.
                                                                              *
                                                                              * Auto resolution is done merging client dependency mapping with server dependency mapping.
                                                                              *
                                                                              * Client dependency updates are in the form of delta - { $diff: true, $add: [], $remove: [] }
                                                                              * Server dependency is a snapshot of the latest value
                                                                              *
                                                                              * To resolve the conflict,
                                                                              * 1. App has to apply the delta on top of server values
                                                                              * 2. Use the applied value as the new snapshot locally
                                                                              * 3. Send the diff to server - don't send the new snapshot - we don't want to accidentally remove stuff on server
                                                                              *
                                                                              * @param  {Object} clientChange
                                                                              * @param  {Object} serverChange
                                                                              *
                                                                              * @returns {Object}
                                                                              */
function autoResolveWorkspaceConflicts(clientChange, serverChange) {
  let clonedServerChange = _.cloneDeep(serverChange);

  if (_.has(clientChange, 'data.instance.dependencies')) {
    let clientDepsDiff = _.get(clientChange, 'data.instance.dependencies'),
    serverDepsSnapshot = _.get(serverChange, 'data.instance.dependencies'),
    modifiedServerDeps = Object(__WEBPACK_IMPORTED_MODULE_0__utils_workspace_helper__["a" /* applyWorkspaceDependencyDiff */])(serverDepsSnapshot, clientDepsDiff);

    _.set(clonedServerChange, 'data.instance.dependencies', modifiedServerDeps);
    _.set(clonedServerChange, 'action', 'update');
  }

  return {
    resolved: true,

    serverChanges: [clonedServerChange],
    clientChanges: [] };

}

/* harmony default export */ __webpack_exports__["a"] = ({
  'import:update'(clientChange, serverChange) {
    return autoResolveWorkspaceConflicts(clientChange, serverChange);
  },
  'create:update'(clientChange, serverChange) {
    return autoResolveWorkspaceConflicts(clientChange, serverChange);
  },
  'update:update'(clientChange, serverChange) {
    return autoResolveWorkspaceConflicts(clientChange, serverChange);
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = applyWorkspaceDependencyDiff;
const ALLOWED_DEPENDENCIES = [
'collections',
'environments',
'headerpresets',
'mocks',
'monitors'];



/**
              * apply workspace deps diff on a snapshot
              *
              * @export
              * @param {any} wsDepsSnapshot
              * @param {any} wsDepsDiff
              * @returns
              */
function applyWorkspaceDependencyDiff(wsDepsSnapshot, wsDepsDiff) {
  if (!wsDepsSnapshot) {
    return;
  }

  if (!wsDepsDiff) {
    return wsDepsSnapshot;
  }

  // clone and initialize finalDepsSnapshot with initial snapshot
  let finalDepsSnapshot = _.cloneDeep(wsDepsSnapshot);

  _.forEach(ALLOWED_DEPENDENCIES, dependency => {

    // --- DIFF VALIDATION ---

    // early return if this dependency doesn't have $diff set
    if (_.get(wsDepsDiff, [dependency, '$diff']) !== true) {
      return;
    }

    let $add = _.get(wsDepsDiff, [dependency, '$add']),
    $remove = _.get(wsDepsDiff, [dependency, '$remove']);

    // early return if this dependency diff has $add/$remove but which is not an array
    if ($add && !_.isArray($add) || $remove && !_.isArray($remove)) {
      return;
    }

    // --- END OF DIFF VALIDATION ---

    // if snapshot doesn't have a dependency, initialise it to empty array in final snapshot
    let finalDepValue = _.has(wsDepsSnapshot, dependency) ? _.compact(finalDepsSnapshot[dependency]) : [];

    // get the $add and remove for this dependency
    let entitiesToBeAdded = _.get(wsDepsDiff, [dependency, '$add'], []),
    entitiesToBeRemoved = _.get(wsDepsDiff, [dependency, '$remove'], []);

    // apply the adds via a union
    finalDepValue = _.union(finalDepValue, _.compact(entitiesToBeAdded));

    // apply the removes via a difference
    finalDepValue = _.difference(finalDepValue, _.compact(entitiesToBeRemoved));

    finalDepsSnapshot[dependency] = finalDepValue;
  });

  return finalDepsSnapshot;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conflict_helpers__ = __webpack_require__(73);


/* harmony default export */ __webpack_exports__["a"] = ({
  'update:update'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["a" /* applyServerChangesForConflictResolution */])(clientChange, serverChange);
  } });

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conflict_helpers__ = __webpack_require__(73);


/* harmony default export */ __webpack_exports__["a"] = ({
  'update:update'(clientChange, serverChange) {
    return {
      resolved: true,
      serverChanges: [serverChange],
      clientChanges: [] };

  },
  'update:destroy'(clientChange, serverChange) {
    let clonedServerChange = _.cloneDeep(serverChange);

    if (clientChange.action === 'destroy') {
      _.set(clonedServerChange, 'action', 'create');
    }

    return {
      resolved: true,
      serverChanges: [clonedServerChange],
      clientChanges: [] };

  },
  'destroy:destroy'() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["b" /* dropChanges */])();
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conflict_helpers__ = __webpack_require__(73);


/* harmony default export */ __webpack_exports__["a"] = ({
  '*'() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["b" /* dropChanges */])();
  } });

/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conflict_helpers__ = __webpack_require__(73);


/* harmony default export */ __webpack_exports__["a"] = ({
  '*'() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["b" /* dropChanges */])();
  } });

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conflict_helpers__ = __webpack_require__(73);


/* harmony default export */ __webpack_exports__["a"] = ({
  '*'() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["b" /* dropChanges */])();
  } });

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conflict_helpers__ = __webpack_require__(73);

const FIELDS_TO_PICK = ['name', 'values'];

/* harmony default export */ __webpack_exports__["a"] = ({
  'import:import'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('environment', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'import:create'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('environment', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'import:update'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('environment', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'import:destroy'(clientChange, serverChange) {
    if (clientChange.action === 'import') {
      return {
        resolved: true,
        clientChanges: [clientChange],
        serverChanges: [] };

    }

    if (serverChange.action === 'import') {
      return {
        resolved: true,
        clientChanges: [],
        serverChanges: [serverChange] };

    }
  },
  'create:create'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('environment', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'create:update'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('environment', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'create:destroy'(clientChange, serverChange) {
    if (clientChange.action === 'create') {
      return {
        resolved: true,
        clientChanges: [clientChange],
        serverChanges: [] };

    }

    if (serverChange.action === 'create') {
      return {
        resolved: true,
        clientChanges: [],
        serverChanges: [serverChange] };

    }
  },
  'update:update'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('environment', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  } });

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conflict_helpers__ = __webpack_require__(73);

const FIELDS_TO_PICK = ['name', 'description', 'auth', 'events', 'url', 'data', 'dataMode', 'dataOptions',
'rawModeData', 'graphqlModeData', 'headerData', 'method', 'pathVariableData', 'queryParams'];

/* harmony default export */ __webpack_exports__["a"] = ({
  'update:update'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('request', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'create:create'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('request', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'create:update'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('request', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'destroy:destroy'() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["b" /* dropChanges */])();
  },
  'transfer:transfer'(clientChange, serverChange) {
    return {
      resolved: true,
      serverChanges: [serverChange],
      clientChanges: [] };

  } });

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conflict_helpers__ = __webpack_require__(73);

const FIELDS_TO_PICK = ['name', 'status', 'mime', 'language', 'text', 'responseCode', 'requestObject', 'headers', 'cookies'];

/* harmony default export */ __webpack_exports__["a"] = ({
  'update:update'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('response', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'create:create'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('response', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'create:update'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('response', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'destroy:destroy'() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["b" /* dropChanges */])();
  } });

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conflict_helpers__ = __webpack_require__(73);


const FIELDS_TO_PICK = ['name', 'description', 'auth', 'events'];

/* harmony default export */ __webpack_exports__["a"] = ({
  'create:create'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('folder', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'create:update'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('folder', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'update:update'(clientChange, serverChange) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["c" /* getUserResolutionForNonDeletedEntities */])('folder', clientChange, serverChange, { fieldsToPick: FIELDS_TO_PICK });
  },
  'destroy:update'(clientChange, serverChange) {
    let clonedServerChanges = _.cloneDeep(serverChange);

    if (serverChange.action === 'update') {
      _.set(clonedServerChanges, 'action', 'create');
    }

    return {
      resolved: true,
      serverChanges: [clonedServerChanges],
      clientChanges: [] };

  },
  'destroy:destroy'() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conflict_helpers__["b" /* dropChanges */])();
  },
  'transfer:transfer'(clientChange, serverChange) {
    return {
      resolved: true,
      serverChanges: [serverChange],
      clientChanges: [] };

  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_UserController__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sync_helpers_create_changeset__ = __webpack_require__(62);





const EVENT_UPDATE = 'update',

ACTION_DESTROY = 'destroy',

MODEL_WORKSPACE = 'workspace',

// @todo: using this instead of defaultOfflineWorkspaceId because, the convertors are synchronous
OFFLINE_WORKSPACE = '29ba1c6f-43ab-4e23-8a6c-27c39a57a069',

pluralMap = {
  collection: 'collections',
  environment: 'environments',
  headerpreset: 'headerpresets',
  mock: 'mocks',
  monitor: 'monitors' };


/* harmony default export */ __webpack_exports__["default"] = ({
  toChangesets: {
    created() {

      // Workspace creates are handled as an online action.
      return [];
    },
    updated(event) {
      if (_.get(event, ['data', 'id']) === OFFLINE_WORKSPACE) {
        return [];
      }

      return __WEBPACK_IMPORTED_MODULE_0__default__["default"].toChangesets.updated(...arguments);
    },
    deleted() {

      // Workspace deletes are handled as an online action.
      return [];
    },
    added_dependencies(event, rootEvent) {
      // adding dependencies to a workspace on item creates is implied on Sync
      // we do need it for conflict resolution
      let changesetMeta;

      if (Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["f" /* getEventName */])(rootEvent) === 'create' || Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["f" /* getEventName */])(rootEvent) === 'create_deep' || Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["f" /* getEventName */])(rootEvent) === 'duplicate') {
        changesetMeta = { sideEffect: true };
      }

      if (_.get(event, ['data', 'id']) === OFFLINE_WORKSPACE) {
        return [];
      }

      let eventData = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["d" /* getEventData */])(event),
      workspace = eventData.workspace,
      diffPerDep = {},
      diff;

      _.forEach(eventData.dependencies, dependency => {
        let additions = _.get(diffPerDep, [dependency.model], []);

        additions.push(dependency.modelId);

        _.set(diffPerDep, [dependency.model], additions);
      });

      diff = _.map(diffPerDep, (value, key) => {
        return {
          $path: ['dependencies', pluralMap[key]],
          $add: value };

      });

      return Object(__WEBPACK_IMPORTED_MODULE_3__sync_helpers_create_changeset__["a" /* default */])(MODEL_WORKSPACE, EVENT_UPDATE, {
        modelId: workspace.id,
        diff: diff },
      changesetMeta);
    },
    removed_dependencies(event, rootEvent) {
      // removing dependencies from a workspace on item deletes is implied on Sync
      // we do need it for conflict resolution
      let changesetMeta;
      if (Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["f" /* getEventName */])(rootEvent) === 'delete' || Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["f" /* getEventName */])(rootEvent) === 'deleteDeep') {
        changesetMeta = {};
        changesetMeta.sideEffect = true;
      }

      if (_.get(event, ['data', 'id']) === OFFLINE_WORKSPACE) {
        return [];
      }

      let eventData = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["d" /* getEventData */])(event),
      workspace = eventData.workspace,
      diffPerDep = {},
      diff;

      _.forEach(eventData.dependencies, dependency => {
        let removals = _.get(diffPerDep, [dependency.model], []);

        removals.push(dependency.modelId);

        _.set(diffPerDep, [dependency.model], removals);
      });

      diff = _.map(diffPerDep, (value, key) => {
        return {
          $path: ['dependencies', pluralMap[key]],
          $remove: value };

      });

      return Object(__WEBPACK_IMPORTED_MODULE_3__sync_helpers_create_changeset__["a" /* default */])(MODEL_WORKSPACE, EVENT_UPDATE, {
        modelId: workspace.id,
        diff: diff },
      changesetMeta);
    } },


  async addMetaTimelineId(changeset) {
    // destroy changesets go to user timeline
    if (changeset.action === ACTION_DESTROY) {
      try {
        let user = await __WEBPACK_IMPORTED_MODULE_1__controllers_UserController__["a" /* default */].get();

        user && user.id && _.set(changeset, ['meta', 'timeline'], {
          model: 'user',
          model_id: user.id });

      }
      catch (e) {
        // timeline info is not there in changeset and entity is no longer in db
        // there is no other way to extract the info
        // don't throw and allow default handler to handle this
      }

      return;
    }

    let data = _.get(changeset, 'data');

    if (data.modelId) {
      _.set(changeset, ['meta', 'timeline'], {
        model: 'workspace',
        model_id: data.modelId });

    }
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sync_helpers_sanitize_collection_model_for_sync__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_UserController__ = __webpack_require__(43);





const ID = 'id',

COLLECTION = 'collection',
ARCHIVED_RESOURCES = 'archivedresource',
FORKED_COLLECTION = 'forkedcollection',
TIMELINE = 'timeline',

ACTION_FAVORITE = 'favorite',
ACTION_UNFAVORITE = 'unfavorite',
ACTION_SUBSCRIBE = 'subscribe',
ACTION_UNSUBSCRIBE = 'unsubscribe',
ACTION_SHARE = 'share',
ACTION_DESTROY = 'destroy',

ACTION_DELETE = 'delete';

/* harmony default export */ __webpack_exports__["default"] = ({
  toTimelineEvents: {
    /**
                       * Returns timeline delete event
                       * @param  {Object} event
                       * @returns {Array.<Object>}
                       */
    deleted_deep(event) {
      let collection = _.get(event, 'data.collection');

      if (collection) {
        return [Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["a" /* createEvent */])(ACTION_DELETE, TIMELINE, { model: COLLECTION, modelId: `${collection.owner}-${collection.id}` })];
      }

      return [];
    } },


  toChangesets: {
    /**
                   *
                   */
    favorited(event) {
      let eventData = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["d" /* getEventData */])(event),
      changesetData = { modelId: _.get(eventData, [COLLECTION, ID]) };

      return [Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__["a" /* default */])(COLLECTION, ACTION_FAVORITE, changesetData)];
    },

    /**
        *
        */
    unfavorited(event) {
      let eventData = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["d" /* getEventData */])(event),
      changesetData = { modelId: _.get(eventData, [COLLECTION, ID]) };

      return [Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__["a" /* default */])(COLLECTION, ACTION_UNFAVORITE, changesetData)];
    },

    subscribe(event) {
      let eventData = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["d" /* getEventData */])(event),
      changesetData = { modelId: _.get(eventData, [COLLECTION, ID]) };

      return [Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__["a" /* default */])(COLLECTION, ACTION_SUBSCRIBE, changesetData)];
    },

    unsubscribe(event) {
      let eventData = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["d" /* getEventData */])(event),
      changesetData = { modelId: _.get(eventData, [COLLECTION, ID]) };

      return [Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__["a" /* default */])(COLLECTION, ACTION_UNSUBSCRIBE, changesetData)];
    },

    shared(event) {
      let eventData = Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["d" /* getEventData */])(event),
      changesetData = { modelId: _.get(eventData, [COLLECTION, ID]), permissions: _.get(eventData, 'permissions') };

      return [Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_create_changeset__["a" /* default */])(COLLECTION, ACTION_SHARE, changesetData)];
    } },


  sanitizeForSync(collection) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__sync_helpers_sanitize_collection_model_for_sync__["a" /* sanitizeCollectionModelForSync */])(collection, COLLECTION);
  },

  async addMetaTimelineId(changeset) {
    // favorite, unfavorite, destroy chnagesets go to user timeline
    if (changeset.action === ACTION_FAVORITE || changeset.action === ACTION_UNFAVORITE || changeset.action === ACTION_DESTROY) {
      try {
        let user = await __WEBPACK_IMPORTED_MODULE_3__controllers_UserController__["a" /* default */].get();

        user && user.id && _.set(changeset, ['meta', 'timeline'], {
          model: 'user',
          model_id: user.id });

      }
      catch (e) {
        // timeline info is not there in changeset and entity is no longer in db
        // there is no other way to extract the info
        // don't throw and allow default handler to handle this
      }

      return;
    }

    let data = _.get(changeset, 'data');

    if (data.owner && data.modelId) {
      _.set(changeset, ['meta', 'timeline'], {
        model: 'collection',
        model_id: `${data.owner}-${data.modelId}` });

    }
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_helpers_collection_model_convertors__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_for_sync__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_CollectionController__ = __webpack_require__(36);




const FOLDER = 'folder';

/* harmony default export */ __webpack_exports__["default"] = ({
  toChangesets: _.defaults({/* Add custom event to changeset convertors here */}, __WEBPACK_IMPORTED_MODULE_0__sync_helpers_collection_model_convertors__["a" /* toChangesets */]),

  sanitizeForSync(folder) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_for_sync__["a" /* sanitizeCollectionModelForSync */])(folder, FOLDER);
  },

  async addMetaTimelineId(changeset) {
    let collection = _.get(changeset, 'data.instance.collection'),
    owner = _.get(changeset, 'data.owner');

    // owner is added by buildMetaChangesets function in SyncOutgoingHandler
    if (!owner) {
      return;
    }

    if (!collection) {
      let modelId = _.get(changeset, 'data.modelId'),
      folder;

      try {
        folder = await __WEBPACK_IMPORTED_MODULE_2__controllers_CollectionController__["a" /* default */].getFolder({ id: modelId });
        collection = folder && folder.collection;
      }
      catch (e) {
        // timeline info is not there in changeset and entity is no longer in db
        // there is no other way to extract the info
        // don't throw and allow default handler to handle this
      }
    }

    if (collection) {
      _.set(changeset, ['meta', 'timeline'], {
        model: 'collection',
        model_id: `${owner}-${collection}` });

    }
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_helpers_collection_model_convertors__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_for_sync__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_CollectionController__ = __webpack_require__(36);




const REQUEST = 'request';

/* harmony default export */ __webpack_exports__["default"] = ({
  toChangesets: _.defaults({/* Add custom event to changeset convertors here */}, __WEBPACK_IMPORTED_MODULE_0__sync_helpers_collection_model_convertors__["a" /* toChangesets */]),

  sanitizeForSync: function (requestInstance) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_for_sync__["a" /* sanitizeCollectionModelForSync */])(requestInstance, REQUEST);
  },

  async addMetaTimelineId(changeset) {
    let collection = _.get(changeset, 'data.instance.collection'),
    owner = _.get(changeset, 'data.owner');

    // owner is added by buildMetaChangesets function in SyncOutgoingHandler
    if (!owner) {
      return;
    }

    if (!collection) {
      let modelId = _.get(changeset, 'data.modelId'),
      request;

      try {
        request = await __WEBPACK_IMPORTED_MODULE_2__controllers_CollectionController__["a" /* default */].getRequest({ id: modelId });
        collection = request && request.collection;
      }
      catch (e) {
        // timeline info is not there in changeset and entity is no longer in db
        // there is no other way to extract the info
        // don't throw and allow default handler to handle this
      }
    }

    if (collection) {
      _.set(changeset, ['meta', 'timeline'], {
        model: 'collection',
        model_id: `${owner}-${collection}` });

    }
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_helpers_collection_model_convertors__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_for_sync__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_CollectionController__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ResponsePropertiesValidation__ = __webpack_require__(521);





const RESPONSE = 'response';

/* harmony default export */ __webpack_exports__["default"] = ({
  toChangesets: _.defaults({
    created(event) {
      if (!__WEBPACK_IMPORTED_MODULE_3__services_ResponsePropertiesValidation__["a" /* default */].isResponseBodySizeWithinLimit(event && event.data)) {
        pm.logger.warn('SyncOutgoingModels~response:created: Dropping create changeset because the response body size exceeds the limit');
        return [];
      }

      return __WEBPACK_IMPORTED_MODULE_0__sync_helpers_collection_model_convertors__["a" /* toChangesets */].created(event);
    },

    updated(event) {
      if (!__WEBPACK_IMPORTED_MODULE_3__services_ResponsePropertiesValidation__["a" /* default */].isResponseBodySizeWithinLimit(event && event.data)) {
        pm.logger.warn('SyncOutgoingModels~response:updated: Dropping update changeset because the response body size exceeds the limit');
        return [];
      }

      return __WEBPACK_IMPORTED_MODULE_0__sync_helpers_collection_model_convertors__["a" /* toChangesets */].updated(event);
    } },
  __WEBPACK_IMPORTED_MODULE_0__sync_helpers_collection_model_convertors__["a" /* toChangesets */]),

  sanitizeForSync: function (requestInstance) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_for_sync__["a" /* sanitizeCollectionModelForSync */])(requestInstance, RESPONSE);
  },

  async addMetaTimelineId(changeset) {
    let collection = _.get(changeset, 'data.instance.collection'),
    owner = _.get(changeset, 'data.owner');

    // owner is added by buildMetaChangesets function in SyncOutgoingHandler
    if (!owner) {
      return;
    }

    if (!collection) {
      let modelId = _.get(changeset, 'data.modelId'),
      request;

      try {
        request = await __WEBPACK_IMPORTED_MODULE_2__controllers_CollectionController__["a" /* default */].getResponse({ id: modelId });
        collection = request && request.collection;
      }
      catch (e) {
        // timeline info is not there in changeset and entity is no longer in db
        // there is no other way to extract the info
        // don't throw and allow default handler to handle this
      }
    }

    if (collection) {
      _.set(changeset, ['meta', 'timeline'], {
        model: 'collection',
        model_id: `${owner}-${collection}` });

    }
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_HeaderPresetController__ = __webpack_require__(114);


/* harmony default export */ __webpack_exports__["default"] = ({
  async addMetaTimelineId(changeset) {
    let workspaceId = _.get(changeset, 'data.instance.workspace'),
    modelId = _.get(changeset, 'data.modelId');

    if (!workspaceId) {
      try {
        let headerpreset = await __WEBPACK_IMPORTED_MODULE_0__controllers_HeaderPresetController__["a" /* default */].get({ id: modelId });
        workspaceId = headerpreset && headerpreset.workspace;
      }
      catch (e) {
        // timeline info is not there in changeset and entity is no longer in db
        // there is no other way to extract the info
        // don't throw and allow default handler to handle this
      }
    }

    if (workspaceId) {
      _.set(changeset, ['meta', 'timeline'], {
        model: 'workspace',
        model_id: workspaceId });

    }
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_GlobalsController__ = __webpack_require__(87);



// @todo: using this instead of defaultOfflineWorkspaceId because, the convertors are synchronous
const OFFLINE_WORKSPACE = '29ba1c6f-43ab-4e23-8a6c-27c39a57a069';

/* harmony default export */ __webpack_exports__["default"] = ({
  toChangesets: {
    created() {
      // drop created globals events, sync handles these on workspace creates implicitly
      return [];
    },

    updated(event) {
      // @rewrite the globals:update changeset for new user id instead of dropping them
      if (_.get(event, ['data', 'workspace']) === OFFLINE_WORKSPACE) {
        return [];
      }

      let changeset = __WEBPACK_IMPORTED_MODULE_0__default__["default"].toChangesets.updated(...arguments);

      /*
                                                                        We add `workspace` to updated `keys` even if it is not updated. This is done because
                                                                        we need `globals.workspace` for constructing the sync endpoint for the globals changeset.
                                                                        This makes sync-client hydrate the `globals.workspace` key when this changeset is fetched.
                                                                         @todo: remove this once sync-client supports tracking additional properties in changeset data
                                                                        https://postmanlabs.atlassian.net/browse/SYNCCLIENT-69
                                                                      */

      _.has(changeset[0], 'data.keys') && (changeset[0].data.keys = _.union(['workspace'], changeset[0].data.keys));

      return changeset;
    },
    deleted() {
      // drop deleted globals events, sync handles these on workspace deletes implicitly
      return [];
    } },


  async addMetaTimelineId(changeset) {
    let workspace = _.get(changeset, 'data.instance.workspace');

    if (!workspace) {
      let modelId = _.get(changeset, 'data.modelId'),
      globals;

      try {
        globals = await __WEBPACK_IMPORTED_MODULE_1__controllers_GlobalsController__["a" /* default */].get({ id: modelId });
        workspace = globals && globals.workspace;
      }
      catch (e) {
        // timeline info is not there in changeset and entity is no longer in db
        // there is no other way to extract the info
        // don't throw and allow default handler to handle this
      }
    }

    if (workspace) {
      _.set(changeset, ['meta', 'timeline'], {
        model: 'workspace',
        model_id: workspace });

    }
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sync_helpers_create_changeset__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_SyncFetcherService__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_UserController__ = __webpack_require__(43);





const ACTION_SUBSCRIBE = 'subscribe',
ACTION_UNSUBSCRIBE = 'unsubscribe',
ACTION_DESTROY = 'destroy',
ACTION_DELETE = 'delete',

TIMELINE = 'timeline',
ENVIRONMENT = 'environment';

/* harmony default export */ __webpack_exports__["default"] = ({

  toTimelineEvents: {
    /**
                       * Returns timeline deleted event
                       * @param  {Object} event
                       * @returns {Array.<Object>}
                       */
    deleted(event) {
      let environment = _.get(event, 'data');

      if (environment) {
        return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(ACTION_DELETE, TIMELINE, { model: ENVIRONMENT, modelId: `${environment.owner}-${environment.id}` })];
      }

      return [];
    } },


  async addMetaTimelineId(changeset) {
    // destroy changesets go to user timeline
    if (changeset.action === ACTION_DESTROY) {
      try {
        let user = await __WEBPACK_IMPORTED_MODULE_3__controllers_UserController__["a" /* default */].get();

        user && user.id && _.set(changeset, ['meta', 'timeline'], {
          model: 'user',
          model_id: user.id });

      }
      catch (e) {
        // timeline info is not there in changeset and entity is no longer in db
        // there is no other way to extract the info
        // don't throw and allow default handler to handle this
      }

      return;
    }

    let data = _.get(changeset, 'data');

    if (data.owner && data.modelId) {
      _.set(changeset, ['meta', 'timeline'], {
        model: 'environment',
        model_id: `${data.owner}-${data.modelId}` });

    }
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_helpers_sanitize_collection_model_for_sync__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_HistoryController__ = __webpack_require__(137);



/* harmony default export */ __webpack_exports__["default"] = ({
  sanitizeForSync(history) {
    Object(__WEBPACK_IMPORTED_MODULE_0__sync_helpers_sanitize_collection_model_for_sync__["b" /* sanitizeRequestDataForSync */])(history);
    return;
  },

  toChangesets: {
    updated: function () {
      return [];
    },
    deletedAllInWorkspace: function () {
      return [];
    } },


  async addMetaTimelineId(changeset) {
    // find workspace Id in changeset itself
    let workspaceId = _.get(changeset, 'data.instance.workspace'),
    modelId = _.get(changeset, 'data.modelId');

    if (!workspaceId) {
      try {
        let history = await __WEBPACK_IMPORTED_MODULE_1__controllers_HistoryController__["a" /* default */].get({ id: modelId });
        workspaceId = history && history.workspace;
      }
      catch (e) {
        // timeline info is not there in changeset and entity is no longer in db
        // there is no other way to extract the info
        // don't throw and allow default handler to handle this
      }
    }

    workspaceId && _.set(changeset, ['meta', 'timeline'], {
      model: 'workspace',
      model_id: workspaceId });

  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_HistoryController__ = __webpack_require__(137);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


/**
                                                                   * Adds parent history reference to changeset.
                                                                   *
                                                                   * @param {Object} changeset
                                                                   *
                                                                   * @returns {Object}
                                                                   */
function addParent(changeset) {
  let parentId = _.get(changeset, ['data', 'instance', 'history']);

  if (!parentId) {
    return changeset;
  }

  return _extends({},
  changeset, {
    data: _extends({},
    changeset.data, {
      parent: {
        model: 'history',
        modelId: parentId } }) });



}

/* harmony default export */ __webpack_exports__["default"] = ({
  toChangesets: {
    created: function (event, rootEvent) {
      let changesets = __WEBPACK_IMPORTED_MODULE_0__default__["default"].toChangesets.created(event, rootEvent);

      return _.map(changesets, addParent);
    },

    updated: function () {
      return [];
    },

    deleted: function (event, rootEvent) {
      let changesets = __WEBPACK_IMPORTED_MODULE_0__default__["default"].toChangesets.deleted(event, rootEvent);

      return _.map(changesets, addParent);
    } },


  async addMetaTimelineId(changeset, changesets) {
    let workspaceId,
    historyChangeset = _.find(changesets, { model: 'history' });

    // find the history changeset from the changesets and get the workspace id from it
    if (historyChangeset) {
      workspaceId = _.get(historyChangeset, 'data.instance.workspace');
    }

    // if workspaceId is not found then find it from history record in db
    if (!workspaceId) {
      let historyId = _.get(changeset, 'data.instance.history'),
      history;

      if (historyId) {
        try {
          history = await __WEBPACK_IMPORTED_MODULE_1__controllers_HistoryController__["a" /* default */].get({ id: historyId });
          workspaceId = history && history.workspace;
        }
        catch (e) {
          // timeline info is not there in changeset and entity is no longer in db
          // there is no other way to extract the info
          // don't throw and allow default handler to handle this
        }
      }
    }

    workspaceId && _.set(changeset, ['meta', 'timeline'], {
      model: 'workspace',
      model_id: workspaceId });

  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_CollectionRunController__ = __webpack_require__(192);


function sanitizeIterationsForSync(iterations) {
  return _.chain(iterations).
  map(iteration => {
    return _.map(iteration, request => {
      if (_.isEmpty(request.request)) {
        return {
          id: request.id,
          name: request.name,
          error: request.error };

      }
      return {
        id: request.id,
        name: request.name,
        ref: request.ref,
        error: request.error,
        request: {

          // Request headers and body should not be synced
          url: _.get(request, 'request.url'),
          method: _.get(request, 'request.method'),
          path: _.get(request, 'request.path') },

        response: {

          // Response headers and body should not be synced
          code: _.get(request, 'response.code'),
          name: _.get(request, 'response.name'),
          time: _.get(request, 'response.time'),
          size: _.get(request, 'response.size') },

        tests: request.tests };

    });
  }).
  filter(iteration => {return !_.isEmpty(iteration);}).
  value();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  sanitizeForSync(collectionrun, changeset) {
    let collectionOwner = _.get(changeset, ['meta', 'collectionOwner']),
    environmentOwner = _.get(changeset, ['meta', 'environmentOwner']);

    if (environmentOwner) {
      collectionrun.environment = environmentOwner + '-' + collectionrun.environment;
    }

    if (collectionOwner) {
      collectionrun.collection = collectionOwner + '-' + collectionrun.collection;
    }

    if (_.get(collectionrun, 'target.folder')) {
      if (collectionOwner) {
        collectionrun.folder = collectionOwner + '-' + collectionrun.target.folder;
      } else
      {
        collectionrun.folder = collectionrun.target.folder;
      }
    } else
    {
      collectionrun.folder = null;
    }

    collectionrun.iterations = sanitizeIterationsForSync(collectionrun.iterations);

    delete collectionrun.target;
    delete collectionrun.owner;
    delete collectionrun.createdAt;
    return;
  },

  toChangesets: {
    updated: function (event) {
      return [];
    } },


  async addMetaTimelineId(changeset) {
    let workspace = _.get(changeset, 'data.instance.workspace');

    if (!workspace) {
      let modelId = _.get(changeset, 'data.modelId'),
      collectionRun;

      try {
        collectionRun = await __WEBPACK_IMPORTED_MODULE_0__controllers_CollectionRunController__["a" /* default */].get({ id: modelId });
        workspace = collectionRun && collectionRun.workspace;
      }
      catch (e) {
        // timeline info is not there in changeset and entity is no longer in db
        // there is no other way to extract the info
        // don't throw and allow default handler to handle this
      }
    }

    if (workspace) {
      _.set(changeset, ['meta', 'timeline'], {
        model: 'workspace',
        model_id: workspace });

    }
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({

  toChangesets: {
    updated: function () {
      return [];
    },
    created: function () {
      return [];
    },
    deleted: function () {
      return [];
    } } });

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  toChangesets: {
    /**
                   * No-op for creation as this is a remote first action
                   */
    created: () => [],

    /**
                        * No-op for update as this is a remote first action
                        */
    updated: () => [],

    /**
                        * No-op for delete as this is a remote first action
                        */
    deleted: () => [] } });

/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionTimeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_timeline_helpers_BaseSyncTimeline__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_sync_services_SyncIncomingHandler__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sync_helpers_create_changeset__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_SyncService__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utils_collection_tree__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_CollectionController__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_AccessControl_PermissionService__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_uid_helper__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_sync_SyncManagerHelper__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_sync_SyncOutgoingHelpers__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_AnalyticsService__ = __webpack_require__(20);













let CollectionTimeline = class CollectionTimeline extends __WEBPACK_IMPORTED_MODULE_0__sync_timeline_helpers_BaseSyncTimeline__["a" /* BaseSyncTimeline */] {
  constructor(timelineId) {
    super(timelineId);
  }

  markForForceSync() {
    let { modelId } = Object(__WEBPACK_IMPORTED_MODULE_7__utils_uid_helper__["b" /* decomposeUID */])(this.modelId);

    Object(__WEBPACK_IMPORTED_MODULE_8__models_sync_SyncManagerHelper__["d" /* markModelForForceSync */])({
      model: 'collection',
      modelId });

  }

  /**
     * Implements force sync for a collection.
     *
     * Force syncing would mean merging all the changes on Sync service and the app.
     * It includes pulling missing changes and pushing missing changes to sync.
     *
     * To do this
     *
     * 1. We fetch the latest state of the collection from sync in form of changesets (create changesets for all items)
     * 2. We populate the local state of the collection in the form of changesets
     * 3. We push both of these into a conflict resolution flow
     * 4. CR flow takes care of ignoring identical values and asking the user for mismatches
     * 5. On completion CR publishes the resolution to both sync and the app bringing both to the same state
     */
  async handleForceSync() {
    let { owner, modelId } = Object(__WEBPACK_IMPORTED_MODULE_7__utils_uid_helper__["b" /* decomposeUID */])(this.modelId),
    isMarkedForForceSync = _.find(pm.syncManager.modelsToForceSync, entity => {return entity && entity.modelId === modelId;});

    // bail out if force sync is not needed
    if (!isMarkedForForceSync) {
      return;
    }

    // first unmark the item
    // so that in case of failures we don't want to go into a loop of retries
    Object(__WEBPACK_IMPORTED_MODULE_8__models_sync_SyncManagerHelper__["f" /* unmarkModelForForceSync */])({ model: 'collection', modelId });

    // Add analytics event for force sync
    __WEBPACK_IMPORTED_MODULE_10__services_AnalyticsService__["a" /* default */].addEventV2({
      category: 'sync_failure',
      action: 'force_sync',
      entityType: 'collection',
      entityId: modelId });


    // get the latest state of collection as changesets from sync
    let syncResponse = await __WEBPACK_IMPORTED_MODULE_3__services_SyncService__["c" /* promisifiedRequest */]({
      model: 'collection',
      action: 'findOne',
      meta: {
        pathVariables: { id: this.modelId },
        query: {
          populate: true,
          changeset: true } } }),



    serverChanges;

    if (!syncResponse || syncResponse.error) {
      pm.logger.warn('collectionTimeline~handleForceSync: Could not force sync collection', this.modelId, syncResponse && syncResponse.error);
      return;
    }

    serverChanges = _.map(syncResponse.data, __WEBPACK_IMPORTED_MODULE_1__models_sync_services_SyncIncomingHandler__["a" /* buildChangesetFromMessage */]);

    // get the latest state of collection as changesets from DB
    let localCollection = await __WEBPACK_IMPORTED_MODULE_5__controllers_CollectionController__["a" /* default */].getCollection({ id: modelId }, { populate: true }),
    localChanges = Object(__WEBPACK_IMPORTED_MODULE_8__models_sync_SyncManagerHelper__["b" /* getCreateChangesetsForCollectionModel */])(localCollection, 'collection', { owner: owner });

    // Earlier this process used to happen just before sending the changesets to server in `SyncManagerNew.js` file. It's been
    // moved here because while resolving conflicts we need to compare the changesets and if instance of client and server changesets are not in same
    // format, there will be invalid comparison
    _.forEach(localChanges, changeset => {
      Object(__WEBPACK_IMPORTED_MODULE_9__models_sync_SyncOutgoingHelpers__["a" /* sanitizeHydratedChangeset */])(changeset);
    });

    // sync them with CR
    await this._processPendingChangesWithCR(localChanges, serverChanges);
  }

  /**
     * Integrity checks for collection timeline
     *
     * Creates any missing collection/folders/requests or responses rows in app that are present on Sync. Does not
     * push any missing entities to Sync server. Only pulls missing items.
     */
  async repairIntegrity() {
    // fetch the collection, but only the ids enough to replicate the collection structure
    // similar to the collection response but with only ids and without the data
    let collection = await __WEBPACK_IMPORTED_MODULE_3__services_SyncService__["c" /* promisifiedRequest */]({
      model: 'collection',
      action: 'findOne',
      meta: {
        query: {
          ids: true,
          populate: true },

        pathVariables: {
          id: this.modelId } } }).



    then(resData => {
      if (!resData || resData.error) {
        throw new Error(resData ? resData.error : 'Could not get collection from sync');
      }

      if (!resData.data) {
        throw new Error('Could not get collection from sync');
      }

      return resData.data;
    });

    let localCollection = await __WEBPACK_IMPORTED_MODULE_5__controllers_CollectionController__["a" /* default */].getCollection({ id: collection.id }),
    localFolders = await __WEBPACK_IMPORTED_MODULE_5__controllers_CollectionController__["a" /* default */].getFolders({ collection: collection.id }),
    localRequests = await __WEBPACK_IMPORTED_MODULE_5__controllers_CollectionController__["a" /* default */].getRequests({ collection: collection.id }),
    localResponses = await __WEBPACK_IMPORTED_MODULE_5__controllers_CollectionController__["a" /* default */].getResponses({ collection: collection.id });

    let collectionElements = new Set();

    localCollection && collectionElements.add(`collection:${localCollection.id}`);

    // create a set with all local entities
    _.forEach(localFolders, folder => {
      collectionElements.add(`folder:${folder.id}`);
    });
    _.forEach(localRequests, request => {
      collectionElements.add(`request:${request.id}`);
    });
    _.forEach(localResponses, response => {
      collectionElements.add(`response:${response.id}`);
    });

    let changesets = [];

    // for each element in server collection check if the element is present locally
    // create the item if not present in app
    Object(__WEBPACK_IMPORTED_MODULE_4__common_utils_collection_tree__["c" /* walkCollectionTree */])(collection, 'collection', (node, { type }) => {
      if (collectionElements.has(`${type}:${node.id}`)) {
        return;
      }

      changesets.push(Object(__WEBPACK_IMPORTED_MODULE_2__sync_helpers_create_changeset__["a" /* default */])(type, 'create', { instance: node, modelId: node.id, owner: collection.owner }, { partial: true }));
    });

    // process all the changesets in series
    return changesets.reduce((acc, changeset) => {
      return acc.then(() => {
        return Object(__WEBPACK_IMPORTED_MODULE_1__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(changeset);
      });
    }, Promise.resolve());
  }

  /**
     * Pull the permissions for the collection
     *
     * @param {Object} options
     * @param {Number} options.startRevision
     */
  onSyncFinished({ startRevision }) {
    __WEBPACK_IMPORTED_MODULE_6__services_AccessControl_PermissionService__["a" /* default */].fetch({ model: this.model, modelId: this.modelId });
  }

  /**
     * Delete the permissions for collection
     */
  onTerminate() {
    __WEBPACK_IMPORTED_MODULE_6__services_AccessControl_PermissionService__["a" /* default */].destroy({ model: this.model, modelId: this.modelId });
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceTimeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_timeline_helpers_BaseSyncTimeline__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_SyncFetcherService__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AccessControl_PermissionService__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_sync_services_SyncIncomingHandler__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sync_helpers_create_changeset__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_SyncService__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_GlobalsController__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipelines_sync_action__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controllers_HeaderPresetController__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_uid_helper__ = __webpack_require__(95);












const MODEL_HISTORY = 'history',
MODEL_COLLECTION_RUN = 'collectionrun',
ACTION_IMPORT = 'import',

HISTORY_FIRST_PULL_COUNT = 100,
COLLECTION_RUN_FIRST_PULL_COUNT = 100;

let WorkspaceTimeline = class WorkspaceTimeline extends __WEBPACK_IMPORTED_MODULE_0__sync_timeline_helpers_BaseSyncTimeline__["a" /* BaseSyncTimeline */] {
  constructor(timelineId) {
    super(timelineId);
  }

  /**
     * Pull history and collection run the first time this workspace is synced.
     * Pull permissions for the workspace
     *
     * @param {Object} options
     * @param {Number} options.startRevision
     */
  onSyncFinished({ startRevision }) {

    // a falsy value means that this is the first time this timeline is synced
    if (!startRevision) {
      // pull history
      __WEBPACK_IMPORTED_MODULE_1__services_SyncFetcherService__["b" /* fetchHistory */]('find', { workspace: this.modelId, count: HISTORY_FIRST_PULL_COUNT }).
      then(history => {
        _.forEach(history, function (history) {
          let historyCreateChangeset = Object(__WEBPACK_IMPORTED_MODULE_4__sync_helpers_create_changeset__["a" /* default */])(MODEL_HISTORY, ACTION_IMPORT, {
            instance: history,
            modelId: history.id,
            owner: history.owner },
          { partial: true });

          // asynchronous create, but don't wait
          Object(__WEBPACK_IMPORTED_MODULE_3__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(historyCreateChangeset).
          catch(e => {
            pm.logger.warn('WorkspaceSyncTimeline: Could not create history', e);
          });
        });
      });

      // pull collection run
      __WEBPACK_IMPORTED_MODULE_1__services_SyncFetcherService__["a" /* fetchCollectionRun */]('find', { workspace: this.modelId, count: COLLECTION_RUN_FIRST_PULL_COUNT }).
      then(collectionRuns => {
        _.forEach(collectionRuns, collectionRun => {
          let collectionRunCreateChangeset = Object(__WEBPACK_IMPORTED_MODULE_4__sync_helpers_create_changeset__["a" /* default */])(MODEL_COLLECTION_RUN, ACTION_IMPORT, {
            instance: collectionRun,
            modelId: collectionRun.id,
            owner: collectionRun.owner },
          { partial: true });

          // asynchronous create, but don't wait
          Object(__WEBPACK_IMPORTED_MODULE_3__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(collectionRunCreateChangeset).
          catch(e => {
            pm.logger.warn('WorkspaceSyncTimeline: Could not create collection run', e);
          });
        });
      });
    }

    // Fetch permissions for the workspace
    __WEBPACK_IMPORTED_MODULE_2__services_AccessControl_PermissionService__["a" /* default */].fetch({ model: this.model, modelId: this.modelId });
  }

  /**
     * Delete the permissions for workspace
     */
  onTerminate() {
    __WEBPACK_IMPORTED_MODULE_2__services_AccessControl_PermissionService__["a" /* default */].destroy({ model: this.model, modelId: this.modelId });
  }

  /**
     * A sync timeline processes all changesets as an ordered sequence. i.e. It waits for the each
     * changeset to finish before moving on the next. In some cases this might be less than ideal.
     *
     * For example history or collection run changesets. Once we filter these type of changesets
     * they will be moved out of the main sequence and applied at an appropriate time.
     *
     * @param {Object} changeset
     *
     * @returns {Boolean}
     */
  filterOrderIndependentChangesets(changeset) {
    // just ignore changesets you don't understand, the host will take care of rejections
    if (!changeset || !changeset.meta) {
      return false;
    }

    if (changeset.meta.model === 'history' || changeset.meta.model === 'collectionrun') {
      return true;
    }

    return false;
  }

  /**
     * Integrity checks for workspace timeline.
     *
     * Creates missing globals and header presets
     */
  async repairIntegrity() {
    let workspace = await __WEBPACK_IMPORTED_MODULE_5__services_SyncService__["c" /* promisifiedRequest */]({
      model: 'workspace',
      action: 'findOne',
      meta: {
        query: {
          dependencies: true,
          members: true },

        pathVariables: {
          id: this.modelId } } }).



    then(resData => {
      if (!resData || resData.error) {
        throw new Error(resData ? resData.error : 'Could not get workspace from sync');
      }


      if (!resData.data) {
        throw new Error('Could not get workspace from sync');
      }

      return resData.data;
    });

    // globals recovery
    let clientGlobals = await __WEBPACK_IMPORTED_MODULE_6__controllers_GlobalsController__["a" /* default */].get({ workspace: this.modelId }),
    remoteGlobals;

    if (!clientGlobals) {
      remoteGlobals = await __WEBPACK_IMPORTED_MODULE_5__services_SyncService__["c" /* promisifiedRequest */]({
        model: 'globals',
        action: 'findOne',
        meta: {
          query: {
            dependencies: true,
            members: true },

          pathVariables: {
            workspace: this.modelId } } }).



      then(resData => {
        if (!resData || resData.error) {
          throw new Error(resData ? resData.error : 'Could not get globals from sync');
        }

        return resData.data;
      });

      remoteGlobals && (await Object(__WEBPACK_IMPORTED_MODULE_8__pipelines_sync_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_7__model_event__["a" /* createEvent */])('create', 'globals', remoteGlobals)));
    }

    // header presets recovery
    let localHeaderPresets = await __WEBPACK_IMPORTED_MODULE_9__controllers_HeaderPresetController__["a" /* default */].getAll({ workspace: workspace.id }),
    localHeaderPresetsIds = localHeaderPresets.map(preset => {return preset && `${preset.owner}-${preset.id}`;}),
    remoteHeaderPresetIds = _.get(workspace, ['dependencies', 'headerpresets']),
    missingHeaderPresetIds = _.difference(remoteHeaderPresetIds, localHeaderPresetsIds);

    _.forEach(missingHeaderPresetIds, presetId => {
      let { modelId, owner } = Object(__WEBPACK_IMPORTED_MODULE_10__utils_uid_helper__["b" /* decomposeUID */])(presetId);

      return Object(__WEBPACK_IMPORTED_MODULE_3__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(Object(__WEBPACK_IMPORTED_MODULE_4__sync_helpers_create_changeset__["a" /* default */])('headerpreset', 'import', { modelId, owner }, { partial: true }));
    });
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentTimeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_timeline_helpers_BaseSyncTimeline__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_SyncService__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_EnvironmentController__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sync_helpers_create_changeset__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_sync_services_SyncIncomingHandler__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AccessControl_PermissionService__ = __webpack_require__(267);







let EnvironmentTimeline = class EnvironmentTimeline extends __WEBPACK_IMPORTED_MODULE_0__sync_timeline_helpers_BaseSyncTimeline__["a" /* BaseSyncTimeline */] {
  constructor(timelineId) {
    super(timelineId);
  }

  /**
     * Integrity checks for environment timeline
     *
     * Creates the environment if it is missing locally. Does not push anything to Sync.
     */
  async repairIntegrity() {
    // fetch the environment from sync
    let remoteEnvironment = await __WEBPACK_IMPORTED_MODULE_1__services_SyncService__["c" /* promisifiedRequest */]({
      model: 'environment',
      action: 'findOne',
      meta: {
        pathVariables: {
          id: this.modelId } } }).



    then(resData => {
      if (!resData || resData.error) {
        throw new Error(resData ? resData.error : 'Could not get environment from sync');
      }

      if (!resData.data) {
        throw new Error('Could not get environmemnt from sync');
      }

      return resData.data;
    });


    // fetch environment from DB
    let localEnvironment = await __WEBPACK_IMPORTED_MODULE_2__controllers_EnvironmentController__["a" /* default */].get({ id: remoteEnvironment.id });

    // if local environment is missing
    // apply a create changeset for that environment
    if (!localEnvironment) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__models_sync_services_SyncIncomingHandler__["c" /* processIncomingChangeset */])(Object(__WEBPACK_IMPORTED_MODULE_3__sync_helpers_create_changeset__["a" /* default */])('environment', 'create', { instance: remoteEnvironment, modelId: remoteEnvironment.id }));
    }
  }

  /**
     * Pull the permissions for the environment
     *
     * @param {Object} options
     * @param {Number} options.startRevision
     */
  onSyncFinished({ startRevision }) {
    __WEBPACK_IMPORTED_MODULE_5__services_AccessControl_PermissionService__["a" /* default */].fetch({ model: this.model, modelId: this.modelId });
  }

  /**
     * Delete the permissions for environment
     */
  onTerminate() {
    __WEBPACK_IMPORTED_MODULE_5__services_AccessControl_PermissionService__["a" /* default */].destroy({ model: this.model, modelId: this.modelId });
  }};

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collectionrun__ = __webpack_require__(968);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__folder__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__headerpreset__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__historyresponse__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__request__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__response__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__team__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__workspace__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__comment__ = __webpack_require__(979);














/* harmony default export */ __webpack_exports__["a"] = ({
  collection: __WEBPACK_IMPORTED_MODULE_0__collection__["a" /* default */],
  folder: __WEBPACK_IMPORTED_MODULE_3__folder__["a" /* default */],
  request: __WEBPACK_IMPORTED_MODULE_8__request__["a" /* default */],
  response: __WEBPACK_IMPORTED_MODULE_9__response__["a" /* default */],
  collectionrun: __WEBPACK_IMPORTED_MODULE_1__collectionrun__["a" /* default */],
  environment: __WEBPACK_IMPORTED_MODULE_2__environment__["a" /* default */],
  globals: __WEBPACK_IMPORTED_MODULE_4__globals__["a" /* default */],
  headerpreset: __WEBPACK_IMPORTED_MODULE_5__headerpreset__["a" /* default */],
  history: __WEBPACK_IMPORTED_MODULE_6__history__["a" /* default */],
  historyresponse: __WEBPACK_IMPORTED_MODULE_7__historyresponse__["a" /* default */],
  team: __WEBPACK_IMPORTED_MODULE_10__team__["a" /* default */],
  workspace: __WEBPACK_IMPORTED_MODULE_11__workspace__["a" /* default */],
  comment: __WEBPACK_IMPORTED_MODULE_12__comment__["a" /* default */] });

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_sync_sync_helpers_collection_model_converters__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sync_helpers_sanitize_collection_model_from_sync__ = __webpack_require__(140);




const EVENT_CREATE = 'create',
EVENT_DELETE = 'delete',
EVENT_DELETE_DEEP = 'deleteDeep',
EVENT_FAVORITE = 'favorite',
EVENT_UNFAVORITE = 'unfavorite',

FORKED_COLLECTION = 'forkedcollection',
ACCESS_CONTROL = 'accesscontrol',

MODEL_TIMELINE = 'timeline',
MODEL_COLLECTION = 'collection',

ARCHIVED_RESOURCES = 'archivedresource',
COLLECTION = 'collection';

/* harmony default export */ __webpack_exports__["a"] = ({
  toTimelineEvents: {
    /**
                       * Create and subscribe to environment timeline
                       *
                       * @param  {Object} changeset
                       * @returns {Array.<Object>}
                       */
    subscribe(changeset) {
      let data = _.get(changeset, 'data');

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, MODEL_TIMELINE, { model: MODEL_COLLECTION, modelId: `${data.owner}-${data.modelId}` })];
    },

    /**
        * Unsubscribe collection timeline.
        *
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    unsubscribe(changeset) {
      let data = _.get(changeset, 'data');

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, MODEL_TIMELINE, { model: MODEL_COLLECTION, modelId: `${data.owner}-${data.modelId}` })];
    } },


  toAppEvents: _.defaults({
    /**
                             * Favorite a collection.
                             * @param  {Object} changeset
                             *
                             * @return {Array.<Object>}
                             */
    favorite(changeset) {
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_FAVORITE, changeset.model || changeset.meta.model, {
        model: changeset.model || changeset.meta.model,
        [changeset.model]: { id: _.get(changeset, ['data', 'modelId']) } })];

    },

    /**
        * Unfavorite a collection
        * @param  {Object} changeset
        *
        * @returns {Array.<Object>}
        */
    unfavorite(changeset) {
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_UNFAVORITE, changeset.model || changeset.meta.model, {
        model: changeset.model || changeset.meta.model,
        [changeset.model]: { id: _.get(changeset, ['data', 'modelId']) } })];

    },

    /**
        * Transform collection:unsubscribe to collection:delete
        *
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    unsubscribe(changeset) {
      let data = _.get(changeset, 'data');

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE_DEEP, MODEL_COLLECTION, { model: MODEL_COLLECTION, collection: { id: data.modelId } })];
    },

    /**
        * Converts archive changeset to an event
        * @param {Object} changeset
        * @returns {Array<Object>}
        */
    archive(changeset) {
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, ARCHIVED_RESOURCES, {
        model: changeset.model,
        modelId: _.get(changeset, ['data', 'modelId']) })];

    },

    /**
        * Converts unarchive changeset to an event
        * @param {Object} changeset
        * @returns {Array<Object>}
        */
    unarchive(changeset) {
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, ARCHIVED_RESOURCES, {
        model: changeset.model,
        modelId: _.get(changeset, ['data', 'modelId']) })];

    },

    /**
        * Converts fork changeset to an event
        *
        * @param {Object} changeset
        * @returns {Array.<Object>}
        */
    fork(changeset) {
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('create', FORKED_COLLECTION, {
        id: `${_.get(changeset, ['data', 'owner'])}-${_.get(changeset, ['data', 'modelId'])}`,
        forkLabel: _.get(changeset, ['data', 'forkedFrom', 'forkName']),
        baseCollectionId: _.get(changeset, ['data', 'forkedFrom', 'id']),
        baseCollectionName: _.get(changeset, ['data', 'forkedFrom', 'name']) })];

    },

    /**
        * Converts the collection:update-roles event into a accesscontrol:update-roles event
        * @param {Object} changeset
        */
    update_roles(changeset) {
      let collectionUId = _.get(changeset, 'meta.timeline.model_id');
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('update_roles', ACCESS_CONTROL, {
        model: COLLECTION,
        modelId: collectionUId })];

    } },
  __WEBPACK_IMPORTED_MODULE_1__models_sync_sync_helpers_collection_model_converters__["a" /* toAppEvents */]),

  sanitizeFromSync(collection) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__sync_helpers_sanitize_collection_model_from_sync__["b" /* sanitizeCollectionModelFromSync */])(collection, COLLECTION);
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);


const EVENT_CREATE = 'create',
EVENT_DELETE = 'delete',
EVENT_UPDATE = 'update';

/* harmony default export */ __webpack_exports__["a"] = ({
  sanitizeFromSync(collectionrun) {
    collectionrun.target = {
      collection: collectionrun.collection,
      folder: collectionrun.folder };


    delete collectionrun.folder;
    return;
  },

  toAppEvents: {
    /**
                  * Create a collection run
                  * @param  {Object} changeset
                  * @returns {Array.<Object>}
                  */
    import(changeset) {
      let model = changeset.model,
      instance = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, model, instance)];
    },

    /**
        * Create a collection run
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    create(changeset) {
      let model = changeset.model,
      instance = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, model, instance)];
    },

    /**
        * Update a collection run
        * @returns {Array.<Object>}
        */
    update() {
      return [];
    },

    /**
        * Delete a collection run
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    destroy(changeset) {
      let model = changeset.model,
      modelId = _.get(changeset, ['data', 'modelId']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, model, { id: modelId })];
    } } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);


const EVENT_UPDATE = 'update',
EVENT_CREATE = 'create';

/* harmony default export */ __webpack_exports__["a"] = ({

  toTimelineEvents: {
    /**
                       * Create and subscribe to the environment timeline
                       * @param  {Object} changeset
                       * @returns {Array.<Object>}
                       */
    subscribe(changeset) {
      let data = _.get(changeset, 'data');

      if (!data.owner || !data.modelId) {
        return [];
      }

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('create', 'timeline', { model: 'environment', modelId: `${data.owner}-${data.modelId}` })];
    },

    /**
        * Cleanup environment timeline on environment unsubscribe
        *
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    unsubscribe(changeset) {
      let data = _.get(changeset, 'data');

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('delete', 'timeline', { model: 'environment', modelId: `${data.owner}-${data.modelId}` })];
    } },


  toAppEvents: {
    /**
                  * Delete environment on environment unsubscribe.
                  *
                  * @param  {Object} changeset
                  * @returns {Array.<Object>}
                  */
    unsubscribe(changeset) {
      let data = _.get(changeset, 'data');

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('delete', 'environment', { id: data.modelId })];
    },

    /**
        * Create a new environment
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    create(changeset) {
      let model = changeset.model,
      instance = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, model, instance)];
    },

    /**
        * Create a new environment
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    import(changeset) {
      let model = changeset.model,
      instance = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, model, instance)];
    },

    /**
        * Update a particular environment
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    update(changeset) {
      let model = changeset.model,
      instance = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_UPDATE, model, instance)];
    } } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_sync_sync_helpers_collection_model_converters__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__ = __webpack_require__(140);



const FOLDER = 'folder';

/* harmony default export */ __webpack_exports__["a"] = ({
  toAppEvents: _.defaults({/* Add custom event to changeset convertors here */}, __WEBPACK_IMPORTED_MODULE_0__models_sync_sync_helpers_collection_model_converters__["a" /* toAppEvents */]),

  sanitizeFromSync: function (requestInstance) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__["b" /* sanitizeCollectionModelFromSync */])(requestInstance, FOLDER);
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_model_event__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_model_event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_model_event__);


/* harmony default export */ __webpack_exports__["a"] = ({
  toAppEvents: {
    /**
                  * @param  {Object} changeset
                  * @returns {Array.<Object>}
                  */
    import(changeset) {
      let model = changeset.model,
      instance = _.get(changeset, ['data', 'instance']);

      // @todo: change this to create once we have conflict resolution wired up
      // just now the globals for the default workspace is already there hence create fails, so
      // we do a createOrUpdate so that the globals can be updated
      return [Object(__WEBPACK_IMPORTED_MODULE_0__common_model_event__["createEvent"])('createOrUpdate', model, instance)];
    },

    /**
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    create(changeset) {
      let model = changeset.model,
      instance = _.get(changeset, ['data', 'instance']);

      // @todo: change this once we have conflict resolution wired up
      return [Object(__WEBPACK_IMPORTED_MODULE_0__common_model_event__["createEvent"])('createOrUpdate', model, instance)];
    },

    /**
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    update(changeset) {
      let model = changeset.model,
      instance = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__common_model_event__["createEvent"])('update', model, instance)];
    },

    /**
        * @returns {Array}
        */
    destroy() {
      return [];
    } } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);


const EVENT_CREATE = 'create',
EVENT_DELETE = 'delete',
EVENT_UPDATE = 'update';

/* harmony default export */ __webpack_exports__["a"] = ({
  toAppEvents: {
    /**
                  * Create a header preset
                  * @param  {Object} changeset
                  * @returns {Array.<Object>}
                  */
    import(changeset) {
      let model = changeset.model,
      instance = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, model, instance)];
    },

    /**
        * Create a header preset
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    create(changeset) {
      let model = changeset.model,
      instance = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, model, instance)];
    },

    /**
        * Update a header preset
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    update(changeset) {
      let model = changeset.model,
      instance = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_UPDATE, model, instance)];
    },

    /**
        * Delete a header preset
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    destroy(changeset) {
      let model = changeset.model,
      modelId = _.get(changeset, ['data', 'modelId']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, model, { id: modelId })];
    } } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__ = __webpack_require__(140);



const ARCHIVED_RESOURCES = 'archivedresource',

EVENT_CREATE = 'create',
EVENT_DELETE = 'delete',

HISTORY = 'history';

/* harmony default export */ __webpack_exports__["a"] = ({
  sanitizeFromSync(history) {
    Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__["c" /* sanitizeDataMode */])(history);
    Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__["h" /* sanitizeRequestBody */])(history);
    Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__["i" /* sanitizeRequestMethod */])(history);
    Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__["f" /* sanitizeHeadersFromSync */])(history);
    Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__["g" /* sanitizePathVariablesFromSync */])(history);
    Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__["e" /* sanitizeDeprecatedScriptProperties */])(history);
    Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__["d" /* sanitizeDeprecatedAuthProperties */])(history);
    return;
  },

  toAppEvents: {
    /**
                  * Create a history and history response if present
                  * @param  {Object} changeset
                  * @returns {Array.<Object>}
                  */
    import(changeset) {
      if (!(changeset && changeset.data && changeset.data.instance)) {
        return [];
      }

      let historyObject = _.omit(changeset.data.instance, ['historyresponses']),
      historyCreateEvent = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, HISTORY, historyObject),
      historyResponseCreateEvents;

      historyResponseCreateEvents = _.map(changeset.data.instance.historyresponses, historyresponse => {
        return Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, 'historyresponse', historyresponse);
      });

      return _.concat(historyCreateEvent, historyResponseCreateEvents);
    },

    /**
        * Converts create changeset to an event
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    create(changeset) {
      let instance = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, HISTORY, instance)];
    },

    /**
        * Converts destroy changeset to event
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    destroy(changeset) {
      let model = changeset.model || changeset.meta.model,
      modelId = _.get(changeset, ['data', 'modelId']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, HISTORY, { id: modelId })];
    },

    /**
        * Converts update changeset to an event
        */
    update: function () {
      return [];
    },

    /**
        * Converts archive changeset to an event
        * @param {Object} changeset
        * @returns {Array.<Object>}
        */
    archive(changeset) {
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, ARCHIVED_RESOURCES, {
        model: HISTORY,
        modelId: _.get(changeset, ['data', 'modelId']) })];

    },

    /**
        * Converts unarchive changeset to an event
        * @param {Object} changeset
        * @returns {Array.<Object>}
        */
    unarchive(changeset) {
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, ARCHIVED_RESOURCES, {
        model: HISTORY,
        modelId: _.get(changeset, ['data', 'modelId']) })];

    } } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);


const MODEL_HISTORY_RESPONSE = 'historyresponse',

EVENT_CREATE = 'create',
EVENT_DELETE = 'delete';

/* harmony default export */ __webpack_exports__["a"] = ({
  toAppEvents: {
    /**
                  * Converts import changeset to an event
                  * @param  {Object} changeset
                  * @returns {Array.<Object>}
                  */
    import(changeset) {
      let instance = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, MODEL_HISTORY_RESPONSE, instance)];
    },

    /**
        * Converts create changeset to an event
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    create(changeset) {
      let instance = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, MODEL_HISTORY_RESPONSE, instance)];
    },

    /**
        * Converts update changeset to event
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    update(changeset) {
      return [];
    },

    /**
        * Converts destroy changeset to an event
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    destroy(changeset) {
      let modelId = _.get(changeset, ['data', 'modelId']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, MODEL_HISTORY_RESPONSE, { id: modelId })];
    } } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_sync_sync_helpers_collection_model_converters__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__ = __webpack_require__(140);



const REQUEST = 'request';

/* harmony default export */ __webpack_exports__["a"] = ({
  toAppEvents: _.defaults({/* Add custom event to changeset convertors here */}, __WEBPACK_IMPORTED_MODULE_0__models_sync_sync_helpers_collection_model_converters__["a" /* toAppEvents */]),

  sanitizeFromSync: function (requestInstance) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__["b" /* sanitizeCollectionModelFromSync */])(requestInstance, REQUEST);
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_sync_sync_helpers_collection_model_converters__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__ = __webpack_require__(140);



const RESPONSE = 'response';

/* harmony default export */ __webpack_exports__["a"] = ({
  toAppEvents: _.defaults({/* Add custom event to changeset convertors here */}, __WEBPACK_IMPORTED_MODULE_0__models_sync_sync_helpers_collection_model_converters__["a" /* toAppEvents */]),

  sanitizeFromSync: function (requestInstance) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__sync_helpers_sanitize_collection_model_from_sync__["b" /* sanitizeCollectionModelFromSync */])(requestInstance, RESPONSE);
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
  toAppEvents: {
    // other functions (changePlan, add_member, remove_member) are handled
    // in SyncTeamEventsService.js because that belongs to the team timeline and is
    // handled separately

    /**
     * @param  {Object} changeset
     * @returns {Array.<Object>}
     */
    join(changeset) {
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('activate', changeset.model, changeset.data)];
    },

    /**
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    leave(changeset) {
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('deactivate', changeset.model, changeset.data)];
    } } });

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);


const MODEL_WORKSPACE = 'workspace',
MODEL_SYNC_WORKSPACE = 'syncworkspace',
MODEL_HISTORY = 'history',
MODEL_COLLECTION_RUN = 'collectionrun',
MODEL_GLOBALS = 'globals',
MODEL_WORKSPACE_SESSION = 'workspacesession',

ACCESS_CONTROL = 'accesscontrol',

MODEL_TIMELINE = 'timeline',
EVENT_CREATE = 'create',
EVENT_DELETE = 'delete';

/**
                          * Returns a list of events to handle workspace leave/destroy
                          *
                          * @returns {Array.<Object>}
                          */
function getWorkspaceLeaveEvents(workspace) {
  let workspaceDeleteEvent = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, MODEL_WORKSPACE, workspace),

  historyDeleteEvent = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, MODEL_HISTORY, { workspace: workspace.id }),
  collectionRunDeleteEvent = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, MODEL_COLLECTION_RUN, { workspace: workspace.id }),
  globalsDeleteEvent = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, MODEL_GLOBALS, { workspace: workspace.id });

  return [historyDeleteEvent, collectionRunDeleteEvent, globalsDeleteEvent, workspaceDeleteEvent];
}

/* harmony default export */ __webpack_exports__["a"] = ({
  toTimelineEvents: {
    /**
                       * Sync the workspace timeline on workspace join.
                       *
                       * @param  {Object} changeset
                       * @returns {Array.<Object>}
                       */
    join(changeset) {
      let workspaceId = _.get(changeset, 'data.modelId');

      if (!workspaceId) {
        return [];
      }

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, MODEL_TIMELINE, { model: MODEL_WORKSPACE, modelId: workspaceId })];
    },

    /**
        * Cleanup workspace timeline on workspace leave.
        *
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    leave(changeset) {
      let workspaceId = _.get(changeset, 'data.modelId');

      if (!workspaceId) {
        return [];
      }

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, MODEL_TIMELINE, { model: MODEL_WORKSPACE, modelId: workspaceId })];
    } },


  toAppEvents: {
    /**
                  * Update sync workspace list when a workspace becomes visible.
                  *
                  * @param  {Object} changeset
                  * @returns {Array.<Object>}
                  */
    visible(changeset) {
      let workspace = _.get(changeset, ['data', 'instance']);
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_CREATE, MODEL_SYNC_WORKSPACE, workspace)];
    },

    /**
        * Update sync workspace list when a workspace becomes invisible.
        *
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    invisible(changeset) {
      let workspace = _.get(changeset, ['data', 'instance']);
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, MODEL_SYNC_WORKSPACE, workspace)];
    },

    /**
        * Delete the workspace on workspace leave.
        *
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    leave(changeset) {
      let workspaceId = _.get(changeset, 'data.modelId');

      if (!workspaceId) {
        return [];
      }

      return getWorkspaceLeaveEvents({ id: workspaceId });
    },

    /**
        * Create changeset to event
        * @param  {Object} changeset
        * @returns  {Array.<Object>}
        */
    create(changeset) {
      let workspace = _.get(changeset, ['data', 'instance']);

      // @todo: change this to create once we have conflict resolution wired up
      // just now the default workspace is already there hence create fails, so
      // we do a createOrUpdate so that the dependencies can be updated and collections
      // and environments are visible
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('createOrUpdate', MODEL_SYNC_WORKSPACE, workspace), Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('createOrUpdate', MODEL_WORKSPACE, workspace)];
    },

    /**
        * Import changeset to event
        * @param  {Object} changeset
        * @returns  {Array.<Object>}
        */
    import(changeset) {
      let workspace = _.get(changeset, ['data', 'instance']);

      // @todo: change this to create once we have conflict resolution wired up
      // just now the default workspace is already there hence create fails, so
      // we do a createOrUpdate so that the dependencies can be updated and collections
      // and environments are visible
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('createOrUpdate', MODEL_SYNC_WORKSPACE, workspace), Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('createOrUpdate', MODEL_WORKSPACE, workspace)];
    },

    /**
        * Update changeset to event
        * @param  {Object} changeset
        * @returns {Array.<Object>}
        */
    update(changeset) {
      let workspace = _.get(changeset, ['data', 'instance']);

      // @todo: revisit this once (Windowed Syncing)
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('createOrUpdate', MODEL_SYNC_WORKSPACE, workspace), Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('createOrUpdate', MODEL_WORKSPACE, workspace)];
    },

    destroy(changeset) {
      let workspace = _.get(changeset, ['data', 'instance']);

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])(EVENT_DELETE, MODEL_WORKSPACE_SESSION, { workspace: workspace.id }), ...getWorkspaceLeaveEvents(workspace)];
    },

    /**
        * Converts the workspace:update-roles event into a accesscontrol:update-roles event
        * @param {Object} changeset
        */
    update_roles(changeset) {
      let workspaceId = _.get(changeset, 'meta.timeline.model_id');
      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('update_roles', ACCESS_CONTROL, {
        model: MODEL_WORKSPACE,
        modelId: workspaceId })];

    } } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(2);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

const COMMENT = 'comment',
ALLOWED_KEYS = ['id', 'body', 'createdBy', 'createdAt', 'updatedAt', 'tags'];

/**
                                                                               * Parse sync changeset for comments
                                                                               *
                                                                               * @param {Object} changeset - comment changeset
                                                                               * @returns {Object} augmented comment data from changeset
                                                                               */
function getCommentFromChangeset(changeset) {
  const annotation = _.get(changeset, 'data.instance.annotation') || {},
  comment = _.get(changeset, 'data.instance.comment') || {};

  if (_.isEmpty(annotation) || _.isEmpty(comment)) {
    return null;
  }

  return _extends({}, annotation, _.pick(comment, ALLOWED_KEYS));
}

/* harmony default export */ __webpack_exports__["a"] = ({
  toAppEvents: {
    /**
                  * Fire create or update event to prevent accidental
                  * rewrites as we are adding response data.
                  *
                  * @param {Object} changeset - comment changeset
                  */
    create(changeset) {
      const data = getCommentFromChangeset(changeset);

      if (!data) {
        return [];
      }

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('createOrUpdate', COMMENT, data)];
    },

    /**
        * Fire update if exits event to prevent accidental
        * writes.
        *
        * @param {Object} changeset - comment changeset
        */
    update(changeset) {
      const data = getCommentFromChangeset(changeset);

      if (!data) {
        return [];
      }

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('updateIfExists', COMMENT, data)];
    },

    /**
        * Fire delete if exits event to prevent errors for
        * comments which may not exist.
        *
        * @param {Object} changeset - comment changeset
        */
    destroy(changeset) {
      const data = getCommentFromChangeset(changeset);

      if (!data) {
        return [];
      }

      return [Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["a" /* createEvent */])('deleteIfExists', COMMENT, data)];
    } } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIDevService__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid__);






/* harmony default export */ __webpack_exports__["a"] = (_.defaults({
  type: 'apischema',

  get(definition, cb) {
    cb = _.once(cb);

    __WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__["a" /* default */].get.call(this, {
      apiVersionId: definition.apiVersionId }).
    then(schema => {

      if (schema) {

        /**
                    * Bail out if the requested schema type
                    * does not match the schema type in DB cache
                    */
        if (!_.includes(definition.types, schema.type)) {
          return cb(null);
        }

        // call callback and return from here
        // since we got the schema in DB cache
        let schemaToBeReturned = {
          id: schema.schemaId,
          schema: schema.schema,
          type: schema.type,
          language: schema.language };


        return cb(null, schemaToBeReturned);
      }

      __WEBPACK_IMPORTED_MODULE_1__services_APIDevService__["a" /* default */].fetchSchemaForCollection(definition.modelId, definition.types).
      then(response => {
        let schemaFromResponse = _.get(response, 'body.data.schema'),
        schemaToUpdate = {
          id: __WEBPACK_IMPORTED_MODULE_4_uuid___default.a.v4(),
          schemaId: schemaFromResponse.id,
          apiId: definition.apiId,
          apiVersionId: definition.apiVersionId,
          schema: schemaFromResponse.schema,
          type: schemaFromResponse.type,
          language: schemaFromResponse.language,
          updatedAt: schemaFromResponse.updatedAt };


        __WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__["a" /* default */].get.call(this, {
          apiVersionId: definition.apiVersionId }).
        then(schema => {
          if (!schema) {
            __WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__["a" /* default */].create.call(this, schemaToUpdate).then(() => {
              let schemaToBeReturned = {
                id: schemaToUpdate.schemaId,
                schema: schemaToUpdate.schema,
                type: schemaToUpdate.type,
                language: schemaToUpdate.language };


              cb(null, schemaToBeReturned);
            }).
            then(() => {
              Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["q" /* reaction */])(() => Object(__WEBPACK_IMPORTED_MODULE_3__js_stores_get_store__["getStore"])('SyncStatusStore').isSocketConnected, isSocketConnected => {

                /**
                                                                                                   * workaround for now
                                                                                                   * to resubscribe when the socket is reconnected
                                                                                                   *
                                                                                                   * Also, used fireImmediately to subscribe
                                                                                                   * for the first time when the DB cache does not have
                                                                                                   * the data
                                                                                                   */
                isSocketConnected && this.subscribe(definition, cb);
              }, {
                fireImmediately: true });

            });
          } else {
            let schemaToBeReturned = {
              id: schemaToUpdate.schemaId,
              schema: schemaToUpdate.schema,
              type: schemaToUpdate.type,
              language: schemaToUpdate.language };

            return cb(null, schemaToBeReturned);
          }
        });
      });
    }).
    catch(error => {
      pm.logger.error('APISchemaController~get', error);
      cb(error);
    });
  },

  subscribe(definition, cb) {
    __WEBPACK_IMPORTED_MODULE_1__services_APIDevService__["a" /* default */].getSchemaForCollectionRealtimeEvents(definition.apiId, definition.apiVersionId, definition.modelId).
    subscribe(event => {
      let eventAction = _.get(event, 'meta.action'),
      eventData = _.get(event, 'data'),
      schemaId = _.get(eventData, 'schema.id'),
      schema = _.get(eventData, 'schema.schema'),
      type = _.get(eventData, 'schema.type'),
      language = _.get(eventData, 'schema.language'),
      updatedAt = _.get(eventData, 'schema.updatedAt'),
      apiId = _.get(eventData, 'apiId'),
      apiVersionId = _.get(eventData, 'apiVersionId'),
      schemaToUpdate;

      switch (eventAction) {
        case 'link':
          schemaToUpdate = {
            schemaId: schemaId,
            apiId: apiId,
            apiVersionId: apiVersionId,
            schema: schema,
            type: type,
            language: language,
            updatedAt: updatedAt };

          break;

        case 'update':
          schemaToUpdate = {
            schemaId: schemaId,
            apiId: apiId,
            apiVersionId: apiVersionId,
            schema: schema,
            type: type,
            language: language,
            updatedAt: updatedAt };

          break;

        case 'unlink':
          schemaToUpdate = {
            schemaId: schemaId,
            apiId: apiId,
            apiVersionId: apiVersionId,
            schema: schema,
            type: type,
            language: language,
            updatedAt: updatedAt };

          break;}


      __WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__["a" /* default */].update.call(this, schemaToUpdate).then(() => {
        let schemaToBeReturned = { id: schemaToUpdate.schemaId, schema: schemaToUpdate.schema, type: schemaToUpdate.type, language: schemaToUpdate.language };

        cb(null, schemaToBeReturned);
      });
    },
    error => {
      pm.logger.warn('Failed to subscribe schema for collection', error);
    });
  } },
__WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__["a" /* default */]));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_APIDevService__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_stores_get_store__ = __webpack_require__(5);





/* harmony default export */ __webpack_exports__["a"] = (_.defaults({
  type: 'apirelation',
  get(modelId, cb) {
    cb = _.once(cb);

    __WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__["a" /* default */].get.call(this, {
      id: modelId }).
    then(api => {

      if (api) {

        // call callback and return from here
        // since we got the data in DB cache
        return cb(null, api);
      }

      /**
         * get data for the API linked
         * to the collection if the collectionId
         * is not available in DB cache
         */
      __WEBPACK_IMPORTED_MODULE_1__services_APIDevService__["a" /* default */].getAPILinkedToCollection(modelId).then(response => {
        let relationToUpdate = {
          id: modelId,
          apiId: _.get(response, 'api.id'),
          apiName: _.get(response, 'api.name'),
          apiVersionId: _.get(response, 'api.versions[0].id'),
          apiCreatedAt: _.get(response, 'api.createdAt'),
          apiUpdatedAt: _.get(response, 'api.updatedAt'),
          apiVersionName: _.get(response, 'api.versions[0].name'),
          apiVersionCreatedAt: _.get(response, 'api.versions[0].createdAt'),
          apiVersionUpdatedAt: _.get(response, 'api.versions[0].updatedAt') };

        __WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__["a" /* default */].get.call(this, {
          id: modelId }).
        then(api => {
          if (!api) {
            __WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__["a" /* default */].create.call(this, relationToUpdate).then(res => {
              cb(null, res.data);
            }).
            then(() => {
              Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["q" /* reaction */])(() => Object(__WEBPACK_IMPORTED_MODULE_3__js_stores_get_store__["getStore"])('SyncStatusStore').isSocketConnected, isSocketConnected => {

                /**
                                                                                                   * workaround for now
                                                                                                   * to resubscribe when the socket is reconnected
                                                                                                   *
                                                                                                   * Also, used fireImmediately to subscribe
                                                                                                   * for the first time when the DB cache does not have
                                                                                                   * the data
                                                                                                   */
                isSocketConnected && this.subscribe(modelId, cb);
              }, {
                fireImmediately: true });

            });
          } else
          {
            return cb(null, api);
          }
        });
      });
    }).
    catch(error => {
      pm.logger.warn('APIRelationController~get', error);
      cb(null);
    });
  },

  /**
      * subscribe the collection for
      * linked API
      * realtime events
      */
  subscribe(modelId, cb) {
    this.subscription = __WEBPACK_IMPORTED_MODULE_1__services_APIDevService__["a" /* default */].getAPIForCollectionRealtimeEvents(modelId).
    subscribe(event => {
      let eventAction = _.get(event, 'meta.action'),
      eventData = _.get(event, 'data'),
      eventModel = _.get(event, 'meta.model'),
      relationToUpdate;

      if (eventModel === 'api') {
        let apiId = _.get(eventData, 'api.id'),
        apiName = _.get(eventData, 'api.name'),
        apiCreatedAt = _.get(eventData, 'api.createdAt'),
        apiUpdatedAt = _.get(eventData, 'api.updatedAt');

        switch (eventAction) {
          case 'update':
            relationToUpdate = {
              id: modelId,
              apiId: apiId,
              apiName: apiName,
              apiCreatedAt: apiCreatedAt,
              apiUpdatedAt: apiUpdatedAt };

            break;

          case 'link':
            relationToUpdate = {
              id: modelId,
              apiId: apiId,
              apiName: apiName,
              apiCreatedAt: apiCreatedAt,
              apiUpdatedAt: apiUpdatedAt,
              apiVersionId: _.get(eventData, 'apiVersion.id'),
              apiVersionName: _.get(eventData, 'apiVersion.name'),
              apiVersionCreatedAt: _.get(eventData, 'apiVersion.createdAt'),
              apiVersionUpdatedAt: _.get(eventData, 'apiVersion.updatedAt') };

            break;

          case 'unlink':
            relationToUpdate = {
              id: modelId,
              apiId: '',
              apiName: '',
              apiVersionId: '',
              apiCreatedAt: '',
              apiUpdatedAt: '',
              apiVersionName: '',
              apiVersionCreatedAt: '',
              apiVersionUpdatedAt: '' };

            break;}

      } else if (eventModel === 'apiVersion') {

        let apiVersionId = _.get(eventData, 'apiVersion.id'),
        apiVersionName = _.get(eventData, 'apiVersion.name'),
        apiVersionCreatedAt = _.get(eventData, 'apiVersion.createdAt'),
        apiVersionUpdatedAt = _.get(eventData, 'apiVersion.updatedAt'),
        apiId = _.get(eventData, 'api.id');

        switch (eventAction) {
          case 'update':
            relationToUpdate = {
              id: modelId,
              apiId: apiId,
              apiVersionId: apiVersionId,
              apiVersionName: apiVersionName,
              apiVersionCreatedAt: apiVersionCreatedAt,
              apiVersionUpdatedAt: apiVersionUpdatedAt };

            break;

          case 'destroy':
          case 'create':

            // remove entry from the DB
            // and unsubscribe for the modelId
            return __WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__["a" /* default */].delete.call(this, { id: modelId }).then(res => {
              this.subscription && this.subscription.unsubscribe();
            });}

      }

      __WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__["a" /* default */].update.call(this, relationToUpdate).then(res => {
        cb(null, res);
      });
    }, error => {
      pm.logger.warn('Failed to subscribe collection for linked API', error);
    });
  } },
__WEBPACK_IMPORTED_MODULE_0__js_modules_controllers_ListController__["a" /* default */]));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export splitMetaEvents */
/* unused harmony export getModelFromMessage */
/* unused harmony export getActionFromMessage */
/* unused harmony export validateChangeset */
/* harmony export (immutable) */ __webpack_exports__["a"] = buildChangesetFromMessage;
/* unused harmony export sanitize */
/* unused harmony export getEventFromChangeset */
/* unused harmony export getTimelineEventsFromChangeset */
/* unused harmony export inflateChangeset */
/* unused harmony export dispatchEvent */
/* harmony export (immutable) */ __webpack_exports__["b"] = dispatchTimelineEvents;
/* harmony export (immutable) */ __webpack_exports__["c"] = processIncomingChangeset;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_sync_helpers_create_changeset__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_sync_helpers_extract_meta_changesets__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_sync_helpers_sync_api__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_pipelines_sync_action__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_sync_timeline_helpers__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_sync_incoming_models__ = __webpack_require__(966);









/**
                                                                 * If a changeset has collated meta properties like `archive`, extracts them and creates a new changeset out of it.
                                                                 *
                                                                 * @param {Object} changeset
                                                                 * @returns {Array}
                                                                 */
function splitMetaEvents(changeset) {
  let newChangesets = Object(__WEBPACK_IMPORTED_MODULE_1__modules_sync_helpers_extract_meta_changesets__["a" /* extractMetaAsChangesets */])(changeset),
  metaChangesets = [];

  // push the original changeset
  metaChangesets.push(changeset);

  _.forEach(newChangesets, function (metaChangeset) {
    // mark changeset as coming from app
    _.set(metaChangeset, ['meta', 'origin'], 'app');

    // push the meta changeset
    metaChangesets.push(metaChangeset);
  });

  return metaChangesets;
}

/**
   * Gets model from message
   *
   * @param {Object} message sync message
   * @returns {String} model
   */
function getModelFromMessage(message) {
  return _.get(message, ['meta', 'model'], message.model);
}

/**
   * Gets action from message
   *
   * @param {Object} message sync message
   * @returns {String} action
   */
function getActionFromMessage(message) {
  return _.get(message, ['meta', 'action'], message.action);
}

/**
   * Validate sync changeset
   *
   * 1. Checks if changeset is non empty
   * 2. Checks if model is present
   * 3. Checks if model is supported
   *
   * @param {Object} changeset
   *
   * @returns {Boolean}
   */
function validateChangeset(changeset) {
  if (!changeset) {
    return false;
  }

  let model = changeset.model;

  if (!model || !__WEBPACK_IMPORTED_MODULE_5__modules_sync_incoming_models__["a" /* default */][model]) {
    return false;
  }

  return true;
}


/**
   * builds app changeset from sync message
   *
   * @param {Object} message sync message
   *
   * @returns {Object}
   */
function buildChangesetFromMessage(message) {
  if (!message) {
    return;
  }

  let model = getModelFromMessage(message),
  action = getActionFromMessage(message),
  changesetData = { modelId: message.model_id },
  changesetMeta,
  owner = _.get(message, ['meta', 'owner']) || _.get(message, ['data', 'owner']);

  owner && (changesetData.owner = owner);

  // build workspace joining/leaving changeset
  if (model === 'workspace' && (action === 'joining' || action === 'leaving')) {
    changesetData.instance = { id: message.model_id };
    changesetData.user = message.data.user;
  }

  // build transfer changeset
  else if (action === 'transfer') {
      changesetData.from = {
        model: _.get(message, ['data', 'from', 'model']),
        modelId: _.get(message, ['data', 'from', 'model_id']) };


      changesetData.to = {
        model: _.get(message, ['data', 'to', 'model']),
        modelId: _.get(message, ['data', 'to', 'model_id']) };

    } else

    if (action === 'subscribe' || action === 'unsubscribe') {
      changesetData.user = _.get(message, ['data', 'user']);
    } else

    {
      changesetData.instance = message.data;
    }

  // meta can have additional keys as well
  // preserve meta and all the keys in meta (DO NOT WHITELIST OR SANITIZE)
  changesetMeta = message.meta || {};

  changesetMeta.revision = message.revision;

  return Object(__WEBPACK_IMPORTED_MODULE_0__modules_sync_helpers_create_changeset__["a" /* default */])(model, action, changesetData, changesetMeta);
}

/**
   * sanitize changeset
   *
   * @param {Object} changeset
   *
   * @returns {Object}
   */
function sanitize(changeset) {
  let {
    model,
    data } =
  changeset,
  syncModel = __WEBPACK_IMPORTED_MODULE_5__modules_sync_incoming_models__["a" /* default */][model],
  sanitize = syncModel.sanitizeFromSync;

  // no need for sanitizing this model
  if (!sanitize) {
    return changeset;
  }

  // sanitize the model from sync message
  data.instance && sanitize(data.instance);

  return changeset;
}


/**
   * construct events from changeset
   *
   * @param {Object} changeset
   *
   * @returns {Object} returns the event
   */
function getEventFromChangeset(changeset) {
  if (!changeset) {
    return [];
  }

  let changesetAction = changeset.action,
  changesetModel = changeset.model,
  model = __WEBPACK_IMPORTED_MODULE_5__modules_sync_incoming_models__["a" /* default */][changesetModel],
  handler;

  // no model for sync changeset
  if (!model) {
    pm.logger.error(new Error('Unknown model' + changesetModel));
    return [];
  }

  // find handler in the sync model, or in the default
  handler = _.get(model, ['toAppEvents', changesetAction]);

  // no handler for sync changeset action
  // sync sent a changeset action that this version of the app doesn't understand
  if (!handler) {
    return [];
  }

  return handler && handler(changeset);
}

/**
   * Get events that affect timelines
   *
   * @param {Object} changeset
   *
   * @returns {Object} returns the event
   */
function getTimelineEventsFromChangeset(changeset) {
  if (!changeset) {
    return [];
  }

  let changesetAction = changeset.action,
  changesetModel = changeset.model,
  model = __WEBPACK_IMPORTED_MODULE_5__modules_sync_incoming_models__["a" /* default */][changesetModel],
  handler;

  // @todo: windowed-syncing: move this common to model layer events and timeline events
  // no model for sync changeset
  if (!model) {
    pm.logger.error(new Error('Unknown model' + changesetModel));
    return [];
  }

  // find handler in the sync model
  handler = _.get(model, ['toTimelineEvents', changesetAction]);

  // no handler for sync changeset action
  // sync sent a changeset action that this version of the app doesn't understand
  if (!handler) {
    return [];
  }

  return handler && handler(changeset);
}

/**
   * Populate a partial changeset
   *
   * @param {Object} changeset
   *
   * @returns {Promise.<Object>}
   */
async function inflateChangeset(changeset) {
  if (!_.get(changeset, ['meta', 'partial'])) {
    return changeset;
  }

  return new Promise((resolve, reject) => {
    Object(__WEBPACK_IMPORTED_MODULE_2__modules_sync_helpers_sync_api__["b" /* findOne */])(changeset.model, { id: changeset.data.modelId }, { populate: true, owner: _.get(changeset, ['data', 'owner']) }, (err, model, rawMessage) => {
      if (err) {
        return reject(err);
      }

      resolve({ model, rawMessage });
    });
  }).
  then(({ model, rawMessage }) => {
    changeset.data.instance = model;

    // merge meta from the find one call without the `find` action
    // and set `partial` flag to false
    _.merge(changeset.meta, _.omit(rawMessage.meta, ['action']), { partial: false });

    return changeset;
  });
}

/**
   * dispatch events on sync action pipeline
   *
   * @param {Array} events
   */
async function dispatchEvent(events) {
  return _.reduce(events, (promise, event) => {
    return promise.then(() => {
      return Object(__WEBPACK_IMPORTED_MODULE_3__modules_pipelines_sync_action__["a" /* default */])(event).
      catch(err => {

        // log the error and proceed committing the next event
        console.warn(err);
      });
    });
  }, Promise.resolve());
}

/**
   * Apply timeline related events.
   *
   * @param {Array.<Object>} events
   */
async function dispatchTimelineEvents(events) {
  return events.reduce((acc, event) => {
    return acc.then(() => {
      switch (event.name) {
        case 'create':
          // at this point we do not know if the new timeline is in syncing window or not
          // so always subscribe
          // we rely on the unsubscribe timer to clean the unused subscriptions
          // also dont wait for each timeline to sync and be subscribed
          // else will sync everything one by one and will loose the advantage of windowed syncing
          Object(__WEBPACK_IMPORTED_MODULE_4__modules_sync_timeline_helpers__["d" /* syncAndSubscribeTimeline */])(event.data);
          break;
        case 'delete':
          return Object(__WEBPACK_IMPORTED_MODULE_4__modules_sync_timeline_helpers__["e" /* terminateTimeline */])(event.data);}

    });
  }, Promise.resolve([]));
}

/**
   * Processes one single sync changeset for app.
   *
   * @param {Object} changeset
   *
   * @returns {Promise.<Object>} a promise that resolves with the changeset
   */
async function processIncomingChangeset(changeset) {
  // filter off invalid changesets
  if (!validateChangeset(changeset)) {
    return;
  }

  let perfMarkerId = `incomingChangesetStart:${Date.now()}`,
  timelineEvents = [],
  sanitizedChangeset,
  appEvents = [];

  performance.mark(perfMarkerId);

  // inflate the body of the changeset for any `partial` changeset
  await inflateChangeset(changeset);

  let changesets = splitMetaEvents(changeset);

  _.forEach(changesets, changeset => {
    // sanitize the body of the changeset
    sanitizedChangeset = sanitize(changeset);

    // translate the changeset into events that can be applied on the app
    // each changeset could return one or more timeline events and/or model layer events
    timelineEvents = timelineEvents.concat(getTimelineEventsFromChangeset(sanitizedChangeset));
    appEvents = appEvents.concat(getEventFromChangeset(sanitizedChangeset));
  });

  // apply all the events for each changeset
  await Promise.all([
  dispatchTimelineEvents(timelineEvents),
  dispatchEvent(appEvents)]);


  performance.measure('incomingChangesetProcessing', perfMarkerId);

  // return the changeset to the consumer
  return sanitizedChangeset;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })

},[1666]);