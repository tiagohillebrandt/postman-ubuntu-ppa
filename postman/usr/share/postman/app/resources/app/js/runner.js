webpackJsonp([4],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export propTypes */
/* unused harmony export PropTypes */
/* unused harmony export onError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observer; });
/* unused harmony export Observer */
/* unused harmony export renderReporter */
/* unused harmony export componentByNodeRegistery */
/* unused harmony export componentByNodeRegistry */
/* unused harmony export trackComponents */
/* unused harmony export useStaticRendering */
/* unused harmony export Provider */
/* unused harmony export inject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);




// These functions can be stubbed out in specific environments
var unstable_batchedUpdates$1 = undefined;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hoistNonReactStatics = createCommonjsModule(function (module, exports) {
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
(function (global, factory) {
    module.exports = factory();
}(commonjsGlobal, (function () {
    'use strict';
    
    var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
    };
    
    var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
    };
    
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
    
    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
            
            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
            }
            
            var keys = getOwnPropertyNames(sourceComponent);
            
            if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }
            
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try { // Avoid failures from read-only properties
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }
            
            return targetComponent;
        }
        
        return targetComponent;
    };
})));
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





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

var EventEmitter = function () {
    function EventEmitter() {
        classCallCheck(this, EventEmitter);
        this.listeners = [];
    }

    createClass(EventEmitter, [{
        key: "on",
        value: function on(cb) {
            var _this = this;

            this.listeners.push(cb);
            return function () {
                var index = _this.listeners.indexOf(cb);
                if (index !== -1) _this.listeners.splice(index, 1);
            };
        }
    }, {
        key: "emit",
        value: function emit(data) {
            this.listeners.forEach(function (fn) {
                return fn(data);
            });
        }
    }]);
    return EventEmitter;
}();

// Copied from React.PropTypes
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
            rest[_key - 6] = arguments[_key];
        }

        return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["s" /* untracked */])(function () {
            componentName = componentName || "<<anonymous>>";
            propFullName = propFullName || propName;
            if (props[propName] == null) {
                if (isRequired) {
                    var actual = props[propName] === null ? "null" : "undefined";
                    return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
                }
                return null;
            } else {
                return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
            }
        });
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}

// Copied from React.PropTypes
function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === "symbol") {
        return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue["@@toStringTag"] === "Symbol") {
        return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
    }

    return false;
}

// Copied from React.PropTypes
function getPropType(propValue) {
    var propType = typeof propValue === "undefined" ? "undefined" : _typeof(propValue);
    if (Array.isArray(propValue)) {
        return "array";
    }
    if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
    }
    if (isSymbol(propType, propValue)) {
        return "symbol";
    }
    return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes
function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === "object") {
        if (propValue instanceof Date) {
            return "date";
        } else if (propValue instanceof RegExp) {
            return "regexp";
        }
    }
    return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["s" /* untracked */])(function () {
            if (allowNativeType) {
                if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
            }
            var mobxChecker = void 0;
            switch (mobxType) {
                case "Array":
                    mobxChecker = __WEBPACK_IMPORTED_MODULE_0_mobx__["j" /* isObservableArray */];
                    break;
                case "Object":
                    mobxChecker = __WEBPACK_IMPORTED_MODULE_0_mobx__["l" /* isObservableObject */];
                    break;
                case "Map":
                    mobxChecker = __WEBPACK_IMPORTED_MODULE_0_mobx__["k" /* isObservableMap */];
                    break;
                default:
                    throw new Error("Unexpected mobxType: " + mobxType);
            }
            var propValue = props[propName];
            if (!mobxChecker(propValue)) {
                var preciseType = getPreciseType(propValue);
                var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
                return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
            }
            return null;
        });
    });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
            rest[_key2 - 5] = arguments[_key2];
        }

        return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["s" /* untracked */])(function () {
            if (typeof typeChecker !== "function") {
                return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
            }
            var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName);
            if (error instanceof Error) return error;
            var propValue = props[propName];
            for (var i = 0; i < propValue.length; i++) {
                error = typeChecker.apply(undefined, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
                if (error instanceof Error) return error;
            }
            return null;
        });
    });
}

var observableArray = createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = createObservableTypeCheckerCreator(false, "Map");
var observableObject = createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = createObservableTypeCheckerCreator(true, "Object");



var propTypes = Object.freeze({
	observableArray: observableArray,
	observableArrayOf: observableArrayOf,
	observableMap: observableMap,
	observableObject: observableObject,
	arrayOrObservableArray: arrayOrObservableArray,
	arrayOrObservableArrayOf: arrayOrObservableArrayOf,
	objectOrObservableObject: objectOrObservableObject
});

function isStateless(component) {
    // `function() {}` has prototype, but `() => {}` doesn't
    // `() => {}` via Babel has prototype too.
    return !(component.prototype && component.prototype.render);
}

var injectorContextTypes = {
    mobxStores: objectOrObservableObject
};
Object.seal(injectorContextTypes);

var proxiedInjectorProps = {
    contextTypes: {
        get: function get$$1() {
            return injectorContextTypes;
        },
        set: function set$$1(_) {
            console.warn("Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`");
        },
        configurable: true,
        enumerable: false
    },
    isMobxInjector: {
        value: true,
        writable: true,
        configurable: true,
        enumerable: true
    }

    /**
     * Store Injection
     */
};function createStoreInjector(grabStoresFn, component, injectNames) {
    var _class, _temp2;

    var displayName = "inject-" + (component.displayName || component.name || component.constructor && component.constructor.name || "Unknown");
    if (injectNames) displayName += "-with-" + injectNames;

    var Injector = (_temp2 = _class = function (_Component) {
        inherits(Injector, _Component);

        function Injector() {
            var _ref;

            var _temp, _this, _ret;

            classCallCheck(this, Injector);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Injector.__proto__ || Object.getPrototypeOf(Injector)).call.apply(_ref, [this].concat(args))), _this), _this.storeRef = function (instance) {
                _this.wrappedInstance = instance;
            }, _temp), possibleConstructorReturn(_this, _ret);
        }

        createClass(Injector, [{
            key: "render",
            value: function render() {
                // Optimization: it might be more efficient to apply the mapper function *outside* the render method
                // (if the mapper is a function), that could avoid expensive(?) re-rendering of the injector component
                // See this test: 'using a custom injector is not too reactive' in inject.js
                var newProps = {};
                for (var key in this.props) {
                    if (this.props.hasOwnProperty(key)) {
                        newProps[key] = this.props[key];
                    }
                }var additionalProps = grabStoresFn(this.context.mobxStores || {}, newProps, this.context) || {};
                for (var _key2 in additionalProps) {
                    newProps[_key2] = additionalProps[_key2];
                }

                if (!isStateless(component)) {
                    newProps.ref = this.storeRef;
                }

                return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(component, newProps);
            }
        }]);
        return Injector;
    }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class.displayName = displayName, _temp2);

    // Static fields from component should be visible on the generated Injector

    hoistNonReactStatics(Injector, component);

    Injector.wrappedComponent = component;
    Object.defineProperties(Injector, proxiedInjectorProps);

    return Injector;
}

function grabStoresByName(storeNames) {
    return function (baseStores, nextProps) {
        storeNames.forEach(function (storeName) {
            if (storeName in nextProps // prefer props over stores
            ) return;
            if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
            nextProps[storeName] = baseStores[storeName];
        });
        return nextProps;
    };
}

/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */
function inject() /* fn(stores, nextProps) or ...storeNames */{
    var grabStoresFn = void 0;
    if (typeof arguments[0] === "function") {
        grabStoresFn = arguments[0];
        return function (componentClass) {
            var injected = createStoreInjector(grabStoresFn, componentClass);
            injected.isMobxInjector = false; // supress warning
            // mark the Injector as observer, to make it react to expressions in `grabStoresFn`,
            // see #111
            injected = observer(injected);
            injected.isMobxInjector = true; // restore warning
            return injected;
        };
    } else {
        var storeNames = [];
        for (var i = 0; i < arguments.length; i++) {
            storeNames[i] = arguments[i];
        }grabStoresFn = grabStoresByName(storeNames);
        return function (componentClass) {
            return createStoreInjector(grabStoresFn, componentClass, storeNames.join("-"));
        };
    }
}

var mobxAdminProperty = __WEBPACK_IMPORTED_MODULE_0_mobx__["a" /* $mobx */] || "$mobx";

/**
 * dev tool support
 */
var isDevtoolsEnabled = false;

var isUsingStaticRendering = false;

var warnedAboutObserverInjectDeprecation = false;

// WeakMap<Node, Object>;
var componentByNodeRegistry = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
var renderReporter = new EventEmitter();

function createSymbol(name) {
    if (typeof Symbol === "function") {
        return Symbol(name);
    }
    return "$mobxReactProp$" + name + Math.random();
}

var skipRenderKey = createSymbol("skipRender");
var isForcingUpdateKey = createSymbol("isForcingUpdate");

/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */
function setHiddenProp(target, prop, value) {
    if (!Object.hasOwnProperty(target, prop)) {
        Object.defineProperty(target, prop, {
            enumerable: false,
            configurable: true,
            writeable: true,
            value: value
        });
    } else {
        target[prop] = value;
    }
}

function findDOMNode$2(component) {
    if (__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"]) {
        try {
            return Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(component);
        } catch (e) {
            // findDOMNode will throw in react-test-renderer, see:
            // See https://github.com/mobxjs/mobx-react/issues/216
            // Is there a better heuristic?
            return null;
        }
    }
    return null;
}

function reportRendering(component) {
    var node = findDOMNode$2(component);
    if (node && componentByNodeRegistry) componentByNodeRegistry.set(node, component);

    renderReporter.emit({
        event: "render",
        renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
        totalTime: Date.now() - component.__$mobRenderStart,
        component: component,
        node: node
    });
}

function trackComponents() {
    if (typeof WeakMap === "undefined") throw new Error("[mobx-react] tracking components is not supported in this browser.");
    if (!isDevtoolsEnabled) isDevtoolsEnabled = true;
}

function useStaticRendering(useStaticRendering) {
    isUsingStaticRendering = useStaticRendering;
}

/**
 * Errors reporter
 */

var errorsReporter = new EventEmitter();

/**
 * Utilities
 */

function patch(target, funcName) {
    var runMixinFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var base = target[funcName];
    var mixinFunc = reactiveMixin[funcName];
    var f = !base ? mixinFunc : runMixinFirst === true ? function () {
        mixinFunc.apply(this, arguments);
        base.apply(this, arguments);
    } : function () {
        base.apply(this, arguments);
        mixinFunc.apply(this, arguments);
    };

    // MWE: ideally we freeze here to protect against accidental overwrites in component instances, see #195
    // ...but that breaks react-hot-loader, see #231...
    target[funcName] = f;
}

function shallowEqual(objA, objB) {
    //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (is(objA, objB)) return true;
    if ((typeof objA === "undefined" ? "undefined" : _typeof(objA)) !== "object" || objA === null || (typeof objB === "undefined" ? "undefined" : _typeof(objB)) !== "object" || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}

function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

function makeComponentReactive(render) {
    var _this2 = this;

    if (isUsingStaticRendering === true) return render.call(this);

    function reactiveRender() {
        var _this = this;

        isRenderingPending = false;
        var exception = undefined;
        var rendering = undefined;
        reaction.track(function () {
            if (isDevtoolsEnabled) {
                _this.__$mobRenderStart = Date.now();
            }
            try {
                rendering = Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["c" /* _allowStateChanges */])(false, baseRender);
            } catch (e) {
                exception = e;
            }
            if (isDevtoolsEnabled) {
                _this.__$mobRenderEnd = Date.now();
            }
        });
        if (exception) {
            errorsReporter.emit(exception);
            throw exception;
        }
        return rendering;
    }

    // Generate friendly name for debugging
    var initialName = this.displayName || this.name || this.constructor && (this.constructor.displayName || this.constructor.name) || "<component>";
    var rootNodeID = this._reactInternalInstance && this._reactInternalInstance._rootNodeID || this._reactInternalInstance && this._reactInternalInstance._debugID || this._reactInternalFiber && this._reactInternalFiber._debugID;
    /**
     * If props are shallowly modified, react will render anyway,
     * so atom.reportChanged() should not result in yet another re-render
     */
    setHiddenProp(this, skipRenderKey, false);
    /**
     * forceUpdate will re-assign this.props. We don't want that to cause a loop,
     * so detect these changes
     */
    setHiddenProp(this, isForcingUpdateKey, false);

    // wire up reactive render
    var baseRender = render.bind(this);
    var isRenderingPending = false;

    var reaction = new __WEBPACK_IMPORTED_MODULE_0_mobx__["b" /* Reaction */](initialName + "#" + rootNodeID + ".render()", function () {
        if (!isRenderingPending) {
            // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
            // This unidiomatic React usage but React will correctly warn about this so we continue as usual
            // See #85 / Pull #44
            isRenderingPending = true;
            if (typeof _this2.componentWillReact === "function") _this2.componentWillReact(); // TODO: wrap in action?
            if (_this2.__$mobxIsUnmounted !== true) {
                // If we are unmounted at this point, componentWillReact() had a side effect causing the component to unmounted
                // TODO: remove this check? Then react will properly warn about the fact that this should not happen? See #73
                // However, people also claim this migth happen during unit tests..
                var hasError = true;
                try {
                    setHiddenProp(_this2, isForcingUpdateKey, true);
                    if (!_this2[skipRenderKey]) __WEBPACK_IMPORTED_MODULE_1_react__["Component"].prototype.forceUpdate.call(_this2);
                    hasError = false;
                } finally {
                    setHiddenProp(_this2, isForcingUpdateKey, false);
                    if (hasError) reaction.dispose();
                }
            }
        }
    });
    reaction.reactComponent = this;
    reactiveRender[mobxAdminProperty] = reaction;
    this.render = reactiveRender;
    return reactiveRender.call(this);
}

/**
 * ReactiveMixin
 */
var reactiveMixin = {
    componentWillUnmount: function componentWillUnmount() {
        if (isUsingStaticRendering === true) return;
        this.render[mobxAdminProperty] && this.render[mobxAdminProperty].dispose();
        this.__$mobxIsUnmounted = true;
        if (isDevtoolsEnabled) {
            var node = findDOMNode$2(this);
            if (node && componentByNodeRegistry) {
                componentByNodeRegistry.delete(node);
            }
            renderReporter.emit({
                event: "destroy",
                component: this,
                node: node
            });
        }
    },

    componentDidMount: function componentDidMount() {
        if (isDevtoolsEnabled) {
            reportRendering(this);
        }
    },

    componentDidUpdate: function componentDidUpdate() {
        if (isDevtoolsEnabled) {
            reportRendering(this);
        }
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        if (isUsingStaticRendering) {
            console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
        }
        // update on any state changes (as is the default)
        if (this.state !== nextState) {
            return true;
        }
        // update if props are shallowly not equal, inspired by PureRenderMixin
        // we could return just 'false' here, and avoid the `skipRender` checks etc
        // however, it is nicer if lifecycle events are triggered like usually,
        // so we return true here if props are shallowly modified.
        return !shallowEqual(this.props, nextProps);
    }
};

function makeObservableProp(target, propName) {
    var valueHolderKey = createSymbol(propName + " value holder");
    var atomHolderKey = createSymbol(propName + " atom holder");
    function getAtom() {
        if (!this[atomHolderKey]) {
            setHiddenProp(this, atomHolderKey, Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["h" /* createAtom */])("reactive " + propName));
        }
        return this[atomHolderKey];
    }
    Object.defineProperty(target, propName, {
        configurable: true,
        enumerable: true,
        get: function get$$1() {
            getAtom.call(this).reportObserved();
            return this[valueHolderKey];
        },
        set: function set$$1(v) {
            if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
                setHiddenProp(this, valueHolderKey, v);
                setHiddenProp(this, skipRenderKey, true);
                getAtom.call(this).reportChanged();
                setHiddenProp(this, skipRenderKey, false);
            } else {
                setHiddenProp(this, valueHolderKey, v);
            }
        }
    });
}

/**
 * Observer function / decorator
 */
function observer(arg1, arg2) {
    if (typeof arg1 === "string") {
        throw new Error("Store names should be provided as array");
    }
    if (Array.isArray(arg1)) {
        // TODO: remove in next major
        // component needs stores
        if (!warnedAboutObserverInjectDeprecation) {
            warnedAboutObserverInjectDeprecation = true;
            console.warn('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`');
        }
        if (!arg2) {
            // invoked as decorator
            return function (componentClass) {
                return observer(arg1, componentClass);
            };
        } else {
            return inject.apply(null, arg1)(observer(arg2));
        }
    }
    var componentClass = arg1;

    if (componentClass.isMobxInjector === true) {
        console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
    }
    if (componentClass.__proto__ === __WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]) {
        console.warn("Mobx observer: You are using 'observer' on React.PureComponent. These two achieve two opposite goals and should not be used together");
    }

    // Stateless function component:
    // If it is function but doesn't seem to be a react class constructor,
    // wrap it to a react class automatically
    if (typeof componentClass === "function" && (!componentClass.prototype || !componentClass.prototype.render) && !componentClass.isReactClass && !__WEBPACK_IMPORTED_MODULE_1_react__["Component"].isPrototypeOf(componentClass)) {
        var _class, _temp;

        var observerComponent = observer((_temp = _class = function (_Component) {
            inherits(_class, _Component);

            function _class() {
                classCallCheck(this, _class);
                return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
            }

            createClass(_class, [{
                key: "render",
                value: function render() {
                    return componentClass.call(this, this.props, this.context);
                }
            }]);
            return _class;
        }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class.displayName = componentClass.displayName || componentClass.name, _class.contextTypes = componentClass.contextTypes, _class.propTypes = componentClass.propTypes, _class.defaultProps = componentClass.defaultProps, _temp));
        hoistNonReactStatics(observerComponent, componentClass);
        return observerComponent;
    }

    if (!componentClass) {
        throw new Error("Please pass a valid component to 'observer'");
    }

    var target = componentClass.prototype || componentClass;
    mixinLifecycleEvents(target);
    componentClass.isMobXReactObserver = true;
    makeObservableProp(target, "props");
    makeObservableProp(target, "state");
    var baseRender = target.render;
    target.render = function () {
        return makeComponentReactive.call(this, baseRender);
    };
    return componentClass;
}

function mixinLifecycleEvents(target) {
    ["componentDidMount", "componentWillUnmount", "componentDidUpdate"].forEach(function (funcName) {
        patch(target, funcName);
    });
    if (!target.shouldComponentUpdate) {
        target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
    } else {
        if (target.shouldComponentUpdate !== reactiveMixin.shouldComponentUpdate) {
            // TODO: make throw in next major
            console.warn("Use `shouldComponentUpdate` in an `observer` based component breaks the behavior of `observer` and might lead to unexpected results. Manually implementing `sCU` should not be needed when using mobx-react.");
        }
    }
}

var Observer = observer(function (_ref) {
    var children = _ref.children,
        observerInject = _ref.inject,
        render = _ref.render;

    var component = children || render;
    if (typeof component === "undefined") {
        return null;
    }
    if (!observerInject) {
        return component();
    }
    // TODO: remove in next major
    console.warn("<Observer inject=.../> is no longer supported. Please use inject on the enclosing component instead");
    var InjectComponent = inject(observerInject)(component);
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(InjectComponent, null);
});

Observer.displayName = "Observer";

var ObserverPropsCheck = function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    if (typeof props[key] === "function" && typeof props[extraKey] === "function") {
        return new Error("Invalid prop,do not use children and render in the same time in`" + componentName);
    }

    if (typeof props[key] === "function" || typeof props[extraKey] === "function") {
        return;
    }
    return new Error("Invalid prop `" + propFullName + "` of type `" + _typeof(props[key]) + "` supplied to" + " `" + componentName + "`, expected `function`.");
};

Observer.propTypes = {
    render: ObserverPropsCheck,
    children: ObserverPropsCheck
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(nextProps, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component$$1) {
  var prototype = Component$$1.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component$$1.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component$$1;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component$$1.displayName || Component$$1.name;
    var newApiName =
      typeof Component$$1.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component$$1.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component$$1;
}

var _class;
var _temp;

var specialReactKeys = { children: true, key: true, ref: true };

var Provider = (_temp = _class = function (_Component) {
    inherits(Provider, _Component);

    function Provider(props, context) {
        classCallCheck(this, Provider);

        var _this = possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, props, context));

        _this.state = props || {};
        return _this;
    }

    createClass(Provider, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react__["Children"].only(this.props.children);
        }
    }, {
        key: "getChildContext",
        value: function getChildContext() {
            var stores = {};
            // inherit stores
            var baseStores = this.context.mobxStores;
            if (baseStores) for (var key in baseStores) {
                stores[key] = baseStores[key];
            }
            // add own stores
            for (var _key in this.state) {
                if (!specialReactKeys[_key] && _key !== "suppressChangedStoreWarning") stores[_key] = this.props[_key];
            }return {
                mobxStores: stores
            };
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(nextProps, prevState) {
            if (!nextProps) return null;
            if (!prevState) return nextProps;

            // Maybe this warning is too aggressive?
            if (Object.keys(nextProps).length !== Object.keys(prevState).length) console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children");
            if (!nextProps.suppressChangedStoreWarning) for (var key in nextProps) {
                if (!specialReactKeys[key] && prevState[key] !== nextProps[key]) console.warn("MobX Provider: Provided store '" + key + "' has changed. Please avoid replacing stores as the change might not propagate to all children");
            }return nextProps;
        }
    }]);
    return Provider;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class.contextTypes = {
    mobxStores: objectOrObservableObject
}, _class.childContextTypes = {
    mobxStores: objectOrObservableObject.isRequired
}, _temp);

// TODO: kill in next major

polyfill(Provider);

if (!__WEBPACK_IMPORTED_MODULE_1_react__["Component"]) throw new Error("mobx-react requires React to be available");
if (!__WEBPACK_IMPORTED_MODULE_0_mobx__["p" /* spy */]) throw new Error("mobx-react requires mobx to be available");

if (typeof __WEBPACK_IMPORTED_MODULE_2_react_dom__["unstable_batchedUpdates"] === "function") Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* configure */])({ reactionScheduler: __WEBPACK_IMPORTED_MODULE_2_react_dom__["unstable_batchedUpdates"] });else if (typeof unstable_batchedUpdates$1 === "function") Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* configure */])({ reactionScheduler: unstable_batchedUpdates$1 });

var onError = function onError(fn) {
    return errorsReporter.on(fn);
};

/* DevTool support */
// See: https://github.com/andykog/mobx-devtools/blob/d8976c24b8cb727ed59f9a0bc905a009df79e221/src/backend/installGlobalHook.js

if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
    var mobx$1 = { spy: __WEBPACK_IMPORTED_MODULE_0_mobx__["p" /* spy */], extras: { getDebugName: __WEBPACK_IMPORTED_MODULE_0_mobx__["i" /* getDebugName */] } };
    var mobxReact = {
        renderReporter: renderReporter,
        componentByNodeRegistry: componentByNodeRegistry,
        componentByNodeRegistery: componentByNodeRegistry,
        trackComponents: trackComponents
    };
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(mobxReact, mobx$1);
}



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

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

/***/ 1365:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1366);


/***/ }),

/***/ 1366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_apps_runner_Runner__ = __webpack_require__(1367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__init__ = __webpack_require__(1394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_runner_scss__ = __webpack_require__(1419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_runner_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_runner_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_TelemetryHelpers__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_empty_states_CrashHandler__ = __webpack_require__(195);










if (false) {
  window.React = React;
} else
{
  window.onbeforeunload = () => {
    return false;
  };
}

const rootEl = document.getElementsByClassName('app-root')[0];

__WEBPACK_IMPORTED_MODULE_4__init__["a" /* default */].init(err => {

  if (err) {
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_empty_states_CrashHandler__["a" /* default */], { showError: true }), rootEl);
    return;
  }

  Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_empty_states_CrashHandler__["a" /* default */], null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], { store: __WEBPACK_IMPORTED_MODULE_4__init__["a" /* default */].runnerStore },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_apps_runner_Runner__["a" /* default */], null))),


  rootEl,
  () => {
    let loadTime = Object(__WEBPACK_IMPORTED_MODULE_6__utils_TelemetryHelpers__["a" /* getWindowLoadTime */])();
    __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('app_performance_metric', 'runner_window_loaded', null, null, { load_time: loadTime });
  });

});

/***/ }),

/***/ 1367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Runner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_notification_system__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_notification_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_notification_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_AppNotificationStylesForRunner__ = __webpack_require__(1368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RunnerHeaderContainer__ = __webpack_require__(1369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RunnerRunsContainer__ = __webpack_require__(1371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RunnerResultsContainer__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RunnerSummaryContainer__ = __webpack_require__(1387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RunnerMissingWorkspaceModalContainer__ = __webpack_require__(1393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_uid_helper__ = __webpack_require__(73);
var _dec, _class;












const keyMap = {
  openConsole: 'mod+alt+c',
  increaseUIZoom: 'mod+=',
  decreaseUIZoom: 'mod+-',
  resetUIZoom: 'mod+0' };let




























Runner = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(state => {let user = state.user,selection = state.selection,runs = state.runs,activeWorkspaceId = selection.workspace.id,activeWorkspace = activeWorkspaceId && _.find(state.workspaces, ['id', activeWorkspaceId]) || {};if (!_.isEmpty(activeWorkspace)) {runs = _.chain(runs).pickBy(run => _.isEqual(activeWorkspaceId, run.workspace)).value();}return { selection: state.selection, workspaces: state.workspaces, runs, collections: state.collections, archivedCollections: state.archivedCollections, environments: state.environments, requests: state.requests, folders: state.folders, user: state.user, activeWorkspace };}), _dec(_class = class Runner extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["b" /* RUNNER_TAB_RUNS */],
      activeRun: null,
      initializedTargets: false };


    this.model = pm.runner;
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleOpenResults = this.handleOpenResults.bind(this);
    this.handleOpenIteration = this.handleOpenIteration.bind(this);
    this.handleTargetInitialization = this.handleTargetInitialization.bind(this);
  }

  componentDidMount() {
    pm.alerts.setNotificationComponent(this.refs.notificationSystem);
  }

  componentWillReceiveProps(nextProps) {
    let activeWorkspace = this.props.selection.workspace.id,
    nextActiveWorkspace = nextProps.selection.workspace.id;

    if (activeWorkspace !== nextActiveWorkspace || !this.getActiveRun()) {
      this.setState({
        activeTab: __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["b" /* RUNNER_TAB_RUNS */],
        activeRun: null });

    }
  }

  getKeyMapHandlers() {
    return {
      increaseUIZoom: this.handleIncreaseUIZoom,
      decreaseUIZoom: this.handleDecreaseUIZoom,
      resetUIZoom: this.handleResetUIZoom };

  }

  getRunningStatus() {
    if (!this.props.runs) {
      return false;
    }
    let runningRuns = _.find(this.props.runs, run => {
      return run.status === 'running';
    });
    return Boolean(runningRuns);
  }

  handleTargetInitialization() {
    this.setState({ initializedTargets: true });
  }

  handleIncreaseUIZoom() {
    pm.uiZoom.increase();
  }

  handleDecreaseUIZoom() {
    pm.uiZoom.decrease();
  }

  handleResetUIZoom() {
    pm.uiZoom.reset();
  }

  handleLinkClick(link) {
    pm.app.openExternalLink(link);
  }

  handleTabChange(tab) {
    this.setState({ activeTab: tab });
  }

  handleOpenResults(runId) {
    pm.runner.fetchRun(runId, () => {
      if (!this.props.runs[runId]) {
        this.setState({ activeRun: null });
      } else
      {
        this.setState({
          activeTab: __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["a" /* RUNNER_TAB_RESULTS */],
          activeRun: runId });

      }
    });
  }

  handleOpenIteration(runId, iteration) {
    this.setState({
      activeTab: __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["a" /* RUNNER_TAB_RESULTS */],
      activeRun: runId },
    () => {
      this.refs.results && this.refs.results.handleIterationJump(iteration);
    });
  }

  handleExport(source, runId) {
    switch (source) {
      case __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["b" /* RUNNER_TAB_RUNS */]:
        __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'download', 'recent_runs');
        break;
      case __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["a" /* RUNNER_TAB_RESULTS */]:
        __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'download', 'run_results');
        break;
      case __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["c" /* RUNNER_TAB_SUMMARY */]:
        __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'download', 'run_summary');
        break;}

    pm.runner.exportRun(runId);
  }

  getActiveRun() {
    return this.props.runs[this.state.activeRun] || false;
  }

  render() {
    let activeRun = this.getActiveRun();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__["a" /* default */], {
          handlers: this.getKeyMapHandlers(),
          keyMap: keyMap },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'app-runner' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'dropdown-root', style: { width: 0, height: 0 } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__RunnerHeaderContainer__["a" /* default */], {
            disableSwitcher: this.getRunningStatus(),
            dispatch: this.props.dispatch,
            activeTab: activeRun ? this.state.activeTab : __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["b" /* RUNNER_TAB_RUNS */],
            onLinkClick: this.handleLinkClick,
            onTabChange: this.handleTabChange,
            user: this.props.user,
            workspaces: this.props.workspaces,
            activeWorkspace: this.props.activeWorkspace,
            user: this.props.user }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-contents' },

            (this.state.activeTab === __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["b" /* RUNNER_TAB_RUNS */] || !activeRun) &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__RunnerRunsContainer__["a" /* default */], {
              collections: this.props.collections,
              archivedCollections: this.props.archivedCollections,
              environments: this.props.environments,
              dispatch: this.props.dispatch,
              runs: this.props.runs,
              selection: this.props.selection,
              onExport: this.handleExport.bind(this, __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["b" /* RUNNER_TAB_RUNS */]),
              onOpenRun: this.handleOpenResults,
              requests: this.props.requests,
              folders: this.props.folders,
              activeWorkspace: this.props.activeWorkspace,
              handleTargetInitialization: this.handleTargetInitialization,
              initializedTargets: this.state.initializedTargets }),



            this.state.activeTab === __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["a" /* RUNNER_TAB_RESULTS */] && activeRun &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__RunnerResultsContainer__["a" /* default */], {
              requests: this.props.requests,
              collections: this.props.collections,
              folders: this.props.folders,
              environments: this.props.environments,
              active: this.state.activeTab === __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["a" /* RUNNER_TAB_RESULTS */] && !_.isEmpty(this.state.activeRun),
              dispatch: this.props.dispatch,
              ref: 'results',
              run: activeRun,
              runId: activeRun.id,
              selection: this.props.selection,
              onExport: this.handleExport.bind(this, __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["a" /* RUNNER_TAB_RESULTS */]),
              onNewRun: this.handleTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["b" /* RUNNER_TAB_RUNS */]),
              onOpenRun: this.handleOpenResults,
              onOpenSummary: this.handleTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["c" /* RUNNER_TAB_SUMMARY */]),
              activeWorkspace: this.props.activeWorkspace }),



            this.state.activeTab === __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["c" /* RUNNER_TAB_SUMMARY */] &&
            activeRun &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__RunnerSummaryContainer__["a" /* default */], {
              active: this.state.activeTab === __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["c" /* RUNNER_TAB_SUMMARY */] && !_.isEmpty(this.state.activeRun),
              dispatch: this.props.dispatch,
              run: activeRun,
              runId: activeRun.id,
              onExport: this.handleExport.bind(this, __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["c" /* RUNNER_TAB_SUMMARY */]),
              onNewRun: this.handleTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["b" /* RUNNER_TAB_RUNS */]),
              onOpenIteration: this.handleOpenIteration,
              onOpenResults: this.handleTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_11__constants_RunnerTabConstants__["a" /* RUNNER_TAB_RESULTS */]),
              onOpenRun: this.handleOpenResults,
              environments: this.props.environments,
              activeWorkspace: this.props.activeWorkspace })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_notification_system___default.a, {
            allowHTML: true,
            ref: 'notificationSystem',
            style: __WEBPACK_IMPORTED_MODULE_3__constants_AppNotificationStylesForRunner__["a" /* default */] }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__RunnerMissingWorkspaceModalContainer__["a" /* default */], null))));



  }}) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppNotificationStyles__ = __webpack_require__(717);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

/* harmony default export */ __webpack_exports__["a"] = (_extends({},
__WEBPACK_IMPORTED_MODULE_0__AppNotificationStyles__["a" /* default */], {
  Containers: {
    DefaultStyle: {
      zIndex: 110,
      width: 360 },

    tr: { bottom: '0px', top: 'unset' } } }));

/***/ }),

/***/ 1369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerHeaderContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_runner_RunnerHeader__ = __webpack_require__(1370);
var _class;

let


RunnerHeaderContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RunnerHeaderContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      activeWorkspaceTab: 'personal' };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleSwitchWorkspace = this.handleSwitchWorkspace.bind(this);
  }

  handleToggle(isOpen = this.state.isOpen) {
    this.setState({ isOpen });
  }

  handleTabChange(activeWorkspaceTab) {
    this.setState({ activeWorkspaceTab });
  }

  handleSwitchWorkspace(id) {
    this.handleToggle(false);
    pm.runner.changeSelection('workspace', id);
  }

  getFilteredWorkspaces() {
    let personalWorkspaces = [];
    let teamWorkspaces = [];

    _.forEach(this.props.workspaces, workspace => {
      if (workspace.type === 'personal') {
        personalWorkspaces.push(workspace);
      } else
      if (workspace.type === 'team') {
        teamWorkspaces.push(workspace);
      }
    });

    return {
      personalWorkspaces: _.sortBy(personalWorkspaces, workspace => _.toLower(workspace.name)),
      teamWorkspaces: _.sortBy(teamWorkspaces, workspace => _.toLower(workspace.name)) };

  }

  isUserLoggedIn() {
    return this.props.user.id !== '0' ? true : false;
  }

  render() {
    let workspaces = this.getFilteredWorkspaces();
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_runner_RunnerHeader__["a" /* default */], {
        disableSwitcher: this.props.disableSwitcher,
        activeTab: this.props.activeTab,
        onLinkClick: this.props.onLinkClick,
        onTabChange: this.props.onTabChange,
        activeWorkspaceTab: this.state.activeWorkspaceTab,
        activeWorkspace: this.props.activeWorkspace,
        isOpen: this.state.isOpen,
        personalWorkspaces: workspaces.personalWorkspaces,
        teamWorkspaces: workspaces.teamWorkspaces,
        user: this.props.user,
        onToggle: this.handleToggle,
        onWorkspaceTabChange: this.handleTabChange,
        onSwitchWorkspace: this.handleSwitchWorkspace }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workspaces_WorkspaceSwitcher__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_RunnerTabConstants__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_AppUrlConstants__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(22);
var _class;








let


RunnerHeader = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RunnerHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleNewmanLink = this.handleNewmanLink.bind(this);
    this.handleDocsLink = this.handleDocsLink.bind(this);
  }

  isSwitcherDisabled() {
    return this.props.disableSwitcher || this.props.activeTab !== 'runner';
  }

  handleNewmanLink() {
    this.props.onLinkClick && this.props.onLinkClick('https://www.npmjs.com/package/newman');
  }

  handleDocsLink() {
    this.props.onLinkClick && this.props.onLinkClick(__WEBPACK_IMPORTED_MODULE_5__constants_AppUrlConstants__["L" /* RUNNER_DOCS */]);
  }

  handleAddMonitors() {
    pm.app.openExternalLink(window.postman_monitors_url);
    __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('monitor', 'initiate_create', 'runner');
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__tab runner-header__section-left__tab--runner' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-header__section-left__runner',
                onClick: this.props.onTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_4__constants_RunnerTabConstants__["b" /* RUNNER_TAB_RUNS */]) }, 'Collection Runner')),






          (this.props.activeTab === __WEBPACK_IMPORTED_MODULE_4__constants_RunnerTabConstants__["a" /* RUNNER_TAB_RESULTS */] || this.props.activeTab === __WEBPACK_IMPORTED_MODULE_4__constants_RunnerTabConstants__["c" /* RUNNER_TAB_SUMMARY */]) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__tab runner-header__section-left__tab--results' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__arrow runner-header__section-left__results-pre-arrow' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-header__section-left__results',
                onClick: this.props.onTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_4__constants_RunnerTabConstants__["a" /* RUNNER_TAB_RESULTS */]) }, 'Run Results'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__arrow runner-header__section-left__results-post-arrow' })),





          this.props.activeTab === __WEBPACK_IMPORTED_MODULE_4__constants_RunnerTabConstants__["c" /* RUNNER_TAB_SUMMARY */] &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__tab runner-header__section-left__tab--summary' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__arrow runner-header__section-left__summary-pre-arrow' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-header__section-left__summary',
                onClick: this.props.onTabChange.bind(this, __WEBPACK_IMPORTED_MODULE_4__constants_RunnerTabConstants__["c" /* RUNNER_TAB_SUMMARY */]) }, 'Run Summary'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-left__arrow runner-header__section-left__summary-post-arrow' }))),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-center' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__workspaces_WorkspaceSwitcher__["a" /* default */], {
            isSyncEnabled: true,
            teamSyncEnabled: true,
            activeTab: this.props.activeWorkspaceTab,
            activeWorkspace: this.props.activeWorkspace,
            isOpen: this.props.isOpen,
            personalWorkspaces: this.props.personalWorkspaces,
            teamWorkspaces: this.props.teamWorkspaces,
            onToggle: this.props.onToggle,
            onTabChange: this.props.onWorkspaceTabChange,
            onSwitchWorkspace: this.props.onSwitchWorkspace,
            disableActions: true,
            disable: this.props.disableSwitcher,
            isLoggedIn: !!this.props.user,
            disable: this.isSwitcherDisabled() })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-header__section-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'runner-header__section-right__newman',
              size: 'small',
              type: 'secondary',
              onClick: this.handleNewmanLink }, 'Run In Command Line'),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'runner-header__section-right__docs',
              size: 'small',
              type: 'secondary',
              onClick: this.handleDocsLink }, 'Docs'))));






  }}) || _class;

/***/ }),

/***/ 1371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRunsContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_keymaps_KeyMaps__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_runner_RunnerRunsSelector__ = __webpack_require__(1372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_runner_RunnerRecentRuns__ = __webpack_require__(1374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(22);
var _class;







const keyMap = { 'start': 'meta+enter' };let


RunnerRunsContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RunnerRunsContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { runFilter: '' };

    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.startRun = this.startRun.bind(this);
    this.handleImportRun = this.handleImportRun.bind(this);
    this.handleDeleteRun = this.handleDeleteRun.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  getKeyMapHandlers() {
    return { 'start': this.startRun };
  }

  scrollSelectedItemIntoView() {
    this.refs.selector &&
    this.refs.selector.scrollSelectedItemIntoView &&
    this.refs.selector.scrollSelectedItemIntoView();
  }

  handleSelectionChange(field, value) {
    pm.runner.changeSelection(field, value);
  }

  startRun() {
    if (!this.props.selection.target.collection) {
      return;
    }
    pm.runner.startRun(this.props.selection, (error, runId) => {
      __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'initiate_run', 'first_time', _.parseInt(this.props.selection.iterations) || 0);
      if (error) {
        console.error(error);
      }
      this.props.onOpenRun && this.props.onOpenRun(runId);
    });
  }

  handleDeleteRun(runId) {
    pm.runner.deleteRun(runId);
  }

  handleImportRun(files) {
    pm.runner.importRun(files);
  }

  handleFilterChange(value) {
    this.setState({ runFilter: value });
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_keymaps_KeyMaps__["a" /* default */], {
          handlers: this.getKeyMapHandlers(),
          keyMap: keyMap },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_runner_RunnerRunsSelector__["a" /* default */], {
            ref: 'selector',
            selected: this.props.selection,
            onChange: this.handleSelectionChange,
            onStartRun: this.startRun,
            collections: this.props.collections,
            archivedCollections: this.props.archivedCollections,
            environments: this.props.environments,
            requests: this.props.requests,
            folders: this.props.folders,
            activeWorkspace: this.props.activeWorkspace,
            handleTargetInitialization: this.props.handleTargetInitialization,
            initializedTargets: this.props.initializedTargets }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_runner_RunnerRecentRuns__["a" /* default */], {
            selected: this.props.selection,
            environments: this.props.environments,
            runFilter: this.state.runFilter,
            runs: this.props.runs,
            onDeleteRun: this.handleDeleteRun,
            onExportRun: this.props.onExport,
            onFilterChange: this.handleFilterChange,
            onImportRun: this.handleImportRun,
            onOpenRun: this.props.onOpenRun,
            activeWorkspace: this.props.activeWorkspace }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRunsSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_uid_helper__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__explorer_CollectionExplorer__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Tooltips__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Inputs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_InputSelect__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_SearchHighlighter__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Icons_CloseIcon__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_Icons_InformationIcon__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_RunnerDataFileTypeConstants__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_RunnerSaveResponseConstants__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__RunnerSelectorFilePreview__ = __webpack_require__(1373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_GetWorkspaceEntities__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_CollectionSorter__ = __webpack_require__(429);
var _class;















let


RunnerRunsSelector = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RunnerRunsSelector extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      dataArray: [],
      isPreviewModalOpen: false,
      isLogResTooltipVisible: false,
      isVariableTooltipVisible: false };


    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleFilePreview = this.handleFilePreview.bind(this);
    this.handleCloseFilePreview = this.handleCloseFilePreview.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
    this.handleEnvSelect = this.handleEnvSelect.bind(this);
  }

  getSelectedEnvironment() {
    let environments = this.getEnvironments(),
    environment = _.find(environments, ['id', this.props.selected.environment]),
    envName = environment ? environment.name : '';

    return envName;
  }

  getDataArray(callback) {
    if (!this.props.selected.dataFile) {
      return callback('No file selected');
    }

    return pm.runner.readFile(this.props.selected.dataFile, (err, data) => {
      if (err) {
        return callback(err);
      }
      return callback(null, data);
    });
  }

  handleFileSelect(fileList) {
    if (_.isEmpty(fileList)) {
      this.refs.dataFile && this.refs.dataFile.clear();
    }
    this.props.onChange && this.props.onChange('data', fileList);
  }

  handleFilePreview() {
    this.getDataArray((err, dataArray) => {
      if (!err) {
        this.setState({
          dataArray: dataArray,
          isPreviewModalOpen: true });

      }
    });
  }

  handleCloseFilePreview() {
    this.setState({ isPreviewModalOpen: false });
  }

  showTooltip(tooltipKey) {
    this.setState({ [tooltipKey]: true });
  }

  hideTooltip(tooltipKey) {
    this.setState({ [tooltipKey]: false });
  }

  handleEnvSelect(selectionIndex) {
    let selectedEnvId = null,
    environments = this.getEnvironments();
    if (selectionIndex > 0 && selectionIndex <= environments.length) {
      selectedEnvId = environments[selectionIndex - 1].id;
    }

    this.props.onChange && this.props.onChange('environment', selectedEnvId);
  }

  renderEnvItem(list, index, search) {
    let name = index === 0 ? 'No Environment' : list[index - 1].name;
    if (search) {
      if (!_.includes(name.toLowerCase(), search.toLowerCase())) {
        return null;
      }
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-select-item' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_SearchHighlighter__["a" /* default */], {
            source: name,
            query: search })));



    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-select-item' }, name);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.initializedTargets && !_.isEqual(
    this.getTargetData(this.props),
    this.getTargetData(nextProps)))
    {
      let target = this.getTargetData(nextProps);
      this.refs &&
      this.refs.collectionExplorer &&
      this.refs.collectionExplorer.setInitialTargets(target);
      this.props.handleTargetInitialization();
    }
  }

  getTargetData(props = this.props) {
    let targetData = {
      collection: null,
      folder: null,
      name: null };


    if (_.get(props, 'selected.target')) {
      let targetIds = _.get(props, 'selected.target');
      targetIds.collection && (
      targetData.collection = _.find(props.collections, ['id', targetIds.collection]) || null) && (
      targetData.name = targetData.collection.name);

      targetIds.folder && (
      targetData.folder = _.find(props.folders, ['id', targetIds.folder]) || null) && (
      targetData.name = targetData.folder.name);
    }

    return targetData;
  }

  getActiveWorkspaceCollectionEntities() {
    let collections = [],
    folders = [],
    requests = [];

    if (_.isEmpty(this.props.activeWorkspace)) {
      return [collections, folders, requests];
    }

    collections = this.getCollections();
    if (_.isEmpty(collections)) {
      return [collections, folders, requests];
    }

    folders = _.chain(this.props.folders).
    filter(folder => _.find(collections, ['id', folder.collection])).
    compact().
    value();

    requests = _.chain(this.props.requests).
    filter(request => _.find(collections, ['id', request.collection])).
    compact().
    value();

    return [collections, folders, requests];
  }

  getCollections() {
    let collections = Object(__WEBPACK_IMPORTED_MODULE_15__utils_GetWorkspaceEntities__["a" /* getWorkspaceEntities */])(this.props.activeWorkspace, this.props.collections, 'collections');
    return Object(__WEBPACK_IMPORTED_MODULE_16__utils_CollectionSorter__["a" /* getRunnableCollections */])(collections, this.props.archivedCollections);
  }

  getEnvironments() {
    let environments = Object(__WEBPACK_IMPORTED_MODULE_15__utils_GetWorkspaceEntities__["a" /* getWorkspaceEntities */])(this.props.activeWorkspace, this.props.environments, 'environments');
    return _.sortBy(environments, environment => _.toLower(environment.name));
  }

  render() {
    let [collections, folders, requests] = this.getActiveWorkspaceCollectionEntities(),
    selectedEnv = this.props.selected.environment,
    selectedEnvIndex = 0,
    target = this.getTargetData(),
    environments = this.getEnvironments();

    if (selectedEnv) {
      selectedEnvIndex = _.findIndex(environments, env => {return env.id === selectedEnv;}) + 1;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item runner-runs-selector__item--target' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--target' }, 'Choose a collection or folder'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__explorer_CollectionExplorer__["a" /* default */], {
            key: this.props.activeWorkspace.id,
            ref: 'collectionExplorer',
            initialSelection: target,
            disableCreate: true,
            onSelect: this.props.onChange.bind(this, 'target'),
            collections: collections,
            folders: folders,
            requests: requests })),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item  runner-runs-selector__item--environment' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--environment' }, 'Environment'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_InputSelect__["a" /* InputSelect */], {
            className: 'runner-runs-selector__environment',
            hideCancelOnBlur: true,
            selectAllOnFocus: true,
            showToggleButton: true,
            defaultIndex: selectedEnvIndex === -1 ? 0 : selectedEnvIndex,
            getInputValue: index => {
              return index === 0 ? 'No Environment' : _.get(environments[index - 1], 'name', '');
            },
            isSearchable: index => {
              return index > 0;
            },
            optionCount: _.size(environments) + 1,
            optionRenderer: (index, search) => {
              return this.renderEnvItem(environments, index, search);
            },
            onSelect: this.handleEnvSelect })),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item runner-runs-selector__item--iterations' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--iterations' }, 'Iterations'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Inputs__["b" /* Input */], {
            className: 'runner-runs-selector__item__value runner-runs-selector__item__value--iterations',
            inputStyle: 'box',
            type: 'text',
            value: this.props.selected.iterations,
            onChange: this.props.onChange.bind(this, 'iterations') })),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item runner-runs-selector__item--delay' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--delay' }, 'Delay'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Inputs__["b" /* Input */], {
            className: 'runner-runs-selector__item__value runner-runs-selector__item__value--delay',
            inputStyle: 'box',
            type: 'text',
            value: this.props.selected.delay,
            onChange: this.props.onChange.bind(this, 'delay') }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__postfix runner-runs-selector__postfix--delay' }, 'ms')),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item runner-runs-selector__item--response' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--response' }, 'Log Responses'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["a" /* Dropdown */], {
              className: 'runner-runs-selector__response',
              onSelect: this.props.onChange.bind(this, 'saveResponse') },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["b" /* DropdownButton */], {
                size: 'small',
                type: 'secondary' },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Buttons__["a" /* Button */], { className: 'runner-runs-selector-selected-save-response-label' },

                __WEBPACK_IMPORTED_MODULE_13__constants_RunnerSaveResponseConstants__["d" /* RUNNER_SAVE_RESPONSES_LABELS */][this.props.selected.saveResponse])),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["c" /* DropdownMenu */], { fluid: true },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_13__constants_RunnerSaveResponseConstants__["a" /* RUNNER_SAVE_ALL_RESPONSES */] }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'For all requests')),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_13__constants_RunnerSaveResponseConstants__["b" /* RUNNER_SAVE_FAILED_RESPONSES */] }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'For failed requests')),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_13__constants_RunnerSaveResponseConstants__["c" /* RUNNER_SAVE_NO_RESPONSES */] }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'For no requests')))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__postfix runner-runs-selector__postfix--response' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-runs-selector__postfix-icon runner-runs-selector__postfix-icon--response',
                ref: 'logResTooltipTarget',
                onMouseEnter: this.showTooltip.bind(this, 'isLogResTooltipVisible'),
                onMouseLeave: this.hideTooltip.bind(this, 'isLogResTooltipVisible') },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_Icons_InformationIcon__["a" /* default */], null)),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Tooltips__["a" /* Tooltip */], {
                show: this.state.isLogResTooltipVisible,
                refElement: this.refs.logResTooltipTarget,
                placement: 'right',
                className: 'runner-runs-selector__postfix-tooltip',
                immediate: true },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Tooltips__["b" /* TooltipBody */], null, 'Logging responses allows you to view response headers and bodies for the request. This might impact performance on larger collection runs.')))),






        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item runner-runs-selector__item--data-file' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--data-file' }, 'Data'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Buttons__["a" /* Button */], {
              className: 'runner-runs-selector__item__value runner-runs-selector__item__value--data-file',
              size: 'small',
              type: 'secondary' }, 'Select File'),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Inputs__["b" /* Input */], {
            className: 'runner-runs-selector__item__value runner-runs-selector__item__value--data-file',
            type: 'file',
            ref: 'dataFile',
            onChange: this.handleFileSelect }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__postfix runner-runs-selector__postfix--data-file' },
            this.props.selected.fileName || ''),


          this.props.selected.dataFile &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Buttons__["a" /* Button */], {
              className: 'runner-runs-selector__postfix--data-file-remove',
              type: 'icon',
              onClick: this.handleFileSelect.bind(this, []) },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Icons_CloseIcon__["a" /* default */], { className: 'runner-runs-selector__postfix--data-file-remove-icon' }))),





        this.props.selected.dataFile &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item runner-runs-selector__item--data-file-type' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--data-file-type' }, 'Data File Type'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["a" /* Dropdown */], {
              className: 'runner-runs-selector__item__value runner-runs-selector__item__value--data-file-type',
              onSelect: this.props.onChange.bind(this, 'dataType') },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["b" /* DropdownButton */], {
                size: 'small',
                type: 'secondary' },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Buttons__["a" /* Button */], { className: 'runner-runs-selector__item__value--data-file-type__selected' },
                this.props.selected.fileType || __WEBPACK_IMPORTED_MODULE_12__constants_RunnerDataFileTypeConstants__["c" /* RUNNER_DATA_FILE_TYPE_UNDETERMINED */])),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["c" /* DropdownMenu */], null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_RunnerDataFileTypeConstants__["b" /* RUNNER_DATA_FILE_TYPE_JSON */], className: 'dropdown-menu-item--JSON' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, __WEBPACK_IMPORTED_MODULE_12__constants_RunnerDataFileTypeConstants__["b" /* RUNNER_DATA_FILE_TYPE_JSON */])),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_RunnerDataFileTypeConstants__["a" /* RUNNER_DATA_FILE_TYPE_CSV */], className: 'dropdown-menu-item--CSV' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, __WEBPACK_IMPORTED_MODULE_12__constants_RunnerDataFileTypeConstants__["a" /* RUNNER_DATA_FILE_TYPE_CSV */])),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_RunnerDataFileTypeConstants__["c" /* RUNNER_DATA_FILE_TYPE_UNDETERMINED */], className: 'dropdown-menu-item--Undetermined' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, __WEBPACK_IMPORTED_MODULE_12__constants_RunnerDataFileTypeConstants__["c" /* RUNNER_DATA_FILE_TYPE_UNDETERMINED */])))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Buttons__["a" /* Button */], {
              className: 'runner-runs-selector__item__value--data-file-preview',
              size: 'small',
              type: 'secondary',
              onClick: this.handleFilePreview }, 'Preview')),





        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__RunnerSelectorFilePreview__["a" /* default */], {
          dataArray: this.state.dataArray,
          isOpen: this.state.isPreviewModalOpen,
          handleClose: this.handleCloseFilePreview }),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__item  runner-runs-selector__item--persist' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__meta runner-runs-selector__meta--persist' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Inputs__["a" /* Checkbox */], {
              checked: this.props.selected.persist,
              onChange: this.props.onChange.bind(this, 'persist') })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'runner-runs-selector__item__value runner-runs-selector__item__value--persist',
              onClick: this.props.onChange.bind(this, 'persist', !this.props.selected.persist) }, 'Keep variable values'),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-runs-selector__postfix runner-runs-selector__postfix--persist' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-runs-selector__postfix-icon runner-runs-selector__postfix-icon--persist',
                ref: 'variableTooltipTarget',
                onMouseEnter: this.showTooltip.bind(this, 'isVariableTooltipVisible'),
                onMouseLeave: this.hideTooltip.bind(this, 'isVariableTooltipVisible') },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_Icons_InformationIcon__["a" /* default */], null)),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Tooltips__["a" /* Tooltip */], {
                show: this.state.isVariableTooltipVisible,
                refElement: this.refs.variableTooltipTarget,
                placement: 'right',
                className: 'runner-runs-selector__postfix-tooltip',
                immediate: true },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Tooltips__["b" /* TooltipBody */], null, 'Enabling this will write the value of the variables at the end of the run to it\'s current value in the session.')))),






        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Buttons__["a" /* Button */], {
            className: 'runner-runs-selector__start-test',
            disabled: !target.collection,
            type: 'primary',
            onClick: this.props.onStartRun },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, target && target.name ? `Run ${target.name}` : 'Start Run'))));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerPreviewDataModalContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Modals__ = __webpack_require__(413);
var _class;

let


RunnerPreviewDataModalContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RunnerPreviewDataModalContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.handleClose && this.props.handleClose();
  }

  getCustomStyles() {
    return {
      marginTop: '10vh',
      height: '80vh',
      width: '700px' };

  }

  computeKeysArray() {
    let dataArray = this.props.dataArray,
    keys = ['Iteration'];
    if (_.isEmpty(dataArray)) {
      return keys;
    }

    for (var key in dataArray[0]) {
      if (dataArray[0].hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }

  render() {
    let keys = this.computeKeysArray();
    let dataArray = this.props.dataArray;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Modals__["a" /* Modal */], {
          isOpen: this.props.isOpen,
          onRequestClose: this.handleClose,
          customStyles: this.getCustomStyles() },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Modals__["d" /* ModalHeader */], null, 'PREVIEW DATA'),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Modals__["b" /* ModalContent */], null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'preview-data-modal-content-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'preview-data-header-wrapper' },

              _.map(keys, (key, index) => {
                return (
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                      className: 'preview-data-header',
                      key: String(key) + index },

                    key));


              })),



            dataArray && dataArray.length > 0 &&
            _.map(dataArray, (data, dataIndex) => {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                    className: 'preview-data-header-wrapper',
                    key: 'header' + dataIndex },


                  _.map(keys, (key, index) => {
                    return (
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                          className: 'preview-data-value',
                          key: String(key) + index + dataIndex },


                        index === 0 ?
                        dataIndex + 1 :
                        JSON.stringify(data[key])));



                  })));



            })))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRecentRuns; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RunnerRecentRunsHeader__ = __webpack_require__(1375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RunnerRecentRunsList__ = __webpack_require__(1376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_GetWorkspaceEntities__ = __webpack_require__(389);



let

RunnerRecentRuns = class RunnerRecentRuns extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getEnvironments() {
    return Object(__WEBPACK_IMPORTED_MODULE_3__utils_GetWorkspaceEntities__["a" /* getWorkspaceEntities */])(this.props.activeWorkspace, this.props.environments, 'environments');
  }

  render() {
    let environments = this.getEnvironments();
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__RunnerRecentRunsHeader__["a" /* default */], {
          runFilter: this.props.runFilter,
          onFilterChange: this.props.onFilterChange,
          onImportRun: this.props.onImportRun }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__RunnerRecentRunsList__["a" /* default */], {
          environments: environments,
          runFilter: this.props.runFilter,
          runs: this.props.runs,
          onDeleteRun: this.props.onDeleteRun,
          onExportRun: this.props.onExportRun,
          onOpenRun: this.props.onOpenRun })));



  }};

/***/ }),

/***/ 1375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRecentRunsHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Inputs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(31);


let

RunnerRecentRunsHeader = class RunnerRecentRunsHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleImport = this.handleImport.bind(this);
  }

  handleImport(files) {
    this.props.onImportRun && this.props.onImportRun(files);
    this.refs.input && this.refs.input.clear();
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header__section-left' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header__tabs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header__tab' }, 'Recent Runs'))),





        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__header__section-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["b" /* Input */], {
            className: 'runner-recent-runs__header__search',
            inputStyle: 'search',
            placeholder: 'Type to Filter',
            query: this.props.runFilter,
            onCancel: this.props.onFilterChange,
            onChange: this.props.onFilterChange }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'runner-recent-runs__header__import',
              size: 'small',
              type: 'primary' }, 'Import Test Run'),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["b" /* Input */], {
            className: 'runner-recent-runs__header__import-selector',
            ref: 'input',
            type: 'file',
            onChange: this.handleImport }))));




  }};

/***/ }),

/***/ 1376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRecentRunsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RunnerRecentRunsListItem__ = __webpack_require__(1377);

let

RunnerRecentRunsList = class RunnerRecentRunsList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getOrderedRuns(runs) {
    return _.orderBy(runs, run => {
      return run.createdAt;
    }, 'desc');
  }

  getFilteredRuns(runs, filter) {
    return _.filter(runs, run => {
      try {
        return _.includes(run.name.toLowerCase(), filter.toLowerCase());
      }
      catch (e) {
        return false;
      }
    });
  }

  getEnvironmentName(envId) {
    let environment = _.find(this.props.environments, ['id', envId]);
    if (!environment) {
      return 'No Environment';
    }
    return environment.name;
  }

  render() {
    const runs = this.props.runs;
    const orderedRuns = this.getOrderedRuns(runs);
    const filteredRuns = this.getFilteredRuns(orderedRuns, this.props.runFilter);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list' },

        _.map(filteredRuns, run => {
          let environment = this.getEnvironmentName(run.environment);
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__RunnerRecentRunsListItem__["a" /* default */], {
              key: run.id,
              run: run,
              environment: environment,
              onDeleteRun: this.props.onDeleteRun,
              onExportRun: this.props.onExportRun,
              onOpenRun: this.props.onOpenRun }));


        }),


        !_.isEmpty(orderedRuns) &&
        _.isEmpty(filteredRuns) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-empty-list-item' }, 'No runs with that name.'),




        _.isEmpty(orderedRuns) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-empty-list-item' }, 'You don\u2019t have any runs yet. Select a collection or folder to start a run.')));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerRecentRunsListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_DownloadIcon__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_DeleteIcon__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(22);






let

RunnerRecentRunsListItem = class RunnerRecentRunsListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getIndicatorClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-recent-runs__runs-list-item__indicator': true,
      'is-running': this.props.run.status === 'running',
      'is-stopped': this.props.run.status === 'stopped',
      'is-failed': this.props.run.status === 'finished' && this.props.run.failedTestCount > 0,
      'is-passed': this.props.run.status === 'finished' && this.props.run.failedTestCount === 0 });

  }

  getStatusClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-recent-runs__runs-list-item__status': true,
      'is-running': this.props.run.status === 'running',
      'is-stopped': this.props.run.status === 'stopped',
      'is-failed': this.props.run.status === 'finished' && this.props.run.failedTestCount > 0,
      'is-passed': this.props.run.status === 'finished' && this.props.run.failedTestCount === 0 });

  }

  getRunStatus() {
    let run = this.props.run;
    switch (run.status) {
      case 'paused':
      case 'running':
      case 'stopped':
        return run.status.toUpperCase();
      case 'finished':
        return run.failedTestCount === 0 ? 'PASSED' : run.failedTestCount + ' FAILED';
      default:
        return '';}

  }

  handleAction(action, e) {
    e.stopPropagation && e.stopPropagation();
    switch (action) {
      case 'export':
        __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'download', 'recent_runs');
        this.props.onExportRun && this.props.onExportRun(this.props.run.id);
        break;
      case 'delete':
        __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'delete');
        this.props.onDeleteRun && this.props.onDeleteRun(this.props.run.id);
        break;
      default:
        break;}

  }

  render() {
    const run = this.props.run;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'runner-recent-runs__runs-list-item',
          onClick: this.props.onOpenRun.bind(this, run.id) },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__indicator-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getIndicatorClasses() })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__section-left' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__collection' },
            run.name),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__environment' },
            this.props.environment)),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__section-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getStatusClasses() },
            this.getRunStatus()),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__date' },
            __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default.a.getFormattedDateAndTime(run.createdAt))),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-recent-runs__runs-list-item__actions' },

          !_.includes(['running', 'paused'], this.props.run.status) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], {
              className: 'runner-recent-runs__runs-list-item__action runner-recent-runs__runs-list-item__action--export',
              onClick: this.handleAction.bind(this, 'export'),
              tooltip: 'Export results' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_DownloadIcon__["a" /* default */], {
              className: 'runner-recent-runs__runs-list-item__action--export-icon',
              size: 'xs' })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], {
              className: 'runner-recent-runs__runs-list-item__action runner-recent-runs__runs-list-item__action--delete',
              onClick: this.handleAction.bind(this, 'delete'),
              tooltip: 'Delete run' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_DeleteIcon__["a" /* default */], {
              className: 'runner-recent-runs__runs-list-item__action--delete-icon',
              size: 'xs' })))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_keymaps_KeyMaps__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_runner_RunnerResultsHeader__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_runner_RunnerResultsIterationBar__ = __webpack_require__(1380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_runner_RunnerResultsSidebar__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_runner_RunnerResults__ = __webpack_require__(1381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__ = __webpack_require__(22);
var _class;










const keyMap = {
  'scrollLeft': 'left',
  'scrollRight': 'right',
  'goBack': ['del', 'backspace'] };let



RunnerResultsContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RunnerResultsContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      selectedIteration: 0,
      selectedFilter: 'all',
      filteredRun: [] };


    this.handleChangeIteration = this.handleChangeIteration.bind(this);
    this.handleIterationJump = this.handleIterationJump.bind(this);
    this.handleRunAction = this.handleRunAction.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  getKeyMapHandlers() {
    return {
      'scrollLeft': this.handleChangeIteration.bind(this, this.state.selectedIteration - 1),
      'scrollRight': this.handleChangeIteration.bind(this, this.state.selectedIteration + 1),
      'goBack': this.props.onNewRun };

  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-results': true,
      'is-hidden': !this.props.active });

  }

  handleChangeIteration(iteration) {
    let run = this.props.run;
    if (iteration > run.currentIteration || iteration < 0) {
      return;
    }

    this.setState({ selectedIteration: iteration });
  }

  handleIterationJump(iteration) {
    this.handleChangeIteration(iteration);
    this.refs.body && this.refs.body.scroll(iteration);
  }

  handleRunAction(action) {
    switch (action) {
      case 'pause':
      case 'resume':
      case 'stop':
        if (action === 'stop') {
          __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'create', 'stop_run', pm.runner.getTotalRequests(this.props.runId));
        } else {
          __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', action);
        }

        pm.runner.setRunAction(this.props.runId, action);
        break;
      case 'retry':
        __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'initiate_run', 'retry_run', this.props.run.iterations.length);
        pm.runner.setRunAction(this.props.runId, action, (err, runId) => {
          !err && this.props.onOpenRun && this.props.onOpenRun(runId);
          !err && this.setState({ selectedIteration: 0 });
        });
        break;}

  }

  handleOpenConsole() {
    pm.mediator.trigger('newConsoleWindow');
  }

  handleFilterChange(filter) {
    __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'filter', null, filter);
    this.setState({ selectedFilter: filter });
  }

  render() {
    const run = this.props.run;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_keymaps_KeyMaps__["a" /* default */], {
          handlers: this.getKeyMapHandlers(),
          keyMap: keyMap },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getClasses(),
            ref: results => {return results && results.focus();} },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__section-top' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_runner_RunnerResultsHeader__["a" /* default */], {
              requests: this.props.requests,
              collections: this.props.collections,
              folders: this.props.folders,
              environments: this.props.environments,
              showSummaryLink: true,
              run: run,
              onExport: this.props.onExport,
              onNewRun: this.props.onNewRun,
              onRunAction: this.handleRunAction,
              onOpenSummary: this.props.onOpenSummary,
              activeWorkspace: this.props.activeWorkspace })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__section-bottom' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_runner_RunnerResultsSidebar__["a" /* default */], {
              status: _.get(this.props.run, 'status'),
              selectedFilter: this.state.selectedFilter,
              onFilterChange: this.handleFilterChange }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_runner_RunnerResults__["a" /* default */], {
              filter: this.state.selectedFilter,
              ref: 'body',
              run: run,
              selectedIteration: this.state.selectedIteration,
              onIterationChange: this.handleChangeIteration,
              onIterationJump: this.handleIterationJump,
              onOpenConsole: this.handleOpenConsole }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_runner_RunnerResultsIterationBar__["a" /* default */], {
              run: run,
              selectedIteration: this.state.selectedIteration,
              onIterationChange: this.handleIterationJump })))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadialProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(10);
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

/***/ 1380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsIterationBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(22);
var _class;






const ITEM_HEIGHT = 30;let


RunnerResultsIterationBar = __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default()(_class = class RunnerResultsIterationBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { visibleHeight: 0 };

    this.scrollPosition = 0;

    this.setBounds = this.setBounds.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.setBounds();
    window.addEventListener('resize', this.setBounds);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setBounds);
  }

  componentWillReceiveProps(nextProps) {
    let me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);
    let nextScroll = nextProps.selectedIteration * ITEM_HEIGHT;

    if (nextScroll > this.scrollPosition + this.state.visibleHeight) {
      me.scrollTop = this.scrollPosition + this.state.visibleHeight;
      this.handleScroll({ target: { scrollTop: me.scrollTop } });
    } else
    if (nextScroll < this.scrollPosition) {
      me.scrollTop = nextScroll;
      this.handleScroll({ target: { scrollTop: me.scrollTop } });
    }
  }


  isFailed(iteration) {
    return _.some(iteration, request => {
      if (request.error) {
        return true;
      }
      return _.some(request.tests, test => {
        return test.status === 'fail';
      });
    });
  }

  getTabClasses(iteration) {
    let run = this.props.run;

    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'runner-results__iterations__tab': true,
      'is-failed': this.isFailed(run.iterations[iteration]),
      'is-active': this.props.selectedIteration === iteration,
      'is-running': run.status !== 'finished' && run.currentIteration === iteration,
      'is-pending': run.currentIteration < iteration,
      'is-done': run.currentIteration > iteration });

  }

  setBounds() {
    let me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);

    this.setState({ visibleHeight: me.clientHeight });
  }

  handleScroll(e) {
    let scrollPosition = e.target.scrollTop;
    this.scrollPosition = scrollPosition;
  }

  handleIterationChange(iteration) {
    if (this.props.run.currentIteration < iteration) {
      return;
    }
    __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'navigate_iteration');
    this.props.onIterationChange && this.props.onIterationChange(iteration);
  }

  render() {
    const run = this.props.run,
    selectedIteration = this.props.selectedIteration;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'runner-results__iterations__tabs',
          onScroll: this.handleScroll },


        _.map(run.iterations, (iteration, iterationId) => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: this.getTabClasses(iterationId),
                ref: iterationId,
                key: iterationId,
                onClick: this.handleIterationChange.bind(this, iterationId) },

              iterationId + 1));


        })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResults; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_List__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RunnerResultsIterationListItem__ = __webpack_require__(1382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RunnerResultsActivityIndicator__ = __webpack_require__(1386);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};








const ITEM_HEIGHT = 40;
const ITERATION_HEADER_HEIGHT = 20;let

RunnerResults = class RunnerResults extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      animateScroll: false,
      visibleHeight: 0,
      filteredIterations: [],
      iterationHeights: [] };


    this.setBounds = this.setBounds.bind(this);
    this.setIterationHeights = this.setIterationHeights.bind(this);
    this.updateIterationHeights = this.updateIterationHeights.bind(this);
    this._listItem = this._listItem.bind(this);
    this.handleIterationChange = this.handleIterationChange.bind(this);
    this.scroll = this.scroll.bind(this);
    this.handleIterationsReady = this.handleIterationsReady.bind(this);
  }

  componentDidMount() {
    this.setBounds();
    this.filterIterations(this.props.run.iterations, this.props.filter);
    window.addEventListener('resize', this.setBounds);
    pm.uiZoom.on('change', this.setBounds);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setBounds);
    pm.uiZoom.off('change', this.setBounds);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.run.status === 'running') {
      this.setIterationHeights(nextProps.run.iterations);
    }
    if (nextProps.filter !== this.props.filter) {
      this.filterIterations(nextProps.run.iterations, nextProps.filter);
      this.iterations.scroll({ scrollPosition: 0 });
    }
  }

  filterIterations(iterations, filter) {
    let filtered;
    if (filter === 'all') {
      filtered = iterations;
    } else
    {
      filtered = _.map(iterations, iteration => {
        return this.getFilteredIteration(iteration, filter);
      });
    }

    this.setState({ filteredIterations: filtered }, () => {
      this.setIterationHeights(this.state.filteredIterations);
    });
  }

  getFilteredIteration(iteration, filter) {
    let mappedIteration,
    mappedRequest;

    if (filter === 'all') {
      return iteration;
    }

    mappedIteration = _.map(iteration, request => {
      let tests = _.filter(request.tests, test => {
        return test.status === filter;
      });

      if (_.isEmpty(tests)) {
        return false;
      }

      return _extends({},
      request, {
        tests });

    });

    return _.compact(mappedIteration);
  }

  setBounds() {
    let me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);

    this.setState({ visibleHeight: me.clientHeight });
  }

  setIterationHeights(iterations) {
    let iterationHeights;

    iterationHeights = _.map(iterations, iteration => {
      if (_.isEmpty(iteration)) {
        return 0;
      }
      return _.reduce(iteration, (height, request) => {
        return height +
        (
        _.size(request.tests) + (
        request.error || _.isEmpty(request.tests) ? 1 : 0)) *
        ITEM_HEIGHT + // Test heights. At least one item is always present (the error / empty message)
        ITEM_HEIGHT; // Request height
      }, 0) + ITERATION_HEADER_HEIGHT;
    });

    this.setState({
      iterationHeights: iterationHeights,
      filteredIterations: iterations });

  }

  updateIterationHeights(iteration, testCount, isOpen) {
    let iterationHeights = this.state.iterationHeights;
    if (isOpen) {
      // variable data type mismatch (iteration is object above, number here)
      iterationHeights[iteration] += testCount * ITEM_HEIGHT;
    } else
    {
      iterationHeights[iteration] -= testCount * ITEM_HEIGHT;
    }

    this.setState({ iterationHeights: iterationHeights });
  }

  handleIterationChange(nextStart) {
    this.props.onIterationChange && this.props.onIterationChange(nextStart);
  }

  handleIterationsReady(list) {
    if (list) {
      list.scroll({ itemIndex: 0 });
      this.iterations = list;
    }
  }

  scroll(iteration) {
    this.iterations.scroll({ itemIndex: iteration });
  }

  _listItem(listItem, index) {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__RunnerResultsIterationListItem__["a" /* default */], {
        filter: this.props.filter,
        items: listItem,
        iterationId: index,
        key: index,
        parent: this,
        onIterationChange: this.props.onIterationChange,
        onOpenConsole: this.props.onOpenConsole,
        onToggleRequest: this.updateIterationHeights }));


  }

  render() {
    let run = this.props.run;
    let selectedIteration = run.iterations[this.props.selectedIteration];

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__body' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_List__["a" /* default */], {
          animateScroll: true,
          autoScroll: true,
          className: 'runner-results__body__iteration-list',
          'data-iter': 'Iteration ' + (this.props.selectedIteration + 1),
          height: this.state.visibleHeight,
          list: this.state.filteredIterations,
          listItemHeights: this.state.iterationHeights,
          listItemTemplate: this._listItem,
          ref: this.handleIterationsReady,
          onItemRender: this.handleIterationChange }),


        _.includes(['running', 'paused', 'stopped'], run.status) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__RunnerResultsActivityIndicator__["a" /* default */], { run: run }),


        _.includes(['finished', 'stopped'], run.status) &&
        _.isEmpty(this.state.filteredIterations) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__body__empty' }, 'No tests found for the selected filter')));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsIterationListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RunnerResultsRequestListItem__ = __webpack_require__(1383);
var _class;



let


RunnerResultsIterationListItem = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RunnerResultsIterationListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { stuck: false };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.props.parent).addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.props.parent).removeEventListener('scroll', this.handleScroll);
  }

  getHeaderClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'runner-results__body__iteration': true,
      'is-stuck': this.state.stuck });

  }

  handleScroll() {
    let me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this).getBoundingClientRect(),
    parent = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.props.parent);

    if (me.top <= 160 && me.top >= 160 - me.height) {
      this.props.onIterationChange && this.props.onIterationChange(this.props.iterationId);
      !this.state.stuck && this.setState({ stuck: true });
    } else
    {
      this.state.stuck && this.setState({ stuck: false });
    }
  }

  render() {
    let iterationId = this.props.iterationId;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getHeaderClasses(),
          'data-iter': `Iteration ${iterationId + 1}` },


        !_.isEmpty(this.props.items) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__body__iteration-header' }, `Iteration ${iterationId + 1}`),


        _.map(this.props.items, (request, index) => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RunnerResultsRequestListItem__["a" /* default */], {
              key: request.id + '-' + index,
              filter: this.props.filter,
              request: request,
              iterationId: this.props.iterationId,
              onOpenConsole: this.props.onOpenConsole,
              onToggle: this.props.onToggleRequest }));


        })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsRequestListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_ExpandableTooltip__ = __webpack_require__(1384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_DownSolidIcon__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_UpSolidIcon__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RunnerResultsTestListItem__ = __webpack_require__(1385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__ = __webpack_require__(22);
var _class;









let


RunnerResultsRequestListItem = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RunnerResultsRequestListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      response: false };


    this.toggleRequest = this.toggleRequest.bind(this);
    this.toggleResponse = this.toggleResponse.bind(this);
  }

  isFailed(tests) {
    return _.some(tests, test => {
      return test.status === 'fail';
    });
  }

  getHeaderClasses() {
    return __WEBPACK_IMPORTED_MODULE_8_classnames___default()({
      'runner-results__request__header': true,
      'is-failed': this.isFailed(this.props.request.tests),
      'is-filtered': this.props.filter !== 'all' });

  }

  getStatusClasses() {
    const overallStatus = this.isFailed(this.props.request.tests);
    return __WEBPACK_IMPORTED_MODULE_8_classnames___default()({
      'runner-results__request__status': true,
      'is-passed': !overallStatus,
      'is-failed': overallStatus });

  }

  getMethodClasses() {
    return __WEBPACK_IMPORTED_MODULE_8_classnames___default()({
      'runner-results__request__method': true,
      [`runner-results__request__method--${this.props.request.request.method.toUpperCase()}`]: true });

  }

  getToggleButtonClasses() {
    return __WEBPACK_IMPORTED_MODULE_8_classnames___default()({
      'runner-results__request__expand': true,
      'is-open': this.state.isOpen });

  }

  toggleRequest(e) {
    e && e.stopPropagation();
    __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', this.state.isOpen ? 'collapse' : 'expand', 'run_results');
    this.setState({ isOpen: !this.state.isOpen }, () => {
      this.props.onToggle && this.props.onToggle(this.props.iterationId, _.size(this.props.request.tests), this.state.isOpen);
    });
  }

  getTooltipData() {
    let request = this.props.request,
    requestHeaders,
    responseHeaders,
    requestBody,
    responseBody;

    requestHeaders = !_.isEmpty(request.request.headers) ? _.reduce(_.keys(request.request.headers), (headers, header) => {
      headers[header] = request.request.headers[header];
      return headers;
    }, {}) : 'Request Headers unavailable';

    responseHeaders = !_.isEmpty(request.response) ? _.reduce(request.response.headers, (headers, header) => {
      headers[header.key] = header.value;
      return headers;
    }, {}) : 'Response Headers unavailable';

    requestBody = !_.isEmpty(request.request.body) ? request.request.body : 'Request body unavailable';

    if (request.response && request.response.size) {
      if (request.response.size < 300000) {
        responseBody = request.response && __WEBPACK_IMPORTED_MODULE_9__utils_util__["a" /* default */].beautifyJs(request.response.body);
      } else
      {
        responseBody = 'Response body is too large';
      }
    } else
    {
      responseBody = 'Response body unavailable';
    }

    return [{
      title: 'Request URL',
      body: request.request.url },
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

  getTooltipPosition() {
    let me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this).getBoundingClientRect();

    return window.innerHeight > me.top + 230 ? 'bottom' : 'top';
  }

  toggleResponse(e) {
    e && e.stopPropagation();
    this.setState({ response: !this.state.response });
    !this.state.response && __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'view_response');
  }

  render() {
    const request = this.props.request;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__request' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getHeaderClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__request__details' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getStatusClasses() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getMethodClasses() }, request.request.method.toUpperCase()),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'runner-results__request__name',
                onClick: this.toggleResponse },

              request.name),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__request__url' }, request.request.url),

            request.request.path &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { title: request.request.path, className: 'runner-results__request__path' }, request.request.path),


            this.state.response &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_ExpandableTooltip__["a" /* default */], {
              data: this.getTooltipData(),
              position: this.getTooltipPosition.bind(this),
              onClose: this.toggleResponse })),





          request.response &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__details' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__details__detail' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__icon' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__code' }, request.response.code, ' ', request.response.name)),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__details__detail' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__icon' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__time' }, request.response.time, ' ms')),


            request.response.size &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__details__detail' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__icon' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__response__size' },

                request.response.size < 1000 ?
                request.response.size + ' B' :
                request.response.size / 1000 + ' KB'))),







          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
              className: 'runner-results__request__expand-button',
              onClick: this.toggleRequest },


            this.state.isOpen ?
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_UpSolidIcon__["a" /* default */], { className: 'runner-results__request__expand is-open' }) :
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_DownSolidIcon__["a" /* default */], { className: 'runner-results__request__expand' }))),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__request__body' },

          request.error &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__test is-failed' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__test__name' },
              request.errorReason,






              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, '\xA0Open DevTools for more info.'))),






          !request.error && this.state.isOpen && request.response && _.isEmpty(request.tests) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__test__empty' }, 'This request does not have any tests.'),




          !request.error && this.state.isOpen && _.map(request.tests, test => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__RunnerResultsTestListItem__["a" /* default */], {
                filter: this.props.filter,
                key: test.name,
                test: test }));


          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableTooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons_UpSolidIcon__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons_DownSolidIcon__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(10);
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'expandable-tooltip__item__body__unavailable' }, 'Data unavailable (Only data about the top ',
            ' ' + pm.runner.maxRunCount + ' ', ' historical runs is stored)'))));





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
            'Data unavailable (Only data about the top ' + pm.runner.maxRunCount + ' historical runs is stored)'))));






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

/***/ 1385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsTestListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _class;

let


RunnerResultsTestListItem = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RunnerResultsTestListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-results__test': true,
      'is-passed': this.props.test.status === 'pass',
      'is-skipped': this.props.test.status === 'skipped',
      'is-failed': this.props.test.status === 'fail',
      'is-filtered': this.props.filter !== 'all' });

  }

  getStatusClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-results__test__status': true,
      'is-passed': this.props.test.status === 'pass',
      'is-skipped': this.props.test.status === 'skipped',
      'is-failed': this.props.test.status === 'fail' });

  }

  render() {
    const test = this.props.test;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getStatusClasses() }),

        test.status &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__test__status__text' }, test.status.toUpperCase()),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__test__name' }, test.name),

        _.isNumber(test.passCount) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__test__pass-count' }, test.passCount),


        _.isNumber(test.failCount) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__test__fail-count' }, test.failCount)));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsActivityIndicator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

RunnerResultsActivityIndicator = class RunnerResultsActivityIndicator extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let run = this.props.run,
    currentRequest = _.last(run.iterations[run.currentIteration]);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__body__activity' },

        run.status === 'paused' &&
        'Paused',


        run.status === 'running' &&
        currentRequest &&
        !currentRequest.request &&
        'Running Pre-request Scripts',


        run.status === 'running' &&
        currentRequest &&
        currentRequest.request &&
        !currentRequest.response &&
        'Sending Request',


        run.status === 'running' &&
        currentRequest &&
        currentRequest.response &&
        'Running Tests',


        run.status === 'stopped' &&
        'Run Aborted'));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_keymaps_KeyMaps__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_runner_RunnerResultsHeader__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_runner_RunnerResultsSidebar__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_runner_RunnerSummaryBody__ = __webpack_require__(1388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_runner_RunnerSummaryHeaderIterations__ = __webpack_require__(1392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__ = __webpack_require__(22);
var _class;










const keyMap = { 'goBack': ['del', 'backspace'] };let


RunnerSummaryContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RunnerSummaryContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      selectedFilter: 'all',
      hoveredIteration: 0,
      scrollLeft: 0 };


    this.handleRunAction = this.handleRunAction.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleIterationHover = this.handleIterationHover.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  getKeyMapHandlers() {
    return { 'goBack': this.props.onOpenResults };
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-summary': true,
      'is-hidden': !this.props.active });

  }

  handleRunAction(action) {
    switch (action) {
      case 'retry':
        pm.runner.setRunAction(this.props.runId, action, (err, runId) => {
          !err && this.setState({ selectedIteration: 0 }, () => {
            this.props.onOpenRun && this.props.onOpenRun(runId);
          });
        });
        break;
      default:
        break;}

  }

  handleFilterChange(filter) {
    __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'filter', null, filter);
    this.setState({ selectedFilter: filter });
  }

  handleIterationHover(iterationId) {
    this.setState({ hoveredIteration: iterationId });
  }

  handleScroll(e) {
    e && this.setState({ scrollLeft: e.target.scrollLeft });
  }

  render() {
    const run = this.props.run;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_keymaps_KeyMaps__["a" /* default */], {
          handlers: this.getKeyMapHandlers(),
          keyMap: keyMap },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getClasses(),
            ref: summary => {return summary && summary.focus();} },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__section-top' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_runner_RunnerResultsHeader__["a" /* default */], {
              run: run,
              onExport: this.props.onExport,
              onNewRun: this.props.onNewRun,
              onRunAction: this.handleRunAction,
              environments: this.props.environments,
              activeWorkspace: this.props.activeWorkspace }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_runner_RunnerSummaryHeaderIterations__["a" /* default */], {
              hoveredIteration: this.state.hoveredIteration,
              run: run,
              scrollLeft: this.state.scrollLeft,
              onIterationHover: this.handleIterationHover,
              onOpenIteration: this.props.onOpenIteration,
              onOpenResults: this.props.onOpenResults,
              onScroll: this.handleScroll })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__section-bottom' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_runner_RunnerResultsSidebar__["a" /* default */], {
              selectedFilter: this.state.selectedFilter,
              onFilterChange: this.handleFilterChange }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_runner_RunnerSummaryBody__["a" /* default */], {
              filter: this.state.selectedFilter,
              hoveredIteration: this.state.hoveredIteration,
              run: run,
              scrollLeft: this.state.scrollLeft,
              onIterationHover: this.handleIterationHover,
              onScroll: this.handleScroll })))));





  }}) || _class;

/***/ }),

/***/ 1388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryBody; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_List__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RunnerSummaryRequestListItem__ = __webpack_require__(1389);
var _class;





const ITEM_HEIGHT = 40;let


RunnerSummaryBody = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RunnerSummaryBody extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      visibleHeight: 0,
      requestHeights: [] };


    this.requests = [];

    this._listItem = this._listItem.bind(this);
    this.setBounds = this.setBounds.bind(this);
    this.setRequestHeights = this.setRequestHeights.bind(this);
    this.updateRequestHeights = this.updateRequestHeights.bind(this);
  }

  componentDidMount() {
    this.requests = this.getRequests(this.props.run.iterations);
    this.setRequestHeights();
  }

  /* not used */
  setBounds() {
    let me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);

    this.setState({ visibleHeight: me.clientHeight });
  }

  /* not used */
  setRequestHeights() {
    let requestHeights;

    requestHeights = _.map(this.requests, request => {
      if (_.isEmpty(request)) {
        return 0;
      }
      return ITEM_HEIGHT * (_.size(request.tests) + 1);
    });

    this.setState({ requestHeights: requestHeights });
  }

  /* not used */
  updateRequestHeights(request, testCount, isOpen) {
    let requestHeights = this.state.requestHeights;

    if (isOpen) {
      requestHeights[request] += testCount * ITEM_HEIGHT;
    } else
    {
      requestHeights[request] -= testCount * ITEM_HEIGHT;
    }

    this.setState({ requestHeights: requestHeights });
  }

  getRequests(iterations) {
    let items = _.reduce(iterations, (union, iteration) => {
      return _.unionBy(union, iteration, request => {
        return request.id;
      });
    });
    return items;
  }

  _listItem(request, index) {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RunnerSummaryRequestListItem__["a" /* default */], {
        filter: this.props.filter,
        hoveredIteration: this.props.hoveredIteration,
        iterations: this.props.run.iterations,
        key: index,
        request: request,
        requestIndex: index,
        scrollLeft: this.props.scrollLeft,
        onIterationHover: this.props.onIterationHover,
        onScroll: this.props.onScroll }));


  }

  render() {
    let run = this.props.run;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__body' },

        _.map(this.requests, (request, index) => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RunnerSummaryRequestListItem__["a" /* default */], {
              filter: this.props.filter,
              hoveredIteration: this.props.hoveredIteration,
              iterations: this.props.run.iterations,
              key: index,
              request: request,
              requestIndex: index,
              scrollLeft: this.props.scrollLeft,
              onIterationHover: this.props.onIterationHover,
              onScroll: this.props.onScroll,
              onToggle: this.updateRequestHeights }));


        }),


        _.isEmpty(this.requests) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__body__empty' }, 'No tests found for the selected filter')));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryRequestListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_UpSolidIcon__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RunnerSummaryTestListItem__ = __webpack_require__(1390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RunnerSummaryTimeline__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_services_AnalyticsService__ = __webpack_require__(22);
var _class;








let


RunnerSummaryRequestListItem = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RunnerSummaryRequestListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { isOpen: true };

    this.toggleRequest = this.toggleRequest.bind(this);
  }

  componentWillMount() {
    this.isFailedResult = this.isFailed();
  }

  componentDidMount() {
    if (!this.isFailedResult) {
      this.toggleRequest();
    }
  }

  componentWillUpdate(nextProps) {
    let me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.timeline);
    if (me) {
      me.scrollLeft = nextProps.scrollLeft;
    }
  }

  isFailed() {
    return _.some(this.props.iterations, iteration => {
      if (!iteration[this.props.requestIndex] || !iteration[this.props.requestIndex].tests) {
        return true;
      }
      return _.some(iteration[this.props.requestIndex].tests, test => {
        return test.status === 'fail';
      });
    });
  }

  getStatusClasses() {
    const isFailed = this.isFailedResult;
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'runner-summary__request-list-item__status': true,
      'is-failed': isFailed,
      'is-passed': !isFailed });

  }

  getMethodClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'runner-summary__request-list-item__method': true,
      [`runner-summary__request-list-item__method--${this.props.request.request.method.toUpperCase()}`]: true });

  }

  toggleRequest() {
    __WEBPACK_IMPORTED_MODULE_9__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', this.state.isOpen ? 'collapse' : 'expand', 'run_summary');
    this.setState({ isOpen: !this.state.isOpen }, () => {
      this.props.onToggle && this.props.onToggle(this.props.requestIndex, _.size(this.props.request.tests), this.state.isOpen);
    });
  }

  render() {
    const request = this.props.request;
    const filter = this.props.filter;

    if (filter === 'pass' && this.isFailedResult) {
      return false;
    }

    if (filter === 'fail' && !this.isFailedResult) {
      return false;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__request-list-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__request-list-item__header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__request-list-item__meta' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getStatusClasses() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getMethodClasses() },
              _.get(request, ['request', 'method'], '').toUpperCase()),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__request-list-item__name' },
              request.name)),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__request-list-item__timeline' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__RunnerSummaryTimeline__["a" /* default */], {
              active: !this.state.isOpen,
              hoveredIteration: this.props.hoveredIteration,
              iterations: this.props.iterations,
              ref: 'timeline',
              requestId: this.props.requestIndex,
              scrollLeft: this.props.scrollLeft,
              type: 'request',
              onHover: this.props.onIterationHover,
              onScroll: this.props.onScroll })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
              className: 'runner-summary__request__expand-button',
              onClick: this.toggleRequest },


            this.state.isOpen ?
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_UpSolidIcon__["a" /* default */], { className: 'runner-summary__request__expand is-open' }) :
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__["a" /* default */], { className: 'runner-summary__request__expand' }))),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__request-list-item__body' },

          this.state.isOpen && _.map(request.tests, (test, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__RunnerSummaryTestListItem__["a" /* default */], {
                filter: this.props.filter,
                hoveredIteration: this.props.hoveredIteration,
                iterations: this.props.iterations,
                key: test.name,
                requestId: this.props.requestIndex,
                scrollLeft: this.props.scrollLeft,
                test: test,
                testId: index,
                onIterationHover: this.props.onIterationHover,
                onScroll: this.props.onScroll }));


          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),

/***/ 1390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryTestListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RunnerSummaryTimeline__ = __webpack_require__(626);
var _class;



let


RunnerSummaryTestListItem = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RunnerSummaryTestListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.isPassedResult = this.isPassed(this.props.iterations, this.props.requestId, this.props.testId);
  }

  componentDidUpdate() {
    let me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.timeline);
    if (me) {
      me.scrollLeft = this.props.scrollLeft;
    }
  }

  isPassed(iterations, requestId, testId) {
    return _.some(iterations, iteration => {
      return _.get(iteration, `[${requestId}].tests[${testId}].status`, 'fail') === 'fail';
    });
  }

  getClasses() {
    let isPassed = !this.isPassedResult;
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'runner-summary__test-list-item': true,
      'is-failed': !isPassed });

  }

  getStatusClasses() {
    let isPassed = !this.isPassedResult;
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'runner-summary__test-list-item__status': true,
      'is-passed': isPassed,
      'is-failed': !isPassed });

  }

  render() {
    let test = this.props.test;
    if (this.isPassedResult && this.props.filter === 'pass') {
      return false;
    }

    if (!this.isPassedResult && this.props.filter === 'fail') {
      return false;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__test-list-item__meta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getStatusClasses() }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__test-list-item__status__text' }, this.isPassedResult ? 'FAIL' : 'PASS'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__test-list-item__name' },
            test.name)),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            ref: 'timeline',
            className: 'runner-summary__test-list-item__timeline' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RunnerSummaryTimeline__["a" /* default */], {
            hoveredIteration: this.props.hoveredIteration,
            iterations: this.props.iterations,
            requestId: this.props.requestId,
            scrollLeft: this.props.scrollLeft,
            testId: this.props.testId,
            type: 'test',
            onHover: this.props.onIterationHover,
            onScroll: this.props.onScroll }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryTimelineKeyframe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_SuccessIcon__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_CloseIcon__ = __webpack_require__(79);



let

RunnerSummaryTimelineKeyframe = class RunnerSummaryTimelineKeyframe extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.active !== nextProps.active) {
      return true;
    }
    return nextProps.hoveredIteration === this.props.iterationId || this.props.hoveredIteration === this.props.iterationId;
  }

  getTestKeyframes() {
    let iterationId = this.props.iterationId,
    test = _.get(this.props, ['iterations', iterationId, this.props.requestId, 'tests', this.props.testId], {});

    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-summary__body__timeline__keyframe': true,
      'is-grey': _.isEmpty(test),
      'is-green': !_.isEmpty(test) && test.status === 'pass',
      'is-red': !_.isEmpty(test) && test.status === 'fail',
      'is-hovered': this.props.hoveredIteration === iterationId });

  }

  getRequestKeyframes() {
    let iterationId = this.props.iterationId,
    request = _.get(this.props, ['iterations', iterationId, this.props.requestId], {}),
    requestStatus = _.isEmpty(request) ?
    -1 :
    _.reduce(request.tests, (total, test) => {
      return total + (test.status === 'fail' ? 1 : 0);
    }, 0);

    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'runner-summary__body__timeline__keyframe': true,
      'is-grey': this.props.active && requestStatus === -1,
      'is-green': this.props.active && requestStatus === 0,
      'is-red': this.props.active && requestStatus > 0,
      'is-hovered': this.props.hoveredIteration === iterationId });

  }

  render() {
    let className = this.props.type === 'test' ? this.getTestKeyframes() : this.getRequestKeyframes(),
    isPassing = _.includes(className, 'is-green'),
    isFailing = _.includes(className, 'is-red');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'runner-summary__body__timeline__keyframe-wrapper',
          onMouseOver: this.props.onHover.bind(this, this.props.iterationId) },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: className },
          isPassing && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Icons_SuccessIcon__["a" /* default */], { style: 'primary', size: 'xs' }),
          isFailing && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_CloseIcon__["a" /* default */], { style: 'primary', size: 'xs' }))));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryHeaderIterations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_LeftSolidIcon__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
var _class;




let


RunnerSummaryHeaderIterations = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RunnerSummaryHeaderIterations extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    let me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.tabs);
    if (me) {
      me.scrollLeft = this.props.scrollLeft;
    }
  }

  getIterationTabClasses(iterationId) {
    return __WEBPACK_IMPORTED_MODULE_5_classnames___default()({
      'runner-summary__header-iteration__tab': true,
      'is-hovered': this.props.hoveredIteration === iterationId });

  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__header-iterations' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__header__actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], {
              className: 'runner-summary__header__back',
              size: 'small',
              type: 'secondary',
              onClick: this.props.onOpenResults },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_LeftSolidIcon__["a" /* default */], { className: 'runner-summary__back-icon' }), 'Back')),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            ref: 'tabs',
            className: 'runner-summary__header-iteration__tabs',
            onScroll: this.props.onScroll },


          _.map(this.props.run.iterations, (iteration, iterationId) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: this.getIterationTabClasses(iterationId),
                  key: iterationId,
                  onMouseEnter: this.props.onIterationHover.bind(this, iterationId) },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                    className: 'runner-summary__header-iteration__tab__count',
                    onClick: this.props.onOpenIteration.bind(this, this.props.run.id, iterationId) },

                  iterationId + 1)));



          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerMissingWorkspaceModalContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workspaces_MissingCurrentWorkspaceModalContainer__ = __webpack_require__(733);

let

RunnerMissingWorkspaceModalContainer = class RunnerMissingWorkspaceModalContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__workspaces_MissingCurrentWorkspaceModalContainer__["a" /* default */], null));

  }};

/***/ }),

/***/ 1394:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boot_bootSession__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boot_bootRunner__ = __webpack_require__(1395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boot_booted__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__boot_bootThemeManager__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__boot_bootConfigurations__ = __webpack_require__(163);














const windowConfig = {
  process: 'runner',
  ui: true };


window.pm = {};

pm.init = done => {
  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_1__boot_bootConfig___default.a.init(windowConfig),
  __WEBPACK_IMPORTED_MODULE_2__boot_bootMessaging__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__boot_bootTelemetry__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_11__boot_bootConfigurations__["a" /* initializeConfigurations */],
  __WEBPACK_IMPORTED_MODULE_5__boot_bootSettings__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__boot_bootWLModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__boot_bootAppModels__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__boot_bootSession__["a" /* bootSession */],
  __WEBPACK_IMPORTED_MODULE_10__boot_bootThemeManager__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_8__boot_bootRunner__["a" /* default */]],
  err => {
    Object(__WEBPACK_IMPORTED_MODULE_9__boot_booted__["a" /* default */])(err);
    if (err) {
      console.error('Error in the app boot sequence', err);
    }
    done && done(err);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (pm);

/***/ }),

/***/ 1395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_async_series___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_async_series__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_runner__ = __webpack_require__(1397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_RunnerController__ = __webpack_require__(1407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bootShortcuts__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bootSyncProxy__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_PmConsole__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controllers_UIZoom__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_ToastManager__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controllers_ProxyListManager__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_requests_CertificateManager__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_runner_bus_event_handler__ = __webpack_require__(1418);












let alerts = __webpack_require__(356);


/**
                                                                                   *
                                                                                   * @param {*} cb
                                                                                   */
function bootRunner(cb) {
  let modelEventChannel = pm.eventBus.channel('model-events');
  modelEventChannel.subscribe(__WEBPACK_IMPORTED_MODULE_12__modules_runner_bus_event_handler__["a" /* handleModelEventOnStore */]);
  _.assign(window.pm, {
    // TODO: change this alerts to toasts
    alerts,
    toastManager: new __WEBPACK_IMPORTED_MODULE_9__models_ToastManager__["a" /* default */]() });

  __WEBPACK_IMPORTED_MODULE_0_async_series___default()([
  __WEBPACK_IMPORTED_MODULE_5__bootShortcuts__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__bootSyncProxy__["a" /* default */]],
  err => {
    // @todo move to series
    window.pm.runnerStore = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__reducers_runner__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)),
    _.assign(window.pm, {
      proxyListManager: new __WEBPACK_IMPORTED_MODULE_10__controllers_ProxyListManager__["a" /* default */](), // [settings]
      certificateManager: new __WEBPACK_IMPORTED_MODULE_11__models_requests_CertificateManager__["a" /* default */](), // [settings]
      console: new __WEBPACK_IMPORTED_MODULE_7__models_PmConsole__["a" /* default */]('runner'),
      runner: new __WEBPACK_IMPORTED_MODULE_4__controllers_RunnerController__["a" /* default */](),
      uiZoom: new __WEBPACK_IMPORTED_MODULE_8__controllers_UIZoom__["a" /* default */]() // [settings]
    });
    if (err) {
      return cb && cb(err);
    }
    return pm.runner.initialize(cb);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (bootRunner);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch;
    var getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),

/***/ 1397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RunnerSelectionReducer__ = __webpack_require__(1398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RunnerRunsReducer__ = __webpack_require__(1399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RunnerWorkspaceReducer__ = __webpack_require__(1400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RunnerCollectionReducer__ = __webpack_require__(1401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RunnerEnvironmentReducer__ = __webpack_require__(1402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RunnerFolderReducer__ = __webpack_require__(1403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RunnerRequestReducer__ = __webpack_require__(1404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RunnerUserReducer__ = __webpack_require__(1405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RunnerArchivedCollectionReducer__ = __webpack_require__(1406);











const runnerReducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  selection: __WEBPACK_IMPORTED_MODULE_1__RunnerSelectionReducer__["a" /* default */],
  runs: __WEBPACK_IMPORTED_MODULE_2__RunnerRunsReducer__["a" /* default */],
  workspaces: __WEBPACK_IMPORTED_MODULE_3__RunnerWorkspaceReducer__["a" /* default */],
  collections: __WEBPACK_IMPORTED_MODULE_4__RunnerCollectionReducer__["a" /* default */],
  folders: __WEBPACK_IMPORTED_MODULE_6__RunnerFolderReducer__["a" /* default */],
  environments: __WEBPACK_IMPORTED_MODULE_5__RunnerEnvironmentReducer__["a" /* default */],
  requests: __WEBPACK_IMPORTED_MODULE_7__RunnerRequestReducer__["a" /* default */],
  user: __WEBPACK_IMPORTED_MODULE_8__RunnerUserReducer__["a" /* default */],
  archivedCollections: __WEBPACK_IMPORTED_MODULE_9__RunnerArchivedCollectionReducer__["a" /* default */] });


/* harmony default export */ __webpack_exports__["a"] = (runnerReducers);

/***/ }),

/***/ 1398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_RunnerSaveResponseConstants__ = __webpack_require__(388);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



const initialState = {
  target: {
    collection: null,
    folder: null },

  environment: null,
  iterations: 1,
  delay: 0,
  data: null,
  persist: false,
  saveResponse: __WEBPACK_IMPORTED_MODULE_1__constants_RunnerSaveResponseConstants__["a" /* RUNNER_SAVE_ALL_RESPONSES */],
  workspace: {} };


const target = (state = {}, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["H" /* RUNNER_SET_COLLECTION */]:
      return _extends({},
      state, {
        collection: action.id,
        folder: null });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["M" /* RUNNER_SET_FOLDER */]:
      return _extends({},
      state, {
        collection: action.collection,
        folder: action.id });

    default:
      return state;}

};

const RunnerSelectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["H" /* RUNNER_SET_COLLECTION */]:
      return _extends({},
      state, {
        target: target(state.target, action) });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["M" /* RUNNER_SET_FOLDER */]:
      return _extends({},
      state, {
        target: target(state.target, action) });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["L" /* RUNNER_SET_ENV */]:
      return _extends({},
      state, {
        environment: action.id });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["N" /* RUNNER_SET_ITERATIONS */]:
      return _extends({},
      state, {
        iterations: action.value });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["K" /* RUNNER_SET_DELAY */]:
      return _extends({},
      state, {
        delay: action.value });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["I" /* RUNNER_SET_DATA_FILE */]:
      return _extends({},
      state, {
        data: action.data || null,
        dataFile: action.file,
        fileName: _.get(action, 'file.name', state.fileName),
        fileType: _.get(action, 'fileType', state.fileType) });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["F" /* RUNNER_REMOVE_DATA_FILE */]:
      return _extends({},
      state, {
        data: null,
        dataFile: null,
        fileName: undefined,
        fileType: undefined });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["J" /* RUNNER_SET_DATA_FILE_TYPE */]:
      return _extends({},
      state, {
        fileType: action.fileType });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["O" /* RUNNER_SET_PERSIST_VARS */]:
      return _extends({},
      state, {
        persist: action.value });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["P" /* RUNNER_SET_SAVE_RESPONSES */]:
      return _extends({},
      state, {
        saveResponse: action.value });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["X" /* RUNNER_SWITCH_WORKSPACE */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["Q" /* RUNNER_SET_WORKSPACE */]:
      return _extends({},
      initialState, {
        workspace: action.value });

    default:
      return state;}

};

/* harmony default export */ __webpack_exports__["a"] = (RunnerSelectionReducer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const findRequestInIteration = (iteration, requestToFind) => {
  return _.findIndex(iteration, request => {
    return request.ref === requestToFind.ref;
  });
};

const tests = (state = [], action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["U" /* RUNNER_START_TEST */]:
      return state;
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["r" /* RUNNER_END_TEST */]:
      return [
      ...state,
      {
        name: action.test.name,
        status: action.test.status }];


    default:
      return state;}

};

const response = (state = {}, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["p" /* RUNNER_END_REQUEST */]:
      return {
        size: action.response.size,
        code: action.response.code,
        name: action.response.name,
        time: action.response.time,
        headers: action.response.headers

        // body: action.response.body
      };
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["a" /* RUNNER_ADD_RESPONSE_BODY */]:
      return _extends({},
      state, {
        body: action.response.body });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["b" /* RUNNER_CLEAN_RUN */]:
      return _extends({},
      state, {
        headers: [],
        body: '' });

    default:
      return state;}

};

const request = (state = {}, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["S" /* RUNNER_START_REQUEST */]:
      return {
        id: action.request.id,
        ref: action.request.ref,
        error: false,
        name: action.request.name,
        request: {
          url: action.request.url,
          unresolvedUrl: action.request.unresolvedUrl,
          method: action.request.method,
          path: action.request.path,
          body: action.request.body } };


    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["s" /* RUNNER_ERROR_REQUEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["u" /* RUNNER_ERROR_TEST */]:
      return _extends({},
      state, {
        error: true,
        errorReason: action.error });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["U" /* RUNNER_START_TEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["r" /* RUNNER_END_TEST */]:
      return _extends({},
      state, {
        tests: tests(state.tests, action) });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["p" /* RUNNER_END_REQUEST */]:
      return _extends({},
      state, {
        request: _extends({},
        state.request, {
          headers: action.request.headers }),

        response: response(state.reponse, action) });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["a" /* RUNNER_ADD_RESPONSE_BODY */]:
      return _extends({},
      state, {
        response: response(state.response, action) });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["b" /* RUNNER_CLEAN_RUN */]:
      return _extends({},
      state, {
        request: _extends({},
        state.request, {
          headers: [],
          body: '' }),

        response: response(state.response, action) });

    default:
      return state;}

};

const iteration = (state = [], action) => {
  let requestPosition;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["S" /* RUNNER_START_REQUEST */]:
      // the start of this request in iteration was already recorded
      requestPosition = findRequestInIteration(state, action.request);

      // this is the first time we are recording this request, add request to state
      if (requestPosition === -1) {
        return [
        ...state,
        request(undefined, action)];

      }

      // this is a retry of a request, update the same
      return _.map(state, (req, index) => {
        if (index !== requestPosition) {
          return req;
        }
        return request(req, action);
      });
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["s" /* RUNNER_ERROR_REQUEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["U" /* RUNNER_START_TEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["u" /* RUNNER_ERROR_TEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["r" /* RUNNER_END_TEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["p" /* RUNNER_END_REQUEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["a" /* RUNNER_ADD_RESPONSE_BODY */]:
      requestPosition = findRequestInIteration(state, action.request);
      return _.map(state, (req, index) => {
        if (index !== requestPosition) {
          return req;
        }
        return request(req, action);
      });
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["b" /* RUNNER_CLEAN_RUN */]:
      return _.map(state, req => {
        return request(req, action);
      });
    default:
      return state;}

};

const iterations = (state = [], action) => {
  let newState;
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["T" /* RUNNER_START_RUN */]:
      newState = [];
      _.map(_.range(action.selection.iterations), i => {
        newState[i] = [];
      });
      return newState;
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["R" /* RUNNER_START_ITERATION */]:
      return state;
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["S" /* RUNNER_START_REQUEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["s" /* RUNNER_ERROR_REQUEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["p" /* RUNNER_END_REQUEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["a" /* RUNNER_ADD_RESPONSE_BODY */]:
      return [
      ...state.slice(0, action.iteration),
      iteration(state[action.iteration], action),
      ...state.slice(action.iteration + 1)];

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["U" /* RUNNER_START_TEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["u" /* RUNNER_ERROR_TEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["r" /* RUNNER_END_TEST */]:
      return [
      ...state.slice(0, action.iteration),
      iteration(state[action.iteration], action),
      ...state.slice(action.iteration + 1)];

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["b" /* RUNNER_CLEAN_RUN */]:
      return _.map(state, iter => {
        return iteration(iter, action);
      });
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["o" /* RUNNER_END_ITERATION */]:
    default:
      return state;}

};

const target = (state = {}, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["T" /* RUNNER_START_RUN */]:
      return _extends({},
      state, {
        collection: action.selection.target.collection,
        folder: action.selection.target.folder });

    default:
      return state;}

};

const run = (state = {}, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["T" /* RUNNER_START_RUN */]:
      return _extends({},
      state, {
        id: action.runId,
        name: action.name,
        error: false,
        retry: action.retry,
        status: 'running',
        dataFile: action.selection.dataFile,
        delay: action.selection.delay,
        persist: action.selection.persist,
        saveResponse: action.selection.saveResponse,
        currentIteration: 0,
        failedTestCount: 0,
        totalTestCount: 0,
        target: target(action.selection.target, action),
        createdAt: new Date().toISOString(),
        environment: action.selection.environment,
        iterations: iterations(state.iterations, action),
        workspace: pm.runnerStore.getState().selection.workspace.id });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["t" /* RUNNER_ERROR_RUN */]:
      return _extends({},
      state, {
        error: true });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["E" /* RUNNER_PAUSE_RUN */]:
      return _extends({},
      state, {
        status: 'paused' });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["G" /* RUNNER_RESUME_RUN */]:
      return _extends({},
      state, {
        status: 'running' });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["V" /* RUNNER_STOPPING_RUN */]:
      return _extends({},
      state, {
        status: 'stopping' });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["W" /* RUNNER_STOP_RUN */]:
      return _extends({},
      state, {
        status: 'stopped' });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["R" /* RUNNER_START_ITERATION */]:
      return _extends({},
      state, {
        currentIteration: action.iteration,
        iterations: iterations(state.iterations, action) });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["S" /* RUNNER_START_REQUEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["s" /* RUNNER_ERROR_REQUEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["p" /* RUNNER_END_REQUEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["a" /* RUNNER_ADD_RESPONSE_BODY */]:
      return _extends({},
      state, {
        iterations: iterations(state.iterations, action) });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["U" /* RUNNER_START_TEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["u" /* RUNNER_ERROR_TEST */]:
      return _extends({},
      state, {
        iterations: iterations(state.iterations, action) });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["r" /* RUNNER_END_TEST */]:
      return _extends({},
      state, {
        failedTestCount: action.test.status === 'fail' ? state.failedTestCount + 1 : state.failedTestCount,
        totalTestCount: state.totalTestCount + 1,
        iterations: iterations(state.iterations, action) });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["o" /* RUNNER_END_ITERATION */]:
      return _extends({},
      state, {
        currentIteration: state.currentIteration + 1,
        iterations: iterations(state.iterations, action) });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["q" /* RUNNER_END_RUN */]:
      return _extends({},
      state, {
        status: 'finished' });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["b" /* RUNNER_CLEAN_RUN */]:
      let retVal = _extends({},
      state, {
        iterations: iterations(state.iterations, action) });

      return retVal;
    default:
      return state;}

};

const RunnerRunsReducer = (state = {}, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["T" /* RUNNER_START_RUN */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["t" /* RUNNER_ERROR_RUN */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["E" /* RUNNER_PAUSE_RUN */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["G" /* RUNNER_RESUME_RUN */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["W" /* RUNNER_STOP_RUN */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["V" /* RUNNER_STOPPING_RUN */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["b" /* RUNNER_CLEAN_RUN */]:
      return _extends({},
      state, {
        [action.runId]: run(state[action.runId], action) });


    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["R" /* RUNNER_START_ITERATION */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["S" /* RUNNER_START_REQUEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["s" /* RUNNER_ERROR_REQUEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["U" /* RUNNER_START_TEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["u" /* RUNNER_ERROR_TEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["r" /* RUNNER_END_TEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["p" /* RUNNER_END_REQUEST */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["a" /* RUNNER_ADD_RESPONSE_BODY */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["o" /* RUNNER_END_ITERATION */]:
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["q" /* RUNNER_END_RUN */]:
      return _extends({},
      state, {
        [action.runId]: run(state[action.runId], action) });


    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["B" /* RUNNER_LOAD_RUNS */]:
      return _extends({},
      state,
      action.runs);


    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["v" /* RUNNER_IMPORT_RUN */]:
      return _extends({},
      state, {
        [action.runId]: action.run });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["m" /* RUNNER_DELETE_RUN */]:
      return _.omitBy(state, stateRun => {
        return stateRun.id === action.runId;
      });
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["g" /* RUNNER_DELETE_ALL_RUNS */]:
      return {};
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["D" /* RUNNER_NOOP */]:
    default:
      return state;}

};

/* harmony default export */ __webpack_exports__["a"] = (RunnerRunsReducer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);


const RunnerWorkspaceReducer = (state = [], action) => {
  let workspaceIndex;
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["C" /* RUNNER_LOAD_WORKSPACE */]:
      return action.workspaces;
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["f" /* RUNNER_CREATE_WORKSPACE */]:
      return [
      ...state,
      action.workspace];

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["_1" /* RUNNER_UPDATE_WORKSPACE */]:
      workspaceIndex = _.findIndex(state, ['id', action.workspace.id]);
      if (workspaceIndex === -1) {
        return state;
      }
      return [
      ..._.slice(state, 0, workspaceIndex),
      action.workspace,
      ..._.slice(state, workspaceIndex + 1)];

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["n" /* RUNNER_DELETE_WORKSPACE */]:
      workspaceIndex = _.findIndex(state, ['id', action.workspaceId]);
      if (workspaceIndex === -1) {
        return state;
      }
      return [
      ..._.slice(state, 0, workspaceIndex),
      ..._.slice(state, workspaceIndex + 1)];

    default:
      return state;}

};

/* harmony default export */ __webpack_exports__["a"] = (RunnerWorkspaceReducer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);


const RunnerCollectionReducer = (state = [], action) => {
  let collectionIndex;
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["x" /* RUNNER_LOAD_COLLECTIONS */]:
      return action.collections;
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["d" /* RUNNER_CREATE_COLLECTION */]:
      return [
      ...state,
      action.collection];

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["Y" /* RUNNER_UPDATE_COLLECTION */]:
      collectionIndex = _.findIndex(state, ['id', action.collection.id]);
      if (collectionIndex === -1) {
        return state;
      }
      return [
      ..._.slice(state, 0, collectionIndex),
      action.collection,
      ..._.slice(state, collectionIndex + 1)];

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["i" /* RUNNER_DELETE_COLLECTION */]:
      collectionIndex = _.findIndex(state, ['id', action.collectionId]);
      if (collectionIndex === -1) {
        return state;
      }
      return [
      ..._.slice(state, 0, collectionIndex),
      ..._.slice(state, collectionIndex + 1)];

    default:
      return state;}

};

/* harmony default export */ __webpack_exports__["a"] = (RunnerCollectionReducer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);


const RunnerEnvironmentReducer = (state = [], action) => {
  let envIndex;
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["y" /* RUNNER_LOAD_ENVIRONMENTS */]:
      return action.environments;
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["e" /* RUNNER_CREATE_ENVIRONMENT */]:
      return [
      ...state,
      action.environment];

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["Z" /* RUNNER_UPDATE_ENVIRONMENT */]:
      envIndex = _.findIndex(state, ['id', action.environment.id]);
      if (envIndex === -1) {
        return state;
      }
      return [
      ..._.slice(state, 0, envIndex),
      action.environment,
      ..._.slice(state, envIndex + 1)];

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["j" /* RUNNER_DELETE_ENVIRONMENT */]:
      envIndex = _.findIndex(state, ['id', action.environmentId]);
      if (envIndex === -1) {
        return state;
      }
      return [
      ..._.slice(state, 0, envIndex),
      ..._.slice(state, envIndex + 1)];

    default:
      return state;}

};

/* harmony default export */ __webpack_exports__["a"] = (RunnerEnvironmentReducer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);


const RunnerFolderReducer = (state = [], action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["z" /* RUNNER_LOAD_FOLDERS */]:
      return action.folders;
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["k" /* RUNNER_DELETE_FOLDER */]:
      let folderIndex = _.findIndex(state, ['id', action.folderId]);
      if (folderIndex === -1) {
        return state;
      }
      return [
      ..._.slice(state, 0, folderIndex),
      ..._.slice(state, folderIndex + 1)];

    default:
      return state;}

};

/* harmony default export */ __webpack_exports__["a"] = (RunnerFolderReducer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);


const RunnerRequestReducer = (state = [], action) => {
  let reqIndex;
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["A" /* RUNNER_LOAD_REQUESTS */]:
      return action.requests;
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["_0" /* RUNNER_UPDATE_REQUEST */]:
      reqIndex = _.findIndex(state, ['id', action.request.id]);
      if (reqIndex === -1) {
        return state;
      }
      return [
      ..._.slice(state, 0, reqIndex),
      _.merge(state[reqIndex], action.request),
      ..._.slice(state, reqIndex + 1)];

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["l" /* RUNNER_DELETE_REQUEST */]:
      reqIndex = _.findIndex(state, ['id', action.requestId]);
      if (reqIndex === -1) {
        return state;
      }
      return [
      ..._.slice(state, 0, reqIndex),
      ..._.slice(state, reqIndex + 1)];

    default:
      return state;}

};

/* harmony default export */ __webpack_exports__["a"] = (RunnerRequestReducer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);


const RunnerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["_2" /* RUNNER_USER_LOGIN */]:
      return action.user;
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["_3" /* RUNNER_USER_LOGOUT */]:
      return {};
    default:
      return state;}

};

/* harmony default export */ __webpack_exports__["a"] = (RunnerUserReducer);

/***/ }),

/***/ 1406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

let id;
const RunnerArchivedCollectionReducer = (state = {}, action) => {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["w" /* RUNNER_LOAD_ARCHIVED_COLLECTIONS */]:
      // Converting archivedCollections array to hash map
      // as an optimization for filtering collections
      let archivedCollectionHash = _.transform(action.archivedCollections, (acc, c) => {
        c.model === 'collection' && (acc[c.modelId] = true);
      }, {});
      return archivedCollectionHash;
    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["c" /* RUNNER_CREATE_ARCHIVED_COLLECTION */]:
      id = _.get(action, 'archivedCollection.modelId');
      if (!id) {
        return state;
      }

      return _extends({},
      state, {
        [id]: true });

    case __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["h" /* RUNNER_DELETE_ARCHIVED_COLLECTION */]:
      id = _.get(action, 'archivedCollection.modelId');
      if (!id) {
        return state;
      }

      return _.omit(state, id);
    default:
      return state;}

};

/* harmony default export */ __webpack_exports__["a"] = (RunnerArchivedCollectionReducer);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_services_filesystem__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_runner_RunnerSelectionActions__ = __webpack_require__(1408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_runner_RunnerRunsActions__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_runner_RunnerWorkspaceActions__ = __webpack_require__(1409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_runner_RunnerCollectionActions__ = __webpack_require__(1410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_runner_RunnerFolderActions__ = __webpack_require__(1411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_runner_RunnerRequestActions__ = __webpack_require__(1412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_runner_RunnerEnvironmentActions__ = __webpack_require__(1413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_runner_RunnerUserActions__ = __webpack_require__(1414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_runner_RunnerArchivedCollectionActions__ = __webpack_require__(1415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_pipelines_user_action__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__RuntimeRunner__ = __webpack_require__(1416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_RunnerDataFileTypeConstants__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_controllers_WorkspaceController__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_controllers_EnvironmentController__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_controllers_CollectionController__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modules_controllers_CollectionRunController__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_controllers_WorkspaceSessionController__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_controllers_WindowController__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_controllers_WindowController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__common_controllers_WindowController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__modules_controllers_UserController__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__modules_controllers_ArchivedResourceController__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reducers_runner_BackboneReduxBridge__ = __webpack_require__(178);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

























const MAX_RUN_COUNT = 10;

/**
                           * Controls runner actions and maintains Runs.
                           *
                           * @class RunnerController
                           *
                           * @property {Number} maxRunCount Maximum Runs that should be loaded. Set to 10.
                           * @property {RuntimeRunner[]} runs A cache of all runs
                           */let
RunnerController = class RunnerController {
  constructor() {
    this.runs = {};
    this.maxRunCount = MAX_RUN_COUNT;

    this.selectActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_2__actions_runner_RunnerSelectionActions__, pm.runnerStore.dispatch);
    this.actions = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_3__actions_runner_RunnerRunsActions__, pm.runnerStore.dispatch);
    this.workspaceActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_4__actions_runner_RunnerWorkspaceActions__, pm.runnerStore.dispatch);
    this.collectionActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__actions_runner_RunnerCollectionActions__, pm.runnerStore.dispatch);
    this.archivedCollectionActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_10__actions_runner_RunnerArchivedCollectionActions__, pm.runnerStore.dispatch);
    this.folderActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_6__actions_runner_RunnerFolderActions__, pm.runnerStore.dispatch);
    this.requestActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_7__actions_runner_RunnerRequestActions__, pm.runnerStore.dispatch);
    this.environmentActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_8__actions_runner_RunnerEnvironmentActions__, pm.runnerStore.dispatch);
    this.userActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_9__actions_runner_RunnerUserActions__, pm.runnerStore.dispatch);
  }

  initialize(callback) {
    let workspaceSession = {};
    this.loadWorkspacesFromDB().
    then(() => this.loadRunsFromDB()).
    then(() => __WEBPACK_IMPORTED_MODULE_22__modules_controllers_UserController__["a" /* default */].get()).
    then(user => Promise.resolve(this.userActions.login(user))).
    then(() => __WEBPACK_IMPORTED_MODULE_21__common_controllers_WindowController___default.a.get({ id: pm.window.id })).
    then(window => __WEBPACK_IMPORTED_MODULE_20__modules_controllers_WorkspaceSessionController__["a" /* default */].get({ id: window.activeSession })).
    then(session => {workspaceSession = session;}).
    then(() => this.populateCollections(workspaceSession.workspace)).
    then(() => {
      this.populateArchivedCollections(workspaceSession.workspace);
      this.changeSelection('persist', pm.settings.getSetting('persistRunnerVariables') || false);
      this.selectActions.setWorkspace(workspaceSession.workspace);
      this.populateEnvironments(workspaceSession.workspace);
      __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEvent('collection_runner', 'open');
      return callback && callback();
    });
  }

  /**
     * Handles a change of selection for any entity.
     * The entity can be any of the input parameters for a Run like 'target', 'environment' etc.
     *
     * @param {String} field - The field to change selection. One of 'target', 'environment', 'iterations', 'delay', 'data', 'dataType', 'persist' or 'saveResponse'
     * @param {*} value - The value to set to the field. The type of the value depends on the field being changed.
     *
     * @function RunnerController#changeSelection
     *
     * @example
     * // Sets the `folderId` within `collectionId` as the selection for a Run
     * pm.runner.changeSelection('target', {
     *   id: 'folderId',
     *   parentId: 'collectionId',
     *   type: 'folder'
     * });
     */
  changeSelection(field, value) {
    switch (field) {
      case 'target':
        if (_.isEmpty(value) || _.isEmpty(value.id)) {
          // Selected nothing
          this.selectActions.selectCollection(null);
        } else
        if (value.type === 'folder') {
          // Selected a folder
          this.selectActions.selectFolder(value.id, value.collection);
        } else
        if (value.type === 'collection') {
          // Selected a collection
          this.selectActions.selectCollection(value.id);
        }
        break;
      case 'environment':
        this.selectActions.selectEnvironment(value);
        break;
      case 'iterations':
        this.selectActions.setIterations(value);
        break;
      case 'delay':
        this.selectActions.setDelay(value);
        break;
      case 'data':
        _.isEmpty(value) ?
        this.selectActions.removeDataFile() :
        this.selectActions.readDataFile(value[0]);
        break;
      case 'dataType':
        this.selectActions.setDataFileType(value);
        break;
      case 'persist':
        this.selectActions.setPersistence(value);
        pm.settings.setSetting('persistRunnerVariables', value);
        break;
      case 'saveResponse':
        this.selectActions.setSaveResponse(value);
        break;
      case 'workspace':
        this.switchWorkspace(value);
        break;
      default:
        break;}

  }

  switchWorkspace(workspaceId) {
    __WEBPACK_IMPORTED_MODULE_20__modules_controllers_WorkspaceSessionController__["a" /* default */].getSessionFor(
    pm.window.id,
    workspaceId).
    then(session => {
      __WEBPACK_IMPORTED_MODULE_21__common_controllers_WindowController___default.a.update({
        id: pm.window.id,
        activeSession: session.id }).
      then(() => {
        this.selectActions.switchWorkspace(workspaceId);
      });
    });
  }

  async fetchCollection(collectionId) {
    return await __WEBPACK_IMPORTED_MODULE_18__modules_controllers_CollectionController__["a" /* default */].getCollection({ id: collectionId }, { populate: true });
  }


  /**
     * Starts a Run with RuntimeRunner. Also stores the run in its cache {@link RunnerController#runs}.
     *
     * @param {RunSelection} params - parameters for starting a Run
     * @param {Function} callback - Callback to execute after starting a Run
     *
     * @returns {undefined}
     *
     * @function RunnerController#startRun
     *
     * @see {RuntimeRunner}
     */
  async startRun(params, callback) {
    let collection = await this.fetchCollection(params.target.collection);
    if (!collection) {
      pm.alerts.error('Something went wrong when running the collection. Check that the collection still exists.');
      return;
    }

    if (!params.delay) {
      params.delay = 0;
    }

    let runner = new __WEBPACK_IMPORTED_MODULE_14__RuntimeRunner__["a" /* default */]();
    runner.initialize(params, () => {
      runner.start(params.retry, (err, runId) => {
        if (err) {
          return _.isFunction(callback) && callback(err);
        }

        this.runs = _extends({},
        this.runs, {
          [runId]: runner });


        runner.on('finish', this.onFinishRun.bind(this));
        return _.isFunction(callback) && callback(null, runId);
      });
    });
  }

  /**
     * Sets a lifecycle action on a Run. The lifecycle actions can be 'pause', 'start', 'stop' or 'retry'.
     *
     * @param {UUID} runId - id of the Run to change
     * @param {String} status - The lifecycle action to change. One of 'pause', 'start', 'stop' or 'retry'.
     * @param {String} callback - callback to execute when the action completes
     * @function RunnerController#setRunAction
     */
  setRunAction(runId, status, callback) {
    let run = this.runs[runId];

    switch (status) {
      case 'pause':
        run && run.pause();
        break;
      case 'resume':
        run && run.resume();
        break;
      case 'stop':
        run && run.stop();
        break;
      case 'retry':
        run = pm.runnerStore.getState().runs[runId];
        this.startRun({
          target: run.target,
          environment: run.environment,
          iterations: run.iterations.length,
          delay: run.delay,
          dataFile: run.dataFile,
          persist: run.persist,
          retry: true,
          saveResponse: run.saveResponse },
        callback);
        break;
      default:
        break;}

  }

  /**
     * Determines the file type based on the file type.
     *
     * @param {String} file - File name
     *
     * @returns {String} A file type string. One of 'text/csv', 'application/json', 'Undetermined'
     *
     * @function RunnerController#getFileType
     */
  getFileType(file) {
    if (_.includes(file.type, 'csv') || _.includes(file.type, 'excel') || _.includes(file.type, 'comma-separated-values')) {
      return __WEBPACK_IMPORTED_MODULE_15__constants_RunnerDataFileTypeConstants__["a" /* RUNNER_DATA_FILE_TYPE_CSV */];
    } else
    if (_.includes(file.type, 'json')) {
      return __WEBPACK_IMPORTED_MODULE_15__constants_RunnerDataFileTypeConstants__["b" /* RUNNER_DATA_FILE_TYPE_JSON */];
    } else
    {
      return __WEBPACK_IMPORTED_MODULE_15__constants_RunnerDataFileTypeConstants__["c" /* RUNNER_DATA_FILE_TYPE_UNDETERMINED */];
    }
  }

  /**
     * Reads the contents of a given file and processes it as a data file for the Run.
     *
     * @param {String} file - path to a file
     * @param {Function} callback Callback executed with the contents of the input file
     *
     * @returns {undefined}
     *
     * @function RunnerController#readFile
     */
  readFile(file, callback) {
    if (!file) {
      return _.isFunction(callback) && callback(null, []);
    }

    let autoDetectedFileType = this.getFileType(file);
    let fileDataType = _.get(pm.runnerStore.getState(), 'selection.fileType') || autoDetectedFileType;

    try {
      let reader = new FileReader();
      reader.onload = e => {
        this.processFile(e.target.result, fileDataType, callback);
      };
      reader.readAsText(file);
    }
    catch (e) {
      let data = _.get(pm.runnerStore.getState(), 'selection.data', []);
      this.processFile(JSON.stringify(data), fileDataType, callback);
    }
  }

  /**
     * Parses the contents of a given file based on the type passed.
     *
     * @param {String} data - contents of the data file
     * @param {String} fileDataType - file type
     * @param {Function} callback - callback executed with data parsed as an Object from the raw contents
     *
     * @returns {undefined}
     *
     * @function RunnerController#processFile
     */
  processFile(data, fileDataType, callback) {
    if (_.isEmpty(data)) {
      return callback(null, [], fileDataType);
    }
    try {
      if (fileDataType === __WEBPACK_IMPORTED_MODULE_15__constants_RunnerDataFileTypeConstants__["b" /* RUNNER_DATA_FILE_TYPE_JSON */]) {
        let object = JSON.parse(data);
        if (!_.isArray(object)) {
          throw new Error('The JSON must be an array.');
        }

        return _.isFunction(callback) && callback(null, object, fileDataType);
      } else
      if (fileDataType === __WEBPACK_IMPORTED_MODULE_15__constants_RunnerDataFileTypeConstants__["a" /* RUNNER_DATA_FILE_TYPE_CSV */]) {
        let object = [],
        i,
        j,
        kvpair;

        // Replace Carriage Return with Line feed
        data = data.replace('\r\n', '\r').replace('\r', '\n');

        let csvArray = CSV.csvToArray(data);

        if (csvArray.length > 0) {
          let keys = csvArray[0],
          numKeys = keys.length,
          count = csvArray.length;

          for (j = 0; j < numKeys; j++) {
            if (typeof keys[j] === 'string') {
              keys[j] = keys[j].trim();
            }
          }

          for (i = 1; i < count; i++) {
            kvpair = {};
            if (csvArray[i].length !== numKeys) {
              throw new Error('Each row must have an equal number of columns.');
            }
            for (j = 0; j < numKeys; j++) {
              kvpair[keys[j]] = csvArray[i][j];
            }
            object.push(kvpair);
          }
        }

        return _.isFunction(callback) && callback(null, object, fileDataType);
      } else
      {
        return _.isFunction(callback) && callback('Could not determine format of data file', data, fileDataType);

        // throw new Error('Could not determine format of file.');
      }
    }
    catch (err) {
      pm.alerts.error('Error reading data file: ' + err);
      return _.isFunction(callback) && callback(err);
    }
  }

  /**
     * Filters the iterations to be stored in the DB
     *
     * Removes the header and body property from request
     * and response.
     *
     * @param  {Object} iterations [Run iterations to be filtered]
     * @return {Object}            [Filtered iterations]
     */

  /**
         * Stores the results of a Run to IndexedDB.
         *
         * @param {UUID} runId - id of the Run that finished
         *
         * @function RunnerController#onFinishRun
         *
         * @fires AppWindow#runAdded
         */
  onFinishRun(runId) {
    this.runs[runId].dispose();
    let runnerState = pm.runnerStore.getState(),
    run = runnerState.runs[runId];

    if (!run) {
      return;
    }

    let runToDB = _extends({},
    run, {
      id: runId,
      collection: _.get(run, 'target.collection', null),
      owner: runnerState.user.id }),

    createRunEvent = Object(__WEBPACK_IMPORTED_MODULE_12__modules_model_event__["a" /* createEvent */])('create', 'collectionrun', runToDB);

    Object(__WEBPACK_IMPORTED_MODULE_11__modules_pipelines_user_action__["a" /* default */])(createRunEvent).
    catch(e => {
      console.log('Error in IndexDB while writing Run', e);
    });
    pm.appWindow.trigger('sendMessageObject', 'runAdded', run);
    this.cleanRuns();
    __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'create', run.retry ? 'retry_run' : 'start_run', this.getTotalRequests(runId));
  }

  /**
     * Get total number of requests that were sent out in a Run(identified by the given id). Sums up individual requests from iterations.
     *
     * @param {UUID} runId - id of the run to get request count
     *
     * @returns {Number} number of requests in the Run
     *
     * @function RunnerController#getTotalRequests
     */
  getTotalRequests(runId) {
    let run = pm.runnerStore.getState().runs[runId];
    return _.reduce(run.iterations, (total, iteration) => {
      return total + iteration.length;
    }, 0);
  }

  /**
     * Removes a Run, from memory and IndexedDB. Updates the UI as well.
     *
     * @param {UUID} runId - id of the Run to remove
     *
     * @function RunnerController#deleteRun
     *
     * @fires AppWindow#runDeleted
     */
  deleteRun(runId) {
    this.actions.deleteRun(runId);
    let deleteRunEvent = Object(__WEBPACK_IMPORTED_MODULE_12__modules_model_event__["a" /* createEvent */])('delete', 'collectionrun', { id: runId });
    Object(__WEBPACK_IMPORTED_MODULE_11__modules_pipelines_user_action__["a" /* default */])(deleteRunEvent).
    catch(e => {
      console.log(e);
    });
    pm.appWindow.trigger('sendMessageObject', 'runDeleted', runId);
  }

  /**
     * Removes all Runs from memory.
     *
     * @function RunnerController#deleteAllRuns
     *
     * @listens AppWindow#allRunsDeleted
     */
  deleteAllRuns() {
    this.actions.deleteAllRuns();
  }

  /**
     * Exports the results of a Run to a JSON file.
     *
     * @param {UUID} runId - id of the run to export
     * @param {RuntimeRunner} run - instance of the run
     *
     * @function RunnerController#exportRun
     */
  exportRun(runId) {
    this.fetchRun(runId, run => {
      Object(__WEBPACK_IMPORTED_MODULE_24__reducers_runner_BackboneReduxBridge__["b" /* ReduxToBackbone */])(runId, run, (err, exportRun) => {
        if (!err && exportRun) {
          let name = exportRun.name + '.postman_test_run.json',
          type = 'application/json';
          Object(__WEBPACK_IMPORTED_MODULE_1__models_services_filesystem__["b" /* saveAndOpenFile */])(name, JSON.stringify(exportRun, null, '\t'), type, err => {
            if (!err) pm.alerts.success('Saved test run to disk');
          });
        }
      });
    });
  }

  /**
     * Returns the active workspace
     */
  getActiveWorkspace() {
    return pm.runnerStore.getState().selection.workspace.id;
  }

  /**
     * Import a list of JSON files as a Run results.
     *
     * @param {File[]} runs - list of files to import as Runs
     *
     * @function RunnerController#importRun
     */
  importRun(runs) {
    let reader,
    data,
    importJSON,
    runId,
    isExisting,
    workspace,
    state = pm.runnerStore.getState();

    _.forEach(runs, run => {
      reader = new FileReader();

      reader.onload = e => {
        data = e.target.result;
        try {
          importJSON = JSON.parse(data.toString());
          runId = importJSON.id;
          if (state.runs[runId] && state.runs[runId].workspace === this.getActiveWorkspace()) {
            pm.alerts.error('The run you are trying to import already exists.');
            return false;
          }
        }
        catch (err) {
          console.error(err);
          pm.alerts.error('Collection runs must be valid JSON objects');
          return false;
        }

        this.actions.importRun(importJSON, false);
        __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'create', 'import', this.getTotalRequests(runId));
      };

      reader.readAsText(run);
    });
  }

  fetchRun(runId, callback) {
    let loadedRuns = pm.runnerStore.getState();
    if (loadedRuns.runs[runId].iterations) {
      return _.isFunction(callback) && callback(loadedRuns.runs[runId]);
    }

    __WEBPACK_IMPORTED_MODULE_19__modules_controllers_CollectionRunController__["a" /* default */].get({ id: runId }).then(run => {
      this.actions.loadRun(run);
      _.isFunction(callback) && callback(run);
    });
  }

  /**
     * Loads Runs from IndexedDB to memory.
     *
     * Note: This function is debounced by 2000ms.
     *
     * @function RunnerController#loadRunsFromDB
     *
     * @param {Function} callback - callback executed after loading the Runs.
     *
     * @listens AppWindow#reloadRuns
     */
  loadRunsFromDB() {
    __WEBPACK_IMPORTED_MODULE_19__modules_controllers_CollectionRunController__["a" /* default */].getAll().then(runs => {
      this.actions.loadRuns(runs, true);
      return Promise.resolve(runs);
    }).
    catch(e => {
      return Promise.reject(e);
    });
  }

  /**
     * Makes sure only results for last N Runs are stored. The number of results is determined by {@link RunnerController#maxRunCount}
     *
     * @function RunnerController#cleanRuns
     */
  cleanRuns() {
    // Check total numbers of runs in db, clean runs accordingly
    let state = pm.runnerStore.getState().runs,
    totalRuns = _.size(state);
    if (totalRuns > this.maxRunCount) {
      let sortedRuns = _.sortBy(state, run => {
        return run.createdAt;
      });

      // Sorted in ascending order of creation date
      _.each(sortedRuns, (run, index) => {
        this.actions.cleanRun(run.id);
        return index - 1 < totalRuns - this.maxRunCount;
      });
    }
  }

  loadWorkspacesFromDB(callback) {
    return __WEBPACK_IMPORTED_MODULE_16__modules_controllers_WorkspaceController__["a" /* default */].getAll({}).then(workspaces => {
      this.workspaceActions.loadWorkspaces(workspaces);
      return Promise.resolve(workspaces);
    });
  }

  populateArchivedCollections() {
    __WEBPACK_IMPORTED_MODULE_23__modules_controllers_ArchivedResourceController__["a" /* default */].getAll().then(archiveList => {
      this.archivedCollectionActions.loadArchivedCollections(archiveList);
    });
  }

  populateCollections(workspaceId) {
    let folders = [],
    requests = [],
    collections = [],
    collectionActions = this.collectionActions,
    folderActions = this.folderActions,
    requestActions = this.requestActions;

    return __WEBPACK_IMPORTED_MODULE_16__modules_controllers_WorkspaceController__["a" /* default */].get({ id: workspaceId }).
    then(function (workspace) {
      let criteria = {};
      if (workspace) {
        criteria = { id: workspace.collections };
      }
      return __WEBPACK_IMPORTED_MODULE_18__modules_controllers_CollectionController__["a" /* default */].getCollections(criteria).then(flatCollections => {
        collections = flatCollections;
        return Promise.all(_.map(flatCollections, collection => {
          return __WEBPACK_IMPORTED_MODULE_18__modules_controllers_CollectionController__["a" /* default */].getCollection({ id: collection.id }, { populate: true });
        }));

      }).
      then(collectionsArray => {
        _.forEach(collectionsArray, collectionFromDb => {
          folders = _.concat(folders, collectionFromDb.folders);
          requests = _.concat(requests, collectionFromDb.requests);
        });
        collectionActions.loadCollections(collections);
        folderActions.loadFolders(folders);
        requestActions.loadRequests(requests);
      }).catch(e => {
        console.log(e);
      });
    });
  }

  repopulateCollections() {
    return __WEBPACK_IMPORTED_MODULE_21__common_controllers_WindowController___default.a.get({ id: pm.window.id }).
    then(window => __WEBPACK_IMPORTED_MODULE_20__modules_controllers_WorkspaceSessionController__["a" /* default */].get({ id: window.activeSession })).
    then(session => this.populateCollections(session.workspace));
  }

  populateCollection(collectionId) {
    let folders = [],
    requests = [],
    folderActions = this.folderActions,
    requestActions = this.requestActions;

    __WEBPACK_IMPORTED_MODULE_18__modules_controllers_CollectionController__["a" /* default */].getCollection({ id: collectionId }, { populate: true }).
    then(collectionFromDb => {
      folders = _.concat(folders, collectionFromDb.folders);
      requests = _.concat(requests, collectionFromDb.requests);

      folderActions.loadFolders(folders);
      requestActions.loadRequests(requests);
    }).catch(e => {
      console.log(e);
    });
  }

  populateEnvironments(workspaceId) {
    let environmentActions = this.environmentActions;
    __WEBPACK_IMPORTED_MODULE_16__modules_controllers_WorkspaceController__["a" /* default */].get({ id: workspaceId }).
    then(function (workspace) {
      let criteria = {};
      if (workspace) {
        criteria = { id: workspace.environments };
      }
      __WEBPACK_IMPORTED_MODULE_17__modules_controllers_EnvironmentController__["a" /* default */].getAll(criteria).then(environments => {
        environments = _.sortBy(environments, ['name']);
        environmentActions.loadEnvironments(environments);
      });
    });
  }

  /**
     * Triggers an event for the missing current workspace modal to show up
     * Also switches the active workspace
     * @param  {[String]} workspaceId [Workspace ID which is deleted]
     */
  handleWorkspaceDelete(workspaceId) {
    let runnerState = pm.runnerStore.getState(),
    activeWorkspace = runnerState.selection.workspace,
    workspaces = _.filter(runnerState.workspaces, workspace => {
      return workspace.id !== workspaceId;
    });

    // This should never happen
    if (_.isEmpty(workspaces)) {
      pm.alerts.error('FATAL ERROR: No personal workspaces. Please reload the app.');
      return;
    }

    if (workspaceId === activeWorkspace.id) {
      pm.mediator.trigger('missingCurrentWorkspace', { name: activeWorkspace.name });
      this.changeSelection('workspace', workspaces[0].id);
    }
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_RunnerDataFileTypeConstants__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_WorkspaceController__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_controllers_WindowController__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_controllers_WindowController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__common_controllers_WindowController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_default_workspace__ = __webpack_require__(55);







const selectCollection = id => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["H" /* RUNNER_SET_COLLECTION */],
    id: id };

};
/* harmony export (immutable) */ __webpack_exports__["selectCollection"] = selectCollection;


const selectFolder = (id, collectionId) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["M" /* RUNNER_SET_FOLDER */],
    id,
    collection: collectionId };

};
/* harmony export (immutable) */ __webpack_exports__["selectFolder"] = selectFolder;


const selectEnvironment = id => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["L" /* RUNNER_SET_ENV */],
    id };

};
/* harmony export (immutable) */ __webpack_exports__["selectEnvironment"] = selectEnvironment;


const setIterations = value => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["N" /* RUNNER_SET_ITERATIONS */],
    value };

};
/* harmony export (immutable) */ __webpack_exports__["setIterations"] = setIterations;


const setDelay = value => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["K" /* RUNNER_SET_DELAY */],
    value };

};
/* harmony export (immutable) */ __webpack_exports__["setDelay"] = setDelay;


const readDataFile = file => {
  return function (dispatch) {
    dispatch(removeDataFile());
    pm.runner.readFile(file, (err, result, fileDataType) => {
      dispatch(setDataFile(file, result));
      if (!_.isEqual(fileDataType, __WEBPACK_IMPORTED_MODULE_1__constants_RunnerDataFileTypeConstants__["c" /* RUNNER_DATA_FILE_TYPE_UNDETERMINED */])) {
        dispatch(setIterations(_.size(result)));
      }
    });
  };
};
/* harmony export (immutable) */ __webpack_exports__["readDataFile"] = readDataFile;


const setDataFile = (file, data = null) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["I" /* RUNNER_SET_DATA_FILE */],
    file,
    fileType: pm.runner.getFileType(file),
    data };

};
/* harmony export (immutable) */ __webpack_exports__["setDataFile"] = setDataFile;


const removeDataFile = () => {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["F" /* RUNNER_REMOVE_DATA_FILE */] };
};
/* harmony export (immutable) */ __webpack_exports__["removeDataFile"] = removeDataFile;


const setDataFileType = fileType => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["J" /* RUNNER_SET_DATA_FILE_TYPE */],
    fileType };

};
/* harmony export (immutable) */ __webpack_exports__["setDataFileType"] = setDataFileType;


const setPersistence = value => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["O" /* RUNNER_SET_PERSIST_VARS */],
    value };

};
/* harmony export (immutable) */ __webpack_exports__["setPersistence"] = setPersistence;


const setSaveResponse = value => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["P" /* RUNNER_SET_SAVE_RESPONSES */],
    value };

};
/* harmony export (immutable) */ __webpack_exports__["setSaveResponse"] = setSaveResponse;


const switchWorkspace = value => {
  return dispatch => {
    return __WEBPACK_IMPORTED_MODULE_2__modules_controllers_WorkspaceController__["a" /* default */].get({ id: value }).
    then(workspace => {
      if (!workspace) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__utils_default_workspace__["c" /* defaultUserWorkspaceId */])().
        then(defaultWorkspaceId => __WEBPACK_IMPORTED_MODULE_2__modules_controllers_WorkspaceController__["a" /* default */].get({ id: defaultWorkspaceId }));
      }

      return workspace;
    }).
    then(workspace => {
      return dispatch({
        type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["X" /* RUNNER_SWITCH_WORKSPACE */],
        value: workspace });

    });
  };
};
/* harmony export (immutable) */ __webpack_exports__["switchWorkspace"] = switchWorkspace;


const setWorkspace = value => {
  return dispatch => {
    return __WEBPACK_IMPORTED_MODULE_2__modules_controllers_WorkspaceController__["a" /* default */].get({ id: value }).
    then(workspace => {
      if (!workspace) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__utils_default_workspace__["c" /* defaultUserWorkspaceId */])().
        then(defaultWorkspaceId => __WEBPACK_IMPORTED_MODULE_2__modules_controllers_WorkspaceController__["a" /* default */].get({ id: defaultWorkspaceId }));
      }

      return workspace;
    }).
    then(workspace => {
      dispatch({
        type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["Q" /* RUNNER_SET_WORKSPACE */],
        value: workspace });


      return __WEBPACK_IMPORTED_MODULE_3__common_controllers_WindowController___default.a.getLaunchParams();
    }).
    then(([window, params]) => {
      let sessionState = _.get(params.session, 'state', {});
      if (sessionState.folder) {
        dispatch(selectFolder(sessionState.folder, sessionState.collection));
      } else
      {
        dispatch(selectCollection(sessionState.collection));
      }

      if (sessionState.environment) {
        dispatch(selectEnvironment(sessionState.environment));
      }
    });
  };
};
/* harmony export (immutable) */ __webpack_exports__["setWorkspace"] = setWorkspace;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_runner_BackboneReduxBridge__ = __webpack_require__(178);




const loadWorkspaces = workspaces => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["C" /* RUNNER_LOAD_WORKSPACE */],
    workspaces };

};
/* harmony export (immutable) */ __webpack_exports__["loadWorkspaces"] = loadWorkspaces;


const createWorkspace = workspace => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["f" /* RUNNER_CREATE_WORKSPACE */],
    workspace };

};
/* harmony export (immutable) */ __webpack_exports__["createWorkspace"] = createWorkspace;


const updateWorkspace = workspace => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["_1" /* RUNNER_UPDATE_WORKSPACE */],
    workspace };

};
/* harmony export (immutable) */ __webpack_exports__["updateWorkspace"] = updateWorkspace;


const deleteWorkspace = workspaceId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["n" /* RUNNER_DELETE_WORKSPACE */],
    workspaceId };

};
/* harmony export (immutable) */ __webpack_exports__["deleteWorkspace"] = deleteWorkspace;


/***/ }),

/***/ 1410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);


const loadCollections = collections => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["x" /* RUNNER_LOAD_COLLECTIONS */],
    collections };

};
/* harmony export (immutable) */ __webpack_exports__["loadCollections"] = loadCollections;


const createCollection = collection => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["d" /* RUNNER_CREATE_COLLECTION */],
    collection };

};
/* harmony export (immutable) */ __webpack_exports__["createCollection"] = createCollection;


const updateCollection = collection => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["Y" /* RUNNER_UPDATE_COLLECTION */],
    collection };

};
/* harmony export (immutable) */ __webpack_exports__["updateCollection"] = updateCollection;


const deleteCollection = collectionId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["i" /* RUNNER_DELETE_COLLECTION */],
    collectionId };

};
/* harmony export (immutable) */ __webpack_exports__["deleteCollection"] = deleteCollection;


/***/ }),

/***/ 1411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);


const loadFolders = folders => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["z" /* RUNNER_LOAD_FOLDERS */],
    folders };

};
/* harmony export (immutable) */ __webpack_exports__["loadFolders"] = loadFolders;


const deleteFolder = folderId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["k" /* RUNNER_DELETE_FOLDER */],
    folderId };

};
/* harmony export (immutable) */ __webpack_exports__["deleteFolder"] = deleteFolder;


/***/ }),

/***/ 1412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);


const loadRequests = requests => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["A" /* RUNNER_LOAD_REQUESTS */],
    requests };

};
/* harmony export (immutable) */ __webpack_exports__["loadRequests"] = loadRequests;


const updateRequest = request => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["_0" /* RUNNER_UPDATE_REQUEST */],
    request };

};
/* harmony export (immutable) */ __webpack_exports__["updateRequest"] = updateRequest;


const deleteRequest = requestId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["l" /* RUNNER_DELETE_REQUEST */],
    requestId };

};
/* harmony export (immutable) */ __webpack_exports__["deleteRequest"] = deleteRequest;


/***/ }),

/***/ 1413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_runner_BackboneReduxBridge__ = __webpack_require__(178);



const loadEnvironments = environments => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["y" /* RUNNER_LOAD_ENVIRONMENTS */],
    environments };

};
/* harmony export (immutable) */ __webpack_exports__["loadEnvironments"] = loadEnvironments;


const createEnvironment = environment => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["e" /* RUNNER_CREATE_ENVIRONMENT */],
    environment };

};
/* harmony export (immutable) */ __webpack_exports__["createEnvironment"] = createEnvironment;


const updateEnvironment = environment => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["Z" /* RUNNER_UPDATE_ENVIRONMENT */],
    environment };

};
/* harmony export (immutable) */ __webpack_exports__["updateEnvironment"] = updateEnvironment;


const deleteEnvironment = environmentId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["j" /* RUNNER_DELETE_ENVIRONMENT */],
    environmentId };

};
/* harmony export (immutable) */ __webpack_exports__["deleteEnvironment"] = deleteEnvironment;


/***/ }),

/***/ 1414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);


const login = user => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["_2" /* RUNNER_USER_LOGIN */],
    user };

};
/* harmony export (immutable) */ __webpack_exports__["login"] = login;


const logout = () => {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["_3" /* RUNNER_USER_LOGOUT */] };
};
/* harmony export (immutable) */ __webpack_exports__["logout"] = logout;


/***/ }),

/***/ 1415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);


const loadArchivedCollections = archivedCollections => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["w" /* RUNNER_LOAD_ARCHIVED_COLLECTIONS */],
    archivedCollections };

};
/* harmony export (immutable) */ __webpack_exports__["loadArchivedCollections"] = loadArchivedCollections;


const deleteArchivedCollection = archivedCollection => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["h" /* RUNNER_DELETE_ARCHIVED_COLLECTION */],
    archivedCollection };

};
/* harmony export (immutable) */ __webpack_exports__["deleteArchivedCollection"] = deleteArchivedCollection;


const createArchivedCollection = archivedCollection => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["c" /* RUNNER_CREATE_ARCHIVED_COLLECTION */],
    archivedCollection };

};
/* harmony export (immutable) */ __webpack_exports__["createArchivedCollection"] = createArchivedCollection;


/***/ }),

/***/ 1416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuntimeRunner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_runner_RunnerRunsActions__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_events__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_postman_collection_transformer__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_postman_collection_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_postman_collection_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_util_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_SdkToModelTransformer__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_ModelToSdkTransformer__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_RuntimeBridge__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_postman_collection__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_controllers_CollectionController__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_controllers_EnvironmentController__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_controllers_GlobalsController__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducers_runner_BackboneReduxBridge__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_RunnerSaveResponseConstants__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_services_VariableSessionService__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_SessionHelper__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__runner_utils__ = __webpack_require__(1417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utils_RequestUtil__ = __webpack_require__(367);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



















const MAX_RESPONSE_SIZE = 300000;

/**
                                   * This is a Proxy class for the `postman-runtime`'s run. Handles lifecylcle and results of a Run.
                                   *
                                   * @class RuntimeRunner
                                   * @extends {EventEmitter}
                                   */let
RuntimeRunner = class RuntimeRunner extends __WEBPACK_IMPORTED_MODULE_2_events___default.a {

  initialize(selection, callback) {
    let {
      target,
      environment,
      persist } =
    selection;

    __WEBPACK_IMPORTED_MODULE_9__modules_controllers_CollectionController__["a" /* default */].getCollection({ id: target.collection }, { populate: true }).
    then(async collection => {
      let activeWorkspaceId = pm.runnerStore.getState().selection.workspace.id,
      environmentVarSession = await this.fetchEnvironmentSession(selection.environment, activeWorkspaceId),
      globals = await this.fetchGlobals(activeWorkspaceId),
      globalsVarSession = await this.fetchGlobalsSession(globals.id, activeWorkspaceId),
      transformedCollection;

      persist && pm.settings.setSetting('persistRunnerVariables', true); // For legacy reasons (VariableProcessor uses this)
      this.selection = selection;
      this.actions = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_1__actions_runner_RunnerRunsActions__, pm.runnerStore.dispatch);
      this.collection = collection;
      this.folders = collection.folders;
      this.requests = collection.requests;
      this.folderMap = [];
      this.requestMap = [];
      this.activeGlobalsId = globals.id;
      this.activeEnvSessionId = environmentVarSession && environmentVarSession.id;
      this.activeGlobalsSessionId = globalsVarSession && globalsVarSession.id;

      // Strip out bodies for GET and other methods, CLIENTAPP#2144
      // @todo Remove the disabled variables, needs to be handled in runtime #RUNTIME-450
      if (!_.isEmpty(__WEBPACK_IMPORTED_MODULE_4__utils_util_js__["a" /* default */].getEnabledValues(collection.variables))) {
        let sessionId = Object(__WEBPACK_IMPORTED_MODULE_15__utils_SessionHelper__["b" /* getSessionId */])('collection', collection.id, activeWorkspaceId),
        variableSession = await Object(__WEBPACK_IMPORTED_MODULE_14__modules_services_VariableSessionService__["a" /* getSessionFor */])(sessionId, collection);
        _.assign(collection, { variables: variableSession.values });
      }

      collection.requests = _.map(collection.requests, request => {
        // Do not send queryParams to transformer, CLIENTAPP#3799
        request = _.omit(request, 'queryParams');

        if (!__WEBPACK_IMPORTED_MODULE_4__utils_util_js__["a" /* default */].isMethodWithBody(request.method)) {
          return _extends({},
          request, {
            data: null });

        }
        return request;
      });

      try {
        transformedCollection = __WEBPACK_IMPORTED_MODULE_3_postman_collection_transformer___default.a.convert(collection, {
          inputVersion: '1.0.0',
          outputVersion: '2.0.0',
          retainIds: true });

      }
      catch (e) {
        pm.alerts.error('Something went wrong when running the collection:' + e.toString());
        return;
      }

      // Map the values
      _.map(this.folders, folder => {
        this.folderMap[folder.id] = folder;
      });
      _.map(this.requests, request => {
        this.requestMap[request.id] = request;
      });

      this.sdkCollection = new __WEBPACK_IMPORTED_MODULE_8_postman_collection___default.a.Collection(transformedCollection);

      (pm.settings.getSetting('sendNoCacheHeader') || pm.settings.getSetting('sendPostmanTokenHeader')) &&
      this.sdkCollection.forEachItem(item => {
        pm.settings.getSetting('sendNoCacheHeader') && item.request.addHeader({
          key: 'cache-control',
          value: 'no-cache',
          enabled: true });


        pm.settings.getSetting('sendPostmanTokenHeader') && item.request.addHeader({
          key: 'Postman-Token',
          value: '{{$guid}}',
          enabled: true });

      });

      this.initialEnv = environmentVarSession && environmentVarSession.values && _.reject(environmentVarSession.values, { enabled: false }) || [];
      this.initialGlobals = globalsVarSession && globalsVarSession.values && _.reject(globalsVarSession.values, { enabled: false }) || [];

      this.options = {
        runnerOptions: {
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
            requirePath: '/js/libs/' } } };




      this.showExceptionAlert = _.once(this.showExceptionAlert);
      _.isFunction(callback) && callback();
    }).
    catch(err => {
      console.error('Error while initializing runner', err);
    });
  }

  async fetchGlobals(activeWorkspaceId) {
    if (!activeWorkspaceId) {
      return null;
    }

    return await __WEBPACK_IMPORTED_MODULE_11__modules_controllers_GlobalsController__["a" /* default */].get({ workspace: activeWorkspaceId });
  }

  async fetchEnvironments(environmentId) {
    if (!environmentId) {
      return null;
    }

    return await __WEBPACK_IMPORTED_MODULE_10__modules_controllers_EnvironmentController__["a" /* default */].get({ id: environmentId });
  }

  async fetchGlobalsSession(activeGlobalsId, activeWorkspaceId) {
    if (!activeGlobalsId || !activeWorkspaceId) {
      return null;
    }

    return Object(__WEBPACK_IMPORTED_MODULE_14__modules_services_VariableSessionService__["a" /* getSessionFor */])(Object(__WEBPACK_IMPORTED_MODULE_15__utils_SessionHelper__["b" /* getSessionId */])('globals', activeGlobalsId, activeWorkspaceId));
  }

  async fetchEnvironmentSession(environmentId, activeWorkspaceId) {
    if (!environmentId) {
      return null;
    }

    return Object(__WEBPACK_IMPORTED_MODULE_14__modules_services_VariableSessionService__["a" /* getSessionFor */])(Object(__WEBPACK_IMPORTED_MODULE_15__utils_SessionHelper__["b" /* getSessionId */])('environment', environmentId, activeWorkspaceId));
  }

  /**
     * Starts the Run.
     *
     * @param {Boolean} retry - Is this run a retry
     * @param {Function} callback - callback executed after the Run is started
     *
     * @function RuntimeRunner#start
     */
  start(retry, callback) {
    let {
      target,
      data,
      dataFile,
      delay,
      iterations } =
    this.selection;

    this.retry = retry;

    pm.runner.readFile(dataFile, (err, fileData) => {
      if (err) {
        pm.alerts.error('Could not start run: ' + err);
        return;
      }

      if (!_.isNumber(delay)) {
        let converted = _.toNumber(delay);
        delay = Number.isNaN(converted) ? 0 : converted;
      }

      if (!_.isNumber(iterations)) {
        let converted = _.toNumber(iterations);
        iterations = Number.isNaN(converted) ? 1 : converted;
      }

      const runOptions = {
        environment: { values: this.initialEnv },
        globals: { values: this.initialGlobals },
        iterationCount: parseInt(iterations),
        delay: { item: delay },
        data: fileData,
        stopOnError: true,
        useSystemProxy: pm.settings.getSetting('useSystemProxy'),
        proxies: pm.proxyListManager.globalProxies.toJSON() };


      if (target.folder) {
        let collectionJSON = this.collection,
        folderPath = __WEBPACK_IMPORTED_MODULE_4__utils_util_js__["a" /* default */].getFoldersPath(collectionJSON, target.folder);

        runOptions.entrypoint = { execute: target.folder };
        folderPath && _.assign(runOptions.entrypoint, { lookupStrategy: 'path', path: folderPath.path });

      }

      // TODO investigate on effects of async
      this.envVars = null;
      this.globalVars = null;

      let runMetaData = {
        certificates: __WEBPACK_IMPORTED_MODULE_6__utils_ModelToSdkTransformer__["a" /* default */].getClientSslCerts(pm.certificateManager),
        cookiePartitionId: __WEBPACK_IMPORTED_MODULE_4__utils_util_js__["a" /* default */].getCookiePartition() };


      let runnerOptions = this.options && this.options.runnerOptions;
      __WEBPACK_IMPORTED_MODULE_7__controllers_RuntimeBridge__["a" /* default */].startRun(runnerOptions, runOptions, runMetaData, this.sdkCollection, {
        console: pm.console.log.bind(pm.console),
        io: this.onIOEvent.bind(this),
        error: pm.console.log.bind(pm.console, 'error'),
        exception: this.onException.bind(this),
        start: this.onStartRun.bind(this, callback),
        pause: this.onPauseRun.bind(this),
        resume: this.onResumeRun.bind(this),
        stop: this.onStopRun.bind(this),
        abort: this.onStopRun.bind(this),
        beforeIteration: this.onStartIteration.bind(this),
        beforeRequest: this.onStartRequest.bind(this),
        beforePrerequest: this.onStartPreRequestScript.bind(this),
        prerequest: this.onPreRequestScript.bind(this),
        beforeTest: this.onStartTest.bind(this),
        assertion: this.onAssertion.bind(this),
        test: this.onEndTest.bind(this),
        response: this.onEndRequest.bind(this),
        iteration: this.onEndIteration.bind(this),
        done: this.onEndRun.bind(this) }).
      then(id => {
        this.runLinkID = id;
      });
    });
  }

  /**
     * Pause this run.
     *
     * @function RuntimeRunner#pause
     */
  pause() {
    this.runLinkID && __WEBPACK_IMPORTED_MODULE_7__controllers_RuntimeBridge__["a" /* default */].pauseRun(this.runLinkID);
  }

  /**
     * Resume this run.
     *
     * @function RuntimeRunner#resume
     */
  resume() {
    this.runLinkID && __WEBPACK_IMPORTED_MODULE_7__controllers_RuntimeBridge__["a" /* default */].resumeRun(this.runLinkID);
  }

  /**
     * Stops this run.
     *
     * @function RuntimeRunner#stop
     */
  stop() {
    this.actions.stoppingRun(this.runId);
    this.runLinkID && __WEBPACK_IMPORTED_MODULE_7__controllers_RuntimeBridge__["a" /* default */].stopRun(this.runLinkID);
  }

  /**
     * Handles an IO event from runtime.
     *
     * Note: Bound to `io` callback from postman-runtime.
     *
     * @param {?Error} err Error if any passed down from postman-runtime
     * @param {RunCursor} cursor current cursor position passed down from postman-runtime
     * @param {Object} trace meta data including the source and type of this event
     * @param {?SDKResponse} response response passed down from postman-runtime
     * @param {?SDKRequest} request request passed down from postman-runtime
     *
     * @returns {undefined}
     *
     * @callback RuntimeRunner#io
     */
  onIOEvent(err, cursor, trace, response, request) {
    let consolePayload = {};

    if (trace.type !== 'http' || !request) {
      return;
    }

    consolePayload.request = {
      url: _.invoke(request, 'url.toString'),
      method: request.method,
      headers: _.invoke(request, 'headers.toObject'),
      body: request.body,
      certificate: request.certificate,
      proxy: request.proxy };


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
  }

  /**
     * Shows an alert when an exception occurs in the run
     *
     * @return {undefined}
     */
  showExceptionAlert() {
    pm.alerts.error('Something went wrong while running your scripts. Check Postman Console for more info.');
  }

  /**
     * Handles exception event from runtime
     *
     * @param {RunCursor} cursor Current cursor position passed down from postman-runtime
     * @param {Error} exception The exception
     *
     * @return {undefined}
     */
  onException(cursor, exception) {
    // This is a separate function so that multiple errors do not stack, and only once alert is shown per run.
    this.showExceptionAlert();
    pm.console.error('exception', { message: `${exception.name} | ${exception.message}` });
    console.warn(`Error running scripts: ${exception.name} | ${exception.message}`, exception);
  }

  /**
     * Updates the UI that this run was started.
     *
     * Note: Bound to `start` callback from postman-runtime.
     *
     * @param {Function} callback callback for start passed down from postman-runtime
     * @param {?Error} err Error if any passed down from postman-runtime
     * @param {RunCursor} cursor current cursor position passed down from postman-runtime
     *
     * @returns {undefined}
     *
     * @callback RuntimeRunner#onStartRun
     */
  onStartRun(callback, err, cursor) {
    if (err) {
      return callback(err);
    }

    this.runId = cursor.ref;
    let runName;

    if (this.selection.target.folder) {
      runName = this.getFolderName(this.selection.target.collection, this.selection.target.folder);
    } else
    {
      runName = this.getCollectionName(this.selection.target.collection);
    }

    this.actions.startRun(
    this.runId,
    this.selection,
    runName,
    this.retry);

    return _.isFunction(callback) && callback(err, this.runId);
  }

  /**
     * Updates the UI for the start of an iteration.
     *
     * Note: Bound to `beforeIteration` callback of postman-runtime
     *
     * @param {?Error} err - Error if any passed down from postman-runtime
     * @param {RunCursor} cursor - current cursor position passed down from postman-runtime
     *
     * @returns {undefined}
     *
     * @callback RuntimeRunner#onStartIteration
     */
  onStartIteration(err, cursor) {
    if (err) {
      console.warn(err);
      return;
    }
    this.actions.startIteration(
    this.runId,
    cursor.iteration);

  }

  /**
     * Resets the request's assertions to an empty array so that assertions along the lifetime of this request may be captured.
     *
     * Note: Bound to `beforePrerequest` callback of postman-runtime.
     *
     * @param {?Error} err - Error if any passed down from postman-runtime
     * @param {RunCursor} cursor - current cursor position passed down from postman-runtime
     * @param {Object} events -  results of pre request script execution
     * @param {SDKItem} item - item passed down from postman-runtime
     *
     * @callback RuntimeRunner#onStartPreRequestScript
     */
  onStartPreRequestScript(err, cursor, events, item) {
    this.assertions = [];
  }

  /**
     * Updates the UI for errors/test results.
     *
     * Note: Bound to `prerequest` callback of postman-runtime.
     *
     * @param {?Error} err - Error if any passed down from postman-runtime
     * @param {RunCursor} cursor - current cursor position passed down from postman-runtime
     * @param {Object} prResults-  results of pre request script execution
     * @param {SDKItem} item - item passed down from postman-runtime
     *
     * @callback RuntimeRunner#onPreRequestScript
     */
  onPreRequestScript(err, cursor, prResults, item) {
    var { error: errorObj } = _.find(prResults, prResult => prResult.error) || {};
    let scriptError = err || errorObj;
    if (scriptError) {
      console.warn(`Error executing pre-request scripts for ${item.name}: ${scriptError.name}: ${scriptError.message}`);
      pm.alerts.error(`Error executing pre-request scripts for ${item.name}: Check DevTools for more info`);

      // Needs to be removed:  https://postmanlabs.atlassian.net/browse/CLIENTAPP-2256
      pm.console.error('exception', { message: `${item.name}: ${scriptError.name}: ${scriptError.message}` });

      this.actions.errorRequest(
      this.runId,
      cursor.iteration,
      {
        id: item.toJSON().id,
        ref: cursor.ref },

      'An error occured while running pre-request scripts for this request.');

    }

    if (this.selection.persist) {
      if (_.isArray(prResults) && !_.isEmpty(prResults)) {
        if (!this.envVars) {
          this.envVars = new __WEBPACK_IMPORTED_MODULE_8_postman_collection___default.a.VariableScope({ mutations: {} });
        }
        if (!this.globalVars) {
          this.globalVars = new __WEBPACK_IMPORTED_MODULE_8_postman_collection___default.a.VariableScope({ mutations: {} });
        }

        _.forEach(prResults, result => {
          Object(__WEBPACK_IMPORTED_MODULE_17__utils_RequestUtil__["a" /* mergeMutations */])(this.envVars.mutations, _.get(result, 'result.environment.mutations'));
          Object(__WEBPACK_IMPORTED_MODULE_17__utils_RequestUtil__["a" /* mergeMutations */])(this.globalVars.mutations, _.get(result, 'result.globals.mutations'));
        });
      }
    }
  }

  /**
     * Updates the UI for sending a request.
     *
     * Note: Bound to `beforeRequest` callback of postman-runtime.
     *
     * @param {?Error} err - Error if any passed down from postman-runtime
     * @param {RunCursor} cursor - current cursor position passed down from postman-runtime
     * @param {SDKRequest} req - SDK request passed down from postman-runtime
     * @param {SDKItem} item - SDK item passed down from postman-runtime
     *
     * @returns {undefined}
     *
     * @callback RuntimeRunner#onStartRequest
     */
  onStartRequest(err, cursor, req, item) {
    if (err) {
      console.warn(`Error sending request ${item.name}: ${err.name}: ${err.message}`);
      pm.alerts.error(`Error sending request ${item.name}: Check DevTools for more info`);
      this.actions.errorRequest(
      this.runId,
      cursor.iteration,
      {
        id: item.toJSON().id,
        ref: cursor.ref },

      'An error occured while running this request.');

      return;
    }

    let requestUrl = req.url && req.url.toString(),
    requestJson = req.toJSON(),
    itemJson = item.toJSON(),
    requestHeaders = __WEBPACK_IMPORTED_MODULE_5__utils_SdkToModelTransformer__["a" /* default */].getHeaders(requestJson);

    pm.console.net(cursor.httpRequestId, {
      request: {
        url: requestUrl,
        method: requestJson.method,
        headers: requestHeaders } });



    let requestBody,
    itemMeta = this.requestMap[item.toJSON().id];

    // this request was not part of the collection, i.e an intermediate request
    if (!itemMeta) {
      return;
    }

    if (requestJson.body) {
      requestBody = _.isArray(requestJson.body[requestJson.body.mode]) ?
      _.reduce(requestJson.body[requestJson.body.mode], (body, data) => {
        !data.disabled && (body[data.key] = data.value);
        return body;
      }, {}) : requestJson.body[requestJson.body.mode];
    }

    let data = { collection: this.collection, folderMap: this.folderMap },
    nodePath = Object(__WEBPACK_IMPORTED_MODULE_16__runner_utils__["a" /* findNodePath */])(itemMeta.name, itemMeta, data);

    this.actions.startRequest(
    this.runId,
    cursor.iteration,
    {
      name: item.name,
      id: item.id,
      ref: cursor.ref,
      url: requestUrl,
      unresolvedUrl: _.invoke(item, 'request.url.toString') || '',
      method: requestJson.method,
      path: nodePath,
      body: requestBody });


  }

  /**
     * Updates the UI for the start of a test script.
     *
     * Note: Bound to `beforeTest` callback of postman-runtime.
     *
     * @param {?Error} err - Error if any passed down from postman-runtime
     * @param {RunCursor} cursor - current cursor position passed down from postman-runtime
     * @param {Object} events - events passed down from postman-runtime
     * @param {SDKItem} item - SDK Item passed down from postman-runtime
     *
     * @returns {undefined}
     *
     * @callback RuntimeRunner#onStartTest
     */
  onStartTest(err, cursor, events, item) {
    if (err) {
      console.warn(err);
      this.actions.errorRequest(
      this.runId,
      cursor.iteration,
      {
        id: item.toJSON().id,
        ref: cursor.ref },

      'An error occured while running tests for this request.');

      return;
    }

    this.actions.startTest(
    this.runId,
    cursor.iteration,
    {
      id: item.toJSON().id,
      ref: cursor.ref });


  }

  /**
     * Updates the UI for an assertion in the test script.
     *
     * Note: Bound to `assertion` callback of postman-runtime.
     *
     * @param {RunCursor} cursor - Current cursor position passed down from postman-runtime
     * @param {Object} assertions - The assertion that was made
     *
     * @returns {undefined}
     *
     * @callback RuntimeRunner#onAssertion
     */
  onAssertion(cursor, assertions) {
    let status;

    _.forEach(assertions, assertion => {
      if (assertion.error) {
        console.log(`Assertion ${assertion.name} failed: ${assertion.error.message}`);
      }

      if (assertion.skipped) {
        status = 'skipped';
      } else
      if (assertion.passed) {
        status = 'pass';
      } else
      {
        status = 'fail';
      }

      assertion.status = status;

      this.actions.endTest(
      this.runId,
      cursor.iteration,
      {
        id: cursor.ref,
        ref: cursor.ref },

      assertion);


      this.assertions.push(assertion);
    });
  }

  /**
     * Updates the UI for end of a test script.
     *
     * Also updates the environment from postman-runtime to App if `persist` options is selected.
     *
     * Note: Bound to `test` callback of postman-runtime.
     *
     * @param {?Error} err - Error if any passed down from postman-runtime
     * @param {RunCursor} cursor - current cursor position passed down from postman-runtime
     * @param {Object} testResults - results from test script passed down from postman-runtime
     * @param {SDKItem} item - SDK Item passed down from postman-runtime
     *
     * @returns {undefined}
     *
     * @callback RuntimeRunner#onEndTest
     */
  onEndTest(err, cursor, testResults, item) {
    if (err) {
      console.warn(`Error running tests for ${item.name}: ${err}`);
      pm.alerts.error(`Error executing test scripts for ${item.name}: Check DevTools for more info`);
      this.actions.errorRequest(
      this.runId,
      cursor.iteration,
      {
        id: item.toJSON().id,
        ref: cursor.ref },

      'An error occured while running tests for this request.');

      return;
    }

    let allTestsPass = true;

    // Try calculating test results only if there were tests
    if (_.isArray(testResults) && !_.isEmpty(testResults)) {
      var { error: errorObj } = _.find(testResults, testResult => testResult.error) || {};
      let scriptError = err || errorObj;
      if (scriptError) {
        console.warn(`Error running tests for ${item.name}: ${scriptError.name}: ${scriptError.message}`);
        this.actions.errorTest(
        this.runId,
        cursor.iteration,
        {
          id: item.toJSON().id,
          ref: cursor.ref });



        // Needs to be removed:  https://postmanlabs.atlassian.net/browse/CLIENTAPP-2256
        pm.console.error('exception', { message: `${item.name}: ${scriptError.name}: ${scriptError.message}` });

        return;
      }

      allTestsPass = _.every(this.assertions, assertion => {
        return assertion.status === 'pass';
      });

      this.assertions = [];

      if (this.selection.persist) {
        if (_.isArray(testResults) && !_.isEmpty(testResults)) {
          if (!this.envVars) {
            this.envVars = new __WEBPACK_IMPORTED_MODULE_8_postman_collection___default.a.VariableScope({ mutations: {} });
          }
          if (!this.globalVars) {
            this.globalVars = new __WEBPACK_IMPORTED_MODULE_8_postman_collection___default.a.VariableScope({ mutations: {} });
          }

          _.forEach(testResults, result => {
            Object(__WEBPACK_IMPORTED_MODULE_17__utils_RequestUtil__["a" /* mergeMutations */])(this.envVars.mutations, _.get(result, 'result.environment.mutations'));
            Object(__WEBPACK_IMPORTED_MODULE_17__utils_RequestUtil__["a" /* mergeMutations */])(this.globalVars.mutations, _.get(result, 'result.globals.mutations'));
          });
        }
      }
    }

    // Persist Runner variables if the setting is set
    this.selection.persist && pm.settings.setSetting('persistRunnerVariables', true); // For legacy reasons (VariableProcessor uses this)

    let { saveResponse } = this.selection;
    let responseBody;

    // First, check if the response size is less than 300Kb
    if (this.response.size < MAX_RESPONSE_SIZE) {
      // Then, check saveResponse parameter
      switch (saveResponse) {
        case __WEBPACK_IMPORTED_MODULE_13__constants_RunnerSaveResponseConstants__["a" /* RUNNER_SAVE_ALL_RESPONSES */]:
          // If all, add body
          responseBody = this.response.body;
          break;
        case __WEBPACK_IMPORTED_MODULE_13__constants_RunnerSaveResponseConstants__["b" /* RUNNER_SAVE_FAILED_RESPONSES */]:
          // If failed, check if any test failed, if yes, then add body
          if (allTestsPass) {
            responseBody = 'Response body was not logged';
          } else
          {
            responseBody = this.response.body;
          }
          break;
        case __WEBPACK_IMPORTED_MODULE_13__constants_RunnerSaveResponseConstants__["c" /* RUNNER_SAVE_NO_RESPONSES */]:
          // If none, don't add body
          responseBody = 'Response body was not logged';}

    } else
    {
      responseBody = 'Response body is too large';
    }

    this.actions.addResponseBody(
    this.runId,
    cursor.iteration,
    {
      id: item.toJSON().id,
      ref: cursor.ref },

    { body: responseBody });

  }

  /**
     * Updates the UI for the completion of sending a request.
     *
     * Note: Bound to `request` callback of postman-runtime.
     *
     * @param {?Error} err - Error if any passed down from postman-runtime
     * @param {RunCursor} cursor - current cursor position passed down from postman-runtime
     * @param {SDKResponse} response - SDK response passed down from postman-runtime
     * @param {SDKResponse} request - SDK request passed down from postman-runtime
     * @param {SDKItem} item - SDK Item passed down from postman-runtime
     *
     * @returns {undefined}
     *
     * @callback RuntimeRunner#onEndRequest
     */
  onEndRequest(err, cursor, response, request, item) {
    // in some cases where request did not complete, runtime would not send a response argument
    response = response || new __WEBPACK_IMPORTED_MODULE_8_postman_collection___default.a.Response();

    if (err) {
      console.warn(err);
      this.actions.errorRequest(
      this.runId,
      cursor.iteration,
      {
        id: item.toJSON().id,
        ref: cursor.ref },

      'An error occured while running this request.');

      pm.alerts.error('There was an error running your collection: ' + (err.message || err.status || err));
      return;
    }

    let responseJSON = response.toJSON(),
    responseBody = response.text();

    let {
      header,
      responseSize,
      responseTime,
      code,
      status } =
    responseJSON;

    this.actions.endRequest(
    this.runId,
    cursor.iteration,
    {
      id: item.id,
      ref: cursor.ref,
      headers: request.getHeaders({ enabled: true }) },

    {
      headers: header,

      // body: responseBody,
      size: responseSize,
      time: responseTime.toString(),
      code: code,
      name: status });



    // For use later in endTest hook. This is to populate body if required. This is because we need info about test results.
    this.response = {
      size: responseSize,
      body: responseSize < MAX_RESPONSE_SIZE ? responseBody : null };

  }

  /**
     * Updates the UI for end of an iteration.
     *
     * Note: Bound to `iteration` callback of postman-runtime
     *
     * @param {?Error} err Error if any passed down from postman-runtime
     * @param {RunCursor} cursor current cursor position passed down from postman-runtime
     *
     * @returns {undefined}
     *
     * @callback RuntimeRunner#onEndIteration
     */
  onEndIteration(err, cursor) {
    if (err) {
      console.warn(err);
      return;
    }
    this.actions.endIteration(
    this.runId,
    cursor.iteration);

  }

  /**
     * Updates UI for completion of a run.
     *
     * Note: Bound to `done` callback of postman-runtime.
     *
     * @param {?Error} err Error if any passed down from postman-runtime
     *
     * @returns {undefined}
     *
     * @callback RuntimeRunner#onEndRun
     */
  async onEndRun(err) {

    if (err) {
      console.warn('Errors were encountered running your collection:', err);
      pm.alerts.error('There was an error running your collection. Check DevTools for more info.');
      return;
    }

    if (this.stopped) {
      this.actions.stopRun(
      this.runId);

    } else
    {
      this.actions.endRun(
      this.runId);

    }

    this.response = undefined;

    // RunnerController will dispose this runner
    this.emit('finish', this.runId);

    if (this.cookieJar) {




    } // todo: we're using a private object here (hence the crazy number of checks),
    // because the API provided by the cookieJar is not good enough. Need to submit a PR
    // to the upstream "request" module to expose this functionality.
    // Persist Runner variables if the setting is set
    if (this.selection.persist) {this.activeEnvSessionId &&
      Object(__WEBPACK_IMPORTED_MODULE_14__modules_services_VariableSessionService__["c" /* updateEntityWithSession */])(this.activeEnvSessionId, this.envVars);

      this.activeGlobalsId &&
      Object(__WEBPACK_IMPORTED_MODULE_14__modules_services_VariableSessionService__["c" /* updateEntityWithSession */])(this.activeGlobalsSessionId, this.globalVars);
    }
  }

  /**
     * Updates the UI for a paused run.
     *
     * Note: Bound to `pause` callback of postman-runtime.
     *
     * @callback RuntimeRunner#onPauseRun
     */
  onPauseRun() {
    !this.stopped && this.actions.pauseRun(this.runId);
  }

  /**
     * Updates the UI for the resume of a run.
     *
     * Note: Bound to `resume` callback of postman-runtime.
     *
     * @callback RuntimeRunner#onResumeRun
     */
  onResumeRun() {
    this.actions.resumeRun(this.runId);
  }

  /**
     * Updates the UI for stop/abort of a run.
     *
     * Note: Bound to `stop` and `abort` callback of postman-runtime.
     *
     * @callback RuntimeRunner#onStopRun
     */
  onStopRun() {
    this.stopped = true;
    this.actions.stopRun(this.runId);
  }

  /**
     * Returns a Backbone representation of this run to be exported.
     *
     * @returns {Backbone.Model} a Backbone.Model from wrapping the run
     *
     * @function RuntimeRunner#ReduxToBackbone
     */
  export() {
    return Object(__WEBPACK_IMPORTED_MODULE_12__reducers_runner_BackboneReduxBridge__["b" /* ReduxToBackbone */])(this.runId, this.run);
  }

  /**
     * Dispose the Run instance from postman-runtime.
     *
     * @function RuntimeRunner#dispose
     */
  dispose() {
    this.runLinkID && __WEBPACK_IMPORTED_MODULE_7__controllers_RuntimeBridge__["a" /* default */].disposeRun(this.runLinkID);
  }

  /**
     * Returns the name of the collection for a given collection id.
     *
     * @param {UUID} id - id of the collection
     *
     * @returns {String} Name of the collection
     *
     * @function RuntimeRunner#getCollectionName
     */
  getCollectionName(id) {
    let collection = this.collection;
    if (!collection) {
      return '';
    }
    return collection.name;
  }

  /**
     * Returns the name of the folder for a given folder id and a collection id.
     *
     * @param {UUID} collId - collection id
     * @param {UUID} folderId - folder id
     *
     * @returns {String} Name of the folder identified by the folder id collection id pair.
     *
     * @function RuntimeRunner#getFolderName
     */
  getFolderName(collId, folderId) {
    let collection = this.collection;
    if (!collection) {
      return '';
    }
    let folder = _.find(collection.folders, collFolder => {
      return collFolder.id === folderId;
    });

    if (!folder) {
      return '';
    }
    return folder.name;
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findNodePath;
/**
 * Finds the path to a node in the collection for runner
 * 
 * @param {String} initName 
 * @param {Object} item 
 */
function findNodePath(initName, item, data) {
  let pathArr = [initName],
  { collection, folderMap } = data;

  getPath(pathArr, item, collection, folderMap);
  return pathArr.reverse().join(' / ');
}

/**
   * Recursively traverses and finds the path to the node
   * 
   * @param {Array} pathArr
   * @param {Object} item
   */
function getPath(pathArr, item, collection, folderMap) {
  if (!folderMap[item.folder]) {
    pathArr.push(collection.name);
    return;
  }
  let folder = folderMap[item.folder];
  pathArr.push(folder.name);
  return getPath(pathArr, folder, collection, folderMap);
}

/***/ }),

/***/ 1418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleModelEventOnStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_event__ = __webpack_require__(3);

const namespaces = [
'collection',
'folder',
'request',
'environment',
'workspace',
'collectionrun',
'archivedresource'];

const actions = ['created', 'updated', 'deleted'];
const actionMap = {
  created: 'create',
  updated: 'update',
  deleted: 'delete' };


const runActionMap = {
  created: 'loadRun',
  deleted: 'deleteRun' };


function dataProperty(data, eventName, eventNamespace) {
  let excludeNamespaces = ['environment', 'workspace'];
  if (actionMap[eventName] === 'create' && !_.includes(excludeNamespaces, eventNamespace)) {
    return null;
  } else
  if (actionMap[eventName] === 'delete') {
    return data.id;
  }
  return data;
}

function handleCollectionRun(data, eventName) {
  let params = data;
  if (actionMap[eventName] === 'delete') {
    params = data.id;
  }

  _.isFunction(pm.runner['actions'][runActionMap[eventName]]) &&
  pm.runner['actions'][runActionMap[eventName]](params);
}

/**
   * Handles archived resource events
   * 
   * @param {Object} data
   * @param {String} eventName
   */
function handleArchivedResource(data, eventName) {
  // Only need archive collection updates
  if (data.model !== 'collection') {
    return;
  }

  let actionName = `${actionMap[eventName]}ArchivedCollection`,
  action = pm.runner['archivedCollectionActions'][actionName];
  _.isFunction(action) && action(data);
}

/**
   * Handles all the events on the bus and fires
   * actions accordingly for the runner
   * 
   * @param {Object} event 
   */
function handleModelEventOnStore(event) {
  let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["g" /* getEventNamespace */])(event);

  if (!_.includes(namespaces, eventNamespace)) {
    return;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["i" /* processEvent */])(event, actions, function (event, cb) {
    let eventNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["g" /* getEventNamespace */])(event),
    eventName = Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["f" /* getEventName */])(event);

    if (!_.includes(namespaces, eventNamespace)) {
      return cb();
    }

    if (!_.includes(actions, eventName)) {
      return cb();
    }

    if (eventNamespace === 'collectionrun') {
      handleCollectionRun(Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event), eventName);
    } else
    if (eventNamespace === 'archivedresource') {
      handleArchivedResource(Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event), eventName);
    } else
    {
      let params = dataProperty(Object(__WEBPACK_IMPORTED_MODULE_0__model_event__["d" /* getEventData */])(event), eventName, eventNamespace);
      if (!params) {
        pm.runner.repopulateCollections();
      } else
      {
        let reduxActionName = actionMap[eventName] + _.capitalize(eventNamespace);

        // Only handles the delete Workspace to trigger the event 
        // for modal and switching to a new workspace.
        // The deletion from the state is done by RunnerWorkspaceActions.
        if (reduxActionName === 'deleteWorkspace') {
          pm.runner.handleWorkspaceDelete(params);
        }

        _.isFunction(pm.runner[eventNamespace + 'Actions'][reduxActionName]) &&
        pm.runner[eventNamespace + 'Actions'][reduxActionName](params);
      }
    }
    cb();
  });
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1419:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = initializeConfigurations;
/* unused harmony export initializeServices */
/* unused harmony export subscribeToModelEvents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_Configuration__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_FeatureFlags__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_model_event__ = __webpack_require__(3);





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
    cb && cb(null);
  }).
  catch(e => {
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserConfigurationController__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultConfigurationController__ = __webpack_require__(165);


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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let defaultConfiguration = __webpack_require__(166);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAll: function () {
    return Promise.resolve(defaultConfiguration);
  } });

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = {"workspace.visibilityAvailablePlans":[],"request.autoPersistVariables":true,"user.plansToAllowUpgrade":[]}

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseConfigurationService__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_UserFeatureFlagController__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_DefaultFeatureFlagController__ = __webpack_require__(168);


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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let defaultFeatureFlags = __webpack_require__(169);

/* harmony default export */ __webpack_exports__["a"] = ({
  getAll: function () {
    return Promise.resolve(defaultFeatureFlags);
  } });

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = {"inviteByNonAdmin":false,"replaceElements":false}

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

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_httpstatuscodes__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_CollectionController__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_EnvironmentController__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_GlobalsController__ = __webpack_require__(72);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};




const getISODate = timestamp => {
  try {
    return new Date(timestamp).toISOString();
  }
  catch (e) {
    return new Date().toISOString();
  }
};

const fetchFromState = key => {
  return pm.runnerStore.getState()[key];
};

const getCollection = id => {
  return _.find(fetchFromState('collections'), ['id', id]) || null;
};

const getFolderFromCollection = (id, collectionId) => {
  if (!id || !collectionId) {
    return null;
  }

  let folder = _.find(fetchFromState('folders'), ['id', id]) || null;
  if (folder && _.isEqual(folder.collection, collectionId)) {
    return folder;
  } else
  {
    return null;
  }
};

const getEnvironment = (id, cb) => {
  return _.find(fetchFromState('environments'), ['id', id]) || null;
};

const getGlobals = (id, cb) => {
  if (!id) {
    cb(null);
    return;
  }

  __WEBPACK_IMPORTED_MODULE_3__modules_controllers_GlobalsController__["a" /* default */].get({ workspace: id }).then(globals => {
    cb(globals);
  }).
  catch(e => {
    cb(null);
  });
};

const getTotalTime = iterations => {
  let timeToReturn;
  return _.reduce(iterations, (time, iteration) => {
    timeToReturn = 0;
    _.forEach(iteration, request => {
      if (request.response) {
        try {
          timeToReturn += parseInt(_.get(request, 'response.time', 0));
        }
        catch (e) {
          timeToReturn += 0;
        }
      }
    });
    return time + timeToReturn;
  }, 0);
};

const getRequests = (creationDate, iterations) => {
  let passIncrement,
  failIncrement;
  return _.reduce(iterations, (requests, iteration) => {
    _.forEach(iteration, request => {
      let exists = _.findIndex(requests, req => {
        return req.id === request.id;
      });

      let responseCode = request.response ? {
        code: request.response.code,
        name: request.response.name,
        detail: __WEBPACK_IMPORTED_MODULE_0__utils_httpstatuscodes__["a" /* default */][request.response.code] } :
      undefined;

      if (exists === -1) {
        requests.push({
          name: request.name,
          id: request.id,
          url: request.request.url,
          time: creationDate,
          responseCode: responseCode,
          testPassFailCounts: _.reduce(request.tests, (testPassFailCounts, test) => {
            testPassFailCounts[test.name] = {
              pass: test.status === 'pass' ? 1 : 0,
              fail: test.status === 'fail' ? 1 : 0 };

            return testPassFailCounts;
          }, {}) });

      } else
      {
        requests[exists] = _extends({},
        requests[exists], {
          time: _.get(request, 'response.time', 0),
          responseCode: responseCode,
          testPassFailCounts: _.reduce(request.tests, (testPassFailCounts, test) => {
            passIncrement = test.status === 'pass' ? 1 : 0;
            failIncrement = test.status === 'fail' ? 1 : 0;
            testPassFailCounts[test.name] = {
              pass: _.get(testPassFailCounts, `${test.name}.pass`, 0) + passIncrement,
              fail: _.get(testPassFailCounts, `${test.name}.fail`, 0) + failIncrement };

            return testPassFailCounts;
          }, requests[exists].testPassFailCounts) });

      }
    });

    return requests;
  }, []);
};

const getResults = iterations => {
  let passIncrement,
  failIncrement;
  return _.reduce(iterations, (results, iteration) => {
    _.forEach(iteration, request => {
      let exists = _.findIndex(results, req => {
        return req.id === request.id;
      });

      if (exists === -1) {
        // console.log(request)
        request.response && results.push({
          name: request.name,
          id: request.id,
          url: request.request.url,
          totalTime: 0,
          responseCode: {
            code: request.response.code,
            name: request.response.name,
            detail: __WEBPACK_IMPORTED_MODULE_0__utils_httpstatuscodes__["a" /* default */][request.response.code] },

          tests: _.reduce(request.tests, (tests, test) => {
            tests[test.name] = test.status === 'pass';
            return tests;
          }),
          testPassFailCounts: _.reduce(request.tests, (testPassFailCounts, test) => {
            testPassFailCounts[test.name] = {
              pass: test.status === 'pass' ? 1 : 0,
              fail: test.status === 'fail' ? 1 : 0 };

            return testPassFailCounts;
          }, {}),
          times: [_.get(request, 'response.time', 0)],
          allTests: [_.reduce(request.tests, (tests, test) => {
            tests[test.name] = test.status === 'pass';
            return tests;
          }, {})],
          time: _.get(request, 'response.time', 0),
          totalRequestTime: _.get(request, 'response.time', 0),
          iterationResults: {} });

      } else
      if (request.response) {
        results[exists] = _extends({},
        results[exists], {
          url: request.url,
          responseCode: {
            code: request.response.code,
            name: request.response.name,
            detail: __WEBPACK_IMPORTED_MODULE_0__utils_httpstatuscodes__["a" /* default */][request.response.code] },

          tests: _.reduce(request.tests, (tests, test) => {
            tests[test.name] = test.status === 'pass';
            return tests;
          }, {}),
          testPassFailCounts: _.reduce(request.tests, (testPassFailCounts, test) => {
            passIncrement = test.status === 'pass' ? 1 : 0;
            failIncrement = test.status === 'fail' ? 1 : 0;
            testPassFailCounts[test.name] = {
              pass: _.get(testPassFailCounts, `${test.name}.pass`, 0) + passIncrement,
              fail: _.get(testPassFailCounts, `${test.name}.fail`, 0) + failIncrement };

            return testPassFailCounts;
          }, results[exists].testPassFailCounts),
          times: [
          ...results[exists].times,
          _.get(request, 'response.time', 0)],

          allTests: [
          ...results[exists].allTests,
          _.reduce(request.tests, (tests, test) => {
            tests[test.name] = test.status === 'pass';
            return tests;
          }, {})],

          time: _.get(request, 'response.time', 0),
          totalRequestTime: parseInt(_.get(results[exists], 'totalRequestTime', 0)) + parseInt(_.get(request, 'response.time', 0)),
          iterationResults: {} });

      }
    });

    return results;
  }, []);
};


const getIterations = run => {
  let iterations = [],
  iteration,
  requestInCollection;

  iterations[0] = [];
  _.forEach(run.results, (request, index) => {
    requestInCollection = _.find(run.collection.requests, req => {
      return req.id === request.id;
    });

    iterations[0].push({
      id: request.id,
      ref: request.id,
      name: request.name,
      request: {
        url: request.url,
        method: requestInCollection ? requestInCollection.method : '',
        headers: requestInCollection ? requestInCollection.headers : [],
        body: requestInCollection ? requestInCollection.data : '' },

      response: {
        size: null,
        time: run.results[index].time,
        code: _.get(run, `results[${index}].responseCode.code`, ''),
        name: _.get(run, `results[${index}].responseCode.name`, ''),
        headers: [],
        body: 'Response body unavailable' },

      tests: _.reduce(request.tests, (tests, test, name) => {
        tests.push({
          name: name,
          status: test ? 'pass' : 'fail',
          passCount: request.testPassFailCounts[name].pass,
          failCount: request.testPassFailCounts[name].fail });

        return tests;
      }, []) });

  });

  return iterations;
};

const getActiveWorkspace = () => {
  return fetchFromState('selection').workspace.id;
};

const BackboneToRedux = run => {
  return {
    [run.id]: {
      id: run.id,
      name: run.name,
      error: false,
      status: 'finished',
      target: {
        collection: run.collection_id,
        folder: run.folder_id },

      createdAt: getISODate(run.timestamp),
      environment: run.environment_id === '0' ? null : run.environment_id,
      persist: true,
      failedTestCount: run.totalFail,
      totalTestCount: run.totalPass + run.totalFail,
      iterations: getIterations(run),
      currentIteration: run.count,
      workspace: getActiveWorkspace(),
      collection: run.collection_id,

      // Current user becomes the owner of the imported run
      owner: pm.runnerStore.getState().user.id } };


};
/* harmony export (immutable) */ __webpack_exports__["a"] = BackboneToRedux;


const ReduxToBackbone = (runId, run, cb) => {
  /* Convert Redux state to Backbone model for exporting */
  let collection = getCollection(run.target.collection),
  environment = getEnvironment(run.environment),
  folder = getFolderFromCollection(run.target.folder, _.get(collection, 'id'));

  getGlobals(getActiveWorkspace(), globals => {
    let data = run.data || [],
    iterations = _.keys(run.iterations).length,
    exportRun = {
      id: runId,
      name: run.name,
      allTests: [],
      timestamp: getISODate(run.createdAt),
      collection_id: run.target.collection,
      folder_id: run.target.folder ? run.target.folder : 0,
      target_type: run.target.folder ? 'folder' : 'collection',
      environment_id: environment ? environment.id : '0',
      data: data,
      delay: run.delay,
      count: iterations,
      collection: collection,
      folder: folder,
      environment: null, // environment,
      globals: globals ? globals.values : [],
      results: getResults(run.iterations),
      totalPass: run.totalTestCount - run.failedTestCount,
      totalFail: run.failedTestCount,
      totalTime: getTotalTime(run.iterations),
      lifecycle: 'done',
      requests: getRequests(run.createdAt, run.iterations),
      synced: false };

    cb(null, exportRun);
  });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = ReduxToBackbone;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DropdownButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SubMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MenuItemHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keymaps_KeyMaps__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tooltips__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Icons_UpSolidIcon__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Icons_DownSolidIcon__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Icons_RightSolidIcon__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Icons_LeftSolidIcon__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__postman_react_click_outside__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__postman_react_click_outside__);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class, _class2, _class3, _class4, _class5, _class6;













const BOTTOM_OFFSET = 50,
TOP_OFFSET = 15;


// Adding decorators might break some instances of Dropdown since methods on it are called using __wrappedComponent


let Dropdown = __WEBPACK_IMPORTED_MODULE_11__postman_react_click_outside___default()(_class = __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default()(_class = class Dropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isHighlighted: false };


    this.getKeyMapHandlers = this.getKeyMapHandlers.bind(this);
    this.handleCustomShortcut = this.handleCustomShortcut.bind(this);
    this.focus = this.focus.bind(this);
    this.focusNext = this.focusNext.bind(this);
    this.focusPrev = this.focusPrev.bind(this);
    this.selectFocus = this.selectFocus.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.highlightTimeout = null;
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.highlightTimeout);
  }

  getKeyMapHandlers() {
    _.each(this.props.keyMapHandlers, (handler, name) => {
      _.isFunction(handler) && (this.props.keyMapHandlers[name] = this.handleCustomShortcut.bind(this, handler));
    });

    return _extends({
      select: pm.shortcuts.handle('select', this.selectFocus),
      nextItem: pm.shortcuts.handle('nextItem', this.focusNext),
      prevItem: pm.shortcuts.handle('prevItem', this.focusPrev),
      quit: pm.shortcuts.handle('quit', this.handleClickOutside) },
    this.props.keyMapHandlers);

  }

  handleCustomShortcut(handler, e) {
    // this is called every time a custom shortcut is called
    e && e.stopPropagation();
    this.handleDropdownToggle(false);
    _.isFunction(handler) && handler(e);
  }

  focus() {
    _.invoke(this.refs, 'menu.focus');
  }

  focusNext(e) {
    e && e.preventDefault();
    _.invoke(this.refs, 'menu.focusNext');
  }

  focusPrev(e) {
    e.preventDefault();
    _.invoke(this.refs, 'menu.focusPrev');
  }

  selectFocus(e) {
    e.preventDefault();
    e.stopPropagation();
    _.invoke(this.refs, 'menu.selectItem');
    this.handleDropdownToggle(false);
  }

  highlight() {
    clearTimeout(this.highlightTimeout);
    this.setState({ isHighlighted: true }, () => {
      this.highlightTimeout = setTimeout(() => {
        this.setState({ isHighlighted: false });
      }, 1000);
    });
  }

  toggleDropdown(e, isOpen = !this.state.isOpen) {
    e && e.preventDefault();
    this.setState({ isOpen }, () => {
      this.state.isOpen && this.focus();
    });
  }

  handleDropdownToggle(isOpen = !this.state.isOpen) {
    this.props.onToggle && this.props.onToggle(isOpen);
    this.toggleDropdown(null, isOpen);
  }

  handleMenuSelect(selectedParentItem, selectedChildItem) {
    this.props.onSelect && this.props.onSelect(selectedParentItem, selectedChildItem);
    this.props.onToggle && this.props.onToggle(!this.state.isOpen);
    this.toggleDropdown(null, false);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'dropdown': true,
      'is-open': this.state.isOpen,
      'full-width': this.props.fullWidth,
      'scroll-menu': this.props.allowScroll },
    this.props.className);
  }

  render() {
    let classes = this.getClasses();
    let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
      if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child) && child.type === DropdownButton) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
          onToggle: this.handleDropdownToggle,
          isOpen: this.state.isOpen,
          isHighlighted: this.state.isHighlighted,
          ref: 'button' });

      }
      if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child) && child.type === DropdownMenu) {
        if (this.state.isOpen) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
            onSelect: this.handleMenuSelect,
            onClose: this.handleDropdownToggle.bind(this, false),
            ref: 'menu',
            targetRef: this.refs.button,
            parentClassName: classes });

        } else
        {
          return false;
        }
      }
    });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__keymaps_KeyMaps__["a" /* default */], { keyMap: pm.shortcuts.getShortcuts(), handlers: this.getKeyMapHandlers() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { ref: 'dropdown', className: classes }, children)));


  }}) || _class) || _class;



let DropdownButton = __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default()(_class2 = class DropdownButton extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'dropdown-button': true,
      'is-open': this.props.isOpen },
    this.props.className);
  }

  handleDropdownToggle(e) {
    e && e.stopPropagation();
    e && e.preventDefault();
    this.props.onToggle && this.props.onToggle();
  }

  render() {
    let classes = this.getClasses(),
    buttons;

    if (this.props.dropdownStyle === 'split') {
      /* split button with caret */
      let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, _extends({}, _.pick(this.props, ['type', 'size'])));
      });

      buttons =
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Buttons__["b" /* ButtonGroup */], { separated: true },
        children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Buttons__["a" /* Button */], {
            onClick: this.handleDropdownToggle,
            type: this.props.type,
            size: this.props.size,
            active: this.props.isOpen || this.props.isHighlighted },

          this.props.isOpen ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Icons_UpSolidIcon__["a" /* default */], { className: 'dropdown-caret' }) :
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons_DownSolidIcon__["a" /* default */], { className: 'dropdown-caret' })));




    } else
    if (this.props.dropdownStyle === 'nocaret') {
      /* button without caret */
      buttons = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
          onClick: this.handleDropdownToggle,
          active: this.props.isOpen || this.props.isHighlighted });

      });
    } else
    {
      /* button with caret */
      buttons = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, _extends({},
        _.pick(this.props, ['type', 'size']), {
          onClick: this.handleDropdownToggle,
          active: this.props.isOpen || this.props.isHighlighted }),
        [
        child.props.children,
        this.props.isOpen ?
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Icons_UpSolidIcon__["a" /* default */], { key: 'up', className: 'dropdown-caret' }) :
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icons_DownSolidIcon__["a" /* default */], { key: 'down', className: 'dropdown-caret' })]);

      });
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes }, buttons));

  }}) || _class2;




let DropdownMenu = __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default()(_class3 = __WEBPACK_IMPORTED_MODULE_11__postman_react_click_outside___default()(_class3 = class DropdownMenu extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isOpenSubItemParentRef: '',
      focusedItem: '' };


    this.dropdownPortal = document.getElementById('dropdown-root');
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollDebounced = _.debounce(this.handleScroll, 300, { leading: true });
    this.focus = this.focus.bind(this);
    this.focusNext = this.focusNext.bind(this);
    this.focusPrev = this.focusPrev.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubItemToggle = this.handleSubItemToggle.bind(this);
  }

  componentDidMount() {
    let dropdownButton = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.props.targetRef);
    if (!dropdownButton) {
      return;
    }

    let dropdownButtonPosition = dropdownButton.getBoundingClientRect();
    this._setStyles(dropdownButtonPosition);
    window.addEventListener('scroll', this.handleScrollDebounced, true);
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.dropup && this.handleDropupPositioning(this.props.dropup);
  }

  handleClickOutside(e) {
    let button = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.props.targetRef);
    if (button.contains(e.target)) {
      return;
    }
    this.props.onClose && this.props.onClose();
  }

  handleScroll(e) {
    if (!_.includes(e.target.className, 'dropdown-menu')) {
      window.removeEventListener('scroll', this.handleScrollDebounced, true);
      this.props.onClose();
    }
  }

  _setStyles(buttonNode) {
    let menu = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.menu);
    if (!menu) {
      return;
    }

    // Dimensions
    this.refs.menu.style.position = 'fixed';
    this.refs.menu.style.zIndex = '1000';
    if (this.props.fluid) {
      this.refs.menu.style.width = `${buttonNode.width}px`;
    }

    // Position
    let menuNode = menu.getBoundingClientRect();
    if (this.props['align-right']) {
      this.refs.menu.style.left = `${buttonNode.right - menuNode.width}px`;
    } else
    if (this.props['align-center']) {
      let width = this.refs.menu.style.width;
      this.refs.menu.style.left = `${buttonNode.left - width / 2}px`;
      this.refs.menu.style.left = `${buttonNode.right + width / 2}px`;
    } else
    {
      this.refs.menu.style.left = `${buttonNode.left}px`;
    }

    if (this.props.dropup === true) {
      this.refs.menu.style.top = `${buttonNode.top - menuNode.height}px`;
    } else
    {
      this.refs.menu.style.top = `${buttonNode.top + buttonNode.height}px`;
    }

    // Corrections based on actual dropdown height
    let windowHeight = window.innerHeight;
    if (parseInt(this.refs.menu.style.top) + menuNode.height > windowHeight ||
    parseInt(this.refs.menu.style.top) < 0) {
      let dropup = true;
      if (windowHeight - buttonNode.bottom > buttonNode.top) {
        dropup = false;
      }
      this.refs.menu.style.overflowY = 'auto';
      if (dropup) {
        // If dropdown extends beyond bottom of window
        if (buttonNode.top < menuNode.height) {
          this.refs.menu.style.top = `${0}px`;
          this.refs.menu.style.height = `${buttonNode.top - TOP_OFFSET}px`;
        } else
        {
          this.refs.menu.style.top = `${buttonNode.top - menuNode.height}px`;
        }
      } else
      {
        // If dropdown extends above top of window
        this.refs.menu.style.top = `${buttonNode.bottom}px`;
        if (buttonNode.bottom + menuNode.height > windowHeight) {
          this.refs.menu.style.height = `${windowHeight - buttonNode.top - buttonNode.height - BOTTOM_OFFSET}px`;
        }
      }
    }
  }

  focus() {
    let $dropdown = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.menu);
    $dropdown.focus();
  }

  blur() {
    this.setState({ focusedItem: '' });
  }

  focusNext() {
    let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(this.props.children);
    if (_.isEmpty(this.state.focusedItem)) {
      _.first(children) && this.setState({ focusedItem: _.first(children).props.refKey });
    } else
    {
      let currentFocusIndex = _.findIndex(children, child => {return child.props.refKey === this.state.focusedItem;});
      if (_.inRange(currentFocusIndex + 1, 0, _.size(children))) {
        this.setState({ focusedItem: children[currentFocusIndex + 1].props.refKey });
      }
    }
  }

  focusPrev() {
    let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(this.props.children);
    if (_.isEmpty(this.state.focusedItem)) {
      this.setState({ focusedItem: _.last(children).props.refKey });
    } else
    {
      let currentFocusIndex = _.findIndex(children, child => {return child.props.refKey === this.state.focusedItem;});
      if (_.inRange(currentFocusIndex - 1, 0, _.size(children))) {
        this.setState({ focusedItem: children[currentFocusIndex - 1].props.refKey });
      }
    }
  }

  selectItem() {
    this.props.onSelect && this.props.onSelect(this.state.focusedItem);
    this.blur();
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'dropdown-menu': true,
      'align-right': this.props['align-right'],
      'align-center': this.props['align-center'],
      'fluid': this.props.fluid,
      'dropup': this.props.dropup === true },
    this.props.className);
  }

  handleSubItemToggle(refKey) {
    this.setState({ isOpenSubItemParentRef: this.state.isOpenSubItemParentRef === refKey ? '' : refKey });
  }

  handleSelect(parentRefKey, childRefKey) {
    this.setState({
      isOpenSubItemParentRef: '',
      focusedItem: '' });

    this.props.onSelect && this.props.onSelect(parentRefKey, childRefKey);
  }

  handleDropupPositioning(dropup) {
    if (dropup === true) {
      this.refs.menu.classList.add('dropup');
    } else
    if (dropup === 'auto') {
      let dropdownBottom = this.refs.menu.getBoundingClientRect().bottom,
      windowHeight = window.innerHeight;

      if (dropdownBottom >= windowHeight) {
        this.refs.menu.classList.add('dropup');
      } else
      {
        this.refs.menu.classList.remove('dropup');
      }
    }
  }

  render() {
    let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
      if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child) && child.type === MenuItem) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
          onSelect: this.handleSelect,
          onSubItemToggle: this.handleSubItemToggle,
          isSubItemisOpen: this.state.isOpenSubItemParentRef === child.props.refKey,
          isFocused: this.state.focusedItem === child.props.refKey });

      }

      if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child) && child.type === MenuItemHeader) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child);
      }

      return child;
    });

    // This portal mimicks the heirarchy of an actual dropdown so styles do not break.
    // Also provides a way to uniquely identify this dropdown-menu in CSS
    return Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["createPortal"])(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.props.parentClassName },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses(), ref: 'menu' },
        children)),


    this.dropdownPortal);

  }}) || _class3) || _class3;



let MenuItem = __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default()(_class4 = class MenuItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      tooltip: {
        isVisible: false,
        ref: null } };



    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleSubItemSelect = this.handleSubItemSelect.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'dropdown-menu-item': true,
      [`dropdown-menu-item--${this.props.refKey}`]: true,
      'align-right': this.props['align-right'],
      'is-disabled': this.props.disabled,
      'is-focused': this.props.isFocused,
      'is-sub-item-available': this.props.hasSubMenu,
      'is-open': this.props.isSubItemisOpen,
      'is-selected': this.props.active },
    this.props.className);
  }

  handleClick(e) {
    e.stopPropagation();
    if (this.props.disabled) {
      return;
    }

    if (!this.props.hasSubMenu) {
      this.props.onSelect && this.props.onSelect(this.props.refKey);
    }
  }

  handleHover(e) {
    e.stopPropagation();
    if (this.props.hasSubMenu) {
      this.props.onSubItemToggle && this.props.onSubItemToggle(this.props.refKey);
    }

    if (this.props.disabledText) {
      this.setState({
        tooltip: {
          isVisible: !this.state.tooltip.isVisible,
          refElement: e && e.currentTarget || null } });


    }

  }

  handleSubItemSelect(refKey) {
    this.props.onSelect && this.props.onSelect(this.props.refKey, refKey);
  }

  render() {
    let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
      if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child) && child.type === SubMenuItem) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
          onSelect: this.handleSubItemSelect,
          isOpen: this.props.isSubItemisOpen });

      } else
      {
        return child;
      }
    }),
    classes = this.getClasses();
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: classes,
          onClick: this.handleClick,
          onMouseEnter: this.handleHover,
          onMouseLeave: this.handleHover },

        children,

        this.props.hasSubMenu ?

        this.props.isSubItemisOpen ?
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'expand-icon-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Icons_LeftSolidIcon__["a" /* default */], {
            className: 'expand-icon',
            size: 'xs' })) :


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'expand-icon-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Icons_RightSolidIcon__["a" /* default */], {
            className: 'expand-icon',
            size: 'xs' })) :



        null,


        this.props.disabledText &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Tooltips__["a" /* Tooltip */], {
            className: 'dropdown-menu-item__tooltip',
            immediate: true,
            placement: this.props.tooltipPlacement,
            refElement: this.state.tooltip.refElement,
            show: this.state.tooltip.isVisible },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Tooltips__["b" /* TooltipBody */], null, this.props.disabledText))));




  }}) || _class4;


MenuItem.propTypes = {
  children: function (props, propName, componentName) {
    var children = props[propName];
    if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.count(children) === 1 && typeof children === 'string') {
      return new Error(
      'Wrap the string content in ' +
      '`' + componentName + '` ' +
      'in a <span> to make sure proper style rules are applied.');

    }
  } };


MenuItem.defaultProps = { tooltipPlacement: 'right' };


let SubMenuItem = __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default()(_class5 = class SubMenuItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'dropdown-menu': true,
      'dropdown-sub-menu-item': true,
      'show': this.props.isOpen,
      'align-right': this.props['align-right'] },
    this.props.className);
  }

  handleSelect(refKey) {
    this.props.onSelect && this.props.onSelect(refKey);
  }

  render() {
    let classes = this.getClasses();
    let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { onSelect: this.handleSelect });
    });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes }, children));

  }}) || _class5;



let MenuItemHeader = __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default()(_class6 = class MenuItemHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'menu-item-header' },
        this.props.children));


  }}) || _class6;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

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

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(13);


// @todo Must remove this to browser sdk
var sdk = __webpack_require__(46);let
ModelToSdkTransformer = class ModelToSdkTransformer {

  /**
                                                      * Converts the representation of a certificate manager state to a raw Collection SDK CertificateList array.
                                                      *
                                                      * @param {Object} certificateManager - A representation of the current certificate manager state.
                                                      * @return {Array} - A raw Collection SDK CertificateList compliant Array.
                                                      */
  getClientSslCerts(certificateManager) {
    return _.map(certificateManager.toJSON(), rawCert => {
      return {
        matches: ['https://' + rawCert.host + '/*'],
        key: { src: rawCert.keyPath },
        cert: { src: rawCert.pemPath },
        passphrase: rawCert.passphrase };

    });
  }

  /*
     * To convert model headers array to sdk accepted header format
     * @param {RequestModel=} {request} = The request model
     * @return {Array=}
     *
     * @example
     *
     * var sdkRequestHeader = ModelToSdkTransformer.getHeaders(req);
     *
     * [
     *   {
     *      key: 'header1',
     *      value: 'headervalue1'
     *      disabled: false
     *   },
     *   {
     *      key: 'header2',
     *      value: 'headervalue2'
     *      disabled: true
     *   }
     * ]
     */

  getHeaders(request, addDefaultHeaders) {
    // Don't want to have the object reference to be sustained
    let headers = request.get('headerData'),
    hedersArray = _.reduce(headers, (accumulator, header) => {
      header.disabled = !_.get(header, 'enabled', true);
      header.key && accumulator.push(header);
      return accumulator;
    }, []);

    if (addDefaultHeaders) {
      pm.settings.getSetting('sendNoCacheHeader') && hedersArray.push({
        key: 'cache-control',
        value: 'no-cache',
        enabled: true });

      pm.settings.getSetting('sendPostmanTokenHeader') && hedersArray.push({
        key: 'Postman-Token',
        value: '{{$guid}}',
        enabled: true });

    }
    return hedersArray;
  }

  /*
     * To convert model url to sdk url with the pathVariables
     * @param {RequestModel=} {request} = The request model
     * @return {SdkUrl with path variable}
     */

  getUrl(request) {
    return _.assignIn(new sdk.Url(request.get('url') || '').toJSON(), {
      variable: _.reduce(request.get('pathVariableData'), (accumulator, data) => {
        _.get(data, 'key') && accumulator.push({
          id: data.key,
          value: _.get(data, 'value', '') });

        return accumulator;
      }, []) });

  }

  getRequestData(mode, body) {
    let content = this.getBodyContent(mode, body, true);

    if (mode === 'binary') {

      // Collection transformer uses this to transform to v2
      // https://github.com/postmanlabs/postman-collection-transformer/blob/develop/lib/converters/v1.0.0/converter-v1-to-v2.js#L175
      return {
        dataMode: mode,
        rawModeData: content };

    }
    return {
      dataMode: mode,
      data: content };

  }

  getBodyContent(mode, body, forV1) {
    var content = [];
    if (mode === 'raw') {
      content = this.getRawBody(body);
    } else
    if (_.includes(['file', 'binary'], mode)) {
      content = this.getFileBody(body);
    } else
    {
      content = body.get('data') || [];
    }

    if (_.isArray(content)) {
      content = this.sanitizeBodyContent(content, forV1);
    }
    return content;
  }

  getRawBody(body) {
    // If request.rawModeData exists, use it, or use request.data
    return _.isString(body.get('rawModeData') || body.get('data')) ?
    body.get('rawModeData') || body.get('data') : body.get('data');
  }

  getFileBody(body) {
    return body.get('file');
  }

  processBodySource(di) {
    return di && di.path;
  }

  sanitizeBodyContent(dataContent, forV1) {
    var fileId, src;
    return _.reduce(dataContent, (accumulator, dataItem) => {
      if (dataItem.type === 'file') {
        fileId = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].guid();
        if (dataItem.value && !_.isString(dataItem.value) && dataItem.value.length) {// Process the file-list
          _.forEach(dataItem.value, di => {
            src = this.processBodySource(di);
            accumulator.push(
            _.assign({}, dataItem, {
              disabled: dataItem.enabled === false,
              src: src,
              key: dataItem.key || dataItem.name },
            forV1 ? { value: src } : {}));

          });
        }
      } else
      {
        accumulator.push(_.assign({}, dataItem, { disabled: dataItem.enabled === false }));
      }
      return accumulator;
    }, []);
  }

  getBody(request) {
    var modes = {
      urlencoded: 'urlencoded',
      params: 'formdata',
      raw: 'raw',
      binary: 'file' },

    mode,
    body = request.get('body'),
    data = {};

    if (!__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].isMethodWithBody(request.get('method')) || !body) {
      return data;
    }

    mode = modes[body.get('dataMode')] || 'raw';
    data.mode = mode;
    data[mode] = this.getBodyContent(mode, body);
    return data;
  }

  getRequest(request, opts) {
    let defaultHeaders = [],
    addDefaultHeaders = opts && opts.addDefaultHeaders;

    return {
      method: request.get('method'),
      auth: request.get('auth'),
      url: this.getUrl(request),
      header: this.getHeaders(request, addDefaultHeaders),
      body: this.getBody(request) };

  }};


/* harmony default export */ __webpack_exports__["a"] = (new ModelToSdkTransformer());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = InformationIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'information', d: 'M8 16a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8zm0-9.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM9 7.72S9.016 7 8 7s-1 .721-1 .721v3.565S6.987 12 8 12s1-.714 1-.714V7.72z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#information' }));



function InformationIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = UpSolidIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '8', height: '5', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'up-solid', d: 'M8 6l4 5H4z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#up-solid' }));



function UpSolidIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("fs");

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

/***/ 250:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_services_APIService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_AppUrlConstants__ = __webpack_require__(129);



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

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LeftSolidIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '5', height: '8', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'left-solid', d: 'M5 8l5-4v8z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#left-solid' }));



function LeftSolidIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

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

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderResponsePreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return saveAndOpenFileForResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return saveAndOpenFile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sanitize_filename__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sanitize_filename___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sanitize_filename__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base64_arraybuffer__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_base64_arraybuffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_base64_arraybuffer__);



function __errorHandler(e) {
  console.log('Filesystem Error: ' + e);
}

// electron
function __removeFileIfExists(name, callback) {
  try {
    var fs = __webpack_require__(24);
    fs.unlink(name, function (err) {
      callback();
    });
  }
  catch (e) {
    callback();
  }
}

/**
    @usage
      For converting the buffer to String
    @reference
      https://stackoverflow.com/questions/6965107/converting-between-strings-and-arraybuffers/20604561#answer-20604561
    @something additonal
      The reason for 65535
      https://en.wikipedia.org/wiki/65535_(number)
  */

function __formatPDFDataForElectron(data) {
  var bufView = new Uint8Array(data),
  length = bufView.length,
  result = '';

  for (var i = 0; i < length; i += 65535) {
    var addition = 65535;
    if (i + 65535 > length) {
      addition = length - i;
    }
    result += String.fromCharCode.apply(null, bufView.subarray(i, i + addition));
  }
  if (!result) {
    console.log('Pdf conversion failed for electron');
  }
  return result;
}

function __getProbableExtension(mimeType) {
  var mimeExtensions = [
  {
    typeSubstring: 'text',
    extension: '.txt' },

  {
    typeSubstring: 'json',
    extension: '.json' },

  {
    typeSubstring: 'javascript',
    extension: '.js' },

  {
    typeSubstring: 'pdf',
    extension: '.pdf' },

  {
    typeSubstring: 'png',
    extension: '.png' },

  {
    typeSubstring: 'jpg',
    extension: '.jpg' },

  {
    typeSubstring: 'jpeg',
    extension: '.jpg' },

  {
    typeSubstring: 'gif',
    extension: '.gif' },

  {
    typeSubstring: 'excel',
    extension: '.xls' },

  {
    typeSubstring: 'zip',
    extension: '.zip' },

  {
    typeSubstring: 'compressed',
    extension: '.zip' },

  {
    typeSubstring: 'audio/wav',
    extension: '.wav' },

  {
    typeSubstring: 'tiff',
    extension: '.tiff' },

  {
    typeSubstring: 'shockwave',
    extension: '.swf' },

  {
    typeSubstring: 'powerpoint',
    extension: '.ppt' },

  {
    typeSubstring: 'mpeg',
    extension: '.mpg' },

  {
    typeSubstring: 'quicktime',
    extension: '.mov' },

  {
    typeSubstring: 'html',
    extension: '.html' },

  {
    typeSubstring: 'css',
    extension: '.css' }];


  var numEx = mimeExtensions.length;
  for (var i = 0; i < numEx; i++) {
    if (mimeType.indexOf(mimeExtensions[i].typeSubstring) > -1) {
      return mimeExtensions[i].extension;
    }
  }
  return '';
}

function renderResponsePreview(name, data, type, callback) {
  name = __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].guid() + '-' + __WEBPACK_IMPORTED_MODULE_0_sanitize_filename___default()(name, { replacement: '-' });
  __removeFileIfExists(name, function () {
    var electronPath = __webpack_require__(8).remote.app.getPath('temp') + '/' + name;

    // write to the file
    var fs = __webpack_require__(24);
    fs.writeFile(electronPath, data, function (err) {
      if (err) {
        console.log('err', err);
        __errorHandler(err);
      } else
      {
        callback(electronPath);
      }
    });
  });
}

// works with electron
function saveAndOpenFileForResponse(name, data, type, callback) {
  name += __getProbableExtension(type);

  // sdkResponse override
  if (typeof data.mime === 'function') {
    name = data.mime().filename;
  }

  name = __WEBPACK_IMPORTED_MODULE_0_sanitize_filename___default()(name + __getProbableExtension(type), { replacement: '-' });
  var path = pm.appWindow.sendSyncMessage('getSaveTarget', name);
  if (!path) {
    console.log('Save aborted');
  } else
  {
    // Buffer is a browserified Buffer that doesn't work in the browser
    // NativeBuffer comes from the background process and works
    var fs = __webpack_require__(24),
    NativeBuffer = __webpack_require__(8).remote.require('buffer').Buffer,
    base64 = __WEBPACK_IMPORTED_MODULE_2_base64_arraybuffer___default.a.encode(data.stream),
    dataBuffer = new NativeBuffer(base64, 'base64');
    try {
      fs.writeFileSync(path, dataBuffer);
      callback();
    }
    catch (e) {
      __errorHandler(e);
    }
  }
  return;
}

function saveAndOpenFile(name, data, type, callback) {
  name = __WEBPACK_IMPORTED_MODULE_0_sanitize_filename___default()(name, { replacement: '-' });
  if (type === 'pdf' || type === 'image') {
    data = __formatPDFDataForElectron(data);
  }
  var path = pm.appWindow.sendSyncMessage('getSaveTarget', name);
  if (!path) {
    console.log('Save aborted');
    callback(new Error('Save aborted'));
  } else
  {
    var fs = __webpack_require__(24);
    fs.writeFile(path, data, function (err) {
      if (err) __errorHandler(err);

      callback && callback(err);
    });
  }
  return;
}



/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(13);


let _ = __webpack_require__(0);
let { ipcRenderer } = __webpack_require__(8);
let { Item, Request, Response, VariableScope } = __webpack_require__(46);

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

/***/ 261:
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
var factory = __webpack_require__(712);

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

/***/ 262:
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

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint node:true*/


/**
 * Replaces characters in strings that are illegal/unsafe for filenames.
 * Unsafe characters are either removed or replaced by a substitute set
 * in the optional `options` object.
 *
 * Illegal Characters on Various Operating Systems
 * / ? < > \ : * | "
 * https://kb.acronis.com/content/39790
 *
 * Unicode Control codes
 * C0 0x00-0x1f & C1 (0x80-0x9f)
 * http://en.wikipedia.org/wiki/C0_and_C1_control_codes
 *
 * Reserved filenames on Unix-based systems (".", "..")
 * Reserved filenames in Windows ("CON", "PRN", "AUX", "NUL", "COM1",
 * "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9",
 * "LPT1", "LPT2", "LPT3", "LPT4", "LPT5", "LPT6", "LPT7", "LPT8", and
 * "LPT9") case-insesitively and with or without filename extensions.
 *
 * Capped at 255 characters in length.
 * http://unix.stackexchange.com/questions/32795/what-is-the-maximum-allowed-filename-and-folder-size-with-ecryptfs
 *
 * @param  {String} input   Original filename
 * @param  {Object} options {replacement: String}
 * @return {String}         Sanitized filename
 */

var truncate = __webpack_require__(268);

var illegalRe = /[\/\?<>\\:\*\|":]/g;
var controlRe = /[\x00-\x1f\x80-\x9f]/g;
var reservedRe = /^\.+$/;
var windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
var windowsTrailingRe = /[\. ]+$/;

function sanitize(input, replacement) {
  var sanitized = input
    .replace(illegalRe, replacement)
    .replace(controlRe, replacement)
    .replace(reservedRe, replacement)
    .replace(windowsReservedRe, replacement)
    .replace(windowsTrailingRe, replacement);
  return truncate(sanitized, 255);
}

module.exports = function (input, options) {
  var replacement = (options && options.replacement) || '';
  var output = sanitize(input, replacement);
  if (replacement === '') {
    return output;
  }
  return sanitize(output, '');
};


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var truncate = __webpack_require__(269);
var getLength = __webpack_require__(270);
module.exports = truncate.bind(null, getLength);


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHighSurrogate(codePoint) {
  return codePoint >= 0xd800 && codePoint <= 0xdbff;
}

function isLowSurrogate(codePoint) {
  return codePoint >= 0xdc00 && codePoint <= 0xdfff;
}

// Truncate string by size in bytes
module.exports = function truncate(getLength, string, byteLength) {
  if (typeof string !== "string") {
    throw new Error("Input must be string");
  }

  var charLength = string.length;
  var curByteLength = 0;
  var codePoint;
  var segment;

  for (var i = 0; i < charLength; i += 1) {
    codePoint = string.charCodeAt(i);
    segment = string[i];

    if (isHighSurrogate(codePoint) && isLowSurrogate(string.charCodeAt(i + 1))) {
      i += 1;
      segment += string[i];
    }

    curByteLength += getLength(segment);

    if (curByteLength === byteLength) {
      return string.slice(0, i + 1);
    }
    else if (curByteLength > byteLength) {
      return string.slice(0, i - segment.length + 1);
    }
  }

  return string;
};



/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHighSurrogate(codePoint) {
  return codePoint >= 0xd800 && codePoint <= 0xdbff;
}

function isLowSurrogate(codePoint) {
  return codePoint >= 0xdc00 && codePoint <= 0xdfff;
}

// Truncate string by size in bytes
module.exports = function getByteLength(string) {
  if (typeof string !== "string") {
    throw new Error("Input must be string");
  }

  var charLength = string.length;
  var byteLength = 0;
  var codePoint = null;
  var prevCodePoint = null;
  for (var i = 0; i < charLength; i++) {
    codePoint = string.charCodeAt(i);
    // handle 4-byte non-BMP chars
    // low surrogate
    if (isLowSurrogate(codePoint)) {
      // when parsing previous hi-surrogate, 3 is added to byteLength
      if (prevCodePoint != null && isHighSurrogate(prevCodePoint)) {
        byteLength += 1;
      }
      else {
        byteLength += 3;
      }
    }
    else if (codePoint <= 0x7f ) {
      byteLength += 1;
    }
    else if (codePoint >= 0x80 && codePoint <= 0x7ff) {
      byteLength += 2;
    }
    else if (codePoint >= 0x800 && codePoint <= 0xffff) {
      byteLength += 3;
    }
    prevCodePoint = codePoint;
  }

  return byteLength;
};


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

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Félix Girault <felix.girault@gmail.com>
 * @license MIT
 */


var warning = __webpack_require__(705);
var shallowEqual = __webpack_require__(431);



/**
 * Tells if a component should update given it's next props
 * and state.
 *
 * @param object nextProps Next props.
 * @param object nextState Next state.
 */
function shouldComponentUpdate(nextProps, nextState) {
  return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
}

/**
 * Returns a text description of the component that can be
 * used to identify it in error messages.
 *
 * @see https://github.com/facebook/react/blob/v15.4.0-rc.3/src/renderers/shared/stack/reconciler/ReactCompositeComponent.js#L1143
 * @param {function} component The component.
 * @return {string} The name of the component.
 */
function getComponentName(component) {
  var constructor = component.prototype && component.prototype.constructor;

  return (
    component.displayName
    || (constructor && constructor.displayName)
    || component.name
    || (constructor && constructor.name)
    || 'a component'
  );
}

/**
 * Makes the given component "pure".
 *
 * @param object component Component.
 */
function pureRenderDecorator(component) {
  if (component.prototype.shouldComponentUpdate !== undefined) {
    // We're not using the condition mecanism of warning()
    // here to avoid useless calls to getComponentName().
    warning(
      false,
      'Cannot decorate `%s` with @pureRenderDecorator, '
      + 'because it already implements `shouldComponentUpdate().',
      getComponentName(component)
    )
  }

  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
  return component;
}



module.exports = pureRenderDecorator;


/***/ }),

/***/ 353:
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

/***/ 354:
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

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_sanitise_user_content__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_sanitise_user_content___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_sanitise_user_content__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_DashboardService__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_messaging_Toast__ = __webpack_require__(357);







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

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_InformationIcon__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_CloseIcon__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Markdown__ = __webpack_require__(186);






let

Toast = class Toast extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor() {
    super();

    this.handlePrimaryAction = this.handlePrimaryAction.bind(this);
    this.handleSecondaryAction = this.handleSecondaryAction.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
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

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export findSession */
/* unused harmony export clearOrphanSessions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bootSession; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_controllers_WindowController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_controllers_WorkspaceSessionController__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controllers_WorkspaceController__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_v4__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_default_workspace__ = __webpack_require__(55);
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
      cb && cb(null);
    }).

    catch(e => {
      console.error('Error booting session', e);
      cb && cb(e);
    })

    // Prune any sessions that are invalid
    .then(() => clearOrphanSessions()).
    catch(() => {});
  });
};


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_sync_SyncManagerProxy__ = __webpack_require__(366);


/**
                                                                    *
                                                                    */
function bootSyncProxy(cb) {
  _.assign(window.pm, { syncManager: new __WEBPACK_IMPORTED_MODULE_0__models_sync_SyncManagerProxy__["a" /* default */]() });
  cb && cb(null);
}

/* harmony default export */ __webpack_exports__["a"] = (bootSyncProxy);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone__ = __webpack_require__(26);
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
      pm.alerts.error('You need to be connected to Postman Sync to restore a collection.');
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

/***/ 367:
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

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone__ = __webpack_require__(26);
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

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyListManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_postman_collection__ = __webpack_require__(46);
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

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone__ = __webpack_require__(26);
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

    const fs = __webpack_require__(24);
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

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const RUNNER_SET_COLLECTION = 'RUNNER_SET_COLLECTION';
/* harmony export (immutable) */ __webpack_exports__["H"] = RUNNER_SET_COLLECTION;

const RUNNER_SET_FOLDER = 'RUNNER_SET_FOLDER';
/* harmony export (immutable) */ __webpack_exports__["M"] = RUNNER_SET_FOLDER;

const RUNNER_SET_ENV = 'RUNNER_SET_ENV';
/* harmony export (immutable) */ __webpack_exports__["L"] = RUNNER_SET_ENV;

const RUNNER_SET_ITERATIONS = 'RUNNER_SET_ITERATIONS';
/* harmony export (immutable) */ __webpack_exports__["N"] = RUNNER_SET_ITERATIONS;

const RUNNER_SET_DELAY = 'RUNNER_SET_DELAY';
/* harmony export (immutable) */ __webpack_exports__["K"] = RUNNER_SET_DELAY;

const RUNNER_SET_DATA_FILE = 'RUNNER_SET_DATA_FILE';
/* harmony export (immutable) */ __webpack_exports__["I"] = RUNNER_SET_DATA_FILE;

const RUNNER_REMOVE_DATA_FILE = 'RUNNER_REMOVE_DATA_FILE';
/* harmony export (immutable) */ __webpack_exports__["F"] = RUNNER_REMOVE_DATA_FILE;

const RUNNER_SET_DATA_FILE_TYPE = 'RUNNER_SET_DATA_FILE_TYPE';
/* harmony export (immutable) */ __webpack_exports__["J"] = RUNNER_SET_DATA_FILE_TYPE;

const RUNNER_SET_PERSIST_VARS = 'RUNNER_SET_PERSIST_VARS';
/* harmony export (immutable) */ __webpack_exports__["O"] = RUNNER_SET_PERSIST_VARS;

const RUNNER_SET_SAVE_RESPONSES = 'RUNNER_SET_SAVE_RESPONSES';
/* harmony export (immutable) */ __webpack_exports__["P"] = RUNNER_SET_SAVE_RESPONSES;

const RUNNER_SET_WORKSPACE = 'RUNNER_SET_WORKSPACE';
/* harmony export (immutable) */ __webpack_exports__["Q"] = RUNNER_SET_WORKSPACE;


const RUNNER_START_RUN = 'RUNNER_START_RUN';
/* harmony export (immutable) */ __webpack_exports__["T"] = RUNNER_START_RUN;

const RUNNER_START_REQUEST = 'RUNNER_START_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["S"] = RUNNER_START_REQUEST;

const RUNNER_START_ITERATION = 'RUNNER_START_ITERATION';
/* harmony export (immutable) */ __webpack_exports__["R"] = RUNNER_START_ITERATION;

const RUNNER_START_TEST = 'RUNNER_START_TEST';
/* harmony export (immutable) */ __webpack_exports__["U"] = RUNNER_START_TEST;


const RUNNER_PAUSE_RUN = 'RUNNER_PAUSE_RUN';
/* harmony export (immutable) */ __webpack_exports__["E"] = RUNNER_PAUSE_RUN;

const RUNNER_RESUME_RUN = 'RUNNER_RESUME_RUN';
/* harmony export (immutable) */ __webpack_exports__["G"] = RUNNER_RESUME_RUN;

const RUNNER_STOP_RUN = 'RUNNER_STOP_RUN';
/* harmony export (immutable) */ __webpack_exports__["W"] = RUNNER_STOP_RUN;

const RUNNER_STOPPING_RUN = 'RUNNER_STOPPING_RUN';
/* harmony export (immutable) */ __webpack_exports__["V"] = RUNNER_STOPPING_RUN;


const RUNNER_ERROR_RUN = 'RUNNER_ERROR_RUN';
/* harmony export (immutable) */ __webpack_exports__["t"] = RUNNER_ERROR_RUN;

const RUNNER_ERROR_REQUEST = 'RUNNER_ERROR_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["s"] = RUNNER_ERROR_REQUEST;

const RUNNER_ERROR_TEST = 'RUNNER_ERROR_TEST';
/* harmony export (immutable) */ __webpack_exports__["u"] = RUNNER_ERROR_TEST;


const RUNNER_END_TEST = 'RUNNER_END_TEST';
/* harmony export (immutable) */ __webpack_exports__["r"] = RUNNER_END_TEST;

const RUNNER_END_ITERATION = 'RUNNER_END_ITERATION';
/* harmony export (immutable) */ __webpack_exports__["o"] = RUNNER_END_ITERATION;

const RUNNER_END_REQUEST = 'RUNNER_END_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["p"] = RUNNER_END_REQUEST;

const RUNNER_END_RUN = 'RUNNER_END_RUN';
/* harmony export (immutable) */ __webpack_exports__["q"] = RUNNER_END_RUN;


const RUNNER_ADD_RESPONSE_BODY = 'RUNNER_ADD_RESPONSE_BODY';
/* harmony export (immutable) */ __webpack_exports__["a"] = RUNNER_ADD_RESPONSE_BODY;


const RUNNER_DELETE_RUN = 'RUNNER_DELETE_RUN';
/* harmony export (immutable) */ __webpack_exports__["m"] = RUNNER_DELETE_RUN;

const RUNNER_DELETE_ALL_RUNS = 'RUNNER_DELETE_ALL_RUNS';
/* harmony export (immutable) */ __webpack_exports__["g"] = RUNNER_DELETE_ALL_RUNS;

const RUNNER_LOAD_RUNS = 'RUNNER_LOAD_RUNS';
/* harmony export (immutable) */ __webpack_exports__["B"] = RUNNER_LOAD_RUNS;

const RUNNER_IMPORT_RUN = 'RUNNER_IMPORT_RUN';
/* harmony export (immutable) */ __webpack_exports__["v"] = RUNNER_IMPORT_RUN;

const RUNNER_CLEAN_RUN = 'RUNNER_CLEAN_RUN';
/* harmony export (immutable) */ __webpack_exports__["b"] = RUNNER_CLEAN_RUN;


const RUNNER_NOOP = 'RUNNER_NOOP';
/* harmony export (immutable) */ __webpack_exports__["D"] = RUNNER_NOOP;


const RUNNER_LOAD_WORKSPACE = 'RUNNER_LOAD_WORKSPACE';
/* harmony export (immutable) */ __webpack_exports__["C"] = RUNNER_LOAD_WORKSPACE;

const RUNNER_SWITCH_WORKSPACE = 'RUNNER_SWITCH_WORKSPACE';
/* harmony export (immutable) */ __webpack_exports__["X"] = RUNNER_SWITCH_WORKSPACE;

const RUNNER_CREATE_WORKSPACE = 'RUNNER_CREATE_WORKSPACE';
/* harmony export (immutable) */ __webpack_exports__["f"] = RUNNER_CREATE_WORKSPACE;

const RUNNER_UPDATE_WORKSPACE = 'RUNNER_UPDATE_WORKSPACE';
/* harmony export (immutable) */ __webpack_exports__["_1"] = RUNNER_UPDATE_WORKSPACE;

const RUNNER_DELETE_WORKSPACE = 'RUNNER_DELETE_WORKSPACE';
/* harmony export (immutable) */ __webpack_exports__["n"] = RUNNER_DELETE_WORKSPACE;


const RUNNER_LOAD_COLLECTIONS = 'RUNNER_LOAD_COLLECTIONS';
/* harmony export (immutable) */ __webpack_exports__["x"] = RUNNER_LOAD_COLLECTIONS;

const RUNNER_CREATE_COLLECTION = 'RUNNER_CREATE_COLLECTION';
/* harmony export (immutable) */ __webpack_exports__["d"] = RUNNER_CREATE_COLLECTION;

const RUNNER_UPDATE_COLLECTION = 'RUNNER_UPDATE_COLLECTION';
/* harmony export (immutable) */ __webpack_exports__["Y"] = RUNNER_UPDATE_COLLECTION;

const RUNNER_DELETE_COLLECTION = 'RUNNER_DELETE_COLLECTION';
/* harmony export (immutable) */ __webpack_exports__["i"] = RUNNER_DELETE_COLLECTION;


const RUNNER_LOAD_ARCHIVED_COLLECTIONS = 'RUNNER_LOAD_ARCHIVED_COLLECTIONS';
/* harmony export (immutable) */ __webpack_exports__["w"] = RUNNER_LOAD_ARCHIVED_COLLECTIONS;

const RUNNER_CREATE_ARCHIVED_COLLECTION = 'RUNNER_CREATE_ARCHIVED_COLLECTION';
/* harmony export (immutable) */ __webpack_exports__["c"] = RUNNER_CREATE_ARCHIVED_COLLECTION;

const RUNNER_DELETE_ARCHIVED_COLLECTION = 'RUNNER_DELETE_ARCHIVED_COLLECTION';
/* harmony export (immutable) */ __webpack_exports__["h"] = RUNNER_DELETE_ARCHIVED_COLLECTION;


const RUNNER_LOAD_FOLDERS = 'RUNNER_LOAD_FOLDERS';
/* harmony export (immutable) */ __webpack_exports__["z"] = RUNNER_LOAD_FOLDERS;

const RUNNER_DELETE_FOLDER = 'RUNNER_DELETE_FOLDER';
/* harmony export (immutable) */ __webpack_exports__["k"] = RUNNER_DELETE_FOLDER;


const RUNNER_LOAD_ENVIRONMENTS = 'RUNNER_LOAD_ENVIRONMENTS';
/* harmony export (immutable) */ __webpack_exports__["y"] = RUNNER_LOAD_ENVIRONMENTS;

const RUNNER_CREATE_ENVIRONMENT = 'RUNNER_CREATE_ENVIRONMENT';
/* harmony export (immutable) */ __webpack_exports__["e"] = RUNNER_CREATE_ENVIRONMENT;

const RUNNER_UPDATE_ENVIRONMENT = 'RUNNER_UPDATE_ENVIRONMENT';
/* harmony export (immutable) */ __webpack_exports__["Z"] = RUNNER_UPDATE_ENVIRONMENT;

const RUNNER_DELETE_ENVIRONMENT = 'RUNNER_DELETE_ENVIRONMENT';
/* harmony export (immutable) */ __webpack_exports__["j"] = RUNNER_DELETE_ENVIRONMENT;


const RUNNER_LOAD_REQUESTS = 'RUNNER_LOAD_REQUESTS';
/* harmony export (immutable) */ __webpack_exports__["A"] = RUNNER_LOAD_REQUESTS;

const RUNNER_CREATE_REQUEST = 'RUNNER_CREATE_REQUEST';
/* unused harmony export RUNNER_CREATE_REQUEST */

const RUNNER_UPDATE_REQUEST = 'RUNNER_UPDATE_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["_0"] = RUNNER_UPDATE_REQUEST;

const RUNNER_DELETE_REQUEST = 'RUNNER_DELETE_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["l"] = RUNNER_DELETE_REQUEST;


const RUNNER_USER_LOGIN = 'RUNNER_USER_LOGIN';
/* harmony export (immutable) */ __webpack_exports__["_2"] = RUNNER_USER_LOGIN;

const RUNNER_USER_LOGOUT = 'RUNNER_USER_LOGOUT';
/* harmony export (immutable) */ __webpack_exports__["_3"] = RUNNER_USER_LOGOUT;


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

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const RUNNER_DATA_FILE_TYPE_CSV = 'text/csv';
/* harmony export (immutable) */ __webpack_exports__["a"] = RUNNER_DATA_FILE_TYPE_CSV;

const RUNNER_DATA_FILE_TYPE_JSON = 'application/json';
/* harmony export (immutable) */ __webpack_exports__["b"] = RUNNER_DATA_FILE_TYPE_JSON;

const RUNNER_DATA_FILE_TYPE_UNDETERMINED = 'Undetermined';
/* harmony export (immutable) */ __webpack_exports__["c"] = RUNNER_DATA_FILE_TYPE_UNDETERMINED;


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RUNNER_SAVE_ALL_RESPONSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RUNNER_SAVE_FAILED_RESPONSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RUNNER_SAVE_NO_RESPONSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RUNNER_SAVE_RESPONSES_LABELS; });
const RUNNER_SAVE_ALL_RESPONSES = 'all';
const RUNNER_SAVE_FAILED_RESPONSES = 'failed';
const RUNNER_SAVE_NO_RESPONSES = 'none';

let RUNNER_SAVE_RESPONSES_LABELS = {};

RUNNER_SAVE_RESPONSES_LABELS[RUNNER_SAVE_ALL_RESPONSES] = 'For all requests';
RUNNER_SAVE_RESPONSES_LABELS[RUNNER_SAVE_FAILED_RESPONSES] = 'For failed requests';
RUNNER_SAVE_RESPONSES_LABELS[RUNNER_SAVE_NO_RESPONSES] = 'For no requests';



/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uid_helper__ = __webpack_require__(73);


/**
                                              * Finds the entities that belong to a workspace
                                              * @param  {[Object]} workspace         [The workspace object]
                                              * @param  {[Array]} entities           [Array of entities to be looked through]
                                              * @param  {[String]} entityDependency  [Key for the dependency]
                                              * @return {[Array]}                    [Entities belonging to the workspace]
                                              */
const getWorkspaceEntities = (workspace, entities, entityKey) => {
  if (!workspace || !entities || !entityKey) {
    return [];
  }

  let workspaceEntities = [],
  entityDependencies = _.get(workspace, ['dependencies', entityKey]);

  if (!entityDependencies) {
    return workspaceEntities;
  }

  workspaceEntities = _.chain(entityDependencies).
  map(entity => _.find(entities, ['id', Object(__WEBPACK_IMPORTED_MODULE_0__uid_helper__["a" /* decomposeUID */])(entity).modelId])).
  compact().
  value();

  return workspaceEntities;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getWorkspaceEntities;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalFooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_modal__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keymaps_KeyMaps__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icons_CloseIcon__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__empty_states_CrashHandler__ = __webpack_require__(195);








let Modal = class Modal extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.handleZoom = this.handleZoom.bind(this);
  }

  closeModal() {
    !this.props.preventFocusReset && pm.mediator.trigger('focusBuilder');
    this.props.onRequestClose && this.props.onRequestClose();
  }

  getStyles() {
    if (this.props.fullscreen) {
      return {
        overlay: {
          zIndex: 200,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0 },

        content: _.merge({
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          border: 'none',
          background: 'transparent',
          overflow: 'hidden',
          borderRadius: '0',
          outline: 'none',
          padding: '0px' },
        this.props.customStyles) };

    }

    return {
      overlay: _.merge({
        zIndex: 100,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline' },
      this.props.customOverlayStyles),
      content: _.merge({
        position: 'relative',
        top: 'none',
        left: 'none',
        right: 'none',
        bottom: 'none',
        border: 'none',
        background: 'transparent',
        overflow: 'hidden',
        borderRadius: '3px',
        outline: 'none',
        padding: '0px',
        width: '480px',
        marginTop: '15vh' },
      this.props.customStyles) };

  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'modal': true,
      'modal-fullscreen': this.props.fullscreen,
      [`${this.props.className}`]: true });

  }

  getKeyMapHandlers() {
    return {
      decreaseUIZoom: pm.shortcuts.handle('decreaseUIZoom'),
      increaseUIZoom: pm.shortcuts.handle('increaseUIZoom'),
      resetUIZoom: pm.shortcuts.handle('resetUIZoom') };

  }

  handleZoom() {
    this.props.isOpen && this.forceUpdate();
  }

  componentWillUnmount() {
    pm.settings.off('setSetting:uiZoom', this.handleZoom);
  }

  componentDidMount() {
    pm.settings.on('setSetting:uiZoom', this.handleZoom);
  }

  getStyleValue(styleAttribute) {
    return _.defaultTo(parseFloat(styleAttribute), 0) + __WEBPACK_IMPORTED_MODULE_4__utils_util__["a" /* default */].getUnitFromStyle(styleAttribute);
  }

  getAdjustedStyles(modalStyles, resizingStyleAttributes) {
    _.each(resizingStyleAttributes, key => {
      let styleAttribute = _.get(modalStyles, 'content.' + key);
      if (!_.isEmpty(styleAttribute)) {
        _.set(modalStyles, 'content.' + key, this.getStyleValue(styleAttribute));
      }
    });
    return modalStyles;
  }

  render() {
    let resizingStyleAttributes = ['marginTop', 'height'],
    modalStyles = this.getAdjustedStyles(this.getStyles(), resizingStyleAttributes);

    let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
      if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child) && child.type === ModalHeader) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { onRequestClose: this.props.onRequestClose });
      }
      return child;
    });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_modal___default.a, {
          isOpen: this.props.isOpen,
          style: modalStyles,
          onRequestClose: this.closeModal,
          contentLabel: this.props.contentLabel,
          ariaHideApp: false,
          shouldCloseOnOverlayClick: false },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__empty_states_CrashHandler__["a" /* default */], { onClose: this.closeModal },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__keymaps_KeyMaps__["a" /* default */], {
              handlers: this.getKeyMapHandlers(),
              keyMap: pm.shortcuts.getShortcuts() },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
              children)))));





  }};


Modal.defaultProps = {
  isOpen: false,
  contentLabel: 'Modal' };



let ModalHeader = class ModalHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.onRequestClose && this.props.onRequestClose();
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'modal-header': true }, this.props.className);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'modal-header-title' },
          this.props.children),


        this.props.onRequestClose &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'modal-header-close-button-wrapper', onClick: this.handleClose },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Icons_CloseIcon__["a" /* default */], {
            className: 'modal-header-close-button' }))));





  }};


ModalHeader.defaultProps = { className: '' };

let ModalContent = class ModalContent extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'modal-content': true,
      'is-centered': this.props.centered },
    this.props.className);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        this.props.children));


  }};


let ModalFooter = class ModalFooter extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()(
    'modal-footer',
    { 'is-separated': this.props.separated }, this.props.className);

  }

  render() {
    let classes = this.getClasses();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes },
        this.props.children));


  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchHighlighter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_HighlightHelper__ = __webpack_require__(718);

let

SearchHighlighter = class SearchHighlighter extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      query,
      source,
      highlightClassName } =
    this.props,
    textArray = __WEBPACK_IMPORTED_MODULE_1__utils_HighlightHelper__["a" /* default */].getHighlightSplitArray(source, query);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

        !_.isEmpty(textArray) &&
        _.map(textArray, (textObj, index) => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                className: textObj.isHighlight ? highlightClassName : '',
                key: index },

              textObj.text));


        })));



  }};


SearchHighlighter.defaultProps = {
  query: '',
  source: '',
  highlightClassName: 'highlight' };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;

var _warning = __webpack_require__(284);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string") {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;

var _exenv = __webpack_require__(726);

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;

/***/ }),

/***/ 428:
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

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const RUNNER_TAB_RUNS = 'runner';
/* harmony export (immutable) */ __webpack_exports__["b"] = RUNNER_TAB_RUNS;

const RUNNER_TAB_RESULTS = 'results';
/* harmony export (immutable) */ __webpack_exports__["a"] = RUNNER_TAB_RESULTS;

const RUNNER_TAB_SUMMARY = 'summary';
/* harmony export (immutable) */ __webpack_exports__["c"] = RUNNER_TAB_SUMMARY;


/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_RightSolidIcon__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postman_date_helper__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_PluralizeHelper__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_RadialProgress__ = __webpack_require__(1379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_uid_helper__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_GetWorkspaceEntities__ = __webpack_require__(389);
var _class;









let


RunnerResultsHeader = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RunnerResultsHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { time: 0 };

    this.updateTime = this.updateTime.bind(this);
    this.handleOpenSummary = this.handleOpenSummary.bind(this);
  }

  componentDidMount() {
    this.updateTime();
    this.timeInterval = setInterval(this.updateTime, 60000);
  }

  updateTime() {
    let run = this.props.run;
    this.setState({ time: __WEBPACK_IMPORTED_MODULE_5__postman_date_helper___default.a.getFormattedDateAndTime(run.createdAt) });
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  getCollection(id) {
    return _.find(this.props.collections, ['id', id]);
  }

  getEnvironmentName(id) {
    let environment = _.find(this.props.environments, ['id', id]);
    if (!environment) {
      return 'No Environment';
    }
    return environment.name;
  }

  isError(iteration) {
    return _.some(iteration, request => {
      return request.error;
    });
  }

  isRetryable() {
    let run = this.props.run,
    collection = false,
    folder = true,
    environment = true;

    if (!run) {
      return false;
    }

    if (!this.props.activeWorkspace) {
      return false;
    }

    let targetCollection = _.get(run, 'target.collection');
    if (_.isEmpty(targetCollection)) {
      return false;
    }

    let collections = Object(__WEBPACK_IMPORTED_MODULE_10__utils_GetWorkspaceEntities__["a" /* getWorkspaceEntities */])(this.props.activeWorkspace, this.props.collections, 'collections');

    if (!collections) {
      return false;
    }

    collection = _.some(collections, ['id', targetCollection]);

    if (!collection) {
      return false;
    }

    let targetFolder = _.get(run, 'target.folder');
    if (!_.isEmpty(targetFolder)) {
      folder = _.some(this.props.folders, folder => {
        return folder.id === targetFolder && folder.collection === targetCollection;
      });

      if (!folder) {
        return false;
      }
    }

    if (run.environment) {
      let environments = Object(__WEBPACK_IMPORTED_MODULE_10__utils_GetWorkspaceEntities__["a" /* getWorkspaceEntities */])(this.props.activeWorkspace, this.props.environments, 'environments');
      environment = _.some(environments, ['id', run.environment]);

      if (!environment) {
        return false;
      }
    }

    return true;
  }

  getProgress() {
    let run = this.props.run,
    collection = _.get(run, 'target.collection'),
    requests = _.filter(this.props.requests, ['collection', collection]),
    requestCount = _.size(requests);

    if (requestCount === 0) {
      return 0;
    }

    let iterationCount = run.iterations.length,
    total = requestCount * iterationCount,
    doneIterations = run.currentIteration,
    doneRequestsInIteration = _.get(run, ['iterations', run.currentIteration, 'length'], 0),
    done = doneIterations * requestCount + doneRequestsInIteration;

    if (done >= total) {
      total += done - total + 1;
    }
    return Math.min(Math.floor(done / total * 100), 100);
  }

  getProgressText(value) {
    if (value < 1000) {
      return value;
    }
    return (value / 1000).toPrecision(3) + 'K';
  }

  handleOpenSummary() {
    __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('collectionrun', 'stats');
    this.props.onOpenSummary && this.props.onOpenSummary();
  }

  render() {
    const run = this.props.run;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header' },

        _.includes(['running', 'paused', 'stopping'], run.status) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_RadialProgress__["a" /* default */], {
          borderWidth: 3,
          className: 'runner-results__header__progress',
          progress: this.getProgress(),
          radius: 30 }),




        _.includes(['finished', 'stopped'], run.status) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header__passed-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header__passed' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header__passed-count' },
              this.getProgressText(run.totalTestCount - run.failedTestCount)), 'PASSED')),







        _.includes(['finished', 'stopped'], run.status) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header__failed-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header__failed' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__header__failed-count' },
              this.getProgressText(run.failedTestCount)), 'FAILED')),






        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta__name-iter' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta__name' },
              run.name),



            _.includes(['running', 'stopping'], run.status) &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta__iterations' }, 'Running ',

              run.iterations.length + (run.iterations.length === 1 ? ' iteration' : ' iterations'), '...'),




            run.status === 'paused' &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta__iterations' }, 'Paused'),





            _.includes(['finished', 'stopped'], run.status) &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta__iterations' },
              __WEBPACK_IMPORTED_MODULE_5__postman_date_helper___default.a.getFormattedTime(run.createdAt))),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__meta__environment' },

            this.getEnvironmentName(run.environment))),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__actions' },

          _.includes(['running', 'paused'], run.status) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'runner-results__action--abort',
              type: 'secondary',
              onClick: this.props.onRunAction.bind(this, 'stop') }, 'Stop Run'),





          _.includes(['stopping'], run.status) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'runner-results__action--abort',
              type: 'secondary' }, 'Stopping...'),





          _.includes(['running', 'stopping'], run.status) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'runner-results__action--pause',
              type: 'secondary',
              onClick: this.props.onRunAction.bind(this, 'pause'),
              disabled: _.includes(['stopping'], run.status) }, 'Pause'),






          _.includes(['paused'], run.status) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'runner-results__action--resume',
              type: 'secondary',
              onClick: this.props.onRunAction.bind(this, 'resume') }, 'Resume'),






          _.includes(['finished', 'stopped'], run.status) &&
          !this.isError(run.iterations) &&
          this.props.showSummaryLink &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'runner-results__summary-link',
              size: 'large',
              type: 'primary',
              onClick: this.handleOpenSummary }, 'Run Summary ',

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_RightSolidIcon__["a" /* default */], { className: 'runner-results__forward-icon', style: 'primary' })),



          _.includes(['finished', 'stopped'], run.status) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'runner-results__action--export',
              type: 'secondary',
              onClick: this.props.onExport.bind(this, this.props.run.id) }, 'Export Results'),





          _.includes(['finished', 'stopped'], run.status) &&
          this.isRetryable() &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'runner-results__action--retry',
              type: 'secondary',
              onClick: this.props.onRunAction.bind(this, 'retry') }, 'Retry'),





          _.includes(['finished', 'stopped'], run.status) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'runner-results__action--new',
              type: 'secondary',
              onClick: this.props.onNewRun.bind(this) }, 'New'))));







  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerResultsSidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _class;

let


RunnerResultsSidebar = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RunnerResultsSidebar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getTabClasses(tab) {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'runner-results__sidebar__all': tab === 'all',
      'runner-results__sidebar__passed': tab === 'pass',
      'runner-results__sidebar__failed': tab === 'fail',
      'is-selected': this.props.selectedFilter === tab });

  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-results__sidebar' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getTabClasses('all'),
            onClick: this.props.onFilterChange.bind(this, 'all') },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'passed' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'failed' })),



        this.props.status !== 'running' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getTabClasses('pass'),
            onClick: this.props.onFilterChange.bind(this, 'pass') },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'passed' })),



        this.props.status !== 'running' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getTabClasses('fail'),
            onClick: this.props.onFilterChange.bind(this, 'fail') },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'failed' }))));




  }}) || _class;

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);



let

List = class List extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor() {
    super();

    this.state = {
      height: 0,
      actualStart: 0,
      startItem: 0,
      actualEnd: 0,
      endItem: 0 };


    this.handleScroll = this.handleScroll.bind(this);
    this.averageHeight = 0;
  }

  componentWillMount() {
    this.setDimensions();
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

  setDimensions() {
    this.setState({ height: this.props.height }, this.handleScroll);
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
          this.handleScroll({ target: { scrollTop: scrollEnd } });
          return;
        }
        me.scrollTop += increment;
        this.handleScroll({ target: { scrollTop: me.scrollTop + increment } });
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
          this.handleScroll({ target: { scrollTop: scrollEnd } });
          return;
        }
        me.scrollTop -= increment;
        this.handleScroll({ target: { scrollTop: me.scrollTop - increment } });
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
      this.handleScroll({ target: { scrollTop: endScroll } });
    }
  }

  handleScroll(e) {
    let {
      list,
      listItemHeights,
      height } =
    this.props;

    let scrollPosition = _.get(e, ['target', 'scrollTop'], 0),
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

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerSummaryTimeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RunnerSummaryTimelineKeyframe__ = __webpack_require__(1391);
var _class;





const ITEM_WIDTH = 26;let


RunnerSummaryTimeline = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RunnerSummaryTimeline extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { visibleWidth: 0 };

    this.keyframeWidths = [];

    this._keyframe = this._keyframe.bind(this);
    this.setBounds = this.setBounds.bind(this);
    this.setKeyframeWidths = this.setKeyframeWidths.bind(this);
  }

  componentDidMount() {
    this.setBounds();
    this.setKeyframeWidths();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.scrollLeft !== nextProps.scrollLeft) {
      this.refs.timeline.scrollLeft = nextProps.scrollLeft;
    }
  }

  setBounds() {
    let me = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);

    this.setState({ visibleWidth: me.clientWidth });
  }

  setKeyframeWidths() {
    this.keyframeWidths = _.map(this.props.iterations, iteration => {
      return ITEM_WIDTH;
    });
  }

  _keyframe(listItem, index) {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RunnerSummaryTimelineKeyframe__["a" /* default */], {
        active: this.props.active,
        key: index,
        type: this.props.type,
        hoveredIteration: this.props.hoveredIteration,
        iterationId: index,
        iterations: this.props.iterations,
        requestId: this.props.requestId,
        testId: this.props.testId,
        onHover: this.props.onHover }));


  }

  render() {
    let keyframes = this.props.iterations;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'runner-summary__body__timeline' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'pm-row', ref: 'timeline', onScroll: this.props.onScroll },

          _.map(this.props.iterations, (iteration, iterationId) => {
            return this._keyframe(iteration, iterationId);
          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_pipelines_user_action__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_runner_BackboneReduxBridge__ = __webpack_require__(178);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};




// Run iteration actions

const startRun = (runId, selection, name, retry = false) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["T" /* RUNNER_START_RUN */],
    runId,
    selection,
    name,
    retry };

};
/* harmony export (immutable) */ __webpack_exports__["startRun"] = startRun;


const errorRun = (runId, selection) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["t" /* RUNNER_ERROR_RUN */],
    runId,
    selection };

};
/* harmony export (immutable) */ __webpack_exports__["errorRun"] = errorRun;


const startIteration = (runId, iteration) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["R" /* RUNNER_START_ITERATION */],
    runId,
    iteration };

};
/* harmony export (immutable) */ __webpack_exports__["startIteration"] = startIteration;


const startRequest = (runId, iteration, request) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["S" /* RUNNER_START_REQUEST */],
    runId,
    iteration,
    request };

};
/* harmony export (immutable) */ __webpack_exports__["startRequest"] = startRequest;


const errorRequest = (runId, iteration, request, error) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["s" /* RUNNER_ERROR_REQUEST */],
    runId,
    iteration,
    request,
    error };

};
/* harmony export (immutable) */ __webpack_exports__["errorRequest"] = errorRequest;


const startTest = (runId, iteration, request) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["U" /* RUNNER_START_TEST */],
    runId,
    iteration,
    request };

};
/* harmony export (immutable) */ __webpack_exports__["startTest"] = startTest;


const errorTest = (runId, iteration, request, error) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["u" /* RUNNER_ERROR_TEST */],
    runId,
    iteration,
    request,
    error };

};
/* harmony export (immutable) */ __webpack_exports__["errorTest"] = errorTest;


const endTest = (runId, iteration, request, test) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["r" /* RUNNER_END_TEST */],
    runId,
    iteration,
    request,
    test };

};
/* harmony export (immutable) */ __webpack_exports__["endTest"] = endTest;


const endRequest = (runId, iteration, request, response) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["p" /* RUNNER_END_REQUEST */],
    runId,
    iteration,
    request,
    response };

};
/* harmony export (immutable) */ __webpack_exports__["endRequest"] = endRequest;


const addResponseBody = (runId, iteration, request, response) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["a" /* RUNNER_ADD_RESPONSE_BODY */],
    runId,
    iteration,
    request,
    response };

};
/* harmony export (immutable) */ __webpack_exports__["addResponseBody"] = addResponseBody;


const endIteration = (runId, iteration) => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["o" /* RUNNER_END_ITERATION */],
    runId,
    iteration };

};
/* harmony export (immutable) */ __webpack_exports__["endIteration"] = endIteration;


const endRun = runId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["q" /* RUNNER_END_RUN */],
    runId };

};
/* harmony export (immutable) */ __webpack_exports__["endRun"] = endRun;


// Run admin tasks

const pauseRun = runId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["E" /* RUNNER_PAUSE_RUN */],
    runId };

};
/* harmony export (immutable) */ __webpack_exports__["pauseRun"] = pauseRun;


const resumeRun = runId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["G" /* RUNNER_RESUME_RUN */],
    runId };

};
/* harmony export (immutable) */ __webpack_exports__["resumeRun"] = resumeRun;


const stoppingRun = runId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["V" /* RUNNER_STOPPING_RUN */],
    runId };

};
/* harmony export (immutable) */ __webpack_exports__["stoppingRun"] = stoppingRun;


const stopRun = runId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["W" /* RUNNER_STOP_RUN */],
    runId };

};
/* harmony export (immutable) */ __webpack_exports__["stopRun"] = stopRun;


const deleteRun = runId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["m" /* RUNNER_DELETE_RUN */],
    runId };

};
/* harmony export (immutable) */ __webpack_exports__["deleteRun"] = deleteRun;


const deleteAllRuns = runId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["g" /* RUNNER_DELETE_ALL_RUNS */],
    runId };

};
/* harmony export (immutable) */ __webpack_exports__["deleteAllRuns"] = deleteAllRuns;


const loadRuns = (runsJSON, importPartial = false) => {
  let runs = {};
  _.forEach(runsJSON, runJSON => {
    let run,
    runId = runJSON.id;

    try {
      if (runJSON.collection_id && runJSON.results) {
        // Backbone format
        run = Object(__WEBPACK_IMPORTED_MODULE_3__reducers_runner_BackboneReduxBridge__["a" /* BackboneToRedux */])(runJSON)[runId];
      } else
      {
        // already in redux format
        run = runJSON;
      }

      // If execution is here, I can guarantee that the run is in the Redux format now.
      if (importPartial) {
        // Import barebone run to display in the runs list. Actual run will be loaded if needed (if user requests explicitly)
        run = {
          id: run.id,
          name: run.name,
          status: run.status,
          environment: run.environment,
          createdAt: run.createdAt,
          totalTestCount: run.totalTestCount,
          failedTestCount: run.failedTestCount,
          workspace: run.workspace };

      }

      runs[runId] = run;
    }
    catch (e) {
      window.RELEASE_CHANNEL !== 'prod' && console.error(e);
    }
  });

  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["B" /* RUNNER_LOAD_RUNS */],
    runs };

};
/* harmony export (immutable) */ __webpack_exports__["loadRuns"] = loadRuns;


const loadRun = run => {
  if (!run) {
    return { type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["D" /* RUNNER_NOOP */] };
  }

  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["v" /* RUNNER_IMPORT_RUN */],
    runId: run.id,
    run };

};
/* harmony export (immutable) */ __webpack_exports__["loadRun"] = loadRun;


const importRun = (runJSON, importPartial = false) => {
  let run,
  runId = runJSON.id;

  try {
    run = Object(__WEBPACK_IMPORTED_MODULE_3__reducers_runner_BackboneReduxBridge__["a" /* BackboneToRedux */])(runJSON)[runId];
  }
  catch (e) {
    console.log(e);
    pm.alerts.getRef() && pm.alerts.error('Could not import test run. Please check the format of the file.');
    return { type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["D" /* RUNNER_NOOP */] };
  }

  let runToDB = _extends({},
  run, {
    id: runId,
    dataFile: !run.dataFile ? null : run.dataFile,
    owner: pm.runnerStore.getState().user.id }),

  importRunEvent = Object(__WEBPACK_IMPORTED_MODULE_1__modules_model_event__["a" /* createEvent */])('create', 'collectionrun', runToDB);

  Object(__WEBPACK_IMPORTED_MODULE_2__modules_pipelines_user_action__["a" /* default */])(importRunEvent).catch(() => {
    pm.alerts.getRef() && pm.alerts.error('Could not import test run.');
  });

  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["v" /* RUNNER_IMPORT_RUN */],
    runId,
    run };

};
/* harmony export (immutable) */ __webpack_exports__["importRun"] = importRun;



const cleanRun = runId => {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_RunnerActionsConstants__["b" /* RUNNER_CLEAN_RUN */],
    runId };

};
/* harmony export (immutable) */ __webpack_exports__["cleanRun"] = cleanRun;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MoreIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '4', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'more', d: 'M12 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM8 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#more' }));



function MoreIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DeleteIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '15', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'delete', d: 'M2 3h13v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm3 2v9h1V5H5zm3 0v9h1V5H8zm3 0v9h1V5h-1zM2 0h13a1 1 0 0 1 1 1v1H1V1a1 1 0 0 1 1-1z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#delete' }));



function DeleteIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let PluralizeHelper = class PluralizeHelper {
  constructor() {
  }

  pluralize({ count = 1, singular = '', plural = '' }) {
    if (count === 1) {
      return singular;
    } else
    {
      return plural;
    }
  }};


/* harmony default export */ __webpack_exports__["a"] = (new PluralizeHelper());

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CollectionIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '12', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'collection', d: 'M.8 2h4.7L8 5.692h8V13.2a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1-.8-.8V2.8A.8.8 0 0 1 .8 2zm6.7 0h7.7a.8.8 0 0 1 .8.8v1.508H9L7.5 2z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#collection' }));



function CollectionIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_CollectionStore__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_TeamIcon__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_LockedIcon__ = __webpack_require__(685);





let

CollectionMetaIcons = class CollectionMetaIcons extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-meta-icons' },
        this.props.collection.shared === true && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_TeamIcon__["a" /* default */], { className: 'collection-meta-icon', size: 'xs', title: 'Shared with team' }),
        this.props.collection.isEditable === false && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_LockedIcon__["a" /* default */], { className: 'collection-meta-icon', size: 'xs', title: 'Read only' })));


  }};


CollectionMetaIcons.propTypes = {
  collection: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([
  __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_2__stores_CollectionStore__["a" /* CollectionItemStore */]),
  __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]) };



/* harmony default export */ __webpack_exports__["a"] = (CollectionMetaIcons);

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TeamIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var httpStatusCodes = {
  100: {
    'name': 'Continue',
    'detail': 'This means that the server has received the request headers, and that the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request). If the request body is large, sending it to a server when a request has already been rejected based upon inappropriate headers is inefficient. To have a server check if the request could be accepted based on the request\'s headers alone, a client must send Expect: 100-continue as a header in its initial request and check if a 100 Continue status code is received in response before continuing (or receive 417 Expectation Failed and not continue).' },

  101: {
    'name': 'Switching Protocols',
    'detail': 'This means the requester has asked the server to switch protocols and the server is acknowledging that it will do so.' },

  102: {
    'name': 'Processing (WebDAV) (RFC 2518)',
    'detail': 'As a WebDAV request may contain many sub-requests involving file operations, it may take a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost.' },

  103: {
    'name': 'Checkpoint',
    'detail': 'This code is used in the Resumable HTTP Requests Proposal to resume aborted PUT or POST requests.' },

  122: {
    'name': 'Request-URI too long',
    'detail': 'This is a non-standard IE7-only code which means the URI is longer than a maximum of 2083 characters.' },

  200: {
    'name': 'OK',
    'detail': 'Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request the response will contain an entity describing or containing the result of the action.' },

  201: {
    'name': 'Created',
    'detail': 'The request has been fulfilled and resulted in a new resource being created.' },

  202: {
    'name': 'Accepted',
    'detail': 'The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.' },

  203: {
    'name': 'Non-Authoritative Information (since HTTP/1.1)',
    'detail': 'The server successfully processed the request, but is returning information that may be from another source.' },

  204: {
    'name': 'No Content',
    'detail': 'The server successfully processed the request, but is not returning any content.' },

  205: {
    'name': 'Reset Content',
    'detail': 'The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.' },

  206: {
    'name': 'Partial Content',
    'detail': 'The server is delivering only part of the resource due to a range header sent by the client. The range header is used by tools like wget to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams' },

  207: {
    'name': 'Multi-Status (WebDAV) (RFC 4918)',
    'detail': 'The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.' },

  208: {
    'name': 'Already Reported (WebDAV) (RFC 5842)',
    'detail': 'The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.' },

  226: {
    'name': 'IM Used (RFC 3229)',
    'detail': 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance. ' },

  300: {
    'name': 'Multiple Choices',
    'detail': 'Indicates multiple options for the resource that the client may follow. It, for instance, could be used to present different format options for video, list files with different extensions, or word sense disambiguation.' },

  301: {
    'name': 'Moved Permanently',
    'detail': 'This and all future requests should be directed to the given URI.' },

  302: {
    'name': 'Found',
    'detail': 'This is an example of industrial practice contradicting the standard. HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours. However, some Web applications and frameworks use the 302 status code as if it were the 303.' },

  303: {
    'name': 'See Other',
    'detail': 'The response to the request can be found under another URI using a GET method. When received in response to a POST (or PUT/DELETE), it should be assumed that the server has received the data and the redirect should be issued with a separate GET message.' },

  304: {
    'name': 'Not Modified',
    'detail': 'Indicates the resource has not been modified since last requested. Typically, the HTTP client provides a header like the If-Modified-Since header to provide a time against which to compare. Using this saves bandwidth and reprocessing on both the server and client, as only the header data must be sent and received in comparison to the entirety of the page being re-processed by the server, then sent again using more bandwidth of the server and client.' },

  305: {
    'name': 'Use Proxy (since HTTP/1.1)',
    'detail': 'Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons.' },

  306: {
    'name': 'Switch Proxy',
    'detail': 'No longer used. Originally meant "Subsequent requests should use the specified proxy."' },

  307: {
    'name': 'Temporary Redirect (since HTTP/1.1)',
    'detail': 'In this occasion, the request should be repeated with another URI, but future requests can still use the original URI. In contrast to 303, the request method should not be changed when reissuing the original request. For instance, a POST request must be repeated using another POST request.' },

  308: {
    'name': 'Resume Incomplete',
    'detail': 'This code is used in the Resumable HTTP Requests Proposal to resume aborted PUT or POST requests.' },

  400: {
    'name': 'Bad Request',
    'detail': 'The request cannot be fulfilled due to bad syntax.' },

  401: {
    'name': 'Unauthorized',
    'detail': 'Similar to 403 Forbidden, but specifically for use when authentication is possible but has failed or not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.' },

  402: {
    'name': 'Payment Required',
    'detail': 'Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not usually used. As an example of its use, however, Apple\'s MobileMe service generates a 402 error ("httpStatusCode:402" in the Mac OS X Console log) if the MobileMe account is delinquent.' },

  403: {
    'name': 'Forbidden',
    'detail': 'The request was a legal request, but the server is refusing to respond to it. Unlike a 401 Unauthorized response, authenticating will make no difference.' },

  404: {
    'name': 'Not Found',
    'detail': 'The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.' },

  405: {
    'name': 'Method Not Allowed',
    'detail': 'A request was made of a resource using a request method not supported by that resource; for example, using GET on a form which requires data to be presented via POST, or using PUT on a read-only resource.' },

  406: {
    'name': 'Not Acceptable',
    'detail': 'The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.' },

  407: {
    'name': 'Proxy Authentication Required',
    'detail': 'The client must first authenticate itself with the proxy.' },

  408: {
    'name': 'Request Timeout',
    'detail': 'The server timed out waiting for the request. According to W3 HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."' },

  409: {
    'name': 'Conflict',
    'detail': 'Indicates that the request could not be processed because of conflict in the request, such as an edit conflict.' },

  410: {
    'name': 'Gone',
    'detail': 'Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource again in the future. Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.' },

  411: {
    'name': 'Length Required',
    'detail': 'The request did not specify the length of its content, which is required by the requested resource.' },

  412: {
    'name': 'Precondition Failed',
    'detail': 'The server does not meet one of the preconditions that the requester put on the request.' },

  413: {
    'name': 'Request Entity Too Large',
    'detail': 'The request is larger than the server is willing or able to process.' },

  414: {
    'name': 'Request-URI Too Long',
    'detail': 'The URI provided was too long for the server to process.' },

  415: {
    'name': 'Unsupported Media Type',
    'detail': 'The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.' },

  416: {
    'name': 'Requested Range Not Satisfiable',
    'detail': 'The client has asked for a portion of the file, but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file.' },

  417: {
    'name': 'Expectation Failed',
    'detail': 'The server cannot meet the requirements of the Expect request-header field.' },

  418: {
    'name': 'I\'m a teapot (RFC 2324)',
    'detail': 'This code was defined in 1998 as one of the traditional IETF April Fools\' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. However, known implementations do exist.' },

  422: {
    'name': 'Unprocessable Entity (WebDAV) (RFC 4918)',
    'detail': 'The request was well-formed but was unable to be followed due to semantic errors.' },

  423: {
    'name': 'Locked (WebDAV) (RFC 4918)',
    'detail': 'The resource that is being accessed is locked.' },

  424: {
    'name': 'Failed Dependency (WebDAV) (RFC 4918)',
    'detail': 'The request failed due to failure of a previous request (e.g. a PROPPATCH).' },

  425: {
    'name': 'Unordered Collection (RFC 3648)',
    'detail': 'Defined in drafts of "WebDAV Advanced Collections Protocol",[14] but not present in "Web Distributed Authoring and Versioning (WebDAV) Ordered Collections Protocol".[15]' },

  426: {
    'name': 'Upgrade Required (RFC 2817)',
    'detail': 'The client should switch to a different protocol such as TLS/1.0.' },

  428: {
    'name': 'Precondition Required',
    'detail': 'The origin server requires the request to be conditional. Intended to prevent "the \'lost update\' problem, where a client GETs a resource\'s state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."[17] Proposed in an Internet-Draft.' },

  429: {
    'name': 'Too Many Requests',
    'detail': 'The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes. Proposed in an Internet-Draft.' },

  431: {
    'name': 'Request Header Fields Too Large',
    'detail': 'The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large. Proposed in an Internet-Draft.' },

  444: {
    'name': 'No Response',
    'detail': 'An nginx HTTP server extension. The server returns no information to the client and closes the connection (useful as a deterrent for malware).' },

  449: {
    'name': 'Retry With',
    'detail': 'A Microsoft extension. The request should be retried after performing the appropriate action.' },

  450: {
    'name': 'Blocked by Windows Parental Controls',
    'detail': 'A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking access to the given webpage.' },

  499: {
    'name': 'Client Closed Request',
    'detail': 'An Nginx HTTP server extension. This code is introduced to log the case when the connection is closed by client while HTTP server is processing its request, making server unable to send the HTTP header back.' },

  500: {
    'name': 'Internal Server Error',
    'detail': 'A generic error message, given when no more specific message is suitable.' },

  501: {
    'name': 'Not Implemented',
    'detail': 'The server either does not recognise the request method, or it lacks the ability to fulfill the request.' },

  502: {
    'name': 'Bad Gateway',
    'detail': 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.' },

  503: {
    'name': 'Service Unavailable',
    'detail': 'The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.' },

  504: {
    'name': 'Gateway Timeout',
    'detail': 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.' },

  505: {
    'name': 'HTTP Version Not Supported',
    'detail': 'The server does not support the HTTP protocol version used in the request.' },

  506: {
    'name': 'Variant Also Negotiates (RFC 2295)',
    'detail': 'Transparent content negotiation for the request results in a circular reference.[21]' },

  507: {
    'name': 'Insufficient Storage (WebDAV) (RFC 4918)',
    'detail': 'The server is unable to store the representation needed to complete the request.' },

  508: {
    'name': 'Loop Detected (WebDAV) (RFC 5842)',
    'detail': 'The server detected an infinite loop while processing the request (sent in lieu of 208).' },

  509: {
    'name': 'Bandwidth Limit Exceeded (Apache bw/limited extension)',
    'detail': 'This status code, while used by many servers, is not specified in any RFCs.' },

  510: {
    'name': 'Not Extended (RFC 2774)',
    'detail': 'Further extensions to the request are required for the server to fulfill it.[22]' },

  511: {
    'name': 'Network Authentication Required',
    'detail': 'The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g. "captive portals" used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot). Proposed in an Internet-Draft.' },

  598: {
    'name': 'Network read timeout error',
    'detail': 'This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.' },

  599: {
    'name': 'Network connect timeout error[23]',
    'detail': 'This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy.' } };



/* harmony default export */ __webpack_exports__["a"] = (httpStatusCodes);

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

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LockedIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '12', height: '14', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'locked', d: 'M8 1C5.79 1 4 2.79 4 5v2H2v8h12V7h-2V5c0-2.21-1.79-4-4-4zm0 2c1.19 0 2 .81 2 2v2H6V5c0-1.19.81-2 2-2z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#locked' }));



function LockedIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DownloadIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceActionDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_MoreIcon__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_uuid_helper__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(22);








let

WorkspaceActionDropdown = class WorkspaceActionDropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isOffline: false,
      isDefaultWorkspace: false };


    this.handleSyncStatusChange = this.handleSyncStatusChange.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.handleShareWorkspace = this.handleShareWorkspace.bind(this);
  }

  componentWillMount() {
    pm.syncManager.on('change:currentSyncStatus', this.handleSyncStatusChange);
    this.handleSyncStatusChange();
    this.setDefaultWorkspace();
  }

  componentWillUnmount() {
    pm.syncManager.off('change:currentSyncStatus', this.handleSyncStatusChange);
  }

  handleSyncStatusChange() {
    let currentSyncStatus = pm.syncManager.get('currentSyncStatus');

    this.setState({ isOffline: !_.includes(['syncFinished', 'syncStarting'], currentSyncStatus) });
  }

  setDefaultWorkspace() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('WorkspaceStore').find(this.props.workspaceId),
    defaultUserWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_6__utils_uuid_helper__["a" /* deterministicUUID */])(`user:${currentUser.id}`),
    defaultTeamWorkspaceId = null;

    if (workspace && workspace.id === defaultUserWorkspaceId) {
      this.setState({ isDefaultWorkspace: true });
      return;
    }

    let teamId = _.get(currentUser, 'team.id', null);
    if (teamId) {
      defaultTeamWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_6__utils_uuid_helper__["a" /* deterministicUUID */])(`team:${teamId}`);

      if (this.props.workspaceId === defaultTeamWorkspaceId) {
        this.setState({ isDefaultWorkspace: true });
      }
    }
  }

  handleShareWorkspace() {
    let workspaceId = this.props.workspaceId,
    workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('WorkspaceStore').find(workspaceId),
    currentUser = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore');

    if (this.state.isDefaultWorkspace || workspace.type === 'personal' && currentUser.isFreeUser) {
      pm.mediator.trigger('openInviteModal', { workspaceId, source: 'share_ws' });
      return;
    }

    pm.mediator.trigger('openShareWorkspaceModal', workspaceId);
  }

  handleItemSelect(item) {
    let { workspaceId } = this.props,
    workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('WorkspaceStore').find(workspaceId);
    if (!workspace && item !== 'details') {
      pm.mediator.trigger('joinWorkspace', workspaceId);
      return;
    }
    switch (item) {
      case 'details':
        __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'view_details');
        Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('SyncWorkspaceStore').
        fetchWorkspace(workspaceId).
        then(workspace => {
          pm.mediator.trigger('openWorkspaceDetailsModal', workspace);
        });
        break;

      case 'manageMembers':
      case 'share':
        this.handleShareWorkspace(item);
        break;

      case 'rename':
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
    if (this.state.isOffline) {
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
    let disabledState = this.getDisabledState(),
    workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('WorkspaceStore').find(this.props.workspaceId),
    { isShareDisabled, shareDisableText } = this.getShareDisabledStatus(workspace),
    { isDeleteDisabled, deleteDisableText } = this.getDeleteDisabledStatus(workspace);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["a" /* Dropdown */], {
          className: 'workspace-actions-dropdown',
          onSelect: this.handleItemSelect,
          onToggle: this.props.onToggle },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["b" /* DropdownButton */], {
            dropdownStyle: 'nocaret',
            type: 'custom' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], { type: 'icon', className: 'workspace-actions-dropdown-button' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_MoreIcon__["a" /* default */], null))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true, dropup: 'auto' },
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

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Edit Description')),


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




  }};


WorkspaceActionDropdown.defaultProps = { tooltipPlacement: 'right' };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncOfflineStatusBarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sync_SyncOfflineStatusBar__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_RequesterTabConstants__ = __webpack_require__(109);
var _class;





const defaultState = { notInSync: false };

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




SyncOfflineStatusBarContainer = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["a" /* observer */])(_class = class SyncOfflineStatusBarContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = defaultState;

    this.attachListeners = this.attachListeners.bind(this);
    this.detachListeners = this.detachListeners.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.model = pm.syncManager;
    this.handleModelChange();
    this.attachListeners();
  }

  componentWillUnmount() {
    this.detachListeners();
    this.model = null;
  }

  attachListeners() {
    this.model && this.model.on('change:currentSyncStatus', this.handleModelChange);
  }

  detachListeners() {
    this.model && this.model.off('change:currentSyncStatus', this.handleModelChange);
  }

  handleModelChange() {
    let currentSyncStatus = this.model && this.model.get('currentSyncStatus');

    let status;
    if (currentSyncStatus === 'makeConnecting') {
      status = 'connecting';
    } else if (!_.includes(['syncFinished', 'syncStarting'], currentSyncStatus)) {
      status = 'offline';
    } else {
      this.handleClose();
      return;
    }

    this.setState({ status });
    this.handleOpen();

  }

  handleOpen() {
    this.setState({ notInSync: true });
  }

  handleClose() {
    this.setState(defaultState);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_sync_SyncOfflineStatusBar__["a" /* default */], {
        isOpen:
        this.state.notInSync && (
        config[this.props.position].teamCheck ? Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').type === 'team' : true) &&
        !(Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode === __WEBPACK_IMPORTED_MODULE_4__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */] && this.state.status === 'offline' && this.props.position === 'builder'),

        status: this.state.status,
        message: config[this.props.position]['message'][this.state.status] }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Infobar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Markdown__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_InfobarConstants__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icons_CloseIcon__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Icons_ExclamationIcon__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);







let

Infobar = class Infobar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.dismissInfobar = this.dismissInfobar.bind(this);
    this.handlePrimaryAction = this.handlePrimaryAction.bind(this);
    this.handleSecondaryAction = this.handleSecondaryAction.bind(this);
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

              !this.props.noIcon &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Icons_ExclamationIcon__["a" /* default */], { className: 'infobar__icon' })),


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
  noIcon: false };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Inputs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__ = __webpack_require__(80);








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

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionExplorer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Explorer__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_CollectionTreeUtil__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(11);
var _class;






let


CollectionExplorer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class CollectionExplorer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      selectedTarget: {},
      filter: '' };

    this.meta = this.props.meta || {};
    this.setInitialTargets = this.setInitialTargets.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.getCreateRowText = this.getCreateRowText.bind(this);
  }

  componentDidMount() {
    this.setInitialTargets();
  }

  setInitialTargets(initialSelection = this.props.initialSelection) {
    if (!initialSelection) {
      return;
    }

    let item = null;
    if (_.get(initialSelection, 'folder')) {
      item = _.get(initialSelection, 'folder');
    } else
    if (_.get(initialSelection, 'collection')) {
      item = _.get(initialSelection, 'collection');
    }

    item && this.refs.explorer && this.refs.explorer.handleSelect(item);
  }

  handleSelect(target) {
    this.setState({
      selectedTarget: target,
      filter: '' });

    _.invoke(this.props, 'onSelect', target);
  }

  handleCreate(name, selectedTarget) {
    if (!selectedTarget) {
      return;
    }

    // This means it is the collection create
    if (_.isNull(selectedTarget.id)) {
      let currentUser = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('CurrentUserStore');

      let collection = {
        id: __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].guid(),
        name: name,
        owner: currentUser.id },

      collectionAddEvent = {
        name: 'create_deep',
        namespace: 'collection',
        data: { collection },
        meta: { origin: this.meta.origin } };


      Object(__WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__["a" /* default */])(collectionAddEvent).
      then(response => {

        if (!_.isEmpty(_.get(response, 'error'))) {
          console.error('Error in creating folder', response.error);
          return;
        }
        _.invoke(this.props, 'onCreate', _.assign({ type: 'collection' }, collection));
      }).
      catch(err => {
        console.error('Error in pipeline while creating folder', err);
      });
    }

    // This means we are creating a folder inside a collection (filter means, the collection is selected via filter)
    else if (!_.isEmpty(this.state.filter)) {
        let collection = _.find(this.props.collections, ['id', selectedTarget.id]);

        if (!collection) {
          return pm.alerts.error('We can\'t seem to find the collection.');
        }
        if (!collection.isEditable) {
          return pm.alerts.error('You do not have permissions required to edit this collection.');
        }

        let folderAddEvent = {
          name: 'create_deep',
          namespace: 'folder',
          data: {
            folder: {
              id: __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].guid(),
              name: name,
              collection: collection.id },

            target: {
              model: 'collection',
              modelId: collection.id } } };




        Object(__WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__["a" /* default */])(folderAddEvent).
        then(response => {

          if (!_.isEmpty(_.get(response, 'error'))) {
            console.error('Error in creating folder', response.error);
            return;
          }
          _.invoke(this.props, 'onCreate', _.assign({ type: 'folder' }, collection));
        }).
        catch(err => {
          console.error('Error in pipeline while creating folder', err);
        });
      }

      // Here it may be inside a collection or a folder selected
      else {
          let folder,
          collection,
          canEdit,
          folderCollectionId;

          if (selectedTarget.type === 'collection') {
            collection = _.find(this.props.collections, ['id', selectedTarget.id]);

            if (!collection) {
              return pm.alerts.error('We can\'t seem to find the collection.');
            }
            if (!collection.isEditable) {
              return pm.alerts.error('You do not have permissions required to edit this collection.');
            }

            let folderAddEvent = {
              name: 'create_deep',
              namespace: 'folder',
              data: {
                folder: {
                  id: __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].guid(),
                  name: name,
                  collection: collection.id },

                target: {
                  model: 'collection',
                  modelId: collection.id } } };




            Object(__WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__["a" /* default */])(folderAddEvent).
            then(response => {

              if (!_.isEmpty(_.get(response, 'error'))) {
                console.error('Error in creating folder', response.error);
                return;
              }
              _.invoke(this.props, 'onCreate', _.assign({ type: 'folder' }, collection));
            }).
            catch(err => {
              console.error('Error in pipeline while creating folder', err);
            });
          } else
          if (selectedTarget.type === 'folder') {
            folder = _.find(this.props.folders, ['id', selectedTarget.id]);
            folderCollectionId = folder && folder.collection;
            collection = _.find(this.props.collections, ['id', folderCollectionId]);

            if (!collection) {
              return pm.alerts.error('We can\'t seem to find the collection.');
            }
            if (!collection.isEditable) {
              return pm.alerts.error('You do not have permissions required to edit this collection.');
            }

            let folderAddEvent = {
              name: 'create_deep',
              namespace: 'folder',
              data: {
                folder: {
                  id: __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].guid(),
                  name: name,
                  collection: collection.id },

                target: {
                  model: 'folder',
                  modelId: selectedTarget.id } } };




            Object(__WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__["a" /* default */])(folderAddEvent).
            then(response => {

              if (!_.isEmpty(_.get(response, 'error'))) {
                console.error('Error in creating folder', response.error);
                return;
              }
              _.invoke(this.props, 'onCreate', _.assign({ type: 'folder' }, collection));
            }).
            catch(err => {
              console.error('Error in pipeline while creating folder', err);
            });
          }
        }
  }

  handleFilter(filter) {
    this.setState({ filter: filter });
    _.invoke(this.props, 'onFilter', filter);
  }

  handleBack(newTarget) {
    _.invoke(this.props, 'onSelect', newTarget);
  }

  getCreateRowText(selectedTarget) {
    return selectedTarget.depth === -1 ?
    '+ Create Collection ' + (this.state.filter && `"${this.state.filter}"`) :
    '+ Create Folder ' + (this.state.filter && `"${this.state.filter}"`);
  }

  getCreateRowPlaceholder(selectedTarget) {
    return selectedTarget.depth === -1 ?
    'Name your collection' :
    'Name your folder';
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
      return Object(__WEBPACK_IMPORTED_MODULE_4__utils_CollectionTreeUtil__["a" /* flattenCollection */])(collection, this.props.folders, this.props.requests);
    });
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-explorer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Explorer__["a" /* default */], {
          createPlaceholder: this.getCreateRowPlaceholder,
          createText: this.getCreateRowText,
          disableCreate: this.props.disableCreate,
          isLeaf: target => {return target.type === 'request';},
          leafIcon: this.getLeafIcon,
          ref: 'explorer',
          targets: _.flatten(collections),
          onBack: this.handleBack,
          onCreate: this.handleCreate,
          onFilter: this.handleFilter,
          onSelect: this.handleSelect })));



  }}) || _class;


CollectionExplorer.propTypes = {
  disableCreate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  initialSelection: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  onCreate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onFilter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(134);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (false) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Tabs__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_WorkspaceIcon__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WorkspaceSwitcherList__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_sync_SyncOfflineStatusContainer__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_util__ = __webpack_require__(13);
var _dec, _class;












let



WorkspaceSwitcher = (_dec = __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default()({ eventCapturingPhase: false }), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class WorkspaceSwitcher extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { syncDisabled: pm.syncManager && pm.syncManager.get('currentSyncStatus') === 'disabledSync' };

    this.handleSwitchWorkspace = this.handleSwitchWorkspace.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleEnableSync = this.handleEnableSync.bind(this);
    this.handleLearnMore = this.handleLearnMore.bind(this);
    this.handleProUpgrade = this.handleProUpgrade.bind(this);
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

  handleEnableSync() {
    this.props.onEnableSync && this.props.onEnableSync();
  }

  handleLearnMore() {
    this.props.onLearnMore && this.props.onLearnMore();
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

    return this.props.onToggle && this.props.onToggle.bind(this, !this.props.isOpen);
  }

  getSwitcherClasses() {
    return __WEBPACK_IMPORTED_MODULE_9_classnames___default()({
      'workspace-switcher__active': !this.props.disable,
      'workspace-switcher__disabled': this.props.disable });

  }

  render() {
    let isLoggedIn = this.props.isLoggedIn,
    disableButton = this.isButtonDisabled();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getSwitcherClasses(),
            onClick: this.getToggle() },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_WorkspaceIcon__["a" /* default */], {
            className: 'workspace-switcher__icon',
            style: 'primary' }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'workspace-switcher__name',
              title: this.props.activeWorkspace.name },

            _.truncate(this.props.activeWorkspace.name, { length: 40 }) || 'Loading..'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__["a" /* default */], { style: 'primary' })),


        this.props.isOpen &&
        !isLoggedIn &&
        !this.props.disable &&

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__selector' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__title' }, 'Sign in to create workspaces'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__description' }, 'Workspaces help you organize your collections and environments.'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__learn-more' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                  type: 'text',
                  onClick: this.handleLearnMore }, 'Learn more about workspaces')),




            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__primary-btn' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                  type: 'primary',
                  size: 'large',
                  onClick: this.handleSignIn }, 'Sign in to create workspaces')))),









        this.props.isOpen &&
        isLoggedIn &&
        !this.props.isSyncEnabled &&
        !this.props.disable &&

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__selector' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__title' }, 'Enable Sync to use Workspaces'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__description' }, 'You can now use workspaces in Postman to better organize all your API development. Working with multiple workspaces requires sync to be enabled.'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__learn-more' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                  type: 'text',
                  onClick: this.handleLearnMore }, 'Learn more about workspaces')),




            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__primary-btn' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                  type: 'primary',
                  size: 'large',
                  onClick: this.handleEnableSync }, 'Enable Sync')))),









        this.props.isOpen &&
        isLoggedIn &&
        !this.props.disable &&
        this.props.isSyncEnabled &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__selector' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tabs__["b" /* Tabs */], {
                activeRef: this.props.activeTab,
                className: 'workspace-switcher__tabs',
                defaultActive: 'personal',
                type: 'primary',
                onChange: this.props.onTabChange },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tabs__["a" /* Tab */], { className: 'workspace-switcher__tab', refKey: 'personal' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-switcher__tab__title' }, 'Personal')),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tabs__["a" /* Tab */], { className: 'workspace-switcher__tab', refKey: 'team' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-switcher__tab__title' }, 'Team'))),



            !this.props.disableActions &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__actions' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                  className:
                  __WEBPACK_IMPORTED_MODULE_9_classnames___default()({
                    'workspace-switcher__action workspace-switcher__action--create': true,
                    'disable-component': disableButton }),


                  type: 'text',
                  onClick: this.handleAction.bind(this, 'create') }, 'Create New'),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                  className:
                  __WEBPACK_IMPORTED_MODULE_9_classnames___default()({
                    'workspace-switcher__action workspace-switcher__action--manage': true,
                    'disable-component': disableButton }),


                  type: 'text',
                  onClick: this.handleAction.bind(this, 'manage-all') }, 'All workspaces'))),







          this.props.activeTab === 'personal' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__WorkspaceSwitcherList__["a" /* default */], {
                onSwitchWorkspace: this.handleSwitchWorkspace,
                workspaces: this.props.personalWorkspaces,
                activeWorkspace: this.props.activeWorkspace,
                onToggle: this.props.onToggle }))),





          this.props.activeTab === 'team' && !this.props.teamSyncEnabled &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state workspace-switcher__upgrade_to_pro' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__title' }, 'Start collaborating in team workspaces'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__description' }, 'Team workspaces allow you to share and work together on your API collections with your colleagues.'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__state__primary-btn' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                  type: 'primary',
                  size: 'large',
                  onClick: this.handleAction.bind(this, 'create') }, 'Create a team workspace'))),







          this.props.activeTab === 'team' && this.props.teamSyncEnabled &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__containers_sync_SyncOfflineStatusContainer__["a" /* default */], { position: 'switcher' }),


            !_.isEmpty(this.props.teamWorkspaces) &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group' + (this.props.isOffline ? ' disable-component' : '') },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group__header' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-switcher__list__group__title' }, 'Workspaces you belong to')),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__WorkspaceSwitcherList__["a" /* default */], {
                onSwitchWorkspace: this.handleSwitchWorkspace,
                workspaces: this.props.teamWorkspaces,
                activeWorkspace: this.props.activeWorkspace,
                onToggle: this.props.onToggle })),




            !_.isEmpty(this.props.joinableWorkspaces) &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group' + (this.props.isOffline ? ' disable-component' : '') },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group__header' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-switcher__list__group__title' }, 'Workspaces you can join')),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__WorkspaceSwitcherList__["a" /* default */], {
                onSwitchWorkspace: this.handleSwitchWorkspace,
                workspaces: this.props.joinableWorkspaces,
                activeWorkspace: this.props.activeWorkspace,
                onToggle: this.props.onToggle }))))));









  }}) || _class) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = WorkspaceIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '14', height: '14', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'workspace-switcher', d: 'M2 9h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm8 0h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0-8h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#FFF', fillRule: 'evenodd', xlinkHref: '#workspace-switcher' }));



function WorkspaceIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcherList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WorkspaceSwitcherListItem__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(107);
var _class;


let


WorkspaceSwitcherList = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class WorkspaceSwitcherList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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

        _.map(this.props.workspaces, workspace => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceSwitcherListItem__["a" /* default */], {
              onToggle: this.props.onToggle,
              onSelect: this.handleSwitchWorkspace,
              workspace: workspace,
              active: workspace.id === this.props.activeWorkspace.id,
              key: workspace.id }));


        })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcherListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WorkspaceActionDropdown__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_SuccessIcon__ = __webpack_require__(108);
var _class;









let


WorkspaceSwitcherListItem = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class WorkspaceSwitcherListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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

  handleDetails(workspaceId) {
    __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'view_details');
    let workspace = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('WorkspaceStore').find(workspaceId);
    if (!workspace) {
      workspace = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('SyncWorkspaceStore').find(workspaceId);
    }
    pm.mediator.trigger('openWorkspaceDetailsModal', workspace);
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

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'workspace-switcher__list__group__list-item__details',
            onClick: this.handleDetails.bind(this, this.props.workspace.id) },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__list__group__list-item__details__icon' })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__WorkspaceActionDropdown__["a" /* default */], {
          workspaceId: this.props.workspace.id,
          onAction: this.handleDropdownAction,
          onToggle: this.handleDropdownToggle })));



  }}) || _class;

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

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Infobar__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_InfobarConstants__ = __webpack_require__(136);




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

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var createReactClass = __webpack_require__(261);
var PropTypes = __webpack_require__(10);
var merge = __webpack_require__(130);
var NotificationContainer = __webpack_require__(713);
var Constants = __webpack_require__(262);
var Styles = __webpack_require__(716);

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

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(130);

var emptyObject = __webpack_require__(277);
var _invariant = __webpack_require__(249);

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

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var createReactClass = __webpack_require__(261);
var PropTypes = __webpack_require__(10);
var NotificationItem = __webpack_require__(714);
var Constants = __webpack_require__(262);

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

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var createReactClass = __webpack_require__(261);
var PropTypes = __webpack_require__(10);
var ReactDOM = __webpack_require__(17);
var Constants = __webpack_require__(262);
var Helpers = __webpack_require__(715);
var merge = __webpack_require__(130);

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

/***/ 715:
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

/***/ 716:
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

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const AppNotificationStyles = {
  Containers: {
    DefaultStyle: {
      zIndex: 110,
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

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {let HighlightHelper = class HighlightHelper {
  constructor() {
    this.matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
  }

  /**
      @private
      @method highlight
      @param source @type string , query @type string
      @usage
        Used to select the highlight the query string.
      @return
        Array of Objects with properties, text and isHighlight
        textis the breakdown text
        isHighlight (true/false) based on whether it is matched by the query text
    **/

  getHighlightSplitArray(source, query) {
    let sanitizedSearchText = query.replace(this.matchOperatorsRe, '\\$&'),
    regex,
    fragments = [],
    remaining = source;
    if (_.isEmpty(sanitizedSearchText)) {
      return [this.constructFragment(source, false)];
    }
    try {
      regex = new RegExp(sanitizedSearchText, 'i');
      while (remaining) {
        if (!regex.test(remaining)) {
          fragments.push(this.constructFragment(remaining, false));
          return fragments;
        }
        let boundaries = this.getMatchBoundaries(remaining, regex),
        nonMatch = remaining.slice(0, boundaries.first), // Capture the string that leads up to a match...
        match = remaining.slice(boundaries.first, boundaries.last); // Now, capture the matching string...
        if (nonMatch) {
          fragments.push(this.constructFragment(nonMatch, false));
        }
        if (match) {
          fragments.push(this.constructFragment(match, true));
        }

        // And if there's anything left over, recursively run this method again.
        remaining = remaining.slice(boundaries.last);
      }
      return fragments;
    }
    catch (e) {
      // Handles unterminated group errors
      console.log('RegExp Error: ', e.message);
    }
  }

  getMatchBoundaries(source, query) {
    let matches = query.exec(source);
    if (matches) {
      return {
        first: matches.index,
        last: matches.index + matches[0].length };

    }
    return false;
  }

  constructFragment(text, isHighlight) {
    return {
      text: text,
      isHighlight: isHighlight };

  }};


/* harmony default export */ __webpack_exports__["a"] = (new HighlightHelper());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {let SdkToModelTransformer = class SdkToModelTransformer {
  /*
                                                          * To convert model headers array to sdk accepted header format
                                                          * @param {RequestModel=} {request} = The request model
                                                          * @return {Array=}
                                                          *
                                                          * @example
                                                          *
                                                          * var sdkRequestHeader = ModelToSdkTransformer.getHeaders(req);
                                                          *
                                                          * [
                                                          *   {
                                                          *      key: 'header1',
                                                          *       name: 'header1',
                                                          *      value: 'headervalue1'
                                                          *      enabled: true
                                                          *   },
                                                          *   {
                                                          *      key: 'header2',
                                                          *      name: 'header2',
                                                          *      value: 'headervalue2'
                                                          *      enabled: true
                                                          *   }
                                                          * ]
                                                          */
  getHeaders(sdkRequest) {
    return _.reduce(sdkRequest.header, (accumulator, header) => {
      accumulator.push({
        name: header.key,
        key: header.key,
        value: header.value,
        enabled: !_.get(header, 'disabled', false),
        system: header.system });

      return accumulator;
    }, []);
  }

  getAuth(sdkRequest) {
    let authType = sdkRequest.auth && sdkRequest.auth.type;
    if (authType) {
      return {
        type: authType,
        data: sdkRequest.auth[authType] };

    }
    return {};
  }

  getBody(sdkRequest) {
    var body = sdkRequest.body,
    mode = !_.isEmpty(body) && body.mode,
    params = !_.isEmpty(body) && body[mode];
    if (_.isEmpty(body)) {
      return {};
    }

    if (mode === 'urlencoded' || mode === 'params') {
      params = _.map(params, param => {
        param.enabled = !_.get(param, 'disabled', false);
        param.type = 'text';
        return param;
      });
    }
    return {
      mode: mode,
      data: params };

  }};


/* harmony default export */ __webpack_exports__["a"] = (new SdkToModelTransformer());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(721);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(722);

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(426);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(427);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _reactDom2.default.createPortal !== undefined;
var createPortal = isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      parent.removeChild(_this.node);
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (!_safeHTMLElement.canUseDOM) return;
      var isOpen = newProps.isOpen;
      // Stop unnecessary renders if modal is remaining closed

      if (!this.props.isOpen && !isOpen) return;

      var currentParent = getParentElement(this.props.parentSelector);
      var newParent = getParentElement(newProps.parentSelector);

      if (newParent !== currentParent) {
        currentParent.removeChild(this.node);
        newParent.appendChild(this.node);
      }

      !isReact16 && this.renderPortal(newProps);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(newProps) {
      if (!_safeHTMLElement.canUseDOM) return;
      if (newProps.portalClassName !== this.props.portalClassName) {
        this.node.className = newProps.portalClassName;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
exports.default = Modal;

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(723);

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(724);

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(426);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(725);

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(427);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setFocusAfterRender = function (focus) {
      _this.focusAfterRender = _this.props.shouldFocusAfterRender && focus;
    };

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      classList.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus();
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen();
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
      _this.moveFromContentToOverlay = null;
    };

    _this.handleOverlayOnMouseUp = function () {
      if (_this.moveFromContentToOverlay === null) {
        _this.shouldClose = false;
      }
      if (_this.props.shouldCloseOnOverlayClick) {
        _this.shouldClose = true;
      }
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
      _this.moveFromContentToOverlay = false;
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
      _this.moveFromContentToOverlay = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.ariaAttributes = function (items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc["aria-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Focus needs to be set when mounting and already open
      if (this.props.isOpen) {
        this.setFocusAfterRender(true);
        this.open();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (false) {
        if (newProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
        if (newProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }
      // Focus only needs to be set once when the modal is being opened
      if (!this.props.isOpen && newProps.isOpen) {
        this.setFocusAfterRender(true);
        this.open();
      } else if (this.props.isOpen && !newProps.isOpen) {
        this.close();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.focusAfterRender) {
        this.focusContent();
        this.setFocusAfterRender(false);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.afterClose();
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      classList.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      return this.shouldBeClosed() ? null : _react2.default.createElement(
        "div",
        {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown,
          onMouseUp: this.handleOverlayOnMouseUp,
          "aria-modal": "true"
        },
        _react2.default.createElement(
          "div",
          _extends({
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName("content", className),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.ariaAttributes(this.props.aria || {})),
          this.props.children
        )
      );
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  }
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func
};
exports.default = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(425);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus();
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(425);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  var target;
  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prune, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  event.preventDefault();

  tabbable[x].focus();
}
module.exports = exports["default"];

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
  if (false) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";

    buffer += "<html /> (" + classes + "):\n";
    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n";
    }

    classes = document.body.className;

    // eslint-disable-next-line max-len
    buffer += "\n\ndoc.body (" + classes + "):\n";
    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
    }

    buffer += "\n";

    // eslint-disable-next-line no-console
    console.log(buffer);
  }
}

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return ExecutionEnvironment;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Explorer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ExplorerRow__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ExplorerSearch__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ExplorerResults__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ExplorerCreateRow__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_LeftSolidIcon__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
var _class;








let defaultSelection = {
  id: null,
  depth: -1 };let



Explorer = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* observer */])(_class = class Explorer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    !_.isEqual(this.props.targets, nextProps.targets) && this.setNextTargets(nextProps.targets, this.state.selected);
  }

  getSelectionParent() {
    // Find the parent of the currently selected item
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

  getNextTargets(currentTargets, selectedTarget) {
    let selectedTargetIndex = _.findIndex(currentTargets, ['id', selectedTarget.id]);

    if (selectedTargetIndex === -1) {
      this.setState({ selected: defaultSelection });
      return currentTargets;
    }

    let endIndex = _.findIndex(currentTargets, n => {return n.depth <= currentTargets[selectedTargetIndex].depth;}, selectedTargetIndex + 1);
    if (endIndex === -1) {
      endIndex = _.size(currentTargets);
    }

    return _.slice(currentTargets, selectedTargetIndex + 1, endIndex + 1);
  }

  setNextTargets(currentTargets, selectedTarget = defaultSelection) {
    let nextTargets = this.getNextTargets(currentTargets, selectedTarget);

    this.setState({ targets: nextTargets });
  }

  selectItem(itemId) {
    let item = _.find(this.state.targets, ['id', itemId]);
    item && this.handleSelect(item);
  }

  handleSelect(target, isLeaf = false) {
    if (this.props.disableLeaves && isLeaf) {
      return;
    }

    let nextTargets = this.getNextTargets(this.state.targets, target);
    this.setState({
      selected: target,
      filter: '',
      targets: nextTargets });

    this.handleCancelCreate && this.handleCancelCreate();
    this.props.onSelect && this.props.onSelect(target);
  }

  handleBack() {
    let selected = this.getSelectionParent(),
    nextTargets = this.getNextTargets(this.props.targets, selected);

    this.setState({
      selected,
      targets: nextTargets });

    this.handleCancelCreate && this.handleCancelCreate();
    _.invoke(this, 'props.onBack', selected);
  }

  handleSearch(filter) {
    this.setState({ filter }, () => {
      this.setNextTargets(this.state.targets, this.state.selected);
      this.props.onFilter && this.props.onFilter(filter);
    });
  }

  handleStartCreate() {
    if (!_.isEmpty(this.state.filter)) {
      this.handleCreate(this.state.filter);
      return;
    }

    this.setState({ isCreating: true });
  }

  handleCancelCreate() {
    this.setState({ isCreating: false });
  }

  handleCreate(name) {
    this.setState({ isCreating: false });
    _.invoke(this.props, 'onCreate', name, this.state.selected);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'explorer__header-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ExplorerSearch__["a" /* default */], {
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
                this.state.selected.name)),




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



        _.isEmpty(this.state.filter) &&
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
          currentTargets: this.state.targets,
          allTargets: this.props.targets,
          selected: this.state.selected,
          isLeaf: this.props.isLeaf,
          onSelect: this.handleSelect })));




  }}) || _class;


Explorer.propTypes = {
  createPlaceholder: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  createText: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func, // The callback function that will be called to render the first row in every view
  disableCreate: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  disableLeaves: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool, // Indicates if leaves will be shown
  hideLeaves: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  hideNodes: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func, // The callback function that will be called so you can hide specific nodes if needed
  isLeaf: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func, // The callback function that will be called to check if a node is a leaf
  leafIcon: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func, // The callback called to render the leaf icon
  onBack: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onCreate: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onFilter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  targets: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.array };


Explorer.defaultProps = { disableLeaves: false };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorerRow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_CollectionIcon__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_RightSolidIcon__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collections_CollectionMetaIcons__ = __webpack_require__(674);





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

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorerSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Inputs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(10);
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
          inputStyle: 'search',
          placeholder: 'Search for a collection or folder',
          query: this.props.filter,
          onChange: this.props.onSearch })));



  }};


ExplorerSearch.propTypes = {
  filter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  onSearch: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired };

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorerResults; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_SearchHighlighter__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_CollectionTreeUtil__ = __webpack_require__(428);




let

ExplorerResults = class ExplorerResults extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { filteredItems: [] };

    this.filterTargets = this.filterTargets.bind(this);
    this.getPath = this.getPath.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.setFilteredItems = this.setFilteredItems.bind(this);
    this.setFilteredItemsDebounced = _.debounce(this.setFilteredItems, 300, {
      leading: true,
      trailing: true });

  }

  componentWillReceiveProps(nextProps) {
    this.setFilteredItemsDebounced(nextProps);
  }

  getHighlightClasses(text) {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ 'highlight': text.isHighlight });
  }

  filterTargets(targets = this.props.currentTargets, filter = this.props.filter) {
    return _.filter(targets, target => {
      if (_.isFunction(this.props.isLeaf)) {
        return !this.props.isLeaf(target) && _.includes(_.toLower(target.name), _.toLower(filter));
      }
      return _.includes(_.toLower(target.name), _.toLower(filter));
    });
  }

  setFilteredItems(nextProps) {
    this.setState({ filteredItems: this.filterTargets(nextProps.currentTargets, nextProps.filter) });
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

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorerCreateRow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Inputs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_SuccessIcon__ = __webpack_require__(108);



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

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissingCurrentWorkspaceModalContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_MissingCurrentWorkspaceModal__ = __webpack_require__(734);



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

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Modals__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(31);


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

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(41);
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

},[1365]);