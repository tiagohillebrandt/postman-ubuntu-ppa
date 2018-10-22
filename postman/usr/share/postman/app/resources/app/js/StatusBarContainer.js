webpackJsonp([27],{

/***/ 2741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(7);




let

PluginInterface = class PluginInterface {
  initialize() {
    this.properties = {
      layout: {
        value: Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ConfigurationStore').get('editor.requestEditorLayoutName'),
        registerer: function (context, cb) {
          Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["q" /* reaction */])(() => Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ConfigurationStore').get('editor.requestEditorLayoutName'), cb.bind(context));
        } },

      theme: {
        value: pm.settings.getSetting('postmanTheme') || 'light',
        registerer: function (context, cb) {
          pm.settings.on('setSetting:postmanTheme', cb, context);
        } },

      platform: {
        value: navigator.platform,
        registerer: _.noop },

      windows: {
        value: [],
        registerer: function (context, cb) {
          pm.appWindow.on('windowClosed', cb.bind(context, 'windowClosed'), context);
        } },

      modals: {
        value: null,
        registerer: function (context, cb) {
          pm.mediator.on('modalOpened', cb.bind(context, 'modalOpened'), context);
          pm.mediator.on('modalClosed', cb.bind(context, 'modalClosed'), context);
        } },

      findReplace: {
        value: null,
        registerer: function (context, cb) {
          pm.mediator.on('toggleFindReplace', cb.bind(context), context);
        } },

      sidebar: {
        value: Boolean(pm.settings.getSetting('isRequesterSidebarOpen')),
        registerer: function (context, cb) {
          pm.mediator.on('toggledSidebar', cb.bind(context), context);
        } },

      xFlows: {
        value: null,
        registerer: function (context, cb) {
          pm.mediator.on('saveXFlowActivity', cb.bind(context), context);
        } } };


  }

  register(property, handler, context) {
    this.properties[property] &&
    this.properties[property].registerer(context, handler);
  }

  get(key) {
    return _.get(this, `properties[${key}].value`);
  }

  openWindow(windowType) {
    switch (windowType) {
      case 'requester':
        pm.mediator.trigger('newRequesterWindow');
        break;
      case 'runner':
        pm.mediator.trigger('newRunnerWindow');
        break;
      case 'console':
        pm.mediator.trigger('newConsoleWindow');
        break;
      default:
        break;}

  }

  toggleTwoPaneLayout() {
    pm.app.toggleLayout();
  }

  openURL(url) {
    pm.app.openExternalLink(url);
  }

  openModal(modalName, options) {
    switch (modalName) {
      case 'settings':
        pm.mediator.trigger('openSettingsModal', options.tab);
        break;
      case 'release-notes':
        pm.mediator.trigger('showReleaseNotesModal');
        break;
      case 'x-flow-activity-feed':
        pm.mediator.trigger('openXFlowActivityFeed');
        break;
      default:
        break;}

  }

  toggleSidebar() {
    pm.mediator.trigger('toggleSidebar');
  }};


/* harmony default export */ __webpack_exports__["a"] = (new PluginInterface());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_AuthConstants__ = __webpack_require__(149);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const limit = 25;

/**
                   * Instances of the searched string in a given entity property
                   *
                   * @typedef {Object} foundInstance
                   * @property {number} actualIndex - Start index of the found result in actual string
                   * @property {number} index - Start index of the found result in meta string
                   * @property {string} matchedString - String which matched the given Regex
                   * @property {string} metaString - A section of the string that contains the found result
                   */


/**
                       * Entity properties in which we found the searched string
                       *
                       * @typedef {Object} foundFields
                       * @property {string} label Label to be displayed in results
                       * @property {string} property Property or path to reach the property
                       * @property {foundInstance[]} instances Array of found instances
                       */

/**
                           *
                           * @param {Object} options
                           * @param {string} options.text - string in which you want to find
                           * @param {regex} options.regex
                           * @param {string} [options.meta] - optional properties
                           *
                           * @returns {foundInstance[]}
                           */
function find({ text, regex, meta = {} }) {
  let arr,
  result = [];
  text = text || '';
  while ((arr = regex.exec(text)) !== null) {
    let delta = Math.floor(arr.index / limit),
    matchedString = arr[0];

    result.push(_.extend({
      actualIndex: arr.index,
      matchedString: matchedString,
      index: arr.index - limit * delta,
      metaString: text.substring(limit * delta, arr.index + matchedString.length > limit * (delta + 1) ? arr.index + matchedString.length : limit * (delta + 1)) },
    meta));
  }

  return result;
}

/**
   * @param {Object} option
   * @param {String} option.data Property value in which you want to find
   * @param {regex} option.regex
   * @param {string} option.label Label to be displayed in results
   * @param {string} option.[propertyPath] Property or path to reach that property
   *
   * @returns {foundFields[]}
   */
function findInString({ data, regex, label, propertyPath = '' }) {
  let splitedProperty = propertyPath.split('.'),
  property = splitedProperty.shift(),
  result = find({ text: data, regex, meta: { pathToProperty: splitedProperty.join('.') } });

  if (_.isEmpty(result)) {
    return [];
  }
  return [{
    property,
    label,
    instances: result }];

}

/**
   * @param {Object} option
   * @param {Object[]} option.data Property value in which you want to find
   * @param {regex} option.regex
   * @param {string} option.label Label to be displayed in results
   * @param {string} option.propertyPath Property or path to reach that property
   *
   * @returns {foundFields[]}
   */
function findInArrObj({ data, regex, label, propertyPath }) {
  let keys = [],
  values = [],
  description = [];
  _.forEach(data, (obj, index) => {
    let searchedKeys = find({
      text: _.toString(obj.key),
      regex,
      meta: { pathToProperty: `${index}.key` } }),

    searchedValues = find({
      text: _.toString(obj.value),
      regex,
      meta: {
        tooltipContent: `Key: ${obj.key}`,
        pathToProperty: `${index}.value` } }),


    searchedDescription = find({
      text: _.toString(obj.description),
      regex,
      meta: {
        tooltipContent: `Key: ${obj.key}`,
        pathToProperty: `${index}.description` } });



    if (!_.isEmpty(searchedKeys)) {
      keys = _.concat(keys, searchedKeys);
    }
    if (!_.isEmpty(searchedValues)) {
      values = _.concat(values, searchedValues);
    }
    if (!_.isEmpty(searchedDescription)) {
      description = _.concat(description, searchedDescription);
    }
  });

  let result = [];
  if (!_.isEmpty(keys)) {
    result.push({
      property: propertyPath,
      label: `${label} name`,
      instances: keys });

  }
  if (!_.isEmpty(values)) {
    result.push({
      property: propertyPath,
      label: `${label} value`,
      instances: values });

  }
  if (!_.isEmpty(description)) {
    result.push({
      property: propertyPath,
      label: `${label} description`,
      instances: description });

  }

  return result;
}

/**
   * @param {Object} option
   * @param {Object[]|String} option.data Property value in which you want to find
   * @param {regex} option.regex
   * @param {string} option.label Label to be displayed in results
   * @param {string} option.propertyPath Property or path to reach that property
   *
   * @returns {foundFields[]}
   */
function findInBody({ data, regex, label, propertyPath }) {
  if (_.isEmpty(data)) {
    return [];
  }
  if (typeof data === 'string') {
    return findInString({ data, regex, label: 'Request Body', propertyPath });
  } else
  {
    return findInArrObj({ data, regex, label: 'Request Body', propertyPath });
  }
}

/**
   * @param {Object} option
   * @param {Object} option.data Property value in which you want to find
   * @param {regex} option.regex
   * @param {string} option.label Label to be displayed in results
   * @param {string} option.propertyPath Property or path to reach that property
   *
   * @returns {foundFields[]}
   */
function findInAuth({ data, regex, label, propertyPath }) {
  let results = [];
  if (_.isEmpty(data)) {
    return results;
  }
  let type = _.get(data, 'type'),
  authArray = _.get(data, [type], []),
  ignoreProperties = [
  'id',
  'showPassword',
  'disableRetryRequest',
  'signatureMethod',
  'timestamp',
  'addParamsToHeader',
  'addEmptyParamsToSign',
  'disableRetryRequest'],

  authLabel = __WEBPACK_IMPORTED_MODULE_1__constants_AuthConstants__["i" /* AUTH_TYPE_LABEL_MAP */][type];

  _.forEach(authArray, (obj, index) => {
    if (_.includes(ignoreProperties, _.get(obj, 'key'))) {
      return;
    }
    let authResult = findInString({ data: obj.value, regex, label: `${label} > ${authLabel} > ${obj.key}`, propertyPath: `${propertyPath}.${type}.${index}.value` });
    results = _.concat(results, authResult);
  });
  return results;
}

// Replacer Helpers

/**
 *
 * @param {Object} option
 * @param {string} option.source Base string in which you want to replace
 * @param {number} option.index index at which you want to replace
 * @param {string} option.oldString String to be replace
 * @param {string} option.newString String to replace with
 */
function replaceAt({ source, index, oldString, newString }) {
  return source.substr(0, index) + source.substr(index, source.length).replace(oldString, newString);
}

/**
   *
   * @param {Object} option
   * @param {Object} option.data Object in which these properties needs to be replaced
   * @param {Object} option.replacementString String to replace with
   * @param {FoundInstance[]} option.instances
   * @param {String} option.propertyPath Path to reach that Property
   */
function replaceInProperty({ data, replacementString, instances, propertyPath }) {
  let diff = 0;
  _.forEach(instances, instance => {
    let newString = replaceAt({ source: _.get(data, propertyPath), index: instance.actualIndex + diff, oldString: instance.matchedString, newString: replacementString });
    diff += replacementString.length - instance.matchedString.length;
    _.set(data, propertyPath, newString);
  });
}

/**
   *
   * @param {Object} option
   * @param {Object} option.data Object in which these properties needs to be replaced
   * @param {Object} option.replacementString String to replace with
   * @param {FoundInstance[]} option.instances
   * @param {String} option.propertyPath Path to reach that Property
   */
function replaceInScripts({ data, replacementString, instances, propertyPath }) {
  let type = _.last(propertyPath.split('_')),
  script = _.get(_.find(data.events, ['listen', type]), 'script', {}),
  scriptString = { exec: _.get(script, 'exec', []).join('\n') };
  replaceInProperty({ data: scriptString, replacementString, instances, propertyPath: 'exec' });
  _.set(script, 'exec', scriptString.exec.split('\n'));
}

/**
   *
   * @param {Object} option
   * @param {Object} option.data Object in which these properties needs to be replaced
   * @param {Object} option.replacementString String to replace with
   * @param {FoundInstance[]} option.instances
   * @param {String} option.propertyPath Path to reach that Property
   */
function replaceInBody({ data, replacementString, instances, propertyPath }) {
  if (typeof _.get(data, propertyPath) === 'string') {
    replaceInProperty({ data, replacementString, instances, propertyPath });
  } else
  {
    replaceInObject({ data, replacementString, instances, propertyPath });
  }
}

/**
   *
   * @param {Object} option
   * @param {Object} option.data Object in which these properties needs to be replaced
   * @param {Object} option.replacementString String to replace with
   * @param {FoundInstance[]} option.instances
   * @param {String} option.propertyPath Path to reach that Property
   */
function replaceInObject({ data, replacementString, instances, propertyPath }) {
  let groupedProperty = _.groupBy(instances, 'pathToProperty');
  _.forOwn(groupedProperty, (groupedValues, key) => {
    replaceInProperty({ data, replacementString, instances: groupedValues, propertyPath: `${propertyPath}.${key}` });
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({
  collection: {
    name: {
      accessor: item => item.name,
      label: 'Collection name',
      findHelper: findInString,
      replaceHelper: replaceInProperty,
      filterDisplayName: 'Name' },

    description: {
      accessor: item => item.description,
      label: 'Collection description',
      findHelper: findInString,
      replaceHelper: replaceInProperty,
      filterDisplayName: 'Description' },

    events_prerequest: {
      accessor: item => _.get(_.find(item.events, ['listen', 'prerequest']), ['script', 'exec'], []).join('\n'),
      label: 'Collection Pre-request script',
      findHelper: findInString,
      replaceHelper: replaceInScripts,
      filterDisplayName: 'Pre-request script' },

    events_test: {
      accessor: item => _.get(_.find(item.events, ['listen', 'test']), ['script', 'exec'], []).join('\n'),
      label: 'Collection Tests',
      findHelper: findInString,
      replaceHelper: replaceInScripts,
      filterDisplayName: 'Tests' },

    auth: {
      accessor: item => item.auth,
      label: 'Authorization',
      findHelper: findInAuth,
      replaceHelper: replaceInObject,
      filterDisplayName: 'Authorization' },

    variables: {
      accessor: item => item.variables,
      label: 'Variable',
      findHelper: findInArrObj,
      replaceHelper: replaceInObject,
      filterDisplayName: 'Variable' } },


  folder: {
    name: {
      accessor: item => item.name,
      label: 'Folder name',
      findHelper: findInString,
      replaceHelper: replaceInProperty,
      filterDisplayName: 'Name' },

    description: {
      accessor: item => item.description,
      label: 'Folder description',
      findHelper: findInString,
      replaceHelper: replaceInProperty,
      filterDisplayName: 'Description' },

    events_prerequest: {
      accessor: item => _.get(_.find(item.events, ['listen', 'prerequest']), ['script', 'exec'], []).join('\n'),
      label: 'Folder Pre-request script',
      findHelper: findInString,
      replaceHelper: replaceInScripts,
      filterDisplayName: 'Pre-request script' },

    events_test: {
      accessor: item => _.get(_.find(item.events, ['listen', 'test']), ['script', 'exec'], []).join('\n'),
      label: 'Folder Tests',
      findHelper: findInString,
      replaceHelper: replaceInScripts,
      filterDisplayName: 'Tests' },

    auth: {
      accessor: item => item.auth,
      label: 'Authorization',
      findHelper: findInAuth,
      replaceHelper: replaceInObject,
      filterDisplayName: 'Authorization' } },


  request: {
    name: {
      accessor: item => item.name,
      label: 'Request name',
      findHelper: findInString,
      replaceHelper: replaceInProperty,
      filterDisplayName: 'Name' },

    description: {
      accessor: item => item.description,
      label: 'Request description',
      findHelper: findInString,
      replaceHelper: replaceInProperty,
      filterDisplayName: 'Description' },

    url: {
      accessor: item => item.url,
      label: 'Request URL',
      findHelper: findInString,
      replaceHelper: replaceInProperty,
      filterDisplayName: 'URL' },

    queryParams: {
      accessor: item => item.queryParams,
      label: 'Request Query Parameter',
      findHelper: findInArrObj,
      replaceHelper: replaceInObject,
      filterDisplayName: 'Query parameters' },

    pathVariableData: {
      accessor: item => item.pathVariableData,
      label: 'Request Path Variable',
      findHelper: findInArrObj,
      replaceHelper: replaceInObject,
      filterDisplayName: 'Path variables' },

    headerData: {
      accessor: item => item.headerData,
      label: 'Request Header',
      findHelper: findInArrObj,
      replaceHelper: replaceInObject,
      filterDisplayName: 'Headers' },

    events_prerequest: {
      accessor: item => _.get(_.find(item.events, ['listen', 'prerequest']), ['script', 'exec'], []).join('\n'),
      label: 'Request Pre-request script',
      findHelper: findInString,
      replaceHelper: replaceInScripts,
      filterDisplayName: 'Pre-request script' },

    events_test: {
      accessor: item => _.get(_.find(item.events, ['listen', 'test']), ['script', 'exec'], []).join('\n'),
      label: 'Request Tests',
      findHelper: findInString,
      replaceHelper: replaceInScripts,
      filterDisplayName: 'Tests' },

    auth: {
      accessor: item => item.auth,
      label: 'Authorization',
      findHelper: findInAuth,
      replaceHelper: replaceInObject,
      filterDisplayName: 'Authorization' },

    data: {
      accessor: item => __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].isMethodWithBody(item.method) && item.data,
      label: 'Request body',
      findHelper: findInBody,
      replaceHelper: replaceInBody,
      filterDisplayName: 'Request body' } },


  response: {
    name: {
      accessor: item => item.name,
      label: 'Example name',
      replaceHelper: replaceInProperty,
      findHelper: findInString,
      filterDisplayName: 'Name' },

    requestObject_url: {
      accessor: item => item.requestObject && item.requestObject.url,
      label: 'Example request URL',
      findHelper: findInString,
      replaceHelper: options => replaceInProperty(_extends({}, options, { propertyPath: options.propertyPath.split('_').join('.') })),
      filterDisplayName: 'URL' },

    requestObject_queryParams: {
      accessor: item => item.requestObject && item.requestObject.queryParams,
      label: 'Example query parameter',
      findHelper: findInArrObj,
      replaceHelper: options => replaceInObject(_extends({}, options, { propertyPath: options.propertyPath.split('_').join('.') })),
      filterDisplayName: 'Query parameters' },

    requestObject_pathVariableData: {
      accessor: item => item.requestObject && item.requestObject.pathVariableData,
      label: 'Example path variable',
      findHelper: findInArrObj,
      replaceHelper: options => replaceInObject(_extends({}, options, { propertyPath: options.propertyPath.split('_').join('.') })),
      filterDisplayName: 'Path Varaibles' },

    requestObject_headerData: {
      accessor: item => item.requestObject && item.requestObject.headerData,
      label: 'Example request headers',
      findHelper: findInArrObj,
      replaceHelper: options => replaceInObject(_extends({}, options, { propertyPath: options.propertyPath.split('_').join('.') })),
      filterDisplayName: 'Request headers' },

    requestObject_data: {
      accessor: item => item.requestObject && item.requestObject.data,
      label: 'Example request body',
      findHelper: findInBody,
      replaceHelper: options => replaceInBody(_extends({}, options, { propertyPath: options.propertyPath.split('_').join('.') })),
      filterDisplayName: 'Request body' },

    text: {
      accessor: item => item.text,
      label: 'Example response',
      findHelper: findInString,
      replaceHelper: replaceInProperty,
      filterDisplayName: 'Request body' },

    headers: {
      accessor: item => item.headers,
      label: 'Example response headers',
      findHelper: findInArrObj,
      replaceHelper: replaceInObject,
      filterDisplayName: 'Headers' } },


  environment: {
    name: {
      accessor: item => item.name,
      label: 'Environment name',
      findHelper: findInString,
      replaceHelper: replaceInProperty,
      filterDisplayName: 'Name' },

    values: {
      accessor: item => item.values,
      label: 'Environment variable',
      findHelper: findInArrObj,
      replaceHelper: replaceInObject,
      filterDisplayName: 'Variables' } },


  globals: {
    values: {
      accessor: item => item.values,
      label: 'Global variable',
      findHelper: findInArrObj,
      replaceHelper: replaceInObject,
      filterDisplayName: 'Variables' } } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

let

Text = class Text extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'sb__item__text': true }, this.props.className);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        this.props.render && this.props.render()));


  }};

/***/ }),

/***/ 2744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

let

Icon = class Icon extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'sb__item__icon': true }, this.props.className);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getClasses(),
          onClick: this.props.onClick,
          onMouseEnter: this.props.onMouseEnter,
          onMouseLeave: this.props.onMouseLeave },

        this.props.icon));


  }};

/***/ }),

/***/ 2745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_draggable__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_CloseIcon__ = __webpack_require__(136);



let


Pane = class Pane extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { paneHeight: this.props.paneHeight || 200 };
    this.handleStart = this.handleStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen && nextProps.isOpen !== this.props.isOpen) {
      let documentHeight = _.get(document, 'body.offsetHeight', 800);
      if (documentHeight - this.state.paneHeight < 100) {
        this.setState({ paneHeight: documentHeight - 100 });
      }
    }
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'sb__item__pane': true,
      'is-hidden': !this.props.isOpen },
    this.props.className);
  }

  handleStart(event, data) {
    this.paneHeight = this.state.paneHeight;
    this.startClientY = data.y;
  }

  handleDrag(event, data) {
    let clientY = data.y,
    paneHeight = this.paneHeight + (this.startClientY - clientY),
    documentHeight = _.get(document, 'body.offsetHeight', 800);

    if (documentHeight - paneHeight < 100) {
      paneHeight = this.state.paneHeight;
    }

    if (paneHeight < 100) {
      paneHeight = 100;
    }

    this.setState({ paneHeight: paneHeight });
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_draggable__["DraggableCore"], {
          axis: 'y',
          handle: '.plugin__pane-resize-wrapper',
          onStart: this.handleStart,
          onDrag: this.handleDrag },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getClasses(),
            style: { 'height': this.state.paneHeight } },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'plugin__pane-resize-wrapper' }),
          this.props.children,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_CloseIcon__["a" /* default */], {
            className: 'plugin__pane-close',
            onClick: this.props.onClose }))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drawer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

let

Drawer = class Drawer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(item) {
    this.props.onSelect && this.props.onSelect(item);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ 'sb__drawer': true }, this.props.className);
  }

  getItemProps(defaultArgs, props = {}) {
    return _extends({},
    defaultArgs,
    props, {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(defaultArgs.className, props.className || '') });

  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["a" /* Dropdown */], { dropup: true, onSelect: this.handleSelect },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["b" /* DropdownButton */], null,
            this.props.button && this.props.button()),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true },

            _.map(this.props.items, item => {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], {
                    key: item.key,
                    refKey: item.key },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, item.label)));


            })))));





  }};


Drawer.defaultProps = {
  itemRenderer: (item, getItemProps) => {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', getItemProps(),
        item.label));


  } };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatusBarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_status_bar_StatusBar__ = __webpack_require__(3357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_status_bar_plugins__ = __webpack_require__(3358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugins_PluginInterface__ = __webpack_require__(2741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_status_bar_base_Item__ = __webpack_require__(3385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_status_bar_base_Text__ = __webpack_require__(2743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_status_bar_base_Icon__ = __webpack_require__(2744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_status_bar_base_Pane__ = __webpack_require__(2745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_status_bar_base_Drawer__ = __webpack_require__(2746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_RequesterTabLayoutConstants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__ = __webpack_require__(38);
var _class;















let PluginEnvironment = {
  React: __WEBPACK_IMPORTED_MODULE_0_react___default.a,
  PluginInterface: __WEBPACK_IMPORTED_MODULE_4__plugins_PluginInterface__["a" /* default */],
  StatusBarComponents: {
    Item: __WEBPACK_IMPORTED_MODULE_5__components_status_bar_base_Item__["a" /* default */],
    Text: __WEBPACK_IMPORTED_MODULE_6__components_status_bar_base_Text__["a" /* default */],
    Icon: __WEBPACK_IMPORTED_MODULE_7__components_status_bar_base_Icon__["a" /* default */],
    Pane: __WEBPACK_IMPORTED_MODULE_8__components_status_bar_base_Pane__["a" /* default */],
    Drawer: __WEBPACK_IMPORTED_MODULE_9__components_status_bar_base_Drawer__["a" /* default */] },

  constants: {
    layout: {
      REQUESTER_TAB_LAYOUT_1_COLUMN: __WEBPACK_IMPORTED_MODULE_10__constants_RequesterTabLayoutConstants__["a" /* REQUESTER_TAB_LAYOUT_1_COLUMN */],
      REQUESTER_TAB_LAYOUT_2_COLUMN: __WEBPACK_IMPORTED_MODULE_10__constants_RequesterTabLayoutConstants__["b" /* REQUESTER_TAB_LAYOUT_2_COLUMN */] } } };let





StatusBarContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class StatusBarContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      activeItem: null };


    this.addItem = this.addItem.bind(this);
    this.addItems = this.addItems.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.leftItems = null;
    this.rightItems = null;
  }

  componentDidMount() {
    __WEBPACK_IMPORTED_MODULE_2__models_status_bar_StatusBar__["a" /* default */].initialize();
    __WEBPACK_IMPORTED_MODULE_2__models_status_bar_StatusBar__["a" /* default */].loadPlugins(__WEBPACK_IMPORTED_MODULE_3__components_status_bar_plugins__["a" /* default */]);
  }

  componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_2__models_status_bar_StatusBar__["a" /* default */].on('loadedPlugins', this.addItems);
    __WEBPACK_IMPORTED_MODULE_2__models_status_bar_StatusBar__["a" /* default */].on('add', this.addItem);
  }

  componentWillUnmount() {
    __WEBPACK_IMPORTED_MODULE_2__models_status_bar_StatusBar__["a" /* default */].off('loadedPlugins', this.addItems);
    __WEBPACK_IMPORTED_MODULE_2__models_status_bar_StatusBar__["a" /* default */].off('add', this.addItem);
    this.leftItems = null;
    this.rightItems = null;
  }

  addItem(item) {
    if (item.position === 'left') {
      this.leftItems.push({
        item: item,
        component: item.getComponent(PluginEnvironment) });

    } else
    {
      this.rightItems.push({
        item: item,
        component: item.getComponent(PluginEnvironment) });

    }
    let items = _.concat(this.state.items, item);
    this.setState({ items });
  }

  addItems(items) {
    let plugins = _.partition(items, item => {return item.position === 'left';});
    this.leftItems = _.map(plugins[0], (item, index) => {
      return {
        item: item,
        component: item.getComponent(PluginEnvironment) };

    });
    this.rightItems = _.map(plugins[1], (item, index) => {
      return {
        item: item,
        component: item.getComponent(PluginEnvironment) };

    });
    this.setState({ items });
  }

  toggleActive(item) {
    this.setState({ activeItem: this.state.activeItem === item ? null : item });
  }

  render() {
    let plugins = _.partition(this.state.items, item => {return item.position === 'left';});

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__["a" /* default */], { identifier: 'statusBar' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'status-bar' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sb-section sb-section--left' },

            _.map(this.leftItems, (item, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(item.component, {
                key: index,
                isOpen: _.isEqual(this.state.activeItem, item.item.name),
                toggleActive: this.toggleActive.bind(this, item.item.name) });

            })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sb-section sb-section--right' },

            _.map(this.rightItems, (item, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(item.component, {
                key: index,
                isOpen: _.isEqual(this.state.activeItem, item.item.name),
                toggleActive: this.toggleActive.bind(this, item.item.name) });

            })))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins_PluginInterface__ = __webpack_require__(2741);

let

StatusBar = class StatusBar extends __WEBPACK_IMPORTED_MODULE_0_events___default.a {
  constructor() {
    super();
  }

  initialize() {
    __WEBPACK_IMPORTED_MODULE_1__plugins_PluginInterface__["a" /* default */].initialize();
  }

  register(property, handler, context) {
    this.properties[property] &&
    this.properties[property].handler(context, handler);
  }

  loadPlugins(plugins) {
    this.emit('loadedPlugins', plugins);
  }

  addItem(sbItem) {
    this.emit('add', sbItem);
    sbItem.initialize && sbItem.initialize();
  }};


/* harmony default export */ __webpack_exports__["a"] = (new StatusBar());

/***/ }),

/***/ 3358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Console__ = __webpack_require__(3359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Help__ = __webpack_require__(3361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ShortcutsReference__ = __webpack_require__(3363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TwoPane__ = __webpack_require__(3365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FindAndReplace__ = __webpack_require__(3368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ToggleSidebar__ = __webpack_require__(3380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__XFlowActivityFeed__ = __webpack_require__(3382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WorkspaceTypeSwitcher__ = __webpack_require__(3384);









/* harmony default export */ __webpack_exports__["a"] = ([
__WEBPACK_IMPORTED_MODULE_5__ToggleSidebar__["a" /* default */],
__WEBPACK_IMPORTED_MODULE_4__FindAndReplace__["a" /* default */],
__WEBPACK_IMPORTED_MODULE_0__Console__["a" /* default */],
__WEBPACK_IMPORTED_MODULE_1__Help__["a" /* default */],
__WEBPACK_IMPORTED_MODULE_2__ShortcutsReference__["a" /* default */],
__WEBPACK_IMPORTED_MODULE_3__TwoPane__["a" /* default */],
__WEBPACK_IMPORTED_MODULE_6__XFlowActivityFeed__["a" /* default */],
__WEBPACK_IMPORTED_MODULE_7__WorkspaceTypeSwitcher__["a" /* default */]]);

/***/ }),

/***/ 3359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_Icons_ConsoleIcon__ = __webpack_require__(3360);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Console',
  position: 'left',

  getComponent: function ({
    React,
    PluginInterface,
    StatusBarComponents })
  {
    return class Console extends React.Component {
      constructor(props) {
        super(props);

        this.state = { isOpen: false };

        this.handleClick = this.handleClick.bind(this);
      }

      componentWillMount() {
        PluginInterface.register('windows', this.handleWindows, this);
      }

      handleWindows(event, windowName) {
        if (event === 'windowClosed' && windowName === 'console') {
          this.setState({ isOpen: false });
        }
      }

      handleClick() {
        PluginInterface.openWindow('console');
        this.setState({ isOpen: true });
      }

      getIcon() {
        return (
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_base_Icons_ConsoleIcon__["a" /* default */], null));

      }

      getShortcut() {
        let platform = PluginInterface.get('platform');
        if (_.includes(platform, 'Mac')) {
          return '⌥⌘C';
        } else
        {
          return 'Ctrl + Alt + C';
        }
      }

      render() {
        let { Item, Icon } = StatusBarComponents;

        return (
          React.createElement(Item, {
              className: 'plugin__console-shortcut',
              tooltip: `Postman Console (${this.getShortcut()})` },

            React.createElement(Icon, {
              className: 'plugin__console__icon',
              icon: this.getIcon(),
              onClick: this.handleClick })));



      }};

  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ConsoleIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__ = __webpack_require__(38);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '14', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'console', d: 'M1 5.208v8.178c0 .344.26.614.571.614H14.43c.311 0 .571-.27.571-.614V2.614C15 2.27 14.74 2 14.429 2H1.57C1.26 2 1 2.27 1 2.614v1.594h14v1H1zM14.429 15H1.57C.698 15 0 14.274 0 13.386V2.614C0 1.726.698 1 1.571 1H14.43C15.302 1 16 1.726 16 2.614v10.772c0 .888-.698 1.614-1.571 1.614zm-5.992-2.708h-2.5a.628.628 0 0 1-.625-.632c0-.35.28-.633.626-.633h2.5c.345 0 .624.283.624.633 0 .349-.28.632-.624.632zm-5-1.265a.619.619 0 0 1-.441-.185.635.635 0 0 1 0-.893l.808-.817-.808-.817a.637.637 0 0 1 0-.894.62.62 0 0 1 .884 0l1.249 1.264a.635.635 0 0 1 0 .894l-1.25 1.263a.621.621 0 0 1-.442.185z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'evenodd', xlinkHref: '#console' }));



function ConsoleIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__["a" /* default */], { identifier: 'console' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
      props, {
        icon: icon }))));



}

/***/ }),

/***/ 3361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_Icons_HelpIcon__ = __webpack_require__(3362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__ = __webpack_require__(202);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Help',
  position: 'right',

  getComponent: function ({
    React,
    PluginInterface,
    StatusBarComponents })
  {let
    Help = class Help extends React.Component {
      constructor(props) {
        super(props);
      }

      handleItemSelect(item) {
        switch (item) {
          case 'releases':
            PluginInterface.openModal('release-notes');
            break;
          case 'docs':
            PluginInterface.openURL(__WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__["k" /* DOCS_URL */]);
            break;
          case 'security':
            PluginInterface.openURL(__WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__["i" /* DOCS_SECURITY_URL */]);
            break;
          case 'support':
            PluginInterface.openURL(__WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__["P" /* SUPPORT_URL */]);
            break;
          case 'twitter':
            PluginInterface.openURL(__WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__["V" /* TWITTER_URL */]);
            break;
          case 'community':
            PluginInterface.openURL(__WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__["D" /* POSTMAN_COMMUNITY */]);
            break;
          default:
            break;}

      }

      getIcon() {
        return (
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_base_Icons_HelpIcon__["a" /* default */], null));

      }

      render() {
        let { Item, Icon, Drawer } = StatusBarComponents;

        return (
          React.createElement(Item, _extends({
              className: 'plugin__help',
              tooltip: 'Help & Feedback' },
            this.props),

            React.createElement(Drawer, {
              className: 'plugin__help__drawer',
              button: () => {
                return (
                  React.createElement(Icon, {
                    className: 'plugin__help__icon',
                    icon: this.getIcon() }));


              },
              onSelect: this.handleItemSelect,
              items: [
              {
                key: 'releases',
                label: 'Release Notes' },

              {
                key: 'docs',
                label: 'Documentation' },

              {
                key: 'security',
                label: 'Security' },

              {
                key: 'support',
                label: 'Support' },

              {
                key: 'twitter',
                label: '@postmanclient' },

              {
                key: 'community',
                label: 'Community' }] })));





      }};


    return Help;
  } });

/***/ }),

/***/ 3362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HelpIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(51);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'help', d: 'M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM6.715 5.054a.622.622 0 1 1-1.143-.5A2.581 2.581 0 0 1 7.94 3a2.586 2.586 0 0 1 2.581 2.59c0 .864-.583 1.588-1.642 2.19a.625.625 0 0 0-.316.543V9.79a.624.624 0 1 1-1.246 0V8.323c0-.675.362-1.298.947-1.63.71-.404 1.01-.778 1.01-1.104a1.335 1.335 0 1 0-2.56-.536zm.6 7.321a.624.624 0 1 0 1.249.002.624.624 0 0 0-1.248-.002z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#666', fillRule: 'nonzero', xlinkHref: '#help' }));



function HelpIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 3363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_Icons_KeyboardShortcutIcon__ = __webpack_require__(3364);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Shortcuts',
  position: 'right',

  getComponent: function ({
    React,
    PluginInterface,
    StatusBarComponents })
  {
    return class ShortcutsReference extends React.Component {
      constructor(props) {
        super(props);

        this.state = { isModalOpen: false };
      }

      componentWillMount() {
        PluginInterface.register('modals', this.handleModalState, this);
      }

      handleClick() {
        PluginInterface.openModal('settings', { tab: 'shortcuts' });
      }

      handleModalState(event, payload) {
        if (event === 'modalOpened' && payload.name === 'settings' && payload.activeTab === 'shortcuts') {
          this.setState({ isModalOpen: true });
        } else
        if (event === 'modalOpened' && payload.name === 'settings') {
          this.setState({ isModalOpen: false });
        } else
        if (event === 'modalClosed' && payload.name === 'settings') {
          this.setState({ isModalOpen: false });
        }
      }

      getIcon() {
        let style = this.state.isModalOpen ? 'secondary' : 'normal';

        return (
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_base_Icons_KeyboardShortcutIcon__["a" /* default */], { style: style }));

      }

      getShortcut() {
        let platform = PluginInterface.get('platform');
        if (_.includes(platform, 'Mac')) {
          return '⌘?';
        } else
        {
          return 'Ctrl + ?';
        }
      }

      render() {
        let { Item, Icon } = StatusBarComponents;

        return (
          React.createElement(Item, {
              className: 'plugin__shortcuts',
              tooltip: `Keyboard Shortcuts (${this.getShortcut()})` },

            React.createElement(Icon, {
              onClick: this.handleClick,
              className: 'plugin__shortcuts__icon',
              icon: this.getIcon() })));



      }};

  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyboardShortcutIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__ = __webpack_require__(38);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '15', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'keyboard-shortcut', d: 'M7.1 7V2.687c0-.455-.414-.843-.934-.843-.519 0-.932.388-.932.843v.751c0 .989-.846 1.781-1.868 1.781-1.02 0-1.866-.792-1.866-1.781V.5a.5.5 0 0 1 1 0v2.938c0 .421.384.781.866.781.484 0 .868-.36.868-.781v-.751c0-1.023.875-1.843 1.932-1.843 1.059 0 1.934.82 1.934 1.843V7H15v9H0V7h7.1zM1 15h13V8H1v7zm1-6h1v1H2V9zm2 0h1v1H4V9zm2 0h1v1H6V9zm2 0h1v1H8V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zM2 11h1v1H2v-1zm1 2h1v1H3v-1zm1-2h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm-1 2h1v1h-1v-1zm-6 0h5v1H5v-1z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'evenodd', xlinkHref: '#keyboard-shortcut' }));



function KeyboardShortcutIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__["a" /* default */], { identifier: 'shortcuts' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
      props, {
        icon: icon }))));



}

/***/ }),

/***/ 3365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_Icons_TwoPaneIcon__ = __webpack_require__(3366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Icons_SinglePaneIcon__ = __webpack_require__(3367);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'TwoPane',
  position: 'right',

  getComponent: function ({
    React,
    PluginInterface,
    StatusBarComponents,
    constants })
  {
    return class TwoPane extends React.Component {
      constructor(props) {
        super(props);

        this.state = { layout: PluginInterface.get('layout') };
      }

      componentWillMount() {
        PluginInterface.register('layout', this.handleLayout, this);
      }

      handleLayout(payload) {
        this.setState({ layout: payload });
      }

      handleClick() {
        PluginInterface.toggleTwoPaneLayout();
      }

      getShortcut() {
        let platform = PluginInterface.get('platform');
        if (_.includes(platform, 'Mac')) {
          return '⌥⌘V';
        } else
        {
          return 'Ctrl + Alt + V';
        }
      }

      getIcon() {
        let activeTheme = PluginInterface.get('theme'),
        layout = this.state.layout,
        { REQUESTER_TAB_LAYOUT_1_COLUMN, REQUESTER_TAB_LAYOUT_2_COLUMN } = constants.layout;

        if (_.isEqual(layout, REQUESTER_TAB_LAYOUT_2_COLUMN)) {
          return (
            React.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Icons_SinglePaneIcon__["a" /* default */], null));

        } else
        {
          return (
            React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_base_Icons_TwoPaneIcon__["a" /* default */], null));

        }
      }

      render() {
        let { Item, Icon } = StatusBarComponents,
        { REQUESTER_TAB_LAYOUT_2_COLUMN } = constants.layout,
        isTwoPane = this.state.layout === REQUESTER_TAB_LAYOUT_2_COLUMN;

        return (
          React.createElement(Item, {
              tooltip: `${isTwoPane ? 'Single pane view' : 'Two pane view'} (${this.getShortcut()})` },

            React.createElement(Icon, {
              onClick: this.handleClick,
              icon: this.getIcon() })));



      }};

  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TwoPaneIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__ = __webpack_require__(38);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'two-pane', d: 'M7.5 1H1v14h6.521a.974.974 0 0 1-.021-.205V1zm1 0v13.795c0 .072-.007.14-.021.205H15V1H8.5zM15 0a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14zM2.25 10V6h4v4h-4zm9.5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'evenodd', xlinkHref: '#two-pane' }));



function TwoPaneIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__["a" /* default */], { identifier: 'layout' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
      props, {
        icon: icon }))));



}

/***/ }),

/***/ 3367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SinglePaneIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(51);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'single-pane', d: 'M7.5 1H1v14h6.521a.974.974 0 0 1-.021-.205V1zm1 0v13.795c0 .072-.007.14-.021.205H15V1H8.5zM15 0a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14zM2.25 10V6h4v4h-4zm9.5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'evenodd', transform: 'rotate(90 8 8)', xlinkHref: '#single-pane' }));



function SinglePaneIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 3368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__find_replace__ = __webpack_require__(3369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Icons_FindIcon__ = __webpack_require__(3379);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Find & Replace',
  position: 'left',

  getComponent: function ({
    React,
    PluginInterface,
    StatusBarComponents })
  {
    return class FindAndReplace extends React.Component {
      constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
      }

      componentWillMount() {
        PluginInterface.register('findReplace', this.toggleFindReplace, this);
      }

      toggleFindReplace() {
        if (this.props.isOpen) {
          return;
        }
        this.props.toggleActive();
      }

      handleClose() {
        if (!this.props.isOpen) {
          return;
        }
        this.props.toggleActive();
      }

      getIcon() {
        let style = this.props.isOpen ? 'secondary' : 'normal';

        return (
          React.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Icons_FindIcon__["a" /* default */], { style: style }));

      }

      getShortcut() {
        let platform = PluginInterface.get('platform');
        if (_.includes(platform, 'Mac')) {
          return '⇧⌘F';
        } else
        {
          return 'Ctrl + Shift + F';
        }
      }

      render() {
        let { Item, Icon, Pane } = StatusBarComponents;

        return (
          React.createElement(Item, _extends({
              className: 'plugin__find-and-replace',
              tooltip: `Find (${this.getShortcut()})` },
            this.props),

            React.createElement(Icon, {
              onClick: this.props.toggleActive,
              className: 'plugin__find-and-replace__icon',
              icon: this.getIcon() }),

            React.createElement(Pane, {
                className: 'plugin__find-and-replace__pane',
                paneHeight: 450 },

              React.createElement(__WEBPACK_IMPORTED_MODULE_0__find_replace__["a" /* default */], {
                isOpen: this.props.isOpen,
                onClose: this.handleClose }))));




      }};

  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplace; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FindReplaceOptionSection__ = __webpack_require__(3370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FindReplaceResultsSection__ = __webpack_require__(3372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_CollectionController__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_keymaps_KeyMaps__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_EnvironmentController__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_controllers_GlobalsController__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ReplaceService__ = __webpack_require__(3377);
var _class;









var WebpackWorker = __webpack_require__(3378);let


FindReplace = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* observer */])(_class = class FindReplace extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      searchedQuery: '',
      searchedResult: [],
      isLoading: false,
      selectedCount: 0 };

    this.handleFind = this.handleFind.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReplace = this.handleReplace.bind(this);
  }

  getKeyMapHandlers() {
    return { quit: pm.shortcuts.handle('quit', this.handleClose) };
  }

  handleClose() {
    pm.mediator.trigger('focusBuilder');
    this.props.onClose();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen && nextProps.isOpen !== this.props.isOpen) {
      this.refs.findReplaceOptionSection.focus();
    }
  }

  handleCollectionsChange() {
    __WEBPACK_IMPORTED_MODULE_3__modules_controllers_CollectionController__["a" /* default */].getCollections({}).
    then(collections => {
      return Promise.all(_.map(collections, collection => {
        return __WEBPACK_IMPORTED_MODULE_3__modules_controllers_CollectionController__["a" /* default */].getCollection({ id: collection.id }, { populate: true });
      }));

    }).
    then(collectionsArray => {
      this.setState({ userCollections: collectionsArray });
    });
  }

  async getTargetCollections(findOptions) {
    let criteria = {};
    if (findOptions.searchTarget === 'some') {
      criteria = { id: _.get(findOptions.selectedTarget, 'collections.items') };
    } else
    {
      criteria = { id: _.map(Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').collections, 'id') };
    }

    let collectionList = await __WEBPACK_IMPORTED_MODULE_3__modules_controllers_CollectionController__["a" /* default */].getCollections(criteria),
    collections = await Promise.all(_.map(collectionList, async col => {
      return await __WEBPACK_IMPORTED_MODULE_3__modules_controllers_CollectionController__["a" /* default */].getCollection({ id: col.id }, { populate: true });
    }));

    return collections;
  }

  async getTargetEnvironments(findOptions) {
    let criteria = {};
    if (findOptions.searchTarget === 'some') {
      criteria = { id: _.get(findOptions.selectedTarget, 'environments.items') };
    } else {
      criteria = { id: _.map(Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').environments, 'id') };
    }

    let environmentList = await __WEBPACK_IMPORTED_MODULE_7__modules_controllers_EnvironmentController__["a" /* default */].getAll(criteria),
    environments = await Promise.all(_.map(environmentList, async env => {
      return await __WEBPACK_IMPORTED_MODULE_7__modules_controllers_EnvironmentController__["a" /* default */].get({ id: env.id });
    }));

    return environments;
  }

  async getTargetGlobals(findOptions) {
    if (findOptions.searchTarget === 'some' && !findOptions.subSearchTarget.globals) {
      return [];
    }
    let workspaceGlobals = await __WEBPACK_IMPORTED_MODULE_8__modules_controllers_GlobalsController__["a" /* default */].get({ workspace: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore').workspace });
    return workspaceGlobals;
  }

  async handleFind(findOptions) {
    var myWorker = new WebpackWorker();
    myWorker.onerror = error => {
      this.setState({ isLoading: false });
      console.error('worker error', error);
      pm.crashReporter.report(error);
      myWorker.terminate();
    };

    let [
    collections,
    environments,
    globals] =
    await Promise.all([
    this.getTargetCollections(findOptions),
    this.getTargetEnvironments(findOptions),
    this.getTargetGlobals(findOptions)]);


    myWorker.postMessage(JSON.stringify({
      type: 'find',
      userId: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('CurrentUserStore').id,
      findOptions: _.pick(findOptions, ['findQuery', 'isRegex', 'ignoreCase']),
      searchTargets: {
        collections,
        environments,
        globals } }));



    myWorker.onmessage = e => {
      this.setState({
        searchedResult: _.get(e.data, 'result'),
        searchedQuery: _.get(e.data, 'findQuery'),
        isLoading: false,
        selectedCount: 0 });

      myWorker.terminate();
    };

    this.setState({ isLoading: true });
  }

  handleChange(searchedResult) {
    let selectedCount = 0;
    _.forOwn(searchedResult, (targets, key) => {
      _.forEach(targets, target => {
        _.forEach(target.entities, entity => {
          _.forEach(entity.fields, field => {
            selectedCount += _.size(_.filter(field.instances, 'isSelected'));
          });
        });
      });
    });
    this.setState({
      searchedResult,
      selectedCount });

  }

  handleReplace(replaceString) {
    this.setState({ isLoading: true });
    __WEBPACK_IMPORTED_MODULE_9__ReplaceService__["a" /* default */].replace(this.state.searchedResult, replaceString).then(actions => {
      return Promise.all(actions).then(() => {
        this.refs.findReplaceOptionSection.handleFind();
      });
    }).catch(() => {
      this.refs.findReplaceOptionSection.handleFind();
    });
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_keymaps_KeyMaps__["a" /* default */], { keyMap: pm.shortcuts.getShortcuts(), handlers: this.getKeyMapHandlers() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__FindReplaceOptionSection__["a" /* default */], {
            ref: 'findReplaceOptionSection',
            onFind: this.handleFind,
            userCollections: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').collections,
            userEnvironments: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').environments,
            searchedResult: this.state.searchedResult,
            onClose: this.handleClose,
            onReplace: this.handleReplace,
            onSelectAll: this.handleChange,
            selectedCount: this.state.selectedCount }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__FindReplaceResultsSection__["a" /* default */], { isLoading: this.state.isLoading, searchedResult: this.state.searchedResult, searchedQuery: this.state.searchedQuery, onChange: this.handleChange }))));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceOptionSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Inputs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_DownSolidIcon__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_radio_group__ = __webpack_require__(1067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_radio_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_radio_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FindReplaceSearchTargetSelector__ = __webpack_require__(3371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mobx_react__ = __webpack_require__(20);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;








let


FindReplaceOptionSection = Object(__WEBPACK_IMPORTED_MODULE_9_mobx_react__["a" /* observer */])(_class = class FindReplaceOptionSection extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      uniqueName: Math.random().toString(36).substring(7),
      isRegex: false,
      ignoreCase: true,
      findQuery: '',
      searchTarget: 'all',
      subSearchTarget: {
        collections: false,
        environments: false,
        globals: false },

      selectedTarget: {
        collections: {
          show: false,
          items: [] },

        environments: {
          show: false,
          items: [] } },


      replaceString: '',
      isSelectedAll: false };

    this.handleRegexChange = this.handleRegexChange.bind(this);
    this.handleCaseChange = this.handleCaseChange.bind(this);
    this.handleFindQueryChange = this.handleFindQueryChange.bind(this);
    this.handleFind = this.handleFind.bind(this);
    this.handleTargetSelect = this.handleTargetSelect.bind(this);
    this.handleCollectionSelectClose = this.handleCollectionSelectClose.bind(this);
    this.handleCollectionSelect = this.handleCollectionSelect.bind(this);
    this.handleSelectAllChange = this.handleSelectAllChange.bind(this);
  }

  handleRegexChange(value) {
    this.setState({ isRegex: value });
  }

  handleCaseChange(value) {
    this.setState({ ignoreCase: value });
  }

  handleFindQueryChange(value) {
    this.setState({ findQuery: value });
  }

  handleFind() {
    if (this.handleDisableFind()) {
      return;

    }
    this.props.onFind(this.state);
    this.handleAnalytics();
  }

  handleAnalytics() {
    __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('bottombar', 'find', `${this.state.searchTarget === 'all' ? 'everything' : 'selective'}`);

    if (this.state.searchTarget === 'some') {
      for (var key in this.state.selectedTarget) {
        if (this.state.subSearchTarget[key]) {
          __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('bottombar', 'find_choose_entities', key, _.size(this.state.selectedTarget[key].items));
        }
      }

      if (this.state.subSearchTarget.globals) {
        __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('bottombar', 'find_choose_entities', 'globals');
      }
    }
  }

  focus() {
    setTimeout(() => {
      this.refs.findInput.focus();
    }, 0);
  }

  handleTargetSelect(value, e) {
    setTimeout(() => {
      this.setState({ searchTarget: value });
    }, 0);
  }

  handleTargetEntityChange(entity, value) {
    let newState = {};
    let subSearchTarget = _.clone(this.state.subSearchTarget);
    subSearchTarget[entity] = value;
    newState.subSearchTarget = subSearchTarget;
    if (entity === 'collections' || entity === 'environments') {
      let selectedTarget = _.clone(this.state.selectedTarget);
      selectedTarget[entity] = {
        show: value,
        items: value ? this.state.selectedTarget[entity].items : [] };

      newState.selectedTarget = selectedTarget;
    }
    this.setState(newState);
  }

  handleCollectionSelectClose(type) {
    let collectionState = _.clone(this.state.selectedTarget[type]);
    collectionState.show = false;
    this.setState({
      'selectedTarget': _extends({},
      this.state.selectedTarget, {
        [type]: collectionState }) });


  }

  handleCollectionSelect(type, selectedItems) {
    let collectionState = _.clone(this.state.selectedTarget[type]);
    collectionState.items = selectedItems;
    this.setState({
      'selectedTarget': _extends({},
      this.state.selectedTarget, {
        [type]: collectionState }) });


  }

  getSelectedTargetCount(type) {
    if (_.get(this.state.subSearchTarget, type)) {
      return `(${_.size(_.get(this.state.selectedTarget, `[${type}].items`))})`;
    }
    return '';
  }

  getEntitiesClasses() {
    return __WEBPACK_IMPORTED_MODULE_5_classnames___default()({
      'find-target-option-entities': true,
      'is-disabled': this.state.searchTarget === 'all' });

  }

  getReplaceBoxClasses() {
    return __WEBPACK_IMPORTED_MODULE_5_classnames___default()({
      'replace-box-wrapper': true,
      'is-disabled': _.isEmpty(this.props.searchedResult) });

  }

  getSelectedEntityClasses(type) {
    return __WEBPACK_IMPORTED_MODULE_5_classnames___default()({
      'entity-wrapper': true,
      'is-selected': this.state.subSearchTarget[type] });

  }

  handleTargetEntityOpen(type) {
    if (!this.state.subSearchTarget[type]) {
      return;
    }
    this.handleTargetEntityChange(type, true);
  }

  handleDisableFind() {
    if (!this.state.findQuery) {
      return true;
    }
    if (this.state.searchTarget === 'some') {
      if (this.state.subSearchTarget.globals) {
        return false;
      }
      return _.every(_.values(this.state.selectedTarget), o => {
        return _.isEmpty(o.items);
      });
    }
    return false;
  }

  handleSelectAllChange() {
    this.setState({ isSelectedAll: !this.state.isSelectedAll }, () => {
      this.props.onSelectAll(_.transform(this.props.searchedResult, (result, targets, key) => {
        result[key] = _.map(targets, target => {
          return _extends({},
          target, {
            entities: _.map(target.entities, entity => {
              return _extends({},
              entity, {
                isSelected: entity.isReplaceAllowed && this.state.isSelectedAll,
                fields: _.map(entity.fields, field => {
                  return _extends({},
                  field, {
                    isSelected: entity.isReplaceAllowed && this.state.isSelectedAll,
                    instances: _.map(field.instances, f => {
                      return _extends({},
                      f, {
                        isSelected: entity.isReplaceAllowed && this.state.isSelectedAll });

                    }) });

                }) });

            }) });

        });
      }, {}));
    });
  }

  render() {
    let featureFlags = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('FeatureFlagsStore').featureFlags;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-options-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-box-container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'section-label' }, 'FIND'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-box-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-input-wrapper' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["b" /* Input */], {
                  ref: 'findInput',
                  type: 'text',
                  inputStyle: 'box',
                  onChange: this.handleFindQueryChange,
                  value: this.state.findQuery,
                  placeholder: 'Enter text to find...',
                  onSubmit: this.handleFind,
                  onEscape: this.props.onClose }),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-input-extra-options' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-input-extra-option-item' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["a" /* Checkbox */], {
                      checked: this.state.isRegex,
                      onChange: this.handleRegexChange }),

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Regex')),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-input-extra-option-item' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["a" /* Checkbox */], {
                      checked: this.state.ignoreCase,
                      onChange: this.handleCaseChange }),

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Ignore Case')))),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
                  type: 'primary',
                  size: 'small',
                  onClick: this.handleFind,
                  disabled: this.handleDisableFind() }, 'Find'))),





          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-target-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'section-label' }, 'WHERE'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_radio_group__["RadioGroup"], {
                name: this.state.uniqueName,
                selectedValue: this.state.searchTarget,
                onChange: this.handleTargetSelect,
                className: 'find-target-options-wrapper' },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { className: 'find-target-option-item' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_radio_group__["Radio"], { value: 'all', className: 'radio-button' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Everything'))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { className: 'find-target-option-item' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_radio_group__["Radio"], { value: 'some', className: 'radio-button' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Choose entities to find in')))),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getEntitiesClasses() },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-target-option-entity collection-entity' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["a" /* Checkbox */], {
                  checked: this.state.subSearchTarget.collections,
                  disabled: this.state.searchTarget === 'all',
                  onChange: this.handleTargetEntityChange.bind(this, 'collections') }),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                    className: this.getSelectedEntityClasses('collections'),
                    onClick: this.handleTargetEntityOpen.bind(this, 'collections') },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, `Collections ${this.getSelectedTargetCount('collections')}`),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_DownSolidIcon__["a" /* default */], { size: 'xs', className: 'expand-entity' })),


                _.get(this.state.selectedTarget, 'collections.show') &&
                this.state.searchTarget === 'some' &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__FindReplaceSearchTargetSelector__["a" /* default */], {
                  label: 'Collections',
                  selectedItems: this.state.selectedTarget.collections.items,
                  items: this.props.userCollections,
                  onClose: this.handleCollectionSelectClose.bind(this, 'collections'),
                  onSelect: this.handleCollectionSelect.bind(this, 'collections'),
                  onCancel: this.props.onClose })),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-target-option-entity environment-entity' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["a" /* Checkbox */], {
                  checked: this.state.subSearchTarget.environments,
                  disabled: this.state.searchTarget === 'all',
                  onChange: this.handleTargetEntityChange.bind(this, 'environments') }),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                    className: this.getSelectedEntityClasses('environments'),
                    onClick: this.handleTargetEntityOpen.bind(this, 'environments') },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, `Environments ${this.getSelectedTargetCount('environments')}`),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_DownSolidIcon__["a" /* default */], { size: 'xs', className: 'expand-entity' })),


                _.get(this.state.selectedTarget, 'environments.show') &&
                this.state.searchTarget === 'some' &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__FindReplaceSearchTargetSelector__["a" /* default */], {
                  label: 'Environments',
                  selectedItems: this.state.selectedTarget.environments.items,
                  items: this.props.userEnvironments,
                  onClose: this.handleCollectionSelectClose.bind(this, 'environments'),
                  onSelect: this.handleCollectionSelect.bind(this, 'environments') })),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-target-option-entity' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["a" /* Checkbox */], {
                  checked: this.state.subSearchTarget.globals,
                  disabled: this.state.searchTarget === 'all',
                  onChange: this.handleTargetEntityChange.bind(this, 'globals') }),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Globals'))))),





        featureFlags.get('replaceElements') &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getReplaceBoxClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'section-label' }, 'REPLACE WITH'),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'replace-input-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'replace-input-option-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["b" /* Input */], {
                type: 'text',
                inputStyle: 'box',
                value: this.state.replaceString,
                placeholder: 'Enter text to replace with...',
                onChange: value => {
                  this.setState({ replaceString: value });
                } }),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'replace-input-extra-options' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["a" /* Checkbox */], {
                  checked: this.state.isSelectedAll,
                  onChange: this.handleSelectAllChange }),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Select all'))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
                type: 'primary',
                size: 'small',
                onClick: () => {
                  this.props.onReplace(this.state.replaceString);
                } },

              `Replace in ${this.props.selectedCount} selected`)))));






  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceSearchTargetSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Inputs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_CloseIcon__ = __webpack_require__(136);
var _class;



let


FindReplaceSearchTargetSelector = __WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside___default()(_class = class FindReplaceSearchTargetSelector extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      selectedItems: this.props.selectedItems };

    this.handleSelectAllItems = this.handleSelectAllItems.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleSelectAllItems() {

    let selectedItems = _.size(this.state.selectedItems) === _.size(this.props.items) ?
    [] : _.map(this.getFilteredItems(), 'id');
    this.props.onSelect(selectedItems);
    this.setState({ selectedItems });
  }

  handleClickOutside() {
    this.props.onClose();
  }

  handleSelectItem(id) {
    let selectedItems = [];
    if (_.includes(this.state.selectedItems, id)) {
      selectedItems = _.filter(this.state.selectedItems, itemId => {return itemId !== id;});
    } else
    {
      selectedItems = _.concat(this.state.selectedItems, id);
    }
    this.props.onSelect(selectedItems);
    this.setState({ selectedItems });
  }

  handleQueryChange(value) {
    this.setState({ searchQuery: value });
  }

  getFilteredItems() {
    return _.filter(this.props.items, item => {
      return _.includes(_.toLower(item.name), _.toLower(this.state.searchQuery));
    });
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'search-target-selector-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'search-target-selector-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'search-target-selector-label' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, this.props.label),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_CloseIcon__["a" /* default */], { onClick: this.props.onClose })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["b" /* Input */], {
            type: 'text',
            inputStyle: 'search',
            value: this.state.searchQuery,
            placeholder: `Search for ${_.toLower(this.props.label)}`,
            onChange: this.handleQueryChange,
            onCancel: this.props.onCancel }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'search-target-selector-meta' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'search-target-selector-meta--count' }, `All ${_.toLower(this.props.label)} (${_.size(this.props.items)})`),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'search-target-selector-meta--count-selected' }, `${_.size(this.state.selectedItems)} selected`),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], { type: 'text', className: 'search-target-selector-meta--action', onClick: this.handleSelectAllItems },
                `${_.size(this.state.selectedItems) === _.size(this.props.items) ? 'Unselect' : 'Select'} all`)))),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'search-target-selector--list' },

          _.map(this.getFilteredItems(), item => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  key: item.id,
                  className: 'search-target-selector--list-item',
                  onClick: this.handleSelectItem.bind(this, item.id) },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["a" /* Checkbox */], { checked: _.includes(this.state.selectedItems, item.id) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, item.name)));


          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceResultsSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Tabs__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FindReplaceTab__ = __webpack_require__(3373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_LoadingIndicator__ = __webpack_require__(2530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_ManageEnvironmentViews__ = __webpack_require__(2551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_FindReplaceHelper__ = __webpack_require__(2742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_EditorService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_EditorUtils__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_EditorUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__utils_EditorUtils__);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;











const TABS = {
  COLLECTIONS: 'Collections',
  ENVIRONMENTS: 'Environments',
  GLOBALS: 'Globals' };


/**
                         *
                         * @param {Object} data - FindReplaceHelper
                         */
function deNormalizeFilter(data) {
  return _.map(data, (value, key) => {
    return {
      key,
      displayName: value.filterDisplayName };

  });
}

const collectionFields = [{
  type: 'collection',
  displayName: 'Collections',
  fields: deNormalizeFilter(__WEBPACK_IMPORTED_MODULE_8__utils_FindReplaceHelper__["a" /* default */].collection) },
{
  type: 'folder',
  displayName: 'Folders',
  fields: deNormalizeFilter(__WEBPACK_IMPORTED_MODULE_8__utils_FindReplaceHelper__["a" /* default */].folder) },
{
  type: 'request',
  displayName: 'Requests',
  fields: deNormalizeFilter(__WEBPACK_IMPORTED_MODULE_8__utils_FindReplaceHelper__["a" /* default */].request) },
{
  type: 'response',
  displayName: 'Examples',
  fields: deNormalizeFilter(__WEBPACK_IMPORTED_MODULE_8__utils_FindReplaceHelper__["a" /* default */].response) }];


const environmentFields = [{
  type: 'environment',
  displayName: 'Environments',
  fields: deNormalizeFilter(__WEBPACK_IMPORTED_MODULE_8__utils_FindReplaceHelper__["a" /* default */].environment) }];


const globalFields = [{
  type: 'globals',
  displayName: 'Globals',
  fields: deNormalizeFilter(__WEBPACK_IMPORTED_MODULE_8__utils_FindReplaceHelper__["a" /* default */].globals) }];let



FindReplaceResultsSection = __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default()(_class = class FindReplaceResultsSection extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { activeTab: TABS.COLLECTIONS };
    this.handleTabSelect = this.handleTabSelect.bind(this);
  }

  handleTabSelect(value) {
    this.setState({ activeTab: value });
  }

  getResultCount(arr) {
    if (_.isEmpty(arr)) {
      return 0;
    }
    return _.reduce(arr, (sum, obj) => {
      return sum + obj.occurrences;
    }, 0);
  }

  handleChange(target, items) {
    this.props.onChange(_extends({},
    this.props.searchedResult, {
      [target]: items }));

  }

  render() {
    if (this.props.isLoading) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-results-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_LoadingIndicator__["a" /* default */], null)));


    }
    if (_.isEmpty(this.props.searchedResult)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-results-wrapper' },

          this.props.isLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_LoadingIndicator__["a" /* default */], null) :
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-empty-results-wrapper empty-results' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'find-replace-empty-results-image' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-empty-results-text' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Enter the search query in the left to search across collections, environments and globals. When you find something, you\u2019ll see the search results here. ')))));





    }
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-results-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-results--tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["b" /* Tabs */], {
              type: 'primary',
              defaultActive: TABS.COLLECTIONS,
              activeRef: this.state.activeTab,
              onChange: this.handleTabSelect },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], { refKey: TABS.COLLECTIONS, className: 'find-replace-results--collections' }, `Collections (${this.getResultCount(this.props.searchedResult.collections)})`),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], { refKey: TABS.ENVIRONMENTS, className: 'find-replace-results--environments' }, `Environments (${this.getResultCount(this.props.searchedResult.environments)})`),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], { refKey: TABS.GLOBALS, className: 'find-replace-results--globals' }, `Globals (${this.getResultCount(this.props.searchedResult.globals)})`))),



        this.state.activeTab === TABS.COLLECTIONS &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FindReplaceTab__["a" /* default */], {
          type: 'collection',
          searchedItems: this.props.searchedResult.collections,
          searchedQuery: this.props.searchedQuery,
          fields: collectionFields,
          onChange: this.handleChange.bind(this, 'collections'),
          renderOpenEntityComponent: entity => {
            if (entity.type !== 'request') {
              return null;
            }
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
                  type: 'text',
                  className: 'open-entity entity--request',
                  onClick: () => {
                    if (!(entity && entity.id)) {
                      return;
                    }

                    return __WEBPACK_IMPORTED_MODULE_9__services_EditorService__["a" /* default */].open(Object(__WEBPACK_IMPORTED_MODULE_10__utils_EditorUtils__["requestResourceId"])({ id: entity.id }), { preview: false }).
                    then(() => {
                      __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('bottombar', 'find_open', 'collections');
                    });
                  } }, 'Open in builder'));




          } }),



        this.state.activeTab === TABS.ENVIRONMENTS &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FindReplaceTab__["a" /* default */], {
          type: 'environment',
          searchedItems: this.props.searchedResult.environments,
          searchedQuery: this.props.searchedQuery,
          fields: environmentFields,
          onChange: this.handleChange.bind(this, 'environments'),
          renderOpenEntityComponent: entity => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
                  type: 'text',
                  className: 'open-entity',
                  onClick: () => {
                    pm.mediator.trigger('showManageEnvironmentModal', entity.id);
                    __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('bottombar', 'find_open', 'environments');
                  } }, 'Open'));




          } }),



        this.state.activeTab === TABS.GLOBALS &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FindReplaceTab__["a" /* default */], {
          type: 'globals',
          searchedItems: this.props.searchedResult.globals,
          searchedQuery: this.props.searchedQuery,
          fields: globalFields,
          onChange: this.handleChange.bind(this, 'globals'),
          renderOpenEntityComponent: entity => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
                  type: 'text',
                  className: 'open-entity',
                  onClick: () => {
                    pm.mediator.trigger('showManageEnvironmentModal', __WEBPACK_IMPORTED_MODULE_7__constants_ManageEnvironmentViews__["d" /* MANAGE_ENVIRONMENT_VIEW_GLOBALS */]);
                    __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('bottombar', 'find_open', 'globals');
                  } }, 'Open'));




          } })));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceCollectionsTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FoundTarget__ = __webpack_require__(3374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FindReplaceFieldSelector__ = __webpack_require__(3375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FindReplaceNotFound__ = __webpack_require__(3376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(7);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



let

FindReplaceCollectionsTab = class FindReplaceCollectionsTab extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    let defaultFields = this.getDefaultIncudedFields();
    this.state = {
      includedFields: defaultFields,
      fieldCount: _.size(defaultFields) };


    this.handleIncludeFields = this.handleIncludeFields.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getDefaultIncudedFields() {
    let fields = [];
    _.forEach(this.props.fields, itemField => {
      _.forEach(itemField.fields, f => {
        fields.push(`${itemField.type}-${f.key}`);
      });
    });

    return fields;
  }

  handleIncludeFields(type, property) {
    let str = `${type}-${property}`;
    let includedFields = this.state.includedFields;
    if (_.includes(this.state.includedFields, str)) {
      includedFields = _.filter(this.state.includedFields, field => {return field !== str;});
    } else
    {
      includedFields.push(str);
    }
    this.setState({ includedFields });
  }

  getFilteredItems() {
    let items = [];
    _.forEach(this.props.searchedItems, item => {
      let arr = [];
      _.forEach(item.entities, entity => {
        let sanitizedFields = _.filter(entity.fields, field => {
          return _.includes(this.state.includedFields, `${entity.type}-${field.property}`);
        });
        if (!_.isEmpty(sanitizedFields)) {
          arr.push(_extends({},
          entity, {
            fields: sanitizedFields }));

        }
      });
      if (!_.isEmpty(arr)) {
        items.push(_extends({},
        item, {
          entities: arr }));

      }
    });
    return items;
  }

  handleChange(position, object) {
    this.props.onChange(
    _.map(this.props.searchedItems, (item, index) => {
      if (position !== index) {
        return item;
      }
      return object;
    }));

  }

  render() {
    let filteredItems = this.getFilteredItems(),
    featureFlags = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('FeatureFlagsStore').featureFlags;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-tab-content' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__FindReplaceFieldSelector__["a" /* default */], {
          onIncludeFields: this.handleIncludeFields,
          fields: this.props.fields,
          includedFields: this.state.includedFields,
          fieldCount: this.state.fieldCount }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace--found-results' },

          _.isEmpty(filteredItems) ?

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FindReplaceNotFound__["a" /* default */], { searchedQuery: this.props.searchedQuery }) :


          _.map(filteredItems, (item, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__FoundTarget__["a" /* default */], {
                key: item.id,
                id: index,
                baseType: this.props.type,
                target: item,
                renderOpenEntityComponent: this.props.renderOpenEntityComponent,
                onChange: this.handleChange,
                allowSelect: featureFlags.get('replaceElements') }));


          }))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoundTarget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Tooltips__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_CollectionIcon__ = __webpack_require__(1059);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_EnvironmentIcon__ = __webpack_require__(2570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_DownSolidIcon__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_RightSolidIcon__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_FolderIcon__ = __webpack_require__(2597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collections_CollectionMetaIcons__ = __webpack_require__(1061);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Inputs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_PluralizeHelper__ = __webpack_require__(1058);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};










let
FoundInstance = class FoundInstance extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = { showTooltip: false };
    this.handleShowTooltipToggle = this.handleShowTooltipToggle.bind(this);
    this.handleHideTooltipToggle = this.handleHideTooltipToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleShowTooltipToggle() {
    if (!this.props.instance.tooltipContent) {
      return;
    }

    !this.state.showTooltip && this.setState({ showTooltip: true });
  }

  handleHideTooltipToggle() {
    if (!this.props.instance.tooltipContent) {
      return;
    }

    this.state.showTooltip && this.setState({ showTooltip: false });
  }

  handleChange() {
    this.props.onChange(this.props.id);
  }

  render() {
    let {
      metaString,
      index,
      matchedString,
      tooltipContent,
      isSelected } =
    this.props.instance;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'search-instance-row' },

        this.props.allowSelect &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Inputs__["a" /* Checkbox */], {
          checked: isSelected,
          onChange: this.handleChange,
          disabled: this.props.disabled }),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.props.className, ref: 'searchInstance',
            onMouseEnter: this.handleShowTooltipToggle,
            onMouseLeave: this.handleHideTooltipToggle },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, metaString.substring(0, index)),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'instance-highlight-text' }, matchedString),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, metaString.substring(index + matchedString.length, metaString.length)),

          tooltipContent &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'instance-tooltip', ref: 'instanceTooltip' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tooltips__["a" /* Tooltip */], {
                show: this.state.showTooltip,
                target: this.refs.instanceTooltip,
                placement: 'bottom-left',
                immediate: true },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tooltips__["b" /* TooltipBody */], null,
                tooltipContent))))));







  }};let


FoundFields = class FoundFields extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleInstanceChange = this.handleInstanceChange.bind(this);
  }

  handleChange() {
    this.props.onChange(this.props.id, _extends({},
    this.props.field, {
      isSelected: !this.props.field.isSelected,
      instances: _.map(this.props.field.instances, instance => {
        return _extends({},
        instance, {
          isSelected: !this.props.field.isSelected });

      }) }));

  }

  handleInstanceChange(instanceId) {
    this.props.onChange(this.props.id, _extends({},
    this.props.field, {
      isSelected: this.props.field.isSelected && !this.props.field.isSelected,
      instances: _.map(this.props.field.instances, (instance, index) => {
        if (index !== instanceId) {
          return instance;
        }
        return _extends({},
        instance, {
          isSelected: !instance.isSelected });

      }) }));

  }

  render() {
    let { field } = this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'found-in-target-entity__field' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'found-in-target-entity__field-label-row' },

          this.props.allowSelect &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Inputs__["a" /* Checkbox */], {
            checked: this.props.field.isSelected,
            onChange: this.handleChange,
            disabled: this.props.disabled }),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'found-in-target-entity__field-label' }, field.label)),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'found-in-target-entity--instances' },

          _.map(field.instances, (instance, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FoundInstance, {
                key: index,
                id: index,
                className: 'found-in-target-entity--instance',
                instance: instance,
                onChange: this.handleInstanceChange,
                disabled: this.props.disabled,
                allowSelect: this.props.allowSelect }));


          }))));




  }};let


FoundEntity = class FoundEntity extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  getLabelForEntity(entity) {
    if (!entity) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null);
    }
    const labels = {
      'GET': __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'identifier--GET' }, entity),
      'POST': __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'identifier--POST' }, entity),
      'DELETE': __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'identifier--DELETE' }, entity),
      'PUT': __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'identifier--PUT' }, entity),
      'FOLDER': __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_FolderIcon__["a" /* default */], { className: 'identifier--FOLDER' }),
      'EXAMPLE': __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'identifier--PUT' }, 'EXAMPLE') };


    return labels[entity] || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'identifier--default' }, entity);
  }

  handleChange() {
    this.props.onChange(this.props.id, _extends({},
    this.props.entity, {
      isSelected: !this.props.entity.isSelected,
      fields: _.map(this.props.entity.fields, field => {
        return _extends({},
        field, {
          isSelected: !this.props.entity.isSelected,
          instances: _.map(field.instances, instance => {
            return _extends({},
            instance, {
              isSelected: !this.props.entity.isSelected });

          }) });

      }) }));

  }

  handleFieldChange(fieldId, changedField) {
    this.props.onChange(this.props.id, _extends({},
    this.props.entity, {
      isSelected: this.props.entity.isSelected && !this.props.entity.isSelected,
      fields: _.map(this.props.entity.fields, (field, index) => {
        if (index !== fieldId) {
          return field;
        }
        return changedField;
      }) }));

  }

  render() {
    let { entity } = this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'found-in-target-entity' },

        entity.type !== this.props.baseType &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'found-in-target-entity__path-wrapper' },

          this.props.allowSelect &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Inputs__["a" /* Checkbox */], {
            checked: this.props.entity.isSelected,
            onChange: this.handleChange,
            disabled: this.props.disabled }),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'found-in-target-entity__path' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'entity-breadcrumb' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'path-prefix' }, entity.path),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'entity-name-wrapper' },
                '  >  ',
                this.getLabelForEntity(entity.label),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'entity-name' }, entity.name))))),






        _.invoke(this.props, 'renderOpenEntityComponent', entity),


        _.map(entity.fields, (field, index) => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FoundFields, {
              key: index,
              id: index,
              field: field,
              onChange: this.handleFieldChange,
              disabled: this.props.disabled,
              allowSelect: this.props.allowSelect }));


        })));



  }};let


FoundTarget = class FoundTarget extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.toggleShow = this.toggleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getClassNames() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'found-in-target': true,
      'empty-name': !_.get(this.props.target, 'targetName') });

  }

  toggleShow() {
    this.setState({ show: !this.state.show });
  }

  getBaseIcon(baseType) {
    switch (baseType) {
      case 'collection':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_CollectionIcon__["a" /* default */], { className: 'target-collection' });
      case 'environment':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_EnvironmentIcon__["a" /* default */], { className: 'target-environment' });}

  }

  handleChange(entityId, changedEntity) {
    this.props.onChange(this.props.id, _extends({},
    this.props.target, {
      entities: _.map(this.props.target.entities, (entity, index) => {
        if (entityId !== index) {
          return entity;
        }
        return changedEntity;
      }) }));

  }

  render() {
    let { target } = this.props;
    let collectionStore = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('CollectionStore');
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClassNames() },

        target.targetName &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'found-in-target--name-wrapper', onClick: this.toggleShow },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'found-in-target--name' },
            this.state.show ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_DownSolidIcon__["a" /* default */], { className: 'arrow' }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_RightSolidIcon__["a" /* default */], { className: 'arrow' }),
            this.getBaseIcon(this.props.baseType),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, target.targetName),

            this.props.baseType === 'collection' &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__collections_CollectionMetaIcons__["a" /* default */], { collection: collectionStore.find(target.id) })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'found-in-target--count' },

            ` (${target.occurrences} ${__WEBPACK_IMPORTED_MODULE_11__utils_PluralizeHelper__["a" /* default */].pluralize({
              count: target.occurrences,
              singular: 'result',
              plural: 'results' })
            })`)),





        this.state.show &&
        _.map(target.entities, (entity, index) => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FoundEntity, {
              key: index,
              id: index,
              baseType: this.props.baseType,
              entity: entity,
              renderOpenEntityComponent: this.props.renderOpenEntityComponent,
              onChange: this.handleChange,
              disabled: !entity.isReplaceAllowed,
              allowSelect: this.props.allowSelect }));


        })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceFieldSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Inputs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_DownSolidIcon__ = __webpack_require__(95);
var _class;



let


FindReplaceFieldSelector = __WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside___default()(_class = class FindReplaceFieldSelector extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleToggleSelector = this.handleToggleSelector.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleToggleSelector() {
    this.setState({ show: !this.state.show });
  }

  handleFieldSelect(type, property) {
    this.props.onIncludeFields(type, property);
  }

  handleClickOutside() {
    this.state.show && this.setState({ show: false });
  }

  getFieldLabelText() {
    return _.size(this.props.includedFields) == this.props.fieldCount ? 'ALL' : _.size(this.props.includedFields);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace--field-selector' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
            type: 'text',
            className: 'find-replace--field-selector-button',
            onClick: this.handleToggleSelector },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, `FILTER (${this.getFieldLabelText()} FIELDS)`),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_DownSolidIcon__["a" /* default */], { className: 'find-replace--field-selector-expand' })),


        this.state.show &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'search-field-selector-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'search-field-selector--head' }, 'INCLUDE FIELDS'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'search-field-selector--list' },

            _.map(this.props.fields, (fieldType, index) => {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: index, className: 'search-field-selector--section' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'search-field-selector--section-label' }, fieldType.displayName),

                  _.map(fieldType.fields, (field, index) => {
                    return (
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: index, className: 'search-field-selector--section-item' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["a" /* Checkbox */], { checked: _.includes(this.props.includedFields, `${fieldType.type}-${field.key}`), onChange: this.handleFieldSelect.bind(this, fieldType.type, field.key) }),
                        field.displayName));


                  })));



            })))));






  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceNotFound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(202);


let

FindReplaceNotFound = class FindReplaceNotFound extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-results-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-empty-results-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'find-replace-empty-results-image' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'find-replace-empty-results-header' }, `Nothing found for "${this.props.searchedQuery}"`),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Try another search, or modify the entities to find in. ')))));




  }};

/***/ }),

/***/ 3377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_pipelines_user_action__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_EnvironmentController__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_GlobalsController__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_FindReplaceHelper__ = __webpack_require__(2742);






const accessorMap = {
  collection: __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getCollection,
  folder: __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getFolder,
  request: __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getRequest,
  response: __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__["a" /* default */].getResponse,
  environment: __WEBPACK_IMPORTED_MODULE_2__modules_controllers_EnvironmentController__["a" /* default */].get.bind(__WEBPACK_IMPORTED_MODULE_2__modules_controllers_EnvironmentController__["a" /* default */]),
  globals: __WEBPACK_IMPORTED_MODULE_3__modules_controllers_GlobalsController__["a" /* default */].get.bind(__WEBPACK_IMPORTED_MODULE_3__modules_controllers_GlobalsController__["a" /* default */]) };


/**
                                                             * This is the normalized version of replace target.
                                                             * This helps in performing replace operation efficiently
                                                             *
                                                             * @typedef {Object} normalizedTarget
                                                             * @property {string} type Type of entity e.g collection, request etc
                                                             * @property {string} id Id of the entity
                                                             * @property {Object} changes This object will have properties, defined under
                                                             * different entity types, in FindReplaceHelper, and these properties will represent
                                                             * an array of found instances with that property in this entity. Refer tests to see object
                                                             * structure.
                                                             *
                                                             */


/**
                                                                 * Searched results on which we need to perform replace
                                                                 *
                                                                 * @param {Object} replaceTarget
                                                                 * @param {FoundTarget[]} replaceTarget.collections
                                                                 * @param {FoundTarget[]} replaceTarget.environments
                                                                 * @param {FoundTarget[]} replaceTarget.globals
                                                                 *
                                                                 * @returns {normalizedTarget[]}
                                                                 */
function normalizeTarget(replaceTarget) {
  let result = [];
  _.forOwn(replaceTarget, targets => {
    _.forEach(targets, target => {
      _.forEach(target.entities, entity => {
        let changes = {};
        _.forEach(entity.fields, field => {
          let instancesToReplace = _.filter(field.instances, 'isSelected');
          if (!_.isEmpty(instancesToReplace)) {
            if (_.isArray(changes[field.property])) {
              changes[field.property] = _.concat(changes[field.property], instancesToReplace);
            } else
            {
              changes[field.property] = instancesToReplace;
            }
          }
        });
        if (!_.isEmpty(changes)) {
          result.push({
            type: entity.type,
            id: entity.id,
            changes });

        }
      });
    });
  });
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
                  *
                  * @param {Object} replaceTarget
                  * @param {FoundTarget[]} replaceTarget.collections
                  * @param {FoundTarget[]} replaceTarget.environments
                  * @param {FoundTarget[]} replaceTarget.globals
                  * @param {string} replacementString String to replace with
                  *
                  * @returns {promise}
                  */
  replace(replaceTarget, replacementString) {
    let normalizedTargets = normalizeTarget(replaceTarget),
    actions = [];
    if (_.isEmpty(normalizedTargets)) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      _.forEach(normalizedTargets, (normalizedTarget, index) => {
        if (accessorMap.hasOwnProperty(normalizedTarget.type)) {
          let dispatchPromise = accessorMap[normalizedTarget.type]({ id: normalizedTarget.id }).then(data => {
            if (!data) {
              return;
            }
            _.forOwn(normalizedTarget.changes, (instances, key) => {
              let obj = _.get(__WEBPACK_IMPORTED_MODULE_4__utils_FindReplaceHelper__["a" /* default */], [normalizedTarget.type, key]);
              if (!obj || !_.isFunction(obj.replaceHelper)) {
                return;
              }
              obj.replaceHelper({ data, replacementString, instances, propertyPath: key });
            });
            let updateEvent = {
              name: 'update',
              namespace: normalizedTarget.type,
              data };

            return Object(__WEBPACK_IMPORTED_MODULE_0__modules_pipelines_user_action__["a" /* default */])(updateEvent);
          });
          actions.push(dispatchPromise);
        }
      });
      resolve(actions);
    });
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3378:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "findReplaceWorker.js");
};

/***/ }),

/***/ 3379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FindIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__ = __webpack_require__(38);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '13', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'find', d: 'M10.387 8.239l2.781 4.657c.54.904.22 2.06-.708 2.579-.919.512-2.091.209-2.624-.686l-2.79-4.673c-2.043.288-4.154-.626-5.254-2.465C.348 5.23 1.206 2.138 3.699.746 6.182-.642 9.36.18 10.797 2.59a4.928 4.928 0 0 1-.41 5.649zm-.727.732a5.236 5.236 0 0 1-1.598.897l2.633 4.409c.254.426.828.575 1.277.325a.857.857 0 0 0 .337-1.193L9.66 8.97zM4.187 1.619c-2.005 1.12-2.69 3.587-1.537 5.52 1.16 1.94 3.737 2.607 5.752 1.483 2.005-1.12 2.689-3.588 1.536-5.52-1.16-1.941-3.737-2.61-5.75-1.483zM8.53 3.855a.5.5 0 0 1-.859.513c-.436-.73-1.412-.984-2.175-.558a.5.5 0 1 1-.487-.873c1.232-.688 2.806-.28 3.52.918z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'evenodd', xlinkHref: '#find' }));



function FindIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__["a" /* default */], { identifier: 'find' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
      props, {
        icon: icon }))));



}

/***/ }),

/***/ 3380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_Icons_SidebarShowIcon__ = __webpack_require__(3381);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ToggleSidebar',
  position: 'left',

  getComponent: function ({
    React,
    PluginInterface,
    StatusBarComponents })
  {
    return class ToggleSidebar extends React.Component {
      constructor(props) {
        super(props);

        this.state = { isOpen: true };

        this.handleClick = this.handleClick.bind(this);
      }

      componentWillMount() {
        PluginInterface.register('sidebar', this.handleSidebarToggle, this);
      }

      handleSidebarToggle(isOpen) {
        this.setState({ isOpen });
      }

      handleClick() {
        PluginInterface.toggleSidebar();
        this.setState(state => {
          return { isOpen: !state.isOpen };
        });
      }

      getIcon() {
        let style = this.state.isOpen ? 'secondary' : 'normal';

        return (
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_base_Icons_SidebarShowIcon__["a" /* default */], { style: style }));

      }

      getShortcut() {
        let platform = PluginInterface.get('platform');
        if (_.includes(platform, 'Mac')) {
          return '⌘\\';
        } else
        {
          return 'Ctrl + \\';
        }
      }

      render() {
        let { Item, Icon } = StatusBarComponents;

        return (
          React.createElement(Item, {
              className: 'plugin__sidebar-shortcut',
              tooltip: `${this.state.isOpen ? 'Hide' : 'Show'} Sidebar (${this.getShortcut()})` },

            React.createElement(Icon, {
              onClick: this.handleClick,
              className: 'plugin__sidebar__icon',
              icon: this.getIcon() })));



      }};

  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SidebarShowIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__ = __webpack_require__(38);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '14', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'sidebar-show', d: 'M7 2H1.433A.433.433 0 0 0 1 2.434v11.132c0 .24.194.434.433.434H7V2zm1 0v12h6.567c.24 0 .433-.194.433-.434V2.434A.433.433 0 0 0 14.567 2H8zM6 5v1H2V5h4zm0-1H2V3h4v1zm0 3v1H2V7h4zm0 2v1H2V9h4zm0 2v1H2v-1h4zM1.324 1h13.352C15.407 1 16 1.593 16 2.324v11.352c0 .731-.593 1.324-1.324 1.324H1.324A1.324 1.324 0 0 1 0 13.676V2.324C0 1.593.593 1 1.324 1z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'evenodd', xlinkHref: '#sidebar-show' }));



function SidebarShowIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__["a" /* default */], { identifier: 'sidebar' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
      props, {
        icon: icon }))));



}

/***/ }),

/***/ 3382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_Icons_LightBulbIcon__ = __webpack_require__(3383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_UIEventService__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_UIEventConstants__ = __webpack_require__(249);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'XFlowActivityFeed',
  position: 'right',

  getComponent: function ({
    React,
    PluginInterface,
    StatusBarComponents })
  {
    return class XFlowActivityFeed extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          isModalOpen: false,
          receivingActivity: false };


        this.handleNewActivity = this.handleNewActivity.bind(this);
      }

      componentWillMount() {
        PluginInterface.register('xFlows', this.handleNewActivity);
        PluginInterface.register('modals', this.handleModalState, this);
      }

      handleNewActivity() {
        this.setState({ receivingActivity: true }, () => {
          setTimeout(() => {
            this.setState({ receivingActivity: false });
          }, 5000);
        });
      }

      handleClick() {
        __WEBPACK_IMPORTED_MODULE_1__services_UIEventService__["a" /* default */].publish(__WEBPACK_IMPORTED_MODULE_2__constants_UIEventConstants__["d" /* OPEN_LESSON_PLAN */], { source: 'status_bar' });
      }

      handleModalState(event, payload) {
        if (event === 'modalOpened' && payload.name === 'xFlowActivityModal') {
          this.setState({ isModalOpen: payload.isOpen });
        }
      }


      getIcon() {
        let style = this.state.receivingActivity || this.state.isModalOpen ? 'secondary' : 'normal';

        return (
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_base_Icons_LightBulbIcon__["a" /* default */], { style: style }));

      }

      render() {
        let { Item, Icon } = StatusBarComponents;

        return (
          React.createElement(Item, {
              className: `plugin__xFlowActivityFeed ${this.state.receivingActivity ? 'ripple-effect' : ''}`,
              tooltip: 'Learning Centre' },

            React.createElement(Icon, {
              onClick: this.handleClick,
              className: 'plugin__xFlowActivityFeed__icon',
              icon: this.getIcon() })));



      }};

  } });

/***/ }),

/***/ 3383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LightBulbIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__ = __webpack_require__(38);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '12', height: '17', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'light-bulb', d: 'M8 0C4.7 0 2 2.7 2 6c0 1.6 1 3.3 3 5.1v2.2h1v.8c0 1.1.9 2 2 2s2-.9 2-2v-.8h1V11c2-1.8 2.9-3.4 2.9-5C14 2.7 11.3 0 8 0zm2.2 10.4l-.2.1v1.4H6v-1.4l-.2-.1C3.9 8.8 3 7.3 3 6c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.3-.9 2.9-2.8 4.4z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#000', fillRule: 'nonzero', xlinkHref: '#light-bulb' }));



function LightBulbIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__["a" /* default */], { identifier: 'bulb' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
      props, {
        icon: icon }))));



}

/***/ }),

/***/ 3384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_WorkspaceViewModeService__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_AppUrlConstants_js__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WorkspaceTypeSwitcherIntro__ = __webpack_require__(2738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TypeSwitcher__ = __webpack_require__(2638);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};











const labelMap = {
  [__WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */]]: 'Build',
  [__WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */]]: 'Browse' };


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'WorkspaceViewSwitcher',
  position: 'right',

  getComponent: function ({
    React,
    PluginInterface,
    StatusBarComponents })
  {let
    WorkspaceTypeSwitcher = class WorkspaceTypeSwitcher extends React.Component {
      constructor(props) {
        super(props);

        this.state = { showTooltip: false };

        this.handleItemSelect = this.handleItemSelect.bind(this);
        this.handleHideTooptip = this.handleHideTooptip.bind(this);
        this.handleShowTooltip = this.handleShowTooltip.bind(this);
        this.handleLearnMore = this.handleLearnMore.bind(this);
      }

      componentWillMount() {
        this.viewModeReaction = Object(__WEBPACK_IMPORTED_MODULE_3_mobx__["q" /* reaction */])(() => Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode, viewMode => {
          if (viewMode === __WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */]) {
            this.handleShowTooltip();
          }
        });
      }

      componentWillUnmount() {
        this.viewModeReaction();
      }

      handleHideTooptip() {
        this.setState({ showTooltip: false });
        pm.settings.setSetting('showWorkspaceTypeSwitcherIntro', false);
      }

      handleShowTooltip() {
        this.setState({ showTooltip: _.isUndefined(pm.settings.getSetting('showWorkspaceTypeSwitcherIntro')) ? true : pm.settings.getSetting('showWorkspaceTypeSwitcherIntro') });
      }

      handleLearnMore() {
        pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_7__constants_AppUrlConstants_js__["d" /* BROWSING_A_WORKSPACE_DOCS */]);
      }

      handleItemSelect(item) {
        this.handleHideTooptip();

        if (item === Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode) {
          return;
        } else
        if (item === __WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */]) {
          __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'switch_view', 'browse');
          __WEBPACK_IMPORTED_MODULE_6__services_WorkspaceViewModeService__["a" /* default */].openBrowseMode();
        } else
        if (item === __WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */]) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember) {
            pm.mediator.trigger('joinWorkspace');
            return;
          }
          __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'switch_view', 'build');
          __WEBPACK_IMPORTED_MODULE_6__services_WorkspaceViewModeService__["a" /* default */].openBuildMode();
        }

      }

      getSwitchClasses(viewMode) {
        return __WEBPACK_IMPORTED_MODULE_4_classnames___default()({
          'plugin__workspace-view-switcher__switch': true,
          left: viewMode === __WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */],
          right: viewMode === __WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */] });

      }

      render() {
        let { Item, Text } = StatusBarComponents;
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn) {
          return false;
        }

        let viewMode = Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode;
        return (
          React.createElement('div', null,
            React.createElement(Item, _extends({
                className: 'plugin__workspace-view-switcher',
                tooltip: 'Switch workspace view',
                ref: 'tooltip_button' },
              this.props),

              React.createElement(Text, {
                render: () => {
                  return (
                    React.createElement(__WEBPACK_IMPORTED_MODULE_9__TypeSwitcher__["a" /* default */], {
                      activeItem: viewMode,
                      onSelect: this.handleItemSelect,
                      items: [
                      {
                        key: __WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */],
                        label: 'Build',
                        position: 'left' },

                      {
                        key: __WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */],
                        label: 'Browse',
                        position: 'right' }] }));




                } })),


            React.createElement(__WEBPACK_IMPORTED_MODULE_8__WorkspaceTypeSwitcherIntro__["a" /* default */], {
              show: this.state.showTooltip,
              target: this.refs.tooltip_button,
              onHide: this.handleHideTooptip,
              onLearnMore: this.handleLearnMore })));




      }};


    return Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(WorkspaceTypeSwitcher);
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Text__ = __webpack_require__(2743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon__ = __webpack_require__(2744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pane__ = __webpack_require__(2745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Drawer__ = __webpack_require__(2746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Tooltips__ = __webpack_require__(147);







let

Item = class Item extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { showTooltip: false };

    this.handleToggleTooltip = this.handleToggleTooltip.bind(this);
  }

  handleToggleTooltip(value = !this.state.showTooltip) {
    if (this.props.isOpen && value) {
      // Do not show the tooltip if the status bar / pane is open
      this.setState({ showTooltip: false });
      return;
    }

    this.setState({ showTooltip: value });
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'sb__item': true,
      'is-active': this.props.isOpen },
    this.props.className);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          ref: 'item',
          className: this.getClasses() },


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
          if (child.type === __WEBPACK_IMPORTED_MODULE_3__Icon__["a" /* default */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
              onMouseEnter: this.handleToggleTooltip.bind(this, true),
              onMouseLeave: this.handleToggleTooltip.bind(this, false) });

          } else
          if (child.type === __WEBPACK_IMPORTED_MODULE_2__Text__["a" /* default */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child);
          } else
          if (child.type === __WEBPACK_IMPORTED_MODULE_4__Pane__["a" /* default */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
              isOpen: this.props.isOpen,
              onClose: this.props.toggleActive });

          } else
          if (child.type === __WEBPACK_IMPORTED_MODULE_5__Drawer__["a" /* default */]) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
              isOpen: this.props.isOpen,
              onClose: this.props.toggleActive });

          } else
          {
            throw new Error('Invalid child type, must be Icon, Text, Drawer or Pane');
          }
        }),


        this.props.tooltip &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Tooltips__["a" /* Tooltip */], {
            show: this.state.showTooltip,
            target: this.refs.item,
            placement: 'top-right' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Tooltips__["b" /* TooltipBody */], null,
            this.props.tooltip))));





  }};

/***/ })

});