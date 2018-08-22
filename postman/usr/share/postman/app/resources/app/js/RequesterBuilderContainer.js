webpackJsonp([9],{

/***/ 1907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const REQUEST_BODY_TYPE_FORM_DATA = 'params';
/* harmony export (immutable) */ __webpack_exports__["b"] = REQUEST_BODY_TYPE_FORM_DATA;

const REQUEST_BODY_TYPE_FORM_URLENCODED = 'urlencoded';
/* harmony export (immutable) */ __webpack_exports__["c"] = REQUEST_BODY_TYPE_FORM_URLENCODED;

const REQUEST_BODY_TYPE_RAW = 'raw';
/* harmony export (immutable) */ __webpack_exports__["d"] = REQUEST_BODY_TYPE_RAW;

const REQUEST_BODY_TYPE_BINARY = 'binary';
/* harmony export (immutable) */ __webpack_exports__["a"] = REQUEST_BODY_TYPE_BINARY;


/***/ }),

/***/ 1908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const REQUEST_BODY_RAW_LANGUAGE_HTML = 'text-html';
/* harmony export (immutable) */ __webpack_exports__["a"] = REQUEST_BODY_RAW_LANGUAGE_HTML;

const REQUEST_BODY_RAW_LANGUAGE_TEXT = 'text';
/* harmony export (immutable) */ __webpack_exports__["d"] = REQUEST_BODY_RAW_LANGUAGE_TEXT;

const REQUEST_BODY_RAW_LANGUAGE_TEXT_PLAIN = 'text-plain';
/* harmony export (immutable) */ __webpack_exports__["e"] = REQUEST_BODY_RAW_LANGUAGE_TEXT_PLAIN;

const REQUEST_BODY_RAW_LANGUAGE_JSON = 'application-json';
/* harmony export (immutable) */ __webpack_exports__["c"] = REQUEST_BODY_RAW_LANGUAGE_JSON;

const REQUEST_BODY_RAW_LANGUAGE_JAVASCRIPT = 'application-javascript';
/* harmony export (immutable) */ __webpack_exports__["b"] = REQUEST_BODY_RAW_LANGUAGE_JAVASCRIPT;

const REQUEST_BODY_RAW_LANGUAGE_XML_TEXT = 'text-xml';
/* harmony export (immutable) */ __webpack_exports__["g"] = REQUEST_BODY_RAW_LANGUAGE_XML_TEXT;

const REQUEST_BODY_RAW_LANGUAGE_XML_APPLICATION = 'application-xml';
/* harmony export (immutable) */ __webpack_exports__["f"] = REQUEST_BODY_RAW_LANGUAGE_XML_APPLICATION;


/***/ }),

/***/ 1914:
/***/ (function(module, exports, __webpack_require__) {

var examples = __webpack_require__(2507),

    /**
     * Returns a clone of an example.
     *
     * @private
     *
     * @param {Example~definition} example
     *
     * @returns {Example}
     */
    cloneExample = function (example) {
        return {
            name: example.name,
            description: example.description,
            code: example.code
        };
    },

    validEventTypes = ['prerequest', 'test'];

module.exports = {
    /**
     * Returns a list of examples that can be used in a given event type in Postman Collections.
     *
     * @param {String} eventType Event type to filter the examples
     *
     * @returns {Array<Example>}
     */
    getExamples: function (eventType) {
        if (!eventType || !validEventTypes.includes(eventType)) {
            throw new Error('Invalid event type');
        }

        return examples.reduce(function (prScripts, example) {
            if (example.validity && example.validity.includes(eventType)) {
                prScripts.push(cloneExample(example));
            }

            return prScripts;
        }, []);
    }
};

/**
 * Represents a code example that can be used in any event in a collection run(`prerequest`, `test`) in Postman.
 *
 * @typedef {Object} Example
 *
 * @property {String} name A human readable name for the example
 * @property {String} description A description for the example
 * @property {String} code Example snippet
 */

/**
 * Storage format for examples
 *
 * @typedef {Object} Example~definition
 *
 * @property {String} name A human readable name for the example
 * @property {String} description A description for the example
 * @property {String} code Example snippet
 * @property {Array<String>} validity Defines if the snippet can be used only in test scripts.
 */


/***/ }),

/***/ 1915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnippetsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SnippetsItem__ = __webpack_require__(2508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_RightSolidIcon__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_LeftSolidIcon__ = __webpack_require__(256);
var _class;





let


SnippetsList = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class SnippetsList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCollapseToggle = this.handleCollapseToggle.bind(this);
  }

  handleSelect(snippetId) {
    this.props.onSelect && this.props.onSelect(snippetId);
  }

  handleCollapseToggle() {
    this.props.onSnippetCollapse && this.props.onSnippetCollapse();
  }

  render() {
    if (this.props.isCollapsed) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
            className: 'snippet-toggle-button',
            onClick: this.handleCollapseToggle },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_LeftSolidIcon__["a" /* default */], { className: 'snippet-toggle-icon snippet-toggle-icon--expand' })));


    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'snippet-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'snippet-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'snippet-header__left' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'snippet-header__help' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'snippet-header__help__text' },
                this.props.help.text),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                  type: 'text',
                  className: 'snippet-header__help__link',
                  onClick: this.props.help.action },

                this.props.help.link)),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'snippet-header__title' }, 'SNIPPETS')),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'snippet-header__right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                className: 'snippet-toggle-button',
                onClick: this.handleCollapseToggle },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_RightSolidIcon__["a" /* default */], { className: 'snippet-toggle-icon snippet-toggle-icon--collapse' })))),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'snippet-items' },

          _.map(this.props.snippets, snippet => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SnippetsItem__["a" /* default */], {
                key: snippet.id,
                snippet: snippet,
                onSelect: this.handleSelect }));


          }))));




  }}) || _class;


SnippetsList.defaultProps = { snippets: [] };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json_bigint__ = __webpack_require__(2520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json_bigint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_json_bigint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(13);

let

ResponseHelper = class ResponseHelper {
  formatJSON(response) {
    if (_.isEmpty(response)) {
      return response;
    }
    try {
      return this._formatJSON(response); // response as-is
    }
    catch (e) {
      // if simple parse fails, try jsonp
      let jsonp_array = response.trim().match(/^([a-zA-Z_$][0-9a-zA-Z_$\.]*\()([\s\S]*)(\);?)$/);
      if (jsonp_array && jsonp_array.length === 4) {
        return this._formatJSON(jsonp_array[2], e); // assume jsonp
      } else
      {
        try {
          return this._formatJSON(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].cleanJSON(response), e); // assume xss-safe object
        }
        catch (e) {
          return this._formatJSON(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].cleanJSONArray(response), e); // assume xss-safe array
        }
      }
    }
  }

  _formatJSON(response, oldError) {
    try {
      return __WEBPACK_IMPORTED_MODULE_0_json_bigint___default.a.stringify(__WEBPACK_IMPORTED_MODULE_0_json_bigint___default.a.parse(response), null, 4);
    }
    catch (e) {
      if (typeof oldError === 'undefined') {
        throw e;
      } else
      {
        throw oldError;
      }
    }
  }};



/* harmony default export */ __webpack_exports__["a"] = (new ResponseHelper());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1917:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! bignumber.js v4.1.0 https://github.com/MikeMcl/bignumber.js/LICENCE */

;(function (globalObj) {
    'use strict';

    /*
      bignumber.js v4.1.0
      A JavaScript library for arbitrary-precision arithmetic.
      https://github.com/MikeMcl/bignumber.js
      Copyright (c) 2017 Michael Mclaughlin <M8ch88l@gmail.com>
      MIT Expat Licence
    */


    var BigNumber,
        isNumeric = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        mathceil = Math.ceil,
        mathfloor = Math.floor,
        notBool = ' not a boolean or binary digit',
        roundingMode = 'rounding mode',
        tooManyDigits = 'number type has more than 15 significant digits',
        ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_',
        BASE = 1e14,
        LOG_BASE = 14,
        MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
        // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
        POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
        SQRT_BASE = 1e7,

        /*
         * The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
         * the arguments to toExponential, toFixed, toFormat, and toPrecision, beyond which an
         * exception is thrown (if ERRORS is true).
         */
        MAX = 1E9;                                   // 0 to MAX_INT32


    /*
     * Create and return a BigNumber constructor.
     */
    function constructorFactory(config) {
        var div, parseNumeric,

            // id tracks the caller function, so its name can be included in error messages.
            id = 0,
            P = BigNumber.prototype,
            ONE = new BigNumber(1),


            /********************************* EDITABLE DEFAULTS **********************************/


            /*
             * The default values below must be integers within the inclusive ranges stated.
             * The values can also be changed at run-time using BigNumber.config.
             */

            // The maximum number of decimal places for operations involving division.
            DECIMAL_PLACES = 20,                     // 0 to MAX

            /*
             * The rounding mode used when rounding to the above decimal places, and when using
             * toExponential, toFixed, toFormat and toPrecision, and round (default value).
             * UP         0 Away from zero.
             * DOWN       1 Towards zero.
             * CEIL       2 Towards +Infinity.
             * FLOOR      3 Towards -Infinity.
             * HALF_UP    4 Towards nearest neighbour. If equidistant, up.
             * HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
             * HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
             * HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
             * HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
             */
            ROUNDING_MODE = 4,                       // 0 to 8

            // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

            // The exponent value at and beneath which toString returns exponential notation.
            // Number type: -7
            TO_EXP_NEG = -7,                         // 0 to -MAX

            // The exponent value at and above which toString returns exponential notation.
            // Number type: 21
            TO_EXP_POS = 21,                         // 0 to MAX

            // RANGE : [MIN_EXP, MAX_EXP]

            // The minimum exponent value, beneath which underflow to zero occurs.
            // Number type: -324  (5e-324)
            MIN_EXP = -1e7,                          // -1 to -MAX

            // The maximum exponent value, above which overflow to Infinity occurs.
            // Number type:  308  (1.7976931348623157e+308)
            // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
            MAX_EXP = 1e7,                           // 1 to MAX

            // Whether BigNumber Errors are ever thrown.
            ERRORS = true,                           // true or false

            // Change to intValidatorNoErrors if ERRORS is false.
            isValidInt = intValidatorWithErrors,     // intValidatorWithErrors/intValidatorNoErrors

            // Whether to use cryptographically-secure random number generation, if available.
            CRYPTO = false,                          // true or false

            /*
             * The modulo mode used when calculating the modulus: a mod n.
             * The quotient (q = a / n) is calculated according to the corresponding rounding mode.
             * The remainder (r) is calculated as: r = a - n * q.
             *
             * UP        0 The remainder is positive if the dividend is negative, else is negative.
             * DOWN      1 The remainder has the same sign as the dividend.
             *             This modulo mode is commonly known as 'truncated division' and is
             *             equivalent to (a % n) in JavaScript.
             * FLOOR     3 The remainder has the same sign as the divisor (Python %).
             * HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
             * EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
             *             The remainder is always positive.
             *
             * The truncated division, floored division, Euclidian division and IEEE 754 remainder
             * modes are commonly used for the modulus operation.
             * Although the other rounding modes can also be used, they may not give useful results.
             */
            MODULO_MODE = 1,                         // 0 to 9

            // The maximum number of significant digits of the result of the toPower operation.
            // If POW_PRECISION is 0, there will be unlimited significant digits.
            POW_PRECISION = 0,                       // 0 to MAX

            // The format specification used by the BigNumber.prototype.toFormat method.
            FORMAT = {
                decimalSeparator: '.',
                groupSeparator: ',',
                groupSize: 3,
                secondaryGroupSize: 0,
                fractionGroupSeparator: '\xA0',      // non-breaking space
                fractionGroupSize: 0
            };


        /******************************************************************************************/


        // CONSTRUCTOR


        /*
         * The BigNumber constructor and exported function.
         * Create and return a new instance of a BigNumber object.
         *
         * n {number|string|BigNumber} A numeric value.
         * [b] {number} The base of n. Integer, 2 to 64 inclusive.
         */
        function BigNumber( n, b ) {
            var c, e, i, num, len, str,
                x = this;

            // Enable constructor usage without new.
            if ( !( x instanceof BigNumber ) ) {

                // 'BigNumber() constructor call without new: {n}'
                if (ERRORS) raise( 26, 'constructor call without new', n );
                return new BigNumber( n, b );
            }

            // 'new BigNumber() base not an integer: {b}'
            // 'new BigNumber() base out of range: {b}'
            if ( b == null || !isValidInt( b, 2, 64, id, 'base' ) ) {

                // Duplicate.
                if ( n instanceof BigNumber ) {
                    x.s = n.s;
                    x.e = n.e;
                    x.c = ( n = n.c ) ? n.slice() : n;
                    id = 0;
                    return;
                }

                if ( ( num = typeof n == 'number' ) && n * 0 == 0 ) {
                    x.s = 1 / n < 0 ? ( n = -n, -1 ) : 1;

                    // Fast path for integers.
                    if ( n === ~~n ) {
                        for ( e = 0, i = n; i >= 10; i /= 10, e++ );
                        x.e = e;
                        x.c = [n];
                        id = 0;
                        return;
                    }

                    str = n + '';
                } else {
                    if ( !isNumeric.test( str = n + '' ) ) return parseNumeric( x, str, num );
                    x.s = str.charCodeAt(0) === 45 ? ( str = str.slice(1), -1 ) : 1;
                }
            } else {
                b = b | 0;
                str = n + '';

                // Ensure return value is rounded to DECIMAL_PLACES as with other bases.
                // Allow exponential notation to be used with base 10 argument.
                if ( b == 10 ) {
                    x = new BigNumber( n instanceof BigNumber ? n : str );
                    return round( x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE );
                }

                // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                // Any number in exponential form will fail due to the [Ee][+-].
                if ( ( num = typeof n == 'number' ) && n * 0 != 0 ||
                  !( new RegExp( '^-?' + ( c = '[' + ALPHABET.slice( 0, b ) + ']+' ) +
                    '(?:\\.' + c + ')?$',b < 37 ? 'i' : '' ) ).test(str) ) {
                    return parseNumeric( x, str, num, b );
                }

                if (num) {
                    x.s = 1 / n < 0 ? ( str = str.slice(1), -1 ) : 1;

                    if ( ERRORS && str.replace( /^0\.0*|\./, '' ).length > 15 ) {

                        // 'new BigNumber() number type has more than 15 significant digits: {n}'
                        raise( id, tooManyDigits, n );
                    }

                    // Prevent later check for length on converted number.
                    num = false;
                } else {
                    x.s = str.charCodeAt(0) === 45 ? ( str = str.slice(1), -1 ) : 1;
                }

                str = convertBase( str, 10, b, x.s );
            }

            // Decimal point?
            if ( ( e = str.indexOf('.') ) > -1 ) str = str.replace( '.', '' );

            // Exponential form?
            if ( ( i = str.search( /e/i ) ) > 0 ) {

                // Determine exponent.
                if ( e < 0 ) e = i;
                e += +str.slice( i + 1 );
                str = str.substring( 0, i );
            } else if ( e < 0 ) {

                // Integer.
                e = str.length;
            }

            // Determine leading zeros.
            for ( i = 0; str.charCodeAt(i) === 48; i++ );

            // Determine trailing zeros.
            for ( len = str.length; str.charCodeAt(--len) === 48; );
            str = str.slice( i, len + 1 );

            if (str) {
                len = str.length;

                // Disallow numbers with over 15 significant digits if number type.
                // 'new BigNumber() number type has more than 15 significant digits: {n}'
                if ( num && ERRORS && len > 15 && ( n > MAX_SAFE_INTEGER || n !== mathfloor(n) ) ) {
                    raise( id, tooManyDigits, x.s * n );
                }

                e = e - i - 1;

                 // Overflow?
                if ( e > MAX_EXP ) {

                    // Infinity.
                    x.c = x.e = null;

                // Underflow?
                } else if ( e < MIN_EXP ) {

                    // Zero.
                    x.c = [ x.e = 0 ];
                } else {
                    x.e = e;
                    x.c = [];

                    // Transform base

                    // e is the base 10 exponent.
                    // i is where to slice str to get the first element of the coefficient array.
                    i = ( e + 1 ) % LOG_BASE;
                    if ( e < 0 ) i += LOG_BASE;

                    if ( i < len ) {
                        if (i) x.c.push( +str.slice( 0, i ) );

                        for ( len -= LOG_BASE; i < len; ) {
                            x.c.push( +str.slice( i, i += LOG_BASE ) );
                        }

                        str = str.slice(i);
                        i = LOG_BASE - str.length;
                    } else {
                        i -= len;
                    }

                    for ( ; i--; str += '0' );
                    x.c.push( +str );
                }
            } else {

                // Zero.
                x.c = [ x.e = 0 ];
            }

            id = 0;
        }


        // CONSTRUCTOR PROPERTIES


        BigNumber.another = constructorFactory;

        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;


        /*
         * Configure infrequently-changing library-wide settings.
         *
         * Accept an object or an argument list, with one or many of the following properties or
         * parameters respectively:
         *
         *   DECIMAL_PLACES  {number}  Integer, 0 to MAX inclusive
         *   ROUNDING_MODE   {number}  Integer, 0 to 8 inclusive
         *   EXPONENTIAL_AT  {number|number[]}  Integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to 0 incl., 0 to MAX incl.]
         *   RANGE           {number|number[]}  Non-zero integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to -1 incl., integer 1 to MAX incl.]
         *   ERRORS          {boolean|number}   true, false, 1 or 0
         *   CRYPTO          {boolean|number}   true, false, 1 or 0
         *   MODULO_MODE     {number}           0 to 9 inclusive
         *   POW_PRECISION   {number}           0 to MAX inclusive
         *   FORMAT          {object}           See BigNumber.prototype.toFormat
         *      decimalSeparator       {string}
         *      groupSeparator         {string}
         *      groupSize              {number}
         *      secondaryGroupSize     {number}
         *      fractionGroupSeparator {string}
         *      fractionGroupSize      {number}
         *
         * (The values assigned to the above FORMAT object properties are not checked for validity.)
         *
         * E.g.
         * BigNumber.config(20, 4) is equivalent to
         * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
         *
         * Ignore properties/parameters set to null or undefined.
         * Return an object with the properties current values.
         */
        BigNumber.config = BigNumber.set = function () {
            var v, p,
                i = 0,
                r = {},
                a = arguments,
                o = a[0],
                has = o && typeof o == 'object'
                  ? function () { if ( o.hasOwnProperty(p) ) return ( v = o[p] ) != null; }
                  : function () { if ( a.length > i ) return ( v = a[i++] ) != null; };

            // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
            // 'config() DECIMAL_PLACES not an integer: {v}'
            // 'config() DECIMAL_PLACES out of range: {v}'
            if ( has( p = 'DECIMAL_PLACES' ) && isValidInt( v, 0, MAX, 2, p ) ) {
                DECIMAL_PLACES = v | 0;
            }
            r[p] = DECIMAL_PLACES;

            // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
            // 'config() ROUNDING_MODE not an integer: {v}'
            // 'config() ROUNDING_MODE out of range: {v}'
            if ( has( p = 'ROUNDING_MODE' ) && isValidInt( v, 0, 8, 2, p ) ) {
                ROUNDING_MODE = v | 0;
            }
            r[p] = ROUNDING_MODE;

            // EXPONENTIAL_AT {number|number[]}
            // Integer, -MAX to MAX inclusive or [integer -MAX to 0 inclusive, 0 to MAX inclusive].
            // 'config() EXPONENTIAL_AT not an integer: {v}'
            // 'config() EXPONENTIAL_AT out of range: {v}'
            if ( has( p = 'EXPONENTIAL_AT' ) ) {

                if ( isArray(v) ) {
                    if ( isValidInt( v[0], -MAX, 0, 2, p ) && isValidInt( v[1], 0, MAX, 2, p ) ) {
                        TO_EXP_NEG = v[0] | 0;
                        TO_EXP_POS = v[1] | 0;
                    }
                } else if ( isValidInt( v, -MAX, MAX, 2, p ) ) {
                    TO_EXP_NEG = -( TO_EXP_POS = ( v < 0 ? -v : v ) | 0 );
                }
            }
            r[p] = [ TO_EXP_NEG, TO_EXP_POS ];

            // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
            // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
            // 'config() RANGE not an integer: {v}'
            // 'config() RANGE cannot be zero: {v}'
            // 'config() RANGE out of range: {v}'
            if ( has( p = 'RANGE' ) ) {

                if ( isArray(v) ) {
                    if ( isValidInt( v[0], -MAX, -1, 2, p ) && isValidInt( v[1], 1, MAX, 2, p ) ) {
                        MIN_EXP = v[0] | 0;
                        MAX_EXP = v[1] | 0;
                    }
                } else if ( isValidInt( v, -MAX, MAX, 2, p ) ) {
                    if ( v | 0 ) MIN_EXP = -( MAX_EXP = ( v < 0 ? -v : v ) | 0 );
                    else if (ERRORS) raise( 2, p + ' cannot be zero', v );
                }
            }
            r[p] = [ MIN_EXP, MAX_EXP ];

            // ERRORS {boolean|number} true, false, 1 or 0.
            // 'config() ERRORS not a boolean or binary digit: {v}'
            if ( has( p = 'ERRORS' ) ) {

                if ( v === !!v || v === 1 || v === 0 ) {
                    id = 0;
                    isValidInt = ( ERRORS = !!v ) ? intValidatorWithErrors : intValidatorNoErrors;
                } else if (ERRORS) {
                    raise( 2, p + notBool, v );
                }
            }
            r[p] = ERRORS;

            // CRYPTO {boolean|number} true, false, 1 or 0.
            // 'config() CRYPTO not a boolean or binary digit: {v}'
            // 'config() crypto unavailable: {crypto}'
            if ( has( p = 'CRYPTO' ) ) {

                if ( v === true || v === false || v === 1 || v === 0 ) {
                    if (v) {
                        v = typeof crypto == 'undefined';
                        if ( !v && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                            CRYPTO = true;
                        } else if (ERRORS) {
                            raise( 2, 'crypto unavailable', v ? void 0 : crypto );
                        } else {
                            CRYPTO = false;
                        }
                    } else {
                        CRYPTO = false;
                    }
                } else if (ERRORS) {
                    raise( 2, p + notBool, v );
                }
            }
            r[p] = CRYPTO;

            // MODULO_MODE {number} Integer, 0 to 9 inclusive.
            // 'config() MODULO_MODE not an integer: {v}'
            // 'config() MODULO_MODE out of range: {v}'
            if ( has( p = 'MODULO_MODE' ) && isValidInt( v, 0, 9, 2, p ) ) {
                MODULO_MODE = v | 0;
            }
            r[p] = MODULO_MODE;

            // POW_PRECISION {number} Integer, 0 to MAX inclusive.
            // 'config() POW_PRECISION not an integer: {v}'
            // 'config() POW_PRECISION out of range: {v}'
            if ( has( p = 'POW_PRECISION' ) && isValidInt( v, 0, MAX, 2, p ) ) {
                POW_PRECISION = v | 0;
            }
            r[p] = POW_PRECISION;

            // FORMAT {object}
            // 'config() FORMAT not an object: {v}'
            if ( has( p = 'FORMAT' ) ) {

                if ( typeof v == 'object' ) {
                    FORMAT = v;
                } else if (ERRORS) {
                    raise( 2, p + ' not an object', v );
                }
            }
            r[p] = FORMAT;

            return r;
        };


        /*
         * Return a new BigNumber whose value is the maximum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.max = function () { return maxOrMin( arguments, P.lt ); };


        /*
         * Return a new BigNumber whose value is the minimum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.min = function () { return maxOrMin( arguments, P.gt ); };


        /*
         * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
         * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
         * zeros are produced).
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         *
         * 'random() decimal places not an integer: {dp}'
         * 'random() decimal places out of range: {dp}'
         * 'random() crypto unavailable: {crypto}'
         */
        BigNumber.random = (function () {
            var pow2_53 = 0x20000000000000;

            // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
            // Check if Math.random() produces more than 32 bits of randomness.
            // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
            // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
            var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
              ? function () { return mathfloor( Math.random() * pow2_53 ); }
              : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
                  (Math.random() * 0x800000 | 0); };

            return function (dp) {
                var a, b, e, k, v,
                    i = 0,
                    c = [],
                    rand = new BigNumber(ONE);

                dp = dp == null || !isValidInt( dp, 0, MAX, 14 ) ? DECIMAL_PLACES : dp | 0;
                k = mathceil( dp / LOG_BASE );

                if (CRYPTO) {

                    // Browsers supporting crypto.getRandomValues.
                    if (crypto.getRandomValues) {

                        a = crypto.getRandomValues( new Uint32Array( k *= 2 ) );

                        for ( ; i < k; ) {

                            // 53 bits:
                            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                            //                                     11111 11111111 11111111
                            // 0x20000 is 2^21.
                            v = a[i] * 0x20000 + (a[i + 1] >>> 11);

                            // Rejection sampling:
                            // 0 <= v < 9007199254740992
                            // Probability that v >= 9e15, is
                            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                            if ( v >= 9e15 ) {
                                b = crypto.getRandomValues( new Uint32Array(2) );
                                a[i] = b[0];
                                a[i + 1] = b[1];
                            } else {

                                // 0 <= v <= 8999999999999999
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push( v % 1e14 );
                                i += 2;
                            }
                        }
                        i = k / 2;

                    // Node.js supporting crypto.randomBytes.
                    } else if (crypto.randomBytes) {

                        // buffer
                        a = crypto.randomBytes( k *= 7 );

                        for ( ; i < k; ) {

                            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                            // 0x100000000 is 2^32, 0x1000000 is 2^24
                            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                            // 0 <= v < 9007199254740992
                            v = ( ( a[i] & 31 ) * 0x1000000000000 ) + ( a[i + 1] * 0x10000000000 ) +
                                  ( a[i + 2] * 0x100000000 ) + ( a[i + 3] * 0x1000000 ) +
                                  ( a[i + 4] << 16 ) + ( a[i + 5] << 8 ) + a[i + 6];

                            if ( v >= 9e15 ) {
                                crypto.randomBytes(7).copy( a, i );
                            } else {

                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push( v % 1e14 );
                                i += 7;
                            }
                        }
                        i = k / 7;
                    } else {
                        CRYPTO = false;
                        if (ERRORS) raise( 14, 'crypto unavailable', crypto );
                    }
                }

                // Use Math.random.
                if (!CRYPTO) {

                    for ( ; i < k; ) {
                        v = random53bitInt();
                        if ( v < 9e15 ) c[i++] = v % 1e14;
                    }
                }

                k = c[--i];
                dp %= LOG_BASE;

                // Convert trailing digits to zeros according to dp.
                if ( k && dp ) {
                    v = POWS_TEN[LOG_BASE - dp];
                    c[i] = mathfloor( k / v ) * v;
                }

                // Remove trailing elements which are zero.
                for ( ; c[i] === 0; c.pop(), i-- );

                // Zero?
                if ( i < 0 ) {
                    c = [ e = 0 ];
                } else {

                    // Remove leading elements which are zero and adjust exponent accordingly.
                    for ( e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

                    // Count the digits of the first element of c to determine leading zeros, and...
                    for ( i = 1, v = c[0]; v >= 10; v /= 10, i++);

                    // adjust the exponent accordingly.
                    if ( i < LOG_BASE ) e -= LOG_BASE - i;
                }

                rand.e = e;
                rand.c = c;
                return rand;
            };
        })();


        // PRIVATE FUNCTIONS


        // Convert a numeric string of baseIn to a numeric string of baseOut.
        function convertBase( str, baseOut, baseIn, sign ) {
            var d, e, k, r, x, xc, y,
                i = str.indexOf( '.' ),
                dp = DECIMAL_PLACES,
                rm = ROUNDING_MODE;

            if ( baseIn < 37 ) str = str.toLowerCase();

            // Non-integer.
            if ( i >= 0 ) {
                k = POW_PRECISION;

                // Unlimited precision.
                POW_PRECISION = 0;
                str = str.replace( '.', '' );
                y = new BigNumber(baseIn);
                x = y.pow( str.length - i );
                POW_PRECISION = k;

                // Convert str as if an integer, then restore the fraction part by dividing the
                // result by its base raised to a power.
                y.c = toBaseOut( toFixedPoint( coeffToString( x.c ), x.e ), 10, baseOut );
                y.e = y.c.length;
            }

            // Convert the number as integer.
            xc = toBaseOut( str, baseIn, baseOut );
            e = k = xc.length;

            // Remove trailing zeros.
            for ( ; xc[--k] == 0; xc.pop() );
            if ( !xc[0] ) return '0';

            if ( i < 0 ) {
                --e;
            } else {
                x.c = xc;
                x.e = e;

                // sign is needed for correct rounding.
                x.s = sign;
                x = div( x, y, dp, rm, baseOut );
                xc = x.c;
                r = x.r;
                e = x.e;
            }

            d = e + dp + 1;

            // The rounding digit, i.e. the digit to the right of the digit that may be rounded up.
            i = xc[d];
            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;

            r = rm < 4 ? ( i != null || r ) && ( rm == 0 || rm == ( x.s < 0 ? 3 : 2 ) )
                       : i > k || i == k &&( rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
                         rm == ( x.s < 0 ? 8 : 7 ) );

            if ( d < 1 || !xc[0] ) {

                // 1^-dp or 0.
                str = r ? toFixedPoint( '1', -dp ) : '0';
            } else {
                xc.length = d;

                if (r) {

                    // Rounding up may mean the previous digit has to be rounded up and so on.
                    for ( --baseOut; ++xc[--d] > baseOut; ) {
                        xc[d] = 0;

                        if ( !d ) {
                            ++e;
                            xc = [1].concat(xc);
                        }
                    }
                }

                // Determine trailing zeros.
                for ( k = xc.length; !xc[--k]; );

                // E.g. [4, 11, 15] becomes 4bf.
                for ( i = 0, str = ''; i <= k; str += ALPHABET.charAt( xc[i++] ) );
                str = toFixedPoint( str, e );
            }

            // The caller will add the sign.
            return str;
        }


        // Perform division in the specified base. Called by div and convertBase.
        div = (function () {

            // Assume non-zero x and k.
            function multiply( x, k, base ) {
                var m, temp, xlo, xhi,
                    carry = 0,
                    i = x.length,
                    klo = k % SQRT_BASE,
                    khi = k / SQRT_BASE | 0;

                for ( x = x.slice(); i--; ) {
                    xlo = x[i] % SQRT_BASE;
                    xhi = x[i] / SQRT_BASE | 0;
                    m = khi * xlo + xhi * klo;
                    temp = klo * xlo + ( ( m % SQRT_BASE ) * SQRT_BASE ) + carry;
                    carry = ( temp / base | 0 ) + ( m / SQRT_BASE | 0 ) + khi * xhi;
                    x[i] = temp % base;
                }

                if (carry) x = [carry].concat(x);

                return x;
            }

            function compare( a, b, aL, bL ) {
                var i, cmp;

                if ( aL != bL ) {
                    cmp = aL > bL ? 1 : -1;
                } else {

                    for ( i = cmp = 0; i < aL; i++ ) {

                        if ( a[i] != b[i] ) {
                            cmp = a[i] > b[i] ? 1 : -1;
                            break;
                        }
                    }
                }
                return cmp;
            }

            function subtract( a, b, aL, base ) {
                var i = 0;

                // Subtract b from a.
                for ( ; aL--; ) {
                    a[aL] -= i;
                    i = a[aL] < b[aL] ? 1 : 0;
                    a[aL] = i * base + a[aL] - b[aL];
                }

                // Remove leading zeros.
                for ( ; !a[0] && a.length > 1; a.splice(0, 1) );
            }

            // x: dividend, y: divisor.
            return function ( x, y, dp, rm, base ) {
                var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
                    yL, yz,
                    s = x.s == y.s ? 1 : -1,
                    xc = x.c,
                    yc = y.c;

                // Either NaN, Infinity or 0?
                if ( !xc || !xc[0] || !yc || !yc[0] ) {

                    return new BigNumber(

                      // Return NaN if either NaN, or both Infinity or 0.
                      !x.s || !y.s || ( xc ? yc && xc[0] == yc[0] : !yc ) ? NaN :

                        // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                        xc && xc[0] == 0 || !yc ? s * 0 : s / 0
                    );
                }

                q = new BigNumber(s);
                qc = q.c = [];
                e = x.e - y.e;
                s = dp + e + 1;

                if ( !base ) {
                    base = BASE;
                    e = bitFloor( x.e / LOG_BASE ) - bitFloor( y.e / LOG_BASE );
                    s = s / LOG_BASE | 0;
                }

                // Result exponent may be one less then the current value of e.
                // The coefficients of the BigNumbers from convertBase may have trailing zeros.
                for ( i = 0; yc[i] == ( xc[i] || 0 ); i++ );
                if ( yc[i] > ( xc[i] || 0 ) ) e--;

                if ( s < 0 ) {
                    qc.push(1);
                    more = true;
                } else {
                    xL = xc.length;
                    yL = yc.length;
                    i = 0;
                    s += 2;

                    // Normalise xc and yc so highest order digit of yc is >= base / 2.

                    n = mathfloor( base / ( yc[0] + 1 ) );

                    // Not necessary, but to handle odd bases where yc[0] == ( base / 2 ) - 1.
                    // if ( n > 1 || n++ == 1 && yc[0] < base / 2 ) {
                    if ( n > 1 ) {
                        yc = multiply( yc, n, base );
                        xc = multiply( xc, n, base );
                        yL = yc.length;
                        xL = xc.length;
                    }

                    xi = yL;
                    rem = xc.slice( 0, yL );
                    remL = rem.length;

                    // Add zeros to make remainder as long as divisor.
                    for ( ; remL < yL; rem[remL++] = 0 );
                    yz = yc.slice();
                    yz = [0].concat(yz);
                    yc0 = yc[0];
                    if ( yc[1] >= base / 2 ) yc0++;
                    // Not necessary, but to prevent trial digit n > base, when using base 3.
                    // else if ( base == 3 && yc0 == 1 ) yc0 = 1 + 1e-15;

                    do {
                        n = 0;

                        // Compare divisor and remainder.
                        cmp = compare( yc, rem, yL, remL );

                        // If divisor < remainder.
                        if ( cmp < 0 ) {

                            // Calculate trial digit, n.

                            rem0 = rem[0];
                            if ( yL != remL ) rem0 = rem0 * base + ( rem[1] || 0 );

                            // n is how many times the divisor goes into the current remainder.
                            n = mathfloor( rem0 / yc0 );

                            //  Algorithm:
                            //  1. product = divisor * trial digit (n)
                            //  2. if product > remainder: product -= divisor, n--
                            //  3. remainder -= product
                            //  4. if product was < remainder at 2:
                            //    5. compare new remainder and divisor
                            //    6. If remainder > divisor: remainder -= divisor, n++

                            if ( n > 1 ) {

                                // n may be > base only when base is 3.
                                if (n >= base) n = base - 1;

                                // product = divisor * trial digit.
                                prod = multiply( yc, n, base );
                                prodL = prod.length;
                                remL = rem.length;

                                // Compare product and remainder.
                                // If product > remainder.
                                // Trial digit n too high.
                                // n is 1 too high about 5% of the time, and is not known to have
                                // ever been more than 1 too high.
                                while ( compare( prod, rem, prodL, remL ) == 1 ) {
                                    n--;

                                    // Subtract divisor from product.
                                    subtract( prod, yL < prodL ? yz : yc, prodL, base );
                                    prodL = prod.length;
                                    cmp = 1;
                                }
                            } else {

                                // n is 0 or 1, cmp is -1.
                                // If n is 0, there is no need to compare yc and rem again below,
                                // so change cmp to 1 to avoid it.
                                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                                if ( n == 0 ) {

                                    // divisor < remainder, so n must be at least 1.
                                    cmp = n = 1;
                                }

                                // product = divisor
                                prod = yc.slice();
                                prodL = prod.length;
                            }

                            if ( prodL < remL ) prod = [0].concat(prod);

                            // Subtract product from remainder.
                            subtract( rem, prod, remL, base );
                            remL = rem.length;

                             // If product was < remainder.
                            if ( cmp == -1 ) {

                                // Compare divisor and new remainder.
                                // If divisor < new remainder, subtract divisor from remainder.
                                // Trial digit n too low.
                                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                                while ( compare( yc, rem, yL, remL ) < 1 ) {
                                    n++;

                                    // Subtract divisor from remainder.
                                    subtract( rem, yL < remL ? yz : yc, remL, base );
                                    remL = rem.length;
                                }
                            }
                        } else if ( cmp === 0 ) {
                            n++;
                            rem = [0];
                        } // else cmp === 1 and n will be 0

                        // Add the next digit, n, to the result array.
                        qc[i++] = n;

                        // Update the remainder.
                        if ( rem[0] ) {
                            rem[remL++] = xc[xi] || 0;
                        } else {
                            rem = [ xc[xi] ];
                            remL = 1;
                        }
                    } while ( ( xi++ < xL || rem[0] != null ) && s-- );

                    more = rem[0] != null;

                    // Leading zero?
                    if ( !qc[0] ) qc.splice(0, 1);
                }

                if ( base == BASE ) {

                    // To calculate q.e, first get the number of digits of qc[0].
                    for ( i = 1, s = qc[0]; s >= 10; s /= 10, i++ );
                    round( q, dp + ( q.e = i + e * LOG_BASE - 1 ) + 1, rm, more );

                // Caller is convertBase.
                } else {
                    q.e = e;
                    q.r = +more;
                }

                return q;
            };
        })();


        /*
         * Return a string representing the value of BigNumber n in fixed-point or exponential
         * notation rounded to the specified decimal places or significant digits.
         *
         * n is a BigNumber.
         * i is the index of the last digit required (i.e. the digit that may be rounded up).
         * rm is the rounding mode.
         * caller is caller id: toExponential 19, toFixed 20, toFormat 21, toPrecision 24.
         */
        function format( n, i, rm, caller ) {
            var c0, e, ne, len, str;

            rm = rm != null && isValidInt( rm, 0, 8, caller, roundingMode )
              ? rm | 0 : ROUNDING_MODE;

            if ( !n.c ) return n.toString();
            c0 = n.c[0];
            ne = n.e;

            if ( i == null ) {
                str = coeffToString( n.c );
                str = caller == 19 || caller == 24 && ne <= TO_EXP_NEG
                  ? toExponential( str, ne )
                  : toFixedPoint( str, ne );
            } else {
                n = round( new BigNumber(n), i, rm );

                // n.e may have changed if the value was rounded up.
                e = n.e;

                str = coeffToString( n.c );
                len = str.length;

                // toPrecision returns exponential notation if the number of significant digits
                // specified is less than the number of digits necessary to represent the integer
                // part of the value in fixed-point notation.

                // Exponential notation.
                if ( caller == 19 || caller == 24 && ( i <= e || e <= TO_EXP_NEG ) ) {

                    // Append zeros?
                    for ( ; len < i; str += '0', len++ );
                    str = toExponential( str, e );

                // Fixed-point notation.
                } else {
                    i -= ne;
                    str = toFixedPoint( str, e );

                    // Append zeros?
                    if ( e + 1 > len ) {
                        if ( --i > 0 ) for ( str += '.'; i--; str += '0' );
                    } else {
                        i += e - len;
                        if ( i > 0 ) {
                            if ( e + 1 == len ) str += '.';
                            for ( ; i--; str += '0' );
                        }
                    }
                }
            }

            return n.s < 0 && c0 ? '-' + str : str;
        }


        // Handle BigNumber.max and BigNumber.min.
        function maxOrMin( args, method ) {
            var m, n,
                i = 0;

            if ( isArray( args[0] ) ) args = args[0];
            m = new BigNumber( args[0] );

            for ( ; ++i < args.length; ) {
                n = new BigNumber( args[i] );

                // If any number is NaN, return NaN.
                if ( !n.s ) {
                    m = n;
                    break;
                } else if ( method.call( m, n ) ) {
                    m = n;
                }
            }

            return m;
        }


        /*
         * Return true if n is an integer in range, otherwise throw.
         * Use for argument validation when ERRORS is true.
         */
        function intValidatorWithErrors( n, min, max, caller, name ) {
            if ( n < min || n > max || n != truncate(n) ) {
                raise( caller, ( name || 'decimal places' ) +
                  ( n < min || n > max ? ' out of range' : ' not an integer' ), n );
            }

            return true;
        }


        /*
         * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
         * Called by minus, plus and times.
         */
        function normalise( n, c, e ) {
            var i = 1,
                j = c.length;

             // Remove trailing zeros.
            for ( ; !c[--j]; c.pop() );

            // Calculate the base 10 exponent. First get the number of digits of c[0].
            for ( j = c[0]; j >= 10; j /= 10, i++ );

            // Overflow?
            if ( ( e = i + e * LOG_BASE - 1 ) > MAX_EXP ) {

                // Infinity.
                n.c = n.e = null;

            // Underflow?
            } else if ( e < MIN_EXP ) {

                // Zero.
                n.c = [ n.e = 0 ];
            } else {
                n.e = e;
                n.c = c;
            }

            return n;
        }


        // Handle values that fail the validity test in BigNumber.
        parseNumeric = (function () {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                dotAfter = /^([^.]+)\.$/,
                dotBefore = /^\.([^.]+)$/,
                isInfinityOrNaN = /^-?(Infinity|NaN)$/,
                whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

            return function ( x, str, num, b ) {
                var base,
                    s = num ? str : str.replace( whitespaceOrPlus, '' );

                // No exception on ±Infinity or NaN.
                if ( isInfinityOrNaN.test(s) ) {
                    x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                } else {
                    if ( !num ) {

                        // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                        s = s.replace( basePrefix, function ( m, p1, p2 ) {
                            base = ( p2 = p2.toLowerCase() ) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                            return !b || b == base ? p1 : m;
                        });

                        if (b) {
                            base = b;

                            // E.g. '1.' to '1', '.1' to '0.1'
                            s = s.replace( dotAfter, '$1' ).replace( dotBefore, '0.$1' );
                        }

                        if ( str != s ) return new BigNumber( s, base );
                    }

                    // 'new BigNumber() not a number: {n}'
                    // 'new BigNumber() not a base {b} number: {n}'
                    if (ERRORS) raise( id, 'not a' + ( b ? ' base ' + b : '' ) + ' number', str );
                    x.s = null;
                }

                x.c = x.e = null;
                id = 0;
            }
        })();


        // Throw a BigNumber Error.
        function raise( caller, msg, val ) {
            var error = new Error( [
                'new BigNumber',     // 0
                'cmp',               // 1
                'config',            // 2
                'div',               // 3
                'divToInt',          // 4
                'eq',                // 5
                'gt',                // 6
                'gte',               // 7
                'lt',                // 8
                'lte',               // 9
                'minus',             // 10
                'mod',               // 11
                'plus',              // 12
                'precision',         // 13
                'random',            // 14
                'round',             // 15
                'shift',             // 16
                'times',             // 17
                'toDigits',          // 18
                'toExponential',     // 19
                'toFixed',           // 20
                'toFormat',          // 21
                'toFraction',        // 22
                'pow',               // 23
                'toPrecision',       // 24
                'toString',          // 25
                'BigNumber'          // 26
            ][caller] + '() ' + msg + ': ' + val );

            error.name = 'BigNumber Error';
            id = 0;
            throw error;
        }


        /*
         * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
         * If r is truthy, it is known that there are more digits after the rounding digit.
         */
        function round( x, sd, rm, r ) {
            var d, i, j, k, n, ni, rd,
                xc = x.c,
                pows10 = POWS_TEN;

            // if x is not Infinity or NaN...
            if (xc) {

                // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
                // n is a base 1e14 number, the value of the element of array x.c containing rd.
                // ni is the index of n within x.c.
                // d is the number of digits of n.
                // i is the index of rd within n including leading zeros.
                // j is the actual index of rd within n (if < 0, rd is a leading zero).
                out: {

                    // Get the number of digits of the first element of xc.
                    for ( d = 1, k = xc[0]; k >= 10; k /= 10, d++ );
                    i = sd - d;

                    // If the rounding digit is in the first element of xc...
                    if ( i < 0 ) {
                        i += LOG_BASE;
                        j = sd;
                        n = xc[ ni = 0 ];

                        // Get the rounding digit at index j of n.
                        rd = n / pows10[ d - j - 1 ] % 10 | 0;
                    } else {
                        ni = mathceil( ( i + 1 ) / LOG_BASE );

                        if ( ni >= xc.length ) {

                            if (r) {

                                // Needed by sqrt.
                                for ( ; xc.length <= ni; xc.push(0) );
                                n = rd = 0;
                                d = 1;
                                i %= LOG_BASE;
                                j = i - LOG_BASE + 1;
                            } else {
                                break out;
                            }
                        } else {
                            n = k = xc[ni];

                            // Get the number of digits of n.
                            for ( d = 1; k >= 10; k /= 10, d++ );

                            // Get the index of rd within n.
                            i %= LOG_BASE;

                            // Get the index of rd within n, adjusted for leading zeros.
                            // The number of leading zeros of n is given by LOG_BASE - d.
                            j = i - LOG_BASE + d;

                            // Get the rounding digit at index j of n.
                            rd = j < 0 ? 0 : n / pows10[ d - j - 1 ] % 10 | 0;
                        }
                    }

                    r = r || sd < 0 ||

                    // Are there any non-zero digits after the rounding digit?
                    // The expression  n % pows10[ d - j - 1 ]  returns all digits of n to the right
                    // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                      xc[ni + 1] != null || ( j < 0 ? n : n % pows10[ d - j - 1 ] );

                    r = rm < 4
                      ? ( rd || r ) && ( rm == 0 || rm == ( x.s < 0 ? 3 : 2 ) )
                      : rd > 5 || rd == 5 && ( rm == 4 || r || rm == 6 &&

                        // Check whether the digit to the left of the rounding digit is odd.
                        ( ( i > 0 ? j > 0 ? n / pows10[ d - j ] : 0 : xc[ni - 1] ) % 10 ) & 1 ||
                          rm == ( x.s < 0 ? 8 : 7 ) );

                    if ( sd < 1 || !xc[0] ) {
                        xc.length = 0;

                        if (r) {

                            // Convert sd to decimal places.
                            sd -= x.e + 1;

                            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                            xc[0] = pows10[ ( LOG_BASE - sd % LOG_BASE ) % LOG_BASE ];
                            x.e = -sd || 0;
                        } else {

                            // Zero.
                            xc[0] = x.e = 0;
                        }

                        return x;
                    }

                    // Remove excess digits.
                    if ( i == 0 ) {
                        xc.length = ni;
                        k = 1;
                        ni--;
                    } else {
                        xc.length = ni + 1;
                        k = pows10[ LOG_BASE - i ];

                        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                        // j > 0 means i > number of leading zeros of n.
                        xc[ni] = j > 0 ? mathfloor( n / pows10[ d - j ] % pows10[j] ) * k : 0;
                    }

                    // Round up?
                    if (r) {

                        for ( ; ; ) {

                            // If the digit to be rounded up is in the first element of xc...
                            if ( ni == 0 ) {

                                // i will be the length of xc[0] before k is added.
                                for ( i = 1, j = xc[0]; j >= 10; j /= 10, i++ );
                                j = xc[0] += k;
                                for ( k = 1; j >= 10; j /= 10, k++ );

                                // if i != k the length has increased.
                                if ( i != k ) {
                                    x.e++;
                                    if ( xc[0] == BASE ) xc[0] = 1;
                                }

                                break;
                            } else {
                                xc[ni] += k;
                                if ( xc[ni] != BASE ) break;
                                xc[ni--] = 0;
                                k = 1;
                            }
                        }
                    }

                    // Remove trailing zeros.
                    for ( i = xc.length; xc[--i] === 0; xc.pop() );
                }

                // Overflow? Infinity.
                if ( x.e > MAX_EXP ) {
                    x.c = x.e = null;

                // Underflow? Zero.
                } else if ( x.e < MIN_EXP ) {
                    x.c = [ x.e = 0 ];
                }
            }

            return x;
        }


        // PROTOTYPE/INSTANCE METHODS


        /*
         * Return a new BigNumber whose value is the absolute value of this BigNumber.
         */
        P.absoluteValue = P.abs = function () {
            var x = new BigNumber(this);
            if ( x.s < 0 ) x.s = 1;
            return x;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of Infinity.
         */
        P.ceil = function () {
            return round( new BigNumber(this), this.e + 1, 2 );
        };


        /*
         * Return
         * 1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
         * 0 if they have the same value,
         * or null if the value of either is NaN.
         */
        P.comparedTo = P.cmp = function ( y, b ) {
            id = 1;
            return compare( this, new BigNumber( y, b ) );
        };


        /*
         * Return the number of decimal places of the value of this BigNumber, or null if the value
         * of this BigNumber is ±Infinity or NaN.
         */
        P.decimalPlaces = P.dp = function () {
            var n, v,
                c = this.c;

            if ( !c ) return null;
            n = ( ( v = c.length - 1 ) - bitFloor( this.e / LOG_BASE ) ) * LOG_BASE;

            // Subtract the number of trailing zeros of the last number.
            if ( v = c[v] ) for ( ; v % 10 == 0; v /= 10, n-- );
            if ( n < 0 ) n = 0;

            return n;
        };


        /*
         *  n / 0 = I
         *  n / N = N
         *  n / I = 0
         *  0 / n = 0
         *  0 / 0 = N
         *  0 / N = N
         *  0 / I = 0
         *  N / n = N
         *  N / 0 = N
         *  N / N = N
         *  N / I = N
         *  I / n = I
         *  I / 0 = I
         *  I / N = N
         *  I / I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
         * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.dividedBy = P.div = function ( y, b ) {
            id = 3;
            return div( this, new BigNumber( y, b ), DECIMAL_PLACES, ROUNDING_MODE );
        };


        /*
         * Return a new BigNumber whose value is the integer part of dividing the value of this
         * BigNumber by the value of BigNumber(y, b).
         */
        P.dividedToIntegerBy = P.divToInt = function ( y, b ) {
            id = 4;
            return div( this, new BigNumber( y, b ), 0, 1 );
        };


        /*
         * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.equals = P.eq = function ( y, b ) {
            id = 5;
            return compare( this, new BigNumber( y, b ) ) === 0;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of -Infinity.
         */
        P.floor = function () {
            return round( new BigNumber(this), this.e + 1, 3 );
        };


        /*
         * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.greaterThan = P.gt = function ( y, b ) {
            id = 6;
            return compare( this, new BigNumber( y, b ) ) > 0;
        };


        /*
         * Return true if the value of this BigNumber is greater than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */
        P.greaterThanOrEqualTo = P.gte = function ( y, b ) {
            id = 7;
            return ( b = compare( this, new BigNumber( y, b ) ) ) === 1 || b === 0;

        };


        /*
         * Return true if the value of this BigNumber is a finite number, otherwise returns false.
         */
        P.isFinite = function () {
            return !!this.c;
        };


        /*
         * Return true if the value of this BigNumber is an integer, otherwise return false.
         */
        P.isInteger = P.isInt = function () {
            return !!this.c && bitFloor( this.e / LOG_BASE ) > this.c.length - 2;
        };


        /*
         * Return true if the value of this BigNumber is NaN, otherwise returns false.
         */
        P.isNaN = function () {
            return !this.s;
        };


        /*
         * Return true if the value of this BigNumber is negative, otherwise returns false.
         */
        P.isNegative = P.isNeg = function () {
            return this.s < 0;
        };


        /*
         * Return true if the value of this BigNumber is 0 or -0, otherwise returns false.
         */
        P.isZero = function () {
            return !!this.c && this.c[0] == 0;
        };


        /*
         * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.lessThan = P.lt = function ( y, b ) {
            id = 8;
            return compare( this, new BigNumber( y, b ) ) < 0;
        };


        /*
         * Return true if the value of this BigNumber is less than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */
        P.lessThanOrEqualTo = P.lte = function ( y, b ) {
            id = 9;
            return ( b = compare( this, new BigNumber( y, b ) ) ) === -1 || b === 0;
        };


        /*
         *  n - 0 = n
         *  n - N = N
         *  n - I = -I
         *  0 - n = -n
         *  0 - 0 = 0
         *  0 - N = N
         *  0 - I = -I
         *  N - n = N
         *  N - 0 = N
         *  N - N = N
         *  N - I = N
         *  I - n = I
         *  I - 0 = I
         *  I - N = N
         *  I - I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber minus the value of
         * BigNumber(y, b).
         */
        P.minus = P.sub = function ( y, b ) {
            var i, j, t, xLTy,
                x = this,
                a = x.s;

            id = 10;
            y = new BigNumber( y, b );
            b = y.s;

            // Either NaN?
            if ( !a || !b ) return new BigNumber(NaN);

            // Signs differ?
            if ( a != b ) {
                y.s = -b;
                return x.plus(y);
            }

            var xe = x.e / LOG_BASE,
                ye = y.e / LOG_BASE,
                xc = x.c,
                yc = y.c;

            if ( !xe || !ye ) {

                // Either Infinity?
                if ( !xc || !yc ) return xc ? ( y.s = -b, y ) : new BigNumber( yc ? x : NaN );

                // Either zero?
                if ( !xc[0] || !yc[0] ) {

                    // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                    return yc[0] ? ( y.s = -b, y ) : new BigNumber( xc[0] ? x :

                      // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                      ROUNDING_MODE == 3 ? -0 : 0 );
                }
            }

            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();

            // Determine which is the bigger number.
            if ( a = xe - ye ) {

                if ( xLTy = a < 0 ) {
                    a = -a;
                    t = xc;
                } else {
                    ye = xe;
                    t = yc;
                }

                t.reverse();

                // Prepend zeros to equalise exponents.
                for ( b = a; b--; t.push(0) );
                t.reverse();
            } else {

                // Exponents equal. Check digit by digit.
                j = ( xLTy = ( a = xc.length ) < ( b = yc.length ) ) ? a : b;

                for ( a = b = 0; b < j; b++ ) {

                    if ( xc[b] != yc[b] ) {
                        xLTy = xc[b] < yc[b];
                        break;
                    }
                }
            }

            // x < y? Point xc to the array of the bigger number.
            if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

            b = ( j = yc.length ) - ( i = xc.length );

            // Append zeros to xc if shorter.
            // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
            if ( b > 0 ) for ( ; b--; xc[i++] = 0 );
            b = BASE - 1;

            // Subtract yc from xc.
            for ( ; j > a; ) {

                if ( xc[--j] < yc[j] ) {
                    for ( i = j; i && !xc[--i]; xc[i] = b );
                    --xc[i];
                    xc[j] += BASE;
                }

                xc[j] -= yc[j];
            }

            // Remove leading zeros and adjust exponent accordingly.
            for ( ; xc[0] == 0; xc.splice(0, 1), --ye );

            // Zero?
            if ( !xc[0] ) {

                // Following IEEE 754 (2008) 6.3,
                // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
                y.s = ROUNDING_MODE == 3 ? -1 : 1;
                y.c = [ y.e = 0 ];
                return y;
            }

            // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
            // for finite x and y.
            return normalise( y, xc, ye );
        };


        /*
         *   n % 0 =  N
         *   n % N =  N
         *   n % I =  n
         *   0 % n =  0
         *  -0 % n = -0
         *   0 % 0 =  N
         *   0 % N =  N
         *   0 % I =  0
         *   N % n =  N
         *   N % 0 =  N
         *   N % N =  N
         *   N % I =  N
         *   I % n =  N
         *   I % 0 =  N
         *   I % N =  N
         *   I % I =  N
         *
         * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
         * BigNumber(y, b). The result depends on the value of MODULO_MODE.
         */
        P.modulo = P.mod = function ( y, b ) {
            var q, s,
                x = this;

            id = 11;
            y = new BigNumber( y, b );

            // Return NaN if x is Infinity or NaN, or y is NaN or zero.
            if ( !x.c || !y.s || y.c && !y.c[0] ) {
                return new BigNumber(NaN);

            // Return x if y is Infinity or x is zero.
            } else if ( !y.c || x.c && !x.c[0] ) {
                return new BigNumber(x);
            }

            if ( MODULO_MODE == 9 ) {

                // Euclidian division: q = sign(y) * floor(x / abs(y))
                // r = x - qy    where  0 <= r < abs(y)
                s = y.s;
                y.s = 1;
                q = div( x, y, 0, 3 );
                y.s = s;
                q.s *= s;
            } else {
                q = div( x, y, 0, MODULO_MODE );
            }

            return x.minus( q.times(y) );
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber negated,
         * i.e. multiplied by -1.
         */
        P.negated = P.neg = function () {
            var x = new BigNumber(this);
            x.s = -x.s || null;
            return x;
        };


        /*
         *  n + 0 = n
         *  n + N = N
         *  n + I = I
         *  0 + n = n
         *  0 + 0 = 0
         *  0 + N = N
         *  0 + I = I
         *  N + n = N
         *  N + 0 = N
         *  N + N = N
         *  N + I = N
         *  I + n = I
         *  I + 0 = I
         *  I + N = N
         *  I + I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber plus the value of
         * BigNumber(y, b).
         */
        P.plus = P.add = function ( y, b ) {
            var t,
                x = this,
                a = x.s;

            id = 12;
            y = new BigNumber( y, b );
            b = y.s;

            // Either NaN?
            if ( !a || !b ) return new BigNumber(NaN);

            // Signs differ?
             if ( a != b ) {
                y.s = -b;
                return x.minus(y);
            }

            var xe = x.e / LOG_BASE,
                ye = y.e / LOG_BASE,
                xc = x.c,
                yc = y.c;

            if ( !xe || !ye ) {

                // Return ±Infinity if either ±Infinity.
                if ( !xc || !yc ) return new BigNumber( a / 0 );

                // Either zero?
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                if ( !xc[0] || !yc[0] ) return yc[0] ? y : new BigNumber( xc[0] ? x : a * 0 );
            }

            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();

            // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
            if ( a = xe - ye ) {
                if ( a > 0 ) {
                    ye = xe;
                    t = yc;
                } else {
                    a = -a;
                    t = xc;
                }

                t.reverse();
                for ( ; a--; t.push(0) );
                t.reverse();
            }

            a = xc.length;
            b = yc.length;

            // Point xc to the longer array, and b to the shorter length.
            if ( a - b < 0 ) t = yc, yc = xc, xc = t, b = a;

            // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
            for ( a = 0; b; ) {
                a = ( xc[--b] = xc[b] + yc[b] + a ) / BASE | 0;
                xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
            }

            if (a) {
                xc = [a].concat(xc);
                ++ye;
            }

            // No need to check for zero, as +x + +y != 0 && -x + -y != 0
            // ye = MAX_EXP + 1 possible
            return normalise( y, xc, ye );
        };


        /*
         * Return the number of significant digits of the value of this BigNumber.
         *
         * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
         */
        P.precision = P.sd = function (z) {
            var n, v,
                x = this,
                c = x.c;

            // 'precision() argument not a boolean or binary digit: {z}'
            if ( z != null && z !== !!z && z !== 1 && z !== 0 ) {
                if (ERRORS) raise( 13, 'argument' + notBool, z );
                if ( z != !!z ) z = null;
            }

            if ( !c ) return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;

            if ( v = c[v] ) {

                // Subtract the number of trailing zeros of the last element.
                for ( ; v % 10 == 0; v /= 10, n-- );

                // Add the number of digits of the first element.
                for ( v = c[0]; v >= 10; v /= 10, n++ );
            }

            if ( z && x.e + 1 > n ) n = x.e + 1;

            return n;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * dp decimal places using rounding mode rm, or to 0 and ROUNDING_MODE respectively if
         * omitted.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'round() decimal places out of range: {dp}'
         * 'round() decimal places not an integer: {dp}'
         * 'round() rounding mode not an integer: {rm}'
         * 'round() rounding mode out of range: {rm}'
         */
        P.round = function ( dp, rm ) {
            var n = new BigNumber(this);

            if ( dp == null || isValidInt( dp, 0, MAX, 15 ) ) {
                round( n, ~~dp + this.e + 1, rm == null ||
                  !isValidInt( rm, 0, 8, 15, roundingMode ) ? ROUNDING_MODE : rm | 0 );
            }

            return n;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
         * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
         *
         * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         *
         * If k is out of range and ERRORS is false, the result will be ±0 if k < 0, or ±Infinity
         * otherwise.
         *
         * 'shift() argument not an integer: {k}'
         * 'shift() argument out of range: {k}'
         */
        P.shift = function (k) {
            var n = this;
            return isValidInt( k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 16, 'argument' )

              // k < 1e+21, or truncate(k) will produce exponential notation.
              ? n.times( '1e' + truncate(k) )
              : new BigNumber( n.c && n.c[0] && ( k < -MAX_SAFE_INTEGER || k > MAX_SAFE_INTEGER )
                ? n.s * ( k < 0 ? 0 : 1 / 0 )
                : n );
        };


        /*
         *  sqrt(-n) =  N
         *  sqrt( N) =  N
         *  sqrt(-I) =  N
         *  sqrt( I) =  I
         *  sqrt( 0) =  0
         *  sqrt(-0) = -0
         *
         * Return a new BigNumber whose value is the square root of the value of this BigNumber,
         * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.squareRoot = P.sqrt = function () {
            var m, n, r, rep, t,
                x = this,
                c = x.c,
                s = x.s,
                e = x.e,
                dp = DECIMAL_PLACES + 4,
                half = new BigNumber('0.5');

            // Negative/NaN/Infinity/zero?
            if ( s !== 1 || !c || !c[0] ) {
                return new BigNumber( !s || s < 0 && ( !c || c[0] ) ? NaN : c ? x : 1 / 0 );
            }

            // Initial estimate.
            s = Math.sqrt( +x );

            // Math.sqrt underflow/overflow?
            // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
            if ( s == 0 || s == 1 / 0 ) {
                n = coeffToString(c);
                if ( ( n.length + e ) % 2 == 0 ) n += '0';
                s = Math.sqrt(n);
                e = bitFloor( ( e + 1 ) / 2 ) - ( e < 0 || e % 2 );

                if ( s == 1 / 0 ) {
                    n = '1e' + e;
                } else {
                    n = s.toExponential();
                    n = n.slice( 0, n.indexOf('e') + 1 ) + e;
                }

                r = new BigNumber(n);
            } else {
                r = new BigNumber( s + '' );
            }

            // Check for zero.
            // r could be zero if MIN_EXP is changed after the this value was created.
            // This would cause a division by zero (x/t) and hence Infinity below, which would cause
            // coeffToString to throw.
            if ( r.c[0] ) {
                e = r.e;
                s = e + dp;
                if ( s < 3 ) s = 0;

                // Newton-Raphson iteration.
                for ( ; ; ) {
                    t = r;
                    r = half.times( t.plus( div( x, t, dp, 1 ) ) );

                    if ( coeffToString( t.c   ).slice( 0, s ) === ( n =
                         coeffToString( r.c ) ).slice( 0, s ) ) {

                        // The exponent of r may here be one less than the final result exponent,
                        // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                        // are indexed correctly.
                        if ( r.e < e ) --s;
                        n = n.slice( s - 3, s + 1 );

                        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                        // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                        // iteration.
                        if ( n == '9999' || !rep && n == '4999' ) {

                            // On the first iteration only, check to see if rounding up gives the
                            // exact result as the nines may infinitely repeat.
                            if ( !rep ) {
                                round( t, t.e + DECIMAL_PLACES + 2, 0 );

                                if ( t.times(t).eq(x) ) {
                                    r = t;
                                    break;
                                }
                            }

                            dp += 4;
                            s += 4;
                            rep = 1;
                        } else {

                            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                            // result. If not, then there are further digits and m will be truthy.
                            if ( !+n || !+n.slice(1) && n.charAt(0) == '5' ) {

                                // Truncate to the first rounding digit.
                                round( r, r.e + DECIMAL_PLACES + 2, 1 );
                                m = !r.times(r).eq(x);
                            }

                            break;
                        }
                    }
                }
            }

            return round( r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m );
        };


        /*
         *  n * 0 = 0
         *  n * N = N
         *  n * I = I
         *  0 * n = 0
         *  0 * 0 = 0
         *  0 * N = N
         *  0 * I = N
         *  N * n = N
         *  N * 0 = N
         *  N * N = N
         *  N * I = N
         *  I * n = I
         *  I * 0 = N
         *  I * N = N
         *  I * I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber times the value of
         * BigNumber(y, b).
         */
        P.times = P.mul = function ( y, b ) {
            var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
                base, sqrtBase,
                x = this,
                xc = x.c,
                yc = ( id = 17, y = new BigNumber( y, b ) ).c;

            // Either NaN, ±Infinity or ±0?
            if ( !xc || !yc || !xc[0] || !yc[0] ) {

                // Return NaN if either is NaN, or one is 0 and the other is Infinity.
                if ( !x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc ) {
                    y.c = y.e = y.s = null;
                } else {
                    y.s *= x.s;

                    // Return ±Infinity if either is ±Infinity.
                    if ( !xc || !yc ) {
                        y.c = y.e = null;

                    // Return ±0 if either is ±0.
                    } else {
                        y.c = [0];
                        y.e = 0;
                    }
                }

                return y;
            }

            e = bitFloor( x.e / LOG_BASE ) + bitFloor( y.e / LOG_BASE );
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length;

            // Ensure xc points to longer array and xcL to its length.
            if ( xcL < ycL ) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

            // Initialise the result array with zeros.
            for ( i = xcL + ycL, zc = []; i--; zc.push(0) );

            base = BASE;
            sqrtBase = SQRT_BASE;

            for ( i = ycL; --i >= 0; ) {
                c = 0;
                ylo = yc[i] % sqrtBase;
                yhi = yc[i] / sqrtBase | 0;

                for ( k = xcL, j = i + k; j > i; ) {
                    xlo = xc[--k] % sqrtBase;
                    xhi = xc[k] / sqrtBase | 0;
                    m = yhi * xlo + xhi * ylo;
                    xlo = ylo * xlo + ( ( m % sqrtBase ) * sqrtBase ) + zc[j] + c;
                    c = ( xlo / base | 0 ) + ( m / sqrtBase | 0 ) + yhi * xhi;
                    zc[j--] = xlo % base;
                }

                zc[j] = c;
            }

            if (c) {
                ++e;
            } else {
                zc.splice(0, 1);
            }

            return normalise( y, zc, e );
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * sd significant digits using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toDigits() precision out of range: {sd}'
         * 'toDigits() precision not an integer: {sd}'
         * 'toDigits() rounding mode not an integer: {rm}'
         * 'toDigits() rounding mode out of range: {rm}'
         */
        P.toDigits = function ( sd, rm ) {
            var n = new BigNumber(this);
            sd = sd == null || !isValidInt( sd, 1, MAX, 18, 'precision' ) ? null : sd | 0;
            rm = rm == null || !isValidInt( rm, 0, 8, 18, roundingMode ) ? ROUNDING_MODE : rm | 0;
            return sd ? round( n, sd, rm ) : n;
        };


        /*
         * Return a string representing the value of this BigNumber in exponential notation and
         * rounded using ROUNDING_MODE to dp fixed decimal places.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toExponential() decimal places not an integer: {dp}'
         * 'toExponential() decimal places out of range: {dp}'
         * 'toExponential() rounding mode not an integer: {rm}'
         * 'toExponential() rounding mode out of range: {rm}'
         */
        P.toExponential = function ( dp, rm ) {
            return format( this,
              dp != null && isValidInt( dp, 0, MAX, 19 ) ? ~~dp + 1 : null, rm, 19 );
        };


        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounding
         * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
         * but e.g. (-0.00001).toFixed(0) is '-0'.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFixed() decimal places not an integer: {dp}'
         * 'toFixed() decimal places out of range: {dp}'
         * 'toFixed() rounding mode not an integer: {rm}'
         * 'toFixed() rounding mode out of range: {rm}'
         */
        P.toFixed = function ( dp, rm ) {
            return format( this, dp != null && isValidInt( dp, 0, MAX, 20 )
              ? ~~dp + this.e + 1 : null, rm, 20 );
        };


        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounded
         * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
         * of the FORMAT object (see BigNumber.config).
         *
         * FORMAT = {
         *      decimalSeparator : '.',
         *      groupSeparator : ',',
         *      groupSize : 3,
         *      secondaryGroupSize : 0,
         *      fractionGroupSeparator : '\xA0',    // non-breaking space
         *      fractionGroupSize : 0
         * };
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFormat() decimal places not an integer: {dp}'
         * 'toFormat() decimal places out of range: {dp}'
         * 'toFormat() rounding mode not an integer: {rm}'
         * 'toFormat() rounding mode out of range: {rm}'
         */
        P.toFormat = function ( dp, rm ) {
            var str = format( this, dp != null && isValidInt( dp, 0, MAX, 21 )
              ? ~~dp + this.e + 1 : null, rm, 21 );

            if ( this.c ) {
                var i,
                    arr = str.split('.'),
                    g1 = +FORMAT.groupSize,
                    g2 = +FORMAT.secondaryGroupSize,
                    groupSeparator = FORMAT.groupSeparator,
                    intPart = arr[0],
                    fractionPart = arr[1],
                    isNeg = this.s < 0,
                    intDigits = isNeg ? intPart.slice(1) : intPart,
                    len = intDigits.length;

                if (g2) i = g1, g1 = g2, g2 = i, len -= i;

                if ( g1 > 0 && len > 0 ) {
                    i = len % g1 || g1;
                    intPart = intDigits.substr( 0, i );

                    for ( ; i < len; i += g1 ) {
                        intPart += groupSeparator + intDigits.substr( i, g1 );
                    }

                    if ( g2 > 0 ) intPart += groupSeparator + intDigits.slice(i);
                    if (isNeg) intPart = '-' + intPart;
                }

                str = fractionPart
                  ? intPart + FORMAT.decimalSeparator + ( ( g2 = +FORMAT.fractionGroupSize )
                    ? fractionPart.replace( new RegExp( '\\d{' + g2 + '}\\B', 'g' ),
                      '$&' + FORMAT.fractionGroupSeparator )
                    : fractionPart )
                  : intPart;
            }

            return str;
        };


        /*
         * Return a string array representing the value of this BigNumber as a simple fraction with
         * an integer numerator and an integer denominator. The denominator will be a positive
         * non-zero value less than or equal to the specified maximum denominator. If a maximum
         * denominator is not specified, the denominator will be the lowest value necessary to
         * represent the number exactly.
         *
         * [md] {number|string|BigNumber} Integer >= 1 and < Infinity. The maximum denominator.
         *
         * 'toFraction() max denominator not an integer: {md}'
         * 'toFraction() max denominator out of range: {md}'
         */
        P.toFraction = function (md) {
            var arr, d0, d2, e, exp, n, n0, q, s,
                k = ERRORS,
                x = this,
                xc = x.c,
                d = new BigNumber(ONE),
                n1 = d0 = new BigNumber(ONE),
                d1 = n0 = new BigNumber(ONE);

            if ( md != null ) {
                ERRORS = false;
                n = new BigNumber(md);
                ERRORS = k;

                if ( !( k = n.isInt() ) || n.lt(ONE) ) {

                    if (ERRORS) {
                        raise( 22,
                          'max denominator ' + ( k ? 'out of range' : 'not an integer' ), md );
                    }

                    // ERRORS is false:
                    // If md is a finite non-integer >= 1, round it to an integer and use it.
                    md = !k && n.c && round( n, n.e + 1, 1 ).gte(ONE) ? n : null;
                }
            }

            if ( !xc ) return x.toString();
            s = coeffToString(xc);

            // Determine initial denominator.
            // d is a power of 10 and the minimum max denominator that specifies the value exactly.
            e = d.e = s.length - x.e - 1;
            d.c[0] = POWS_TEN[ ( exp = e % LOG_BASE ) < 0 ? LOG_BASE + exp : exp ];
            md = !md || n.cmp(d) > 0 ? ( e > 0 ? d : n1 ) : n;

            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber(s);

            // n0 = d1 = 0
            n0.c[0] = 0;

            for ( ; ; )  {
                q = div( n, d, 0, 1 );
                d2 = d0.plus( q.times(d1) );
                if ( d2.cmp(md) == 1 ) break;
                d0 = d1;
                d1 = d2;
                n1 = n0.plus( q.times( d2 = n1 ) );
                n0 = d2;
                d = n.minus( q.times( d2 = d ) );
                n = d2;
            }

            d2 = div( md.minus(d0), d1, 0, 1 );
            n0 = n0.plus( d2.times(n1) );
            d0 = d0.plus( d2.times(d1) );
            n0.s = n1.s = x.s;
            e *= 2;

            // Determine which fraction is closer to x, n0/d0 or n1/d1
            arr = div( n1, d1, e, ROUNDING_MODE ).minus(x).abs().cmp(
                  div( n0, d0, e, ROUNDING_MODE ).minus(x).abs() ) < 1
                    ? [ n1.toString(), d1.toString() ]
                    : [ n0.toString(), d0.toString() ];

            MAX_EXP = exp;
            return arr;
        };


        /*
         * Return the value of this BigNumber converted to a number primitive.
         */
        P.toNumber = function () {
            return +this;
        };


        /*
         * Return a BigNumber whose value is the value of this BigNumber raised to the power n.
         * If m is present, return the result modulo m.
         * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
         * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using
         * ROUNDING_MODE.
         *
         * The modular power operation works efficiently when x, n, and m are positive integers,
         * otherwise it is equivalent to calculating x.toPower(n).modulo(m) (with POW_PRECISION 0).
         *
         * n {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         * [m] {number|string|BigNumber} The modulus.
         *
         * 'pow() exponent not an integer: {n}'
         * 'pow() exponent out of range: {n}'
         *
         * Performs 54 loop iterations for n of 9007199254740991.
         */
        P.toPower = P.pow = function ( n, m ) {
            var k, y, z,
                i = mathfloor( n < 0 ? -n : +n ),
                x = this;

            if ( m != null ) {
                id = 23;
                m = new BigNumber(m);
            }

            // Pass ±Infinity to Math.pow if exponent is out of range.
            if ( !isValidInt( n, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 23, 'exponent' ) &&
              ( !isFinite(n) || i > MAX_SAFE_INTEGER && ( n /= 0 ) ||
                parseFloat(n) != n && !( n = NaN ) ) || n == 0 ) {
                k = Math.pow( +x, n );
                return new BigNumber( m ? k % m : k );
            }

            if (m) {
                if ( n > 1 && x.gt(ONE) && x.isInt() && m.gt(ONE) && m.isInt() ) {
                    x = x.mod(m);
                } else {
                    z = m;

                    // Nullify m so only a single mod operation is performed at the end.
                    m = null;
                }
            } else if (POW_PRECISION) {

                // Truncating each coefficient array to a length of k after each multiplication
                // equates to truncating significant digits to POW_PRECISION + [28, 41],
                // i.e. there will be a minimum of 28 guard digits retained.
                // (Using + 1.5 would give [9, 21] guard digits.)
                k = mathceil( POW_PRECISION / LOG_BASE + 2 );
            }

            y = new BigNumber(ONE);

            for ( ; ; ) {
                if ( i % 2 ) {
                    y = y.times(x);
                    if ( !y.c ) break;
                    if (k) {
                        if ( y.c.length > k ) y.c.length = k;
                    } else if (m) {
                        y = y.mod(m);
                    }
                }

                i = mathfloor( i / 2 );
                if ( !i ) break;
                x = x.times(x);
                if (k) {
                    if ( x.c && x.c.length > k ) x.c.length = k;
                } else if (m) {
                    x = x.mod(m);
                }
            }

            if (m) return y;
            if ( n < 0 ) y = ONE.div(y);

            return z ? y.mod(z) : k ? round( y, POW_PRECISION, ROUNDING_MODE ) : y;
        };


        /*
         * Return a string representing the value of this BigNumber rounded to sd significant digits
         * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
         * necessary to represent the integer part of the value in fixed-point notation, then use
         * exponential notation.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toPrecision() precision not an integer: {sd}'
         * 'toPrecision() precision out of range: {sd}'
         * 'toPrecision() rounding mode not an integer: {rm}'
         * 'toPrecision() rounding mode out of range: {rm}'
         */
        P.toPrecision = function ( sd, rm ) {
            return format( this, sd != null && isValidInt( sd, 1, MAX, 24, 'precision' )
              ? sd | 0 : null, rm, 24 );
        };


        /*
         * Return a string representing the value of this BigNumber in base b, or base 10 if b is
         * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
         * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
         * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
         * TO_EXP_NEG, return exponential notation.
         *
         * [b] {number} Integer, 2 to 64 inclusive.
         *
         * 'toString() base not an integer: {b}'
         * 'toString() base out of range: {b}'
         */
        P.toString = function (b) {
            var str,
                n = this,
                s = n.s,
                e = n.e;

            // Infinity or NaN?
            if ( e === null ) {

                if (s) {
                    str = 'Infinity';
                    if ( s < 0 ) str = '-' + str;
                } else {
                    str = 'NaN';
                }
            } else {
                str = coeffToString( n.c );

                if ( b == null || !isValidInt( b, 2, 64, 25, 'base' ) ) {
                    str = e <= TO_EXP_NEG || e >= TO_EXP_POS
                      ? toExponential( str, e )
                      : toFixedPoint( str, e );
                } else {
                    str = convertBase( toFixedPoint( str, e ), b | 0, 10, s );
                }

                if ( s < 0 && n.c[0] ) str = '-' + str;
            }

            return str;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber truncated to a whole
         * number.
         */
        P.truncated = P.trunc = function () {
            return round( new BigNumber(this), this.e + 1, 1 );
        };


        /*
         * Return as toString, but do not accept a base argument, and include the minus sign for
         * negative zero.
         */
        P.valueOf = P.toJSON = function () {
            var str,
                n = this,
                e = n.e;

            if ( e === null ) return n.toString();

            str = coeffToString( n.c );

            str = e <= TO_EXP_NEG || e >= TO_EXP_POS
                ? toExponential( str, e )
                : toFixedPoint( str, e );

            return n.s < 0 ? '-' + str : str;
        };


        P.isBigNumber = true;

        if ( config != null ) BigNumber.config(config);

        return BigNumber;
    }


    // PRIVATE HELPER FUNCTIONS


    function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
    }


    // Return a coefficient array as a string of base 10 digits.
    function coeffToString(a) {
        var s, z,
            i = 1,
            j = a.length,
            r = a[0] + '';

        for ( ; i < j; ) {
            s = a[i++] + '';
            z = LOG_BASE - s.length;
            for ( ; z--; s = '0' + s );
            r += s;
        }

        // Determine trailing zeros.
        for ( j = r.length; r.charCodeAt(--j) === 48; );
        return r.slice( 0, j + 1 || 1 );
    }


    // Compare the value of BigNumbers x and y.
    function compare( x, y ) {
        var a, b,
            xc = x.c,
            yc = y.c,
            i = x.s,
            j = y.s,
            k = x.e,
            l = y.e;

        // Either NaN?
        if ( !i || !j ) return null;

        a = xc && !xc[0];
        b = yc && !yc[0];

        // Either zero?
        if ( a || b ) return a ? b ? 0 : -j : i;

        // Signs differ?
        if ( i != j ) return i;

        a = i < 0;
        b = k == l;

        // Either Infinity?
        if ( !xc || !yc ) return b ? 0 : !xc ^ a ? 1 : -1;

        // Compare exponents.
        if ( !b ) return k > l ^ a ? 1 : -1;

        j = ( k = xc.length ) < ( l = yc.length ) ? k : l;

        // Compare digit by digit.
        for ( i = 0; i < j; i++ ) if ( xc[i] != yc[i] ) return xc[i] > yc[i] ^ a ? 1 : -1;

        // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
    }


    /*
     * Return true if n is a valid number in range, otherwise false.
     * Use for argument validation when ERRORS is false.
     * Note: parseInt('1e+1') == 1 but parseFloat('1e+1') == 10.
     */
    function intValidatorNoErrors( n, min, max ) {
        return ( n = truncate(n) ) >= min && n <= max;
    }


    function isArray(obj) {
        return Object.prototype.toString.call(obj) == '[object Array]';
    }


    /*
     * Convert string of baseIn to an array of numbers of baseOut.
     * Eg. convertBase('255', 10, 16) returns [15, 15].
     * Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
     */
    function toBaseOut( str, baseIn, baseOut ) {
        var j,
            arr = [0],
            arrL,
            i = 0,
            len = str.length;

        for ( ; i < len; ) {
            for ( arrL = arr.length; arrL--; arr[arrL] *= baseIn );
            arr[ j = 0 ] += ALPHABET.indexOf( str.charAt( i++ ) );

            for ( ; j < arr.length; j++ ) {

                if ( arr[j] > baseOut - 1 ) {
                    if ( arr[j + 1] == null ) arr[j + 1] = 0;
                    arr[j + 1] += arr[j] / baseOut | 0;
                    arr[j] %= baseOut;
                }
            }
        }

        return arr.reverse();
    }


    function toExponential( str, e ) {
        return ( str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str ) +
          ( e < 0 ? 'e' : 'e+' ) + e;
    }


    function toFixedPoint( str, e ) {
        var len, z;

        // Negative exponent?
        if ( e < 0 ) {

            // Prepend zeros.
            for ( z = '0.'; ++e; z += '0' );
            str = z + str;

        // Positive exponent
        } else {
            len = str.length;

            // Append zeros.
            if ( ++e > len ) {
                for ( z = '0', e -= len; --e; z += '0' );
                str += z;
            } else if ( e < len ) {
                str = str.slice( 0, e ) + '.' + str.slice(e);
            }
        }

        return str;
    }


    function truncate(n) {
        n = parseFloat(n);
        return n < 0 ? mathceil(n) : mathfloor(n);
    }


    // EXPORT


    BigNumber = constructorFactory();
    BigNumber['default'] = BigNumber.BigNumber = BigNumber;


    // AMD.
    if ( true ) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return BigNumber; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    // Node.js and other environments that support module.exports.
    } else if ( typeof module != 'undefined' && module.exports ) {
        module.exports = BigNumber;

    // Browser.
    } else {
        if ( !globalObj ) globalObj = typeof self != 'undefined' ? self : Function('return this')();
        globalObj.BigNumber = BigNumber;
    }
})(this);


/***/ }),

/***/ 1918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IframeViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


// we enable allow-scripts in test environment
// to allow webdriver access to the elements inside of sandboxed iframe
const sandboxRestrictions = process.env.TEST_ENV ? 'allow-scripts' : '';let

IframeViewer = class IframeViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', {
        className: this.props.className,
        sandbox: sandboxRestrictions // https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe#attr-sandbox
        , src: this.props.src }));


  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),

/***/ 1919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseTestsEmptyItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

ResponseTestsEmptyItem = class ResponseTestsEmptyItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-tests-empty-message' }, 'No tests available ',
        this.props.extended && 'for the selected filter'));


  }};

/***/ }),

/***/ 2317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequesterBuilderContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_draggable__ = __webpack_require__(1647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_EnvironmentSelectorContainer__ = __webpack_require__(2318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_EnvironmentPreviewContainer__ = __webpack_require__(2320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_EnvironmentMenuContainer__ = __webpack_require__(2324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tabs_RequesterTabs__ = __webpack_require__(2327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_loadable__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tabs_RequesterTabContentsContainer__ = __webpack_require__(2331);
var _class;











let



RequesterBuilderContainer = __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside___default()(_class = __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default()(_class = class RequesterBuilderContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      tabs: [],
      activeTab: '',
      tabScrollDirection: 'none',
      selectorWidth: pm.settings.getSetting('selectorWidth') || 210 };


    this.retainFocus = null;

    this.focus = this.focus.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleTabUpdated = this.handleTabUpdated.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollDebounced = _.debounce(this.handleScroll, 100);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleReorder = this.handleReorder.bind(this);
    this.handleCloseCurrentTab = this.handleCloseCurrentTab.bind(this);
    this.handleSwitchToNextTab = this.handleSwitchToNextTab.bind(this);
    this.handleSwitchToPreviousTab = this.handleSwitchToPreviousTab.bind(this);
    this.handleSwitchToTab = this.handleSwitchToTab.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  componentWillMount() {
    this.model = pm.tabManager;
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.detachSaveListeners();
    this.model = null;
  }

  componentDidMount() {
    this.attachSaveListeners();
  }

  componentDidUpdate() {
    if (this.retainFocus) {
      this.restoreFocus();
      this.retainFocus = null;
    }
  }

  attachModelListeners() {
    this.model.on('update', this.handleTabUpdated);
    this.model.on('remove', this.handleModelChange);
    this.model.on('reset', this.handleModelChange);
    this.model.on('switchTab', this.handleModelChange);
    this.model.on('contextCloseTab', this.handleClose);

    pm.mediator.on('focusBuilder', this.focus);
    pm.mediator.on('switchToNextTab', this.handleSwitchToNextTab);
    pm.mediator.on('switchToPreviousTab', this.handleSwitchToPreviousTab);
    pm.mediator.on('switchToTabNumber', this.handleSwitchToTab);
  }

  detachModelListeners() {
    this.model.off('update', this.handleTabUpdated);
    this.model.off('remove', this.handleModelChange);
    this.model.off('reset', this.handleModelChange);
    this.model.off('switchTab', this.handleModelChange);
    this.model.off('contextCloseTab', this.handleClose);

    pm.mediator.off('focusBuilder', this.focus);
    pm.mediator.off('switchToNextTab', this.handleSwitchToNextTab);
    pm.mediator.off('switchToPreviousTab', this.handleSwitchToPreviousTab);
    pm.mediator.off('switchToTabNumber', this.handleSwitchToTab);
  }

  attachSaveListeners() {
    if (this.refs && this.refs.builder) {
      let builder = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this.refs.builder);
      builder.addEventListener('keydown', this.model.debouncedIdleSaveState);
      builder.addEventListener('mousedown', this.model.debouncedIdleSaveState);
    }
  }

  detachSaveListeners() {
    if (this.refs && this.refs.builder) {
      let builder = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this.refs.builder);
      builder.removeEventListener('keydown', this.model.debouncedIdleSaveState);
      builder.removeEventListener('mousedown', this.model.debouncedIdleSaveState);
    }
  }

  attachChromeCloseOverride() {
    window.addEventListener('keydown', e => {
      let isOSX = _.includes(navigator.platform, 'Mac');
      let modifier = isOSX ? e.metaKey : e.ctrlKey;
      if (modifier && e.keyCode == 87) {
        e.preventDefault();
      }
    });
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

  focus() {
    _.invoke(this, 'refs.builder.focus');
  }

  restoreFocus() {
    this.retainFocus === 'builder' ?
    this.focus() :
    pm.mediator.trigger('focusSidebar');
  }

  handleTabUpdated() {
    // Fired when a ghost tab becomes real
    let oldTabCount = this.state.tabs.length;
    this.handleModelChange(() => {
      let newTabCount = this.state.tabs.length;
      let newPreviewTabCount = this.model.getPreviewTab() ? 1 : 0;
      if (newTabCount - newPreviewTabCount > oldTabCount && this.props.activePane === 'builder') {
        this.focus();
      }
    });
  }

  handleModelChange(cb) {
    this.setState({
      tabs: this.getTabs(),
      activeTab: this.getActiveTab() },
    () => {
      _.isFunction(cb) && cb();
    });
  }

  handleClickOutside(e) {
    this.props.onOutsideClick && this.props.onOutsideClick(e);
  }

  getTabs() {
    return _.clone(this.model.models);
  }

  getActiveTab() {
    return this.model.currentTabId;
  }

  handleCreate() {
    pm.tabManager.openNewTab();
    this.focus();
  }

  handleClose(tabId) {
    let tab = this.model.get(tabId);
    if (!tab) {
      return;
    }
    this.model.deleteTab(tabId);
  }

  handleSelect(tabId) {
    this.model.switchTab(tabId);
  }

  handleScroll(tabs) {
    var node = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(tabs);
    let scrollLeft = node.scrollLeft,
    scrollWidth = node.scrollWidth,
    clientWidth = node.clientWidth,
    scrollPosition = scrollLeft + clientWidth,
    tabScrollDirection;

    if (clientWidth === scrollWidth) {
      tabScrollDirection = 'none';
    } else
    if (scrollLeft === 0) {
      tabScrollDirection = 'right';
    } else
    if (scrollPosition === scrollWidth) {
      tabScrollDirection = 'left';
    } else
    {
      tabScrollDirection = 'both';
    }

    this.setState({ tabScrollDirection: tabScrollDirection });
  }

  handleReorder(sourceId, destinationId, position) {
    this.model.reorderTab(sourceId, destinationId, position);
  }

  handleCloseCurrentTab() {
    pm.tabManager.closeCurrentTab();
  }

  handleSwitchToNextTab() {
    this.retainFocus = this.props.activePane;
    this.model.switchToNextTab();
  }

  handleSwitchToPreviousTab() {
    this.retainFocus = this.props.activePane;
    this.model.switchToPreviousTab();
  }

  handleSwitchToTab(number) {
    this.retainFocus = this.props.activePane;
    number && this.model.switchToTabNumber(number);
  }

  handleStart(event, data) {
    this.selectorWidth = this.state.selectorWidth;
    this.startClientX = data.x;
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

  handleStop() {
    pm.settings.setSetting('selectorWidth', this.state.selectorWidth);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__["a" /* default */], { keyMap: pm.shortcuts.getShortcuts(), handlers: this.getKeymapHandlers() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-builder' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-builder-header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_tabs_RequesterTabs__["a" /* default */], {
              tabs: this.state.tabs,
              activeTab: this.state.activeTab,
              tabScrollDirection: this.state.tabScrollDirection,
              onClose: this.handleClose,
              onSelect: this.handleSelect,
              onCreate: this.handleCreate,
              onScroll: this.handleScrollDebounced,
              onReorder: this.handleReorder }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_draggable__["DraggableCore"], {
                axis: 'x',
                onStart: this.handleStart,
                onDrag: this.handleDrag,
                onStop: this.handleStop },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-resize-handle-wrapper' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-resize-handle' }))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-container' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__environments_EnvironmentSelectorContainer__["a" /* default */], { selectorWidth: this.state.selectorWidth }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__environments_EnvironmentPreviewContainer__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__environments_EnvironmentMenuContainer__["a" /* default */], null))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-builder-contents' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__tabs_RequesterTabContentsContainer__["a" /* default */], {
              ref: 'builder',
              tabs: this.state.tabs,
              activeTab: this.state.activeTab,
              activePane: this.props.activePane,
              onTabClose: this.handleClose })))));





  }}) || _class) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentSelectorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_environments_EnvironmentSelector__ = __webpack_require__(2319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(11);
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
    Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').updateState({ activeEnvironment: environment });
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

/***/ 2319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_InputSelect__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_SearchHighlighter__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
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

/***/ 2320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentPreviewContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_environments_EnvironmentPreview__ = __webpack_require__(2321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Icons_PreviewIcon__ = __webpack_require__(2323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_SessionHelper__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__ = __webpack_require__(22);
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
    let envSessionVariables = Object(__WEBPACK_IMPORTED_MODULE_8__utils_SessionHelper__["d" /* unzipVariables */])(zippedVariables).sessionVariables,
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
    let globalsSessionVariables = Object(__WEBPACK_IMPORTED_MODULE_8__utils_SessionHelper__["d" /* unzipVariables */])(zippedVariables).sessionVariables,
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

/***/ 2321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentPreview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EnvironmentPreviewList__ = __webpack_require__(2322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_ManageEnvironmentViews__ = __webpack_require__(1666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_SessionHelper__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__variables_VariableAlertWrapper__ = __webpack_require__(1703);
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
    let environmentValues = Object(__WEBPACK_IMPORTED_MODULE_6__utils_SessionHelper__["c" /* sanitizeZippedValues */])(this.props.selectedEnvironmentStore.enabledValues),
    globalValues = Object(__WEBPACK_IMPORTED_MODULE_6__utils_SessionHelper__["c" /* sanitizeZippedValues */])(this.props.globalsStore.enabledValues);

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

/***/ 2322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentPreviewList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_InlineInput__ = __webpack_require__(1662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_EditIcon__ = __webpack_require__(1642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_VariableSessionService__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_SessionHelper__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_VariablesConstants__ = __webpack_require__(280);
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

    sessionId = Object(__WEBPACK_IMPORTED_MODULE_9__utils_SessionHelper__["b" /* getSessionId */])(model, modelId, activeWorkspaceId);
    Object(__WEBPACK_IMPORTED_MODULE_5__modules_services_VariableSessionService__["a" /* getSessionFor */])(sessionId).
    then(session => {
      if (!session) {
        return;
      }

      let items = Object(__WEBPACK_IMPORTED_MODULE_9__utils_SessionHelper__["c" /* sanitizeZippedValues */])(Object(__WEBPACK_IMPORTED_MODULE_9__utils_SessionHelper__["g" /* zipVariables */])(this.props.items, session.values));

      this.setState({ editableVariableIndex: _.toString(index), items, session }, () => {
        let input = this.refs[this.getVariableRef(index)];
        input && input.startEditing();
      });
    }).
    catch(err => {
      console.error('Failed to get session in environment preview', err);
      pm.alerts.error('Something went wrong. Please check DevTools.');
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

/***/ 2323:
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

/***/ 2324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentMenuContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_environments_EnvironmentMenu__ = __webpack_require__(2325);
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

/***/ 2325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_SettingsIcon__ = __webpack_require__(2326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(15);
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

/***/ 2326:
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

/***/ 2327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterTabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RequesterTab__ = __webpack_require__(2328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RequesterCreateTab__ = __webpack_require__(2329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RequesterTabOptions__ = __webpack_require__(2330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(11);






let

RequesterTabs = class RequesterTabs extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { isOptionsOpen: false };

    this.tabs = {};
    this.handleScroll = this.handleScroll.bind(this);
    this.handleToggleOptions = this.handleToggleOptions.bind(this);
  }

  componentDidMount() {
    if (Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').isSwitching) {
      Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').resetLifecycle(Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace);
    }
    this.refs.tabScroller && this.refs.tabScroller.addEventListener('wheel', this.props.onScroll);
  }

  componentDidUpdate(prevProps) {
    if (Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').isSwitching) {
      Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').resetLifecycle(Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace);
    }
    if (this.props.activeTab && this.props.activeTab !== prevProps.activeTab) {
      let node = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.tabs[this.props.activeTab]);
      if (!node) {
        return;
      }
      node.scrollIntoViewIfNeeded ? node.scrollIntoViewIfNeeded() : node.scrollIntoView(true);
    }
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'requester-tabs': true,
      [`is-scrolling-${this.props.tabScrollDirection}`]: true,
      'is-options-open': this.state.isOptionsOpen });


  }

  handleScroll(e) {
    _.invoke(this.refs, 'tabOptions.closeDropdown');
    this.state.isOptionsOpen && this.handleToggleOptions(false);
    var node = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.tabs);
    e.deltaY && (node.scrollLeft += e.deltaY);
    this.props.onScroll && this.props.onScroll(this.refs.tabs);
  }

  handleToggleOptions(isOpen) {
    this.setState({ isOptionsOpen: isOpen });
  }

  render() {
    let visibleTabs = this.props.tabs.filter(tab => {
      return !tab.get('isGhost');
    });

    // let tabOrder = _.partition(this.props.tabs, tab => !tab.get('isPreview'))
    let normalTabs = [],
    previewTabs = [],
    ghostTabs = [];

    _.each(this.props.tabs, tab => {
      if (tab.get('isPreview')) {
        return previewTabs.push(tab);
      }
      if (tab.get('isGhost')) {
        return ghostTabs.push(tab);
      }
      return normalTabs.push(tab);
    });

    let tabOrder = _.concat(normalTabs, previewTabs, ghostTabs);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tabs-wrapper', onWheel: this.handleScroll },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses(), ref: 'tabs' },

          _.map(tabOrder, (tab, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RequesterTab__["a" /* default */], {
                key: tab.id,
                tab: tab,
                tabRef: ref => {return this.tabs[tab.id] = ref;},
                active: tab.id === this.props.activeTab,
                only: visibleTabs.length === 1,
                onSelect: this.props.onSelect,
                onClose: this.props.onClose,
                onReorder: this.props.onReorder,
                isLastVisibleTab: index === _.size(tabOrder) - 2 }));


          }),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RequesterCreateTab__["a" /* default */], {
            onClick: this.props.onCreate }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tabs-options-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__RequesterTabOptions__["a" /* default */], { ref: 'tabOptions', onToggle: this.handleToggleOptions })))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd__ = __webpack_require__(1661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_CloseIcon__ = __webpack_require__(79);
var _dec, _dec2, _class;





const getMiddleX = component => {
  const elementRect = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(component).getBoundingClientRect();
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
      component.getDecoratedComponentInstance().scheduleHoverUpdate('right');
    } else
    {
      component.getDecoratedComponentInstance().scheduleHoverUpdate();
    }

  },
  drop(props, monitor, component) {
    if (!props.isLastVisibleTab) {
      return {
        dropId: props.tab.id,
        position: 'left' };

    }
    return {
      dropId: props.tab.id,
      position: monitor.getClientOffset().x > getMiddleX(component) ? 'right' : 'left' };

  } };let
















RequesterTab = (_dec = Object(__WEBPACK_IMPORTED_MODULE_3_react_dnd__["DropTarget"])('requester-tab', tabTarget, (connect, monitor) => {return { connectDropTarget: connect.dropTarget(), isDragOver: monitor.isOver({ shallow: true }), canDrop: monitor.canDrop() };}), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_3_react_dnd__["DragSource"])('requester-tab', tabSource, (connect, monitor) => {return { connectDragSource: connect.dragSource(), connectDragPreview: connect.dragPreview(), isDragging: monitor.isDragging() };}), _dec(_class = _dec2(_class = class RequesterTab extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      title: 'New Tab',
      isPreview: false,
      isDirty: props.tab.get('isDirty') };


    this.handleTabDirtyChange = this.handleTabDirtyChange.bind(this);
    this.handleTabPreviewChange = this.handleTabPreviewChange.bind(this);
    this.handleTabModelChange = this.handleTabModelChange.bind(this);
    this.handleRequestModelChange = this.handleRequestModelChange.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleCloseMouseUp = this.handleCloseMouseUp.bind(this);
    this.scheduleHoverUpdate = this.scheduleHoverUpdate.bind(this);
    this.setDropHoverLeft = this.setDropHoverLeft.bind(this);
    this.setDropHoverRight = this.setDropHoverRight.bind(this);
  }

  componentWillMount() {
    this.tabModel = this.props.tab;
    this.requestModel = this.props.tab.get('request');
    this.attachTabModelListeners();
    this.attachRequestModelListeners();
    this.handleRequestModelChange();
  }

  componentWillUnmount() {
    this.detachRequestModelListeners();
    this.detachTabModelListeners();
    this.requestModel = null;
    this.tabModel = null;
  }

  attachTabModelListeners() {
    this.tabModel && this.tabModel.on('change:request', this.handleTabModelChange);
    this.tabModel && this.tabModel.on('change:isDirty', this.handleTabDirtyChange);
    this.tabModel && this.tabModel.on('change:isPreview', this.handleTabPreviewChange);
  }

  detachTabModelListeners() {
    this.tabModel && this.tabModel.off('change:request', this.handleTabModelChange);
    this.tabModel && this.tabModel.off('change:isDirty', this.handleTabDirtyChange);
    this.tabModel && this.tabModel.off('change:isPreview', this.handleTabPreviewChange);
  }

  attachRequestModelListeners() {
    this.requestModel && this.requestModel.on('change:url', this.handleRequestModelChange);
    this.requestModel && this.requestModel.on('change:name', this.handleRequestModelChange);
  }

  detachRequestModelListeners() {
    this.requestModel && this.requestModel.off('change:url', this.handleRequestModelChange);
    this.requestModel && this.requestModel.off('change:name', this.handleRequestModelChange);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'requester-tab': true,
      'is-hidden': this.props.tab.get('isGhost'),
      'is-preview': this.props.tab.get('isPreview'),
      'is-active': this.props.active,
      'is-dragged': this.props.isDragging,
      'is-hover-left': this.state.dropHoverLeft,
      'is-hover-right': this.state.dropHoverRight,
      'is-drop-hovered': this.props.canDrop && this.props.isDragOver });

  }

  getCloseButtonClasses() {
    let hideClose = this.props.only ? !_.trim(this.requestModel.get('name')) && !_.trim(this.requestModel.get('url')) : false;
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'requester-tab__close': true,
      'is-only': hideClose,
      'is-dirty': this.state.isDirty });

  }

  handleTabModelChange() {
    this.detachRequestModelListeners();
    this.requestModel = this.props.tab.get('request');
    this.attachRequestModelListeners();
    this.handleRequestModelChange();
  }

  handleTabDirtyChange(tab, isDirty) {
    this.setState({ isDirty: isDirty });
  }

  scheduleHoverUpdate(type) {
    let func = this.setDropHoverLeft;
    if (type === 'right') {
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
    const { tab } = this.props;

    // left click
    if (e.nativeEvent.which === 1) {
      this.props.onSelect && this.props.onSelect(tab.id);
      return;
    }

    // middle click
    if (e.nativeEvent.which === 2) {
      this.props.onClose && this.props.onClose(tab.id);
      return;
    }
  }

  handleCloseMouseUp(e) {
    if (e.altKey) {
      e.stopPropagation();
      pm.tabManager.switchTab(this.props.tab.id);
      pm.tabManager.forceCloseCurrentTab();
    } else
    if (e.nativeEvent.which === 1) {
      e.stopPropagation();
      this.props.onClose && this.props.onClose(this.props.tab.id);
      return;
    }
  }

  handleRequestModelChange() {
    let nextTitle = _.trim(this.requestModel.get('name')) || _.trim(this.requestModel.get('url')) || 'New Tab';

    let truncatedTitle = _.truncate(nextTitle, {
      length: 30,
      omission: '' });



    this.setState({ title: truncatedTitle });
  }

  handleTabPreviewChange(tab, isPreview) {
    this.setState({ isPreview: isPreview });
  }

  render() {
    const {
      connectDragSource,
      connectDropTarget,
      connectDragPreview,
      tab } =
    this.props;

    return connectDropTarget(connectDragPreview(connectDragSource(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: this.getClasses(),
        'data-tab-id': tab.id,
        'data-tab-preview': tab.get('isPreview'),
        onMouseUp: this.handleMouseUp,
        ref: this.props.tabRef },

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab__name' },
        this.state.title),

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getCloseButtonClasses(),
          onMouseUp: this.handleCloseMouseUp },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_CloseIcon__["a" /* default */], {
          className: 'requester-tab__close-icon',
          size: 'xs' }))))));




  }}) || _class) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterCreateTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Icons_AddIcon__ = __webpack_require__(1651);

let

RequesterCreateTab = class RequesterCreateTab extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick && this.props.onClick();
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-create', onClick: this.handleClick },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Icons_AddIcon__["a" /* default */], {
          className: 'requester-tab-create-icon',
          size: 'xs' })));



  }};

/***/ }),

/***/ 2330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterTabOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_MoreIcon__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_ShortcutsList__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(22);





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
    let activeTab = pm.tabManager.getCurrentTab();
    switch (item) {
      case 'duplicate':
        pm.tabManager.trigger('contextDuplicateTab', activeTab.id);
        break;
      case 'close-active':
        __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('tabs', 'close_current_tab');
        pm.tabManager.trigger('contextCloseTab', activeTab.id);
        break;
      case 'force-close-active':
        __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('tabs', 'force_close_current_tab');
        pm.tabManager.forceCloseTab(activeTab.id);
        break;
      case 'close-other':
        __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('tabs', 'close_all_but_current_tab');
        pm.tabManager.trigger('contextCloseOtherTabs', activeTab.id);
        break;
      case 'close-all':
        __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('tabs', 'close_all_tabs');
        pm.tabManager.trigger('contextCloseAllTabs');
        break;
      case 'force-close-all':
        __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('tabs', 'force_close_all_tabs');
        let dirtyTabCount = pm.tabManager.getDirtyTabCount();
        if (dirtyTabCount) {
          pm.mediator.trigger('showForceCloseConfirmationModal', dirtyTabCount);
        } else
        {
          pm.tabManager.forceCloseAllTabs();
        }
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Duplicate Current Tab')),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider divider--space' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], { refKey: 'close-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Close Current Tab'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_4__controllers_ShortcutsList__["c" /* getShortcutByName */])('closeCurrentTab'))),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], { refKey: 'force-close-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Force Close Current Tab'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_4__controllers_ShortcutsList__["c" /* getShortcutByName */])('forceCloseCurrentTab'))),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], { refKey: 'close-other' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Close All but Current Tab')),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], { refKey: 'close-all' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Close All Tabs')),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], { refKey: 'force-close-all' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-options__label' }, 'Force Close All Tabs')))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterTabContentsContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RequesterTabContentContainer__ = __webpack_require__(2332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_RequesterTabLayoutConstants__ = __webpack_require__(414);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


let

RequesterTabContentsContainer = class RequesterTabContentsContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { layout: pm.app.getCurrentLayout() };

    this.focus = this.focus.bind(this);
    this.focusUrlBar = this.focusUrlBar.bind(this);
    this.handleToggleLayout = this.handleToggleLayout.bind(this);
    this.handleTabClose = this.handleTabClose.bind(this);
  }

  componentDidMount() {
    this.attachSettingsListeners();
    pm.mediator.on('focusRequestUrl', this.focusUrlBar);
    pm.tabManager.on('closedTab', this.handleTabClose);
  }

  componentWillUnmount() {
    this.detachSettingsListeners();
    pm.mediator.off('focusRequestUrl', this.focusUrlBar);
    pm.tabManager.off('closedTab', this.handleTabClose);
  }

  attachSettingsListeners() {
    pm.settings.on('setSetting:requesterTabRequestPaneWidth', this.handleSettingsChange);
    pm.settings.on('setSetting:requesterTabLayout', this.handleToggleLayout);
    pm.settings.on('setSetting:dataEditorColumns', this.handleSettingsChange);
  }

  detachSettingsListeners() {
    pm.settings.off('setSetting:requesterTabRequestPaneWidth', this.handleSettingsChange);
    pm.settings.off('setSetting:requesterTabLayout', this.handleToggleLayout);
    pm.settings.off('setSetting:dataEditorColumns', this.handleSettingsChange);
  }

  focus() {
    _.invoke(this, `refs[${this.props.activeTab}].focus`);
  }

  focusUrlBar() {
    _.invoke(this, `refs[${this.props.activeTab}].focusUrlBar`);
  }

  handleToggleLayout(nextLayout) {
    this.setState({ layout: nextLayout });
  }

  handleTabClose() {
    this.props.activePane === 'builder' ?
    pm.mediator.trigger('focusBuilder') :
    pm.mediator.trigger('focusSidebar');
  }

  handleSettingsChange() {
    pm.tabManager.remountGhostTab();
  }

  render() {

    const { activeTab, tabs } = this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-contents' },

        tabs.map(tab => {
          let id = tab.get('id');
          let active = tab.get('id') === activeTab;

          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__RequesterTabContentContainer__["a" /* default */], _extends({
              ref: id,
              key: id,
              active: active,
              tab: tab,
              tabId: id,
              onClose: this.handleTabClose,
              onTabClose: this.props.onTabClose },
            this.state)));


        })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterTabContentContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_RequestMetaViewerContainer__ = __webpack_require__(2333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_RequestEditorContainer__ = __webpack_require__(2336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__response_ResponseViewerContainer__ = __webpack_require__(2516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__prscripts_PRScriptErrorViewerContainer__ = __webpack_require__(2556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__example_response_ExampleResponseMetaViewerContainer__ = __webpack_require__(2558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__variables_CollectionVariablesProvider__ = __webpack_require__(2561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_empty_states_CrashHandler__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_RequesterTabLayoutConstants__ = __webpack_require__(414);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;












let


RequesterTabContentContainer = __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default()(_class = class RequesterTabContentContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      request: null,
      tabMode: 'request' };


    this.model = null;
    this.$container = null;
    this.focus = this.focus.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollToResponse = this.handleScrollToResponse.bind(this);
    this.handleScrollToRequest = this.handleScrollToRequest.bind(this);
    this.focusUrlBar = this.focusUrlBar.bind(this);
    this.handleSaveExample = this.handleSaveExample.bind(this);
    this.changeTabMode = this.changeTabMode.bind(this);
    this.handleTabModeChange = this.handleTabModeChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.detachModelListeners();
    this.model = nextProps.tab;
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillMount() {
    this.model = this.props.tab;
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillUnmount() {
    _.invoke(this, 'props.onClose');
    this.$container.removeEventListener('scroll', this.handleScroll);
    this.detachModelListeners();
    this.$container = null;
    this.model = null;
  }

  componentDidMount() {
    this.$container = this.refs.container;
    this.$container.addEventListener('scroll', this.handleScroll);
  }

  focus() {
    let $node = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.container);
    $node && $node.focus();
  }

  focusUrlBar() {
    _.invoke(this, 'refs.requestEditor.focusUrlBar');
  }

  handleScroll() {
    if (this.state.tabMode === 'exampleResponse') {
      this.refs.exampleResponseMeta &&
      this.refs.exampleResponseMeta.handleScroll();
    } else
    {
      this.refs.requestEditor &&
      this.refs.requestEditor.handleScroll();
    }
  }

  handleScrollToResponse() {
    if (!this.$container) {
      return;
    }

    this.$container.scrollTop = this.$container.scrollHeight;
  }

  handleScrollToRequest() {
    if (!this.$container) {
      return;
    }

    this.$container.scrollTop = 0;
  }

  getContainerClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'requester-tab-content': true,
      'is-hidden': !this.props.active,
      'requester-tab-content--example-response-mode': this.state.tabMode === 'exampleResponse',
      'layout-1-column': this.props.layout === __WEBPACK_IMPORTED_MODULE_12__constants_RequesterTabLayoutConstants__["a" /* REQUESTER_TAB_LAYOUT_1_COLUMN */],
      'layout-2-column': this.props.layout === __WEBPACK_IMPORTED_MODULE_12__constants_RequesterTabLayoutConstants__["b" /* REQUESTER_TAB_LAYOUT_2_COLUMN */] });

  }

  getPaneClasses(pane) {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'requester-tab-content-pane': true,
      'requester-tab-content-pane--request-editor': pane === 'request-editor',
      'requester-tab-content-pane--response-viewer': pane === 'response-viewer' });

  }

  attachModelListeners() {
    this.model && this.model.on('change:request', this.handleModelChange);
    this.model && this.model.on('scrollToResponse', this.handleScrollToResponse);
    this.model && this.model.on('scrollToRequest', this.handleScrollToRequest);
    this.model && this.model.on('change:mode', this.handleTabModeChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:request', this.handleModelChange);
    this.model && this.model.off('scrollToResponse', this.handleScrollToResponse);
    this.model && this.model.off('scrollToRequest', this.handleScrollToRequest);
    this.model && this.model.off('change:mode', this.handleTabModeChange);
  }

  handleModelChange() {
    this.setState({
      request: this.model.get('request'),
      tabMode: this.model.get('mode') });

  }

  handleTabModeChange() {
    this.setState({ tabMode: this.model.get('mode') });
  }

  changeTabMode(mode) {
    this.model.set('mode', mode);
  }

  handleSaveExample() {
    if (!this.state.request) {
      return;
    }
    this.state.request.saveResponseToRequest();
  }

  render() {
    let request = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["a" /* getStore */])('RequestStore').find(this.state.request.get('id'));
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__variables_CollectionVariablesProvider__["a" /* default */], { collectionId: request && request.collection },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getContainerClasses(), ref: 'container', tabIndex: '-1' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_empty_states_CrashHandler__["a" /* default */], { onClose: this.props.onTabClose.bind(this, this.props.tabId) },

            this.state.request.get('isFromCollection') &&
            this.state.tabMode !== 'exampleResponse' &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__request_RequestMetaViewerContainer__["a" /* default */], _extends({},
            this.props,
            this.state, {
              changeTabMode: this.changeTabMode })),



            this.state.tabMode === 'exampleResponse' &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__example_response_ExampleResponseMetaViewerContainer__["a" /* default */], _extends({},
            this.props,
            this.state, {
              ref: 'exampleResponseMeta',
              changeTabMode: this.changeTabMode,
              onSaveExample: this.handleSaveExample })),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-content-panes' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getPaneClasses('request-editor') },

                this.state.tabMode === 'exampleResponse' &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-label' }, 'EXAMPLE REQUEST'),



                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__request_RequestEditorContainer__["a" /* default */], _extends({},
                this.props,
                this.state, {
                  ref: 'requestEditor' }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getPaneClasses('response-viewer') },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__prscripts_PRScriptErrorViewerContainer__["a" /* default */], _extends({},
                this.props,
                this.state)),


                this.state.tabMode === 'exampleResponse' &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-label' }, 'EXAMPLE RESPONSE'),



                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__response_ResponseViewerContainer__["a" /* default */], _extends({},
                this.props,
                this.state))))))));







  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestMetaViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_request_RequestMetaViewer__ = __webpack_require__(2334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_pipelines_user_action__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_RequesterTabLayoutConstants__ = __webpack_require__(414);
var _class;




let


RequestMetaViewerContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RequestMetaViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      maxDescriptionLines: this.getMaxDescriptionLines(),
      isEditingDescription: false,
      responses: [],
      showDescription: false };


    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleResponseSelect = this.handleResponseSelect.bind(this);
    this.handleResponseDelete = this.handleResponseDelete.bind(this);
    this.handleDescriptionToggle = this.handleDescriptionToggle.bind(this);
    this.handleRequestDescriptionEditToggle = this.handleRequestDescriptionEditToggle.bind(this);
    this.handleRequestNameUpdate = this.handleRequestNameUpdate.bind(this);
    this.handleRequestDescriptionUpdate = this.handleRequestDescriptionUpdate.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleToggleLayout = this.handleToggleLayout.bind(this);
    this.handleAddExampleClick = this.handleAddExampleClick.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  attachModelListeners() {
    this.model && this.model.on('change', this.handleModelChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change', this.handleModelChange);
  }

  componentWillReceiveProps(nextProps) {
    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  handleModelChange() {
    this.setState(prevState => {
      return {
        name: this.model.get('name'),
        description: this.model.get('description'),
        responses: this.model.get('responses') || [],
        write: this.model.isWriteable(),
        isEditingDescription: prevState.isEditingDescription && this.model.id === this.props.request.id,
        showToggle: this.model.isWriteable() || !_.isEmpty(this.model.get('responses')) || !_.isEmpty(this.model.get('description')) };

    });
  }

  handleResponseSelect(id) {
    this.props.changeTabMode('exampleResponse');
    this.model.loadSampleResponseById(id);
  }

  handleResponseDelete(id) {
    this.model.deleteSampleResponse(id);
  }

  handleDescriptionToggle() {
    this.setState(prevState => {
      return { showDescription: !prevState.showDescription };
    });
  }

  handleRequestDescriptionUpdate(value) {
    let updateRequestEvent = {
      name: 'update',
      namespace: 'request',
      data: { id: this.model.get('id'), description: value } };


    Object(__WEBPACK_IMPORTED_MODULE_3__modules_pipelines_user_action__["a" /* default */])(updateRequestEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        console.error('Error while updating request description', response.error);
        return;
      }
      pm.mediator.trigger('focusSidebar');
    }).
    catch(err => {
      console.error('Error in pipeline while updating request description', err);
    });
  }

  handleRequestNameUpdate(name) {
    let updateRequestEvent = {
      name: 'update',
      namespace: 'request',
      data: { id: this.model.get('id'), name } };


    Object(__WEBPACK_IMPORTED_MODULE_3__modules_pipelines_user_action__["a" /* default */])(updateRequestEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        console.error('Error in renaming request', response.error);
        return;
      }
      pm.mediator.trigger('focusSidebar');
    }).
    catch(err => {
      console.error('Error in pipeline while renaming request', err);
    });
  }

  handleRequestDescriptionEditToggle(isEditingDescription) {
    this.setState({ isEditingDescription });
  }

  getMaxDescriptionLines() {
    if (pm.settings && pm.settings.getSetting('requesterTabLayout') === __WEBPACK_IMPORTED_MODULE_5__constants_RequesterTabLayoutConstants__["b" /* REQUESTER_TAB_LAYOUT_2_COLUMN */]) {
      return Math.round((window.innerHeight - 250) / 16);
    }
    return Infinity;
  }

  handleResize() {
    // Return if not editing
    if (!this.state.isEditingDescription) {
      return;
    }
    this.handleToggleLayout();
  }

  handleToggleLayout() {
    const maxDescriptionLines = this.getMaxDescriptionLines();
    if (maxDescriptionLines !== this.state.maxDescriptionLines) {
      this.setState({ maxDescriptionLines: maxDescriptionLines });
    }
  }

  componentDidMount() {
    pm.settings.on('setSetting:requesterTabLayout', this.handleToggleLayout);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
    pm.settings.off('setSetting:requesterTabLayout', this.handleToggleLayout);
    window.removeEventListener('resize', this.handleResize);
  }

  handleAddExampleClick() {
    this.props.changeTabMode('exampleResponse');
    this.model.loadRequestInExample();
    __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__["a" /* default */].addEvent('examples', 'add_example_initiate');
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_request_RequestMetaViewer__["a" /* default */], {
        description: this.state.description,
        id: _.get(this.props.request, 'id'),
        isEditingDescription: this.state.isEditingDescription,
        maxDescriptionLines: this.state.maxDescriptionLines,
        name: this.state.name,
        responses: this.state.responses,
        showDescription: this.state.showDescription,
        showToggle: this.state.showToggle,
        write: this.state.write,
        onAddExampleClick: this.handleAddExampleClick,
        onDescriptionToggle: this.handleDescriptionToggle,
        onRequestDescriptionEditToggle: this.handleRequestDescriptionEditToggle,
        onRequestDescriptionUpdate: this.handleRequestDescriptionUpdate,
        onRequestNameUpdate: this.handleRequestNameUpdate,
        onResponseDelete: this.handleResponseDelete,
        onResponseSelect: this.handleResponseSelect }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestMetaViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_request_RequestSavedResponseList__ = __webpack_require__(2335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_InlineInput__ = __webpack_require__(1662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_InlineEditor__ = __webpack_require__(1700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Icons_EditIcon__ = __webpack_require__(1642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Icons_RightSolidIcon__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_Icons_DownSolidIcon__ = __webpack_require__(80);








let

RequestMetaViewer = class RequestMetaViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { showEditNameToggle: true };
    this.handleRequestNameEditToggle = this.handleRequestNameEditToggle.bind(this);
    this.handleRequestNameEdit = this.handleRequestNameEdit.bind(this);
  }

  getToggleClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'request-meta-name-toggle': true,
      'is-open': this.props.showDescription,
      'is-hidden': !this.props.showToggle });

  }

  getNameGroupClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'request-meta-name-group': true,
      'is-toggleable': this.props.showToggle,
      'is-editing': !this.state.showEditNameToggle,
      'editable': this.props.write });

  }

  handleRequestNameEditToggle(isEditing) {
    const inlineInput = this.refs.inlineInput;
    if (isEditing && inlineInput) {
      inlineInput.focus();
      inlineInput.selectAll();
    } else
    {
      this.setState({ showEditNameToggle: true });
    }
  }

  handleRequestNameEdit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ showEditNameToggle: false }, () => {
      this.refs.inlineInput && this.refs.inlineInput.startEditing();
    });
  }

  componentWillReceiveProps(nextProps) {
    const inlineEditor = this.refs.inlineEditor;
    if (inlineEditor) {
      if (nextProps.isEditingDescription && !this.props.isEditingDescription) {
        inlineEditor.startEditing();
      } else
      if (!nextProps.isEditingDescription && this.props.isEditingDescription) {
        inlineEditor.reset();
      } else
      if (nextProps.browserWidth !== this.props.browserWidth) {
        inlineEditor.refresh();
      }
    }
  }

  render() {
    if (!this.props.name && !this.props.description && _.isEmpty(this.props.responses)) {
      return false;
    }

    const {
      name,
      description,
      maxDescriptionLines,
      showDescription,
      write,
      onRequestNameUpdate,
      onRequestDescriptionEditToggle,
      onRequestDescriptionUpdate } =
    this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-meta-viewer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-contents-group' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getNameGroupClasses() },

            this.props.showDescription ?
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_Icons_DownSolidIcon__["a" /* default */], {
              className: this.getToggleClasses(),
              onClick: this.props.onDescriptionToggle }) :

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Icons_RightSolidIcon__["a" /* default */], {
              className: this.getToggleClasses(),
              onClick: this.props.onDescriptionToggle }),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-meta-name-wrapper', onClick: this.props.onDescriptionToggle },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_InlineInput__["a" /* default */], {
                className: 'request-meta-name',
                placeholder: 'Request Name',
                ref: 'inlineInput',
                value: name,
                onSubmit: onRequestNameUpdate,
                onToggleEdit: this.handleRequestNameEditToggle }),


              this.state.showEditNameToggle && write && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-meta-name__edit__icon-wrapper', onClick: this.handleRequestNameEdit },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Icons_EditIcon__["a" /* default */], {
                  className: 'request-meta-name__edit__icon',
                  size: 'xs' })))),





          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-meta-saved-responses-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_request_RequestSavedResponseList__["a" /* default */], {
              responses: this.props.responses,
              write: this.props.write,
              onSelect: this.props.onResponseSelect,
              onDelete: this.props.onResponseDelete,
              onResponseNameChange: this.props.onResponseNameChange,
              onAddExampleClick: this.props.onAddExampleClick,
              currentResponseId: this.props.currentResponseId,
              loadDefaultRequest: this.props.loadDefaultRequest }))),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-contents-group-container' },
          (write || !_.isEmpty(description)) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-contents-group-left' },
            showDescription &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_InlineEditor__["a" /* default */], {
              className: 'request-meta-description',
              editable: write,
              maxLines: maxDescriptionLines,
              placeholder: 'Adding a description makes your docs better',
              ref: 'inlineEditor',
              showViewMore: false,
              value: description,
              onToggleEdit: onRequestDescriptionEditToggle,
              onUpdate: onRequestDescriptionUpdate })))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestSavedResponseList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_DeleteIcon__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_DownSolidIcon__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postman_react_click_outside__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_AppUrlConstants__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(22);
var _class;





let

ExampleResponseListItem = class ExampleResponseListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleDelete() {
    let id = _.get(this.props.response, 'id');
    this.props.onDelete && this.props.onDelete(id);
  }

  handleSelect() {
    let id = _.get(this.props.response, 'id');
    this.props.onSelect && this.props.onSelect(id);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-list--item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'example-response-list--label',
            onClick: this.handleSelect },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'example-response-list--name' },
            _.get(this.props.response, 'name'))),


        this.props.write &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-list--actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Icons_DeleteIcon__["a" /* default */], {
            className: 'example-response-list--delete',
            onClick: this.handleDelete }))));





  }};let



RequestSavedResponseList = __WEBPACK_IMPORTED_MODULE_4__postman_react_click_outside___default()(_class = class RequestSavedResponseList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };

    this.handleExampleClick = this.handleExampleClick.bind(this);
    this.renderEmptyExampleList = this.renderEmptyExampleList.bind(this);
    this.renderExampleList = this.renderExampleList.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleExampleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleClickOutside() {
    this.setState({ isOpen: false });
  }

  handleLearnMore() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_5__constants_AppUrlConstants__["o" /* EXAMPLES_BLOG */]);
    __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__["a" /* default */].addEvent('examples', 'learn_more', 'examples_dropdown');
  }

  renderEmptyExampleList() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-list--menu empty-list' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-list--label' }, 'No examples added'),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-list--body' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Save responses and associated requests as Examples. '),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'example-response-learn-more',
              type: 'text',
              onClick: this.handleLearnMore }, 'Learn More')),





        this.props.write ?

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
            className: 'add-new-example',
            size: 'small',
            type: 'primary',
            onClick: this.props.onAddExampleClick }, 'Add Example') :





        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-list--permission-denied' }, 'You don\'t have permission to add Examples to this request')));






  }

  renderExampleList() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-list--menu' },

        _.map(this.props.responses, response => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ExampleResponseListItem, {
              key: response.id,
              response: response,
              write: this.props.write,
              onDelete: this.props.onDelete,
              onSelect: this.props.onSelect }));


        }),


        this.props.write &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider divider--space' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'add-new-example example-list',
              type: 'text',
              onClick: this.props.onAddExampleClick }, 'Add Example'))));







  }

  render() {


    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-list--wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
            className: 'no-padding',
            type: 'text',
            onClick: this.handleExampleClick },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, `Examples (${this.props.responses.length})`),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_DownSolidIcon__["a" /* default */], { className: 'caret', style: 'secondary' })),


        this.state.isOpen && (
        _.isEmpty(this.props.responses) ? this.renderEmptyExampleList() : this.renderExampleList())));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_draggable__ = __webpack_require__(1647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_postman_collection__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RequestEditorURLBarContainer__ = __webpack_require__(2337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RequestURLParamsEditorContainer__ = __webpack_require__(2464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RequestHeaderEditorContainer__ = __webpack_require__(2475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__body_RequestBodyEditorContainer__ = __webpack_require__(2476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__RequestAuthEditorContainer__ = __webpack_require__(2487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__RequestTestsEditorContainer__ = __webpack_require__(2503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__RequestPRScriptEditorContainer__ = __webpack_require__(2509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_request_RequestEditorTabs__ = __webpack_require__(2513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_request_RequestEditorTabContents__ = __webpack_require__(2514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_request_RequestEditorTabContent__ = __webpack_require__(2515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__constants_AuthConstants__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__constants_RequesterTabLayoutConstants__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__constants_AppSettingsDefaults__ = __webpack_require__(421);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;



















let


RequestEditorContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      lifecycle: 'idle',
      activeTab: 'auth',
      isBodyEnabled: true,
      isRequestBodyAvailable: false,
      headersCount: 0,
      isPreRequestScriptAvailable: false,
      isTestsAvailable: false,
      isAuthAvailable: false,
      hasErrorInTests: false,
      hasErrorInPRScripts: false,
      paneWidth: pm.settings.getSetting('requesterTabRequestPaneWidth') || __WEBPACK_IMPORTED_MODULE_18__constants_AppSettingsDefaults__["a" /* default */].ui.REQUESTER_TAB_REQUEST_PANE_WIDTH,
      isSnippetsCollapsed: pm.settings.getSetting('scriptSnippetCollapsed') || false };


    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleGenerateCode = this.handleGenerateCode.bind(this);
    this.handleManageCookies = this.handleManageCookies.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleTabMeta = this.handleTabMeta.bind(this);
    this.handleLifeCycleChange = this.handleLifeCycleChange.bind(this);
    this.handlePaneResize = this.handlePaneResize.bind(this);
    this.handleZoomChange = this.handleZoomChange.bind(this);
    this.handleZoomChangeDebounced = _.debounce(this.handleZoomChange, 300);
    this.savePaneWidth = this.savePaneWidth.bind(this);
    this.savePaneWidthDebounced = _.debounce(this.savePaneWidth, 300);
    this.handleSnippetCollapse = this.handleSnippetCollapse.bind(this);
    this.focusUrlBar = this.focusUrlBar.bind(this);
    this.handleCollapseSettingsChange = this.handleCollapseSettingsChange.bind(this);
  }

  handleCollapseSettingsChange() {
    let isSnippetsCollapsed = pm.settings.getSetting('scriptSnippetCollapsed');
    if (isSnippetsCollapsed !== this.state.isSnippetsCollapsed) {
      this.setState({ isSnippetsCollapsed });
    }
  }

  componentWillMount() {
    this.model = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
    this.handleTabMeta();

    pm.uiZoom && pm.uiZoom.on('change', this.handleZoomChangeDebounced);
    window.addEventListener('resize', this.handleZoomChangeDebounced);
    pm.settings.on('setSetting:requesterSidebarWidth', this.handleZoomChangeDebounced);
    pm.settings.on('setSetting:scriptSnippetCollapsed', this.handleCollapseSettingsChange);
    if (this.props.tabMode === 'exampleResponse') {
      this.setActiveTab('headers');
    }
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;

    pm.uiZoom && pm.uiZoom.off('change', this.handleZoomChangeDebounced);
    window.removeEventListener('resize', this.handleZoomChangeDebounced);
    pm.settings.off('setSetting:requesterSidebarWidth', this.handleZoomChangeDebounced);
    pm.settings.off('setSetting:scriptSnippetCollapsed', this.handleCollapseSettingsChange);
  }

  componentWillReceiveProps(nextProps) {
    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
    this.handleTabMeta(nextProps);
    if (nextProps.tabMode !== this.props.tabMode && nextProps.tabMode === 'exampleResponse') {
      this.setActiveTab('headers');
    }
  }

  attachModelListeners() {
    if (!this.model) {
      return;
    }

    this.model.on('change:method', this.handleModelChange);
    this.model.on('change:headerData', this.handleTabMeta);
    this.model.on('change:systemHeaders', this.handleTabMeta);
    this.model.on('change:events', this.handleTabMeta);
    this.model.on('change:lifecycle', this.handleLifeCycleChange);
    this.model.get('body').on('change', this.handleTabMeta);
    this.model.on('change:auth', this.handleTabMeta);
  }

  detachModelListeners() {
    if (!this.model) {
      return;
    }

    this.model.off('change:method', this.handleModelChange);
    this.model.off('change:headerData', this.handleTabMeta);
    this.model.off('change:systemHeaders', this.handleTabMeta);
    this.model.off('change:auth', this.handleTabMeta);
    this.model.off('change:lifecycle', this.handleLifeCycleChange);
    this.model.get('body').off('change', this.handleTabMeta);
  }

  handleScroll() {
    this.refs.urlBarContainer.handleScroll();
  }

  handleModelChange() {
    if (!this.model) {
      return;
    }

    let method = this.model.get('method'),
    isBodyEnabled = __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].isMethodWithBody(method);

    if (isBodyEnabled) {
      !this.state.isBodyEnabled && this.setState({ isBodyEnabled: true });
    } else
    {
      this.state.isBodyEnabled && this.setState({ isBodyEnabled: false });

      this.state.activeTab === 'body' && this.setActiveTab('auth');
    }
  }

  handleTabMeta() {
    if (!this.model) {
      return;
    }

    let requestModel = this.model,
    headers = requestModel.getHeaderData(),
    systemHeaders = requestModel.get('systemHeaders') || [],
    sdkEvents = new __WEBPACK_IMPORTED_MODULE_4_postman_collection__["EventList"]({}, requestModel.get('events')),
    pRScriptEvent = _.head(sdkEvents.listenersOwn('prerequest')),
    testEvent = _.head(sdkEvents.listenersOwn('test')),
    currentAuthHelper = _.get(requestModel.get('auth'), 'type'),
    requestBody = requestModel.get('body');

    const isPreRequestScriptAvailable = !!(_.isFunction(_.get(pRScriptEvent, 'script.toSource')) && pRScriptEvent.script.toSource().trim()),
    isTestsAvailable = !!(_.isFunction(_.get(testEvent, 'script.toSource')) && testEvent.script.toSource().trim());

    let nextState = { isPreRequestScriptAvailable, isTestsAvailable };

    if (!(_.isEmpty(headers) && _.isEmpty(systemHeaders))) {
      let filteredHeaders = _.filter(headers, header => {
        return !(_.isEmpty(header.key) && _.isEmpty(header.value));
      });

      _.assign(nextState, { headersCount: filteredHeaders.length + _.size(systemHeaders) });
    } else
    {
      _.assign(nextState, { headersCount: _.size(headers) + _.size(systemHeaders) });
    }

    if (requestBody) {
      _.assign(nextState, { isRequestBodyAvailable: !_.isEmpty(requestBody.get('data')) });
    }

    _.assign(nextState, { isAuthAvailable: !_.isEmpty(currentAuthHelper) && currentAuthHelper !== __WEBPACK_IMPORTED_MODULE_16__constants_AuthConstants__["t" /* AUTH_TYPE_RAW_NO_AUTH */] });

    this.setState(nextState);
  }

  handleLifeCycleChange() {
    let currentLifeCycle = this.getRequestLifecycle();
    this.setState({ lifecycle: currentLifeCycle });
  }

  setActiveTab(tab) {
    if (tab === this.state.activeTab) {
      return;
    }

    this.setState({ activeTab: tab }, () => {
      if (_.includes(['headers', 'body', 'prscript', 'tests'], tab)) {
        this.refs[tab].focus();
      }
    });
  }

  handleTabSelect(tab) {
    this.setActiveTab(tab);
  }

  handleGenerateCode() {
    pm.mediator.trigger('openSnippetGeneratorModel', this.props.request);
  }

  handleManageCookies() {
    pm.mediator.trigger('showCookieManagementModal');
  }

  getRequestLifecycle() {
    return this.model.get('lifecycle') || 'idle';
  }

  getPaneResizeBounds() {
    let $contentContainer = document.querySelector('.requester-content');

    try {
      let contentContainerWidth = $contentContainer.getBoundingClientRect().width;
      return [480, contentContainerWidth - 500];
    }
    catch (e) {
      return [480, 700];
    }
  }

  handlePaneResize(event, data) {
    let $editor = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.editor);
    if (!$editor) {
      return;
    }
    let paneWidth = data.x - $editor.getBoundingClientRect().left;
    this.setPaneWidth(paneWidth);
  }

  handleZoomChange() {
    if (!this.props.active || this.props.layout !== __WEBPACK_IMPORTED_MODULE_17__constants_RequesterTabLayoutConstants__["b" /* REQUESTER_TAB_LAYOUT_2_COLUMN */]) {
      return;
    }

    let $editor = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.editor);

    if (!$editor) {
      return;
    }
    let editorClientRect = $editor.getBoundingClientRect(),
    paneWidth = editorClientRect.width;

    this.setPaneWidth(paneWidth);
  }

  savePaneWidth(paneWidth) {
    pm.settings.setSetting('requesterTabRequestPaneWidth', paneWidth);
  }

  setPaneWidth(paneWidth) {
    let paneWidthBounds = this.getPaneResizeBounds(),
    boundPaneWidth = paneWidth;

    if (paneWidth <= paneWidthBounds[0]) {
      boundPaneWidth = paneWidthBounds[0];
    } else
    if (paneWidth > paneWidthBounds[1]) {
      boundPaneWidth = paneWidthBounds[1];
    }

    this.savePaneWidthDebounced(boundPaneWidth);
    this.setState({ paneWidth: boundPaneWidth });
  }

  handleSnippetCollapse() {
    this.setState(prevState => {
      return { isSnippetsCollapsed: !prevState.isSnippetsCollapsed };
    }, () => {
      pm.settings.setSetting('scriptSnippetCollapsed', this.state.isSnippetsCollapsed);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.layout !== this.props.layout) {
      this.handleZoomChange();
    }
  }

  focusUrlBar() {
    _.invoke(this, 'refs.urlBarContainer.focus');
  }

  render() {
    let style = {};
    if (this.props.layout === __WEBPACK_IMPORTED_MODULE_17__constants_RequesterTabLayoutConstants__["b" /* REQUESTER_TAB_LAYOUT_2_COLUMN */]) {
      style = { width: this.state.paneWidth + 'px' };
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'request-editor',
          ref: 'editor',
          style: style },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-contents-group' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-contents-group__section-top' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__RequestEditorURLBarContainer__["a" /* default */], _extends({},
            _.pick(this.props, ['request', 'layout', 'tabMode', 'active']), {
              ref: 'urlBarContainer' })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__RequestURLParamsEditorContainer__["a" /* default */], {
              layout: this.props.layout,
              request: this.props.request }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor__tabs-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor__tabs' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_request_RequestEditorTabs__["a" /* default */], _extends({},
                _.pick(this.props, ['request', 'layout', 'tabMode']),
                _.pick(this.state, [
                'activeTab',
                'headersCount',
                'isAuthAvailable',
                'isPreRequestScriptAvailable',
                'isRequestBodyAvailable',
                'isTestsAvailable',
                'requestTabMeta']), {

                  disableBody: !this.state.isBodyEnabled,
                  isPreRequestsScriptsError: this.state.lifecycle === 'PRScriptError',
                  isTestScriptsError: this.state.lifecycle === 'testScriptsError',
                  onSelect: this.handleTabSelect }))),



              this.props.tabMode !== 'exampleResponse' &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor-actions' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                    className: 'request-editor-actions-manage-cookies',
                    onClick: this.handleManageCookies }, 'Cookies'),



                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                    className: 'request-editor-actions-generate-code',
                    onClick: this.handleGenerateCode }, 'Code')))),





          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-contents-group__section-content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor__tab-contents' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_request_RequestEditorTabContents__["a" /* default */], {
                  activeKey: this.state.activeTab },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_request_RequestEditorTabContent__["a" /* default */], { key: 'auth' },
                  this.props.tabMode !== 'exampleResponse' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__RequestAuthEditorContainer__["a" /* default */], _extends({},
                  _.pick(this.props, ['request', 'layout']), {
                    ref: 'auth' }))),



                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_request_RequestEditorTabContent__["a" /* default */], { key: 'headers' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__RequestHeaderEditorContainer__["a" /* default */], _extends({},
                  _.pick(this.props, ['request', 'layout']), {
                    ref: 'headers' }))),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_request_RequestEditorTabContent__["a" /* default */], { key: 'body' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__body_RequestBodyEditorContainer__["a" /* default */], _extends({},
                  _.pick(this.props, ['request', 'layout']), {
                    ref: 'body' }))),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_request_RequestEditorTabContent__["a" /* default */], {
                    className: 'request-script-wrapper',
                    key: 'prscript' },

                  this.props.tabMode !== 'exampleResponse' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__RequestPRScriptEditorContainer__["a" /* default */], _extends({},
                  _.pick(this.props, ['request', 'layout']), {
                    isSnippetsCollapsed: this.state.isSnippetsCollapsed,
                    ref: 'prscript',
                    onSnippetCollapse: this.handleSnippetCollapse }))),



                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_request_RequestEditorTabContent__["a" /* default */], {
                    className: 'request-tests-wrapper',
                    key: 'tests' },

                  this.props.tabMode !== 'exampleResponse' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__RequestTestsEditorContainer__["a" /* default */], _extends({},
                  _.pick(this.props, ['request', 'layout']), {
                    isSnippetsCollapsed: this.state.isSnippetsCollapsed,
                    ref: 'tests',
                    onSnippetCollapse: this.handleSnippetCollapse }))))))),








        this.props.layout === __WEBPACK_IMPORTED_MODULE_17__constants_RequesterTabLayoutConstants__["b" /* REQUESTER_TAB_LAYOUT_2_COLUMN */] &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_draggable__["DraggableCore"], {
            offsetParent: document.body,
            onDrag: this.handlePaneResize },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor-resize-handle' }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEditorURLBarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RequestMethodEditorContainer__ = __webpack_require__(2338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RequestURLEditorContainer__ = __webpack_require__(2340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RequestEditorURLParamsButtonContainer__ = __webpack_require__(2458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RequestEditorSendButtonContainer__ = __webpack_require__(2460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RequestEditorSaveButtonContainer__ = __webpack_require__(2462);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;







let


RequestEditorURLBarContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RequestEditorURLBarContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.isDocked = false;

    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.focus = this.focus.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ 'request-editor__main': true });
  }

  handleResize() {
    let urlBar = this.refs.urlBar;
    if (!this.isDocked || !urlBar) {
      return;
    }

    let urlBarContainer = urlBar.closest('.requester-contents-group__section-top');
    if (urlBarContainer) {
      return;
    }
    let urlBarContainerClientRect = urlBarContainer.getBoundingClientRect(),
    urlBarContainerWidth = urlBarContainerClientRect.width;

    urlBar.style.width = urlBarContainerWidth + 'px';
  }

  handleScroll() {
    let urlBar = this.refs.urlBar,
    urlBarPlaceholder = this.refs.urlBarPlaceholder,
    urlBarContainer = urlBar.closest('.requester-contents-group__section-top'),
    tabContainer = urlBar.closest('.requester-tab-content'),
    urlBarContainerClientRect = urlBarContainer.getBoundingClientRect(),
    urlBarContainerTop = urlBarContainerClientRect.top,
    urlBarContainerWidth = urlBarContainerClientRect.width,
    tabContainerTop = tabContainer.getBoundingClientRect().top,
    infoBar = document.getElementsByClassName('infobar')[0];

    if (urlBarContainerTop < tabContainerTop && this.props.tab !== 'exampleResponse') {
      if (!this.isDocked) {
        let offsetTop = infoBar ? 50 + infoBar.getBoundingClientRect().height : 50;
        urlBar.style.top = tabContainerTop - offsetTop + 'px';
        urlBar.style.width = urlBarContainerWidth + 'px';
        urlBar.classList.add('is-docked');

        // show placeholder
        urlBarPlaceholder.style.display = 'block';
        urlBarPlaceholder.style.height = offsetTop + 10 + 'px';
        this.isDocked = true;
      }
    } else
    {
      urlBar.style.top = 'initial';
      urlBar.style.width = 'initial';
      urlBar.classList.remove('is-docked');

      // hide placeholder
      urlBarPlaceholder.style.display = 'none';
      this.isDocked = false;
    }
  }

  resetUrlScroll() {
    let urlBar = this.refs.urlBar,
    urlBarPlaceholder = this.refs.urlBarPlaceholder,
    tabContainer = urlBar.closest('.requester-tab-content');
    urlBar.style.top = 'initial';
    urlBar.style.width = 'initial';
    tabContainer.scrollTop = 0;
    urlBar.classList.remove('is-docked');

    // hide placeholder
    urlBarPlaceholder.style.display = 'none';
    this.isDocked = false;
  }

  componentWillReceiveProps(nextProps) {
    nextProps.layout !== this.props.layout &&
    this.handleScroll();

    nextProps.tabMode !== this.props.tabMode &&
    nextProps.tabMode === 'exampleResponse' &&
    this.resetUrlScroll();

    nextProps.layout !== this.props.layout &&
    this.resetUrlScroll();

    nextProps.active &&
    nextProps.active !== this.props.active &&
    this.handleResize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    pm.uiZoom && pm.uiZoom.on('change', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    pm.uiZoom && pm.uiZoom.off('change', this.handleResize);
  }

  focus() {
    _.invoke(this, 'refs.url.focus');
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor-url-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getClasses(),
            ref: 'urlBar' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor__main__url-group' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RequestMethodEditorContainer__["a" /* default */], _.pick(this.props, ['request', 'layout'])),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RequestURLEditorContainer__["a" /* default */], _extends({},
            _.pick(this.props, ['request', 'layout', 'tabMode']), {
              ref: 'url' })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__RequestEditorURLParamsButtonContainer__["a" /* default */], _.pick(this.props, ['request', 'layout']))),

          this.props.tabMode !== 'exampleResponse' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor__main__button-group' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__RequestEditorSendButtonContainer__["a" /* default */], _.pick(this.props, ['request', 'layout'])),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__RequestEditorSaveButtonContainer__["a" /* default */], _.pick(this.props, ['request', 'layout'])))),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { ref: 'urlBarPlaceholder' })));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestMethodEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_request_RequestMethodEditor__ = __webpack_require__(2339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
var _class;

let


RequestMethodEditorContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestMethodEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  attachModelListeners() {
    this.model && this.model.on('change:method', this.handleModelChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:method', this.handleModelChange);
  }

  componentWillReceiveProps(nextProps) {
    if (this.model === nextProps.request) {
      return;
    }

    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  handleModelChange() {
    this.setState({ selectedMethod: this.getMethod() });
  }

  getMethod() {
    return this.model.get('method');
  }

  setMethod(method) {
    this.model.set('method', method);
  }

  handleChange(method) {
    !_.isEmpty(method) && this.setMethod(method);
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_request_RequestMethodEditor__["a" /* default */], {
        method: this.state.selectedMethod,
        layout: this.props.layout,
        onChange: this.handleChange }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestMethodEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_RequesterTabLayoutConstants__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_RequestMethodConstants__ = __webpack_require__(1704);
var _class;







let


RequestMethodEditor = __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default()(_class = class RequestMethodEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {


    let upperCasedMethod = this.props.method ? this.props.method.toUpperCase() : 'GET';

    let selectedMethodDisplayName =
    this.props.layout !== __WEBPACK_IMPORTED_MODULE_6__constants_RequesterTabLayoutConstants__["b" /* REQUESTER_TAB_LAYOUT_2_COLUMN */] ?
    upperCasedMethod : __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].getAbbrvMethodName(upperCasedMethod);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-method-editor' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["a" /* Dropdown */], { className: 'request-method-dropdown', onSelect: this.props.onChange },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["b" /* DropdownButton */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, selectedMethodDisplayName))),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], { fluid: this.props.layout === __WEBPACK_IMPORTED_MODULE_6__constants_RequesterTabLayoutConstants__["a" /* REQUESTER_TAB_LAYOUT_1_COLUMN */] },

            _.map(__WEBPACK_IMPORTED_MODULE_7__constants_RequestMethodConstants__["a" /* REQUEST_METHODS */], method => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: method, key: method }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, method));
            })))));





  }}) || _class;


RequestMethodEditor.propTypes = { method: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired };

RequestMethodEditor.defaultProps = { method: 'GET' };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestURLEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_request_RequestURLEditor__ = __webpack_require__(2341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx__ = __webpack_require__(12);
var _class;



let


RequestURLEditorContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestURLEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuggestionsChange = this.handleSuggestionsChange.bind(this);
    this.focus = this.focus.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
    this.handleSuggestionsChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
  }

  attachModelListeners() {
    this.model && this.model.on('change:url', this.handleModelChange);
    this.urlCacheDisposer = Object(__WEBPACK_IMPORTED_MODULE_4_mobx__["e" /* autorun */])(this.handleSuggestionsChange, { delay: 500 });
  }

  detachModelListeners() {
    this.model && this.model.off('change:url', this.handleModelChange);
    this.urlCacheDisposer();
  }

  componentWillReceiveProps(nextProps) {
    if (this.model === nextProps.request) {
      return;
    }

    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  handleModelChange() {
    this.setState({ url: this.getUrl() });
  }

  handleSuggestionsChange() {
    this.setState({ suggestions: this.getSuggestions() });
  }

  getUrl() {
    return this.model.get('url');
  }

  getSuggestions() {
    let urls = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('URLCacheStore').urls;
    return _.map(urls, url => {
      return { value: url };
    });
  }

  focus() {
    _.invoke(this, 'refs.url.focus');
  }

  setUrl(url) {
    this.model.set('url', url);
  }

  handleChange(url) {
    this.setUrl(url);
  }

  handleSubmit() {
    this.props.tabMode !== 'exampleResponse' &&
    this.model && this.model.send('display');
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_request_RequestURLEditor__["a" /* default */], {
        ref: 'url',
        url: this.state.url,
        onChange: this.handleChange,
        onSubmit: this.handleSubmit,
        suggestions: this.state.suggestions }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestURLEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_AutoSuggest_AutoSuggestInput__ = __webpack_require__(1635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__);
var _class;


let


RequestURLEditor = __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default()(_class = class RequestURLEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ 'request-url-editor': true });
  }

  focus() {
    _.invoke(this, 'refs.url.handleFocus');
  }

  render() {

    return (

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-url-editor' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_AutoSuggest_AutoSuggestInput__["a" /* AutoSuggestInput */], {
          enableVariableSuggestions: true,
          tabIndex: 1,
          ref: 'url',
          value: this.props.url,
          onChange: this.props.onChange,
          onSubmit: this.props.onSubmit,
          suggestions: this.props.suggestions,
          placeholder: 'Enter request URL',
          preventEnter: true })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEditorURLParamsButtonContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_request_RequestEditorURLParamsButton__ = __webpack_require__(2459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
var _class;

let


RequestEditorURLParamsButtonContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestEditorURLParamsButtonContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.model = null;

    this.state = { isOpen: false };

    this.toggleURLParamsEditor = this.toggleURLParamsEditor.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request;
  }

  componentWillUnmount() {
    this.model = null;
  }

  componentWillReceiveProps(nextProps) {
    this.model = nextProps.request;
  }

  toggleURLParamsEditor() {
    if (this.state.isOpen) {
      this.hideURLParamsEditor();
    } else
    {
      this.showURLParamsEditor();
    }
  }

  showURLParamsEditor() {
    this.setState({ isOpen: true });
    this.model.trigger('showURLParamsEditor');
  }

  hideURLParamsEditor() {
    this.setState({ isOpen: false });
    this.model.trigger('hideURLParamsEditor');
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_request_RequestEditorURLParamsButton__["a" /* default */], {
        onClick: this.toggleURLParamsEditor,
        isOpen: this.state.isOpen }));


  }}) || _class;

/***/ }),

/***/ 2459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEditorURLParamsButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
var _class;

let


RequestEditorURLParamsButton = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestEditorURLParamsButton extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'request-urlpathvariables-editor-button': true,
      'is-active': this.props.isOpen });

  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getClasses(),
          onClick: this.props.onClick }, 'Params'));


  }}) || _class;

/***/ }),

/***/ 2460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEditorSendButtonContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_request_RequestEditorSendButton__ = __webpack_require__(2461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
var _class;

let


RequestEditorSendButtonContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestEditorSendButtonContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };

    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
  }

  attachModelListeners() {
    this.model && this.model.on('change:lifecycle', this.handleModelChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:lifecycle', this.handleModelChange);
  }

  componentWillReceiveProps(nextProps) {
    if (this.model === nextProps.request) {
      return;
    }

    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  handleModelChange() {
    let lifecycle = this.model.get('lifecycle');
    let isLoading = !_.includes(['idle', 'completed', 'error', 'PRScriptError', 'testScriptsError'], lifecycle);

    this.setState({ isLoading: isLoading });
  }

  handleClick() {
    this.model.send('display');
  }

  handleSelect(value) {
    this.model.send('download');
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_request_RequestEditorSendButton__["a" /* default */], {
        isLoading: this.state.isLoading,
        onClick: this.handleClick,
        onSelect: this.handleSelect }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEditorSendButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__);
var _class;



let


RequestEditorSendButton = __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default()(_class = class RequestEditorSendButton extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'request-editor-send-button': true,
      'is-loading': this.props.isLoading });

  }

  handleClick() {
    !this.props.isLoading && this.props.onClick && this.props.onClick();
  }

  getButtonText() {
    return this.props.isLoading ? 'Sending...' : 'Send';
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["a" /* Dropdown */], { onSelect: this.props.onSelect },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["b" /* DropdownButton */], { dropdownStyle: 'split' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], {
                type: 'custom',
                onClick: this.handleClick },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, this.getButtonText()))),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: 'send-and-download' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Send and Download'))))));




  }}) || _class;

/***/ }),

/***/ 2462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEditorSaveButtonContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_request_RequestEditorSaveButton__ = __webpack_require__(2463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
var _class;

let


RequestEditorSaveButtonContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestEditorSaveButtonContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { isSaveDisabled: false };

    this.handleSave = this.handleSave.bind(this);
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  attachModelListeners() {
    this.model && this.model.on('change:write', this.handleModelChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:write', this.handleModelChange);
  }

  handleModelChange() {
    let write = this.model.get('write') || false;
    this.setState({ isSaveDisabled: !write });
  }

  componentWillReceiveProps(nextProps) {
    if (this.model === nextProps.request) {
      return;
    }

    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
  }

  handleMenuSelect() {
    pm.mediator.trigger('showAddToCollectionModal', this.props.request);
  }

  handleSave() {
    this.model.saveRequest();
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_request_RequestEditorSaveButton__["a" /* default */], {
        saveDisabled: this.state.isSaveDisabled,
        request: this.props.request,
        onSave: this.handleSave,
        onMenuSelect: this.handleMenuSelect }));


  }}) || _class;

/***/ }),

/***/ 2463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEditorSaveButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__);
var _class;



let


RequestEditorSaveButton = __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default()(_class = class RequestEditorSaveButton extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ 'request-editor-save-button': true });
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["a" /* Dropdown */], { onSelect: this.props.onMenuSelect },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["b" /* DropdownButton */], { dropdownStyle: 'split', type: 'custom' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], { onClick: this.props.onSave, disabled: this.props.saveDisabled }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Save'))),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true, className: 'request-editor-save-button-dropdown' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], { refKey: 'add-to-collection' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Save As...'))))));




  }}) || _class;

/***/ }),

/***/ 2464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestURLParamsEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_request_RequestURLParamsEditor__ = __webpack_require__(2465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ModelToSdkTransformer__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_async__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_RuntimeBridge__ = __webpack_require__(260);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;






let

RequestURLParamsEditorContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestURLParamsEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.model = null;

    this.state = {
      isOpen: false,
      params: [],
      pathVariableData: [],
      systemQueryParams: [],
      showColumnsQueryParams: _.get(pm.settings.getSetting('dataEditorColumns'), 'queryParams'),
      showColumnsPathVariables: _.get(pm.settings.getSetting('dataEditorColumns'), 'pathVariables') };


    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleRestrictedParamsChange = this.handleRestrictedParamsChange.bind(this);
    this.handleModelURLChange = this.handleModelURLChange.bind(this);
    this.handleModelURLParamsChange = this.handleModelURLParamsChange.bind(this);
    this.handleModelSystemURLParamsChange = this.handleModelSystemURLParamsChange.bind(this);
    this.handleModelURLPathVariablesChange = this.handleModelURLPathVariablesChange.bind(this);
    this.showURLParamsEditor = this.showURLParamsEditor.bind(this);
    this.hideURLParamsEditor = this.hideURLParamsEditor.bind(this);
    this.handlePathVariableChange = this.handlePathVariableChange.bind(this);
    this.handleParamsChange = this.handleParamsChange.bind(this);
    this.handleQueryParamColumnsToggle = this.handleQueryParamColumnsToggle.bind(this);
    this.handlePathVariableColumnsToggle = this.handlePathVariableColumnsToggle.bind(this);
  }

  focus() {
    this.refs.editor.focus();
  }

  componentWillMount() {
    this.model = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    clearTimeout(this.encodeUrl);
    this.model = null;
  }

  componentWillReceiveProps(nextProps) {
    if (this.model === nextProps.request) {
      return;
    }

    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  attachModelListeners() {
    this.model.on('change:url', this.handleModelURLChange);
    this.model.on('change:auth', this.handleRestrictedParamsChange);
    this.model.on('change:pathVariableData', this.handleModelURLPathVariablesChange);
    this.model.on('change:queryParams', this.handleModelURLParamsChange);
    this.model.on('change:systemQueryParams', this.handleModelSystemURLParamsChange);
    this.model.on('showURLParamsEditor', this.showURLParamsEditor);
    this.model.on('hideURLParamsEditor', this.hideURLParamsEditor);
  }

  detachModelListeners() {
    this.model.off('change:url', this.handleModelURLChange);
    this.model.off('change:auth', this.handleRestrictedParamsChange);
    this.model.off('change:pathVariableData', this.handleModelURLPathVariablesChange);
    this.model.off('change:queryParams', this.handleModelURLParamsChange);
    this.model.off('change:systemQueryParams', this.handleModelSystemURLParamsChange);
    this.model.off('showURLParamsEditor', this.showURLParamsEditor);
    this.model.off('hideURLParamsEditor', this.hideURLParamsEditor);
  }

  handleModelChange() {
    __WEBPACK_IMPORTED_MODULE_6_async___default.a.waterfall([
    this.handleRestrictedParamsChange,
    this.handleModelURLPathVariablesChange,
    this.handleModelURLParamsChange,
    this.handleModelURLChange]);

  }

  handleRestrictedParamsChange(done) {
    let auth = this.model.get('auth'),
    restrictedParams;

    if (!auth) {
      _.isFunction(done) && done();
      return;
    }
    __WEBPACK_IMPORTED_MODULE_7__controllers_RuntimeBridge__["a" /* default */].getAuthHandlerManifest(auth.type, (err, authHandlerManifest) => {
      // bail out for invalid auth
      if (!authHandlerManifest) {
        // make sure we cleanup current restrictedParams in state before bailing out
        return this.setState({ restrictedParams: [] }, () => {
          return _.isFunction(done) && done();
        });
      }

      // extract params that will be added by Auth Handler
      restrictedParams = _.filter(authHandlerManifest.updates, { type: 'url.param' });

      // add restrictedHeaders for this auth to state
      this.setState({ restrictedParams: restrictedParams }, () => {
        _.isFunction(done) && done();
      });
    });
  }

  handleModelURLChange(done) {
    let url = this.model.get('url'),
    queryParams = this.model.get('queryParams'),
    newPathVariables = this.getPathVariablesValues(url),
    newParams = this.getParamValues(url, queryParams);
    this.setPathVariables(newPathVariables);
    this.setParams(newParams, false);
    _.isFunction(done) && done();
  }

  handleModelSystemURLParamsChange(request, systemQueryParams) {
    this.setState({ systemQueryParams });
  }

  setPathVariables(values) {
    this.model.set('pathVariableData', values);
  }

  setParams(values, setUrl) {
    let url = this.model.get('url');
    this.model.set('queryParams', values);
    setUrl && this.model.setUrlParamString(_.cloneDeep(values), false, url);
  }

  handleModelURLPathVariablesChange(done) {
    let pathVariableData = this.model.get('pathVariableData');
    this.setState({ pathVariableData }, () => {
      _.isFunction(done) && done();
    });
  }

  handleModelURLParamsChange(done) {
    let params = this.model.get('queryParams');

    this.setState({ params: _.isArray(params) ? params : [] }, () => {_.isFunction(done) && done();});
  }

  computeParamsWarning(params) {
    let restrictedParams = this.state.restrictedParams;

    // bail out if there are no restricted params
    if (_.isEmpty(restrictedParams)) {
      return params;
    }

    // add warnings to restricted params
    return _.map(params, param => {
      let isRestricted = _.find(restrictedParams, restrictedParam => {
        return restrictedParam.property === param.key;
      }),
      warning = '';

      if (isRestricted) {
        warning = `This is a duplicate URL param and will be overridden by ${param.key} generated by Postman.`;
      }
      return _.assign({}, param, { warning: warning });
    });
  }

  getCurrentPathVariableValue(key) {
    return _.find(this.state.pathVariableData, pathVariable => {
      return pathVariable.key === key;
    });
  }

  getCurrentParamValue(key) {
    return _.find(this.state.params, param => {
      return param.key === key;
    });
  }

  getPathVariablesValues(url) {
    let params = __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].getURLPathVariables(url);
    let retVal = [];
    return _.map(params, param => {
      let currentValue = this.getCurrentPathVariableValue(param);
      if (currentValue) {
        return _.assign(currentValue, { key: param });
      } else
      {
        return _.assign({
          key: param,
          value: '' });

      }
    });
  }

  getParamValues(url, queryParams) {
    return __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].getUrlVarsWithDescription(url, queryParams);
  }

  handlePathVariableChange(values) {
    this.setPathVariables(values);
  }

  handleParamsChange(values) {
    this.setParams(values, true);
  }

  showURLParamsEditor() {
    !this.state.isOpen && this.setState({ isOpen: true }, this.focus);
  }

  hideURLParamsEditor() {
    this.state.isOpen && this.setState({ isOpen: false });
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'request-urlparams-editor-container': true,
      'is-hidden': !this.state.isOpen });

  }

  handleQueryParamColumnsToggle(columns) {
    this.setState({ showColumnsQueryParams: columns });
    pm.settings.setSetting('dataEditorColumns', _extends({},
    pm.settings.getSetting('dataEditorColumns'), {
      queryParams: columns }));

  }

  handlePathVariableColumnsToggle(columns) {
    this.setState({ showColumnsPathVariables: columns });
    pm.settings.setSetting('dataEditorColumns', _extends({},
    pm.settings.getSetting('dataEditorColumns'), {
      pathVariables: columns }));

  }

  render() {
    var params = this.computeParamsWarning(this.state.params);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_request_RequestURLParamsEditor__["a" /* default */], {
          layout: this.props.layout,
          onParamsChange: this.handleParamsChange,
          systemQueryParams: this.state.systemQueryParams,
          onPathVariableColumnsToggle: this.handlePathVariableColumnsToggle,
          onPathVariablesChange: this.handlePathVariableChange,
          onQueryParamColumnsToggle: this.handleQueryParamColumnsToggle,
          params: params,
          pathVariableData: this.state.pathVariableData,
          ref: 'editor',
          showColumnsPathVariables: this.state.showColumnsPathVariables,
          showColumnsQueryParams: this.state.showColumnsQueryParams })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestURLParamsEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyvalue_editor_KeyValueEditor__ = __webpack_require__(1644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;

let


RequestURLParamsEditor = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestURLParamsEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor(props) {
    super(props);

    this.handleURLParamChange = this.handleURLParamChange.bind(this);
  }

  focus() {
    this.refs.paramEditor.focus();
  }

  handleURLParamChange(values) {
    let queryParams = _.filter(values, v => {return !v.system;});
    this.props.onParamsChange && this.props.onParamsChange(queryParams);
  }

  render() {

    let systemQueryParams = _.map(this.props.systemQueryParams, p => {
      return _extends({},
      p, {
        system: true,
        message: 'This temporary URL param is generated by Postman and is not saved with your request.',
        enabled: true,
        disableEdit: true });

    });
    let allParams = _.concat(systemQueryParams, this.props.params);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-urlparams-editor' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-urlparams-editor__group' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-urlparams-editor__path-variables' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__keyvalue_editor_KeyValueEditor__["a" /* default */], {
              enableVariableSuggestions: true,
              layout: this.props.layout,
              disableMultilineKey: true,
              disableMultilineValue: true,
              allowedColumns: ['key', 'value', 'description'],
              values: this.props.pathVariableData,
              onChange: this.props.onPathVariablesChange,
              showColumns: this.props.showColumnsQueryParams,
              onColumnToggle: this.props.onQueryParamColumnsToggle,
              disableSorting: true,
              disableCreate: true,
              disableDelete: true,
              disableToggle: true,
              nonEditableKeys: true })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-urlparams-editor__params' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__keyvalue_editor_KeyValueEditor__["a" /* default */], {
              enableVariableSuggestions: true,
              layout: this.props.layout,
              disableMultilineKey: true,
              disableMultilineValue: true,
              ref: 'paramEditor',
              allowedColumns: ['key', 'value', 'description'],
              values: allParams,
              onChange: this.handleURLParamChange,
              showColumns: this.props.showColumnsPathVariables,
              onColumnToggle: this.props.onPathVariableColumnsToggle })))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestHeaderEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_keyvalue_editor_KeyValueEditor__ = __webpack_require__(1644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_RuntimeBridge__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_ModelToSdkTransformer__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_HeaderPresetController__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_AutoSuggestUtil__ = __webpack_require__(1752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(11);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;







let

RequestHeaderEditorContainer = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* observer */])(_class = class RequestHeaderEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
      showColumns: _.get(pm.settings.getSetting('dataEditorColumns'), 'headers') };


    this.handleHeaderModelChange = this.handleHeaderModelChange.bind(this);
    this.handleRestrictedHeadersChange = this.handleRestrictedHeadersChange.bind(this);
    this.handleSystemHeaderModelChange = this.handleSystemHeaderModelChange.bind(this);
    this.handleHeadersChange = this.handleHeadersChange.bind(this);
    this.handleManageHeaderPresets = this.handleManageHeaderPresets.bind(this);
    this.handleHeaderPresetSelect = this.handleHeaderPresetSelect.bind(this);
    this.handleColumnToggle = this.handleColumnToggle.bind(this);
  }

  componentWillMount() {
    this.requestModel = this.props.request;
    this.attachRequestModelListeners();
    this.handleRestrictedHeadersChange();
    this.handleHeaderModelChange();
    this.setNewColumns(_.get(pm.settings.getSetting('dataEditorColumns'), 'headers'));
  }

  componentWillUnmount() {
    this.detachRequestModelListeners();
    this.requestModel = null;
  }

  focus() {
    this.refs.activeHeaders.focus();
  }

  attachRequestModelListeners() {
    this.requestModel && this.requestModel.on('change:headerData', this.handleHeaderModelChange);
    this.requestModel && this.requestModel.on('change:auth', this.handleRestrictedHeadersChange);
    this.requestModel && this.requestModel.on('change:systemHeaders', this.handleSystemHeaderModelChange);
  }

  detachRequestModelListeners() {
    this.requestModel && this.requestModel.off('change:headerData', this.handleHeaderModelChange);
    this.requestModel && this.requestModel.off('change:auth', this.handleRestrictedHeadersChange);
    this.requestModel && this.requestModel.off('change:systemHeaders', this.handleSystemHeaderModelChange);
  }

  componentWillReceiveProps(nextProps) {
    this.detachRequestModelListeners();
    this.requestModel = nextProps.request;
    this.attachRequestModelListeners();
    this.handleHeaderModelChange();
  }

  handleHeaderModelChange() {
    this.setState({ headers: this.getHeaders() });
  }

  handleSystemHeaderModelChange(model, values) {
    let userHeaders = this.state.headers,
    systemHeaders = _.map(values, h => {
      return _extends({},
      h, {
        system: true });

    }),
    headers = _.concat(systemHeaders, userHeaders);

    this.setState({ headers });
  }

  handleRestrictedHeadersChange() {
    let auth = this.requestModel.get('auth'),
    restrictedHeaders;

    auth && __WEBPACK_IMPORTED_MODULE_3__controllers_RuntimeBridge__["a" /* default */].getAuthHandlerManifest(auth.type, (err, authHandlerManifest) => {
      // bail out for invalid auth
      if (!authHandlerManifest) {
        // make sure we cleanup current restrictedHeaders in state before bailing out
        this.setState({ restrictedHeaders: [] });
        return;
      }

      // extract headers that will be added by Auth Handler
      restrictedHeaders = _.filter(authHandlerManifest.updates, { type: 'header' });

      // add restrictedHeaders for this auth to state
      this.setState({ restrictedHeaders: restrictedHeaders });
    });
  }

  getHeaders() {
    let userHeaders = this.computeHeadersWarning(this.requestModel.getHeaderData() || []),
    systemHeaders = _.map(this.requestModel.get('systemHeaders'), h => {
      return _extends({},
      h, {
        system: true });

    });

    return _.concat(systemHeaders, userHeaders);
  }

  setHeaders(headers) {
    if (!this.requestModel) {
      return;
    }
    this.requestModel.set({
      headerData: headers,
      headers: headers });

  }

  handleHeadersChange(headers) {
    let newHeaders = [];
    _.forEach(headers, header => {
      if (!header) {
        return;
      }

      // this is autocomplete selection for header presets
      // @todo: move auto complete selection out of field changes
      if (header.key && header.key.category === 'Header presets') {
        // should never happen
        if (!header.key.id) {return;}

        return __WEBPACK_IMPORTED_MODULE_6__modules_controllers_HeaderPresetController__["a" /* default */].
        get({ id: header.key.id }).
        then(preset => {
          // add headers from header preset to headers;
          this.setHeaders(_.concat(newHeaders, preset.headers));
        });
      } else
      if (header.system) {
        // do nothing
      } else
      {
        newHeaders.push(header);
      }
    });

    this.setHeaders(newHeaders);
  }

  computeHeadersWarning(headers) {
    let restrictedHeaders = this.state.restrictedHeaders;

    // bail out if there are no restricted headers
    if (_.isEmpty(restrictedHeaders)) {
      return headers;
    }

    // add warnings to restricted headers
    return _.map(headers, header => {
      let isRestricted = _.find(restrictedHeaders, restrictedHeader => {
        // headers are not case sensitive
        return _.lowerCase(restrictedHeader.property) === _.lowerCase(header.key);
      }),
      warning = '';

      if (isRestricted) {
        warning = `This is a duplicate header and will be overridden by the ${header.key} header generated by Postman.`;
      }
      return _.assign({}, header, { warning: warning });
    });
  }

  handleHeaderPresetSelect(id) {
    __WEBPACK_IMPORTED_MODULE_6__modules_controllers_HeaderPresetController__["a" /* default */].get({ id }).then(preset => {
      if (!preset) {
        return;
      }

      let currentHeaders = this.state.headers,
      newHeaders = _.union(currentHeaders, preset.headers);

      this.setHeaders(newHeaders);
    });

  }

  handleManageHeaderPresets() {
    pm.mediator.trigger('showManageHeaderPresetModal');
  }

  handleColumnToggle(columns) {
    this.setNewColumns(columns);
    pm.settings.setSetting('dataEditorColumns', _extends({},
    pm.settings.getSetting('dataEditorColumns'), {
      headers: columns }));

  }

  setNewColumns(columns) {
    this.setState({ showColumns: columns });
  }

  render() {

    let headers = _.map(this.state.headers, h => {
      if (h.system) {
        return _extends({},
        h, {
          message: 'This temporary header is generated by Postman and is not saved with your request.',
          enabled: true,
          disableEdit: true });

      } else
      {
        return h;
      }
    });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-header-editor-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-header-editor' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_keyvalue_editor_KeyValueEditor__["a" /* default */], {
            disableMultilineKey: true,
            disableMultilineValue: true,
            enableVariableSuggestions: true,
            ref: 'activeHeaders',
            layout: this.props.layout,
            allowedColumns: ['key', 'value', 'description'],
            showColumns: this.state.showColumns,
            values: headers,
            keySuggestions: Object(__WEBPACK_IMPORTED_MODULE_7__utils_AutoSuggestUtil__["a" /* getKeySuggestions */])(Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('HeaderPreset')['headerPresetsForAutoComplete']),
            valueSuggestions: Object(__WEBPACK_IMPORTED_MODULE_7__utils_AutoSuggestUtil__["b" /* getValueSuggestions */])(),
            onChange: this.handleHeadersChange,
            presets: Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').headerPresets,
            onColumnToggle: this.handleColumnToggle,
            onManagePresets: this.handleManageHeaderPresets,
            onPresetSelect: this.handleHeaderPresetSelect }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBodyEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_RuntimeBridge__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ModelToSdkTransformer__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RequestBodyFormDataEditorContainer__ = __webpack_require__(2477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RequestBodyURLEncodedEditorContainer__ = __webpack_require__(2479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RequestBodyRawEditorContainer__ = __webpack_require__(2481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RequestBodyBinaryEditorContainer__ = __webpack_require__(2483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_request_body_RequestBodyTypeSelector__ = __webpack_require__(2485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_request_body_RequestBodyRawLanguageSelector__ = __webpack_require__(2486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__ = __webpack_require__(1907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__ = __webpack_require__(1908);
var _class;

















let RawLanguageHeadersContentTypeMap = {};
RawLanguageHeadersContentTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["a" /* REQUEST_BODY_RAW_LANGUAGE_HTML */]] = 'text/html';
RawLanguageHeadersContentTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["d" /* REQUEST_BODY_RAW_LANGUAGE_TEXT */]] = 'text';
RawLanguageHeadersContentTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["e" /* REQUEST_BODY_RAW_LANGUAGE_TEXT_PLAIN */]] = 'text/plain';
RawLanguageHeadersContentTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["c" /* REQUEST_BODY_RAW_LANGUAGE_JSON */]] = 'application/json';
RawLanguageHeadersContentTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["b" /* REQUEST_BODY_RAW_LANGUAGE_JAVASCRIPT */]] = 'application/javascript';
RawLanguageHeadersContentTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["g" /* REQUEST_BODY_RAW_LANGUAGE_XML_TEXT */]] = 'text/xml';
RawLanguageHeadersContentTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["f" /* REQUEST_BODY_RAW_LANGUAGE_XML_APPLICATION */]] = 'application/xml';

let RawLanguageEditorTypeMap = {};
RawLanguageEditorTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["a" /* REQUEST_BODY_RAW_LANGUAGE_HTML */]] = 'text';
RawLanguageEditorTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["d" /* REQUEST_BODY_RAW_LANGUAGE_TEXT */]] = 'text';
RawLanguageEditorTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["e" /* REQUEST_BODY_RAW_LANGUAGE_TEXT_PLAIN */]] = 'text';
RawLanguageEditorTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["c" /* REQUEST_BODY_RAW_LANGUAGE_JSON */]] = 'postman_json';
RawLanguageEditorTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["b" /* REQUEST_BODY_RAW_LANGUAGE_JAVASCRIPT */]] = 'javascript';
RawLanguageEditorTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["g" /* REQUEST_BODY_RAW_LANGUAGE_XML_TEXT */]] = 'xml';
RawLanguageEditorTypeMap[__WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["f" /* REQUEST_BODY_RAW_LANGUAGE_XML_APPLICATION */]] = 'xml';

let RequestBodyModeContentTypeMap = {};
RequestBodyModeContentTypeMap[__WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["c" /* REQUEST_BODY_TYPE_FORM_URLENCODED */]] = 'application/x-www-form-urlencoded';let


RequestBodyEditorContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestBodyEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      currentLanguage: __WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["d" /* REQUEST_BODY_RAW_LANGUAGE_TEXT */],
      systemBodyParams: {},
      dataHolderObject: {
        params: [],
        urlencoded: [],
        raw: '',
        binary: [] },

      restrictedParams: {} };


    this.setInitialRawLanguage = this.setInitialRawLanguage.bind(this);
    this.handleDataModeChange = this.handleDataModeChange.bind(this);
    this.handleRawLanguageChange = this.handleRawLanguageChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleHeadersChange = this.handleHeadersChange.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleBeautify = this.handleBeautify.bind(this);

    this.handleSystemBodyParamsChange = this.handleSystemBodyParamsChange.bind(this);

    this.handleFormDataChange = this.handleBodyDataChange.bind(this, __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["b" /* REQUEST_BODY_TYPE_FORM_DATA */]);
    this.handleFormUrlencodedDataChange = this.handleBodyDataChange.bind(this, __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["c" /* REQUEST_BODY_TYPE_FORM_URLENCODED */]);
    this.handleRawDataChange = this.handleBodyDataChange.bind(this, __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["d" /* REQUEST_BODY_TYPE_RAW */]);
    this.handleBinaryDataChange = this.handleBodyDataChange.bind(this, __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["a" /* REQUEST_BODY_TYPE_BINARY */]);

    this.computeParamsWarning = this.computeParamsWarning.bind(this);
    this.handleRestrictedParamsChange = this.handleRestrictedParamsChange.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request.get('body');
    this.requestModel = this.props.request;
    this.attachModelListeners();
    this.handleRestrictedParamsChange();
    this.handleDataModeChange();
    this.handleDataChange();
  }

  componentDidMount() {
    this.setInitialRawLanguage();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
    this.requestModel = null;
  }

  attachModelListeners() {
    this.model && this.model.on('change:systemBodyParams', this.handleSystemBodyParamsChange);
    this.model && this.model.on('change:dataMode', this.handleDataModeChange);
    this.model && this.model.on('change:data', this.handleDataChange);
    this.requestModel && this.requestModel.on('change:headerData', this.handleHeadersChange);
    this.requestModel && this.requestModel.on('change:auth', this.handleRestrictedParamsChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:dataMode', this.handleDataModeChange);
    this.model && this.model.off('change:systemBodyParams', this.handleSystemBodyParamsChange);
    this.model && this.model.off('change:data', this.handleDataChange);
    this.requestModel && this.requestModel.off('change:headerData', this.handleHeadersChange);
    this.requestModel && this.requestModel.off('change:auth', this.handleRestrictedParamsChange);
  }

  componentWillReceiveProps(nextProps) {
    if (this.model === nextProps.request.get('body')) {
      return;
    }
    this.detachModelListeners();
    this.model = nextProps.request.get('body');
    this.requestModel = nextProps.request;
    this.attachModelListeners();
    this.handleRestrictedParamsChange();
    this.handleSystemBodyParamsChange();
    this.handleDataModeChange();
    this.handleHeadersChange();
    this.handleDataChange();
  }

  handleBeautify() {
    this.requestModel && this.requestModel.beautifyBody();
  }

  setInitialRawLanguage() {
    let savedLanguage = this.model.get('language');
    let savedLanguageKey = _.findKey(RawLanguageHeadersContentTypeMap, function (item, itemKey) {
      return item === savedLanguage;
    });
    this.setState({ currentLanguage: savedLanguageKey || __WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["d" /* REQUEST_BODY_RAW_LANGUAGE_TEXT */] });
  }

  handleHeadersChange() {
    let body = this.model,
    contentType = this.requestModel.getHeaderValue('Content-Type'),
    editorMode = 'text',
    language = 'text';

    if (contentType) {
      if (contentType.search(/json/i) !== -1 || contentType.search(/javascript/i) !== -1) {
        editorMode = 'javascript';
        language = contentType;
      } else
      if (contentType.search(/xml/i) !== -1) {
        editorMode = 'xml';
        language = contentType;
      } else
      if (contentType.search(/html/i) !== -1) {
        editorMode = 'xml';
        language = contentType;
      } else
      {
        editorMode = 'text';
        language = 'text';
      }
    }

    // handles "application/json; encoding='utf-8'"
    let semicolonPosition = language.indexOf(';');
    if (semicolonPosition !== -1) {
      language = language.substring(0, semicolonPosition);
    }

    body.set('editorMode', editorMode);
    body.set('language', language);
    let languageFormatted = _.findKey(RawLanguageHeadersContentTypeMap, function (item) {
      return item === language;
    });
    this.setState({ currentLanguage: languageFormatted || __WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["d" /* REQUEST_BODY_RAW_LANGUAGE_TEXT */] });
  }

  handleDataChange() {
    let paramType = this.getBodyType(),
    tempDataObject = _.clone(this.state.dataHolderObject);

    tempDataObject[paramType] = paramType === __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["d" /* REQUEST_BODY_TYPE_RAW */] || paramType === __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["a" /* REQUEST_BODY_TYPE_BINARY */] ?
    this.getModelData() : this.getArrayModelData();
    this.setState({ dataHolderObject: tempDataObject }, () => {
      if (paramType === __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["d" /* REQUEST_BODY_TYPE_RAW */]) {
        this.focus();
      }
    });
  }

  handleDataModeChange() {
    let paramType = this.getBodyType();
    this.setState({ currentBodyType: paramType }, this.focus);
  }

  handleRestrictedParamsChange() {
    let auth = this.requestModel.get('auth'),
    restrictedParams = {};

    auth && __WEBPACK_IMPORTED_MODULE_4__controllers_RuntimeBridge__["a" /* default */].getAuthHandlerManifest(auth.type, (err, authHandlerManifest) => {
      // bail out for invalid auth
      if (!authHandlerManifest) {
        // make sure we cleanup current restrictedParams in state before bailing out
        this.setState({ restrictedParams: {} });
      }

      // extract urlencoded params that will be added by Auth Handler
      restrictedParams.urlencoded = _.filter(authHandlerManifest.updates, { type: 'body.urlencoded' });

      // extract formdata params that will be added by Auth Handler
      restrictedParams.formdata = _.filter(authHandlerManifest.updates, { type: 'body.formdata' });

      // add restrictedHeaders for this auth to state
      this.setState({ restrictedParams: restrictedParams });
    });
  }

  computeParamsWarning(body) {
    let restrictedParams = this.state.restrictedParams,
    appToRuntimeMap = {
      [__WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["b" /* REQUEST_BODY_TYPE_FORM_DATA */]]: 'formdata',
      [__WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["c" /* REQUEST_BODY_TYPE_FORM_URLENCODED */]]: 'urlencoded' },

    appParamType = this.getBodyType(),
    runtimeParamType = appToRuntimeMap[appParamType],
    restrictedParamsForType,
    paramsWithWarning;

    // if request body is neither formdata or urlencoded, otherwise there is no need to compute warnings
    if (!runtimeParamType) {
      return body;
    }

    // extract restricted params
    restrictedParamsForType = restrictedParams[runtimeParamType];

    // bail out if there are no restricted params
    if (_.isEmpty(restrictedParamsForType)) {
      return body;
    }

    // add warnings to restricted params
    paramsWithWarning = _.map(body[appParamType], param => {
      let isRestricted = _.find(restrictedParamsForType, restrictedParam => {
        return restrictedParam.property === param.key;
      }),
      warning = '';

      if (isRestricted) {
        warning = `This is a duplicate body parameter and will be overridden by ${param.key} generated by Postman.`;
      }
      return _.assign({}, param, { warning: warning });
    });

    return { [appParamType]: paramsWithWarning };
  }

  getArrayModelData() {
    let data = this.model.get('data');

    return _.isArray(data) ? data : [];
  }

  getModelData() {
    return this.model.get('data');
  }

  getBodyType() {
    return this.model.get('dataMode') || __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["b" /* REQUEST_BODY_TYPE_FORM_DATA */];
  }

  setBodyType(mode) {
    this.model.set('dataMode', mode);
  }

  handleTypeChange(mode) {
    this.setBodyType(mode);
    this.model.set('data', this.state.dataHolderObject[mode]);
    if (RequestBodyModeContentTypeMap[mode]) {
      this.requestModel.setHeader('Content-Type', RequestBodyModeContentTypeMap[mode]);
    }
  }

  handleRawLanguageChange(language) {
    this.setState({ currentLanguage: language || __WEBPACK_IMPORTED_MODULE_13__constants_RequestBodyRawLanguageConstants__["d" /* REQUEST_BODY_RAW_LANGUAGE_TEXT */] });
    this.model.set('language', RawLanguageHeadersContentTypeMap[language]);
    this.requestModel.setHeader('Content-Type', RawLanguageHeadersContentTypeMap[language]);
  }

  handleBodyDataChange(dataType, data) {
    if (_.isEmpty(this.model)) {
      return;
    }
    let tempDataObject = _.clone(this.state.dataHolderObject);
    if (dataType != __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["a" /* REQUEST_BODY_TYPE_BINARY */]) {
      tempDataObject[dataType] = data;
      this.setState({ dataHolderObject: tempDataObject });
      this.model.set('data', data);

      if (dataType === __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["b" /* REQUEST_BODY_TYPE_FORM_DATA */]) {
        this.model.storeFiles(data);
      }
    } else
    {
      tempDataObject[dataType] = '';
      this.setState({ dataHolderObject: tempDataObject });

      if (!data || !data[0]) {
        this.model.set({
          data: null,
          file: null });

        return;
      }

      let path = data[0].path;
      this.model.set({
        data: null,
        file: path });

    }
  }

  handleSystemBodyParamsChange() {
    this.setState({ systemBodyParams: this.model.get('systemBodyParams') || {} });
  }

  getEditorWrapperClasses(editor) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'request-body-editor-wrapper': true,
      'request-body-formdata-editor-wrapper': editor === __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["b" /* REQUEST_BODY_TYPE_FORM_DATA */],
      'request-body-urlencoded-editor-wrapper': editor === __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["c" /* REQUEST_BODY_TYPE_FORM_URLENCODED */],
      'request-body-raw-editor-wrapper': editor === __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["d" /* REQUEST_BODY_TYPE_RAW */],
      'request-body-binary-editor-wrapper': editor === __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["a" /* REQUEST_BODY_TYPE_BINARY */],
      'is-hidden': this.state.currentBodyType !== editor });

  }

  focus() {
    let focusElement = document.activeElement.closest('.requester-builder');
    if (!focusElement || this.state.currentBodyType === __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["a" /* REQUEST_BODY_TYPE_BINARY */]) {
      return;
    }
    switch (this.state.currentBodyType) {
      case __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["b" /* REQUEST_BODY_TYPE_FORM_DATA */]:
        this.refs.form.focus();
        break;
      case __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["c" /* REQUEST_BODY_TYPE_FORM_URLENCODED */]:
        this.refs.urlencoded.focus();
        break;
      case __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["d" /* REQUEST_BODY_TYPE_RAW */]:
        this.refs.raw.focus();
        break;}


  }

  render() {

    let dataObject = this.computeParamsWarning(this.state.dataHolderObject);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-body-editor-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-body-type-selector-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_request_body_RequestBodyTypeSelector__["a" /* default */], {
            value: this.state.currentBodyType,
            onChange: this.handleTypeChange }),


          this.state.currentBodyType === __WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["d" /* REQUEST_BODY_TYPE_RAW */] &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_request_body_RequestBodyRawLanguageSelector__["a" /* default */], {
            activeLanguage: this.state.currentLanguage,
            value: this.state.rawLanguage,
            onChange: this.handleRawLanguageChange })),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-body-editors' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getEditorWrapperClasses(__WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["b" /* REQUEST_BODY_TYPE_FORM_DATA */]) },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__RequestBodyFormDataEditorContainer__["a" /* default */], {
              data: dataObject[__WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["b" /* REQUEST_BODY_TYPE_FORM_DATA */]],
              systemBodyParams: _.get(this.state, 'systemBodyParams.formdata'),
              layout: this.props.layout,
              onChange: this.handleFormDataChange,
              ref: 'form' })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getEditorWrapperClasses(__WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["c" /* REQUEST_BODY_TYPE_FORM_URLENCODED */]) },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__RequestBodyURLEncodedEditorContainer__["a" /* default */], {
              data: dataObject[__WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["c" /* REQUEST_BODY_TYPE_FORM_URLENCODED */]],
              systemBodyParams: _.get(this.state, 'systemBodyParams.urlencoded'),
              layout: this.props.layout,
              onChange: this.handleFormUrlencodedDataChange,
              ref: 'urlencoded' })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getEditorWrapperClasses(__WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["d" /* REQUEST_BODY_TYPE_RAW */]) },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__RequestBodyRawEditorContainer__["a" /* default */], {
              data: dataObject[__WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["d" /* REQUEST_BODY_TYPE_RAW */]],
              language: RawLanguageEditorTypeMap[this.state.currentLanguage],
              layout: this.props.layout,
              ref: 'raw',
              onChange: this.handleRawDataChange,
              onBeautify: this.handleBeautify })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getEditorWrapperClasses(__WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["a" /* REQUEST_BODY_TYPE_BINARY */]) },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__RequestBodyBinaryEditorContainer__["a" /* default */], {
              data: dataObject[__WEBPACK_IMPORTED_MODULE_12__constants_RequestBodyTypeConstants__["a" /* REQUEST_BODY_TYPE_BINARY */]],
              layout: this.props.layout,
              onChange: this.handleBinaryDataChange })))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBodyFormDataEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_request_body_RequestBodyFormDataEditor__ = __webpack_require__(2478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;

let



RequestBodyFormDataEditorContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestBodyFormDataEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { showColumns: _.get(pm.settings.getSetting('dataEditorColumns'), 'formData') };
    this.handleColumnToggle = this.handleColumnToggle.bind(this);
  }

  focus() {
    this.refs.editor.focus();
  }

  handleColumnToggle(columns) {
    this.setState({ showColumns: columns });
    pm.settings.setSetting('dataEditorColumns', _extends({},
    pm.settings.getSetting('dataEditorColumns'), {
      formData: columns }));

  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_request_body_RequestBodyFormDataEditor__["a" /* default */], {
        values: this.props.data,
        systemValues: this.props.systemBodyParams,
        onChange: this.props.onChange,
        showColumns: this.state.showColumns,
        onColumnToggle: this.handleColumnToggle,
        layout: this.props.layout,
        ref: 'editor' }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBodyFormDataEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyvalue_editor_KeyValueEditor__ = __webpack_require__(1644);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

let

RequestBodyFormDataEditor = class RequestBodyFormDataEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleFormDataParamsChange = this.handleFormDataParamsChange.bind(this);
  }

  focus() {
    this.refs.KeyValueEditor.focus();
  }

  handleFormDataParamsChange(values) {
    let params = _.reject(values, 'system');
    this.props.onChange && this.props.onChange(params);
  }

  render() {

    let systemParams = _.map(this.props.systemValues, value => {
      return _extends({},
      value, {
        system: true,
        message: 'This temporary body parameter is generated by Postman and is not saved with your request.',
        enabled: true,
        disableEdit: true });

    }),
    allParams = _.concat(systemParams, this.props.values);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-body-formdata-editor' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__keyvalue_editor_KeyValueEditor__["a" /* default */], {
          enableVariableSuggestions: true,
          layout: this.props.layout,
          allowedColumns: ['key', 'value', 'description'],
          values: allParams,
          editor: this.props.activeKeyValueEditor,
          uniqueKeys: true,
          enableFiles: true,
          onChange: this.handleFormDataParamsChange,
          showColumns: this.props.showColumns,
          onColumnToggle: this.props.onColumnToggle,
          ref: 'KeyValueEditor' })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBodyURLEncodedEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_request_body_RequestBodyURLEncodedEditor__ = __webpack_require__(2480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;

let


RequestBodyURLEncodedEditorContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestBodyURLEncodedEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { showColumns: _.get(pm.settings.getSetting('dataEditorColumns'), 'formUrlEncoded') };
    this.handleColumnToggle = this.handleColumnToggle.bind(this);
  }

  focus() {
    this.refs.editor.focus();
  }

  handleColumnToggle(columns) {
    this.setState({ showColumns: columns });
    pm.settings.setSetting('dataEditorColumns', _extends({},
    pm.settings.getSetting('dataEditorColumns'), {
      formUrlEncoded: columns }));

  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_request_body_RequestBodyURLEncodedEditor__["a" /* default */], {
        values: this.props.data,
        systemValues: this.props.systemBodyParams,
        onChange: this.props.onChange,
        showColumns: this.state.showColumns,
        onColumnToggle: this.handleColumnToggle,
        layout: this.props.layout,
        ref: 'editor' }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBodyURLEncodedEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyvalue_editor_KeyValueEditor__ = __webpack_require__(1644);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
let

RequestBodyURLEncodedEditor = class RequestBodyURLEncodedEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleUrlencodedParamChange = this.handleUrlencodedParamChange.bind(this);
  }

  focus() {
    this.refs.KeyValueEditor.focus();
  }

  handleUrlencodedParamChange(values) {
    let params = _.reject(values, 'system');
    this.props.onChange && this.props.onChange(params);
  }

  render() {

    let systemParams = _.map(this.props.systemValues, value => {
      return _extends({},
      value, {
        system: true,
        message: 'This temporary body parameter is generated by Postman and is not saved with your request.',
        enabled: true,
        disableEdit: true });

    }),
    allParams = _.concat(systemParams, this.props.values);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-body-urlencoded-editor' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__keyvalue_editor_KeyValueEditor__["a" /* default */], {
          enableVariableSuggestions: true,
          layout: this.props.layout,
          allowedColumns: ['key', 'value', 'description'],
          values: allParams,
          editor: this.props.activeKeyValueEditor,
          onChange: this.handleUrlencodedParamChange,
          showColumns: this.props.showColumns,
          onColumnToggle: this.props.onColumnToggle,
          ref: 'KeyValueEditor' })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBodyRawEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_request_body_RequestBodyRawEditor__ = __webpack_require__(2482);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;

let


RequestBodyRawEditorContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RequestBodyRawEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { fontSize: 12 };

    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    this.refreshEditor = this.refreshEditor.bind(this);
  }

  componentWillMount() {
    this.attachModelListeners();
    this.handleFontSizeChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
  }

  attachModelListeners() {
    pm.settings.on('setSetting:responseFontSize', this.handleFontSizeChange);
    pm.settings.on('setSetting:requesterTabLayout', this.refreshEditor);
    pm.settings.on('setSetting:requesterTabRequestPaneWidth', this.refreshEditor);
    pm.settings.on('setSetting:requesterTabLayout', this.refreshEditor);
    pm.mediator.on('themeChange', this.refreshEditor);
  }

  detachModelListeners() {
    pm.settings.off('setSetting:responseFontSize', this.handleFontSizeChange);
    pm.settings.off('setSetting:requesterTabLayout', this.refreshEditor);
    pm.settings.off('setSetting:requesterTabRequestPaneWidth', this.refreshEditor);
    pm.settings.off('setSetting:requesterTabLayout', this.refreshEditor);
    pm.mediator.off('themeChange', this.refreshEditor);
  }

  focus() {
    this.refs.editor.focus();
  }

  refreshEditor() {
    _.invoke(this, 'refs.editor.refresh');
  }

  handleFontSizeChange() {
    let fontSize = pm.settings.getSetting('responseFontSize');

    if (typeof fontSize === 'string') {
      try {
        fontSize = parseInt(fontSize);
      }
      catch (e) {
        fontSize = 12;
      }
    }

    if (this.state.fontSize !== fontSize) {
      this.setState({ fontSize: fontSize }, () => {
        this.refreshEditor();
      });
    }
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_request_body_RequestBodyRawEditor__["a" /* default */], _extends({},
      _.pick(this.props, [
      'layout',
      'language',
      'onBeautify',
      'onChange']), {

        fontSize: this.state.fontSize,
        value: this.props.data,
        ref: 'editor' })));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBodyRawEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_TextEditor__ = __webpack_require__(1634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_draggable__ = __webpack_require__(1647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_RequesterTabLayoutConstants__ = __webpack_require__(414);








const keyMap = { beautifyRequestBody: 'mod+b' };let

RequestBodyRawEditor = class RequestBodyRawEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { height: 300 };

    this.handleDrag = this.handleDrag.bind(this);
    this.handleBeautify = this.handleBeautify.bind(this);
  }

  focus() {
    this.refs.editor.focus();
  }

  refresh() {
    this.refs.editor.refresh();
  }

  handleDrag(event, data) {
    let $editor = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.editor);
    let height = data.y - $editor.getBoundingClientRect().top;

    if (height > 600) {
      height = 600;
    } else
    if (height < 150) {
      height = 150;
    }

    this.setState({ height: height });
  }

  handleBeautify() {
    this.props.onBeautify && this.props.onBeautify();
  }

  getKeyMapHandlers() {
    return { 'beautifyRequestBody': this.handleBeautify };
  }

  render() {

    let height = 'auto';
    if (this.props.layout === __WEBPACK_IMPORTED_MODULE_5__constants_RequesterTabLayoutConstants__["a" /* REQUESTER_TAB_LAYOUT_1_COLUMN */]) {
      height = this.state.height + 'px';
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__["a" /* default */], {
          handlers: this.getKeyMapHandlers(),
          keyMap: keyMap },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-body-raw-editor' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_TextEditor__["a" /* default */], {
            fontSize: this.props.fontSize,
            height: height,
            mode: this.props.language,
            ref: 'editor',
            value: this.props.value,
            onChange: this.props.onChange }),


          this.props.layout === __WEBPACK_IMPORTED_MODULE_5__constants_RequesterTabLayoutConstants__["a" /* REQUESTER_TAB_LAYOUT_1_COLUMN */] &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_draggable__["DraggableCore"], {
              offsetParent: document.body,
              onDrag: this.handleDrag },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-body-raw-editor-resize-handle' })))));





  }};

/***/ }),

/***/ 2483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBodyBinaryEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_request_body_RequestBodyBinaryEditor__ = __webpack_require__(2484);
var _class;

let


RequestBodyBinaryEditorContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RequestBodyBinaryEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_request_body_RequestBodyBinaryEditor__["a" /* default */], {
        onChange: this.props.onChange }));


  }}) || _class;

/***/ }),

/***/ 2484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBodyBinaryEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Inputs__ = __webpack_require__(91);

let

RequestBodyBinaryEditor = class RequestBodyBinaryEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.onChange && this.props.onChange(value);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-body-binary-editor' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Inputs__["b" /* Input */], {
          type: 'file',
          onChange: this.handleChange })));



  }};

/***/ }),

/***/ 2485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBodyTypeSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_radio_group__ = __webpack_require__(1672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_radio_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_radio_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_RequestBodyTypeConstants__ = __webpack_require__(1907);
var _class;




let


RequestBodyTypeSelector = __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default()(_class = class RequestBodyTypeSelector extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { uniqueName: this.generateUniqueId() };
  }

  generateUniqueId() {
    let uniqueId = Math.random().toString(36).substring(7);
    return `body-type-${uniqueId}`;
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-body-type-selector' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_radio_group__["RadioGroup"], {
            name: this.state.uniqueName,
            selectedValue: this.props.value,
            onChange: this.props.onChange },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-body-type-selector-buttons' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { className: 'request-body-type-selector-button' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_radio_group__["Radio"], { value: __WEBPACK_IMPORTED_MODULE_4__constants_RequestBodyTypeConstants__["b" /* REQUEST_BODY_TYPE_FORM_DATA */], className: 'radio-button' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'form-data')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { className: 'request-body-type-selector-button' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_radio_group__["Radio"], { value: __WEBPACK_IMPORTED_MODULE_4__constants_RequestBodyTypeConstants__["c" /* REQUEST_BODY_TYPE_FORM_URLENCODED */], className: 'radio-button' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'x-www-form-urlencoded')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { className: 'request-body-type-selector-button' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_radio_group__["Radio"], { value: __WEBPACK_IMPORTED_MODULE_4__constants_RequestBodyTypeConstants__["d" /* REQUEST_BODY_TYPE_RAW */], className: 'radio-button' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'raw')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { className: 'request-body-type-selector-button' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_radio_group__["Radio"], { value: __WEBPACK_IMPORTED_MODULE_4__constants_RequestBodyTypeConstants__["a" /* REQUEST_BODY_TYPE_BINARY */], className: 'radio-button' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'binary'))))));





  }}) || _class;

/***/ }),

/***/ 2486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBodyRawLanguageSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__ = __webpack_require__(1908);
var _class;








let RawLanguageDisplayNameMap = {};
RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["a" /* REQUEST_BODY_RAW_LANGUAGE_HTML */]] = 'HTML (text/html)';
RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["d" /* REQUEST_BODY_RAW_LANGUAGE_TEXT */]] = 'Text';
RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["e" /* REQUEST_BODY_RAW_LANGUAGE_TEXT_PLAIN */]] = 'Text (text/plain)';
RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["c" /* REQUEST_BODY_RAW_LANGUAGE_JSON */]] = 'JSON (application/json)';
RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["b" /* REQUEST_BODY_RAW_LANGUAGE_JAVASCRIPT */]] = 'Javascript (application/javascript)';
RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["g" /* REQUEST_BODY_RAW_LANGUAGE_XML_TEXT */]] = 'XML (text/xml)';
RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["f" /* REQUEST_BODY_RAW_LANGUAGE_XML_APPLICATION */]] = 'XML (application/xml)';let


RequestBodyRawLanguageSelector = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequestBodyRawLanguageSelector extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-body-raw-language-selector' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["a" /* Dropdown */], { className: 'request-body-raw-language-selector-dropdown', onSelect: this.props.onChange },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["b" /* DropdownButton */], { type: 'text' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, RawLanguageDisplayNameMap[this.props.activeLanguage]))),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["c" /* DropdownMenu */], { 'align-left': true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["d" /* REQUEST_BODY_RAW_LANGUAGE_TEXT */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["d" /* REQUEST_BODY_RAW_LANGUAGE_TEXT */]])),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["e" /* REQUEST_BODY_RAW_LANGUAGE_TEXT_PLAIN */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["e" /* REQUEST_BODY_RAW_LANGUAGE_TEXT_PLAIN */]])),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["c" /* REQUEST_BODY_RAW_LANGUAGE_JSON */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["c" /* REQUEST_BODY_RAW_LANGUAGE_JSON */]])),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["b" /* REQUEST_BODY_RAW_LANGUAGE_JAVASCRIPT */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["b" /* REQUEST_BODY_RAW_LANGUAGE_JAVASCRIPT */]])),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["f" /* REQUEST_BODY_RAW_LANGUAGE_XML_APPLICATION */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["f" /* REQUEST_BODY_RAW_LANGUAGE_XML_APPLICATION */]])),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["g" /* REQUEST_BODY_RAW_LANGUAGE_XML_TEXT */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["g" /* REQUEST_BODY_RAW_LANGUAGE_XML_TEXT */]])),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["a" /* REQUEST_BODY_RAW_LANGUAGE_HTML */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, RawLanguageDisplayNameMap[__WEBPACK_IMPORTED_MODULE_5__constants_RequestBodyRawLanguageConstants__["a" /* REQUEST_BODY_RAW_LANGUAGE_HTML */]]))))));





  }}) || _class;

/***/ }),

/***/ 2487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestAuthEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_authUtil__ = __webpack_require__(1637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_auth_AuthEditor__ = __webpack_require__(1796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_AuthConstants__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_AppUrlConstants__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(22);
var _class;






let


RequestAuthEditorContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RequestAuthEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.requestModel = this.props.request;
    let authType = this.requestModel.get('auth') && this.requestModel.get('auth').type;
    this.state = {
      inheritedAuth: null,
      showPassword: false,
      showAuthVariablesAlert: pm.settings.getSetting('showAuthVariablesAlert'),
      showAuthAdvancedFields: pm.settings.getSetting('showAuthAdvancedFields') };


    this.authChangeHandler = this.authChangeHandler.bind(this);
    this.handleShowPassword = this.handleShowPassword.bind(this);
    this.handleAuthTypeSelect = this.handleAuthTypeSelect.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleUseOauth2Token = this.handleUseOauth2Token.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleVariablesLearnMore = this.handleVariablesLearnMore.bind(this);
    this.handleDismissVariablesAlert = this.handleDismissVariablesAlert.bind(this);
    this.toggleAdvancedFields = this.toggleAdvancedFields.bind(this);
    this.handleAuthorizationLearnMore = this.handleAuthorizationLearnMore.bind(this);

    this.handleAuthAnalytics = this.handleAuthAnalytics.bind(this);

    this.updateSavedAuths = _.debounce(__WEBPACK_IMPORTED_MODULE_2__utils_authUtil__["h" /* updateSavedAuths */], 1000);
  }

  componentWillMount() {
    this.attachModelListeners();
    this.setInitialState();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.updateSavedAuths.cancel();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.request === this.props.request) {
      return;
    }

    this.detachModelListeners();
    this.requestModel = nextProps.request;
    let authType = this.requestModel.get('auth') && this.requestModel.get('auth').type;
    this.attachModelListeners();
    this.setInitialState();
  }

  setInitialState() {
    let requestAuth = this.requestModel.get('auth');
    this.setInheritedAuth(requestAuth);
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_authUtil__["d" /* getSavedAuths */])((savedAuth = {}) => {
      let stateAuth = _.assign(savedAuth, requestAuth);
      this.setState({ auth: stateAuth });
    });
  }

  setInheritedAuth(requestAuth) {
    if (this.requestModel.get('isFromCollection')) {
      let collectionId = this.requestModel.get('collection'),
      request = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('RequestStore').find(this.requestModel.id),
      collection = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('CollectionStore').find(collectionId);

      if (!_.isEmpty(request) && !_.isEmpty(collection) && _.isEmpty(requestAuth)) {
        this.setState({ inheritedAuth: request.inheritedParentAuth });
      }
    }
  }

  attachModelListeners() {
    this.requestModel && this.requestModel.on('change:auth', this.authChangeHandler);
  }

  authChangeHandler() {
    let modelAuth = this.requestModel.get('auth');
    if (modelAuth === null) {
      this.setState({ auth: _.assign({}, this.state.auth, { type: __WEBPACK_IMPORTED_MODULE_4__constants_AuthConstants__["s" /* AUTH_TYPE_RAW_INHERIT */] }) }, () => {
        this.updateSavedAuths(_.omit(this.state.auth, ['type']));
        this.setInheritedAuth(modelAuth);
      });
      return;
    }
    this.setState({ auth: _.assign({}, this.state.auth, modelAuth) }, () => {
      this.updateSavedAuths(_.omit(this.state.auth, ['type']));
    });
  }

  detachModelListeners() {
    this.requestModel && this.requestModel.off('change:auth', this.authChangeHandler);
  }

  handleFieldChange(authType, key, value) {
    let newAuth = this.setValue(authType, key, value),
    authObj = { type: authType };

    authObj[authType] = newAuth;
    this.requestModel.set('auth', _.merge({}, _.pick(this.state.auth, [authType]), authObj));
  }

  handleAuthTypeSelect(type) {

    if (_.get(this.state, 'auth.type') !== type) {
      this.requestModel.clearSystemParams();
    }

    let authData = { type };

    if (type !== __WEBPACK_IMPORTED_MODULE_4__constants_AuthConstants__["t" /* AUTH_TYPE_RAW_NO_AUTH */]) {
      authData[type] = _.get(this.state, ['auth', type], Object(__WEBPACK_IMPORTED_MODULE_2__utils_authUtil__["b" /* getDefaultAuthProps */])(type));
    }

    this.requestModel.set('auth', type === __WEBPACK_IMPORTED_MODULE_4__constants_AuthConstants__["s" /* AUTH_TYPE_RAW_INHERIT */] ? null : _.assign({}, authData));

    // Store current state of tab to db.
    pm.tabManager.engageActiveTab();
  }

  handleShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  setValue(authType, k, v) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__utils_authUtil__["f" /* setAuthValue */])(this.state.auth, authType, k, v);
  }

  handleUseOauth2Token(token) {
    let newAuth = Object(__WEBPACK_IMPORTED_MODULE_2__utils_authUtil__["g" /* setAuthValues */])(this.state.auth, 'oauth2', {
      accessToken: token.access_token,
      tokenType: token.token_type }),

    authObj = { type: 'oauth2' };

    authObj['oauth2'] = newAuth;

    this.requestModel.set('auth', _.assign({}, _.pick(this.state.auth, ['oauth2']), authObj));
  }

  handleAuthAnalytics(action) {
    let request = this.props.request;

    // bailout
    if (!request || !action) {return;}

    // if a request was saved once, send with category as 'request' else 'history'
    let requestObj = request.toJSON(),
    category = requestObj.isFromCollection ? 'request' : 'history',
    collectionId = requestObj.collectionId,
    collection = collectionId && Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('CollectionStore').find(collectionId),
    requestStore = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('RequestStore').find(requestObj.id);

    let authType = _.get(requestObj, 'auth.type'),
    label = authType ? authType : _.get(requestStore, 'inheritedParentAuth.type'),
    auth = __WEBPACK_IMPORTED_MODULE_4__constants_AuthConstants__["b" /* AUTH_LEGACY_MAP */][label] || 'normal';

    __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent(category, action, auth);
  }


  handleSubmitForm() {
    this.handleAuthAnalytics('preview_request');
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_authUtil__["e" /* process */])(this.props.request);
  }

  handleVariablesLearnMore() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_5__constants_AppUrlConstants__["X" /* VARIABLE_DOCS */]);
  }

  handleDismissVariablesAlert() {
    this.setState({ showAuthVariablesAlert: false }, () => {
      pm.settings.setSetting('showAuthVariablesAlert', false);
    });
  }

  toggleAdvancedFields() {
    let showAuthAdvancedFields = !this.state.showAuthAdvancedFields;

    this.handleAuthAnalytics(showAuthAdvancedFields ? 'expand_advance_auth' : 'collapse_advance_auth');
    this.setState({ showAuthAdvancedFields: showAuthAdvancedFields }, () => {
      pm.settings.setSetting('showAuthAdvancedFields', showAuthAdvancedFields);
    });
  }

  handleAuthorizationLearnMore() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_5__constants_AppUrlConstants__["c" /* AUTH_DOCS */]);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_auth_AuthEditor__["a" /* default */], {
        auth: this.state.auth,
        inheritedAuth: this.state.inheritedAuth,
        type: 'request',
        showPassword: this.state.showPassword,
        onShowPasswordToggle: this.handleShowPassword,
        onAuthTypeSelect: this.handleAuthTypeSelect,
        onVariablesLearnMore: this.handleVariablesLearnMore,
        showAuthVariablesAlert: this.state.showAuthVariablesAlert,
        onDismissVariablesAlert: this.handleDismissVariablesAlert,
        showAuthAdvancedFields: this.state.showAuthAdvancedFields,
        onToggleAdvancedFields: this.toggleAdvancedFields,
        onAuthorizationLearnMore: this.handleAuthorizationLearnMore,
        onFieldChange: this.handleFieldChange,
        onSubmitForm: this.handleSubmitForm,
        onUseToken: this.handleUseOauth2Token,
        layout: this.props.layout,
        handleAuthAnalytics: this.handleAuthAnalytics }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestTestsEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_request_RequestTestsEditor__ = __webpack_require__(2504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_requests_Snippets__ = __webpack_require__(2505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_request_SnippetsList__ = __webpack_require__(1915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_draggable__ = __webpack_require__(1647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_postman_collection__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_RequesterTabLayoutConstants__ = __webpack_require__(414);
var _class;











let


RequestTestsEditorContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RequestTestsEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.snippetsModel = new __WEBPACK_IMPORTED_MODULE_4__models_requests_Snippets__["a" /* default */]();

    this.state = {
      value: '',
      snippets: this.getSnippets(),
      height: 300,
      fontSize: 12 };


    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleSnippetSelect = this.handleSnippetSelect.bind(this);
    this.handleBeautify = this.handleBeautify.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    this.refreshEditor = this.refreshEditor.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
    this.handleFontSizeChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
    this.testEvent = null;
    this.sdkEvents = null;
  }

  createOrUpdateSDKEvents() {
    if (!__WEBPACK_IMPORTED_MODULE_8_postman_collection__["EventList"].isEventList(this.sdkEvents)) {
      this.sdkEvents = new __WEBPACK_IMPORTED_MODULE_8_postman_collection__["EventList"]({}, this.model.get('events'));
    } else
    {
      this.sdkEvents.repopulate(this.model.get('events'));
    }

    this.testEvent = _.head(this.sdkEvents.listenersOwn('test'));

    if (_.isEmpty(this.testEvent)) {
      this.testEvent = new __WEBPACK_IMPORTED_MODULE_8_postman_collection__["Event"]({ listen: 'test', script: '' });
      this.sdkEvents.add(this.testEvent);
    }
  }

  attachModelListeners() {
    this.model && this.model.on('change:events', this.handleModelChange);
    pm.settings.on('setSetting:responseFontSize', this.handleFontSizeChange);
    pm.settings.on('setSetting:requesterTabLayout', this.refreshEditor);
    pm.settings.on('setSetting:scriptSnippetCollapsed', this.refreshEditor);
    pm.settings.on('setSetting:requesterTabRequestPaneWidth', this.refreshEditor);
    pm.settings.on('setSetting:requesterTabLayout', this.refreshEditor);
    pm.settings.on('setSetting:requesterSidebarWidth', this.refreshEditor);
    pm.settings.on('setSetting:isRequesterSidebarOpen', this.refreshEditor);
    pm.mediator.on('themeChange', this.refreshEditor);
  }

  detachModelListeners() {
    this.model && this.model.off('change:events', this.handleModelChange);
    pm.settings.off('setSetting:responseFontSize', this.handleFontSizeChange);
    pm.settings.off('setSetting:requesterTabLayout', this.refreshEditor);
    pm.settings.off('setSetting:scriptSnippetCollapsed', this.refreshEditor);
    pm.settings.off('setSetting:requesterTabRequestPaneWidth', this.refreshEditor);
    pm.settings.off('setSetting:requesterTabLayout', this.refreshEditor);
    pm.settings.off('setSetting:requesterSidebarWidth', this.refreshEditor);
    pm.settings.off('setSetting:isRequesterSidebarOpen', this.refreshEditor);
    pm.mediator.off('themeChange', this.refreshEditor);
  }

  componentWillReceiveProps(nextProps) {
    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  handleBeautify() {
    this.setValue(__WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].beautifyJs(this.state.value));
  }

  handleModelChange() {
    this.createOrUpdateSDKEvents();
    this.setState({ value: this.getValue() });
  }

  refreshEditor() {
    _.invoke(this, 'refs.editor.refresh');
  }

  handleFontSizeChange() {
    let fontSize = pm.settings.getSetting('responseFontSize');

    if (_.isString(fontSize)) {
      try {
        fontSize = parseInt(fontSize);
      }
      catch (e) {
        fontSize = 12;
      }
    }

    if (this.state.fontSize !== fontSize) {
      this.setState({ fontSize: fontSize }, () => {
        this.refreshEditor();
      });
    }
  }

  getValue() {
    return _.invoke(this, 'testEvent.script.toSource');
  }

  setValue(value) {
    this.testEvent.update({ script: value });
    this.model.set('events', this.sdkEvents.toJSON());
  }

  handleChange(value) {
    this.setValue(value);
  }

  getSnippets() {
    return this.snippetsModel.toJSON();
  }

  handleSnippetSelect(snippetId) {
    let snippetCode = this.snippetsModel.get(snippetId).get('code');
    this.appendSnippet(snippetCode);
  }

  appendSnippet(code) {
    let nextValue = this.state.value;

    if (_.isNil(nextValue)) {
      nextValue = '';
    }

    if (nextValue !== '') {
      nextValue += '\n\n';
    }

    nextValue += code;

    this.setValue(nextValue);
  }

  focus() {
    this.refs.editor.focus();
  }

  handleDrag(event, data) {
    let $editor = Object(__WEBPACK_IMPORTED_MODULE_7_react_dom__["findDOMNode"])(this.refs.editor_container);
    let height = data.y - $editor.getBoundingClientRect().top;

    if (height > 600) {
      height = 600;
    } else
    if (height < 150) {
      height = 150;
    }

    this.setState({ height: height });
  }

  handleDocsLinkClick() {
    pm.app.openExternalLink('https://go.pstmn.io/docs-test-scripts');
  }

  render() {

    let style = {};
    if (this.props.layout === __WEBPACK_IMPORTED_MODULE_9__constants_RequesterTabLayoutConstants__["a" /* REQUESTER_TAB_LAYOUT_1_COLUMN */]) {
      style = { height: this.state.height + 'px' };
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-tests-editor-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'request-tests-editor-group',
            ref: 'editor_container',
            style: style },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_request_RequestTestsEditor__["a" /* default */], {
            fontSize: this.state.fontSize,
            ref: 'editor',
            value: this.state.value,
            onBeautify: this.handleBeautify,
            onChange: this.handleChange }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-tests-editor-snippets' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_request_SnippetsList__["a" /* default */], {
              help: {
                text: 'Test scripts are written in JavaScript, and are run after the response is received.',
                link: 'Learn more about tests',
                action: this.handleDocsLinkClick },

              isCollapsed: this.props.isSnippetsCollapsed,
              snippets: this.state.snippets,
              onSelect: this.handleSnippetSelect,
              onSnippetCollapse: this.props.onSnippetCollapse }))),




        this.props.layout === __WEBPACK_IMPORTED_MODULE_9__constants_RequesterTabLayoutConstants__["a" /* REQUESTER_TAB_LAYOUT_1_COLUMN */] &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_draggable__["DraggableCore"], {
            offsetParent: document.body,
            onDrag: this.handleDrag },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-tests-editor-resize-handle' }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestTestsEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_TextEditor__ = __webpack_require__(1634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_keymaps_KeyMaps__ = __webpack_require__(71);




const keyMap = { beautifyRequestTest: 'mod+b' };let


RequestTestsEditor = class RequestTestsEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBeautify = this.handleBeautify.bind(this);
  }

  handleChange(value) {
    this.props.onChange && this.props.onChange(value);
  }

  focus() {
    this.refs.editor.focus();
  }

  refresh() {
    this.refs.editor.refresh();
  }

  handleBeautify() {
    this.props.onBeautify && this.props.onBeautify();
  }

  getKeyMapHandlers() {
    return { 'beautifyRequestTest': this.handleBeautify };
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_keymaps_KeyMaps__["a" /* default */], { keyMap: keyMap, handlers: this.getKeyMapHandlers() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-tests-editor' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_TextEditor__["a" /* default */], {
            enableVariableSuggestions: true,
            value: this.props.value,
            fontSize: this.props.fontSize,
            mode: 'javascript',
            enableAutocomplete: true,
            onChange: this.handleChange,
            ref: 'editor',
            height: 'auto',
            softTabs: true }))));




  }};

/***/ }),

/***/ 2505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_test_snippets__ = __webpack_require__(2506);



var Snippet = __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.Model.extend({
	default: function () {
		return {
			'id': '',
			'name': '',
			'description': '',
			'version': '',
			'code': '' };

	},

	initialize: function () {
	} });


var Snippets = __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.Collection.extend({
	model: Snippet,

	comparator(a) {
		return a.get('name');
	},

	initialize: function () {
		this.add(__WEBPACK_IMPORTED_MODULE_1__utils_test_snippets__["a" /* default */], { merge: true });
	} });


/* harmony default export */ __webpack_exports__["a"] = (Snippets);

/***/ }),

/***/ 2506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var scriptExamples = __webpack_require__(1914),
_ = __webpack_require__(0),
testScriptSnippets;

testScriptSnippets = _.map(scriptExamples.getExamples('test'), function (snippet, index) {
  snippet.id = index + 1;
  return snippet;
});

/* harmony default export */ __webpack_exports__["a"] = (testScriptSnippets);

/***/ }),

/***/ 2507:
/***/ (function(module, exports) {

module.exports = [{"name":"Get an environment variable","description":"Gets an environment variable","code":"pm.environment.get(\"variable_key\");","validity":["prerequest","test"]},{"name":"Get a global variable","description":"Gets a global variable","code":"pm.globals.get(\"variable_key\");","validity":["prerequest","test"]},{"name":"Get a variable","description":"Gets a variable (environment or global)","code":"pm.variables.get(\"variable_key\");","validity":["prerequest","test"]},{"name":"Set an environment variable","description":"Sets an environment variable","code":"pm.environment.set(\"variable_key\", \"variable_value\");","validity":["prerequest","test"]},{"name":"Set a global variable","description":"Sets a global variable","code":"pm.globals.set(\"variable_key\", \"variable_value\");","validity":["prerequest","test"]},{"name":"Clear an environment variable","description":"Clears an environment variable if set","code":"pm.environment.unset(\"variable_key\");","validity":["prerequest","test"]},{"name":"Clear a global variable","description":"Clears a global variable if set","code":"pm.globals.unset(\"variable_key\");","validity":["prerequest","test"]},{"name":"Send a request","description":"Sends a request","code":"pm.sendRequest(\"https://postman-echo.com/get\", function (err, response) {\n    console.log(response.json());\n});","validity":["prerequest","test"]},{"name":"Status code: Code is 200","description":"Write a basic status code check","code":"pm.test(\"Status code is 200\", function () {\n    pm.response.to.have.status(200);\n});","validity":["test"]},{"name":"Response body: Contains string","description":"Write a basic string check in response body","code":"pm.test(\"Body matches string\", function () {\n    pm.expect(pm.response.text()).to.include(\"string_you_want_to_search\");\n});","validity":["test"]},{"name":"Response body: JSON value check","description":"Write a basic json value check","code":"pm.test(\"Your test name\", function () {\n    var jsonData = pm.response.json();\n    pm.expect(jsonData.value).to.eql(100);\n});","validity":["test"]},{"name":"Response body: Is equal to a string","description":"Write a response body string check","code":"pm.test(\"Body is correct\", function () {\n    pm.response.to.have.body(\"response_body_string\");\n});","validity":["test"]},{"name":"Response headers: Content-Type header check","description":"Write a basic response header check","code":"pm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});","validity":["test"]},{"name":"Response time is less than 200ms","description":"Write a basic response time check","code":"pm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});","validity":["test"]},{"name":"Status code: Successful POST request","description":"Check for successful POST request","code":"pm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});","validity":["test"]},{"name":"Status code: Code name has string","description":"Write a basic response code string check","code":"pm.test(\"Status code name has string\", function () {\n    pm.response.to.have.status(\"Created\");\n});","validity":["test"]},{"name":"Response body: Convert XML body to a JSON Object","description":"Convert response body from JSON to XML","code":"var jsonObject = xml2Json(responseBody);","validity":["test"]},{"name":"Use Tiny Validator for JSON data","description":"Validate response against a schema with Tiny Validator","code":"var schema = {\n  \"items\": {\n    \"type\": \"boolean\"\n  }\n};\n\nvar data1 = [true, false];\nvar data2 = [true, 123];\n\npm.test('Schema is valid', function() {\n  pm.expect(tv4.validate(data1, schema)).to.be.true;\n  pm.expect(tv4.validate(data2, schema)).to.be.true;\n});","validity":["test"]}]

/***/ }),

/***/ 2508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnippetsItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

SnippetsItem = class SnippetsItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onSelect && this.props.onSelect(this.props.snippet.id);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'snippet-item', onClick: this.handleClick },
        this.props.snippet.name));


  }};

/***/ }),

/***/ 2509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPRScriptEditorContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_draggable__ = __webpack_require__(1647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_postman_collection__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_requests_PrscriptSnippets__ = __webpack_require__(2510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_RequesterTabLayoutConstants__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_request_RequestPRScriptEditor__ = __webpack_require__(2512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_request_SnippetsList__ = __webpack_require__(1915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_AppUrlConstants__ = __webpack_require__(128);
var _class;











let


RequestPRScriptEditorContainer = __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default()(_class = class RequestPRScriptEditorContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.snippetsModel = new __WEBPACK_IMPORTED_MODULE_5__models_requests_PrscriptSnippets__["a" /* default */]();

    this.state = {
      snippets: this.getSnippets(),
      height: 300,
      fontSize: 12 };


    this.handleDrag = this.handleDrag.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleSnippetSelect = this.handleSnippetSelect.bind(this);
    this.handleBeautify = this.handleBeautify.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    this.refreshEditor = this.refreshEditor.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
    this.handleFontSizeChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
    this.preRequestEvent = null;
    this.sdkEvents = null;
  }

  createOrUpdateSDKEvents() {
    if (!__WEBPACK_IMPORTED_MODULE_4_postman_collection__["EventList"].isEventList(this.sdkEvents)) {
      this.sdkEvents = new __WEBPACK_IMPORTED_MODULE_4_postman_collection__["EventList"]({}, this.model.get('events'));
    } else
    {
      this.sdkEvents.repopulate(this.model.get('events'));
    }

    this.preRequestEvent = _.head(this.sdkEvents.listenersOwn('prerequest'));

    if (_.isEmpty(this.preRequestEvent)) {
      this.preRequestEvent = new __WEBPACK_IMPORTED_MODULE_4_postman_collection__["Event"]({ listen: 'prerequest', script: '' });
      this.sdkEvents.add(this.preRequestEvent);
    }
  }

  attachModelListeners() {
    this.model && this.model.on('change:events', this.handleModelChange);
    pm.settings.on('setSetting:responseFontSize', this.handleFontSizeChange);
    pm.settings.on('setSetting:requesterTabLayout', this.refreshEditor);
    pm.settings.on('setSetting:scriptSnippetCollapsed', this.refreshEditor);
    pm.settings.on('setSetting:requesterTabRequestPaneWidth', this.refreshEditor);
    pm.settings.on('setSetting:requesterTabLayout', this.refreshEditor);
    pm.settings.on('setSetting:requesterSidebarWidth', this.refreshEditor);
    pm.settings.on('setSetting:isRequesterSidebarOpen', this.refreshEditor);
    pm.mediator.on('themeChange', this.refreshEditor);
  }

  detachModelListeners() {
    this.model && this.model.off('change:events', this.handleModelChange);
    pm.settings.off('setSetting:responseFontSize', this.handleFontSizeChange);
    pm.settings.off('setSetting:requesterTabLayout', this.refreshEditor);
    pm.settings.off('setSetting:scriptSnippetCollapsed', this.refreshEditor);
    pm.settings.off('setSetting:requesterTabRequestPaneWidth', this.refreshEditor);
    pm.settings.off('setSetting:requesterTabLayout', this.refreshEditor);
    pm.settings.off('setSetting:requesterSidebarWidth', this.refreshEditor);
    pm.settings.off('setSetting:isRequesterSidebarOpen', this.refreshEditor);
    pm.mediator.off('themeChange', this.refreshEditor);
  }

  componentWillReceiveProps(nextProps) {
    if (this.model === nextProps.request) {
      return;
    }

    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  refreshEditor() {
    _.invoke(this, 'refs.editor.refresh');
  }

  handleFontSizeChange() {
    let fontSize = pm.settings.getSetting('responseFontSize');

    if (_.isString(fontSize)) {
      try {
        fontSize = parseInt(fontSize);
      }
      catch (e) {
        fontSize = 12;
      }
    }

    if (this.state.fontSize !== fontSize) {
      this.setState({ fontSize: fontSize }, () => {
        this.refreshEditor();
      });
    }
  }

  handleModelChange() {
    this.createOrUpdateSDKEvents();
    this.setState({ value: this.getValue() });
  }

  handleBeautify() {
    this.setValue(__WEBPACK_IMPORTED_MODULE_9__utils_util__["a" /* default */].beautifyJs(this.state.value));
  }

  getValue() {
    return _.invoke(this, 'preRequestEvent.script.toSource');
  }

  setValue(value) {
    this.preRequestEvent.update({ script: value });
    this.model.set('events', this.sdkEvents.toJSON());
  }

  handleChange(value) {
    this.setValue(value);
  }

  getSnippets() {
    return this.snippetsModel.toJSON();
  }

  handleSnippetSelect(snippetId) {
    let snippetCode = this.snippetsModel.get(snippetId).get('code');
    this.appendSnippet(snippetCode);
  }

  appendSnippet(code) {
    let nextValue = this.state.value;

    if (_.isNil(nextValue)) {
      nextValue = '';
    }

    if (nextValue !== '') {
      nextValue += '\n\n';
    }

    nextValue += code;

    this.setValue(nextValue);
  }

  focus() {
    this.refs.editor.focus();
  }

  handleDrag(event, data) {
    let $editor = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.editor);
    let height = data.y - $editor.getBoundingClientRect().top;

    if (height > 600) {
      height = 600;
    } else
    if (height < 150) {
      height = 150;
    }

    this.setState({ height: height });
  }

  handleDocsLinkClick() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_10__constants_AppUrlConstants__["F" /* PRE_REQUEST_SCRIPT_DOCS */]);
  }

  render() {
    let style = {};
    if (this.props.layout === __WEBPACK_IMPORTED_MODULE_6__constants_RequesterTabLayoutConstants__["a" /* REQUESTER_TAB_LAYOUT_1_COLUMN */]) {
      style = { height: this.state.height + 'px' };
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-prscript-editor-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'request-prscript-editor-group',
            ref: 'editor_container',
            style: style },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_request_RequestPRScriptEditor__["a" /* default */], {
            fontSize: this.state.fontSize,
            ref: 'editor',
            value: this.state.value,
            onBeautify: this.handleBeautify,
            onChange: this.handleChange }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-prscript-editor-snippets' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_request_SnippetsList__["a" /* default */], {
              help: {
                text: 'Pre-request scripts are written in JavaScript, and are run before the request is sent.',
                link: 'Learn more about pre-request scripts',
                action: this.handleDocsLinkClick },

              isCollapsed: this.props.isSnippetsCollapsed,
              snippets: this.state.snippets,
              onSelect: this.handleSnippetSelect,
              onSnippetCollapse: this.props.onSnippetCollapse }))),




        this.props.layout === __WEBPACK_IMPORTED_MODULE_6__constants_RequesterTabLayoutConstants__["a" /* REQUESTER_TAB_LAYOUT_1_COLUMN */] &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_draggable__["DraggableCore"], {
            offsetParent: document.body,
            onDrag: this.handleDrag },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-prscript-editor-resize-handle' }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_prscript_snippets__ = __webpack_require__(2511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_backbone__);



var PrscriptSnippet = __WEBPACK_IMPORTED_MODULE_1_backbone___default.a.Model.extend({
	default: function () {
		return {
			'id': '',
			'name': '',
			'description': '',
			'version': '',
			'code': '' };

	},

	initialize: function () {
	} });


var PrscriptSnippets = __WEBPACK_IMPORTED_MODULE_1_backbone___default.a.Collection.extend({
	model: PrscriptSnippet,

	comparator(a) {
		return a.get('name');
	},

	initialize: function () {
		this.add(__WEBPACK_IMPORTED_MODULE_0__utils_prscript_snippets__["a" /* default */], { merge: true });
	} });


/* harmony default export */ __webpack_exports__["a"] = (PrscriptSnippets);

/***/ }),

/***/ 2511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var scriptExamples = __webpack_require__(1914),
_ = __webpack_require__(0),
prScriptSnippets;

prScriptSnippets = _.map(scriptExamples.getExamples('prerequest'), function (snippet, index) {
  snippet.id = index + 1;
  return snippet;
});

/* harmony default export */ __webpack_exports__["a"] = (prScriptSnippets);

/***/ }),

/***/ 2512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPRScriptEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_TextEditor__ = __webpack_require__(1634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_keymaps_KeyMaps__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(13);





const keyMap = { beautifyRequestPrScript: 'mod+b' };let

RequestPRScriptEditor = class RequestPRScriptEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBeautify = this.handleBeautify.bind(this);
  }

  handleChange(value) {
    this.props.onChange && this.props.onChange(value);
  }

  focus() {
    this.refs.editor.focus();
  }

  refresh() {
    this.refs.editor.refresh();
  }

  handleBeautify() {
    this.props.onBeautify && this.props.onBeautify();
  }

  getKeyMapHandlers() {
    return { 'beautifyRequestPrScript': this.handleBeautify };
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_keymaps_KeyMaps__["a" /* default */], { keyMap: keyMap, handlers: this.getKeyMapHandlers() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-prscript-editor' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_TextEditor__["a" /* default */], {
            enableVariableSuggestions: true,
            value: this.props.value,
            fontSize: this.props.fontSize,
            mode: 'javascript',
            onChange: this.handleChange,
            ref: 'editor',
            height: 'auto',
            snippets: this.props.snippets,
            softTabs: true,
            enableAutocomplete: true }))));




  }};

/***/ }),

/***/ 2513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEditorTabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Tabs__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_RequesterTabLayoutConstants__ = __webpack_require__(414);
var _class;




let


RequestEditorTabs = __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default()(_class = class RequestEditorTabs extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getScriptBadgeClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'request-editor-tabs-error-badge': this.props.isPreRequestsScriptsError,
      'request-editor-tabs-badge': !this.props.isPreRequestsScriptsError });

  }

  getTestsBadgeClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'request-editor-tabs-error-badge': this.props.isTestScriptsError,
      'request-editor-tabs-badge': !this.props.isTestScriptsError });

  }

  render() {

    let isSingleColumnLayout = this.props.layout === __WEBPACK_IMPORTED_MODULE_4__constants_RequesterTabLayoutConstants__["a" /* REQUESTER_TAB_LAYOUT_1_COLUMN */];

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor-tabs' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["b" /* Tabs */], {
            activeRef: this.props.activeTab,
            defaultActive: 'auth',
            type: 'primary',
            onChange: this.props.onSelect },


          this.props.tabMode !== 'exampleResponse' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], {
              className: 'request-editor-tab--auth',
              refKey: 'auth' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, isSingleColumnLayout ? 'Authorization' : 'Auth'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

              this.props.isAuthAvailable &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor-tabs-badge' }))),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], {
              className: 'request-editor-tab--header',
              refKey: 'headers' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Headers'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

              this.props.headersCount !== 0 &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'request-editor-tabs-count' }, '(', this.props.headersCount, ')'))),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], {
              className: 'request-editor-tab--body',
              disabled: this.props.disableBody,
              refKey: 'body' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Body'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

              this.props.isRequestBodyAvailable && !this.props.disableBody &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor-tabs-badge' }))),




          this.props.tabMode !== 'exampleResponse' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], {
              className: 'request-editor-tab--prscript',
              refKey: 'prscript' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, isSingleColumnLayout ? 'Pre-request Script' : 'Pre-req.'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

              this.props.isPreRequestScriptAvailable &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getScriptBadgeClasses() }))),





          this.props.tabMode !== 'exampleResponse' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], {
              className: 'request-editor-tab--tests',
              refKey: 'tests' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Tests'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

              this.props.isTestsAvailable &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getTestsBadgeClasses() }))))));







  }}) || _class;

/***/ }),

/***/ 2514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEditorTabContents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Tabs__ = __webpack_require__(248);

let

RequestEditorTabContents = class RequestEditorTabContents extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { active: this.props.activeKey === child.key });
    });
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor-tab-contents' },
        children));


  }};

/***/ }),

/***/ 2515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEditorTabContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

let

RequestEditorTabContent = class RequestEditorTabContent extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'request-editor-tab-content': true,
      'is-hidden': !this.props.active },
    this.props.className);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        this.props.children));


  }};

/***/ }),

/***/ 2516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ResponseBodyViewerContainer__ = __webpack_require__(2517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResponseCookieViewerContainer__ = __webpack_require__(2535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ResponseHeaderViewerContainer__ = __webpack_require__(2539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ResponseTestsViewerContainer__ = __webpack_require__(2544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ResponseMetaViewerContainer__ = __webpack_require__(2548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_response_ResponseErrorViewer__ = __webpack_require__(2551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_response_ResponseViewerTabs__ = __webpack_require__(2552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_response_ResponseViewerTabContents__ = __webpack_require__(2553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_response_ResponseViewerTabContent__ = __webpack_require__(2554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_response_ResponseViewerEmpty__ = __webpack_require__(2555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_RequesterTabLayoutConstants__ = __webpack_require__(414);
var _class;

















let


ResponseViewerContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class ResponseViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'body',
      height: 300,
      response: null };


    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
    this.handleResize();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
  }

  attachModelListeners() {
    this.model && this.model.on('change:lifecycle', this.handleModelChange);
    this.model && this.model.on('responseChanged', this.handleModelChange);
    window.addEventListener('resize', this.handleResize);
    pm.uiZoom && pm.uiZoom.on('change', this.handleResize);
  }

  detachModelListeners() {
    this.model && this.model.off('change:lifecycle', this.handleModelChange);
    this.model && this.model.off('responseChanged', this.handleModelChange);
    window.removeEventListener('resize', this.handleResize);
    pm.uiZoom && pm.uiZoom.off('change', this.handleResize);
  }

  componentWillReceiveProps(nextProps) {
    if (this.model !== nextProps.request) {
      this.detachModelListeners();
      this.model = nextProps.request;
      this.attachModelListeners();
      this.handleModelChange();
    }

    this.props.layout !== nextProps.layout &&
    nextProps.layout === __WEBPACK_IMPORTED_MODULE_14__constants_RequesterTabLayoutConstants__["a" /* REQUESTER_TAB_LAYOUT_1_COLUMN */] &&
    this.handleResize();

    if (this.props.tabMode !== nextProps.tabMode && nextProps.tabMode === 'exampleResponse') {
      this.handleTabSelect('body');
    }
  }

  componentDidUpdate() {
    // to ensure ace editor redraws itself with updated response
    _.invoke(this, 'prettyViewerRef.refresh');
  }

  handleTabSelect(id) {
    if (id === this.state.activeTab) {
      return;
    }

    this.setState({ activeTab: id });
  }

  getRequestLifecycle() {
    return this.model.get('lifecycle') || 'idle';
  }

  handleModelChange() {
    this.setState({
      lifecycle: this.getRequestLifecycle(),
      response: this.model.get('response').toJSON() });

  }

  handleCancelClick() {
    this.model.trigger('cancelRequest');
  }

  handleResize() {
    let height = window.innerHeight - 162;
    this.setState({ height: height });
  }

  isRequestDone() {
    return _.includes(['completed', 'testScriptsError'], this.state.lifecycle);
  }

  getResponseBlockClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'response-viewer-wrapper': true,
      'response-viewer-wrapper--hidden': !this.isRequestDone() });

  }

  getLoadingClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ 'request-loading-wrapper--hidden': this.isRequestDone() });
  }

  render() {


    let style = {};
    if (this.props.layout === __WEBPACK_IMPORTED_MODULE_14__constants_RequesterTabLayoutConstants__["a" /* REQUESTER_TAB_LAYOUT_1_COLUMN */]) {
      style = { height: this.state.height + 'px' };
    }

    if (this.state.lifecycle === 'idle' || this.state.lifecycle === 'PRScriptError') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_response_ResponseViewerEmpty__["a" /* default */], { style: style }));

    }

    if (this.state.lifecycle === 'error') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_response_ResponseErrorViewer__["a" /* default */], { request: this.props.request }));

    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'requester-contents-group',
            style: style },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getLoadingClasses() },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-loading-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'request-loading__message' }, 'Loading...'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Buttons__["a" /* Button */], {
                  className: 'request-loading__cancel-button',
                  type: 'secondary',
                  onClick: this.handleCancelClick }, 'Cancel Request'))),





          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getResponseBlockClasses() },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-contents-group__section-top response-viewer__section-top' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer__tabs' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_response_ResponseViewerTabs__["a" /* default */], {
                  activeTab: this.state.activeTab,
                  request: this.props.request,
                  tabMode: this.props.tabMode,
                  onSelect: this.handleTabSelect })),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer__meta' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ResponseMetaViewerContainer__["a" /* default */], {
                  request: this.props.request,
                  tabMode: this.props.tabMode }))),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-contents-group__section-content' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer__tab-contents' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_response_ResponseViewerTabContents__["a" /* default */], {
                    activeKey: this.state.activeTab,
                    request: this.props.request },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_response_ResponseViewerTabContent__["a" /* default */], { key: 'body' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ResponseBodyViewerContainer__["a" /* default */], {
                      lifecycle: this.state.lifecycle,
                      prettyViewerReference: prettyViewer => {this.prettyViewerRef = prettyViewer;},
                      request: this.props.request,
                      response: this.state.response,
                      tabId: this.props.tabId,
                      tabMode: this.props.tabMode })),


                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_response_ResponseViewerTabContent__["a" /* default */], { key: 'cookies' },

                    this.props.tabMode !== 'exampleResponse' &&
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ResponseCookieViewerContainer__["a" /* default */], { request: this.props.request })),


                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_response_ResponseViewerTabContent__["a" /* default */], { key: 'headers' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ResponseHeaderViewerContainer__["a" /* default */], {
                      request: this.props.request,
                      tabMode: this.props.tabMode })),


                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_response_ResponseViewerTabContent__["a" /* default */], { key: 'tests' },

                    this.props.tabMode !== 'exampleResponse' &&
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ResponseTestsViewerContainer__["a" /* default */], { request: this.props.request })))))))));









  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseBodyViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ClipboardHelper__ = __webpack_require__(1668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_brace__ = __webpack_require__(1866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_brace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__postman_brace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_SearchIcon__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Icons_CopyIcon__ = __webpack_require__(1648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ResponseBodyPrettyViewerContainer__ = __webpack_require__(2518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ResponseBodyRawViewerContainer__ = __webpack_require__(2523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ResponseBodyIFrameViewerContainer__ = __webpack_require__(2525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ResponseBodyImageViewerContainer__ = __webpack_require__(2527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ResponseSaverContainer__ = __webpack_require__(2529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_response_ResponseBodyViewerTabs__ = __webpack_require__(2530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_response_ResponseBodyViewerTabContents__ = __webpack_require__(2532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_response_ResponseBodyViewerTabContent__ = __webpack_require__(2533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_vkbeautify__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__ = __webpack_require__(2534);
var _class;


















const FORMATTED_LANGUAGES = {
  [__WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__["g" /* RESPONSE_BODY_TYPE_SCRIPT */]]: 'javascript',
  [__WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__["f" /* RESPONSE_BODY_TYPE_PLAIN_TEXT */]]: 'text',
  [__WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__["i" /* RESPONSE_BODY_TYPE_XML */]]: 'xml',
  [__WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__["c" /* RESPONSE_BODY_TYPE_HTML */]]: 'html',
  [__WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__["e" /* RESPONSE_BODY_TYPE_JSON */]]: 'json' };let



ResponseBodyViewerContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class ResponseBodyViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'pretty',
      isSearchShown: false,
      activeLanguage: 'text',
      wrapLine: false };


    this.handleToggleResponseSearch = this.handleToggleResponseSearch.bind(this);
    this.handleCopyResponse = this.handleCopyResponse.bind(this);
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.handleLanguageSelect = this.handleLanguageSelect.bind(this);
    this.handleLineWrapToggle = this.handleLineWrapToggle.bind(this);
  }

  componentWillMount() {
    this.setState({
      activeTab: pm.tabManager.get(this.props.tabId).get('responseBodyView') || 'pretty',
      activeLanguage: this.getLanguage(this.props.request),
      wrapLine: pm.settings.getSetting('lineWrapping') });

  }

  getLanguageMode(request) {
    const detectModeFromFilePath = __WEBPACK_IMPORTED_MODULE_3__postman_brace___default.a.acequire('ace/ext/modelist').getModeForPath,
    response = request.get('response'),
    fileName = response.get('fileName') || response.get('previewType') || 'text',
    aceMode = detectModeFromFilePath(fileName);

    if (aceMode) {
      return aceMode.name;
    }

    return 'text';
  }

  getResponsePreviewType(request) {
    const response = request.get('response');
    return response.get('mimeType') || 'text';
  }

  isSendAndDownloadAction(request) {
    return request.get('action') === 'download';
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      activeTab: pm.tabManager.get(nextProps.tabId).get('responseBodyView') || 'pretty',
      activeLanguage: this.getLanguage(nextProps.request),
      previewType: this.getResponsePreviewType(nextProps.request),
      isSendAndDownload: this.isSendAndDownloadAction(nextProps.request),
      wrapLine: pm.settings.getSetting('lineWrapping') });

  }

  getLanguage(request) {
    let languageDetection = pm.settings.getSetting('languageDetection'),
    language = languageDetection;

    if (languageDetection && languageDetection.toLowerCase() === 'auto') {
      language = this.getRequestLanguage(request);
    }

    return language.toLowerCase();
  }

  getRequestLanguage(request) {
    let language = this.props.request.get('response').get('language');
    return _.get(FORMATTED_LANGUAGES, language, 'auto');
  }

  setActiveLanguage(request) {
    let response = request.get('response').toJSON(),
    language = response.language,
    formattedLanguage = '';
    if (language === 'javascript') {
      formattedLanguage = 'javascript';
    } else
    if (language === 'plainText') {
      formattedLanguage = 'text';
    } else
    if (!_.isEmpty(language)) {
      formattedLanguage = language;
    } else
    {
      formattedLanguage = 'text';
    }
    return formattedLanguage;
  }

  handleTabSelect(tab) {
    tab !== this.state.activeTab &&
    this.setState({ activeTab: tab }, () => {
      pm.tabManager.get(this.props.tabId).set('responseBodyView', tab);
    });
  }

  handleToggleResponseSearch() {
    let isSearchShown = !this.state.isSearchShown;
    this.setState({ isSearchShown: isSearchShown }, () => {
      let payload = isSearchShown ? 'showResponseSearch' : 'hideResponseSearch';
      this.props.request && this.props.request.trigger(payload);
    });
  }

  handleCopyResponse() {
    let response = this.props.request.get('response');

    if (response) {
      let language = response.get('language'),
      responseText = response.get('text');

      // do not prettify if raw mode is selected. what you see in the UI should be what is copied
      if (this.state.activeTab === 'pretty') {
        try {
          if (language === __WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__["e" /* RESPONSE_BODY_TYPE_JSON */]) {
            responseText = __WEBPACK_IMPORTED_MODULE_14__utils_vkbeautify__["a" /* default */].json(responseText);
          } else
          if (language === __WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__["i" /* RESPONSE_BODY_TYPE_XML */]) {
            responseText = __WEBPACK_IMPORTED_MODULE_14__utils_vkbeautify__["a" /* default */].xml(responseText, null, true);
          } else
          if (language === __WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__["c" /* RESPONSE_BODY_TYPE_HTML */]) {
            responseText = __WEBPACK_IMPORTED_MODULE_14__utils_vkbeautify__["a" /* default */].xml(responseText, null, false);
          }
        }
        catch (e) {
          console.error(e);
        }
      }

      __WEBPACK_IMPORTED_MODULE_1__utils_ClipboardHelper__["a" /* default */].copy(responseText);
      pm.alerts.success('Copied to clipboard');
    }
  }

  handleLanguageSelect(language) {
    let request = _.get(this, 'props.request');

    this.setState({ activeLanguage: language === 'auto' ? this.getLanguage(request) : language });

    this.props.tabMode === 'exampleResponse' && request && request.get('response') && request.get('response').set('language', language);
  }

  handleLineWrapToggle() {
    pm.settings.setSetting('lineWrapping', !this.state.wrapLine);
    this.setState({ wrapLine: !this.state.wrapLine });
  }

  render() {
    if (this.isSendAndDownloadAction(this.props.request)) {
      return false;
    }

    if (_.includes([__WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__["a" /* RESPONSE_BODY_TYPE_AUDIO */], __WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__["h" /* RESPONSE_BODY_TYPE_VIDEO */], __WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__["d" /* RESPONSE_BODY_TYPE_IMAGE */], __WEBPACK_IMPORTED_MODULE_15__constants_ResponseBodyTypeConstants__["b" /* RESPONSE_BODY_TYPE_EMBED */]],
    this.getResponsePreviewType(this.props.request))) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__ResponseBodyImageViewerContainer__["a" /* default */], { request: this.props.request }));

    }

    const language = this.state.activeLanguage === 'auto' ?
    this.getLanguageMode(this.props.request) :
    this.state.activeLanguage;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-body-viewer' },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-body-viewer__header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-body-viewer__header__left' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_response_ResponseBodyViewerTabs__["a" /* default */], {
              onSelect: this.handleTabSelect,
              activeTab: this.state.activeTab,
              activeLanguage: language,
              onLanguageSelect: this.handleLanguageSelect,
              onLineWrap: this.handleLineWrapToggle,
              wrapLine: this.state.wrapLine })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-body-viewer__header__right' },
            this.props.tabMode !== 'exampleResponse' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ResponseSaverContainer__["a" /* default */], { request: this.props.request }),

            this.state.activeTab === 'pretty' &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Icons_SearchIcon__["a" /* default */], {
              className: 'response-body-viewer__search-button',
              onClick: this.handleToggleResponseSearch }),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Icons_CopyIcon__["a" /* default */], {
              className: 'response-body-viewer__copy-button',
              onClick: this.handleCopyResponse }))),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-body-viewer__content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_response_ResponseBodyViewerTabContents__["a" /* default */], { activeKey: this.state.activeTab },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_response_ResponseBodyViewerTabContent__["a" /* default */], { key: 'pretty' },

              this.state.activeTab === 'pretty' &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ResponseBodyPrettyViewerContainer__["a" /* default */], {
                prettyViewerReference: this.props.prettyViewerReference,
                tabMode: this.props.tabMode,
                request: this.props.request,
                language: this.state.activeLanguage,
                wrapLine: this.state.wrapLine,
                requestLifecycle: this.props.lifecycle })),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_response_ResponseBodyViewerTabContent__["a" /* default */], { key: 'raw' },

              this.state.activeTab === 'raw' &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ResponseBodyRawViewerContainer__["a" /* default */], {
                request: this.props.request,
                tabMode: this.props.tabMode,
                requestLifecycle: this.props.lifecycle })),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_response_ResponseBodyViewerTabContent__["a" /* default */], { key: 'preview' },

              this.state.activeTab === 'preview' &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ResponseBodyIFrameViewerContainer__["a" /* default */], {
                request: this.props.request,
                tabMode: this.props.tabMode,
                requestLifecycle: this.props.lifecycle }))))));







  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseBodyPrettyViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_response_ResponseBodyPrettyViewer__ = __webpack_require__(2519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ResponseHelper__ = __webpack_require__(1916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_vkbeautify__ = __webpack_require__(690);
var _class;



let

ResponseBodyPrettyViewerContainer = __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default()(_class = class ResponseBodyPrettyViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      showSearch: false,
      fontSize: 12 };


    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleShowResponseSearch = this.handleShowResponseSearch.bind(this);
    this.handleHideResponseSearch = this.handleHideResponseSearch.bind(this);
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handlePrettyViewerReference = this.handlePrettyViewerReference.bind(this);
    this.refreshEditor = this.refreshEditor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBeautifyResponse = this.handleBeautifyResponse.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request.get('response');
    this.attachModelListeners();
    this.handleModelChange(true);
    this.handleFontSizeChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
  }

  attachModelListeners() {
    this.model && this.model.on('change:text', this.handleModelChange);
    this.props.request && this.props.request.on('showResponseSearch', this.handleShowResponseSearch);
    this.props.request && this.props.request.on('hideResponseSearch', this.handleHideResponseSearch);
    pm.settings.on('setSetting:responseFontSize', this.handleFontSizeChange);
    pm.settings.on('setSetting:scriptSnippetCollapsed', this.refreshEditor);
    pm.settings.on('setSetting:requesterTabRequestPaneWidth', this.refreshEditor);
    pm.settings.on('setSetting:requesterTabLayout', this.refreshEditor);
    pm.mediator.on('themeChange', this.refreshEditor);
  }

  detachModelListeners() {
    this.model && this.model.off('change:text', this.handleModelChange);
    this.props.request && this.props.request.off('showResponseSearch', this.handleShowResponseSearch);
    this.props.request && this.props.request.off('hideResponseSearch', this.handleHideResponseSearch);
    pm.settings.off('setSetting:responseFontSize', this.handleFontSizeChange);
    pm.settings.off('setSetting:scriptSnippetCollapsed', this.refreshEditor);
    pm.settings.off('setSetting:requesterTabRequestPaneWidth', this.refreshEditor);
    pm.settings.off('setSetting:requesterTabLayout', this.refreshEditor);
    pm.mediator.off('themeChange', this.refreshEditor);
  }

  componentWillReceiveProps(nextProps) {
    this.detachModelListeners();
    this.model = nextProps.request.get('response');
    this.attachModelListeners();
    this.handleModelChange(true);
  }

  handleModelChange(shouldBeautifyResponse) {
    this.setState({ value: this.getValue() }, () => {
      if (_.isBoolean(shouldBeautifyResponse) && shouldBeautifyResponse) {
        this.handleBeautifyResponse();
      }
    });
  }

  refreshEditor() {
    _.invoke(this, 'prettyViewerRef.refresh');
  }

  handlePrettyViewerReference(prettyViewerReference) {
    this.prettyViewerRef = prettyViewerReference;
    _.invoke(this, 'props.prettyViewerReference', prettyViewerReference);
  }

  handleFontSizeChange() {
    let fontSize = pm.settings.getSetting('responseFontSize');

    if (typeof fontSize === 'string') {
      try {
        fontSize = parseInt(fontSize);
      }
      catch (e) {
        fontSize = 12;
      }
    }

    if (this.state.fontSize !== fontSize) {
      this.setState({ fontSize: fontSize }, () => {
        this.refreshEditor();
      });
    }
  }

  handleShowResponseSearch() {
    !this.state.showSearch && this.setState({ showSearch: true });
  }

  handleHideResponseSearch() {
    this.state.showSearch && this.setState({ showSearch: false });
  }

  getValue() {
    return this.model ? this.model.get('text') : '';
  }

  handleLinkClick(link, opts) {
    let request = this.props.request;
    if (link[0] == '/') {
      let currentUrl = request.get('url');
      function getFirstPart(url) {
        var indexOfTS = url.indexOf('//');
        if (indexOfTS == -1) {
          return url.split('/')[0];
        } else
        {
          var fp = url.substring(indexOfTS + 2);
          return url.substring(0, indexOfTS) + '//' + fp.split('/')[0];
        }

      }
      link = getFirstPart(currentUrl) + link;
    }
    if (_.get(opts, 'openInBrowser', false)) {
      // open in browser
      pm.app.openExternalLink(link);
    } else
    {
      // open in new tab
      request.loadRequestFromLink(link);
    }
  }

  handleChange(value) {
    this.props.tabMode === 'exampleResponse' && this.model.set('text', value);
  }

  handleBeautifyResponse() {
    if (this.props.tabMode !== 'exampleResponse') {
      return;
    }

    let mode = _.get(this.props, 'language', '').toLowerCase(),
    value = this.state.value;

    try {
      if (mode === 'json') {
        value = __WEBPACK_IMPORTED_MODULE_2__utils_ResponseHelper__["a" /* default */].formatJSON(value);
      } else
      if (mode === 'html') {
        value = __WEBPACK_IMPORTED_MODULE_4__utils_vkbeautify__["a" /* default */].xml(value, null, false);
      } else
      if (mode === 'xml') {
        value = __WEBPACK_IMPORTED_MODULE_4__utils_vkbeautify__["a" /* default */].xml(value, null, true);
      }

      this.setState({ value: value });
    }
    catch (e) {
      pm.alerts.error('Could not beautify. Invalid JSON or XML');
    }
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_response_ResponseBodyPrettyViewer__["a" /* default */], {
        ref: this.handlePrettyViewerReference,
        tabMode: this.props.tabMode,
        modelId: this.props.tabMode === 'request' ? this.model.get('__id') : this.model.get('id'),
        value: this.state.value,
        showSearch: this.state.showSearch,
        wrapLine: this.props.wrapLine,
        language: this.props.language,
        fontSize: this.state.fontSize,
        onLinkClick: this.handleLinkClick,
        onBeautifyResponse: this.handleBeautifyResponse,
        onChange: this.handleChange }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseBodyPrettyViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_TextEditor__ = __webpack_require__(1634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ResponseHelper__ = __webpack_require__(1916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_keymaps_KeyMaps__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_vkbeautify__ = __webpack_require__(690);





const keyMap = { beautifyResponseBody: 'mod+b' };let

ResponseBodyPrettyViewer = class ResponseBodyPrettyViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  formatValue(value) {
    let formattedValue = value;
    let language = this.props.language.toLowerCase();

    if (this.props.tabMode === 'exampleResponse') {
      return formattedValue;
    }

    try {
      if (language === 'xml') {
        formattedValue = __WEBPACK_IMPORTED_MODULE_4__utils_vkbeautify__["a" /* default */].xml(value, null, true);
      } else
      if (language === 'html') {
        formattedValue = __WEBPACK_IMPORTED_MODULE_4__utils_vkbeautify__["a" /* default */].xml(value, null, false);
      } else
      if (language === 'json') {
        formattedValue = __WEBPACK_IMPORTED_MODULE_2__utils_ResponseHelper__["a" /* default */].formatJSON(value);
      }
    }
    catch (e) {
      formattedValue = e.message;
    }

    return formattedValue;
  }

  refresh() {
    _.invoke(this, 'refs.editor.refresh');
  }

  getKeyMapHandlers() {
    return { 'beautifyResponseBody': this.props.onBeautifyResponse };
  }

  render() {

    let value = this.formatValue(this.props.value);
    let language = this.props.language.toLowerCase();
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_keymaps_KeyMaps__["a" /* default */], {
          handlers: this.getKeyMapHandlers(),
          keyMap: keyMap },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-body-pretty-viewer' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_TextEditor__["a" /* default */], {
            readonly: this.props.tabMode !== 'exampleResponse',
            height: 'auto',
            value: value,
            mode: language,
            modelId: this.props.modelId,
            ref: 'editor',
            wrapLine: this.props.wrapLine,
            showSearch: this.props.showSearch,
            fontSize: this.props.fontSize,
            onLinkClick: this.props.onLinkClick,
            onChange: this.props.onChange }))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2520:
/***/ (function(module, exports, __webpack_require__) {

var json_stringify = __webpack_require__(2521).stringify;
var json_parse     = __webpack_require__(2522);

module.exports = function(options) {
    return  {
        parse: json_parse(options),
        stringify: json_stringify
    }
};
//create the default method members with no options applied for backwards compatibility
module.exports.parse = json_parse();
module.exports.stringify = json_stringify;


/***/ }),

/***/ 2521:
/***/ (function(module, exports, __webpack_require__) {

var BigNumber = __webpack_require__(1917);

/*
    json2.js
    2013-05-26

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON = module.exports;

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key],
            isBigNumber = value != null && (value instanceof BigNumber || value.isBigNumber);;

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            if (isBigNumber) {
                return value;
            } else {
                return quote(value);
            }

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                Object.keys(value).forEach(function(k) {
                    var v = str(k, value);
                    if (v) {
                        partial.push(quote(k) + (gap ? ': ' : ':') + v);
                    }
                });
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }
}());


/***/ }),

/***/ 2522:
/***/ (function(module, exports, __webpack_require__) {

var BigNumber = null;
/*
    json_parse.js
    2012-06-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    This file creates a json_parse function.
    During create you can (optionally) specify some behavioural switches

        require('json-bigint')(options)

            The optional options parameter holds switches that drive certain
            aspects of the parsing process:
            * options.strict = true will warn about duplicate-key usage in the json.
              The default (strict = false) will silently ignore those and overwrite
              values for keys that are in duplicate use.

    The resulting function follows this signature:
        json_parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = json_parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

    This is a reference implementation. You are free to copy, modify, or
    redistribute.

    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
*/

/*members "", "\"", "\/", "\\", at, b, call, charAt, f, fromCharCode,
    hasOwnProperty, message, n, name, prototype, push, r, t, text
*/

var json_parse = function (options) {
    "use strict";

// This is a function that can parse a JSON text, producing a JavaScript
// data structure. It is a simple, recursive descent parser. It does not use
// eval or regular expressions, so it can be used as a model for implementing
// a JSON parser in other languages.

// We are defining the function inside of another function to avoid creating
// global variables.


// Default options one can override by passing options to the parse()
    var _options = {
        "strict": false,  // not being strict means do not generate syntax errors for "duplicate key"
        "storeAsString": false // toggles whether the values should be stored as BigNumber (default) or a string
    };


// If there are options, then use them to override the default _options
    if (options !== undefined && options !== null) {
        if (options.strict === true) {
            _options.strict = true;
        }
        if (options.storeAsString === true) {
            _options.storeAsString = true;
        }
    }


    var at,     // The index of the current character
        ch,     // The current character
        escapee = {
            '"':  '"',
            '\\': '\\',
            '/':  '/',
            b:    '\b',
            f:    '\f',
            n:    '\n',
            r:    '\r',
            t:    '\t'
        },
        text,

        error = function (m) {

// Call error when something is wrong.

            throw {
                name:    'SyntaxError',
                message: m,
                at:      at,
                text:    text
            };
        },

        next = function (c) {

// If a c parameter is provided, verify that it matches the current character.

            if (c && c !== ch) {
                error("Expected '" + c + "' instead of '" + ch + "'");
            }

// Get the next character. When there are no more characters,
// return the empty string.

            ch = text.charAt(at);
            at += 1;
            return ch;
        },

        number = function () {
// Parse a number value.

            var number,
                string = '';

            if (ch === '-') {
                string = '-';
                next('-');
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
            if (ch === '.') {
                string += '.';
                while (next() && ch >= '0' && ch <= '9') {
                    string += ch;
                }
            }
            if (ch === 'e' || ch === 'E') {
                string += ch;
                next();
                if (ch === '-' || ch === '+') {
                    string += ch;
                    next();
                }
                while (ch >= '0' && ch <= '9') {
                    string += ch;
                    next();
                }
            }
            number = +string;
            if (!isFinite(number)) {
                error("Bad number");
            } else {
                if (BigNumber == null)
                  BigNumber = __webpack_require__(1917);
                //if (number > 9007199254740992 || number < -9007199254740992)
                // Bignumber has stricter check: everything with length > 15 digits disallowed
                if (string.length > 15)
                   return (_options.storeAsString === true) ? string : new BigNumber(string);
                return number;
            }
        },

        string = function () {

// Parse a string value.

            var hex,
                i,
                string = '',
                uffff;

// When parsing for string values, we must look for " and \ characters.

            if (ch === '"') {
                while (next()) {
                    if (ch === '"') {
                        next();
                        return string;
                    }
                    if (ch === '\\') {
                        next();
                        if (ch === 'u') {
                            uffff = 0;
                            for (i = 0; i < 4; i += 1) {
                                hex = parseInt(next(), 16);
                                if (!isFinite(hex)) {
                                    break;
                                }
                                uffff = uffff * 16 + hex;
                            }
                            string += String.fromCharCode(uffff);
                        } else if (typeof escapee[ch] === 'string') {
                            string += escapee[ch];
                        } else {
                            break;
                        }
                    } else {
                        string += ch;
                    }
                }
            }
            error("Bad string");
        },

        white = function () {

// Skip whitespace.

            while (ch && ch <= ' ') {
                next();
            }
        },

        word = function () {

// true, false, or null.

            switch (ch) {
            case 't':
                next('t');
                next('r');
                next('u');
                next('e');
                return true;
            case 'f':
                next('f');
                next('a');
                next('l');
                next('s');
                next('e');
                return false;
            case 'n':
                next('n');
                next('u');
                next('l');
                next('l');
                return null;
            }
            error("Unexpected '" + ch + "'");
        },

        value,  // Place holder for the value function.

        array = function () {

// Parse an array value.

            var array = [];

            if (ch === '[') {
                next('[');
                white();
                if (ch === ']') {
                    next(']');
                    return array;   // empty array
                }
                while (ch) {
                    array.push(value());
                    white();
                    if (ch === ']') {
                        next(']');
                        return array;
                    }
                    next(',');
                    white();
                }
            }
            error("Bad array");
        },

        object = function () {

// Parse an object value.

            var key,
                object = {};

            if (ch === '{') {
                next('{');
                white();
                if (ch === '}') {
                    next('}');
                    return object;   // empty object
                }
                while (ch) {
                    key = string();
                    white();
                    next(':');
                    if (_options.strict === true && Object.hasOwnProperty.call(object, key)) {
                        error('Duplicate key "' + key + '"');
                    }
                    object[key] = value();
                    white();
                    if (ch === '}') {
                        next('}');
                        return object;
                    }
                    next(',');
                    white();
                }
            }
            error("Bad object");
        };

    value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

        white();
        switch (ch) {
        case '{':
            return object();
        case '[':
            return array();
        case '"':
            return string();
        case '-':
            return number();
        default:
            return ch >= '0' && ch <= '9' ? number() : word();
        }
    };

// Return the json_parse function. It will have access to all of the above
// functions and variables.

    return function (source, reviver) {
        var result;

        text = source + '';
        at = 0;
        ch = ' ';
        result = value();
        white();
        if (ch) {
            error("Syntax error");
        }

// If there is a reviver function, we recursively walk the new structure,
// passing each name/value pair to the reviver function for possible
// transformation, starting with a temporary root object that holds the result
// in an empty key. If there is not a reviver function, we simply return the
// result.

        return typeof reviver === 'function'
            ? (function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    Object.keys(value).forEach(function(k) {
                        v = walk(value, k);
                        if (v !== undefined) {
                            value[k] = v;
                        } else {
                            delete value[k];
                        }
                    });
                }
                return reviver.call(holder, key, value);
            }({'': result}, ''))
            : result;
    };
}

module.exports = json_parse;


/***/ }),

/***/ 2523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseBodyRawViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_response_ResponseBodyRawViewer__ = __webpack_require__(2524);

let

ResponseBodyRawViewerContainer = class ResponseBodyRawViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request.get('response');
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
  }

  attachModelListeners() {
    this.model && this.model.on('change:text', this.handleModelChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:text', this.handleModelChange);
  }

  componentWillReceiveProps(nextProps) {
    this.detachModelListeners();
    this.model = nextProps.request.get('response');
    this.attachModelListeners();
    this.handleModelChange();
  }

  handleModelChange() {
    this.setState({ value: this.getValue() });
  }

  getValue() {
    if (_.isEmpty(this.model)) {
      return;
    }
    return this.model.get('text');
  }

  handleChange(value) {
    this.props.tabMode === 'exampleResponse' && this.model.set('text', value);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_response_ResponseBodyRawViewer__["a" /* default */], {
        tabMode: this.props.tabMode,
        value: this.state.value,
        onChange: this.handleChange }));


  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseBodyRawViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_TextArea__ = __webpack_require__(1656);

let

ResponseBodyRawViewer = class ResponseBodyRawViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-body-raw-viewer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_TextArea__["a" /* default */], {
          readOnly: this.props.tabMode !== 'exampleResponse',
          value: this.props.value,
          onChange: this.props.onChange })));



  }};

/***/ }),

/***/ 2525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseBodyIFrameViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_services_filesystem__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_response_ResponseBodyIFrameViewer__ = __webpack_require__(2526);


let

ResponseBodyIFrameViewerContainer = class ResponseBodyIFrameViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { responseUrl: '' };
    this.handleModelChange = this.handleModelChange.bind(this);
    this.getResponseUrl = this.getResponseUrl.bind(this);
  }

  attachModelListeners() {
    this.model && this.model.on('change:text', this.handleModelChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:text', this.handleModelChange);
  }

  componentWillMount() {
    this.model = this.props.request.get('response');
    this.attachModelListeners();
    this.getResponseUrl(this.props.request);
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
  }

  handleModelChange() {
    this.getResponseUrl(this.props.request);
  }

  getValue() {
    return this.model ? this.model.get('text') : '';
  }

  getResponseUrl(request) {
    let response_text = this.getValue();

    this.setState({ responseUrl: '' });

    if (request != null && response_text) {
      let cleanResponseText = request.stripScriptTag(response_text);

      Object(__WEBPACK_IMPORTED_MODULE_1__models_services_filesystem__["a" /* renderResponsePreview */])('response.html', cleanResponseText, 'html', responseUrl => {
        this.setState({ responseUrl: responseUrl });
      });
    }
  }

  render() {

    let filePrefix = 'file://';
    if (this.state.responseUrl != '') {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_response_ResponseBodyIFrameViewer__["a" /* default */], { src: filePrefix + this.state.responseUrl });
    }
    return false;
  }};

/***/ }),

/***/ 2526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseBodyIFrameViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_IframeViewer__ = __webpack_require__(1918);

let

ResponseBodyIFrameViewer = class ResponseBodyIFrameViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-body-iframe-viewer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_IframeViewer__["a" /* default */], {
          className: 'response-body-viewer-preview',
          src: this.props.src })));



  }};

/***/ }),

/***/ 2527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseBodyImageViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_response_ResponseBodyImageViewer__ = __webpack_require__(2528);

let

ResponseBodyImageViewerContainer = class ResponseBodyImageViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { dataURI: null };
  }

  componentWillMount() {
    this.initializeImageBuffer(this.props.request);
  }

  componentWillReceiveProps(nextProps) {
    this.initializeImageBuffer(nextProps.request);
  }

  initializeImageBuffer(request) {
    if (!_.isEmpty(request)) {
      this.setState({ dataURI: request.get('response').get('dataURI') });
    }
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_response_ResponseBodyImageViewer__["a" /* default */], { dataURI: this.state.dataURI }));

  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseBodyImageViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_IframeViewer__ = __webpack_require__(1918);

let

ResponseBodyImageViewer = class ResponseBodyImageViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-body-image-viewer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_IframeViewer__["a" /* default */], {
          className: 'response-body-image-viewer-image-container',
          src: this.props.dataURI })));



  }};

/***/ }),

/***/ 2529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseSaverContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_AnalyticsService__ = __webpack_require__(22);
var _class;


let


ResponseSaverContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class ResponseSaverContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      isFromCollection: false };


    this.handleClick = this.handleClick.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
  }

  componentWillReceiveProps(nextProps) {
    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  attachModelListeners() {
    this.model && this.model.on('change:isFromCollection', this.handleModelChange);
    this.model && this.model.on('change:response', this.handleModelChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:isFromCollection', this.handleModelChange);
    this.model && this.model.off('change:response', this.handleModelChange);
  }

  handleModelChange() {
    let response = this.model.get('response');

    this.setState({
      response: response,
      isFromCollection: this.model.get('isFromCollection'),
      allowSave: response && response.canSave('request') });

  }

  handleClick() {
    let tab = pm.tabManager.getCurrentTab();
    tab.set('mode', 'exampleResponse');
    tab.setNotification('showDeprecatedSaveResponse');
    this.model.loadRequestInExample();
    __WEBPACK_IMPORTED_MODULE_3__modules_services_AnalyticsService__["a" /* default */].addEvent('examples', 'save_response_initiate');
  }

  render() {
    if (!this.state.isFromCollection) {
      return false;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-saver' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
            size: 'small',
            type: 'secondary',
            disabled: !this.state.allowSave,
            onClick: this.handleClick }, 'Save Response')));





  }}) || _class;

/***/ }),

/***/ 2530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseBodyViewerTabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Tabs__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_WrapIcon__ = __webpack_require__(2531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Buttons__ = __webpack_require__(31);








const LANGUAGE_MAP = {
  'json': 'JSON',
  'xml': 'XML',
  'html': 'HTML',
  'text': 'Text',
  'auto': 'Auto' };let


ResponseBodyViewerTabs = class ResponseBodyViewerTabs extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getWrapButtonClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()('response-body-viewer__line-wrap-button', { 'is-active': this.props.wrapLine });
  }

  render() {

    const activeLanguage = LANGUAGE_MAP[this.props.activeLanguage] || 'Auto';
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-body-viewer-tabs-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-body-viewer-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["b" /* Tabs */], {
              type: 'secondary',
              defaultActive: 'pretty',
              activeRef: this.props.activeTab,
              onChange: this.props.onSelect },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], { refKey: 'pretty', className: 'response-body-viewer-tab--pretty' }, 'Pretty'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], { refKey: 'raw', className: 'response-body-viewer-tab--raw' }, 'Raw'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], { refKey: 'preview', className: 'response-body-viewer-tab--preview' }, 'Preview'))),



        this.props.activeTab === 'pretty' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["a" /* Dropdown */], {
            className: 'response-body-viewer__language-dropdown',
            onSelect: this.props.onLanguageSelect },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["b" /* DropdownButton */], { type: 'secondary', size: 'small' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, activeLanguage))),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["c" /* DropdownMenu */], { fluid: true },

            _.map(LANGUAGE_MAP, (value, key) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Dropdowns__["d" /* MenuItem */], { refKey: key, key: key }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, value));
            }))),





        this.props.activeTab === 'pretty' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
            type: 'icon',
            className: this.getWrapButtonClasses(),
            onClick: this.props.onLineWrap,
            tooltip: 'Wrap Line' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_WrapIcon__["a" /* default */], { className: 'response-body-viewer__line-wrap-icon' }))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = WrapIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'wrap', d: 'M12.02 6c1.092 0 2.029.391 2.81 1.174.78.782 1.17 1.721 1.17 2.817 0 1.095-.39 2.034-1.17 2.817-.781.782-1.718 1.173-2.81 1.173h-2.014V16l-2.998-3.005 2.998-3.004v2.018h2.247c.531 0 1-.203 1.405-.61.406-.407.61-.876.61-1.408 0-.532-.204-1.002-.61-1.409C13.253 8.175 12.55 8 12.02 8H1a1 1 0 1 1 0-2h11.02zM16 1a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1zM0 13a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#wrap' }));



function WrapIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseBodyViewerTabContents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Tabs__ = __webpack_require__(248);

let

ResponseBodyViewerTabContents = class ResponseBodyViewerTabContents extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { active: this.props.activeKey === child.key });
    });
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-body-viewer-tab-contents' },
        children));


  }};

/***/ }),

/***/ 2533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseBodyViewerTabContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

let

ResponseBodyViewerTabContent = class ResponseBodyViewerTabContent extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()(
    'response-body-viewer-tab-content',
    { 'is-hidden': !this.props.active });

  }

  render() {

    let classes = this.getClasses();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes },
        this.props.children));


  }};

/***/ }),

/***/ 2534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const RESPONSE_BODY_TYPE_XML = 'xml',
RESPONSE_BODY_TYPE_HTML = 'html',
RESPONSE_BODY_TYPE_PLAIN_TEXT = 'plain',
RESPONSE_BODY_TYPE_SCRIPT = 'script',
RESPONSE_BODY_TYPE_VIDEO = 'video',
RESPONSE_BODY_TYPE_AUDIO = 'audio',
RESPONSE_BODY_TYPE_IMAGE = 'image',
RESPONSE_BODY_TYPE_EMBED = 'embed',
RESPONSE_BODY_TYPE_JSON = 'json';
/* harmony export (immutable) */ __webpack_exports__["i"] = RESPONSE_BODY_TYPE_XML;

/* harmony export (immutable) */ __webpack_exports__["c"] = RESPONSE_BODY_TYPE_HTML;

/* harmony export (immutable) */ __webpack_exports__["f"] = RESPONSE_BODY_TYPE_PLAIN_TEXT;

/* harmony export (immutable) */ __webpack_exports__["g"] = RESPONSE_BODY_TYPE_SCRIPT;

/* harmony export (immutable) */ __webpack_exports__["h"] = RESPONSE_BODY_TYPE_VIDEO;

/* harmony export (immutable) */ __webpack_exports__["a"] = RESPONSE_BODY_TYPE_AUDIO;

/* harmony export (immutable) */ __webpack_exports__["d"] = RESPONSE_BODY_TYPE_IMAGE;

/* harmony export (immutable) */ __webpack_exports__["b"] = RESPONSE_BODY_TYPE_EMBED;

/* harmony export (immutable) */ __webpack_exports__["e"] = RESPONSE_BODY_TYPE_JSON;


/***/ }),

/***/ 2535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseCookieViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_response_ResponseCookieViewer__ = __webpack_require__(2536);
var _class;

let


ResponseCookieViewerContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class ResponseCookieViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { cookiesList: [] };

    this.handleModelChange = this.handleModelChange.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request.get('response');
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
  }

  attachModelListeners() {
    this.model && this.model.on('change:cookies', this.handleModelChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:cookies', this.handleModelChange);
  }

  componentWillReceiveProps(nextProps) {
    this.detachModelListeners();
    this.model = nextProps.request.get('response');
    this.attachModelListeners();
    this.handleModelChange();
  }

  handleModelChange() {
    if (_.isEmpty(this.model)) {
      return;
    }
    let cookieList = [];
    cookieList = this.model.get('cookies') || [];

    this.setState({ cookiesList: cookieList });
  }

  getCookiesList(request) {
    return pm.cookieManager.getCookiesForUrl(request.get('transformedUrl'));
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_response_ResponseCookieViewer__["a" /* default */], { cookies: this.state.cookiesList }));

  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseCookieViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResponseCookieViewerRow__ = __webpack_require__(2537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResponseCookieEmptyItem__ = __webpack_require__(2538);


let

ResponseCookieViewer = class ResponseCookieViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    let cookies = this.props.cookies;
    if (_.isEmpty(cookies)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ResponseCookieEmptyItem__["a" /* default */], null));

    }
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-cookie-viewer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-header__cookie-detail' }, ' Name '),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-header__cookie-detail' }, ' Value '),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-header__cookie-detail' }, ' Domain '),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-header__cookie-detail' }, ' Path '),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-header__cookie-detail' }, ' Expires '),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-header__cookie-detail' }, ' HTTP '),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-header__cookie-detail' }, ' Secure ')),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-content' },

            cookies.map((cookie, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ResponseCookieViewerRow__["a" /* default */], { cookie: cookie, key: cookie.name + index });
            })))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseCookieViewerRow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

ResponseCookieViewerRow = class ResponseCookieViewerRow extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    let cookie = this.props.cookie;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-content-row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-content-row__cookie-detail' }, cookie.name),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-content-row__cookie-detail' }, cookie.value),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-content-row__cookie-detail' }, cookie.domain),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-content-row__cookie-detail' }, cookie.path),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-content-row__cookie-detail' }, !cookie.expirationDate || cookie.expirationDate === 0 ? 'Never' : cookie.expiry),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-content-row__cookie-detail' }, cookie.httpOnly ? ' true' : 'false'),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cookie-table-content-row__cookie-detail' }, cookie.secure ? 'true' : 'false')));


  }};

/***/ }),

/***/ 2538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseCookieEmptyItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);

let

ResponseCookieEmptyItem = class ResponseCookieEmptyItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-cookie-empty-message' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-cookie-empty-message__image' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-cookie-empty-message__title' }, 'No cookie for you'),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-cookie-empty-message__details' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null, ' No cookies were returned by the server '))));



  }};

/***/ }),

/***/ 2539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseHeaderViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_mediatypes__ = __webpack_require__(1906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_response_ResponseHeaderViewer__ = __webpack_require__(2540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_keyvalue_editor_KeyValueEditor__ = __webpack_require__(1644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_HeaderPresetController__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_AutoSuggestUtil__ = __webpack_require__(1752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(11);
var _class;







let

ResponseHeaderViewerContainer = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* observer */])(_class = class ResponseHeaderViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { headers: [] };
    this.handleHeadersChange = this.handleHeadersChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request.get('response');
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
  }

  attachModelListeners() {
    this.model && this.model.on('change:headers', this.handleModelChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:headers', this.handleModelChange);
  }

  componentWillReceiveProps(nextProps) {
    this.detachModelListeners();
    this.model = nextProps.request.get('response');
    this.attachModelListeners();
    this.handleModelChange();
  }

  handleModelChange() {
    this.setState({ headers: this.getHeaders() });
  }

  handleHeadersChange(headers) {
    let newHeaders = [];
    _.forEach(headers, header => {
      if (!header) {
        return;
      }

      // this is autocomplete selection for header presets
      // @todo: move auto complete selection out of field changes
      if (header.key && header.key.category === 'Header presets') {
        // should never happen
        if (!header.key.id) {return;}

        return __WEBPACK_IMPORTED_MODULE_6__modules_controllers_HeaderPresetController__["a" /* default */].
        get({ id: header.key.id }).
        then(preset => {
          // add headers from header preset to headers;
          this.setHeaders(_.concat(newHeaders, preset.headers));
        });
      } else
      {
        header.name = header.key;
        header.description = '';
        newHeaders.push(header);
      }
    });
    this.setHeaders(newHeaders);
  }

  getHeaders() {
    return this.model.get('headers');
  }

  setHeaders(headers) {
    this.model.set('headers', headers);
  }

  render() {

    if (this.props.tabMode === 'exampleResponse') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_keyvalue_editor_KeyValueEditor__["a" /* default */], {
          disableMultilineKey: true,
          disableMultilineValue: true,
          disableToggle: true,
          keySuggestions: Object(__WEBPACK_IMPORTED_MODULE_7__utils_AutoSuggestUtil__["a" /* getKeySuggestions */])(Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('HeaderPreset')['headerPresetsForAutoComplete']),
          ref: 'KeyValueEditor',
          allowedColumns: ['key', 'value'],
          showColumns: ['key', 'value'],
          values: this.state.headers,
          valueSuggestions: Object(__WEBPACK_IMPORTED_MODULE_7__utils_AutoSuggestUtil__["b" /* getValueSuggestions */])(),
          onChange: this.handleHeadersChange }));


    }
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_response_ResponseHeaderViewer__["a" /* default */], {
        headers: this.state.headers }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseHeaderViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResponseHeaderViewerList__ = __webpack_require__(2541);
var _class;

let


ResponseHeaderViewer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class ResponseHeaderViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-header-viewer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ResponseHeaderViewerList__["a" /* default */], { headers: this.props.headers })));


  }}) || _class;

/***/ }),

/***/ 2541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseHeaderViewerList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResponseHeaderViewerItem__ = __webpack_require__(2542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResponseHeaderEmptyItem__ = __webpack_require__(2543);
var _class;


let


ResponseHeaderViewerList = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class ResponseHeaderViewerList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    let headers = this.props.headers;
    if (_.isEmpty(headers)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ResponseHeaderEmptyItem__["a" /* default */], null));

    }
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-header-list' },

        headers.map((header, index) => {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ResponseHeaderViewerItem__["a" /* default */], {
            header: header,
            key: header.key + index });

        })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseHeaderViewerItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Tooltips__ = __webpack_require__(251);
var _class;

let


ResponseHeaderViewerItem = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class ResponseHeaderViewerItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { showTooltip: false };

    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  showTooltip() {
    !this.state.showTooltip && this.setState({ showTooltip: true });
  }

  hideTooltip() {
    this.state.showTooltip && this.setState({ showTooltip: false });
  }

  render() {

    let header = this.props.header;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-header-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-header-name',
            ref: header,
            onMouseEnter: this.showTooltip,
            onMouseLeave: this.hideTooltip },

          header.name, ' \u2192',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Tooltips__["a" /* Tooltip */], {
              show: this.state.showTooltip,
              refElement: this.refs[header],
              placement: 'right',
              className: 'response-header-details-tooltip' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Tooltips__["c" /* TooltipHeader */], null,
              header.name),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Tooltips__["b" /* TooltipBody */], null,
              header.description))),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-header-value' }, header.value)));


  }}) || _class;

/***/ }),

/***/ 2543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseHeaderEmptyItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

ResponseHeaderEmptyItem = class ResponseHeaderEmptyItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-header-empty-message' }, 'No Headers Available'));



  }};

/***/ }),

/***/ 2544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseTestsViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_response_ResponseTestsViewer__ = __webpack_require__(2545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_response_ResponseTestsEmptyItem__ = __webpack_require__(1919);
var _class;


let


ResponseTestsViewerContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class ResponseTestsViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.model = this.props.request;

    this.state = {
      tests: this.getTests('all'),
      testErrors: this.getTestErrors(),
      activeTab: 'all' };


    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentWillMount() {
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
  }

  attachModelListeners() {
    this.model && this.model.on('change:testResults', this.handleModelChange);
    this.model && this.model.on('change:testErrors', this.handleModelChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:testResults', this.handleModelChange);
    this.model && this.model.off('change:testErrors', this.handleModelChange);
  }

  componentWillReceiveProps(nextProps) {
    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  handleModelChange() {
    this.setState({
      tests: this.getTests(),
      testErrors: this.getTestErrors() });

  }

  handleTabChange(tab) {
    this.setState({ activeTab: tab });
  }

  getTests(tab) {
    let tests = this.model.get('testResults');
    switch (tab) {
      case 'passed':
        return _.filter(tests, 'passed');
      case 'failed':
        return _.filter(tests, { passed: false });
      case 'skipped':
        return _.filter(tests, 'skipped');
      default:
        return tests;}

  }

  getTestErrors() {
    return this.model.get('testErrors');
  }

  render() {

    let testErrors = this.state.testErrors;
    if (testErrors != null) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_response_ResponseTestsViewer__["a" /* default */], {
          error: testErrors,
          activeTab: this.state.activeTab,
          onTabSelect: this.handleTabChange }));


    }

    if (_.isEmpty(this.getTests('all'))) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_response_ResponseTestsEmptyItem__["a" /* default */], null));

    }

    let tests = _.map(this.getTests(this.state.activeTab), test => {
      if (test.skipped) {
        test.status = 'skipped';
      } else
      {
        test.status = test.passed ? 'pass' : 'fail';
      }
      return test;
    });

    // make sure tests are listed in the same order they are defined
    tests = _.sortBy(tests, 'index');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_response_ResponseTestsViewer__["a" /* default */], {
        tests: tests,
        activeTab: this.state.activeTab,
        onTabSelect: this.handleTabChange }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseTestsViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Tabs__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResponseTestViewerItem__ = __webpack_require__(2546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ResponseTestsEmptyItem__ = __webpack_require__(1919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResponseTestsError__ = __webpack_require__(2547);





let

ResponseTestsViewer = class ResponseTestsViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getListClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'response-tests-list': true,
      [`response-tests-list--${this.props.activeTab}`]: true });

  }

  render() {

    let tests = this.props.tests,
    error = this.props.error;

    if (error) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ResponseTestsError__["a" /* default */], {
          errorMsg: error }));


    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-tests-viewer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-tests-viewer-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["b" /* Tabs */], {
              type: 'secondary',
              defaultActive: 'all',
              activeRef: this.props.activeTab,
              onChange: this.props.onTabSelect },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], { refKey: 'all', className: 'response-tests-viewer-tab--all' }, 'All'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], { refKey: 'passed', className: 'response-tests-viewer-tab--passed' }, 'Passed'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], { refKey: 'skipped', className: 'response-tests-viewer-tab--skipped' }, 'Skipped'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Tabs__["a" /* Tab */], { refKey: 'failed', className: 'response-tests-viewer-tab--failed' }, 'Failed'))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getListClasses() },

          _.isEmpty(tests) ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ResponseTestsEmptyItem__["a" /* default */], {
            extended: true }) :

          tests.map((test, index) => {
            // @todo: test name is used as key here
            // it is user defined and is not always unique
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ResponseTestViewerItem__["a" /* default */], { test: test, key: test.name + index });
          }))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseTestViewerItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

let

ResponseTestViewerItem = class ResponseTestViewerItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'response-test-item': true,
      [`response-test-item--${this.props.test.status}`]: true });

  }

  getStatusClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'response-test-status': true,
      [`${this.props.test.status}`]: true });

  }

  render() {

    let test = this.props.test;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: this.getStatusClasses() },
          test.status),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-test-text' },
          test.passed ? test.name : test.name + ' | ' + _.get(test, 'error.name', '') + ': ' + _.get(test, 'error.message', ''))));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseTestsError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

ResponseTestsError = class ResponseTestsError extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-tests-error-container' }, 'There was an error in evaluating the test script: \xA0',

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-tests-error-message' },
          this.props.errorMsg)));



  }};

/***/ }),

/***/ 2548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseMetaViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_response_ResponseMetaViewer__ = __webpack_require__(2549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_httpstatuscodes__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_response_ResponseStatusSelector__ = __webpack_require__(2550);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;



let


ResponseMetaViewerContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class ResponseMetaViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleResponseCodeChange = this.handleResponseCodeChange.bind(this);
    this.handleResponseChange = this.handleResponseChange.bind(this);
  }

  attachModelListeners() {
    this.model && this.model.on('change:time', this.handleModelChange);
    this.model && this.model.on('change:responseCode', this.handleModelChange);
    this.model && this.model.on('change:responseSize', this.handleModelChange);
    this.model && this.model.on('change:text', this.handleModelChange);
    this.requestModel && this.requestModel.on('responseChanged', this.handleResponseChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:time', this.handleModelChange);
    this.model && this.model.off('change:responseCode', this.handleModelChange);
    this.model && this.model.off('change:responseSize', this.handleModelChange);
    this.model && this.model.off('change:text', this.handleModelChange);
    this.requestModel && this.requestModel.off('responseChanged', this.handleResponseChange);
  }

  componentWillMount() {
    this.requestModel = this.props.request;
    this.model = this.props.request.get('response');
    this.attachModelListeners();
    this.handleModelChange();
    this.handleResponseChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
    this.requestModel = null;
  }

  componentWillReceiveProps(nextProps) {
    if (this.model === nextProps.request.get('response')) {
      return;
    }

    this.detachModelListeners();
    this.requestModel = nextProps.request;
    this.model = nextProps.request.get('response');
    this.attachModelListeners();
    this.handleModelChange();
    this.handleResponseChange();
  }

  handleModelChange() {
    if (_.isEmpty(this.model)) {
      return;
    }

    this.setState({
      status: this.getStatus(),
      headerSize: this.getHeaderSize(),
      bodySize: this.getBodySize(),
      isLargeResponse: this.isLargeResponse(),
      timeInMilliSeconds: this.getTime(),
      responseStatusName: this.getStatusName(),
      responseStatusDescription: this.getStatusDescription() });

  }

  isLargeResponse() {
    let responseText = this.getResponseText() || '';

    if (_.size(responseText) >= window.postman_sync_rawtext_limit) {
      return true;
    }

    return false;
  }

  getResponseText() {
    return this.model && this.model.get('text');
  }

  getTime() {
    return this.model && this.model.get('time');
  }

  getStatus() {
    return _.get(this.model.get('responseCode'), 'code', '');
  }

  getStatusName() {
    return _.get(this.model.get('responseCode'), 'name', '');
  }

  getStatusDescription() {
    return _.get(this.model.get('responseCode'), 'detail', '');
  }

  getHeaderSize() {
    return _.get(this.model.get('responseSize'), 'header', 0);
  }

  getBodySize() {
    return _.get(this.model.get('responseSize'), 'body', 0);
  }

  handleResponseCodeChange(value) {
    let responseStatus = [],
    splitResponse = value.split(' ');
    responseStatus.push(splitResponse.shift());
    responseStatus.push(splitResponse.join(' '));
    let code = _.toNumber(responseStatus[0]) || responseStatus[0];
    this.setState({ currentStatus: value });
    this.model.set('responseCode', {
      code: code,
      name: responseStatus[1] || '' });

  }

  getAllStatusList() {
    let allStatus = [];
    _.forIn(__WEBPACK_IMPORTED_MODULE_3__utils_httpstatuscodes__["a" /* default */], (obj, key) => {
      allStatus.push({ value: `${key} ${obj.name}` });
    });
    return allStatus;
  }

  handleResponseChange() {
    let status = this.getStatus();
    if (status) {
      status += ` ${this.getStatusName()}`;
    } else
    {
      status = '200 OK';
    }
    this.handleResponseCodeChange(status);
  }

  render() {

    if (this.props.tabMode === 'exampleResponse') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_response_ResponseStatusSelector__["a" /* default */], {
          onResponseCodeChange: this.handleResponseCodeChange,
          ref: 'responseStatusSelector',
          status: this.state.currentStatus,
          responseStatusName: this.state.responseStatusName,
          statusList: this.getAllStatusList(),
          onSelect: this.handleResponseCodeChange }));


    }
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_response_ResponseMetaViewer__["a" /* default */], _extends({}, this.state, { tabMode: this.props.tabMode })));

  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseMetaViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Tooltips__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_ExclamationIcon__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(13);
var _class;




let


ResponseMetaViewer = __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default()(_class = class ResponseMetaViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isStatusTooltipShown: false,
      isSizeTooltipShown: false };


    this.handleStatusTooltipShow = this.handleStatusTooltipShow.bind(this);
    this.handleStatusTooltipHide = this.handleStatusTooltipHide.bind(this);
    this.handleSizeTooltipHide = this.handleSizeTooltipHide.bind(this);
    this.handleSizeTooltipShow = this.handleSizeTooltipShow.bind(this);
  }

  handleStatusTooltipHide() {
    this.setState({ isStatusTooltipShown: false });
  }

  handleStatusTooltipShow() {
    this.setState({ isStatusTooltipShown: true });
  }

  handleSizeTooltipHide() {
    this.setState({ isSizeTooltipShown: false });
  }

  handleSizeTooltipShow() {
    this.setState({ isSizeTooltipShown: true });
  }

  getSizeClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'response-meta-size__total': true,
      'is-large': this.props.isLargeResponse });

  }

  render() {
    let {
      status,
      timeInMilliSeconds,
      responseStatusName,
      responseStatusDescription,
      headerSize,
      bodySize } =
    this.props;
    let totalSize = headerSize + bodySize,
    totalSizeText = __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].formatSize(totalSize);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-meta-viewer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'response-meta-item is-tooltip-container',
            ref: 'status',
            onMouseEnter: this.handleStatusTooltipShow,
            onMouseLeave: this.handleStatusTooltipHide },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-meta-item-name' }, 'Status:'),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-meta-item-value' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-meta-status-code' }, status), ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-meta-status-code-desc' }, responseStatusName)),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Tooltips__["a" /* Tooltip */], {
              className: 'response-status-meta-tooltip',
              placement: 'bottom',
              refElement: this.refs.status,
              show: this.state.isStatusTooltipShown },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Tooltips__["c" /* TooltipHeader */], null,
              status, ' ', responseStatusName),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Tooltips__["b" /* TooltipBody */], null,
              responseStatusDescription))),




        this.props.tabMode !== 'exampleResponse' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-meta-item' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-meta-item-name' }, 'Time:'),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-time response-meta-item-value' },
            timeInMilliSeconds, ' ms')),




        this.props.tabMode !== 'exampleResponse' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'response-meta-item is-tooltip-container',
            ref: 'size',
            onMouseEnter: this.handleSizeTooltipShow,
            onMouseLeave: this.handleSizeTooltipHide },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-meta-item-name' }, 'Size:'),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-meta-item-value' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: this.getSizeClasses(totalSize) }, totalSizeText),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Tooltips__["a" /* Tooltip */], {
                className: 'response-meta-size--tooltip',
                containerPadding: 23,
                delay: 250,
                placement: 'bottom',
                refElement: this.refs.size,
                show: this.state.isSizeTooltipShown },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Tooltips__["c" /* TooltipHeader */], null,
                totalSizeText),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Tooltips__["b" /* TooltipBody */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null, 'Breakdown of the response size : '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-meta-size__info' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-meta-size__body' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'body: '),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-meta-size__body__value' }, __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].formatSize(bodySize))),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-meta-size__header' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'headers: '),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-meta-size__header__value' }, __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].formatSize(headerSize)))),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-meta-size__psa' }, 'The response size calculated is approximate.'),

                this.props.isLargeResponse &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-meta-size__error' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Icons_ExclamationIcon__["a" /* default */], { className: 'response-meta-size__error__icon' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-meta-size__error__text' }, 'Response too large to be saved'))))))));









  }}) || _class;

/***/ }),

/***/ 2550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseStatusSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_InputSelect__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Inputs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_SearchHighlighter__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);




let

ResponseStatusSelector = class ResponseStatusSelector extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleStatusSelect = this.handleStatusSelect.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.getSelectedStatusIndex = this.getSelectedStatusIndex.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  handleStatusSelect(list, index) {
    this.props.onSelect && this.props.onSelect(list[index].id);
  }

  getOption(list, index, search) {
    const id = String(list[index].id),
    name = list[index].name;
    if (search) {
      if (!_.includes(id + ' ' + name.toLowerCase(), search.toLowerCase())) {
        return null;
      }
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-select-item' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_SearchHighlighter__["a" /* default */], {
            query: search,
            source: id + ' ' + name })));



    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'input-select-item' }, id + ' ' + name);
  }

  handleBlur() {
    this.setState({ isOpen: false });
  }

  handleFocus() {
    this.setState({ isOpen: true });
  }

  handleSelect(index) {
    return this.handleStatusSelect(this.props.statusList, index);
  }

  getInputWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_4_classnames___default()({
      'response-status-selector-wrapper': true,
      'response-custom': true,
      'is-open': this.state.isOpen });

  }

  getSelectedStatusIndex() {
    let selectedStatusIndex = _.findIndex(this.props.statusList, ['id', this.props.selectedStatus]);
    return selectedStatusIndex;
  }

  getInputValue(index) {
    let { statusList } = this.props;
    return _.get(statusList[index], 'id', '') + ' ' + _.get(statusList[index], 'name', '');
  }

  focus() {
    _.invoke(this.refs, 'customInput.focus');
  }

  render() {

    let { statusList } = this.props,
    selectedStatusIndex = this.getSelectedStatusIndex();
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'status-selector-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'status-selector-label' }, 'Status'),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getInputWrapperClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Inputs__["b" /* Input */], {
            inputStyle: 'box',
            placeholder: 'Enter Response Code',
            ref: 'customInput',
            value: this.props.status,
            onChange: this.props.onResponseCodeChange,
            suggestions: this.props.statusList }))));




  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseErrorViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

ResponseErrorViewer = class ResponseErrorViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(e) {
    e.stopPropagation();
    e.preventDefault();
    pm.app.openExternalLink(e.target.href);
  }

  render() {
    let requestUrl = encodeURI(this.props.request.toJSON().transformedUrl);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-contents-group' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-header-text' }, 'Could not get any response'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-url-description-text' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'There was an error connecting to '),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', {
                  href: requestUrl,
                  className: 'response-error-viewer-url',
                  onClick: this.handleLinkClick },
                requestUrl),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, '.')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reasons-header-text' }, 'Why this might have happened:'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul', { className: 'response-error-viewer-reasons-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', { className: 'response-error-viewer-reason' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reason-wrapper' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reason-problem' }, 'The server couldn\'t send a response:'),


                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reason-cause' }, 'Ensure that the backend is working properly'))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', { className: 'response-error-viewer-reason' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reason-wrapper' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reason-problem' }, 'Self-signed SSL certificates are being blocked:'),


                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reason-cause' }, 'Fix this by turning off \'SSL certificate verification\' in ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', null, 'Settings > General')))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', { className: 'response-error-viewer-reason' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reason-wrapper' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reason-problem' }, 'Proxy configured incorrectly'),


                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reason-cause' }, 'Ensure that proxy is configured correctly in ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', null, 'Settings > Proxy')))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', { className: 'response-error-viewer-reason' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reason-wrapper' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reason-problem' }, 'Request timeout:'),


                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-error-viewer-reason-cause' }, 'Change request timeout in ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', null, 'Settings > General')))))))));








  }};


ResponseErrorViewer.defaultProps = { request: {} };

/***/ }),

/***/ 2552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseViewerTabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Tabs__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_postman_collection__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_postman_collection__);



let

ResponseViewerTabs = class ResponseViewerTabs extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor(props) {
    super(props);

    this.state = { hasFailedTests: false };

    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  attachModelListeners() {
    this.model && this.model.on('change:headers', this.handleModelChange);
    this.model && this.model.on('change:cookies', this.handleModelChange);
    this.requestModel && this.requestModel.on('change:testErrors', this.handleModelChange);
    this.requestModel && this.requestModel.on('change:testResults', this.handleModelChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change:headers', this.handleModelChange);
    this.model && this.model.off('change:cookies', this.handleModelChange);
    this.requestModel && this.requestModel.off('change:testErrors', this.handleModelChange);
    this.requestModel && this.requestModel.off('change:testResults', this.handleModelChange);
  }

  componentWillMount() {
    this.model = this.props.request.get('response');
    this.requestModel = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
    this.requestModel = null;
  }

  componentWillReceiveProps(nextProps) {
    this.detachModelListeners();
    this.model = nextProps.request.get('response');
    this.requestModel = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  handleModelChange() {
    if (_.isEmpty(this.model)) {
      return;
    }

    this.setState({
      headerCount: this.getheaderCount(),
      testStatusCount: this.getTestsStatus(),
      hasErrorInTest: this.getTestErrorStatus(),
      cookiesCount: this.getCookiesCount() });

  }

  getCookiesCount() {
    let request = this.props.request;
    return this.model.get('cookies') ? this.model.get('cookies').length : 0;
  }

  getheaderCount() {
    let headers = this.model.get('headers') || [];
    return headers.length;
  }

  getTestErrorStatus() {
    let request = this.props.request,
    sdkEvents = new __WEBPACK_IMPORTED_MODULE_3_postman_collection__["EventList"]({}, request.get('events')),
    testEvent = _.head(sdkEvents.listenersOwn('test')),
    testErrors = request.get('testErrors');

    // Having test and then have error else no need to check for test errors
    if (!_.isEmpty(_.invoke(testEvent, 'script.toSource')) && testErrors != null) {
      return true;
    }
    return false;
  }

  getTestsStatus() {
    let request = this.props.request,
    testResults = request.get('testResults'),
    testErrors = request.get('testErrors'),
    totalTests = 0,
    passedTests = 0;

    _.each(testResults, function (testResult) {
      // bail
      if (!testResult) {return;}

      // update total test count
      totalTests++;

      // update passed test count
      testResult.passed && passedTests++;
    });

    if (totalTests === 0) {
      return '';
    }

    if (passedTests === totalTests) {
      this.setState({ hasFailedTests: false });
    } else
    {
      this.setState({ hasFailedTests: true });
    }
    return passedTests + '/' + totalTests;
  }

  handleSelect(id) {
    this.props.onSelect && this.props.onSelect(id);
  }

  getTestCountClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()('response-viewer-tabs-content-count', { 'response-viewer-tabs-test-failed-count': this.state.hasFailedTests });
  }

  render() {

    let testStatusCount = this.state.testStatusCount,
    hasErrorInTest = this.state.hasErrorInTest;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-tabs' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Tabs__["b" /* Tabs */], {
            type: 'primary',
            defaultActive: 'body',
            activeRef: this.props.activeTab,
            onChange: this.handleSelect },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Tabs__["a" /* Tab */], { refKey: 'body', className: 'response-viewer-tab--body' }, 'Body'),

          this.props.tabMode !== 'exampleResponse' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Tabs__["a" /* Tab */], { refKey: 'cookies', className: 'response-viewer-tab--cookies' }, 'Cookies',

            this.state.cookiesCount !== 0 &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-viewer-tabs-content-count' }, '(',
              this.state.cookiesCount, ')')),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Tabs__["a" /* Tab */], { refKey: 'headers', className: 'response-viewer-tab--headers' }, 'Headers',

            this.state.headerCount !== 0 &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-viewer-tabs-content-count' }, '(',
              this.state.headerCount, ')')),




          this.props.tabMode !== 'exampleResponse' &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Tabs__["a" /* Tab */], { refKey: 'tests', className: 'response-viewer-tab--tests' }, 'Test Results',

            hasErrorInTest &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-viewer-tabs-test-error-badge' }),


            !hasErrorInTest &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: this.getTestCountClasses() },

              testStatusCount != '' &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'response-viewer-tabs-test-status-count' }, '(', this.state.testStatusCount, ')'))))));








  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseViewerTabContents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Tabs__ = __webpack_require__(248);

let

ResponseViewerTabContents = class ResponseViewerTabContents extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { active: this.props.activeKey === child.key });
    });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-tab-contents' },
        children));


  }};

/***/ }),

/***/ 2554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseViewerTabContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _class;

let


ResponseViewerTabContent = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class ResponseViewerTabContent extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'response-viewer-tab-content': true,
      'is-hidden': !this.props.active });

  }

  render() {

    let classes = this.getClasses();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes },
        this.props.children));


  }}) || _class;

/***/ }),

/***/ 2555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseViewerEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_AnalyticsService__ = __webpack_require__(22);

let

ResponseViewerEmpty = class ResponseViewerEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-empty', style: this.props.style },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-empty__header' }, 'Response'),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-empty__content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-empty__content__editor' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-empty__content__editor__content' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-empty__onboarding' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-empty__onboarding__heading' }, 'Hit the Send button to get a response.'),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-empty__onboarding__url-group' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-empty__onboarding__url-group__url' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-empty__onboarding__url-group__send' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-empty__onboarding__url-group__save' }))))))));







  }};

/***/ }),

/***/ 2556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRScriptErrorViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_prscripts_PRScriptErrorViewer__ = __webpack_require__(2557);
var _class;

let


PRScriptErrorViewerContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class PRScriptErrorViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { isShown: false };

    this.handleModelChange = this.handleModelChange.bind(this);
    this.handlePRScriptError = this.handlePRScriptError.bind(this);
  }

  componentWillMount() {
    this.model = this.props.request;
    this.attachModelListeners();
    this.handleModelChange();
    this.handlePRScriptError();
  }

  componentWillUnmount() {
    this.detachModelListeners();
    this.model = null;
  }

  attachModelListeners() {
    this.model && this.model.on('change:lifecycle', this.handleModelChange);
    this.model && this.model.on('prscriptError', this.handlePRScriptError);
  }

  detachModelListeners() {
    this.model && this.model.off('change:lifecycle', this.handleModelChange);
    this.model && this.model.off('prscriptError', this.handlePRScriptError);
  }

  componentWillReceiveProps(nextProps) {
    if (this.model === nextProps.request) {
      return;
    }

    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
  }

  getRequestLifecycle() {
    return this.model.get('lifecycle') || 'idle';
  }

  handleModelChange() {
    let isShown = this.getRequestLifecycle() === 'PRScriptError';

    if (isShown !== this.state.isShown) {
      this.setState({ isShown: isShown });
    }
  }

  handlePRScriptError(message) {
    this.setState({ prscriptError: message || '' });
  }

  render() {

    if (this.state.isShown) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_prscripts_PRScriptErrorViewer__["a" /* default */], { errorMsg: this.state.prscriptError }));

    }
    return false;
  }}) || _class;

/***/ }),

/***/ 2557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRScriptErrorViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
var _class;
let


PRScriptErrorViewer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class PRScriptErrorViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'prscript-error-container' }, 'There was an error in evaluating the Pre-request Script: \xA0',

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'prscript-error-message' },
          this.props.errorMsg)));



  }}) || _class;

/***/ }),

/***/ 2558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleResponseMetaViewerContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_example_response_ExampleResponseMetaViewer__ = __webpack_require__(2559);
var _class;

let


ExampleResponseMetaViewerContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class ExampleResponseMetaViewerContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      requestName: '',
      responses: [],
      exampleResponseId: '',
      exampleResponseName: '',
      isExampleUnsaved: false,
      responseNameError: false,
      showInfoBar: false };

    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleLoadExampleResponse = this.handleLoadExampleResponse.bind(this);
    this.handleLoadOriginalRequest = this.handleLoadOriginalRequest.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleExampleNameChange = this.handleExampleNameChange.bind(this);
    this.handleDirtyTabChange = this.handleDirtyTabChange.bind(this);
    this.handleSaveExample = this.handleSaveExample.bind(this);
  }

  componentWillMount() {
    let notifications = this.props.tab.get('notifications');
    if (_.includes(notifications, 'showDeprecatedSaveResponse')) {
      this.setState({ showInfoBar: true });
    }
    this.model = this.props.request;
    this.responseModel = this.model.get('response');
    if (!this.responseModel.get('id')) {
      this.responseModel.set('name', this.model.get('name'));
    }
    this.attachModelListeners();
    this.handleModelChange();
    this.handleDirtyTabChange();
  }

  componentWillUnmount() {
    this.props.tab.unsetNotification('showDeprecatedSaveResponse');
    this.detachModelListeners();
  }

  componentWillReceiveProps(nextProps) {
    this.detachModelListeners();
    this.model = nextProps.request;
    this.attachModelListeners();
    this.handleModelChange();
    this.handleDirtyTabChange();
  }

  attachModelListeners() {
    this.model && this.model.on('change', this.handleModelChange);
    this.responseModel && this.responseModel.on('change', this.handleModelChange);
    this.props.tab && this.props.tab.on('change:isDirty', this.handleDirtyTabChange);
  }

  detachModelListeners() {
    this.model && this.model.off('change', this.handleModelChange);
    this.responseModel && this.responseModel.off('change', this.handleModelChange);
    this.props.tab && this.props.tab.off('change:isDirty', this.handleDirtyTabChange);
  }

  handleModelChange() {
    this.responseModel = this.model.get('response');
    this.setState({
      requestName: this.model.get('name'),
      responses: this.model.get('responses') || [],
      exampleResponseId: this.responseModel.get('id'),
      exampleResponseName: this.responseModel.get('name'),
      write: this.model.isWriteable() });

  }

  handleLoadExampleResponse(id) {
    this.model.loadSampleResponseById(id);
  }

  handleLoadOriginalRequest() {
    pm.tabManager.getCurrentTab().restoreRequestState();
  }

  handleExampleNameChange(value) {
    this.responseModel.set('name', value);
  }

  handleScroll() {
    this.refs.exampleResponseMeta.handleScroll();
  }

  handleDirtyTabChange() {
    this.setState({ isExampleUnsaved: this.props.tab.get('isDirty') });
  }

  handleSaveExample() {
    if (this.responseModel && !this.responseModel.canSave('request')) {
      pm.alerts.error('Response body is too large to be saved');
      return;
    }

    if (_.isEmpty(_.trim(this.state.exampleResponseName))) {
      this.setState({ responseNameError: true }, () => {
        _.invoke(this.refs, 'exampleResponseMeta.focus');
      });
      return;
    }
    this.setState({ responseNameError: false }, () => {
      this.props.onSaveExample();
    });
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_example_response_ExampleResponseMetaViewer__["a" /* default */], {
        currentResponseId: this.state.exampleResponseId,
        currentResponseName: this.state.exampleResponseName,
        exampleResponseList: this.state.responses,
        isExampleUnsaved: this.state.isExampleUnsaved,
        ref: 'exampleResponseMeta',
        requestName: this.state.requestName,
        responseNameError: this.state.responseNameError,
        showInfoBar: this.state.showInfoBar,
        write: this.state.write,
        onExampleNameChange: this.handleExampleNameChange,
        onLoadExampleResponse: this.handleLoadExampleResponse,
        onLoadOriginalRequest: this.handleLoadOriginalRequest,
        onSaveExample: this.handleSaveExample }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleResponseMetaViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Inputs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_ListCarousal__ = __webpack_require__(2560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_LeftSolidIcon__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(22);
var _class;






let


ExampleResponseMetaViewer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class ExampleResponseMetaViewer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleCarousalItemChange = this.handleCarousalItemChange.bind(this);
    this.isDocked = false;
  }

  getCurrentSelectedResponseIndex() {
    let selectedIndex = _.findIndex(this.props.exampleResponseList, ['id', this.props.currentResponseId]);
    return selectedIndex < 0 ? 0 : selectedIndex;
  }

  componentDidMount() {
    this.focus();
  }

  handleCarousalItemChange(newIndex) {
    let newExampleResponseId = _.get(this, `props.exampleResponseList[${newIndex}].id`);
    newExampleResponseId && this.props.onLoadExampleResponse(newExampleResponseId);
  }

  handleScroll() {
    let actionBar = this.refs.exampleResponseMetaActions,
    actionBarPlaceholder = this.refs.actionBarPlaceholder,
    $tabContainer = actionBar.closest('.requester-tab-content'),
    actionBarContainerClientRect = actionBar.getBoundingClientRect(),
    actionBarContainerTop = actionBarContainerClientRect.top,
    actionBarContainerWidth = actionBarContainerClientRect.width,
    actionBarContainerHeight = actionBarContainerClientRect.height,
    tabContainerTop = $tabContainer.getBoundingClientRect().top;

    if (actionBarContainerTop <= tabContainerTop && $tabContainer.scrollTop !== 0) {
      if (!this.isDocked) {
        actionBar.style.top = tabContainerTop - 50 + 'px';
        actionBar.style.width = actionBarContainerWidth + 'px';
        actionBar.classList.add('is-docked');

        // show placeholder
        actionBarPlaceholder.style.display = 'block';
        actionBarPlaceholder.style.height = actionBarContainerHeight + 'px';
        this.isDocked = true;
      }
    } else
    {
      actionBar.style.top = 'initial';
      actionBar.style.width = 'initial';
      actionBar.classList.remove('is-docked');

      // hide placeholder
      actionBarPlaceholder.style.display = 'none';
      this.isDocked = false;
    }
  }

  focus() {
    setTimeout(() => {
      _.invoke(this.refs, 'exampleName.focus');
    }, 300);
  }

  handleLearnMore() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["o" /* EXAMPLES_BLOG */]);
    __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('examples', 'learn_more', 'save_response_banner');
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-meta-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'example-response-fixed-header',
            ref: 'exampleResponseMetaActions' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-meta--actions' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], {
                  className: 'goto-base-request',
                  type: 'text',
                  onClick: this.props.onLoadOriginalRequest },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_LeftSolidIcon__["a" /* default */], { className: 'goto-base-request-icon' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'request-name' }, this.props.requestName))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
              this.props.currentResponseId ?

              !_.isEmpty(this.props.exampleResponseList) &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_ListCarousal__["a" /* default */], {
                currentIndex: this.getCurrentSelectedResponseIndex(),
                list: this.props.exampleResponseList,
                onChange: this.handleCarousalItemChange }) :


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-meta--new-label' }, 'Untitled Example')),




            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-save' },
              this.props.write && this.props.isExampleUnsaved ? this.props.currentResponseId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null, 'This example has unsaved changes') : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null),

              this.props.write &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], {
                  disabled: !this.props.isExampleUnsaved,
                  size: 'small',
                  type: 'primary',
                  onClick: this.props.onSaveExample }, 'Save Example'))),







          this.props.showInfoBar &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'save-response-infobar' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Responses are now saved in Examples, which you can edit before saving. You can also add new examples with your own custom response. '),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], {
                type: 'text',
                onClick: this.handleLearnMore },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('u', null, 'Learn More')))),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { ref: 'actionBarPlaceholder' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-name--label' }, 'NAME'),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'example-response-name' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Inputs__["b" /* Input */], {
            error: this.props.responseNameError,
            inputStyle: 'box',
            placeholder: 'Name your example',
            ref: 'exampleName',
            value: this.props.currentResponseName || '',
            onChange: this.props.onExampleNameChange }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCarousal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_keymaps_KeyMaps__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons_LeftSolidIcon__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons_RightSolidIcon__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(10);
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

/***/ 2561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionVariablesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_CollectionVariablesCache__ = __webpack_require__(2562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);


let

CollectionVariablesProvider = class CollectionVariablesProvider extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.collectionCache = new __WEBPACK_IMPORTED_MODULE_1__controllers_CollectionVariablesCache__["a" /* default */](this.context.variablesCache);
    this.collectionCache.setCollectionId(this.props.collectionId);
  }

  componentWillUnmount() {
    this.collectionCache.disposeListeners();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.collectionId !== nextProps.collectionId) {
      this.collectionCache.setCollectionId(nextProps.collectionId);
    }
  }

  getChildContext() {
    return { variablesCache: this.collectionCache };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children);
  }};

CollectionVariablesProvider.contextTypes = { variablesCache: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object };
CollectionVariablesProvider.childContextTypes = { variablesCache: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object };

/***/ }),

/***/ 2562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionVariablesCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_backbone__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_backbone__);
var _desc, _value, _class, _descriptor;function _initDefineProp(target, property, descriptor, context) {if (!descriptor) return;Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 });}function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {var desc = {};Object['ke' + 'ys'](descriptor).forEach(function (key) {desc[key] = descriptor[key];});desc.enumerable = !!desc.enumerable;desc.configurable = !!desc.configurable;if ('value' in desc || desc.initializer) {desc.writable = true;}desc = decorators.slice().reverse().reduce(function (desc, decorator) {return decorator(target, property, desc) || desc;}, desc);if (context && desc.initializer !== void 0) {desc.value = desc.initializer ? desc.initializer.call(context) : void 0;desc.initializer = undefined;}if (desc.initializer === void 0) {Object['define' + 'Property'](target, property, desc);desc = null;}return desc;}function _initializerWarningHelper(descriptor, context) {throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');}


let

CollectionVariablesCache = (_class = class CollectionVariablesCache {



  constructor(variableCache) {_initDefineProp(this, 'collectionId', _descriptor, this);
    _.assignIn(this, __WEBPACK_IMPORTED_MODULE_3_backbone___default.a.Events);
    this.variableCache = variableCache;
    this.collectionVariables = [];
    this._triggerChange = this._triggerChange.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this.disposer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx__["e" /* autorun */])(this._handleChange);
    this.variableCache.on('change', this._triggerChange);
    this.isAutocompleteEnabled = this.variableCache.isAutocompleteEnabled;
    this.getDynamicVariables = this.variableCache.getDynamicVariables;
  }

  disposeListeners() {
    this.disposer();
    this.variableCache.off('change', this._triggerChange);
  }

  _triggerChange() {
    this.trigger('change');
  }

  _handleChange() {
    let store = Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('CollectionStore').find(this.collectionId);
    if (!store) {
      this.collectionVariables = [];
    } else
    {
      this.collectionVariables = _.map(__WEBPACK_IMPORTED_MODULE_2__utils_util__["a" /* default */].getEnabledValues(store.variables), variable => {
        return {
          scope: 'collection',
          name: variable.key,
          value: variable.value,
          sessionValue: variable.sessionValue };

      });
    }
    this._triggerChange();
  }


  setCollectionId(id) {
    this.collectionId = id;
  }

  getActiveVariables() {
    return _.concat(this.variableCache._getActiveEnvVars(), this.collectionVariables, this.variableCache._getActiveGlobalVars());
  }}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'collectionId', [__WEBPACK_IMPORTED_MODULE_1_mobx__["n" /* observable */]], { enumerable: true, initializer: function () {return '';} }), _applyDecoratedDescriptor(_class.prototype, 'setCollectionId', [__WEBPACK_IMPORTED_MODULE_1_mobx__["d" /* action */]], Object.getOwnPropertyDescriptor(_class.prototype, 'setCollectionId'), _class.prototype)), _class);
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

/***/ })

});