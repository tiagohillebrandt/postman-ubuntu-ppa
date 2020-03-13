webpackJsonp([7],{

/***/ 3746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__worker_graphql__ = __webpack_require__(4775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(4243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common__);



ace.define('ace/mode/graphql', ['require', 'exports', 'ace/lib/oop', 'ace/mode/graphql_base', 'ace/mode/graphql_highlight_rules', 'ace/worker/worker_client'], (acequire, exports) => {
  const oop = acequire('ace/lib/oop');
  const GraphQLBase = acequire('ace/mode/graphql_base').Mode;
  const { UIWorkerClient } = acequire('ace/worker/worker_client');


  var Mode = function () {
    GraphQLBase.call(this);
  };

  oop.inherits(Mode, GraphQLBase);

  (function () {
    this.$id = 'ace/mode/graphql';

    this.createWorker = function (session) {
      var worker = new UIWorkerClient(['ace'], 'ace/mode/graphql_worker', 'GraphQLWorker');
      worker.attachToDocument(session.getDocument());

      worker.on('annotate', function (e) {
        session.setAnnotations(e.data);
      });

      worker.on('terminate', function () {
        session.clearAnnotations();
      });

      return worker;
    };

  }).call(Mode.prototype);

  exports.Mode = Mode;
});

/***/ }),

/***/ 4775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language__ = __webpack_require__(1686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_language__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mirror__ = __webpack_require__(4242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mirror__);



ace.define('ace/mode/graphql_worker', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/worker/mirror'], function (acequire, exports, module) {
  'use strict';

  const oop = acequire('ace/lib/oop');
  const { Mirror } = acequire('ace/worker/mirror');

  var GraphQLWorker = function (sender) {
    Mirror.call(this, sender);
  };

  oop.inherits(GraphQLWorker, Mirror);

  (function () {

    this.onUpdate = function () {
      var value = this.doc.getValue();

      if (value === '') {
        // If the value is empty set annotations as an empty array and return.
        this.sender.emit('annotate', []);
        return;
      }

      var errors;

      try {
        // If syntax error are present, parse function will throw the first syntax error.
        Object(__WEBPACK_IMPORTED_MODULE_0_graphql_language__["parse"])(value);
      }
      catch (error) {
        // Since only one error is catched, put it in the array.
        errors = [error];
      }

      var annotations = _.map(errors, error => {
        return {
          row: _.subtract(_.get(error, 'locations[0].line'), 1),
          column: _.get(error, 'locations[0].column'),
          text: _.get(error, 'message'),
          type: 'error' };

      });

      this.sender.emit('annotate', annotations);
    };

  }).call(GraphQLWorker.prototype);

  exports.GraphQLWorker = GraphQLWorker;
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })

});