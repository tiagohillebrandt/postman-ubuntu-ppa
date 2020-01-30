webpackJsonp([33],{

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

/***/ 4211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserFolderListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pureRenderDecorator__ = __webpack_require__(3941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_InlineInput__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_ContextMenu__ = __webpack_require__(3766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_FolderIcon__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CollectionBrowserFolderItemActions__ = __webpack_require__(5013);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__ = __webpack_require__(3622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(5);
var _dec, _class;










const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["getStore"])('PermissionStore');let





































CollectionBrowserFolderListItem = (_dec = Object(__WEBPACK_IMPORTED_MODULE_3__components_base_ContextMenu__["a" /* default */])([{ label: 'Rename', shortcut: 'rename', isVisible(props) {return permissionStore.can('edit', 'folder', props.folder.id);}, onClick(props, component) {component.toggleEditName();} }, { label: 'Edit', isVisible(props) {return permissionStore.can('edit', 'folder', props.folder.id);}, onClick(props, component) {component.handleActionTrigger(__WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]);} }, { label: 'Duplicate', shortcut: 'duplicate', isVisible(props) {return permissionStore.can('duplicate', 'folder', props.folder.id);}, onClick(props, component) {component.handleActionTrigger(__WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);} }, { label: 'Delete', shortcut: 'delete', isVisible(props) {return permissionStore.can('delete', 'folder', props.folder.id);}, onClick(props, component) {component.handleActionTrigger(__WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], props.folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);} }], monitor => {return { isContextMenuOpen: monitor.isOpen };}), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["b" /* observer */])(_class = class CollectionBrowserFolderListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], this.props.folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["u" /* ACTION_TYPE_RENAME */], value);
  }

  handleActionTrigger(entity, entityId, action) {
    if (action === __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]) {
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
            showRename: this.state.showRename,
            onActionTriggered: this.handleActionTrigger }))));




  }}) || _class) || _class);

/***/ }),

/***/ 4212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ACTION_TYPE_RENAME_FOLDER_TOOLTIP = 'Rename folder',
ACTION_TYPE_EDIT_FOLDER_TOOLTIP = 'Edit folder',
ACTION_TYPE_DUPLICATE_FOLDER_TOOLTIP = 'Duplicate folder',
ACTION_TYPE_DELETE_FOLDER_TOOLTIP = 'Delete folder',
ACTION_TYPE_RENAME_REQUEST_TOOLTIP = 'Rename request',
ACTION_TYPE_EDIT_REQUEST_TOOLTIP = 'Edit request',
ACTION_TYPE_DUPLICATE_REQUEST_TOOLTIP = 'Duplicate request',
ACTION_TYPE_DELETE_REQUEST_TOOLTIP = 'Delete request';
/* harmony export (immutable) */ __webpack_exports__["g"] = ACTION_TYPE_RENAME_FOLDER_TOOLTIP;

/* harmony export (immutable) */ __webpack_exports__["e"] = ACTION_TYPE_EDIT_FOLDER_TOOLTIP;

/* harmony export (immutable) */ __webpack_exports__["c"] = ACTION_TYPE_DUPLICATE_FOLDER_TOOLTIP;

/* harmony export (immutable) */ __webpack_exports__["a"] = ACTION_TYPE_DELETE_FOLDER_TOOLTIP;

/* harmony export (immutable) */ __webpack_exports__["h"] = ACTION_TYPE_RENAME_REQUEST_TOOLTIP;

/* harmony export (immutable) */ __webpack_exports__["f"] = ACTION_TYPE_EDIT_REQUEST_TOOLTIP;

/* harmony export (immutable) */ __webpack_exports__["d"] = ACTION_TYPE_DUPLICATE_REQUEST_TOOLTIP;

/* harmony export (immutable) */ __webpack_exports__["b"] = ACTION_TYPE_DELETE_REQUEST_TOOLTIP;


/***/ }),

/***/ 4213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserRequestListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_InlineInput__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_InlineEditor__ = __webpack_require__(1015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_ContextMenu__ = __webpack_require__(3766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Icons_EditIcon__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_Icons_RenameIcon__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_base_Icons_DeleteIcon__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Icons_CopyIcon__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_request_RequestIcon__ = __webpack_require__(1576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__ = __webpack_require__(3622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__base_XPaths_XPath__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_CollectionBrowserActionsTooltipConstants__ = __webpack_require__(4212);
var _dec, _class;



















const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('PermissionStore');let





































CollectionBrowserRequestListItem = (_dec = Object(__WEBPACK_IMPORTED_MODULE_5__components_base_ContextMenu__["a" /* default */])([{ label: 'Rename', shortcut: 'rename', isVisible(props) {return permissionStore.can('edit', 'request', props.request.id);}, onClick(props, component) {component.toggleEditName();} }, { label: 'Edit', isVisible(props) {return permissionStore.can('edit', 'request', props.request.id);}, onClick(props, component) {component.handleActionTrigger(props.request.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]);} }, { label: 'Duplicate', shortcut: 'duplicate', isVisible(props) {return permissionStore.can('duplicate', 'request', props.request.id);}, onClick(props, component) {component.handleActionTrigger(props.request.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]);} }, { label: 'Delete', shortcut: 'delete', isVisible(props) {return permissionStore.can('delete', 'request', props.request.id);}, onClick(props, component) {component.handleActionTrigger(props.request.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]);} }], monitor => {return { isContextMenuOpen: monitor.isOpen };}), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_12_mobx_react__["b" /* observer */])(_class = class CollectionBrowserRequestListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], this.props.request.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["u" /* ACTION_TYPE_RENAME */], value);
  }

  handleActionTrigger(entityId, action) {
    if (action === __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]) {
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
    this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["f" /* ACTION_TARGET_REQUEST */], this.props.request.id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["l" /* ACTION_TYPE_DESCRIPTION_UPDATE */], value);
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

  getTooltipText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  render() {

    let descriptionClasses = this.getDescriptionClasses();

    const { name, description, method, id } = this.props.request,
    permissionStore = Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('PermissionStore'),
    canEditRequest = permissionStore.can('edit', 'request', id),
    canDuplicateRequest = permissionStore.can('duplicate', 'request', id),
    canDeleteRequest = permissionStore.can('delete', 'request', id);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__request-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { onClick: this.handleToggleShowDescription },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__request' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__request__label-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_request_RequestIcon__["a" /* default */], { method: method })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__request__meta' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_InlineInput__["a" /* default */], {
                className: 'collection-browser-list-item__request__name',
                placeholder: 'Request Name',
                ref: 'inlineInput',
                value: name,
                onSubmit: this.handleNameUpdate,
                onToggleEdit: this.handleToggleEditName })),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__request__actions collection-browser-actions-wrapper' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["b" /* ButtonGroup */], null,

                this.state.showRename &&

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                    type: 'icon',
                    onClick: this.handleActionClick.bind(this, id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]),
                    disabled: !canEditRequest,
                    tooltip: this.getTooltipText(!canEditRequest) || __WEBPACK_IMPORTED_MODULE_15__constants_CollectionBrowserActionsTooltipConstants__["h" /* ACTION_TYPE_RENAME_REQUEST_TOOLTIP */] },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_XPaths_XPath__["a" /* default */], { identifier: 'rename' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_Icons_RenameIcon__["a" /* default */], { className: 'collection-browser-collection-rename-icon' }))),




                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                    type: 'icon',
                    onClick: this.handleActionClick.bind(this, id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]),
                    disabled: !canEditRequest,
                    tooltip: this.getTooltipText(!canEditRequest) || __WEBPACK_IMPORTED_MODULE_15__constants_CollectionBrowserActionsTooltipConstants__["f" /* ACTION_TYPE_EDIT_REQUEST_TOOLTIP */] },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_XPaths_XPath__["a" /* default */], { identifier: 'edit' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Icons_EditIcon__["a" /* default */], { className: 'collection-browser-collection-edit-icon' }))),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                    type: 'icon',
                    onClick: this.handleActionClick.bind(this, id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]),
                    disabled: !canDuplicateRequest,
                    tooltip: this.getTooltipText(!canDuplicateRequest) || __WEBPACK_IMPORTED_MODULE_15__constants_CollectionBrowserActionsTooltipConstants__["d" /* ACTION_TYPE_DUPLICATE_REQUEST_TOOLTIP */] },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_XPaths_XPath__["a" /* default */], { identifier: 'copy' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Icons_CopyIcon__["a" /* default */], { className: 'collection-browser-collection-duplicate-icon' }))),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                    type: 'icon',
                    onClick: this.handleActionClick.bind(this, id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]),
                    disabled: !canDeleteRequest,
                    tooltip: this.getTooltipText(!canDeleteRequest) || __WEBPACK_IMPORTED_MODULE_15__constants_CollectionBrowserActionsTooltipConstants__["b" /* ACTION_TYPE_DELETE_REQUEST_TOOLTIP */] },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_XPaths_XPath__["a" /* default */], { identifier: 'delete' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_base_Icons_DeleteIcon__["a" /* default */], { className: 'collection-browser-collection-delete-icon' }))))))),






        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: descriptionClasses },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_XPaths_XPath__["a" /* default */], { identifier: 'requestDescription', isVisible: this.state.showDescription },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_InlineEditor__["a" /* default */], {
              className: 'collection-browser-request-description-wrapper',
              editable: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('PermissionStore').can('edit', 'request', id),
              fontSize: 11,
              placeholder: 'Make things easier for your teammates with a complete request description.',
              ref: 'inlineEditor',
              value: description,
              viewLessText: '(less)',
              viewMoreText: '(more)',
              onUpdate: this.handleRequestDescriptionUpdate })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-expandable-view-list-item_request__openinbuilder' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                className: 'collection-expandable-view-list-item_request__openinbuilder_link',
                onClick: this.handleActionTrigger.bind(this, id, __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__["r" /* ACTION_TYPE_OPEN_IN_BUILDER */]) }, 'Open in builder')))));







  }}) || _class) || _class);

/***/ }),

/***/ 4214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MOCK_CALLS = 'mock_usage';
/* harmony export (immutable) */ __webpack_exports__["a"] = MOCK_CALLS;

const MONITOR_RUNS = 'monitor_request_runs';
/* harmony export (immutable) */ __webpack_exports__["b"] = MONITOR_RUNS;


/***/ }),

/***/ 5009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollectionBrowserContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_draggable__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_collections_browser_CollectionBrowser__ = __webpack_require__(5010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_AppSettingsDefaults__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_services_DocumenterService__ = __webpack_require__(3727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_CollectionSidebarService__ = __webpack_require__(3942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_CollectionActionsUtil__ = __webpack_require__(3943);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__ = __webpack_require__(3622);
var _class;
















const TABS = {
  DOCUMENTATION: 'Documentation',
  MONITORS: 'Monitors',
  MOCKS: 'Mocks',
  ACTIVITY: 'Activity' };let



CollectionBrowserContainer = Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["b" /* observer */])(_class = class CollectionBrowserContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      browserWidth: __WEBPACK_IMPORTED_MODULE_5__constants_AppSettingsDefaults__["a" /* default */].ui.REQUESTER_BROWSER_WIDTH,
      collectionId: null,
      activeTab: TABS.DOCUMENTATION,
      isResizing: false };


    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
    this.handleFolderSelect = this.handleFolderSelect.bind(this);
    this.handleViewToggle = this.handleViewToggle.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleCollectionNameUpdate = this.handleCollectionNameUpdate.bind(this);
    this.handleCollectionDescriptionUpdate = this.handleCollectionDescriptionUpdate.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentWillMount() {
    this.setState({ browserWidth: pm.settings.getSetting('requesterBrowserWidth') || __WEBPACK_IMPORTED_MODULE_5__constants_AppSettingsDefaults__["a" /* default */].ui.REQUESTER_BROWSER_WIDTH });
    pm.mediator.on('showCollectionBrowser', this.handleOpen);
    pm.mediator.on('hideCollectionBrowser', this.handleClose);
    pm.mediator.on('toggleSidebar', this.handleClose);
  }

  componentWillUnmount() {
    pm.mediator.off('showCollectionBrowser', this.handleOpen);
    pm.mediator.off('hideCollectionBrowser', this.handleClose);
    pm.mediator.off('toggleSidebar', this.handleClose);
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
    let store = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('EnvironmentStore');
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["w" /* ACTION_TYPE_RUN */]) {
      let environmentId = null,
      environment = store.find(Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveEnvironmentStore').id);
      if (environment) {
        environmentId = environment.id;
      }
      pm.eventBus.channel('runner-events').publish(
      Object(__WEBPACK_IMPORTED_MODULE_9__modules_model_event__["a" /* createEvent */])(
      'launch',
      'runner',
      {
        workspace: Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveWorkspaceSessionStore').workspace,
        collection: id,
        folder: null,
        environment: environmentId }));



    } else
    {
      Object(__WEBPACK_IMPORTED_MODULE_11__utils_CollectionActionsUtil__["a" /* default */])(id, action, {}, { origin: 'collection_browser' });
    }
  }

  handleFolderActions(id, action, data) {
    let store = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('EnvironmentStore');
    let collection = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('CollectionStore').find(this.state.collectionId);

    if (!collection) {
      return;
    }

    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["w" /* ACTION_TYPE_RUN */]) {
      let environmentId = null,
      environment = store.find(Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveEnvironmentStore').id),
      collectionId = null;
      if (environment) {
        environmentId = environment.id;
      }
      let folder = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('FolderStore').find(id);
      if (folder) {
        collectionId = folder.collection;
      }
      pm.eventBus.channel('runner-events').publish(
      Object(__WEBPACK_IMPORTED_MODULE_9__modules_model_event__["a" /* createEvent */])(
      'launch',
      'runner',
      {
        workspace: Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveWorkspaceSessionStore').workspace,
        collection: collectionId,
        folder: id,
        environment: environmentId }));



    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]) {
      pm.mediator.trigger('showEditFolderModal', id, undefined, 'collection_browser');
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */]) {
      this.handleCreateRequest(Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('FolderStore').find(id));
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]) {
      pm.mediator.trigger('showAddFolderModal', _.get(collection, 'id'), id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]) {
      let duplicateFolderEvent = {
        name: 'duplicate',
        namespace: 'folder',
        data: { folder: { id } } };

      Object(__WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__["a" /* default */])(duplicateFolderEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          pm.logger.error('Error in duplicating folder', response.error);
          return;
        }
      }).
      catch(err => {
        pm.logger.error('Error in pipeline while duplicating folder', err);
      });
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]) {
      pm.mediator.trigger('showDeleteFolderModal', id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["u" /* ACTION_TYPE_RENAME */]) {
      let updateFolderEvent = {
        name: 'update',
        namespace: 'folder',
        data: { id, name: data } };


      Object(__WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__["a" /* default */])(updateFolderEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          pm.logger.error('Error in renaming folder', response.error);
          return;
        }
      }).
      catch(err => {
        pm.logger.error('Error in pipeline while renaming folder', err);
      });
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["l" /* ACTION_TYPE_DESCRIPTION_UPDATE */]) {
      let updateFolderEvent = {
        name: 'update',
        namespace: 'folder',
        data: { id, description: data } };


      Object(__WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__["a" /* default */])(updateFolderEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          pm.logger.error('Error in renaming folder', response.error);
          return;
        }
      }).
      catch(err => {
        pm.logger.error('Error in pipeline while renaming folder', err);
      });
    }
  }

  handleRequestActions(id, action, data) {

    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]) {
      pm.mediator.trigger('editCollectionRequest', id, 'collection_browser');
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]) {
      let duplicateRequestEvent = {
        name: 'duplicate',
        namespace: 'request',
        data: { request: { id } } };


      Object(__WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__["a" /* default */])(duplicateRequestEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          pm.logger.error('Error in duplicating request', response.error);
          return;
        }
      }).
      catch(err => {
        pm.logger.error('Error in pipeline while duplicating request', err);
      });
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]) {
      pm.mediator.trigger('showDeleteRequestModal', id);
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["r" /* ACTION_TYPE_OPEN_IN_BUILDER */]) {
      __WEBPACK_IMPORTED_MODULE_10__modules_services_CollectionSidebarService__["a" /* default */].openRequestInTab(id);
      this.handleClose();
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["u" /* ACTION_TYPE_RENAME */]) {
      let updateRequestEvent = {
        name: 'update',
        namespace: 'request',
        data: { id, name: data } };


      Object(__WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__["a" /* default */])(updateRequestEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          pm.logger.error('Error in renaming request', response.error);
          return;
        }
      }).
      catch(err => {
        pm.logger.error('Error in pipeline while renaming request', err);
      });
    } else
    if (action === __WEBPACK_IMPORTED_MODULE_14__constants_CollectionActionsConstants__["l" /* ACTION_TYPE_DESCRIPTION_UPDATE */]) {
      let updateRequestEvent = {
        name: 'update',
        namespace: 'request',
        data: { id, description: data } };


      Object(__WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__["a" /* default */])(updateRequestEvent).
      then(response => {
        if (!_.isEmpty(_.get(response, 'error'))) {
          pm.logger.error('Error in renaming request', response.error);
          return;
        }
      }).
      catch(err => {
        pm.logger.error('Error in pipeline while renaming request', err);
      });
    }
  }

  handleClose() {
    if (!this.state.isOpen) {
      return;
    }
    this.setState({
      isOpen: false,
      collectionId: null,
      activeTab: TABS.DOCUMENTATION });


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
    Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ResourceLimitMessagesStore').fetch();

    let scaledBrowserWidth = pm.settings.getSetting('requesterBrowserWidth'),
    collection = this.getCollection(id);

    this.setState({
      isOpen: true,
      collectionId: id,
      activeTab: collectionTab || TABS.DOCUMENTATION,
      collection,
      browserWidth: this._checkBrowserWidthBounds(scaledBrowserWidth),
      isCollectionDetails: this.getCollectionViewStatus(id) });

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
    return Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('CollectionStore').find(collectionId);
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

  _checkBrowserWidthBounds(width) {
    let windowWidth = window.innerWidth,
    sidebarWidth = pm.settings.getSetting('requesterSidebarWidth'),
    defaultWidth = __WEBPACK_IMPORTED_MODULE_5__constants_AppSettingsDefaults__["a" /* default */].ui.REQUESTER_BROWSER_WIDTH,
    currentUser = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('CurrentUserStore'),
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

  handleCollectionNameUpdate(name) {
    let updateCollectionEvent = {
      name: 'update',
      namespace: 'collection',
      data: { id: this.state.collectionId, name } };


    Object(__WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__["a" /* default */])(updateCollectionEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        pm.logger.error('Error in renaming collection', response.error);
        return;
      }
    }).
    catch(err => {
      pm.logger.error('Error in pipeline while renaming collection', err);
    });
  }

  handleCollectionDescriptionUpdate(description) {

    let updateCollectionEvent = {
      name: 'update',
      namespace: 'collection',
      data: { id: this.state.collectionId, description } };


    Object(__WEBPACK_IMPORTED_MODULE_6__modules_pipelines_user_action__["a" /* default */])(updateCollectionEvent).
    then(response => {
      if (!_.isEmpty(_.get(response, 'error'))) {
        pm.logger.error('Error in updataing collection description', response.error);
        return;
      }

      __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEventV2({
        category: 'documentation',
        action: 'edit_description',
        label: 'collection_browser',
        entityType: 'collection',
        entityId: `${Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('CurrentUserStore').id}-${_.get(this.state, 'collectionId')}` });

    }).
    catch(err => {
      pm.logger.error('Error in pipeline while updataing collection description', err);
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

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'collection-browser-wrapper': true,
      'is-hidden': !this.state.isOpen });

  }

  render() {
    let collectionId = this.state.collectionId,
    collection = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('CollectionStore').find(collectionId),
    classes = this.getClasses(),
    browserStyle = {
      width: this.state.browserWidth + 5 + 'px',
      WebkitUserSelect: this.state.isResizing ? 'none' : 'text' },

    currentUser = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('CurrentUserStore'),
    isLoggedIn = currentUser && currentUser.isLoggedIn,
    isProUser = currentUser && currentUser.teamSyncEnabled;

    // Additonal 5px to avoid clicking outside browser on drag end
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_XPaths_XPath__["a" /* default */], { identifier: 'collectionBrowser', isVisible: this.state.isOpen },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: classes,
            style: browserStyle },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_collections_browser_CollectionBrowser__["a" /* default */], {
            activeTab: this.state.activeTab,
            browserWidth: this.state.browserWidth,
            className: 'collection-browser',
            collection: collection,
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
            onTabChange: this.handleTabChange,
            onViewToggle: this.handleViewToggle }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__postman_react_draggable__["DraggableCore"], {
              offsetParent: document.body,
              onDrag: this.handleDrag,
              onStop: this.handleDragStop },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-left-sidebar-resize-handle requester-browser-resize-handle' })))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CollectionBrowserCollectionDetails__ = __webpack_require__(5011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CollectionBrowserFolderDetails__ = __webpack_require__(5030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_CollectionActionsConstants__ = __webpack_require__(3622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mobx_react__ = __webpack_require__(7);
var _class;










let


CollectionBrowser = Object(__WEBPACK_IMPORTED_MODULE_9_mobx_react__["b" /* observer */])(_class = class CollectionBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    this.props.onActionTriggered && this.props.onActionTriggered('collection', this.props.collection.id, __WEBPACK_IMPORTED_MODULE_7__constants_CollectionActionsConstants__["y" /* ACTION_TYPE_SHARE */]);
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

  componentDidUpdate() {
    if (!this.collectionBrowserNode && this.collectionBrowser) {
      this.collectionBrowserNode = this.collectionBrowser && Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this.collectionBrowser);
      this.collectionBrowserNode && this.collectionBrowserNode.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
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

    let isOffline = !Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["getStore"])('SyncStatusStore').isSocketConnected,
    collectionDetailsClasses = this.getCollectionDetailsWrapperClasses(),
    folderDetailsClasses = this.getFolderDetailsWrapperClasses(),
    collection = this.props.collection,
    canRestore;

    if (!collection || !collection.id) {
      return null;
    }

    canRestore = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["getStore"])('PermissionStore').can('restore', 'collection', collection.id);

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
            isOffline: isOffline,
            onClose: this.props.onClose,
            onFolderSelect: this.handleFolderSelect,
            onActionTriggered: this.handleActionTrigger,
            onAddRequest: this.props.onAddRequest,
            onTeamLabelClick: this.handleTeamLabelClick,
            onCollectionNameUpdate: this.props.onCollectionNameUpdate,
            onCollectionDescriptionUpdate: this.props.onCollectionDescriptionUpdate,
            onEditCollectionDescriptionToggle: this.handleEditDescriptionToggle,
            onEditCollectionNameToggle: this.handleCollectionNameEditToggle,
            enableRestore: this.props.isProUser && canRestore,
            isLoggedIn: this.props.isLoggedIn,
            onTabChange: this.props.onTabChange }),

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




  }}) || _class;


CollectionBrowser.defaultProps = { selectedFolder: {} };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserCollectionDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_InlineInput__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Icons_EditIcon__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Icons_CloseIcon__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CollectionBrowserCollectionContents__ = __webpack_require__(5012);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_collections_browser_CollectionBrowserMocksContainer__ = __webpack_require__(5014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_collections_browser_CollectionBrowserMonitorListContainer__ = __webpack_require__(5019);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CollectionBrowserActivityFeed__ = __webpack_require__(5024);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CollectionBrowserCollectionAction__ = __webpack_require__(5028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_collections_CollectionForkLabel__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_services_CollectionBrowserService__ = __webpack_require__(5029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__base_Buttons__ = __webpack_require__(13);
var _class;




















const TABS = {
  DOCUMENTATION: 'Documentation',
  MONITORS: 'Monitors',
  MOCKS: 'Mocks',
  ACTIVITY: 'Activity' };let



CollectionBrowserCollectionDetails = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["b" /* observer */])(_class = class CollectionBrowserCollectionDetails extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      api: null,
      showEditNameToggle: true };


    this.handleActionTrigger = this.handleActionTrigger.bind(this);
    this.handleFolderSelect = this.handleFolderSelect.bind(this);
    this.handleToggleEditName = this.handleToggleEditName.bind(this);
    this.handleEditName = this.handleEditName.bind(this);
    this.handleLoadApiNameRetry = this.handleLoadApiNameRetry.bind(this);
    this.getApiName = this.getApiName.bind(this);
  }

  componentDidMount() {
    !this.props.isOffline && this.getApiName();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.collection.uid !== this.props.collection.uid || prevProps.isOffline !== this.props.isOffline) {
      !this.props.isOffline && this.getApiName();
    }
  }

  getApiName() {
    this.setState({
      api: null,
      isApiNameLoading: true,
      isApiNameLoadingFailed: false });

    return __WEBPACK_IMPORTED_MODULE_17__modules_services_CollectionBrowserService__["a" /* default */].fetchLinkedApiName(this.props.collection.uid).
    then(data => {
      this.setState({
        api: data.api,
        isApiNameLoading: false,
        isApiNameLoadingFailed: false });

    }).
    catch(() => {
      this.setState({
        isApiNameLoading: false,
        isApiNameLoadingFailed: true });

    });
  }

  handleActionTrigger(entity, entityId, action, data) {
    this.props.onActionTriggered && this.props.onActionTriggered(entity, entityId, action, data);
  }

  handleFolderSelect(folder) {
    this.props.onFolderSelect && this.props.onFolderSelect(folder);
  }

  handleLoadApiNameRetry() {
    !this.props.isOffline && this.getApiName();
  }

  getCollectionDetailHeaderClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'collection-browser-details-header': true,
      'collection-browser-details-header--edit': !this.state.showEditNameToggle,
      'editable': Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('PermissionStore').can('edit', 'collection', this.props.collection.id) });

  }

  getMetaClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'collection-browser-meta-info': true });
  }

  getMetaValueClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'collection-browser-meta-value': true,
      'empty-value': !this.state.api,
      'is-loading': this.state.isApiNameLoading,
      'is-error': this.state.isApiNameLoadingFailed || this.props.isOffline });

  }

  getTabContentClass(tab) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'is-hidden': tab !== this.props.activeTab });
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
    return __WEBPACK_IMPORTED_MODULE_15__utils_util__["a" /* default */].getUserNameForId(owner, currentUser);
  }

  renderRetryContent(retryFunction) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Failed to load data.'),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__base_Buttons__["a" /* Button */], {
          type: 'text',
          onClick: retryFunction }, 'Retry'));




  }

  render() {
    let collection = this.props.collection,
    activeTab = this.props.activeTab || TABS.DOCUMENTATION,
    currentUser = Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('CurrentUserStore');

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.props.className },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-details-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getCollectionDetailHeaderClasses(), title: _.get(collection, 'name') },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_InlineInput__["a" /* default */], {
              className: 'collection-browser-details-header__name',
              placeholder: 'Collection Name',
              ref: 'inlineInput',
              value: _.get(collection, 'name'),
              onSubmit: this.props.onCollectionNameUpdate,
              onToggleEdit: this.handleToggleEditName,
              disableTrim: true }),


            this.state.showEditNameToggle && Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('PermissionStore').can('edit', 'collection', this.props.collection.id) &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                className: 'collection-browser-details-header__edit-icon-wrapper',
                onClick: this.handleEditName },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Icons_EditIcon__["a" /* default */], {
                className: 'collection-browser-details-header__edit-icon',
                size: 'xs' })),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: 'close' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-header-close-btn' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Icons_CloseIcon__["a" /* default */], {
                  className: 'collection-browser-header-close-icon',
                  onClick: this.props.onClose })))),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-meta' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getMetaClasses() },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-meta__field collection-browser-meta--api-name' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'collection-browser-meta-label' }, 'API'),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                    className: this.getMetaValueClasses(),
                    title: _.get(this.state.api, 'name') },


                  this.state.isApiNameLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__base_LoadingIndicator__["a" /* default */], null) ||
                  this.props.isOffline && 'You seem to be offline.' ||
                  this.state.isApiNameLoadingFailed && this.renderRetryContent(this.handleLoadApiNameRetry) || (
                  this.state.api ? this.state.api.name : 'This collection is not linked to any API'))),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_collections_CollectionForkLabel__["a" /* default */], { forkInfo: _.get(collection, 'forkInfo') })))),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__CollectionBrowserCollectionAction__["a" /* default */], {
          collection: collection,
          isPRO: currentUser && currentUser.isLoggedIn && currentUser.teamSyncEnabled,
          onActionTriggered: this.handleActionTrigger }),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__["b" /* Tabs */], {
            activeRef: activeTab,
            className: 'collection-browser-tabs-wrapper',
            defaultActive: TABS.DOCUMENTATION,
            type: 'primary',
            onChange: this.props.onTabChange },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: 'documentationTab' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__["a" /* Tab */], { refKey: TABS.DOCUMENTATION }, 'Documentation')),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: 'monitorsTab' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__["a" /* Tab */], { refKey: TABS.MONITORS }, 'Monitors')),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: 'mocksTab' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__["a" /* Tab */], { refKey: TABS.MOCKS }, 'Mocks')),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: 'activityFeedTab' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Tabs__["a" /* Tab */], { refKey: TABS.ACTIVITY }, 'Changelog'))),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: 'collectionContent', isVisible: activeTab === TABS.DOCUMENTATION },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__CollectionBrowserCollectionContents__["a" /* default */], {
            className: this.getTabContentClass(TABS.DOCUMENTATION),
            collection: collection,
            isOpen: this.props.isOpen,
            onActionTriggered: this.handleActionTrigger,
            onAddRequest: this.props.onAddRequest,
            onFolderSelect: this.handleFolderSelect,
            onToggleEdit: this.props.onEditCollectionDescriptionToggle,
            onUpdate: this.props.onCollectionDescriptionUpdate,
            browserWidth: this.props.browserWidth })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: 'monitor', isVisible: activeTab === TABS.MONITORS },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__containers_collections_browser_CollectionBrowserMonitorListContainer__["a" /* default */], {
            className: this.getTabContentClass(TABS.MONITORS),
            collection: this.props.collection,
            isHidden: activeTab !== TABS.MONITORS })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: 'mock', isVisible: activeTab === TABS.MOCKS },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__containers_collections_browser_CollectionBrowserMocksContainer__["a" /* default */], {
            className: this.getTabContentClass(TABS.MOCKS),
            collection: this.props.collection,
            isHidden: activeTab !== TABS.MOCKS })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_XPaths_XPath__["a" /* default */], { identifier: 'activityFeed', isVisible: activeTab === TABS.ACTIVITY },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__CollectionBrowserActivityFeed__["a" /* default */], {
            className: this.getTabContentClass(TABS.ACTIVITY),
            collectionUid: this.props.collection.uid,
            enableRestore: this.props.enableRestore,
            key: this.props.collection.uid,
            isLoggedIn: this.props.isLoggedIn }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserCollectionContents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CollectionBrowserFolderListItem__ = __webpack_require__(4211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollectionBrowserRequestListItem__ = __webpack_require__(4213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_InlineEditor__ = __webpack_require__(1015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Icons_PublishIcon__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__external_navigation_ExternalNavigationService__ = __webpack_require__(59);
var _class;












let


CollectionBrowserCollectionContents = Object(__WEBPACK_IMPORTED_MODULE_9_mobx_react__["b" /* observer */])(_class = class CollectionBrowserCollectionContents extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleActionTrigger = this.handleActionTrigger.bind(this);
    this.handleFolderSelect = this.handleFolderSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const inlineEditor = this.refs.inlineEditor;
    if (inlineEditor && nextProps.browserWidth !== this.props.browserWidth) {
      inlineEditor.refresh();
    }
  }

  handleFolderSelect(folder) {
    this.props.onFolderSelect && this.props.onFolderSelect(folder);
  }

  handleActionTrigger(entity, entityId, action, data) {
    this.props.onActionTriggered && this.props.onActionTriggered(entity, entityId, action, data);
  }

  handleDocumentationLearnmore() {
    Object(__WEBPACK_IMPORTED_MODULE_12__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["z" /* DOCUMENTATION_LINK */]);
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__["a" /* default */], { identifier: 'collectionDescription' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_InlineEditor__["a" /* default */], {
            key: _.get(this.props, 'collection.id'),
            className: 'collection-browser-details-description-wrapper',
            editable: Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["getStore"])('PermissionStore').can('edit', 'collection', this.props.collection.id),
            placeholder: 'Make things easier for your teammates with a complete request description.',
            ref: 'inlineEditor',
            value: _.get(this.props, 'collection.description'),
            onToggleEdit: this.props.onToggleEdit,
            onUpdate: this.props.onUpdate })),



        _.isEmpty(ownFolders) && _.isEmpty(ownRequests) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-collection-contents' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__body--empty' }, 'This collection is empty.\xA0',


            Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["getStore"])('PermissionStore').can('addRequest', 'collection', this.props.collection.id) &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Buttons__["a" /* Button */], {
                  type: 'text',
                  className: 'learn-more-link',
                  onClick: () => this.props.onAddRequest(this.props.collection) }, 'Add requests'), 'to this collection and create folders to organize them'))),









        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-collection-contents-wrapper' },

          _.map(ownFolders && ownFolders, (folder, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__["a" /* default */], { identifier: `folder/${index}`, key: folder.id },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CollectionBrowserFolderListItem__["a" /* default */], {
                  folder: folder,
                  key: folder.id,
                  onActionTriggered: this.handleActionTrigger,
                  onFolderSelect: this.handleFolderSelect })));



          }),


          _.map(ownRequests, (request, index) => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__["a" /* default */], { identifier: `request/${index}`, key: request.id },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionBrowserRequestListItem__["a" /* default */], {
                  request: request,
                  isOpen: this.props.isOpen,
                  onActionTriggered: this.handleActionTrigger,
                  browserWidth: this.props.browserWidth })));



          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserFolderItemActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Icons_RenameIcon__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_EditIcon__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_CopyIcon__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Icons_DeleteIcon__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__ = __webpack_require__(3622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_CollectionBrowserActionsTooltipConstants__ = __webpack_require__(4212);
var _class;









let


CollectionBrowserFolderItemActions = Object(__WEBPACK_IMPORTED_MODULE_9_mobx_react__["b" /* observer */])(_class = class CollectionBrowserFolderItemActions extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  handleActionTrigger(entityId, action, e) {
    this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], entityId, action);
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  getTooltipText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  render() {
    let { folder, showRename } = this.props;

    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["getStore"])('PermissionStore'),
    canEditFolder = permissionStore.can('edit', 'folder', folder.id),
    canDuplicate = permissionStore.can('duplicate', 'folder', folder.id),
    canDeleteFolder = permissionStore.can('delete', 'folder', folder.id);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-list-item__folder__head__actions collection-browser-actions-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["b" /* ButtonGroup */], null,

          showRename &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              type: 'icon',
              onClick: this.handleActionTrigger.bind(this, folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["v" /* ACTION_TYPE_RENAME_TOGGLE */]),
              disabled: !canEditFolder,
              tooltip: this.getTooltipText(!canEditFolder) || __WEBPACK_IMPORTED_MODULE_10__constants_CollectionBrowserActionsTooltipConstants__["g" /* ACTION_TYPE_RENAME_FOLDER_TOOLTIP */] },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__["a" /* default */], { identifier: 'rename' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Icons_RenameIcon__["a" /* default */], { className: 'collection-browser-collection-rename-icon' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              type: 'icon',
              onClick: this.handleActionTrigger.bind(this, folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]),
              disabled: !canEditFolder,
              tooltip: this.getTooltipText(!canEditFolder) || __WEBPACK_IMPORTED_MODULE_10__constants_CollectionBrowserActionsTooltipConstants__["e" /* ACTION_TYPE_EDIT_FOLDER_TOOLTIP */] },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__["a" /* default */], { identifier: 'edit' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Icons_EditIcon__["a" /* default */], { className: 'collection-browser-collection-edit-icon' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              type: 'icon',
              onClick: this.handleActionTrigger.bind(this, folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]),
              disabled: !canDuplicate,
              tooltip: this.getTooltipText(!canDuplicate) || __WEBPACK_IMPORTED_MODULE_10__constants_CollectionBrowserActionsTooltipConstants__["c" /* ACTION_TYPE_DUPLICATE_FOLDER_TOOLTIP */] },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__["a" /* default */], { identifier: 'copy' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Icons_CopyIcon__["a" /* default */], { className: 'collection-browser-collection-duplicate-icon' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
              type: 'icon',
              onClick: this.handleActionTrigger.bind(this, folder.id, __WEBPACK_IMPORTED_MODULE_6__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]),
              disabled: !canDeleteFolder,
              tooltip: this.getTooltipText(!canDeleteFolder) || __WEBPACK_IMPORTED_MODULE_10__constants_CollectionBrowserActionsTooltipConstants__["a" /* ACTION_TYPE_DELETE_FOLDER_TOOLTIP */] },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_XPaths_XPath__["a" /* default */], { identifier: 'delete' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Icons_DeleteIcon__["a" /* default */], { className: 'collection-browser-collection-delete-icon' }))))));





  }}) || _class;

/***/ }),

/***/ 5014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMocksContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_collections_browser_mocks_CollectionBrowserMockHeader__ = __webpack_require__(5015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_collections_browser_mocks_CollectionBrowserMockList__ = __webpack_require__(5016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_LimitServiceConstants__ = __webpack_require__(4214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_InfobarConstants__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_controllers_MockController__ = __webpack_require__(1590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_XPaths_XPath__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_AuthHandlerService__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mocks_containers_MockModalService__ = __webpack_require__(3944);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;










let


CollectionBrowserMocksContainer = Object(__WEBPACK_IMPORTED_MODULE_9_mobx_react__["b" /* observer */])(_class = class CollectionBrowserMocksContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      mocks: [],
      refreshing: false };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRefreshMocks = this.handleRefreshMocks.bind(this);
    this.handleAddMock = this.handleAddMock.bind(this);
    this.handleEditMock = this.handleEditMock.bind(this);
    this.handleCloseWarning = this.handleCloseWarning.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isHidden && !nextProps.isHidden) {
      this.detachModelListeners();
      this.initializeModel(nextProps.collection);
    }
  }

  componentDidMount() {
    this.initializeModel(this.props.collection);
  }

  componentWillUnmount() {
    this.detachModelListeners();
  }

  fetchMocks(collectionUId) {
    this.setState({ refreshing: true });
    __WEBPACK_IMPORTED_MODULE_5__modules_controllers_MockController__["a" /* default */].getAll({
      collection: collectionUId,
      workspace: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('ActiveWorkspaceStore').id,
      populate: true }).
    then(list => {
      this.setState({
        mocks: list,
        refreshing: false });

    }).catch(() => {
      this.setState({ refreshing: false });
    });
  }

  initializeModel(collection) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('CurrentUserStore').isLoggedIn || _.isEmpty(collection)) {
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
    let mockLimitMessage = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('ResourceLimitMessagesStore').find(__WEBPACK_IMPORTED_MODULE_3__constants_LimitServiceConstants__["a" /* MOCK_CALLS */]);
    mockLimitMessage && mockLimitMessage.dismissMessage();
  }

  handleDelete(mockId) {

    let mock = _.find(this.state.mocks, ['id', mockId]);
    mock && pm.mediator.trigger('showDeleteMockModal', mock, this.fetchMocks.bind(this, this.props.collection.uid), { origin: 'collection_browser' });
  }

  handleEditMock(data = {}) {
    __WEBPACK_IMPORTED_MODULE_11__mocks_containers_MockModalService__["a" /* default */].edit(
    {
      collectionId: this.props.collection.id,
      opts: { from: data.from },
      mock: _extends({}, data.mock) },

    this.fetchMocks.bind(this, this.props.collection.uid));

  }

  handleSignIn() {
    __WEBPACK_IMPORTED_MODULE_10__modules_services_AuthHandlerService__["a" /* default */].login();
  }

  handleRefreshMocks() {
    !this.state.refreshing && this.fetchMocks(this.props.collection.uid);
  }

  handleAddMock(data = {}) {
    __WEBPACK_IMPORTED_MODULE_11__mocks_containers_MockModalService__["a" /* default */].create(
    {
      collectionId: this.props.collection.id,
      opts: { from: data.from } },

    this.fetchMocks.bind(this, this.props.collection.uid));

  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_8_classnames___default()({ 'collection-browser-mocks': true }, this.props.className);
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('CurrentUserStore'),
    message = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('ResourceLimitMessagesStore').find(__WEBPACK_IMPORTED_MODULE_3__constants_LimitServiceConstants__["a" /* MOCK_CALLS */]) || {};

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_XPaths_XPath__["a" /* default */], { identifier: 'header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_collections_browser_mocks_CollectionBrowserMockHeader__["a" /* default */], {
            isLoggedIn: currentUser.isLoggedIn,
            isRefreshing: this.state.refreshing,
            message: message,
            mocks: this.state.mocks,
            onAddMock: this.handleAddMock,
            onMessageClose: this.handleCloseWarning,
            onRefresh: this.handleRefreshMocks,
            collection: this.props.collection })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_XPaths_XPath__["a" /* default */], { identifier: 'list' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_collections_browser_mocks_CollectionBrowserMockList__["a" /* default */], {
            isLoading: this.state.refreshing,
            mocks: this.state.mocks,
            onAddMock: this.handleAddMock,
            onEdit: this.handleEditMock,
            onDelete: this.handleDelete,
            onSignIn: this.handleSignIn,
            collection: this.props.collection }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMockHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messaging_Alert__ = __webpack_require__(1549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_RefreshIcon__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_AddIcon__ = __webpack_require__(1009);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_PublishIcon__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__external_navigation_ExternalNavigationService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__base_Buttons__ = __webpack_require__(13);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;











let


CollectionBrowserMockHeader = Object(__WEBPACK_IMPORTED_MODULE_8_mobx_react__["b" /* observer */])(_class = class CollectionBrowserMockHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleMockLearn = this.handleMockLearn.bind(this);
    this.handleAddMock = this.handleAddMock.bind(this);
  }

  handleMockLearn() {
    Object(__WEBPACK_IMPORTED_MODULE_11__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["U" /* MOCK_DOCS */]);
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

  getTooltipText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  getAddMockClass(isDisabled) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'collection-browser-add-entity': isDisabled,
      'collection-browser-learn-more-header__text': true });

  }


  render() {
    let alertMessage = _.get(this.props, 'message.message');

    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["getStore"])('PermissionStore'),
    collectionId = this.props.collection && this.props.collection.id,
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["getStore"])('ActiveWorkspaceStore').id;

    const canAddMock = collectionId && permissionStore.can('addMock', 'collection', collectionId) &&
    permissionStore.can('addMock', 'workspace', workspaceId);

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

        alertMessage &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__messaging_Alert__["a" /* default */], _extends({},
        this.props.message, {
          message: alertMessage,
          onDismiss: this.props.onMessageClose })),



        !_.isEmpty(this.props.mocks) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: 'addMock' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-learn-more-header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__base_Buttons__["a" /* Button */], {
                className: 'collection-browser-add-mock',
                onClick: this.handleAddMock,
                tooltip: this.getTooltipText(!canAddMock),
                disabled: !canAddMock },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getAddMockClass(!canAddMock) },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_AddIcon__["a" /* default */], {
                  className: 'collection-browser-add-entity-header__icon',
                  style: 'secondary' }), 'Add mock'))))));









  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMockList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CollectionBrowserMockItem__ = __webpack_require__(5017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollectionBrowserMockEmptyListItem__ = __webpack_require__(5018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_XPaths_XPath__ = __webpack_require__(24);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};



let
CollectionBrowserMockList = class CollectionBrowserMockList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-lists' },

        this.props.isLoading &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-item' }, 'Fetching more mocks'),




        !this.props.isLoading && _.isEmpty(this.props.mocks) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionBrowserMockEmptyListItem__["a" /* default */], {
          onAddMock: this.props.onAddMock,
          onSignIn: this.props.onSignIn,
          collection: this.props.collection }),



        _.map(this.props.mocks, mock => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_XPaths_XPath__["a" /* default */], { identifier: mock.id, key: mock.id },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CollectionBrowserMockItem__["a" /* default */], _extends({
                onAddMock: this.props.onAddMock,
                onSignIn: this.props.onSignIn,
                onDelete: this.props.onDelete,
                onEdit: this.props.onEdit,
                collectionId: this.props.collection.id,
                isLoading: this.props.isLoading },
              mock))));



        })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMockItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ClipboardHelper__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_MockIcon__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_CopyIcon__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_DeleteIcon__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_Icons_EditIcon__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_uid_helper__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__ = __webpack_require__(20);
var _class;












let


CollectionBrowserMockItem = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["b" /* observer */])(_class = class CollectionBrowserMockItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleCopyUrl = this.handleCopyUrl.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  getMockUrl() {
    return _.get(this, 'props.url', _.get(this, 'props.id', ''));
  }

  handleCopyUrl() {
    __WEBPACK_IMPORTED_MODULE_1__utils_ClipboardHelper__["a" /* default */].copy(this.getMockUrl());
    __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEventV2({
      category: 'mock',
      action: 'copy',
      label: 'collection_browser',
      entityId: _.get(this.props, 'id') });

    pm.toasts.success('Mock URL copied');
  }

  handleDelete() {
    this.props.onDelete && this.props.onDelete(this.props.id);
  }

  handleEdit() {
    this.props.onEdit && this.props.onEdit({ mock: {
        mockId: this.props.id,
        name: this.props.name,
        isPrivate: !this.props.published,
        mockUrl: this.props.url,
        versionId: this.props.collection && this.props.collection.versionTag,
        environmentId: this.props.environment && Object(__WEBPACK_IMPORTED_MODULE_12__utils_uid_helper__["b" /* decomposeUID */])(this.props.environment.id).modelId },
      from: 'collection_browser' });
  }

  getTooltipText(isDisabled, action) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    } else
    {
      return `${action} Mock`;
    }
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('CurrentUserStore');

    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('PermissionStore'),
    canDeleteMock = permissionStore.can('deleteMock', 'collection', _.get(this.props, 'collectionId')),
    canEditMock = permissionStore.can('editMock', 'collection', _.get(this.props, 'collectionId'));

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-list-item__container', 'data-mock-id': this.props.id },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-list-item__icon-container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_MockIcon__["a" /* default */], { className: 'collection-browser-mock-list-item__icon' })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-list-item__details' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'collection-browser-mock-list-item__details-name',
              title: this.props.name },

            this.props.name),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'collection-browser-mock-list-item__details-link',
              title: this.getMockUrl() },

            this.getMockUrl())),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-list-item-version' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              title: _.get(this.props.collection, 'versionName'),
              className: __WEBPACK_IMPORTED_MODULE_10_classnames___default()({
                'collection-browser-mock-list-item-version-tag': true,
                'collection-browser-mock-list-item-version-tag--current':
                _.isEqual(_.get(this.props.collection, 'versionTag'), 'latest') }) },


            _.get(this.props.collection, 'versionName'))),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-mock-list-item__actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'collection-browser-mock-list-item__button-copy',
              tooltip: 'Copy Mock URL',
              type: 'icon',
              onClick: this.handleCopyUrl },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: 'copy' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_CopyIcon__["a" /* default */], { className: 'collection-browser-mock-list-item__actions-copy-icon' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              tooltip: this.getTooltipText(!canEditMock, 'Edit'),
              type: 'icon',
              onClick: this.handleEdit,
              disabled: !canEditMock },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: 'edit' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_Icons_EditIcon__["a" /* default */], null))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
              className: 'collection-browser-mock-list-item__button-delete',
              tooltip: this.getTooltipText(!canDeleteMock, 'Delete'),
              type: 'icon',
              onClick: this.handleDelete,
              disabled: !canDeleteMock },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: 'delete' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_DeleteIcon__["a" /* default */], { className: 'collection-browser-mock-list-item__actions-delete-icon' }))))));





  }}) || _class;


CollectionBrowserMockItem.defaultProps = { onDelete: _.noop };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMockEmptyListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_MouseClickIcon__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__onboarding_public_Skills__ = __webpack_require__(1554);
var _class;




let


CollectionBrowserMockEmptyListItem = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class CollectionBrowserMockEmptyListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleAddMock = this.handleAddMock.bind(this);
    this.handleShowMeHow = this.handleShowMeHow.bind(this);
  }

  handleAddMock() {
    this.props.onAddMock({ from: 'browser_empty_state' });
  }

  handleShowMeHow() {
    Object(__WEBPACK_IMPORTED_MODULE_5__onboarding_public_Skills__["a" /* runTaggedLesson */])('mocking', {
      signInModalOptions: {
        type: 'mock',
        origin: 'collection_browser_mock_show_me_how' } });


  }

  getTooltipText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  render() {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('PermissionStore'),
    canAddMock = permissionStore.can('addMock', 'collection', this.props.collection.id);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-block' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__illustration-wrapper entity-empty__illustration-wrapper--mock' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mock-empty__illustration' })),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'This collection is not being mocked'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' }, 'A mock lets you simulate endpoints and their corresponding responses in a Collection without actually spinning up a back end.'),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], {
                  type: 'secondary',
                  onClick: this.handleAddMock,
                  disabled: !canAddMock,
                  tooltip: this.getTooltipText(!canAddMock) }, 'Create a mock server')),




            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__separator-block' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'separator' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'separator-text' }, 'OR'),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'separator' })),

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__learn' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Buttons__["a" /* Button */], {
                    type: 'secondary',
                    onClick: this.handleShowMeHow },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_MouseClickIcon__["a" /* default */], {
                    style: 'secondary',
                    className: 'entity-empty__learn__mouse-click-icon' }), 'Show me how')))))));









  }}) || _class;

/***/ }),

/***/ 5019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMonitorListContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_collections_browser_monitors_CollectionBrowserMonitorHeader__ = __webpack_require__(5020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_collections_browser_monitors_CollectionBrowserMonitorList__ = __webpack_require__(5021);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_InfobarConstants__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_LimitServiceConstants__ = __webpack_require__(4214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_controllers_MonitorController__ = __webpack_require__(1589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_AuthHandlerService__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__new_button_CreateNewXService__ = __webpack_require__(3765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_base_XPaths_XPath__ = __webpack_require__(24);
var _class;













let


CollectionBrowserMonitorListContainer = Object(__WEBPACK_IMPORTED_MODULE_11_mobx_react__["b" /* observer */])(_class = class CollectionBrowserMonitorListContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    if (this.props.isHidden && !nextProps.isHidden) {
      this.detachModelListeners();
      this.initializeModel(nextProps.collection);
    }
  }

  componentDidMount() {
    this.initializeModel(this.props.collection);
  }

  componentWillUnmount() {
    this.detachModelListeners();
  }

  fetchMonitors(collectionUId) {
    this.setState({ refreshing: true });
    __WEBPACK_IMPORTED_MODULE_8__modules_controllers_MonitorController__["a" /* default */].getAll({
      collection: collectionUId,
      workspace: Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["getStore"])('ActiveWorkspaceStore').id }).
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
    if (!Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["getStore"])('CurrentUserStore').isLoggedIn || _.isEmpty(collection)) {
      return;
    }

    this.fetchMonitors(collection.uid);
  }

  handleCloseWarning() {
    let monitorLimitMessage = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["getStore"])('ResourceLimitMessagesStore').find(__WEBPACK_IMPORTED_MODULE_5__constants_LimitServiceConstants__["b" /* MONITOR_RUNS */]);
    monitorLimitMessage && monitorLimitMessage.dismissMessage();
  }

  handleDelete(monitorId) {
    let monitor = _.find(this.state.monitors, ['id', monitorId]);
    monitor && pm.mediator.trigger('showDeleteMonitorModal', monitor, this.fetchMonitors.bind(this, this.props.collection.uid), { origin: 'collection_browser' });
  }

  handleEdit(monitorId) {
    __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('monitor', 'initiate_edit');
    Object(__WEBPACK_IMPORTED_MODULE_6__models_services_DashboardService__["a" /* editEntity */])('monitors', monitorId, Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["getStore"])('ActiveWorkspaceStore').id);
  }

  handleSignIn() {
    __WEBPACK_IMPORTED_MODULE_10__modules_services_AuthHandlerService__["a" /* default */].login();
  }

  handleRefreshMonitors() {
    !this.state.refreshing && this.fetchMonitors(this.props.collection.uid);
  }

  handleAddMonitor(data = {}) {
    __WEBPACK_IMPORTED_MODULE_12__new_button_CreateNewXService__["a" /* default */].create(
    'openCreateNewMonitorModal',
    {
      collectionId: this.props.collection.id,
      opts: { from: data.from } },

    this.fetchMonitors.bind(this, this.props.collection.uid),
    { from: 'collection_browser' });

  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'collection-browser-monitor': true }, this.props.className);
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["getStore"])('CurrentUserStore'),
    message = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["getStore"])('ResourceLimitMessagesStore').find(__WEBPACK_IMPORTED_MODULE_5__constants_LimitServiceConstants__["b" /* MONITOR_RUNS */]) || {};

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_base_XPaths_XPath__["a" /* default */], { identifier: 'header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_collections_browser_monitors_CollectionBrowserMonitorHeader__["a" /* default */], {
            isLoggedIn: currentUser && currentUser.isLoggedIn,
            isRefreshing: this.state.refreshing,
            message: message,
            monitors: this.state.monitors,
            onAddMonitor: this.handleAddMonitor,
            onMessageClose: this.handleCloseWarning,
            onRefresh: this.handleRefreshMonitors,
            collection: this.props.collection })),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_base_XPaths_XPath__["a" /* default */], { identifier: 'list' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_collections_browser_monitors_CollectionBrowserMonitorList__["a" /* default */], {
            isLoading: this.state.refreshing,
            monitors: this.state.monitors,
            onAddMonitor: this.handleAddMonitor,
            onDelete: this.handleDelete,
            onEdit: this.handleEdit,
            onSignIn: this.handleSignIn,
            collection: this.props.collection }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMonitorHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messaging_Alert__ = __webpack_require__(1549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_PublishIcon__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_RefreshIcon__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_AddIcon__ = __webpack_require__(1009);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__external_navigation_ExternalNavigationService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__base_Buttons__ = __webpack_require__(13);
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _class;











let


CollectionBrowserMonitorHeader = Object(__WEBPACK_IMPORTED_MODULE_8_mobx_react__["b" /* observer */])(_class = class CollectionBrowserMonitorHeader extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleMonitorLearn = this.handleMonitorLearn.bind(this);
    this.handleAddMonitor = this.handleAddMonitor.bind(this);
  }

  handleMonitorLearn() {
    Object(__WEBPACK_IMPORTED_MODULE_11__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_6__constants_AppUrlConstants__["V" /* MONITORING_DOCS */]);
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

  getTooltipText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  getAddMonitorClass(isDisabled) {
    return __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
      'collection-browser-add-entity': isDisabled,
      'collection-browser-learn-more-header__text': true });

  }


  render() {
    let alertMessage = _.get(this.props, 'message.message');

    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["getStore"])('PermissionStore'),
    collectionId = this.props.collection.id,
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_10__stores_get_store__["getStore"])('ActiveWorkspaceStore').id;

    const canAddMonitor = collectionId && permissionStore.can('addMonitor', 'collection', collectionId) &&
    permissionStore.can('addMonitor', 'workspace', workspaceId);

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

        alertMessage &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__messaging_Alert__["a" /* default */], _extends({},
        this.props.message, {
          message: alertMessage,
          onDismiss: this.props.onMessageClose })),



        !_.isEmpty(this.props.monitors) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_XPaths_XPath__["a" /* default */], { identifier: 'addMonitor' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-learn-more-header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__base_Buttons__["a" /* Button */], {
                className: 'collection-browser-add-monitor',
                onClick: this.handleAddMonitor,
                tooltip: this.getTooltipText(!canAddMonitor),
                disabled: !canAddMonitor },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getAddMonitorClass(!canAddMonitor) },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_AddIcon__["a" /* default */], {
                  className: 'collection-browser-add-entity-header__icon',
                  style: 'secondary' }), 'Add monitor'))))));









  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMonitorList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CollectionBrowserMonitorListItem__ = __webpack_require__(5022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollectionBrowserMonitorEmptyItem__ = __webpack_require__(5023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_XPaths_XPath__ = __webpack_require__(24);




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
          onAddMonitor: this.props.onAddMonitor,
          onSignIn: this.props.onSignIn,
          collection: this.props.collection }),



        _.map(this.props.monitors, monitor => {
          return (
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_XPaths_XPath__["a" /* default */], {
                identifier: monitor.id,
                key: monitor.id },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CollectionBrowserMonitorListItem__["a" /* default */], {
                monitor: monitor,
                onDelete: this.props.onDelete,
                onEdit: this.props.onEdit,
                id: monitor.id,
                collection: this.props.collection })));



        })));



  }};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMonitorListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Icons_MonitorIcon__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_EditIcon__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_DeleteIcon__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_services_DashboardService__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__ = __webpack_require__(24);
var _class;









let

CollectionBrowserMonitorListItem = Object(__WEBPACK_IMPORTED_MODULE_7_mobx_react__["b" /* observer */])(_class = class CollectionBrowserMonitorListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    Object(__WEBPACK_IMPORTED_MODULE_5__models_services_DashboardService__["m" /* openEntity */])('monitors', this.props.monitor.id, Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["getStore"])('ActiveWorkspaceStore').id);
  }

  getTooltipText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    } else
    {
      return 'Delete Monitor';
    }
  }

  render() {
    let currentUser = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["getStore"])('CurrentUserStore');

    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_8__stores_get_store__["getStore"])('PermissionStore'),
    canDeleteMonitor = permissionStore.can('deleteMonitor', 'collection', this.props.collection.id);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list-item', 'data-monitor-id': this.props.id },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'collection-browser-monitor-list-item__content-wrapper',
            onClick: this.handleOpenMonitor },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list-item__icon-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Icons_MonitorIcon__["a" /* default */], { className: 'collection-browser-monitor-list-item__icon' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list-item__content' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list-item__name' }, this.props.monitor.name),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list-item__creator' }, this.getUsername(this.props.monitor.createdBy, currentUser)))),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-monitor-list-item__actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'collection-browser-monitor-dropdown-menu-item__button--edit',
              tooltip: 'Edit Monitor',
              type: 'icon',
              onClick: this.handleEdit },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__["a" /* default */], { identifier: 'edit' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_EditIcon__["a" /* default */], { className: 'collection-browser-monitor-dropdown-menu-item__icon--edit' }))),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              className: 'collection-browser-monitor-dropdown-menu-item__button--delete',
              tooltip: this.getTooltipText(!canDeleteMonitor),
              type: 'icon',
              onClick: this.handleDelete,
              disabled: !canDeleteMonitor },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_XPaths_XPath__["a" /* default */], { identifier: 'delete' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_DeleteIcon__["a" /* default */], { className: 'collection-browser-monitor-dropdown-menu-item__icon--delete' }))))));






  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserMonitorEmptyItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_MouseClickIcon__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__onboarding_public_Skills__ = __webpack_require__(1554);
var _class;




let

CollectionBrowserMonitorEmptyItem = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class CollectionBrowserMonitorEmptyItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.handleAddMonitor = this.handleAddMonitor.bind(this);
    this.handleShowMeHow = this.handleShowMeHow.bind(this);
  }

  handleAddMonitor() {
    this.props.onAddMonitor({ from: 'browser_empty_state' });
  }

  handleShowMeHow() {
    Object(__WEBPACK_IMPORTED_MODULE_5__onboarding_public_Skills__["a" /* runTaggedLesson */])('monitoring', {
      signInModalOptions: {
        type: 'monitor',
        origin: 'collection_browser_monitor_show_me_how' } });


  }

  getTooltipText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
    }
  }

  getEmptyState() {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_4__stores_get_store__["getStore"])('PermissionStore'),
    canAddMock = permissionStore.can('addMonitor', 'collection', this.props.collection.id);

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__illustration-wrapper entity-empty__illustration-wrapper--monitor' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'monitor-empty__illustration' })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'This collection is not being monitored'),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' }, 'A monitor lets you run a collection periodically to check for its performance and response.'),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
                type: 'secondary',
                onClick: this.handleAddMonitor,
                disabled: !canAddMock,
                tooltip: this.getTooltipText(!canAddMock) }, 'Create a monitor')),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__separator-block' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'separator' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'separator-text' }, 'OR'),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'separator' })),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__learn' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Buttons__["a" /* Button */], {
                  type: 'secondary',
                  onClick: this.handleShowMeHow },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_MouseClickIcon__["a" /* default */], {
                  style: 'secondary',
                  className: 'entity-empty__learn__mouse-click-icon' }), 'Show me how'))))));








  }

  getContents() {
    return this.getEmptyState();
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-block' },
        this.getContents()));


  }}) || _class;

/***/ }),

/***/ 5024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserActivityFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_feed_ActivityFeed__ = __webpack_require__(5025);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_services_AuthHandlerService__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_feed_AddVersionTagModal__ = __webpack_require__(5027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_CollectionActivityFeedStore__ = __webpack_require__(1638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);







let

CollectionBrowserActivityFeed = class CollectionBrowserActivityFeed extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      collectionRestoreTarget: null,
      openVersionTagModal: false,
      isRemovingTag: false };


    this.handleLoadNew = this.handleLoadNew.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleRestore = this.handleRestore.bind(this);
    this.handleRetry = this.handleRetry.bind(this);
    this.handleAddVersionTag = this.handleAddVersionTag.bind(this);
    this.handleRemoveVersionTag = this.handleRemoveVersionTag.bind(this);
    this.handleVersionTagModalClose = this.handleVersionTagModalClose.bind(this);
  }

  componentWillMount() {
    this.store = new __WEBPACK_IMPORTED_MODULE_4__stores_CollectionActivityFeedStore__["a" /* default */]();
    this.props.isLoggedIn && this.initializeFeeds();
  }

  initializeFeeds() {
    let collectionUid = this.props.collectionUid;
    this.store.initialize(collectionUid);

    // Add analytics event to show that user is viewing collection changelog
    __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEventV2({
      category: 'collection',
      action: 'view_changelog',
      label: 'collection_changelog',
      entityId: this.props.collectionUid });

  }

  handleLoadNew() {
    return this.store.loadNew().
    then(isNewFeedLoaded => {
      return Promise.resolve(isNewFeedLoaded);
    });
  }

  handleLoadMore() {
    this.store.loadMore();
  }

  handleSignIn() {
    __WEBPACK_IMPORTED_MODULE_2__modules_services_AuthHandlerService__["a" /* default */].login();
  }

  handleAddVersionTag(revisionId) {
    // Add analytics event to track initial version tag create
    __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEventV2({
      category: 'collection',
      action: 'initiate_version_tag_create',
      label: 'collection_changelog',
      entityId: this.props.collectionUid });


    this.setState({
      openVersionTagModal: !this.state.openVersionTagModal,
      revisionId: revisionId });

  }

  handleRemoveVersionTag(revisionId, tagId) {
    this.setState({ isRemovingTag: !this.state.isRemovingTag });

    let criteria = {
      collectionUid: this.props.collectionUid,
      tagId: tagId,
      revisionId: revisionId };


    this.store.removeVersionTag(criteria).
    then(() => {
      this.setState({ isRemovingTag: !this.state.isRemovingTag });

      // Add analytics event to track version tag delete
      __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEventV2({
        category: 'collection',
        action: 'version_tag_delete',
        label: 'collection_changelog',
        entityId: this.props.collectionUid });

    }).
    catch(() => {
      this.setState({ isRemovingTag: !this.state.isRemovingTag });
    });
  }

  handleVersionTagModalClose() {
    this.setState({ openVersionTagModal: !this.state.openVersionTagModal });
  }

  handleRestore(maxId) {
    let restoreTarget = {
      collectionUid: this.props.collectionUid,
      maxId: maxId };


    this.setState({ collectionRestoreTarget: restoreTarget }, () => {
      pm.syncManager.restoreCollection(restoreTarget, () => {
        this.setState({ collectionRestoreTarget: null });

        // Add analytics event to show that collection has been restored
        __WEBPACK_IMPORTED_MODULE_5__modules_services_AnalyticsService__["a" /* default */].addEventV2({
          category: 'collection',
          action: 'restore_collection',
          label: 'collection_changelog',
          entityId: this.props.collectionUid });

      });
    });
  }

  /**
     * @param {Boolean} - options.initialRetry - retry initializing change-logs
     * @param {Boolean} - options.loadMoreRetry - retry loading more change-logs
     */
  handleRetry(options) {
    if (options.initialRetry) {
      this.initializeFeeds();
    } else
    if (options.loadMoreRetry) {
      this.handleLoadMore();
    }
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_6_classnames___default()({ 'collection-browser-activity-feed-lists': true }, this.props.className);
  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__activity_feed_ActivityFeed__["a" /* default */], {
          activityFeed: this.store,
          collectionRestoreTarget: this.state.collectionRestoreTarget,
          enableRestore: this.props.enableRestore,
          isLoggedIn: this.props.isLoggedIn,
          isRemovingTag: this.state.isRemovingTag,
          onLoadNew: this.handleLoadNew,
          onLoadMore: this.handleLoadMore,
          onSignIn: this.handleSignIn,
          onRestore: this.handleRestore,
          onRetry: this.handleRetry,
          onAddVersionTag: this.handleAddVersionTag,
          onRemoveVersionTag: this.handleRemoveVersionTag }),


        this.state.openVersionTagModal &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__activity_feed_AddVersionTagModal__["a" /* default */], {
          activityFeed: this.store,
          revisionId: this.state.revisionId,
          collectionUid: this.props.collectionUid,
          isOpen: this.state.openVersionTagModal,
          onRequestClose: this.handleVersionTagModalClose })));




  }};

/***/ }),

/***/ 5025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Activity__ = __webpack_require__(5026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_AppUrlConstants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__external_navigation_ExternalNavigationService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_PublishIcon__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_RefreshIcon__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mobx_react__ = __webpack_require__(7);
var _class;










let


ActivityFeed = Object(__WEBPACK_IMPORTED_MODULE_11_mobx_react__["b" /* observer */])(_class = class ActivityFeed extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollDebounced = _.debounce(this.handleScroll, 100);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleRefreshFeed = this.handleRefreshFeed.bind(this);
    this.handleChangeLogLearn = this.handleChangeLogLearn.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activityFeed &&
    this.props.activityFeed &&
    nextProps.activityFeed.collectionUid &&
    nextProps.activityFeed.collectionUid !== this.props.activityFeed.collectionUid) {
      this.refs.activity_feed && (this.refs.activity_feed.scrollTop = 0);
    }
  }

  handleChangeLogLearn() {
    Object(__WEBPACK_IMPORTED_MODULE_6__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_5__constants_AppUrlConstants__["a" /* ACTIVITY_FEED_AND_RESTORING_COLLECTION */]);
  }

  getRefreshTextClass() {
    return __WEBPACK_IMPORTED_MODULE_10_classnames___default()({
      'changelog-learn-more-header__refresh-container': true,
      'is-loading-new': this.props.activityFeed.isLoadingNew });

  }

  handleSignIn() {
    this.props.onSignIn && this.props.onSignIn();
  }

  handleScroll() {
    let node = this.refs.activity_feed;
    if (node.scrollHeight - (node.scrollTop + node.offsetHeight) <= 5) {
      _.isEmpty(this.props.activityFeed.error) && this.props.onLoadMore && this.props.onLoadMore();
    }
  }

  handleRefreshFeed() {
    this.props.onLoadNew && this.props.onLoadNew().
    then(isNewFeedLoaded => {
      if (isNewFeedLoaded) {
        this.refs.activity_feed.scrollTop = 0;
      }
    });
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_10_classnames___default()({ 'activity-feed-container': true }, this.props.className);
  }

  render() {
    let props = this.props,
    activities = _.get(props, 'activityFeed.feeds', []),
    meta = _.get(props, 'activityFeed.meta', {}),
    error = _.get(props, 'activityFeed.error', {}),
    initialError = error && error.type === 'initial',
    loadMoreError = error && error.type === 'loadMore';

    if (!props.isLoggedIn) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-empty-container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                className: 'activity-feed-empty-signin-link',
                onClick: this.handleSignIn }, 'Sign in'), ' to track changes to your collection.')));






    }

    // Don't show subscribe / Unsubscribe event in collection activity feed
    let filteredActivities = _.filter(activities, activity => {
      return !(meta.model === 'collection' && _.includes(['subscribe', 'unsubscribe'], activity.action));
    }),
    groupedActivities = _.isEmpty(filteredActivities) ? [] : __WEBPACK_IMPORTED_MODULE_2__postman_date_helper___default.a.getDateGroups(filteredActivities, 'createdAt', 'MMMM D, YYYY'),
    latestActivity = _.maxBy(filteredActivities, 'id');
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'changelog-learn-more-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_PublishIcon__["a" /* default */], {
            className: 'changelog-learn-more-header__icon',
            style: 'secondary' }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'changelog-learn-more-header__text',
              onClick: this.handleChangeLogLearn }, 'Learn more about the changelog'),




          this.props.isLoggedIn &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Buttons__["a" /* Button */], {
              className: this.getRefreshTextClass(),
              onClick: this.handleRefreshFeed,
              disabled: props.activityFeed.isLoading || initialError,
              tooltip: 'Fetch newer feeds' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_RefreshIcon__["a" /* default */], { className: 'changelog-learn-more-header__refresh-icon' }))),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'activity-feed',
            ref: 'activity_feed',
            onScroll: this.handleScrollDebounced },


          (props.activityFeed.isLoading || initialError) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Activity__["b" /* LoadFeed */], {
            error: error,
            key: 'loading',
            isLoading: props.activityFeed.isLoading,
            onRetry: this.props.onRetry }),



          _.map(groupedActivities, subActivities => {
            if (_.isEmpty(subActivities)) {
              return false;
            }

            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'activity-feed-date-group-wrapper',
                  key: subActivities.name },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-date-group' }, ' ', subActivities.name, ' '),

                _.map(subActivities.items, activity => {
                  return (
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Activity__["a" /* Activity */], {
                      activity: activity,
                      enableRestore: !!(this.props.enableRestore && latestActivity && latestActivity.id !== activity.id),
                      isRestoring: _.get(this.props, 'collectionRestoreTarget.maxId') === activity.id,
                      isRemovingTag: this.props.isRemovingTag,
                      key: activity.id,
                      meta: meta,
                      onAddVersionTag: this.props.onAddVersionTag,
                      onRemoveVersionTag: this.props.onRemoveVersionTag,
                      onRestore: this.props.onRestore }));


                })));



          }),


          !props.activityFeed.isLoading && _.isEmpty(groupedActivities) && !error &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: props.className },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-loading-container ' }, 'No activities yet'))),






        (props.activityFeed.isLoadingMore || loadMoreError) &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Activity__["b" /* LoadFeed */], {
          error: error,
          key: 'loading-more',
          isLoading: props.activityFeed.isLoadingMore,
          onRetry: this.props.onRetry })));




  }}) || _class;


ActivityFeed.propTypes = {
  activityFeed: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired,
  activityName: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  onLoadMore: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__ = __webpack_require__(1662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_WarningIcon__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ActivityFeedHelper__ = __webpack_require__(4215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_PluralizeHelper__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Buttons__ = __webpack_require__(13);
var _class;









const COLLECTION_ACTIVITY_MODEL = 'collection';let


Activity = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class Activity extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  findCurrentLabel(activity) {
    return _.find(activity.tags, ['system', true]);
  }

  render() {
    let activity = this.props.activity,
    meta = this.props.meta,
    destination = null,
    trigger = activity.trigger,
    changesCount = __WEBPACK_IMPORTED_MODULE_5__utils_ActivityFeedHelper__["a" /* default */].getWhiteListedActivitiesCount(activity),
    pluralizedChangeText = __WEBPACK_IMPORTED_MODULE_6__utils_PluralizeHelper__["a" /* default */].pluralize({
      count: changesCount,
      singular: 'change',
      plural: 'changes' }),

    headingText,
    activityDetails = null,
    currentLabel = this.findCurrentLabel(activity);

    if (activity.to && activity.to.model === 'folder') {
      destination =
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' to the folder '),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'activity-item-model' }, ' ', activity.to.instance.name, ' '));


    }

    switch (`${activity.model}:${activity.action}`) {
      case 'collection:create':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' created this collection');
        break;
      case 'collection:update':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head-content' },
            changesCount > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' made ', changesCount, ' ', pluralizedChangeText, ' to '),
            changesCount === 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', trigger === 'restore' ? 'restored' : 'modified', ' ')), 'this collection');



        activityDetails = changesCount > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__["a" /* Details */], activity);
        break;
      case 'collection:destroy':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' deleted this collection');
        break;
      case 'folder:create':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' created the folder ');
        break;
      case 'folder:update':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head-content' },
            changesCount > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' made ', changesCount, ' ', pluralizedChangeText, ' to '),
            changesCount === 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' modified ')), 'the folder');



        activityDetails = !_.isEmpty(activity.input) && !_.isEmpty(activity.rollback) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__["a" /* Details */], activity);
        break;
      case 'folder:destroy':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' deleted the folder ');
        break;
      case 'request:create':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' added the request ');
        break;
      case 'request:update':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head-content' },
            changesCount > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' made ', changesCount, ' ', pluralizedChangeText, ' to '),
            changesCount === 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' modified ')), 'the request');



        activityDetails = !_.isEmpty(activity.input) && !_.isEmpty(activity.rollback) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__["a" /* Details */], activity);
        break;
      case 'request:destroy':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' deleted the request ');
        break;
      case 'request:transfer':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' moved the request ');
        break;
      case 'response:create':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' created the example ');
        break;
      case 'response:update':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' modified the example ');
        break;
      case 'response:destroy':
        headingText = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' deleted the example ');
        break;
      default:null;}


    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-connect-line' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__["b" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__["e" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__["d" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__["i" /* Time */], { timestamp: activity.createdAt }),


                !_.isEmpty(activity.tags) &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'version-label-wrapper' },

                  !_.head(activity.tags).system &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                      className: 'activity-item-tagged_version__label is-tag',
                      title: _.head(activity.tags).apiVersion.name },

                    _.head(activity.tags).apiVersion.name),



                  currentLabel &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'activity-item-tagged_version__label' },
                    'CURRENT'))),






              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__["c" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__["j" /* User */], activity.user),
                headingText,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'activity-item-model' }, ' ', activity.model !== COLLECTION_ACTIVITY_MODEL && activity.instance.name, ' '),
                destination))),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item-details-wrapper' },
            activityDetails,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-item__action' },

              !_.isEmpty(activity.tags) && !_.head(activity.tags).system ?
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__["f" /* RemoveTag */], {
                tagId: _.head(activity.tags).id,
                revisionId: activity.id,
                onRemoveVersionTag: this.props.onRemoveVersionTag,
                isRemovingTag: this.props.isRemovingTag }) :


              // Purpose of conditional rendering of <TagVersion> component is to
              // disallow free users to create version tag on non-latest revision of
              // a collection. This flag `activity.allowedActions.versionTagCreate`
              // is sent by server. Added a safe check to ensure this doesn't break
              // the app.

              _.get(activity, 'allowedActions.versionTagCreate') &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__["h" /* TagVersion */], {
                revisionId: activity.id,
                onAddVersionTag: this.props.onAddVersionTag }),




              this.props.enableRestore &&
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ActivityItemComponents__["g" /* Restore */], {
                id: activity.id,
                isRestoring: this.props.isRestoring,
                rollback_from: meta.rollback_from,
                onRestore: this.props.onRestore }))))));







  }}) || _class;let


LoadFeed = class LoadFeed extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'activity-feed-loader': true,
      'initial-fetch-error-banner': this.props.error.type === 'initial',
      'load-more-error-banner': this.props.error.type === 'loadMore' });

  }

  handleClick(options) {
    this.props.onRetry && this.props.onRetry(options);
  }

  renderInitialErrorBanner() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-initial-fetch-error-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'initial-fetch-error-title' }, 'Couldn\'t load changelogs'),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'initial-fetch-error-subtitle' }, 'There was an unexpected error. Please try again.'),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Buttons__["a" /* Button */], {
            className: 'activity-feed-retry__btn',
            onClick: this.handleClick.bind(this, { initialRetry: true }),
            disabled: this.props.isLoading },


          this.props.isLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_LoadingIndicator__["a" /* default */], null) || 'Try again')));




  }

  renderLoadMoreErrorBanner() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'activity-feed-load-more-error-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'load-more-error-info' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'load-more-error-icon' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_WarningIcon__["a" /* default */], { size: 'sm' })),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'load-more-error-subtitle' }, 'Something went wrong while retrieving more changelogs. Try again.')),



        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Buttons__["a" /* Button */], {
            className: 'activity-feed-retry__btn',
            onClick: this.handleClick.bind(this, { loadMoreRetry: true }),
            disabled: this.props.isLoading }, 'Retry')));





  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },

        this.props.error && this.props.error.type === 'initial' && this.renderInitialErrorBanner() ||
        this.props.error && this.props.error.type === 'loadMore' && this.renderLoadMoreErrorBanner() ||
        this.props.isLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_LoadingIndicator__["a" /* default */], null)));



  }};



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVersionTagModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__external_navigation_ExternalNavigationService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Modals__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_dev_components_api_editor_common_ErrorHandler_ErrorHandler__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_services_ActivityFeedService__ = __webpack_require__(1639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_AppUrlConstants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api_dev_services_APIDevService__ = __webpack_require__(112);
var _class;













const CONTEXT_LIST = [
{ model: 'collection', type: 'documentation', name: 'Documentation' },
{ model: 'collection', type: 'testsuite', name: 'Test Suite' },
{ model: 'collection', type: 'integrationtest', name: 'Integration Test' },
{ model: 'collection', type: 'contracttest', name: 'Contract Test' }];let



AddVersionTagModal = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class AddVersionTagModal extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      items: null,
      selectedAPI: null,
      selectedAPIVersion: null,
      selectedAPIContext: '',
      isAPIVersionSelectEnable: false,
      isRequiredWarning: true,
      isModalLoading: false,
      isLoading: false,
      isOnlyOneAPI: false,
      modalOpenError: null };


    this.handleClose = this.handleClose.bind(this);
    this.handleAPISelect = this.handleAPISelect.bind(this);
    this.handleAPIVersionSelect = this.handleAPIVersionSelect.bind(this);
    this.handleAPIContextSelect = this.handleAPIContextSelect.bind(this);
    this.handleAddVersionTag = this.handleAddVersionTag.bind(this);
    this.handleActivityFeedTagsLearn = this.handleActivityFeedTagsLearn.bind(this);
  }

  componentDidMount() {
    let criteria = _.assign({}, {
      collectionUid: this.props.collectionUid });

    this.store = this.props.activityFeed;
    this.initialFetch(criteria);
  }

  getCustomStyles() {
    return {
      margin: 'auto',
      height: '384px',
      width: '350px' };

  }

  handleActivityFeedTagsLearn() {
    Object(__WEBPACK_IMPORTED_MODULE_3__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_11__constants_AppUrlConstants__["b" /* ACTIVITY_FEED_VERSION_TAGS */]);
  }

  handleClose() {
    this.props.onRequestClose && this.props.onRequestClose();
  }

  initialFetch(criteria) {
    this.setState({
      isModalLoading: true });


    __WEBPACK_IMPORTED_MODULE_9__modules_services_ActivityFeedService__["a" /* default */].fetchPossibleAPIVersions(criteria).
    then(entities => {
      this.setState({
        isModalLoading: false,
        items: entities },
      () => {
        this.state.items.length === 1 &&
        this.setState({
          selectedAPI: _.head(this.state.items),
          isAPIVersionSelectEnable: true,
          isOnlyOneAPI: true });

      });
    }).
    catch(error => {
      this.setState({
        isModalLoading: false,
        modalOpenError: error });

      pm.logger.warn(error);
    });
  }

  handleAPISelect(id) {
    this.setState({ isAPIVersionSelectEnable: true });
    let item = _.find(this.state.items, ['id', id]);

    !_.isUndefined(item) ?
    this.setState({ selectedAPI: item }) :
    this.setState({ selectedAPI: _.head(this.state.items) });
  }

  handleAPIVersionSelect(id) {
    let item = _.find(this.state.selectedAPI.versions, ['id', id]);

    this.setState({
      selectedAPIVersion: item,

      // if API and API context are selected, enable `Add version tag` button by setting `isRequiredWarning` state to `false`
      isRequiredWarning: this.state.selectedAPI && this.state.selectedAPIContext ? false : true });

  }

  handleAPIContextSelect(contextType) {
    let context = _.find(CONTEXT_LIST, ['type', contextType]);

    this.setState({
      selectedAPIContext: context,

      // if API and API version are selected, enable `Add version tag` button by setting `isRequiredWarning` state to `false`
      isRequiredWarning: this.state.selectedAPI && this.state.selectedAPIVersion ? false : true });

  }

  handleAddVersionTag() {
    // Bail out if API or API version or API context is not selected
    if (!this.state.selectedAPI || !this.state.selectedAPIVersion || !this.state.selectedAPIContext) {
      return;
    } else
    {
      this.setState({ isLoading: true });
      let criteria = {
        collectionUid: this.props.collectionUid,
        revisionId: this.props.revisionId,
        apiVersionId: this.state.selectedAPIVersion.id,
        relationType: this.state.selectedAPIContext.type };


      this.store.addVersionTag(criteria).
      then(() => {
        this.setState({ isLoading: false });

        // Add analytics event to track initial version tag create
        __WEBPACK_IMPORTED_MODULE_10__modules_services_AnalyticsService__["a" /* default */].addEventV2({
          category: 'collection',
          action: 'successful_version_tag_create',
          label: 'collection_changelog',
          entityId: this.props.collectionUid });


        this.handleClose();
      }).
      catch(() => {
        this.setState({ isLoading: false });
      });
    }
  }

  getModalContentClasses() {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'is-modal-loading': this.state.isModalLoading });

  }

  getDropdownHeadLabelClasses(showPlaceholderText) {
    return __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
      'dropdown-head-label': true,
      'placeholder-text': showPlaceholderText });

  }

  renderModalContent() {
    if (this.state.isModalLoading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_LoadingIndicator__["a" /* default */], null);
    }

    if (this.state.modalOpenError) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'version-tag-modal-error' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__api_dev_components_api_editor_common_ErrorHandler_ErrorHandler__["a" /* default */], {
          title: 'Something went wrong',
          description: 'There was a problem adding a version tag to this collection. Please try again after some time.' }));


    }

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'version-tag__modal-content-heading' }, 'Link this collection revision to a specific API version.',

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
              className: 'btn btn-text version-tag__learn-btn-text',
              onClick: this.handleActivityFeedTagsLearn }, 'Learn More')),




        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'version-tag__modal-content-dropdown' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-select__dropdown' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-label' }, 'Select API'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["a" /* Dropdown */], { onSelect: this.handleAPISelect },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["b" /* DropdownButton */], { type: 'secondary', size: 'small' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                    className: 'dropdown-head',
                    disabled: this.state.isOnlyOneAPI },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: this.getDropdownHeadLabelClasses(!this.state.selectedAPI) },
                    this.state.selectedAPI && this.state.selectedAPI.name || 'Select an API'))),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["c" /* DropdownMenu */], {
                  className: 'dropdown-menu',
                  fluid: true },


                !_.isEmpty(this.state.items) ?
                this.state.items.map(menuItem => {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["d" /* MenuItem */], { key: menuItem.id, refKey: menuItem.id }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, menuItem.name));
                }) :
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["d" /* MenuItem */], { disabled: true }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'There are no APIs in this workspace'))))),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-version-select__dropdown' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-label' }, 'Select version'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["a" /* Dropdown */], {
                onSelect: this.handleAPIVersionSelect },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["b" /* DropdownButton */], { type: 'secondary', size: 'small' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                    className: 'dropdown-head',
                    disabled: !this.state.isAPIVersionSelectEnable },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: this.getDropdownHeadLabelClasses(!this.state.selectedAPIVersion) },
                    this.state.selectedAPIVersion && this.state.selectedAPIVersion.name || 'Select a version'))),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["c" /* DropdownMenu */], {
                  className: 'dropdown-menu-list',
                  fluid: true },


                this.state.selectedAPI &&
                !_.isEmpty(this.state.selectedAPI.versions) ?
                this.state.selectedAPI.versions.map(menuItem => {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["d" /* MenuItem */], { key: menuItem.id, refKey: menuItem.id }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, menuItem.name));
                }) :
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["d" /* MenuItem */], { disabled: true }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'There are no API versions to tag this collection.'))))),




          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'api-relation-select__dropdown' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-label' }, 'Add to API as'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["a" /* Dropdown */], {
                onSelect: this.handleAPIContextSelect },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["b" /* DropdownButton */], { type: 'secondary', size: 'small' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
                    className: 'dropdown-head',
                    disabled: !this.state.isAPIVersionSelectEnable },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: this.getDropdownHeadLabelClasses(!this.state.selectedAPIContext) },
                    this.state.selectedAPIContext.name || 'Add this to your API as'))),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["c" /* DropdownMenu */], {
                  className: 'dropdown-menu-list',
                  fluid: true },


                CONTEXT_LIST.map(menuItem => {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Dropdowns__["d" /* MenuItem */], { key: menuItem.type, refKey: menuItem.type }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, menuItem.name));
                }))))),





        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'version-tag__modal-content-action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
              type: 'secondary',
              onClick: this.props.onRequestClose,
              className: 'modal-cancel-btn' }, 'Cancel'),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Buttons__["a" /* Button */], {
              type: 'primary',
              onClick: this.handleAddVersionTag,
              className: 'modal-version-tag-btn',
              disabled: this.state.isRequiredWarning || this.state.isLoading,
              tooltip: 'To add a version tag, select an API version and what you want to add the collection as.' },


            this.state.isLoading ?
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_LoadingIndicator__["a" /* default */], null) :
            'Add Version Tag'))));




  }

  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Modals__["a" /* Modal */], {
          className: 'version-tag-modal',
          isOpen: this.props.isOpen,
          onRequestClose: this.props.onRequestClose,
          customStyles: this.getCustomStyles() },

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Modals__["d" /* ModalHeader */], null, ' Add a version tag '),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Modals__["b" /* ModalContent */], { className: this.getModalContentClasses() },
          this.renderModalContent())));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserCollectionAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Icons_MoreIcon__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Icons_CopyIcon__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Icons_DownloadIcon__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_Icons_MockIcon__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Icons_CloseIcon__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_Icons_EditIcon__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_Icons_ForkIcon__ = __webpack_require__(1565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_Icons_MergeIcon__ = __webpack_require__(4207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_Icons_LockedIcon__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__base_Icons_NewFolderIcon__ = __webpack_require__(3830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__base_Icons_MonitorIcon__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__base_Icons_PublishIcon__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__base_Icons_DeleteIcon__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__base_Icons_RequestIcon__ = __webpack_require__(1556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__models_services_DocumenterService__ = __webpack_require__(3727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modules_services_APIService__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__ = __webpack_require__(3622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__base_XPaths_XPath__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__constants_MoreButtonTooltipConstant__ = __webpack_require__(282);
var _class;

























let


CollectionBrowserCollectionAction = Object(__WEBPACK_IMPORTED_MODULE_23_mobx_react__["b" /* observer */])(_class = class CollectionBrowserCollectionAction extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    __WEBPACK_IMPORTED_MODULE_18__models_services_DocumenterService__["a" /* default */].getDocumentationURL(_.get(this.props, 'collection.id'), (e, documentUrl) => {
      if (e) {
        return;
      }
      __WEBPACK_IMPORTED_MODULE_21__modules_services_AnalyticsService__["a" /* default */].addEvent('documentation', 'view', 'collection_browser');

      if (_.has(this.props, 'collection.id') && !_.isEmpty(this.props.collection.id)) {
        __WEBPACK_IMPORTED_MODULE_21__modules_services_AnalyticsService__["a" /* default */].addEventV2({
          category: 'documentation',
          action: 'view_private',
          label: 'collection_browser',
          entityType: 'collection',
          entityId: `${Object(__WEBPACK_IMPORTED_MODULE_20__stores_get_store__["getStore"])('CurrentUserStore').id}-${_.get(this.props, 'collection.id')}` });

      }

      Object(__WEBPACK_IMPORTED_MODULE_19__modules_services_APIService__["u" /* openAuthenticatedRoute */])(documentUrl);
    });
  }

  handleSelect(action) {
    this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], this.props.collection.id, action);
  }

  handleToggle(value) {
    if (value === this.state.dropdownOpen) {
      return;
    }

    this.setState({ dropdownOpen: value });
  }

  getActions() {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_20__stores_get_store__["getStore"])('PermissionStore'),
    currentUser = Object(__WEBPACK_IMPORTED_MODULE_20__stores_get_store__["getStore"])('CurrentUserStore'),
    collectionId = this.props.collection.id,
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_20__stores_get_store__["getStore"])('ActiveWorkspaceStore').id,
    isShared = _.get(this.props.collection, 'isShared', false),
    isForked = _.get(this.props.collection, 'isForked', false);

    return [
    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */],
      label: 'Edit',
      shortcut: 'edit',
      isEnabled: permissionStore.can('edit', 'collection', collectionId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__base_Icons_EditIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["p" /* ACTION_TYPE_FORK */],
      label: 'Create a fork',
      isEnabled: true,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__base_Icons_ForkIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["p" /* ACTION_TYPE_FORK */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_MERGE */],
      label: 'Merge changes',
      isEnabled: isForked,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__base_Icons_MergeIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["q" /* ACTION_TYPE_MERGE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["b" /* ACTION_MANAGE_ROLES */],
      label: 'Manage Roles',
      isEnabled: !!currentUser.team, // Enable it if the user belongs to a team
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__base_Icons_LockedIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["b" /* ACTION_MANAGE_ROLES */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */],
      label: 'Add Request',
      isEnabled: permissionStore.can('addRequest', 'collection', collectionId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_Icons_RequestIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */],
      label: 'Add Folder',
      isEnabled: permissionStore.can('addFolder', 'collection', collectionId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__base_Icons_NewFolderIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */],
      label: 'Duplicate',
      shortcut: 'duplicate',
      isEnabled: permissionStore.can('addCollection', 'workspace', workspaceId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Icons_CopyIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DOWNLOAD */],
      label: 'Export',
      isEnabled: true,
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__base_Icons_DownloadIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DOWNLOAD */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */],
      label: 'Monitor Collection',
      isEnabled: permissionStore.can('addMonitor', 'collection', collectionId) && permissionStore.can('addMonitor', 'workspace', workspaceId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__base_Icons_MonitorIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */],
      label: 'Mock Collection',
      isEnabled: permissionStore.can('addMock', 'collection', collectionId) && permissionStore.can('addMock', 'workspace', workspaceId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__base_Icons_MockIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_PUBLISH_DOCS */],
      label: 'Publish Docs',
      isEnabled: permissionStore.can('publish', 'collection', collectionId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__base_Icons_PublishIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["t" /* ACTION_TYPE_PUBLISH_DOCS */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */],
      label: 'Remove from workspace',
      isEnabled: permissionStore.can('removeCollection', 'workspace', workspaceId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__base_Icons_CloseIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */],
      label: 'Delete',
      shortcut: 'delete',
      isEnabled: permissionStore.can('delete', 'collection', collectionId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__base_Icons_DeleteIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]) }) }];


  }

  getMenuItemIconClasses(label) {
    return __WEBPACK_IMPORTED_MODULE_17_classnames___default()({ 'dropdown-menu-item-icon': true }, 'collection-browser-collection-' + label + '-icon');
  }

  getActionIconClassNames(label) {
    return __WEBPACK_IMPORTED_MODULE_17_classnames___default()({ ['collection-browser-collection-' + label + '-icon']: true });
  }

  getMenuItemClasses(isPro) {
    return __WEBPACK_IMPORTED_MODULE_17_classnames___default()({ 'dropdown-menu-item--pro-disabled': isPro });
  }

  getDisabledText(isDisabled, actionType) {
    if (isDisabled) {
      let defaultMessage = 'You do not have permissions to perform this action.',
      manageRolesMessage = 'You need to be signed-in to a team to perform this action';

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

          action.icon,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label),

          modifierLabel &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-modifier' }, modifierLabel)));



    }).value();
  }

  render() {

    let collection = this.props.collection;

    if (!collection || !collection.id) {
      return null;
    }

    let permissionStore = Object(__WEBPACK_IMPORTED_MODULE_20__stores_get_store__["getStore"])('PermissionStore'),
    currentUser = Object(__WEBPACK_IMPORTED_MODULE_20__stores_get_store__["getStore"])('CurrentUserStore'),
    gatekeeperStore = Object(__WEBPACK_IMPORTED_MODULE_20__stores_get_store__["getStore"])('GateKeeperStore'),
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_20__stores_get_store__["getStore"])('ActiveWorkspaceStore').id,
    canShare = permissionStore.can('share', 'collection', collection.id),
    canRunCollection = permissionStore.can('addCollectionrun', 'workspace', workspaceId),
    shareButtonTooltip = canShare ? null : 'You do not have permissions to perform this action.',
    runButtonTooltip = canRunCollection ? null : 'You do not have permissions to perform this action.',
    isLoggedIn = currentUser && currentUser.isLoggedIn,
    isSyncEnabled = gatekeeperStore.isSyncEnabled,
    menuItems = this.getMenuItems();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-actions-wrapper' },

          !collection.subscribed &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__base_XPaths_XPath__["a" /* default */], { identifier: 'share' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'collection-browser-collection-action-share-button',
                size: 'small',
                type: 'primary',
                disabled: !canShare,
                tooltip: shareButtonTooltip,
                onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], collection.id, __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["y" /* ACTION_TYPE_SHARE */]) }, 'Share')),





          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__base_XPaths_XPath__["a" /* default */], { identifier: 'run' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'collection-browser-collection-action-run-button',
                size: 'small',
                type: 'primary',
                disabled: !canRunCollection,
                tooltip: runButtonTooltip,
                onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["d" /* ACTION_TARGET_COLLECTION */], collection.id, __WEBPACK_IMPORTED_MODULE_22__constants_CollectionActionsConstants__["w" /* ACTION_TYPE_RUN */]) }, 'Run')),





          isLoggedIn && isSyncEnabled &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__base_XPaths_XPath__["a" /* default */], { identifier: 'viewInWeb' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                className: 'collection-browser-collection-action-view-documentation-button',
                size: 'small',
                type: 'secondary',
                onClick: this.handleViewDocumentation }, 'View in web')),





          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["a" /* Dropdown */], {
              onSelect: this.handleSelect,
              onToggle: this.handleToggle,
              className: 'collection-browser-actions-dropdown' },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["b" /* DropdownButton */], {
                dropdownStyle: 'nocaret',
                type: 'custom' },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], { tooltip: __WEBPACK_IMPORTED_MODULE_25__constants_MoreButtonTooltipConstant__["a" /* ACTION_TYPE_VIEW_MORE_ACTIONS_TOOLTIP */], className: 'collection-browser-collection-dropdown-actions-button-wrapper' }, ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__base_Icons_MoreIcon__["a" /* default */], { className: 'collection-browser-collection-dropdown-actions-button' }))),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], {
                'align-right': true },

              menuItems)))));





  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RemoteSyncRequestService__ = __webpack_require__(202);


let CollectionBrowserService = {
  fetchLinkedApiName(uid) {
    if (!uid) {
      pm.logger.warn('CollectionBrowserService~fetchLinkedApiName: Collection Uid is a mandatory parameter');
      return Promise.reject();
    }

    let url = `/collections/${uid}/api`;

    return __WEBPACK_IMPORTED_MODULE_0__RemoteSyncRequestService__["a" /* default */].request(url, {
      method: 'get' }).

    then(({ body }) => {
      return Promise.resolve(body.data);
    }).
    catch(error => {
      pm.logger.warn('CollectionBrowserService~fetchLinkedApiName: Failed to fetch api linked to the collection', error);
      return Promise.reject(error);
    });
  } };


/* harmony default export */ __webpack_exports__["a"] = (CollectionBrowserService);

/***/ }),

/***/ 5030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionBrowserFolderDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_InlineEditor__ = __webpack_require__(1015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CollectionBrowserRequestListItem__ = __webpack_require__(4213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CollectionBrowserFolderListItem__ = __webpack_require__(4211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_Breadcrumb__ = __webpack_require__(1612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_Icons_EditIcon__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_Icons_NewFolderIcon__ = __webpack_require__(3830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_base_Icons_DeleteIcon__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_base_Icons_CopyIcon__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_base_Icons_CloseIcon__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__base_Icons_RequestIcon__ = __webpack_require__(1556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__base_Icons_MoreIcon__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__ = __webpack_require__(3622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__constants_MoreButtonTooltipConstant__ = __webpack_require__(282);
var _class;


















let


CollectionBrowserFolderDetails = Object(__WEBPACK_IMPORTED_MODULE_8_mobx_react__["b" /* observer */])(_class = class CollectionBrowserFolderDetails extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
    this.toggleCollectionView = this.toggleCollectionView.bind(this);
    this.handleActionTrigger = this.handleActionTrigger.bind(this);
    this.handleFolderSelect = this.handleFolderSelect.bind(this);
    this.handleFolderDescriptionUpdate = this.handleFolderDescriptionUpdate.bind(this);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  toggleCollectionView() {
    this.props.onCollectionDetailsNavigate && this.props.onCollectionDetailsNavigate();
  }

  handleActionTrigger(entity, entityId, action, data) {
    this.props.onActionTriggered && this.props.onActionTriggered(entity, entityId, action, data);
  }

  getCollectionHeaderClasses() {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({
      'collection-browser-folder-details-header': true,
      'collection-browser-folder-details-header--padded-below': _.isEmpty(_.get(this.props.folder, 'description')) && !Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["getStore"])('PermissionStore').can('edit', 'collection', this.props.collection.id) });

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
      this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], this.props.folder.id,
      __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["l" /* ACTION_TYPE_DESCRIPTION_UPDATE */], this.state.description);
    });
  }

  handleFolderSelect(folder) {
    this.props.onFolderSelect && this.props.onFolderSelect(folder);
  }

  handleSelect(action) {
    this.props.onActionTriggered && this.props.onActionTriggered(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], this.props.folder.id, action);
  }

  handleToggle(value) {
    if (value === this.state.dropdownOpen) {
      return;
    }

    this.setState({ dropdownOpen: value });
  }

  getActions() {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["getStore"])('PermissionStore'),
    folderId = this.props.folder.id;
    return [
    {
      type: __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */],
      label: 'Edit',
      shortcut: 'edit',
      isEnabled: permissionStore.can('edit', 'folder', folderId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Icons_EditIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["o" /* ACTION_TYPE_EDIT */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */],
      label: 'Add Request',
      isEnabled: permissionStore.can('addRequest', 'folder', folderId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__base_Icons_RequestIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["j" /* ACTION_TYPE_ADD_REQUEST */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */],
      label: 'Add Folder',
      isEnabled: permissionStore.can('addFolder', 'folder', folderId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_Icons_NewFolderIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["g" /* ACTION_TYPE_ADD_FOLDER */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */],
      label: 'Duplicate',
      shortcut: 'duplicate',
      isEnabled: permissionStore.can('duplicate', 'folder', folderId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_base_Icons_CopyIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */]) }) },

    {
      type: __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */],
      label: 'Delete',
      shortcut: 'delete',
      isEnabled: permissionStore.can('delete', 'folder', folderId),
      icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_Icons_DeleteIcon__["a" /* default */], { className: this.getMenuItemIconClasses(__WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */]) }) }];


  }

  getMenuItemIconClasses(label) {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ 'dropdown-menu-item-icon': true }, `collection-browser-collection-${label}-icon`);
  }

  getActionIconClassNames(label) {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ [`collection-browser-collection-${label}-icon`]: true });
  }

  getMenuItemClasses(isPro) {
    return __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ 'dropdown-menu-item--pro-disabled': isPro });
  }

  getDisabledText(isDisabled) {
    if (isDisabled) {
      return 'You do not have permissions to perform this action.';
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
            disabledText: this.getDisabledText(!action.isEnabled) },

          action.icon,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label),

          modifierLabel &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-modifier' }, modifierLabel)));



    }).value();
  }

  render() {
    let { collection, folder } = this.props;

    if (!folder || !folder.id) {
      return null;
    }

    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_9__stores_get_store__["getStore"])('PermissionStore'),
    canEditFolder = permissionStore.can('edit', 'folder', folder.id),
    canAddRequestToFolder = permissionStore.can('addRequest', 'folder', folder.id);

    let ownFolders = _.get(folder, 'ownFolders', []),
    ownRequests = _.get(folder, 'ownRequests', []),
    folderPath = folder.path,
    menuItems = this.getMenuItems();

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.props.className },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-details-wrapper' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getCollectionHeaderClasses() },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_Breadcrumb__["a" /* default */], {
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
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_base_Icons_CloseIcon__["a" /* default */], {
                className: 'collection-browser-header-close-icon',
                onClick: this.props.onClose }))),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_InlineEditor__["a" /* default */], {
            className: 'collection-browser-folder-description-wrapper',
            editable: canEditFolder,
            placeholder: 'Make things easier for your teammates with a complete request description.',
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
                onClick: this.handleActionTrigger.bind(this, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["e" /* ACTION_TARGET_FOLDER */], folder.id, __WEBPACK_IMPORTED_MODULE_17__constants_CollectionActionsConstants__["w" /* ACTION_TYPE_RUN */]) }, 'Run'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["a" /* Dropdown */], {
                onSelect: this.handleSelect,
                onToggle: this.handleToggle,
                className: 'collection-browser-actions-dropdown-folder' },

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["b" /* DropdownButton */], {
                  dropdownStyle: 'nocaret',
                  type: 'custom' },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], { tooltip: __WEBPACK_IMPORTED_MODULE_18__constants_MoreButtonTooltipConstant__["a" /* ACTION_TYPE_VIEW_MORE_ACTIONS_TOOLTIP */], className: 'collection-browser-collection-dropdown-actions-button-wrapper' }, ' ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__base_Icons_MoreIcon__["a" /* default */], { className: 'collection-browser-collection-dropdown-actions-button' }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__base_Dropdowns__["c" /* DropdownMenu */], {
                  'align-left': true },

                menuItems))),



          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider' })),

        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-folder-list-wrapper' },

          _.isEmpty(ownRequests) && _.isEmpty(ownFolders) ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-browser-empty-folder' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collection-sidebar-list-item__body--empty' }, 'This folder is empty.\xA0',

              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], {
                    type: 'text',
                    onClick: () => this.props.onAddRequest(this.props.folder),
                    disabled: !canAddRequestToFolder,
                    tooltip: this.getDisabledText(!canAddRequestToFolder) }, 'Add requests'), 'to this folder and create subfolders to organize them'))) :








          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,

            _.map(ownFolders, folder => {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__CollectionBrowserFolderListItem__["a" /* default */], {
                  folder: folder,
                  key: folder.id,
                  onActionTriggered: this.handleActionTrigger,
                  onFolderSelect: this.handleFolderSelect }));


            }),


            _.map(ownRequests, request => {
              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CollectionBrowserRequestListItem__["a" /* default */], {
                  request: request,
                  browserWidth: this.props.browserWidth,
                  isOpen: this.props.isOpen,
                  key: request.id,
                  onActionTriggered: this.handleActionTrigger,
                  browserWidth: this.props.browserWidth }));


            }))),





        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'divider' })));


  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })

});