webpackJsonp([34],{

/***/ 3703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceBrowserFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Inputs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_LibrarySortTypeConstants__ = __webpack_require__(3832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_LibrarySortTypeLabelMap__ = __webpack_require__(5051);








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

/***/ 3832:
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

/***/ 4218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LibraryEmptyActivityFeed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



function LibraryEmptyActivityFeed(props) {
  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'team-library-invite__wrapper empty-activity-feed' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: props.isSearch ? 'empty-activity-feed__search-image' : 'empty-activity-feed__image' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'empty-activity-feed__label' }, props.title),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'empty-activity-feed__description' }, props.description)));


}

LibraryEmptyActivityFeed.propTypes = {
  isSearch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired };

/***/ }),

/***/ 5049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkspaceBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Tabs__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WorkspaceBrowserItems_WorkspaceCollectionsBrowser__ = __webpack_require__(5050);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WorkspaceBrowserItems_WorkspaceEnvironmentsBrowser__ = __webpack_require__(5052);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__WorkspaceBrowserItems_WorkspaceMonitorsBrowser__ = __webpack_require__(5054);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WorkspaceBrowserItems_WorkspaceMocksBrowser__ = __webpack_require__(5056);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WorkspaceBrowserItems_WorkspaceHistoryBrowser__ = __webpack_require__(5058);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WorkspaceBrowserItems_WorkspaceIntegrationsBrowser__ = __webpack_require__(5061);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__WorkspaceBrowserItems_WorkspaceActivityBrowser__ = __webpack_require__(5063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_pipelines_user_action__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_model_event__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__WorkspaceBrowserItems_WorkspaceOfflineView__ = __webpack_require__(5070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_workspaces_WorkspaceActionDropdown__ = __webpack_require__(1581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__api_dev_components_api_browse_WorkspaceAPIBrowser_WorkspaceAPIBrowser__ = __webpack_require__(5071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_view_manager_ActiveViewManager__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_constants_views__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_constants_views___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__common_constants_views__);
var _class;



















let


WorkspaceBrowser = Object(__WEBPACK_IMPORTED_MODULE_10_mobx_react__["b" /* observer */])(_class = class WorkspaceBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'apis' };


    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.handleWorkspaceAction = this.handleWorkspaceAction.bind(this);
  }

  componentDidMount() {
    if (Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('WorkspaceLifecycleStore').isSwitching) {
      Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('WorkspaceLifecycleStore').resetLifecycle(Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveWorkspaceSessionStore').workspace);
    }

    __WEBPACK_IMPORTED_MODULE_18__modules_view_manager_ActiveViewManager__["a" /* default */].updateActiveView(__WEBPACK_IMPORTED_MODULE_19__common_constants_views__["WORKSPACE_BROWSER"]);
  }

  componentDidUpdate() {
    if (Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('WorkspaceLifecycleStore').isSwitching) {
      Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('WorkspaceLifecycleStore').resetLifecycle(Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveWorkspaceSessionStore').workspace);
    }
  }

  handleTabSelect(tab) {
    this.setState({ activeTab: tab });
    __WEBPACK_IMPORTED_MODULE_12__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'browse', tab);
  }

  handleWorkspaceAction(action) {
    let workspaceId = Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id;
    switch (action) {
      case 'add_dependencies':
        __WEBPACK_IMPORTED_MODULE_12__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'initiate_add_to_ws', 'browse');
        pm.mediator.trigger('openBulkAddToWorkspaceModal', workspaceId);
        break;

      case 'details':
        __WEBPACK_IMPORTED_MODULE_12__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'view_details');
        pm.mediator.trigger('openWorkspaceDetailsModal', Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id);
        break;

      case 'join':
        let joinWorkspaceEvent = Object(__WEBPACK_IMPORTED_MODULE_13__modules_model_event__["a" /* createEvent */])('join', 'workspace', { model: 'workspace', workspace: { id: workspaceId } });

        Object(__WEBPACK_IMPORTED_MODULE_11__modules_pipelines_user_action__["a" /* default */])(joinWorkspaceEvent).
        then(() => {
          Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveWorkspaceStore').switch(workspaceId);
        }).
        catch(e => {
          Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('WorkspaceLifecycleStore').resetLifecycle(workspaceId);
        });
        break;}

  }

  render() {
    let isOffline = !Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('SyncStatusStore').isSocketConnected;

    if (isOffline) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-browser__container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__WorkspaceBrowserItems_WorkspaceOfflineView__["a" /* default */], null)));


    }

    let isJoining = Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('WorkspaceLifecycleStore').isJoining(Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id);
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

            !Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveWorkspaceStore').isMember &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                type: 'primary',
                size: 'small',
                disabled: isJoining || Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isLoading,
                onClick: this.handleWorkspaceAction.bind(this, 'join'),
                className: 'join__button' },


              isJoining ?
              'Joining' :
              'Join'),




            !Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveWorkspaceStore').isMember &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                type: 'secondary',
                size: 'small',
                onClick: this.handleWorkspaceAction.bind(this, 'details'),
                className: 'details__button' }, 'Workspace details'),





            Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveWorkspaceStore').isMember &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                type: 'secondary',
                size: 'small',
                className: 'options__button',
                onClick: this.handleWorkspaceAction.bind(this, 'add_dependencies') }, 'Add to workspace'),





            Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveWorkspaceStore').isMember &&
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_workspaces_WorkspaceActionDropdown__["a" /* default */], {
              workspaceId: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id,
              tooltipPlacement: 'left' }))),





        this.state.activeTab === 'collections' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__WorkspaceBrowserItems_WorkspaceCollectionsBrowser__["a" /* WorkspaceCollectionsBrowser */], {
          collections: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').collections,
          archivedCollections: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').archivedCollections }),



        this.state.activeTab === 'environments' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__WorkspaceBrowserItems_WorkspaceEnvironmentsBrowser__["a" /* WorkspaceEnvironmentsBrowser */], {
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'monitors' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__WorkspaceBrowserItems_WorkspaceMonitorsBrowser__["a" /* WorkspaceMonitorsBrowser */], {
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'mocks' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__WorkspaceBrowserItems_WorkspaceMocksBrowser__["a" /* WorkspaceMocksBrowser */], {
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'integrations' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__WorkspaceBrowserItems_WorkspaceIntegrationsBrowser__["a" /* WorkspaceIntegrationsBrowser */], {
          integrations: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').integrations }),



        this.state.activeTab === 'activity' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__WorkspaceBrowserItems_WorkspaceActivityBrowser__["a" /* WorkspaceActivityBrowser */], {
          isSignedIn: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('CurrentUserStore').isLoggedIn,
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'history' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__WorkspaceBrowserItems_WorkspaceHistoryBrowser__["a" /* WorkspaceHistoryBrowser */], {
          workspaceId: Object(__WEBPACK_IMPORTED_MODULE_14__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id }),



        this.state.activeTab === 'apis' &&
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__api_dev_components_api_browse_WorkspaceAPIBrowser_WorkspaceAPIBrowser__["a" /* WorkspaceAPIBrowser */], null)));



  }}) || _class;

/***/ }),

/***/ 5050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceCollectionsBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_archivedResource_ArchivedResource__ = __webpack_require__(3831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_MoreIcon__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_base_Icons_ShareIcon__ = __webpack_require__(1555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_base_Icons_ForkIcon__ = __webpack_require__(1565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_empty_states_CollectionsEmpty__ = __webpack_require__(3833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_empty_states_NoResultFound__ = __webpack_require__(3689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_CollectionActionsConstants__ = __webpack_require__(3622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_CollectionActionsUtil__ = __webpack_require__(3943);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__constants_LibrarySortTypeConstants__ = __webpack_require__(3832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_base_InlineEditor__ = __webpack_require__(1015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__models_services_DashboardService__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_collections_CollectionMetaIcons__ = __webpack_require__(1551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_collections_CollectionForkLabel__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__modules_services_ShareModalService__ = __webpack_require__(1562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__constants_MoreButtonTooltipConstant__ = __webpack_require__(282);
var _class;




























let WorkspaceCollectionsBrowser = Object(__WEBPACK_IMPORTED_MODULE_15_mobx_react__["b" /* observer */])(_class = class WorkspaceCollectionsBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
        return collection => _.toLower(__WEBPACK_IMPORTED_MODULE_16__utils_util__["a" /* default */].getUserNameForId(collection.owner, Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('CurrentUserStore')));}

  }

  handleAction(collection, action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isMember) {
      pm.mediator.trigger('joinWorkspace');
      return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_13__utils_CollectionActionsUtil__["a" /* default */])(collection.id, action, {}, { origin: 'browse' });
  }

  handleShare(collection) {
    Object(__WEBPACK_IMPORTED_MODULE_23__modules_services_ShareModalService__["b" /* shareCollection */])(collection.uid, { origin: 'browse' });
  }

  getActions(collection) {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('PermissionStore'),
    currentUserStore = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('CurrentUserStore'),
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id,
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
    Object(__WEBPACK_IMPORTED_MODULE_19__models_services_DashboardService__["m" /* openEntity */])('collections', collectionId, Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id);
  }

  handleRefresh() {
    let workspaceId = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id;
    Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').fetchWorkspace(workspaceId);
  }

  render() {
    let collections = this.getFilteredCollections(),
    archivedResources = {
      archivedCollectionsCount: this.props.archivedCollections && this.props.archivedCollections.length || 0 };


    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('PermissionStore');

    if (Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isLoading) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_base_LoadingIndicator__["a" /* default */], null));

    }
    if (_.isEmpty(this.props.collections)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container collections empty' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_empty_states_CollectionsEmpty__["a" /* default */], {
              isMember: Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isMember,
              workspaceId: Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id })),


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
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__components_collections_CollectionForkLabel__["a" /* default */], {
                          className: 'collection__item__fork-label',
                          forkInfo: _.get(collection, 'forkInfo') }))),




                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'collections__item__owner' },
                      __WEBPACK_IMPORTED_MODULE_16__utils_util__["a" /* default */].getUserNameForId(collection.owner, Object(__WEBPACK_IMPORTED_MODULE_12__stores_get_store__["getStore"])('CurrentUserStore')))),


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

                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], { tooltip: __WEBPACK_IMPORTED_MODULE_24__constants_MoreButtonTooltipConstant__["a" /* ACTION_TYPE_VIEW_MORE_ACTIONS_TOOLTIP */] }, ' ',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Icons_MoreIcon__["a" /* default */], { className: 'entities_item__action__dropdown-btn' }))),


                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_base_Dropdowns__["c" /* DropdownMenu */], {
                          'align-right': true },

                        this.getMenuItems(collection))))),




                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__components_base_InlineEditor__["a" /* default */], {
                  isViewMore: true,
                  className: 'collections__item__description',
                  placeholder: 'Make things easier for your teammates with a complete request description.',
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

/***/ 5051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__ = __webpack_require__(3832);



const sortTypeLabelMap = {};

sortTypeLabelMap[__WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__["c" /* LIBRARY_SORT_TYPE_NAME */]] = 'Name';
sortTypeLabelMap[__WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__["b" /* LIBRARY_SORT_TYPE_LAST_MODIFIED */]] = 'Last Modified';
sortTypeLabelMap[__WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__["d" /* LIBRARY_SORT_TYPE_OWNER */]] = 'Owner';
sortTypeLabelMap[__WEBPACK_IMPORTED_MODULE_0__LibrarySortTypeConstants__["a" /* LIBRARY_SORT_TYPE_DATE_CREATED */]] = 'Date Created';

/* harmony default export */ __webpack_exports__["a"] = (sortTypeLabelMap);

/***/ }),

/***/ 5052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceEnvironmentsBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Icons_MoreIcon__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_ShareIcon__ = __webpack_require__(1555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_empty_states_EnvironmentsEmpty__ = __webpack_require__(5053);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_uid_helper__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_EnvironmentActionUtil__ = __webpack_require__(4217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_empty_states_NoResultFound__ = __webpack_require__(3689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_services_DashboardService__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__constants_MoreButtonTooltipConstant__ = __webpack_require__(282);
var _class;


















let WorkspaceEnvironmentsBrowser = Object(__WEBPACK_IMPORTED_MODULE_6_mobx_react__["b" /* observer */])(_class = class WorkspaceEnvironmentsBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').fetchWorkspaceEnvironment(id);
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
    if (!Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isMember) {
      pm.mediator.trigger('joinWorkspace');
      return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_9__utils_EnvironmentActionUtil__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__utils_uid_helper__["b" /* decomposeUID */])(environment.id).modelId, action, {}, { origin: 'browse' });
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
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('PermissionStore'),
    workspaceId = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id,
    environmentId = Object(__WEBPACK_IMPORTED_MODULE_8__utils_uid_helper__["b" /* decomposeUID */])(environment.id).modelId;

    return [
    {
      type: 'duplicate',
      label: 'Duplicate',
      isEnabled: permissionStore.can('addEnvironment', 'workspace', environmentId) },

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
    let environments = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').environments,
    filteredEnvironments = this.getFilteredEnvironments(environments);
    if (Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isLoading) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_LoadingIndicator__["a" /* default */], null));

    }

    if (_.isEmpty(environments)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container environments empty' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_empty_states_EnvironmentsEmpty__["a" /* default */], {
            isMember: Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isMember,
            workspaceId: Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id })));



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
                      onClick: this.handleEnvironmentClick.bind(this, environment.uid) },

                    environment.name),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'environment__owner' },
                    __WEBPACK_IMPORTED_MODULE_13__utils_util__["a" /* default */].getUserNameForId(environment.owner, Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('CurrentUserStore')))),


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

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__["a" /* Button */], { tooltip: __WEBPACK_IMPORTED_MODULE_16__constants_MoreButtonTooltipConstant__["a" /* ACTION_TYPE_VIEW_MORE_ACTIONS_TOOLTIP */] }, ' ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Icons_MoreIcon__["a" /* default */], { className: 'entities_item__action__dropdown-btn' }))),


                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__["c" /* DropdownMenu */], {
                        'align-right': true },

                      this.getMenuItems(environment))))));





          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentsEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_ManageEnvironmentViews__ = __webpack_require__(1552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__external_navigation_ExternalNavigationService__ = __webpack_require__(59);




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
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["D" /* ENVIRONMENT_DOCS */]) }, 'Environments'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' give you the ability to customize requests using '),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'text',
              className: 'learn-more-link',
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["_19" /* VARIABLE_DOCS */]) }, 'variables'),

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

/***/ 5054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceMonitorsBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_MoreIcon__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_empty_states_MonitorsEmpty__ = __webpack_require__(5055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_MonitorController__ = __webpack_require__(1589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_empty_states_NoResultFound__ = __webpack_require__(3689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_services_DashboardService__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_uid_helper__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants_MoreButtonTooltipConstant__ = __webpack_require__(282);
var _class;

















let WorkspaceMonitorsBrowser = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["b" /* observer */])(_class = class WorkspaceMonitorsBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    __WEBPACK_IMPORTED_MODULE_7__modules_controllers_MonitorController__["a" /* default */].getAll({ workspace: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id }).then(list => {
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
    if (!Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isMember) {
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
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('PermissionStore'),
    collectionId = Object(__WEBPACK_IMPORTED_MODULE_14__utils_uid_helper__["b" /* decomposeUID */])(monitor.collection).modelId;

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
    Object(__WEBPACK_IMPORTED_MODULE_12__models_services_DashboardService__["m" /* openEntity */])('monitors', monitorId, Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id);
  }

  handleEditMonitor(monitorId) {
    __WEBPACK_IMPORTED_MODULE_13__modules_services_AnalyticsService__["a" /* default */].addEvent('monitor', 'browse_action', 'edit');
    Object(__WEBPACK_IMPORTED_MODULE_12__models_services_DashboardService__["a" /* editEntity */])('monitors', monitorId, Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id);
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
            isMember: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isMember,
            workspaceId: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id,
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
                    __WEBPACK_IMPORTED_MODULE_8__utils_util__["a" /* default */].getUserNameForId(monitor.createdBy, Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('CurrentUserStore')))),


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

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], { tooltip: __WEBPACK_IMPORTED_MODULE_15__constants_MoreButtonTooltipConstant__["a" /* ACTION_TYPE_VIEW_MORE_ACTIONS_TOOLTIP */] },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Icons_MoreIcon__["a" /* default */], { className: 'entities_item__action__dropdown-btn' }))),


                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_base_Dropdowns__["c" /* DropdownMenu */], {
                        'align-right': true },

                      this.getMenuItems(monitor))))));





          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorsEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__external_navigation_ExternalNavigationService__ = __webpack_require__(59);



let
MonitorsEmpty = class MonitorsEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleCreateMonitor = this.handleCreateMonitor.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  handleCreateMonitor() {
    if (this.props.isMember) {
      pm.mediator.trigger(
      'openCreateNewMonitorModal',
      {
        workspaceId: this.props.workspaceId,
        from: 'browse' },

      this.props.onSuccessCreate);

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
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["V" /* MONITORING_DOCS */]) }, 'Monitor your collections'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' to schedule automated tests to check for performance and response.')),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'primary',
              onClick: this.handleCreateMonitor }, 'Create a monitor in this workspace'))));






  }};

/***/ }),

/***/ 5056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceMocksBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Icons_MoreIcon__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_CopyIcon__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_empty_states_MocksEmpty__ = __webpack_require__(5057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_controllers_MockController__ = __webpack_require__(1590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_empty_states_NoResultFound__ = __webpack_require__(3689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_ClipboardHelper__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_uid_helper__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__constants_MoreButtonTooltipConstant__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__models_services_DashboardService__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__mocks_containers_MockModalService__ = __webpack_require__(3944);
var _class;





















let WorkspaceMocksBrowser = Object(__WEBPACK_IMPORTED_MODULE_6_mobx_react__["b" /* observer */])(_class = class WorkspaceMocksBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    __WEBPACK_IMPORTED_MODULE_8__modules_controllers_MockController__["a" /* default */].getAll({
      workspace: Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id,
      populate: true }).
    then(list => {
      this.setState({
        mocks: list,
        isLoading: false });

    }).catch(err => {
      console.log('Error in fetching mocks', err);
    });
  }

  handleEditMock(mock) {
    __WEBPACK_IMPORTED_MODULE_19__mocks_containers_MockModalService__["a" /* default */].edit(
    {
      collectionId: Object(__WEBPACK_IMPORTED_MODULE_15__utils_uid_helper__["b" /* decomposeUID */])(mock.collection.id).modelId,
      opts: { from: 'browse' },
      mock: {
        mockId: mock.id,
        name: mock.name,
        isPrivate: !mock.published,
        mockUrl: mock.url,
        versionId: mock.collection && mock.collection.versionTag,
        environmentId: mock.environment && Object(__WEBPACK_IMPORTED_MODULE_15__utils_uid_helper__["b" /* decomposeUID */])(mock.environment.id).modelId } },


    this.fetchWorkspaceMocks);

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

  handleCollectionClick(collectionId) {
    __WEBPACK_IMPORTED_MODULE_14__modules_services_AnalyticsService__["a" /* default */].addEvent('documentation', 'view', 'browse');
    Object(__WEBPACK_IMPORTED_MODULE_17__models_services_DashboardService__["m" /* openEntity */])('collections', collectionId, Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id);
  }

  handleEnvironmentClick(environmentId) {
    __WEBPACK_IMPORTED_MODULE_14__modules_services_AnalyticsService__["a" /* default */].addEvent('environment', 'view_in_web', 'browse');
    Object(__WEBPACK_IMPORTED_MODULE_17__models_services_DashboardService__["m" /* openEntity */])('environments', environmentId, Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id);
  }

  handleAction(mock, action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isMember) {
      pm.mediator.trigger('joinWorkspace');
      return;
    }
    switch (action) {
      case 'edit':
        this.handleEditMock(mock);
        break;
      case 'delete':
        pm.mediator.trigger('showDeleteMockModal', mock, this.fetchWorkspaceMocks, { origin: 'browse' });
        break;
      case 'copy':
        __WEBPACK_IMPORTED_MODULE_13__utils_ClipboardHelper__["a" /* default */].copy(mock.url);
        __WEBPACK_IMPORTED_MODULE_14__modules_services_AnalyticsService__["a" /* default */].addEventV2({
          category: 'mock',
          action: 'copy',
          label: 'browse_view',
          entityId: mock.id });

        pm.toasts.success('Mock URL copied');
        break;}

  }

  getActions(mock) {
    const permissionStore = Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('PermissionStore'),
    collectionId = Object(__WEBPACK_IMPORTED_MODULE_15__utils_uid_helper__["b" /* decomposeUID */])(mock.collection.id).modelId;

    return [
    {
      type: 'edit',
      label: 'Edit',
      isEnabled: permissionStore.can('editMock', 'collection', collectionId) },

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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__["d" /* MenuItem */], {
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_base_LoadingIndicator__["a" /* default */], null));

    }

    if (_.isEmpty(this.state.mocks)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-item-browser__container mocks empty' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_empty_states_MocksEmpty__["a" /* default */], {
            isMember: Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isMember,
            workspaceId: Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id,
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_empty_states_NoResultFound__["a" /* default */], null),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mocks__list__header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'mocks__list__header__name' }, 'NAME'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'mocks__list__header__collection' }, 'COLLECTION'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'mocks__list__header__version-tag' }, 'VERSION TAG'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'mocks__list__header__environment' }, 'ENVIRONMENT'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'mocks__list__header__mock-url' }, 'MOCK URL'),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'mocks__list__header__actions' })),


          _.map(mocks, mock => {
            return (
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                  className: 'mocks__list__item',
                  key: mock.id },

                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mock__item__name' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mock-name' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { title: mock.name }, mock.name)),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mock-owner' },
                    __WEBPACK_IMPORTED_MODULE_9__utils_util__["a" /* default */].getUserNameForId(mock.createdBy.id, Object(__WEBPACK_IMPORTED_MODULE_7__stores_get_store__["getStore"])('CurrentUserStore')))),



                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                    className: 'mock__item__collection-name' },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                      title: _.get(mock.collection, 'name'),
                      onClick: this.handleCollectionClick.bind(this, _.get(mock.collection, 'id')) },

                    _.get(mock.collection, 'name'))),



                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mock__item__collection-version' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                      title: _.get(mock.collection, 'versionName'),
                      className: __WEBPACK_IMPORTED_MODULE_18_classnames___default()({
                        'mock__item__collection-version-tag': true,
                        'mock__item__collection-version-tag--current':
                        _.isEqual(_.get(mock.collection, 'versionTag'), 'latest') }) },


                    _.get(mock.collection, 'versionName'))),



                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mock__item__environment-name' },
                  _.get(mock.environment, 'name') ?
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                      title: _.get(mock.environment, 'name'),
                      className: 'mock__item__environment-name--link',
                      onClick: this.handleEnvironmentClick.bind(this, _.get(mock.environment, 'id')) },

                    _.get(mock.environment, 'name')) :

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'mock__item__environment-name--empty' }, 'No environment')),



                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                    className: 'mock-id',
                    title: mock.url },

                  mock.url),


                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entities__item__action_wrapper mock__item__actions' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], {
                      className: 'mock___item__button-copy',
                      tooltip: 'Copy Mock URL',
                      type: 'icon',
                      onClick: this.handleAction.bind(this, mock, 'copy') },

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Icons_CopyIcon__["a" /* default */], null)),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__["a" /* Dropdown */], {
                      className: 'entities_item__action__dropdown',
                      onSelect: this.handleAction.bind(this, mock) },

                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__["b" /* DropdownButton */], {
                        dropdownStyle: 'nocaret',
                        type: 'custom' },

                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__["a" /* Button */], { tooltip: __WEBPACK_IMPORTED_MODULE_16__constants_MoreButtonTooltipConstant__["a" /* ACTION_TYPE_VIEW_MORE_ACTIONS_TOOLTIP */] }, ' ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_base_Icons_MoreIcon__["a" /* default */], { className: 'entities_item__action__dropdown-btn' }))),


                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_base_Dropdowns__["c" /* DropdownMenu */], {
                        'align-right': true },

                      this.getMenuItems(mock))))));





          }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5057:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MocksEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__external_navigation_ExternalNavigationService__ = __webpack_require__(59);



let
MocksEmpty = class MocksEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleCreateMock = this.handleCreateMock.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  handleCreateMock() {
    if (this.props.isMember) {
      pm.mediator.trigger(
      'openCreateNewMockModal',
      {
        workspaceId: this.props.workspaceId,
        from: 'browse' },

      this.props.onSuccessCreate);

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
              onClick: this.openLink.bind(this, __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__["U" /* MOCK_DOCS */]) }, 'mock server'),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' to simulate each endpoint and its corresponding environment in a Postman Collection, before sending the actual request.')),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__action' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_Buttons__["a" /* Button */], {
              type: 'primary',
              onClick: this.handleCreateMock }, 'Create a mock in this workspace'))));






  }};

/***/ }),

/***/ 5058:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceHistoryBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_date_helper__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_empty_states_HistoryEmpty__ = __webpack_require__(5059);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_controllers_SyncWorkspaceController__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WorkspaceHistoryGroupItem__ = __webpack_require__(5060);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_empty_states_NoResultFound__ = __webpack_require__(3689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_archivedResource_ArchivedResource__ = __webpack_require__(3831);
var _class;













let WorkspaceHistoryBrowser = Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["b" /* observer */])(_class = class WorkspaceHistoryBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
    return __WEBPACK_IMPORTED_MODULE_7__modules_controllers_SyncWorkspaceController__["a" /* default */].getAllHistory({ workspace: Object(__WEBPACK_IMPORTED_MODULE_6__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id }).
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

/***/ 5059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(13);

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

/***/ 5060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceHistoryGroupItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_history_HistoryListItem__ = __webpack_require__(4209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Icons_DownSolidIcon__ = __webpack_require__(68);
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

/***/ 5061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceIntegrationsBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_empty_states_IntegrationsEmpty__ = __webpack_require__(5062);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(5);
var _class;







let WorkspaceIntegrationsBrowser = Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["b" /* observer */])(_class = class WorkspaceIntegrationsBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
            isMember: Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isMember,
            workspaceId: Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id })));



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

/***/ 5062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationsEmpty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_AppUrlConstants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_services_DashboardService__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__external_navigation_ExternalNavigationService__ = __webpack_require__(59);




let
IntegrationsEmpty = class IntegrationsEmpty extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleAddIntegrations = this.handleAddIntegrations.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  handleAddIntegrations() {
    Object(__WEBPACK_IMPORTED_MODULE_3__models_services_DashboardService__["o" /* openIntegrationBrowse */])(this.props.workspaceId);
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

/***/ 5063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceActivityBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_workspace_activity_feed_WorkspaceActivityFeed__ = __webpack_require__(5064);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_library_LibraryEmptyListItem__ = __webpack_require__(5068);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_library_LibraryEmptyActivityFeed__ = __webpack_require__(4218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WorkspaceActivityFeedFilter__ = __webpack_require__(5069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_empty_states_CrashHandler__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_services_AnalyticsService__ = __webpack_require__(20);
var _class;










/**
                                                                            *
                                                                            * @param {String} action Action for analytic event
                                                                            * @param {String} trigger Trigger for analytic event
                                                                            * @param {Number} members No. of members selected
                                                                            * @param {Number} entities No. of entities selected
                                                                            * @param {Boolean} isFilterApplied Flag to identify if filter is applied
                                                                            * @param {String} workspaceId Current workspace Id
                                                                            */
function addAnalyticsEvent(action, trigger, members, entities, isFilterApplied, workspaceId) {
  let label;

  if (!isFilterApplied) {
    label = `${trigger}`;
  } else
  if (members && entities) {
    label = `filter_${trigger}_users_models`;
  } else
  if (members) {
    label = `filter_${trigger}_users`;
  } else
  {
    label = `filter_${trigger}_models`;
  }

  __WEBPACK_IMPORTED_MODULE_9__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', action, label, 1, workspaceId);
}


let WorkspaceActivityBrowser = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class WorkspaceActivityBrowser extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      isFilterApplied: false,
      filterApplied: {
        members: {},
        entities: {} } };



    this.loadMoreActivityFeed = this.loadMoreActivityFeed.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
  }

  componentWillMount() {
    this.store = Object(__WEBPACK_IMPORTED_MODULE_5__stores_get_store__["getStore"])('WorkspaceActivityFeedStore');
    this.store.initiateInitialFetch();

    addAnalyticsEvent('activityfeed', 'view',
    _.size(this.state.filterApplied.members), _.size(this.state.filterApplied.entities), this.state.isFilterApplied, this.props.workspaceId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workspaceId !== nextProps.workspaceId) {
      this.store.initiateInitialFetch();
    }
  }

  componentWillUnmount() {
    this.store.reset();
    this.store = null;
  }

  loadMoreActivityFeed() {
    this.store.initiateLoadMore({
      users: _.keys(this.state.filterApplied.members),
      models: _.map(this.state.filterApplied.entities, 'value') });


    if (!this.store.areMoreFeedsAvailable) {
      addAnalyticsEvent('activityfeed_end', 'view',
      _.size(this.state.filterApplied.members), _.size(this.state.filterApplied.entities), this.state.isFilterApplied, this.props.workspaceId);
    }

    addAnalyticsEvent('activityfeed', 'view_more',
    _.size(this.state.filterApplied.members), _.size(this.state.filterApplied.entities), this.state.isFilterApplied, this.props.workspaceId);
  }

  handleSignIn() {
    __WEBPACK_IMPORTED_MODULE_6__modules_services_AuthHandlerService__["a" /* default */].login();
  }

  handleRefresh() {
    this.store.refresh({
      users: _.keys(this.state.filterApplied.members),
      models: _.map(this.state.filterApplied.entities, 'value') });


    addAnalyticsEvent('activityfeed', 'refresh_view',
    _.size(this.state.filterApplied.members), _.size(this.state.filterApplied.entities), this.state.isFilterApplied, this.props.workspaceId);
  }

  handleSearch(filters) {
    this.setState({
      isFilterApplied: true,
      filterApplied: filters },
    function () {
      this.store.getBySearch({
        users: _.keys(filters.members),
        models: _.map(filters.entities, 'value') });


      addAnalyticsEvent('activityfeed', 'view',
      _.size(this.state.filterApplied.members), _.size(this.state.filterApplied.entities), this.state.isFilterApplied, this.props.workspaceId);
    });
  }

  handleClearAll() {
    this.setState({
      isFilterApplied: false,
      filterApplied: {
        members: {},
        entities: {} } },

    function () {
      this.store.refresh();
    });
  }


  render() {
    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_empty_states_CrashHandler__["a" /* default */], null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'requester-team-overview' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__WorkspaceActivityFeedFilter__["a" /* default */], {
            handleRefresh: this.handleRefresh,
            handleSearch: this.handleSearch,
            handleClearAll: this.handleClearAll,
            isLoading: this.store.isLoading,
            isFilterApplied: this.state.isFilterApplied,
            filtersApplied: this.state.filterApplied }),

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_workspace_activity_feed_WorkspaceActivityFeed__["a" /* default */], {
            activityFeed: this.store,
            onLoadMore: this.loadMoreActivityFeed,
            isFilterApplied: this.state.isFilterApplied,
            isLoggedIn: this.props.isSignedIn,
            isLoading: this.store.isLoading,
            isLoadingMore: this.store.isLoadingMore,
            onSignIn: this.handleSignIn,
            areMoreFeedsAvailable: this.store.areMoreFeedsAvailable }))));




  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5064:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceActivityFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_LibraryEmptyActivityFeed__ = __webpack_require__(4218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WorkspaceActivityItem__ = __webpack_require__(5065);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postman_date_helper__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postman_date_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__postman_date_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CollectionActivity__ = __webpack_require__(5067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobx_react__ = __webpack_require__(7);
var _class;











const EMPTY_STATE = {
  search: {
    title: 'No results found',
    description: 'Try adjusting your filters and try again.' },

  empty: {
    title: 'Your activity feed is empty',
    description: 'Collaborate on your API collections with your teammates to populate the feed' } };let




WorkspaceActivityFeed = Object(__WEBPACK_IMPORTED_MODULE_8_mobx_react__["b" /* observer */])(_class = class WorkspaceActivityFeed extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

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
    if (node.scrollHeight - (node.scrollTop + node.offsetHeight) === 0) {
      !this.props.isLoadingMore && this.props.onLoadMore && this.props.onLoadMore();
    }
  }

  getClasses() {
    return __WEBPACK_IMPORTED_MODULE_7_classnames___default()({ 'workspace-activity-feed-container': true }, this.props.className);
  }

  render() {
    let props = this.props,
    activities = _.get(props, 'activityFeed.feeds', []),
    isActivityFeedFetchError = _.get(props, 'activityFeed.error', false);

    if (!props.isLoggedIn) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-empty-container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                className: 'workspace-activity-feed-empty-signin-link',
                onClick: this.handleSignIn }, 'Sign in'), ' to track changes to your collection.')));






    } else
    if (props.isLoading) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__base_LoadingIndicator__["a" /* default */], null));

    } else
    if (_.isEmpty(props.activityFeed.feeds)) {
      return (
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__library_LibraryEmptyActivityFeed__["a" /* default */], {
          isSearch: props.isFilterApplied,
          title: props.isFilterApplied ? EMPTY_STATE.search.title : EMPTY_STATE.empty.title,
          description: props.isFilterApplied ? EMPTY_STATE.search.description : EMPTY_STATE.empty.description }));


    }

    let groupedActivities = _.isEmpty(activities) ? [] : __WEBPACK_IMPORTED_MODULE_4__postman_date_helper___default.a.getDateGroups(activities, 'updatedAt', 'MMMM D, YYYY'),
    activityId = '',
    activitySubCount = 1;

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: this.getClasses() },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
            className: 'workspace-activity-feed',
            ref: 'activity_feed',
            onScroll: this.handleScrollDebounced },

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'workspace-activity-feed-date-group-container' },


            _.map(groupedActivities, subActivities => {
              let currentFeedUserId = '',
              showUserIcon = false;

              if (_.isEmpty(subActivities)) {
                return false;
              }

              return (
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
                    className: 'workspace-activity-feed-date-group-wrapper',
                    key: subActivities.name },

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-date-group' }, ' ', subActivities.name, ' '),

                  _.map(subActivities.items, activity => {
                    showUserIcon = activity.user && currentFeedUserId !== activity.user.id;
                    activity.user && (currentFeedUserId = activity.user.id);
                    activityId === activity.feed_id ?
                    (activityId = activity.feed_id) && (activity.feed_id = `${activity.feed_id}#${activitySubCount++}`) :
                    activityId = activity.feed_id;

                    return (
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__WorkspaceActivityItem__["a" /* default */], {
                        workspaceId: props.activityFeed.id,
                        userId: activity.user && activity.user.id,
                        markdown: activity.markdown,
                        updatedAt: activity.updatedAt,
                        key: activity.feed_id,
                        showUserIcon: showUserIcon }));


                  })));



            })),



          props.areMoreFeedsAvailable ?
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__CollectionActivity__["a" /* LoadFeed */], {
            error: isActivityFeedFetchError,
            key: 'loading-more',
            loading: props.activityFeed.isLoadingMore }) :

          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              className: 'workspace-activity-feed__end' }, 'The end! You\'ve seen all the activity for this workspace'))));







  }}) || _class;


WorkspaceActivityFeed.propTypes = {
  activityFeed: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired,
  activityName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  onLoadMore: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func.isRequired };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WorkspaceActivityItemComponents__ = __webpack_require__(3948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Markdown__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__external_navigation_ExternalNavigationService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__ = __webpack_require__(20);









function WorkspaceActivityItem(props) {
  const { showUserIcon, userId, markdown, updatedAt, workspaceId } = props;

  function handleClickAnalytic(target) {
    const link = target.getAttribute('href');

    link && Object(__WEBPACK_IMPORTED_MODULE_6__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(link);
    __WEBPACK_IMPORTED_MODULE_7__modules_services_AnalyticsService__["a" /* default */].addEvent('workspace', 'activityfeed_action', 'redirect', 1, workspaceId);
  }

  return (
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
          'workspace-activity-item-wrapper': true,
          'show-user': showUserIcon }) },


      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-content' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__WorkspaceActivityItemComponents__["c" /* Header */], null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__WorkspaceActivityItemComponents__["f" /* ProfilePic */], { id: showUserIcon ? userId : '' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__WorkspaceActivityItemComponents__["d" /* Heading */], null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__base_Markdown__["a" /* default */], {
                source: markdown,
                handleClick: handleClickAnalytic })),


            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__WorkspaceActivityItemComponents__["e" /* Meta */], null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__WorkspaceActivityItemComponents__["h" /* Time */], { timestamp: updatedAt })))))));






}

WorkspaceActivityItem.propTypes = {
  showUserIcon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  userId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  markdown: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  updatedAt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  workspaceId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired };


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_mobx_react__["b" /* observer */])(WorkspaceActivityItem));

/***/ }),

/***/ 5067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Create */
/* unused harmony export Update */
/* unused harmony export Delete */
/* unused harmony export Share */
/* unused harmony export Unshare */
/* unused harmony export Subscribe */
/* unused harmony export Unsubscribe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__ = __webpack_require__(3948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ActivityFeedHelper__ = __webpack_require__(4215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_PluralizeHelper__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_LoadingIndicator__ = __webpack_require__(53);
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["c" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' Created '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["i" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["h" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* Restore */], {
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["c" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head-content' },

                  changesCount > 0 &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', changesCount, ' ', pluralizedChangeText, ' to '),


                  changesCount === 0 &&
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, ' ', trigger === 'restore' ? 'Restored' : 'Modified', ' '),

                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                  activity.instance, {
                    meta: meta })))),



              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["i" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["h" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* Restore */], {
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["c" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Deleted'),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["i" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["h" /* Time */], { timestamp: activity.createdAt }),

                this.props.enableRestore &&
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["g" /* Restore */], {
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["c" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Modified access to '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["i" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["h" /* Time */], { timestamp: activity.createdAt })))))));






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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["c" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Modified access to '),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["i" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["h" /* Time */], { timestamp: activity.createdAt })))))));






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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["c" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Subscribed to'),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["i" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["h" /* Time */], { timestamp: activity.createdAt })))))));






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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["c" /* Header */], null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["f" /* ProfilePic */], activity.user),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-item-head' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["d" /* Heading */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null, 'Unsubscribed from'),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["a" /* Collection */], _extends({},
                activity.instance, {
                  meta: meta }))),


              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["e" /* Meta */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["i" /* User */], activity.user),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WorkspaceActivityItemComponents__["h" /* Time */], { timestamp: activity.createdAt })))))));






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

/***/ 5068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_AppUrlConstants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_services_AnalyticsService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_services_AuthHandlerService__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__external_navigation_ExternalNavigationService__ = __webpack_require__(59);






let

LibraryEmptyListItem = class LibraryEmptyListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
  }

  handleTeamLibraryDocs() {
    Object(__WEBPACK_IMPORTED_MODULE_6__external_navigation_ExternalNavigationService__["a" /* openExternalLink */])(__WEBPACK_IMPORTED_MODULE_3__constants_AppUrlConstants__["_14" /* TEAM_LIBRARY_DOCS */]);
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

/***/ 5069:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceActivityFeedFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_share_SelectDropdown__ = __webpack_require__(4219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_workspace_activity_feed_config_WorkspaceActivityFeedConfig__ = __webpack_require__(1640);
var _class;





let


WorkspaceActivityFeedFilter = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* observer */])(_class = class WorkspaceActivityFeedFilter extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.state = {
      filter: this.props.filtersApplied,
      isFilterApplied: this.props.isFilterApplied,
      isFilterSelected: false };


    this.handleUserSelect = this.handleUserSelect.bind(this);
    this.handleEntitySelect = this.handleEntitySelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleUserSelect(users) {
    this.setState({
      filter: {
        members: users,
        entities: this.state.filter.entities },

      isFilterSelected: true });

  }

  handleEntitySelect(entities) {
    this.setState({
      filter: {
        members: this.state.filter.members,
        entities: entities },

      isFilterSelected: true });

  }

  handleSearch() {
    this.setState({
      isFilterApplied: true,
      isFilterSelected: false },
    function () {

      _.isFunction(this.props.handleSearch) && this.props.handleSearch(this.state.filter);
    });

  }

  handleClearFilter() {
    this.setState({
      filter: {
        members: {},
        entities: {} },

      isFilterSelected: false },
    function () {
      _.isFunction(this.props.handleClearAll) && this.props.handleClearAll();
    });
  }

  handleRefresh() {
    _.isFunction(this.props.handleRefresh) && this.props.handleRefresh();
  }

  render() {
    const appliedEntitiesLength = _.size(this.props.filtersApplied.entities),
    appliedMembersLength = _.size(this.props.filtersApplied.members),
    selectedEntitiesLength = _.size(this.state.filter.entities),
    selectedMembersLength = _.size(this.state.filter.members),
    entitiesToBeShown = Object(__WEBPACK_IMPORTED_MODULE_5__components_workspace_activity_feed_config_WorkspaceActivityFeedConfig__["a" /* getAllowedModelsForWorkspaceFeed */])(),
    workspaceMembers = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').members.users,
    membersValue = _.map(_.cloneDeep(workspaceMembers), value => {
      value.name = value.name || value.username;

      return value;
    });

    return (
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-filter-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-filter' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-filter-types' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_share_SelectDropdown__["a" /* default */], {
              className: 'workspace-members',
              selectedItems: this.state.filter.members,
              items: membersValue,
              isFilterApplied: appliedMembersLength && this.props.isFilterApplied,
              isSelected: selectedMembersLength && this.state.isFilterSelected,
              onSelect: this.handleUserSelect,
              dropDownPlaceholder: `Filter by User ${selectedMembersLength > 0 ? `(${selectedMembersLength})` : ''}`,
              searchPlaceholder: 'Search for user',
              searchFields: ['name', 'email'] }),

            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_share_SelectDropdown__["a" /* default */], {
              className: 'entities',
              selectedItems: this.state.filter.entities,
              items: entitiesToBeShown,
              isFilterApplied: appliedEntitiesLength && this.props.isFilterApplied,
              isSelected: selectedEntitiesLength && this.state.isFilterSelected,
              onSelect: this.handleEntitySelect,
              dropDownPlaceholder: `Filter by Entity ${selectedEntitiesLength > 0 ? `(${selectedEntitiesLength})` : ''}`,
              searchPlaceholder: 'Select for entity',
              searchFields: ['name'] })),



          (selectedMembersLength + selectedEntitiesLength > 0 || appliedMembersLength + appliedEntitiesLength > 0) &&
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-filter-actions' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Buttons__["a" /* Button */], {
                className: 'workspace-activity-feed__search-button',
                type: 'primary',
                onClick: this.handleSearch,
                disabled: !this.state.isFilterSelected }, 'Apply'),



            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Buttons__["a" /* Button */], {
                className: 'workspace-activity-feed__clear-button',
                type: 'text',
                onClick: this.handleClearFilter }, 'Clear filters'))),






        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'workspace-activity-feed-refresh' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_base_Buttons__["a" /* Button */], {
              className: 'workspace-activity-feed__refresh',
              type: 'text',
              onClick: this.handleRefresh,
              disabled: this.props.isLoading }, 'Refresh'))));






  }}) || _class;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 5070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceOfflineView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_WorkspaceViewModeService__ = __webpack_require__(1027);



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
    let isLocalWorkspace = Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('WorkspaceStore').find(Object(__WEBPACK_IMPORTED_MODULE_2__stores_get_store__["getStore"])('ActiveWorkspaceSessionStore').workspace);
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

/***/ 5071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceAPIBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_editor_common_DeleteModal_DeleteModal__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_dev_constants_APIActionsConstants__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_APIDevService_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_constants_LibrarySortTypeConstants__ = __webpack_require__(3832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_models_services_DashboardService__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__js_utils_util__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__js_components_base_Buttons__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__js_components_base_Dropdowns__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__js_components_base_Icons_MoreIcon__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__js_components_base_Icons_ShareIcon__ = __webpack_require__(1555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__js_components_base_InlineEditor__ = __webpack_require__(1015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__js_components_base_LoadingIndicator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__WorkspaceAPIsEmpty_WorkspaceAPIsEmpty__ = __webpack_require__(5072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__js_components_workspaces_WorkspaceBrowserFilter__ = __webpack_require__(3703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__js_modules_services_ManageRolesModalService__ = __webpack_require__(1577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__js_modules_services_ShareModalService__ = __webpack_require__(1562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__js_components_empty_states_NoResultFound__ = __webpack_require__(3689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__api_editor_common_RemoveFromWorkspaceModal_RemoveFromWorkspaceModal__ = __webpack_require__(1600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__js_constants_MoreButtonTooltipConstant__ = __webpack_require__(282);
var _class;
























const DEFAULT_MESSAGE = 'You do not have permissions to perform this action.',
MANAGE_ROLES_MESSAGE = 'You need to be signed-in to a team to perform this action';


let WorkspaceAPIBrowser = Object(__WEBPACK_IMPORTED_MODULE_0_mobx_react__["b" /* observer */])(_class = class WorkspaceAPIBrowser extends __WEBPACK_IMPORTED_MODULE_3_react__["Component"] {
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
        this.handleError(err, 'There was an unexpected error while fetching the APIs.');
      });
    };this.

    deleteAPI = () => {
      this.setState({
        isDeleting: true });

      __WEBPACK_IMPORTED_MODULE_6__services_APIDevService_js__["a" /* default */].deleteAPI(this.state.apiId).
      then(() => {
        pm.toasts.success(`You deleted ${this.state.apiName} from all workspaces.`, { title: 'API deleted' });
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
        pm.toasts.success(`You removed ${this.state.apiName} from this workspace.`, { title: 'API removed' });
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
        case __WEBPACK_IMPORTED_MODULE_5__api_dev_constants_APIActionsConstants__["f" /* ACTION_TYPE_REMOVE_FROM_WORKSPACE */]:
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

    };this.state = { filterQuery: '', sortType: __WEBPACK_IMPORTED_MODULE_7__js_constants_LibrarySortTypeConstants__["c" /* LIBRARY_SORT_TYPE_NAME */], apis: [], isLoading: false, openDeleteModal: false, isDeleting: false, apiId: '', apiName: '' };this.handleFilterQueryChange = this.handleFilterQueryChange.bind(this);this.handleFilterQueryCancel = this.handleFilterQueryCancel.bind(this);this.handleSortTypeChange = this.handleSortTypeChange.bind(this);this.handleAction = this.handleAction.bind(this);this.handleRefreshDebounced = _.debounce(this.fetchAPIs, 5000, { leading: true, trailing: false });}componentDidMount() {this.reactionDisposer = Object(__WEBPACK_IMPORTED_MODULE_1_mobx__["q" /* reaction */])(() => Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id, () => {this.fetchAPIs();}, { fireImmediately: true });}componentWillUnmount() {this.reactionDisposer && this.reactionDisposer();}getFilteredAPIs() {return _.chain(this.state.apis).filter(api => _.includes(_.toLower(api.name), _.toLower(this.state.filterQuery))).sortBy([this.getSortFunction(this.state.sortType)]).value();}handleFilterQueryChange(filterQuery) {this.setState({ filterQuery });}handleFilterQueryCancel() {this.setState({ filterQuery: '' });}handleSortTypeChange(sortType) {this.setState({ sortType });}getSortFunction(type) {switch (type) {case __WEBPACK_IMPORTED_MODULE_7__js_constants_LibrarySortTypeConstants__["c" /* LIBRARY_SORT_TYPE_NAME */]:return api => _.toLower(api.name);case __WEBPACK_IMPORTED_MODULE_7__js_constants_LibrarySortTypeConstants__["b" /* LIBRARY_SORT_TYPE_LAST_MODIFIED */]:return api => new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(api.updatedAt);case __WEBPACK_IMPORTED_MODULE_7__js_constants_LibrarySortTypeConstants__["a" /* LIBRARY_SORT_TYPE_DATE_CREATED */]:return api => new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(api.createdAt);case __WEBPACK_IMPORTED_MODULE_7__js_constants_LibrarySortTypeConstants__["d" /* LIBRARY_SORT_TYPE_OWNER */]:return api => _.toLower(__WEBPACK_IMPORTED_MODULE_10__js_utils_util__["a" /* default */].getUserNameForId(api.createdBy, Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["getStore"])('CurrentUserStore')));}}handleAction(api, action) {if (!Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isMember) {pm.mediator.trigger('joinWorkspace');return;}this.handleAPIActions(api.id, api.name, action);}

  handleShare(api) {
    Object(__WEBPACK_IMPORTED_MODULE_20__js_modules_services_ShareModalService__["a" /* shareAPI */])(api.id);
  }

  getActions() {
    const currentUserStore = Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["getStore"])('CurrentUserStore');

    return [
    {
      type: __WEBPACK_IMPORTED_MODULE_5__api_dev_constants_APIActionsConstants__["d" /* ACTION_TYPE_MANAGE_ROLES */],
      label: 'Manage Roles',
      isEnabled: Boolean(currentUserStore.team) },

    {
      type: __WEBPACK_IMPORTED_MODULE_5__api_dev_constants_APIActionsConstants__["f" /* ACTION_TYPE_REMOVE_FROM_WORKSPACE */],
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
    Object(__WEBPACK_IMPORTED_MODULE_8__js_models_services_DashboardService__["m" /* openEntity */])('apis', apiId, Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id);
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
            isMember: Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').isMember,
            workspaceId: Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["getStore"])('ActiveBrowseWorkspaceStore').id })));



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
                      __WEBPACK_IMPORTED_MODULE_10__js_utils_util__["a" /* default */].getUserNameForId(api.createdBy, Object(__WEBPACK_IMPORTED_MODULE_9__js_stores_get_store__["getStore"])('CurrentUserStore')))),


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

                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__js_components_base_Buttons__["a" /* Button */], { tooltip: __WEBPACK_IMPORTED_MODULE_23__js_constants_MoreButtonTooltipConstant__["a" /* ACTION_TYPE_VIEW_MORE_ACTIONS_TOOLTIP */] }, ' ',
                          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__js_components_base_Icons_MoreIcon__["a" /* default */], { className: 'entities_item__action__dropdown-btn' }))),


                      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__js_components_base_Dropdowns__["c" /* DropdownMenu */], {
                          'align-right': true },

                        this.getMenuItems(api))))),




                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__js_components_base_InlineEditor__["a" /* default */], {
                  isViewMore: true,
                  className: 'collections__item__description',
                  placeholder: 'Make things easier for your teammates with a complete request description.',
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

/***/ 5072:
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


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__title' }, 'No APIs yet'),


        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'entity-empty__subtitle' }, 'APIs define related collections and environments under a consistent schema.')));




  }};

/***/ })

});