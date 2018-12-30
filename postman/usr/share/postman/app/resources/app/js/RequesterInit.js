webpackJsonp([20],{

/***/ 1067:
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

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CollectionIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
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

/***/ 1070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_CollectionStore__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_TeamIcon__ = __webpack_require__(1075);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_LockedIcon__ = __webpack_require__(1082);





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

/***/ 1075:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TeamIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
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

/***/ 1082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LockedIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
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

/***/ 1083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DownloadIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
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

/***/ 1094:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceActionDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_MoreIcon__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_uuid_helper__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_UIEventService__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_UIEventConstants__ = __webpack_require__(251);










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
      __WEBPACK_IMPORTED_MODULE_8__services_UIEventService__["a" /* default */].publish(__WEBPACK_IMPORTED_MODULE_9__constants_UIEventConstants__["c" /* OPEN_INVITE_MODAL */], { workspaceId, source: 'share_ws' });
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

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncOfflineStatusBarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sync_SyncOfflineStatusBar__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_RequesterTabConstants__ = __webpack_require__(150);
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

/***/ 1096:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Infobar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Markdown__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_InfobarConstants__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icons_CloseIcon__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Icons_ExclamationIcon__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_UIEventService__ = __webpack_require__(95);








let

Infobar = class Infobar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.dismissInfobar = this.dismissInfobar.bind(this);
    this.handlePrimaryAction = this.handlePrimaryAction.bind(this);
    this.handleSecondaryAction = this.handleSecondaryAction.bind(this);
  }

  componentDidMount() {
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

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Tabs__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_WorkspaceIcon__ = __webpack_require__(1111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WorkspaceSwitcherList__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_sync_SyncOfflineStatusContainer__ = __webpack_require__(1095);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_util__ = __webpack_require__(16);
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

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__["a" /* default */], { identifier: 'personal' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tabs__["a" /* Tab */], { className: 'workspace-switcher__tab', refKey: 'personal' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-switcher__tab__title' }, 'Personal'))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__["a" /* default */], { identifier: 'team' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tabs__["a" /* Tab */], { className: 'workspace-switcher__tab', refKey: 'team' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'workspace-switcher__tab__title' }, 'Team')))),




            !this.props.disableActions &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-switcher__actions' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__["a" /* default */], { identifier: 'createNew' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                    className:
                    __WEBPACK_IMPORTED_MODULE_9_classnames___default()({
                      'workspace-switcher__action workspace-switcher__action--create': true,
                      'disable-component': disableButton }),


                    type: 'text',
                    onClick: this.handleAction.bind(this, 'create') }, 'Create New')),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__["a" /* default */], { identifier: 'allWorkspaces' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                    className:
                    __WEBPACK_IMPORTED_MODULE_9_classnames___default()({
                      'workspace-switcher__action workspace-switcher__action--manage': true,
                      'disable-component': disableButton }),


                    type: 'text',
                    onClick: this.handleAction.bind(this, 'manage-all') }, 'All workspaces')))),








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
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__["a" /* default */], { identifier: 'createNewTeam' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                    type: 'primary',
                    size: 'large',
                    onClick: this.handleAction.bind(this, 'create') }, 'Create a team workspace')))),








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

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = WorkspaceIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
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

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcherList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WorkspaceSwitcherListItem__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(19);
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

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcherListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WorkspaceActionDropdown__ = __webpack_require__(1094);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Dropdowns__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_SuccessIcon__ = __webpack_require__(427);
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

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Infobar__ = __webpack_require__(1096);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_InfobarConstants__ = __webpack_require__(262);




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

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var createReactClass = __webpack_require__(525);
var PropTypes = __webpack_require__(9);
var merge = __webpack_require__(65);
var NotificationContainer = __webpack_require__(1117);
var Constants = __webpack_require__(526);
var Styles = __webpack_require__(1120);

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

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(65);

var emptyObject = __webpack_require__(550);
var _invariant = __webpack_require__(32);

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

/***/ 1117:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var createReactClass = __webpack_require__(525);
var PropTypes = __webpack_require__(9);
var NotificationItem = __webpack_require__(1118);
var Constants = __webpack_require__(526);

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

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var createReactClass = __webpack_require__(525);
var PropTypes = __webpack_require__(9);
var ReactDOM = __webpack_require__(23);
var Constants = __webpack_require__(526);
var Helpers = __webpack_require__(1119);
var merge = __webpack_require__(65);

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

/***/ 1119:
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

/***/ 1120:
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

/***/ 1121:
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

/***/ 2575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Requester; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RequesterHeaderContainer__ = __webpack_require__(2930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RequesterInfobarContainer__ = __webpack_require__(2954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_notification_system__ = __webpack_require__(1115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_notification_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_notification_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_variables_VariablesProvider__ = __webpack_require__(2955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppNotificationStyles__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dnd__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__postman_react_dnd_html5_backend__ = __webpack_require__(2721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__postman_react_dnd_html5_backend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__postman_react_dnd_html5_backend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sync_SyncOfflineStatusContainer__ = __webpack_require__(1095);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__RequesterContentContainer__ = __webpack_require__(2969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_promisifyIdleCallback__ = __webpack_require__(2727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loadable__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_messaging_Popover__ = __webpack_require__(3072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_base_XPaths_XPathProvider__ = __webpack_require__(548);
var _dec, _class;















const RequesterModalContainer = __WEBPACK_IMPORTED_MODULE_12_react_loadable___default()({
  loader: () => Object(__WEBPACK_IMPORTED_MODULE_11__utils_promisifyIdleCallback__["a" /* promisifyIdleCallback */])().then(() => Promise.all/* import() */([__webpack_require__.e(26), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, 3075))),
  loading: () => null });

const StatusBarContainer = __WEBPACK_IMPORTED_MODULE_12_react_loadable___default()({
  loader: () => Object(__WEBPACK_IMPORTED_MODULE_11__utils_promisifyIdleCallback__["a" /* promisifyIdleCallback */])().then(() => Promise.all/* import() */([__webpack_require__.e(19), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, 3450))),
  loading: () => null });let



Requester = (_dec = Object(__WEBPACK_IMPORTED_MODULE_7_react_dnd__["DragDropContext"])(__WEBPACK_IMPORTED_MODULE_8__postman_react_dnd_html5_backend___default.a), _dec(_class = class Requester extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pm.toasts.setNotificationComponent(this.refs.notificationSystem);
  }

  getKeyMapHandlers() {
    return {
      import: pm.shortcuts.handle('import'),

      requestUrl: pm.shortcuts.handle('requestUrl'),
      saveCurrentRequest: pm.shortcuts.handle('saveCurrentRequest'),
      saveCurrentRequestAs: pm.shortcuts.handle('saveCurrentRequestAs'),
      sendCurrentRequest: pm.shortcuts.handle('sendCurrentRequest'),
      sendAndDownloadCurrentRequest: pm.shortcuts.handle('sendAndDownloadCurrentRequest'),
      scrollToRequest: pm.shortcuts.handle('scrollToRequest'),
      scrollToResponse: pm.shortcuts.handle('scrollToResponse'),

      focusSidebar: pm.shortcuts.handle('focusSidebar'),
      focusBuilder: pm.shortcuts.handle('focusBuilder'),
      toggleSidebar: pm.shortcuts.handle('toggleSidebar'),
      switchPane: pm.shortcuts.handle('switchPane'),

      manageEnvironments: pm.shortcuts.handle('manageEnvironments'),
      settings: pm.shortcuts.handle('settings'),
      shortcutCheats: pm.shortcuts.handle('shortcutCheats'),

      openCreateNewModal: pm.shortcuts.handle('openCreateNewModal'),
      newRequesterWindow: pm.shortcuts.handle('newRequesterWindow'),
      newRunnerWindow: pm.shortcuts.handle('newRunnerWindow'),
      newConsoleWindow: pm.shortcuts.handle('newConsoleWindow'),
      toggleFindReplace: pm.shortcuts.handle('toggleFindReplace'),

      increaseUIZoom: pm.shortcuts.handle('increaseUIZoom'),
      decreaseUIZoom: pm.shortcuts.handle('decreaseUIZoom'),
      resetUIZoom: pm.shortcuts.handle('resetUIZoom'),
      toggleLayout: pm.shortcuts.handle('toggleLayout'),
      toggleWorkspaceView: pm.shortcuts.handle('toggleWorkspaceView') };

  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_base_XPaths_XPathProvider__["a" /* default */], { identifier: 'requester' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__["a" /* default */], { keyMap: pm.shortcuts.getShortcuts(), handlers: this.getKeyMapHandlers() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_variables_VariablesProvider__["a" /* default */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'app-requester' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'dropdown-root', style: { width: 0, height: 0 } }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__RequesterHeaderContainer__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__sync_SyncOfflineStatusContainer__["a" /* default */], { position: 'builder' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__RequesterInfobarContainer__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__RequesterContentContainer__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_notification_system___default.a, {
                allowHTML: true,
                ref: 'notificationSystem',
                style: __WEBPACK_IMPORTED_MODULE_6__constants_AppNotificationStyles__["a" /* default */] }),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RequesterModalContainer, null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StatusBarContainer, null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_messaging_Popover__["a" /* default */], null))))));





  }}) || _class);

/***/ }),

/***/ 2582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

let

LoadingIndicator = class LoadingIndicator extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()(
    { 'loading-indicator-wrapper': true }, this.props.className);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'loading-indicator' })));


  }};

/***/ }),

/***/ 2585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ACTION_TYPE_DUPLICATE = 'duplicate',
ACTION_TYPE_EDIT = 'edit',
ACTION_TYPE_RUN = 'run',
ACTION_TYPE_SHARE = 'share',
ACTION_TYPE_DOWNLOAD = 'download',
ACTION_TYPE_DELETE = 'delete',
ACTION_TYPE_ADD_REQUEST = 'add-request',
ACTION_TYPE_ADD_FOLDER = 'add-folder',
ACTION_TYPE_ADD_MONITOR = 'add-monitor',
ACTION_TYPE_ADD_MOCK = 'add-mock',
ACTION_TYPE_PUBLISH_DOCS = 'publish-docs',
ACTION_TYPE_OPEN_IN_BUILDER = 'open_in_builder',
ACTION_TYPE_SELECT = 'select',
ACTION_TYPE_RENAME = 'rename',
ACTION_TYPE_RENAME_TOGGLE = 'rename_toggle',
ACTION_TYPE_OPEN_IN_NEW_TAB = 'open_in_new_tab',
ACTION_TYPE_DESCRIPTION_UPDATE = 'description_update',
ACTION_TYPE_PREVIEW = 'preview',
ACTION_TARGET_COLLECTION = 'collection',
ACTION_TARGET_FOLDER = 'folder',
ACTION_TARGET_REQUEST = 'request',
ACTION_ADD_TO_WORKSPACE = 'add-to-workspace',
ACTION_REMOVE_FROM_WORKSPACE = 'remove-from-workspace',
ACTION_MODIFY_PERMISSIONS = 'modify-permissions';
/* harmony export (immutable) */ __webpack_exports__["n"] = ACTION_TYPE_DUPLICATE;

/* harmony export (immutable) */ __webpack_exports__["o"] = ACTION_TYPE_EDIT;

/* harmony export (immutable) */ __webpack_exports__["u"] = ACTION_TYPE_RUN;

/* harmony export (immutable) */ __webpack_exports__["w"] = ACTION_TYPE_SHARE;

/* harmony export (immutable) */ __webpack_exports__["m"] = ACTION_TYPE_DOWNLOAD;

/* harmony export (immutable) */ __webpack_exports__["k"] = ACTION_TYPE_DELETE;

/* harmony export (immutable) */ __webpack_exports__["j"] = ACTION_TYPE_ADD_REQUEST;

/* harmony export (immutable) */ __webpack_exports__["g"] = ACTION_TYPE_ADD_FOLDER;

/* harmony export (immutable) */ __webpack_exports__["i"] = ACTION_TYPE_ADD_MONITOR;

/* harmony export (immutable) */ __webpack_exports__["h"] = ACTION_TYPE_ADD_MOCK;

/* harmony export (immutable) */ __webpack_exports__["r"] = ACTION_TYPE_PUBLISH_DOCS;

/* harmony export (immutable) */ __webpack_exports__["p"] = ACTION_TYPE_OPEN_IN_BUILDER;

/* harmony export (immutable) */ __webpack_exports__["v"] = ACTION_TYPE_SELECT;

/* harmony export (immutable) */ __webpack_exports__["s"] = ACTION_TYPE_RENAME;

/* harmony export (immutable) */ __webpack_exports__["t"] = ACTION_TYPE_RENAME_TOGGLE;

/* harmony export (immutable) */ __webpack_exports__["q"] = ACTION_TYPE_OPEN_IN_NEW_TAB;

/* harmony export (immutable) */ __webpack_exports__["l"] = ACTION_TYPE_DESCRIPTION_UPDATE;

/* unused harmony export ACTION_TYPE_PREVIEW */

/* harmony export (immutable) */ __webpack_exports__["d"] = ACTION_TARGET_COLLECTION;

/* harmony export (immutable) */ __webpack_exports__["e"] = ACTION_TARGET_FOLDER;

/* harmony export (immutable) */ __webpack_exports__["f"] = ACTION_TARGET_REQUEST;

/* harmony export (immutable) */ __webpack_exports__["a"] = ACTION_ADD_TO_WORKSPACE;

/* harmony export (immutable) */ __webpack_exports__["c"] = ACTION_REMOVE_FROM_WORKSPACE;

/* harmony export (immutable) */ __webpack_exports__["b"] = ACTION_MODIFY_PERMISSIONS;


/***/ }),

/***/ 2592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_InformationIcon__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_CloseIcon__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Markdown__ = __webpack_require__(252);






let

Alert = class Alert extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor() {
    super();
    this.state = { isVisible: true };

    this.handlePrimaryAction = this.handlePrimaryAction.bind(this);
    this.handleSecondaryAction = this.handleSecondaryAction.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);
  }

  handlePrimaryAction() {
    if (this.props.primaryAction && this.props.primaryAction.onClick) {
      this.props.primaryAction.onClick();
    }
    this.setState({ isVisible: false });
  }

  handleSecondaryAction() {
    if (this.props.secondaryAction && this.props.secondaryAction.onClick) {
      this.props.secondaryAction.onClick();
    }
    this.setState({ isVisible: false });
  }

  dismissAlert() {
    this.setState({ isVisible: false });
    this.props.onDismiss && this.props.onDismiss();
  }

  getTypeClass() {
    let typeClass = this.props.type ? `alert-${this.props.type}` : 'alert-info';
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'alert': true,
      [typeClass]: true });

  }

  getActions() {
    const { primaryAction, secondaryAction } = this.props;

    if (primaryAction || secondaryAction) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'alert-actions' },

          primaryAction &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'alert-primary-action',
              type: 'primary',
              size: 'small',
              onClick: this.handlePrimaryAction },

            primaryAction.label),



          secondaryAction &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'alert-secondary-action',
              type: 'text',
              onClick: this.handleSecondaryAction },

            secondaryAction.label)));




    }
  }

  getContentClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'alert-content': true,
      'alert-content-shrink': this.props.isDismissable });

  }

  render() {
    const {
      type,
      title,
      message,
      onMessageLinkClick,
      isDismissable,
      noIcon } =
    this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ 'alert-wrapper': true }, this.props.className) },

        this.state.isVisible &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getTypeClass() },

          !noIcon &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_InformationIcon__["a" /* default */], { className: 'alert-icon' }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getContentClasses() },

            title &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'alert-title' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Markdown__["a" /* default */], {
                source: title,
                onLinkClick: onMessageLinkClick })),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'alert-body' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Markdown__["a" /* default */], {
                source: message,
                onLinkClick: onMessageLinkClick })),


            this.getActions()),


          isDismissable &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'alert-dismiss',
              onClick: this.dismissAlert },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_CloseIcon__["a" /* default */], {
              className: 'alert-close',
              size: 'xs' })))));







  }};


Alert.defaultProps = {
  type: 'info',
  message: '',
  isDismissable: true,
  noIcon: false,
  primaryAction: null,
  secondaryAction: null,
  onMessageLinkClick: null };


Alert.propTypes = {
  type: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['error', 'success', 'warn', 'info']),
  message: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  isDismissable: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  noIcon: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  onMessageLinkClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func };

/***/ }),

/***/ 2595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AddIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '12', height: '12', viewBox: '0 0 12 12' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'add', d: 'M7 7V3a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2H9v4a1 1 0 0 1-2 0V9H3a1 1 0 1 1 0-2h4z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', transform: 'translate(-2 -2)', xlinkHref: '#add' }));



function AddIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PublishIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '15', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'publish', d: 'M5 15.991V.002h9.827c.317-.02.628.097.852.323.224.226.339.539.316.857v13.7c.03.3-.076.599-.289.812a1 1 0 0 1-.81.29H5v.007zM7.5 4v1h6V4h-6zm6 4h-6V7h6v1zM3 15.991c-.385.02-.615 0-1 0-1 0-.992-.48-.995-.951V1.123c-.03-.3.077-.598.29-.81C1.507.098 1.7-.009 2 .02h1v15.97z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#publish' }));



function PublishIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MockIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '11', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'mock', d: 'M2.301 3c-.755 0-1.127.687-1.369 1.437L.197 6.71A3.98 3.98 0 0 0 0 7.985v4.583C0 13.358.615 14 1.373 14h13.254c.756 0 1.373-.642 1.373-1.432V7.985c0-.456-.063-.845-.201-1.275l-.732-2.274C14.827 3.687 14.452 3 13.694 3H2.301zm12.18 4.645c.254 0 .458.215.458.479v4.292a.468.468 0 0 1-.458.479H6.796v-2.623h-.693v2.623H5.49v-2.623h-.697v2.623h-.607v-2.623H3.49v2.623h-.603v-2.623H2.19v2.623h-.676a.47.47 0 0 1-.457-.479V8.124a.47.47 0 0 1 .457-.479h12.967zm-.97 1.697c-.489 0-.886.418-.886.93 0 .514.397.927.885.927s.89-.415.89-.927c0-.51-.402-.93-.89-.93z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#mock' }));



function MockIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MonitorIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '12', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'monitor', d: 'M15.144 8.82H12.92l-2.14-3.367-2.31 4.49L5.049 2l-2.31 6.82H.856c-.514 0-.856.345-.856.863s.428.864.856.864H4.02L5.22 6.835 8.3 14l2.653-5.18 1.027 1.727h3.165c.514 0 .856-.346.856-.864s-.342-.863-.856-.863z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#monitor' }));



function MonitorIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MANAGE_ENVIRONMENT_VIEW_MAIN = 'main',
MANAGE_ENVIRONMENT_VIEW_ADD_ENV = 'add-environment',
MANAGE_ENVIRONMENT_VIEW_EDIT_ENV = 'edit-environment',
MANAGE_ENVIRONMENT_VIEW_DELETE_ENV = 'delete-environment',
MANAGE_ENVIRONMENT_VIEW_IMPORT_ENV = 'import-environment',
MANAGE_ENVIRONMENT_VIEW_GLOBALS = 'globals';
/* harmony export (immutable) */ __webpack_exports__["f"] = MANAGE_ENVIRONMENT_VIEW_MAIN;

/* harmony export (immutable) */ __webpack_exports__["a"] = MANAGE_ENVIRONMENT_VIEW_ADD_ENV;

/* harmony export (immutable) */ __webpack_exports__["c"] = MANAGE_ENVIRONMENT_VIEW_EDIT_ENV;

/* harmony export (immutable) */ __webpack_exports__["b"] = MANAGE_ENVIRONMENT_VIEW_DELETE_ENV;

/* harmony export (immutable) */ __webpack_exports__["e"] = MANAGE_ENVIRONMENT_VIEW_IMPORT_ENV;

/* harmony export (immutable) */ __webpack_exports__["d"] = MANAGE_ENVIRONMENT_VIEW_GLOBALS;


/***/ }),

/***/ 2604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Avatar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons_AddIcon__ = __webpack_require__(2595);



let

Avatar = class Avatar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getUserClasses() {
    let userId = parseInt(this.props.userId);
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'icon-user-avatar-default': true,
      'pm-user-avatar-icon': true,
      [`pm-user-avatar-icon-${userId % 16}`]: true,
      [`pm-user-avatar-icon-color-${userId % 14}`]: true,
      'pm-icon-sm': this.props.size === 'small',
      'pm-icon-md': this.props.size === 'medium',
      'pm-icon-lg': this.props.size === 'large' });

  }

  getProfilePicUrl(org, id) {
    if (_.size(org) > 0 && id) {
      const user = _.find(org[0].team_users, user => {
        return user.id.toString() === id.toString();
      });

      if (user) {
        return user.profile_pic_url;
      }
    }

    return null;
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    profilePicUrl = this.props.customPic || this.getProfilePicUrl(currentUser.organizations, this.props.userId);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'avatar' },

        this.props.type === 'user' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: this.getUserClasses() },
          profilePicUrl &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'pm-user-avatar-custompic',
            style: { backgroundImage: `url(${profilePicUrl})` } })),





        this.props.type === 'adduser' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons_AddIcon__["a" /* default */], {
          className: 'pm-adduser-avatar',
          size: 'lg',
          style: 'primary' })));




  }};


Avatar.defaultProps = {
  type: 'user',
  size: 'large' };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RequestIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '10', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'request', d: 'M.842 3h14.316c.505 0 .842.333.842.833v8.334c0 .5-.337.833-.842.833H.842C.337 13 0 12.667 0 12.167V3.833C0 3.333.337 3 .842 3zm3.284 4.833v.834h.927v1c-.253.083-.421.083-.674.083-.421 0-.758-.167-.926-.417a2.14 2.14 0 0 1-.337-1.166c0-.5.168-.917.42-1.167.253-.25.59-.417 1.096-.417.42 0 .757.084 1.094.25L6.063 6c-.42-.167-.926-.333-1.431-.333-.758 0-1.432.25-1.853.666-.421.417-.674 1-.674 1.834 0 .75.169 1.416.59 1.833.42.417.926.667 1.684.667.253 0 .59 0 .842-.084.253-.083.59-.083.842-.25v-2.5H4.126zm5.81 2.667v-.833H8.169v-1.25h1.6v-.834h-1.6V6.5h1.769v-.833h-2.78v4.75h2.78v.083zm2.864 0V6.583h1.347V5.75h-3.62v.833h1.347V10.5h.926z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#535353', fillRule: 'nonzero', xlinkHref: '#request' }));



function RequestIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleSwitch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);


let

ToggleSwitch = class ToggleSwitch extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick && this.props.onClick(!this.props.isActive);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'toggle-switch': true,
      'is-active': this.props.isActive });

  }

  getWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()('toggle-switch-container', this.props.className);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getWrapperClasses(), onClick: this.handleClick },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() }),

        !this.props.hideLabel &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'toggle-switch-text' },

          this.props.isActive ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'toggle-switch-text-on' }, this.props.activeLabel) :
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'toggle-switch-text-off' }, this.props.inactiveLabel))));





  }};



ToggleSwitch.defaultProps = {
  activeLabel: 'ON',
  inactiveLabel: 'OFF',
  isActive: false };


ToggleSwitch.propTypes = {
  isActive: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  hideLabel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  activeLabel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  inactiveLabel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func };

/***/ }),

/***/ 2613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ACTION_TYPE_SAVE = 'save',
ACTION_TYPE_MONITOR = 'monitor',
ACTION_TYPE_DOCUMENT = 'document',
ACTION_TYPE_MOCK = 'mock',
ACTION_TYPE_DELETE = 'delete';
/* harmony export (immutable) */ __webpack_exports__["e"] = ACTION_TYPE_SAVE;

/* harmony export (immutable) */ __webpack_exports__["d"] = ACTION_TYPE_MONITOR;

/* harmony export (immutable) */ __webpack_exports__["b"] = ACTION_TYPE_DOCUMENT;

/* harmony export (immutable) */ __webpack_exports__["c"] = ACTION_TYPE_MOCK;

/* harmony export (immutable) */ __webpack_exports__["a"] = ACTION_TYPE_DELETE;


/***/ }),

/***/ 2622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = EnvironmentIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '12', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'environment', d: 'M11.826 12.629v1.028H.696A.69.69 0 0 1 0 12.971V2.686A.69.69 0 0 1 .696 2h13.913a.69.69 0 0 1 .695.686v7.2h-1.043V3.029H1.043v9.6h10.783zm-7.652-7.2h6.956c.385 0 .696.311.696.695v3.409a.696.696 0 0 1-.696.696H4.174a.696.696 0 0 1-.696-.696V6.124c0-.384.312-.695.696-.695zm8.696 5.485H16V14h-3.13v-3.086z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#535353', fillRule: 'nonzero', xlinkHref: '#environment' }));



function EnvironmentIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RenameIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '15', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'rename', d: 'M14 1.088v13.824h.964v1h-3.143v-1H13V1.088h-1.179v-1h3.143v1H14zm-5.337 12.56l-.851-2.762h-4.28l-.85 2.761H0L4.143 2h3.042l4.16 11.647H8.662zM7.218 8.822a809.601 809.601 0 0 1-1.33-4.244 11.87 11.87 0 0 1-.212-.778c-.177.677-.682 2.351-1.517 5.022h3.059z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'nonzero', xlinkHref: '#rename' }));



function RenameIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_cloneWithRef__ = __webpack_require__(2982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ContextMenuShortcutLabelHelper__ = __webpack_require__(2983);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};




const remote = __webpack_require__(17).remote;let

ContextMenuMonitor = class ContextMenuMonitor {
  constructor() {
    this.isContextMenuOpen = false;
    this.isOpen = this.isOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  open() {
    this.isContextMenuOpen = true;
    this.attachEventListeners();
  }

  isOpen() {
    return this.isContextMenuOpen;
  }

  attachEventListeners() {
    window.addEventListener('mousedown', this.handleClose);
    window.addEventListener('blur', this.handleClose);
  }

  removeEventListeners() {
    window.removeEventListener('blur', this.handleClose);
    window.removeEventListener('mousedown', this.handleClose);
  }

  handleClose() {
    this.isContextMenuOpen = false;
    this.removeEventListeners();
  }};


const ContextMenu = (menuTemplate, options) => {
  return WrappedComponent => {
    return class ContextMenuComponent extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
      constructor(props) {
        super(props);
        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.monitor = new ContextMenuMonitor();
        this.options = _.isFunction(options) && options(this.monitor) || {};
        this.handleConnectContextMenuSource = this.handleConnectContextMenuSource.bind(this);
      }

      handleContextMenu(e) {
        // Allow input-related context menu
        if (_.get(e, 'target.nodeName') === 'INPUT') {
          return;
        }

        e.preventDefault();
        e.stopPropagation();
        this.monitor.open();

        let filteredMenuTemplate = _.chain(menuTemplate).
        filter(template => {
          return !template.isVisible || template.isVisible(this.props);
        }).
        map(template => {
          template.click = () => {
            template.onClick(this.props, this.decoratedComponentInstance);
          };
          if (template.shortcut) {
            template.accelerator = Object(__WEBPACK_IMPORTED_MODULE_3__utils_ContextMenuShortcutLabelHelper__["a" /* default */])(template.shortcut);
          }
          return template;
        }).
        value();

        remote.Menu.buildFromTemplate(filteredMenuTemplate).
        popup(remote.getCurrentWindow());
      }

      handleConnectContextMenuSource(component) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__utils_cloneWithRef__["a" /* default */])(component, node => {
          this.decoratedComponentInstanceNode = node;
        });
      }

      render() {
        return (
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, _extends({
            connectContextMenuSource: this.handleConnectContextMenuSource,
            ref: component => {
              if (!this.decoratedComponentInstance) {
                this.decoratedComponentInstance = component;
              }
            } },
          this.props,
          this.options)));


      }

      componentDidMount() {
        if (this.decoratedComponentInstanceNode) {
          this.decoratedComponentInstanceNode.addEventListener('contextmenu', this.handleContextMenu);
        } else
        {
          this.decoratedComponentInstanceNode = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.decoratedComponentInstance);
          if (this.decoratedComponentInstanceNode) {
            this.decoratedComponentInstanceNode.addEventListener('contextmenu', this.handleContextMenu);
          }
        }
      }

      componentWillUnmount() {
        if (this.decoratedComponentInstanceNode) {
          this.decoratedComponentInstanceNode.removeEventListener('contextmenu', this.handleContextMenu);
          this.decoratedComponentInstanceNode = null;
        }
      }};

  };
};

/* harmony default export */ __webpack_exports__["a"] = (ContextMenu);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_services_DashboardService__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_CollectionController__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_PublishedCollectionController__ = __webpack_require__(1228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(7);








/**
                                                    *
                                                    * @param {*} collectionId
                                                    * @param {*} cb
                                                    */
function getDocumentationURL(collectionId, cb) {
  __WEBPACK_IMPORTED_MODULE_3__modules_controllers_CollectionController__["a" /* default */].
  getCollection({ id: collectionId }).
  then((collection = {}) => {
    cb && cb(null, Object(__WEBPACK_IMPORTED_MODULE_2__models_services_DashboardService__["c" /* getEntityDetailsURL */])('collections', `${collection.owner}-${collectionId}`, Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace));
  }).
  catch(e => {
    console.error('Error in generating documenter URL', e);
    cb && cb(e);
  });
}

/**
   *
   * @param {*} collection
   * @param {*} source
   * @param {*} cb
   */
function getCollectionPublicURL(collection, source, cb) {

  __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__["a" /* default */].
  get().
  then(user => {
    let userId = user.id,
    publishedId = collection.publishedId;

    _.isFunction(cb) && cb(null, window.postman_scribe_url + '/view/' + userId + '/' + publishedId + (source ? '?source=' + source : ''));
  }).
  catch(e => {
    console.error('Error in handling collection public url', e);
    _.isFunction(cb) && cb(e);
  });
}

/**
   *
   * @param {*} collection
   * @param {*} cb
   */
function getDocumentationPublishURL(collection = {}, cb) {
  cb && cb(null, Object(__WEBPACK_IMPORTED_MODULE_2__models_services_DashboardService__["b" /* getCollectionPublishURL */])(`${collection.owner}-${collection.id}`, Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace));
}

/**
   *
   * @param {*} user
   */
function populatePublishedCollections(user) {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["h" /* GetPublishedCollectionsForTeam */])(user, (err, publishedCollections) => {
    if (err) {
      console.error('Error in fetching published collections', err);
      return;
    }
    var myPublishedCollections = _.filter(publishedCollections, function (collection) {
      return collection.owner === user.id;
    });

    _.each(myPublishedCollections, collection => {
      __WEBPACK_IMPORTED_MODULE_4__modules_controllers_PublishedCollectionController__["a" /* default */].get({ collectionId: collection.collectionId }).then(function (existingCollection) {
        !existingCollection && __WEBPACK_IMPORTED_MODULE_4__modules_controllers_PublishedCollectionController__["a" /* default */].create(collection);
      });
    });

  }, function (error) {
    console.error('Error fetching published collections', error);
  });
}

/**
   *
   * @param {*} environmentId
   * @param {*} callback
   */
function getPublishedCollectionsByEnvId(environmentId, callback) {
  __WEBPACK_IMPORTED_MODULE_4__modules_controllers_PublishedCollectionController__["a" /* default */].getAll().then(publishedCollections => {
    let collections = _.reduce(publishedCollections, (collections, pc) => {
      if (pc.environmentTemplateId === environmentId) {
        const collection = pm.collections.get(pc.collectionId);
        if (collection) {
          collections.push(collection);
        }
      }
      return collections;
    }, []);

    callback(collections);
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({ getDocumentationURL, getCollectionPublicURL, getDocumentationPublishURL, populatePublishedCollections, getPublishedCollectionsByEnvId });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_SignInModalService__ = __webpack_require__(2718);



/**
                                                                                        * Returns the data required for the mock or monitor creation
                                                                                        *
                                                                                        * @param {Object} data
                                                                                        */
function getData({ collectionId = null, requests = null, opts }) {
  if (opts.activeStep === 1) {
    return {
      workspaceId: Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id };

  }

  let environmentId = null,
  environmentStore = Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('EnvironmentStore'),
  activeWorkspaceStore = Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore'),
  environment = environmentStore.find(Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id),
  environments = activeWorkspaceStore.environments,
  sortedEnvironments = _.sortBy(environments, e => _.toLower(e.name)),

  collection = collectionId && Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('CollectionStore').find(collectionId),
  collections = activeWorkspaceStore.editableCollections;

  if (environment) {
    environmentId = environment.id;
  }

  environments = _.concat({
    id: null,
    name: 'No Environment' },
  sortedEnvironments);

  // Launch the 2nd step of create new X modal since
  // the data is already present and creation step should be shown
  let data = {
    activeStep: 2,
    activeSource: 'workspace',
    ownCollections: collections,
    ownEnvironments: environments,
    workspaceId: Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id,
    from: opts.from };


  if (collectionId && collection) {
    data.selectedOptions = {
      environmentId,
      collectionId,
      ownerId: collection.owner,
      name: collection.name };

  } else
  {
    data.selectedOptions = {
      environmentId,
      name: opts.name,
      requests };

  }

  return data;
}


/**
   * Triggers the modal event
   *
   * @param  {...any} args
   */
function _triggerEvent(...args) {
  pm.mediator.trigger(...args);
}

/**
   * Checks if the user is not logged in then shows sign in modal
   * otherwise triggers the modal
   */
function _launchModal(event, data, onSuccess, opts) {
  let currentUser = Object(__WEBPACK_IMPORTED_MODULE_0__stores_get_store__["a" /* getStore */])('CurrentUserStore');

  if (opts.from === 'create_new_modal') {
    opts.onBack = () => _triggerEvent('openCreateNewXModal');
  }

  if (!currentUser.isLoggedIn || !currentUser.syncEnabled) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_SignInModalService__["a" /* showContextualSignInModal */])(event, () => {
      _triggerEvent(event, data, onSuccess);
    }, opts);
  }

  _triggerEvent(event, data, onSuccess);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
                  * Launches Create New X Modal
                  * to create a new Documentation, Mock or Monitor for
                  * a collection or requests in history
                  *
                  * @param {*} event
                  * @param {*} data
                  * @param {*} onSuccess
                  */
  create: function (event, data, onSuccess = null, opts = {}) {
    _launchModal(event, getData(data), onSuccess, opts);
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _class;



const TOKEN_100_PERCENTAGE = '100%',
TOKEN_PERCENTAGE = '%';let


ProgressBar = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class ProgressBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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

/***/ 2648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shallowCompare__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



// Similar to pure-render-decorator but excludes functions when comparing


function shouldComponentUpdate(nextProps, nextState, options = {}) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__shallowCompare__["a" /* default */])(this, nextProps, nextState, options);
}

/**
   * Makes the given component "pure".
   *
   * @private
   * @param options
   * @example @pureRender({ignoreFunctions: true})
   */
const pureRenderDecorator = args => {
  if (!_.isFunction(args) && _.isObject(args)) {
    const options = args;
    return DecoratedComponent => {
      DecoratedComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return shouldComponentUpdate.apply(this, [nextProps, nextState, options]);
      };
      return DecoratedComponent;
    };
  } else
  if (_.isFunction(args)) {
    const component = args;
    component.prototype.shouldComponentUpdate = shouldComponentUpdate;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (pureRenderDecorator);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ShareIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '12', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'share', d: 'M10 6C5.3 6 1.2 9.2.06 13.76L0 14c2.56-2.56 6.04-4 9.66-4H10v4l6-6-6-6v4z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#000', fillRule: 'nonzero', xlinkHref: '#share' }));



function ShareIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NewFolderIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '15', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'new-folder', d: 'M8.726 3H11.5c.852 0 1.5.648 1.5 1.5V6h-2V5H7.771L5.98 3H2v8h4v2H1.5A1.47 1.47 0 0 1 0 11.5v-9C0 1.696.596 1 1.4 1h4.9c.503 0 .84.307 1.182.678L8.726 3zM11 11V8h2v3h3v2h-3v3h-2v-3H8v-2h3z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'nonzero', xlinkHref: '#new-folder' }));



function NewFolderIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FolderIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
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

/***/ 2652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivedResource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_ArchiveIcon__ = __webpack_require__(2990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_AppUrlConstants__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messaging_Alert__ = __webpack_require__(2592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
var _class;







const COLLECTIONS = 'COLLECTIONS',
HISTORIES = 'HISTORIES';let


ArchivedResource = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class ArchivedResource extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getArchivedCount() {
    switch (this.props.label) {
      case COLLECTIONS:
        return this.props.archivedResources.archivedCollectionsCount;
      case HISTORIES:
        return this.props.archivedResources.archivedHistoryCount;}

  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'archived-resource-item': true,
      'is-actionable': !!this.props.onClick });

  }

  render() {

    let archivedCount = this.getArchivedCount();
    if (!archivedCount) {
      return '';
    }

    let warningMessage = `Some ${this.props.label.toLowerCase()} were archived because you’ve reached the shared requests limits. [Learn more](${__WEBPACK_IMPORTED_MODULE_4__constants_AppUrlConstants__["b" /* ARCHIVED_RESOURCES_DOCS */]})`;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'archived-resource-item-container' },

        this.props.showWarning &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__messaging_Alert__["a" /* default */], {
          message: warningMessage,
          type: 'warn' }),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses(), onClick: this.props.onClick },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'archived-resource-item-icon-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_ArchiveIcon__["a" /* default */], { size: 'xs' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'archived-resource-item-text' }, 'ARCHIVED ', this.props.label, ' (', archivedCount, ')'))));



  }}) || _class;

ArchivedResource.propTypes = { archivedResources: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired };

/***/ }),

/***/ 2670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTabShortcuts; });
/**
 * Return an object with all tab level shortcuts
 *
 * @returns {Object}
 */
let getTabShortcuts = function () {
  return {
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
    switchToLastTab: pm.shortcuts.handle('switchToLastTab'),
    reopenLastClosedTab: pm.shortcuts.handle('reopenLastClosedTab') };

};



/***/ }),

/***/ 2671:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(1225),
    baseKeysIn = __webpack_require__(2960),
    isArrayLike = __webpack_require__(429);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 2672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var FILE = '__NATIVE_FILE__';
exports.FILE = FILE;
var URL = '__NATIVE_URL__';
exports.URL = URL;
var TEXT = '__NATIVE_TEXT__';
exports.TEXT = TEXT;

/***/ }),

/***/ 2673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_EditorService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_EditorUtils__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_EditorUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_EditorUtils__);



let CollectionSidebarService = {
  openRequestInTab: function (id, opts) {
    if (!id) {
      return Promise.reject(new Error('CollectionSidebarService~openRequestInTab: Request resource is a mandatory parameter'));
    }

    let requestResource = Object(__WEBPACK_IMPORTED_MODULE_1__utils_EditorUtils__["requestResourceId"])({ id });

    return __WEBPACK_IMPORTED_MODULE_0__services_EditorService__["a" /* default */].open(requestResource, { forceNew: opts && opts.newTab });
  } };


/* harmony default export */ __webpack_exports__["a"] = (CollectionSidebarService);

/***/ }),

/***/ 2674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__ = __webpack_require__(2585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_services_DocumenterService__ = __webpack_require__(2625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_APIService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_CollectionPermissionService__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_new_button_CreateNewXService__ = __webpack_require__(2626);









/* harmony default export */ __webpack_exports__["a"] = ((id, action, modifiers, options = {}, callback) => {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  let store = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('EnvironmentStore');

  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["u" /* ACTION_TYPE_RUN */]) {
    let environmentId = null,
    environment = store.find(Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id);
    if (environment) {
      environmentId = environment.id;
    }
    pm.mediator.trigger('newRunnerWindow', id, null, environmentId);
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */]) {
    pm.mediator.trigger('showAddToCollectionModal',
    {},
    {
      target: {
        type: 'collection',
        collection: Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CollectionStore').find(id) } });



  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]) {
    pm.mediator.trigger('showAddFolderModal', id);
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */] || action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */]) {
    let event = 'openCreateNewMockModal';
    if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */]) {
      event = 'openCreateNewMonitorModal';
    }

    __WEBPACK_IMPORTED_MODULE_7__containers_new_button_CreateNewXService__["a" /* default */].create(event,
    {
      collectionId: id,
      opts: { from: options.origin } },

    null,
    { from: options.origin });

  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]) {
    pm.mediator.trigger('showEditModal', id);
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DOWNLOAD */]) {
    pm.mediator.trigger('showExportCollectionModal', id);
    options.origin === 'browse' && __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__["a" /* default */].addEvent('collection', 'export', 'browse_view');
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]) {
    // @todo: fix subscriber count and published status
    // var subscribers = pm.team_directory.getSubscribers(id),
    // published = pm.collections.getPublishStatus(this.props.collection.owner + '#' + id);
    var subscribers = [],
    subscriberCount = !_.isEmpty(subscribers) ? subscribers.length : 0,
    published = true,
    triggerOptions = {
      subscriberCount,
      published,
      origin: options.origin };


    pm.mediator.trigger('showCollectionDeleteModal', id, triggerOptions, callback);
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]) {
    let duplicateCollectionEvent,
    activeWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id;

    duplicateCollectionEvent = {
      name: 'duplicate',
      namespace: 'collection',
      data: { collection: { id } } };


    Object(__WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__["a" /* default */])(duplicateCollectionEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        console.error('Error in duplicating collection', response.error);
        return;
      }

      options.origin === 'browse' && __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__["a" /* default */].addEvent('collection', 'duplicate', 'browse_view');

      // @todo response needs the new Id
      // _.invoke(this, 'props.onDuplicate', newId);
    }).
    catch(err => {
      console.error('Error in pipeline while duplicating collection', err);
    });
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["w" /* ACTION_TYPE_SHARE */]) {
    pm.mediator.trigger('shareCollectionModal', id, { origin: options.origin });
    __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__["a" /* default */].addEvent('collection', 'modal', 'dropdown');
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_RENAME */]) {
    let updateCollectionEvent = {
      name: 'update',
      namespace: 'collection',
      data: { id, name: modifiers.name } };


    Object(__WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__["a" /* default */])(updateCollectionEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        console.error('Error in renaming collection', response.error);
        return;
      }
      pm.mediator.trigger('focusSidebar');
      _.isFunction(callback) && callback();
    }).
    catch(err => {
      console.error('Error in pipeline while renaming collection', err);
    });
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["r" /* ACTION_TYPE_PUBLISH_DOCS */]) {
    if (options.origin === 'browse') {
      __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__["a" /* default */].addEvent('collection', 'publish', 'browse_view');
    } else {
      __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__["a" /* default */].addEvent('documenter', 'initiate_publish', options.origin);
    }

    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore');

    if (!currentUser.isLoggedIn) {
      pm.mediator.trigger('publishDocsSignedoutModal', true);
      _.isFunction(callback) && callback();
      return;
    }

    let collection = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CollectionStore').find(id);
    __WEBPACK_IMPORTED_MODULE_2__models_services_DocumenterService__["a" /* default */].getDocumentationPublishURL(collection, (err, publishUrl) => {
      Object(__WEBPACK_IMPORTED_MODULE_5__modules_services_APIService__["u" /* openAuthenticatedRoute */])(publishUrl);
    });
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["a" /* ACTION_ADD_TO_WORKSPACE */]) {
    let collection = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CollectionStore').find(id);
    pm.mediator.trigger('openAddToWorkspaceModal', collection.uid, 'collection', { origin: options.origin });
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */]) {
    let triggerOptions = {
      subscriberCount,
      published,
      origin: options.origin };

    pm.mediator.trigger('showRemoveCollectionFromWorkspaceModal', id, triggerOptions, callback);
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["b" /* ACTION_MODIFY_PERMISSIONS */]) {
    pm.mediator.trigger('showModifyPermissions', {
      collectionId: id,
      workspaceId: Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id });

  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryItemActionsDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_DeleteIcon__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_MoreIcon__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_AddIcon__ = __webpack_require__(2595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_PublishIcon__ = __webpack_require__(2596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_MockIcon__ = __webpack_require__(2597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Icons_MonitorIcon__ = __webpack_require__(2598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_PluralizeHelper__ = __webpack_require__(1067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_HistoryActionsConstants__ = __webpack_require__(2613);
var _class;












let


HistoryItemActionsDropdown = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class HistoryItemActionsDropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleShortcutSelect = this.handleShortcutSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getKeymapHandlers() {
    return { delete: pm.shortcuts.handle('delete', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_12__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */])) };
  }

  handleShortcutSelect(action) {
    pm.mediator.trigger('focusSidebar');
    this.handleSelect(action);
  }

  handleSelect(action) {
    this.props.onSelect && this.props.onSelect(action);
    this.handleToggle(false);
  }

  handleToggle(isOpen) {
    this.props.onToggle && this.props.onToggle(isOpen);
  }

  getDropDownActionWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ 'collection-sidebar-request-dropdown-actions-wrapper': true });
  }

  render() {
    let pluralizeRequest = __WEBPACK_IMPORTED_MODULE_11__utils_PluralizeHelper__["a" /* default */].pluralize({
      count: this.props.count,
      singular: 'Request',
      plural: 'Requests' });


    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getDropDownActionWrapperClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["a" /* Dropdown */], {
            keyMapHandlers: this.getKeymapHandlers(),
            ref: 'menu',
            onSelect: this.handleSelect,
            onToggle: this.handleToggle,
            className: 'collection-sidebar-request-actions-dropdown' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["b" /* DropdownButton */], {
              dropdownStyle: 'nocaret',
              type: 'custom' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], { className: 'history-sidebar-list-item__button__options' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_MoreIcon__["a" /* default */], { size: 'xs', className: 'history-sidebar-list-item__actions__options' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["c" /* DropdownMenu */], {
              'align-right': true,
              dropup: 'auto' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_HistoryActionsConstants__["e" /* ACTION_TYPE_SAVE */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_AddIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--add' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, `Save ${pluralizeRequest}`)),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_HistoryActionsConstants__["d" /* ACTION_TYPE_MONITOR */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Icons_MonitorIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--add-monitor' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, `Monitor ${pluralizeRequest}`)),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_HistoryActionsConstants__["b" /* ACTION_TYPE_DOCUMENT */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_PublishIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--publish-docs' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, `Document ${pluralizeRequest}`)),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_HistoryActionsConstants__["c" /* ACTION_TYPE_MOCK */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_MockIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--add-mock' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, `Mock ${pluralizeRequest}`)),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_DeleteIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--delete' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Delete'))))));





  }}) || _class;

/***/ }),

/***/ 2676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ProfileIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '12', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'profile', d: 'M8.004 9.674V8C11.314 8 14 11 14 14v2H2v-2c.001-1.52.634-3.252 1.76-4.326A6.142 6.142 0 0 1 8.004 8v1.674zM8 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#A9A9A9', fillRule: 'evenodd', xlinkHref: '#profile' }));



function ProfileIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NewWindowIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'new-window', d: 'M13 11h3v2h-3v3h-2v-3H8v-2h3V8h2v3zM1 0h11c.6 0 1 .4 1 1v5H9v3H6v4H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#D8D8D8', fillRule: 'evenodd', xlinkHref: '#new-window' }));



function NewWindowIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = showContextualSignInModal;
const eventTypeMap = {
  'openCreateNewDocumentationModal': 'documentation',
  'openCreateNewMockModal': 'mock',
  'openCreateNewMonitorModal': 'monitor',
  'mock': 'mock',
  'monitor': 'monitor',
  'documentation': 'documentation',
  'invite': 'invite' };


/**
                         * Launches the sign in modal and handles onLogin and onBack
                         * to give control back
                         *
                         * @param {String} event
                         * @param {Function} callback
                         * @param {Object} opts
                         */
function showContextualSignInModal(event = 'invite', callback = null, opts = {}) {
  let type = eventTypeMap[event] || 'invite';

  return pm.mediator.trigger('showContextualSignInModal', {
    type,
    from: opts.from,
    onLogin: () => {
      // After login, the CNX modal opens
      // so we have to close it
      pm.mediator.trigger('closeCreateNewXModal');

      _.isFunction(callback) && callback();
    },
    onBack: _.isFunction(opts.onBack) && opts.onBack });

}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SyncedIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'sync-offline', d: 'M10.879 1.53625L9.67011 2.89002C9.15196 2.67143 8.58923 2.55166 8.00044 2.55166C5.9462 2.55166 4.20588 4.00319 3.56697 6.03612H5.48913L2.74456 10.267L0 6.03612H1.88891C2.58474 3.01031 5.06263 0.763058 8.00009 0.763058H8.00048C9.03619 0.763058 10.0153 1.04207 10.879 1.53625ZM5.12128 13.9896L6.32861 12.6375C6.84788 12.8553 7.41134 12.9745 7.99991 12.9745C10.0561 12.9745 11.7916 11.5196 12.4277 9.48368H10.5111L13.2556 5.25283L16 9.48387H14.1056C13.4131 12.5121 10.9395 14.7631 7.99991 14.7631C6.96358 14.7631 5.98481 14.4839 5.12128 13.9896ZM13.5915 0L15.0832 1.33212L2.40855 15.5261L0.916752 14.194L13.5915 0Z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#A9A9A9', fillRule: 'evenodd', xlinkHref: '#sync-offline' }));


function SyncedIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPanelHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
let

NotificationPanelHeader = class NotificationPanelHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'notification-panel-header__title' }, 'NOTIFICATIONS')));


  }};

/***/ }),

/***/ 2721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = createHTML5Backend;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _HTML5Backend = __webpack_require__(2958);

var _HTML5Backend2 = _interopRequireDefault(_HTML5Backend);

var _getEmptyImage = __webpack_require__(2968);

var _getEmptyImage2 = _interopRequireDefault(_getEmptyImage);

var _NativeTypes = __webpack_require__(2672);

var NativeTypes = _interopRequireWildcard(_NativeTypes);

exports.NativeTypes = NativeTypes;
exports.getEmptyImage = _getEmptyImage2['default'];

function createHTML5Backend(manager) {
  return new _HTML5Backend2['default'](manager);
}

/***/ }),

/***/ 2722:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(1079),
    isArrayLike = __webpack_require__(429),
    isIndex = __webpack_require__(1098),
    isObject = __webpack_require__(430);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 2723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashMemoize = __webpack_require__(2724);

var _lodashMemoize2 = _interopRequireDefault(_lodashMemoize);

var isFirefox = _lodashMemoize2['default'](function () {
  return (/firefox/i.test(navigator.userAgent)
  );
});

exports.isFirefox = isFirefox;
var isSafari = _lodashMemoize2['default'](function () {
  return Boolean(window.safari);
});
exports.isSafari = isSafari;

/***/ }),

/***/ 2724:
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(1106);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 2725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CollectionAddIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '15', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'collection-add', d: 'M11.5 1c.852 0 1.5.648 1.5 1.5V6h-2V5H7.771L5.98 3H2v8h4v2H1.5A1.47 1.47 0 0 1 0 11.5v-9C0 1.696.596 1 1.4 1H11.5zM11 11V8h2v3h3v2h-3v3h-2v-3H8v-2h3zM7 3l1 1h3a1 1 0 0 0-1-1H7z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'nonzero', xlinkHref: '#collection-add' }));



function CollectionAddIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HistoryItemActionsDropdown__ = __webpack_require__(2675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_AddIcon__ = __webpack_require__(2595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_DeleteIcon__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_request_RequestIcon__ = __webpack_require__(1092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Avatar__ = __webpack_require__(2604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Icons_ProfileIcon__ = __webpack_require__(2676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_Tooltips__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_moment__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_HistoryActionsConstants__ = __webpack_require__(2613);
var _class;














let


HistoryListItem = __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default()(_class = class HistoryListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      isTooltipVisible: false,
      tooltipTarget: null };


    this.handleSelect = this.handleSelect.bind(this);
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleDropdownActionSelect = this.handleDropdownActionSelect.bind(this);
    this.handleAddRequestToCollectionClick = this.handleAddRequestToCollectionClick.bind(this);
    this.handleRemoveRequest = this.handleRemoveRequest.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (!this.props.selected && nextProps.selected) {
      let $node = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);
      $node && $node.scrollIntoViewIfNeeded && $node.scrollIntoViewIfNeeded();
    }
  }

  showTooltip() {
    this.setState({ isTooltipVisible: true });
  }

  hideTooltip() {
    this.setState({ isTooltipVisible: false });
  }

  handleSelect(e) {
    e.stopPropagation();
    let modifiers = {
      ctrlKey: e.ctrlKey,
      metaKey: e.metaKey,
      shiftKey: e.shiftKey };

    this.props.onSelect && this.props.onSelect(this.props.id, modifiers);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'history-sidebar-list-item': true,
      'is-hovered': this.state.dropdownOpen,
      'is-selected': this.props.selected });

  }

  getLabelClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'history-sidebar-list-item__label': true,
      'request-method--GET': this.props.method && _.includes(this.props.method.toUpperCase(), 'GET'),
      'request-method--PUT': this.props.method && _.includes(this.props.method.toUpperCase(), 'PUT'),
      'request-method--POST': this.props.method && _.includes(this.props.method.toUpperCase(), 'POST'),
      'request-method--DELETE': this.props.method && _.includes(this.props.method.toUpperCase(), 'DELETE') });

  }

  handleDropdownToggle(value) {
    if (value === this.state.dropdownOpen) {
      return;
    }

    this.setState({ dropdownOpen: value });
  }

  handleDropdownActionSelect(action) {
    this.props.onSelectHistoryAction(action, {
      requests: [this.props.id],
      from: 'history_single' });

  }

  handleAddRequestToCollectionClick(e) {
    e.stopPropagation();
    this.handleDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_HistoryActionsConstants__["e" /* ACTION_TYPE_SAVE */], { from: 'history_single' });
  }

  handleRemoveRequest(e) {
    e.stopPropagation();
    this.handleDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */]);
  }

  componentDidMount() {
    this.refs.avatar && this.setState({ tooltipTarget: Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.avatar) });
  }

  render() {
    let updatedByMember = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('CurrentUserStore').teamMembers.get(this.props.lastUpdatedBy),
    updatedByMemberName = updatedByMember && (updatedByMember.name || updatedByMember.username);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getClasses(),
          onClick: this.handleSelect },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item-updatedBy',
            onMouseEnter: this.showTooltip,
            onMouseLeave: this.hideTooltip },


          !this.props.lastUpdatedBy || this.props.lastUpdatedBy === '0' ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Icons_ProfileIcon__["a" /* default */], null) :
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Avatar__["a" /* default */], {
            ref: 'avatar',
            size: 'small',
            userId: this.props.lastUpdatedBy })),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item__label-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_request_RequestIcon__["a" /* default */], { method: this.props.method })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item__meta' },
          this.props.url),


        !this.props.hideActions &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item__actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
              className: 'history-sidebar-list-item__button__add',
              type: 'icon',
              onClick: this.handleAddRequestToCollectionClick },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_AddIcon__["a" /* default */], { size: 'xs', className: 'history-sidebar-list-item__actions__add' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
              className: 'history-sidebar-list-item__button__delete',
              type: 'icon',
              onClick: this.handleRemoveRequest },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_DeleteIcon__["a" /* default */], { size: 'xs', className: 'history-sidebar-list-item__actions__delete' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__HistoryItemActionsDropdown__["a" /* default */], {
            count: 1,
            onSelect: this.handleDropdownActionSelect,
            onToggle: this.handleDropdownToggle })),




        this.state.tooltipTarget &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_Tooltips__["a" /* Tooltip */], {
            immediate: true,
            show: this.state.isTooltipVisible,
            target: this.state.tooltipTarget,
            placement: 'right' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_Tooltips__["b" /* TooltipBody */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
                updatedByMemberName),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
                __WEBPACK_IMPORTED_MODULE_13_moment___default()(this.props.createdAt).format('DD MMM YYYY, h:mm A')))))));







  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = promisifyIdleCallback;
/**
 * 
 */
function promisifyIdleCallback(time) {
  return new Promise((resolve, reject) => {
    requestIdleCallback(() => {resolve();});
  });
}

/***/ }),

/***/ 2930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterHeaderContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid_v4__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_InviteIcon__ = __webpack_require__(2931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_default_workspace__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_keymaps_KeyMaps__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_ShortcutsList__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Icons_AddIcon__ = __webpack_require__(2595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_Icons_RequestIcon__ = __webpack_require__(2611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_Icons_CollectionIcon__ = __webpack_require__(1068);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_base_Icons_EnvironmentIcon__ = __webpack_require__(2622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_base_Icons_PublishIcon__ = __webpack_require__(2596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_base_Icons_PublishedIcon__ = __webpack_require__(2932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_base_Icons_MockIcon__ = __webpack_require__(2597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_base_Icons_MonitorIcon__ = __webpack_require__(2598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_base_Icons_NewWindowIcon__ = __webpack_require__(2717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_base_Icons_LikeIcon__ = __webpack_require__(2933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_base_Icons_DownSolidIcon__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_EditorService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__utils_EditorUtils__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__utils_EditorUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__utils_EditorUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__constants_UIEventConstants__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__modules_services_SignInModalService__ = __webpack_require__(2718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__constants_ManageEnvironmentViews__ = __webpack_require__(2603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__constants_AppUrlConstants__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sync_SyncStatusContainer__ = __webpack_require__(2934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__proxy_ProxyStatusContainer__ = __webpack_require__(2937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__RequesterHeaderSettingsContainer__ = __webpack_require__(2939);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__RequesterHeaderUsersInfoContainer__ = __webpack_require__(2941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__RequesterHeaderTeamInfoContainer__ = __webpack_require__(2943);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__containers_notifications_NotificationFeedContainer__ = __webpack_require__(2946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__containers_workspaces_WorkspaceSwitcherContainer__ = __webpack_require__(2953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_base_XPaths_XPath__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_UIEventService__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_TabShortcutsService__ = __webpack_require__(2670);
var _class;






































let


RequesterHeaderContainer = Object(__WEBPACK_IMPORTED_MODULE_34_mobx_react__["a" /* observer */])(_class = class RequesterHeaderContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleNewRunnerWindow = this.handleNewRunnerWindow.bind(this);
    this.handleImportClick = this.handleImportClick.bind(this);
    this.handleNewRequesterWindow = this.handleNewRequesterWindow.bind(this);
    this.handleCreateEntity = this.handleCreateEntity.bind(this);
    this.handleOpenWindow = this.handleOpenWindow.bind(this);
    this.handleOpenWindowButtonToggle = this.handleOpenWindowButtonToggle.bind(this);
    this.handleInviteButton = this.handleInviteButton.bind(this);
  }

  componentWillMount() {
    pm.appWindow.trigger('registerInternalEvent', 'openRunner', this.handleNewRunnerWindow, this);
  }

  getKeymapHandlers() {
    return Object(__WEBPACK_IMPORTED_MODULE_37__services_TabShortcutsService__["a" /* getTabShortcuts */])();
  }

  handleOpenWindowButtonToggle(isOpen) {
    // Send event if the dropdown is opened.
    isOpen && __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('topbar', 'click_open_new');
  }


  handleNewRequesterWindow() {
    pm.mediator.trigger('newRequesterWindow');
  }

  handleNewRunnerWindow() {
    pm.mediator.trigger('newRunnerWindow');
  }

  handleImportClick() {
    pm.mediator.trigger('openImportModal');
  }

  async handleInviteButton(source) {
    let currentUserStore = Object(__WEBPACK_IMPORTED_MODULE_33__stores_get_store__["a" /* getStore */])('CurrentUserStore');

    if (!currentUserStore.isLoggedIn) {
      return Object(__WEBPACK_IMPORTED_MODULE_23__modules_services_SignInModalService__["a" /* showContextualSignInModal */])('invite',
      () => this.handleInviteButton(source),
      { from: 'requester_header' });

    }

    let ActiveWorkspaceStore = Object(__WEBPACK_IMPORTED_MODULE_33__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore'),
    workspaceId = ActiveWorkspaceStore.id,
    isTeamUser = Object(__WEBPACK_IMPORTED_MODULE_33__stores_get_store__["a" /* getStore */])('CurrentUserStore').teamSyncEnabled;

    if (!ActiveWorkspaceStore.isMember) {
      pm.mediator.trigger('joinWorkspace');
      return;
    }

    let userDefaultWorkspaceId = await Object(__WEBPACK_IMPORTED_MODULE_4__utils_default_workspace__["c" /* defaultUserWorkspaceId */])(),
    teamDefaultWorkspaceId = null;

    if (isTeamUser) {
      teamDefaultWorkspaceId = await Object(__WEBPACK_IMPORTED_MODULE_4__utils_default_workspace__["b" /* defaultTeamWorkspaceId */])();
    }

    if (isTeamUser && ![userDefaultWorkspaceId, teamDefaultWorkspaceId].includes(workspaceId)) {
      pm.mediator.trigger('openShareWorkspaceModal', workspaceId);
      return;
    }

    __WEBPACK_IMPORTED_MODULE_36__services_UIEventService__["a" /* default */].publish(__WEBPACK_IMPORTED_MODULE_22__constants_UIEventConstants__["c" /* OPEN_INVITE_MODAL */], { source });
  }

  handleCreateNewButton() {
    let workspace = Object(__WEBPACK_IMPORTED_MODULE_33__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace,
    isJoinedWorkspace = Object(__WEBPACK_IMPORTED_MODULE_33__stores_get_store__["a" /* getStore */])('WorkspaceStore').find(workspace);
    if (_.isEmpty(isJoinedWorkspace)) {
      pm.mediator.trigger('joinWorkspace');
      return;
    }
    __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('onboarding', 'view_create_new_modal');
    pm.mediator.trigger('openCreateNewXModal');
  }

  handleCreateEntity(entity) {
    let workspace = Object(__WEBPACK_IMPORTED_MODULE_33__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace,
    isJoinedWorkspace = Object(__WEBPACK_IMPORTED_MODULE_33__stores_get_store__["a" /* getStore */])('WorkspaceStore').find(workspace);
    if (_.isEmpty(isJoinedWorkspace)) {
      pm.mediator.trigger('joinWorkspace');
      return;
    }
    switch (entity) {
      case 'request':
        let request = { id: __WEBPACK_IMPORTED_MODULE_1_uuid_v4___default()() };

        __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('onboarding', 'initiate_request_create', 'create_new_dropdown');
        pm.mediator.trigger('showAddToCollectionModal', request, { from: 'new-x-modal' }, () => {
          __WEBPACK_IMPORTED_MODULE_20__services_EditorService__["a" /* default */].open(Object(__WEBPACK_IMPORTED_MODULE_21__utils_EditorUtils__["requestResourceId"])(request));
        });
        break;
      case 'collection':
        __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('onboarding', 'initiate_collection_create', 'create_new_dropdown');
        pm.mediator.trigger('showNewCollectionModal', id => {
          pm.mediator.trigger('focusCollectionInSideBar', id);
        });
        break;
      case 'environment':
        __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('onboarding', 'initiate_environment_create', 'create_new_dropdown');
        pm.mediator.trigger('showManageEnvironmentModal', __WEBPACK_IMPORTED_MODULE_24__constants_ManageEnvironmentViews__["a" /* MANAGE_ENVIRONMENT_VIEW_ADD_ENV */]);
        break;
      case 'monitor':
        __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('monitor', 'initiate_create', 'create_new_dropdown');
        pm.mediator.trigger('openCreateNewMonitorModal', { workspaceId: Object(__WEBPACK_IMPORTED_MODULE_33__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id });
        break;
      case 'documentation':
        __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('documenter', 'initiate_add', 'create_new_dropdown');
        pm.mediator.trigger('openCreateNewDocumentationModal', { workspaceId: Object(__WEBPACK_IMPORTED_MODULE_33__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id });
        break;
      case 'mock':
        __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('mock', 'initiate_create', 'create_new_dropdown');
        pm.mediator.trigger('openCreateNewMockModal', { workspaceId: Object(__WEBPACK_IMPORTED_MODULE_33__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id });
        break;}

  }

  handleOpenWindow(window) {
    switch (window) {
      case 'tab':
        __WEBPACK_IMPORTED_MODULE_20__services_EditorService__["a" /* default */].openDefault();
        break;
      case 'requester':
        this.handleNewRequesterWindow();
        break;
      case 'runner':
        this.handleNewRunnerWindow();
        break;}

  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_35__components_base_XPaths_XPath__["a" /* default */], { identifier: 'header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_keymaps_KeyMaps__["a" /* default */], { keyMap: pm.shortcuts.getShortcuts(), handlers: this.getKeymapHandlers() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header__section-left' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["a" /* Dropdown */], {
                  className: 'create-new-button-dropdown',
                  onSelect: this.handleCreateEntity },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["b" /* DropdownButton */], { className: 'create-new-button', dropdownStyle: 'split' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_35__components_base_XPaths_XPath__["a" /* default */], { identifier: 'createNew' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                        type: 'primary',
                        tooltip: 'Create new',
                        onClick: this.handleCreateNewButton },

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'plus-icon-wrapper' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Icons_AddIcon__["a" /* default */], {
                          className: 'plus-icon',
                          size: 'xs' })), 'New'))),






                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["c" /* DropdownMenu */], { 'align-left': true },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["e" /* MenuItemHeader */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Building Blocks')),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'request' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Icons_RequestIcon__["a" /* default */], { className: 'icon icon--request' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'dropdown-menu-item__text' }, 'Request')),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'collection' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_Icons_CollectionIcon__["a" /* default */], { className: 'icon icon--collection' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'dropdown-menu-item__text' }, 'Collection')),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'environment' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_Icons_EnvironmentIcon__["a" /* default */], { className: 'icon icon--environment' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'dropdown-menu-item__text' }, 'Environment')),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["e" /* MenuItemHeader */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Advanced')),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'documentation' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_base_Icons_PublishIcon__["a" /* default */], { className: 'icon icon--documentation' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'dropdown-menu-item__text' }, 'Documentation')),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'mock' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_base_Icons_MockIcon__["a" /* default */], { className: 'icon icon--mock' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'dropdown-menu-item__text' }, 'Mock Server')),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'monitor' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_base_Icons_MonitorIcon__["a" /* default */], { className: 'icon icon--monitor' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'dropdown-menu-item__text' }, 'Monitor')))),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_35__components_base_XPaths_XPath__["a" /* default */], { identifier: 'import' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                    type: 'tertiary',
                    size: 'small',
                    onClick: this.handleImportClick,
                    className: 'import-collection-button',
                    tooltip: 'Import Collections, cURL, RAML, WADL and Swagger files' }, 'Import')),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_35__components_base_XPaths_XPath__["a" /* default */], { identifier: 'runner' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                    type: 'tertiary',
                    size: 'small',
                    onClick: this.handleNewRunnerWindow,
                    className: 'launch-runner-button',
                    tooltip: 'Run collections' }, 'Runner')),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_35__components_base_XPaths_XPath__["a" /* default */], { identifier: 'openNew' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["a" /* Dropdown */], {
                    className: 'window-new-button-dropdown',
                    onSelect: this.handleOpenWindow,
                    onToggle: this.handleOpenWindowButtonToggle },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["b" /* DropdownButton */], { type: 'secondary', size: 'small', dropdownStyle: 'nocaret' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                        className: 'window-new-button',
                        tooltip: 'Open New' },

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_base_Icons_NewWindowIcon__["a" /* default */], { className: 'window-new-button-icon' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__components_base_Icons_DownSolidIcon__["a" /* default */], { className: 'down-solid-icon' }))),


                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["c" /* DropdownMenu */], { 'align-left': true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["e" /* MenuItemHeader */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Open new')),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'tab' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_35__components_base_XPaths_XPath__["a" /* default */], { identifier: 'tab' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'window-new-button__label' }, 'Tab'),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'window-new-button__shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_7__controllers_ShortcutsList__["c" /* getShortcutByName */])('openNewTab')))),


                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'requester' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_35__components_base_XPaths_XPath__["a" /* default */], { identifier: 'window' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'window-new-button__label' }, 'Postman Window'),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'window-new-button__shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_7__controllers_ShortcutsList__["c" /* getShortcutByName */])('newRequesterWindow')))),


                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'runner' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_35__components_base_XPaths_XPath__["a" /* default */], { identifier: 'runner' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'window-new-button__label' }, 'Runner Window'),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'window-new-button__shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_7__controllers_ShortcutsList__["c" /* getShortcutByName */])('newRunnerWindow')))))))),






            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header__section-center' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_32__containers_workspaces_WorkspaceSwitcherContainer__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_35__components_base_XPaths_XPath__["a" /* default */], { identifier: 'invite' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                    type: 'tertiary',
                    className: 'btn btn-small workspace-invite-btn',
                    onClick: this.handleInviteButton.bind(this, 'header') },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Icons_InviteIcon__["a" /* default */], null), '\xA0\xA0Invite'))),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header__section-right' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__RequesterHeaderTeamInfoContainer__["a" /* default */], { onInviteButtonClick: this.handleInviteButton }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_29__RequesterHeaderUsersInfoContainer__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                  className: 'heart-button',
                  tooltip: 'Tweet about us',
                  type: 'icon',
                  onClick: () => {pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_25__constants_AppUrlConstants__["w" /* LIKE_URL */]);} },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__components_base_Icons_LikeIcon__["a" /* default */], { className: 'heart-button-icon' })),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31__containers_notifications_NotificationFeedContainer__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_28__RequesterHeaderSettingsContainer__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_27__proxy_ProxyStatusContainer__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26__sync_SyncStatusContainer__["a" /* default */], null))))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = InviteIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16px', height: '16px', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'invite', d: 'M9,14 L4,14 L4,12.5 C4.00072273,11.3601092 4.47560921,10.0608755 5.32011301,9.25558406 C6.1646168,8.45029267 7.30950401,7.99862043 8.50272727,8.00000317 C9.42652316,8.000003 10.2855029,8.31152 11,8.81864137 L11,11 L9,11 L9,14 Z M8.5,6.5 C7.25735931,6.5 6.25,5.49264069 6.25,4.25 C6.25,3.00735931 7.25735931,2 8.5,2 C9.74264069,2 10.75,3.00735931 10.75,4.25 C10.75,5.49264069 9.74264069,6.5 8.5,6.5 Z M14,12 L16,12 L16,14 L14,14 L14,16 L12,16 L12,14 L10,14 L10,12 L12,12 L12,10 L14,10 L14,12 Z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#FFFFFF', xlinkHref: '#invite' }));



function InviteIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'published', d: 'M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM2.249 10.649a1.56 1.56 0 0 0 .396-.705l.056-.28a.927.927 0 0 0-.204-.728l-.283-.303c-.16-.17-.128-.408.07-.527l.506-.308a.725.725 0 0 1 .71.013l.505.334c.22.128.49.14.72.03l.618-.335c.203-.11.411-.389.462-.619l.1-.447c.052-.23.016-.592-.08-.807l-.354-.79a.435.435 0 0 1 .205-.568l.837-.397a.925.925 0 0 0 .453-.6l.124-.691a1.188 1.188 0 0 0-.167-.77l-.476-.687a.688.688 0 0 1-.108-.328C6.767 1.046 7.204 1 7.642 1 10.807 1 13.446 3.347 14 6.433a1.17 1.17 0 0 0-.358-.003l-1.458.264a.94.94 0 0 0-.598.458l-.297.612a1.44 1.44 0 0 0-.096.8l.355 1.643a.49.49 0 0 1-.305.554l-.818.28a1.86 1.86 0 0 0-.674.456l-.519.6a.939.939 0 0 1-.693.287l-.912-.072c-.229-.019-.362-.218-.296-.444l.163-.556a.602.602 0 0 0-.233-.637l-.366-.235a.456.456 0 0 0-.604.115l-1.11 1.52a.438.438 0 0 0 .082.6l.406.312a.68.68 0 0 1 .218.668L5.789 14A6.542 6.542 0 0 1 2 10.877l.249-.228z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#F47023', fillRule: 'evenodd', xlinkHref: '#published' }));



function PublishedIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LikeIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '15', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'like', d: 'M13.408 1.455c-1.002-.562-2.003-.562-3.005-.225C9.402 1.568 8.601 2.407 8 3.308 7.4 2.295 6.498 1.455 5.597 1.23c-1.002-.337-2.003-.225-3.005.225C1.491 2.131.69 3.031.29 4.156c-.4 1.126-.4 2.476.1 3.714C1.29 10.233 8 16 8 16s6.71-5.654 7.61-8.13c.502-1.238.502-2.588.101-3.714-.4-1.125-1.202-2.025-2.303-2.7z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#A9A9A9', fillRule: 'evenodd', xlinkHref: '#like' }));



function LikeIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__["a" /* default */], { identifier: 'heart' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
      props, {
        icon: icon }))));



}

/***/ }),

/***/ 2934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncStatusContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sync_SyncStatus__ = __webpack_require__(2935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_pipelines_user_action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_services_AuthHandlerService__ = __webpack_require__(705);



let

SyncStatusContainer = class SyncStatusContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      status: 'off',
      showTooltip: false,
      timeTillReconnect: null };


    this.handleTooltipToggle = this.handleTooltipToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleForceConnect = this.handleForceConnect.bind(this);
    this.handleTooltipClose = this.handleTooltipClose.bind(this);
    this.handleEnableSync = this.handleEnableSync.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
  }

  componentWillMount() {
    this.attachModelListeners();
    this.handleModelChange();
  }

  componentWillUnmount() {
    this.detachModelListeners();
  }

  attachModelListeners() {
    pm.syncManager.on('change:currentSyncStatus', this.handleModelChange);
    pm.syncManager.on('change:timeTillReconnect', this.handleModelChange);
  }

  detachModelListeners() {
    pm.syncManager.off('change:currentSyncStatus', this.handleModelChange);
    pm.syncManager.off('change:timeTillReconnect', this.handleModelChange);
  }

  handleModelChange() {
    let currentSyncStatus = pm.syncManager.get('currentSyncStatus');
    let timeTillReconnect = pm.syncManager.get('timeTillReconnect');

    let newState = {
      status: this.getNewState(currentSyncStatus),
      timeTillReconnect: timeTillReconnect };


    this.setState(newState);
  }

  _setState(state) {
    this.setState(state);
  }

  getNewState(status) {
    switch (status) {
      case 'syncFinished':
        return 'insync';
      case 'syncStarting':
        return 'syncing';
      case 'makeConnecting':
        return 'connecting';
      case 'makeNotConnected':
        return 'offline';
      case 'disabledSync':
        return 'off';
      default:
        console.error('Unrecognised sync status', status);
        return this.state.status;}

  }

  handleTooltipToggle() {
    if (_.includes(['off', 'offline', 'connecting'], this.state.status) && !this.state.showTooltip) {
      this.setState({ showTooltip: true });
    } else
    {
      this.handleTooltipClose();
    }
  }

  handleTooltipClose() {
    this.setState({ showTooltip: false });
  }

  handleClick() {
    pm.syncManager.syncIconClick();
  }

  handleForceConnect() {
    pm.syncManager.forceConnect();
  }

  handleSignIn() {
    __WEBPACK_IMPORTED_MODULE_3__modules_services_AuthHandlerService__["a" /* default */].login();
    this.handleTooltipClose();
  }

  handleEnableSync() {
    Object(__WEBPACK_IMPORTED_MODULE_2__modules_pipelines_user_action__["a" /* default */])({ name: 'enableSync', namespace: 'user' }).
    then(() => {
      // Should we alert user?
      // @vineeth
    }).
    catch(e => {
      console.log('Error in enabling sync', e);
    });
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_sync_SyncStatus__["a" /* default */], {
        showTooltip: this.state.showTooltip,
        status: this.state.status,
        timeTillReconnect: this.state.timeTillReconnect,
        onEnableSync: this.handleEnableSync,
        onForceConnect: this.handleForceConnect,
        onIconClick: this.handleClick,
        onSignin: this.handleSignIn,
        onTooltipClose: this.handleTooltipClose,
        onTooltipToogle: this.handleTooltipToggle }));


  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Tooltips__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PluralizeHelper__ = __webpack_require__(1067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_SyncedIcon__ = __webpack_require__(2936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Icons_SyncOfflineIcon__ = __webpack_require__(2719);
var _class;











const SYNC_STATUS_META = {
  off: {
    label: 'SYNC OFF',
    classes: 'sync-off' },

  insync: {
    label: 'IN SYNC',
    classes: 'in-sync' },

  syncing: {
    label: 'SYNCING',
    classes: 'syncing' },

  pending: {
    label: 'PENDING',
    classes: 'syncing' },

  connecting: {
    label: 'CONNECTING',
    classes: 'connecting' },

  offline: {
    label: 'OFFLINE',
    classes: 'offline' } };let




SyncStatus = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class SyncStatus extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getButtonClasses() {
    let meta = SYNC_STATUS_META[this.props.status];
    return __WEBPACK_IMPORTED_MODULE_5_classnames___default()({ 'sync-button': true }, meta.classes);
  }

  handleClick() {
    if (this.props.status !== 'syncing' && this.props.status !== 'connecting') {
      this.props.onIconClick && this.props.onIconClick();
    }
  }

  handleClose(e) {
    if (e.target.className != 'sync-button-icon' &&
    _.invoke(e.target.className, 'indexOf', 'sync-button') === -1) {
      this.props.onTooltipClose && this.props.onTooltipClose();
    }
  }

  handleOpenExternalLink() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["R" /* SYNC_DOCS */]);
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    meta = SYNC_STATUS_META[this.props.status],
    isLoggedIn = currentUser && currentUser.isLoggedIn,
    headerContent = isLoggedIn ? 'Syncing is disabled' : 'Sign in to sync';

    if (this.props.status === 'off') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sync-status' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], { type: 'icon', iconType: 'circle',
              className: this.getButtonClasses(),
              onClick: this.props.onTooltipToogle,
              ref: 'syncstatus_icon',
              tooltip: 'Sync your API requests across devices' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_SyncedIcon__["a" /* default */], { className: 'pm-icon-sync' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tooltips__["a" /* Tooltip */], {
                show: this.props.showTooltip,
                target: this.refs.syncstatus_icon,
                placement: 'bottom',
                className: 'sync-status-tooltip',
                onClose: this.handleClose,
                immediate: true },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tooltips__["b" /* TooltipBody */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sync-status-tooltip-wrapper' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sync-status-tooltip-header' },
                    headerContent),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sync-status-tooltip-description' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Syncing makes any changes to your Postman data available across devices linked to your account. Enable sync to never worry about losing your data.'),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
                        className: 'learn-more',
                        type: 'text',
                        onClick: this.handleOpenExternalLink }, 'Learn more about syncing')),





                  isLoggedIn &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
                      type: 'primary',
                      size: 'small',
                      onClick: this.props.onEnableSync,
                      className: 'sync-status-tooltip-button' }, 'Enable syncing'),





                  !isLoggedIn &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
                      type: 'primary',
                      size: 'small',
                      onClick: this.props.onSignin,
                      className: 'sync-status-tooltip-button' }, 'Sign in to sync your Postman data')))))));










    }

    if (this.props.status === 'offline') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sync-status' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], { type: 'icon', iconType: 'circle',
              className: this.getButtonClasses(),
              onClick: this.props.onTooltipToogle,
              ref: 'syncstatus_icon',
              tooltip: 'Sync your API requests across devices' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Icons_SyncOfflineIcon__["a" /* default */], { className: 'pm-icon-sync' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tooltips__["a" /* Tooltip */], {
                show: this.props.showTooltip,
                target: this.refs.syncstatus_icon,
                placement: 'bottom',
                className: 'sync-status-tooltip',
                onClose: this.handleClose,
                immediate: true },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tooltips__["b" /* TooltipBody */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sync-status-tooltip-wrapper' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sync-status-tooltip-header' }, 'Sync is Offline'),


                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
                      type: 'primary',
                      size: 'small',
                      onClick: this.props.onForceConnect,
                      className: 'sync-status-tooltip-button' }, 'Connect Now')))))));









    }

    if (this.props.status === 'connecting') {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sync-status' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], { type: 'icon', iconType: 'circle',
              className: this.getButtonClasses(),
              onClick: this.props.onTooltipToogle,
              ref: 'syncstatus_icon',
              tooltip: 'Sync your API requests across devices' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_SyncedIcon__["a" /* default */], { className: 'pm-icon-sync' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tooltips__["a" /* Tooltip */], {
                show: this.props.showTooltip,
                target: this.refs.syncstatus_icon,
                placement: 'bottom',
                className: 'sync-status-tooltip',
                onClose: this.handleClose,
                immediate: true },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Tooltips__["b" /* TooltipBody */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sync-status-tooltip-wrapper' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className:
                      this.props.timeTillReconnect !== null ?
                      'sync-status-tooltip-header' :
                      'sync-status-tooltip-header sync-status-tooltip-header--no-description' }, 'Connecting...'),



                  this.props.timeTillReconnect &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sync-status-tooltip-description' }, 'Reconnecting in [',
                    this.props.timeTillReconnect, '] ', __WEBPACK_IMPORTED_MODULE_4__utils_PluralizeHelper__["a" /* default */].pluralize({
                      count: this.props.timeTillReconnect,
                      singular: 'second',
                      plural: 'seconds' }), '...'),




                  this.props.timeTillReconnect &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
                      type: 'primary',
                      size: 'small',
                      onClick: this.props.onForceConnect,
                      className: 'sync-status-tooltip-button' }, 'Retry Now')))))));








    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'sync-status' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], { type: 'icon', iconType: 'circle',
            className: this.getButtonClasses(),
            onClick: this.handleClick,
            tooltip: 'Sync your API requests across devices' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_SyncedIcon__["a" /* default */], { className: 'pm-icon-sync' }))));



  }}) || _class;


SyncStatus.defaultProps = { status: 'off' };

SyncStatus.propTypes = { status: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['off', 'insync', 'syncing', 'connecting', 'offline', 'pending']) };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SyncedIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'pm-icon-synced', fillRule: 'evenodd', clipRule: 'evenodd', d: 'M1.88891 6.27307C2.58474 3.24725 5.06263 1 8.00009 1C9.7626 1 11.3617 1.808 12.5061 3.1093L11.545 4.5833C10.6879 3.48473 9.41991 2.7886 8.00044 2.7886C5.9462 2.7886 4.20588 4.24014 3.56697 6.27307H5.48913L2.74456 10.5039L0 6.27307H1.88891ZM10.511 9.72063L13.2556 5.48978L16 9.72083H14.1056C13.4131 12.749 10.9395 15 7.99991 15C6.23669 15 4.6401 14.192 3.49426 12.8907L4.44983 11.4229C5.30957 12.5199 6.58183 13.2114 7.99991 13.2114C10.0561 13.2114 11.7916 11.7565 12.4277 9.72063H10.511Z', fill: '#FFFFFF' }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#fff', fillRule: 'nonzero', xlinkHref: '#pm-icon-synced' }));



function SyncedIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyStatusContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Tooltips__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_ToggleSwitch__ = __webpack_require__(2612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_ProxyIcon__ = __webpack_require__(2938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_XPaths_XPath__ = __webpack_require__(27);






let

ProxyStatusContainer = class ProxyStatusContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      showTooltip: false,
      proxyStatus: false };

    this.openProxySettingsModal = this.openProxySettingsModal.bind(this);
  }

  componentWillMount() {
    this.attachModelListeners();
    this.setState({ proxyStatus: pm.tcpReader.status });
  }

  componentWillUnmount() {
    this.detachModelListeners();
  }

  attachModelListeners() {
    pm.mediator.on('proxyStatusChanged', this.handleModelChange, this);
  }

  detachModelListeners() {
    pm.mediator.on('proxyStatusChanged', this.handleModelChange, this);
  }

  openProxySettingsModal(value) {
    pm.mediator.trigger('openProxySettingsModal');
  }

  handleModelChange() {
    this.setState({ proxyStatus: pm.tcpReader.status });
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_5_classnames___default()('interceptor-button', { 'is-active': this.state.proxyStatus === 'connected' });
  }

  render() {

    let status = this.state.status;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_XPaths_XPath__["a" /* default */], { identifier: 'proxy' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Buttons__["a" /* Button */], {
            type: 'icon',
            className: this.getClasses(),
            onClick: this.openProxySettingsModal,
            tooltip: 'Capture API requests with Postman' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Icons_ProxyIcon__["a" /* default */], { className: 'proxy-button-icon' }))));



  }};

/***/ }),

/***/ 2938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ProxyIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '17', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'proxy', d: 'M10.18 6.456L8.809 8.462l5.464 4.86c-2.988 3.373-8.173 3.681-11.528.674C-.629 11.008-.938 5.822 2.07 2.468l5.505 4.896 1.795-1.7a1.446 1.446 0 1 1 .81.793zm.314-4.49a.36.36 0 0 0 .192-.095c1.427-.309 2.853.578 3.162 2.004.038.25.058.54.058.79 0 .059 0 .078-.077.078l-.926-.116c0-.212-.019-.405-.077-.636-.289-.906-1.214-1.388-2.101-1.099-.02-.135-.077-.25-.135-.385-.058-.135-.116-.309-.173-.444v-.019c0-.02.019-.077.077-.077zM14.06.985c.771.597 1.31 1.426 1.6 2.332.135.501.154 1.041.135 1.542 0 .02-.02.078-.02.135l-.982-.115v-.424a3.457 3.457 0 0 0-1.292-2.68.296.296 0 0 1-.116-.077c-.173-.096-.308-.212-.482-.29a3.285 3.285 0 0 0-2.621-.25l-.135.02-.328-.945c.25-.058.482-.154.733-.174a4.533 4.533 0 0 1 3.354.79c.019.059.058.097.077.116.02 0 .058 0 .077.02z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#FFF', fillRule: 'nonzero', xlinkHref: '#proxy' }));



function ProxyIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterHeaderSettingsContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_SpannerIcon__ = __webpack_require__(2940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_XPaths_XPath__ = __webpack_require__(27);










const noIndicatorStatus = ['idle', 'checking', 'updateNotAvailable', 'downloading'],
indicatorStatus = ['updateAvailable', 'error', 'downloaded'],
allowedAutoUpdateStatus = noIndicatorStatus.concat(indicatorStatus),
updateStatusAnalyticsMap = {
  updateAvailable: 'update_available',
  downloaded: 'update_downloaded',
  error: 'error' };let


RequesterHeaderSettingsContainer = class RequesterHeaderSettingsContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { showSettingsIndicator: false };
    pm.updateNotifier.on('change:status', this.handleUpdateAvailability.bind(this));
  }

  handleUpdateAvailability() {
    const status = pm.updateNotifier.get('status'),
    showSettingsIndicator = _.includes(indicatorStatus, status);

    if (!_.includes(allowedAutoUpdateStatus, status)) {
      return;
    }

    if (showSettingsIndicator) {
      __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'view_settings_badge', updateStatusAnalyticsMap[status]);
    }

    return this.setState({
      showSettingsIndicator,
      updateStatus: status });

  }

  handleDropdownSelect(ref) {
    switch (ref) {
      case 'settings':{
          pm.mediator.trigger('openSettingsModal');
          break;
        }
      case 'releaseNotes':{
          pm.mediator.trigger('showReleaseNotesModal');
          break;
        }
      case 'documentation':{
          pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["j" /* DOCS_URL */]);
          break;
        }
      case 'security':{
          pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["i" /* DOCS_SECURITY_URL */]);
          break;
        }
      case 'support':{
          pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["Q" /* SUPPORT_URL */]);
          break;
        }
      case 'twitter':{
          pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["W" /* TWITTER_URL */]);
          break;
        }
      case 'update-available':{
          pm.mediator.trigger('showUpdateModal', { origin: 'settings_indicator' });
          __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'view_update_available_modal', 'settings_indicator');
          break;
        }
      case 'update-downloaded':{
          pm.updateNotifier.applyUpdate();
          __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'app_restart', 'settings_dropdown');
          break;
        }
      case 'update-failed':{
          pm.mediator.trigger('showUpdateModal');
          break;
        }}

  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'settings-button-icon': true,
      'indicator': this.state.showSettingsIndicator,
      'error': this.state.updateStatus === 'error' });

  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_XPaths_XPath__["a" /* default */], { identifier: 'settings' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["a" /* Dropdown */], {
            className: 'settings-dropdown',
            onSelect: this.handleDropdownSelect },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["b" /* DropdownButton */], { dropdownStyle: 'nocaret' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'settings-button',
                tooltip: 'Settings',
                type: 'icon' },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Icons_SpannerIcon__["a" /* default */], { className: this.getClasses() }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'settings' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_XPaths_XPath__["a" /* default */], { identifier: 'setting' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Settings'))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider divider--space' }),

            this.state.updateStatus === 'updateAvailable' &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'update-available' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Update available, view changes')),


            this.state.updateStatus === 'downloaded' &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'update-downloaded' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Update downloaded, restart now')),


            this.state.updateStatus === 'error' &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'update-failed' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Update failed, view details')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'releaseNotes' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_XPaths_XPath__["a" /* default */], { identifier: 'releaseNotes' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Release Notes'))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'documentation' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_XPaths_XPath__["a" /* default */], { identifier: 'documentation' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Documentation'))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'security' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_XPaths_XPath__["a" /* default */], { identifier: 'security' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Security'))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'support' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_XPaths_XPath__["a" /* default */], { identifier: 'support' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Support'))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'twitter' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_XPaths_XPath__["a" /* default */], { identifier: 'twitter' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, '@postmanclient')))))));






  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SortIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'spanner', d: 'M8.9 13.304c-1.192-.385-2.018.096-3.486 1.444L4.129 16A10.665 10.665 0 0 1 0 11.956l1.468-1.444C2.844 9.356 3.12 8.779 2.844 7.238c-.367-1.733-.367-3.755 1.744-5.68l1.01-.771c3.21-1.926 6.973.289 6.973.289S9.634 3 9.267 3.29c-.458.29-1.743 1.733-.183 3.948 1.468 2.31 3.12 1.54 3.578 1.155.367-.192 3.304-2.118 3.304-2.118s.55 4.333-2.753 6.451c-1.56.963-3.212.963-4.313.578z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#FFF', fillRule: 'nonzero', xlinkHref: '#spanner' }));




function SortIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterHeaderUsersInfoContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Avatar__ = __webpack_require__(2604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_UserCard__ = __webpack_require__(2942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_pipelines_user_action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_services_AuthHandlerService__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__ = __webpack_require__(27);
var _class;











let

RequesterHeaderUsersInfoContainer = Object(__WEBPACK_IMPORTED_MODULE_8_mobx_react__["a" /* observer */])(_class = class RequesterHeaderUsersInfoContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
  }

  handleLoginClick() {
    __WEBPACK_IMPORTED_MODULE_11__modules_services_AuthHandlerService__["a" /* default */].login();
  }

  handleLogoutClick() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('CurrentUserStore');

    if (!currentUser.syncEnabled) {
      let logoutEvent = Object(__WEBPACK_IMPORTED_MODULE_9__modules_model_event__["a" /* createEvent */])('logout', 'user', { id: currentUser.id });
      Object(__WEBPACK_IMPORTED_MODULE_10__modules_pipelines_user_action__["a" /* default */])(logoutEvent).
      then(response => {
        console.log('response', response);
      }).
      catch(e => {
        console.warn('Error in logout', e);
        this.setState({
          signInLoading: false,
          signInError: e // @todo copy from vineeth
        });
      });
    } else
    {
      pm.mediator.trigger('showUserSignoutModal');
    }
  }

  handleDropdownSelect(ref) {
    if (_.startsWith(ref, 'switch_')) {
      let id = ref.split('_')[1];

      Object(__WEBPACK_IMPORTED_MODULE_10__modules_pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_9__modules_model_event__["a" /* createEvent */])('switch', 'users', { id }));
    }

    switch (ref) {
      case 'signin':{
          this.handleLoginClick();
          break;
        }
      case 'manage-profile':{
          Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["t" /* openUserProfile */])();
          break;
        }
      case 'manage-account':{
          Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["e" /* openAccountSettings */])();
          break;
        }
      case 'manage-trash':{
          Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["s" /* openTrash */])();
          break;
        }
      case 'manage-notifications':{
          Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["n" /* openNotificationPreferences */])();
          break;
        }
      case 'manage-sessions':{
          Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["u" /* openUserSessions */])();
          break;
        }
      case 'logout':{
          this.handleLogoutClick();
          break;
        }
      case 'addNewAccount':{
          Object(__WEBPACK_IMPORTED_MODULE_10__modules_pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_9__modules_model_event__["a" /* createEvent */])('add', 'users'));
          break;
        }}

  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    usersStore = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('UsersStore'),
    users = usersStore.values;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header__user-info' },

        !(currentUser && currentUser.isLoggedIn) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__["a" /* default */], { identifier: 'signIn' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              className: 'show-sign-in-screen',
              size: 'small',
              type: 'tertiary',
              onClick: this.handleLoginClick }, 'Sign In')),






        currentUser && currentUser.isLoggedIn &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__["a" /* default */], { identifier: 'userInfo' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["a" /* Dropdown */], {
              'align-right': true,
              className: 'user-info-dropdown',
              onSelect: this.handleDropdownSelect },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["b" /* DropdownButton */], { dropdownStyle: 'nocaret' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                  className: 'requester-header__user-info__button',
                  type: 'icon' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header__user-info__button-wrapper' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Avatar__["a" /* default */], {
                    size: 'medium',
                    userId: currentUser.id,
                    customPic: currentUser.profile_pic_url })))),




            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], {
                  refKey: 'username',
                  className: 'is-disabled' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_UserCard__["a" /* default */], {
                  showSignout: true,
                  email: currentUser.email || currentUser.username_email,
                  id: currentUser.id,
                  profile_pic_url: currentUser.profile_pic_url,
                  name: currentUser.name,
                  onLogout: this.handleLogoutClick })),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], {
                  refKey: 'manage-profile' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__["a" /* default */], { identifier: 'profile' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header__user-info__menu-item' }, 'Profile'))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], {
                  refKey: 'manage-trash' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__["a" /* default */], { identifier: 'trash' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header__user-info__menu-item' }, 'Trash'))),




              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], {
                  refKey: 'manage-account' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__["a" /* default */], { identifier: 'accountSettings' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header__user-info__menu-item' }, 'Account Settings'))),





              currentUser.teamSyncEnabled &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], {
                  refKey: 'manage-notifications' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__["a" /* default */], { identifier: 'notificationPreferences' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header__user-info__menu-item' }, 'Notification Preferences'))),





              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], {
                  refKey: 'manage-sessions' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__["a" /* default */], { identifier: 'activeSessions' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header__user-info__menu-item' }, 'Active Sessions'))),





              _.map(users && users, user => {
                if (user && user.id !== currentUser.id) {
                  return (
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], {
                        key: user.id,
                        refKey: 'switch_' + user.id },

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_UserCard__["a" /* default */], {
                        className: 'requester-header__user-info__card',
                        email: user.email || user.username_email,
                        id: user.id,
                        name: user.name,
                        profile_pic_url: user.profile_pic_url })));



                }
                return null;
              }),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__["d" /* MenuItem */], {
                  refKey: 'addNewAccount' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_UserCard__["a" /* default */], {
                  isAddAccount: true,
                  className: 'requester-header__user-info__card' })))))));








  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Avatar__ = __webpack_require__(2604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__XPaths_XPath__ = __webpack_require__(27);



let
UserCard = class UserCard extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'user-card': true }, this.props.className);
  }

  render() {
    let decodedName = decodeURIComponent(this.props.name);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'user-card__left' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Avatar__["a" /* default */], {
            className: 'user-card__left-avatar',
            type: this.props.isAddAccount ? 'adduser' : 'user',
            userId: this.props.id,
            customPic: this.props.profile_pic_url })),



        this.props.isAddAccount &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__XPaths_XPath__["a" /* default */], { identifier: 'addNewAccount' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'user-card__right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'user-card__right-add-account' }, 'Add a new account'))),






        !this.props.isAddAccount &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'user-card__right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'user-card__right-name' },
            decodedName),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'user-card__right-email' },
            this.props.email),


          this.props.showSignout &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__XPaths_XPath__["a" /* default */], { identifier: 'signOut' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'user-card__right-signout',
                onClick: this.props.onLogout }, 'Sign Out')))));









  }};

/***/ }),

/***/ 2943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterHeaderTeamInfoContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_messaging_Alert__ = __webpack_require__(2592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_UIEventConstants__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_services_DashboardService__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_Icons_TeamIcon__ = __webpack_require__(1075);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_team_usage_TeamUsage__ = __webpack_require__(2944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_UIEventService__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_base_XPaths_XPath__ = __webpack_require__(27);
var _class;

















const ENTERPRISE_UPDATE_TEMP_LINK = '#dashboardEnterprise';let


RequesterHeaderTeamInfoContainer = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class RequesterHeaderTeamInfoContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { imageNotFound: false };
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
    this.handleUpgrade = this.handleUpgrade.bind(this);
    this.handleUpgradeDropdownToggle = this.handleUpgradeDropdownToggle.bind(this);
    this.handleDropdownOpen = this.handleDropdownOpen.bind(this);
  }


  componentWillMount() {
    this.unsubscribeHandler = __WEBPACK_IMPORTED_MODULE_14__services_UIEventService__["a" /* default */].subscribe(__WEBPACK_IMPORTED_MODULE_4__constants_UIEventConstants__["f" /* SHOW_USAGE */], this.handleDropdownOpen);
  }

  componentWillUnmount() {
    this.unsubscribeHandler && this.unsubscribeHandler();
  }

  handleDropdownOpen() {
    let toggleDropdown = _.get(this.refs, 'dropdownRef.__wrappedInstance.toggleDropdown');
    toggleDropdown && toggleDropdown(null, true);
  }

  handleInviteButton() {
    __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEvent('app', 'upgrade_dropdown_invite', 'header');
    this.props.onInviteButtonClick && this.props.onInviteButtonClick('upgrade_dropdown');
  }


  handleUpgrade() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    quantity;

    if (currentUser.team) {
      quantity = _.get(currentUser, 'organizations[0].team_users').length;
    }

    quantity = quantity || 1;

    Object(__WEBPACK_IMPORTED_MODULE_5__models_services_DashboardService__["v" /* upgradeToPro */])({ quantity });

    __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEvent('onboarding', 'upgrade_pro_click', 'header');
  }

  handleUpgradeDropdownToggle() {
    Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["a" /* getStore */])('ResourceLimitOperationsStore').fetch();
  }

  handleDropdownSelect(item) {
    switch (item) {
      case 'sign-in':
        pm.mediator.trigger('openLoginModal');
        break;
      case 'enable-sync':
        Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])({ name: 'enableSync', namespace: 'user' });
        break;
      case 'view-team':
        Object(__WEBPACK_IMPORTED_MODULE_5__models_services_DashboardService__["p" /* openTeam */])();
        break;
      case 'billing':
        Object(__WEBPACK_IMPORTED_MODULE_5__models_services_DashboardService__["q" /* openTeamBilling */])();
        break;
      case 'resource-usage':
        Object(__WEBPACK_IMPORTED_MODULE_5__models_services_DashboardService__["o" /* openPostmanUsages */])();
        break;
      case 'audit-logs':
        Object(__WEBPACK_IMPORTED_MODULE_5__models_services_DashboardService__["g" /* openAuditLogs */])();
        break;
      case 'team-settings':
        Object(__WEBPACK_IMPORTED_MODULE_5__models_services_DashboardService__["r" /* openTeamSettings */])();
        break;
      case 'invite':
        this.handleInviteButton();
        break;}

  }

  handleImageError() {
    this.setState({ imageNotFound: true });
  }

  handleProDocsClick() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["F" /* POSTMAN_PRO_DOCS */]);
  }

  handleUpgradePlan(link) {
    if (ENTERPRISE_UPDATE_TEMP_LINK === link) {
      Object(__WEBPACK_IMPORTED_MODULE_5__models_services_DashboardService__["j" /* openEnterprise */])();
    }
  }

  getUpgradeClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'team-info-dropdown-upgrade': true,
      'usage-warning': this.getUpgradeButtonType() === 'primary' });

  }

  getUpgradeButtonType() {
    let ResourceLimitOperationsStore = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["a" /* getStore */])('ResourceLimitOperationsStore');

    return ResourceLimitOperationsStore.isResourceWarningThresholdReached ||
    ResourceLimitOperationsStore.isLimitReached ? 'primary' : 'tertiary';
  }

  getWarningMessage() {
    // Ideally should come from God server [WEB-1044]
    let resourceLimitOperationsStore = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["a" /* getStore */])('ResourceLimitOperationsStore');

    if (resourceLimitOperationsStore.isLimitReached) {
      return 'You have reached the monthly usage limits of your plan.';
    } else
    if (resourceLimitOperationsStore.isResourceWarningThresholdReached) {
      return 'You are about to reach the monthly usage limits of your plan.';
    }
    return '';
  }

  getMenu() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    ENTERPRISE_UPDATE_TEMP_LINK = '#dashboardEnterprise',
    teamSyncEnabled = currentUser.teamSyncEnabled,
    isSyncEnabled = currentUser.syncEnabled,
    warningMessage = this.getWarningMessage(),
    isProUser = !(currentUser.isFreeUser || currentUser.isFreeTeamUser),
    resourceLimitOperationsStore = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["a" /* getStore */])('ResourceLimitOperationsStore');

    if (!isSyncEnabled) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true, className: 'dropdown-sync-disabled-menu' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["d" /* MenuItem */], { disabled: true, refKey: 'enable-sync' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item__title' }, 'Enable Sync to view your team'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item__subtitle' }, 'Collaborate on your API collections with your teammates'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_Buttons__["a" /* Button */], {
                type: 'primary',
                size: 'large',
                onClick: this.handleDropdownSelect.bind(this, 'enable-sync') }, 'Enable Sync'))));






    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true },

        teamSyncEnabled ?
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["d" /* MenuItem */], { disabled: true, refKey: 'teamname', className: 'dropdown-team-user-header-menu-item' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'team-info-dropdown__team-image',
              onClick: this.handleDropdownSelect.bind(this, 'view-team') },


            this.state.imageNotFound ?
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_Icons_TeamIcon__["a" /* default */], { size: 'lg' }) :
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: currentUser.team.logo_url, onError: this.handleImageError })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-info-dropdown__team-details' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-info-dropdown__team-details-meta' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'team-info-dropdown__team-details__name',
                  title: currentUser.team.name,
                  onClick: this.handleDropdownSelect.bind(this, 'view-team') },

                currentUser.team.name),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-info-dropdown__team-details__domain', title: `${currentUser.team.domain}.postman.co` },
                `${currentUser.team.domain}.postman.co`)),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_base_XPaths_XPath__["a" /* default */], { identifier: 'manage' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_Buttons__["a" /* Button */], {
                  type: 'secondary',
                  size: 'small',
                  onClick: this.handleDropdownSelect.bind(this, 'view-team') }, 'Manage Team')))) :




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["d" /* MenuItem */], { className: 'dropdown-free-user-header-menu-item' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item__title' }, 'Invite users and start sharing for free.'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_Buttons__["a" /* Button */], {
              type: 'primary',
              size: 'small',
              onClick: this.handleDropdownSelect.bind(this, 'invite') }, 'Invite')),






        warningMessage &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_messaging_Alert__["a" /* default */], {
          message: warningMessage,
          type: 'warn',
          isDismissable: false }),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_team_usage_TeamUsage__["a" /* default */], { ResourceLimitOperationsStore: resourceLimitOperationsStore }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'billing' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_base_XPaths_XPath__["a" /* default */], { identifier: 'billing' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Billing'))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'resource-usage' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_base_XPaths_XPath__["a" /* default */], { identifier: 'resourceUsage' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Resource Usage'))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'audit-logs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_base_XPaths_XPath__["a" /* default */], { identifier: 'auditLogs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Audit Logs'))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'team-settings' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_base_XPaths_XPath__["a" /* default */], { identifier: 'teamSettings' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Team Settings')))));




  }

  render(props) {
    let CurrentUserStore = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    resourceLimitOperationsStore = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["a" /* getStore */])('ResourceLimitOperationsStore');

    if (!CurrentUserStore.isLoggedIn) {
      return null;
    }

    if (CurrentUserStore.isFreeUser || CurrentUserStore.isFreeTeamUser) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getUpgradeClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["a" /* Dropdown */], {
              className: 'team-info-dropdown',
              ref: 'dropdownRef',
              onSelect: this.handleDropdownSelect,
              onToggle: this.handleUpgradeDropdownToggle },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["b" /* DropdownButton */], { dropdownStyle: 'split', className: 'upgrade-dropdown', type: this.getUpgradeButtonType() },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_Buttons__["a" /* Button */], {
                  className: 'team-button requester-header__team-info__button',
                  type: this.getUpgradeButtonType(),
                  onClick: this.handleUpgrade }, 'Upgrade')),




            this.getMenu())));



    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_base_XPaths_XPath__["a" /* default */], { identifier: 'teamInfo' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header__team-info' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["a" /* Dropdown */], {
              className: 'team-info-dropdown',
              ref: 'dropdownRef',
              onSelect: this.handleDropdownSelect,
              onToggle: this.handleUpgradeDropdownToggle },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["b" /* DropdownButton */], { dropdownStyle: 'nocaret' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_Buttons__["a" /* Button */], {
                  className: 'team-button requester-header__team-info__button',
                  size: 'small',
                  type: 'tertiary' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_Icons_TeamIcon__["a" /* default */], { className: 'team-icon' }), 'Team')),



            this.getMenu()))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamUsage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TeamUsageItem__ = __webpack_require__(2945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_LoadingIndicator__ = __webpack_require__(2582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Buttons__ = __webpack_require__(21);
var _class;




let


TeamUsage = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class TeamUsage extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleRetry = this.handleRetry.bind(this);
  }

  getWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'team-usage-loading-wrapper': true,
      'is-loading': this.props.ResourceLimitOperationsStore.isLoading });

  }

  handleRetry() {
    this.props.ResourceLimitOperationsStore.fetch();
  }

  getOperationsUsage(members) {
    return _.map(members, operation => {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TeamUsageItem__["a" /* default */], {
          key: operation.name,
          title: operation.operationName,
          tooltip: operation.description,
          usage: operation.usage,
          usageLimit: operation.limit,
          warningThreshold: operation.warningThreshold }));


    });
  }

  render() {
    let resourceLimitOperationsStore = this.props.ResourceLimitOperationsStore;

    if (resourceLimitOperationsStore.isError) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-usage-error' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-usage-error-title' }, 'Something went wrong!'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-usage-error-meta' }, 'Something went wrong while fetching your team\'s usage data.'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-usage-error-btn' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                type: 'primary',
                tooltip: 'Retry',
                onClick: this.handleRetry }, 'Retry'))));






    }
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getWrapperClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-usage-container' },
          this.getOperationsUsage(this.props.ResourceLimitOperationsStore.values)),


        resourceLimitOperationsStore.isLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_LoadingIndicator__["a" /* default */], { className: 'team-usage-loading' })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamUsageItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_InfoButton__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_ProgressBar__ = __webpack_require__(2647);
var _class;


let


TeamUsageItem = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class TeamUsageItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  getUsagePercentage() {
    if (this.props.usageLimit) {
      return Math.ceil(this.props.usage / this.props.usageLimit * 100);
    }
    return 0;
  }

  getProgressColorClass() {
    let usagePercentage = this.getUsagePercentage();

    if (usagePercentage >= 100) {
      return 'error';
    } else if (usagePercentage > this.props.warningThreshold * 100) {
      return 'warning';
    }
    return 'success';
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-usage-item', ref: this.props.ref },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-usage-item-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-usage-item-title-container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-usage-item-title' },
              this.props.title),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_InfoButton__["a" /* default */], { tooltip: this.props.tooltip, tooltipPlacement: 'bottom' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'team-usage-item-meta' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: this.getProgressColorClass() }, this.props.usage), '/',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, this.props.usageLimit))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_ProgressBar__["a" /* default */], { type: 'determinate', progress: this.getUsagePercentage(), className: this.getProgressColorClass() })));


  }}) || _class;

/***/ }),

/***/ 2946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationFeedContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_notifications_NotificationFeed__ = __webpack_require__(2947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_notifications_NotificationIcon__ = __webpack_require__(2951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_notifications_NotificationPanelHeader__ = __webpack_require__(2720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__postman_react_click_outside__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_SettingsTypeConstants__ = __webpack_require__(1081);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__ = __webpack_require__(27);
var _class;










let


NotificationFeedContainer = __WEBPACK_IMPORTED_MODULE_7__postman_react_click_outside___default()(_class = Object(__WEBPACK_IMPORTED_MODULE_10_mobx_react__["a" /* observer */])(_class = class NotificationFeedContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { isPanelOpen: false };

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
    this.markAllAsRead = this.markAllAsRead.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  handleClickOutside() {
    this.closePanel();
  }

  togglePanel() {
    this.state.isPanelOpen ? this.closePanel() : this.openPanel();
  }

  closePanel() {
    this.state.isPanelOpen && this.setState({ isPanelOpen: false }, () => {
      this.markAllAsRead();
    });
  }

  openPanel() {
    !this.state.isPanelOpen && this.setState({ isPanelOpen: true });
  }

  loadMore() {
    Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('TextMessageStore').loadMoreNotifications();
  }

  markAllAsRead() {
    Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('TextMessageStore').markNotificationsRead();
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__["a" /* default */], { identifier: 'notification' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_notifications_NotificationIcon__["a" /* default */], {
            isPanelOpen: this.state.isPanelOpen,
            unreadCount: Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('TextMessageStore').unreadCount,
            onToggle: this.togglePanel })),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_notifications_NotificationFeed__["a" /* default */], {
          isPanelOpen: this.state.isPanelOpen,
          onToggle: this.togglePanel,
          onLoadMore: this.loadMore })));



  }}) || _class) || _class;

/***/ }),

/***/ 2947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotificationPanelHeader__ = __webpack_require__(2720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotificationPanel__ = __webpack_require__(2948);



let

NotificationFeed = class NotificationFeed extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'notification-feed': true,
      'is-hidden': !this.props.isPanelOpen });

  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotificationPanelHeader__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__NotificationPanel__["a" /* default */],
        this.props)));



  }};

/***/ }),

/***/ 2948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_LoadingIndicator__ = __webpack_require__(2582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotificationItem__ = __webpack_require__(2949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NotificationEmptyItem__ = __webpack_require__(2950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx_react__ = __webpack_require__(19);
var _class;







let

NotificationPanel = Object(__WEBPACK_IMPORTED_MODULE_8_mobx_react__["a" /* observer */])(_class = class NotificationPanel extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.store = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('TextMessageStore');
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollDebounced = _.debounce(this.handleScroll, 300);
  }

  handleScroll() {
    let node = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);

    if (!this.store.endOfFeed && node.scrollTop + node.offsetHeight === node.scrollHeight) {
      this.props.onLoadMore && this.props.onLoadMore();
    }
  }

  handleSignIn() {
    __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__["a" /* default */].login();
  }

  render() {
    let notifications = _.filter(this.store.notifications, notification => {
      return _.get(notification, ['message', 'text']);
    });

    if (!Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-list' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-list-error-item' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-list-error-item__text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                    className: 'signin-btn',
                    type: 'text',
                    size: 'small',
                    onClick: this.handleSignIn }, 'Sign In'),



                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' to view your notifications.'))))));





    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel', onScroll: this.handleScrollDebounced },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-list' },

          _.isEmpty(notifications) ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__NotificationEmptyItem__["a" /* default */], null) :
          _.map(notifications, notification => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__NotificationItem__["a" /* default */], {
                onAction: this.props.onAction,
                key: notification.id,
                notification: notification }));


          }),


          !_.isEmpty(notifications) && this.store.loading &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_LoadingIndicator__["a" /* default */], { className: 'notification-panel-loader' }),


          this.store.endOfFeed && !_.isEmpty(notifications) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-list-end' }, 'No more notifications'))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Markdown__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Avatar__ = __webpack_require__(2604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postman_date_helper__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__postman_date_helper__);




let

NotificationItem = class NotificationItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'notification-panel-list-item': true,
      'is-unread': this.props.notification.isUnread });

  }

  render() {
    let formattedTime = __WEBPACK_IMPORTED_MODULE_4__postman_date_helper___default.a.getFormattedDateAndTime(this.props.notification.createdAt),
    message = _.get(this.props, 'notification.message.text');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-list-item__body' },

          _.get(this.props.notification, 'variables.actor_id') &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-list-item__icon' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Avatar__["a" /* default */], {
              type: 'user',
              userId: parseInt(_.get(this.props.notification, 'variables.actor_id')) })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-list-item__content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-list-item__content__text-markdown' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Markdown__["a" /* default */], { source: message })),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-list-item__content__meta' },
              formattedTime)))));





  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NotificationEmptyItem;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function NotificationEmptyItem() {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-list-error-item' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'notification-panel-list-error-item__text' }, 'No new notifications')));




}

/***/ }),

/***/ 2951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_NotificationsIcon__ = __webpack_require__(2952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);



let

NotificationIcon = class NotificationIcon extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'notifications-button-icon': true,
      'notifications-button-icon--unread': this.props.unreadCount !== 0 });

  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
          type: 'icon',
          className: 'notifications-button',
          active: this.props.isPanelOpen,
          onClick: this.props.onToggle,
          tooltip: 'Notifications' },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Icons_NotificationsIcon__["a" /* default */], { className: this.getClasses() })));


  }};

/***/ }),

/***/ 2952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NotificationsIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '13', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'notification', d: 'M9.718 13.926c.103.197.161.424.161.667 0 .792-.611 1.407-1.397 1.407a1.384 1.384 0 0 1-1.396-1.407c0-.255.063-.492.176-.696a5.601 5.601 0 0 0-.264-.007 25.481 25.481 0 0 1-3.055-.44c-1.484-.263-2.357-.879-1.746-1.494.786-.791 1.571-3.956 1.571-5.01 0-2.462 1.397-4.484 3.23-5.188v-.263C6.998.615 7.697 0 8.482 0c.786 0 1.484.703 1.484 1.495v.263c1.834.704 3.23 2.726 3.23 5.187 0 .967.786 4.22 1.572 5.011.698.615-.262 1.143-1.746 1.495-.96.175-2.008.351-3.056.44a5.29 5.29 0 0 1-.248.035z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#A9A9A9', fillRule: 'evenodd', xlinkHref: '#notification' }));



function NotificationsIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcherContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_workspaces_WorkspaceSwitcher__ = __webpack_require__(1110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AuthHandlerService__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_RequesterTabConstants__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_services_DashboardService__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_AppUrlConstants_js__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_XPaths_XPath__ = __webpack_require__(27);
var _class;











let


WorkspaceSwitcherContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class WorkspaceSwitcherContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      activeTab: 'personal',
      isOffline: false };


    this.handleToggle = this.handleToggle.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleSwitchWorkspace = this.handleSwitchWorkspace.bind(this);
    this.handleWorkspaceAction = this.handleWorkspaceAction.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleLearnMore = this.handleLearnMore.bind(this);
    this.handleSyncStatusChange = this.handleSyncStatusChange.bind(this);
    this.handleEnableSync = this.handleEnableSync.bind(this);
    this.handleProUpgradeClick = this.handleProUpgradeClick.bind(this);
  }

  componentWillMount() {
    pm.syncManager.on('change:currentSyncStatus', this.handleSyncStatusChange);
  }

  componentWillUnmount() {
    pm.syncManager.off('change:currentSyncStatus', this.handleSyncStatusChange);
  }

  handleSyncStatusChange() {
    let currentSyncStatus = pm.syncManager.get('currentSyncStatus');

    this.setState({ isOffline: !_.includes(['syncFinished', 'syncStarting'], currentSyncStatus) });
  }
  getActiveStore() {
    let viewMode = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode;

    if (viewMode === __WEBPACK_IMPORTED_MODULE_6__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */]) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore');
    } else
    if (viewMode === __WEBPACK_IMPORTED_MODULE_6__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */]) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore');
    }
  }

  handleToggle(isOpen) {
    if (!this.state.isOpen && !isOpen) {
      return;
    }

    let activeTab = this.getActiveStore().type || 'personal';
    this.setState({
      isOpen,
      activeTab });


    if (isOpen) {
      __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'view_workspace_list', 'workspace_switcher', null, activeTab);
      Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('SyncWorkspaceStore').hydrate({ source: 'workspace_switcher' });
    }
  }

  handleTabChange(activeTab) {
    this.setState({ activeTab });
    __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'view_workspace_list', 'workspace_switcher', null, activeTab);
  }

  handleSwitchWorkspace(id) {
    Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').switchWorkspace(id);
    this.handleToggle(false);
    __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'switch_workspace', 'workspace_switcher');
  }

  handleWorkspaceAction(workspace, action) {
    this.handleToggle(false);
    switch (action) {
      case 'create':
        pm.mediator.trigger('openCreateNewWorkspaceModal');
        break;
      case 'manage-all':
        Object(__WEBPACK_IMPORTED_MODULE_8__models_services_DashboardService__["d" /* manageWorkspaces */])();
        break;}

  }

  handleSignIn() {
    this.handleToggle(false);
    __WEBPACK_IMPORTED_MODULE_5__modules_services_AuthHandlerService__["a" /* default */].login();
  }

  handleProUpgradeClick() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    quantity;

    if (currentUser.team) {
      quantity = _.get(currentUser, 'organizations[0].team_users').length;
    }

    quantity = quantity || 1;

    Object(__WEBPACK_IMPORTED_MODULE_8__models_services_DashboardService__["v" /* upgradeToPro */])({ quantity });

    this.handleToggle(false);
  }

  handleLearnMore() {
    this.handleToggle(false);

    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_9__constants_AppUrlConstants_js__["Z" /* WORKSPACE_DOCS */]);
  }

  handleEnableSync() {
    Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])({ name: 'enableSync', namespace: 'user' }).
    then(() => {
      // Should we alert user?
      // @vineeth
    }).
    catch(e => {
      console.log('Error in enabling sync', e);
    });
  }

  render() {
    let activeWorkspaceStore = this.getActiveStore();
    if (!activeWorkspaceStore) {
      return false;
    }

    let personalWorkspaces = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('WorkspaceStore').personalWorkspaces,
    teamWorkspaces = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('WorkspaceStore').teamWorkspaces,
    joinableWorkspaces = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('SyncWorkspaceStore').joinableWorkspaces;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_XPaths_XPath__["a" /* default */], { identifier: 'workspaceDropdown' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_workspaces_WorkspaceSwitcher__["a" /* default */], {
          activeTab: this.state.activeTab,
          activeWorkspace: activeWorkspaceStore,
          isLoggedIn: Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn,
          isOpen: this.state.isOpen,
          personalWorkspaces: personalWorkspaces,
          teamWorkspaces: teamWorkspaces,
          joinableWorkspaces: joinableWorkspaces,
          onToggle: this.handleToggle,
          onSignIn: this.handleSignIn,
          onLearnMore: this.handleLearnMore,
          onTabChange: this.handleTabChange,
          onSwitchWorkspace: this.handleSwitchWorkspace,
          onWorkspaceAction: this.handleWorkspaceAction,
          onEnableSync: this.handleEnableSync,
          onProUpgradeClick: this.handleProUpgradeClick,
          isOffline: this.state.isOffline,
          isSyncEnabled: Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore').syncEnabled,
          teamSyncEnabled: Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore').teamSyncEnabled })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterInfobarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Infobar__ = __webpack_require__(1096);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

let
RequesterInfobarContainer = class RequesterInfobarContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { info: null };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleActionClick = this.handleActionClick.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__["a" /* default */].initializeBridge();
  }

  componentWillUnmount() {
    this.detachListeners();
  }

  componentDidMount() {
    this.attachListeners();
  }

  attachListeners() {
    __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__["a" /* default */].on('show', this.handleOpen);
    __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__["a" /* default */].on('dismiss', this.handleClose);
  }

  detachListeners() {
    __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__["a" /* default */].off('show', this.handleOpen);
    __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__["a" /* default */].off('dismiss', this.handleClose);
  }

  handleActionClick() {
    __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__["a" /* default */].handleActionClick();
    this.handleClose();
  }

  handleClose() {
    this.setState({ info: null }, () => {
      __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__["a" /* default */].dismissActive();
    });
  }

  handleDismiss() {
    this.state.info.onDismiss && this.state.info.onDismiss();
    this.handleClose();
  }

  handleOpen(info) {
    this.setState({ info });
  }

  render() {
    if (_.isEmpty(this.state.info)) {
      return false;
    }
    const props = _extends({}, this.state.info, { onDismiss: this.handleDismiss });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Infobar__["a" /* default */], _extends({
        onActionClick: this.handleActionClick },
      props)));


  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariablesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_VariablesCache__ = __webpack_require__(2956);


let

VariablesProvider = class VariablesProvider extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.variablesCache = new __WEBPACK_IMPORTED_MODULE_2__controllers_VariablesCache__["a" /* default */]();
  }

  componentWillUnmount() {
    this.variablesCache.destroyVariableCache();
  }

  getChildContext() {
    return { variablesCache: this.variablesCache };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children, this.props);
  }};


VariablesProvider.childContextTypes = { variablesCache: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object };

/***/ }),

/***/ 2956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariablesCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_PostmanDynamicVariables_js__ = __webpack_require__(2957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_VariableSessionHelper__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_backbone__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_backbone__);




let

VariablesCache = class VariablesCache {
  constructor() {
    _.assignIn(this, __WEBPACK_IMPORTED_MODULE_4_backbone___default.a.Events);

    this._handleModelChange = this._handleModelChange.bind(this);
    this._handleDisableAutocomplete = this._handleDisableAutocomplete.bind(this);

    this._clearActiveVariables();
    this._attachModelListeners();
    this._handleModelChange();
  }

  _setActiveVariables(nextActiveVars) {
    this.activeVariables = nextActiveVars;
    this.trigger('change');
  }

  _clearActiveVariables() {
    this.activeVariables = [];
  }

  _attachModelListeners() {
    this.disposer = Object(__WEBPACK_IMPORTED_MODULE_3_mobx__["e" /* autorun */])(this._handleModelChange);
    pm.settings.on('setSetting:variableAutocomplete', this._handleDisableAutocomplete);
  }

  _detachModelListeners() {
    this.disposer();
    pm.settings.off('setSetting:variableAutocomplete', this._handleDisableAutocomplete);
  }

  _getActiveEnvVars() {
    let activeVars = [],
    currentEnvStore = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore');

    if (!currentEnvStore || _.isEmpty(currentEnvStore.values)) {
      return activeVars;
    }
    let envValues = Object(__WEBPACK_IMPORTED_MODULE_1__utils_VariableSessionHelper__["c" /* sanitizeZippedValues */])(currentEnvStore.enabledValues);
    activeVars = _.map(envValues, envVar => {
      return _.assign({}, envVar, {
        scope: 'environment',
        name: envVar.key || '',
        value: _.truncate(envVar.value, { length: 140 }),
        sessionValue: _.truncate(envVar.sessionValue, { length: 140 }) });

    });

    return activeVars;
  }

  _getActiveGlobalVars() {
    let globals = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveGlobalsStore');

    if (!globals) {
      return [];
    }

    let globalValues = Object(__WEBPACK_IMPORTED_MODULE_1__utils_VariableSessionHelper__["c" /* sanitizeZippedValues */])(globals.enabledValues);

    return _.map(globalValues, globalVar => {
      return _.assign({}, globalVar, {
        scope: 'global',
        name: globalVar.key || '',
        value: _.truncate(globalVar.value, { length: 140 }),
        sessionValue: _.truncate(globalVar.sessionValue, { length: 140 }) });

    });
  }

  _handleDisableAutocomplete() {
    this._handleModelChange();
    this.trigger('change');
  }

  // TODO: Need to throttle this handler
  _handleModelChange() {
    if (!this.isAutocompleteEnabled()) {
      this._clearActiveVariables();
      return;
    }
    this._setActiveVariables(
    _.concat(
    this._getActiveEnvVars(),
    this._getActiveGlobalVars()));


  }

  destroyVariableCache() {
    this._detachModelListeners();
  }

  getActiveVariables() {
    return this.activeVariables;
  }

  getDynamicVariables() {
    return __WEBPACK_IMPORTED_MODULE_0__constants_PostmanDynamicVariables_js__["a" /* postmanDynamicVariables */];
  }

  isAutocompleteEnabled() {
    return pm.settings.getSetting('variableAutocomplete');
  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const postmanDynamicVariables = [{
  scope: 'global',
  name: '$guid',
  value: 'Generated at runtime (This dynamic variable adds a v4 style guid)',
  type: 'dynamic',
  skipOverride: true },
{
  scope: 'global',
  name: '$randomInt',
  value: 'Generated at runtime (This dynamic variable adds a random integer between 0 and 1000)',
  type: 'dynamic',
  skipOverride: true },
{
  scope: 'global',
  name: '$timestamp',
  value: 'Generated at runtime (This dynamic variable adds the current timestamp)',
  type: 'dynamic',
  skipOverride: true }];
/* harmony export (immutable) */ __webpack_exports__["a"] = postmanDynamicVariables;


/***/ }),

/***/ 2958:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodashDefaults = __webpack_require__(2959);

var _lodashDefaults2 = _interopRequireDefault(_lodashDefaults);

var _shallowEqual = __webpack_require__(2962);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _EnterLeaveCounter = __webpack_require__(2963);

var _EnterLeaveCounter2 = _interopRequireDefault(_EnterLeaveCounter);

var _BrowserDetector = __webpack_require__(2723);

var _OffsetUtils = __webpack_require__(2965);

var _NativeDragSources = __webpack_require__(2967);

var _NativeTypes = __webpack_require__(2672);

var NativeTypes = _interopRequireWildcard(_NativeTypes);

var HTML5Backend = (function () {
  function HTML5Backend(manager) {
    _classCallCheck(this, HTML5Backend);

    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();

    this.sourcePreviewNodes = {};
    this.sourcePreviewNodeOptions = {};
    this.sourceNodes = {};
    this.sourceNodeOptions = {};
    this.enterLeaveCounter = new _EnterLeaveCounter2['default']();

    this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
    this.handleTopDragStart = this.handleTopDragStart.bind(this);
    this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this);
    this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this);
    this.handleTopDragEnter = this.handleTopDragEnter.bind(this);
    this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this);
    this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this);
    this.handleTopDragOver = this.handleTopDragOver.bind(this);
    this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this);
    this.handleTopDrop = this.handleTopDrop.bind(this);
    this.handleTopDropCapture = this.handleTopDropCapture.bind(this);
    this.handleSelectStart = this.handleSelectStart.bind(this);
    this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this);
    this.endDragNativeItem = this.endDragNativeItem.bind(this);
  }

  HTML5Backend.prototype.setup = function setup() {
    if (typeof window === 'undefined') {
      return;
    }

    if (this.constructor.isSetUp) {
      throw new Error('Cannot have two HTML5 backends at the same time.');
    }
    this.constructor.isSetUp = true;
    this.addEventListeners(window);
  };

  HTML5Backend.prototype.teardown = function teardown() {
    if (typeof window === 'undefined') {
      return;
    }

    this.constructor.isSetUp = false;
    this.removeEventListeners(window);
    this.clearCurrentDragSourceNode();
  };

  HTML5Backend.prototype.addEventListeners = function addEventListeners(target) {
    target.addEventListener('dragstart', this.handleTopDragStart);
    target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
    target.addEventListener('dragend', this.handleTopDragEndCapture, true);
    target.addEventListener('dragenter', this.handleTopDragEnter);
    target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
    target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
    target.addEventListener('dragover', this.handleTopDragOver);
    target.addEventListener('dragover', this.handleTopDragOverCapture, true);
    target.addEventListener('drop', this.handleTopDrop);
    target.addEventListener('drop', this.handleTopDropCapture, true);
  };

  HTML5Backend.prototype.removeEventListeners = function removeEventListeners(target) {
    target.removeEventListener('dragstart', this.handleTopDragStart);
    target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
    target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
    target.removeEventListener('dragenter', this.handleTopDragEnter);
    target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
    target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
    target.removeEventListener('dragover', this.handleTopDragOver);
    target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
    target.removeEventListener('drop', this.handleTopDrop);
    target.removeEventListener('drop', this.handleTopDropCapture, true);
  };

  HTML5Backend.prototype.connectDragPreview = function connectDragPreview(sourceId, node, options) {
    var _this = this;

    this.sourcePreviewNodeOptions[sourceId] = options;
    this.sourcePreviewNodes[sourceId] = node;

    return function () {
      delete _this.sourcePreviewNodes[sourceId];
      delete _this.sourcePreviewNodeOptions[sourceId];
    };
  };

  HTML5Backend.prototype.connectDragSource = function connectDragSource(sourceId, node, options) {
    var _this2 = this;

    this.sourceNodes[sourceId] = node;
    this.sourceNodeOptions[sourceId] = options;

    var handleDragStart = function handleDragStart(e) {
      return _this2.handleDragStart(e, sourceId);
    };
    var handleSelectStart = function handleSelectStart(e) {
      return _this2.handleSelectStart(e, sourceId);
    };

    node.setAttribute('draggable', true);
    node.addEventListener('dragstart', handleDragStart);
    node.addEventListener('selectstart', handleSelectStart);

    return function () {
      delete _this2.sourceNodes[sourceId];
      delete _this2.sourceNodeOptions[sourceId];

      node.removeEventListener('dragstart', handleDragStart);
      node.removeEventListener('selectstart', handleSelectStart);
      node.setAttribute('draggable', false);
    };
  };

  HTML5Backend.prototype.connectDropTarget = function connectDropTarget(targetId, node) {
    var _this3 = this;

    var handleDragEnter = function handleDragEnter(e) {
      return _this3.handleDragEnter(e, targetId);
    };
    var handleDragOver = function handleDragOver(e) {
      return _this3.handleDragOver(e, targetId);
    };
    var handleDrop = function handleDrop(e) {
      return _this3.handleDrop(e, targetId);
    };

    node.addEventListener('dragenter', handleDragEnter);
    node.addEventListener('dragover', handleDragOver);
    node.addEventListener('drop', handleDrop);

    return function () {
      node.removeEventListener('dragenter', handleDragEnter);
      node.removeEventListener('dragover', handleDragOver);
      node.removeEventListener('drop', handleDrop);
    };
  };

  HTML5Backend.prototype.getCurrentSourceNodeOptions = function getCurrentSourceNodeOptions() {
    var sourceId = this.monitor.getSourceId();
    var sourceNodeOptions = this.sourceNodeOptions[sourceId];

    return _lodashDefaults2['default'](sourceNodeOptions || {}, {
      dropEffect: 'move'
    });
  };

  HTML5Backend.prototype.getCurrentDropEffect = function getCurrentDropEffect() {
    if (this.isDraggingNativeItem()) {
      // It makes more sense to default to 'copy' for native resources
      return 'copy';
    }

    return this.getCurrentSourceNodeOptions().dropEffect;
  };

  HTML5Backend.prototype.getCurrentSourcePreviewNodeOptions = function getCurrentSourcePreviewNodeOptions() {
    var sourceId = this.monitor.getSourceId();
    var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions[sourceId];

    return _lodashDefaults2['default'](sourcePreviewNodeOptions || {}, {
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: false
    });
  };

  HTML5Backend.prototype.getSourceClientOffset = function getSourceClientOffset(sourceId) {
    return _OffsetUtils.getNodeClientOffset(this.sourceNodes[sourceId]);
  };

  HTML5Backend.prototype.isDraggingNativeItem = function isDraggingNativeItem() {
    var itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes).some(function (key) {
      return NativeTypes[key] === itemType;
    });
  };

  HTML5Backend.prototype.beginDragNativeItem = function beginDragNativeItem(type) {
    this.clearCurrentDragSourceNode();

    var SourceType = _NativeDragSources.createNativeDragSource(type);
    this.currentNativeSource = new SourceType();
    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
    this.actions.beginDrag([this.currentNativeHandle]);

    // On Firefox, if mousemove fires, the drag is over but browser failed to tell us.
    // This is not true for other browsers.
    if (_BrowserDetector.isFirefox()) {
      window.addEventListener('mousemove', this.endDragNativeItem, true);
    }
  };

  HTML5Backend.prototype.endDragNativeItem = function endDragNativeItem() {
    if (!this.isDraggingNativeItem()) {
      return;
    }

    if (_BrowserDetector.isFirefox()) {
      window.removeEventListener('mousemove', this.endDragNativeItem, true);
    }

    this.actions.endDrag();
    this.registry.removeSource(this.currentNativeHandle);
    this.currentNativeHandle = null;
    this.currentNativeSource = null;
  };

  HTML5Backend.prototype.endDragIfSourceWasRemovedFromDOM = function endDragIfSourceWasRemovedFromDOM() {
    var node = this.currentDragSourceNode;
    if (document.body.contains(node)) {
      return;
    }

    if (this.clearCurrentDragSourceNode()) {
      this.actions.endDrag();
    }
  };

  HTML5Backend.prototype.setCurrentDragSourceNode = function setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode();
    this.currentDragSourceNode = node;
    this.currentDragSourceNodeOffset = _OffsetUtils.getNodeClientOffset(node);
    this.currentDragSourceNodeOffsetChanged = false;

    // Receiving a mouse event in the middle of a dragging operation
    // means it has ended and the drag source node disappeared from DOM,
    // so the browser didn't dispatch the dragend event.
    window.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
  };

  HTML5Backend.prototype.clearCurrentDragSourceNode = function clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      this.currentDragSourceNode = null;
      this.currentDragSourceNodeOffset = null;
      this.currentDragSourceNodeOffsetChanged = false;
      window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
      return true;
    }

    return false;
  };

  HTML5Backend.prototype.checkIfCurrentDragSourceRectChanged = function checkIfCurrentDragSourceRectChanged() {
    var node = this.currentDragSourceNode;
    if (!node) {
      return false;
    }

    if (this.currentDragSourceNodeOffsetChanged) {
      return true;
    }

    this.currentDragSourceNodeOffsetChanged = !_shallowEqual2['default'](_OffsetUtils.getNodeClientOffset(node), this.currentDragSourceNodeOffset);

    return this.currentDragSourceNodeOffsetChanged;
  };

  HTML5Backend.prototype.handleTopDragStartCapture = function handleTopDragStartCapture() {
    this.clearCurrentDragSourceNode();
    this.dragStartSourceIds = [];
  };

  HTML5Backend.prototype.handleDragStart = function handleDragStart(e, sourceId) {
    this.dragStartSourceIds.unshift(sourceId);
  };

  HTML5Backend.prototype.handleTopDragStart = function handleTopDragStart(e) {
    var _this4 = this;

    var dragStartSourceIds = this.dragStartSourceIds;

    this.dragStartSourceIds = null;

    var clientOffset = _OffsetUtils.getEventClientOffset(e);

    // Don't publish the source just yet (see why below)
    this.actions.beginDrag(dragStartSourceIds, {
      publishSource: false,
      getSourceClientOffset: this.getSourceClientOffset,
      clientOffset: clientOffset
    });

    var dataTransfer = e.dataTransfer;

    var nativeType = _NativeDragSources.matchNativeItemType(dataTransfer);

    if (this.monitor.isDragging()) {
      if (typeof dataTransfer.setDragImage === 'function') {
        // Use custom drag image if user specifies it.
        // If child drag source refuses drag but parent agrees,
        // use parent's node as drag image. Neither works in IE though.
        var sourceId = this.monitor.getSourceId();
        var sourceNode = this.sourceNodes[sourceId];
        var dragPreview = this.sourcePreviewNodes[sourceId] || sourceNode;

        var _getCurrentSourcePreviewNodeOptions = this.getCurrentSourcePreviewNodeOptions();

        var anchorX = _getCurrentSourcePreviewNodeOptions.anchorX;
        var anchorY = _getCurrentSourcePreviewNodeOptions.anchorY;

        var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
        var dragPreviewOffset = _OffsetUtils.getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint);
        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
      }

      try {
        // Firefox won't drag without setting data
        dataTransfer.setData('application/json', {});
      } catch (err) {}
      // IE doesn't support MIME types in setData

      // Store drag source node so we can check whether
      // it is removed from DOM and trigger endDrag manually.
      this.setCurrentDragSourceNode(e.target);

      // Now we are ready to publish the drag source.. or are we not?

      var _getCurrentSourcePreviewNodeOptions2 = this.getCurrentSourcePreviewNodeOptions();

      var captureDraggingState = _getCurrentSourcePreviewNodeOptions2.captureDraggingState;

      if (!captureDraggingState) {
        // Usually we want to publish it in the next tick so that browser
        // is able to screenshot the current (not yet dragging) state.
        //
        // It also neatly avoids a situation where render() returns null
        // in the same tick for the source element, and browser freaks out.
        setTimeout(function () {
          return _this4.actions.publishDragSource();
        });
      } else {
        // In some cases the user may want to override this behavior, e.g.
        // to work around IE not supporting custom drag previews.
        //
        // When using a custom drag layer, the only way to prevent
        // the default drag preview from drawing in IE is to screenshot
        // the dragging state in which the node itself has zero opacity
        // and height. In this case, though, returning null from render()
        // will abruptly end the dragging, which is not obvious.
        //
        // This is the reason such behavior is strictly opt-in.
        this.actions.publishDragSource();
      }
    } else if (nativeType) {
      // A native item (such as URL) dragged from inside the document
      this.beginDragNativeItem(nativeType);
    } else if (!dataTransfer.types && (!e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
      // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
      // Just let it drag. It's a native type (URL or text) and will be picked up in dragenter handler.
      return;
    } else {
      // If by this time no drag source reacted, tell browser not to drag.
      e.preventDefault();
    }
  };

  HTML5Backend.prototype.handleTopDragEndCapture = function handleTopDragEndCapture() {
    if (this.clearCurrentDragSourceNode()) {
      // Firefox can dispatch this event in an infinite loop
      // if dragend handler does something like showing an alert.
      // Only proceed if we have not handled it already.
      this.actions.endDrag();
    }
  };

  HTML5Backend.prototype.handleTopDragEnterCapture = function handleTopDragEnterCapture(e) {
    this.dragEnterTargetIds = [];

    var isFirstEnter = this.enterLeaveCounter.enter(e.target);
    if (!isFirstEnter || this.monitor.isDragging()) {
      return;
    }

    var dataTransfer = e.dataTransfer;

    var nativeType = _NativeDragSources.matchNativeItemType(dataTransfer);

    if (nativeType) {
      // A native item (such as file or URL) dragged from outside the document
      this.beginDragNativeItem(nativeType);
    }
  };

  HTML5Backend.prototype.handleDragEnter = function handleDragEnter(e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  };

  HTML5Backend.prototype.handleTopDragEnter = function handleTopDragEnter(e) {
    var _this5 = this;

    var dragEnterTargetIds = this.dragEnterTargetIds;

    this.dragEnterTargetIds = [];

    if (!this.monitor.isDragging()) {
      // This is probably a native item type we don't understand.
      return;
    }

    if (!_BrowserDetector.isFirefox()) {
      // Don't emit hover in `dragenter` on Firefox due to an edge case.
      // If the target changes position as the result of `dragenter`, Firefox
      // will still happily dispatch `dragover` despite target being no longer
      // there. The easy solution is to only fire `hover` in `dragover` on FF.
      this.actions.hover(dragEnterTargetIds, {
        clientOffset: _OffsetUtils.getEventClientOffset(e)
      });
    }

    var canDrop = dragEnterTargetIds.some(function (targetId) {
      return _this5.monitor.canDropOnTarget(targetId);
    });

    if (canDrop) {
      // IE requires this to fire dragover events
      e.preventDefault();
      e.dataTransfer.dropEffect = this.getCurrentDropEffect();
    }
  };

  HTML5Backend.prototype.handleTopDragOverCapture = function handleTopDragOverCapture() {
    this.dragOverTargetIds = [];
  };

  HTML5Backend.prototype.handleDragOver = function handleDragOver(e, targetId) {
    this.dragOverTargetIds.unshift(targetId);
  };

  HTML5Backend.prototype.handleTopDragOver = function handleTopDragOver(e) {
    var _this6 = this;

    var dragOverTargetIds = this.dragOverTargetIds;

    this.dragOverTargetIds = [];

    if (!this.monitor.isDragging()) {
      // This is probably a native item type we don't understand.
      // Prevent default "drop and blow away the whole document" action.
      e.preventDefault();
      e.dataTransfer.dropEffect = 'none';
      return;
    }

    this.actions.hover(dragOverTargetIds, {
      clientOffset: _OffsetUtils.getEventClientOffset(e)
    });

    var canDrop = dragOverTargetIds.some(function (targetId) {
      return _this6.monitor.canDropOnTarget(targetId);
    });

    if (canDrop) {
      // Show user-specified drop effect.
      e.preventDefault();
      e.dataTransfer.dropEffect = this.getCurrentDropEffect();
    } else if (this.isDraggingNativeItem()) {
      // Don't show a nice cursor but still prevent default
      // "drop and blow away the whole document" action.
      e.preventDefault();
      e.dataTransfer.dropEffect = 'none';
    } else if (this.checkIfCurrentDragSourceRectChanged()) {
      // Prevent animating to incorrect position.
      // Drop effect must be other than 'none' to prevent animation.
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    }
  };

  HTML5Backend.prototype.handleTopDragLeaveCapture = function handleTopDragLeaveCapture(e) {
    if (this.isDraggingNativeItem()) {
      e.preventDefault();
    }

    var isLastLeave = this.enterLeaveCounter.leave(e.target);
    if (!isLastLeave) {
      return;
    }

    if (this.isDraggingNativeItem()) {
      this.endDragNativeItem();
    }
  };

  HTML5Backend.prototype.handleTopDropCapture = function handleTopDropCapture(e) {
    this.dropTargetIds = [];
    e.preventDefault();

    if (this.isDraggingNativeItem()) {
      this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
    }

    this.enterLeaveCounter.reset();
  };

  HTML5Backend.prototype.handleDrop = function handleDrop(e, targetId) {
    this.dropTargetIds.unshift(targetId);
  };

  HTML5Backend.prototype.handleTopDrop = function handleTopDrop(e) {
    var dropTargetIds = this.dropTargetIds;

    this.dropTargetIds = [];

    this.actions.hover(dropTargetIds, {
      clientOffset: _OffsetUtils.getEventClientOffset(e)
    });
    this.actions.drop();

    if (this.isDraggingNativeItem()) {
      this.endDragNativeItem();
    } else {
      this.endDragIfSourceWasRemovedFromDOM();
    }
  };

  HTML5Backend.prototype.handleSelectStart = function handleSelectStart(e) {
    var target = e.target;

    // Only IE requires us to explicitly say
    // we want drag drop operation to start
    if (typeof target.dragDrop !== 'function') {
      return;
    }

    // Inputs and textareas should be selectable
    if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      return;
    }

    // For other targets, ask IE
    // to enable drag and drop
    e.preventDefault();
    target.dragDrop();
  };

  return HTML5Backend;
})();

exports['default'] = HTML5Backend;
module.exports = exports['default'];

/***/ }),

/***/ 2959:
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(538),
    eq = __webpack_require__(1079),
    isIterateeCall = __webpack_require__(2722),
    keysIn = __webpack_require__(2671);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),

/***/ 2960:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(430),
    isPrototype = __webpack_require__(1077),
    nativeKeysIn = __webpack_require__(2961);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 2961:
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 2962:
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

    var valA = objA[keysA[i]];
    var valB = objB[keysA[i]];

    if (valA !== valB) {
      return false;
    }
  }

  return true;
}

module.exports = exports["default"];

/***/ }),

/***/ 2963:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodashUnion = __webpack_require__(2964);

var _lodashUnion2 = _interopRequireDefault(_lodashUnion);

var _lodashWithout = __webpack_require__(1233);

var _lodashWithout2 = _interopRequireDefault(_lodashWithout);

var EnterLeaveCounter = (function () {
  function EnterLeaveCounter() {
    _classCallCheck(this, EnterLeaveCounter);

    this.entered = [];
  }

  EnterLeaveCounter.prototype.enter = function enter(enteringNode) {
    var previousLength = this.entered.length;

    this.entered = _lodashUnion2['default'](this.entered.filter(function (node) {
      return document.documentElement.contains(node) && (!node.contains || node.contains(enteringNode));
    }), [enteringNode]);

    return previousLength === 0 && this.entered.length > 0;
  };

  EnterLeaveCounter.prototype.leave = function leave(leavingNode) {
    var previousLength = this.entered.length;

    this.entered = _lodashWithout2['default'](this.entered.filter(function (node) {
      return document.documentElement.contains(node);
    }), leavingNode);

    return previousLength > 0 && this.entered.length === 0;
  };

  EnterLeaveCounter.prototype.reset = function reset() {
    this.entered = [];
  };

  return EnterLeaveCounter;
})();

exports['default'] = EnterLeaveCounter;
module.exports = exports['default'];

/***/ }),

/***/ 2964:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(1108),
    baseRest = __webpack_require__(538),
    baseUniq = __webpack_require__(1237),
    isArrayLikeObject = __webpack_require__(558);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),

/***/ 2965:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getNodeClientOffset = getNodeClientOffset;
exports.getEventClientOffset = getEventClientOffset;
exports.getDragPreviewOffset = getDragPreviewOffset;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _BrowserDetector = __webpack_require__(2723);

var _MonotonicInterpolant = __webpack_require__(2966);

var _MonotonicInterpolant2 = _interopRequireDefault(_MonotonicInterpolant);

var ELEMENT_NODE = 1;

function getScalingFactor() {
  return document.documentElement.clientWidth / document.body.clientWidth;
}

function getNodeClientOffset(node) {
  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

  if (!el) {
    return null;
  }

  var scalingFactor = getScalingFactor();

  var _el$getBoundingClientRect = el.getBoundingClientRect();

  var top = _el$getBoundingClientRect.top;
  var left = _el$getBoundingClientRect.left;

  return { x: left * scalingFactor, y: top * scalingFactor };
}

function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}

function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint) {
  // The browsers will use the image intrinsic size under different conditions.
  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
  var isImage = dragPreview.nodeName === 'IMG' && (_BrowserDetector.isFirefox() || !document.documentElement.contains(dragPreview));
  var dragPreviewNode = isImage ? sourceNode : dragPreview;

  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  var offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };

  var sourceWidth = sourceNode.offsetWidth;
  var sourceHeight = sourceNode.offsetHeight;
  var anchorX = anchorPoint.anchorX;
  var anchorY = anchorPoint.anchorY;

  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;

  // Work around @2x coordinate discrepancies in browsers
  if (_BrowserDetector.isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  } else if (_BrowserDetector.isFirefox() && !isImage) {
    dragPreviewHeight *= window.devicePixelRatio;
    dragPreviewWidth *= window.devicePixelRatio;
  }

  // Interpolate coordinates depending on anchor point
  // If you know a simpler way to do this, let me know
  var interpolantX = new _MonotonicInterpolant2['default']([0, 0.5, 1], [
  // Dock to the left
  offsetFromDragPreview.x,
  // Align at the center
  offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
  // Dock to the right
  offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
  var interpolantY = new _MonotonicInterpolant2['default']([0, 0.5, 1], [
  // Dock to the top
  offsetFromDragPreview.y,
  // Align at the center
  offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
  // Dock to the bottom
  offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
  var x = interpolantX.interpolate(anchorX);
  var y = interpolantY.interpolate(anchorY);

  // Work around Safari 8 positioning bug
  if (_BrowserDetector.isSafari() && isImage) {
    // We'll have to wait for @3x to see if this is entirely correct
    y += (window.devicePixelRatio - 1) * dragPreviewHeight;
  }

  return { x: x, y: y };
}

/***/ }),

/***/ 2966:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MonotonicInterpolant = (function () {
  function MonotonicInterpolant(xs, ys) {
    _classCallCheck(this, MonotonicInterpolant);

    var length = xs.length;

    // Rearrange xs and ys so that xs is sorted
    var indexes = [];
    for (var i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort(function (a, b) {
      return xs[a] < xs[b] ? -1 : 1;
    });

    // Get consecutive differences and slopes
    var dys = [];
    var dxs = [];
    var ms = [];
    var dx = undefined;
    var dy = undefined;
    for (var i = 0; i < length - 1; i++) {
      dx = xs[i + 1] - xs[i];
      dy = ys[i + 1] - ys[i];
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    }

    // Get degree-1 coefficients
    var c1s = [ms[0]];
    for (var i = 0; i < dxs.length - 1; i++) {
      var _m = ms[i];
      var mNext = ms[i + 1];
      if (_m * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[i];
        var dxNext = dxs[i + 1];
        var common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / _m + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);

    // Get degree-2 and degree-3 coefficients
    var c2s = [];
    var c3s = [];
    var m = undefined;
    for (var i = 0; i < c1s.length - 1; i++) {
      m = ms[i];
      var c1 = c1s[i];
      var invDx = 1 / dxs[i];
      var common = c1 + c1s[i + 1] - m - m;
      c2s.push((m - c1 - common) * invDx);
      c3s.push(common * invDx * invDx);
    }

    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }

  MonotonicInterpolant.prototype.interpolate = function interpolate(x) {
    var xs = this.xs;
    var ys = this.ys;
    var c1s = this.c1s;
    var c2s = this.c2s;
    var c3s = this.c3s;

    // The rightmost point in the dataset should give an exact result
    var i = xs.length - 1;
    if (x === xs[i]) {
      return ys[i];
    }

    // Search for the interval x is in, returning the corresponding y if x is one of the original xs
    var low = 0;
    var high = c3s.length - 1;
    var mid = undefined;
    while (low <= high) {
      mid = Math.floor(0.5 * (low + high));
      var xHere = xs[mid];
      if (xHere < x) {
        low = mid + 1;
      } else if (xHere > x) {
        high = mid - 1;
      } else {
        return ys[mid];
      }
    }
    i = Math.max(0, high);

    // Interpolate
    var diff = x - xs[i];
    var diffSq = diff * diff;
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
  };

  return MonotonicInterpolant;
})();

exports["default"] = MonotonicInterpolant;
module.exports = exports["default"];

/***/ }),

/***/ 2967:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _nativeTypesConfig;

exports.createNativeDragSource = createNativeDragSource;
exports.matchNativeItemType = matchNativeItemType;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _NativeTypes = __webpack_require__(2672);

var NativeTypes = _interopRequireWildcard(_NativeTypes);

function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
    return resultSoFar || dataTransfer.getData(typeToTry);
  }, null);

  return result != null ? // eslint-disable-line eqeqeq
  result : defaultValue;
}

var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty(_nativeTypesConfig, NativeTypes.FILE, {
  exposeProperty: 'files',
  matchesTypes: ['Files'],
  getData: function getData(dataTransfer) {
    var items = Array.prototype.slice.call(dataTransfer.items);
    for (var i = 0; i < length; i++) {
      var entry = dataTransfer.items[i].webkitGetAsEntry();
      if (entry.isFile) {
        return { type: 'file', list: Array.prototype.slice.call(dataTransfer.files) };
      } else if (entry.isDirectory) {
        return { type: 'directory', list: items };
      }
    }
  }
}), _defineProperty(_nativeTypesConfig, NativeTypes.URL, {
  exposeProperty: 'urls',
  matchesTypes: ['Url', 'text/uri-list'],
  getData: function getData(dataTransfer, matchesTypes) {
    return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
  }
}), _defineProperty(_nativeTypesConfig, NativeTypes.TEXT, {
  exposeProperty: 'text',
  matchesTypes: ['Text', 'text/plain'],
  getData: function getData(dataTransfer, matchesTypes) {
    return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
  }
}), _nativeTypesConfig);

function createNativeDragSource(type) {
  var _nativeTypesConfig$type = nativeTypesConfig[type];
  var exposeProperty = _nativeTypesConfig$type.exposeProperty;
  var matchesTypes = _nativeTypesConfig$type.matchesTypes;
  var getData = _nativeTypesConfig$type.getData;

  return (function () {
    function NativeDragSource() {
      _classCallCheck(this, NativeDragSource);

      this.item = Object.defineProperties({}, _defineProperty({}, exposeProperty, {
        get: function get() {
          console.warn( // eslint-disable-line no-console
          'Browser doesn\'t allow reading "' + exposeProperty + '" until the drop event.');
          return null;
        },
        configurable: true,
        enumerable: true
      }));
    }

    NativeDragSource.prototype.mutateItemByReadingDataTransfer = function mutateItemByReadingDataTransfer(dataTransfer) {
      delete this.item[exposeProperty];
      this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
    };

    NativeDragSource.prototype.canDrag = function canDrag() {
      return true;
    };

    NativeDragSource.prototype.beginDrag = function beginDrag() {
      return this.item;
    };

    NativeDragSource.prototype.isDragging = function isDragging(monitor, handle) {
      return handle === monitor.getSourceId();
    };

    NativeDragSource.prototype.endDrag = function endDrag() {};

    return NativeDragSource;
  })();
}

function matchNativeItemType(dataTransfer) {
  var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);

  return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;

    return matchesTypes.some(function (t) {
      return dataTransferTypes.indexOf(t) > -1;
    });
  })[0] || null;
}

/***/ }),

/***/ 2968:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = getEmptyImage;
var emptyImage = undefined;

function getEmptyImage() {
  if (!emptyImage) {
    emptyImage = new Image();
    emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  }

  return emptyImage;
}

module.exports = exports['default'];

/***/ }),

/***/ 2969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterContentContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RequesterSidebarContainer__ = __webpack_require__(2970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabs_RequesterTabEmptyShell__ = __webpack_require__(3037);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_XPaths_XPath__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_RequesterTabConstants__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_loadable__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_loadable__);
var _class;










const RequesterBuilderContainer = __WEBPACK_IMPORTED_MODULE_8_react_loadable___default()({
  loader: () => Promise.all/* import() */([__webpack_require__.e(19), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, 3038)),
  loading: () => {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-builder' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_tabs_RequesterTabEmptyShell__["b" /* RequesterTabsEmptyShell */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_tabs_RequesterTabEmptyShell__["a" /* RequesterTabContentShell */], null)));


  } });


const WorkspaceBrowser = __WEBPACK_IMPORTED_MODULE_8_react_loadable___default()({
  loader: () => Promise.all/* import() */([__webpack_require__.e(19), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, 3054)),
  loading: () => null });let



RequesterContentContainer = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class RequesterContentContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      isSidebarOverlaid: false,
      sidebarWidth: 300 };


    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
    this.switchPane = this.switchPane.bind(this);
    this.switchToSidebar = this.switchPane.bind(this, 'sidebar');
    this.switchToBuilder = this.switchPane.bind(this, 'builder');
    this.focus = this.focus.bind(this);
  }

  componentWillMount() {
    pm.mediator.on('toggleSidebar', this.toggleSidebar);
    window.addEventListener('resize', this.handleResize);
    pm.uiZoom && pm.uiZoom.on('change', this.handleResize);
    this.handleResize();

    this.setState({ sidebarWidth: pm.settings.getSetting('requesterSidebarWidth') || 300 });
  }

  componentWillUnmount() {
    pm.mediator.off('toggleSidebar', this.toggleSidebar);
    window.removeEventListener('resize', this.handleResize);
    pm.uiZoom && pm.uiZoom.off('change', this.handleResize);
  }

  toggleSidebar() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen }, () => {
      pm.settings.setSetting('isRequesterSidebarOpen', this.state.isSidebarOpen);
      !this.state.isSidebarOpen && pm.mediator.trigger('focusBuilder');
    });
  }

  switchPane(pane = 'builder') {
    let isSidebarOpen = this.state.isSidebarOpen;
    if (pane !== 'sidebar' && this.state.isSidebarOverlaid && isSidebarOpen) {
      isSidebarOpen = false;
    }
    this.setState({
      activePane: pane,
      isSidebarOpen: isSidebarOpen });

  }

  handleResize() {
    let windowWidth = window.innerWidth;

    if (windowWidth < 1024) {
      !this.state.isSidebarOverlaid && this.setState({
        isSidebarOverlaid: true,
        isSidebarOpen: false },
      () => {
        pm.settings.setSetting('isRequesterSidebarOpen', this.state.isSidebarOpen);
        pm.mediator.trigger('toggledSidebar', this.state.isSidebarOpen);
      });
    } else
    {
      let openSidebar = true;
      if (Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode === __WEBPACK_IMPORTED_MODULE_7__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */]) {
        openSidebar = false;
      }
      this.state.isSidebarOverlaid && this.setState({
        isSidebarOverlaid: false,
        isSidebarOpen: openSidebar },
      () => {
        pm.settings.setSetting('isRequesterSidebarOpen', this.state.isSidebarOpen);
        pm.mediator.trigger('toggledSidebar', this.state.isSidebarOpen);
      });
    }
  }

  getBuilderClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'requester-content': true,
      'requester-content-builder': true });

  }

  getLibraryClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'requester-content': true,
      'requester-content-library': true });

  }

  getSidebarClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'requester-left-sidebar-wrapper': true,
      'is-hidden': Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode === __WEBPACK_IMPORTED_MODULE_7__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */] ? !this.state.isSidebarOpen : true,
      'is-overlaid': this.state.isSidebarOverlaid });

  }

  _checkSidebarWidthBounds(width) {
    if (width > 500) {
      return 500;
    }

    if (width < 210) {
      return 210;
    }

    return width;
  }

  handleDrag(event, data) {
    let scaledClientX = data.x;
    this.setState({ sidebarWidth: this._checkSidebarWidthBounds(scaledClientX) });
  }

  handleDragStop(event, data) {
    pm.settings.setSetting('requesterSidebarWidth', this.state.sidebarWidth);
  }

  focus(view) {
    this.refs.contents && this.refs.contents.focus();
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-contents', ref: 'contents', tabIndex: 1 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RequesterSidebarContainer__["a" /* default */], {
          sidebarWidth: this.state.sidebarWidth,
          className: this.getSidebarClasses(),
          onDrag: this.handleDrag,
          onStop: this.handleDragStop,
          onOutsideClick: this.switchToBuilder,
          isSidebarOpen: this.state.isSidebarOpen }),


        Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').isSwitching &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'loader-blocker' }),


        Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode === __WEBPACK_IMPORTED_MODULE_7__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */] &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getBuilderClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_XPaths_XPath__["a" /* default */], { identifier: 'builder' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RequesterBuilderContainer, {
              ref: this.focus,
              activePane: this.state.activePane,
              onOutsideClick: this.switchToSidebar }))),





        Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode === __WEBPACK_IMPORTED_MODULE_7__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */] &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getLibraryClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_XPaths_XPath__["a" /* default */], { identifier: 'browse' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WorkspaceBrowser, { ref: this.focus })))));





  }}) || _class;

/***/ }),

/***/ 2970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterSidebarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_draggable__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RequesterLeftSidebarContainer__ = __webpack_require__(2971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_promisifyIdleCallback__ = __webpack_require__(2727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_XPaths_XPath__ = __webpack_require__(27);
var _dec, _class;







const CollectionBrowserContainer = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: () => Object(__WEBPACK_IMPORTED_MODULE_5__utils_promisifyIdleCallback__["a" /* promisifyIdleCallback */])().then(() => Promise.all/* import() */([__webpack_require__.e(19), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, 2998))),
  loading: () => null });let



RequesterSidebarContainer = (_dec = __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default()({ eventCapturingPhase: false }), _dec(_class = class RequesterSidebarContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
  }

  handleDrag(event, data) {
    this.props.onDrag && this.props.onDrag(event, data);
  }

  handleDragStop(event, data) {
    this.props.onStop && this.props.onStop(event, data);
  }

  handleClickOutside(e) {
    // Don't close the browser if the outside click is triggered from modal
    if (e.target.closest('.sidebar-toggle-button')) {
      return;
    }
    if (e.target.offsetParent != null &&
    !e.target.closest('.ReactModalPortal') &&
    !e.target.closest('.tooltip'))
    {
      pm.mediator.trigger('hideCollectionBrowser');
      this.props.onOutsideClick && this.props.onOutsideClick(e);
    }
  }

  render() {

    let width = this.props.sidebarWidth + 'px';

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_XPaths_XPath__["a" /* default */], { identifier: 'sidebar', isVisible: this.props.isSidebarOpen },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.props.className, style: { width } },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RequesterLeftSidebarContainer__["a" /* default */], { ref: 'sidebar' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_draggable__["DraggableCore"], {
              onDrag: this.handleDrag,
              onStop: this.handleDragStop },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-left-sidebar-resize-handle' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CollectionBrowserContainer, null))));



  }}) || _class);

/***/ }),

/***/ 2971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterLeftSidebarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_keymaps_KeyMaps__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Inputs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Tabs__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__collections_CollectionSidebarContainer__ = __webpack_require__(2972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__history_HistorySidebarContainer__ = __webpack_require__(2991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_XPaths_XPath__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_TabShortcutsService__ = __webpack_require__(2670);
var _class;









let

RequesterLeftSidebarContainer = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class RequesterLeftSidebarContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.store = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('RequesterSidebarStore');

    this.state = {
      activeTab: pm.settings.getSetting('activeSidebarSection') || 'history',
      searchQuery: '',
      isOpen: true };


    this.focus = this.focus.bind(this);
    this.handleNextItem = this.handleNextItem.bind(this);
    this.focusSearchBox = this.focusSearchBox.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleFocusInCollectionsTab = this.handleFocusInCollectionsTab.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchCancel = this.handleSearchCancel.bind(this);
    this.triggerSidebarSearchQuery = this.triggerSidebarSearchQuery.bind(this);
    this.triggerSidebarSearchQueryDebounced = _.debounce(this.triggerSidebarSearchQuery, 300);
  }

  componentWillMount() {
    pm.mediator.on('focusSearchBox', this.focusSearchBox);
    pm.mediator.on('focusSidebar', this.focus);
    pm.mediator.on('focusCollectionInSideBar', this.handleFocusInCollectionsTab);
    pm.settings.on('setSetting:activeSidebarSection', this.handleTabChange);
  }

  componentWillUnmount() {
    pm.mediator.off('focusSearchBox', this.focusSearchBox);
    pm.mediator.off('focusSidebar', this.focus);
    pm.mediator.off('focusCollectionInSideBar', this.handleFocusInCollectionsTab);
    pm.settings.off('setSetting:activeSidebarSection', this.handleTabChange);
  }

  getKeymapHandlers() {
    return Object(__WEBPACK_IMPORTED_MODULE_10__services_TabShortcutsService__["a" /* getTabShortcuts */])();
  }

  focus() {
    if (this.state.activeTab === 'history') {
      _.invoke(this, 'refs.history.__wrappedComponent.focus');
    } else
    if (this.state.activeTab === 'collections') {
      _.invoke(this, 'refs.collections.focus');
    }
  }

  handleNextItem() {
    if (this.state.activeTab === 'history') {
      _.invoke(this, 'refs.history.__wrappedComponent.focus');
      _.invoke(this, 'refs.history.__wrappedComponent.selectNext');
    } else
    if (this.state.activeTab === 'collections') {
      _.invoke(this, 'refs.collections.focus');
      _.invoke(this, 'refs.collections.focusNext');
    }
  }

  handleTabChange(tab, cb) {
    if (tab === this.state.activeTab) {
      _.isFunction(cb) && cb();
      return;
    }
    this.setState({ activeTab: _.includes(['history', 'collections'], tab) ? tab : 'history' }, () => {
      this.focus();
      _.isFunction(cb) && cb();
      pm.settings.setSetting('activeSidebarSection', tab);
    });
  }

  handleFocusInCollectionsTab(collectionId, collectionDetailsTab) {
    // delay in rendering the collection in list hence the timeout
    setTimeout(() => {
      this.handleTabChange('collections', () => {
        _.invoke(this, 'refs.collections.focusCollection', collectionId, collectionDetailsTab);
      });
    }, 500);
  }

  focusSearchBox() {
    _.invoke(this, 'refs.filter.focus');
  }


  handleSearchChange(query) {
    this.setState({ searchQuery: query });
    this.triggerSidebarSearchQueryDebounced(query);
  }

  /**
     * update the ui store state
     * this is inside a debounced handler to debounce the derivations
     *
     * @param {String} query
     * @memberof RequesterLeftSidebarContainer
     */
  triggerSidebarSearchQuery(query) {
    this.store.setSearchQuery(query);
  }

  handleSearchCancel() {
    this.store.setSearchQuery('');
  }

  getSidebarContainerClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'requester-left-sidebar': true,
      'is-hidden': !this.state.isOpen });

  }

  getSidebarContentClasses(view) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'requester-left-sidebar__tab-content': true,
      'requester-left-sidebar__tab-content-history-container': this.state.activeTab === 'history',
      'requester-left-sidebar__tab-content-collections-container': this.state.activeTab === 'collections',
      'is-hidden': this.state.activeTab !== view });

  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_keymaps_KeyMaps__["a" /* default */], { keyMap: pm.shortcuts.getShortcuts(), handlers: this.getKeymapHandlers() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getSidebarContainerClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-left-sidebar__search-container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_XPaths_XPath__["a" /* default */], { identifier: 'filter' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Inputs__["b" /* Input */], {
                ref: 'filter',
                placeholder: 'Filter',
                inputStyle: 'search',
                onChange: this.handleSearchChange,
                onCancel: this.handleSearchCancel,
                query: this.state.searchQuery,
                onDownArrow: this.handleNextItem }))),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-left-sidebar__tabs-container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Tabs__["b" /* Tabs */], {
                type: 'primary',
                fluid: true,
                defaultActive: 'collections',
                activeRef: this.state.activeTab,
                onChange: this.handleTabChange },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_XPaths_XPath__["a" /* default */], { identifier: 'historyTab' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Tabs__["a" /* Tab */], { refKey: 'history', fluid: true },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'History'))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_XPaths_XPath__["a" /* default */], { identifier: 'collectionTab' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Tabs__["a" /* Tab */], { refKey: 'collections', fluid: true },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Collections'))))),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-left-sidebar__tab-content-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getSidebarContentClasses('history') },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_XPaths_XPath__["a" /* default */], { identifier: 'history', isVisible: this.state.activeTab === 'history' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__history_HistorySidebarContainer__["a" /* default */], { ref: 'history' }))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getSidebarContentClasses('collections') },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_XPaths_XPath__["a" /* default */], { identifier: 'collection', isVisible: this.state.activeTab === 'collections' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__collections_CollectionSidebarContainer__["a" /* default */], { ref: 'collections' })))))));






  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollectionSidebarMenuContainer__ = __webpack_require__(2973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CollectionSidebarListContainer__ = __webpack_require__(2975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_archivedResource_ArchivedResource__ = __webpack_require__(2652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__ = __webpack_require__(520);
var _class;





let


CollectionSidebarContainer = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class CollectionSidebarContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.store = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore');
    this.focus = this.focus.bind(this);
    this.focusCollection = this.focusCollection.bind(this);
    this.focusNext = this.focusNext.bind(this);
  }

  focus() {
    _.invoke(this, 'refs.list.focus');
  }

  focusCollection(collectionId, CollectionSidebarContainer) {
    _.invoke(this, 'refs.list.focusCollection', collectionId, CollectionSidebarContainer);
  }

  focusNext() {
    let collection = _.head(this.store.collections);
    _.invoke(this, 'refs.list.handleSelect', collection.id);
  }

  render() {
    let ActiveWorkspaceStore = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore');
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar', onClick: this.focus },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionSidebarMenuContainer__["a" /* default */], null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__CollectionSidebarListContainer__["a" /* default */], {
            ref: 'list' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_archivedResource_ArchivedResource__["a" /* default */], {
          archivedResources: ActiveWorkspaceStore,
          label: 'COLLECTIONS',
          showWarning: true,
          onClick: __WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["f" /* openArchivedCollections */] })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarMenuContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_collections_sidebar_CollectionSidebarMenu__ = __webpack_require__(2974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_XPaths_XPath__ = __webpack_require__(27);


let
CollectionSidebarMenuContainer = class CollectionSidebarMenuContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { currentSortType: pm.settings.getSetting('sidebarCollectionsSortType') || 'name' };

    this.handleNewCollectionClick = this.handleNewCollectionClick.bind(this);
    this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
  }

  handleNewCollectionClick() {
    pm.mediator.trigger('showNewCollectionModal');
  }

  handleSortTypeChange(nextType) {
    this.setState({ currentSortType: nextType }, () => {
      pm.settings.setSetting('sidebarCollectionsSortType', nextType);
    });
    pm.mediator.trigger('sidebarSortChange', nextType);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_XPaths_XPath__["a" /* default */], { identifier: 'header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_collections_sidebar_CollectionSidebarMenu__["a" /* default */], {
          currentSortType: this.state.currentSortType,
          onNewCollectionClick: this.handleNewCollectionClick,
          onSortTypeChange: this.handleSortTypeChange })));



  }};

/***/ }),

/***/ 2974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_XPaths_XPath__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_CollectionAddIcon__ = __webpack_require__(2725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_services_DashboardService__ = __webpack_require__(520);
var _class;






let


CollectionSidebarMenu = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class CollectionSidebarMenu extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
    this.handleNewCollectionClick = this.handleNewCollectionClick.bind(this);
  }

  handleNewCollectionClick(value) {
    this.props.onNewCollectionClick && this.props.onNewCollectionClick(value);
  }

  handleSortTypeChange(nextType) {
    this.props.onSortTypeChange && this.props.onSortTypeChange(nextType);
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    isLoggedIn = currentUser.isLoggedIn;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-menu' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-menu__actions' },













          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_XPaths_XPath__["a" /* default */], { identifier: 'collectionTrash' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                onClick: __WEBPACK_IMPORTED_MODULE_7__models_services_DashboardService__["i" /* openCollectionsTrash */],
                tooltip: isLoggedIn ? 'Recover your deleted collections' : 'Only signed in users can recover deleted collections',
                disabled: !isLoggedIn,
                type: 'text' }, 'Trash')),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_XPaths_XPath__["a" /* default */], { identifier: 'addCollection' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                className: 'collection-sidebar-menu__actions-new-collection-wrapper',
                onClick: this.handleNewCollectionClick,
                tooltip: 'New collection' },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_CollectionAddIcon__["a" /* default */], { className: 'collection-sidebar-menu__actions-new-collection' }))))));





  }}) || _class;

/***/ }),

/***/ 2975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarListContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CollectionSidebarListItemContainer__ = __webpack_require__(2976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_collections_CollectionSidebarListEmptyItem__ = __webpack_require__(2988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_keymaps_KeyMaps__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_CollectionSidebarService__ = __webpack_require__(2673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_EditorService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_EditorUtils__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_EditorUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__utils_EditorUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_empty_states_CollectionSidebarEmptyShell__ = __webpack_require__(2989);
var _class;













let


CollectionSidebarListContainer = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["a" /* observer */])(_class = class CollectionSidebarListContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      collections: [],
      filter: 'all',
      filterQuery: '',
      sortType: pm.settings.getSetting('sidebarCollectionsSortType') || 'name' };


    this.focusNext = this.focusNext.bind(this);
    this.focusPrev = this.focusPrev.bind(this);
    this.focusCollection = this.focusCollection.bind(this);
    this.expandItem = this.expandItem.bind(this);
    this.collapseItem = this.collapseItem.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.cutItem = this.cutItem.bind(this);
    this.copyItem = this.copyItem.bind(this);
    this.pasteItem = this.pasteItem.bind(this);
    this.duplicateItem = this.duplicateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.renameItem = this.renameItem.bind(this);
    this.handleRename = this.handleRename.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDuplicate = this.handleDuplicate.bind(this);
    this.handleSidebarSortChange = this.handleSidebarSortChange.bind(this);
    this.handlePreviewRequestDebounced = _.debounce(this.openPreviewRequest, 300, { leading: true });
  }

  getKeyMapHandlers() {
    return {
      nextItem: pm.shortcuts.handle('nextItem', this.focusNext),
      prevItem: pm.shortcuts.handle('prevItem', this.focusPrev),
      expandItem: pm.shortcuts.handle('expandItem', this.expandItem),
      collapseItem: pm.shortcuts.handle('collapseItem', this.collapseItem),
      select: pm.shortcuts.handle('select', this.selectItem),
      cut: pm.shortcuts.handle('cut', this.cutItem),
      copy: pm.shortcuts.handle('copy', this.copyItem),
      paste: pm.shortcuts.handle('paste', this.pasteItem),
      duplicate: pm.shortcuts.handle('duplicate', this.duplicateItem),
      delete: pm.shortcuts.handle('delete', this.deleteItem),
      rename: pm.shortcuts.handle('rename', this.renameItem),
      search: pm.shortcuts.handle('search') };

  }

  focus() {
    let list = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.list);
    list && list.focus();
  }

  openPreviewRequest(id) {
    let reqResource = Object(__WEBPACK_IMPORTED_MODULE_10__utils_EditorUtils__["requestResourceId"])({ id });
    __WEBPACK_IMPORTED_MODULE_9__services_EditorService__["a" /* default */].open(reqResource);
    pm.mediator.trigger('hideCollectionBrowser');
  }

  focusCollection(collectionId, collectionDetailsTab) {
    _.invoke(this, `refs[${collectionId}].focusCollection`, collectionId, collectionDetailsTab);
  }

  focusNext(e) {
    e && e.preventDefault();
    Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').focusNextItem();
    let activeItem = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem;
    if (!activeItem || activeItem.type !== 'request') {
      this.handlePreviewRequestDebounced.cancel && this.handlePreviewRequestDebounced.cancel();
      return;
    }
    this.handlePreviewRequestDebounced(activeItem.id);
  }

  focusPrev(e) {
    e && e.preventDefault();

    Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').focusPreviousItem();
    let activeItem = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem;
    if (!activeItem || activeItem.type !== 'request') {
      this.handlePreviewRequestDebounced.cancel && this.handlePreviewRequestDebounced.cancel();
      return;
    }
    this.handlePreviewRequestDebounced(activeItem.id);
  }

  expandItem(e) {
    e && e.preventDefault();

    let CollectionSidebarUIStore = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore'),
    activeItem = CollectionSidebarUIStore.activeItem;

    if (!activeItem) {
      return;
    }

    CollectionSidebarUIStore.openItem({ id: activeItem.id, type: activeItem.type });
  }

  collapseItem(e) {
    e && e.preventDefault();

    let CollectionSidebarUIStore = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore'),
    activeItem = CollectionSidebarUIStore.activeItem,
    activeItemStore;

    if (!activeItem) {
      return;
    }

    // if item is open, close the item
    if (CollectionSidebarUIStore.isOpen(activeItem.id)) {
      return CollectionSidebarUIStore.closeItem({ id: activeItem.id, type: activeItem.type });
    }

    // if item is already closed, focus the parent
    activeItemStore = CollectionSidebarUIStore.findItem(activeItem);

    if (!activeItemStore) {
      return;
    }

    if (activeItemStore.parent && CollectionSidebarUIStore.isOpen(activeItemStore.parent.id)) {
      return CollectionSidebarUIStore.closeItem({ id: activeItemStore.parent.id, type: activeItemStore.parent.type });
    }

    if (activeItemStore.parent) {
      CollectionSidebarUIStore.focusItem(_.pick(activeItemStore.parent, ['id', 'type']));
    }
  }

  getActiveCollection() {
    return Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeCollection;
  }

  selectItem(e) {
    _.invoke(this, `refs[${this.getActiveCollection()}].selectItem`, e);
  }

  cutItem() {
    _.invoke(this, `refs[${this.getActiveCollection()}].cutItem`);
  }

  copyItem() {
    _.invoke(this, `refs[${this.getActiveCollection()}].copyItem`);
  }

  pasteItem() {
    _.invoke(this, `refs[${this.getActiveCollection()}].pasteItem`);
  }

  duplicateItem() {
    _.invoke(this, `refs[${this.getActiveCollection()}].duplicateItem`);
  }

  deleteItem(e) {
    _.invoke(this, `refs[${this.getActiveCollection()}].deleteItem`, e);
  }

  renameItem() {
    _.invoke(this, `refs[${this.getActiveCollection()}].renameItem`);
  }

  handleRename() {
    this.focus();
  }

  handleSelect(collectionId, cb) {
    Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').focusItem({
      id: collectionId,
      type: 'collection' });

    cb && cb();
  }

  handleDuplicate(id, type) {
    Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').focusItem({ id, type });
    if (type !== 'request') {
      return;
    }
    this.openPreviewRequest(id);
  }

  handleSidebarSortChange(type) {
    this.setState({ sortType: type });
  }

  sortCollections(collections) {
    let splitCollections = _.partition(collections, collection => {
      return collection.favorite;
    });

    let favoritedCollections = splitCollections[0];
    let regularCollections = splitCollections[1];

    let sortedFavoritedCollections = _.sortBy(favoritedCollections, collection => {
      if (this.state.sortType === 'name') {
        let collectionName = collection.name || '';
        return collectionName.toLowerCase();
      }

      // else {
      //   return -collection.get('updatedAt');
      // }
    });

    let sortedRegularCollections = _.sortBy(regularCollections, collection => {
      if (this.state.sortType === 'name') {
        let collectionName = collection.name || '';
        return collectionName.toLowerCase();
      }

      // else {
      //   return -collection.get('updatedAt');
      // }
    });

    return sortedFavoritedCollections.concat(sortedRegularCollections);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ 'collection-sidebar-list': true });
  }

  render() {
    let collections = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').collections,
    isHydrating = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionStore').isHydrating;

    if (_.isEmpty(collections)) {
      let query = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('RequesterSidebarStore').searchQuery;
      return isHydrating ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_empty_states_CollectionSidebarEmptyShell__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_collections_CollectionSidebarListEmptyItem__["a" /* default */], { query: query });
    }

    let activeItem = _.get(Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore'), 'activeItem.id');
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_keymaps_KeyMaps__["a" /* default */], { handlers: this.getKeyMapHandlers() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses(), 'data-filter': this.state.filter, ref: 'list' },

          _.map(collections, collection => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__["a" /* default */], { identifier: collection.id, key: collection.id },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CollectionSidebarListItemContainer__["a" /* default */], {
                  ref: collection.id,
                  collectionId: collection.id,
                  onSelect: this.handleSelect,
                  onDuplicate: this.handleDuplicate,
                  collection: collection,
                  onDelete: this.focusPrev,
                  onRename: this.handleRename,
                  isFocused: collection.id === activeItem })));



          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarListItemContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_collections_sidebar_CollectionSidebarListItem__ = __webpack_require__(2977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_CollectionSidebarService__ = __webpack_require__(2673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_services_DocumenterService__ = __webpack_require__(2625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_EditorService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_EditorUtils__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_EditorUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__utils_EditorUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_services_APIService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__ = __webpack_require__(2585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_CollectionActionsUtil__ = __webpack_require__(2674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stores_get_store__ = __webpack_require__(7);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;















let


CollectionSidebarListItemContainer = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class CollectionSidebarListItemContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      collection: [],
      selectedItems: [],
      isExpanded: false,
      isEditing: false,
      isCollectionSidebarVisible: false };


    // query cache
    this.currentQuery = '';
    this.cachedOpenItems = [];

    this.focusCollection = this.focusCollection.bind(this);
    this.handleCollectionBrowserOpened = this.handleCollectionBrowserOpened.bind(this);
    this.handleCollectionBrowserClosed = this.handleCollectionBrowserClosed.bind(this);
    this.handleDropdownActionSelect = this.handleDropdownActionSelect.bind(this);
    this.toggleCollectionBrowser = this.toggleCollectionBrowser.bind(this);
    this.handleDragDrop = this.handleDragDrop.bind(this);
    this.handleItemToggle = this.handleItemToggle.bind(this);
    this.handleCollectionImported = this.handleCollectionImported.bind(this);
    this.handleCollectionFavoriteToggle = this.handleCollectionFavoriteToggle.bind(this);
    this.handleRequestActions = this.handleRequestActions.bind(this);
    this.handleRequestActionsDebounced = _.debounce(this.handleRequestActions, 300, { leading: true });
  }

  componentWillMount() {
    this.attachMediatorListeners();
  }

  componentWillUnmount() {
    this.detachMediatorListeners();
  }

  attachMediatorListeners() {
    pm.mediator.on('collectionBrowserOpened', this.handleCollectionBrowserOpened);
    pm.mediator.on('collectionBrowserClosed', this.handleCollectionBrowserClosed);
  }

  detachMediatorListeners() {
    pm.mediator.off('collectionBrowserOpened', this.handleCollectionBrowserOpened);
    pm.mediator.off('collectionBrowserClosed', this.handleCollectionBrowserClosed);
  }

  focusCollection(collectionId, collectionDetailsTab = 'Documentation') {
    Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').focusItem({
      id: collectionId,
      type: 'collection' });

    pm.mediator.trigger('showCollectionBrowser', collectionId, collectionDetailsTab);
    return true;
  }

  getActiveItemId() {
    return _.get(Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore'), ['activeItem', 'id']);
  }

  selectItem(e) {
    let activeItem = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem;
    if (this.state.isEditing || _.isEmpty(activeItem)) {
      return;
    }

    e && e.preventDefault();

    let isRequest = activeItem.type === 'request';
    isRequest && this.handleRequestActions(activeItem.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_SELECT */], { returnKey: true });
  }

  cutItem() {
    let itemToCut = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem;

    switch (itemToCut.type) {
      case 'request':
      case 'folder':
        if (!this.props.collection.isEditable) {
          return pm.toasts.error('You do not have permissions required to perform the action.');
        }
        break;
      default: // collection cut is not supported
        return;}


    pm.clipboard.cutItem(Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem, this.props.collection.id);
  }

  copyItem() {
    pm.clipboard.copyItem(Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem, this.props.collection.id);
  }

  pasteItem() {
    let clipboard = pm.clipboard.getClipboard();

    if (_.isEmpty(clipboard)) {
      return false;
    }

    let destination = {
      collection: this.props.collection.id,
      id: Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem.id,
      type: Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem.type };


    if (!this.props.collection.isEditable) {
      return pm.toasts.error('You do not have permissions required to perform the action.');
    }

    pm.clipboard.pasteItem(destination);
    Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').focusItem({
      id: destination.id,
      type: destination.type });

  }

  duplicateItem() {
    let {
      subscribed,
      write } =
    this.state.collection,
    canEdit = !subscribed || subscribed && write;

    let activeItem = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem;

    if (!canEdit && activeItem.type !== 'collection') {
      return pm.toasts.error('You do not have permissions required to edit this collection.');
    }

    if (activeItem.type === 'collection') {
      // We're working with a collection
      this.handleCollectionActions(this.props.collection.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);
    } else
    {
      // We're working with something inside the collection
      if (activeItem.type === 'folder') {
        return this.handleFolderActions(activeItem.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);
      }

      if (activeItem.type === 'request') {
        return this.handleRequestActions(activeItem.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);
      }
    }
    this.renameItem(false);
  }

  deleteItem(e) {
    let activeItem = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem;
    if (this.state.isEditing || _.isEmpty(activeItem)) {
      return;
    }

    e && e.preventDefault();

    let collection = this.props.collection;

    if (activeItem.type === 'request') {
      if (collection.isEditable) {
        return this.handleRequestActions(activeItem.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);
      }
      return pm.toasts.error('You do not have permissions required to delete this request.');
    }

    if (activeItem.type === 'folder') {
      if (collection.isEditable) {
        return this.handleFolderActions(activeItem.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);
      }
      return pm.toasts.error('You do not have permissions required to delete this folder.');
    }

    if (collection.isDeletable) {
      return this.handleCollectionActions(activeItem.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);
    }
    return pm.toasts.error('You do not have permissions required to delete this collection.');
  }

  renameItem(isEditing) {
    this.setState({ isEditing: _.isUndefined(isEditing) ? !this.state.isEditing : isEditing }, () => {
      !this.state.isEditing && _.invoke(this, 'props.onRename');
    });
  }

  handleItemToggle(item, isOpen) {
    this.props.onSelect(this.props.collectionId);
    let CollectionSidebarUIStore = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore');

    isOpen ? CollectionSidebarUIStore.openItem(item) : CollectionSidebarUIStore.toggleItem(item);
  }

  /**
     * computes and returns the nextState.openItems
     * @param  {Array}   item   flattenedNode
     * @param  {Boolean} isOpen [optional] boolean to force open/close.
     *                          toggles if not provided.
     * @return {Array}          nextState.openItems
     */


  toggleCollectionBrowser() {
    if (this.state.isExpanded) {
      pm.mediator.trigger('hideCollectionBrowser');
    } else
    {
      pm.mediator.trigger('showCollectionBrowser', this.props.collectionId);
    }
  }

  handleCollectionBrowserOpened(id) {
    if (id === this.props.collection.id && !this.state.isExpanded) {
      this.setState({ isExpanded: true });
      return;
    }

    if (id !== this.props.collection.id && this.state.isExpanded) {
      this.setState({ isExpanded: false });
      return;
    }
  }

  handleCollectionBrowserClosed() {
    this.state.isExpanded && this.setState({ isExpanded: false });
  }

  handleDropdownActionSelect(type, id, action, modifiers) {
    if (type === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */]) {
      this.handleCollectionActions(id, action, modifiers);
    } else
    if (type === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */]) {
      this.handleFolderActions(id, action, modifiers);
    } else
    if (type === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */]) {
      this.handleRequestActions(id, action, modifiers);
    }
  }

  handleCollectionActions(id, action, modifiers) {
    Object(__WEBPACK_IMPORTED_MODULE_12__utils_CollectionActionsUtil__["a" /* default */])(id, action, modifiers, { origin: 'sidebar' }, () => {
      if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]) {
        _.isFunction(this.props.onDelete) && this.props.onDelete();
      } else
      if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_RENAME */]) {
        this.renameItem(false);
      } else
      if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */]) {
        _.isFunction(this.props.onDelete) && this.props.onDelete();
      } else
      if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["r" /* ACTION_TYPE_PUBLISH_DOCS */]) {
        __WEBPACK_IMPORTED_MODULE_6__models_services_DocumenterService__["a" /* default */].getDocumentationPublishURL(this.props.collection, (err, publishUrl) => {
          if (!err) {
            Object(__WEBPACK_IMPORTED_MODULE_9__modules_services_APIService__["u" /* openAuthenticatedRoute */])(publishUrl);
          }
        });
      }
    });
  }

  handleFolderActions(id, action, modifiers) {
    let collection = this.props.collection;

    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]) {
      pm.mediator.trigger('showEditFolderModal', id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]) {
      let duplicateFolderEvent = {
        name: 'duplicate',
        namespace: 'folder',
        data: { folder: { id } } };

      Object(__WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__["a" /* default */])(duplicateFolderEvent).
      then(response => {
        let duplicatedFolderEvent = Object(__WEBPACK_IMPORTED_MODULE_10__modules_model_event__["b" /* findEvents */])(response.response, { name: 'created_deep_at', namespace: 'folder' }),
        duplicatedFolderId = _.get(Object(__WEBPACK_IMPORTED_MODULE_10__modules_model_event__["d" /* getEventData */])(_.head(duplicatedFolderEvent)), 'folder.id');
        duplicatedFolderId && this.props.onDuplicate(duplicatedFolderId, 'folder');
        if (!_.isEmpty(_.get(response, 'error'))) {
          console.error('Error in duplicating folder', response.error);
          return;
        }

        // @todo response needs the new Id
        // if (newFolderId) {
        //   _.invoke(this, 'props.onSelect');
        //   this.setState({
        //     activeItem: {
        //       id: newFolderId,
        //       type: 'folder'
        //     }
        //   });
        // }
      }).
      catch(err => {
        console.error('Error in pipeline while duplicating folder', err);
      });
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]) {
      pm.mediator.trigger('showDeleteFolderModal', id, () => {
        _.isFunction(this.props.onDelete) && this.props.onDelete();
      });
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */]) {
      this.handleCreateRequest(Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('FolderStore').find(id));
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]) {
      pm.mediator.trigger('showAddFolderModal', collection.id, id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_RENAME */]) {
      let updateFolderEvent = {
        name: 'update',
        namespace: 'folder',
        data: { id, name: modifiers.name } };


      Object(__WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__["a" /* default */])(updateFolderEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          console.error('Error in renaming folder', response.error);
          return;
        }
        pm.mediator.trigger('focusSidebar');
        this.renameItem(false);
      }).
      catch(err => {
        console.error('Error in pipeline while renaming folder', err);
      });
    }
  }

  handleRequestActions(id, action, modifiers = {}) {
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]) {
      pm.mediator.trigger('editCollectionRequest', id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]) {

      let duplicateRequestEvent = {
        name: 'duplicate',
        namespace: 'request',
        data: { request: { id } } };

      Object(__WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__["a" /* default */])(duplicateRequestEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          console.error('Error in duplicating request', response.error);
          return;
        }

        let duplicatedRequestEvent = Object(__WEBPACK_IMPORTED_MODULE_10__modules_model_event__["b" /* findEvents */])(response.response, { name: 'created', namespace: 'request' }),
        duplicatedRequestId = _.get(Object(__WEBPACK_IMPORTED_MODULE_10__modules_model_event__["d" /* getEventData */])(_.head(duplicatedRequestEvent)), 'id');
        duplicatedRequestId && this.props.onDuplicate(duplicatedRequestId, 'request');
      }).
      catch(err => {
        console.error('Error in pipeline while duplicating request', err);
      });

      // Bulk Analytics event added from controller
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]) {
      pm.mediator.trigger('showDeleteRequestModal', id, () => {
        _.isFunction(this.props.onDelete) && this.props.onDelete();
      });
    } else
    if (_.includes([__WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_OPEN_IN_NEW_TAB */], __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_SELECT */]], action)) {
      let newTabKey = false,
      newTabAction = action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_OPEN_IN_NEW_TAB */],
      isOsxPlatform = _.includes(navigator.platform, 'Mac');

      if (modifiers) {
        newTabKey = modifiers.shiftKey && (isOsxPlatform ? modifiers.metaKey : modifiers.ctrlKey);
      }

      __WEBPACK_IMPORTED_MODULE_5__modules_services_CollectionSidebarService__["a" /* default */].openRequestInTab(id, {
        newTab: newTabKey || newTabAction });

      this.setState({ selectedItems: [id] }, () => {
        Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').focusItem({
          id: id,
          type: 'request' });

        (modifiers.returnKey || newTabAction) && pm.mediator.trigger('focusBuilder');
      });
      pm.mediator.trigger('hideCollectionBrowser');
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_RENAME */]) {
      let updateRequestEvent = {
        name: 'update',
        namespace: 'request',
        data: { id, name: modifiers.name } };


      Object(__WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__["a" /* default */])(updateRequestEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          console.error('Error in renaming request', response.error);
          return;
        }
        pm.mediator.trigger('focusSidebar');
        this.renameItem(false);
      }).
      catch(err => {
        console.error('Error in pipeline while renaming request', err);
      });
    }
  }

  handleCollectionImported(collection) {
    if (this.props.collection.id !== collection.id) {
      return;
    }

    this.handleItemToggle({
      id: this.props.collection.id,
      type: 'collection' },
    true, () => {
      Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this).scrollIntoView(true);
      pm.mediator.trigger('hideCollectionBrowser');
    });
  }

  handleDragDrop(source, destination, position) {
    if (source.id === destination.id) {
      return;
    }

    let moveItemEvent = {};
    if (destination.type === 'request' && source.type === 'request') {
      if (position === 'on') {
        position = 'before';
      }
      moveItemEvent = {
        name: 'move',
        namespace: 'request',
        data: {
          model: 'request',
          request: { id: source.id },
          [position]: {
            model: destination.type,
            modelId: destination.id } } };



    } else

    if (destination.type === 'folder' && source.type === 'folder') {
      if (position === 'on') {
        position = 'target';
      }
      moveItemEvent = {
        name: 'move',
        namespace: source.type,
        data: {
          model: source.type,
          [source.type]: { id: source.id },
          [position]: {
            model: destination.type,
            modelId: destination.id } } };



    } else

    if (destination.type === 'folder' && source.type === 'request') {
      if (position === 'on') {
        position = 'target';
      }
      moveItemEvent = {
        name: 'move',
        namespace: source.type,
        data: {
          model: source.type,
          [source.type]: { id: source.id },
          target: {
            model: destination.type,
            modelId: destination.id } } };



    } else

    if (destination.type === 'collection' && _.includes(['request', 'folder'], source.type)) {
      moveItemEvent = {
        name: 'move',
        namespace: source.type,
        data: {
          model: source.type,
          [source.type]: { id: source.id },
          target: {
            model: destination.type,
            modelId: destination.id } } };



    }

    Object(__WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__["a" /* default */])(moveItemEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        pm.toasts.error(`Something went wrong while moving this ${source.type}`);
        return;
      }
    }).
    catch(err => {
      pm.toasts.error(`Something went wrong while moving this ${source.type}`);
    });
  }

  handleCollectionFavoriteToggle() {
    if (!this.props.collection) {
      return;
    }

    var collectionId = this.props.collection.id,
    isFavorite = this.props.collection.favorite,
    action = !isFavorite ? 'favorite' : 'unfavorite';

    let favoriteCollectionEvent = {
      name: action,
      namespace: 'collection',
      data: { collection: { id: collectionId } },
      meta: { origin: 'collection_browser' } };


    Object(__WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__["a" /* default */])(favoriteCollectionEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        console.error(`Error while ${action} action in collection`, response.error);
        return;
      }
    }).
    catch(err => {
      console.error(`Error in pipeline while ${action} action in collection`, err);
    });
  }

  handleCreateRequest(target) {
    let collection = null,
    folder = null;

    switch (target.type) {
      case 'collection':
        collection = target;
        break;
      case 'folder':
        folder = target;
        break;}


    let initialSelection = {
      target: {
        collection,
        folder } };



    pm.mediator.trigger('showAddToCollectionModal', {}, initialSelection);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_collections_sidebar_CollectionSidebarListItem__["a" /* default */], _extends({
        key: this.props.collectionId },
      _.pick(this.state, [
      'isEditing',
      'isExpanded']), {

        collection: this.props.collection,
        onAddRequest: this.handleCreateRequest,
        onCollectionBrowserToggle: this.toggleCollectionBrowser,
        onCollectionFavorite: this.handleCollectionFavoriteToggle,
        onDragDrop: this.handleDragDrop,
        onDropdownActionSelect: this.handleDropdownActionSelect,
        onItemToggle: this.handleItemToggle,
        isFocused: this.props.isFocused })));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CollectionSidebarListItemHead__ = __webpack_require__(2978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CollectionSidebarListItemFolder__ = __webpack_require__(2984);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;



let


CollectionSidebarListItem = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class CollectionSidebarListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {

    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'collection-sidebar-list-item': true,
      'is-shared': _.get(this.props.collection, 'shared') });

  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__CollectionSidebarListItemHead__["a" /* default */], _extends({},
        _.pick(this.props, [
        'collection',
        'isFocused',
        'isEditing',
        'isExpanded',
        'onCollectionBrowserToggle',
        'onDragDrop',
        'onDropdownActionSelect',
        'onDropdownToggle',
        'onItemToggle']), {

          id: this.props.collection && this.props.collection.id,
          onToggleFavorite: this.props.onCollectionFavorite })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,

          Object(__WEBPACK_IMPORTED_MODULE_4__CollectionSidebarListItemFolder__["a" /* renderChildren */])(this.props.collection, _.pick(this.props, [
          'collection',
          'isEditing',
          'onAddRequest',
          'onDragDrop',
          'onDropdownToggle',
          'onDropdownActionSelect',
          'onItemToggle',
          'selectedItems',
          'isFocused'])))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarListItemHead; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dnd__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_pureRenderDecorator__ = __webpack_require__(2648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_PluralizeHelper__ = __webpack_require__(1067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_InlineInput__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_base_Icons_StarUnfilledIcon__ = __webpack_require__(2979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Icons_StarIcon__ = __webpack_require__(2980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_Icons_CollectionIcon__ = __webpack_require__(1068);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CollectionMetaIcons__ = __webpack_require__(1070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CollectionActionsDropdown__ = __webpack_require__(2981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__base_ContextMenu__ = __webpack_require__(2624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__base_Icons_DownSolidIcon__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__base_Icons_RightSolidIcon__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__ = __webpack_require__(2585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__base_XPaths_XPath__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _dec, _dec2, _class;





















const collectionTarget = {
  canDrop(props) {
    return Boolean(!props.subscribed || props.write);
  },

  drop(props, monitor) {
    const dragId = monitor.getItem().id,
    dropId = props.collection.id;

    if (dragId === dropId) {
      return {};
    }

    return {
      dropItem: {
        id: dropId,
        type: 'collection' } };


  } };let
































































































































CollectionSidebarListItemHead = (_dec = Object(__WEBPACK_IMPORTED_MODULE_13__base_ContextMenu__["a" /* default */])([{ label: 'Share Collection', isVisible(props) {return true;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["w" /* ACTION_TYPE_SHARE */]);} }, { label: 'Modify Permissions', isVisible(props) {return props.collection.isDeletable && props.collection.shared;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["b" /* ACTION_MODIFY_PERMISSIONS */]);} }, { label: 'Rename', shortcut: 'rename', isVisible(props) {return props.collection.isEditable;}, onClick(props, component) {component.decoratedComponentInstance.toggleEditName();} }, { label: 'Edit', isVisible(props) {return props.collection.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]);} }, { label: 'Add Request', isVisible(props) {return props.collection.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */]);} }, { label: 'Add Folder', isVisible(props) {return props.collection.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]);} }, { label: 'Duplicate', shortcut: 'duplicate', onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);} }, { label: 'Export', onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DOWNLOAD */]);} }, { label: 'Monitor Collection', isVisible(props) {return props.collection.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */]);} }, { label: 'Mock Collection', onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */]);} }, { label: 'Publish Docs', isVisible(props) {return props.collection.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["r" /* ACTION_TYPE_PUBLISH_DOCS */]);} }, { label: 'Remove from workspace', onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */]);} }, { label: 'Delete', shortcut: 'delete', isVisible(props) {return props.collection.isDeletable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);} }], monitor => {return { isContextMenuOpen: monitor.isOpen };}), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_1_react_dnd__["DropTarget"])(['collection-sidebar-request-item', 'collection-sidebar-folder-item'], collectionTarget, (connect, monitor) => {return { connectDropTarget: connect.dropTarget(), isDragOver: monitor.isOver({ shallow: true }), canDrop: monitor.canDrop() };}), _dec(_class = _dec2(_class = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["a" /* observer */])(_class = class CollectionSidebarListItemHead extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      showFavorite: true };


    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleDropdownActionSelect = this.handleDropdownActionSelect.bind(this);
    this.handleCollectionBrowserToggle = this.handleCollectionBrowserToggle.bind(this);
    this.toggleEditName = this.toggleEditName.bind(this);
    this.handleCollectionClick = this.handleCollectionClick.bind(this);
    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleEditName = this.handleToggleEditName.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    !this.props.isEditing &&
    nextProps.isEditing &&
    nextProps.isFocused &&
    this.toggleEditName();
  }

  componentWillUpdate(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      let $node = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this);
      $node && $node.scrollIntoViewIfNeeded && $node.scrollIntoViewIfNeeded();
    }
  }

  handleCollectionClick() {
    if (this.props.isContextMenuOpen()) {
      return;
    }

    let collection = this.props.collection;
    this.props.onItemToggle && this.props.onItemToggle({ id: collection.id, type: 'collection' });
  }

  handleDropdownActionSelect(target, id, action) {
    if (action === __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RENAME_TOGGLE */]) {
      this.toggleEditName();
    }
    this.props.onDropdownActionSelect && this.props.onDropdownActionSelect(target, id, action);
  }

  handleDropdownToggle(value) {
    if (value === this.state.dropdownOpen) {
      return;
    }

    this.setState({ dropdownOpen: value });
  }

  handleToggleFavorite(e) {
    e.stopPropagation();
    this.props.onToggleFavorite && this.props.onToggleFavorite(this.props.collection.id);
  }

  handleSubmit(value) {
    this.props.onDropdownActionSelect &&
    this.props.onDropdownActionSelect(
    __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */],
    this.props.collection.id,
    __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_RENAME */],
    { name: value });

  }

  toggleEditName() {
    let collectionItem = this.props.collection;

    if (collectionItem.isEditable) {
      this.refs.inlineInput && this.refs.inlineInput.toggleEdit();
    } else
    {
      pm.toasts.error('You do not have the permissions required to rename this collection.');
    }
  }

  handleToggleEditName(isEditing) {
    if (!isEditing) {
      pm.mediator.trigger('focusSidebar');
    }

    const inlineInput = this.refs.inlineInput;
    if (isEditing && inlineInput) {
      inlineInput.focus();
      inlineInput.selectAll();
    }

    this.setState({ showFavorite: !isEditing });
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_14_classnames___default()({
      'collection-sidebar-list-item__head': true,
      'is-hovered': this.state.dropdownOpen,
      'is-focused': this.props.isFocused,
      'is-drop-hovered': this.props.canDrop && this.props.isDragOver,
      'is-favorited': this.props.collection.favorite });

  }

  handleCollectionBrowserToggle(e) {
    e.stopPropagation();
    this.props.onCollectionBrowserToggle && this.props.onCollectionBrowserToggle();
  }

  getActionsClasses() {
    return __WEBPACK_IMPORTED_MODULE_14_classnames___default()({
      'collection-sidebar-list-item__head__actions': true,
      'is-selected': this.props.isExpanded });

  }

  getToggleBrowserClasses() {
    return __WEBPACK_IMPORTED_MODULE_14_classnames___default()({
      'collection-sidebar-list-item__head__action': true,
      'collection-sidebar-list-item__head__action__browser': true,
      'is-open': this.props.isExpanded });

  }

  getExpandButtonClasses() {
    return __WEBPACK_IMPORTED_MODULE_14_classnames___default()({
      'collection-sidebar-list-item__collection-browser_action-open-icon': this.props.isExpanded,
      'collection-sidebar-list-item__collection-browser_action-close-icon': !this.props.isExpanded });

  }

  render() {
    const { connectDropTarget } = this.props;

    let collectionItem = this.props.collection,
    requestCount = collectionItem.requestCount,
    currentUser = Object(__WEBPACK_IMPORTED_MODULE_18__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    isLoggedIn = currentUser.isLoggedIn,
    isOpen = Object(__WEBPACK_IMPORTED_MODULE_18__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').isOpen(collectionItem.id),
    teamSyncEnabled = currentUser.teamSyncEnabled;
    return connectDropTarget(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: this.getClasses(),
        onClick: this.handleCollectionClick,
        title: collectionItem.name },

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__head__icon-wrapper' },
        isOpen ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__base_Icons_DownSolidIcon__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_Icons_RightSolidIcon__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Icons_CollectionIcon__["a" /* default */], { className: 'icon-collection', size: 'xs' })),

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__base_XPaths_XPath__["a" /* default */], { identifier: 'head' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__head__meta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__head__name__wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_InlineInput__["a" /* default */], {
              className: 'collection-sidebar-list-item__head__name',
              placeholder: 'Collection Name',
              ref: 'inlineInput',
              value: collectionItem.name,
              onSubmit: this.handleSubmit,
              onToggleEdit: this.handleToggleEditName }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__CollectionMetaIcons__["a" /* default */], { collection: collectionItem }),
            this.state.showFavorite &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Buttons__["a" /* Button */], {
                active: collectionItem.favorite,
                className: 'collection-sidebar-list-item__head__favorite-button',
                onClick: this.handleToggleFavorite },


              collectionItem.favorite ?
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Icons_StarIcon__["a" /* default */], {
                className: 'collection-sidebar-list-item__head__favorite-button-icon',
                style: 'secondary' }) :

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_Icons_StarUnfilledIcon__["a" /* default */], { className: 'collection-sidebar-list-item__head__favorite-button-icon' }))),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__head__requests' },
            requestCount, ' ', __WEBPACK_IMPORTED_MODULE_5__utils_PluralizeHelper__["a" /* default */].pluralize({
              count: requestCount,
              singular: 'request',
              plural: 'requests' })))),




      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getActionsClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__base_XPaths_XPath__["a" /* default */], { identifier: 'collectionBrowser' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: this.getToggleBrowserClasses(),
              onClick: this.handleCollectionBrowserToggle },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_Icons_RightSolidIcon__["a" /* default */], { className: this.getExpandButtonClasses() }))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__head__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__base_XPaths_XPath__["a" /* default */], { identifier: 'options' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__CollectionActionsDropdown__["a" /* default */], _extends({},
            _.pick(collectionItem, ['id', 'isEditable', 'isDeletable', 'shared']), {
              isPRO: currentUser.syncEnabled && currentUser.isLoggedIn && currentUser.teamSyncEnabled,
              isSignedIn: isLoggedIn,
              isTeamMember: teamSyncEnabled,
              onSelect: this.handleDropdownActionSelect,
              onToggle: this.handleDropdownToggle })))))));






  }}) || _class) || _class) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = StarUnfilledIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '12', height: '12', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'star-unfilled', d: 'M8 3.208L6.865 6.7H3.194l2.97 2.16-.224.69-.91 2.8L8 10.191l.588.427 2.382 1.732-1.135-3.492.588-.427 2.384-1.73H9.134L8.91 6.01 8 3.208zM8 2c.392 0 .74.253.862.627l.999 3.074h3.232a.908.908 0 0 1 .534 1.64l-2.616 1.9.999 3.071a.908.908 0 0 1-1.396 1.015L8 11.427l-2.615 1.9a.903.903 0 0 1-1.066 0 .906.906 0 0 1-.33-1.014l1-3.073-2.615-1.9a.906.906 0 0 1 .533-1.64h3.231l1-3.073A.907.907 0 0 1 8 2z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#979797', fillRule: 'nonzero', xlinkHref: '#star-unfilled' }));



function StarUnfilledIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = StarIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '12', height: '12', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'star', d: 'M8 2a.907.907 0 0 0-.863.627l-.999 3.072h-3.23a.907.907 0 0 0-.534 1.641l2.614 1.9-.998 3.073a.906.906 0 0 0 1.395 1.014L8 11.427l2.614 1.9a.903.903 0 0 0 1.066 0 .908.908 0 0 0 .33-1.015l-1-3.072 2.617-1.899a.906.906 0 0 0-.534-1.64H9.861l-.999-3.074A.908.908 0 0 0 8 2z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#979797', fillRule: 'nonzero', xlinkHref: '#star' }));



function StarIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 2981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionActionsDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_ShareIcon__ = __webpack_require__(2649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_LockedIcon__ = __webpack_require__(1082);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_RenameIcon__ = __webpack_require__(2623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_EditIcon__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_NewFolderIcon__ = __webpack_require__(2650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_CopyIcon__ = __webpack_require__(1069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Icons_DownloadIcon__ = __webpack_require__(1083);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_Icons_MonitorIcon__ = __webpack_require__(2598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__base_Icons_MockIcon__ = __webpack_require__(2597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__base_Icons_PublishIcon__ = __webpack_require__(2596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__base_Icons_CloseIcon__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__base_Icons_DeleteIcon__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__base_Icons_MoreIcon__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__base_Icons_RequestIcon__ = __webpack_require__(2611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__controllers_ShortcutsList__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__ = __webpack_require__(2585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__base_XPaths_XPath__ = __webpack_require__(27);






















let

CollectionActionsDropdown = class CollectionActionsDropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleShortcutSelect = this.handleShortcutSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getKeymapHandlers() {
    return {
      rename: pm.shortcuts.handle('rename', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RENAME_TOGGLE */])),
      duplicate: pm.shortcuts.handle('duplicate', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */])),
      delete: pm.shortcuts.handle('delete', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */])) };

  }

  handleShortcutSelect(action) {
    pm.mediator.trigger('focusSidebar');
    this.handleSelect(action);
  }

  handleSelect(action) {
    this.props.onSelect && this.props.onSelect(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], this.props.id, action);
  }

  handleToggle(value) {
    this.props.onToggle && this.props.onToggle(value);
  }

  getActions() {
    const currentUser = Object(__WEBPACK_IMPORTED_MODULE_19__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    isLoggedIn = currentUser && currentUser.isLoggedIn,
    {
      isEditable,
      isDeletable,
      shared } =
    this.props;

    return [
    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["w" /* ACTION_TYPE_SHARE */],
      label: 'Share Collection',
      isEnabled: true,
      xpathLabel: 'share',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_ShareIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["w" /* ACTION_TYPE_SHARE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["b" /* ACTION_MODIFY_PERMISSIONS */],
      label: 'Modify permissions',
      isEnabled: isLoggedIn && isDeletable && shared,
      xpathLabel: 'modifyPermissions',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_LockedIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["b" /* ACTION_MODIFY_PERMISSIONS */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RENAME_TOGGLE */],
      label: 'Rename',
      shortcut: 'rename',
      isEnabled: isEditable,
      xpathLabel: 'rename',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_RenameIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RENAME_TOGGLE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */],
      label: 'Edit',
      shortcut: 'edit',
      isEnabled: isEditable,
      xpathLabel: 'edit',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_EditIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */],
      label: 'Add Request',
      isEnabled: isEditable,
      xpathLabel: 'addRequest',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__base_Icons_RequestIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */],
      label: 'Add Folder',
      isEnabled: isEditable,
      xpathLabel: 'addFolder',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_NewFolderIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */],
      label: 'Duplicate',
      shortcut: 'duplicate',
      isEnabled: true,
      xpathLabel: 'duplicate',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_CopyIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DOWNLOAD */],
      label: 'Export',
      isEnabled: true,
      xpathLabel: 'export',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Icons_DownloadIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DOWNLOAD */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */],
      label: 'Monitor Collection',
      isEnabled: isEditable,
      xpathLabel: 'monitor',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_Icons_MonitorIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */],
      label: 'Mock Collection',
      isEnabled: true,
      xpathLabel: 'mock',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__base_Icons_MockIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["r" /* ACTION_TYPE_PUBLISH_DOCS */],
      label: 'Publish Docs',
      isEnabled: isEditable,
      xpathLabel: 'publish',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_Icons_PublishIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["r" /* ACTION_TYPE_PUBLISH_DOCS */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */],
      label: 'Remove from workspace',
      isEnabled: isLoggedIn,
      xpathLabel: 'remove',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__base_Icons_CloseIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */],
      label: 'Delete',
      shortcut: 'delete',
      isEnabled: isDeletable,
      xpathLabel: 'delete',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__base_Icons_DeleteIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_20__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]) }) }];


  }

  getMenuItemClasses(isPRO) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'dropdown-menu-item--pro-disabled': isPRO });
  }

  getMenuItemIconClasses(label) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'dropdown-menu-item-icon': true }, 'menu-icon--' + label);
  }

  getMenuItems() {
    return _.chain(this.getActions()).
    filter('isEnabled').
    map(action => {
      const modifierLabel = action.modifier && action.modifier(this.props.isPRO);

      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
            className: this.getMenuItemClasses(modifierLabel),
            key: action.type,
            refKey: action.type },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__base_XPaths_XPath__["a" /* default */], { identifier: action.xpathLabel },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'collection-action-item' },
              action.icon,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label),

              action.shortcut &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_18__controllers_ShortcutsList__["c" /* getShortcutByName */])(action.shortcut)),


              modifierLabel &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-modifier' }, modifierLabel)))));





    }).value();
  }

  render() {
    let menuItems = this.getMenuItems();

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-dropdown-actions-wrapper' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["a" /* Dropdown */], {
          keyMapHandlers: this.getKeymapHandlers(),
          ref: 'menu',
          onSelect: this.handleSelect,
          onToggle: this.handleToggle,
          className: 'collection-sidebar-actions-dropdown' },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["b" /* DropdownButton */], {
            dropdownStyle: 'nocaret',
            type: 'custom' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_Icons_MoreIcon__["a" /* default */], { className: 'collection-sidebar-collection-dropdown-actions-button' }))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], {
            'align-right': true,
            dropup: 'auto' },

          menuItems)));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
// From react-dnd


function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  if (!previousRef) {
    // When there is no ref on the element, use the new ref directly
    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(element, { ref: newRef });
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(element, {
    ref: function ref(node) {
      _.isFunction(newRef) && newRef(node);
      _.isFunction(previousRef) && previousRef(node);
    } });

}

/* harmony default export */ __webpack_exports__["a"] = (cloneWithRef);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_, process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_ShortcutsList__ = __webpack_require__(1073);
/**
 * Used in ContextMenu to fetch shortcut labels for menu items
 * @private
 */



const shortcuts = Object(__WEBPACK_IMPORTED_MODULE_0__controllers_ShortcutsList__["d" /* getShortcuts */])(),
isDarwin = window ? _.includes(navigator.platform, 'Mac') : process.platform === 'darwin',
getDeleteLabel = () => {
  return isDarwin ? 'Backspace' : 'delete';
};


const getContextMenuShortcutLabel = shortcutKey => {
  const shortcutLabel = _.get(shortcuts, `${shortcutKey}.shortcut`);
  return _.nth(shortcutLabel, 0) === 'del' ? getDeleteLabel() :
  _.isString(shortcutLabel) && shortcutLabel.replace('mod', 'CmdOrCtrl');
};

/* harmony default export */ __webpack_exports__["a"] = (getContextMenuShortcutLabel);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(4)))

/***/ }),

/***/ 2984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export default */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderChildren; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CollectionSidebarListItemRequest__ = __webpack_require__(2985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_pureRenderDecorator__ = __webpack_require__(2648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_ContextMenu__ = __webpack_require__(2624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_InlineInput__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_FolderIcon__ = __webpack_require__(2651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Icons_DownSolidIcon__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_Icons_RightSolidIcon__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FolderActionsDropdown__ = __webpack_require__(2987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__ = __webpack_require__(2585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__ = __webpack_require__(27);
var _dec, _dec2, _dec3, _class;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};




















const FOLDER_ITEM_HEIGHT = 30;

const folderSource = {
  canDrag(props) {
    return Boolean(props.isEditable);
  },

  beginDrag(props) {
    return {
      id: props.id,
      type: 'folder',
      folderId: props.folderId,
      collectionId: props.collectionId };

  },

  endDrag(props, monitor) {
    const dragItem = monitor.getItem(),
    { dropItem, position } = monitor.getDropResult() || {};

    if (_.isUndefined(dropItem)) {
      return;
    }

    props.onDragDrop(dragItem, dropItem, position);
  } };


const folderTarget = {
  hover(props, monitor, component) {
    const dragId = monitor.getItem().id,
    dropId = props.id,
    folderItemComponent = component.getDecoratedComponentInstance();

    if (dragId === dropId || !props.isEditable) {
      return;
    }

    let sourceOffset = monitor.getClientOffset(),
    targetOffset = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(component).getBoundingClientRect(),
    threshold = FOLDER_ITEM_HEIGHT * 0.25,
    bottomThreshold = targetOffset.top + FOLDER_ITEM_HEIGHT - threshold,
    topThreshold = targetOffset.top + threshold;

    if (monitor.getItem().type !== 'request' && sourceOffset.y > bottomThreshold) {
      folderItemComponent.scheduleHoverUpdate('bottom');
    } else
    if (monitor.getItem().type !== 'request' && sourceOffset.y < topThreshold) {
      folderItemComponent.scheduleHoverUpdate('top');
    } else
    if (sourceOffset.y < bottomThreshold && sourceOffset.y > topThreshold) {
      folderItemComponent.scheduleHoverUpdate('on');
    }
  },

  drop(props, monitor, component) {
    const dragId = monitor.getItem().id,
    dropId = props.id;

    if (dragId === dropId || !props.isEditable) {
      return {};
    }

    let sourceOffset = monitor.getClientOffset();
    let targetOffset = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(component).getBoundingClientRect();

    let threshold = targetOffset.height * 0.25;

    let bottomThreshold = targetOffset.bottom - threshold;
    let topThreshold = targetOffset.top + threshold;

    let position;
    if (sourceOffset.y > bottomThreshold) {
      position = 'after';
    } else
    if (sourceOffset.y < topThreshold) {
      position = 'before';
    } else
    {
      position = 'on';
    }

    return {
      dropItem: {
        id: props.id,
        type: 'folder',
        collectionId: props.collectionId,
        folderId: props.folderId },

      position };

  } };


/**
        *
        */
function getBodyClasses(folder, isOpen, props) {
  let isFolder = folder.type == 'folder';

  return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
    'collection-sidebar-list-item__folder__body': isFolder,
    'collection-sidebar-list-item__body': isOpen && !isFolder,
    'is-dragged': props.isDragging });

}

/**
   *
   * @param {*} folder
   * @param {*} props
   */
function renderChildren(folder, props) {
  let CollectionSidebarUIStore = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore'),
  isOpen = CollectionSidebarUIStore.isOpen(folder.id),
  isEmpty = _.isEmpty(folder.ownFolders) && _.isEmpty(folder.ownRequests),
  isFolder = folder.type === 'folder',
  isCollection = folder.type === 'collection';

  if (!isOpen) {
    return null;
  }

  if (isEmpty) {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: getBodyClasses(folder, isOpen, props) },

        isCollection &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__body--empty' }, 'This collection is empty.\xA0',


          folder.isEditable &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__base_Buttons__["a" /* Button */], {
                type: 'text',
                onClick: () => props.onAddRequest(folder) }, 'Add requests'), 'to this collection and create folders to organize them')),










        isFolder &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__body--empty collection-sidebar-list-item__folder__body--empty' }, 'This folder is empty.\xA0',


          folder.isEditable &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__base_Buttons__["a" /* Button */], {
                type: 'text',
                onClick: () => props.onAddRequest(folder) }, 'Add requests'), 'to this folder and create subfolders to organize them'))));











  }

  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: getBodyClasses(folder, isOpen, props) },

      _.chain(folder.ownFolders).
      filter(folder => {
        return CollectionSidebarUIStore.isFiltered(folder.id);
      }).
      map((folder, index) => {
        let isEditable = _.get(props, 'collection.isEditable') || _.get(props, 'isEditable');
        return (
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: `folder/${index}`, key: folder.id },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CollectionSidebarListItemFolder, _extends({},
            _.pick(folder, [
            'id',
            'method',
            'name']),

            _.pick(props, [
            'isEditing',
            'onDragDrop',
            'onDropdownActionSelect',
            'onDropdownToggle',
            'collectionId',
            'folderId',
            'onAddRequest',
            'selectedItems',
            'onItemToggle']), {

              isFocused: folder.id === _.get(CollectionSidebarUIStore, 'activeItem.id'),
              isEditable: isEditable,
              folder: folder,
              isOpen: CollectionSidebarUIStore.isOpen(folder.id),
              isFirstChild: index === 0 }))));



      }).value(),


      _.chain(folder.ownRequests).
      filter(request => {
        return CollectionSidebarUIStore.isFiltered(request.id);
      }).
      map((request, index) => {
        let isEditable = _.get(props, 'collection.isEditable') || _.get(props, 'isEditable');
        return (
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: `request/${index}`, key: request.id },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CollectionSidebarListItemRequest__["a" /* default */], _extends({},
            _.pick(request, [
            'id',
            'method',
            'name']),

            _.pick(props, [
            'isEditing',
            'onDragDrop',
            'onDropdownActionSelect',
            'onDropdownToggle']), {

              collectionId: request.collection,
              folderId: request.folder,
              isFocused: request.id === _.get(CollectionSidebarUIStore, 'activeItem.id'),
              isEditable: isEditable,
              selected: _.includes(props.selectedItems, request.id),
              isFirstChild: index === 0 }))));



      }).value()));



}let















































































CollectionSidebarListItemFolder = (_dec = Object(__WEBPACK_IMPORTED_MODULE_7__base_ContextMenu__["a" /* default */])([{ label: 'Rename', shortcut: 'rename', isVisible(props) {return props.isEditable;}, onClick(props, component) {component.decoratedComponentInstance.decoratedComponentInstance.toggleEditName();} }, { label: 'Edit', isVisible(props) {return props.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]);} }, { label: 'Add Request', isVisible(props) {return props.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */]);} }, { label: 'Add Folder', isVisible(props) {return props.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]);} }, { label: 'Duplicate', shortcut: 'duplicate', isVisible(props) {return props.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);} }, { label: 'Delete', shortcut: 'delete', isVisible(props) {return props.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);} }], monitor => {return { isContextMenuOpen: monitor.isOpen };}), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_3_react_dnd__["DropTarget"])(['collection-sidebar-request-item', 'collection-sidebar-folder-item'], folderTarget, (connect, monitor) => {return { connectDropTarget: connect.dropTarget(), isDragOver: monitor.isOver({ shallow: true }) };}), _dec3 = Object(__WEBPACK_IMPORTED_MODULE_3_react_dnd__["DragSource"])('collection-sidebar-folder-item', folderSource, (connect, monitor) => {return { connectDragSource: connect.dragSource(), connectDragPreview: connect.dragPreview(), isDragging: monitor.isDragging() };}), _dec(_class = _dec2(_class = _dec3(_class = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* observer */])(_class = class CollectionSidebarListItemFolder extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      dropHoverTop: false,
      dropHoverBottom: false,
      dropHover: false,
      isHovered: false };


    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleItemToggle = this.handleItemToggle.bind(this);
    this.handleDropDownActionSelect = this.handleDropDownActionSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleEditName = this.handleToggleEditName.bind(this);
    this.setDropHoverTop = this.setDropHoverTop.bind(this);
    this.setDropHoverBottom = this.setDropHoverBottom.bind(this);
    this.setDropHover = this.setDropHover.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseHoverDebounced = _.debounce(this.handleMouseHover, 300, {
      leading: false,
      trailing: true });

  }

  componentWillReceiveProps(nextProps) {
    !this.props.isEditing &&
    nextProps.isEditing &&
    nextProps.isFocused &&
    this.toggleEditName();
  }

  componentWillUpdate(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      let $node = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);
      $node && $node.scrollIntoViewIfNeeded && $node.scrollIntoViewIfNeeded();
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestedFrame);
    this.handleMouseHoverDebounced.cancel();
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'collection-sidebar-list-item__entity': true,
      'collection-sidebar-list-item__folder': true,
      'is-drop-hovered-top': this.state.dropHoverTop && this.props.isDragOver,
      'is-drop-hovered-bottom': this.state.dropHoverBottom && this.props.isDragOver });

  }

  getHeadClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'collection-sidebar-list-item__folder__head': true,
      'is-open': this.props.isOpen,
      'is-hovered': this.state.dropdownOpen,
      'is-focused': this.props.isFocused,
      'is-dragged': this.props.isDragging,
      'is-right-above': this.state.dropHover && this.props.isDragOver });

  }

  scheduleHoverUpdate(type) {
    let func = this.setDropHover;
    if (type === 'bottom') {
      func = this.setDropHoverBottom;
    } else
    if (type === 'top') {
      func = this.setDropHoverTop;
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

  setDropHoverTop() {
    !this.state.dropHoverTop &&
    this.setState({
      dropHoverBottom: false,
      dropHoverTop: true,
      dropHover: false });

  }

  setDropHoverBottom() {
    !this.state.dropHoverBottom &&
    this.setState({
      dropHoverBottom: true,
      dropHoverTop: false,
      dropHover: false });

  }

  setDropHover() {
    !this.state.dropHover &&
    this.setState({
      dropHoverBottom: false,
      dropHoverTop: false,
      dropHover: true });

  }

  toggleEditName() {
    if (this.props.isEditable) {
      this.refs.inlineInput && this.refs.inlineInput.toggleEdit();
    } else
    {
      pm.toasts.error('You do not have the permissions required to rename this folder.');
    }
  }

  handleToggleEditName(isEditing) {
    if (!isEditing) {
      pm.mediator.trigger('focusSidebar');
      return;
    }

    const inlineInput = this.refs.inlineInput;
    if (inlineInput) {
      inlineInput.focus();
      inlineInput.selectAll();
    }
  }

  handleItemToggle() {
    if (this.props.isContextMenuOpen()) {
      return;
    }

    this.props.onItemToggle && this.props.onItemToggle({
      id: this.props.id,
      type: 'folder' });

  }

  handleDropDownActionSelect(target, id, action) {
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RENAME_TOGGLE */]) {
      this.toggleEditName();
    }
    this.props.onDropdownActionSelect && this.props.onDropdownActionSelect(target, id, action);
  }

  handleDropdownToggle(value) {
    if (value === this.state.dropdownOpen) {
      return;
    }

    this.setState({ dropdownOpen: value });
  }

  handleSubmit(value) {
    this.props.onDropdownActionSelect && this.props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], this.props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_RENAME */], { name: value });
  }

  getFolderIconClasses() {
    let isOpen = this.props.isOpen;
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'collection-sidebar-list-item__folder__head__icon': true,
      'icon_folder': true });

  }

  handleMouseHover(isHovered) {
    this.setState({ isHovered });
  }

  render() {

    let headClasses = this.getHeadClasses();

    const {
      connectDragSource,
      connectDropTarget,
      connectDragPreview,
      name } =
    this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getClasses(),
          onMouseEnter: this.handleMouseHoverDebounced.bind(this, true),
          onMouseLeave: this.handleMouseHoverDebounced.bind(this, false) }, ' ',

        connectDropTarget(connectDragPreview(connectDragSource(
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            title: name,
            className: headClasses,
            onClick: this.handleItemToggle },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__folder__head__icon-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'nesting-level' }),
            this.props.isOpen ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Icons_DownSolidIcon__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_Icons_RightSolidIcon__["a" /* default */], null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_FolderIcon__["a" /* default */], { className: this.getFolderIconClasses(), size: 'xs' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: 'head' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__folder__head__meta' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_InlineInput__["a" /* default */], {
                className: 'collection-sidebar-list-item__entity__name collection-sidebar-list-item__folder__head__name',
                placeholder: 'Folder Name',
                ref: 'inlineInput',
                value: name,
                onSubmit: this.handleSubmit,
                onToggleEdit: this.handleToggleEditName }))),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__folder__head__actions' },

            (this.state.isHovered || this.state.dropdownOpen || this.props.isOpen) &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: 'folderOption' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__FolderActionsDropdown__["a" /* default */], _extends({},
              _.pick(this.props, ['id', 'isEditable', 'subscribed']), {
                onSelect: this.handleDropDownActionSelect,
                onToggle: this.handleDropdownToggle })))))))),








        renderChildren(this.props.folder, this.props)));



  }}) || _class) || _class) || _class) || _class);



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarListItemRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_RequestMethodHelper__ = __webpack_require__(1241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_pureRenderDecorator__ = __webpack_require__(2648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_ContextMenu__ = __webpack_require__(2624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_InlineInput__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__request_RequestIcon__ = __webpack_require__(1092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RequestActionsDropdown__ = __webpack_require__(2986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__ = __webpack_require__(2585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__base_XPaths_XPath__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _dec, _dec2, _dec3, _class;
















const getMiddleY = component => {
  const elementRect = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(component).getBoundingClientRect();
  return elementRect.top + elementRect.height / 2;
};

const itemSource = {
  canDrag(props) {
    return Boolean(props.isEditable);
  },

  beginDrag(props) {
    return {
      id: props.id,
      type: 'request',
      folderId: props.folderId,
      collectionId: props.collectionId };

  },

  endDrag(props, monitor) {
    const dragItem = monitor.getItem(),
    { dropItem, position } = monitor.getDropResult() || {};

    if (_.isUndefined(dropItem)) {
      return;
    }

    props.onDragDrop(dragItem, dropItem, position);
  } };


const itemTarget = {
  hover(props, monitor, component) {
    const dragId = monitor.getItem().id;
    const dropId = props.id;
    if (dragId === dropId || !props.isEditable) {
      return;
    }

    if (!props.isFirstChild) {
      component.getDecoratedComponentInstance().scheduleHoverUpdate('bottom');
      return;
    }

    // Will only be used for first request in its parent
    if (monitor.getClientOffset().y > getMiddleY(component)) {
      component.getDecoratedComponentInstance().scheduleHoverUpdate('bottom');
    } else
    {
      component.getDecoratedComponentInstance().scheduleHoverUpdate('top');
    }

  },

  drop(props, monitor, component) {
    const dragId = monitor.getItem().id,
    dropId = props.id;

    if (dragId === dropId || !props.isEditable) {
      return {};
    }

    let position = 'after';
    if (props.isFirstChild) {
      position = monitor.getClientOffset().y > getMiddleY(component) ? 'after' : 'before';
    }

    return {
      dropItem: {
        id: props.id,
        type: 'request',
        folderId: props.folderId,
        collectionId: props.collectionId },

      position };

  } };let

































































CollectionSidebarListItemRequest = (_dec = Object(__WEBPACK_IMPORTED_MODULE_6__base_ContextMenu__["a" /* default */])([{ label: 'Open in New Tab', onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], props.id, __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_OPEN_IN_NEW_TAB */]);} }, { label: 'Rename', shortcut: 'rename', isVisible(props) {return props.isEditable;}, onClick(props, component) {component.decoratedComponentInstance.decoratedComponentInstance.toggleEditName();} }, { label: 'Edit', isVisible(props) {return props.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], props.id, __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]);} }, { label: 'Duplicate', shortcut: 'duplicate', isVisible(props) {return props.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], props.id, __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);} }, { label: 'Delete', shortcut: 'delete', isVisible(props) {return props.isEditable;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], props.id, __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);} }], monitor => {return { isContextMenuOpen: monitor.isOpen };}), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_3_react_dnd__["DropTarget"])('collection-sidebar-request-item', itemTarget, (connect, monitor) => {return { connectDropTarget: connect.dropTarget(), isDragOver: monitor.isOver({ shallow: true }) };}), _dec3 = Object(__WEBPACK_IMPORTED_MODULE_3_react_dnd__["DragSource"])('collection-sidebar-request-item', itemSource, (connect, monitor) => {return { connectDragSource: connect.dragSource(), connectDragPreview: connect.dragPreview(), isDragging: monitor.isDragging() };}), _dec(_class = _dec2(_class = _dec3(_class = Object(__WEBPACK_IMPORTED_MODULE_12_mobx_react__["a" /* observer */])(_class = class CollectionSidebarListItemRequest extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      dropHoverTop: false,
      dropHoverBottom: false,
      isHovered: false };


    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleDropdownActionSelect = this.handleDropdownActionSelect.bind(this);
    this.handleRequestSelect = this.handleRequestSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleEditName = this.handleToggleEditName.bind(this);
    this.setDropHoverTop = this.setDropHoverTop.bind(this);
    this.setDropHoverBottom = this.setDropHoverBottom.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseHoverDebounced = _.debounce(this.handleMouseHover, 300, {
      leading: false,
      trailing: true });

  }

  componentWillReceiveProps(nextProps) {
    !this.props.isEditing &&
    nextProps.isEditing &&
    nextProps.isFocused &&
    this.toggleEditName();
  }

  componentWillUpdate(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      let $node = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);
      $node && $node.scrollIntoViewIfNeeded && $node.scrollIntoViewIfNeeded();
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestedFrame);
    this.handleMouseHoverDebounced.cancel();
  }

  scheduleHoverUpdate(type) {
    let func = this.setDropHoverTop;
    if (type === 'bottom') {
      func = this.setDropHoverBottom;
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

  handleDropdownToggle(value) {
    if (value === this.state.dropdownOpen) {
      return;
    }

    this.setState({ dropdownOpen: value });
  }

  handleDropdownActionSelect(action, modifiers) {
    if (action === __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RENAME_TOGGLE */]) {
      this.toggleEditName();
      return;
    }
    this.props.onDropdownActionSelect && this.props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], this.props.id, action, modifiers);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'collection-sidebar-list-item__entity': true,
      'collection-sidebar-list-item__request': true,
      'is-hovered': this.state.dropdownOpen,
      'is-selected': this.props.selected,
      'is-focused': this.props.isFocused,
      'is-dragged': this.props.isDragging,
      'is-drop-hovered-top': this.state.dropHoverTop && this.props.isDragOver,
      'is-drop-hovered-bottom': this.state.dropHoverBottom && this.props.isDragOver,
      'is-active': this.props.selected });

  }

  handleSubmit(value) {
    this.props.onDropdownActionSelect && this.props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], this.props.id, __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_RENAME */], { name: value });
  }

  toggleEditName() {
    if (this.props.isEditable) {
      this.refs.inlineInput && this.refs.inlineInput.toggleEdit();
    } else
    {
      pm.toasts.error('You do not have the permissions required to rename this request.');
    }
  }

  handleToggleEditName(isEditing) {
    if (!isEditing) {
      pm.mediator.trigger('focusSidebar');
      return;
    }

    const inlineInput = this.refs.inlineInput;
    if (inlineInput) {
      inlineInput.focus();
      inlineInput.selectAll();
    }
  }

  handleRequestSelect(e) {
    if (this.props.isContextMenuOpen()) {
      return;
    }

    e.stopPropagation();
    let CollectionSidebarUIStore = Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore');


    // if already selected, do nothing, to allow double-click.
    let isOsxPlatform = _.includes(navigator.platform, 'Mac');
    let selected = CollectionSidebarUIStore.isFocused(this.props.id);
    if (selected && !e.shiftKey && (isOsxPlatform ? !e.metaKey : !e.ctrlKey)) {
      return;
    }

    let modifiers = {
      ctrlKey: e.ctrlKey,
      metaKey: e.metaKey,
      shiftKey: e.shiftKey };

    this.handleDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_SELECT */], modifiers);

    CollectionSidebarUIStore.focusItem({
      id: this.props.id,
      type: 'request' });

  }

  getStyles() {
    let depth = this.props.depth > 0 ? this.props.depth : 1;
    return { paddingLeft: (depth - 1) * 10 + 'px' };
  }

  handleMouseHover(isHovered) {
    this.setState({ isHovered });
  }

  render() {

    let { method = 'GET' } = this.props;

    const {
      connectDragSource,
      connectDropTarget,
      connectDragPreview,
      name } =
    this.props;

    return connectDropTarget(connectDragPreview(connectDragSource(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: this.getClasses(),
        style: this.getStyles(),
        title: name,
        onClick: this.handleRequestSelect,
        onMouseEnter: this.handleMouseHoverDebounced.bind(this, true),
        onMouseLeave: this.handleMouseHoverDebounced.bind(this, false) },

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__request_RequestIcon__["a" /* default */], { method: method }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_XPaths_XPath__["a" /* default */], { identifier: 'head' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__request__meta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_InlineInput__["a" /* default */], {
            className: 'collection-sidebar-list-item__entity__name collection-sidebar-list-item__request__name',
            placeholder: 'Request Name',
            ref: 'inlineInput',
            value: name,
            onSubmit: this.handleSubmit,
            onToggleEdit: this.handleToggleEditName }))),



      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__request__actions' },

        (this.state.isHovered || this.state.dropdownOpen) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_XPaths_XPath__["a" /* default */], { identifier: 'requestOption' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__RequestActionsDropdown__["a" /* default */], _extends({},
          _.pick(this.props, ['id', 'isEditable']), {
            onSelect: this.handleDropdownActionSelect,
            onToggle: this.handleDropdownToggle }))))))));






  }}) || _class) || _class) || _class) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestActionsDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_NewWindowIcon__ = __webpack_require__(2717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_RenameIcon__ = __webpack_require__(2623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_EditIcon__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_CopyIcon__ = __webpack_require__(1069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_DeleteIcon__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_MoreIcon__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__controllers_ShortcutsList__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__ = __webpack_require__(2585);
var _class;












let


RequestActionsDropdown = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class RequestActionsDropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleShortcutSelect = this.handleShortcutSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getKeymapHandlers() {
    return {
      rename: pm.shortcuts.handle('rename', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RENAME_TOGGLE */])),
      duplicate: pm.shortcuts.handle('duplicate', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */])),
      delete: pm.shortcuts.handle('delete', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */])) };

  }

  handleShortcutSelect(action, e) {
    pm.mediator.trigger('focusSidebar');
    this.handleSelect(action);
  }

  handleSelect(action) {
    this.props.onSelect && this.props.onSelect(action);
  }

  handleToggle(isOpen) {
    this.props.onToggle && this.props.onToggle(isOpen);
  }

  getDropDownActionClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'collection-sidebar-request-actions-dropdown': true,
      'collection-sidebar-request-actions-dropdown--single-menu': !this.props.isEditable });

  }

  render() {

    const isWriteable = this.props.isEditable;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-request-dropdown-actions-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["a" /* Dropdown */], {
            ref: 'menu',
            keyMapHandlers: this.getKeymapHandlers(),
            onSelect: this.handleSelect,
            onToggle: this.handleToggle,
            className: this.getDropDownActionClasses() },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["b" /* DropdownButton */], { dropdownStyle: 'nocaret', type: 'custom' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Buttons__["a" /* Button */], null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_MoreIcon__["a" /* default */], { className: 'collection-sidebar-request-dropdown-actions-button' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true, dropup: 'auto' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_OPEN_IN_NEW_TAB */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_NewWindowIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--newtab' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Open in New Tab')),


            isWriteable && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RENAME_TOGGLE */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_RenameIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--rename' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Rename'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_11__controllers_ShortcutsList__["c" /* getShortcutByName */])('rename'))),



            isWriteable && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_EditIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--edit' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Edit')),



            isWriteable && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_CopyIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--duplicate' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Duplicate'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_11__controllers_ShortcutsList__["c" /* getShortcutByName */])('duplicate'))),



            isWriteable && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_DeleteIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--delete' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Delete'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_11__controllers_ShortcutsList__["c" /* getShortcutByName */])('delete')))))));






  }}) || _class;

/***/ }),

/***/ 2987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderActionsDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_MoreIcon__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_RenameIcon__ = __webpack_require__(2623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_EditIcon__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_NewFolderIcon__ = __webpack_require__(2650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_CopyIcon__ = __webpack_require__(1069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_DeleteIcon__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Icons_RequestIcon__ = __webpack_require__(2611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__controllers_ShortcutsList__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__ = __webpack_require__(2585);
var _class;












let


FolderActionsDropdown = __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default()(_class = class FolderActionsDropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleShortcutSelect = this.handleShortcutSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getKeymapHandlers() {
    return {
      rename: pm.shortcuts.handle('rename', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RENAME_TOGGLE */])),
      duplicate: pm.shortcuts.handle('duplicate', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */])),
      delete: pm.shortcuts.handle('delete', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */])) };

  }

  handleShortcutSelect(action, e) {
    pm.mediator.trigger('focusSidebar');
    this.handleSelect(action);
  }

  handleSelect(action) {
    this.props.onSelect && this.props.onSelect(__WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], this.props.id, action);
  }

  handleToggle(value) {
    this.props.onToggle && this.props.onToggle(value);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-folder-dropdown-actions-wrapper' },

        this.props.isEditable &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["a" /* Dropdown */], {
            ref: 'menu',
            keyMapHandlers: this.getKeymapHandlers(),
            onSelect: this.handleSelect,
            onToggle: this.handleToggle,
            className: 'collection-sidebar-folder-actions-dropdown' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["b" /* DropdownButton */], { dropdownStyle: 'nocaret', type: 'custom' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_MoreIcon__["a" /* default */], { className: 'collection-sidebar-folder-dropdown-actions-button' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true, dropup: 'auto' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RENAME_TOGGLE */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_RenameIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--rename' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Rename'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_11__controllers_ShortcutsList__["c" /* getShortcutByName */])('rename'))),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_EditIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--edit' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Edit')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Icons_RequestIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--new-request' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Add Request')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_NewFolderIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--new-folder' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Add Folder')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_CopyIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--duplicate' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Duplicate'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_11__controllers_ShortcutsList__["c" /* getShortcutByName */])('duplicate'))),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_DeleteIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--delete' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Delete'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_11__controllers_ShortcutsList__["c" /* getShortcutByName */])('delete')))))));






  }}) || _class;

/***/ }),

/***/ 2988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarListEmptyItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_CollectionAddIcon__ = __webpack_require__(2725);


let

CollectionSidebarListEmptyItem = class CollectionSidebarListEmptyItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleCreateCollection = this.handleCreateCollection.bind(this);
  }

  handleCreateCollection() {
    this.props.onClose && this.props.onClose();
    pm.mediator.trigger('showNewCollectionModal', id => {
      pm.mediator.trigger('focusCollectionInSideBar', id);
    });
  }

  getContents() {
    if (this.props.query) {
      return `No results found for "${this.props.query}"`;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__illustration-wrapper entity-empty__illustration-wrapper--collections' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections-empty__illustration' })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'You don\u2019t have any collections'),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' }, 'Collections let you group related requests, making them easier to access and run.'),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'text',
              onClick: this.handleCreateCollection },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Icons_CollectionAddIcon__["a" /* default */], {
              style: 'secondary',
              className: 'create-collection-icon' }), 'Create a collection'))));






  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-empty-item' },
        this.getContents()));


  }};

/***/ }),

/***/ 2989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const NUMBER_OF_COLLECTION_ITEMS = 5;

const CollectionSidebarEmptyShell = () => {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-empty-shell' },

      _.times(NUMBER_OF_COLLECTION_ITEMS, index => {
        return (
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: index, className: 'collection-sidebar-empty-shell--collection' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-empty-shell--collection__dropdown' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-empty-shell--collection__icon' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-empty-shell--collection__info' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'collection-sidebar-empty-shell--collection__info--name',
                style: { 'width': `${Math.floor(Math.random() * 74) + 50}px` } }),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'collection-sidebar-empty-shell--collection__info--count',
                style: { 'width': `${Math.floor(Math.random() * 27) + 30}px` } }))));




      })));



};

/* harmony default export */ __webpack_exports__["a"] = (CollectionSidebarEmptyShell);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ArchiveIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(49);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16px', height: '16px', viewBox: '0 0 16 16' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'archive', d: 'M15,3 L15,14.8461538 C15,15.4834055 14.5522847,16 14,16 L2,16 C1.44771525,16 1,15.4834055 1,14.8461538 L1,3 C0.44771525,3 6.76353751e-17,2.66421356 0,2.25 L0,0.75 C-6.76353751e-17,0.335786438 0.44771525,7.6089797e-17 1,0 L15,0 C15.5522847,-7.6089797e-17 16,0.335786438 16,0.75 L16,2.25 C16,2.66421356 15.5522847,3 15,3 Z M2,8 L2,9 L14,9 L14,8 L2,8 Z M6,4 L6,6 L10,6 L10,4 L6,4 Z M6,11 L6,13 L10,13 L10,11 L6,11 Z' })),

    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g', { id: 'icon/archive-filled', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('mask', { id: 'mask-2', fill: 'white' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { xlinkHref: '#archive' })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { id: 'Combined-Shape', fill: '#979797', xlinkHref: '#archive' })));




function ArchiveIcon(props) {
    return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
        props, {
            icon: icon })));


}

/***/ }),

/***/ 2991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySidebarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_model_event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_pipelines_user_action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_history_HistorySidebar__ = __webpack_require__(2992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_HistoryService__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_button_CreateNewXService__ = __webpack_require__(2626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_HistoryActionsConstants__ = __webpack_require__(2613);
var _class;











let



HistorySidebarContainer = __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside___default()(_class = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class HistorySidebarContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.store = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('HistorySidebarStore');

    this.focus = this.focus.bind(this);
    this.handleLoadRequestDebounced = _.debounce(this.handleLoadRequest, 100, { leading: true }).bind(this);
    this.handleActiveRequestChange = this.handleActiveRequestChange.bind(this);
    this.handleAddToCollection = this.handleAddToCollection.bind(this);
    this.handleDeleteMultiple = this.handleDeleteMultiple.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.handleSelectHistoryAction = this.handleSelectHistoryAction.bind(this);
  }

  componentWillUnmount() {
    pm.mediator.off('activeRequestChanged', this.handleActiveRequestChange);
  }

  componentWillMount() {
    pm.mediator.on('activeRequestChanged', this.handleActiveRequestChange);
  }

  focus() {
    _.invoke(this, 'refs.history.focus');
  }

  selectNext() {
    _.invoke(this, 'refs.history.selectNext');
  }

  handleActiveRequestChange(requestId) {
    if (!this.store.itemExists(requestId)) {
      this.store.resetSelection();
      return;
    }

    this.store.resetSelection([requestId]);
  }

  handleClickOutside(e) {
    if (!_.isEmpty(this.store.getSelectedItems())) {
      let modalElm = document.getElementsByClassName('ReactModal__Content')[0];
      if (modalElm && modalElm.contains(e.target)) {
        return;
      }
      this.store.resetSelection();
    }
  }

  handleLoadRequest(id, newTab = false) {
    if (!id) {
      return;
    }

    __WEBPACK_IMPORTED_MODULE_7__modules_services_HistoryService__["a" /* default */].openHistoryInTab(id, {
      newTab: newTab,
      preview: true });

  }

  handleItemSelect(id, modifiers = {}) {
    let isOsxPlatform = _.includes(navigator.platform, 'Mac');

    if (modifiers.shiftKey && (isOsxPlatform ? modifiers.metaKey : modifiers.ctrlKey)) {
      this.handleLoadRequestDebounced(id, true); // open request in a new tab
      pm.mediator.trigger('focusSidebar');
    } else
    if (modifiers.ctrlKey || modifiers.metaKey) {// select multiple requests
      if (this.store.isItemSelected(id)) {
        this.store.unselectItem(id);
      } else
      {
        this.store.selectItem(id);
      }
    } else
    {
      this.handleLoadRequestDebounced(id, false); // open request in current tab
      this.store.resetSelection([id]);
    }
  }

  handleAddToCollection(options = {}) {
    const { requests } = options;
    let selectedItems = _.isEmpty(requests) ? this.store.getSelectedItems() : requests;
    if (_.isEmpty(selectedItems)) {
      return;
    }

    __WEBPACK_IMPORTED_MODULE_7__modules_services_HistoryService__["a" /* default */].
    convertHistoryToRequests(selectedItems).
    then(requests => {
      if (_.size(requests) === 1) {
        requests[0] && pm.mediator.trigger('showAddToCollectionModal', requests[0], { from: options.from });
      } else
      {
        pm.mediator.trigger('addRequestsToCollection', requests, options);
      }
    });
  }

  handleToggleHistoryResponseSaving() {
    let workspaceSettings = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').settings,
    enableHistoryResponseSaving = workspaceSettings && workspaceSettings.enableHistoryResponseSaving,

    // compute the new value after toggle
    newSettings = { enableHistoryResponseSaving: !enableHistoryResponseSaving };

    return Object(__WEBPACK_IMPORTED_MODULE_5__modules_pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__modules_model_event__["a" /* createEvent */])('updateSettings', 'workspace', { id: Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id, settings: newSettings })).
    catch(e => {
      let errorMessage = e.isFriendly ? e.message : 'Could not update workspace settings';

      pm.toasts.error(errorMessage, { dedupeId: 'ws-settings-error' });
    });
  }

  handleDeleteMultiple(ref, nextSelection) {
    if (ref === 'all') {
      Object(__WEBPACK_IMPORTED_MODULE_5__modules_pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__modules_model_event__["a" /* createEvent */])('deleteMultiple', 'history', null, null, null));
    } else
    if (ref === 'selected') {
      Object(__WEBPACK_IMPORTED_MODULE_5__modules_pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__modules_model_event__["a" /* createEvent */])('deleteMultiple', 'history', { ids: this.store.getSelectedItems() }, null, null));
    }

    if (nextSelection && nextSelection.id) {
      this.store.resetSelection([nextSelection.id]);
    } else {
      this.store.resetSelection();
    }
  }

  handleLoadMore() {
    this.store.loadMore();
  }

  handleAddRequestToService(options, event) {
    const {
      requests,
      defaultCollectionName = '',
      from = '' } =
    options;

    let selectedItems = _.isEmpty(requests) ? this.store.getSelectedItems() : requests;
    if (_.isEmpty(selectedItems)) {
      return;
    }

    __WEBPACK_IMPORTED_MODULE_7__modules_services_HistoryService__["a" /* default */].
    convertHistoryToRequests(selectedItems).
    then(requests => {

      if (!_.isEmpty(requests)) {
        let opts = {
          name: defaultCollectionName,
          from };


        __WEBPACK_IMPORTED_MODULE_8__new_button_CreateNewXService__["a" /* default */].create(event, { requests, opts }, null, { from: 'history_sidebar' });
      }
    });
  }

  handleSelectHistoryAction(action, options) {
    switch (action) {
      case __WEBPACK_IMPORTED_MODULE_9__constants_HistoryActionsConstants__["e" /* ACTION_TYPE_SAVE */]:
        this.handleAddToCollection(options);
        break;

      case __WEBPACK_IMPORTED_MODULE_9__constants_HistoryActionsConstants__["d" /* ACTION_TYPE_MONITOR */]:
        this.handleAddRequestToService(options, 'openCreateNewMonitorModal');
        break;

      case __WEBPACK_IMPORTED_MODULE_9__constants_HistoryActionsConstants__["b" /* ACTION_TYPE_DOCUMENT */]:
        this.handleAddRequestToService(options, 'openCreateNewDocumentationModal');
        break;

      case __WEBPACK_IMPORTED_MODULE_9__constants_HistoryActionsConstants__["c" /* ACTION_TYPE_MOCK */]:
        this.handleAddRequestToService(options, 'openCreateNewMockModal');
        break;

      case __WEBPACK_IMPORTED_MODULE_9__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */]:
        Object(__WEBPACK_IMPORTED_MODULE_5__modules_pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__modules_model_event__["a" /* createEvent */])('deleteMultiple', 'history', { ids: options.requests }, null, null));
        break;

      default:return;}

  }

  render() {
    let workspaceSettings = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').settings,
    enableHistoryResponseSaving = workspaceSettings && workspaceSettings.enableHistoryResponseSaving;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_history_HistorySidebar__["a" /* default */], {
        store: this.store,
        enableHistoryResponseSaving: enableHistoryResponseSaving,
        onSelectHistoryAction: this.handleSelectHistoryAction,
        onDeleteMultiple: this.handleDeleteMultiple,
        onSelect: this.handleItemSelect,
        onLoadMore: this.handleLoadMore,
        onSaveCurrentRequest: this.handleAddToCollection,
        onToggleHistoryResponseSaving: this.handleToggleHistoryResponseSaving,
        ref: 'history' }));


  }}) || _class) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HistorySidebarMenu__ = __webpack_require__(2993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HistorySidebarList__ = __webpack_require__(2994);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__archivedResource_ArchivedResource__ = __webpack_require__(2652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_keymaps_KeyMaps__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_HistoryActionsConstants__ = __webpack_require__(2613);
var _class;







let


HistorySidebar = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class HistorySidebar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.store = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('HistorySidebarStore');
    this.historyStore = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('HistoryStore');

    this.focus = this.focus.bind(this);
    this.groupItems = this.groupItems.bind(this);
    this.selectNext = this.selectNext.bind(this);
    this.selectPrev = this.selectPrev.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.multiselectNextItem = this.multiselectNextItem.bind(this);
    this.multiselectPrevItem = this.multiselectPrevItem.bind(this);
  }

  getKeyMapHandlers() {
    return {
      groupItems: pm.shortcuts.handle('groupItems', this.groupItems),
      nextItem: pm.shortcuts.handle('nextItem', this.selectNext),
      prevItem: pm.shortcuts.handle('prevItem', this.selectPrev),
      delete: pm.shortcuts.handle('delete', this.deleteItem),
      multiselectNextItem: pm.shortcuts.handle('multiselectNextItem', this.multiselectNextItem),
      multiselectPrevItem: pm.shortcuts.handle('multiselectPrevtItem', this.multiselectPrevItem),
      select: pm.shortcuts.handle('select', this.selectItem),
      search: pm.shortcuts.handle('search'),
      saveCurrentRequest: e => {
        e && e.stopPropagation();
        this.props.onSaveCurrentRequest();
      } };

  }

  focus() {
    let $history = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.history);
    $history && $history.focus();
  }

  selectNext(e) {
    e && e.preventDefault();
    let nextItemId = this.store.getNextItem();
    nextItemId && _.invoke(this, 'props.onSelect', nextItemId);
  }

  selectPrev(e) {
    e && e.preventDefault();
    let prevItemId = this.store.getPrevItem();
    prevItemId && _.invoke(this, 'props.onSelect', prevItemId);
  }

  deleteItem(e) {
    e && e.preventDefault();
    let prevItemId = this.store.getPrevItem();
    console.warn('prevItemId fix');
    _.invoke(this, 'props.onDeleteMultiple', 'selected', prevItemId);
  }

  selectItem(e) {
    e && e.preventDefault();
    _.invoke(this, 'refs.list.selectItem');
  }

  multiselectNextItem(e) {
    e && e.preventDefault();
    let nextItemId = this.store.getNextItem();
    nextItemId && _.invoke(this, 'props.onSelect', nextItemId, { metaKey: true });
  }

  multiselectPrevItem(e) {
    e && e.preventDefault();
    let prevItemId = this.store.getPrevItem();
    prevItemId && _.invoke(this, 'props.onSelect', prevItemId, { metaKey: true });
  }

  groupItems() {
    this.props.onSelectHistoryAction && this.props.onSelectHistoryAction(__WEBPACK_IMPORTED_MODULE_8__constants_HistoryActionsConstants__["e" /* ACTION_TYPE_SAVE */], {
      requests: this.store.getSelectedItems(),
      from: 'history_multiple' });

  }

  render() {
    let ActiveWorkspaceStore = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore');
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_keymaps_KeyMaps__["a" /* default */], {
          handlers: this.getKeyMapHandlers(),
          keyMap: pm.shortcuts.getShortcuts() },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'history-sidebar',
            ref: 'history' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__HistorySidebarMenu__["a" /* default */], {
              historySidebar: this.store,
              historyStore: this.historyStore,
              enableHistoryResponseSaving: this.props.enableHistoryResponseSaving,
              onDeleteMultiple: this.props.onDeleteMultiple,
              onSelectHistoryAction: this.props.onSelectHistoryAction,
              onToggleHistoryResponseSaving: this.props.onToggleHistoryResponseSaving }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__HistorySidebarList__["a" /* default */], {
              ref: 'list',
              onDeleteMultiple: this.props.onDeleteMultiple,
              onLoadMore: this.props.onLoadMore,
              onSelect: this.props.onSelect,
              onSelectHistoryAction: this.props.onSelectHistoryAction })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__archivedResource_ArchivedResource__["a" /* default */], { archivedResources: ActiveWorkspaceStore, label: 'HISTORIES' }))));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySidebarMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_AddIcon__ = __webpack_require__(2595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_DeleteIcon__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HistoryItemActionsDropdown__ = __webpack_require__(2675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_ToggleSwitch__ = __webpack_require__(2612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_HistoryActionsConstants__ = __webpack_require__(2613);
var _class;







let


HistorySidebarMenu = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* observer */])(_class = class HistorySidebarMenu extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false };


    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleDropdownActionSelect = this.handleDropdownActionSelect.bind(this);
    this.handleAddToCollectionClick = this.handleAddToCollectionClick.bind(this);
    this.handleDeleteSelected = this.handleDeleteSelected.bind(this);
  }

  handleAddToCollectionClick(e) {
    e.stopPropagation();
    this.props.onSelectHistoryAction(__WEBPACK_IMPORTED_MODULE_7__constants_HistoryActionsConstants__["e" /* ACTION_TYPE_SAVE */], {
      requests: this.props.historySidebar.getSelectedItems(),
      from: 'history_multiple' });

  }

  handleDeleteClick() {
    pm.mediator.trigger('showDeleteHistoryModal', () => {
      this.props.onDeleteMultiple && this.props.onDeleteMultiple('all');
    }, _.size(this.props.items));
  }

  handleDropdownToggle(value) {
    if (value === this.state.dropdownOpen) {
      return;
    }

    this.setState({ dropdownOpen: value });
  }

  handleDropdownActionSelect(action) {
    if (action === __WEBPACK_IMPORTED_MODULE_7__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */]) {
      pm.mediator.trigger('showDeleteHistoryModal', () => {
        this.props.onDeleteMultiple('selected');
      }, _.size(this.props.historyStore.values));
      return;
    }
    this.props.onSelectHistoryAction(action, {
      requests: this.props.historySidebar.getSelectedItems(),
      from: 'history_multiple' });

  }

  handleDeleteSelected() {
    this.handleDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_7__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */]);
  }

  render() {
    let selectionSize = this.props.historySidebar.selectedItems.size,
    historySize = _.size(this.props.historyStore.values);

    if (selectionSize > 1) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu__left' },
            `${selectionSize} requests selected`),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu__right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu__actions-delete-history-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
                  className: 'history-sidebar-list-item__button__add',
                  type: 'icon',
                  onClick: this.handleAddToCollectionClick },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Icons_AddIcon__["a" /* default */], { size: 'xs', className: 'history-sidebar-list-item__actions__add' })),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
                  className: 'history-sidebar-list-item__button__delete',
                  type: 'icon',
                  onClick: this.handleDeleteSelected },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_DeleteIcon__["a" /* default */], { size: 'xs', className: 'history-sidebar-list-item__actions__delete' })),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__HistoryItemActionsDropdown__["a" /* default */], {
                count: selectionSize,
                onSelect: this.handleDropdownActionSelect,
                onToggle: this.handleDropdownToggle })))));





    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu__left' },

          historySize > 0 &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu__actions-delete-history-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
                type: 'text',
                onClick: this.handleDeleteClick }, 'Clear all'))),






        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu__right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu--save-response-label' }, 'Save Responses'),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu--save-response-toggle' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_ToggleSwitch__["a" /* default */], {
              isActive: this.props.enableHistoryResponseSaving,
              onClick: this.props.onToggleHistoryResponseSaving,
              activeLabel: '',
              inactiveLabel: '' })))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySidebarList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HistorySidebarListItemGroup__ = __webpack_require__(2995);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HistorySidebarListEmptyItem__ = __webpack_require__(2996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__empty_states_HistorySidebarEmptyShell__ = __webpack_require__(2997);
var _class;





let


HistorySidebarList = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class HistorySidebarList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.store = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('HistorySidebarStore');

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollDebounced = _.debounce(this.handleScroll, 300);
  }

  handleScroll() {
    let node = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);

    if (node.scrollTop + node.offsetHeight === node.scrollHeight) {
      this.props.onLoadMore && this.props.onLoadMore();
    }
  }

  render() {
    let isHydrating = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('HistoryStore').isHydrating;

    if (_.isEmpty(this.store.groupedByDateCreated)) {
      let query = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('RequesterSidebarStore').searchQuery;
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list' },

          isHydrating ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__empty_states_HistorySidebarEmptyShell__["a" /* default */], null) :
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__HistorySidebarListEmptyItem__["a" /* default */], { query: query })));



    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: 'history-sidebar-list',
          ref: 'history',
          onScroll: this.handleScrollDebounced },


        _.map(this.store.groupedByDateCreated, group => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__HistorySidebarListItemGroup__["a" /* default */], {
              group: group,
              selections: this.store.getSelectedItems(),
              key: group.name,
              onSelect: this.props.onSelect,
              onSelectHistoryAction: this.props.onSelectHistoryAction }));


        })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySidebarListItemGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HistoryListItem__ = __webpack_require__(2726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HistoryItemActionsDropdown__ = __webpack_require__(2675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_AddIcon__ = __webpack_require__(2595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_DeleteIcon__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_HistoryActionsConstants__ = __webpack_require__(2613);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;










let


HistorySidebarListItemGroup = __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default()(_class = class HistorySidebarListItemGroup extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      dropdownOpen: false };


    this.store = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('HistorySidebarStore');

    this.handleToggleGroup = this.handleToggleGroup.bind(this);
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleDropdownActionSelect = this.handleDropdownActionSelect.bind(this);
    this.handleAddRequestToCollectionClick = this.handleAddRequestToCollectionClick.bind(this);
    this.handleRemoveRequest = this.handleRemoveRequest.bind(this);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'history-sidebar-list-item-group': true });
  }

  getCollapseButtonClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'caret': true,
      'is-closed': !this.state.isOpen });

  }

  getMetaClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'history-sidebar-list-item-group__meta': true,
      'is-hovered': this.state.dropdownOpen });

  }

  handleToggleGroup() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleDropdownToggle(value) {
    if (value === this.state.dropdownOpen) {
      return;
    }

    this.setState({ dropdownOpen: value });
  }

  handleDropdownActionSelect(action) {
    let requests = _.map(this.props.group.items, 'id');
    let modalOptions = {
      requests,
      defaultCollectionName: this.props.group.name,
      from: 'history_date_group' };

    if (action === __WEBPACK_IMPORTED_MODULE_10__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */]) {
      pm.mediator.trigger('showDeleteHistoryModal', () => {
        this.props.onSelectHistoryAction(action, modalOptions);
      }, _.size(this.props.group.items));
      return;
    }
    this.props.onSelectHistoryAction(action, modalOptions);
  }

  handleAddRequestToCollectionClick(e) {
    e.stopPropagation();
    this.handleDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_10__constants_HistoryActionsConstants__["e" /* ACTION_TYPE_SAVE */]);
  }

  handleRemoveRequest(e) {
    e.stopPropagation();
    this.handleDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_10__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */]);
  }

  render() {
    let hideActions = _.size(this.store.getSelectedItems()) > 1;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getMetaClasses(),
            onClick: this.handleToggleGroup },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item-group__name' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__["a" /* default */], { className: this.getCollapseButtonClasses() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, this.props.group.name)),


          !hideActions &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item-group__actions' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                className: 'history-sidebar-list-item__button__add',
                type: 'icon',
                onClick: this.handleAddRequestToCollectionClick },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_AddIcon__["a" /* default */], { size: 'xs', className: 'history-sidebar-list-item__actions__add' })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                className: 'history-sidebar-list-item__button__delete',
                type: 'icon',
                onClick: this.handleRemoveRequest },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_DeleteIcon__["a" /* default */], { size: 'xs', className: 'history-sidebar-list-item__actions__delete' })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__HistoryItemActionsDropdown__["a" /* default */], {
              count: _.size(this.props.group.items),
              onSelect: this.handleDropdownActionSelect,
              onToggle: this.handleDropdownToggle }))),




        this.state.isOpen &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item-group__items' },

          _.map(this.props.group.items, item => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__HistoryListItem__["a" /* default */], _extends({},
              item, {
                hideActions: hideActions,
                key: item.id,
                selected: this.store.isItemSelected(item.id),
                onSelect: this.props.onSelect,
                onSelectHistoryAction: this.props.onSelectHistoryAction })));


          }))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySidebarListEmptyItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_MouseClickIcon__ = __webpack_require__(1076);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lessons_LessonManager__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_LessonAPIService__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_LessonTags__ = __webpack_require__(1086);
var _class;






let


HistorySidebarListEmptyItem = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* observer */])(_class = class HistorySidebarListEmptyItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleShowMeHow = this.handleShowMeHow.bind(this);
  }

  handleShowMeHow() {
    if (!Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn) {
      pm.mediator.trigger('showSignInModal');
      return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_6__modules_services_LessonAPIService__["d" /* fetchTaggedLesson */])(__WEBPACK_IMPORTED_MODULE_7__constants_LessonTags__["a" /* DEBUGGING */], lesson => {
      if (_.isEmpty(lesson)) {
        return;
      }
      __WEBPACK_IMPORTED_MODULE_5__lessons_LessonManager__["a" /* default */].startLesson(lesson);
    });
  }

  getContents() {
    if (this.props.query) {
      return `No results found for "${this.props.query}"`;
    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'You haven\'t sent any requests'),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' }, 'Any request you send in this workspace will appear here.'),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__learn' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'secondary',
              onClick: this.handleShowMeHow },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Icons_MouseClickIcon__["a" /* default */], {
              style: 'secondary',
              className: 'entity-empty__learn__mouse-click-icon' }), 'Show me how'))));






  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-empty-item' },
        this.getContents()));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const NUMBER_OF_HISTORY_ITEMS_PER_SECTION = 5,
NUMBER_OF_SECTIONS = 2;

const HistorySidebarEmptyShell = () => {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-empty-shell' },

      _.times(NUMBER_OF_SECTIONS, sectionIndex => {
        return (
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: sectionIndex, className: 'history-sidebar-empty-shell--section' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-empty-shell--section--title' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-empty-shell--section--title__dropdown' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-empty-shell--section--title__name' })),


            _.times(NUMBER_OF_HISTORY_ITEMS_PER_SECTION, index => {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                    key: index,
                    className: 'history-sidebar-empty-shell--section--item' },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-empty-shell--section--item__icon' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                    className: 'history-sidebar-empty-shell--section--item__url',
                    style: { 'width': `${Math.floor(Math.random() * 74) + 50}px` } })));



            })));



      })));



};

/* harmony default export */ __webpack_exports__["a"] = (HistorySidebarEmptyShell);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = RequesterTabsEmptyShell;
/* harmony export (immutable) */ __webpack_exports__["a"] = RequesterTabContentShell;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/**
                            * 
                            */
function RequesterTabsEmptyShell() {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-builder-header' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tabs-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab is-active' })))));




}

/**
   * 
   */
function RequesterTabContentShell() {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-empty-shell' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-content-panes' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-content-pane' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-contents-top' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'flexed' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'url' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'grouped-buttons' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'btn-item send' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'btn-item save' }))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'flexed' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'request-editor__tabs-wrapper' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'flexed' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'strip' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'strip' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'strip' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'strip' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'strip' })),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'flexed' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'strip' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'strip' })))))),





        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-tab-content-pane' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response-viewer-empty__header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'strip' }))))));





}

/***/ }),

/***/ 3072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Popover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_CloseIcon__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Tooltips__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Markdown__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_UIEventService__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_UIEventConstants__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_PieProgress__ = __webpack_require__(3073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrollparent__ = __webpack_require__(3074);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrollparent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_scrollparent__);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};










const TARGET_VISIBLE_CLASS = 'target-visible';

const defaultState = {
  show: false,
  isDismissable: true,
  placement: 'bottom',
  immediate: true,
  primaryAction: null,
  secondaryAction: null,
  title: '',
  message: '',
  meta: {},
  target: null,
  className: '',
  onDismiss: null,
  dismissEvent: null };let


Popover = class Popover extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor() {
    super();

    this.state = _extends({}, defaultState);

    this.handleOpen = this.handleOpen.bind(this);
    this.dismissPopover = this.dismissPopover.bind(this);

    this.handlePrimaryAction = this.handlePrimaryAction.bind(this);
    this.handleSecondaryAction = this.handleSecondaryAction.bind(this);
    this.handleTargetClick = this.handleTargetClick.bind(this);
  }

  componentWillMount() {
    pm.mediator.on('showPopover', this.handleOpen);
  }

  componentWillUnmount() {
    pm.mediator.off('showPopover', this.handleOpen);
  }

  checkIfPropertyOutOfBoundHorizontally(property, targetCoordinates, parentCoordinates) {
    return targetCoordinates[property] <= parentCoordinates.left ||
    targetCoordinates[property] >= parentCoordinates.right;
  }

  checkIfPropertyOutOfBoundVertically(property, targetCoordinates, parentCoordinates) {
    return targetCoordinates[property] <= parentCoordinates.top ||
    targetCoordinates[property] >= parentCoordinates.bottom;
  }

  /**
     * Scroll an element into view only if placement side of an element is not visible
     * @param {Object} target
     * @param {String} placement
     */
  scrollTargetIfNeeded(target, placement = 'top') {
    let parent = __WEBPACK_IMPORTED_MODULE_9_scrollparent___default()(target),
    targetCoordinates = target.getBoundingClientRect(),
    parentCoordinates = parent.getBoundingClientRect(),
    position = _.head(placement.split('-'));

    if ((position === 'left' || position === 'right') && (

    this.checkIfPropertyOutOfBoundHorizontally(position, targetCoordinates, parentCoordinates) ||
    this.checkIfPropertyOutOfBoundVertically('top', targetCoordinates, parentCoordinates) ||
    this.checkIfPropertyOutOfBoundVertically('bottom', targetCoordinates, parentCoordinates)))
    {

      target.scrollIntoViewIfNeeded();
    } else

    if ((position === 'top' || position === 'bottom') && (

    this.checkIfPropertyOutOfBoundVertically(position, targetCoordinates, parentCoordinates) ||
    this.checkIfPropertyOutOfBoundHorizontally('left', targetCoordinates, parentCoordinates) ||
    this.checkIfPropertyOutOfBoundHorizontally('right', targetCoordinates, parentCoordinates)))
    {

      target.scrollIntoViewIfNeeded();
    }
  }

  /**
     * Target object needs to be given as DOM node itself
     * eg. { target: DOMNode }
     *
     * @param {Object} target
     * @param {Object} renderOptions
     */
  handleOpen({ target }, renderOptions) {
    if (!target || _.isEmpty(renderOptions)) {
      return false;
    }

    // Hack to make reactstrap rerender
    if (this.state.show && renderOptions.show) {
      this.closePopover();
    }

    target.classList.add(TARGET_VISIBLE_CLASS);

    this.scrollTargetIfNeeded(target, renderOptions.placement);

    this.setState(_extends({
      show: true,
      target },
    renderOptions));

    pm.mediator.once(renderOptions.dismissEvent, this.dismissPopover);
  }

  handlePrimaryAction() {
    this.state.primaryAction && this.state.primaryAction.onClick();
    this.closePopover();
  }

  handleSecondaryAction() {
    this.state.secondaryAction && this.state.secondaryAction.onClick();
    this.closePopover();
  }

  dismissPopover() {
    this.state.onDismiss && this.state.onDismiss();
    this.closePopover();
  }

  closePopover() {
    // If a handler needs to be called on dismiss of the popover
    this.state.target && this.state.target.classList.remove(TARGET_VISIBLE_CLASS);
    this.state.dismissEvent && pm.mediator.off(this.state.dismissEvent, this.dismissPopover);
    this.setState(defaultState);
  }

  getActions() {
    const { primaryAction, secondaryAction } = this.state;

    if (primaryAction || secondaryAction) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'popover-actions' },

          secondaryAction &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'popover-secondary-action',
              type: 'secondary',
              size: 'small',
              onClick: this.handleSecondaryAction },

            secondaryAction.label),



          primaryAction &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'popover-primary-action',
              type: 'primary',
              size: 'small',
              onClick: this.handlePrimaryAction },

            primaryAction.label)));




    }
  }

  getPopoverClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ 'popover': true }, this.state.className);
  }

  handleTargetClick() {
    if (!this.state.allowTargetClick) {
      return;
    }
    __WEBPACK_IMPORTED_MODULE_6__services_UIEventService__["a" /* default */].publish(__WEBPACK_IMPORTED_MODULE_7__constants_UIEventConstants__["b" /* ONBOARDING_TARGET_CLICKED */]);
    this.closePopover();
  }

  render() {
    let showMeta = !_.isEmpty(this.state.meta),
    progress = Math.floor(this.state.meta.progress || 0);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'popover-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Tooltips__["a" /* Tooltip */], {
            show: this.state.show,
            target: this.state.target,
            placement: this.state.placement,
            className: 'tooltip-popover',
            immediate: this.state.immediate,
            container: this.state.container,
            onTargetClick: this.handleTargetClick },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Tooltips__["b" /* TooltipBody */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getPopoverClasses(), ref: 'popover' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'popover-content' },

                showMeta &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'popover-step' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'popover-step-title' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_PieProgress__["a" /* default */], { size: 16, progress: progress }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, this.state.meta.headerText)),


                  this.state.isDismissable &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_CloseIcon__["a" /* default */], {
                    className: 'popover-dismiss',
                    size: 'xs',
                    onClick: this.dismissPopover })),




                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'popover-header' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'popover-header-title' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, this.state.title),

                    !showMeta && this.state.isDismissable &&
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_CloseIcon__["a" /* default */], {
                      className: 'popover-dismiss',
                      size: 'xs',
                      onClick: this.dismissPopover }))),




                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'popover-body' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'popover-string' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'popover-markdown-label' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Markdown__["a" /* default */], { source: this.state.message.charAt(0).toUpperCase() + this.state.message.slice(1) })))),



                this.getActions()))))));






  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(9);
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

/***/ 3074:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.Scrollparent = factory();
  }
}(this, function () {
  var regex = /(auto|scroll)/;

  var parents = function (node, ps) {
    if (node.parentNode === null) { return ps; }

    return parents(node.parentNode, ps.concat([node]));
  };

  var style = function (node, prop) {
    return getComputedStyle(node, null).getPropertyValue(prop);
  };

  var overflow = function (node) {
    return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
  };

  var scroll = function (node) {
   return regex.test(overflow(node));
  };

  var scrollParent = function (node) {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return ;
    }

    var ps = parents(node.parentNode, []);

    for (var i = 0; i < ps.length; i += 1) {
      if (scroll(ps[i])) {
        return ps[i];
      }
    }

    return document.scrollingElement || document.documentElement;
  };

  return scrollParent;
}));


/***/ }),

/***/ 525:
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
var factory = __webpack_require__(1116);

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

/***/ 526:
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

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XPathProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XPathManager__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx__ = __webpack_require__(11);






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

/***/ })

});