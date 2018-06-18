webpackJsonp([10],{

/***/ 1639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoundTarget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Tooltips__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_CollectionIcon__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_EnvironmentIcon__ = __webpack_require__(1513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_DownSolidIcon__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_RightSolidIcon__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_FolderIcon__ = __webpack_require__(1566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collections_CollectionMetaIcons__ = __webpack_require__(651);









let

FoundInstance = class FoundInstance extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { showTooltip: false };
    this.handleShowTooltipToggle = this.handleShowTooltipToggle.bind(this);
    this.handleHideTooltipToggle = this.handleHideTooltipToggle.bind(this);
  }

  handleShowTooltipToggle() {
    if (!this.props.tooltipContent) {
      return;
    }

    !this.state.showTooltip && this.setState({ showTooltip: true });
  }

  handleHideTooltipToggle() {
    if (!this.props.tooltipContent) {
      return;
    }

    this.state.showTooltip && this.setState({ showTooltip: false });
  }

  render() {
    let { text } = this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.props.className, ref: 'searchInstance',
          onMouseEnter: this.handleShowTooltipToggle,
          onMouseLeave: this.handleHideTooltipToggle },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, text.substring(0, this.props.startIndex)),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'instance-highlight-text' }, this.props.matchedString),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, text.substring(this.props.startIndex + this.props.matchedString.length, text.length)),

        this.props.tooltipContent &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'instance-tooltip', ref: 'instanceTooltip' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tooltips__["a" /* Tooltip */], {
              show: this.state.showTooltip,
              refElement: this.refs.instanceTooltip,
              placement: 'bottom-left',
              immediate: true },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tooltips__["b" /* TooltipBody */], null,
              this.props.tooltipContent)))));






  }};let


FoundEntity = class FoundEntity extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
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
      'FOLDER': __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_FolderIcon__["a" /* default */], { className: 'identifier--FOLDER' }) };


    return labels[entity] || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'identifier--default' }, entity);
  }

  render() {
    let { entity } = this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'found-in-target-entity' },

        entity.type !== this.props.baseType &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'found-in-target-entity__path' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'entity-breadcrumb' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'path-prefix' }, entity.path),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'entity-name-wrapper' },
              '  >  ',
              this.getLabelForEntity(entity.label),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'entity-name' }, entity.name)))),





        _.invoke(this.props, 'renderOpenEntityComponent', entity),


        _.map(entity.fields, (field, index) => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FoundFields, {
              key: index,
              field: field }));


        })));



  }};let


FoundFields = class FoundFields extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let { field } = this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'found-in-target-entity__field' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'found-in-target-entity__field-label' }, field.label),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'found-in-target-entity--instances' },

          _.map(field.foundAt, (instance, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FoundInstance, {
                key: index,
                className: 'found-in-target-entity--instance',
                text: instance.metaString,
                matchedString: instance.matchedString,
                startIndex: instance.index,
                tooltipContent: instance.tooltipContent }));


          }))));




  }};let


FoundTarget = class FoundTarget extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.toggleShow = this.toggleShow.bind(this);
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

  render() {
    let { target } = this.props;
    let collectionStore = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('CollectionStore');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClassNames() },

        target.targetName &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'found-in-target--name-wrapper', onClick: this.toggleShow },
          this.state.show ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_DownSolidIcon__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_RightSolidIcon__["a" /* default */], null),
          this.getBaseIcon(this.props.baseType),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, target.targetName),

          this.props.baseType === 'collection' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__collections_CollectionMetaIcons__["a" /* default */], { collection: collectionStore.find(target.id) })),




        this.state.show &&
        _.map(target.entities, (entity, index) => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FoundEntity, {
              key: index,
              baseType: this.props.baseType,
              entity: entity,
              renderOpenEntityComponent: this.props.renderOpenEntityComponent }));


        })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceFieldSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Inputs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_DownSolidIcon__ = __webpack_require__(79);
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
    this.setState({ show: false });
  }

  getFieldLabelText() {
    return _.size(this.props.includedFields) == this.props.fieldCount ? 'all' : _.size(this.props.includedFields);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace--field-selector' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
            type: 'text',
            className: 'find-replace--field-selector-button',
            onClick: this.handleToggleSelector },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, `Include ${this.getFieldLabelText()} fields`),
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

/***/ 1641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceNotFound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(109);


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

/***/ 1806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_AppUrlConstants__ = __webpack_require__(109);
let

PluginInterface = class PluginInterface {
  initialize() {
    this.properties = {
      layout: {
        value: pm.settings.getSetting('requesterTabLayout'),
        registerer: function (context, cb) {
          pm.settings.on('setSetting:requesterTabLayout', cb, context);
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

/***/ 1807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(13);
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

/***/ 1808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(13);
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

/***/ 1809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_draggable__ = __webpack_require__(1471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_CloseIcon__ = __webpack_require__(91);



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

/***/ 1810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drawer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(13);
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

/***/ 2768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatusBarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_status_bar_StatusBar__ = __webpack_require__(2769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_status_bar_plugins__ = __webpack_require__(2770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugins_PluginInterface__ = __webpack_require__(1806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_status_bar_base_Item__ = __webpack_require__(2795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_status_bar_base_Text__ = __webpack_require__(1807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_status_bar_base_Icon__ = __webpack_require__(1808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_status_bar_base_Pane__ = __webpack_require__(1809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_status_bar_base_Drawer__ = __webpack_require__(1810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_RequesterTabLayoutConstants__ = __webpack_require__(445);
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

          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins_PluginInterface__ = __webpack_require__(1806);

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

/***/ 2770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Console__ = __webpack_require__(2771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Help__ = __webpack_require__(2773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ShortcutsReference__ = __webpack_require__(2775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TwoPane__ = __webpack_require__(2777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FindAndReplace__ = __webpack_require__(2780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ToggleSidebar__ = __webpack_require__(2790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__XFlowActivityFeed__ = __webpack_require__(2792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WorkspaceTypeSwitcher__ = __webpack_require__(2794);









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

/***/ 2771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_Icons_ConsoleIcon__ = __webpack_require__(2772);

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
              onClick: this.handleClick,
              className: 'plugin__console__icon',
              icon: this.getIcon() })));



      }};

  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ConsoleIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(25);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '14', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'console', d: 'M1 5.208v8.178c0 .344.26.614.571.614H14.43c.311 0 .571-.27.571-.614V2.614C15 2.27 14.74 2 14.429 2H1.57C1.26 2 1 2.27 1 2.614v1.594h14v1H1zM14.429 15H1.57C.698 15 0 14.274 0 13.386V2.614C0 1.726.698 1 1.571 1H14.43C15.302 1 16 1.726 16 2.614v10.772c0 .888-.698 1.614-1.571 1.614zm-5.992-2.708h-2.5a.628.628 0 0 1-.625-.632c0-.35.28-.633.626-.633h2.5c.345 0 .624.283.624.633 0 .349-.28.632-.624.632zm-5-1.265a.619.619 0 0 1-.441-.185.635.635 0 0 1 0-.893l.808-.817-.808-.817a.637.637 0 0 1 0-.894.62.62 0 0 1 .884 0l1.249 1.264a.635.635 0 0 1 0 .894l-1.25 1.263a.621.621 0 0 1-.442.185z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'evenodd', xlinkHref: '#console' }));



function ConsoleIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_Icons_HelpIcon__ = __webpack_require__(2774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__ = __webpack_require__(109);
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
            PluginInterface.openURL(__WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__["O" /* SUPPORT_URL */]);
            break;
          case 'twitter':
            PluginInterface.openURL(__WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__["U" /* TWITTER_URL */]);
            break;
          case 'community':
            PluginInterface.openURL(__WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__["C" /* POSTMAN_COMMUNITY */]);
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

/***/ 2774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HelpIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(25);
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

/***/ 2775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_Icons_KeyboardShortcutIcon__ = __webpack_require__(2776);


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

/***/ 2776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyboardShortcutIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(25);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '15', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'keyboard-shortcut', d: 'M7.1 7V2.687c0-.455-.414-.843-.934-.843-.519 0-.932.388-.932.843v.751c0 .989-.846 1.781-1.868 1.781-1.02 0-1.866-.792-1.866-1.781V.5a.5.5 0 0 1 1 0v2.938c0 .421.384.781.866.781.484 0 .868-.36.868-.781v-.751c0-1.023.875-1.843 1.932-1.843 1.059 0 1.934.82 1.934 1.843V7H15v9H0V7h7.1zM1 15h13V8H1v7zm1-6h1v1H2V9zm2 0h1v1H4V9zm2 0h1v1H6V9zm2 0h1v1H8V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zM2 11h1v1H2v-1zm1 2h1v1H3v-1zm1-2h1v1H4v-1zm2 0h1v1H6v-1zm2 0h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm-1 2h1v1h-1v-1zm-6 0h5v1H5v-1z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'evenodd', xlinkHref: '#keyboard-shortcut' }));



function KeyboardShortcutIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_Icons_TwoPaneIcon__ = __webpack_require__(2778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Icons_SinglePaneIcon__ = __webpack_require__(2779);



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

/***/ 2778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TwoPaneIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(25);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'two-pane', d: 'M7.5 1H1v14h6.521a.974.974 0 0 1-.021-.205V1zm1 0v13.795c0 .072-.007.14-.021.205H15V1H8.5zM15 0a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14zM2.25 10V6h4v4h-4zm9.5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'evenodd', xlinkHref: '#two-pane' }));



function TwoPaneIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SinglePaneIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(25);
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

/***/ 2780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__find_replace__ = __webpack_require__(2781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Icons_FindIcon__ = __webpack_require__(2789);
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
                paneHeight: 350 },

              React.createElement(__WEBPACK_IMPORTED_MODULE_0__find_replace__["a" /* default */], {
                isOpen: this.props.isOpen,
                onClose: this.handleClose }))));




      }};

  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplace; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FindReplaceOptionSection__ = __webpack_require__(2782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FindReplaceResultsSection__ = __webpack_require__(2784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_CollectionController__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_keymaps_KeyMaps__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_EnvironmentController__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_controllers_GlobalsController__ = __webpack_require__(69);
var _class;









var WebpackWorker = __webpack_require__(2788);let


FindReplace = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* observer */])(_class = class FindReplace extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      searchedQuery: '',
      searchedResult: [],
      isLoading: false };

    this.handleFind = this.handleFind.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
    return workspaceGlobals && workspaceGlobals.values || [];
  }

  async handleFind(findOptions) {
    var myWorker = new WebpackWorker();
    myWorker.onerror = error => {
      this.setState({ isLoading: false });
      console.log('worker error', error);
      pm.crashReporter.report(error);
      myWorker.terminate();
    };

    let collections = await this.getTargetCollections(findOptions);
    let environments = await this.getTargetEnvironments(findOptions);
    let globals = await this.getTargetGlobals(findOptions);
    myWorker.postMessage(JSON.stringify({
      type: 'find',
      findOptions: _.pick(findOptions, ['findQuery', 'isRegex', 'ignoreCase']),
      searchTargets: {
        collections,
        environments,
        globals } }));



    myWorker.onmessage = e => {
      this.setState({
        searchedResult: _.get(e.data, 'result'),
        searchedQuery: _.get(e.data, 'findQuery'),
        isLoading: false });

      myWorker.terminate();
    };

    this.setState({ isLoading: true });
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
            onClose: this.handleClose }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__FindReplaceResultsSection__["a" /* default */], { isLoading: this.state.isLoading, searchedResult: this.state.searchedResult, searchedQuery: this.state.searchedQuery }))));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceOptionSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Inputs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_DownSolidIcon__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_radio_group__ = __webpack_require__(1507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_radio_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_radio_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FindReplaceSearchTargetSelector__ = __webpack_require__(2783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(20);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};






let

FindReplaceOptionSection = class FindReplaceOptionSection extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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


      replaceString: '' };

    this.handleRegexChange = this.handleRegexChange.bind(this);
    this.handleCaseChange = this.handleCaseChange.bind(this);
    this.handleFindQueryChange = this.handleFindQueryChange.bind(this);
    this.handleFind = this.handleFind.bind(this);
    this.handleTargetSelect = this.handleTargetSelect.bind(this);
    this.handleCollectionSelectClose = this.handleCollectionSelectClose.bind(this);
    this.handleCollectionSelect = this.handleCollectionSelect.bind(this);
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

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-options-wrapper' },
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

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Globals'))))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceSearchTargetSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Inputs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_CloseIcon__ = __webpack_require__(91);
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

/***/ 2784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceResultsSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Tabs__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FindReplaceCollectionsTab__ = __webpack_require__(2785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FindReplaceEnvironmentsTab__ = __webpack_require__(2786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FindReplaceGlobalsTab__ = __webpack_require__(2787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pure_render_decorator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_LoadingIndicator__ = __webpack_require__(1451);
var _class;









const TABS = {
  COLLECTIONS: 'Collections',
  ENVIRONMENTS: 'Environments',
  GLOBALS: 'Globals' };let



FindReplaceResultsSection = __WEBPACK_IMPORTED_MODULE_7_pure_render_decorator___default()(_class = class FindReplaceResultsSection extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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

  render() {
    if (this.props.isLoading) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-results-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_LoadingIndicator__["a" /* default */], null)));


    }
    if (_.isEmpty(this.props.searchedResult)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-results-wrapper' },

          this.props.isLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_LoadingIndicator__["a" /* default */], null) :
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FindReplaceCollectionsTab__["a" /* default */], { searchedItems: this.props.searchedResult.collections, searchedQuery: this.props.searchedQuery }),


        this.state.activeTab === TABS.ENVIRONMENTS &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__FindReplaceEnvironmentsTab__["a" /* default */], { searchedItems: this.props.searchedResult.environments, searchedQuery: this.props.searchedQuery }),


        this.state.activeTab === TABS.GLOBALS &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__FindReplaceGlobalsTab__["a" /* default */], { searchedItems: this.props.searchedResult.globals, searchedQuery: this.props.searchedQuery })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceCollectionsTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FoundTarget__ = __webpack_require__(1639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FindReplaceFieldSelector__ = __webpack_require__(1640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FindReplaceNotFound__ = __webpack_require__(1641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_CollectionSidebarService__ = __webpack_require__(1519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(20);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};







const collectionFields = [{
  type: 'collection',
  displayName: 'Collections',
  fields: [{
    key: 'name',
    displayName: 'Name' },
  {
    key: 'description',
    displayName: 'Description' },
  {
    key: 'collectionPreRequestScript',
    displayName: 'Pre-request script' },
  {
    key: 'collectionTests',
    displayName: 'Tests' },
  {
    key: 'collectionAuth',
    displayName: 'Authorization' },
  {
    key: 'collectionVariables',
    displayName: 'Variable' }] },

{
  type: 'folder',
  displayName: 'Folders',
  fields: [{
    key: 'name',
    displayName: 'Name' },
  {
    key: 'description',
    displayName: 'Description' },
  {
    key: 'folderPreRequestScript',
    displayName: 'Pre-request script' },
  {
    key: 'folderTests',
    displayName: 'Tests' },
  {
    key: 'folderAuth',
    displayName: 'Authorization' }] },

{
  type: 'request',
  displayName: 'Requests',
  fields: [{
    key: 'name',
    displayName: 'Name' },
  {
    key: 'description',
    displayName: 'Description' },
  {
    key: 'url',
    displayName: 'URL' },
  {
    key: 'pathVariableData',
    displayName: 'Path variables' },
  {
    key: 'queryParams',
    displayName: 'Query parameters' },
  {
    key: 'requestAuth',
    displayName: 'Authorization' },
  {
    key: 'headerData',
    displayName: 'Headers' },
  {
    key: 'data',
    displayName: 'Request body' },
  {
    key: 'preRequestScript',
    displayName: 'Pre-request script' },
  {
    key: 'tests',
    displayName: 'Tests' },
  {
    key: 'responses',
    displayName: 'Examples' }] }];let



FindReplaceCollectionsTab = class FindReplaceCollectionsTab extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    let defaultFields = this.getDefaultIncudedFields();
    this.state = {
      includedFields: defaultFields,
      fieldCount: _.size(defaultFields) };


    this.handleIncludeFields = this.handleIncludeFields.bind(this);
  }

  getDefaultIncudedFields() {
    let fields = [];
    _.forEach(collectionFields, collectionField => {
      _.forEach(collectionField.fields, f => {
        fields.push(`${collectionField.type}-${f.key}`);
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

  renderOpenEntityComponent(entity) {
    if (entity.type !== 'request') {
      return null;
    }
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
          type: 'text',
          className: 'open-entity entity--request',
          onClick: () => {
            let tab = pm.tabManager.getTabByRequestId(entity.id);
            __WEBPACK_IMPORTED_MODULE_5__modules_services_CollectionSidebarService__["a" /* default */].openRequestInTab(entity.id, { newTab: !tab });
            __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('bottombar', 'find_open', 'collections');
          } }, 'Open in builder'));




  }

  render() {
    let filteredItems = this.getFilteredItems();
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-tab-content' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__FindReplaceFieldSelector__["a" /* default */], {
          onIncludeFields: this.handleIncludeFields,
          fields: collectionFields,
          includedFields: this.state.includedFields,
          fieldCount: this.state.fieldCount }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace--found-results' },

          _.isEmpty(filteredItems) ?

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FindReplaceNotFound__["a" /* default */], { searchedQuery: this.props.searchedQuery }) :


          _.map(filteredItems, collection => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__FoundTarget__["a" /* default */], {
                key: collection.id,
                baseType: 'collection',
                target: collection,
                renderOpenEntityComponent: this.renderOpenEntityComponent }));


          }))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceEnvironmentsTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FoundTarget__ = __webpack_require__(1639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FindReplaceFieldSelector__ = __webpack_require__(1640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FindReplaceNotFound__ = __webpack_require__(1641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(20);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};






const environmentFields = [{
  type: 'environment',
  displayName: 'Environments',
  fields: [{
    key: 'name',
    displayName: 'Name' },
  {
    key: 'values.key',
    displayName: 'Variable name' },
  {
    key: 'values.value',
    displayName: 'Variable value' }] }];let



FindReplaceEnvironmentsTab = class FindReplaceEnvironmentsTab extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    let defaultFields = this.getDefaultIncudedFields();
    this.state = {
      includedFields: defaultFields,
      fieldCount: _.size(defaultFields) };


    this.handleIncludeFields = this.handleIncludeFields.bind(this);
  }

  getDefaultIncudedFields() {
    let fields = [];
    _.forEach(environmentFields, environmentField => {
      _.forEach(environmentField.fields, f => {
        fields.push(`${environmentField.type}-${f.key}`);
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

  renderOpenEntityComponent(entity) {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
          type: 'text',
          className: 'open-entity',
          onClick: () => {
            pm.mediator.trigger('showManageEnvironmentModal', entity.id);
            __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('bottombar', 'find_open', 'environments');
          } }, 'Open'));




  }

  render() {
    let filteredItems = this.getFilteredItems();
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-tab-content' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__FindReplaceFieldSelector__["a" /* default */], {
          onIncludeFields: this.handleIncludeFields,
          fields: environmentFields,
          includedFields: this.state.includedFields,
          fieldCount: this.state.fieldCount }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace--found-results' },

          _.isEmpty(filteredItems) ?

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FindReplaceNotFound__["a" /* default */], { searchedQuery: this.props.searchedQuery }) :


          _.map(this.getFilteredItems(), environment => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__FoundTarget__["a" /* default */], {
                key: environment.id,
                baseType: 'environment',
                target: environment,
                renderOpenEntityComponent: this.renderOpenEntityComponent }));


          }))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindReplaceGlobalsTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FoundTarget__ = __webpack_require__(1639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FindReplaceFieldSelector__ = __webpack_require__(1640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FindReplaceNotFound__ = __webpack_require__(1641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_ManageEnvironmentViews__ = __webpack_require__(1489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(20);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};







const globalFields = [{
  type: 'global',
  displayName: 'Globals',
  fields: [{
    key: 'globals.key',
    displayName: 'Variable name' },
  {
    key: 'globals.value',
    displayName: 'Variable value' }] }];let



FindReplaceGlobalsTab = class FindReplaceGlobalsTab extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    let defaultFields = this.getDefaultIncudedFields();
    this.state = {
      includedFields: defaultFields,
      fieldCount: _.size(defaultFields) };


    this.handleIncludeFields = this.handleIncludeFields.bind(this);
  }

  getDefaultIncudedFields() {
    let fields = [];
    _.forEach(globalFields, globalField => {
      _.forEach(globalField.fields, f => {
        fields.push(`${globalField.type}-${f.key}`);
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

  renderOpenEntityComponent(entity) {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
          type: 'text',
          className: 'open-entity',
          onClick: () => {
            pm.mediator.trigger('showManageEnvironmentModal', __WEBPACK_IMPORTED_MODULE_5__constants_ManageEnvironmentViews__["d" /* MANAGE_ENVIRONMENT_VIEW_GLOBALS */]);
            __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('bottombar', 'find_open', 'globals');
          } }, 'Open'));




  }

  render() {
    let filteredItems = this.getFilteredItems();
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace-tab-content' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__FindReplaceFieldSelector__["a" /* default */], {
          onIncludeFields: this.handleIncludeFields,
          fields: globalFields,
          includedFields: this.state.includedFields,
          fieldCount: this.state.fieldCount }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'find-replace--found-results' },

          _.isEmpty(filteredItems) ?

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FindReplaceNotFound__["a" /* default */], { searchedQuery: this.props.searchedQuery }) :


          _.map(this.getFilteredItems(), globals => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__FoundTarget__["a" /* default */], {
                key: globals.id,
                baseType: 'global',
                target: globals,
                renderOpenEntityComponent: this.renderOpenEntityComponent }));


          }))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2788:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "findReplaceWorker.js");
};

/***/ }),

/***/ 2789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FindIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(25);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '13', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'find', d: 'M10.387 8.239l2.781 4.657c.54.904.22 2.06-.708 2.579-.919.512-2.091.209-2.624-.686l-2.79-4.673c-2.043.288-4.154-.626-5.254-2.465C.348 5.23 1.206 2.138 3.699.746 6.182-.642 9.36.18 10.797 2.59a4.928 4.928 0 0 1-.41 5.649zm-.727.732a5.236 5.236 0 0 1-1.598.897l2.633 4.409c.254.426.828.575 1.277.325a.857.857 0 0 0 .337-1.193L9.66 8.97zM4.187 1.619c-2.005 1.12-2.69 3.587-1.537 5.52 1.16 1.94 3.737 2.607 5.752 1.483 2.005-1.12 2.689-3.588 1.536-5.52-1.16-1.941-3.737-2.61-5.75-1.483zM8.53 3.855a.5.5 0 0 1-.859.513c-.436-.73-1.412-.984-2.175-.558a.5.5 0 1 1-.487-.873c1.232-.688 2.806-.28 3.52.918z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'evenodd', xlinkHref: '#find' }));



function FindIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_Icons_SidebarShowIcon__ = __webpack_require__(2791);


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

/***/ 2791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SidebarShowIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(25);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '14', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'sidebar-show', d: 'M7 2H1.433A.433.433 0 0 0 1 2.434v11.132c0 .24.194.434.433.434H7V2zm1 0v12h6.567c.24 0 .433-.194.433-.434V2.434A.433.433 0 0 0 14.567 2H8zM6 5v1H2V5h4zm0-1H2V3h4v1zm0 3v1H2V7h4zm0 2v1H2V9h4zm0 2v1H2v-1h4zM1.324 1h13.352C15.407 1 16 1.593 16 2.324v11.352c0 .731-.593 1.324-1.324 1.324H1.324A1.324 1.324 0 0 1 0 13.676V2.324C0 1.593.593 1 1.324 1z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'evenodd', xlinkHref: '#sidebar-show' }));



function SidebarShowIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_Icons_LightBulbIcon__ = __webpack_require__(2793);


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
        PluginInterface.openModal('x-flow-activity-feed');
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
              tooltip: 'Continue where you left off' },

            React.createElement(Icon, {
              onClick: this.handleClick,
              className: 'plugin__xFlowActivityFeed__icon',
              icon: this.getIcon() })));



      }};

  } });

/***/ }),

/***/ 2793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LightBulbIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(25);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '12', height: '17', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'light-bulb', d: 'M8 0C4.7 0 2 2.7 2 6c0 1.6 1 3.3 3 5.1v2.2h1v.8c0 1.1.9 2 2 2s2-.9 2-2v-.8h1V11c2-1.8 2.9-3.4 2.9-5C14 2.7 11.3 0 8 0zm2.2 10.4l-.2.1v1.4H6v-1.4l-.2-.1C3.9 8.8 3 7.3 3 6c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.3-.9 2.9-2.8 4.4z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#000', fillRule: 'nonzero', xlinkHref: '#light-bulb' }));



function LightBulbIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants_js__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WorkspaceTypeSwitcherIntro__ = __webpack_require__(1804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TypeSwitcher__ = __webpack_require__(1637);
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
        this.viewModeReaction = Object(__WEBPACK_IMPORTED_MODULE_3_mobx__["l" /* reaction */])(() => Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode, viewMode => {
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
        pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants_js__["d" /* BROWSING_A_WORKSPACE_DOCS */]);
      }

      handleItemSelect(item) {
        this.handleHideTooptip();

        if (item === Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode) {
          return;
        } else
        if (item === __WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */]) {
          __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'switch_view', 'browse');
        } else
        if (item === __WEBPACK_IMPORTED_MODULE_0__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */]) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember) {
            pm.mediator.trigger('joinWorkspace');
            return;
          }
          __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'switch_view', 'build');
        }

        // this.props.toggleActive();
        Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').updateState({ viewMode: item });
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
                    React.createElement(__WEBPACK_IMPORTED_MODULE_8__TypeSwitcher__["a" /* default */], {
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


            React.createElement(__WEBPACK_IMPORTED_MODULE_7__WorkspaceTypeSwitcherIntro__["a" /* default */], {
              show: this.state.showTooltip,
              refElement: this.refs.tooltip_button,
              onHide: this.handleHideTooptip,
              onLearnMore: this.handleLearnMore })));




      }};


    return Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(WorkspaceTypeSwitcher);
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Text__ = __webpack_require__(1807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon__ = __webpack_require__(1808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pane__ = __webpack_require__(1809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Drawer__ = __webpack_require__(1810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Tooltips__ = __webpack_require__(243);







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
            refElement: this.refs.item,
            placement: 'top-right' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Tooltips__["b" /* TooltipBody */], null,
            this.props.tooltip))));





  }};

/***/ })

});