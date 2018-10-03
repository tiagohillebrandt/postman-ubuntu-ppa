webpackJsonp([3],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(104);
var IE8_DOM_DEFINE = __webpack_require__(631);
var toPrimitive = __webpack_require__(397);
var dP = Object.defineProperty;

exports.f = __webpack_require__(124) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(105);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 106:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SuccessIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '12', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'success', d: 'M.26 7.748c-.36.38-.34 1.14.02 1.51l4.39 4.45c.37.38 1.11.39 1.49.03l.7-.67 1.51-1.45 7.339-7c.38-.36.39-1.1.02-1.47l-.85-.87c-.37-.37-1.11-.37-1.48-.01l-7.18 7.17c-.37.37-1.11.36-1.47-.01L2.36 7.018c-.36-.38-1.08-.37-1.44.02l-.66.71z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#F26B3A', fillRule: 'evenodd', xlinkHref: '#success' }));



function SuccessIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(103);
var createDesc = __webpack_require__(180);
module.exports = __webpack_require__(124) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(125)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 125:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(635);
var defined = __webpack_require__(395);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RightIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '5', height: '8', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'right-solid', d: 'M11 8l-5 4V4z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#right-solid' }));



function RightIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1421);


/***/ }),

/***/ 1421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_theme_ThemeManager__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_apps_console_Console__ = __webpack_require__(1422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__init__ = __webpack_require__(1531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_console__ = __webpack_require__(1534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_console_scss__ = __webpack_require__(1538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_console_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_console_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_TelemetryHelpers__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_empty_states_CrashHandler__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_ConsoleMessageConstants__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_AppUrlConstants__ = __webpack_require__(129);

















if (false) {
  window.React = React;
} else
{
  window.onbeforeunload = () => {
    return false;
  };
}

let initialState = {
  messages: [{
    message: `Love working on Postman? Work with us to make Postman better! [${__WEBPACK_IMPORTED_MODULE_13__constants_AppUrlConstants__["u" /* JOBS_URL */]}](${__WEBPACK_IMPORTED_MODULE_13__constants_AppUrlConstants__["u" /* JOBS_URL */]})`,
    type: __WEBPACK_IMPORTED_MODULE_12__constants_ConsoleMessageConstants__["a" /* CONSOLE_MESSAGE_TYPE_MARKDOWN */],
    children: {} }] };



__WEBPACK_IMPORTED_MODULE_4__init__["a" /* default */].init(err => {

  if (err) {
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_empty_states_CrashHandler__["a" /* default */], { showError: true }), rootEl);
    return;
  }

  __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('hiring', 'console_hiring_link_shown');
  const rootEl = document.getElementsByClassName('app-root')[0];
  const store = Object(__WEBPACK_IMPORTED_MODULE_6_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_7__reducers_console__["a" /* default */], initialState);
  Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_empty_states_CrashHandler__["a" /* default */], null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_redux__["Provider"], { store: store },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_apps_console_Console__["a" /* default */], { currentTheme: __WEBPACK_IMPORTED_MODULE_2__controllers_theme_ThemeManager__["a" /* default */].getCurrentTheme() }))),


  rootEl,
  () => {
    let loadTime = Object(__WEBPACK_IMPORTED_MODULE_10__utils_TelemetryHelpers__["a" /* getWindowLoadTime */])();
    __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('app_performance_metric', 'console_window_loaded', null, null, { load_time: loadTime });
  });

});

/***/ }),

/***/ 1422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Console; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConsoleMessageListContainer__ = __webpack_require__(1423);


var { setTheme } = __webpack_require__(242);let

Console = class Console extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { currentTheme: props.currentTheme };
    this.themeChangeHandler = this.themeChangeHandler.bind(this);
    setTheme(props.currentTheme);
  }

  themeChangeHandler(theme) {
    /* setting the current theme as context in ConsoleMessageItemStyles */
    setTheme(theme);

    /* Changing the state of the component to re-render the child components */
    this.setState({ currentTheme: theme });
  }

  componentDidMount() {
    pm.mediator.on('themeChange', this.themeChangeHandler);
  }

  componentWillUnmount() {
    pm.mediator.off('themeChange', this.themeChangeHandler);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'app-console' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'dropdown-root', style: { width: 0, height: 0 } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ConsoleMessageListContainer__["a" /* default */], { currentTheme: this.state.currentTheme })));


  }};

/***/ }),

/***/ 1423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleMessageListContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_console_ConsoleMessageList__ = __webpack_require__(1424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Inputs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_console__ = __webpack_require__(1530);
var _dec, _class;








const getFilteredMessages = (messages, search) => {
  if (!search) {
    return messages;
  }

  return _.filter(messages, m => {
    let message = m.message;
    if (!_.isString(message) && !_.isObject(message)) {
      message = String(message);
    }
    return _.isString(message) && _.includes(message.toLowerCase(), search.toLowerCase());
  });
};

/**
    * Handles state for console messages.
    *
    * @class ConsoleMessageListContainer
    *
    * @extends {React.Component}
    */let






ConsoleMessageListContainer = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(state => {return { messages: getFilteredMessages(state.messages, state.search), search: state.search };}), _dec(_class = class ConsoleMessageListContainer extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {

  constructor(props) {
    super(props);
  }
  render() {
    const { messages, dispatch, search } = this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'console-container' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('header', { className: 'console-header' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'console-header__input-wrapper' },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Inputs__["b" /* Input */], {
              inputStyle: 'search',
              placeholder: 'Filter Messages',
              query: search,
              onChange: value => {return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_console__["c" /* searchMessage */])(value));} })),


          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'console-header__clear-btn-wrapper' },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Buttons__["a" /* Button */], {
                type: 'secondary',
                onClick: () => {return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_console__["b" /* clearMessages */])());} }, 'Clear'))),





        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_console_ConsoleMessageList__["a" /* default */], {
          messages: messages,
          onExpandUpdate: (message, height) => {return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_console__["d" /* updateMessageExpansion */])({ id: message.id }, height));} })));



  }

  /**
     * Adds the incoming message to the state so Console can display it.
     *
     * @listens Mediator#onConsoleMessage
     * @memberof ConsoleMessageListContainer
     */
  componentDidMount() {
    pm.mediator.on('onConsoleMessage', msg => {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_console__["a" /* addMessage */])(msg));
    });
  }}) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleMessageList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConsoleMessageItem__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_ConsoleMessageConstants__ = __webpack_require__(183);



let

ConsoleMessageList = class ConsoleMessageList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const { messages } = this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-message-list' },

        _.map(messages, (m, index) => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ConsoleMessageItem__["a" /* default */], {
              key: index,
              message: m,
              allowToggle: Boolean(m.children.data),
              showLabel: m.children.type === __WEBPACK_IMPORTED_MODULE_3__constants_ConsoleMessageConstants__["b" /* CONSOLE_MESSAGE_TYPE_NET */] }));


        })));



  }};


ConsoleMessageList.propTypes = { messages: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired };

ConsoleMessageList.defaultProps = { messages: [] };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleMessageHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_react_json_tree__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_react_json_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__postman_react_json_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Markdown__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_DownSolidIcon__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_RightSolidIcon__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_ConsoleMessageConstants__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_AppUrlConstants__ = __webpack_require__(129);








var {
  getTheme,
  getArrowStyle,
  getArrowSignStyle,
  getArrowContainerStyle,
  getBoolStyle,
  getLabelStyle,
  getNestedNodeStyle,
  getNestedNodeItemTypeStyle,
  getNestedNodeChildrenStyle,
  getRootNodeStyle,
  getTreeStyle,
  getValueLabelStyle } =
__webpack_require__(242);



const getItemString = (type, data, itemType) => {return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, itemType);};let

ConsoleMessageHeader = class ConsoleMessageHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleMarkdownLinkClick = this.handleMarkdownLinkClick.bind(this);
  }

  getIconClasses() {
    const { allowToggle } = this.props;
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'console-message-item__arrow--hidden': !allowToggle,
      'console-message-item__arrow': allowToggle });

  }

  getMessageDataClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'console-message-item__data': true,
      'console_message-item__data__text': _.isString(this.props.title),
      'console-message-item__data--leftpadded': this.props.isSubMessage });

  }

  showMessage(data) {
    if (!data) {
      if (data === undefined) {return 'undefined';}
      if (data === null) {return 'null';}
    } else
    if (_.isObject(data) || _.isArray(data)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__postman_react_json_tree___default.a, {
          hideRoot: true,
          data: this.formatData(data),
          getItemString: getItemString,
          theme: {
            extend: getTheme(),
            nestedNodeLabel: getLabelStyle,
            value: getBoolStyle,
            valueLabel: getValueLabelStyle,
            tree: getTreeStyle,
            nestedNodeChildren: getNestedNodeChildrenStyle,
            nestedNode: getNestedNodeStyle,
            arrow: getArrowStyle,
            arrowSign: getArrowSignStyle,
            arrowContainer: getArrowContainerStyle,
            nestedNodeItemType: getNestedNodeItemTypeStyle,
            rootNode: getRootNodeStyle } }));


    } else
    if (_.isBoolean(data)) {
      return String(data);
    } else
    if (this.props.type === __WEBPACK_IMPORTED_MODULE_8__constants_ConsoleMessageConstants__["a" /* CONSOLE_MESSAGE_TYPE_MARKDOWN */]) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Markdown__["a" /* default */], {
          className: 'console_message-item__data__text__markdown',
          source: data,
          onLinkClick: this.handleMarkdownLinkClick }));


    }

    return data;
  }

  formatData(data) {
    if (_.isArray(data)) {
      return { 'Array': data };
    } else
    if (_.isObject(data)) {
      const keys = _.keys(data);
      return keys.length && _.isObject(data[keys[0]]) ? data : { 'Object': data };
    }
    return null;
  }

  handleMarkdownLinkClick(link) {
    if (link === __WEBPACK_IMPORTED_MODULE_9__constants_AppUrlConstants__["u" /* JOBS_URL */]) {
      __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('hiring', 'console_hiring_link_clicked');
    }
  }

  render() {
    const { allowToggle, showLabel, label, title, timestamp } = this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'console-message-item__header',
          onClick: allowToggle && this.props.onToggle },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-message-item__icon-wrapper' },

          this.props.expanded ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_DownSolidIcon__["a" /* default */], { className: this.getIconClasses() }) :
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_RightSolidIcon__["a" /* default */], { className: this.getIconClasses() })),



        showLabel && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-message-item__label' },
          label),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getMessageDataClasses() }, this.showMessage(title)),

        timestamp &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-message-item__timestamp' }, __WEBPACK_IMPORTED_MODULE_2_moment___default()(timestamp).format('hh:mm:ss.SSS'))));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(393);
__webpack_require__(637);
module.exports = __webpack_require__(404).f('iterator');


/***/ }),

/***/ 1427:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(394);
var defined = __webpack_require__(395);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 1428:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 1429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(398);
var descriptor = __webpack_require__(180);
var setToStringTag = __webpack_require__(403);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(123)(IteratorPrototype, __webpack_require__(69)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 1430:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(103);
var anObject = __webpack_require__(104);
var getKeys = __webpack_require__(182);

module.exports = __webpack_require__(124) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 1431:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(126);
var toLength = __webpack_require__(636);
var toAbsoluteIndex = __webpack_require__(1432);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 1432:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(394);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 1433:
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(89).document;
module.exports = document && document.documentElement;


/***/ }),

/***/ 1434:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(106);
var toObject = __webpack_require__(240);
var IE_PROTO = __webpack_require__(400)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 1435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(1436);
var step = __webpack_require__(1437);
var Iterators = __webpack_require__(181);
var toIObject = __webpack_require__(126);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(630)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 1436:
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 1437:
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 1438:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1439), __esModule: true };

/***/ }),

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1440);
__webpack_require__(1444);
__webpack_require__(1445);
__webpack_require__(1446);
module.exports = __webpack_require__(53).Symbol;


/***/ }),

/***/ 1440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(89);
var has = __webpack_require__(106);
var DESCRIPTORS = __webpack_require__(124);
var $export = __webpack_require__(88);
var redefine = __webpack_require__(633);
var META = __webpack_require__(1441).KEY;
var $fails = __webpack_require__(125);
var shared = __webpack_require__(401);
var setToStringTag = __webpack_require__(403);
var uid = __webpack_require__(239);
var wks = __webpack_require__(69);
var wksExt = __webpack_require__(404);
var wksDefine = __webpack_require__(405);
var enumKeys = __webpack_require__(1442);
var isArray = __webpack_require__(1443);
var anObject = __webpack_require__(104);
var isObject = __webpack_require__(105);
var toIObject = __webpack_require__(126);
var toPrimitive = __webpack_require__(397);
var createDesc = __webpack_require__(180);
var _create = __webpack_require__(398);
var gOPNExt = __webpack_require__(638);
var $GOPD = __webpack_require__(640);
var $DP = __webpack_require__(103);
var $keys = __webpack_require__(182);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(639).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(241).f = $propertyIsEnumerable;
  __webpack_require__(406).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(238)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(123)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 1441:
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(239)('meta');
var isObject = __webpack_require__(105);
var has = __webpack_require__(106);
var setDesc = __webpack_require__(103).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(125)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ 1442:
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(182);
var gOPS = __webpack_require__(406);
var pIE = __webpack_require__(241);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ 1443:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(399);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 1444:
/***/ (function(module, exports) {



/***/ }),

/***/ 1445:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(405)('asyncIterator');


/***/ }),

/***/ 1446:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(405)('observable');


/***/ }),

/***/ 1447:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1448), __esModule: true };

/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1449);
module.exports = __webpack_require__(53).Object.setPrototypeOf;


/***/ }),

/***/ 1449:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(88);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(1450).set });


/***/ }),

/***/ 1450:
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(105);
var anObject = __webpack_require__(104);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(396)(Function.call, __webpack_require__(640).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ 1451:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1452), __esModule: true };

/***/ }),

/***/ 1452:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1453);
var $Object = __webpack_require__(53).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ 1453:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(88);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(398) });


/***/ }),

/***/ 1454:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1455), __esModule: true };

/***/ }),

/***/ 1455:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1456);
module.exports = __webpack_require__(53).Object.assign;


/***/ }),

/***/ 1456:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(88);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(1457) });


/***/ }),

/***/ 1457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(182);
var gOPS = __webpack_require__(406);
var pIE = __webpack_require__(241);
var toObject = __webpack_require__(240);
var IObject = __webpack_require__(635);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(125)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 1458:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1459);
module.exports = __webpack_require__(53).Object.keys;


/***/ }),

/***/ 1459:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(240);
var $keys = __webpack_require__(182);

__webpack_require__(641)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 1460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(629);

var _iterator2 = _interopRequireDefault(_iterator);

var _typeof2 = __webpack_require__(237);

var _typeof3 = _interopRequireDefault(_typeof2);

exports['default'] = function (obj) {
  if (obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3['default'])(obj)) === 'object' && !Array.isArray(obj) && typeof obj[_iterator2['default']] === 'function') {
    return 'Iterable';
  }
  return Object.prototype.toString.call(obj).slice(8, -1);
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ 1461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(179);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getOwnPropertyNames = __webpack_require__(643);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

exports['default'] = JSONObjectNode;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _JSONNestedNode = __webpack_require__(409);

var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data) {
  var len = (0, _getOwnPropertyNames2['default'])(data).length;
  return len + ' ' + (len !== 1 ? 'keys' : 'key');
}

// Configures <JSONNestedNode> to render an Object
function JSONObjectNode(_ref) {
  var props = (0, _objectWithoutProperties3['default'])(_ref, []);

  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
    nodeType: 'Object',
    nodeTypeIndicator: '{}',
    createItemString: createItemString
  }));
}

/***/ }),

/***/ 1462:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1463);
var $Object = __webpack_require__(53).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),

/***/ 1463:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(641)('getOwnPropertyNames', function () {
  return __webpack_require__(638).f;
});


/***/ }),

/***/ 1464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getIterator2 = __webpack_require__(645);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getOwnPropertyNames = __webpack_require__(643);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _keys = __webpack_require__(408);

var _keys2 = _interopRequireDefault(_keys);

exports['default'] = getCollectionEntries;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getLength(type, collection) {
  if (type === 'Object') {
    return (0, _keys2['default'])(collection).length;
  } else if (type === 'Array') {
    return collection.length;
  }

  return Infinity;
}

function isIterableMap(collection) {
  return typeof collection.set === 'function';
}

function getEntries(type, collection, sortObjectKeys) {
  var from = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var to = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Infinity;

  var res = void 0;

  if (type === 'Object') {
    var keys = (0, _getOwnPropertyNames2['default'])(collection);

    if (typeof sortObjectKeys !== 'undefined') {
      keys.sort(sortObjectKeys);
    }

    keys = keys.slice(from, to + 1);

    res = {
      entries: keys.map(function (key) {
        return { key: key, value: collection[key] };
      })
    };
  } else if (type === 'Array') {
    res = {
      entries: collection.slice(from, to + 1).map(function (val, idx) {
        return { key: idx + from, value: val };
      })
    };
  } else {
    var idx = 0;
    var entries = [];
    var done = true;

    var isMap = isIterableMap(collection);

    for (var _iterator = collection, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3['default'])(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var item = _ref;

      if (idx > to) {
        done = false;
        break;
      }if (from <= idx) {
        if (isMap && Array.isArray(item)) {
          entries.push({ key: item[0], value: item[1] });
        } else {
          entries.push({ key: idx, value: item });
        }
      }
      idx++;
    }

    res = {
      hasMore: !done,
      entries: entries
    };
  }

  return res;
}

function getRanges(from, to, limit) {
  var ranges = [];
  while (to - from > limit * limit) {
    limit = limit * limit;
  }
  for (var i = from; i <= to; i += limit) {
    ranges.push({ from: i, to: Math.min(to, i + limit - 1) });
  }

  return ranges;
}

function getCollectionEntries(type, collection, sortObjectKeys, limit) {
  var from = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var to = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Infinity;

  var getEntriesBound = getEntries.bind(null, type, collection, sortObjectKeys);

  if (!limit) {
    return getEntriesBound().entries;
  }

  var isSubset = to < Infinity;
  var length = Math.min(to - from, getLength(type, collection));

  if (type !== 'Iterable') {
    if (length <= limit || limit < 7) {
      return getEntriesBound(from, to).entries;
    }
  } else {
    if (length <= limit && !isSubset) {
      return getEntriesBound(from, to).entries;
    }
  }

  var limitedEntries = void 0;
  if (type === 'Iterable') {
    var _getEntriesBound = getEntriesBound(from, from + limit - 1),
        hasMore = _getEntriesBound.hasMore,
        entries = _getEntriesBound.entries;

    limitedEntries = hasMore ? [].concat(entries, getRanges(from + limit, from + 2 * limit - 1, limit)) : entries;
  } else {
    limitedEntries = isSubset ? getRanges(from, to, limit) : [].concat(getEntriesBound(0, limit - 5).entries, getRanges(limit - 4, length - 5, limit), getEntriesBound(length - 4, length - 1).entries);
  }

  return limitedEntries;
}

/***/ }),

/***/ 1465:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(637);
__webpack_require__(393);
module.exports = __webpack_require__(1466);


/***/ }),

/***/ 1466:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(104);
var get = __webpack_require__(646);
module.exports = __webpack_require__(53).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 1467:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(399);
var TAG = __webpack_require__(69)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 1468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = undefined;

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(391);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(392);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(407);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _function = __webpack_require__(647);

var _function2 = _interopRequireDefault(_function);

var _JSONArrow = __webpack_require__(644);

var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ItemRange = (_temp = _class = function (_Component) {
  (0, _inherits3['default'])(ItemRange, _Component);

  function ItemRange(props) {
    (0, _classCallCheck3['default'])(this, ItemRange);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));

    _this.shouldComponentUpdate = _function2['default'];

    _this.state = { expanded: false };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  ItemRange.prototype.render = function render() {
    var _props = this.props,
        styling = _props.styling,
        from = _props.from,
        to = _props.to,
        renderChildNodes = _props.renderChildNodes,
        nodeType = _props.nodeType;


    return this.state.expanded ? _react2['default'].createElement(
      'div',
      styling('itemRange', this.state.expanded),
      renderChildNodes(this.props, from, to)
    ) : _react2['default'].createElement(
      'div',
      (0, _extends3['default'])({}, styling('itemRange', this.state.expanded), {
        onClick: this.handleClick
      }),
      _react2['default'].createElement(_JSONArrow2['default'], {
        nodeType: nodeType,
        styling: styling,
        expanded: false,
        onClick: this.handleClick,
        arrowStyle: 'double'
      }),
      from + ' ... ' + to
    );
  };

  ItemRange.prototype.handleClick = function handleClick() {
    this.setState({ expanded: !this.state.expanded });
  };

  return ItemRange;
}(_react.Component), _class.propTypes = {
  styling: _propTypes2['default'].func.isRequired,
  from: _propTypes2['default'].number.isRequired,
  to: _propTypes2['default'].number.isRequired,
  renderChildNodes: _propTypes2['default'].func.isRequired,
  nodeType: _propTypes2['default'].string.isRequired
}, _temp);
exports['default'] = ItemRange;

/***/ }),

/***/ 1469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = shallowEqual;

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];

/***/ }),

/***/ 1470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(179);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports['default'] = JSONArrayNode;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _JSONNestedNode = __webpack_require__(409);

var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data) {
  return data.length + ' ' + (data.length !== 1 ? 'items' : 'item');
}

// Configures <JSONNestedNode> to render an Array
function JSONArrayNode(_ref) {
  var props = (0, _objectWithoutProperties3['default'])(_ref, []);

  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
    nodeType: 'Array',
    nodeTypeIndicator: '[]',
    createItemString: createItemString
  }));
}

/***/ }),

/***/ 1471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(179);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getIterator2 = __webpack_require__(645);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _isSafeInteger = __webpack_require__(1472);

var _isSafeInteger2 = _interopRequireDefault(_isSafeInteger);

exports['default'] = JSONIterableNode;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _JSONNestedNode = __webpack_require__(409);

var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data, limit) {
  var count = 0;
  var hasMore = false;
  if ((0, _isSafeInteger2['default'])(data.size)) {
    count = data.size;
  } else {
    for (var _iterator = data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3['default'])(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var entry = _ref;
      // eslint-disable-line no-unused-vars
      if (limit && count + 1 > limit) {
        hasMore = true;
        break;
      }
      count += 1;
    }
  }
  return '' + (hasMore ? '>' : '') + count + ' ' + (count !== 1 ? 'entries' : 'entry');
}

// Configures <JSONNestedNode> to render an iterable
function JSONIterableNode(_ref2) {
  var props = (0, _objectWithoutProperties3['default'])(_ref2, []);

  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
    nodeType: 'Iterable',
    nodeTypeIndicator: '()',
    createItemString: createItemString
  }));
}

/***/ }),

/***/ 1472:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1473), __esModule: true };

/***/ }),

/***/ 1473:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1474);
module.exports = __webpack_require__(53).Number.isSafeInteger;


/***/ }),

/***/ 1474:
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(88);
var isInteger = __webpack_require__(1475);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ 1475:
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(105);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ 1476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Renders simple values (eg. strings, numbers, booleans, etc)
 */

var JSONValueNode = function JSONValueNode(_ref) {
  var nodeType = _ref.nodeType,
      styling = _ref.styling,
      labelRenderer = _ref.labelRenderer,
      keyPath = _ref.keyPath,
      valueRenderer = _ref.valueRenderer,
      value = _ref.value,
      valueGetter = _ref.valueGetter;
  return _react2['default'].createElement(
    'li',
    styling('value', nodeType, keyPath),
    _react2['default'].createElement(
      'label',
      styling(['label', 'valueLabel'], nodeType, keyPath),
      labelRenderer.apply(undefined, keyPath),
      ':'
    ),
    _react2['default'].createElement(
      'span',
      styling('valueText', nodeType, keyPath),
      valueRenderer.apply(undefined, [valueGetter(value), value].concat(keyPath))
    )
  );
};

JSONValueNode.propTypes = {
  nodeType: _propTypes2['default'].string.isRequired,
  styling: _propTypes2['default'].func.isRequired,
  labelRenderer: _propTypes2['default'].func.isRequired,
  keyPath: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])).isRequired,
  valueRenderer: _propTypes2['default'].func.isRequired,
  value: _propTypes2['default'].any,
  valueGetter: _propTypes2['default'].func
};

JSONValueNode.defaultProps = {
  valueGetter: function valueGetter(value) {
    return value;
  }
};

exports['default'] = JSONValueNode;

/***/ }),

/***/ 1477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _solarized = __webpack_require__(1478);

var _solarized2 = _interopRequireDefault(_solarized);

var _reactBase16Styling = __webpack_require__(1479);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var colorMap = function colorMap(theme) {
  return {
    BACKGROUND_COLOR: theme.base00,
    TEXT_COLOR: theme.base07,
    STRING_COLOR: theme.base0B,
    DATE_COLOR: theme.base0B,
    NUMBER_COLOR: theme.base09,
    BOOLEAN_COLOR: theme.base09,
    NULL_COLOR: theme.base08,
    UNDEFINED_COLOR: theme.base08,
    FUNCTION_COLOR: theme.base08,
    SYMBOL_COLOR: theme.base08,
    LABEL_COLOR: theme.base0D,
    ARROW_COLOR: theme.base0D,
    ITEM_STRING_COLOR: theme.base0B,
    ITEM_STRING_EXPANDED_COLOR: theme.base03
  };
};

var valueColorMap = function valueColorMap(colors) {
  return {
    String: colors.STRING_COLOR,
    Date: colors.DATE_COLOR,
    Number: colors.NUMBER_COLOR,
    Boolean: colors.BOOLEAN_COLOR,
    Null: colors.NULL_COLOR,
    Undefined: colors.UNDEFINED_COLOR,
    Function: colors.FUNCTION_COLOR,
    Symbol: colors.SYMBOL_COLOR
  };
};

var getDefaultThemeStyling = function getDefaultThemeStyling(theme) {
  var colors = colorMap(theme);

  return {
    tree: {
      border: 0,
      padding: 0,
      marginTop: 8,
      marginBottom: 8,
      marginLeft: 2,
      marginRight: 0,
      fontSize: '0.90em',
      listStyle: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      backgroundColor: colors.BACKGROUND_COLOR
    },

    value: {
      paddingTop: 3,
      paddingBottom: 3,
      paddingRight: 0,
      marginLeft: 14,
      WebkitUserSelect: 'text',
      MozUserSelect: 'text',
      wordWrap: 'break-word',
      paddingLeft: 34,
      textIndent: -7,
      wordBreak: 'break-all'
    },

    label: {
      display: 'inline-block',
      color: colors.LABEL_COLOR
    },

    valueLabel: {
      marginRight: 5
    },

    valueText: function valueText(_ref, nodeType) {
      var style = _ref.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          color: valueColorMap(colors)[nodeType]
        })
      };
    },

    itemRange: {
      marginBottom: 8,
      cursor: 'pointer',
      color: colors.LABEL_COLOR
    },

    arrow: function arrow(_ref2, nodeType, expanded) {
      var style = _ref2.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          display: 'inline-block',
          marginLeft: 0,
          marginTop: 8,
          float: 'left',
          transition: '150ms',
          WebkitTransition: '150ms',
          MozTransition: '150ms',
          WebkitTransform: expanded ? 'rotateZ(0deg)' : 'rotateZ(-90deg)',
          MozTransform: expanded ? 'rotateZ(0deg)' : 'rotateZ(-90deg)',
          transform: expanded ? 'rotateZ(0deg)' : 'rotateZ(-90deg)',
          position: 'relative'
        })
      };
    },

    arrowContainer: function arrowContainer(_ref3, arrowStyle) {
      var style = _ref3.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          display: 'inline-block',
          paddingTop: 2,
          paddingBottom: 2,
          paddingRight: arrowStyle === 'double' ? 12 : 5,
          paddingLeft: arrowStyle === 'double' ? 12 : 5,
          cursor: 'pointer'
        })
      };
    },

    arrowSign: {
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTopWidth: 5,
      borderTopStyle: 'solid',
      borderTopColor: colors.ARROW_COLOR
    },

    arrowSignInner: {
      position: 'absolute',
      top: 0,
      left: -5
    },

    nestedNode: {
      position: 'relative',
      paddingTop: 3,
      paddingBottom: 3,
      marginLeft: 14
    },

    rootNode: {
      padding: 0,
      margin: 0
    },

    nestedNodeLabel: {
      margin: 0,
      padding: 0,
      cursor: 'pointer'
    },

    nestedNodeItemString: function nestedNodeItemString(_ref4, nodeType, expanded) {
      var style = _ref4.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          cursor: 'default',
          color: expanded ? colors.ITEM_STRING_EXPANDED_COLOR : colors.ITEM_STRING_COLOR
        })
      };
    },

    nestedNodeItemType: {
      marginLeft: 5,
      marginRight: 5
    },

    nestedNodeChildren: function nestedNodeChildren(_ref5, nodeType, expanded) {
      var style = _ref5.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          padding: 0,
          margin: 0,
          listStyle: 'none',
          display: expanded ? 'block' : 'none'
        })
      };
    },

    rootNodeChildren: {
      padding: 0,
      margin: 0,
      listStyle: 'none'
    }
  };
};

exports['default'] = (0, _reactBase16Styling.createStyling)({
  getStylingFromBase16: getDefaultThemeStyling,
  defaultBase16: _solarized2['default']
});

/***/ }),

/***/ 1478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'solarized',
  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
  base00: '#002b36',
  base01: '#073642',
  base02: '#586e75',
  base03: '#657b83',
  base04: '#839496',
  base05: '#93a1a1',
  base06: '#eee8d5',
  base07: '#fdf6e3',
  base08: '#dc322f',
  base09: '#cb4b16',
  base0A: '#b58900',
  base0B: '#859900',
  base0C: '#2aa198',
  base0D: '#268bd2',
  base0E: '#6c71c4',
  base0F: '#d33682'
};

/***/ }),

/***/ 1479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBase16Theme = exports.createStyling = undefined;

var _typeof2 = __webpack_require__(237);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(1480);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _from = __webpack_require__(648);

var _from2 = _interopRequireDefault(_from);

var _keys = __webpack_require__(408);

var _keys2 = _interopRequireDefault(_keys);

var _lodash = __webpack_require__(1487);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(1488);

var base16 = _interopRequireWildcard(_base);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var truthy = function truthy(x) {
  return x;
};
var returnEmptyObject = function returnEmptyObject() {
  return {};
};
var DEFAULT_BASE16 = base16.default;

var BASE16_KEYS = (0, _keys2.default)(DEFAULT_BASE16);
var GRAY_COLORS = (0, _from2.default)({ length: 8 }).map(function (_, idx) {
  return 'base0' + idx;
});

var getReversedKey = function getReversedKey(key) {
  return GRAY_COLORS.indexOf(key) !== -1 ? 'base0' + (7 - key.match(/base0(\d)/)[1]) : key;
};

var reverseTheme = function reverseTheme(theme) {
  return (0, _keys2.default)(theme).reduce(function (t, key) {
    return t[getReversedKey(key)] = theme[key], t;
  }, {});
};

var getStylingByKeys = function getStylingByKeys(customStyling, defaultStyling, keys) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  var styles = keys.reduce(function (s, key) {
    return [].concat((0, _toConsumableArray3.default)(s), [defaultStyling[key], customStyling[key]]);
  }, []).filter(truthy);

  return styles.reduce(function (obj, s) {
    if (typeof s === 'string') {
      return (0, _extends3.default)({}, obj, { className: obj.className + ' ' + s });
    } else if ((typeof s === 'undefined' ? 'undefined' : (0, _typeof3.default)(s)) === 'object') {
      return (0, _extends3.default)({}, obj, { style: (0, _extends3.default)({}, obj.style, s) });
    } else if (typeof s === 'function') {
      return (0, _extends3.default)({}, obj, s.apply(undefined, [obj].concat(args)));
    } else {
      return obj;
    }
  }, { className: '', style: {} });
};

var createStyling = (0, _lodash2.default)(function (options) {
  for (var _len2 = arguments.length, args = Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
    args[_key2 - 4] = arguments[_key2];
  }

  var themeOrStyling = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var base16Themes = arguments[2];
  var isLightTheme = arguments[3];
  var _options$getStylingFr = options.getStylingFromBase16;
  var getStylingFromBase16 = _options$getStylingFr === undefined ? returnEmptyObject : _options$getStylingFr;
  var _options$defaultBase = options.defaultBase16;
  var defaultBase16 = _options$defaultBase === undefined ? DEFAULT_BASE16 : _options$defaultBase;


  var base16Theme = getBase16Theme(themeOrStyling, base16Themes);
  if (base16Theme) {
    themeOrStyling = (0, _extends3.default)({}, base16Theme, themeOrStyling);
  }

  var theme = BASE16_KEYS.reduce(function (t, key) {
    return t[key] = themeOrStyling[key] || defaultBase16[key], t;
  }, {});

  var customStyling = (0, _keys2.default)(themeOrStyling).reduce(function (s, key) {
    return BASE16_KEYS.indexOf(key) === -1 ? (s[key] = themeOrStyling[key], s) : s;
  }, {});

  var defaultStyling = getStylingFromBase16(isLightTheme ? reverseTheme(theme) : theme);

  return (0, _lodash2.default)(getStylingByKeys, 3).apply(undefined, [customStyling, defaultStyling].concat(args));
}, 4);

var getBase16Theme = function getBase16Theme(theme, base16Themes) {
  if (theme && theme.extend) {
    theme = theme.extend;
  }

  if (typeof theme === 'string') {
    theme = (base16Themes || {})[theme] || base16[theme];
  }

  return theme && theme.hasOwnProperty('base00') ? theme : undefined;
};

exports.createStyling = createStyling;
exports.getBase16Theme = getBase16Theme;

/***/ }),

/***/ 1480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(648);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 1481:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(393);
__webpack_require__(1482);
module.exports = __webpack_require__(53).Array.from;


/***/ }),

/***/ 1482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(396);
var $export = __webpack_require__(88);
var toObject = __webpack_require__(240);
var call = __webpack_require__(1483);
var isArrayIter = __webpack_require__(1484);
var toLength = __webpack_require__(636);
var createProperty = __webpack_require__(1485);
var getIterFn = __webpack_require__(646);

$export($export.S + $export.F * !__webpack_require__(1486)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 1483:
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(104);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 1484:
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(181);
var ITERATOR = __webpack_require__(69)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 1485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(103);
var createDesc = __webpack_require__(180);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 1486:
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(69)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 1487:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128,
    REARG_FLAG = 256,
    FLIP_FLAG = 512;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', ARY_FLAG],
  ['bind', BIND_FLAG],
  ['bindKey', BIND_KEY_FLAG],
  ['curry', CURRY_FLAG],
  ['curryRight', CURRY_RIGHT_FLAG],
  ['flip', FLIP_FLAG],
  ['partial', PARTIAL_FLAG],
  ['partialRight', PARTIAL_RIGHT_FLAG],
  ['rearg', REARG_FLAG]
];

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

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
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
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
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
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
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      result++;
    }
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var objectCreate = Object.create;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/* Used to set `toString` methods. */
var defineProperty = (function() {
  var func = getNative(Object, 'defineProperty'),
      name = getNative.name;

  return (name && name.length > 2) ? func : undefined;
}());

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG,
      isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
      isFlip = bitmask & FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

  if (!(bitmask & CURRY_BOUND_FLAG)) {
    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
  }

  var result = wrapFunc(func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity);
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 *   512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] == null
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  return setWrapToString(result, func, bitmask);
}

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length,
      lastIndex = length - 1;

  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
var setWrapToString = !defineProperty ? identity : function(wrapper, reference, bitmask) {
  var source = (reference + '');
  return defineProperty(wrapper, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
  });
};

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

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
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

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
  return !!value && (type == 'object' || type == 'function');
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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

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
function constant(value) {
  return function() {
    return value;
  };
}

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

// Assign default placeholders.
curry.placeholder = {};

module.exports = curry;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 1488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _threezerotwofour = __webpack_require__(1489);

exports.threezerotwofour = _interopRequire(_threezerotwofour);

var _apathy = __webpack_require__(1490);

exports.apathy = _interopRequire(_apathy);

var _ashes = __webpack_require__(1491);

exports.ashes = _interopRequire(_ashes);

var _atelierDune = __webpack_require__(1492);

exports.atelierDune = _interopRequire(_atelierDune);

var _atelierForest = __webpack_require__(1493);

exports.atelierForest = _interopRequire(_atelierForest);

var _atelierHeath = __webpack_require__(1494);

exports.atelierHeath = _interopRequire(_atelierHeath);

var _atelierLakeside = __webpack_require__(1495);

exports.atelierLakeside = _interopRequire(_atelierLakeside);

var _atelierSeaside = __webpack_require__(1496);

exports.atelierSeaside = _interopRequire(_atelierSeaside);

var _bespin = __webpack_require__(1497);

exports.bespin = _interopRequire(_bespin);

var _brewer = __webpack_require__(1498);

exports.brewer = _interopRequire(_brewer);

var _bright = __webpack_require__(1499);

exports.bright = _interopRequire(_bright);

var _chalk = __webpack_require__(1500);

exports.chalk = _interopRequire(_chalk);

var _codeschool = __webpack_require__(1501);

exports.codeschool = _interopRequire(_codeschool);

var _colors = __webpack_require__(1502);

exports.colors = _interopRequire(_colors);

var _default = __webpack_require__(1503);

exports['default'] = _interopRequire(_default);

var _eighties = __webpack_require__(1504);

exports.eighties = _interopRequire(_eighties);

var _embers = __webpack_require__(1505);

exports.embers = _interopRequire(_embers);

var _flat = __webpack_require__(1506);

exports.flat = _interopRequire(_flat);

var _google = __webpack_require__(1507);

exports.google = _interopRequire(_google);

var _grayscale = __webpack_require__(1508);

exports.grayscale = _interopRequire(_grayscale);

var _greenscreen = __webpack_require__(1509);

exports.greenscreen = _interopRequire(_greenscreen);

var _harmonic = __webpack_require__(1510);

exports.harmonic = _interopRequire(_harmonic);

var _hopscotch = __webpack_require__(1511);

exports.hopscotch = _interopRequire(_hopscotch);

var _isotope = __webpack_require__(1512);

exports.isotope = _interopRequire(_isotope);

var _marrakesh = __webpack_require__(1513);

exports.marrakesh = _interopRequire(_marrakesh);

var _mocha = __webpack_require__(1514);

exports.mocha = _interopRequire(_mocha);

var _monokai = __webpack_require__(1515);

exports.monokai = _interopRequire(_monokai);

var _ocean = __webpack_require__(1516);

exports.ocean = _interopRequire(_ocean);

var _paraiso = __webpack_require__(1517);

exports.paraiso = _interopRequire(_paraiso);

var _pop = __webpack_require__(1518);

exports.pop = _interopRequire(_pop);

var _railscasts = __webpack_require__(1519);

exports.railscasts = _interopRequire(_railscasts);

var _shapeshifter = __webpack_require__(1520);

exports.shapeshifter = _interopRequire(_shapeshifter);

var _solarized = __webpack_require__(1521);

exports.solarized = _interopRequire(_solarized);

var _summerfruit = __webpack_require__(1522);

exports.summerfruit = _interopRequire(_summerfruit);

var _tomorrow = __webpack_require__(1523);

exports.tomorrow = _interopRequire(_tomorrow);

var _tube = __webpack_require__(1524);

exports.tube = _interopRequire(_tube);

var _twilight = __webpack_require__(1525);

exports.twilight = _interopRequire(_twilight);

/***/ }),

/***/ 1489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'threezerotwofour',
  author: 'jan t. sott (http://github.com/idleberg)',
  base00: '#090300',
  base01: '#3a3432',
  base02: '#4a4543',
  base03: '#5c5855',
  base04: '#807d7c',
  base05: '#a5a2a2',
  base06: '#d6d5d4',
  base07: '#f7f7f7',
  base08: '#db2d20',
  base09: '#e8bbd0',
  base0A: '#fded02',
  base0B: '#01a252',
  base0C: '#b5e4f4',
  base0D: '#01a0e4',
  base0E: '#a16a94',
  base0F: '#cdab53'
};
module.exports = exports['default'];

/***/ }),

/***/ 1490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'apathy',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#031A16',
  base01: '#0B342D',
  base02: '#184E45',
  base03: '#2B685E',
  base04: '#5F9C92',
  base05: '#81B5AC',
  base06: '#A7CEC8',
  base07: '#D2E7E4',
  base08: '#3E9688',
  base09: '#3E7996',
  base0A: '#3E4C96',
  base0B: '#883E96',
  base0C: '#963E4C',
  base0D: '#96883E',
  base0E: '#4C963E',
  base0F: '#3E965B'
};
module.exports = exports['default'];

/***/ }),

/***/ 1491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'ashes',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#1C2023',
  base01: '#393F45',
  base02: '#565E65',
  base03: '#747C84',
  base04: '#ADB3BA',
  base05: '#C7CCD1',
  base06: '#DFE2E5',
  base07: '#F3F4F5',
  base08: '#C7AE95',
  base09: '#C7C795',
  base0A: '#AEC795',
  base0B: '#95C7AE',
  base0C: '#95AEC7',
  base0D: '#AE95C7',
  base0E: '#C795AE',
  base0F: '#C79595'
};
module.exports = exports['default'];

/***/ }),

/***/ 1492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier dune',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
  base00: '#20201d',
  base01: '#292824',
  base02: '#6e6b5e',
  base03: '#7d7a68',
  base04: '#999580',
  base05: '#a6a28c',
  base06: '#e8e4cf',
  base07: '#fefbec',
  base08: '#d73737',
  base09: '#b65611',
  base0A: '#cfb017',
  base0B: '#60ac39',
  base0C: '#1fad83',
  base0D: '#6684e1',
  base0E: '#b854d4',
  base0F: '#d43552'
};
module.exports = exports['default'];

/***/ }),

/***/ 1493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier forest',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
  base00: '#1b1918',
  base01: '#2c2421',
  base02: '#68615e',
  base03: '#766e6b',
  base04: '#9c9491',
  base05: '#a8a19f',
  base06: '#e6e2e0',
  base07: '#f1efee',
  base08: '#f22c40',
  base09: '#df5320',
  base0A: '#d5911a',
  base0B: '#5ab738',
  base0C: '#00ad9c',
  base0D: '#407ee7',
  base0E: '#6666ea',
  base0F: '#c33ff3'
};
module.exports = exports['default'];

/***/ }),

/***/ 1494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier heath',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
  base00: '#1b181b',
  base01: '#292329',
  base02: '#695d69',
  base03: '#776977',
  base04: '#9e8f9e',
  base05: '#ab9bab',
  base06: '#d8cad8',
  base07: '#f7f3f7',
  base08: '#ca402b',
  base09: '#a65926',
  base0A: '#bb8a35',
  base0B: '#379a37',
  base0C: '#159393',
  base0D: '#516aec',
  base0E: '#7b59c0',
  base0F: '#cc33cc'
};
module.exports = exports['default'];

/***/ }),

/***/ 1495:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier lakeside',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
  base00: '#161b1d',
  base01: '#1f292e',
  base02: '#516d7b',
  base03: '#5a7b8c',
  base04: '#7195a8',
  base05: '#7ea2b4',
  base06: '#c1e4f6',
  base07: '#ebf8ff',
  base08: '#d22d72',
  base09: '#935c25',
  base0A: '#8a8a0f',
  base0B: '#568c3b',
  base0C: '#2d8f6f',
  base0D: '#257fad',
  base0E: '#5d5db1',
  base0F: '#b72dd2'
};
module.exports = exports['default'];

/***/ }),

/***/ 1496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier seaside',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
  base00: '#131513',
  base01: '#242924',
  base02: '#5e6e5e',
  base03: '#687d68',
  base04: '#809980',
  base05: '#8ca68c',
  base06: '#cfe8cf',
  base07: '#f0fff0',
  base08: '#e6193c',
  base09: '#87711d',
  base0A: '#c3c322',
  base0B: '#29a329',
  base0C: '#1999b3',
  base0D: '#3d62f5',
  base0E: '#ad2bee',
  base0F: '#e619c3'
};
module.exports = exports['default'];

/***/ }),

/***/ 1497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'bespin',
  author: 'jan t. sott',
  base00: '#28211c',
  base01: '#36312e',
  base02: '#5e5d5c',
  base03: '#666666',
  base04: '#797977',
  base05: '#8a8986',
  base06: '#9d9b97',
  base07: '#baae9e',
  base08: '#cf6a4c',
  base09: '#cf7d34',
  base0A: '#f9ee98',
  base0B: '#54be0d',
  base0C: '#afc4db',
  base0D: '#5ea6ea',
  base0E: '#9b859d',
  base0F: '#937121'
};
module.exports = exports['default'];

/***/ }),

/***/ 1498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'brewer',
  author: 'timothée poisot (http://github.com/tpoisot)',
  base00: '#0c0d0e',
  base01: '#2e2f30',
  base02: '#515253',
  base03: '#737475',
  base04: '#959697',
  base05: '#b7b8b9',
  base06: '#dadbdc',
  base07: '#fcfdfe',
  base08: '#e31a1c',
  base09: '#e6550d',
  base0A: '#dca060',
  base0B: '#31a354',
  base0C: '#80b1d3',
  base0D: '#3182bd',
  base0E: '#756bb1',
  base0F: '#b15928'
};
module.exports = exports['default'];

/***/ }),

/***/ 1499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'bright',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#000000',
  base01: '#303030',
  base02: '#505050',
  base03: '#b0b0b0',
  base04: '#d0d0d0',
  base05: '#e0e0e0',
  base06: '#f5f5f5',
  base07: '#ffffff',
  base08: '#fb0120',
  base09: '#fc6d24',
  base0A: '#fda331',
  base0B: '#a1c659',
  base0C: '#76c7b7',
  base0D: '#6fb3d2',
  base0E: '#d381c3',
  base0F: '#be643c'
};
module.exports = exports['default'];

/***/ }),

/***/ 1500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'chalk',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#151515',
  base01: '#202020',
  base02: '#303030',
  base03: '#505050',
  base04: '#b0b0b0',
  base05: '#d0d0d0',
  base06: '#e0e0e0',
  base07: '#f5f5f5',
  base08: '#fb9fb1',
  base09: '#eda987',
  base0A: '#ddb26f',
  base0B: '#acc267',
  base0C: '#12cfc0',
  base0D: '#6fc2ef',
  base0E: '#e1a3ee',
  base0F: '#deaf8f'
};
module.exports = exports['default'];

/***/ }),

/***/ 1501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'codeschool',
  author: 'brettof86',
  base00: '#232c31',
  base01: '#1c3657',
  base02: '#2a343a',
  base03: '#3f4944',
  base04: '#84898c',
  base05: '#9ea7a6',
  base06: '#a7cfa3',
  base07: '#b5d8f6',
  base08: '#2a5491',
  base09: '#43820d',
  base0A: '#a03b1e',
  base0B: '#237986',
  base0C: '#b02f30',
  base0D: '#484d79',
  base0E: '#c59820',
  base0F: '#c98344'
};
module.exports = exports['default'];

/***/ }),

/***/ 1502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'colors',
  author: 'mrmrs (http://clrs.cc)',
  base00: '#111111',
  base01: '#333333',
  base02: '#555555',
  base03: '#777777',
  base04: '#999999',
  base05: '#bbbbbb',
  base06: '#dddddd',
  base07: '#ffffff',
  base08: '#ff4136',
  base09: '#ff851b',
  base0A: '#ffdc00',
  base0B: '#2ecc40',
  base0C: '#7fdbff',
  base0D: '#0074d9',
  base0E: '#b10dc9',
  base0F: '#85144b'
};
module.exports = exports['default'];

/***/ }),

/***/ 1503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'default',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#181818',
  base01: '#282828',
  base02: '#383838',
  base03: '#585858',
  base04: '#b8b8b8',
  base05: '#d8d8d8',
  base06: '#e8e8e8',
  base07: '#f8f8f8',
  base08: '#ab4642',
  base09: '#dc9656',
  base0A: '#f7ca88',
  base0B: '#a1b56c',
  base0C: '#86c1b9',
  base0D: '#7cafc2',
  base0E: '#ba8baf',
  base0F: '#a16946'
};
module.exports = exports['default'];

/***/ }),

/***/ 1504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'eighties',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2d2d2d',
  base01: '#393939',
  base02: '#515151',
  base03: '#747369',
  base04: '#a09f93',
  base05: '#d3d0c8',
  base06: '#e8e6df',
  base07: '#f2f0ec',
  base08: '#f2777a',
  base09: '#f99157',
  base0A: '#ffcc66',
  base0B: '#99cc99',
  base0C: '#66cccc',
  base0D: '#6699cc',
  base0E: '#cc99cc',
  base0F: '#d27b53'
};
module.exports = exports['default'];

/***/ }),

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'embers',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#16130F',
  base01: '#2C2620',
  base02: '#433B32',
  base03: '#5A5047',
  base04: '#8A8075',
  base05: '#A39A90',
  base06: '#BEB6AE',
  base07: '#DBD6D1',
  base08: '#826D57',
  base09: '#828257',
  base0A: '#6D8257',
  base0B: '#57826D',
  base0C: '#576D82',
  base0D: '#6D5782',
  base0E: '#82576D',
  base0F: '#825757'
};
module.exports = exports['default'];

/***/ }),

/***/ 1506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'flat',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2C3E50',
  base01: '#34495E',
  base02: '#7F8C8D',
  base03: '#95A5A6',
  base04: '#BDC3C7',
  base05: '#e0e0e0',
  base06: '#f5f5f5',
  base07: '#ECF0F1',
  base08: '#E74C3C',
  base09: '#E67E22',
  base0A: '#F1C40F',
  base0B: '#2ECC71',
  base0C: '#1ABC9C',
  base0D: '#3498DB',
  base0E: '#9B59B6',
  base0F: '#be643c'
};
module.exports = exports['default'];

/***/ }),

/***/ 1507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'google',
  author: 'seth wright (http://sethawright.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#CC342B',
  base09: '#F96A38',
  base0A: '#FBA922',
  base0B: '#198844',
  base0C: '#3971ED',
  base0D: '#3971ED',
  base0E: '#A36AC7',
  base0F: '#3971ED'
};
module.exports = exports['default'];

/***/ }),

/***/ 1508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'grayscale',
  author: 'alexandre gavioli (https://github.com/alexx2/)',
  base00: '#101010',
  base01: '#252525',
  base02: '#464646',
  base03: '#525252',
  base04: '#ababab',
  base05: '#b9b9b9',
  base06: '#e3e3e3',
  base07: '#f7f7f7',
  base08: '#7c7c7c',
  base09: '#999999',
  base0A: '#a0a0a0',
  base0B: '#8e8e8e',
  base0C: '#868686',
  base0D: '#686868',
  base0E: '#747474',
  base0F: '#5e5e5e'
};
module.exports = exports['default'];

/***/ }),

/***/ 1509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'green screen',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#001100',
  base01: '#003300',
  base02: '#005500',
  base03: '#007700',
  base04: '#009900',
  base05: '#00bb00',
  base06: '#00dd00',
  base07: '#00ff00',
  base08: '#007700',
  base09: '#009900',
  base0A: '#007700',
  base0B: '#00bb00',
  base0C: '#005500',
  base0D: '#009900',
  base0E: '#00bb00',
  base0F: '#005500'
};
module.exports = exports['default'];

/***/ }),

/***/ 1510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'harmonic16',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#0b1c2c',
  base01: '#223b54',
  base02: '#405c79',
  base03: '#627e99',
  base04: '#aabcce',
  base05: '#cbd6e2',
  base06: '#e5ebf1',
  base07: '#f7f9fb',
  base08: '#bf8b56',
  base09: '#bfbf56',
  base0A: '#8bbf56',
  base0B: '#56bf8b',
  base0C: '#568bbf',
  base0D: '#8b56bf',
  base0E: '#bf568b',
  base0F: '#bf5656'
};
module.exports = exports['default'];

/***/ }),

/***/ 1511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'hopscotch',
  author: 'jan t. sott',
  base00: '#322931',
  base01: '#433b42',
  base02: '#5c545b',
  base03: '#797379',
  base04: '#989498',
  base05: '#b9b5b8',
  base06: '#d5d3d5',
  base07: '#ffffff',
  base08: '#dd464c',
  base09: '#fd8b19',
  base0A: '#fdcc59',
  base0B: '#8fc13e',
  base0C: '#149b93',
  base0D: '#1290bf',
  base0E: '#c85e7c',
  base0F: '#b33508'
};
module.exports = exports['default'];

/***/ }),

/***/ 1512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'isotope',
  author: 'jan t. sott',
  base00: '#000000',
  base01: '#404040',
  base02: '#606060',
  base03: '#808080',
  base04: '#c0c0c0',
  base05: '#d0d0d0',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#ff0000',
  base09: '#ff9900',
  base0A: '#ff0099',
  base0B: '#33ff00',
  base0C: '#00ffff',
  base0D: '#0066ff',
  base0E: '#cc00ff',
  base0F: '#3300ff'
};
module.exports = exports['default'];

/***/ }),

/***/ 1513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'marrakesh',
  author: 'alexandre gavioli (http://github.com/alexx2/)',
  base00: '#201602',
  base01: '#302e00',
  base02: '#5f5b17',
  base03: '#6c6823',
  base04: '#86813b',
  base05: '#948e48',
  base06: '#ccc37a',
  base07: '#faf0a5',
  base08: '#c35359',
  base09: '#b36144',
  base0A: '#a88339',
  base0B: '#18974e',
  base0C: '#75a738',
  base0D: '#477ca1',
  base0E: '#8868b3',
  base0F: '#b3588e'
};
module.exports = exports['default'];

/***/ }),

/***/ 1514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'mocha',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#3B3228',
  base01: '#534636',
  base02: '#645240',
  base03: '#7e705a',
  base04: '#b8afad',
  base05: '#d0c8c6',
  base06: '#e9e1dd',
  base07: '#f5eeeb',
  base08: '#cb6077',
  base09: '#d28b71',
  base0A: '#f4bc87',
  base0B: '#beb55b',
  base0C: '#7bbda4',
  base0D: '#8ab3b5',
  base0E: '#a89bb9',
  base0F: '#bb9584'
};
module.exports = exports['default'];

/***/ }),

/***/ 1515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};
module.exports = exports['default'];

/***/ }),

/***/ 1516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'ocean',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2b303b',
  base01: '#343d46',
  base02: '#4f5b66',
  base03: '#65737e',
  base04: '#a7adba',
  base05: '#c0c5ce',
  base06: '#dfe1e8',
  base07: '#eff1f5',
  base08: '#bf616a',
  base09: '#d08770',
  base0A: '#ebcb8b',
  base0B: '#a3be8c',
  base0C: '#96b5b4',
  base0D: '#8fa1b3',
  base0E: '#b48ead',
  base0F: '#ab7967'
};
module.exports = exports['default'];

/***/ }),

/***/ 1517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'paraiso',
  author: 'jan t. sott',
  base00: '#2f1e2e',
  base01: '#41323f',
  base02: '#4f424c',
  base03: '#776e71',
  base04: '#8d8687',
  base05: '#a39e9b',
  base06: '#b9b6b0',
  base07: '#e7e9db',
  base08: '#ef6155',
  base09: '#f99b15',
  base0A: '#fec418',
  base0B: '#48b685',
  base0C: '#5bc4bf',
  base0D: '#06b6ef',
  base0E: '#815ba4',
  base0F: '#e96ba8'
};
module.exports = exports['default'];

/***/ }),

/***/ 1518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'pop',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#000000',
  base01: '#202020',
  base02: '#303030',
  base03: '#505050',
  base04: '#b0b0b0',
  base05: '#d0d0d0',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#eb008a',
  base09: '#f29333',
  base0A: '#f8ca12',
  base0B: '#37b349',
  base0C: '#00aabb',
  base0D: '#0e5a94',
  base0E: '#b31e8d',
  base0F: '#7a2d00'
};
module.exports = exports['default'];

/***/ }),

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'railscasts',
  author: 'ryan bates (http://railscasts.com)',
  base00: '#2b2b2b',
  base01: '#272935',
  base02: '#3a4055',
  base03: '#5a647e',
  base04: '#d4cfc9',
  base05: '#e6e1dc',
  base06: '#f4f1ed',
  base07: '#f9f7f3',
  base08: '#da4939',
  base09: '#cc7833',
  base0A: '#ffc66d',
  base0B: '#a5c261',
  base0C: '#519f50',
  base0D: '#6d9cbe',
  base0E: '#b6b3eb',
  base0F: '#bc9458'
};
module.exports = exports['default'];

/***/ }),

/***/ 1520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'shapeshifter',
  author: 'tyler benziger (http://tybenz.com)',
  base00: '#000000',
  base01: '#040404',
  base02: '#102015',
  base03: '#343434',
  base04: '#555555',
  base05: '#ababab',
  base06: '#e0e0e0',
  base07: '#f9f9f9',
  base08: '#e92f2f',
  base09: '#e09448',
  base0A: '#dddd13',
  base0B: '#0ed839',
  base0C: '#23edda',
  base0D: '#3b48e3',
  base0E: '#f996e2',
  base0F: '#69542d'
};
module.exports = exports['default'];

/***/ }),

/***/ 1521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'solarized',
  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
  base00: '#002b36',
  base01: '#073642',
  base02: '#586e75',
  base03: '#657b83',
  base04: '#839496',
  base05: '#93a1a1',
  base06: '#eee8d5',
  base07: '#fdf6e3',
  base08: '#dc322f',
  base09: '#cb4b16',
  base0A: '#b58900',
  base0B: '#859900',
  base0C: '#2aa198',
  base0D: '#268bd2',
  base0E: '#6c71c4',
  base0F: '#d33682'
};
module.exports = exports['default'];

/***/ }),

/***/ 1522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'summerfruit',
  author: 'christopher corley (http://cscorley.github.io/)',
  base00: '#151515',
  base01: '#202020',
  base02: '#303030',
  base03: '#505050',
  base04: '#B0B0B0',
  base05: '#D0D0D0',
  base06: '#E0E0E0',
  base07: '#FFFFFF',
  base08: '#FF0086',
  base09: '#FD8900',
  base0A: '#ABA800',
  base0B: '#00C918',
  base0C: '#1faaaa',
  base0D: '#3777E6',
  base0E: '#AD00A1',
  base0F: '#cc6633'
};
module.exports = exports['default'];

/***/ }),

/***/ 1523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'tomorrow',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#cc6666',
  base09: '#de935f',
  base0A: '#f0c674',
  base0B: '#b5bd68',
  base0C: '#8abeb7',
  base0D: '#81a2be',
  base0E: '#b294bb',
  base0F: '#a3685a'
};
module.exports = exports['default'];

/***/ }),

/***/ 1524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'london tube',
  author: 'jan t. sott',
  base00: '#231f20',
  base01: '#1c3f95',
  base02: '#5a5758',
  base03: '#737171',
  base04: '#959ca1',
  base05: '#d9d8d8',
  base06: '#e7e7e8',
  base07: '#ffffff',
  base08: '#ee2e24',
  base09: '#f386a1',
  base0A: '#ffd204',
  base0B: '#00853e',
  base0C: '#85cebc',
  base0D: '#009ddc',
  base0E: '#98005d',
  base0F: '#b06110'
};
module.exports = exports['default'];

/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'twilight',
  author: 'david hart (http://hart-dev.com)',
  base00: '#1e1e1e',
  base01: '#323537',
  base02: '#464b50',
  base03: '#5f5a60',
  base04: '#838184',
  base05: '#a7a7a7',
  base06: '#c3c3c3',
  base07: '#ffffff',
  base08: '#cf6a4c',
  base09: '#cda869',
  base0A: '#f9ee98',
  base0B: '#8f9d6a',
  base0C: '#afc4db',
  base0D: '#7587a6',
  base0E: '#9b859d',
  base0F: '#9b703f'
};
module.exports = exports['default'];

/***/ }),

/***/ 1526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleMessageBody; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_json_tree__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_json_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_react_json_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Tabs__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ConsoleMessageItem__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ConsoleNetBody__ = __webpack_require__(1527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ConsoleRawBody__ = __webpack_require__(1529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_ConsoleMessageConstants__ = __webpack_require__(183);








var {
  getTheme,
  getArrowStyle,
  getArrowSignStyle,
  getArrowContainerStyle,
  getBoolStyle,
  getLabelStyle,
  getNestedNodeStyle,
  getNestedNodeItemTypeStyle,
  getNestedNodeChildrenStyle,
  getRootNodeStyle,
  getTreeStyle,
  getValueLabelStyle } =
__webpack_require__(242);


const getItemString = (type, data, itemType) => {return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, itemType);};let

ConsoleMessageBody = class ConsoleMessageBody extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getIconClasses() {
    const { allowToggle, expanded } = this.props;
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'console-message-item__arrow--open': expanded,
      'console-message-item__arrow': allowToggle });

  }

  getMessageDataClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'console-message-item__data': true,
      'console_message-item__data__text': _.isString(this.props.message),
      'console-message-item__data--leftpadded': this.props.isSubMessage });

  }

  showMessage(data) {
    if (!data) {
      if (data === undefined) {return 'undefined';}
      if (data === null) {return 'null';}
    } else
    if (_.isArray(data)) {
      const dataCount = data.length;
      return _.map(data, (m, i) => {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ConsoleMessageItem__["a" /* default */], {
          allowToggle: false,
          isSubMessage: true,
          islastChild: i === dataCount - 1,
          key: `console-message-${i}`,
          message: { message: m } });

      });
    } else
    if (_.isObject(data)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__postman_react_json_tree___default.a, {
          hideRoot: true,
          data: this.formatData(data),
          getItemString: getItemString,
          theme: {
            extend: getTheme(),
            nestedNodeLabel: getLabelStyle,
            value: getBoolStyle,
            valueLabel: getValueLabelStyle,
            tree: getTreeStyle,
            nestedNodeChildren: getNestedNodeChildrenStyle,
            nestedNode: getNestedNodeStyle,
            arrow: getArrowStyle,
            arrowSign: getArrowSignStyle,
            arrowContainer: getArrowContainerStyle,
            nestedNodeItemType: getNestedNodeItemTypeStyle,
            rootNode: getRootNodeStyle } }));


    } else
    if (_.isBoolean(data)) {
      return String(data);
    }
    return data;
  }

  formatData(data) {
    if (_.isArray(data)) {
      return { 'Array': data };
    } else
    if (_.isObject(data)) {
      const keys = _.keys(data);
      return keys.length && _.isObject(data[keys[0]]) ? data : { 'Object': data };
    }
    return null;
  }

  render() {
    let { message } = this.props,
    data = message.children.data;

    if (!data) {
      return false;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-message-item__body' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body-left' },

          message.children.type === __WEBPACK_IMPORTED_MODULE_7__constants_ConsoleMessageConstants__["b" /* CONSOLE_MESSAGE_TYPE_NET */] &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-message__body-tabs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tabs__["b" /* Tabs */], {
                type: 'secondary',
                defaultActive: 'pretty',
                activeRef: this.props.viewMode,
                onChange: this.props.onViewModeChange },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tabs__["a" /* Tab */], { refKey: 'pretty', className: 'console-message__body-tab--pretty' }, 'Pretty'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tabs__["a" /* Tab */], { refKey: 'raw', className: 'console-message__body-tab--raw' }, 'Raw'))),




          this.props.viewMode === 'pretty' && (
          message.children.type === __WEBPACK_IMPORTED_MODULE_7__constants_ConsoleMessageConstants__["b" /* CONSOLE_MESSAGE_TYPE_NET */] ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ConsoleNetBody__["a" /* default */], {
            data: data,
            viewMode: this.props.viewMode,
            onViewModeChange: this.props.onViewModeChange.bind(this, 'raw') }) :

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getMessageDataClasses() }, this.showMessage(data))),


          this.props.viewMode === 'raw' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ConsoleRawBody__["a" /* default */], {
            data: data,
            viewMode: this.props.viewMode,
            onViewModeChange: this.props.onViewModeChange.bind(this, 'pretty') })),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body-right' },
          data.response && data.response.code &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__response-code' },
            data.response.code),


          data.response && data.response.responseTime &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__response-time' },
            data.response.responseTime, ' ms'))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleNetBody; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConsoleJSONBody__ = __webpack_require__(1528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_postman_collection__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_postman_collection__);



let

ConsoleNetBody = class ConsoleNetBody extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.getTitle = this.getTitle.bind(this);
    this.formatHeader = this.formatHeader.bind(this);
    this.formatResponseBody = this.formatResponseBody.bind(this);
    this.state = { loading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 0);
  }

  getTitle(type, data = {}) {
    return { [type]: data };
  }

  formatRequestBody(data) {
    if (_.isObject(data) || _.isArray(data)) {
      return _.reduce(data, (acc, datum) => {
        acc[datum.key] = datum.value;
        return acc;
      }, {});
    }

    try {
      return JSON.parse(data);
    }
    catch (e) {
      return data;
    }
  }

  formatResponseBody(data) {
    try {
      return JSON.parse(data);
    }
    catch (ex) {
      if (!_.isEmpty(data)) {
        return { '__postman__placeholder': data };
      }
      return { '__postman__placeholder': ' ' };
    }
  }

  formatHeader(headers) {
    if (_.isArray(headers)) {
      return _.reduce(headers, (obj, h) => {
        obj[h.key] = h.value;
        return obj;
      }, {});
    }
    return headers;
  }

  render() {
    const { data } = this.props,
    { loading } = this.state;

    let certificate = _.get(data, 'request.certificate'),
    proxy = _.get(data, 'request.proxy');

    // re package certificate for console
    if (certificate) {
      certificate = {
        keyPath: _.get(certificate, 'key.src'),
        pemPath: _.get(certificate, 'cert.src') };

    }

    // re package proxy for console
    if (proxy) {
      proxy = {
        host: proxy.host,
        port: proxy.port,
        match: _.get(proxy, 'match.pattern') };

    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'console-net-item',
          ref: 'consoleNetItem' },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body console-net-item__body--pretty' },

          data.err && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__err' }, 'Error: ', data.err.message),


          certificate && Boolean(_.size(_.keys(certificate))) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__certificate' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ConsoleJSONBody__["a" /* default */], {
              toggle: true,
              data: certificate,
              title: 'Client Certificate' })),




          proxy && Boolean(_.size(_.keys(proxy))) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__proxy' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ConsoleJSONBody__["a" /* default */], {
              toggle: true,
              data: proxy,
              title: 'Proxy' })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__request__header' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ConsoleJSONBody__["a" /* default */], {
              toggle: true,
              data: data.request ? this.formatHeader(data.request.headers) : {},
              title: 'Request Headers' })),




          data.request && data.request.body && _.size(_.keys(data.request.body)) ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__request__body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ConsoleJSONBody__["a" /* default */], {
              data: data.request.body ? this.formatRequestBody(data.request.body[data.request.body.mode]) : {},
              title: 'Request Body',
              toggle: false })) :

          null,

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__response__header' },

            !data.err &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ConsoleJSONBody__["a" /* default */], {
              toggle: true,
              data: data.response ? this.formatHeader(data.response.headers) : {},
              title: 'Response Headers' })),




          !data.response && !data.err && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__loader' }, 'Loading...'),


          !data.err && !loading &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__response__body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ConsoleJSONBody__["a" /* default */], {
              data: data.response && this.formatResponseBody(data.response.body),
              title: 'Response Body',
              toggle: false }),

            (!data.response || _.isUndefined(data.response.body)) && !data.err && data.response && data.response.code !== 404 ?
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__loader' }, 'Loading...') : null))));







  }};


ConsoleNetBody.propTypes = { data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_json_tree__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_json_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_react_json_tree__);



var {
  getTheme,
  getArrowStyle,
  getHeaderArrowSignStyle,
  getArrowContainerStyle,
  getBoolStyle,
  getLabelStyle,
  getHeaderNestedNodeStyle,
  getHeaderNestedNodeChildrenStyle,
  getTreeStyle,
  getValueLabelStyle } =
__webpack_require__(242);

const ConsoleNetHeaderItem = props => {
  const { toggle, title, data } = props;
  return data ?
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-header-item' },

    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__postman_react_json_tree___default.a, {
      hideRoot: true,
      allExpanded: toggle,
      data: { [title]: data },
      getItemString: _.constant(''),
      initialExpanded: props.toggle,
      shouldExpandNode: (keyName, d, level) => {
        return level === 0 || level > 0 && props.toggle;
      },
      theme: {
        extend: getTheme(),
        nestedNodeLabel: getLabelStyle,
        value: getBoolStyle,
        valueLabel: (style, nodeType, expanded) => {
          // Todo:- Add support for string rendering in react-json-tree
          // Hide label for string data
          const labelStyle = getValueLabelStyle(style, nodeType, expanded);
          labelStyle.style.display = data.__postman__placeholder ? 'none' : 'inline-block';
          return labelStyle;
        },
        tree: getTreeStyle,
        nestedNodeChildren: getHeaderNestedNodeChildrenStyle,
        nestedNode: getHeaderNestedNodeStyle,
        arrow: getArrowStyle,
        arrowSign: getHeaderArrowSignStyle,
        arrowContainer: getArrowContainerStyle },

      valueRenderer: value => {
        // Render string data on custom renderer
        return value === `"${data.__postman__placeholder}"` ?
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-header-item__raw__data' }, value.replace(/^"|"$/g, '')) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, value);
      } })) :



  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null);
};

/* harmony default export */ __webpack_exports__["a"] = (ConsoleNetHeaderItem);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleRawBody; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(13);

let

ConsoleRawBody = class ConsoleRawBody extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getRawText() {
    let { data } = this.props,
    request = [],
    response = [],
    responseBody = '';

    let requestHeaders = _.map(data.request.headers, (value, name) => {
      return `${name}: ${value}`;
    }),
    requestBody,
    requestBodyMode = _.get(data, 'request.body.mode', '');

    if (requestBodyMode === 'formdata' || requestBodyMode === 'urlencoded') {
      requestBody = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].isMethodWithBody(data.request.method) && _.map(_.get(data, `request.body[${requestBodyMode}]`, []), parameter => {
        return `${_.replace(parameter.key, ' ', '+')}=${parameter.value}`;
      });
    } else
    if (requestBodyMode === 'raw') {
      requestBody = _.get(data, 'request.body.raw');
    }

    request = _.concat(
    [`${data.request.method} ${__WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].getURLProps(data.request.url).pathname}`],
    requestHeaders);


    if (data.response) {
      let responseHeaders = _.map(data.response.headers, (value, name) => {
        return `${name}: ${value}`;
      });

      responseBody = data.response && data.response.body;
      response = _.concat(
      [`HTTP/1.1 ${data.response.code}`, `status: ${data.response.code}`],
      responseHeaders);

    }

    return {
      request,
      requestBody,
      response,
      responseBody };

  }

  render() {
    let { data } = this.props,
    raw = this.getRawText();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body console-net-item__body--raw' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body-left__request' },

            _.map(raw.request, (line, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: `request-line-${index}` }, line);
            })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body-left__request-body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: 'request-body-line' }, raw.requestBody)),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body-left__response' },

            _.map(raw.response, (line, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: `response-line-${index}` }, line);
            })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body-left__response-body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: 'response-body-line' }, raw.responseBody)))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_ConsoleActionsConstants__ = __webpack_require__(243);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const addMessage = item => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_ConsoleActionsConstants__["a" /* ADD_MESSAGE */],
    payload: _extends({},
    item, {
      timestamp: Date.now() }) };


};
/* harmony export (immutable) */ __webpack_exports__["a"] = addMessage;


const clearMessages = () => {
  return { type: __WEBPACK_IMPORTED_MODULE_1__constants_ConsoleActionsConstants__["b" /* CLEAR_MESSAGES */] };
};
/* harmony export (immutable) */ __webpack_exports__["b"] = clearMessages;


const searchMessage = value => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants_ConsoleActionsConstants__["c" /* SEARCH_MESSAGE */],
    search: value };

};
/* harmony export (immutable) */ __webpack_exports__["c"] = searchMessage;


const updateMessageExpansion = (item, height) => {
  return _extends({
    type: __WEBPACK_IMPORTED_MODULE_1__constants_ConsoleActionsConstants__["d" /* UPDATE_MESSAGE_EXPANSION */],
    expandInterimHeight: height },
  item);

};
/* harmony export (immutable) */ __webpack_exports__["d"] = updateMessageExpansion;


/***/ }),

/***/ 1531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__boot_bootConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot_bootMessaging__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boot_bootWLModels__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boot_bootAppModels__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boot_bootSettings__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__boot_bootTelemetry__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boot_bootConsole__ = __webpack_require__(1532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boot_booted__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boot_bootThemeManager__ = __webpack_require__(371);











const windowConfig = {
  process: 'console',
  ui: false };


window.pm = {};

pm.init = done => {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig___default.a.init(windowConfig),
  __WEBPACK_IMPORTED_MODULE_2__boot_bootMessaging__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__boot_bootTelemetry__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__boot_bootSettings__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__boot_bootWLModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__boot_bootAppModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_9__boot_bootThemeManager__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__boot_bootConsole__["a" /* default */]],
  err => {
    Object(__WEBPACK_IMPORTED_MODULE_8__boot_booted__["a" /* default */])(err);
    if (err) {
      console.error('Error in the app boot sequence', err);
    }
    done && done(err);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (pm);

/***/ }),

/***/ 1532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_ConsoleMessageNotifier__ = __webpack_require__(1533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootShortcuts__ = __webpack_require__(364);




/**
                                              *
                                              * @param {*} cb
                                              */
function bootConsole(cb) {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_2__bootShortcuts__["a" /* default */]],
  () => {
    _.assign(window.pm, { consoleMessages: new __WEBPACK_IMPORTED_MODULE_1__models_ConsoleMessageNotifier__["a" /* default */]() });
    return cb && cb(null);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (bootConsole);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleMessageNotifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_circular_json__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_AnalyticsService__ = __webpack_require__(22);



/**
                                                                      * Listens to console messages across windows and dispatches the message to Console window.
                                                                      * Also tracks analytics for Console window.
                                                                      *
                                                                      * @class ConsoleMessageNotifier
                                                                      */let
ConsoleMessageNotifier = class ConsoleMessageNotifier {
  constructor() {
    this.listenToMessageEvents();
    this.triggerAnalyticsEvent();
  }

  /**
     * Receives queued messages and shows them in the Console
    */
  setQueuedMessages(messages) {
    _.each(messages, message => {
      this.triggerConsoleEvent(message);
    });
  }

  /**
     * Triggers an event to track Console open analytics.
     *
     * @memberof ConsoleMessageNotifier#
     */
  triggerAnalyticsEvent() {
    __WEBPACK_IMPORTED_MODULE_1__modules_services_AnalyticsService__["a" /* default */].addEvent('console', 'open', 'menubar');
  }

  /**
     * Triggers a console message event. This is the actual event that is listened to for displaying console messages.
     *
     * @param {String} data Stringified console message
     *
     * @fires Mediator#onConsoleMessage
     *
     * @memberof ConsoleMessageNotifier#
     */
  triggerConsoleEvent(data) {
    /**
                              * Tells the listener to display the given message in the console.
                              *
                              * @event Mediator#onConsoleMessage
                              */
    pm.mediator.trigger('onConsoleMessage', data);
  }

  /**
     * Listens to console messages from other windows. Converts the data to a string before dispatching it to console display.
     *
     * @fires AppWindow#consoleMessage
     *
     * @memberof ConsoleMessageNotifier#
     */
  listenToMessageEvents() {
    pm.appWindow.trigger('registerInternalEvent', 'consoleMessage', function (data) {
      if (_.isString(data)) {
        try {
          this.triggerConsoleEvent(__WEBPACK_IMPORTED_MODULE_0_circular_json___default.a.parse(data));
        }
        catch (ex) {
          console.error('Console message parse failure: ', ex.message);
        }
      } else
      {
        this.triggerConsoleEvent(data);
      }
    }, this);
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messages__ = __webpack_require__(1535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(1537);




const consoleApp = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  messages: __WEBPACK_IMPORTED_MODULE_1__messages__["a" /* default */],
  search: __WEBPACK_IMPORTED_MODULE_2__search__["a" /* default */] });


/* harmony default export */ __webpack_exports__["a"] = (consoleApp);

/***/ }),

/***/ 1535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ConsoleActionsConstants__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_ConsoleMessageConstants__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__headers__ = __webpack_require__(1536);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};





let sequence = 0;
const messages = (state = [], action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_ConsoleActionsConstants__["a" /* ADD_MESSAGE */]:
      let payload = action.payload;
      if (payload.children.data && payload.children.data.ref && state.length) {
        let match = false;

        // Todo:- Move to another reducer
        const _state = state.reduce((m, v, index) => {
          if (v.children.data && v.children.data.ref === payload.children.data.ref) {
            match = true;
            if (payload.children.data.err) {
              if (Object.keys(payload.children.data).length > 2) {
                v.children.data = payload.children.data;
              } else
              {
                v.children.data.err = payload.children.data.err;
              }
              m.push(v);
            } else
            {
              m.push(_extends({},
              v, {
                children: payload.children }));

            }
          } else
          {
            m.push(v);
          }
          return m;
        }, []);
        return match ? _state : [..._state, _extends({
          id: sequence++ },
        payload)];

      } else
      {
        return [
        ...state, _extends({

          id: sequence++ },
        payload)];


      }

    case __WEBPACK_IMPORTED_MODULE_0__constants_ConsoleActionsConstants__["b" /* CLEAR_MESSAGES */]:
      sequence = 0;
      return [];

    case __WEBPACK_IMPORTED_MODULE_0__constants_ConsoleActionsConstants__["d" /* UPDATE_MESSAGE_EXPANSION */]:
      return state.map(m => {
        if (m.id !== action.id) {
          return m;
        }
        return _extends({},
        m, {
          expandInterimHeight: action.expandInterimHeight });

      });

    default:
      return state;}

};

/* harmony default export */ __webpack_exports__["a"] = (messages);

/***/ }),

/***/ 1536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ConsoleActionsConstants__ = __webpack_require__(243);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

const headers = (state = [], action, id) => {
  let match;
  const _state = state.reduce((m, v, index) => {
    if (v.children.data && v.children.data.ref === action.children.data.ref) {
      match = true;
      m.push(_extends({},
      v, {
        children: action.children }));

    } else
    {
      m.push(v);
    }
    return m;
  }, []);
  console.log('ID: ' + id);
  return match ? _state : [
  ..._state, _extends({

    id: id },
  _.omit(action, 'type'))];


};

/* unused harmony default export */ var _unused_webpack_default_export = (headers);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ConsoleActionsConstants__ = __webpack_require__(243);


const search = (state = '', action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_ConsoleActionsConstants__["c" /* SEARCH_MESSAGE */]:
      return action.search;
    default:
      return state;}

};

/* harmony default export */ __webpack_exports__["a"] = (search);

/***/ }),

/***/ 1538:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.connect = exports.Provider = undefined;

var _Provider = __webpack_require__(372);

var _Provider2 = _interopRequireDefault(_Provider);

var _connect = __webpack_require__(373);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.Provider = _Provider2["default"];
exports.connect = _connect2["default"];

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _propTypes2["default"].shape({
  subscribe: _propTypes2["default"].func.isRequired,
  dispatch: _propTypes2["default"].func.isRequired,
  getState: _propTypes2["default"].func.isRequired
});

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(274);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable__["default"]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable__["default"]] = observable, _ref2;
}

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(383);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(377);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(634);
var enumBugKeys = __webpack_require__(402);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSOLE_MESSAGE_TYPE_LOG = 'LOG';
/* unused harmony export CONSOLE_MESSAGE_TYPE_LOG */

const CONSOLE_MESSAGE_TYPE_NET = 'NET';
/* harmony export (immutable) */ __webpack_exports__["b"] = CONSOLE_MESSAGE_TYPE_NET;

const CONSOLE_MESSAGE_TYPE_MARKDOWN = 'MARKDOWN';
/* harmony export (immutable) */ __webpack_exports__["a"] = CONSOLE_MESSAGE_TYPE_MARKDOWN;

const CONSOLE_MESSAGE_EXPAND_STATE_START = 'START';
/* unused harmony export CONSOLE_MESSAGE_EXPAND_STATE_START */

const CONSOLE_MESSAGE_EXPAND_STATE_END = 'END';
/* unused harmony export CONSOLE_MESSAGE_EXPAND_STATE_END */


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ExclamationIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'exclamation', d: 'M8 16a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8zm0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm1-8.99S9.016 3 8 3 7 4.01 7 4.01V9s-.013 1 1 1 1-1 1-1V4.01z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#exclamation' }));



function ExclamationIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(629);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(1438);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 239:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(395);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 241:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 242:
/***/ (function(module, exports) {

var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};const lightTheme = {
  base0B: '#2A00FF',
  base0C: '#333333',
  base0D: '#333333' };


const defaultTheme = {
  scheme: 'solarized',
  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
  base00: '#002b36',
  base01: '#073642',
  base02: '#586e75',
  base03: '#657b83',
  base04: '#839496',
  base05: '#93a1a1',
  base06: '#eee8d5',
  base07: 'transparent',
  base08: '#dc322f',
  base09: '#cb4b16',
  base0A: '#b58900',
  base0B: '#E6DB74',
  base0C: '#A6E22E',
  base0D: '#B5D83A',
  base0E: '#6c71c4',
  base0F: '#d33682' };


let currentTheme;

const ConsoleMessageItemStyles = {
  setTheme: theme => {
    currentTheme = theme;
  },
  getTheme: () => {
    if (currentTheme === 'light') {
      return _extends({}, defaultTheme, lightTheme);
    }
    return defaultTheme;
  },
  getLabelStyle: ({ style }, nodeType, expanded) => {
    return {
      style: _extends({},
      style, {
        color: currentTheme === 'light' ? '#333333' : '#FFFFFF',
        fontSize: '12px',
        fontFamily: 'Cousine',
        paddingLeft: 3,
        WebkitUserSelect: 'text' }) };


  },
  getValueLabelStyle: ({ style }, nodeType, keyPath) => {
    return {
      style: _extends({},
      style, {
        fontSize: '12px',
        fontFamily: 'Cousine' }) };


  },
  getBoolStyle: ({ style }, nodeType) => {
    return {
      style: _extends({},
      style, {
        fontSize: '12px',
        fontFamily: 'Cousine',
        paddingTop: 0,
        paddingBottom: 0 }) };


  },
  getTreeStyle: ({ style }, nodeType, expanded) => {
    return {
      style: _extends({},
      style, {
        marginTop: 0,
        marginBottom: 0 }) };


  },
  getNestedNodeChildrenStyle: ({ style }, nodeType, expanded) => {
    return {
      style: _extends({},
      style, {
        color: 'red',
        padding: '0 0 2px 0',
        lineHeight: '20px' }) };


  },
  getHeaderNestedNodeChildrenStyle: ({ style }, nodeType, expanded) => {
    return {
      style: _extends({},
      style, {
        paddingTop: 3 }) };


  },
  getNestedNodeStyle: ({ style }, nodeType, expanded, keyPath) => {
    return {
      style: _extends({},
      style, {
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: keyPath.length === 1 ? 0 : 14 }) };


  },
  getHeaderNestedNodeStyle: ({ style }, nodeType, expanded) => {
    return {
      style: _extends({},
      style, {
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 25 }) };


  },
  getArrowStyle: ({ style }, nodeType, expanded) => {
    return {
      style: _extends({},
      style, {
        borderLeft: 4,
        borderTopWidth: 4,
        borderRightWidth: 4,
        borderTopColor: '#808080',
        marginTop: -6 }) };


  },
  getArrowSignStyle: ({ style }, nodeType, expanded) => {
    return {
      style: _extends({},
      style, {
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent',
        borderTopWidth: 4,
        borderTopColor: '#808080',
        marginTop: -6 }) };


  },
  getHeaderArrowSignStyle: ({ style }, nodeType, expanded) => {
    return {
      style: _extends({},
      style, {
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent',
        borderTopWidth: 4,
        borderTopColor: '#808080' }) };


  },
  getArrowContainerStyle: ({ style }) => {
    return {
      style: _extends({},
      style, {
        paddingLeft: 0,
        paddingBottom: 0 }) };


  },
  getNestedNodeItemTypeStyle: ({ style }) => {
    return {
      style: _extends({},
      style, {
        fontSize: 12 }) };


  },
  getRootNodeStyle: ({ style }) => {
    return {
      style: _extends({},
      style, {
        marginLeft: 0 }) };


  } };


module.exports = ConsoleMessageItemStyles;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ADD_MESSAGE = 'ADD_MESSAGE';
/* harmony export (immutable) */ __webpack_exports__["a"] = ADD_MESSAGE;

const EXPAND_MESSAGE_START = 'EXPAND_MESSAGE_START';
/* unused harmony export EXPAND_MESSAGE_START */

const EXPAND_MESSAGE_END = 'EXPAND_MESSAGE_END';
/* unused harmony export EXPAND_MESSAGE_END */

const COLLAPSE_MESSAGE = 'COLLAPSE_MESSAGE';
/* unused harmony export COLLAPSE_MESSAGE */

const COMPUTE_HEIGHT = 'COMPUTE_HEIGHT';
/* unused harmony export COMPUTE_HEIGHT */

const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
/* harmony export (immutable) */ __webpack_exports__["b"] = CLEAR_MESSAGES;

const SEARCH_MESSAGE = 'SEARCH_MESSAGE';
/* harmony export (immutable) */ __webpack_exports__["c"] = SEARCH_MESSAGE;

const UPDATE_MESSAGE_EXPANSION = 'UPDATE_MESSAGE_EXPANSION';
/* harmony export (immutable) */ __webpack_exports__["d"] = UPDATE_MESSAGE_EXPANSION;

const VISIBILITY_FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ERROR: 'SHOW_ERROR',
  SHOW_INFO: 'SHOW_INFO',
  SHOW_LOG: 'SHOW_LOG',
  SHOW_WARN: 'SHOW_WARN' };
/* unused harmony export VISIBILITY_FILTERS */



const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
/* unused harmony export SET_VISIBILITY_FILTER */


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);



let Tabs = class Tabs extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(nextTabRef) {
    this.props.onChange && this.props.onChange(nextTabRef);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'tabs': true,
      'tabs-primary': this.props.type === 'primary',
      'tabs-secondary': this.props.type === 'secondary',
      'tabs-tertiary': this.props.type === 'tertiary',
      'tabs-vertical': this.props.vertical,
      'tabs-fluid': this.props.fluid },
    this.props.className);
  }

  render() {
    let classes = this.getClasses();
    let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
      if (!child || child.type !== Tab) {
        return false;
      }

      let isActive = false;

      if (!this.props.activeRef && this.props.defaultActive) {
        isActive = this.props.defaultActive === child.props.refKey;
      }

      if (this.props.activeRef) {
        isActive = this.props.activeRef === child.props.refKey;
      }

      if (child.props.disabled) {
        isActive = this.props.defaultActive === child.props.refKey;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
        type: this.props.type,
        active: isActive,
        onClick: this.handleTabChange });

    });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes }, children));

  }};


let Tab = class Tab extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    !this.props.disabled && this.props.onClick && this.props.onClick(this.props.refKey);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'tab': true,
      'tab-primary': this.props.type === 'primary',
      'tab-secondary': this.props.type === 'secondary',
      'tab-tertiary': this.props.type === 'tertiary',
      'tab-fluid': this.props.fluid,
      'is-disabled': this.props.disabled,
      'is-active': this.props.active },
    this.props.className, 'tab--' + this.props.refKey);
  }

  render() {
    let classes = this.getClasses();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes, onClick: this.handleClick }, this.props.children));

  }};

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(133),
    getPrototype = __webpack_require__(263),
    isObjectLike = __webpack_require__(132);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(278);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '14', height: '14', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'search', d: 'M11.907 10.504l2.778 2.759c.411.357.411 1.022.051 1.43a1.021 1.021 0 0 1-.72.307c-.257 0-.514-.102-.72-.306l-2.779-2.76C9.49 12.65 8.305 13.06 7.02 13.06c-1.595 0-3.138-.665-4.27-1.789C1.617 10.146 1 8.664 1 7.03c0-1.585.617-3.117 1.749-4.242C3.881 1.613 5.424 1 7.019 1c1.595 0 3.138.664 4.27 1.788 1.132 1.125 1.75 2.606 1.75 4.241 0 1.227-.412 2.453-1.132 3.475zm-4.84.763a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#search' }));



function SearchIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


/* harmony default export */ __webpack_exports__["a"] = (ComposedComponent => {let
  KeyMapWrapper = class KeyMapWrapper extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
      super(props);
      this.updateMap = this.updateMap.bind(this);
      this.getMap = this.getMap.bind(this);
    }

    componentWillMount() {
      this.updateMap();
    }

    updateMap() {
      const newMap = this.buildMap();

      if (!_.isEqual(newMap, this.__hotKeyMap__)) {
        this.__hotKeyMap__ = newMap;
        return true;
      }

      return false;
    }

    buildMap() {
      const parentMap = this.context.hotKeyMap || {};
      const thisMap = this.props.keyMap || {};

      return _.assign({}, parentMap, thisMap);
    }

    getChildContext() {
      return { hotKeyMap: this.__hotKeyMap__ };
    }

    getMap() {
      return this.__hotKeyMap__;
    }

    focus() {
      _.isFunction(this.refs.ComposedComponent.focus) && this.refs.ComposedComponent.focus();
    }

    render() {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComposedComponent, _extends({
            ref: 'ComposedComponent',
            getMap: this.getMap,
            updateMap: this.updateMap },
          this.props),

          this.props.children));


    }};


  KeyMapWrapper.contextTypes = { hotKeyMap: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object };

  KeyMapWrapper.childContextTypes = { hotKeyMap: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object };

  return KeyMapWrapper;
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2016 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.0
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {
        _MAP[i + 96] = i;
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return Mousetrap;
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(276);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4), __webpack_require__(275)(module)))

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = function (originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function () {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function () {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = undefined;

var _react = __webpack_require__(1);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _storeShape = __webpack_require__(171);

var _storeShape2 = _interopRequireDefault(_storeShape);

var _warning = __webpack_require__(172);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  Provider.prototype.getChildContext = function getChildContext() {
    return { store: this.store };
  };

  function Provider(props, context) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.store = props.store;
    return _this;
  }

  Provider.prototype.render = function render() {
    return _react.Children.only(this.props.children);
  };

  return Provider;
}(_react.Component);

exports["default"] = Provider;


if (false) {
  Provider.prototype.componentWillReceiveProps = function (nextProps) {
    var store = this.store;
    var nextStore = nextProps.store;


    if (store !== nextStore) {
      warnAboutReceivingStore();
    }
  };
}

Provider.propTypes = {
  store: _storeShape2["default"].isRequired,
  children: _propTypes2["default"].element.isRequired
};
Provider.childContextTypes = {
  store: _storeShape2["default"].isRequired
};

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = connect;

var _react = __webpack_require__(1);

var _storeShape = __webpack_require__(171);

var _storeShape2 = _interopRequireDefault(_storeShape);

var _shallowEqual = __webpack_require__(374);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _wrapActionCreators = __webpack_require__(375);

var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

var _warning = __webpack_require__(172);

var _warning2 = _interopRequireDefault(_warning);

var _isPlainObject = __webpack_require__(257);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _hoistNonReactStatics = __webpack_require__(264);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _invariant = __webpack_require__(252);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultMapStateToProps = function defaultMapStateToProps(state) {
  return {};
}; // eslint-disable-line no-unused-vars
var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};
var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
  return _extends({}, parentProps, stateProps, dispatchProps);
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var errorObject = { value: null };
function tryCatch(fn, ctx) {
  try {
    return fn.apply(ctx);
  } catch (e) {
    errorObject.value = e;
    return errorObject;
  }
}

// Helps track hot reloading.
var nextVersion = 0;

function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var shouldSubscribe = Boolean(mapStateToProps);
  var mapState = mapStateToProps || defaultMapStateToProps;

  var mapDispatch = void 0;
  if (typeof mapDispatchToProps === 'function') {
    mapDispatch = mapDispatchToProps;
  } else if (!mapDispatchToProps) {
    mapDispatch = defaultMapDispatchToProps;
  } else {
    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
  }

  var finalMergeProps = mergeProps || defaultMergeProps;
  var _options$pure = options.pure,
      pure = _options$pure === undefined ? true : _options$pure,
      _options$withRef = options.withRef,
      withRef = _options$withRef === undefined ? false : _options$withRef;

  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

  // Helps track hot reloading.
  var version = nextVersion++;

  return function wrapWithConnect(WrappedComponent) {
    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

    function checkStateShape(props, methodName) {
      if (!(0, _isPlainObject2["default"])(props)) {
        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
      }
    }

    function computeMergedProps(stateProps, dispatchProps, parentProps) {
      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
      if (false) {
        checkStateShape(mergedProps, 'mergeProps');
      }
      return mergedProps;
    }

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
      };

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.store = props.store || context.store;

        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

        var storeState = _this.store.getState();
        _this.state = { storeState: storeState };
        _this.clearCache();
        return _this;
      }

      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
        if (!this.finalMapStateToProps) {
          return this.configureFinalMapState(store, props);
        }

        var state = store.getState();
        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

        if (false) {
          checkStateShape(stateProps, 'mapStateToProps');
        }
        return stateProps;
      };

      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
        var mappedState = mapState(store.getState(), props);
        var isFactory = typeof mappedState === 'function';

        this.finalMapStateToProps = isFactory ? mappedState : mapState;
        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

        if (isFactory) {
          return this.computeStateProps(store, props);
        }

        if (false) {
          checkStateShape(mappedState, 'mapStateToProps');
        }
        return mappedState;
      };

      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
        if (!this.finalMapDispatchToProps) {
          return this.configureFinalMapDispatch(store, props);
        }

        var dispatch = store.dispatch;

        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

        if (false) {
          checkStateShape(dispatchProps, 'mapDispatchToProps');
        }
        return dispatchProps;
      };

      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
        var mappedDispatch = mapDispatch(store.dispatch, props);
        var isFactory = typeof mappedDispatch === 'function';

        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

        if (isFactory) {
          return this.computeDispatchProps(store, props);
        }

        if (false) {
          checkStateShape(mappedDispatch, 'mapDispatchToProps');
        }
        return mappedDispatch;
      };

      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
        var nextStateProps = this.computeStateProps(this.store, this.props);
        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
          return false;
        }

        this.stateProps = nextStateProps;
        return true;
      };

      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
          return false;
        }

        this.dispatchProps = nextDispatchProps;
        return true;
      };

      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
          return false;
        }

        this.mergedProps = nextMergedProps;
        return true;
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return typeof this.unsubscribe === 'function';
      };

      Connect.prototype.trySubscribe = function trySubscribe() {
        if (shouldSubscribe && !this.unsubscribe) {
          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
          this.handleChange();
        }
      };

      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
        }
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        this.trySubscribe();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
          this.haveOwnPropsChanged = true;
        }
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        this.tryUnsubscribe();
        this.clearCache();
      };

      Connect.prototype.clearCache = function clearCache() {
        this.dispatchProps = null;
        this.stateProps = null;
        this.mergedProps = null;
        this.haveOwnPropsChanged = true;
        this.hasStoreStateChanged = true;
        this.haveStatePropsBeenPrecalculated = false;
        this.statePropsPrecalculationError = null;
        this.renderedElement = null;
        this.finalMapDispatchToProps = null;
        this.finalMapStateToProps = null;
      };

      Connect.prototype.handleChange = function handleChange() {
        if (!this.unsubscribe) {
          return;
        }

        var storeState = this.store.getState();
        var prevStoreState = this.state.storeState;
        if (pure && prevStoreState === storeState) {
          return;
        }

        if (pure && !this.doStatePropsDependOnOwnProps) {
          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
          if (!haveStatePropsChanged) {
            return;
          }
          if (haveStatePropsChanged === errorObject) {
            this.statePropsPrecalculationError = errorObject.value;
          }
          this.haveStatePropsBeenPrecalculated = true;
        }

        this.hasStoreStateChanged = true;
        this.setState({ storeState: storeState });
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

        return this.refs.wrappedInstance;
      };

      Connect.prototype.render = function render() {
        var haveOwnPropsChanged = this.haveOwnPropsChanged,
            hasStoreStateChanged = this.hasStoreStateChanged,
            haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
            statePropsPrecalculationError = this.statePropsPrecalculationError,
            renderedElement = this.renderedElement;


        this.haveOwnPropsChanged = false;
        this.hasStoreStateChanged = false;
        this.haveStatePropsBeenPrecalculated = false;
        this.statePropsPrecalculationError = null;

        if (statePropsPrecalculationError) {
          throw statePropsPrecalculationError;
        }

        var shouldUpdateStateProps = true;
        var shouldUpdateDispatchProps = true;
        if (pure && renderedElement) {
          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
        }

        var haveStatePropsChanged = false;
        var haveDispatchPropsChanged = false;
        if (haveStatePropsBeenPrecalculated) {
          haveStatePropsChanged = true;
        } else if (shouldUpdateStateProps) {
          haveStatePropsChanged = this.updateStatePropsIfNeeded();
        }
        if (shouldUpdateDispatchProps) {
          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
        }

        var haveMergedPropsChanged = true;
        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
        } else {
          haveMergedPropsChanged = false;
        }

        if (!haveMergedPropsChanged && renderedElement) {
          return renderedElement;
        }

        if (withRef) {
          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
            ref: 'wrappedInstance'
          }));
        } else {
          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
        }

        return this.renderedElement;
      };

      return Connect;
    }(_react.Component);

    Connect.displayName = connectDisplayName;
    Connect.WrappedComponent = WrappedComponent;
    Connect.contextTypes = {
      store: _storeShape2["default"]
    };
    Connect.propTypes = {
      store: _storeShape2["default"]
    };

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        if (this.version === version) {
          return;
        }

        // We are hot reloading!
        this.version = version;
        this.trySubscribe();
        this.clearCache();
      };
    }

    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = shallowEqual;
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = wrapActionCreators;

var _redux = __webpack_require__(68);

function wrapActionCreators(actionCreators) {
  return function (dispatch) {
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
  };
}

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(380);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

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
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(378);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(175);


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
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(382);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(176);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(177);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = undefined;

var _objectWithoutProperties2 = __webpack_require__(179);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(391);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(392);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(407);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(408);

var _keys2 = _interopRequireDefault(_keys);

var _class, _temp; // ES6 + inline style port of JSONViewer https://bitbucket.org/davevedder/react-json-viewer/
// all credits and original code to the author
// Dave Vedder <veddermatic@gmail.com> http://www.eskimospy.com/
// port by Daniele Zannotti http://www.github.com/dzannotti <dzannotti@me.com>

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JSONNode = __webpack_require__(642);

var _JSONNode2 = _interopRequireDefault(_JSONNode);

var _createStylingFromTheme = __webpack_require__(1477);

var _createStylingFromTheme2 = _interopRequireDefault(_createStylingFromTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var identity = function identity(value) {
  return value;
};

function checkLegacyTheming(theme, props) {
  var deprecatedStylingMethodsMap = {
    getArrowStyle: 'arrow',
    getListStyle: 'nestedNodeChildren',
    getItemStringStyle: 'nestedNodeItemString',
    getLabelStyle: 'label',
    getValueStyle: 'valueText'
  };

  var deprecatedStylingMethods = (0, _keys2['default'])(deprecatedStylingMethodsMap).filter(function (name) {
    return props[name];
  });

  if (deprecatedStylingMethods.length > 0) {
    if (typeof theme === 'string') {
      theme = {
        extend: theme
      };
    } else {
      theme = (0, _extends3['default'])({}, theme);
    }

    deprecatedStylingMethods.forEach(function (name) {
      console.error( // eslint-disable-line no-console
      'Styling method "' + name + '" is deprecated, use "theme" property instead');

      theme[deprecatedStylingMethodsMap[name]] = function (_ref) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var style = _ref.style;
        return {
          style: (0, _extends3['default'])({}, style, props[name].apply(props, args))
        };
      };
    });
  }

  return theme;
}

var JSONTree = (_temp = _class = function (_React$Component) {
  (0, _inherits3['default'])(JSONTree, _React$Component);

  function JSONTree() {
    (0, _classCallCheck3['default'])(this, JSONTree);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  JSONTree.prototype.render = function render() {
    var _props = this.props,
        value = _props.data,
        expandRoot = _props.expandRoot,
        expandAll = _props.expandAll,
        keyPath = _props.keyPath,
        postprocessValue = _props.postprocessValue,
        hideRoot = _props.hideRoot,
        theme = _props.theme,
        isLightTheme = _props.isLightTheme,
        rest = (0, _objectWithoutProperties3['default'])(_props, ['data', 'expandRoot', 'expandAll', 'keyPath', 'postprocessValue', 'hideRoot', 'theme', 'isLightTheme']);


    if (typeof expandRoot !== 'undefined') {
      console.error( // eslint-disable-line no-console
      'The expandRoot property is deprecated, use "shouldExpandNode: () => false" instead');
    }

    if (typeof expandAll !== 'undefined') {
      console.error( // eslint-disable-line no-console
      'The expandAll property is deprecated, use "shouldExpandNode: () => true" instead');
    }

    var styling = (0, _createStylingFromTheme2['default'])(checkLegacyTheming(theme, rest), null, isLightTheme);

    return _react2['default'].createElement(
      'ul',
      styling('tree'),
      _react2['default'].createElement(_JSONNode2['default'], (0, _extends3['default'])({}, (0, _extends3['default'])({ postprocessValue: postprocessValue, hideRoot: hideRoot, styling: styling }, rest), {
        initialExpanded: typeof expandRoot === 'undefined' ? true : expandRoot,
        allExpanded: typeof expandAll === 'undefined' ? false : expandAll,
        keyPath: hideRoot ? [] : keyPath,
        value: postprocessValue(value)
      }))
    );
  };

  return JSONTree;
}(_react2['default'].Component), _class.propTypes = {
  data: _propTypes2['default'].oneOfType([_propTypes2['default'].array, _propTypes2['default'].object]).isRequired,
  hideRoot: _propTypes2['default'].bool,
  theme: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].string]),
  isLightTheme: _propTypes2['default'].bool,
  expandRoot: _propTypes2['default'].bool,
  expandAll: _propTypes2['default'].bool,
  keyPath: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])),
  postprocessValue: _propTypes2['default'].func,
  sortObjectKeys: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].bool])
}, _class.defaultProps = {
  shouldExpandNode: function shouldExpandNode(keyName, data, level) {
    return level === 0;
  }, // expands root by default,
  hideRoot: false,
  keyPath: ['root'],
  getItemString: function getItemString(type, data, itemType, itemString) {
    return _react2['default'].createElement(
      'span',
      null,
      itemType,
      ' ',
      itemString
    );
  },
  labelRenderer: identity,
  valueRenderer: identity,
  postprocessValue: identity,
  isCustomNode: function isCustomNode() {
    return false;
  },
  collectionLimit: 50,
  isLightTheme: true
}, _temp);
exports['default'] = JSONTree;

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(237);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(1427)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(630)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 394:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 395:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(1428);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(105);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(104);
var dPs = __webpack_require__(1430);
var enumBugKeys = __webpack_require__(402);
var IE_PROTO = __webpack_require__(400)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(632)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(1433).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 399:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(401)('keys');
var uid = __webpack_require__(239);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(53);
var global = __webpack_require__(89);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(238) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 402:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(103).f;
var has = __webpack_require__(106);
var TAG = __webpack_require__(69)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(69);


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(89);
var core = __webpack_require__(53);
var LIBRARY = __webpack_require__(238);
var wksExt = __webpack_require__(404);
var defineProperty = __webpack_require__(103).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 406:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(1447);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(1451);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(237);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1458), __esModule: true };

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(391);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(392);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(407);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _class, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JSONArrow = __webpack_require__(644);

var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

var _getCollectionEntries = __webpack_require__(1464);

var _getCollectionEntries2 = _interopRequireDefault(_getCollectionEntries);

var _JSONNode = __webpack_require__(642);

var _JSONNode2 = _interopRequireDefault(_JSONNode);

var _ItemRange = __webpack_require__(1468);

var _ItemRange2 = _interopRequireDefault(_ItemRange);

var _function = __webpack_require__(647);

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Renders nested values (eg. objects, arrays, lists, etc.)
 */

function renderChildNodes(props, from, to) {
  var nodeType = props.nodeType,
      data = props.data,
      collectionLimit = props.collectionLimit,
      circularCache = props.circularCache,
      keyPath = props.keyPath,
      postprocessValue = props.postprocessValue,
      allExpanded = props.allExpanded,
      sortObjectKeys = props.sortObjectKeys;

  var childNodes = [];

  (0, _getCollectionEntries2['default'])(nodeType, data, sortObjectKeys, collectionLimit, from, to).forEach(function (entry) {
    if (entry.to) {
      childNodes.push(_react2['default'].createElement(_ItemRange2['default'], (0, _extends3['default'])({}, props, {
        key: 'ItemRange--' + entry.from + '-' + entry.to,
        from: entry.from,
        to: entry.to,
        renderChildNodes: renderChildNodes
      })));
    } else {
      var key = entry.key,
          value = entry.value;

      var isCircular = circularCache.indexOf(value) !== -1;

      var node = _react2['default'].createElement(_JSONNode2['default'], (0, _extends3['default'])({}, props, { postprocessValue: postprocessValue, collectionLimit: collectionLimit }, {
        key: 'Node--' + key,
        keyPath: [key].concat(keyPath),
        value: postprocessValue(value),
        circularCache: [].concat(circularCache, [value]),
        initialExpanded: false,
        allExpanded: isCircular ? false : allExpanded,
        hideRoot: false
      }));

      if (node !== false) {
        childNodes.push(node);
      }
    }
  });

  return childNodes;
}

var JSONNestedNode = (_temp = _class = function (_React$Component) {
  (0, _inherits3['default'])(JSONNestedNode, _React$Component);

  function JSONNestedNode(props) {
    (0, _classCallCheck3['default'])(this, JSONNestedNode);

    // calculate individual node expansion if necessary
    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.shouldComponentUpdate = _function2['default'];

    _this.handleClick = function (e) {
      e.stopPropagation();
      _this.setState({ expanded: !_this.state.expanded });
    };

    var shouldExpandNode = props.shouldExpandNode ? props.shouldExpandNode(props.keyPath, props.data, props.level) : false;
    _this.state = {
      expanded: props.initialExpanded || props.allExpanded || shouldExpandNode,
      createdChildNodes: false
    };
    return _this;
  }

  JSONNestedNode.prototype.render = function render() {
    var _props = this.props,
        getItemString = _props.getItemString,
        nodeTypeIndicator = _props.nodeTypeIndicator,
        nodeType = _props.nodeType,
        data = _props.data,
        hideRoot = _props.hideRoot,
        createItemString = _props.createItemString,
        styling = _props.styling,
        collectionLimit = _props.collectionLimit,
        keyPath = _props.keyPath,
        labelRenderer = _props.labelRenderer;

    var expanded = this.state.expanded;
    var renderedChildren = expanded ? renderChildNodes((0, _extends3['default'])({}, this.props, { level: this.props.level + 1 })) : null;

    var itemType = _react2['default'].createElement(
      'span',
      styling('nestedNodeItemType', expanded),
      nodeTypeIndicator
    );
    var renderedItemString = getItemString(nodeType, data, itemType, createItemString(data, collectionLimit));
    var stylingArgs = [nodeType, expanded, keyPath];

    return hideRoot ? _react2['default'].createElement(
      'li',
      styling.apply(undefined, ['rootNode'].concat(stylingArgs)),
      _react2['default'].createElement(
        'ul',
        styling.apply(undefined, ['rootNodeChildren'].concat(stylingArgs)),
        renderedChildren
      )
    ) : _react2['default'].createElement(
      'li',
      styling.apply(undefined, ['nestedNode'].concat(stylingArgs)),
      _react2['default'].createElement(_JSONArrow2['default'], {
        styling: styling,
        nodeType: nodeType,
        expanded: expanded,
        onClick: this.handleClick
      }),
      _react2['default'].createElement(
        'label',
        (0, _extends3['default'])({}, styling.apply(undefined, [['label', 'nestedNodeLabel']].concat(stylingArgs)), {
          onClick: this.handleClick.bind(this)
        }),
        labelRenderer.apply(undefined, keyPath),
        ':'
      ),
      _react2['default'].createElement(
        'span',
        (0, _extends3['default'])({}, styling.apply(undefined, ['nestedNodeItemString'].concat(stylingArgs)), {
          onClick: this.handleClick
        }),
        renderedItemString
      ),
      _react2['default'].createElement(
        'ul',
        styling.apply(undefined, ['nestedNodeChildren'].concat(stylingArgs)),
        renderedChildren
      )
    );
  };

  return JSONNestedNode;
}(_react2['default'].Component), _class.propTypes = {
  getItemString: _propTypes2['default'].func.isRequired,
  nodeTypeIndicator: _propTypes2['default'].any,
  nodeType: _propTypes2['default'].string.isRequired,
  data: _propTypes2['default'].any,
  hideRoot: _propTypes2['default'].bool.isRequired,
  createItemString: _propTypes2['default'].func.isRequired,
  styling: _propTypes2['default'].func.isRequired,
  collectionLimit: _propTypes2['default'].number,
  keyPath: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])).isRequired,
  labelRenderer: _propTypes2['default'].func.isRequired,
  shouldExpandNode: _propTypes2['default'].func,
  level: _propTypes2['default'].number.isRequired,
  initialExpanded: _propTypes2['default'].bool,
  allExpanded: _propTypes2['default'].bool,
  sortObjectKeys: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].bool])
}, _class.defaultProps = {
  data: [],
  initialExpanded: false,
  allExpanded: false,
  circularCache: [],
  level: 0
}, _temp);
exports['default'] = JSONNestedNode;

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleMessageItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConsoleMessageHeader__ = __webpack_require__(1425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ConsoleMessageBody__ = __webpack_require__(1526);




let

ConsoleMessageItem = class ConsoleMessageItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
      viewMode: pm.settings && pm.settings.getSetting('consoleViewMode') || 'pretty' };


    this.handleToggle = this.handleToggle.bind(this);
    this.handleViewModeChange = this.handleViewModeChange.bind(this);
  }

  getMessageItemClasses() {
    const { allowToggle, isSubMessage, islastChild } = this.props;
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'console-message-item': true,
      'console-message-item--expandable': allowToggle,
      'console-message-item--active': this.state.isExpanded,
      'console-message-item--child': isSubMessage,
      'console-message-item--last-child': islastChild });

  }

  handleToggle() {
    this.setState(state => {
      return { isExpanded: !state.isExpanded };
    });
  }

  handleViewModeChange(viewMode = 'pretty') {
    this.setState({ viewMode }, () => {
      pm.settings && pm.settings.setSetting('consoleViewMode', viewMode);
    });
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getMessageItemClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ConsoleMessageHeader__["a" /* default */], {
          allowToggle: this.props.allowToggle,
          expanded: this.state.isExpanded,
          label: _.get(this.props, 'message.label'),
          showLabel: this.props.showLabel,
          timestamp: _.get(this.props, 'message.timestamp'),
          title: _.get(this.props, 'message.message'),
          type: _.get(this.props, 'message.type'),
          onToggle: this.handleToggle }),


        this.state.isExpanded &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ConsoleMessageBody__["a" /* default */], {
          message: this.props.message,
          viewMode: this.state.viewMode,
          onViewModeChange: this.handleViewModeChange })));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1426), __esModule: true };

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(238);
var $export = __webpack_require__(88);
var redefine = __webpack_require__(633);
var hide = __webpack_require__(123);
var Iterators = __webpack_require__(181);
var $iterCreate = __webpack_require__(1429);
var setToStringTag = __webpack_require__(403);
var getPrototypeOf = __webpack_require__(1434);
var ITERATOR = __webpack_require__(69)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(124) && !__webpack_require__(125)(function () {
  return Object.defineProperty(__webpack_require__(632)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(105);
var document = __webpack_require__(89).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(123);


/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(106);
var toIObject = __webpack_require__(126);
var arrayIndexOf = __webpack_require__(1431)(false);
var IE_PROTO = __webpack_require__(400)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(399);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(394);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1435);
var global = __webpack_require__(89);
var hide = __webpack_require__(123);
var Iterators = __webpack_require__(181);
var TO_STRING_TAG = __webpack_require__(69)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(126);
var gOPN = __webpack_require__(639).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(634);
var hiddenKeys = __webpack_require__(402).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(241);
var createDesc = __webpack_require__(180);
var toIObject = __webpack_require__(126);
var toPrimitive = __webpack_require__(397);
var has = __webpack_require__(106);
var IE8_DOM_DEFINE = __webpack_require__(631);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(124) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(88);
var core = __webpack_require__(53);
var fails = __webpack_require__(125);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(179);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objType = __webpack_require__(1460);

var _objType2 = _interopRequireDefault(_objType);

var _JSONObjectNode = __webpack_require__(1461);

var _JSONObjectNode2 = _interopRequireDefault(_JSONObjectNode);

var _JSONArrayNode = __webpack_require__(1470);

var _JSONArrayNode2 = _interopRequireDefault(_JSONArrayNode);

var _JSONIterableNode = __webpack_require__(1471);

var _JSONIterableNode2 = _interopRequireDefault(_JSONIterableNode);

var _JSONValueNode = __webpack_require__(1476);

var _JSONValueNode2 = _interopRequireDefault(_JSONValueNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JSONNode = function JSONNode(_ref) {
  var getItemString = _ref.getItemString,
      _ref$initialExpanded = _ref.initialExpanded,
      initialExpanded = _ref$initialExpanded === undefined ? false : _ref$initialExpanded,
      keyPath = _ref.keyPath,
      labelRenderer = _ref.labelRenderer,
      styling = _ref.styling,
      value = _ref.value,
      valueRenderer = _ref.valueRenderer,
      isCustomNode = _ref.isCustomNode,
      rest = (0, _objectWithoutProperties3['default'])(_ref, ['getItemString', 'initialExpanded', 'keyPath', 'labelRenderer', 'styling', 'value', 'valueRenderer', 'isCustomNode']);

  var nodeType = isCustomNode(value) ? 'Custom' : (0, _objType2['default'])(value);

  var simpleNodeProps = {
    getItemString: getItemString,
    initialExpanded: initialExpanded,
    key: keyPath[0],
    keyPath: keyPath,
    labelRenderer: labelRenderer,
    nodeType: nodeType,
    styling: styling,
    value: value,
    valueRenderer: valueRenderer
  };

  var nestedNodeProps = (0, _extends3['default'])({}, rest, simpleNodeProps, {
    data: value,
    isCustomNode: isCustomNode
  });

  switch (nodeType) {
    case 'Object':
    case 'Error':
      return _react2['default'].createElement(_JSONObjectNode2['default'], nestedNodeProps);
    case 'Array':
      return _react2['default'].createElement(_JSONArrayNode2['default'], nestedNodeProps);
    case 'Iterable':
      return _react2['default'].createElement(_JSONIterableNode2['default'], nestedNodeProps);
    case 'String':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter(raw) {
          return '"' + raw + '"';
        } }));
    case 'Number':
      return _react2['default'].createElement(_JSONValueNode2['default'], simpleNodeProps);
    case 'Boolean':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter(raw) {
          return raw ? 'true' : 'false';
        } }));
    case 'Date':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter(raw) {
          return raw.toISOString();
        } }));
    case 'Null':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter() {
          return 'null';
        } }));
    case 'Undefined':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter() {
          return 'undefined';
        } }));
    case 'Function':
    case 'Symbol':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter(raw) {
          return raw.toString();
        } }));
    case 'Custom':
      return _react2['default'].createElement(_JSONValueNode2['default'], simpleNodeProps);
    default:
      return null;
  }
};

JSONNode.propTypes = {
  getItemString: _propTypes2['default'].func.isRequired,
  initialExpanded: _propTypes2['default'].bool.isRequired,
  keyPath: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])).isRequired,
  labelRenderer: _propTypes2['default'].func.isRequired,
  styling: _propTypes2['default'].func.isRequired,
  value: _propTypes2['default'].any,
  valueRenderer: _propTypes2['default'].func.isRequired,
  isCustomNode: _propTypes2['default'].func.isRequired
};

exports['default'] = JSONNode;

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1462), __esModule: true };

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JSONArrow = function JSONArrow(_ref) {
  var styling = _ref.styling,
      arrowStyle = _ref.arrowStyle,
      expanded = _ref.expanded,
      nodeType = _ref.nodeType,
      onClick = _ref.onClick;
  return _react2['default'].createElement(
    'div',
    (0, _extends3['default'])({}, styling('arrowContainer', arrowStyle), {
      onClick: onClick
    }),
    _react2['default'].createElement(
      'div',
      styling(['arrow', 'arrowSign'], nodeType, expanded),
      arrowStyle === 'double' && _react2['default'].createElement('div', styling(['arrowSign', 'arrowSignInner']))
    )
  );
};

JSONArrow.propTypes = {
  styling: _propTypes2['default'].func.isRequired,
  arrowStyle: _propTypes2['default'].oneOf(['single', 'double']),
  expanded: _propTypes2['default'].bool.isRequired,
  nodeType: _propTypes2['default'].string.isRequired,
  onClick: _propTypes2['default'].func.isRequired
};

JSONArrow.defaultProps = {
  arrowStyle: 'single'
};

exports['default'] = JSONArrow;

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1465), __esModule: true };

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(1467);
var ITERATOR = __webpack_require__(69)('iterator');
var Iterators = __webpack_require__(181);
module.exports = __webpack_require__(53).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = shouldPureComponentUpdate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _shallowEqual = __webpack_require__(1469);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function shouldPureComponentUpdate(nextProps, nextState) {
  return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
}

module.exports = exports['default'];

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1481), __esModule: true };

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(176);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(401)('wks');
var uid = __webpack_require__(239);
var Symbol = __webpack_require__(89).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(1454);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__KeyMapMixin__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);





function getSequencesFromMap(hotKeyMap, hotKeyName) {
  const sequences = hotKeyMap[hotKeyName];

  // If no sequence is found with this name we assume
  // the user is passing a hard-coded sequence as a key
  if (!sequences) {
    return [hotKeyName];
  }

  if (_.isArray(sequences)) {
    return sequences;
  }

  return [sequences];
}let

KeyMaps = class KeyMaps extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  getChildContext() {
    return { hotKeyParent: this };
  }

  componentDidMount() {
    // import is here to support React's server rendering as Mousetrap immediately
    // calls itself with window and it fails in Node environment
    const Mousetrap = __webpack_require__(273);

    // Not optimal - imagine hundreds of this component. We need a top level
    // delegation point for mousetrap
    this.__mousetrap__ = new Mousetrap(
    this.props.attach || __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this));


    this.updateKeyMaps(true);
  }

  componentDidUpdate(prevProps) {
    this.updateKeyMaps(false, prevProps);
  }

  componentWillUnmount() {
    if (this.context.hotKeyParent) {
      this.context.hotKeyParent.childHandledSequence(null);
    }

    if (this.__mousetrap__) {
      this.__mousetrap__.reset();
    }
  }

  updateKeyMaps(force = false, prevProps = {}) {
    const { handlers = {} } = this.props;
    const { handlers: prevHandlers = handlers } = prevProps;

    // Ensure map is up-to-date to begin with
    // We will only bother continuing if the map was actually updated
    if (!force && _.isEqual(handlers, prevHandlers) && !this.props.updateMap()) {
      return;
    }

    const hotKeyMap = this.props.getMap();
    const sequenceHandlers = [];
    const mousetrap = this.__mousetrap__;

    // Group all our handlers by sequence
    _.forEach(handlers, (handler, hotKey) => {
      const handlerSequences = getSequencesFromMap(hotKeyMap, hotKey);

      // Could be optimized as every handler will get called across every bound
      // component - imagine making a node a focus point and then having hundreds!
      _.forEach(handlerSequences, sequence => {
        let action;

        const callback = (event, sequence) => {
          // Check we are actually in focus and that a child hasn't already handled this sequence
          const isFocused = _.isBoolean(this.props.focused) ?
          this.props.focused :
          this.__isFocused__;

          if (isFocused && sequence !== this.__lastChildSequence__) {
            if (this.context.hotKeyParent) {
              this.context.hotKeyParent.childHandledSequence(sequence);
            }

            return handler(event, sequence);
          }
        };

        if (_.isObject(sequence)) {
          action = sequence.action;
          sequence = sequence.sequence;
        }

        sequenceHandlers.push({
          callback,
          action,
          sequence });

      });
    });

    // Hard reset our handlers (probably could be more efficient)
    mousetrap.reset();
    _.forEach(sequenceHandlers, handler => {
      return mousetrap.bind(handler.sequence, handler.callback, handler.action);
    });
  }

  childHandledSequence(sequence = null) {
    this.__lastChildSequence__ = sequence;

    // Traverse up any hot key parents so everyone is aware a child has handled a certain sequence
    if (this.context.hotKeyParent) {
      this.context.hotKeyParent.childHandledSequence(sequence);
    }
  }

  focus() {
    let node = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this);
    node && node.focus();
  }

  onFocus() {
    this.__isFocused__ = true;

    if (this.props.onFocus) {
      this.props.onFocus(...arguments);
    }
  }

  onBlur() {
    this.__isFocused__ = false;

    if (this.props.onBlur) {
      this.props.onBlur(...arguments);
    }
    if (this.context.hotKeyParent) {
      this.context.hotKeyParent.childHandledSequence(null);
    }
  }

  render() {
    let child = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      tabIndex: '-1' });

  }};


KeyMaps.propTypes = {
  onFocus: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  onBlur: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  keyMap: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
  handlers: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
  focused: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, // externally controlled focus
  attach: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any // dom element to listen for key events
};

KeyMaps.contextTypes = { hotKeyParent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any };

KeyMaps.childContextTypes = { hotKeyParent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any };

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__KeyMapMixin__["a" /* default */])(KeyMaps));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DownSolidIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '8', height: '5', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'down-solid', d: 'M8 11L4 6h8z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#down-solid' }));



function DownSolidIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(89);
var core = __webpack_require__(53);
var ctx = __webpack_require__(396);
var hide = __webpack_require__(123);
var has = __webpack_require__(106);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 89:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkbox; });
/* unused harmony export InputGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keymaps_KeyMaps__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons_CloseIcon__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icons_ExclamationIcon__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Icons_SearchIcon__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Icons_SuccessIcon__ = __webpack_require__(108);









let Input = class Input extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.getKeymapHandlers = this.getKeymapHandlers.bind(this);
    this.handleNextItem = this.handleNextItem.bind(this);
    this.handlePreviousItem = this.handlePreviousItem.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
    this.handleEscape = this.handleEscape.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSuggestionSelect = this.handleSuggestionSelect.bind(this);
    this.handleSuggestionClose = this.handleSuggestionClose.bind(this);
    this.handleNextSuggestion = this.handleNextSuggestion.bind(this);
    this.handlePreviousSuggestion = this.handlePreviousSuggestion.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.focus = this.focus.bind(this);
    this.clear = this.clear.bind(this);

    this.state = {
      highlightedSuggestion: null,
      isSuggestionsOpen: false };

  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'input': true,
      'input-line': this.props.inputStyle === 'line',
      'input-box': this.props.inputStyle === 'box',
      'input-huge': this.props.size === 'huge',
      'input-type-file': this.props.type === 'file',
      'is-error': this.props.error,
      'show-focus': this.props.showFocus,
      'is-valid': this.props.isValid,
      'is-disabled': this.props.disabled,

      // isValid can be null if we don't have any validity information
      // so explicitly checking for false here
      'is-invalid': this.props.isValid === false },
    this.props.className);
  }

  getWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'input-validation-wrapper': true,
      'is-valid': this.props.isValid,

      // isValid can be null if we don't have any validity information
      // so explicitly checking for false here
      'is-invalid': this.props.isValid === false });

  }

  handleChange(e, val) {
    let value;
    if (e) {
      if (this.props.type === 'file') {
        value = e.target.files;
      } else
      {
        value = e.target.value;
      }
    } else
    if (val) {
      value = val;
    }

    this.props.onChange && this.props.onChange(value);
    this.handleSuggestionOpen();
  }

  getKeymapHandlers() {
    return {
      'nextItem': pm.shortcuts.handle('nextItem', this.handleNextItem),
      'prevItem': pm.shortcuts.handle('prevItem', this.handlePreviousItem),
      'select': pm.shortcuts.handle('select', this.handleSelectItem),
      'quit': pm.shortcuts.handle('select', this.handleEscape) };

  }

  handleNextItem(e) {
    e.preventDefault();
    e.stopPropagation();
    this.handleNextSuggestion();
  }

  handlePreviousItem(e) {
    e.preventDefault();
    e.stopPropagation();
    this.handlePreviousSuggestion();
  }

  handleSelectItem(e) {
    e.preventDefault();
    if (this.state.isSuggestionsOpen && this.state.highlightedSuggestion) {
      this.handleSuggestionSelect();
    } else
    {
      let isModifierPressed = e.ctrlKey || e.metaKey;
      !isModifierPressed && this.props.onSubmit && this.props.onSubmit();
      !isModifierPressed && this.props.onEnter && this.props.onEnter(e);
      this.handleSuggestionClose();
    }
  }

  handleEscape(e) {
    e.preventDefault();
    this.handleSuggestionClose();
    this.props.onEscape && this.props.onEscape(e);
  }

  getActiveSuggestions() {
    let value = _.get(this.props, 'value', '');
    return _.filter(this.props.suggestions, suggestion => {
      let suggestionValue = suggestion.value || '';
      return _.includes(_.toLower(suggestionValue), _.toLower(value));
    });
  }

  _scrollHighlightedSuggestionIntoView() {
    const $node = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this);
    if (!$node) {
      return;
    }

    const $highlightedItem = $node.querySelector('.input-suggestion.is-hovered');

    if (!$highlightedItem) {
      return;
    }

    if ($highlightedItem.scrollIntoViewIfNeeded) {
      $highlightedItem.scrollIntoViewIfNeeded(false);
    } else
    {
      $highlightedItem.scrollIntoView(true);
    }
  }

  handleNextSuggestion() {
    !this.state.isSuggestionsOpen && this.handleSuggestionOpen();
    let activeSuggestions = this.getActiveSuggestions();

    if (!this.state.highlightedSuggestion) {
      this.setState({ highlightedSuggestion: _.first(activeSuggestions) }, () => {
        this._scrollHighlightedSuggestionIntoView();
      });
    } else
    {
      let currentSuggestionIndex = _.findIndex(activeSuggestions, suggestion => {
        return suggestion.value === this.state.highlightedSuggestion.value;
      });

      if (currentSuggestionIndex === activeSuggestions.length - 1) {
        currentSuggestionIndex = -1;
      }

      this.setState({ highlightedSuggestion: activeSuggestions[currentSuggestionIndex + 1] }, () => {
        this._scrollHighlightedSuggestionIntoView();
      });
    }
  }

  handlePreviousSuggestion() {
    let activeSuggestions = this.getActiveSuggestions();

    if (!this.state.highlightedSuggestion) {
      return;
    } else
    {
      let currentSuggestionIndex = _.findIndex(activeSuggestions, suggestion => {
        return suggestion.value === this.state.highlightedSuggestion.value;
      });

      if (currentSuggestionIndex === 0) {
        currentSuggestionIndex = activeSuggestions.length;
      }

      this.setState({ highlightedSuggestion: activeSuggestions[currentSuggestionIndex - 1] }, () => {
        this._scrollHighlightedSuggestionIntoView();
      });
    }
  }

  handleSuggestionHover(suggestion) {
    this.setState({ highlightedSuggestion: suggestion });
  }

  getSuggestionItemClasses(suggestion) {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'input-suggestion': true,
      'is-hovered': this.state.highlightedSuggestion === suggestion });

  }

  _renderSuggestions() {
    if (!this.state.isSuggestionsOpen) {
      return false;
    }

    let activeSuggestions = this.getActiveSuggestions();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-suggestions' },

        activeSuggestions.map(suggestion => {
          let suggestionLabel = suggestion.category === 'Header presets' ?
          'Header Preset: ' + suggestion.value : suggestion.value;

          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: this.getSuggestionItemClasses(suggestion),
                key: suggestion.value,
                onMouseDown: this.handleSuggestionSelect,
                onMouseEnter: this.handleSuggestionHover.bind(this, suggestion) },
              suggestionLabel));

        })));



  }

  handleClick(e) {
    this.props.onClick && this.props.onClick(e);
  }

  handleFocus() {
    this.props.onFocus && this.props.onFocus();
  }

  handleBlur() {
    this.props.onBlur && this.props.onBlur();
    this.handleSuggestionClose();
  }

  handleContextMenu() {
    pm.mediator.trigger('contextMenu:inputActivated', this);
  }

  handleSuggestionSelect() {
    if (this.state.highlightedSuggestion) {
      let selectedValue;
      if (this.state.highlightedSuggestion.category === 'Header presets') {
        selectedValue = this.state.highlightedSuggestion;
      } else
      {
        selectedValue = this.state.highlightedSuggestion.value;
      }

      this.props.onChange && this.props.onChange(selectedValue);
      this.props.onSuggestionSelect && this.props.onSuggestionSelect(selectedValue);
    }

    this.handleSuggestionClose();
  }

  handleSuggestionOpen() {
    if (!this.props.suggestions) {
      return;
    }

    this.setState({
      isSuggestionsOpen: true,
      highlightedSuggestion: null });

  }

  handleSuggestionClose() {
    if (!this.props.suggestions) {
      return;
    }

    this.state.isSuggestionsOpen && this.setState({
      isSuggestionsOpen: false,
      highlightedSuggestion: null });

  }

  focus() {
    if (this.props.inputStyle === 'search') {
      this.refs.SearchInput && this.refs.SearchInput.focus && this.refs.SearchInput.focus();
    }

    if (this.refs.input) {
      let $input = this.refs.input;
      $input.focus && $input.focus();
      if (this.props.type === 'text' && !_.isEmpty(this.props.value)) {
        $input.selectionStart = $input.selectionEnd = this.props.value.length;
      }
    }
  }

  blur() {
    if (this.props.inputStyle === 'search') {
      this.refs.SearchInput && this.refs.SearchInput.blur && this.refs.SearchInput.blur();
    }
  }

  clear() {
    this.refs.input.value = '';
    this.forceUpdate();
  }

  /**
     * Issue:- CLIENTAPP-1937
     * This checks have been added to prevent the setState race condition on OnChange and parent setState on modal
     */
  shouldComponentUpdate(nextProps, nextState) {
    // Basic comparison check
    if (nextState === this.state && nextProps === this.props) {
      return false;
    }

    // Race check
    // If suggestions is open and no new highlight and value is the same as before, then return
    else if (nextState.isSuggestionsOpen && nextState.highlightedSuggestion === this.state.highlightedSuggestion && nextProps.value === this.props.value) {
        return false;
      }
    return true;
  }

  selectAll() {
    let $input = this.refs.input;
    if ($input) {
      $input.setSelectionRange(0, $input.value.length);
    }
  }

  handleDragStart(e) {
    e && e.stopPropagation();
  }

  render() {
    if (this.props.inputStyle === 'search') {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SearchInput, {
        className: this.props.className,
        onChange: this.props.onChange,
        onCancel: this.props.onCancel,
        onSubmit: this.props.onSubmit,
        onEnter: this.props.onEnter,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur,
        onDownArrow: this.props.onDownArrow,
        onUpArrow: this.props.onUpArrow,
        onKeyUp: this.props.onKeyUp,
        onKeyDown: this.props.onKeyDown,
        placeholder: this.props.placeholder,
        ref: 'SearchInput',
        query: this.props.query,
        hideSearchGlass: this.props.hideSearchGlass,
        hideCancelOnBlur: this.props.hideCancelOnBlur,
        selectAllOnFocus: this.props.selectAllOnFocus });

    }

    let classes = this.getClasses();

    if (this.props.type === 'file') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          type: this.props.type,
          className: classes,
          onChange: this.handleChange,
          disabled: this.props.disabled,
          multiple: true,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          ref: 'input',
          key: 'file' }));


    }

    let $input =
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__keymaps_KeyMaps__["a" /* default */], { keyMap: pm.shortcuts.getShortcuts(), handlers: this.getKeymapHandlers() },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-field' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          ref: 'input',
          value: this.props.value,
          className: classes,
          spellCheck: false // Disabled due to perf issues:- https://bugs.chromium.org/p/chromium/issues/detail?id=237433
          , type: this.props.type,
          placeholder: this.props.placeholder,
          pattern: this.props.pattern,
          disabled: this.props.disabled,
          readOnly: this.props.readOnly,
          onChange: this.handleChange,
          onClick: this.handleClick,
          onDoubleClick: this.props.onDoubleClick,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onContextMenu: this.handleContextMenu,
          onDragStart: this.handleDragStart,
          key: 'text' }),


        !_.isEmpty(this.props.error) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-error-section' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Icons_ExclamationIcon__["a" /* default */], { className: 'input-error-icon' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-error-tooltip' },
            this.props.error)),




        _.isEmpty(this.props.error) && !_.isEmpty(this.props.warning) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-warning-section' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Icons_ExclamationIcon__["a" /* default */], { className: 'input-warning-icon' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-warning-tooltip' },
            this.props.warning)),




        _.isBoolean(this.props.isValid) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'valid-status' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'valid-icon' }))));






    if (this.props.suggestions && this.props.warning && this.props.warning.value) {
      let suggestions = this._renderSuggestions();

      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-suggestion-group' },
          $input,

          (this.state.isFocused || this.props.warning.show) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-warning' }, ' ', this.props.warning.value, ' '),

          suggestions));


    }

    if (this.props.suggestions) {
      let suggestions = this._renderSuggestions();
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-suggestion-group' },
          $input,
          suggestions));


    }

    return $input;
  }};let


SearchInput = class SearchInput extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isFocused: false };


    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.setSelectAll = this.setSelectAll.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
  }

  focus() {
    this.refs.input && this.refs.input.focus && this.refs.input.focus();
  }

  blur() {
    this.refs.input && this.refs.input.blur && this.refs.input.blur();
  }

  getGroupClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'input-search-group': true,
      'is-searching': !_.isEmpty(this.props.query),
      'is-hovered': this.state.isHovered,
      'is-focused': this.state.isFocused,
      'is-blurred': !this.state.isFocused && this.props.hideCancelOnBlur },
    this.props.className);
  }

  getKeymapHandlers() {
    return {
      'select': pm.shortcuts.handle('select', this.props.onEnter),
      'nextItem': pm.shortcuts.handle('nextItem', this.handleNext),
      'prevItem': pm.shortcuts.handle('prevItem', this.handlePrev),
      'quit': pm.shortcuts.handle('select', this.handleEscape) };

  }

  handleNext(e) {
    e && e.stopPropagation();
    e && e.preventDefault();
    _.invoke(this, 'props.onDownArrow');
    _.invoke(this, 'props.onKeyDown', e);
  }

  handlePrev(e) {
    e && e.stopPropagation();
    e && e.preventDefault();
    _.invoke(this, 'props.onUpArrow');
    _.invoke(this, 'props.onKeyDown', e);
  }

  handleEscape(e) {
    e && e.stopPropagation();
    e && e.preventDefault();
    this.handleCancel();
  }

  handleFocus() {
    this.setState({ isFocused: true });
    if (this.props.selectAllOnFocus) {
      this.setSelectAll();
    }
    this.props.onFocus && this.props.onFocus();
  }

  handleBlur() {
    this.setState({ isFocused: false });

    this.props.onBlur && this.props.onBlur();
  }

  handleMouseOver() {
    this.setState({ isHovered: true });
  }

  handleMouseOut() {
    this.setState({ isHovered: false });
  }

  setSelectAll() {
    const { input } = this.refs;
    input.setSelectionRange(0, input.value.length);
  }

  getInputClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()(
    'input',
    'input-search');

  }

  handleChange(e) {
    this.props.onChange && this.props.onChange(e.target.value);
  }

  handleCancel() {
    this.props.onCancel && this.props.onCancel();
    this.props.onChange && this.props.onChange('');
  }

  handleSubmit() {
    this.props.onSubmit && this.props.onSubmit();
  }

  render() {
    let groupClasses = this.getGroupClasses();
    let inputClasses = this.getInputClasses();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__keymaps_KeyMaps__["a" /* default */], { keyMap: pm.shortcuts.getShortcuts(), handlers: this.getKeymapHandlers() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: groupClasses,
            onMouseOver: this.handleMouseOver,
            onMouseOut: this.handleMouseOut },


          !this.props.hideSearchGlass &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-search-group__search-glass-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Icons_SearchIcon__["a" /* default */], { className: 'input-search-group__search-glass-icon' })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-search-group__input-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              type: 'search',
              className: inputClasses,
              onChange: this.handleChange,
              onFocus: this.handleFocus,
              onBlur: this.handleBlur,
              onKeyUp: this.props.onKeyUp,
              onKeyDown: this.props.onKeyDown,
              placeholder: this.props.placeholder,
              value: this.props.query,
              disabled: this.props.disabled,
              spellCheck: false,
              ref: 'input' })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-search-group__search-cancel-wrapper', onMouseDown: this.handleCancel },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons_CloseIcon__["a" /* default */], { size: 'xs', className: 'input-search-group__search-cancel-button' })))));




  }};


let Checkbox = class Checkbox extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'input-checkbox': true,
      'is-selected': this.props.checked,
      'is-warning': this.props.warning,
      'is-error': this.props.error,
      'is-disabled': this.props.disabled },
    this.props.className);
  }

  handleClick() {
    !this.props.disabled && this.props.onChange && this.props.onChange(!this.props.checked);
  }

  render() {
    let classes = this.getClasses();
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: classes,
          onClick: this.handleClick,
          onMouseEnter: this.props.onHoverIn,
          onMouseLeave: this.props.onHoverOut },


        this.props.checked ?
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons_SuccessIcon__["a" /* default */], { size: 'xs', style: 'primary' }) :
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons_SuccessIcon__["a" /* default */], { size: 'xs' })));



  }};


Checkbox.defaultProps = {
  checked: false,
  disabled: false };


let InputGroup = class InputGroup extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'input-group': true,
      'input-group-line': this.props.inputStyle === 'line',
      'input-group-stacked': this.props.stacked });

  }

  render() {
    let classes = this.getClasses();

    let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { inputStyle: this.props.inputStyle });
    });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes }, children));

  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })

},[1420]);