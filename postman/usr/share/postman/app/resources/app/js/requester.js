webpackJsonp([24],{

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* unused harmony export Response */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RequestBody__ = __webpack_require__(2079);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_httpheaders__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ModelToSdkTransformer__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_services_filesystem__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_postman_collection_transformer__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_postman_collection_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_postman_collection_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_RuntimeBridge__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_http_reasons__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_http_reasons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_http_reasons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_pipelines_user_action__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_HistoryService__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_ResolveVariableHelper__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_controllers_CollectionController__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_controllers_EnvironmentController__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_controllers_GlobalsController__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_vkbeautify__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_backbone__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_services_VariableSessionService__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_VariableSessionHelper__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__utils_RequestUtil__ = __webpack_require__(396);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};





















var sdk = __webpack_require__(62),
VariableScope = sdk.VariableScope;

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
var Request = __WEBPACK_IMPORTED_MODULE_17_backbone___default.a.Model.extend( /** @lends Request.prototype */{
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
    let environmentId = Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id,
    globalsId = Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore').id,
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id;

    return Object(__WEBPACK_IMPORTED_MODULE_18__modules_services_VariableSessionService__["e" /* getVariableSessionMap */])({ environmentId, globalsId, workspaceId });
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
      __WEBPACK_IMPORTED_MODULE_6__controllers_RuntimeBridge__["a" /* default */].stopRunRequest(runLinkID);
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
      Object(__WEBPACK_IMPORTED_MODULE_4__models_services_filesystem__["c" /* saveAndOpenFileForResponse */])('response', response.get('sdkResponse'), type, function (error) {
        if (!error) {
          pm.toasts.success('Saved');
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

  getFinalRequestUrl: async function (url) {
    var finalUrl;

    finalUrl = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].replaceURLPathVariables(url, this.get('pathVariableData'));
    finalUrl = this.encodeUrl(finalUrl);
    finalUrl = __WEBPACK_IMPORTED_MODULE_12__utils_ResolveVariableHelper__["a" /* default */].resolve(finalUrl, (await this.getVariablesMap()));
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
    collectionStore = Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('CollectionStore').find(collectionId);
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

    if (requestId && !Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('RequestStore').find(requestId)) {
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


    Object(__WEBPACK_IMPORTED_MODULE_8__modules_pipelines_user_action__["a" /* default */])(updateRequestEvent).
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



    Object(__WEBPACK_IMPORTED_MODULE_8__modules_pipelines_user_action__["a" /* default */])(deleteResponseEvent).
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
      responseRequest = await __WEBPACK_IMPORTED_MODULE_13__modules_controllers_CollectionController__["a" /* default */].getRequest({ id: this.get('id') });
    }
    if (_.isEmpty(responseRequest)) {
      pm.toasts.error('Something went wrong while opening this example response');
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

  getXhrHeaders: async function () {
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

    let i,
    variablesMap = await this.getVariablesMap(),
    finalHeaders = [];

    for (i = 0; i < headers.length; i++) {
      var header = _.clone(headers[i]);
      if (!_.isEmpty(header.value) && !_.isEmpty(header.key) && header.enabled !== false) {
        header.key = __WEBPACK_IMPORTED_MODULE_12__utils_ResolveVariableHelper__["a" /* default */].resolve(header.key, variablesMap);
        header.value = __WEBPACK_IMPORTED_MODULE_12__utils_ResolveVariableHelper__["a" /* default */].resolve(header.value, variablesMap);
        finalHeaders.push(header);
      }
    }

    this.set('transformedHeaders', finalHeaders);
    return finalHeaders;
  },

  // @TODO Not being used, remove this
  getRequestBodyForCurl: async function () {
    var body = this.get('body');
    return await body.getBodyForCurl();
  },

  getURLForSnippet: async function () {
    // unparse the URL
    let url = new sdk.Url(this.get('url'));

    // add system query parameters if present
    url.addQueryParams(this.get('systemQueryParams'));

    // compress url, resolve path variables and environment variables
    return await this.getFinalRequestUrl(url.toString());
  },

  getRequestAfterResolutionForSnippet: async function () {
    var ret = {},
    resolvedData = null;
    var oldVal = this.getAsObject();

    // getFinalRequestUrl replaces URL params
    ret.url = await this.getURLForSnippet();
    ret.headers = this.packHeaders((await this.getXhrHeaders()));

    // escape double quotes for certain lingos
    ret.headers = typeof ret.headers === 'string' ? ret.headers.replace(/\"/g, '\\\"') : ret.headers;

    try {
      let serializableData,
      variablesMap = await this.getVariablesMap();

      if (oldVal.dataMode === 'raw' || oldVal.dataMode === 'binary') {
        serializableData = oldVal.data;
        resolvedData = __WEBPACK_IMPORTED_MODULE_12__utils_ResolveVariableHelper__["a" /* default */].resolve(serializableData, variablesMap);
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
        resolvedData = __WEBPACK_IMPORTED_MODULE_12__utils_ResolveVariableHelper__["a" /* default */].resolve(JSON.stringify(serializableData), variablesMap);
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
      pm.toasts.error('Empty Request URL', { dedupeId: 'empty-request-url' });
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
    collectionV1,
    store = Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore'),
    globalsStore = Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore'),
    activeEnvironmentId = store && store.id,
    activeWorkspaceId = globalsStore && globalsStore.workspace,
    activeGlobalsId = globalsStore && globalsStore.id;

    if (request.get('isFromCollection')) {
      let dbRequest = await __WEBPACK_IMPORTED_MODULE_13__modules_controllers_CollectionController__["a" /* default */].getRequest({ id: request.id });

      // It is not a collection request, might be deleted or isFromCollection flag is wrongly set.
      if (!dbRequest) {
        request.set('isFromCollection', false);
      } else
      {
        // Always get the collection from the dbRequest.collection,
        // Since, the request may be moved out of a collection.
        collectionV1 = await __WEBPACK_IMPORTED_MODULE_13__modules_controllers_CollectionController__["a" /* default */].getCollection({ id: dbRequest.collection }, { populate: ['folders'] });
      }
    }

    // request might say it is from a collection, but the collection may not exit
    // collection may be deleted after request was opened in a tab
    if (collectionV1) {
      let requestToBeSent = this.getRequestAsV1(request);

      // Adding additional headers
      requestToBeSent.headers = __WEBPACK_IMPORTED_MODULE_3__utils_ModelToSdkTransformer__["a" /* default */].getHeaders(request, true);

      // handle variable-session
      if (!_.isEmpty(collectionV1.variables)) {
        let sessionId = Object(__WEBPACK_IMPORTED_MODULE_19__utils_VariableSessionHelper__["b" /* getSessionId */])('collection', collectionV1.id, activeWorkspaceId),
        variableSession = await Object(__WEBPACK_IMPORTED_MODULE_18__modules_services_VariableSessionService__["d" /* getSessionFor */])(sessionId, collectionV1);
        collectionV1.variables = _.reject(variableSession.values, { enabled: false });
      }

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


      let collectionV2 = __WEBPACK_IMPORTED_MODULE_5_postman_collection_transformer___default.a.convert(
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


    let environment = activeEnvironmentId && (await __WEBPACK_IMPORTED_MODULE_14__modules_controllers_EnvironmentController__["a" /* default */].get({ id: activeEnvironmentId })),
    envSessionId = Object(__WEBPACK_IMPORTED_MODULE_19__utils_VariableSessionHelper__["b" /* getSessionId */])('environment', activeEnvironmentId, activeWorkspaceId),
    envSession = activeEnvironmentId && (await Object(__WEBPACK_IMPORTED_MODULE_18__modules_services_VariableSessionService__["d" /* getSessionFor */])(envSessionId, environment)),
    activeEnvSessionId = envSession && envSession.id,
    globals = activeWorkspaceId && (await __WEBPACK_IMPORTED_MODULE_15__modules_controllers_GlobalsController__["a" /* default */].get({ workspace: activeWorkspaceId })),
    globalsSessionId = globals && Object(__WEBPACK_IMPORTED_MODULE_19__utils_VariableSessionHelper__["b" /* getSessionId */])('globals', globals.id, activeWorkspaceId),
    globalSession = globals && (await Object(__WEBPACK_IMPORTED_MODULE_18__modules_services_VariableSessionService__["d" /* getSessionFor */])(globalsSessionId, globals)),
    activeGlobalSessionId = globalSession && globalSession.id;

    envSession = envSession ? _.reject(envSession.values, { enabled: false }) : environment && environment.values || [];
    globalSession = globalSession ? _.reject(globalSession.values, { enabled: false }) : globals && globals.values || [];

    this.prepareForSending();
    const showExceptionAlert = _.once(function () {
      pm.toasts.error('Something went wrong while running your scripts. Check Postman Console for more info.');
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
      environment: { values: envSession },
      globals: { values: globalSession },
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

    // @todo: get current workspace from VariableSessionController
    let currentWorkspace = Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace;

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
        modifiedEnvironment,
        modifiedGlobals,
        { error: errorObj } = _.find(prResults, prResult => prResult.error) || {};

        if (scriptError = err || errorObj) {
          request.trigger('prscriptError', scriptError.name + ': ' + scriptError.message);
          request.set('lifecycle', 'PRScriptError');

          return;
        }

        modifiedEnvironment = new VariableScope({ mutations: {} });
        modifiedGlobals = new VariableScope({ mutations: {} });

        _.forEach(prResults, result => {
          Object(__WEBPACK_IMPORTED_MODULE_20__utils_RequestUtil__["a" /* mergeMutations */])(modifiedEnvironment.mutations, _.get(result, 'result.environment.mutations'));
          Object(__WEBPACK_IMPORTED_MODULE_20__utils_RequestUtil__["a" /* mergeMutations */])(modifiedGlobals.mutations, _.get(result, 'result.globals.mutations'));
        });

        activeEnvironmentId && Object(__WEBPACK_IMPORTED_MODULE_18__modules_services_VariableSessionService__["f" /* updateEntityWithSession */])(activeEnvSessionId, modifiedEnvironment).
        catch(err => {
          console.warn('prerequest script: Error while getting environment session from db', err);
        });


        Object(__WEBPACK_IMPORTED_MODULE_18__modules_services_VariableSessionService__["f" /* updateEntityWithSession */])(activeGlobalSessionId, modifiedGlobals).
        catch(err => {
          console.warn('prerequest script: Error while getting globals session from db', err);
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
        httpReason = __WEBPACK_IMPORTED_MODULE_7_http_reasons___default.a.lookup(responseObj.code),
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

        __WEBPACK_IMPORTED_MODULE_6__controllers_RuntimeBridge__["a" /* default */].disposeRun(request.get('runLinkID'));
        request.set('runLinkID', null);
      },
      test: function (err, cursor, testResults) {
        // Add request to the history
        __WEBPACK_IMPORTED_MODULE_10__modules_services_HistoryService__["a" /* default */].
        getHistoryFromRequest(request.serialize(), { workspace: currentWorkspace }).
        then(history => {
          let historyCreateEvent = Object(__WEBPACK_IMPORTED_MODULE_9__modules_model_event__["a" /* createEvent */])('create', 'history', history);

          Object(__WEBPACK_IMPORTED_MODULE_8__modules_pipelines_user_action__["a" /* default */])(historyCreateEvent).
          catch(e => {console.log('Error in creating history', e);});
        });

        // Check if there was a test script.. if no, there's nothing to do here.
        if (!(_.isArray(testResults) && testResults.length)) {
          request.set('lifecycle', 'completed');
          request.set('testErrors', null);
          request.set('testResults', null);
          return;
        }

        let scriptError,
        modifiedEnvironment,
        modifiedGlobals,
        { error: errorObj } = _.find(testResults, testResult => testResult.error) || {};

        if (scriptError = err || errorObj) {
          request.set('testResults', null);
          request.set('testErrors', scriptError.name + ': ' + scriptError.message);

          request.set('lifecycle', 'testScriptsError');
          return;
        }

        modifiedEnvironment = new VariableScope({ mutations: {} });
        modifiedGlobals = new VariableScope({ mutations: {} });

        _.forEach(testResults, result => {
          Object(__WEBPACK_IMPORTED_MODULE_20__utils_RequestUtil__["a" /* mergeMutations */])(modifiedEnvironment.mutations, _.get(result, 'result.environment.mutations'));
          Object(__WEBPACK_IMPORTED_MODULE_20__utils_RequestUtil__["a" /* mergeMutations */])(modifiedGlobals.mutations, _.get(result, 'result.globals.mutations'));
        });

        activeEnvironmentId && Object(__WEBPACK_IMPORTED_MODULE_18__modules_services_VariableSessionService__["f" /* updateEntityWithSession */])(activeEnvSessionId, modifiedEnvironment).
        catch(err => {
          console.warn('prerequest script: Error while getting environment session from db', err);
        });

        Object(__WEBPACK_IMPORTED_MODULE_18__modules_services_VariableSessionService__["f" /* updateEntityWithSession */])(activeGlobalSessionId, modifiedGlobals).
        catch(err => {
          console.warn('prerequest script: Error while getting globals session from db', err);
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

    __WEBPACK_IMPORTED_MODULE_6__controllers_RuntimeBridge__["a" /* default */].startRun(runnerOptions, runOptions, runMetaData, collection, runCallbacks).
    then(runId => {
      if (this.get('runLinkID')) {
        __WEBPACK_IMPORTED_MODULE_6__controllers_RuntimeBridge__["a" /* default */].disposeRun(this.get('runLinkID'));
      }
      this.set('runLinkID', runId);
    });
  },

  getDummyFormDataHeader: function () {
    var boundary = 'multipart/form-data; boundary=' + this.getDummyFormDataBoundary();
    return boundary;
  },

  generateHTTPRequest: async function () {
    var method = this.get('method');
    if (!method) {
      method = 'get';
    }
    method = method.toUpperCase();

    var httpVersion = 'HTTP/1.1';

    var url = await this.getURLForSnippet();

    var hostAndPath = this.splitUrlIntoHostAndPath(url);

    var path = hostAndPath.path;
    var host = hostAndPath.host;

    // to escape html escape sequences
    path = path.replace(/&/g, '&amp;');

    var headers = await this.getXhrHeaders();

    var dataMode = this.get('body').get('dataMode');

    if (__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].isMethodWithBody(method)) {
      if (dataMode === 'params') {
        headers = this.setHeaderInArray(headers, 'Content-Type', this.getDummyFormDataHeader());
      }
    }

    var hasBody = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].isMethodWithBody(method);
    var body;

    if (hasBody) {
      body = await this.getRequestBodyPreview();
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
        this.get('body').set('data', __WEBPACK_IMPORTED_MODULE_16__utils_vkbeautify__["a" /* default */].xml(oldBody, null, true));
      }
    }
    catch (e) {
      console.warn('Could not beautify. Invalid JSON or XML');
    }
  },

  getRequestBodyPreview: async function () {
    var body = this.get('body');
    var dataMode = body.get('dataMode');
    var method = this.get('method');
    if (!__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].isMethodWithBody(method)) {
      return false;
    }

    if (dataMode === 'raw') {
      var rawBodyData = body.get('data');

      rawBodyData = __WEBPACK_IMPORTED_MODULE_12__utils_ResolveVariableHelper__["a" /* default */].resolve(rawBodyData, (await this.getVariablesMap()));
      return rawBodyData;
    } else
    if (dataMode === 'params') {
      var formDataBody = await this.getFormDataPreview(false);
      if (formDataBody !== false) {
        return formDataBody;
      } else
      {
        return false;
      }
    } else
    if (dataMode === 'urlencoded') {
      var urlEncodedBodyData = await this.getUrlEncodedBody(false);
      if (urlEncodedBodyData !== false) {
        return urlEncodedBodyData;
      } else
      {
        return false;
      }
    }
  },

  getFormDataPreview: async function (getDisabled) {
    var params = this.get('body').get('data');
    if (!params) {
      return '';
    }

    let paramsCount = params.length,
    body = '',
    variablesMap = await this.getVariablesMap(),
    boundary = this.getDummyFormDataBoundary();

    for (var i = 0; i < paramsCount; i++) {
      var param = params[i];

      // two hyphens before actual boundary (https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html)
      body += '--' + boundary;
      if (param.type === 'file') {
        body += '\nContent-Disposition: form-data; name="' + __WEBPACK_IMPORTED_MODULE_12__utils_ResolveVariableHelper__["a" /* default */].resolve(param.key, variablesMap) + '"; filename=';
        body += '"' + __WEBPACK_IMPORTED_MODULE_12__utils_ResolveVariableHelper__["a" /* default */].resolve(_.get(param, 'value[0].name'), variablesMap) + '"\n';
        body += 'Content-Type: ' + __WEBPACK_IMPORTED_MODULE_12__utils_ResolveVariableHelper__["a" /* default */].resolve(_.get(param, 'value[0].type'), variablesMap);
        body += '\n\n\n';
      }

      // if(param.type === "text") {
      else {
          body += '\nContent-Disposition: form-data; name="' + __WEBPACK_IMPORTED_MODULE_12__utils_ResolveVariableHelper__["a" /* default */].resolve(param.key, variablesMap) + '"\n\n';
          body += __WEBPACK_IMPORTED_MODULE_12__utils_ResolveVariableHelper__["a" /* default */].resolve(param.value, variablesMap);
          body += '\n';
        }
    }

    // two hyphens before and after actual boundary (https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html)
    body += '--' + boundary + '--';
    return body;
  },

  getUrlEncodedBody: async function (getDisabled) {
    return await this.get('body').getUrlEncodedBody(getDisabled);
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


    Object(__WEBPACK_IMPORTED_MODULE_8__modules_pipelines_user_action__["a" /* default */])(responseEvent).
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
var Response = __WEBPACK_IMPORTED_MODULE_17_backbone___default.a.Model.extend( /** @lends Response.prototype */{
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

/***/ 1083:
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

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(1096);
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
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
      // Disabled?
      if (!debug.enabled) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @api public
  */


  function disable() {
    createDebug.enable('');
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

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
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
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;



/***/ }),

/***/ 1096:
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
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
  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
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
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
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
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
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
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 1138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__in_app_messaging_InAppController__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_json_rule_engine__ = __webpack_require__(2092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_json_rule_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_json_rule_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_services_LessonAPIService__ = __webpack_require__(1139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_LessonContextController__ = __webpack_require__(2115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_UIEventService__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_FlattenObjectHelper__ = __webpack_require__(2116);







/**
                                                                 * LessonManager manages the lifecycle of a lesson and its steps.
                                                                 * It manages when to go to next/previous lesson, how to set initial
                                                                 * context for lesson and how to build context for each lesson step.
                                                                 *
                                                                 */let
LessonManager = class LessonManager {

  /**
                                      * To start a lesson, service should first be informed about starting of the lesson.
                                      * Initial context for the app is being set using viewContext and any required context
                                      * is also being consumed to show the first step.
                                      *
                                      * In the end it calls the in-app notification controller to show the step
                                      * @param lesson {object} - Lesson which needs to be started
                                      *
                                      */
  startLesson(lesson) {
    this.currentLesson = new __WEBPACK_IMPORTED_MODULE_1__postman_json_rule_engine__["Lesson"](lesson);
    this.removeListeners(this.eventDisposers);
    Object(__WEBPACK_IMPORTED_MODULE_2__modules_services_LessonAPIService__["d" /* reportLessonStart */])(lesson.id, () => {
      this.stepIndex = 0;

      // Setting initial context for lesson
      _.forOwn(lesson.viewContext, (value, key) => {
        Object(__WEBPACK_IMPORTED_MODULE_3__controllers_LessonContextController__["b" /* ContextSetter */])(key, value);
      });

      let dismissLessonDisposers = _.map(lesson.dismiss_on, event => {
        return __WEBPACK_IMPORTED_MODULE_4__services_UIEventService__["a" /* default */].subscribe(event, () => {
          this.removeListeners(_.concat(dismissLessonDisposers, this.eventDisposers));
          this.dismissLesson();
        }, { once: true });
      });
      this.nextLessonStep(this.getContextFromConsumer(lesson.context));
    });
  }

  /**
     * Moves to the next lesson step
     * @param {*} context - Context of the step
     */
  nextLessonStep(context) {
    this.stepIndex++;
    this.currentLesson.next(context, (err, step, c) => {
      if (!step) {
        return this.endLesson(this.currentLesson.lesson);
      }
      this.handleLessonStep(step, c);
    });
  }

  /**
     * moves to the previous lesson step
     */
  previousLessonStep() {
    this.stepIndex--;
    this.currentLesson.previous((err, step) => {
      this.handleLessonStep(step);
    });
  }

  /**
     * Ends the lesson by reporting to the service
     */
  endLesson(lesson) {
    Object(__WEBPACK_IMPORTED_MODULE_2__modules_services_LessonAPIService__["c" /* reportLessonEnd */])(lesson.id);
    this.currentLesson = null;
  }

  removeListeners(eventDisposers) {
    _.forEach(eventDisposers, eventDisposer => {
      eventDisposer && eventDisposer();
    });
    this.eventDisposers = [];
  }

  /**
     * Fetches context from the app for the lesson step.
     *
     * @param {Object} activeStepContext - Context required from the app
     * @param {Object} eventContext - Context which was built using the events
     */
  getContextFromConsumer(activeStepContext, eventContext = {}) {
    let finalContext = _.reduce(activeStepContext, (acc, context) => {
      acc[context] = Object(__WEBPACK_IMPORTED_MODULE_3__controllers_LessonContextController__["a" /* ContextGetter */])(context);
      return acc;
    }, eventContext);
    return Object(__WEBPACK_IMPORTED_MODULE_5__utils_FlattenObjectHelper__["a" /* default */])(finalContext);
  }

  dismissLesson() {
    pm.mediator.trigger('dismissLesson');
  }

  /**
     * Handles context building and transitioning of steps based on nextTriggeredBy and
     * previousTriggeredBy events. It can also dismiss the step (as a result dismissing the lesson)
     * based on dismissOn property.
     *
     * @param {Object} activeLessonStep - A lesson step that needs to be shown
     */
  handleLessonStep(activeLessonStep) {
    let notification = activeLessonStep.notification,
    groupContextKeys = _.reduce(activeLessonStep.context, (acc, context) => {
      if (_.startsWith(context, 'event#')) {
        acc.event.push(_.trimStart(context, 'event#'));
        return acc;
      }
      acc.static.push(context);
      return acc;
    }, { event: [], static: [] }),
    eventContext = {},
    contextEventDisposers,
    nextTriggerDisposers,
    previousTriggerDisposers,
    dismissStepDisposers;

    contextEventDisposers = _.map(groupContextKeys.event, event => {
      return __WEBPACK_IMPORTED_MODULE_4__services_UIEventService__["a" /* default */].subscribe(event, eventValue => {
        eventContext[event] = eventValue;
      });
    });

    nextTriggerDisposers = _.map(activeLessonStep.nextTriggeredBy, event => {
      return __WEBPACK_IMPORTED_MODULE_4__services_UIEventService__["a" /* default */].subscribe(event, () => {
        this.removeListeners(this.eventDisposers);
        let stepContext = this.getContextFromConsumer(groupContextKeys.static, eventContext);
        Object(__WEBPACK_IMPORTED_MODULE_2__modules_services_LessonAPIService__["e" /* reportLessonStepComplete */])(activeLessonStep.id, stepContext);
        this.nextLessonStep(stepContext);
      }, { once: true });
    });


    previousTriggerDisposers = _.map(activeLessonStep.previousTriggeredBy, event => {
      return __WEBPACK_IMPORTED_MODULE_4__services_UIEventService__["a" /* default */].subscribe(event, () => {
        this.removeListeners(this.eventDisposers);
        this.previousLessonStep();
      }, { once: true });
    });

    dismissStepDisposers = _.map(activeLessonStep.dismissOn, event => {
      return __WEBPACK_IMPORTED_MODULE_4__services_UIEventService__["a" /* default */].subscribe(event, () => {
        this.removeListeners(this.eventDisposers);
        this.dismissLesson();
      }, { once: true });
    });


    this.eventDisposers = _.concat(
    contextEventDisposers,
    nextTriggerDisposers,
    previousTriggerDisposers,
    dismissStepDisposers);

    _.set(notification, 'message.headerText', `Step ${this.stepIndex}`);
    _.set(notification, 'dismiss.event', 'dismissLesson');
    setTimeout(() => {
      Object(__WEBPACK_IMPORTED_MODULE_0__in_app_messaging_InAppController__["a" /* addMessageToQueue */])(notification, { source: 'onBoardingLesson' });
    }, 300);
  }};


/* harmony default export */ __webpack_exports__["a"] = (new LessonManager());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["b"] = fetchLessons;
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchLesson;
/* unused harmony export fetchLessonFromPlan */
/* harmony export (immutable) */ __webpack_exports__["d"] = reportLessonStart;
/* harmony export (immutable) */ __webpack_exports__["c"] = reportLessonEnd;
/* harmony export (immutable) */ __webpack_exports__["e"] = reportLessonStepComplete;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_CurrentUserController__ = __webpack_require__(123);



const SKILL_SDK_VERSION = '1.0.0';

/**
                                    *
                                    * @param {*} lessonId Id of the lesson that needs to be fetched
                                    * @param {*} onSuccess
                                    * @param {*} onError
                                    */
function fetchLessons(onSuccess, onError) {
  let url = `${pm.skillServiceUrl}/lesson?progress=true&__skill_sdk_version=${SKILL_SDK_VERSION}`;

  __WEBPACK_IMPORTED_MODULE_1__controllers_CurrentUserController__["a" /* default */].get().
  then(user => {
    return __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__["a" /* default */].request(url, {
      headers: { 'x-access-token': _.get(user, 'auth.access_token') } });

  }).
  then(({ body }) => onSuccess(body.data)).
  catch(({ error }) => {
    _.isFunction(onError) && onError(error);
  });
}

/**
   *
   * @param {*} lessonId Id of the lesson that needs to be fetched
   * @param {*} onSuccess
   * @param {*} onError
   */
function fetchLesson(lessonId, onSuccess, onError) {

  let url = `${pm.skillServiceUrl}/lesson/${lessonId}?populate=true&__skill_sdk_version=${SKILL_SDK_VERSION}`;
  __WEBPACK_IMPORTED_MODULE_1__controllers_CurrentUserController__["a" /* default */].get().
  then(user => {
    return __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__["a" /* default */].request(url, {
      headers: { 'x-access-token': _.get(user, 'auth.access_token') } });

  }).
  then(({ body }) => onSuccess(body.data)).
  catch(({ error }) => {
    _.isFunction(onError) && onError(error);
  });
}

/**
   *
   */
function fetchLessonFromPlan(onSuccess, onError) {
  let url = `${pm.skillServiceUrl}/lessonplan/peek?__skill_sdk_version=${SKILL_SDK_VERSION}`;
  __WEBPACK_IMPORTED_MODULE_1__controllers_CurrentUserController__["a" /* default */].get().
  then(user => {
    return __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__["a" /* default */].request(url, {
      headers: { 'x-access-token': _.get(user, 'auth.access_token') } });

  }).
  then(({ body }) => body.data && onSuccess(body.data)).
  catch(({ error }) => {
    _.isFunction(onError) && onError(error);
  });
}


/**
   *
   * @param {*} data
   * @param {*} onSuccess
   * @param {*} onError
   *
   * Reports progress of a lesson back to service
   */
function _reportLessonProgress(data, onSuccess, onError) {

  let url = `${pm.skillServiceUrl}/progress?__skill_sdk_version=${SKILL_SDK_VERSION}`;
  __WEBPACK_IMPORTED_MODULE_1__controllers_CurrentUserController__["a" /* default */].get().
  then(user => {
    return __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__["a" /* default */].request(url, {
      method: 'POST',
      headers: {
        'x-access-token': _.get(user, 'auth.access_token'),
        'Content-Type': 'application/json' },

      body: JSON.stringify(data) });

  }).
  then(onSuccess).
  catch(({ error }) => {
    _.isFunction(onError) && onError(error);
  });

}

/**
   *
   * @param {String} lessonId - Id of the lesson
   * @param {Function} onSuccess - Success callback
   * @param {Function} onError - Error callback
   */
function reportLessonStart(lessonId, onSuccess, onError) {
  _reportLessonProgress({
    type: 'lesson',
    entityId: String(lessonId) },
  onSuccess, onError);

}

/**
   *
   * @param {*} lessonId - Id of the lesson
   * @param {Function} onSuccess - Success callback
   * @param {Function} onError - Error callback
   */
function reportLessonEnd(lessonId, onSuccess, onError) {
  _reportLessonProgress({
    type: 'lesson',
    entityId: lessonId,
    completed: true },
  onSuccess, onError);
}

/**
   *
   * @param {String} lessonStepId - Id of the lesson step
   * @param {Object} context - Context for that lesson step
   * @param {Function} onSuccess - Success callback
   * @param {Function} onError - Error callback
   */
function reportLessonStepComplete(lessonStepId, context, onSuccess, onError) {
  _reportLessonProgress({
    type: 'lessonstep',
    entityId: lessonStepId,
    context },
  onSuccess, onError);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1141);


/***/ }),

/***/ 1141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init__ = __webpack_require__(1149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_requester_scss__ = __webpack_require__(2124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_requester_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_requester_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable__ = __webpack_require__(1083);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_TelemetryHelpers__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_empty_states_CrashHandler__ = __webpack_require__(443);









const Requester = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: () => __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, 2522)),
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

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__boot_bootConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot_bootLogger__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boot_bootMessaging__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boot_bootWLModels__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boot_bootDBWatcher__ = __webpack_require__(1463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__boot_bootAppModels__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boot_bootSettings__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boot_bootTelemetry__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boot_bootIndependentServices__ = __webpack_require__(2065);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__boot_bootSession__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__boot_bootRequester__ = __webpack_require__(2074);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__boot_booted__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__boot_bootThemeManager__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__boot_bootConfigurations__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__boot_bootInAppMessage__ = __webpack_require__(2089);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__boot_bootRuntimeListeners__ = __webpack_require__(2119);



















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

/***/ 1463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_DBResourceWatcher__ = __webpack_require__(826);


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

/***/ 175:
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(33);
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

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
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
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
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
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
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
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(1095)(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 2065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_PmConsole__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_Shortcuts__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ToastManager__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_helpers_OAuth2Tokens__ = __webpack_require__(2067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_cookies_CookieManager__ = __webpack_require__(2068);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_helpers_OAuth2Manager__ = __webpack_require__(2069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_ElectronContextMenu__ = __webpack_require__(2071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_collections_CollectionClipboard__ = __webpack_require__(2073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_Toasts__ = __webpack_require__(631);











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

/***/ 2067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone__ = __webpack_require__(43);
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

/***/ 2068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async__ = __webpack_require__(52);
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

/***/ 2069:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OAuth2TokenFetcher__ = __webpack_require__(2070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_ModelService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone__ = __webpack_require__(43);
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

/***/ 2070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ModelToSdkTransformer__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_postman_collection__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ResolveVariableHelper__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_backbone__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_VariableSessionHelper__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_VariableSessionService__ = __webpack_require__(139);










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

/***/ 2071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronContextMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_DraftJsHelper__ = __webpack_require__(2072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_VariableSessionService__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_VariableSessionHelper__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(29);
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
    this.activeComponent = null;
    this.attachEventListeners();
    window.addEventListener('contextmenu', e => {
      e.preventDefault();

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
    this.currentSelection = value;
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
    requesterTab;

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


    if (!_.isEmpty(this.currentSelection)) {
      this.buildEnvironmentMenu(menu, this.currentSelection);
      this.buildGlobalMenu(menu, this.currentSelection);
      this.buildGenericMenu(menu);
      this.buildEncodeDecodeMenu(menu);
      this.currentSelection = '';
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

/***/ 2072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_draft_js_lib_getContentStateFragment__ = __webpack_require__(391);
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

/***/ 2073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionClipboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_pipelines_user_action__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__ = __webpack_require__(45);

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

/***/ 2074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootStore__ = __webpack_require__(2075);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootShortcuts__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootSyncProxy__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bootTab__ = __webpack_require__(2077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_UIZoom__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_ProxyListManager__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_AppUpdateNotifier__ = __webpack_require__(2080);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_tcp_ElectronTCPReader__ = __webpack_require__(2082);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_requests_CertificateManager__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_ProtocolHandler__ = __webpack_require__(2083);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPathManager__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_ModelEventToUIEventService__ = __webpack_require__(2084);














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
  __WEBPACK_IMPORTED_MODULE_10__models_ProtocolHandler__["a" /* default */].initialize],
  err => {
    _.assign(window.pm, {
      proxyListManager: new __WEBPACK_IMPORTED_MODULE_6__controllers_ProxyListManager__["a" /* default */](), // [settings]
      certificateManager: new __WEBPACK_IMPORTED_MODULE_9__models_requests_CertificateManager__["a" /* default */](), // [settings]
      uiZoom: new __WEBPACK_IMPORTED_MODULE_5__controllers_UIZoom__["a" /* default */](), // [settings]
      updateNotifier: new __WEBPACK_IMPORTED_MODULE_7__models_AppUpdateNotifier__["a" /* default */](), // [appwindow, settings, app]
      tcpReader: new __WEBPACK_IMPORTED_MODULE_8__models_tcp_ElectronTCPReader__["a" /* default */](), // [settings, appwindow]
      xPathManager: __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPathManager__["a" /* default */] });


    __WEBPACK_IMPORTED_MODULE_12__services_ModelEventToUIEventService__["a" /* default */].initialize();
    pm.appWindow.sendToElectron({ event: 'postmanInitialized' }); // Initialize protocol handline need revisit

    err ? pm.logger.error('Requester~boot - Failed', err) : pm.logger.info('Requester~boot - Success');

    return cb && cb(err);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (bootRequester);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2075:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_store_handler__ = __webpack_require__(2076);
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

/***/ 2076:
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

/***/ 2077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_tabs_TabManager__ = __webpack_require__(2078);


/**
                                                        *
                                                        * @param {*} cb
                                                        */
function bootTab(cb) {
  _.assign(window.pm, { tabManager: new __WEBPACK_IMPORTED_MODULE_0__models_tabs_TabManager__["a" /* default */]() });
  pm.logger.info('Tab~boot - Success');
  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootTab);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__requests_Request__ = __webpack_require__(1068);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_CollectionController__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_UserController__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_CollectionPermissionService__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_backbone__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_backbone__);











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
var Tab = __WEBPACK_IMPORTED_MODULE_9_backbone___default.a.Model.extend( /** @lends Tab.prototype */{
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
var TabManager = __WEBPACK_IMPORTED_MODULE_9_backbone___default.a.Collection.extend( /** @lends TabManager.prototype */{
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

    // pm.appWindow.trigger('registerInternalEvent', 'nextTab', this.switchToNextTab, this);
    // pm.appWindow.trigger('registerInternalEvent', 'previousTab', this.switchToPreviousTab, this);
    pm.mediator.on('activeRequestChanged', this.handleSaveState);
    pm.mediator.on('request:send', this.engageActiveTab);
    pm.appWindow.trigger('registerInternalEvent', 'saveAllWindowState', this.saveAllWindowState, this);

    this.addNewTab();

    Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["q" /* reaction */])(() => Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace, () => {
      let sessionData = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').sessionData;
      this.loadLastSavedRequests({
        tabs: Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["t" /* toJS */])(sessionData.tabs),
        activeTab: Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["t" /* toJS */])(sessionData.activeTab),
        latestRequestMap: Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["t" /* toJS */])(sessionData.latestRequestMap) });

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
  reorderTab: function (sourceId, destinationId, position) {
    let tabs = _.clone(this.models),
    sourceTab = this.get(sourceId),
    destinationTab = this.get(destinationId);

    if (!sourceTab || !destinationTab) {
      return;
    }

    let sourceIndex = _.indexOf(tabs, sourceTab);
    tabs.splice(sourceIndex, 1);
    let destinationIndex = _.indexOf(tabs, destinationTab),
    insertAfterIndex = position === 'right' ? destinationIndex + 1 : destinationIndex;

    tabs.splice(insertAfterIndex, 0, sourceTab);

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

/***/ 2079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_VariableSessionService__ = __webpack_require__(139);






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

  // @TODO Not being used, remove this
  getFormDataForCurl: async function () {
    var dataAsObjects = this.get('data') || [];
    var kv, key, value;
    var variablesMap = await this.getVariablesMap();

    var body = '';
    for (var i = 0; i < dataAsObjects.length; i++) {
      key = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(dataAsObjects[i].key, variablesMap);
      value = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(dataAsObjects[i].value, variablesMap);
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
    let environmentId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id,
    globalsId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore').id,
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id;

    return Object(__WEBPACK_IMPORTED_MODULE_4__modules_services_VariableSessionService__["e" /* getVariableSessionMap */])({ environmentId, globalsId, workspaceId });
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

  // @TODO Not being used, remove this
  setTransformedDataAndGetPayload: async function () {
    var dataMode = this.get('dataMode'),
    data = this.get('data'),
    payload = null;

    if (dataMode == 'params') {
      payload = await this.getFormDataForRowsAndSetSerializedData(data);
      this.setBodyParamsString();
    } else
    if (dataMode == 'urlencoded') {
      payload = await this.getUrlEncodedData(data);
      this.setBodyParamsString();
    } else
    if (dataMode == 'raw') {
      payload = await this.getRawDataToSend();
    } else
    {
      // binary
      payload = this.get('data');
    }
    return payload;
  },


  // @TODO Not being used, remove this
  getFormDataForRowsAndSetSerializedData: async function (rows) {
    // create a formdata object for an array of rows
    if (!rows) {
      return null;
    }
    var transformedData = [],
    serializedData = [],
    paramsBodyData = new FormData(),
    count = rows.length,
    row,key,value,
    variablesMap = await this.getVariablesMap();

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

        key = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(key, variablesMap);

        value = row.value;

        if (row.type !== 'file') {
          value = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(value, variablesMap);
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

  // @TODO Not being used, remove this
  getUrlEncodedData: async function (data) {
    var transformedData = [];
    let encodedData = '';
    var variablesMap = await this.getVariablesMap();

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

      key = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(key, variablesMap);
      key = encodeURIComponent(key);
      key = key.replace(/%20/g, '+');

      value = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(value, variablesMap);
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

  // @TODO Not being used, remove this
  getBodyForCurl: async function () {
    var dataMode = this.get('dataMode');
    var preview;

    if (dataMode !== 'params' && dataMode !== 'urlencoded') {
      // raw or binary
      var data = this.get('data');

      // if not a string, return without -d
      if (typeof data !== 'string') {
        return '';
      }
      preview = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(data, (await this.getVariablesMap()));
      preview = preview.replace(/'/g, '\'\\\'\'');
      return ' -d \'' + preview + '\'';
    } else
    if (dataMode === 'params') {
      return await this.getFormDataForCurl();
    } else
    if (dataMode === 'urlencoded') {
      return await this.getUrlEncodedBodyForCurl();
    }
  },

  // @TODO Not being used, remove this
  getUrlEncodedBodyForCurl: async function () {
    let data = this.get('data');
    let variablesMap = await this.getVariablesMap();
    let enabledParams = _.filter(data, param => {
      return !(param.enabled === false);
    });

    let retVal = _.map(enabledParams, param => {
      return __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].encode(__WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(param.key, variablesMap)) +
      '=' +
      __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].encode(__WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(param.value, variablesMap));
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
  getUrlEncodedBody: async function () {
    var rows, count, j;
    var row, key, value;
    var urlEncodedBodyData = '';
    var transformedData = [];
    var variablesMap = await this.getVariablesMap();

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

          value = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(value, variablesMap);
          value = encodeURIComponent(value);
          value = value.replace(/%20/g, '+');

          key = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(key, variablesMap);
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

  // @TODO Not being used, remove this
  getRawDataToSend: async function () {
    var tData = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(this.get('data'), (await this.getVariablesMap()));
    this.set('transformedData', tData);
    return tData;
  },

  // TODO Store transformedData
  // @TODO Not being used, remove this
  getFormDataBody: async function () {
    var rows, count, j;
    var i;
    var row, key, value;
    var paramsBodyData = new FormData();
    var transformedData = [];
    var variablesMap = await this.getVariablesMap();

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

          key = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(key, variablesMap);

          value = row.value;
          value = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(value, variablesMap);

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
  // @TODO Not being used, remove this
  setDataForXHR: async function () {
    var mode = this.get('dataMode');
    if (mode === 'params') {
      this.set('data', this.get('dataAsObjects'));
      var formdata = await this.getFormDataBody();
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

      var transformedData = __WEBPACK_IMPORTED_MODULE_3__utils_ResolveVariableHelper__["a" /* default */].resolve(data, (await this.getVariablesMap()));
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

/***/ 2080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_AppSettingsDefaults__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_HttpService__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_ShellHelper__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_domain__ = __webpack_require__(2081);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_domain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_domain__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_InfobarConstants__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controllers_Infobar__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_backbone__ = __webpack_require__(43);
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


var semver = __webpack_require__(383),
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

/***/ 2081:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file should be ES5 compatible
/* eslint prefer-spread:0, no-var:0, prefer-reflect:0, no-magic-numbers:0 */


module.exports = function () {
	// Import Events
	var events = __webpack_require__(33);

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

/***/ 2082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_CurrentUserController__ = __webpack_require__(123);




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

/***/ 2083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_conversion_promisifiedConverter__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_Importer__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_UserController__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_controllers_WindowController__ = __webpack_require__(153);
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

/***/ 2084:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UIEventService__ = __webpack_require__(97);





let allowedEvents = [
'created', 'created_deep', 'updated', 'deleted', 'duplicated', 'shared', 'favorited', 'unfavorited',
'joined', 'left', 'added_dependencies', 'removed_dependencies', 'requestDispatched', 'responseMetaReceived',
'authenticated'],

modelEventHandlers = {
  collection: function (eventProps) {
    switch (eventProps.name) {
      case 'created_deep':
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
      case 'created_deep':
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
      case 'created_deep':
        return createPayload('exampleCreated', eventProps.data);
      case 'deleted':
        return createPayload('exampleDeleted', eventProps.data);}

  },

  request: function (eventProps) {
    switch (eventProps.name) {
      case 'created_deep':
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

/***/ 2089:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__in_app_messaging_InAppController__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__in_app_messaging_message_transformer__ = __webpack_require__(2090);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_APIService__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_NotificationService__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_HttpService__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_postman_collection__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_UIEventService__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_NotificationRequestActionService__ = __webpack_require__(2091);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controllers_PopoverController__ = __webpack_require__(2117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_ExtractDomainFromURLUtil__ = __webpack_require__(2118);
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
        let options = Object(__WEBPACK_IMPORTED_MODULE_2__in_app_messaging_message_transformer__["c" /* transformForToast */])(message);
        pm.toasts[options.level](options.text, options);
      },
      banner: message => {
        __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__["a" /* default */].add(Object(__WEBPACK_IMPORTED_MODULE_2__in_app_messaging_message_transformer__["a" /* transformForBanner */])(message));
        __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__["a" /* default */].show();
      },
      text: message => {
        Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('TextMessageStore').addNotification(message);
      },

      popover: message => {
        Object(__WEBPACK_IMPORTED_MODULE_10__controllers_PopoverController__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__in_app_messaging_message_transformer__["b" /* transformForPopover */])(message), _.get(message, 'message.target'));
      } },


    actionHandlers: {
      appAPI: data => {
        __WEBPACK_IMPORTED_MODULE_8__services_UIEventService__["a" /* default */].publish(data.action);
      },

      openURL: data => {
        pm.app.openExternalLink(data.action);
      },

      openAuthenticatedURL: data => {
        Object(__WEBPACK_IMPORTED_MODULE_4__modules_services_APIService__["t" /* openAuthenticatedRoute */])(data.action);
      },

      makeRequest: (data, notification) => {

        let user = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
        accessToken = _.get(user, 'auth.access_token'),
        string = __WEBPACK_IMPORTED_MODULE_7_postman_collection__["Property"].replaceSubstitutions(JSON.stringify(data.request), notification.variables),
        request = JSON.parse(string),
        headers = request.headers || {},
        domain = Object(__WEBPACK_IMPORTED_MODULE_11__utils_ExtractDomainFromURLUtil__["a" /* default */])(request.url);

        if (_.includes(pm.trustedDomains, domain)) {
          headers = _extends({},
          headers, {
            'x-access-token': accessToken });

        }

        __WEBPACK_IMPORTED_MODULE_6__utils_HttpService__["a" /* default */].request(request.url, {
          method: request.method,
          headers,
          body: JSON.stringify(request.body) }).
        then(({ body }) => {
          Object(__WEBPACK_IMPORTED_MODULE_9__services_NotificationRequestActionService__["a" /* default */])(data, body);
        });
      } },


    eventHandlers: {
      onReceive: (notification, meta) => {
        if (notification.message.type === 'text') {
          return;
        }
        Object(__WEBPACK_IMPORTED_MODULE_5__modules_services_NotificationService__["b" /* sendNotificationEvents */])([{
          notification: notification.id,
          events: [{
            key: 'received',
            value: Date.now(),
            dataType: 'timestamp' }] }],

        meta);
      },

      onView: (notification, meta) => {
        if (notification.message.type === 'text') {
          return;
        }
        Object(__WEBPACK_IMPORTED_MODULE_5__modules_services_NotificationService__["b" /* sendNotificationEvents */])([{
          notification: notification.id,
          events: [{
            key: 'viewed',
            value: Date.now(),
            dataType: 'timestamp' }] }],

        meta);
      },

      onActionClick: (notification, meta) => {
        Object(__WEBPACK_IMPORTED_MODULE_5__modules_services_NotificationService__["b" /* sendNotificationEvents */])([{
          notification: notification.id,
          events: [{
            key: `clicked_${meta.action}`,
            value: Date.now(),
            dataType: 'timestamp' }] }],

        meta);
      },

      onDrop: (notification, meta) => {
        Object(__WEBPACK_IMPORTED_MODULE_5__modules_services_NotificationService__["b" /* sendNotificationEvents */])([{
          notification: notification.id,
          events: [{
            key: 'dropped',
            value: Date.now(),
            dataType: 'timestamp' }] }],

        meta);
      },

      onDismiss: (notification, meta) => {
        Object(__WEBPACK_IMPORTED_MODULE_5__modules_services_NotificationService__["b" /* sendNotificationEvents */])([{
          notification: notification.id,
          events: [{
            key: 'dismissed',
            value: Date.now(),
            dataType: 'timestamp' }] }],

        meta);
      } } });


  Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('NotificationStore');
  pm.logger.info('InAppMessaging~boot - Success');
  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootInAppMessaging);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2090:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["c"] = transformForToast;
/* harmony export (immutable) */ __webpack_exports__["a"] = transformForBanner;
/* harmony export (immutable) */ __webpack_exports__["b"] = transformForPopover;
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
    template: [{
      type: 'string',
      label: _.get(message, 'message.text') }],

    message: _.get(message, 'message.text'),
    primaryAction: _.get(message, 'message.buttons.primary'),
    secondaryAction: _.get(message, 'message.buttons.secondary'),
    isDismissable: !_.get(message, 'dismiss.disabled'),
    onDismiss: _.get(message, 'dismiss.onDismiss'),
    headerText: _.get(message, 'message.headerText'),
    dismissEvent: _.get(message, 'dismiss.event') };

}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIEventService__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lessons_LessonManager__ = __webpack_require__(1138);



/* harmony default export */ __webpack_exports__["a"] = ((buttonAction, responseBody) => {
  let action = buttonAction.action;
  if (action === 'showNextLesson' && responseBody.data) {
    return __WEBPACK_IMPORTED_MODULE_1__lessons_LessonManager__["a" /* default */].startLesson(responseBody.data);
  }
  __WEBPACK_IMPORTED_MODULE_0__UIEventService__["a" /* default */].publish(action, responseBody);
});

/***/ }),

/***/ 2092:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    Lesson: __webpack_require__(2093).Lesson
};


/***/ }),

/***/ 2093:
/***/ (function(module, exports, __webpack_require__) {

const async = __webpack_require__(2094),
    ruleEvaluator = __webpack_require__(2095).RuleEvaluator,
    findNextLessonStepPath = function (lesson, currentLessonStepId, context, cb) {
        // Flow with higher priority are executed before the others
        // In place sort based on the priority of the flows
        if (lesson.lessonsteps[currentLessonStepId].flows) {
            lesson.lessonsteps[currentLessonStepId].flows.sort((flow1, flow2) => {
                if (flow1.priority > flow2.priority) {
                    return -1;
                }
                else if (flow1.priority < flow2.priority) {
                    return 1;
                }

                return 0;
            });

            // detectSeries returns the first value that passes the async truth test
            async.detectSeries(lesson.lessonsteps[currentLessonStepId].flows, function (flow, cb) {
                // Flows with null rule, implies it is the fallback flow
                if (!flow.rule) { return cb(null, false); }

                ruleEvaluator.match(flow.rule, context, (err, matched) => {
                    if (err || !matched) { return cb(null, false); }

                    return cb(null, true);
                });
            }, (err, result) => {
                // If some unexpected error occured or result is undefined, return the lessonstep
                // Result will be undefined if no rule evaluated to true
                if (err || !result) {
                    return cb(null, lesson.lessonsteps[currentLessonStepId].flows
                        .filter((flow) => { return flow.rule === null; })[0].nextLessonstep);
                }

                // If matched result is one of the items in flow
                return cb(null, result.nextLessonstep);
            });
        }
        // No flows, terminating lesson step, next is null
        else {
            return cb(null, null);
        }
    },
    mergeContext = function (accumulatedContext, context) {
        let values = Object.assign([], Object.values(accumulatedContext));

        // eslint-disable-next-line prefer-object-spread
        values.push(Object.assign({}, context));

        return values.reduce((acc, ctx) => {
            return Object.assign(acc, ctx);
        }, {});
    },
    mergeNotificationVariables = function (lessonStep, accumulatedContext) {
        if (lessonStep && lessonStep.action === 'notification') {
            // If originalVariables has been set, backtracking is implied. In this case
            // reset variables to originalVariables
            if (lessonStep.notification.originalVariables) {
                // eslint-disable-next-line prefer-object-spread
                lessonStep.notification.variables = Object.assign({}, lessonStep.notification.originalVariables);
            }
            else {
                // eslint-disable-next-line prefer-object-spread
                lessonStep.notification.originalVariables = Object.assign({}, lessonStep.notification.variables);
            }

            lessonStep.notification.variables = mergeContext(accumulatedContext, lessonStep.notification.variables);
        }
    };

class Lesson {
    constructor (lesson) {
        this.lesson = lesson;
        this.lessonPath = [];
        this.accumulatedContext = {};
    }

    // @todo: Make this private
    push (path, context) {
        if (path) {
            this.lessonPath.push(path);
            this.accumulatedContext[path] = context || {};
        }
    }

    // @todo: Make this private
    pop () {
        let top = this.lessonPath.pop();

        if (top) {
            delete this.accumulatedContext[top];
        }
    }

    // Returns the JSON representing the next LessonStep
    next (context, cb) {
        if (this.lessonPath.length === 0) {
            let firstLesson = null,
                beginsAt = this.lesson.beginsAt;

            // Start the lesson
            beginsAt && this.push(beginsAt, context);

            if (this.lesson && this.lesson.lessonsteps && beginsAt) {
                firstLesson = this.lesson.lessonsteps[beginsAt];
                mergeNotificationVariables(firstLesson, this.accumulatedContext);
            }

            return cb(null, firstLesson, this.accumulatedContext);
        }

        let currentLessonstep = this.lessonPath[this.lessonPath.length - 1];

        findNextLessonStepPath(this.lesson, currentLessonstep,
            mergeContext(this.accumulatedContext, context), (err, nextLessonstepId) => {
                // Push to the stack
                nextLessonstepId && this.push(nextLessonstepId, context);

                if (err || !nextLessonstepId) {
                    return cb(null, null, this.accumulatedContext);
                }

                let nextLesson = this.lesson.lessonsteps[nextLessonstepId];

                mergeNotificationVariables(nextLesson, this.accumulatedContext);

                return cb(null, nextLesson, this.accumulatedContext);
            });
    }

    // Returns the JSON representing the previous LessonStep.
    previous (cb) {
        // pop once for current
        this.pop();
        if (this.lessonPath.length === 0) {
            return cb(null, null, this.accumulatedContext);
        }

        let previousLesson = this.lesson.lessonsteps[this.lessonPath[this.lessonPath.length - 1]];

        mergeNotificationVariables(previousLesson, this.accumulatedContext);

        return cb(null, previousLesson, this.accumulatedContext);
    }
}

module.exports.Lesson = Lesson;


/***/ }),

/***/ 2094:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, process, global, module) {(function (global, factory) {
   true ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.async = global.async || {})));
}(this, (function (exports) { 'use strict';

function slice(arrayLike, start) {
    start = start|0;
    var newLen = Math.max(arrayLike.length - start, 0);
    var newArr = Array(newLen);
    for(var idx = 0; idx < newLen; idx++)  {
        newArr[idx] = arrayLike[start + idx];
    }
    return newArr;
}

/**
 * Creates a continuation function with some arguments already applied.
 *
 * Useful as a shorthand when combined with other control flow functions. Any
 * arguments passed to the returned function are added to the arguments
 * originally passed to apply.
 *
 * @name apply
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {Function} fn - The function you want to eventually apply all
 * arguments to. Invokes with (arguments...).
 * @param {...*} arguments... - Any number of arguments to automatically apply
 * when the continuation is called.
 * @returns {Function} the partially-applied function
 * @example
 *
 * // using apply
 * async.parallel([
 *     async.apply(fs.writeFile, 'testfile1', 'test1'),
 *     async.apply(fs.writeFile, 'testfile2', 'test2')
 * ]);
 *
 *
 * // the same process without using apply
 * async.parallel([
 *     function(callback) {
 *         fs.writeFile('testfile1', 'test1', callback);
 *     },
 *     function(callback) {
 *         fs.writeFile('testfile2', 'test2', callback);
 *     }
 * ]);
 *
 * // It's possible to pass any number of additional arguments when calling the
 * // continuation:
 *
 * node> var fn = async.apply(sys.puts, 'one');
 * node> fn('two', 'three');
 * one
 * two
 * three
 */
var apply = function(fn/*, ...args*/) {
    var args = slice(arguments, 1);
    return function(/*callArgs*/) {
        var callArgs = slice(arguments);
        return fn.apply(null, args.concat(callArgs));
    };
};

var initialParams = function (fn) {
    return function (/*...args, callback*/) {
        var args = slice(arguments);
        var callback = args.pop();
        fn.call(this, args, callback);
    };
};

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
var hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

function fallback(fn) {
    setTimeout(fn, 0);
}

function wrap(defer) {
    return function (fn/*, ...args*/) {
        var args = slice(arguments, 1);
        defer(function () {
            fn.apply(null, args);
        });
    };
}

var _defer;

if (hasSetImmediate) {
    _defer = setImmediate;
} else if (hasNextTick) {
    _defer = process.nextTick;
} else {
    _defer = fallback;
}

var setImmediate$1 = wrap(_defer);

/**
 * Take a sync function and make it async, passing its return value to a
 * callback. This is useful for plugging sync functions into a waterfall,
 * series, or other async functions. Any arguments passed to the generated
 * function will be passed to the wrapped function (except for the final
 * callback argument). Errors thrown will be passed to the callback.
 *
 * If the function passed to `asyncify` returns a Promise, that promises's
 * resolved/rejected state will be used to call the callback, rather than simply
 * the synchronous return value.
 *
 * This also means you can asyncify ES2017 `async` functions.
 *
 * @name asyncify
 * @static
 * @memberOf module:Utils
 * @method
 * @alias wrapSync
 * @category Util
 * @param {Function} func - The synchronous function, or Promise-returning
 * function to convert to an {@link AsyncFunction}.
 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
 * invoked with `(args..., callback)`.
 * @example
 *
 * // passing a regular synchronous function
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(JSON.parse),
 *     function (data, next) {
 *         // data is the result of parsing the text.
 *         // If there was a parsing error, it would have been caught.
 *     }
 * ], callback);
 *
 * // passing a function returning a promise
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(function (contents) {
 *         return db.model.create(contents);
 *     }),
 *     function (model, next) {
 *         // `model` is the instantiated model object.
 *         // If there was an error, this function would be skipped.
 *     }
 * ], callback);
 *
 * // es2017 example, though `asyncify` is not needed if your JS environment
 * // supports async functions out of the box
 * var q = async.queue(async.asyncify(async function(file) {
 *     var intermediateStep = await processFile(file);
 *     return await somePromise(intermediateStep)
 * }));
 *
 * q.push(files);
 */
function asyncify(func) {
    return initialParams(function (args, callback) {
        var result;
        try {
            result = func.apply(this, args);
        } catch (e) {
            return callback(e);
        }
        // if result is Promise object
        if (isObject(result) && typeof result.then === 'function') {
            result.then(function(value) {
                invokeCallback(callback, null, value);
            }, function(err) {
                invokeCallback(callback, err.message ? err : new Error(err));
            });
        } else {
            callback(null, result);
        }
    });
}

function invokeCallback(callback, error, value) {
    try {
        callback(error, value);
    } catch (e) {
        setImmediate$1(rethrow, e);
    }
}

function rethrow(error) {
    throw error;
}

var supportsSymbol = typeof Symbol === 'function';

function isAsync(fn) {
    return supportsSymbol && fn[Symbol.toStringTag] === 'AsyncFunction';
}

function wrapAsync(asyncFn) {
    return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
}

function applyEach$1(eachfn) {
    return function(fns/*, ...args*/) {
        var args = slice(arguments, 1);
        var go = initialParams(function(args, callback) {
            var that = this;
            return eachfn(fns, function (fn, cb) {
                wrapAsync(fn).apply(that, args.concat(cb));
            }, callback);
        });
        if (args.length) {
            return go.apply(this, args);
        }
        else {
            return go;
        }
    };
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

// A temporary value used to identify if the loop should be broken.
// See #1064, #1293
var breakLoop = {};

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

function once(fn) {
    return function () {
        if (fn === null) return;
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}

var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

var getIterator = function (coll) {
    return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
};

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports$1 && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
        return ++i < len ? {value: coll[i], key: i} : null;
    }
}

function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
        var item = iterator.next();
        if (item.done)
            return null;
        i++;
        return {value: item.value, key: i};
    }
}

function createObjectIterator(obj) {
    var okeys = keys(obj);
    var i = -1;
    var len = okeys.length;
    return function next() {
        var key = okeys[++i];
        return i < len ? {value: obj[key], key: key} : null;
    };
}

function iterator(coll) {
    if (isArrayLike(coll)) {
        return createArrayIterator(coll);
    }

    var iterator = getIterator(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
}

function onlyOnce(fn) {
    return function() {
        if (fn === null) throw new Error("Callback was already called.");
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}

function _eachOfLimit(limit) {
    return function (obj, iteratee, callback) {
        callback = once(callback || noop);
        if (limit <= 0 || !obj) {
            return callback(null);
        }
        var nextElem = iterator(obj);
        var done = false;
        var running = 0;
        var looping = false;

        function iterateeCallback(err, value) {
            running -= 1;
            if (err) {
                done = true;
                callback(err);
            }
            else if (value === breakLoop || (done && running <= 0)) {
                done = true;
                return callback(null);
            }
            else if (!looping) {
                replenish();
            }
        }

        function replenish () {
            looping = true;
            while (running < limit && !done) {
                var elem = nextElem();
                if (elem === null) {
                    done = true;
                    if (running <= 0) {
                        callback(null);
                    }
                    return;
                }
                running += 1;
                iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
            }
            looping = false;
        }

        replenish();
    };
}

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name eachOfLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`. The `key` is the item's key, or index in the case of an
 * array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachOfLimit(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, wrapAsync(iteratee), callback);
}

function doLimit(fn, limit) {
    return function (iterable, iteratee, callback) {
        return fn(iterable, limit, iteratee, callback);
    };
}

// eachOf implementation optimized for array-likes
function eachOfArrayLike(coll, iteratee, callback) {
    callback = once(callback || noop);
    var index = 0,
        completed = 0,
        length = coll.length;
    if (length === 0) {
        callback(null);
    }

    function iteratorCallback(err, value) {
        if (err) {
            callback(err);
        } else if ((++completed === length) || value === breakLoop) {
            callback(null);
        }
    }

    for (; index < length; index++) {
        iteratee(coll[index], index, onlyOnce(iteratorCallback));
    }
}

// a generic version of eachOf which can handle array, object, and iterator cases.
var eachOfGeneric = doLimit(eachOfLimit, Infinity);

/**
 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
 * to the iteratee.
 *
 * @name eachOf
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEachOf
 * @category Collection
 * @see [async.each]{@link module:Collections.each}
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each
 * item in `coll`.
 * The `key` is the item's key, or index in the case of an array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
 * var configs = {};
 *
 * async.forEachOf(obj, function (value, key, callback) {
 *     fs.readFile(__dirname + value, "utf8", function (err, data) {
 *         if (err) return callback(err);
 *         try {
 *             configs[key] = JSON.parse(data);
 *         } catch (e) {
 *             return callback(e);
 *         }
 *         callback();
 *     });
 * }, function (err) {
 *     if (err) console.error(err.message);
 *     // configs is now a map of JSON data
 *     doSomethingWith(configs);
 * });
 */
var eachOf = function(coll, iteratee, callback) {
    var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
    eachOfImplementation(coll, wrapAsync(iteratee), callback);
};

function doParallel(fn) {
    return function (obj, iteratee, callback) {
        return fn(eachOf, obj, wrapAsync(iteratee), callback);
    };
}

function _asyncMap(eachfn, arr, iteratee, callback) {
    callback = callback || noop;
    arr = arr || [];
    var results = [];
    var counter = 0;
    var _iteratee = wrapAsync(iteratee);

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

/**
 * Produces a new collection of values by mapping each value in `coll` through
 * the `iteratee` function. The `iteratee` is called with an item from `coll`
 * and a callback for when it has finished processing. Each of these callback
 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
 * `iteratee` passes an error to its callback, the main `callback` (for the
 * `map` function) is immediately called with the error.
 *
 * Note, that since this function applies the `iteratee` to each item in
 * parallel, there is no guarantee that the `iteratee` functions will complete
 * in order. However, the results array will be in the same order as the
 * original `coll`.
 *
 * If `map` is passed an Object, the results will be an Array.  The results
 * will roughly be in the order of the original Objects' keys (but this can
 * vary across JavaScript engines).
 *
 * @name map
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an Array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @example
 *
 * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
 *     // results is now an array of stats for each file
 * });
 */
var map = doParallel(_asyncMap);

/**
 * Applies the provided arguments to each function in the array, calling
 * `callback` after all functions have completed. If you only provide the first
 * argument, `fns`, then it will return a function which lets you pass in the
 * arguments as if it were a single function call. If more arguments are
 * provided, `callback` is required while `args` is still optional.
 *
 * @name applyEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s
 * to all call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument, `fns`, is provided, it will
 * return a function which lets you pass in the arguments as if it were a single
 * function call. The signature is `(..args, callback)`. If invoked with any
 * arguments, `callback` is required.
 * @example
 *
 * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
 *
 * // partial application example:
 * async.each(
 *     buckets,
 *     async.applyEach([enableSearch, updateSchema]),
 *     callback
 * );
 */
var applyEach = applyEach$1(map);

function doParallelLimit(fn) {
    return function (obj, limit, iteratee, callback) {
        return fn(_eachOfLimit(limit), obj, wrapAsync(iteratee), callback);
    };
}

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
var mapLimit = doParallelLimit(_asyncMap);

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
var mapSeries = doLimit(mapLimit, 1);

/**
 * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
 *
 * @name applyEachSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.applyEach]{@link module:ControlFlow.applyEach}
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s to all
 * call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument is provided, it will return
 * a function which lets you pass in the arguments as if it were a single
 * function call.
 */
var applyEachSeries = applyEach$1(mapSeries);

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

/**
 * Determines the best order for running the {@link AsyncFunction}s in `tasks`, based on
 * their requirements. Each function can optionally depend on other functions
 * being completed first, and each function is run as soon as its requirements
 * are satisfied.
 *
 * If any of the {@link AsyncFunction}s pass an error to their callback, the `auto` sequence
 * will stop. Further tasks will not execute (so any other functions depending
 * on it will not run), and the main `callback` is immediately called with the
 * error.
 *
 * {@link AsyncFunction}s also receive an object containing the results of functions which
 * have completed so far as the first argument, if they have dependencies. If a
 * task function has no dependencies, it will only be passed a callback.
 *
 * @name auto
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Object} tasks - An object. Each of its properties is either a
 * function or an array of requirements, with the {@link AsyncFunction} itself the last item
 * in the array. The object's key of a property serves as the name of the task
 * defined by that property, i.e. can be used when specifying requirements for
 * other tasks. The function receives one or two arguments:
 * * a `results` object, containing the results of the previously executed
 *   functions, only passed if the task has any dependencies,
 * * a `callback(err, result)` function, which must be called when finished,
 *   passing an `error` (which can be `null`) and the result of the function's
 *   execution.
 * @param {number} [concurrency=Infinity] - An optional `integer` for
 * determining the maximum number of tasks that can be run in parallel. By
 * default, as many as possible.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback. Results are always returned; however, if an
 * error occurs, no further `tasks` will be performed, and the results object
 * will only contain partial results. Invoked with (err, results).
 * @returns undefined
 * @example
 *
 * async.auto({
 *     // this function will just be passed a callback
 *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
 *     showData: ['readData', function(results, cb) {
 *         // results.readData is the file's contents
 *         // ...
 *     }]
 * }, callback);
 *
 * async.auto({
 *     get_data: function(callback) {
 *         console.log('in get_data');
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         console.log('in make_folder');
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: ['get_data', 'make_folder', function(results, callback) {
 *         console.log('in write_file', JSON.stringify(results));
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(results, callback) {
 *         console.log('in email_link', JSON.stringify(results));
 *         // once the file is written let's email a link to it...
 *         // results.write_file contains the filename returned by write_file.
 *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
 *     }]
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('results = ', results);
 * });
 */
var auto = function (tasks, concurrency, callback) {
    if (typeof concurrency === 'function') {
        // concurrency is optional, shift the args.
        callback = concurrency;
        concurrency = null;
    }
    callback = once(callback || noop);
    var keys$$1 = keys(tasks);
    var numTasks = keys$$1.length;
    if (!numTasks) {
        return callback(null);
    }
    if (!concurrency) {
        concurrency = numTasks;
    }

    var results = {};
    var runningTasks = 0;
    var hasError = false;

    var listeners = Object.create(null);

    var readyTasks = [];

    // for cycle detection:
    var readyToCheck = []; // tasks that have been identified as reachable
    // without the possibility of returning to an ancestor task
    var uncheckedDependencies = {};

    baseForOwn(tasks, function (task, key) {
        if (!isArray(task)) {
            // no dependencies
            enqueueTask(key, [task]);
            readyToCheck.push(key);
            return;
        }

        var dependencies = task.slice(0, task.length - 1);
        var remainingDependencies = dependencies.length;
        if (remainingDependencies === 0) {
            enqueueTask(key, task);
            readyToCheck.push(key);
            return;
        }
        uncheckedDependencies[key] = remainingDependencies;

        arrayEach(dependencies, function (dependencyName) {
            if (!tasks[dependencyName]) {
                throw new Error('async.auto task `' + key +
                    '` has a non-existent dependency `' +
                    dependencyName + '` in ' +
                    dependencies.join(', '));
            }
            addListener(dependencyName, function () {
                remainingDependencies--;
                if (remainingDependencies === 0) {
                    enqueueTask(key, task);
                }
            });
        });
    });

    checkForDeadlocks();
    processQueue();

    function enqueueTask(key, task) {
        readyTasks.push(function () {
            runTask(key, task);
        });
    }

    function processQueue() {
        if (readyTasks.length === 0 && runningTasks === 0) {
            return callback(null, results);
        }
        while(readyTasks.length && runningTasks < concurrency) {
            var run = readyTasks.shift();
            run();
        }

    }

    function addListener(taskName, fn) {
        var taskListeners = listeners[taskName];
        if (!taskListeners) {
            taskListeners = listeners[taskName] = [];
        }

        taskListeners.push(fn);
    }

    function taskComplete(taskName) {
        var taskListeners = listeners[taskName] || [];
        arrayEach(taskListeners, function (fn) {
            fn();
        });
        processQueue();
    }


    function runTask(key, task) {
        if (hasError) return;

        var taskCallback = onlyOnce(function(err, result) {
            runningTasks--;
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            }
            if (err) {
                var safeResults = {};
                baseForOwn(results, function(val, rkey) {
                    safeResults[rkey] = val;
                });
                safeResults[key] = result;
                hasError = true;
                listeners = Object.create(null);

                callback(err, safeResults);
            } else {
                results[key] = result;
                taskComplete(key);
            }
        });

        runningTasks++;
        var taskFn = wrapAsync(task[task.length - 1]);
        if (task.length > 1) {
            taskFn(results, taskCallback);
        } else {
            taskFn(taskCallback);
        }
    }

    function checkForDeadlocks() {
        // Kahn's algorithm
        // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
        // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
        var currentTask;
        var counter = 0;
        while (readyToCheck.length) {
            currentTask = readyToCheck.pop();
            counter++;
            arrayEach(getDependents(currentTask), function (dependent) {
                if (--uncheckedDependencies[dependent] === 0) {
                    readyToCheck.push(dependent);
                }
            });
        }

        if (counter !== numTasks) {
            throw new Error(
                'async.auto cannot execute tasks due to a recursive dependency'
            );
        }
    }

    function getDependents(taskName) {
        var result = [];
        baseForOwn(tasks, function (task, key) {
            if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) {
                result.push(key);
            }
        });
        return result;
    }
};

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff';
var rsComboMarksRange = '\\u0300-\\u036f';
var reComboHalfMarksRange = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange = '\\u20d0-\\u20ff';
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
var rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff';
var rsComboMarksRange$1 = '\\u0300-\\u036f';
var reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange$1 = '\\u20d0-\\u20ff';
var rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
var rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$1 + ']';
var rsCombo = '[' + rsComboRange$1 + ']';
var rsFitz = '\\ud83c[\\udffb-\\udfff]';
var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
var rsNonAstral = '[^' + rsAstralRange$1 + ']';
var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?';
var rsOptVar = '[' + rsVarRange$1 + ']?';
var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

var FN_ARGS = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /(=.+)?(\s*)$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

function parseParams(func) {
    func = func.toString().replace(STRIP_COMMENTS, '');
    func = func.match(FN_ARGS)[2].replace(' ', '');
    func = func ? func.split(FN_ARG_SPLIT) : [];
    func = func.map(function (arg){
        return trim(arg.replace(FN_ARG, ''));
    });
    return func;
}

/**
 * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
 * tasks are specified as parameters to the function, after the usual callback
 * parameter, with the parameter names matching the names of the tasks it
 * depends on. This can provide even more readable task graphs which can be
 * easier to maintain.
 *
 * If a final callback is specified, the task results are similarly injected,
 * specified as named parameters after the initial error parameter.
 *
 * The autoInject function is purely syntactic sugar and its semantics are
 * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
 *
 * @name autoInject
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.auto]{@link module:ControlFlow.auto}
 * @category Control Flow
 * @param {Object} tasks - An object, each of whose properties is an {@link AsyncFunction} of
 * the form 'func([dependencies...], callback). The object's key of a property
 * serves as the name of the task defined by that property, i.e. can be used
 * when specifying requirements for other tasks.
 * * The `callback` parameter is a `callback(err, result)` which must be called
 *   when finished, passing an `error` (which can be `null`) and the result of
 *   the function's execution. The remaining parameters name other tasks on
 *   which the task is dependent, and the results from those tasks are the
 *   arguments of those parameters.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback, and a `results` object with any completed
 * task results, similar to `auto`.
 * @example
 *
 * //  The example from `auto` can be rewritten as follows:
 * async.autoInject({
 *     get_data: function(callback) {
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: function(get_data, make_folder, callback) {
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     },
 *     email_link: function(write_file, callback) {
 *         // once the file is written let's email a link to it...
 *         // write_file contains the filename returned by write_file.
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 *
 * // If you are using a JS minifier that mangles parameter names, `autoInject`
 * // will not work with plain functions, since the parameter names will be
 * // collapsed to a single letter identifier.  To work around this, you can
 * // explicitly specify the names of the parameters your task function needs
 * // in an array, similar to Angular.js dependency injection.
 *
 * // This still has an advantage over plain `auto`, since the results a task
 * // depends on are still spread into arguments.
 * async.autoInject({
 *     //...
 *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(write_file, callback) {
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }]
 *     //...
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 */
function autoInject(tasks, callback) {
    var newTasks = {};

    baseForOwn(tasks, function (taskFn, key) {
        var params;
        var fnIsAsync = isAsync(taskFn);
        var hasNoDeps =
            (!fnIsAsync && taskFn.length === 1) ||
            (fnIsAsync && taskFn.length === 0);

        if (isArray(taskFn)) {
            params = taskFn.slice(0, -1);
            taskFn = taskFn[taskFn.length - 1];

            newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
        } else if (hasNoDeps) {
            // no dependencies, use the function as-is
            newTasks[key] = taskFn;
        } else {
            params = parseParams(taskFn);
            if (taskFn.length === 0 && !fnIsAsync && params.length === 0) {
                throw new Error("autoInject task functions require explicit parameters.");
            }

            // remove callback param
            if (!fnIsAsync) params.pop();

            newTasks[key] = params.concat(newTask);
        }

        function newTask(results, taskCb) {
            var newArgs = arrayMap(params, function (name) {
                return results[name];
            });
            newArgs.push(taskCb);
            wrapAsync(taskFn).apply(null, newArgs);
        }
    });

    auto(newTasks, callback);
}

// Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
// used for queues. This implementation assumes that the node provided by the user can be modified
// to adjust the next and last properties. We implement only the minimal functionality
// for queue support.
function DLL() {
    this.head = this.tail = null;
    this.length = 0;
}

function setInitial(dll, node) {
    dll.length = 1;
    dll.head = dll.tail = node;
}

DLL.prototype.removeLink = function(node) {
    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;
    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev;

    node.prev = node.next = null;
    this.length -= 1;
    return node;
};

DLL.prototype.empty = function () {
    while(this.head) this.shift();
    return this;
};

DLL.prototype.insertAfter = function(node, newNode) {
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next) node.next.prev = newNode;
    else this.tail = newNode;
    node.next = newNode;
    this.length += 1;
};

DLL.prototype.insertBefore = function(node, newNode) {
    newNode.prev = node.prev;
    newNode.next = node;
    if (node.prev) node.prev.next = newNode;
    else this.head = newNode;
    node.prev = newNode;
    this.length += 1;
};

DLL.prototype.unshift = function(node) {
    if (this.head) this.insertBefore(this.head, node);
    else setInitial(this, node);
};

DLL.prototype.push = function(node) {
    if (this.tail) this.insertAfter(this.tail, node);
    else setInitial(this, node);
};

DLL.prototype.shift = function() {
    return this.head && this.removeLink(this.head);
};

DLL.prototype.pop = function() {
    return this.tail && this.removeLink(this.tail);
};

DLL.prototype.toArray = function () {
    var arr = Array(this.length);
    var curr = this.head;
    for(var idx = 0; idx < this.length; idx++) {
        arr[idx] = curr.data;
        curr = curr.next;
    }
    return arr;
};

DLL.prototype.remove = function (testFn) {
    var curr = this.head;
    while(!!curr) {
        var next = curr.next;
        if (testFn(curr)) {
            this.removeLink(curr);
        }
        curr = next;
    }
    return this;
};

function queue(worker, concurrency, payload) {
    if (concurrency == null) {
        concurrency = 1;
    }
    else if(concurrency === 0) {
        throw new Error('Concurrency must not be zero');
    }

    var _worker = wrapAsync(worker);
    var numRunning = 0;
    var workersList = [];

    var processingScheduled = false;
    function _insert(data, insertAtFront, callback) {
        if (callback != null && typeof callback !== 'function') {
            throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!isArray(data)) {
            data = [data];
        }
        if (data.length === 0 && q.idle()) {
            // call drain immediately if there are no tasks
            return setImmediate$1(function() {
                q.drain();
            });
        }

        for (var i = 0, l = data.length; i < l; i++) {
            var item = {
                data: data[i],
                callback: callback || noop
            };

            if (insertAtFront) {
                q._tasks.unshift(item);
            } else {
                q._tasks.push(item);
            }
        }

        if (!processingScheduled) {
            processingScheduled = true;
            setImmediate$1(function() {
                processingScheduled = false;
                q.process();
            });
        }
    }

    function _next(tasks) {
        return function(err){
            numRunning -= 1;

            for (var i = 0, l = tasks.length; i < l; i++) {
                var task = tasks[i];

                var index = baseIndexOf(workersList, task, 0);
                if (index === 0) {
                    workersList.shift();
                } else if (index > 0) {
                    workersList.splice(index, 1);
                }

                task.callback.apply(task, arguments);

                if (err != null) {
                    q.error(err, task.data);
                }
            }

            if (numRunning <= (q.concurrency - q.buffer) ) {
                q.unsaturated();
            }

            if (q.idle()) {
                q.drain();
            }
            q.process();
        };
    }

    var isProcessing = false;
    var q = {
        _tasks: new DLL(),
        concurrency: concurrency,
        payload: payload,
        saturated: noop,
        unsaturated:noop,
        buffer: concurrency / 4,
        empty: noop,
        drain: noop,
        error: noop,
        started: false,
        paused: false,
        push: function (data, callback) {
            _insert(data, false, callback);
        },
        kill: function () {
            q.drain = noop;
            q._tasks.empty();
        },
        unshift: function (data, callback) {
            _insert(data, true, callback);
        },
        remove: function (testFn) {
            q._tasks.remove(testFn);
        },
        process: function () {
            // Avoid trying to start too many processing operations. This can occur
            // when callbacks resolve synchronously (#1267).
            if (isProcessing) {
                return;
            }
            isProcessing = true;
            while(!q.paused && numRunning < q.concurrency && q._tasks.length){
                var tasks = [], data = [];
                var l = q._tasks.length;
                if (q.payload) l = Math.min(l, q.payload);
                for (var i = 0; i < l; i++) {
                    var node = q._tasks.shift();
                    tasks.push(node);
                    workersList.push(node);
                    data.push(node.data);
                }

                numRunning += 1;

                if (q._tasks.length === 0) {
                    q.empty();
                }

                if (numRunning === q.concurrency) {
                    q.saturated();
                }

                var cb = onlyOnce(_next(tasks));
                _worker(data, cb);
            }
            isProcessing = false;
        },
        length: function () {
            return q._tasks.length;
        },
        running: function () {
            return numRunning;
        },
        workersList: function () {
            return workersList;
        },
        idle: function() {
            return q._tasks.length + numRunning === 0;
        },
        pause: function () {
            q.paused = true;
        },
        resume: function () {
            if (q.paused === false) { return; }
            q.paused = false;
            setImmediate$1(q.process);
        }
    };
    return q;
}

/**
 * A cargo of tasks for the worker function to complete. Cargo inherits all of
 * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
 * @typedef {Object} CargoObject
 * @memberOf module:ControlFlow
 * @property {Function} length - A function returning the number of items
 * waiting to be processed. Invoke like `cargo.length()`.
 * @property {number} payload - An `integer` for determining how many tasks
 * should be process per round. This property can be changed after a `cargo` is
 * created to alter the payload on-the-fly.
 * @property {Function} push - Adds `task` to the `queue`. The callback is
 * called once the `worker` has finished processing the task. Instead of a
 * single task, an array of `tasks` can be submitted. The respective callback is
 * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
 * @property {Function} saturated - A callback that is called when the
 * `queue.length()` hits the concurrency and further tasks will be queued.
 * @property {Function} empty - A callback that is called when the last item
 * from the `queue` is given to a `worker`.
 * @property {Function} drain - A callback that is called when the last item
 * from the `queue` has returned from the `worker`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke like `cargo.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
 */

/**
 * Creates a `cargo` object with the specified payload. Tasks added to the
 * cargo will be processed altogether (up to the `payload` limit). If the
 * `worker` is in progress, the task is queued until it becomes available. Once
 * the `worker` has completed some tasks, each callback of those tasks is
 * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
 * for how `cargo` and `queue` work.
 *
 * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
 * at a time, cargo passes an array of tasks to a single worker, repeating
 * when the worker is finished.
 *
 * @name cargo
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An asynchronous function for processing an array
 * of queued tasks. Invoked with `(tasks, callback)`.
 * @param {number} [payload=Infinity] - An optional `integer` for determining
 * how many tasks should be processed per round; if omitted, the default is
 * unlimited.
 * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the cargo and inner queue.
 * @example
 *
 * // create a cargo object with payload 2
 * var cargo = async.cargo(function(tasks, callback) {
 *     for (var i=0; i<tasks.length; i++) {
 *         console.log('hello ' + tasks[i].name);
 *     }
 *     callback();
 * }, 2);
 *
 * // add some items
 * cargo.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * cargo.push({name: 'bar'}, function(err) {
 *     console.log('finished processing bar');
 * });
 * cargo.push({name: 'baz'}, function(err) {
 *     console.log('finished processing baz');
 * });
 */
function cargo(worker, payload) {
    return queue(worker, 1, payload);
}

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
 *
 * @name eachOfSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Invoked with (err).
 */
var eachOfSeries = doLimit(eachOfLimit, 1);

/**
 * Reduces `coll` into a single value using an async `iteratee` to return each
 * successive step. `memo` is the initial state of the reduction. This function
 * only operates in series.
 *
 * For performance reasons, it may make sense to split a call to this function
 * into a parallel map, and then use the normal `Array.prototype.reduce` on the
 * results. This function is for situations where each step in the reduction
 * needs to be async; if you can get the data before reducing it, then it's
 * probably a good idea to do so.
 *
 * @name reduce
 * @static
 * @memberOf module:Collections
 * @method
 * @alias inject
 * @alias foldl
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 * @example
 *
 * async.reduce([1,2,3], 0, function(memo, item, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         callback(null, memo + item)
 *     });
 * }, function(err, result) {
 *     // result is now equal to the last value of memo, which is 6
 * });
 */
function reduce(coll, memo, iteratee, callback) {
    callback = once(callback || noop);
    var _iteratee = wrapAsync(iteratee);
    eachOfSeries(coll, function(x, i, callback) {
        _iteratee(memo, x, function(err, v) {
            memo = v;
            callback(err);
        });
    }, function(err) {
        callback(err, memo);
    });
}

/**
 * Version of the compose function that is more natural to read. Each function
 * consumes the return value of the previous function. It is the equivalent of
 * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name seq
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.compose]{@link module:ControlFlow.compose}
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} a function that composes the `functions` in order
 * @example
 *
 * // Requires lodash (or underscore), express3 and dresende's orm2.
 * // Part of an app, that fetches cats of the logged user.
 * // This example uses `seq` function to avoid overnesting and error
 * // handling clutter.
 * app.get('/cats', function(request, response) {
 *     var User = request.models.User;
 *     async.seq(
 *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
 *         function(user, fn) {
 *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
 *         }
 *     )(req.session.user_id, function (err, cats) {
 *         if (err) {
 *             console.error(err);
 *             response.json({ status: 'error', message: err.message });
 *         } else {
 *             response.json({ status: 'ok', message: 'Cats found', data: cats });
 *         }
 *     });
 * });
 */
function seq(/*...functions*/) {
    var _functions = arrayMap(arguments, wrapAsync);
    return function(/*...args*/) {
        var args = slice(arguments);
        var that = this;

        var cb = args[args.length - 1];
        if (typeof cb == 'function') {
            args.pop();
        } else {
            cb = noop;
        }

        reduce(_functions, args, function(newargs, fn, cb) {
            fn.apply(that, newargs.concat(function(err/*, ...nextargs*/) {
                var nextargs = slice(arguments, 1);
                cb(err, nextargs);
            }));
        },
        function(err, results) {
            cb.apply(that, [err].concat(results));
        });
    };
}

/**
 * Creates a function which is a composition of the passed asynchronous
 * functions. Each function consumes the return value of the function that
 * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
 * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name compose
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} an asynchronous function that is the composed
 * asynchronous `functions`
 * @example
 *
 * function add1(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n + 1);
 *     }, 10);
 * }
 *
 * function mul3(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n * 3);
 *     }, 10);
 * }
 *
 * var add1mul3 = async.compose(mul3, add1);
 * add1mul3(4, function (err, result) {
 *     // result now equals 15
 * });
 */
var compose = function(/*...args*/) {
    return seq.apply(null, slice(arguments).reverse());
};

var _concat = Array.prototype.concat;

/**
 * The same as [`concat`]{@link module:Collections.concat} but runs a maximum of `limit` async operations at a time.
 *
 * @name concatLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 */
var concatLimit = function(coll, limit, iteratee, callback) {
    callback = callback || noop;
    var _iteratee = wrapAsync(iteratee);
    mapLimit(coll, limit, function(val, callback) {
        _iteratee(val, function(err /*, ...args*/) {
            if (err) return callback(err);
            return callback(null, slice(arguments, 1));
        });
    }, function(err, mapResults) {
        var result = [];
        for (var i = 0; i < mapResults.length; i++) {
            if (mapResults[i]) {
                result = _concat.apply(result, mapResults[i]);
            }
        }

        return callback(err, result);
    });
};

/**
 * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
 * the concatenated list. The `iteratee`s are called in parallel, and the
 * results are concatenated as they return. There is no guarantee that the
 * results array will be returned in the original order of `coll` passed to the
 * `iteratee` function.
 *
 * @name concat
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 * @example
 *
 * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
 *     // files is now a list of filenames that exist in the 3 directories
 * });
 */
var concat = doLimit(concatLimit, Infinity);

/**
 * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
 *
 * @name concatSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
 * The iteratee should complete with an array an array of results.
 * Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 */
var concatSeries = doLimit(concatLimit, 1);

/**
 * Returns a function that when called, calls-back with the values provided.
 * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
 * [`auto`]{@link module:ControlFlow.auto}.
 *
 * @name constant
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {...*} arguments... - Any number of arguments to automatically invoke
 * callback with.
 * @returns {AsyncFunction} Returns a function that when invoked, automatically
 * invokes the callback with the previous given arguments.
 * @example
 *
 * async.waterfall([
 *     async.constant(42),
 *     function (value, next) {
 *         // value === 42
 *     },
 *     //...
 * ], callback);
 *
 * async.waterfall([
 *     async.constant(filename, "utf8"),
 *     fs.readFile,
 *     function (fileData, next) {
 *         //...
 *     }
 *     //...
 * ], callback);
 *
 * async.auto({
 *     hostname: async.constant("https://server.net/"),
 *     port: findFreePort,
 *     launchServer: ["hostname", "port", function (options, cb) {
 *         startServer(options, cb);
 *     }],
 *     //...
 * }, callback);
 */
var constant = function(/*...values*/) {
    var values = slice(arguments);
    var args = [null].concat(values);
    return function (/*...ignoredArgs, callback*/) {
        var callback = arguments[arguments.length - 1];
        return callback.apply(this, args);
    };
};

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

function _createTester(check, getResult) {
    return function(eachfn, arr, iteratee, cb) {
        cb = cb || noop;
        var testPassed = false;
        var testResult;
        eachfn(arr, function(value, _, callback) {
            iteratee(value, function(err, result) {
                if (err) {
                    callback(err);
                } else if (check(result) && !testResult) {
                    testPassed = true;
                    testResult = getResult(true, value);
                    callback(null, breakLoop);
                } else {
                    callback();
                }
            });
        }, function(err) {
            if (err) {
                cb(err);
            } else {
                cb(null, testPassed ? testResult : getResult(false));
            }
        });
    };
}

function _findGetResult(v, x) {
    return x;
}

/**
 * Returns the first value in `coll` that passes an async truth test. The
 * `iteratee` is applied in parallel, meaning the first iteratee to return
 * `true` will fire the detect `callback` with that result. That means the
 * result might not be the first item in the original `coll` (in terms of order)
 * that passes the test.

 * If order within the original `coll` is important, then look at
 * [`detectSeries`]{@link module:Collections.detectSeries}.
 *
 * @name detect
 * @static
 * @memberOf module:Collections
 * @method
 * @alias find
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 * @example
 *
 * async.detect(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // result now equals the first file in the list that exists
 * });
 */
var detect = doParallel(_createTester(identity, _findGetResult));

/**
 * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name detectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findLimit
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */
var detectLimit = doParallelLimit(_createTester(identity, _findGetResult));

/**
 * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
 *
 * @name detectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findSeries
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */
var detectSeries = doLimit(detectLimit, 1);

function consoleFunc(name) {
    return function (fn/*, ...args*/) {
        var args = slice(arguments, 1);
        args.push(function (err/*, ...args*/) {
            var args = slice(arguments, 1);
            if (typeof console === 'object') {
                if (err) {
                    if (console.error) {
                        console.error(err);
                    }
                } else if (console[name]) {
                    arrayEach(args, function (x) {
                        console[name](x);
                    });
                }
            }
        });
        wrapAsync(fn).apply(null, args);
    };
}

/**
 * Logs the result of an [`async` function]{@link AsyncFunction} to the
 * `console` using `console.dir` to display the properties of the resulting object.
 * Only works in Node.js or in browsers that support `console.dir` and
 * `console.error` (such as FF and Chrome).
 * If multiple arguments are returned from the async function,
 * `console.dir` is called on each argument in order.
 *
 * @name dir
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, {hello: name});
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.dir(hello, 'world');
 * {hello: 'world'}
 */
var dir = consoleFunc('dir');

/**
 * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
 * the order of operations, the arguments `test` and `fn` are switched.
 *
 * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
 * @name doDuring
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.during]{@link module:ControlFlow.during}
 * @category Control Flow
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (...args, callback), where `...args` are the
 * non-error args from the previous callback of `fn`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error if one occurred, otherwise `null`.
 */
function doDuring(fn, test, callback) {
    callback = onlyOnce(callback || noop);
    var _fn = wrapAsync(fn);
    var _test = wrapAsync(test);

    function next(err/*, ...args*/) {
        if (err) return callback(err);
        var args = slice(arguments, 1);
        args.push(check);
        _test.apply(this, args);
    }

    function check(err, truth) {
        if (err) return callback(err);
        if (!truth) return callback(null);
        _fn(next);
    }

    check(null, true);

}

/**
 * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
 * the order of operations, the arguments `test` and `iteratee` are switched.
 *
 * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
 *
 * @name doWhilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - A function which is called each time `test`
 * passes. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped.
 * `callback` will be passed an error and any arguments passed to the final
 * `iteratee`'s callback. Invoked with (err, [results]);
 */
function doWhilst(iteratee, test, callback) {
    callback = onlyOnce(callback || noop);
    var _iteratee = wrapAsync(iteratee);
    var next = function(err/*, ...args*/) {
        if (err) return callback(err);
        var args = slice(arguments, 1);
        if (test.apply(this, args)) return _iteratee(next);
        callback.apply(null, [null].concat(args));
    };
    _iteratee(next);
}

/**
 * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
 * argument ordering differs from `until`.
 *
 * @name doUntil
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */
function doUntil(iteratee, test, callback) {
    doWhilst(iteratee, function() {
        return !test.apply(this, arguments);
    }, callback);
}

/**
 * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
 * is passed a callback in the form of `function (err, truth)`. If error is
 * passed to `test` or `fn`, the main callback is immediately called with the
 * value of the error.
 *
 * @name during
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (callback).
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error, if one occurred, otherwise `null`.
 * @example
 *
 * var count = 0;
 *
 * async.during(
 *     function (callback) {
 *         return callback(null, count < 5);
 *     },
 *     function (callback) {
 *         count++;
 *         setTimeout(callback, 1000);
 *     },
 *     function (err) {
 *         // 5 seconds have passed
 *     }
 * );
 */
function during(test, fn, callback) {
    callback = onlyOnce(callback || noop);
    var _fn = wrapAsync(fn);
    var _test = wrapAsync(test);

    function next(err) {
        if (err) return callback(err);
        _test(check);
    }

    function check(err, truth) {
        if (err) return callback(err);
        if (!truth) return callback(null);
        _fn(next);
    }

    _test(check);
}

function _withoutIndex(iteratee) {
    return function (value, index, callback) {
        return iteratee(value, callback);
    };
}

/**
 * Applies the function `iteratee` to each item in `coll`, in parallel.
 * The `iteratee` is called with an item from the list, and a callback for when
 * it has finished. If the `iteratee` passes an error to its `callback`, the
 * main `callback` (for the `each` function) is immediately called with the
 * error.
 *
 * Note, that since this function applies `iteratee` to each item in parallel,
 * there is no guarantee that the iteratee functions will complete in order.
 *
 * @name each
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEach
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to
 * each item in `coll`. Invoked with (item, callback).
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOf`.
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * // assuming openFiles is an array of file names and saveFile is a function
 * // to save the modified contents of that file:
 *
 * async.each(openFiles, saveFile, function(err){
 *   // if any of the saves produced an error, err would equal that error
 * });
 *
 * // assuming openFiles is an array of file names
 * async.each(openFiles, function(file, callback) {
 *
 *     // Perform operation on file here.
 *     console.log('Processing file ' + file);
 *
 *     if( file.length > 32 ) {
 *       console.log('This file name is too long');
 *       callback('File name too long');
 *     } else {
 *       // Do work to process file here
 *       console.log('File processed');
 *       callback();
 *     }
 * }, function(err) {
 *     // if any of the file processing produced an error, err would equal that error
 *     if( err ) {
 *       // One of the iterations produced an error.
 *       // All processing will now stop.
 *       console.log('A file failed to process');
 *     } else {
 *       console.log('All files have been processed successfully');
 *     }
 * });
 */
function eachLimit(coll, iteratee, callback) {
    eachOf(coll, _withoutIndex(wrapAsync(iteratee)), callback);
}

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
function eachLimit$1(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, _withoutIndex(wrapAsync(iteratee)), callback);
}

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
var eachSeries = doLimit(eachLimit$1, 1);

/**
 * Wrap an async function and ensure it calls its callback on a later tick of
 * the event loop.  If the function already calls its callback on a next tick,
 * no extra deferral is added. This is useful for preventing stack overflows
 * (`RangeError: Maximum call stack size exceeded`) and generally keeping
 * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
 * contained. ES2017 `async` functions are returned as-is -- they are immune
 * to Zalgo's corrupting influences, as they always resolve on a later tick.
 *
 * @name ensureAsync
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - an async function, one that expects a node-style
 * callback as its last argument.
 * @returns {AsyncFunction} Returns a wrapped function with the exact same call
 * signature as the function passed in.
 * @example
 *
 * function sometimesAsync(arg, callback) {
 *     if (cache[arg]) {
 *         return callback(null, cache[arg]); // this would be synchronous!!
 *     } else {
 *         doSomeIO(arg, callback); // this IO would be asynchronous
 *     }
 * }
 *
 * // this has a risk of stack overflows if many results are cached in a row
 * async.mapSeries(args, sometimesAsync, done);
 *
 * // this will defer sometimesAsync's callback if necessary,
 * // preventing stack overflows
 * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
 */
function ensureAsync(fn) {
    if (isAsync(fn)) return fn;
    return initialParams(function (args, callback) {
        var sync = true;
        args.push(function () {
            var innerArgs = arguments;
            if (sync) {
                setImmediate$1(function () {
                    callback.apply(null, innerArgs);
                });
            } else {
                callback.apply(null, innerArgs);
            }
        });
        fn.apply(this, args);
        sync = false;
    });
}

function notId(v) {
    return !v;
}

/**
 * Returns `true` if every element in `coll` satisfies an async test. If any
 * iteratee call returns `false`, the main `callback` is immediately called.
 *
 * @name every
 * @static
 * @memberOf module:Collections
 * @method
 * @alias all
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 * @example
 *
 * async.every(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then every file exists
 * });
 */
var every = doParallel(_createTester(notId, notId));

/**
 * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
 *
 * @name everyLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
var everyLimit = doParallelLimit(_createTester(notId, notId));

/**
 * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
 *
 * @name everySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in series.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
var everySeries = doLimit(everyLimit, 1);

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

function filterArray(eachfn, arr, iteratee, callback) {
    var truthValues = new Array(arr.length);
    eachfn(arr, function (x, index, callback) {
        iteratee(x, function (err, v) {
            truthValues[index] = !!v;
            callback(err);
        });
    }, function (err) {
        if (err) return callback(err);
        var results = [];
        for (var i = 0; i < arr.length; i++) {
            if (truthValues[i]) results.push(arr[i]);
        }
        callback(null, results);
    });
}

function filterGeneric(eachfn, coll, iteratee, callback) {
    var results = [];
    eachfn(coll, function (x, index, callback) {
        iteratee(x, function (err, v) {
            if (err) {
                callback(err);
            } else {
                if (v) {
                    results.push({index: index, value: x});
                }
                callback();
            }
        });
    }, function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, arrayMap(results.sort(function (a, b) {
                return a.index - b.index;
            }), baseProperty('value')));
        }
    });
}

function _filter(eachfn, coll, iteratee, callback) {
    var filter = isArrayLike(coll) ? filterArray : filterGeneric;
    filter(eachfn, coll, wrapAsync(iteratee), callback || noop);
}

/**
 * Returns a new array of all the values in `coll` which pass an async truth
 * test. This operation is performed in parallel, but the results array will be
 * in the same order as the original.
 *
 * @name filter
 * @static
 * @memberOf module:Collections
 * @method
 * @alias select
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @example
 *
 * async.filter(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of the existing files
 * });
 */
var filter = doParallel(_filter);

/**
 * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name filterLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var filterLimit = doParallelLimit(_filter);

/**
 * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
 *
 * @name filterSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results)
 */
var filterSeries = doLimit(filterLimit, 1);

/**
 * Calls the asynchronous function `fn` with a callback parameter that allows it
 * to call itself again, in series, indefinitely.

 * If an error is passed to the callback then `errback` is called with the
 * error, and execution stops, otherwise it will never be called.
 *
 * @name forever
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} fn - an async function to call repeatedly.
 * Invoked with (next).
 * @param {Function} [errback] - when `fn` passes an error to it's callback,
 * this function will be called, and execution stops. Invoked with (err).
 * @example
 *
 * async.forever(
 *     function(next) {
 *         // next is suitable for passing to things that need a callback(err [, whatever]);
 *         // it will result in this function being called again.
 *     },
 *     function(err) {
 *         // if next is called with a value in its first parameter, it will appear
 *         // in here as 'err', and execution will stop.
 *     }
 * );
 */
function forever(fn, errback) {
    var done = onlyOnce(errback || noop);
    var task = wrapAsync(ensureAsync(fn));

    function next(err) {
        if (err) return done(err);
        task(next);
    }
    next();
}

/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
 *
 * @name groupByLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */
var groupByLimit = function(coll, limit, iteratee, callback) {
    callback = callback || noop;
    var _iteratee = wrapAsync(iteratee);
    mapLimit(coll, limit, function(val, callback) {
        _iteratee(val, function(err, key) {
            if (err) return callback(err);
            return callback(null, {key: key, val: val});
        });
    }, function(err, mapResults) {
        var result = {};
        // from MDN, handle object having an `hasOwnProperty` prop
        var hasOwnProperty = Object.prototype.hasOwnProperty;

        for (var i = 0; i < mapResults.length; i++) {
            if (mapResults[i]) {
                var key = mapResults[i].key;
                var val = mapResults[i].val;

                if (hasOwnProperty.call(result, key)) {
                    result[key].push(val);
                } else {
                    result[key] = [val];
                }
            }
        }

        return callback(err, result);
    });
};

/**
 * Returns a new object, where each value corresponds to an array of items, from
 * `coll`, that returned the corresponding key. That is, the keys of the object
 * correspond to the values passed to the `iteratee` callback.
 *
 * Note: Since this function applies the `iteratee` to each item in parallel,
 * there is no guarantee that the `iteratee` functions will complete in order.
 * However, the values for each key in the `result` will be in the same order as
 * the original `coll`. For Objects, the values will roughly be in the order of
 * the original Objects' keys (but this can vary across JavaScript engines).
 *
 * @name groupBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 * @example
 *
 * async.groupBy(['userId1', 'userId2', 'userId3'], function(userId, callback) {
 *     db.findById(userId, function(err, user) {
 *         if (err) return callback(err);
 *         return callback(null, user.age);
 *     });
 * }, function(err, result) {
 *     // result is object containing the userIds grouped by age
 *     // e.g. { 30: ['userId1', 'userId3'], 42: ['userId2']};
 * });
 */
var groupBy = doLimit(groupByLimit, Infinity);

/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
 *
 * @name groupBySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */
var groupBySeries = doLimit(groupByLimit, 1);

/**
 * Logs the result of an `async` function to the `console`. Only works in
 * Node.js or in browsers that support `console.log` and `console.error` (such
 * as FF and Chrome). If multiple arguments are returned from the async
 * function, `console.log` is called on each argument in order.
 *
 * @name log
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, 'hello ' + name);
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.log(hello, 'world');
 * 'hello world'
 */
var log = consoleFunc('log');

/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name mapValuesLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 */
function mapValuesLimit(obj, limit, iteratee, callback) {
    callback = once(callback || noop);
    var newObj = {};
    var _iteratee = wrapAsync(iteratee);
    eachOfLimit(obj, limit, function(val, key, next) {
        _iteratee(val, key, function (err, result) {
            if (err) return next(err);
            newObj[key] = result;
            next();
        });
    }, function (err) {
        callback(err, newObj);
    });
}

/**
 * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
 *
 * Produces a new Object by mapping each value of `obj` through the `iteratee`
 * function. The `iteratee` is called each `value` and `key` from `obj` and a
 * callback for when it has finished processing. Each of these callbacks takes
 * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
 * passes an error to its callback, the main `callback` (for the `mapValues`
 * function) is immediately called with the error.
 *
 * Note, the order of the keys in the result is not guaranteed.  The keys will
 * be roughly in the order they complete, (but this is very engine-specific)
 *
 * @name mapValues
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 * @example
 *
 * async.mapValues({
 *     f1: 'file1',
 *     f2: 'file2',
 *     f3: 'file3'
 * }, function (file, key, callback) {
 *   fs.stat(file, callback);
 * }, function(err, result) {
 *     // result is now a map of stats for each file, e.g.
 *     // {
 *     //     f1: [stats for file1],
 *     //     f2: [stats for file2],
 *     //     f3: [stats for file3]
 *     // }
 * });
 */

var mapValues = doLimit(mapValuesLimit, Infinity);

/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
 *
 * @name mapValuesSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 */
var mapValuesSeries = doLimit(mapValuesLimit, 1);

function has(obj, key) {
    return key in obj;
}

/**
 * Caches the results of an async function. When creating a hash to store
 * function results against, the callback is omitted from the hash and an
 * optional hash function can be used.
 *
 * If no hash function is specified, the first argument is used as a hash key,
 * which may work reasonably if it is a string or a data type that converts to a
 * distinct string. Note that objects and arrays will not behave reasonably.
 * Neither will cases where the other arguments are significant. In such cases,
 * specify your own hash function.
 *
 * The cache of results is exposed as the `memo` property of the function
 * returned by `memoize`.
 *
 * @name memoize
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function to proxy and cache results from.
 * @param {Function} hasher - An optional function for generating a custom hash
 * for storing results. It has all the arguments applied to it apart from the
 * callback, and must be synchronous.
 * @returns {AsyncFunction} a memoized version of `fn`
 * @example
 *
 * var slow_fn = function(name, callback) {
 *     // do something
 *     callback(null, result);
 * };
 * var fn = async.memoize(slow_fn);
 *
 * // fn can now be used as if it were slow_fn
 * fn('some name', function() {
 *     // callback
 * });
 */
function memoize(fn, hasher) {
    var memo = Object.create(null);
    var queues = Object.create(null);
    hasher = hasher || identity;
    var _fn = wrapAsync(fn);
    var memoized = initialParams(function memoized(args, callback) {
        var key = hasher.apply(null, args);
        if (has(memo, key)) {
            setImmediate$1(function() {
                callback.apply(null, memo[key]);
            });
        } else if (has(queues, key)) {
            queues[key].push(callback);
        } else {
            queues[key] = [callback];
            _fn.apply(null, args.concat(function(/*args*/) {
                var args = slice(arguments);
                memo[key] = args;
                var q = queues[key];
                delete queues[key];
                for (var i = 0, l = q.length; i < l; i++) {
                    q[i].apply(null, args);
                }
            }));
        }
    });
    memoized.memo = memo;
    memoized.unmemoized = fn;
    return memoized;
}

/**
 * Calls `callback` on a later loop around the event loop. In Node.js this just
 * calls `process.nextTick`.  In the browser it will use `setImmediate` if
 * available, otherwise `setTimeout(callback, 0)`, which means other higher
 * priority events may precede the execution of `callback`.
 *
 * This is used internally for browser-compatibility purposes.
 *
 * @name nextTick
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.setImmediate]{@link module:Utils.setImmediate}
 * @category Util
 * @param {Function} callback - The function to call on a later loop around
 * the event loop. Invoked with (args...).
 * @param {...*} args... - any number of additional arguments to pass to the
 * callback on the next tick.
 * @example
 *
 * var call_order = [];
 * async.nextTick(function() {
 *     call_order.push('two');
 *     // call_order now equals ['one','two']
 * });
 * call_order.push('one');
 *
 * async.setImmediate(function (a, b, c) {
 *     // a, b, and c equal 1, 2, and 3
 * }, 1, 2, 3);
 */
var _defer$1;

if (hasNextTick) {
    _defer$1 = process.nextTick;
} else if (hasSetImmediate) {
    _defer$1 = setImmediate;
} else {
    _defer$1 = fallback;
}

var nextTick = wrap(_defer$1);

function _parallel(eachfn, tasks, callback) {
    callback = callback || noop;
    var results = isArrayLike(tasks) ? [] : {};

    eachfn(tasks, function (task, key, callback) {
        wrapAsync(task)(function (err, result) {
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            }
            results[key] = result;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}

/**
 * Run the `tasks` collection of functions in parallel, without waiting until
 * the previous function has completed. If any of the functions pass an error to
 * its callback, the main `callback` is immediately called with the value of the
 * error. Once the `tasks` have completed, the results are passed to the final
 * `callback` as an array.
 *
 * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
 * parallel execution of code.  If your tasks do not use any timers or perform
 * any I/O, they will actually be executed in series.  Any synchronous setup
 * sections for each task will happen one after the other.  JavaScript remains
 * single-threaded.
 *
 * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
 * execution of other tasks when a task fails.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 * results from {@link async.parallel}.
 *
 * @name parallel
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 *
 * @example
 * async.parallel([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // the results array will equal ['one','two'] even though
 *     // the second function had a shorter timeout.
 * });
 *
 * // an example using an object instead of an array
 * async.parallel({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equals to: {one: 1, two: 2}
 * });
 */
function parallelLimit(tasks, callback) {
    _parallel(eachOf, tasks, callback);
}

/**
 * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name parallelLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.parallel]{@link module:ControlFlow.parallel}
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 */
function parallelLimit$1(tasks, limit, callback) {
    _parallel(_eachOfLimit(limit), tasks, callback);
}

/**
 * A queue of tasks for the worker function to complete.
 * @typedef {Object} QueueObject
 * @memberOf module:ControlFlow
 * @property {Function} length - a function returning the number of items
 * waiting to be processed. Invoke with `queue.length()`.
 * @property {boolean} started - a boolean indicating whether or not any
 * items have been pushed and processed by the queue.
 * @property {Function} running - a function returning the number of items
 * currently being processed. Invoke with `queue.running()`.
 * @property {Function} workersList - a function returning the array of items
 * currently being processed. Invoke with `queue.workersList()`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke with `queue.idle()`.
 * @property {number} concurrency - an integer for determining how many `worker`
 * functions should be run in parallel. This property can be changed after a
 * `queue` is created to alter the concurrency on-the-fly.
 * @property {Function} push - add a new task to the `queue`. Calls `callback`
 * once the `worker` has finished processing the task. Instead of a single task,
 * a `tasks` array can be submitted. The respective callback is used for every
 * task in the list. Invoke with `queue.push(task, [callback])`,
 * @property {Function} unshift - add a new task to the front of the `queue`.
 * Invoke with `queue.unshift(task, [callback])`.
 * @property {Function} remove - remove items from the queue that match a test
 * function.  The test function will be passed an object with a `data` property,
 * and a `priority` property, if this is a
 * [priorityQueue]{@link module:ControlFlow.priorityQueue} object.
 * Invoked with `queue.remove(testFn)`, where `testFn` is of the form
 * `function ({data, priority}) {}` and returns a Boolean.
 * @property {Function} saturated - a callback that is called when the number of
 * running workers hits the `concurrency` limit, and further tasks will be
 * queued.
 * @property {Function} unsaturated - a callback that is called when the number
 * of running workers is less than the `concurrency` & `buffer` limits, and
 * further tasks will not be queued.
 * @property {number} buffer - A minimum threshold buffer in order to say that
 * the `queue` is `unsaturated`.
 * @property {Function} empty - a callback that is called when the last item
 * from the `queue` is given to a `worker`.
 * @property {Function} drain - a callback that is called when the last item
 * from the `queue` has returned from the `worker`.
 * @property {Function} error - a callback that is called when a task errors.
 * Has the signature `function(error, task)`.
 * @property {boolean} paused - a boolean for determining whether the queue is
 * in a paused state.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke with `queue.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke with `queue.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. No more tasks
 * should be pushed to the queue after calling this function. Invoke with `queue.kill()`.
 */

/**
 * Creates a `queue` object with the specified `concurrency`. Tasks added to the
 * `queue` are processed in parallel (up to the `concurrency` limit). If all
 * `worker`s are in progress, the task is queued until one becomes available.
 * Once a `worker` completes a `task`, that `task`'s callback is called.
 *
 * @name queue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`. Invoked with (task, callback).
 * @param {number} [concurrency=1] - An `integer` for determining how many
 * `worker` functions should be run in parallel.  If omitted, the concurrency
 * defaults to `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the queue.
 * @example
 *
 * // create a queue object with concurrency 2
 * var q = async.queue(function(task, callback) {
 *     console.log('hello ' + task.name);
 *     callback();
 * }, 2);
 *
 * // assign a callback
 * q.drain = function() {
 *     console.log('all items have been processed');
 * };
 *
 * // add some items to the queue
 * q.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * q.push({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 *
 * // add some items to the queue (batch-wise)
 * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
 *     console.log('finished processing item');
 * });
 *
 * // add some items to the front of the queue
 * q.unshift({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 */
var queue$1 = function (worker, concurrency) {
    var _worker = wrapAsync(worker);
    return queue(function (items, cb) {
        _worker(items[0], cb);
    }, concurrency, 1);
};

/**
 * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
 * completed in ascending priority order.
 *
 * @name priorityQueue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`.
 * Invoked with (task, callback).
 * @param {number} concurrency - An `integer` for determining how many `worker`
 * functions should be run in parallel.  If omitted, the concurrency defaults to
 * `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
 * differences between `queue` and `priorityQueue` objects:
 * * `push(task, priority, [callback])` - `priority` should be a number. If an
 *   array of `tasks` is given, all tasks will be assigned the same priority.
 * * The `unshift` method was removed.
 */
var priorityQueue = function(worker, concurrency) {
    // Start with a normal queue
    var q = queue$1(worker, concurrency);

    // Override push to accept second parameter representing priority
    q.push = function(data, priority, callback) {
        if (callback == null) callback = noop;
        if (typeof callback !== 'function') {
            throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!isArray(data)) {
            data = [data];
        }
        if (data.length === 0) {
            // call drain immediately if there are no tasks
            return setImmediate$1(function() {
                q.drain();
            });
        }

        priority = priority || 0;
        var nextNode = q._tasks.head;
        while (nextNode && priority >= nextNode.priority) {
            nextNode = nextNode.next;
        }

        for (var i = 0, l = data.length; i < l; i++) {
            var item = {
                data: data[i],
                priority: priority,
                callback: callback
            };

            if (nextNode) {
                q._tasks.insertBefore(nextNode, item);
            } else {
                q._tasks.push(item);
            }
        }
        setImmediate$1(q.process);
    };

    // Remove unshift function
    delete q.unshift;

    return q;
};

/**
 * Runs the `tasks` array of functions in parallel, without waiting until the
 * previous function has completed. Once any of the `tasks` complete or pass an
 * error to its callback, the main `callback` is immediately called. It's
 * equivalent to `Promise.race()`.
 *
 * @name race
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array containing [async functions]{@link AsyncFunction}
 * to run. Each function can complete with an optional `result` value.
 * @param {Function} callback - A callback to run once any of the functions have
 * completed. This function gets an error or result from the first function that
 * completed. Invoked with (err, result).
 * @returns undefined
 * @example
 *
 * async.race([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // main callback
 * function(err, result) {
 *     // the result will be equal to 'two' as it finishes earlier
 * });
 */
function race(tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
    if (!tasks.length) return callback();
    for (var i = 0, l = tasks.length; i < l; i++) {
        wrapAsync(tasks[i])(callback);
    }
}

/**
 * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
 *
 * @name reduceRight
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reduce]{@link module:Collections.reduce}
 * @alias foldr
 * @category Collection
 * @param {Array} array - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 */
function reduceRight (array, memo, iteratee, callback) {
    var reversed = slice(array).reverse();
    reduce(reversed, memo, iteratee, callback);
}

/**
 * Wraps the async function in another function that always completes with a
 * result object, even when it errors.
 *
 * The result object has either the property `error` or `value`.
 *
 * @name reflect
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function you want to wrap
 * @returns {Function} - A function that always passes null to it's callback as
 * the error. The second argument to the callback will be an `object` with
 * either an `error` or a `value` property.
 * @example
 *
 * async.parallel([
 *     async.reflect(function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff but error ...
 *         callback('bad stuff happened');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     })
 * ],
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = 'bad stuff happened'
 *     // results[2].value = 'two'
 * });
 */
function reflect(fn) {
    var _fn = wrapAsync(fn);
    return initialParams(function reflectOn(args, reflectCallback) {
        args.push(function callback(error, cbArg) {
            if (error) {
                reflectCallback(null, { error: error });
            } else {
                var value;
                if (arguments.length <= 2) {
                    value = cbArg;
                } else {
                    value = slice(arguments, 1);
                }
                reflectCallback(null, { value: value });
            }
        });

        return _fn.apply(this, args);
    });
}

/**
 * A helper function that wraps an array or an object of functions with `reflect`.
 *
 * @name reflectAll
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.reflect]{@link module:Utils.reflect}
 * @category Util
 * @param {Array|Object|Iterable} tasks - The collection of
 * [async functions]{@link AsyncFunction} to wrap in `async.reflect`.
 * @returns {Array} Returns an array of async functions, each wrapped in
 * `async.reflect`
 * @example
 *
 * let tasks = [
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         // do some more stuff but error ...
 *         callback(new Error('bad stuff happened'));
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ];
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = Error('bad stuff happened')
 *     // results[2].value = 'two'
 * });
 *
 * // an example using an object instead of an array
 * let tasks = {
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         callback('two');
 *     },
 *     three: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'three');
 *         }, 100);
 *     }
 * };
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results.one.value = 'one'
 *     // results.two.error = 'two'
 *     // results.three.value = 'three'
 * });
 */
function reflectAll(tasks) {
    var results;
    if (isArray(tasks)) {
        results = arrayMap(tasks, reflect);
    } else {
        results = {};
        baseForOwn(tasks, function(task, key) {
            results[key] = reflect.call(this, task);
        });
    }
    return results;
}

function reject$1(eachfn, arr, iteratee, callback) {
    _filter(eachfn, arr, function(value, cb) {
        iteratee(value, function(err, v) {
            cb(err, !v);
        });
    }, callback);
}

/**
 * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
 *
 * @name reject
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @example
 *
 * async.reject(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of missing files
 *     createFiles(results);
 * });
 */
var reject = doParallel(reject$1);

/**
 * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name rejectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var rejectLimit = doParallelLimit(reject$1);

/**
 * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
 *
 * @name rejectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var rejectSeries = doLimit(rejectLimit, 1);

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$1(value) {
  return function() {
    return value;
  };
}

/**
 * Attempts to get a successful response from `task` no more than `times` times
 * before returning an error. If the task is successful, the `callback` will be
 * passed the result of the successful task. If all attempts fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name retry
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @see [async.retryable]{@link module:ControlFlow.retryable}
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
 * object with `times` and `interval` or a number.
 * * `times` - The number of attempts to make before giving up.  The default
 *   is `5`.
 * * `interval` - The time to wait between retries, in milliseconds.  The
 *   default is `0`. The interval may also be specified as a function of the
 *   retry count (see example).
 * * `errorFilter` - An optional synchronous function that is invoked on
 *   erroneous result. If it returns `true` the retry attempts will continue;
 *   if the function returns `false` the retry flow is aborted with the current
 *   attempt's error and result being returned to the final callback.
 *   Invoked with (err).
 * * If `opts` is a number, the number specifies the number of times to retry,
 *   with the default interval of `0`.
 * @param {AsyncFunction} task - An async function to retry.
 * Invoked with (callback).
 * @param {Function} [callback] - An optional callback which is called when the
 * task has succeeded, or after the final failed attempt. It receives the `err`
 * and `result` arguments of the last attempt at completing the `task`. Invoked
 * with (err, results).
 *
 * @example
 *
 * // The `retry` function can be used as a stand-alone control flow by passing
 * // a callback, as shown below:
 *
 * // try calling apiMethod 3 times
 * async.retry(3, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 3 times, waiting 200 ms between each retry
 * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 10 times with exponential backoff
 * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
 * async.retry({
 *   times: 10,
 *   interval: function(retryCount) {
 *     return 50 * Math.pow(2, retryCount);
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod the default 5 times no delay between each retry
 * async.retry(apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod only when error condition satisfies, all other
 * // errors will abort the retry control flow and return to final callback
 * async.retry({
 *   errorFilter: function(err) {
 *     return err.message === 'Temporary error'; // only retry on a specific error
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // to retry individual methods that are not as reliable within other
 * // control flow functions, use the `retryable` wrapper:
 * async.auto({
 *     users: api.getUsers.bind(api),
 *     payments: async.retryable(3, api.getPayments.bind(api))
 * }, function(err, results) {
 *     // do something with the results
 * });
 *
 */
function retry(opts, task, callback) {
    var DEFAULT_TIMES = 5;
    var DEFAULT_INTERVAL = 0;

    var options = {
        times: DEFAULT_TIMES,
        intervalFunc: constant$1(DEFAULT_INTERVAL)
    };

    function parseTimes(acc, t) {
        if (typeof t === 'object') {
            acc.times = +t.times || DEFAULT_TIMES;

            acc.intervalFunc = typeof t.interval === 'function' ?
                t.interval :
                constant$1(+t.interval || DEFAULT_INTERVAL);

            acc.errorFilter = t.errorFilter;
        } else if (typeof t === 'number' || typeof t === 'string') {
            acc.times = +t || DEFAULT_TIMES;
        } else {
            throw new Error("Invalid arguments for async.retry");
        }
    }

    if (arguments.length < 3 && typeof opts === 'function') {
        callback = task || noop;
        task = opts;
    } else {
        parseTimes(options, opts);
        callback = callback || noop;
    }

    if (typeof task !== 'function') {
        throw new Error("Invalid arguments for async.retry");
    }

    var _task = wrapAsync(task);

    var attempt = 1;
    function retryAttempt() {
        _task(function(err) {
            if (err && attempt++ < options.times &&
                (typeof options.errorFilter != 'function' ||
                    options.errorFilter(err))) {
                setTimeout(retryAttempt, options.intervalFunc(attempt));
            } else {
                callback.apply(null, arguments);
            }
        });
    }

    retryAttempt();
}

/**
 * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method
 * wraps a task and makes it retryable, rather than immediately calling it
 * with retries.
 *
 * @name retryable
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.retry]{@link module:ControlFlow.retry}
 * @category Control Flow
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
 * options, exactly the same as from `retry`
 * @param {AsyncFunction} task - the asynchronous function to wrap.
 * This function will be passed any arguments passed to the returned wrapper.
 * Invoked with (...args, callback).
 * @returns {AsyncFunction} The wrapped function, which when invoked, will
 * retry on an error, based on the parameters specified in `opts`.
 * This function will accept the same parameters as `task`.
 * @example
 *
 * async.auto({
 *     dep1: async.retryable(3, getFromFlakyService),
 *     process: ["dep1", async.retryable(3, function (results, cb) {
 *         maybeProcessData(results.dep1, cb);
 *     })]
 * }, callback);
 */
var retryable = function (opts, task) {
    if (!task) {
        task = opts;
        opts = null;
    }
    var _task = wrapAsync(task);
    return initialParams(function (args, callback) {
        function taskFn(cb) {
            _task.apply(null, args.concat(cb));
        }

        if (opts) retry(opts, taskFn, callback);
        else retry(taskFn, callback);

    });
};

/**
 * Run the functions in the `tasks` collection in series, each one running once
 * the previous function has completed. If any functions in the series pass an
 * error to its callback, no more functions are run, and `callback` is
 * immediately called with the value of the error. Otherwise, `callback`
 * receives an array of results when `tasks` have completed.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function, and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 *  results from {@link async.series}.
 *
 * **Note** that while many implementations preserve the order of object
 * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
 * explicitly states that
 *
 * > The mechanics and order of enumerating the properties is not specified.
 *
 * So if you rely on the order in which your series of functions are executed,
 * and want this to work on all platforms, consider using an array.
 *
 * @name series
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection containing
 * [async functions]{@link AsyncFunction} to run in series.
 * Each function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This function gets a results array (or object)
 * containing all the result arguments passed to the `task` callbacks. Invoked
 * with (err, result).
 * @example
 * async.series([
 *     function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     },
 *     function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // results is now equal to ['one', 'two']
 * });
 *
 * async.series({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback){
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equal to: {one: 1, two: 2}
 * });
 */
function series(tasks, callback) {
    _parallel(eachOfSeries, tasks, callback);
}

/**
 * Returns `true` if at least one element in the `coll` satisfies an async test.
 * If any iteratee call returns `true`, the main `callback` is immediately
 * called.
 *
 * @name some
 * @static
 * @memberOf module:Collections
 * @method
 * @alias any
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 * @example
 *
 * async.some(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then at least one of the files exists
 * });
 */
var some = doParallel(_createTester(Boolean, identity));

/**
 * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
 *
 * @name someLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anyLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */
var someLimit = doParallelLimit(_createTester(Boolean, identity));

/**
 * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
 *
 * @name someSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anySeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in series.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */
var someSeries = doLimit(someLimit, 1);

/**
 * Sorts a list by the results of running each `coll` value through an async
 * `iteratee`.
 *
 * @name sortBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a value to use as the sort criteria as
 * its `result`.
 * Invoked with (item, callback).
 * @param {Function} callback - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is the items
 * from the original `coll` sorted by the values returned by the `iteratee`
 * calls. Invoked with (err, results).
 * @example
 *
 * async.sortBy(['file1','file2','file3'], function(file, callback) {
 *     fs.stat(file, function(err, stats) {
 *         callback(err, stats.mtime);
 *     });
 * }, function(err, results) {
 *     // results is now the original array of files sorted by
 *     // modified date
 * });
 *
 * // By modifying the callback parameter the
 * // sorting order can be influenced:
 *
 * // ascending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x);
 * }, function(err,result) {
 *     // result callback
 * });
 *
 * // descending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
 * }, function(err,result) {
 *     // result callback
 * });
 */
function sortBy (coll, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    map(coll, function (x, callback) {
        _iteratee(x, function (err, criteria) {
            if (err) return callback(err);
            callback(null, {value: x, criteria: criteria});
        });
    }, function (err, results) {
        if (err) return callback(err);
        callback(null, arrayMap(results.sort(comparator), baseProperty('value')));
    });

    function comparator(left, right) {
        var a = left.criteria, b = right.criteria;
        return a < b ? -1 : a > b ? 1 : 0;
    }
}

/**
 * Sets a time limit on an asynchronous function. If the function does not call
 * its callback within the specified milliseconds, it will be called with a
 * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
 *
 * @name timeout
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} asyncFn - The async function to limit in time.
 * @param {number} milliseconds - The specified time limit.
 * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
 * to timeout Error for more information..
 * @returns {AsyncFunction} Returns a wrapped function that can be used with any
 * of the control flow functions.
 * Invoke this function with the same parameters as you would `asyncFunc`.
 * @example
 *
 * function myFunction(foo, callback) {
 *     doAsyncTask(foo, function(err, data) {
 *         // handle errors
 *         if (err) return callback(err);
 *
 *         // do some stuff ...
 *
 *         // return processed data
 *         return callback(null, data);
 *     });
 * }
 *
 * var wrapped = async.timeout(myFunction, 1000);
 *
 * // call `wrapped` as you would `myFunction`
 * wrapped({ bar: 'bar' }, function(err, data) {
 *     // if `myFunction` takes < 1000 ms to execute, `err`
 *     // and `data` will have their expected values
 *
 *     // else `err` will be an Error with the code 'ETIMEDOUT'
 * });
 */
function timeout(asyncFn, milliseconds, info) {
    var fn = wrapAsync(asyncFn);

    return initialParams(function (args, callback) {
        var timedOut = false;
        var timer;

        function timeoutCallback() {
            var name = asyncFn.name || 'anonymous';
            var error  = new Error('Callback function "' + name + '" timed out.');
            error.code = 'ETIMEDOUT';
            if (info) {
                error.info = info;
            }
            timedOut = true;
            callback(error);
        }

        args.push(function () {
            if (!timedOut) {
                callback.apply(null, arguments);
                clearTimeout(timer);
            }
        });

        // setup timer and call original function
        timer = setTimeout(timeoutCallback, milliseconds);
        fn.apply(null, args);
    });
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;
var nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

/**
 * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name timesLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} count - The number of times to run the function.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see [async.map]{@link module:Collections.map}.
 */
function timeLimit(count, limit, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    mapLimit(baseRange(0, count, 1), limit, _iteratee, callback);
}

/**
 * Calls the `iteratee` function `n` times, and accumulates results in the same
 * manner you would use with [map]{@link module:Collections.map}.
 *
 * @name times
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 * @example
 *
 * // Pretend this is some complicated async factory
 * var createUser = function(id, callback) {
 *     callback(null, {
 *         id: 'user' + id
 *     });
 * };
 *
 * // generate 5 users
 * async.times(5, function(n, next) {
 *     createUser(n, function(err, user) {
 *         next(err, user);
 *     });
 * }, function(err, users) {
 *     // we should now have 5 users
 * });
 */
var times = doLimit(timeLimit, Infinity);

/**
 * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
 *
 * @name timesSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 */
var timesSeries = doLimit(timeLimit, 1);

/**
 * A relative of `reduce`.  Takes an Object or Array, and iterates over each
 * element in series, each step potentially mutating an `accumulator` value.
 * The type of the accumulator defaults to the type of collection passed in.
 *
 * @name transform
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} [accumulator] - The initial state of the transform.  If omitted,
 * it will default to an empty Object or Array, depending on the type of `coll`
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * collection that potentially modifies the accumulator.
 * Invoked with (accumulator, item, key, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the transformed accumulator.
 * Invoked with (err, result).
 * @example
 *
 * async.transform([1,2,3], function(acc, item, index, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         acc.push(item * 2)
 *         callback(null)
 *     });
 * }, function(err, result) {
 *     // result is now equal to [2, 4, 6]
 * });
 *
 * @example
 *
 * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
 *     setImmediate(function () {
 *         obj[key] = val * 2;
 *         callback();
 *     })
 * }, function (err, result) {
 *     // result is equal to {a: 2, b: 4, c: 6}
 * })
 */
function transform (coll, accumulator, iteratee, callback) {
    if (arguments.length <= 3) {
        callback = iteratee;
        iteratee = accumulator;
        accumulator = isArray(coll) ? [] : {};
    }
    callback = once(callback || noop);
    var _iteratee = wrapAsync(iteratee);

    eachOf(coll, function(v, k, cb) {
        _iteratee(accumulator, v, k, cb);
    }, function(err) {
        callback(err, accumulator);
    });
}

/**
 * It runs each task in series but stops whenever any of the functions were
 * successful. If one of the tasks were successful, the `callback` will be
 * passed the result of the successful task. If all tasks fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name tryEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection containing functions to
 * run, each function is passed a `callback(err, result)` it must call on
 * completion with an error `err` (which can be `null`) and an optional `result`
 * value.
 * @param {Function} [callback] - An optional callback which is called when one
 * of the tasks has succeeded, or all have failed. It receives the `err` and
 * `result` arguments of the last attempt at completing the `task`. Invoked with
 * (err, results).
 * @example
 * async.tryEach([
 *     function getDataFromFirstWebsite(callback) {
 *         // Try getting the data from the first website
 *         callback(err, data);
 *     },
 *     function getDataFromSecondWebsite(callback) {
 *         // First website failed,
 *         // Try getting the data from the backup website
 *         callback(err, data);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     Now do something with the data.
 * });
 *
 */
function tryEach(tasks, callback) {
    var error = null;
    var result;
    callback = callback || noop;
    eachSeries(tasks, function(task, callback) {
        wrapAsync(task)(function (err, res/*, ...args*/) {
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            } else {
                result = res;
            }
            error = err;
            callback(!err);
        });
    }, function () {
        callback(error, result);
    });
}

/**
 * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
 * unmemoized form. Handy for testing.
 *
 * @name unmemoize
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.memoize]{@link module:Utils.memoize}
 * @category Util
 * @param {AsyncFunction} fn - the memoized function
 * @returns {AsyncFunction} a function that calls the original unmemoized function
 */
function unmemoize(fn) {
    return function () {
        return (fn.unmemoized || fn).apply(null, arguments);
    };
}

/**
 * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs.
 *
 * @name whilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns undefined
 * @example
 *
 * var count = 0;
 * async.whilst(
 *     function() { return count < 5; },
 *     function(callback) {
 *         count++;
 *         setTimeout(function() {
 *             callback(null, count);
 *         }, 1000);
 *     },
 *     function (err, n) {
 *         // 5 seconds have passed, n = 5
 *     }
 * );
 */
function whilst(test, iteratee, callback) {
    callback = onlyOnce(callback || noop);
    var _iteratee = wrapAsync(iteratee);
    if (!test()) return callback(null);
    var next = function(err/*, ...args*/) {
        if (err) return callback(err);
        if (test()) return _iteratee(next);
        var args = slice(arguments, 1);
        callback.apply(null, [null].concat(args));
    };
    _iteratee(next);
}

/**
 * Repeatedly call `iteratee` until `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs. `callback` will be passed an error and any
 * arguments passed to the final `iteratee`'s callback.
 *
 * The inverse of [whilst]{@link module:ControlFlow.whilst}.
 *
 * @name until
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */
function until(test, iteratee, callback) {
    whilst(function() {
        return !test.apply(this, arguments);
    }, iteratee, callback);
}

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
var waterfall = function(tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
    if (!tasks.length) return callback();
    var taskIndex = 0;

    function nextTask(args) {
        var task = wrapAsync(tasks[taskIndex++]);
        args.push(onlyOnce(next));
        task.apply(null, args);
    }

    function next(err/*, ...args*/) {
        if (err || taskIndex === tasks.length) {
            return callback.apply(null, arguments);
        }
        nextTask(slice(arguments, 1));
    }

    nextTask([]);
};

/**
 * An "async function" in the context of Async is an asynchronous function with
 * a variable number of parameters, with the final parameter being a callback.
 * (`function (arg1, arg2, ..., callback) {}`)
 * The final callback is of the form `callback(err, results...)`, which must be
 * called once the function is completed.  The callback should be called with a
 * Error as its first argument to signal that an error occurred.
 * Otherwise, if no error occurred, it should be called with `null` as the first
 * argument, and any additional `result` arguments that may apply, to signal
 * successful completion.
 * The callback must be called exactly once, ideally on a later tick of the
 * JavaScript event loop.
 *
 * This type of function is also referred to as a "Node-style async function",
 * or a "continuation passing-style function" (CPS). Most of the methods of this
 * library are themselves CPS/Node-style async functions, or functions that
 * return CPS/Node-style async functions.
 *
 * Wherever we accept a Node-style async function, we also directly accept an
 * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
 * In this case, the `async` function will not be passed a final callback
 * argument, and any thrown error will be used as the `err` argument of the
 * implicit callback, and the return value will be used as the `result` value.
 * (i.e. a `rejected` of the returned Promise becomes the `err` callback
 * argument, and a `resolved` value becomes the `result`.)
 *
 * Note, due to JavaScript limitations, we can only detect native `async`
 * functions and not transpilied implementations.
 * Your environment must have `async`/`await` support for this to work.
 * (e.g. Node > v7.6, or a recent version of a modern browser).
 * If you are using `async` functions through a transpiler (e.g. Babel), you
 * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
 * because the `async function` will be compiled to an ordinary function that
 * returns a promise.
 *
 * @typedef {Function} AsyncFunction
 * @static
 */

/**
 * Async is a utility module which provides straight-forward, powerful functions
 * for working with asynchronous JavaScript. Although originally designed for
 * use with [Node.js](http://nodejs.org) and installable via
 * `npm install --save async`, it can also be used directly in the browser.
 * @module async
 * @see AsyncFunction
 */


/**
 * A collection of `async` functions for manipulating collections, such as
 * arrays and objects.
 * @module Collections
 */

/**
 * A collection of `async` functions for controlling the flow through a script.
 * @module ControlFlow
 */

/**
 * A collection of `async` utility functions.
 * @module Utils
 */

var index = {
    apply: apply,
    applyEach: applyEach,
    applyEachSeries: applyEachSeries,
    asyncify: asyncify,
    auto: auto,
    autoInject: autoInject,
    cargo: cargo,
    compose: compose,
    concat: concat,
    concatLimit: concatLimit,
    concatSeries: concatSeries,
    constant: constant,
    detect: detect,
    detectLimit: detectLimit,
    detectSeries: detectSeries,
    dir: dir,
    doDuring: doDuring,
    doUntil: doUntil,
    doWhilst: doWhilst,
    during: during,
    each: eachLimit,
    eachLimit: eachLimit$1,
    eachOf: eachOf,
    eachOfLimit: eachOfLimit,
    eachOfSeries: eachOfSeries,
    eachSeries: eachSeries,
    ensureAsync: ensureAsync,
    every: every,
    everyLimit: everyLimit,
    everySeries: everySeries,
    filter: filter,
    filterLimit: filterLimit,
    filterSeries: filterSeries,
    forever: forever,
    groupBy: groupBy,
    groupByLimit: groupByLimit,
    groupBySeries: groupBySeries,
    log: log,
    map: map,
    mapLimit: mapLimit,
    mapSeries: mapSeries,
    mapValues: mapValues,
    mapValuesLimit: mapValuesLimit,
    mapValuesSeries: mapValuesSeries,
    memoize: memoize,
    nextTick: nextTick,
    parallel: parallelLimit,
    parallelLimit: parallelLimit$1,
    priorityQueue: priorityQueue,
    queue: queue$1,
    race: race,
    reduce: reduce,
    reduceRight: reduceRight,
    reflect: reflect,
    reflectAll: reflectAll,
    reject: reject,
    rejectLimit: rejectLimit,
    rejectSeries: rejectSeries,
    retry: retry,
    retryable: retryable,
    seq: seq,
    series: series,
    setImmediate: setImmediate$1,
    some: some,
    someLimit: someLimit,
    someSeries: someSeries,
    sortBy: sortBy,
    timeout: timeout,
    times: times,
    timesLimit: timeLimit,
    timesSeries: timesSeries,
    transform: transform,
    tryEach: tryEach,
    unmemoize: unmemoize,
    until: until,
    waterfall: waterfall,
    whilst: whilst,

    // aliases
    all: every,
    allLimit: everyLimit,
    allSeries: everySeries,
    any: some,
    anyLimit: someLimit,
    anySeries: someSeries,
    find: detect,
    findLimit: detectLimit,
    findSeries: detectSeries,
    forEach: eachLimit,
    forEachSeries: eachSeries,
    forEachLimit: eachLimit$1,
    forEachOf: eachOf,
    forEachOfSeries: eachOfSeries,
    forEachOfLimit: eachOfLimit,
    inject: reduce,
    foldl: reduce,
    foldr: reduceRight,
    select: filter,
    selectLimit: filterLimit,
    selectSeries: filterSeries,
    wrapSync: asyncify
};

exports['default'] = index;
exports.apply = apply;
exports.applyEach = applyEach;
exports.applyEachSeries = applyEachSeries;
exports.asyncify = asyncify;
exports.auto = auto;
exports.autoInject = autoInject;
exports.cargo = cargo;
exports.compose = compose;
exports.concat = concat;
exports.concatLimit = concatLimit;
exports.concatSeries = concatSeries;
exports.constant = constant;
exports.detect = detect;
exports.detectLimit = detectLimit;
exports.detectSeries = detectSeries;
exports.dir = dir;
exports.doDuring = doDuring;
exports.doUntil = doUntil;
exports.doWhilst = doWhilst;
exports.during = during;
exports.each = eachLimit;
exports.eachLimit = eachLimit$1;
exports.eachOf = eachOf;
exports.eachOfLimit = eachOfLimit;
exports.eachOfSeries = eachOfSeries;
exports.eachSeries = eachSeries;
exports.ensureAsync = ensureAsync;
exports.every = every;
exports.everyLimit = everyLimit;
exports.everySeries = everySeries;
exports.filter = filter;
exports.filterLimit = filterLimit;
exports.filterSeries = filterSeries;
exports.forever = forever;
exports.groupBy = groupBy;
exports.groupByLimit = groupByLimit;
exports.groupBySeries = groupBySeries;
exports.log = log;
exports.map = map;
exports.mapLimit = mapLimit;
exports.mapSeries = mapSeries;
exports.mapValues = mapValues;
exports.mapValuesLimit = mapValuesLimit;
exports.mapValuesSeries = mapValuesSeries;
exports.memoize = memoize;
exports.nextTick = nextTick;
exports.parallel = parallelLimit;
exports.parallelLimit = parallelLimit$1;
exports.priorityQueue = priorityQueue;
exports.queue = queue$1;
exports.race = race;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reflect = reflect;
exports.reflectAll = reflectAll;
exports.reject = reject;
exports.rejectLimit = rejectLimit;
exports.rejectSeries = rejectSeries;
exports.retry = retry;
exports.retryable = retryable;
exports.seq = seq;
exports.series = series;
exports.setImmediate = setImmediate$1;
exports.some = some;
exports.someLimit = someLimit;
exports.someSeries = someSeries;
exports.sortBy = sortBy;
exports.timeout = timeout;
exports.times = times;
exports.timesLimit = timeLimit;
exports.timesSeries = timesSeries;
exports.transform = transform;
exports.tryEach = tryEach;
exports.unmemoize = unmemoize;
exports.until = until;
exports.waterfall = waterfall;
exports.whilst = whilst;
exports.all = every;
exports.allLimit = everyLimit;
exports.allSeries = everySeries;
exports.any = some;
exports.anyLimit = someLimit;
exports.anySeries = someSeries;
exports.find = detect;
exports.findLimit = detectLimit;
exports.findSeries = detectSeries;
exports.forEach = eachLimit;
exports.forEachSeries = eachSeries;
exports.forEachLimit = eachLimit$1;
exports.forEachOf = eachOf;
exports.forEachOfSeries = eachOfSeries;
exports.forEachOfLimit = eachOfLimit;
exports.inject = reduce;
exports.foldl = reduce;
exports.foldr = reduceRight;
exports.select = filter;
exports.selectLimit = filterLimit;
exports.selectSeries = filterSeries;
exports.wrapSync = asyncify;

Object.defineProperty(exports, '__esModule', { value: true });

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25).setImmediate, __webpack_require__(4), __webpack_require__(2), __webpack_require__(35)(module)))

/***/ }),

/***/ 2095:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const rulesEngine = __webpack_require__(2096),
    options = {
        // If set to false, will throw an error if any key from the facts// does not exist in the rule
        allowUndefinedFacts: true
    };

module.exports.RuleEvaluator = {
    match: (flowRule, facts, cb) => {
        let engine = new rulesEngine.Engine([], options),
            rule = new rulesEngine.Rule({
                conditions: flowRule,
                event: { // define the event to fire when the conditions evaluate truthy
                    type: 'matched',
                    params: {
                        message: true
                    }
                }
            });

        engine.on('success', () => {
            return cb(null, true);
        });

        engine.on('failure', () => {
            return cb(null, false);
        });

        engine.addRule(rule);

        engine.run(facts);
    }
};


/***/ }),

/***/ 2096:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2097);

/***/ }),

/***/ 2097:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Engine = exports.Operator = exports.Rule = exports.Fact = undefined;

exports.default = function (rules, options) {
  return new _engine2.default(rules, options);
};

var _engine = __webpack_require__(2098);

var _engine2 = _interopRequireDefault(_engine);

var _fact = __webpack_require__(642);

var _fact2 = _interopRequireDefault(_fact);

var _rule = __webpack_require__(977);

var _rule2 = _interopRequireDefault(_rule);

var _operator = __webpack_require__(643);

var _operator2 = _interopRequireDefault(_operator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Fact = _fact2.default;
exports.Rule = _rule2.default;
exports.Operator = _operator2.default;
exports.Engine = _engine2.default;

/***/ }),

/***/ 2098:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FINISHED = exports.RUNNING = exports.READY = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fact = __webpack_require__(642);

var _fact2 = _interopRequireDefault(_fact);

var _rule = __webpack_require__(977);

var _rule2 = _interopRequireDefault(_rule);

var _operator = __webpack_require__(643);

var _operator2 = _interopRequireDefault(_operator);

var _almanac = __webpack_require__(2103);

var _almanac2 = _interopRequireDefault(_almanac);

var _events = __webpack_require__(33);

var _engineFacts = __webpack_require__(2113);

var _engineDefaultOperators = __webpack_require__(2114);

var _engineDefaultOperators2 = _interopRequireDefault(_engineDefaultOperators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = __webpack_require__(204)('json-rules-engine');

var READY = exports.READY = 'READY';
var RUNNING = exports.RUNNING = 'RUNNING';
var FINISHED = exports.FINISHED = 'FINISHED';

var Engine = function (_EventEmitter) {
  _inherits(Engine, _EventEmitter);

  /**
   * Returns a new Engine instance
   * @param  {Rule[]} rules - array of rules to initialize with
   */
  function Engine() {
    var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Engine);

    var _this = _possibleConstructorReturn(this, (Engine.__proto__ || Object.getPrototypeOf(Engine)).call(this));

    _this.rules = [];
    _this.allowUndefinedFacts = options.allowUndefinedFacts || false;
    _this.operators = new Map();
    _this.facts = new Map();
    _this.status = READY;
    rules.map(function (r) {
      return _this.addRule(r);
    });
    _engineDefaultOperators2.default.map(function (o) {
      return _this.addOperator(o);
    });
    return _this;
  }

  /**
   * Add a rule definition to the engine
   * @param {object|Rule} properties - rule definition.  can be JSON representation, or instance of Rule
   * @param {integer} properties.priority (>1) - higher runs sooner.
   * @param {Object} properties.event - event to fire when rule evaluates as successful
   * @param {string} properties.event.type - name of event to emit
   * @param {string} properties.event.params - parameters to pass to the event listener
   * @param {Object} properties.conditions - conditions to evaluate when processing this rule
   */


  _createClass(Engine, [{
    key: 'addRule',
    value: function addRule(properties) {
      if (!properties) throw new Error('Engine: addRule() requires options');
      if (!properties.hasOwnProperty('conditions')) throw new Error('Engine: addRule() argument requires "conditions" property');
      if (!properties.hasOwnProperty('event')) throw new Error('Engine: addRule() argument requires "event" property');

      var rule = void 0;
      if (properties instanceof _rule2.default) {
        rule = properties;
      } else {
        rule = new _rule2.default(properties);
      }
      rule.setEngine(this);

      this.rules.push(rule);
      this.prioritizedRules = null;
      return this;
    }

    /**
     * Remove a rule from the engine
     * @param {object|Rule} rule - rule definition. Must be a instance of Rule
     */

  }, {
    key: 'removeRule',
    value: function removeRule(rule) {
      if (rule instanceof _rule2.default === false) throw new Error('Engine: removeRule() rule must be a instance of Rule');

      var index = this.rules.indexOf(rule);
      if (index === -1) return false;
      return Boolean(this.rules.splice(index, 1).length);
    }

    /**
     * Add a custom operator definition
     * @param {string}   operatorOrName - operator identifier within the condition; i.e. instead of 'equals', 'greaterThan', etc
     * @param {function(factValue, jsonValue)} callback - the method to execute when the operator is encountered.
     */

  }, {
    key: 'addOperator',
    value: function addOperator(operatorOrName, cb) {
      var operator = void 0;
      if (operatorOrName instanceof _operator2.default) {
        operator = operatorOrName;
      } else {
        operator = new _operator2.default(operatorOrName, cb);
      }
      debug('engine::addOperator name:' + operator.name);
      this.operators.set(operator.name, operator);
    }

    /**
     * Remove a custom operator definition
     * @param {string}   operatorOrName - operator identifier within the condition; i.e. instead of 'equals', 'greaterThan', etc
     * @param {function(factValue, jsonValue)} callback - the method to execute when the operator is encountered.
     */

  }, {
    key: 'removeOperator',
    value: function removeOperator(operatorOrName) {
      var operatorName = void 0;
      if (operatorOrName instanceof _operator2.default) {
        operatorName = operatorOrName.name;
      } else {
        operatorName = operatorOrName;
      }

      return this.operators.delete(operatorName);
    }

    /**
     * Add a fact definition to the engine.  Facts are called by rules as they are evaluated.
     * @param {object|Fact} id - fact identifier or instance of Fact
     * @param {function} definitionFunc - function to be called when computing the fact value for a given rule
     * @param {Object} options - options to initialize the fact with. used when "id" is not a Fact instance
     */

  }, {
    key: 'addFact',
    value: function addFact(id, valueOrMethod, options) {
      var factId = id;
      var fact = void 0;
      if (id instanceof _fact2.default) {
        factId = id.id;
        fact = id;
      } else {
        fact = new _fact2.default(id, valueOrMethod, options);
      }
      debug('engine::addFact id:' + factId);
      this.facts.set(factId, fact);
      return this;
    }

    /**
     * Add a fact definition to the engine.  Facts are called by rules as they are evaluated.
     * @param {object|Fact} id - fact identifier or instance of Fact
     */

  }, {
    key: 'removeFact',
    value: function removeFact(factOrId) {
      var factId = void 0;
      if (!(factOrId instanceof _fact2.default)) {
        factId = factOrId;
      } else {
        factId = factOrId.id;
      }

      return this.facts.delete(factId);
    }

    /**
     * Iterates over the engine rules, organizing them by highest -> lowest priority
     * @return {Rule[][]} two dimensional array of Rules.
     *    Each outer array element represents a single priority(integer).  Inner array is
     *    all rules with that priority.
     */

  }, {
    key: 'prioritizeRules',
    value: function prioritizeRules() {
      if (!this.prioritizedRules) {
        var ruleSets = this.rules.reduce(function (sets, rule) {
          var priority = rule.priority;
          if (!sets[priority]) sets[priority] = [];
          sets[priority].push(rule);
          return sets;
        }, {});
        this.prioritizedRules = Object.keys(ruleSets).sort(function (a, b) {
          return Number(a) > Number(b) ? -1 : 1; // order highest priority -> lowest
        }).map(function (priority) {
          return ruleSets[priority];
        });
      }
      return this.prioritizedRules;
    }

    /**
     * Stops the rules engine from running the next priority set of Rules.  All remaining rules will be resolved as undefined,
     * and no further events emitted.  Since rules of the same priority are evaluated in parallel(not series), other rules of
     * the same priority may still emit events, even though the engine is in a "finished" state.
     * @return {Engine}
     */

  }, {
    key: 'stop',
    value: function stop() {
      this.status = FINISHED;
      return this;
    }

    /**
     * Returns a fact by fact-id
     * @param  {string} factId - fact identifier
     * @return {Fact} fact instance, or undefined if no such fact exists
     */

  }, {
    key: 'getFact',
    value: function getFact(factId) {
      return this.facts.get(factId);
    }

    /**
     * Runs an array of rules
     * @param  {Rule[]} array of rules to be evaluated
     * @return {Promise} resolves when all rules in the array have been evaluated
     */

  }, {
    key: 'evaluateRules',
    value: function evaluateRules(ruleArray, almanac) {
      var _this2 = this;

      return Promise.all(ruleArray.map(function (rule) {
        if (_this2.status !== RUNNING) {
          debug('engine::run status:' + _this2.status + '; skipping remaining rules');
          return;
        }
        return rule.evaluate(almanac).then(function (ruleResult) {
          debug('engine::run ruleResult:' + ruleResult.result);
          if (ruleResult.result) {
            _this2.emit('success', rule.event, almanac, ruleResult);
            _this2.emit(rule.event.type, rule.event.params, almanac, ruleResult);
            almanac.factValue('success-events', { event: rule.event });
          } else {
            _this2.emit('failure', rule.event, almanac, ruleResult);
          }
        });
      }));
    }

    /**
     * Runs the rules engine
     * @param  {Object} runtimeFacts - fact values known at runtime
     * @param  {Object} runOptions - run options
     * @return {Promise} resolves when the engine has completed running
     */

  }, {
    key: 'run',
    value: function run() {
      var _this3 = this;

      var runtimeFacts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      debug('engine::run started');
      debug('engine::run runtimeFacts:', runtimeFacts);
      runtimeFacts['success-events'] = new _fact2.default('success-events', (0, _engineFacts.SuccessEventFact)(), { cache: false });
      this.status = RUNNING;
      var almanac = new _almanac2.default(this.facts, runtimeFacts);
      var orderedSets = this.prioritizeRules();
      var cursor = Promise.resolve();
      // for each rule set, evaluate in parallel,
      // before proceeding to the next priority set.
      return new Promise(function (resolve, reject) {
        orderedSets.map(function (set) {
          cursor = cursor.then(function () {
            return _this3.evaluateRules(set, almanac);
          }).catch(reject);
          return cursor;
        });
        cursor.then(function () {
          _this3.status = FINISHED;
          debug('engine::run completed');
          resolve(almanac.factValue('success-events'));
        }).catch(reject);
      });
    }
  }]);

  return Engine;
}(_events.EventEmitter);

exports.default = Engine;

/***/ }),

/***/ 2099:
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.objectHash=e()}}(function(){return function e(t,n,r){function o(u,a){if(!n[u]){if(!t[u]){var f="function"==typeof require&&require;if(!a&&f)return require(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var s=n[u]={exports:{}};t[u][0].call(s.exports,function(e){var n=t[u][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){(function(r,o,i,u,a,f,s,c,l){"use strict";function d(e,t){return t=h(e,t),y(e,t)}function h(e,t){if(t=t||{},t.algorithm=t.algorithm||"sha1",t.encoding=t.encoding||"hex",t.excludeValues=!!t.excludeValues,t.algorithm=t.algorithm.toLowerCase(),t.encoding=t.encoding.toLowerCase(),t.ignoreUnknown=t.ignoreUnknown===!0,t.respectType=t.respectType!==!1,t.respectFunctionNames=t.respectFunctionNames!==!1,t.respectFunctionProperties=t.respectFunctionProperties!==!1,t.unorderedArrays=t.unorderedArrays===!0,t.unorderedSets=t.unorderedSets!==!1,t.unorderedObjects=t.unorderedObjects!==!1,t.replacer=t.replacer||void 0,t.excludeKeys=t.excludeKeys||void 0,"undefined"==typeof e)throw new Error("Object argument required.");for(var n=0;n<v.length;++n)v[n].toLowerCase()===t.algorithm.toLowerCase()&&(t.algorithm=v[n]);if(v.indexOf(t.algorithm)===-1)throw new Error('Algorithm "'+t.algorithm+'"  not supported. supported values: '+v.join(", "));if(m.indexOf(t.encoding)===-1&&"passthrough"!==t.algorithm)throw new Error('Encoding "'+t.encoding+'"  not supported. supported values: '+m.join(", "));return t}function p(e){if("function"!=typeof e)return!1;var t=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;return null!=t.exec(Function.prototype.toString.call(e))}function y(e,t){var n;n="passthrough"!==t.algorithm?b.createHash(t.algorithm):new w,"undefined"==typeof n.write&&(n.write=n.update,n.end=n.update);var r=g(t,n);if(r.dispatch(e),n.update||n.end(""),n.digest)return n.digest("buffer"===t.encoding?void 0:t.encoding);var o=n.read();return"buffer"===t.encoding?o:o.toString(t.encoding)}function g(e,t,n){n=n||[];var r=function(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")};return{dispatch:function(t){e.replacer&&(t=e.replacer(t));var n=typeof t;return null===t&&(n="null"),this["_"+n](t)},_object:function(t){var o=/\[object (.*)\]/i,u=Object.prototype.toString.call(t),a=o.exec(u);a=a?a[1]:"unknown:["+u+"]",a=a.toLowerCase();var f=null;if((f=n.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(n.push(t),"undefined"!=typeof i&&i.isBuffer&&i.isBuffer(t))return r("buffer:"),r(t);if("object"===a||"function"===a){var s=Object.keys(t);e.unorderedObjects&&(s=s.sort()),e.respectType===!1||p(t)||s.splice(0,0,"prototype","__proto__","constructor"),e.excludeKeys&&(s=s.filter(function(t){return!e.excludeKeys(t)})),r("object:"+s.length+":");var c=this;return s.forEach(function(n){c.dispatch(n),r(":"),e.excludeValues||c.dispatch(t[n]),r(",")})}if(!this["_"+a]){if(e.ignoreUnknown)return r("["+a+"]");throw new Error('Unknown object type "'+a+'"')}this["_"+a](t)},_array:function(t,o){o="undefined"!=typeof o?o:e.unorderedArrays!==!1;var i=this;if(r("array:"+t.length+":"),!o||t.length<=1)return t.forEach(function(e){return i.dispatch(e)});var u=[],a=t.map(function(t){var r=new w,o=n.slice(),i=g(e,r,o);return i.dispatch(t),u=u.concat(o.slice(n.length)),r.read().toString()});return n=n.concat(u),a.sort(),this._array(a,!1)},_date:function(e){return r("date:"+e.toJSON())},_symbol:function(e){return r("symbol:"+e.toString())},_error:function(e){return r("error:"+e.toString())},_boolean:function(e){return r("bool:"+e.toString())},_string:function(e){r("string:"+e.length+":"),r(e)},_function:function(t){r("fn:"),p(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return r("number:"+e.toString())},_xml:function(e){return r("xml:"+e.toString())},_null:function(){return r("Null")},_undefined:function(){return r("Undefined")},_regexp:function(e){return r("regex:"+e.toString())},_uint8array:function(e){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return r("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return r("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return r("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return r("url:"+e.toString(),"utf8")},_map:function(t){r("map:");var n=Array.from(t);return this._array(n,e.unorderedSets!==!1)},_set:function(t){r("set:");var n=Array.from(t);return this._array(n,e.unorderedSets!==!1)},_blob:function(){if(e.ignoreUnknown)return r("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return r("domwindow")},_process:function(){return r("process")},_timer:function(){return r("timer")},_pipe:function(){return r("pipe")},_tcp:function(){return r("tcp")},_udp:function(){return r("udp")},_tty:function(){return r("tty")},_statwatcher:function(){return r("statwatcher")},_securecontext:function(){return r("securecontext")},_connection:function(){return r("connection")},_zlib:function(){return r("zlib")},_context:function(){return r("context")},_nodescript:function(){return r("nodescript")},_httpparser:function(){return r("httpparser")},_dataview:function(){return r("dataview")},_signal:function(){return r("signal")},_fsevent:function(){return r("fsevent")},_tlswrap:function(){return r("tlswrap")}}}function w(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}var b=e("crypto");n=t.exports=d,n.sha1=function(e){return d(e)},n.keys=function(e){return d(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},n.MD5=function(e){return d(e,{algorithm:"md5",encoding:"hex"})},n.keysMD5=function(e){return d(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var v=b.getHashes?b.getHashes().slice():["sha1","md5"];v.push("passthrough");var m=["buffer","hex","binary","base64"];n.writeToStream=function(e,t,n){return"undefined"==typeof n&&(n=t,t={}),t=h(e,t),g(t,n).dispatch(e)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_5f1a2fc7.js","/")},{buffer:3,crypto:5,lYpoI2:10}],2:[function(e,t,n){(function(e,t,r,o,i,u,a,f,s){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(e){"use strict";function t(e){var t=e.charCodeAt(0);return t===i||t===l?62:t===u||t===d?63:t<a?-1:t<a+10?t-a+26+26:t<s+26?t-s:t<f+26?t-f+26:void 0}function n(e){function n(e){s[l++]=e}var r,i,u,a,f,s;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=e.length;f="="===e.charAt(c-2)?2:"="===e.charAt(c-1)?1:0,s=new o(3*e.length/4-f),u=f>0?e.length-4:e.length;var l=0;for(r=0,i=0;r<u;r+=4,i+=3)a=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&a)>>16),n((65280&a)>>8),n(255&a);return 2===f?(a=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&a)):1===f&&(a=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(a>>8&255),n(255&a)),s}function r(e){function t(e){return c.charAt(e)}function n(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var r,o,i,u=e.length%3,a="";for(r=0,i=e.length-u;r<i;r+=3)o=(e[r]<<16)+(e[r+1]<<8)+e[r+2],a+=n(o);switch(u){case 1:o=e[e.length-1],a+=t(o>>2),a+=t(o<<4&63),a+="==";break;case 2:o=(e[e.length-2]<<8)+e[e.length-1],a+=t(o>>10),a+=t(o>>4&63),a+=t(o<<2&63),a+="="}return a}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="+".charCodeAt(0),u="/".charCodeAt(0),a="0".charCodeAt(0),f="a".charCodeAt(0),s="A".charCodeAt(0),l="-".charCodeAt(0),d="_".charCodeAt(0);e.toByteArray=n,e.fromByteArray=r}("undefined"==typeof n?this.base64js={}:n)}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:10}],3:[function(e,t,n){(function(t,r,o,i,u,a,f,s,c){function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r=typeof e;if("base64"===t&&"string"===r)for(e=N(e);e.length%4!==0;)e+="=";var i;if("number"===r)i=F(e);else if("string"===r)i=o.byteLength(e,t);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");i=F(e.length)}var u;o._useTypedArrays?u=o._augment(new Uint8Array(i)):(u=this,u.length=i,u._isBuffer=!0);var a;if(o._useTypedArrays&&"number"==typeof e.byteLength)u._set(e);else if(O(e))for(a=0;a<i;a++)o.isBuffer(e)?u[a]=e.readUInt8(a):u[a]=e[a];else if("string"===r)u.write(e,0,t);else if("number"===r&&!o._useTypedArrays&&!n)for(a=0;a<i;a++)u[a]=0;return u}function l(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var u=t.length;$(u%2===0,"Invalid hex string"),r>u/2&&(r=u/2);for(var a=0;a<r;a++){var f=parseInt(t.substr(2*a,2),16);$(!isNaN(f),"Invalid hex string"),e[n+a]=f}return o._charsWritten=2*a,a}function d(e,t,n,r){var i=o._charsWritten=W(V(t),e,n,r);return i}function h(e,t,n,r){var i=o._charsWritten=W(q(t),e,n,r);return i}function p(e,t,n,r){return h(e,t,n,r)}function y(e,t,n,r){var i=o._charsWritten=W(R(t),e,n,r);return i}function g(e,t,n,r){var i=o._charsWritten=W(P(t),e,n,r);return i}function w(e,t,n){return 0===t&&n===e.length?G.fromByteArray(e):G.fromByteArray(e.slice(t,n))}function b(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=J(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+J(o)}function v(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function m(e,t,n){return v(e,t,n)}function _(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=t;i<n;i++)o+=H(e[i]);return o}function E(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function I(e,t,n,r){r||($("boolean"==typeof n,"missing or invalid endian"),$(void 0!==t&&null!==t,"missing offset"),$(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(i=e[t],t+1<o&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<o&&(i|=e[t+1])),i}}function A(e,t,n,r){r||($("boolean"==typeof n,"missing or invalid endian"),$(void 0!==t&&null!==t,"missing offset"),$(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(t+2<o&&(i=e[t+2]<<16),t+1<o&&(i|=e[t+1]<<8),i|=e[t],t+3<o&&(i+=e[t+3]<<24>>>0)):(t+1<o&&(i=e[t+1]<<16),t+2<o&&(i|=e[t+2]<<8),t+3<o&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}}function B(e,t,n,r){r||($("boolean"==typeof n,"missing or invalid endian"),$(void 0!==t&&null!==t,"missing offset"),$(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=I(e,t,n,!0),u=32768&i;return u?(65535-i+1)*-1:i}}function L(e,t,n,r){r||($("boolean"==typeof n,"missing or invalid endian"),$(void 0!==t&&null!==t,"missing offset"),$(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=A(e,t,n,!0),u=2147483648&i;return u?(4294967295-i+1)*-1:i}}function U(e,t,n,r){return r||($("boolean"==typeof n,"missing or invalid endian"),$(t+3<e.length,"Trying to read beyond buffer length")),Q.read(e,t,n,23,4)}function x(e,t,n,r){return r||($("boolean"==typeof n,"missing or invalid endian"),$(t+7<e.length,"Trying to read beyond buffer length")),Q.read(e,t,n,52,8)}function S(e,t,n,r,o){o||($(void 0!==t&&null!==t,"missing value"),$("boolean"==typeof r,"missing or invalid endian"),$(void 0!==n&&null!==n,"missing offset"),$(n+1<e.length,"trying to write beyond buffer length"),K(t,65535));var i=e.length;if(!(n>=i))for(var u=0,a=Math.min(i-n,2);u<a;u++)e[n+u]=(t&255<<8*(r?u:1-u))>>>8*(r?u:1-u)}function j(e,t,n,r,o){o||($(void 0!==t&&null!==t,"missing value"),$("boolean"==typeof r,"missing or invalid endian"),$(void 0!==n&&null!==n,"missing offset"),$(n+3<e.length,"trying to write beyond buffer length"),K(t,4294967295));var i=e.length;if(!(n>=i))for(var u=0,a=Math.min(i-n,4);u<a;u++)e[n+u]=t>>>8*(r?u:3-u)&255}function C(e,t,n,r,o){o||($(void 0!==t&&null!==t,"missing value"),$("boolean"==typeof r,"missing or invalid endian"),$(void 0!==n&&null!==n,"missing offset"),$(n+1<e.length,"Trying to write beyond buffer length"),z(t,32767,-32768));var i=e.length;n>=i||(t>=0?S(e,t,n,r,o):S(e,65535+t+1,n,r,o))}function k(e,t,n,r,o){o||($(void 0!==t&&null!==t,"missing value"),$("boolean"==typeof r,"missing or invalid endian"),$(void 0!==n&&null!==n,"missing offset"),$(n+3<e.length,"Trying to write beyond buffer length"),z(t,2147483647,-2147483648));var i=e.length;n>=i||(t>=0?j(e,t,n,r,o):j(e,4294967295+t+1,n,r,o))}function T(e,t,n,r,o){o||($(void 0!==t&&null!==t,"missing value"),$("boolean"==typeof r,"missing or invalid endian"),$(void 0!==n&&null!==n,"missing offset"),$(n+3<e.length,"Trying to write beyond buffer length"),X(t,3.4028234663852886e38,-3.4028234663852886e38));var i=e.length;n>=i||Q.write(e,t,n,r,23,4)}function M(e,t,n,r,o){o||($(void 0!==t&&null!==t,"missing value"),$("boolean"==typeof r,"missing or invalid endian"),$(void 0!==n&&null!==n,"missing offset"),$(n+7<e.length,"Trying to write beyond buffer length"),X(t,1.7976931348623157e308,-1.7976931348623157e308));var i=e.length;n>=i||Q.write(e,t,n,r,52,8)}function N(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Y(e,t,n){return"number"!=typeof e?n:(e=~~e,e>=t?t:e>=0?e:(e+=t,e>=0?e:0))}function F(e){return e=~~Math.ceil(+e),e<0?0:e}function D(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function O(e){return D(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function H(e){return e<16?"0"+e.toString(16):e.toString(16)}function V(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else{var o=n;r>=55296&&r<=57343&&n++;for(var i=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),u=0;u<i.length;u++)t.push(parseInt(i[u],16))}}return t}function q(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function P(e){for(var t,n,r,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,r=t%256,o.push(r),o.push(n);return o}function R(e){return G.toByteArray(e)}function W(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function J(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}function K(e,t){$("number"==typeof e,"cannot write a non-number as a number"),$(e>=0,"specified a negative value for writing an unsigned value"),$(e<=t,"value is larger than maximum value for type"),$(Math.floor(e)===e,"value has a fractional component")}function z(e,t,n){$("number"==typeof e,"cannot write a non-number as a number"),$(e<=t,"value larger than maximum allowed value"),$(e>=n,"value smaller than minimum allowed value"),$(Math.floor(e)===e,"value has a fractional component")}function X(e,t,n){$("number"==typeof e,"cannot write a non-number as a number"),$(e<=t,"value larger than maximum allowed value"),$(e>=n,"value smaller than minimum allowed value")}function $(e,t){if(!e)throw new Error(t||"Failed assertion")}var G=e("base64-js"),Q=e("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(n){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=V(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=R(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if($(D(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new o(t),i=0;for(n=0;n<e.length;n++){var u=e[n];u.copy(r,i),i+=u.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var o=r;r=t,t=n,n=o}t=Number(t)||0;var i=this.length-t;n?(n=Number(n),n>i&&(n=i)):n=i,r=String(r||"utf8").toLowerCase();var u;switch(r){case"hex":u=l(this,e,t,n);break;case"utf8":case"utf-8":u=d(this,e,t,n);break;case"ascii":u=h(this,e,t,n);break;case"binary":u=p(this,e,t,n);break;case"base64":u=y(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":u=g(this,e,t,n);break;default:throw new Error("Unknown encoding")}return u},o.prototype.toString=function(e,t,n){var r=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,n=void 0!==n?Number(n):n=r.length,n===t)return"";var o;switch(e){case"hex":o=_(r,t,n);break;case"utf8":case"utf-8":o=b(r,t,n);break;case"ascii":o=v(r,t,n);break;case"binary":o=m(r,t,n);break;case"base64":o=w(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=E(r,t,n);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){var i=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==i.length){$(r>=n,"sourceEnd < sourceStart"),$(t>=0&&t<e.length,"targetStart out of bounds"),$(n>=0&&n<i.length,"sourceStart out of bounds"),$(r>=0&&r<=i.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var u=r-n;if(u<100||!o._useTypedArrays)for(var a=0;a<u;a++)e[a+t]=this[a+n];else e._set(this.subarray(n,n+u),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=Y(e,n,0),t=Y(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,i=new o(r,(void 0),(!0)),u=0;u<r;u++)i[u]=this[u+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||($(void 0!==e&&null!==e,"missing offset"),$(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return I(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return I(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return A(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return A(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||($(void 0!==e&&null!==e,"missing offset"),$(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var n=128&this[e];return n?(255-this[e]+1)*-1:this[e]}},o.prototype.readInt16LE=function(e,t){return B(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return B(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return L(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return L(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return U(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return U(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return x(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return x(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||($(void 0!==e&&null!==e,"missing value"),$(void 0!==t&&null!==t,"missing offset"),$(t<this.length,"trying to write beyond buffer length"),K(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){S(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){S(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){j(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){j(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||($(void 0!==e&&null!==e,"missing value"),$(void 0!==t&&null!==t,"missing offset"),$(t<this.length,"Trying to write beyond buffer length"),z(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){C(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){C(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){k(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){k(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){T(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){T(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){M(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){M(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),$("number"==typeof e&&!isNaN(e),"value is not a number"),$(n>=t,"end < start"),n!==t&&0!==this.length){$(t>=0&&t<this.length,"start out of bounds"),$(n>=0&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=H(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var Z=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=Z.get,e.set=Z.set,e.write=Z.write,e.toString=Z.toString,e.toLocaleString=Z.toString,e.toJSON=Z.toJSON,e.copy=Z.copy,e.slice=Z.slice,e.readUInt8=Z.readUInt8,e.readUInt16LE=Z.readUInt16LE,e.readUInt16BE=Z.readUInt16BE,e.readUInt32LE=Z.readUInt32LE,e.readUInt32BE=Z.readUInt32BE,e.readInt8=Z.readInt8,e.readInt16LE=Z.readInt16LE,e.readInt16BE=Z.readInt16BE,e.readInt32LE=Z.readInt32LE,e.readInt32BE=Z.readInt32BE,e.readFloatLE=Z.readFloatLE,e.readFloatBE=Z.readFloatBE,e.readDoubleLE=Z.readDoubleLE,e.readDoubleBE=Z.readDoubleBE,e.writeUInt8=Z.writeUInt8,e.writeUInt16LE=Z.writeUInt16LE,e.writeUInt16BE=Z.writeUInt16BE,e.writeUInt32LE=Z.writeUInt32LE,e.writeUInt32BE=Z.writeUInt32BE,e.writeInt8=Z.writeInt8,e.writeInt16LE=Z.writeInt16LE,e.writeInt16BE=Z.writeInt16BE,e.writeInt32LE=Z.writeInt32LE,e.writeInt32BE=Z.writeInt32BE,e.writeFloatLE=Z.writeFloatLE,e.writeFloatBE=Z.writeFloatBE,e.writeDoubleLE=Z.writeDoubleLE,e.writeDoubleBE=Z.writeDoubleBE,e.fill=Z.fill,e.inspect=Z.inspect,e.toArrayBuffer=Z.toArrayBuffer,e}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:11,lYpoI2:10}],4:[function(e,t,n){(function(n,r,o,i,u,a,f,s,c){function l(e,t){if(e.length%p!==0){var n=e.length+(p-e.length%p);e=o.concat([e,y],n)}for(var r=[],i=t?e.readInt32BE:e.readInt32LE,u=0;u<e.length;u+=p)r.push(i.call(e,u));return r}function d(e,t,n){for(var r=new o(t),i=n?r.writeInt32BE:r.writeInt32LE,u=0;u<e.length;u++)i.call(r,e[u],4*u,!0);return r}function h(e,t,n,r){o.isBuffer(e)||(e=new o(e));var i=t(l(e,r),e.length*g);return d(i,n,r)}var o=e("buffer").Buffer,p=4,y=new o(p);y.fill(0);var g=8;t.exports={hash:h}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:10}],5:[function(e,t,n){(function(t,r,o,i,u,a,f,s,c){function l(e,t,n){o.isBuffer(t)||(t=new o(t)),o.isBuffer(n)||(n=new o(n)),t.length>m?t=e(t):t.length<m&&(t=o.concat([t,_],m));for(var r=new o(m),i=new o(m),u=0;u<m;u++)r[u]=54^t[u],i[u]=92^t[u];var a=e(o.concat([r,n]));return e(o.concat([i,a]))}function d(e,t){e=e||"sha1";var n=v[e],r=[],i=0;return n||h("algorithm:",e,"is not yet supported"),{update:function(e){return o.isBuffer(e)||(e=new o(e)),r.push(e),i+=e.length,this},digest:function(e){var i=o.concat(r),u=t?l(n,t,i):n(i);return r=null,e?u.toString(e):u}}}function h(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}function p(e,t){for(var n in e)t(e[n],n)}var o=e("buffer").Buffer,y=e("./sha"),g=e("./sha256"),w=e("./rng"),b=e("./md5"),v={sha1:y,sha256:g,md5:b},m=64,_=new o(m);_.fill(0),n.createHash=function(e){return d(e)},n.createHmac=function(e,t){return d(e,t)},n.randomBytes=function(e,t){if(!t||!t.call)return new o(w(e));try{t.call(this,void 0,new o(w(e)))}catch(n){t(n)}},p(["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],function(e){n[e]=function(){h("sorry,",e,"is not implemented yet")}})}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:10}],6:[function(e,t,n){(function(n,r,o,i,u,a,f,s,c){function l(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,u=0;u<e.length;u+=16){var a=n,f=r,s=o,c=i;n=h(n,r,o,i,e[u+0],7,-680876936),i=h(i,n,r,o,e[u+1],12,-389564586),o=h(o,i,n,r,e[u+2],17,606105819),r=h(r,o,i,n,e[u+3],22,-1044525330),n=h(n,r,o,i,e[u+4],7,-176418897),i=h(i,n,r,o,e[u+5],12,1200080426),o=h(o,i,n,r,e[u+6],17,-1473231341),r=h(r,o,i,n,e[u+7],22,-45705983),n=h(n,r,o,i,e[u+8],7,1770035416),i=h(i,n,r,o,e[u+9],12,-1958414417),o=h(o,i,n,r,e[u+10],17,-42063),r=h(r,o,i,n,e[u+11],22,-1990404162),n=h(n,r,o,i,e[u+12],7,1804603682),i=h(i,n,r,o,e[u+13],12,-40341101),o=h(o,i,n,r,e[u+14],17,-1502002290),r=h(r,o,i,n,e[u+15],22,1236535329),n=p(n,r,o,i,e[u+1],5,-165796510),i=p(i,n,r,o,e[u+6],9,-1069501632),o=p(o,i,n,r,e[u+11],14,643717713),r=p(r,o,i,n,e[u+0],20,-373897302),n=p(n,r,o,i,e[u+5],5,-701558691),i=p(i,n,r,o,e[u+10],9,38016083),o=p(o,i,n,r,e[u+15],14,-660478335),r=p(r,o,i,n,e[u+4],20,-405537848),n=p(n,r,o,i,e[u+9],5,568446438),i=p(i,n,r,o,e[u+14],9,-1019803690),o=p(o,i,n,r,e[u+3],14,-187363961),r=p(r,o,i,n,e[u+8],20,1163531501),n=p(n,r,o,i,e[u+13],5,-1444681467),i=p(i,n,r,o,e[u+2],9,-51403784),o=p(o,i,n,r,e[u+7],14,1735328473),r=p(r,o,i,n,e[u+12],20,-1926607734),n=y(n,r,o,i,e[u+5],4,-378558),i=y(i,n,r,o,e[u+8],11,-2022574463),o=y(o,i,n,r,e[u+11],16,1839030562),r=y(r,o,i,n,e[u+14],23,-35309556),n=y(n,r,o,i,e[u+1],4,-1530992060),i=y(i,n,r,o,e[u+4],11,1272893353),o=y(o,i,n,r,e[u+7],16,-155497632),r=y(r,o,i,n,e[u+10],23,-1094730640),n=y(n,r,o,i,e[u+13],4,681279174),i=y(i,n,r,o,e[u+0],11,-358537222),o=y(o,i,n,r,e[u+3],16,-722521979),r=y(r,o,i,n,e[u+6],23,76029189),n=y(n,r,o,i,e[u+9],4,-640364487),i=y(i,n,r,o,e[u+12],11,-421815835),o=y(o,i,n,r,e[u+15],16,530742520),r=y(r,o,i,n,e[u+2],23,-995338651),n=g(n,r,o,i,e[u+0],6,-198630844),i=g(i,n,r,o,e[u+7],10,1126891415),o=g(o,i,n,r,e[u+14],15,-1416354905),r=g(r,o,i,n,e[u+5],21,-57434055),n=g(n,r,o,i,e[u+12],6,1700485571),i=g(i,n,r,o,e[u+3],10,-1894986606),o=g(o,i,n,r,e[u+10],15,-1051523),r=g(r,o,i,n,e[u+1],21,-2054922799),n=g(n,r,o,i,e[u+8],6,1873313359),i=g(i,n,r,o,e[u+15],10,-30611744),o=g(o,i,n,r,e[u+6],15,-1560198380),r=g(r,o,i,n,e[u+13],21,1309151649),n=g(n,r,o,i,e[u+4],6,-145523070),i=g(i,n,r,o,e[u+11],10,-1120210379),o=g(o,i,n,r,e[u+2],15,718787259),r=g(r,o,i,n,e[u+9],21,-343485551),n=w(n,a),r=w(r,f),o=w(o,s),i=w(i,c)}return Array(n,r,o,i)}function d(e,t,n,r,o,i){return w(b(w(w(t,e),w(r,i)),o),n)}function h(e,t,n,r,o,i,u){return d(t&n|~t&r,e,t,o,i,u)}function p(e,t,n,r,o,i,u){return d(t&r|n&~r,e,t,o,i,u)}function y(e,t,n,r,o,i,u){return d(t^n^r,e,t,o,i,u)}function g(e,t,n,r,o,i,u){return d(n^(t|~r),e,t,o,i,u)}function w(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}function b(e,t){return e<<t|e>>>32-t}var v=e("./helpers");t.exports=function(e){return v.hash(e,l,16)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],7:[function(e,t,n){(function(e,n,r,o,i,u,a,f,s){!function(){var e,n,r=this;e=function(e){for(var t,t,n=new Array(e),r=0;r<e;r++)0==(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n},r.crypto&&crypto.getRandomValues&&(n=function(e){var t=new Uint8Array(e);return crypto.getRandomValues(t),t}),t.exports=n||e}()}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:10}],8:[function(e,t,n){(function(n,r,o,i,u,a,f,s,c){function l(e,t){e[t>>5]|=128<<24-t%32,e[(t+64>>9<<4)+15]=t;for(var n=Array(80),r=1732584193,o=-271733879,i=-1732584194,u=271733878,a=-1009589776,f=0;f<e.length;f+=16){for(var s=r,c=o,l=i,g=u,w=a,b=0;b<80;b++){b<16?n[b]=e[f+b]:n[b]=y(n[b-3]^n[b-8]^n[b-14]^n[b-16],1);var v=p(p(y(r,5),d(b,o,i,u)),p(p(a,n[b]),h(b)));a=u,u=i,i=y(o,30),o=r,r=v}r=p(r,s),o=p(o,c),i=p(i,l),u=p(u,g),a=p(a,w)}return Array(r,o,i,u,a)}function d(e,t,n,r){return e<20?t&n|~t&r:e<40?t^n^r:e<60?t&n|t&r|n&r:t^n^r}function h(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function p(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}function y(e,t){return e<<t|e>>>32-t}var g=e("./helpers");t.exports=function(e){return g.hash(e,l,20,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],9:[function(e,t,n){(function(n,r,o,i,u,a,f,s,c){var l=e("./helpers"),d=function(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n},h=function(e,t){return e>>>t|e<<32-t},p=function(e,t){return e>>>t},y=function(e,t,n){return e&t^~e&n},g=function(e,t,n){return e&t^e&n^t&n},w=function(e){return h(e,2)^h(e,13)^h(e,22)},b=function(e){
return h(e,6)^h(e,11)^h(e,25)},v=function(e){return h(e,7)^h(e,18)^p(e,3)},m=function(e){return h(e,17)^h(e,19)^p(e,10)},_=function(e,t){var n,r,o,i,u,a,f,s,c,l,h,p,_=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),E=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),I=new Array(64);e[t>>5]|=128<<24-t%32,e[(t+64>>9<<4)+15]=t;for(var c=0;c<e.length;c+=16){n=E[0],r=E[1],o=E[2],i=E[3],u=E[4],a=E[5],f=E[6],s=E[7];for(var l=0;l<64;l++)l<16?I[l]=e[l+c]:I[l]=d(d(d(m(I[l-2]),I[l-7]),v(I[l-15])),I[l-16]),h=d(d(d(d(s,b(u)),y(u,a,f)),_[l]),I[l]),p=d(w(n),g(n,r,o)),s=f,f=a,a=u,u=d(i,h),i=o,o=r,r=n,n=d(h,p);E[0]=d(n,E[0]),E[1]=d(r,E[1]),E[2]=d(o,E[2]),E[3]=d(i,E[3]),E[4]=d(u,E[4]),E[5]=d(a,E[5]),E[6]=d(f,E[6]),E[7]=d(s,E[7])}return E};t.exports=function(e){return l.hash(e,_,32,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],10:[function(e,t,n){(function(e,n,r,o,i,u,a,f,s){function c(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=c,e.addListener=c,e.once=c,e.off=c,e.removeListener=c,e.removeAllListeners=c,e.emit=c,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:10}],11:[function(e,t,n){(function(e,t,r,o,i,u,a,f,s){n.read=function(e,t,n,r,o){var i,u,a=8*o-r-1,f=(1<<a)-1,s=f>>1,c=-7,l=n?o-1:0,d=n?-1:1,h=e[t+l];for(l+=d,i=h&(1<<-c)-1,h>>=-c,c+=a;c>0;i=256*i+e[t+l],l+=d,c-=8);for(u=i&(1<<-c)-1,i>>=-c,c+=r;c>0;u=256*u+e[t+l],l+=d,c-=8);if(0===i)i=1-s;else{if(i===f)return u?NaN:(h?-1:1)*(1/0);u+=Math.pow(2,r),i-=s}return(h?-1:1)*u*Math.pow(2,i-r)},n.write=function(e,t,n,r,o,i){var u,a,f,s=8*i-o-1,c=(1<<s)-1,l=c>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,p=r?1:-1,y=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,u=c):(u=Math.floor(Math.log(t)/Math.LN2),t*(f=Math.pow(2,-u))<1&&(u--,f*=2),t+=u+l>=1?d/f:d*Math.pow(2,1-l),t*f>=2&&(u++,f/=2),u+l>=c?(a=0,u=c):u+l>=1?(a=(t*f-1)*Math.pow(2,o),u+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,o),u=0));o>=8;e[n+h]=255&a,h+=p,a/=256,o-=8);for(u=u<<o|a,s+=o;s>0;e[n+h]=255&u,h+=p,u/=256,s-=8);e[n+h-p]|=128*y}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/ieee754/index.js","/node_modules/ieee754")},{buffer:3,lYpoI2:10}]},{},[1])(1)});

/***/ }),

/***/ 2100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = __webpack_require__(204)('json-rules-engine');
var isObjectLike = __webpack_require__(978);

var Condition = function () {
  function Condition(properties) {
    _classCallCheck(this, Condition);

    if (!properties) throw new Error('Condition: constructor options required');
    var booleanOperator = Condition.booleanOperator(properties);
    Object.assign(this, properties);
    if (booleanOperator) {
      var subConditions = properties[booleanOperator];
      if (!(subConditions instanceof Array)) {
        throw new Error('"' + booleanOperator + '" must be an array');
      }
      this.operator = booleanOperator;
      // boolean conditions always have a priority; default 1
      this.priority = parseInt(properties.priority, 10) || 1;
      this[booleanOperator] = subConditions.map(function (c) {
        return new Condition(c);
      });
    } else {
      if (!properties.hasOwnProperty('fact')) throw new Error('Condition: constructor "fact" property required');
      if (!properties.hasOwnProperty('operator')) throw new Error('Condition: constructor "operator" property required');
      if (!properties.hasOwnProperty('value')) throw new Error('Condition: constructor "value" property required');

      // a non-boolean condition does not have a priority by default. this allows
      // priority to be dictated by the fact definition
      if (properties.hasOwnProperty('priority')) {
        properties.priority = parseInt(properties.priority, 10);
      }
    }
  }

  /**
   * Converts the condition into a json-friendly structure
   * @param   {Boolean} stringify - whether to return as a json string
   * @returns {string,object} json string or json-friendly object
   */


  _createClass(Condition, [{
    key: 'toJSON',
    value: function toJSON() {
      var stringify = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var props = {};
      if (this.priority) {
        props.priority = this.priority;
      }
      var oper = Condition.booleanOperator(this);
      if (oper) {
        props[oper] = this[oper].map(function (c) {
          return c.toJSON(stringify);
        });
      } else {
        props.operator = this.operator;
        props.value = this.value;
        props.fact = this.fact;
        if (this.factResult !== undefined) {
          props.factResult = this.factResult;
        }
        if (this.result !== undefined) {
          props.result = this.result;
        }
        if (this.params) {
          props.params = this.params;
        }
        if (this.path) {
          props.path = this.path;
        }
      }
      if (stringify) {
        return JSON.stringify(props);
      }
      return props;
    }

    /**
     * Interprets .value as either a primitive, or if a fact, retrieves the fact value
     */

  }, {
    key: '_getValue',
    value: function _getValue(almanac) {
      var value = this.value;
      if (isObjectLike(value) && value.hasOwnProperty('fact')) {
        // value: { fact: 'xyz' }
        return almanac.factValue(value.fact, value.params, value.path);
      }
      return Promise.resolve(value);
    }

    /**
     * Takes the fact result and compares it to the condition 'value', using the operator
     *   LHS                      OPER       RHS
     * <fact + params + path>  <operator>  <value>
     *
     * @param   {Almanac} almanac
     * @param   {Map} operatorMap - map of available operators, keyed by operator name
     * @returns {Boolean} - evaluation result
     */

  }, {
    key: 'evaluate',
    value: function evaluate(almanac, operatorMap) {
      var _this = this;

      if (!almanac) return Promise.reject(new Error('almanac required'));
      if (!operatorMap) return Promise.reject(new Error('operatorMap required'));
      if (this.isBooleanOperator()) return Promise.reject(new Error('Cannot evaluate() a boolean condition'));

      var op = operatorMap.get(this.operator);
      if (!op) return Promise.reject(new Error('Unknown operator: ' + this.operator));

      return this._getValue(almanac) // todo - parallelize
      .then(function (rightHandSideValue) {
        return almanac.factValue(_this.fact, _this.params, _this.path).then(function (leftHandSideValue) {
          var result = op.evaluate(leftHandSideValue, rightHandSideValue);
          debug('condition::evaluate <' + leftHandSideValue + ' ' + _this.operator + ' ' + rightHandSideValue + '?> (' + result + ')');
          return { result: result, leftHandSideValue: leftHandSideValue, rightHandSideValue: rightHandSideValue, operator: _this.operator };
        });
      });
    }

    /**
     * Returns the boolean operator for the condition
     * If the condition is not a boolean condition, the result will be 'undefined'
     * @return {string 'all' or 'any'}
     */

  }, {
    key: 'booleanOperator',


    /**
     * Returns the condition's boolean operator
     * Instance version of Condition.isBooleanOperator
     * @returns {string,undefined} - 'any', 'all', or undefined (if not a boolean condition)
     */
    value: function booleanOperator() {
      return Condition.booleanOperator(this);
    }

    /**
     * Whether the operator is boolean ('all', 'any')
     * @returns {Boolean}
     */

  }, {
    key: 'isBooleanOperator',
    value: function isBooleanOperator() {
      return Condition.booleanOperator(this) !== undefined;
    }
  }], [{
    key: 'booleanOperator',
    value: function booleanOperator(condition) {
      if (condition.hasOwnProperty('any')) {
        return 'any';
      } else if (condition.hasOwnProperty('all')) {
        return 'all';
      }
    }
  }]);

  return Condition;
}();

exports.default = Condition;

/***/ }),

/***/ 2101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = __webpack_require__(2102);

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RuleResult = function () {
  function RuleResult(conditions, event, priority) {
    _classCallCheck(this, RuleResult);

    this.conditions = (0, _clone2.default)(conditions);
    this.event = (0, _clone2.default)(event);
    this.priority = (0, _clone2.default)(priority);
    this.result = null;
  }

  _createClass(RuleResult, [{
    key: 'setResult',
    value: function setResult(result) {
      this.result = result;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var stringify = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var props = {
        conditions: this.conditions.toJSON(false),
        event: this.event,
        priority: this.priority,
        result: this.result
      };
      if (stringify) {
        return JSON.stringify(props);
      }
      return props;
    }
  }]);

  return RuleResult;
}();

exports.default = RuleResult;

/***/ }),

/***/ 2102:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10).Buffer))

/***/ }),

/***/ 2103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fact = __webpack_require__(642);

var _fact2 = _interopRequireDefault(_fact);

var _errors = __webpack_require__(2104);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = __webpack_require__(204)('json-rules-engine');
var verbose = __webpack_require__(204)('json-rules-engine-verbose');
var selectn = __webpack_require__(2105);
var isObjectLike = __webpack_require__(978);
var warn = __webpack_require__(204)('json-rules-engine:warn');

/**
 * Fact results lookup
 * Triggers fact computations and saves the results
 * A new almanac is used for every engine run()
 */

var Almanac = function () {
  function Almanac(factMap) {
    var runtimeFacts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Almanac);

    this.factMap = new Map(factMap);
    this.factResultsCache = new Map(); // { cacheKey:  Promise<factValu> }

    for (var factId in runtimeFacts) {
      var fact = void 0;
      if (runtimeFacts[factId] instanceof _fact2.default) {
        fact = runtimeFacts[factId];
      } else {
        fact = new _fact2.default(factId, runtimeFacts[factId]);
      }

      this._addConstantFact(fact);
      debug('almanac::constructor initialized runtime fact:' + fact.id + ' with ' + fact.value + '<' + _typeof(fact.value) + '>');
    }
  }

  /**
   * Retrieve fact by id, raising an exception if it DNE
   * @param  {String} factId
   * @return {Fact}
   */


  _createClass(Almanac, [{
    key: '_getFact',
    value: function _getFact(factId) {
      return this.factMap.get(factId);
    }

    /**
     * Registers fact with the almanac
     * @param {[type]} fact [description]
     */

  }, {
    key: '_addConstantFact',
    value: function _addConstantFact(fact) {
      this.factMap.set(fact.id, fact);
      this._setFactValue(fact, {}, fact.value);
    }

    /**
     * Sets the computed value of a fact
     * @param {Fact} fact
     * @param {Object} params - values for differentiating this fact value from others, used for cache key
     * @param {Mixed} value - computed value
     */

  }, {
    key: '_setFactValue',
    value: function _setFactValue(fact, params, value) {
      var cacheKey = fact.getCacheKey(params);
      var factValue = Promise.resolve(value);
      if (cacheKey) {
        this.factResultsCache.set(cacheKey, factValue);
      }
      return factValue;
    }

    /**
     * Adds a constant fact during runtime.  Can be used mid-run() to add additional information
     * @param {String} fact - fact identifier
     * @param {Mixed} value - constant value of the fact
     */

  }, {
    key: 'addRuntimeFact',
    value: function addRuntimeFact(factId, value) {
      var fact = new _fact2.default(factId, value);
      return this._addConstantFact(fact);
    }

    /**
     * Returns the value of a fact, based on the given parameters.  Utilizes the 'almanac' maintained
     * by the engine, which cache's fact computations based on parameters provided
     * @param  {string} factId - fact identifier
     * @param  {Object} params - parameters to feed into the fact.  By default, these will also be used to compute the cache key
     * @param  {String} path - object
     * @return {Promise} a promise which will resolve with the fact computation.
     */

  }, {
    key: 'factValue',
    value: function factValue(factId) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var factValuePromise = void 0;
      var fact = this._getFact(factId);
      if (fact === undefined) {
        return Promise.reject(new _errors.UndefinedFactError('Undefined fact: ' + factId));
      }
      if (fact.isConstant()) {
        factValuePromise = Promise.resolve(fact.calculate(params, this));
      } else {
        var cacheKey = fact.getCacheKey(params);
        var cacheVal = cacheKey && this.factResultsCache.get(cacheKey);
        if (cacheVal) {
          factValuePromise = Promise.resolve(cacheVal);
          debug('almanac::factValue cache hit for fact:' + factId);
        } else {
          verbose('almanac::factValue cache miss for fact:' + factId + '; calculating');
          factValuePromise = this._setFactValue(fact, params, fact.calculate(params, this));
        }
      }
      if (path) {
        return factValuePromise.then(function (factValue) {
          if (isObjectLike(factValue)) {
            var pathValue = selectn(path)(factValue);
            debug('condition::evaluate extracting object property ' + path + ', received: ' + pathValue);
            return pathValue;
          } else {
            warn('condition::evaluate could not compute object path(' + path + ') of non-object: ' + factValue + ' <' + (typeof factValue === 'undefined' ? 'undefined' : _typeof(factValue)) + '>; continuing with ' + factValue);
            return factValue;
          }
        });
      }
      return factValuePromise;
    }
  }]);

  return Almanac;
}();

exports.default = Almanac;

/***/ }),

/***/ 2104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UndefinedFactError = exports.UndefinedFactError = function (_Error) {
  _inherits(UndefinedFactError, _Error);

  function UndefinedFactError() {
    var _ref;

    _classCallCheck(this, UndefinedFactError);

    for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = UndefinedFactError.__proto__ || Object.getPrototypeOf(UndefinedFactError)).call.apply(_ref, [this].concat(props)));

    _this.code = 'UNDEFINED_FACT';
    return _this;
  }

  return UndefinedFactError;
}(Error);

/***/ }),

/***/ 2105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry2 = __webpack_require__(2106)
var debug = __webpack_require__(2108)('selectn')
var dotted = __webpack_require__(2111)
var splits = __webpack_require__(2112)
var string = Object.prototype.toString

module.exports = curry2(selectn)

/**
 * Curried property accessor function that resolves deeply-nested object properties via dot/bracket-notation
 * string path while mitigating `TypeErrors` via friendly and composable API.
 *
 * @param {String|Array} path
 * Dot/bracket-notation string path or array.
 *
 * @param {Object} object
 * Object to access.
 *
 * @return {Function|*|undefined}
 * (1) returns `selectn/1` when partially applied.
 * (2) returns value at path if path exists.
 * (3) returns undefined if path does not exist.
 */
function selectn (path, object) {
  debug('arguments:', {
    path: path,
    object: object
  })

  var idx = -1
  var seg = string.call(path) === '[object Array]' ? path : splits(dotted(path))
  var end = seg.length
  var ref = end ? object : void 0

  while (++idx < end) {
    if (Object(ref) !== ref) return void 0
    ref = ref[seg[idx]]
  }

  debug('ref:', ref)
  return typeof ref === 'function' ? ref() : ref
}


/***/ }),

/***/ 2106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * imports.
 */

var bind = Function.prototype.bind || __webpack_require__(2107)

/*!
 * exports.
 */

module.exports = curry2

/**
 * Curry a binary function.
 *
 * @param {Function} fn
 * Binary function to curry.
 *
 * @param {Object} [self]
 * Function `this` context.
 *
 * @return {Function|*}
 * If partially applied, return unary function, otherwise, return result of full application.
 */

function curry2 (fn, self) {
  var out = function () {
    if (arguments.length === 0) return out

    return arguments.length > 1
      ? fn.apply(self, arguments)
      : bind.call(fn, self, arguments[0])
  }

  out.uncurry = function uncurry () {
    return fn
  }

  return out
}


/***/ }),

/***/ 2107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function(boundThis) {
  var f = this
    , ret

  if (arguments.length < 2)
    ret = function() {
      if (this instanceof ret) {
        var ret_ = f.apply(this, arguments)
        return Object(ret_) === ret_
          ? ret_
          : this
      }
      else
        return f.apply(boundThis, arguments)
    }
  else {
    var boundArgs = new Array(arguments.length - 1)
    for (var i = 1; i < arguments.length; i++)
      boundArgs[i - 1] = arguments[i]

    ret = function() {
      var boundLen = boundArgs.length
        , args = new Array(boundLen + arguments.length)
        , i
      for (i = 0; i < boundLen; i++)
        args[i] = boundArgs[i]
      for (i = 0; i < arguments.length; i++)
        args[boundLen + i] = arguments[i]

      if (this instanceof ret) {
        var ret_ = f.apply(this, args)
        return Object(ret_) === ret_
          ? ret_
          : this
      }
      else
        return f.apply(boundThis, args)
    }
  }

  ret.prototype = f.prototype
  return ret
}


/***/ }),

/***/ 2108:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(2109);
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
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 2109:
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
exports.humanize = __webpack_require__(2110);

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
 * Previous log timestamp.
 */

var prevTime;

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

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
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

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
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

/***/ 2110:
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

/***/ 2111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * exports.
 */

module.exports = brackets2dots;

/*!
 * regexp patterns.
 */

var REPLACE_BRACKETS = /\[([^\[\]]+)\]/g;
var LFT_RT_TRIM_DOTS = /^[.]*|[.]*$/g;

/**
 * Convert string with bracket notation to dot property notation.
 *
 * ### Examples:
 *
 *      brackets2dots('group[0].section.a.seat[3]')
 *      //=> 'group.0.section.a.seat.3'
 *
 *      brackets2dots('[0].section.a.seat[3]')
 *      //=> '0.section.a.seat.3'
 *
 *      brackets2dots('people[*].age')
 *      //=> 'people.*.age'
 *
 * @param  {String} string
 * original string
 *
 * @return {String}
 * dot/bracket-notation string
 */

function brackets2dots(string) {
  return ({}).toString.call(string) == '[object String]'
       ? string.replace(REPLACE_BRACKETS, '.$1').replace(LFT_RT_TRIM_DOTS, '')
       : ''
}


/***/ }),

/***/ 2112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = Object.prototype.toString

/**
 * Transform dot-delimited strings to array of strings.
 *
 * @param  {String} string
 * Dot-delimited string.
 *
 * @return {Array}
 * Array of strings.
 */

function dotsplit (string) {
  var idx = -1
  var str = compact(normalize(string).split('.'))
  var end = str.length
  var out = []

  while (++idx < end) {
    out.push(todots(str[idx]))
  }

  return out
}

/**
 * Replace escapes with a placeholder.
 *
 * @param  {String} string
 * Dot-delimited string.
 *
 * @return {String}
 * Dot-delimited string with placeholders in place of escapes.
 */

function normalize (string) {
  return (toString.call(string) === '[object String]' ? string : '').replace(/\\\./g, '\uffff')
}

/**
 * Drop empty values from array.
 *
 * @param  {Array} array
 * Array of strings.
 *
 * @return {Array}
 * Array of strings (empty values dropped).
 */

function compact (arr) {
  var idx = -1
  var end = arr.length
  var out = []

  while (++idx < end) {
    if (arr[idx]) out.push(arr[idx])
  }

  return out
}

/**
 * Change placeholder to dots.
 *
 * @param  {String} string
 * Dot-delimited string with placeholders.
 *
 * @return {String}
 * Dot-delimited string without placeholders.
 */

function todots (string) {
  return string.replace(/\uffff/g, '.')
}

/*!
 * exports.
 */

module.exports = dotsplit


/***/ }),

/***/ 2113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SuccessEventFact = function SuccessEventFact() {
  var successTriggers = [];
  return function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (params.event) {
      successTriggers.push(params.event);
    }
    return successTriggers;
  };
};

exports.SuccessEventFact = SuccessEventFact;

/***/ }),

/***/ 2114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _operator = __webpack_require__(643);

var _operator2 = _interopRequireDefault(_operator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Operators = [];
Operators.push(new _operator2.default('equal', function (a, b) {
  return a === b;
}));
Operators.push(new _operator2.default('notEqual', function (a, b) {
  return a !== b;
}));
Operators.push(new _operator2.default('in', function (a, b) {
  return b.indexOf(a) > -1;
}));
Operators.push(new _operator2.default('notIn', function (a, b) {
  return b.indexOf(a) === -1;
}));

Operators.push(new _operator2.default('contains', function (a, b) {
  return a.indexOf(b) > -1;
}, Array.isArray));
Operators.push(new _operator2.default('doesNotContain', function (a, b) {
  return a.indexOf(b) === -1;
}, Array.isArray));

function numberValidator(factValue) {
  return Number.parseFloat(factValue).toString() !== 'NaN';
}
Operators.push(new _operator2.default('lessThan', function (a, b) {
  return a < b;
}, numberValidator));
Operators.push(new _operator2.default('lessThanInclusive', function (a, b) {
  return a <= b;
}, numberValidator));
Operators.push(new _operator2.default('greaterThan', function (a, b) {
  return a > b;
}, numberValidator));
Operators.push(new _operator2.default('greaterThanInclusive', function (a, b) {
  return a >= b;
}, numberValidator));

exports.default = Operators;

/***/ }),

/***/ 2115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = ContextGetter;
/* harmony export (immutable) */ __webpack_exports__["b"] = ContextSetter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_RequesterTabConstants__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_WorkspaceViewModeService__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_pipelines_user_action__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_model_event__ = __webpack_require__(5);






const contextMap = {
  requester: {
    activeWorkspace: {
      get: () => {
        return {
          id: Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id,
          name: Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').name,
          type: Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').type };

      },

      set: activeWorkspace => {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').type === activeWorkspace.type) {
          return;
        }
        let workspaceId,
        personalWorkspaces = Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('WorkspaceStore').personalWorkspaces,
        teamWorkspaces = Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('WorkspaceStore').teamWorkspaces;

        if (activeWorkspace.type === 'personal' && !_.isEmpty(personalWorkspaces)) {
          let personalWorkspace = _.head(personalWorkspaces);
          workspaceId = personalWorkspace && personalWorkspace.id;
        } else
        if (activeWorkspace.type === 'team' && !_.isEmpty(teamWorkspaces)) {
          let teamWorkspace = _.head(teamWorkspaces);
          workspaceId = teamWorkspace && teamWorkspace.id;
        }

        workspaceId && Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').switchWorkspace(workspaceId);
      } },

    activeView: {
      get: () => {
        return Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode;
      },

      set: view => {
        if (view === 'build') {
          __WEBPACK_IMPORTED_MODULE_2__services_WorkspaceViewModeService__["a" /* default */].openBuildMode();
        } else
        if (view === 'browse') {
          __WEBPACK_IMPORTED_MODULE_2__services_WorkspaceViewModeService__["a" /* default */].openBrowseMode();
        }
      } },


    builder: {
      activeEnvironment: {
        get: () => {
          return {
            id: Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id,
            name: Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').name };

        },

        set: environment => {
          let activeWorkspaceSessionId = Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').id;

          // dispatchUserAction to update the particular environment id
          Object(__WEBPACK_IMPORTED_MODULE_3__modules_pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__modules_model_event__["a" /* createEvent */])(
          'setActiveEnvironment',
          'workspacesession',
          {
            workspaceSession: { id: activeWorkspaceSessionId },
            activeEnvironment: environment.id }));


        } },


      activeTab: {
        get: () => {
          let activeTabId = Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').activeEditor,
          editorStore = Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('EditorStore').find(activeTabId);
          return {
            id: editorStore.id,
            lifecycle: editorStore.lifecycle,
            model: editorStore.model.resourceToSave() };

        } } },



    sidebar: {
      activeTab: {
        get: () => {
          return pm.settings.getSetting('activeSidebarSection');
        },

        set: tab => {
          if (tab === pm.settings.getSetting('activeSidebarSection')) {
            return;
          }
          pm.settings.setSetting('activeSidebarSection', tab);
          if (!pm.settings.getSetting('isRequesterSidebarOpen')) {
            pm.mediator.trigger('toggleSidebar');
          }
        } } } } };





/**
                    *
                    * @param {*} key
                    */
function ContextGetter(key) {
  let path = _.replace(key, /\//g, '.'),
  context = _.get(contextMap, path);
  return context && context.get();
}

/**
   *
   * @param {*} key
   * @param {*} value
   */
function ContextSetter(key, value) {
  let path = _.replace(key, /\//g, '.'),
  context = _.get(contextMap, path);
  context && context.set(value);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flattenObject;
/**
 * Flattens a given Object
 */
function flattenObject(obj) {
  var toReturn = {};

  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;

    if (typeof obj[i] == 'object') {
      var flatObject = flattenObject(obj[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[i + '.' + x] = flatObject[x];
      }
    } else {
      toReturn[i] = obj[i];
    }
  }
  return toReturn;
}

/***/ }),

/***/ 2117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_UIEventService__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_XPaths_XPathManager__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_UIEventConstants__ = __webpack_require__(249);





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
  timeout = setTimeout(unsubscribeHandler, MAX_TIMEOUT);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2118:
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

/***/ 2119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bootRuntimeListeners;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_RuntimeRequestExecutionListener__ = __webpack_require__(2120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_RuntimeRequestAuthorizationListener__ = __webpack_require__(2121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_services_RuntimeConsoleEventsListener__ = __webpack_require__(2122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_RuntimeRequestDownloadListener__ = __webpack_require__(2123);





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
  pm.eventBus.channel('postman-runtime').subscribe(__WEBPACK_IMPORTED_MODULE_1__modules_services_RuntimeRequestAuthorizationListener__["a" /* handleRequestAuthorizationEvents */]);
  pm.eventBus.channel('postman-runtime').subscribe(__WEBPACK_IMPORTED_MODULE_2__modules_services_RuntimeConsoleEventsListener__["a" /* handleConsoleLogEvents */]);
  pm.eventBus.channel('postman-runtime').subscribe(__WEBPACK_IMPORTED_MODULE_3__modules_services_RuntimeRequestDownloadListener__["a" /* handleRequestDownloadEvent */]);

  pm.logger.info('RuntimeListeners~boot- Success');
  cb();
}

/***/ }),

/***/ 2120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleRequestExecutionEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(7);



const NAMESPACE_REQUEST_EXECUTION = 'requestexecution';

let requestExecutionEventHandlers = {
  error(event, executionStore) {
    let eventData = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event);

    executionStore.setError({
      phase: eventData.phase,
      error: eventData.error });

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

    executionStore.updateResponseBody(eventData.responseBody);
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

/***/ 2121:
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

/***/ 2122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleConsoleLogEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_VariableSessionService__ = __webpack_require__(139);
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

/***/ 2123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleRequestDownloadEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_services_filesystem__ = __webpack_require__(437);




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

/***/ 2124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 396:
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

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = initializeConfigurations;
/* unused harmony export initializeServices */
/* unused harmony export subscribeToModelEvents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_Configuration__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_FeatureFlags__ = __webpack_require__(401);
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

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserConfigurationController__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultConfigurationController__ = __webpack_require__(399);


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

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let defaultConfiguration = __webpack_require__(400);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAll: function () {
    return Promise.resolve(defaultConfiguration);
  } });

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

module.exports = {"editor.requestEditorLayoutName":"layout-1-column","request.autoPersistVariables":true,"user.plansToAllowUpgrade":[],"workspace.visibilityAvailablePlans":[],"editor.openInNew":false}

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserFeatureFlagController__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultFeatureFlagController__ = __webpack_require__(402);


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

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let defaultFeatureFlags = __webpack_require__(403);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAll: function () {
    return Promise.resolve(defaultFeatureFlags);
  } });

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = {"inviteByNonAdmin":false,"replaceElements":false}

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export activateTrial */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return upgradeToPro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return openAccountSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return openTeamSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return openTeamBilling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return openUserSessions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return openUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return openNotificationPreferences; });
/* unused harmony export openPostmanProIntegration */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return openInviteUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return openPostmanUsages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return openCollectionLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return openAuditLogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return openEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return manageWorkspaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return openIntegrationBrowse; });
/* unused harmony export manageMembers */
/* unused harmony export shareWorkspace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return openTrash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getEntityDetailsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCollectionPublishURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return openEnterprise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return openArchivedCollections; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__ = __webpack_require__(202);



/**
                                                                 *
                                                                 */
function activateTrial() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard?showtrialstart=true`);
}

/**
   * @todo need to go via dashboard `/dpxy/buy'
   * openAuthenticatedRoute(`${pm.appUrl}/dpxy/buy`);
   */
function upgradeToPro(options = {}) {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.dashboardUrl}/purchase?quantity=${options.quantity}`);
}

/**
   *
   */
function openTeam() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/teams`);
}

/**
   *
   */
function openPostmanProIntegration() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/integrations/pm_pro_api/list`);
}

/**
   *
   */
function openInviteUsers() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/teams`);
}

/**
   *
   */
function openAccountSettings() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/profile`);
}

/**
   *
   */
function openTeamSettings() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/settings/team`);
}

/**
   *
   */
function openTeamBilling() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/billing`);
}

/**
   *
   */
function openUserSessions() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/sessions`);
}

function openUserProfile() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/collections/private`);
}

function openNotificationPreferences() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/notifications`);
}

function openPostmanUsages() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/usage`);
}

function openCollectionLink() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/dashboard/collections/links`);
}

function openAuditLogs() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/audit`);
}

function openEntity(type, id, workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(getEntityDetailsURL(type, id, workspaceId));
}

function editEntity(type, id, workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/${type}/${id}/edit?workspace=${workspaceId}`);
}

function manageWorkspaces() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/workspaces`);
}

function manageMembers(workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/workspaces/${workspaceId}/edit`);
}

function shareWorkspace(workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/workspaces/${workspaceId}/share`);
}

function openIntegrationBrowse(workspaceId) {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/workspaces/${workspaceId}/integrations?view=browse`);
}

function openTrash() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/me/trash`);
}

function openEnterprise() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.appUrl}/dpxy/me/purchase`);
}

function openArchivedCollections() {
  Object(__WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__["t" /* openAuthenticatedRoute */])(`${pm.dashboardUrl}/usage/archive`);
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

/***/ 537:
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ 628:
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

/***/ 629:
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

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection__ = __webpack_require__(62);
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

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_sanitise_user_content__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_sanitise_user_content___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_sanitise_user_content__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_DashboardService__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_messaging_Toast__ = __webpack_require__(632);







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
          Object(__WEBPACK_IMPORTED_MODULE_3__services_DashboardService__["l" /* openInviteUsers */])();
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

/***/ 632:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_InformationIcon__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_CloseIcon__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Markdown__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_UIEventService__ = __webpack_require__(97);







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

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export findSession */
/* unused harmony export clearOrphanSessions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bootSession; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceSessionController__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_WorkspaceController__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_v4__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__ = __webpack_require__(100);
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

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_sync_SyncManagerProxy__ = __webpack_require__(636);


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

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone__ = __webpack_require__(43);
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

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(16);


let _ = __webpack_require__(0);
let { ipcRenderer } = __webpack_require__(17);
let { Item, Request, Response, VariableScope } = __webpack_require__(62);

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

  prerequest(err, cursor, prResults, item) {
    let results = JSON.parse(prResults);
    _.forEach(results, test => {
      test.result.globals = new VariableScope(test.result.globals);
      test.result.environment = new VariableScope(test.result.environment);
    });
    return [JSON.parse(err), cursor, results, item && new Item(item)];
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

  test(err, cursor, testResults, item) {
    let results = JSON.parse(testResults);
    _.forEach(results, test => {
      test.result.globals = new VariableScope(test.result.globals);
      test.result.environment = new VariableScope(test.result.environment);
    });
    return [JSON.parse(err), cursor, results, item && new Item(item)];
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

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone__ = __webpack_require__(43);
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

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyListManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection__ = __webpack_require__(62);
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

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone__ = __webpack_require__(43);
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

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectHash = __webpack_require__(2099);

var _objectHash2 = _interopRequireDefault(_objectHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var verbose = __webpack_require__(204)('json-rules-engine-verbose');

var Fact = function () {
  /**
   * Returns a new fact instance
   * @param  {string} id - fact unique identifer
   * @param  {object} options
   * @param  {boolean} options.cache - whether to cache the fact's value for future rules
   * @param  {primitive|function} valueOrMethod - constant primitive, or method to call when computing the fact's value
   * @return {Fact}
   */
  function Fact(id, valueOrMethod, options) {
    _classCallCheck(this, Fact);

    this.id = id;
    var defaultOptions = { cache: true };
    if (typeof options === 'undefined') {
      options = defaultOptions;
    }
    if (typeof valueOrMethod !== 'function') {
      this.value = valueOrMethod;
      this.type = this.constructor.CONSTANT;
    } else {
      this.calculationMethod = valueOrMethod;
      this.type = this.constructor.DYNAMIC;
    }

    if (!this.id) throw new Error('factId required');
    if (typeof this.value === 'undefined' && typeof this.calculationMethod === 'undefined') {
      throw new Error('facts must have a value or method');
    }

    this.priority = parseInt(options.priority || 1, 10);
    this.options = Object.assign({}, defaultOptions, options);
    this.cacheKeyMethod = this.defaultCacheKeys;
    return this;
  }

  _createClass(Fact, [{
    key: 'isConstant',
    value: function isConstant() {
      return this.type === this.constructor.CONSTANT;
    }
  }, {
    key: 'isDynamic',
    value: function isDynamic() {
      return this.type === this.constructor.DYNAMIC;
    }

    /**
     * Return the fact value, based on provided parameters
     * @param  {object} params
     * @param  {Almanac} almanac
     * @return {any} calculation method results
     */

  }, {
    key: 'calculate',
    value: function calculate(params, almanac) {
      // if constant fact w/set value, return immediately
      if (this.hasOwnProperty('value')) {
        return this.value;
      }
      return this.calculationMethod(params, almanac);
    }

    /**
     * Return a cache key (MD5 string) based on parameters
     * @param  {object} obj - properties to generate a hash key from
     * @return {string} MD5 string based on the hash'd object
     */

  }, {
    key: 'defaultCacheKeys',


    /**
     * Default properties to use when caching a fact
     * Assumes every fact is a pure function, whose computed value will only
     * change when input params are modified
     * @param  {string} id - fact unique identifer
     * @param  {object} params - parameters passed to fact calcution method
     * @return {object} id + params
     */
    value: function defaultCacheKeys(id, params) {
      return { params: params, id: id };
    }

    /**
     * Generates the fact's cache key(MD5 string)
     * Returns nothing if the fact's caching has been disabled
     * @param  {object} params - parameters that would be passed to the computation method
     * @return {string} cache key
     */

  }, {
    key: 'getCacheKey',
    value: function getCacheKey(params) {
      if (this.options.cache === true) {
        var cacheProperties = this.cacheKeyMethod(this.id, params);
        var _hash = Fact.hashFromObject(cacheProperties);
        return _hash;
      }
    }
  }], [{
    key: 'hashFromObject',
    value: function hashFromObject(obj) {
      verbose('fact::hashFromObject generating cache key from:', obj);
      return (0, _objectHash2.default)(obj);
    }
  }]);

  return Fact;
}();

Fact.CONSTANT = 'CONSTANT';
Fact.DYNAMIC = 'DYNAMIC';

exports.default = Fact;

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Operator = function () {
  /**
   * Constructor
   * @param {string}   name - operator identifier
   * @param {function(factValue, jsonValue)} callback - operator evaluation method
   * @param {function}  [factValueValidator] - optional validator for asserting the data type of the fact
   * @returns {Operator} - instance
   */
  function Operator(name, cb, factValueValidator) {
    _classCallCheck(this, Operator);

    this.name = String(name);
    if (!name) throw new Error('Missing operator name');
    if (typeof cb !== 'function') throw new Error('Missing operator callback');
    this.cb = cb;
    this.factValueValidator = factValueValidator;
    if (!this.factValueValidator) this.factValueValidator = function () {
      return true;
    };
  }

  /**
   * Takes the fact result and compares it to the condition 'value', using the callback
   * @param   {mixed} factValue - fact result
   * @param   {mixed} jsonValue - "value" property of the condition
   * @returns {Boolean} - whether the values pass the operator test
   */


  _createClass(Operator, [{
    key: 'evaluate',
    value: function evaluate(factValue, jsonValue) {
      return this.factValueValidator(factValue) && this.cb(factValue, jsonValue);
    }
  }]);

  return Operator;
}();

exports.default = Operator;

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _condition = __webpack_require__(2100);

var _condition2 = _interopRequireDefault(_condition);

var _ruleResult = __webpack_require__(2101);

var _ruleResult2 = _interopRequireDefault(_ruleResult);

var _events = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = __webpack_require__(204)('json-rules-engine');

var Rule = function (_EventEmitter) {
  _inherits(Rule, _EventEmitter);

  /**
   * returns a new Rule instance
   * @param {object,string} options, or json string that can be parsed into options
   * @param {integer} options.priority (>1) - higher runs sooner.
   * @param {Object} options.event - event to fire when rule evaluates as successful
   * @param {string} options.event.type - name of event to emit
   * @param {string} options.event.params - parameters to pass to the event listener
   * @param {Object} options.conditions - conditions to evaluate when processing this rule
   * @return {Rule} instance
   */
  function Rule(options) {
    _classCallCheck(this, Rule);

    var _this = _possibleConstructorReturn(this, (Rule.__proto__ || Object.getPrototypeOf(Rule)).call(this));

    if (typeof options === 'string') {
      options = JSON.parse(options);
    }
    if (options && options.conditions) {
      _this.setConditions(options.conditions);
    }
    if (options && options.onSuccess) {
      _this.on('success', options.onSuccess);
    }
    if (options && options.onFailure) {
      _this.on('failure', options.onFailure);
    }

    var priority = options && options.priority || 1;
    _this.setPriority(priority);

    var event = options && options.event || { type: 'unknown' };
    _this.setEvent(event);
    return _this;
  }

  /**
   * Sets the priority of the rule
   * @param {integer} priority (>=1) - increasing the priority causes the rule to be run prior to other rules
   */


  _createClass(Rule, [{
    key: 'setPriority',
    value: function setPriority(priority) {
      priority = parseInt(priority, 10);
      if (priority <= 0) throw new Error('Priority must be greater than zero');
      this.priority = priority;
      return this;
    }

    /**
     * Sets the conditions to run when evaluating the rule.
     * @param {object} conditions - conditions, root element must be a boolean operator
     */

  }, {
    key: 'setConditions',
    value: function setConditions(conditions) {
      if (!conditions.hasOwnProperty('all') && !conditions.hasOwnProperty('any')) {
        throw new Error('"conditions" root must contain a single instance of "all" or "any"');
      }
      this.conditions = new _condition2.default(conditions);
      return this;
    }

    /**
     * Sets the event to emit when the conditions evaluate truthy
     * @param {object} event - event to emit
     * @param {string} event.type - event name to emit on
     * @param {string} event.params - parameters to emit as the argument of the event emission
     */

  }, {
    key: 'setEvent',
    value: function setEvent(event) {
      if (!event) throw new Error('Rule: setEvent() requires event object');
      if (!event.hasOwnProperty('type')) throw new Error('Rule: setEvent() requires event object with "type" property');
      this.event = {
        type: event.type
      };
      if (event.params) this.event.params = event.params;
      return this;
    }

    /**
     * Sets the engine to run the rules under
     * @param {object} engine
     * @returns {Rule}
     */

  }, {
    key: 'setEngine',
    value: function setEngine(engine) {
      this.engine = engine;
      return this;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var stringify = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var props = {
        conditions: this.conditions.toJSON(false),
        priority: this.priority,
        event: this.event
      };
      if (stringify) {
        return JSON.stringify(props);
      }
      return props;
    }

    /**
     * Priorizes an array of conditions based on "priority"
     *   When no explicit priority is provided on the condition itself, the condition's priority is determine by its fact
     * @param  {Condition[]} conditions
     * @return {Condition[][]} prioritized two-dimensional array of conditions
     *    Each outer array element represents a single priority(integer).  Inner array is
     *    all conditions with that priority.
     */

  }, {
    key: 'prioritizeConditions',
    value: function prioritizeConditions(conditions) {
      var _this2 = this;

      var factSets = conditions.reduce(function (sets, condition) {
        // if a priority has been set on this specific condition, honor that first
        // otherwise, use the fact's priority
        var priority = condition.priority;
        if (!priority) {
          var fact = _this2.engine.getFact(condition.fact);
          priority = fact && fact.priority || 1;
        }
        if (!sets[priority]) sets[priority] = [];
        sets[priority].push(condition);
        return sets;
      }, {});
      return Object.keys(factSets).sort(function (a, b) {
        return Number(a) > Number(b) ? -1 : 1; // order highest priority -> lowest
      }).map(function (priority) {
        return factSets[priority];
      });
    }

    /**
     * Evaluates the rule, starting with the root boolean operator and recursing down
     * All evaluation is done within the context of an almanac
     * @return {Promise(RuleResult)} rule evaluation result
     */

  }, {
    key: 'evaluate',
    value: function evaluate(almanac) {
      var _this3 = this;

      var ruleResult = new _ruleResult2.default(this.conditions, this.event, this.priority);

      /**
       * Evaluates the rule conditions
       * @param  {Condition} condition - condition to evaluate
       * @return {Promise(true|false)} - resolves with the result of the condition evaluation
       */
      var evaluateCondition = function evaluateCondition(condition) {
        if (condition.isBooleanOperator()) {
          var subConditions = condition[condition.operator];
          var comparisonPromise = void 0;
          if (condition.operator === 'all') {
            comparisonPromise = all(subConditions);
          } else {
            comparisonPromise = any(subConditions);
          }
          // for booleans, rule passing is determined by the all/any result
          return comparisonPromise.then(function (comparisonValue) {
            var passes = comparisonValue === true;
            condition.result = passes;
            return passes;
          });
        } else {
          return condition.evaluate(almanac, _this3.engine.operators).then(function (evaluationResult) {
            var passes = evaluationResult.result;
            condition.factResult = evaluationResult.leftHandSideValue;
            condition.result = passes;
            return passes;
          }).catch(function (err) {
            // any condition raising an undefined fact error is considered falsey when allowUndefinedFacts is enabled
            if (_this3.engine.allowUndefinedFacts && err.code === 'UNDEFINED_FACT') return false;
            throw err;
          });
        }
      };

      /**
       * Evalutes an array of conditions, using an 'every' or 'some' array operation
       * @param  {Condition[]} conditions
       * @param  {string(every|some)} array method to call for determining result
       * @return {Promise(boolean)} whether conditions evaluated truthy or falsey based on condition evaluation + method
       */
      var evaluateConditions = function evaluateConditions(conditions, method) {
        if (!Array.isArray(conditions)) conditions = [conditions];

        return Promise.all(conditions.map(function (condition) {
          return evaluateCondition(condition);
        })).then(function (conditionResults) {
          debug('rule::evaluateConditions results', conditionResults);
          return method.call(conditionResults, function (result) {
            return result === true;
          });
        });
      };

      /**
       * Evaluates a set of conditions based on an 'all' or 'any' operator.
       *   First, orders the top level conditions based on priority
       *   Iterates over each priority set, evaluating each condition
       *   If any condition results in the rule to be guaranteed truthy or falsey,
       *   it will short-circuit and not bother evaluating any additional rules
       * @param  {Condition[]} conditions - conditions to be evaluated
       * @param  {string('all'|'any')} operator
       * @return {Promise(boolean)} rule evaluation result
       */
      var prioritizeAndRun = function prioritizeAndRun(conditions, operator) {
        if (conditions.length === 0) {
          return Promise.resolve(true);
        }
        var method = Array.prototype.some;
        if (operator === 'all') {
          method = Array.prototype.every;
        }
        var orderedSets = _this3.prioritizeConditions(conditions);
        var cursor = Promise.resolve();
        orderedSets.forEach(function (set) {
          var stop = false;
          cursor = cursor.then(function (setResult) {
            // after the first set succeeds, don't fire off the remaining promises
            if (operator === 'any' && setResult === true || stop) {
              debug('prioritizeAndRun::detected truthy result; skipping remaining conditions');
              stop = true;
              return true;
            }

            // after the first set fails, don't fire off the remaining promises
            if (operator === 'all' && setResult === false || stop) {
              debug('prioritizeAndRun::detected falsey result; skipping remaining conditions');
              stop = true;
              return false;
            }
            // all conditions passed; proceed with running next set in parallel
            return evaluateConditions(set, method);
          });
        });
        return cursor;
      };

      /**
       * Runs an 'any' boolean operator on an array of conditions
       * @param  {Condition[]} conditions to be evaluated
       * @return {Promise(boolean)} condition evaluation result
       */
      var any = function any(conditions) {
        return prioritizeAndRun(conditions, 'any');
      };

      /**
       * Runs an 'all' boolean operator on an array of conditions
       * @param  {Condition[]} conditions to be evaluated
       * @return {Promise(boolean)} condition evaluation result
       */
      var all = function all(conditions) {
        return prioritizeAndRun(conditions, 'all');
      };

      /**
       * Emits based on rule evaluation result, and decorates ruleResult with 'result' property
       * @param {Boolean} result
       */
      var processResult = function processResult(result) {
        ruleResult.setResult(result);

        if (result) _this3.emit('success', ruleResult.event, almanac, ruleResult);else _this3.emit('failure', ruleResult.event, almanac, ruleResult);
        return ruleResult;
      };

      if (ruleResult.conditions.any) {
        return any(ruleResult.conditions.any).then(function (result) {
          return processResult(result);
        });
      } else {
        return all(ruleResult.conditions.all).then(function (result) {
          return processResult(result);
        });
      }
    }
  }]);

  return Rule;
}(_events.EventEmitter);

exports.default = Rule;

/***/ }),

/***/ 978:
/***/ (function(module, exports) {

/**
 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ })

},[1140]);