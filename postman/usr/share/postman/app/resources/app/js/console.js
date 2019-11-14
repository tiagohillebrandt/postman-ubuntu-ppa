webpackJsonp([27],{

/***/ 1395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Inspector = exports.ObjectName = exports.ObjectValue = exports.ObjectRootLabel = exports.ObjectLabel = exports.DOMInspector = exports.TableInspector = exports.ObjectInspector = exports.chromeDark = exports.chromeLight = undefined;

var _extends2 = __webpack_require__(188);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(648);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _themes = __webpack_require__(1401);

Object.defineProperty(exports, 'chromeLight', {
  enumerable: true,
  get: function get() {
    return _themes.chromeLight;
  }
});
Object.defineProperty(exports, 'chromeDark', {
  enumerable: true,
  get: function get() {
    return _themes.chromeDark;
  }
});

var _ObjectInspector2 = __webpack_require__(3211);

var _ObjectInspector3 = _interopRequireDefault(_ObjectInspector2);

var _TableInspector2 = __webpack_require__(3256);

var _TableInspector3 = _interopRequireDefault(_TableInspector2);

var _DOMInspector2 = __webpack_require__(3269);

var _DOMInspector3 = _interopRequireDefault(_DOMInspector2);

var _ObjectLabel2 = __webpack_require__(1412);

var _ObjectLabel3 = _interopRequireDefault(_ObjectLabel2);

var _ObjectRootLabel2 = __webpack_require__(1411);

var _ObjectRootLabel3 = _interopRequireDefault(_ObjectRootLabel2);

var _ObjectValue2 = __webpack_require__(651);

var _ObjectValue3 = _interopRequireDefault(_ObjectValue2);

var _ObjectName2 = __webpack_require__(650);

var _ObjectName3 = _interopRequireDefault(_ObjectName2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isDom = __webpack_require__(3271);

var _isDom2 = _interopRequireDefault(_isDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ObjectInspector = _ObjectInspector3.default;
exports.TableInspector = _TableInspector3.default;
exports.DOMInspector = _DOMInspector3.default;
exports.ObjectLabel = _ObjectLabel3.default;
exports.ObjectRootLabel = _ObjectRootLabel3.default;
exports.ObjectValue = _ObjectValue3.default;
exports.ObjectName = _ObjectName3.default;

// Wrapping the inspectors

var Inspector = function Inspector(_ref) {
  var _ref$table = _ref.table,
      table = _ref$table === undefined ? false : _ref$table,
      data = _ref.data,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['table', 'data']);

  if (table) {
    return _react2.default.createElement(_TableInspector3.default, (0, _extends3.default)({ data: data }, rest));
  }

  if ((0, _isDom2.default)(data)) return _react2.default.createElement(_DOMInspector3.default, (0, _extends3.default)({ data: data }, rest));

  return _react2.default.createElement(_ObjectInspector3.default, (0, _extends3.default)({ data: data }, rest));
};

Inspector.propTypes = {
  data: _propTypes2.default.any,
  name: _propTypes2.default.string,
  table: _propTypes2.default.bool
};

exports.Inspector = Inspector;
exports.default = Inspector;

/***/ }),

/***/ 1396:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(274) && !__webpack_require__(526)(function () {
  return Object.defineProperty(__webpack_require__(1397)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 1397:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(357);
var document = __webpack_require__(272).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 1398:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(313);
var toIObject = __webpack_require__(358);
var arrayIndexOf = __webpack_require__(3207)(false);
var IE_PROTO = __webpack_require__(911)('IE_PROTO');

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

/***/ 1399:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(908);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 1400:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(910);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 1401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chromeLight = exports.chromeDark = undefined;

var _chromeDark2 = __webpack_require__(3209);

var _chromeDark3 = _interopRequireDefault(_chromeDark2);

var _chromeLight2 = __webpack_require__(3210);

var _chromeLight3 = _interopRequireDefault(_chromeLight2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.chromeDark = _chromeDark3.default;
exports.chromeLight = _chromeLight3.default;

/***/ }),

/***/ 1402:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(3212), __esModule: true };

/***/ }),

/***/ 1403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(644);
var $export = __webpack_require__(311);
var redefine = __webpack_require__(1404);
var hide = __webpack_require__(356);
var Iterators = __webpack_require__(359);
var $iterCreate = __webpack_require__(3217);
var setToStringTag = __webpack_require__(916);
var getPrototypeOf = __webpack_require__(3220);
var ITERATOR = __webpack_require__(172)('iterator');
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

/***/ 1404:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(356);


/***/ }),

/***/ 1405:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(1398);
var hiddenKeys = __webpack_require__(913).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 1406:
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(646);
var createDesc = __webpack_require__(527);
var toIObject = __webpack_require__(358);
var toPrimitive = __webpack_require__(907);
var has = __webpack_require__(313);
var IE8_DOM_DEFINE = __webpack_require__(1396);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(274) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 1407:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3241);


/***/ }),

/***/ 1408:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(908);
var TAG = __webpack_require__(172)('toStringTag');
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

/***/ 1409:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(1408);
var ITERATOR = __webpack_require__(172)('iterator');
var Iterators = __webpack_require__(359);
module.exports = __webpack_require__(151).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 1410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(188);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(648);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(314);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(315);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(316);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(317);

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__(3250);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TreeNode = __webpack_require__(3251);

var _TreeNode2 = _interopRequireDefault(_TreeNode);

var _pathUtils = __webpack_require__(3254);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_EXPAND':
      {
        var path = action.path;
        var expandedPaths = state.expandedPaths;
        var expanded = !!expandedPaths[path];

        return Object.assign({}, state, {
          expandedPaths: Object.assign({}, state.expandedPaths, (0, _defineProperty3.default)({}, path, !expanded))
        });
      }
    default:
      return state;
  }
};

var ConnectedTreeNode = function (_Component) {
  (0, _inherits3.default)(ConnectedTreeNode, _Component);

  function ConnectedTreeNode(props, context) {
    (0, _classCallCheck3.default)(this, ConnectedTreeNode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConnectedTreeNode.__proto__ || Object.getPrototypeOf(ConnectedTreeNode)).call(this, props));

    _this.state = context.store.storeState;
    return _this;
  }

  (0, _createClass3.default)(ConnectedTreeNode, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !!nextState.expandedPaths[nextProps.path] !== !!this.state.expandedPaths[this.props.path] || nextProps.data !== this.props.data || nextProps.name !== this.props.name;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(path) {
      this.context.store.storeState = reducer(this.context.store.storeState, {
        type: 'TOGGLE_EXPAND',
        path: path
      });
      this.setState(this.context.store.storeState);
    }
  }, {
    key: 'renderChildNodes',
    value: function renderChildNodes(parentData, parentPath) {
      var dataIterator = this.props.dataIterator;
      var depth = this.props.depth;
      var nodeRenderer = this.props.nodeRenderer;


      var childNodes = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dataIterator(parentData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref2 = _step.value;
          var name = _ref2.name,
              data = _ref2.data,
              props = (0, _objectWithoutProperties3.default)(_ref2, ['name', 'data']);

          var key = name;
          var path = parentPath + '.' + key;
          childNodes.push(_react2.default.createElement(ConnectedTreeNode, (0, _extends3.default)({
            name: name,
            data: data,
            depth: depth + 1,
            path: path,
            key: key,
            dataIterator: dataIterator,
            nodeRenderer: nodeRenderer
          }, props)) // props for nodeRenderer
          );
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return childNodes;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          dataIterator = _props.dataIterator,
          path = _props.path,
          depth = _props.depth;


      var nodeHasChildNodes = (0, _pathUtils.hasChildNodes)(data, dataIterator);
      var expandedPaths = this.state.expandedPaths;

      var expanded = !!expandedPaths[path];

      var nodeRenderer = this.props.nodeRenderer;


      return _react2.default.createElement(
        _TreeNode2.default,
        (0, _extends3.default)({
          expanded: expanded,
          onClick: nodeHasChildNodes ? this.handleClick.bind(this, path) : function () {}
          // show arrow anyway even if not expanded and not rendering children
          , shouldShowArrow: nodeHasChildNodes
          // show placeholder only for non root nodes
          , shouldShowPlaceholder: depth > 0
          // Render a node from name and data (or possibly other props like isNonenumerable)
          , nodeRenderer: nodeRenderer
        }, this.props),
        // only render if the node is expanded
        expanded ? this.renderChildNodes(data, path) : undefined
      );
    }
  }]);
  return ConnectedTreeNode;
}(_react.Component);

ConnectedTreeNode.propTypes = {
  name: _propTypes2.default.string,
  data: _propTypes2.default.any,
  dataIterator: _propTypes2.default.func,

  depth: _propTypes2.default.number,
  expanded: _propTypes2.default.bool,

  nodeRenderer: _propTypes2.default.func
};

ConnectedTreeNode.contextTypes = {
  store: _propTypes2.default.any
};

var TreeView = function (_Component2) {
  (0, _inherits3.default)(TreeView, _Component2);

  function TreeView(props) {
    (0, _classCallCheck3.default)(this, TreeView);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (TreeView.__proto__ || Object.getPrototypeOf(TreeView)).call(this, props));

    _this2.store = {
      storeState: {
        expandedPaths: (0, _pathUtils.getExpandedPaths)(props.data, props.dataIterator, props.expandPaths, props.expandLevel)
      }
    };
    return _this2;
  }

  (0, _createClass3.default)(TreeView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.store = {
        storeState: {
          expandedPaths: (0, _pathUtils.getExpandedPaths)(nextProps.data, nextProps.dataIterator, nextProps.expandPaths, nextProps.expandLevel, this.store.storeState.expandedPaths)
        }
      };
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        store: this.store
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          name = _props2.name,
          data = _props2.data,
          dataIterator = _props2.dataIterator;
      var nodeRenderer = this.props.nodeRenderer;


      var rootPath = _pathUtils.DEFAULT_ROOT_PATH;

      return _react2.default.createElement(ConnectedTreeNode, {
        name: name,
        data: data,
        dataIterator: dataIterator,
        depth: 0,
        path: rootPath,
        nodeRenderer: nodeRenderer
      });
    }
  }]);
  return TreeView;
}(_react.Component);

TreeView.defaultProps = {
  expandLevel: 0,
  expandPaths: []
};
TreeView.childContextTypes = {
  store: _propTypes2.default.any
};


TreeView.propTypes = {
  name: _propTypes2.default.string,
  data: _propTypes2.default.any,
  dataIterator: _propTypes2.default.func,

  nodeRenderer: _propTypes2.default.func
};

TreeView.defaultProps = {
  name: undefined
};

exports.default = TreeView;

/***/ }),

/***/ 1411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ObjectName = __webpack_require__(650);

var _ObjectName2 = _interopRequireDefault(_ObjectName);

var _ObjectPreview = __webpack_require__(3255);

var _ObjectPreview2 = _interopRequireDefault(_ObjectPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectRootLabel = function ObjectRootLabel(_ref) {
  var name = _ref.name,
      data = _ref.data;

  if (typeof name === 'string') {
    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_ObjectName2.default, { name: name }),
      _react2.default.createElement(
        'span',
        null,
        ': '
      ),
      _react2.default.createElement(_ObjectPreview2.default, { data: data })
    );
  } else {
    return _react2.default.createElement(_ObjectPreview2.default, { data: data });
  }
};

exports.default = ObjectRootLabel;

/***/ }),

/***/ 1412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ObjectName = __webpack_require__(650);

var _ObjectName2 = _interopRequireDefault(_ObjectName);

var _ObjectValue = __webpack_require__(651);

var _ObjectValue2 = _interopRequireDefault(_ObjectValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * if isNonenumerable is specified, render the name dimmed
 */
var ObjectLabel = function ObjectLabel(_ref) {
  var name = _ref.name,
      data = _ref.data,
      isNonenumerable = _ref.isNonenumerable;

  var object = data;

  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(_ObjectName2.default, { name: name, dimmed: isNonenumerable }),
    _react2.default.createElement(
      'span',
      null,
      ': '
    ),
    _react2.default.createElement(_ObjectValue2.default, { object: object })
  );
};

ObjectLabel.propTypes = {
  /** Non enumerable object property will be dimmed */
  isNonenumerable: _propTypes2.default.bool
};

ObjectLabel.defaultProps = {
  isNonenumerable: false
};

exports.default = ObjectLabel;

/***/ }),

/***/ 1413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TEXT_NODE_MAX_INLINE_CHARS = 80;

var shouldInline = function shouldInline(data) {
  return data.childNodes.length === 0 || data.childNodes.length === 1 && data.childNodes[0].nodeType === Node.TEXT_NODE && data.textContent.length < TEXT_NODE_MAX_INLINE_CHARS;
};

exports.default = shouldInline;

/***/ }),

/***/ 1414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WhitespaceFormatter__ = __webpack_require__(1415);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};






/**
                                             * A short description of the object values.
                                             * Can be used to render tree node in ObjectInspector
                                             * or render objects in TableInspector.
                                             */
const ObjectValue = ({ object, styles }) => {
  const themeStyles = Object(__WEBPACK_IMPORTED_MODULE_2__styles__["b" /* useStyles */])('ObjectValue');

  const mkStyle = key => _extends({}, themeStyles[key], styles);

  switch (typeof object) {
    case 'number':
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: mkStyle('objectValueNumber') }, String(object));
    case 'string':
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: mkStyle('objectValueString') }, '"', !_.isEmpty(object) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__WhitespaceFormatter__["a" /* default */], { sentence: object }), '"');
    case 'boolean':
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: mkStyle('objectValueBoolean') }, String(object)));

    case 'undefined':
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: mkStyle('objectValueUndefined') }, 'undefined');
    case 'object':
      if (object === null) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: mkStyle('objectValueNull') }, 'null');
      }

      if (object instanceof Date) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, object.toString());
      }

      if (object instanceof RegExp) {
        return (
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: mkStyle('objectValueRegExp') }, object.toString()));

      }

      if (Array.isArray(object)) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, `[${object.length}]`);
      }

      if (!object.constructor) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, String('{…}'));
      }

      if (typeof object.constructor.isBuffer === 'function' && object.constructor.isBuffer(object)) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, `Buffer[${object.length}]`);
      }

      if (object.constructor.name === 'Object') {
        let isEmpty = !Object.getOwnPropertyNames(object).length,
        style = { fontStyle: 'italic' };

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: style }, isEmpty ? String('{}') : String('{…}'));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, object.constructor.name);
    case 'function':
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: mkStyle('objectValueFunctionPrefix') }, '\u0192\xA0'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: mkStyle('objectValueFunctionName') },
            object.name, '()')));



    case 'symbol':
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: mkStyle('objectValueSymbol') }, object.toString()));

    default:
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null);}

};

ObjectValue.propTypes = {
  // the object to describe
  object: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any };


/* harmony default export */ __webpack_exports__["a"] = (ObjectValue);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhitespaceFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


const NULL = '\u20E0',
SPACE = '\u00B7',
TAB = '\u2192',
CARRIAGE_RETURN = '\u21B5',
CharMap = {
  0: NULL,
  9: TAB,
  10: CARRIAGE_RETURN,
  13: CARRIAGE_RETURN,
  32: SPACE };let


WhitespaceFormatter = class WhitespaceFormatter extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getMessage(message) {
    if (message === null) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'wf__nl' }, '\n');
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'wf__tk' }, message);
  }

  getParsedMessage(sentence) {
    if (_.isEmpty(sentence)) {
      return [null, null, null];
    }

    // Figure out the start boundary characters
    let startBoundary = '',
    endBoundary = '';

    let i = 0,
    isEmpty = false;

    // Find empty starting boundary character
    while (sentence.charCodeAt(i) in CharMap) {
      startBoundary += CharMap[sentence.charCodeAt(i)];

      // If we could reach the end then the complete string is empty
      if (++i === sentence.length) {
        isEmpty = true;
        break;
      }
    }

    if (isEmpty) {
      return [startBoundary];
    }

    i = sentence.length - 1;

    // Find empty starting boundary character
    while (sentence.charCodeAt(i) in CharMap) {
      endBoundary = CharMap[sentence.charCodeAt(i)] + endBoundary;

      // This should not happen, but just in case it happened
      if (--i === -1) {
        break;
      }
    }

    return [startBoundary, sentence.trim(), endBoundary];
  }

  getWhitespaces(whitespaces) {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null,

        _.map(whitespaces, (whitespace, index) => {
          if (whitespace === SPACE) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { key: index, className: 'wf__sp' }, ' ');
          }

          if (whitespace === TAB) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { key: index, className: 'wf__tb' }, '\t');
          }

          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { key: index, className: 'wf__ch' }, whitespace);
        })));



  }

  render() {
    let line = this.getParsedMessage(String(this.props.sentence));

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'wf__item' },
        line[0] !== null && this.getWhitespaces(line[0]),
        this.getMessage(line[1]),
        line[2] !== null && this.getWhitespaces(line[2])));


  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__object_ObjectName__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__object_ObjectValue__ = __webpack_require__(1414);






/**
                                                 * if isNonenumerable is specified, render the name dimmed
                                                 */
const ObjectLabel = ({ name, data, isNonenumerable = false }) => {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__object_ObjectName__["a" /* default */], { name: name, dimmed: isNonenumerable }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ': '),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__object_ObjectValue__["a" /* default */], { object: data })));


};

ObjectLabel.propTypes = {
  /** Non enumerable object property will be dimmed */
  isNonenumerable: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool };


/* harmony default export */ __webpack_exports__["a"] = (ObjectLabel);

/***/ }),

/***/ 1505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SettingsIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(25);
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

/***/ 151:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(912)('wks');
var uid = __webpack_require__(645);
var Symbol = __webpack_require__(272).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(3202);

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

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(3214);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(3224);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(312);
var IE8_DOM_DEFINE = __webpack_require__(1396);
var toPrimitive = __webpack_require__(907);
var dP = Object.defineProperty;

exports.f = __webpack_require__(274) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(526)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(215);

var _typeof3 = _interopRequireDefault(_typeof2);

var _themes = __webpack_require__(1401);

var themes = _interopRequireWildcard(_themes);

var _base = __webpack_require__(3252);

var _base2 = _interopRequireDefault(_base);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = Object.keys(themes).reduce(function (styles, themeName) {
  styles[themeName] = (0, _base2.default)(themes[themeName]);
  return styles;
}, {});

var createStyles = function createStyles(key, theme) {
  // console.debug(styles, theme, styles[theme])
  if (typeof theme === 'string') {
    return styles[theme][key];
  } else if ((typeof theme === 'undefined' ? 'undefined' : (0, _typeof3.default)(theme)) === 'object') {
    return (0, _base2.default)(theme)[key];
  }
  // Default styles
  return styles['chromeLight'][key];
};

exports.default = createStyles;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(272);
var core = __webpack_require__(151);
var ctx = __webpack_require__(906);
var hide = __webpack_require__(356);
var has = __webpack_require__(313);
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

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(357);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 313:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1402);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(215);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(3234);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(3238);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(215);

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

/***/ 3182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3183);


/***/ }),

/***/ 3183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_console_scss__ = __webpack_require__(3184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_console_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_console_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__init__ = __webpack_require__(3185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_theme_ThemeManager__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_TelemetryHelpers__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_console_Console__ = __webpack_require__(3187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_empty_states_CrashHandler__ = __webpack_require__(197);













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
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_empty_states_CrashHandler__["a" /* default */], { showError: true }), rootEl);
    return;
  }

  Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_empty_states_CrashHandler__["a" /* default */], null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_console_Console__["a" /* default */], { currentTheme: __WEBPACK_IMPORTED_MODULE_4__controllers_theme_ThemeManager__["a" /* default */].getCurrentTheme() })),

  rootEl,
  () => {
    let loadTime = Object(__WEBPACK_IMPORTED_MODULE_5__utils_TelemetryHelpers__["a" /* getWindowLoadTime */])();

    // TODO: Finalize if these are the events we are going to emit and what the final console events going to be
    __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('app_performance_metric', 'console_window_loaded', null, null, { load_time: loadTime });
  });

});

/***/ }),

/***/ 3184:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot_bootAppModels__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot_booted__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boot_bootThemeManager__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boot_bootConfig__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boot_bootConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__boot_bootConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boot_bootConsole__ = __webpack_require__(3186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__boot_bootCrashReporter__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boot_bootLogger__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boot_bootMessaging__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boot_bootSettings__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__boot_bootTelemetry__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__boot_bootWLModels__ = __webpack_require__(559);















// Initialize the global window.pm.* API
window.pm = {};

pm.init = done => {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  // Configure the window
  __WEBPACK_IMPORTED_MODULE_4__boot_bootConfig___default.a.init({ process: 'console', ui: true }),

  // Initialize the pm.logger interface
  __WEBPACK_IMPORTED_MODULE_7__boot_bootLogger__["a" /* default */],

  // Initialize the pm.mediator event bus interface
  __WEBPACK_IMPORTED_MODULE_8__boot_bootMessaging__["a" /* default */],

  // Initialize sentry crash reporter
  __WEBPACK_IMPORTED_MODULE_6__boot_bootCrashReporter__["a" /* default */],

  // Initialize analytics interface
  __WEBPACK_IMPORTED_MODULE_10__boot_bootTelemetry__["a" /* default */],

  // Initialize the pm.settings interface
  __WEBPACK_IMPORTED_MODULE_9__boot_bootSettings__["a" /* default */],

  // Initialize the waterline indexDB models
  __WEBPACK_IMPORTED_MODULE_11__boot_bootWLModels__["a" /* default */],

  // Initialize pm.app and pm.appWindow interfaces
  __WEBPACK_IMPORTED_MODULE_1__boot_bootAppModels__["a" /* default */],

  // Initialize the theme manager
  __WEBPACK_IMPORTED_MODULE_3__boot_bootThemeManager__["a" /* default */],

  // Initialize the console window
  __WEBPACK_IMPORTED_MODULE_5__boot_bootConsole__["a" /* default */]],
  err => {
    Object(__WEBPACK_IMPORTED_MODULE_2__boot_booted__["a" /* default */])(err);
    if (err) {
      pm.logger.error('Error in the app boot sequence', err);
    }

    done && done(err);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (pm);

/***/ }),

/***/ 3186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootShortcuts__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootStore__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_GenericContextMenu__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_UIZoom__ = __webpack_require__(848);








/**
                                                * Boot the console window with stores
                                                * @param {*} cb
                                                */
function bootConsole(cb) {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_2__bootStore__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__bootShortcuts__["a" /* default */]],
  () => {
    _.assign(window.pm, {
      contextMenuManager: new __WEBPACK_IMPORTED_MODULE_3__controllers_GenericContextMenu__["a" /* default */](),
      uiZoom: new __WEBPACK_IMPORTED_MODULE_4__controllers_UIZoom__["a" /* default */]() });


    pm.logger.info('Console~boot - Success');

    return cb && cb();
  });
}

/* harmony default export */ __webpack_exports__["a"] = (bootConsole);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Console; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ConsoleFooter__ = __webpack_require__(3188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ConsoleHeader__ = __webpack_require__(3189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ConsoleList__ = __webpack_require__(3190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_LoadingIndicator__ = __webpack_require__(63);
var _class;







let


Console = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class Console extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      currentTheme: props.currentTheme };


    this.themeChangeHandler = this.themeChangeHandler.bind(this);

    // Setup store references
    this.store = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('ConsoleStore');
  }

  themeChangeHandler(theme) {

    // Changing the state of the component to force re-render the child components
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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'dropdown-root', style: { width: 0, height: 0 } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ConsoleHeader__["a" /* default */], { store: this.store }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ConsoleList__["a" /* default */], { store: this.store }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ConsoleFooter__["a" /* default */], { store: this.store }),

        this.store.isLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_LoadingIndicator__["a" /* default */], { className: 'console-list__loading' })));



  }}) || _class;

/***/ }),

/***/ 3188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleFooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PluralizeHelper__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Inputs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_ErrorIcon__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_SettingsIcon__ = __webpack_require__(1505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_WarningIcon__ = __webpack_require__(372);
var _class;








let


ConsoleFooter = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class ConsoleFooter extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false };


    this.toggleSettings = this.toggleSettings.bind(this);
  }

  toggleSettings() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    let errorCount = _.get(this, 'props.store.errorCount', 0),
    warnCount = _.get(this, 'props.store.warnCount', 0);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-footer' },

        this.state.isExpanded &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-footer__settings' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'settings__item',
              onClick: () => this.props.store.toggleTimestamp() },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Inputs__["a" /* Checkbox */], {
              checked: this.props.store.showTimestamp,
              className: 'settings__checkbox' }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'settings__label' }, 'Show timestamps')),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'settings__item',
              onClick: () => this.props.store.toggleNetworkLogs() },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Inputs__["a" /* Checkbox */], {
              className: 'settings__checkbox',
              checked: this.props.store.hideNetworkLogs }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'settings__label' }, 'Hide network'))),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-footer__meta-settings' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'meta-settings__left' },

            !!errorCount &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'meta console-footer__error' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_ErrorIcon__["a" /* default */], {
                size: 'xs',
                className: 'meta__error-icon' }),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'meta__label' },
                errorCount,

                __WEBPACK_IMPORTED_MODULE_2__utils_PluralizeHelper__["a" /* default */].pluralize({
                  count: errorCount,
                  singular: ' error',
                  plural: ' errors' }))),






            !!warnCount &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'meta console-footer__warning' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_WarningIcon__["a" /* default */], {
                size: 'xs',
                className: 'meta__warning-icon' }),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'meta__label' },
                warnCount,

                __WEBPACK_IMPORTED_MODULE_2__utils_PluralizeHelper__["a" /* default */].pluralize({
                  count: warnCount,
                  singular: ' warning',
                  plural: ' warnings' })))),






          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'meta-settings__right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], {
                type: 'icon',
                className: 'settings-icon',
                onClick: this.toggleSettings,
                tooltip: 'Console settings' },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_SettingsIcon__["a" /* default */], {
                size: 'xs',
                className: this.state.isExpanded && 'settings-icon--active' }))))));






  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Inputs__ = __webpack_require__(54);
var _class;





let


ConsoleHeader = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class ConsoleHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    // Set a local state for searchQuery to debounce the search selection
    this.state = {
      searchQuery: '' };


    this.handleSelectFilterLevel = this.handleSelectFilterLevel.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchCancel = this.handleSearchCancel.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSelectFilterLevel(level, e) {
    e && e.stopPropagation();
    this.props.store.selectFilterLevel(level);
  }

  handleSearchChange(query) {
    this.setState({ searchQuery: query });

    this.props.store.setIsSearching(true);
    this.props.store.setSearchQueryDebounced(query);
  }

  handleSearchCancel() {
    this.props.store.setSearchQuery('');
  }

  handleClear() {
    this.props.store.clearEvents();
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-header__left' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'search-input' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Inputs__["b" /* Input */], {
              inputStyle: 'search',
              type: 'text',
              placeholder: 'Search messages',
              onChange: this.handleSearchChange,
              onCancel: this.handleSearchCancel,
              query: this.state.searchQuery,
              className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ 'is-highlighted': this.state.searchQuery }) })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'filter' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["a" /* Dropdown */], null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["b" /* DropdownButton */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], { type: 'text', className: 'filter-btn' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Filter messages'))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["c" /* DropdownMenu */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["d" /* MenuItem */], {
                    key: 'log',
                    refKey: 'log',
                    className: 'filter__menu-item' },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                      onClick: this.handleSelectFilterLevel.bind(null, 'log'),
                      className: 'menu-item__wrapper' },

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Inputs__["a" /* Checkbox */], {
                      checked: _.includes(this.props.store.filterLevels, 'log'),
                      className: 'menu-item__checkbox' }),

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'menu-item__label' }, 'Log'))),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["d" /* MenuItem */], {
                    key: 'info',
                    refKey: 'info',
                    className: 'filter__menu-item' },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                      onClick: this.handleSelectFilterLevel.bind(null, 'info'),
                      className: 'menu-item__wrapper' },

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Inputs__["a" /* Checkbox */], {
                      checked: _.includes(this.props.store.filterLevels, 'info'),
                      className: 'menu-item__checkbox' }),

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'menu-item__label' }, 'Info'))),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["d" /* MenuItem */], {
                    key: 'warn',
                    refKey: 'warn',
                    className: 'filter__menu-item' },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                      onClick: this.handleSelectFilterLevel.bind(null, 'warn'),
                      className: 'menu-item__wrapper' },

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Inputs__["a" /* Checkbox */], {
                      checked: _.includes(this.props.store.filterLevels, 'warn'),
                      className: 'menu-item__checkbox' }),

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'menu-item__label' }, 'Warning'))),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["d" /* MenuItem */], {
                    key: 'error',
                    refKey: 'error',
                    className: 'filter__menu-item' },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                      onClick: this.handleSelectFilterLevel.bind(null, 'error'),
                      className: 'menu-item__wrapper' },

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Inputs__["a" /* Checkbox */], {
                      checked: _.includes(this.props.store.filterLevels, 'error'),
                      className: 'menu-item__checkbox' }),

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'menu-item__label' }, 'Error'))))))),







        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-header__right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], {
              type: 'secondary',
              className: 'clear-btn',
              size: 'small',
              onClick: this.handleClear,
              disabled: !this.props.store.hasLogs }, 'Clear'))));






  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_window__ = __webpack_require__(3191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_virtualized_auto_sizer__ = __webpack_require__(3197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ConsoleListItem__ = __webpack_require__(3198);
var _class;









const MIN_ROW_HEIGHT = 24;let


ConsoleList = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["b" /* observer */])(_class = class ConsoleList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.getListItem = this.getListItem.bind(this);
    this.getItemSize = this.getItemSize.bind(this);
    this.handleClearCachedHeight = this.handleClearCachedHeight.bind(this);
    this.autoScrollToBottom = this.autoScrollToBottom.bind(this);
    this.onItemsRendered = this.onItemsRendered.bind(this);
    this.callOnScroll = this.callOnScroll.bind(this);
    this.observeSizeChange = this.observeSizeChange.bind(this);
    this.unobserveSizeChange = this.unobserveSizeChange.bind(this);

    this.listRefs = {};
    this.autoScroll = true;

    // listen to changes in number of Console events
    //
    // fireImmediately is used for the first scroll to bottom when Console is opened.
    //
    // requestIdleCallback is used because mounting and rendering of new Console events is of higher priority and must be done before scrolling.
    // Also, this helps in waiting for the initial loading and mounting, when Console is booted, before the initial scroll to bottom.
    this.reactionDisposer = Object(__WEBPACK_IMPORTED_MODULE_6_mobx__["q" /* reaction */])(() => this.props.store.visibleEvents, () => {
      requestIdleCallback(this.autoScrollToBottom.bind(this));
    },
    {
      fireImmediately: true });

  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target.offsetHeight === 0) {
          return;
        }

        this.handleClearCachedHeight(_.get(entry, 'target.dataset.index'));
      }
    });
  }

  componentWillUnmount() {
    this.reactionDisposer && this.reactionDisposer();
  }

  observeSizeChange(node) {
    this.resizeObserver && this.resizeObserver.observe(node);
  }

  unobserveSizeChange(node) {
    this.resizeObserver && this.resizeObserver.unobserve(node);
  }

  // listen to user scroll for enabling autoscroll in Console.
  onItemsRendered({ visibleStopIndex }) {

    // visible stop index is the last list item visible in the virtualized list
    //
    // if the last list item is visible, then autoscroll gets enabled
    if (visibleStopIndex >= this.props.store.eventCount - 2) {
      this.autoScroll = true;
    }
  }

  // listen to backward user scroll for disabling autoscroll in Console.
  callOnScroll({ scrollDirection }) {

    // if the user scrolls in upward direction, which is 'backward' in react-window
    // then autoscroll should be disabled
    if (scrollDirection === 'backward') {
      this.autoScroll = false;
    }
  }

  autoScrollToBottom() {
    if (!this.autoScroll) {
      return;
    }

    !_.isEmpty(this.listRef) && this.listRef.scrollToItem(this.props.store.eventCount);
  }

  getItemSize(index) {
    let currentEvent = _.get(this.props, ['store', 'visibleEvents', index]),
    currentEventId = currentEvent && currentEvent.id,
    currentNode = currentEventId && Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.listRefs[currentEventId]);

    return currentNode && currentNode.offsetHeight || MIN_ROW_HEIGHT;
  }

  getListItem(data) {
    let consoleEvent = _.get(this.props, ['store', 'visibleEvents', data.index]),
    expandSet = _.get(this.props, 'store.expandSet'),
    toggleExpanded = () => {
      this.props.store.toggleExpanded(consoleEvent.id);
    };

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-list-item', style: data.style },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ConsoleListItem__["a" /* default */], {
          key: consoleEvent.id,
          index: data.index,
          event: consoleEvent,
          showTimestamp: this.props.store.showTimestamp,
          onHeightChange: this.handleClearCachedHeight,
          ref: ref => this.listRefs[consoleEvent.id] = ref,
          isExpanded: expandSet.has(consoleEvent.id),
          toggleExpanded: toggleExpanded,
          observeSizeChange: this.observeSizeChange,
          unobserveSizeChange: this.unobserveSizeChange })));



  }

  handleClearCachedHeight(index) {
    this.listRef.resetAfterIndex(index);
  }

  render() {
    const lister = data => {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* Observer */], null,
          this.getListItem.bind(this, data)));


    },
    sizer = ({ height, width }) => {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* Observer */], null,
          () =>
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_window__["a" /* VariableSizeList */], {
              height: height,
              itemCount: this.props.store.eventCount,
              itemSize: this.getItemSize,
              width: width,
              ref: ref => this.listRef = ref,
              onItemsRendered: this.onItemsRendered,
              onScroll: this.callOnScroll },

            lister)));




    };

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()('console-list', { 'is-disabled': this.props.store.isLoading }) },

        this.props.store.searchQuery && !this.props.store.hasLogs ?
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-list__empty' }, 'No results found for "', this.props.store.searchQuery, '"') :

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_virtualized_auto_sizer__["a" /* default */], null, sizer)));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VariableSizeGrid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariableSizeList; });
/* unused harmony export FixedSizeGrid */
/* unused harmony export FixedSizeList */
/* unused harmony export areEqual */
/* unused harmony export shouldComponentUpdate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(3192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(3193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__ = __webpack_require__(3194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_memoize_one__ = __webpack_require__(3195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(3196);







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

/***/ 3192:
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

/***/ 3193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inheritsLoose;
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ 3194:
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

/***/ 3195:
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

/***/ 3196:
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

/***/ }),

/***/ 3197:
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),

/***/ 3198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_ErrorIcon__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_WarningIcon__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_RedirectIcon__ = __webpack_require__(3199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_InformationIcon__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_CodeIcon__ = __webpack_require__(3200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ConsoleListItem_ConsoleMessageItem__ = __webpack_require__(3201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ConsoleListItem_ConsoleNetworkItem__ = __webpack_require__(3276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_ConsoleEventSeverity__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__base_Icons_LockedIcon__ = __webpack_require__(660);
var _class;















let


ConsoleListItem = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["b" /* observer */])(_class = class ConsoleListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    // If showTimestamp modifier has changed then update the component
    if (this.props.showTimestamp !== nextProps.showTimestamp) {
      return true;
    }

    // If expanded state has not changed do not update
    if (this.props.isExpanded !== nextProps.isExpanded) {
      return true;
    }

    return false;
  }

  componentDidMount() {
    this.selfNode = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);

    // Starts observing element
    this.props.observeSizeChange && this.props.observeSizeChange(this.selfNode);
  }

  componentWillUnmount() {
    this.props.observeSizeChange && this.props.unobserveSizeChange(this.selfNode);
  }

  getLeftIcon(severity) {
    if (severity === __WEBPACK_IMPORTED_MODULE_12__constants_ConsoleEventSeverity__["CONSOLE_LEVEL_ERROR"]) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_ErrorIcon__["a" /* default */], {
          size: 'xs',
          title: 'Error',
          className: 'c-li__icon c-li__icon--error' }));


    }

    if (severity === __WEBPACK_IMPORTED_MODULE_12__constants_ConsoleEventSeverity__["CONSOLE_LEVEL_WARN"]) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_WarningIcon__["a" /* default */], {
          size: 'xs',
          title: 'Warning',
          className: 'c-li__icon c-li__icon--warning' }));


    }

    if (severity === __WEBPACK_IMPORTED_MODULE_12__constants_ConsoleEventSeverity__["CONSOLE_LEVEL_INFO"]) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_InformationIcon__["a" /* default */], {
          size: 'xs',
          title: 'Info',
          className: 'c-li__icon c-li__icon--info' }));


    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { title: 'Log', className: 'c-li__icon empty' }, '\xA0');
  }

  getRightIcon(details) {
    if (details.redirect) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_RedirectIcon__["a" /* default */], {
          size: 'xs',
          title: 'This request was triggered on redirect',
          className: 'c-li__icon c-li__redirect-icon' }));


    }

    if (details.indirect === 'request') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_CodeIcon__["a" /* default */], {
          size: 'xs',
          title: 'This request was triggered by a function in your script',
          className: 'c-li__icon c-li__code-icon' }));


    }

    if (details.indirect === 'auth') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_Icons_LockedIcon__["a" /* default */], {
          size: 'xs',
          title: 'This request was triggered by an authorization helper',
          className: 'c-li__icon c-li__lock-icon' }));


    }
  }

  getDetails(event) {
    if (event.type === 'log') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'c-li__msg-wrap' },

          _.map(event.details, (message, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ConsoleListItem_ConsoleMessageItem__["a" /* default */], {
                message: message,
                key: index }));


          })));



    }

    if (event.type === 'network') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__ConsoleListItem_ConsoleNetworkItem__["a" /* default */], {
          data: event.details,
          severity: event.severity,
          isExpanded: this.props.isExpanded,
          toggleExpanded: this.props.toggleExpanded }));


    }

    if (event.type === 'exception') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ConsoleListItem_ConsoleMessageItem__["a" /* default */], {
          message: `${_.get(event, 'details.name', 'Error')}: ${_.get(event, 'details.message', '')}` }));


    }
  }

  render() {
    const severity = _.get(this.props, 'event.severity'),
    listItemClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('c-flex', {
      'is-error': severity === __WEBPACK_IMPORTED_MODULE_12__constants_ConsoleEventSeverity__["CONSOLE_LEVEL_ERROR"],
      'is-warning': severity === __WEBPACK_IMPORTED_MODULE_12__constants_ConsoleEventSeverity__["CONSOLE_LEVEL_WARN"],
      'is-log': severity === __WEBPACK_IMPORTED_MODULE_12__constants_ConsoleEventSeverity__["CONSOLE_LEVEL_LOG"],
      'is-info': severity === __WEBPACK_IMPORTED_MODULE_12__constants_ConsoleEventSeverity__["CONSOLE_LEVEL_INFO"],
      'is-indirect': !!(_.get(this.props, 'event.details.redirect') || _.get(this.props, 'event.details.indirect')) });


    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: listItemClass, 'data-index': this.props.index },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'c-flex__left' },

          this.getLeftIcon(severity),


          this.props.showTimestamp &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'c-li__timestamp' },
            __WEBPACK_IMPORTED_MODULE_4_moment___default()(this.props.event.timestamp).format('HH:mm:ss.SSS')),



          this.getDetails(this.props.event)),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'c-flex__right' },

          this.getRightIcon(_.get(this.props, 'event.details', {})))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RedirectIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(25);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M11 2H16V7H15V3.70713L8.41424 10.2929C7.63319 11.0739 6.36686 11.0739 5.58581 10.2929L0.146469 4.85355L0.853577 4.14645L6.29292 9.58579C6.68344 9.97631 7.31661 9.97631 7.70713 9.58579L14.2929 3H11V2Z', fill: '#7E7E7E' }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M0 13H16V14H0V13Z', fill: '#7E7E7E' }));



function RedirectIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 3200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CodeIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(25);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '14', viewBox: '0 0 16 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M6.47431 13.1581L10.4743 1.15812L9.52563 0.841888L5.52563 12.8419L6.47431 13.1581Z', fill: '#A9A9A9' }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M4.6464 2.64645L0.292847 7L4.6464 11.3536L5.35351 10.6465L1.70706 7L5.35351 3.35356L4.6464 2.64645Z', fill: '#A9A9A9' }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M11.3536 2.64645L15.7071 7L11.3536 11.3536L10.6465 10.6465L14.2929 7L10.6465 3.35356L11.3536 2.64645Z', fill: '#A9A9A9' }));



function CodeIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 3201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleMessageItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_inspector__ = __webpack_require__(1395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_inspector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_inspector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ObjectInspector_styles__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ObjectInspector_object_ObjectRootLabel__ = __webpack_require__(3274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ObjectInspector_ObjectLabel__ = __webpack_require__(1416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__WhitespaceFormatter__ = __webpack_require__(1415);







let

ConsoleMessageItem = class ConsoleMessageItem extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  getMessage(message) {
    if (message === '') {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { key: 0, className: 'c-li__empty' });
    }

    let splitMessage = String(message).split('\n');

    splitMessage[0] = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { key: 'spch-0', className: 'c-li__msg-str' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__WhitespaceFormatter__["a" /* default */], { key: 'wf-0', sentence: splitMessage[0] }));

    for (let i = 1; i < splitMessage.length; i++) {
      splitMessage[i] =
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, { key: i },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { key: `spfl-${i}`, className: 'c-li__r-fill' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { key: `spch-${i}`, className: 'c-li__msg-str' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__WhitespaceFormatter__["a" /* default */], { key: `wf-${i}`, sentence: splitMessage[i] })));


    }

    return splitMessage;
  }

  getTheme() {
    return _.defaults({ TREENODE_PADDING_LEFT: 15 }, __WEBPACK_IMPORTED_MODULE_2__ObjectInspector_styles__["a" /* baseStyles */]);
  }

  nodeRenderer({ depth, name, data, isNonenumerable }) {
    if (depth === 0) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ObjectInspector_object_ObjectRootLabel__["a" /* default */], { name: name, data: data });
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ObjectInspector_ObjectLabel__["a" /* default */], { name: name, data: data, isNonenumerable: isNonenumerable });
  }

  render() {
    if (_.isObject(this.props.message)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'c-li__msg-obj' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_inspector___default.a, {
            data: this.props.message,
            theme: this.getTheme(),
            nodeRenderer: this.nodeRenderer,
            sortObjectKeys: false })));



    }

    return this.getMessage(this.props.message);
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(3203), __esModule: true };

/***/ }),

/***/ 3203:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3204);
module.exports = __webpack_require__(151).Object.assign;


/***/ }),

/***/ 3204:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(311);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(3206) });


/***/ }),

/***/ 3205:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 3206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(274);
var getKeys = __webpack_require__(643);
var gOPS = __webpack_require__(914);
var pIE = __webpack_require__(646);
var toObject = __webpack_require__(647);
var IObject = __webpack_require__(1399);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(526)(function () {
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
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 3207:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(358);
var toLength = __webpack_require__(1400);
var toAbsoluteIndex = __webpack_require__(3208);
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

/***/ 3208:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(910);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 3209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var theme = {
  BASE_FONT_FAMILY: 'Menlo, monospace',
  BASE_FONT_SIZE: '11px',
  BASE_LINE_HEIGHT: '14px',

  BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
  BASE_COLOR: 'rgb(213, 213, 213)',

  OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
  OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
  OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
  OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
  OBJECT_VALUE_FUNCTION_KEYWORD_COLOR: 'rgb(242, 85, 217)',

  HTML_TAG_COLOR: 'rgb(93, 176, 215)',
  HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
  HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',

  ARROW_COLOR: 'rgb(145, 145, 145)',
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,

  TREENODE_FONT_FAMILY: 'Menlo, monospace',
  TREENODE_FONT_SIZE: '11px',
  TREENODE_LINE_HEIGHT: '14px',
  TREENODE_PADDING_LEFT: 12,

  TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
  TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
  TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
  TABLE_SORT_ICON_COLOR: 'black', //'rgb(48, 57, 66)',
  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
};

exports.default = theme;

/***/ }),

/***/ 3210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var theme = {
  BASE_FONT_FAMILY: 'Menlo, monospace',
  BASE_FONT_SIZE: '11px',
  BASE_LINE_HEIGHT: '14px',

  BASE_BACKGROUND_COLOR: 'white',
  BASE_COLOR: 'black',

  OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
  OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
  OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
  OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
  OBJECT_VALUE_FUNCTION_KEYWORD_COLOR: 'rgb(170, 13, 145)',

  HTML_TAG_COLOR: 'rgb(168, 148, 166)',
  HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
  HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',

  ARROW_COLOR: '#6e6e6e',
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,

  TREENODE_FONT_FAMILY: 'Menlo, monospace',
  TREENODE_FONT_SIZE: '11px',
  TREENODE_LINE_HEIGHT: '14px',
  TREENODE_PADDING_LEFT: 12,

  TABLE_BORDER_COLOR: '#aaa',
  TABLE_TH_BACKGROUND_COLOR: '#eee',
  TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
  TABLE_SORT_ICON_COLOR: '#6e6e6e',
  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
};

exports.default = theme;

/***/ }),

/***/ 3211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(188);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(648);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(314);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(315);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(316);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(317);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(1407);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(3243);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __webpack_require__(215);

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TreeView = __webpack_require__(1410);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _ObjectRootLabel = __webpack_require__(1411);

var _ObjectRootLabel2 = _interopRequireDefault(_ObjectRootLabel);

var _ObjectLabel = __webpack_require__(1412);

var _ObjectLabel2 = _interopRequireDefault(_ObjectLabel);

var _ThemeProvider = __webpack_require__(920);

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createIterator = function createIterator(showNonenumerable, sortObjectKeys) {
  var objectIterator = /*#__PURE__*/_regenerator2.default.mark(function objectIterator(data) {
    var shouldIterate, dataIsArray, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, _entry, k, v, keys, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, propertyName, propertyValue, _propertyValue;

    return _regenerator2.default.wrap(function objectIterator$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            shouldIterate = (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object' && data !== null || typeof data === 'function';

            if (shouldIterate) {
              _context.next = 3;
              break;
            }

            return _context.abrupt('return');

          case 3:
            dataIsArray = Array.isArray(data);

            // iterable objects (except arrays)

            if (!(!dataIsArray && data[Symbol.iterator])) {
              _context.next = 41;
              break;
            }

            i = 0;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 9;
            _iterator = data[Symbol.iterator]();

          case 11:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 25;
              break;
            }

            entry = _step.value;

            if (!(Array.isArray(entry) && entry.length === 2)) {
              _context.next = 19;
              break;
            }

            _entry = (0, _slicedToArray3.default)(entry, 2), k = _entry[0], v = _entry[1];
            _context.next = 17;
            return {
              name: k,
              data: v
            };

          case 17:
            _context.next = 21;
            break;

          case 19:
            _context.next = 21;
            return {
              name: i.toString(),
              data: entry
            };

          case 21:
            i++;

          case 22:
            _iteratorNormalCompletion = true;
            _context.next = 11;
            break;

          case 25:
            _context.next = 31;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context['catch'](9);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 31:
            _context.prev = 31;
            _context.prev = 32;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 34:
            _context.prev = 34;

            if (!_didIteratorError) {
              _context.next = 37;
              break;
            }

            throw _iteratorError;

          case 37:
            return _context.finish(34);

          case 38:
            return _context.finish(31);

          case 39:
            _context.next = 82;
            break;

          case 41:
            keys = Object.getOwnPropertyNames(data);

            if (sortObjectKeys === true && !dataIsArray) {
              // Array keys should not be sorted in alphabetical order
              keys.sort();
            } else if (typeof sortObjectKeys === 'function') {
              keys.sort(sortObjectKeys);
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 46;
            _iterator2 = keys[Symbol.iterator]();

          case 48:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 65;
              break;
            }

            propertyName = _step2.value;

            if (!data.propertyIsEnumerable(propertyName)) {
              _context.next = 56;
              break;
            }

            propertyValue = data[propertyName];
            _context.next = 54;
            return {
              name: propertyName || '""',
              data: propertyValue
            };

          case 54:
            _context.next = 62;
            break;

          case 56:
            if (!showNonenumerable) {
              _context.next = 62;
              break;
            }

            // To work around the error (happens some time when propertyName === 'caller' || propertyName === 'arguments')
            // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context
            // http://stackoverflow.com/questions/31921189/caller-and-arguments-are-restricted-function-properties-and-cannot-be-access
            _propertyValue = void 0;

            try {
              _propertyValue = data[propertyName];
            } catch (e) {
              // console.warn(e)
            }

            if (!(_propertyValue !== undefined)) {
              _context.next = 62;
              break;
            }

            _context.next = 62;
            return {
              name: propertyName,
              data: _propertyValue,
              isNonenumerable: true
            };

          case 62:
            _iteratorNormalCompletion2 = true;
            _context.next = 48;
            break;

          case 65:
            _context.next = 71;
            break;

          case 67:
            _context.prev = 67;
            _context.t1 = _context['catch'](46);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 71:
            _context.prev = 71;
            _context.prev = 72;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 74:
            _context.prev = 74;

            if (!_didIteratorError2) {
              _context.next = 77;
              break;
            }

            throw _iteratorError2;

          case 77:
            return _context.finish(74);

          case 78:
            return _context.finish(71);

          case 79:
            if (!(showNonenumerable && data !== Object.prototype /* already added */)) {
              _context.next = 82;
              break;
            }

            _context.next = 82;
            return {
              name: '__proto__',
              data: Object.getPrototypeOf(data),
              isNonenumerable: true
            };

          case 82:
          case 'end':
            return _context.stop();
        }
      }
    }, objectIterator, this, [[9, 27, 31, 39], [32,, 34, 38], [46, 67, 71, 79], [72,, 74, 78]]);
  });

  return objectIterator;
};

var defaultNodeRenderer = function defaultNodeRenderer(_ref) {
  var depth = _ref.depth,
      name = _ref.name,
      data = _ref.data,
      isNonenumerable = _ref.isNonenumerable;
  return depth === 0 ? _react2.default.createElement(_ObjectRootLabel2.default, { name: name, data: data }) : _react2.default.createElement(_ObjectLabel2.default, { name: name, data: data, isNonenumerable: isNonenumerable });
};

/**
 * Tree-view for objects
 */

var ObjectInspector = function (_Component) {
  (0, _inherits3.default)(ObjectInspector, _Component);

  function ObjectInspector() {
    (0, _classCallCheck3.default)(this, ObjectInspector);
    return (0, _possibleConstructorReturn3.default)(this, (ObjectInspector.__proto__ || Object.getPrototypeOf(ObjectInspector)).apply(this, arguments));
  }

  (0, _createClass3.default)(ObjectInspector, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showNonenumerable = _props.showNonenumerable,
          sortObjectKeys = _props.sortObjectKeys,
          nodeRenderer = _props.nodeRenderer,
          rest = (0, _objectWithoutProperties3.default)(_props, ['showNonenumerable', 'sortObjectKeys', 'nodeRenderer']);

      var dataIterator = createIterator(showNonenumerable, sortObjectKeys);

      var renderer = nodeRenderer ? nodeRenderer : defaultNodeRenderer;

      return _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: this.props.theme },
        _react2.default.createElement(_TreeView2.default, (0, _extends3.default)({ nodeRenderer: renderer, dataIterator: dataIterator }, rest))
      );
    }
  }]);
  return ObjectInspector;
}(_react.Component);

ObjectInspector.defaultProps = {
  showNonenumerable: false,

  theme: 'chromeLight'
};
ObjectInspector.propTypes = {
  /** An integer specifying to which level the tree should be initially expanded. */
  expandLevel: _propTypes2.default.number,
  /** An array containing all the paths that should be expanded when the component is initialized, or a string of just one path */
  expandPaths: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),

  name: _propTypes2.default.string,
  /** Not required prop because we also allow undefined value */
  data: _propTypes2.default.any,

  /** A known theme or theme object */
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),

  /** Show non-enumerable properties */
  showNonenumerable: _propTypes2.default.bool,
  /** Sort object keys with optional compare function. */
  sortObjectKeys: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),

  /** Provide a custom nodeRenderer */
  nodeRenderer: _propTypes2.default.func
};
exports.default = ObjectInspector;

/***/ }),

/***/ 3212:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3213);
var $Object = __webpack_require__(151).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 3213:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(311);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(274), 'Object', { defineProperty: __webpack_require__(273).f });


/***/ }),

/***/ 3214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(3215), __esModule: true };

/***/ }),

/***/ 3215:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(649);
__webpack_require__(917);
module.exports = __webpack_require__(918).f('iterator');


/***/ }),

/***/ 3216:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(910);
var defined = __webpack_require__(909);
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

/***/ 3217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(915);
var descriptor = __webpack_require__(527);
var setToStringTag = __webpack_require__(916);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(356)(IteratorPrototype, __webpack_require__(172)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 3218:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(273);
var anObject = __webpack_require__(312);
var getKeys = __webpack_require__(643);

module.exports = __webpack_require__(274) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 3219:
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(272).document;
module.exports = document && document.documentElement;


/***/ }),

/***/ 3220:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(313);
var toObject = __webpack_require__(647);
var IE_PROTO = __webpack_require__(911)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 3221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(3222);
var step = __webpack_require__(3223);
var Iterators = __webpack_require__(359);
var toIObject = __webpack_require__(358);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(1403)(Array, 'Array', function (iterated, kind) {
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

/***/ 3222:
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 3223:
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 3224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(3225), __esModule: true };

/***/ }),

/***/ 3225:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3226);
__webpack_require__(3231);
__webpack_require__(3232);
__webpack_require__(3233);
module.exports = __webpack_require__(151).Symbol;


/***/ }),

/***/ 3226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(272);
var has = __webpack_require__(313);
var DESCRIPTORS = __webpack_require__(274);
var $export = __webpack_require__(311);
var redefine = __webpack_require__(1404);
var META = __webpack_require__(3227).KEY;
var $fails = __webpack_require__(526);
var shared = __webpack_require__(912);
var setToStringTag = __webpack_require__(916);
var uid = __webpack_require__(645);
var wks = __webpack_require__(172);
var wksExt = __webpack_require__(918);
var wksDefine = __webpack_require__(919);
var enumKeys = __webpack_require__(3228);
var isArray = __webpack_require__(3229);
var anObject = __webpack_require__(312);
var isObject = __webpack_require__(357);
var toObject = __webpack_require__(647);
var toIObject = __webpack_require__(358);
var toPrimitive = __webpack_require__(907);
var createDesc = __webpack_require__(527);
var _create = __webpack_require__(915);
var gOPNExt = __webpack_require__(3230);
var $GOPD = __webpack_require__(1406);
var $GOPS = __webpack_require__(914);
var $DP = __webpack_require__(273);
var $keys = __webpack_require__(643);
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
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
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
  __webpack_require__(1405).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(646).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(644)) {
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

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(356)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 3227:
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(645)('meta');
var isObject = __webpack_require__(357);
var has = __webpack_require__(313);
var setDesc = __webpack_require__(273).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(526)(function () {
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

/***/ 3228:
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(643);
var gOPS = __webpack_require__(914);
var pIE = __webpack_require__(646);
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

/***/ 3229:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(908);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 3230:
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(358);
var gOPN = __webpack_require__(1405).f;
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

/***/ 3231:
/***/ (function(module, exports) {



/***/ }),

/***/ 3232:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(919)('asyncIterator');


/***/ }),

/***/ 3233:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(919)('observable');


/***/ }),

/***/ 3234:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(3235), __esModule: true };

/***/ }),

/***/ 3235:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3236);
module.exports = __webpack_require__(151).Object.setPrototypeOf;


/***/ }),

/***/ 3236:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(311);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(3237).set });


/***/ }),

/***/ 3237:
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(357);
var anObject = __webpack_require__(312);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(906)(Function.call, __webpack_require__(1406).f(Object.prototype, '__proto__').set, 2);
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

/***/ 3238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(3239), __esModule: true };

/***/ }),

/***/ 3239:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3240);
var $Object = __webpack_require__(151).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ 3240:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(311);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(915) });


/***/ }),

/***/ 3241:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(3242);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 3242:
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ 3243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(3244);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(3247);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ 3244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(3245), __esModule: true };

/***/ }),

/***/ 3245:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(917);
__webpack_require__(649);
module.exports = __webpack_require__(3246);


/***/ }),

/***/ 3246:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(1408);
var ITERATOR = __webpack_require__(172)('iterator');
var Iterators = __webpack_require__(359);
module.exports = __webpack_require__(151).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ 3247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(3248), __esModule: true };

/***/ }),

/***/ 3248:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(917);
__webpack_require__(649);
module.exports = __webpack_require__(3249);


/***/ }),

/***/ 3249:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(312);
var get = __webpack_require__(1409);
module.exports = __webpack_require__(151).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 3250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1402);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 3251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(314);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(315);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(316);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(317);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(188);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(275);

var _createStyles2 = _interopRequireDefault(_createStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Arrow = function Arrow(_ref) {
  var expanded = _ref.expanded,
      styles = _ref.styles;
  return _react2.default.createElement(
    'span',
    { style: (0, _extends3.default)({}, styles.base, expanded ? styles.expanded : styles.collapsed) },
    '\u25B6'
  );
};

var TreeNode = function (_Component) {
  (0, _inherits3.default)(TreeNode, _Component);

  function TreeNode() {
    (0, _classCallCheck3.default)(this, TreeNode);
    return (0, _possibleConstructorReturn3.default)(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).apply(this, arguments));
  }

  (0, _createClass3.default)(TreeNode, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          expanded = _props.expanded,
          onClick = _props.onClick,
          children = _props.children,
          nodeRenderer = _props.nodeRenderer,
          title = _props.title,
          shouldShowArrow = _props.shouldShowArrow,
          shouldShowPlaceholder = _props.shouldShowPlaceholder;
      var theme = this.context.theme;

      var styles = (0, _createStyles2.default)('TreeNode', theme);

      var renderedNode = (0, _react.createElement)(nodeRenderer, this.props);
      var childNodes = expanded ? children : undefined;

      return _react2.default.createElement(
        'li',
        { 'aria-expanded': expanded, role: 'treeitem', style: styles.treeNodeBase, title: title },
        _react2.default.createElement(
          'div',
          { style: styles.treeNodePreviewContainer, onClick: onClick },
          shouldShowArrow || _react.Children.count(children) > 0 ? _react2.default.createElement(Arrow, { expanded: expanded, styles: styles.treeNodeArrow }) : shouldShowPlaceholder && _react2.default.createElement(
            'span',
            { style: styles.treeNodePlaceholder },
            '\xA0'
          ),
          renderedNode
        ),
        _react2.default.createElement(
          'ol',
          { role: 'group', style: styles.treeNodeChildNodesContainer },
          childNodes
        )
      );
    }
  }]);
  return TreeNode;
}(_react.Component);

TreeNode.propTypes = {
  name: _propTypes2.default.string,
  data: _propTypes2.default.any,

  expanded: _propTypes2.default.bool,
  shouldShowArrow: _propTypes2.default.bool,
  shouldShowPlaceholder: _propTypes2.default.bool,

  nodeRenderer: _propTypes2.default.func,

  onClick: _propTypes2.default.func
};

TreeNode.defaultProps = {
  name: undefined,
  data: undefined,
  expanded: true,

  nodeRenderer: function nodeRenderer(_ref2) {
    var name = _ref2.name;
    return _react2.default.createElement(
      'span',
      null,
      name
    );
  },

  onClick: function onClick() {},

  shouldShowArrow: false,
  shouldShowPlaceholder: true
};

TreeNode.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

exports.default = TreeNode;

/***/ }),

/***/ 3252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(188);

var _extends3 = _interopRequireDefault(_extends2);

var _unselectable = __webpack_require__(3253);

var _unselectable2 = _interopRequireDefault(_unselectable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (theme) {
  return {
    DOMNodePreview: {
      htmlOpenTag: {
        base: {
          color: theme.HTML_TAG_COLOR
        },
        tagName: {
          color: theme.HTML_TAGNAME_COLOR,
          textTransform: theme.HTML_TAGNAME_TEXT_TRANSFORM
        },
        htmlAttributeName: {
          color: theme.HTML_ATTRIBUTE_NAME_COLOR
        },
        htmlAttributeValue: {
          color: theme.HTML_ATTRIBUTE_VALUE_COLOR
        }
      },
      htmlCloseTag: {
        base: {
          color: theme.HTML_TAG_COLOR
        },
        offsetLeft: {
          /* hack: offset placeholder */
          marginLeft: -theme.TREENODE_PADDING_LEFT
        },
        tagName: {
          color: theme.HTML_TAGNAME_COLOR,
          textTransform: theme.HTML_TAGNAME_TEXT_TRANSFORM
        }
      },
      htmlComment: {
        color: theme.HTML_COMMENT_COLOR
      },
      htmlDoctype: {
        color: theme.HTML_DOCTYPE_COLOR
      }
    },

    ObjectName: {
      base: {
        color: theme.OBJECT_NAME_COLOR
      },
      dimmed: {
        opacity: 0.6
      }
    },

    ObjectValue: {
      objectValueNull: {
        color: theme.OBJECT_VALUE_NULL_COLOR
      },
      objectValueUndefined: {
        color: theme.OBJECT_VALUE_UNDEFINED_COLOR
      },
      objectValueRegExp: {
        color: theme.OBJECT_VALUE_REGEXP_COLOR
      },
      objectValueString: {
        color: theme.OBJECT_VALUE_STRING_COLOR
      },
      objectValueSymbol: {
        color: theme.OBJECT_VALUE_SYMBOL_COLOR
      },
      objectValueNumber: {
        color: theme.OBJECT_VALUE_NUMBER_COLOR
      },
      objectValueBoolean: {
        color: theme.OBJECT_VALUE_BOOLEAN_COLOR
      },
      objectValueFunctionKeyword: {
        color: theme.OBJECT_VALUE_FUNCTION_KEYWORD_COLOR,
        fontStyle: 'italic'
      },
      objectValueFunctionName: {
        fontStyle: 'italic'
      }
    },

    TreeNode: {
      treeNodeBase: {
        color: theme.BASE_COLOR,
        backgroundColor: theme.BASE_BACKGROUND_COLOR,

        lineHeight: theme.TREENODE_LINE_HEIGHT,
        cursor: 'default',

        boxSizing: 'border-box',
        listStyle: 'none',

        fontFamily: theme.TREENODE_FONT_FAMILY,
        fontSize: theme.TREENODE_FONT_SIZE
      },
      treeNodePreviewContainer: {},
      treeNodePlaceholder: (0, _extends3.default)({
        whiteSpace: 'pre',

        fontSize: theme.ARROW_FONT_SIZE,
        marginRight: theme.ARROW_MARGIN_RIGHT
      }, _unselectable2.default),
      treeNodeArrow: {
        base: (0, _extends3.default)({
          color: theme.ARROW_COLOR,
          display: 'inline-block',
          // lineHeight: '14px',
          fontSize: theme.ARROW_FONT_SIZE,
          marginRight: theme.ARROW_MARGIN_RIGHT
        }, _unselectable2.default),
        expanded: {
          WebkitTransform: 'rotateZ(90deg)',
          MozTransform: 'rotateZ(90deg)',
          transform: 'rotateZ(90deg)'
        },
        collapsed: {
          WebkitTransform: 'rotateZ(0deg)',
          MozTransform: 'rotateZ(0deg)',
          transform: 'rotateZ(0deg)'
        }
      },
      treeNodeChildNodesContainer: {
        margin: 0, // reset user-agent style
        paddingLeft: theme.TREENODE_PADDING_LEFT
      }
    },

    TableInspector: {
      base: {
        color: theme.BASE_COLOR,

        position: 'relative',
        border: '1px solid ' + theme.TABLE_BORDER_COLOR,
        fontFamily: theme.BASE_FONT_FAMILY,
        fontSize: theme.BASE_FONT_SIZE,
        lineHeight: '120%',
        boxSizing: 'border-box',
        cursor: 'default'
      }
    },

    TableInspectorHeaderContainer: {
      base: {
        top: 0,
        height: '17px',
        left: 0,
        right: 0,
        overflowX: 'hidden'
      },
      table: {
        tableLayout: 'fixed',
        borderSpacing: 0,
        borderCollapse: 'separate',
        height: '100%',
        width: '100%',
        margin: 0
      }
    },

    TableInspectorDataContainer: {
      tr: {
        display: 'table-row'
      },
      td: {
        boxSizing: 'border-box',
        border: 'none', // prevent overrides
        height: '16px', // /* 0.5 * table.background-size height */
        verticalAlign: 'top',
        padding: '1px 4px',
        WebkitUserSelect: 'text',

        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        lineHeight: '14px'
      },
      div: {
        position: 'static',
        top: '17px',
        bottom: 0,
        overflowY: 'overlay',
        transform: 'translateZ(0)',

        left: 0,
        right: 0,
        overflowX: 'hidden'
      },
      table: {
        positon: 'static',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderTop: '0 none transparent',
        margin: 0, // prevent user agent stylesheet overrides

        backgroundImage: theme.TABLE_DATA_BACKGROUND_IMAGE,
        backgroundSize: theme.TABLE_DATA_BACKGROUND_SIZE,
        tableLayout: 'fixed',

        // table
        borderSpacing: 0,
        borderCollapse: 'separate',
        // height: '100%',
        width: '100%',

        fontSize: theme.BASE_FONT_SIZE,
        lineHeight: '120%'
      }
    },

    TableInspectorTH: {
      base: {
        position: 'relative', // anchor for sort icon container
        height: 'auto',
        textAlign: 'left',
        backgroundColor: theme.TABLE_TH_BACKGROUND_COLOR,
        borderBottom: '1px solid ' + theme.TABLE_BORDER_COLOR,
        fontWeight: 'normal',
        verticalAlign: 'middle',
        padding: '0 4px',

        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        lineHeight: '14px',

        ':hover': {
          backgroundColor: theme.TABLE_TH_HOVER_COLOR
        }
      },
      div: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',

        // prevent user agent stylesheet overrides
        fontSize: theme.BASE_FONT_SIZE,
        lineHeight: '120%'
      }
    },

    TableInspectorLeftBorder: {
      none: {
        borderLeft: 'none'
      },
      solid: {
        borderLeft: '1px solid ' + theme.TABLE_BORDER_COLOR
      }
    },

    TableInspectorSortIcon: (0, _extends3.default)({
      display: 'block',
      marginRight: 3, // 4,
      width: 8,
      height: 7,

      marginTop: -7,
      color: theme.TABLE_SORT_ICON_COLOR,
      fontSize: 12
    }, _unselectable2.default)
  };
};

/***/ }),

/***/ 3253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none'
};

/***/ }),

/***/ 3254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasChildNodes = hasChildNodes;
var DEFAULT_ROOT_PATH = exports.DEFAULT_ROOT_PATH = '$';

var WILDCARD = '*';

function hasChildNodes(data, dataIterator) {
  return !dataIterator(data).next().done;
}

var wildcardPathsFromLevel = exports.wildcardPathsFromLevel = function wildcardPathsFromLevel(level) {
  // i is depth
  return Array.from({ length: level }, function (_, i) {
    return [DEFAULT_ROOT_PATH].concat(Array.from({ length: i }, function () {
      return '*';
    })).join('.');
  });
};

var getExpandedPaths = exports.getExpandedPaths = function getExpandedPaths(data, dataIterator, expandPaths, expandLevel) {
  var initialState = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var wildcardPaths = [].concat(wildcardPathsFromLevel(expandLevel)).concat(expandPaths).filter(function (path) {
    return typeof path === 'string';
  }); // could be undefined

  var expandedPaths = [];
  wildcardPaths.forEach(function (wildcardPath) {
    var keyPaths = wildcardPath.split('.');
    var populatePaths = function populatePaths(curData, curPath, depth) {
      if (depth === keyPaths.length) {
        expandedPaths.push(curPath);
        return;
      }
      var key = keyPaths[depth];
      if (depth === 0) {
        if (hasChildNodes(curData, dataIterator) && (key === DEFAULT_ROOT_PATH || key === WILDCARD)) {
          populatePaths(curData, DEFAULT_ROOT_PATH, depth + 1);
        }
      } else {
        if (key === WILDCARD) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = dataIterator(curData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ref2 = _step.value;
              var name = _ref2.name,
                  _data = _ref2.data;

              if (hasChildNodes(_data, dataIterator)) {
                populatePaths(_data, curPath + '.' + name, depth + 1);
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } else {
          var value = curData[key];
          if (hasChildNodes(value, dataIterator)) {
            populatePaths(value, curPath + '.' + key, depth + 1);
          }
        }
      }
    };

    populatePaths(data, '', 0);
  });

  return expandedPaths.reduce(function (obj, path) {
    obj[path] = true;
    return obj;
  }, initialState);
};

/***/ }),

/***/ 3255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(215);

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ObjectValue = __webpack_require__(651);

var _ObjectValue2 = _interopRequireDefault(_ObjectValue);

var _ObjectName = __webpack_require__(650);

var _ObjectName2 = _interopRequireDefault(_ObjectName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* NOTE: Chrome console.log is italic */
var styles = {
  preview: {
    fontStyle: 'italic'
  }
};

/* intersperse arr with separator */
function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(function (xs, x) {
    return xs.concat([sep, x]);
  }, [arr[0]]);
}

/**
 * A preview of the object
 */
var ObjectPreview = function ObjectPreview(_ref) {
  var data = _ref.data,
      maxProperties = _ref.maxProperties;

  var object = data;

  if ((typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) !== 'object' || object === null || object instanceof Date || object instanceof RegExp) {
    return _react2.default.createElement(_ObjectValue2.default, { object: object });
  }

  if (Array.isArray(object)) {
    return _react2.default.createElement(
      'span',
      { style: styles.preview },
      '[',
      intersperse(object.map(function (element, index) {
        return _react2.default.createElement(_ObjectValue2.default, { key: index, object: element });
      }), ', '),
      ']'
    );
  } else {
    var propertyNodes = [];
    for (var propertyName in object) {
      var propertyValue = object[propertyName];
      if (object.hasOwnProperty(propertyName)) {
        var ellipsis = void 0;
        if (propertyNodes.length === maxProperties - 1 && Object.keys(object).length > maxProperties) {
          ellipsis = _react2.default.createElement(
            'span',
            { key: 'ellipsis' },
            '\u2026'
          );
        }
        propertyNodes.push(_react2.default.createElement(
          'span',
          { key: propertyName },
          _react2.default.createElement(_ObjectName2.default, { name: propertyName || '""' }),
          ':\xA0',
          _react2.default.createElement(_ObjectValue2.default, { object: propertyValue }),
          ellipsis
        ));
        if (ellipsis) break;
      }
    }

    return _react2.default.createElement(
      'span',
      { style: styles.preview },
      object.constructor.name + ' {',
      intersperse(propertyNodes, ', '),
      '}'
    );
  }
};

ObjectPreview.propTypes = {
  /**
   * max number of properties shown in the property view
   */
  maxProperties: _propTypes2.default.number
};
ObjectPreview.defaultProps = {
  maxProperties: 5
};

exports.default = ObjectPreview;

/***/ }),

/***/ 3256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(215);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(314);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(315);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(316);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(317);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ThemeProvider = __webpack_require__(920);

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _createStyles = __webpack_require__(275);

var _createStyles2 = _interopRequireDefault(_createStyles);

var _getHeaders2 = __webpack_require__(3257);

var _getHeaders3 = _interopRequireDefault(_getHeaders2);

var _DataContainer = __webpack_require__(3266);

var _DataContainer2 = _interopRequireDefault(_DataContainer);

var _HeaderContainer = __webpack_require__(3267);

var _HeaderContainer2 = _interopRequireDefault(_HeaderContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableInspector = function (_Component) {
  (0, _inherits3.default)(TableInspector, _Component);

  function TableInspector(props) {
    (0, _classCallCheck3.default)(this, TableInspector);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TableInspector.__proto__ || Object.getPrototypeOf(TableInspector)).call(this, props));

    _this.state = {
      sorted: false, // has user ever clicked the <th> tag to sort?
      sortIndexColumn: false, // is index column sorted?
      sortColumn: undefined, // which column is sorted?
      sortAscending: false // is sorting ascending or descending?
    };
    return _this;
  }

  (0, _createClass3.default)(TableInspector, [{
    key: 'handleIndexTHClick',
    value: function handleIndexTHClick() {
      this.setState(function (_ref) {
        var sortIndexColumn = _ref.sortIndexColumn,
            sortAscending = _ref.sortAscending;
        return {
          sorted: true,
          sortIndexColumn: true,
          sortColumn: undefined,
          // when changed to a new column, default to asending
          sortAscending: sortIndexColumn ? !sortAscending : true
        };
      });
    }
  }, {
    key: 'handleTHClick',
    value: function handleTHClick(col) {
      this.setState(function (_ref2) {
        var sortColumn = _ref2.sortColumn,
            sortAscending = _ref2.sortAscending;
        return {
          sorted: true,
          sortIndexColumn: false,
          // update sort column
          sortColumn: col,
          // when changed to a new column, default to asending
          sortAscending: col === sortColumn ? !sortAscending : true
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;
      var columns = this.props.columns;

      var theme = this.props.theme;

      var styles = (0, _createStyles2.default)('TableInspector', theme);

      if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object' || data === null) {
        return _react2.default.createElement('div', null);
      }

      var _getHeaders = (0, _getHeaders3.default)(data),
          rowHeaders = _getHeaders.rowHeaders,
          colHeaders = _getHeaders.colHeaders;

      // columns to be displayed are specified
      // NOTE: there's some space for optimization here


      if (columns !== undefined) {
        colHeaders = columns;
      }

      var rowsData = rowHeaders.map(function (rowHeader) {
        return data[rowHeader];
      });

      var sortIndexColumn = this.state.sortIndexColumn,
          sortColumn = this.state.sortColumn,
          sortAscending = this.state.sortAscending;

      var columnDataWithRowIndexes = void 0; /* row indexes are [0..nRows-1] */
      // TODO: refactor
      if (sortColumn !== undefined) {
        // the column to be sorted (rowsData, column) => [[columnData, rowIndex]]
        columnDataWithRowIndexes = rowsData.map(function (rowData, index) {
          // normalize rowData
          if ((typeof rowData === 'undefined' ? 'undefined' : (0, _typeof3.default)(rowData)) === 'object' && rowData !== null /*&& rowData.hasOwnProperty(sortColumn)*/
          ) {
              var columnData = rowData[sortColumn];
              return [columnData, index];
            }
          return [undefined, index];
        });
      } else {
        if (sortIndexColumn) {
          columnDataWithRowIndexes = rowHeaders.map(function (rowData, index) {
            var columnData = rowHeaders[index];
            return [columnData, index];
          });
        }
      }
      if (columnDataWithRowIndexes !== undefined) {
        // apply a mapper before sorting (because we need to access inside a container)
        var comparator = function comparator(mapper, ascending) {
          return function (a, b) {
            var v1 = mapper(a); // the datum
            var v2 = mapper(b);
            var type1 = typeof v1 === 'undefined' ? 'undefined' : (0, _typeof3.default)(v1);
            var type2 = typeof v2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(v2);
            // use '<' operator to compare same type of values or compare type precedence order #
            var lt = function lt(v1, v2) {
              if (v1 < v2) {
                return -1;
              } else if (v1 > v2) {
                return 1;
              } else {
                return 0;
              }
            };
            var result = void 0;
            if (type1 === type2) {
              result = lt(v1, v2);
            } else {
              // order of different types
              var order = {
                string: 0,
                number: 1,
                object: 2,
                symbol: 3,
                boolean: 4,
                undefined: 5,
                function: 6
              };
              result = lt(order[type1], order[type2]);
            }
            // reverse result if descending
            if (!ascending) result = -result;
            return result;
          };
        };
        var sortedRowIndexes = columnDataWithRowIndexes.sort(comparator(function (item) {
          return item[0];
        }, sortAscending)).map(function (item) {
          return item[1];
        }); // sorted row indexes
        rowHeaders = sortedRowIndexes.map(function (i) {
          return rowHeaders[i];
        });
        rowsData = sortedRowIndexes.map(function (i) {
          return rowsData[i];
        });
      }

      return _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: this.props.theme },
        _react2.default.createElement(
          'div',
          { style: styles.base },
          _react2.default.createElement(_HeaderContainer2.default, {
            columns: colHeaders
            /* for sorting */
            , sorted: this.state.sorted,
            sortIndexColumn: this.state.sortIndexColumn,
            sortColumn: this.state.sortColumn,
            sortAscending: this.state.sortAscending,
            onTHClick: this.handleTHClick.bind(this),
            onIndexTHClick: this.handleIndexTHClick.bind(this)
          }),
          _react2.default.createElement(_DataContainer2.default, { rows: rowHeaders, columns: colHeaders, rowsData: rowsData })
        )
      );
    }
  }]);
  return TableInspector;
}(_react.Component); /**
                      * Specs:
                      * https://developer.chrome.com/devtools/docs/commandline-api#tabledata-columns
                      * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
                      */

exports.default = TableInspector;


TableInspector.propTypes = {
  /**
   * the Javascript object you would like to inspect, either an array or an object
   */
  data: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
  /**
   * An array of the names of the columns you'd like to display in the table
   */
  columns: _propTypes2.default.array
};

TableInspector.defaultProps = {
  data: undefined,
  columns: undefined,
  theme: 'chromeLight'
};

/***/ }),

/***/ 3257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(3258);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(215);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = getHeaders;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Polyfill for running tests
 * `includes` is an ES2016 feature
 */
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement /*, fromIndex*/) {
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {
        k = 0;
      }
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
        // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

function getHeaders(data) {
  if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object') {
    var rowHeaders = void 0;
    // is an array
    if (Array.isArray(data)) {
      var nRows = data.length;
      rowHeaders = [].concat((0, _toConsumableArray3.default)(Array(nRows).keys()));
    } else if (data !== null) {
      // is an object
      // keys are row indexes
      rowHeaders = Object.keys(data);
    }

    // Time: O(nRows * nCols)
    var colHeaders = rowHeaders.reduce(function (colHeaders, rowHeader) {
      var row = data[rowHeader];
      if ((typeof row === 'undefined' ? 'undefined' : (0, _typeof3.default)(row)) === 'object' && row !== null) {
        /* O(nCols) Could optimize `includes` here */
        var cols = Object.keys(row);
        cols.reduce(function (xs, x) {
          if (!xs.includes(x)) {
            /* xs is the colHeaders to be filled by searching the row's indexes */
            xs.push(x);
          }
          return xs;
        }, colHeaders);
      }
      return colHeaders;
    }, []);
    return {
      rowHeaders: rowHeaders,
      colHeaders: colHeaders
    };
  }
  return undefined;
}

/***/ }),

/***/ 3258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(3259);

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

/***/ 3259:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(3260), __esModule: true };

/***/ }),

/***/ 3260:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(649);
__webpack_require__(3261);
module.exports = __webpack_require__(151).Array.from;


/***/ }),

/***/ 3261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(906);
var $export = __webpack_require__(311);
var toObject = __webpack_require__(647);
var call = __webpack_require__(3262);
var isArrayIter = __webpack_require__(3263);
var toLength = __webpack_require__(1400);
var createProperty = __webpack_require__(3264);
var getIterFn = __webpack_require__(1409);

$export($export.S + $export.F * !__webpack_require__(3265)(function (iter) { Array.from(iter); }), 'Array', {
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

/***/ 3262:
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(312);
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

/***/ 3263:
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(359);
var ITERATOR = __webpack_require__(172)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 3264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(273);
var createDesc = __webpack_require__(527);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 3265:
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(172)('iterator');
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

/***/ 3266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(215);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(188);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(275);

var _createStyles2 = _interopRequireDefault(_createStyles);

var _ObjectValue = __webpack_require__(651);

var _ObjectValue2 = _interopRequireDefault(_ObjectValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataContainer = function DataContainer(_ref, _ref2) {
  var rows = _ref.rows,
      columns = _ref.columns,
      rowsData = _ref.rowsData;
  var theme = _ref2.theme;

  var styles = (0, _createStyles2.default)('TableInspectorDataContainer', theme);
  var borderStyles = (0, _createStyles2.default)('TableInspectorLeftBorder', theme);

  return _react2.default.createElement(
    'div',
    { style: styles.div },
    _react2.default.createElement(
      'table',
      { style: styles.table },
      _react2.default.createElement('colgroup', null),
      _react2.default.createElement(
        'tbody',
        null,
        rows.map(function (row, i) {
          return _react2.default.createElement(
            'tr',
            { key: row, style: styles.tr },
            _react2.default.createElement(
              'td',
              { style: (0, _extends3.default)({}, styles.td, borderStyles.none) },
              row
            ),
            columns.map(function (column) {
              var rowData = rowsData[i];
              // rowData could be
              //  object -> index by key
              //    array -> index by array index
              //    null -> pass
              //  boolean -> pass
              //  string -> pass (hasOwnProperty returns true for [0..len-1])
              //  number -> pass
              //  function -> pass
              //  symbol
              //  undefined -> pass
              if ((typeof rowData === 'undefined' ? 'undefined' : (0, _typeof3.default)(rowData)) === 'object' && rowData !== null && rowData.hasOwnProperty(column)) {
                return _react2.default.createElement(
                  'td',
                  { key: column, style: (0, _extends3.default)({}, styles.td, borderStyles.solid) },
                  _react2.default.createElement(_ObjectValue2.default, { object: rowData[column] })
                );
              } else {
                return _react2.default.createElement('td', { key: column, style: (0, _extends3.default)({}, styles.td, borderStyles.solid) });
              }
            })
          );
        })
      )
    )
  );
};

DataContainer.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

exports.default = DataContainer;

/***/ }),

/***/ 3267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(275);

var _createStyles2 = _interopRequireDefault(_createStyles);

var _TH = __webpack_require__(3268);

var _TH2 = _interopRequireDefault(_TH);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderContainer = function HeaderContainer(_ref, _ref2) {
  var indexColumnText = _ref.indexColumnText,
      columns = _ref.columns,
      sorted = _ref.sorted,
      sortIndexColumn = _ref.sortIndexColumn,
      sortColumn = _ref.sortColumn,
      sortAscending = _ref.sortAscending,
      onTHClick = _ref.onTHClick,
      onIndexTHClick = _ref.onIndexTHClick;
  var theme = _ref2.theme;

  var styles = (0, _createStyles2.default)('TableInspectorHeaderContainer', theme);
  var borderStyles = (0, _createStyles2.default)('TableInspectorLeftBorder', theme);
  return _react2.default.createElement(
    'div',
    { style: styles.base },
    _react2.default.createElement(
      'table',
      { style: styles.table },
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            _TH2.default,
            {
              borderStyle: borderStyles.none,
              sorted: sorted && sortIndexColumn,
              sortAscending: sortAscending,
              onClick: onIndexTHClick
            },
            indexColumnText
          ),
          columns.map(function (column) {
            return _react2.default.createElement(
              _TH2.default,
              {
                borderStyle: borderStyles.solid,
                key: column,
                sorted: sorted && sortColumn === column,
                sortAscending: sortAscending,
                onClick: onTHClick.bind(undefined, column)
              },
              column
            );
          })
        )
      )
    )
  );
};

HeaderContainer.defaultProps = {
  indexColumnText: '(index)',
  columns: []
};

HeaderContainer.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

exports.default = HeaderContainer;

/***/ }),

/***/ 3268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(188);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(648);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(314);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(315);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(316);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(317);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(275);

var _createStyles2 = _interopRequireDefault(_createStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortIconContainer = function SortIconContainer(props) {
  return _react2.default.createElement(
    'div',
    {
      style: {
        position: 'absolute',
        top: 1,
        right: 0,
        bottom: 1,
        display: 'flex',
        alignItems: 'center'
      }
    },
    props.children
  );
};

var SortIcon = function SortIcon(_ref, _ref2) {
  var sortAscending = _ref.sortAscending;
  var theme = _ref2.theme;

  var glyph = sortAscending ? '▲' : '▼';
  var styles = (0, _createStyles2.default)('TableInspectorSortIcon', theme);
  return _react2.default.createElement(
    'div',
    { style: styles },
    glyph
  );
};

SortIcon.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

var TH = function (_Component) {
  (0, _inherits3.default)(TH, _Component);

  function TH() {
    var _ref3;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TH);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = TH.__proto__ || Object.getPrototypeOf(TH)).call.apply(_ref3, [this].concat(args))), _this), _this.state = { hovered: false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TH, [{
    key: 'toggleHovered',
    value: function toggleHovered(hovered) {
      this.setState({ hovered: hovered });
    }
  }, {
    key: 'render',
    value: function render() {
      // either not sorted, sort ascending or sort descending
      var _props = this.props,
          borderStyle = _props.borderStyle,
          children = _props.children,
          onClick = _props.onClick,
          sortAscending = _props.sortAscending,
          sorted = _props.sorted,
          props = (0, _objectWithoutProperties3.default)(_props, ['borderStyle', 'children', 'onClick', 'sortAscending', 'sorted']);
      var theme = this.context.theme;

      var styles = (0, _createStyles2.default)('TableInspectorTH', theme);

      return _react2.default.createElement(
        'th',
        (0, _extends3.default)({}, props, {
          style: (0, _extends3.default)({}, styles.base, borderStyle, this.state.hovered ? styles.base[':hover'] : {}),
          onMouseEnter: this.toggleHovered.bind(this, true),
          onMouseLeave: this.toggleHovered.bind(this, false),
          onClick: onClick
        }),
        _react2.default.createElement(
          'div',
          { style: styles.div },
          children
        ),
        sorted && _react2.default.createElement(
          SortIconContainer,
          null,
          _react2.default.createElement(SortIcon, { sortAscending: sortAscending })
        )
      );
    }
  }]);
  return TH;
}(_react.Component);

TH.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

TH.defaultProps = {
  sortAscending: false,
  sorted: false,
  onClick: undefined
};

exports.default = TH;

/***/ }),

/***/ 3269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(188);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(314);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(315);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(316);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(317);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(1407);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DOMNodePreview = __webpack_require__(3270);

var _DOMNodePreview2 = _interopRequireDefault(_DOMNodePreview);

var _TreeView = __webpack_require__(1410);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _shouldInline = __webpack_require__(1413);

var _shouldInline2 = _interopRequireDefault(_shouldInline);

var _ThemeProvider = __webpack_require__(920);

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domIterator = /*#__PURE__*/_regenerator2.default.mark(function domIterator(data) {
  var textInlined, i, node;
  return _regenerator2.default.wrap(function domIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(data && data.childNodes)) {
            _context.next = 17;
            break;
          }

          textInlined = (0, _shouldInline2.default)(data);

          if (!textInlined) {
            _context.next = 4;
            break;
          }

          return _context.abrupt('return');

        case 4:
          i = 0;

        case 5:
          if (!(i < data.childNodes.length)) {
            _context.next = 14;
            break;
          }

          node = data.childNodes[i];

          if (!(node.nodeType === Node.TEXT_NODE && node.textContent.trim().length === 0)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt('continue', 11);

        case 9:
          _context.next = 11;
          return {
            name: node.tagName + '[' + i + ']',
            data: node
          };

        case 11:
          i++;
          _context.next = 5;
          break;

        case 14:
          if (!data.tagName) {
            _context.next = 17;
            break;
          }

          _context.next = 17;
          return {
            name: 'CLOSE_TAG',
            data: {
              tagName: data.tagName
            },
            isCloseTag: true
          };

        case 17:
        case 'end':
          return _context.stop();
      }
    }
  }, domIterator, this);
});

var DOMInspector = function (_Component) {
  (0, _inherits3.default)(DOMInspector, _Component);

  function DOMInspector() {
    (0, _classCallCheck3.default)(this, DOMInspector);
    return (0, _possibleConstructorReturn3.default)(this, (DOMInspector.__proto__ || Object.getPrototypeOf(DOMInspector)).apply(this, arguments));
  }

  (0, _createClass3.default)(DOMInspector, [{
    key: 'render',
    value: function render() {
      var nodeRenderer = _DOMNodePreview2.default;

      return _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: this.props.theme },
        _react2.default.createElement(_TreeView2.default, (0, _extends3.default)({ nodeRenderer: nodeRenderer, dataIterator: domIterator }, this.props))
      );
    }
  }]);
  return DOMInspector;
}(_react.Component);

DOMInspector.propTypes = {
  /** The DOM Node to inspect */
  data: _propTypes2.default.object.isRequired
};
DOMInspector.defaultProps = {
  theme: 'chromeLight'
};
exports.default = DOMInspector;

/***/ }),

/***/ 3270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(275);

var _createStyles2 = _interopRequireDefault(_createStyles);

var _shouldInline = __webpack_require__(1413);

var _shouldInline2 = _interopRequireDefault(_shouldInline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OpenTag = function OpenTag(_ref) {
  var tagName = _ref.tagName,
      attributes = _ref.attributes,
      styles = _ref.styles;

  return _react2.default.createElement(
    'span',
    { style: styles.base },
    '<',
    _react2.default.createElement(
      'span',
      { style: styles.tagName },
      tagName
    ),
    function () {
      if (attributes) {
        var attributeNodes = [];
        for (var i = 0; i < attributes.length; i++) {
          var attribute = attributes[i];
          attributeNodes.push(_react2.default.createElement(
            'span',
            { key: i },
            ' ',
            _react2.default.createElement(
              'span',
              { style: styles.htmlAttributeName },
              attribute.name
            ),
            '="',
            _react2.default.createElement(
              'span',
              { style: styles.htmlAttributeValue },
              attribute.value
            ),
            '"'
          ));
        }
        return attributeNodes;
      }
    }(),
    '>'
  );
};

// isChildNode style={{ marginLeft: -12 /* hack: offset placeholder */ }}
var CloseTag = function CloseTag(_ref2) {
  var tagName = _ref2.tagName,
      _ref2$isChildNode = _ref2.isChildNode,
      isChildNode = _ref2$isChildNode === undefined ? false : _ref2$isChildNode,
      styles = _ref2.styles;
  return _react2.default.createElement(
    'span',
    { style: Object.assign({}, styles.base, isChildNode && styles.offsetLeft) },
    '</',
    _react2.default.createElement(
      'span',
      { style: styles.tagName },
      tagName
    ),
    '>'
  );
};

var nameByNodeType = {
  1: 'ELEMENT_NODE',
  3: 'TEXT_NODE',
  7: 'PROCESSING_INSTRUCTION_NODE',
  8: 'COMMENT_NODE',
  9: 'DOCUMENT_NODE',
  10: 'DOCUMENT_TYPE_NODE', // http://stackoverflow.com/questions/6088972/get-doctype-of-an-html-as-string-with-javascript
  11: 'DOCUMENT_FRAGMENT_NODE'
};

var DOMNodePreview = function DOMNodePreview(_ref3, _ref4) {
  var isCloseTag = _ref3.isCloseTag,
      data = _ref3.data,
      expanded = _ref3.expanded;
  var theme = _ref4.theme;

  var styles = (0, _createStyles2.default)('DOMNodePreview', theme);

  if (isCloseTag) {
    return _react2.default.createElement(CloseTag, { styles: styles.htmlCloseTag, isChildNode: true, tagName: data.tagName });
  }

  switch (data.nodeType) {
    case Node.ELEMENT_NODE:
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(OpenTag, {
          tagName: data.tagName,
          attributes: data.attributes,
          styles: styles.htmlOpenTag
        }),
        (0, _shouldInline2.default)(data) ? data.textContent : !expanded && '…',
        !expanded && _react2.default.createElement(CloseTag, { tagName: data.tagName, styles: styles.htmlCloseTag })
      );
    case Node.TEXT_NODE:
      return _react2.default.createElement(
        'span',
        null,
        data.textContent
      );
    case Node.CDATA_SECTION_NODE:
      return _react2.default.createElement(
        'span',
        null,
        '<![CDATA[' + data.textContent + ']]>'
      );
    case Node.COMMENT_NODE:
      return _react2.default.createElement(
        'span',
        { style: styles.htmlComment },
        '<!--',
        data.textContent,
        '-->'
      );
    case Node.PROCESSING_INSTRUCTION_NODE:
      return _react2.default.createElement(
        'span',
        null,
        data.nodeName
      );
    case Node.DOCUMENT_TYPE_NODE:
      return _react2.default.createElement(
        'span',
        { style: styles.htmlDoctype },
        '<!DOCTYPE ',
        data.name,
        data.publicId ? ' PUBLIC "' + data.publicId + '"' : '',
        !data.publicId && data.systemId ? ' SYSTEM' : '',
        data.systemId ? ' "' + data.systemId + '"' : '',
        '>'
      );
    case Node.DOCUMENT_NODE:
      return _react2.default.createElement(
        'span',
        null,
        data.nodeName
      );
    case Node.DOCUMENT_FRAGMENT_NODE:
      return _react2.default.createElement(
        'span',
        null,
        data.nodeName
      );
    default:
      return _react2.default.createElement(
        'span',
        null,
        nameByNodeType[data.nodeType]
      );
  }
};

DOMNodePreview.propTypes = {
  /** If true, just render a close tag */
  isCloseTag: _propTypes2.default.bool,
  /**  */
  name: _propTypes2.default.string,
  /** The DOM Node */
  data: _propTypes2.default.object.isRequired,
  /** Whether the DOM node has been expanded. */
  expanded: _propTypes2.default.bool.isRequired
};

DOMNodePreview.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

exports.default = DOMNodePreview;

/***/ }),

/***/ 3271:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3272)
var isWindow = __webpack_require__(3273)

function isNode (val) {
  if (!isObject(val) || !isWindow(window) || typeof window.Node !== 'function') {
    return false
  }

  return typeof val.nodeType === 'number' &&
    typeof val.nodeName === 'string'
}

module.exports = isNode


/***/ }),

/***/ 3272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};


/***/ }),

/***/ 3273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {

  if (obj == null) {
    return false;
  }

  var o = Object(obj);

  return o === o.window;
};


/***/ }),

/***/ 3274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object_ObjectName__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ObjectPreview__ = __webpack_require__(3275);




const ObjectRootLabel = ({ name, data }) => {
  if (typeof name === 'string') {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__object_ObjectName__["a" /* default */], { name: name }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ': '),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ObjectPreview__["a" /* default */], { data: data })));


  } else {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ObjectPreview__["a" /* default */], { data: data });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (ObjectRootLabel);

/***/ }),

/***/ 3275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object_ObjectValue__ = __webpack_require__(1414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__object_ObjectName__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__(528);







/* intersperse arr with separator */
// eslint-disable-next-line require-jsdoc
function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce((xs, x) => xs.concat([sep, x]), [arr[0]]);
}

/**
   * A preview of the object
   */
const ObjectPreview = ({ data }) => {
  const styles = Object(__WEBPACK_IMPORTED_MODULE_3__styles__["b" /* useStyles */])('ObjectPreview');
  const object = data;

  if (
  typeof object !== 'object' ||
  object === null ||
  object instanceof Date ||
  object instanceof RegExp)
  {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__object_ObjectValue__["a" /* default */], { object: object });
  }

  if (Array.isArray(object)) {
    const maxProperties = styles.arrayMaxProperties;
    const previewArray = object.
    slice(0, maxProperties).
    map((element, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__object_ObjectValue__["a" /* default */], { key: index, object: element }));

    if (object.length > maxProperties) {
      previewArray.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { key: 'ellipsis' }, '\u2026'));
    }

    const arrayLength = object.length;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: styles.objectDescription },
          arrayLength === 0 ? '' : `(${arrayLength})\xa0`),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: styles.preview }, '[', intersperse(previewArray, ', '), ']')));


  } else {
    const maxProperties = styles.objectMaxProperties;
    let propertyNodes = [];

    for (let propertyName in object) {
      const propertyValue = object[propertyName];
      if (Object.prototype.hasOwnProperty.call(object, propertyName)) {
        let ellipsis;
        if (
        propertyNodes.length === maxProperties - 1 &&
        Object.keys(object).length > maxProperties)
        {
          ellipsis = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { key: 'ellipsis' }, '\u2026');
        }
        propertyNodes.push(
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { key: propertyName },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__object_ObjectName__["a" /* default */], { name: propertyName || '""' }), ':\xA0',

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__object_ObjectValue__["a" /* default */], { object: propertyValue }),
          ellipsis));


        if (ellipsis) break;
      }
    }

    const objectConstructorName = object.constructor ? object.constructor.name : 'Object';

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: styles.objectDescription },
          objectConstructorName === 'Object' ? '' : `${objectConstructorName} `),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: styles.preview },
          '{',
          intersperse(propertyNodes, ', '),
          '}')));



  }
};

/* harmony default export */ __webpack_exports__["a"] = (ObjectPreview);

/***/ }),

/***/ 3276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleNetworkItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pretty_ms__ = __webpack_require__(1325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pretty_ms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pretty_ms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ConsoleNetworkItem_ConsoleListItemPretty__ = __webpack_require__(3277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ConsoleNetworkItem_ConsoleListItemRaw__ = __webpack_require__(3279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Buttons__ = __webpack_require__(13);








/**
                                              * Data should be of the following format
                                              * data:
                                              *  request:
                                              *  response:
                                              *  session:
                                              *  timings:
                                              */let

ConsoleNetworkItem = class ConsoleNetworkItem extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);

    this.state = { activeTab: 'pretty' };

    this.toggleView = this.toggleView.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
  }

  toggleView() {
    if (this.state.activeTab === 'pretty') {
      return this.setState({ activeTab: 'raw' });
    }

    return this.setState({ activeTab: 'pretty' });
  }

  handleToggle() {
    this.props.toggleExpanded();
  }

  getRequestHead(data) {
    // Use the href property and then fallback to url
    return `${data.request.method} ${data.request.href || data.request.url}`;
  }

  getStatusCode(data) {
    if (data.redirect === true) {
      return _.get(this.props, 'data.response.statusCode');
    }

    return _.get(this.props, 'data.response.code');
  }

  getButtonText() {
    if (this.state.activeTab === 'pretty') {
      return 'Show raw log';
    }

    return 'Show pretty log';
  }

  /**
    * A utility helper method that prettifies raw millisecond counts and returns it.
    *
    * @param {Number} ms - The raw millisecond count, usually from response times.
    * @returns {String} - The prettified time, scaled to units of time, depending on the input value.
    */
  formatTime(ms) {
    return ms < 1998 ? `${_.ceil(ms, 2)}ms` : __WEBPACK_IMPORTED_MODULE_2_pretty_ms___default()(ms || 0, { secDecimalDigits: 2, keepDecimalsOnWholeSeconds: true });
  }

  render() {
    const responseTime = _.get(this.props, 'data.response.responseTime');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'c-li__network-wrap' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'c-li__network-msg', onClick: this.handleToggle },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('network-expand__caret', { down: this.props.isExpanded }) }, '\u25B6'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'network__message' },

            this.getRequestHead(this.props.data)),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'network__response-meta' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'network__response-code' }, this.getStatusCode(this.props.data)),

            Boolean(responseTime) &&

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null,
              ' | ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'network__response-time' }, this.formatTime(responseTime))))),






        this.props.isExpanded &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'c-li__network-wrap--expanded' },

          !!this.props.data.error &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'c-li__network-error' }, 'Error: ',
            _.get(this.props, 'data.error.message') || _.get(this.props, 'data.error')),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'c-li__network-expanded' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'network-expanded__left' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'is-hidden': this.state.activeTab !== 'pretty' }) },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ConsoleNetworkItem_ConsoleListItemPretty__["a" /* default */], { data: this.props.data })),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'is-hidden': this.state.activeTab !== 'raw' }) },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ConsoleNetworkItem_ConsoleListItemRaw__["a" /* default */], { data: this.props.data }))),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'network-expanded__right' },

              !(this.props.data.redirect || this.props.data.error) &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                  className: 'network__switch-view',
                  type: 'text',
                  onClick: this.toggleView },

                this.getButtonText()))))));








  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleListItemPretty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_inspector__ = __webpack_require__(1395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_inspector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_inspector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ObjectInspector_ObjectLabel__ = __webpack_require__(1416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ObjectInspector_styles__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ConsoleNetworkFormatter__ = __webpack_require__(3278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_RequestDataModeConstants__ = __webpack_require__(177);







let

ConsoleListItemPretty = class ConsoleListItemPretty extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  getRequestBody(request) {
    // Check for an ignored body and bail
    if (_.has(request, 'body.___ignored___')) {
      return _.get(request, 'body.___ignored___');
    }


    const mode = _.get(request, 'body.mode', __WEBPACK_IMPORTED_MODULE_5__constants_RequestDataModeConstants__["e" /* REQUEST_DATA_MODE_RAW */]),
    body = _.get(request, ['body', mode], '');

    // If there is no body then just bail out with the empty string
    if (!body) {
      return body;
    }

    if (mode === __WEBPACK_IMPORTED_MODULE_5__constants_RequestDataModeConstants__["e" /* REQUEST_DATA_MODE_RAW */]) {
      try {
        // Parse the string if its parsable JSON
        return JSON.parse(body);
      } catch (e) {
        return body;
      }
    }

    // At this moment the datamode could be any of form-data, url-encoded or graphql
    if (Array.isArray(body)) {
      return body.reduce((acc, b) => {
        if (b.disabled) {
          return acc;
        }

        // Check if the key already exists then
        if (acc[b.key]) {
          if (Array.isArray(acc[b.key])) {
            acc[b.key].push(b.value);
          } else {
            acc[b.key] = [acc[b.key], b.value];
          }
        } else {
          acc[b.key] = b.value;
        }

        return acc;
      }, {});
    }

    return body;
  }

  getResponseBody(response) {
    // Check for an ignored body and bail
    if (_.has(response, 'body.___ignored___')) {
      return _.get(response, 'body.___ignored___');
    }

    // We are expecting the response body to be json string
    const body = _.get(response, 'body', '');

    try {
      return JSON.parse(body);
    } catch (e) {
      return body;
    }
  }

  getHeaders(data) {
    if (!(data && data.headers)) {
      return;
    }

    return _.filter(data.headers, header => !header.disabled);
  }

  nodeRenderer({ depth, name, data, isNonenumerable }) {
    if (depth === 0) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'node-renderer__root-node' }, name);
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ObjectInspector_ObjectLabel__["a" /* default */], { name: name, data: data, isNonenumerable: isNonenumerable });
  }

  getTheme() {
    return Object.assign({ TREENODE_PADDING_LEFT: 8 }, __WEBPACK_IMPORTED_MODULE_3__ObjectInspector_styles__["a" /* baseStyles */]);
  }

  getView(name, data, isExpanded) {
    if (_.isArray(data) || !_.isObject(data)) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ConsoleNetworkFormatter__["a" /* default */], { isExpanded: isExpanded, name: name, data: data });
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_inspector___default.a, {
        data: data,
        theme: this.getTheme(),
        name: name,
        nodeRenderer: this.nodeRenderer,
        expandLevel: isExpanded ? 1 : 0 }));

  }

  render() {
    let requestBody = this.getRequestBody(this.props.data.request),
    responseBody = this.getResponseBody(this.props.data.response),
    requestHeader = this.getHeaders(this.props.data.request),
    responseHeaders = this.getHeaders(this.props.data.response),
    certificate = _.get(this.props, 'data.request.certificate'),
    proxy = _.get(this.props, 'data.request.proxy'),
    session = _.get(this.props, 'data.session');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-list__pretty' },

        !_.isEmpty(certificate) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'pretty__certificate' }, this.getView('Client Certificate', certificate)),


        !_.isEmpty(proxy) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'pretty__proxy' },
          this.getView('Proxy', proxy, true) // expanded by default
        ),


        !_.isEmpty(session) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'pretty__network' }, this.getView('Network', session)),


        !_.isEmpty(requestHeader) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'pretty__request-headers' },
          this.getView('Request Headers', requestHeader, true) // expanded by default
        ),


        !_.isEmpty(requestBody) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'pretty__request-body' }, this.getView('Request Body', requestBody)),


        !_.isEmpty(responseHeaders) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'pretty__response-headers' },
          this.getView('Response Headers', responseHeaders, true) // expanded by default
        ),


        !_.isEmpty(responseBody) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'pretty__response-body' }, this.getView('Response Body', responseBody))));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleNetworkFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

let

ConsoleNetworkFormatter = class ConsoleNetworkFormatter extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);

    this.state = { isExpanded: props.isExpanded };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  getText(value) {
    if (typeof value === 'string') {
      return `"${value}"`;
    }

    return value;
  }

  render() {
    let data = this.props.data,
    name = this.props.name;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'c-li__network-string' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'network-string__name',
          onClick: this.handleToggle },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('network-expand__caret', { down: this.state.isExpanded }) }, '\u25B6'),
        name),


      this.state.isExpanded && (
      _.isArray(data) ?
      _.map(data, (row, index) => {
        return (
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: index, className: 'network-formatter__item' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, row.key),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ': '),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'network__value' }, this.getText(row.value))));


      }) :

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'network-string__value' }, data)));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleListItemRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


const querystring = __webpack_require__(286),
{ Url } = __webpack_require__(69);let

ConsoleListItemRaw = class ConsoleListItemRaw extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  getRawText() {
    let { data } = this.props,
    requestHeaders = this.getRequestHeaders(data.request),
    requestBody = this.getRequestBody(data.request),
    responseHeaders = this.getResponseHeaders(data.response),
    responseBody = this.getResponseBody(data.response);
    return {
      requestHeaders,
      requestBody,
      responseHeaders,
      responseBody };

  }

  getRequestHeaders(request) {
    let requestHeaders = _.
    chain(_.get(request, 'headers', [])).
    compact().
    reject('disabled').
    map(header => `${header.key || header.name}: ${header.value}`).
    value(),
    url = new Url(request.url),
    httpVersion = request.httpVersion ? request.httpVersion : '1.1',
    queryString = url.getQueryString({ encode: true, ignoreDisabled: true });
    queryString = queryString ? `?${queryString}` : '';

    return _.concat(
    [`${request.method} ${url.getPath()}${queryString} HTTP/${httpVersion}`],
    requestHeaders);

  }

  getRequestBody(request) {
    // Check for an ignored body and bail
    if (_.has(request, 'body.___ignored___')) {
      return _.get(request, 'body.___ignored___');
    }

    let requestBody,
    requestBodyMode = _.get(request, 'body.mode', '');

    if (requestBodyMode === 'formdata') {
      requestBody = 'Form-data request body is not shown in raw mode, switch to pretty mode.';
    } else if (requestBodyMode === 'urlencoded') {
      requestBody = _.
      chain(_.get(request.body, 'urlencoded', [])).
      reject('disabled').
      map(parameter => querystring.stringify({ [parameter.key]: parameter.value })).
      join('&').
      value();

    } else if (requestBodyMode === 'raw') {
      requestBody = _.get(request, 'body.raw');
    } else if (requestBodyMode === 'graphql') {
      let body = [],
      content = _.get(request, 'body.graphql');

      if (content.hasOwnProperty('query') && typeof content.query === 'string') {
        body.push('"query":' + JSON.stringify(content.query));
      }

      if (content.hasOwnProperty('operationName') && typeof content.operationName === 'string') {
        body.push('"operationName":' + JSON.stringify(content.operationName));
      }

      if (content.hasOwnProperty('variables') && typeof content.variables === 'string' && content.variables !== '') {
        body.push('"variables":' + content.variables); // already a stringified JSON
      }

      requestBody = '{' + body.join(',') + '}';
    }

    return requestBody;
  }

  getResponseHeaders(response) {
    if (!response) {
      return [];
    }

    let responseHeaders = _.
    chain(_.get(response, 'headers', [])).
    map(header => `${header.key || header.name}: ${header.value}`).
    value(),
    httpVersion = response.httpVersion ? response.httpVersion : '1.1';

    return _.concat(
    [`HTTP/${httpVersion} ${response.code}${response.status ? ` ${response.status}` : ''}`],
    responseHeaders);

  }

  getResponseBody(response) {
    if (_.has(response, 'body.___ignored___')) {
      return _.get(response, 'body.___ignored___');
    }

    return response ? response.body : '';
  }

  render() {
    let raw = this.getRawText(),
    data = this.props.data;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body console-net-item__body--raw console-list__raw' },

          !_.isEmpty(raw.requestHeaders) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body-left__request' },
            _.map(raw.requestHeaders, (line, index) => {return line && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: `request-line-${index}` }, line);})),



          !_.isEmpty(raw.requestBody) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body-left__request-body' },
            _.map(_.split(raw.requestBody, '\n'), (line, index) => {return line && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: `request-body-line-${index}` }, line);})),



          !_.isEmpty(raw.responseHeaders) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body-left__response' },
            _.map(raw.responseHeaders, (line, index) => {return line && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: `response-line-${index}` }, line);})),



          !_.isEmpty(raw.responseBody) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'console-net-item__body-left__response-body' },
            _.map(_.split(raw.responseBody, '\n'), (line, index) => {return line && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: `response-body-line-${index}` }, line);})))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(273);
var createDesc = __webpack_require__(527);
module.exports = __webpack_require__(274) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 357:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(1399);
var defined = __webpack_require__(909);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 359:
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 527:
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

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


const base = {
  ObjectPreview: {
    objectDescription: {
      fontStyle: 'italic' },

    preview: {
      fontStyle: 'italic' },

    arrayMaxProperties: 5,
    objectMaxProperties: 3 },


  ObjectName: {
    base: {},
    dimmed: {
      opacity: 0.6 } },



  ObjectValue: {
    objectValueNull: {
      color: 'var(--accent-success)' },

    objectValueUndefined: {
      color: 'var(--accent-success)' },

    objectValueRegExp: {
      color: 'var(--accent-success)' },

    objectValueString: {
      color: 'var(--accent-success)',
      wordBreak: 'break-all' },

    objectValueSymbol: {
      color: 'var(--accent-success)' },

    objectValueNumber: {
      color: 'var(--accent-success)' },

    objectValueBoolean: {
      color: 'var(--accent-success)' },

    objectValueFunctionPrefix: {
      color: 'var(--accent-success)',
      fontStyle: 'italic' },

    objectValueFunctionName: {
      fontStyle: 'italic' } } };




/**
                                  * Hook to get the component styles for the current theme.
                                  * @param {string} baseStylesKey - Name of the component to be styled
                                  */
const useStyles = baseStylesKey => {
  return base[baseStylesKey];
};
/* harmony export (immutable) */ __webpack_exports__["b"] = useStyles;


const baseStyles = {
  BASE_BACKGROUND_COLOR: 'transparent',
  ARROW_MARGIN_RIGHT: 4,
  ARROW_FONT_SIZE: 12,
  ARROW_COLOR: 'var(--content-tertiary)' };
/* harmony export (immutable) */ __webpack_exports__["a"] = baseStyles;


/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(1398);
var enumBugKeys = __webpack_require__(913);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 644:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 645:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 646:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(909);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 648:
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

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(3216)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(1403)(String, 'String', function (iterated) {
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

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(188);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(275);

var _createStyles2 = _interopRequireDefault(_createStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A view for object property names.
 *
 * If the property name is enumerable (in Object.keys(object)),
 * the property name will be rendered normally.
 *
 * If the property name is not enumerable (`Object.prototype.propertyIsEnumerable()`),
 * the property name will be dimmed to show the difference.
 */
var ObjectName = function ObjectName(_ref, _ref2) {
  var name = _ref.name,
      dimmed = _ref.dimmed,
      styles = _ref.styles;
  var theme = _ref2.theme;

  var themeStyles = (0, _createStyles2.default)('ObjectName', theme);
  var appliedStyles = (0, _extends3.default)({}, themeStyles.base, dimmed ? themeStyles['dimmed'] : {}, styles);

  return _react2.default.createElement(
    'span',
    { style: appliedStyles },
    name
  );
};

ObjectName.propTypes = {
  /** Property name */
  name: _propTypes2.default.string,
  /** Should property name be dimmed */
  dimmed: _propTypes2.default.bool
};

ObjectName.defaultProps = {
  dimmed: false
};

ObjectName.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};

exports.default = ObjectName;

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(215);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(188);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(275);

var _createStyles2 = _interopRequireDefault(_createStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A short description of the object values.
 * Can be used to render tree node in ObjectInspector
 * or render objects in TableInspector.
 */
var ObjectValue = function ObjectValue(_ref, _ref2) {
  var object = _ref.object,
      styles = _ref.styles;
  var theme = _ref2.theme;

  var themeStyles = (0, _createStyles2.default)('ObjectValue', theme);

  var mkStyle = function mkStyle(key) {
    return (0, _extends3.default)({}, themeStyles[key], styles);
  };

  switch (typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) {
    case 'number':
      return _react2.default.createElement(
        'span',
        { style: mkStyle('objectValueNumber') },
        String(object)
      );
    case 'string':
      return _react2.default.createElement(
        'span',
        { style: mkStyle('objectValueString') },
        '"',
        object,
        '"'
      );
    case 'boolean':
      return _react2.default.createElement(
        'span',
        { style: mkStyle('objectValueBoolean') },
        String(object)
      );
    case 'undefined':
      return _react2.default.createElement(
        'span',
        { style: mkStyle('objectValueUndefined') },
        'undefined'
      );
    case 'object':
      if (object === null) {
        return _react2.default.createElement(
          'span',
          { style: mkStyle('objectValueNull') },
          'null'
        );
      }
      if (object instanceof Date) {
        return _react2.default.createElement(
          'span',
          null,
          object.toString()
        );
      }
      if (object instanceof RegExp) {
        return _react2.default.createElement(
          'span',
          { style: mkStyle('objectValueRegExp') },
          object.toString()
        );
      }
      if (Array.isArray(object)) {
        return _react2.default.createElement(
          'span',
          null,
          'Array[' + object.length + ']'
        );
      }
      if (!object.constructor) {
        return _react2.default.createElement(
          'span',
          null,
          'Object'
        );
      }
      if (typeof object.constructor.isBuffer === 'function' && object.constructor.isBuffer(object)) {
        return _react2.default.createElement(
          'span',
          null,
          'Buffer[' + object.length + ']'
        );
      }

      return _react2.default.createElement(
        'span',
        null,
        object.constructor.name
      );
    case 'function':
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'span',
          { style: mkStyle('objectValueFunctionKeyword') },
          'function'
        ),
        _react2.default.createElement(
          'span',
          { style: mkStyle('objectValueFunctionName') },
          '\xA0',
          object.name,
          '()'
        )
      );
    case 'symbol':
      return _react2.default.createElement(
        'span',
        { style: mkStyle('objectValueSymbol') },
        object.toString()
      );
    default:
      return _react2.default.createElement('span', null);
  }
};

ObjectValue.propTypes = {
  /** the object to describe */
  object: _propTypes2.default.any
};

ObjectValue.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};

exports.default = ObjectValue;

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_store_handler__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_model_event__ = __webpack_require__(2);



const STORE_HANDLER_TIMEOUT = 15 * 1000; // 15 seconds

/**
 *
 */
function bootStore(cb) {

  Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["k" /* subscribeToQueue */])(__WEBPACK_IMPORTED_MODULE_0__stores_store_handler__["a" /* handleModelEventOnStore */], STORE_HANDLER_TIMEOUT);
  pm.logger.info('Store~boot - Success');
  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootStore);

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleModelEventOnStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_model_event__ = __webpack_require__(2);



/**
                                                                                                                         *
                                                                                                                         * @param {Object} modelEvent
                                                                                                                         */
function handleModelEventOnStore(modelEvent, callback) {
  let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["g" /* getEventNamespace */])(modelEvent),
  storeListeners = _.get(pm, ['stores', '_listeners']),
  activeListenersFor = new Set(),
  matchedListeners = [];

  // @todo: this may have issues, when a top level event does not have a store initialized
  // but low level events have stores initialized
  if (!storeListeners) {
    return callback();
  }

  storeListeners.forEach(storeListenerForNamespace => {
    _.forEach(_.keys(storeListenerForNamespace), listenerName => {
      activeListenersFor.add(listenerName);
    });
  });

  Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["j" /* processEventSync */])(modelEvent, Array.from(activeListenersFor), function processEventOnStore(event) {
    if (!storeListeners.has(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["g" /* getEventNamespace */])(event))) {
      return;
    }
    let storeListenersForNamespace = storeListeners.get(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["g" /* getEventNamespace */])(event)),
    action = Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["f" /* getEventName */])(event),
    listeners = storeListenersForNamespace[action];

    _.forEach(listeners, function (listener) {
      // we create new functions instead of binding
      // listener is already bound with the `store`, we can't find it, or change it
      listener && matchedListeners.push(function () {
        listener(Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["d" /* getEventData */])(event), Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["e" /* getEventMeta */])(event), modelEvent);
      });
    });
  });

  // wrapping all the individual listeners for an event in a transactions
  Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["u" /* transaction */])(function () {
    // listeners are synchronous anyway
    _.forEach(matchedListeners, function invokeStoreListener(listener) {
      listener && listener();
    });
  });

  callback();
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericContextMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__electron_ElectronService__ = __webpack_require__(141);
let

GenericContextMenu = class GenericContextMenu {
  constructor() {
    this.Remote = __webpack_require__(22).remote;
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

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(3205);
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

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(357);
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

/***/ 908:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 909:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 910:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(912)('keys');
var uid = __webpack_require__(645);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(151);
var global = __webpack_require__(272);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(644) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 913:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 914:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(312);
var dPs = __webpack_require__(3218);
var enumBugKeys = __webpack_require__(913);
var IE_PROTO = __webpack_require__(911)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(1397)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(3219).appendChild(iframe);
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

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(273).f;
var has = __webpack_require__(313);
var TAG = __webpack_require__(172)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3221);
var global = __webpack_require__(272);
var hide = __webpack_require__(356);
var Iterators = __webpack_require__(359);
var TO_STRING_TAG = __webpack_require__(172)('toStringTag');

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

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(172);


/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(272);
var core = __webpack_require__(151);
var LIBRARY = __webpack_require__(644);
var wksExt = __webpack_require__(918);
var defineProperty = __webpack_require__(273).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(314);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(315);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(316);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(317);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeProvider = function (_Component) {
  (0, _inherits3.default)(ThemeProvider, _Component);

  function ThemeProvider() {
    (0, _classCallCheck3.default)(this, ThemeProvider);
    return (0, _possibleConstructorReturn3.default)(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).apply(this, arguments));
  }

  (0, _createClass3.default)(ThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var theme = this.props.theme;

      return {
        // createStyles: createStyles
        theme: theme
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ThemeProvider;
}(_react.Component);

ThemeProvider.childContextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};

exports.default = ThemeProvider;

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles__ = __webpack_require__(528);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



/**
                                        * A view for object property names.
                                        *
                                        * If the property name is enumerable (in Object.keys(object)),
                                        * the property name will be rendered normally.
                                        *
                                        * If the property name is not enumerable (`Object.prototype.propertyIsEnumerable()`),
                                        * the property name will be dimmed to show the difference.
                                        */
const ObjectName = ({ name, dimmed = false, styles = {} }) => {
  const themeStyles = Object(__WEBPACK_IMPORTED_MODULE_2__styles__["b" /* useStyles */])('ObjectName');
  const appliedStyles = _extends({},
  themeStyles.base,
  dimmed ? themeStyles['dimmed'] : {},
  styles);


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: appliedStyles }, name);
};

ObjectName.propTypes = {
  /** Property name */
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /** Should property name be dimmed */
  dimmed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool };


/* harmony default export */ __webpack_exports__["a"] = (ObjectName);

/***/ })

},[3182]);