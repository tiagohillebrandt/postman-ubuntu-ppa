webpackJsonp([27],{

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuzzySearchInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fuzzysearch__ = __webpack_require__(1608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fuzzysearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fuzzysearch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Inputs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);



let

FuzzySearchInput = class FuzzySearchInput extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.focus = this.focus.bind(this);
    this.handleFuzzySearch = this.handleFuzzySearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
  }

  componentDidMount() {
    this.focus();
  }

  focus() {
    _.invoke(this.refs, 'filter.focus');
  }

  checkFuzzy(searchQuery, item) {
    return __WEBPACK_IMPORTED_MODULE_1_fuzzysearch___default()(_.toLower(searchQuery), _.toLower(item));
  }

  handleFuzzySearch(searchQuery) {
    if (!searchQuery) {
      this.handleClearSearch();
      return;
    }

    let searchResults = _.filter(this.props.items, item => {
      return this.props.searchFields ?
      _.some(this.props.searchFields, searchField => {
        return this.checkFuzzy(searchQuery, _.get(item, searchField));
      }) :
      this.checkFuzzy(searchQuery, item);
    });

    this.props.onChange(searchQuery, searchResults);
  }

  handleClearSearch() {
    this.props.onChange('', []);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Inputs__["b" /* Input */], {
        ref: 'filter',
        inputStyle: 'search',
        placeholder: this.props.placeholder,
        onChange: this.handleFuzzySearch,
        onCancel: this.handleClearSearch,
        onClick: this.props.onClick,
        query: this.props.searchQuery }));


  }};


FuzzySearchInput.propTypes = {
  onChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired,
  searchQuery: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
  placeholder: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  searchFields: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string),
  items: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any),
  onClick: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func };


FuzzySearchInput.defaultProps = {
  placeholder: '' };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FolderIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(18);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '12', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'folder', d: 'M.8 2h4.8l1.6 1.5h8a.8.8 0 0 1 .8.8v8.9a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1-.8-.8V2.8A.8.8 0 0 1 .8 2z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#folder' }));



function FolderIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DownloadIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(18);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '13', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'download', d: 'M11 5V0H6v5H2l6.5 6.735L15 5h-4zm-9 9v2h13v-2H2z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#download' }));



function DownloadIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(1628)();
}


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 1541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableTooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons_UpSolidIcon__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons_DownSolidIcon__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
var _class;




let

ExpandableTooltipJSONItemBody = class ExpandableTooltipJSONItemBody extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  handleBodyClick(e) {
    e && e.stopPropagation();
    e && e.preventDefault();
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'expandable-tooltip__item__body expandable-tooltip__item__body--json',
          onClick: this.handleBodyClick },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'expandable-tooltip__item__body__key' },
          this.props.kvKey),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'expandable-tooltip__item__body__value' },
          this.props.kvValue)));



  }};let


ExpandableTooltipJSONItem = class ExpandableTooltipJSONItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { isOpen: Boolean(props.isOpen) };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'expandable-tooltip__item': true,
      'is-open': this.state.isOpen });

  }

  toggleOpen(e) {
    this.handleBodyClick(e);
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleBodyClick(e) {
    e && e.stopPropagation();
    e && e.preventDefault();
  }

  render() {
    let body = this.props.body,
    sortedBody = _.sortBy(_.keys(body), key => {
      return key.toLowerCase();
    });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getClasses(),
          onClick: this.handleBodyClick },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'expandable-tooltip__item__header',
            onClick: this.toggleOpen },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'expandable-tooltip__item__title' },
            this.props.title,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'expandable-tooltip__item__length' },
              `(${sortedBody.length})`)),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'expandable-tooltip__item__expand' },
            this.state.isOpen ?
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons_UpSolidIcon__["a" /* default */], { className: 'expandable-tooltip__item__expand-icon' }) :
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons_DownSolidIcon__["a" /* default */], { className: 'expandable-tooltip__item__expand-icon' }))),




        this.state.isOpen && _.map(sortedBody, key => {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ExpandableTooltipJSONItemBody, {
            key: key,
            kvKey: key,
            kvValue: body[key] });

        }),


        this.state.isOpen && _.isEmpty(sortedBody) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'expandable-tooltip__item__body expandable-tooltip__item__body--string' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'expandable-tooltip__item__body__unavailable' }, 'Data unavailable (Only data about the top 10 historical runs is stored)'))));






  }};let


ExpandableTooltipStringItem = class ExpandableTooltipStringItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { isOpen: Boolean(props.isOpen) };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'expandable-tooltip__item': true,
      'is-open': this.state.isOpen });

  }

  toggleOpen(e) {
    e.stopPropagation();
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleBodyClick(e) {
    e && e.stopPropagation();
    e && e.preventDefault();
  }

  render() {
    let item = this.props.item;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'expandable-tooltip__item__header',
            onClick: this.toggleOpen },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'expandable-tooltip__item__title' },
            this.props.title),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'expandable-tooltip__item__expand' },
            this.state.isOpen ?
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons_UpSolidIcon__["a" /* default */], { className: 'expandable-tooltip__item__expand-icon' }) :
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons_DownSolidIcon__["a" /* default */], { className: 'expandable-tooltip__item__expand-icon' }))),




        this.state.isOpen &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'expandable-tooltip__item__body expandable-tooltip__item__body--string',
            onClick: this.handleBodyClick },


          this.props.body ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('pre', null, this.props.body) :
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'expandable-tooltip__item__body__unavailable' },
            'Data unavailable (Only data about the top 10 historical runs is stored)'))));






  }};let



ExpandableTooltip = __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default()(_class = class ExpandableTooltip extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleClickOutside = this.props.onClose.bind(this);
  }

  componentWillUpdate() {
    this.position = this.props.position();
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'expandable-tooltip': true,
      'bottom': this.position === 'bottom',
      'top': this.position === 'top' });

  }

  getBodyClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'expandable-tooltip__body': true,
      'bottom': this.position === 'bottom',
      'top': this.position === 'top' });

  }

  handleScroll(e) {
    e && e.stopPropagation();
    e && e.preventDefault();
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getBodyClasses(), onScroll: this.handleScroll },

          _.map(this.props.data, (datum, index) => {
            if (_.isString(datum.body)) {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ExpandableTooltipStringItem, {
                  key: index,
                  title: datum.title,
                  body: datum.body }));


            } else
            if (_.isObject(datum.body)) {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ExpandableTooltipJSONItem, {
                  key: index,
                  isOpen: !index,
                  title: datum.title,
                  body: datum.body }));


            }
          }))));




  }}) || _class;


ExpandableTooltip.propTypes = { position: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func.isRequired };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tooltips__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons_FolderIcon__ = __webpack_require__(1017);



let

FolderButton = class FolderButton extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { isTooltipVisible: false };

    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  showTooltip(isVisible = this.state.isTooltipVisible) {
    this.setState({ isTooltipVisible: true });
  }

  hideTooltip(isVisible) {
    this.setState({ isTooltipVisible: false });
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'folder-button' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'folder-button__icon',
            ref: 'tooltipTarget',
            onMouseOver: this.showTooltip,
            onMouseOut: this.hideTooltip },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons_FolderIcon__["a" /* default */], this.props)),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Tooltips__["a" /* Tooltip */], {
            show: this.state.isTooltipVisible && !this.props.disabled,
            target: this.refs.tooltipTarget,
            placement: this.props.placement,
            immediate: true },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Tooltips__["b" /* TooltipBody */], null,
            this.props.tooltip))));




  }};


FolderButton.propTypes = { tooltip: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node };

FolderButton.defaultProps = {
  tooltip: 'Folder',
  placement: 'right',
  disabled: false };

/***/ }),

/***/ 1543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadialProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _class;


let


RadialProgress = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RadialProgress extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    let progress = parseInt(this.props.progress);

    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'radial-progress': true,
      'is-running': progress < 100,
      'is-finished': progress >= 100,
      [this.props.className]: true });

  }

  getMeasures() {
    let radius = this.props.radius,
    borderWidth = this.props.borderWidth,
    progress = this.props.progress,
    circumference = 2 * Math.PI * radius;

    return {
      svgWidth: 2 * (radius + borderWidth),
      svgHeight: 2 * (radius + borderWidth),
      cx: radius + borderWidth,
      cy: radius + borderWidth,
      radius: radius,
      dashArray: circumference,
      progress: (100 - progress) / 100 * circumference };

  }

  render() {
    let measures = this.getMeasures(),
    style = { strokeDashoffset: measures.progress };
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses(), 'data-progress': this.props.progress + ' %' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { className: 'progress', width: measures.svgWidth, height: measures.svgHeight },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', {
            className: 'radial-progress__background',
            cx: measures.cx,
            cy: measures.cy, r: measures.radius,
            fill: 'transparent' }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', {
            className: 'radial-progress__progress',
            cx: measures.cx,
            cy: measures.cy, r: measures.radius,
            fill: 'transparent',
            strokeDasharray: measures.dashArray,
            style: style }))));




  }}) || _class;


RadialProgress.propTypes = {
  radius: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,
  borderWidth: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number };


RadialProgress.defaultProps = {
  radius: 50,
  borderWidth: 3 };

/***/ }),

/***/ 1544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_date_helper__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_components_base_Icons_RightSolidIcon__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_components_base_RadialProgress__ = __webpack_require__(1543);
var _class;






const scale = (num, outMax) => num * outMax / 100;let


RunnerResultsHeader = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["b" /* observer */])(_class = class RunnerResultsHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleOpenSummary = this.handleOpenSummary.bind(this);
  }

  getProgress(run, done) {
    const requestCount = _.size(_.get(run, 'context.requestSelection'), []),
    iterationCount = _.get(run, 'context.iterations', 1),
    runFinished = _.get(run, 'status', 'finished') === 'finished';

    if (requestCount === 0) {
      return 0;
    }

    let total = requestCount * iterationCount;

    if (done > total) {
      total += done - total + 1;
    }

    return runFinished ? 100 : Math.floor(scale(Math.min(done / total * 100, 100), 99));
  }

  getProgressText(value) {
    if (value < 1000) {
      return value;
    }

    return `${(value / 1000).toPrecision(3)}K`;
  }

  handleOpenSummary() {
    this.props.onOpenSummary && this.props.onOpenSummary();
  }

  render() {
    const { run, itemCount } = this.props.store,
    totalIterations = _.get(run, 'context.iterations');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header' },

        _.includes(['initialized', 'started', 'paused'], run.status) &&

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_RadialProgress__["a" /* default */], {
          borderWidth: 3,
          className: 'runner-results__header__progress',
          progress: this.getProgress(run, itemCount),
          radius: 30 }),





        run.status === 'finished' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header__passed-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header__passed' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header__passed-count' },
                run.meta && this.getProgressText(run.meta.totalTestCount - run.meta.failedTestCount)), 'PASSED')),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header__failed-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header__failed' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header__failed-count' },
                this.getProgressText(run.meta.failedTestCount)), 'FAILED'))),








        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta__name-iter' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta__name' },
              run.name),



            run.status === 'started' &&

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta__iterations' }, 'Running',

              ' ',

              totalIterations + (totalIterations === '1' ? ' iteration' : ' iterations'),

              ' ', '...'),





            run.status === 'paused' &&

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta__iterations' }, 'Paused'),






            run.status === 'finished' &&

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta__iterations' },
              __WEBPACK_IMPORTED_MODULE_1__postman_date_helper___default.a.getFormattedTime(run.createdAt))),





          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta__environment' }, _.get(run, 'meta.environmentName') || 'No Environment')),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__actions' },

          run.status === 'finished' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null,

            !this.props.hideSummary &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__["a" /* Button */], {
                className: 'runner-results__summary-link',
                size: 'large',
                type: 'primary',
                onClick: this.handleOpenSummary }, 'Run Summary',


              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Icons_RightSolidIcon__["a" /* default */], { className: 'runner-results__forward-icon', style: 'primary' })),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__["a" /* Button */], {
                className: 'runner-results__action--export',
                type: 'secondary',
                onClick: this.props.onExport.bind(this, run.id) }, 'Export Results'),





            !this.props.hideSummary &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__["a" /* Button */], {
                className: 'runner-results__action--retry',
                type: 'secondary',
                onClick: this.props.onRunAction.bind(this, 'retry') }, 'Retry')),










          run.status !== 'finished' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-results__action--abort',
              type: 'secondary',
              onClick: this.props.onRunAction.bind(this, 'stop'),
              disabled: run.pendingStatus }, 'Stop Run'),







          run.status !== 'finished' && (
          run.status === 'paused' ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-results__action--resume',
              type: 'secondary',
              onClick: this.props.onRunAction.bind(this, 'resume') }, 'Resume') :




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-results__action--pause',
              type: 'secondary',
              onClick: this.props.onRunAction.bind(this, 'pause'),
              disabled: run.pendingStatus }, 'Pause')),







          run.status === 'finished' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-results__action--new',
              type: 'secondary',
              onClick: this.props.onNewRun.bind(this) }, 'New'))));








  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsSidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

let

RunnerResultsSidebar = class RunnerResultsSidebar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  onFilterChange(value) {
    this.props.store.changeFilter(value);
  }

  getTabClasses(tab, filter) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-results__sidebar__all': tab === 'all',
      'runner-results__sidebar__passed': tab === 'pass',
      'runner-results__sidebar__failed': tab === 'fail',
      'is-selected': filter === tab });

  }

  render() {
    const { status, filter } = this.props.store;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__sidebar' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getTabClasses('all'),
            onClick: this.onFilterChange.bind(this, 'all') },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'passed' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'failed' })),



        status !== 'started' &&

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getTabClasses('pass', filter),
            onClick: this.onFilterChange.bind(this, 'pass') },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'passed' })),




        status !== 'started' &&

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getTabClasses('fail', filter),
            onClick: this.onFilterChange.bind(this, 'fail') },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'failed' }))));





  }};

/***/ }),

/***/ 1546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryTimeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RunnerSummaryTimelineKeyframe__ = __webpack_require__(3542);

let


RunnerSummaryTimeline = class RunnerSummaryTimeline extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this._keyframe = this._keyframe.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.scrollLeft !== nextProps.scrollLeft) {
      this.refs.timeline.scrollLeft = nextProps.scrollLeft;
    }
  }


  _keyframe(state, index) {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__RunnerSummaryTimelineKeyframe__["a" /* default */], {
        active: this.props.active,
        key: index,
        type: this.props.type,
        hoveredIteration: this.props.hoveredIteration,
        state: state,
        iteration: index,
        onHover: this.props.onHover }));


  }

  render() {
    const { states } = this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__body__timeline' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'pm-row', ref: 'timeline', onScroll: this.props.onScroll },

          _.map(states, this._keyframe))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TeamIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(18);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '13', viewBox: '0 0 16 13' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'team', d: 'M5.077 6.867c-1.378 0-2.496-1.09-2.496-2.433C2.581 3.09 3.7 2 5.077 2c1.379 0 2.496 1.09 2.496 2.434S6.456 6.867 5.077 6.867zm-1.146 7.66v.437H0v-1.295c.003-2.732 2.275-4.945 5.077-4.945.438-.001.873.053 1.296.16-1.712 1.311-2.442 3.355-2.442 5.643zm6.992-5.772c2.802 0 5.074 2.213 5.077 4.945V15H5.867v-1.3c.003-2.724 2.262-4.934 5.056-4.945zm0-1.851c-1.379 0-2.496-1.09-2.496-2.434s1.117-2.434 2.496-2.434c1.378 0 2.496 1.09 2.496 2.434S12.3 6.904 10.923 6.904z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#A9A9A9', fillRule: 'evenodd', transform: 'translate(0 -2)', xlinkHref: '#team' }));



function TeamIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 1551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_CollectionStore__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_TeamIcon__ = __webpack_require__(1550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_LockedIcon__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx_react__ = __webpack_require__(7);
var _class;






let

CollectionMetaIcons = Object(__WEBPACK_IMPORTED_MODULE_6_mobx_react__["b" /* observer */])(_class = class CollectionMetaIcons extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const isCollectionEditable = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["getStore"])('PermissionStore').can('edit', 'collection', this.props.collection.id);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-meta-icons' },
        this.props.collection.isShared && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_TeamIcon__["a" /* default */], { className: 'collection-meta-icon', size: 'xs', title: 'Shared with team' }),
        !isCollectionEditable && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_LockedIcon__["a" /* default */], { className: 'collection-meta-icon', size: 'xs', title: 'Read only' })));


  }}) || _class;


CollectionMetaIcons.propTypes = {
  collection: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([
  __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_2__stores_CollectionStore__["a" /* CollectionItemStore */]),
  __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]) };



/* harmony default export */ __webpack_exports__["a"] = (CollectionMetaIcons);

/***/ }),

/***/ 1557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _class;



const TOKEN_100_PERCENTAGE = '100%',
TOKEN_PERCENTAGE = '%';let


ProgressBar = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class ProgressBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  // taking default as indeterminate progress bar
  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()(this.props.type, this.props.className);
  }

  // taking default as indeterminate progress bar
  getProgress() {
    if (this.props.type === 'determinate') {
      let progressWidth = this.props.progress || 0;
      if (progressWidth <= 100) {
        return { width: progressWidth + TOKEN_PERCENTAGE };
      }
    }
    return { width: TOKEN_100_PERCENTAGE };
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'progress-bar' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses(), style: this.getProgress() })));


  }}) || _class;

ProgressBar.defaultProps = { type: 'indeterminate' };

/***/ }),

/***/ 1558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);




const Tag = props => {
  const { type, tagName, className } = props,
  classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(
  'tag',
  `tag-${type}`,
  className);


  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes, title: tagName },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, tagName)));


};

Tag.propTypes = {
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['info', 'success', 'warn', 'error']),
  tagName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string };


Tag.defaultProps = {
  type: 'info',
  className: '' };


/* harmony default export */ __webpack_exports__["a"] = (Tag);

/***/ }),

/***/ 1563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Infobar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Markdown__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_InfobarConstants__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icons_CloseIcon__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Icons_ExclamationIcon__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_UIEventService__ = __webpack_require__(141);








let

Infobar = class Infobar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.dismissInfobar = this.dismissInfobar.bind(this);
    this.handlePrimaryAction = this.handlePrimaryAction.bind(this);
    this.handleSecondaryAction = this.handleSecondaryAction.bind(this);
  }

  componentDidMount() {
    this.props.onView && this.props.onView();
    this.unsubscribeHandler = this.props.dismissEvent && __WEBPACK_IMPORTED_MODULE_8__services_UIEventService__["a" /* default */].subscribe(this.props.dismissEvent, this.dismissInfobar);
  }

  componentWillUnmount() {
    this.unsubscribeHandler && this.unsubscribeHandler();
  }

  getTypeClass() {
    let typeClass = this.props.type ? `infobar-${this.props.type}` : 'infobar-info';
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'infobar': true,
      [typeClass]: true });

  }

  handlePrimaryAction() {
    if (this.props.primaryAction && this.props.primaryAction.onClick) {
      this.props.primaryAction.onClick();
      this.props.onActionClick && this.props.onActionClick();
    }
  }

  handleSecondaryAction() {
    if (this.props.secondaryAction && this.props.secondaryAction.onClick) {
      this.props.secondaryAction.onClick();
      this.props.onActionClick && this.props.onActionClick();
    }
  }

  dismissInfobar() {
    this.props.onDismiss && this.props.onDismiss(this.props.uid);
  }

  getActions() {
    const { primaryAction = null, secondaryAction = null } = this.props;

    if (primaryAction || secondaryAction) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'infobar-actions' },

          primaryAction &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
              type: 'primary',
              size: 'small',
              disabled: primaryAction.disabled,
              onClick: this.handlePrimaryAction },

            primaryAction.label),



          secondaryAction &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
              type: 'text',
              disabled: secondaryAction.disabled,
              onClick: this.handleSecondaryAction },

            secondaryAction.label)));




    }
  }

  render() {
    let {
      message,
      actionLabel,
      noIcon,
      isDismissable,
      onMessageLinkClick } =
    this.props;

    if (_.isEmpty(message)) {
      return false;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getTypeClass() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'infobar__msg_container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'infobar__msg_text' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'infobar__icon-wrapper' },
              !this.props.noIcon && this.props.renderIcon()),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'infobar__text-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Markdown__["a" /* default */], {
                source: message,
                onLinkClick: onMessageLinkClick }))),



          this.getActions()),


        isDismissable &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'infobar__dismiss_container',
            onClick: this.dismissInfobar },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Icons_CloseIcon__["a" /* default */], {
            className: 'infobar__dismiss_icon',
            style: 'primary' }))));





  }};


Infobar.propTypes = {
  isDismissable: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  message: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOf([__WEBPACK_IMPORTED_MODULE_3__constants_InfobarConstants__["b" /* INFO */], __WEBPACK_IMPORTED_MODULE_3__constants_InfobarConstants__["d" /* WARN */], __WEBPACK_IMPORTED_MODULE_3__constants_InfobarConstants__["a" /* ERROR */], __WEBPACK_IMPORTED_MODULE_3__constants_InfobarConstants__["c" /* SUCCESS */]]) };


Infobar.defaultProps = {
  type: __WEBPACK_IMPORTED_MODULE_3__constants_InfobarConstants__["d" /* WARN */],
  isDismissable: true,
  noIcon: false,
  renderIcon: () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Icons_ExclamationIcon__["a" /* default */], { className: 'infobar__icon' }) };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Inputs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons_HideIcon__ = __webpack_require__(1620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icons_PreviewIcon__ = __webpack_require__(1583);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}




let

PasswordInput = class PasswordInput extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      masked: true };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ masked: !this.state.masked });
  }

  render() {
    let _props = this.props,{ className } = _props,inputProps = _objectWithoutProperties(_props, ['className']),
    iconSize = this.props.size === 'huge' ? 'md' : 'sm';

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('password-input', className) },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Inputs__["b" /* Input */], _extends({},
        inputProps, {
          type: this.state.masked ? 'password' : 'text' })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'password-input__toggle',
            onClick: this.handleToggle },


          this.state.masked ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons_HideIcon__["a" /* default */], { title: 'Show', size: iconSize }) :
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Icons_PreviewIcon__["a" /* default */], { title: 'Hide', size: iconSize }))));




  }};


PasswordInput.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  inputStyle: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['box', 'line']),
  size: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['huge']) };

/***/ }),

/***/ 1568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Inputs__ = __webpack_require__(48);

let

MultiSelectEntity = class MultiSelectEntity extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleEntitySelect = this.handleEntitySelect.bind(this);
  }

  handleEntitySelect(id) {
    let selectedEntities = [];
    if (id === 'all' && _.size(this.props.selectedEntities) !== _.size(this.props.items)) {
      selectedEntities = _.map(this.props.items, 'id');
    } else
    if (id !== 'all') {
      if (_.includes(this.props.selectedEntities, id)) {
        selectedEntities = _.filter(this.props.selectedEntities, entityId => {return entityId !== id;});
      } else
      {
        selectedEntities = _.concat(this.props.selectedEntities, id);
      }
    }

    this.props.onSelectEntity(selectedEntities);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'multi-select-entity__list' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'multi-select-entity__item',
            onClick: this.handleEntitySelect.bind(this, 'all') },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Inputs__["a" /* Checkbox */], {
            checked: _.size(this.props.selectedEntities) === _.size(this.props.items) }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, `All your ${this.props.type}`)),


        _.map(this.props.items, item => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'multi-select-entity__item',
                key: item.id,
                onClick: this.handleEntitySelect.bind(this, item.id) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Inputs__["a" /* Checkbox */], { checked: _.includes(this.props.selectedEntities, item.id) }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'multi-select-entity__item--name' }, item.name)));


        })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceActionDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_MoreIcon__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_uuid_helper__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_SyncWorkspaceController__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_UIEventService__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_UIEventConstants__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_MoreButtonTooltipConstant__ = __webpack_require__(282);
var _class;











let


WorkspaceActionDropdown = Object(__WEBPACK_IMPORTED_MODULE_10_mobx_react__["b" /* observer */])(_class = class WorkspaceActionDropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { isDefaultWorkspace: false };

    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.handleShareWorkspace = this.handleShareWorkspace.bind(this);
  }

  componentWillMount() {
    this.setDefaultWorkspace();
  }

  setDefaultWorkspace() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["getStore"])('CurrentUserStore'),
    workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["getStore"])('WorkspaceStore').find(this.props.workspaceId),
    defaultUserWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_5__utils_uuid_helper__["b" /* deterministicUUID */])(`user:${currentUser.id}`),
    defaultTeamWorkspaceId = null;

    if (workspace && workspace.id === defaultUserWorkspaceId) {
      this.setState({ isDefaultWorkspace: true });
      return;
    }

    let teamId = _.get(currentUser, 'team.id', null);
    if (teamId) {
      defaultTeamWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_5__utils_uuid_helper__["b" /* deterministicUUID */])(`team:${teamId}`);

      if (this.props.workspaceId === defaultTeamWorkspaceId) {
        this.setState({ isDefaultWorkspace: true });
      }
    }
  }

  handleShareWorkspace() {
    let workspaceId = this.props.workspaceId,
    workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["getStore"])('WorkspaceStore').find(workspaceId),
    currentUser = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["getStore"])('CurrentUserStore');

    if (workspace.type === 'personal' && (this.state.isDefaultWorkspace || currentUser.isFreeUser)) {
      __WEBPACK_IMPORTED_MODULE_8__services_UIEventService__["a" /* default */].publish(__WEBPACK_IMPORTED_MODULE_9__constants_UIEventConstants__["d" /* OPEN_INVITE_MODAL */], { workspaceId, source: 'share_ws' });
      return;
    }

    pm.mediator.trigger('openShareWorkspaceModal', workspaceId);
  }

  handleItemSelect(item) {
    let { workspaceId } = this.props,
    workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["getStore"])('WorkspaceStore').find(workspaceId);
    if (!workspace && item !== 'details') {
      pm.mediator.trigger('joinWorkspace', workspaceId);
      return;
    }
    switch (item) {
      case 'details':
        __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'view_details');

        pm.mediator.trigger('openWorkspaceDetailsModal', workspaceId);
        break;

      case 'manageMembers':
      case 'share':
        this.handleShareWorkspace(item);
        break;

      case 'rename':
      case 'addMembers':
      case 'description':
        pm.mediator.trigger('openEditWorkspaceModal', workspaceId);
        break;

      case 'delete':
        pm.mediator.trigger('showWorkspaceDeleteModal', workspaceId);
        break;
      case 'leave':
        pm.mediator.trigger('showWorkspaceLeaveModal', workspaceId);
        break;
      default:
        break;}

    this.props.onAction && this.props.onAction(item);
  }

  getDisabledState() {
    let isOffline = !Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["getStore"])('SyncStatusStore').isSocketConnected;
    if (isOffline) {
      return {
        active: true,
        text: 'You need to be online to perform these actions on the workspace.' };

    }

    return { active: false };
  }

  getShareDisabledStatus() {
    let disabledState = this.getDisabledState();
    if (disabledState.active) {
      return {
        isShareDisabled: true,
        shareDisableText: disabledState.text };

    }

    return { isShareDisabled: false, shareDisableText: '' };
  }

  getDeleteDisabledStatus() {
    let disabledState = this.getDisabledState();

    if (disabledState.active) {
      return {
        isDeleteDisabled: true,
        deleteDisableText: disabledState.text };

    }

    // Bootstrapped workspace cannot be deleted
    if (this.state.isDefaultWorkspace) {
      return {
        isDeleteDisabled: true,
        deleteDisableText: 'You cannot delete this workspace.' };

    }

    return { isDeleteDisabled: false, deleteDisableText: '' };
  }

  render() {
    let isOffline = !Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["getStore"])('SyncStatusStore').isSocketConnected,
    disabledState = this.getDisabledState(isOffline),
    workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["getStore"])('WorkspaceStore').find(this.props.workspaceId),
    { isShareDisabled, shareDisableText } = this.getShareDisabledStatus(),
    { isDeleteDisabled, deleteDisableText } = this.getDeleteDisabledStatus();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["a" /* Dropdown */], {
          className: 'workspace-actions-dropdown',
          onSelect: this.handleItemSelect,
          onToggle: this.props.onToggle },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["b" /* DropdownButton */], {
            dropdownStyle: 'nocaret',
            type: 'custom' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'icon',
              className: 'workspace-actions-dropdown-button',
              tooltip: __WEBPACK_IMPORTED_MODULE_11__constants_MoreButtonTooltipConstant__["a" /* ACTION_TYPE_VIEW_MORE_ACTIONS_TOOLTIP */] },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_MoreIcon__["a" /* default */], null))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: 'details' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'View Details')),


          workspace && workspace.type === 'personal' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              disabled: isShareDisabled,
              disabledText: shareDisableText,
              tooltipPlacement: this.props.tooltipPlacement,
              refKey: 'share' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Invite to Workspace')),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              disabled: disabledState.active,
              disabledText: disabledState.text,
              refKey: 'rename' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Rename')),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              disabled: disabledState.active,
              disabledText: disabledState.text,
              refKey: 'description' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Edit Workspace')),


          workspace && workspace.type === 'team' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              disabled: disabledState.active,
              disabledText: disabledState.text,
              refKey: 'addMembers' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Add Members')),



          workspace && workspace.type !== 'personal' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              disabled: disabledState.active,
              disabledText: disabledState.text,
              refKey: 'manageMembers' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Invite to Workspace')),



          workspace && workspace.type !== 'personal' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              disabled: disabledState.active,
              disabledText: disabledState.text,
              refKey: 'leave' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Leave')),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
              disabled: isDeleteDisabled,
              disabledText: deleteDisableText,
              tooltipPlacement: this.props.tooltipPlacement,
              refKey: 'delete' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Delete')))));




  }}) || _class;


WorkspaceActionDropdown.defaultProps = { tooltipPlacement: 'right' };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncOfflineStatusBarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sync_SyncOfflineStatusBar__ = __webpack_require__(1611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_RequesterTabConstants__ = __webpack_require__(200);
var _class;





const config = {
  switcher: {
    message: {
      offline: 'You need to have an active internet connection to be able to switch to or create a workspace.',
      connecting: 'Trying to reconnect to sync.' },

    teamCheck: false },

  builder: {
    message: {
      offline: 'You seem to be offline. Any changes made while offline might not sync properly with other members of this workspace.',
      connecting: 'Trying to reconnect to sync... Any changes made while offline will sync once you are back online..' },

    teamCheck: true } };let




SyncOfflineStatusBarContainer = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["b" /* observer */])(_class = class SyncOfflineStatusBarContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let currentSyncStatus = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('SyncStatusStore').currentSyncStatus,
    notInSync = !Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('SyncStatusStore').isSocketConnected,
    status;

    if (currentSyncStatus === 'connecting') {
      status = 'connecting';
    } else if (!_.includes('insync', 'syncing', 'idle'), currentSyncStatus) {
      status = 'offline';
    }

    let isOpen = notInSync && (
    config[this.props.position].teamCheck ? Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('ActiveWorkspaceStore').type === 'team' : true) &&
    !(Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('ActiveWorkspaceSessionStore').viewMode === __WEBPACK_IMPORTED_MODULE_4__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */] && status === 'offline' && this.props.position === 'builder');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_sync_SyncOfflineStatusBar__["a" /* default */], {
        isOpen: isOpen,
        status: status,
        message: config[this.props.position]['message'][status] }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PreviewIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(18);
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

/***/ 1585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flattenCollection; });
/* unused harmony export flattenCollections */
/* unused harmony export computeVisibility */
/* unused harmony export getParents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNodePath; });
/* unused harmony export getAllToggleableNodes */
/**
 * Denormalize folder children
 * @param  {string} folderId          folder id
 * @param  {Array} options.requests   all requests in collection
 * @param  {Array} options.folders    all folders in collection
 * @return {Object}                   denormalized folder object
 */

/**
     * Denormalize request children
     * @param  {string} requestId         request id
     * @param  {Array} options.requests   all requests in collection
     * @return {Object}                   denormalized folder object
     */

/**
         * Denormalize node children
         * @param  {string} folderId          folder id
         * @param  {Array} options.requests   all requests in collection
         * @param  {Array} options.folders    all folders in collection
         * @return {Object}                   denormalized folder object
         */

/**
             * Denormalize collection children
             * @param  {object} collection collection in v1 format
             * @return {object}            denormalized collection
             */

/** =========================================================================**/
/*
                                                                                   FLATTENING UTILS
                                                                                  */

/**
                                                                                      * Deep flatten a node in denormalized collection
                                                                                      * @param  {Object} node node in denormalized collection tree
                                                                                      * @param  {number} depth depth of node (default: 0)
                                                                                      * @return {Array}       deep flattened node
                                                                                      */
// function flattenNode (node, depth) {
function flattenNode(flattened, node, depth, map) {
  // let flattenedNode = _.omit(node, ['children']),
  //     nodeDepth = depth || 0,
  //     flattenedChildren = _.flatMap(node.children, (childNode) => {
  //       return flattenNode(childNode, nodeDepth + 1);
  //     });

  // flattenedNode.endOffset = _.size(flattenedChildren);
  // flattenedNode.depth = nodeDepth;

  // // TODO: add parent and child offsets

  // return _.concat(flattenedNode, flattenedChildren);

  // console.log('flattening', node)

  if (!node) {
    return flattened;
  }

  // node.endOffset = _.size(node.folders_order) + _.size(node.order)
  flattened.push(node);

  _.each(node.folders_order, folderId => {
    let folder = _.find(map.folders, ['id', folderId]);
    if (folder) {
      folder.type = 'folder';
      folder.depth = depth + 1;
      flattenNode(flattened, folder, depth + 1, map);
    }
  });

  _.each(node.order, requestId => {
    let request = _.find(map.requests, ['id', requestId]);
    if (request) {
      request.type = 'request';
      request.depth = depth + 1;
      flattened.push(request);
    }
  });

  return flattened;
}

/**
   * marks all children as (in)visible
   * @param  {Array}  visibilityMap visibilityMap
   * @param  {Array}  flatTree      flattened tree
   * @param  {Array}  openNodes     ids of open items
   * @param  {number}  nodeIdx      index of node in flattened tree
   * @param  {Boolean} isVisible    boolean for flagging (in)visible
   * @param  {Boolean} deep         deep
   * @return {undefined}            no return value. visibilityMap is mutated
   */
function _markChildrenVisibility(visibilityMap, flatTree, openNodes, nodeIdx, isVisible, deep) {
  let node = flatTree[nodeIdx],
  idx = nodeIdx + 1,
  endIdx = _.findIndex(flatTree, n => {return n.depth <= node.depth;}, idx + 1); // nodeIdx + node.endOffset + 1;

  if (endIdx === -1) {
    endIdx = _.size(flatTree);
  }

  // if deep, mark the whole subtree
  if (deep) {
    while (idx < endIdx) {
      let itemNode = flatTree[idx];

      visibilityMap[idx] = isVisible;

      // fast forward to next subtree
      if (_isNodeToggleable(itemNode) && !_isNodeOpen(itemNode, openNodes)) {
        let endOffset = _.findIndex(flatTree, n => {return n.depth <= itemNode.depth;}, idx + 1);
        if (endOffset === -1) {
          endOffset = _.size(flatTree) - idx;
        }
        idx += endOffset; // itemNode.endOffset;
      }

      ++idx;
    }

    return;
  }

  let nodeDepth = node.depth,
  immediateChildDepth = nodeDepth + 1;

  // loop from immediate child to start of next subtree
  while (idx < endIdx) {
    let itemNode = flatTree[idx],
    itemNodeDepth = itemNode.depth;

    if (itemNodeDepth <= nodeDepth) {
      break;
    }

    if (itemNodeDepth === immediateChildDepth) {
      visibilityMap[idx] = isVisible;
    }

    ++idx;
  }

  return;
}

/**
  * marks all parents as (in)visible
  * @param  {Array}  visibilityMap visibilityMap
  * @param  {Array}  flatTree      flattened tree
  * @param  {number}  nodeIdx      index of node in flattened tree
  * @param  {Boolean} isVisible    boolean for flagging (in)visible
  * @return {undefined}            no return value. visibilityMap is mutated
   */
function _markParentVisibility(visibilityMap, flatTree, nodeIdx, isVisible) {
  let node = flatTree[nodeIdx],
  nodeDepth = node.depth,
  idx = nodeIdx - 1,
  parentDepth = nodeDepth - 1;

  while (idx > -1) {
    let tmpNode = flatTree[idx],
    tmpNodeDepth = tmpNode.depth;
    if (tmpNodeDepth <= parentDepth) {
      visibilityMap[idx] = isVisible;
      --parentDepth;
    }
    --idx;
  }
}

/**
   * get parent items
   * @param  {Array} flatTree flattened tree
   * @param  {Object} nodeIdx index in flattened tree
   * @return {Array}          array of parent nodes
   */
function getParents(flatTree, nodeIdx) {
  let node = flatTree[nodeIdx],
  nodeDepth = node.depth,
  parents = [],
  idx = nodeIdx - 1,
  parentDepth = nodeDepth - 1;

  while (idx > -1) {
    let tmpNode = flatTree[idx],
    tmpNodeDepth = tmpNode.depth;
    if (tmpNodeDepth <= parentDepth) {
      parents.push(flatTree[idx]);
      --parentDepth;
    }
    --idx;
  }

  return parents;
}

/**
   * Get path for the item
   * @param  {Array} flatTree flattened tree
   * @param  {Object} node    node
   * @return {string}         path
   */
function getNodePath(flatTree, node) {

  let nodeIdx = _.findIndex(flatTree, ['id', node.id]);

  if (nodeIdx === -1) {
    return '';
  }

  let parents = getParents(flatTree, nodeIdx),
  pathItems = _.concat([node], parents);


  return _.chain(pathItems).
  reverse().
  map('name').
  join(' / ').
  value();
}

/**
   * check if the node is open
   * @param  {Object}  node      node in flattened tree
   * @param  {Array}  openNodes  ids of open nodes
   * @return {Boolean}           whether node is open
   */
function _isNodeOpen(node, openNodes) {
  return openNodes.get(node.id);

  // return _.includes(openNodes, node.id);
}

/**
   * check if node is toggled
   * @param  {Object}  node node in flattened tree
   * @return {Boolean}      whether node is toggleable
   */
function _isNodeToggleable(node) {
  return _.includes(['collection', 'folder'], node.type);
}

/**
   * returns id of all toggleable nodes
   * @param  {Array} flatTree flattened tree
   * @return {Array}          ids of toggleable nodes
   */
function getAllToggleableNodes(flatTree) {
  return _.chain(flatTree).
  filter(_isNodeToggleable).
  map('id').
  value();
}

/**
   * computes visibility map
   * @param  {Array} flatCollection flattened collection
   * @param  {Array} openNodes      array of open node ids
   * @param  {string} filterQuery    search filter
   * @return {Array}                visibility map
   */
function computeVisibility(flatCollection, openNodes, filterQuery) {
  let visibilityMap = new Array(_.size(flatCollection));
  _.fill(visibilityMap, false);
  visibilityMap[0] = true;

  _.each(flatCollection, (node, index) => {
    if (_isNodeToggleable(node) && _isNodeOpen(node, openNodes)) {
      // find the next sibling
      let endIndex = _.findIndex(flatCollection, n => n.depth <= node.depth, index + 1);
      if (endIndex === -1) {
        endIndex = _.size(flatCollection);
      }

      visibilityMap[index] = true;
      _.each(new Array(endIndex - index), (n, i) => {
        if (flatCollection[index + i].depth === node.depth + 1) {
          visibilityMap[index + i] = true;
        }
      });
    }
  });

  return visibilityMap;
}

/**
   * computes visibility map
   * @param  {Array} flatCollection flattened collection
   * @param  {Array} openNodes      array of open node ids
   * @param  {string} filterQuery    search filter
   * @return {Array}                visibility map
   */
function _computeVisibilityQuery(flatCollection, openNodes, filterQuery) {
  let lowerFilterQuery = _.toLower(filterQuery),
  matchingNodes = new Array(_.size(flatCollection)),
  visibilityMap = new Array(_.size(flatCollection));

  _.fill(matchingNodes, false);
  _.fill(visibilityMap, false);

  _.forEach(flatCollection, (flatNode, itemIdx) => {
    let lowerItemName = _.toLower(flatNode.name);

    // if not matching, flag as not visible
    if (!_.includes(lowerItemName, lowerFilterQuery)) {
      return;
    }

    matchingNodes[itemIdx] = true;
  });

  let matchIdx = 0,
  endMatchIdx = matchingNodes.length;

  while (matchIdx < endMatchIdx) {
    if (!matchingNodes[matchIdx]) {
      ++matchIdx;
      continue; // eslint-disable-line no-continue
    }

    let matchNode = flatCollection[matchIdx];

    // mark node as visible
    visibilityMap[matchIdx] = true;

    // if toggleable node, deep mark subtree and fast forward
    if (_isNodeToggleable(matchNode) && _isNodeOpen(matchNode, openNodes)) {
      _markChildrenVisibility(visibilityMap, flatCollection, openNodes, matchIdx, true, true);
      matchIdx += matchNode.endOffset;
    }

    // mark parent chain
    _markParentVisibility(visibilityMap, flatCollection, matchIdx, true);

    ++matchIdx;
  }

  let idx = 0,
  length = flatCollection.length;

  while (idx < length) {
    let node = flatCollection[idx];

    if (_isNodeToggleable(node)) {
      // if toggleable node, and is not open, deep mark subtree and fast forward
      if (visibilityMap[idx] && !_isNodeOpen(node, openNodes)) {
        _markChildrenVisibility(visibilityMap, flatCollection, openNodes, idx, false, true);
        let endIdx = _.findIndex(flatCollection, n => {return n.depth <= node.depth;}, idx + 1);
        if (endIdx === -1) {
          endIdx = _.size(flatCollection) - idx;
        }
        idx += endIdx;
      }
    }

    ++idx;
  }

  return visibilityMap;
}

/**
   * Deep flattens a collection
   * @param  {Object} collection collection in v1 format
   * @return {Array}             flattened collection
   */
function flattenCollection(collection, folders = [], requests = []) {
  // let denormalized = denormalizeCollection(collection);
  // return flattenNode(denormalized);
  collection.type = 'collection';
  collection.depth = 0;
  return flattenNode([], collection, 0, { folders, requests });
}

/**
   * Flattens list of collections
   * @param  {Array} collections              Array of v1 collections
   * @param  {Array} options.openCollections  Array of ids of open collections
   * @param  {Array} options.openFolders      Array of ids of open folders
   * @return {Array}                          Flattened collections
   */
function flattenCollections(collections) {
  return _.chain(collections).
  sortBy(collection => {
    return collection.get('name');
  }).
  map(collection => {
    return flattenCollection(collection.toJSON());
  }).
  value();
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transition_group_Transition__ = __webpack_require__(1627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transition_group_Transition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transition_group_Transition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1631);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



let

CarouselItem = class CarouselItem extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.state = {
      startAnimation: false };


    this.onEnter = this.onEnter.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onExit = this.onExit.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onEnter(node, isAppearing) {
    this.setState({ startAnimation: false });
    this.props.onEnter(node, isAppearing);
  }

  onEntering(node, isAppearing) {
    // getting this variable triggers a reflow
    const offsetHeight = node.offsetHeight;
    this.setState({ startAnimation: true });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
  }

  onExit(node) {
    this.setState({ startAnimation: false });
    this.props.onExit(node);
  }

  onExiting(node) {
    this.setState({ startAnimation: true });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  }

  onExited(node) {
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  }

  getItemClasses(status) {
    const { direction } = this.context,
    isActive = status === __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* TransitionStatuses */].ENTERED || status === __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* TransitionStatuses */].EXITING,
    directionClassName = (status === __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* TransitionStatuses */].ENTERING || status === __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* TransitionStatuses */].EXITING) &&
    this.state.startAnimation && (
    direction === 'right' ? 'carousel-item-left' : 'carousel-item-right'),
    orderClassName = status === __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* TransitionStatuses */].ENTERING && (
    direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev'),
    itemClasses = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(
    this.props.className,
    'carousel-item',
    isActive && 'active',
    directionClassName,
    orderClassName);


    return itemClasses;
  }

  render() {
    const _props = this.props,{ in: isIn, children, slide, tag: Tag, className } = _props,transitionProps = _objectWithoutProperties(_props, ['in', 'children', 'slide', 'tag', 'className']);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_transition_group_Transition___default.a, _extends({},
        transitionProps, {
          enter: slide,
          exit: slide,
          'in': isIn,
          onEnter: this.onEnter,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited }),


        status => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, { className: this.getItemClasses(status) },
              children));


        }));



  }};


CarouselItem.propTypes = _extends({},
__WEBPACK_IMPORTED_MODULE_3_react_transition_group_Transition___default.a.propTypes, {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  in: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  slide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string });


CarouselItem.defaultProps = _extends({},
__WEBPACK_IMPORTED_MODULE_3_react_transition_group_Transition___default.a.defaultProps, {
  tag: 'div',
  timeout: __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* TransitionTimeouts */].Carousel,
  slide: true });


CarouselItem.contextTypes = {
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string };


/* harmony default export */ __webpack_exports__["a"] = (CarouselItem);

/***/ }),

/***/ 1587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons_ForwardIcon__ = __webpack_require__(1632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons_BackIcon__ = __webpack_require__(1633);






const CarouselControl = props => {
  const { direction, onClickHandler, className } = props,
  anchorClasses = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(
  className,
  `carousel-control-${direction}`),

  screenReaderClasses = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(
  'sr-only'),

  getIcon = dir => {return dir === 'prev' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons_BackIcon__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons_ForwardIcon__["a" /* default */], null);};

  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', {
        className: anchorClasses,
        role: 'button',
        tabIndex: '0',
        onClick: e => {
          e.preventDefault();
          onClickHandler();
        } },

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: screenReaderClasses },
        getIcon(direction))));



};

CarouselControl.propTypes = {
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['prev', 'next']).isRequired,
  onClickHandler: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  directionText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string };


/* harmony default export */ __webpack_exports__["a"] = (CarouselControl);

/***/ }),

/***/ 1588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);




const CarouselIndicators = props => {
  const { items, activeIndex, onClickHandler, className } = props;

  const listClasses = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'carousel-indicators');
  const indicators = items.map((item, idx) => {
    const indicatorClasses = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(
    { active: activeIndex === idx });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', {
        key: `${item.key || item.src}${item.caption}${item.altText}`,
        onClick: e => {
          e.preventDefault();
          onClickHandler(idx);
        },
        className: indicatorClasses }));

  });

  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ol', { className: listClasses },
      indicators));


};

CarouselIndicators.propTypes = {
  items: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  activeIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  onClickHandler: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string };


/* harmony default export */ __webpack_exports__["a"] = (CarouselIndicators);

/***/ }),

/***/ 1606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcherContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__external_navigation_ExternalNavigationService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_workspaces_WorkspaceSwitcher__ = __webpack_require__(1607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_SyncWorkspaceController__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_controllers_WorkspaceController__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_RequesterTabConstants__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_services_DashboardService__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_AppUrlConstants_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_WorkspaceSwitchService__ = __webpack_require__(694);
var _class;















const REFETCH_WORKSPACE_WAIT_TIME = 1000; // 1 sec
let

WorkspaceSwitcherContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class WorkspaceSwitcherContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      activeTab: 'personal',
      isLoading: false,
      dataFetchedFirstTime: false, // will be set to true the first time API returns the data
      personalWorkspaces: [],
      teamWorkspaces: [], // team workspaces that the user belongs to
      joinableWorkspaces: [] // team workspaces that the user can join
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleSwitchWorkspace = this.handleSwitchWorkspace.bind(this);
    this.handleWorkspaceAction = this.handleWorkspaceAction.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleLearnMore = this.handleLearnMore.bind(this);
    this.handleProUpgradeClick = this.handleProUpgradeClick.bind(this);
    this.showWorkspacesFromLocalData = this.showWorkspacesFromLocalData.bind(this);
    this.refetchWorkspaces = _.debounce(this.refetchWorkspaces.bind(this), REFETCH_WORKSPACE_WAIT_TIME, { leading: true, trailing: false });
  }

  getActiveStore() {
    let viewMode = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('ActiveWorkspaceSessionStore').viewMode;

    if (viewMode === __WEBPACK_IMPORTED_MODULE_9__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */]) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('ActiveWorkspaceStore');
    } else
    if (viewMode === __WEBPACK_IMPORTED_MODULE_9__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */]) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore');
    }
  }

  handleToggle(isOpen) {
    // do nothing if requested to close an already closed switcher
    if (!this.state.isOpen && !isOpen) {
      return;
    }

    let activeTab = this.getActiveStore().type || 'personal';
    this.setState({
      isOpen,
      activeTab },
    () => {
      // switcher was closed, bail
      if (!isOpen) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'view_workspace_list', 'workspace_switcher', null, activeTab);

      // otherwise try to re-fetch it from sync
      this.refetchWorkspaces();
    });
  }

  /**
     * Returns a list of workspaces into 3 category: personal, joined, joinable
     * @param {Array<Object>} workspaces
     * @returns {Object} having keys 'personal', 'joined', 'joinable' and value as array of workspace list
     */
  segregateWorkspaces(workspaces = []) {
    let currentUserId = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('CurrentUserStore').id,
    wsMemberPropertyPath = `members.users.${currentUserId}`,
    personal = [],
    joined = [],
    joinable = [];

    _.forEach(workspaces, ws => {
      if (!ws) {
        return;
      }

      switch (ws.type) {
        case 'personal':
          personal.push(ws);
          break;

        case 'team':
          _.get(ws, wsMemberPropertyPath) ?
          joined.push(ws) : joinable.push(ws);
          break;}

    });

    return {
      personal: _.sortBy(personal, [w => _.toLower(w.name)]),
      joined: _.sortBy(joined, [w => _.toLower(w.name)]),
      joinable: _.sortBy(joinable, [w => _.toLower(w.name)]) };

  }

  async showWorkspacesFromLocalData() {
    let allWorkspaces = await __WEBPACK_IMPORTED_MODULE_8__modules_controllers_WorkspaceController__["a" /* default */].getAll(),
    wsMap = this.segregateWorkspaces(allWorkspaces);

    this.setState({
      isLoading: false,
      personalWorkspaces: wsMap.personal,
      teamWorkspaces: wsMap.joined,
      joinableWorkspaces: [] });

  }

  refetchWorkspaces() {
    if (!this.state.isOpen) {
      return;
    }

    this.setState({
      isLoading: true });


    __WEBPACK_IMPORTED_MODULE_7__modules_controllers_SyncWorkspaceController__["a" /* default */].getAll({ populate: ['members'] })

    // Populate the list from the data we got from sync
    .then(workspaces => {
      let wsMap = this.segregateWorkspaces(workspaces);

      this.setState({
        isLoading: false,
        dataFetchedFirstTime: true,
        personalWorkspaces: wsMap.personal,
        teamWorkspaces: wsMap.joined,
        joinableWorkspaces: wsMap.joinable });


      __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('sync', 'get_workspaces', { source: 'workspace_switcher' });
    })

    // Could not get the data from sync, fallback to showing only the joined workspaces from local data
    .catch(() => {
      this.showWorkspacesFromLocalData();
    });
  }

  handleTabChange(activeTab) {
    this.setState({ activeTab });
    __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'view_workspace_list', 'workspace_switcher', null, activeTab);
  }

  handleSwitchWorkspace(id) {
    let toBeSwitchedToWorkspaceInstance = pm.stores.WorkspaceStore.find(id),

    // workspace will only be not there in the store when it is an unjoined workspace,
    // and unjoined workspace is also a case of a team workspace
    analyticsLabel = toBeSwitchedToWorkspaceInstance && toBeSwitchedToWorkspaceInstance.type === 'personal' ? 'workspace_switcher_personal' : 'workspace_switcher_team';

    __WEBPACK_IMPORTED_MODULE_13__services_WorkspaceSwitchService__["a" /* default */].switchWorkspace(id).
    catch(e => {
      console.log('Error in switching workspace', e);
    });

    this.handleToggle(false);
    __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'switch_workspace', analyticsLabel, 1);
  }

  handleWorkspaceAction(workspace, action) {
    this.handleToggle(false);
    switch (action) {
      case 'create':
        pm.mediator.trigger('openCreateNewWorkspaceModal');
        break;
      case 'manage-all':
        Object(__WEBPACK_IMPORTED_MODULE_10__models_services_DashboardService__["d" /* manageWorkspaces */])();
        break;}

  }

  handleSignIn() {
    this.handleToggle(false);
    __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__["a" /* default */].login();
  }

  handleProUpgradeClick() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('CurrentUserStore'),
    quantity;

    if (currentUser.team) {
      quantity = _.get(currentUser, 'organizations[0].team_users').length;
    }

    quantity = quantity || 1;

    Object(__WEBPACK_IMPORTED_MODULE_10__models_services_DashboardService__["B" /* upgradeToPro */])({ quantity });

    this.handleToggle(false);
  }

  handleLearnMore() {
    this.handleToggle(false);

    Object(__WEBPACK_IMPORTED_MODULE_2__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_11__constants_AppUrlConstants_js__["_24" /* WORKSPACE_DOCS */]);
  }

  render() {
    let activeWorkspaceStore = this.getActiveStore();
    if (!activeWorkspaceStore) {
      return false;
    }

    let initialWorkspaces = {
      personalWorkspaces: this.state.personalWorkspaces,
      teamWorkspaces: this.state.teamWorkspaces,
      joinableWorkspaces: this.state.joinableWorkspaces },

    isOffline = !Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('SyncStatusStore').isSocketConnected;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__["a" /* default */], { identifier: 'workspaceDropdown' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_workspaces_WorkspaceSwitcher__["a" /* default */], {
          isLoading: this.state.isLoading && !this.state.dataFetchedFirstTime,
          activeTab: this.state.activeTab,
          activeWorkspace: activeWorkspaceStore,
          isLoggedIn: Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('CurrentUserStore').isLoggedIn,
          isOpen: this.state.isOpen,
          initialWorkspaces: initialWorkspaces,
          onToggle: this.handleToggle,
          onSignIn: this.handleSignIn,
          onLearnMore: this.handleLearnMore,
          onTabChange: this.handleTabChange,
          onSwitchWorkspace: this.handleSwitchWorkspace,
          onWorkspaceAction: this.handleWorkspaceAction,
          onProUpgradeClick: this.handleProUpgradeClick,
          isOffline: isOffline,
          teamSyncEnabled: Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('CurrentUserStore').teamSyncEnabled,
          disableActions: Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('ActiveWindowStore').type === 'runner' })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Tabs__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_FuzzySearchInput__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_WorkspaceIcon__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_DownSolidIcon__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__WorkspaceSwitcherList__ = __webpack_require__(1609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_sync_SyncOfflineStatusContainer__ = __webpack_require__(1582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__base_XPaths_XPath__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_util__ = __webpack_require__(22);
var _dec, _class;
















let



WorkspaceSwitcher = (_dec = __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default()({ eventCapturingPhase: false }), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class WorkspaceSwitcher extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      filteredPersonalWorkspaces: [],
      filteredTeamWorkspaces: [],
      filteredJoinableWorkspaces: [] };


    this.handleSwitchWorkspace = this.handleSwitchWorkspace.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleLearnMore = this.handleLearnMore.bind(this);
    this.handleProUpgrade = this.handleProUpgrade.bind(this);
    this.handleFuzzySearch = this.handleFuzzySearch.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.getToggle = this.getToggle.bind(this);
  }

  handleProUpgrade() {
    this.props.onProUpgradeClick && this.props.onProUpgradeClick();
  }

  handleClickOutside(e) {
    this.props.onToggle && this.props.onToggle(false) || _.noop;
  }

  handleAction(action) {
    this.props.onWorkspaceAction && this.props.onWorkspaceAction(null, action);
  }

  handleSwitchWorkspace(id) {
    this.props.onSwitchWorkspace && this.props.onSwitchWorkspace(id);
  }

  handleSignIn() {
    this.props.onSignIn && this.props.onSignIn();
  }

  handleLearnMore() {
    this.props.onLearnMore && this.props.onLearnMore();
  }

  handleFuzzySearch(searchQuery, searchResults) {
    this.setState({
      searchQuery: searchQuery,
      filteredPersonalWorkspaces: _.intersection(_.get(this.props.initialWorkspaces, 'personalWorkspaces', []), searchResults),
      filteredTeamWorkspaces: _.intersection(_.get(this.props.initialWorkspaces, 'teamWorkspaces', []), searchResults),
      filteredJoinableWorkspaces: _.intersection(_.get(this.props.initialWorkspaces, 'joinableWorkspaces', []), searchResults) });

  }

  isButtonDisabled() {
    if (this.props.isOffline) {
      return true;
    }
    return false;
  }

  getToggle() {
    if (this.props.disable) {
      return _.noop;
    }

    this.setState({
      searchQuery: '' });


    this.props.onToggle(!this.props.isOpen);
  }

  getSwitcherClasses() {
    return __WEBPACK_IMPORTED_MODULE_11_classnames___default()({
      'workspace-switcher__active': !this.props.disable,
      'workspace-switcher__disabled': this.props.disable });

  }

  handleSearchClick() {
    __WEBPACK_IMPORTED_MODULE_14__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'filter_workspace', 'workspace_switcher', 1);
  }

  render() {
    let isLoggedIn = this.props.isLoggedIn,
    searchQuery = this.state.searchQuery,
    initialWorkspaces = this.props.initialWorkspaces,
    filteredWorkspacesBySearch = {
      personalWorkspaces: this.state.filteredPersonalWorkspaces,
      teamWorkspaces: this.state.filteredTeamWorkspaces,
      joinableWorkspaces: this.state.filteredJoinableWorkspaces },

    isLoading = this.props.isLoading,
    items = _.concat(initialWorkspaces.personalWorkspaces, initialWorkspaces.teamWorkspaces, initialWorkspaces.joinableWorkspaces),
    disableButton = this.isButtonDisabled();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getSwitcherClasses(),
            onClick: this.getToggle },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_WorkspaceIcon__["a" /* default */], {
            className: 'workspace-switcher__icon',
            style: 'primary' }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'workspace-switcher__name',
              title: this.props.activeWorkspace.name },

            _.truncate(this.props.activeWorkspace.name, { length: 40 }) || 'Loading..'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_DownSolidIcon__["a" /* default */], { style: 'primary' })),


        this.props.isOpen &&
        !isLoggedIn &&

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__selector' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__title' }, 'Sign in to create workspaces'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__description' }, 'Workspaces help you organize your collections and environments.'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__learn-more' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                  type: 'text',
                  onClick: this.handleLearnMore }, 'Learn more about workspaces')),




            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__primary-btn' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                  type: 'primary',
                  size: 'large',
                  onClick: this.handleSignIn }, 'Sign in to create workspaces')))),









        this.props.isOpen &&
        isLoggedIn &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__selector' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Tabs__["b" /* Tabs */], {
                activeRef: this.props.activeTab,
                className: 'workspace-switcher__tabs',
                defaultActive: 'personal',
                type: 'primary',
                onChange: this.props.onTabChange },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__base_XPaths_XPath__["a" /* default */], { identifier: 'personal' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Tabs__["a" /* Tab */], { className: 'workspace-switcher__tab', refKey: 'personal' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-switcher__tab__title' }, 'Personal'))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__base_XPaths_XPath__["a" /* default */], { identifier: 'team' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Tabs__["a" /* Tab */], { className: 'workspace-switcher__tab', refKey: 'team' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-switcher__tab__title' }, 'Team')))),




            !this.props.disableActions &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__actions' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__base_XPaths_XPath__["a" /* default */], { identifier: 'createNew' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                    className:
                    __WEBPACK_IMPORTED_MODULE_11_classnames___default()({
                      'workspace-switcher__action workspace-switcher__action--create': true,
                      'disable-component': disableButton }),


                    type: 'text',
                    onClick: this.handleAction.bind(this, 'create') }, 'Create New')),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__base_XPaths_XPath__["a" /* default */], { identifier: 'allWorkspaces' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                    className:
                    __WEBPACK_IMPORTED_MODULE_11_classnames___default()({
                      'workspace-switcher__action workspace-switcher__action--manage': true,
                      'disable-component': disableButton }),


                    type: 'text',
                    onClick: this.handleAction.bind(this, 'manage-all') }, 'All workspaces')))),








          !isLoading &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__search' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_FuzzySearchInput__["a" /* default */], {
              ref: 'fuzzySearch',
              searchQuery: searchQuery,
              placeholder: 'Search for a workspace',
              onChange: this.handleFuzzySearch,
              onClick: this.handleSearchClick,
              items: items,
              searchFields: ['name'] })),




          this.props.activeTab === 'personal' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list' },

            isLoading &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_LoadingIndicator__["a" /* default */], null),


            !_.isEmpty(initialWorkspaces.personalWorkspaces) &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__WorkspaceSwitcherList__["a" /* default */], {
                onSwitchWorkspace: this.handleSwitchWorkspace,
                workspaces: searchQuery ? filteredWorkspacesBySearch.personalWorkspaces : initialWorkspaces.personalWorkspaces,
                activeWorkspace: this.props.activeWorkspace,
                onToggle: this.props.onToggle,
                disableActions: this.props.disableActions }))),






          this.props.activeTab === 'team' && !this.props.teamSyncEnabled &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state workspace-switcher__upgrade_to_pro' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__title' }, 'Start collaborating in team workspaces'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__description' }, 'Team workspaces allow you to share and work together on your API collections with your colleagues.'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__primary-btn' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__base_XPaths_XPath__["a" /* default */], { identifier: 'createNewTeam' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                    type: 'primary',
                    size: 'large',
                    onClick: this.handleAction.bind(this, 'create') }, 'Create a team workspace')))),








          this.props.activeTab === 'team' && this.props.teamSyncEnabled &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__containers_sync_SyncOfflineStatusContainer__["a" /* default */], { position: 'switcher' }),


            isLoading &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_LoadingIndicator__["a" /* default */], null),


            !_.isEmpty(initialWorkspaces.teamWorkspaces) &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group' + (this.props.isOffline ? ' disable-component' : '') },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group__header' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-switcher__list__group__title' }, 'Workspaces you belong to')),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__WorkspaceSwitcherList__["a" /* default */], {
                onSwitchWorkspace: this.handleSwitchWorkspace,
                workspaces: searchQuery ? filteredWorkspacesBySearch.teamWorkspaces : initialWorkspaces.teamWorkspaces,
                activeWorkspace: this.props.activeWorkspace,
                onToggle: this.props.onToggle,
                disableActions: this.props.disableActions })),




            !_.isEmpty(initialWorkspaces.joinableWorkspaces) &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group' + (this.props.isOffline ? ' disable-component' : '') },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group__header' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-switcher__list__group__title' }, 'Workspaces you can join')),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__WorkspaceSwitcherList__["a" /* default */], {
                onSwitchWorkspace: this.handleSwitchWorkspace,
                workspaces: searchQuery ? filteredWorkspacesBySearch.joinableWorkspaces : initialWorkspaces.joinableWorkspaces,
                activeWorkspace: this.props.activeWorkspace,
                onToggle: this.props.onToggle,
                disableActions: this.props.disableActions }))))));









  }}) || _class) || _class);


WorkspaceSwitcher.propTypes = {
  onToggle: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function fuzzysearch (needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < qlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

module.exports = fuzzysearch;


/***/ }),

/***/ 1609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcherList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WorkspaceSwitcherListItem__ = __webpack_require__(1610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(7);
var _class;


let


WorkspaceSwitcherList = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["b" /* observer */])(_class = class WorkspaceSwitcherList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSwitchWorkspace = this.handleSwitchWorkspace.bind(this);
  }

  handleSwitchWorkspace(id) {
    this.props.onSwitchWorkspace && this.props.onSwitchWorkspace(id);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group__list' },

        _.isEmpty(this.props.workspaces) ?

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__no-result' }, 'No workspaces found') :





        _.map(this.props.workspaces, workspace => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceSwitcherListItem__["a" /* default */], {
              onToggle: this.props.onToggle,
              onSelect: this.handleSwitchWorkspace,
              workspace: workspace,
              active: workspace.id === this.props.activeWorkspace.id,
              key: workspace.id,
              disableActions: this.props.disableActions }));


        })));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcherListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WorkspaceActionDropdown__ = __webpack_require__(1581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_SuccessIcon__ = __webpack_require__(284);
var _class;









let


WorkspaceSwitcherListItem = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class WorkspaceSwitcherListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { isActionsDropdownOpen: false };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleDropdownAction = this.handleDropdownAction.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'workspace-switcher__list__group__list-item': true,
      'is-active': this.props.active,
      'is-hovered': this.state.isActionsDropdownOpen });

  }

  handleSelect() {
    this.props.onSelect && this.props.onSelect(this.props.workspace.id);
  }

  handleDropdownToggle(isOpen, e) {
    e && e.stopPropagation();
    e && e.preventDefault();

    this.setState({ isActionsDropdownOpen: isOpen });
  }

  handleDropdownAction() {
    this.props.onToggle && this.props.onToggle(false);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses(), onClick: this.handleSelect },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group__list-item__enabled' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_SuccessIcon__["a" /* default */], {
            className: 'workspace-switcher__list__group__list-item__enabled__icon',
            size: 'xs' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group__list-item__name' },
          this.props.workspace.name),


        !this.props.disableActions &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__WorkspaceActionDropdown__["a" /* default */], {
          workspaceId: this.props.workspace.id,
          onAction: this.handleDropdownAction,
          onToggle: this.handleDropdownToggle })));




  }}) || _class;

/***/ }),

/***/ 1611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Infobar__ = __webpack_require__(1563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_InfobarConstants__ = __webpack_require__(386);




const infoBarType = {
  'connecting': __WEBPACK_IMPORTED_MODULE_2__constants_InfobarConstants__["d" /* WARN */],
  'offline': __WEBPACK_IMPORTED_MODULE_2__constants_InfobarConstants__["a" /* ERROR */] };let


SyncOfflineStatusBar = class SyncOfflineStatusBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return (
      this.props.isOpen &&
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Infobar__["a" /* default */], {
        type: infoBarType[this.props.status],
        message: this.props.message,
        isDismissable: false,
        className: 'sync-offline-status-bar' }));


  }};


/* harmony default export */ __webpack_exports__["a"] = (SyncOfflineStatusBar);

/***/ }),

/***/ 1612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Breadcrumb; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons_FolderIcon__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icons_DownSolidIcon__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Icons_CollectionIcon__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);








let

Breadcrumb = class Breadcrumb extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor(props) {
    super(props);
    this.state = { visibleCount: props.minimumVisible };
    this.handleEntitySelect = this.handleEntitySelect.bind(this);
  }

  getCrumbClasses(active) {
    return __WEBPACK_IMPORTED_MODULE_7_classnames___default()({ 'breadcrumb': true });
  }

  getCrumbContainerClasses(isActive) {
    return __WEBPACK_IMPORTED_MODULE_7_classnames___default()({
      'breadcrumb__container': true,
      'breadcrumb__container--dropdown-visible': isActive });

  }

  expand(containerWidth) {
    const { showDropMenu, offsetRight, items } = this.props;

    if (showDropMenu && _.size(items) > 2 && containerWidth - this.getLastCrumbOffsetRight() >= offsetRight) {
      this.setState({ visibleCount: Math.min(this.state.visibleCount + 1, items.length) });
    }
  }

  getLastCrumbOffsetRight() {
    let container = this.container && Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.container),
    lastCrumb = _.get(container, 'lastChild');

    return _.get(lastCrumb, 'offsetLeft') + _.get(lastCrumb, 'offsetWidth');
  }

  collapse(containerWidth) {
    const { showDropMenu, offsetRight, minimumVisible, items } = this.props;

    if (showDropMenu && _.size(items) > 2 && containerWidth - this.getLastCrumbOffsetRight() < offsetRight) {
      this.setState({ visibleCount: Math.max(this.state.visibleCount - 1, minimumVisible) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { containerWidth } = this.props;
    if (prevState.visibleCount !== this.state.visibleCount && containerWidth - this.getLastCrumbOffsetRight() < this.props.offsetRight) {
      this.collapse(containerWidth);
    } else
    if (this.props.showDropMenu && prevProps.items.length !== this.props.items.length) {
      this.expand(containerWidth);
    }
  }

  handleEntitySelect(entityId) {
    this.props.onItemClick(_.find(this.props.items, { id: entityId }));
  }

  render() {
    let { visibleCount } = this.state,
    { items: allItems, showDropMenu } = this.props,
    visibleItems = showDropMenu && _.size(allItems) > visibleCount ? _.slice(allItems, -visibleCount) : allItems,
    itemsCount = _.size(allItems),
    visibleItemsCount = _.size(visibleItems),
    menuItems = visibleItemsCount < itemsCount ? _.reverse(_.slice(allItems, 0, itemsCount - visibleItemsCount)) : null;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getCrumbContainerClasses(Boolean(_.size(menuItems))),
          ref: ref => {
            this.container = ref;
          } },


        showDropMenu && Boolean(_.size(menuItems)) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Dropdowns__["a" /* Dropdown */], {
            className: 'breadcrumb__dropdown',
            onSelect: this.handleEntitySelect },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Dropdowns__["b" /* DropdownButton */], {
              dropdownStyle: 'nocaret',
              type: 'custom' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Buttons__["a" /* Button */], { className: 'breadcrumb__dropdown-button-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons_FolderIcon__["a" /* default */], { className: 'breadcrumb__dropdown-button' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Icons_DownSolidIcon__["a" /* default */], { className: 'breadcrumb__dropdown-button' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Dropdowns__["c" /* DropdownMenu */], null,

            _.map(menuItems, (item, index) => {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Dropdowns__["d" /* MenuItem */], {
                    key: item.id,
                    refKey: item.id },


                  item.type === 'collection' ?
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Icons_CollectionIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--collection' }) :
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons_FolderIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--folder' }),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, item.name)));

            }))),






        Boolean(_.size(menuItems)) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'dropdown-breadcrumb__separator' }, '›'),


        _.map(visibleItems, item => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                className: this.getCrumbClasses(),
                key: item.id },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                  className: 'breadcrumb__name',
                  onClick: () => {
                    this.props.onItemClick(item);
                  } },

                item.name)));



        })));


  }};


Breadcrumb.defaultProps = {
  offsetRight: 0,
  minimumVisible: 2,
  items: [],
  showDropMenu: true,
  onItemClick: _.noop };


Breadcrumb.propTypes = {
  items: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.array,
  minimumVisible: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number,
  onItemClick: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


/**
                                     * Component to show progress in pie chart form
                                     */
function PieProgress(props) {
  let baseStyle = {
    height: props.size,
    width: props.size,
    borderRadius: props.size },

  slice1 = Math.round(3.6 * props.progress),
  slice2;

  if (slice1 > 180) {
    slice2 = slice1 - 180;
    slice1 = 180;
  }
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: 'pie-progress-wrapper',
        style: baseStyle },

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'pie-progress-base',
          style: _extends({},
          baseStyle, {
            clip: `rect(0, ${props.size}px, ${props.size}px, ${props.size / 2}px)` }) },


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'pie-progress-slice',
          style: _extends({},
          baseStyle, {
            clip: `rect(0, ${props.size / 2}px, ${props.size}px, 0)`,
            transform: `rotate(${slice1}deg)` }) })),




      slice2 &&
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'pie-progress-base',
          style: _extends({},
          baseStyle, {
            clip: `rect(0, ${props.size}px, ${props.size}px, ${props.size / 2}px)`,
            transform: 'rotate(180deg)' }) },


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'pie-progress-slice',
          style: _extends({},
          baseStyle, {
            clip: `rect(-1px, ${props.size / 2}px, ${props.size}px, 0)`,
            transform: `rotate(${slice2}deg)` }) }))));






}

/* harmony default export */ __webpack_exports__["a"] = (PieProgress);

PieProgress.defaultProps = { size: 100, progress: 0 };

PieProgress.propTypes = {
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  progress: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number };

/***/ }),

/***/ 1614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XPathProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XPathManager__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx__ = __webpack_require__(6);






/**
                                    * XPathProvider is the root context provider for XPath Components.
                                    *
                                    * XPath component create new xPath by using xPath of its ancestor.
                                    * Also consumers can control when to make an xPath visible by passing boolean value
                                    * to isVisible.
                                    *
                                    * That is why it becomes important to make the xPath context as observable so that any change
                                    * (in xPath or visibility) in an xPath can cause all its descendents to re-register (unregister)
                                    * themselves.
                                    *
                                    *
                                    */let


XPathProvider = class XPathProvider extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.xPathManager = Object(__WEBPACK_IMPORTED_MODULE_3_mobx__["p" /* observable */])({
      register: __WEBPACK_IMPORTED_MODULE_2__XPathManager__["a" /* default */].register,
      unregister: __WEBPACK_IMPORTED_MODULE_2__XPathManager__["a" /* default */].unregister,
      path: props.identifier,
      isVisible: this.props.isVisible });

  }

  getChildContext() {
    return { xPathManager: this.xPathManager };
  }

  render() {
    return this.props.children;
  }};


XPathProvider.childContextTypes = { xPathManager: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object };

XPathProvider.propTypes = { identifier: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string };

XPathProvider.defaultProps = {
  isVisible: true };

/***/ }),

/***/ 1615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Explorer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ExplorerRow__ = __webpack_require__(1616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ExplorerSearch__ = __webpack_require__(1617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ExplorerResults__ = __webpack_require__(1618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ExplorerCreateRow__ = __webpack_require__(1619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_LeftSolidIcon__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__collections_CollectionForkLabel__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_LoadingIndicator__ = __webpack_require__(53);
var _class;










let defaultSelection = {
  id: null,
  depth: -1 };let



Explorer = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["b" /* observer */])(_class = class Explorer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      targets: [],
      selected: defaultSelection,
      filter: '',
      isCreating: false };


    this.setTargets = this.setTargets.bind(this);
    this.setTargetsDebounced = _.debounce(this.setTargets, 300);
    this.isLeaf = this.isLeaf.bind(this);
    this.getNextTargets = this.getNextTargets.bind(this);
    this.setNextTargets = this.setNextTargets.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleStartCreate = this.handleStartCreate.bind(this);
    this.handleCancelCreate = this.handleCancelCreate.bind(this);
  }

  componentWillMount() {
    this.setTargets();
  }

  componentWillReceiveProps(nextProps) {
    if (_.isEqual(this.props.targets, nextProps.targets)) {
      return;
    }

    // hackk implementation for new collection/folder added
    if (nextProps.newTargetId && this.props.newTargetId === undefined) {
      let selected = _.find(nextProps.targets, target => {
        return _.isEqual(target.id, nextProps.newTargetId);
      });

      this.props.onSelect && this.props.onSelect(selected);
      this.setState({ selected: selected }, () => {
        this.setNextTargets(nextProps.targets, selected);
      });

      return;
    }

    this.setNextTargets(nextProps.targets, this.state.selected);
  }

  /**
     * find parent of the currently selected parent when going back
     */
  getSelectionParent() {
    let selected = this.state.selected,
    targets = this.props.targets,
    selectedIndex = _.findIndex(targets, ['id', selected.id]);

    if (selectedIndex === -1) {
      return this.state.selected;
    }

    let parentIndex = _.chain(targets).
    slice(0, selectedIndex).
    findLastIndex(['depth', selected.depth - 1]).
    value();

    if (parentIndex === -1) {
      return defaultSelection;
    }

    return this.props.targets[parentIndex];
  }

  setTargets(targets = this.props.targets) {
    this.setNextTargets(targets);
  }

  isLeaf(targets, node) {
    if (this.props.isLeaf) {
      return this.props.isLeaf(node);
    } else
    {
      let nextTargets = this.getNextTargets(targets, node);
      return !_.size(nextTargets);
    }
  }

  /**
     * get the next list of collections/folders as per the selected collection/folder
     * @param {Array} currentTargets - list of flattened collections and folders
     * @param {Object} selectedTarget - selected collection/folder
     */
  getNextTargets(currentTargets, selectedTarget) {
    // find index of the selected target from the array of currentTargets
    let selectedTargetIndex = _.findIndex(currentTargets, ['id', selectedTarget.id]);

    // handle in case there is no selected collection(when we initially open the modal to save request)
    if (selectedTargetIndex === -1) {
      this.setState({ selected: defaultSelection });
      return currentTargets;
    }

    // find index of the next collection/folder at same depth as the selectedTarget
    let endIndex = _.findIndex(currentTargets, n => {return n.depth <= currentTargets[selectedTargetIndex].depth;}, selectedTargetIndex + 1);

    // handle in case there is no next collection/folder having same depth in the currentTargets
    if (endIndex === -1) {
      endIndex = _.size(currentTargets);
    }

    // return the list of selected target tree
    return _.slice(currentTargets, selectedTargetIndex + 1, endIndex);
  }

  /**
     * set the next list of collections/folders as per the selected collection/folder
     * @param {Array} currentTargets - list of flattened collections and folders
     * @param {Object} selectedTarget - selected collection/folder
     */
  setNextTargets(currentTargets, selectedTarget = defaultSelection) {
    let nextTargets = this.getNextTargets(currentTargets, selectedTarget);

    this.setState({ targets: nextTargets });
  }

  /**
     * get the next targets on select of any collection/folder
     * @param {Object} target
     * @param {*} isLeaf
     */

  handleSelect(target, isLeaf = false) {
    if (this.props.disableLeaves && isLeaf) {
      return;
    }
    let nextTargets = this.getNextTargets(this.props.targets, target);

    this.setState({
      selected: target,
      filter: '',
      targets: nextTargets },
    () => {
      this.handleCancelCreate && this.handleCancelCreate();
      this.props.onSelect && this.props.onSelect(target);
    });
  }

  /**
     * go back one level up in the directory tree,fetch the parent of the selected target along with the next targets
     */
  handleBack() {
    let selected = this.getSelectionParent(),
    nextTargets = this.getNextTargets(this.props.targets, selected);

    this.setState({
      selected,
      targets: nextTargets },
    () => {
      this.handleCancelCreate && this.handleCancelCreate();

      _.invoke(this, 'props.onBack', selected);
    });
  }

  /**
     * search results based on the filter value
     * @param  {string} filter - collection/folder searched
     */
  handleSearch(filter) {
    this.setState({ filter }, () => {
      this.props.onFilter && this.props.onFilter(filter);
    });
  }

  /**
     * start creating collection/folder
     */
  handleStartCreate() {
    // create new collection/folder if the searched filter named collection/folder does not exist
    if (!_.isEmpty(this.state.filter)) {
      this.handleCreate(this.state.filter);
      return;
    }
    this.setState({ isCreating: true });
  }

  handleCancelCreate() {
    this.setState({ isCreating: false });
  }

  /**
     * to create new collection/folder
     * @param {string} name - name of collection or folder created
     */
  handleCreate(name) {
    if (!_.isEmpty(name)) {
      this.setState({ isCreating: false, filter: '' }, () => {
        _.invoke(this.props, 'onCreate', name, this.state.selected);
      });
    }
  }

  render() {
    const showLoadingIndicator = this.props.loading,
    showRows = !this.props.loading && _.isEmpty(this.state.filter);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer__header-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ExplorerSearch__["a" /* default */], {
            disabled: this.props.loading,
            filter: this.state.filter,
            onSearch: this.handleSearch }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer__header__create-wrapper' },

            _.isEqual(this.state.selected, defaultSelection) ?
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer__header-title' },
              _.isEmpty(this.state.filter) ? 'All Collections' : 'Search Results') :

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'explorer-pop-btn',
                onClick: this.handleBack },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_LeftSolidIcon__["a" /* default */], { className: 'explorer-pop-btn__icon' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-pop-btn__text' },
                this.state.selected.name),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-pop-btn__meta' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__collections_CollectionForkLabel__["a" /* default */], { forkInfo: _.get(this.state.selected, 'forkInfo') }))),




            !this.props.disableCreate &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'explorer__header-create-btn',
                onClick: this.handleStartCreate },

              this.props.createText && this.props.createText(this.state.selected)))),





        this.state.isCreating &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ExplorerCreateRow__["a" /* default */], {
          placeholder: _.invoke(this.props, 'createPlaceholder', this.state.selected),
          onCancel: this.handleCancelCreate,
          onCreate: this.handleCreate }),



        showLoadingIndicator &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_LoadingIndicator__["a" /* default */], null),


        showRows &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-rows' },

          _.map(this.state.targets, (target, index) => {
            let isLeaf = this.isLeaf(this.state.targets, target);

            return target.depth === this.state.selected.depth + 1 && (
            !this.props.hideLeaves || !isLeaf) &&
            !(this.props.hideNodes && this.props.hideNodes(target)) &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ExplorerRow__["a" /* default */], {
              disableLeaves: this.props.disableLeaves,
              filter: this.state.filter,
              isLeaf: isLeaf,
              key: index,
              leafIcon: this.props.leafIcon,
              target: target,
              onSelect: this.handleSelect });


          })),




        !_.isEmpty(this.state.filter) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ExplorerResults__["a" /* default */], {
          filter: this.state.filter,
          allTargets: this.props.targets,
          isLeaf: this.props.isLeaf,
          onSelect: this.handleSelect })));




  }}) || _class;


Explorer.propTypes = {
  createPlaceholder: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  createText: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func, // The callback function that will be called to render the first row in every view
  disableCreate: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  disableLeaves: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool, // Indicates if leaves will be shown
  hideLeaves: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  hideNodes: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func, // The callback function that will be called so you can hide specific nodes if needed
  isLeaf: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func, // The callback function that will be called to check if a node is a leaf
  leafIcon: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func, // The callback called to render the leaf icon
  onBack: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onCreate: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onFilter: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  targets: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.array,
  loading: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool };


Explorer.defaultProps = {
  disableLeaves: false,
  loading: false };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorerRow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_CollectionIcon__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_RightSolidIcon__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collections_CollectionMetaIcons__ = __webpack_require__(1551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__collections_CollectionForkLabel__ = __webpack_require__(691);






let

ExplorerRow = class ExplorerRow extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.getClasses = this.getClasses.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  getClasses(target) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'explorer-row': true,
      'is-selected': target.id === _.get(this, 'props.selected.id'),
      'is-disabled': this.props.leafIcon && this.props.isLeaf },
    this.props.className);
  }

  /**
     * select a collection/folder
     * @param {Object} target
     */
  handleSelect(target, e) {
    e && e.stopPropagation();
    e && e.preventDefault();

    !this.props.isLeaf && _.invoke(this, 'props.onSelect', target, this.props.isLeaf);
  }

  render() {
    let { target } = this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getClasses(target),
          onClick: this.handleSelect.bind(this, target) },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-row__icon' },

          this.props.isLeaf && _.isFunction(this.props.leafIcon) ?
          this.props.leafIcon(target) :
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Icons_CollectionIcon__["a" /* default */], { className: 'explorer-row__icon-icon' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-row__name' },
          target.name),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-row__icons' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__collections_CollectionMetaIcons__["a" /* default */], { collection: target })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-row__meta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__collections_CollectionForkLabel__["a" /* default */], { forkInfo: _.get(target, 'forkInfo') })),


        !this.props.isLeaf &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_RightSolidIcon__["a" /* default */], { className: 'explorer-row__forward' })));



  }};


ExplorerRow.propTypes = {
  depth: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
  filter: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  isLeaf: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  onSelect: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  selected: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
  target: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorerSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Inputs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);


let

ExplorerSearch = class ExplorerSearch extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-search' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["b" /* Input */], {
          disabled: this.props.disabled,
          inputStyle: 'search',
          placeholder: 'Search for a collection or folder',
          query: this.props.filter,
          onChange: this.props.onSearch })));



  }};


ExplorerSearch.defaultProps = {
  disabled: false };


ExplorerSearch.propTypes = {
  filter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  onSearch: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  disabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool };

/***/ }),

/***/ 1618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorerResults; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_SearchHighlighter__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_CollectionTreeUtil__ = __webpack_require__(1585);




let

ExplorerResults = class ExplorerResults extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { filteredItems: this.filterTargets(props.allTargets, props.filter) };

    this.filterTargets = this.filterTargets.bind(this);
    this.getPath = this.getPath.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.setFilteredItems = this.setFilteredItems.bind(this);
    this.setFilteredItemsDebounced = _.debounce(this.setFilteredItems, 300, {
      leading: false,
      trailing: true });

  }

  componentWillReceiveProps(nextProps) {
    this.setFilteredItemsDebounced(nextProps);
  }

  getHighlightClasses(text) {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ 'highlight': text.isHighlight });
  }

  filterTargets(targets = this.props.allTargets, filter = this.props.filter) {
    return _.filter(targets, target => {
      if (_.isFunction(this.props.isLeaf)) {
        return !this.props.isLeaf(target) && _.includes(_.toLower(target.name), _.toLower(filter));
      }
      return _.includes(_.toLower(target.name), _.toLower(filter));
    });
  }

  setFilteredItems(nextProps) {
    this.setState({ filteredItems: this.filterTargets(nextProps.allTargets, nextProps.filter) });
  }

  getPath(target, itemToFind) {
    return Object(__WEBPACK_IMPORTED_MODULE_4__utils_CollectionTreeUtil__["b" /* getNodePath */])(target, itemToFind);
  }

  handleSelect(item) {
    _.invoke(this, 'props.onSelect', item);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-results' },

        _.map(this.state.filteredItems, (target, index) => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'explorer-row explorer-result',
                key: index,
                onClick: this.handleSelect.bind(this, target) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-row__icon' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-row__content' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-row__name' },
                  target.name),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-result__path' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_SearchHighlighter__["a" /* default */], {
                    source: this.getPath(this.props.allTargets, target),
                    query: this.props.filter })))));





        })));



  }};



ExplorerResults.propTypes = {
  filter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onSelect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  targets: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorerCreateRow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Inputs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_SuccessIcon__ = __webpack_require__(284);



let

ExplorerCreateRow = class ExplorerCreateRow extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { name: '' };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.refs.input && this.refs.input.focus();
  }

  handleCreate(e) {
    e && e.preventDefault();
    e && e.stopPropagation();
    this.props.onCreate(this.state.name);
  }

  handleCancel(e) {
    this.setState({ name: '' });
    this.props.onCancel && this.props.onCancel();
  }

  handleChange(value) {
    this.setState({ name: value });
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'explorer-create-row' },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-row__icon' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer-row__icon-icon' })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Inputs__["b" /* Input */], {
          className: 'explorer-row__create',
          inputStyle: 'search',
          hideSearchGlass: true,
          placeholder: this.props.placeholder,
          ref: 'input',
          query: this.state.name,
          onCancel: this.handleCancel,
          onChange: this.handleChange,
          onSubmit: this.handleCreate,
          onEnter: this.handleCreate }),

        !_.isEmpty(_.isString(this.state.name) && this.state.name.trim()) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'explorer-row__save',
            onClick: this.handleCreate },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_SuccessIcon__["a" /* default */], {
            className: 'explorer-row__save-icon',
            style: 'primary' }))));





  }};


ExplorerCreateRow.propTypes = {
  onCancel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onCreate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  placeholder: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HideIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(18);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'hide-eye-icon', d: 'M12.6968 1L14.0832 2.24632L2.30324 15.5261L0.916748 14.2798L12.6968 1ZM8 4C2.75124 4 0 7.88439 0 8.50041C0 8.85541 0.913728 10.2956 2.69262 11.4523L4.5947 9.5C4.49668 9.1833 4.444 8.84744 4.444 8.49958C4.444 6.58742 6.03576 5.03723 8 5.03723C8.21467 5.03723 8.42489 5.05576 8.62908 5.09127L9.5 4.0823C9.08423 4.02897 8.45315 4 8 4ZM8 13C13.248 13 16 9.11561 16 8.50041C16 8.09109 14.7817 6.23423 12.4207 5.03723L11 6.64089C11.3515 7.17788 11.5552 7.81557 11.5552 8.49958C11.5552 10.4117 9.96344 11.9611 8 11.9611C7.46401 11.9611 6.95575 11.8458 6.5 11.6391L5.5 12.688C6.25761 12.8836 7.09138 13 8 13ZM9.77759 8.5004C9.77759 9.45567 8.98171 10.2308 7.99999 10.2308C7.82638 10.2308 7.6586 10.2066 7.5 10.1615L8.95037 8.45975C9.37624 8.3627 9.77759 8.27337 9.77759 8.5004Z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#A9A9A9', fillRule: 'evenodd', xlinkHref: '#hide-eye-icon' }));



function HideIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 1621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyListMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

EmptyListMessage = class EmptyListMessage extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.props.className },
        this.props.children));


  }};

/***/ }),

/***/ 1623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissingCurrentWorkspaceModalContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_MissingCurrentWorkspaceModal__ = __webpack_require__(1624);



const defaultState = { isOpen: false };let

MissingCurrentWorkspaceModalContainer = class MissingCurrentWorkspaceModalContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = defaultState;

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    pm.mediator.on('missingCurrentWorkspace', this.handleOpen);
  }

  componentWillUnmount() {
    pm.mediator.off('missingCurrentWorkspace', this.handleOpen);
  }

  handleOpen(workspace) {
    this.setState({
      isOpen: true,
      workspaceName: workspace.name });

  }

  handleClose() {
    this.setState(defaultState);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_workspaces_MissingCurrentWorkspaceModal__["a" /* default */], {
        isOpen: this.state.isOpen,
        workspaceName: this.state.workspaceName,
        onRequestClose: this.handleClose }));


  }};

/***/ }),

/***/ 1624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Modals__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(13);


let

MissingCurrentWorkspaceModal = class MissingCurrentWorkspaceModal extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Modals__["a" /* Modal */], {
          className: 'missing-current-workspace-modal',
          isOpen: this.props.isOpen,
          onRequestClose: this.props.onRequestClose },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Modals__["b" /* ModalContent */], null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'missing-current-workspace-modal__wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'modal-header-close-button', onClick: this.props.onRequestClose }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'missing-current-workspace-thumbnail__container' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'missing-current-workspace-thumbnail' })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'missing-current-workspace-modal__content' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'missing-current-workspace-modal__header' }, 'We can\'t seem to find the ',
                this.props.workspaceName, ' workspace'),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'missing-current-workspace-modal__subtext' }, 'The workspace might have been deleted by another user in your team. You have been switched to one of your personal workspaces.'),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'missing-current-workspace-modal__action' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
                    type: 'primary',
                    onClick: this.props.onRequestClose }, 'Okay')))))));









  }};


/* harmony default export */ __webpack_exports__["a"] = (MissingCurrentWorkspaceModal);

/***/ }),

/***/ 1625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons_UpSolidIcon__ = __webpack_require__(185);


let

SortableTable = class SortableTable extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { sort: 'asc' };

    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.getSortedRows = this.getSortedRows.bind(this);
  }

  handleChangeSort() {
    this.setState(state => {
      return { sort: state.sort === 'asc' ? 'desc' : 'asc' };
    });
  }

  getSortedRows() {
    return _.sortBy(this.props.rows, row => _.toLower(_.get(row, this.props.rowKey, '')));
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'sortable-table': true }, this.props.className);
  }

  getSortClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'sortable-table__header__sort': true,
      'sortable-table__header__sort--desc': this.state.sort === 'desc',
      'sortable-table__header__sort--asc': this.state.sort === 'asc' });

  }

  render() {
    let sortedRows = this.getSortedRows();
    if (this.state.sort === 'desc') {
      _.reverse(sortedRows);
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sortable-table__header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sortable-table__header__title' }, this.props.header),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons_UpSolidIcon__["a" /* default */], {
            className: this.getSortClasses(),
            size: 'xs',
            onClick: this.handleChangeSort })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sortable-table__rows' },

          _.map(sortedRows, (row, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'sortable-table__row',
                  key: index },


                this.props.rowRenderer ?
                this.props.rowRenderer(row) :
                _.get(row, this.props.rowKey, '')));



          }))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CarouselItem__ = __webpack_require__(1586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CarouselControl__ = __webpack_require__(1587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CarouselIndicators__ = __webpack_require__(1588);





let

Carousel = class Carousel extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.hoverStart = this.hoverStart.bind(this);
    this.hoverEnd = this.hoverEnd.bind(this);
    this.state = {
      direction: 'right',
      indicatorClicked: false };

  }

  getChildContext() {
    return { direction: this.state.direction };
  }

  componentDidMount() {
    // Set up the cycle
    if (this.props.ride === 'carousel') {
      this.setInterval();
    }

    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillReceiveProps(nextProps) {
    this.setInterval(nextProps);

    // Calculate the direction to turn
    if (this.props.activeIndex + 1 === nextProps.activeIndex) {
      this.setState({ direction: 'right' });
    } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
      this.setState({ direction: 'left' });
    } else if (this.props.activeIndex > nextProps.activeIndex) {
      this.setState({ direction: this.state.indicatorClicked ? 'left' : 'right' });
    } else if (this.props.activeIndex !== nextProps.activeIndex) {
      this.setState({ direction: this.state.indicatorClicked ? 'right' : 'left' });
    }
    this.setState({ indicatorClicked: false });
  }

  componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  setInterval(props = this.props) {
    // make sure not to have multiple intervals going...
    this.clearInterval();
    if (props.interval) {
      this.cycleInterval = setInterval(() => {
        props.next();
      }, parseInt(props.interval, 10));
    }
  }

  clearInterval() {
    clearInterval(this.cycleInterval);
  }

  hoverStart(...args) {
    if (this.props.pause === 'hover') {
      this.clearInterval();
    }
    if (this.props.mouseEnter) {
      this.props.mouseEnter(...args);
    }
  }

  hoverEnd(...args) {
    if (this.props.pause === 'hover') {
      this.setInterval();
    }
    if (this.props.mouseLeave) {
      this.props.mouseLeave(...args);
    }
  }

  handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  }

  renderItems(carouselItems, className) {
    const { slide } = this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { role: 'listbox', className: className },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(carouselItems, (item, index) => {
          const isIn = index === this.props.activeIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(item, {
            in: isIn,
            slide: slide });

        })));



  }

  renderIndicators(indicators) {
    const wrappedOnClick = e => {
      if (typeof indicators.props.onClickHandler === 'function') {
        this.setState({ indicatorClicked: true }, () => indicators.props.onClickHandler(e));
      }
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(indicators, { onClickHandler: wrappedOnClick });
  }

  render() {
    const { slide, className } = this.props;
    const outerClasses = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(
    className,
    'carousel',
    slide && 'slide');


    const innerClasses = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(
    'carousel-inner');


    let carouselItems = [],
    controlLeft = null,
    controlRight = null,
    indicators = null;

    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(this.props.children, child => {
      switch (child.type) {
        case __WEBPACK_IMPORTED_MODULE_3__CarouselItem__["a" /* default */]:carouselItems.push(child);break;
        case __WEBPACK_IMPORTED_MODULE_4__CarouselControl__["a" /* default */]:
          child.props.direction === 'prev' ? controlLeft = child : controlRight = child;
          break;
        case __WEBPACK_IMPORTED_MODULE_5__CarouselIndicators__["a" /* default */]:indicators = child;break;}

    });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
        indicators && this.renderIndicators(indicators),
        !_.isEmpty(carouselItems) && this.renderItems(carouselItems, innerClasses),
        controlLeft,
        controlRight));


  }};


Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,

  // a function which should advance the carousel to the next slide (via activeIndex)
  next: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,

  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,

  // controls if the left and right arrow keys should control the carousel
  keyboard: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
                             * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
                             */
  pause: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['hover', false]),

  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['carousel']),

  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([
  __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool]),

  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,

  // called when the mouse enters the Carousel
  mouseEnter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  // called when the mouse exits the Carousel
  mouseLeave: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  // controls whether the slide animation on the Carousel works or not
  slide: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string };


Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true };


Carousel.childContextTypes = {
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string };


/* harmony default export */ __webpack_exports__["a"] = (Carousel);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(1033));

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactDom = _interopRequireDefault(__webpack_require__(23));

var _reactLifecyclesCompat = __webpack_require__(1044);

var _PropTypes = __webpack_require__(1630);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  false ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    var pt = process.env.NODE_ENV !== "production" ? _PropTypes.timeoutsShape : {};;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),

/***/ 1628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(1629);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 1629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 1630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.transitionTimeout = transitionTimeout;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(1033));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;
  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.'); // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number
}).isRequired]);

exports.timeoutsShape = timeoutsShape;

var classNamesShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]);

exports.classNamesShape = classNamesShape;

/***/ }),

/***/ 1631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
const TransitionTimeouts = {
  Fade: 150, // $transition-fade
  Collapse: 350, // $transition-collapse
  Modal: 300, // $modal-transition
  Carousel: 600 // $carousel-transition
};
/* harmony export (immutable) */ __webpack_exports__["b"] = TransitionTimeouts;


const TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited' };
/* harmony export (immutable) */ __webpack_exports__["a"] = TransitionStatuses;


/***/ }),

/***/ 1632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ForwardIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(18);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '38', viewBox: '0 0 16 38' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { fill: 'none', fillRule: 'nonzero', stroke: '#ECECEC', d: 'M1 0l14.308 18.758L1 37.516' }));



function ForwardIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 1633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = BackIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(18);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '38', viewBox: '0 0 16 38' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { fill: 'none', fillRule: 'nonzero', stroke: '#ECECEC', d: 'M15.308 0L1 18.758l14.308 18.758' }));



function BackIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("electron");

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

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(1);
var factory = __webpack_require__(710);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ 286:
/***/ (function(module, exports) {

var CONSTANTS = {

  // Positions
  positions: {
    tl: 'tl',
    tr: 'tr',
    tc: 'tc',
    bl: 'bl',
    br: 'br',
    bc: 'bc'
  },

  // Levels
  levels: {
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'info'
  },

  // Notification defaults
  notification: {
    title: null,
    message: null,
    level: null,
    position: 'tr',
    autoDismiss: 5,
    dismissible: 'both',
    action: null
  }
};


module.exports = CONSTANTS;


/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 3511:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3512);


/***/ }),

/***/ 3512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime_components_runner_Runner__ = __webpack_require__(3513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__init__ = __webpack_require__(3544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_runner_scss__ = __webpack_require__(3546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_runner_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_runner_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_TelemetryHelpers__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_empty_states_CrashHandler__ = __webpack_require__(203);









if (false) {
  window.React = React;
} else
{
  window.onbeforeunload = () => {
    return false;
  };
}

const rootEl = document.getElementsByClassName('app-root')[0];

__WEBPACK_IMPORTED_MODULE_3__init__["a" /* default */].init(err => {

  if (err) {
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_empty_states_CrashHandler__["a" /* default */], { showError: true }), rootEl);
    return;
  }

  Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_empty_states_CrashHandler__["a" /* default */], null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__runtime_components_runner_Runner__["a" /* default */], null)),

  rootEl,
  () => {
    let loadTime = Object(__WEBPACK_IMPORTED_MODULE_5__utils_TelemetryHelpers__["a" /* getWindowLoadTime */])();
    __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('app_performance_metric', 'runner_window_loaded', null, null, { load_time: loadTime });
  });

});

/***/ }),

/***/ 3513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Runner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_notification_system__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_notification_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_notification_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_constants_AppNotificationStylesForRunner__ = __webpack_require__(3514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_components_base_keymaps_KeyMaps__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_components_base_XPaths_XPathProvider__ = __webpack_require__(1614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RunnerHeader_RunnerHeader__ = __webpack_require__(3515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RunnerRun_RunnerRun__ = __webpack_require__(3516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RunnerResults_RunnerResults__ = __webpack_require__(3532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__RunnerSummary_RunnerSummary__ = __webpack_require__(3538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__js_containers_workspaces_MissingCurrentWorkspaceModalContainer__ = __webpack_require__(1623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_RunnerConstants__ = __webpack_require__(314);
var _class;

















const keyMap = {
  increaseUIZoom: 'mod+=',
  decreaseUIZoom: 'mod+-',
  resetUIZoom: 'mod+0' },

keyHandler = {
  increaseUIZoom: () => {pm.uiZoom.increase();},
  decreaseUIZoom: () => {pm.uiZoom.decrease();},
  resetUIZoom: () => {pm.uiZoom.reset();} };let



Runner = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class Runner extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleRunAction = this.handleRunAction.bind(this);

    // Setup store references to start with
    this.store = Object(__WEBPACK_IMPORTED_MODULE_3__js_stores_get_store__["getStore"])('RunnerStore');
  }

  componentDidMount() {
    pm.toasts.setNotificationComponent(this.refs.notificationSystem);
  }

  getContent() {
    if (this.store.activeTab === __WEBPACK_IMPORTED_MODULE_12__constants_RunnerConstants__["e" /* RUNNER_TAB_RUN */]) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__RunnerRun_RunnerRun__["a" /* default */], { onOpenRun: this.handleSelect });
    }

    if (this.store.activeTab === __WEBPACK_IMPORTED_MODULE_12__constants_RunnerConstants__["d" /* RUNNER_TAB_RESULTS */]) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__RunnerResults_RunnerResults__["a" /* default */], {
          onOpenRun: this.handleSelect,
          onTabChange: this.handleTabChange,
          onRunAction: this.handleRunAction }));


    }

    if (this.store.activeTab === __WEBPACK_IMPORTED_MODULE_12__constants_RunnerConstants__["f" /* RUNNER_TAB_SUMMARY */]) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__RunnerSummary_RunnerSummary__["a" /* default */], {
          onOpenRun: this.handleSelect,
          onTabChange: this.handleTabChange,
          onRunAction: this.handleRunAction }));


    }
  }

  handleRunAction(action) {
    switch (action) {
      case 'pause':
        this.store.pauseRun();
        break;

      case 'resume':
        this.store.resumeRun();
        break;

      case 'stop':
        this.store.stopRun();
        break;

      case 'retry':
        this.store.retryRun();
        break;

      default:break;}

  }


  handleTabChange(tab) {
    this.store.setActiveTab(tab);
  }

  handleSelect(runId) {
    this.store.setSelectedRun(runId);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_XPaths_XPathProvider__["a" /* default */], { identifier: 'runner' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_keymaps_KeyMaps__["a" /* default */], { handlers: keyHandler, keyMap: keyMap },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'app-runner' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'dropdown-root', style: { width: 0, height: 0 } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__RunnerHeader_RunnerHeader__["a" /* default */], {
              activeTab: this.store.activeTab,
              onTabChange: this.handleTabChange }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-contents' },
              this.getContent()),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_notification_system___default.a, {
              allowHTML: true,
              ref: 'notificationSystem',
              style: __WEBPACK_IMPORTED_MODULE_4__js_constants_AppNotificationStylesForRunner__["a" /* default */] }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__js_containers_workspaces_MissingCurrentWorkspaceModalContainer__["a" /* default */], null)))));




  }}) || _class;

/***/ }),

/***/ 3514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppNotificationStyles__ = __webpack_require__(715);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

/* harmony default export */ __webpack_exports__["a"] = (_extends({},
__WEBPACK_IMPORTED_MODULE_0__AppNotificationStyles__["a" /* default */], {
  Containers: {
    DefaultStyle: {
      zIndex: 110,
      width: 360 },

    tr: { bottom: '0px', top: 'unset' } } }));

/***/ }),

/***/ 3515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_containers_workspaces_WorkspaceSwitcherContainer__ = __webpack_require__(1606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_external_navigation_ExternalNavigationService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_RunnerConstants__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_constants_AppUrlConstants__ = __webpack_require__(67);









let

RunnerHeader = class RunnerHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);

    this.handleNewmanLink = this.handleNewmanLink.bind(this);
    this.handleDocsLink = this.handleDocsLink.bind(this);
  }

  handleNewmanLink() {
    Object(__WEBPACK_IMPORTED_MODULE_3__js_external_navigation_ExternalNavigationService__["a" /* openExternalLink */])('https://www.npmjs.com/package/newman');
  }

  handleDocsLink() {
    Object(__WEBPACK_IMPORTED_MODULE_3__js_external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_5__js_constants_AppUrlConstants__["_6" /* RUNNER_DOCS */]);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__tab runner-header__section-left__tab--runner' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-header__section-left__runner',
                onClick: this.props.onTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_4__constants_RunnerConstants__["e" /* RUNNER_TAB_RUN */]) }, 'Collection Runner')),






          (this.props.activeTab === __WEBPACK_IMPORTED_MODULE_4__constants_RunnerConstants__["d" /* RUNNER_TAB_RESULTS */] || this.props.activeTab === __WEBPACK_IMPORTED_MODULE_4__constants_RunnerConstants__["f" /* RUNNER_TAB_SUMMARY */]) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__tab runner-header__section-left__tab--results' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__arrow runner-header__section-left__results-pre-arrow' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-header__section-left__results',
                onClick: this.props.onTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_4__constants_RunnerConstants__["d" /* RUNNER_TAB_RESULTS */]) }, 'Run Results'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__arrow runner-header__section-left__results-post-arrow' })),





          this.props.activeTab === __WEBPACK_IMPORTED_MODULE_4__constants_RunnerConstants__["f" /* RUNNER_TAB_SUMMARY */] &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__tab runner-header__section-left__tab--summary' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__arrow runner-header__section-left__summary-pre-arrow' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-header__section-left__summary',
                onClick: this.props.onTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_4__constants_RunnerConstants__["f" /* RUNNER_TAB_SUMMARY */]) }, 'Run Summary'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__arrow runner-header__section-left__summary-post-arrow' }))),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-center' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_containers_workspaces_WorkspaceSwitcherContainer__["a" /* default */], null)),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-header__section-right__newman',
              size: 'small',
              type: 'secondary',
              onClick: this.handleNewmanLink }, 'Run In Command Line'),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-header__section-right__docs',
              size: 'small',
              type: 'secondary',
              onClick: this.handleDocsLink }, 'Docs'))));






  }};

/***/ }),

/***/ 3516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRun; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RunSelector_RunnerRunsSelector__ = __webpack_require__(3517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RecentRuns_RunnerRecentRuns__ = __webpack_require__(3524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RunCustomizer_RunnerRunsCustomizer__ = __webpack_require__(3529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_stores_get_store__ = __webpack_require__(5);
var _class;





let



RunnerRun = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class RunnerRun extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    // Let get the reference to the store
    this.store = Object(__WEBPACK_IMPORTED_MODULE_5__js_stores_get_store__["getStore"])('RunnerSelectionStore');
  }

  isCollectionSelected() {
    return !!_.get(this.store, 'selection.collection');
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__RunSelector_RunnerRunsSelector__["a" /* default */], null),
        this.isCollectionSelected() ?

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RunCustomizer_RunnerRunsCustomizer__["a" /* default */], null) :


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RecentRuns_RunnerRecentRuns__["a" /* default */], { onOpenRun: this.props.onOpenRun })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRunsSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_components_explorer_RunnerCollectionExplorer__ = __webpack_require__(3518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_components_base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_components_base_Tooltips__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_components_base_Inputs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_components_base_InputSelect__ = __webpack_require__(3519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_components_base_SearchHighlighter__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_components_base_Icons_CloseIcon__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__js_components_base_Icons_InformationIcon__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_RunnerConstants__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__RunnerSelectorFilePreview__ = __webpack_require__(3520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__js_stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__base_atom__ = __webpack_require__(3521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__helpers_RunnerHelper__ = __webpack_require__(361);
var _class;
















const keyMap = { start: 'meta+enter' };let


RunnerRunsSelector = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class RunnerRunsSelector extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      dataArray: [],
      isPreviewModalOpen: false,
      isLogResTooltipVisible: false,
      isVariableTooltipVisible: false,
      isSaveCookiesTooltipVisible: false };


    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleFilePreview = this.handleFilePreview.bind(this);
    this.handleCloseFilePreview = this.handleCloseFilePreview.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
    this.handleEnvSelect = this.handleEnvSelect.bind(this);
    this.handleStartRun = this.handleStartRun.bind(this);

    this.store = Object(__WEBPACK_IMPORTED_MODULE_13__js_stores_get_store__["getStore"])('RunnerSelectionStore');
  }

  getKeyMapHandlers() {
    return { start: this.handleStartRun };
  }

  getSelectedEnvironment() {
    const environments = this.getEnvironments(),
    environment = _.find(environments, ['id', this.store.selection.environment]),
    envName = environment ? environment.name : '';

    return envName;
  }

  getDataArray(callback) {
    if (!this.store.selection.dataFile) {
      return callback('No file selected');
    }

    return Object(__WEBPACK_IMPORTED_MODULE_15__helpers_RunnerHelper__["d" /* readFile */])(this.store.selection.dataFile, (err, data) => {
      if (err) {
        pm.toasts.error(err);

        return callback(err);
      }

      return callback(null, data);
    });
  }

  getCollections() {
    return this.store.collections;
  }

  getEnvironments() {
    return _.sortBy(this.store.environments, environment => _.toLower(environment.name));
  }

  getTooltipText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  handleChange(key, value) {
    this.store.selection.change(key, value);
  }

  handleFileSelect(fileList) {
    if (_.isEmpty(fileList)) {
      this.refs.dataFile && this.refs.dataFile.clear();
    }

    this.handleChange('data', fileList);
  }

  handleFilePreview() {
    this.getDataArray((err, dataArray) => {
      if (!err) {
        this.setState({
          dataArray,
          isPreviewModalOpen: true });

      }
    });
  }

  handleCloseFilePreview() {
    this.setState({ dataArray: [], isPreviewModalOpen: false });
  }

  handleStartRun() {
    this.store.startRun();
  }

  showTooltip(tooltipKey) {
    this.setState({ [tooltipKey]: true });
  }

  hideTooltip(tooltipKey) {
    this.setState({ [tooltipKey]: false });
  }

  handleEnvSelect(selectionIndex) {
    const environments = this.getEnvironments();

    let selectedEnvId = null;

    if (selectionIndex > 0 && selectionIndex <= environments.length) {
      selectedEnvId = environments[selectionIndex - 1].id;
    }

    this.handleChange('environment', selectedEnvId);
  }

  renderEnvItem(list, index, search) {
    const name = index === 0 ? 'No Environment' : list[index - 1].name;

    if (search) {
      if (!_.includes(name.toLowerCase(), search.toLowerCase())) {
        return null;
      }

      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-select-item' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__js_components_base_SearchHighlighter__["a" /* default */], {
            source: name,
            query: search })));



    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-select-item' }, name);
  }

  render() {
    let selectedEnvIndex = 0;

    const collections = this.getCollections(),
    environments = this.getEnvironments(),
    { selection } = this.store;

    if (selection.environment) {
      selectedEnvIndex = _.findIndex(environments, env => env.id === selection.environment) + 1;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__base_atom__["a" /* KeyMaps */], {
          handlers: this.getKeyMapHandlers(),
          keyMap: keyMap },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item runner-runs-selector__item--target' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--target' }, 'Choose a collection or folder'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_explorer_RunnerCollectionExplorer__["a" /* default */], {
              selection: selection,
              collections: collections,
              loading: this.store.isHydrating || selection.loading })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item  runner-runs-selector__item--environment' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--environment' }, 'Environment'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__js_components_base_InputSelect__["a" /* InputSelect */], {
              className: 'runner-runs-selector__environment',
              hideCancelOnBlur: true,
              selectAllOnFocus: true,
              showToggleButton: true,
              defaultIndex: selectedEnvIndex === -1 ? 0 : selectedEnvIndex,
              getInputValue: index => index === 0 ? 'No Environment' : _.get(environments[index - 1], 'name', ''),
              isSearchable: index => index > 0,
              optionCount: _.size(environments) + 1,
              optionRenderer: (index, search) => this.renderEnvItem(environments, index, search),
              onSelect: this.handleEnvSelect })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item runner-runs-selector__item--iterations' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--iterations' }, 'Iterations'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_Inputs__["b" /* Input */], {
              className: 'runner-runs-selector__item__value runner-runs-selector__item__value--iterations',
              inputStyle: 'box',
              type: 'text',
              value: selection.iterations,
              onChange: this.handleChange.bind(this, 'iterations') })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item runner-runs-selector__item--delay' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--delay' }, 'Delay'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_Inputs__["b" /* Input */], {
              className: 'runner-runs-selector__item__value runner-runs-selector__item__value--delay',
              inputStyle: 'box',
              type: 'text',
              value: selection.delay,
              onChange: this.handleChange.bind(this, 'delay') }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__postfix runner-runs-selector__postfix--delay' }, 'ms')),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item runner-runs-selector__item--data-file' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--data-file' }, 'Data'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_Buttons__["a" /* Button */], {
                className: 'runner-runs-selector__item__value runner-runs-selector__item__value--data-file',
                size: 'small',
                type: 'secondary' }, 'Select File'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_Inputs__["b" /* Input */], {
              className: 'runner-runs-selector__item__value runner-runs-selector__item__value--data-file',
              type: 'file',
              ref: 'dataFile',
              onChange: this.handleFileSelect }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__postfix runner-runs-selector__postfix--data-file' },
              _.get(selection, 'dataFile.name', '')),


            selection.dataFile &&

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_Buttons__["a" /* Button */], {
                className: 'runner-runs-selector__postfix--data-file-remove',
                type: 'icon',
                onClick: this.handleFileSelect.bind(this, []),
                tooltip: 'Remove selected file' },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__js_components_base_Icons_CloseIcon__["a" /* default */], { className: 'runner-runs-selector__postfix--data-file-remove-icon' }))),






          selection.dataFile &&

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item runner-runs-selector__item--data-file-type' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--data-file-type' }, 'Data File Type'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Dropdowns__["a" /* Dropdown */], {
                className: 'runner-runs-selector__item__value runner-runs-selector__item__value--data-file-type',
                onSelect: this.handleChange.bind(this, 'dataType') },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Dropdowns__["b" /* DropdownButton */], {
                  size: 'small',
                  type: 'secondary' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_Buttons__["a" /* Button */], { className: 'runner-runs-selector__item__value--data-file-type__selected' },
                  selection.fileType || __WEBPACK_IMPORTED_MODULE_11__constants_RunnerConstants__["c" /* RUNNER_DATA_FILE_TYPE_UNDETERMINED */])),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Dropdowns__["c" /* DropdownMenu */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_11__constants_RunnerConstants__["b" /* RUNNER_DATA_FILE_TYPE_JSON */], className: 'dropdown-menu-item--JSON' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, __WEBPACK_IMPORTED_MODULE_11__constants_RunnerConstants__["b" /* RUNNER_DATA_FILE_TYPE_JSON */])),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_11__constants_RunnerConstants__["a" /* RUNNER_DATA_FILE_TYPE_CSV */], className: 'dropdown-menu-item--CSV' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, __WEBPACK_IMPORTED_MODULE_11__constants_RunnerConstants__["a" /* RUNNER_DATA_FILE_TYPE_CSV */])),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_11__constants_RunnerConstants__["c" /* RUNNER_DATA_FILE_TYPE_UNDETERMINED */], className: 'dropdown-menu-item--Undetermined' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, __WEBPACK_IMPORTED_MODULE_11__constants_RunnerConstants__["c" /* RUNNER_DATA_FILE_TYPE_UNDETERMINED */])))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_Buttons__["a" /* Button */], {
                className: 'runner-runs-selector__item__value--data-file-preview',
                size: 'small',
                type: 'secondary',
                onClick: this.handleFilePreview }, 'Preview')),







          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__RunnerSelectorFilePreview__["a" /* default */], {
            dataArray: this.state.dataArray,
            isOpen: this.state.isPreviewModalOpen,
            handleClose: this.handleCloseFilePreview }),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item runner-runs-selector__item--response' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--response' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_Inputs__["a" /* Checkbox */], {
                checked: selection.saveResponse,
                onChange: this.handleChange.bind(this, 'saveResponse') })),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-runs-selector__item__value runner-runs-selector__item__value--response',
                onClick: this.handleChange.bind(this, 'persist', !selection.saveResponse) }, 'Save responses'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__postfix runner-runs-selector__postfix--response' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'runner-runs-selector__postfix-icon runner-runs-selector__postfix-icon--response',
                  ref: 'logResTooltipTarget',
                  onMouseEnter: this.showTooltip.bind(this, 'isLogResTooltipVisible'),
                  onMouseLeave: this.hideTooltip.bind(this, 'isLogResTooltipVisible') },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__js_components_base_Icons_InformationIcon__["a" /* default */], {
                  className: 'runner-runs-selector__postfix-icon' })),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Tooltips__["a" /* Tooltip */], {
                  show: this.state.isLogResTooltipVisible,
                  target: this.refs.logResTooltipTarget,
                  placement: 'right',
                  className: 'runner-runs-selector__postfix-tooltip',
                  immediate: true },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Tooltips__["b" /* TooltipBody */], null, 'Logging responses allows you to view response headers and bodies for the request. This might impact performance on larger collection runs.')))),







          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item  runner-runs-selector__item--persist' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--persist' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_Inputs__["a" /* Checkbox */], {
                checked: selection.persist,
                onChange: this.handleChange.bind(this, 'persist') })),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-runs-selector__item__value runner-runs-selector__item__value--persist',
                onClick: this.handleChange.bind(this, 'persist', !selection.persist) }, 'Keep variable values'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__postfix runner-runs-selector__postfix--persist' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'runner-runs-selector__postfix-icon runner-runs-selector__postfix-icon--persist',
                  ref: 'variableTooltipTarget',
                  onMouseEnter: this.showTooltip.bind(this, 'isVariableTooltipVisible'),
                  onMouseLeave: this.hideTooltip.bind(this, 'isVariableTooltipVisible') },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__js_components_base_Icons_InformationIcon__["a" /* default */], {
                  className: 'runner-runs-selector__postfix-icon' })),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Tooltips__["a" /* Tooltip */], {
                  show: this.state.isVariableTooltipVisible,
                  target: this.refs.variableTooltipTarget,
                  placement: 'right',
                  className: 'runner-runs-selector__postfix-tooltip',
                  immediate: true },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Tooltips__["b" /* TooltipBody */], null, 'Enabling this will write the value of the variables at the end of the run to its current value in the session.')))),







          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item  runner-runs-selector__item--initial-cookies' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--initial-cookies' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_Inputs__["a" /* Checkbox */], {
                checked: selection.runWithEmptyCookieJar,
                onChange: this.handleChange.bind(this, 'runWithEmptyCookieJar') })),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-runs-selector__item__value runner-runs-selector__item__value--initial-cookies',
                onClick: this.handleChange.bind(this, 'runWithEmptyCookieJar', !selection.runWithEmptyCookieJar) }, 'Run collection without using stored cookies')),





          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item  runner-runs-selector__item--save-cookies' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--save-cookies' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_Inputs__["a" /* Checkbox */], {
                checked: selection.saveCookiesAfterRun,
                onChange: this.handleChange.bind(this, 'saveCookiesAfterRun') })),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-runs-selector__item__value runner-runs-selector__item__value--save-cookies',
                onClick: this.handleChange.bind(this, 'saveCookiesAfterRun', !selection.saveCookiesAfterRun) }, 'Save cookies after collection run'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__postfix runner-runs-selector__postfix--save-cookies' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'runner-runs-selector__postfix-icon runner-runs-selector__postfix-icon--save-cookies',
                  ref: 'saveCookiesTooltipTarget',
                  onMouseEnter: this.showTooltip.bind(this, 'isSaveCookiesTooltipVisible'),
                  onMouseLeave: this.hideTooltip.bind(this, 'isSaveCookiesTooltipVisible') },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__js_components_base_Icons_InformationIcon__["a" /* default */], {
                  className: 'runner-runs-selector__postfix-icon' })),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Tooltips__["a" /* Tooltip */], {
                  show: this.state.isSaveCookiesTooltipVisible,
                  target: this.refs.saveCookiesTooltipTarget,
                  placement: 'right',
                  className: 'runner-runs-selector__postfix-tooltip',
                  immediate: true },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Tooltips__["b" /* TooltipBody */], null, 'Update the cookies stored in this session and save them to your cookie manager.')))),






          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-runs-selector__start-test',
              disabled: !selection.isRunnable,
              type: 'primary',
              onClick: this.handleStartRun,
              tooltip: this.getTooltipText(!selection.isPermitted) },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, selection.collectionName ? `Run ${selection.collectionName}` : 'Start Run')))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerCollectionExplorer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Explorer__ = __webpack_require__(1615);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;




const flattenNode = function (flattened, node, depth, map) {
  if (!node) {
    return flattened;
  }

  flattened.push(node);

  _.each(node.folders_order, folderId => {
    let folder = map.folders.get(folderId);
    if (folder) {
      folder.type = 'folder';
      folder.depth = depth + 1;
      flattenNode(flattened, folder, depth + 1, map);
    }
  });

  _.each(node.order, requestId => {
    let request = map.requests.get(requestId);
    if (request) {
      request.type = 'request';
      request.depth = depth + 1;
      flattened.push(request);
    }
  });

  return flattened;
};

const flattenCollection = function (collection, folders, requests) {
  collection.type = 'collection';
  collection.depth = 0;
  return flattenNode([], collection, 0, { folders, requests });
};let


RunnerCollectionExplorer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class RunnerCollectionExplorer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // If the loading state is transitioning from loading to not-Loading then reset initial target
    if (this.props.loading && !nextProps.loading) {
      this.resetTarget(nextProps.selection);
    }
  }

  componentDidMount() {
    this.resetTarget();
  }

  resetTarget(initialSelection = this.props.selection) {
    let item = { id: null, depth: -1 };

    if (_.get(initialSelection, 'collection')) {
      item = initialSelection.$collection;
      item.depth = 0;
    }

    if (_.get(initialSelection, 'folder')) {
      item = initialSelection.folders.get(initialSelection.folder);
    }

    item && setTimeout(() => {
      this.refs.explorer && this.refs.explorer.handleSelect(item);
    }, 0);
  }

  handleSelect(target) {
    this.props.selection.change('target', target);
  }

  getLeafIcon(node) {
    let method = node.method ? node.method.toUpperCase() : 'GET';
    let classes = `explorer-row__icon-leaf-icon request-method--${method}`;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes },
        node.method));


  }

  render() {
    let collections = _.map(this.props.collections, collection => {
      // Let do a bit of hacky optimization here.
      // If collection is not present in the target selection then, lets just return
      if (collection.id !== this.props.selection.collection) {
        return [_extends({ type: 'collection', depth: 0 }, collection)];
      }

      return flattenCollection(_extends({}, collection), this.props.selection.folders, this.props.selection.requests);
    });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-explorer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Explorer__["a" /* default */], {
          disableCreate: true,
          isLeaf: target => {return target.type === 'request';},
          leafIcon: this.getLeafIcon,
          ref: 'explorer',
          targets: _.flatten(collections),
          onBack: this.handleSelect,
          onSelect: this.handleSelect,
          loading: this.props.loading })));



  }}) || _class;


RunnerCollectionExplorer.defaultProps = {
  loadingCollections: false };


RunnerCollectionExplorer.propTypes = {
  disableCreate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  initialSelection: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  onCreate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onFilter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  loadingCollections: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Inputs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__ = __webpack_require__(68);








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

/***/ 3520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerPreviewDataModalContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_components_base_Modals__ = __webpack_require__(157);
var _class;

let


RunnerPreviewDataModalContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RunnerPreviewDataModalContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  getCustomStyles() {
    return {
      marginTop: '10vh',
      height: '80vh',
      width: '700px' };

  }

  handleClose() {
    this.props.handleClose && this.props.handleClose();
  }

  computeKeysArray() {
    const { dataArray } = this.props,
    keys = ['Iteration'];

    if (_.isEmpty(dataArray)) {
      return keys;
    }

    Object.keys(dataArray[0]).forEach(key => {
      keys.push(key);
    });

    return keys;
  }

  stringifyParsedValue(value) {
    return JSON.stringify(value);
  }

  render() {
    const keys = this.computeKeysArray(),
    { dataArray } = this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Modals__["a" /* Modal */], {
          isOpen: this.props.isOpen,
          onRequestClose: this.handleClose,
          customStyles: this.getCustomStyles() },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Modals__["d" /* ModalHeader */], null, 'PREVIEW DATA'),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Modals__["b" /* ModalContent */], null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'preview-data-modal-content-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'preview-data-header-wrapper' },

              _.map(keys, (key, index) =>
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'preview-data-header',
                  key: String(key) + index },

                key))),





            dataArray && dataArray.length > 0 &&
            _.map(dataArray, (data, dataIndex) =>
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'preview-data-header-wrapper',
                key: `header${dataIndex}` },


              _.map(keys, (key, index) =>
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'preview-data-value',
                  key: String(key) + index + dataIndex },


                index === 0 ?
                dataIndex + 1 :
                this.stringifyParsedValue(data[key])))))))));











  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_components_base_Accordion_Accordion__ = __webpack_require__(861);
/* unused harmony reexport Accordion */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_components_base_Accordion_AccordionItem__ = __webpack_require__(862);
/* unused harmony reexport AccordionItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_components_base_Breadcrumb__ = __webpack_require__(1612);
/* unused harmony reexport Breadcrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__ = __webpack_require__(13);
/* unused harmony reexport Button */
/* unused harmony reexport ButtonGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_components_base_Carousel_Carousel__ = __webpack_require__(1626);
/* unused harmony reexport Carousel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_components_base_diff_Diff__ = __webpack_require__(1040);
/* unused harmony reexport Diff */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_components_base_EditableTag__ = __webpack_require__(1050);
/* unused harmony reexport EditableTag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_components_base_EmptyListMessage__ = __webpack_require__(1621);
/* unused harmony reexport EmptyListMessage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_components_base_ExpandableTooltip__ = __webpack_require__(1541);
/* unused harmony reexport ExpandableTooltip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_components_base_FileInput__ = __webpack_require__(577);
/* unused harmony reexport FileInput */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__js_components_base_FolderButton__ = __webpack_require__(1542);
/* unused harmony reexport FolderButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__js_components_base_FuzzySearchInput__ = __webpack_require__(1016);
/* unused harmony reexport FuzzySearchInput */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__js_components_base_IframeViewer__ = __webpack_require__(882);
/* unused harmony reexport IframeViewer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__js_components_base_Image__ = __webpack_require__(1360);
/* unused harmony reexport Image */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__js_components_base_InfoButton__ = __webpack_require__(184);
/* unused harmony reexport InfoButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__js_components_base_InlineInput__ = __webpack_require__(566);
/* unused harmony reexport InlineInput */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__js_components_base_List__ = __webpack_require__(3522);
/* unused harmony reexport List */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__js_components_base_ListCarousal__ = __webpack_require__(3523);
/* unused harmony reexport ListCarousal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__js_components_base_LoadingIndicator__ = __webpack_require__(53);
/* unused harmony reexport LoadingIndicator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__js_components_base_MultiSelectEntity__ = __webpack_require__(1568);
/* unused harmony reexport MultiSelectEntity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__js_components_base_PasswordInput__ = __webpack_require__(1567);
/* unused harmony reexport PasswordInput */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__js_components_base_PieProgress__ = __webpack_require__(1613);
/* unused harmony reexport PieProgress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__js_components_base_ProgressBar__ = __webpack_require__(1557);
/* unused harmony reexport ProgressBar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__js_components_base_RadialProgress__ = __webpack_require__(1543);
/* unused harmony reexport RadialProgress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__js_components_base_RightOverlayModal__ = __webpack_require__(153);
/* unused harmony reexport RightOverlayModal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__js_components_base_SearchHighlighter__ = __webpack_require__(387);
/* unused harmony reexport SearchHighlighter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__js_components_base_SortableTable__ = __webpack_require__(1625);
/* unused harmony reexport SortableTable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__js_components_base_Tag__ = __webpack_require__(1558);
/* unused harmony reexport Tag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__js_components_base_TextArea__ = __webpack_require__(690);
/* unused harmony reexport TextArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__js_components_base_ToggleSwitch__ = __webpack_require__(688);
/* unused harmony reexport ToggleSwitch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__js_components_base_VariableRowDropdown__ = __webpack_require__(879);
/* unused harmony reexport VariableRowDropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__js_components_base_WarningButton__ = __webpack_require__(388);
/* unused harmony reexport WarningButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__js_components_base_keymaps_KeyMaps__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_32__js_components_base_keymaps_KeyMaps__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__js_components_base_XPaths_XPath__ = __webpack_require__(24);
/* unused harmony reexport XPath */



































/***/ }),

/***/ 3522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);



let

List = class List extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor() {
    super();

    this.state = {
      actualStart: 0,
      startItem: 0,
      actualEnd: 0,
      endItem: 0 };


    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.startItem !== this.state.startItem) {
      this.props.onItemRender && this.props.onItemRender(nextState.startItem, nextState.endItem);
    }

    let me = this.refs.list;
    this.shouldScroll = me.scrollTop + me.offsetHeight === me.scrollHeight;
  }

  componentDidUpdate(prevProps) {
    if (this.shouldScroll && this.props.autoScroll && !_.isEqual(this.props.list, prevProps.list)) {
      this.handleScroll();
    }
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'pm-list': true,
      [`${this.props.className}`]: true });

  }

  _scrollAnimated(scrollStart, scrollEnd) {
    let me = this.refs.list,
    currentTime = 0,
    step,
    distance,
    duration = 1000,
    increment = 0;

    if (scrollStart < scrollEnd) {
      distance = scrollEnd - scrollStart;
      step = () => {
        currentTime += 1;
        increment = __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* default */].easeInOutQuad(currentTime, 0, distance, duration) * distance;
        if (me.scrollTop + increment >= scrollEnd) {
          me.scrollTop = scrollEnd + (scrollEnd ? 10 : 0); // TODO:: Hack. fix this later
          this.handleScroll({ currentTarget: { scrollTop: scrollEnd } });
          return;
        }
        me.scrollTop += increment;
        this.handleScroll({ currentTarget: { scrollTop: me.scrollTop + increment } });
        window.requestAnimationFrame(step);
      };

      window.requestAnimationFrame(step);
    } else
    {
      distance = scrollStart - scrollEnd;
      step = () => {
        currentTime += 1;
        increment = __WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* default */].easeInOutQuad(currentTime, 0, distance, duration) * distance;
        if (me.scrollTop - increment <= scrollEnd) {
          me.scrollTop = scrollEnd + (scrollEnd ? 10 : 0); // TODO:: Hack. fix this later
          this.handleScroll({ currentTarget: { scrollTop: scrollEnd } });
          return;
        }
        me.scrollTop -= increment;
        this.handleScroll({ currentTarget: { scrollTop: me.scrollTop - increment } });
        window.requestAnimationFrame(step);
      };
    }

    window.requestAnimationFrame(step);
  }

  scroll({ itemIndex, scrollPosition }) {
    let endScroll,
    me = this.refs.list;

    endScroll = _.isUndefined(scrollPosition) ?
    _.reduce(_.range(0, itemIndex), (total, index) => {
      return total + this.props.listItemHeights[index];
    }, 0) :
    scrollPosition;

    if (this.props.animateScroll) {
      this._scrollAnimated(me.scrollTop, endScroll);
    } else
    {
      me.scrollTop = endScroll;
      this.handleScroll({ currentTarget: { scrollTop: endScroll } });
    }
  }

  handleScroll(e) {
    let {
      list,
      listItemHeights,
      height } =
    this.props;

    let scrollPosition = _.get(e, ['currentTarget', 'scrollTop'], 0),
    totalHeight = 0,
    firstVisibleListItem,
    lastVisibleListItem;

    _.some(list, (listItem, index) => {
      totalHeight += listItemHeights[index];

      if (totalHeight > scrollPosition) {
        firstVisibleListItem = _.isUndefined(firstVisibleListItem) ? index : firstVisibleListItem;
        if (totalHeight > this.props.height + scrollPosition) {
          lastVisibleListItem = index + 1;
          return true;
        }
      }
      return false;
    });

    // Buffers
    let averageItemHeight = _.max(_.slice(listItemHeights, firstVisibleListItem, lastVisibleListItem)) || this.props.height,
    bufferHeight = this.props.height * 0.5;

    firstVisibleListItem = _.isUndefined(firstVisibleListItem) ? 0 : firstVisibleListItem;
    lastVisibleListItem = _.isUndefined(lastVisibleListItem) ? firstVisibleListItem + Math.ceil(height / averageItemHeight) : lastVisibleListItem;

    let actualStart = Math.max(firstVisibleListItem - Math.ceil(bufferHeight / averageItemHeight), 0),
    actualEnd = Math.min(lastVisibleListItem + Math.ceil(bufferHeight / averageItemHeight), list.length);

    this.setState({
      actualStart: actualStart,
      startItem: firstVisibleListItem,
      actualEnd: actualEnd,
      endItem: lastVisibleListItem });

  }

  getPlaceholderHeights() {
    // These are the cumulative heights of the buffers at the top and bottom
    return {
      top: _.reduce(_.range(0, this.state.actualStart), (total, index) => {
        return total + this.props.listItemHeights[index];
      }, 0) || 0,
      bottom: _.reduce(_.range(this.state.actualEnd, this.props.list.length), (total, index) => {
        return total + this.props.listItemHeights[index];
      }, 0) || 0 // this.props.list.length
    };
  }

  render() {
    let placeholderHeights = this.getPlaceholderHeights();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          'data-iter': this.props['data-iter'],
          className: this.getClasses(),
          style: { height: this.props.height },
          ref: 'list',
          onScroll: this.handleScroll },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'buffer-top',
          style: { height: placeholderHeights.top } }),


        _.map(_.range(this.state.actualStart, this.state.actualEnd), index => {
          return this.props.listItemTemplate(this.props.list[index], index);
        }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'buffer-bottom',
          style: { height: placeholderHeights.bottom } })));



  }};


List.propTypes = {
  animateScroll: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  autoScroll: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  height: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired,
  list: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array.isRequired,
  listItemTemplate: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired,
  listItemHeights: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array.isRequired,
  onItemRender: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_keymaps_KeyMaps__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons_LeftSolidIcon__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons_RightSolidIcon__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);





let

ListCarousal = class ListCarousal extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
  }

  getKeyMapHandlers() {
    return {
      'leftCell': pm.shortcuts.handle('leftCell', this.handlePreviousButtonClick),
      'rightCell': pm.shortcuts.handle('rightCell', this.handleNextButtonClick) };

  }

  handlePreviousButtonClick() {
    if (this.props.currentIndex === 0) {
      return;
    }
    this.props.onChange(this.props.currentIndex - 1);
  }

  handleNextButtonClick() {
    if (this.props.list.length - 1 === this.props.currentIndex) {
      return;
    }
    this.props.onChange(this.props.currentIndex + 1);
  }

  render() {
    const {
      list,
      currentIndex } =
    this.props;

    if (currentIndex < _.size(list)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_keymaps_KeyMaps__["a" /* default */], { handlers: this.getKeyMapHandlers() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'list-carousal' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
                disabled: this.props.currentIndex === 0,
                type: 'icon',
                onClick: this.handlePreviousButtonClick },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons_LeftSolidIcon__["a" /* default */], { className: `list-carousal--previous ${this.props.currentIndex === 0 ? 'is-disabled' : ''}` })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'list-carousal--label' }, _.get(list[currentIndex], 'name')),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
                disabled: this.props.list.length - 1 === this.props.currentIndex,
                type: 'icon',
                onClick: this.handleNextButtonClick },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons_RightSolidIcon__["a" /* default */], { className: `list-carousal--next ${this.props.list.length - 1 === this.props.currentIndex ? 'is-disabled' : ''}` })))));




    }
    return null;
  }};


ListCarousal.propTypes = {
  currentIndex: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  list: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.array,
  onChange: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRecentRuns; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RunnerRecentRunsHeader__ = __webpack_require__(3525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RunnerRecentRunsList__ = __webpack_require__(3526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RunnerRunDeleteConfirmationModal__ = __webpack_require__(3528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_components_base_keymaps_KeyMaps__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_RunnerHelper__ = __webpack_require__(361);
var _class;







let



RunnerRecentRuns = __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default()(_class = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class RunnerRecentRuns extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      runFilter: '',
      isDeleteModalOpen: false,
      isFiltering: false,
      singleSelectionId: '' };


    this.handleDeleteModalOpen = this.handleDeleteModalOpen.bind(this);
    this.handleDeleteModalClose = this.handleDeleteModalClose.bind(this);
    this.handleDeleteMultipleRuns = this.handleDeleteMultipleRuns.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleImport = this.handleImport.bind(this);
    this.handleFilter = this.handleFilter.bind(this);

    this.deselectAllRuns = this.deselectAllRuns.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleBulkExport = this.handleBulkExport.bind(this);
    this.handleFilteringFocus = this.handleFilteringFocus.bind(this);
    this.handleFilteringBlur = this.handleFilteringBlur.bind(this);
    this.handleSingleDeleteSelected = this.handleSingleDeleteSelected.bind(this);
    this.handleSingleDelete = this.handleSingleDelete.bind(this);
    this.handleDeleteRuns = this.handleDeleteRuns.bind(this);

    this.store = Object(__WEBPACK_IMPORTED_MODULE_7__js_stores_get_store__["getStore"])('RunnerRunStore');
  }

  getKeyMapHandlers() {
    return {
      quit: pm.shortcuts.handle('quit', this.deselectAllRuns),
      delete: pm.shortcuts.handle('delete', () => {
        if (!this.store.isMultiSelection || this.state.isFiltering) {
          return;
        }

        this.handleDeleteModalOpen();
      }) };

  }

  handleDeleteRuns() {
    if (this.state.singleSelectionId) {
      this.handleSingleDelete();
    } else {
      this.handleDeleteMultipleRuns();
    }
  }

  handleSingleDeleteSelected(id) {
    this.setState({ singleSelectionId: id });
    this.handleDeleteModalOpen();
  }

  handleSingleDelete() {
    this.store.deleteRun(this.state.singleSelectionId);
    this.setState({ singleSelectionId: '' });
    this.handleDeleteModalClose();
  }

  handleFilteringFocus() {
    this.setState({ isFiltering: true });
  }

  handleFilteringBlur() {
    this.setState({ isFiltering: false });
  }

  handleClickOutside() {
    if (!this.store.selectedRuns.size || this.state.isDeleteModalOpen) {
      return;
    }

    this.deselectAllRuns();
  }

  handleDeleteModalOpen() {
    this.setState({
      isDeleteModalOpen: true },
    () => {
      pm.mediator.trigger('showRunnerRunDeleteModal'); // Listening in Delete Modal to focus the element, which enable keyboard shortcuts
    });
  }

  handleDeleteModalClose() {
    this.setState({ isDeleteModalOpen: false, singleSelectionId: '' });
  }

  handleDeleteMultipleRuns() {
    let runsToDelete = [];

    if (this.store.isMultiSelection) {// If 2 or more runs are selected, delete selected runs
      runsToDelete = [...this.store.selectedRuns.keys()];
    } else {// Else delete all runs in the current workspace.
      runsToDelete = _.reduce(this.store.values, (runIds, run) => {
        runIds.push(run.id);

        return runIds;
      }, []);
    }

    this.store.deleteRun(runsToDelete);
    this.handleDeleteModalClose();
    this.deselectAllRuns();
  }

  handleSelect(runId) {
    this.store.addSelection(runId);
  }

  handleDeselect(runId) {
    this.store.deleteSelection(runId);
  }

  deselectAllRuns() {
    this.store.clearSelection();
  }

  handleBulkExport() {
    _.isFunction(__WEBPACK_IMPORTED_MODULE_8__helpers_RunnerHelper__["b" /* exportRuns */]) && Object(__WEBPACK_IMPORTED_MODULE_8__helpers_RunnerHelper__["b" /* exportRuns */])([...this.store.selectedRuns.keys()]);
    this.deselectAllRuns();
  }

  handleExport(id) {
    _.isFunction(__WEBPACK_IMPORTED_MODULE_8__helpers_RunnerHelper__["a" /* exportRun */]) && Object(__WEBPACK_IMPORTED_MODULE_8__helpers_RunnerHelper__["a" /* exportRun */])(id);
  }

  handleImport(runs) {
    _.isFunction(__WEBPACK_IMPORTED_MODULE_8__helpers_RunnerHelper__["c" /* importRun */]) && Object(__WEBPACK_IMPORTED_MODULE_8__helpers_RunnerHelper__["c" /* importRun */])(runs);
  }

  handleFilter(change) {
    this.setState({ runFilter: change });
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_keymaps_KeyMaps__["a" /* default */], {
          keyMap: pm.shortcuts.getShortcuts(),
          handlers: this.getKeyMapHandlers() },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RunnerRecentRunsHeader__["a" /* default */], {
            runFilter: this.state.runFilter,
            onFilterChange: this.handleFilter,
            onImportRun: this.handleImport,
            isMultiSelected: this.store.isMultiSelection,
            selectedRunCount: _.get(this, 'store.selectedRuns.size', 0),
            openDeleteModal: this.handleDeleteModalOpen,
            onBulkExport: this.handleBulkExport,
            runs: this.store.values,
            onFocus: this.handleFilteringFocus,
            onBlur: this.handleFilteringBlur,
            loadingRuns: this.store.isHydrating }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RunnerRecentRunsList__["a" /* default */], {
            runFilter: this.state.runFilter,
            runs: this.store.values,
            onDeleteRun: this.handleSingleDeleteSelected,
            onExportRun: this.handleExport,
            onOpenRun: this.props.onOpenRun,
            selectedRuns: this.store.selectedRuns,
            isMultiSelected: this.store.isMultiSelection,
            selectRun: this.handleSelect,
            deselectRun: this.handleDeselect,
            loadingRuns: this.store.isHydrating }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__RunnerRunDeleteConfirmationModal__["a" /* default */], {
            isOpen: this.state.isDeleteModalOpen,
            keymapRef: ref => {this.keymapRef = ref;},
            onConfirm: this.handleDeleteRuns,
            onRequestClose: this.handleDeleteModalClose,
            isMultiSelected: this.store.isMultiSelection,
            isSingleRun: !!this.state.singleSelectionId }))));




  }}) || _class) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRecentRunsHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_components_base_Inputs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_components_base_Icons_DeleteIcon__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_components_base_Icons_DownloadIcon__ = __webpack_require__(1023);




let

RunnerRecentRunsHeader = class RunnerRecentRunsHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleImport = this.handleImport.bind(this);
    this.getRunnerHeader = this.getRunnerHeader.bind(this);
    this.getMultiSelectedRunnerHeader = this.getMultiSelectedRunnerHeader.bind(this);
  }

  getDisabledTooltip() {
    if (_.isEmpty(this.props.runs)) {
      return 'There are no collection runs to delete in this workspace.';
    }
  }

  getRunnerHeader() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header__section-left' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header__tabs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header__tab' }, 'Recent Runs'))),





        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header__section-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__js_components_base_Inputs__["b" /* Input */], {
            className: 'runner-recent-runs__header__search',
            inputStyle: 'search',
            placeholder: 'Type to Filter',
            disabled: this.props.loadingRuns,
            query: this.props.runFilter,
            onCancel: this.props.onFilterChange,
            onChange: this.props.onFilterChange,
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-recent-runs__header__import',
              size: 'small',
              type: 'text',
              disabled: this.props.loadingRuns }, 'Import Runs'),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__js_components_base_Inputs__["b" /* Input */], {
            className: 'runner-recent-runs__header__import-selector',
            ref: 'input',
            type: 'file',
            onChange: this.handleImport }),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'separator' }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-recent-runs__header__delete-all',
              size: 'small',
              type: 'text',
              onClick: this.props.openDeleteModal,
              disabled: _.isEmpty(this.props.runs),
              tooltip: this.getDisabledTooltip() }, 'Delete all'))));






  }

  getMultiSelectedRunnerHeader() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header__section-left' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header__tabs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header__tab' },
              this.props.selectedRunCount,
              ' ', 'runs selected'))),





        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header__section-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__js_components_base_Inputs__["b" /* Input */], {
            className: 'runner-recent-runs__header__search',
            inputStyle: 'search',
            placeholder: 'Type to Filter',
            query: this.props.runFilter,
            onCancel: this.props.onFilterChange,
            onChange: this.props.onFilterChange,
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-recent-runs__header__bulk-action',
              onClick: this.props.onBulkExport,
              tooltip: 'Export selected runs',
              type: 'icon' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Icons_DownloadIcon__["a" /* default */], {
              className: 'runner-recent-runs__runs-list-item__action--export-icon',
              size: 'xs' })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-recent-runs__header__bulk-action',
              onClick: this.props.openDeleteModal,
              tooltip: 'Delete selected runs',
              type: 'icon' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Icons_DeleteIcon__["a" /* default */], {
              className: 'runner-recent-runs__runs-list-item__action--delete-icon',
              size: 'xs' })))));





  }

  handleImport(files) {
    this.props.onImportRun && this.props.onImportRun(files);
    this.refs.input && this.refs.input.clear();
  }

  render() {
    return (
      this.props.isMultiSelected ? this.getMultiSelectedRunnerHeader() : this.getRunnerHeader());

  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRecentRunsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RunnerRecentRunsListItem__ = __webpack_require__(3527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_components_base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_stores_get_store__ = __webpack_require__(5);
var _class;



let


RunnerRecentRunsList = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class RunnerRecentRunsList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  getOrderedRuns(runs) {
    const { activeRuns } = Object(__WEBPACK_IMPORTED_MODULE_4__js_stores_get_store__["getStore"])('RunnerStore');

    return _.orderBy(_.filter(runs, run => run.status === 'finished' || activeRuns.has(run.id)), run => run.createdAt, 'desc');
  }

  getFilteredRuns(runs, filter) {
    return _.filter(runs, run => {
      try {
        return _.includes(run.name.toLowerCase(), filter.toLowerCase());
      } catch (e) {
        return false;
      }
    });
  }

  render() {
    const { runs } = this.props,
    orderedRuns = this.getOrderedRuns(runs),
    filteredRuns = this.getFilteredRuns(orderedRuns, this.props.runFilter),
    showLoadingIndicator = this.props.loadingRuns,
    noRunsCreated = !this.props.loadingRuns && _.isEmpty(orderedRuns),
    showRunsList = !this.props.loadingRuns && !_.isEmpty(orderedRuns),
    noSearchResults = showRunsList && _.isEmpty(filteredRuns);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list' },

        showLoadingIndicator &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_LoadingIndicator__["a" /* default */], null),


        noRunsCreated &&

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-empty-list-item' }, 'You don\u2019t have any runs yet. Select a collection or folder to start a run.'),





        showRunsList &&
        _.map(filteredRuns, run => {
          const environment = _.get(run, 'meta.environmentName') || 'No Environment',
          selected = this.props.selectedRuns.has(run.id);

          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__RunnerRecentRunsListItem__["a" /* default */], {
              key: run.id,
              run: run,
              environment: environment,
              onDeleteRun: this.props.onDeleteRun,
              onExportRun: this.props.onExportRun,
              onOpenRun: this.props.onOpenRun,
              selectRun: this.props.selectRun,
              deselectRun: this.props.deselectRun,
              isMultiSelected: this.props.isMultiSelected,
              selected: selected }));


        }),


        noSearchResults &&

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-empty-list-item' }, 'No runs with that name.')));






  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRecentRunsListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_components_base_Icons_DownloadIcon__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_components_base_Icons_DeleteIcon__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_stores_get_store__ = __webpack_require__(5);
var _class;







let


RunnerRecentRunsListItem = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["b" /* observer */])(_class = class RunnerRecentRunsListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.openRun = this.props.onOpenRun.bind(this);
  }

  getWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-recent-runs__runs-list-item': true,
      'is-selected': this.props.selected });

  }

  getIndicatorClasses(run) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-recent-runs__runs-list-item__indicator': true,
      'is-running': run.status === 'started',
      'is-stopped': run.status === 'finished' && _.get(run, 'meta.state') === 'stopped',
      'is-failed': run.status === 'finished' && _.get(run, 'meta.state') === 'failed',
      'is-passed': run.status === 'finished' && _.get(run, 'meta.state') === 'passed' });

  }

  getStatusClasses(run) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-recent-runs__runs-list-item__status': true,
      'is-running': run.status === 'started',
      'is-stopped': run.status === 'finished' && _.get(run, 'meta.state') === 'stopped',
      'is-failed': run.status === 'finished' && _.get(run, 'meta.state') === 'failed',
      'is-passed': run.status === 'finished' && _.get(run, 'meta.state') === 'passed' });

  }

  getRunStatus() {
    const { run } = this.props;

    switch (run.status) {
      case 'paused':
        return 'PAUSED';

      case 'started':
        return 'RUNNING';

      case 'finished':{
          // Status can be finished in 3 cases (states) - stopped, passed or failed
          const state = _.get(run, 'meta.state', '').toUpperCase();

          return state === 'FAILED' ? `${_.get(run, 'meta.failedTestCount', '')} ${state}` : state;
        }

      default:
        return '';}

  }

  getTooltipText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }

    return 'Delete run';
  }

  handleAction(action, e) {
    e.stopPropagation && e.stopPropagation();
    switch (action) {
      case 'export':
        __WEBPACK_IMPORTED_MODULE_7__js_modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'download', 'recent_runs');
        this.props.onExportRun && this.props.onExportRun(this.props.run.id);
        break;

      case 'delete':
        __WEBPACK_IMPORTED_MODULE_7__js_modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'delete');
        this.props.onDeleteRun && this.props.onDeleteRun(this.props.run.id);
        break;

      default:
        break;}

  }

  handleSelect(e) {
    if (e.ctrlKey || e.metaKey) {
      if (this.props.selected) {
        this.props.deselectRun(this.props.run && this.props.run.id);
      } else {
        this.props.selectRun(this.props.run && this.props.run.id);
      }
    } else {
      this.openRun(this.props.run && this.props.run.id);
    }
  }

  render() {
    const { run } = this.props,
    permissionStore = Object(__WEBPACK_IMPORTED_MODULE_8__js_stores_get_store__["getStore"])('PermissionStore'),
    canDeleteCollectionrun = permissionStore.can('delete', 'collectionrun', run.id);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getWrapperClasses(),
          onClick: this.handleSelect },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__indicator-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getIndicatorClasses(run) })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__section-left' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__collection' },
            run.name),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__environment' },
            this.props.environment)),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__section-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getStatusClasses(run) },
            this.getRunStatus()),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__date' },
            __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default.a.getFormattedDateAndTime(run.createdAt))),




        !this.props.isMultiSelected && run.status === 'finished' &&

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-recent-runs__runs-list-item__action runner-recent-runs__runs-list-item__action--export',
              onClick: this.handleAction.bind(this, 'export'),
              tooltip: 'Export run' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_Icons_DownloadIcon__["a" /* default */], {
              className: 'runner-recent-runs__runs-list-item__action--export-icon',
              size: 'xs' })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-recent-runs__runs-list-item__action runner-recent-runs__runs-list-item__action--delete',
              onClick: this.handleAction.bind(this, 'delete'),
              tooltip: this.getTooltipText(!canDeleteCollectionrun),
              disabled: !canDeleteCollectionrun },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_Icons_DeleteIcon__["a" /* default */], {
              className: 'runner-recent-runs__runs-list-item__action--delete-icon',
              size: 'xs' })))));







  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRunDeleteConfirmationModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_components_base_Modals__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_components_base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_components_base_keymaps_KeyMaps__ = __webpack_require__(64);





let

RunnerRunDeleteConfirmationModal = class RunnerRunDeleteConfirmationModal extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isDeleteFocused: true };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFocusClick = this.handleFocusClick.bind(this);
    this.handleFocusSwitch = this.handleFocusSwitch.bind(this);
  }

  componentDidMount() {
    pm.mediator.on('showRunnerRunDeleteModal', () => {
      requestIdleCallback(() => {
        _.invoke(this, 'refs.keyMapsRef.focus');
      });
    });
  }

  componentWillUnmount() {
    pm.mediator.off('showRunnerRunDeleteModal');
  }

  getCustomStyles() {
    return { marginTop: '35vh' };
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'delete-confirmation-modal': true }, this.props.className);
  }

  getModalTitle() {
    if (this.props.isMultiSelected) {
      return 'DELETE COLLECTION RUNS';
    }

    if (this.props.isSingleRun) {
      return 'DELETE COLLECTION RUN';
    }

    return 'DELETE ALL COLLECTION RUNS';
  }

  getModalMessage() {
    if (this.props.isMultiSelected) {
      return 'Are you sure you want to delete all the selected collection runs from this workspace?';
    }

    if (this.props.isSingleRun) {
      return 'Are you sure you want to delete the selected collection run from this workspace?';
    }

    return 'Are you sure you want to delete all collection runs from this workspace?';
  }

  getKeyMapHandlers() {
    return {
      quit: pm.shortcuts.handle('quit', this.handleClose), // Discard and close
      select: pm.shortcuts.handle('select', this.handleFocusClick), // Save and close
      submit: pm.shortcuts.handle('submit', this.handleFocusClick), // Save and close
      space: pm.shortcuts.handle('space', this.handleFocusClick), // Submit based on what is in focus
      focusNext: pm.shortcuts.handle('focusNext', this.handleFocusSwitch) // Switch to next button
    };
  }

  handleClose() {
    this.props.onRequestClose && this.props.onRequestClose();
    this.setState({ isDeleteFocused: true });
  }

  handleSubmit() {
    this.props.onConfirm && this.props.onConfirm();
  }

  handleFocusSwitch() {
    this.setState(prev => ({ isDeleteFocused: !prev.isDeleteFocused }));
  }

  handleFocusClick() {
    this.state.isDeleteFocused ? this.handleSubmit() : this.handleClose();
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Modals__["a" /* Modal */], {
          isOpen: this.props.isOpen,
          onRequestClose: this.handleClose,
          className: this.getClasses(),
          customStyles: this.getCustomStyles() },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Modals__["d" /* ModalHeader */], null, this.getModalTitle()),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Modals__["b" /* ModalContent */], null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_keymaps_KeyMaps__["a" /* default */], {
              keyMap: pm.shortcuts.getShortcuts(),
              handlers: this.getKeyMapHandlers(),
              ref: 'keyMapsRef' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'delete-confirmation-modal-message' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, this.getModalMessage())),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'delete-confirmation-modal-controls' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Buttons__["a" /* Button */], {
                    type: 'primary',
                    onClick: this.handleSubmit,
                    disabled: this.props.isDisabled || this.props.isDeleting,
                    className: 'delete-confirmation-modal-delete-button',
                    focused: this.state.isDeleteFocused },

                  this.props.isDeleting ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_LoadingIndicator__["a" /* default */], { className: 'loading-indicator-size' }) : _.get(this.props, 'primaryAction', 'Delete')),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Buttons__["a" /* Button */], {
                    className: 'delete-confirmation-modal-cancel-button',
                    type: 'secondary',
                    onClick: this.handleClose,
                    focused: !this.state.isDeleteFocused }, 'Cancel')))))));









  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRunsCustomizer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dnd__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_react_dnd_html5_backend__ = __webpack_require__(1052);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_react_dnd_html5_backend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__postman_react_dnd_html5_backend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RunnerRunsCustomizerList__ = __webpack_require__(3530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_components_base_Icons_CloseIcon__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__ = __webpack_require__(5);
var _dec, _class;








let



RunnerRunsCustomizer = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_dnd__["DragDropContext"])(__WEBPACK_IMPORTED_MODULE_3__postman_react_dnd_html5_backend___default.a), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class RunnerRunsCustomizer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleDragDrop = this.handleDragDrop.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleBack = this.handleBack.bind(this);

    this.store = Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["getStore"])('RunnerSelectionStore').selection;
  }

  setAllChecked(value) {
    this.store.setAllRequest(value);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_5_classnames___default()({
      'runner-runs-customizer__container': true,
      'is-disabled': this.props.isInconsistent || this.props.isDeleted });

  }

  getDisableState() {
    if (this.store.isDeleted) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-customizer__disable-overlay' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'title' }, 'This collection has been deleted'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'description' }, 'Select another collection to continue.'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__js_components_base_Buttons__["a" /* Button */], {
                className: 'button',
                type: 'secondary',
                onClick: this.handleBack }, 'Close'))));






    }

    if (this.store.isInconsistent) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-customizer__disable-overlay' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'title' }, 'Reload to continue'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'description' }, 'Some of the requests you\'ve selected have been modified.',

              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null), 'Please reload the requests to continue.'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__js_components_base_Buttons__["a" /* Button */], {
                className: 'button',
                type: 'secondary',
                onClick: this.handleReset }, 'Reload'))));






    }
  }

  handleToggle(index) {
    this.store.toggleRequest(index);
  }

  handleDragDrop(from, to, position) {
    this.store.reorderRequests(from, to, position);
  }

  handleReset() {
    this.store.reset();
  }

  handleBack() {
    Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["getStore"])('RunnerSelectionStore').reset();
  }

  render() {
    const noStructure = _.isEmpty(this.store.requestSelection);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-customizer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-customizer__header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'runner-runs-customizer__header-title' }, 'RUN ORDER'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-customizer__header-buttons' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__js_components_base_Buttons__["a" /* Button */], {
                className: 'button',
                type: 'text',
                onClick: this.setAllChecked.bind(this, false),
                disabled: noStructure }, 'Deselect All'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'separator' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__js_components_base_Buttons__["a" /* Button */], {
                className: 'button',
                type: 'text',
                onClick: this.setAllChecked.bind(this, true),
                disabled: noStructure }, 'Select All'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'separator' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__js_components_base_Buttons__["a" /* Button */], {
                className: 'button',
                type: 'text',
                onClick: this.handleReset,
                disabled: noStructure }, 'Reset'),





            this.props.onClose &&

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__js_components_base_Icons_CloseIcon__["a" /* default */], {
              className: 'close',
              size: 'xs',
              onClick: this.props.onClose }))),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },

          !noStructure &&

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__RunnerRunsCustomizerList__["a" /* default */], {
            requests: this.store.requests,
            folders: this.store.folders,
            itemList: this.store.requestSelection,
            onItemToggle: this.handleToggle,
            onDragDrop: this.handleDragDrop,
            disabled: this.store.isInconsistent || this.store.isDeleted,
            onInconsistency: () => {/* NoOp */} })),





        this.getDisableState()));



  }}) || _class) || _class);



RunnerRunsCustomizer.defaultProps = {
  onClose: undefined };


RunnerRunsCustomizer.propTypes = {
  onClose: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRunsCustomizerList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RunnerRunsCustomizerListItem__ = __webpack_require__(3531);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;

let


RunnerRunsCustomizerList = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class RunnerRunsCustomizerList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  enrichItem(item) {
    // Enrich parents will their respective data
    item.parents = _.map(item.parents, parent => this.props.folders.get(parent) || {});

    // Enrich item itself. Adding item after so that keys conflict is not a problem
    const data = this.props.requests.get(item.id);

    return data ? _extends({}, data, item) : null;
  }

  render() {
    const itemList = this.props.itemList || [];

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-customizer__list' },

        _.map(itemList, (item, index) =>
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__RunnerRunsCustomizerListItem__["a" /* default */], {
          key: index,
          index: index,
          item: this.enrichItem(_extends({}, item)),
          onItemToggle: this.props.onItemToggle,
          onDragDrop: this.props.onDragDrop,
          disabled: this.props.disabled,
          onInconsistency: this.props.onInconsistency }))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRunsCustomizerListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dnd__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_components_base_Inputs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_utils_RequestMethodHelper__ = __webpack_require__(1437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_components_base_Icons_MenuIcon__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_components_base_Icons_RightSolidIcon__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_components_base_FolderButton__ = __webpack_require__(1542);
var _dec, _dec2, _class;











const itemSource = {
  canDrag(props) {
    return !props.disabled;
  },

  beginDrag(props) {
    return {
      index: props.index,
      id: props.item.id,
      type: props.item.type };

  },

  endDrag(props, monitor) {
    const dragIndex = monitor.getItem().index,
    { dropIndex, position } = monitor.getDropResult() || {};

    if (dragIndex === dropIndex || _.isUndefined(dropIndex)) {
      return;
    }

    props.onDragDrop(dragIndex, dropIndex, position);
  } },


getMiddleY = component => {
  const elementRect = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(component).getBoundingClientRect();

  return elementRect.top + elementRect.height / 2;
},

itemTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index,
    hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    if (monitor.getClientOffset().y > getMiddleY(component)) {
      component.getDecoratedComponentInstance().scheduleHoverUpdate('bottom');
    } else {
      component.getDecoratedComponentInstance().scheduleHoverUpdate('top');
    }
  },

  drop(props, monitor, component) {
    return {
      dropIndex: props.index,
      position: monitor.getClientOffset().y > getMiddleY(component) ? 'after' : 'before' };

  } };let











RunnerRunsCustomizerListItem = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_dnd__["DropTarget"])('runner-customizer-list-request', itemTarget, (connect, monitor) => ({ connectDropTarget: connect.dropTarget(), isDragOver: monitor.isOver({ shallow: true }) })), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_1_react_dnd__["DragSource"])('runner-customizer-list-request', itemSource, (connect, monitor) => ({ connectDragSource: connect.dragSource(), connectDragPreview: connect.dragPreview(), isDragging: monitor.isDragging() })), _dec(_class = _dec2(_class = class RunnerRunsCustomizerListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);

    this.state = {
      dropHoverBottom: false,
      dropHoverTop: false };


    this.handleToggle = this.handleToggle.bind(this);
    this.setDropHoverTop = this.setDropHoverTop.bind(this);
    this.setDropHoverBottom = this.setDropHoverBottom.bind(this);
  }

  componentDidMount() {
    // If the cannot be resolved and disabled in false then emit inconsistency
    !this.props.item && !this.props.disabled && this.props.onInconsistency();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestedFrame);
  }

  setDropHoverTop() {
    !this.state.dropHoverTop &&
    this.setState({
      dropHoverBottom: false,
      dropHoverTop: true });

  }

  setDropHoverBottom() {
    !this.state.dropHoverBottom &&
    this.setState({
      dropHoverBottom: true,
      dropHoverTop: false });

  }

  getMethodIcon(method = 'GET') {
    method = method.toUpperCase();

    const classes = `customizer__row_request-icon request-method--${method}`;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes },
        __WEBPACK_IMPORTED_MODULE_5__js_utils_RequestMethodHelper__["a" /* default */].getMethodAbbreviation(method)));


  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'runner-runs-customizer__list-item__row': true,
      'is-dragged': this.props.isDragging,
      'is-drop-hovered-top': this.state.dropHoverTop && this.props.isDragOver,
      'is-drop-hovered-bottom': this.state.dropHoverBottom && this.props.isDragOver });

  }

  scheduleHoverUpdate(type) {
    const func = type === 'bottom' ? this.setDropHoverBottom : this.setDropHoverTop;

    if (!this.requestedFrame) {
      this.requestedFrame = requestAnimationFrame(() => {
        try {
          func && func();
        } finally {
          this.requestedFrame = null;
        }
      });
    }
  }

  handleToggle() {
    this.props.onItemToggle(this.props.index);
  }

  render() {
    const {
      connectDragSource,
      connectDragPreview,
      connectDropTarget,
      item } =
    this.props;

    return item && connectDragPreview(connectDropTarget(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-customizer__list-item' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        connectDragSource(
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'customizer__sort-icon' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_Icons_MenuIcon__["a" /* default */], { size: 'xs' }))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Inputs__["a" /* Checkbox */], {
          className: 'customizer__row_check',
          checked: item.checked,
          onChange: this.handleToggle }),

        !_.isEmpty(item.parents) &&

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'customizer__row__parents' },

          _.map(item.parents, (folder, index) =>
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              key: index,
              className: 'customizer__row_icons' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__js_components_base_FolderButton__["a" /* default */], {
              className: 'customizer__row_folder-icon',
              placement: 'bottom',
              tooltip: folder.name,
              disabled: this.props.disabled }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__js_components_base_Icons_RightSolidIcon__["a" /* default */], null)))),





        this.getMethodIcon(item.method),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'customizer__row_name' },
          ' ',
          item.name)))));




  }}) || _class) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResults; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_components_base_keymaps_KeyMaps__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResultsHeader_RunnerResultsHeader__ = __webpack_require__(1544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RunnerResultsContent__ = __webpack_require__(3533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_RunnerConstants__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_RunnerHelper__ = __webpack_require__(361);










const keyMap = {
  goBack: ['del', 'backspace'] };let


RunnerResults = class RunnerResults extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleExport = this.handleExport.bind(this);

    this.store = Object(__WEBPACK_IMPORTED_MODULE_4__js_stores_get_store__["getStore"])('RunnerEventStore');
  }

  getKeyMapHandlers() {
    return {
      goBack: this.props.onTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_5__constants_RunnerConstants__["e" /* RUNNER_TAB_RUN */]) };

  }

  handleExport(id) {
    _.isFunction(__WEBPACK_IMPORTED_MODULE_6__helpers_RunnerHelper__["a" /* exportRun */]) && Object(__WEBPACK_IMPORTED_MODULE_6__helpers_RunnerHelper__["a" /* exportRun */])(id);
  }

  render() {
    // This component is very important. This should not re-render on store change
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__js_components_base_keymaps_KeyMaps__["a" /* default */], {
          handlers: this.getKeyMapHandlers(),
          keyMap: keyMap },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'runner-results',
            ref: results => results && results.focus() },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__section-top' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ResultsHeader_RunnerResultsHeader__["a" /* default */], {
              store: this.store,
              onExport: this.handleExport,
              onRunAction: this.props.onRunAction,
              onNewRun: this.props.onTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_5__constants_RunnerConstants__["e" /* RUNNER_TAB_RUN */]),
              onOpenSummary: this.props.onTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_5__constants_RunnerConstants__["f" /* RUNNER_TAB_SUMMARY */]) })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RunnerResultsContent__["a" /* default */], {
            ref: ref => {this.contentRef = ref;},
            store: this.store,
            jumpSelectedIteration: this.handleJumpIteration }))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_window__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_virtualized_auto_sizer__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResultsContent_RunnerResultsRequestListItem__ = __webpack_require__(3534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ResultsContent_RunnerResultsSidebar__ = __webpack_require__(1545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ResultsIterationBar_RunnerResultsIterationBar__ = __webpack_require__(3537);







let

RunnerResultsContent = class RunnerResultsContent extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.getItemSize = this.getItemSize.bind(this);
    this.getListItem = this.getListItem.bind(this);
    this.autoScrollToBottom = this.autoScrollToBottom.bind(this);
    this.onItemsRendered = this.onItemsRendered.bind(this);
    this.callOnScroll = this.callOnScroll.bind(this);
    this.handleJumpIteration = this.handleJumpIteration.bind(this);

    this.autoScroll = true;

    // Listen to changes in number of Runner events
    //
    // requestIdleCallback is used because mounting and rendering of new Runner Results is of higher priority and must
    // be done before scrolling. Also, this helps in waiting for the mounting when Runner Results is opened, before the
    // initial scroll to bottom.
    this.reactionDisposer = Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["q" /* reaction */])(() => props.store.values, () => {
      requestIdleCallback(this.autoScrollToBottom.bind(this));
    });

    this.reactionFilter = Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["q" /* reaction */])(() => props.store.filter, () => {
      !_.isEmpty(this.listRef) && this.listRef.resetAfterIndex(0);
      !_.isEmpty(this.listRef) && this.listRef.scrollToItem(0);
    });
  }

  componentWillUnmount() {
    this.reactionDisposer && this.reactionDisposer();
    this.reactionFilter && this.reactionFilter();
  }

  // Listen to user scroll for enabling autoscroll
  onItemsRendered({ visibleStartIndex, visibleStopIndex }) {
    const { isOngoing, itemCount, values } = this.props.store;

    this.props.store.changeIteration(_.get(values, [visibleStartIndex, 'iteration'], 0));

    // Visible stop index is the last list item visible in the virtualized list
    //
    // if the last list item is visible, then autoscroll gets enabled
    if (isOngoing && visibleStopIndex >= itemCount - 2) {
      this.autoScroll = true;
    }
  }

  getItemSize(index) {
    const { values, collapsedSet, iterationIndex } = this.props.store,
    event = values[index],
    isCollapsed = event && collapsedSet.has(event.id),
    testCount = event && event.tests && event.tests.length,

    additional = iterationIndex[event.iteration] === index ? 17 : 0;

    if (isCollapsed) {
      return 40 + additional; // Remove this extra +1 after removing extra border-bottom
    }

    if (testCount) {
      return testCount * 40 + 41 + additional; // Remove this extra +1 after removing extra border-bottom
    }

    return 81 + additional; // Remove this extra +1 after removing extra border-bottom
  }

  getListItem(data) {
    const { values, collapsedSet, iterationIndex } = this.props.store,
    event = values[data.index],
    toggleExpanded = () => {
      this.props.store.toggleExpanded(event.id);
      !_.isEmpty(this.listRef) && this.listRef.resetAfterIndex(data.index);
    },
    handleClearHeightCache = () => {
      !_.isEmpty(this.listRef) && this.listRef.resetAfterIndex(data.index);
    };

    if (!event) {
      return null;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: data.style },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ResultsContent_RunnerResultsRequestListItem__["a" /* default */], {
          isOpen: !collapsedSet.has(event.id),
          toggleExpanded: toggleExpanded,
          key: data.index,
          filter: this.props.store.filter,
          event: event,
          store: this.props.store,
          showIter: iterationIndex[event.iteration] === data.index,
          resetHeight: handleClearHeightCache })));



  }

  autoScrollToBottom() {
    if (!this.autoScroll || !this.props.store.isOngoing) {
      return;
    }

    !_.isEmpty(this.listRef) && this.listRef.scrollToItem(this.props.store.values.length - 1);
  }

  // Listen to backward user scroll for disabling autoscroll
  callOnScroll({ scrollDirection }) {
    // If the user scrolls in upward direction, which is 'backward' in react-window
    // then autoscroll should be disabled
    if (scrollDirection === 'backward') {
      this.autoScroll = false;
    }
  }

  handleJumpIteration(iteration) {
    const index = this.props.store.iterationIndex[iteration];

    !_.isEmpty(this.listRef) && !_.isNil(index) && this.listRef.scrollToItem(index, 'start');
  }

  render() {
    const lister = data =>
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* Observer */], null,
      this.getListItem.bind(this, data)),


    sizer = ({ height, width }) =>
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* Observer */], null,
      () =>
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_window__["b" /* VariableSizeList */], {
          height: height,
          itemCount: this.props.store.valueLength,
          itemSize: this.getItemSize,
          width: width,
          onItemsRendered: this.onItemsRendered,
          onScroll: this.callOnScroll,
          ref: ref => {this.listRef = ref;} },

        lister));





    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__section-bottom' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ResultsContent_RunnerResultsSidebar__["a" /* default */], { store: this.props.store }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__body' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_virtualized_auto_sizer__["a" /* default */], null, sizer)),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ResultsIterationBar_RunnerResultsIterationBar__["a" /* default */], {
          store: this.props.store,
          jumpIteration: this.handleJumpIteration })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsRequestListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ResultTooltip__ = __webpack_require__(3535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_components_base_Icons_DownSolidIcon__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_components_base_Icons_UpSolidIcon__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RunnerResultsTestListItem__ = __webpack_require__(3536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_RunnerMessageConstants__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_RunnerMessageConstants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__constants_RunnerMessageConstants__);
var _class;









let


RunnerResultsRequestListItem = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["b" /* observer */])(_class = class RunnerResultsRequestListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      response: false };


    this.toggleResponse = this.toggleResponse.bind(this);

    this.testCount = 0;
  }

  componentDidUpdate() {
    if (this.testCount !== this.props.event.tests.length) {
      this.testCount = this.props.event.tests.length;
      this.props.resetHeight();
    }
  }

  getHeaderClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-results__request__header': true,
      'is-failed': this.isFailed(this.props.event.tests) });

  }

  getStatusClasses() {
    const overallStatus = this.isFailed(this.props.event.tests);

    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-results__request__status': true,
      'is-passed': !overallStatus,
      'is-failed': overallStatus });

  }

  getMethodClasses() {
    const method = _.get(this.props.event, 'item.request.method', 'get');

    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-results__request__method': true,
      [`runner-results__request__method--${method.toUpperCase()}`]: true });

  }

  getToggleButtonClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-results__request__expand': true,
      'is-open': this.props.isOpen });

  }

  getTooltipPosition() {
    const me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this).getBoundingClientRect();

    return window.innerHeight > me.top + 230 ? 'bottom' : 'top';
  }

  isFailed(tests) {
    return _.some(tests, test => test.passed === false);
  }

  toggleResponse(e) {
    e && e.stopPropagation();
    this.setState(prev => ({ response: !prev.response }));
    !this.state.response && __WEBPACK_IMPORTED_MODULE_9__js_modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'view_response');
  }

  render() {
    const {
      item, response, error, tests, iteration } =
    this.props.event,
    method = _.get(item, 'request.method'),
    url = _.get(item, 'request.url'),
    path = _.get(item, 'request.path');

    // If the item does not exist then wait for it load
    if (!item) {
      return null;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__request' },
        this.props.showIter &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__request__iter' },
          `Iteration ${iteration + 1}`),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getHeaderClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__request__details' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getStatusClasses() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getMethodClasses() }, _.toUpper(method)),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-results__request__name',
                onClick: this.toggleResponse },

              item.name),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__request__url' }, url),

            path &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { title: path, className: 'runner-results__request__path' }, path),


            this.state.response &&

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ResultTooltip__["a" /* default */], {
              store: this.props.store,
              event: this.props.event,
              position: this.getTooltipPosition.bind(this),
              onClose: this.toggleResponse })),






          !_.isEmpty(response) &&

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__details' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__details__detail' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__icon' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__code' },
                response.code,
                ' ',
                response.status)),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__details__detail' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__icon' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__time' },
                `${response.responseTime} ms`)),



            response.responseSize &&

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__details__detail' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__icon' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__size' },

                response.responseSize.total < 1000 ?
                `${response.responseSize.total} B` :
                `${response.responseSize.total / 1000} KB`))),









          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-results__request__expand-button',
              onClick: this.props.toggleExpanded },


            this.props.isOpen ?
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__js_components_base_Icons_UpSolidIcon__["a" /* default */], { className: 'runner-results__request__expand is-open' }) :
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_Icons_DownSolidIcon__["a" /* default */], { className: 'runner-results__request__expand' }))),




        this.props.isOpen &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__request__body' },

          error &&

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__test is-failed' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__test__name' },

              __WEBPACK_IMPORTED_MODULE_10__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"] && __WEBPACK_IMPORTED_MODULE_10__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][error] ?
              __WEBPACK_IMPORTED_MODULE_10__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][error] :
              __WEBPACK_IMPORTED_MODULE_10__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][__WEBPACK_IMPORTED_MODULE_10__constants_RunnerMessageConstants__["GENERIC_ERROR"]])),






          !error && _.isEmpty(tests) ?

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__test__empty' }, 'This request does not have any tests.') :



          _.map(tests, (test, index) =>
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__RunnerResultsTestListItem__["a" /* default */], {
            key: index,
            test: test })))));







  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultTooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_components_base_ExpandableTooltip__ = __webpack_require__(1541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__);
var _class;



let


ResultTooltip = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class ResultTooltip extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  componentDidMount() {
    const { id, request, response } = this.props.event;

    // Load request/response body from blob table if any of the either has not been ignored
    if (!(_.has(request, 'body.___ignored___') && _.has(response, 'body.___ignored___'))) {
      _.isFunction(this.props.store.loadBlob) && this.props.store.loadBlob(id);
    }
  }

  getTooltipData() {
    const { item, request, response } = this.props.event,
    blob = _.get(this.props, 'store.blob', {});

    let requestHeaders,
    responseHeaders;

    // Populate request headers
    if (_.has(request, 'headers.___ignored___')) {
      requestHeaders = __WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][_.get(request, 'headers.___ignored___')];
    } else if (!_.isEmpty(request.headers)) {
      requestHeaders = _.reduce(_.keys(request.headers), (headers, header) => {
        headers[header] = request.headers[header];

        return headers;
      }, {});
    } else {
      requestHeaders = __WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][__WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["NO_REQUEST_HEADERS"]];
    }

    // Populate response headers
    if (_.has(response, 'headers.___ignored___')) {
      responseHeaders = __WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][_.get(response, 'headers.___ignored___')];
    } else if (!_.isEmpty(response)) {
      responseHeaders = _.reduce(response.headers, (headers, header) => {
        headers[header.key] = header.value;

        return headers;
      }, {});
    } else {
      responseHeaders = __WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][__WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["NO_RESPONSE_HEADERS"]];
    }

    // Populate request and response body
    let requestBody = this.props.store.isBlobLoading ?
    __WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][__WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["LOAD_BODY"]] :
    __WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][_.get(request, 'body.___ignored___')] || __WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][__WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["NO_REQUEST_BODY"]],

    responseBody = this.props.store.isBlobLoading ?
    __WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][__WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["LOAD_BODY"]] :
    __WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][_.get(response, 'body.___ignored___')] || __WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["RUNNER_MESSAGE_MAP"][__WEBPACK_IMPORTED_MODULE_4__constants_RunnerMessageConstants__["NO_RESPONSE_BODY"]];


    // Do not update response/request body in cases where the body is ignored or the blob is empty
    // This update will only happen when the store is populated with blob data from the call made in
    // componentDidMount

    requestBody = !(_.isEmpty(blob.requestBody) || _.has(request, 'body.___ignored___')) ?

    // Parsing request body as it was stringified while storing in the db. See RunnerEventController
    __WEBPACK_IMPORTED_MODULE_3__js_utils_util__["a" /* default */].stringify(JSON.parse(blob.requestBody)) :
    requestBody;

    responseBody = !(_.isEmpty(blob.responseBody) || _.has(response, 'body.___ignored___')) ?
    __WEBPACK_IMPORTED_MODULE_3__js_utils_util__["a" /* default */].beautifyJs(blob.responseBody) :
    responseBody;

    return [{
      title: 'Request URL',
      body: item && item.request.url },
    {
      title: 'Request Headers',
      body: requestHeaders },
    {
      title: 'Request Body',
      body: requestBody },
    {
      title: 'Response Headers',
      body: responseHeaders },
    {
      title: 'Response Body',
      body: responseBody }];

  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_ExpandableTooltip__["a" /* default */], {
        data: this.getTooltipData(),
        position: this.props.position,
        onClose: this.props.onClose }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsTestListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _class;

let


RunnerResultsTestListItem = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RunnerResultsTestListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-results__test': true,
      'is-passed': this.props.test.passed === true && this.props.test.skipped !== true,
      'is-skipped': this.props.test.skipped === true,
      'is-failed': this.props.test.passed === false });

  }

  getStatusClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-results__test__status': true,
      'is-passed': this.props.test.passed === true && this.props.test.skipped !== true,
      'is-skipped': this.props.test.skipped === true,
      'is-failed': this.props.test.passed === false });

  }

  getText(test) {
    if (test.skipped) {
      return 'SKIPPED';
    }

    return test.passed ? 'PASSED' : 'FAILED';
  }

  render() {
    const { test } = this.props;

    let testItemResult = test.name;

    if (!_.isEmpty(test.error)) {
      testItemResult += ` | ${_.get(test, 'error.name', '')}: ${_.get(test, 'error.message', '')}`;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getStatusClasses() }),

        test.status &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__test__status__text' }, this.getText(test)),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            title: test.name,
            className: 'runner-results__test__name' },

          testItemResult)));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsIterationBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_window__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_virtualized_auto_sizer__ = __webpack_require__(676);







const ITEM_HEIGHT = 30;let

RunnerResultsIterationBar = class RunnerResultsIterationBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.scrollToItem = this.scrollToItem.bind(this);
  }

  componentDidMount() {
    this.reactionDisposer = Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["q" /* reaction */])(() => _.get(this.props, 'store.selectedIteration'), selectedIteration => this.scrollToItem(selectedIteration));
  }

  componentWillUnmount() {
    this.reactionDisposer && this.reactionDisposer();
  }

  getTabClasses(index) {
    const { run, selectedIteration, currentIteration } = this.props.store;

    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-results__iterations__tab': true,
      'is-active': selectedIteration === index,
      'is-running': run.status !== 'finished' && currentIteration === index,
      'is-pending': index > currentIteration,
      'is-done': index <= currentIteration });

  }

  getListItem({ style, index }) {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: style },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getTabClasses(index),
            key: index,
            onClick: this.handleIterationChange.bind(this, index) },

          index + 1)));



  }

  scrollToItem(index) {
    !_.isEmpty(this.listRef) && !_.isNil(index) && this.listRef.scrollToItem(index);
  }

  handleIterationChange(iteration) {
    if (iteration > this.props.currentIteration) {
      return;
    }

    this.props.store.changeIteration(iteration);
    this.props.jumpIteration(iteration);
  }

  render() {
    const iterationCount = _.get(this.props, 'store.run.context.iterations', 0),
    lister = data =>
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["a" /* Observer */], null,
      this.getListItem.bind(this, data));



    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__iterations__tabs' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_virtualized_auto_sizer__["a" /* default */], null,
          ({ height, width }) =>
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_window__["a" /* FixedSizeList */], {
              height: height,
              width: width,
              itemCount: iterationCount,
              itemSize: ITEM_HEIGHT,
              ref: ref => {this.listRef = ref;} },

            lister))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_components_base_keymaps_KeyMaps__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RunnerResults_ResultsHeader_RunnerResultsHeader__ = __webpack_require__(1544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RunnerResults_ResultsContent_RunnerResultsSidebar__ = __webpack_require__(1545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SummaryBody_RunnerSummaryBody__ = __webpack_require__(3539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SummaryHeaderIterations_RunnerSummaryHeaderIterations__ = __webpack_require__(3543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_RunnerConstants__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_RunnerHelper__ = __webpack_require__(361);
var _class;












const keyMap = { goBack: ['del', 'backspace'] };let


RunnerSummaryContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class RunnerSummaryContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      hoveredIteration: 0,
      scrollLeft: 0 };


    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleIterationHover = this.handleIterationHover.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleExport = this.handleExport.bind(this);

    this.store = Object(__WEBPACK_IMPORTED_MODULE_8__js_stores_get_store__["getStore"])('RunnerEventStore');
  }

  getKeyMapHandlers() {
    return { goBack: this.props.onTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_7__constants_RunnerConstants__["d" /* RUNNER_TAB_RESULTS */]) };
  }

  handleFilterChange(filter) {
    this.store.changeFilter(filter);
  }

  handleIterationHover(iterationId) {
    this.setState({ hoveredIteration: iterationId });
  }

  handleScroll(e) {
    e && this.setState({ scrollLeft: e.target.scrollLeft });
  }

  handleExport(id) {
    _.isFunction(__WEBPACK_IMPORTED_MODULE_9__helpers_RunnerHelper__["a" /* exportRun */]) && Object(__WEBPACK_IMPORTED_MODULE_9__helpers_RunnerHelper__["a" /* exportRun */])(id);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_keymaps_KeyMaps__["a" /* default */], {
          handlers: this.getKeyMapHandlers(),
          keyMap: keyMap },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'runner-summary',
            ref: summary => summary && summary.focus() },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__section-top' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RunnerResults_ResultsHeader_RunnerResultsHeader__["a" /* default */], {
              hideSummary: true,
              store: this.store,
              onExport: this.handleExport,
              onRunAction: this.props.onRunAction,
              onNewRun: this.props.onTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_7__constants_RunnerConstants__["e" /* RUNNER_TAB_RUN */]) }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__SummaryHeaderIterations_RunnerSummaryHeaderIterations__["a" /* default */], {
              hoveredIteration: this.state.hoveredIteration,
              run: this.store.run,
              scrollLeft: this.state.scrollLeft,
              onIterationHover: this.handleIterationHover,
              onOpenResults: this.props.onTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_7__constants_RunnerConstants__["d" /* RUNNER_TAB_RESULTS */]),
              onScroll: this.handleScroll })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__section-bottom' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RunnerResults_ResultsContent_RunnerResultsSidebar__["a" /* default */], {
              store: this.store,
              onFilterChange: this.handleFilterChange }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__SummaryBody_RunnerSummaryBody__["a" /* default */], {
              hoveredIteration: this.state.hoveredIteration,
              events: this.store.values,
              iterations: this.store.run.context.iterations,
              scrollLeft: this.state.scrollLeft,
              onIterationHover: this.handleIterationHover,
              onScroll: this.handleScroll })))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryBody; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RunnerSummaryRequestListItem__ = __webpack_require__(3540);
var _class;

let


RunnerSummaryBody = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class RunnerSummaryBody extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    const rows = _.orderBy(_.reduce(
    _.map(this.props.events, e => ({
      id: e.item.id,
      name: e.item.name,
      method: e.item.request && e.item.request.method || '',
      sequence: e.sequence,
      iteration: e.iteration,
      tests: e.tests })),
    (acc, val) => {
      // The data obtain here is {id, name, sequence, iteration, tests}
      // What we want to construct is tests:[iteration][testindex]
      // If we do not all ready have it then set it
      if (!acc[val.id]) {
        acc[val.id] = {
          id: val.id,
          name: val.name,
          method: val.method,
          sequence: val.sequence,
          tests: [],
          tmap: [],
          failed: false };

      }

      if (!acc[val.id].tmap[val.iteration]) {
        acc[val.id].tmap[val.iteration] = 0;
      }

      _.forEach(val.tests, test => {
        if (!acc[val.id].tests[test.index]) {
          acc[val.id].tests[test.index] = { name: test.name, iter: [] };
        }

        acc[val.id].tests[test.index].
        iter[val.iteration] = test.skipped ? 0 : test.passed ? 1 : 2; // eslint-disable-line no-nested-ternary

        test.passed === false && (acc[val.id].failed = true, acc[val.id].tmap[val.iteration] = 2);
      });

      if (val.tests.length && acc[val.id].tmap[val.iteration] === 0) {
        acc[val.id].tmap[val.iteration] = 1;
      }

      return acc;
    }, {}),
    'sequence');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__body' },

        _.map(rows, (row, id) =>
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__RunnerSummaryRequestListItem__["a" /* default */], {
          hoveredIteration: this.props.hoveredIteration,
          iterations: this.props.iterations,
          row: row,
          key: id,
          scrollLeft: this.props.scrollLeft,
          onIterationHover: this.props.onIterationHover,
          onScroll: this.props.onScroll })),




        _.isEmpty(rows) &&

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__body__empty' }, 'No tests found for the selected filter')));






  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryRequestListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_components_base_Icons_UpSolidIcon__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_components_base_Icons_DownSolidIcon__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RunnerSummaryTestListItem__ = __webpack_require__(3541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RunnerSummaryTimeline__ = __webpack_require__(1546);







let

RunnerSummaryRequestListItem = class RunnerSummaryRequestListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { isOpen: true };

    this.toggleRequest = this.toggleRequest.bind(this);
  }

  componentDidMount() {
    if (!this.props.row.failed) {
      this.toggleRequest();
    }
  }

  componentWillUpdate(nextProps) {
    const me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.timeline);

    if (me) {
      me.scrollLeft = nextProps.scrollLeft;
    }
  }

  getStatusClasses(isFailed) {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-summary__request-list-item__status': true,
      'is-failed': isFailed,
      'is-passed': !isFailed });

  }

  getMethodClasses(method = 'get') {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()(
    'runner-summary__request-list-item__method',
    `runner-summary__request-list-item__method--${method.toUpperCase()}`);

  }

  toggleRequest() {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  }

  render() {
    const { row } = this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__request-list-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__request-list-item__header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__request-list-item__meta' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getStatusClasses(row.failed) }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getMethodClasses(row.method) },
              row.method.toUpperCase()),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__request-list-item__name' },
              row.name)),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__request-list-item__timeline' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__RunnerSummaryTimeline__["a" /* default */], {
              active: !this.state.isOpen,
              hoveredIteration: this.props.hoveredIteration,
              states: row.tmap,
              ref: 'timeline',
              scrollLeft: this.props.scrollLeft,
              type: 'request',
              onHover: this.props.onIterationHover,
              onScroll: this.props.onScroll })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-summary__request__expand-button',
              onClick: this.toggleRequest },


            this.state.isOpen ?
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Icons_UpSolidIcon__["a" /* default */], { className: 'runner-summary__request__expand is-open' }) :
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_Icons_DownSolidIcon__["a" /* default */], { className: 'runner-summary__request__expand' }))),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__request-list-item__body' },

          this.state.isOpen && _.map(row.tests, (test, index) =>
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__RunnerSummaryTestListItem__["a" /* default */], {
            failed: row.failed,
            hoveredIteration: this.props.hoveredIteration,
            key: index,
            scrollLeft: this.props.scrollLeft,
            test: test,
            iteration: index,
            onIterationHover: this.props.onIterationHover,
            onScroll: this.props.onScroll })))));






  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryTestListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RunnerSummaryTimeline__ = __webpack_require__(1546);



let

RunnerSummaryTestListItem = class RunnerSummaryTestListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  componentDidUpdate() {
    const me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.timeline);

    if (me) {
      me.scrollLeft = this.props.scrollLeft;
    }
  }

  getClasses(failed) {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-summary__test-list-item': true,
      'is-failed': failed });

  }

  getStatusClasses(failed) {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-summary__test-list-item__status': true,
      'is-passed': !failed,
      'is-failed': failed });

  }

  render() {
    if (!this.props.test) {
      return null;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses(this.props.failed) },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__test-list-item__meta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getStatusClasses(this.props.failed) }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__test-list-item__status__text' }, this.props.failed ? 'FAIL' : 'PASS'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__test-list-item__name' },
            this.props.test.name)),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            ref: 'timeline',
            className: 'runner-summary__test-list-item__timeline' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RunnerSummaryTimeline__["a" /* default */], {
            hoveredIteration: this.props.hoveredIteration,
            states: this.props.test.iter,
            scrollLeft: this.props.scrollLeft,
            iteration: this.props.iteration,
            type: 'test',
            onHover: this.props.onIterationHover,
            onScroll: this.props.onScroll }))));




  }};

/***/ }),

/***/ 3542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryTimelineKeyframe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_components_base_Icons_SuccessIcon__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_components_base_Icons_CloseIcon__ = __webpack_require__(94);



let

RunnerSummaryTimelineKeyframe = class RunnerSummaryTimelineKeyframe extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  shouldComponentUpdate(nextProps) {
    if (this.props.active !== nextProps.active) {
      return true;
    }

    return nextProps.hoveredIteration === this.props.iteration ||
    this.props.hoveredIteration === this.props.iteration;
  }

  getTestKeyframes() {
    const { iteration, state } = this.props;

    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-summary__body__timeline__keyframe': true,
      'is-grey': state === 0,
      'is-green': state === 1,
      'is-red': state === 2,
      'is-hovered': this.props.hoveredIteration === iteration });

  }

  getRequestKeyframes() {
    const { iteration, state } = this.props;

    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-summary__body__timeline__keyframe': true,
      'is-grey': this.props.active && state === 0,
      'is-green': this.props.active && state === 1,
      'is-red': this.props.active && state === 2,
      'is-hovered': this.props.hoveredIteration === iteration });

  }

  render() {
    const className = this.props.type === 'test' ? this.getTestKeyframes() : this.getRequestKeyframes(),
    isPassing = _.includes(className, 'is-green'),
    isFailing = _.includes(className, 'is-red');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'runner-summary__body__timeline__keyframe-wrapper',
          onMouseOver: this.props.onHover.bind(this, this.props.iteration) },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: className },
          isPassing && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Icons_SuccessIcon__["a" /* default */], { size: 'xs', style: 'primary' }),
          isFailing && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Icons_CloseIcon__["a" /* default */], { size: 'xs', style: 'primary' }))));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryHeaderIterations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_components_base_Icons_LeftSolidIcon__ = __webpack_require__(330);
var _class;




let


RunnerSummaryHeaderIterations = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["b" /* observer */])(_class = class RunnerSummaryHeaderIterations extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  componentDidUpdate() {
    const me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.tabs);

    if (me) {
      me.scrollLeft = this.props.scrollLeft;
    }
  }

  getIterationTabClasses(iterationId) {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-summary__header-iteration__tab': true,
      'is-hovered': this.props.hoveredIteration === iterationId });

  }

  render() {
    const iterationCount = _.get(this.props.run, 'context.iterations');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__header-iterations' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__header__actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__js_components_base_Buttons__["a" /* Button */], {
              className: 'runner-summary__header__back',
              size: 'small',
              type: 'secondary',
              onClick: this.props.onOpenResults },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_Icons_LeftSolidIcon__["a" /* default */], { className: 'runner-summary__back-icon' }), 'Back')),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            ref: 'tabs',
            className: 'runner-summary__header-iteration__tabs',
            onScroll: this.props.onScroll },


          _.map(_.range(iterationCount), iteration =>
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: this.getIterationTabClasses(iteration),
              key: iteration,
              onMouseEnter: this.props.onIterationHover.bind(this, iteration) },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__header-iteration__tab__count' },
              iteration + 1))))));







  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__boot_bootConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot_bootLogger__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boot_bootMessaging__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boot_bootWLModels__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boot_bootAppModels__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__boot_bootSettings__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boot_bootTelemetry__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boot_bootSession__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boot_bootRunner__ = __webpack_require__(3545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__boot_bootCrashReporter__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__boot_booted__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__boot_bootThemeManager__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__boot_bootConfigurations__ = __webpack_require__(551);
















const windowConfig = {
  process: 'runner',
  ui: true };


window.pm = {};

pm.init = done => {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig___default.a.init(windowConfig),
  __WEBPACK_IMPORTED_MODULE_2__boot_bootLogger__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__boot_bootMessaging__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_10__boot_bootCrashReporter__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__boot_bootTelemetry__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_13__boot_bootConfigurations__["a" /* initializeConfigurations */],
  __WEBPACK_IMPORTED_MODULE_6__boot_bootSettings__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__boot_bootWLModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__boot_bootAppModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_8__boot_bootSession__["a" /* bootSession */],
  __WEBPACK_IMPORTED_MODULE_12__boot_bootThemeManager__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_9__boot_bootRunner__["a" /* default */]],
  err => {
    Object(__WEBPACK_IMPORTED_MODULE_11__boot_booted__["a" /* default */])(err);
    if (err) {
      pm.logger.error('Error in the app boot sequence', err);
    }
    done && done(err);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (pm);

/***/ }),

/***/ 3545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootStore__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootConsoleInterface__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootShortcuts__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bootSyncProxy__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_GenericContextMenu__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_ProxyListManager__ = __webpack_require__(929);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_UIZoom__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_requests_CertificateManager__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_ToastManager__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_Toasts__ = __webpack_require__(920);
















/**
                                                *
                                                * @param {*} cb
                                                */
function bootRunner(cb) {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_1__bootStore__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__bootShortcuts__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__bootSyncProxy__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__bootConsoleInterface__["a" /* default */]],
  err => {
    _.assign(window.pm, {
      toasts: __WEBPACK_IMPORTED_MODULE_10__models_Toasts__,
      toastManager: new __WEBPACK_IMPORTED_MODULE_9__models_ToastManager__["a" /* default */](),
      proxyListManager: new __WEBPACK_IMPORTED_MODULE_6__controllers_ProxyListManager__["a" /* default */](), // [settings]
      certificateManager: new __WEBPACK_IMPORTED_MODULE_8__models_requests_CertificateManager__["a" /* default */](), // [settings]
      uiZoom: new __WEBPACK_IMPORTED_MODULE_7__controllers_UIZoom__["a" /* default */](), // [settings]
      contextMenuManager: new __WEBPACK_IMPORTED_MODULE_5__controllers_GenericContextMenu__["a" /* default */]() });


    // Conditionally log error or info based on the error
    err ? pm.logger.error('Runner~boot - Failed', err) : pm.logger.info('Runner~boot - Success');

    return cb && cb(err);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (bootRunner);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3546:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VariableSizeGrid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VariableSizeList; });
/* unused harmony export FixedSizeGrid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedSizeList; });
/* unused harmony export areEqual */
/* unused harmony export shouldComponentUpdate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_memoize_one__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(992);







// Animation frame based implementation of setTimeout.
// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}

var size = -1; // This utility copied from "dom-helpers" package.

function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (size === -1 || recalculate) {
    var div = document.createElement('div');
    var style = div.style;
    style.width = '50px';
    style.height = '50px';
    style.overflow = 'scroll';
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }

  return size;
}
var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.

function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement('div');
    var outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';
    var innerDiv = document.createElement('div');
    var innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;

      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }

  return cachedRTLResult;
}

var IS_SCROLLING_DEBOUNCE_INTERVAL = 150;

var defaultItemKey = function defaultItemKey(_ref) {
  var columnIndex = _ref.columnIndex,
      data = _ref.data,
      rowIndex = _ref.rowIndex;
  return rowIndex + ":" + columnIndex;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;

if (false) {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsOverscanCount =
    /*#__PURE__*/
    new WeakSet();
    devWarningsOverscanRowsColumnsCount =
    /*#__PURE__*/
    new WeakSet();
    devWarningsTagName =
    /*#__PURE__*/
    new WeakSet();
  }
}

function createGridComponent(_ref2) {
  var _class, _temp;

  var getColumnOffset = _ref2.getColumnOffset,
      getColumnStartIndexForOffset = _ref2.getColumnStartIndexForOffset,
      getColumnStopIndexForStartIndex = _ref2.getColumnStopIndexForStartIndex,
      getColumnWidth = _ref2.getColumnWidth,
      getEstimatedTotalHeight = _ref2.getEstimatedTotalHeight,
      getEstimatedTotalWidth = _ref2.getEstimatedTotalWidth,
      getOffsetForColumnAndAlignment = _ref2.getOffsetForColumnAndAlignment,
      getOffsetForRowAndAlignment = _ref2.getOffsetForRowAndAlignment,
      getRowHeight = _ref2.getRowHeight,
      getRowOffset = _ref2.getRowOffset,
      getRowStartIndexForOffset = _ref2.getRowStartIndexForOffset,
      getRowStopIndexForStartIndex = _ref2.getRowStopIndexForStartIndex,
      initInstanceProps = _ref2.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref2.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref2.validateProps;
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(Grid, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function Grid(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
      _this._resetIsScrollingTimeoutId = null;
      _this._outerRef = void 0;
      _this.state = {
        instance: Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this)),
        isScrolling: false,
        horizontalScrollDirection: 'forward',
        scrollLeft: typeof _this.props.initialScrollLeft === 'number' ? _this.props.initialScrollLeft : 0,
        scrollTop: typeof _this.props.initialScrollTop === 'number' ? _this.props.initialScrollTop : 0,
        scrollUpdateWasRequested: false,
        verticalScrollDirection: 'forward'
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = Object(__WEBPACK_IMPORTED_MODULE_3_memoize_one__["a" /* default */])(function (overscanColumnStartIndex, overscanColumnStopIndex, overscanRowStartIndex, overscanRowStopIndex, visibleColumnStartIndex, visibleColumnStopIndex, visibleRowStartIndex, visibleRowStopIndex) {
        return _this.props.onItemsRendered({
          overscanColumnStartIndex: overscanColumnStartIndex,
          overscanColumnStopIndex: overscanColumnStopIndex,
          overscanRowStartIndex: overscanRowStartIndex,
          overscanRowStopIndex: overscanRowStopIndex,
          visibleColumnStartIndex: visibleColumnStartIndex,
          visibleColumnStopIndex: visibleColumnStopIndex,
          visibleRowStartIndex: visibleRowStartIndex,
          visibleRowStopIndex: visibleRowStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = Object(__WEBPACK_IMPORTED_MODULE_3_memoize_one__["a" /* default */])(function (scrollLeft, scrollTop, horizontalScrollDirection, verticalScrollDirection, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          horizontalScrollDirection: horizontalScrollDirection,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          verticalScrollDirection: verticalScrollDirection,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (rowIndex, columnIndex) {
        var _this$props = _this.props,
            columnWidth = _this$props.columnWidth,
            direction = _this$props.direction,
            rowHeight = _this$props.rowHeight;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && columnWidth, shouldResetStyleCacheOnItemSizeChange && direction, shouldResetStyleCacheOnItemSizeChange && rowHeight);

        var key = rowIndex + ":" + columnIndex;
        var style;

        if (itemStyleCache.hasOwnProperty(key)) {
          style = itemStyleCache[key];
        } else {
          var _style;

          itemStyleCache[key] = style = (_style = {
            position: 'absolute'
          }, _style[direction === 'rtl' ? 'right' : 'left'] = getColumnOffset(_this.props, columnIndex, _this._instanceProps), _style.top = getRowOffset(_this.props, rowIndex, _this._instanceProps), _style.height = getRowHeight(_this.props, rowIndex, _this._instanceProps), _style.width = getColumnWidth(_this.props, columnIndex, _this._instanceProps), _style);
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = Object(__WEBPACK_IMPORTED_MODULE_3_memoize_one__["a" /* default */])(function (_, __, ___) {
        return {};
      });

      _this._onScroll = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientHeight = _event$currentTarget.clientHeight,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollTop = _event$currentTarget.scrollTop,
            scrollHeight = _event$currentTarget.scrollHeight,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
          // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
          // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
          // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.

          var calculatedScrollLeft = scrollLeft;

          if (direction === 'rtl') {
            switch (getRTLOffsetType()) {
              case 'negative':
                calculatedScrollLeft = -scrollLeft;
                break;

              case 'positive-descending':
                calculatedScrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          calculatedScrollLeft = Math.max(0, Math.min(calculatedScrollLeft, scrollWidth - clientWidth));
          var calculatedScrollTop = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
            scrollLeft: calculatedScrollLeft,
            scrollTop: calculatedScrollTop,
            verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward',
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1);
        });
      };

      return _this;
    }

    Grid.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = Grid.prototype;

    _proto.scrollTo = function scrollTo(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;

      if (scrollLeft !== undefined) {
        scrollLeft = Math.max(0, scrollLeft);
      }

      if (scrollTop !== undefined) {
        scrollTop = Math.max(0, scrollTop);
      }

      this.setState(function (prevState) {
        if (scrollLeft === undefined) {
          scrollLeft = prevState.scrollLeft;
        }

        if (scrollTop === undefined) {
          scrollTop = prevState.scrollTop;
        }

        if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
          return null;
        }

        return {
          horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          scrollUpdateWasRequested: true,
          verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward'
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(_ref4) {
      var _ref4$align = _ref4.align,
          align = _ref4$align === void 0 ? 'auto' : _ref4$align,
          columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex;
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          height = _this$props2.height,
          rowCount = _this$props2.rowCount,
          width = _this$props2.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;
      var scrollbarSize = getScrollbarSize();

      if (columnIndex !== undefined) {
        columnIndex = Math.max(0, Math.min(columnIndex, columnCount - 1));
      }

      if (rowIndex !== undefined) {
        rowIndex = Math.max(0, Math.min(rowIndex, rowCount - 1));
      }

      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps); // The scrollbar size should be considered when scrolling an item into view,
      // to ensure it's fully visible.
      // But we only need to account for its size when it's actually visible.

      var horizontalScrollbarSize = estimatedTotalWidth > width ? scrollbarSize : 0;
      var verticalScrollbarSize = estimatedTotalHeight > height ? scrollbarSize : 0;
      this.scrollTo({
        scrollLeft: columnIndex !== undefined ? getOffsetForColumnAndAlignment(this.props, columnIndex, align, scrollLeft, this._instanceProps, verticalScrollbarSize) : scrollLeft,
        scrollTop: rowIndex !== undefined ? getOffsetForRowAndAlignment(this.props, rowIndex, align, scrollTop, this._instanceProps, horizontalScrollbarSize) : scrollTop
      });
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props,
          initialScrollLeft = _this$props3.initialScrollLeft,
          initialScrollTop = _this$props3.initialScrollTop;

      if (this._outerRef != null) {
        var outerRef = this._outerRef;

        if (typeof initialScrollLeft === 'number') {
          outerRef.scrollLeft = initialScrollLeft;
        }

        if (typeof initialScrollTop === 'number') {
          outerRef.scrollTop = initialScrollTop;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var direction = this.props.direction;
      var _this$state2 = this.state,
          scrollLeft = _this$state2.scrollLeft,
          scrollTop = _this$state2.scrollTop,
          scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
        // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
        // So we need to determine which browser behavior we're dealing with, and mimic it.
        var outerRef = this._outerRef;

        if (direction === 'rtl') {
          switch (getRTLOffsetType()) {
            case 'negative':
              outerRef.scrollLeft = -scrollLeft;
              break;

            case 'positive-ascending':
              outerRef.scrollLeft = scrollLeft;
              break;

            default:
              var clientWidth = outerRef.clientWidth,
                  scrollWidth = outerRef.scrollWidth;
              outerRef.scrollLeft = scrollWidth - clientWidth - scrollLeft;
              break;
          }
        } else {
          outerRef.scrollLeft = Math.max(0, scrollLeft);
        }

        outerRef.scrollTop = Math.max(0, scrollTop);
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          columnCount = _this$props4.columnCount,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey : _this$props4$itemKey,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          rowCount = _this$props4.rowCount,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling;

      var _this$_getHorizontalR = this._getHorizontalRangeToRender(),
          columnStartIndex = _this$_getHorizontalR[0],
          columnStopIndex = _this$_getHorizontalR[1];

      var _this$_getVerticalRan = this._getVerticalRangeToRender(),
          rowStartIndex = _this$_getVerticalRan[0],
          rowStopIndex = _this$_getVerticalRan[1];

      var items = [];

      if (columnCount > 0 && rowCount) {
        for (var _rowIndex = rowStartIndex; _rowIndex <= rowStopIndex; _rowIndex++) {
          for (var _columnIndex = columnStartIndex; _columnIndex <= columnStopIndex; _columnIndex++) {
            items.push(Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(children, {
              columnIndex: _columnIndex,
              data: itemData,
              isScrolling: useIsScrolling ? isScrolling : undefined,
              key: itemKey({
                columnIndex: _columnIndex,
                data: itemData,
                rowIndex: _rowIndex
              }),
              rowIndex: _rowIndex,
              style: this._getItemStyle(_rowIndex, _columnIndex)
            }));
          }
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps);
      return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: this._onScroll,
        ref: this._outerRefSetter,
        style: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: estimatedTotalHeight,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: estimatedTotalWidth
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      var _this$props5 = this.props,
          columnCount = _this$props5.columnCount,
          onItemsRendered = _this$props5.onItemsRendered,
          onScroll = _this$props5.onScroll,
          rowCount = _this$props5.rowCount;

      if (typeof onItemsRendered === 'function') {
        if (columnCount > 0 && rowCount > 0) {
          var _this$_getHorizontalR2 = this._getHorizontalRangeToRender(),
              _overscanColumnStartIndex = _this$_getHorizontalR2[0],
              _overscanColumnStopIndex = _this$_getHorizontalR2[1],
              _visibleColumnStartIndex = _this$_getHorizontalR2[2],
              _visibleColumnStopIndex = _this$_getHorizontalR2[3];

          var _this$_getVerticalRan2 = this._getVerticalRangeToRender(),
              _overscanRowStartIndex = _this$_getVerticalRan2[0],
              _overscanRowStopIndex = _this$_getVerticalRan2[1],
              _visibleRowStartIndex = _this$_getVerticalRan2[2],
              _visibleRowStopIndex = _this$_getVerticalRan2[3];

          this._callOnItemsRendered(_overscanColumnStartIndex, _overscanColumnStopIndex, _overscanRowStartIndex, _overscanRowStopIndex, _visibleColumnStartIndex, _visibleColumnStopIndex, _visibleRowStartIndex, _visibleRowStopIndex);
        }
      }

      if (typeof onScroll === 'function') {
        var _this$state3 = this.state,
            _horizontalScrollDirection = _this$state3.horizontalScrollDirection,
            _scrollLeft = _this$state3.scrollLeft,
            _scrollTop = _this$state3.scrollTop,
            _scrollUpdateWasRequested = _this$state3.scrollUpdateWasRequested,
            _verticalScrollDirection = _this$state3.verticalScrollDirection;

        this._callOnScroll(_scrollLeft, _scrollTop, _horizontalScrollDirection, _verticalScrollDirection, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getHorizontalRangeToRender = function _getHorizontalRangeToRender() {
      var _this$props6 = this.props,
          columnCount = _this$props6.columnCount,
          overscanColumnCount = _this$props6.overscanColumnCount,
          overscanColumnsCount = _this$props6.overscanColumnsCount,
          overscanCount = _this$props6.overscanCount,
          rowCount = _this$props6.rowCount;
      var _this$state4 = this.state,
          horizontalScrollDirection = _this$state4.horizontalScrollDirection,
          isScrolling = _this$state4.isScrolling,
          scrollLeft = _this$state4.scrollLeft;
      var overscanCountResolved = overscanColumnCount || overscanColumnsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getColumnStartIndexForOffset(this.props, scrollLeft, this._instanceProps);
      var stopIndex = getColumnStopIndexForStartIndex(this.props, startIndex, scrollLeft, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || horizontalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || horizontalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(columnCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    _proto._getVerticalRangeToRender = function _getVerticalRangeToRender() {
      var _this$props7 = this.props,
          columnCount = _this$props7.columnCount,
          overscanCount = _this$props7.overscanCount,
          overscanRowCount = _this$props7.overscanRowCount,
          overscanRowsCount = _this$props7.overscanRowsCount,
          rowCount = _this$props7.rowCount;
      var _this$state5 = this.state,
          isScrolling = _this$state5.isScrolling,
          verticalScrollDirection = _this$state5.verticalScrollDirection,
          scrollTop = _this$state5.scrollTop;
      var overscanCountResolved = overscanRowCount || overscanRowsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getRowStartIndexForOffset(this.props, scrollTop, this._instanceProps);
      var stopIndex = getRowStopIndexForStartIndex(this.props, startIndex, scrollTop, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || verticalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || verticalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(rowCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return Grid;
  }(__WEBPACK_IMPORTED_MODULE_4_react__["PureComponent"]), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    useIsScrolling: false
  }, _temp;
}

var validateSharedProps = function validateSharedProps(_ref5, _ref6) {
  var children = _ref5.children,
      direction = _ref5.direction,
      height = _ref5.height,
      innerTagName = _ref5.innerTagName,
      outerTagName = _ref5.outerTagName,
      overscanColumnsCount = _ref5.overscanColumnsCount,
      overscanCount = _ref5.overscanCount,
      overscanRowsCount = _ref5.overscanRowsCount,
      width = _ref5.width;
  var instance = _ref6.instance;

  if (false) {
    if (typeof overscanCount === 'number') {
      if (devWarningsOverscanCount && !devWarningsOverscanCount.has(instance)) {
        devWarningsOverscanCount.add(instance);
        console.warn('The overscanCount prop has been deprecated. ' + 'Please use the overscanColumnCount and overscanRowCount props instead.');
      }
    }

    if (typeof overscanColumnsCount === 'number' || typeof overscanRowsCount === 'number') {
      if (devWarningsOverscanRowsColumnsCount && !devWarningsOverscanRowsColumnsCount.has(instance)) {
        devWarningsOverscanRowsColumnsCount.add(instance);
        console.warn('The overscanColumnsCount and overscanRowsCount props have been deprecated. ' + 'Please use the overscanColumnCount and overscanRowCount props instead.');
      }
    }

    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName && !devWarningsTagName.has(instance)) {
        devWarningsTagName.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    switch (direction) {
      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    if (typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Grids must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    }

    if (typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Grids must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE = 50;

var getEstimatedTotalHeight = function getEstimatedTotalHeight(_ref, _ref2) {
  var rowCount = _ref.rowCount;
  var rowMetadataMap = _ref2.rowMetadataMap,
      estimatedRowHeight = _ref2.estimatedRowHeight,
      lastMeasuredRowIndex = _ref2.lastMeasuredRowIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredRowIndex >= rowCount) {
    lastMeasuredRowIndex = rowCount - 1;
  }

  if (lastMeasuredRowIndex >= 0) {
    var itemMetadata = rowMetadataMap[lastMeasuredRowIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = rowCount - lastMeasuredRowIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedRowHeight;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getEstimatedTotalWidth = function getEstimatedTotalWidth(_ref3, _ref4) {
  var columnCount = _ref3.columnCount;
  var columnMetadataMap = _ref4.columnMetadataMap,
      estimatedColumnWidth = _ref4.estimatedColumnWidth,
      lastMeasuredColumnIndex = _ref4.lastMeasuredColumnIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredColumnIndex >= columnCount) {
    lastMeasuredColumnIndex = columnCount - 1;
  }

  if (lastMeasuredColumnIndex >= 0) {
    var itemMetadata = columnMetadataMap[lastMeasuredColumnIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = columnCount - lastMeasuredColumnIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedColumnWidth;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getItemMetadata = function getItemMetadata(itemType, props, index, instanceProps) {
  var itemMetadataMap, itemSize, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    itemSize = props.columnWidth;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    itemSize = props.rowHeight;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    if (itemType === 'column') {
      instanceProps.lastMeasuredColumnIndex = index;
    } else {
      instanceProps.lastMeasuredRowIndex = index;
    }
  }

  return itemMetadataMap[index];
};

var findNearestItem = function findNearestItem(itemType, props, instanceProps, offset) {
  var itemMetadataMap, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch(itemType, props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch(itemType, props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch = function findNearestItemBinarySearch(itemType, props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata(itemType, props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch = function findNearestItemExponentialSearch(itemType, props, instanceProps, index, offset) {
  var itemCount = itemType === 'column' ? props.columnCount : props.rowCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata(itemType, props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch(itemType, props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getOffsetForIndexAndAlignment = function getOffsetForIndexAndAlignment(itemType, props, index, align, scrollOffset, instanceProps, scrollbarSize) {
  var size = itemType === 'column' ? props.width : props.height;
  var itemMetadata = getItemMetadata(itemType, props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
  // To ensure it reflects actual measurements instead of just estimates.

  var estimatedTotalSize = itemType === 'column' ? getEstimatedTotalWidth(props, instanceProps) : getEstimatedTotalHeight(props, instanceProps);
  var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
  var minOffset = Math.max(0, itemMetadata.offset - size + scrollbarSize + itemMetadata.size);

  if (align === 'smart') {
    if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
      align = 'auto';
    } else {
      align = 'center';
    }
  }

  switch (align) {
    case 'start':
      return maxOffset;

    case 'end':
      return minOffset;

    case 'center':
      return Math.round(minOffset + (maxOffset - minOffset) / 2);

    case 'auto':
    default:
      if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
        return scrollOffset;
      } else if (minOffset > maxOffset) {
        // Because we only take into account the scrollbar size when calculating minOffset
        // this value can be larger than maxOffset when at the end of the list
        return minOffset;
      } else if (scrollOffset < minOffset) {
        return minOffset;
      } else {
        return maxOffset;
      }

  }
};

var VariableSizeGrid =
/*#__PURE__*/
createGridComponent({
  getColumnOffset: function getColumnOffset(props, index, instanceProps) {
    return getItemMetadata('column', props, index, instanceProps).offset;
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(props, scrollLeft, instanceProps) {
    return findNearestItem('column', props, instanceProps, scrollLeft);
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(props, startIndex, scrollLeft, instanceProps) {
    var columnCount = props.columnCount,
        width = props.width;
    var itemMetadata = getItemMetadata('column', props, startIndex, instanceProps);
    var maxOffset = scrollLeft + width;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < columnCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('column', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  getColumnWidth: function getColumnWidth(props, index, instanceProps) {
    return instanceProps.columnMetadataMap[index].size;
  },
  getEstimatedTotalHeight: getEstimatedTotalHeight,
  getEstimatedTotalWidth: getEstimatedTotalWidth,
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment('column', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment('row', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getRowOffset: function getRowOffset(props, index, instanceProps) {
    return getItemMetadata('row', props, index, instanceProps).offset;
  },
  getRowHeight: function getRowHeight(props, index, instanceProps) {
    return instanceProps.rowMetadataMap[index].size;
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(props, scrollTop, instanceProps) {
    return findNearestItem('row', props, instanceProps, scrollTop);
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(props, startIndex, scrollTop, instanceProps) {
    var rowCount = props.rowCount,
        height = props.height;
    var itemMetadata = getItemMetadata('row', props, startIndex, instanceProps);
    var maxOffset = scrollTop + height;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < rowCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('row', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref5 = props,
        estimatedColumnWidth = _ref5.estimatedColumnWidth,
        estimatedRowHeight = _ref5.estimatedRowHeight;
    var instanceProps = {
      columnMetadataMap: {},
      estimatedColumnWidth: estimatedColumnWidth || DEFAULT_ESTIMATED_ITEM_SIZE,
      estimatedRowHeight: estimatedRowHeight || DEFAULT_ESTIMATED_ITEM_SIZE,
      lastMeasuredColumnIndex: -1,
      lastMeasuredRowIndex: -1,
      rowMetadataMap: {}
    };

    instance.resetAfterColumnIndex = function (columnIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        columnIndex: columnIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterRowIndex = function (rowIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        rowIndex: rowIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterIndices = function (_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex,
          _ref6$shouldForceUpda = _ref6.shouldForceUpdate,
          shouldForceUpdate = _ref6$shouldForceUpda === void 0 ? true : _ref6$shouldForceUpda;

      if (typeof columnIndex === 'number') {
        instanceProps.lastMeasuredColumnIndex = Math.min(instanceProps.lastMeasuredColumnIndex, columnIndex - 1);
      }

      if (typeof rowIndex === 'number') {
        instanceProps.lastMeasuredRowIndex = Math.min(instanceProps.lastMeasuredRowIndex, rowIndex - 1);
      } // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.


      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref7) {
    var columnWidth = _ref7.columnWidth,
        rowHeight = _ref7.rowHeight;

    if (false) {
      if (typeof columnWidth !== 'function') {
        throw Error('An invalid "columnWidth" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (columnWidth === null ? 'null' : typeof columnWidth) + "\" was specified."));
      } else if (typeof rowHeight !== 'function') {
        throw Error('An invalid "rowHeight" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (rowHeight === null ? 'null' : typeof rowHeight) + "\" was specified."));
      }
    }
  }
});

var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsDirection = null;
var devWarningsTagName$1 = null;

if (false) {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsDirection =
    /*#__PURE__*/
    new WeakSet();
    devWarningsTagName$1 =
    /*#__PURE__*/
    new WeakSet();
  }
}

function createListComponent(_ref) {
  var _class, _temp;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this)),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = Object(__WEBPACK_IMPORTED_MODULE_3_memoize_one__["a" /* default */])(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = Object(__WEBPACK_IMPORTED_MODULE_3_memoize_one__["a" /* default */])(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection: scrollDirection,
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            direction = _this$props.direction,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _style;

          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

          var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
          itemStyleCache[index] = style = (_style = {
            position: 'absolute'
          }, _style[direction === 'rtl' ? 'right' : 'left'] = isHorizontal ? _offset : 0, _style.top = !isHorizontal ? _offset : 0, _style.height = !isHorizontal ? size : '100%', _style.width = isHorizontal ? size : '100%', _style);
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = Object(__WEBPACK_IMPORTED_MODULE_3_memoize_one__["a" /* default */])(function (_, __, ___) {
        return {};
      });

      _this._onScrollHorizontal = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;

          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
            // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
            switch (getRTLOffsetType()) {
              case 'negative':
                scrollOffset = -scrollLeft;
                break;

              case 'positive-descending':
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._onScrollVertical = function (event) {
        var _event$currentTarget2 = event.currentTarget,
            clientHeight = _event$currentTarget2.clientHeight,
            scrollHeight = _event$currentTarget2.scrollHeight,
            scrollTop = _event$currentTarget2.scrollTop;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1, null);
        });
      };

      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props2 = this.props,
          direction = _this$props2.direction,
          initialScrollOffset = _this$props2.initialScrollOffset,
          layout = _this$props2.layout;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          layout = _this$props3.layout;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;

              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;

              default:
                var clientWidth = outerRef.clientWidth,
                    scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemCount = _this$props4.itemCount,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey,
          layout = _this$props4.layout,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

      var _this$_getRangeToRend = this._getRangeToRender(),
          startIndex = _this$_getRangeToRend[0],
          stopIndex = _this$_getRangeToRend[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push(Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style: this._getItemStyle(_index)
          }));
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
      return Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, Object(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"])(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? '100%' : estimatedTotalSize,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: isHorizontal ? estimatedTotalSize : '100%'
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;

        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(),
              _overscanStartIndex = _this$_getRangeToRend2[0],
              _overscanStopIndex = _this$_getRangeToRend2[1],
              _visibleStartIndex = _this$_getRangeToRend2[2],
              _visibleStopIndex = _this$_getRangeToRend2[3];

          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        var _this$state2 = this.state,
            _scrollDirection = _this$state2.scrollDirection,
            _scrollOffset = _this$state2.scrollOffset,
            _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props5 = this.props,
          itemCount = _this$props5.itemCount,
          overscanCount = _this$props5.overscanCount;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollDirection = _this$state3.scrollDirection,
          scrollOffset = _this$state3.scrollOffset;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return List;
  }(__WEBPACK_IMPORTED_MODULE_4_react__["PureComponent"]), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false
  }, _temp;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children,
      direction = _ref2.direction,
      height = _ref2.height,
      layout = _ref2.layout,
      innerTagName = _ref2.innerTagName,
      outerTagName = _ref2.outerTagName,
      width = _ref2.width;
  var instance = _ref3.instance;

  if (false) {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    } // TODO Deprecate direction "horizontal"


    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';

    switch (direction) {
      case 'horizontal':
      case 'vertical':
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". ' + 'Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }

        break;

      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    switch (layout) {
      case 'horizontal':
      case 'vertical':
        // Valid values
        break;

      default:
        throw Error('An invalid "layout" prop has been specified. ' + 'Value should be either "horizontal" or "vertical". ' + ("\"" + layout + "\" was specified."));
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    if (isHorizontal && typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Horizontal lists must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    } else if (!isHorizontal && typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Vertical lists must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE$1 = 50;

var getItemMetadata$1 = function getItemMetadata(props, index, instanceProps) {
  var _ref = props,
      itemSize = _ref.itemSize;
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    instanceProps.lastMeasuredIndex = index;
  }

  return itemMetadataMap[index];
};

var findNearestItem$1 = function findNearestItem(props, instanceProps, offset) {
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;
  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch$1(props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch$1(props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch$1 = function findNearestItemBinarySearch(props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata$1(props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch$1 = function findNearestItemExponentialSearch(props, instanceProps, index, offset) {
  var itemCount = props.itemCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata$1(props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch$1(props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getEstimatedTotalSize = function getEstimatedTotalSize(_ref2, _ref3) {
  var itemCount = _ref2.itemCount;
  var itemMetadataMap = _ref3.itemMetadataMap,
      estimatedItemSize = _ref3.estimatedItemSize,
      lastMeasuredIndex = _ref3.lastMeasuredIndex;
  var totalSizeOfMeasuredItems = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredIndex >= itemCount) {
    lastMeasuredIndex = itemCount - 1;
  }

  if (lastMeasuredIndex >= 0) {
    var itemMetadata = itemMetadataMap[lastMeasuredIndex];
    totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;
  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
};

var VariableSizeList =
/*#__PURE__*/
createListComponent({
  getItemOffset: function getItemOffset(props, index, instanceProps) {
    return getItemMetadata$1(props, index, instanceProps).offset;
  },
  getItemSize: function getItemSize(props, index, instanceProps) {
    return instanceProps.itemMetadataMap[index].size;
  },
  getEstimatedTotalSize: getEstimatedTotalSize,
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(props, index, align, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
    // To ensure it reflects actual measurements instead of just estimates.

    var estimatedTotalSize = getEstimatedTotalSize(props, instanceProps);
    var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
    var minOffset = Math.max(0, itemMetadata.offset - size + itemMetadata.size);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        return Math.round(minOffset + (maxOffset - minOffset) / 2);

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(props, offset, instanceProps) {
    return findNearestItem$1(props, instanceProps, offset);
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(props, startIndex, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        itemCount = props.itemCount,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, startIndex, instanceProps);
    var maxOffset = scrollOffset + size;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < itemCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata$1(props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref4 = props,
        estimatedItemSize = _ref4.estimatedItemSize;
    var instanceProps = {
      itemMetadataMap: {},
      estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE$1,
      lastMeasuredIndex: -1
    };

    instance.resetAfterIndex = function (index, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instanceProps.lastMeasuredIndex = Math.min(instanceProps.lastMeasuredIndex, index - 1); // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.

      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref5) {
    var itemSize = _ref5.itemSize;

    if (false) {
      if (typeof itemSize !== 'function') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

var FixedSizeGrid =
/*#__PURE__*/
createGridComponent({
  getColumnOffset: function getColumnOffset(_ref, index) {
    var columnWidth = _ref.columnWidth;
    return index * columnWidth;
  },
  getColumnWidth: function getColumnWidth(_ref2, index) {
    var columnWidth = _ref2.columnWidth;
    return columnWidth;
  },
  getRowOffset: function getRowOffset(_ref3, index) {
    var rowHeight = _ref3.rowHeight;
    return index * rowHeight;
  },
  getRowHeight: function getRowHeight(_ref4, index) {
    var rowHeight = _ref4.rowHeight;
    return rowHeight;
  },
  getEstimatedTotalHeight: function getEstimatedTotalHeight(_ref5) {
    var rowCount = _ref5.rowCount,
        rowHeight = _ref5.rowHeight;
    return rowHeight * rowCount;
  },
  getEstimatedTotalWidth: function getEstimatedTotalWidth(_ref6) {
    var columnCount = _ref6.columnCount,
        columnWidth = _ref6.columnWidth;
    return columnWidth * columnCount;
  },
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(_ref7, columnIndex, align, scrollLeft, instanceProps, scrollbarSize) {
    var columnCount = _ref7.columnCount,
        columnWidth = _ref7.columnWidth,
        width = _ref7.width;
    var lastColumnOffset = Math.max(0, columnCount * columnWidth - width);
    var maxOffset = Math.min(lastColumnOffset, columnIndex * columnWidth);
    var minOffset = Math.max(0, columnIndex * columnWidth - width + scrollbarSize + columnWidth);

    if (align === 'smart') {
      if (scrollLeft >= minOffset - width && scrollLeft <= maxOffset + width) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(width / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastColumnOffset + Math.floor(width / 2)) {
          return lastColumnOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollLeft >= minOffset && scrollLeft <= maxOffset) {
          return scrollLeft;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollLeft < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(_ref8, rowIndex, align, scrollTop, instanceProps, scrollbarSize) {
    var rowHeight = _ref8.rowHeight,
        height = _ref8.height,
        rowCount = _ref8.rowCount;
    var lastRowOffset = Math.max(0, rowCount * rowHeight - height);
    var maxOffset = Math.min(lastRowOffset, rowIndex * rowHeight);
    var minOffset = Math.max(0, rowIndex * rowHeight - height + scrollbarSize + rowHeight);

    if (align === 'smart') {
      if (scrollTop >= minOffset - height && scrollTop <= maxOffset + height) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(height / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastRowOffset + Math.floor(height / 2)) {
          return lastRowOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollTop >= minOffset && scrollTop <= maxOffset) {
          return scrollTop;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollTop < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(_ref9, scrollLeft) {
    var columnWidth = _ref9.columnWidth,
        columnCount = _ref9.columnCount;
    return Math.max(0, Math.min(columnCount - 1, Math.floor(scrollLeft / columnWidth)));
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(_ref10, startIndex, scrollLeft) {
    var columnWidth = _ref10.columnWidth,
        columnCount = _ref10.columnCount,
        width = _ref10.width;
    var left = startIndex * columnWidth;
    var numVisibleColumns = Math.ceil((width + scrollLeft - left) / columnWidth);
    return Math.max(0, Math.min(columnCount - 1, startIndex + numVisibleColumns - 1 // -1 is because stop index is inclusive
    ));
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(_ref11, scrollTop) {
    var rowHeight = _ref11.rowHeight,
        rowCount = _ref11.rowCount;
    return Math.max(0, Math.min(rowCount - 1, Math.floor(scrollTop / rowHeight)));
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(_ref12, startIndex, scrollTop) {
    var rowHeight = _ref12.rowHeight,
        rowCount = _ref12.rowCount,
        height = _ref12.height;
    var top = startIndex * rowHeight;
    var numVisibleRows = Math.ceil((height + scrollTop - top) / rowHeight);
    return Math.max(0, Math.min(rowCount - 1, startIndex + numVisibleRows - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref13) {
    var columnWidth = _ref13.columnWidth,
        rowHeight = _ref13.rowHeight;

    if (false) {
      if (typeof columnWidth !== 'number') {
        throw Error('An invalid "columnWidth" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (columnWidth === null ? 'null' : typeof columnWidth) + "\" was specified."));
      }

      if (typeof rowHeight !== 'number') {
        throw Error('An invalid "rowHeight" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (rowHeight === null ? 'null' : typeof rowHeight) + "\" was specified."));
      }
    }
  }
});

var FixedSizeList =
/*#__PURE__*/
createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;

    if (false) {
      if (typeof itemSize !== 'number') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(prev, next) {
  for (var attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (var _attribute in next) {
    if (prev[_attribute] !== next[_attribute]) {
      return true;
    }
  }

  return false;
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-api.html#reactmemo

function areEqual(prevProps, nextProps) {
  var prevStyle = prevProps.style,
      prevRest = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(prevProps, ["style"]);

  var nextStyle = nextProps.style,
      nextRest = Object(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(nextProps, ["style"]);

  return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-component.html#shouldcomponentupdate

function shouldComponentUpdate(nextProps, nextState) {
  return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 **/

function createDetectElementResize(nonce) {
  // Check `document` and `window` in case of server-side rendering
  var _window;
  if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = global;
  }

  var attachEvent = typeof document !== 'undefined' && document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };
      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };

    /* Detect CSS Animations support to detect element display/re-attach */
    var animation = false,
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = document.createElement('fakeelement');
      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }

    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles(doc) {
    if (!doc.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = doc.head || doc.getElementsByTagName('head')[0],
          style = doc.createElement('style');

      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);

        /* Listen for a css animation to detect element display/re-attach */
        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
          // Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var AutoSizer = function (_React$PureComponent) {
  inherits(AutoSizer, _React$PureComponent);

  function AutoSizer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, AutoSizer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AutoSizer.__proto__ || Object.getPrototypeOf(AutoSizer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    }, _this._onResize = function () {
      var _this$props = _this.props,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          onResize = _this$props.onResize;


      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.

        var _height = _this._parentNode.offsetHeight || 0;
        var _width = _this._parentNode.offsetWidth || 0;

        var _style = window.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(_style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(_style.paddingRight, 10) || 0;
        var paddingTop = parseInt(_style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(_style.paddingBottom, 10) || 0;

        var newHeight = _height - paddingTop - paddingBottom;
        var newWidth = _width - paddingLeft - paddingRight;

        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: _height - paddingTop - paddingBottom,
            width: _width - paddingLeft - paddingRight
          });

          onResize({ height: _height, width: _width });
        }
      }
    }, _this._setRef = function (autoSizer) {
      _this._autoSizer = autoSizer;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(AutoSizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode;

        // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41
        this._detectElementResize = createDetectElementResize(nonce);
        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeight = _props.disableHeight,
          disableWidth = _props.disableWidth,
          style = _props.style;
      var _state = this.state,
          height = _state.height,
          width = _state.width;

      // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = { overflow: 'visible' };
      var childParams = {};

      // Avoid rendering children before the initial measurements have been collected.
      // At best this would just be wasting cycles.
      var bailoutOnChildren = false;

      if (!disableHeight) {
        if (height === 0) {
          bailoutOnChildren = true;
        }
        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        if (width === 0) {
          bailoutOnChildren = true;
        }
        outerStyle.width = 0;
        childParams.width = width;
      }

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        'div',
        {
          className: className,
          ref: this._setRef,
          style: _extends({}, outerStyle, style) },
        !bailoutOnChildren && children(childParams)
      );
    }
  }]);
  return AutoSizer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

AutoSizer.defaultProps = {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {}
};

/* harmony default export */ __webpack_exports__["a"] = (AutoSizer);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var createReactClass = __webpack_require__(285);
var PropTypes = __webpack_require__(8);
var merge = __webpack_require__(75);
var NotificationContainer = __webpack_require__(711);
var Constants = __webpack_require__(286);
var Styles = __webpack_require__(714);

var NotificationSystem = createReactClass({

  uid: 3400,

  _isMounted: false,

  _getStyles: {
    overrideStyle: {},

    overrideWidth: null,

    setOverrideStyle: function(style) {
      this.overrideStyle = style;
    },

    wrapper: function() {
      if (!this.overrideStyle) return {};
      return merge({}, Styles.Wrapper, this.overrideStyle.Wrapper);
    },

    container: function(position) {
      var override = this.overrideStyle.Containers || {};
      if (!this.overrideStyle) return {};

      this.overrideWidth = Styles.Containers.DefaultStyle.width;

      if (override.DefaultStyle && override.DefaultStyle.width) {
        this.overrideWidth = override.DefaultStyle.width;
      }

      if (override[position] && override[position].width) {
        this.overrideWidth = override[position].width;
      }

      return merge({}, Styles.Containers.DefaultStyle, Styles.Containers[position], override.DefaultStyle, override[position]);
    },

    elements: {
      notification: 'NotificationItem',
      title: 'Title',
      messageWrapper: 'MessageWrapper',
      dismiss: 'Dismiss',
      action: 'Action',
      actionWrapper: 'ActionWrapper'
    },

    byElement: function(element) {
      var self = this;
      return function(level) {
        var _element = self.elements[element];
        var override = self.overrideStyle[_element] || {};
        if (!self.overrideStyle) return {};
        return merge({}, Styles[_element].DefaultStyle, Styles[_element][level], override.DefaultStyle, override[level]);
      };
    }
  },

  _didNotificationRemoved: function(uid) {
    var notification;
    var notifications = this.state.notifications.filter(function(toCheck) {
      if (toCheck.uid === uid) {
        notification = toCheck;
        return false;
      }
      return true;
    });

    if (this._isMounted) {
      this.setState({ notifications: notifications });
    }

    if (notification && notification.onRemove) {
      notification.onRemove(notification);
    }
  },

  getInitialState: function() {
    return {
      notifications: []
    };
  },

  propTypes: {
    style: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ]),
    noAnimation: PropTypes.bool,
    allowHTML: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      style: {},
      noAnimation: false,
      allowHTML: false
    };
  },

  addNotification: function(notification) {
    var _notification = merge({}, Constants.notification, notification);
    var notifications = this.state.notifications;
    var i;

    if (!_notification.level) {
      throw new Error('notification level is required.');
    }

    if (Object.keys(Constants.levels).indexOf(_notification.level) === -1) {
      throw new Error('\'' + _notification.level + '\' is not a valid level.');
    }

    // eslint-disable-next-line
    if (isNaN(_notification.autoDismiss)) {
      throw new Error('\'autoDismiss\' must be a number.');
    }

    if (Object.keys(Constants.positions).indexOf(_notification.position) === -1) {
      throw new Error('\'' + _notification.position + '\' is not a valid position.');
    }

    // Some preparations
    _notification.position = _notification.position.toLowerCase();
    _notification.level = _notification.level.toLowerCase();
    _notification.autoDismiss = parseInt(_notification.autoDismiss, 10);

    _notification.uid = _notification.uid || this.uid;
    _notification.ref = 'notification-' + _notification.uid;
    this.uid += 1;

    // do not add if the notification already exists based on supplied uid
    for (i = 0; i < notifications.length; i += 1) {
      if (notifications[i].uid === _notification.uid) {
        return false;
      }
    }

    notifications.push(_notification);

    if (typeof _notification.onAdd === 'function') {
      notification.onAdd(_notification);
    }

    this.setState({
      notifications: notifications
    });

    return _notification;
  },

  getNotificationRef: function(notification) {
    var self = this;
    var foundNotification = null;

    Object.keys(this.refs).forEach(function(container) {
      if (container.indexOf('container') > -1) {
        Object.keys(self.refs[container].refs).forEach(function(_notification) {
          var uid = notification.uid ? notification.uid : notification;
          if (_notification === 'notification-' + uid) {
            // NOTE: Stop iterating further and return the found notification.
            // Since UIDs are uniques and there won't be another notification found.
            foundNotification = self.refs[container].refs[_notification];
          }
        });
      }
    });

    return foundNotification;
  },

  removeNotification: function(notification) {
    var foundNotification = this.getNotificationRef(notification);
    return foundNotification && foundNotification._hideNotification();
  },

  editNotification: function(notification, newNotification) {
    var foundNotification = null;
    // NOTE: Find state notification to update by using
    // `setState` and forcing React to re-render the component.
    var uid = notification.uid ? notification.uid : notification;

    var newNotifications = this.state.notifications.filter(function(stateNotification) {
      if (uid === stateNotification.uid) {
        foundNotification = stateNotification;
        return false;
      }

      return true;
    });


    if (!foundNotification) {
      return;
    }

    newNotifications.push(merge(
      {},
      foundNotification,
      newNotification
    ));

    this.setState({
      notifications: newNotifications
    });
  },

  clearNotifications: function() {
    var self = this;
    Object.keys(this.refs).forEach(function(container) {
      if (container.indexOf('container') > -1) {
        Object.keys(self.refs[container].refs).forEach(function(_notification) {
          self.refs[container].refs[_notification]._hideNotification();
        });
      }
    });
  },

  componentDidMount: function() {
    this._getStyles.setOverrideStyle(this.props.style);
    this._isMounted = true;
  },

  componentWillUnmount: function() {
    this._isMounted = false;
  },

  render: function() {
    var self = this;
    var containers = null;
    var notifications = this.state.notifications;

    if (notifications.length) {
      containers = Object.keys(Constants.positions).map(function(position) {
        var _notifications = notifications.filter(function(notification) {
          return position === notification.position;
        });

        if (!_notifications.length) {
          return null;
        }

        return (
          React.createElement(NotificationContainer, {
            ref:  'container-' + position, 
            key:  position, 
            position:  position, 
            notifications:  _notifications, 
            getStyles:  self._getStyles, 
            onRemove:  self._didNotificationRemoved, 
            noAnimation:  self.props.noAnimation, 
            allowHTML:  self.props.allowHTML}
          )
        );
      });
    }


    return (
      React.createElement("div", {className: "notifications-wrapper", style:  this._getStyles.wrapper() }, 
         containers 
      )
    );
  }
});

module.exports = NotificationSystem;


/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(75);

var emptyObject = __webpack_require__(578);
var _invariant = __webpack_require__(44);

if (false) {
  var warning = require('fbjs/lib/warning');
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (false) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (false) {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (false) {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (false) {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (false) {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (false) {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (process.env.NODE_ENV !== 'production') {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (false) {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (false) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (false) {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (false) {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (false) {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (false) {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (false) {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
          'Did you mean UNSAFE_componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var createReactClass = __webpack_require__(285);
var PropTypes = __webpack_require__(8);
var NotificationItem = __webpack_require__(712);
var Constants = __webpack_require__(286);

var NotificationContainer = createReactClass({

  propTypes: {
    position: PropTypes.string.isRequired,
    notifications: PropTypes.array.isRequired,
    getStyles: PropTypes.object
  },

  _style: {},

  componentWillMount: function() {
    // Fix position if width is overrided
    this._style = this.props.getStyles.container(this.props.position);

    if (this.props.getStyles.overrideWidth && (this.props.position === Constants.positions.tc || this.props.position === Constants.positions.bc)) {
      this._style.marginLeft = -(this.props.getStyles.overrideWidth / 2);
    }
  },

  render: function() {
    var self = this;
    var notifications;

    if ([Constants.positions.bl, Constants.positions.br, Constants.positions.bc].indexOf(this.props.position) > -1) {
      this.props.notifications.reverse();
    }

    notifications = this.props.notifications.map(function(notification) {
      return (
        React.createElement(NotificationItem, {
          ref:  'notification-' + notification.uid, 
          key:  notification.uid, 
          notification:  notification, 
          getStyles:  self.props.getStyles, 
          onRemove:  self.props.onRemove, 
          noAnimation:  self.props.noAnimation, 
          allowHTML:  self.props.allowHTML, 
          children:  self.props.children}
        )
      );
    });

    return (
      React.createElement("div", {className:  'notifications-' + this.props.position, style:  this._style}, 
         notifications 
      )
    );
  }
});


module.exports = NotificationContainer;


/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var createReactClass = __webpack_require__(285);
var PropTypes = __webpack_require__(8);
var ReactDOM = __webpack_require__(23);
var Constants = __webpack_require__(286);
var Helpers = __webpack_require__(713);
var merge = __webpack_require__(75);

/* From Modernizr */
var whichTransitionEvent = function() {
  var el = document.createElement('fakeelement');
  var transition;
  var transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };

  Object.keys(transitions).forEach(function(transitionKey) {
    if (el.style[transitionKey] !== undefined) {
      transition = transitions[transitionKey];
    }
  });

  return transition;
};

var NotificationItem = createReactClass({
  propTypes: {
    notification: PropTypes.object,
    getStyles: PropTypes.object,
    onRemove: PropTypes.func,
    allowHTML: PropTypes.bool,
    noAnimation: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ])
  },

  getDefaultProps: function() {
    return {
      noAnimation: false,
      onRemove: function() {},
      allowHTML: false
    };
  },

  getInitialState: function() {
    return {
      visible: undefined,
      removed: false
    };
  },

  componentWillMount: function() {
    var getStyles = this.props.getStyles;
    var level = this.props.notification.level;
    var dismissible = this.props.notification.dismissible;

    this._noAnimation = this.props.noAnimation;

    this._styles = {
      notification: getStyles.byElement('notification')(level),
      title: getStyles.byElement('title')(level),
      dismiss: getStyles.byElement('dismiss')(level),
      messageWrapper: getStyles.byElement('messageWrapper')(level),
      actionWrapper: getStyles.byElement('actionWrapper')(level),
      action: getStyles.byElement('action')(level)
    };

    if (!dismissible || dismissible === 'none' || dismissible === 'button') {
      this._styles.notification.cursor = 'default';
    }
  },

  _styles: {},

  _notificationTimer: null,

  _height: 0,

  _noAnimation: null,

  _isMounted: false,

  _removeCount: 0,

  _getCssPropertyByPosition: function() {
    var position = this.props.notification.position;
    var css = {};

    switch (position) {
    case Constants.positions.tl:
    case Constants.positions.bl:
      css = {
        property: 'left',
        value: -200
      };
      break;

    case Constants.positions.tr:
    case Constants.positions.br:
      css = {
        property: 'right',
        value: -200
      };
      break;

    case Constants.positions.tc:
      css = {
        property: 'top',
        value: -100
      };
      break;

    case Constants.positions.bc:
      css = {
        property: 'bottom',
        value: -100
      };
      break;

    default:
    }

    return css;
  },

  _defaultAction: function(event) {
    var notification = this.props.notification;

    event.preventDefault();
    this._hideNotification();
    if (typeof notification.action.callback === 'function') {
      notification.action.callback();
    }
  },

  _hideNotification: function() {
    if (this._notificationTimer) {
      this._notificationTimer.clear();
    }

    if (this._isMounted) {
      this.setState({
        visible: false,
        removed: true
      });
    }

    if (this._noAnimation) {
      this._removeNotification();
    }
  },

  _removeNotification: function() {
    this.props.onRemove(this.props.notification.uid);
  },

  _dismiss: function() {
    if (!this.props.notification.dismissible) {
      return;
    }

    this._hideNotification();
  },

  _showNotification: function() {
    var self = this;
    setTimeout(function() {
      if (self._isMounted) {
        self.setState({
          visible: true
        });
      }
    }, 50);
  },

  _onTransitionEnd: function() {
    if (this._removeCount > 0) return;
    if (this.state.removed) {
      this._removeCount += 1;
      this._removeNotification();
    }
  },

  componentDidMount: function() {
    var self = this;
    var transitionEvent = whichTransitionEvent();
    var notification = this.props.notification;
    var element = ReactDOM.findDOMNode(this);

    this._height = element.offsetHeight;

    this._isMounted = true;

    // Watch for transition end
    if (!this._noAnimation) {
      if (transitionEvent) {
        element.addEventListener(transitionEvent, this._onTransitionEnd);
      } else {
        this._noAnimation = true;
      }
    }


    if (notification.autoDismiss) {
      this._notificationTimer = new Helpers.Timer(function() {
        self._hideNotification();
      }, notification.autoDismiss * 1000);
    }

    this._showNotification();
  },

  _handleMouseEnter: function() {
    var notification = this.props.notification;
    if (notification.autoDismiss) {
      this._notificationTimer.pause();
    }
  },

  _handleMouseLeave: function() {
    var notification = this.props.notification;
    if (notification.autoDismiss) {
      this._notificationTimer.resume();
    }
  },

  _handleNotificationClick: function() {
    var dismissible = this.props.notification.dismissible;
    if (dismissible === 'both' || dismissible === 'click' || dismissible === true) {
      this._dismiss();
    }
  },

  componentWillUnmount: function() {
    var element = ReactDOM.findDOMNode(this);
    var transitionEvent = whichTransitionEvent();
    element.removeEventListener(transitionEvent, this._onTransitionEnd);
    this._isMounted = false;
  },

  _allowHTML: function(string) {
    return { __html: string };
  },

  render: function() {
    var notification = this.props.notification;
    var className = 'notification notification-' + notification.level;
    var notificationStyle = merge({}, this._styles.notification);
    var cssByPos = this._getCssPropertyByPosition();
    var dismiss = null;
    var actionButton = null;
    var title = null;
    var message = null;

    if (this.state.visible) {
      className += ' notification-visible';
    } else if (this.state.visible === false) {
      className += ' notification-hidden';
    }

    if (notification.dismissible === 'none') {
      className += ' notification-not-dismissible';
    }

    if (this.props.getStyles.overrideStyle) {
      if (!this.state.visible && !this.state.removed) {
        notificationStyle[cssByPos.property] = cssByPos.value;
      }

      if (this.state.visible && !this.state.removed) {
        notificationStyle.height = this._height;
        notificationStyle[cssByPos.property] = 0;
      }

      if (this.state.removed) {
        notificationStyle.overlay = 'hidden';
        notificationStyle.height = 0;
        notificationStyle.marginTop = 0;
        notificationStyle.paddingTop = 0;
        notificationStyle.paddingBottom = 0;
      }
      notificationStyle.opacity = this.state.visible ? this._styles.notification.isVisible.opacity : this._styles.notification.isHidden.opacity;
    }

    if (notification.title) {
      title = React.createElement("h4", {className: "notification-title", style:  this._styles.title},  notification.title);
    }

    if (notification.message) {
      if (this.props.allowHTML) {
        message = (
          React.createElement("div", {className: "notification-message", style:  this._styles.messageWrapper, dangerouslySetInnerHTML:  this._allowHTML(notification.message) })
        );
      } else {
        message = (
          React.createElement("div", {className: "notification-message", style:  this._styles.messageWrapper},  notification.message)
        );
      }
    }
    if (notification.dismissible === 'both' || notification.dismissible === 'button' || notification.dismissible === true) {
      dismiss = React.createElement("span", {className: "notification-dismiss", onClick:  this._dismiss, style:  this._styles.dismiss}, "×");
    }

    if (notification.action) {
      actionButton = (
        React.createElement("div", {className: "notification-action-wrapper", style:  this._styles.actionWrapper}, 
          React.createElement("button", {className: "notification-action-button", 
            onClick:  this._defaultAction, 
            style:  this._styles.action}, 
             notification.action.label
          )
        )
      );
    }

    if (notification.children) {
      actionButton = notification.children;
    }

    return (
      React.createElement("div", {className:  className, onClick:  this._handleNotificationClick, onMouseEnter:  this._handleMouseEnter, onMouseLeave:  this._handleMouseLeave, style:  notificationStyle }, 
         title, 
         message, 
         dismiss, 
         actionButton 
      )
    );
  }

});

module.exports = NotificationItem;


/***/ }),

/***/ 713:
/***/ (function(module, exports) {

var Helpers = {
  Timer: function(callback, delay) {
    var timerId;
    var start;
    var remaining = delay;

    this.pause = function() {
      clearTimeout(timerId);
      remaining -= new Date() - start;
    };

    this.resume = function() {
      start = new Date();
      clearTimeout(timerId);
      timerId = setTimeout(callback, remaining);
    };

    this.clear = function() {
      clearTimeout(timerId);
    };

    this.resume();
  }
};

module.exports = Helpers;


/***/ }),

/***/ 714:
/***/ (function(module, exports) {

// Used for calculations
var defaultWidth = 320;
var defaultColors = {
  success: {
    rgb: '94, 164, 0',
    hex: '#5ea400'
  },
  error: {
    rgb: '236, 61, 61',
    hex: '#ec3d3d'
  },
  warning: {
    rgb: '235, 173, 23',
    hex: '#ebad1a'
  },
  info: {
    rgb: '54, 156, 199',
    hex: '#369cc7'
  }
};
var defaultShadowOpacity = '0.9';

var STYLES = {

  Wrapper: {},
  Containers: {
    DefaultStyle: {
      fontFamily: 'inherit',
      position: 'fixed',
      width: defaultWidth,
      padding: '0 10px 10px 10px',
      zIndex: 9998,
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      boxSizing: 'border-box',
      height: 'auto'
    },

    tl: {
      top: '0px',
      bottom: 'auto',
      left: '0px',
      right: 'auto'
    },

    tr: {
      top: '0px',
      bottom: 'auto',
      left: 'auto',
      right: '0px'
    },

    tc: {
      top: '0px',
      bottom: 'auto',
      margin: '0 auto',
      left: '50%',
      marginLeft: -(defaultWidth / 2)
    },

    bl: {
      top: 'auto',
      bottom: '0px',
      left: '0px',
      right: 'auto'
    },

    br: {
      top: 'auto',
      bottom: '0px',
      left: 'auto',
      right: '0px'
    },

    bc: {
      top: 'auto',
      bottom: '0px',
      margin: '0 auto',
      left: '50%',
      marginLeft: -(defaultWidth / 2)
    }

  },

  NotificationItem: {
    DefaultStyle: {
      position: 'relative',
      width: '100%',
      cursor: 'pointer',
      borderRadius: '2px',
      fontSize: '13px',
      margin: '10px 0 0',
      padding: '10px',
      display: 'block',
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      boxSizing: 'border-box',
      opacity: 0,
      transition: '0.3s ease-in-out',
      WebkitTransform: 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform, opacity',

      isHidden: {
        opacity: 0
      },

      isVisible: {
        opacity: 1
      }
    },

    success: {
      borderTop: '2px solid ' + defaultColors.success.hex,
      backgroundColor: '#f0f5ea',
      color: '#4b583a',
      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')',
      MozBoxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')',
      boxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')'
    },

    error: {
      borderTop: '2px solid ' + defaultColors.error.hex,
      backgroundColor: '#f4e9e9',
      color: '#412f2f',
      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.error.rgb + ',' + defaultShadowOpacity + ')',
      MozBoxShadow: '0 0 1px rgba(' + defaultColors.error.rgb + ',' + defaultShadowOpacity + ')',
      boxShadow: '0 0 1px rgba(' + defaultColors.error.rgb + ',' + defaultShadowOpacity + ')'
    },

    warning: {
      borderTop: '2px solid ' + defaultColors.warning.hex,
      backgroundColor: '#f9f6f0',
      color: '#5a5343',
      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.warning.rgb + ',' + defaultShadowOpacity + ')',
      MozBoxShadow: '0 0 1px rgba(' + defaultColors.warning.rgb + ',' + defaultShadowOpacity + ')',
      boxShadow: '0 0 1px rgba(' + defaultColors.warning.rgb + ',' + defaultShadowOpacity + ')'
    },

    info: {
      borderTop: '2px solid ' + defaultColors.info.hex,
      backgroundColor: '#e8f0f4',
      color: '#41555d',
      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.info.rgb + ',' + defaultShadowOpacity + ')',
      MozBoxShadow: '0 0 1px rgba(' + defaultColors.info.rgb + ',' + defaultShadowOpacity + ')',
      boxShadow: '0 0 1px rgba(' + defaultColors.info.rgb + ',' + defaultShadowOpacity + ')'
    }
  },

  Title: {
    DefaultStyle: {
      fontSize: '14px',
      margin: '0 0 5px 0',
      padding: 0,
      fontWeight: 'bold'
    },

    success: {
      color: defaultColors.success.hex
    },

    error: {
      color: defaultColors.error.hex
    },

    warning: {
      color: defaultColors.warning.hex
    },

    info: {
      color: defaultColors.info.hex
    }

  },

  MessageWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  },

  Dismiss: {
    DefaultStyle: {
      cursor: 'pointer',
      fontFamily: 'Arial',
      fontSize: '17px',
      position: 'absolute',
      top: '4px',
      right: '5px',
      lineHeight: '15px',
      backgroundColor: '#dededf',
      color: '#ffffff',
      borderRadius: '50%',
      width: '14px',
      height: '14px',
      fontWeight: 'bold',
      textAlign: 'center'
    },

    success: {
      color: '#f0f5ea',
      backgroundColor: '#b0ca92'
    },

    error: {
      color: '#f4e9e9',
      backgroundColor: '#e4bebe'
    },

    warning: {
      color: '#f9f6f0',
      backgroundColor: '#e1cfac'
    },

    info: {
      color: '#e8f0f4',
      backgroundColor: '#a4becb'
    }
  },

  Action: {
    DefaultStyle: {
      background: '#ffffff',
      borderRadius: '2px',
      padding: '6px 20px',
      fontWeight: 'bold',
      margin: '10px 0 0 0',
      border: 0
    },

    success: {
      backgroundColor: defaultColors.success.hex,
      color: '#ffffff'
    },

    error: {
      backgroundColor: defaultColors.error.hex,
      color: '#ffffff'
    },

    warning: {
      backgroundColor: defaultColors.warning.hex,
      color: '#ffffff'
    },

    info: {
      backgroundColor: defaultColors.info.hex,
      color: '#ffffff'
    }
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  }
};

module.exports = STYLES;


/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const AppNotificationStyles = {
  Containers: {
    DefaultStyle: {
      zIndex: 210,
      width: 360 },

    tr: { bottom: '30px', top: 'unset' } },

  MessageWrapper: {
    DefaultStyle: {
      display: 'inline-block',
      paddingRight: '10px' } },


  NotificationItem: {
    DefaultStyle: {
      textAlign: 'inherit',
      wordBreak: 'break-word',
      margin: '0',
      overflowY: 'hidden',
      transition: 'all 0.3s ease-in-out',
      cursor: 'default' },


    success: {
      borderTop: 'none',
      backgroundColor: 'none',
      boxShadow: 'none' },


    error: {
      borderTop: 'none',
      backgroundColor: 'none',
      boxShadow: 'none' },


    warning: {
      borderTop: 'none',
      backgroundColor: 'none',
      boxShadow: 'none' },


    info: {
      borderTop: 'none',
      backgroundColor: 'none',
      boxShadow: 'none' } },


  ActionWrapper: { DefaultStyle: { display: 'inline-block' } },
  Action: {
    DefaultStyle: {
      backgroundColor: 'transparent',
      borderRadius: '0',
      padding: '0',
      fontWeight: 'bold',
      margin: '0 0 0 5px',
      border: 0,
      textDecoration: 'underline' },


    success: {
      backgroundColor: 'transparent',
      color: '#468847' },


    error: {
      backgroundColor: 'transparent',
      color: '#B94A48' },


    warning: {
      backgroundColor: 'transparent',
      color: '#C09853' },


    info: {
      backgroundColor: 'transparent',
      color: '#3A87AD' } },


  Dismiss: { DefaultStyle: { display: 'none' } } };


/* harmony default export */ __webpack_exports__["a"] = (AppNotificationStyles);

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

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericContextMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__electron_ElectronService__ = __webpack_require__(144);
let

GenericContextMenu = class GenericContextMenu {
  constructor() {
    this.Remote = __webpack_require__(21).remote;
    this.Menu = this.Remote.Menu;
    this.MenuItem = this.Remote.MenuItem;
    this.currentSelection = '';

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
        menu.popup(Object(__WEBPACK_IMPORTED_MODULE_0__electron_ElectronService__["c" /* getCurrentWindow */])());
      }
    }, false);
  }

  buildMenu(e) {
    let menu = new this.Menu(),
    isInput = _.get(e, 'target.nodeName') === 'INPUT' || _.get(e, 'target.nodeName') === 'TEXTAREA',
    selectedText = this.currentSelection;

    // Resetting values so that context menu is not triggered on right clicking anywhere on the screen
    this.currentSelection = '';

    if (!_.isEmpty(selectedText) || isInput) {
      this.buildGenericMenu(menu);
    }
    return menu;
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
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inheritsLoose;
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _assertThisInitialized;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["a"] = (memoizeOne);


/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ })

},[3511]);