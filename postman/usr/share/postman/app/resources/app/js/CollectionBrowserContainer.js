webpackJsonp([11],{

/***/ 1692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserFolderListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pureRenderDecorator__ = __webpack_require__(1563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_InlineInput__ = __webpack_require__(1491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_ContextMenu__ = __webpack_require__(1518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_FolderIcon__ = __webpack_require__(1566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CollectionBrowserFolderItemActions__ = __webpack_require__(2089);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__ = __webpack_require__(1454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(108);
var _dec, _class;







let






































CollectionBrowserFolderListItem = (_dec = Object(__WEBPACK_IMPORTED_MODULE_3__components_base_ContextMenu__["a" /* default */])([{ label: 'Rename', shortcut: 'rename', isVisible(props) {return props.isEditable;}, onClick(props, component) {component.toggleEditName();} }, { label: 'Edit', isVisible(props) {return props.isEditable;}, onClick(props, component) {component.handleActionTrigger(__WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_EDIT */]);} }, { label: 'Duplicate', shortcut: 'duplicate', isVisible(props) {return props.isEditable;}, onClick(props, component) {component.handleActionTrigger(__WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DUPLICATE */]);} }, { label: 'Delete', shortcut: 'delete', isVisible(props) {return props.isEditable;}, onClick(props, component) {component.handleActionTrigger(__WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_DELETE */]);} }], monitor => {return { isContextMenuOpen: monitor.isOpen };}), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class CollectionBrowserFolderListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = { showRename: true };

    this.handleActionTrigger = this.handleActionTrigger.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleEditName = this.handleToggleEditName.bind(this);
  }

  handleFolderSelect(folder) {
    if (this.props.isContextMenuOpen()) {
      return;
    }

    this.props.onFolderSelect && this.props.onFolderSelect(folder);
  }

  toggleEditName() {
    this.refs.inlineInput && this.refs.inlineInput.toggleEdit();
  }

  handleToggleEditName(isEditing) {
    const inlineInput = this.refs.inlineInput;
    if (inlineInput) {
      inlineInput.focus();
      inlineInput.selectAll();
    }
    this.setState({ showRename: !isEditing });
  }

  handleSubmit(value) {
    this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], this.props.folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["r" /* ACTION_TYPE_RENAME */], value);
  }

  handleActionTrigger(entity, entityId, action) {
    if (action === __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_RENAME_TOGGLE */]) {
      this.toggleEditName();
    } else
    {
      this.props.onActionTriggered && this.props.onActionTriggered(entity, entityId, action);
    }
  }

  render() {

    let { folder } = this.props;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__folder' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'collection-browser-list-item__folder__head',
            onClick: this.handleFolderSelect.bind(this, folder) },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__folder__head__icon-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Icons_FolderIcon__["a" /* default */], { className: 'collection-browser-list-item__folder__head__icon icon_folder' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__folder__head__meta' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_InlineInput__["a" /* default */], {
              className: 'collection-browser-list-item__folder__head__meta__name',
              placeholder: 'Folder Name',
              ref: 'inlineInput',
              value: folder.name,
              onSubmit: this.handleSubmit,
              onToggleEdit: this.handleToggleEditName })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CollectionBrowserFolderItemActions__["a" /* default */], {
            folder: folder,
            isEditable: this.props.isEditable,
            showRename: this.state.showRename,
            onActionTriggered: this.handleActionTrigger }))));




  }}) || _class) || _class);

/***/ }),

/***/ 1693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserRequestListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_RequestMethodHelper__ = __webpack_require__(1601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_InlineInput__ = __webpack_require__(1491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_InlineEditor__ = __webpack_require__(1520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_ContextMenu__ = __webpack_require__(1518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_Icons_EditIcon__ = __webpack_require__(1465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_base_Icons_RenameIcon__ = __webpack_require__(1517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Icons_DeleteIcon__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_Icons_CopyIcon__ = __webpack_require__(1472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__ = __webpack_require__(1454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mobx_react__ = __webpack_require__(108);
var _dec, _class;














let






































CollectionBrowserRequestListItem = (_dec = Object(__WEBPACK_IMPORTED_MODULE_6__components_base_ContextMenu__["a" /* default */])([{ label: 'Rename', shortcut: 'rename', isVisible(props) {return props.isEditable;}, onClick(props, component) {component.toggleEditName();} }, { label: 'Edit', isVisible(props) {return props.isEditable;}, onClick(props, component) {component.handleActionTrigger(props.request.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_EDIT */]);} }, { label: 'Duplicate', shortcut: 'duplicate', isVisible(props) {return props.isEditable;}, onClick(props, component) {component.handleActionTrigger(props.request.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DUPLICATE */]);} }, { label: 'Delete', shortcut: 'delete', isVisible(props) {return props.isEditable;}, onClick(props, component) {component.handleActionTrigger(props.request.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_DELETE */]);} }], monitor => {return { isContextMenuOpen: monitor.isOpen };}), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_12_mobx_react__["a" /* observer */])(_class = class CollectionBrowserRequestListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: false,
      showRename: true };


    this.handleToggleShowDescription = this.handleToggleShowDescription.bind(this);
    this.handleToggleEditName = this.handleToggleEditName.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleRequestDescriptionUpdate = this.handleRequestDescriptionUpdate.bind(this);
  }

  getDescriptionClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()('collection-browser-list-item__request__description', { 'is-open': this.state.showDescription });
  }

  getMethodClasses() {
    let { method } = this.props.request;
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'collection-browser-list-item__request__label': true,
      'request-method--GET': method && _.includes(method.toUpperCase(), 'GET'),
      'request-method--PUT': method && _.includes(method.toUpperCase(), 'PUT'),
      'request-method--POST': method && _.includes(method.toUpperCase(), 'POST'),
      'request-method--DELETE': method && _.includes(method.toUpperCase(), 'DELETE') });

  }

  handleToggleShowDescription() {
    if (this.props.isContextMenuOpen()) {
      return;
    }

    this.setState(prevState => {
      return { showDescription: !prevState.showDescription };
    });
  }

  toggleEditName() {
    this.refs.inlineInput && this.refs.inlineInput.toggleEdit();
  }

  handleToggleEditName(isEditing) {
    const inlineInput = this.refs.inlineInput;
    if (isEditing && inlineInput) {
      inlineInput.focus();
      inlineInput.selectAll();
    }
    this.setState({ showRename: !isEditing });
  }

  handleNameUpdate(value) {
    this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], this.props.request.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["r" /* ACTION_TYPE_RENAME */], value);
  }

  handleActionTrigger(entityId, action) {
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_RENAME_TOGGLE */]) {
      this.toggleEditName();
    } else
    {
      this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], entityId, action);
    }
  }

  handleActionClick(entityId, action, e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.handleActionTrigger(entityId, action);
  }

  handleRequestDescriptionUpdate(value) {
    this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], this.props.request.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DESCRIPTION_UPDATE */], value);
  }

  componentWillReceiveProps(nextProps) {
    const inlineEditor = this.refs.inlineEditor;
    if (inlineEditor) {
      if (!nextProps.isOpen && this.props.isOpen) {
        inlineEditor.reset();
      } else
      if (nextProps.browserWidth !== this.props.browserWidth) {
        inlineEditor.refresh();
      }
    }
  }

  render() {

    let descriptionClasses = this.getDescriptionClasses();

    const { name, description, method, id } = this.props.request;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__request-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { onClick: this.handleToggleShowDescription },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__request' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__request__label-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getMethodClasses() },
                __WEBPACK_IMPORTED_MODULE_3__utils_RequestMethodHelper__["a" /* default */].getMethodAbbreviation(method))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__request__meta' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_InlineInput__["a" /* default */], {
                className: 'collection-browser-list-item__request__name',
                placeholder: 'Request Name',
                ref: 'inlineInput',
                value: name,
                onSubmit: this.handleNameUpdate,
                onToggleEdit: this.handleToggleEditName })),



            this.props.isEditable &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__request__actions collection-browser-actions-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["b" /* ButtonGroup */], null,
                this.state.showRename && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                    type: 'icon',
                    onClick: this.handleActionClick.bind(this, id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_RENAME_TOGGLE */]) },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_Icons_RenameIcon__["a" /* default */], { className: 'collection-browser-collection-rename-icon' })),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                    type: 'icon',
                    onClick: this.handleActionClick.bind(this, id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_EDIT */]) },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_Icons_EditIcon__["a" /* default */], { className: 'collection-browser-collection-edit-icon' })),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                    type: 'icon',
                    onClick: this.handleActionClick.bind(this, id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DUPLICATE */]) },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Icons_CopyIcon__["a" /* default */], { className: 'collection-browser-collection-duplicate-icon' })),

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                    type: 'icon',
                    onClick: this.handleActionClick.bind(this, id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_DELETE */]) },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Icons_DeleteIcon__["a" /* default */], { className: 'collection-browser-collection-delete-icon' })))))),






        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: descriptionClasses },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_InlineEditor__["a" /* default */], {
            className: 'collection-browser-request-description-wrapper',
            editable: this.props.isEditable,
            fontSize: 11,
            placeholder: 'Adding a description makes your docs better',
            ref: 'inlineEditor',
            value: description,
            viewLessText: '(less)',
            viewMoreText: '(more)',
            onUpdate: this.handleRequestDescriptionUpdate }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-expandable-view-list-item_request__openinbuilder' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                className: 'collection-expandable-view-list-item_request__openinbuilder_link',
                onClick: this.handleActionTrigger.bind(this, id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_OPEN_IN_BUILDER */]) }, 'Open in builder')))));







  }}) || _class) || _class);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 1697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RefreshIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(25);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


const icon =
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { width: '16', height: '16', viewBox: '0 0 16 16' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('defs', null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { id: 'refresh', d: 'M13.409 2.111A7.97 7.97 0 0 0 8 0C3.589 0 0 3.589 0 8s3.589 8 8 8a7.975 7.975 0 0 0 5.647-2.339l-1.583-1.583A5.742 5.742 0 0 1 8 13.76 5.766 5.766 0 0 1 2.24 8 5.766 5.766 0 0 1 8 2.24c1.466 0 2.805.551 3.823 1.457L9.92 5.6h5.44V.16L13.41 2.111z' })),

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { fill: 'gray', fillRule: 'nonzero', xlinkHref: '#refresh' }));



function RefreshIcon(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], _extends({},
    props, {
      icon: icon })));


}

/***/ }),

/***/ 1698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MOCK_CALLS = 'mock_usage';
/* harmony export (immutable) */ __webpack_exports__["a"] = MOCK_CALLS;

const MONITOR_RUNS = 'monitor_request_runs';
/* harmony export (immutable) */ __webpack_exports__["b"] = MONITOR_RUNS;


/***/ }),

/***/ 2085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollectionBrowserContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_draggable__ = __webpack_require__(1471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_collections_browser_CollectionBrowser__ = __webpack_require__(2086);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_AppSettingsDefaults__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_requests_Request__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_services_DocumenterService__ = __webpack_require__(1469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_services_CollectionSidebarService__ = __webpack_require__(1519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_CollectionActionsUtil__ = __webpack_require__(1602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_services_AuthHandlerService__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__ = __webpack_require__(1454);
var _class;
















const TABS = {
  DOCUMENTATION: 'Documentation',
  MONITORS: 'Monitors',
  MOCKS: 'Mocks',
  ACTIVITY: 'Activity' };let



CollectionBrowserContainer = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* observer */])(_class = class CollectionBrowserContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      browserWidth: __WEBPACK_IMPORTED_MODULE_5__constants_AppSettingsDefaults__["a" /* default */].ui.REQUESTER_BROWSER_WIDTH,
      collectionId: null,
      activeTab: TABS.DOCUMENTATION,
      isResizing: false,
      collectionRestoreTarget: null };


    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
    this.handleFolderSelect = this.handleFolderSelect.bind(this);
    this.handleViewToggle = this.handleViewToggle.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleLoadMoreActivityFeed = this.handleLoadMoreActivityFeed.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleCollectionNameUpdate = this.handleCollectionNameUpdate.bind(this);
    this.handleCollectionDescriptionUpdate = this.handleCollectionDescriptionUpdate.bind(this);
    this.handleRestore = this.handleRestore.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentWillMount() {
    this.setState({ browserWidth: pm.settings.getSetting('requesterBrowserWidth') || __WEBPACK_IMPORTED_MODULE_5__constants_AppSettingsDefaults__["a" /* default */].ui.REQUESTER_BROWSER_WIDTH });
    pm.mediator.on('showCollectionBrowser', this.handleOpen);
    pm.mediator.on('hideCollectionBrowser', this.handleClose);
    pm.mediator.on('toggleSidebar', this.handleClose);
    this.store = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('CollectionActivityFeedStore');
  }

  componentWillUnmount() {
    pm.mediator.off('showCollectionBrowser', this.handleOpen);
    pm.mediator.off('hideCollectionBrowser', this.handleClose);
    pm.mediator.off('toggleSidebar', this.handleClose);
    this.store = null;
  }

  handleAction(type, id, action, data) {
    if (type === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */]) {
      this.handleCollectionActions(id, action);
    } else
    if (type === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */]) {
      this.handleFolderActions(id, action, data);
    } else
    if (type === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */]) {
      this.handleRequestActions(id, action, data);
    }
  }

  handleCollectionActions(id, action) {
    let store = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('EnvironmentStore');
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RUN */]) {
      let environmentId = null,
      environment = store.find(Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id);
      if (environment) {
        environmentId = environment.id;
      }
      pm.eventBus.channel('runner-events').publish(
      Object(__WEBPACK_IMPORTED_MODULE_10__modules_model_event__["a" /* createEvent */])(
      'launch',
      'runner',
      {
        workspace: Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace,
        collection: id,
        folder: null,
        environment: environmentId }));



    } else
    {
      Object(__WEBPACK_IMPORTED_MODULE_12__utils_CollectionActionsUtil__["a" /* default */])(id, action, {}, { origin: 'collection_browser' });
    }
  }

  handleFolderActions(id, action, data) {
    let store = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('EnvironmentStore');
    let collection = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('CollectionStore').find(this.state.collectionId);

    if (!collection) {
      return;
    }

    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RUN */]) {
      let environmentId = null,
      environment = store.find(Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('ActiveEnvironmentStore').id),
      collectionId = null;
      if (environment) {
        environmentId = environment.id;
      }
      let folder = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('FolderStore').find(id);
      if (folder) {
        collectionId = folder.collection;
      }
      pm.eventBus.channel('runner-events').publish(
      Object(__WEBPACK_IMPORTED_MODULE_10__modules_model_event__["a" /* createEvent */])(
      'launch',
      'runner',
      {
        workspace: Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace,
        collection: collectionId,
        folder: id,
        environment: environmentId }));



    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_EDIT */]) {
      pm.mediator.trigger('showEditFolderModal', id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]) {
      pm.mediator.trigger('showAddFolderModal', _.get(collection, 'id'), id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DUPLICATE */]) {
      let duplicateFolderEvent = {
        name: 'duplicate',
        namespace: 'folder',
        data: { folder: { id } } };

      Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])(duplicateFolderEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          console.error('Error in duplicating folder', response.error);
          return;
        }
      }).
      catch(err => {
        console.error('Error in pipeline while duplicating folder', err);
      });
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_DELETE */]) {
      pm.mediator.trigger('showDeleteFolderModal', id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["r" /* ACTION_TYPE_RENAME */]) {
      let updateFolderEvent = {
        name: 'update',
        namespace: 'folder',
        data: { id, name: data } };


      Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])(updateFolderEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          console.error('Error in renaming folder', response.error);
          return;
        }
      }).
      catch(err => {
        console.error('Error in pipeline while renaming folder', err);
      });
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DESCRIPTION_UPDATE */]) {
      let updateFolderEvent = {
        name: 'update',
        namespace: 'folder',
        data: { id, description: data } };


      Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])(updateFolderEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          console.error('Error in renaming folder', response.error);
          return;
        }
      }).
      catch(err => {
        console.error('Error in pipeline while renaming folder', err);
      });
    }
  }

  handleRequestActions(id, action, data) {

    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_EDIT */]) {
      pm.mediator.trigger('editCollectionRequest', id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DUPLICATE */]) {
      let duplicateRequestEvent = {
        name: 'duplicate',
        namespace: 'request',
        data: { request: { id } } };


      Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])(duplicateRequestEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          console.error('Error in duplicating request', response.error);
          return;
        }
      }).
      catch(err => {
        console.error('Error in pipeline while duplicating request', err);
      });
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_DELETE */]) {
      pm.mediator.trigger('showDeleteRequestModal', id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_OPEN_IN_BUILDER */]) {
      __WEBPACK_IMPORTED_MODULE_11__modules_services_CollectionSidebarService__["a" /* default */].openRequestInTab(id);
      this.handleClose();
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["r" /* ACTION_TYPE_RENAME */]) {
      let updateRequestEvent = {
        name: 'update',
        namespace: 'request',
        data: { id, name: data } };


      Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])(updateRequestEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          console.error('Error in renaming request', response.error);
          return;
        }
      }).
      catch(err => {
        console.error('Error in pipeline while renaming request', err);
      });
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DESCRIPTION_UPDATE */]) {
      let updateRequestEvent = {
        name: 'update',
        namespace: 'request',
        data: { id, description: data } };


      Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])(updateRequestEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          console.error('Error in renaming request', response.error);
          return;
        }
      }).
      catch(err => {
        console.error('Error in pipeline while renaming request', err);
      });
    }
  }

  handleRestore(maxId) {
    let restoreTarget = {
      collectionId: this.state.collectionId,
      ownerId: this.state.collection.owner,
      maxId: maxId };


    this.setState({ collectionRestoreTarget: restoreTarget }, () => {
      pm.syncManager.restoreCollection(restoreTarget, () => {
        this.setState({ collectionRestoreTarget: null });
      });
    });
  }

  handleClose() {
    if (!this.state.isOpen) {
      return;
    }
    this.setState({
      isOpen: false,
      collectionId: null,
      activeTab: TABS.DOCUMENTATION });


    this.store.reset();
    pm.settings.setSetting('requesterBrowserWidth', this.state.browserWidth);
    pm.mediator.trigger('collectionBrowserClosed');
  }

  handleOpen(id, collectionTab = TABS.DOCUMENTATION) {
    if (!id) {
      this.handleClose();
      return;
    }
    pm.mediator.trigger('collectionBrowserOpened', id);

    if (this.state.collectionId === id && this.state.activeTab === collectionTab) {
      return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('ResourceLimitMessagesStore').fetch();

    let scaledBrowserWidth = pm.settings.getSetting('requesterBrowserWidth'),
    collection = this.getCollection(id);

    this.setState({
      isOpen: true,
      collectionId: id,
      activeTab: collectionTab || TABS.DOCUMENTATION,
      collection,
      browserWidth: this._checkBrowserWidthBounds(scaledBrowserWidth),
      isCollectionDetails: this.getCollectionViewStatus(id) },
    () => {
      this.store.reset();
      this.store.initialize(this.state.collection);
    });
  }

  handleViewToggle() {
    this.setState({ isCollectionDetails: !this.state.selectedFolder });
  }

  handleTabChange(tab) {
    this.setState({ activeTab: tab });
  }

  handleFolderSelect(folder) {
    this.setState({
      selectedFolder: folder,
      isCollectionDetails: !folder });

  }

  getCollection(collectionId) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('CollectionStore').find(collectionId);
  }

  getCollectionViewStatus(collectionId) {
    let selectedFolder = this.state.selectedFolder,
    collection = this.getCollection(collectionId);
    if (selectedFolder && collection) {
      let folders = _.get(collection, 'folders', []),
      folder = _.find(folders, ['id', selectedFolder.id]);
      return !folder;
    }
    return true;
  }

  findAndSetContainerState(collectionId, isOpen) {
    if (isOpen) {
      this.setState({
        collection: this.getCollection(collectionId),
        isCollectionDetails: this.getCollectionViewStatus(collectionId) });

    }
  }

  handleLoadMoreActivityFeed() {
    this.store.loadMore();
  }

  _checkBrowserWidthBounds(width) {
    let windowWidth = window.innerWidth,
    sidebarWidth = pm.settings.getSetting('requesterSidebarWidth'),
    defaultWidth = __WEBPACK_IMPORTED_MODULE_5__constants_AppSettingsDefaults__["a" /* default */].ui.REQUESTER_BROWSER_WIDTH,
    currentUser = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    adjustedDefaultWidth = currentUser.isLoggedIn ? defaultWidth : defaultWidth + 50;

    if (width + sidebarWidth > windowWidth - 30) {
      return windowWidth - sidebarWidth - 30;
    }

    if (width < adjustedDefaultWidth) {
      return adjustedDefaultWidth;
    }

    return width;
  }

  handleDrag(event, data) {
    let scaledClientX = data.x,
    sidebarWidth = pm.settings.getSetting('requesterSidebarWidth'),
    browserWidth = scaledClientX - sidebarWidth;
    this.setState({
      browserWidth: this._checkBrowserWidthBounds(browserWidth),
      isResizing: true });

  }

  handleDragStop() {
    pm.settings.setSetting('requesterBrowserWidth', this.state.browserWidth);
    this.setState({ isResizing: false });
  }

  handleSignIn() {
    __WEBPACK_IMPORTED_MODULE_13__modules_services_AuthHandlerService__["a" /* default */].login();
  }

  handleCollectionNameUpdate(name) {
    let updateCollectionEvent = {
      name: 'update',
      namespace: 'collection',
      data: { id: this.state.collectionId, name } };


    Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])(updateCollectionEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        console.error('Error in renaming collection', response.error);
        return;
      }
    }).
    catch(err => {
      console.error('Error in pipeline while renaming collection', err);
    });
  }

  handleCollectionDescriptionUpdate(description) {

    let updateCollectionEvent = {
      name: 'update',
      namespace: 'collection',
      data: { id: this.state.collectionId, description } };


    Object(__WEBPACK_IMPORTED_MODULE_7__modules_pipelines_user_action__["a" /* default */])(updateCollectionEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        console.error('Error in updataing collection description', response.error);
        return;
      }
    }).
    catch(err => {
      console.error('Error in pipeline while updataing collection description', err);
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



    pm.mediator.trigger('showAddToCollectionModal', new __WEBPACK_IMPORTED_MODULE_6__models_requests_Request__["a" /* Request */]({ method: 'GET' }), initialSelection);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'collection-browser-wrapper': true,
      'is-hidden': !this.state.isOpen });

  }

  render() {
    let collectionId = this.state.collectionId,
    collection = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('CollectionStore').find(collectionId),
    classes = this.getClasses(),
    browserStyle = {
      width: this.state.browserWidth + 5 + 'px',
      WebkitUserSelect: this.state.isResizing ? 'none' : 'text' },

    currentUser = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    isLoggedIn = currentUser && currentUser.isLoggedIn,
    isProUser = currentUser && currentUser.teamSyncEnabled && currentUser.syncEnabled;

    // Additonal 5px to avoid clicking outside browser on drag end
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          className: classes,
          style: browserStyle },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_collections_browser_CollectionBrowser__["a" /* default */], {
          activeTab: this.state.activeTab,
          activityFeed: this.store,
          browserWidth: this.state.browserWidth,
          className: 'collection-browser',
          collection: collection,
          collectionRestoreTarget: this.state.collectionRestoreTarget,
          isCollectionDetails: this.state.isCollectionDetails,
          isLoggedIn: isLoggedIn,
          isOpen: this.state.isOpen,
          isProUser: isProUser,
          selectedFolder: this.state.selectedFolder,
          onActionTriggered: this.handleAction,
          onAddRequest: this.handleCreateRequest,
          onClose: this.handleClose,
          onCollectionDescriptionUpdate: this.handleCollectionDescriptionUpdate,
          onCollectionDetailsNavigate: this.handleFolderSelect,
          onCollectionNameUpdate: this.handleCollectionNameUpdate,
          onFolderSelect: this.handleFolderSelect,
          onLoadMoreActivityFeed: this.handleLoadMoreActivityFeed,
          onRestore: this.handleRestore,
          onSignIn: this.handleSignIn,
          onTabChange: this.handleTabChange,
          onViewToggle: this.handleViewToggle }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_draggable__["DraggableCore"], {
            offsetParent: document.body,
            onDrag: this.handleDrag,
            onStop: this.handleDragStop },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-left-sidebar-resize-handle requester-browser-resize-handle' }))));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2086:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CollectionBrowserCollectionDetails__ = __webpack_require__(2087);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CollectionBrowserFolderDetails__ = __webpack_require__(2149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_CollectionActionsConstants__ = __webpack_require__(1454);









let

CollectionBrowser = class CollectionBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Details',
      showFloatingEdit: false,
      isEditingDescription: false };


    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleActionTrigger = this.handleActionTrigger.bind(this);
    this.handleFolderSelect = this.handleFolderSelect.bind(this);
    this.toggleCollectionView = this.toggleCollectionView.bind(this);
    this.handleTeamLabelClick = this.handleTeamLabelClick.bind(this);
    this.handleFloatingEditClick = this.handleFloatingEditClick.bind(this);
    this.handleEditDescriptionToggle = this.handleEditDescriptionToggle.bind(this);
    this.toggleFloatingEdit = this.toggleFloatingEdit.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleCollectionDetailsToggle = this.handleCollectionDetailsToggle.bind(this);
  }

  getCollectionBrowserClasses() {
    return __WEBPACK_IMPORTED_MODULE_6_classnames___default()({
      'collection-browser-body': true,
      'is-hidden': this.state.activeTab === 'Activity' });

  }

  getCollectionDetailsWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_6_classnames___default()({
      'collection-browser-collection-details-wrapper': true,
      'is-hidden': !this.props.isCollectionDetails });

  }

  getFolderDetailsWrapperClasses() {
    return __WEBPACK_IMPORTED_MODULE_6_classnames___default()({
      'collection-browser-folder-details-wrapper': true,
      'is-hidden': this.props.isCollectionDetails });

  }

  getFloatingEditClasses() {
    return __WEBPACK_IMPORTED_MODULE_6_classnames___default()({
      'collection-browser-floating-edit-btn': true,
      'is-hidden': !this.state.showFloatingEdit });

  }

  handleFolderSelect(folder) {
    this.setState({ isEditingDescription: false });
    this.props.onFolderSelect && this.props.onFolderSelect(folder);
  }

  toggleCollectionView() {
    this.setState({ isEditingDescription: false });
    this.props.onViewToggle && this.props.onViewToggle();
  }

  handleTabChange(tab) {
    this.setState({
      activeTab: tab,
      showFloatingEdit: false });

  }
  handleActionTrigger(entity, entityId, action, data) {
    this.props.onActionTriggered && this.props.onActionTriggered(entity, entityId, action, data);
  }

  handleTeamLabelClick() {
    this.props.onActionTriggered && this.props.onActionTriggered('collection', this.props.collection.id, __WEBPACK_IMPORTED_MODULE_7__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_SHARE */]);
  }

  handleScroll() {
    let { collection } = this.props;

    if (this.state.isEditingDescription || collection && !collection.isEditable || !this.collectionBrowserNode) {
      return;
    }

    this.toggleFloatingEdit();
  }

  toggleFloatingEdit() {
    if (this.state.isEditingDescription) {
      return;
    }

    let descriptionWrapper;
    if (this.props.isCollectionDetails) {
      descriptionWrapper = this.collectionBrowserNode.querySelector('.collection-browser-details-description-wrapper');
    } else
    {
      descriptionWrapper = this.collectionBrowserNode.querySelector('.collection-browser-folder-description-wrapper');
    }

    let descriptionOffsetBottom = _.get(descriptionWrapper, 'offsetTop') + _.get(descriptionWrapper, 'offsetHeight'),
    scrollTop = _.get(this.collectionBrowserNode, 'scrollTop'),
    topOffset = 80;

    // If scrollTop > description height, hide the button
    if (scrollTop + topOffset > descriptionOffsetBottom) {
      if (this.state.showFloatingEdit) {
        this.setState({ showFloatingEdit: false });
      }
    } else
    if (scrollTop > 100 && !this.state.showFloatingEdit) {
      this.setState({ showFloatingEdit: true });
    } else
    if (scrollTop <= 100 && this.state.showFloatingEdit) {
      this.setState({ showFloatingEdit: false });
    }
  }

  handleFloatingEditClick() {
    this.collectionBrowserScrollTop = _.get(this.collectionBrowserNode, 'scrollTop');
    this.collectionBrowserScrollHeight = _.get(this.collectionBrowserNode, 'scrollHeight');
    this.collectionBrowserOffsetHeight = _.get(this.collectionBrowserNode, 'offsetHeight');

    this.setState({
      isEditingDescription: true,
      showFloatingEdit: false });

  }

  handleEditDescriptionToggle(isEditingDescription) {
    if (isEditingDescription) {
      let collectionBrowserScrollHeight = _.get(this.collectionBrowserNode, 'scrollHeight'),
      scrollHeightDiff = collectionBrowserScrollHeight - this.collectionBrowserScrollHeight;

      // If already at top, maintain the position
      if (!this.collectionBrowserScrollTop) {
        _.set(this.collectionBrowserNode, 'scrollTop', 0);
      }

      // If already at bottom, maintain the position
      else if (this.collectionBrowserScrollTop + this.collectionBrowserOffsetHeight === this.collectionBrowserScrollHeight) {
          _.set(this.collectionBrowserNode, 'scrollTop', collectionBrowserScrollHeight);
        } else

        {
          _.set(this.collectionBrowserNode, 'scrollTop', this.collectionBrowserScrollTop + scrollHeightDiff);
        }

      this.collectionBrowserScrollTop = null;
    }

    this.setState({ isEditingDescription }, this.toggleFloatingEdit);
  }

  handleCollectionDetailsToggle() {
    this.toggleCollectionView();
  }

  componentDidMount() {
    this.collectionBrowserNode = this.collectionBrowser && Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.collectionBrowser);
    this.collectionBrowserNode && this.collectionBrowserNode.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnMount() {
    this.collectionBrowserNode && this.collectionBrowserNode.removeEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.collection && this.props.collection && nextProps.collection.id !== this.props.collection.id ||
    nextProps.isOpen !== this.props.isOpen) {
      this.setState({
        showFloatingEdit: false,
        isEditingDescription: false });

    }
  }

  render() {

    let collectionDetailsClasses = this.getCollectionDetailsWrapperClasses(),
    folderDetailsClasses = this.getFolderDetailsWrapperClasses(),
    collection = this.props.collection || {};

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.props.className },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: this.getCollectionBrowserClasses(),
            ref: ref => {return this.collectionBrowser = ref;} },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__CollectionBrowserCollectionDetails__["a" /* default */], {
            activeTab: this.props.activeTab,
            browserWidth: this.props.browserWidth,
            className: collectionDetailsClasses,
            collection: collection,
            isEditingDescription: _.isEmpty(this.props.selectedFolder) && this.state.isEditingDescription,
            isOpen: this.props.isOpen,
            onClose: this.props.onClose,
            onFolderSelect: this.handleFolderSelect,
            onActionTriggered: this.handleActionTrigger,
            onAddRequest: this.props.onAddRequest,
            onTeamLabelClick: this.handleTeamLabelClick,
            onCollectionNameUpdate: this.props.onCollectionNameUpdate,
            onCollectionDescriptionUpdate: this.props.onCollectionDescriptionUpdate,
            onEditCollectionDescriptionToggle: this.handleEditDescriptionToggle,
            onEditCollectionNameToggle: this.handleCollectionNameEditToggle,

            activityFeed: this.props.activityFeed,
            collectionRestoreTarget: this.props.collectionRestoreTarget,
            enableRestore: this.props.isProUser && collection.isEditable,
            isLoggedIn: this.props.isLoggedIn,
            onLoadMore: this.props.onLoadMoreActivityFeed,
            onSignIn: this.props.onSignIn,
            onTabChange: this.props.onTabChange,
            onRestore: this.props.onRestore }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CollectionBrowserFolderDetails__["a" /* default */], {
            browserWidth: this.props.browserWidth,
            className: folderDetailsClasses,
            collection: collection,
            isOpen: this.props.isOpen,
            onClose: this.props.onClose,
            folder: this.props.selectedFolder,
            onFolderSelect: this.handleFolderSelect,
            onAddRequest: this.props.onAddRequest,
            onFolderEditDescriptionToggle: this.handleEditDescriptionToggle,
            onActionTriggered: this.handleActionTrigger,
            onCollectionDetailsNavigate: this.props.onCollectionDetailsNavigate,
            isEditingDescription: !_.isEmpty(this.props.selectedFolder) && this.state.isEditingDescription }))));




  }};


CollectionBrowser.defaultProps = { selectedFolder: {} };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2087:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserCollectionDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_InlineInput__ = __webpack_require__(1491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Icons_EditIcon__ = __webpack_require__(1465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Icons_CloseIcon__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CollectionBrowserCollectionContents__ = __webpack_require__(2088);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_collections_browser_CollectionBrowserMocksContainer__ = __webpack_require__(2118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_collections_browser_CollectionBrowserMonitorListContainer__ = __webpack_require__(2123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CollectionBrowserActivityfeed__ = __webpack_require__(2128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CollectionBrowserCollectionAction__ = __webpack_require__(2148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_util__ = __webpack_require__(9);
var _class;















const TABS = {
  DOCUMENTATION: 'Documentation',
  MONITORS: 'Monitors',
  MOCKS: 'Mocks',
  ACTIVITY: 'Activity' };let



CollectionBrowserCollectionDetails = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class CollectionBrowserCollectionDetails extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { showEditNameToggle: true };
    this.handleActionTrigger = this.handleActionTrigger.bind(this);
    this.handleFolderSelect = this.handleFolderSelect.bind(this);
    this.handleToggleEditName = this.handleToggleEditName.bind(this);
    this.handleEditName = this.handleEditName.bind(this);
  }

  handleActionTrigger(entity, entityId, action, data) {
    this.props.onActionTriggered && this.props.onActionTriggered(entity, entityId, action, data);
  }

  handleFolderSelect(folder) {
    this.props.onFolderSelect && this.props.onFolderSelect(folder);
  }

  getCollectionDetailHeaderClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'collection-browser-details-header': true,
      'collection-browser-details-header--edit': !this.state.showEditNameToggle,
      'editable': this.props.collection.isEditable });

  }

  getMetaClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'collection-browser-meta-info': true });
  }

  getTabContentClass(tab) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'is-hidden': tab !== this.props.activeTab });
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

  handleToggleEditName(isEditing) {
    const inlineInput = this.refs.inlineInput;
    if (isEditing && inlineInput) {
      inlineInput.focus();
      inlineInput.selectAll();
    } else
    {
      this.setState({ showEditNameToggle: true });
    }
  }

  handleEditName() {
    this.setState({ showEditNameToggle: false }, () => {
      this.refs.inlineInput && this.refs.inlineInput.startEditing();
    });
  }

  getUsername(owner, currentUser) {
    return __WEBPACK_IMPORTED_MODULE_14__utils_util__["a" /* default */].getUserNameForId(owner, currentUser);
  }

  render() {

    let collection = this.props.collection,
    formattedTime = __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default.a.getFormattedDate(collection.updatedAt),
    activeTab = this.props.activeTab || TABS.DOCUMENTATION,
    currentUser = Object(__WEBPACK_IMPORTED_MODULE_13__stores_get_store__["a" /* getStore */])('CurrentUserStore');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.props.className },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-details-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getCollectionDetailHeaderClasses() },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_InlineInput__["a" /* default */], {
              className: 'collection-browser-details-header__name',
              placeholder: 'Collection Name',
              ref: 'inlineInput',
              value: _.get(collection, 'name'),
              onSubmit: this.props.onCollectionNameUpdate,
              onToggleEdit: this.handleToggleEditName }),


            this.state.showEditNameToggle && collection.isEditable &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'collection-browser-details-header__edit-icon-wrapper',
                onClick: this.handleEditName },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Icons_EditIcon__["a" /* default */], {
                className: 'collection-browser-details-header__edit-icon',
                size: 'xs' })),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-header-close-btn' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Icons_CloseIcon__["a" /* default */], {
                className: 'collection-browser-header-close-icon',
                onClick: this.props.onClose }))),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-meta' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getMetaClasses() },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-meta__field collection-browser-meta--last-modified' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'collection-browser-meta-label' }, 'Last Modified'),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'collection-browser-meta-value' },
                  _.upperFirst(formattedTime))),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-meta__field collection-browser-meta--owner' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'collection-browser-meta-label' }, 'Owner'),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'collection-browser-meta-value' },
                  collection.owner === (currentUser && currentUser.id) ? 'You' : this.getUsername(collection.owner, currentUser))),




              collection.owner !== (currentUser && currentUser.id) &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-meta__field collection-browser-meta--owner' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'collection-browser-meta-label' }, 'Permissions'),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'collection-browser-meta-value' },
                  collection.isEditable ? 'View & Edit' : 'View Only'))))),







        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__CollectionBrowserCollectionAction__["a" /* default */], {
          collection: collection,
          isPRO: currentUser && currentUser.syncEnabled && currentUser.isLoggedIn && currentUser.teamSyncEnabled,
          onActionTriggered: this.handleActionTrigger }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__["b" /* Tabs */], {
            activeRef: activeTab,
            className: 'collection-browser-tabs-wrapper',
            defaultActive: TABS.DOCUMENTATION,
            type: 'primary',
            onChange: this.props.onTabChange },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__["a" /* Tab */], { refKey: TABS.DOCUMENTATION }, 'Documentation'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__["a" /* Tab */], { refKey: TABS.MONITORS }, 'Monitors'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__["a" /* Tab */], { refKey: TABS.MOCKS }, 'Mocks'),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__["a" /* Tab */], { refKey: TABS.ACTIVITY }, 'Activity')),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__CollectionBrowserCollectionContents__["a" /* default */], {
          className: this.getTabContentClass(TABS.DOCUMENTATION),
          collection: collection,
          isEditable: collection.isEditable,
          isOpen: this.props.isOpen,
          onActionTriggered: this.handleActionTrigger,
          onAddRequest: this.props.onAddRequest,
          onFolderSelect: this.handleFolderSelect,
          onToggleEdit: this.props.onEditCollectionDescriptionToggle,
          onUpdate: this.props.onCollectionDescriptionUpdate,
          browserWidth: this.props.browserWidth }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__containers_collections_browser_CollectionBrowserMonitorListContainer__["a" /* default */], {
          className: this.getTabContentClass(TABS.MONITORS),
          collection: this.props.collection,
          isHidden: activeTab !== TABS.MONITORS }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__containers_collections_browser_CollectionBrowserMocksContainer__["a" /* default */], {
          className: this.getTabContentClass(TABS.MOCKS),
          collection: this.props.collection,
          isHidden: activeTab !== TABS.MOCKS }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__CollectionBrowserActivityfeed__["a" /* default */], {
          activityFeed: this.props.activityFeed,
          activityName: this.props.activityName,
          className: this.getTabContentClass(TABS.ACTIVITY),
          collectionRestoreTarget: this.props.collectionRestoreTarget,
          enableRestore: this.props.enableRestore,
          isLoggedIn: this.props.isLoggedIn,
          onLoadMore: this.props.onLoadMore,
          onRestore: this.props.onRestore,
          onSignIn: this.props.onSignIn })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2088:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserCollectionContents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CollectionBrowserFolderListItem__ = __webpack_require__(1692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollectionBrowserRequestListItem__ = __webpack_require__(1693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_InlineEditor__ = __webpack_require__(1520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Icons_PublishIcon__ = __webpack_require__(1477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mobx_react__ = __webpack_require__(108);
var _class;









let


CollectionBrowserCollectionContents = Object(__WEBPACK_IMPORTED_MODULE_9_mobx_react__["a" /* observer */])(_class = class CollectionBrowserCollectionContents extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleActionTrigger = this.handleActionTrigger.bind(this);
    this.handleFolderSelect = this.handleFolderSelect.bind(this);
  }

  handleFolderSelect(folder) {
    this.props.onFolderSelect && this.props.onFolderSelect(folder);
  }

  handleActionTrigger(entity, entityId, action, data) {
    this.props.onActionTriggered && this.props.onActionTriggered(entity, entityId, action, data);
  }

  handleDocumentationLearnmore() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["l" /* DOCUMENTATION_LINK */]);
    __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__["a" /* default */].addEvent('onboarding', 'view_documentation_intro_documentation', 'collection_browser');
  }
  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_7_classnames___default()({ 'collection-browser-collection-contents': true }, this.props.className);
  }

  render() {
    let ownFolders = _.get(this.props, 'collection.ownFolders', []),
    ownRequests = _.get(this.props, 'collection.ownRequests', []);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'collection-browser-learn-more-header',
            onClick: this.handleDocumentationLearnmore },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Icons_PublishIcon__["a" /* default */], {
            className: 'collection-browser-learn-more-header__icon',
            style: 'secondary' }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-learn-more-header__text' }, 'Learn how to document your requests')),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_InlineEditor__["a" /* default */], {
          className: 'collection-browser-details-description-wrapper',
          editable: _.get(this.props, 'collection.isEditable'),
          placeholder: 'Adding a description makes your docs better',
          ref: 'inlineEditor',
          value: _.get(this.props, 'collection.description'),
          onToggleEdit: this.props.onToggleEdit,
          onUpdate: this.props.onUpdate }),


        _.isEmpty(ownFolders) && _.isEmpty(ownRequests) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-collection-contents' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__body--empty' }, 'This collection is empty.\xA0',


            this.props.collection.isEditable &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Buttons__["a" /* Button */], {
                  type: 'text',
                  className: 'learn-more-link',
                  onClick: () => this.props.onAddRequest(this.props.collection) }, 'Add requests'), 'to this collection and create folders to organize them'))),









        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-collection-contents-wrapper' },

          _.map(ownFolders && ownFolders, folder => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CollectionBrowserFolderListItem__["a" /* default */], {
                folder: folder,
                isEditable: _.get(this.props, 'collection.isEditable'),
                key: folder.id,
                onActionTriggered: this.handleActionTrigger,
                onFolderSelect: this.handleFolderSelect }));


          }),


          _.map(ownRequests, request => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionBrowserRequestListItem__["a" /* default */], {
                request: request,
                isOpen: this.props.isOpen,
                isEditable: _.get(this.props, 'collection.isEditable'),
                key: request.id,
                onActionTriggered: this.handleActionTrigger,
                browserWidth: this.props.browserWidth }));


          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2089:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserFolderItemActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Icons_RenameIcon__ = __webpack_require__(1517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_EditIcon__ = __webpack_require__(1465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_CopyIcon__ = __webpack_require__(1472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Icons_DeleteIcon__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__ = __webpack_require__(1454);






let

CollectionBrowserFolderItemActions = class CollectionBrowserFolderItemActions extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  handleActionTrigger(entityId, action, e) {
    this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], entityId, action);
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  render() {

    let { folder, showRename } = this.props;
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__folder__head__actions collection-browser-actions-wrapper' },

        this.props.isEditable &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["b" /* ButtonGroup */], null,
          showRename && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              type: 'icon',
              onClick: this.handleActionTrigger.bind(this, folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["s" /* ACTION_TYPE_RENAME_TOGGLE */]) },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Icons_RenameIcon__["a" /* default */], { className: 'collection-browser-collection-rename-icon' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              type: 'icon',
              onClick: this.handleActionTrigger.bind(this, folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_EDIT */]) },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Icons_EditIcon__["a" /* default */], { className: 'collection-browser-collection-edit-icon' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              type: 'icon',
              onClick: this.handleActionTrigger.bind(this, folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DUPLICATE */]) },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Icons_CopyIcon__["a" /* default */], { className: 'collection-browser-collection-duplicate-icon' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              type: 'icon',
              onClick: this.handleActionTrigger.bind(this, folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_DELETE */]) },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Icons_DeleteIcon__["a" /* default */], { className: 'collection-browser-collection-delete-icon' })))));





  }};

/***/ }),

/***/ 2118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMocksContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_collections_browser_mocks_CollectionBrowserMockHeader__ = __webpack_require__(2119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_collections_browser_mocks_CollectionBrowserMockList__ = __webpack_require__(2120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_LimitServiceConstants__ = __webpack_require__(1698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_InfobarConstants__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_MockController__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mobx_react__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_AuthHandlerService__ = __webpack_require__(242);
var _class;









let


CollectionBrowserMocksContainer = Object(__WEBPACK_IMPORTED_MODULE_9_mobx_react__["a" /* observer */])(_class = class CollectionBrowserMocksContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      mocks: [],
      refreshing: false };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRefreshMocks = this.handleRefreshMocks.bind(this);
    this.handleAddMock = this.handleAddMock.bind(this);
    this.handleCloseWarning = this.handleCloseWarning.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isHidden) {
      this.detachModelListeners();
      this.initializeModel(nextProps.collection);
    }
  }

  componentWillUnmount() {
    this.detachModelListeners();
  }

  fetchMocks(collectionUId) {
    this.setState({ refreshing: true });
    __WEBPACK_IMPORTED_MODULE_5__modules_controllers_MockController__["a" /* default */].getAll({
      collection: collectionUId,
      workspace: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id }).
    then(list => {
      this.setState({
        mocks: list,
        refreshing: false });

    }).catch(() => {
      this.setState({ refreshing: false });
    });
  }

  initializeModel(collection) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn || _.isEmpty(collection)) {
      return;
    }
    this.fetchMocks(collection.uid);
  }

  detachModelListeners() {
    this.setState({
      mocks: [],
      refreshing: false });

  }

  handleCloseWarning() {
    let mockLimitMessage = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ResourceLimitMessagesStore').find(__WEBPACK_IMPORTED_MODULE_3__constants_LimitServiceConstants__["a" /* MOCK_CALLS */]);
    mockLimitMessage && mockLimitMessage.dismissMessage();
  }

  handleDelete(mockId) {

    let mock = _.find(this.state.mocks, ['id', mockId]);
    mock && pm.mediator.trigger('showDeleteMockModal', mock, this.fetchMocks.bind(this, this.props.collection.uid), { origin: 'collection_browser' });
  }

  handleSignIn() {
    __WEBPACK_IMPORTED_MODULE_10__modules_services_AuthHandlerService__["a" /* default */].login();
  }

  handleRefreshMocks() {
    !this.state.refreshing && this.fetchMocks(this.props.collection.uid);
  }

  handleAddMock(opts = {}) {
    pm.mediator.trigger('addNewMock',
    { collectionId: this.props.collection.id, from: opts.from },
    this.fetchMocks.bind(this, this.props.collection.uid));
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_8_classnames___default()({ 'collection-browser-mocks': true }, this.props.className);
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    message = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ResourceLimitMessagesStore').find(__WEBPACK_IMPORTED_MODULE_3__constants_LimitServiceConstants__["a" /* MOCK_CALLS */]) || {};

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_collections_browser_mocks_CollectionBrowserMockHeader__["a" /* default */], {
          isLoggedIn: currentUser.isLoggedIn,
          isRefreshing: this.state.refreshing,
          message: message,
          mocks: this.state.mocks,
          onAddMock: this.handleAddMock,
          onMessageClose: this.handleCloseWarning,
          onRefresh: this.handleRefreshMocks }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_collections_browser_mocks_CollectionBrowserMockList__["a" /* default */], {
          isLoading: this.state.refreshing,
          mocks: this.state.mocks,
          onAddMock: this.handleAddMock,
          onDelete: this.handleDelete,
          onSignIn: this.handleSignIn })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMockHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Infobar__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_RefreshIcon__ = __webpack_require__(1697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_AddIcon__ = __webpack_require__(1476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_PublishIcon__ = __webpack_require__(1477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx_react__ = __webpack_require__(108);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;







let


CollectionBrowserMockHeader = Object(__WEBPACK_IMPORTED_MODULE_8_mobx_react__["a" /* observer */])(_class = class CollectionBrowserMockHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleMockLearn = this.handleMockLearn.bind(this);
    this.handleAddMock = this.handleAddMock.bind(this);
  }

  handleMockLearn() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["y" /* MOCK_DOCS */]);
    __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('onboarding', 'view_documentation_intro_mock', 'collection_browser');
  }

  getRefreshTextClass() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'collection-browser-learn-more-header__actions-container': true,
      'collection-browser-learn-more-header__refresh-container': true,
      'is-disabled': this.props.isRefreshing });

  }

  handleAddMock() {
    this.props.onAddMock({ from: 'collection_browser' });
  }


  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-learn-more-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_PublishIcon__["a" /* default */], {
            className: 'collection-browser-learn-more-header__icon',
            style: 'secondary' }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'collection-browser-learn-more-header__text',
              onClick: this.handleMockLearn }, 'Learn how to mock your requests'),




          this.props.isLoggedIn &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: this.getRefreshTextClass(),
              onClick: this.props.onRefresh },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_RefreshIcon__["a" /* default */], { className: 'collection-browser-learn-more-header__refresh-icon' }))),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Infobar__["a" /* default */], _extends({},
        this.props.message, {
          message: _.get(this.props, 'message.message'),
          className: 'collection-browser-infobar',
          onClose: this.props.onMessageClose })),


        !_.isEmpty(this.props.mocks) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-learn-more-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'collection-browser-learn-more-header__text',
              onClick: this.handleAddMock },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_AddIcon__["a" /* default */], {
              className: 'collection-browser-add-entity-header__icon',
              style: 'secondary' }), 'Add mock'))));







  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMockList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CollectionBrowserMockItem__ = __webpack_require__(2121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollectionBrowserMockEmptyListItem__ = __webpack_require__(2122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(11);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};


let

CollectionBrowserMockList = class CollectionBrowserMockList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let currentUserId = _.get(Object(__WEBPACK_IMPORTED_MODULE_3__stores_get_store__["a" /* getStore */])('CurrentUserStore'), 'id');
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-lists' },

        this.props.isLoading &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-item' }, 'Fetching more mocks'),




        !this.props.isLoading && _.isEmpty(this.props.mocks) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionBrowserMockEmptyListItem__["a" /* default */], {
          onAddMock: this.props.onAddMock,
          onSignIn: this.props.onSignIn }),



        _.map(this.props.mocks, mock => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CollectionBrowserMockItem__["a" /* default */], _extends({
              key: mock.id,
              isDeletable: _.get(mock, 'createdBy') === currentUserId },
            mock,
            this.props)));


        })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMockItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ClipboardHelper__ = __webpack_require__(1492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_MockIcon__ = __webpack_require__(1478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_CopyIcon__ = __webpack_require__(1472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_DeleteIcon__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_util__ = __webpack_require__(9);
var _class;







let

CollectionBrowserMockItem = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class CollectionBrowserMockItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleCopyUrl = this.handleCopyUrl.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  getMockUrl() {
    return _.get(this, 'props.url', _.get(this, 'props.id', ''));
  }

  handleCopyUrl() {
    __WEBPACK_IMPORTED_MODULE_1__utils_ClipboardHelper__["a" /* default */].copy(this.getMockUrl());
    pm.alerts.success('Mock URL copied');
  }

  handleDelete() {
    this.props.onDelete && this.props.onDelete(this.props.id);
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('CurrentUserStore');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-list-item__container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-list-item__icon-container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_MockIcon__["a" /* default */], { className: 'collection-browser-mock-list-item__icon' })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-list-item__details' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-list-item__details-link' },
            this.getMockUrl()),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-list-item__details-environment' },
            __WEBPACK_IMPORTED_MODULE_8__utils_util__["a" /* default */].getUserNameForId(this.props.createdBy, currentUser))),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-list-item__actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'collection-browser-mock-list-item__button-copy',
              tooltip: 'Copy Mock URL',
              type: 'icon',
              onClick: this.handleCopyUrl },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_CopyIcon__["a" /* default */], { className: 'collection-browser-mock-list-item__actions-copy-icon' })),


          this.props.isDeletable &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'collection-browser-mock-list-item__button-delete',
              tooltip: 'Delete Mock',
              type: 'icon',
              onClick: this.handleDelete },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_DeleteIcon__["a" /* default */], { className: 'collection-browser-mock-list-item__actions-delete-icon' })))));





  }}) || _class;


CollectionBrowserMockItem.defaultProps = { onDelete: _.noop };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMockEmptyListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(11);
var _class;

let


CollectionBrowserMockEmptyListItem = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class CollectionBrowserMockEmptyListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleAddMock = this.handleAddMock.bind(this);
  }

  handleAddMock() {
    this.props.onAddMock({ from: 'browser_empty_state' });
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('CurrentUserStore');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-block' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null, 'This collection is not being mocked. A mock lets you simulate endpoints in a collection to view potential responses without actually spinning up a back end.'),



        !currentUser.isLoggedIn ?


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-item-cta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
              className: 'collection-browser-item-signin-link',
              onClick: this.props.onSignIn }, 'Sign in to Postman'), ' to add your first mock.') :






        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-item-cta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
              className: 'collection-browser-item-signin-link',
              onClick: this.handleAddMock }, 'Add a mock'), ' to get started.')));








  }}) || _class;

/***/ }),

/***/ 2123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMonitorListContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_collections_browser_monitors_CollectionBrowserMonitorHeader__ = __webpack_require__(2124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_collections_browser_monitors_CollectionBrowserMonitorList__ = __webpack_require__(2125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_InfobarConstants__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_LimitServiceConstants__ = __webpack_require__(1698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_controllers_MonitorController__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_AuthHandlerService__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mobx_react__ = __webpack_require__(108);
var _class;











let


CollectionBrowserMonitorListContainer = Object(__WEBPACK_IMPORTED_MODULE_11_mobx_react__["a" /* observer */])(_class = class CollectionBrowserMonitorListContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      monitors: [],
      refreshing: false };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRefreshMonitors = this.handleRefreshMonitors.bind(this);
    this.handleAddMonitor = this.handleAddMonitor.bind(this);
    this.handleCloseWarning = this.handleCloseWarning.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isHidden) {
      this.detachModelListeners();
      this.initializeModel(nextProps.collection);
    }
  }

  componentWillUnmount() {
    this.detachModelListeners();
  }

  fetchMonitors(collectionUId) {
    this.setState({ refreshing: true });
    __WEBPACK_IMPORTED_MODULE_8__modules_controllers_MonitorController__["a" /* default */].getAll({
      collection: collectionUId,
      workspace: Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id }).
    then(list => {
      this.setState({
        monitors: list,
        refreshing: false });

    }).catch(() => {
      this.setState({ refreshing: false });
    });
  }

  detachModelListeners() {
    this.setState({
      monitors: [],
      refreshing: false });

  }

  initializeModel(collection) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn || _.isEmpty(collection)) {
      return;
    }

    this.fetchMonitors(collection.uid);
  }

  handleCloseWarning() {
    let monitorLimitMessage = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('ResourceLimitMessagesStore').find(__WEBPACK_IMPORTED_MODULE_5__constants_LimitServiceConstants__["b" /* MONITOR_RUNS */]);
    monitorLimitMessage && monitorLimitMessage.dismissMessage();
  }

  handleDelete(monitorId) {
    let monitor = _.find(this.state.monitors, ['id', monitorId]);
    monitor && pm.mediator.trigger('showDeleteMonitorModal', monitor, this.fetchMonitors.bind(this, this.props.collection.uid), { origin: 'collection_browser' });
  }

  handleEdit(monitorId) {
    __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('monitor', 'initiate_edit');
    Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["b" /* editEntity */])('monitors', monitorId, Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id);
  }

  handleSignIn() {
    __WEBPACK_IMPORTED_MODULE_10__modules_services_AuthHandlerService__["a" /* default */].login();
  }

  handleRefreshMonitors() {
    !this.state.refreshing && this.fetchMonitors(this.props.collection.uid);
  }

  handleAddMonitor(opts = {}) {
    pm.mediator.trigger('addNewMonitor',
    { collectionId: this.props.collection.id, from: opts.from },
    this.fetchMonitors.bind(this, this.props.collection.uid));
  }

  isEditable() {
    let collection = this.props.collection;
    return collection.isEditable;
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'collection-browser-monitor': true }, this.props.className);
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    message = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["a" /* getStore */])('ResourceLimitMessagesStore').find(__WEBPACK_IMPORTED_MODULE_5__constants_LimitServiceConstants__["b" /* MONITOR_RUNS */]) || {};

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_collections_browser_monitors_CollectionBrowserMonitorHeader__["a" /* default */], {
          isEditable: this.isEditable(),
          isLoggedIn: currentUser && currentUser.isLoggedIn,
          isRefreshing: this.state.refreshing,
          message: message,
          monitors: this.state.monitors,
          onAddMonitor: this.handleAddMonitor,
          onMessageClose: this.handleCloseWarning,
          onRefresh: this.handleRefreshMonitors }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_collections_browser_monitors_CollectionBrowserMonitorList__["a" /* default */], {
          isEditable: this.isEditable(),
          isLoading: this.state.refreshing,
          monitors: this.state.monitors,
          onAddMonitor: this.handleAddMonitor,
          onDelete: this.handleDelete,
          onEdit: this.handleEdit,
          onSignIn: this.handleSignIn })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMonitorHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Infobar__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_PublishIcon__ = __webpack_require__(1477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_RefreshIcon__ = __webpack_require__(1697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_AddIcon__ = __webpack_require__(1476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx_react__ = __webpack_require__(108);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;







let


CollectionBrowserMonitorHeader = Object(__WEBPACK_IMPORTED_MODULE_8_mobx_react__["a" /* observer */])(_class = class CollectionBrowserMonitorHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleMonitorLearn = this.handleMonitorLearn.bind(this);
    this.handleAddMonitor = this.handleAddMonitor.bind(this);
  }

  handleMonitorLearn() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["z" /* MONITORING_DOCS */]);
    __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('onboarding', 'view_documentation_intro_monitors', 'collection_browser');
  }

  handleAddMonitor() {
    this.props.onAddMonitor({ from: 'collection_browser' });
  }

  getRefreshTextClass() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'collection-browser-learn-more-header__actions-container': true,
      'collection-browser-learn-more-header__refresh-container': true,
      'is-disabled': this.props.isRefreshing });

  }


  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-learn-more-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_PublishIcon__["a" /* default */], {
            className: 'collection-browser-learn-more-header__icon',
            style: 'secondary' }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'collection-browser-learn-more-header__text',
              onClick: this.handleMonitorLearn }, 'Learn how to monitor your requests'),




          this.props.isLoggedIn &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: this.getRefreshTextClass(),
              onClick: this.props.onRefresh },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_RefreshIcon__["a" /* default */], { className: 'collection-browser-learn-more-header__refresh-icon' }))),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider' }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Infobar__["a" /* default */], _extends({},
        this.props.message, {
          message: _.get(this.props, 'message.message'),
          className: 'collection-browser-infobar',
          onClose: this.props.onMessageClose })),


        !_.isEmpty(this.props.monitors) && this.props.isEditable &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-learn-more-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'collection-browser-learn-more-header__text',
              onClick: this.handleAddMonitor },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_AddIcon__["a" /* default */], {
              className: 'collection-browser-add-entity-header__icon',
              style: 'secondary' }), 'Add monitor'))));







  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMonitorList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CollectionBrowserMonitorListItem__ = __webpack_require__(2126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollectionBrowserMonitorEmptyItem__ = __webpack_require__(2127);



let

CollectionBrowserMonitorList = class CollectionBrowserMonitorList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list' },

        this.props.isLoading &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-item' }, 'Fetching more monitors'),




        !this.props.isLoading && _.isEmpty(this.props.monitors) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionBrowserMonitorEmptyItem__["a" /* default */], {
          isEditable: this.props.isEditable,
          onAddMonitor: this.props.onAddMonitor,
          onSignIn: this.props.onSignIn }),



        _.map(this.props.monitors, monitor => {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CollectionBrowserMonitorListItem__["a" /* default */], {
            isEditable: this.props.isEditable,
            key: monitor.id,
            monitor: monitor,
            onDelete: this.props.onDelete,
            onEdit: this.props.onEdit });

        })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMonitorListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_MonitorIcon__ = __webpack_require__(1479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_EditIcon__ = __webpack_require__(1465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_DeleteIcon__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_services_DashboardService__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_services_AnalyticsService__ = __webpack_require__(20);
var _class;








let


CollectionBrowserMonitorListItem = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class CollectionBrowserMonitorListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.getUsername = this.getUsername.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOpenMonitor = this.handleOpenMonitor.bind(this);
  }

  getUsername(id, currentUser) {
    return __WEBPACK_IMPORTED_MODULE_6__utils_util__["a" /* default */].getUserNameForId(id, currentUser);
  }

  handleEdit() {
    _.invoke(this, 'props.onEdit', this.props.monitor.id);
  }

  handleDelete() {
    _.invoke(this, 'props.onDelete', this.props.monitor.id);
  }

  handleOpenMonitor() {
    __WEBPACK_IMPORTED_MODULE_9__modules_services_AnalyticsService__["a" /* default */].addEvent('monitor', 'view_run_details', 'collection_browser');
    Object(__WEBPACK_IMPORTED_MODULE_5__models_services_DashboardService__["i" /* openEntity */])('monitors', this.props.monitor.id, Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').id);
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["a" /* getStore */])('CurrentUserStore');


    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'collection-browser-monitor-list-item__content-wrapper',
            onClick: this.handleOpenMonitor },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list-item__icon-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Icons_MonitorIcon__["a" /* default */], { className: 'collection-browser-monitor-list-item__icon' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list-item__content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list-item__name' }, this.props.monitor.name),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list-item__creator' }, this.getUsername(this.props.monitor.createdBy, currentUser)))),




        this.props.isEditable &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list-item__actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'collection-browser-monitor-dropdown-menu-item__button--edit',
              tooltip: 'Edit Monitor',
              type: 'icon',
              onClick: this.handleEdit },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_EditIcon__["a" /* default */], { className: 'collection-browser-monitor-dropdown-menu-item__icon--edit' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'collection-browser-monitor-dropdown-menu-item__button--delete',
              tooltip: 'Delete Monitor',
              type: 'icon',
              onClick: this.handleDelete },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_DeleteIcon__["a" /* default */], { className: 'collection-browser-monitor-dropdown-menu-item__icon--delete' })))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMonitorEmptyItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(11);
var _class;

let


CollectionBrowserMonitorEmptyItem = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class = class CollectionBrowserMonitorEmptyItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleAddMonitor = this.handleAddMonitor.bind(this);
  }

  handleAddMonitor() {
    this.props.onAddMonitor({ from: 'browser_empty_state' });
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('CurrentUserStore');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-block' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null, 'This collection is not being monitored. A monitor lets you schedule your collection to run automatically at a fixed interval.'),



        !(currentUser && currentUser.isLoggedIn) ?

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-item-cta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
              className: 'collection-browser-item-signin-link',
              onClick: this.props.onSignIn }, 'Sign in to Postman'), ' to add your first monitor.') :




        this.props.isEditable ?

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-item-cta' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
              className: 'collection-browser-item-signin-link',
              onClick: this.handleAddMonitor }, 'Add a monitor'), ' to get started.') :




        false));



  }}) || _class;

/***/ }),

/***/ 2128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserActivityfeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_feed_ActivityFeed__ = __webpack_require__(1699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);



let

CollectionBrowserActivityfeed = class CollectionBrowserActivityfeed extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ 'collection-browser-activity-feed-lists': true }, this.props.className);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__activity_feed_ActivityFeed__["a" /* default */], {
          activityFeed: this.props.activityFeed,
          collectionRestoreTarget: this.props.collectionRestoreTarget,
          enableRestore: this.props.enableRestore,
          isLoggedIn: this.props.isLoggedIn,
          onLoadMore: this.props.onLoadMore,
          onSignIn: this.props.onSignIn,
          onRestore: this.props.onRestore })));



  }};

/***/ }),

/***/ 2148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserCollectionAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_MoreIcon__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_CopyIcon__ = __webpack_require__(1472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_DownloadIcon__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_MockIcon__ = __webpack_require__(1478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_CloseIcon__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_EditIcon__ = __webpack_require__(1465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_LockedIcon__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Icons_NewFolderIcon__ = __webpack_require__(1565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_Icons_MonitorIcon__ = __webpack_require__(1479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__base_Icons_PublishIcon__ = __webpack_require__(1477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__base_Icons_DeleteIcon__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_services_DocumenterService__ = __webpack_require__(1469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_services_APIService__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__ = __webpack_require__(1454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_mobx_react__ = __webpack_require__(108);
var _class;




















let


CollectionBrowserCollectionAction = Object(__WEBPACK_IMPORTED_MODULE_20_mobx_react__["a" /* observer */])(_class = class CollectionBrowserCollectionAction extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleViewDocumentation = this.handleViewDocumentation.bind(this);
  }

  handleActionTrigger(entity, entityId, action) {
    this.props.onActionTriggered && this.props.onActionTriggered(entity, entityId, action);
  }

  handleViewDocumentation() {
    __WEBPACK_IMPORTED_MODULE_15__models_services_DocumenterService__["a" /* default */].getDocumentationURL(_.get(this.props, 'collection.id'), (e, documentUrl) => {
      if (e) {
        return;
      }
      __WEBPACK_IMPORTED_MODULE_18__modules_services_AnalyticsService__["a" /* default */].addEvent('documentation', 'view', 'collection_browser');
      Object(__WEBPACK_IMPORTED_MODULE_16__modules_services_APIService__["u" /* openAuthenticatedRoute */])(documentUrl);
    });
  }

  handleSelect(action) {
    this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], this.props.collection.id, action);
  }

  handleToggle(value) {
    if (value === this.state.dropdownOpen) {
      return;
    }

    this.setState({ dropdownOpen: value });
  }

  getActions() {
    const {
      isEditable,
      isDeletable,
      shared } =
    this.props.collection;

    return [
    {
      type: __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_EDIT */],
      label: 'Edit',
      shortcut: 'edit',
      isEnabled: isEditable,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_EditIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_EDIT */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["b" /* ACTION_MODIFY_PERMISSIONS */],
      label: 'Modify permissions',
      isEnabled: isDeletable && shared,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_LockedIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["b" /* ACTION_MODIFY_PERMISSIONS */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */],
      label: 'Add Folder',
      isEnabled: isEditable,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Icons_NewFolderIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DUPLICATE */],
      label: 'Duplicate',
      shortcut: 'duplicate',
      isEnabled: true,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_CopyIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DUPLICATE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["l" /* ACTION_TYPE_DOWNLOAD */],
      label: 'Export',
      isEnabled: true,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_DownloadIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["l" /* ACTION_TYPE_DOWNLOAD */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */],
      label: 'Monitor Collection',
      isEnabled: isEditable,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_Icons_MonitorIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */],
      label: 'Mock Collection',
      isEnabled: true,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_MockIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_PUBLISH_DOCS */],
      label: 'Publish Docs',
      isEnabled: isEditable,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__base_Icons_PublishIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_PUBLISH_DOCS */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */],
      label: 'Remove from workspace',
      isEnabled: true,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_CloseIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_DELETE */],
      label: 'Delete',
      shortcut: 'delete',
      isEnabled: isDeletable,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_Icons_DeleteIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_DELETE */]) }) }];


  }

  getMenuItemIconClasses(label) {
    return __WEBPACK_IMPORTED_MODULE_14_classnames___default()({ 'dropdown-menu-item-icon': true }, 'collection-browser-collection-' + label + '-icon');
  }

  getActionIconClassNames(label) {
    return __WEBPACK_IMPORTED_MODULE_14_classnames___default()({ ['collection-browser-collection-' + label + '-icon']: true });
  }

  getMenuItemClasses(isPro) {
    return __WEBPACK_IMPORTED_MODULE_14_classnames___default()({ 'dropdown-menu-item--pro-disabled': isPro });
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

          action.icon,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label),

          modifierLabel &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-modifier' }, modifierLabel)));



    }).value();
  }

  render() {

    let collection = this.props.collection;

    if (!collection) {
      return null;
    }
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_17__stores_get_store__["a" /* getStore */])('CurrentUserStore'),
    isLoggedIn = currentUser && currentUser.isLoggedIn,
    isSyncEnabled = currentUser && currentUser.syncEnabled,
    menuItems = isLoggedIn && this.getMenuItems();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-actions-wrapper' },

          !collection.subscribed &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              className: 'collection-browser-collection-action-share-button',
              size: 'small',
              type: 'primary',
              onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], collection.id, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_SHARE */]) }, 'Share'),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              className: 'collection-browser-collection-action-run-button',
              size: 'small',
              type: 'primary',
              onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], collection.id, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RUN */]) }, 'Run'),




          isLoggedIn && isSyncEnabled &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              className: 'collection-browser-collection-action-view-documentation-button',
              size: 'small',
              type: 'secondary',
              onClick: this.handleViewDocumentation }, 'View in web'),





          !isLoggedIn &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["b" /* ButtonGroup */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'collection-browser-collection-action-button',
                tooltip: 'Edit Collection',
                type: 'icon',
                onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], collection.id, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_EDIT */]) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_EditIcon__["a" /* default */], { className: 'collection-browser-collection-edit-icon' })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'collection-browser-collection-action-button',
                tooltip: 'Duplicate Collection',
                type: 'icon',
                onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], collection.id, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DUPLICATE */]) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_CopyIcon__["a" /* default */], { className: 'collection-browser-collection-duplicate-icon' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-collection-duplicate-icon' })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'collection-browser-collection-action-button',
                tooltip: 'Download Collection',
                type: 'icon',
                onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], collection.id, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["l" /* ACTION_TYPE_DOWNLOAD */]) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_DownloadIcon__["a" /* default */], { className: 'collection-browser-collection-download-icon' })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'collection-browser-collection-action-button',
                tooltip: 'Add Folder',
                type: 'icon',
                onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], collection.id, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Icons_NewFolderIcon__["a" /* default */], { className: 'collection-browser-collection-add-folder-icon' })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'collection-browser-collection-action-button',
                tooltip: 'Monitor Collection',
                type: 'icon',
                onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], collection.id, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */]) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_Icons_MonitorIcon__["a" /* default */], { className: this.getActionIconClassNames(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */]) })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'collection-browser-collection-action-button',
                tooltip: 'Mock Collection',
                type: 'icon',
                onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], collection.id, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */]) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_MockIcon__["a" /* default */], { className: this.getActionIconClassNames(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */]) })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'collection-browser-collection-action-button',
                tooltip: 'Publish Docs',
                type: 'icon',
                onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], collection.id, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_PUBLISH_DOCS */]) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__base_Icons_PublishIcon__["a" /* default */], { className: this.getActionIconClassNames(__WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_PUBLISH_DOCS */]) })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'collection-browser-collection-action-button',
                tooltip: 'Delete Collection',
                type: 'icon',
                onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], collection.id, __WEBPACK_IMPORTED_MODULE_19__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_DELETE */]) },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_Icons_DeleteIcon__["a" /* default */], { className: 'collection-browser-collection-delete-icon' }))),



          isLoggedIn &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["a" /* Dropdown */], {
              onSelect: this.handleSelect,
              onToggle: this.handleToggle,
              className: 'collection-browser-actions-dropdown' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["b" /* DropdownButton */], {
                dropdownStyle: 'nocaret',
                type: 'custom' },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], { className: 'collection-browser-collection-dropdown-actions-button-wrapper' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_MoreIcon__["a" /* default */], { className: 'collection-browser-collection-dropdown-actions-button' }))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], {
                'align-right': true,
                dropup: 'auto' },

              menuItems)))));







  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserFolderDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_InlineEditor__ = __webpack_require__(1520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CollectionBrowserRequestListItem__ = __webpack_require__(1693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CollectionBrowserFolderListItem__ = __webpack_require__(1692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Breadcrumb__ = __webpack_require__(2150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_base_Icons_EditIcon__ = __webpack_require__(1465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Icons_NewFolderIcon__ = __webpack_require__(1565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_Icons_DeleteIcon__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_Icons_CopyIcon__ = __webpack_require__(1472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_base_Icons_CloseIcon__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__ = __webpack_require__(1454);
var _class;













let


CollectionBrowserFolderDetails = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["a" /* observer */])(_class = class CollectionBrowserFolderDetails extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.toggleCollectionView = this.toggleCollectionView.bind(this);
    this.handleActionTrigger = this.handleActionTrigger.bind(this);
    this.handleFolderSelect = this.handleFolderSelect.bind(this);
    this.handleFolderDescriptionUpdate = this.handleFolderDescriptionUpdate.bind(this);
  }

  toggleCollectionView() {
    this.props.onCollectionDetailsNavigate && this.props.onCollectionDetailsNavigate();
  }

  handleActionTrigger(entity, entityId, action, data) {
    this.props.onActionTriggered && this.props.onActionTriggered(entity, entityId, action, data);
  }

  getCollectionHeaderClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'collection-browser-folder-details-header': true,
      'collection-browser-folder-details-header--padded-below': _.isEmpty(_.get(this.props.folder, 'description')) && !this.props.collection.isEditable });

  }

  componentWillReceiveProps(nextProps) {
    const inlineEditor = this.refs.inlineEditor,
    breadcrumb = this.refs.breadcrumb;

    if (inlineEditor) {
      if (nextProps.isEditingDescription && !this.props.isEditingDescription) {
        inlineEditor.startEditing();
        inlineEditor.focus();
      } else
      if (!nextProps.isEditingDescription && this.props.isEditingDescription) {
        inlineEditor.reset();
      }
    }

    if (breadcrumb) {
      if (nextProps.browserWidth !== this.props.browserWidth) {
        inlineEditor.refresh();

        if (nextProps.browserWidth < this.props.browserWidth) {
          breadcrumb.collapse(nextProps.browserWidth);
        } else
        if (nextProps.browserWidth > this.props.browserWidth) {
          breadcrumb.expand(nextProps.browserWidth);
        }
      }
    }
  }

  handleFolderDescriptionUpdate(value) {
    this.setState({ description: value }, () => {
      this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], this.props.folder.id,
      __WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DESCRIPTION_UPDATE */], this.state.description);
    });
  }

  handleFolderSelect(folder) {
    this.props.onFolderSelect && this.props.onFolderSelect(folder);
  }

  render() {

    let { collection, folder } = this.props;

    if (!folder) {
      return null;
    }

    let ownFolders = _.get(folder, 'ownFolders', []),
    ownRequests = _.get(folder, 'ownRequests', []),
    folderPath = folder.path;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.props.className },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-details-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getCollectionHeaderClasses() },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Breadcrumb__["a" /* default */], {
              items: folderPath,
              containerWidth: this.props.browserWidth,
              offsetRight: 100,
              onItemClick: entity => {
                if (entity.type === 'collection') {
                  this.toggleCollectionView();
                } else
                {
                  this.props.onFolderSelect && this.props.onFolderSelect(entity);
                }
              },
              ref: 'breadcrumb' }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-header-close-btn' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_Icons_CloseIcon__["a" /* default */], {
                className: 'collection-browser-header-close-icon',
                onClick: this.props.onClose }))),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_InlineEditor__["a" /* default */], {
            className: 'collection-browser-folder-description-wrapper',
            editable: collection.isEditable,
            placeholder: 'Adding a description makes your docs better',
            ref: 'inlineEditor',
            value: folder.description,
            onEdit: this.props.onEditFolderDescription,
            onToggleEdit: this.props.onFolderEditDescriptionToggle,
            onUpdate: this.handleFolderDescriptionUpdate })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-actions-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                type: 'primary',
                size: 'small',
                className: 'collection-browser-collection-action-run-button',
                onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], folder.id, __WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_RUN */]) }, 'Run'),




            collection.isEditable &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["b" /* ButtonGroup */], null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                  type: 'icon',
                  className: 'collection-browser-collection-action-button',
                  onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], folder.id, __WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_EDIT */]),
                  tooltip: 'Edit Folder' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_Icons_EditIcon__["a" /* default */], { className: 'collection-browser-collection-edit-icon' })),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                  type: 'icon',
                  className: 'collection-browser-collection-action-button',
                  onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], folder.id, __WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]),
                  tooltip: 'Add Folder' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Icons_NewFolderIcon__["a" /* default */], { className: 'collection-browser-collection-add-folder-icon' })),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                  type: 'icon',
                  className: 'collection-browser-collection-action-button',
                  onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], folder.id, __WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DUPLICATE */]),
                  tooltip: 'Duplicate Folder' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_Icons_CopyIcon__["a" /* default */], { className: 'collection-browser-collection-duplicate-icon' })),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                  type: 'icon',
                  className: 'collection-browser-collection-action-button',
                  onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], folder.id, __WEBPACK_IMPORTED_MODULE_13__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_DELETE */]),
                  tooltip: 'Delete Folder' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Icons_DeleteIcon__["a" /* default */], { className: 'collection-browser-collection-delete-icon' })))),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider' })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-folder-list-wrapper' },

          _.isEmpty(ownRequests) && _.isEmpty(ownFolders) ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-folder' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__body--empty' }, 'This folder is empty.\xA0',


              this.props.folder.isEditable &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                    type: 'text',
                    onClick: () => this.props.onAddRequest(this.props.folder) }, 'Add requests'), 'to this folder and create subfolders to organize them'))) :









          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,

            _.map(ownFolders, folder => {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CollectionBrowserFolderListItem__["a" /* default */], {
                  folder: folder,
                  isEditable: _.get(this.props, 'collection.isEditable'),
                  key: folder.id,
                  onActionTriggered: this.handleActionTrigger,
                  onFolderSelect: this.handleFolderSelect }));


            }),


            _.map(ownRequests, request => {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__CollectionBrowserRequestListItem__["a" /* default */], {
                  request: request,
                  browserWidth: this.props.browserWidth,
                  isOpen: this.props.isOpen,
                  isEditable: collection.isEditable,
                  key: request.id,
                  onActionTriggered: this.handleActionTrigger,
                  browserWidth: this.props.browserWidth }));


            }))),





        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider' })));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Breadcrumb; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Buttons__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dropdowns__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons_FolderIcon__ = __webpack_require__(1566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icons_DownSolidIcon__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Icons_CollectionIcon__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(16);
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


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Dropdowns__["c" /* DropdownMenu */], {
              'align-center': true,
              dropup: 'auto' },


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

/***/ })

});