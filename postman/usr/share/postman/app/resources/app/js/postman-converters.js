webpackJsonp([1],{

/***/ 3453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkImportEnvironmentFromUrl__ = __webpack_require__(4049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__importCollectionAndEnvironment__ = __webpack_require__(4275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__convertData__ = __webpack_require__(3845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__importFileFromUrl__ = __webpack_require__(4276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__importFiles__ = __webpack_require__(4277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__importFolder__ = __webpack_require__(4278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__saveEntity__ = __webpack_require__(4279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__importers_index__ = __webpack_require__(1615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_async__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_async__);











/**
                            * This is like a step callback that will be called after each collection import
                            * to handle the success or failure case
                           */
function handleCollectionImportStatus(error, collection) {
  if (!error) {
    pm.toasts.success('Collection ' + collection.name + ' imported');
  } else
  {
    error.isUserFriendly ?
    pm.toasts.error(error.message, { dedupeId: 'failed-collection-import' }) :
    pm.toasts.error('Failed to import collection ' + collection.name, { dedupeId: 'failed-collection-import' });
  }
}

/**
   * Imports a Collection, Environment, Request, Globals, etc. in any supported format.
   * (Collection v2, Swagger RAML, etc.)
   *
   * @param {string|object} data - A string containing JSON/YAML/XML/etc, or other type of data
   * @param {object} options - options, Currently used by analytics handler to determine which analytics event to send
   * @param {Function} done - calls after every entity is imported
   *
   *
   * @returns {object} convertedData - imported data
   * Resolves with the Postman objects that were imported, and the format that they were imported from.
   */
async function importData(data, options, done) {
  if (_.isEmpty(data)) return _.isFunction(done) && done();
  __WEBPACK_IMPORTED_MODULE_9_async___default.a.series([
  next => {
    __WEBPACK_IMPORTED_MODULE_8__importers_index__["a" /* default */].importCollections(data.collections, options, handleCollectionImportStatus, next);

  },
  next => {
    __WEBPACK_IMPORTED_MODULE_8__importers_index__["a" /* default */].importGlobals(data.globals, _.pick(options, ['activeWorkspace']), next);
  },
  next => {
    __WEBPACK_IMPORTED_MODULE_8__importers_index__["a" /* default */].importHeaderPresets(data.headerPresets, _.pick(options, ['currentUserID', 'activeWorkspace']), next);
  },
  next => {
    __WEBPACK_IMPORTED_MODULE_8__importers_index__["a" /* default */].importEnvironments(data.environments, _.pick(options, ['currentUserID']), next);
  },
  next => {
    __WEBPACK_IMPORTED_MODULE_8__importers_index__["a" /* default */].importRequests(data.requests, next);
  }],
  () => {
    _.isFunction(done) && done();
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  checkImportEnvironmentFromUrl: __WEBPACK_IMPORTED_MODULE_0__checkImportEnvironmentFromUrl__["a" /* default */],
  importCollectionAndEnvironment: __WEBPACK_IMPORTED_MODULE_1__importCollectionAndEnvironment__["a" /* default */],
  importData,
  convertRawData: __WEBPACK_IMPORTED_MODULE_2__convertData__["a" /* default */],
  importDataAs: __WEBPACK_IMPORTED_MODULE_2__convertData__["c" /* importDataAs */],
  stringify: __WEBPACK_IMPORTED_MODULE_2__convertData__["d" /* stringify */],
  importFileFromUrl: __WEBPACK_IMPORTED_MODULE_3__importFileFromUrl__["a" /* default */],
  parseUrlData: __WEBPACK_IMPORTED_MODULE_3__importFileFromUrl__["b" /* parseUrlData */],
  importFiles: __WEBPACK_IMPORTED_MODULE_4__importFiles__["a" /* default */],
  importFolder: __WEBPACK_IMPORTED_MODULE_5__importFolder__["a" /* default */],
  saveEntity: __WEBPACK_IMPORTED_MODULE_6__saveEntity__["a" /* default */] });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 4049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = checkImportEnvironmentFromUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection_transformer__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_postman_collection_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml__ = __webpack_require__(3633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formats__ = __webpack_require__(3683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_pipelines_user_action__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__ = __webpack_require__(39);







/**
                                                                        * Checks a URL for presence of an environment, and imports the environment if it is present.
                                                                        * If a URL has been clicked on, it might include an environment
                                                                        * See https://postmanlabs.atlassian.net/wiki/display/PRODUCT/Run+in+Postman+-+Protocol+Proposal for more
                                                                        *
                                                                        * @param {URL} url - URL of the resource that is being fetched
                                                                        *
                                                                        * @fires Environments#importedEnvironmentFromURL
                                                                        */
function checkImportEnvironmentFromUrl(url) {
  url = decodeURIComponent(url);
  var urlVars = __WEBPACK_IMPORTED_MODULE_4__utils_util__["a" /* default */].getHashVars(url, false),
  i;
  _.each(urlVars, function (urlVar) {
    var key = decodeURIComponent(urlVar.key);
    if (key.indexOf('env[') == 0 && key[key.length - 1] == ']') {
      try {
        // if urlVar.value ends with ", trim it
        // for the extra trailing " in some cases
        var asciiVal = '';
        try {
          asciiVal = atob(urlVar.value);
        }
        catch (e) {
          if (_.endsWith(urlVar.value, '"')) {
            urlVar.value = urlVar.value.substring(0, urlVar.value.length - 1);
            asciiVal = atob(urlVar.value);
          } else
          {
            throw e;
          }
        }

        var name = key.substring(4, key.length - 1),
        envJson = JSON.parse(asciiVal),
        envArrayToUse = [];

        if (envJson instanceof Array) {
          var numVars = envJson.length;
          for (i = 0; i < numVars; i++) {
            envArrayToUse.push(_.assign({
              'type': 'text',
              'enabled': true },
            envJson[i]));
          }
        } else
        {
          // it's an object
          _.forOwn(envJson, function (value, key) {
            envArrayToUse.push({
              key: key,
              value: value,
              type: 'text',
              enabled: true });

          });
        }

        __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__["a" /* default */].
        get().
        then(user => {
          let createEnvironmentEvent = {
            name: 'create',
            namespace: 'environment',
            data: {
              id: __WEBPACK_IMPORTED_MODULE_4__utils_util__["a" /* default */].guid(),
              name: name,
              values: envArrayToUse,
              owner: user.id } };



          Object(__WEBPACK_IMPORTED_MODULE_3__modules_pipelines_user_action__["a" /* default */])(createEnvironmentEvent);

          pm.toasts.success('Environment ' + name + ' imported');
        }).
        catch(e => {
          pm.logger.error('Error in creating evironment', e);
        });
      }
      catch (e) {
        console.log('Could not import environment');
      }
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 4275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = importCollectionAndEnvironment;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection_transformer__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_postman_collection_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml__ = __webpack_require__(3633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formats__ = __webpack_require__(3683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(3453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(19);







/**
                                      * Handles Run in Postman imports.
                                      * Called when a getpostman.com/collection URL / postman:// protocol is clicked on. Can import collection + environment
                                      *
                                      * @param {URL} url - The URL that was used to import a collection / environment or both
                                      */
function importCollectionAndEnvironment(url) {
  __WEBPACK_IMPORTED_MODULE_3__index__["default"].importFileFromUrl(url, (err, data) => {
    if (err) {
      return pm.logger.error(err);
    }

    __WEBPACK_IMPORTED_MODULE_3__index__["default"].checkImportEnvironmentFromUrl(url);
    var urlVars = __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].getUrlVars(url),
    referrer = _.find(urlVars, function (v) {return v.key === 'referrer';}),
    referrerValue = referrer ? decodeURIComponent(referrer.value) : '';

    __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__["a" /* default */].addEvent('collection', 'create', 'run_button', null, {
      referrer: referrerValue,
      collection_id: data.id,
      collection_link_id: __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].getCollectionLinkId(url) });

  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 4276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = importFileFromUrl;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseUrlData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_Importer__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_HttpService__ = __webpack_require__(129);





/**
                                                    * Fetches resources at a given link and imports the resource by guessing the format.
                                                    * Called by the Import Modal (Import URL)
                                                    *
                                                    * @param {URL} url - URL of the resource
                                                    * @param {Function} callback - The function that will be called once the resource is imported
                                                    *
                                                    * @fires Mediator#failedCollectionImport
                                                    *
                                                    * @see Collections#importData
                                                    */
function importFileFromUrl(url, callback) {
  __WEBPACK_IMPORTED_MODULE_3__utils_HttpService__["a" /* default */].request(url).then(({ body }) => {
    try {
      __WEBPACK_IMPORTED_MODULE_1__controllers_Importer__["a" /* default */].importData(body, { origin: 'import/link', link: url }).
      then(() => {
        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isFunction(callback) && callback(null, body);
      });
    }
    catch (e) {
      if (e == 'Could not parse') {
        pm.mediator.trigger('failedCollectionImport', 'format not recognized');
        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isFunction(callback) && callback('format not recognized');
      } else
      {
        pm.mediator.trigger('failedCollectionImport', 'Could not import: ' + e);
        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isFunction(callback) && callback('Could not import: ' + e);
      }
    }
  }).catch(({ error }) => {
    console.log('Error response while importing: ', error);
    pm.mediator.trigger('failedCollectionImport', 'Error response received from URL. Check the console for more.');
    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isFunction(callback) && callback('Error response received from URL. Check the console for more.');
  });
}


/**
   * Fetches resource data at the given url
   * @param {String} url : url of the resource
   *
   * This function has been added to decouple fetching
   * the resource and importing data
   * In further refactoring, we can use this function
   * in the above importfileFromUrl function
   */
function parseUrlData(url) {
  return __WEBPACK_IMPORTED_MODULE_3__utils_HttpService__["a" /* default */].request(url).then(({ body }) => {
    return body;
  }).catch(({ error }) => {
    pm.logger.warn('Error while parsing url data: ', error);
  });
}

/***/ }),

/***/ 4277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = importFiles;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_Importer__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_async__);




/**
                            * Imports a list of files, guessing each file's format and importing as required.
                            * Called by the Import Modal (Import File)
                            *
                            * @param {File[]} files - The files to import
                            * @param {string} source - Source calling the function
                            * @param {Function} callback
                            *
                            * @fires Mediator#failedCollectionImport
                            *
                            * @see Collections#importData
                            *
                            * Since this function is being used at multiple places,
                            * added a parameter source to specify when called by
                            * the importByFileContainer
                            *
                            * Following are the components/sources calling the function -
                            * 1) ImportByFileContainer
                            * 2) ImportEnvironmentContainer
                            * 3) SettingsDataContainer
                            *
                            * The source value is right now only passed by the
                            * ImportByFileContainer component for its specific use case
                            * to return the callback
                            *
                            */
function importFiles(files, source, callback) {

  __WEBPACK_IMPORTED_MODULE_2_async___default.a.eachSeries(files, (file, next) => {
    let reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = function (e) {
      var data = e.currentTarget.result;

      /**
                                          * Adding support logic for the case when one file is to be imported and
                                          * called by the importByFileContainer
                                          */
      if (source === 'importByFileContainer' && callback && files.length === 1) {
        return callback(data, { origin: 'import/file' });
      }
      __WEBPACK_IMPORTED_MODULE_1__controllers_Importer__["a" /* default */].importData(data, { origin: 'import/file' }, next);
    };

    // Read in the image file as a data URL.
    reader.readAsText(file);
  });
}

/***/ }),

/***/ 4278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = importFolder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_Importer__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_services_AnalyticsService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postman_raml_to_postman__ = __webpack_require__(3832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postman_raml_to_postman___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__postman_raml_to_postman__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_raml_parser__ = __webpack_require__(3703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_raml_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_raml_parser__);







/**
                                       * Imports a file system folder.
                                       *
                                       * @param {File[]} allFiles   - The files that need to be imported
                                       * @param {String} rootPath   - The root path of uploaded data, e.g: /Uber or /my-folder. The slash at the beginning is important
                                       * @param {Function} callback - The function that will be called after the imported resources are written to IndexedDB
                                       *
                                       * @fires Mediator#failedCollectionImport
                                       */
function importFolder(allFiles, rootPath, callback) {
  var uploadedData = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.zipObject(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(allFiles, 'fileName'), __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(allFiles, 'content')),
  rootFiles = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(allFiles, { isRoot: true }),
  reader;

  reader = new __WEBPACK_IMPORTED_MODULE_5_raml_parser___default.a.FileReader(function (path) {
    return new Promise(function (resolve, reject) {
      var decodedFullPath = decodeURIComponent(path);
      if (uploadedData.hasOwnProperty(decodedFullPath)) {
        resolve(uploadedData[decodedFullPath]);
      } else
      if (uploadedData.hasOwnProperty(rootPath + path)) {
        resolve(uploadedData[rootPath + path]);
      } else
      {
        reject(new Error('Unable to find file ' + path + ' in uploaded data'));
      }
    });
  });

  // Import RAML files, if any
  __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(rootFiles, function (rootFile) {
    __WEBPACK_IMPORTED_MODULE_5_raml_parser___default.a.loadFile(rootFile.fileName, { reader: reader }).
    then(function (result) {
      __WEBPACK_IMPORTED_MODULE_4__postman_raml_to_postman___default.a.parseRaw(result, function (op, env) {
        __WEBPACK_IMPORTED_MODULE_2__modules_services_AnalyticsService__["a" /* default */].addEvent('collection', 'create', 'raml');

        // @todo Akhil need to remove this
        // pm.collections.importCollectionData(op);
        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isFunction(callback) && callback(null, op);
      }, function (errorMessage) {
        pm.toasts.error('Error while importing RAML ' + errorMessage);
        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isFunction(callback) && callback('RAML: ' + errorMessage);
      });
    }).
    catch(function (e) {
      pm.logger.error(e);
      pm.mediator.trigger('failedCollectionImport', 'Error importing RAML API: ' + e);
      return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isFunction(callback) && callback(e);
    });
  });

  if (rootFiles.length === 0) {
    __WEBPACK_IMPORTED_MODULE_3_async___default.a.eachOfSeries(uploadedData, (content, fileName, next) => {
      if (!/^.*\.postman_collection$|^.*\.postman_environment$|^.*\.json$/ig.test(fileName)) {
        return next();
      }

      // May be worth importing
      __WEBPACK_IMPORTED_MODULE_1__controllers_Importer__["a" /* default */].importData(content, { origin: 'import/folder' }, next);
    });
  }
}

/***/ }),

/***/ 4279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = saveEntity;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_services_filesystem__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_export_index__ = __webpack_require__(3846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_services_AnalyticsService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__export_all__ = __webpack_require__(1515);





const SUPPORTED_FILE_TYPES = {
  json: 'application/json' },

TAB = '\t',
COLLECTION = 'collection',
ENVIRONMENT = 'environment',
GLOBALS = 'globals',
DEFAULT_FILE_NAME_EXT = '.json';

/**
                                  * Saves the exported entity to a file.
                                  * Will show a native prompt for the location to save the exported entity
                                  * @param {Object} criteria
                                  * @param {Object} options
                                  * @param {String} options.type
                                  * @param {String} options.inputVersion
                                  * @param {String} options.outputVersion
                                  */
function saveEntity(criteria, options = {}) {
  let model = options.type,
  exportVersion = _.get(options, 'outputVersion', '1.0.0'),
  exportedData,
  fileType,
  fileName;

  if (!model) {
    console.warn(`Unsupported type '${model}' for exporting`);
    return;
  }

  // This will fetch the entity from db, sanitize and transform it to the exportable format
  return __WEBPACK_IMPORTED_MODULE_1__modules_export_index__["a" /* default */].exportSingle(model, criteria, options)

  // check if the entity was exported correctly
  .then(data => {
    if (!(data && SUPPORTED_FILE_TYPES[data.type] && data[data.type])) {
      console.warn('Invalid data or unsupported file type', data);
      throw new Error('saveEntity: invalid data received');
    }

    return data;
  })

  // cache the data, file type and file name
  .then(data => {
    exportedData = data;
    fileType = SUPPORTED_FILE_TYPES[exportedData.type];
    fileName = _.get(exportedData, 'meta.fileName', model + DEFAULT_FILE_NAME_EXT);
  })

  // serialize the entity
  .then(() => {
    return JSON.stringify(exportedData.json, null, TAB);
  })

  // prompt the user to save the entity to the file system
  .then(serializedData => {
    return new Promise((resolve, reject) => {
      Object(__WEBPACK_IMPORTED_MODULE_0__models_services_filesystem__["b" /* saveAndOpenFile */])(fileName, serializedData, fileType, (err, state) => {
        if (err) {
          console.warn('Error while saving the exported entity', err);
          reject(err);
          return;
        }

        resolve(state);
      });
    });
  })

  // show the success notification and send analytics event
  .then(state => {
    if (state !== __WEBPACK_IMPORTED_MODULE_3__export_all__["a" /* EXPORT_STATE */].SUCCESS) {
      return;
    }

    switch (model) {
      case COLLECTION:
        __WEBPACK_IMPORTED_MODULE_2__modules_services_AnalyticsService__["a" /* default */].addEvent(COLLECTION, 'download', exportVersion, null, { collection_id: criteria.id });
        pm.toasts.success('Your collection was exported successfully.');
        break;

      case ENVIRONMENT:
        __WEBPACK_IMPORTED_MODULE_2__modules_services_AnalyticsService__["a" /* default */].addEvent(model, 'download');
        pm.toasts.success('Your environment was exported successfully.');
        break;

      case GLOBALS:
        __WEBPACK_IMPORTED_MODULE_2__modules_services_AnalyticsService__["a" /* default */].addEvent(model, 'download');
        pm.toasts.success('Your globals were exported successfully.');
        break;}

  }).

  catch(err => {
    pm.toasts.error('Unable to export this entity. Please check the DevTools.');
    console.warn('Error while exporting an entity', criteria, options, err);
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })

});