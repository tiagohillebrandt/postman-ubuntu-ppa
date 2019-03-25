webpackJsonp([23],{

/***/ 1200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (tasks, callback) {
    callback = (0, _once2.default)(callback || _noop2.default);
    if (!(0, _isArray2.default)(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
    if (!tasks.length) return callback();
    var taskIndex = 0;

    function nextTask(args) {
        var task = (0, _wrapAsync2.default)(tasks[taskIndex++]);
        args.push((0, _onlyOnce2.default)(next));
        task.apply(null, args);
    }

    function next(err /*, ...args*/) {
        if (err || taskIndex === tasks.length) {
            return callback.apply(null, arguments);
        }
        nextTask((0, _slice2.default)(arguments, 1));
    }

    nextTask([]);
};

var _isArray = __webpack_require__(168);

var _isArray2 = _interopRequireDefault(_isArray);

var _noop = __webpack_require__(188);

var _noop2 = _interopRequireDefault(_noop);

var _once = __webpack_require__(612);

var _once2 = _interopRequireDefault(_once);

var _slice = __webpack_require__(494);

var _slice2 = _interopRequireDefault(_slice);

var _onlyOnce = __webpack_require__(613);

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _wrapAsync = __webpack_require__(172);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/**
 * Runs the `tasks` array of functions in series, each passing their results to
 * the next in the array. However, if any of the `tasks` pass an error to their
 * own callback, the next function is not executed, and the main `callback` is
 * immediately called with the error.
 *
 * @name waterfall
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
 * to run.
 * Each function should complete with any number of `result` values.
 * The `result` values will be passed as arguments, in order, to the next task.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This will be passed the results of the last task's
 * callback. Invoked with (err, [results]).
 * @returns undefined
 * @example
 *
 * async.waterfall([
 *     function(callback) {
 *         callback(null, 'one', 'two');
 *     },
 *     function(arg1, arg2, callback) {
 *         // arg1 now equals 'one' and arg2 now equals 'two'
 *         callback(null, 'three');
 *     },
 *     function(arg1, callback) {
 *         // arg1 now equals 'three'
 *         callback(null, 'done');
 *     }
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 *
 * // Or, with named functions:
 * async.waterfall([
 *     myFirstFunction,
 *     mySecondFunction,
 *     myLastFunction,
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 * function myFirstFunction(callback) {
 *     callback(null, 'one', 'two');
 * }
 * function mySecondFunction(arg1, arg2, callback) {
 *     // arg1 now equals 'one' and arg2 now equals 'two'
 *     callback(null, 'three');
 * }
 * function myLastFunction(arg1, callback) {
 *     // arg1 now equals 'three'
 *     callback(null, 'done');
 * }
 */

/***/ }),

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_sync_models__ = __webpack_require__(276);



/**
                                                  * Extracts all the events which have convertors. This is used as the reference list for `processEvent`.
                                                  * All events, not part of this list are ignored.
                                                  *
                                                  * @param {Object} models
                                                  * @returns {Array<String>}
                                                  */
function extractEventsWithListeners(models) {
  // 1. for each sync model
  return _.reduce(models, function (activeListeners, syncModel) {
    let convertors = _.get(syncModel, ['toChangesets']);

    // 1.a. if the model has convertors defined
    // 1.b. accumulate the convertors
    convertors && (activeListeners = activeListeners.concat(_.keys(convertors)));

    return activeListeners;
  }, []);
}

// extract a list of all event listeners from all sync models
let interestedEvents = extractEventsWithListeners(__WEBPACK_IMPORTED_MODULE_1__modules_sync_models__["a" /* default */]);

/**
                                                                *
                                                                */
function eventToChangesets(event, callback) {
  if (!event) {
    return callback(null, []);
  }

  let changesets = [];

  Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["i" /* processEvent */])(event, interestedEvents, function (childEvent, cb) {
    let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["g" /* getEventNamespace */])(childEvent),
    eventName = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["f" /* getEventName */])(childEvent),
    handler;

    // unsupported model
    if (!__WEBPACK_IMPORTED_MODULE_1__modules_sync_models__["a" /* default */][eventNamespace]) {
      return cb();
    }

    // 1. find handler in sync-models
    // 2. if not found, find handler in default sync-model
    handler = _.get(__WEBPACK_IMPORTED_MODULE_1__modules_sync_models__["a" /* default */][eventNamespace], ['toChangesets', eventName]) ||
    _.get(__WEBPACK_IMPORTED_MODULE_1__modules_sync_models__["a" /* default */].default, ['toChangesets', eventName]);

    // this should never happen
    if (!handler) {
      return cb();
    }

    // convert events to changesets and accumulate
    changesets = changesets.concat(handler(childEvent, event));

    return cb();
  }, function () {
    callback && callback(null, changesets);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (eventToChangesets);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Bucket: __webpack_require__(800),
  SyncClient: __webpack_require__(2868)
};


/***/ }),

/***/ 1203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_controllers_CollectionController__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_HeaderPresetController__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_HistoryController__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_HistoryResponseController__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_EnvironmentController__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_GlobalsController__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_WorkspaceController__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_CollectionRunController__ = __webpack_require__(283);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};








/**
                                                                                       * Build and return not found error
                                                                                       *
                                                                                       * @param {String} entity entity name
                                                                                       * @param {String} id entity id
                                                                                       * @returns {Error} error object
                                                                                       */
function EntityNotFoundError(entity, id) {
  return new Error(`ENTITY_NOT_FOUND (${entity}:${id})`);
}

/**
   * sanitize instance based on
   * opts.whitelist
   * opts.select
   *
   * @param {any} instance
   * @param {any} opts
   */
function sanitizeInstance(instance, opts) {
  if (!opts) {
    return instance;
  }

  let {
    whitelist = [],
    select = [] } =
  opts;

  if (_.isEmpty(whitelist) && _.isEmpty(select)) {
    return instance;
  }

  if (_.isEmpty(whitelist) && !_.isEmpty(select)) {
    return _.pick(instance, select);
  }

  if (!_.isEmpty(whitelist) && _.isEmpty(select)) {
    return _.pick(instance, whitelist);
  }

  let selectedWhitelist = _.intersection(whitelist, select);
  return _.pick(instance, selectedWhitelist);
}

/**
   * getInstance from DB
   *
   * @param {String} entity entity name
   * @param {String} id entity id
   * @param {?Object} opts query options
   * @param {Function} cb node style cb
   */
function getInstance(entity, id, opts, cb) {
  // console.log('db.getInstance', entity, id, opts);

  switch (entity) {
    case 'collection':
      getCollectionInstance(id, opts, cb);break;
    case 'folder':
      getFolderInstance(id, opts, cb);break;
    case 'request':
      getRequestInstance(id, opts, cb);break;
    case 'response':
      getResponseInstance(id, opts, cb);break;
    case 'globals':
      getGlobalsInstance(id, opts, cb);break;
    case 'environment':
      getEnvironmentInstance(id, opts, cb);break;
    case 'history':
      getHistoryInstance(id, opts, cb);break;
    case 'historyresponse':
      getHistoryResponseInstance(id, opts, cb);break;
    case 'user':
      getUserInstance(id, opts, cb);break;
    case 'headerpreset':
      getHeaderPresetInstance(id, opts, cb);break;
    case 'workspace':
      getWorkspaceInstance(id, opts, cb);break;
    case 'collectionrun':
      getCollectionRunInstance(id, opts, cb);break;
    default:
      console.trace(new Error(
      'Unrecognised entity: ' + entity + ' id: ' + id));}



}

/**
   * Get controller fetch options from DatabaseService options
   *
   * @param {Object} opts
   * @returns
   */
function getControllerOptions(opts) {
  let controllerOpts = {};

  if (opts && opts.populateAll) {
    controllerOpts.populate = true;
  }

  return controllerOpts;
}

/**
   * get workspace instance
   *
   * @param {String} id instance id
   * @param {Object} opts query options
   * @param {Function} cb node style callback
   * @returns {undefined}
   */
function getWorkspaceInstance(id, opts, cb) {
  __WEBPACK_IMPORTED_MODULE_6__modules_controllers_WorkspaceController__["a" /* default */].get({ id }, getControllerOptions(opts)).
  then(workspace => {
    if (!workspace) {
      console.error('DBS.getInstance err');
      cb(null);
      return;
    }

    let sanitized = sanitizeInstance(workspace, _extends({}, opts));

    cb(null, sanitized);
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(null);
  });
}

/**
   * get collection instance
   *
   * @param {String} id instance id
   * @param {Object} opts query options
   * @param {Function} cb node style callback
   * @returns {undefined}
   */
function getCollectionInstance(id, opts, cb) {
  __WEBPACK_IMPORTED_MODULE_0__modules_controllers_CollectionController__["a" /* default */].getCollection({ id }, getControllerOptions(opts)).
  then(collection => {
    let sanitized = sanitizeInstance(collection, _extends({}, opts));

    cb(null, sanitized);
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(null);
  });
}

/**
   * get folder instance
   *
   * @param {String} id instance id
   * @param {Object} opts query options
   * @param {Function} cb node style callback
   * @returns {undefined}
   */
function getFolderInstance(id, opts, cb) {
  __WEBPACK_IMPORTED_MODULE_0__modules_controllers_CollectionController__["a" /* default */].getFolder({ id }, getControllerOptions(opts)).
  then(folder => {
    let sanitized = sanitizeInstance(folder, _extends({}, opts));

    cb(null, sanitized);
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(null);
  });
}

/**
   * get request instance
   *
   * @param {String} id instance id
   * @param {Object} opts query options
   * @param {Function} cb node style callback
   * @returns {undefined}
   */
function getRequestInstance(id, opts, cb) {
  __WEBPACK_IMPORTED_MODULE_0__modules_controllers_CollectionController__["a" /* default */].getRequest({ id }, getControllerOptions(opts)).
  then(request => {
    let sanitized = sanitizeInstance(request, _extends({}, opts));

    cb(null, sanitized);
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(null);
  });
}

/**
   * get response instance
   *
   * @param {String} id instance id
   * @param {Object} opts query options
   * @param {Function} cb node style callback
   * @returns {undefined}
   */
function getResponseInstance(id, opts, cb) {
  __WEBPACK_IMPORTED_MODULE_0__modules_controllers_CollectionController__["a" /* default */].getResponse({ id }, getControllerOptions(opts)).
  then(response => {
    let sanitized = sanitizeInstance(response, _extends({}, opts));

    cb(null, sanitized);
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(null);
  });
}

/**
   * get environment instance
   *
   * @param {String} id instance id
   * @param {Object} opts query options
   * @param {Function} cb node style callback
   * @returns {undefined}
   */
function getGlobalsInstance(id, opts, cb) {
  __WEBPACK_IMPORTED_MODULE_5__modules_controllers_GlobalsController__["a" /* default */].get({ id }).
  then(globals => {
    let sanitizedGlobals = null;

    if (!globals) {
      cb(null);
      return;
    }

    sanitizedGlobals = sanitizeInstance(globals, _extends({},
    opts, {
      whitelist: [
      'id',
      'workspace',
      'name',
      'values'] }));



    cb(null, sanitizedGlobals);
    return;
  }).catch(error => {
    console.error('Error getting globals instance. Check `getGlobalsInstance` in DatabaseService', error);
    cb(null);
  });
}

/**
   * get environment instance
   *
   * @param {String} id instance id
   * @param {Object} opts query options
   * @param {Function} cb node style callback
   * @returns {undefined}
   */
function getEnvironmentInstance(id, opts, cb) {
  __WEBPACK_IMPORTED_MODULE_4__modules_controllers_EnvironmentController__["a" /* default */].get({ id }).
  then(environment => {
    let sanitizedEnvironment = null;

    if (!environment) {
      cb(null);
      return;
    }

    sanitizedEnvironment = sanitizeInstance(environment, _extends({},
    opts, {
      whitelist: [
      'id',
      'name',
      'values',
      'owner'] }));



    cb(null, sanitizedEnvironment);
    return;
  }).catch(error => {
    console.error('Error getting environment instance. Check `getEnvironmentInstance` in DatabaseService', error);
    cb(null);
  });
}

/**
   * get user instance
   * used for globals alone
   *
   * @param {String} id id
   * @param {Object} opts query options
   * @param {Function} cb node style callback
   * @returns {undefined}
   */
function getUserInstance(id, opts, cb) {
  __WEBPACK_IMPORTED_MODULE_5__modules_controllers_GlobalsController__["a" /* default */].
  get({ workspace: 'personal' }).
  then(function (globals) {
    if (!globals) {
      console.error('DBS.getInstance err');
      return cb(null);
    }

    return cb(null, { globals: globals.values });
  }).
  catch(function (e) {
    console.error('DBS.getInstance err', e);
    cb(null);
  });
}

/**
   * get headerpreset instance
   *
   * @param {String} id instance id
   * @param {Object} opts query options
   * @param {Function} cb node style callback
   * @returns {undefined}
   */
function getHeaderPresetInstance(id, opts, cb) {
  __WEBPACK_IMPORTED_MODULE_1__modules_controllers_HeaderPresetController__["a" /* default */].
  get({ id }).then(headerPreset => {
    if (!headerPreset) {
      console.error('DBS.getInstance err');
      cb(null);
      return;
    }

    let sanitizedHeaderPreset = sanitizeInstance(headerPreset, _extends({}, opts));

    cb(null, sanitizedHeaderPreset);
    return;
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(null);
    return;
  });
}

/**
   * get history instance
   *
   * @param {String} id instance id
   * @param {Object} opts query options
   * @param {Function} cb node style callback
   * @returns {undefined}
   */
function getHistoryInstance(id, opts, cb) {
  __WEBPACK_IMPORTED_MODULE_2__modules_controllers_HistoryController__["a" /* default */].
  get({ id }, getControllerOptions(opts)).then(history => {
    if (!history) {
      console.error('DBS.getInstance err');
      cb(null);
      return;
    }

    let sanitized = sanitizeInstance(history, _extends({}, opts));

    cb(null, sanitized);
    return;
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(null);
    return;
  });
}

/**
   * get history response instance
   *
   * @param {String} id instance id
   * @param {Object} opts query options
   * @param {Function} cb node style callback
   * @returns {undefined}
   */
function getHistoryResponseInstance(id, opts, cb) {
  __WEBPACK_IMPORTED_MODULE_3__modules_controllers_HistoryResponseController__["a" /* default */].
  get({ id }).then(historyResponse => {
    if (!historyResponse) {
      console.error('DBS.getInstance err');
      cb(null);
      return;
    }

    let sanitized = sanitizeInstance(historyResponse, _extends({}, opts));

    cb(null, sanitized);
    return;
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(null);
    return;
  });
}

/**
   * get bucket models
   *
   * @returns
   */
function getBucketModel() {

  /**
                            * custom updateOrCreate method
                            *
                            * @param {any} id
                            * @param {any} data
                            * @param {any} callback
                            */
  function updateOrCreate(id, data, callback) {
    pm.models.syncclientbucket.findOne(id).
    then(bucket => {
      if (!bucket) {
        pm.models.syncclientbucket.create(data, callback);
        return;
      }

      pm.models.syncclientbucket.update(id, data, callback);
      return;
    }).
    catch(err => {
      callback(null);
    });
  }

  // HACK :(
  pm.models.syncclientbucket.updateOrCreate = updateOrCreate;

  return pm.models.syncclientbucket;
}

/**
   * get collectionrun instance
   *
   * @param {String} id instance id
   * @param {Object} opts query options
   * @param {Function} cb node style callback
   * @returns {undefined}
   */
function getCollectionRunInstance(id, opts, cb) {
  __WEBPACK_IMPORTED_MODULE_7__modules_controllers_CollectionRunController__["a" /* default */].
  get({ id }).then(collectionRun => {
    if (!collectionRun) {
      console.error('DBS.getInstance err');
      cb(null);
      return;
    }

    let sanitizedCollectionRun = sanitizeInstance(collectionRun, _extends({}, opts));

    cb(null, sanitizedCollectionRun);
    return;
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(null);
    return;
  });
}

/**
   * build and return DatabaseService
   *
   * @returns
   */
function getService() {
  return {
    getInstance: getInstance,
    models: { bucket: getBucketModel() } };

}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1204:
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};


/***/ }),

/***/ 1205:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = isBuf;

var withNativeBuffer = typeof global.Buffer === 'function' && typeof global.Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof global.ArrayBuffer === 'function';

var isView = (function () {
  if (withNativeArrayBuffer && typeof global.ArrayBuffer.isView === 'function') {
    return global.ArrayBuffer.isView;
  } else {
    return function (obj) { return obj.buffer instanceof global.ArrayBuffer; };
  }
})();

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (withNativeBuffer && global.Buffer.isBuffer(obj)) ||
          (withNativeArrayBuffer && (obj instanceof global.ArrayBuffer || isView(obj)));
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 1207:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var eio = __webpack_require__(2886);
var Socket = __webpack_require__(1213);
var Emitter = __webpack_require__(291);
var parser = __webpack_require__(801);
var on = __webpack_require__(1214);
var bind = __webpack_require__(1215);
var debug = __webpack_require__(578)('socket.io-client:manager');
var indexOf = __webpack_require__(1212);
var Backoff = __webpack_require__(2902);

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};


/***/ }),

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies
 */

var XMLHttpRequest = __webpack_require__(802);
var XHR = __webpack_require__(2889);
var JSONP = __webpack_require__(2898);
var websocket = __webpack_require__(2899);

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 1209:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(803);
var parseqs = __webpack_require__(579);
var parser = __webpack_require__(292);
var inherit = __webpack_require__(580);
var yeast = __webpack_require__(1211);
var debug = __webpack_require__(581)('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = __webpack_require__(802);
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};


/***/ }),

/***/ 1210:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __webpack_require__(2891);

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' ||
                        typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' ||
                        typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj)) ||
    (typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
    (withNativeBlob && obj instanceof Blob) ||
    (withNativeFile && obj instanceof File)
  ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12).Buffer))

/***/ }),

/***/ 1211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;


/***/ }),

/***/ 1212:
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var parser = __webpack_require__(801);
var Emitter = __webpack_require__(291);
var toArray = __webpack_require__(2901);
var on = __webpack_require__(1214);
var bind = __webpack_require__(1215);
var debug = __webpack_require__(578)('socket.io-client:socket');
var parseqs = __webpack_require__(579);
var hasBin = __webpack_require__(1210);

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';

  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};

/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */

Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};


/***/ }),

/***/ 1214:
/***/ (function(module, exports) {


/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}


/***/ }),

/***/ 1215:
/***/ (function(module, exports) {

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};


/***/ }),

/***/ 1216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, _) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipelines_app_action__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_GateKeeperController__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_event__ = __webpack_require__(2);




const GATEKEEPER = 'gatekeeper',
WEBSOCKET = 'websocket',
SYNC = 'sync',
NOTIFICATION = 'notification',
MAX_FAILURE_RETRY = 5,
INITIAL_FAILURE_TIMEOUT = 60,
FAILURE_TIMEOUT_INCREMENT_IN_SEC = 60;

let gatekeeperChannel,
retryTimeOut,
failureTimeOut,
continuousFailureAttempt = 0,
failureRetryTimeOutInSec = INITIAL_FAILURE_TIMEOUT;

/**
                                                     * Initiator
                                                     * Attaches the handler for the app-events to handler the sync
                                                     */
function init() {
  gatekeeperChannel = pm.eventBus.channel(GATEKEEPER);
  pm.eventBus.channel('model-events').subscribe(handleModelEvents);
}

/**
   * @method handleModelEvents
   * @param {Object} event
   */
function handleModelEvents(event) {
  let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["g" /* getEventNamespace */])(event);
  if (eventNamespace === 'user') {
    Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["i" /* processEvent */])(event, ['bootstrappedUser'], handleGateKeeperRefresh);
  } else

  if (eventNamespace === 'team') {
    Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["i" /* processEvent */])(event, ['activated', 'deactivated', 'planChanged'], handleGateKeeperRefresh);
  } else

  if (eventNamespace === 'gatekeeper') {
    Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["i" /* processEvent */])(event, ['remoteFetched'], handleGateKeeperRefreshedEvent);
  }
}

/**
   * Handler for gatekeeper refreshing
   * @method handleGateKeeperRefresh
   *
   */
function handleGateKeeperRefresh(event, cb) {
  // It can happen async no need to wait for the whole side effects
  process.nextTick(cb);

  Object(__WEBPACK_IMPORTED_MODULE_0__pipelines_app_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])('remoteFetch', 'gatekeeper')).
  then(response => {
    // Resetting the continuousFailureAttempt to zero;
    continuousFailureAttempt = 0;
    failureRetryTimeOutInSec = INITIAL_FAILURE_TIMEOUT;
  }).
  catch(err => {
    pm.logger.warn('GateKeeperService~handleGateKeeperRefresh error', err);

    continuousFailureAttempt = continuousFailureAttempt + 1;

    if (continuousFailureAttempt >= MAX_FAILURE_RETRY) {
      return;
    }

    setFailureTimeout();
  });
}

/**
   * Handler for gateKeeper refresh events
   * @param {Object} eventData
   */
function handleGateKeeperRefreshedEvent(event, cb) {
  // It can happen async no need to wait for the whole side effects
  process.nextTick(cb);

  if (Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["g" /* getEventNamespace */])(event) !== 'gatekeeper') {
    return;
  }

  let meta = Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["e" /* getEventMeta */])(event) || {},
  previousKeys = meta.previousKeys || [];

  __WEBPACK_IMPORTED_MODULE_1__controllers_GateKeeperController__["a" /* default */].getAll({}).
  then(currentKeys => {
    if (!currentKeys) {
      // If current keys are empty throw an error which should not happen
      pm.logger.error('GateKeeperService~handleGateKeeperRefreshedEvent Current keys are empty');
      return;
    }

    _.map(currentKeys, key => {
      let previousKey = _.find(previousKeys, { type: key.type });

      // This should call the toggle
      // 1. If the key is not there previously
      // 2. If the pervious value is different from the current value
      if (!previousKey || key.value !== previousKey.value) {
        _handleKeyToggler(key);
      }
    });
  });

  setRetryTimeout(meta);
}

/**
   * @method setFailureTimeout
   * @descriptions It sets the timeout for retry the gatekeeper refresh
   */
function setFailureTimeout() {

  clearTimeout(retryTimeOut);
  clearTimeout(failureTimeOut);

  failureTimeOut = setTimeout(handleGateKeeperRefresh, failureRetryTimeOutInSec * 1000);

  failureRetryTimeOutInSec = failureRetryTimeOutInSec + FAILURE_TIMEOUT_INCREMENT_IN_SEC;
}

/**
   * @method setRetryTimeout
   * @descriptions It sets the timeout for retry the gatekeeper refresh
   * @param {Object} options
   * @param {Number} options.retryAfterInSeconds
   */
function setRetryTimeout(options = {}) {
  let { retryAfterInSeconds } = options;

  if (!retryAfterInSeconds || typeof retryAfterInSeconds !== 'number') {
    pm.logger.error('GateKeeperService~setRetryTimeout Invalid Retry timeout value ', retryAfterInSeconds);
    return;
  }

  clearTimeout(retryTimeOut);
  clearTimeout(failureTimeOut);

  retryTimeOut = setTimeout(handleGateKeeperRefresh, retryAfterInSeconds * 1000);
}

/**
   * @private
   * @method _handleKeyToggler
   * @param {Object} key
   * It calls the appropriate toggle functions for key type
   */
function _handleKeyToggler(key = {}) {
  switch (key.type) {
    case WEBSOCKET:
      return onWebsocketToggle(key.value);
    case SYNC:
      return onSyncToggle(key.value);
    case NOTIFICATION:
      return onNotificationToggle(key.value);
    default:
      pm.logger.warn('GateKeeperService~_handleKeyToggler: Invalid key type provided', key);}

}


/**
   * Called for sync toggle
   * @param {Boolean} isEnabled
   */
function onSyncToggle(isEnabled) {
  pm.logger.info(`GateKeeperService~onSyncToggle Key value toggled for Sync to ${isEnabled}`);
  gatekeeperChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])(SYNC, GATEKEEPER, { isEnabled }));
}

/**
   * @param {Boolean} isEnabled
   */
function onNotificationToggle(isEnabled) {
  pm.logger.info(`GateKeeperService~onNotificationToggle Key value toggled for Notification to ${isEnabled}`);
  gatekeeperChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])(NOTIFICATION, GATEKEEPER, { isEnabled }));
}

/**
   *
   * @param {Boolean} isEnabled
   */
function onWebsocketToggle(isEnabled) {
  pm.logger.info(`GateKeeperService~onWebsocketToggle Key value toggled for Websocket to ${isEnabled}`);
  gatekeeperChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])(WEBSOCKET, GATEKEEPER, { isEnabled }));
}


/**
   * @method isWebSocketEnabled
   * @return Promise<Boolean>
   */
function isWebSocketEnabled() {
  return _getGateKeeperValue(WEBSOCKET);
}

/**
   * @method isSyncEnabled
   * @return Promise<Boolean>
   */
function isSyncEnabled() {
  return _getGateKeeperValue(SYNC);
}

/**
   * @method isNotificationEnabled
   * @return Promise<Boolean>
   */
function isNotificationEnabled() {
  return _getGateKeeperValue(NOTIFICATION);
}

/**
   * @private
   * @method _getGateKeeperValue
   * @param {String} keyType
   * @return Promise<Boolean>
   */
function _getGateKeeperValue(type) {
  if (!type) {
    return Promise.reject(new Error('GateKeeperService~_getGateKeeperKey: Invalid keyType' + type));
  }

  return __WEBPACK_IMPORTED_MODULE_1__controllers_GateKeeperController__["a" /* default */].get({ type }).
  then(syncKey => {
    if (!syncKey || !_.isBoolean(syncKey.value)) {
      return false;
    }

    return syncKey.value;
  }).
  catch(e => {
    pm.logger.error('GateKeeperService~_getGateKeeperKey: Error in fetching gatekeeper key', e);
    return false;
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({ init, isWebSocketEnabled, isSyncEnabled, isNotificationEnabled });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5), __webpack_require__(0)))

/***/ }),

/***/ 1217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscribeAddedModelsInWindowStream; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_sync_timeline_helpers__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_sync_helpers_SocketEventsService__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_WorkspaceSessionController__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_WorkspaceController__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_CurrentUserController__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_sync_timeline_helpers_RealtimeOutgoingSyncMessageService__ = __webpack_require__(698);












const POLLING_INTERVAL_TO_GET_MODELS = 10 * 1000, // 10 seconds
UNSUBSCRIBE_INTERVAL = 1 * 60 * 1000, // 1 minute
THROTTLE_INTERVAL_FETCH_MODELS_SYNC_WINDOW = 300; // 300 ms

let isUnsubscribeTimelineSubscriptionActive = false,
isSyncAndSubscribeTimelineSubscriptionActive = false;

/**
                                                       * Used to get the models in the sync window
                                                       *
                                                       * @returns {Promise Array.<Object>}
                                                       */
async function getModelsInSyncWindow() {

  // find user
  let user = await __WEBPACK_IMPORTED_MODULE_6__modules_controllers_CurrentUserController__["a" /* default */].get();

  // bail out if user is missing(during logout) or signed out user
  if (!user || user.id === '0') {
    return [];
  }

  // find the windows
  let windowRecords = (await pm.models.window.find()) || []; // WindowController not used here because it is not available in renderer process

  // find active workspace sessions for those windows
  let activeWorkspaceSessions = (await __WEBPACK_IMPORTED_MODULE_4__modules_controllers_WorkspaceSessionController__["a" /* default */].getAll({ id: windowRecords.map(w => w.activeSession) })) || [];

  // find workspaces for those sessions
  let activeWorkspaces = (await __WEBPACK_IMPORTED_MODULE_5__modules_controllers_WorkspaceController__["a" /* default */].getAll({ id: activeWorkspaceSessions.map(s => s.workspace) })) || [];

  let activeTimelineIds = [];

  // push user, user is always in sync window
  activeTimelineIds.push({ model: 'user', modelId: user.id });

  _.forEach(activeWorkspaces, workspace => {
    activeTimelineIds.push({
      model: 'workspace',
      modelId: workspace.id });


    if (!workspace.dependencies) {
      return;
    }

    _.forEach(workspace.dependencies.collections, collectionUid => {
      activeTimelineIds.push({
        model: 'collection',
        modelId: collectionUid });

    });

    _.forEach(workspace.dependencies.environments, environmentUid => {
      activeTimelineIds.push({
        model: 'environment',
        modelId: environmentUid });

    });
  });

  return activeTimelineIds;
}


/**
   * An observable that emits
   */
let workspaceChanges$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["a" /* Observable */](function (observer) {
  let unsubscribeFromModelEvents = pm.eventBus.channel('model-events').subscribe(event => {
    observer.next(event);
  });

  return function () {
    unsubscribeFromModelEvents && unsubscribeFromModelEvents();
  };
}).
pipe(
Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["d" /* filter */])(event => {
  let eventName = Object(__WEBPACK_IMPORTED_MODULE_7__modules_model_event__["f" /* getEventName */])(event),
  eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_7__modules_model_event__["g" /* getEventNamespace */])(event);

  if (eventName === 'switchWorkspace' && eventNamespace === 'workspace') {
    return true;
  }
}));


/**
      * Observable that emits one value when a model is craeted locally.
      * Note that this is listening to changesets created on sync client instead of models created on DB.
      * This makes sure that when we attempt syncing, the item is present on the sync client.
      */
let localModelCreates$ = Object(__WEBPACK_IMPORTED_MODULE_8__modules_sync_timeline_helpers_RealtimeOutgoingSyncMessageService__["a" /* getRealtimeOutgoingMessagesObservable */])().
pipe(
Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["d" /* filter */])(changeset => {
  if (!changeset) {
    return false;
  }

  if (changeset.model === 'collection' && (changeset.action === 'import' || changeset.action === 'create')) {
    return true;
  }

  if (changeset.model === 'environment' && (changeset.action === 'import' || changeset.action === 'create')) {
    return true;
  }

  return false;
}));


// merge all events that can change the models that need to be synced
// add a timer to recover any events we miss
// throttle the events
// then read the current list of models to sync
const modelsInSyncWindowObservable$ = Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["i" /* merge */])(workspaceChanges$, localModelCreates$, Object(__WEBPACK_IMPORTED_MODULE_3__modules_sync_helpers_SocketEventsService__["a" /* getSocketConnectsObservable */])(), Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["h" /* interval */])(POLLING_INTERVAL_TO_GET_MODELS)).
pipe(
Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["l" /* throttleTime */])(THROTTLE_INTERVAL_FETCH_MODELS_SYNC_WINDOW, __WEBPACK_IMPORTED_MODULE_0_rxjs__["d" /* asyncScheduler */], { leading: true, trailing: true }),
Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["c" /* concatMap */])(getModelsInSyncWindow),
Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["i" /* share */])());
/* harmony export (immutable) */ __webpack_exports__["a"] = modelsInSyncWindowObservable$;




/**
           * Similar to modelsInSyncWindowObservable$
           *
           * Includes terminating when socket disconnects and a tickle whenever socket connects
           */
let modelsInSyncWindowWithComplete$ = Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["i" /* merge */])(modelsInSyncWindowObservable$).
pipe(
Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["k" /* takeUntil */])(Object(__WEBPACK_IMPORTED_MODULE_3__modules_sync_helpers_SocketEventsService__["b" /* getSocketDisconnectsObservable */])()));


/**
                                               */
function syncAndSubscribeTimelineSubscription() {
  // should bail out to refrain from adding more subscriptions
  if (isSyncAndSubscribeTimelineSubscriptionActive) {
    return;
  }

  // this observable completes when the socket disconnects
  modelsInSyncWindowWithComplete$.
  subscribe(modelsInWindow => {
    _.forEach(modelsInWindow, timelineId => {
      Object(__WEBPACK_IMPORTED_MODULE_2__modules_sync_timeline_helpers__["c" /* syncAndSubscribeTimeline */])(timelineId);
    });
  }, () => {
    pm.logger.error('SyncWindowService~syncAndSubscribeTimelineSubscription: Error in the active models in window stream');

    // this is needed so on complete to reset the flag
    isSyncAndSubscribeTimelineSubscriptionActive = false;
  }, () => {
    // this is needed so on complete to reset the flag
    isSyncAndSubscribeTimelineSubscriptionActive = false;
  });
}

/**
   */
function unsubscribeTimelineSubscription() {
  // should bail out to refrain from adding more subscriptions
  if (isUnsubscribeTimelineSubscriptionActive) {
    return;
  }

  // this observable completes when the socket disconnects
  modelsInSyncWindowWithComplete$.
  pipe(
  Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["l" /* throttleTime */])(UNSUBSCRIBE_INTERVAL, __WEBPACK_IMPORTED_MODULE_0_rxjs__["d" /* asyncScheduler */], { leading: false, trailing: true })).

  subscribe(modelsInSyncWindow => {
    let subscribedModels = Object(__WEBPACK_IMPORTED_MODULE_2__modules_sync_timeline_helpers__["a" /* getSubscribedTimelines */])();

    let timelinesToUnsubscribe = _.differenceWith(subscribedModels, modelsInSyncWindow, (item1, item2) => {
      return item1.model === item2.model && item1.modelId === item2.modelId;
    });

    _.forEach(timelinesToUnsubscribe, timelineId => {
      Object(__WEBPACK_IMPORTED_MODULE_2__modules_sync_timeline_helpers__["f" /* unsubscribeTimeline */])(timelineId);
    });
  }, () => {
    pm.logger.error('SyncWindowService~unsubscribeTimelineSubscription: Error in the active models in window stream');

    // this is needed so on error to reset the flag
    isUnsubscribeTimelineSubscriptionActive = false;
  }, () => {

    // this is needed so on complete to reset the flag
    isUnsubscribeTimelineSubscriptionActive = false;
  });
}

/**
   * Subscribe to the added models stream
   */
function subscribeAddedModelsInWindowStream() {
  syncAndSubscribeTimelineSubscription();
  unsubscribeTimelineSubscription();
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transformLayout; });
const updatedMap = {
  REQUESTER_TAB_LAYOUT_1_COLUMN: 'layout-1-column',
  REQUESTER_TAB_LAYOUT_2_COLUMN: 'layout-2-column' };


/**
                                                       * transform layout
                                                       *
                                                       * @param  {Object} config
                                                       *
                                                       * @returns {Object}
                                                       */
function transformLayout(config) {
  if (_.isEmpty(config) || !config.requesterTabLayout) {
    return {};
  }

  let updatedConfigs = {
    'editor.requestEditorLayoutName': updatedMap[config.requesterTabLayout] || updatedMap['REQUESTER_TAB_LAYOUT_1_COLUMN'] };


  return updatedConfigs;
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipelines_sync_action__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_UserController__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_SyncStatusConstants__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx__ = __webpack_require__(7);








const DEFAULT_LIMIT = 10,
POLLING_HEADER_NAME = 'x-polling-interval',
acceptedNotificationTypes = ['toast', 'banner', 'backgroundPush', 'modal'];

let alreadyInitialized = false;

/* harmony default export */ __webpack_exports__["a"] = ({

  /**
                 * Fetches the base URL from S3 bucket
                 */
  fetchBaseUrl() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__["a" /* default */].request(pm.notificationPollingConfigUrl).
    then(({ body }) => {
      if (body.config && body.config.notificationsUrl) {
        return body.config.notificationsUrl;
      }
      return pm.notificationPollingBaseUrl;
    }).
    catch(({ error }) => {
      return pm.notificationPollingBaseUrl;
    });
  },

  /**
     * Checks that the function was not already called. If not, attaches listeners and initializes variables
     */
  async init() {
    if (alreadyInitialized) {
      return;
    }

    const isUserSignedIn = await this.isUserSignedIn();

    this.nextPolling = null;
    this.nextPollInterval = 7200000; // 2HRS. FALLBACK INTERVAL IF THE API CALL FAILS FOR THE FIRST TIME

    // This is called before so that we can initiate signed in user notification polling as soon as the user signs in
    this.attachSyncFinishListener();

    if (!isUserSignedIn) {
      pm.notificationPollingBaseUrl = await this.fetchBaseUrl();
      this.fetchNotifications();
    }
  },

  /**
      * Function to attach a bootstrap finish listener and trigger fetchNotifications for signed in users
      */
  async attachSyncFinishListener() {
    let syncStatusStore = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('SyncStatusStore');

    syncStatusStore.onSyncAvailable().
    then(() => {
      this._fetchSignedInNotifications();
    });
  },

  async _fetchSignedInNotifications() {
    let currentUser = await this.fetchCurrentUser();

    pm.notificationPollingBaseUrl = currentUser.syncserver_url;

    // If the user is signed out and signs back in, we call fetchNotifications
    this.fetchNotifications();
  },

  /**
     * Attaches model listeners and listens to internet connectivity
     */
  attachListeners() {
    pm.mediator.on('appOnline', async () => {
      if (!alreadyInitialized) {
        this.fetchNotifications();
      }
    });
  },

  /**
     * Fetches notification from sync URL and sets the next polling interval - clears the poll interval previously set.
     * Also computes headers and params based on user status (Signed in or not)
     */
  async fetchNotifications() {
    const currentUser = await this.fetchCurrentUser();

    let { notificationURL, headers } = this.computeNotificationURLAndHeaders(currentUser);

    // If the user's status changes before the timeout is triggered, we unset the existing timer
    this.nextPolling && clearTimeout(this.nextPolling);

    __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__["a" /* default */].request(notificationURL, {
      headers: headers }).
    then(({ body, headers }) => {
      let nextPoll = parseInt(headers.get(POLLING_HEADER_NAME));

      if (!_.isNaN(nextPoll)) {
        clearTimeout(this.nextPolling);

        this.nextPollInterval = nextPoll; // Caching the poll interval
        this.nextPolling = setTimeout(() => this.fetchNotifications(), nextPoll);
      }

      alreadyInitialized = true;
      return this._dispatchUnreadNotifications(body);
    }).
    catch(({ error }) => {

      // Incase the API fetch fails, we set timeout to the previously cached interval
      this.nextPolling = setTimeout(() => this.fetchNotifications(), this.nextPollInterval);
    });
  },

  /**
     * Extracts notifications, filters unread
     * @param { Object } notifications
     */
  _dispatchUnreadNotifications(notifications) {

    _.chain(notifications).
    filter(notification => {
      return notification.data && notification.data.events && !_.some(notification.data.events, { key: 'viewed' });
    }).
    forEach(notification => {
      return this._dispatchNotification(notification.data);
    }).
    value();
  },

  /**
     * Creates the notification event and dispatches user action
     * @param { Object } notification
     */
  async _dispatchNotification(notification) {

    let isUserSignedIn = await this.isUserSignedIn(),
    meta = {};

    if (!isUserSignedIn) {
      meta = { source: 'SignedOutUser' };
    }

    // Adding source in meta to distinguish who's triggering the event so that the logic is not dependent on checking if the user is signed in or not.
    let notificationEvent = Object(__WEBPACK_IMPORTED_MODULE_3__model_event__["a" /* createEvent */])('create', 'notification', notification, null, meta);
    return Object(__WEBPACK_IMPORTED_MODULE_1__pipelines_sync_action__["a" /* default */])(notificationEvent);
  },

  /**
     * Returns user object from the controller
     * @returns { Object } currentUser
     */
  fetchCurrentUser() {

    return __WEBPACK_IMPORTED_MODULE_2__controllers_UserController__["a" /* default */].get().then(user => {
      return user;
    });
  },

  /**
      * Checks if the user is signed
      * @returns { Boolean } isUserSignedIn
      */
  async isUserSignedIn() {
    let { id } = await this.fetchCurrentUser();
    return id !== '0';
  },

  /**
     * Checks if the user is offline
     * @returns { Boolean } isUserOffline
     */
  isUserOffline() {
    return !navigator.onLine;
  },

  /**
      * Sets access token in the header if the user is signed in or app id in the params if the user is signed out
      * @param { Object } currentUser
      * @returns { Object }
      */
  computeNotificationURLAndHeaders(currentUser) {
    let notificationURL = `${pm.notificationPollingBaseUrl}/notification?limit=${DEFAULT_LIMIT}&events=viewed`,
    headers = {};

    if (currentUser.id === '0') {
      notificationURL += `&app_id=${pm.app.get('installationId')}`;
    } else
    {
      const token = _.get(currentUser, 'auth.access_token');

      // Add type filter with the notification type we want to show
      notificationURL += `&type=${acceptedNotificationTypes.join('&type=')}&groupByType=true`;

      headers = {
        'x-access-token': token };

    }

    return { notificationURL, headers };
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(23);
let

SyncIssueHelper = class SyncIssueHelper {
  sanitizedChangeSet(reason, changeset) {
    var dataSize = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].lengthInUtf8Bytes(changeset.data),
    res = _.get(changeset, 'res', {});

    if (reason === 'timeout') {
      res.error = { name: 'timeout' };
    } else
    if (!_.get(res, 'error')) {
      res.error = { name: reason };
    }

    return _.assign({}, changeset, {
      dataSize: __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].formatSize(dataSize),
      res: res });

  }

  constructLogToAnalytics(changeset) {
    let log = {
      entity: changeset.entity,
      entity_id: _.get(changeset, 'res.model_id') || _.get(changeset, 'res.data.id'),
      timestamp: new Date().toISOString(),
      action: changeset.verb,
      error: changeset.res.error,
      requestSize: changeset.dataSize };


    // special handling for unnamed errors
    if (_.get(log, 'error.name') === 'error') {
      log.response = changeset.res;
    }

    return log;
  }};


/* harmony default export */ __webpack_exports__["a"] = (new SyncIssueHelper());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {const OLD_DB_NAME = 'postman',
DB_NOT_AVAILABLE = 'DB_NOT_AVAILABLE',
TABLE_NOT_AVAILABLE = 'TABLE_NOT_AVAILABLE';

let oldDb = {
  open(cb) {
    let request = indexedDB.open(OLD_DB_NAME);
    request.onsuccess = e => {
      cb && cb(null, e.target.result);
    };

    request.onerror = cb;
  },

  /**
      *
      * @param {*} db
      *
      * Delete the database only if
      * 1. It is the old Db
      * 2. It doesn't have any tables inside.
      *
      * This has been added so that,
      * the empty db created by 6.x app to detect fresh install
      * should not affect the downgrade path.
      */
  deleteDataBase(db) {
    try {
      if (_.get(db, 'objectStoreNames.length') === 0 && db.name === OLD_DB_NAME) {
        indexedDB.deleteDatabase(OLD_DB_NAME);
      }
    }
    catch (e) {
      // no-op
    }
  },

  getHelpers(db, cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('helpers')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['helpers'], 'readonly');
    var store = trans.objectStore('helpers');

    // Get everything in the store
    var keyRange = IDBKeyRange.lowerBound(0);
    var cursorRequest = store.openCursor(keyRange);
    var helpers = [];

    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;

      if (!result) {
        cb(null, helpers);
        return;
      }

      var request = result.value;
      helpers.push({ id: request.id, auth: request });

      // This wil call onsuccess again and again until no more request is left
      result.continue();
    };

    cursorRequest.onerror = cb;
  },

  getBroadCasts(db, cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('new_broadcasts')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['new_broadcasts'], 'readonly'),
    store = trans.objectStore('new_broadcasts'),
    index = store.index('readAt'),
    cursorRequest = index.openCursor(),
    broadcasts = [];

    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;

      if (!result) {
        if (db, cb) {
          cb(null, broadcasts);
        }
        return;
      }

      var broadcast = {
        id: result.value.id,
        readAt: result.value.readAt };

      broadcasts.push(broadcast);

      // This wil call onsuccess again and again until no more broadcast is left
      result.continue();
    };

    cursorRequest.onerror = cb;
  },

  getTestRuns(db, cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('test_runs')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['test_runs'], 'readonly');
    var store = trans.objectStore('test_runs');

    // Get everything in the store
    var keyRange = IDBKeyRange.lowerBound(0);
    var index = store.index('timestamp');
    var cursorRequest = index.openCursor(keyRange);
    var testRuns = [];

    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;

      if (!result) {
        cb(null, testRuns);
        return;
      }

      var request = result.value;
      testRuns.push(request);

      // This wil call onsuccess again and again until no more request is left
      result.continue();
    };

    cursorRequest.onerror = cb;
  },

  getHistories(db, cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('requests')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['requests'], 'readonly');
    var store = trans.objectStore('requests');

    // Get everything in the store
    var keyRange = IDBKeyRange.lowerBound(0);
    var index = store.index('timestamp');
    var cursorRequest = index.openCursor(keyRange);
    var historyRequests = [];

    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;

      if (!result) {
        cb(null, historyRequests);
        return;
      }

      var request = result.value;
      historyRequests.push(request);

      // This wil call onsuccess again and again until no more request is left
      result.continue();
    };

    cursorRequest.onerror = cb;
  },

  getOauth2AccessTokens(db, cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('oauth2_access_tokens')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['oauth2_access_tokens'], 'readonly');
    var store = trans.objectStore('oauth2_access_tokens');

    // Get everything in the store
    var keyRange = IDBKeyRange.lowerBound(0);
    var cursorRequest = store.openCursor(keyRange);
    var accessTokens = [];

    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;

      if (!result) {
        cb(null, accessTokens);
        return;
      }

      var request = result.value;
      accessTokens.push(request);

      // This wil call onsuccess again and again until no more request is left
      result.continue();
    };

    cursorRequest.onerror = cb;
  },

  getSyncPendingChangesets(db, cb) {

    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('unsynced_changes')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['unsynced_changes'], 'readonly');
    var store = trans.objectStore('unsynced_changes');

    // Get everything in the store
    var keyRange = IDBKeyRange.lowerBound(0);
    var index = store.index('timestamp');
    var cursorRequest = index.openCursor(keyRange);
    var changes = [];

    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;

      if (!result) {
        if (cb) {
          cb(null, changes);
        }

        return;
      }

      var change = result.value;
      changes.push(change);

      // This wil call onsuccess again and again until no more request is left
      result.continue();
    };

    cursorRequest.onerror = cb;
  },

  getHeaderPresets(db, cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('header_presets')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['header_presets'], 'readonly');
    var store = trans.objectStore('header_presets');

    // Get everything in the store
    var keyRange = IDBKeyRange.lowerBound(0);
    var index = store.index('timestamp');
    var cursorRequest = index.openCursor(keyRange);
    var headerPresets = [];

    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;

      if (!result) {
        cb(null, headerPresets);
        return;
      }

      var request = result.value;
      headerPresets.push(request);

      // This wil call onsuccess again and again until no more request is left
      result.continue();
    };

    cursorRequest.onerror = cb;
  },

  getEnvironments(db, cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('environments')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['environments'], 'readonly');
    var store = trans.objectStore('environments');

    // Get everything in the store
    var keyRange = IDBKeyRange.lowerBound(0);
    var index = store.index('timestamp');
    var cursorRequest = index.openCursor(keyRange);
    var environments = [];

    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;

      if (!result) {
        cb(null, environments);
        return;
      }

      var request = result.value;
      environments.push(request);

      // This wil call onsuccess again and again until no more request is left
      result.continue();
    };

    cursorRequest.onerror = cb;
  },

  getCollections(db, cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('collections')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['collections'], 'readonly');
    var store = trans.objectStore('collections');

    // Get everything in the store
    var keyRange = IDBKeyRange.lowerBound(0);
    var cursorRequest = store.openCursor(keyRange);
    var numCollections = 0;
    var items = [];
    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;
      if (!result) {
        cb(null, items);
        return;
      }

      var collection = result.value;
      numCollections++;

      items.push(collection);

      result.continue();
    };

    cursorRequest.onerror = cb;
  },


  getCollectionsForIds(db, collectionsList = [], cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('collections')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['collections'], 'readonly');
    var store = trans.objectStore('collections');

    // Get everything in the store
    var keyRange = IDBKeyRange.lowerBound(0);
    var cursorRequest = store.openCursor(keyRange);
    var numCollections = 0;
    var items = [];
    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;
      if (!result) {
        cb(null, items);
        return;
      }

      var collection = result.value;
      numCollections++;

      if (_.includes(collectionsList, collection.id)) {
        items.push(collection);
      }

      result.continue();
    };

    cursorRequest.onerror = cb;
  },


  getRequestsForCollectionId(id, db, cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('collection_requests')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['collection_requests'], 'readonly');

    // Get everything in the store
    var keyRange = IDBKeyRange.only(id);
    var store = trans.objectStore('collection_requests');

    var index = store.index('collectionId');
    var cursorRequest = index.openCursor(keyRange);

    var requests = [];

    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;

      if (!result) {
        cb(null, requests);
        return;
      }

      var request = result.value;
      requests.push(request);

      // This wil call onsuccess again and again until no more request is left
      result.continue();
    };
    cursorRequest.onerror = cb;
  },

  getSyncedSince(db, cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('sinceIds')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['sinceIds'], 'readonly');
    var store = trans.objectStore('sinceIds');

    var cursorRequest = store.openCursor();
    var syncedSince = [];

    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;

      if (!result) {
        cb(null, syncedSince);
        return;
      }

      var request = result.value;
      syncedSince.push(request);

      // This wil call onsuccess again and again until no more request is left
      result.continue();
    };

    cursorRequest.onerror = cb;
  },

  getUnsyncedChanges: function (db, cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('unsynced_changes')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['unsynced_changes'], 'readonly'),
    store = trans.objectStore('unsynced_changes'),
    keyRange = IDBKeyRange.lowerBound(0),
    index = store.index('timestamp'),
    cursorRequest = index.openCursor(keyRange),
    changes = [];

    cursorRequest.onsuccess = function (e) {
      var result = e.target.result;

      if (!result) {
        if (cb) {
          cb && cb(null, changes);
        }

        return;
      }

      var change = result.value;
      changes.push(change);

      result.continue();
    };

    cursorRequest.onerror = cb;
  },

  getBuilderState: function (db, cb) {
    if (!db) {
      return cb(DB_NOT_AVAILABLE);
    }

    if (!db.objectStoreNames.contains('builder_state')) {
      return cb(TABLE_NOT_AVAILABLE);
    }

    var trans = db.transaction(['builder_state'], 'readonly');
    var store = trans.objectStore('builder_state');

    // Get everything in the store
    var cursorRequest = store.get('builder-0');

    cursorRequest.onsuccess = e => {
      _.isFunction(cb) && cb(null, e.target.result);
    };

    cursorRequest.onerror = () => {
      _.isFunction(cb) && cb(cursorRequest.error);
    };
  } };


/* harmony default export */ __webpack_exports__["a"] = (oldDb);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fillInNonNullAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return validateAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFolderId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pushToSyncChangeSets; });
/**
 *
*/
function fillInNonNullAttributes(model, schema) {
  let attributes = schema.attributes,
  notNullEntities = _.pickBy(
  attributes,
  attribute => {
    return (
      !attribute.allowNull && // Not allowing null
      attribute.type !== 'json' && // Type is not json
      !_.has(attributes, 'defaultsTo') && // Didn't provide defaultsTo
      !attribute.autoCreatedAt && !attribute.autoUpdatedAt // Not auto created timestamps
    );
  });

  _.forEach(notNullEntities, (v, k) => {
    if (v.type === 'string') {
      // If it is number just change that to string number
      if (_.isNumber(model[k])) {
        model[k] = _.toString(model[k]);
      } else
      if (_.isEmpty(model[k])) {
        model[k] = '';
      }
    }

    if (v.type === 'boolean' && !_.isBoolean(model[k])) {
      model[k] = false;
    }

    // If,
    // 1. It is a number type
    // 2. And model value is not number type
    if (v.type === 'number') {
      if (_.isNaN(model[k])) {
        model[k] = 0;
      }

      if (!_.isNumber(model[k])) {
        let converted = _.toNumber(model[k]);

        // Try converting it, if not possible move ahead
        model[k] = Number.isNaN(converted) ? 0 : converted;
      }
    }
  });

  return model;
}

/**
   *
   * @param {*} model
   */
function getFolderId(model = {}) {
  if (_.isString(model.folderId)) {
    return model.folderId;
  }

  if (_.isString(model.folderID)) {
    return model.folderID;
  }

  if (_.isString(model.folder)) {
    return model.folder;
  }

  return null;
}

/**
   *
   * @param {Object} record
   * @param {String} model
   */
function validateAttributes(model, record) {
  try {
    if (!record || !model) {
      throw new Error('INVALID_CALL');
    }

    if (!pm || !pm.models) {
      throw new Error('ORM_UNAVAILABLE');
    }

    if (!pm.models[model]) {
      throw new Error('UNKNOWN_MODEL');
    }

    let modelClass = pm.models[model];

    // will throw if there is a validation error
    _.forEach(_.keys(record), attribute => {
      try {
        modelClass.validate(attribute, record[attribute]);
      }
      catch (err) {
        // attach the same prefix for all errors
        err.message && (err.message += attribute + ':' + err.message);

        throw err;
      }
    });
  }
  catch (err) {
    // attach the same prefix for all errors
    err.message && (err.message = 'VALIDATION_ERROR: ' + err.message);

    throw err;
  }
}

/**
   *
   * @param {*} changesets
   * @param {*} currentUser
   * @param {*} sc
   * @param {*} cb
   */
function pushToSyncChangeSets(changesets, currentUser, sc, cb) {

  if (!sc || currentUser === '0') {
    return cb && cb(null);
  }

  sc.addChangesets(changesets, err => {
    return cb && cb(err);
  });
}



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(36);
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

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eachLimit = __webpack_require__(2848);

var _eachLimit2 = _interopRequireDefault(_eachLimit);

var _doLimit = __webpack_require__(495);

var _doLimit2 = _interopRequireDefault(_doLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
 *
 * @name eachSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfSeries`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
exports.default = (0, _doLimit2.default)(_eachLimit2.default, 1);
module.exports = exports['default'];

/***/ }),

/***/ 2844:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2845);


/***/ }),

/***/ 2845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init__ = __webpack_require__(2846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_TelemetryHelpers__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_telemetry_GoogleAnalytics__ = __webpack_require__(2922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_telemetry_GoogleAnalytics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_telemetry_GoogleAnalytics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_AnalyticsService__ = __webpack_require__(29);




if (true) {
  window.onbeforeunload = () => {
    return false;
  };
}

__WEBPACK_IMPORTED_MODULE_0__init__["a" /* default */].init(err => {
  if (err) {
    return;
  }
  new __WEBPACK_IMPORTED_MODULE_2__models_telemetry_GoogleAnalytics___default.a(); // eslint-disable-line no-new
  let loadTime = Object(__WEBPACK_IMPORTED_MODULE_1__utils_TelemetryHelpers__["a" /* getWindowLoadTime */])();
  __WEBPACK_IMPORTED_MODULE_3__modules_services_AnalyticsService__["a" /* default */].addEvent('app_performance_metric', 'shared_window_loaded', null, null, { load_time: loadTime });
});

/***/ }),

/***/ 2846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_migrator_Migrate__ = __webpack_require__(2847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot_bootLogger__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boot_bootConfig__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boot_bootConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__boot_bootConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boot_bootMessaging__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boot_bootWLModels__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__boot_bootAppModels__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boot_bootSettings__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boot_bootTelemetry__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boot_bootShared__ = __webpack_require__(2871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__boot_booted__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_initialize_db_initialize__ = __webpack_require__(2918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__boot_bootConfigurations__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__boot_initializeConfigurationsValues__ = __webpack_require__(2919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__boot_bootSharedRuntimeListeners__ = __webpack_require__(2920);
















const windowConfig = {
  process: 'shared',
  ui: false };


window.pm = {};

pm.init = done => {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_3__boot_bootConfig___default.a.init(windowConfig),
  __WEBPACK_IMPORTED_MODULE_2__boot_bootLogger__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__boot_bootMessaging__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_8__boot_bootTelemetry__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_12__boot_bootConfigurations__["a" /* initializeConfigurations */],
  __WEBPACK_IMPORTED_MODULE_7__boot_bootSettings__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_11__modules_initialize_db_initialize__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__boot_bootWLModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_13__boot_initializeConfigurationsValues__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__modules_migrator_Migrate__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__boot_bootAppModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_14__boot_bootSharedRuntimeListeners__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_9__boot_bootShared__["a" /* default */]],
  err => {
    Object(__WEBPACK_IMPORTED_MODULE_10__boot_booted__["a" /* default */])(err);
    if (err) {
      console.error('Error in the app boot sequence', err);
    }
    done && done(err);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (pm);

/***/ }),

/***/ 2847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Migrate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_circular_json__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async_waterfall__ = __webpack_require__(1200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async_waterfall___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_async_waterfall__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async_eachSeries__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__User__ = __webpack_require__(2850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LocalChanges__ = __webpack_require__(2851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Collections__ = __webpack_require__(2852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SyncedSince__ = __webpack_require__(2857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Headerpreset__ = __webpack_require__(2858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Collectionrun__ = __webpack_require__(2859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__History__ = __webpack_require__(2860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Globals__ = __webpack_require__(2861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Workspace__ = __webpack_require__(2862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Environments__ = __webpack_require__(2863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__WorkspaceSession__ = __webpack_require__(2864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Helpers__ = __webpack_require__(2865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__OAuth2AccessTokens__ = __webpack_require__(2866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__oldDb__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__postman_sync_client__ = __webpack_require__(1202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__postman_sync_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__postman_sync_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_DatabaseService__ = __webpack_require__(1203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_services_AnalyticsService__ = __webpack_require__(29);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};





















const SYNC_CLIENT_ID = 'SYNC_CLIENT_DEFAULT';

const MAX_ATTEMPT = 5;

/**
                        *
                        * @param {Function} cb
                        */
function InitializeMigrationContext(cb) {
  let migrationContext = null,
  currentVersionContext = null,
  migrationContextString = localStorage.getItem('migrationContext');

  try {
    migrationContext = __WEBPACK_IMPORTED_MODULE_0_circular_json___default.a.parse(migrationContextString);
    currentVersionContext = _.get(migrationContext, '6.0');
  }
  catch (e) {
    // nothing we can do here, lets reassign migration context
  } finally
  {

    cb && cb(null, _.isEmpty(currentVersionContext) ? {} : currentVersionContext);
  }
}

/**
   *
   * @param {Object} migrationContext
   * @param {Function} cb
   */
function CommitMigrationContext(migrationContext = {}, cb) {

  try {
    let timestamp = Date.now();

    // added timestamp to the migration context
    migrationContext.timestamp = timestamp;

    // Upgraded app
    let filteredMigrationContext = _.omit(migrationContext, ['oldDb', 'db', 'sc']),
    unMigratedEntities = _.pickBy(migrationContext, { migrated: false }),
    stringifiedMigrationContext = __WEBPACK_IMPORTED_MODULE_0_circular_json___default.a.stringify({ '6.0': filteredMigrationContext });

    if (!_.isEmpty(unMigratedEntities)) {
      // This means migration failed for some entities
      let sentryHeader = 'Migration error',
      tags = { migration_6_0: 'error' };

      if (!_.isEmpty(unMigratedEntities.collection) && !_.isEmpty(unMigratedEntities.collection.repairedRecords)) {
        sentryHeader += ' and collection entities repaired';
        tags.migration_6_0_repaired = 'collection';
      }

      pm.crashReporter.report(sentryHeader, {
        extra: _extends({},
        unMigratedEntities, {
          user: migrationContext.user,
          attempt: migrationContext.attempt }),

        tags });

    }

    // Handle storing the migration object in db and finishing migration
    localStorage.setItem('migrationContext', stringifiedMigrationContext);
  }
  catch (e) {
    pm.crashReporter.report(e);
  } finally
  {
    cb && cb(null, migrationContext);
  }
}

/**
   *
   * @param {*} migrationContext
   * @param {*} cb
   */
function MaxAttemptCheck(migrationContext = {}, cb) {
  let attempt = migrationContext.attempt || 0;

  attempt += 1;

  // Don't increment further above MAX_ATTEMPT + 1;
  if (attempt > MAX_ATTEMPT) {
    migrationContext.exceededAttempt = true;
    return cb && cb('EXCEEDED_ATTEMPT', migrationContext);
  }

  // set the attempt in the context
  migrationContext.attempt = attempt;
  return cb && cb(null, migrationContext);
}

/**
   *
   * @param {*} migrationContext
   * @param {*} cb
   */
function AssignSyncClient(migrationContext, cb) {
  let sc = new __WEBPACK_IMPORTED_MODULE_18__postman_sync_client__["SyncClient"](SYNC_CLIENT_ID, { dbService: Object(__WEBPACK_IMPORTED_MODULE_19__services_DatabaseService__["a" /* getService */])() });

  sc.initialize(err => {
    if (err) {
      console.error('Failed to initialize SyncClient', err);
    } else {
      migrationContext.sc = sc;
    }

    // ignore errors when initializing sync client
    // handle migrating rest of the tables
    cb && cb(null, migrationContext);
  });
}

/**
   * @param {Object} migrationContext
   * @param {Function} cb
  */
function OpenOldDb(migrationContext, cb) {
  __WEBPACK_IMPORTED_MODULE_17__oldDb__["a" /* default */].open((err, db) => {
    if (err) {
      console.error('Error:', err);
      return cb(err, migrationContext);
    }

    let isFreshInstall = !(_.get(db, 'objectStoreNames.length') > 0);

    if (isFreshInstall) {
      __WEBPACK_IMPORTED_MODULE_17__oldDb__["a" /* default */].deleteDataBase(db);
      return cb && cb('FRESH_INSTALL', migrationContext);
    }

    _.assign(migrationContext, { oldDb: { opened: true }, db });

    cb && cb(null, migrationContext);
  });
}

/**
   * @param {Object} migrationContext
   * @param {Function} cb
   */
function CloseOldDb(migrationContext, cb) {
  let db = migrationContext.db;

  // Closing the db
  _.invoke(db, 'abort');

  _.assign(migrationContext, { oldDb: { closed: true } });

  // remove db reference from the context.
  cb && cb(null, _.omit(migrationContext, ['db']));
}

/**
   *
   * @param {Function} cb
   */
function Migrate(cb) {
  let migrationTimer = setTimeout(() => {
    // If the timer is not cleared before 2mins then we should be knowing
    // Property id is already attached with reporter, provides us the user info.
    pm.crashReporter.report('Migration timed out');
    pm.logger.error('Migrate - timed out');
  }, 120000),
  migrationStartTime = Date.now();

  localStorage.setItem('migrationFinished', false);

  // Migration helper functions
  pm.migration = { oldDb: __WEBPACK_IMPORTED_MODULE_17__oldDb__["a" /* default */], OpenOldDb };

  __WEBPACK_IMPORTED_MODULE_1_async_waterfall___default()([
  InitializeMigrationContext,
  MaxAttemptCheck,
  OpenOldDb,
  AssignSyncClient,
  __WEBPACK_IMPORTED_MODULE_3__User__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__Collections__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_10__History__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_11__Globals__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_13__Environments__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__Headerpreset__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_8__Collectionrun__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__LocalChanges__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__SyncedSince__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_15__Helpers__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_16__OAuth2AccessTokens__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_12__Workspace__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_14__WorkspaceSession__["a" /* default */],
  CloseOldDb,
  CommitMigrationContext],
  function (err, result) {
    // Clear the migration timer
    clearTimeout(migrationTimer);

    // Migration would have not run for these cases.
    if (_.includes(['EXCEEDED_ATTEMPT', 'FRESH_INSTALL'], err)) {

      // It is considered as a finish, if it is a fresh install or exceeded attempt.
      localStorage.setItem('migrationFinished', true);

      pm.logger.info('Migrate - Bailed out due to:', err);
      return cb && cb(null, result);
    }

    try {
      // Send event to bulk analytics about the time taken to migrate
      // Here user id will be 0 as user context for bulk analytics will be set after boot.
      __WEBPACK_IMPORTED_MODULE_20__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'migration', 'duration', Date.now() - migrationStartTime, { attempt: result.attempt });
    }
    catch (e) {
      // auto reports to sentry.
      pm.logger.error('Migrate - Adding event to sentry failed', err);
      console.error(e);
    }


    if (err) {
      localStorage.setItem('migrationFinished', false);

      // Report it if migrator module crashed
      pm.crashReporter.report(err);
      pm.logger.error('Migrate ~ InComplete', { err, result });
    } else
    {
      localStorage.setItem('migrationFinished', true);
      pm.logger.info('Migrate ~ Completed', { result });
    }

    cb && cb(err, result);
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2848:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachLimit;

var _eachOfLimit = __webpack_require__(611);

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _withoutIndex = __webpack_require__(2849);

var _withoutIndex2 = _interopRequireDefault(_withoutIndex);

var _wrapAsync = __webpack_require__(172);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
 *
 * @name eachLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfLimit`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachLimit(coll, limit, iteratee, callback) {
  (0, _eachOfLimit2.default)(limit)(coll, (0, _withoutIndex2.default)((0, _wrapAsync2.default)(iteratee)), callback);
}
module.exports = exports['default'];

/***/ }),

/***/ 2849:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _withoutIndex;
function _withoutIndex(iteratee) {
    return function (value, index, callback) {
        return iteratee(value, callback);
    };
}
module.exports = exports["default"];

/***/ }),

/***/ 2850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = User;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_user__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MigratorUtil__ = __webpack_require__(180);






/**
                                                                               * @param {Object} migrationContext
                                                                               * @param {Function} cb
                                                                              */
function User(migrationContext, cb) {

  let oldUserString = localStorage.getItem('user') || '{ "id": "0" }',
  oldUser = { id: '0' };

  try {
    if (oldUserString) {
      oldUser = JSON.parse(oldUserString);
    }
  } finally
  {

    if (_.isNumber(oldUser.id)) {
      oldUser.id = _.toString(oldUser.id);
    }

    // Still if user id is empty assign it to 0
    if (_.isEmpty(oldUser.id)) {
      oldUser.id = '0';
    }

    // Add the existing user info even if it is migrated.
    // As the data going to be migrated belongs to this user only.

    if (_.get(migrationContext, 'user.migrated')) {
      return cb && cb(null, _.assign(
      migrationContext, {
        user: {
          id: oldUser.id,
          migrated: true,
          error: null } }));



    }

    _.assign(oldUser, {
      appUserType: 'currentUser',
      auth: _.pick(oldUser, ['access_token', 'refresh_token', 'expires_in', 'logged_in_at']) });



    __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
    findOne('user', { appUserType: 'currentUser' }).
    then(user => {
      oldUser = Object(__WEBPACK_IMPORTED_MODULE_4__MigratorUtil__["a" /* fillInNonNullAttributes */])(oldUser, __WEBPACK_IMPORTED_MODULE_3__models_user___default.a);

      // will throw validation error
      Object(__WEBPACK_IMPORTED_MODULE_4__MigratorUtil__["d" /* validateAttributes */])('user', user);

      if (user) {
        if (user.id !== '0') {
          return Promise.resolve();
        }

        return __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
        update('user', oldUser);
      }
      return __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
      create('user', oldUser);
    }).
    then(() => {
      cb && cb(null, _.assign(
      migrationContext, {
        user: {
          id: oldUser.id,
          migrated: true,
          error: null } }));



    }).
    catch(err => {
      cb && cb(null, _.assign(
      migrationContext, {
        user: {
          id: '0', // Migrate it as a signed out user. when they signning in back, it will work as expected
          migrated: !err,
          error: err && err.message } }));



    });
  }
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = LocalChanges;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oldDb__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MigratorUtil__ = __webpack_require__(180);




/**
                                                        *
                                                       */
function getCurrentUserFromLocalStorage() {
  let userString = localStorage.getItem('user'),
  user = null,
  userId = '0';

  try {
    user = JSON.parse(userString);
    userId = user.id;
  }
  catch (e) {
    userId = '0';
  } finally

  {
    return userId;
  }

}

/**
   *
   * @param {*} oldChangeset
   */
function transformOldToNewFormat(oldChangeset, opts = {}) {
  let currentUserID = opts.currentUserID,
  {
    entity,
    data,
    meta,
    verb } =
  oldChangeset,
  newChangeset = {},
  owner = _.toString(_.get(data, 'owner'));

  // Dropping changesets if `owner` is not available.
  if (_.isEmpty(owner)) {
    return;
  }

  if (verb === 'create') {
    return _.assign(
    newChangeset,
    {
      model: entity,
      action: 'import',
      modelId: _.get(data, 'id'),
      owner: owner,
      data: _.assign({}, data, { modelId: _.get(data, 'id') }) });


  }

  if (verb === 'update') {
    let keys = meta === 'order' ? ['order', 'folders_order'] : _.keys(data);
    return _.assign(
    newChangeset,
    {
      model: entity,
      action: 'update',
      modelId: _.get(data, 'id'),
      owner: owner,
      data: _.assign({}, data, { modelId: _.get(data, 'id'), keys }) });


  }

  if (verb === 'destroy') {
    return _.assign(
    newChangeset,
    {
      model: entity,
      action: 'destroy',
      modelId: _.get(data, 'id'),
      owner: owner,
      data: _.assign({}, data, { modelId: _.get(data, 'id') }) });


  }

  if (verb === 'transfer') {
    let oldTo = _.get(data, 'to') || {},
    oldFrom = _.get(data, 'from') || {},
    to = _.omit(_.assign({}, oldTo, { modelId: oldTo.model_id }), ['model_id']),
    from = _.omit(_.assign({}, oldFrom, { modelId: oldFrom.model_id }), ['model_id']);

    return _.assign(
    newChangeset,
    {
      model: entity,
      action: 'transfer',
      modelId: _.get(data, 'id'),
      owner: owner,
      data: _.assign({}, data, { modelId: _.get(data, 'id'), to, from }) });


  }

  return;
}

/**
   * @param {Object} migrationContext
   * @param {Function} cb
  */
function LocalChanges(migrationContext, cb) {
  if (_.get(migrationContext, 'syncclients.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }

  __WEBPACK_IMPORTED_MODULE_1__oldDb__["a" /* default */].getUnsyncedChanges(migrationContext.db, (err, unsyncedChanges) => {
    if (err) {
      return cb && cb(null, _.assign(
      migrationContext, {
        localchanges: {
          migrated: false,
          error: err } }));



    }

    let newUnsyncedChanges = _.compact(
    _.map(unsyncedChanges, oldChange => {
      return transformOldToNewFormat(oldChange, { currentUserID: getCurrentUserFromLocalStorage() });
    }));


    return new Promise((resolve, reject) => {
      if (_.isEmpty(newUnsyncedChanges)) {
        resolve();
      }

      let currentUser = _.get(migrationContext, 'user.id');

      Object(__WEBPACK_IMPORTED_MODULE_2__MigratorUtil__["c" /* pushToSyncChangeSets */])(newUnsyncedChanges, currentUser, migrationContext.sc, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    }).
    then(() => {
      cb && cb(null, _.assign(
      migrationContext, {
        localchanges: {
          migrated: true,
          error: null } }));



    }).
    catch(err => {
      cb && cb(null, _.assign(
      migrationContext, {
        localchanges: {
          migrated: !err,
          error: err } }));



    });
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Collections;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_waterfall__ = __webpack_require__(1200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_waterfall___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_waterfall__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async_eachSeries__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async_series__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async_mapSeries__ = __webpack_require__(2853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async_mapSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_async_mapSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_CollectionTreeOps__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_CollectionController__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MigratorUtil__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_util__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__oldDb__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_folder__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_folder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__models_folder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_request__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__models_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_response__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_response___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__models_response__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_collection__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__models_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_CollectionModelService__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_event_to_changesets__ = __webpack_require__(1201);


















const cleanupRequestBody = __webpack_require__(640),
addDbpToRequest = __webpack_require__(641);

/**
                                                                          *
                                                                          * @param {Collection} collection
                                                                          * @param {Function} cb
                                                                          */
function __migrateCollection(collection, currentUser, db, sc, cb) {

  __WEBPACK_IMPORTED_MODULE_8__oldDb__["a" /* default */].getRequestsForCollectionId(collection.id, db, (err, requests) => {
    if (err) {
      return cb && cb(null, { message: 'Old Db requests fetch error', error: err, id: collection.id }); // don't bail out for other collections
    }
    collection.requests = requests;
    __WEBPACK_IMPORTED_MODULE_0_async_waterfall___default()([
    initialCb => {
      initialCb(null, { collection, additionalInfo: [], currentUser });
    },
    sanitizeCollection,
    sanitizeFolders,
    sanitizeRequests],
    (error, finalContext) => {

      if (error) {
        if (_.get(error, 'message') === 'DUPLICATE_COLLECTION') {
          // Bail out if it is a duplicate collection issue.
          return cb && cb(null);
        }

        // Validation entity error.
        if (_.startsWith(_.get(error, 'message'), 'VALIDATION_ERROR')) {
          return cb && cb(null, _.assign({}, error, { id: collection.id, custom: true }));
        }

        // This kick in if anything unexpected fails in the migration flow
        return cb && cb(null, { message: 'Error while sanitizing the collection', error, id: collection.id });
      }

      let sanitizedCollection = finalContext.collection,
      additionalInfo = finalContext.additionalInfo;

      // This means the sanitize functions added duplication problem
      // we are not duplicating for subscribed collection
      if (!_.isEmpty(additionalInfo) && collection.owner !== currentUser) {
        return cb && cb(null, { error: additionalInfo, id: collection.id, custom: true });
      }

      // This means the sanitize functions added duplication problem
      // Let's duplicate all the entities in a collection.
      if (!_.isEmpty(additionalInfo) && collection.owner === currentUser) {
        let deleteEvents = [],
        collectionTree = __WEBPACK_IMPORTED_MODULE_5__controllers_CollectionController__["a" /* default */]._addModelTypes(sanitizedCollection, 'collection'),
        oldId = collection.id;

        // Generate Delete changesets
        return __WEBPACK_IMPORTED_MODULE_4__services_CollectionTreeOps__["a" /* default */].
        prune(collectionTree).
        then(events => {
          // Remove the collection delete event alone.
          deleteEvents = _.reject(events, event => {
            return event.namespace === 'collection' && event.name === 'delete';
          });
        })

        // Create the cloned tree
        .then(() => {
          return __WEBPACK_IMPORTED_MODULE_4__services_CollectionTreeOps__["a" /* default */].
          clone(collectionTree).
          then(clonedTree => {
            clonedTree.id = oldId;
            return clonedTree;
          });
        })

        // Generate the create changesets
        .then(clonedTree => {
          return __WEBPACK_IMPORTED_MODULE_4__services_CollectionTreeOps__["a" /* default */].
          graft(clonedTree);
        })

        // 1. Remove the collection create changeset for sync
        // 2. Apply the ALL create events to db (creates the new collection)
        .then(collectionCreateEvents => {
          return __WEBPACK_IMPORTED_MODULE_14__services_CollectionModelService__["a" /* default */].
          commitEvents(collectionCreateEvents);
        })

        // Attach owner for all changesets
        .then(createdEvents => {

          let entitiesCreatedEvents = _.reject(createdEvents, event => {
            return event.name === 'created' && event.namespace === 'collection';
          }),
          deletedEvents = _.map(deleteEvents, event => {
            return _.assign(event, { name: 'deleted' });
          }),
          eventsToSync = _.concat(deletedEvents, entitiesCreatedEvents);

          _.forEach(eventsToSync, event => {
            // setting owner for all the data.
            _.assign(event.data, { owner: collection.owner });
          });
          return eventsToSync;
        })

        // 1. Generate events to changesets
        // 2. Provide the information to sync-client
        .
        then(eventsToSync => {
          return new Promise((resolve, reject) => {
            __WEBPACK_IMPORTED_MODULE_3_async_mapSeries___default()(eventsToSync, (event, next) => {
              Object(__WEBPACK_IMPORTED_MODULE_15__services_event_to_changesets__["a" /* default */])(event, (err, changeset) => {
                return next && next(err, changeset);
              });
            }, (err, changesets) => {
              if (err) {
                // Error out and go ahead
                console.error(err);
                return resolve();
              }
              Object(__WEBPACK_IMPORTED_MODULE_6__MigratorUtil__["c" /* pushToSyncChangeSets */])(_.flatten(_.compact(changesets)), currentUser, sc, err => {
                if (err) {
                  // Error out and go ahead
                  console.error(err);
                  return resolve();
                }
                return resolve();
              });
            });
          });
        }).
        then(() => {
          return cb && cb(null, { error: additionalInfo, id: collection.id, repaired: true });
        })

        // Bail out as migration error on any failures above
        .catch(e => {
          return cb && cb(null, { message: 'Error in migrating the collection', error: e, id: collection.id });
        });
      }

      return __WEBPACK_IMPORTED_MODULE_5__controllers_CollectionController__["a" /* default */].
      createCollection(sanitizedCollection).
      then(() => {
        return cb && cb(null);
      }).
      catch(error => {
        cb && cb(null, { message: 'Error in migrating the collection', error, id: collection.id });
      });
    });

  });
}

/**
   *
   * @param {Collection} collection
   * @param {Function} cb
   */
function sanitizeCollection(context, cb) {
  let collection = context.collection,
  additionalInfo = context.additionalInfo,
  userId = context.currentUser || '0';

  return __WEBPACK_IMPORTED_MODULE_9__services_ModelService__["a" /* default */].
  count('collection', { id: collection.id }).
  then(count => {
    if (count > 0) {
      return cb && cb({
        message: 'DUPLICATE_COLLECTION',
        collection: collection.id });

    }

    // Sanitize owner, owner must be a string and it should be always available.
    let owner = _.get(collection, 'owner');

    if (_.isNumber(owner)) {
      owner = owner.toString();
    }

    owner = _.isEmpty(owner) ? userId : owner;

    _.assign(collection, { owner });

    collection = Object(__WEBPACK_IMPORTED_MODULE_6__MigratorUtil__["a" /* fillInNonNullAttributes */])(collection, __WEBPACK_IMPORTED_MODULE_13__models_collection___default.a);

    let collectionValidationError = null;

    try {
      Object(__WEBPACK_IMPORTED_MODULE_6__MigratorUtil__["d" /* validateAttributes */])('collection', collection);
    }
    catch (validationError) {
      collectionValidationError = validationError;
    } finally
    {
      cb && cb(collectionValidationError, context);
    }
  });
}


/**
   *
   * @param {Collection} collection
   * @param {Function} cb
   */
function sanitizeFolders(context, cb) {

  let collection = context.collection,
  additionalInfo = context.additionalInfo;

  // There is no folder order in the root, but there is folders available in the collection,
  // Would be a malformed collection
  if (!_.isEmpty(collection.folders) && _.isEmpty(collection.folders_order)) {
    collection.folders_order = _.map(collection.folders, 'id');
  }


  let root_folders = _.map(collection.folders, 'id'),
  foldersInCollection = _.isArray(collection.folders_order) ? _.compact(_.uniq(collection.folders_order)) : [];

  collection.folders_order = _.intersection(foldersInCollection, root_folders);

  __WEBPACK_IMPORTED_MODULE_1_async_eachSeries___default()(_.compact(collection.folders), (folder, next) => {
    return __WEBPACK_IMPORTED_MODULE_9__services_ModelService__["a" /* default */].
    count('folder', { id: folder.id }).
    then(count => {
      if (count > 0) {
        additionalInfo.push({
          message: 'DUPLICATE_FOLDER',
          id: collection.id,
          folder: folder.id });

      }

      let validationError = null,
      child_folders = _.compact(_.get(folder, 'folders_order'));

      // remove if the folder is already referenced somewhere before
      folder.folders_order = _.filter(child_folders, folderId => {
        // second check will remove the ids which is referenced but the data is not available
        return !_.includes(foldersInCollection, folderId) && _.includes(root_folders, folderId);
      });

      foldersInCollection = _.union(foldersInCollection, folder.folders_order);

      // Fill in collection and folder information for folder
      _.assign(folder, {
        collection: collection.id,
        folder: Object(__WEBPACK_IMPORTED_MODULE_6__MigratorUtil__["b" /* getFolderId */])(folder) });


      folder = Object(__WEBPACK_IMPORTED_MODULE_6__MigratorUtil__["a" /* fillInNonNullAttributes */])(folder, __WEBPACK_IMPORTED_MODULE_10__models_folder___default.a);

      try {
        Object(__WEBPACK_IMPORTED_MODULE_6__MigratorUtil__["d" /* validateAttributes */])('folder', folder);
      }
      catch (err) {
        validationError = err;
      } finally
      {
        next && next(validationError, collection);
      }
    });
  }, err => {

    if (err) {
      return cb && cb(err, context);
    }

    // Now look for orphan folders and attach to the root level
    let additionalFolders = _.difference(root_folders, foldersInCollection),
    additionalFolderIds = _.difference(foldersInCollection, root_folders);

    if (!_.isEmpty(additionalFolders)) {
      // Then there is a orphan folder, so attach it to the root, people are not seeing it, keeping it as it is
      // collection.folders_order = _.union(collection.folders_order, additionalFolders);
    } else
    if (!_.isEmpty(additionalFolderIds)) {
      collection.folders_order = _.difference(collection.folders_order, additionalFolderIds);
    }


    cb && cb(null, context);
  });
}

/**
   *
   * @param {Collection} collection
   * @param {Function} cb
   */
function sanitizeRequests(context, cb) {
  let collection = context.collection,
  additionalInfo = context.additionalInfo;

  __WEBPACK_IMPORTED_MODULE_1_async_eachSeries___default()(_.compact(collection.requests), (request, next) => {

    return __WEBPACK_IMPORTED_MODULE_9__services_ModelService__["a" /* default */].
    count('request', { id: request.id }).
    then(count => {
      if (count > 0) {
        additionalInfo.push({
          message: 'DUPLICATE_REQUEST',
          request: request.id });

      }
      sanitizeRequest(request, context, (err, sanitizedRequest) => {
        if (err) {
          return next && next(err, collection);
        }
        return next && next(null, collection);
      });

    });

  }, err => {

    if (err) {
      return cb && cb(err, context);
    }

    let root_requests = _.map(collection.requests, 'id'),
    requestsInCollection = _.isArray(collection.order) ? _.compact(_.uniq(collection.order)) : [];

    collection.order = _.intersection(requestsInCollection, root_requests);

    // Find the duplicate child request reference and fix it.
    _.forEach(collection.folders, folder => {
      let child_requests = _.compact(_.uniq(_.get(folder, 'order')));

      // remove if the request is already referenced somewhere before

      folder.order = _.filter(child_requests, reqId => {
        // second check will remove the ids which is referenced but the data is not available
        // @todo find a way to fix for atleast sync users
        return _.includes(root_requests, reqId) && !_.includes(requestsInCollection, reqId);
      });

      requestsInCollection = _.union(requestsInCollection, folder.order);
    });

    // Now look for orphan requests and attach to the root level
    let additionalRequests = _.difference(root_requests, requestsInCollection),
    additionalRequestIds = _.difference(requestsInCollection, root_requests);

    if (!_.isEmpty(additionalRequests)) {
      // Then there is a orphan requests, so attach it to the root people are not seeing it, keeping it as it is
      // collection.order = _.union(root_requests, additionalRequests);
    } else
    if (!_.isEmpty(additionalRequestIds)) {
      // Additional request ids needs to be removed. not needed at all
      collection.order = _.difference(collection.order, additionalRequestIds);
    }

    cb && cb(null, context);
  });
}

/**
   *
   * @param {Request} request
   * @returns {Request} normalized request
   */
function sanitizeRequest(request = {}, context, cb) {
  let collection = context.collection,
  additionalInfo = context.additionalInfo;

  __WEBPACK_IMPORTED_MODULE_1_async_eachSeries___default()(_.compact(request.responses), (response, next) => {
    return __WEBPACK_IMPORTED_MODULE_9__services_ModelService__["a" /* default */].
    count('response', { id: response.id }).
    then(count => {
      if (count > 0) {
        additionalInfo.push({
          message: 'DUPLICATE_RESPONSE',
          response: response.id });

      }
      return next && next(null);
    });
  }, err => {

    if (err) {
      return cb && cb(err);
    }

    let dataMode = request.dataMode,
    requestValidationError = null;

    // Remove timestamps if present to prevent type mismatches
    delete request.createdAt;
    delete request.updatedAt;

    /**
                               * dataMode: {
                               *  type: 'string',
                               *  validations: { isIn: ['raw', 'urlencoded', 'params', 'binary'] }
                               * },
                               */

    switch (dataMode) {
      case 'raw':
        if (!_.isString(request.data)) {
          request.data = '';
        }
        break;
      case 'urlencoded':
      case 'params':
      case 'binary':
        if (!_.isArray(request.data)) {
          request.data = [];
        }
        break;
      default:
        request.dataMode = 'params';
        request.data = [];
        break;}


    __WEBPACK_IMPORTED_MODULE_7__utils_util__["a" /* default */].normalizeRequest(request);

    // Sanitize methods
    request.method = _.isEmpty(request.method) ? 'GET' : request.method;

    // Fill in collection and folder information for request
    _.assign(request, {
      collection: collection.id,
      folder: Object(__WEBPACK_IMPORTED_MODULE_6__MigratorUtil__["b" /* getFolderId */])(request) });


    // Fix the header to headerdata migration
    // If the headers (old prop) is not empty but the headerData (new prop) is empty
    // Then we are considering it is not migrated at all.
    if (!_.isEmpty(request.headers) && _.isEmpty(request.headerData)) {
      // convert header string format to array format and set to headerData.
      request.headerData = __WEBPACK_IMPORTED_MODULE_7__utils_util__["a" /* default */].unpackHeaders(request.headers);
    }


    // Fix the header to pathVariableData migration
    // If the pathVariables (old prop) is not empty but the pathVariableData (new prop) is empty
    // Then we are considering it is not migrated at all.
    if (!_.isEmpty(request.pathVariables) && _.isEmpty(request.pathVariableData)) {
      // convert { k1: v1, k2: v2 } format to [ { key: k1, value: v1 }, { key: k2, value: v2 }] format
      request.pathVariableData = _.map(_.keys(request.pathVariables), k => {
        return {
          key: k,
          value: request.pathVariables[k] };

      });
    }

    // cleanup the request body for methods that do not support them
    cleanupRequestBody(request);

    // add default flags like DBP
    addDbpToRequest(request);

    let sanitizedResponses = _.map(_.compact(_.uniqBy(request.responses, 'id')), response => {
      return sanitizeResponse(response, request);
    });

    // Sanitize response
    request.responses = sanitizedResponses;

    let validationErrors = [];

    _.forEach(sanitizedResponses, response => {
      try {
        Object(__WEBPACK_IMPORTED_MODULE_6__MigratorUtil__["d" /* validateAttributes */])('response', response);
      }
      catch (validationError) {
        validationErrors.push(validationError);
      }
    });

    if (!_.isEmpty(validationErrors)) {
      return cb && cb({ request: request.id, message: 'VALIDATION_ERROR', responsesErrorData: validationErrors });
    }

    request = Object(__WEBPACK_IMPORTED_MODULE_6__MigratorUtil__["a" /* fillInNonNullAttributes */])(request, __WEBPACK_IMPORTED_MODULE_11__models_request___default.a);

    try {
      Object(__WEBPACK_IMPORTED_MODULE_6__MigratorUtil__["d" /* validateAttributes */])('request', request);
    }
    catch (validationError) {
      requestValidationError = validationError;
    } finally
    {
      cb && cb(requestValidationError, request);
    }
  });
}

/**
   *
   * @param {Response} response
   * @return {Response} sanitized response
   */
function sanitizeResponse(response, request) {
  // Defaulting to current request. we don't know the side effect of emptying it.
  let requestObject = _.pick(request, [
  'url',
  'pathVariableData',
  'queryParams',
  'headerData',
  'data',
  'method',
  'dataMode']);


  // Remove timestamps if present to prevent type mismatches
  delete response.createdAt;
  delete response.updatedAt;

  // Filling collection and request attribute
  _.assign(response, {
    collection: request.collection, // we are setting in sanitize request
    request: request.id });


  response = Object(__WEBPACK_IMPORTED_MODULE_6__MigratorUtil__["a" /* fillInNonNullAttributes */])(response, __WEBPACK_IMPORTED_MODULE_12__models_response___default.a);

  try {
    if (!_.isObject(response.requestObject)) {
      requestObject = JSON.parse(response.requestObject);
    }
  }
  catch (e) {
    // Setting the same request itself.
  } finally
  {
    if (typeof requestObject === 'object' && !Array.isArray(requestObject)) {

      // cleanup the request body for methods that do not support them
      cleanupRequestBody(requestObject);

      // add default flags like DBP
      addDbpToRequest(requestObject);

      // Filling the requestObject
      return _.assign(response, { requestObject });
    }
    return _.assign(response, { requestObject: null });
  }
}

/**
   * @param {Object} migrationContext
   * @param {Function} cb
  */
function Collections(migrationContext, cb) {
  let collectionMigrationContext = _.get(migrationContext, 'collection', {}),
  migrated = collectionMigrationContext.migrated || false;

  if (_.get(migrationContext, 'collection.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }

  __WEBPACK_IMPORTED_MODULE_8__oldDb__["a" /* default */].getCollections(migrationContext.db, (err, collections) => {
    if (err) {
      return cb && cb(null, _.assign(
      migrationContext, {
        collection: {
          migrated: false,
          error: { message: 'Old Db collections fetch error', error: err } } }));



    }

    // First consider all collections as non migrated
    let nonMigratedCollections = _.compact(collections);

    // if we found things yet to migrate or there is a migration inbetween.
    if (!migrated && migrationContext.attempt > 1) {
      nonMigratedCollections = _.intersectionBy(collections, collectionMigrationContext.errorRecords, 'id');
    }

    let userId = _.get(migrationContext, 'user.id' || '0');

    let ownedCollections = _.filter(nonMigratedCollections, ['owner', userId]),
    nonOwnedCollection = _.reject(nonMigratedCollections, ['owner', userId]); // subscribed plus the collections without owner

    // Closure function needed, since eachSeries won't accumulate results
    let migrateFunctions = _.map(_.concat(nonOwnedCollection, ownedCollections), collection => {
      return innerCb => {
        __migrateCollection(collection, userId, migrationContext.db, migrationContext.sc, innerCb);
      };
    });


    __WEBPACK_IMPORTED_MODULE_2_async_series___default()(migrateFunctions, (err, results) => {
      let cbResults = _.compact(results),
      errorRecords = _.reject(cbResults, ['repaired', true]),
      repairedRecords = _.filter(cbResults, ['repaired', true]), // repaired should not be retried so seperating it out.
      error = cbResults.length === 0 ? null : cbResults.length;

      // We sending null in first parameter ensures next will run even it this fails
      cb && cb(null, _.assign(
      migrationContext, {
        collection: {
          migrated: _.size(cbResults) === 0,
          errorRecords,
          repairedRecords } }));




    });
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2853:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapLimit = __webpack_require__(2854);

var _mapLimit2 = _interopRequireDefault(_mapLimit);

var _doLimit = __webpack_require__(495);

var _doLimit2 = _interopRequireDefault(_doLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
 *
 * @name mapSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 */
exports.default = (0, _doLimit2.default)(_mapLimit2.default, 1);
module.exports = exports['default'];

/***/ }),

/***/ 2854:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _doParallelLimit = __webpack_require__(2855);

var _doParallelLimit2 = _interopRequireDefault(_doParallelLimit);

var _map = __webpack_require__(2856);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
 *
 * @name mapLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 */
exports.default = (0, _doParallelLimit2.default)(_map2.default);
module.exports = exports['default'];

/***/ }),

/***/ 2855:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doParallelLimit;

var _eachOfLimit = __webpack_require__(611);

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _wrapAsync = __webpack_require__(172);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doParallelLimit(fn) {
    return function (obj, limit, iteratee, callback) {
        return fn((0, _eachOfLimit2.default)(limit), obj, (0, _wrapAsync2.default)(iteratee), callback);
    };
}
module.exports = exports['default'];

/***/ }),

/***/ 2856:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _asyncMap;

var _noop = __webpack_require__(188);

var _noop2 = _interopRequireDefault(_noop);

var _wrapAsync = __webpack_require__(172);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncMap(eachfn, arr, iteratee, callback) {
    callback = callback || _noop2.default;
    arr = arr || [];
    var results = [];
    var counter = 0;
    var _iteratee = (0, _wrapAsync2.default)(iteratee);

    eachfn(arr, function (value, _, callback) {
        var index = counter++;
        _iteratee(value, function (err, v) {
            results[index] = v;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}
module.exports = exports['default'];

/***/ }),

/***/ 2857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = SyncedSince;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oldDb__ = __webpack_require__(150);



/**
                              * @param {Object} migrationContext
                              * @param {Function} cb
                             */
function SyncedSince(migrationContext, cb) {
  if (_.get(migrationContext, 'syncclients.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }

  __WEBPACK_IMPORTED_MODULE_1__oldDb__["a" /* default */].getSyncedSince(migrationContext.db, (err, syncedSince) => {
    if (err) {
      return cb && cb(null, _.assign(
      migrationContext, {
        syncclients: {
          migrated: false,
          error: err } }));



    }

    __WEBPACK_IMPORTED_MODULE_0__services_ModelService__["a" /* default */].
    delete('syncclient', { id: 'SYNC_CLIENT_DEFAULT' }).
    then(() => {
      let revision = _.get(_.find(syncedSince, ['id', 'own']), 'value', 0),
      timestamp = _.get(_.find(syncedSince, ['id', 'ownLastSynced']), 'value', 0);
      return __WEBPACK_IMPORTED_MODULE_0__services_ModelService__["a" /* default */].
      create('syncclient', { id: 'SYNC_CLIENT_DEFAULT', revision, timestamp });
    }).
    then(() => {
      cb && cb(null, _.assign(
      migrationContext, {
        syncclients: {
          migrated: true,
          error: null } }));



    }).
    catch(err => {
      cb && cb(null, _.assign(
      migrationContext, {
        syncclients: {
          migrated: !err,
          error: err } }));



    });
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Headerpreset;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_header_preset__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_header_preset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_header_preset__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MigratorUtil__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__oldDb__ = __webpack_require__(150);







/**
                              * @param {Object} migrationContext
                              * @param {Function} cb
                             */
function Headerpreset(migrationContext, cb) {

  if (_.get(migrationContext, 'headerpreset.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }

  __WEBPACK_IMPORTED_MODULE_4__oldDb__["a" /* default */].getHeaderPresets(migrationContext.db, (err, headerpresets) => {

    // Bail out on error.
    if (err) {
      return cb && cb(null, _.assign(
      migrationContext, {
        headerpreset: {
          migrated: false,
          error: err } }));



    }

    // Bail out on empty headerpresets
    else if (_.isEmpty(headerpresets)) {
        return cb && cb(null, _.assign(
        migrationContext, {
          headerpreset: {
            migrated: true,
            error: null } }));



      }

    let errorRecords = _.get(migrationContext, 'headerpreset.errorRecords', []),
    validationErrors = [];

    // If already migration tried and failed through validation, we can retry that alone.
    // Or else, deleting an entity will come back again on re-migration
    if (!_.isEmpty(errorRecords)) {
      headerpresets = _.intersectionBy(headerpresets, errorRecords, 'id');
    }

    __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default()(
    headerpresets,
    (headerpreset, next) => {
      let userId = '0';

      try {
        let userString = localStorage.getItem('user') || '{ "id": "0" }',
        user = JSON.parse(userString);

        userId = _.toString(user.id);
      }
      catch (e) {
        userId = '0';
      } finally

      {

        _.assign(headerpreset, { owner: userId });

        __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
        findOne('headerpreset', { id: headerpreset.id }).
        then(header => {
          if (header) {
            return Promise.resolve();
          }
          headerpreset = Object(__WEBPACK_IMPORTED_MODULE_3__MigratorUtil__["a" /* fillInNonNullAttributes */])(headerpreset, __WEBPACK_IMPORTED_MODULE_2__models_header_preset___default.a);

          let validationFailed = false;
          try {
            // will throw validation error
            Object(__WEBPACK_IMPORTED_MODULE_3__MigratorUtil__["d" /* validateAttributes */])('headerpreset', headerpreset);
          }
          catch (validationError) {
            validationFailed = true;
            validationErrors.push({ message: validationError.message, id: headerpreset.id });
          } finally
          {
            if (validationFailed) {
              return;
            }

            return __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
            create('headerpreset', headerpreset);
          }
        }).
        then(() => {
          next && next(null);
        }).
        catch(e => {
          next && next(null);
        });
      }
    }, err => {

      // This means there is a error in validation
      if (!_.isEmpty(validationErrors)) {
        return cb && cb(null, _.assign(
        migrationContext, {
          headerpreset: {
            migrated: false,
            messge: 'VALIDATION_ERROR',
            errorRecords: validationErrors,
            custom: true } }));



      }

      cb && cb(null, _.assign(
      migrationContext, {
        headerpreset: {
          migrated: !err,
          error: err && err.message } }));




    });

  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Collectionrun;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oldDb__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_collection_run__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_collection_run___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_collection_run__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MigratorUtil__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__ = __webpack_require__(116);








/**
                                                                         * @param {Object} migrationContext
                                                                         * @param {Function} cb
                                                                        */
function Collectionrun(migrationContext, cb) {

  if (_.get(migrationContext, 'collectionrun.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }

  __WEBPACK_IMPORTED_MODULE_2__oldDb__["a" /* default */].getTestRuns(migrationContext.db, (err, collectionruns) => {

    // Bail out on error.
    if (err) {
      return cb && cb(null, _.assign(
      migrationContext, {
        collectionrun: {
          migrated: false,
          error: err } }));



    }

    // Bail out on empty.
    else if (_.isEmpty(collectionruns)) {
        return cb && cb(null, _.assign(
        migrationContext, {
          collectionrun: {
            migrated: true,
            error: null } }));



      }

    let errorRecords = _.get(migrationContext, 'collectionrun.errorRecords', []),
    validationErrors = [];

    // If already migration tried and failed through validation, we can retry that alone.
    // Or else, deleting an entity will come back again on re-migration
    if (!_.isEmpty(errorRecords)) {
      collectionruns = _.intersectionBy(collectionruns, errorRecords, 'id');
    }

    __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default()(
    collectionruns,
    (run, next) => {
      let userId = '0';

      try {
        let userString = localStorage.getItem('user') || '{ "id": "0" }',
        user = JSON.parse(userString);

        userId = _.toString(user.id);
      }
      catch (e) {
        userId = '0';
      }

      __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
      findOne('collectionrun', { id: run.id }).
      then(collectionRun => {
        if (collectionRun) {
          return Promise.resolve();
        }
        return Object(__WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__["c" /* defaultUserWorkspaceId */])().
        then(defaultWorkspaceId => {

          let environmentId = run.environment;
          if (_.isObject(run.environment)) {
            environmentId = run.environment.id;
          }
          if (_.isEmpty(environmentId) || !_.isString(environmentId) || environmentId === '0') {
            environmentId = null;
          }

          let createdAt = _.get(run, 'creationDate');

          // Extra check for ISO String format or null
          if (!createdAt) {
            createdAt = new Date().toISOString();
          } else
          {
            createdAt = new Date(createdAt).toISOString();
          }

          let collection = _.get(run, 'collection') || _.get(run, 'target.collection');

          // Dropping the collection run if the collection is empty.
          // It's a required propery for the schema.
          if (!_.isString(collection) || _.isEmpty(collection)) {
            return;
          }

          let folder = _.get(run, 'target.folder');
          if (!_.isString(folder) || _.isEmpty(folder)) {
            folder = null;
          }

          let target = { collection, folder };

          let delay = run.delay;

          if (_.isNaN(delay)) {
            delay = 0;
          } else
          if (!_.isNumber(delay)) {
            let converted = _.toNumber(delay);
            delay = Number.isNaN(converted) ? 0 : converted;
          }

          _.assign(run, {
            workspace: defaultWorkspaceId,
            createdAt,
            collection,
            target,
            delay,
            environment: environmentId,
            owner: userId });


          run = Object(__WEBPACK_IMPORTED_MODULE_4__MigratorUtil__["a" /* fillInNonNullAttributes */])(run, __WEBPACK_IMPORTED_MODULE_3__models_collection_run___default.a);

          let validationFailed = false;
          try {
            // will throw validation error
            Object(__WEBPACK_IMPORTED_MODULE_4__MigratorUtil__["d" /* validateAttributes */])('collectionrun', run);
          }
          catch (validationError) {
            validationFailed = true;
            validationErrors.push({ message: validationError.message, id: run.id });
          } finally
          {
            if (validationFailed) {
              return;
            }

            return __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
            create('collectionrun', run);
          }
        });
      }).
      then(() => {
        next && next(null);
      }).
      catch(e => {
        next && next(null);
      });
    },
    err => {

      // This means there is a error in validation
      // We are handling this first as we care about it more.
      if (!_.isEmpty(validationErrors)) {
        return cb && cb(null, _.assign(
        migrationContext, {
          collectionrun: {
            migrated: false,
            messge: 'VALIDATION_ERROR',
            errorRecords: validationErrors,
            custom: true } }));



      }

      cb && cb(null, _.assign(
      migrationContext, {
        collectionrun: {
          migrated: !err,
          error: err && err.message } }));




    });
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = History;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oldDb__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_history__ = __webpack_require__(939);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MigratorUtil__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__ = __webpack_require__(116);








const cleanupRequestBody = __webpack_require__(640),
addDbpToRequest = __webpack_require__(641);

/**
                                                                          * @param {Object} migrationContext
                                                                          * @param {Function} cb
                                                                         */
function History(migrationContext, cb) {

  if (_.get(migrationContext, 'history.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }


  __WEBPACK_IMPORTED_MODULE_2__oldDb__["a" /* default */].getHistories(migrationContext.db, (err, histories) => {

    // Bail out on error.
    if (err) {
      return cb && cb(null, _.assign(
      migrationContext, {
        history: {
          migrated: false,
          error: err } }));



    }

    // Bail out on empty histories.
    else if (_.isEmpty(histories)) {
        return cb && cb(null, _.assign(
        migrationContext, {
          history: {
            migrated: true,
            error: null } }));



      }

    let errorRecords = _.get(migrationContext, 'history.errorRecords', []),
    validationErrors = [],
    userId = _.get(migrationContext, 'user.id' || '0');

    // If already migration tried and failed through validation, we can retry that alone.
    // Or else, deleting an entity will come back again on re-migration
    if (!_.isEmpty(errorRecords)) {
      histories = _.intersectionBy(histories, errorRecords, 'id');
    }

    __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default()(
    histories,
    (history, next) => {
      __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
      findOne('history', { id: history.id })

      // create a history if not already present in the new db
      .then(dbHistory => {
        // history is already present in db,
        // this must be a duplicate history with same id, skip this history and move on to next one
        if (dbHistory) {
          return Promise.resolve();
        }

        return Object(__WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__["c" /* defaultUserWorkspaceId */])().
        then(defaultWorkspaceId => {
          let date = new Date(history.timestamp),
          createdAt = date.toString() == 'Invalid Date' ? new Date(1).toISOString() : date.toISOString();

          _.assign(history, { workspace: defaultWorkspaceId, createdAt });

          // set owner for history
          history.owner = typeof history.owner === 'string' ? history.owner : userId;

          history = Object(__WEBPACK_IMPORTED_MODULE_4__MigratorUtil__["a" /* fillInNonNullAttributes */])(history, __WEBPACK_IMPORTED_MODULE_3__models_history___default.a);

          // cleanup the request body for methods that do not support them
          cleanupRequestBody(history);

          // add default flags like DBP
          addDbpToRequest(history);

          let validationFailed = false;
          try {
            // will throw validation error
            Object(__WEBPACK_IMPORTED_MODULE_4__MigratorUtil__["d" /* validateAttributes */])('history', history);
          }
          catch (validationError) {
            validationFailed = true;
            validationErrors.push({ message: validationError.message, id: history.id });
          } finally
          {
            if (validationFailed) {
              return;
            }

            return __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
            create('history', history);
          }
        });
      })

      // call the next callback
      .then(() => {
        next && next(null);
      })

      // call the next callback (swallowing the error)
      .catch(e => {
        next && next(null);
      });
    },
    err => {
      // This means there is a error in validation
      if (!_.isEmpty(validationErrors)) {
        return cb && cb(null, _.assign(
        migrationContext, {
          history: {
            migrated: false,
            messge: 'VALIDATION_ERROR',
            errorRecords: validationErrors,
            custom: true } }));



      }

      cb && cb(null, _.assign(
      migrationContext, {
        history: {
          migrated: !err,
          error: err && err.message } }));




    });

  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Globals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_default_workspace__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_uuid_helper__ = __webpack_require__(489);





/**
                                                              * @param {Object} migrationContext
                                                              * @param {Function} cb
                                                             */
function Globals(migrationContext, cb) {
  if (_.get(migrationContext, 'globals.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }

  // you never know ¯\_(ツ)_/¯
  if (!localStorage) {
    return cb(null, migrationContext);
  }

  let globals = localStorage.getItem('globals'),
  errorOnParsing = null;

  // no globals to migrate
  if (!globals) {
    return cb(null, migrationContext);
  }

  try {
    globals = JSON.parse(globals);
  }
  catch (e) {
    errorOnParsing = e;
  } finally
  {

    if (errorOnParsing) {
      return cb && cb(null, _.assign(
      migrationContext, {
        globals: {
          migrated: false,
          error: errorOnParsing } }));



    }

    let workspace = null,
    id = null;

    // Delete the existing seeded global.
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_default_workspace__["c" /* defaultUserWorkspaceId */])().
    then(defaultWorkspaceId => {
      workspace = defaultWorkspaceId;
      id = Object(__WEBPACK_IMPORTED_MODULE_2__utils_uuid_helper__["a" /* deterministicUUID */])(defaultWorkspaceId);

      return __WEBPACK_IMPORTED_MODULE_0__services_ModelService__["a" /* default */].
      findOne('globals', { id });
    }).
    then(existingGlobal => {

      // If global already migrated, don't touch it.
      if (existingGlobal) {
        return __WEBPACK_IMPORTED_MODULE_0__services_ModelService__["a" /* default */].
        update('globals', { id, workspace, values: globals });
      }
      return __WEBPACK_IMPORTED_MODULE_0__services_ModelService__["a" /* default */].
      create('globals', { id, workspace, values: globals });
    }).
    then(() => {
      migrationContext.globals = { migrated: true };
      cb(null, migrationContext);
    }).
    catch(e => {
      migrationContext.globals = { migrated: false, error: e };
      cb(null, migrationContext);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Workspace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_default_workspace__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_WorkspaceController__ = __webpack_require__(53);




/**
                                                                       *
                                                                      */
function getCurrentUserFromLocalStorage() {
  let userString = localStorage.getItem('user') || '{ "id": "0" }',
  user = null,
  userId = '0';

  try {
    user = JSON.parse(userString);
    userId = user.id;
  }
  catch (e) {
    userId = '0';
  } finally

  {
    return userId;
  }

}


/**
   *
  */
function getAllWorkspaceDependencies() {
  let dependencies = [],
  currentUser = getCurrentUserFromLocalStorage();

  return __WEBPACK_IMPORTED_MODULE_0__services_ModelService__["a" /* default */].
  find('collection', {}).
  then(collections => {
    _.forEach(collections, collection => {
      dependencies.push({
        model: 'collection',
        modelId: `${collection.owner}-${collection.id}` });

    });
    return;
  }).
  then(() => {
    return __WEBPACK_IMPORTED_MODULE_0__services_ModelService__["a" /* default */].
    find('environment', {}).
    then(environments => {
      _.forEach(environments, env => {
        dependencies.push({
          model: 'environment',
          modelId: `${currentUser}-${env.id}` });

      });
      return;
    });
  }).
  then(() => {
    return __WEBPACK_IMPORTED_MODULE_0__services_ModelService__["a" /* default */].
    find('headerpreset', {}).
    then(headerpresets => {
      _.forEach(headerpresets, headerpreset => {
        dependencies.push({
          model: 'headerpreset',
          modelId: `${currentUser}-${headerpreset.id}` });

      });
      return;
    });
  }).
  then(() => {
    return dependencies;
  });
}

/**
   * @param {Object} migrationContext
   * @param {Function} cb
  */
function Workspace(migrationContext, cb) {
  if (_.get(migrationContext, 'workspace.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }

  let currentUserWorkspace = null,
  offlineWorkspace = null,
  dependencies = [];

  Object(__WEBPACK_IMPORTED_MODULE_1__utils_default_workspace__["c" /* defaultUserWorkspaceId */])().
  then(genCurrentUserWorkspace => {
    return currentUserWorkspace = genCurrentUserWorkspace;
  }).
  then(() => {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils_default_workspace__["a" /* defaultOfflineWorkspaceId */])();
  }).
  then(genOfflineWorkspace => {
    return offlineWorkspace = genOfflineWorkspace;
  }).
  then(() => {
    return getAllWorkspaceDependencies();
  }).
  then(fetchedDependencies => {
    return dependencies = fetchedDependencies;
  })

  // Now the real migration begins
  .then(() => {
    // This means we need to delete the seeded-workspace
    if (currentUserWorkspace !== offlineWorkspace) {
      return __WEBPACK_IMPORTED_MODULE_0__services_ModelService__["a" /* default */].
      delete('workspace', { id: offlineWorkspace }).
      then(() => {
        return __WEBPACK_IMPORTED_MODULE_0__services_ModelService__["a" /* default */].
        create('workspace', {
          id: currentUserWorkspace,
          name: 'My Workspace',
          description: 'This workspace contains all your collections and environments, as well as any monitors, mock servers or integrations created on them.',
          type: 'personal' });

      });
    }
  })

  // Update the dependencies
  .then(() => {
    return __WEBPACK_IMPORTED_MODULE_2__controllers_WorkspaceController__["a" /* default */].
    addDependencies({ id: currentUserWorkspace }, dependencies);
  }).

  then(() => {
    let currentUser = getCurrentUserFromLocalStorage(),
    users = {};

    users[currentUser] = { id: currentUser };

    return __WEBPACK_IMPORTED_MODULE_0__services_ModelService__["a" /* default */].
    update('workspace', {
      id: currentUserWorkspace,
      members: { users } });


  })

  // Migration done successfully
  .then(() => {
    cb && cb(null, _.assign(
    migrationContext, {
      workspace: {
        migrated: true,
        error: null } }));



  })

  // Migration failed
  .catch(err => {
    cb && cb(null, _.assign(
    migrationContext, {
      workspace: {
        migrated: !err,
        error: err } }));



  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Environments;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_environment__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_environment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_environment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MigratorUtil__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__oldDb__ = __webpack_require__(150);







/**
                              * @param {Object} migrationContext
                              * @param {Function} cb
                             */
function Environments(migrationContext, cb) {

  if (_.get(migrationContext, 'environment.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }

  __WEBPACK_IMPORTED_MODULE_4__oldDb__["a" /* default */].getEnvironments(migrationContext.db, (err, environments) => {

    // Bail out on error.
    if (err) {
      return cb && cb(null, _.assign(
      migrationContext, {
        environment: {
          migrated: false,
          error: err } }));



    }

    // Bail out on empty environments.
    else if (_.isEmpty(environments)) {
        return cb && cb(null, _.assign(
        migrationContext, {
          environment: {
            migrated: true,
            error: null } }));



      }

    let errorRecords = _.get(migrationContext, 'environment.errorRecords', []),
    validationErrors = [];

    // If already migration tried and failed through validation, we can retry that alone.
    // Or else, deleting an entity will come back again on re-migration
    if (!_.isEmpty(errorRecords)) {
      environments = _.intersectionBy(environments, errorRecords, 'id');
    }

    __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default()(
    environments,
    (env, next) => {
      let userId = '0';

      try {
        let userString = localStorage.getItem('user') || '{ "id": "0" }',
        user = JSON.parse(userString);

        userId = _.toString(user.id);
      }
      catch (e) {
        userId = '0';
      } finally

      {
        _.assign(env, { owner: userId });

        __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
        findOne('environment', { id: env.id }).
        then(dbEnv => {
          if (dbEnv) {
            return Promise.resolve();
          }

          env = Object(__WEBPACK_IMPORTED_MODULE_3__MigratorUtil__["a" /* fillInNonNullAttributes */])(env, __WEBPACK_IMPORTED_MODULE_2__models_environment___default.a);

          let validationFailed = false;
          try {
            // will throw validation error
            Object(__WEBPACK_IMPORTED_MODULE_3__MigratorUtil__["d" /* validateAttributes */])('environment', env);
          }
          catch (validationError) {
            validationFailed = true;
            validationErrors.push({ message: validationError.message, id: env.id });
          } finally
          {
            if (validationFailed) {
              return;
            }

            return __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
            create('environment', env);
          }
        }).
        then(() => {
          next && next(null);
        }).
        catch(e => {
          next && next(null);
        });
      }
    },
    err => {

      // This means there is a error in validation
      // We are handling this first as we care about it more.
      if (!_.isEmpty(validationErrors)) {
        return cb && cb(null, _.assign(
        migrationContext, {
          environment: {
            migrated: false,
            messge: 'VALIDATION_ERROR',
            errorRecords: validationErrors,
            custom: true } }));



      }


      cb && cb(null, _.assign(
      migrationContext, {
        environment: {
          migrated: !err,
          error: err } }));




    });
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = WorkspaceSession;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_WorkspaceSessionController__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_v4__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__oldDb__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__migration_helpers_workspace_session_tabs__ = __webpack_require__(923);








/**
                                                                                       * @param {Object} migrationContext
                                                                                       * @param {Function} cb
                                                                                      */
function WorkspaceSession(migrationContext, cb) {
  if (_.get(migrationContext, 'workspacesession.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }

  __WEBPACK_IMPORTED_MODULE_4__oldDb__["a" /* default */].getBuilderState(migrationContext.db, (err, builderState) => {
    // Bail out on error.
    if (err) {
      return cb && cb(null, _.assign(
      migrationContext, {
        workspacesession: {
          migrated: false,
          error: err } }));



    }

    // Bail out on empty builderstate
    if (_.isEmpty(builderState)) {
      return cb && cb(null, _.assign(
      migrationContext, {
        workspacesession: {
          migrated: true,
          error: null } }));



    }

    let windowId = __WEBPACK_IMPORTED_MODULE_3_uuid_v4___default()(),
    sessionId = __WEBPACK_IMPORTED_MODULE_3_uuid_v4___default()(),
    migrated;

    // First create a window
    __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default.a.
    create({
      id: windowId,
      browserWindowId: 0,
      type: 'requester',
      activeSession: sessionId }).

    then(() => Object(__WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__["c" /* defaultUserWorkspaceId */])()).
    then(defaultWorkspaceId => {
      let session = {
        id: sessionId,
        workspace: defaultWorkspaceId,
        window: windowId,
        state: builderState.value };


      migrated = Object(__WEBPACK_IMPORTED_MODULE_6__migration_helpers_workspace_session_tabs__["default"])(session);
      return __WEBPACK_IMPORTED_MODULE_1__controllers_WorkspaceSessionController__["a" /* default */].create(migrated.workspaceSession);
    }).
    then(() => {
      return Promise.all(_.map(migrated.editors, editor => {
        return __WEBPACK_IMPORTED_MODULE_2__services_ModelService__["a" /* default */].create('editor', editor);
      }));
    }).
    then(() => {
      return Promise.all(_.map(migrated.editorModels, editorModel => {
        return __WEBPACK_IMPORTED_MODULE_2__services_ModelService__["a" /* default */].create('editormodel', editorModel);
      }));
    }).
    then(() => {
      cb && cb(null, _.assign(
      migrationContext, {
        workspacesession: {
          migrated: true,
          error: null } }));



    }).
    catch(err => {
      __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default.a.
      delete({ id: windowId }).
      then(() => {
        return cb && cb(null, _.assign(
        migrationContext, {
          workspacesession: {
            migrated: false,
            error: err } }));



      }).
      catch(e => {
        return cb && cb(null, _.assign(
        migrationContext, {
          workspacesession: {
            migrated: false,
            error: e } }));



      });
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Helpers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_auth_helper_state__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_auth_helper_state___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_auth_helper_state__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MigratorUtil__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__oldDb__ = __webpack_require__(150);







const ALLOWED_HELPERS = ['auth', 'oAuth2-meta'];

/**
                                                  * @param {Object} migrationContext
                                                  * @param {Function} cb
                                                 */
function Helpers(migrationContext, cb) {

  if (_.get(migrationContext, 'authhelperstate.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }

  __WEBPACK_IMPORTED_MODULE_4__oldDb__["a" /* default */].getHelpers(migrationContext.db, (err, authhelperstates) => {

    // Bail out on error.
    if (err) {
      return cb && cb(null, _.assign(
      migrationContext, {
        authhelperstate: {
          migrated: false,
          error: err } }));



    }

    // Bail out on empty authhelperstate
    if (_.isEmpty(authhelperstates)) {
      return cb && cb(null, _.assign(
      migrationContext, {
        authhelperstate: {
          migrated: true,
          error: null } }));



    }

    let errorRecords = _.get(migrationContext, 'authhelperstate.errorRecords', []),
    validationErrors = [];

    // If already migration tried and failed through validation, we can retry that alone.
    // Or else, deleting an entity will come back again on re-migration
    if (!_.isEmpty(errorRecords)) {
      authhelperstates = _.intersectionBy(authhelperstates, errorRecords, 'id');
    }

    __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default()(
    authhelperstates,
    (authhelperstate, next) => {

      // If it is not allowed auth helper, since before auth refactor other auth data were in seperate row.
      if (!_.includes(ALLOWED_HELPERS, authhelperstate.id)) {
        return next && next(null);
      }
      __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
      findOne('authhelperstate', { id: authhelperstate.id }).
      then(dbAuthHelper => {
        if (dbAuthHelper) {
          return Promise.resolve();
        }
        authhelperstate = Object(__WEBPACK_IMPORTED_MODULE_3__MigratorUtil__["a" /* fillInNonNullAttributes */])(authhelperstate, __WEBPACK_IMPORTED_MODULE_2__models_auth_helper_state___default.a);

        let validationFailed = false;
        try {
          // will throw validation error
          Object(__WEBPACK_IMPORTED_MODULE_3__MigratorUtil__["d" /* validateAttributes */])('authhelperstate', authhelperstate);
        }
        catch (validationError) {
          validationFailed = true;
          validationErrors.push({ message: validationError.message, id: authhelperstate.id });
        } finally
        {
          if (validationFailed) {
            return;
          }

          return __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
          create('authhelperstate', authhelperstate);
        }
      }).
      then(() => {
        next && next(null);
      }).
      catch(e => {
        next && next(null);
      });

    }, err => {

      // This means there is a error in validation
      if (!_.isEmpty(validationErrors)) {
        return cb && cb(null, _.assign(
        migrationContext, {
          authhelperstate: {
            migrated: false,
            messge: 'VALIDATION_ERROR',
            errorRecords: validationErrors,
            custom: true } }));



      }

      cb && cb(null, _.assign(
      migrationContext, {
        authhelperstate: {
          migrated: !err,
          error: err && err.message } }));




    });

  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = OAuth2AccessTokens;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_auth_access_token__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_auth_access_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_auth_access_token__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MigratorUtil__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__oldDb__ = __webpack_require__(150);







/**
                              * @param {Object} migrationContext
                              * @param {Function} cb
                             */
function OAuth2AccessTokens(migrationContext, cb) {

  if (_.get(migrationContext, 'oauth2AccessToken.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }

  __WEBPACK_IMPORTED_MODULE_4__oldDb__["a" /* default */].getOauth2AccessTokens(migrationContext.db, (err, oauth2AccessTokens) => {

    // Bail out on error.
    if (err) {
      return cb && cb(null, _.assign(
      migrationContext, {
        oauth2AccessToken: {
          migrated: false,
          error: err } }));



    }

    // Bail out on empty authhelperstate
    if (_.isEmpty(oauth2AccessTokens)) {
      return cb && cb(null, _.assign(
      migrationContext, {
        oauth2AccessToken: {
          migrated: true,
          error: null } }));



    }

    let errorRecords = _.get(migrationContext, 'oauth2AccessToken.errorRecords', []),
    validationErrors = [];

    // If already migration tried and failed through validation, we can retry that alone.
    // Or else, deleting an entity will come back again on re-migration
    if (!_.isEmpty(errorRecords)) {
      oauth2AccessTokens = _.intersectionBy(oauth2AccessTokens, errorRecords, 'id');
    }

    __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default()(
    oauth2AccessTokens,
    (oauth2AccessToken, next) => {

      __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
      findOne('oauth2accesstoken', { id: oauth2AccessToken.id }).
      then(dbToken => {
        if (dbToken) {
          return Promise.resolve();
        }
        oauth2AccessToken = Object(__WEBPACK_IMPORTED_MODULE_3__MigratorUtil__["a" /* fillInNonNullAttributes */])(oauth2AccessToken, __WEBPACK_IMPORTED_MODULE_2__models_auth_access_token___default.a);

        let validationFailed = false;
        try {
          // will throw validation error
          Object(__WEBPACK_IMPORTED_MODULE_3__MigratorUtil__["d" /* validateAttributes */])('oauth2accesstoken', oauth2AccessToken);
        }
        catch (validationError) {
          validationFailed = true;
          validationErrors.push({ message: validationError.message, id: oauth2AccessToken.id });
        } finally
        {
          if (validationFailed) {
            return;
          }

          return __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
          create('oauth2accesstoken', oauth2AccessToken);
        }
      }).
      then(() => {
        next && next(null);
      }).
      catch(e => {
        next && next(null);
      });

    }, err => {

      // This means there is a error in validation
      if (!_.isEmpty(validationErrors)) {
        return cb && cb(null, _.assign(
        migrationContext, {
          oauth2AccessToken: {
            migrated: false,
            message: 'VALIDATION_ERROR',
            errorRecords: validationErrors,
            custom: true } }));



      }

      cb && cb(null, _.assign(
      migrationContext, {
        oauth2AccessToken: {
          migrated: !err,
          error: err && err.message } }));




    });

  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2867:
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module sync-client/helpers/collate-diffs
 */


const has = __webpack_require__(0).has,
  union = __webpack_require__(0).union,
  isUndefined = __webpack_require__(0).isUndefined,

  /**
   * Computes and returns the difference of two arrays.
   * difference([2, 1], [2, 3]) => [1]
   * @param {Array} A
   * @param {Array} B
   */

  difference = function (A, B) {
    return A.filter(function (x) {
      // eslint-disable-next-line lodash/prefer-includes
      return B.indexOf(x) < 0;
    });
  },

  /**
   * Computes and returns the intersection of two arrays.
   * intersection([2, 1], [2, 3]) => [2]
   * @param {Array} A
   * @param {Array} B
   */

  intersection = function (A, B) {
    return A.filter(function (n) {
      return B.includes(n);
    });
  },

  /**
   * Sanitizes the diff to replace undefined values with empty array.
   * Required for set operations.
   * @param {Object} A
   */

  sanitize = function (A) {
    if (isUndefined(A.$add)) {
      A.$add = [];
    }
    if (isUndefined(A.$remove)) {
      A.$remove = [];
    }
    return A;
  },

  /**
   * Modifies the received changeset to the desired format.
   * @param {Object} changeset The incoming structure is like:
   * {
   *  $diff: true,
   *  $add: [],
   *  $remove: []
   * }
   * @returns {Object} The returned format is like:
   * {
   *  NA: [],
   *  NR: []
   * }
   */

  prepChangeset = function (changeset) {
    return {
      NA: difference(changeset.$add, changeset.$remove),
      NR: difference(changeset.$remove, changeset.$add)
    };
  },

  /**
   * Computes and returns the collation of two changesets.
   * @param {Object} old
   * @param {Object} current
   */

  collateChangesets = function (old, current) {
    if (has(old, '$diff') && has(current, '$diff')) {
      old = sanitize(old);
      current = sanitize(current);
      let additions = union(old.$add, current.$add),
        removals = union(old.$remove, current.$remove),
        oldPrepped = prepChangeset(old),
        common = intersection(oldPrepped.NR, additions),
        newAdditions = [],
        newRemovals = [],
        currentObj = {};
      if (common.length) {
        removals = difference(removals, common);
      }
      newAdditions = difference(additions, removals);
      newRemovals = difference(removals, additions);
      currentObj = {
        NA: newAdditions,
        NR: newRemovals
      };
      return {
        $diff: true,
        $add: currentObj.NA,
        $remove: currentObj.NR
      };
    }
    return current;
  };

module.exports = collateChangesets;


/***/ }),

/***/ 2868:
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module sync-client
 */

const _ = __webpack_require__(0),
  async = __webpack_require__(47),
  Bucket = __webpack_require__(800),
  BucketDB = __webpack_require__(2869),
  REQUIRED_SERVICES = ['dbService'],

  ACTIVE_BUCKET_ID_SUFFIX = '.active',

  isBucketActive = function (bucket) {
    return bucket && _.endsWith(bucket.clientId, ACTIVE_BUCKET_ID_SUFFIX);
  }; // util function

class SyncClient {
  /**
   * The Sync Client!
   *
   * @param {String} id - a uniquely identifiable sync client instance reference
   *
   * @param {Object} services - helper services required by sync client in order to function
   * @param {Object} services.dbService - database / persistent media access service (with models)

   * @throws {Error} Throws if the necessary configurations are not provided
   */
  constructor (id, services) {
    if (!(_.isString(id) && id)) { // without a valid client-id, everything is moot
      throw new Error('sync-client.constructor: invalid client id');
    }

    // validate that all relevant services are present
    REQUIRED_SERVICES.forEach((serviceName) => {
      if (!(services && services[serviceName])) {
        throw new Error(`sync-client.constructor: missing service: ${serviceName}`);
      }
    });

    /**
     * @private
     * @type {Object}
     */
    this.services = services;

    /**
     * @private
     * @type {String}
     */
    this.clientId = id;


    /**
     * @private
     * @type {DB}
     */
    this.bucketDB = new BucketDB(this.services.dbService);


    /**
     * @private
     * @type {Array}
     */
    this._activeBuckets = [];

    /**
     * @private
     * @type {Array}
     */
    this._pendingBuckets = [];
  }

  /**
   * Populates the memory with stuff loaded from storage layer
   *
   * @param {Function} callback
   */
  initialize (callback) {
    // @todo when we have the status flag, we can read them all at once and then split, but for now lets read them in
    // two sets to avoid any data migration
    async.parallel({
      active: (done) => {
        this.bucketDB.createAllFromDb(this.clientId + ACTIVE_BUCKET_ID_SUFFIX, done);
      },

      pending: (done) => {
        this.bucketDB.createAllFromDb(this.clientId, done);
      }
    }, (err, result) => {
      // ensure that the ORM results are valid
      if (!(!err && result && _.isArray(result.active) && _.isArray(result.pending))) {
        err = new Error('sync-client#initialize() unable to load data from storage.');
      }

      if (err) {
        return callback(err);
      }


      // cache the result back into the instance. we unshift here since w know that anything loaded from db must be
      // older than what has been added to the present queue
      this._activeBuckets.push(...result.active);
      this._pendingBuckets.push(...result.pending);

      callback(null);
    });
  }

  /**
   * Returns the active bucket and pending buckets to the callback
   *
   * @private
   * @param {Function} callback - receives (err:Error, activeBucket:Bucket, pendingBuckets:Array.<Bucket>)
   *
   * @note this function is runtime overridden during the `initialize` call
   */
  withBuckets (callback) {
    callback(null, this._activeBuckets, this._pendingBuckets);
  }

  /**
   * Adds active bucket to pending list and detaches the active bucket to be subsequently processed in callback
   *
   * @private
   * @param {Function} callback - receives (err:Error, collatedLastActiveBucket:Bucket, allPendingBuckets:Array)
   */
  dispatchBuckets (callback) {
    this.withBuckets((err, active, pending) => {
      if (err) { return callback(err); }

      // in case active bucket is empty, we short-circuit the rest of the operations since there is nothing to dispatch
      if (!active.length) {
        return callback(null, null, pending);
      }

      // @note we could at this point not collate buckets if we have only one bucket in the list, however since we need
      // a new bucket anyway (to avoid race codition) and that single bucket optimisation can be done at the collation
      // layer, we do not do the optimisation here
      let affectedBuckets = active.slice(), // clone the active bucket for giving instructions to ORM post process.
        transferBucket = Bucket.collateBuckets(affectedBuckets, this.clientId);

      pending.push(transferBucket);
      // remove the elements in active buckets that are currently in affected bucket
      _.pullAllBy(active, affectedBuckets, 'id');

      // we save the new collated item first and start deleting the rest
      this.bucketDB.saveToDb(transferBucket, (err) => {
        if (err) { return callback(err); }
        this.bucketDB.destroyAllInDb(affectedBuckets, (err) => {
          callback(err, transferBucket, pending);
        });
      });
    });
  }

  /**
   * Add incoming `changesets` to the bucket in series, then call process(cb)
   *
   * @param {Array.<{model_id:String,action:String}>} changesets -
   * @param {Function} callback - receives (err:Error)
   *
   * @todo - any reason not to do this in parallel?
   */
  addChangesets (changesets, callback) {
    this.withBuckets((err, active) => {
      if (err) { return callback(err); }

      // if changeset is empty, we have nothing to do
      if (!(_.isArray(changesets) && changesets.length)) {
        return callback(new Error('sync-client.addChangesets: no changeset to add'));
      }

      let bucket = Bucket.createFromObject(this.clientId + ACTIVE_BUCKET_ID_SUFFIX);

      _.forEach(changesets, (changeset) => {
        bucket.add(changeset);
      });

      active.push(bucket);
      this.bucketDB.saveToDb(bucket, callback);
    });
  }

  /**
   * Remove a set of changesets from a specific bucket
   *
   * @param {Array.<{model_id:String, action:String, bucketId:String}>} changesets -
   * @param {Function} callback -
   */
  removeChangesets (changesets, callback) {
    if (!(_.isArray(changesets) && changesets.length)) {
      return callback(new Error('sync-client.removeChangesets: no changeset to remove'));
    }

    this.withBuckets((err, __active, pending) => {
      __active = null; // prevent even accidental use of this variable!
      if (err) { return callback(err); }

      /**
       * This hash is used to cache all the affected buckets so that during db interaction we are not required to use
       * _.find every time
       * @private
       * @type {Object.<Bucket>}
       */
      let affectedBuckets = _.transform(changesets, (cache, changeset) => {
        let bucketId = changeset.bucketId, // will throw if changeset is not an object
          // eslint-disable-next-line arrow-body-style
          affectedBucket = cache[bucketId] || _.find(pending, (bucket) => (bucket.id === bucketId));

        // if we did not find any bucket with id, we move on
        // @todo persistence ~ do we raise error here?
        if (!affectedBucket) { return; }

        cache[bucketId] = affectedBucket; // cache the bucket for an id-obj hash map to avoid subsequent .find
        affectedBucket.remove(changeset); // @todo what happens if removal fails

        // in case the bucket is empty, we need to get rid of the same from the pending list, so that it does not get
        // repeatedly loaded from db / getAllChangesets
        if (affectedBucket.isEmpty()) {
          // eslint-disable-next-line arrow-body-style
          _.remove(pending, (bucket) => (bucket.id === affectedBucket.id));
        }
      }, {});

      this.bucketDB.updateOrDestroyAllInDb(affectedBuckets, callback);
    });
  }

  /**
   * This removes all actions and instances from all buckets which has reference to a particular model ID
   *
   * @param {Array.<String>} modelIds -
   * @param {Function} callback  -  receives (err:?Error)
   */
  removeModelsFromAllChangesets (modelIds, callback) {
    if (!(_.isArray(modelIds) && modelIds.length)) {
      return callback(new Error('sync-client.removeModelsFromAllChangesets: no model id provided'));
    }

    this.withBuckets((err, active, pending) => {
      if (err) { return callback(err); }

      // @todo => Instead of persisting all buckets, we need to ensure that only the buckets in which the model ID
      // was removed get persisted, otherwise the other actions will be a waste. So the removeModel function inside
      // Bucket should return a list of affected buckets
      let allBuckets = pending.concat(active);

      // Traverse through all buckets and remove the model ID from each bucket
      _.forEach(allBuckets, (bucket) => {
        modelIds.forEach((modelId) => {
          bucket.removeModel(modelId); // @todo: possibly indicated of removal changed something as function return
        });

        // If the bucket becomes empty, then remove it from memory
        if (bucket.isEmpty()) {
          // eslint-disable-next-line arrow-body-style
          _.remove(isBucketActive(bucket) ? active : pending, (removal) => (removal.id === bucket.id));
        }
      });

      this.bucketDB.updateOrDestroyAllInDb(allBuckets, callback);
    });
  }

  /**
   * Get changesets from the active bucket and also mark the same as pending during this process
   *
   * @param {Function} callback -
   */
  getChangesets (callback) {
    this.dispatchBuckets((err, transfer) => {
      if (err) { return callback(err); }

      if (!transfer || transfer.isEmpty()) {
        return callback(null, []);
      }

      // by this time, the in-memory representation of active and pending buckets has already been swapped, hence
      // we can do overlapping getChangesets even if fetching the changeset takes time
      Bucket.getChangesets(transfer, this.services.dbService, callback);
    });
  }

  /**
   * This function collates all changes (including ones from pending bucket) into one single bucket and
   * processes the same. This is useful when processing failed buckets loaded from database
   *
   * @param {Function} callback - receives (err:Error, changesets:Array)
   */
  getAllChangesets (callback) {
    this.dispatchBuckets((err, __transfer, pending) => {
      __transfer = null; // prevent accidentally dealing with dispatched buckets
      if (err) { return callback(err); }

      if (!pending.length) {
        return callback(null, []);
      }

      // we can short-circuit collation in case of a single bucket
      if (pending.length === 1) {
        return Bucket.getChangesets(pending[0], this.services.dbService, callback);
      }

      // generate a collated bucket by coalescing all buckets
      let unified = Bucket.collateBuckets(pending, this.clientId),
        originalPendingBuckets = pending.slice(); // keep a copy to instruct ORM

      // clear everything in memory and push that one collated bucket in the pending list
      _.pullAllBy(this._pendingBuckets, originalPendingBuckets, 'id');

      // keep only the last unified bucket
      this._pendingBuckets.push(unified);

      async.series([
        (next) => {
          this.bucketDB.saveToDb(unified, next);
        },
        (next) => {
          this.bucketDB.destroyAllInDb(originalPendingBuckets, next);
        }
      ], (err) => {
        if (err) { return callback(err); }
        Bucket.getChangesets(unified, this.services.dbService, callback);
      });
    });
  }
}

module.exports = SyncClient;


/***/ }),

/***/ 2869:
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module sync-client/bucket-db
 */

const _ = __webpack_require__(0),
  async = __webpack_require__(47),
  Bucket = __webpack_require__(800),
  tsid = __webpack_require__(2870),

  CONCURRENCY_BATCH_SIZE = 100,
  SEP = '__';

class BucketDB {
  constructor (db) {
    /**
     * @private
     */
    this.model = db.models.bucket;
  }

  /**
   * Writes a bucket to DB
   *
   * @param {Bucket} bucket -
   * @param {Function} callback - receives (err:?Error)
   */
  saveToDb (bucket, callback) {
    // if the bucket has order id, we can simply send query to ORM
    if (bucket.hasOwnProperty('orderId')) {
      return this.model.updateOrCreate({
        id: bucket.id
      }, _.assign({}, bucket), callback);
    }

    tsid.generate((err, id) => {
      if (err) { return callback(err); }

      // check again to ensure that someone else has not injected order-id during async call
      if (!bucket.hasOwnProperty('orderId')) {
        bucket.orderId = id;
      }

      this.model.updateOrCreate({
        id: bucket.id
      }, _.assign({}, bucket), callback);
    });
  }

  /**
   * Writes an array of buckets to DB
   *
   * @param {Array<Bucket>} buckets -
   * @param {Function} callback - receives (err:?Error)
   */
  saveAllToDb (buckets, callback) {
    async.eachLimit(buckets, CONCURRENCY_BATCH_SIZE, (bucket, next) => {
      this.saveToDb(bucket, next);
    }, callback);
  }

  /**
   * Deletes one bucket from database
   *
   * @param {Bucket} bucket -
   * @param {Function} callback - receives (err:?Error)
   */
  destroyInDb (bucket, callback) {
    this.model.destroy({
      id: bucket.id
    }, callback);
  }

  /**
   * Deletes an array of buckets from database
   *
   * @param {Array<Bucket>} buckets -
   * @param {Function} callback - receives (err:?Error)
   */
  destroyAllInDb (buckets, callback) {
    async.eachLimit(buckets, CONCURRENCY_BATCH_SIZE, (bucket, next) => {
      this.destroyInDb(bucket, next);
    }, callback);
  }

  /**
   * Loads one or more buckets from DB
   *
   * @param {String} clientId -
   * @param {Function} callback - receives (err:?Error, Array.<Bucket>)
   */
  createAllFromDb (clientId, callback) {
    this.model.find({
      clientId: clientId
    }, (err, buckets) => {
      // @todo persistence ~ figure out to retain order integrity
      // eslint-disable-next-line arrow-body-style
      callback(err, err ? null : _.map(buckets, (bucket) => Bucket.createFromObject(clientId, bucket)));
    });
  }

  /**
   * Destroys all buckets associated with a client
   *
   * @param {String} clientId -
   * @param {Function} callback - receives (err:?Error)
   *
   * @note be doubly sure before calling this
   */
  nukeAllInDb (clientId, callback) {
    this.model.destroy({
      clientId: clientId
    }, callback);
  }

  /**
   * Updates all buckets and deletes the ones that are empty
   *
   * @param {Array.<Bucket>} buckets
   * @param {Function} callback
   */
  updateOrDestroyAllInDb (buckets, callback) {
    async.eachLimit(buckets, CONCURRENCY_BATCH_SIZE, (bucket, next) => {
      // post removal, if the affected bucket is empty, we simply delete it from database and array of pending
      // buckets.
      if (bucket.isEmpty()) {
        this.destroyInDb(bucket, next);
      }
      else {
        // ensure that the affected bucket is updated
        // @todo any way to check if no change is needed and then not call update?
        this.saveToDb(bucket, next);
      }
    }, callback);
  }

  /**
   * Retrieves a previously saved special bucket
   *
   * @note the save for this function uses the `id` field to store data and isolate it using the clientId field, but
   * we remove them before bubbling up.
   *
   * @note The underlying backing storage makes it difficult for ORM to allow processing of complex queries with
   * exclusion parameters. ORM also mandates that the primary key be present in the data object. As such, having a
   * bucket accessible using fixed ID (and yet store an `id` inside it is near impossible.) Thus, we do a work around by
   * transforming the id while saving or retrieving data.
   *
   * @param {String} ext -
   * @param {String} clientId -
   * @param {Function} callback -
   *
   * @deprecated since 1.0
   */
  createFromDbById (ext, clientId, callback) {
    this.model.findOne(clientId + SEP + ext, (err, bucket) => {
      if (_.isObject(bucket) && _.isString(bucket.clientId)) {
        let components = bucket.clientId.split(SEP);

        components[0] && (bucket.clientId = components[0]);
        components[1] && (bucket.id = components[1]);
      }

      callback(err, Bucket.createFromObject(clientId, bucket));
    });
  }

  /**
   * Destroys an item from database referred by the ID
   *
   * @param {String} ext - id
   * @param {Bucket} bucket -
   * @param {Function} callback -
   *
   * @deprecated since 1.0
   */
  destroyInDbById (ext, bucket, callback) {
    this.model.destroy({
      id: (bucket.clientId + SEP + ext)
    }, callback);
  }
}

module.exports = BucketDB;


/***/ }),

/***/ 2870:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {/**
 * Module that allows users to deal with timestamp-based incremental ID generation
 * @module sync-client/timestamp-id
 */

const async = __webpack_require__(47),

  /**
   * This defines the right padding that is applied to timestamp. This is indicative of the total number of id that can
   * be generated on the same timestamp.
   *
   * @constant
   * @type {Number}
   */
  COLLISION_PITCH = 1000,

  /**
   * Error message that is forwarded when too many concurrent id requests are sent.
   *
   * @constant
   * @type {String}
   */
  ERROR_UNDERFLOW = 'timestamp-id: collition pitch underflow';

/**
 * This is an instance of TimestampID class used by the static generate function.
 *
 * @type {TimestampID}
 */
let generator;

/**
 * This class generates incremental IDs based on timestamp as a base.
 *
 * @private
 *
 * @example <caption>Simple usage</caption>
 * let timestampId = require('timestamp-id');
 *
 * // simple usage
 * timestampId.generate((err, id) => {
 *   console.log('generated id is', id);
 * });
 *
 * @example <caption>Using as a class</caption>
 * let TimestampId = require('timestamp-id'),
 *   tsid = new TimestampId();
 *
 * tsid.generate((err, id) => {
 *   console.log('generated id is', id);
 * });
 */
class TimestampID {
  /**
   * Creates an instance of TimestampID.
   *
   * @param {Number=} [offset=0]
   */
  constructor (offset) {
    /**
     * This is the timestamp offset that is used while calculating current timestamp
     *
     * @memberof TimestampID.prototype
     * @private
     * @type {Number}
     */
    this.offset = Number.isFinite(offset) ? offset : 0;

    /**
     * This sets a queue for processing ID generation requests
     *
     * @memberof TimestampID.prototype
     * @private
     * @type {async.queue}
     */
    this.queue = async.queue((fn, done) => {
      let id = this.id(),
        err = (id === -1) ? new Error(ERROR_UNDERFLOW) : null;

      try { fn(err, id); }
      catch (e) { setImmediate(() => { throw e; }); }

      done();
    }, 1);

    // set this instance to start tracking from now
    this.reset(this.now());
  }

  /**
   * Resets the tracking to current time
   *
   * @param {Number} timestamp
   * @private
   */
  reset (timestamp) {
    /**
     * Stores the current timestamp for tracking the same
     *
     * @private
     * @type {Number}
     */
    this.timestamp = timestamp;

    /**
     * Counter to track concurrent IDs generated on same time
     *
     * @private
     * @type {Number}
     */
    this.index = 0;
  }

  /**
   * Returns the current timestamp using Date.now and adjusts for offset
   *
   * @private
   * @returns {Number}
   */
  now () {
    return Date.now() + this.offset;
  }

  /**
   * Generates a uniqie ID based on current timestamp
   *
   * @private
   * @returns {Number}
   */
  id () {
    let ts = this.now();

    // if timestamp changes, reset increment index
    if (ts > this.timestamp) {
      this.reset(ts);
    }

    // this is a severe edge case, which causes increment index to overflow into
    // next tick
    if (this.index >= COLLISION_PITCH) {
      return -1;
    }

    return (ts * COLLISION_PITCH) + (++this.index);
  }

  /**
   * Generates a uniqie ID based on current timestamp
   *
   * @param {Function} callback
   *
   * @example
   * let TimestampId = require('timestamp-id'),
   *   tsid = new TimestampId();
   *
   * tsid.generate((err, id) => {
   *   console.log('generated id is', id);
   * });
   */
  generate (callback) {
    this.queue.push(callback);
  }

  /**
   * Returns a new timestamp id generator
   *
   * @static
   * @param {Number} offset
   * @returns {TmestampID}
   */
  static generator (offset) {
    return new TimestampID(offset);
  }

  /**
   * @private
   * @returns {Number}
   */
  static COLLISION_PITCH () {
    return COLLISION_PITCH;
  }
}

// initialize the global timestamp generator
generator = TimestampID.generator();

module.exports = {
  TimestampID: TimestampID,

  /**
   * @param {?Number} offset
   * @returns {Number}
   */
  offset: function (offset) {
    if (Number.isFinite(offset)) {
      generator.offset = offset;
    }

    return generator.offset;
  },

  /**
   * Get a new timestamp based unique ID
   *
   * @param {Function} callback
   *
   * @example
   * let timestampId = require('timestamp-id');
   *
   * // simple usage
   * timestampId.generate((err, id) => {
   *   console.log('generated id is', id);
   * });
   */
  generate: function (callback) {
    return generator.generate(callback);
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24).setImmediate))

/***/ }),

/***/ 2871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootSync__ = __webpack_require__(2872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_telemetry_analyticsHandler__ = __webpack_require__(2912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_SyncFetcherService__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_UserFetcherService__ = __webpack_require__(2914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_ConnectivityService__ = __webpack_require__(2915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_OnBoardingService__ = __webpack_require__(2916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_SharedAlertProxy__ = __webpack_require__(2917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_services_NotificationPollingService__ = __webpack_require__(1276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_AccessControl_AccessControlService__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_services_GateKeeperService__ = __webpack_require__(1216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_AccessControl_PermissionService__ = __webpack_require__(446);














/**
                                                                                                *
                                                                                                * @param {*} cb
                                                                                                */
function bootShared(cb) {
  _.assign(window.pm, {
    connectivity: new __WEBPACK_IMPORTED_MODULE_5__modules_services_ConnectivityService__["a" /* default */](),
    toasts: __WEBPACK_IMPORTED_MODULE_8__models_SharedAlertProxy__ });

  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_1__bootSync__["a" /* default */]],
  err => {
    Object(__WEBPACK_IMPORTED_MODULE_2__models_telemetry_analyticsHandler__["a" /* default */])();
    let syncRemoteFetcherBus = pm.eventBus.channel('sync-remote-fetch'),
    modelEventBus = pm.eventBus.channel('model-events');

    syncRemoteFetcherBus.subscribe(__WEBPACK_IMPORTED_MODULE_3__modules_services_SyncFetcherService__["d" /* scheduleFetch */]);
    modelEventBus.subscribe(__WEBPACK_IMPORTED_MODULE_4__modules_services_UserFetcherService__["b" /* userFetch */]);
    __WEBPACK_IMPORTED_MODULE_10__services_AccessControl_AccessControlService__["a" /* default */].init();
    __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__["a" /* default */].init();
    __WEBPACK_IMPORTED_MODULE_7__services_OnBoardingService__["a" /* default */].init();
    __WEBPACK_IMPORTED_MODULE_11__modules_services_GateKeeperService__["a" /* default */].init();

    // Starts the user fetch and unlocks the session.
    Object(__WEBPACK_IMPORTED_MODULE_4__modules_services_UserFetcherService__["a" /* initiateBoot */])();

    // initialize permissions refetch handlers
    Object(__WEBPACK_IMPORTED_MODULE_12__services_AccessControl_PermissionService__["b" /* initializePermissionsRefetch */])();

    pm.logger.info('Shared~boot - Success');
    return cb && cb(err);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (bootShared);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_sync_LocalChanges__ = __webpack_require__(2873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_sync_SyncManagerNew__ = __webpack_require__(2875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_sync_timeline_helpers_BroadcastConnectivityStatus__ = __webpack_require__(2910);




/**
                                                                                                                          *
                                                                                                                          */
function bootSync(cb) {
  _.assign(window.pm, {
    localChanges: new __WEBPACK_IMPORTED_MODULE_0__models_sync_LocalChanges__["a" /* default */](),
    syncManager: new __WEBPACK_IMPORTED_MODULE_1__models_sync_SyncManagerNew__["a" /* default */]() });


  // used to initialize broadcast of socket and timeline status
  Object(__WEBPACK_IMPORTED_MODULE_2__modules_sync_timeline_helpers_BroadcastConnectivityStatus__["a" /* initializeConnectivityStatusBroadcast */])();
  pm.logger.info('Sync~boot - Success');
  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootSync);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConflictResolution__ = __webpack_require__(2874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SyncManagerHelper__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_async__);






/**
                            * Handles the queue
                            * @private
                            * @module sync/LocalChanges
                            * @see module:sync/SyncManager
                            */
var LocalChanges = __WEBPACK_IMPORTED_MODULE_1_backbone___default.a.Model.extend({
  /**
                                            * Functions:
                                            * add an unsynced change
                                            * check for conflicts - this will show a modal even if a single server change has a conflict. if not, callback
                                            */

  initialize: function () {
  },

  /**
      * Called when server changes are queued, and have to be conflict-resolved with current unsynced changes
      */
  resolveConflicts: function (crState, opts) {
    pm.localChanges.pendingResolution = null;

    var crState = {
      // pre-detection
      changesetsFromServer: crState.changesetsFromServer || [],
      changesetsFromClient: crState.changesetsFromClient || [],

      // detection and sanitization
      conflicts: [],
      clientChangesetsToBeDropped: [],
      clientModelTreesToBeDropped: [],

      // user-resolution
      userResolution: [],

      // final system resolution
      changesetsToClient: [],
      changesetsToServer: [],

      source: opts.source };


    __WEBPACK_IMPORTED_MODULE_3_async___default.a.series([
    // fetch local changes
    function (callback) {
      // do not fetch if the flow is session/sync
      if (opts.source !== 'session-sync') {
        console.log('bailing fetch from sync client');
        return callback();
      }

      pm.syncManager.syncClient.getAllChangesets((err, changesets) => {
        if (err) {
          return callback(err);
        }

        crState.changesetsFromClient = changesets;
        return callback(null);
      });
    },

    function (callback) {
      crState.changesetsToServer = _.cloneDeep(crState.changesetsFromClient);
      return callback(null);
    },

    // legacy handling of conflicts
    function (callback) {
      Object(__WEBPACK_IMPORTED_MODULE_0__ConflictResolution__["c" /* detectConflicts */])(crState);
      return callback(null);
    },

    function (callback) {
      // drop client changesets marked to be dropped
      _.forEach(crState.clientChangesetsToBeDropped, clientChangesetToBeDropped => {
        Object(__WEBPACK_IMPORTED_MODULE_0__ConflictResolution__["b" /* deleteCRChangesetToServer */])(clientChangesetToBeDropped, crState);
      });

      crState.clientChangesetsToBeDropped = [];

      return callback(null);
    },

    function (callback) {
      if (_.isEmpty(crState.clientModelTreesToBeDropped)) {
        callback(null);
        return;
      }

      // drop clientModelTreesToBeDropped from sync client and changesetsToServer
      Object(__WEBPACK_IMPORTED_MODULE_2__SyncManagerHelper__["i" /* removeModelTreesFromClientChanges */])(crState, () => {
        callback(null);
      });
    }],


    // handle resolution
    function (err) {
      if (_.isEmpty(crState.changesetsFromServer) &&
      _.isEmpty(crState.changesetsFromClient)) {
        // console.log('No conflicts, server and client empty');
        pm.syncManager.onConflictResolutionCompleted(crState);
        return;
      }

      if (_.isEmpty(crState.changesetsFromServer)) {
        // console.log('No conflicts, server empty');
        pm.syncManager.sendChangesetsToServer(crState.changesetsToServer, err => {
          if (err) {
            pm.syncManager.onConflictResolutionError(err);
            return;
          }

          pm.syncManager.onConflictResolutionCompleted(crState);
        });
        return;
      }

      if (_.isEmpty(crState.changesetsFromClient)) {
        // console.log('No conflicts, client empty');

        // no client changes, process server changes
        pm.syncManager.saveProcessedServerChange(crState.changesetsToClient, () => {
          pm.syncManager.onConflictResolutionCompleted(crState);
        });
        return;
      }

      if (_.isEmpty(crState.conflicts)) {
        // console.log('No conflicts');

        // write server and client changes
        pm.syncManager.saveProcessedServerChange(crState.changesetsToClient, () => {
          pm.syncManager.sendChangesetsToServer(crState.changesetsToServer, err => {
            if (err) {
              pm.syncManager.onConflictResolutionError(err);
              return;
            }

            pm.syncManager.onConflictResolutionCompleted(crState);
          });
        });
        return;
      }

      console.log('CONFLICTS:', crState.conflicts);

      // cache the current conflict resolution data and show UI
      pm.localChanges.pendingResolution = crState;
      pm.syncManager.showConflicts(crState.conflicts);
    });
  },

  /**
      * Called when the "Re-sync" button in the conflict modal is clicked
      * @param radioArray - array of objects. each object contains the conflicting entity, server change, local change, and the selected change
      */
  onConflictsResolved: function (userResolution) {
    let crState = this.pendingResolution;

    this.pendingResolution = null;

    if (!crState) {
      pm.syncManager.onConflictResolutionError(new Error('NO_PENDING_RESOLUTION'));
      return;
    }

    crState.userResolution = userResolution;

    Object(__WEBPACK_IMPORTED_MODULE_0__ConflictResolution__["a" /* applyUserResolution */])(crState);

    pm.syncManager.saveProcessedServerChange(crState.changesetsToClient, () => {
      pm.syncManager.sendChangesetsToServer(crState.changesetsToServer, err => {
        if (err) {
          pm.syncManager.onConflictResolutionError(err);
          return;
        }

        pm.syncManager.onConflictResolutionCompleted(crState);
      });
    });
  },

  /**
      * Creates create changesets for all entites owned by the user. Used during initial sync. Any changes added to the queue will be conflict-resolved with anything in the server changes queue
      * if collection dump is true, all the user's collections are sent as /importCollection requests, not as separate changesets
      * @param syncImmediately
      * @param collectionDump
      * @param collectionId
      */
  syncAllObjects: function (syncImmediately, collectionDump, collectionId) {
    console.log('SM.syncAllObjects');
    return;
  } });


/* harmony default export */ __webpack_exports__["a"] = (LocalChanges);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export findIdenticalChangeset */
/* unused harmony export addConflictRows */
/* unused harmony export getConflictRows */
/* harmony export (immutable) */ __webpack_exports__["a"] = applyUserResolution;
/* harmony export (immutable) */ __webpack_exports__["b"] = deleteCRChangesetToServer;
/* harmony export (immutable) */ __webpack_exports__["c"] = detectConflicts;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_workspace_helper__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SyncManagerHelper__ = __webpack_require__(431);





/**
                                                              * identifier used to detect conflicting changesets
                                                              *
                                                              * @param {any} changeset
                                                              * @returns
                                                              */
function getChangesetIdentifier(changeset) {
  let action = changeset.action || _.get(changeset, ['meta', 'action']),
  model = changeset.model || _.get(changeset, ['meta', 'model']),
  modelId = changeset.model_id || _.get(changeset, ['data', 'modelId']);

  let identifier = model + ':' + modelId;

  if (_.includes(['share', 'unshare', 'transfer', 'favorite', 'unfavorite'])) {
    return identifier + ':' + action;
  }

  return identifier;
}

/**
   * are two changesets identical
   *
   * @param {any} src
   * @param {any} dest
   * @returns
   */
function isIdenticalChangeset(src, dest) {
  return getChangesetIdentifier(src) === getChangesetIdentifier(dest);
}

/**
   * find index of identical changeset
   *
   * @param {any} changeset
   * @param {any} changesets
   * @returns
   */
function findIndexIndenticalChangeset(changeset, changesets) {
  let changesetIdentifier = getChangesetIdentifier(changeset);

  return _.findIndex(changesets, eachChangeset => {
    let eachChangesetIdentifier = getChangesetIdentifier(eachChangeset);
    return changesetIdentifier === eachChangesetIdentifier;
  });
}

/**
   * find identical changeset
   * @param id
   * @returns {*}
   * @private
   */
function findIdenticalChangeset(changeset, changesets) {
  let changesetIdentifier = getChangesetIdentifier(changeset);

  let changesetFound = _.find(changesets, eachChangeset => {
    let eachChangesetIdentifier = getChangesetIdentifier(eachChangeset);
    return changesetIdentifier === eachChangesetIdentifier;
  });

  if (!changesetFound) {
    return null;
  }

  return changesetFound;
}

/**
   * Add a row to the current set of conflicts. One row contains entityKey/serverChange/localChange. Once all rows have been added, the modal is shown
   * @param rows
   * @private
   */
function addConflictRows(rows, currentRows) {
  _.forEach(rows, row => {
    row.isLocalSelected = true;
    row.isServerSelected = false;
    currentRows.push(row);
  });
}

/**
  * Given two changes, one local (from unsynced), one remote (from server queue), generates a set of conflict rows
  * that the user must choose from, and deletes unsynced changes that were used to generate the conflict. The unsynced changes are re-added after resolution
  * If n>0 rows are added, the modal is shown
  */
function getConflictRows(localChange, remoteChange, crState) {
  // these fields are not filled by the user / are redundant. Don't need to be shown in the conflict screen
  var fieldsToIgnore = {
    'response': ['responseCode', 'state', 'headers', 'write', 'requestId', 'collection', 'collectionId', 'collectonId', 'time', 'searchResultScrolledTo', 'forceNoPretty', 'runTests', 'request', 'requestObject'],
    'request': ['write', 'responses', 'collectionOwner', 'folder', 'collection', 'tests', 'preRequestScript', 'currentHelper', 'helperAttributes'],
    'folder': ['write', 'collection_name', 'collection_owner', 'order', 'folders_order', 'folder', 'collection'],
    'collection': ['folders', 'subscribed', 'public', 'write', 'shared', 'order', 'folders_order'],
    'environment': ['syncedFilename'] };

  var genericFieldsToIgnore = ['owner', 'timestamp', 'synced', 'createdAt', 'updatedAt', 'time', 'lastRevision', 'lastUpdatedBy', 'version'];

  var model = localChange.model;
  var model_id = localChange.data.modelId;
  var localAction; // string
  var remoteAction; // string

  if (remoteChange.meta) {
    remoteChange.action = remoteChange.meta.action;
    remoteChange.model = remoteChange.meta.model;
  }

  var localNameOrId = _.get(localChange, 'data.instance.name') || _.get(localChange, 'data.modelId');

  var ret = [];
  var ret_template = {};

  ret_template.localChange = _.cloneDeep(localChange);
  ret_template.remoteChange = _.cloneDeep(remoteChange);
  ret_template.model = model;
  ret_template.model_id = model_id;
  ret_template.nameOrId = localNameOrId;
  ret_template.id = model_id;
  ret_template.key = '';
  ret_template.revision = remoteChange.revision;
  ret_template.showRow = true;

  if (localChange.action === 'destroy' && remoteChange.action === 'destroy') {
    crState.clientChangesetsToBeDropped.push(localChange);
    return null;
  }

  // drop all conflicts in history and collectionrun
  if (localChange.model === 'history' || localChange.model === 'collectionrun') {
    crState.clientChangesetsToBeDropped.push(localChange);
    return null;
  }

  if (_.includes(['create', 'import'], localChange.action) && remoteChange.action === 'create') {
    // two creates should still be merged
    localAction = 'Created';
    remoteAction = 'Created';
    let ret_template_temp = _.clone(ret_template);

    ret_template_temp.localAction = localAction;
    ret_template_temp.remoteAction = remoteAction;

    // get changed keys
    let localUpdates = _.get(localChange, 'data.instance');
    let subRevision = 0.001;
    var anyRowConflicting = false;
    if (!localUpdates.hasOwnProperty('folder') && remoteChange.data.folder) {
      localUpdates.folder = null;
    }
    remoteChange.data = sanitizeRemoteChangeData(remoteChange);
    for (let pKey in localUpdates) {
      if (localUpdates.hasOwnProperty(pKey) && remoteChange.data && remoteChange.data.hasOwnProperty(pKey)) {

        ret_template_temp.showRow = true;
        if (pKey === 'sharedWithTeam') {
          pKey = 'shared';
          localUpdates.shared = localUpdates.sharedWithTeam;
        }
        if (genericFieldsToIgnore.indexOf(pKey) !== -1) {
          ret_template_temp.key = pKey;
          ret_template_temp.revision = remoteChange.revision + subRevision;
          ret_template_temp.showRow = false;

          // ret.push(_.clone(ret_template_temp));
        } else
        if (model === 'user' && pKey !== 'globals') {
          // nothing to do here
        } else
        if (pKey === 'events') {
          let diffObj = getEventsDiff(localUpdates.events, remoteChange.data.events);
          if (!_.isEmpty(diffObj.key)) {
            ret_template_temp.key = diffObj.key.join('&');
            ret_template_temp.serverValue = JSON.stringify(diffObj.remoteChange);
            ret_template_temp.localValue = JSON.stringify(diffObj.localChange);
          }
        } else
        if (fieldsToIgnore[model] && fieldsToIgnore[model].indexOf(pKey) !== -1) {
          // else if(model==="folder" && pKey==="collection") {
          ret_template_temp.key = pKey;
          ret_template_temp.revision = remoteChange.revision + subRevision;
          ret_template_temp.showRow = false;

          // ret.push(_.clone(ret_template_temp));
        } else
        if (pKey !== 'folder' && (remoteChange.data[pKey] == 'null' && localUpdates[pKey] == null || remoteChange.data[pKey] == null && localUpdates[pKey] == 'null')) {
          // do nothing
        } else
        if (model === 'request' &&
        pKey === 'data' && remoteChange.data.dataMode === 'raw') {

          // data field only matters if dataMode!=raw
        } else
        if (model === 'request' &&
        pKey === 'rawModeData' && remoteChange.data.dataMode !== 'raw') {

          // rawModeData field only matters if dataMode==raw
        } else
        if (!areChangeSetsEqual(localUpdates[pKey], remoteChange.data[pKey])) {
          anyRowConflicting = true;
          ret_template_temp.key = pKey;
          let localChangeToShow = localUpdates[pKey];
          let remoteChangeToShow = remoteChange.data[pKey];
          if (pKey == 'data' && remoteChange.data.dataMode == 'raw') {
            // change
            localChangeToShow = localUpdates.rawModeData;
            remoteChangeToShow = remoteChangeToShow[0];
            remoteChange.data[pKey] = remoteChangeToShow;
            localUpdates[pKey] = localChangeToShow;
          }
          let oldLocalChange = _.cloneDeep(localChangeToShow);

          if (pKey === 'folder') {
            // Custom value shown for a transfer conflict (request.folder is conflicting)
            // @todo numaan read and fill in folder name
            // var targetFolder = pm.collections.getFolderById(localChangeToShow);
            if (localChangeToShow) {
              localChangeToShow = '[In another folder]';
            } else
            {
              localChangeToShow = '[Not in a folder]';
            }

            // @todo numaan read and fill in folder name
            // targetFolder = pm.collections.getFolderById(remoteChangeToShow);
            if (remoteChangeToShow) {
              remoteChangeToShow = '[In another folder]';
            } else
            {
              remoteChangeToShow = '[Not in a folder]';
            }
          } else
          {
            if (_.isArray(localChangeToShow)) {
              localChangeToShow = JSON.stringify(localChangeToShow).replace(/":"/g, '": "').replace(/","/g, '", "');
            } else
            if (_.isObject(localChangeToShow)) {
              localChangeToShow = JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].objectDiff(remoteChangeToShow, localChangeToShow)).replace(/":"/g, '": "').replace(/","/g, '", "');
            }

            if (_.isArray(remoteChangeToShow)) {
              remoteChangeToShow = JSON.stringify(remoteChangeToShow).replace(/":"/g, '": "').replace(/","/g, '", "');
            } else
            if (_.isObject(remoteChangeToShow)) {
              remoteChangeToShow = JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].objectDiff(oldLocalChange, remoteChangeToShow)).replace(/":"/g, '": "').replace(/","/g, '", "');
            }
          }

          // ret_template_temp.serverValue = "Set to: " + remoteChangeToShow;
          // ret_template_temp.localValue = "Set to: " + localChangeToShow;
          ret_template_temp.serverValue = remoteChangeToShow;
          ret_template_temp.localValue = localChangeToShow;

          ret_template_temp.revision = remoteChange.revision + subRevision;
          subRevision += 0.001;

          // Hack if the key is globals
          if (pKey === 'globals' && model === 'user') {
            setGlobalConflictMessage(ret_template_temp, JSON.stringify(localUpdates.globals), JSON.stringify(remoteChange.data.globals));
          }

          // remove all unnessecary keys from the change
          /* for(var key1 in ret_template_temp.localChange.data) {
              if(key1!=="id" && key1!==pKey && !(model=="folder" && key1==="collection")) {
                  delete ret_template_temp.localChange.data[key1];
                  delete ret_template_temp.remoteChange.data[key1];
              }
          }*/

          ret.push(_.clone(ret_template_temp));
        }
      }
    }

    // if there's no row conflicting with this change
    if (anyRowConflicting === false) {
      crState.clientChangesetsToBeDropped.push(localChange);
      return null;
    }
  }

  if (localChange.action === 'update' && remoteChange.action === 'update') {
    localAction = 'Updated';
    remoteAction = 'Updated';

    let localUpdates = _.cloneDeep(_.get(localChange, 'data.instance'));

    var pKeys = [];
    for (var pKeysIterator in localUpdates) {
      if (localUpdates.hasOwnProperty(pKeysIterator)) {
        pKeys.push(pKeysIterator);
      }
    }
    var numKeys = pKeys.length;

    // get changed keys

    let subRevision = 0.001;

    // for(var pKey in localUpdates) {
    for (var i = 0; i < numKeys; i++) {
      let ret_template_temp = _.cloneDeep(ret_template);
      ret_template_temp.localAction = localAction;
      ret_template_temp.remoteAction = remoteAction;

      let pKey = pKeys[i];

      // if same key exists on both sides
      if (localUpdates.hasOwnProperty(pKey) && remoteChange.data && remoteChange.data.hasOwnProperty(pKey)) {
        ret_template_temp.showRow = true;
        if (genericFieldsToIgnore.indexOf(pKey) !== -1) {
          ret_template_temp.key = pKey;
          ret_template_temp.revision = remoteChange.revision + subRevision;
          ret_template_temp.showRow = false;

          // ret.push(_.clone(ret_template_temp));
        } else
        if (fieldsToIgnore[model] && fieldsToIgnore[model].indexOf(pKey) !== -1) {
          ret_template_temp.key = pKey;
          ret_template_temp.revision = remoteChange.revision + subRevision;
          ret_template_temp.showRow = false;

          // ret.push(_.clone(ret_template_temp));
        } else
        if (remoteChange.data[pKey] == 'null' && localUpdates[pKey] == null || remoteChange.data[pKey] == null && localUpdates[pKey] == 'null') {
          // do nothing
        } else
        if (model === 'request' &&
        pKey === 'data' && remoteChange.data.dataMode === 'raw') {

          // data field only matters if dataMode!=raw
        } else
        if (model === 'request' &&
        pKey === 'rawModeData' && remoteChange.data.dataMode !== 'raw') {

          // rawModeData field only matters if dataMode==raw
        } else
        if (model === 'workspace' && _.includes(['dependencies', 'members'], pKey)) {
          // dont show conflicts for workspace.dependencies/members
        } else
        if (!areChangeSetsEqual(localUpdates[pKey], remoteChange.data[pKey])) {
          ret_template_temp.key = pKey;

          // Replace so that word-break works correctly
          let localChangeToShow = localUpdates[pKey];
          let remoteChangeToShow = remoteChange.data[pKey];

          if (pKey == 'data' && remoteChange.data.dataMode == 'raw') {
            // change
            localChangeToShow = localUpdates.rawModeData;
            remoteChangeToShow = remoteChangeToShow[0];
          }

          let oldLocalChange = _.cloneDeep(localChangeToShow);

          if (pKey === 'folder') {
            // Custom value shown for a transfer conflict (request.folder is conflicting)
            // @todo numaan change this to read folder name
            // var targetFolder = pm.collections.getFolderById(localChangeToShow);
            if (localChangeToShow) {
              localChangeToShow = '[In another folder]';
            } else
            {
              localChangeToShow = '[Not in a folder]';
            }

            // targetFolder = pm.collections.getFolderById(remoteChangeToShow);
            // @todo numaan change this to read folder name
            if (remoteChangeToShow) {
              remoteChangeToShow = '[In another folder]';
            } else
            {
              remoteChangeToShow = '[Not in a folder]';
            }
          } else

          if (pKey === 'events') {
            let diffObj = getEventsDiff(localUpdates.events, remoteChange.data.events);
            if (!_.isEmpty(diffObj.key)) {
              ret_template_temp.key = diffObj.key.join('&');
              localChangeToShow = JSON.stringify(diffObj.localChange);
              remoteChangeToShow = JSON.stringify(diffObj.remoteChange);
            }
          } else
          {
            if (_.isArray(localChangeToShow)) {
              localChangeToShow = JSON.stringify(localChangeToShow).replace(/":"/g, '": "').replace(/","/g, '", "');
            } else
            if (_.isObject(localChangeToShow)) {
              localChangeToShow = JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].objectDiff(remoteChangeToShow, localChangeToShow)).replace(/":"/g, '": "').replace(/","/g, '", "');
            }

            if (_.isArray(remoteChangeToShow)) {
              remoteChangeToShow = JSON.stringify(remoteChangeToShow).replace(/":"/g, '": "').replace(/","/g, '", "');
            } else
            if (_.isObject(remoteChangeToShow)) {
              remoteChangeToShow = JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].objectDiff(oldLocalChange, remoteChangeToShow)).replace(/":"/g, '": "').replace(/","/g, '", "');
            }
          }


          ret_template_temp.serverValue = 'Updated to: ' + remoteChangeToShow;
          ret_template_temp.localValue = 'Updated to: ' + localChangeToShow;

          ret_template_temp.revision = remoteChange.revision + subRevision;
          subRevision += 0.001;

          // Hack if the key is globals
          if (pKey === 'globals' && model === 'user') {
            setGlobalConflictMessage(ret_template_temp, localUpdates.globals, remoteChange.data.globals);
          }

          ret.push(_.clone(ret_template_temp));
        }
      }
    }
  } else
  if (localChange.action === 'destroy' && remoteChange.action === 'update') {
    localAction = 'Deleted';
    remoteAction = 'Updated';
    let ret_template_temp = _.clone(ret_template);
    ret_template_temp.localAction = localAction;
    ret_template_temp.serverValue = 'Updated to: ' + JSON.stringify(remoteChange.data);
    ret_template_temp.localValue = 'Deleted';
    ret_template_temp.remoteAction = remoteAction;
    ret_template_temp.key = 'Whole ' + model; // "Whole collection"
    ret.push(ret_template_temp);
  } else
  if (localChange.action === 'update' && remoteChange.action === 'destroy') {
    localAction = 'Updated';
    remoteAction = 'Deleted';
    let ret_template_temp = _.clone(ret_template);
    ret_template_temp.localAction = localAction;
    ret_template_temp.remoteAction = remoteAction;
    ret_template_temp.serverValue = 'Deleted';
    ret_template_temp.localValue = 'Updated to: ' + JSON.stringify(_.get(localChange, 'data.instance'));
    ret_template_temp.key = 'Whole ' + model; // "Whole collection"
    ret.push(ret_template_temp);
  } else
  if (localChange.action === 'transfer' && remoteChange.action === 'transfer') {
    localAction = 'Moved';
    remoteAction = 'Moved';
    let ret_template_temp = _.clone(ret_template);
    ret_template_temp.key = 'Destination';

    ret_template_temp.localAction = localAction;
    ret_template_temp.remoteAction = remoteAction;
    ret_template_temp.serverValue = 'Moved to: ' + remoteChange.data.to.model + ':' + remoteChange.data.to.model_id;
    ret_template_temp.localValue = 'Moved to: ' + localChange.data.to.model + ':' + localChange.data.to.modelId;
    ret.push(ret_template_temp);
  } else
  if (localChange.action === 'share' && remoteChange.action === 'share') {
    localAction = 'Permissions Updated';
    remoteAction = 'Permissions Updated';
    let ret_template_temp = _.clone(ret_template);
    ret_template_temp.key = 'Permissions';

    ret_template_temp.localAction = localAction;
    ret_template_temp.remoteAction = remoteAction;
    ret_template_temp.serverValue = JSON.stringify({
      team: remoteChange.data.team,
      users: remoteChange.data.users },
    null, 2);
    ret_template_temp.localValue = JSON.stringify({
      team: localChange.data.team,
      users: localChange.data.users },
    null, 2);
    ret.push(ret_template_temp);
  }

  return ret;
}

/**
   * For any given two changesets it look for equality,
   * The only exception is it will treat all the falsy values equally.
   * @param {*} LocalChangeset to compare.
   * @param {*} RemoteChangeset to compare.
   * @returns {Boolean} Whether the given two changesets are equal or not.
   */
function areChangeSetsEqual(local, remote) {
  return _.isEqualWith(local, remote, (obj, other) => {
    // Checks for all empty values ("", null, undefined, {}, []), will be treated equally
    if (_.isEmpty(obj) && _.isEmpty(other)) {
      return true;
    }
    return; // This means equality will be taken care by default isEqual methods.
  });
}

/**
   * This will sanitize the remotechangeset data.
   * @param {*} remoteChange to sanitize.
   * @returns {*} the sanitized data of the remoteChange provided.
   */
function sanitizeRemoteChangeData(remoteChange) {
  let model = _.get(remoteChange, 'meta.model');

  // we are sanitizing the environment values coming from the sync server
  // As, we figured out in some cases of the app, there is an extra property hovered went along with the data.
  if (model === 'environment' && _.isArray(_.get(remoteChange, 'data.values'))) {

    remoteChange.data.values = _.map(remoteChange.data.values, value => {
      return _.pick(value, ['enabled', 'key', 'type', 'value']);
    });
  }
  return remoteChange.data;
}

/**
   * create diff for events
   *
   * @param {any} localData
   * @param {any} remoteData
   * @returns
   */
function getEventsDiff(localData, remoteData) {
  let localEvents = new __WEBPACK_IMPORTED_MODULE_0_postman_collection__["EventList"]({}, localData),
  localPrScript = _.invoke(_.head(localEvents.listenersOwn('prerequest')), 'script.toSource'),
  localTests = _.invoke(_.head(localEvents.listenersOwn('test')), 'script.toSource'),
  remoteEvents = new __WEBPACK_IMPORTED_MODULE_0_postman_collection__["EventList"]({}, remoteData),
  remotePrScript = _.invoke(_.head(remoteEvents.listenersOwn('prerequest')), 'script.toSource'),
  remoteTests = _.invoke(_.head(remoteEvents.listenersOwn('test')), 'script.toSource'),
  changesObj = {
    key: [],
    localChange: {},
    remoteChange: {} };


  if (!_.isEqual(_.trim(localPrScript), _.trim(remotePrScript))) {
    changesObj.key.push('Pre-request Script');
    changesObj.localChange['Pre-request Script'] = localPrScript;
    changesObj.remoteChange['Pre-request Script'] = remotePrScript;
  }
  if (!_.isEqual(_.trim(localTests), _.trim(remoteTests))) {
    changesObj.key.push('Tests');
    changesObj.localChange['tests'] = localTests;
    changesObj.remoteChange['tests'] = remoteTests;
  }
  return changesObj;
}

/**
   * JSON string to show in the conflict modal (because globals are a property of the user)
   * @param global
   * @returns {Array}
   * @private
   */
function getJsonStringFromGlobal(global) {
  if (!(global instanceof Array)) {
    return [];
  }
  var numGlobals = global.length;
  var obj = [];
  for (var i = 0; i < numGlobals; i++) {
    var thisObj = {};
    thisObj[global[i].key] = global[i].value;
    obj.push(thisObj);
  }
  return obj;
}

/**
   * Get conflict message for globals. (Has to be different since it's part of the users object)
   * @param ret_template_temp
   * @param localGlobals
   * @param remoteGlobals
   * @private
   */
function setGlobalConflictMessage(ret_template_temp, localGlobals, remoteGlobals) {
  var localValue = 'Updated to ' + JSON.stringify(getJsonStringFromGlobal(localGlobals), null, 2);
  var serverValue = 'Updated to ' + JSON.stringify(getJsonStringFromGlobal(remoteGlobals), null, 2);
  ret_template_temp.serverValue = serverValue;
  ret_template_temp.localValue = localValue;
}

/**
   * apply user resolution;
   *
   * @param {any} crState
   */
function applyUserResolution(crState) {
  _.forEach(crState.userResolution, resolution => {
    var model = resolution.model,
    model_id = resolution.model_id,
    key = resolution.key,
    remoteAction = resolution.remoteAction,
    localAction = resolution.localAction,
    choseLocal = resolution.isLocalSelected,
    changeToSync,value;

    if (choseLocal) {
      changeToSync = resolution.localChange;
      value = resolution.localValue;
    } else
    {
      changeToSync = resolution.remoteChange,
      value = resolution.serverValue;
    }

    if (remoteAction === 'Updated' && localAction === 'Updated') {
      // id enetity verb data timestamp
      if (choseLocal) {
        updateCRChangesetToServerProp(resolution.localChange, key, _.get(changeToSync, ['data', 'instance', key]), changeToSync, crState);
        createOrUpdateCRChangesetsToClient(changeToSync, key, _.get(changeToSync, ['data', 'instance', key]), crState);
      } else
      {
        // Add changeToSync to the serverChangesReadyToBeProcessedQueue
        // this should contain a revision!
        // this.serverChangesReadyToBeSaved.push(changeToSync);
        createOrUpdateCRChangesetsToClient(changeToSync, key, _.get(changeToSync, ['data', key]), crState);

        // don't delete the local change
        updateCRChangesetToServerProp(resolution.localChange, key, _.get(changeToSync, ['data', key]), changeToSync, crState);
      }
    } else
    if (remoteAction === 'Created' && localAction === 'Created') {
      if (choseLocal) {
        // change update to create. (the entity needs to be recreated on the server)
        // if the local change is selected, only the update needs to be sent to the server
        changeToSync.action = 'update';

        if (key === 'folder' && _.includes(['folder', 'request'], model)) {
          // transfer to folder
          let destFolder = _.get(changeToSync, 'data.instance.folder'),
          owner = changeToSync.data.owner,
          entityId = changeToSync.data.modelId,
          collectionId = _.get(changeToSync, 'data.instance.collection');

          changeToSync.action = 'transfer';
          if (destFolder) {
            // transferring to a folder
            changeToSync.data = {
              to: {
                model: 'folder',
                modelId: destFolder,
                owner: owner },

              modelId: entityId,
              owner: owner };

          } else
          {
            // transfer to the collection
            changeToSync.data = {
              to: {
                model: 'collection',
                modelId: collectionId,
                owner: owner },

              modelId: entityId,
              owner: owner };

          }
          updateCRChangesetsToServer(resolution.localChange, changeToSync, crState);
        } else
        {
          updateCRChangesetToServerProp(resolution.localChange, key, _.get(changeToSync, ['data', 'instance', key]), changeToSync, crState);
        }

        createOrUpdateCRChangesetsToClient(changeToSync, key, _.get(changeToSync, ['data', 'instance', key]), crState);
      } else
      {
        // you choose the server. In this case, no need to send the local change.
        if (changeToSync.meta) {
          changeToSync.meta.action = 'update';
        }
        changeToSync.action = 'update';
        changeToSync.model = model;
        changeToSync.model_id = model_id;

        // handle transfer conflicts
        if (key === 'folder' && model === 'request') {
          // transfer to folder
          let destFolder = changeToSync.data.folder,
          owner = changeToSync.data.owner,
          rid = changeToSync.data.id,
          rCollection = changeToSync.data.collection;
          changeToSync.action = 'transfer';
          if (destFolder) {
            // transferring to a folder
            changeToSync.verb = 'transfer';
            changeToSync.data = {
              to: {
                model: 'folder',
                modelId: destFolder,
                owner: owner },

              from: {
                model: 'collection',
                modelId: rCollection,
                owner: owner },

              modelId: rCollection,
              owner: owner };

          } else
          {
            // transfer to the collection
            changeToSync.verb = 'transfer';
            changeToSync.data = {
              to: {
                model: 'collection',
                model_id: rCollection,
                owner: owner },

              id: rid,
              collectionId: rCollection,
              owner: owner };

          }

          if (changeToSync.meta) {
            changeToSync.meta.action = 'transfer';
          }
        }

        createOrUpdateCRChangesetsToClient(changeToSync, key, _.get(changeToSync, ['data', key]), crState);
        updateCRChangesetToServerProp(resolution.localChange, key, _.get(changeToSync, ['data', key]), changeToSync, crState);
      }
    } else
    if (remoteAction === 'Deleted' && localAction === 'Updated') {
      if (choseLocal) {
        // change update to create. (the entity needs to be recreated on the server)
        changeToSync.verb = 'create';
        updateCRChangesetsToServer(resolution.localChange, changeToSync, crState);
      } else
      {
        // you choose the server. In this case, no need to send the local change.
        crState.changesetsToClient.push(changeToSync);

        deleteCRChangesetToServer(resolution.localChange, crState);
      }
    } else
    if (remoteAction === 'Updated' && localAction === 'Deleted') {
      if (choseLocal) {
        // don't do anything - the local unsyncedChange is still there
      } else
      {
        crState.changesetsToClient.push(changeToSync);
        deleteCRChangesetToServer(resolution.localChange, crState);
      }
    } else
    if (remoteAction === 'Moved' && localAction === 'Moved') {
      if (choseLocal) {
        updateCRChangesetsToServer(resolution.localChange, changeToSync, crState);
      } else
      {
        crState.changesetsToClient.push(changeToSync);
        deleteCRChangesetToServer(resolution.localChange, crState);
      }
    }
  });
}

/**
   * Create-or-updates a change in the server queue. Create when they come in for the first time. Update after conflict resolution
   * @param resolutionChangeset
   * @param key
   * @param value
   */
function createOrUpdateCRChangesetsToClient(resolutionChangeset, key, value, crState) {
  let changesetsToClient = crState.changesetsToClient,
  changesetToBeUpdated = findIdenticalChangeset(resolutionChangeset, changesetsToClient);

  if (changesetToBeUpdated) {
    changesetToBeUpdated.data[key] = value;
  } else
  {
    crState.changesetsToClient.push(resolutionChangeset);
  }
}

/**
   * Called during conflict-resolution, when an unsynced change in the queue has to be updated because
   * a different value was chosen in the modal
   * @param clientChangeset
   * @param key
   * @param value
   * @param resolutionChangeset
   * @private
   */
function updateCRChangesetToServerProp(clientChangeset, key, value, resolutionChangeset, crState) {
  if (resolutionChangeset.action === 'transfer') {
    updateCRChangesetsToServer(clientChangeset, resolutionChangeset, crState);
    return;
  }

  let changesetToBeUpdated = findIdenticalChangeset(clientChangeset, crState.changesetsToServer);

  if (!changesetToBeUpdated) {
    updateCRChangesetsToServer(clientChangeset, resolutionChangeset, crState);
    return;
  }

  if (changesetToBeUpdated.hasOwnProperty('data')) {
    _.set(changesetToBeUpdated, ['data', 'instance', key], value);

    if (key !== 'folder') {
      changesetToBeUpdated.action = 'update';
    }
  }
}

/**
   * Called during the conflict resolution process, when an existing unsynced change (in the queue) must be updated with new values
   * @param changeId
   * @param newChange
   * @returns {number}
   * @private
   */
function updateCRChangesetsToServer(clientChangeset, resolutionChangeset, crState) {
  if (resolutionChangeset.action === 'transfer') {
    crState.changesetsToServer.push(resolutionChangeset);
    return;
  }

  let changesetToBeUpdated = findIdenticalChangeset(clientChangeset, crState.changesetsToServer);

  if (!changesetToBeUpdated) {
    crState.changesetsToServer.push(resolutionChangeset);
    return;
  }

  let changesetIndex = findIndexIndenticalChangeset(clientChangeset, crState.changesetsToServer);
  if (changesetIndex === -1) {
    crState.changesetsToServer.push(resolutionChangeset);
    return;
  }

  crState.changesetsToServer.splice(changesetIndex, 1, resolutionChangeset);
}

/**
   * Deleting an unsynced change during conflict resolution
   * @param changeId
   * @returns {number}
   */
function deleteCRChangesetToServer(clientChangeset, crState) {
  crState.changesetsToServer = _.reject(crState.changesetsToServer, changesetToServer => {
    return isIdenticalChangeset(clientChangeset, changesetToServer);
  });
}

/**
   * detect conflicts
   *
   * @export
   * @param {any} crState
   */
function detectConflicts(crState) {
  _.forEach(crState.changesetsFromServer, serverChangeset => {
    if (serverChangeset.meta.model === 'user') {
      serverChangeset.model_id = 'NOID';
    }

    if (serverChangeset.meta.action === 'create' && serverChangeset.meta.model === 'collection') {
      let clientChangeForCreateCollection = _.find(crState.changesetsFromClient,
      clientChangeset => {
        return _.includes(['create', 'import'], _.get(clientChangeset, 'action')) &&
        _.get(clientChangeset, 'data.modelId') === serverChangeset.model_id;
      });

      if (clientChangeForCreateCollection) {
        Object(__WEBPACK_IMPORTED_MODULE_3__SyncManagerHelper__["d" /* markModelForForceSync */])({
          model: 'collection',
          modelId: _.get(clientChangeForCreateCollection, 'data.modelId') });

        crState.clientChangesetsToBeDropped.push(clientChangeForCreateCollection);
      }
    }

    // check for conflicts
    var clientChange = findIdenticalChangeset(serverChangeset, crState.changesetsFromClient);
    if (clientChange) {
      /* -- FOR POSTMAN DEMO COLLECTION CONFLICTS, DELETE LOCAL CHANGES AND DON'T SHOW CONFLICTS--*/

      // for conflicts in the folders, requests, or responses
      if (window.postman_predef_collections.indexOf(_.get(clientChange, 'data.instance.collection')) !== -1) {
        console.log('Echo collection conflict', clientChange);
        crState.clientChangesetsToBeDropped.push(clientChange);
        crState.clientModelTreesToBeDropped.push({
          model: 'collection',
          modelId: _.get(clientChange, 'data.instance.collection') });

        clientChange = null;
      }

      // for conflicts in the collection itself
      else if (window.postman_predef_collections.indexOf(_.get(clientChange, 'data.modelId')) !== -1) {
          console.log('Echo collection conflict', clientChange);
          crState.clientChangesetsToBeDropped.push(clientChange);
          crState.clientModelTreesToBeDropped.push({
            model: 'collection',
            modelId: _.get(clientChange, 'data.modelId') });

          clientChange = null;
        }

      // HACK TO AUTO RESOLVE WORKSPACE DEP UPDATE CHANGESETS
      // 1. Merge client diff on server snapshot
      // 2. Run them through update-update detection
      // 3. Skip dependencies key check in update-update conflicts
      if (clientChange && clientChange.model === 'workspace' && clientChange.action === 'update') {
        if (_.has(clientChange, 'data.instance.dependencies') || _.has(clientChange, 'data.instance.members')) {
          let clientDepsDiff = _.get(clientChange, 'data.instance.dependencies'),
          serverDepsSnapshot = _.get(serverChangeset, 'data.dependencies'),
          modifiedServerDeps = Object(__WEBPACK_IMPORTED_MODULE_2__utils_workspace_helper__["a" /* applyWorkspaceDependencyDiff */])(serverDepsSnapshot, clientDepsDiff);

          _.set(serverChangeset, 'data.dependencies', modifiedServerDeps);

          // @todo: members conflicts

          crState.changesetsToClient.push(serverChangeset);
          return;
        }
      }
    }

    if (clientChange === null) {
      crState.changesetsToClient.push(serverChangeset);
      return;
    }

    var conflictRows = getConflictRows(clientChange, serverChangeset, crState);

    // getConflictRows returns an array of rows to be displayed in the conflict resolver table
    if (conflictRows !== null && conflictRows.length > 0) {
      // make sure there's a row with showRow==true
      if (_.some(conflictRows, 'showRow')) {
        addConflictRows(conflictRows, crState.conflicts);
      }
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_sync_client__ = __webpack_require__(1202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_sync_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_sync_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_sails_io__ = __webpack_require__(2876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_sails_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__postman_sails_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_util__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_SyncIssueHelper__ = __webpack_require__(1282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_SyncService__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_DatabaseService__ = __webpack_require__(1203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SyncIncomingHandler__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SyncOutgoingHandler__ = __webpack_require__(2906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SyncOutgoingHelpers__ = __webpack_require__(2907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_services_ModelService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_services_GateKeeperService__ = __webpack_require__(1216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_AccessControl_DbRollbackService__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_controllers_UserController__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_pipelines_app_action__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_services_AnalyticsService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modules_sync_helpers_create_changeset__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_backbone__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modules_sync_timeline_helpers__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__modules_sync_timeline_helpers_RealtimeSyncMessagesService__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_SyncWindowService__ = __webpack_require__(1217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__modules_sync_helpers_SocketEventsService__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modules_sync_timeline_helpers_ConflictResolutionHelpers__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__modules_sync_timeline_helpers_SocketStatusService__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__constants_SyncStatusConstants__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__modules_sync_timeline_helpers_SyncNotificationsService__ = __webpack_require__(2908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__modules_sync_timeline_helpers_SyncTeamEventsService__ = __webpack_require__(2909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__modules_sync_timeline_helpers_SyncClientService__ = __webpack_require__(1061);

































const SOCKET_IO_OPTS = {
  regular: {
    reconnectionDelay: 10 * 1000,
    reconnectionDelayMax: 60 * 1000,
    reconnectionAttempts: 8 },

  watchdog: {
    reconnectionDelay: 10 * 1000,
    reconnectionDelayMax: 60 * 1000,
    reconnectionAttempts: 1 } };



const NO_AUTHENTICATED_CONNECTION = 'NO_AUTHENTICATED_CONNECTION';

const WATCHDOG_INTERVAL = 10 * 60 * 1000; // 10 minutes

const REQUEST_IGNORE_FIELDS = ['tests', 'preRequestScript', 'currentHelper', 'helperAttributes'];

const SYNC_CLIENT_MODEL_NAME = 'syncclient',
SYNC_CLIENT_ID = 'SYNC_CLIENT_DEFAULT';

// Methods to access sync client states

/**
 * get client revision from db
 *
 * @returns
 */
function getClientStateFromDb() {
  return __WEBPACK_IMPORTED_MODULE_11__modules_services_ModelService__["a" /* default */].
  findOne(SYNC_CLIENT_MODEL_NAME, { id: SYNC_CLIENT_ID }).
  then(clientState => {
    if (!clientState) {
      return {
        id: SYNC_CLIENT_ID,
        revision: 0,
        timestamp: 0 };

    }

    return clientState;
  });
}

/**
   * set client revision in db
   *
   * @returns
   */
function setClientRevisionInDb(revision) {
  return __WEBPACK_IMPORTED_MODULE_11__modules_services_ModelService__["a" /* default */].
  update(
  SYNC_CLIENT_MODEL_NAME,
  { id: SYNC_CLIENT_ID, revision: revision }).

  then(() => {
    // console.log(`client.revision.updated ${revision}`);
  });
}

/**
   * set client timestamp in db
   *
   * @returns
   */
function setClientTimestampInDb(timestamp) {
  return __WEBPACK_IMPORTED_MODULE_11__modules_services_ModelService__["a" /* default */].
  update(
  SYNC_CLIENT_MODEL_NAME,
  { id: SYNC_CLIENT_ID, timestamp: timestamp }).

  then(() => {
    // console.log(`client.revision.timestamp ${timestamp}`);
  });
}

/**
   * get default client data
   *
   * @returns
   */
function getDefaultClientInDb() {
  return {
    id: SYNC_CLIENT_ID,
    revision: 0,
    timestamp: 0 };

}

/**
   * reset client state in db
   *
   * @returns
   */
function resetClientInDb() {
  return __WEBPACK_IMPORTED_MODULE_11__modules_services_ModelService__["a" /* default */].
  findOne(SYNC_CLIENT_MODEL_NAME, { id: SYNC_CLIENT_ID }).
  then(client => {
    if (client) {
      return __WEBPACK_IMPORTED_MODULE_11__modules_services_ModelService__["a" /* default */].
      update(SYNC_CLIENT_MODEL_NAME, getDefaultClientInDb()).
      then(console.log.bind(console, 'Client reset in DB'));
    }

    return __WEBPACK_IMPORTED_MODULE_11__modules_services_ModelService__["a" /* default */].
    create(SYNC_CLIENT_MODEL_NAME, getDefaultClientInDb()).
    then(console.log.bind(console, 'Client reset in DB'));
  });
}

/**
   * find and initialize client in db if not present
   *
   * @returns
   */
function initializeClientInDbIfNeeded() {
  return __WEBPACK_IMPORTED_MODULE_11__modules_services_ModelService__["a" /* default */].
  findOne(SYNC_CLIENT_MODEL_NAME, { id: SYNC_CLIENT_ID }).
  then(client => {
    if (client) {
      return;
    }

    return __WEBPACK_IMPORTED_MODULE_11__modules_services_ModelService__["a" /* default */].
    create(SYNC_CLIENT_MODEL_NAME, getDefaultClientInDb()).
    then(() => {
      // console.log.bind(console, 'Sync client initialized in DB')
    });
  });
}

/**
   * broadcasts sync changeset status after being sent to sync server
   *
   * todo: needs to be revisited for sync client
   */
function broadcastChangesetResponse(changeset, response) {
  let syncChangesetChannel = pm.eventBus.channel('sync-changeset-events');

  // @todo change to consistent event format
  syncChangesetChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["a" /* createEvent */])('sent-to-server', 'sync-changeset', {
    changeset: changeset,
    response: response }));

}

/**
   * broadcast realtime event received
   *
   * @param {any} changeset
   */
function broadcastRealtimeEvent(changeset) {
  let syncIncomingChannel = pm.eventBus.channel('sync-realtime-events');

  // @todo change to consistent event format
  syncIncomingChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["a" /* createEvent */])('received', 'sync-realtime', { changeset: changeset }));
}

/**
   * Handles the socket, and is the interface for sending and receiving changesets
   *
   * @class SyncManager
   */
var SyncManagerNew = __WEBPACK_IMPORTED_MODULE_20_backbone___default.a.Model.extend({
  sailsIO: null,
  defaults: function () {
    return {
      loggedIn: false,
      socketConnected: false,
      connectingToSocket: false,
      currentSyncStatus: 'disabledSync',
      connectionMode: 'regular',
      nextReconnectTime: null,
      timeTillReconnect: null,
      isSyncCallRateLimited: false };

  },

  /**
      * ONLY invoked in the primary window. This sends sync state to other windows that may be open.
      * Only the primary window needs to do this
      *
      */
  attachSyncStatusTriggers: function () {
    this.on('change:nextReconnectTime', this.handleReconnectTimeChange, this);

    this.on('change:timeTillReconnect', (model, value) => {
      this.syncInternalChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["a" /* createEvent */])('updated', 'timeTillReconnect', { timeTillReconnect: value }));
    });

    this.on('change:currentSyncStatus', (model, value) => {
      this.syncInternalChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["a" /* createEvent */])('updated', 'currentSyncStatus', { currentSyncStatus: value }));
    });

    // hacks
    this.on('syncFinished', () => {
      this.set('currentSyncStatus', 'syncFinished');

      // resetting the reconnection logic on the success sync.
      this.hasReconnected = false;
    });
    this.on('syncStarting', () => {
      // this.set('currentSyncStatus', 'syncStarting');
    });
    this.on('makeConnecting', () => {
      this.set('currentSyncStatus', 'makeConnecting');
    });
    this.on('makeNotConnected', () => {
      this.set('currentSyncStatus', 'makeNotConnected');
    });
    this.on('disabledSync', () => {
      this.set('currentSyncStatus', 'disabledSync');
    });
  },

  attachSyncProxyEventHandlers: function () {
    this.syncManagerInternalDispose = this.syncInternalChannel.subscribe(event => {
      let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["g" /* getEventNamespace */])(event),
      eventName = Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["f" /* getEventName */])(event),
      eventData = Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["d" /* getEventData */])(event);

      if (eventName === 'hydrate' && eventNamespace === 'currentSyncStatus') {
        this.syncInternalChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["a" /* createEvent */])('updated', 'currentSyncStatus', { currentSyncStatus: this.get('currentSyncStatus') }));
        return;
      }

      if (eventName === 'syncIconClicked' && eventNamespace === 'command') {
        this.syncIconClick();
        return;
      }

      if (eventName === 'restoreCollection' && eventNamespace === 'command') {
        this.restoreCollection(eventData.restoreTarget);
        return;
      }

      if (eventName === 'conflictsResolved' && eventNamespace === 'command') {
        this.conflictsResolved(eventData.resolution);
        return;
      }

      if (eventName === 'forceSync' && eventNamespace === 'command') {
        this.forceSyncAllData();
        return;
      }

      if (eventName === 'forceSyncCollectionAndContinue' && eventNamespace === 'command') {
        this.forceSyncCollectionAndContinue(eventData.collection.id);
        return;
      }

      if (eventName === 'forceConnect' && eventNamespace === 'command') {
        this._forceConnect();
        return;
      }

      if (eventName === 'fetchPendingConflicts' && eventNamespace === 'command') {
        this.fetchPendingConflicts();
        return;
      }
    });
  },

  attachGateKeeperHandlers: function () {
    let gatekeeperEvents = pm.eventBus.channel('gatekeeper');

    gatekeeperEvents.subscribe(event => {
      if (event.name === 'websocket') {
        pm.logger.warn(`SyncManagerNew~attachGateKeeperHandlers: listening to ${event.name} event`, event);
        let eventData = Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["d" /* getEventData */])(event);
        if (!eventData) {
          pm.logger.error('SyncManagerNew~attachGateKeeperHandlers: gatekeeper event for websocket without a value', eventData);
          return;
        }
        this.setSync(eventData.isEnabled);

        // If it is a disabled websocket do better signout.
        if (!eventData.isEnabled) {
          this.signOut();
        }
      }

      if (event.name === 'notification') {
        pm.logger.warn(`SyncManagerNew~attachGateKeeperHandlers: listening to ${event.name} event`, event);
        let eventData = Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["d" /* getEventData */])(event);

        if (!eventData) {
          pm.logger.error('SyncManagerNew~attachGateKeeperHandlers: gatekeeper event for notification without a value', eventData);
          return;
        }

        // disable notification handlers if notifications is turned off
        if (!eventData.isEnabled) {
          Object(__WEBPACK_IMPORTED_MODULE_28__modules_sync_timeline_helpers_SyncNotificationsService__["b" /* unsubscribeNotificationsListeners */])();
        }
      }

      if (event.name === 'sync') {
        pm.logger.warn(`SyncManagerNew~attachGateKeeperHandlers: listening to ${event.name} event`, event);
        let eventData = Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["d" /* getEventData */])(event);

        if (!eventData) {
          pm.logger.error('SyncManagerNew~attachGateKeeperHandlers: gatekeeper event for sync without a value', eventData);
          return;
        }

        // if sync status changes, also disconnect and reconnect websocket
        // it is a simpler model to understand than enabling sync when socket is already connected
        if (eventData.isEnabled) {
          this.setSync(true);
        }

        // disable sync handlers if notifications is turned off
        else {
            Object(__WEBPACK_IMPORTED_MODULE_21__modules_sync_timeline_helpers__["e" /* unsubscribeAllTimelines */])();
          }
      }
    });
  },

  attachModelEventsHandlers: function () {
    let modelEvents = pm.eventBus.channel('model-events');

    modelEvents.subscribe(payload => {
      if (payload.namespace === 'user') {
        if (_.includes(['logout', 'disableSync'], payload.name)) {
          console.warn(`Sync manager listening to ${payload.name} event`, payload);
          this.signOut();
        }
      }
    });
  },

  attachSyncClientEventHandlers: function () {
    // @todo: is there are better way to add
    pm.eventBus.channel('sync-client').subscribe(event => {
      if (Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["f" /* getEventName */])(event) === 'addChangesets') {
        console.log('pushing changesets sync client');
        return this.addChangesetsToSyncClient(Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["d" /* getEventData */])(event), { process: false });
      }
    });
  },

  // Fixed
  initialize: function () {
    this.sailsIO = new __WEBPACK_IMPORTED_MODULE_3__postman_sails_io___default.a();
    this.syncInternalChannel = pm.eventBus.channel('sync-manager-internal');
    this.attachGateKeeperHandlers();
    this.attachSyncStatusTriggers();
    this.attachSyncProxyEventHandlers();
    this.attachModelEventsHandlers();
    this.attachSyncClientEventHandlers();

    initializeClientInDbIfNeeded();

    this.markModelForForceSync = __WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */];
    this.performPendingForceSyncs = __WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["e" /* performPendingForceSyncs */];
    this.modelsToForceSync = [];
    this.modelsForceSyncedRecently = [];
    this.reconnectTimer = null;
    this.hasReconnected = false;

    this.syncIconClick = _.debounce(this._syncIconClick.bind(this), 5000, {
      leading: true,
      trailing: false });


    // GLOBAL SYNC FLAG
    pm.mediator.on('setSync', this.setSync, this);
    pm.mediator.on('appOnline', this.onAppOnline, this);
    pm.mediator.on('appOffline', this.onAppOffline, this);

    this.initializeQueues();

    Object(__WEBPACK_IMPORTED_MODULE_25__modules_sync_timeline_helpers_ConflictResolutionHelpers__["a" /* initialize */])();
    this.initializeSyncClient(err => {
      if (err) {
        console.error('Failed to initialize SyncClient', err);
        pm.logger.error('SyncManager: Could not initialize Sync Client.');
        return;
      }

      this.outgoingHandler = new __WEBPACK_IMPORTED_MODULE_9__SyncOutgoingHandler__["a" /* SyncOutgoingHandler */]();

      this.clientUserAgent = navigator.userAgent + ' ' + 'PostmanClient/' + pm.app.get('version') + ' (AppId=' + pm.app.get('installationId') + ')';

      this.renewCount = 0;

      this.set('loggedIn', false);

      this.initializeWatchdog();
    });
  },

  initializeWatchdog() {
    // SOCKET RECONNECTION WATCHDOG
    this.onlineWatchdog = _.debounce(() => {
      __WEBPACK_IMPORTED_MODULE_12__modules_services_GateKeeperService__["a" /* default */].isWebSocketEnabled().
      then(isEnabled => {
        if (isEnabled &&
        Object(__WEBPACK_IMPORTED_MODULE_26__modules_sync_timeline_helpers_SocketStatusService__["a" /* getCurrentSocketStatus */])() === __WEBPACK_IMPORTED_MODULE_27__constants_SyncStatusConstants__["c" /* SOCKET_OFFLINE */] &&
        pm.syncSocket && !pm.syncSocket.isBusy()) {
          this.createSocket({ connectionMode: 'watchdog' });
        }
      }).
      catch(e => {
        console.error('Error in getting gatekeeper information', e);
      });
    }, 30 * 1000, {
      leading: true,
      trailing: false });
    // debouce for 30 seconds, and on the leading edge

    setInterval(this.onlineWatchdog, WATCHDOG_INTERVAL); // 10 minute interval to check if app should try reconnecting
  },

  /**
      * Initializes various queues used in sync
      */
  initializeQueues: function () {
    this.ingressQueue = __WEBPACK_IMPORTED_MODULE_0_async___default.a.queue(this._processIngressChangeset.bind(this), 1);
    this.syncIncomingChangesetQueue = __WEBPACK_IMPORTED_MODULE_0_async___default.a.queue(this._handleIncomingSyncChangeset.bind(this), 1);
  },

  _nukeQueues: function () {
    if (this.ingressQueue) {
      this.ingressQueue.kill();
    }

    if (this.syncIncomingChangesetQueue) {
      this.syncIncomingChangesetQueue.kill();
    }
  },

  addChangesetToIngressQueue: function (changeset) {
    this.ingressQueue.push(changeset);
  },

  /**
      * Async Queue worker.
      * Refer: https://github.com/caolan/async/blob/v1.5.2/README.md#queueworker-concurrency
      */
  _processIngressChangeset: function (changeset, cb) {
    // flag used to make sure the worker callback `cb` is not called multiple times.
    // queue will throw error if `cb` is called multiple times.
    let done = false;

    // Ingress watchdog that calls cb in 10 seconds so that queue is not blocked
    let ingressWatchdog = setTimeout(() => {
      !done && _.isFunction(cb) && cb();
      done = true;
    }, 10 * 1000);

    const doneCb = () => {
      ingressWatchdog && clearTimeout(ingressWatchdog);
      !done && _.isFunction(cb) && cb();
      done = true;
    };

    try {
      Object(__WEBPACK_IMPORTED_MODULE_8__SyncIncomingHandler__["b" /* handleSyncMessage */])(changeset, function () {
        pm.syncManager.updateSinceFromMessage(changeset, function (err) {
          // log errors but move on
          if (err) {
            console.error('Could not update since id after processing realtime incoming changeset', err);
          }
          doneCb && doneCb();
        });
      });
    }
    catch (e) {
      ingressWatchdog && clearTimeout(ingressWatchdog);
      !done && _.isFunction(cb) && cb();
      done = true;
    }
  },

  _processSyncClientCommand: function (command, cb) {
    // flag used to make sure the worker callback `cb` is not called multiple times.
    // queue will throw error if `cb` is called multiple times.
    let done = false;

    // Watchdog that calls cb in 1 minute so that queue is not blocked
    let watchdog = setTimeout(() => {
      !done && _.isFunction(cb) && cb();
      done = true;
      console.error('SyncClient command queue recovered by watchdog: ' + command.name);
    }, 60 * 1000);

    const doneCb = () => {
      watchdog && clearTimeout(watchdog);
      !done && _.isFunction(cb) && cb();
      done = true;
    };

    try {
      this._executeSyncClientCommand(command, doneCb);
    }
    catch (e) {
      watchdog && clearTimeout(watchdog);
      !done && _.isFunction(cb) && cb();
      done = true;
    }
  },

  /**
      * This is the queue that processes each changeset after received from a message
      */
  _handleIncomingSyncChangeset: function (changeset, cb) {
    // flag used to make sure the worker callback `cb` is not called multiple times.
    // queue will throw error if `cb` is called multiple times.
    let done = false;

    // Watchdog that calls cb in 1 minute so that queue is not blocked
    let watchdog = setTimeout(() => {
      !done && _.isFunction(cb) && cb();
      done = true;
      console.error('Sync changeset queue recovered by watchdog: ', changeset);
    }, 60 * 1000);

    const doneCb = () => {
      watchdog && clearTimeout(watchdog);
      !done && _.isFunction(cb) && cb();
      done = true;
    };

    try {
      Object(__WEBPACK_IMPORTED_MODULE_8__SyncIncomingHandler__["a" /* handleSyncChangeset */])(changeset, doneCb);
    }
    catch (e) {
      watchdog && clearTimeout(watchdog);
      !done && _.isFunction(cb) && cb();
      done = true;
    }
  },

  _executeSyncClientCommand: function (command, cb) {
    if (!command) {
      console.log('SyncClient no command to execute');
      return cb();
    }

    let name = command.name,
    args = command.args || [];

    if (!this.syncClient) {
      console.log('SyncClient not available to execute command', name, args);
      return cb();
    }

    if (!name) {
      console.log('SyncClient no command name to execute', name);
      return cb();
    }

    let syncClientCommand = this.syncClient[name],
    commandCallback = _.last(args);

    if (!_.isFunction(syncClientCommand)) {
      console.log('No executable command found in SyncClient', name, args);
      return cb();
    }

    if (!_.isFunction(commandCallback)) {
      console.log('No callback passed for SyncClient command', name, args);
      return cb();
    }

    let wrappedCallback = function (...wrappedArgs) {
      try {
        commandCallback.apply(null, wrappedArgs);
      }
      catch (e) {
        console.log('Error from command callback handled', name, args);
      } finally
      {
        cb();
      }
    };

    // replace callback with wrapped callback
    args.splice(args.length - 1, 1, wrappedCallback);

    try {
      syncClientCommand.apply(this.syncClient, args);
    }
    catch (e) {
      console.error('SyncClient command execution failed', e);
      cb();
    }
  },

  /**
      ********** SYNC CLIENT INTEGRATION **********
     */

  /**
         * Initializes the sync client
         */
  initializeSyncClient: function (cb) {
    this.syncClient = new __WEBPACK_IMPORTED_MODULE_2__postman_sync_client__["SyncClient"](SYNC_CLIENT_ID, { dbService: Object(__WEBPACK_IMPORTED_MODULE_7__services_DatabaseService__["a" /* getService */])() });
    this.syncClient.initialize(err => {
      cb && cb(err);
    });
  },

  initializeSyncClientProcessor: function () {
    this.syncClientProcessor = __WEBPACK_IMPORTED_MODULE_0_async___default.a.cargo(this.syncClientWorker.bind(this));
  },

  syncClientWorker: function (tasks, done) {
    console.log('sync client process worker started', tasks);

    if (!Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["c" /* isAuthenticatedSocketAvailable */])()) {
      console.log('sync client worker stopped because no authenticated socket available yet');
      done(new Error(NO_AUTHENTICATED_CONNECTION));
      return;
    }

    if (pm.syncManager.get('currentSyncStatus') !== 'syncFinished') {
      console.log('sync client worker stopped because sync is ongoing');
      done(new Error('STILL_SYNCING'));
      return;
    }

    // flag used to make sure the worker callback `cb` is not called multiple times.
    // queue will throw error if `cb` is called multiple times.
    let calledBack = false;

    // Ingress watchdog that calls cb in 60 seconds so that worker is not blocked
    let syncClientWorkerWatchdog = setTimeout(() => {
      !calledBack && _.isFunction(done) && done();
      calledBack = true;
    }, 60 * 1000);

    const doneCb = () => {
      syncClientWorkerWatchdog && clearTimeout(syncClientWorkerWatchdog);
      !calledBack && _.isFunction(done) && done();
      calledBack = true;
    };

    this.sendPendingChanges(doneCb);
  },

  processOfflineChanges: function (task, done) {
    // if (!this.syncClientProcessor) {
    //   this.initializeSyncClientProcessor();
    // }

    // if (!task) {
    //   task = { origin: 'unknown' };
    // }

    // this.syncClientProcessor.push(task, done);
  },

  onConflictResolutionError: function (err) {
    console.log('CR ABORTED', err);
    pm.localChanges.pendingResolution = null;

    __WEBPACK_IMPORTED_MODULE_0_async___default.a.series([
    next => {
      this.onAllClientChangesProcessed(next);
    },
    next => {
      this.processOfflineChanges({ origin: 'post-conflict-resolution-error' }, next);
    }]);

  },

  onConflictResolutionCompleted: function (crState, done) {
    console.log('CR DONE', crState);

    __WEBPACK_IMPORTED_MODULE_0_async___default.a.series([
    next => {
      if (!crState || _.isEmpty(crState.changesetsFromClient) || crState.source === 'force-sync') {
        return next();
      }

      this.removeChangesetsFromSyncClient(crState.changesetsFromClient, next);
    },
    next => {
      this.updateSinceIdFromSyncResponse(next);
    },
    next => {
      this.onAllClientChangesProcessed(next);
    },
    next => {
      Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["h" /* performWorkspaceIntegrityCheck */])(function (err) {
        if (err) {
          console.warn('Could not complete workspace integrity check');
          return next();
        }

        next();
      });
    },
    next => {
      Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["g" /* performWorkspaceDependencyIntegrityCheck */])(function (err) {
        if (err) {
          console.warn('Could not complete workspace dependencies integrity check');
          return next();
        }

        next();
      });
    },
    next => {
      Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["f" /* performPendingIntegrityCheck */])();
      next();
    },
    next => {
      this.processOfflineChanges({ origin: 'post-conflict-resolution' }, next);
    }],
    () => {
      // @todo HACK!
      let syncStatusChannel = pm.eventBus.channel('sync-status');
      syncStatusChannel.publish({ status: 'online' });

      console.log('/sync done!');
      done && done();
    });
  },

  /**
      * Invoked on navigator event + via the watchdog
      */
  onAppOnline: function () {
    // this will reconnect socket if socket instance exists, else creates a new socket
    this.createSocket({ forceConnect: true });
  },

  /**
      * Invoked on navigator event
      */
  onAppOffline: function () {
    // disconnecting socket. Otherwise it will needlessly try to reconnect automatically.
    pm.syncSocket && _.invoke(pm, 'syncSocket.isConnected') && _.invoke(pm, 'syncSocket.disconnect');
    this.set('connectingToSocket', false);
    this.set('socketConnected', false);
    this.trigger('makeNotConnected');
  },

  _syncIconClick: function () {
    var currentStatus = this.get('currentSyncStatus');
    if (currentStatus === 'syncFinished') {
      this.requestInitialSync();
    } else
    if (!this.get('connectingToSocket')) {
      this.trigger('makeNotConnected');
      this.set('socketConnected', false);
      this.createSocket();
    }
  },

  _forceConnect: function () {
    this.trigger('makeConnecting');
    this.createSocket({ forceConnect: true });
  },

  handleReconnectTimeChange: function () {
    let nextReconnectTime = this.get('nextReconnectTime');

    if (!nextReconnectTime) {
      this.reconnectTimer && clearInterval(this.reconnectTimer);
      this.set('timeTillReconnect', null);
      return;
    }

    this.reconnectTimer = setInterval(this.handleReconnectTimerTick.bind(this), 1000);
    this.handleReconnectTimerTick();
  },

  handleReconnectTimerTick: function () {
    let nextReconnectTime = this.get('nextReconnectTime');

    if (!nextReconnectTime) {
      this.reconnectTimer && clearInterval(this.reconnectTimer);
      this.set('timeTillReconnect', null);
      return;
    }

    let msTillReconnect = nextReconnectTime - Date.now();
    let secondsTillReconnect = Math.round(msTillReconnect / 1000);

    if (secondsTillReconnect < 1) {
      this.reconnectTimer && clearInterval(this.reconnectTimer);
      return;
    }

    this.set('timeTillReconnect', secondsTillReconnect);
  },

  /**
      * The primary window is the one that does socket communication with sync.
      * All other windows send messages to the primary window
      * @returns {boolean}
      */
  isPrimaryWindow: function () {
    // @todo remove this after all external consumers are removed.
    // all internal references have been removed.

    return pm.windowConfig.process === 'shared';
  },

  /**
      * Called when godserver determines if sync is on/off for this user
      * @param syncEnabled
      */
  setSync: function (syncEnabled) {
    if (syncEnabled && this.get('currentSyncStatus') == 'disabledSync') {
      this.set('currentSyncStatus', 'makeNotConnected');
    }

    if (syncEnabled == true) {
      // this.set("loggingIn", false);
      this.signIn({ forceConnect: true });
    } else
    {
      this.trigger('disabledSync');
    }
  },

  /**
      * After sign out, the sync values (since/timestamp) need to be cleared too
      */
  onClearSystemValues: function () {
    setClientRevisionInDb(0).then(() => {
      setClientTimestampInDb(0).then(() => {
        // console.log('resetted client revision and timestamp');
      });
    });
  },

  destroySocket: function () {
    if (!pm.syncSocket) {
      return;
    }

    var socket = pm.syncSocket;
    delete pm.syncSocket;

    socket.disconnect();
    setTimeout(function () {
      socket.removeAllListeners();
      socket = null;
    }, 0);

    // try {
    //   _.isFunction(pm.syncSocket.removeAllListeners) && pm.syncSocket.removeAllListeners();
    //   _.isFunction(pm.syncSocket.disconnect) && pm.syncSocket.disconnect();
    //   delete pm.syncSocket;
    // }
    // catch (e) {
    //   console.error('Error cleaning up existing socket', e);
    // }
  },

  reconfigureSocket: function (connectionMode) {
    if (!pm.syncSocket) {
      return;
    }

    if (!connectionMode) {
      connectionMode = 'regular';
    }

    pm.syncSocket.configure(SOCKET_IO_OPTS[connectionMode]);
  },

  /**
      * When sync server returns `authenticationError`,
      * it is the responsibility of the app asking godserver to re-create the user in sync.
      * And, on a successful action we will reconnect the sync socket.
      * So, we are
      * 1. force disconnecting the current socket.
      * 2. dispatch action to recreate the user in sync via godserver
      *
      * Godserver response status would be.
      * 1. successful user creation -> model event listener for `recreateSyncUser` will reconnect the socket.
      * 2. Godserver itself says it is 403 -> force login kicks in and user will re-login leads to reconnect socket.
      * 3. Godserver error out(anything other than 403) -> watchdog will kick in and reconnect after 10min.
      *
      * We are force disconnecting current socket for following reasons.
      * 1. This make sure that app won't retry the changes with the invalid session [CLIENTAPP-2419].
      * 2. Watchdog needs to kick-in on case 3, which will do only if the sync socket is disconnected
      *
      */
  handleAuthenticationError: function () {

    // Force disconnecting the existing socket.
    this.onAppOffline();

    let recreateSyncUserEvent = Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["a" /* createEvent */])('recreateSyncUser', 'user');

    // No need to wait for response as of now, if we need to show something, we can show by listening to response.
    Object(__WEBPACK_IMPORTED_MODULE_16__modules_pipelines_app_action__["a" /* default */])(recreateSyncUserEvent);
  },

  /**
      * @method createSocket
      * @param {Object} opts
      * @param {String=''} opts.connectionMode
      * @param {Boolean=false} opts.forceConnect
      * @returns {Promise}
      */
  createSocket: function (opts = {}) {
    return __WEBPACK_IMPORTED_MODULE_12__modules_services_GateKeeperService__["a" /* default */].isWebSocketEnabled().
    then(isEnabled => {
      if (!isEnabled) {
        pm.logger.info('SyncManagerNew~createSocket - Bailed out as websocket disabled');
        return;
      }

      return __WEBPACK_IMPORTED_MODULE_14__modules_controllers_UserController__["a" /* default */].
      get().
      then(user => {
        let {
          connectionMode = 'regular',
          forceConnect = false } =
        opts;

        if (!forceConnect && (this.get('connectingToSocket') || this.get('socketConnected'))) {
          return;
        }

        this.set('loggingIn', false);

        if (pm.syncSocket) {
          if (this.get('connectionMode') !== connectionMode) {
            this.reconfigureSocket(connectionMode);
            this.set('connectionMode', connectionMode);
          }
          pm.syncSocket.forceReconnect();
        } else
        {
          let syncserver_url = user.syncserver_url || postman_syncserver_url;
          this.sailsIO.transports = ['websocket'];
          this.sailsIO.autoConnect = false;
          this.sailsIO.url = syncserver_url;

          pm.syncSocket && this.destroySocket();

          this.set('connectionMode', connectionMode);
          pm.syncSocket = this.sailsIO.connect(
          syncserver_url,
          _.merge({
            forceNew: true,
            multiplex: false },
          SOCKET_IO_OPTS[connectionMode]),
          this.getListeners());

        }
        this.set('connectingToSocket', true);
        this.trigger('makeConnecting');
        this.set('nextReconnectTime', null);

        if (connectionMode === 'watchdog') {
          __WEBPACK_IMPORTED_MODULE_17__modules_services_AnalyticsService__["a" /* default */].addEvent('sync', 'reconnect_attempt', 'watchdog');
        }
      });
    });
  },

  // call when and how - pass the model to some view.
  // or include this code there directly
  signIn: function (opts = {}) {
    return __WEBPACK_IMPORTED_MODULE_12__modules_services_GateKeeperService__["a" /* default */].isWebSocketEnabled().
    then(isWebSocketEnabled => {
      if (!isWebSocketEnabled) {
        pm.logger.info('SyncManagerNew~createSocket - Bailed out as websocket disabled');
        return Promise.reject(new Error('SyncManagerNew~createSocket - Bailed out as websocket disabled'));
      }

      return __WEBPACK_IMPORTED_MODULE_14__modules_controllers_UserController__["a" /* default */].
      get().
      then(user => {
        if (user.id === '0') {
          pm.logger.info('SyncManagerNew~signIn: Bailing out as this is not a valid user');
          return Promise.reject(new Error('SyncManagerNew~signIn: Bailing out as this is not a valid user'));
        }
      }).
      then(() => {
        let { forceConnect = false } = opts;

        if (forceConnect) {
          this.createSocket(opts);
          console.log('sign in bailed. force connect.');
          return;
        }

        // if the socket object doesn't exist
        if (pm.syncSocket === null) {
          this.createSocket(opts);
          console.log('sign in bailed. no socket.');
          return;
        }

        if (!this.get('connectingToSocket') && !this.get('socketConnected')) {
          this.createSocket(opts);
          console.log('sign in bailed. some state issue.');
          return;
        }

        if (this.get('loggingIn') === true) {
          // Session login is already in progress
          setTimeout(() => {
            if (this.get('loggingIn')) {
              this.set('loggingIn', false);
              this.signIn();
            }
          }, 3000);
          console.log('sign in bailed. in progress.');
          return;
        }

        this.set({
          loggingIn: true,
          isSyncCallRateLimited: false });

        clearTimeout(this.timeOutRetrySyncCall);

        pm.mediator.trigger('socketConnected');

        // socket is connected, reset retry count
        this.renewCount = 0;

        pm.mediator.trigger('socket:connected');
        this.set('loggedIn', true);
        this.set('loggingIn', false);

        // start syncing
        this.requestInitialSync();
      });
    });
  },

  /**
      * Called when sync has to be shut down. Called during manual log out / during sync disable
      * @param resetSyncProperties
      */
  signOut: function (resetSyncProperties) {
    var resetSyncProperties = true;

    this.didIntegrityCheckRecently = false;
    this._nukeQueues();
    if (this.get('connectingToSocket') === true || this.get('loggedIn') === false || !pm.syncSocket) {
      this.set('loggedIn', false);
      this.set('socketConnected', false);
      this.set('connectingToSocket', false);

      if (resetSyncProperties) {
        __WEBPACK_IMPORTED_MODULE_11__modules_services_ModelService__["a" /* default */].delete(SYNC_CLIENT_MODEL_NAME, { id: SYNC_CLIENT_ID }).
        then(() => {
          this.onClearSystemValues();
          this.trigger('disabledSync');
        }).
        catch(e => {
          console.error('Error in deleting since', e);
        });
      }

      if (pm.syncSocket) {
        this.explicitLogout = resetSyncProperties;

        // don't need to delete the socket because you were never logged in.
        // check the `if` 2 levels above
        this.destroySocket();
      }
      return;
    }

    __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
      model: 'session',
      action: 'destroy' },
    resData => {
      this.set('loggedIn', false);
      this.set('socketConnected', false);
      this.set('connectingToSocket', false);
      this.trigger('disabledSync');
      if (pm.syncSocket) {
        this.explicitLogout = resetSyncProperties;

        // no need to delete socket as the /session/destroy call ensures there are no cookie problems
        this.destroySocket();
      }
      if (resetSyncProperties) {
        resetClientInDb();
      }
      this.onClearSystemValues();
    });
  },

  updateSinceFromMessage: function (message, done) {
    if (!message || !message.revision || typeof message.revision !== 'number') {
      return done && done();
    }

    setClientRevisionInDb(message.revision).
    then(() => {
      // console.log('Client.revision updated from message');
      try {
        done && done();
      } catch (e) {
        // do not let errors in `done` callback go through the catch and call `done` again
        console.error(e);
      }
    }).
    catch(error => {
      done && done(error);
    });
  },

  /**
      * @description called ONLY when signIn is successful
      */
  requestInitialSync: function () {
    return __WEBPACK_IMPORTED_MODULE_12__modules_services_GateKeeperService__["a" /* default */].isWebSocketEnabled().
    then(isEnabled => {
      if (!isEnabled) {
        pm.logger.info('SyncManagerNew~requestInitialSync: Bailing out since websocket is disabled');
        return;
      }

      // subscribe to notification events
      __WEBPACK_IMPORTED_MODULE_12__modules_services_GateKeeperService__["a" /* default */].isNotificationEnabled().
      then(isEnabled => {
        return isEnabled && Object(__WEBPACK_IMPORTED_MODULE_28__modules_sync_timeline_helpers_SyncNotificationsService__["a" /* subscribeToNotifications */])();
      }).
      catch(e => {
        pm.logger.warn('onSocketConnected: Could not setup realtime event subscribers for notifications', e);
      });

      Object(__WEBPACK_IMPORTED_MODULE_29__modules_sync_timeline_helpers_SyncTeamEventsService__["a" /* subscribeToTeamEvents */])().
      catch(e => {
        pm.logger.warn('onSocketConnected: Could not setup realtime event subscribers for team events', e);
      });

      return __WEBPACK_IMPORTED_MODULE_12__modules_services_GateKeeperService__["a" /* default */].isSyncEnabled().
      then(isSyncEnabled => {
        if (!isSyncEnabled) {
          return;
        }

        return __WEBPACK_IMPORTED_MODULE_14__modules_controllers_UserController__["a" /* default */].
        get().
        then(userData => {
          if (!userData) {
            pm.logger.error('SyncManagerNew~requestInitialSync: Could not connect to sync. User is missing.');
            return;
          }

          return Object(__WEBPACK_IMPORTED_MODULE_21__modules_sync_timeline_helpers__["c" /* syncAndSubscribeTimeline */])({ model: 'user', modelId: userData.id }).
          then(() => {
            // used to subscribe to the models stream
            // which computes the models in view and subscribes to those entities
            Object(__WEBPACK_IMPORTED_MODULE_23__services_SyncWindowService__["b" /* subscribeAddedModelsInWindowStream */])();
          });
        });
      });

    });
  },

  /**
      * @description This sends the initial sync request to POST /sync, which gets a paginated list of server-side changes (S). Will be called after sign in
      * @param lastRevisionNumber
      * @param lastTimestamp
      * @param collectionId - Set to a collectionId if you want to force sync for a particular collection
      * @param collectionsAsImports - Only if collectionId is null. Set to false if it's the first sync. All collection creates will come as import events
      * @private
      */
  _sendSyncRequest: function (options) {
    var lastRevisionNumber = options.lastRevisionNumber,
    lastTimestamp = options.lastTimestamp;

    __WEBPACK_IMPORTED_MODULE_12__modules_services_GateKeeperService__["a" /* default */].isWebSocketEnabled().
    then(isEnabled => {
      if (!isEnabled) {
        pm.logger.info('SyncManagerNew~_sendSyncRequest: Bailing out as websocket disabled');
        return;
      }

      this.trigger('syncStarting');
      if (this.get('isSyncCallRateLimited')) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
        model: 'session',
        action: 'sync',
        meta: {
          query: {
            since_id: lastRevisionNumber,
            sync_timestamp: lastTimestamp } } },


      msg => {
        this._handleNewSyncResponse(msg, options);
      });
    });
  },

  /**
      * @description This adds all server changes to the server queue, makes an additional sync call if needed, and starts processing
      * @param message
      * @private
      */
  _handleNewSyncResponse: function (message, options) {
    getClientStateFromDb().then(client => {
      let serverChanges = [];
      var changes,
      numChanges;
      this.set('socketConnected', true);

      if (!message) {
        return;
      }

      if (message.reset_timestamp && client.timestamp && client.timestamp < message.reset_timestamp) {
        console.log('Requesting force sync due to reset timestamp');
        this.forceSyncAllData();
        setClientTimestampInDb(message.sync_timestamp);
        return;
      }

      // all changesets
      if (message.entities) {
        var lastSinceId = message.last_since_id;

        try {
          this.set('maxOwnSubscribeSince', lastSinceId);
        }
        catch (e) {
          console.log('Could not set maxOwnSubscribeSince');
        }

        setClientTimestampInDb(message.sync_timestamp);

        changes = message.entities;

        numChanges = changes.length;
        for (let i = 0; i < numChanges; i++) {
          // this change will have a revisionNumber and a changeset
          if (!changes[i].hasOwnProperty('meta')) {
            continue;
          }

          serverChanges.push(changes[i]);
        }

        pm.localChanges.resolveConflicts({ changesetsFromServer: serverChanges }, { source: 'session-sync' });
        return;
      }

      if (message.error && message.error.name == 'authenticationError') {

        this.handleAuthenticationError();
        return;
      }

      if (message.error && message.error.name === 'rateLimited') {
        this.set('isSyncCallRateLimited', true);
        let retryAfter = _.get(message, 'error.details.retryAfter');
        if (retryAfter) {// must be in seconds
          clearTimeout(this.timeOutRetrySyncCall);
          this.timeOutRetrySyncCall = setTimeout(() => {
            this._resendSyncCall(options);
          }, (parseInt(retryAfter) || 60) * 1000);
        }
        return;
      }

      console.error('Failure to sync.');
      pm.toasts.error('There was an error while syncing. Please force sync after some time (<i>Settings > Sync > Force Sync</i>).', {
        timeout: 5000,
        dedupeId: 'failure-to-sync',
        showAsHtml: true });


    });
  },

  forceSyncAllData() {
    getClientStateFromDb().then(client => {
      Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["a" /* createChangesetsForForceSyncAllData */])((err, clientChangesets) => {
        if (err) {
          return;
        }

        __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
          model: 'session',
          action: 'sync',
          meta: {
            query: {
              since_id: 0,
              sync_timestamp: client.timestamp,
              changeset: true,
              subscribe: false // request changesets for own entities only
            } } },

        response => {
          let entities = _.get(response, 'entities', []),
          filteredServerChangesets = _.filter(entities, changeset => {
            return _.includes([
            'collection', 'folder', 'request', 'response',
            'environment', 'headerpreset'],
            _.get(changeset, 'meta.model'));
          });

          if (_.isEmpty(filteredServerChangesets) && _.isEmpty(clientChangesets)) {
            console.log('nothing to force sync all');
            return;
          }

          let clientModelIds = _.chain(clientChangesets).map('data.modelId').compact().value();

          __WEBPACK_IMPORTED_MODULE_0_async___default.a.series([
          next => {
            if (_.isEmpty(clientModelIds)) {
              next();
              return;
            }

            pm.syncManager.syncClient.removeModelsFromAllChangesets(clientModelIds, err => {
              if (err) {
                next(err);
                return;
              }

              next(null);
            });
          }],
          err => {
            if (err) {
              return;
            }

            pm.localChanges.resolveConflicts({
              changesetsFromServer: filteredServerChangesets,
              changesetsFromClient: clientChangesets },
            { source: 'force-sync-all' });
          });
        });
      });
    });
  },

  _resendSyncCall: function (options) {
    this.set('isSyncCallRateLimited', false);
    this._sendSyncRequest(options);
  },

  updateSinceIdFromSyncResponse: function (done) {
    if (!this.get('maxOwnSubscribeSince')) {
      done && done();
      return;
    }

    setClientRevisionInDb(this.get('maxOwnSubscribeSince')).
    then(() => {
      console.log('updated revision after /sync', this.get('maxOwnSubscribeSince'));
      this.set('maxOwnSubscribeSince', null);
      done && done();
    });
  },

  /**
      * SYNC CLIENT INTEGRATION
      * process the bucket
      */
  sendPendingChanges: function (done) {
    try {
      this.syncClient.getChangesets((err, changesets) => {
        if (err) {
          console.error('syncClient.getChangesets error', err);
          done && done();
          return;
        }

        this.sendChangesetsToServer(changesets, err => {
          if (err) {
            console.log('offline change process aborted', err);
            done(err);
            return;
          }

          this.onAllClientChangesProcessed(() => {
            done && done();
          });
        });
      });
    }
    catch (e) {
      console.error('SyncClient.getChangesets crash!', e);
      done && done();
    }
  },

  sendChangesetToServer: function (changeset, done) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["c" /* isAuthenticatedSocketAvailable */])()) {
      done(new Error(NO_AUTHENTICATED_CONNECTION));
      return;
    }

    console.log(
    `%c${changeset.model}:${changeset.action}:${changeset.model_id || changeset.data && changeset.data.modelId}`,
    'font-weight: 800');


    if (_.get(changeset, 'meta.sideEffect')) {
      console.log('dropping sideEffect changeset', changeset);

      // hack to send changeset processed event for sideeffect changesets;
      broadcastChangesetResponse(changeset, null);

      this.onClientChangeProcessed(changeset, () => {
        done();
      });
      return;
    }

    this.sendChangesetToServerRetryable(changeset, (err, response) => {
      // console.log('changeset sent to server', changeset);
      return done(null, response);
    });

    // async.eachSeries(changesets, (changeset, next) => {
    //   if (!isAuthenticatedSocketAvailable()) {
    //     next(new Error(NO_AUTHENTICATED_CONNECTION));
    //     return;
    //   }

    //   console.log(
    //     `%c${changeset.model}:${changeset.action}:${changeset.model_id || (changeset.data && changeset.data.modelId)}`,
    //     'font-weight: 800'
    //   );

    //   if (_.get(changeset, 'meta.sideEffect')) {
    //     console.log('dropping sideEffect changeset', changeset);

    //     // hack to send changeset processed event for sideeffect changesets;
    //     broadcastChangesetResponse(changeset, null);

    //     this.onClientChangeProcessed(changeset, () => {
    //       next();
    //     });
    //     return;
    //   }

    //   this.sendChangesetToServerRetryable(changeset, timeline, (err, response) => {
    //     // console.log('changeset sent to server', changeset);
    //     return next(null, response);
    //   });
    // }, (err, response) => {
    //   console.log(err);
    //   console.log('Response in SYNCManager', response);
    //   done(err, response);
    // });
  },

  /**
      * Called when conflict resolition is complete, and the server queue starts being processed
      * @private
      */
  saveProcessedServerChange: function (serverChangesets, done) {
    console.log('sending server changes', serverChangesets);
    __WEBPACK_IMPORTED_MODULE_0_async___default.a.eachSeries(serverChangesets, (serverChangeset, next) => {
      this.saveServerChangeset(serverChangeset, next);
    }, () => {
      console.log('all server changes sent');
      done && done();
    });
  },

  /**
     * Function to process a single server change. Fires the mediator event that the indiv. models listen to
     * @param message
     * @param callback
     * @private
     */
  saveServerChangeset: function (message, callback) {
    if (!message) {
      return callback();
    }

    __WEBPACK_IMPORTED_MODULE_14__modules_controllers_UserController__["a" /* default */].
    get().
    then(user => {

      // HACK FOR MATCHING SUBSCRIBE PAYLOAD IN /SYNC MESSAGE and REALTIME MESSAGE
      if (_.get(message, ['meta', 'action']) === 'subscribe') {
        message.data = {
          model: _.get(message, ['meta', 'model'], message.model),
          owner: message.data.owner,
          model_id: message.data.model_id || message.data.id,
          user: user.id };


        // console.log('formatted server changeset', message);
      }

      Object(__WEBPACK_IMPORTED_MODULE_8__SyncIncomingHandler__["b" /* handleSyncMessage */])(message, () => {
        this.updateSinceFromMessage(message, function (err) {
          // log errors but move on
          if (err) {
            console.error('Could not update since id from server changesets', err);
          }

          callback && callback();
        });
      });
    }).
    catch(err => {
      callback && callback();
    });
  },

  onAllClientChangesProcessed: function (done) {
    if (Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["c" /* isAuthenticatedSocketAvailable */])()) {
      this.trigger('syncFinished');
      Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["e" /* performPendingForceSyncs */])();
    }

    done && done();
  },

  getRetryTimeoutForChangeset(model, action) {
    var retVal = 60000;
    if (_.startsWith(action, 'import')) {
      retVal = 120000; // 2 mins for import changesets
    }
    return retVal;
  },

  // Since the serverhas now moved action and model to the meta property.
  handleNewMessageFormat: function (message) {
    if (!message.hasOwnProperty('meta')) {
      return;
    }

    message.model = message.meta.model;
    message.action = message.meta.action;
  },

  _onConnect: function () {
    let connectionMode = this.get('connectionMode');

    if (connectionMode === 'watchdog') {
      this.reconfigureSocket('regular');
      this.set('connectionMode', 'regular');
      __WEBPACK_IMPORTED_MODULE_17__modules_services_AnalyticsService__["a" /* default */].addEvent('sync', 'reconnect_success', 'watchdog');
    }

    this.set({
      connectingToSocket: false,
      socketConnected: true,
      nextReconnectTime: null });


    // wait for the flags to be set because above flags are used to determine socket status
    try {Object(__WEBPACK_IMPORTED_MODULE_24__modules_sync_helpers_SocketEventsService__["c" /* publishSocketConnect */])();}
    catch (e) {pm.logger.error('BaseSyncTimeline~_onConnect: Could not publish socket connect message to socket observable', e);}

    // console.log('socket connected');

    __WEBPACK_IMPORTED_MODULE_14__modules_controllers_UserController__["a" /* default */].
    get().
    then(user => {
      if (user.id !== '0') {
        this.signIn();
      }
    });
  },

  _onDisconnect: function () {
    try {Object(__WEBPACK_IMPORTED_MODULE_24__modules_sync_helpers_SocketEventsService__["d" /* publishSocketDisconnect */])();}
    catch (e) {pm.logger.error('BaseSyncTimeline~onDisconnect: Could not publish socket disconnect message to socket observable', e);}

    let logout = this.explicitLogout;
    if (typeof logout === 'undefined') {
      logout = false;
    }

    if (pm.syncSocket && !pm.syncSocket.forceReconnecting) {
      this.set('connectingToSocket', false);
    }

    this.set('socketConnected', false);
    this.explicitLogout = false;

    if (logout) {
      this.trigger('disabledSync');
    } else
    if (pm.syncSocket && !pm.syncSocket.forceReconnecting) {
      this.trigger('makeNotConnected');
      this.set('nextReconnectTime', null);
    }

    this.set('loggedIn', !logout);
  },

  _onConnectError: function (err) {
    // console.log('onConnectError', err);
  },

  _onConnectTimeout: function () {
    // console.log('onConnectTimeout');
  },

  _onReconnectScheduled: function (timeTillAttempt, attemptNumber) {
    if (!timeTillAttempt) {
      return;
    }

    let scheduledTime = Date.now() + timeTillAttempt;
    this.set('nextReconnectTime', scheduledTime);

    // console.log('onReconnectScheduled', scheduledTime);
  },

  _onReconnect: function (attemptNumber) {
    // should be handled in the connect handler
    // console.log('onReconnect', attemptNumber);
  },

  _onReconnectError: function (err) {
    // console.log('onReconnectError', err);
  },

  _onReconnecting: function (attemptNumber) {
    // console.log('onReconnecting', attemptNumber, Date.now());
  },

  _onReconnectAttempt: function () {
    this.set('nextReconnectTime', null);
    this.set('socketConnected', false);
    this.set('connectingToSocket', true);
    this.trigger('makeConnecting');

    // console.log('onReconnecting');
  },

  _onReconnectFailed: function () {
    this.set('connectingToSocket', false);
    this.set('socketConnected', false);
    this.trigger('makeNotConnected');
  },

  _onSyncChange: function (action, message) {
    // if (window.___dropin === true) {
    //   console.error('Incoming message dropped', action, message);
    //   return;
    // }

    Object(__WEBPACK_IMPORTED_MODULE_22__modules_sync_timeline_helpers_RealtimeSyncMessagesService__["b" /* publishRealtimeMessage */])(message);

    // @todo: windowed-syncing: remove legacy realtime events handler
    // this.handleNewMessageFormat(message);
    // this.addChangesetToIngressQueue(message);


    // broadcastRealtimeEvent(message);
  },

  /* Socket IO Connection Events Reference
       connect. Fired upon a successful connection.
       connect_error. Fired upon a connection error. Parameters: Object error object
       connect_timeout. Fired upon a connection timeout.
       reconnect. Fired upon a successful reconnection. Parameters: Number reconnection attempt number
       reconnect_scheduled. Fired when the next reconnect attempt is scheduled. Parameters: Number time till attempt in ms, Number attempt number
       reconnect_attempt. Fired upon an attempt to reconnect.
       reconnecting. Fired upon an attempt to reconnect. Parameters: Number reconnection attempt number
       reconnect_error. Fired upon a reconnection attempt error. Parameters: Object error object
       reconnect_failed. Fired when couldn’t reconnect within reconnectionAttempts
     */

  getListeners: function () {
    return {
      // connection events
      connect: this._onConnect.bind(this),
      disconnect: this._onDisconnect.bind(this),
      connect_error: this._onConnectError.bind(this),
      connect_timeout: this._onConnectTimeout.bind(this),
      reconnect: this._onReconnect.bind(this),
      reconnect_scheduled: this._onReconnectScheduled.bind(this),
      reconnect_attempt: this._onReconnectAttempt.bind(this),
      reconnecting: this._onReconnecting.bind(this),
      reconnect_error: this._onReconnectError.bind(this),
      reconnect_failed: this._onReconnectFailed.bind(this),

      // sync realtime events
      subscribe: this._onSyncChange.bind(this, 'subscribe'),
      unsubscribe: this._onSyncChange.bind(this, 'unsubscribe'),
      create: this._onSyncChange.bind(this, 'create'),
      import: this._onSyncChange.bind(this, 'import'),
      find: this._onSyncChange.bind(this, 'find'),
      update: this._onSyncChange.bind(this, 'update'),
      update_roles: this._onSyncChange.bind(this, 'update_roles'),
      destroy: this._onSyncChange.bind(this, 'destroy'),
      history: this._onSyncChange.bind(this, 'history'),
      share: this._onSyncChange.bind(this, 'share'),
      unshare: this._onSyncChange.bind(this, 'unshare'),
      favorite: this._onSyncChange.bind(this, 'favorite'),
      unfavorite: this._onSyncChange.bind(this, 'unfavorite'),
      transfer: this._onSyncChange.bind(this, 'transfer'),
      join: this._onSyncChange.bind(this, 'join'),
      leave: this._onSyncChange.bind(this, 'leave'),
      joining: this._onSyncChange.bind(this, 'joining'),
      leaving: this._onSyncChange.bind(this, 'leaving'),
      add_member: this._onSyncChange.bind(this, 'add_member'),
      remove_member: this._onSyncChange.bind(this, 'remove_member'),
      changePlan: this._onSyncChange.bind(this, 'changePlan'),
      activate: this._onSyncChange.bind(this, 'activate'),
      deactivate: this._onSyncChange.bind(this, 'deactivate'),
      notification: this._onSyncChange.bind(this, 'notification'),
      visible: this._onSyncChange.bind(this, 'visible'),
      invisible: this._onSyncChange.bind(this, 'invisible'),
      archive: this._onSyncChange.bind(this, 'archive'),
      unarchive: this._onSyncChange.bind(this, 'unarchive') };

  },

  isErrorResponse: function (res, jwr) {

    if (__WEBPACK_IMPORTED_MODULE_4__utils_util__["a" /* default */].is3xxStatusCode(res && res.statusCode) || __WEBPACK_IMPORTED_MODULE_4__utils_util__["a" /* default */].is3xxStatusCode(jwr && jwr.statusCode)) {
      return false;
    }

    if (!res) {
      return true;
    }

    if (res.hasOwnProperty('error')) {
      return true;
    }

    if (jwr && jwr.hasOwnProperty('statusCode') && !__WEBPACK_IMPORTED_MODULE_4__utils_util__["a" /* default */].isStatusCode200(jwr.statusCode) && jwr.statusCode !== 304) {
      return true;
    }

    if (res.hasOwnProperty('statusCode') && !__WEBPACK_IMPORTED_MODULE_4__utils_util__["a" /* default */].isStatusCode200(res.statusCode) && res.statusCode !== 304) {
      return true;
    }

    return false;
  },

  /**
      * @description handle custom error names as sent by anakin
      * @param res
      * @param action is the action that caused the original error. if it's transfer, we need to resend
      */
  handleErrorObject: function (changeset, res) {

    // console.log('handling error object', changeset, res);

    var clearChange = true;

    let {
      model,
      action,
      data,
      meta } =
    changeset;

    // If it errored out because of access-control, roll it back
    // @TODO-rbac should we wait for this before moving onto next item?
    if (res && res.jwr && res.error && res.jwr.statusCode === 403 && res.error.name === 'forbiddenError') {
      __WEBPACK_IMPORTED_MODULE_13__services_AccessControl_DbRollbackService__["b" /* rollbackQueue */].push(changeset);
    }

    try {
      if (res && res.error && res.error.name == 'instanceFoundError' &&
      _.get(res, 'error.details.model_id') == window.postman_predef_collections[0]) {
        // echo collection issue
        clearChange = true;
      } else
      if (action === 'history' || action === 'collectionrun') {
        clearChange = true;
      } else
      if (!res || !res.error || _.includes(['serverError', 'WLError', 'transactionError', 'autoIncrementReadError'], res.error.name)) {
        // Here we need to retry 5 times and then reconnect
        // then retry 5 times then discard

        // no error object :s, dunno what to
        // At this point, we know it's not import collection or import folder
        // pm.bulkAnalytics.addCurrentSyncDiscarded(action, model, data, res);
        clearChange = false;
      } else
      if (action === 'import' && model === 'collection') {
        // if the server already has the collection that you're duplicating, don't do anything
        if (res && res.error && (res.error.name === 'throttleError' || res.error.name === 'instanceFoundError')) {
          if (!res.error.name === 'throttleError') {
            pm.bulkAnalytics.addCurrentSyncDiscarded(action, model, data, res);
          }
          clearChange = true;
        } else
        {
          // don't resync for echo
          if (window.postman_predef_collections.indexOf(data.id) == -1) {
            Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */])({
              model: 'collection',
              modelId: data.id });

          }
          clearChange = true;
        }
      } else
      if (action === 'import' && model === 'folder') {
        if (res.error && res.error.name === 'throttleError') {
          clearChange = true;
        } else
        {
          Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */])({
            model: 'folder',
            modelId: data.id });

          clearChange = true;
        }
      } else
      if (action === 'share' && (
      res.error.name === 'instanceNotFoundError' && res.error.details.model === 'user' ||
      res.error.name === 'instanceNotFoundError' && res.error.details.model === 'team' ||
      res.error.name === 'isNotMemberError' ||
      res.error.name === 'forbiddenError' ||
      res.error.name === 'teamChangeError'))
      {
        console.log(res.error);
        if (res.error.name != 'isSharedError') {
          var details = !_.isEmpty(res.error.details) ? res.error.details : meta;
          pm.mediator.trigger('shareError', 'share', data.id, res.error.details);
        }
        clearChange = true;
      } else
      if (action === 'unshare' && (
      res.error.name === 'instanceNotFoundError' && res.error.details.model === 'user' ||
      res.error.name === 'instanceNotFoundError' && res.error.details.model === 'team' ||
      res.error.name === 'isNotMemberError' ||
      res.error.name === 'forbiddenError' ||
      res.error.name === 'teamChangeError'))
      {
        // only throw error to the UI if the error is not isNotSharedError
        if (res.error.name !== 'isNotSharedError') {
          var details = !_.isEmpty(res.error.details) ? res.error.details : meta;
          pm.mediator.trigger('shareError', 'unshare', data.id, meta);
        }
        clearChange = true;
      } else
      if (action === 'subscribe' && res.error.name === 'isSubscribedError') {
        // already subscribed. get from server
        // if (!pm.collections.get(data.collectionId)) {
        //   // pm.collections.getMissingServerCollection(data.collectionId, data.owner);
        // }
        pm.mediator.trigger('alreadySubscribed', data.collectionId);
        clearChange = true;
      } else
      if (action === 'unsubscribe' && (res.error.name === 'isNotSubscribedError' || res.error.name === 'instanceNotFoundError')) {
        // tried to unsub from a unsubbed collection or nonexistent
        // like deleting a nonexistent collection
        clearChange = true;
      } else
      if (action === 'subscribe') {
        // any error except isSubscribedError
        pm.mediator.trigger('tempSubscribeError', data.collectionId);
        clearChange = true;
      } else
      if (action === 'unsubscribe' && res.error.name === 'serverError') {
        // no-one knows - server is incapable of handling 2 subscribe/unsubscribes quickly
        // refresh team library
        pm.mediator.trigger('tempSubscribeError', data.collectionId);
        clearChange = true;
      } else
      if (res.error.name === 'changeParentError') {
        // collection to folder:
        var details = res.error.details;
        if (details.request.model === 'folder') {
          var oldLocation = {};
          if (details.server.model === 'folder' && details.server.model_id == '') {
            // trying to move from collection to folder
            oldLocation.model = 'collection';
            oldLocation.modelId = data.collection;
            oldLocation.owner = data.owner;
          } else
          {
            // trying to move from folder to folder
            oldLocation.model = 'folder';
            oldLocation.modelId = details.server.model_id;
            oldLocation.owner = data.owner;
          }
          var toLocation = {
            model: 'folder',
            modelId: details.request.model_id,
            owner: data.owner };


          this.addChangesetsToSyncClient([Object(__WEBPACK_IMPORTED_MODULE_19__modules_sync_helpers_create_changeset__["a" /* default */])(model, 'transfer', {
            to: toLocation,
            from: oldLocation,
            owner: data.owner,
            modelId: data.id })],
          { process: false });
        } else
        {
          // folder to collection
          // we don't know what to do
          // TODO: What here
          pm.bulkAnalytics.addCurrentSyncDiscarded(action, model, data, res);
        }
        clearChange = true;
      } else
      if (res.error.name === 'orderUpdateError') {
        if (model === 'collection') {
          Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */])({
            model: 'collection',
            modelId: data.id });

        } else
        if (model === 'folder') {
          Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */])({
            model: 'folder',
            modelId: data.collection });

        }
        clearChange = true;
      } else
      if (res.error.name === 'isFavoritedError') {
        // @todo need to be called through sync response flow
        // pm.collections.setCollectionFavorite(res.error.details.model_id, true, false, { propagateToLibrary: true });
        clearChange = true;
      } else
      if (res.error.name === 'isNotFavoritedError') {
        // @todo need to be called through sync response flow
        // pm.collections.setCollectionFavorite(res.error.details.model_id, false, false, { propagateToLibrary: true });
        clearChange = true;
      } else
      if (res.error.name === 'instanceFoundError') {
        clearChange = true;
        if (action === 'history' || model === 'history') {
          clearChange = true;
        } else
        {
          // start force sync for the collection here
          if (model === 'collection' && window.postman_predef_collections.indexOf(data.id) == -1) {
            Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */])({
              model: 'collection',
              modelId: data.id });

          } else
          if (model === 'folder') {
            Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */])({
              model: 'folder',
              modelId: data.id });

          } else
          if (model === 'request') {
            Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */])({
              model: 'request',
              modelId: data.id });

          }
        }
      } else
      if (res.error.name === 'instanceNotFoundError' || res.error.name === 'parentMissingError') {
        if (action === 'history' || action === 'destroy') {
          clearChange = true;
        } else
        {
          var doesInstanceExist = false,
          details = res.error.details;
          this.handleInstanceNotFound(details);

          // Only replay the transfer if the missing model actually exists
          // If the missing model has been deleted locally, no point retrying the transfer
          // if (model === 'collection') {
          //   // doesInstanceExist = _.includes(_.map(pm.collections.models, 'id'), details.model_id);
          // }
          // else if (model === 'folder') {
          //   // doesInstanceExist = Boolean(pm.collections.getFolderById(details.model_id));
          // }
          // else if (model === 'request') {
          //   // doesInstanceExist = Boolean(pm.collections.getRequestById(details.model_id));
          // }
          // if (doesInstanceExist && action === 'transfer') {
          //   // will effectively move the change to the end of the queue.
          //   // after the missing model is created
          //   setTimeout(() => {
          //     this.addChangesetsToSyncClient(createChangeset(model, 'transfer', {
          //       to: data.to,
          //       owner: data.owner,
          //       modelId: data.id
          //     }));
          //   }, 2000);
          // }

          // always clear. everything will be recreated anyway. for transfer, the transfer change needs to be replayed
          clearChange = true;
        }
      } else
      if (res.error.name === 'throttleError') {
        clearChange = true;
      } else
      if (res.error.name === 'authenticationError') {
        this.handleAuthenticationError();

        // will be retried on sync connect
        clearChange = false;
      } else
      if (res.error === 'CSRF mismatch') {
        // get csrf call has already been made. retry after 20 seconds
        clearChange = false;
      } else
      if (res.error.name === 'forbiddenError' && action === 'update') {
        // UserController
        //   .get()
        //   .then((userData) => {
        //     if (!userData.teamSyncEnabled) {
        //       pm.toasts.warn('Oops... something went wrong. Try duplicating the collection.', {
        //         dedupeId: 'forbiddenError',
        //         timeout: 10000
        //       });
        //     }
        //     else {
        //       pm.toasts.warn('Oops...something went wrong. If this object was in your collection, try duplicating the collection. Otherwise, try resubscribing to it.', {
        //         dedupeId: 'forbiddenError',
        //         timeout: 10000
        //       });
        //     }
        //     clearChange = true;
        //     pm.bulkAnalytics.addCurrentSyncDiscarded(action, model, data, res);
        //   });
        console.log('SYNC ERROR: forbiddenError', res.error, changeset);
        clearChange = true;
      } else
      {
        // all serverError / new errors

        // TODO: Need to decide what to do here
        pm.bulkAnalytics.addCurrentSyncDiscarded(action, model, data, res);
        clearChange = true;
      }

    }
    catch (e) {
      // Exception while handling error. Have to clear the change. No other alternative :(
      console.error('Could not handle error object for ' + action + ' ' + model, e);
      pm.bulkAnalytics.addCurrentSyncDiscarded(action, model, data, res);
      pm.crashReporter.report(e);
      clearChange = true;
    }

    return clearChange;
  },

  // Called when a change from the queue 1. gave an unrecognized error or 2. did not respond in a fixed interval
  // Tries the change 3 times, then discards
  // reason is timeout or error
  retryChange: function (reason, changeToSync) {
    var clearChange = false;

    // more than 4 retries - clear the change
    if (this.get('retryCount') > 3) {
      this.set('retryCount', 0);

      if (this.hasReconnected) {
        // console.log("Has reconnected already. clearing change");
        // already tried a socket reconnect
        this.hasReconnected = false;
        var sanitizedChangeToSync = __WEBPACK_IMPORTED_MODULE_5__utils_SyncIssueHelper__["a" /* default */].sanitizedChangeSet(reason, changeToSync);
        if (reason === 'timeout') {
          // Auto discarding of timeout errors
          // pm.localChanges.popChangeFromUnsyncedQueue();
          // @todo numaan: remove current changeset from sync client and resume

          clearChange = true;

          // Sending any non-history related discards to analytics
          if (!(changeToSync.model === 'history' || changeToSync.action === 'history')) {
            __WEBPACK_IMPORTED_MODULE_17__modules_services_AnalyticsService__["a" /* default */].addEvent(
            'sync', 'discard_timeout', 'issue', null,
            __WEBPACK_IMPORTED_MODULE_5__utils_SyncIssueHelper__["a" /* default */].constructLogToAnalytics(sanitizedChangeToSync));

          }
        } else
        if (reason === 'error' && !_.get(changeToSync, 'res.error')) {
          // Auto discarding of error responses without res.error object
          // pm.localChanges.popChangeFromUnsyncedQueue();
          // @todo numaan remove current changeset from client and resume

          clearChange = true;
          __WEBPACK_IMPORTED_MODULE_17__modules_services_AnalyticsService__["a" /* default */].addEvent(
          'sync', 'discard_unnamed', 'issue', null,
          __WEBPACK_IMPORTED_MODULE_5__utils_SyncIssueHelper__["a" /* default */].constructLogToAnalytics(sanitizedChangeToSync));

        } else
        {
          this.showSyncIssue(sanitizedChangeToSync);

          // Sync issue modal will show the change set which are not been synced and does the necessary
        }

      } else
      {
        // console.log("Reconnecting..");
        this.hasReconnected = true;
        this.onAppOffline();
        this.onAppOnline();
        clearChange = false;
      }
    } else
    {
      clearTimeout(this.retryTimeout);
      this.retryTimeout = setTimeout(function () {
        // retry change after 5 seconds
        // pm.syncManager.processOfflineChanges();
      }, 5000);
    }
    return clearChange;
  },

  handleInstanceNotFound: function (details) {
    if (!details) {
      return;
    }

    switch (details.model) {
      case 'collection':
        Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */])({
          model: 'collection',
          modelId: details.model_id });

        break;
      case 'folder':
        Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */])({
          model: 'folder',
          modelId: details.model_id });

        break;
      case 'request':
        Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */])({
          model: 'request',
          modelId: details.model_id });

        break;
      case 'environment':
        Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */])({
          model: 'environment',
          modelId: details.model_id });

        break;
      default:
        break;}

  },

  forceSyncCollectionAndContinue: function (cid) {
    Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["d" /* markModelForForceSync */])({
      model: 'collection',
      modelId: cid });

  },

  addUserAgent: function (data) {
    if (!data) {
      data = {};
    }
    data['user-agent'] = this.clientUserAgent;
  },

  cleanseUpdateObject: function (model, data) {
    if (model === 'collection' || model === 'folder') {
      var propsToDelete = [
      'timestamp', 'favorite', 'synced', 'remote_id',
      'requests', 'folders',
      'createdAt', 'subscribed', 'updatedAt', 'sharedWithTeam',
      'public', 'syncedPermissions'];

      _.each(propsToDelete, function (propToDelete) {
        delete data[propToDelete];
      });
    }
  },

  retryChangesetErrorFilter: function (changeset, response) {
    // dont retry and move on if response is an actual error
    if (response instanceof Error) {
      return false;
    }

    if (_.has(response, 'changesetErrorResponse')) {
      let shouldDropChangeset = this.handleErrorObject(changeset, response.changesetErrorResponse);
      return !shouldDropChangeset;
    }

    return false;
  },

  sendChangesetToServerRetryable: function (changeset, done) {
    __WEBPACK_IMPORTED_MODULE_0_async___default.a.retry({

      // retry a changeset 3 times
      times: 3,

      // retry the changeset after 5 seconds
      interval: 5 * 1000,

      // filter function to check whether to retry the changeset
      errorFilter: this.retryChangesetErrorFilter.bind(this, changeset) },

    callback => {
      this._sendChangesetToServer(changeset, callback);
    },
    (err, response) => {
      if (err) {
        console.warn('retryable changeset failed. dropping changeset', err);
        if (err instanceof Error) {
          done && done(err);
          return;
        }
      }

      // console.log('retryable changeset done', changeset);

      this.onClientChangeProcessed(changeset, () => {
        return done && done(null, response);
      });
    });
  },

  /**
      * Use `sendChangesetToServer`
      * @private
      *
      * @param  {Object} changeset
      * @param  {Function} callback
      */
  _sendChangesetToServer: function (changeset, callback) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["c" /* isAuthenticatedSocketAvailable */])()) {
      callback(new Error(NO_AUTHENTICATED_CONNECTION));
      return;
    }

    // sanitize data to be sent to sync
    // no need to sanitize for destroy changesets

    Object(__WEBPACK_IMPORTED_MODULE_10__SyncOutgoingHelpers__["a" /* sanitizeHydratedChangeset */])(changeset);

    let {
      model,
      action,
      data,
      meta } =
    changeset,
    query = {},
    pathVariables;

    // console.log('client change to be sent to sync api', changeset);

    data.owner && (query.owner = data.owner);
    meta && meta.workspace && (query.workspace = meta.workspace);

    __WEBPACK_IMPORTED_MODULE_14__modules_controllers_UserController__["a" /* default */].
    get().
    then(user => {
      var userId = user.id;
      if (action === 'update') {
        this.cleanseUpdateObject(model, data && data.instance);
      }

      switch (action) {
        case 'share':
          this.trigger('syncStarting');
          __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
            model: 'collection',
            action: 'share',
            data: _.get(changeset, 'data.permissions'), // @TODO-permissions
            meta: { query, pathVariables: { id: _.get(changeset, ['data', 'modelId']) } } },
          (res, jwr) => {
            this.handleSyncResponseForChangeset(res, jwr, changeset, callback);
          });
          break;

        case 'unshare':
          this.trigger('syncStarting');
          __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
            model: 'collection',
            action: 'unshare',
            meta: { query, pathVariables: { id: _.get(changeset, ['data', 'modelId']) } } },
          (res, jwr) => {
            this.handleSyncResponseForChangeset(res, jwr, changeset, callback);
          });
          break;
        case 'create':
          if (model === 'request') {
            // @todo should move to sanitize request function when adding new syncservice.
            data = _.omit(data, REQUEST_IGNORE_FIELDS);
          }

          this.trigger('syncStarting');
          __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
            model: model,
            action: action,
            data: data.instance,
            meta: { query } },
          (res, jwr) => {
            this.handleSyncResponseForChangeset(res, jwr, changeset, callback);
          });
          break;
        case 'import':
        case 'importCollection':
        case 'importFolder':
        case 'importRequest':

          this.trigger('syncStarting');
          __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
            model: model,
            action: 'import',
            data: data.instance,
            meta: { query } },
          (res, jwr) => {
            this.handleSyncResponseForChangeset(res, jwr, changeset, callback);
          });
          break;
        case 'update':
          if (model == 'user') {
            changeset.model_id = userId;
          }

          if (model === 'globals') {
            // @todo: remove changeset.data.instance.globals once sync client starts supporting data.workspace
            // for workspace updates
            pathVariables = { workspace: _.get(changeset, ['data', 'workspace']) || _.get(changeset, ['data', 'instance', 'workspace']) };
          } else
          {
            pathVariables = { id: _.get(changeset, ['data', 'modelId']) };
          }

          this.trigger('syncStarting');
          __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
            model: model,
            action: 'update',
            data: _.get(changeset, ['data', 'instance']),
            meta: { query, pathVariables } },
          (res, jwr) => {
            this.handleSyncResponseForChangeset(res, jwr, changeset, callback);
          });

          break;
        case 'destroy':
          this.trigger('syncStarting');
          if (model === 'history' && data.hasOwnProperty('models')) {
            let historyIds = _.map(data.models, model => {
              return model.owner ? `${model.owner}-${model.modelId}` : model.modelId;
            });

            !_.isEmpty(historyIds) && __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
              model: model,
              action: 'destroyAll',
              data: { ids: historyIds } },
            (res, jwr) => {
              this.handleSyncResponseForChangeset(res, jwr, changeset, callback);
            });
          } else
          {
            __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
              model: model,
              action: action,
              meta: {
                query,
                pathVariables: { id: _.get(changeset, ['data', 'modelId']) } } },


            (res, jwr) => {
              this.handleSyncResponseForChangeset(res, jwr, changeset, callback);
            });
          }
          break;
        case 'transfer':
          this.trigger('syncStarting');
          if (_.includes(['request', 'folder'], model)) {
            let changesetData = _.get(changeset, 'data');

            if (!changesetData) {
              return;
            }

            __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
              model: model,
              action: action,
              data: {
                modelId: changesetData.modelId,
                owner: changesetData.owner,
                to: {
                  model: _.get(changesetData, ['to', 'model']),
                  model_id: _.get(changesetData, ['to', 'modelId']),
                  owner: _.get(changesetData, ['to', 'owner']) },

                from: {
                  model: _.get(changesetData, ['from', 'model']),
                  model_id: _.get(changesetData, ['from', 'modelId']),
                  owner: _.get(changesetData, ['from', 'owner']) } },


              meta: { query, pathVariables: { id: _.get(changeset, ['data', 'modelId']) } } },
            (res, jwr) => {
              this.handleSyncResponseForChangeset(res, jwr, changeset, callback);
            });
          }

          break;
        case 'subscribe':
        case 'unsubscribe':
          this.trigger('syncStarting');
          __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
            model: model,
            action: action,
            data: data,
            meta: {
              query,
              pathVariables: { id: _.get(changeset, ['data', 'modelId']) } } },

          (res, jwr) => {
            this.handleSyncResponseForChangeset(res, jwr, changeset, callback);
          });

          break;
        case 'favorite':
        case 'unfavorite':
          this.trigger('syncStarting');
          __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
            model: model,
            action: action,
            meta: {
              query,
              pathVariables: { id: _.get(changeset, ['data', 'modelId']) } } },

          (res, jwr) => {
            this.handleSyncResponseForChangeset(res, jwr, changeset, callback);
          });
          break;

        default:
          console.warn('UNHANDLED VERB', model, action);
          callback && callback();
          break;}

    });
  },

  // This is called for every response to a POST/PUT/DELETE call via websockets
  handleSyncResponseForChangeset: function (res, jwr, changeset, done) {
    setClientTimestampInDb(Date.now());

    broadcastChangesetResponse(changeset, res);

    if (this.isErrorResponse(res, jwr)) {
      done && done({ changesetErrorResponse: res });
      return;
    }

    done && done(null, res);
  },

  removeChangesetsFromSyncClient: function (changesets, done) {
    // reject anything that didnt come from sync client
    let syncClientChangesets = _.reject(changesets, changeset => {
      return !changeset.bucketId;
    });

    console.log('removing changesets from sync client', syncClientChangesets);

    if (_.isEmpty(syncClientChangesets)) {
      console.log('no changesets to remove from sync client');
      done && done();
      return;
    }

    Object(__WEBPACK_IMPORTED_MODULE_30__modules_sync_timeline_helpers_SyncClientService__["c" /* removeChangesets */])(syncClientChangesets, err => {
      if (err) {
        console.error('SyncManagerNew~removeChangesetsFromSyncClient: removeChangesets errored out', err);
        pm.logger.error('SyncManagerNew~removeChangesetsFromSyncClient: removeChangesets errored out', err);
      }

      done && done();
    });
  },

  onClientChangeProcessed: function (changeset, done) {
    this.removeChangesetsFromSyncClient([changeset], done);
  },

  checkSizeOfFields: function (model, action, data) {
    if (model === 'response' && action === 'create') {
      if (data.text && data.text.length > postman_sync_rawtext_limit) {
        pm.toasts.warn(
        'Response too large. The response body for "' +
        data.name +
        '" cannot be synced. The maximum length for the response text is ' +
        postman_sync_rawtext_limit +
        ' characters',
        { timeout: 10000 });

        data.text = '';
        return false;
      }
    }
    return true;
  },

  addChangesetsToSyncClient: function (changesets, opts, callback) {

    // if (window.___dropout === true) {
    //   console.error('DEBUG: outgoing changesets blocked!', changesets);
    //   return;
    // }

    let autoProcess = true;

    if (opts && opts.process === false) {
      autoProcess = false;
    }

    if (_.isEmpty(changesets)) {
      console.log('no changesets to add to sync client');

      callback && callback();

      // this is to check connection and reconnect if not connected
      this.onlineWatchdog && this.onlineWatchdog();

      // autoProcess && this.processOfflineChanges({ origin: 'new-client-changeset' });
      return;
    }

    this.syncClient.addChangesets(changesets, err => {
      if (err) {
        console.error('SyncManagerNew~addChangesetsToSyncClient: error in adding changesets to sync client', err);
        pm.logger.error('SyncManagerNew~addChangesetsToSyncClient: error in adding changesets to sync client', err);
        return callback && callback();
      }

      // console.log('syncClient.addChangesets done');

      // if (window.___blockprocess === true) {
      //   console.error('DEBUG: outgoing changesets blocked!', changesets);
      //   return;
      // }

      // this is to check connection and reconnect if not connected
      this.onlineWatchdog && this.onlineWatchdog();

      callback && callback();

      // autoProcess && this.processOfflineChanges({ origin: 'new-client-changeset' });
    });
  },

  restoreCollection: function (restoreTarget) {
    let {
      collectionId,
      ownerId,
      maxId } =
    restoreTarget;

    if (!Object(__WEBPACK_IMPORTED_MODULE_18__SyncManagerHelper__["c" /* isAuthenticatedSocketAvailable */])()) {
      return;
    }

    __WEBPACK_IMPORTED_MODULE_6__services_SyncService__["request"](pm.syncSocket, {
      model: 'collection',
      action: 'restore',
      meta: {
        query: { max_id: maxId },
        pathVariables: { id: `${ownerId}-${collectionId}` } } },

    res => {
      let error = _.get(res, 'error');
      if (error) {
        console.error('Error while restoring collection', error);
        return;
      }

      // @todo numaan - trigger refetch of the collection activity feed
    });
  },

  showConflicts: function (conflicts) {
    this.syncInternalChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["a" /* createEvent */])('show', 'conflicts', { conflicts: conflicts }));
  },

  showSyncIssue: function (issue) {
    this.syncInternalChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["a" /* createEvent */])('show', 'issue', { issue: issue }));
  },

  conflictsResolved: function (conflictResolution) {
    // pm.localChanges.onConflictsResolved(conflictResolution);
  },

  fetchPendingConflicts: function () {
    if (pm.localChanges.pendingResolution && pm.localChanges.pendingResolution.conflicts) {
      this.showConflicts(pm.localChanges.pendingResolution.conflicts);
    }
  } });


/* harmony default export */ __webpack_exports__["a"] = (SyncManagerNew);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2876:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2877);


/***/ }),

/***/ 2877:
/***/ (function(module, exports, __webpack_require__) {

const io = __webpack_require__(2878),
  Socket = __webpack_require__(2903),
  DEFAULT_OPTIONS = {
    environment: 'production',
    transports: ['websocket'],
    useCORSRouteToGetCookie: true, // Use cors to get cookie
    forceNew: true, // Do not reuse connection
    multiplex: false, // Do not multiplex
    reconnection: true, // Default to auto reconnection
    reconnectionDelay: 5 * 1000, // start with 5 seconds
    reconnectionDelayMax: 5 * 60 * 1000, // max out at 5 mins
    randomizationFactor: 0, // Adds jitter to the next reconnectionDelay. (0.5 will add upto 50% of current value)
    reconnectionAttempts: Infinity, // try to connect forever
    timeout: 20000, // Default connection timeout
    getCookieTimeout: 10000, // Timeout for the __getCookie call
    useJSONP: false, // Use jsonp instead of XHR for __getCookie call
    query: {}, // Additional query params with handshake
    headers: {}, // Additional global headers to be passed with all request 
    path: '/socket.io'
  };

class IOClient {
  constructor(options) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    // Setting the options before everything

    this._io = io;
    this.socket = null;
  }

  isDevEnv () {
    return this.options && this.options.environment && (this.options.environment !== 'production') || false;
  }

  _attachLoggers(socket) {
    socket.on('connect', () => {
      console.log('::sails.io:client:: event=connected');
    });

    socket.on('connect_error', () => {
      socket._connectionLostTimestamp = (new Date()).getTime();
      console.log('::sails.io:client:: event=connect_error');
    });

    socket.on('disconnect', (reason) => {
      socket._connectionLostTimestamp = (new Date()).getTime();
      console.log('::sails.io:client:: event=disconnected reason="' + reason + '"');
    });

    socket.on('reconnecting', (numAttempts) => {
      console.log('::sails.io:client:: event=reconnecting attempt=' + numAttempts +
        ' max_attempts=' + socket.socketOptions.reconnectionAttempts);
    });

    socket.on('reconnect', (attempt) => {
      let msSinceConnectionLost = ((new Date()).getTime() - socket._connectionLostTimestamp) || 0,
        numSecsOffline = (msSinceConnectionLost / 1000);
      console.log('::sails.io:client:: event=reconnected after=' + numSecsOffline + ' attempt=' + attempt);
    });

    socket.on('reconnect_failed', () => {
      console.error('::sails.io:client:: event=reconnect_failed attempts=' + socket.socketOptions.reconnectionAttempts);
    });

    socket.on('connect_error', (err) => {
      console.error('::sails.io:client:: event=connect_error\n' + err);
    });

    socket.on('error', (err) => {
      console.error('::sails.io:client:: event=error reason="possible network or firewall issue"\n', err);
    });

    socket.on('pong', (latency) => {
      console.log('::sails.io:client:: event=pong latency=' + latency);
    });
  }

  _decorateSocket(socket, events) {
    // Enable internal logging only in dev environment
    this.isDevEnv() && this._attachLoggers(socket);

    // Iterate though all the events if they exist
    if (events) {
      for (let evName in events) {

        if (evName === 'reconnect_scheduled') {
          socket.__reconnectScheduled = events[evName];
          continue;
        }
        // add remaining to socket
        events.hasOwnProperty(evName) && socket.on(evName, events[evName]);
      }
    }

    return socket;
  }

  connect(url, options, events) {
    if (typeof url === 'object' && !options) {
      options = url;
      url = undefined;
    }

    // If the socket already exists then disconnect it and then create a new connection
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }

    // If any specific options are passed here, it will override the default options
    options = Object.assign({}, this.options, options);

    // If url is undefined then check for url in options
    options.url = (url || options.url || undefined);

    if (!options.url) {
      throw new Error('Url of the socket.io server is missing.');
    }

    // Create a new instance of the sailsSocket with necessary options
    this.socket = new Socket(options);

    // Decorate the socket with all the required events that need to be handled
    this._decorateSocket(this.socket, events);

    // Intiate the connection
    this.socket._connect(this._io);

    return this.socket;
  }
}

module.exports = IOClient;


/***/ }),

/***/ 2878:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var url = __webpack_require__(2879);
var parser = __webpack_require__(801);
var Manager = __webpack_require__(1207);
var debug = __webpack_require__(578)('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(1207);
exports.Socket = __webpack_require__(1213);


/***/ }),

/***/ 2879:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module dependencies.
 */

var parseuri = __webpack_require__(1204);
var debug = __webpack_require__(578)('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 2880:
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(2881);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ 2881:
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ 2882:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(2883);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 2883:
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(2884);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ 2884:
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ 2885:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = __webpack_require__(1205);
var isBuf = __webpack_require__(1206);
var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 2886:
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__(2887);

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = __webpack_require__(292);


/***/ }),

/***/ 2887:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var transports = __webpack_require__(1208);
var Emitter = __webpack_require__(291);
var debug = __webpack_require__(581)('engine.io-client:socket');
var index = __webpack_require__(1212);
var parser = __webpack_require__(292);
var parseuri = __webpack_require__(1204);
var parseqs = __webpack_require__(579);

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (global.location && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // other options for Node.js client
  var freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(803);
Socket.transports = __webpack_require__(1208);
Socket.parser = __webpack_require__(292);

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0)
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 2888:
/***/ (function(module, exports) {


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}


/***/ }),

/***/ 2889:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module requirements.
 */

var XMLHttpRequest = __webpack_require__(802);
var Polling = __webpack_require__(1209);
var Emitter = __webpack_require__(291);
var inherit = __webpack_require__(580);
var debug = __webpack_require__(581)('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname !== global.location.hostname ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');
            if (self.supportsBinary && contentType === 'application/octet-stream') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (global.document) {
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 2890:
/***/ (function(module, exports) {


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};


/***/ }),

/***/ 2891:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 2892:
/***/ (function(module, exports) {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};


/***/ }),

/***/ 2893:
/***/ (function(module, exports) {

module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}


/***/ }),

/***/ 2894:
/***/ (function(module, exports) {

/*! https://mths.be/utf8js v2.1.2 by @mathias */

var stringFromCharCode = String.fromCharCode;

// Taken from https://mths.be/punycode
function ucs2decode(string) {
	var output = [];
	var counter = 0;
	var length = string.length;
	var value;
	var extra;
	while (counter < length) {
		value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// high surrogate, and there is a next character
			extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) { // low surrogate
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// unmatched surrogate; only append this code unit, in case the next
				// code unit is the high surrogate of a surrogate pair
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

// Taken from https://mths.be/punycode
function ucs2encode(array) {
	var length = array.length;
	var index = -1;
	var value;
	var output = '';
	while (++index < length) {
		value = array[index];
		if (value > 0xFFFF) {
			value -= 0x10000;
			output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
			value = 0xDC00 | value & 0x3FF;
		}
		output += stringFromCharCode(value);
	}
	return output;
}

function checkScalarValue(codePoint, strict) {
	if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
		if (strict) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
		return false;
	}
	return true;
}
/*--------------------------------------------------------------------------*/

function createByte(codePoint, shift) {
	return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
}

function encodeCodePoint(codePoint, strict) {
	if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
		return stringFromCharCode(codePoint);
	}
	var symbol = '';
	if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
		symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
	}
	else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
		if (!checkScalarValue(codePoint, strict)) {
			codePoint = 0xFFFD;
		}
		symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
		symbol += createByte(codePoint, 6);
	}
	else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
		symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
		symbol += createByte(codePoint, 12);
		symbol += createByte(codePoint, 6);
	}
	symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
	return symbol;
}

function utf8encode(string, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	var codePoints = ucs2decode(string);
	var length = codePoints.length;
	var index = -1;
	var codePoint;
	var byteString = '';
	while (++index < length) {
		codePoint = codePoints[index];
		byteString += encodeCodePoint(codePoint, strict);
	}
	return byteString;
}

/*--------------------------------------------------------------------------*/

function readContinuationByte() {
	if (byteIndex >= byteCount) {
		throw Error('Invalid byte index');
	}

	var continuationByte = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	if ((continuationByte & 0xC0) == 0x80) {
		return continuationByte & 0x3F;
	}

	// If we end up here, it’s not a continuation byte
	throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
	var byte1;
	var byte2;
	var byte3;
	var byte4;
	var codePoint;

	if (byteIndex > byteCount) {
		throw Error('Invalid byte index');
	}

	if (byteIndex == byteCount) {
		return false;
	}

	// Read first byte
	byte1 = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	// 1-byte sequence (no continuation bytes)
	if ((byte1 & 0x80) == 0) {
		return byte1;
	}

	// 2-byte sequence
	if ((byte1 & 0xE0) == 0xC0) {
		byte2 = readContinuationByte();
		codePoint = ((byte1 & 0x1F) << 6) | byte2;
		if (codePoint >= 0x80) {
			return codePoint;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 3-byte sequence (may include unpaired surrogates)
	if ((byte1 & 0xF0) == 0xE0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
		if (codePoint >= 0x0800) {
			return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 4-byte sequence
	if ((byte1 & 0xF8) == 0xF0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		byte4 = readContinuationByte();
		codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
			(byte3 << 0x06) | byte4;
		if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
			return codePoint;
		}
	}

	throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;
function utf8decode(byteString, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	byteArray = ucs2decode(byteString);
	byteCount = byteArray.length;
	byteIndex = 0;
	var codePoints = [];
	var tmp;
	while ((tmp = decodeSymbol(strict)) !== false) {
		codePoints.push(tmp);
	}
	return ucs2encode(codePoints);
}

module.exports = {
	version: '2.1.2',
	encode: utf8encode,
	decode: utf8decode
};


/***/ }),

/***/ 2895:
/***/ (function(module, exports) {

/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
  typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder :
  typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
  typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : 
  false;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function(chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function(part) {
    bb.append(part);
  });

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
};

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();


/***/ }),

/***/ 2896:
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(2897);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ 2897:
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ 2898:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module requirements.
 */

var Polling = __webpack_require__(1209);
var inherit = __webpack_require__(580);

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 2899:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var Transport = __webpack_require__(803);
var parser = __webpack_require__(292);
var parseqs = __webpack_require__(579);
var inherit = __webpack_require__(580);
var yeast = __webpack_require__(1211);
var debug = __webpack_require__(581)('engine.io-client:websocket');
var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
var NodeWebSocket;
if (typeof window === 'undefined') {
  try {
    NodeWebSocket = __webpack_require__(2900);
  } catch (e) { }
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket;
if (!WebSocket && typeof window === 'undefined') {
  WebSocket = NodeWebSocket;
}

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocket = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket ? (protocols ? new WebSocket(uri, protocols) : new WebSocket(uri)) : new WebSocket(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 2900:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2901:
/***/ (function(module, exports) {

module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}


/***/ }),

/***/ 2902:
/***/ (function(module, exports) {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ }),

/***/ 2903:
/***/ (function(module, exports, __webpack_require__) {

const JWR = __webpack_require__(2904),
  { SDK_INFO, SOCKET_OPTIONS } = __webpack_require__(2905),

  CONFIGURABLE_PROPS = ['reconnectionDelay', 'reconnectionDelayMax', 'reconnectionAttempts'];


/**
 * Send a JSONP request.
 *
 * @param  {Object}   opts [optional]
 * @param  {Function} cb
 * @return {XMLHttpRequest}
 */

function jsonp(opts, cb) {
  opts = opts || {};

  if (typeof window === 'undefined') {
    // FUTURE: refactor node usage to live in here
    return cb();
  }

  if (Object.keys(opts.headers || {}).length > 0) {
    console.warn('headers are not supported in JSONP requests');
  }

  let cbCalled = false,
    jsonpTimeout = setTimeout(function () {
      cbCalled = true;
      console.warn('Jsonp request timed out. Cookie could not be set');

      return cb(new Error('JSONP execution timeout'));
    }, opts.getCookieTimeout || 20000); // Default to 20s if nothing is provided

  var scriptEl = document.createElement('script');
  window._sailsIoJSConnect = function (response) {
    // First thing clear the timeout
    clearTimeout(jsonpTimeout);

    // In rare circumstances our script may have been vaporised.
    // Remove it, but only if it still exists
    // https://github.com/balderdashy/sails.io.js/issues/92
    if (scriptEl && scriptEl.parentNode) {
      scriptEl.parentNode.removeChild(scriptEl);
    }

    (!cbCalled) && cb(null, response);
  };

  scriptEl.src = opts.url;
  document.getElementsByTagName('head')[0].appendChild(scriptEl);
}


/**
 * Send a XHR Request
 * 
 * @param {String} opts
 * @param {Function} cb
 */

function XHRRequest(opts, done) {
  if (!opts.url) { return done(true); }

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    let status;

    if (xhr.readyState === 4) {
      status = xhr.status;

      // cleanup memory
      xhr.onreadystatechange = null;
      xhr = null;

      (status !== 200) && console.warn('XHR Error while setting cookie. Status:', status);

      // finally perform callback
      return done(status === 200, status);
    }
  };

  xhr.timeout = opts.getCookieTimeout || 20000; // Default to 20s timeout
  xhr.open('GET', opts.url, true);

  // Set all the headers
  Object.keys(opts.headers).forEach(function (header) {
    xhr.setRequestHeader(header, opts.headers[header]);
  });

  xhr.send();
}

/**
 * @api private
 * @param  {SailsSocket} socket  [description]
 * @param  {Object} requestCtx [description]
 */
function _emitFrom(socket, requestCtx) {

  if (!socket._raw) {
    throw new Error('Failed to emit from socket- raw SIO socket is missing.');
  }

  // Since callback is embedded in requestCtx,
  // retrieve it and delete the key before continuing.
  var cb = requestCtx.cb;
  delete requestCtx.cb;

  // Name of the appropriate socket.io listener on the server
  // ( === the request method or "verb", e.g. 'get', 'post', 'put', etc. )
  let sailsEndpoint = requestCtx.method;

  socket._raw.emit(sailsEndpoint, requestCtx, function serverResponded(responseCtx) {

    // Send back (emulatedHTTPBody, jsonWebSocketResponse)
    if (cb) {
      cb(responseCtx.body, new JWR(responseCtx));
    }
  });
}

/**
 * What is the `requestQueue`?
 *
 * The request queue is used to simplify app-level connection logic--
 * i.e. so you don't have to wait for the socket to be connected
 * to start trying to  synchronize data.
 *
 * @api private
 * @param  {SailsSocket}  socket
 */
function runRequestQueue(socket) {
  let queue = socket.requestQueue;

  if (!queue) { return; }

  for (let i in queue) {
    // Double-check that `queue[i]` will not
    // inadvertently discover extra properties attached to the Object
    // and/or Array prototype by other libraries/frameworks/tools.
    // (e.g. Ember does this. See https://github.com/balderdashy/sails.io.js/pull/5)
    let isSafeToDereference = ({}).hasOwnProperty.call(queue, i);
    if (isSafeToDereference) {
      _emitFrom(socket, queue[i]);
    }
  }

  // Now empty the queue to remove it as a source of additional complexity.
  socket.requestQueue = null;
}

/** SailsSocket
*
* A wrapper for an underlying Socket instance that communicates directly
* to the Socket.io server running inside of Sails.
*
* If no `socket` option is provied, SailsSocket will function as a mock. It will queue socket
* requests and event handler bindings, replaying them when the raw underlying socket actually
* connects. This is handy when we don't necessarily have the valid configuration to know
* WHICH SERVER to talk to yet, etc.  It is also used by `io.socket` for your convenience.
*
* @constructor
*
* @param {Object} [opts]
* @param {Boolean} [opts.useCORSRouteToGetCookie]
* @param {Boolean} [opts.multiplex]
* @param {Boolean} [opts.forceNew]
* @param {Number} [opts.reconnectionDelay]
* @param {Number} [opts.reconnectionDelayMax]
* @param {Number} [opts.reconnectionAttempts]
*/
function SailsSocket(opts) {
  var self = this;

  if (!opts) { throw new Error('Default socket options from client are required'); }

  self.socketOptions = {};
  SOCKET_OPTIONS.forEach(function (option) {
    opts[option] && (self.socketOptions[option] = opts[option]);
  });

  if (typeof self.socketOptions.query !== 'string') { self.socketOptions.query = SDK_INFO.versionString; }
  else { self.socketOptions.query += '&' + SDK_INFO.versionString; }

  // Add the custom configs
  self.useCORSRouteToGetCookie = opts.useCORSRouteToGetCookie || false;
  self.getCookieTimeout = opts.getCookieTimeout;
  self.useJSONP = opts.useJSONP || false;
  self.globalHeaders = ('object' === typeof opts.headers) ? opts.headers : {};
  self.url = opts.url ? opts.url.replace(/(\/)$/, '') : undefined;

  // Connecting status
  self._isConnecting = false;
  self._isPreparing = false;

  // Set up "eventQueue" to hold event handlers which have not been set on the actual raw socket yet.
  self.eventQueue = {};
  self.boundEvents = {};

  // Listen for special `parseError` event sent from sockets hook on the backend
  // if an error occurs but a valid callback was not received from the client
  // (i.e. so the server had no other way to send back the error information)
  self.on('sails:parseError', function (err) {
    console.log('Sails encountered an error parsing a socket message sent from this client, and did not have' +
      ' access to a callback function to respond with.');
    console.log('Error details:', err);
  });

  // Callback function
  self.__reconnectScheduled = null;

  // TODO:
  // Listen for a special private message on any connected that allows the server
  // to set the environment (giving us 100% certainty that we guessed right)
  // However, note that the `console.log`s called before and after connection
  // are still forced to rely on our existing heuristics (to disable, tack #production
  // onto the URL used to fetch this file.)
}

/**
* @param {Object} [opts]
* @param {Boolean} [opts.useCORSRouteToGetCookie] - effective post reconnect
* @param {Boolean} [opts.multiplex] - effective post reconnect
* @param {Boolean} [opts.forceNew] - effective post reconnect
* @param {Number} [opts.reconnectionDelay]
* @param {Number} [opts.reconnectionDelayMax]
* @param {Number} [opts.reconnectionAttempts] - resets the current attempt count too
*/
SailsSocket.prototype.configure = function (opts) {
  if (!opts) { return; }
  var self = this;

  if (!(self._raw && self._raw.io)) {
    console.error('Did not update socket since it is not connected or available');
    return;
  }

  // configure live socket
  CONFIGURABLE_PROPS.forEach(function (config) {
    // if opts has the allowed property then set it
    if (config in opts) {
      // Change own socketOptions
      self.socketOptions[config] = opts[config];
      // Change socket.io socket options
      self._raw.io[config](opts[config]);
    }
  });

  // handle backoff reset
  if (opts.reconnectionAttemptsReset) {
    self._raw.io.backoff && self._raw.io.backoff.reset();

    // If socket is attempting to reconnect, stop it
    self._raw.io.reconnecting && !self._raw.io.skipReconnect && (self._raw.io.skipReconnect = true);
  }
  console.info('Updated configuration of underlying socket');
};

/**
* @param {Object} [opts] - optional
*/
SailsSocket.prototype.reconnect = function () {
  if (!this._io) {
    throw new Error('Cannot reconnect before connecting');
  }

  if (this._isConnecting) {
    throw new Error('Cannot connect- socket is already connecting');
  }

  if (this.isConnected()) {
    throw new Error('Cannot connect- socket is already connected');
  }

  // Reconnect to the server. This will create a new socket and set it to self._raw
  this._connect(this._io);
  // Incase of reconnect rebind all previous listeners
  this.rebindListeners();
};

SailsSocket.prototype.forceReconnect = function () {
  let self = this,
    oldSocket; // Keep reference to old socket

  if (this._isPreparing) {
    console.warn('Skipping force reconnect as still preparing and no attempt of connection has been made yet.');
    return;
  }

  console.warn('Force reconnecting to ', self.url);

  if (self._raw) {
    oldSocket = self._raw;
    delete self._raw;

    // Lets remove all listeners from the old socket
    oldSocket.removeAllListeners();

    // Now for the situation when its connecting
    if (self._isConnecting) {
      // Disable the reconnect for the old socket connection
      oldSocket.io.skipReconnect = true;
      oldSocket.once('connect', function () {
        oldSocket.disconnect();
        oldSocket = null;
      });
    }
    else {
      oldSocket.disconnect();
      oldSocket = null;
    }
  }

  // Set current state 
  self._isConnecting = false;
  self.reconnect();
};

/**
* Prepare for connection
* @private
* @param {Function} callback
*/
SailsSocket.prototype._prepare = function (callback) {
  let self = this,
    isXOrigin;

  // Determine whether this is a cross-origin socket by examining the
  // hostname and port on the `window.location` object.
  isXOrigin = (function () {

    // If `window` doesn't exist (i.e. being used from node.js), then it's
    // always "cross-domain".
    if (typeof window === 'undefined' || typeof window.location === 'undefined') {
      return false;
    }

    // If `self.url` (aka "target") is falsy, then we don't need to worry about it.
    if (typeof self.url !== 'string') { return false; }

    // Get information about the "target" (`self.url`)
    var targetProtocol = (function () {
        try {
          targetProtocol = self.url.match(/^([a-z]+:\/\/)/i)[1].toLowerCase();
        }
        catch (e) { } // eslint-disable-line no-empty
        targetProtocol = targetProtocol || 'http://';
        return targetProtocol;
      }()),
      isTargetSSL = Boolean(self.url.match('^https')),
      targetPort = (function () {
        try {
          return self.url.match(/^[a-z]+:\/\/[^:]*:([0-9]*)/i)[1];
        }
        catch (e) { } // eslint-disable-line no-empty
        return isTargetSSL ? '443' : '80';
      }()),
      targetAfterProtocol = self.url.replace(/^([a-z]+:\/\/)/i, ''),
      hasSameHostname,
      isLocationSSL,
      locationPort;


    // If target protocol is different than the actual protocol,
    // then we'll consider this cross-origin.
    if (targetProtocol.replace(/[:\/]/g, '') !== window.location.protocol.replace(/[:\/]/g, '')) {
      return true;
    }


    // If target hostname is different than actual hostname, we'll consider this cross-origin.
    hasSameHostname = targetAfterProtocol.search(window.location.hostname) !== 0;
    if (!hasSameHostname) {
      return true;
    }

    // If no actual port is explicitly set on the `window.location` object,
    // we'll assume either 80 or 443.
    isLocationSSL = window.location.protocol.match(/https/i);
    locationPort = (String(window.location.port)) || (isLocationSSL ? '443' : '80');

    // Finally, if ports don't match, we'll consider this cross-origin.
    if (targetPort !== locationPort) {
      return true;
    }

    // Otherwise, it's the same origin.
    return false;
  }());

  // If this is an attempt at a cross-origin or cross-port
  // socket connection, send a JSONP request first to ensure
  // that a valid cookie is available.  This can be disabled
  // by setting `io.sails.useCORSRouteToGetCookie` to false.
  //
  // Otherwise, skip the stuff below.
  if (!(self.useCORSRouteToGetCookie && isXOrigin)) {
    return callback();
  }

  // Figure out the x-origin CORS route
  // (Sails provides a default)
  var xOriginCookieURL = self.url;
  if (typeof self.useCORSRouteToGetCookie === 'string') {
    xOriginCookieURL += self.useCORSRouteToGetCookie;
  }
  else {
    xOriginCookieURL += '/__getcookie';
  }

  // Make the AJAX request (CORS)
  if (typeof window !== 'undefined') {
    const opts = {
      url: xOriginCookieURL,
      method: 'GET',
      getCookieTimeout: self.getCookieTimeout,
      headers: self.globalHeaders
    };

    return (self.useJSONP ? jsonp : XHRRequest)(opts, callback);
  }

  throw new Error('The client only supports browser as of now');
};

/**
 * Override the backoff duration function to get when the next reconnect would be attempted;
 * 
 * Intent: The postman app uses a `reconnect_scheduled` event to show the users when the next reconnect will be
 *         Attempted. This was made possible in older version by maintaining a forked copy of socket.io
 * Problem: After updating to latest version of socket.io, the forked copy is no longer maintained, so a method to emit
 *          this event needed to be formalized as socket.io used this duration in only local scope
 * Hack: Override and re-implement the `duration` method provided by the internal `backo2` that socket.io uses.
 *       On calling the duration method, a wrapper method is executed which emits this required event
 *  
 */

SailsSocket.prototype._overrideBackoff = function () {
  if (!this._raw) { return; }

  const self = this,
    backOffDuration = self._raw.io.backoff.duration;

  self._raw.io.backoff.duration = function () {
    // here this !== self
    const duration = backOffDuration.apply(this, arguments);

    (self.__reconnectScheduled &&
    // Defer it so that the reconnect can continue
    setTimeout(function () {
      // Cannot guarantee that __reconnectScheduled would stay truthy after a timeout
      self.__reconnectScheduled && self._raw && self.__reconnectScheduled(duration, self._raw.io.backoff.attempts);
    }, 0));

    return duration;
  };
};

/**
* Start connecting this socket. Call it once
* @private
*/
SailsSocket.prototype._connect = function (io) {
  var self = this;
  !self._io && (self._io = io);

  self._isPreparing = true;

  self._prepare(function () {
    self._isPreparing = false;

    self._isConnecting = true;
    // Now that we're ready to connect, create a raw underlying Socket
    // using Socket.io and save it as `_raw` (this will start it connecting)
    self._raw = io(self.url, self.socketOptions);

    self._overrideBackoff();

    self._raw.on('connecting', function () {
      self._isConnecting = true;
    });

    self._raw.on('connect', function () {
      self._isConnecting = false;
    });

    self._raw.on('connect_error', (err) => {
      self._isConnecting = false;
      console.error(err);
    });

    self._raw.on('error', (err) => {
      self._isConnecting = false;
      console.error(err);
    });

    // replay event bindings
    self.replay();
  });

  return self;
};

/**
* Show when server is busy. ie. Connecting/Connected/Reconnection.
*
* @api public
*/

SailsSocket.prototype.isBusy = function () {
  var self = this;

  if (self.isConnected() || self._isConnecting || self._isPreparing) {
    return true;
  }
  if (!(self._raw && self._raw.io)) {
    return false;
  }
  if (self._raw.io.reconnecting) {
    return true;
  }

  return false;
};

/**
* Disconnect the underlying socket.
*
* @api public
*/
SailsSocket.prototype.disconnect = function () {
  if (!this._raw) {
    throw new Error('Cannot disconnect- socket is already disconnected');
  }
  return this._raw.disconnect();
};

/**
* isConnected
*
* @api private
* @return {Boolean} whether the socket is connected and able to
*                           communicate w/ the server.
*/
SailsSocket.prototype.isConnected = function () {
  if (!this._raw) {
    return false;
  }

  return Boolean(this._raw.connected);
};

/**
* [replay description]
* @return {[type]} [description]
*/
SailsSocket.prototype.replay = function () {
  var self = this;

  // Pass events and a reference to the request queue
  // off to the self._raw for consumption
  for (let evName in self.eventQueue) {
    for (let i in self.eventQueue[evName]) {
      self._raw.on(evName, self.eventQueue[evName][i]);
    }
  }

  // Bind a one-time function to run the request queue
  // when the self._raw connects.
  if (!self.isConnected()) {
    self._raw && self._raw.once('connect', runRequestQueue.bind(self, self));
  }
  // Or run it immediately if self._raw is already connected
  else {
    runRequestQueue(self);
  }

  return self;
};

/**
* Chainable method to bind an event to the socket.
*
* @param  {String}   evName [event name]
* @param  {Function} fn     [event handler function]
* @return {SailsSocket}
*/
SailsSocket.prototype.on = function (evName, fn) {
  // Bind the event to the raw underlying socket if possible.
  if (this._raw) {
    // Otherwise queue the event binding.
    if (!this.boundEvents[evName]) { this.boundEvents[evName] = [fn]; }
    else { this.boundEvents[evName].push(fn); }

    this._raw.on(evName, fn);
    return this;
  }

  // Otherwise queue the event binding.
  if (!this.eventQueue[evName]) {
    this.eventQueue[evName] = [fn];
  }
  else {
    this.eventQueue[evName].push(fn);
  }

  return this;
};

/**
* Chainable method to unbind an event from the socket.
*
* @param  {String}   evName [event name]
* @param  {Function} fn     [event handler function]
* @return {SailsSocket}
*/
SailsSocket.prototype.off = function (evName, fn) {

  // Bind the event to the raw underlying socket if possible.
  if (this._raw) {
    (this.boundEvents[evName] && this.boundEvents[evName].indexOf(fn) > -1) &&
      this.boundEvents[evName].splice(this.events[evName].indexOf(fn), 1);
    this._raw.off(evName, fn);
    return this;
  }

  // Otherwise queue the event binding.
  if (this.eventQueue[evName] && this.eventQueue[evName].indexOf(fn) > -1) {
    this.eventQueue[evName].splice(this.eventQueue[evName].indexOf(fn), 1);
  }

  return this;
};

/**
* Rebinds previously bound events to a new socket
*/
SailsSocket.prototype.rebindListeners = function () {
  let self = this;

  // Pass events and a reference to the request queue
  // off to the self._raw for consumption
  for (let evName in self.boundEvents) {
    for (let i = 0, ii = self.boundEvents[evName].length; i < ii; i++) {
      self._raw.on(evName, self.boundEvents[evName][i]);
    }
  }
};

/**
* Chainable method to unbind all events from the socket.
*
* @return {SailsSocket}
*/
SailsSocket.prototype.removeAllListeners = function () {

  // Clear event binding queue
  this.eventQueue = {};
  this.boundEvents = {};

  // Bind the event to the raw underlying socket if possible.
  this._raw && this._raw.removeAllListeners();
  return this;
};

/**
* Simulate a GET request to sails
* e.g.
*    `socket.get('/user/3', Stats.populate)`
*
* @api public
* @param {String} url    ::    destination URL
* @param {Object} params ::    parameters to send with the request [optional]
* @param {Function} cb   ::    callback function to call when finished [optional]
*/

SailsSocket.prototype.get = function (url, data, cb) {
  // `data` is optional
  if (typeof data === 'function') {
    cb = data;
    data = {};
  }

  return this.request({
    method: 'get',
    params: data,
    url: url
  }, cb);
};

/**
* Simulate a POST request to sails
* e.g.
*    `socket.post('/event', newMeeting, $spinner.hide)`
*
* @api public
* @param {String} url    ::    destination URL
* @param {Object} params ::    parameters to send with the request [optional]
* @param {Function} cb   ::    callback function to call when finished [optional]
*/

SailsSocket.prototype.post = function (url, data, cb) {

  // `data` is optional
  if (typeof data === 'function') {
    cb = data;
    data = {};
  }

  return this.request({
    method: 'post',
    data: data,
    url: url
  }, cb);
};

/**
* Simulate a PUT request to sails
* e.g.
*    `socket.post('/event/3', changedFields, $spinner.hide)`
*
* @api public
* @param {String} url    ::    destination URL
* @param {Object} params ::    parameters to send with the request [optional]
* @param {Function} cb   ::    callback function to call when finished [optional]
*/

SailsSocket.prototype.put = function (url, data, cb) {
  // `data` is optional
  if (typeof data === 'function') {
    cb = data;
    data = {};
  }

  return this.request({
    method: 'put',
    params: data,
    url: url
  }, cb);
};

/**
* Simulate a PUT request to sails
* e.g.
*    `socket.post('/event/3', changedFields, $spinner.hide)`
*
* @api public
* @param {String} url    ::    destination URL
* @param {Object} params ::    parameters to send with the request [optional]
* @param {Function} cb   ::    callback function to call when finished [optional]
*/

SailsSocket.prototype.patch = function (url, data, cb) {
  // `data` is optional
  if (typeof data === 'function') {
    cb = data;
    data = {};
  }

  return this.request({
    method: 'patch',
    params: data,
    url: url
  }, cb);
};

/**
* Simulate a DELETE request to sails
* e.g.
*    `socket.delete('/event', $spinner.hide)`
*
* @api public
* @param {String} url    ::    destination URL
* @param {Object} params ::    parameters to send with the request [optional]
* @param {Function} cb   ::    callback function to call when finished [optional]
*/

SailsSocket.prototype.delete = function (url, data, cb) {
  // `data` is optional
  if (typeof data === 'function') {
    cb = data;
    data = {};
  }

  return this.request({
    method: 'delete',
    params: data,
    url: url
  }, cb);
};

/**
* Simulate an HTTP request to sails
* e.g.
* ```
* socket.request({
*   url:'/user',
*   params: {},
*   method: 'POST',
*   headers: {}
* }, function (responseBody, JWR) {
*   // ...
* });
* ```
*
* @api public
* @option {String} url    ::    destination URL
* @option {Object} params ::    parameters to send with the request [optional]
* @option {Object} headers::    headers to send with the request [optional]
* @option {Function} cb   ::    callback function to call when finished [optional]
* @option {String} method ::    HTTP request method [optional]
*/
SailsSocket.prototype.request = function (options, cb) {
  const self = this;

  var usage =
    'Usage:\n' +
    'socket.request( options, [fnToCallWhenComplete] )\n\n' +
    'options.url :: e.g. "/foo/bar"\n' +
    'options.method :: e.g. "get", "post", "put", or "delete", etc.\n' +
    'options.params :: e.g. { emailAddress: "mike@sailsjs.org" }\n' +
    'options.headers :: e.g. { "x-my-custom-header": "some string" }';
  // Old usage:
  // var usage = 'Usage:\n socket.'+(options.method||'request')+'('+
  //   ' destinationURL, [dataToSend], [fnToCallWhenComplete] )';


  // Validate options and callback
  if (typeof options !== 'object' || typeof options.url !== 'string') {
    throw new Error('Invalid or missing URL!\n' + usage);
  }
  if (options.method && typeof options.method !== 'string') {
    throw new Error('Invalid `method` provided (should be a string like "post" or "put")\n' + usage);
  }
  if (options.headers && typeof options.headers !== 'object') {
    throw new Error('Invalid `headers` provided (should be an object with string values)\n' + usage);
  }
  if (options.params && typeof options.params !== 'object') {
    throw new Error('Invalid `params` provided (should be an object with string values)\n' + usage);
  }
  if (cb && typeof cb !== 'function') {
    throw new Error('Invalid callback function!\n' + usage);
  }

  options.headers = options.headers || {};

  if (self.globalHeaders && 'object' === typeof self.globalHeaders) {
    Object.keys(self.globalHeaders).forEach(function (header) {
      if (!options.headers.hasOwnProperty(header)) {
        options.headers[header] = self.globalHeaders[header];
      }
    });
  }

  // Build a simulated request object
  // (and sanitize/marshal options along the way)
  let requestCtx = {

    method: options.method.toLowerCase() || 'get',

    data: options.params || options.data || {},

    // Remove trailing slashes and spaces to make packets smaller.
    url: options.url.replace(/^(.+)\/*\s*$/, '$1'),

    headers: options.headers,

    cb: cb
  };

  // If this socket is not connected yet, queue up this request
  // instead of sending it.
  // (so it can be replayed when the socket comes online.)
  if (!self.isConnected()) {

    // If no queue array exists for this socket yet, create it.
    self.requestQueue = self.requestQueue || [];
    self.requestQueue.push(requestCtx);
    return;
  }

  // Otherwise, our socket is ok!
  // Send the request.
  _emitFrom(self, requestCtx);
};

module.exports = SailsSocket;


/***/ }),

/***/ 2904:
/***/ (function(module, exports) {

/**
 * The JWR (JSON WebSocket Response) received from a Sails server.
 *
 * @api public
 * @param  {Object}  responseCtx
 *         => :body
 *         => :statusCode
 *         => :headers
 *
 * @constructor
 */
function JWR(responseCtx) {
  this.body = responseCtx.body;
  this.headers = responseCtx.headers || {};
  this.statusCode = (typeof responseCtx.statusCode === 'undefined') ? 200 : responseCtx.statusCode;
  // FUTURE: Replace this typeof short-circuit with an assertion (statusCode should always be set)

  if (this.statusCode < 200 || this.statusCode >= 400) {
    // Determine the appropriate error message.
    var msg;
    if (this.statusCode === 0) {
      msg = 'The socket request failed.';
    }
    else {
      msg = 'Server responded with a ' + this.statusCode + ' status code';
      msg += ':\n```\n' + JSON.stringify(this.body, null, 2) + '\n```';
      // (^^Note that we should always be able to rely on socket.io to give us
      // non-circular data here, so we don't have to worry about wrapping the
      // above in a try...catch)
    }

    // Now build and attach Error instance.
    this.error = new Error(msg);
  }
}

JWR.prototype.toString = function () {
  return '[ResponseFromSails]  -- ' +
        'Status: ' + this.statusCode + '  -- ' +
        'Headers: ' + this.headers + '  -- ' +
        'Body: ' + this.body;
};
JWR.prototype.toPOJO = function () {
  return {
    body: this.body,
    headers: this.headers,
    statusCode: this.statusCode
  };
};
JWR.prototype.pipe = function () {
  // FUTURE: look at substack's stuff
  return new Error('Client-side streaming support not implemented yet.');
};


module.exports = JWR;


/***/ }),

/***/ 2905:
/***/ (function(module, exports) {

/**
 * Constant containing the names of querystring
 * parameters sent when connecting any SailsSocket.
 *
 * @type {Dictionary}
 */
const CONNECTION_METADATA_PARAMS = {
    version: '__sails_io_sdk_version',
    platform: '__sails_io_sdk_platform',
    language: '__sails_io_sdk_language'
  },

  /**
  * Constant containing metadata about the platform, language, and
  * current version of this SDK.
  *
  * @type {Dictionary}
  */
  SDK_INFO = {
    version: '1.2.1', // <-- This should be any value > 0.9 (Upstream version of sails.io.js)
    language: 'javascript',
    platform: typeof window === 'undefined' ? 'node' : 'browser'
  },

  /**
   * valid Socket.io options
   * 
   * @type {Array}
   */
  SOCKET_OPTIONS = [
    'url',
    'path',
    'reconnection',
    'reconnectionAttempts',
    'reconnectionDelay',
    'reconnectionDelayMax',
    'randomizationFactor',
    'timeout',
    'autoConnect',
    'query',
    'parser',
    'forceNew',
    'multiplex',
    'transports'
  ];


/**
 * Build `versionString` (a querystring snippet) by
 * combining SDK_INFO and CONNECTION_METADATA_PARAMS.
 * 
 * @type {String}
*/
SDK_INFO.versionString =
  CONNECTION_METADATA_PARAMS.version + '=' + SDK_INFO.version + '&' +
  CONNECTION_METADATA_PARAMS.platform + '=' + SDK_INFO.platform + '&' +
  CONNECTION_METADATA_PARAMS.language + '=' + SDK_INFO.language;

module.exports = {
  CONNECTION_METADATA_PARAMS,
  SDK_INFO,
  SOCKET_OPTIONS
};


/***/ }),

/***/ 2906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export filterUnsupportedEvents */
/* unused harmony export buildChangesetsFromEvent */
/* unused harmony export addChangesetsToSyncClient */
/* unused harmony export addMetaToChangesets */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncOutgoingHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_sync_models__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_to_changesets__ = __webpack_require__(1201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CollectionController__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_EnvironmentController__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_HistoryController__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_sync_timeline_helpers_RealtimeOutgoingSyncMessageService__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_sync_timeline_helpers__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_SyncIncomingHandler__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_controllers_CurrentUserController__ = __webpack_require__(69);













const ERROR_UNSUPPORTED_ACTOR = 'UNSUPPORTED_ACTOR',
ERROR_UNSUPPORTED_MODEL = 'UNSUPPORTED_MODEL: ',
ERROR_SYNC_DISABLED = 'SYNC_DISABLED',

MODEL_COLLECTION = 'collection',
MODEL_FOLDER = 'folder',
MODEL_REQUEST = 'request',
MODEL_RESPONSE = 'response',
MODEL_COLLECTIONRUN = 'collectionrun',
MODEL_HISTORY = 'history',
MODEL_HISTORY_RESPONSE = 'historyresponse',

ACTION_TRANSFER = 'transfer',

SYNC_OUTGOING_HANDLER_TIMEOUT = 15 * 1000, // 15 seconds

COLLECTION_MODELS_CHANGESETS = 'collectionModelChangesets',
COLLECTIONRUN_MODEL_CHANGESETS = 'collectionRunModelChangesets',
HISTORY_MODEL_CHANGESETS = 'historyModelChangesets';

/**
                                                      * filter non user events
                                                      *
                                                      * @param {any} event
                                                      * @returns {Boolean}
                                                      */
function filterUnsupportedEvents(event) {
  let actor = Object(__WEBPACK_IMPORTED_MODULE_3__modules_model_event__["c" /* getActor */])(event),
  actorType = actor && actor.type,
  eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_3__modules_model_event__["g" /* getEventNamespace */])(event);

  // whitelist only USER actions
  if (!_.includes(['USER'], actorType)) {
    return false;
  }

  // whitelist only known models
  if (!__WEBPACK_IMPORTED_MODULE_1__modules_sync_models__["a" /* default */][eventNamespace]) {
    return false;
  }

  return true;
}

/**
   * build changeset from event
   *
   * @param {Object} event
   * @returns {Promise}
   */
function buildChangesetsFromEvent(event) {
  return new Promise((resolve, reject) => {
    Object(__WEBPACK_IMPORTED_MODULE_2__services_event_to_changesets__["a" /* default */])(event, (err, changesets) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(changesets);
    });
  });
}

/**
   * Finds collection id given a model.
   *
   * @param {Object} definition
   * @param {String} type
   */
function getCollectionIdFor(definition, type) {
  if (type === MODEL_COLLECTION) {
    return Promise.resolve(definition.id);
  }

  if (definition.collection) {
    return Promise.resolve(definition.collection);
  }

  return __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CollectionController__["a" /* default */].
  _getModelByType({ model: type, modelId: definition.id }).
  then(collectionModel => {
    if (!collectionModel) {
      return;
    }

    return collectionModel.collection;
  });
}


/**
   * Adds owner to a model definition.
   *
   * @param {Object} definition
   * @param {String} model
   * @param {Array<Object>} changesets
   * @param {Object} collectionMetaCache
   */
function getOwnerFor(definition, model, changesets, collectionMetaCache) {
  if (!definition) {
    return Promise.resolve();
  }

  let collectionModelId;

  return getCollectionIdFor(definition, model)

  // get collection id
  .then(collectionId => {
    if (!collectionId) {
      return;
    }

    collectionModelId = collectionId;

    // look in cache
    if (collectionMetaCache[collectionId]) {
      return _.pick(collectionMetaCache[collectionId], ['owner']);
    }

    // cache miss, look in DB
    return __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CollectionController__["a" /* default */].
    getCollection({ id: collectionId }).
    then(collection => {
      if (!collection) {
        return;
      }

      collectionMetaCache[collectionId] = _.pick(collection, ['owner']);

      return collectionMetaCache[collectionId];
    });
  }).
  then(dbResults => {
    if (dbResults && dbResults.owner) {
      return dbResults;
    }

    // miss in DB also
    else {
        // look ahead in the changesets array just as a last resort
        let collectionChangeset = _.find(changesets, changeset => {
          return (
            changeset.model === MODEL_COLLECTION &&
            changeset.modelId === collectionModelId);

        });

        // found in changesets array
        if (collectionChangeset) {
          let collectionOwner = _.get(collectionChangeset, ['data', 'owner']);

          // add to cache
          _.assign(collectionMetaCache, { [collectionModelId]: { owner: collectionOwner } });

          // add to changeset
          return { owner: collectionOwner };
        }

        return;
      }
  });
}

function addOwnerToHistoryModels(changesets, callback) {
  // pass through if there are no history models events
  if (_.isEmpty(changesets)) {
    callback(null, changesets);
    return;
  }

  let historyMetaCache = {};

  __WEBPACK_IMPORTED_MODULE_0_async___default.a.eachSeries(changesets, (changeset, next) => {
    let modelId = _.get(changeset, ['data', 'modelId']),
    instance = _.get(changeset, ['data', 'instance']),
    historyId = changeset.model === MODEL_HISTORY ? modelId : _.get(instance, 'history');

    // changeset has owner
    if (_.has(changeset, ['data', 'owner'])) {
      historyId && _.assign(historyMetaCache, { [historyId]: { owner: _.get(changeset, ['data', 'owner']) } });
      return next();
    }

    // instance has owner
    if (instance.owner) {
      // store in cache
      historyId && _.assign(historyMetaCache, { [historyId]: { owner: instance.owner } });

      // set owner in changeset
      _.set(changeset, ['data', 'owner'], instance.owner);

      return next();
    }

    // changeset has no owner and history reference, drop
    if (!historyId) {
      changeset.drop = true;
      return next();
    }

    Promise.resolve().
    then(() => {
      if (historyMetaCache[historyId]) {
        return historyMetaCache[historyId].owner;
      }

      return __WEBPACK_IMPORTED_MODULE_7__modules_controllers_HistoryController__["a" /* default */].get({ id: historyId }).
      then(function (history) {
        return history && history.owner;
      });
    }).

    then(owner => {
      // store in cache
      _.assign(historyMetaCache, { [historyId]: { owner: owner } });

      // set owner in changeset
      _.set(changeset, ['data', 'owner'], owner);
    }).

    then(() => {
      next();
    }).
    catch(err => {
      next();
    });
  }, function (err) {
    if (err) {
      return callback(err);
    }

    callback(null, changesets);
  });
}

function addOwnerToCollectionModels(changesets, callback) {

  // pass through if there are no collection models events
  if (_.isEmpty(changesets)) {
    callback(null, changesets);
    return;
  }

  let collectionMetaCache = {};
  __WEBPACK_IMPORTED_MODULE_0_async___default.a.eachSeries(changesets, (changeset, next) => {
    let modelId = _.get(changeset, ['data', 'modelId']),
    instance = _.get(changeset, ['data', 'instance']);

    // changeset has owner
    if (_.has(changeset, ['data', 'owner'])) {
      _.assign(collectionMetaCache, { [modelId]: { owner: _.get(changeset, ['data', 'owner']) } });
      return next(null);
    }

    // for delete, favorite changeset
    if (!instance) {
      instance = { id: modelId };
    }

    getOwnerFor(instance, changeset.model, changesets, collectionMetaCache).
    then(function (findings) {
      if (findings && findings.owner) {
        if (changeset.model === MODEL_COLLECTIONRUN) {
          _.set(changeset, ['meta', 'collectionOwner', findings.owner]);
        } else
        {
          _.set(changeset, ['data', 'owner'], findings.owner);
        }
      } else
      {
        // mark the changeset to be dropped
        changeset.drop = true;
      }
    })

    // for transfer changesets, add owner in `to` as well
    .then(function () {
      if (changeset.action === ACTION_TRANSFER) {
        let to = _.get(changeset, ['data', 'to']),
        from = _.get(changeset, ['data', 'from']);

        // transfer is within the same collection, so owner should be the same as the to level entity
        to && (to.owner = _.get(changeset, ['data', 'owner']));
        from && (from.owner = _.get(changeset, ['data', 'owner']));

        return;
      }
    }).
    then(() => {
      next();
    }).
    catch(err => {
      next();
    });
  }, function (err) {
    if (err) {
      return callback(err);
    }

    callback(null, changesets);
  });
}

function addOwnerToCollectionRunModels(changesets, callback) {

  // pass through if there are no collectionrun models events
  if (_.isEmpty(changesets)) {
    callback(null, changesets);
    return;
  }

  __WEBPACK_IMPORTED_MODULE_0_async___default.a.eachSeries(changesets, (changeset, next) => {
    let instance = _.get(changeset, ['data', 'instance']);

    // For runs models that are meant to be destroyed
    if (!instance) {
      changeset.drop = true;
      return next();
    }

    if (_.get(instance, ['owner'])) {
      // Set the owner of the collection run
      _.set(changeset, ['data', 'owner'], instance.owner);
    }

    // Finding owner for collection
    getOwnerFor({ id: instance.collection }, 'collection', changesets, {}).
    then(function (findings) {
      if (findings && findings.owner) {
        _.set(changeset, ['meta', 'collectionOwner'], findings.owner);
      } else
      {
        // mark the changeset to be dropped
        changeset.drop = true;
      }
    }).
    then(() => {

      // Set the owner of the environment if it was selected
      let environmentId = _.get(instance, ['environment']);

      if (environmentId) {
        return __WEBPACK_IMPORTED_MODULE_6__modules_controllers_EnvironmentController__["a" /* default */].get({ id: environmentId }).
        then(environment => {
          if (environment) {
            _.set(changeset, ['meta', 'environmentOwner'], environment.owner);
          } else
          {
            changeset.drop = true;
          }
          next();
        }).
        catch(err => {
          next();
        });
      } else
      {
        next();
      }
    }).
    catch(err => {
      changeset.drop = true;
      next();
    });
  }, function (err) {

    err && console.error(err);

    callback(null, changesets);
  });
}

/**
   * add missing meta information to changesets
   *
   * @param {Array.<Object>} changesets
   * @returns {Promise.<Array>}
   */
function addMetaToChangesets(changesets) {

  return new Promise(resolve => {
    let collectionModelsChangesets = [],
    collectionRunModelChangesets = [],
    historyModelChangesets = [],
    leftOverChangesets = [];

    let collectionModelsSet = new Set([MODEL_COLLECTION, MODEL_FOLDER, MODEL_REQUEST, MODEL_RESPONSE]);

    // traverse all the changesets and push them into separate model based arrays
    // and keep the other ones in leftOverChangesets so we dont end up loosing changesets
    _.forEach(changesets, changeset => {
      if (collectionModelsSet.has(changeset.model)) {
        collectionModelsChangesets.push(changeset);
        return;
      }

      if (changeset.model === MODEL_COLLECTIONRUN) {
        collectionRunModelChangesets.push(changeset);
        return;
      }

      if (changeset.model === MODEL_HISTORY || changeset.model === MODEL_HISTORY_RESPONSE) {
        historyModelChangesets.push(changeset);
        return;
      }

      leftOverChangesets.push(changeset);
    });

    if (_.isEmpty(collectionRunModelChangesets) && _.isEmpty(collectionModelsChangesets) && _.isEmpty(historyModelChangesets)) {
      resolve(changesets);
      return;
    }

    let argMap = {
      [COLLECTION_MODELS_CHANGESETS]: collectionModelsChangesets,
      [COLLECTIONRUN_MODEL_CHANGESETS]: collectionRunModelChangesets,
      [HISTORY_MODEL_CHANGESETS]: historyModelChangesets };


    __WEBPACK_IMPORTED_MODULE_0_async___default.a.mapValues(argMap, function (changesets, changesetModel, callback) {
      if (changesetModel === COLLECTION_MODELS_CHANGESETS) {
        addOwnerToCollectionModels(changesets, callback);
      } else
      if (changesetModel === COLLECTIONRUN_MODEL_CHANGESETS) {
        addOwnerToCollectionRunModels(changesets, callback);
      } else
      if (changesetModel === HISTORY_MODEL_CHANGESETS) {
        addOwnerToHistoryModels(changesets, callback);
      }
    }, function (err, changesets) {
      err && console.error('Changeset meta correction failed!', err);

      let unfilteredChangesets = _.concat(
      changesets[COLLECTION_MODELS_CHANGESETS],
      changesets[COLLECTIONRUN_MODEL_CHANGESETS],
      changesets[HISTORY_MODEL_CHANGESETS]);


      let validChangesets = _.chain(unfilteredChangesets).
      concat(leftOverChangesets).
      compact().
      reject(['drop', true]).
      value();

      return resolve(validChangesets);
    });
  });
}

/**
   * adds changeset to sync client
   *
   * @param {Array} changesets
   * @returns {Promise}
   */
function addChangesetsToSyncClient(changesets) {
  // console.log('Sync.Outgoing: pushing changeset to sync client', changesets);
  return new Promise(resolve => {
    pm.syncManager.addChangesetsToSyncClient(changesets, {}, () => {
      resolve();
    });
  });
}

/**
   * Add timeline information to changeset meta
   * @param  {Array} changesets
   * @returns {Promise}
   */
async function addTimelineIdToChangesets(changesets) {
  await Promise.all(_.map(changesets, changeset => {
    if (!__WEBPACK_IMPORTED_MODULE_1__modules_sync_models__["a" /* default */][changeset.model] || !__WEBPACK_IMPORTED_MODULE_1__modules_sync_models__["a" /* default */][changeset.model].addMetaTimelineId) {
      return;
    }

    return __WEBPACK_IMPORTED_MODULE_1__modules_sync_models__["a" /* default */][changeset.model].addMetaTimelineId(changeset, changesets).
    catch(() => {
      pm.logger.error('Could not add timeline info for changeset: ', changeset);
    });
  }));
}

/**
   * Returns timeline events
   * @param  {Object} event
   *
   * @returns {Array}
   */
function getTimelineEventsFromEvent(event) {
  let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_3__modules_model_event__["g" /* getEventNamespace */])(event),
  timelineEvents = [];

  // whitelist only known models
  if (!__WEBPACK_IMPORTED_MODULE_1__modules_sync_models__["a" /* default */][eventNamespace] || !__WEBPACK_IMPORTED_MODULE_1__modules_sync_models__["a" /* default */][eventNamespace].toTimelineEvents) {
    return [];
  }

  let lowLevelEvents = _.get(event, 'events');

  _.forEach(lowLevelEvents, lowLevelEvent => {
    let handler = __WEBPACK_IMPORTED_MODULE_1__modules_sync_models__["a" /* default */][eventNamespace].toTimelineEvents[lowLevelEvent.name];

    if (!handler) {
      return;
    }

    timelineEvents = timelineEvents.concat(handler(lowLevelEvent));
  });

  return timelineEvents;
}

/**
   * Used to handle events for the sync outgoing process
   *
   * Filters
   * Builds changeset from events
   * Add Meta to Changesets
   * Add timeline id info to changesets
   * Adds to syncClient
   *
   */
async function handleBusEvent(event, done) {
  let user = await __WEBPACK_IMPORTED_MODULE_11__modules_controllers_CurrentUserController__["a" /* default */].get();

  // if not signed in, bail out
  if (!user || user.id === '0') {
    return done();
  }

  if (!filterUnsupportedEvents(event)) {
    return done();
  }

  // build changesets from events
  let changesets = await buildChangesetsFromEvent(event);

  // get timeline events used for deleting timelines
  let timelineEvents = getTimelineEventsFromEvent(event);

  if (!changesets) {
    return done();
  }

  // handling meta for changesets
  changesets = await addMetaToChangesets(changesets);

  if (_.isEmpty(changesets)) {
    return done();
  }

  // adding timeline id so they can mapped to the correct timeline and dispatched
  await addTimelineIdToChangesets(changesets);

  if (_.isEmpty(changesets)) {
    return done();
  }

  // dispatch timeline events
  if (!_.isEmpty(timelineEvents)) {
    await Object(__WEBPACK_IMPORTED_MODULE_10__services_SyncIncomingHandler__["b" /* dispatchTimelineEvents */])(timelineEvents);
  }

  // push changes to sync client
  await addChangesetsToSyncClient(changesets);

  // publish the changeset after added to sync client
  // for listeners to send to sync etc.
  _.forEach(changesets, __WEBPACK_IMPORTED_MODULE_8__modules_sync_timeline_helpers_RealtimeOutgoingSyncMessageService__["b" /* publishRealtimeOutgoingMessage */]);

  done();
}

/**
   * Bus subscription handler for sync outgoing
   *
  */
function SyncOutgoingHandler() {
  this.__disposeSubscription = Object(__WEBPACK_IMPORTED_MODULE_3__modules_model_event__["j" /* subscribeToQueue */])(handleBusEvent, SYNC_OUTGOING_HANDLER_TIMEOUT);
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sanitizeHydratedChangeset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_sync_models__ = __webpack_require__(276);


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
  syncModel = __WEBPACK_IMPORTED_MODULE_0__modules_sync_models__["a" /* default */][model],
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

/***/ 2908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeToNotifications;
/* harmony export (immutable) */ __webpack_exports__["b"] = unsubscribeNotificationsListeners;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_SyncService__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipelines_sync_action__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RealtimeSyncMessagesService__ = __webpack_require__(538);






let notificationsSubscription;

const EVENT_CREATE = 'create',
MODEL_NOTIFICATION = 'notification';

/**
                                      * Subscribe to realtime events from websocket and pipe them to the notification system.
                                      */
async function subscribeToNotifications() {
  if (notificationsSubscription) {
    return;
  }

  // subscribe to notifications first and then make the API call
  // this is done so that we don't miss out events that come before the API response finishes
  let notificationsObservable$ = Object(__WEBPACK_IMPORTED_MODULE_4__RealtimeSyncMessagesService__["a" /* getRealtimeMessagesObservable */])().
  pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["d" /* filter */])(message => {
    if (!message || !message.meta) {return false;}

    if (message.meta.model === MODEL_NOTIFICATION) {
      return true;
    }

    return false;
  }));

  notificationsSubscription = notificationsObservable$.
  subscribe(message => {
    message && Object(__WEBPACK_IMPORTED_MODULE_3__pipelines_sync_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])(EVENT_CREATE, MODEL_NOTIFICATION, message.data));
  }, () => {
    pm.logger.error('Notification subscription: Realtime notifications stream terminated due to an error.');
    notificationsSubscription = null;
  }, () => {
    notificationsSubscription = null;
  });

  try {
    let syncResponse = await Object(__WEBPACK_IMPORTED_MODULE_1__services_SyncService__["promisifiedRequest"])({ model: MODEL_NOTIFICATION, action: 'subscribe' });

    if (!syncResponse || syncResponse.error) {
      throw new Error(syncResponse && syncResponse.error ? syncResponse.error : 'subscribeToNotifications: Could not subscribe to notifications');
    }
  }
  catch (e) {
    unsubscribeNotificationsListeners();
    throw e;
  }

}

/**
   * Unsubscribe to realtime events from websocket and pipe them to the notification system.
   */
function unsubscribeNotificationsListeners() {
  if (!notificationsSubscription) {
    return;
  }

  notificationsSubscription.unsubscribe();
  notificationsSubscription = null;
}

/***/ }),

/***/ 2909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeToTeamEvents;
/* unused harmony export unsubscribeTeamEventsListeners */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_SyncService__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipelines_sync_action__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RealtimeSyncMessagesService__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_CurrentUserController__ = __webpack_require__(69);







let teamEventsSubscription;

const MODEL_TEAM = 'team';

/**
                            * Subscribe to realtime events from websocket and pipe them to the team event handlers.
                            */
async function subscribeToTeamEvents() {
  if (teamEventsSubscription) {
    return;
  }

  let user = await __WEBPACK_IMPORTED_MODULE_5__controllers_CurrentUserController__["a" /* default */].get();

  if (!user) {
    pm.logger.error('subscribeToTeamEvents: Could not subscribe to team events, current user missing/invalid');
    return;
  }

  let teamId = _.get(user, ['organizations', '0', 'id']);

  if (!teamId) {
    return;
  }

  let teamEventsObservable$ = Object(__WEBPACK_IMPORTED_MODULE_4__RealtimeSyncMessagesService__["a" /* getRealtimeMessagesObservable */])().
  pipe(
  Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["d" /* filter */])(message => {
    if (!message || !message.meta) {return false;}

    if (message.meta.model !== MODEL_TEAM) {
      return false;
    }

    if (!_.includes(['changePlan', 'add_member', 'remove_member'], message.meta.action)) {
      return false;
    }

    return true;
  }));


  teamEventsSubscription = teamEventsObservable$.
  subscribe(message => {
    event && Object(__WEBPACK_IMPORTED_MODULE_3__pipelines_sync_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__model_event__["a" /* createEvent */])(message.meta.action, MODEL_TEAM, message.data));
  }, () => {
    pm.logger.error('Team events subscription: Realtime team events stream terminated due to an error.');
    teamEventsSubscription = null;
  }, () => {
    teamEventsSubscription = null;
  });

  try {
    let syncResponse = await Object(__WEBPACK_IMPORTED_MODULE_1__services_SyncService__["promisifiedRequest"])({ model: MODEL_TEAM, action: 'subscribe', meta: { pathVariables: { id: teamId } } });

    if (!syncResponse || syncResponse.error) {
      throw new Error(syncResponse && syncResponse.error ? syncResponse.error : 'subscribeToTeamEvents: Could not subscribe to team events');
    }
  }
  catch (e) {
    unsubscribeTeamEventsListeners();
    throw e;
  }

}

/**
   * Unsubscribe to listening to realtime team events from websocket.
   */
function unsubscribeTeamEventsListeners() {
  if (!teamEventsSubscription) {
    return;
  }

  teamEventsSubscription.unsubscribe();
  teamEventsSubscription = null;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ 2910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initializeConnectivityStatusBroadcast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SocketStatusService__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TimelinesStatusService__ = __webpack_require__(2911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_SyncStatusConstants__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(145);






const BROADCAST_STATUS_THROTTLE_TIME = 300; // 300 ms

/**
 * Used to initialize both socket and timeline status broadcast
 */
function initializeConnectivityStatusBroadcast() {
  let timelinesStatus$ = Object(__WEBPACK_IMPORTED_MODULE_1__TimelinesStatusService__["a" /* getTimelinesStatusObservable */])(),
  socketStatus$ = Object(__WEBPACK_IMPORTED_MODULE_0__SocketStatusService__["b" /* getSocketStatusObservable */])();

  // combine the latest values from both the timelines
  return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs__["e" /* combineLatest */])(socketStatus$, timelinesStatus$).
  pipe(
  Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["l" /* throttleTime */])(BROADCAST_STATUS_THROTTLE_TIME, __WEBPACK_IMPORTED_MODULE_2_rxjs__["d" /* asyncScheduler */], { leading: true, trailing: true })).

  subscribe(values => {

    pm.eventBus.channel('sync-manager-internal').publish({
      name: 'syncStatus',
      namespace: 'sync',
      data: {
        syncStatus: values[1] || __WEBPACK_IMPORTED_MODULE_3__constants_SyncStatusConstants__["e" /* SYNC_STATUS_IN_SYNC */],
        socketStatus: values[0] || __WEBPACK_IMPORTED_MODULE_3__constants_SyncStatusConstants__["c" /* SOCKET_OFFLINE */] } });


  });
}

/***/ }),

/***/ 2911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export getCurrentSyncStatus */
/* harmony export (immutable) */ __webpack_exports__["a"] = getTimelinesStatusObservable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_sync_services_SyncWindowService__ = __webpack_require__(1217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_SyncStatusConstants__ = __webpack_require__(187);






/**
                                                                                                 * Used to get the current sync status
                                                                                                 */
function getCurrentSyncStatus() {
  return getTimelinesStatusObservable().
  pipe(
  Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["j" /* take */])(1)).
  toPromise();
}

/**
   * Returns an observable for all the timelines latest status values
   * @returns {Observable}
   */
function getTimelinesStatusObservable() {
  // computes the overall status of all sync timelines
  let timelineStatusObservable$ = __WEBPACK_IMPORTED_MODULE_2__models_sync_services_SyncWindowService__["a" /* modelsInSyncWindowObservable$ */].
  pipe(
  Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["f" /* map */])(modelIds => {
    return _.map(modelIds, modelId => {
      return Object(__WEBPACK_IMPORTED_MODULE_3__index__["b" /* getTimelineStatusObservable */])(modelId);
    });
  }),

  // combine latest to get the latest values of all the observables
  Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["g" /* mergeMap */])(values => {
    return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["e" /* combineLatest */])(_.compact(values));
  }),

  // map cumulate the complete status and return a single value
  Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["f" /* map */])(values => {
    let currentTimelinesStatus = __WEBPACK_IMPORTED_MODULE_4__constants_SyncStatusConstants__["e" /* SYNC_STATUS_IN_SYNC */];

    _.includes(values, __WEBPACK_IMPORTED_MODULE_4__constants_SyncStatusConstants__["f" /* SYNC_STATUS_SYNCING */]) && (currentTimelinesStatus = __WEBPACK_IMPORTED_MODULE_4__constants_SyncStatusConstants__["f" /* SYNC_STATUS_SYNCING */]);

    return currentTimelinesStatus;
  }));


  // start with an initial value - syncing
  return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["f" /* concat */])(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["j" /* of */])(__WEBPACK_IMPORTED_MODULE_4__constants_SyncStatusConstants__["f" /* SYNC_STATUS_SYNCING */]), timelineStatusObservable$);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = analyticsHandler;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_event_to_analytics__ = __webpack_require__(2913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_async__);




const ERROR_UNSUPPORTED_ACTOR = 'UNSUPPORTED_ACTOR';

/**
                                                      * filter non user events
                                                      *
                                                      * @param {any} event
                                                      * @param {any} callback
                                                      */
function filterUnsupportedEvents(event, callback) {
  let actor = Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["c" /* getActor */])(event),
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
function buildPayloadsFromEvent(event, callback) {
  Object(__WEBPACK_IMPORTED_MODULE_0__services_event_to_analytics__["a" /* default */])(event, (err, payloads) => {
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
function queueEvent(payloads, callback) {
  // bail if no payload to queue
  if (_.isEmpty(payloads)) {
    return callback(null);
  }

  _.each(payloads, p => {
    pm.bulkAnalytics.addCurrentEvent(p.category, p.action, p.label, p.value, p.meta,
    p.workspaceId, p.workspaceType);
  });
  callback(null);
}

/**
   * handle broadcast bus event
   *
   * @param {any} event
   */
function handleBusEvent(event) {
  __WEBPACK_IMPORTED_MODULE_2_async___default.a.waterfall([
  function (callback) {
    callback(null, event);
  },
  filterUnsupportedEvents,
  buildPayloadsFromEvent,
  queueEvent],
  function (err) {
    err &&
    !_.includes([ERROR_UNSUPPORTED_ACTOR], err && err.message) &&
    console.error(err);
  });
}

/**
   * Bus subscription handler for analytics events
   *
   */
function analyticsHandler() {
  let modelEventChannel = pm.eventBus.channel('model-events');
  return modelEventChannel.subscribe(handleBusEvent);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(23);



let allowedEvents = ['create', 'create_deep', 'download', 'update', 'duplicate', 'share', 'unshare', 'favorite', 'unfavorite',
'subscribe', 'unsubscribe', 'join', 'delete', 'add_dependencies', 'addMethod', 'removeMethod'],

postmanCollectionsFormats = {
  collection: true,
  collection_v2: true,
  collection_v2_1: true,
  collection_v2_cloudapi: true },


defaultAuth = 'normal',
authFormat = {
  basic: 'basicAuth',
  bearer: 'bearerAuth',
  digest: 'digestAuth',
  oauth1: 'oAuth1Auth',
  oauth2: 'oAuth2Auth',
  hawk: 'hawkAuth',
  awsv4: 'awsv4Auth',
  ntlm: 'ntlmAuth' },


/**
                       * High level event handlers
                       */
analyticsEventHandlers = {
  collection: function (eventProps) {
    let name = eventProps.name,
    origin = eventProps.meta.origin,
    payloads = [];

    switch (name) {
      case 'create_deep':
        return collectionCreateEventHandler(eventProps);
      case 'duplicate':
        payloads.push(createPayload('collection', 'create', 'duplicate'));
        break;
      case 'share':
        return collectionShareEventHandler(eventProps);
      case 'unshare':
        payloads.push(createPayload('collection', 'unshare'));
        break;
      case 'favorite':
        origin === 'collection_browser' && payloads.push(createPayload('collection', 'favorite', 'collection_browser'));
        break;
      case 'unfavorite':
        origin === 'collection_browser' && payloads.push(createPayload('collection', 'unfavorite', 'collection_browser'));
        break;
      case 'subscribe':
        origin === 'team_library' && payloads.push(createPayload('collection', 'subscribe', 'team_library'));
        origin === 'notification' && payloads.push(createPayload('collection', 'subscribe', 'notification'));
        break;
      case 'unsubscribe':
        origin === 'team_library' && payloads.push(createPayload('collection', 'unsubscribe', 'team_library'));
        origin === 'notification' && payloads.push(createPayload('collection', 'unsubscribe', 'notification'));
        break;}


    return payloads;
  },

  environment: function (eventProps) {
    switch (eventProps.name) {
      case 'create':
        return environmentCreateShareEventHandler(eventProps);
      case 'duplicate':
        // sending extra event for `new` coz it's how older events are sent
        return [createPayload('environment', 'create', 'duplicate'), createPayload('environment', 'create', 'new')];}

  },

  variablesession: function (eventProps) {
    let model = _.get(eventProps, 'data.model');
    switch (eventProps.name) {
      case 'create':
      case 'delete':
        return [createPayload('session', eventProps.name, model)];
      case 'update':
        return [createPayload('session', 'edit', model)];}

  },

  folder: function (eventProps) {
    if (eventProps.name === 'create_deep') {
      return [createPayload('folder', 'create', 'new')];
    } else
    if (eventProps.name === 'duplicate') {
      return [createPayload('folder', 'create', 'duplicate')];
    }
  },

  headerpreset: function () {
    return [createPayload('headerpreset', 'create')];
  },

  history: function (eventProps) {
    let authType = eventProps.data.auth && eventProps.data.auth.type;
    return [createPayload('history', 'create', authFormat[authType] || defaultAuth)];
  },

  response: function (eventProps) {
    if (eventProps.name === 'create_deep') {
      return [createPayload('response', 'create', 'save_example')];
    } else
    if (eventProps.name === 'update') {
      return [createPayload('response', 'update')];
    }
  },

  request: function (eventProps) {
    let allowedEvents = ['create_deep', 'duplicate'],
    name = eventProps.name,
    origin = eventProps.meta.origin,
    value = eventProps.meta.value,
    payloads = [];

    if (!allowedEvents.includes(name)) {
      return;
    }

    if (name === 'duplicate') {
      return [createPayload('request', 'create', 'duplicate')];
    }

    switch (origin) {
      case 'builder/new_collection':
        payloads.push(createPayload('request', 'create', 'new_collection'));
        break;
      case 'builder/existing_collection':
        payloads.push(createPayload('request', 'create', 'existing_collection'));
        break;
      case 'history_single':
        payloads.push(createPayload('request', 'create', 'history_single'));
        break;
      case 'history_multiple':
        payloads.push(createPayload('request', 'create', 'history_multiple', null, value));
        break;
      case 'history_date_group':
        payloads.push(createPayload('request', 'create', 'history_date_group', null, value));
        break;}


    return payloads;
  },

  requestmethod: function (eventProps) {
    let name = eventProps.name,
    method = eventProps.data;

    switch (name) {
      case 'addMethod':
        return [createPayload('requestmethod', 'create', null, null, method)];
      case 'removeMethod':
        return [createPayload('requestmethod', 'delete', null, null, method)];}

  },

  workspace: function (eventProps) {
    let allowedEvents = ['create', 'update', 'join', 'delete', 'add_dependencies'],
    origin = _.get(eventProps, 'meta.origin'),
    name = eventProps.name;

    if (!allowedEvents.includes(name)) {
      return;
    }

    switch (name) {
      case 'create':
      case 'update':
      case 'delete':
      case 'join':
        return [createPayload('workspace', name)];
      case 'add_dependencies':
        if (origin !== 'browse/add_to_ws') {
          return;
        }

        let dependencies = _.get(eventProps, 'data.dependencies', []),
        modelCount = _.countBy(dependencies, dependency => dependency.model),
        collections = _.get(modelCount, 'collection', 0),
        environments = _.get(modelCount, 'environment', 0);

        return [createPayload('workspace', 'add_to_ws', 'browse', { collections, environments })];}

  } },


/**
        * Adds properties 'workspaceId' and 'workspaceType' to an analytics event payload
        */
addWorkspaceInfo = function (payload, meta) {
  let wkId = meta.workspace,
  wkType = meta.workspaceType;

  if (wkId && wkType) {
    payload.workspaceId = wkId;
    payload.workspaceType = wkType;
  }

  return payload;
},

/**
    * Handler specific to 'create' events for 'collection' namespace
    */
collectionCreateEventHandler = function (eventProps) {
  let payloads = [],
  meta = eventProps.meta,
  originalCollectionId = meta.originalCollectionId,
  origin = meta.origin,
  format = meta.format && meta.format.toLowerCase(),
  referrer = meta.referrer,
  linkId = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].getCollectionLinkId(meta.link);

  switch (origin) {
    case 'builder':
      payloads.push(createPayload('collection', 'create', 'empty'));
      break;
    case 'cnx':
      payloads.push(createPayload('collection', 'create', 'create_new_x'));
      break;
    case 'history/document':
      payloads.push(createPayload('collection', 'create', 'document_requests'));
      break;
    case 'history/mock':
      payloads.push(createPayload('collection', 'create', 'mock_requests'));
      break;
    case 'history/monitor':
      payloads.push(createPayload('collection', 'create', 'monitor_requests'));
      break;
    case 'history_single':
      payloads.push(createPayload('collection', 'create', 'empty'));
      payloads.push(createPayload('collection', 'create', 'history_single'));
      break;
    case 'history_multiple':
      payloads.push(createPayload('collection', 'create', 'empty'));
      payloads.push(createPayload('collection', 'create', 'history_multiple'));
      break;
    case 'history_date_group':
      payloads.push(createPayload('collection', 'create', 'empty'));
      payloads.push(createPayload('collection', 'create', 'history_date_group'));
      break;
    case 'history/share':
      payloads.push(createPayload('collection', 'create', 'share_requests'));
      break;
    case 'import/file':
      if (postmanCollectionsFormats[format]) {
        payloads.push(createPayload('collection', 'create', 'postman_collection'));
        payloads.push(createPayload('collection', 'create', 'import_file', {
          collection_type: format,
          collection_id: originalCollectionId }));

      } else {
        payloads.push(createPayload('collection', 'create', format));
      }
      break;
    case 'import/folder':
      payloads.push(createPayload('collection', 'create', postmanCollectionsFormats[format] ? 'postman_collection' : format));
      payloads.push(createPayload('collection', 'create', 'import_folder', { collection_id: originalCollectionId }));
      break;
    case 'import/link':
      payloads.push(createPayload('collection', 'create', postmanCollectionsFormats[format] ? 'postman_collection' : format));
      payloads.push(createPayload('collection', 'create', 'import_link', {
        collection_id: originalCollectionId,
        collection_type: format,
        collection_link_id: linkId }));

      break;
    case 'import/raw':
      payloads.push(createPayload('collection', 'create', postmanCollectionsFormats[format] ? 'postman_collection' : format));
      payloads.push(createPayload('collection', 'create', 'import_raw', {
        collection_id: originalCollectionId,
        collection_type: format }));

      break;
    case 'run-in-postman':
      payloads.push(createPayload('collection', 'create', 'postman_collection'));
      payloads.push(createPayload('collection', 'create', 'run_button', {
        referrer: referrer,
        collection_id: originalCollectionId,
        collection_link_id: linkId }));

      break;
    case 'builder/request/save':
      payloads.push(createPayload('collection', 'create', 'empty'));
      payloads.push(createPayload('collection', 'create', 'request'));
      break;}


  return payloads;
},

/**
    * Handler specific to 'share' events for 'collection' namespace
    */
collectionShareEventHandler = function (eventProps) {
  switch (eventProps.meta.origin) {
    case 'builder/team_sharing':
    case 'team_library/share_collections_modal':
    case 'history/share':
      return [createPayload('collection', 'share', 'team')];
    case 'builder/embed':
      return [createPayload('collection', 'share', 'embed')];
    case 'builder/link':
      return [createPayload('collection', 'share', 'link')];
    case 'builder/permissions':
      return [createPayload('collection', 'share', 'change_permissions')];}

},

/**
    * Handler specific to 'create' & 'share' events for 'environment' namespace
    */
environmentCreateShareEventHandler = function (eventProps) {
  let isTeamPresent = eventProps.data && eventProps.data.team;

  switch (eventProps.meta.origin) {
    case 'team_library/environment_template':
      if (isTeamPresent) {
        return [createPayload('environment', 'share', 'team_library')];
      }
      return [createPayload('environment', 'create', 'template')];
    case 'manage_env_modal':
      return [createPayload('environment', 'share', 'modal'), createPayload('environment', 'create', 'new')];
    default:
      return [createPayload('environment', 'create', 'new')];}

};


/**
    * This is responsible for creating a analytics payload object
    */
function createPayload(category, action, label, meta, value) {
  let payload = {
    category: category,
    action: action };


  label && (payload.label = label);
  value && (payload.value = value);
  meta && (payload.meta = meta);
  return payload;
}

/**
   * Converts an incoming event to an Analytics payload object.
   * Before sending to sync, this needs to be merged with the base object defined in BulkAnalytics.js
   */
function eventToAnalytics(event, callback) {
  if (!event) {
    return callback();
  }

  let payloads = [];

  Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["i" /* processEvent */])(event, allowedEvents, function (event, cb) {
    let namespace = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["g" /* getEventNamespace */])(event),
    name = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["f" /* getEventName */])(event),
    data = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["d" /* getEventData */])(event),
    meta = Object(__WEBPACK_IMPORTED_MODULE_0__modules_model_event__["e" /* getEventMeta */])(event),
    collection = data && data.collection,
    handler = analyticsEventHandlers[namespace],
    eventProps = {
      collection: collection,
      data: data,
      name: name,
      meta: meta || {} },

    eventPayloads;

    // this should never happen
    if (!handler) {
      return cb();
    }

    // convert events to payloads and accumulate
    eventPayloads = handler(eventProps);
    if (!_.isEmpty(eventPayloads)) {
      eventPayloads = _.map(eventPayloads, p => {
        return addWorkspaceInfo(p, eventProps.meta);
      });
      payloads = payloads.concat(eventPayloads);
    }

    return cb();
  }, function () {
    callback && callback(null, payloads);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (eventToAnalytics);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initiateBoot; });
/* unused harmony export initializeUser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipelines_app_action__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_UserController__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_ConnectivityController__ = __webpack_require__(1064);





/**
                                                                             *
                                                                             * @param {*} event
                                                                             */
function userFetch(event) {
  if (event.name === 'update' && event.namespace === 'connectivity') {

    if (_.get(event, 'data.connectionType') === 'internet' && _.get(event, 'data.status') === 'online') {
      initializeUser(event.data);
    }
  }
}

/**
   *
  */
function initiateBoot() {
  __WEBPACK_IMPORTED_MODULE_3__controllers_ConnectivityController__["a" /* default */].
  get({ connectionType: 'internet' }).
  then(internetConnectivity => {
    initializeUser(internetConnectivity);
  });
}

/**
   *
   * @param {*} connectivity
   */
function initializeUser(connectivity = {}) {
  let firstConnectedTime = connectivity.firstConnectedTime || 0;
  __WEBPACK_IMPORTED_MODULE_2__controllers_UserController__["a" /* default */].
  get().
  then((user = {}) => {

    // Bail out for non logged in user
    if (user.id === '0') {
      return;
    }

    let lastUpdatedTime = 0;

    // Handling since this is a new property return to undefined
    if (user.lastUpdatedTime) {
      lastUpdatedTime = user.lastUpdatedTime;
    }
    if (lastUpdatedTime <= firstConnectedTime) {
      Object(__WEBPACK_IMPORTED_MODULE_0__pipelines_app_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["a" /* createEvent */])('bootstrapUser', 'user'));
    }
  });
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipelines_app_action__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_UserController__ = __webpack_require__(46);


let


ConnectivityService = class ConnectivityService {
  constructor() {

    let online = navigator.onLine;

    // Booting app with online state;
    if (online) {
      Object(__WEBPACK_IMPORTED_MODULE_0__pipelines_app_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["a" /* createEvent */])('update', 'connectivity', { connectionType: 'internet', status: 'online', lastConnectedTime: Date.now() }));
    }

    window.addEventListener('online', _.debounce(() => {
      // Don't want to call again and again on some fluctuations, thus the timeout.
      Object(__WEBPACK_IMPORTED_MODULE_0__pipelines_app_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["a" /* createEvent */])('update', 'connectivity', { connectionType: 'internet', status: 'online', lastConnectedTime: Date.now() }));
    }, 2000, { leading: true, trailing: false }));

    window.addEventListener('offline', _.debounce(() => {
      Object(__WEBPACK_IMPORTED_MODULE_0__pipelines_app_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__model_event__["a" /* createEvent */])('update', 'connectivity', { connectionType: 'internet', status: 'offline' }));
    }, 2000, { leading: true, trailing: false }));
  }};


/* harmony default export */ __webpack_exports__["a"] = (ConnectivityService);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_theme_ThemeManager__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_services_TransformConfigurationsService__ = __webpack_require__(1218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_AnalyticsService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__ = __webpack_require__(52);






/* harmony default export */ __webpack_exports__["a"] = ({

  /**
                  * @method init
                  * @description Initialize function, which attaches the listener to event bus
                  */
  init() {
    let onboardingEventChannel = pm.eventBus.channel('onboarding-events');
    onboardingEventChannel.subscribe((event = {}) => {
      if (event.name === 'onboard_user') {
        if (!_.isEmpty(_.get(event, 'data.config'))) {
          __WEBPACK_IMPORTED_MODULE_3__modules_services_AnalyticsService__["a" /* default */].addEvent('onboarding', 'configuration_set', null, null, event.data.config);
          this.setConfig(event.data.config);
        }
      }
    });
  },

  /**
      * @method setConfig
      * @description It is used to set the config provided.
      * @param {Object={}} config
      */
  setConfig(config = {}) {

    // We need to trigger themeManager separately
    // Theme is already set using setSettings
    return Promise.resolve(config).
    then(config => {

      // Publish in bus
      let settingsEventChannel = pm.eventBus.channel('setting-events');
      settingsEventChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('updated', 'settings', _.omit(config, 'requesterTabLayout')));

      return config;
    }).
    then(config => {
      if (!config.postmanTheme) {
        return;
      }
      return __WEBPACK_IMPORTED_MODULE_0__controllers_theme_ThemeManager__["a" /* default */].changeTheme(config.postmanTheme);
    }).
    then(() => {
      let updatedConfig = Object(__WEBPACK_IMPORTED_MODULE_2__modules_services_TransformConfigurationsService__["a" /* transformLayout */])(config);

      return Object(__WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('update', 'userconfigs', updatedConfig));
    });
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {const eventBusChannel = null;
/* harmony export (immutable) */ __webpack_exports__["eventBusChannel"] = eventBusChannel;


const getEventBus = function () {
  if (!this.eventBusChannel) this.eventBusChannel = pm.eventBus.channel('notifications');
  return this.eventBusChannel;
};
/* harmony export (immutable) */ __webpack_exports__["getEventBus"] = getEventBus;


const _show = function (options) {
  this.getEventBus().publish(options);
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

/***/ 2918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export hasUnfinishedMigrations */
/* unused harmony export startMigration */
/* unused harmony export finishMigration */
/* unused harmony export pushPendingCommit */
/* unused harmony export timeoutMigration */
/* unused harmony export applyMigrations */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__migrations__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dexie__ = __webpack_require__(925);



const MIGRATION_STATUS = {
  STARTED: 'started',
  FINISHED: 'finished' };


/**
                           * Returns if there are any unfinished migrations.
                           *
                           * @param {Object} context migration context
                           * @param {Array.<Object>} allMigrations
                           *
                           * @returns {Boolean}
                           */
function hasUnfinishedMigrations(context, allMigrations) {
  if (!context) {
    return true;
  }

  let hasUnfinishedMigrations = false;

  _.forEach(allMigrations, function (migration) {
    if (context[migration.key] !== MIGRATION_STATUS.FINISHED) {
      hasUnfinishedMigrations = true;
      return false;
    }
  });

  return hasUnfinishedMigrations;
}

/**
   * Returns migration context.
   *
   * @returns {Object}
   */
function getMigrationContext() {
  return JSON.parse(localStorage.getItem('dbInitContext')) || {};
}

/**
   * Persists the migration context.
   */
function saveMigrationContext(context) {
  localStorage.setItem('dbInitContext', JSON.stringify(context));
}

/**
   * Marks a migration as started in context.
   *
   * @param {Object} context
   * @param {Object} migration
   */
function startMigration(context, migration) {
  context[migration.key] = MIGRATION_STATUS.STARTED;
}

/**
   * Marks a migration as finished in context.
   *
   * @param {Object} context
   * @param {Object} migration
   */
function finishMigration(context, migration) {
  context[migration.key] = MIGRATION_STATUS.FINISHED;
}

/**
   * Tracks a migration as pending commit.
   *
   * @param {Object} context
   * @param {Object} migration
   */
function pushPendingCommit(pendingCommit, migration) {
  pendingCommit[migration.type] = pendingCommit[migration.type] || [];
  pendingCommit[migration.type].push(migration.key);
}

/**
   * Times out a promise after a given timeout.
   *
   * @param {Number} timeout
   * @param {Promise} promise
   *
   * @returns {Promise}
   */
function timeoutMigration(timeout, promise) {
  let resolveAfter = new Promise((resolve, reject) => {
    setTimeout(function () {
      reject(new Error(`Migration Failed: Exceeded time limit ${timeout}ms`));
    }, timeout);
  });

  return Promise.race([resolveAfter, promise]);
}

/**
   * Applies a list of migrations.
   *
   * @param {Array.<Object>} migrations
   * @param {Object} context migration context
   * @param {Object} migrators dictionary with configurations for migrations
   * @param {Object} [options]
   * @param {Object} [options.timeout]
   */
function applyMigrations(migrations, context, migrators, options) {
  let promiseChain = Promise.resolve(),
  pendingCommit = {},

  /**
                       * Commits all pending migration items that have been queued. Specify the types of migration steps to commit.
                       * Flushes all pending migrations if no type is specified.
                       *
                       *
                       * @param [Array.<String>] [types] the migration types to be flushed
                       *
                       * @returns {Promise}
                       */
  flushUncommittedMigrations = function (types) {

    // if no types are provided, flush all migrations that have a lazy commit
    if (!types) {
      types = [];

      _.forEach(migrators, function (migration, type) {
        if (migration.commit) {
          return types.push(type);
        }
      });
    }

    return _.reduce(types, (acc, type) => {
      return acc.
      then(() => {
        // bail
        if (!migrators[type] || !migrators[type].commit) {
          return Promise.reject(new Error('Migration Error: Could not find committer'));
        }

        // no commits to flush
        if (_.isEmpty(pendingCommit && pendingCommit[type])) {
          return;
        }

        pm.logger.info('Migrations: Flushing pending commit for type', type);

        // use the committer function to flush
        return migrators[type].commit();
      }).
      then(() => {
        pm.logger.info('Migrations: Updating status in migration context', context);

        // mark the pending migrations as done
        _.forEach(pendingCommit[type], function (key) {
          finishMigration(context, { key });
        });
        saveMigrationContext(context);

        pm.logger.info('Migrations: Updated status in migration context', context);

        // reset pending migrations
        pendingCommit[type] = [];
      });
    }, Promise.resolve());
  };

  // start queueing migration steps one for each migration step
  promiseChain = _.reduce(migrations, function (acc, migration) {
    pm.logger.info('Migrations: Walking migration', migration && migration.key);
    return acc.
    then(() => {
      pm.logger.info('Migrations: Starting migration', migration && migration.key);

      if (!migrators[migration.type]) {
        return Promise.reject(new Error(`Migration error: Unknown migration type ${migration.type}`));
      }

      let migrator = migrators[migration.type];

      // bail out if both the following conditions are met
      // 1. This migration can be skipped
      // 2. This migration has been applied before
      if (!(migrator.alwaysProcess || context[migration.key] !== MIGRATION_STATUS.FINISHED)) {
        pm.logger.info('Migrations: Bailing out migration, because it is finished', migration && migration.key);
        return;
      }

      return Promise.resolve()

      // flush pending migrations
      .then(() => {
        if (migrator.commitDependencies) {
          pm.logger.info('Migrations: Flushing pending migrations for', migration && migration.key);
          return flushUncommittedMigrations(migrator.commitDependencies);
        }
      })

      // set migration status in context
      .then(() => {
        startMigration(context, migration);
        pm.logger.info('Migrations: Setting context before starting migration', migration && migration.key, context);
        saveMigrationContext(context);
      })

      // process migrations
      .then(() => {
        pm.logger.info('Migrations: Applying migration', migration && migration.key);
        return migrator.process(migration);
      })

      // commit status for migrations that are not lazy commit
      .then(() => {
        if (migrator.commit) {
          pm.logger.info('Migrations: Adding pending commit to queue', migration && migration.key);
          pushPendingCommit(pendingCommit, migration);
          return;
        }


        // set migration status in context
        pm.logger.info('Migrations: Saving migration context after completion', migration && migration.key, context);
        finishMigration(context, migration);
        saveMigrationContext(context);
      });
    });
  }, promiseChain);

  // flush any pending migrations
  promiseChain = promiseChain.then(() => {
    pm.logger.info('Migrations: Flushing pending commit steps');
    return flushUncommittedMigrations();
  });

  // convert the promise to a callback
  if (!options || !options.timeout) {
    return promiseChain;
  }

  return timeoutMigration(options.timeout, promiseChain);
}

/**
   * Initializes DB.
   *
   * This takes care of both initial DB setup and progressive migrations on updates.
   *
   * @param {Function} cb
   */
/* harmony default export */ __webpack_exports__["a"] = (function (cb) {
  let context;

  // prepare migration context
  try {
    context = getMigrationContext();
  }
  catch (e) {
    cb(e);
    return;
  }

  // bail out if all migrations have been applied
  if (!hasUnfinishedMigrations(context, __WEBPACK_IMPORTED_MODULE_0__migrations__["a" /* default */].migrations)) {
    pm.logger.info('Migrations: Skipping migrations. No migrations to apply.');
    cb();
    return;
  }

  // now there are pending migrations
  // let's apply them
  let dexie = new __WEBPACK_IMPORTED_MODULE_1_dexie__["default"](__WEBPACK_IMPORTED_MODULE_0__migrations__["a" /* default */].indexedDbName),

  lastIDBVersion = 0,

  migrationConfiguration = {
    IndexeddbSchemaMigration: {
      alwaysProcess: true,

      process(migration) {
        lastIDBVersion += 1;

        pm.logger.info('Migrations: Upgrading IndexedDB to version', migration.key, lastIDBVersion);

        dexie.version(lastIDBVersion).stores(migration.indexeddbSchema);

        return Promise.resolve();
      },

      commit() {
        pm.logger.info('Migrations: Committing IndexedDB upgrade');

        // this should initiate the DB upgrade
        return dexie.open()

        // validate if DB upgrade was successful
        .then(() => {
          let db = dexie.backendDB(),
          iDBVersion = db && db.version,

          // dexie.js right pads the version by multiplying by 10
          // converting 4 to 40, 3.1 to 31 etc
          // refer https://github.com/dfahlander/Dexie.js/blob/fb735811fd72829a44c86f82b332bf6d03c21636/src/classes/dexie/dexie.ts#L214
          // and https://github.com/dfahlander/Dexie.js/blob/fb735811fd72829a44c86f82b332bf6d03c21636/src/classes/dexie/dexie-open.ts#L47
          expectedIDBVersion = Math.round(lastIDBVersion * 10);

          if (iDBVersion !== expectedIDBVersion) {
            return Promise.reject(new Error('Migration: IndexedDB schema migration failed. IndexedDb was not upgraded successfully after `dexie.open`.'));
          }
        })

        // close it
        .then(() => {
          return dexie.close();
        });
      } },


    IndexeddbDataMigration: {
      commitDependencies: ['IndexeddbSchemaMigration'],

      process(migration) {
        pm.logger.info('Migrations: Processing IndexedDB data migration', migration.key);

        return dexie.open().
        then(() => {
          return migration.dataMigration({ dexie });
        }).
        then(() => {
          return dexie.close();
        });
      } } };



  pm.logger.info('Migrations: Starting migrations');

  return applyMigrations(__WEBPACK_IMPORTED_MODULE_0__migrations__["a" /* default */].migrations, context, migrationConfiguration, { timeout: __WEBPACK_IMPORTED_MODULE_0__migrations__["a" /* default */].timeout }).
  then(() => {
    saveMigrationContext(context);
    pm.logger.info('Migration: Finished all migrations');

    try {
      cb();
    } catch (e) {
    }
  }).
  catch(e => {
    saveMigrationContext(context);

    // Logging it on console as well to track on sentry
    // @todo: remove this once logger.error reports to sentry
    console.error('Could not complete migration.', e, context);

    pm.logger.error('Migration: Could not complete migration.', e, context);
    cb(e);
  });
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_controllers_UserConfigurationController__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_TransformConfigurationsService__ = __webpack_require__(1218);



/**
                                                                                          * Checks for the configurations that need to be updated and returns the same
                                                                                          */
function getConfigurationsToUpdate() {
  let configToUpdate = {},
  layoutConfig = pm.settings.getSetting('requesterTabLayout'),
  openInNewTabConfig = pm.settings.getSetting('requestNewTab');

  // Migrating tabs layout for existing users while upgrading
  if (layoutConfig) {
    configToUpdate = Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_TransformConfigurationsService__["a" /* transformLayout */])(layoutConfig);

    // Once migrated from pm.settings it needs to be set to null.
    // This is done because next time the app opens, it doesn't take up
    // the old settings and migrate it again
    pm.settings.setSetting('requesterTabLayout', null);
  }

  if (!_.isNil(openInNewTabConfig)) {
    configToUpdate['editor.openInNew'] = openInNewTabConfig;
    pm.settings.setSetting('requestNewTab', null);
  }

  // If the app is loading for the first time and not
  // updating to a newer version then we need to
  // turn off auto persistance of variables
  const firstLoad = __webpack_require__(18).remote.app.firstLoad;
  firstLoad && (configToUpdate['request.autoPersistVariables'] = false);

  return configToUpdate;
}

/**
   * Initializes the user configuration values
   */
function initializeConfigurationsValues(cb) {
  __WEBPACK_IMPORTED_MODULE_0__modules_controllers_UserConfigurationController__["a" /* default */].
  update(getConfigurationsToUpdate()).
  then(() => {
    pm.logger.info('initializeConfigurationsValues - Success');
    cb(null);
  }).
  catch(err => {
    pm.logger.info('initializeConfigurationsValues - Failed', err);
    cb(err);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (initializeConfigurationsValues);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var keys = __webpack_require__(2890);
var hasBinary = __webpack_require__(1210);
var sliceBuffer = __webpack_require__(2892);
var after = __webpack_require__(2893);
var utf8 = __webpack_require__(2894);

var base64encoder;
if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = __webpack_require__(720);
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(2895);

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    exports.encodePacket({ type: packet.type, data: fr.result }, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};


/***/ }),

/***/ 2920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bootRuntimeListeners;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_RuntimeVariableUpdatesListener__ = __webpack_require__(2921);


/**
                                                                                             *
                                                                                             *
                                                                                             * @export
                                                                                             */
function bootRuntimeListeners(cb) {
  if (!(pm && pm.eventBus)) {
    pm.logger.info('SharedRuntimeListeners~boot - Failed', new Error('Could not initialize runtime listeners. Event bus not initialized'));
    cb();
    return;
  }

  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_RuntimeVariableUpdatesListener__["a" /* subscribeToUpdates */])();
  pm.logger.info('SharedRuntimeListeners~boot - Success');
  cb();
}

/***/ }),

/***/ 2921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getVariableUpdatesObservable */
/* unused harmony export getUpdatesStream */
/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeToUpdates;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_postman_collection__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_VariableSessionService__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_RequestUtil__ = __webpack_require__(778);








const TYPE_NAME_MAP = {
  globals: 'globalsUpdated',
  environment: 'environmentUpdated' },


NAMESPACE_VARIABLE_UPDATES = 'variableupdates',
BUFFER_DURATION = 1 * 1000, // 1 second
MAX_UPDATE_WAIT_TIME = 60 * 1000; // 1 minute

let variableUpdates$,
environmentUpdates$,
globalsUpdates$;

/**
                  * Persists a session with its corresponding entity on DB
                  *
                  * @param {Object} session
                  *
                  * @returns {Promise}
                  */
function persistSessionUpdate(session) {
  return Object(__WEBPACK_IMPORTED_MODULE_4__modules_services_VariableSessionService__["f" /* updateEntityWithSession */])(session.id, session)

  // important catch all errors here
  // otherwise any error event on the stream will terminate the stream
  // and no new events will be pushed further on
  .catch(e => {console.error('Could not sync session updates from runtime', e);});
}

/**
   * Returns an observable with variable update events from postman-runtime channel.
   *
   * @returns {Observable}
   */
function getVariableUpdatesObservable() {
  // if there is a variable updates observable return that
  if (variableUpdates$) {
    return variableUpdates$;
  }

  // otherwise create a new one and cache it locally
  // this makes sure we don't create multiple observables to the event bus
  variableUpdates$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["a" /* Observable */](function (observer) {
    pm.eventBus.channel('postman-runtime').subscribe(event => {
      observer.next(event);
    });
  }).
  pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["d" /* filter */])(event => {
    return Object(__WEBPACK_IMPORTED_MODULE_3__model_event__["g" /* getEventNamespace */])(event) === NAMESPACE_VARIABLE_UPDATES;
  }))

  // this is what actually makes this shareable
  .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["i" /* share */])());

  return variableUpdates$;
}

/**
   * Returns an observable that takes a variable update for a type and persists it to DB.
   * Also takes care of batching events.
   *
   * @param {String} type
   *
   * @returns {Observable}
   */
function getUpdatesStream(type) {
  let variableUpdatesStream$ = getVariableUpdatesObservable(),
  groupInterval$ = Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["h" /* interval */])(BUFFER_DURATION).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["i" /* share */])());

  // stream of variable update events
  // e1---g1---e1---g1---e1---g1---e2---g2--->
  return variableUpdatesStream$

  // stream of update events for a given type
  // from here on we use e representing environment, but similar is true for globals as well
  // e1--------e1--------e1------e2-------->
  .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["d" /* filter */])(event => {
    return Object(__WEBPACK_IMPORTED_MODULE_3__model_event__["f" /* getEventName */])(event) === TYPE_NAME_MAP[type];
  }))

  // filters off invalid events
  // e1--------e1--------e1------e2-------->
  .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["d" /* filter */])(event => {
    return Object(__WEBPACK_IMPORTED_MODULE_3__model_event__["d" /* getEventData */])(event) && Object(__WEBPACK_IMPORTED_MODULE_3__model_event__["d" /* getEventData */])(event)[type];
  }))

  // maps events to sessions
  // E1--------E1--------E1------E2-------->
  .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["f" /* map */])(event => new __WEBPACK_IMPORTED_MODULE_2_postman_collection__["VariableScope"](Object(__WEBPACK_IMPORTED_MODULE_3__model_event__["d" /* getEventData */])(event)[type])))

  // group updates by per session
  // ----------[E1, E1]$--------[E1]$-[E2]$-------->
  .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["e" /* groupBy */])(session => {return session.id;}, null, () => groupInterval$))

  // merges all items in a single group and flattens it
  // by merging we mean combining all mutations
  // note how after this each item is a session and not a group
  // ----------E1--------E1--E2-------->
  // concatMap makes sure the next update is not stated before the first update is completed
  .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["c" /* concatMap */])(sessions$ => {
    return sessions$.
    pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["h" /* reduce */])((cumulative, session) => {

      // accumulate all mutations
      Object(__WEBPACK_IMPORTED_MODULE_5__utils_RequestUtil__["a" /* mergeMutations */])(cumulative.mutations, session.mutations);

      return cumulative;
    }));
  }))

  // now save each update
  // concatMap makes sure the next update is not stated before the first update is completed
  .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["c" /* concatMap */])(session => {

    // update the session, or unblock the queue after timer
    // if one update doesn't finish
    // it can block the whole queue and prevent further updates, or cause memory leak
    return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["k" /* race */])(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["g" /* defer */])(() => persistSessionUpdate(session)), Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["l" /* timer */])(MAX_UPDATE_WAIT_TIME));
  }));
}


/**
   * Subscribes to variable update event processors.
   *
   * By nature, observables are idle until they are subscribed. Once subscribed all the stream starts to react.
   */
function subscribeToUpdates() {

  // bail out if listeners have been initialized before
  if (environmentUpdates$ || environmentUpdates$) {
    return;
  }

  environmentUpdates$ = getUpdatesStream('environment');
  globalsUpdates$ = getUpdatesStream('globals');

  // we create two separate streams for environment and globals
  // we guarantee that only one update is being applied at any given time for a given stream
  // that means across streams there can be concurrent updates, and we're okay with that
  environmentUpdates$.subscribe();
  globalsUpdates$.subscribe();
}

/***/ }),

/***/ 2922:
/***/ (function(module, exports) {

let GoogleAnalytics = class GoogleAnalytics {
  constructor() {
    this.apiVersion = 1;
    this.trackID = null;
    this.clientID = null;
    this.appName = 'Postman';
    this.screenName = 'MainView';
    this.screenRes = [window.screen.width, window.screen.height].join('x');
    this.viewport = [window.innerWidth, window.innerHeight].join('x');

    this.initialize();
  }

  initialize() {
    this.trackID = window.postman_ga_tracking_id;
    this.clientID = pm.app.get('installationId');

    // since pm.appWindow.isPrimaryWindow() takes time to become valid
    setTimeout(() => {
      if (!this.isEnabled()) {
        return;
      }

      this.sendAppView('MainView');
    }, 5000);
  }

  isEnabled() {
    return Boolean(
    !window.DISABLE_ANALYTICS &&
    pm.settings.getSetting('googleAnalytics') &&
    this.clientID &&
    this.trackID);

  }

  _sendRequest(data, cb) {
    if (!this.isEnabled()) {
      return;
    }

    var payload = [
    '_v=ca1',
    'ul=en-US',
    'sd=24-bit',
    'v=' + this.apiVersion,
    'tid=' + this.trackID,
    'cid=' + this.clientID,
    'an=' + this.appName,
    'av=' + pm.app.get('version'),
    'cd=' + this.screenName,
    'sr=' + this.screenRes,
    'vp=' + this.viewport];


    Object.keys(data).forEach(function (key) {
      var val = data[key];
      if (typeof val !== 'undefined') {
        payload.push(key + '=' + val);
      }
    });

    var serializedPayload = payload.join('&');

    var xhr = new XMLHttpRequest();
    var url = 'https://www.google-analytics.com/collect';

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('authority', 'www.google-analytics.com');
    xhr.send(serializedPayload);
  }

  sendAppView(screenName) {
    var data = { 't': 'appview' };
    this.screenName = screenName;
    this._sendRequest(data);
  }};



module.exports = GoogleAnalytics;

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = initializeConfigurations;
/* unused harmony export initializeServices */
/* unused harmony export subscribeToModelEvents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_Configuration__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_FeatureFlags__ = __webpack_require__(458);
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

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserConfigurationController__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultConfigurationController__ = __webpack_require__(456);


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

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let defaultConfiguration = __webpack_require__(457);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAll: function () {
    return Promise.resolve(defaultConfiguration);
  } });

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = {"editor.requestEditorLayoutName":"layout-1-column","request.autoPersistVariables":true,"user.plansToAllowUpgrade":[],"workspace.visibilityAvailablePlans":[],"editor.openInNew":false,"editor.skipConfirmationBeforeClose":false,"editor.showIcons":true}

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserFeatureFlagController__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultFeatureFlagController__ = __webpack_require__(459);


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

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let defaultFeatureFlags = __webpack_require__(460);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAll: function () {
    return Promise.resolve(defaultFeatureFlags);
  } });

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = {"inviteByNonAdmin":false}

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(2880);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};


/***/ }),

/***/ 580:
/***/ (function(module, exports) {


module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(2896);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = initializeRollbackNotifications;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_EnvironmentController__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_HeaderPresetController__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_WorkspaceController__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_GlobalsController__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_HistoryController__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_HistoryResponseController__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_controllers_CollectionRunController__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_services_AnalyticsService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_sync_helpers_sync_api__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_sync_services_SyncIncomingHandler__ = __webpack_require__(174);













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

  __WEBPACK_IMPORTED_MODULE_9__modules_services_AnalyticsService__["a" /* default */].addEvent('rollback', 'view_toast', _.length(pendingNotifyChanges));

  pendingNotifyChanges = [];
}

const rollbackQueue = __WEBPACK_IMPORTED_MODULE_0_async___default.a.queue(rollbackWorker, 1);
/* harmony export (immutable) */ __webpack_exports__["b"] = rollbackQueue;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = mergeMutations;
/**
 * Imports mutations from source to destination
 * @param {Object} destination
 * @param {Object} source
 */
function mergeMutations(destination, source = {}) {
  _.forEach(source.compacted, mutation => {
    destination.addMutation(mutation);
  });
  _.forEach(source.stream, mutation => {
    destination.addMutation(mutation);
  });
  return destination;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable
    lines-around-comment,
    jsdoc/require-param-type,
    jsdoc/require-param-description,
    jsdoc/newline-after-description
 */

/**
 * @module sync-client/bucket
 */

const _ = __webpack_require__(0),
  async = __webpack_require__(47),
  uuid = __webpack_require__(243),
  collate = __webpack_require__(2867),

  ACTIONS = ['import', 'transfer', 'destroy', 'update'],
  IMPORT_ACTIONS = ['importCollection', 'importFolder', 'importRequest', 'import', 'create'],
  UPDATE_ACTIONS = {
    'update': {
      attribute: ['keys', 'diff'],
      value: (changeset) => {
        return {
          keys: _.get(changeset, 'data.keys', []),
          diff: _.get(changeset, 'data.diff', {})
        };
      }
    },
    'share': {
      attribute: 'share',
      value: (changeset) => {
        return _.get(changeset, 'data.permissions', {});
      }
    },
    'unshare': {
      attribute: 'share',
      value: false
    },
    'subscribe': {
      attribute: 'subscribe',
      value: true
    },
    'unsubscribe': {
      attribute: 'subscribe',
      value: false
    },
    'favorite': {
      attribute: 'favorite',
      value: true
    },
    'unfavorite': {
      attribute: 'favorite',
      value: false
    }
  },
  UPDATE_META_ATTRIBUTES = _.flatMap(_.values(UPDATE_ACTIONS), 'attribute'),

  /**
   * This is a map of models that support multi entity actions.
   */
  MULTI_ENTITY_ACTION_MODELS = {
    history: true
  },

  /**
   * This is an accumulated list of all permitted values of a changeset's actions
   * @type {Object.<String>}
   */
  ALL_PERMITTED_ACTIONS = _.keyBy(_.union(ACTIONS, IMPORT_ACTIONS, _.keys(UPDATE_ACTIONS))),
  ACTIONS_WITH_ROOT = IMPORT_ACTIONS.concat('destroy'),

  /**
   * Remove the `changeset` from the `bucket` if it's of type update and is empty
   * @param bucket
   * @param changeset
   */
  removeEmptyUpdate = (bucket, changeset) => {
    if (changeset.action === 'update' && _.isEmpty(_.pick(changeset.data, UPDATE_META_ATTRIBUTES))) {
      _.unset(bucket, ['intent', 'actions', 'update', changeset.data.modelId]);
    }
  },
  /**
   * On remove import from the bucket, transfer the meta actions to an update changeset
   * @param bucket
   * @param currentAction
   * @param changeset
   */
  addMetaUpdateOnRemoveImport = (bucket, currentAction, changeset) => {
    if (!bucket || !currentAction || !changeset) {
      return;
    }

    // Check that the currentAction that is being removed is import/create, the given changeset is an import and the
    // data of the changeset has any one of the meta attributes set
    const isApplicable = (currentAction === 'import' || currentAction === 'create') && changeset.action === 'import' &&
        _.some(_.keys(changeset.data), (key) => {
          return UPDATE_META_ATTRIBUTES.includes(key);
        });

    if (isApplicable) {
      _.set(bucket, ['intent', 'actions', 'update', changeset.data.modelId],
        _.assign(_.pick(changeset, ['model', 'timestamp', 'meta']),
          {
            data: _.pick(changeset.data, UPDATE_META_ATTRIBUTES.concat(['modelId', 'owner'])),
            action: 'update'
          }));
    }
  },
  /**
   * Returns true if the provided changeset has the meta property set based on the action provided
   * @param  {string} action
   * @param  {object} changeset
   * @return {boolean}
   */
  // @todo - restr
  isMetaActionApplicable = (action, changeset) => {
    const updateActionOpts = _.get(UPDATE_ACTIONS, action, {});
    let attribute = Boolean(_.get(changeset, ['data', updateActionOpts.attribute])),
      value = Boolean(updateActionOpts.value),
      keysAttribute = Boolean(_.get(changeset, ['data', updateActionOpts.attribute[0]])),
      diffAttribute = Boolean(_.get(changeset, ['data', updateActionOpts.attribute[1]])),
      keysValue = _.isFunction(updateActionOpts.value) && Boolean(updateActionOpts.value(changeset).keys),
      diffValue = _.isFunction(updateActionOpts.value) && Boolean(updateActionOpts.value(changeset).diff);

    if (action === 'update') {
      return (keysAttribute === keysValue ||
       diffAttribute === diffValue);
    }
    return (attribute === value);
  },
  /**
   * This function acts as a wrapper to perform lodash assigns, omits and picks
   * @param  {object} changeset       Base changeset
   * @param  {object} valuesToAssign  Key-value pairs to be assigned
   * @param  {string[]} keysToBePicked  keys that should be present in the result
   * @param  {string[]} [keysToBeOmitted] keys that should be omitted
   * @return {object} Modified changeset
   */
  modifyChangeset = (changeset, valuesToAssign, keysToBePicked, keysToBeOmitted) => {
    // eslint-disable-next-line lodash/unwrap, lodash/chaining
    let modifiedChangeset = _({}).assign(changeset, valuesToAssign);

    keysToBePicked && keysToBePicked.length && (modifiedChangeset = modifiedChangeset.pick(keysToBePicked));

    _.forEach(_.union(['root'], keysToBeOmitted || []), (key) => {
      _.unset(changeset, key);
    });

    return modifiedChangeset.value();
  },
  /**
   * Handle changeset when meta is updated
   * @param bucket
   * @param existingChangeset
   * @param changeset
   * @param {boolean} removeEmpty - If true, call removeEmptyUpdate() on unset
   */
  handleMetaUpdate = (bucket, existingChangeset, changeset, removeEmpty) => {
    /**
     * Handle the share meta action cases
     * +---+---+---+---+
     * |   | S | U | X |
     * +---+---+---+---+
     * | S | S | S | S |
     * | U | X | U | U |
     * +---+---+---+---+
     */
    // If the incoming changeset share property is false and existing changeset has truthy share, unset the share
    if (_.get(changeset, 'data.share') === false && _.get(existingChangeset, 'data.share')) {
      _.unset(existingChangeset, 'data.share');
      removeEmpty && removeEmptyUpdate(bucket, existingChangeset);
    }
    // If the incoming changeset has a share property, set data.share to that value
    else if (_.has(changeset, 'data.share')) {
      _.set(existingChangeset, 'data.share', _.get(changeset, 'data.share'));
    }

    /**
     * Handle the favorite and subscribe meta action cases
     * +---+---+---+
     * |   | F | U |
     * +---+---+---+
     * | F | = | X |
     * | U | X | = |
     * +---+---+---+
     */
    _.forEach(['data.favorite', 'data.subscribe'], (metaAction) => {
      let changesetMetaAction = _.get(changeset, metaAction),
        existingChangesetMetaAction = _.get(existingChangeset, metaAction);

      // If the incoming and existing changesets are set and have different values, unset the original change
      if (_.isBoolean(changesetMetaAction) && _.isBoolean(existingChangesetMetaAction) &&
          (changesetMetaAction !== existingChangesetMetaAction)) {
        _.unset(existingChangeset, metaAction);
        removeEmpty && removeEmptyUpdate(bucket, existingChangeset);
      }
      // If the incoming changeset has a truthy share property, set data.share to that value
      else if (_.has(changeset, metaAction)) {
        _.set(existingChangeset, metaAction, changesetMetaAction);
      }
    });
  },
  /**
   * A map of function to execute for [existingChangeset, changeset]
   */
  actionHandler = {
    'import': {
      /**
       * To handle the meta actions -> (un)share, (un)favorite
       * @param bucket
       * @param existingChangeset
       * @param changeset
       */
      'update': (bucket, existingChangeset, changeset) => {
        handleMetaUpdate(bucket, existingChangeset, changeset);
      },
      'destroy': (bucket, existingChangeset/* , changeset*/) => {
        // remove the existing changeset
        _.unset(bucket.intent.actions, ['import', existingChangeset.data.modelId]);
      },
      'transfer': (bucket, existingChangeset, changeset) => {
        // 1. Change the parent to the "to" value
        _.isObject(_.get(changeset, 'data.to')) && (existingChangeset.data.parent = changeset.data.to);
        // 2a. If the "to" instance is in the import, unset the root property in the existingChangeset
        if (_.has(bucket.intent.actions, ['import', _.get(changeset, 'data.to.modelId')])) {
          _.unset(bucket.intent.actions, ['import', existingChangeset.data.modelId, 'root']);
        }
        // 2b. Else, set the root property for the existingChangeset
        else {
          _.set(bucket.intent.actions, ['import', existingChangeset.data.modelId, 'root'], true);
        }
      }
    },
    'update': {
      'update': (bucket, existingChangeset, changeset) => {
        var diffArr = [];

        // Set the union of keys into the existing changeset (for the update action)
        (_.has(existingChangeset, 'data.keys') || _.has(changeset, 'data.keys')) && _.set(existingChangeset,
          'data.keys', _.union(_.get(existingChangeset, 'data.keys'), _.get(changeset, 'data.keys')));

        diffArr = diffArr.concat(_.get(existingChangeset, 'data.diff', []), _.get(changeset, 'data.diff', []));

        if (!_.has(changeset, 'data.diff')) {
          delete existingChangeset.data.diff;
        }
        else {
          diffArr.length && _.set(existingChangeset, 'data.diff', diffArr);
        }
        diffArr.forEach((diff) => {
          // throw an error in case $path is not specified in the diff.
          if (!_.has(diff, '$path') || _.isEmpty(diff.$path) ||
          (_.has(diff, '$path') && diff.$path.length < 2)) {
            throw new Error('sync-client~bucket.actionHandler: invalid changeset: $path not specified');
          }
        });
        handleMetaUpdate(bucket, existingChangeset, changeset, true);
      },
      // @todo - figure what to do here
      'import': (/* bucket, existingChangeset, changeset */) => { }, // eslint-disable-line no-empty-function
      'destroy': (bucket, existingChangeset, changeset) => {
        _.unset(bucket.intent.actions, ['update', existingChangeset.data.modelId]);
        _.unset(bucket.intent.actions, ['transfer', existingChangeset.data.modelId]);
        actionHandler.default.destroy(bucket, changeset);
      },
      'transfer': (bucket, existingChangeset, changeset) => {
        // Add the transfer changeset to the bucket
        _.set(bucket.intent.actions, ['transfer', existingChangeset.data.modelId], changeset);
      }
    },
    'destroy': {
      // @todo - should do an update instead
      'import': (/* bucket, existingChangeset, changeset */) => { }, // eslint-disable-line no-empty-function
      'update': (bucket, existingChangeset, changeset) => {
        _.unset(bucket.intent.actions, ['destroy', existingChangeset.data.modelId]);
        _.set(bucket.intent.actions, ['update', existingChangeset.data.modelId], changeset);
      },
      'transfer': (bucket, existingChangeset, changeset) => {
        _.unset(bucket.intent.actions, ['destroy', existingChangeset.data.modelId]);
        _.set(bucket.intent.actions, ['transfer', existingChangeset.data.modelId], changeset);
      }
    },
    'transfer': {
      // @todo
      'import': (/* bucket, existingChangeset, changeset */) => { }, // eslint-disable-line no-empty-function
      'update': (bucket, existingChangeset, changeset) => {
        // Add the update changeset to the bucket
        _.set(bucket.intent.actions, ['update', existingChangeset.data.modelId], changeset);
      },
      'destroy': (bucket, existingChangeset, changeset) => {
        _.unset(bucket.intent.actions, ['transfer', existingChangeset.data.modelId]);
        _.unset(bucket.intent.actions, ['update', existingChangeset.data.modelId]);
        actionHandler.default.destroy(bucket, changeset);
      },
      'transfer': (bucket, existingChangeset, changeset) => {
        // Update the to of the existing changeset to this one
        _.set(existingChangeset, 'data.to', _.get(changeset, 'data.to'));
      }
    },
    'default': {
      'import': (bucket, changeset) => {
        // Set the root:true property if the parent is not in the import list
        if (!(changeset.data.parent &&
          _.has(bucket.intent.actions, ['import', _.get(changeset, 'data.parent.modelId')]))) {
          _.set(changeset, 'root', true);
        }
        // Else, unset the root
        else {
          _.unset(changeset, 'root');
        }

        actionHandler.default.default(bucket, changeset);
      },
      'destroy': (bucket, changeset) => {
        // Set the root:true property if the parent is not in the destroy list
        if (!(changeset.data.parent &&
          _.has(bucket.intent.actions, ['destroy', _.get(changeset, 'data.parent.modelId')]))) {
          _.set(changeset, 'root', true);
        }
        else {
          _.unset(changeset, 'root');
        }

        actionHandler.default.default(bucket, changeset);
      },
      'default': (bucket, changeset) => {
        // Add the changeset to the bucket
        _.set(bucket.intent.actions, [changeset.action, changeset.data.modelId], changeset);
      }
    }
  },

  /**
   * Recursively finds out if the terminal parent of the modelId is equal to the model ID to be removed
   *
   * @param {Object} changesets -
   * @param {String} modelId -
   * @param {String} modelIdToBeRemoved -
   */
  findRootParent = (changesets, modelId, modelIdToBeRemoved) => {
    const changeset = changesets[modelId];

    if (!changeset) {
      return false;
    }

    if (changeset.data.parent && !changeset.root) {
      return findRootParent(changesets, changeset.data.parent.modelId || null, modelIdToBeRemoved);
    }

    if (changeset.data.modelId === modelIdToBeRemoved) {
      return true;
    }

    return false;
  },

  /**
   * Removes all the non-root changesets from the import and destroy actions and persists
   * it in the bucket
   * @param {Bucket} bucket -
   * @param {String} modelIdToBeRemoved -
   * @param {String} specifiedAction -
   */
  removeNonRootChangesets = function (bucket, modelIdToBeRemoved, specifiedAction) {
    if (!ACTIONS_WITH_ROOT.includes(specifiedAction) || !modelIdToBeRemoved || !specifiedAction) {
      return;
    }

    const actionsInBucket = bucket.intent.actions[specifiedAction],
      toBeRemoved = [];

    if (_.isEmpty(actionsInBucket) || !actionsInBucket[modelIdToBeRemoved] ||
      !actionsInBucket[modelIdToBeRemoved].root) {
      return;
    }

    // Compute the modelIds to be removed. This is done because otherwise there has to be a particular order which will
    // have to be followed (P -> R -> F -> C)
    _.forEach(actionsInBucket, (changeset, modelId) => {
      if (modelId === modelIdToBeRemoved) { return; }
      findRootParent(actionsInBucket, modelId, modelIdToBeRemoved) && toBeRemoved.push(modelId);
    });

    // Remove all the modelIds now
    _.forEach(toBeRemoved, (id) => {
      _.unset(bucket, ['intent', 'actions', specifiedAction, id]);
    });
  },

  /**
   * Remove the changeset(s) from the bucket synchronously
   * If actions is provided, unset the (instances, action) tuple. If not provided, unset all the occurrences of the
   * instances from the bucket
   * @param {Bucket} bucket
   * @param {string|string[]} instanceIds (required)
   * @param {string|string[]} [actions]
   */
  removeChangesets = (bucket, instanceIds, actions) => {
    instanceIds = _.isString(instanceIds) && [instanceIds] || _.isArray(instanceIds) && instanceIds;
    if (!(instanceIds && instanceIds.length)) {
      return;
    }

    actions = _.isString(actions) && [actions] || _.isArray(actions) && actions;
    if (!(actions && actions.length)) {
      actions = _.union(ACTIONS, _.keys(UPDATE_ACTIONS));
    }

    _.forEach(actions, (action) => {
      if (_(UPDATE_ACTIONS).keys().includes(action)) {
        let validActionSet;

        validActionSet = _.reduce(_(bucket.intent.actions).pick(['import', 'update']).values().value(),
          (actionSet, action) => {
            if (_.isEmpty(action)) {
              return actionSet;
            }

            return _.union(actionSet, _(action).pick(instanceIds).values().value());
          }, []);

        _.forEach(validActionSet, (changeset) => {
          // Remove the update action specific key only if its value corresponds to the
          // wanted value. For example, if a collection was shared, `data.share` would be
          // set to an object. So we cannot blindly remove the share property if all `unshare`
          // actions are to be removed.
          if (isMetaActionApplicable(action, changeset)) {
            let attributes = UPDATE_ACTIONS[action].attribute;
            _.isArray(attributes) ? (attributes.forEach((attribute) => { _.unset(changeset.data, attribute); })) :
              _.unset(changeset.data, UPDATE_ACTIONS[action].attribute);
            removeEmptyUpdate(bucket, changeset);
          }
        });
      }
      else {
        _.forEach(instanceIds, (instanceId) => {
          IMPORT_ACTIONS.includes(action) &&
            addMetaUpdateOnRemoveImport(bucket, action, _.get(bucket.intent.actions, [action, instanceId]));
          ACTIONS_WITH_ROOT.includes(action) && removeNonRootChangesets(bucket, instanceId, action);
          _.unset(bucket.intent.actions, [action, instanceId]);
        });
      }
    });
  },
  /**
   *
   * @param bucket
   * @param changeset
   * @param changeset.action
   * @param changeset.data.modelId
   */
  getExistingChangeset = (bucket, changeset) => {
    let existingAction;

    existingAction = _.has(bucket.intent.actions, [changeset.action, changeset.data.modelId]) && changeset.action ||
        _.find(_.without(ACTIONS, changeset.action), (action) => {
          return _.has(bucket.intent.actions, [action, changeset.data.modelId]);
        });

    // Get the same action before other actions. Otherwise, proceed in the order above
    if (existingAction) {
      return _.get(bucket.intent.actions, [existingAction, changeset.data.modelId]);
    }
  },
  /**
   * Add the changeset to the bucket
   * @param {Bucket} bucket
   * @param {Object} changeset
   */
  bucketize = (bucket, changeset) => {
    let existingChangeset = getExistingChangeset(bucket, changeset);

    if (existingChangeset) {
      _.isFunction(actionHandler[existingChangeset.action][changeset.action]) &&
      actionHandler[existingChangeset.action][changeset.action](bucket, existingChangeset, changeset);
    }
    // else, add it to the bucket
    else if (_.isFunction(actionHandler.default[changeset.action])) {
      actionHandler.default[changeset.action](bucket, changeset);
    }
    else {
      actionHandler.default.default(bucket, changeset);
    }
  },
  /**
   * Filter out the import object to only include the IDs that exist in the importIds array.
   * Also, remove the processed entries from the bucket.
   * @todo  optimise this. Currently n^2
   * @param model
   * @param modelId
   * @param instance
   * @param bucket
   */
  filterImportsFromInstance = (model, modelId, instance, bucket) => {
    let importIds = _.keys(bucket.intent.actions.import);

    _.isArray(instance.folders_order) && (instance.folders_order = _.intersection(instance.folders_order, importIds));
    _.isArray(instance.order) && (instance.order = _.intersection(instance.order, importIds));

    _.isArray(instance.folders) && (instance.folders = _.intersectionWith(instance.folders, importIds,
      (folder, folderId) => {
        return (folder.id === folderId) ? removeChangesets(bucket, folderId, 'import') || true : false;
      }));

    _.isArray(instance.requests) && (instance.requests = _.reduce(instance.requests, (requests, request) => {
      if (_.includes(importIds, request.id)) {
        requests.push(request);
        removeChangesets(bucket, request.id, 'import');
        request.responses = _.intersectionWith(request.responses, importIds, (response, responseId) => {
          return (response.id === responseId) ? removeChangesets(bucket, responseId, 'import') || true : false;
        });
      }
      return requests;
    }, []));

    _.isArray(instance.responses) && (instance.responses = _.intersectionWith(instance.responses, importIds,
      (response, responseId) => {
        return (response.id === responseId) ? removeChangesets(bucket, responseId, 'import') || true : false;
      }));

    removeChangesets(bucket, modelId, 'import');

    return instance;
  },

  isNonEmptyString = function (ref) {
    return ref && (typeof ref === 'string');
  },

  /**
   * Explode an incoming multi entity changeset into multiple individual
   * changesets to process like normal changesets, return as such if not
   * a multi entity changeset.
   *
   * @param {Object} changeset - The incoming changeset to explode.
   * @returns {Array} changesets - The array of exploded changesets
   */
  explodeChangeset = function (changeset) {
    // early return in case of single entity changeset.
    if (changeset.data && !_.isArray(changeset.data.models)) {
      return [changeset];
    }

    // iterate over the models to create individual changesets.
    return changeset.data.models.map((model) => {
      // Populate the exploded changeset using existing properties
      // of changeset overriding data. Not cloning here since
      // preprocess takes care of it.
      return _.defaults({
        data: {
          modelId: model.modelId,
          owner: model.owner
        }
      }, changeset);
    });

  },

  /**
   * Sanitize the incoming changeset before sending for preprocessing.
   *
   * 1. Convert multi entity changeset into individual changesets by invoking `explodeChangesets`.
   *
   * @param {Object} changeset - The incoming changeset to sanitize.
   * @returns {Array} - The array of snaitized changesets.
   */
  sanitize = function (changeset) {
    // early return prior to exploding if changeset doesn't exist.
    if (!changeset) {
      return [];
    }

    return explodeChangeset(changeset);
  },

  /**
   * Collate multi entity changesets to a single changeset by populating
   * models with the modelIds of individual changesets.
   *
   * @param {Object} changeset - A multi entity changeset.
   * @param {Object} collatedChangesets - Aggregation of collated changesets for different models.
   * @returns {Object} collatedChangesets - The object that aggregates incoming multi entity changesets.
   */
  collateMultiEntityChangesets = function (changeset, collatedChangesets) {
    let collatedChangeset;

    // For the first multi entity action changeset having a particular model,
    // create an object to accumulate all changesets having the same model.
    if (!collatedChangesets[changeset.model]) {
      collatedChangeset = _.defaults(
        {
          data: {
            models: []
          }
        },
        _.clone(changeset)
      );
      collatedChangesets[changeset.model] = collatedChangeset;
    }

    // For subsequent changesets, simply push to the models of the matching
    // accumulated changeset.
    collatedChangesets[changeset.model].data.models.push({
      owner: _.get(changeset.data, 'owner'),
      modelId: _.get(changeset.data, 'modelId')
    });
  };

class Bucket {
  /**
   * @param {String} clientId - the reference ID of the sync client using this bucket
   * @param {Object} [referenceBucket] - clone the passed bucket object
   *
   * @throws {Error} - when clientId param is not a non-empty string
   */
  constructor (clientId, referenceBucket) {
    if (!isNonEmptyString(clientId)) {
      throw new Error('sync-client~bucket.constructor: invalid client id');
    }

    let refActions = _.isObject(referenceBucket && referenceBucket.intent.actions) && referenceBucket.intent.actions;

    this.clientId = clientId;
    this.id = referenceBucket && referenceBucket.id || uuid.v4();

    // create object that stores the actions object.
    this.intent = { actions: {} };

    // @todo we do not need to create blank objects for every action unless it is needed
    // we need to copy stuff from source reference object
    ACTIONS.forEach((action) => {
      // @todo -> why is this a cloneDeep again? :thinkingface:
      this.intent.actions[action] = _.has(refActions, action) ? _.cloneDeep(refActions[action]) : {};
    });
  }

  /**
   * Creates a new instance of Bucket from a reference object
   *
   * @param {String} clientId - the client ID to associate the same with
   * @param {?Object} obj - the object to be loaded from
   *
   * @returns {Bucket}
   */
  static createFromObject (clientId, obj) {
    return new Bucket(clientId, obj);
  }

  /**
   * Add an incoming changeset to the bucket and persist the updated bucket
   *
   * @param {*} changeset -
   */
  add (changeset) {
    // sanitize the incoming changeset.
    let sanitizedChangesets = sanitize(changeset);

    // preprocess each sanitized changeset individually.
    sanitizedChangesets.forEach((changeset) => {
      let preprocessResult = Bucket.preprocess(changeset);
      if (preprocessResult) {
        bucketize(this, preprocessResult);
      }
    });
  }

  /**
   * Preprocess changeset into bucketizable changesets
   * @param {Object} changeset
   * @returns {Array} changesets
   */
  static preprocess (changeset) {
    if (!changeset) {
      return;
    }

    let model = changeset.model,
      action = changeset.action,
      data = changeset.data,
      modelId = data && data.modelId,
      meta = changeset.meta,
      baseChangeset;

    // Verify that all the required things are present in the changeset
    if (!model || !data || !modelId || !action) {
      return;
    }

    baseChangeset = {
      model: model,
      action: action,
      data: _.pick(data, ['modelId', 'owner', 'parent']),
      meta: meta || {},
      timestamp: changeset.timestamp
    };

    // checks if the current action is present in the all permitted actions
    // or if modelId is undefined.
    if (!ALL_PERMITTED_ACTIONS.hasOwnProperty(action) || !modelId) {
      return; // @todo log this to sentry through reporting service once it is ready
    }

    // If import or create, break down the children and create multiple changesets
    if (_.includes(IMPORT_ACTIONS, action)) {
      return _.assign(baseChangeset, {
        action: 'import'
      });
    }
    // If changeset is a transfer, pick only the from and to from the changeset
    else if (action === 'transfer') {
      return _.merge(baseChangeset, {
        data: _.pick(data, ['to', 'from'])
      });
    }
    /**
     * If action is update, only bucket the keys that are changing
     * If it's a meta action, treat it like an update, setting the corresponding attribute for each
     */
    else if (_.has(UPDATE_ACTIONS, action)) {
      let attributes = UPDATE_ACTIONS[action].attribute,
        valueFunction,
        value = UPDATE_ACTIONS[action].value,
        actionMeta = {};

      // Iterate over the attribute array and add each's value to actionMeta
      if (_.isArray(attributes)) {
        if (_.isFunction(value)) {
          valueFunction = UPDATE_ACTIONS[action].value(changeset);
          attributes.forEach((attribute) => {
            const val = valueFunction[attribute];
            if (!_.isEmpty(val)) {
              actionMeta = _.set(actionMeta, attribute, val);
            }
          });
        }
        // future proofing - might have array attributes that do not return functions.
        else {
          actionMeta = _.set({}, attributes, UPDATE_ACTIONS[action].value);
        }
      }
      // handles cases with string attribute returning function as value eg. share
      else if (_.isFunction(value)) {
        actionMeta = _.set({}, attributes, UPDATE_ACTIONS[action].value(changeset));
      }
      else {
        actionMeta = _.set({}, attributes, UPDATE_ACTIONS[action].value);
      }
      return _.merge(baseChangeset, {
        action: 'update',
        data: actionMeta
      });
    }
    // Otherwise just return a single value within an array
    return baseChangeset;
  }

  /**
   * Check if the bucket is empty
   * @returns {boolean}
   */
  isEmpty () {
    return _.every(ACTIONS, (action) => {
      return _.isEmpty(this.intent.actions[action]);
    });
  }

  /**
   * Remove the changeset from the bucket and persist the updated bucket
   *
   * @param {Object} changeset -
   */
  remove (changeset) {
    let modelIds = [];

    // Extract the modelIds to remove.
    if (_.has(changeset.data, 'models')) {
      changeset.data.models.forEach((model) => {
        modelIds.push(model.modelId);
      });
    }
    else {
      modelIds.push(changeset.data.modelId);
    }

    // Remove the changesets based on the extracted modelIds.
    modelIds.forEach((modelId) => {
      return removeChangesets(this, modelId, changeset.action);
    });
  }

  /**
   * Remove the modelId for all actions from the bucket
   *
   * @param {String} modelId -
   */
  removeModel (modelId) {
    removeChangesets(this, modelId);
  }

  /**
   * Process the bucket in the following order:
   * 1. Import:
   *    a. In parallel, get all the imports with root:true, using dbService
   *    b. Process each import to filter only the nodes which have a corresponding import entry in bucket
   *    c. Create import changesets for each.
   * 2. Transfer:
   *    a. Create a transfer changeset for each transfer
   *    b. Bucketize the from and to into an update for each transfer
   * 3. Destroy:
   *    a. Create a destroy changeset for each destroy with root:true
   *    b. Collate changesets having models that support multi entity collation.
   * 4. Update:
   *    a. In parallel, get all instances populated only with the specified keys, using dbService
   *    b. Create update changeset for each instance
   *
   * It does not mutate the original bucket.
   *
   * @param {Bucket} self -
   * @param {Object} db -
   * @param {Function} callback - send an array of changesets namespaced by the action
   */
  static getChangesets (self, db, callback) {
    /**
     * Create a temporary bucket to process the changesets. This bucket will be mutated as part of the algorithm.
     * @type {Bucket}
     */
    let bucket = new Bucket(self.clientId, self);

    async.series([
      // 1. Imports
      (cb) => {
        async.mapLimit(_.filter(_.values(bucket.intent.actions.import), { root: true }), 10, (changeset, cb) => {
          let changesets = [];

          db.getInstance(changeset.model, changeset.data.modelId, { populateAll: true }, (err, instance) => {
            if (err) { return cb(err); }

            if (_.isUndefined(instance)) {
              // @todo: log this to sentry through reporting service once it is ready.
              removeChangesets(bucket, changeset.data.modelId, 'import');
            }
            else {
              changesets.push(modifyChangeset(changeset, {
                action: 'import',
                data: _.assign({
                  modelId: changeset.data.modelId,
                  owner: changeset.data.owner,
                  instance: filterImportsFromInstance(changeset.model, changeset.data.modelId, instance, bucket)
                }, changeset.data.parent && { parent: changeset.data.parent })
              }));
            }

            return cb(null, changesets);
          });
        }, cb);
      },
      // 2. Transfers
      (cb) => {
        let changesets = _.values(bucket.intent.actions.transfer);

        // Bucketize the final from and to of the transfer changeset
        _.forEach(changesets, (changeset) => {
          let from = _.get(changeset, 'data.from'),
            to = _.get(changeset, 'data.to'),
            keys = [changeset.model === 'request' && 'order' || 'folders_order'],
            meta = changeset.meta || {};

          if (_.isObject(from)) {
            bucketize(bucket, {
              model: from.model,
              action: 'update',
              timestamp: changeset.timestamp,
              data: {
                modelId: from.modelId,
                owner: changeset.data.owner,
                keys: keys
              },
              meta: meta
            });
          }

          if (_.isObject(to)) {
            bucketize(bucket, {
              model: to.model,
              action: 'update',
              timestamp: changeset.timestamp,
              data: {
                modelId: to.modelId,
                owner: changeset.data.owner,
                keys: keys
              },
              meta: meta
            });
          }

          // @todo - why do this?
          removeChangesets(bucket, changeset.data.modelId, 'transfer');
        });

        return cb(null, changesets);
      },
      // 3. Destroys
      (cb) => {
        // @todo - to confirm
        let changesets = _.filter(_.values(bucket.intent.actions.destroy), { root: true }),
          collatedChangesets = {};

        // For incoming destroy changesets, remove the changesets from the bucket
        // and check if the extracted changesets have a model that supports multi
        // entity actions.
        changesets.forEach(function (changeset) {
          removeChangesets(bucket, changeset.data.modelId, 'destroy');

          if (MULTI_ENTITY_ACTION_MODELS[changeset.model]) {
            collateMultiEntityChangesets(changeset, collatedChangesets);
          }
        });

        // Return the reduced `collatedChangesets` if it was populated, otherwise return extracted changesets.
        return cb(undefined, _.isEmpty(collatedChangesets) ? changesets : Object.keys(collatedChangesets)
          .reduce((acc, current) => { return acc.concat(collatedChangesets[current]); }, []));
      },
      /*
       * 4. Updates
       * Update can include both (or either of) update and meta actions -> (un)share, (un)subscribe, (un)favorite.
       *
       * @param cb
       * @todo - meta actions need to be handled here
       */
      (cb) => {
        async.mapLimit(_.values(bucket.intent.actions.update), 10, (changeset, cb) => {
          let changesets = [];

          // @todo -> the changeset should be generated with a factory
          // Add changeset for data.subscribe
          if (_.has(changeset, 'data.subscribe')) {
            let subscribeValue = _.get(changeset, 'data.subscribe');

            changesets.push(modifyChangeset(changeset, {
              action: subscribeValue ? 'subscribe' : 'unsubscribe',
              data: _.pick(changeset.data, ['modelId', 'owner'])
            }));

            removeChangesets(bucket, changeset.data.modelId, subscribeValue ? 'subscribe' : 'unsubscribe');
          }

          // @todo -> the changeset should be generated with a factory
          // Add changeset for data.share
          if (_.has(changeset, 'data.share')) {
            // Share action
            if (_.get(changeset, 'data.share')) {
              changesets.push(modifyChangeset(changeset, {
                action: 'share',
                data: {
                  modelId: changeset.data.modelId,
                  owner: changeset.data.owner,
                  permissions: _.get(changeset, 'data.share')
                }
              }));

              removeChangesets(bucket, changeset.data.modelId, 'share');
            }
            // Unshare action
            else {
              changesets.push(modifyChangeset(changeset, {
                action: 'unshare',
                data: _.pick(changeset.data, ['modelId', 'owner'])
              }));
              removeChangesets(bucket, changeset.data.modelId, 'unshare');
            }
          }

          // @todo -> the changeset should be generated with a factory
          // Add changeset for data.favorite
          if (_.has(changeset, 'data.favorite')) {
            let favoriteValue = _.get(changeset, 'data.favorite');

            changesets.push(modifyChangeset(changeset, {
              action: favoriteValue ? 'favorite' : 'unfavorite',
              data: _.pick(changeset.data, ['modelId', 'owner'])
            }));

            removeChangesets(bucket, changeset.data.modelId, favoriteValue ? 'favorite' : 'unfavorite');
          }

          // Add changeset for update
          // Handles case with only data.keys individually.
          if (_.has(changeset, 'data.keys') && !_.has(changeset, 'data.diff')) {
            db.getInstance(changeset.model, changeset.data.modelId, { select: _.get(changeset, 'data.keys') },
              (err, instance) => {
                if (err) { return cb(err); }

                changesets.push(_.assign({}, changeset, {
                  data: _.assign(_.pick(changeset.data, ['modelId', 'owner']), { instance: instance })
                }));

                removeChangesets(bucket, changeset.data.modelId, 'update'); // @todo - why do this?
                return cb(null, changesets);
              });
          }
          // Case with either both or only data.diff.
          else if (_.has(changeset, 'data.diff')) {
            db.getInstance(changeset.model, changeset.data.modelId, { populateAll: true },
              (err, instance) => {
                if (err) { return cb(err); }

                let keys = _.get(changeset, 'data.keys'),
                  diffs = _.get(changeset, 'data.diff'),
                  paths = [],
                  keySet = [],
                  picked = {},
                  entities = [],
                  dependencies = [],
                  entity,
                  diffKeys = {},
                  firstDiff = {},
                  secondDiff = {};

                diffs && diffs.forEach((diff) => {
                  if (!diff) { return; }
                  let path0 = diff.$path[0],
                    path1 = diff.$path[1];
                  if (!_.has(instance, path0)) {
                    instance[path0] = {};
                  }
                  if (!_.has(diffKeys, path0)) {
                    diffKeys[path0] = [];
                  }
                  /* populates a diffKeys object with paths as keys and entities as values in corresponding array.
                  eg. diffKeys = {
                    dependencies: ['collection', 'environemnt']
                  }
                  */
                  !_.includes(diffKeys[path0], path1) && diffKeys[path0].push(path1);
                  // list of all path values eg. ['dependencies', 'members']
                  paths.push(path0);
                  // list of all entity values eg ['collection', 'environmnt']
                  entities.push(path1);
                });

                keySet = (keys || diffs) && _.union(keys, paths);
                paths = _.uniq(paths);
                entities = _.uniq(entities);
                picked = keySet && _.pick(instance, keySet);

                // In case dependencies/members is an empty object in the returned app instance and
                // corresponding diffs are present in the changeset, add an empty object corresponding
                // to each entity, helps avpid extra checks while populating picked object keys with diffs.
                entities.forEach((entity) => {
                  _.forOwn(diffKeys, (value, key) => {
                    value.forEach((val) => {
                      if (!_.has(picked[key], val) && _.isEqual(val, entity)) {
                        picked[key][val] = {};
                      }
                    });
                  });
                });

                _.forOwn(picked, function (value, attribute) {
                  if (_.includes(paths, attribute) && !_.isEmpty(value)) {
                    // For each member of value object(group of entities say {collection: [], environment:[]})
                    // if the entity is not present in list of entities(ones present in diff path), delete the key.
                    // (say environment not present in entities, then picked[dependences][environment] is deleted.)
                    if (_.isEmpty(_.intersection(keys, paths))) {
                      _.forOwn(value, function (entityValues, entity) {
                        if (!_.includes(entities, entity)) {
                          delete picked[attribute][entity];
                        }
                      });
                    }
                    // Populate an array with list of all keys in dependencies say ['collection', 'environment']
                    _.forOwn(value, function (entityValues, entity) {
                      dependencies.push(entity);
                    });
                  }
                  diffs.forEach((diff) => {
                    entity = diff.$path[1];
                    if (_.includes(dependencies, entity)) {
                      // First key of a type, subsequent ones lead to collation.
                      if (!_.has(picked[attribute][entity], '$diff') && _.isObject(picked[attribute])) {
                        picked[attribute][entity] = {
                          $diff: true,
                          $add: _.get(diff, '$add', []),
                          $remove: _.get(diff, '$remove', [])
                        };
                        // Populdate a firstDiff object with different types of entities, for subsequent changeset
                        // check the type of entity in that changeset and collate accordingly, prevents collation
                        // of changesets involving different entities.
                        if (!_.has(firstDiff, entity)) {
                          firstDiff[entity] = picked[attribute][entity];
                        }
                      }
                      else {
                        // diff already exists, collate.
                        secondDiff = {
                          $diff: true,
                          $add: _.get(diff, '$add', []),
                          $remove: _.get(diff, '$remove', [])
                        };
                        picked[attribute][entity] = collate(firstDiff[entity], secondDiff);
                        firstDiff[entity] = picked[attribute][entity];
                      }
                    }
                  });
                  // @todo - hacky, find a more generic method to do this.
                  // deletes extra keys from non compatible types added
                  // due to the generic collation logic.
                  if (_.includes(paths, attribute)) {
                    // eslint-disable-next-line
                    _.keys(value).forEach((key) => {
                      if (!_.includes(diffKeys[attribute], key) && _.has(value[key], '$diff')) {
                        delete picked[attribute][key];
                      }
                    });
                  }
                });

                // populate data.instance with the computed picked object.
                changesets.push(_.assign({}, changeset, {
                  data: _.assign(_.pick(changeset.data, ['modelId', 'owner']), { instance: picked })
                }));

                removeChangesets(bucket, changeset.data.modelId, 'update'); // @todo - why do this?
                return cb(null, changesets);
              });
          }
          else {
            removeChangesets(bucket, changeset.data.modelId, 'update'); // @todo - why do this?
            return cb(null, changesets);
          }
        }, cb);
      }
    ], (err, changesetsArr) => {
      if (err) { return callback(err); }

      let changesets = _.flattenDepth(_.compact(changesetsArr), 2);
      _.map(changesets, (changeset) => {
        return _.assign(changeset, { bucketId: self.id });
      });

      return callback(null, changesets);
    });
  }

  /**
   * Collate multiple buckets into a single new bucket instance
   *
   * @param {Array} buckets -
   * @param {String} clientId -
   *
   * @return {Bucket} bucket - collated single bucket instance
   */
  static collateBuckets (buckets, clientId) {
    let collatedBucket = new Bucket(clientId);

    return _.reduce(_.compact(buckets), (collatedBucket, bucket) => {
      // Reduce to an array of changesets from the bucket.
      let changesets = _.reduce(_.values(bucket.intent.actions), (changesets, changesetsObj) => {
        return _.union(changesets, _.values(changesetsObj));
      }, []);

      _.forEach(changesets, (changeset) => {
        bucketize(collatedBucket, changeset);
      });

      return collatedBucket;
    }, collatedBucket);
  }
}

module.exports = Bucket;


/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var debug = __webpack_require__(2882)('socket.io-parser');
var Emitter = __webpack_require__(291);
var binary = __webpack_require__(2885);
var isArray = __webpack_require__(1205);
var isBuf = __webpack_require__(1206);

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    var payload = tryStringify(obj.data);
    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch(e){
    return false;
  }
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  }

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));
    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch(e){
    return false;
  }
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}


/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// browser shim for xmlhttprequest module

var hasCORS = __webpack_require__(2888);

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var parser = __webpack_require__(292);
var Emitter = __webpack_require__(291);

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};


/***/ })

},[2844]);