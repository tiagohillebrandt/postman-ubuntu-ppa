webpackJsonp([29],{

/***/ 3415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceBrowserFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Inputs__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_LibrarySortTypeConstants__ = __webpack_require__(3450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_LibrarySortTypeLabelMap__ = __webpack_require__(3724);








let WorkspaceBrowserFilter = class WorkspaceBrowserFilter extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser-filter-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser-filter' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Inputs__["b" /* Input */], {
            inputStyle: 'search',
            placeholder: 'Type to filter',
            onChange: this.props.onFilterQueryChange,
            onCancel: this.props.onFilterQueryCancel,
            query: this.props.filterQuery }),


          _.isFunction(this.props.onSortTypeChange) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser-filter__actions' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser-filter__actions__meta' }, 'Sort by: '),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["a" /* Dropdown */], {
                onSelect: this.props.onSortTypeChange },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["b" /* DropdownButton */], { type: 'secondary', size: 'small' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], { className: 'workspace-browser-filter__actions-sort-button' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null, __WEBPACK_IMPORTED_MODULE_5__constants_LibrarySortTypeLabelMap__["a" /* default */][this.props.sortType]))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["c" /* DropdownMenu */], { 'align-left': true },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_4__constants_LibrarySortTypeConstants__["c" /* LIBRARY_SORT_TYPE_NAME */] },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Name')),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_4__constants_LibrarySortTypeConstants__["b" /* LIBRARY_SORT_TYPE_LAST_MODIFIED */] },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Last Modified')),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_4__constants_LibrarySortTypeConstants__["d" /* LIBRARY_SORT_TYPE_OWNER */] },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Owner')),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_4__constants_LibrarySortTypeConstants__["a" /* LIBRARY_SORT_TYPE_DATE_CREATED */] },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Date Created'))))))));








  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const LIBRARY_SORT_TYPE_NAME = 'name';
/* harmony export (immutable) */ __webpack_exports__["c"] = LIBRARY_SORT_TYPE_NAME;

const LIBRARY_SORT_TYPE_LAST_MODIFIED = 'last-modified';
/* harmony export (immutable) */ __webpack_exports__["b"] = LIBRARY_SORT_TYPE_LAST_MODIFIED;

const LIBRARY_SORT_TYPE_OWNER = 'owner';
/* harmony export (immutable) */ __webpack_exports__["d"] = LIBRARY_SORT_TYPE_OWNER;

const LIBRARY_SORT_TYPE_DATE_CREATED = 'date-created';
/* harmony export (immutable) */ __webpack_exports__["a"] = LIBRARY_SORT_TYPE_DATE_CREATED;


/***/ }),

/***/ 3452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ProfilePic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Meta; });
/* unused harmony export Body */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Details; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Restore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_postman_collection__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_postman_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_postman_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Avatar__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_ActivityFeedDetailsMapConstant__ = __webpack_require__(3468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WorkspaceActivityFeedDetailsComponents__ = __webpack_require__(3739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(6);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;








let

Header = class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-header' },
        this.props.children));


  }};let


Heading = class Heading extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-heading' },
        this.props.children));


  }};let


ProfilePic = class ProfilePic extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-profile-pic-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Avatar__["a" /* default */], { type: 'user', userId: this.props.id })));


  }};let


Meta = class Meta extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-meta' },
        this.props.children));


  }};let


Body = class Body extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-body' },
        this.props.children));


  }};let


Folder = class Folder extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let payload = {
      type: 'folder',
      id: this.props.id };

    if (this.props.actionHandler) {
      this.props.actionHandler(payload);
    }
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-folder',
          onClick: this.handleClick },
        this.props.name));

  }};let


Response = class Response extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let payload = {
      type: 'response',
      id: this.props.id };

    if (this.props.actionHandler) {
      this.props.actionHandler(payload);
    }
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-response',
          onClick: this.handleClick },
        this.props.name));

  }};let


Request = class Request extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let payload = {
      type: '`request`',
      id: this.props.id };

    if (this.props.actionHandler) {
      this.props.actionHandler(payload);
    }
  }

  render() {
    let methodClasses = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(
    'activity-item-request-method',
    `method-${this.props.method}`);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-request-name', onClick: this.handleClick },
        this.props.name));


  }};let


Collection = class Collection extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let payload = {
      type: 'collection',
      id: this.props.id };

    if (this.props.actionHandler) {
      this.props.actionHandler(payload);
    }
  }

  render() {
    let methodClasses = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(
    'activity-item-collection-method',
    `method-${this.props.method}`),

    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

        meta.model === 'collection' ?
        ' this ' :
        !_.isEmpty(this.props.name) ?
        ' the ' :
        ' a ',

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'collection '),

        meta.model === 'workspace' &&
        !_.isEmpty(this.props.name) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-collection-name', onClick: this.handleClick }, this.props.name)));



  }};let



User = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class User extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('CurrentUserStore');

    let displayName = currentUser.id === this.props.id ? 'You' : this.props.name || this.props.username;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-user' }, displayName, ','));

  }}) || _class;let


Time = class Time extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let formattedTime = __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default.a.getFormattedTime(this.props.timestamp);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-time' }, formattedTime));

  }};let


Details = class Details extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  filterEntity(entity, data) {
    if (_.includes(['test', 'prerequest'], entity)) {
      return this.processEvents(entity, data);
    }
    return data;
  }

  processEvents(processDataType, data) {
    let sdkEvents = new __WEBPACK_IMPORTED_MODULE_3_postman_collection__["EventList"]({}, data),
    entityEvent = _.head(sdkEvents.listenersOwn(processDataType));

    return _.invoke(entityEvent, 'script.toSource');
  }

  render() {
    let {
      input = {},
      rollback = {},
      model,
      instance,
      detailsError = false } =
    this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-details-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-details' },

          _.map(__WEBPACK_IMPORTED_MODULE_5__constants_ActivityFeedDetailsMapConstant__["a" /* default */], (activity, index) => {
            let entity = activity.entity,
            previous = rollback[entity],
            current = input[entity],
            filterEntity = activity.filterEntity,
            isChangeSetAvailable = false;

            if (filterEntity) {
              previous = this.filterEntity(filterEntity, previous);
              current = this.filterEntity(filterEntity, current);
            }

            isChangeSetAvailable = previous || current;

            if (isChangeSetAvailable && entity === 'order') {
              previous = null;
              current = 'Changed';
            }
            if (isChangeSetAvailable) {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__WorkspaceActivityFeedDetailsComponents__["a" /* DetailsItem */], _extends({
                  key: activity.entity + index,
                  previous: previous || '',
                  current: current || '',
                  model: model,
                  name: instance.name || '' },
                activity)));


            }
            return false;
          }))));




  }};let


Restore = class Restore extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onRestore && this.props.onRestore(this.props.id);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'workspace-activity-item-restore': true,
      'workspace-activity-item-restore--is-restoring': this.props.isRestoring });

  }

  render() {
    if (_.isNil(this.props.id) ||
    _.isNil(this.props.rollback_from) ||
    this.props.id < this.props.rollback_from) {
      return false;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: this.getClasses(), onClick: this.handleClick },
        this.props.isRestoring ? 'Restoring...' : 'Restore'));


  }};



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Share; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Unshare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Unsubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__ = __webpack_require__(3452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__ = __webpack_require__(3449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_LoadingIndicator__ = __webpack_require__(151);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



let

Create = class Create extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Created '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Update = class Update extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta,
    trigger = activity.trigger,
    changesCount = __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__["a" /* default */].getWhiteListedActivitiesCount(activity),
    pluralizedChangeText = __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__["a" /* default */].pluralize({
      count: changesCount,
      singular: 'change',
      plural: 'changes' });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head-content' },

                  changesCount > 0 &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', changesCount, ' ', pluralizedChangeText, ' to '),


                  changesCount === 0 &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', trigger === 'restore' ? 'Restored' : 'Modified', ' '),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                  activity.instance, {
                    meta: meta })))),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))),





          changesCount > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["b" /* Details */], activity))));



  }};let


Delete = class Delete extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Deleted'),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Share = class Share extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Modified access to '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt })))))));






  }};let


Unshare = class Unshare extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Modified access to '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt })))))));






  }};let


Subscribe = class Subscribe extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Subscribed to'),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt })))))));






  }};let


Unsubscribe = class Unsubscribe extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Unsubscribed from'),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt })))))));






  }};let


LoadFeed = class LoadFeed extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper workspace-activity-item-loadfeed' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-loadmore-container' },

          this.props.error ?
          'Something went wrong while fetching the activity feed' :
          this.props.loading ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_LoadingIndicator__["a" /* default */], null) : '')));




  }};




/***/ }),

/***/ 3722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkspaceBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WorkspaceBrowserItems_WorkspaceCollectionsBrowser__ = __webpack_require__(3723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WorkspaceBrowserItems_WorkspaceEnvironmentsBrowser__ = __webpack_require__(3725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__WorkspaceBrowserItems_WorkspaceMonitorsBrowser__ = __webpack_require__(3727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WorkspaceBrowserItems_WorkspaceMocksBrowser__ = __webpack_require__(3729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WorkspaceBrowserItems_WorkspaceHistoryBrowser__ = __webpack_require__(3731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WorkspaceBrowserItems_WorkspaceIntegrationsBrowser__ = __webpack_require__(3734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__WorkspaceBrowserItems_WorkspaceActivityBrowser__ = __webpack_require__(3736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_pipelines_user_action__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__WorkspaceBrowserItems_WorkspaceOfflineView__ = __webpack_require__(3745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_workspaces_WorkspaceActionDropdown__ = __webpack_require__(1415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__api_dev_components_api_browse_WorkspaceAPIBrowser_WorkspaceAPIBrowser__ = __webpack_require__(3746);
var _class;

















let


WorkspaceBrowser = Object(__WEBPACK_IMPORTED_MODULE_10_mobx_react__["a" /* observer */])(_class = class WorkspaceBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'apis' };


    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.handleWorkspaceAction = this.handleWorkspaceAction.bind(this);
  }

  componentDidMount() {
    if (Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').isSwitching) {
      Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').resetLifecycle(Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace);
    }
  }

  componentDidUpdate() {
    if (Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').isSwitching) {
      Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').resetLifecycle(Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace);
    }
  }

  handleTabSelect(tab) {
    this.setState({ activeTab: tab });
    __WEBPACK_IMPORTED_MODULE_12__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'browse', tab);
  }

  handleWorkspaceAction(action) {
    let workspaceId = Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id;
    switch (action) {
      case 'add_dependencies':
        __WEBPACK_IMPORTED_MODULE_12__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'initiate_add_to_ws', 'browse');
        pm.mediator.trigger('openBulkAddToWorkspaceModal', workspaceId);
        break;

      case 'details':
        __WEBPACK_IMPORTED_MODULE_12__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'view_details');
        pm.mediator.trigger('openWorkspaceDetailsModal', Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore'));
        break;

      case 'join':
        let joinWorkspaceEvent = Object(__WEBPACK_IMPORTED_MODULE_13__modules_model_event__["a" /* createEvent */])('join', 'workspace', { model: 'workspace', workspace: { id: workspaceId } });

        Object(__WEBPACK_IMPORTED_MODULE_11__modules_pipelines_user_action__["a" /* default */])(joinWorkspaceEvent).
        then(() => {
          Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').switch(workspaceId);
        }).
        catch(e => {
          Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').resetLifecycle(workspaceId);
        });
        break;}

  }

  render() {
    let isOffline = !Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('SyncStatusStore').isSocketConnected;

    if (isOffline) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser__container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__WorkspaceBrowserItems_WorkspaceOfflineView__["a" /* default */], null)));


    }

    let isJoining = Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').isJoining(Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser__container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser__tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["b" /* Tabs */], {
              type: 'primary',
              defaultActive: 'collections',
              activeRef: this.state.activeTab,
              onChange: this.handleTabSelect },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'apis' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'APIs'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-browser-tabs__api-beta-label' }, 'BETA')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'collections' }, 'Collections'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'history', className: 'requester-library-tab--history' }, 'History'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'environments', className: 'requester-library-tab--collections' }, 'Environments'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'monitors', className: 'requester-library-tab--environments' }, 'Monitors'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'mocks', className: 'requester-library-tab--environments' }, 'Mocks'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'integrations', className: 'requester-library-tab--environments' }, 'Integrations'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'activity', className: 'requester-library-tab--environments' }, 'Activity')),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser__tabs__actions' },

            !Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').isMember &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                type: 'primary',
                size: 'small',
                disabled: isJoining || Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isLoading,
                onClick: this.handleWorkspaceAction.bind(this, 'join'),
                className: 'join__button' },


              isJoining ?
              'Joining' :
              'Join'),




            !Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').isMember &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                type: 'secondary',
                size: 'small',
                onClick: this.handleWorkspaceAction.bind(this, 'details'),
                className: 'details__button' }, 'Workspace details'),





            Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').isMember &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                type: 'secondary',
                size: 'small',
                className: 'options__button',
                onClick: this.handleWorkspaceAction.bind(this, 'add_dependencies') }, 'Add to workspace'),





            Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').isMember &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_workspaces_WorkspaceActionDropdown__["a" /* default */], {
              workspaceId: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id,
              tooltipPlacement: 'left' }))),





        this.state.activeTab === 'collections' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__WorkspaceBrowserItems_WorkspaceCollectionsBrowser__["a" /* WorkspaceCollectionsBrowser */], {
          collections: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').collections,
          archivedCollections: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').archivedCollections }),



        this.state.activeTab === 'environments' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__WorkspaceBrowserItems_WorkspaceEnvironmentsBrowser__["a" /* WorkspaceEnvironmentsBrowser */], {
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'monitors' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__WorkspaceBrowserItems_WorkspaceMonitorsBrowser__["a" /* WorkspaceMonitorsBrowser */], {
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'mocks' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__WorkspaceBrowserItems_WorkspaceMocksBrowser__["a" /* WorkspaceMocksBrowser */], {
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'integrations' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__WorkspaceBrowserItems_WorkspaceIntegrationsBrowser__["a" /* WorkspaceIntegrationsBrowser */], {
          integrations: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').integrations }),



        this.state.activeTab === 'activity' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__WorkspaceBrowserItems_WorkspaceActivityBrowser__["a" /* WorkspaceActivityBrowser */], {
          isSignedIn: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn,
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'history' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__WorkspaceBrowserItems_WorkspaceHistoryBrowser__["a" /* WorkspaceHistoryBrowser */], {
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'apis' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__api_dev_components_api_browse_WorkspaceAPIBrowser_WorkspaceAPIBrowser__["a" /* WorkspaceAPIBrowser */], null)));



  }}) || _class;

/***/ }),

/***/ 3723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceCollectionsBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_archivedResource_ArchivedResource__ = __webpack_require__(3448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_MoreIcon__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Icons_ShareIcon__ = __webpack_require__(1397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Icons_ForkIcon__ = __webpack_require__(3445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_empty_states_CollectionsEmpty__ = __webpack_require__(3451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_empty_states_NoResultFound__ = __webpack_require__(3412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__ = __webpack_require__(3404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_CollectionActionsUtil__ = __webpack_require__(3465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_LibrarySortTypeConstants__ = __webpack_require__(3450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_util__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_base_LoadingIndicator__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_base_InlineEditor__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__models_services_DashboardService__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_collections_CollectionMetaIcons__ = __webpack_require__(1395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__modules_services_ShareModalService__ = __webpack_require__(1399);
var _class;


























let WorkspaceCollectionsBrowser = Object(__WEBPACK_IMPORTED_MODULE_15_mobx_react__["a" /* observer */])(_class = class WorkspaceCollectionsBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      filterQuery: '',
      sortType: __WEBPACK_IMPORTED_MODULE_14__constants_LibrarySortTypeConstants__["c" /* LIBRARY_SORT_TYPE_NAME */] };


    this.handleFilterQueryChange = this.handleFilterQueryChange.bind(this);
    this.handleFilterQueryCancel = this.handleFilterQueryCancel.bind(this);
    this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleRefreshDebounced = _.debounce(this.handleRefresh, 5000, {
      leading: true,
      trailing: false });

  }

  getFilteredCollections() {
    return _.chain(this.props.collections).
    filter(collection => _.includes(_.toLower(collection.name), _.toLower(this.state.filterQuery))).
    sortBy([this.getSortFunction(this.state.sortType)]).
    value();
  }

  handleFilterQueryChange(filterQuery) {
    this.setState({ filterQuery });
  }

  handleFilterQueryCancel() {
    this.setState({ filterQuery: '' });
  }

  handleSortTypeChange(sortType) {
    this.setState({ sortType });
  }

  getSortFunction(type) {
    switch (type) {
      case __WEBPACK_IMPORTED_MODULE_14__constants_LibrarySortTypeConstants__["c" /* LIBRARY_SORT_TYPE_NAME */]:
        return collection => _.toLower(collection.name);

      case __WEBPACK_IMPORTED_MODULE_14__constants_LibrarySortTypeConstants__["b" /* LIBRARY_SORT_TYPE_LAST_MODIFIED */]:
        return collection => new __WEBPACK_IMPORTED_MODULE_10_moment___default.a(collection.updatedAt);

      case __WEBPACK_IMPORTED_MODULE_14__constants_LibrarySortTypeConstants__["a" /* LIBRARY_SORT_TYPE_DATE_CREATED */]:
        return collection => new __WEBPACK_IMPORTED_MODULE_10_moment___default.a(collection.createdAt);

      case __WEBPACK_IMPORTED_MODULE_14__constants_LibrarySortTypeConstants__["d" /* LIBRARY_SORT_TYPE_OWNER */]:
        return collection => _.toLower(__WEBPACK_IMPORTED_MODULE_16__utils_util__["a" /* default */].getUserNameForId(collection.owner, Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('CurrentUserStore')));}

  }

  handleAction(collection, action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember) {
      pm.mediator.trigger('joinWorkspace');
      return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_13__utils_CollectionActionsUtil__["a" /* default */])(collection.id, action, {}, { origin: 'browse' });
  }

  handleShare(collection) {
    Object(__WEBPACK_IMPORTED_MODULE_22__modules_services_ShareModalService__["b" /* shareCollection */])(collection.uid, { origin: 'browse' });
  }

  getActions(collection) {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('PermissionStore'),
    currentUserStore = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id,
    collectionId = collection.id,
    isForked = _.get(collection, 'isForked', false);

    return [
    {
      type: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["b" /* ACTION_MANAGE_ROLES */],
      label: 'Manage Roles',
      isEnabled: Boolean(currentUserStore.team) },

    {
      type: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */],
      label: 'Duplicate',
      isEnabled: permissionStore.can('addCollection', 'workspace', workspaceId) },

    {
      type: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["p" /* ACTION_TYPE_FORK */],
      label: 'Create a fork',
      isEnabled: true },

    {
      type: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_MERGE */],
      label: 'Merge changes',
      isEnabled: isForked },

    {
      type: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DOWNLOAD */],
      label: 'Export',
      isEnabled: true },

    {
      type: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */],
      label: 'Monitor Collection',
      isEnabled: permissionStore.can('addMonitor', 'collection', collectionId) && permissionStore.can('addMonitor', 'workspace', workspaceId) },

    {
      type: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */],
      label: 'Mock Collection',
      isEnabled: permissionStore.can('addMock', 'collection', collectionId) && permissionStore.can('addMock', 'workspace', workspaceId) },

    {
      type: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_PUBLISH_DOCS */],
      label: 'Publish Docs',
      isEnabled: permissionStore.can('publish', 'collection', collectionId) },

    {
      type: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */],
      label: 'Remove from workspace',
      isEnabled: permissionStore.can('removeCollection', 'workspace', workspaceId) },

    {
      type: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */],
      label: 'Delete',
      isEnabled: permissionStore.can('delete', 'collection', collectionId) }];


  }

  getDisabledText(isDisabled, actionType) {
    if (isDisabled) {
      let defaultMessage = 'You do not have permissions to perform this action.',
      manageRolesMessage = 'You need to be signed-in to a team to perform this action';

      switch (actionType) {
        case __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["b" /* ACTION_MANAGE_ROLES */]:
          return manageRolesMessage;
        case __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_MERGE */]:
          return 'This collection is not a fork';
        default:
          return defaultMessage;}

    }
  }

  getMenuItems(collection) {
    return _.map(this.getActions(collection), action => {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_Dropdowns__["d" /* MenuItem */], {
            key: action.type,
            refKey: action.type,
            disabled: !action.isEnabled,
            disabledText: this.getDisabledText(!action.isEnabled, action.type) },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label)));


    });
  }

  handleCollectionClick(collectionId) {
    __WEBPACK_IMPORTED_MODULE_20__modules_services_AnalyticsService__["a" /* default */].addEvent('documentation', 'view', 'browse');
    Object(__WEBPACK_IMPORTED_MODULE_19__models_services_DashboardService__["m" /* openEntity */])('collections', collectionId, Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id);
  }

  handleRefresh() {
    let workspaceId = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id;
    Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').fetchWorkspace(workspaceId);
  }

  render() {
    let collections = this.getFilteredCollections(),
    archivedResources = {
      archivedCollectionsCount: this.props.archivedCollections && this.props.archivedCollections.length || 0 };


    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('PermissionStore');

    if (Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isLoading) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_base_LoadingIndicator__["a" /* default */], null));

    }
    if (_.isEmpty(this.props.collections)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container collections empty' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_empty_states_CollectionsEmpty__["a" /* default */], {
              isMember: Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember,
              workspaceId: Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_archivedResource_ArchivedResource__["a" /* default */], {
            archivedResources: archivedResources,
            label: 'COLLECTIONS',
            showWarning: true,
            onClick: __WEBPACK_IMPORTED_MODULE_19__models_services_DashboardService__["g" /* openArchivedCollections */] })));



    }
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container collections' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-head' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__["a" /* WorkspaceBrowserFilter */], {
            onFilterQueryChange: this.handleFilterQueryChange,
            onFilterQueryCancel: this.handleFilterQueryCancel,
            filterQuery: this.state.filterQuery,
            onSortTypeChange: this.handleSortTypeChange,
            sortType: this.state.sortType }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
              type: 'text',
              onClick: this.handleRefreshDebounced }, 'Refresh')),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections__list' },

          _.isEmpty(collections) && this.state.filterQuery &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_empty_states_NoResultFound__["a" /* default */], null),


          _.map(collections, collection => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: collection.id, className: 'collections__list__item' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections__item__header' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections__item__label__wrapper' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections__item__label' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                          type: 'text',
                          className: 'collection-name',
                          onClick: this.handleCollectionClick.bind(this, collection.uid) },

                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, collection.name),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__components_collections_CollectionMetaIcons__["a" /* default */], { collection: collection }),

                        collection.isForked &&
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'collection__item__fork-label' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Icons_ForkIcon__["a" /* default */], { size: 'xs' }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, _.get(collection, 'forkInfo.forkLabel') || '')))),




                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections__item__owner' },
                      __WEBPACK_IMPORTED_MODULE_16__utils_util__["a" /* default */].getUserNameForId(collection.owner, Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('CurrentUserStore')))),


                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entities__item__action_wrapper' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                        onClick: this.handleShare.bind(this, collection),
                        type: 'secondary',
                        size: 'small' },

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Icons_ShareIcon__["a" /* default */], { className: 'share-icon' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Share')),

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_Dropdowns__["a" /* Dropdown */], {
                        className: 'entities_item__action__dropdown',
                        onSelect: this.handleAction.bind(this, collection) },

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_Dropdowns__["b" /* DropdownButton */], {
                          dropdownStyle: 'nocaret',
                          type: 'custom' },

                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], null,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Icons_MoreIcon__["a" /* default */], { className: 'entities_item__action__dropdown-btn' }))),


                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_Dropdowns__["c" /* DropdownMenu */], {
                          'align-right': true },

                        this.getMenuItems(collection))))),




                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__components_base_InlineEditor__["a" /* default */], {
                  isViewMore: true,
                  className: 'collections__item__description',
                  placeholder: 'Adding a description makes your docs better',
                  value: collection.description })));



          })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_archivedResource_ArchivedResource__["a" /* default */], {
          archivedResources: archivedResources,
          label: 'COLLECTIONS',
          showWarning: true,
          onClick: __WEBPACK_IMPORTED_MODULE_19__models_services_DashboardService__["g" /* openArchivedCollections */] })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__ = __webpack_require__(3450);



const sortTypeLabelMap = {};

sortTypeLabelMap[__WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__["c" /* LIBRARY_SORT_TYPE_NAME */]] = 'Name';
sortTypeLabelMap[__WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__["b" /* LIBRARY_SORT_TYPE_LAST_MODIFIED */]] = 'Last Modified';
sortTypeLabelMap[__WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__["d" /* LIBRARY_SORT_TYPE_OWNER */]] = 'Owner';
sortTypeLabelMap[__WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__["a" /* LIBRARY_SORT_TYPE_DATE_CREATED */]] = 'Date Created';

/* harmony default export */ __webpack_exports__["a"] = (sortTypeLabelMap);

/***/ }),

/***/ 3725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceEnvironmentsBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Icons_MoreIcon__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_ShareIcon__ = __webpack_require__(1397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_empty_states_EnvironmentsEmpty__ = __webpack_require__(3726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_uid_helper__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_EnvironmentActionUtil__ = __webpack_require__(3496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_LoadingIndicator__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_empty_states_NoResultFound__ = __webpack_require__(3412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_util__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_services_DashboardService__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_services_AnalyticsService__ = __webpack_require__(30);
var _class;

















let WorkspaceEnvironmentsBrowser = Object(__WEBPACK_IMPORTED_MODULE_6_mobx_react__["a" /* observer */])(_class = class WorkspaceEnvironmentsBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { filterQuery: '' };

    this.handleFilterQueryChange = this.handleFilterQueryChange.bind(this);
    this.handleFilterQueryCancel = this.handleFilterQueryCancel.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    this.fetchEnvironments(this.props.workspaceId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workspaceId !== nextProps.workspaceId) {
      this.fetchEnvironments(nextProps.workspaceId);
    }
  }

  fetchEnvironments(id) {
    Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').fetchWorkspaceEnvironment(id);
  }

  getFilteredEnvironments(environments) {
    return _.filter(environments, environment => _.includes(_.toLower(environment.name), _.toLower(this.state.filterQuery)));
  }

  handleFilterQueryChange(filterQuery) {
    this.setState({ filterQuery });
  }

  handleFilterQueryCancel() {
    this.setState({ filterQuery: '' });
  }

  handleAction(environment, action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember) {
      pm.mediator.trigger('joinWorkspace');
      return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_9__utils_EnvironmentActionUtil__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__utils_uid_helper__["a" /* decomposeUID */])(environment.id).modelId, action, {}, { origin: 'browse' });
  }

  handleShare(environment) {
    /**
                             *  @todo: Remove the options once the environment sharing is done through
                             * the new share entity modal and only provide the uid instead of giving
                             * the id
                             **/
    pm.mediator.trigger('openAddToWorkspaceModal', environment.uid, 'environment', { origin: 'browse' });
  }

  getActions(environment) {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('PermissionStore'),
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id,
    environmentId = Object(__WEBPACK_IMPORTED_MODULE_8__utils_uid_helper__["a" /* decomposeUID */])(environment.id).modelId;

    return [
    {
      type: 'duplicate',
      label: 'Duplicate',
      isEnabled: permissionStore.can('duplicate', 'environment', environmentId) },

    {
      type: 'download',
      label: 'Export',
      isEnabled: true },

    {
      type: 'remove-from-workspace',
      label: 'Remove from workspace',
      isEnabled: permissionStore.can('removeEnvironment', 'workspace', workspaceId) },

    {
      type: 'delete',
      label: 'Delete',
      isEnabled: permissionStore.can('delete', 'environment', environmentId) }];


  }

  getDisabledText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }


  getMenuItems(environment) {
    return _.map(this.getActions(environment), action => {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__["d" /* MenuItem */], {
            key: action.type,
            refKey: action.type,
            disabled: !action.isEnabled,
            disabledText: this.getDisabledText(!action.isEnabled) },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label)));


    });
  }

  handleEnvironmentClick(environmentId) {
    __WEBPACK_IMPORTED_MODULE_15__modules_services_AnalyticsService__["a" /* default */].addEvent('environment', 'view_in_web', 'browse');
    Object(__WEBPACK_IMPORTED_MODULE_14__models_services_DashboardService__["m" /* openEntity */])('environments', environmentId, this.props.workspaceId);
  }

  handleRefresh() {
    this.fetchEnvironments(this.props.workspaceId);
  }

  render() {
    let environments = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').environments,
    filteredEnvironments = this.getFilteredEnvironments(environments);
    if (Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isLoading) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_LoadingIndicator__["a" /* default */], null));

    }

    if (_.isEmpty(environments)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container environments empty' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_empty_states_EnvironmentsEmpty__["a" /* default */], {
            isMember: Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember,
            workspaceId: Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id })));



    }
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container environments' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-head' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_workspaces_WorkspaceBrowserFilter__["a" /* WorkspaceBrowserFilter */], {
            onFilterQueryChange: this.handleFilterQueryChange,
            onFilterQueryCancel: this.handleFilterQueryCancel,
            filterQuery: this.state.filterQuery }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              type: 'text',
              onClick: this.handleRefresh }, 'Refresh')),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environments__list' },

          _.isEmpty(filteredEnvironments) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_empty_states_NoResultFound__["a" /* default */], null),


          _.map(filteredEnvironments, environment => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: environment.id, className: 'environments__list__item' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environments__item__label' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                      type: 'text',
                      className: 'environment-name',
                      onClick: this.handleEnvironmentClick.bind(this, environment.id) },

                    environment.name),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment__owner' },
                    __WEBPACK_IMPORTED_MODULE_13__utils_util__["a" /* default */].getUserNameForId(environment.owner, Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('CurrentUserStore')))),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment__item__actions' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                      className: 'environment__item__action',
                      type: 'secondary',
                      size: 'small',
                      onClick: this.handleShare.bind(this, environment) },

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Icons_ShareIcon__["a" /* default */], { className: 'share-icon' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Share')),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__["a" /* Dropdown */], {
                      className: 'entities_item__action__dropdown',
                      onSelect: this.handleAction.bind(this, environment) },

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__["b" /* DropdownButton */], {
                        dropdownStyle: 'nocaret',
                        type: 'custom' },

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Icons_MoreIcon__["a" /* default */], { className: 'entities_item__action__dropdown-btn' }))),


                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__["c" /* DropdownMenu */], {
                        'align-right': true },

                      this.getMenuItems(environment))))));





          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentsEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_ManageEnvironmentViews__ = __webpack_require__(3413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__external_navigation_ExternalNavigationService__ = __webpack_require__(72);




let
EnvironmentsEmpty = class EnvironmentsEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleCreateEnvironment = this.handleCreateEnvironment.bind(this);
    this.handleAddEnvironments = this.handleAddEnvironments.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  handleAddEnvironments() {
    if (this.props.isMember) {
      pm.mediator.trigger('openBulkAddToWorkspaceModal', this.props.workspaceId, 'environments');
    } else
    {
      pm.mediator.trigger('joinWorkspace');
    }
  }

  handleCreateEnvironment() {
    if (this.props.isMember) {
      pm.mediator.trigger('showManageEnvironmentModal', __WEBPACK_IMPORTED_MODULE_3__constants_ManageEnvironmentViews__["a" /* MANAGE_ENVIRONMENT_VIEW_ADD_ENV */]);
    } else
    {
      pm.mediator.trigger('joinWorkspace');
    }
  }

  openLink(url) {
    url && Object(__WEBPACK_IMPORTED_MODULE_4__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(url);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__illustration-wrapper entity-empty__illustration-wrapper--environment' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment-empty__illustration' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'Looks like this workspace doesn\u2019t have any environments'),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'text',
              className: 'learn-more-link',
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["x" /* ENVIRONMENT_DOCS */]) }, 'Environments'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' give you the ability to customize requests using '),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'text',
              className: 'learn-more-link',
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["_9" /* VARIABLE_DOCS */]) }, 'variables'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, '. You can easily switch between different setups without changing your requests.')),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'primary',
              onClick: this.handleAddEnvironments }, 'Add environments to this workspace')),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action--text' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'text',
              onClick: this.handleCreateEnvironment }, 'or create an environment'))));






  }};

/***/ }),

/***/ 3727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceMonitorsBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_MoreIcon__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_empty_states_MonitorsEmpty__ = __webpack_require__(3728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_MonitorController__ = __webpack_require__(1424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_util__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_LoadingIndicator__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_empty_states_NoResultFound__ = __webpack_require__(3412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_services_DashboardService__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_uid_helper__ = __webpack_require__(101);
var _class;
















let WorkspaceMonitorsBrowser = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* observer */])(_class = class WorkspaceMonitorsBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      filterQuery: '',
      monitors: [],
      isLoading: false };


    this.handleFilterQueryChange = this.handleFilterQueryChange.bind(this);
    this.handleFilterQueryCancel = this.handleFilterQueryCancel.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.fetchWorkspaceMonitors = this.fetchWorkspaceMonitors.bind(this);
    this.handleRefreshDebounced = _.debounce(this.fetchWorkspaceMonitors, 5000, {
      leading: true,
      trailing: false });

  }

  componentDidMount() {
    this.fetchWorkspaceMonitors();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workspaceId !== nextProps.workspaceId) {
      this.fetchWorkspaceMonitors();
    }
  }

  fetchWorkspaceMonitors() {
    this.setState({ isLoading: true });
    __WEBPACK_IMPORTED_MODULE_7__modules_controllers_MonitorController__["a" /* default */].getAll({ workspace: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id }).then(list => {
      this.setState({
        monitors: list,
        isLoading: false });

    }).catch(err => {
      console.log('Error in fetching monitors', err);
    });
  }

  getFilteredMonitors() {
    return _.filter(this.state.monitors, monitor => _.includes(_.toLower(monitor.name), _.toLower(this.state.filterQuery)));
  }

  handleFilterQueryChange(filterQuery) {
    this.setState({ filterQuery });
  }

  handleFilterQueryCancel() {
    this.setState({ filterQuery: '' });
  }

  handleAction(monitor, action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember) {
      pm.mediator.trigger('joinWorkspace');
      return;
    }
    switch (action) {
      case 'edit':
        break;
      case 'delete':
        pm.mediator.trigger('showDeleteMonitorModal', monitor, this.fetchWorkspaceMonitors, { origin: 'browse' });
        break;}

  }

  getActions(monitor) {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('PermissionStore'),
    collectionId = Object(__WEBPACK_IMPORTED_MODULE_14__utils_uid_helper__["a" /* decomposeUID */])(monitor.collection).modelId;

    return [
    {
      type: 'delete',
      label: 'Delete',
      isEnabled: permissionStore.can('deleteMonitor', 'collection', collectionId) }];


  }

  getDisabledText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  getMenuItems(monitor) {
    let actions = this.getActions(monitor);

    return _.map(actions, action => {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["d" /* MenuItem */], {
            key: action.type,
            refKey: action.type,
            disabled: !action.isEnabled,
            disabledText: this.getDisabledText(!action.isEnabled) },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label)));


    });
  }

  handleMonitorClick(monitorId) {
    __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEvent('monitor', 'view_run_details', 'browse');
    Object(__WEBPACK_IMPORTED_MODULE_12__models_services_DashboardService__["m" /* openEntity */])('monitors', monitorId, Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id);
  }

  handleEditMonitor(monitorId) {
    __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEvent('monitor', 'browse_action', 'edit');
    Object(__WEBPACK_IMPORTED_MODULE_12__models_services_DashboardService__["a" /* editEntity */])('monitors', monitorId, Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id);
  }

  render() {
    let monitors = this.getFilteredMonitors();
    if (this.state.isLoading) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_LoadingIndicator__["a" /* default */], null));

    }

    if (_.isEmpty(this.state.monitors)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container monitors empty' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_empty_states_MonitorsEmpty__["a" /* default */], {
            isMember: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember,
            workspaceId: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id,
            onSuccessCreate: this.fetchWorkspaceMonitors })));



    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container monitors' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-head' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__["a" /* WorkspaceBrowserFilter */], {
            onFilterQueryChange: this.handleFilterQueryChange,
            onFilterQueryCancel: this.handleFilterQueryCancel,
            filterQuery: this.state.filterQuery }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
              type: 'text',
              onClick: this.handleRefreshDebounced }, 'Refresh')),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'monitors__list' },

          _.isEmpty(monitors) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_empty_states_NoResultFound__["a" /* default */], null),


          _.map(monitors, monitor => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'monitors__list__item',
                  key: monitor.id },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'monitors__item__label' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                      type: 'text',
                      className: 'monitor-name',
                      onClick: this.handleMonitorClick.bind(this, monitor.id) },

                    monitor.name),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'monitor-owner' },
                    __WEBPACK_IMPORTED_MODULE_8__utils_util__["a" /* default */].getUserNameForId(monitor.createdBy, Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('CurrentUserStore')))),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entities__item__action_wrapper' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                      type: 'secondary',
                      size: 'small',
                      onClick: this.handleEditMonitor.bind(this, monitor.id) }, 'Edit'),



                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["a" /* Dropdown */], {
                      className: 'entities_item__action__dropdown',
                      onSelect: this.handleAction.bind(this, monitor) },

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["b" /* DropdownButton */], {
                        dropdownStyle: 'nocaret',
                        type: 'custom' },

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Icons_MoreIcon__["a" /* default */], { className: 'entities_item__action__dropdown-btn' }))),


                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["c" /* DropdownMenu */], {
                        'align-right': true },

                      this.getMenuItems(monitor))))));





          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorsEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__external_navigation_ExternalNavigationService__ = __webpack_require__(72);



let
MonitorsEmpty = class MonitorsEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleCreateMonitor = this.handleCreateMonitor.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  handleCreateMonitor() {
    if (this.props.isMember) {
      pm.mediator.trigger('openCreateNewMonitorModal', { workspaceId: this.props.workspaceId }, this.props.onSuccessCreate);
    } else
    {
      pm.mediator.trigger('joinWorkspace');
    }
  }

  openLink(url) {
    url && Object(__WEBPACK_IMPORTED_MODULE_3__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(url);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__illustration-wrapper entity-empty__illustration-wrapper--monitors' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'monitors-empty__illustration' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'Looks like this workspace doesn\u2019t have any monitors'),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'text',
              className: 'learn-more-link',
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["M" /* MONITORING_DOCS */]) }, 'Monitor your collections'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' to schedule automated tests to check for performance and response.')),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'primary',
              onClick: this.handleCreateMonitor }, 'Create a monitor in this workspace'))));






  }};

/***/ }),

/***/ 3729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceMocksBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_MoreIcon__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_empty_states_MocksEmpty__ = __webpack_require__(3730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_MockController__ = __webpack_require__(1425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_util__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_LoadingIndicator__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_empty_states_NoResultFound__ = __webpack_require__(3412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_ClipboardHelper__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_uid_helper__ = __webpack_require__(101);
var _class;
















let WorkspaceMocksBrowser = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* observer */])(_class = class WorkspaceMocksBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      filterQuery: '',
      mocks: [],
      isLoading: false };


    this.handleFilterQueryChange = this.handleFilterQueryChange.bind(this);
    this.handleFilterQueryCancel = this.handleFilterQueryCancel.bind(this);
    this.fetchWorkspaceMocks = this.fetchWorkspaceMocks.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleRefreshDebounced = _.debounce(this.fetchWorkspaceMocks, 5000, {
      leading: true,
      trailing: false });

  }

  componentDidMount() {
    this.fetchWorkspaceMocks();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workspaceId !== nextProps.workspaceId) {
      this.fetchWorkspaceMocks();
    }
  }

  fetchWorkspaceMocks() {
    this.setState({ isLoading: true });
    __WEBPACK_IMPORTED_MODULE_7__modules_controllers_MockController__["a" /* default */].getAll({ workspace: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id }).then(list => {
      this.setState({
        mocks: list,
        isLoading: false });

    }).catch(err => {
      console.log('Error in fetching mocks', err);
    });
  }

  getFilteredMocks() {
    return _.filter(this.state.mocks, mock => _.includes(_.toLower(mock.url), _.toLower(this.state.filterQuery)));
  }

  handleFilterQueryChange(filterQuery) {
    this.setState({ filterQuery });
  }

  handleFilterQueryCancel() {
    this.setState({ filterQuery: '' });
  }

  handleAction(mock, action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember) {
      pm.mediator.trigger('joinWorkspace');
      return;
    }
    switch (action) {
      case 'edit':
        break;
      case 'delete':
        pm.mediator.trigger('showDeleteMockModal', mock, this.fetchWorkspaceMocks, { origin: 'browse' });
        break;
      case 'copy':
        __WEBPACK_IMPORTED_MODULE_12__utils_ClipboardHelper__["a" /* default */].copy(mock.url);
        __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEvent('mock', 'copy', 'browse_view');
        break;}

  }

  getActions(mock) {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('PermissionStore'),
    collectionId = Object(__WEBPACK_IMPORTED_MODULE_14__utils_uid_helper__["a" /* decomposeUID */])(mock.collection).modelId;

    return [
    {
      type: 'copy',
      label: 'Copy to Clipboard',
      isEnabled: true },

    {
      type: 'delete',
      label: 'Delete',
      isEnabled: permissionStore.can('deleteMock', 'collection', collectionId) }];


  }

  getDisabledText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  getMenuItems(mock) {
    let actions = this.getActions(mock);
    return _.map(actions, action => {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["d" /* MenuItem */], {
            key: action.type,
            refKey: action.type,
            disabled: !action.isEnabled,
            disabledText: this.getDisabledText(!action.isEnabled) },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label)));


    });
  }

  render() {
    let mocks = this.getFilteredMocks();
    if (this.state.isLoading) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_LoadingIndicator__["a" /* default */], null));

    }

    if (_.isEmpty(this.state.mocks)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container mocks empty' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_empty_states_MocksEmpty__["a" /* default */], {
            isMember: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember,
            workspaceId: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id,
            onSuccessCreate: this.fetchWorkspaceMocks })));



    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container mocks' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-head' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__["a" /* WorkspaceBrowserFilter */], {
            onFilterQueryChange: this.handleFilterQueryChange,
            onFilterQueryCancel: this.handleFilterQueryCancel,
            filterQuery: this.state.filterQuery }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
              type: 'text',
              onClick: this.handleRefreshDebounced }, 'Refresh')),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mocks__list' },

          _.isEmpty(mocks) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_empty_states_NoResultFound__["a" /* default */], null),


          _.map(mocks, mock => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'mocks__list__item',
                  key: mock.id },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mock__item__name' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                      title: mock.name,
                      className: 'mock-name' },

                    mock.name),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mock-owner' },
                    __WEBPACK_IMPORTED_MODULE_8__utils_util__["a" /* default */].getUserNameForId(mock.createdBy, Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('CurrentUserStore')))),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mocks__item__label' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mock-id' },
                    mock.url)),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entities__item__action_wrapper' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["a" /* Dropdown */], {
                      className: 'entities_item__action__dropdown',
                      onSelect: this.handleAction.bind(this, mock) },

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["b" /* DropdownButton */], {
                        dropdownStyle: 'nocaret',
                        type: 'custom' },

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Icons_MoreIcon__["a" /* default */], { className: 'entities_item__action__dropdown-btn' }))),


                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["c" /* DropdownMenu */], {
                        'align-right': true },

                      this.getMenuItems(mock))))));





          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MocksEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__external_navigation_ExternalNavigationService__ = __webpack_require__(72);



let
MocksEmpty = class MocksEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleCreateMock = this.handleCreateMock.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  handleCreateMock() {
    if (this.props.isMember) {
      pm.mediator.trigger('openCreateNewMockModal', { workspaceId: this.props.workspaceId }, this.props.onSuccessCreate);
    } else
    {
      pm.mediator.trigger('joinWorkspace');
    }
  }

  openLink(url) {
    url && Object(__WEBPACK_IMPORTED_MODULE_3__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(url);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__illustration-wrapper entity-empty__illustration-wrapper--mocks' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mocks-empty__illustration' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'Looks like this workspace doesn\u2019t have any mocks'),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Create a '),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'text',
              className: 'learn-more-link',
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["L" /* MOCK_DOCS */]) }, 'mock server'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' to simulate each endpoint and its corresponding environment in a Postman Collection, before sending the actual request.')),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'primary',
              onClick: this.handleCreateMock }, 'Create a mock in this workspace'))));






  }};

/***/ }),

/***/ 3731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceHistoryBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_date_helper__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_empty_states_HistoryEmpty__ = __webpack_require__(3732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_SyncWorkspaceController__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WorkspaceHistoryGroupItem__ = __webpack_require__(3733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_LoadingIndicator__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_empty_states_NoResultFound__ = __webpack_require__(3412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_archivedResource_ArchivedResource__ = __webpack_require__(3448);
var _class;













let WorkspaceHistoryBrowser = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* observer */])(_class = class WorkspaceHistoryBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      filterQuery: '',
      histories: [],
      isLoading: false,
      archivedHistory: 0 };


    this.handleFilterQueryChange = this.handleFilterQueryChange.bind(this);
    this.handleFilterQueryCancel = this.handleFilterQueryCancel.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleRefreshDebounced = _.debounce(this.fetchData, 5000, {
      leading: true,
      trailing: false });

  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    this.handleRefreshDebounced && this.handleRefreshDebounced.cancel();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workspaceId !== nextProps.workspaceId) {
      this.fetchData(nextProps.workspaceId);
    }
  }

  fetchData() {
    this.setState({ histories: [], isLoading: true, archivedHistory: 0 });
    this.populateHistory();
    this.populateArchivedCount();
  }

  populateHistory() {
    this.setState({ isLoading: true });
    return __WEBPACK_IMPORTED_MODULE_7__modules_controllers_SyncWorkspaceController__["a" /* default */].getAllHistory({ workspace: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id }).
    then(list => {
      this.setState({
        histories: list,
        isLoading: false });

    });
  }

  populateArchivedCount() {
    return __WEBPACK_IMPORTED_MODULE_7__modules_controllers_SyncWorkspaceController__["a" /* default */].fetchArchivedCounts({ id: this.props.workspaceId }).
    then(response => {
      if (response) {
        this.setState({ archivedHistory: response.history });
      }
    });
  }

  getGroupedFilteredHistories() {
    let histories = this.getFilteredHistory();
    return __WEBPACK_IMPORTED_MODULE_1__postman_date_helper___default.a.getDateGroups(histories, 'createdAt');
  }

  getFilteredHistory() {
    return _.filter(this.state.histories, history => _.includes(_.toLower(history.url), _.toLower(this.state.filterQuery)));
  }

  handleFilterQueryChange(filterQuery) {
    this.setState({ filterQuery });
  }

  handleFilterQueryCancel() {
    this.setState({ filterQuery: '' });
  }

  render() {
    let groupedHistories = this.getGroupedFilteredHistories(),
    archivedResources = {
      archivedHistoryCount: this.state.archivedHistory };


    if (this.state.isLoading) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_LoadingIndicator__["a" /* default */], null));

    }

    if (_.isEmpty(this.state.histories)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container history empty' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_empty_states_HistoryEmpty__["a" /* default */], null)),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_archivedResource_ArchivedResource__["a" /* default */], {
            archivedResources: archivedResources,
            label: 'HISTORIES' })));



    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container history' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-head' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_workspaces_WorkspaceBrowserFilter__["a" /* WorkspaceBrowserFilter */], {
            onFilterQueryChange: this.handleFilterQueryChange,
            onFilterQueryCancel: this.handleFilterQueryCancel,
            filterQuery: this.state.filterQuery }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Buttons__["a" /* Button */], {
              type: 'text',
              onClick: this.handleRefreshDebounced }, 'Refresh')),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history__list' },

          _.isEmpty(groupedHistories) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_empty_states_NoResultFound__["a" /* default */], null),


          _.map(groupedHistories, group => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__WorkspaceHistoryGroupItem__["a" /* default */], {
                group: group,
                key: group.name }));


          })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_archivedResource_ArchivedResource__["a" /* default */], {
          archivedResources: archivedResources,
          label: 'HISTORIES' })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);

let

HistoryEmpty = class HistoryEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__illustration-wrapper entity-empty__illustration-wrapper--history' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-empty__illustration' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'No history requests'),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' }, 'Requests send through the Postman app in a workspace are automatically saved in the workspace\'s History.')));




  }};

/***/ }),

/***/ 3733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceHistoryGroupItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_history_HistoryListItem__ = __webpack_require__(3489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_DownSolidIcon__ = __webpack_require__(88);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;



let


WorkspaceHistoryGroupItem = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class WorkspaceHistoryGroupItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };

    this.handleToggleGroup = this.handleToggleGroup.bind(this);
  }

  getCollapseButtonClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'caret': true,
      'is-closed': !this.state.isOpen });

  }

  handleToggleGroup() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item-group' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'history-sidebar-list-item-group__meta',
            onClick: this.handleToggleGroup },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item-group__name' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Icons_DownSolidIcon__["a" /* default */], { className: this.getCollapseButtonClasses() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, this.props.group.name))),


        this.state.isOpen &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item-group__items' },

          _.map(this.props.group.items, item => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_history_HistoryListItem__["a" /* default */], _extends({},
              item, {
                hideActions: true,
                key: item.id })));


          }))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceIntegrationsBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_empty_states_IntegrationsEmpty__ = __webpack_require__(3735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(6);
var _class;







let WorkspaceIntegrationsBrowser = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* observer */])(_class = class WorkspaceIntegrationsBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { filterQuery: '' };

    this.handleFilterQueryChange = this.handleFilterQueryChange.bind(this);
    this.handleFilterQueryCancel = this.handleFilterQueryCancel.bind(this);
  }

  getFilteredIntegrations() {
    return _.filter(this.props.integrations, integration => _.includes(_.toLower(integration.name), _.toLower(this.state.filterQuery)));
  }

  handleFilterQueryChange(filterQuery) {
    this.setState({ filterQuery });
  }

  handleFilterQueryCancel() {
    this.setState({ filterQuery: '' });
  }

  render() {
    let integrations = this.getFilteredIntegrations();

    if (_.isEmpty(this.props.integrations)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container integrations empty' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_empty_states_IntegrationsEmpty__["a" /* default */], {
            isMember: Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember,
            workspaceId: Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id })));



    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container integrations' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__["a" /* WorkspaceBrowserFilter */], {
          onFilterQueryChange: this.handleFilterQueryChange,
          onFilterQueryCancel: this.handleFilterQueryCancel,
          filterQuery: this.state.filterQuery }),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'integrations__list' },

          _.map(integrations, integration => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'integrations__list__item' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'integrations__item__label' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], { type: 'text', className: 'integration-name' },
                    integration.name),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'integration-description' },
                    integration.description)),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'integration-count' },
                  integration.count)));



          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationsEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_services_DashboardService__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__external_navigation_ExternalNavigationService__ = __webpack_require__(72);




let
IntegrationsEmpty = class IntegrationsEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleAddIntegrations = this.handleAddIntegrations.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  handleAddIntegrations() {
    Object(__WEBPACK_IMPORTED_MODULE_3__models_services_DashboardService__["n" /* openIntegrationBrowse */])(this.props.workspaceId);
  }

  openLink(url) {
    url && Object(__WEBPACK_IMPORTED_MODULE_4__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(url);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__illustration-wrapper entity-empty__illustration-wrapper--integrations' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'integrations-empty__illustration' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'Integrations are coming soon to the Postman app'),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Integrations allow you to share data or functionality between Postman and other tools that you might rely on for API development. Integrations can be created and configured from the web dashboard.')),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'primary',
              onClick: this.handleAddIntegrations }, 'View integrations in the web dashboard'))));






  }};

/***/ }),

/***/ 3736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceActivityBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_workspace_activity_feed_WorkspaceActivityFeed__ = __webpack_require__(3737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_library_LibraryEmptyListItem__ = __webpack_require__(3743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_library_LibraryEmptyActivityFeed__ = __webpack_require__(3744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__ = __webpack_require__(902);
var _class;







let WorkspaceActivityBrowser = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class WorkspaceActivityBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.loadMoreActivityFeed = this.loadMoreActivityFeed.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.renderEmptyStateComponent = this.renderEmptyStateComponent.bind(this);
  }

  componentWillMount() {
    this.store = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('WorkspaceActivityFeedStore');
    this.store.initialize({ id: this.props.workspaceId });
  }

  componentWillUnmount() {
    this.store.reset();
    this.store = null;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workspaceId !== nextProps.workspaceId) {
      this.store.reset();
      this.store.initialize({ id: nextProps.workspaceId });
    }
  }

  loadMoreActivityFeed() {
    this.store.loadMore();
  }

  handleSignIn() {
    __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__["a" /* default */].login();
  }

  renderEmptyStateComponent() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_library_LibraryEmptyActivityFeed__["a" /* default */], null));

  }

  render() {
    if (_.isEmpty(this.store.feeds)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-empty' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_library_LibraryEmptyListItem__["a" /* default */], {
            signedIn: this.props.isSignedIn,
            handleSignIn: this.handleSignIn,
            loading: this.store.isLoading,
            renderEmptyStateComponent: this.renderEmptyStateComponent })));



    }
    if (!_.isEmpty(this.store.feeds)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-team-overview' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_workspace_activity_feed_WorkspaceActivityFeed__["a" /* default */], {
            activityFeed: this.store,
            onLoadMore: this.loadMoreActivityFeed,
            isLoggedIn: this.props.isSignedIn,
            onSignIn: this.handleSignIn,
            enableRestore: false })));



    }
    return false;
  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceActivityFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_LoadingIndicator__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WorkspaceActivityItem__ = __webpack_require__(3738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_date_helper__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CollectionActivity__ = __webpack_require__(3497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx_react__ = __webpack_require__(13);
var _class;









let


WorkspaceActivityFeed = Object(__WEBPACK_IMPORTED_MODULE_8_mobx_react__["a" /* observer */])(_class = class WorkspaceActivityFeed extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollDebounced = _.debounce(this.handleScroll, 100);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activityFeed &&
    this.props.activityFeed &&
    nextProps.activityFeed.id &&
    nextProps.activityFeed.id !== this.props.activityFeed.id) {
      this.refs.activity_feed && (this.refs.activity_feed.scrollTop = 0);
    }
  }

  handleSignIn() {
    this.props.onSignIn && this.props.onSignIn();
  }

  handleScroll() {
    let node = this.refs.activity_feed;
    if (node.scrollHeight - (node.scrollTop + node.offsetHeight) <= 5) {
      this.props.onLoadMore && this.props.onLoadMore();
    }
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_7_classnames___default()({ 'workspace-activity-feed-container': true }, this.props.className);
  }

  render() {
    let props = this.props,
    activities = _.get(props, 'activityFeed.feeds', []),
    meta = _.get(props, 'activityFeed.meta', {}),
    isActivityFeedFetchError = _.get(props, 'activityFeed.error', false);
    if (!props.isLoggedIn) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-empty-container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                className: 'workspace-activity-feed-empty-signin-link',
                onClick: this.handleSignIn }, 'Sign in'), ' to track changes to your collection.')));






    }

    // Don't show subscribe / Unsubscribe event in collection activity feed
    let filteredActivities = _.filter(activities, activity => {
      return !(meta.model === 'collection' && _.includes(['subscribe', 'unsubscribe'], activity.action));
    }),
    groupedActivities = _.isEmpty(filteredActivities) ? [] : __WEBPACK_IMPORTED_MODULE_3__postman_date_helper___default.a.getDateGroups(filteredActivities, 'createdAt', 'MMMM D, YYYY'),
    latestActivity = _.maxBy(filteredActivities, 'id');
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },

        props.activityName &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-name-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-name-header-content' },
            props.activityName)),




        props.activityFeed.isLoading &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-loading-container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_LoadingIndicator__["a" /* default */], null)),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'workspace-activity-feed',
            ref: 'activity_feed',
            onScroll: this.handleScrollDebounced },


          _.map(groupedActivities, subActivities => {
            if (_.isEmpty(subActivities)) {
              return false;
            }

            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'workspace-activity-feed-date-group-wrapper',
                  key: subActivities.name },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-date-group' }, ' ', subActivities.name, ' '),

                _.map(subActivities.items, activity => {
                  return (
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__WorkspaceActivityItem__["a" /* default */], {
                      activity: activity,
                      enableRestore: !!(this.props.enableRestore && latestActivity && latestActivity.id !== activity.id),
                      isRestoring: _.get(this.props, 'collectionRestoreTarget.maxId') === activity.id,
                      key: activity.id,
                      meta: meta,
                      onRestore: this.props.onRestore }));


                })));



          }),


          !props.activityFeed.isLoading && _.isEmpty(groupedActivities) && !isActivityFeedFetchError &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: props.className },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-loading-container ' }, 'No activities yet')),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__CollectionActivity__["c" /* LoadFeed */], {
            error: isActivityFeedFetchError,
            key: 'loading-more',
            loading: props.activityFeed.isLoadingMore }))));




  }}) || _class;


WorkspaceActivityFeed.propTypes = {
  activityFeed: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired,
  activityName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  onLoadMore: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func.isRequired };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceActivityItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollectionActivity__ = __webpack_require__(3497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RequestActivity__ = __webpack_require__(3740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FolderActivity__ = __webpack_require__(3741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResponseActivity__ = __webpack_require__(3742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx_react__ = __webpack_require__(13);
var _class;






let


WorkspaceActivityItem = Object(__WEBPACK_IMPORTED_MODULE_6_mobx_react__["a" /* observer */])(_class = class WorkspaceActivityItem extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let defaultActivityProps = _.pick(this.props, [
    'activity',
    'meta']),

    restorableActivityProps = _.assign({}, defaultActivityProps, _.pick(this.props, [
    'enableRestore',
    'isRestoring',
    'onRestore']));


    switch (`${defaultActivityProps.activity.model}:${defaultActivityProps.activity.action}`) {
      case 'collection:create':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["a" /* Create */], restorableActivityProps);
      case 'collection:update':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["h" /* Update */], restorableActivityProps);
      case 'collection:destroy':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["b" /* Delete */], restorableActivityProps);
      case 'collection:share':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["d" /* Share */], defaultActivityProps);
      case 'collection:unshare':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["f" /* Unshare */], defaultActivityProps);
      case 'collection:subscribe':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["e" /* Subscribe */], defaultActivityProps);
      case 'collection:unsubscribe':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionActivity__["g" /* Unsubscribe */], defaultActivityProps);
      case 'request:create':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RequestActivity__["a" /* Create */], restorableActivityProps);
      case 'request:update':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RequestActivity__["d" /* Update */], restorableActivityProps);
      case 'request:destroy':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RequestActivity__["b" /* Delete */], restorableActivityProps);
      case 'request:transfer':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RequestActivity__["c" /* Transfer */], restorableActivityProps);
      case 'folder:create':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__FolderActivity__["a" /* Create */], restorableActivityProps);
      case 'folder:update':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__FolderActivity__["c" /* Update */], restorableActivityProps);
      case 'folder:destroy':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__FolderActivity__["b" /* Delete */], restorableActivityProps);
      case 'response:create':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ResponseActivity__["a" /* Create */], restorableActivityProps);
      case 'response:update':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ResponseActivity__["c" /* Update */], restorableActivityProps);
      case 'response:destroy':
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ResponseActivity__["b" /* Delete */], restorableActivityProps);
      default:
        return false;}

  }}) || _class;


WorkspaceActivityItem.propTypes = {
  activity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  enableRestore: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  meta: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_diff_Diff__ = __webpack_require__(3469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(20);



let

NormalView = class NormalView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      previous,
      current } =
    this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-details-content-right' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-details-content-data' }, previous),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, previous ? ' to ' : ' '),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-activity-item-details-content-data' }, current)));


  }};let


DiffView = class DiffView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      type = 'chars',
      previous,
      current,
      modalHeader } =
    this.props;
    previous = type === 'lines' ? __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].beautifyJs(previous) : previous;
    current = type === 'lines' ? __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].beautifyJs(current) : current;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-details-content-right workspace-activity-item-details-diff-view' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_diff_Diff__["a" /* default */], {
          modalHeader: modalHeader,
          previous: previous,
          current: current,
          type: type })));



  }};let


DetailsItem = class DetailsItem extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'workspace-activity-item-details-content': true,
      'normal-view': this.props.view === 'normal' });

  }

  render() {
    let {
      previous,
      current,
      label,
      model,
      name,
      diffType } =
    this.props,
    modalHeader = 'Change to ' + label + ' for ' + model + ' ' + name;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-details-content-left' },
          label),


        this.props.view === 'normal' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NormalView, {
          previous: previous,
          current: current }),



        this.props.view === 'diff' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DiffView, {
          modalHeader: modalHeader,
          previous: previous,
          current: current,
          type: diffType })));




  }};




/***/ }),

/***/ 3740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Transfer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__ = __webpack_require__(3452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__ = __webpack_require__(3449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__ = __webpack_require__(903);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


let

Create = class Create extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper request-create' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Added ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' request '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["h" /* Request */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' to',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Update = class Update extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta,
    changesCount = __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__["a" /* default */].getWhiteListedActivitiesCount(activity),
    pluralizedChangeText = __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__["a" /* default */].pluralize({
      count: changesCount,
      singular: 'change',
      plural: 'changes' });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper request-update' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,

                changesCount > 0 &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', changesCount, ' ', pluralizedChangeText, ' to '),


                changesCount === 0 &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Modified '),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' request '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["h" /* Request */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], { meta: meta })))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))),






          !_.isEmpty(activity.input) && !_.isEmpty(activity.rollback) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["b" /* Details */], activity))));




  }};let


Delete = class Delete extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper request-delete' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Deleted ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' request '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["h" /* Request */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Transfer = class Transfer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta,
    source,
    destination;
    if (activity.from && activity.from.model === 'folder') {
      source =
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' from the folder '),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["c" /* Folder */], _extends({}, activity.to.instance, {
          actionHandler: this.props.actionHandler })));



    }

    if (activity.to && activity.to.model === 'folder') {
      destination =
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' to the folder '),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["c" /* Folder */], _extends({}, activity.to.instance, {
          actionHandler: this.props.actionHandler })));



    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper request-transfer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Moved ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' request '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["h" /* Request */], activity.instance),
                source,
                destination,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Delete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__ = __webpack_require__(3452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__ = __webpack_require__(3449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__ = __webpack_require__(903);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


let

Create = class Create extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper folder-create' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Created ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' folder '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["c" /* Folder */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Update = class Update extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta,
    changesCount = __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__["a" /* default */].getWhiteListedActivitiesCount(activity),
    pluralizedChangeText = __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__["a" /* default */].pluralize({
      count: changesCount,
      singular: 'change',
      plural: 'changes' });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper folder-update' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,

                changesCount > 0 &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', changesCount, ' ', pluralizedChangeText, ' to '),


                changesCount === 0 &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Modified '),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' folder '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["c" /* Folder */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))),






          !_.isEmpty(activity.input) && !_.isEmpty(activity.rollback) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["b" /* Details */], activity))));




  }};let


Delete = class Delete extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper folder-delete' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Deleted ', !_.isEmpty(activity.instance) ? 'the' : 'a', ' folder '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["c" /* Folder */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Delete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__ = __webpack_require__(3452);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
let

Create = class Create extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper response-create' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Created ', !_.isEmpty(activity.instance) ? 'the' : 'an', ' example '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["i" /* Response */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Update = class Update extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper response-update' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Modified ', !_.isEmpty(activity.instance) ? 'the' : 'an', ' example '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["i" /* Response */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};let


Delete = class Delete extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-wrapper response-delete' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Deleted ', !_.isEmpty(activity.instance) ? 'the' : 'an', ' example '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["i" /* Response */], activity.instance),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,

                  this.props.meta.model === 'team' &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' in',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({ meta: meta }, activity.collection))))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["l" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["k" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["j" /* Restore */], {
                  id: activity.id,
                  isRestoring: this.props.isRestoring,
                  rollback_from: meta.rollback_from,
                  onRestore: this.props.onRestore })))))));








  }};



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryEmptyListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_LoadingIndicator__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_AppUrlConstants__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AuthHandlerService__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__external_navigation_ExternalNavigationService__ = __webpack_require__(72);






let

LibraryEmptyListItem = class LibraryEmptyListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  handleTeamLibraryDocs() {
    Object(__WEBPACK_IMPORTED_MODULE_6__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_3__constants_AppUrlConstants__["_4" /* TEAM_LIBRARY_DOCS */]);
    __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__["a" /* default */].addEvent('onboarding', 'view_documentation_sharing', 'team_library');
  }

  render() {
    if (!this.props.signedIn) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'library-empty-list-item-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'library-empty-list-item__text' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'signed-out-text' }, 'The Team Library and its collaboration tools are a Postman Pro feature. Sign in and upgrade to collaborate on collections and environments with your entire team.')),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'learnmore-link',
              type: 'text',
              onClick: this.handleTeamLibraryDocs }, 'Learn more about the Team Library'),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'primary',
              size: 'huge',
              className: 'signout-out-signin-btn',
              onClick: () => {__WEBPACK_IMPORTED_MODULE_5__modules_services_AuthHandlerService__["a" /* default */].login();} }, 'Sign in to Postman')));





    }

    if (this.props.loading) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'library-empty-list-item-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'library-empty-list-item' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_LoadingIndicator__["a" /* default */], null))));



    }


    return this.props.renderEmptyStateComponent();
  }};

/***/ }),

/***/ 3744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryEmptyActivityFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

LibraryEmptyActivityFeed = class LibraryEmptyActivityFeed extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-library-invite__wrapper empty-activity-feed' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'empty-activity-feed__image' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'empty-activity-feed__label' }, 'Your activity feed is empty'),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null, 'Collaborate on your API collections with your teammates to populate the feed')));


  }};

/***/ }),

/***/ 3745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceOfflineView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_WorkspaceViewModeService__ = __webpack_require__(919);



let

WorkspaceOfflineView = class WorkspaceOfflineView extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSwitchToBuildView = this.handleSwitchToBuildView.bind(this);
  }

  handleSwitchToBuildView() {
    __WEBPACK_IMPORTED_MODULE_3__services_WorkspaceViewModeService__["a" /* default */].openBuildMode();
  }


  render() {
    let isLocalWorkspace = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('WorkspaceStore').find(Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__illustration-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'offline__illustration' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'Looks like you\'re offline'),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Postman couldn\'t connect to the internet. '),

          isLocalWorkspace ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Switch to the Build view to resume your work.') :
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Switch to one of your personal workspaces.')),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },

          isLocalWorkspace &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              type: 'primary',
              onClick: this.handleSwitchToBuildView }, 'Switch to the Build view'))));







  }};

/***/ }),

/***/ 3746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceAPIBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_editor_common_DeleteModal_DeleteModal__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_dev_constants_APIActionsConstants__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_APIDevService_js__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_constants_LibrarySortTypeConstants__ = __webpack_require__(3450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_models_services_DashboardService__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__js_utils_util__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__js_components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__js_components_base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__js_components_base_Icons_MoreIcon__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__js_components_base_Icons_ShareIcon__ = __webpack_require__(1397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__js_components_base_InlineEditor__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__js_components_base_LoadingIndicator__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__WorkspaceAPIsEmpty_WorkspaceAPIsEmpty__ = __webpack_require__(3747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__js_components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__js_modules_services_ManageRolesModalService__ = __webpack_require__(1413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__js_modules_services_ShareModalService__ = __webpack_require__(1399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__js_components_empty_states_NoResultFound__ = __webpack_require__(3412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__api_editor_common_RemoveFromWorkspaceModal_RemoveFromWorkspaceModal__ = __webpack_require__(1429);
var _class;























const DEFAULT_MESSAGE = 'You do not have permissions to perform this action.',
MANAGE_ROLES_MESSAGE = 'You need to be signed-in to a team to perform this action';


let WorkspaceAPIBrowser = Object(__WEBPACK_IMPORTED_MODULE_0_mobx_react__["a" /* observer */])(_class = class WorkspaceAPIBrowser extends __WEBPACK_IMPORTED_MODULE_3_react__["Component"] {
  constructor(props) {
    super(props);this.

































    fetchAPIs = () => {
      this.setState({
        isLoading: true });

      __WEBPACK_IMPORTED_MODULE_6__services_APIDevService_js__["a" /* default */].getAPIs().
      then(apis => {
        this.setState({
          apis: apis,
          isLoading: false });

      }).
      catch(err => {
        this.handleError(err, 'There was an unexpecedt error while fetching the APIs.');
      });
    };this.

    deleteAPI = () => {
      this.setState({
        isDeleting: true });

      __WEBPACK_IMPORTED_MODULE_6__services_APIDevService_js__["a" /* default */].deleteAPI(this.state.apiId).
      then(() => {
        pm.toasts.success(`You deleted ${this.state.apiName} from all workspaces.`, { title: `${this.state.apiName} API deleted.` });
        this.toggleDeleteModal();
      }).
      catch(err => {
        this.handleError(err, 'There was an unexpected error deleting your API from your workspace. Please try again.');
      });
    };this.

    removeFromWorkspace = () => {
      this.setState({
        isRemovingFromWorkspace: true });

      __WEBPACK_IMPORTED_MODULE_6__services_APIDevService_js__["a" /* default */].removeFromWorkspace(this.state.apiId).
      then(() => {
        pm.toasts.success(`You removed ${this.state.apiName} API from this workspace.`, { title: 'API removed.' });
        this.toggleRemoveFromWorkspaceModal();
      }).
      catch(err => {
        this.handleError(err, 'There was an unexpected error removing this API from your workspace. Please try again.');
      });
    };this.

    handleError = (error, errMsg) => {
      this.setState({ isDeleting: false, isRemovingFromWorkspace: false, isLoading: false });
      let toastMessage = _.get(error, 'details.message') || _.get(error, 'message') || errMsg,
      toastTitle = _.get(error, 'error.title');

      pm.toasts.error(toastMessage, { noIcon: true, title: toastTitle });
    };this.













































    handleAPIActions = (apiId, apiName, action) => {
      switch (action) {
        case __WEBPACK_IMPORTED_MODULE_5__api_dev_constants_APIActionsConstants__["d" /* ACTION_TYPE_MANAGE_ROLES */]:
          Object(__WEBPACK_IMPORTED_MODULE_19__js_modules_services_ManageRolesModalService__["a" /* manageRolesOnAPI */])(apiId);
          return;
        case __WEBPACK_IMPORTED_MODULE_5__api_dev_constants_APIActionsConstants__["b" /* ACTION_TYPE_DELETE */]:
          this.toggleDeleteModal(apiId, apiName);
          return;
        case __WEBPACK_IMPORTED_MODULE_5__api_dev_constants_APIActionsConstants__["e" /* ACTION_TYPE_REMOVE_FROM_WORKSPACE */]:
          this.toggleRemoveFromWorkspaceModal(apiId, apiName);
          return;}

    };this.

    toggleRemoveFromWorkspaceModal = (apiId, apiName) => {
      this.setState(prevState => ({
        openRemoveFromWorkspaceModal: !prevState.openRemoveFromWorkspaceModal,
        isRemovingFromWorkspace: false,
        apiId: apiId,
        apiName: apiName }));

    };this.

    toggleDeleteModal = (apiId, apiName) => {
      this.setState(prevState => ({
        openDeleteModal: !prevState.openDeleteModal,
        isDeleting: false,
        apiId: apiId,
        apiName: apiName }));

    };this.state = { filterQuery: '', sortType: __WEBPACK_IMPORTED_MODULE_7__js_constants_LibrarySortTypeConstants__["c" /* LIBRARY_SORT_TYPE_NAME */], apis: [], isLoading: false, openDeleteModal: false, isDeleting: false, apiId: '', apiName: '' };this.handleFilterQueryChange = this.handleFilterQueryChange.bind(this);this.handleFilterQueryCancel = this.handleFilterQueryCancel.bind(this);this.handleSortTypeChange = this.handleSortTypeChange.bind(this);this.handleAction = this.handleAction.bind(this);this.handleRefreshDebounced = _.debounce(this.fetchAPIs, 5000, { leading: true, trailing: false });}componentDidMount() {this.reactionDisposer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx__["q" /* reaction */])(() => Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id, () => {this.fetchAPIs();}, { fireImmediately: true });}componentWillUnmount() {this.reactionDisposer && this.reactionDisposer();}getFilteredAPIs() {return _.chain(this.state.apis).filter(api => _.includes(_.toLower(api.name), _.toLower(this.state.filterQuery))).sortBy([this.getSortFunction(this.state.sortType)]).value();}handleFilterQueryChange(filterQuery) {this.setState({ filterQuery });}handleFilterQueryCancel() {this.setState({ filterQuery: '' });}handleSortTypeChange(sortType) {this.setState({ sortType });}getSortFunction(type) {switch (type) {case __WEBPACK_IMPORTED_MODULE_7__js_constants_LibrarySortTypeConstants__["c" /* LIBRARY_SORT_TYPE_NAME */]:return api => _.toLower(api.name);case __WEBPACK_IMPORTED_MODULE_7__js_constants_LibrarySortTypeConstants__["b" /* LIBRARY_SORT_TYPE_LAST_MODIFIED */]:return api => new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(api.updatedAt);case __WEBPACK_IMPORTED_MODULE_7__js_constants_LibrarySortTypeConstants__["a" /* LIBRARY_SORT_TYPE_DATE_CREATED */]:return api => new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(api.createdAt);case __WEBPACK_IMPORTED_MODULE_7__js_constants_LibrarySortTypeConstants__["d" /* LIBRARY_SORT_TYPE_OWNER */]:return api => _.toLower(__WEBPACK_IMPORTED_MODULE_10__js_utils_util__["a" /* default */].getUserNameForId(api.createdBy, Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["a" /* getStore */])('CurrentUserStore')));}}handleAction(api, action) {if (!Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember) {pm.mediator.trigger('joinWorkspace');return;}this.handleAPIActions(api.id, api.name, action);}

  handleShare(api) {
    Object(__WEBPACK_IMPORTED_MODULE_20__js_modules_services_ShareModalService__["a" /* shareAPI */])(api.id);
  }

  getActions() {
    const currentUserStore = Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["a" /* getStore */])('CurrentUserStore');

    return [
    {
      type: __WEBPACK_IMPORTED_MODULE_5__api_dev_constants_APIActionsConstants__["d" /* ACTION_TYPE_MANAGE_ROLES */],
      label: 'Manage Roles',
      isEnabled: Boolean(currentUserStore.team) },

    {
      type: __WEBPACK_IMPORTED_MODULE_5__api_dev_constants_APIActionsConstants__["e" /* ACTION_TYPE_REMOVE_FROM_WORKSPACE */],
      label: 'Remove from workspace',
      isEnabled: true },

    {
      type: __WEBPACK_IMPORTED_MODULE_5__api_dev_constants_APIActionsConstants__["b" /* ACTION_TYPE_DELETE */],
      label: 'Delete',
      isEnabled: true }];


  }

  getDisabledText(isDisabled, actionType) {
    if (!isDisabled) {
      return;
    }

    switch (actionType) {
      case __WEBPACK_IMPORTED_MODULE_5__api_dev_constants_APIActionsConstants__["d" /* ACTION_TYPE_MANAGE_ROLES */]:
        return MANAGE_ROLES_MESSAGE;
      default:
        return DEFAULT_MESSAGE;}

  }

  getMenuItems() {
    return _.map(this.getActions(), action => {
      return (
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__js_components_base_Dropdowns__["d" /* MenuItem */], {
            key: action.type,
            refKey: action.type,
            disabled: !action.isEnabled,
            disabledText: this.getDisabledText(!action.isEnabled, action.type) },

          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label)));


    });
  }

  // redirect to web view
  handleAPIClick(apiId) {
    Object(__WEBPACK_IMPORTED_MODULE_8__js_models_services_DashboardService__["m" /* openEntity */])('apis', apiId, Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id);
  }

  render() {
    let filteredAPIs = this.getFilteredAPIs();

    if (this.state.isLoading) {
      return (
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__js_components_base_LoadingIndicator__["a" /* default */], null));

    }
    if (_.isEmpty(this.state.apis)) {
      return (
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'workspace-item-browser__container collections empty' },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__WorkspaceAPIsEmpty_WorkspaceAPIsEmpty__["a" /* default */], {
            isMember: Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember,
            workspaceId: Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id })));



    }
    return (
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'workspace-item-browser__container collections' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'workspace-head' },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__js_components_workspaces_WorkspaceBrowserFilter__["a" /* WorkspaceBrowserFilter */], {
            onFilterQueryChange: this.handleFilterQueryChange,
            onFilterQueryCancel: this.handleFilterQueryCancel,
            filterQuery: this.state.filterQuery,
            onSortTypeChange: this.handleSortTypeChange,
            sortType: this.state.sortType }),

          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__js_components_base_Buttons__["a" /* Button */], {
              type: 'text',
              onClick: this.handleRefreshDebounced }, 'Refresh')),




        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'collections__list' },

          _.isEmpty(filteredAPIs) && this.state.filterQuery &&
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__js_components_empty_states_NoResultFound__["a" /* default */], null),


          _.map(filteredAPIs, api => {
            return (
              __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { key: api.id, className: 'collections__list__item' },
                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'collections__item__header' },
                  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'collections__item__label__wrapper' },
                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'collections__item__label' },
                      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__js_components_base_Buttons__["a" /* Button */], {
                          type: 'text',
                          className: 'collection-name',
                          onClick: this.handleAPIClick.bind(this, api.id) },

                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('span', null, api.name))),


                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'collections__item__owner' },
                      __WEBPACK_IMPORTED_MODULE_10__js_utils_util__["a" /* default */].getUserNameForId(api.createdBy, Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["a" /* getStore */])('CurrentUserStore')))),


                  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'entities__item__action_wrapper' },
                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__js_components_base_Buttons__["a" /* Button */], {
                        onClick: this.handleShare.bind(this, api),
                        type: 'secondary',
                        size: 'small' },

                      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__js_components_base_Icons_ShareIcon__["a" /* default */], { className: 'share-icon' }),
                      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('span', null, 'Share')),

                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__js_components_base_Dropdowns__["a" /* Dropdown */], {
                        className: 'entities_item__action__dropdown',
                        onSelect: this.handleAction.bind(this, api) },

                      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__js_components_base_Dropdowns__["b" /* DropdownButton */], {
                          dropdownStyle: 'nocaret',
                          type: 'custom' },

                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__js_components_base_Buttons__["a" /* Button */], null,
                          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__js_components_base_Icons_MoreIcon__["a" /* default */], { className: 'entities_item__action__dropdown-btn' }))),


                      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__js_components_base_Dropdowns__["c" /* DropdownMenu */], {
                          'align-right': true },

                        this.getMenuItems(api))))),




                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__js_components_base_InlineEditor__["a" /* default */], {
                  isViewMore: true,
                  className: 'collections__item__description',
                  placeholder: 'Adding a description makes your docs better',
                  value: api.description })));



          })),


        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__api_editor_common_DeleteModal_DeleteModal__["a" /* default */], {
          isOpen: this.state.openDeleteModal,
          onRequestClose: this.toggleDeleteModal,
          headerTitle: 'Delete API?',
          content: 'No one on your team will be able to view or edit this API.\nThe mock servers, documentation, environments, test suites and monitors linked to this API won\'t be affected.',
          btnContent: 'Delete API',
          onSubmit: this.deleteAPI,
          isLoading: this.state.isDeleting }),

        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__api_editor_common_RemoveFromWorkspaceModal_RemoveFromWorkspaceModal__["a" /* default */], {
          isOpen: this.state.openRemoveFromWorkspaceModal,
          onRequestClose: this.toggleRemoveFromWorkspaceModal,
          headerTitle: 'Remove API?',
          content: 'Are you sure you want to remove this API from this workspace? \nThe mock servers, documentation, environments, test suites and monitors linked to this API won’t be affected.',
          btnContent: 'Remove API',
          onSubmit: this.removeFromWorkspace,
          isLoading: this.state.isRemovingFromWorkspace })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceAPIsEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

WorkspaceAPIsEmpty = class WorkspaceAPIsEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__illustration-wrapper entity-empty__illustration-wrapper--collections' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections-empty__illustration' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'Looks like you don\u2019t have any APIs')));




  }};

/***/ })

});