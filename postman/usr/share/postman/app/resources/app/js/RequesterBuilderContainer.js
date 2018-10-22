webpackJsonp([30],{

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Inputs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__ = __webpack_require__(95);








/**
                                                          * @private
                                                          * A Select component that supports input filtering, options.
                                                          * Supports:
                                                          * Standard select features with custom-rendered options.
                                                          * Displays input field to filter out the options.
                                                          * Usage:
                                                          * <InputSelect
                                                          *  placeholder={'Filter Colors'}
                                                          *  defaultIndex={1}
                                                          *  optionCount={10}
                                                          *  optionRenderer={
                                                          *   ({ index, search }) => list[index] //Could be a DOM element
                                                          *  }
                                                          *  closeOnSelect={'false'}
                                                          *  onSelect={() => {}}
                                                          *  />
                                                          */

let InputSelect = class InputSelect extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor(props) {
    super(props);
    this.state = {
      focusedIndex: 0,
      highlight: false,
      isOpen: false,
      inputValue: props.getInputValue(props.defaultIndex),
      selectedIndex: props.defaultIndex };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.focusOption = this.focusOption.bind(this);
    this.focusAdjacentOption = this.focusAdjacentOption.bind(this);
    this.selectFocusedOption = this.selectFocusedOption.bind(this);
    this.handleToggleList = this.handleToggleList.bind(this);
    this.handleCloseListOnEscape = this.handleCloseListOnEscape.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseDownOnList = this.handleMouseDownOnList.bind(this);
  }

  renderOptions() {
    const { optionCount, optionRenderer, isSearchable } = this.props,
    { inputValue, selectedIndex, focusedIndex } = this.state,
    options = [];

    this._visibleIndexes = [];

    for (let i = 0; i < optionCount; i++) {
      const search = !this._toggleList && !this._inputFocus && inputValue;

      if (!search || search && isSearchable(i)) {
        const option = optionRenderer(i, search, focusedIndex);
        if (option) {
          this._visibleIndexes.push(i);
          options.push(
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', {
              className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()({
                'item': true,
                'is-focused': i === focusedIndex,
                'is-selected': i === selectedIndex }),

              key: 'option-' + i,
              ref: i === focusedIndex ? 'focused' : null,
              onMouseDown: e => {
                this.handleMouseDown(e, i);
              },
              onMouseEnter: e => {
                this.handleMouseEnter(e, i);
              },
              onMouseLeave: e => {
                this.handleMouseLeave(e, i);
              } },

            option));

        }
      }
    }
    return options;
  }

  handleMouseDown(event, index) {
    event.preventDefault();
    event.stopPropagation();
    this.selectFocusedOption(index);
  }

  handleMouseEnter(event, index) {
    this.focusOption(index);
  }

  handleMouseLeave() {
    this.focusOption(this.state.selectedIndex);
  }

  handleCancel() {
    this._cancel = true;
    this.focus();
  }

  focus() {
    if (!this.refs.input) {
      return;
    }
    this.refs.input.focus();
  }

  blur() {
    if (!this.refs.input) {
      return;
    }
    this.refs.input.blur();
  }

  setFocusOnToggleButton() {
    if (!this.refs.button) {
      return;
    }
    this.refs.button.focus();
  }

  handleCloseListOnEscape() {
    this.blur();
    this.setState({
      isOpen: false,
      focusedIndex: this.state.selectedIndex });

  }

  handleToggleList() {
    this._toggleList = true;
    this.setState({ isOpen: !this.state.isOpen }, () => {
      if (this.state.isOpen) {
        this.focus();
      }
    });
  }

  // To allow scrollbar usage
  handleMouseDownOnList(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown':{
          e.preventDefault();
          this.focusAdjacentOption('next');
          break;
        }
      case 'ArrowUp':{
          e.preventDefault();
          this.focusAdjacentOption('previous');
          break;
        }
      case 'Enter':{
          e.preventDefault();
          this.selectFocusedOption();
          break;
        }
      case 'Escape':{
          // Important: as it empties out the input field
          e.preventDefault();
          this.handleCloseListOnEscape();
          break;
        }
      default:{
          break;
        }}

  }

  handleFocus() {
    if (this.props.openOnFocus) {
      this._inputFocus = true;
      this.setState({ isOpen: true });
    }
    this.props.onFocus && this.props.onFocus();
  }

  handleBlur() {
    const { selectedIndex } = this.state;
    const { getInputValue } = this.props;

    if (this._toggleList && this.state.isOpen) {
      this._toggleList = false;
      this.focus();
      return;
    }

    if (this.props.closeOnSelect && this._optionSelected) {
      this._optionSelected = false;
      this.props.onBlur && this.props.onBlur();
      return;
    }

    if (this._cancel) {
      this._cancel = false;
      this.focus();
      return;
    }

    this.setState({
      isOpen: !this.props.closeOnBlur,
      inputValue: getInputValue(selectedIndex) });


    this.props.onBlur && this.props.onBlur();
  }

  getNextVisibleIndex(list, index) {
    if (index >= 0 && index + 1 <= list.length - 1) {
      return list[index + 1];
    }
    return list[0];
  }

  getPreviousVisibleIndex(list, index) {
    if (index > 0) {
      return list[index - 1];
    }
    return list[list.length - 1];
  }

  focusOption(index) {
    this.setState({ focusedIndex: index });
  }

  focusAdjacentOption(dir) {
    let focusedIndex = this.state.focusedIndex,
    visibleIndexes = this._visibleIndexes;

    if (dir === 'next' && focusedIndex !== -1) {
      focusedIndex = this.getNextVisibleIndex(visibleIndexes, visibleIndexes.indexOf(focusedIndex));
    } else
    if (dir === 'previous') {
      focusedIndex = this.getPreviousVisibleIndex(visibleIndexes, visibleIndexes.indexOf(focusedIndex));
    }

    this._scrollToFocusedOption = true;
    this.setState({ focusedIndex: focusedIndex });
  }

  selectFocusedOption(index) {
    const { getInputValue, blurOnSelect } = this.props;
    const focusedIndex = index >= 0 ? index : this.state.focusedIndex;

    // If no value selected, then reset
    if (focusedIndex === this.state.selectedIndex) {
      this.setState({ inputValue: getInputValue(focusedIndex) }, () => {
        if (blurOnSelect) {
          this.blur();
        }
      });
      return;
    }

    this._optionSelected = true;

    const inputValue = getInputValue(index);
    if (inputValue) {
      this.setState({
        inputValue: inputValue,
        focusedIndex: focusedIndex,
        selectedIndex: focusedIndex,
        isOpen: !this.props.closeOnSelect },
      () => {
        if (blurOnSelect) {
          this.blur();
        }
      });
    } else
    {
      this.setState({
        focusedIndex: focusedIndex,
        selectedIndex: focusedIndex,
        isOpen: !this.props.closeOnSelect },
      () => {
        if (blurOnSelect) {
          this.blur();
        }
      });
    }

    this.props.onSelect(focusedIndex);
  }

  handleChange(inputValue) {
    this._toggleList = false;
    this._inputFocus = false;
    this.setState({
      inputValue: inputValue,
      isOpen: true });

  }

  componentDidUpdate() {
    const { focused, list } = this.refs;

    // disable scrolling to focused option on mouse events
    if (this._scrollToFocusedOption && focused && list) {

      this._scrollToFocusedOption = false;

      const focusedDOM = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(focused);
      const listDOM = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(list);
      const focusedRect = focusedDOM.getBoundingClientRect();
      const menuRect = listDOM.getBoundingClientRect();
      if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
        listDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - listDOM.offsetHeight;
      }
    }

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.defaultIndex !== nextProps.defaultIndex ||
    nextProps.getInputValue(nextProps.defaultIndex) !== this.state.inputValue) {
      this.setState({
        selectedIndex: nextProps.defaultIndex,
        inputValue: nextProps.getInputValue(nextProps.defaultIndex) });

    }
  }

  highlight() {
    this.setState({ highlight: true }, () => {
      setTimeout(() => {
        this.setState({ highlight: false });
      }, this.props.highlightTimeout);
    });
  }

  getWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_4_classnames___default()({
      [this.props.className]: true,
      'input-select-wrapper': true,
      'highlight': this.state.highlight,
      'is-open': this.state.isOpen });

  }

  render() {
    const {
      placeholder,
      hideSearchGlass,
      hideCancelOnBlur,
      showToggleButton,
      selectAllOnFocus,
      width } =
    this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getWrapperClasses(),
          style: { width: width } },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Inputs__["b" /* Input */], {
          hideCancelOnBlur: hideCancelOnBlur,
          hideSearchGlass: hideSearchGlass,
          inputStyle: 'search',
          placeholder: placeholder || 'Type to filter',
          query: this.state.inputValue,
          ref: 'input',
          selectAllOnFocus: selectAllOnFocus,
          onBlur: this.handleBlur,
          onCancel: this.handleCancel,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown }),

        showToggleButton &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], {
            className: 'dropdown-button',
            ref: 'button',
            onMouseDown: this.handleToggleList },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__["a" /* default */], { className: 'dropdown-caret' })),

        this.state.isOpen &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul', {
            className: 'input-select-list',
            ref: 'list',
            onMouseDown: this.handleMouseDownOnList },

          this.renderOptions())));



  }};


InputSelect.defaultProps = {
  blurOnSelect: true,
  closeOnBlur: true,
  closeOnSelect: true,
  defaultIndex: 0,
  hideCancelOnBlur: false,
  hideSearchGlass: true,
  highlightTimeout: 1000,
  openOnFocus: true };


InputSelect.propTypes = {
  blurOnSelect: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  closeOnBlur: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  closeOnSelect: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  hideCancelOnBlur: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  hideSearchGlass: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  highlightTimeout: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  onBlur: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onFocus: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  openOnFocus: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool };

/***/ }),

/***/ 2972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequesterBuilderContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_draggable__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_EnvironmentSelectorContainer__ = __webpack_require__(2973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_EnvironmentPreviewContainer__ = __webpack_require__(2975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_EnvironmentMenuContainer__ = __webpack_require__(2979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tabs_TabTitles__ = __webpack_require__(2982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_tabs_TabContents__ = __webpack_require__(2986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__ = __webpack_require__(38);
var _class;











let



RequesterBuilderContainer = __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside___default()(_class = __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default()(_class = class RequesterBuilderContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      selectorWidth: pm.settings.getSetting('selectorWidth') || 210,
      tabScrollDirection: 'none' };


    this.handleStartDrag = this.handleStartDrag.bind(this);
    this.handleStopDrag = this.handleStopDrag.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  getKeymapHandlers() {
    return {
      openNewTab: pm.shortcuts.handle('openNewTab'),
      closeCurrentTab: pm.shortcuts.handle('closeCurrentTab'),
      forceCloseCurrentTab: pm.shortcuts.handle('forceCloseCurrentTab'),
      switchToNextTab: pm.shortcuts.handle('switchToNextTab'),
      switchToPreviousTab: pm.shortcuts.handle('switchToPreviousTab'),
      switchToTab1: pm.shortcuts.handle('switchToTab1'),
      switchToTab2: pm.shortcuts.handle('switchToTab2'),
      switchToTab3: pm.shortcuts.handle('switchToTab3'),
      switchToTab4: pm.shortcuts.handle('switchToTab4'),
      switchToTab5: pm.shortcuts.handle('switchToTab5'),
      switchToTab6: pm.shortcuts.handle('switchToTab6'),
      switchToTab7: pm.shortcuts.handle('switchToTab7'),
      switchToTab8: pm.shortcuts.handle('switchToTab8'),
      switchToLastTab: pm.shortcuts.handle('switchToLastTab') };

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



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_tabs_TabContents__["a" /* default */], null))));



  }}) || _class) || _class;

/***/ }),

/***/ 2973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentSelectorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_environments_EnvironmentSelector__ = __webpack_require__(2974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_WorkspaceSessionController__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_pipelines_user_action__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_model_event__ = __webpack_require__(5);
var _class;





let


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

    environments.unshift({
      id: null,
      name: 'No Environment' });


    return environments;
  }

  render() {
    const selectorEnvironmentList = this.getSelectorEnvironmentList(Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').environments),
    selectedEnvironmentIndex = _.findIndex(selectorEnvironmentList, env => {
      return env.id === Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id;
    });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_environments_EnvironmentSelector__["a" /* default */], {
        environmentsList: selectorEnvironmentList,
        ref: 'selector',
        selectedEnvironmentIndex: selectedEnvironmentIndex,
        selectorWidth: this.props.selectorWidth,
        onSelect: this.handleEnvironmentSelect }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_InputSelect__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_SearchHighlighter__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);



let

EnvironmentSelector = class EnvironmentSelector extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleEnvironmentSelect = this.handleEnvironmentSelect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleEnvironmentSelect(list, index) {
    this.props.onSelect && this.props.onSelect(list[index].id);
  }

  highlight() {
    if (!this.refs.inputSelect) {
      return;
    }
    this.refs.inputSelect.highlight();
  }

  getOption(list, index, search) {
    const name = list[index].name;
    if (search) {
      if (!_.includes(name.toLowerCase(), search.toLowerCase())) {
        return null;
      }
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-select-item' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_SearchHighlighter__["a" /* default */], {
            source: name,
            query: search })));



    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-select-item' }, name);
  }

  handleSelect(index) {
    pm.mediator.trigger('focusBuilder');
    return this.handleEnvironmentSelect(this.props.environmentsList, index);
  }

  getSelectWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ 'environment-selector-wrapper': true });
  }

  render() {
    const { environmentsList, selectedEnvironmentIndex, selectorWidth } = this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-selector-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getSelectWrapperClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_InputSelect__["a" /* InputSelect */], {
            hideCancelOnBlur: true,
            selectAllOnFocus: true,
            showToggleButton: true,
            defaultIndex: selectedEnvironmentIndex < 0 ? 0 : selectedEnvironmentIndex,
            width: selectorWidth,
            getInputValue: index => {
              return _.get(environmentsList[index], 'name', '');
            },
            isSearchable: index => {
              return index > 0;
            },
            optionCount: environmentsList.length,
            optionRenderer: (index, search) => {
              return this.getOption(environmentsList, index, search);
            },
            ref: 'inputSelect',
            onSelect: this.handleSelect }))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentPreviewContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_environments_EnvironmentPreview__ = __webpack_require__(2976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Icons_PreviewIcon__ = __webpack_require__(2978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_VariableSessionHelper__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__ = __webpack_require__(29);
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

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_environments_EnvironmentPreview__["a" /* default */], {
          isOpen: this.state.isOpen,
          selectedEnvironmentStore: environment,
          globalsStore: globals,
          onClose: this.handlePreviewClose,
          onHover: this.handleHover,
          onEnvironmentSessionUpdate: this.handleEnvironmentSessionUpdate,
          onGlobalsSessionUpdate: this.handleGlobalsSessionUpdate,
          hoveredKey: this.state.hoveredKey })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentPreview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EnvironmentPreviewList__ = __webpack_require__(2977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_ManageEnvironmentViews__ = __webpack_require__(2551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_VariableSessionHelper__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__variables_VariableAlertWrapper__ = __webpack_require__(2574);
var _class;







let



EnvironmentPreview = __WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside___default()(_class = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class EnvironmentPreview extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
            overriddenKeys: [] }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-preview-divider' }),
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
            envId: 'globals' }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__variables_VariableAlertWrapper__["a" /* default */], { onMessageLinkClick: this.handleClose }))));



  }}) || _class) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentPreviewList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_InlineInput__ = __webpack_require__(1062);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_EditIcon__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_VariableSessionService__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_VariableSessionHelper__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_VariablesConstants__ = __webpack_require__(533);
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
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["q" /* GLOBAL_VARIABLE_DOCS */]);
  }

  handleEnvironmentDocs() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["n" /* ENVIRONMENT_DOCS */]);
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                    onMouseEnter: this.props.onHover.bind(this, item.key),
                    onMouseLeave: this.props.onHover.bind(this, null),
                    className: this.getClasses(item),
                    key: `variable-${index}` },

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
                        size: 'xs' })))));






            }
          }))));





  }}) || _class;


EnvironmentPreviewList.defaultProps = { items: [] };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PreviewIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(51);
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

/***/ 2979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentMenuContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_environments_EnvironmentMenu__ = __webpack_require__(2980);
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

/***/ 2980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_SettingsIcon__ = __webpack_require__(2981);
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

/***/ 2981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SettingsIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(51);
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

/***/ 2982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabTitles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TabTitle__ = __webpack_require__(2983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NewTabAction__ = __webpack_require__(2984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TabActions__ = __webpack_require__(2985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_EditorService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__ = __webpack_require__(38);
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
    let TabUIStore = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('TabUIStore');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tabs-wrapper', onWheel: this.handleScroll },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses(), ref: 'tabs' },

          _.map(TabUIStore.tabHeaders, (tab, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: `${tab.id}/tab`, key: tab.id },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__TabTitle__["a" /* default */], {
                  tab: tab,
                  onReorder: this.handleReorder,
                  isLastVisibleTab: index === _.size(TabUIStore.tabHeaders) - 1 })));



          }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-actions' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: 'addNewTab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__NewTabAction__["a" /* default */], null)),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tabs-options-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: 'tabActions' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__TabActions__["a" /* default */], null)))))));






  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dnd__ = __webpack_require__(1063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_CloseIcon__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_EditorService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Tooltips__ = __webpack_require__(147);
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
    Icon;

    if (!editor) {
      return null;
    }

    Icon = editor.model && editor.model.getIcon();

    return connectDropTarget(connectDragPreview(connectDragSource(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: this.getClasses(),
        'data-tab-id': tab.id,
        onClick: this.handleFocus,
        onDoubleClick: this.handleDoubleClick,
        onMouseUp: this.handleMouseUp,
        onMouseEnter: this.showConflictTooltip,
        onMouseLeave: this.hideConflictTooltip },


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





      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab__icon' },

        Icon && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, { editor: this.props.tab })),


      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab__name' },


        tab.name),


      tabUiStore.canCloseTab(tab.id) &&
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getCloseButtonClasses(),
          onClick: this.handleCloseTab },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_CloseIcon__["a" /* default */], {
          className: 'requester-tab__close-icon',
          size: 'xs' }))))));





  }}) || _class) || _class) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Icons_AddIcon__ = __webpack_require__(2542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_EditorService__ = __webpack_require__(94);


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

/***/ 2985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterTabOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_MoreIcon__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_ShortcutsList__ = __webpack_require__(1064);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_EditorService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__ = __webpack_require__(38);







let

RequesterTabOptions = class RequesterTabOptions extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  handleClick() {
    this.props.onClick && this.props.onClick();
  }

  handleSelect(item) {
    switch (item) {
      case 'duplicate':
        __WEBPACK_IMPORTED_MODULE_6__services_EditorService__["a" /* default */].duplicate();
        break;
      case 'close-active':
        __WEBPACK_IMPORTED_MODULE_6__services_EditorService__["a" /* default */].closeCurrent();
        break;
      case 'force-close-active':
        __WEBPACK_IMPORTED_MODULE_6__services_EditorService__["a" /* default */].closeCurrent({ force: true });
        break;
      case 'close-other':
        __WEBPACK_IMPORTED_MODULE_6__services_EditorService__["a" /* default */].closeAllButCurrent();
        break;
      case 'close-all':
        __WEBPACK_IMPORTED_MODULE_6__services_EditorService__["a" /* default */].closeAll();
        break;
      case 'force-close-all':
        __WEBPACK_IMPORTED_MODULE_6__services_EditorService__["a" /* default */].requestForceCloseAll();
        break;}

  }

  closeDropdown() {
    _.invoke(this.refs, 'dropdown.__wrappedComponent.toggleDropdown', null, false);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["a" /* Dropdown */], {
          ref: 'dropdown',
          className: 'tab-actions-dropdown',
          onSelect: this.handleSelect,
          onToggle: this.props.onToggle },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["b" /* DropdownButton */], {
            dropdownStyle: 'nocaret',
            type: 'custom' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], { className: 'requester-tab-options', onClick: this.handleClick },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_MoreIcon__["a" /* default */], { className: 'requester-tab-options-icon' }))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], { refKey: 'duplicate' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__["a" /* default */], { identifier: 'duplicate' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Duplicate Current Tab'))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider divider--space' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], { refKey: 'close-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__["a" /* default */], { identifier: 'closeCurrentTab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Close Current Tab'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_4__controllers_ShortcutsList__["c" /* getShortcutByName */])('closeCurrentTab')))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], { refKey: 'force-close-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__["a" /* default */], { identifier: 'forceCloseCurrentTab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Force Close Current Tab'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_4__controllers_ShortcutsList__["c" /* getShortcutByName */])('forceCloseCurrentTab')))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], { refKey: 'close-other' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__["a" /* default */], { identifier: 'closeOtherTabs' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Close All but Current Tab'))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], { refKey: 'close-all' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__["a" /* default */], { identifier: 'closeAllTabs' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Close All Tabs'))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], { refKey: 'force-close-all' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__["a" /* default */], { identifier: 'forceCloseAllTabs' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Force Close All Tabs'))))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_XPaths_XPath__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TabContent__ = __webpack_require__(2987);
var _class;



let


TabContents = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class TabContents extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super(...arguments);
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

  getTabs() {
    let tabs = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('TabUIStore').tabContents,
    activeTab = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('TabUIStore').activeTab,
    EditorStore = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('EditorStore');

    if (!EditorStore) {
      return;
    }

    return _.chain(tabs).
    map(tab => {
      if (!EditorStore.find(tab)) {
        return;
      }

      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_XPaths_XPath__["a" /* default */], {
            key: tab,
            identifier: tab,
            isVisible: tab === activeTab },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__TabContent__["a" /* default */], { tabId: tab, isActive: activeTab === tab })));


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

/***/ 2987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_empty_states_CrashHandler__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_EditorService__ = __webpack_require__(94);
var _class;





let


TabContent = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class TabContent extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor() {
    super(...arguments);

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

    return __WEBPACK_IMPORTED_MODULE_5__services_EditorService__["a" /* default */].close({ id: tabId });
  }

  getTabContainerClasses({ isActive }) {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'requester-tab-content-container': true,
      'is-hidden': !isActive });

  }

  render() {
    let tabId = this.props.tabId,
    editorStore = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('EditorStore').find(tabId),
    editorModel = editorStore && editorStore.model;

    if (!editorModel) {
      return null;
    }

    let EditorView = editorModel.getView();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getTabContainerClasses({ isActive: this.props.isActive }) },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-content', ref: 'container', tabIndex: '-1' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_empty_states_CrashHandler__["a" /* default */], { onClose: this.closeTab },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditorView, {
              id: tabId,
              editor: editorModel })))));





  }}) || _class;

/***/ })

});