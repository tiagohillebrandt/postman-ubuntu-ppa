webpackJsonp([30],{

/***/ 3205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequesterBuilderContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_draggable__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_EnvironmentSelectorContainer__ = __webpack_require__(3206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_EnvironmentPreviewContainer__ = __webpack_require__(3208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_EnvironmentMenuContainer__ = __webpack_require__(3212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tabs_TabTitles__ = __webpack_require__(3215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_tabs_TabContents__ = __webpack_require__(3219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_TabShortcutsService__ = __webpack_require__(2757);
var _class;












let



RequesterBuilderContainer = __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside___default()(_class = __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default()(_class = class RequesterBuilderContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      selectorWidth: pm.settings.getSetting('selectorWidth') || 210,
      tabScrollDirection: 'none' };


    this.focus = this.focus.bind(this);
    this.handleStartDrag = this.handleStartDrag.bind(this);
    this.handleStopDrag = this.handleStopDrag.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentWillMount() {
    this.attachModelListeners();
  }

  componentWillUnmount() {
    this.detachModelListeners();
  }

  attachModelListeners() {
    pm.mediator.on('focusBuilder', this.focus);
  }

  detachModelListeners() {
    pm.mediator.off('focusBuilder', this.focus);
  }

  getKeymapHandlers() {
    return Object(__WEBPACK_IMPORTED_MODULE_12__services_TabShortcutsService__["a" /* getTabShortcuts */])();
  }

  focus() {
    _.invoke(this, 'refs.builder.focus');
  }

  handleStartDrag(event, data) {
    this.selectorWidth = this.state.selectorWidth;
    this.startClientX = data.x;
  }

  handleStopDrag() {
    pm.settings.setSetting('selectorWidth', this.state.selectorWidth);
  }

  handleDrag(event, data) {
    event.preventDefault();
    let clientX = data.x,
    selectorWidth = this.selectorWidth + (this.startClientX - clientX);

    if (selectorWidth > 450) {
      selectorWidth = 450;
    } else
    if (selectorWidth < 210) {
      selectorWidth = 210;
    }

    this.setState({ selectorWidth: selectorWidth });
  }


  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__["a" /* default */], { keyMap: pm.shortcuts.getShortcuts(), handlers: this.getKeymapHandlers() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-builder' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-builder-header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_tabs_TabTitles__["a" /* default */], {
              tabScrollDirection: this.state.tabScrollDirection }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_draggable__["DraggableCore"], {
                axis: 'x',
                onStart: this.handleStartDrag,
                onDrag: this.handleDrag,
                onStop: this.handleStopDrag },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-resize-handle-wrapper' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-resize-handle' }))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-container' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__["a" /* default */], { identifier: 'environmentSelector' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__environments_EnvironmentSelectorContainer__["a" /* default */], { selectorWidth: this.state.selectorWidth })),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__["a" /* default */], { identifier: 'environmentPreview' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__environments_EnvironmentPreviewContainer__["a" /* default */], null)),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__["a" /* default */], { identifier: 'environmentMenu' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__environments_EnvironmentMenuContainer__["a" /* default */], null)))),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_tabs_TabContents__["a" /* default */], { ref: 'builder' }))));



  }}) || _class) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentSelectorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_environments_EnvironmentSelector__ = __webpack_require__(3207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_WorkspaceSessionController__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_pipelines_user_action__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_model_event__ = __webpack_require__(5);
var _class;







const defaultEnvironment = {
  id: null,
  name: 'No Environment' };let



EnvironmentSelectorContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class EnvironmentSelectorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleEnvironmentSelect = this.handleEnvironmentSelect.bind(this);
  }

  /**
     * selecting an env from the dropdown will call this. this will update Environment Store
     */
  handleEnvironmentSelect(environment) {
    let activeWorkspaceSessionId = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').id;

    // dispatchUserAction to update the particular environment id
    Object(__WEBPACK_IMPORTED_MODULE_5__modules_pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6__modules_model_event__["a" /* createEvent */])(
    'setActiveEnvironment',
    'workspacesession',
    {
      workspaceSession: { id: activeWorkspaceSessionId },
      activeEnvironment: environment }));


  }

  getSelectorEnvironmentList(environmentsList) {
    let environments = _.chain(environmentsList).
    filter(environment => {
      return !environment.team;
    }).
    sortBy(environment => environment.name.toLowerCase()).
    value();

    environments.unshift(defaultEnvironment);

    return environments;
  }

  render() {
    const selectorEnvironmentList = this.getSelectorEnvironmentList(Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').environments),
    selectedEnvironment = _.find(selectorEnvironmentList, environment => {
      return environment.id === Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id;
    }) || defaultEnvironment;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_environments_EnvironmentSelector__["a" /* default */], {
        environmentsList: selectorEnvironmentList,
        ref: 'selector',
        selectedEnvironment: selectedEnvironment,
        selectorWidth: this.props.selectorWidth,
        onSelect: this.handleEnvironmentSelect }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_InputSelectV2__ = __webpack_require__(1265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_SearchHighlighter__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_XPaths_XPath__ = __webpack_require__(26);




let

EnvironmentSelector = class EnvironmentSelector extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleEnvironmentSelect = this.handleEnvironmentSelect.bind(this);
  }

  handleEnvironmentSelect(environment) {
    pm.mediator.trigger('focusBuilder');
    this.props.onSelect && this.props.onSelect(environment.id);
  }

  filterEnvironments(environmentList, query, options = {}) {

    if (!query || options.firstRender) {
      return environmentList;
    }

    return _.filter(environmentList, environment => {
      return environment.id && _.includes(environment.name.toLowerCase(), query.toLowerCase());
    });
  }

  getOption(item, search, option = {}) {
    const name = item.name,
    id = item.id;
    if (search && !option.firstRender) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_XPaths_XPath__["a" /* default */], { identifier: id },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-select-item' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_SearchHighlighter__["a" /* default */], {
              source: name,
              query: search }))));




    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_XPaths_XPath__["a" /* default */], { identifier: id }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-select-item' }, name));
  }

  getSelectWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ 'environment-selector-wrapper': true });
  }

  render() {
    const { environmentsList, selectedEnvironment, selectorWidth } = this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-selector-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getSelectWrapperClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_InputSelectV2__["a" /* InputSelectV2 */], {
            style: { width: selectorWidth },
            selectedItem: selectedEnvironment,
            getInputValue: environmentObj => {
              return environmentObj.name || '';
            },
            optionRenderer: this.getOption,
            getFilteredList: this.filterEnvironments.bind(this, environmentsList),
            ref: 'inputSelect',
            onSelect: this.handleEnvironmentSelect,
            menuClassName: 'environment-selector-menu' }))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentPreviewContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_environments_EnvironmentPreview__ = __webpack_require__(3209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Icons_PreviewIcon__ = __webpack_require__(3211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_VariableSessionHelper__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__ = __webpack_require__(26);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;










let

EnvironmentPreviewContainer = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* observer */])(_class = class EnvironmentPreviewContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      globalsList: [],
      hoveredKey: null };


    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleModelChangeDebounced = _.debounce(this.handleModelChange, 300, {
      leading: false,
      trailing: true });


    this.handleHover = this.handleHover.bind(this);
    this.handlePreviewClose = this.handlePreviewClose.bind(this);
    this.handlePreviewToggle = this.handlePreviewToggle.bind(this);
  }

  componentWillMount() {
    this.handleModelChange();
  }

  componentWillUnmount() {
    this.handleModelChangeDebounced.cancel();
  }


  getIconClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'environment-preview-button': true,
      'is-open': this.state.isOpen });

  }

  getEnabled(varsList) {
    if (varsList.values) {
      // Environment
      let visibleValues = _.filter(varsList.values, function (value) {
        return _.get(value, 'enabled', true);
      });

      return _extends({},
      varsList, {
        values: visibleValues });

    } else
    {
      return _.filter(varsList, function (value) {
        return _.get(value, 'enabled', true);
      });
    }
  }

  handleModelChange() {
    if (!this.state.isOpen) {
      return;
    }

    this.setState({ globalsList: this.getNextGlobalState() });
  }

  handleHover(hoveredKey) {
    this.setState({ hoveredKey });
  }

  handlePreviewClose() {
    this.state.isOpen && this.setState({ isOpen: false });
  }

  handlePreviewToggle() {
    if (!this.state.isOpen) {
      this.setState({ isOpen: true });
      return;
    }
    this.setState({ isOpen: false });
  }

  handleEnvironmentSessionUpdate(zippedVariables) {
    let envSessionVariables = Object(__WEBPACK_IMPORTED_MODULE_8__utils_VariableSessionHelper__["d" /* unzipVariables */])(zippedVariables).sessionVariables,
    envSessionUpdateEvent = Object(__WEBPACK_IMPORTED_MODULE_9__modules_model_event__["a" /* createEvent */])('update', 'variablesession', {
      id: Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').session.id,
      model: 'environment',
      values: envSessionVariables });


    Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])(envSessionUpdateEvent).
    then(() => {
      __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__["a" /* default */].addEvent('session', 'user_edit', 'environment');
    }).
    catch(err => {
      console.error('Error while updating session', err);
    });
  }

  handleGlobalsSessionUpdate(zippedVariables) {
    let globalsSessionVariables = Object(__WEBPACK_IMPORTED_MODULE_8__utils_VariableSessionHelper__["d" /* unzipVariables */])(zippedVariables).sessionVariables,
    globalsSessionUpdateEvent = Object(__WEBPACK_IMPORTED_MODULE_9__modules_model_event__["a" /* createEvent */])('update', 'variablesession', {
      id: Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore').session.id,
      model: 'globals',
      values: globalsSessionVariables });


    Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])(globalsSessionUpdateEvent).
    then(() => {
      __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__["a" /* default */].addEvent('session', 'user_edit', 'globals');
    }).
    catch(err => {
      console.error('Error while updating session', err);
    });
  }

  render() {
    let environment = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore'),
    globals = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
            type: 'icon',
            className: this.getIconClasses(),
            onClick: this.handlePreviewToggle,
            tooltip: 'Environment quick look' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Icons_PreviewIcon__["a" /* default */], { className: 'environment-preview-icon' })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__["a" /* default */], { identifier: 'previewList', isVisible: this.state.isOpen },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_environments_EnvironmentPreview__["a" /* default */], {
            isOpen: this.state.isOpen,
            selectedEnvironmentStore: environment,
            globalsStore: globals,
            onClose: this.handlePreviewClose,
            onHover: this.handleHover,
            onEnvironmentSessionUpdate: this.handleEnvironmentSessionUpdate,
            onGlobalsSessionUpdate: this.handleGlobalsSessionUpdate,
            hoveredKey: this.state.hoveredKey }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentPreview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EnvironmentPreviewList__ = __webpack_require__(3210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_ManageEnvironmentViews__ = __webpack_require__(2671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_VariableSessionHelper__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__variables_VariableAlertWrapper__ = __webpack_require__(2699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__ = __webpack_require__(26);
var _dec, _class;








let


EnvironmentPreview = (_dec = __WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside___default()({ eventCapturingPhase: false }), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class EnvironmentPreview extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handleGlobalEdit = this.handleGlobalEdit.bind(this);
    this.handleEnvironmentEdit = this.handleEnvironmentEdit.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleEnvironmentAdd = this.handleEnvironmentAdd.bind(this);
  }

  handleClose() {
    this.props.onClose && this.props.onClose();
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'environment-preview': true,
      'is-closed': !this.props.isOpen });

  }

  handleClickOutside(e) {
    if (_.includes(e.target.className, 'environment-preview-button') ||
    document.querySelector('.environment-preview-button').contains(e.target))
    {
      return;
    }
    this.handleClose();
  }

  handleGlobalEdit() {
    this.handleClose();
    pm.mediator.trigger('showManageEnvironmentModal', __WEBPACK_IMPORTED_MODULE_4__constants_ManageEnvironmentViews__["d" /* MANAGE_ENVIRONMENT_VIEW_GLOBALS */]);
  }

  handleEnvironmentEdit() {
    this.handleClose();
    pm.mediator.trigger('showManageEnvironmentModal', _.get(this.props.selectedEnvironmentStore, 'id'));
  }

  handleEnvironmentAdd() {
    this.handleClose();
    pm.mediator.trigger('showManageEnvironmentModal', __WEBPACK_IMPORTED_MODULE_4__constants_ManageEnvironmentViews__["a" /* MANAGE_ENVIRONMENT_VIEW_ADD_ENV */]);
  }

  render() {
    let environmentValues = Object(__WEBPACK_IMPORTED_MODULE_6__utils_VariableSessionHelper__["c" /* sanitizeZippedValues */])(this.props.selectedEnvironmentStore.enabledValues),
    globalValues = Object(__WEBPACK_IMPORTED_MODULE_6__utils_VariableSessionHelper__["c" /* sanitizeZippedValues */])(this.props.globalsStore.enabledValues);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: 'environment' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__EnvironmentPreviewList__["a" /* default */], {
              title: _.get(this.props.selectedEnvironmentStore, 'name', 'Environment'),
              items: environmentValues,
              envId: _.get(this.props.selectedEnvironmentStore, 'id'),
              keyHeading: 'VARIABLE',
              valueHeading: 'INITIAL VALUE',
              sessionHeading: 'CURRENT VALUE',
              onHover: this.props.onHover,
              onEdit: this.handleEnvironmentEdit,
              onAdd: this.handleEnvironmentAdd,
              onUpdate: this.props.onEnvironmentSessionUpdate,
              emptyMessage: 'No active Environment',
              hoveredKey: this.props.hoveredKey,
              overriddenKeys: [] })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-divider' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: 'globals' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__EnvironmentPreviewList__["a" /* default */], {
              title: 'Globals',
              items: globalValues,
              keyHeading: 'VARIABLE',
              valueHeading: 'INITIAL VALUE',
              sessionHeading: 'CURRENT VALUE',
              onHover: this.props.onHover,
              onEdit: this.handleGlobalEdit,
              onUpdate: this.props.onGlobalsSessionUpdate,
              emptyMessage: 'No Globals available',
              hoveredKey: this.props.hoveredKey,
              overriddenKeys: _.map(environmentValues, 'key'),
              envId: 'globals' })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__variables_VariableAlertWrapper__["a" /* default */], { onMessageLinkClick: this.handleClose }))));



  }}) || _class) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentPreviewList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_InlineInput__ = __webpack_require__(1099);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_EditIcon__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_VariableSessionService__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_VariableSessionHelper__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_VariablesConstants__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_XPaths_XPath__ = __webpack_require__(26);
var _class;













const truncateOptions = { length: __WEBPACK_IMPORTED_MODULE_10__constants_VariablesConstants__["a" /* VARIABLE_VALUE_MAX_LENGTH */], separator: ' ' };let


EnvironmentPreviewList = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class EnvironmentPreviewList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      editableVariableIndex: null,
      session: null,
      items: [] };

    this.handleEditVariable = this.handleEditVariable.bind(this);
  }

  getVariableRef(index) {
    return `variable-ref-${index}`;
  }

  handleEditVariable(index) {
    let activeEnvironmentId = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id,
    activeWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id,
    activeGlobalsId = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore').id,
    sessionId,
    model,
    modelId;

    if (this.props.envId === 'globals') {
      model = 'globals';
      modelId = activeGlobalsId;
    } else {
      model = 'environment';
      modelId = activeEnvironmentId;
    }

    sessionId = Object(__WEBPACK_IMPORTED_MODULE_9__utils_VariableSessionHelper__["b" /* getSessionId */])(model, modelId, activeWorkspaceId);
    Object(__WEBPACK_IMPORTED_MODULE_5__modules_services_VariableSessionService__["d" /* getSessionFor */])(sessionId).
    then(session => {
      if (!session) {
        return;
      }

      let items = Object(__WEBPACK_IMPORTED_MODULE_9__utils_VariableSessionHelper__["c" /* sanitizeZippedValues */])(Object(__WEBPACK_IMPORTED_MODULE_9__utils_VariableSessionHelper__["g" /* zipVariables */])(this.props.items, session.values));

      this.setState({ editableVariableIndex: _.toString(index), items, session }, () => {
        let input = this.refs[this.getVariableRef(index)];
        input && input.startEditing();
      });
    }).
    catch(err => {
      console.error('Failed to get session in environment preview', err);
      pm.toasts.error('Something went wrong. Please check DevTools.');
    });
  }

  handleVariableToggle(index, isEditing) {
    const inlineInput = this.refs[this.getVariableRef(index)];
    if (isEditing && inlineInput) {
      inlineInput.focus();
      inlineInput.selectAll();
    } else
    {
      this.setState({ editableVariableIndex: null });
    }
  }

  handleVariableSubmit(index, newValue) {
    let updatedItems = _.clone(this.state.session.values),
    updatedItem = _.reject(updatedItems, { enabled: false })[index],
    indexInCompleteList = _.findIndex(updatedItems, item => {
      return item === updatedItem;
    });


    updatedItems[indexInCompleteList].sessionValue = newValue;
    this.props.onUpdate(updatedItems);
  }

  getClasses(item) {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'environment-preview-list-item': true,
      'globals-preview-list-item': this.props.title === 'Globals',
      'is-hovered': item.key === this.props.hoveredKey,
      'is-overridden': _.includes(this.props.overriddenKeys, item.key) });

  }

  handleGlobalDocs() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["p" /* GLOBAL_VARIABLE_DOCS */]);
  }

  handleEnvironmentDocs() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["m" /* ENVIRONMENT_DOCS */]);
  }

  render() {
    let items = this.state.editableVariableIndex ? this.state.items : this.props.items;
    let noEnvSelected = !this.props.envId;
    let isGlobals = this.props.title === 'Globals';
    let title = this.props.title;

    if (noEnvSelected) {
      title = 'Environment';
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-selected' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-header__meta' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'environment-header__meta__title' }, title),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'environment-header__meta__actions--edit',
                type: 'text',
                onClick: !noEnvSelected ? this.props.onEdit : this.props.onAdd },

              !noEnvSelected ? 'Edit' : 'Add')),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-divider' })),


        !isGlobals && items.length === 0 &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-list-item--no-environment' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-list-item--no-environment-header' }, !noEnvSelected ? 'No Environment variables' : this.props.emptyMessage),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-list-item--no-environment-text' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null, 'An environment is a set of variables that allow you to switch the context of your requests. '),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'learn-more',
                type: 'text',
                onClick: this.handleEnvironmentDocs }, 'Learn more about environments'))),







        isGlobals && !noEnvSelected && items.length === 0 &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-list-item--empty-globals' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-list-item--empty-globals-header' }, 'No global variables'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-list-item--empty-globals-text' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null, 'Global variables are a set of variables that are always available in a workspace. '),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'learn-more-link',
                type: 'text',
                onClick: this.handleGlobalDocs }, 'Learn more about globals'))),







        !noEnvSelected && items.length !== 0 &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-list' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-list-header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'environment-preview-list-header__key' }, this.props.keyHeading),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'environment-preview-list-header__value' }, this.props.valueHeading),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'environment-preview-list-header__session-value' }, this.props.sessionHeading)),


          _.map(items, (item, index) => {
            if (item.enabled) {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_XPaths_XPath__["a" /* default */], { identifier: index, key: `variable-${index}` },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                      onMouseEnter: this.props.onHover.bind(this, item.key),
                      onMouseLeave: this.props.onHover.bind(this, null),
                      className: this.getClasses(item) },

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'environment-preview-list-item__key' }, item.key),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'environment-preview-list-item__value' }, item.value),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'environment-preview-list-item__session-value' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_InlineInput__["a" /* default */], {
                        className: 'collection-browser-details-header__name',
                        placeholder: item.sessionValue,
                        ref: this.getVariableRef(index),
                        value: index == this.state.editableVariableIndex ? item.sessionValue : _.truncate(item.sessionValue, truncateOptions),
                        onSubmit: this.handleVariableSubmit.bind(this, index),
                        onToggleEdit: this.handleVariableToggle.bind(this, index) }),


                      !this.state.editableVariableIndex &&
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                          className: 'environment-preview-list-item__session-value__edit-icon-wrapper',
                          onClick: this.handleEditVariable.bind(this, index) },

                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_EditIcon__["a" /* default */], {
                          className: 'environment-preview-list-item__session-value__edit-icon',
                          size: 'xs' }))))));







            }
          }))));





  }}) || _class;


EnvironmentPreviewList.defaultProps = { items: [] };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PreviewIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(42);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '9', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'preview', d: 'M8 4C2.751 4 0 7.884 0 8.5 0 9.116 2.751 13 8 13c5.248 0 8-3.884 8-4.5C16 7.885 13.248 4 8 4zm0 7.961c-1.964 0-3.556-1.55-3.556-3.461 0-1.913 1.592-3.463 3.556-3.463 1.963 0 3.555 1.55 3.555 3.463 0 1.912-1.592 3.461-3.555 3.461zm0-3.46c-.326-.36.53-1.732 0-1.732-.982 0-1.778.775-1.778 1.731 0 .956.795 1.73 1.778 1.73.982 0 1.778-.774 1.778-1.73 0-.439-1.502.306-1.778 0z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#preview' }));



function PreviewIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 3212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentMenuContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_environments_EnvironmentMenu__ = __webpack_require__(3213);
var _class;


let


EnvironmentMenuContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class EnvironmentMenuContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleManageEnvironment = this.handleManageEnvironment.bind(this);
    this.handleShareEnvironment = this.handleShareEnvironment.bind(this);
  }

  getIconClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'environment-preview-button': true,
      'is-open': this.state.isOpen });

  }

  handleManageEnvironment() {
    pm.mediator.trigger('showManageEnvironmentModal', 'Manage');
  }

  handleShareEnvironment() {
    pm.mediator.trigger('showManageEnvironmentModal', 'Templates');
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-menu-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_environments_EnvironmentMenu__["a" /* default */], {
          onManageEnvironments: this.handleManageEnvironment,
          onShareEnvironments: this.handleShareEnvironment })));



  }}) || _class;

/***/ }),

/***/ 3213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_SettingsIcon__ = __webpack_require__(3214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
var _class;



let


EnvironmentMenu = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class EnvironmentMenu extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleEnvironmentManage = this.handleEnvironmentManage.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_4_classnames___default()({
      'environment-menu': true,
      'is-open': this.props.isOpen });

  }

  handleEnvironmentManage() {
    this.props.onManageEnvironments && this.props.onManageEnvironments();
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
            className: 'environment-menu-button',
            tooltip: 'Manage Environments',
            onClick: this.handleEnvironmentManage },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_SettingsIcon__["a" /* default */], { className: 'environment-menu-icon' }))));



  }}) || _class;

/***/ }),

/***/ 3214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SettingsIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(42);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'settings', d: 'M16 9.62c-.162.507-.316 1.009-.49 1.502a.292.292 0 0 1-.24.074 40.124 40.124 0 0 1-1.51-.217.35.35 0 0 0-.409.16c-.178.275-.371.54-.579.795a.389.389 0 0 0-.046.502c.275.488.518.981.776 1.506l-1.378 1c-.423-.405-.848-.798-1.257-1.206a.354.354 0 0 0-.425-.091c-.348.125-.707.225-1.054.354a.318.318 0 0 0-.176.205c-.11.584-.206 1.174-.313 1.796H7.304a.21.21 0 0 1-.133-.145c-.105-.53-.201-1.063-.29-1.597a.26.26 0 0 0-.211-.245c-.37-.106-.738-.225-1.106-.348a.266.266 0 0 0-.318.074c-.412.428-.831.855-1.263 1.283l-1.421-1c.252-.508.486-1.013.753-1.5a.403.403 0 0 0-.04-.53c-.224-.263-.424-.545-.623-.825a.236.236 0 0 0-.29-.116c-.524.09-1.054.162-1.58.248a.235.235 0 0 1-.2-.023.228.228 0 0 1-.107-.168A19.382 19.382 0 0 0 .08 9.93a.205.205 0 0 1-.019-.188.21.21 0 0 1 .144-.125c.471-.229.926-.485 1.395-.719a.285.285 0 0 0 .188-.314c-.013-.35-.013-.699 0-1.049a.333.333 0 0 0-.22-.365C1.045 6.925.536 6.654 0 6.38c.162-.507.316-1.009.49-1.499a.292.292 0 0 1 .24-.074c.506.063 1.01.131 1.51.214a.347.347 0 0 0 .406-.157c.182-.283.381-.554.596-.813a.37.37 0 0 0 .03-.484 43.456 43.456 0 0 1-.77-1.509l1.377-1c.426.407.848.798 1.26 1.206a.35.35 0 0 0 .425.091c.347-.125.706-.225 1.054-.354a.315.315 0 0 0 .176-.205C6.904 1.212 7 .622 7.107 0h1.595a.212.212 0 0 1 .133.145c.104.53.203 1.061.29 1.597a.26.26 0 0 0 .211.248c.37.106.738.225 1.106.348.11.05.24.02.315-.074.411-.428.831-.856 1.26-1.283l1.421 1c-.252.51-.492 1.013-.75 1.503a.39.39 0 0 0 .026.525c.235.285.58.407.657.855.058.064.142.1.23.097a50.556 50.556 0 0 0 1.603-.243.235.235 0 0 1 .206.008.228.228 0 0 1 .118.166c.116.405.255.804.4 1.198.035.05.043.113.022.17a.187.187 0 0 1-.13.115c-.474.237-.94.493-1.415.73a.285.285 0 0 0-.185.313c0 .351.014.702 0 1.05a.333.333 0 0 0 .22.365c.51.242 1.027.516 1.56.786zM10.708 8a2.665 2.665 0 0 0-1.667-2.467 2.737 2.737 0 0 0-2.951.574 2.636 2.636 0 0 0-.59 2.906 2.707 2.707 0 0 0 2.501 1.647c1.49-.008 2.696-1.193 2.707-2.66z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#A9A9A9', fillRule: 'evenodd', xlinkHref: '#settings' }));



function SettingsIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 3215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabTitles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TabTitle__ = __webpack_require__(3216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NewTabAction__ = __webpack_require__(3217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TabActions__ = __webpack_require__(3218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_EditorService__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__ = __webpack_require__(26);
var _class;








let

TabTitles = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class TabTitles extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.tabs = {};
    this.handleReorder = this.handleReorder.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'requester-tabs': true,
      [`is-scrolling-${this.props.tabScrollDirection}`]: true });

  }

  handleReorder(sourceId, destinationId, position) {
    if (!destinationId || !position) {
      return;
    }

    let destination = { [position]: destinationId };

    __WEBPACK_IMPORTED_MODULE_8__services_EditorService__["a" /* default */].moveEditor(sourceId, destination);
  }

  handleScroll(e) {
    var node = Object(__WEBPACK_IMPORTED_MODULE_3_react_dom__["findDOMNode"])(this.refs.tabs);
    e.deltaY && (node.scrollLeft += e.deltaY);
  }

  render() {
    let TabUIStore = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('TabUIStore'),
    activeTab = TabUIStore.activeTab;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tabs-wrapper', onWheel: this.handleScroll },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses(), ref: 'tabs' },

          _.map(TabUIStore.tabHeaders, (tab, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: `${tab.id}/tab`, key: tab.id },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__TabTitle__["a" /* default */], {
                  tab: tab,
                  onReorder: this.handleReorder,
                  isLastVisibleTab: index === _.size(TabUIStore.tabHeaders) - 1,
                  isActive: activeTab === tab.id })));



          })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: 'addNewTab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__NewTabAction__["a" /* default */], null)),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tabs-options-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: 'tabActions' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__TabActions__["a" /* default */], null))))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dnd__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_CloseIcon__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_EditorService__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Tooltips__ = __webpack_require__(141);
var _dec, _dec2, _class;









const EDITOR_NAME_LENGTH = 24,
CONFLICT_STATES_MAP = {
  updated: 'CONFLICT',
  deleted: 'DELETED' },

CONFLICT = 'CONFLICT';

const getMiddleX = component => {
  const elementRect = Object(__WEBPACK_IMPORTED_MODULE_3_react_dom__["findDOMNode"])(component).getBoundingClientRect();
  return elementRect.left + elementRect.width / 2;
};


const tabSource = {
  canDrag(props, monitor) {
    return !props.only;
  },

  beginDrag(props) {
    return { id: props.tab.id };
  },

  endDrag(props, monitor) {
    const dragId = monitor.getItem().id;
    const { dropId, position } = monitor.getDropResult() || {};

    if (dragId === dropId) {
      return;
    }

    props.onReorder(dragId, dropId, position);
  } };


const tabTarget = {
  hover(props, monitor, component) {
    const dragId = monitor.getItem().id;
    const dropId = props.tab.id;
    if (dragId === dropId) {
      return;
    }

    if (!props.isLastVisibleTab) {
      component.getDecoratedComponentInstance().scheduleHoverUpdate();
      return;
    }

    if (monitor.getClientOffset().x > getMiddleX(component)) {
      component.getDecoratedComponentInstance().scheduleHoverUpdate('after');
    } else
    {
      component.getDecoratedComponentInstance().scheduleHoverUpdate();
    }

  },
  drop(props, monitor, component) {
    if (!props.isLastVisibleTab) {
      return {
        dropId: props.tab.id,
        position: 'before' };

    }
    return {
      dropId: props.tab.id,
      position: monitor.getClientOffset().x > getMiddleX(component) ? 'after' : 'before' };

  } };let


















TabTitle = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_dnd__["DropTarget"])('requester-tab', tabTarget, (connect, monitor) => {return { connectDropTarget: connect.dropTarget(), isDragOver: monitor.isOver({ shallow: true }), canDrop: monitor.canDrop() };}), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_2_react_dnd__["DragSource"])('requester-tab', tabSource, (connect, monitor) => {return { connectDragSource: connect.dragSource(), connectDragPreview: connect.dragPreview(), isDragging: monitor.isDragging() };}), _dec(_class = _dec2(_class = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* observer */])(_class = class TabTitle extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleCloseTab = this.handleCloseTab.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.setDropHoverLeft = this.setDropHoverLeft.bind(this);
    this.setDropHoverRight = this.setDropHoverRight.bind(this);
    this.scheduleHoverUpdate = this.scheduleHoverUpdate.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

    this.showConflictTooltip = this.showConflictTooltip.bind(this);
    this.hideConflictTooltip = this.hideConflictTooltip.bind(this);

    this.state = { showConflictMessage: false };
  }

  getClasses() {
    let tabStore = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('TabUIStore'),
    tabId = this.props.tab.id,
    isActive = tabStore.activeTab === tabId,
    isPreview = tabStore.previewTab === tabId;

    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'requester-tab': true,
      'is-active': isActive,
      'is-preview': isPreview,
      'is-dragged': this.props.isDragging,
      'is-hover-left': this.state.dropHoverLeft,
      'is-hover-right': this.state.dropHoverRight,
      'is-drop-hovered': this.props.canDrop && this.props.isDragOver });

  }

  componentDidMount() {
    this.scrollActiveTabInView();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isActive && this.props.tab.resourceId !== prevProps.tab.resourceId) {
      this.scrollActiveTabInView();
    }
  }

  scrollActiveTabInView() {
    this.refs.tabTitle && this.refs.tabTitle.scrollIntoViewIfNeeded(false);
  }

  showConflictTooltip() {
    !this.state.showConflictMessage && this.setState({ showConflictMessage: true });
  }

  hideConflictTooltip() {
    this.state.showConflictMessage && this.setState({ showConflictMessage: false });
  }

  getCloseButtonClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'requester-tab__close': true,
      'is-dirty': this.props.tab.isDirty });

  }

  handleDoubleClick() {
    this.props.tab.isPreview &&
    __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].promoteEditor({ id: this.props.tab.id });
  }

  handleCloseTab(event) {
    __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].close({ id: this.props.tab.id });
    event.stopPropagation();
  }

  handleFocus() {
    __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].focus({ id: this.props.tab.id });
  }

  scheduleHoverUpdate(type) {
    let func = this.setDropHoverLeft;
    if (type === 'after') {
      func = this.setDropHoverRight;
    }
    if (!this.requestedFrame) {
      this.requestedFrame = requestAnimationFrame(() => {
        try {
          func && func();
        }
        catch (e) {
        } finally
        {
          this.requestedFrame = null;
        }
      });
    }
  }

  setDropHoverLeft() {
    !this.state.dropHoverLeft &&
    this.setState({
      dropHoverLeft: true,
      dropHoverRight: false });

  }

  setDropHoverRight() {
    !this.state.dropHoverRight &&
    this.setState({
      dropHoverLeft: false,
      dropHoverRight: true });

  }

  handleMouseUp(e) {
    // middle click
    if (e.nativeEvent.which === 2) {
      __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].close({ id: this.props.tab.id });
      return;
    }
  }


  render() {
    const {
      connectDragSource,
      connectDropTarget,
      connectDragPreview } =
    this.props;

    let tab = this.props.tab,
    editor = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('EditorStore').find(tab.id),
    tabUiStore = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('TabUIStore'),
    Icon,
    showIcons,
    tabName;

    if (!editor) {
      return null;
    }

    // if setting for showIcons is switched to true,
    // then find the icon
    showIcons = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('ConfigurationStore') && Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('ConfigurationStore').get('editor.showIcons');
    Icon = showIcons && editor.model && editor.model.getIcon();
    tabName = tab.name;

    return connectDropTarget(connectDragPreview(connectDragSource(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: this.getClasses(),
        'data-tab-id': tab.id,
        onClick: this.handleFocus,
        onDoubleClick: this.handleDoubleClick,
        onMouseUp: this.handleMouseUp,
        onMouseEnter: this.showConflictTooltip,
        onMouseLeave: this.hideConflictTooltip },

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-title-wrapper', ref: 'tabTitle' },
        tab.isConflicted &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab__conflict-message-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'requester-tab__conflict-message',
              ref: 'conflictMessage' },


            `[${_.toUpper(CONFLICT_STATES_MAP[tab.conflictState.type]) || CONFLICT}] `),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Tooltips__["a" /* Tooltip */], {
              show: this.state.showConflictMessage,
              target: this.refs.conflictMessage,
              placement: 'bottom-right' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Tooltips__["c" /* TooltipHeader */], null,
              _.truncate(tab.name, { length: EDITOR_NAME_LENGTH })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Tooltips__["b" /* TooltipBody */], null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null, ' ', _.toUpper(CONFLICT_STATES_MAP[tab.conflictState.type]) || CONFLICT, ' '),
              tab.conflictState.message))),





        showIcons &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab__icon' },

          Icon && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, { editor: this.props.tab })),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab__name' },


          tabName),


        tabUiStore.canCloseTab(tab.id) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getCloseButtonClasses(),
            onClick: this.handleCloseTab },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_CloseIcon__["a" /* default */], {
            className: 'requester-tab__close-icon',
            size: 'xs' })))))));






  }}) || _class) || _class) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Icons_AddIcon__ = __webpack_require__(1097);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_EditorService__ = __webpack_require__(95);


let

NewTab = class NewTab extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    __WEBPACK_IMPORTED_MODULE_2__services_EditorService__["a" /* default */].openDefault();
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-create', onClick: this.handleClick },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Icons_AddIcon__["a" /* default */], {
          className: 'requester-tab-create-icon',
          size: 'xs' })));



  }};

/***/ }),

/***/ 3218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterTabOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_MoreIcon__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_ShortcutsList__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_EditorService__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_get_store__ = __webpack_require__(6);
var _class;








let


RequesterTabOptions = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class RequesterTabOptions extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.getRecentlyClosedTabs = this.getRecentlyClosedTabs.bind(this);
  }

  handleClick() {
    this.props.onClick && this.props.onClick();
  }

  handleSelect(item, editorId) {
    switch (item) {
      case 'duplicate':
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].duplicate();
        break;
      case 'close-active':
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].closeCurrent();
        break;
      case 'force-close-active':
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].closeCurrent({ force: true });
        break;
      case 'close-other':
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].closeAllButCurrent();
        break;
      case 'close-all':
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].closeAll();
        break;
      case 'force-close-all':
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].requestForceCloseAll();
        break;
      case 'undo-close':
        if (!editorId) {
          return;
        }
        __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].undoClose(editorId);
        break;}

  }

  getRecentlyClosedTabs() {
    let closedEditors = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').closedEditors || [],
    EditorStore = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('EditorStore');

    if (!closedEditors) {
      return;
    }

    return _.chain(closedEditors).
    map(id => {
      let editor = EditorStore.find(id),
      editorModel = editor && editor.model;

      if (!editorModel) {
        return;
      }

      let configStore = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('ConfigurationStore'),
      showIcons = configStore && configStore.get('editor.showIcons'),
      Icon = showIcons && editorModel.getIcon(),
      name = editorModel.name;

      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: editor.id, key: editor.id },

          Icon &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab__icon' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, { editor: editorModel })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { title: name },

            name)));



    }).
    compact().
    value();
  }

  closeDropdown() {
    _.invoke(this.refs, 'dropdown.__wrappedComponent.toggleDropdown', null, false);
  }

  getEmptyStateForRecentlyClosed() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { disabled: true },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab__name' }, 'None')));





  }

  render() {

    let recentlyClosedTabs = this.getRecentlyClosedTabs(),
    emptyStateForRecentlyClosed = this.getEmptyStateForRecentlyClosed(),
    subMenuForRecentlyClosed = !_.isEmpty(recentlyClosedTabs) ? recentlyClosedTabs : emptyStateForRecentlyClosed;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["a" /* Dropdown */], {
          ref: 'dropdown',
          className: 'tab-actions-dropdown',
          onSelect: this.handleSelect,
          onToggle: this.props.onToggle },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["b" /* DropdownButton */], {
            dropdownStyle: 'nocaret',
            type: 'custom' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], { className: 'requester-tab-options', onClick: this.handleClick },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_MoreIcon__["a" /* default */], { className: 'requester-tab-options-icon' }))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: 'undo-close', hasSubMenu: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'undoClosed' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Recently Closed')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["f" /* SubMenuItem */], null,

              subMenuForRecentlyClosed)),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: 'duplicate' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'duplicate' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Duplicate Current Tab'))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider divider--space' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: 'close-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'closeCurrentTab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Close Current Tab'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_5__controllers_ShortcutsList__["c" /* getShortcutByName */])('closeCurrentTab')))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: 'force-close-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'forceCloseCurrentTab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Force Close Current Tab'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_5__controllers_ShortcutsList__["c" /* getShortcutByName */])('forceCloseCurrentTab')))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: 'close-other' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'closeOtherTabs' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Close All but Current Tab'))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: 'close-all' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'closeAllTabs' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Close All Tabs'))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: 'force-close-all' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'forceCloseAllTabs' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Force Close All Tabs'))))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TabContent__ = __webpack_require__(3220);
var _class;


let


TabContents = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class TabContents extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super(...arguments);
    this.focus = this.focus.bind(this);
  }

  componentDidMount() {
    if (Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').isSwitching) {
      Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').resetLifecycle(Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace);
    }
  }

  componentDidUpdate() {
    if (Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').isSwitching) {
      Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').resetLifecycle(Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace);
    }
  }

  focus() {
    let activeTabId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('TabUIStore').activeTab,
    tab = this.refs[activeTabId];

    tab && tab.focus();
  }

  getTabs() {
    let tabs = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('TabUIStore').tabContents,
    activeTab = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('TabUIStore').activeTab,
    EditorStore = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('EditorStore');

    if (!EditorStore) {
      return;
    }

    return _.chain(tabs).
    map(tab => {
      let editor = EditorStore.find(tab);

      if (!editor) {
        return;
      }

      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TabContent__["a" /* default */], { key: tab, tabId: tab, isActive: activeTab === tab, ref: tab }));

    }).
    compact().
    value();
  }

  render() {
    let tabs = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('TabUIStore').tabContents;

    if (!tabs) {
      return null;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-contents' },
        this.getTabs()));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_empty_states_CrashHandler__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_EditorService__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__ = __webpack_require__(26);
var _class;








let


TabContent = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class TabContent extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super(...arguments);

    this.focus = this.focus.bind(this);
    this.closeTab = this.closeTab.bind(this);
    this.handleScrollToTop = this.handleScrollToTop.bind(this);
    this.handleScrollToBottom = this.handleScrollToBottom.bind(this);
  }

  componentDidMount() {
    pm.mediator.on('handleScrollToTopShortcut', this.handleScrollToTop);
    pm.mediator.on('handleScrollToBottomShortcut', this.handleScrollToBottom);
  }

  componentWillUnmount() {
    pm.mediator.off('handleScrollToTopShortcut', this.handleScrollToTop);
    pm.mediator.off('handleScrollToBottomShortcut', this.handleScrollToBottom);
  }

  handleScrollToTop() {
    if (!this.props.isActive) {
      return;
    }

    this.refs.container && (this.refs.container.scrollTop = 0);
  }

  handleScrollToBottom() {
    if (!this.props.isActive) {
      return;
    }

    this.refs.container && (this.refs.container.scrollTop = this.refs.container.scrollHeight);
  }

  closeTab() {
    let tabId = this.props.tabId;

    return __WEBPACK_IMPORTED_MODULE_6__services_EditorService__["a" /* default */].close({ id: tabId });
  }

  getTabContainerClasses({ isActive }) {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'requester-tab-content-container': true,
      'is-hidden': !isActive });

  }

  focus() {
    let $node = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.container);
    $node && $node.focus();
  }

  render() {
    let tabId = this.props.tabId,
    editorStore = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('EditorStore').find(tabId),
    editorModel = editorStore && editorStore.model;

    if (!editorModel) {
      return null;
    }

    let EditorView = editorModel.getView();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__["a" /* default */], { identifier: tabId, isVisible: this.props.isActive },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getTabContainerClasses({ isActive: this.props.isActive }) },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { 'data-tabid': tabId, className: 'requester-tab-content', ref: 'container', tabIndex: '-1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_empty_states_CrashHandler__["a" /* default */], { onClose: this.closeTab },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditorView, {
                id: tabId,
                editor: editorModel }))))));






  }}) || _class;

/***/ })

});