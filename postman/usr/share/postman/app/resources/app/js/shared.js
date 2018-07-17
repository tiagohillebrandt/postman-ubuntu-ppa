webpackJsonp([7],{

/***/ 116:
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ 1428:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1429);


/***/ }),

/***/ 1429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init__ = __webpack_require__(1430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_TelemetryHelpers__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_telemetry_GoogleAnalytics__ = __webpack_require__(1467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_telemetry_GoogleAnalytics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_telemetry_GoogleAnalytics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_AnalyticsService__ = __webpack_require__(22);




if (true) {
  window.onbeforeunload = () => {
    return false;
  };
}

__WEBPACK_IMPORTED_MODULE_0__init__["a" /* default */].init(() => {
  new __WEBPACK_IMPORTED_MODULE_2__models_telemetry_GoogleAnalytics___default.a(); // eslint-disable-line no-new
  let loadTime = Object(__WEBPACK_IMPORTED_MODULE_1__utils_TelemetryHelpers__["a" /* getWindowLoadTime */])();
  __WEBPACK_IMPORTED_MODULE_3__modules_services_AnalyticsService__["a" /* default */].addEvent('app_performance_metric', 'shared_window_loaded', null, null, { load_time: loadTime });
});

/***/ }),

/***/ 1430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_migrator_Migrate__ = __webpack_require__(1431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot_bootConfig__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot_bootConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__boot_bootConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boot_bootMessaging__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boot_bootWLModels__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boot_bootAppModels__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__boot_bootSettings__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boot_bootTelemetry__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boot_bootShared__ = __webpack_require__(1453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boot_booted__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__boot_bootConfigurations__ = __webpack_require__(157);












const windowConfig = {
  process: 'shared',
  ui: false };


window.pm = {};

pm.init = done => {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_2__boot_bootConfig___default.a.init(windowConfig),
  __WEBPACK_IMPORTED_MODULE_3__boot_bootMessaging__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__boot_bootTelemetry__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_10__boot_bootConfigurations__["a" /* initializeConfigurations */],
  __WEBPACK_IMPORTED_MODULE_6__boot_bootSettings__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__boot_bootWLModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__modules_migrator_Migrate__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__boot_bootAppModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_8__boot_bootShared__["a" /* default */]],
  err => {
    Object(__WEBPACK_IMPORTED_MODULE_9__boot_booted__["a" /* default */])(err);
    if (err) {
      console.error('Error in the app boot sequence', err);
    }
    done && done();
  });
};

/* harmony default export */ __webpack_exports__["a"] = (pm);

/***/ }),

/***/ 1431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Migrate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_circular_json__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async_waterfall__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async_waterfall___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_async_waterfall__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async_eachSeries__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__User__ = __webpack_require__(1434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LocalChanges__ = __webpack_require__(1435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Collections__ = __webpack_require__(1436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SyncedSince__ = __webpack_require__(1441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Headerpreset__ = __webpack_require__(1442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Collectionrun__ = __webpack_require__(1443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__History__ = __webpack_require__(1444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Globals__ = __webpack_require__(1445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Workspace__ = __webpack_require__(1446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Environments__ = __webpack_require__(1447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__WorkspaceSession__ = __webpack_require__(1448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Helpers__ = __webpack_require__(1449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__OAuth2AccessTokens__ = __webpack_require__(1450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__oldDb__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__postman_sync_client__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__postman_sync_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__postman_sync_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_DatabaseService__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_services_AnalyticsService__ = __webpack_require__(22);
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

  migrationContext.sc = sc;
  cb && cb(null, migrationContext);
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

      console.warn('Migration bailed out due to:', err);
      return cb && cb(null, result);
    }

    try {
      // Send event to bulk analytics about the time taken to migrate
      // Here user id will be 0 as user context for bulk analytics will be set after boot.
      __WEBPACK_IMPORTED_MODULE_20__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'migration', 'duration', Date.now() - migrationStartTime, { attempt: result.attempt });
    }
    catch (e) {
      // auto reports to sentry.
      console.error(e);
    }


    if (err) {
      localStorage.setItem('migrationFinished', false);

      // Report it if migrator module crashed
      pm.crashReporter.report(err);
    } else
    {
      localStorage.setItem('migrationFinished', true);
    }

    cb && cb(err, result);
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachLimit;

var _eachOfLimit = __webpack_require__(329);

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _withoutIndex = __webpack_require__(1433);

var _withoutIndex2 = _interopRequireDefault(_withoutIndex);

var _wrapAsync = __webpack_require__(94);

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

/***/ 1433:
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

/***/ 1434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = User;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_user__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MigratorUtil__ = __webpack_require__(77);






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

/***/ 1435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = LocalChanges;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oldDb__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MigratorUtil__ = __webpack_require__(77);




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

/***/ 1436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Collections;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_waterfall__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_waterfall___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_waterfall__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async_eachSeries__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async_series__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async_mapSeries__ = __webpack_require__(1437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async_mapSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_async_mapSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_CollectionTreeOps__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_CollectionController__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MigratorUtil__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_util__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__oldDb__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_folder__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_folder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__models_folder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_request__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__models_request__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_response__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_response___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__models_response__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_collection__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__models_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_CollectionModelService__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_event_to_changesets__ = __webpack_require__(649);


















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

/***/ 1437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapLimit = __webpack_require__(1438);

var _mapLimit2 = _interopRequireDefault(_mapLimit);

var _doLimit = __webpack_require__(196);

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

/***/ 1438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _doParallelLimit = __webpack_require__(1439);

var _doParallelLimit2 = _interopRequireDefault(_doParallelLimit);

var _map = __webpack_require__(1440);

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

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doParallelLimit;

var _eachOfLimit = __webpack_require__(329);

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _wrapAsync = __webpack_require__(94);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doParallelLimit(fn) {
    return function (obj, limit, iteratee, callback) {
        return fn((0, _eachOfLimit2.default)(limit), obj, (0, _wrapAsync2.default)(iteratee), callback);
    };
}
module.exports = exports['default'];

/***/ }),

/***/ 1440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _asyncMap;

var _noop = __webpack_require__(135);

var _noop2 = _interopRequireDefault(_noop);

var _wrapAsync = __webpack_require__(94);

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

/***/ 1441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = SyncedSince;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oldDb__ = __webpack_require__(63);



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

/***/ 1442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Headerpreset;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_header_preset__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_header_preset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_header_preset__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MigratorUtil__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__oldDb__ = __webpack_require__(63);







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

/***/ 1443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Collectionrun;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oldDb__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_collection_run__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_collection_run___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_collection_run__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MigratorUtil__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__ = __webpack_require__(51);








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
        return Object(__WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__["b" /* defaultUserWorkspaceId */])().
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

/***/ 1444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = History;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oldDb__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_history__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MigratorUtil__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__ = __webpack_require__(51);








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
    validationErrors = [];

    // If already migration tried and failed through validation, we can retry that alone.
    // Or else, deleting an entity will come back again on re-migration
    if (!_.isEmpty(errorRecords)) {
      histories = _.intersectionBy(histories, errorRecords, 'id');
    }

    __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default()(
    histories,
    (history, next) => {
      __WEBPACK_IMPORTED_MODULE_1__services_ModelService__["a" /* default */].
      findOne('history', { id: history.id }).
      then(dbHistory => {
        if (dbHistory) {
          return Promise.resolve();
        }
        return Object(__WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__["b" /* defaultUserWorkspaceId */])().
        then(defaultWorkspaceId => {
          let date = new Date(history.timestamp),
          createdAt = date.toString() == 'Invalid Date' ? new Date(1).toISOString() : date.toISOString();

          _.assign(history, { workspace: defaultWorkspaceId, createdAt });

          history = Object(__WEBPACK_IMPORTED_MODULE_4__MigratorUtil__["a" /* fillInNonNullAttributes */])(history, __WEBPACK_IMPORTED_MODULE_3__models_history___default.a);

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

/***/ 1445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Globals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_default_workspace__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_uuid_helper__ = __webpack_require__(193);





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
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_default_workspace__["b" /* defaultUserWorkspaceId */])().
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

/***/ 1446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Workspace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_default_workspace__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_WorkspaceController__ = __webpack_require__(35);




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

  Object(__WEBPACK_IMPORTED_MODULE_1__utils_default_workspace__["b" /* defaultUserWorkspaceId */])().
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

/***/ 1447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Environments;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_environment__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_environment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_environment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MigratorUtil__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__oldDb__ = __webpack_require__(63);







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

/***/ 1448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = WorkspaceSession;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_WorkspaceSessionController__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__oldDb__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_default_workspace__ = __webpack_require__(51);






/**
                                                                         * @param {Object} migrationContext
                                                                         * @param {Function} cb
                                                                        */
function WorkspaceSession(migrationContext, cb) {
  if (_.get(migrationContext, 'workspacesession.migrated')) {
    // Bail out if already migrated;
    return cb && cb(null, migrationContext);
  }

  __WEBPACK_IMPORTED_MODULE_3__oldDb__["a" /* default */].getBuilderState(migrationContext.db, (err, builderState) => {
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

    let windowId = __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default()(),
    sessionId = __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default()();

    // First create a window
    __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default.a.
    create({
      id: windowId,
      browserWindowId: 0,
      type: 'requester',
      activeSession: sessionId }).

    then(() => Object(__WEBPACK_IMPORTED_MODULE_4__utils_default_workspace__["b" /* defaultUserWorkspaceId */])()).
    then(defaultWorkspaceId => {
      return __WEBPACK_IMPORTED_MODULE_1__controllers_WorkspaceSessionController__["a" /* default */].create({
        id: sessionId,
        workspace: defaultWorkspaceId,
        window: windowId,
        state: builderState.value });

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
            error: null } }));



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

/***/ 1449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = Helpers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_auth_helper_state__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_auth_helper_state___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_auth_helper_state__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MigratorUtil__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__oldDb__ = __webpack_require__(63);







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

/***/ 1450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = OAuth2AccessTokens;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_eachSeries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_eachSeries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_auth_access_token__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_auth_access_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_auth_access_token__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MigratorUtil__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__oldDb__ = __webpack_require__(63);







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

/***/ 1451:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ 1452:
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0),
  async = __webpack_require__(28),
  Bucket = __webpack_require__(651),
  REQUIRED_SERVICES = ['dbService'],

  ACTIVE_BUCKET_ID_PREFIX = '.active';

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
  }

  /**
   * Returns the active bucket and pending buckets to the callback
   *
   * @private
   * @param {Function} callback - receives (err:Error, activeBucket:Bucket, pendingBuckets:Array.<Bucket>)
   */
  withBuckets (callback) {
    async.parallel({
      bucket: (done) => {
        // if there is an existing bucket, proceed with that
        if (this._bucket) {
          return done(null, this._bucket);
        }

        // at this point, we do not have a bucket in memory. as such, we load the same from the persistent media.
        Bucket.createFromDbById(ACTIVE_BUCKET_ID_PREFIX, this.clientId, this.services.dbService, done);
      },

      pending: (done) => {
        if (_.isArray(this._pendingBuckets)) {
          return done(null, this._pendingBuckets);
        }

        Bucket.createAllFromDb(this.clientId, this.services.dbService, done);
      }
    }, (err, result) => { // TODO --
      if (err) { return callback(err); }

      // cache the result back into the instance
      this._bucket = result.bucket;
      this._pendingBuckets = result.pending;

      callback(null, this._bucket, this._pendingBuckets);
    });
  }

  /**
   * Adds active bucket to pending list and detaches the active bucket to be subsequently processed in callback
   *
   * @private
   * @param {Function} callback - receives (err:Error, lastActiveBucket:Bucket)
   */
  dispatchBuckets (callback) {
    this.withBuckets((err, active, pending) => {
      if (err) { return callback(err); }

      // in case active bucket is empty, we short-circuit the same
      if (active.isEmpty()) {
        return callback();
      }

      this._bucket = null;
      pending.push(active);

      async.parallel([
        (next) => {
          Bucket.saveToDb(active, this.services.dbService, next);
        },
        (next) => {
          Bucket.destroyInDbById(ACTIVE_BUCKET_ID_PREFIX, active, this.services.dbService, next);
        }
      ], (err) => {
        callback(err, active);
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
    // if changeset is empty, we have nothing to do
    if (!(_.isArray(changesets) && changesets.length)) {
      return callback(new Error('sync-client.addChangesets: no changeset to add'));
    }

    this.withBuckets((err, bucket) => {
      if (err) { return callback(err); }

      _.forEach(changesets, (changeset) => {
        bucket.add(changeset); // @todo what happens if addition fails
      });

      // finally, write this bucket
      Bucket.saveToDbById(ACTIVE_BUCKET_ID_PREFIX, bucket, this.services.dbService, callback);
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

    this.withBuckets((err, __bucket, pending) => {
      __bucket = null; // prevent even accidental use of this variable!
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

      Bucket.updateOrDestroyAllInDb(affectedBuckets, this.services.dbService, callback);
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
      const pendingBucketShadow = _.clone(pending); // we will need this later while communicating with the ORM

      // Traverse through all buckets and remove the model ID from each bucket
      _.forEach(allBuckets, (bucket) => {
        modelIds.forEach((modelId) => {
          bucket.removeModel(modelId); // @todo: possibly indicated of removal changed something as function return
        });

        // If the bucket becomes empty, then remove it from memory
        if (bucket.isEmpty()) {
          // If the current bucket is the active bucket
          if (bucket.id === active.id) {
            this._bucket = null;
          }
          // Otherwise, it is a pending bucket
          else {
            // eslint-disable-next-line arrow-body-style
            _.remove(pending, (removal) => (removal.id === bucket.id));
          }
        }
      });

      async.parallel([
        (next) => {
          if (this._bucket) {
            return Bucket.saveToDbById(ACTIVE_BUCKET_ID_PREFIX, active, this.services.dbService, next);
          }

          Bucket.destroyInDbById(ACTIVE_BUCKET_ID_PREFIX, active, this.services.dbService, next);
        },
        (next) => {
          Bucket.updateOrDestroyAllInDb(pendingBucketShadow, this.services.dbService, next);
        }
      ], callback);
    });
  }

  /**
   * Get changesets from the active bucket and also mark the same as pending during this process
   *
   * @param {Function} callback -
   */
  getChangesets (callback) {
    this.dispatchBuckets((err, bucket) => {
      if (err) { return callback(err); }

      if (!bucket) {
        return callback(null, []);
      }

      // by this time, the in-memory representation of active and pending buckets has already been swapped, hence
      // we can do overlapping getChangesets even if fetching the changeset takes time
      Bucket.getChangesets(bucket, this.services.dbService, callback);
    });
  }

  /**
   * This function collates all changes (including ones from pending bucket) into one single bucket and
   * processes the same. This is useful when processing failed buckets loaded from database
   *
   * @param {Function} callback - receives (err:Error, changesets:Array)
   */
  getAllChangesets (callback) {
    this.withBuckets((err, active, pending) => {
      if (err) { return callback(err); }

      // if main bucket is empty, we have an opportunity for early bail out
      if (active.isEmpty()) {
        if (_.isEmpty(pending)) {
          return callback(null, []);
        }
        // the case where a previous collation has already built a single bucket, we do not need to collate
        // further
        else if ((pending.length === 1) && pending[0]) {
          return Bucket.getChangesets(pending[0], this.services.dbService, callback);
        }
      }

      // generate a collated bucket by coalescing all buckets
      let collated = Bucket.collateBuckets(pending.concat(active), this.clientId);

      // now delete all buckets from memory and DB + keep only the current as a single pending
      async.series([
        // we are clearing all existing pending items
        // @note we are deleting everything before saving the new collated bucket. what if system crashes here?
        // ¯\_(ツ)_/¯
        (next) => {
          this._pendingBuckets.length = 0; // clears the array
          Bucket.destroyAllInDb(this.clientId, this.services.dbService, next);
        },
        // next we are writing the new collated bucket (only if it is not empty)
        (next) => {
          // if the work of all collations result in an empty bucket, we do not need to save it back
          if (collated.isEmpty()) {
            return next();
          }

          this._pendingBuckets.push(collated); // the only bucket we need
          Bucket.saveToDb(collated, this.services.dbService, next);
        },
        // the active bucket is reset
        (next) => {
          this._bucket = null;
          Bucket.destroyInDbById(ACTIVE_BUCKET_ID_PREFIX, active, this.services.dbService, next);
        }
      ], (err) => {
        if (err) { return callback(err); }

        if (collated.isEmpty()) { // if collated bucket is empty, it is not saved anyway and as such we bail
          return callback(null, []);
        }

        // finally we send changesets to the main callback
        Bucket.getChangesets(collated, this.services.dbService, callback);
      });
    });
  }
}

module.exports = SyncClient;


/***/ }),

/***/ 1453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootSync__ = __webpack_require__(1454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_telemetry_analyticsHandler__ = __webpack_require__(1461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_SyncFetcherService__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_UserFetcherService__ = __webpack_require__(1463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_ConnectivityService__ = __webpack_require__(1464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_OnBoardingService__ = __webpack_require__(1465);








let alerts = __webpack_require__(1466);

/**
                                                           *
                                                           * @param {*} cb
                                                           */
function bootShared(cb) {
  _.assign(window.pm, {
    connectivity: new __WEBPACK_IMPORTED_MODULE_5__modules_services_ConnectivityService__["a" /* default */](),
    alerts });

  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_1__bootSync__["a" /* default */]],
  err => {
    Object(__WEBPACK_IMPORTED_MODULE_2__models_telemetry_analyticsHandler__["a" /* default */])();
    let syncRemoteFetcherBus = pm.eventBus.channel('sync-remote-fetch'),
    modelEventBus = pm.eventBus.channel('model-events');

    syncRemoteFetcherBus.subscribe(__WEBPACK_IMPORTED_MODULE_3__modules_services_SyncFetcherService__["f" /* scheduleFetch */]);
    modelEventBus.subscribe(__WEBPACK_IMPORTED_MODULE_4__modules_services_UserFetcherService__["b" /* userFetch */]);

    __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__["a" /* default */].init();
    __WEBPACK_IMPORTED_MODULE_7__services_OnBoardingService__["a" /* default */].init();

    // Starts the user fetch and unlocks the session.
    Object(__WEBPACK_IMPORTED_MODULE_4__modules_services_UserFetcherService__["a" /* initiateBoot */])();
    return cb && cb(err);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (bootShared);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_sync_LocalChanges__ = __webpack_require__(1455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_sync_SyncManagerNew__ = __webpack_require__(1458);



/**
                                                                *
                                                                */
function bootSync(cb) {
  _.assign(window.pm, {
    localChanges: new __WEBPACK_IMPORTED_MODULE_0__models_sync_LocalChanges__["a" /* default */](),
    syncManager: new __WEBPACK_IMPORTED_MODULE_1__models_sync_SyncManagerNew__["a" /* default */]() });

  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootSync);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConflictResolution__ = __webpack_require__(1456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SyncManagerHelper__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_async__);






/**
                            * Handles the queue
                            * @private
                            * @module sync/LocalChanges
                            * @see module:sync/SyncManager
                            */
var LocalChanges = Backbone.Model.extend({
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


    __WEBPACK_IMPORTED_MODULE_2_async___default.a.series([
    // fetch local changes
    function (callback) {
      // do not fetch if the flow is session/sync
      if (opts.source !== 'session-sync') {
        console.log('bailing fetch from sync client');
        return callback();
      }

      // pm.syncManager.syncClient.getAllChangesets((err, changesets) => {
      pm.syncManager.addSyncClientCommand('getAllChangesets', (err, changesets) => {
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
      Object(__WEBPACK_IMPORTED_MODULE_1__SyncManagerHelper__["i" /* removeModelTreesFromClientChanges */])(crState, () => {
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

/***/ 1456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export findIdenticalChangeset */
/* unused harmony export addConflictRows */
/* unused harmony export getConflictRows */
/* harmony export (immutable) */ __webpack_exports__["a"] = applyUserResolution;
/* harmony export (immutable) */ __webpack_exports__["b"] = deleteCRChangesetToServer;
/* harmony export (immutable) */ __webpack_exports__["c"] = detectConflicts;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_workspace_helper__ = __webpack_require__(1457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SyncManagerHelper__ = __webpack_require__(220);





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

/***/ 1457:
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

/***/ 1458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_SyncIssueHelper__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_SyncService__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_sync_client__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_sync_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__postman_sync_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_DatabaseService__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_async__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_postman_collection__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_Infobar__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_InfobarConstants__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SyncIncomingHandler__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SyncOutgoingHandler__ = __webpack_require__(1459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SyncOutgoingHelpers__ = __webpack_require__(1460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_services_ModelService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_pipelines_app_action__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_services_AnalyticsService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_sync_helpers_create_changeset__ = __webpack_require__(75);





















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

const BANNER_MESSAGE = 'bannerMessage';

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
  return __WEBPACK_IMPORTED_MODULE_12__modules_services_ModelService__["a" /* default */].
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
  return __WEBPACK_IMPORTED_MODULE_12__modules_services_ModelService__["a" /* default */].
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
  return __WEBPACK_IMPORTED_MODULE_12__modules_services_ModelService__["a" /* default */].
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
  return __WEBPACK_IMPORTED_MODULE_12__modules_services_ModelService__["a" /* default */].
  findOne(SYNC_CLIENT_MODEL_NAME, { id: SYNC_CLIENT_ID }).
  then(client => {
    if (client) {
      return __WEBPACK_IMPORTED_MODULE_12__modules_services_ModelService__["a" /* default */].
      update(SYNC_CLIENT_MODEL_NAME, getDefaultClientInDb()).
      then(console.log.bind(console, 'Client reset in DB'));
    }

    return __WEBPACK_IMPORTED_MODULE_12__modules_services_ModelService__["a" /* default */].
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
  return __WEBPACK_IMPORTED_MODULE_12__modules_services_ModelService__["a" /* default */].
  findOne(SYNC_CLIENT_MODEL_NAME, { id: SYNC_CLIENT_ID }).
  then(client => {
    if (client) {
      return;
    }

    return __WEBPACK_IMPORTED_MODULE_12__modules_services_ModelService__["a" /* default */].
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
  syncChangesetChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["a" /* createEvent */])('sent-to-server', 'sync-changeset', {
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
  syncIncomingChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["a" /* createEvent */])('received', 'sync-realtime', { changeset: changeset }));
}

/**
   * Handles the socket, and is the interface for sending and receiving changesets
   *
   * @class SyncManager
   */
var SyncManagerNew = Backbone.Model.extend({
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
      this.syncInternalChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["a" /* createEvent */])('updated', 'timeTillReconnect', { timeTillReconnect: value }));
    });

    this.on('change:currentSyncStatus', (model, value) => {
      this.syncInternalChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["a" /* createEvent */])('updated', 'currentSyncStatus', { currentSyncStatus: value }));
    });

    // hacks
    this.on('syncFinished', () => {
      this.set('currentSyncStatus', 'syncFinished');

      // resetting the reconnection logic on the success sync.
      this.hasReconnected = false;
    });
    this.on('syncStarting', () => {
      this.set('currentSyncStatus', 'syncStarting');
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
      let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["g" /* getEventNamespace */])(event),
      eventName = Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["f" /* getEventName */])(event),
      eventData = Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["d" /* getEventData */])(event);

      if (eventName === 'hydrate' && eventNamespace === 'currentSyncStatus') {
        this.syncInternalChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["a" /* createEvent */])('updated', 'currentSyncStatus', { currentSyncStatus: this.get('currentSyncStatus') }));
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

  attachModelEventsHandlers: function () {
    let modelEvents = pm.eventBus.channel('model-events');

    modelEvents.subscribe(payload => {
      if (payload.namespace === 'user') {
        if (_.includes(['refreshUserData', 'bootstrapUser', 'enableSync', 'recreateSyncUser'], payload.name)) {
          console.warn(`Sync manager listening to ${payload.name} event`, payload);

          __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__["a" /* default */].
          get().
          then(userData => {
            this.setSync(_.get(userData, 'syncEnabled', false));
          }).
          catch(e => {
            console.log('Error in fetching userdata', e);
          });
        } else
        if (_.includes(['logout', 'disableSync'], payload.name)) {
          console.warn(`Sync manager listening to ${payload.name} event`, payload);
          this.signOut();
        }
      } else
      if (payload.namespace === 'team') {
        let actions = ['activated', 'deactivated'];
        Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["i" /* processEvent */])(payload, actions, (event, cb) => {
          let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["g" /* getEventNamespace */])(event),
          eventName = Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["f" /* getEventName */])(event);

          if (eventNamespace !== 'team') {
            return cb();
          }

          console.log(`Sync manager listening to ${payload.name} event`, payload);

          return __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__["a" /* default */].
          get().
          then(userData => {
            this.setSync(_.get(userData, 'syncEnabled', false));
            cb();
          }).
          catch(e => {
            console.log('Error in fetching userdata', e);
            cb();
          });
        });
      }
    });
  },

  attachSyncClientEventHandlers: function () {
    // @todo: is there are better way to add
    pm.eventBus.channel('sync-client').subscribe(event => {
      if (Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["f" /* getEventName */])(event) === 'addChangesets') {
        console.log('pushing changesets sync client');
        return this.addChangesetsToSyncClient(Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["d" /* getEventData */])(event), { process: false });
      }
    });
  },

  // Fixed
  initialize: function () {
    this.syncInternalChannel = pm.eventBus.channel('sync-manager-internal');
    this.attachSyncStatusTriggers();
    this.attachSyncProxyEventHandlers();
    this.attachModelEventsHandlers();
    this.attachSyncClientEventHandlers();

    initializeClientInDbIfNeeded();

    this.performPendingIntegrityCheck = __WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["f" /* performPendingIntegrityCheck */];
    this.markModelForForceSync = __WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */];
    this.performPendingForceSyncs = __WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["e" /* performPendingForceSyncs */];
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
    this.initializeSyncClient();
    this.outgoingHandler = new __WEBPACK_IMPORTED_MODULE_10__SyncOutgoingHandler__["a" /* SyncOutgoingHandler */]();

    this.clientUserAgent = navigator.userAgent + ' ' + 'PostmanClient/' + pm.app.get('version') + ' (AppId=' + pm.app.get('installationId') + ')';

    this.renewCount = 0;

    this.set('loggedIn', false);
    this.createSocket();

    // SOCKET RECONNECTION WATCHDOG
    this.onlineWatchdog = _.debounce(() => {
      __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__["a" /* default */].
      get().
      then(user => {
        if (user.syncEnabled &&
        this.get('currentSyncStatus') === 'makeNotConnected' &&
        pm.syncSocket && !pm.syncSocket.isBusy()) {
          this.createSocket({ connectionMode: 'watchdog' });
        }
      }).
      catch(e => {
        console.error('Error in fetching user data', e);
      });
    }, 30 * 1000, {
      leading: true,
      trailing: false });
    // debouce for 30 seconds, and on the leading edge

    setInterval(this.onlineWatchdog, WATCHDOG_INTERVAL); // 10 minute interval to check if app should try reconnecting

    __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__["a" /* default */].
    get().
    then(userData => {
      this.setSync(userData.syncEnabled);
    }).
    catch(e => {
      console.error('Error in getting user data', e);
    });
  },

  /**
      * Initializes various queues used in sync
      */
  initializeQueues: function () {
    this.ingressQueue = __WEBPACK_IMPORTED_MODULE_5_async___default.a.queue(this._processIngressChangeset.bind(this), 1);
    this.syncClientCommandQueue = __WEBPACK_IMPORTED_MODULE_5_async___default.a.queue(this._processSyncClientCommand.bind(this), 1);
  },

  _nukeQueues: function () {
    if (this.ingressQueue) {
      this.ingressQueue.kill();
    }

    if (this.syncClientCommandQueue) {
      this.syncClientCommandQueue.kill();
    }
  },

  addChangesetToIngressQueue: function (changeset) {
    this.ingressQueue.push(changeset);
  },

  addSyncClientCommand: function (commandName, ...commandArgs) {
    this.syncClientCommandQueue.push({
      name: commandName,
      args: commandArgs });

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
      Object(__WEBPACK_IMPORTED_MODULE_9__SyncIncomingHandler__["a" /* handleSyncMessage */])(changeset, function () {
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
  initializeSyncClient: function () {
    this.syncClient = new __WEBPACK_IMPORTED_MODULE_3__postman_sync_client__["SyncClient"](SYNC_CLIENT_ID, { dbService: Object(__WEBPACK_IMPORTED_MODULE_4__services_DatabaseService__["a" /* getService */])() });
  },

  initializeSyncClientProcessor: function () {
    this.syncClientProcessor = __WEBPACK_IMPORTED_MODULE_5_async___default.a.cargo(this.syncClientWorker.bind(this));
  },

  syncClientWorker: function (tasks, done) {
    console.log('sync client process worker started', tasks);

    if (!Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["c" /* isAuthenticatedSocketAvailable */])()) {
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
    if (!this.syncClientProcessor) {
      this.initializeSyncClientProcessor();
    }

    if (!task) {
      task = { origin: 'unknown' };
    }

    this.syncClientProcessor.push(task, done);
  },

  onConflictResolutionError: function (err) {
    console.log('CR ABORTED', err);
    pm.localChanges.pendingResolution = null;

    __WEBPACK_IMPORTED_MODULE_5_async___default.a.series([
    next => {
      this.onAllClientChangesProcessed(next);
    },
    next => {
      this.processOfflineChanges({ origin: 'post-conflict-resolution-error' }, next);
    }]);

  },

  onConflictResolutionCompleted: function (crState, done) {
    console.log('CR DONE', crState);

    __WEBPACK_IMPORTED_MODULE_5_async___default.a.series([
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
      Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["h" /* performWorkspaceIntegrityCheck */])(function (err) {
        if (err) {
          console.warn('Could not complete workspace integrity check');
          return next();
        }

        next();
      });
    },
    next => {
      Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["g" /* performWorkspaceDependencyIntegrityCheck */])(function (err) {
        if (err) {
          console.warn('Could not complete workspace dependencies integrity check');
          return next();
        }

        next();
      });
    },
    next => {
      Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["f" /* performPendingIntegrityCheck */])();
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
    pm.syncSocket && pm.syncSocket.reconnect();
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

    return window.appletType === 'shared';
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

    let recreateSyncUserEvent = Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["a" /* createEvent */])('recreateSyncUser', 'user');

    // No need to wait for response as of now, if we need to show something, we can show by listening to response.
    Object(__WEBPACK_IMPORTED_MODULE_15__modules_pipelines_app_action__["a" /* default */])(recreateSyncUserEvent);
  },

  createSocket: function (opts = {}) {
    __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__["a" /* default */].
    get().
    then(user => {
      if (!user.syncEnabled) {
        console.log('create socket bailed sync disabled');
        return;
      }

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
        pm.syncSocket.reconnect();
      } else
      {
        let syncserver_url = user.syncserver_url || postman_syncserver_url;
        io.sails.transports = ['websocket'];
        io.sails.autoConnect = false;
        io.sails.url = syncserver_url;

        pm.syncSocket && this.destroySocket();

        this.set('connectionMode', connectionMode);
        pm.syncSocket = io.sails.connect(
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
        __WEBPACK_IMPORTED_MODULE_16__modules_services_AnalyticsService__["a" /* default */].addEvent('sync', 'reconnect_attempt', 'watchdog');
      }
    });
  },

  // call when and how - pass the model to some view.
  // or include this code there directly
  signIn: function (opts = {}) {
    __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__["a" /* default */].
    get().
    then(user => {
      console.log('authenticating socket for', user.id, user.syncEnabled);


      if (!user.syncEnabled || user.id === '0') {
        console.log('sign in bailed. no user.');
        return Promise.reject(new Error('Could not sign in. No user.'));
      }

      return user;
    }).
    then(user => {

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

      var userId = user.id,
      accessToken = _.get(user, 'auth.access_token');

      this.set({
        loggingIn: true,
        isSyncCallRateLimited: false });

      clearTimeout(this.timeOutRetrySyncCall);

      console.log('session create');
      __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
        model: 'session',
        action: 'create',
        data: {
          user_id: userId,
          access_token: accessToken,
          'user-agent': __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["generateUserAgent"]() } },

      resData => {
        if (resData.error && _.includes(['authenticationError', 'tokenAuthError'], resData.error.name)) {
          this.renewCount++;
          if (this.renewCount > 2) {
            pm.alerts.warning('There was a problem logging in to Sync. Please restart the app without logging out.', {
              dedupeId: 'sync-connection-error',
              persist: true });

            return;
          }

          this.handleAuthenticationError();
          return;
        }

        // Show warning message from sync for multiple connections.
        if (_.eq(BANNER_MESSAGE, _.get(resData, 'info.name'))) {
          let variables = {};

          _.forEach(_.get(resData, 'info.message.variables'), (value, key) => {
            if (typeof value === 'object') {
              variables[key] = value.value;
            } else
            {
              variables[key] = value;
            }
          });

          let message = __WEBPACK_IMPORTED_MODULE_6_postman_collection__["Property"].replaceSubstitutions(_.get(resData, 'info.message.template'), variables);
          let infoBarAction = {
            message: message,
            priority: 90,
            type: __WEBPACK_IMPORTED_MODULE_8__constants_InfobarConstants__["d" /* WARNING */] };


          if (_.get(resData, 'info.label')) {
            infoBarAction.linkClickAnalytics = {
              category: 'banner_message',
              action: 'click',
              label: _.get(resData, 'info.label') };

          }

          __WEBPACK_IMPORTED_MODULE_7__controllers_Infobar__["a" /* default */].add(infoBarAction);
          _.get(resData, 'info.label') && __WEBPACK_IMPORTED_MODULE_16__modules_services_AnalyticsService__["a" /* default */].addEvent('banner_message', 'show', _.get(resData, 'info.label'));
          __WEBPACK_IMPORTED_MODULE_7__controllers_Infobar__["a" /* default */].show();
        }

        pm.mediator.trigger('socketConnected');
        this.renewCount = 0;

        if (resData.error) {
          this.set('loggingIn', false);
          this.set('loggedIn', false);
          return;
        }

        pm.mediator.trigger('socket:connected');
        this.set('loggedIn', true);
        this.set('loggingIn', false);

        __WEBPACK_IMPORTED_MODULE_5_async___default.a.series([
        next => {
          // This is here for < 6.0 to 6.0 migration
          // @todo: remove this in 6.3
          this.bootstrapWorkspaces({ userId }, next);
        }],
        err => {
          err && console.error('Error during workspace bootstrap', err);
          this.requestInitialSync();
        });
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
    __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__["a" /* default */].
    get().
    then(userData => {
      if (!userData.syncEnabled || this.get('connectingToSocket') === true || this.get('loggedIn') === false || !pm.syncSocket) {
        this.set('loggedIn', false);
        this.set('socketConnected', false);
        this.set('connectingToSocket', false);

        if (resetSyncProperties) {
          __WEBPACK_IMPORTED_MODULE_12__modules_services_ModelService__["a" /* default */].delete(SYNC_CLIENT_MODEL_NAME, { id: SYNC_CLIENT_ID }).
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

      __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
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
    });
  },

  /**
      * Makes the GET call over the socket to fetch shared collections for a team
      * @param orgId
      * @param successCallback
      * @param failCallback
      */
  getTeamCollections: function (orgId, successCallback, failCallback) {

    __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
      model: 'team',
      action: 'findOne',
      meta: { pathVariables: { id: orgId } } },
    function (res) {
      if (res.hasOwnProperty('data')) {
        successCallback(res);
      } else
      {
        failCallback(res);
      }
    });
  },

  /**
      * Makes the GET call over the socket to fetch shared environments for a team
      * @param orgId
      * @param successCallback
      * @param failCallback
      */
  getTeamEnvironments: function (orgId, successCallback, failCallback) {

    __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
      model: 'environment',
      action: 'find',
      meta: { query: { team: orgId } } },
    function (res) {
      if (res instanceof Array) {
        successCallback(res);
      } else
      {
        failCallback(res);
      }
    });
  },

  updateSinceFromMessage: function (message, done) {
    if (!message || !message.revision || typeof message.revision !== 'number') {
      return;
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
      * Bootstraps default workspaces for a user. Postman 6.0 migration on Sync server.
      *
      * This routine calls a /workspace/bootstrap/user to trigger creation of "My Workspace" for a user on Sync.
      * This workspace needs to be bootstrapped for a user before we start syncing any changes from the App. That's why
      * this is here even before the /sync API call.
      *
      * This should be called once per user on an App. However, the call itself is idempotent on Sync. We put this behind
      * a flag for additional safety.
      *
      * @note: remove this after default workspaces are bootstrapped for all users on Sync. Possibly 6.3/6.4.
      */
  bootstrapWorkspaces(options, cb) {
    if (!options || !options.userId) {
      return cb();
    }

    let userId = options.userId,
    workspaceBootstrapStatus;

    try {
      workspaceBootstrapStatus = JSON.parse(localStorage.getItem('workspaceBootstrapStatus') || '{}');
    }
    catch (e) {
      console.log('Could not bootstrap user workspace', e);

      // swallow error and continue with /sync
      return cb();
    }

    // if we've bootstrapped a workspace for this user already, stop here.
    if (workspaceBootstrapStatus[userId]) {
      console.log('already bootstrapped for this user. skipping bootstrap.');
      return cb();
    }

    __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
      model: 'workspace',
      action: 'bootstrapuser' },
    resData => {
      let bootstrappedWorkspaceId;

      if (resData.error) {
        console.error('Error while bootstrapping user workspace ' + resData.error.message || resData.error);
        return cb();
      }

      console.log('handling bootstrapped workspace for user from sync');

      bootstrappedWorkspaceId = _.get(resData, 'model_id');

      // this queues the new workspace response as a sync real time event which takes care of
      // deep merging this sync workspace with the local version of the same workspace
      Object(__WEBPACK_IMPORTED_MODULE_9__SyncIncomingHandler__["a" /* handleSyncMessage */])(resData, function () {
        // make sure we unblock the queue even for errors
        workspaceBootstrapStatus[userId] = true;
        localStorage.setItem('workspaceBootstrapStatus', JSON.stringify(workspaceBootstrapStatus));

        console.log('successfully bootstrapped workspace for user. setting flag for skip.');

        cb();
      });
    });
  },

  /**
      * @description called ONLY when signIn is successful
      */
  requestInitialSync: function () {
    __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__["a" /* default */].
    get().
    then(userData => {
      if (!userData.syncEnabled) {return;}

      getClientStateFromDb().then(client => {
        this._sendSyncRequest({
          lastRevisionNumber: client.revision,
          lastTimestamp: client.timestamp,
          collectionId: null,
          collectionsAsImports: true });

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

    __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__["a" /* default */].
    get().
    then(userData => {
      if (!userData.syncEnabled) {return;}
      this.trigger('syncStarting');

      if (this.get('isSyncCallRateLimited')) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
        model: 'session',
        action: 'sync',
        meta: {
          query: {
            since_id: lastRevisionNumber,
            sync_timestamp: lastTimestamp,
            changeset: false } } },


      msg => {
        if (!userData.syncEnabled) {
          return;
        }

        this._handleNewSyncResponse(msg, options);

        if (lastRevisionNumber !== 0) {
          // integrity check for all data
          this.doIntegrityCheck = true;
        }
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
      if (message.own) {
        var lastSinceId = message.own.last_since_id;

        try {
          this.set('maxOwnSubscribeSince', Math.max(lastSinceId, message.subscribe.last_since_id));
        }
        catch (e) {
          console.log('Could not set maxOwnSubscribeSince');
        }

        setClientTimestampInDb(message.sync_timestamp);

        changes = _.filter(message.own.entities, function (model) {
          return !(model.action === 'subscribe');
        });
        changes = changes.concat(message.subscribe.entities);

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
      pm.alerts.error('There was an error while syncing. Please force sync after some time (<i>Settings > Sync > Force Sync</i>).', {
        timeout: 5000,
        dedupeId: 'failure-to-sync',
        showAsHtml: true });


    });
  },

  forceSyncAllData() {
    getClientStateFromDb().then(client => {
      Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["a" /* createChangesetsForForceSyncAllData */])((err, clientChangesets) => {
        if (err) {
          return;
        }

        __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
          model: 'session',
          action: 'sync',
          meta: {
            query: {
              since_id: 0,
              sync_timestamp: client.timestamp } } },


        response => {
          let ownedEntities = _.get(response, 'own.entities', []),
          filteredServerChangesets = _.filter(ownedEntities, changeset => {
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

          __WEBPACK_IMPORTED_MODULE_5_async___default.a.series([
          next => {
            if (_.isEmpty(clientModelIds)) {
              next();
              return;
            }

            // pm.syncManager.syncClient.removeModelsFromAllChangesets(clientModelIds, (err) => {
            pm.syncManager.addSyncClientCommand('removeModelsFromAllChangesets', clientModelIds, err => {
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
      // this.syncClient.getChangesets((err, changesets) => {
      this.addSyncClientCommand('getChangesets', (err, changesets) => {
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

  sendChangesetsToServer: function (changesets, done) {
    __WEBPACK_IMPORTED_MODULE_5_async___default.a.eachSeries(changesets, (changeset, next) => {
      if (!Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["c" /* isAuthenticatedSocketAvailable */])()) {
        next(new Error(NO_AUTHENTICATED_CONNECTION));
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
          next();
        });
        return;
      }

      this.sendChangesetToServerRetryable(changeset, () => {
        // console.log('changeset sent to server', changeset);
        next();
      });
    }, done);
  },

  /**
      * Called when conflict resolition is complete, and the server queue starts being processed
      * @private
      */
  saveProcessedServerChange: function (serverChangesets, done) {
    console.log('sending server changes', serverChangesets);
    __WEBPACK_IMPORTED_MODULE_5_async___default.a.eachSeries(serverChangesets, (serverChangeset, next) => {
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

    __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__["a" /* default */].
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

      Object(__WEBPACK_IMPORTED_MODULE_9__SyncIncomingHandler__["a" /* handleSyncMessage */])(message, () => {
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
    if (Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["c" /* isAuthenticatedSocketAvailable */])()) {
      this.trigger('syncFinished');
      Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["e" /* performPendingForceSyncs */])();
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
      __WEBPACK_IMPORTED_MODULE_16__modules_services_AnalyticsService__["a" /* default */].addEvent('sync', 'reconnect_success', 'watchdog');
    }

    this.set('connectingToSocket', false);
    this.set('socketConnected', true);
    this.set('nextReconnectTime', null);

    // console.log('socket connected');

    __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__["a" /* default */].
    get().
    then(user => {
      if (user.id !== '0') {
        this.signIn();
      }
    });
  },

  _onDisconnect: function () {
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


    this.handleNewMessageFormat(message);
    this.addChangesetToIngressQueue(message);

    broadcastRealtimeEvent(message);
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
      destroy: this._onSyncChange.bind(this, 'destroy'),
      history: this._onSyncChange.bind(this, 'history'),
      share: this._onSyncChange.bind(this, 'share'),
      unshare: this._onSyncChange.bind(this, 'unshare'),
      favorite: this._onSyncChange.bind(this, 'favorite'),
      unfavorite: this._onSyncChange.bind(this, 'unfavorite'),
      transfer: this._onSyncChange.bind(this, 'transfer'),
      joining: this._onSyncChange.bind(this, 'joining'),
      leaving: this._onSyncChange.bind(this, 'leaving'),
      add_member: this._onSyncChange.bind(this, 'add_member'),
      remove_member: this._onSyncChange.bind(this, 'remove_member'),
      activate: this._onSyncChange.bind(this, 'activate'),
      deactivate: this._onSyncChange.bind(this, 'deactivate'),
      notification: this._onSyncChange.bind(this, 'notification'),
      visible: this._onSyncChange.bind(this, 'visible'),
      invisible: this._onSyncChange.bind(this, 'invisible') };

  },

  isErrorResponse: function (res, jwr) {

    if (__WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].is3xxStatusCode(res && res.statusCode) || __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].is3xxStatusCode(jwr && jwr.statusCode)) {
      return false;
    }

    if (!res) {
      return true;
    }

    if (res.hasOwnProperty('error')) {
      return true;
    }

    if (jwr && jwr.hasOwnProperty('statusCode') && !__WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].isStatusCode200(jwr.statusCode) && jwr.statusCode !== 304) {
      return true;
    }

    if (res.hasOwnProperty('statusCode') && !__WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].isStatusCode200(res.statusCode) && res.statusCode !== 304) {
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
            Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */])({
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
          Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */])({
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


          this.addChangesetsToSyncClient([Object(__WEBPACK_IMPORTED_MODULE_18__modules_sync_helpers_create_changeset__["a" /* default */])(model, 'transfer', {
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
          Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */])({
            model: 'collection',
            modelId: data.id });

        } else
        if (model === 'folder') {
          Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */])({
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
            Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */])({
              model: 'collection',
              modelId: data.id });

          } else
          if (model === 'folder') {
            Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */])({
              model: 'folder',
              modelId: data.id });

          } else
          if (model === 'request') {
            Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */])({
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
        //       pm.alerts.warning('Oops... something went wrong. Try duplicating the collection.', {
        //         dedupeId: 'forbiddenError',
        //         timeout: 10000
        //       });
        //     }
        //     else {
        //       pm.alerts.warning('Oops...something went wrong. If this object was in your collection, try duplicating the collection. Otherwise, try resubscribing to it.', {
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
        var sanitizedChangeToSync = __WEBPACK_IMPORTED_MODULE_1__utils_SyncIssueHelper__["a" /* default */].sanitizedChangeSet(reason, changeToSync);
        if (reason === 'timeout') {
          // Auto discarding of timeout errors
          // pm.localChanges.popChangeFromUnsyncedQueue();
          // @todo numaan: remove current changeset from sync client and resume

          clearChange = true;

          // Sending any non-history related discards to analytics
          if (!(changeToSync.model === 'history' || changeToSync.action === 'history')) {
            __WEBPACK_IMPORTED_MODULE_16__modules_services_AnalyticsService__["a" /* default */].addEvent(
            'sync', 'discard_timeout', 'issue', null,
            __WEBPACK_IMPORTED_MODULE_1__utils_SyncIssueHelper__["a" /* default */].constructLogToAnalytics(sanitizedChangeToSync));

          }
        } else
        if (reason === 'error' && !_.get(changeToSync, 'res.error')) {
          // Auto discarding of error responses without res.error object
          // pm.localChanges.popChangeFromUnsyncedQueue();
          // @todo numaan remove current changeset from client and resume

          clearChange = true;
          __WEBPACK_IMPORTED_MODULE_16__modules_services_AnalyticsService__["a" /* default */].addEvent(
          'sync', 'discard_unnamed', 'issue', null,
          __WEBPACK_IMPORTED_MODULE_1__utils_SyncIssueHelper__["a" /* default */].constructLogToAnalytics(sanitizedChangeToSync));

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
        Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */])({
          model: 'collection',
          modelId: details.model_id });

        break;
      case 'folder':
        Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */])({
          model: 'folder',
          modelId: details.model_id });

        break;
      case 'request':
        Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */])({
          model: 'request',
          modelId: details.model_id });

        break;
      case 'environment':
        Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */])({
          model: 'environment',
          modelId: details.model_id });

        break;
      default:
        break;}

  },

  forceSyncCollectionAndContinue: function (cid) {
    Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["d" /* markModelForForceSync */])({
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
    __WEBPACK_IMPORTED_MODULE_5_async___default.a.retry({

      // retry a changeset 3 times
      times: 3,

      // retry the changeset after 5 seconds
      interval: 5 * 1000,

      // filter function to check whether to retry the changeset
      errorFilter: this.retryChangesetErrorFilter.bind(this, changeset) },

    callback => {
      this.sendChangesetToServer(changeset, callback);
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
        this.updateSinceFromMessage(response, err => {
          // log errors but move on
          if (err) {
            console.error('Could not update since id after processing client change', err);
          }

          done && done(null, response);
        });
      });
    });
  },

  sendChangesetToServer: function (changeset, callback) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["c" /* isAuthenticatedSocketAvailable */])()) {
      callback(new Error(NO_AUTHENTICATED_CONNECTION));
      return;
    }

    // sanitize data to be sent to sync
    // no need to sanitize for destroy changesets

    Object(__WEBPACK_IMPORTED_MODULE_11__SyncOutgoingHelpers__["a" /* sanitizeHydratedChangeset */])(changeset);

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

    __WEBPACK_IMPORTED_MODULE_13__modules_controllers_UserController__["a" /* default */].
    get().
    then(user => {
      var userId = user.id;
      if (action === 'update') {
        this.cleanseUpdateObject(model, data && data.instance);
      }

      switch (action) {
        case 'share':
          this.trigger('syncStarting');
          __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
            model: 'collection',
            action: 'share',
            data: _.get(changeset, 'data.permissions'),
            meta: { query, pathVariables: { id: _.get(changeset, ['data', 'modelId']) } } },
          (res, jwr) => {
            this.handleSyncResponseForChangeset(res, jwr, changeset, callback);
          });
          break;

        case 'unshare':
          this.trigger('syncStarting');
          __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
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
          __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
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
          __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
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
          __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
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
          if (model === 'history' && data.hasOwnProperty('ids')) {
            let requestData = _.isEmpty(data.ids) ? null : data;

            __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
              model: model,
              action: 'destroyAll',
              data: requestData },
            (res, jwr) => {
              this.handleSyncResponseForChangeset(res, jwr, changeset, callback);
            });
          } else
          {
            __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
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

            __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
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
          __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
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
          __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
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

    // this.syncClient.removeChangesets(syncClientChangesets, (err) => {
    this.addSyncClientCommand('removeChangesets', syncClientChangesets, err => {
      if (err) {
        console.error('syncClient.removeChangesets err', err);
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
        pm.alerts.warning(
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

  addChangesetsToSyncClient: function (changesets, opts) {

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

      // this is to check connection and reconnect if not connected
      this.onlineWatchdog && this.onlineWatchdog();

      autoProcess && this.processOfflineChanges({ origin: 'new-client-changeset' });
      return;
    }

    // this.syncClient.addChangesets(changesets, (err) => {
    this.addSyncClientCommand('addChangesets', changesets, err => {
      if (err) {
        console.error('Error adding to sync client', err);
        return;
      }

      // console.log('syncClient.addChangesets done');

      // if (window.___blockprocess === true) {
      //   console.error('DEBUG: outgoing changesets blocked!', changesets);
      //   return;
      // }

      // this is to check connection and reconnect if not connected
      this.onlineWatchdog && this.onlineWatchdog();

      autoProcess && this.processOfflineChanges({ origin: 'new-client-changeset' });
    });
  },

  restoreCollection: function (restoreTarget) {
    let {
      collectionId,
      ownerId,
      maxId } =
    restoreTarget;

    let currentSyncStatus = this.get('currentSyncStatus');

    if (!Object(__WEBPACK_IMPORTED_MODULE_17__SyncManagerHelper__["c" /* isAuthenticatedSocketAvailable */])()) {
      return;
    }

    __WEBPACK_IMPORTED_MODULE_2__services_SyncService__["request"](pm.syncSocket, {
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
    this.syncInternalChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["a" /* createEvent */])('show', 'conflicts', { conflicts: conflicts }));
  },

  showSyncIssue: function (issue) {
    this.syncInternalChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_14__modules_model_event__["a" /* createEvent */])('show', 'issue', { issue: issue }));
  },

  conflictsResolved: function (conflictResolution) {
    pm.localChanges.onConflictsResolved(conflictResolution);
  },

  fetchPendingConflicts: function () {
    if (pm.localChanges.pendingResolution && pm.localChanges.pendingResolution.conflicts) {
      this.showConflicts(pm.localChanges.pendingResolution.conflicts);
    }
  } });


/* harmony default export */ __webpack_exports__["a"] = (SyncManagerNew);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export filterUnsupportedEvents */
/* unused harmony export buildChangesetsFromEvent */
/* unused harmony export addChangesetsToSyncClient */
/* unused harmony export addMetaToChangesets */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncOutgoingHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_sync_models__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_to_changesets__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CollectionController__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_EnvironmentController__ = __webpack_require__(54);








const ERROR_UNSUPPORTED_ACTOR = 'UNSUPPORTED_ACTOR',
ERROR_UNSUPPORTED_MODEL = 'UNSUPPORTED_MODEL: ',
ERROR_SYNC_DISABLED = 'SYNC_DISABLED',

MODEL_COLLECTION = 'collection',
MODEL_FOLDER = 'folder',
MODEL_REQUEST = 'request',
MODEL_RESPONSE = 'response',
MODEL_COLLECTIONRUN = 'collectionrun',

ACTION_TRANSFER = 'transfer';

const COLLECTION_MODELS_CHANGESETS = 'collectionModelChangesets',
COLLECTIONRUN_MODEL_CHANGESETS = 'collectionRunModelChangesets';

/**
                                                                  * filter non user events
                                                                  *
                                                                  * @param {any} event
                                                                  * @param {any} callback
                                                                  */
function filterUnsupportedEvents(event, callback) {
  let actor = Object(__WEBPACK_IMPORTED_MODULE_3__modules_model_event__["c" /* getActor */])(event),
  actorType = actor && actor.type,
  eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_3__modules_model_event__["g" /* getEventNamespace */])(event);

  // whitelist only USER actions
  if (!_.includes(['USER'], actorType)) {
    callback(new Error(ERROR_UNSUPPORTED_ACTOR));
    return;
  }

  // whitelist only known models
  if (!__WEBPACK_IMPORTED_MODULE_1__modules_sync_models__["a" /* default */][eventNamespace]) {
    callback(new Error(ERROR_UNSUPPORTED_MODEL + eventNamespace));
    return;
  }

  // check for sync enabled
  __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__["a" /* default */].
  get().
  then(user => {
    if (!user || !user.syncEnabled) {
      return callback(new Error(ERROR_SYNC_DISABLED));
    }
    callback(null, event);
  });

}

/**
   * build changeset from event
   *
   * @param {any} event
   * @param {any} callback
   */
function buildChangesetsFromEvent(event, callback) {
  Object(__WEBPACK_IMPORTED_MODULE_2__services_event_to_changesets__["a" /* default */])(event, (err, changesets) => {
    if (err) {
      callback(err);
      return;
    }

    callback(null, event, changesets);
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
   * @param {any} changesets
   */
function addMetaToChangesets(event, changesets, callback) {
  let collectionModelsChangesets = _.filter(changesets, changeset => {
    return _.includes([MODEL_COLLECTION, MODEL_FOLDER, MODEL_REQUEST, MODEL_RESPONSE], changeset.model);
  });

  let collectionRunModelChangesets = _.filter(changesets, { model: MODEL_COLLECTIONRUN });

  if (_.isEmpty(collectionRunModelChangesets) && _.isEmpty(collectionModelsChangesets)) {
    callback(null, changesets);
    return;
  }

  let argMap = {
    [COLLECTION_MODELS_CHANGESETS]: collectionModelsChangesets,
    [COLLECTIONRUN_MODEL_CHANGESETS]: collectionRunModelChangesets };


  __WEBPACK_IMPORTED_MODULE_0_async___default.a.mapValues(argMap, function (changesets, changesetModel, callback) {
    if (changesetModel === COLLECTION_MODELS_CHANGESETS) {
      addOwnerToCollectionModels(changesets, callback);
    } else
    if (changesetModel === COLLECTIONRUN_MODEL_CHANGESETS) {
      addOwnerToCollectionRunModels(changesets, callback);
    }
  }, function (err, changesets) {
    err && console.error('Changeset meta correction failed!', err);

    let unfilteredChangesets = _.concat(
    changesets[COLLECTION_MODELS_CHANGESETS],
    changesets[COLLECTIONRUN_MODEL_CHANGESETS]);


    let validChangesets = _.chain(unfilteredChangesets).
    compact().
    reject(['drop', true]).
    value();

    callback(null, validChangesets);
  });
}

/**
   * adds changeset to sync client
   *
   * @param {any} changesets
   * @param {any} callback
   */
function addChangesetsToSyncClient(changesets, callback) {
  // console.log('Sync.Outgoing: pushing changeset to sync client', changesets);
  pm.syncManager.addChangesetsToSyncClient(changesets);
  callback(null);
}


/**
   * handle broadcast bus event
   *
   * @param {any} event
   */
function handleBusEvent(event) {
  __WEBPACK_IMPORTED_MODULE_0_async___default.a.waterfall([
  function (callback) {
    callback(null, event);
  },
  filterUnsupportedEvents,
  buildChangesetsFromEvent,
  addMetaToChangesets,
  addChangesetsToSyncClient],
  function (err) {
    err &&
    !_.includes([ERROR_UNSUPPORTED_ACTOR, ERROR_SYNC_DISABLED], err && err.message) &&
    !_.startsWith(err && err.message, ERROR_UNSUPPORTED_MODEL) &&
    console.error(err);
  });
}

/**
   * Bus subscription handler for sync outgoing
   *
  */
function SyncOutgoingHandler() {
  let modelEventsChannel = pm.eventBus.channel('model-events');
  this.__disposeSubscription = modelEventsChannel.subscribe(handleBusEvent);
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sanitizeHydratedChangeset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_sync_models__ = __webpack_require__(152);


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

/***/ 1461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = analyticsHandler;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_event_to_analytics__ = __webpack_require__(1462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async__ = __webpack_require__(28);
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

/***/ 1462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(12);



let allowedEvents = ['create', 'create_deep', 'download', 'update', 'duplicate', 'share', 'unshare', 'favorite', 'unfavorite',
'subscribe', 'unsubscribe', 'join', 'delete', 'add_dependencies'],

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

        let collections = _.get(eventProps, 'meta.collections', 0),
        environments = _.get(eventProps, 'meta.environments', 0);
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

/***/ 1463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initiateBoot; });
/* unused harmony export initializeUser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipelines_app_action__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_UserController__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_ConnectivityController__ = __webpack_require__(580);





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

/***/ 1464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipelines_app_action__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_UserController__ = __webpack_require__(20);


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

/***/ 1465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_theme_ThemeManager__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_services_AnalyticsService__ = __webpack_require__(22);




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
          __WEBPACK_IMPORTED_MODULE_2__modules_services_AnalyticsService__["a" /* default */].addEvent('onboarding', 'configuration_set', null, null, event.data.config);
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
      settingsEventChannel.publish(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('updated', 'settings', config));
      return config;
    }).
    then(config => {
      if (!config.postmanTheme) {
        return;
      }
      return __WEBPACK_IMPORTED_MODULE_0__controllers_theme_ThemeManager__["a" /* default */].changeTheme(config.postmanTheme);
    });
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1466:
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

/***/ 1467:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(84);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(84);
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

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_UserController__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipelines_app_action__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_PostLoginService__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AnalyticsService__ = __webpack_require__(22);






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

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ 63:
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

/***/ 648:
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

var _isArray = __webpack_require__(446);

var _isArray2 = _interopRequireDefault(_isArray);

var _noop = __webpack_require__(135);

var _noop2 = _interopRequireDefault(_noop);

var _once = __webpack_require__(330);

var _once2 = _interopRequireDefault(_once);

var _slice = __webpack_require__(195);

var _slice2 = _interopRequireDefault(_slice);

var _onlyOnce = __webpack_require__(467);

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _wrapAsync = __webpack_require__(94);

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

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_sync_models__ = __webpack_require__(152);



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

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Bucket: __webpack_require__(651),
  SyncClient: __webpack_require__(1452)
};


/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable
    lines-around-comment,
    jsdoc/require-param-type,
    jsdoc/require-param-description,
    jsdoc/newline-after-description
 */

const _ = __webpack_require__(0),
  async = __webpack_require__(28),
  uuid = __webpack_require__(385),
  collate = __webpack_require__(1451),
  CONCURRENCY_BATCH_SIZE = 100,
  SEP = '__',
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
  };

let

  /**
   * Processes all the tasks pushed to the dbWriteQueue in parallel.
   * A task is an object that has the necessary information for interacting with the orm.
   * {
   *  key: modified clientId
   *  db: dbInstance,
   *  bucket: bucketIntance
   * }
   * @param {Object} task
   * @param {Function} done
   */
  dbWriteQueue = async.queue(function (task, done) {
    task.db.models.bucket.updateOrCreate(task.key, _.assign({}, task.bucket), done);
  }, 1),
  /**
   * Processes all the tasks pushed to the dbDestroyQueue in parallel.
   * A task is an object that has the necessary information for interacting with the orm.
   * {
   *  key: modified clientId
   *  db: dbInstance,
   * }
   * @param {Object} task
   * @param {Function} done
   */
  dbDestroyQueue = async.queue(function (task, done) {
    task.db.models.bucket.destroy(task.key, done);
  }, 1);

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
    let preprocessResult = Bucket.preprocess(changeset);
    if (preprocessResult) {
      bucketize(this, preprocessResult);
    }
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
    removeChangesets(this, changeset.data.modelId, changeset.action);
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
        let changesets = _.filter(_.values(bucket.intent.actions.destroy), { root: true });

        _.forEach(changesets, (changeset) => {
          removeChangesets(bucket, changeset.data.modelId, 'destroy');
        });

        return cb(undefined, changesets);
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

  /**
   * Writes a bucket to DB
   *
   * @param {Bucket} bucket -
   * @param {Object} db  -
   * @param {Function} callback - receives (err:?Error)
   */
  static saveToDb (bucket, db, callback) {
    db.models.bucket.updateOrCreate(bucket.id, _.assign({}, bucket), callback);
  }

  /**
   * Deletes one bucket from database
   *
   * @param {Bucket} bucket -
   * @param {Object} db -
   * @param {Function} callback - receives (err:?Error)
   */
  static destroyInDb (bucket, db, callback) {
    db.models.bucket.destroy(bucket.id, callback);
  }

  /**
   * Loads one or more buckets from DB
   *
   * @param {String} clientId -
   * @param {Object} db -
   * @param {Function} callback - receives (err:?Error, Array.<Bucket>)
   */
  static createAllFromDb (clientId, db, callback) {
    db.models.bucket.find({
      clientId: clientId
    }, (err, buckets) => {
      // @todo persistence ~ figure out to retain order integrity
      // eslint-disable-next-line arrow-body-style
      callback(err, err ? null : _.map(buckets, (bucket) => this.createFromObject(clientId, bucket)));
    });
  }

  /**
   * Destroys all buckets associated with a client
   *
   * @param {String} clientId -
   * @param {Object} db -
   * @param {Function} callback - receives (err:?Error)
   *
   * @todo persistence ~ check support from ORM
   */
  static destroyAllInDb (clientId, db, callback) {
    db.models.bucket.destroy({
      clientId: clientId
    }, callback);
  }

  static updateOrDestroyAllInDb (buckets, db, callback) {
    async.eachLimit(buckets, CONCURRENCY_BATCH_SIZE, (bucket, next) => {
      // post removal, if the affected bucket is empty, we simply delete it from database and array of pending
      // buckets.
      if (bucket.isEmpty()) {
        Bucket.destroyInDb(bucket, db, next);
      }
      else {
        // ensure that the affected bucket is updated
        // @todo any way to check if no change is needed and then not call update?
        Bucket.saveToDb(bucket, db, next);
      }
    }, callback);
  }

  /**
   * Saves a bucket to DB but is accessed using a special ID. This is useful to isolate active bucket from pending
   * buckets
   *
   * @note this function uses the `id` field to store data and isolate it using the clientId field
   *
   * @param {String} ext -
   * @param {Bucket} bucket -
   * @param {Object} db -
   * @param {Function} callback -
   */
  static saveToDbById (ext, bucket, db, callback) {
    bucket = _.clone(bucket);

    let id = bucket.id,
      clientId = bucket.clientId;

    // store the id in client id for retrieving later
    bucket.clientId = (clientId + SEP + id + SEP + ext);
    // store client id and extended id in id for retrieving later
    bucket.id = (clientId + SEP + ext);
    // gets processed by the worker in parallel, concurrency is set to one so it gets processed one at a time.
    dbWriteQueue.push({
      key: (clientId + SEP + ext),
      db: db,
      bucket: bucket
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
   * @param {Object} db -
   * @param {Function} callback -
   */
  static createFromDbById (ext, clientId, db, callback) {
    db.models.bucket.findOne(clientId + SEP + ext, (err, bucket) => {
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
   * @param {Object} db -
   * @param {Function} callback -
   */
  static destroyInDbById (ext, bucket, db, callback) {
    // gets processed by the worker in parallel, concurrency is set to one so it gets processed one at a time.
    dbDestroyQueue.push({
      db: db,
      key: (bucket.clientId + SEP + ext)
    }, callback);
  }
}

module.exports = Bucket;


/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_controllers_CollectionController__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_HeaderPresetController__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_HistoryController__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_EnvironmentController__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_GlobalsController__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_WorkspaceController__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_CollectionRunController__ = __webpack_require__(373);
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
  __WEBPACK_IMPORTED_MODULE_5__modules_controllers_WorkspaceController__["a" /* default */].get({ id }, getControllerOptions(opts)).
  then(workspace => {
    if (!workspace) {
      console.error('DBS.getInstance err');
      cb(EntityNotFoundError('workspace', id));
    }

    console.log('populated workspace', workspace);

    let sanitized = sanitizeInstance(workspace, _extends({}, opts));

    cb(null, sanitized);
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(EntityNotFoundError('workspace', id));
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
    cb(EntityNotFoundError('collection', id));
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
    cb(EntityNotFoundError('folder', id));
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
    cb(EntityNotFoundError('request', id));
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
    cb(EntityNotFoundError('response', id));
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
  __WEBPACK_IMPORTED_MODULE_4__modules_controllers_GlobalsController__["a" /* default */].get({ id }).
  then(globals => {
    let sanitizedGlobals = null;

    if (!globals) {
      cb(EntityNotFoundError('globals', id));
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
    cb(error);
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
  __WEBPACK_IMPORTED_MODULE_3__modules_controllers_EnvironmentController__["a" /* default */].get({ id }).
  then(environment => {
    let sanitizedEnvironment = null;

    if (!environment) {
      cb(EntityNotFoundError('environment', id));
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
    cb(error);
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
  __WEBPACK_IMPORTED_MODULE_4__modules_controllers_GlobalsController__["a" /* default */].
  get({ workspace: 'personal' }).
  then(function (globals) {
    if (!globals) {
      console.error('DBS.getInstance err');
      return cb(EntityNotFoundError('user', id));
    }

    return cb(null, { globals: globals.values });
  }).
  catch(function (e) {
    console.error('DBS.getInstance err', e);
    return cb(e);
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
      cb(EntityNotFoundError('headerPreset', id));
      return;
    }

    let sanitizedHeaderPreset = sanitizeInstance(headerPreset, _extends({}, opts));

    cb(null, sanitizedHeaderPreset);
    return;
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(err);
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
  get({ id }).then(history => {
    if (!history) {
      console.error('DBS.getInstance err');
      cb(EntityNotFoundError('history', id));
      return;
    }

    let sanitized = sanitizeInstance(history, _extends({}, opts));

    cb(null, sanitized);
    return;
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(err);
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
      callback(err, null);
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
  __WEBPACK_IMPORTED_MODULE_6__modules_controllers_CollectionRunController__["a" /* default */].
  get({ id }).then(collectionRun => {
    if (!collectionRun) {
      console.error('DBS.getInstance err');
      cb(EntityNotFoundError('collectionRun', id));
      return;
    }

    let sanitizedCollectionRun = sanitizeInstance(collectionRun, _extends({}, opts));

    cb(null, sanitizedCollectionRun);
    return;
  }).
  catch(err => {
    console.error('DBS.getInstance err', err);
    cb(err);
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

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(12);
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

/***/ 77:
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
      !_.has(attributes, 'defaultsTo') // Didn't provide defaultsTo
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

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(39);
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

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eachLimit = __webpack_require__(1432);

var _eachLimit2 = _interopRequireDefault(_eachLimit);

var _doLimit = __webpack_require__(196);

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

/***/ })

},[1428]);