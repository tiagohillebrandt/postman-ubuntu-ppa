webpackJsonp([12],{

/***/ 1687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceBrowserFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Inputs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_LibrarySortTypeConstants__ = __webpack_require__(1797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_LibrarySortTypeLabelMap__ = __webpack_require__(2565);








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

/***/ 1797:
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

/***/ 2563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkspaceBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_MoreIcon__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__WorkspaceBrowserItems_WorkspaceCollectionsBrowser__ = __webpack_require__(2564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WorkspaceBrowserItems_WorkspaceEnvironmentsBrowser__ = __webpack_require__(2566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WorkspaceBrowserItems_WorkspaceMonitorsBrowser__ = __webpack_require__(2568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WorkspaceBrowserItems_WorkspaceMocksBrowser__ = __webpack_require__(2570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__WorkspaceBrowserItems_WorkspaceHistoryBrowser__ = __webpack_require__(2572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__WorkspaceBrowserItems_WorkspaceIntegrationsBrowser__ = __webpack_require__(2575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__WorkspaceBrowserItems_WorkspaceActivityBrowser__ = __webpack_require__(2577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_pipelines_user_action__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_services_AnalyticsService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_model_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__WorkspaceBrowserItems_WorkspaceOfflineView__ = __webpack_require__(2580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_workspaces_WorkspaceActionDropdown__ = __webpack_require__(691);
var _class;



















let


WorkspaceBrowser = Object(__WEBPACK_IMPORTED_MODULE_12_mobx_react__["a" /* observer */])(_class = class WorkspaceBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'collections',
      isOffline: false };


    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.handleWorkspaceAction = this.handleWorkspaceAction.bind(this);
    this.handleSyncStatusChange = this.handleSyncStatusChange.bind(this);
  }

  componentWillMount() {
    pm.syncManager.on('change:currentSyncStatus', this.handleSyncStatusChange);
    this.handleSyncStatusChange();
  }

  componentDidUpdate() {
    if (Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').isSwitching) {
      Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').resetLifecycle(Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').workspace);
    }
  }

  componentWillUnmount() {
    pm.syncManager.off('change:currentSyncStatus', this.handleSyncStatusChange);
  }

  handleSyncStatusChange() {
    let currentSyncStatus = pm.syncManager.get('currentSyncStatus');

    this.setState({ isOffline: !_.includes(['syncFinished', 'syncStarting'], currentSyncStatus) });
  }

  handleTabSelect(tab) {
    this.setState({ activeTab: tab });
    __WEBPACK_IMPORTED_MODULE_14__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'browse', tab);
  }

  handleWorkspaceAction(action) {
    let workspaceId = Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id;
    switch (action) {
      case 'add_dependencies':
        __WEBPACK_IMPORTED_MODULE_14__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'initiate_add_to_ws', 'browse');
        pm.mediator.trigger('openBulkAddToWorkspaceModal', workspaceId);
        break;

      case 'details':
        __WEBPACK_IMPORTED_MODULE_14__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'view_details');
        pm.mediator.trigger('openWorkspaceDetailsModal', Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore'));
        break;

      case 'join':
        let joinWorkspaceEvent = Object(__WEBPACK_IMPORTED_MODULE_15__modules_model_event__["a" /* createEvent */])('join', 'workspace', { model: 'workspace', workspace: { id: workspaceId } });

        Object(__WEBPACK_IMPORTED_MODULE_13__modules_pipelines_user_action__["a" /* default */])(joinWorkspaceEvent).
        then(() => {
          Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').switch(workspaceId);
        }).
        catch(e => {
          Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').resetLifecycle(workspaceId);
        });
        break;}

  }

  render() {
    if (this.state.isOffline) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser__container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__WorkspaceBrowserItems_WorkspaceOfflineView__["a" /* default */], null)));


    }

    let isJoining = Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('WorkspaceLifecycleStore').isJoining(Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id);
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser__container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser__tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["b" /* Tabs */], {
              type: 'primary',
              defaultActive: 'collections',
              activeRef: this.state.activeTab,
              onChange: this.handleTabSelect },

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'collections' }, 'Collections'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'environments', className: 'requester-library-tab--collections' }, 'Environments'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'monitors', className: 'requester-library-tab--environments' }, 'Monitors'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'mocks', className: 'requester-library-tab--environments' }, 'Mocks'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'integrations', className: 'requester-library-tab--environments' }, 'Integrations'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'activity', className: 'requester-library-tab--environments' }, 'Activity'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__["a" /* Tab */], { refKey: 'history', className: 'requester-library-tab--history' }, 'History')),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser__tabs__actions' },

            !Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').isMember &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                type: 'primary',
                size: 'small',
                disabled: isJoining || Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isLoading,
                onClick: this.handleWorkspaceAction.bind(this, 'join'),
                className: 'join__button' },


              isJoining ?
              'Joining' :
              'Join'),




            !Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').isMember &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                type: 'secondary',
                size: 'small',
                onClick: this.handleWorkspaceAction.bind(this, 'details'),
                className: 'details__button' }, 'Workspace details'),





            Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').isMember &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                type: 'secondary',
                size: 'small',
                className: 'options__button',
                onClick: this.handleWorkspaceAction.bind(this, 'add_dependencies') }, 'Add to workspace'),





            Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveWorkspaceStore').isMember &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__components_workspaces_WorkspaceActionDropdown__["a" /* default */], {
              workspaceId: Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id,
              tooltipPlacement: 'left' }))),





        this.state.activeTab === 'collections' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__WorkspaceBrowserItems_WorkspaceCollectionsBrowser__["a" /* WorkspaceCollectionsBrowser */], {
          collections: Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').collections,
          archivedCollections: Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').archivedCollections }),



        this.state.activeTab === 'environments' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__WorkspaceBrowserItems_WorkspaceEnvironmentsBrowser__["a" /* WorkspaceEnvironmentsBrowser */], {
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'monitors' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__WorkspaceBrowserItems_WorkspaceMonitorsBrowser__["a" /* WorkspaceMonitorsBrowser */], {
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'mocks' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__WorkspaceBrowserItems_WorkspaceMocksBrowser__["a" /* WorkspaceMocksBrowser */], {
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'integrations' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__WorkspaceBrowserItems_WorkspaceIntegrationsBrowser__["a" /* WorkspaceIntegrationsBrowser */], {
          integrations: Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').integrations }),



        this.state.activeTab === 'activity' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__WorkspaceBrowserItems_WorkspaceActivityBrowser__["a" /* WorkspaceActivityBrowser */], {
          isSignedIn: Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('CurrentUserStore').isLoggedIn,
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'history' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__WorkspaceBrowserItems_WorkspaceHistoryBrowser__["a" /* WorkspaceHistoryBrowser */], {
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_16__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id })));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceCollectionsBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(1687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_archivedResource_ArchivedResource__ = __webpack_require__(1747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_MoreIcon__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Icons_ShareIcon__ = __webpack_require__(1743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_empty_states_CollectionsEmpty__ = __webpack_require__(1755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_empty_states_NoResultFound__ = __webpack_require__(1673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__ = __webpack_require__(1632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_CollectionActionsUtil__ = __webpack_require__(1781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_uid_helper__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_LibrarySortTypeConstants__ = __webpack_require__(1797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_base_LoadingIndicator__ = __webpack_require__(1629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_base_InlineEditor__ = __webpack_require__(1700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__models_services_DashboardService__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_services_AnalyticsService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_collections_CollectionMetaIcons__ = __webpack_require__(674);
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
        return collection => new __WEBPACK_IMPORTED_MODULE_9_moment___default.a(collection.updatedAt);

      case __WEBPACK_IMPORTED_MODULE_14__constants_LibrarySortTypeConstants__["a" /* LIBRARY_SORT_TYPE_DATE_CREATED */]:
        return collection => new __WEBPACK_IMPORTED_MODULE_9_moment___default.a(collection.createdAt);

      case __WEBPACK_IMPORTED_MODULE_14__constants_LibrarySortTypeConstants__["d" /* LIBRARY_SORT_TYPE_OWNER */]:
        return collection => _.toLower(__WEBPACK_IMPORTED_MODULE_16__utils_util__["a" /* default */].getUserNameForId(collection.owner.id, Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('CurrentUserStore')));}

  }

  handleAction(collection, action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember) {
      pm.mediator.trigger('joinWorkspace');
      return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_12__utils_CollectionActionsUtil__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_13__utils_uid_helper__["a" /* decomposeUID */])(collection.id).modelId, action, {}, { origin: 'browse' });
  }

  handleShare(collection) {
    pm.mediator.trigger('openAddToWorkspaceModal', collection.id, 'collection', { origin: 'browse' });
  }

  getActions(collection) {
    const { isEditable, isDeletable, shared } = collection;

    return [
    {
      type: __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["b" /* ACTION_MODIFY_PERMISSIONS */],
      label: 'Modify permissions',
      isEnabled: isDeletable && shared },

    {
      type: __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["n" /* ACTION_TYPE_DUPLICATE */],
      label: 'Duplicate',
      isEnabled: true },

    {
      type: __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["m" /* ACTION_TYPE_DOWNLOAD */],
      label: 'Export',
      isEnabled: true },

    {
      type: __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["i" /* ACTION_TYPE_ADD_MONITOR */],
      label: 'Monitor Collection',
      isEnabled: isEditable },

    {
      type: __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["h" /* ACTION_TYPE_ADD_MOCK */],
      label: 'Mock Collection',
      isEnabled: true },

    {
      type: __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["r" /* ACTION_TYPE_PUBLISH_DOCS */],
      label: 'Publish Docs',
      isEnabled: isEditable },

    {
      type: __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["c" /* ACTION_REMOVE_FROM_WORKSPACE */],
      label: 'Remove from workspace',
      isEnabled: true },

    {
      type: __WEBPACK_IMPORTED_MODULE_10__constants_CollectionActionsConstants__["k" /* ACTION_TYPE_DELETE */],
      label: 'Delete',
      isEnabled: isDeletable }];


  }

  getMenuItems(collection) {
    return _.chain(this.getActions(collection)) // eslint-disable-line
    .filter('isEnabled').
    map(action => {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Dropdowns__["d" /* MenuItem */], {
            key: action.type,
            refKey: action.type },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label)));


    }).value();
  }

  handleCollectionClick(collectionId) {
    __WEBPACK_IMPORTED_MODULE_20__modules_services_AnalyticsService__["a" /* default */].addEvent('documentation', 'view', 'browse');
    Object(__WEBPACK_IMPORTED_MODULE_19__models_services_DashboardService__["j" /* openEntity */])('collections', collectionId, Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id);
  }

  handleRefresh() {
    let workspaceId = Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id;
    Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').fetchWorkspace(workspaceId);
  }

  render() {
    let collections = this.getFilteredCollections(),
    archivedResources = {
      archivedCollectionsCount: this.props.archivedCollections && this.props.archivedCollections.length || 0 };

    if (Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isLoading) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_base_LoadingIndicator__["a" /* default */], null));

    }
    if (_.isEmpty(this.props.collections)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container collections empty' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_empty_states_CollectionsEmpty__["a" /* default */], {
              isMember: Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').isMember,
              workspaceId: Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id })),


          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_archivedResource_ArchivedResource__["a" /* default */], {
            archivedResources: archivedResources,
            label: 'COLLECTIONS',
            showWarning: true,
            onClick: __WEBPACK_IMPORTED_MODULE_19__models_services_DashboardService__["f" /* openArchivedCollections */] })));



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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_empty_states_NoResultFound__["a" /* default */], null),


          _.map(collections, collection => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: collection.id, className: 'collections__list__item' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections__item__header' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections__item__label__wrapper' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections__item__label' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                          type: 'text',
                          className: 'collection-name',
                          onClick: this.handleCollectionClick.bind(this, collection.id) },

                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, collection.name),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__components_collections_CollectionMetaIcons__["a" /* default */], { collection: collection }))),


                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections__item__owner' },
                      __WEBPACK_IMPORTED_MODULE_16__utils_util__["a" /* default */].getUserNameForId(collection.owner.id, Object(__WEBPACK_IMPORTED_MODULE_11__stores_get_store__["a" /* getStore */])('CurrentUserStore')))),


                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entities__item__action_wrapper' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                        onClick: this.handleShare.bind(this, collection),
                        type: 'secondary',
                        size: 'small' },

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_base_Icons_ShareIcon__["a" /* default */], { className: 'share-icon' }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Share')),

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Dropdowns__["a" /* Dropdown */], {
                        className: 'entities_item__action__dropdown',
                        onSelect: this.handleAction.bind(this, collection) },

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Dropdowns__["b" /* DropdownButton */], {
                          dropdownStyle: 'nocaret',
                          type: 'custom' },

                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], null,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Icons_MoreIcon__["a" /* default */], { className: 'entities_item__action__dropdown-btn' }))),


                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_base_Dropdowns__["c" /* DropdownMenu */], {
                          'align-right': true,
                          dropup: 'auto' },

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
          onClick: __WEBPACK_IMPORTED_MODULE_19__models_services_DashboardService__["f" /* openArchivedCollections */] })));



  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__ = __webpack_require__(1797);



const sortTypeLabelMap = {};

sortTypeLabelMap[__WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__["c" /* LIBRARY_SORT_TYPE_NAME */]] = 'Name';
sortTypeLabelMap[__WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__["b" /* LIBRARY_SORT_TYPE_LAST_MODIFIED */]] = 'Last Modified';
sortTypeLabelMap[__WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__["d" /* LIBRARY_SORT_TYPE_OWNER */]] = 'Owner';
sortTypeLabelMap[__WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__["a" /* LIBRARY_SORT_TYPE_DATE_CREATED */]] = 'Date Created';

/* harmony default export */ __webpack_exports__["a"] = (sortTypeLabelMap);

/***/ }),

/***/ 2566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceEnvironmentsBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Icons_MoreIcon__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_ShareIcon__ = __webpack_require__(1743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(1687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_empty_states_EnvironmentsEmpty__ = __webpack_require__(2567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_uid_helper__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_EnvironmentActionUtil__ = __webpack_require__(1920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_LoadingIndicator__ = __webpack_require__(1629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_empty_states_NoResultFound__ = __webpack_require__(1673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_services_DashboardService__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_services_AnalyticsService__ = __webpack_require__(22);
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
    pm.mediator.trigger('openAddToWorkspaceModal', environment.id, 'environment', { origin: 'browse' });
  }

  getActions(environment) {
    return [
    {
      type: 'duplicate',
      label: 'Duplicate',
      isEnabled: true },

    {
      type: 'download',
      label: 'Export',
      isEnabled: true },

    {
      type: 'remove-from-workspace',
      label: 'Remove from workspace',
      isEnabled: true },

    {
      type: 'delete',
      label: 'Delete',
      isEnabled: _.get(environment, 'isDeletable') }];


  }

  getMenuItems(environment) {
    return _.chain(this.getActions(environment)) // eslint-disable-line
    .filter('isEnabled').
    map(action => {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__["d" /* MenuItem */], {
            key: action.type,
            refKey: action.type },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label)));


    }).value();
  }

  handleEnvironmentClick(environmentId) {
    __WEBPACK_IMPORTED_MODULE_15__modules_services_AnalyticsService__["a" /* default */].addEvent('environment', 'view_in_web', 'browse');
    Object(__WEBPACK_IMPORTED_MODULE_14__models_services_DashboardService__["j" /* openEntity */])('environments', environmentId, this.props.workspaceId);
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
                        'align-right': true,
                        dropup: 'auto' },

                      this.getMenuItems(environment))))));





          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentsEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_ManageEnvironmentViews__ = __webpack_require__(1666);



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
    url && pm.app.openExternalLink(url);
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
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["n" /* ENVIRONMENT_DOCS */]) }, 'Environments'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' give you the ability to customize requests using '),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'text',
              className: 'learn-more-link',
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["X" /* VARIABLE_DOCS */]) }, 'variables'),

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

/***/ 2568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceMonitorsBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(1687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_MoreIcon__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_empty_states_MonitorsEmpty__ = __webpack_require__(2569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_MonitorController__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_LoadingIndicator__ = __webpack_require__(1629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_empty_states_NoResultFound__ = __webpack_require__(1673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_services_DashboardService__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__ = __webpack_require__(22);
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

  getActions() {
    return [
    {
      type: 'delete',
      label: 'Delete',
      isEnabled: true }];


  }

  getMenuItems() {
    return _.chain(this.getActions()).
    filter('isEnabled').
    map(action => {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["d" /* MenuItem */], {
            key: action.type,
            refKey: action.type },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label)));


    }).value();
  }

  handleMonitorClick(monitorId) {
    __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEvent('monitor', 'view_run_details', 'browse');
    Object(__WEBPACK_IMPORTED_MODULE_12__models_services_DashboardService__["j" /* openEntity */])('monitors', monitorId, Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('ActiveBrowseWorkspaceStore').id);
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
                        'align-right': true,
                        dropup: 'auto' },

                      this.getMenuItems())))));





          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorsEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(128);


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
    url && pm.app.openExternalLink(url);
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
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["A" /* MONITORING_DOCS */]) }, 'Monitor your collections'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' to schedule automated tests to check for performance and response.')),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'primary',
              onClick: this.handleCreateMonitor }, 'Create a monitor in this workspace'))));






  }};

/***/ }),

/***/ 2570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceMocksBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(1687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_MoreIcon__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_empty_states_MocksEmpty__ = __webpack_require__(2571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_MockController__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_LoadingIndicator__ = __webpack_require__(1629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_empty_states_NoResultFound__ = __webpack_require__(1673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_ClipboardHelper__ = __webpack_require__(1668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__ = __webpack_require__(22);
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
    let currentUserId = _.get(Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('CurrentUserStore'), 'id');
    return [
    {
      type: 'copy',
      label: 'Copy to Clipboard',
      isEnabled: true },

    {
      type: 'delete',
      label: 'Delete',
      isEnabled: _.get(mock, 'createdBy') === currentUserId }];


  }

  getMenuItems(mock) {
    let actions = this.getActions(mock);
    return _.chain(actions).
    filter('isEnabled').
    map(action => {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["d" /* MenuItem */], {
            key: action.type,
            refKey: action.type },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-menu-item-label' }, action.label)));


    }).value();
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

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mocks__item__label' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mock-id' },
                    mock.url),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mock-owner' },
                    __WEBPACK_IMPORTED_MODULE_8__utils_util__["a" /* default */].getUserNameForId(mock.createdBy, Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["a" /* getStore */])('CurrentUserStore')))),


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
                        'align-right': true,
                        dropup: 'auto' },

                      this.getMenuItems(mock))))));





          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 2571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MocksEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(128);


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
    url && pm.app.openExternalLink(url);
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
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["z" /* MOCK_DOCS */]) }, 'mock server'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' to simulate each endpoint and its corresponding environment in a Postman Collection, before sending the actual request.')),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'primary',
              onClick: this.handleCreateMock }, 'Create a mock in this workspace'))));






  }};

/***/ }),

/***/ 2572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceHistoryBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_date_helper__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(1687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_empty_states_HistoryEmpty__ = __webpack_require__(2573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_SyncWorkspaceController__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WorkspaceHistoryGroupItem__ = __webpack_require__(2574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_LoadingIndicator__ = __webpack_require__(1629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_empty_states_NoResultFound__ = __webpack_require__(1673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_archivedResource_ArchivedResource__ = __webpack_require__(1747);
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

/***/ 2573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);

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

/***/ 2574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceHistoryGroupItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_history_HistoryListItem__ = __webpack_require__(1862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_DownSolidIcon__ = __webpack_require__(80);
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

/***/ 2575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceIntegrationsBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(1687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_empty_states_IntegrationsEmpty__ = __webpack_require__(2576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(11);
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

/***/ 2576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationsEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_services_DashboardService__ = __webpack_require__(250);



let

IntegrationsEmpty = class IntegrationsEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleAddIntegrations = this.handleAddIntegrations.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  handleAddIntegrations() {
    Object(__WEBPACK_IMPORTED_MODULE_3__models_services_DashboardService__["k" /* openIntegrationBrowse */])(this.props.workspaceId);
  }

  openLink(url) {
    url && pm.app.openExternalLink(url);
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

/***/ 2577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceActivityBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_activity_feed_ActivityFeed__ = __webpack_require__(1871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_library_LibraryEmptyListItem__ = __webpack_require__(2578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_library_LibraryEmptyActivityFeed__ = __webpack_require__(2579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__ = __webpack_require__(668);
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_library_LibraryEmptyListItem__["a" /* default */], {
            signedIn: this.props.isSignedIn,
            handleSignIn: this.handleSignIn,
            loading: this.store.isLoading,
            renderEmptyStateComponent: this.renderEmptyStateComponent })));



    }
    if (!_.isEmpty(this.store.feeds)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-team-overview' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_activity_feed_ActivityFeed__["a" /* default */], {
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

/***/ 2578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryEmptyListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_LoadingIndicator__ = __webpack_require__(1629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_AppUrlConstants__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AuthHandlerService__ = __webpack_require__(668);





let


LibraryEmptyListItem = class LibraryEmptyListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  handleTeamLibraryDocs() {
    pm.app.openExternalLink(__WEBPACK_IMPORTED_MODULE_3__constants_AppUrlConstants__["S" /* TEAM_LIBRARY_DOCS */]);
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

/***/ 2579:
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

/***/ 2580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceOfflineView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_RequesterTabConstants__ = __webpack_require__(109);



let

WorkspaceOfflineView = class WorkspaceOfflineView extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleSwitchToBuildView = this.handleSwitchToBuildView.bind(this);
  }

  handleSwitchToBuildView() {
    Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["a" /* getStore */])('ActiveWorkspaceSessionStore').updateState({ viewMode: __WEBPACK_IMPORTED_MODULE_3__constants_RequesterTabConstants__["b" /* WORKSPACE_BUILDER_VIEW */] });
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

/***/ })

});