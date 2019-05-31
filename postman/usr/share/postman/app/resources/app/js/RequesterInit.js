webpackJsonp([21],{

/***/ 1391:
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

/***/ 1393:
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

/***/ 1395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_CollectionStore__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_TeamIcon__ = __webpack_require__(1393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_LockedIcon__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx_react__ = __webpack_require__(13);
var _class;






let

CollectionMetaIcons = Object(__WEBPACK_IMPORTED_MODULE_6_mobx_react__["a" /* observer */])(_class = class CollectionMetaIcons extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const isCollectionEditable = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('PermissionStore').can('edit', 'collection', this.props.collection.id);

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

/***/ 1401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Infobar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Markdown__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_InfobarConstants__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icons_CloseIcon__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Icons_ExclamationIcon__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_UIEventService__ = __webpack_require__(94);








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

/***/ 1404:
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

/***/ 1415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceActionDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_MoreIcon__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_uuid_helper__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_controllers_SyncWorkspaceController__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_UIEventService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_UIEventConstants__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx_react__ = __webpack_require__(13);
var _class;










let


WorkspaceActionDropdown = Object(__WEBPACK_IMPORTED_MODULE_10_mobx_react__["a" /* observer */])(_class = class WorkspaceActionDropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('WorkspaceStore').find(this.props.workspaceId),
    defaultUserWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_5__utils_uuid_helper__["a" /* deterministicUUID */])(`user:${currentUser.id}`),
    defaultTeamWorkspaceId = null;

    if (workspace && workspace.id === defaultUserWorkspaceId) {
      this.setState({ isDefaultWorkspace: true });
      return;
    }

    let teamId = _.get(currentUser, 'team.id', null);
    if (teamId) {
      defaultTeamWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_5__utils_uuid_helper__["a" /* deterministicUUID */])(`team:${teamId}`);

      if (this.props.workspaceId === defaultTeamWorkspaceId) {
        this.setState({ isDefaultWorkspace: true });
      }
    }
  }

  handleShareWorkspace() {
    let workspaceId = this.props.workspaceId,
    workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('WorkspaceStore').find(workspaceId),
    currentUser = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore');

    if (workspace.type === 'personal' && (this.state.isDefaultWorkspace || currentUser.isFreeUser)) {
      __WEBPACK_IMPORTED_MODULE_8__services_UIEventService__["a" /* default */].publish(__WEBPACK_IMPORTED_MODULE_9__constants_UIEventConstants__["d" /* OPEN_INVITE_MODAL */], { workspaceId, source: 'share_ws' });
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

        __WEBPACK_IMPORTED_MODULE_6__modules_controllers_SyncWorkspaceController__["a" /* default */].get({ id: workspaceId }, { populate: ['members'] }).
        then(workspace => {
          pm.mediator.trigger('openWorkspaceDetailsModal', workspace);
        });
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
    let isOffline = !Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('SyncStatusStore').isSocketConnected;
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
    let isOffline = !Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('SyncStatusStore').isSocketConnected,
    disabledState = this.getDisabledState(isOffline),
    workspace = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('WorkspaceStore').find(this.props.workspaceId),
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

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], { type: 'icon', className: 'workspace-actions-dropdown-button' },
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

/***/ 1416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncOfflineStatusBarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sync_SyncOfflineStatusBar__ = __webpack_require__(1435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_RequesterTabConstants__ = __webpack_require__(212);
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




SyncOfflineStatusBarContainer = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["a" /* observer */])(_class = class SyncOfflineStatusBarContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let currentSyncStatus = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('SyncStatusStore').currentSyncStatus,
    notInSync = !Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('SyncStatusStore').isSocketConnected,
    status;

    if (currentSyncStatus === 'connecting') {
      status = 'connecting';
    } else if (!_.includes('insync', 'syncing', 'idle'), currentSyncStatus) {
      status = 'offline';
    }

    let isOpen = notInSync && (
    config[this.props.position].teamCheck ? Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').type === 'team' : true) &&
    !(Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode === __WEBPACK_IMPORTED_MODULE_4__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */] && status === 'offline' && this.props.position === 'builder');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_sync_SyncOfflineStatusBar__["a" /* default */], {
        isOpen: isOpen,
        status: status,
        message: config[this.props.position]['message'][status] }));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Tabs__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_WorkspaceIcon__ = __webpack_require__(1432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WorkspaceSwitcherList__ = __webpack_require__(1433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_sync_SyncOfflineStatusContainer__ = __webpack_require__(1416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_LoadingIndicator__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_util__ = __webpack_require__(20);
var _dec, _class;













let



WorkspaceSwitcher = (_dec = __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default()({ eventCapturingPhase: false }), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class WorkspaceSwitcher extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSwitchWorkspace = this.handleSwitchWorkspace.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
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

            this.props.isLoading &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_LoadingIndicator__["a" /* default */], null),

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


            this.props.isLoading &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_LoadingIndicator__["a" /* default */], null),


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

/***/ 1432:
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

/***/ 1433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcherList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WorkspaceSwitcherListItem__ = __webpack_require__(1434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(13);
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

/***/ 1434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcherListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WorkspaceActionDropdown__ = __webpack_require__(1415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_SuccessIcon__ = __webpack_require__(526);
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

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__WorkspaceActionDropdown__["a" /* default */], {
          workspaceId: this.props.workspace.id,
          onAction: this.handleDropdownAction,
          onToggle: this.handleDropdownToggle })));



  }}) || _class;

/***/ }),

/***/ 1435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Infobar__ = __webpack_require__(1401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_InfobarConstants__ = __webpack_require__(358);




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

/***/ 1436:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var createReactClass = __webpack_require__(653);
var PropTypes = __webpack_require__(11);
var merge = __webpack_require__(79);
var NotificationContainer = __webpack_require__(1438);
var Constants = __webpack_require__(654);
var Styles = __webpack_require__(1441);

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

/***/ 1437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(79);

var emptyObject = __webpack_require__(667);
var _invariant = __webpack_require__(39);

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

/***/ 1438:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var createReactClass = __webpack_require__(653);
var PropTypes = __webpack_require__(11);
var NotificationItem = __webpack_require__(1439);
var Constants = __webpack_require__(654);

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

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(1);
var createReactClass = __webpack_require__(653);
var PropTypes = __webpack_require__(11);
var ReactDOM = __webpack_require__(26);
var Constants = __webpack_require__(654);
var Helpers = __webpack_require__(1440);
var merge = __webpack_require__(79);

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

/***/ 1440:
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

/***/ 1441:
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

/***/ 1442:
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

/***/ 1443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipelines_sync_action__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_UserController__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(6);






const DEFAULT_LIMIT = 10,
POLLING_HEADER_NAME = 'x-polling-interval',
acceptedNotificationTypes = ['toast', 'banner', 'backgroundPush', 'modal'];

let alreadyInitialized = false,
nextPolling = null,
nextPollInterval = null;

/**
                         * Fetches notifications for signed in users
                         *
                         * @private
                         */
async function _fetchSignedInNotifications() {
  let currentUser = await __WEBPACK_IMPORTED_MODULE_2__controllers_UserController__["a" /* default */].get();

  pm.notificationPollingBaseUrl = currentUser.syncserver_url;

  // If the user is signed out and signs back in, we call fetchNotifications
  return _fetchNotifications();
}

/**
  * Attaches online listener
  */
function _attachOnlineListener() {
  pm.mediator.off('appOnline', _fetchSignedInNotifications);
  pm.mediator.on('appOnline', _fetchSignedInNotifications);
}

/**
  * Extracts notifications, filters unread
  * @param { Object } notifications
  */
function _dispatchUnreadNotifications(notifications) {

  _.chain(notifications).
  filter(notification => {
    return notification.data && notification.data.events && !_.some(notification.data.events, { key: 'viewed' });
  }).
  forEach(notification => {
    return _dispatchNotification(notification.data);
  }).
  value();
}

/**
  * Creates the notification event and dispatches user action
  * @param { Object } notification
  */
async function _dispatchNotification(notification) {

  let isUserSignedIn = await _isUserSignedIn(),
  meta = {};

  if (!isUserSignedIn) {
    meta = { source: 'SignedOutUser' };
  }

  // Adding source in meta to distinguish who's triggering the event so that the logic is not dependent on checking if the user is signed in or not.
  let notificationEvent = Object(__WEBPACK_IMPORTED_MODULE_3__model_event__["a" /* createEvent */])('create', 'notification', notification, null, meta);

  return Object(__WEBPACK_IMPORTED_MODULE_1__pipelines_sync_action__["a" /* default */])(notificationEvent);
}

/**
  * Checks if the user is signed
  * @returns { Boolean } isUserSignedIn
  */
async function _isUserSignedIn() {
  let { id } = await __WEBPACK_IMPORTED_MODULE_2__controllers_UserController__["a" /* default */].get();

  return id !== '0';
}

/**
  * Fetches the base URL from S3 bucket
  */
function _fetchBaseUrl() {
  return __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__["a" /* default */].request(pm.notificationPollingConfigUrl).
  then(({ body }) => {
    if (body.config && body.config.notificationsUrl) {
      return body.config.notificationsUrl;
    }

    return pm.notificationPollingBaseUrl;
  }).
  catch(({ error }) => {
    return pm.notificationPollingBaseUrl;
  });
}

/**
  * Function to attach a bootstrap finish listener and trigger fetchNotifications for signed in users
  */
function _attachSyncFinishListener() {
  let syncStatusStore = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('SyncStatusStore');

  syncStatusStore.onSyncAvailable().
  then(() => {
    _attachOnlineListener();

    return _fetchSignedInNotifications();
  });
}

/**
    * Fetches notification from sync URL and sets the next polling interval - clears the poll interval previously set.
    * Also computes headers and params based on user status (Signed in or not)
    */
async function _fetchNotifications() {
  const currentUser = await __WEBPACK_IMPORTED_MODULE_2__controllers_UserController__["a" /* default */].get();

  let { notificationURL, headers } = _computeNotificationURLAndHeaders(currentUser);

  // If the user's status changes before the timeout is triggered, we unset the existing timer
  nextPolling && clearTimeout(nextPolling);

  __WEBPACK_IMPORTED_MODULE_0__utils_HttpService__["a" /* default */].request(notificationURL, {
    headers: headers }).
  then(({ body, headers }) => {
    let nextPoll = parseInt(headers.get(POLLING_HEADER_NAME));

    if (!_.isNaN(nextPoll)) {
      clearTimeout(nextPolling);

      nextPollInterval = nextPoll; // Caching the poll interval
      nextPolling = setTimeout(_fetchNotifications, nextPollInterval);
    }

    alreadyInitialized = true;
    return _dispatchUnreadNotifications(body);
  }).
  catch(({ error }) => {

    // Incase the API fetch fails, we set timeout to the previously cached interval
    clearTimeout(nextPolling);
    nextPolling = setTimeout(NotificationPollingService.init, nextPollInterval);
  });
}

/**
  * Sets access token in the header if the user is signed in or app id in the params if the user is signed out
  * @param { Object } currentUser
  * @returns { Object }
  */
function _computeNotificationURLAndHeaders(currentUser) {
  let notificationURL = `${pm.notificationPollingBaseUrl}/notification?limit=${DEFAULT_LIMIT}&events=viewed`,
  headers = {};

  if (currentUser.id === '0') {
    notificationURL += `&app_id=${pm.app.get('installationId')}`;
  } else
  {
    const token = _.get(currentUser, 'auth.access_token');

    // Add type filter with the notification type we want to show
    notificationURL += `&type=${acceptedNotificationTypes.join('&type=')}&groupByType=true`;

    headers = {
      'x-access-token': token };

  }

  return { notificationURL, headers };
}

const NotificationPollingService = {

  /**
                                     * Checks that the function was not already called. If not, attaches listeners and initializes variables
                                     */
  async init() {
    if (alreadyInitialized) {
      return;
    }

    const isUserSignedIn = await _isUserSignedIn();

    nextPolling = null;
    nextPollInterval = 7200000; // 2hrs. Fallback interval if the API call fails for the first time

    // This is called before so that we can initiate signed in user notification polling as soon as the user signs in
    _attachSyncFinishListener();

    if (!isUserSignedIn) {
      pm.notificationPollingBaseUrl = await _fetchBaseUrl();

      return _fetchNotifications();
    }
  } };


/* harmony default export */ __webpack_exports__["a"] = (NotificationPollingService);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Requester; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RequesterHeaderContainer__ = __webpack_require__(3599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RequesterInfobarContainer__ = __webpack_require__(3622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_notification_system__ = __webpack_require__(1436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_notification_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_notification_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_keymaps_KeyMaps__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_variables_VariablesProvider__ = __webpack_require__(3623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppNotificationStyles__ = __webpack_require__(1442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dnd__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__postman_react_dnd_html5_backend__ = __webpack_require__(1531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__postman_react_dnd_html5_backend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__postman_react_dnd_html5_backend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sync_SyncOfflineStatusContainer__ = __webpack_require__(1416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__RequesterContentContainer__ = __webpack_require__(3626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_promisifyIdleCallback__ = __webpack_require__(3490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loadable__ = __webpack_require__(1414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_messaging_Popover__ = __webpack_require__(3748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_base_XPaths_XPathProvider__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_services_NotificationPollingService__ = __webpack_require__(1443);
var _dec, _class;
















const RequesterModalContainer = __WEBPACK_IMPORTED_MODULE_12_react_loadable___default()({
  loader: () => Promise.all/* import() */([__webpack_require__.e(27), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, 3751)),
  loading: () => null });

const StatusBarContainer = __WEBPACK_IMPORTED_MODULE_12_react_loadable___default()({
  loader: () => Object(__WEBPACK_IMPORTED_MODULE_11__utils_promisifyIdleCallback__["a" /* promisifyIdleCallback */])().then(() => Promise.all/* import() */([__webpack_require__.e(28), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, 4073))),
  loading: () => null });let



Requester = (_dec = Object(__WEBPACK_IMPORTED_MODULE_7_react_dnd__["DragDropContext"])(__WEBPACK_IMPORTED_MODULE_8__postman_react_dnd_html5_backend___default.a), _dec(_class = class Requester extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    __WEBPACK_IMPORTED_MODULE_15__modules_services_NotificationPollingService__["a" /* default */].init();
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
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'right-overlay-root' }),
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

/***/ 3404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ACTION_TYPE_DUPLICATE = 'duplicate',
ACTION_TYPE_EDIT = 'edit',
ACTION_TYPE_FORK = 'fork',
ACTION_TYPE_MERGE = 'merge',
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
ACTION_MANAGE_ROLES = 'manage-roles';
/* harmony export (immutable) */ __webpack_exports__["n"] = ACTION_TYPE_DUPLICATE;

/* harmony export (immutable) */ __webpack_exports__["o"] = ACTION_TYPE_EDIT;

/* harmony export (immutable) */ __webpack_exports__["p"] = ACTION_TYPE_FORK;

/* harmony export (immutable) */ __webpack_exports__["q"] = ACTION_TYPE_MERGE;

/* harmony export (immutable) */ __webpack_exports__["w"] = ACTION_TYPE_RUN;

/* harmony export (immutable) */ __webpack_exports__["y"] = ACTION_TYPE_SHARE;

/* harmony export (immutable) */ __webpack_exports__["m"] = ACTION_TYPE_DOWNLOAD;

/* harmony export (immutable) */ __webpack_exports__["k"] = ACTION_TYPE_DELETE;

/* harmony export (immutable) */ __webpack_exports__["j"] = ACTION_TYPE_ADD_REQUEST;

/* harmony export (immutable) */ __webpack_exports__["g"] = ACTION_TYPE_ADD_FOLDER;

/* harmony export (immutable) */ __webpack_exports__["i"] = ACTION_TYPE_ADD_MONITOR;

/* harmony export (immutable) */ __webpack_exports__["h"] = ACTION_TYPE_ADD_MOCK;

/* harmony export (immutable) */ __webpack_exports__["t"] = ACTION_TYPE_PUBLISH_DOCS;

/* harmony export (immutable) */ __webpack_exports__["r"] = ACTION_TYPE_OPEN_IN_BUILDER;

/* harmony export (immutable) */ __webpack_exports__["x"] = ACTION_TYPE_SELECT;

/* harmony export (immutable) */ __webpack_exports__["u"] = ACTION_TYPE_RENAME;

/* harmony export (immutable) */ __webpack_exports__["v"] = ACTION_TYPE_RENAME_TOGGLE;

/* harmony export (immutable) */ __webpack_exports__["s"] = ACTION_TYPE_OPEN_IN_NEW_TAB;

/* harmony export (immutable) */ __webpack_exports__["l"] = ACTION_TYPE_DESCRIPTION_UPDATE;

/* unused harmony export ACTION_TYPE_PREVIEW */

/* harmony export (immutable) */ __webpack_exports__["d"] = ACTION_TARGET_COLLECTION;

/* harmony export (immutable) */ __webpack_exports__["e"] = ACTION_TARGET_FOLDER;

/* harmony export (immutable) */ __webpack_exports__["f"] = ACTION_TARGET_REQUEST;

/* harmony export (immutable) */ __webpack_exports__["a"] = ACTION_ADD_TO_WORKSPACE;

/* harmony export (immutable) */ __webpack_exports__["c"] = ACTION_REMOVE_FROM_WORKSPACE;

/* harmony export (immutable) */ __webpack_exports__["b"] = ACTION_MANAGE_ROLES;


/***/ }),

/***/ 3407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_InformationIcon__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_CloseIcon__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Markdown__ = __webpack_require__(190);






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

/***/ 3411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleSwitch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);


let

ToggleSwitch = class ToggleSwitch extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    !this.props.disabled && this.props.onClick && this.props.onClick(!this.props.isActive);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'toggle-switch': true,
      'is-active': this.props.isActive });

  }

  getWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'toggle-switch-container': true,
      'is-disabled': this.props.disabled },
    this.props.className);
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
  isActive: false,
  disabled: false };


ToggleSwitch.propTypes = {
  isActive: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  hideLabel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  activeLabel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  inactiveLabel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func };

/***/ }),

/***/ 3413:
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

/***/ 3418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RequestIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_SignInModalService__ = __webpack_require__(3443);



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

  if (!currentUser.isLoggedIn) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_SignInModalService__["c" /* showContextualSignInModal */])(event, () => {
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

/***/ 3420:
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

/***/ 3425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_cloneWithRef__ = __webpack_require__(3639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ContextMenuShortcutLabelHelper__ = __webpack_require__(3640);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};




const remote = __webpack_require__(21).remote;let

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

/***/ 3426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_services_DashboardService__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_controllers_CollectionController__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_controllers_PublishedCollectionController__ = __webpack_require__(1513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_UserController__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(6);








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
    pm.logger.error('Error in generating documenter URL', e);
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
    pm.logger.error('Error in handling collection public url', e);
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
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_services_APIService__["g" /* GetPublishedCollectionsForTeam */])(user, (err, publishedCollections) => {
    if (err) {
      pm.logger.error('Error in fetching published collections', err);
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
    pm.logger.error('Error fetching published collections', error);
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

/***/ 3443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (immutable) */ __webpack_exports__["a"] = attachAuthEventHandler;
/* harmony export (immutable) */ __webpack_exports__["b"] = attachSyncEventHandler;
/* harmony export (immutable) */ __webpack_exports__["c"] = showContextualSignInModal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_UIEventService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx__ = __webpack_require__(7);




const eventTypeMap = {
  'openCreateNewDocumentationModal': 'documentation',
  'openCreateNewMockModal': 'mock',
  'openCreateNewMonitorModal': 'monitor',
  'mock': 'mock',
  'monitor': 'monitor',
  'documentation': 'documentation',
  'invite': 'invite' },

SYNC_TIMEOUT = 60000;

/**
                       * Attaches auth event listeners
                       * @param {Object} eventCallbacks
                       * @param {Function} eventCallbacks.onSignIn
                       * @param {Function} eventCallbacks.onSkipSignIn
                       * @returns {Function} disposer function
                       */
function attachAuthEventHandler({ onSignIn, onSkipSignIn } = {}) {
  if (!onSignIn && !onSkipSignIn) {
    return;
  }

  let disposeAuthenticationEventHandler,
  disposeSkipSignInEventHandler;

  if (_.isFunction(onSignIn)) {
    disposeAuthenticationEventHandler = __WEBPACK_IMPORTED_MODULE_0__services_UIEventService__["a" /* default */].subscribe('userSignedIn', onSignIn);
  }

  if (_.isFunction(onSkipSignIn)) {
    disposeSkipSignInEventHandler = __WEBPACK_IMPORTED_MODULE_0__services_UIEventService__["a" /* default */].subscribe('userSkippedSignIn', onSkipSignIn);
  }

  return () => {
    disposeAuthenticationEventHandler && disposeAuthenticationEventHandler();
    disposeSkipSignInEventHandler && disposeSkipSignInEventHandler();
  };
}

/**
   * Attaches sync event handlers
   * @param {Object} eventCallbacks
   * @param {Function} eventCallbacks.onSuccess
   * @param {Function} eventCallbacks.onError
   * @returns {Function} disposer function
   */
function attachSyncEventHandler({ onSuccess, onError } = {}) {

  // If sync has already connected, call onSuccess and bail
  if (Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('SyncStatusStore').isInSync) {
    _.isFunction(onSuccess) && onSuccess();
    return _.noop;
  }

  // If sync does not connect in 60 seconds, onError callback is called
  let timeout = setTimeout(() => _.isFunction(onError) && onError(), SYNC_TIMEOUT),
  syncStatusStore = Object(__WEBPACK_IMPORTED_MODULE_1__stores_get_store__["a" /* getStore */])('SyncStatusStore'),
  syncStatusReactionDisposer = Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["q" /* reaction */])(() => syncStatusStore.isInSync, isInSync => {
    if (isInSync) {
      clearTimeout(timeout);
      _.isFunction(onSuccess) && onSuccess();
    }
  });

  return () => {
    syncStatusReactionDisposer && syncStatusReactionDisposer();
  };
}

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
      _.isFunction(callback) && callback();
    },
    onBack: _.isFunction(opts.onBack) && opts.onBack });

}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
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

/***/ 3445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ForkIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'fork-icon', d: 'M5.24942 14.0002L11.3338 14.0002C12.8056 14.0002 14.0002 12.8064 14.0002 11.3346V8.42903L15.0572 9.48527L16.0002 8.54231L13.8048 6.34771C13.5446 6.08755 13.1227 6.08755 12.8618 6.34771L10.6664 8.54311L11.6094 9.48607L12.6664 8.42903V11.3346C12.6664 12.0713 12.0687 12.6674 11.3336 12.6674H5.24929C5.00757 11.7342 4.26908 11.0035 3.3336 10.761V5.23922C4.48203 4.94162 5.33359 3.90802 5.33359 2.66662C5.33359 1.19399 4.13903 0.000227928 2.6664 0.000227928C1.19376 0.000227928 0 1.19401 0 2.66822C0 3.90878 0.851559 4.94236 2 5.24002V10.7618C0.851559 11.0586 0 12.093 0 13.3336C0 14.8062 1.19374 16 2.6664 16C3.9087 16 4.95309 15.1505 5.24942 14.0002ZM12.6672 5.23904C12.9589 5.2807 13.1777 5.30153 13.3236 5.30153C13.4739 5.30153 13.6994 5.2807 14 5.23904C15.1477 4.94144 16 3.90784 16 2.66644C16 1.19381 14.8062 4.76837e-05 13.3336 4.76837e-05C11.861 4.76837e-05 10.6664 1.19381 10.6672 2.66724C10.6672 3.9078 11.5195 4.94138 12.6672 5.23904ZM13.3415 1.07858C14.1699 1.07858 14.8415 1.75015 14.8415 2.57858C14.8415 3.407 14.1699 4.07858 13.3415 4.07858C12.5131 4.07858 11.8415 3.407 11.8415 2.57858C11.8415 1.75015 12.5131 1.07858 13.3415 1.07858Z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#A9A9A9', fillRule: 'evenodd', xlinkHref: '#fork-icon' }));



function ForkIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 3446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NewFolderIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FolderIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivedResource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_ArchiveIcon__ = __webpack_require__(3647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_AppUrlConstants__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messaging_Alert__ = __webpack_require__(3407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(11);
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

    let warningMessage = `Some ${this.props.label.toLowerCase()} were archived because you’ve reached the shared requests limits. [Learn more](${__WEBPACK_IMPORTED_MODULE_4__constants_AppUrlConstants__["k" /* ARCHIVED_RESOURCES_DOCS */]})`;
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

/***/ 3462:
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

/***/ 3463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shallowCompare__ = __webpack_require__(945);
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

/***/ 3464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_EditorService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_EditorUtils__ = __webpack_require__(128);
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

/***/ 3465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__ = __webpack_require__(3404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_services_DocumenterService__ = __webpack_require__(3426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_services_DashboardService__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_APIService__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_CollectionPermissionService__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_new_button_CreateNewXService__ = __webpack_require__(3419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_services_ShareModalService__ = __webpack_require__(1399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_ManageRolesModalService__ = __webpack_require__(1413);












/* harmony default export */ __webpack_exports__["a"] = ((id, action, modifiers, options = {}, callback) => {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  let store = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('EnvironmentStore');

  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["w" /* ACTION_TYPE_RUN */]) {
    let environmentId = null,
    environment = store.find(Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id);
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
        collection: Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionStore').find(id) } });



  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]) {
    pm.mediator.trigger('showAddFolderModal', id);
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */] || action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */]) {
    let event = 'openCreateNewMockModal';
    if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */]) {
      event = 'openCreateNewMonitorModal';
    }

    __WEBPACK_IMPORTED_MODULE_8__containers_new_button_CreateNewXService__["a" /* default */].create(event,
    {
      collectionId: id,
      opts: { from: options.origin } },

    null,
    { from: options.origin });

  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]) {
    pm.mediator.trigger('showEditModal', id);
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["p" /* ACTION_TYPE_FORK */]) {
    pm.mediator.trigger('showForkCollectionModal', (Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionStore').find(id) || {}).uid);
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_MERGE */]) {
    const forkInfo = (Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionStore').find(id) || {}).forkInfo || {};

    Object(__WEBPACK_IMPORTED_MODULE_3__models_services_DashboardService__["z" /* viewCollectionDiff */])(`${forkInfo.id}`, `${forkInfo.baseCollectionId}`);
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DOWNLOAD */]) {
    pm.mediator.trigger('showExportCollectionModal', id);
    options.origin === 'browse' && __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('collection', 'export', 'browse_view');
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
    activeWorkspaceId = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id;

    duplicateCollectionEvent = {
      name: 'duplicate',
      namespace: 'collection',
      data: { collection: { id } } };


    Object(__WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__["a" /* default */])(duplicateCollectionEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        pm.logger.error('Error in duplicating collection', response.error);
        return;
      }

      options.origin === 'browse' && __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('collection', 'duplicate', 'browse_view');

      // @todo response needs the new Id
      // _.invoke(this, 'props.onDuplicate', newId);
    }).
    catch(err => {
      pm.logger.error('Error in pipeline while duplicating collection', err);
    });
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["y" /* ACTION_TYPE_SHARE */]) {
    let uid = _.get(Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionStore').find(id), 'uid');
    Object(__WEBPACK_IMPORTED_MODULE_9__modules_services_ShareModalService__["b" /* shareCollection */])(uid, { origin: options.origin });
    __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('collection', 'modal', 'dropdown');
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["u" /* ACTION_TYPE_RENAME */]) {
    let updateCollectionEvent = {
      name: 'update',
      namespace: 'collection',
      data: { id, name: modifiers.name } };


    Object(__WEBPACK_IMPORTED_MODULE_1__modules_pipelines_user_action__["a" /* default */])(updateCollectionEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        pm.logger.error('Error in renaming collection', response.error);
        return;
      }
      pm.mediator.trigger('focusSidebar');
      _.isFunction(callback) && callback();
    }).
    catch(err => {
      pm.logger.error('Error in pipeline while renaming collection', err);
    });
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_PUBLISH_DOCS */]) {
    if (options.origin === 'browse') {
      __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('collection', 'publish', 'browse_view');
    } else {
      __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('documenter', 'initiate_publish', options.origin);
    }

    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CurrentUserStore');

    if (!currentUser.isLoggedIn) {
      pm.mediator.trigger('publishDocsSignedoutModal', true);
      _.isFunction(callback) && callback();
      return;
    }

    let collection = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionStore').find(id);
    __WEBPACK_IMPORTED_MODULE_2__models_services_DocumenterService__["a" /* default */].getDocumentationPublishURL(collection, (err, publishUrl) => {
      Object(__WEBPACK_IMPORTED_MODULE_6__modules_services_APIService__["u" /* openAuthenticatedRoute */])(publishUrl);
    });
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["a" /* ACTION_ADD_TO_WORKSPACE */]) {
    let uid = _.get(Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionStore').find(id), 'uid');
    Object(__WEBPACK_IMPORTED_MODULE_9__modules_services_ShareModalService__["b" /* shareCollection */])(uid, { origin: options.origin });
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */]) {
    let triggerOptions = {
      subscriberCount,
      published,
      origin: options.origin };

    pm.mediator.trigger('showRemoveCollectionFromWorkspaceModal', id, triggerOptions, callback);
  } else
  if (action === __WEBPACK_IMPORTED_MODULE_0__constants_CollectionActionsConstants__["b" /* ACTION_MANAGE_ROLES */]) {
    let uid = _.get(Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CollectionStore').find(id), 'uid');
    Object(__WEBPACK_IMPORTED_MODULE_10__modules_services_ManageRolesModalService__["b" /* manageRolesOnCollection */])(uid, { origin: options.origin });
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryItemActionsDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_DeleteIcon__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_MoreIcon__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_AddIcon__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_PublishIcon__ = __webpack_require__(1392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_MockIcon__ = __webpack_require__(1394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_MonitorIcon__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_PluralizeHelper__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_HistoryActionsConstants__ = __webpack_require__(3420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_mobx_react__ = __webpack_require__(13);
var _class;













let


HistoryItemActionsDropdown = Object(__WEBPACK_IMPORTED_MODULE_13_mobx_react__["a" /* observer */])(_class = class HistoryItemActionsDropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleShortcutSelect = this.handleShortcutSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getKeymapHandlers() {
    return { delete: pm.shortcuts.handle('delete', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_11__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */])) };
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
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'collection-sidebar-request-dropdown-actions-wrapper': true });
  }

  getDisabledText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }


  render() {
    let pluralizeRequest = __WEBPACK_IMPORTED_MODULE_10__utils_PluralizeHelper__["a" /* default */].pluralize({
      count: this.props.count,
      singular: 'Request',
      plural: 'Requests' });


    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('PermissionStore'),
    canDeleteHistory = permissionStore.can('delete', 'history');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getDropDownActionWrapperClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["a" /* Dropdown */], {
            keyMapHandlers: this.getKeymapHandlers(),
            ref: 'menu',
            onSelect: this.handleSelect,
            onToggle: this.handleToggle,
            className: 'collection-sidebar-request-actions-dropdown' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["b" /* DropdownButton */], {
              dropdownStyle: 'nocaret',
              type: 'custom' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], { className: 'history-sidebar-list-item__button__options' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_MoreIcon__["a" /* default */], { size: 'xs', className: 'history-sidebar-list-item__actions__options' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], {
              'align-right': true },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_11__constants_HistoryActionsConstants__["e" /* ACTION_TYPE_SAVE */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_AddIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--add' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, `Save ${pluralizeRequest}`)),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_11__constants_HistoryActionsConstants__["d" /* ACTION_TYPE_MONITOR */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_MonitorIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--add-monitor' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, `Monitor ${pluralizeRequest}`)),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_11__constants_HistoryActionsConstants__["b" /* ACTION_TYPE_DOCUMENT */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_PublishIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--publish-docs' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, `Document ${pluralizeRequest}`)),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_11__constants_HistoryActionsConstants__["c" /* ACTION_TYPE_MOCK */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_MockIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--add-mock' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, `Mock ${pluralizeRequest}`)),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
                refKey: __WEBPACK_IMPORTED_MODULE_11__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */],
                disabled: !canDeleteHistory,
                disabledText: this.getDisabledText(!canDeleteHistory) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_DeleteIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--delete' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Delete'))))));





  }}) || _class;

/***/ }),

/***/ 3467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ProfileIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NewWindowIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SortIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3487:
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

/***/ 3488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MergeIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'merge-icon', d: 'M3.3336 10.761C4.48203 11.0586 5.33359 12.0922 5.33359 13.3336C5.33359 14.8062 4.13903 16 2.6664 16C1.19376 16 0 14.8062 0 13.332C0 12.0914 0.851559 11.0578 2 10.7602V5.23839C0.851559 4.94159 0 3.90722 0 2.6666C0 1.19396 1.19374 0.0002 2.6664 0.0002C4.13905 0.0002 5.33359 1.19396 5.33359 2.6674C5.33359 3.90796 4.48203 4.94153 3.3336 5.23919V10.761ZM14 10.761L14 10.7612C15.1477 11.0588 16 12.0924 16 13.3338C16 14.8064 14.8062 16.0002 13.3336 16.0002C11.861 16.0002 10.6664 14.8064 10.6672 13.333C10.6672 12.0924 11.5195 11.0588 12.6672 10.7612V4.66657C12.6672 3.93141 12.0711 3.33376 11.3344 3.33376H8.94299L10 4.39079L9.05707 5.33375L6.86167 3.13836C6.60151 2.87744 6.60151 2.45556 6.86167 2.1954L9.05627 0L9.99923 0.942959L8.94299 2H11.3344C12.8062 2 14 3.19452 14 4.66639V10.761ZM2.6668 4.17543C3.49522 4.17543 4.1668 3.50385 4.1668 2.67543C4.1668 1.847 3.49522 1.17543 2.6668 1.17543C1.83837 1.17543 1.1668 1.847 1.1668 2.67543C1.1668 3.50385 1.83837 4.17543 2.6668 4.17543Z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#A9A9A9', fillRule: 'evenodd', xlinkHref: '#merge-icon' }));



function MergeIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 3489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HistoryItemActionsDropdown__ = __webpack_require__(3466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_AddIcon__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_DeleteIcon__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_request_RequestIcon__ = __webpack_require__(1411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Avatar__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_ProfileIcon__ = __webpack_require__(3467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Tooltips__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_HistoryActionsConstants__ = __webpack_require__(3420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_mobx_react__ = __webpack_require__(13);
var _class;














let


HistoryListItem = Object(__WEBPACK_IMPORTED_MODULE_14_mobx_react__["a" /* observer */])(_class = class HistoryListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    this.handleDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_13__constants_HistoryActionsConstants__["e" /* ACTION_TYPE_SAVE */], { from: 'history_single' });
  }

  handleRemoveRequest(e) {
    e.stopPropagation();
    this.handleDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_13__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */]);
  }

  componentDidMount() {
    this.refs.avatar && this.setState({ tooltipTarget: Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.refs.avatar) });
  }

  getTooltipText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  render() {
    let updatedByMember = Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('CurrentUserStore').teamMembers.get(this.props.lastUpdatedBy),
    updatedByMemberName = updatedByMember && (updatedByMember.name || updatedByMember.username);

    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('PermissionStore'),
    canDeleteHistory = permissionStore.can('delete', 'history', this.props.id);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: this.getClasses(),
          onClick: this.handleSelect },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item-updatedBy',
            onMouseEnter: this.showTooltip,
            onMouseLeave: this.hideTooltip },


          !this.props.lastUpdatedBy || this.props.lastUpdatedBy === '0' ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_ProfileIcon__["a" /* default */], null) :
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Avatar__["a" /* default */], {
            ref: 'avatar',
            size: 'small',
            userId: this.props.lastUpdatedBy })),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item__label-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_request_RequestIcon__["a" /* default */], { method: this.props.method ? this.props.method : 'GET' })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item__meta' },
          this.props.url),


        !this.props.hideActions &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-list-item__actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
              className: 'history-sidebar-list-item__button__add',
              type: 'icon',
              onClick: this.handleAddRequestToCollectionClick },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_AddIcon__["a" /* default */], { size: 'xs', className: 'history-sidebar-list-item__actions__add' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
              className: 'history-sidebar-list-item__button__delete',
              type: 'icon',
              onClick: this.handleRemoveRequest,
              disabled: !canDeleteHistory,
              tooltip: this.getTooltipText(!canDeleteHistory) },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_DeleteIcon__["a" /* default */], { size: 'xs', className: 'history-sidebar-list-item__actions__delete' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__HistoryItemActionsDropdown__["a" /* default */], {
            count: 1,
            onSelect: this.handleDropdownActionSelect,
            onToggle: this.handleDropdownToggle,
            id: this.props.id })),




        this.state.tooltipTarget &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Tooltips__["a" /* Tooltip */], {
            immediate: true,
            show: this.state.isTooltipVisible,
            target: this.state.tooltipTarget,
            placement: 'right' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Tooltips__["b" /* TooltipBody */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
                updatedByMemberName),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
                __WEBPACK_IMPORTED_MODULE_12_moment___default()(this.props.createdAt).format('DD MMM YYYY, h:mm A')))))));







  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3490:
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

/***/ 3599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterHeaderContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid_v4__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_InviteIcon__ = __webpack_require__(3600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_default_workspace__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_keymaps_KeyMaps__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_ShortcutsList__ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Icons_AddIcon__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_Icons_RequestIcon__ = __webpack_require__(3418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_Icons_CollectionIcon__ = __webpack_require__(1391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_base_Icons_EnvironmentIcon__ = __webpack_require__(1400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_base_Icons_PublishIcon__ = __webpack_require__(1392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_base_Icons_PublishedIcon__ = __webpack_require__(3601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_base_Icons_MockIcon__ = __webpack_require__(1394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_base_Icons_MonitorIcon__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_base_Icons_NewWindowIcon__ = __webpack_require__(3485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_base_Icons_LikeIcon__ = __webpack_require__(3602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_base_Icons_DownSolidIcon__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_EditorService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__utils_EditorUtils__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__utils_EditorUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__utils_EditorUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__constants_UIEventConstants__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__modules_services_SignInModalService__ = __webpack_require__(3443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__constants_ManageEnvironmentViews__ = __webpack_require__(3413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__constants_AppUrlConstants__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sync_SyncStatusContainer__ = __webpack_require__(3603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__proxy_ProxyStatusContainer__ = __webpack_require__(3606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__RequesterHeaderSettingsContainer__ = __webpack_require__(3608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__RequesterHeaderUsersInfoContainer__ = __webpack_require__(3609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__RequesterHeaderTeamInfoContainer__ = __webpack_require__(3611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__containers_notifications_NotificationFeedContainer__ = __webpack_require__(3614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__containers_workspaces_WorkspaceSwitcherContainer__ = __webpack_require__(3621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_UIEventService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_TabShortcutsService__ = __webpack_require__(3462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__new_button_CreateNewXService__ = __webpack_require__(3419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__external_navigation_ExternalNavigationService__ = __webpack_require__(72);
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
      return Object(__WEBPACK_IMPORTED_MODULE_23__modules_services_SignInModalService__["c" /* showContextualSignInModal */])('invite',
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

    let userDefaultWorkspaceId = await Object(__WEBPACK_IMPORTED_MODULE_4__utils_default_workspace__["c" /* defaultUserWorkspaceId */])();

    if (isTeamUser && userDefaultWorkspaceId !== workspaceId) {
      pm.mediator.trigger('openShareWorkspaceModal', workspaceId);
      return;
    }

    __WEBPACK_IMPORTED_MODULE_36__services_UIEventService__["a" /* default */].publish(__WEBPACK_IMPORTED_MODULE_22__constants_UIEventConstants__["d" /* OPEN_INVITE_MODAL */], { source });
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
        __WEBPACK_IMPORTED_MODULE_38__new_button_CreateNewXService__["a" /* default */].create(
        'openCreateNewMonitorModal',
        { opts: { activeStep: 1 } },
        null,
        { from: 'create_new_modal' });

        break;
      case 'documentation':
        __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('documenter', 'initiate_add', 'create_new_dropdown');
        __WEBPACK_IMPORTED_MODULE_38__new_button_CreateNewXService__["a" /* default */].create(
        'openCreateNewDocumentationModal',
        { opts: { activeStep: 1 } },
        null,
        { from: 'create_new_modal' });

        break;
      case 'mock':
        __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('mock', 'initiate_create', 'create_new_dropdown');
        __WEBPACK_IMPORTED_MODULE_38__new_button_CreateNewXService__["a" /* default */].create(
        'openCreateNewMockModal',
        { opts: { activeStep: 1 } },
        null,
        { from: 'create_new_modal' });

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
                    tooltip: 'Import Collections, cURL, RAML, WADL and OpenAPI files' }, 'Import')),




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
                  onClick: () => {Object(__WEBPACK_IMPORTED_MODULE_39__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_25__constants_AppUrlConstants__["H" /* LIKE_URL */]);} },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__components_base_Icons_LikeIcon__["a" /* default */], { className: 'heart-button-icon' })),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31__containers_notifications_NotificationFeedContainer__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_28__RequesterHeaderSettingsContainer__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_27__proxy_ProxyStatusContainer__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26__sync_SyncStatusContainer__["a" /* default */], null))))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = InviteIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LikeIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XPaths_XPath__ = __webpack_require__(29);
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

/***/ 3603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncStatusContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sync_SyncStatus__ = __webpack_require__(3604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_services_AuthHandlerService__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__external_navigation_ExternalNavigationService__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(93);
var _class;





let


SyncStatusContainer = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* observer */])(_class = class SyncStatusContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      status: 'off',
      showTooltip: false,
      timeTillReconnect: null };


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
    pm.syncManager.on('change:timeTillReconnect', this.handleModelChange);
  }

  detachModelListeners() {
    pm.syncManager.off('change:timeTillReconnect', this.handleModelChange);
  }

  handleModelChange() {
    let timeTillReconnect = pm.syncManager.get('timeTillReconnect');

    this.setState({ timeTillReconnect: timeTillReconnect });
  }

  _setState(state) {
    this.setState(state);
  }

  getNewState(status) {
    switch (status) {
      case 'syncing':
        return 'syncing';
      case 'off':
        return 'off';
      case 'insync':
      case 'idle':
      case 'connected':
        return 'insync';
      case 'connecting':
        return 'connecting';
      case 'offline':
        return 'offline';
      default:
        pm.logger.error('Unrecognised sync status', status);
        return status;}

  }

  handleTooltipClose() {
    this.setState({ showTooltip: false });
  }

  handleClick() {
    if (Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('SyncStatusStore').currentSyncStatus === 'insync') {
      pm.syncManager.syncIconClick();
    }
  }

  handleForceConnect() {
    pm.syncManager.forceConnect();
  }

  handleSignIn() {
    __WEBPACK_IMPORTED_MODULE_2__modules_services_AuthHandlerService__["a" /* default */].login();
    this.handleTooltipClose();
  }

  handleEnableSync() {
    Object(__WEBPACK_IMPORTED_MODULE_5__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["w" /* ENABLE_SYNC_DOCS_URL */]);
  }

  render() {
    let currentSyncStatus = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('SyncStatusStore').currentSyncStatus,
    isSyncDisabled = !Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('GateKeeperStore').isSyncEnabled,
    isLoggedIn = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn;

    // if sync is disabled from the gatekeeper store then set sync status as off
    // off means the red/maroon sync indicator to come up
    if (isLoggedIn && isSyncDisabled) {
      currentSyncStatus = 'off';
    }

    let syncStatus = this.getNewState(currentSyncStatus);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_sync_SyncStatus__["a" /* default */], {
        showTooltip: this.state.showTooltip,
        status: syncStatus,
        timeTillReconnect: this.state.timeTillReconnect,
        onEnableSync: this.handleEnableSync,
        onForceConnect: this.handleForceConnect,
        onIconClick: this.handleClick,
        onSignin: this.handleSignIn,
        onTooltipToogle: this.handleTooltipToggle }));


  }}) || _class;

/***/ }),

/***/ 3604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Tooltips__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PluralizeHelper__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_SyncedIcon__ = __webpack_require__(3605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Icons_SyncOfflineIcon__ = __webpack_require__(1412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__external_navigation_ExternalNavigationService__ = __webpack_require__(72);
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
    this.handleClick = this.handleClick.bind(this);
  }

  getButtonClasses() {
    let meta = SYNC_STATUS_META[this.props.status];
    return __WEBPACK_IMPORTED_MODULE_5_classnames___default()({ 'sync-button': true }, meta.classes);
  }

  handleClick() {
    this.props.onIconClick && this.props.onIconClick();
  }

  handleOpenExternalLink() {
    Object(__WEBPACK_IMPORTED_MODULE_11__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["_2" /* SYNC_DOCS */]);
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

/***/ }),

/***/ 3605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SyncedIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyStatusContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Tooltips__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_ToggleSwitch__ = __webpack_require__(3411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_ProxyIcon__ = __webpack_require__(3607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_XPaths_XPath__ = __webpack_require__(29);






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

/***/ 3607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ProxyIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterHeaderSettingsContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_SpannerIcon__ = __webpack_require__(3486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_EditorService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_AppUrlConstants__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__external_navigation_ExternalNavigationService__ = __webpack_require__(72);












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
          __WEBPACK_IMPORTED_MODULE_6__services_EditorService__["a" /* default */].open('customview://releaseNotes');
          break;
        }
      case 'documentation':{
          Object(__WEBPACK_IMPORTED_MODULE_9__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_7__constants_AppUrlConstants__["t" /* DOCS_URL */]);
          break;
        }
      case 'security':{
          Object(__WEBPACK_IMPORTED_MODULE_9__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_7__constants_AppUrlConstants__["s" /* DOCS_SECURITY_URL */]);
          break;
        }
      case 'support':{
          Object(__WEBPACK_IMPORTED_MODULE_9__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_7__constants_AppUrlConstants__["_1" /* SUPPORT_URL */]);
          break;
        }
      case 'twitter':{
          Object(__WEBPACK_IMPORTED_MODULE_9__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_7__constants_AppUrlConstants__["_7" /* TWITTER_URL */]);
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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'settings' },
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
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'setting' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Settings'))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider divider--space' }),

            this.state.updateStatus === 'updateAvailable' &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'update-available' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Update available, view changes')),


            this.state.updateStatus === 'downloaded' &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'update-downloaded' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Update downloaded, restart now')),


            this.state.updateStatus === 'error' &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'update-failed' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Update failed, view details')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'releaseNotes' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'releaseNotes' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Release Notes'))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'documentation' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'documentation' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Documentation'))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'security' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'security' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Security'))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'support' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'support' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Support'))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Dropdowns__["d" /* MenuItem */], { refKey: 'twitter' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'twitter' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, '@postmanclient')))))));






  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterHeaderUsersInfoContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Avatar__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_UserCard__ = __webpack_require__(3610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_pipelines_user_action__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_services_AuthHandlerService__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_controllers_CurrentUserController__ = __webpack_require__(62);
var _class;













let

RequesterHeaderUsersInfoContainer = Object(__WEBPACK_IMPORTED_MODULE_8_mobx_react__["a" /* observer */])(_class = class RequesterHeaderUsersInfoContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
  }

  handleLoginClick() {
    __WEBPACK_IMPORTED_MODULE_13__modules_controllers_CurrentUserController__["a" /* default */].get().
    then(user => {
      // if user is signed out, initiate login flow
      if (!user || user.id === '0') {
        return __WEBPACK_IMPORTED_MODULE_11__modules_services_AuthHandlerService__["a" /* default */].login();
      }

      // if user is not signed in, initiate add user flow
      // maybe the component/UI thinks user is signed out but user is signed in in the DB
      return Object(__WEBPACK_IMPORTED_MODULE_10__modules_pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_9__modules_model_event__["a" /* createEvent */])('add', 'users'));
    }).
    catch(e => {
      pm.logger.warn('RequesterHeaderUsersInfoContainer~handleLoginClick: Could not handle login. Error while fetching current user', e);
    });
  }

  handleLogoutClick() {
    pm.mediator.trigger('showUserSignoutModal');
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
          Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["w" /* openUserProfile */])();
          break;
        }
      case 'manage-account':{
          Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["f" /* openAccountSettings */])();
          break;
        }
      case 'manage-trash':{
          Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["v" /* openTrash */])();
          break;
        }
      case 'manage-notifications':{
          Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["p" /* openNotificationPreferences */])();
          break;
        }
      case 'manage-sessions':{
          Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["x" /* openUserSessions */])();
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

/***/ 3610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Avatar__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__XPaths_XPath__ = __webpack_require__(29);



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

/***/ 3611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterHeaderTeamInfoContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_messaging_Alert__ = __webpack_require__(3407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_UIEventConstants__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__external_navigation_ExternalNavigationService__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_AppUrlConstants__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_Icons_TeamIcon__ = __webpack_require__(1393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_team_usage_TeamUsage__ = __webpack_require__(3612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_UIEventService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_base_XPaths_XPath__ = __webpack_require__(29);
var _class;

















const ENTERPRISE_UPDATE_TEMP_LINK = '#dashboardEnterprise';let


RequesterHeaderTeamInfoContainer = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class RequesterHeaderTeamInfoContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { imageNotFound: false };
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
    this.handleUpgrade = this.handleUpgrade.bind(this);
    this.handleFetchDebounced = _.debounce(this.fetchResources.bind(this), 3000, { leading: true });
    this.handleDropdownOpen = this.handleDropdownOpen.bind(this);
  }

  componentWillMount() {
    this.unsubscribeHandler = __WEBPACK_IMPORTED_MODULE_14__services_UIEventService__["a" /* default */].subscribe(__WEBPACK_IMPORTED_MODULE_4__constants_UIEventConstants__["g" /* SHOW_USAGE */], this.handleDropdownOpen);
    pm.mediator.on('appOnline', this.handleFetchDebounced);
  }

  componentWillUnmount() {
    this.unsubscribeHandler && this.unsubscribeHandler();
    pm.mediator.off('appOnline', this.handleFetchDebounced);
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

    Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["y" /* upgradeToPro */])({ quantity });

    __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEvent('onboarding', 'upgrade_pro_click', 'header');
  }

  fetchResources() {
    Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["a" /* getStore */])('ResourceLimitOperationsStore').fetch();
  }

  handleDropdownSelect(item) {
    switch (item) {
      case 'sign-in':
        pm.mediator.trigger('openLoginModal');
        break;
      case 'enable-sync':
        // open docs for sync disabled
        Object(__WEBPACK_IMPORTED_MODULE_5__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_7__constants_AppUrlConstants__["w" /* ENABLE_SYNC_DOCS_URL */]);
        break;
      case 'view-team':
        Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["r" /* openTeam */])();
        break;
      case 'billing':
        Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["s" /* openTeamBilling */])();
        break;
      case 'resource-usage':
        Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["q" /* openPostmanUsages */])();
        break;
      case 'audit-logs':
        Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["h" /* openAuditLogs */])();
        break;
      case 'team-settings':
        Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["t" /* openTeamSettings */])();
        break;
      case 'invite':
        this.handleInviteButton();
        break;}

  }

  handleImageError() {
    this.setState({ imageNotFound: true });
  }

  handleProDocsClick() {
    Object(__WEBPACK_IMPORTED_MODULE_5__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_7__constants_AppUrlConstants__["Q" /* POSTMAN_PRO_DOCS */]);
  }

  handleUpgradePlan(link) {
    if (ENTERPRISE_UPDATE_TEMP_LINK === link) {
      Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["l" /* openEnterprise */])();
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
    isSyncEnabled = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["a" /* getStore */])('GateKeeperStore').isSyncEnabled,
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_base_XPaths_XPath__["a" /* default */], { identifier: 'teamInfo' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getUpgradeClasses() },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["a" /* Dropdown */], {
                className: 'team-info-dropdown',
                ref: 'dropdownRef',
                onSelect: this.handleDropdownSelect,
                onToggle: this.handleFetchDebounced },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["b" /* DropdownButton */], { dropdownStyle: 'split', className: 'upgrade-dropdown', type: this.getUpgradeButtonType() },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_Buttons__["a" /* Button */], {
                    className: 'team-button requester-header__team-info__button',
                    type: this.getUpgradeButtonType(),
                    onClick: this.handleUpgrade }, 'Upgrade')),




              this.getMenu()))));




    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_base_XPaths_XPath__["a" /* default */], { identifier: 'teamInfo' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-header__team-info' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["a" /* Dropdown */], {
              className: 'team-info-dropdown',
              ref: 'dropdownRef',
              onSelect: this.handleDropdownSelect,
              onToggle: this.handleFetchDebounced },

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

/***/ 3612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamUsage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TeamUsageItem__ = __webpack_require__(3613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_LoadingIndicator__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Buttons__ = __webpack_require__(15);
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

/***/ 3613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamUsageItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_InfoButton__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_ProgressBar__ = __webpack_require__(3444);
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

/***/ 3614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationFeedContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_notifications_NotificationFeed__ = __webpack_require__(3615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_notifications_NotificationIcon__ = __webpack_require__(3619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_notifications_NotificationPanelHeader__ = __webpack_require__(3487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__postman_react_click_outside__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_SettingsTypeConstants__ = __webpack_require__(1403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__ = __webpack_require__(29);
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

/***/ 3615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotificationPanelHeader__ = __webpack_require__(3487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotificationPanel__ = __webpack_require__(3616);



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

/***/ 3616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_LoadingIndicator__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotificationItem__ = __webpack_require__(3617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NotificationEmptyItem__ = __webpack_require__(3618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx_react__ = __webpack_require__(13);
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

/***/ 3617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Markdown__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Avatar__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postman_date_helper__ = __webpack_require__(524);
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

/***/ 3618:
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

/***/ 3619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_NotificationsIcon__ = __webpack_require__(3620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(10);
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

/***/ 3620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NotificationsIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceSwitcherContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__external_navigation_ExternalNavigationService__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_workspaces_WorkspaceSwitcher__ = __webpack_require__(1431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_SyncWorkspaceController__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_controllers_WorkspaceController__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_RequesterTabConstants__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_services_DashboardService__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_AppUrlConstants_js__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_WorkspaceSwitchService__ = __webpack_require__(911);
var _class;















const REFETCH_WORKSPACE_WAIT_TIME = 1000; // 1 sec
let

WorkspaceSwitcherContainer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class WorkspaceSwitcherContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    let viewMode = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode;

    if (viewMode === __WEBPACK_IMPORTED_MODULE_9__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */]) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore');
    } else
    if (viewMode === __WEBPACK_IMPORTED_MODULE_9__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */]) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore');
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
    let currentUserId = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CurrentUserStore').id,
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
    __WEBPACK_IMPORTED_MODULE_13__services_WorkspaceSwitchService__["a" /* default */].switchWorkspace(id).
    catch(e => {
      console.log('Error in switching workspace', e);
    });

    this.handleToggle(false);
    __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'switch_workspace', 'workspace_switcher');
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
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    quantity;

    if (currentUser.team) {
      quantity = _.get(currentUser, 'organizations[0].team_users').length;
    }

    quantity = quantity || 1;

    Object(__WEBPACK_IMPORTED_MODULE_10__models_services_DashboardService__["y" /* upgradeToPro */])({ quantity });

    this.handleToggle(false);
  }

  handleLearnMore() {
    this.handleToggle(false);

    Object(__WEBPACK_IMPORTED_MODULE_2__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_11__constants_AppUrlConstants_js__["_11" /* WORKSPACE_DOCS */]);
  }

  render() {
    let activeWorkspaceStore = this.getActiveStore();
    if (!activeWorkspaceStore) {
      return false;
    }

    let personalWorkspaces = this.state.personalWorkspaces,
    teamWorkspaces = this.state.teamWorkspaces,
    joinableWorkspaces = this.state.joinableWorkspaces,
    isOffline = !Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('SyncStatusStore').isSocketConnected;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__["a" /* default */], { identifier: 'workspaceDropdown' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_workspaces_WorkspaceSwitcher__["a" /* default */], {
          isLoading: this.state.isLoading && !this.state.dataFetchedFirstTime,
          activeTab: this.state.activeTab,
          activeWorkspace: activeWorkspaceStore,
          isLoggedIn: Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn,
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
          onProUpgradeClick: this.handleProUpgradeClick,
          isOffline: isOffline,
          teamSyncEnabled: Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["a" /* getStore */])('CurrentUserStore').teamSyncEnabled })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterInfobarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_Infobar__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Infobar__ = __webpack_require__(1401);
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

/***/ 3623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariablesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_VariablesCache__ = __webpack_require__(3624);


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

/***/ 3624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariablesCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_PostmanDynamicVariables_js__ = __webpack_require__(3625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_VariableSessionHelper__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_backbone__ = __webpack_require__(81);
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
    let envValues = Object(__WEBPACK_IMPORTED_MODULE_1__utils_VariableSessionHelper__["d" /* sanitizeZippedValues */])(currentEnvStore.enabledValues);
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

    let globalValues = Object(__WEBPACK_IMPORTED_MODULE_1__utils_VariableSessionHelper__["d" /* sanitizeZippedValues */])(globals.enabledValues);

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

/***/ 3625:
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

/***/ 3626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterContentContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RequesterSidebarContainer__ = __webpack_require__(3627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabs_RequesterTabEmptyShell__ = __webpack_require__(3704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_UserPreferenceService__ = __webpack_require__(1514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_RequesterTabConstants__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_loadable__ = __webpack_require__(1414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_loadable__);
var _class;










const REQUESTER_SIDEBAR_OPEN = 'isRequesterSidebarOpen';


const RequesterBuilderContainer = __WEBPACK_IMPORTED_MODULE_9_react_loadable___default()({
  loader: () => Promise.all/* import() */([__webpack_require__.e(20), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, 3705)),
  loading: () => {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-builder' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_tabs_RequesterTabEmptyShell__["b" /* RequesterTabsEmptyShell */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_tabs_RequesterTabEmptyShell__["a" /* RequesterTabContentShell */], null)));


  } });


const WorkspaceBrowser = __WEBPACK_IMPORTED_MODULE_9_react_loadable___default()({
  loader: () => Promise.all/* import() */([__webpack_require__.e(29), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, 3722)),
  loading: () => null });let



RequesterContentContainer = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class RequesterContentContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOverlaid: false, // todo: need to lift this state into the store
      sidebarWidth: 300 };


    this.store = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('RequesterSidebarStore');

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
    let isOpen = this.store.isOpen;
    !isOpen && pm.mediator.trigger('focusBuilder');
    __WEBPACK_IMPORTED_MODULE_7__modules_services_UserPreferenceService__["a" /* default */].set(REQUESTER_SIDEBAR_OPEN, !isOpen);
  }

  switchPane(pane = 'builder') {
    let isOpen = this.store.isOpen;
    if (pane !== 'sidebar' && this.state.isSidebarOverlaid && isOpen) {
      __WEBPACK_IMPORTED_MODULE_7__modules_services_UserPreferenceService__["a" /* default */].set(REQUESTER_SIDEBAR_OPEN, false);
    }
    this.setState({
      activePane: pane });


  }

  handleResize() {
    let windowWidth = window.innerWidth;

    if (windowWidth < 1024) {
      !this.state.isSidebarOverlaid && this.setState({
        isSidebarOverlaid: true },
      () => {
        __WEBPACK_IMPORTED_MODULE_7__modules_services_UserPreferenceService__["a" /* default */].set(REQUESTER_SIDEBAR_OPEN, false);
      });
    } else
    {
      let openSidebar = true;
      if (Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode === __WEBPACK_IMPORTED_MODULE_8__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */]) {
        openSidebar = false;
      }
      this.state.isSidebarOverlaid && this.setState({
        isSidebarOverlaid: false },
      () => {
        __WEBPACK_IMPORTED_MODULE_7__modules_services_UserPreferenceService__["a" /* default */].set(REQUESTER_SIDEBAR_OPEN, openSidebar);
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
      'is-hidden': Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode === __WEBPACK_IMPORTED_MODULE_8__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */] ? !this.store.isOpen : true,
      'is-overlaid': this.state.isSidebarOverlaid });

  }

  _checkSidebarWidthBounds(width) {
    if (width > 500) {
      return 500;
    }

    if (width < 265) {
      return 265;
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
          isSidebarOpen: this.store.isOpen }),


        Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').isSwitching &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'loader-blocker' }),


        Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode === __WEBPACK_IMPORTED_MODULE_8__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */] &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getBuilderClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_XPaths_XPath__["a" /* default */], { identifier: 'builder' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RequesterBuilderContainer, {
              ref: this.focus,
              activePane: this.state.activePane,
              onOutsideClick: this.switchToSidebar }))),





        Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').viewMode === __WEBPACK_IMPORTED_MODULE_8__constants_RequesterTabConstants__["a" /* WORKSPACE_BROWSER_VIEW */] &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getLibraryClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_XPaths_XPath__["a" /* default */], { identifier: 'browse' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WorkspaceBrowser, { ref: this.focus })))));





  }}) || _class;

/***/ }),

/***/ 3627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterSidebarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_draggable__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RequesterLeftSidebarContainer__ = __webpack_require__(3628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable__ = __webpack_require__(1414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_promisifyIdleCallback__ = __webpack_require__(3490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_XPaths_XPath__ = __webpack_require__(29);
var _dec, _class;







const CollectionBrowserContainer = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
  loader: () => Object(__WEBPACK_IMPORTED_MODULE_5__utils_promisifyIdleCallback__["a" /* promisifyIdleCallback */])().then(() => Promise.all/* import() */([__webpack_require__.e(20), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, 3665))),
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
    !e.target.closest('.tooltip') &&
    !e.target.closest('#dropdown-root') // Prevent closing of collection browser on click of disabled item in dropdown
    ) {
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__postman_react_draggable__["DraggableCore"], {
              onDrag: this.handleDrag,
              onStop: this.handleDragStop },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-left-sidebar-resize-handle' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CollectionBrowserContainer, null))));



  }}) || _class);

/***/ }),

/***/ 3628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterLeftSidebarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_keymaps_KeyMaps__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Inputs__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Tabs__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__collections_CollectionSidebarContainer__ = __webpack_require__(3629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__history_HistorySidebarContainer__ = __webpack_require__(3648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_TabShortcutsService__ = __webpack_require__(3462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_dev_components_api_sidebar_APISidebarContainer_APISidebarContainer__ = __webpack_require__(3655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mobx_react__ = __webpack_require__(13);
var _class;










let


RequesterLeftSidebarContainer = Object(__WEBPACK_IMPORTED_MODULE_11_mobx_react__["a" /* observer */])(_class = class RequesterLeftSidebarContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.store = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('RequesterSidebarStore');

    this.state = {
      activeTab: pm.settings.getSetting('activeSidebarSection') || 'history' };


    this.focus = this.focus.bind(this);
    this.handleNextItem = this.handleNextItem.bind(this);
    this.focusSearchBox = this.focusSearchBox.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleFocusInCollectionsTab = this.handleFocusInCollectionsTab.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchCancel = this.handleSearchCancel.bind(this);
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
    return Object(__WEBPACK_IMPORTED_MODULE_9__services_TabShortcutsService__["a" /* getTabShortcuts */])();
  }

  focus() {
    if (this.state.activeTab === 'history') {
      _.invoke(this, 'refs.history.__wrappedComponent.focus');
    } else
    if (this.state.activeTab === 'collections') {
      _.invoke(this, 'refs.collections.focus');
    } else
    if (this.state.activeTab === 'api') {
      _.invoke(this, 'refs.api.__wrappedInstance.focus');
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
    this.setState({ activeTab: _.includes(['history', 'collections', 'api'], tab) ? tab : 'history' }, () => {
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
    this.store.setSearchQuery(query);
  }

  handleSearchCancel() {
    this.store.setSearchQuery('');
  }

  getSidebarContainerClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'requester-left-sidebar': true });

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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_keymaps_KeyMaps__["a" /* default */], { keyMap: pm.shortcuts.getShortcuts(), handlers: this.getKeymapHandlers() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getSidebarContainerClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-left-sidebar__search-container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'filter' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Inputs__["b" /* Input */], {
                ref: 'filter',
                placeholder: 'Filter',
                inputStyle: 'search',
                onChange: this.handleSearchChange,
                onCancel: this.handleSearchCancel,
                query: this.store.searchQuery,
                onDownArrow: this.handleNextItem }))),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-left-sidebar__tabs-container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Tabs__["b" /* Tabs */], {
                type: 'primary',
                fluid: true,
                defaultActive: 'collections',
                activeRef: this.state.activeTab,
                onChange: this.handleTabChange },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'historyTab' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Tabs__["a" /* Tab */], { refKey: 'history', fluid: true },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'History'))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'collectionTab' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Tabs__["a" /* Tab */], { refKey: 'collections', fluid: true },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Collections'))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'apiTab' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Tabs__["a" /* Tab */], { refKey: 'api', fluid: true },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'APIs'),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'requester-left-sidebar__api-beta-label' }, 'BETA'))))),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-left-sidebar__tab-content-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getSidebarContentClasses('history') },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'history', isVisible: this.state.activeTab === 'history' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__history_HistorySidebarContainer__["a" /* default */], { ref: 'history' }))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getSidebarContentClasses('collections') },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'collection', isVisible: this.state.activeTab === 'collections' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__collections_CollectionSidebarContainer__["a" /* default */], { ref: 'collections' }))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getSidebarContentClasses('api') },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_XPaths_XPath__["a" /* default */], { identifier: 'api', isVisible: this.state.activeTab === 'api' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__api_dev_components_api_sidebar_APISidebarContainer_APISidebarContainer__["a" /* default */], { ref: 'api' })))))));






  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollectionSidebarMenuContainer__ = __webpack_require__(3630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CollectionSidebarListContainer__ = __webpack_require__(3632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_archivedResource_ArchivedResource__ = __webpack_require__(3448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__ = __webpack_require__(523);
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
          onClick: __WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["g" /* openArchivedCollections */] })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarMenuContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_collections_sidebar_CollectionSidebarMenu__ = __webpack_require__(3631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_XPaths_XPath__ = __webpack_require__(29);


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

/***/ 3631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_AddIcon__ = __webpack_require__(904);
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

  getTooltipText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    } else
    {
      return 'Create new Collection';
    }
  }

  getAddIconClass(isEnabled) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'collection-sidebar-menu__actions-new-button': true,
      'collection-sidebar-menu__actions-new-collection': isEnabled });

  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    isLoggedIn = currentUser.isLoggedIn;

    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('PermissionStore'),
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id,
    canAddCollection = permissionStore.can('addCollection', 'workspace', workspaceId);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-menu' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-menu__actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_XPaths_XPath__["a" /* default */], { identifier: 'addCollection' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                className: 'collection-sidebar-menu__actions-new-collection-wrapper',
                onClick: this.handleNewCollectionClick,
                tooltip: this.getTooltipText(!canAddCollection),
                disabled: !canAddCollection,
                type: 'text' },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_AddIcon__["a" /* default */], { size: 'xs', className: this.getAddIconClass(canAddCollection) }), 'New Collection')),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_XPaths_XPath__["a" /* default */], { identifier: 'collectionTrash' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Buttons__["a" /* Button */], {
                onClick: __WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["j" /* openCollectionsTrash */],
                tooltip: isLoggedIn ? 'Recover your deleted collections' : 'Only signed in users can recover deleted collections',
                disabled: !isLoggedIn,
                type: 'text',
                className: 'collection-sidebar-menu__actions-trash' }, 'Trash')))));







  }}) || _class;

/***/ }),

/***/ 3632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarListContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CollectionSidebarListItemContainer__ = __webpack_require__(3633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_collections_CollectionSidebarListEmptyItem__ = __webpack_require__(3645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_keymaps_KeyMaps__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_CollectionSidebarService__ = __webpack_require__(3464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_EditorService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_EditorUtils__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_EditorUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__utils_EditorUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_empty_states_CollectionSidebarEmptyShell__ = __webpack_require__(3646);
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
    this.duplicateItemThrottled = _.throttle(this.duplicateItem, 300, { leading: true, trailing: false });
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
      duplicate: pm.shortcuts.handle('duplicate', this.duplicateItemThrottled),
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

/***/ 3633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarListItemContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_collections_sidebar_CollectionSidebarListItem__ = __webpack_require__(3634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_CollectionSidebarService__ = __webpack_require__(3464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_services_DocumenterService__ = __webpack_require__(3426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_EditorService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_EditorUtils__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_EditorUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__utils_EditorUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_services_APIService__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__ = __webpack_require__(3404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_CollectionActionsUtil__ = __webpack_require__(3465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stores_get_store__ = __webpack_require__(6);
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
    this.handleRenameToggle = this.handleRenameToggle.bind(this);
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
    isRequest && this.handleRequestActions(activeItem.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["x" /* ACTION_TYPE_SELECT */], { returnKey: true });
  }

  cutItem() {
    let itemToCut = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem;

    switch (itemToCut.type) {
      case 'request':
        if (!Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('PermissionStore').can('delete', 'request', itemToCut.id)) {
          return pm.toasts.error('You do not have permissions required to perform the action.');
        }
      case 'folder':
        if (!Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('PermissionStore').can('delete', 'folder', itemToCut.id)) {
          return pm.toasts.error('You do not have permissions required to perform the action.');
        }
        break;
      default: // collection cut is not supported
        return;}


    pm.clipboard.cutItem(Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem, itemToCut.id);
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


    switch (clipboard.type) {

      case 'folder':
        if (Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('PermissionStore').can('addFolder', 'collection', destination.id)) {
          return pm.clipboard.pasteItem(destination);
        } else
        {
          return pm.toasts.error('You do not have permissions required to perform the action.');
        }

      case 'request':
        if (Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('PermissionStore').can('addRequest', 'collection', destination.id)) {
          return pm.clipboard.pasteItem(destination);
        } else
        {
          return pm.toasts.error('You do not have permissions required to perform the action.');
        }}


    Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').focusItem({
      id: destination.id,
      type: destination.type });

  }

  duplicateItem() {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('PermissionStore'),
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id,
    canDuplicateCollection = permissionStore.can('addCollection', 'workspace', workspaceId);
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
      if (canDuplicateCollection) {
        this.handleCollectionActions(this.props.collection.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);
      } else
      {
        return pm.toasts.error('You do not have permissions required to duplicate this collection.');
      }
    } else
    {
      // We're working with something inside the collection
      if (activeItem.type === 'folder') {
        if (permissionStore.can('duplicate', 'folder', activeItem.id)) {
          return this.handleFolderActions(activeItem.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);
        } else
        {
          return pm.toasts.error('You do not have permissions required to duplicate this folder.');
        }
      }

      if (activeItem.type === 'request') {
        if (permissionStore.can('duplicate', 'request', activeItem.id)) {
          return this.handleRequestActions(activeItem.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);
        } else
        {
          return pm.toasts.error('You do not have permissions required to duplicate this request.');
        }
      }
    }
    this.renameItem(false);
  }

  deleteItem(e) {
    let activeItem = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem;

    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('PermissionStore');

    if (this.state.isEditing || _.isEmpty(activeItem)) {
      return;
    }

    e && e.preventDefault();

    let collection = this.props.collection;

    if (activeItem.type === 'request') {
      if (permissionStore.can('delete', 'request', activeItem.id)) {
        return this.handleRequestActions(activeItem.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);
      }
      return pm.toasts.error('You do not have permissions required to delete this request.');
    }

    if (activeItem.type === 'folder') {
      if (permissionStore.can('delete', 'folder', activeItem.id)) {
        return this.handleFolderActions(activeItem.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);
      }
      return pm.toasts.error('You do not have permissions required to delete this folder.');
    }

    if (permissionStore.can('delete', 'collection', collection.id)) {
      return this.handleCollectionActions(activeItem.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);
    }
    return pm.toasts.error('You do not have permissions required to delete this collection.');
  }

  renameItem(isEditing) {
    if (isEditing === false) {
      Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').setRenamingItem(null);
    } else {
      let activeItem = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').activeItem;
      Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').setRenamingItem({ id: activeItem.id, type: activeItem.type });
    }

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
      if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["u" /* ACTION_TYPE_RENAME */]) {
        this.renameItem(false);
      } else
      if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */]) {
        _.isFunction(this.props.onDelete) && this.props.onDelete();
      } else
      if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_PUBLISH_DOCS */]) {
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
    const canDuplicateFolder = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('PermissionStore').can('duplicate', 'folder', id);

    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]) {
      pm.mediator.trigger('showEditFolderModal', id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */] && canDuplicateFolder) {
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
          pm.logger.error('Error in duplicating folder', response.error);
          return;
        }
      }).
      catch(err => {
        pm.logger.error('Error in pipeline while duplicating folder', err);
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
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["u" /* ACTION_TYPE_RENAME */]) {
      let updateFolderEvent = {
        name: 'update',
        namespace: 'folder',
        data: { id, name: modifiers.name } };


      Object(__WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__["a" /* default */])(updateFolderEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          pm.logger.error('Error in renaming folder', response.error);
          return;
        }
        pm.mediator.trigger('focusSidebar');
        this.renameItem(false);
      }).
      catch(err => {
        pm.logger.error('Error in pipeline while renaming folder', err);
      });
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]) {
      Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').setRenamingItem({ id: id, type: 'folder' });
      let activeItemID = this.getActiveItemId();
      if (activeItemID === id) {
        this.handleRenameToggle(true);
      }
    }
  }

  handleRequestActions(id, action, modifiers = {}) {
    const canDuplicateRequest = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('PermissionStore').can('duplicate', 'request', id);
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]) {
      pm.mediator.trigger('editCollectionRequest', id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */] && canDuplicateRequest) {

      let duplicateRequestEvent = {
        name: 'duplicate',
        namespace: 'request',
        data: { request: { id } } };

      Object(__WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__["a" /* default */])(duplicateRequestEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          pm.logger.error('Error in duplicating request', response.error);
          return;
        }

        let duplicatedRequestEvent = Object(__WEBPACK_IMPORTED_MODULE_10__modules_model_event__["b" /* findEvents */])(response.response, { name: 'created', namespace: 'request' }),
        duplicatedRequestId = _.get(Object(__WEBPACK_IMPORTED_MODULE_10__modules_model_event__["d" /* getEventData */])(_.head(duplicatedRequestEvent)), 'id');
        duplicatedRequestId && this.props.onDuplicate(duplicatedRequestId, 'request');
      }).
      catch(err => {
        pm.logger.error('Error in pipeline while duplicating request', err);
      });

      // Bulk Analytics event added from controller
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]) {
      pm.mediator.trigger('showDeleteRequestModal', id, () => {
        _.isFunction(this.props.onDelete) && this.props.onDelete();
      });
    } else
    if (_.includes([__WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_OPEN_IN_NEW_TAB */], __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["x" /* ACTION_TYPE_SELECT */]], action)) {
      let newTabKey = false,
      newTabAction = action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_OPEN_IN_NEW_TAB */],
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
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["u" /* ACTION_TYPE_RENAME */]) {
      let updateRequestEvent = {
        name: 'update',
        namespace: 'request',
        data: { id, name: modifiers.name } };


      Object(__WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__["a" /* default */])(updateRequestEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          pm.logger.error('Error in renaming request', response.error);
          return;
        }
        pm.mediator.trigger('focusSidebar');
        this.renameItem(false);
      }).
      catch(err => {
        pm.logger.error('Error in pipeline while renaming request', err);
      });
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]) {
      Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').setRenamingItem({ id: id, type: 'request' });
      let activeItemID = this.getActiveItemId();
      if (activeItemID === id) {
        this.handleRenameToggle(true);
      }
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
    isFavorite = this.props.collection.isFavorite,
    action = !isFavorite ? 'favorite' : 'unfavorite';

    let favoriteCollectionEvent = {
      name: action,
      namespace: 'collection',
      data: { collection: { id: collectionId } },
      meta: { origin: 'collection_browser' } };


    Object(__WEBPACK_IMPORTED_MODULE_4__modules_pipelines_user_action__["a" /* default */])(favoriteCollectionEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        pm.logger.error(`Error while ${action} action in collection`, response.error);
        return;
      }
    }).
    catch(err => {
      pm.logger.error(`Error in pipeline while ${action} action in collection`, err);
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

  handleRenameToggle(isEditing) {
    this.renameItem(isEditing);
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
        isFocused: this.props.isFocused,
        onRenameToggle: this.handleRenameToggle })));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CollectionSidebarListItemHead__ = __webpack_require__(3635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CollectionSidebarListItemFolder__ = __webpack_require__(3641);
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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          'data-collectionid': this.props.collection && this.props.collection.id,
          className: this.getClasses() },

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
          'isFocused',
          'onRenameToggle'])))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarListItemHead; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dnd__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_pureRenderDecorator__ = __webpack_require__(3463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_PluralizeHelper__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_InlineInput__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_base_Icons_StarUnfilledIcon__ = __webpack_require__(3636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Icons_StarIcon__ = __webpack_require__(3637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_Icons_ForkIcon__ = __webpack_require__(3445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_Icons_CollectionIcon__ = __webpack_require__(1391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CollectionMetaIcons__ = __webpack_require__(1395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CollectionActionsDropdown__ = __webpack_require__(3638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__base_ContextMenu__ = __webpack_require__(3425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__base_Icons_DownSolidIcon__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__base_Icons_RightSolidIcon__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__ = __webpack_require__(3404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__base_XPaths_XPath__ = __webpack_require__(29);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _dec, _dec2, _class;






















const collectionTarget = {
  canDrop(props) {
    return Boolean(!props.subscribed || props.write);
  },

  drop(props, monitor) {
    const dragId = monitor.getItem().id,
    dropId = props.collection.id,
    dragItem = monitor.getItem(),
    permissionStore = Object(__WEBPACK_IMPORTED_MODULE_19__stores_get_store__["a" /* getStore */])('PermissionStore');

    let isEditable = false;

    switch (dragItem.type) {
      case 'folder':
        if (permissionStore.can('addFolder', 'collection', props.collection.id)) {
          isEditable = true;
        }
      case 'request':
        if (permissionStore.can('addRequest', 'collection', props.collection.id)) {
          isEditable = true;
        }}


    if (dragId === dropId || !isEditable) {
      return {};
    }

    return {
      dropItem: {
        id: dropId,
        type: 'collection' } };


  } };


const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_19__stores_get_store__["a" /* getStore */])('PermissionStore'),
workspaceId = Object(__WEBPACK_IMPORTED_MODULE_19__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id;let




























































































































































CollectionSidebarListItemHead = (_dec = Object(__WEBPACK_IMPORTED_MODULE_14__base_ContextMenu__["a" /* default */])([{ label: 'Share Collection', isVisible(props) {return permissionStore.can('share', 'collection', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["y" /* ACTION_TYPE_SHARE */]);} }, { label: 'Manage Roles', isVisible() {let currentUserStore = Object(__WEBPACK_IMPORTED_MODULE_19__stores_get_store__["a" /* getStore */])('CurrentUserStore');return Boolean(currentUserStore.team);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["b" /* ACTION_MANAGE_ROLES */]);} }, { label: 'Rename', shortcut: 'rename', isVisible(props) {return permissionStore.can('edit', 'collection', props.id);}, onClick(props, component) {component.decoratedComponentInstance.toggleEditName();} }, { label: 'Edit', isVisible(props) {return permissionStore.can('edit', 'collection', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]);} }, { label: 'Create a fork', isVisible() {return true;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["p" /* ACTION_TYPE_FORK */]);} }, { label: 'Merge changes', isVisible(props) {let isForked = _.get(Object(__WEBPACK_IMPORTED_MODULE_19__stores_get_store__["a" /* getStore */])('CollectionStore').find(props.id), 'isForked', false);return isForked;}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_MERGE */]);} }, { label: 'Add Request', isVisible(props) {return permissionStore.can('addRequest', 'collection', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */]);} }, { label: 'Add Folder', isVisible(props) {return permissionStore.can('addFolder', 'collection', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]);} }, { label: 'Duplicate', shortcut: 'duplicate', isVisible(props) {return permissionStore.can('addCollection', 'workspace', workspaceId);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);} }, { label: 'Export', onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DOWNLOAD */]);} }, { label: 'Monitor Collection', isVisible(props) {return permissionStore.can('addMonitor', 'collection', props.id) && permissionStore.can('addMonitor', 'workspace', workspaceId);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */]);} }, { label: 'Mock Collection', isVisible(props) {return permissionStore.can('addMock', 'collection', props.id) && permissionStore.can('addMock', 'workspace', workspaceId);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */]);} }, { label: 'Publish Docs', isVisible(props) {return permissionStore.can('publish', 'collection', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_PUBLISH_DOCS */]);} }, { label: 'Remove from workspace', isVisible(props) {return permissionStore.can('removeCollection', 'workspace', workspaceId);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */]);} }, { label: 'Delete', shortcut: 'delete', isVisible(props) {return permissionStore.can('delete', 'collection', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], props.id, __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);} }], monitor => {return { isContextMenuOpen: monitor.isOpen };}), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_1_react_dnd__["DropTarget"])(['collection-sidebar-request-item', 'collection-sidebar-folder-item'], collectionTarget, (connect, monitor) => {return { connectDropTarget: connect.dropTarget(), isDragOver: monitor.isOver({ shallow: true }), canDrop: monitor.canDrop() };}), _dec(_class = _dec2(_class = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["a" /* observer */])(_class = class CollectionSidebarListItemHead extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    if (action === __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]) {
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
    __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */],
    this.props.collection.id,
    __WEBPACK_IMPORTED_MODULE_18__constants_CollectionActionsConstants__["u" /* ACTION_TYPE_RENAME */],
    { name: value });

  }

  toggleEditName() {
    let collectionItem = this.props.collection;
    if (Object(__WEBPACK_IMPORTED_MODULE_19__stores_get_store__["a" /* getStore */])('PermissionStore').can('edit', 'collection', collectionItem.id)) {
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
    return __WEBPACK_IMPORTED_MODULE_15_classnames___default()({
      'collection-sidebar-list-item__head': true,
      'is-hovered': this.state.dropdownOpen,
      'is-focused': this.props.isFocused,
      'is-drop-hovered': this.props.canDrop && this.props.isDragOver,
      'is-favorited': this.props.collection.isFavorite });

  }

  handleCollectionBrowserToggle(e) {
    e.stopPropagation();
    this.props.onCollectionBrowserToggle && this.props.onCollectionBrowserToggle();
  }

  getActionsClasses() {
    return __WEBPACK_IMPORTED_MODULE_15_classnames___default()({
      'collection-sidebar-list-item__head__actions': true,
      'is-selected': this.props.isExpanded });

  }

  getToggleBrowserClasses() {
    return __WEBPACK_IMPORTED_MODULE_15_classnames___default()({
      'collection-sidebar-list-item__head__action': true,
      'collection-sidebar-list-item__head__action__browser': true,
      'is-open': this.props.isExpanded });

  }

  getExpandButtonClasses() {
    return __WEBPACK_IMPORTED_MODULE_15_classnames___default()({
      'collection-sidebar-list-item__collection-browser_action-open-icon': this.props.isExpanded,
      'collection-sidebar-list-item__collection-browser_action-close-icon': !this.props.isExpanded });

  }

  render() {
    const { connectDropTarget } = this.props;

    let collectionItem = this.props.collection,
    requestCount = collectionItem.requestCount,
    forkInfo = collectionItem.forkInfo,
    currentUser = Object(__WEBPACK_IMPORTED_MODULE_19__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    isLoggedIn = currentUser.isLoggedIn,
    isOpen = Object(__WEBPACK_IMPORTED_MODULE_19__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore').isOpen(collectionItem.id),
    teamSyncEnabled = currentUser.teamSyncEnabled;

    return connectDropTarget(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: this.getClasses(),
        onClick: this.handleCollectionClick,
        title: collectionItem.name },

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__head__icon-wrapper' },
        isOpen ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_Icons_DownSolidIcon__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__base_Icons_RightSolidIcon__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_Icons_CollectionIcon__["a" /* default */], { className: 'icon-collection', size: 'xs' })),

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__base_XPaths_XPath__["a" /* default */], { identifier: 'head' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__head__meta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__head__name__wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_InlineInput__["a" /* default */], {
              className: 'collection-sidebar-list-item__head__name',
              placeholder: 'Collection Name',
              ref: 'inlineInput',
              value: collectionItem.name,
              onSubmit: this.handleSubmit,
              onToggleEdit: this.handleToggleEditName }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__CollectionMetaIcons__["a" /* default */], { collection: collectionItem }),
            this.state.showFavorite &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Buttons__["a" /* Button */], {
                active: collectionItem.isFavorite,
                className: 'collection-sidebar-list-item__head__favorite-button',
                onClick: this.handleToggleFavorite },


              collectionItem.isFavorite ?
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Icons_StarIcon__["a" /* default */], {
                className: 'collection-sidebar-list-item__head__favorite-button-icon',
                style: 'secondary' }) :

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_Icons_StarUnfilledIcon__["a" /* default */], { className: 'collection-sidebar-list-item__head__favorite-button-icon' }))),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__head__meta-info' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__head__requests' },
              requestCount, ' ', __WEBPACK_IMPORTED_MODULE_5__utils_PluralizeHelper__["a" /* default */].pluralize({
                count: requestCount,
                singular: 'request',
                plural: 'requests' })),


            collectionItem.isForked &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'collection-sidebar-list-item__head__fork-label',
                title: forkInfo.forkLabel },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Icons_ForkIcon__["a" /* default */], { size: 'xs' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, forkInfo.forkLabel))))),





      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getActionsClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__base_XPaths_XPath__["a" /* default */], { identifier: 'collectionBrowser' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: this.getToggleBrowserClasses(),
              onClick: this.handleCollectionBrowserToggle },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__base_Icons_RightSolidIcon__["a" /* default */], { className: this.getExpandButtonClasses() }))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__head__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__base_XPaths_XPath__["a" /* default */], { identifier: 'options' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__CollectionActionsDropdown__["a" /* default */], _extends({},
            _.pick(collectionItem, ['id', 'shared', 'isForked']), {
              isPRO: currentUser.isLoggedIn && currentUser.teamSyncEnabled,
              isSignedIn: isLoggedIn,
              isTeamMember: teamSyncEnabled,
              onSelect: this.handleDropdownActionSelect,
              onToggle: this.handleDropdownToggle })))))));






  }}) || _class) || _class) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = StarUnfilledIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = StarIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionActionsDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_ShareIcon__ = __webpack_require__(1397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_LockedIcon__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_RenameIcon__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_EditIcon__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_ForkIcon__ = __webpack_require__(3445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_MergeIcon__ = __webpack_require__(3488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Icons_NewFolderIcon__ = __webpack_require__(3446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_Icons_CopyIcon__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__base_Icons_DownloadIcon__ = __webpack_require__(1404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__base_Icons_MonitorIcon__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__base_Icons_MockIcon__ = __webpack_require__(1394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__base_Icons_PublishIcon__ = __webpack_require__(1392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__base_Icons_CloseIcon__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__base_Icons_DeleteIcon__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__base_Icons_MoreIcon__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__base_Icons_RequestIcon__ = __webpack_require__(3418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__controllers_ShortcutsList__ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__ = __webpack_require__(3404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__base_XPaths_XPath__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mobx_react__ = __webpack_require__(13);
var _class;
























let


CollectionActionsDropdown = Object(__WEBPACK_IMPORTED_MODULE_24_mobx_react__["a" /* observer */])(_class = class CollectionActionsDropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleShortcutSelect = this.handleShortcutSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getKeymapHandlers() {
    return {
      rename: pm.shortcuts.handle('rename', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */])),
      duplicate: pm.shortcuts.handle('duplicate', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */])),
      delete: pm.shortcuts.handle('delete', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */])) };

  }

  handleShortcutSelect(action) {
    pm.mediator.trigger('focusSidebar');
    this.handleSelect(action);
  }

  handleSelect(action) {
    this.props.onSelect && this.props.onSelect(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], this.props.id, action);
  }

  handleToggle(value) {
    this.props.onToggle && this.props.onToggle(value);
  }

  getActions() {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_21__stores_get_store__["a" /* getStore */])('PermissionStore'),
    currentUser = Object(__WEBPACK_IMPORTED_MODULE_21__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    collectionId = this.props.id,
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_21__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id,
    collection = Object(__WEBPACK_IMPORTED_MODULE_21__stores_get_store__["a" /* getStore */])('CollectionStore').find(collectionId),
    isShared = _.get(collection, 'isShared', false),
    isForked = _.get(collection, 'isForked', false);

    return [
    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["y" /* ACTION_TYPE_SHARE */],
      label: 'Share Collection',
      isEnabled: permissionStore.can('share', 'collection', collectionId),
      xpathLabel: 'share',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_ShareIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["y" /* ACTION_TYPE_SHARE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["b" /* ACTION_MANAGE_ROLES */],
      label: 'Manage Roles',
      isEnabled: !!currentUser.team, // Enable it if the user belongs to a team
      xpathLabel: 'manageRoles',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_LockedIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["b" /* ACTION_MANAGE_ROLES */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */],
      label: 'Rename',
      shortcut: 'rename',
      isEnabled: permissionStore.can('edit', 'collection', collectionId),
      xpathLabel: 'rename',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_RenameIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */],
      label: 'Edit',
      shortcut: 'edit',
      isEnabled: permissionStore.can('edit', 'collection', collectionId),
      xpathLabel: 'edit',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_EditIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["p" /* ACTION_TYPE_FORK */],
      label: 'Create a fork',
      isEnabled: true,
      xpathLabel: 'fork',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_ForkIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["p" /* ACTION_TYPE_FORK */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_MERGE */],
      label: 'Merge changes',
      isEnabled: isForked,
      xpathLabel: 'merge',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_MergeIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_MERGE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */],
      label: 'Add Request',
      isEnabled: permissionStore.can('addRequest', 'collection', collectionId),
      xpathLabel: 'addRequest',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__base_Icons_RequestIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */],
      label: 'Add Folder',
      isEnabled: permissionStore.can('addFolder', 'collection', collectionId),
      xpathLabel: 'addFolder',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Icons_NewFolderIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */],
      label: 'Duplicate',
      shortcut: 'duplicate',
      isEnabled: permissionStore.can('addCollection', 'workspace', workspaceId),
      xpathLabel: 'duplicate',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_Icons_CopyIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DOWNLOAD */],
      label: 'Export',
      isEnabled: true,
      xpathLabel: 'export',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__base_Icons_DownloadIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DOWNLOAD */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */],
      label: 'Monitor Collection',
      isEnabled: permissionStore.can('addMonitor', 'collection', collectionId) && permissionStore.can('addMonitor', 'workspace', workspaceId),
      xpathLabel: 'monitor',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_Icons_MonitorIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */],
      label: 'Mock Collection',
      isEnabled: permissionStore.can('addMock', 'collection', collectionId) && permissionStore.can('addMock', 'workspace', workspaceId),
      xpathLabel: 'mock',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__base_Icons_MockIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_PUBLISH_DOCS */],
      label: 'Publish Docs',
      isEnabled: permissionStore.can('publish', 'collection', collectionId),
      xpathLabel: 'publish',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__base_Icons_PublishIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_PUBLISH_DOCS */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */],
      label: 'Remove from workspace',
      isEnabled: permissionStore.can('removeCollection', 'workspace', workspaceId),
      xpathLabel: 'remove',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_Icons_CloseIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */],
      label: 'Delete',
      shortcut: 'delete',
      isEnabled: permissionStore.can('delete', 'collection', collectionId),
      xpathLabel: 'delete',
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__base_Icons_DeleteIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]) }) }];


  }

  getMenuItemClasses(isPRO) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'dropdown-menu-item--pro-disabled': isPRO });
  }

  getMenuItemIconClasses(label) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'dropdown-menu-item-icon': true }, 'menu-icon--' + label);
  }

  getDisabledText(isDisabled, actionType) {
    if (isDisabled) {
      let defaultMessage = 'You do not have permissions to perform this action.',
      manageRolesMessage = 'You need to be signed-in to a team to perform this action',
      collection = Object(__WEBPACK_IMPORTED_MODULE_21__stores_get_store__["a" /* getStore */])('CollectionStore').find(this.props.id);

      switch (actionType) {
        case __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["b" /* ACTION_MANAGE_ROLES */]:
          return manageRolesMessage;
        case __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_MERGE */]:
          return 'This collection is not a fork';
        default:
          return defaultMessage;}

    }
  }

  getMenuItems() {
    return _.chain(this.getActions()).
    map(action => {
      const modifierLabel = action.modifier && action.modifier(this.props.isPRO);

      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
            className: this.getMenuItemClasses(modifierLabel),
            key: action.type,
            refKey: action.type,
            disabled: !action.isEnabled,
            disabledText: this.getDisabledText(!action.isEnabled, action.type) },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23__base_XPaths_XPath__["a" /* default */], { identifier: action.xpathLabel },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'collection-action-item' },
              action.icon,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label),

              action.shortcut &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_20__controllers_ShortcutsList__["c" /* getShortcutByName */])(action.shortcut)),


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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__base_Icons_MoreIcon__["a" /* default */], { className: 'collection-sidebar-collection-dropdown-actions-button' }))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], {
            'align-right': true },

          menuItems)));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3639:
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

/***/ 3640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_, process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_ShortcutsList__ = __webpack_require__(1396);
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

/***/ 3641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* unused harmony export default */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderChildren; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CollectionSidebarListItemRequest__ = __webpack_require__(3642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_pureRenderDecorator__ = __webpack_require__(3463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_ContextMenu__ = __webpack_require__(3425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_InlineInput__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_FolderIcon__ = __webpack_require__(3447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Icons_DownSolidIcon__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_Icons_RightSolidIcon__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FolderActionsDropdown__ = __webpack_require__(3644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__ = __webpack_require__(3404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__ = __webpack_require__(29);
var _dec, _dec2, _dec3, _class;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};




















const FOLDER_ITEM_HEIGHT = 30,
permissionStore = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('PermissionStore');

const folderSource = {
  canDrag(props) {
    if (props && props.isRenaming) {
      return false;
    }
    return Boolean(permissionStore.can('delete', 'folder', props.folder.id));
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
    folderItemComponent = component.getDecoratedComponentInstance(),
    dragItem = monitor.getItem();
    let isEditable = false;

    if (dragItem.type === 'request') {
      isEditable = permissionStore.can('addRequest', 'folder', props.id);
    } else
    if (dragItem.type === 'folder') {
      isEditable = permissionStore.can('addFolder', 'folder', props.id);
    }
    if (dragId === dropId || !isEditable) {
      return {};
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
    dropId = props.id,
    dragItem = monitor.getItem();
    let isEditable = false;

    if (dragItem.type === 'request') {
      isEditable = permissionStore.can('addRequest', 'folder', props.id);
    } else
    if (dragItem.type === 'folder') {
      isEditable = permissionStore.can('addFolder', 'folder', props.id);
    }
    if (dragId === dropId || !isEditable) {
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


          permissionStore.can('addRequest', 'collection', props.collection.id) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__base_Buttons__["a" /* Button */], {
                type: 'text',
                onClick: () => props.onAddRequest(folder) }, 'Add requests'), 'to this collection and create folders to organize them')),










        isFolder &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__body--empty collection-sidebar-list-item__folder__body--empty' }, 'This folder is empty.\xA0',


          permissionStore.can('addRequest', 'folder', folder.id) &&
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
        let renamingItemID = _.get(CollectionSidebarUIStore, 'renamingItem.id');

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
            'onItemToggle',
            'onRenameToggle']), {

              isRenaming: folder.id === renamingItemID,
              isFocused: folder.id === _.get(CollectionSidebarUIStore, 'activeItem.id'),
              folder: folder,
              isOpen: CollectionSidebarUIStore.isOpen(folder.id),
              isFirstChild: index === 0 }))));



      }).value(),


      _.chain(folder.ownRequests).
      filter(request => {
        return CollectionSidebarUIStore.isFiltered(request.id);
      }).
      map((request, index) => {
        let renamingItemID = _.get(CollectionSidebarUIStore, 'renamingItem.id');

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
            'onDropdownToggle',
            'onRenameToggle']), {

              collectionId: request.collection,
              folderId: request.folder,
              isRenaming: request.id === renamingItemID,
              isFocused: request.id === _.get(CollectionSidebarUIStore, 'activeItem.id'),
              selected: _.includes(props.selectedItems, request.id),
              isFirstChild: index === 0 }))));



      }).value()));



}let















































































CollectionSidebarListItemFolder = (_dec = Object(__WEBPACK_IMPORTED_MODULE_7__base_ContextMenu__["a" /* default */])([{ label: 'Rename', shortcut: 'rename', isVisible(props) {return permissionStore.can('edit', 'folder', props.id);}, onClick(props, component) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]);} }, { label: 'Edit', isVisible(props) {return permissionStore.can('edit', 'folder', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]);} }, { label: 'Add Request', isVisible(props) {return permissionStore.can('addRequest', 'folder', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */]);} }, { label: 'Add Folder', isVisible(props) {return permissionStore.can('addFolder', 'folder', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]);} }, { label: 'Duplicate', shortcut: 'duplicate', isVisible(props) {return permissionStore.can('duplicate', 'folder', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);} }, { label: 'Delete', shortcut: 'delete', isVisible(props) {return permissionStore.can('delete', 'folder', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);} }], monitor => {return { isContextMenuOpen: monitor.isOpen };}), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_3_react_dnd__["DropTarget"])(['collection-sidebar-request-item', 'collection-sidebar-folder-item'], folderTarget, (connect, monitor) => {return { connectDropTarget: connect.dropTarget(), isDragOver: monitor.isOver({ shallow: true }) };}), _dec3 = Object(__WEBPACK_IMPORTED_MODULE_3_react_dnd__["DragSource"])('collection-sidebar-folder-item', folderSource, (connect, monitor) => {return { connectDragSource: connect.dragSource(), connectDragPreview: connect.dragPreview(), isDragging: monitor.isDragging() };}), _dec(_class = _dec2(_class = _dec3(_class = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* observer */])(_class = class CollectionSidebarListItemFolder extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    nextProps.isFocused && nextProps.isRenaming && this.toggleEditName();

    !this.props.isEditing &&
    !nextProps.isEditing &&
    !nextProps.isFocused && nextProps.isRenaming && this.setEditingToTrue();
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
    if (permissionStore.can('edit', 'folder', this.props.id)) {
      if (this.props.isEditing) {
        this.refs.inlineInput && this.refs.inlineInput.stopEditing();
      } else {
        this.refs.inlineInput && this.refs.inlineInput.startEditing();
      }
      this.props.onRenameToggle(!this.props.isEditing);
    } else
    {
      pm.toasts.error('You do not have the permissions required to rename this folder.');
    }
  }

  handleToggleEditName(isEditing) {
    if (!isEditing) {
      this.refs.inlineInput && this.refs.inlineInput.stopEditing();
      this.props.onRenameToggle(false);
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
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]) {
      this.props.onDropdownActionSelect && this.props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], this.props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]);
    }
    this.props.onDropdownActionSelect && this.props.onDropdownActionSelect(target, id, action);
  }

  setEditingToTrue() {
    pm.mediator.trigger('focusSidebar');
    this.refs.inlineInput && this.refs.inlineInput.startEditing();
  }

  handleDropdownToggle(value) {
    if (value === this.state.dropdownOpen) {
      return;
    }

    this.setState({ dropdownOpen: value });
  }

  handleSubmit(value) {
    this.props.onDropdownActionSelect && this.props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], this.props.id, __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["u" /* ACTION_TYPE_RENAME */], { name: value });
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
              _.pick(this.props, ['id', 'subscribed']), {
                onSelect: this.handleDropDownActionSelect,
                onToggle: this.handleDropdownToggle })))))))),








        renderChildren(this.props.folder, this.props)));



  }}) || _class) || _class) || _class) || _class);



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarListItemRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_ContextMenu__ = __webpack_require__(3425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_InlineInput__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__request_RequestIcon__ = __webpack_require__(1411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RequestActionsDropdown__ = __webpack_require__(3643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__ = __webpack_require__(3404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_XPaths_XPath__ = __webpack_require__(29);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _dec, _dec2, _dec3, _class;














const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('PermissionStore');
const getMiddleY = component => {
  const elementRect = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(component).getBoundingClientRect();
  return elementRect.top + elementRect.height / 2;
};

const itemSource = {
  canDrag(props) {
    if (props && props.isRenaming) {
      return false;
    }

    return Boolean(permissionStore.can('delete', 'request', props.id));
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
    const dragId = monitor.getItem().id,
    dropId = props.id,
    dragItem = monitor.getItem();
    let isEditable = false;

    if (dragItem.type === 'request') {
      isEditable = _.get(props, 'folderId') ? permissionStore.can('addRequest', 'folder', props.folderId) : permissionStore.can('addRequest', 'collection', props.collectionId);
    }
    if (dragId === dropId || !isEditable) {
      return {};
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
    dropId = props.id,
    dragItem = monitor.getItem();
    let isEditable = false;

    if (dragItem.type === 'request') {
      isEditable = _.get(props, 'folderId') ? permissionStore.can('addRequest', 'folder', props.folderId) : permissionStore.can('addRequest', 'collection', props.collectionId);
    }
    if (dragId === dropId || !isEditable) {
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

































































CollectionSidebarListItemRequest = (_dec = Object(__WEBPACK_IMPORTED_MODULE_4__base_ContextMenu__["a" /* default */])([{ label: 'Open in New Tab', onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], props.id, __WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_OPEN_IN_NEW_TAB */]);} }, { label: 'Rename', shortcut: 'rename', isVisible(props) {return permissionStore.can('edit', 'request', props.id);}, onClick(props, component) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], props.id, __WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]);} }, { label: 'Edit', isVisible(props) {return permissionStore.can('edit', 'request', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], props.id, __WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]);} }, { label: 'Duplicate', shortcut: 'duplicate', isVisible(props) {return permissionStore.can('duplicate', 'request', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], props.id, __WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);} }, { label: 'Delete', shortcut: 'delete', isVisible(props) {return permissionStore.can('delete', 'request', props.id);}, onClick(props) {props.onDropdownActionSelect && props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], props.id, __WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);} }], monitor => {return { isContextMenuOpen: monitor.isOpen };}), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_3_react_dnd__["DropTarget"])('collection-sidebar-request-item', itemTarget, (connect, monitor) => {return { connectDropTarget: connect.dropTarget(), isDragOver: monitor.isOver({ shallow: true }) };}), _dec3 = Object(__WEBPACK_IMPORTED_MODULE_3_react_dnd__["DragSource"])('collection-sidebar-request-item', itemSource, (connect, monitor) => {return { connectDragSource: connect.dragSource(), connectDragPreview: connect.dragPreview(), isDragging: monitor.isDragging() };}), _dec(_class = _dec2(_class = _dec3(_class = Object(__WEBPACK_IMPORTED_MODULE_10_mobx_react__["a" /* observer */])(_class = class CollectionSidebarListItemRequest extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    nextProps.isFocused && nextProps.isRenaming && this.toggleEditName();

    !this.props.isEditing &&
    !nextProps.isEditing &&
    !nextProps.isFocused && nextProps.isRenaming && this.setEditingToTrue();

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
    if (action === __WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]) {
      this.props.onDropdownActionSelect && this.props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], this.props.id, __WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]);
      return;
    }
    this.props.onDropdownActionSelect && this.props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], this.props.id, action, modifiers);
  }


  setEditingToTrue() {
    pm.mediator.trigger('focusSidebar');
    this.refs.inlineInput && this.refs.inlineInput.startEditing();
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
    this.props.onDropdownActionSelect && this.props.onDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], this.props.id, __WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["u" /* ACTION_TYPE_RENAME */], { name: value });
  }

  toggleEditName() {
    if (permissionStore.can('edit', 'request', this.props.id)) {
      if (this.props.isEditing) {
        this.refs.inlineInput && this.refs.inlineInput.stopEditing();
      } else {
        this.refs.inlineInput && this.refs.inlineInput.startEditing();
      }
      this.props.onRenameToggle(!this.props.isEditing);
    } else
    {
      pm.toasts.error('You do not have the permissions required to rename this request.');
    }
  }

  handleToggleEditName(isEditing) {
    if (!isEditing) {
      this.refs.inlineInput && this.refs.inlineInput.stopEditing();
      this.props.onRenameToggle(false);
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
    let CollectionSidebarUIStore = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('CollectionSidebarUIStore');


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

    this.handleDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_8__constants_CollectionActionsConstants__["x" /* ACTION_TYPE_SELECT */], modifiers);

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

      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__request_RequestIcon__["a" /* default */], { method: method }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_XPaths_XPath__["a" /* default */], { identifier: 'head' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__request__meta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_InlineInput__["a" /* default */], {
            className: 'collection-sidebar-list-item__entity__name collection-sidebar-list-item__request__name',
            placeholder: 'Request Name',
            ref: 'inlineInput',
            value: name,
            onSubmit: this.handleSubmit,
            onToggleEdit: this.handleToggleEditName }))),



      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__request__actions' },

        (this.state.isHovered || this.state.dropdownOpen) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_XPaths_XPath__["a" /* default */], { identifier: 'requestOption' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__RequestActionsDropdown__["a" /* default */], _extends({},
          _.pick(this.props, ['id']), {
            onSelect: this.handleDropdownActionSelect,
            onToggle: this.handleDropdownToggle }))))))));






  }}) || _class) || _class) || _class) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestActionsDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_NewWindowIcon__ = __webpack_require__(3485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_RenameIcon__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_EditIcon__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_CopyIcon__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_DeleteIcon__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_MoreIcon__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controllers_ShortcutsList__ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__ = __webpack_require__(3404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_mobx_react__ = __webpack_require__(13);
var _class;













let


RequestActionsDropdown = Object(__WEBPACK_IMPORTED_MODULE_13_mobx_react__["a" /* observer */])(_class = class RequestActionsDropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleShortcutSelect = this.handleShortcutSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getKeymapHandlers() {
    return {
      rename: pm.shortcuts.handle('rename', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */])),
      duplicate: pm.shortcuts.handle('duplicate', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */])),
      delete: pm.shortcuts.handle('delete', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */])) };

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
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'collection-sidebar-request-actions-dropdown': true,
      'collection-sidebar-request-actions-dropdown--single-menu': !Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('PermissionStore').can('edit', 'request', this.props.id) });

  }

  getDisabledText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  render() {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["a" /* getStore */])('PermissionStore'),
    requestId = this.props.id,
    canEditRequest = permissionStore.can('edit', 'request', requestId),
    canDuplicateRequest = permissionStore.can('duplicate', 'request', requestId),
    canDeleteRequest = permissionStore.can('delete', 'request', requestId);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-request-dropdown-actions-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["a" /* Dropdown */], {
            ref: 'menu',
            keyMapHandlers: this.getKeymapHandlers(),
            onSelect: this.handleSelect,
            onToggle: this.handleToggle,
            className: this.getDropDownActionClasses() },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["b" /* DropdownButton */], { dropdownStyle: 'nocaret', type: 'custom' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Buttons__["a" /* Button */], null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_MoreIcon__["a" /* default */], { className: 'collection-sidebar-request-dropdown-actions-button' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], { refKey: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_OPEN_IN_NEW_TAB */] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_NewWindowIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--newtab' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Open in New Tab')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
                refKey: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */],
                disabled: !canEditRequest,
                disabledText: this.getDisabledText(!canEditRequest) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_RenameIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--rename' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Rename'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_10__controllers_ShortcutsList__["c" /* getShortcutByName */])('rename'))),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
                refKey: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */],
                disabled: !canEditRequest,
                disabledText: this.getDisabledText(!canEditRequest) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_EditIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--edit' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Edit')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
                refKey: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */],
                disabled: !canDuplicateRequest,
                disabledText: this.getDisabledText(!canDuplicateRequest) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_CopyIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--duplicate' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Duplicate'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_10__controllers_ShortcutsList__["c" /* getShortcutByName */])('duplicate'))),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["d" /* MenuItem */], {
                refKey: __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */],
                disabled: !canDeleteRequest,
                disabledText: this.getDisabledText(!canDeleteRequest) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_DeleteIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--delete' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Delete'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_10__controllers_ShortcutsList__["c" /* getShortcutByName */])('delete')))))));





  }}) || _class;

/***/ }),

/***/ 3644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderActionsDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_MoreIcon__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_RenameIcon__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_EditIcon__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_NewFolderIcon__ = __webpack_require__(3446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_CopyIcon__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_DeleteIcon__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_RequestIcon__ = __webpack_require__(3418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controllers_ShortcutsList__ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__ = __webpack_require__(3404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_mobx_react__ = __webpack_require__(13);
var _class;














let


FolderActionsDropdown = Object(__WEBPACK_IMPORTED_MODULE_14_mobx_react__["a" /* observer */])(_class = class FolderActionsDropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleShortcutSelect = this.handleShortcutSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getKeymapHandlers() {
    return {
      rename: pm.shortcuts.handle('rename', this.handleShortcutSelect.bind(this, __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */])),
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

  getDisabledText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  render() {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('PermissionStore'),
    canEditFolder = permissionStore.can('edit', 'folder', this.props.id),
    canAddRequestToFolder = permissionStore.can('addRequest', 'folder', this.props.id),
    canAddFolderToFolder = permissionStore.can('addFolder', 'folder', this.props.id),
    canDuplicateFolder = permissionStore.can('duplicate', 'folder', this.props.id),
    canDeleteFolder = permissionStore.can('delete', 'folder', this.props.id);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-folder-dropdown-actions-wrapper' },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["a" /* Dropdown */], {
            ref: 'menu',
            keyMapHandlers: this.getKeymapHandlers(),
            onSelect: this.handleSelect,
            onToggle: this.handleToggle,
            className: 'collection-sidebar-folder-actions-dropdown' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["b" /* DropdownButton */], { dropdownStyle: 'nocaret', type: 'custom' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_MoreIcon__["a" /* default */], { className: 'collection-sidebar-folder-dropdown-actions-button' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["c" /* DropdownMenu */], { 'align-right': true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], {
                disabledText: this.getDisabledText(!canEditFolder),
                disabled: !canEditFolder,
                refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */] },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_RenameIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--rename' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Rename'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_10__controllers_ShortcutsList__["c" /* getShortcutByName */])('rename'))),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], {
                disabledText: this.getDisabledText(!canEditFolder),
                disabled: !canEditFolder,
                refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */] },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_EditIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--edit' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Edit')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], {
                disabledText: this.getDisabledText(!canAddRequestToFolder),
                disabled: !canAddRequestToFolder,
                refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */] },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_RequestIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--new-request' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Add Request')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], {
                disabledText: this.getDisabledText(!canAddFolderToFolder),
                disabled: !canAddFolderToFolder,
                refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */] },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_NewFolderIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--new-folder' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Add Folder')),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], {
                disabledText: this.getDisabledText(!canDuplicateFolder),
                disabled: !canDuplicateFolder,
                refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */] },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_CopyIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--duplicate' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Duplicate'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_10__controllers_ShortcutsList__["c" /* getShortcutByName */])('duplicate'))),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Dropdowns__["d" /* MenuItem */], {
                disabledText: this.getDisabledText(!canDeleteFolder),
                disabled: !canDeleteFolder,
                refKey: __WEBPACK_IMPORTED_MODULE_12__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */] },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_DeleteIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--delete' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Delete'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-shortcut' }, Object(__WEBPACK_IMPORTED_MODULE_10__controllers_ShortcutsList__["c" /* getShortcutByName */])('delete')))))));






  }}) || _class;

/***/ }),

/***/ 3645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSidebarListEmptyItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_AddIcon__ = __webpack_require__(904);
var _class;



let


CollectionSidebarListEmptyItem = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["a" /* observer */])(_class = class CollectionSidebarListEmptyItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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

  getTooltipText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  getContents() {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('PermissionStore'),
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id,
    canAddCollection = permissionStore.can('addCollection', 'workspace', workspaceId);

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
              onClick: this.handleCreateCollection,
              disabled: !canAddCollection,
              tooltip: this.getTooltipText(!canAddCollection) },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_AddIcon__["a" /* default */], {
              style: 'secondary',
              className: 'create-collection-icon' }), 'Create a collection'))));






  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-empty-item' },
        this.getContents()));


  }}) || _class;

/***/ }),

/***/ 3646:
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

/***/ 3647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ArchiveIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
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

/***/ 3648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySidebarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_pipelines_user_action__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_history_HistorySidebar__ = __webpack_require__(3649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_HistoryService__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_button_CreateNewXService__ = __webpack_require__(3419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_HistoryActionsConstants__ = __webpack_require__(3420);
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

  resetHistorySelection(nextSelection) {
    if (nextSelection && nextSelection.id) {
      this.store.resetSelection([nextSelection.id]);
    } else {
      this.store.resetSelection();
    }
  }

  handleDeleteMultiple(ref, nextSelection) {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('PermissionStore'),
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id;

    return Promise.resolve().
    then(() => {

      if (ref === 'all') {
        return Object(__WEBPACK_IMPORTED_MODULE_5__modules_pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__modules_model_event__["a" /* createEvent */])('deleteAllInWorkspace', 'history', Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id));
      } else
      if (ref === 'selected') {
        if (permissionStore.can('delete', 'history')) {
          return Object(__WEBPACK_IMPORTED_MODULE_5__modules_pipelines_user_action__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__modules_model_event__["a" /* createEvent */])('deleteMultiple', 'history', { ids: this.store.getSelectedItems() }, null, null));
        } else
        {
          pm.toasts.error('You do not have permissions to delete history.');
        }
      }
    }).

    then(() => {
      this.resetHistorySelection(nextSelection);
    }).

    catch(() => {
      this.resetHistorySelection(nextSelection);
    });

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

/***/ 3649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HistorySidebarMenu__ = __webpack_require__(3650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HistorySidebarList__ = __webpack_require__(3651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__archivedResource_ArchivedResource__ = __webpack_require__(3448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_keymaps_KeyMaps__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_HistoryActionsConstants__ = __webpack_require__(3420);
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

/***/ 3650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySidebarMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_AddIcon__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_DeleteIcon__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HistoryItemActionsDropdown__ = __webpack_require__(3466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_ToggleSwitch__ = __webpack_require__(3411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_HistoryActionsConstants__ = __webpack_require__(3420);
var _class;








let


HistorySidebarMenu = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* observer */])(_class = class HistorySidebarMenu extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { dropdownOpen: false };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleDropdownActionSelect = this.handleDropdownActionSelect.bind(this);
    this.handleAddToCollectionClick = this.handleAddToCollectionClick.bind(this);
    this.handleDeleteSelected = this.handleDeleteSelected.bind(this);
  }

  handleAddToCollectionClick(e) {
    e.stopPropagation();
    this.props.onSelectHistoryAction(__WEBPACK_IMPORTED_MODULE_8__constants_HistoryActionsConstants__["e" /* ACTION_TYPE_SAVE */], {
      requests: this.props.historySidebar.getSelectedItems(),
      from: 'history_multiple' });

  }

  handleDeleteClick() {
    pm.mediator.trigger('showDeleteHistoryModal', async () => {
      try {this.props.onDeleteMultiple && (await this.props.onDeleteMultiple('all'));}
      catch (e) {pm.logger.error('Could not delete history', e);pm.toasts.error('Could not delete history');}
    }, {
      identifier: 'all' });

  }

  handleDropdownToggle(value) {
    if (value === this.state.dropdownOpen) {
      return;
    }

    this.setState({ dropdownOpen: value });
  }

  handleDropdownActionSelect(action) {
    if (action === __WEBPACK_IMPORTED_MODULE_8__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */]) {
      pm.mediator.trigger('showDeleteHistoryModal', () => {
        this.props.onDeleteMultiple('selected');
      }, {
        identifier: 'selected' });

      return;
    }
    this.props.onSelectHistoryAction(action, {
      requests: this.props.historySidebar.getSelectedItems(),
      from: 'history_multiple' });

  }

  handleDeleteSelected() {
    this.handleDropdownActionSelect(__WEBPACK_IMPORTED_MODULE_8__constants_HistoryActionsConstants__["a" /* ACTION_TYPE_DELETE */]);
  }

  render() {
    let selectionSize = this.props.historySidebar.selectedItems.size,
    historySize = _.size(this.props.historyStore.values);

    const isLoggedIn = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn,
    isOffline = !Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["a" /* getStore */])('SyncStatusStore').isSocketConnected,
    isDisabled = isOffline && isLoggedIn;

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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu--save-response-toggle' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_ToggleSwitch__["a" /* default */], {
              isActive: this.props.enableHistoryResponseSaving,
              onClick: this.props.onToggleHistoryResponseSaving,
              activeLabel: '',
              inactiveLabel: '' })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu--save-response-label' }, 'Save Responses')),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu__right' },

          historySize > 0 &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'history-sidebar-menu__actions-delete-history-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
                type: 'text',
                onClick: this.handleDeleteClick,
                tooltip: isDisabled ? 'You need to be online to clear history.' : null,
                disabled: isDisabled ? true : null,
                className: 'history-sidebar-menu--clear-all-label' }, 'Clear all')))));








  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySidebarList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HistorySidebarListItemGroup__ = __webpack_require__(3652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HistorySidebarListEmptyItem__ = __webpack_require__(3653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__empty_states_HistorySidebarEmptyShell__ = __webpack_require__(3654);
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

/***/ 3652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySidebarListItemGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HistoryListItem__ = __webpack_require__(3489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HistoryItemActionsDropdown__ = __webpack_require__(3466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_DownSolidIcon__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_AddIcon__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_DeleteIcon__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_HistoryActionsConstants__ = __webpack_require__(3420);
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
      }, {
        identifier: 'selected' });

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

/***/ 3653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySidebarListEmptyItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_MouseClickIcon__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lessons_LessonManager__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_LessonAPIService__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_LessonTags__ = __webpack_require__(1408);
var _class;






let


HistorySidebarListEmptyItem = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* observer */])(_class = class HistorySidebarListEmptyItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleShowMeHow = this.handleShowMeHow.bind(this);
  }

  handleShowMeHow() {
    if (!Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn) {
      pm.mediator.trigger('showSignInModal', {
        type: 'history',
        origin: 'history_sidebar_show_me_how' });

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

/***/ 3654:
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

/***/ 3655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APISidebarContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__APISidebar_APISidebar__ = __webpack_require__(3656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_APIActionsConstants__ = __webpack_require__(913);
var _class;





let



APISidebarContainer = __WEBPACK_IMPORTED_MODULE_1__postman_react_click_outside___default()(_class = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class APISidebarContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.apiStore = Object(__WEBPACK_IMPORTED_MODULE_3__js_stores_get_store__["a" /* getStore */])('APIListStore');
    this.sidebarStore = Object(__WEBPACK_IMPORTED_MODULE_3__js_stores_get_store__["a" /* getStore */])('APISidebarStore');


    this.handleSelectAPIAction = this.handleSelectAPIAction.bind(this);
    this.handleShare = this.handleShare.bind(this);
    this.handleManageRoles = this.handleManageRoles.bind(this);
    this.handleRename = this.handleRename.bind(this);
    this.handleDuplicate = this.handleDuplicate.bind(this);
    this.handleRemoveFromWorkspace = this.handleRemoveFromWorkspace.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.refs.api && this.refs.api.focus();
  }

  handleSelectAPIAction(action, options) {
    switch (action) {
      case __WEBPACK_IMPORTED_MODULE_5__constants_APIActionsConstants__["g" /* ACTION_TYPE_SHARE */]:
        this.handleShare(options);
        break;

      case __WEBPACK_IMPORTED_MODULE_5__constants_APIActionsConstants__["d" /* ACTION_TYPE_MANAGE_ROLES */]:
        this.handleManageRoles(options);
        break;

      case __WEBPACK_IMPORTED_MODULE_5__constants_APIActionsConstants__["f" /* ACTION_TYPE_RENAME */]:
        this.handleRename(options);
        break;

      case __WEBPACK_IMPORTED_MODULE_5__constants_APIActionsConstants__["c" /* ACTION_TYPE_DUPLICATE */]:
        this.handleDuplicate(options);
        break;

      case __WEBPACK_IMPORTED_MODULE_5__constants_APIActionsConstants__["e" /* ACTION_TYPE_REMOVE_FROM_WORKSPACE */]:
        this.handleRemoveFromWorkspace(options);
        break;

      case __WEBPACK_IMPORTED_MODULE_5__constants_APIActionsConstants__["b" /* ACTION_TYPE_DELETE */]:
        this.handleDelete(options);
        break;

      case __WEBPACK_IMPORTED_MODULE_5__constants_APIActionsConstants__["a" /* ACTION_TYPE_CREATE */]:
        this.handleCreate();
        break;

      default:return;}

  }

  handleShare(options) {
    // to-do
  }

  handleManageRoles(options) {
    // to-do
  }

  handleRename(options) {
    // to-do
  }

  handleDuplicate(options) {
    // to-do
  }

  handleRemoveFromWorkspace(options) {
    // to-do
  }

  handleDelete(options) {
    // to-do
  }

  handleCreate() {
    // to-do
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__APISidebar_APISidebar__["a" /* default */], {
        apiStore: this.apiStore,
        sidebarStore: this.sidebarStore,
        onSelectAPIAction: this.handleSelectAPIAction,
        ref: 'api' }));


  }}) || _class) || _class;

/***/ }),

/***/ 3656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APISidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__APISidebarMenu_APISidebarMenu__ = __webpack_require__(3657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__APISidebarList_APISidebarList__ = __webpack_require__(3658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_editor_common_DeleteModal_DeleteModal__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_editor_common_RemoveFromWorkspaceModal_RemoveFromWorkspaceModal__ = __webpack_require__(1429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_components_base_keymaps_KeyMaps__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
var _class;






let


APISidebar = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["a" /* observer */])(_class = class APISidebar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      openDeleteModal: false,
      openRemoveFromWorkspaceModal: false,
      selectedApiId: '',
      selectedApiName: '' };


    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.openRemoveFromWorkspaceModal = this.openRemoveFromWorkspaceModal.bind(this);
    this.closeRemoveFromWorkspaceModal = this.closeRemoveFromWorkspaceModal.bind(this);
    this.handleRemoveFromWorkspace = this.handleRemoveFromWorkspace.bind(this);
    this.focusNext = this.focusNext.bind(this);
    this.focusPrev = this.focusPrev.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.renameItem = this.renameItem.bind(this);
  }

  openDeleteModal(apiId, apiName) {
    this.setState({
      openDeleteModal: true,
      selectedApiId: apiId,
      selectedApiName: apiName });

    _.invoke(this, 'keymapRef.focus');
  }

  closeDeleteModal() {
    this.setState({
      openDeleteModal: false,
      selectedApiId: '',
      selectedApiName: '' });

  }

  handleDelete() {
    this.props.apiStore.delete(this.state.selectedApiId, this.state.selectedApiName).then(() => {
      this.closeDeleteModal();
    });
  }

  openRemoveFromWorkspaceModal(apiId, apiName) {
    this.setState({
      openRemoveFromWorkspaceModal: true,
      selectedApiId: apiId,
      selectedApiName: apiName });

  }

  closeRemoveFromWorkspaceModal() {
    this.setState({
      openRemoveFromWorkspaceModal: false,
      selectedApiId: '',
      selectedApiName: '' });

  }

  handleRemoveFromWorkspace() {
    this.props.apiStore.removeFromWorkspace(this.state.selectedApiId, this.state.selectedApiName).then(() => {
      this.closeRemoveFromWorkspaceModal();
    });
  }

  getKeyMapHandlers() {
    return {
      nextItem: pm.shortcuts.handle('nextItem', this.focusNext),
      prevItem: pm.shortcuts.handle('prevItem', this.focusPrev),
      delete: pm.shortcuts.handle('delete', this.deleteItem),
      rename: pm.shortcuts.handle('rename', this.renameItem) };

  }

  focusNext(e) {
    e && e.preventDefault();

    this.props.sidebarStore.focusNext();
  }

  focusPrev(e) {
    e && e.preventDefault();

    this.props.sidebarStore.focusPrev();
  }

  deleteItem() {
    let activeItem = this.props.sidebarStore.activeItem;

    this.openDeleteModal(activeItem, this.props.apiStore.find(activeItem).name);
  }

  renameItem() {
    let apiRef = `api/${this.props.sidebarStore.activeItem}`;

    this.refs.list && this.refs['list'].refs[apiRef] && this.refs['list'].refs[apiRef].handleRename();
  }

  focus() {
    let apiSidebar = Object(__WEBPACK_IMPORTED_MODULE_7_react_dom__["findDOMNode"])(this.refs.apiSidebar);
    apiSidebar && apiSidebar.focus();
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_keymaps_KeyMaps__["a" /* default */], { handlers: this.getKeyMapHandlers() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'api-sidebar',
            ref: 'apiSidebar' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-sidebar-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__APISidebarMenu_APISidebarMenu__["a" /* default */], {
              apiStore: this.props.apiStore,
              onSelectAPIAction: this.props.onSelectAPIAction }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__APISidebarList_APISidebarList__["a" /* default */], {
              onSelectAPIAction: this.props.onSelectAPIAction,
              apiStore: this.props.apiStore,
              sidebarStore: this.props.sidebarStore,
              handleDelete: this.openDeleteModal,
              handleRemoveFromWorkspace: this.openRemoveFromWorkspaceModal,
              ref: 'list' })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__api_editor_common_DeleteModal_DeleteModal__["a" /* default */], {
              isOpen: this.state.openDeleteModal,
              onRequestClose: this.closeDeleteModal,
              headerTitle: 'Delete API?',
              subTitle: this.state.selectedApiName,
              content: 'No one on your team will be able to view or edit this API.\nThe mock servers, documentation, environments, test suites and monitors linked to this API won\'t be affected.',
              btnContent: 'Delete API',
              onSubmit: this.handleDelete,
              isLoading: this.props.apiStore.isDeleting,
              keymapRef: ref => {this.keymapRef = ref;} }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__api_editor_common_RemoveFromWorkspaceModal_RemoveFromWorkspaceModal__["a" /* default */], {
              isOpen: this.state.openRemoveFromWorkspaceModal,
              onRequestClose: this.closeRemoveFromWorkspaceModal,
              headerTitle: 'Remove API?',
              subTitle: this.state.selectedApiName,
              content: 'Are you sure you want to remove this API from this workspace? \nThe mock servers, documentation, environments, test suites and monitors linked to this API won’t be affected.',
              btnContent: 'Remove API',
              onSubmit: this.handleRemoveFromWorkspace,
              isLoading: this.props.apiStore.isRemovingFromWorkspace })))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APISidebarMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_APIActionsConstants__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_components_base_Icons_AddIcon__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_components_base_LoadingIndicator__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_components_base_Icons_RefreshIcon__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_modules_services_AnalyticsService__ = __webpack_require__(30);
var _class;









let


APISidebarMenu = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["a" /* observer */])(_class = class APISidebarMenu extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      refreshDisabled: false };


    this.addAPI = this.addAPI.bind(this);
    this.getAddIconText = this.getAddIconText.bind(this);
    this.getRefreshIconClass = this.getRefreshIconClass.bind(this);
    this.getRefreshIconText = this.getRefreshIconText.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  addAPI() {
    __WEBPACK_IMPORTED_MODULE_9__js_modules_services_AnalyticsService__["a" /* default */].addEvent('api', 'initiate_create', 'api_side_bar', 1);
    this.props.apiStore.create();
  }

  getRefreshIconClass(isEnabled) {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'api-sidebar-menu__actions-refresh-api': isEnabled,
      'api-sidebar-menu__actions-refresh-loading': this.props.apiStore.isHydrating });

  }

  getAddIconText(isLoggedOut, isOffline) {
    if (isLoggedOut) {
      return 'Sign in to create an API';
    }

    if (isOffline) {
      return 'Get online to create an API';
    }

    return 'Create new API';
  }

  getRefreshIconText() {
    if (this.state.refreshDisabled) {
      return 'Please wait...';
    }

    return 'Refresh';
  }

  refresh() {
    this.props.apiStore.reload();
    this.setState({ refreshDisabled: true });
    this.enableRefreshTimeout = setTimeout(() => {
      this.setState({ refreshDisabled: false });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.enableRefreshTimeout);
  }

  render() {
    let isLoggedIn = Object(__WEBPACK_IMPORTED_MODULE_4__js_stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn,
    isOnline = Object(__WEBPACK_IMPORTED_MODULE_4__js_stores_get_store__["a" /* getStore */])('SyncStatusStore').isSocketConnected,
    canAddAPI = isLoggedIn && isOnline && !this.props.apiStore.isCreating,
    canRefresh = canAddAPI && !this.state.refreshDisabled && !this.props.apiStore.isHydrating;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-sidebar-menu' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-sidebar-menu__left' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__js_components_base_Buttons__["a" /* Button */], {
              className: 'api-sidebar-menu__actions-new-api-wrapper',
              onClick: this.addAPI,
              tooltip: this.getAddIconText(!isLoggedIn, !isOnline),
              disabled: !canAddAPI,
              type: 'text' },


            this.props.apiStore.isCreating ?
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__js_components_base_LoadingIndicator__["a" /* default */], { className: 'api-sidebar-menu__actions-new-api-loader' }) :
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_Icons_AddIcon__["a" /* default */], { size: 'xs', className: 'api-sidebar-menu__actions-new-api' }), 'New API')),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-sidebar-menu__right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__js_components_base_Buttons__["a" /* Button */], {
              className: 'api-sidebar-menu__actions-new-api-wrapper',
              onClick: this.refresh,
              tooltip: this.getRefreshIconText(),
              disabled: !canRefresh },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__js_components_base_Icons_RefreshIcon__["a" /* default */], { size: 'xs', className: this.getRefreshIconClass(canRefresh) })))));




  }}) || _class;

/***/ }),

/***/ 3658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APISidebarList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__APISidebarEmptyShell_APISidebarEmptyShell__ = __webpack_require__(3659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__APISidebarListEmptyItem_APISidebarListEmptyItem__ = __webpack_require__(3660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__APIListItem_APIListItem__ = __webpack_require__(3661);
var _class;




let


APISidebarList = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class APISidebarList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let sidebarStore = this.props.sidebarStore,
    sortedAPIs = sidebarStore && sidebarStore.sortedAPIs;

    if (_.isEmpty(sortedAPIs)) {
      let query = Object(__WEBPACK_IMPORTED_MODULE_2__js_stores_get_store__["a" /* getStore */])('RequesterSidebarStore').searchQuery;
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-sidebar-list' },

          this.props.apiStore.isHydrating ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__APISidebarEmptyShell_APISidebarEmptyShell__["a" /* default */], null) :
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__APISidebarListEmptyItem_APISidebarListEmptyItem__["a" /* default */], {
            query: query,
            apiStore: this.props.apiStore })));




    }
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-sidebar-list' },

        _.map(sortedAPIs, apiItem => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__APIListItem_APIListItem__["a" /* default */], {
              key: apiItem.id,
              id: apiItem.id,
              name: apiItem.name,
              isEditable: apiItem.isEditable,
              teamId: apiItem.teamId,
              onSelectAPIAction: this.props.onSelectAPIAction,
              selected: sidebarStore.activeItem === apiItem.id,
              handleRemoveFromWorkspace: this.props.handleRemoveFromWorkspace,
              handleDelete: this.props.handleDelete,
              ref: `api/${apiItem.id}`,
              apiStore: this.props.apiStore }));


        })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const NUMBER_OF_API_ITEMS = 10;

const APISidebarEmptyShell = () => {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-sidebar-empty-shell' },

      _.times(NUMBER_OF_API_ITEMS, index => {
        return (
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              key: index,
              className: 'api-sidebar-empty-shell--section--item' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-sidebar-empty-shell--section--item__icon' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'api-sidebar-empty-shell--section--item__url',
              style: { 'width': `${Math.floor(Math.random() * 74) + 50}px` } })));



      })));



};

/* harmony default export */ __webpack_exports__["a"] = (APISidebarEmptyShell);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APISidebarListEmptyItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_stores_get_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_modules_services_AuthHandlerService__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_components_base_LoadingIndicator__ = __webpack_require__(151);
var _class;




let

APISidebarListEmptyItem = Object(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["a" /* observer */])(_class = class APISidebarListEmptyItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.addAPI = this.addAPI.bind(this);
    this.handleOffline = this.handleOffline.bind(this);
    this.handleLoggedOut = this.handleLoggedOut.bind(this);
    this.getComponent = this.getComponent.bind(this);
  }


  addAPI() {
    this.props.apiStore.create();
  }

  handleOffline() {
    this.props.apiStore.reload();
  }

  handleLoggedOut() {
    __WEBPACK_IMPORTED_MODULE_4__js_modules_services_AuthHandlerService__["a" /* default */].login();
  }

  getComponent(title, description, buttonText, handler) {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' },
          title),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' },
          description),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__learn' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__js_components_base_Buttons__["a" /* Button */], {
              type: 'secondary',
              onClick: handler,
              disabled: this.props.apiStore.isCreating },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, this.props.apiStore.isCreating ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_LoadingIndicator__["a" /* default */], null) : buttonText)))));




  }

  getContent() {
    let isLoggedOut = !Object(__WEBPACK_IMPORTED_MODULE_2__js_stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn,
    isOffline = !Object(__WEBPACK_IMPORTED_MODULE_2__js_stores_get_store__["a" /* getStore */])('SyncStatusStore').isSocketConnected,
    title = '',
    description = '',
    buttonText = '';

    if (isLoggedOut) {
      title = 'Sign in to create APIs';
      description = 'APIs define related collections and environments under a consistent schema.';
      buttonText = 'Sign in to create APIs';

      return this.getComponent(title, description, buttonText, this.handleLoggedOut);
    }

    if (this.props.query && !_.isEmpty(this.props.apiStore.values)) {
      return `No results found for "${this.props.query}"`;
    }

    if (isOffline) {
      title = 'No internet connection';
      description = 'You need to be online to view your APIs. Check your internet connection and try again.';
      buttonText = 'Try Again';

      return this.getComponent(title, description, buttonText, this.handleOffline);
    }

    title = 'No APIs yet';
    description = 'APIs define related collections and environments under a consistent schema.';
    buttonText = 'Create an API';
    return this.getComponent(title, description, buttonText, this.addAPI);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-sidebar-list-empty-item' },
        this.getContent()));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 3661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__APIItemActionsDropdown_APIItemActionsDropdown__ = __webpack_require__(3662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_components_base_Icons_APIIcon__ = __webpack_require__(3664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_services_EditorService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_APIActionsConstants__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_modules_services_ShareModalService__ = __webpack_require__(1399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_modules_services_ManageRolesModalService__ = __webpack_require__(1413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_components_base_Icons_LockedIcon__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__js_components_base_Icons_TeamIcon__ = __webpack_require__(1393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__js_components_base_InlineInput__ = __webpack_require__(646);
var _class;











let


APIListItem = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* observer */])(_class = class APIListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false };


    this.handleSelect = this.handleSelect.bind(this);
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleDropdownActionSelect = this.handleDropdownActionSelect.bind(this);
    this.ensureVisible = this.ensureVisible.bind(this);
    this.handleRename = this.handleRename.bind(this);
    this.handleRenameSubmit = this.handleRenameSubmit.bind(this);
    this.handleToggleEditName = this.handleToggleEditName.bind(this);
  }

  componentDidMount() {
    this.ensureVisible();
  }

  componentDidUpdate() {
    this.ensureVisible();
  }

  ensureVisible() {
    if (this.props.selected) {
      Object(__WEBPACK_IMPORTED_MODULE_11_react_dom__["findDOMNode"])(this).scrollIntoViewIfNeeded();
    }
  }

  handleSelect() {
    __WEBPACK_IMPORTED_MODULE_5__js_services_EditorService__["a" /* default */].open(`customview://api?id=${this.props.id}`, { preview: false });
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'api-sidebar-list-item': true,
      'api-sidebar-list-item__request': true,
      'is-hovered': this.state.dropdownOpen,
      'is-selected': this.props.selected });

  }

  handleDropdownToggle(value) {
    if (value === this.state.dropdownOpen) {
      return;
    }

    this.setState({ dropdownOpen: value });
  }

  handleDropdownActionSelect(action, options) {
    switch (action) {
      case __WEBPACK_IMPORTED_MODULE_6__constants_APIActionsConstants__["g" /* ACTION_TYPE_SHARE */]:
        Object(__WEBPACK_IMPORTED_MODULE_7__js_modules_services_ShareModalService__["a" /* shareAPI */])(this.props.id);
        return;
      case __WEBPACK_IMPORTED_MODULE_6__constants_APIActionsConstants__["d" /* ACTION_TYPE_MANAGE_ROLES */]:
        Object(__WEBPACK_IMPORTED_MODULE_8__js_modules_services_ManageRolesModalService__["a" /* manageRolesOnAPI */])(this.props.id);
        return;
      case __WEBPACK_IMPORTED_MODULE_6__constants_APIActionsConstants__["b" /* ACTION_TYPE_DELETE */]:
        this.props.handleDelete(this.props.id, this.props.name);
        return;
      case __WEBPACK_IMPORTED_MODULE_6__constants_APIActionsConstants__["e" /* ACTION_TYPE_REMOVE_FROM_WORKSPACE */]:
        this.props.handleRemoveFromWorkspace(this.props.id, this.props.name);
        return;
      case __WEBPACK_IMPORTED_MODULE_6__constants_APIActionsConstants__["f" /* ACTION_TYPE_RENAME */]:
        this.handleRename();
        return;}


    this.props.onSelectAPIAction && this.props.onSelectAPIAction(action, options);
  }

  handleRename() {
    this.refs.inlineInput && this.refs.inlineInput.toggleEdit();
  }

  handleRenameSubmit(value) {
    this.props.apiStore.rename(this.props.id, value).
    catch(() => {
      this.refs.inlineInput && this.refs.inlineInput.setState({ value: this.props.name });
    });
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
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getClasses(),
            onClick: this.handleSelect },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-sidebar-list-item__request__label-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Icons_APIIcon__["a" /* default */], { className: 'icon-api', size: 'xs' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'api-sidebar-list-item__request__meta',
              title: this.props.name },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__js_components_base_InlineInput__["a" /* default */], {
              className: 'api-sidebar-list-item__request__name',
              onToggleEdit: this.handleToggleEditName,
              onSubmit: this.handleRenameSubmit,
              ref: 'inlineInput',
              value: this.props.name,
              placeholder: 'API Name' }),


            this.props.teamId &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__js_components_base_Icons_TeamIcon__["a" /* default */], {
              size: 'xs',
              title: 'Shared with team',
              className: 'api-sidebar-list-item__meta__icon' }),



            !this.props.isEditable &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__js_components_base_Icons_LockedIcon__["a" /* default */], {
              size: 'xs',
              title: 'Read only',
              className: 'api-sidebar-list-item__meta__icon' })),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-sidebar-list-item__actions' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__APIItemActionsDropdown_APIItemActionsDropdown__["a" /* default */], {
              onSelect: this.handleDropdownActionSelect,
              onToggle: this.handleDropdownToggle,
              share: true,
              manage: true,
              remove: true,
              'delete': true,
              rename: true })))));





  }}) || _class;

/***/ }),

/***/ 3662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIItemActionsDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_components_base_Dropdowns__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_components_base_Icons_LockedIcon__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_components_base_Icons_CloseIcon__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_components_base_Icons_DuplicateIcon__ = __webpack_require__(3663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_components_base_Icons_ShareIcon__ = __webpack_require__(1397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_components_base_Icons_RenameIcon__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__js_components_base_Icons_MoreIcon__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__js_components_base_Icons_DeleteIcon__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants_APIActionsConstants__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__js_stores_get_store__ = __webpack_require__(6);
var _class;












let


APIItemActionsDropdown = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* observer */])(_class = class APIItemActionsDropdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleSelect(action) {
    this.props.onSelect && this.props.onSelect(action);
    this.handleToggle(false);
  }

  handleToggle(isOpen) {
    this.props.onToggle && this.props.onToggle(isOpen);
  }

  getDropdownActionWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'api-sidebar-request-dropdown-actions-wrapper': true });
  }

  getDisabledText(isDisabled) {
    if (isDisabled) {
      return 'Get online to perform this action';
    }
  }

  render() {
    let isOffline = !Object(__WEBPACK_IMPORTED_MODULE_13__js_stores_get_store__["a" /* getStore */])('SyncStatusStore').isSocketConnected;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getDropdownActionWrapperClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Dropdowns__["a" /* Dropdown */], {
            ref: 'menu',
            onSelect: this.handleSelect,
            onToggle: this.handleToggle,
            className: 'api-sidebar-request-actions-dropdown' },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Dropdowns__["b" /* DropdownButton */], {
              dropdownStyle: 'nocaret',
              type: 'custom' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__js_components_base_Buttons__["a" /* Button */], { className: 'api-sidebar-list-item__button__options' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__js_components_base_Icons_MoreIcon__["a" /* default */], { className: 'api-sidebar-list-item__actions__options' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Dropdowns__["c" /* DropdownMenu */], {
              'align-right': true },


            this.props.share &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Dropdowns__["d" /* MenuItem */], {
                refKey: __WEBPACK_IMPORTED_MODULE_12__constants_APIActionsConstants__["g" /* ACTION_TYPE_SHARE */],
                disabled: isOffline,
                disabledText: this.getDisabledText(isOffline) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__js_components_base_Icons_ShareIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--share' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Share API')),



            this.props.manage &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Dropdowns__["d" /* MenuItem */], {
                refKey: __WEBPACK_IMPORTED_MODULE_12__constants_APIActionsConstants__["d" /* ACTION_TYPE_MANAGE_ROLES */],
                disabled: isOffline,
                disabledText: this.getDisabledText(isOffline) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__js_components_base_Icons_LockedIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--manage' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Manage Roles')),



            this.props.rename &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Dropdowns__["d" /* MenuItem */], {
                refKey: __WEBPACK_IMPORTED_MODULE_12__constants_APIActionsConstants__["f" /* ACTION_TYPE_RENAME */],
                disabled: isOffline,
                disabledText: this.getDisabledText(isOffline) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__js_components_base_Icons_RenameIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--rename' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Rename')),



            this.props.duplicate &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Dropdowns__["d" /* MenuItem */], {
                refKey: __WEBPACK_IMPORTED_MODULE_12__constants_APIActionsConstants__["c" /* ACTION_TYPE_DUPLICATE */],
                disabled: isOffline,
                disabledText: this.getDisabledText(isOffline) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__js_components_base_Icons_DuplicateIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--duplicate' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Duplicate')),



            this.props.remove &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Dropdowns__["d" /* MenuItem */], {
                refKey: __WEBPACK_IMPORTED_MODULE_12__constants_APIActionsConstants__["e" /* ACTION_TYPE_REMOVE_FROM_WORKSPACE */],
                disabled: isOffline,
                disabledText: this.getDisabledText(isOffline) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__js_components_base_Icons_CloseIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--remove' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Remove from workspace')),



            this.props.delete &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__js_components_base_Dropdowns__["d" /* MenuItem */], {
                refKey: __WEBPACK_IMPORTED_MODULE_12__constants_APIActionsConstants__["b" /* ACTION_TYPE_DELETE */],
                disabled: isOffline,
                disabledText: this.getDisabledText(isOffline) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__js_components_base_Icons_DeleteIcon__["a" /* default */], { className: 'dropdown-menu-item-icon menu-icon--delete' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, 'Delete'))))));






  }}) || _class;

/***/ }),

/***/ 3663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DuplicateIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '12', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'pm-icon-duplicate', d: 'M0.437499 14C0.195672 14 0 13.8043 0 13.5625V3.06249C0 2.82066 0.195678 2.62499 0.437499 2.62499H1.3125C1.42871 2.62499 1.5398 2.67113 1.62183 2.75316C1.70386 2.83519 1.75001 2.94628 1.75001 3.0625V12.25H10.9375C11.0537 12.25 11.1648 12.2961 11.2468 12.3782C11.3289 12.4602 11.375 12.5713 11.375 12.6875V13.5625C11.375 13.6787 11.3289 13.7898 11.2468 13.8718C11.1648 13.9539 11.0537 14 10.9375 14L0.437499 14ZM14 0.437491V10.0625C14 10.1787 13.9538 10.2898 13.8718 10.3718C13.7898 10.4538 13.6787 10.5 13.5625 10.5H3.93749C3.69566 10.5 3.49999 10.3043 3.49999 10.0625V0.437499C3.49999 0.195672 3.69567 0 3.93749 0H13.5625C13.6787 0 13.7898 0.0461429 13.8718 0.128174C13.9538 0.210205 14 0.321289 14 0.437508V0.437491ZM11.8125 4.37499H9.62499V2.18749H7.87499V4.37499H5.68749V6.12498H7.87499V8.31248H9.62499V6.12498H11.8125V4.37499Z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#pm-icon-duplicate' }));



function DuplicateIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 3664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = APIIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(27);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '12', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'pm-icon-api', d: 'M7.81389 0L11.4403 2.09302V6.27907L7.81389 8.37209L4.18745 6.27907V2.09302L7.81389 0Z M12.3736 7.62793L16 9.72095V13.907L12.3736 16L8.74713 13.907V9.72095L12.3736 7.62793Z M7.25288 9.72095L3.62644 7.62793L3.8147e-06 9.72095V13.907L3.62644 16L7.25288 13.907V9.72095Z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: '#282828', fillRule: 'evenodd', xlinkHref: '#pm-icon-api' }));



function APIIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 3704:
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

/***/ 3748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Popover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_CloseIcon__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Tooltips__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Markdown__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_UIEventService__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_UIEventConstants__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_PieProgress__ = __webpack_require__(3749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_scrollparent__ = __webpack_require__(3750);
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
    renderOptions),
    _.get(renderOptions, 'onView', _.noop));
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
    __WEBPACK_IMPORTED_MODULE_6__services_UIEventService__["a" /* default */].publish(__WEBPACK_IMPORTED_MODULE_7__constants_UIEventConstants__["c" /* ONBOARDING_TARGET_CLICKED */]);
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
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                      className: 'popover-dismiss',
                      onClick: this.dismissPopover }, 'End lesson')),






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

/***/ 3749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(11);
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

/***/ 3750:
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

/***/ 653:
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
var factory = __webpack_require__(1437);

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

/***/ 654:
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

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XPathProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__XPathManager__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx__ = __webpack_require__(7);






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