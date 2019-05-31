webpackJsonp([31],{

/***/ 3705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequesterBuilderContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postman_react_draggable__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postman_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__postman_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_EnvironmentSelectorContainer__ = __webpack_require__(3706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_EnvironmentPreviewContainer__ = __webpack_require__(3708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_EnvironmentMenuContainer__ = __webpack_require__(3712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tabs_TabTitles__ = __webpack_require__(3715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_tabs_TabContents__ = __webpack_require__(3719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_TabShortcutsService__ = __webpack_require__(3462);
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

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__postman_react_draggable__["DraggableCore"], {
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

/***/ 3706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentSelectorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_environments_EnvironmentSelector__ = __webpack_require__(3707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_WorkspaceSessionController__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_pipelines_user_action__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_model_event__ = __webpack_require__(2);
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

/***/ 3707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_InputSelectV2__ = __webpack_require__(1527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_SearchHighlighter__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_XPaths_XPath__ = __webpack_require__(29);




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

/***/ 3708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentPreviewContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_environments_EnvironmentPreview__ = __webpack_require__(3709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Icons_PreviewIcon__ = __webpack_require__(3711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_VariableSessionHelper__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__ = __webpack_require__(29);
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
    let envSessionVariables = Object(__WEBPACK_IMPORTED_MODULE_8__utils_VariableSessionHelper__["e" /* unzipVariables */])(zippedVariables).sessionVariables,
    envSessionUpdateEvent = Object(__WEBPACK_IMPORTED_MODULE_9__modules_model_event__["a" /* createEvent */])('update', 'variablesession', {
      id: Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').session.id,
      model: 'environment',
      values: envSessionVariables });


    Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])(envSessionUpdateEvent).
    then(() => {
      __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__["a" /* default */].addEvent('session', 'user_edit', 'environment');
    }).
    catch(err => {
      pm.logger.error('Error while updating session', err);
    });
  }

  handleGlobalsSessionUpdate(zippedVariables) {
    let globalsSessionVariables = Object(__WEBPACK_IMPORTED_MODULE_8__utils_VariableSessionHelper__["e" /* unzipVariables */])(zippedVariables).sessionVariables,
    globalsSessionUpdateEvent = Object(__WEBPACK_IMPORTED_MODULE_9__modules_model_event__["a" /* createEvent */])('update', 'variablesession', {
      id: Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore').session.id,
      model: 'globals',
      values: globalsSessionVariables });


    Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])(globalsSessionUpdateEvent).
    then(() => {
      __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__["a" /* default */].addEvent('session', 'user_edit', 'globals');
    }).
    catch(err => {
      pm.logger.error('Error while updating session', err);
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

/***/ 3709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentPreview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EnvironmentPreviewList__ = __webpack_require__(3710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_ManageEnvironmentViews__ = __webpack_require__(3413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_VariableSessionHelper__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__variables_VariableAlertWrapper__ = __webpack_require__(3427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__ = __webpack_require__(29);
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
    let environmentValues = Object(__WEBPACK_IMPORTED_MODULE_6__utils_VariableSessionHelper__["d" /* sanitizeZippedValues */])(this.props.selectedEnvironmentStore.enabledValues),
    globalValues = Object(__WEBPACK_IMPORTED_MODULE_6__utils_VariableSessionHelper__["d" /* sanitizeZippedValues */])(this.props.globalsStore.enabledValues);

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

/***/ 3710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentPreviewList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_InlineInput__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_EditIcon__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_VariableSessionService__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_VariableSessionHelper__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_VariablesConstants__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__external_navigation_ExternalNavigationService__ = __webpack_require__(72);
var _class;













const truncateOptions = { length: __WEBPACK_IMPORTED_MODULE_10__constants_VariablesConstants__["a" /* VARIABLE_VALUE_MAX_LENGTH */], separator: ' ' };let


EnvironmentPreviewList = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class EnvironmentPreviewList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      editableVariableIndex: null,
      session: null, // last fetched session values from db without truncation
      items: [] // sanitized zipped values without any truncation
    };
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

      let items = Object(__WEBPACK_IMPORTED_MODULE_9__utils_VariableSessionHelper__["d" /* sanitizeZippedValues */])(Object(__WEBPACK_IMPORTED_MODULE_9__utils_VariableSessionHelper__["h" /* zipVariables */])(this.props.items, session.values));

      this.setState({ editableVariableIndex: _.toString(index), items, session }, () => {
        let input = this.refs[this.getVariableRef(index)];
        input && input.startEditing();
      });
    }).
    catch(err => {
      pm.logger.error('Failed to get session in environment preview', err);
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

  handleVariableSubmit(variableIndex, newValue) {
    let zippedVariable = this.props.items[variableIndex],
    sessionIndex = zippedVariable.sessionIndex,
    updatedItems = _.clone(this.state.session.values),
    updatedItem = sessionIndex !== -1 && updatedItems[sessionIndex],
    indexInCompleteList = updatedItem && _.findIndex(updatedItems, item => {
      return item === updatedItem;
    });


    // If session values does not exist, copy it from the variable value
    if (sessionIndex === -1) {
      updatedItems.push({
        key: zippedVariable.key,
        value: newValue,
        enabled: true });

    }

    // Otherwise just update the session value
    else {
        updatedItems[indexInCompleteList].sessionValue = newValue;
      }

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
    Object(__WEBPACK_IMPORTED_MODULE_12__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["A" /* GLOBAL_VARIABLE_DOCS */]);
  }

  handleEnvironmentDocs() {
    Object(__WEBPACK_IMPORTED_MODULE_12__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["x" /* ENVIRONMENT_DOCS */]);
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

/***/ 3711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PreviewIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentMenuContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_environments_EnvironmentMenu__ = __webpack_require__(3713);
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

/***/ 3713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_SettingsIcon__ = __webpack_require__(3714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(10);
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

/***/ 3714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SettingsIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabTitles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TabTitle__ = __webpack_require__(3716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NewTabAction__ = __webpack_require__(3717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TabActions__ = __webpack_require__(3718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_EditorService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__ = __webpack_require__(29);
var _class;







let


TabTitles = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class TabTitles extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
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

    __WEBPACK_IMPORTED_MODULE_7__services_EditorService__["a" /* default */].moveEditor(sourceId, destination);
  }

  handleScroll(e) {
    let node = this.refs.tabs;
    e.deltaY > 0 && (node.scrollLeft += e.deltaY);
  }


  render() {
    let TabUIStore = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('TabUIStore'),
    activeTab = TabUIStore.activeTab;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tabs-wrapper', onWheel: this.handleScroll },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses(), ref: 'tabs' },

          _.map(TabUIStore.tabHeaders, (tab, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: `${tab.id}/tab`, key: tab.id },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__TabTitle__["a" /* default */], {
                  tab: tab,
                  onReorder: this.handleReorder,
                  isLastVisibleTab: index === _.size(TabUIStore.tabHeaders) - 1,
                  isActive: activeTab === tab.id })));



          })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'addNewTab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__NewTabAction__["a" /* default */], null)),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tabs-options-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'tabActions' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__TabActions__["a" /* default */], null))))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dnd__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_CloseIcon__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_EditorService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Tooltips__ = __webpack_require__(152);
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
    // Scroll active tab into view if not in view and not previously active
    if (this.props.isActive && (!prevProps.isActive || this.props.tab.resourceId !== prevProps.tab.resourceId)) {
      this.scrollActiveTabInView();
    }
  }

  scrollActiveTabInView() {
    this.refs.tabTitle && this.refs.tabTitle.scrollIntoViewIfNeeded(true);
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

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getCloseButtonClasses(),
            onClick: this.handleCloseTab },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_CloseIcon__["a" /* default */], {
            className: 'requester-tab__close-icon',
            size: 'xs' })))))));





  }}) || _class) || _class) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Icons_AddIcon__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_EditorService__ = __webpack_require__(76);


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

/***/ 3718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterTabOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_MoreIcon__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_ShortcutsList__ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_EditorService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_get_store__ = __webpack_require__(6);
var _class;










const DISABLED_ACTIONS_TEXT = 'Open a new tab to perform this action';let


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
    subMenuForRecentlyClosed = !_.isEmpty(recentlyClosedTabs) ? recentlyClosedTabs : emptyStateForRecentlyClosed,
    visibleEditors = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').visibleEditors,
    areMenuActionsDisabled = _.isEmpty(visibleEditors);

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



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              refKey: 'duplicate',
              disabled: areMenuActionsDisabled,
              disabledText: DISABLED_ACTIONS_TEXT },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'duplicate' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Duplicate Current Tab'))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider divider--space' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              refKey: 'close-active',
              disabled: areMenuActionsDisabled,
              disabledText: DISABLED_ACTIONS_TEXT },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'closeCurrentTab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Close Current Tab'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_5__controllers_ShortcutsList__["c" /* getShortcutByName */])('closeCurrentTab')))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              refKey: 'force-close-active',
              disabled: areMenuActionsDisabled,
              disabledText: DISABLED_ACTIONS_TEXT },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'forceCloseCurrentTab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Force Close Current Tab'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_5__controllers_ShortcutsList__["c" /* getShortcutByName */])('forceCloseCurrentTab')))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              refKey: 'close-other',
              disabled: areMenuActionsDisabled,
              disabledText: DISABLED_ACTIONS_TEXT },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'closeOtherTabs' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Close All but Current Tab'))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              refKey: 'close-all',
              disabled: areMenuActionsDisabled,
              disabledText: DISABLED_ACTIONS_TEXT },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'closeAllTabs' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Close All Tabs'))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              refKey: 'force-close-all',
              disabled: areMenuActionsDisabled,
              disabledText: DISABLED_ACTIONS_TEXT },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_XPaths_XPath__["a" /* default */], { identifier: 'forceCloseAllTabs' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Force Close All Tabs'))))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TabContent__ = __webpack_require__(3720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TabContentEmptyShell__ = __webpack_require__(3721);
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

    let tabsToBeRendered = this.getTabs();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-contents' },
        _.isEmpty(tabsToBeRendered) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__TabContentEmptyShell__["a" /* default */], null) : tabsToBeRendered));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_empty_states_CrashHandler__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_EditorService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__ = __webpack_require__(29);
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

/***/ }),

/***/ 3721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContentEmptyShell; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

TabContentEmptyShell = class TabContentEmptyShell extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getHelperText() {
    let platform = navigator.platform,
    commandKey = platform.toLowerCase().includes('mac') ? 'Cmd' : 'Ctrl',
    helperText = `Hit ${commandKey} + T to open a new request or select a new request from the sidebar`;

    return helperText;
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'tab-content-shell-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'tab-content-shell-thumbnail' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '200', height: '200', viewBox: '0 0 160 160', xmlns: 'http://www.w3.org/2000/svg' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'tabContentEmptyShell', d: 'M44.3876 8.36374C58.5563 1.32009 74.4955 -1.36374 90.1896 0.651652C111.232 3.3539 130.34 14.304 143.31 31.0934C156.279 47.8829 162.049 69.1365 159.349 90.1796C157.336 105.874 150.714 120.619 140.32 132.549C129.927 144.48 116.229 153.06 100.958 157.206C85.6882 161.351 69.5316 160.875 54.5319 155.838C39.5323 150.801 26.3632 141.428 16.6901 128.907C7.01705 116.385 1.27449 101.276 0.188639 85.49C-0.89721 69.7044 2.72243 53.9513 10.5898 40.2229C18.4572 26.4945 30.2189 15.4074 44.3876 8.36374ZM112.621 31.2721C114.229 30.4997 115.99 30.0978 117.774 30.096C120.505 30.0873 123.157 31.0164 125.286 32.728L114.686 43.32C114.592 43.4129 114.519 43.5232 114.468 43.6447C114.418 43.7662 114.392 43.8965 114.392 44.028C114.392 44.1595 114.418 44.2898 114.468 44.4113C114.519 44.5328 114.592 44.6431 114.686 44.736L122.798 52.848C121.179 53.5975 119.413 53.9744 117.629 53.951C115.845 53.9275 114.09 53.5043 112.491 52.7125C110.893 51.9208 109.492 50.7805 108.393 49.3759C107.293 47.9712 106.523 46.3378 106.138 44.5959C105.754 42.8541 105.765 41.0482 106.17 39.3111C106.576 37.5741 107.366 35.9501 108.483 34.5588C109.599 33.1676 111.013 32.0444 112.621 31.2721ZM57.985 85.1992C57.9208 85.17 57.8687 85.1194 57.8377 85.056C57.8035 84.9914 57.7943 84.9165 57.8121 84.8456C57.8298 84.7747 57.8731 84.7129 57.9337 84.672L65.6057 77L70.9897 82.456L58.1897 85.216C58.1216 85.2343 58.0492 85.2284 57.985 85.1992ZM106.862 52.368H106.686C106.479 52.3664 106.273 52.3852 106.07 52.424H105.998C105.775 52.4721 105.555 52.5363 105.342 52.616L105.174 52.696C105.013 52.7632 104.857 52.8435 104.71 52.936L104.534 53.048C104.34 53.1817 104.158 53.3315 103.99 53.496L74.5256 82.968L78.1736 86.616L109.374 59.232C109.55 59.0774 109.711 58.9059 109.854 58.72L109.99 58.544C110.096 58.3878 110.192 58.2248 110.278 58.056C110.326 57.96 110.366 57.864 110.406 57.768C110.459 57.6404 110.505 57.5095 110.542 57.376C110.542 57.3149 110.564 57.2538 110.587 57.1927C110.6 57.1578 110.613 57.1229 110.622 57.088C110.661 56.8899 110.688 56.6895 110.702 56.488V55.792C110.702 55.6481 110.702 55.6 110.662 55.504C110.514 54.749 110.145 54.0549 109.603 53.5095C109.06 52.9641 108.368 52.5919 107.614 52.44H107.462C107.264 52.4019 107.063 52.3779 106.862 52.368ZM73.0297 81.6L66.9817 75.584C95.2056 47.448 100.902 46.4 106.126 50.4C104.788 50.5321 103.535 51.1162 102.574 52.056L73.0297 81.6ZM111.037 60.384L110.677 60.736L79.4775 88.112L84.7815 93.408C97.9335 80.968 109.605 69.12 111.037 60.384ZM33.309 124.664C33.2632 124.627 33.2299 124.577 33.2137 124.52C33.1929 124.466 33.1878 124.407 33.1991 124.351C33.2105 124.294 33.2377 124.242 33.2777 124.2L39.4457 118.04L47.0697 125.664L33.4697 124.728C33.4109 124.724 33.3548 124.702 33.309 124.664ZM40.8696 116.624L48.9096 124.664C49.0051 124.766 49.1327 124.832 49.2711 124.851C49.4095 124.87 49.5503 124.841 49.6696 124.768C49.7942 124.706 49.8935 124.603 49.9504 124.476C50.0073 124.349 50.0184 124.206 49.9816 124.072L48.6296 118.296C48.5421 117.922 48.5818 117.529 48.7427 117.18C48.9035 116.83 49.1762 116.545 49.5176 116.368C63.6136 109.304 74.9816 102.032 83.3255 94.768L77.7255 89.168L65.7256 91.752L40.8696 116.624ZM72.9975 84.4641L76.0055 87.4721L69.0695 88.9761C69.0248 88.99 68.9766 88.9872 68.9338 88.968C68.8911 88.9489 68.8569 88.9147 68.8375 88.8721C68.8076 88.8362 68.7912 88.7909 68.7912 88.7441C68.7912 88.6973 68.8076 88.652 68.8375 88.6161L72.9975 84.4641ZM116.805 44L126.741 34.104C128.729 36.3914 129.778 39.3461 129.677 42.3749C129.576 45.4036 128.333 48.282 126.197 50.432C125.707 50.9336 125.171 51.3888 124.597 51.792L116.805 44ZM126.824 40.2129C126.913 40.3105 126.98 40.4262 127.022 40.5521C127.416 41.3514 127.571 42.2475 127.469 43.133C127.367 44.0184 127.012 44.8556 126.446 45.5441C126.358 45.648 126.249 45.7319 126.126 45.7899C126.003 45.8478 125.869 45.8786 125.734 45.8801C125.558 45.8796 125.385 45.8291 125.237 45.7345C125.089 45.6399 124.97 45.5051 124.896 45.3457C124.821 45.1864 124.793 45.0092 124.816 44.8347C124.838 44.6602 124.909 44.4956 125.022 44.3601C125.363 43.9453 125.577 43.4407 125.638 42.9069C125.699 42.3732 125.605 41.8332 125.366 41.3521C125.292 41.2417 125.244 41.1169 125.223 40.9862C125.202 40.8554 125.209 40.7217 125.244 40.594C125.279 40.4663 125.341 40.3476 125.426 40.2458C125.511 40.1441 125.616 40.0616 125.736 40.004C125.855 39.9464 125.985 39.915 126.117 39.9119C126.25 39.9088 126.381 39.934 126.503 39.9859C126.625 40.0378 126.734 40.1152 126.824 40.2129Z' })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fillRule: 'evenodd', xlinkHref: '#tabContentEmptyShell' }))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'tab-content-shell-container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'tab-content-shell-content' },
            this.getHelperText()))));




  }};

/***/ })

});