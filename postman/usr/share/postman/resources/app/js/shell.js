webpackJsonp([3],{

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var shellUtils = {
  getUserIdfromData: function getUserIdfromData(userData) {
    return userData.id || userData.user_id || userData.userId;
  },
  isUserLoggedIn: function isUserLoggedIn(id) {
    return !(_.isEmpty(id) || id === '0' || id === 0);
  }
};

module.exports = shellUtils;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 1603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _stringify = __webpack_require__(32);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dbService = {

  /**
   * getData is used to get the partitions from the localStorage
   * @param {string} key  the key of the data object
   * @return {Object} returns either an empty object or the object of data available
   */

  getData: function getData(key) {
    // bail out if key is not there.
    if (_.isEmpty(key)) {
      return {};
    }
    var dataStr = localStorage.getItem(key),
        dataObj = {};
    if (_.isEmpty(dataStr) || _.isEqual(dataStr === 'undefined')) {
      // Reaching here means, there is no user available so far.
      // so, returns an empty object.
      return {};
    }
    try {
      // Local storage will store only strings, so we need to parse them out before returning.
      dataObj = JSON.parse(dataStr);
    } finally {
      // returns the parsed data object.
      return dataObj;
    }
  },


  /**
   * setData is used to set the data in localStorage
   * @param {string} key  the key of the data object
   * @param {Obj} dataObj the data object to be updated in the localStorage
   *
   */

  setData: function setData(key, dataObj) {
    // bail out if key is not there.
    if (_.isEmpty(key)) {
      return;
    }
    var dataString = '{}';

    // We need to proceed only if the data provided is an object.
    if (_.isObject(dataObj)) {
      try {
        // Stringify it before storing it in the localStorage.
        dataString = (0, _stringify2.default)(dataObj);
      } finally {
        // store it in the localStorage with the key data.
        localStorage.setItem(key, dataString);
      }
    }
  }
};

module.exports = dbService;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 2765:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2766);


/***/ }),

/***/ 2766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _init = __webpack_require__(2767);

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_init2.default.init();

window.sh = _init2.default;

/***/ }),

/***/ 2767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(76);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _shellController = __webpack_require__(2768);

var _shellController2 = _interopRequireDefault(_shellController);

var _shellMeta = __webpack_require__(2771);

var _shellMeta2 = _interopRequireDefault(_shellMeta);

var _shellUtils = __webpack_require__(1048);

var _shellUtils2 = _interopRequireDefault(_shellUtils);

var _shellConstants = __webpack_require__(996);

var _shellActions = __webpack_require__(247);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var session = __webpack_require__(39).remote.session;

var _require = __webpack_require__(39),
    ipcRenderer = _require.ipcRenderer;

var _ = __webpack_require__(6);

var sh = {

  /**
   * controller, holds the reference of the controller functions for the shell
   */
  controller: _shellController2.default,

  /**
   * meta, holds the reference of the meta properties and its functions
   */
  meta: _shellMeta2.default,

  init: function init() {
    this.controller.init();
    this.meta.init();

    this.handleShellLoaded = this.handleShellLoaded.bind(this);
    this.proxyElectronMessage = this.proxyElectronMessage.bind(this);
    this.handleMessageInShell = this.handleMessageInShell.bind(this);

    this.attachIPCListeners();
  },


  /**
   * getPartition is used to get the partition.
   * It tries to get the activepartition,
   * If not available, it asks the controller for new partition
   * @return {UUID} the partition id.
   */

  getPartition: function getPartition() {
    return this.meta.getActivePartition() || this.controller.getNewPartition();
  },


  /**
   * attachIPCListeners is used to attach the ipc listeners for the shell.
   * 1. shell-loaded
   * 2. electronWindowMessage
   * 3. shellMessage
   */
  attachIPCListeners: function attachIPCListeners() {

    // This will be fired when the current shell will be loaded,
    // after which we loads the view based using the loadView function
    ipcRenderer.on('shell-loaded', this.handleShellLoaded);

    // This is used to Proxy the electonWindowMessage from main to view
    // Main -> Shell -> View
    ipcRenderer.on('electronWindowMessage', this.proxyElectronMessage);

    // This is used to handle any messages purely handle inside shell
    // this can be triggered from either
    // Usage, both main and view
    // ipc.send('shellMessage', ...)
    ipcRenderer.on('shellMessage', this.handleMessageInShell);
  },


  /**
   * proxyElectronMessage
   * Is is used to send all the IPC messages received from mainprocess to the view.
   * @param {IPC~Event} event the event object from ipc
   * @param {*} message the message to be forwarded
   */

  proxyElectronMessage: function proxyElectronMessage(event, message) {
    var view = this.getView();

    // Send message only if the view is available.
    view && view.send('electronWindowMessage', message);
  },


  /**
   * handleShellLoaded
   * This will be used to load the view once the shell has been loaded in the browser window.
   * @param {IPC~Event} event the ipc event received
   * @param {*} message the message object from the main process.
   */

  handleShellLoaded: function handleShellLoaded(event, message) {
    this.loadView(message);
  },


  /**
   * handleMessageInShell
   * It is been used to handle things inside the shell.
   * @param {object} event ipc event
   * @param {object} opts the options to be handled.
   * @param {string} opts.type  this is used to know what type of handling needs to be done in shell
   */
  handleMessageInShell: function handleMessageInShell(event, opts) {
    var type = _.get(opts, 'type');
    if (type === 'toggleDevTools') {
      this.toggleDevTools();
    }
  },


  /**
   * attachShellIPCListeners
   * It is used to attach the listeners to the shell.
   * usage would be from the view
   * ipcRenderer.sendToHost from the renderer will reach hear.
   * @param {HTML~Node} view the webview on which the listerner needs to be attached.
   */

  attachShellIPCListeners: function attachShellIPCListeners(view, opts) {
    var _this = this;

    view.addEventListener('ipc-message', function (event) {
      var eventType = event.channel && event.channel.type;
      switch (eventType) {
        case _shellActions.ADD_USER:
          _this.loginUser(event.channel);
          break;
        case _shellActions.REMOVE_USER:
          _this.logoutUser(event.channel);
          break;
        case _shellActions.ADD_NEW_USER:
          _this.addNewUser();
          break;
        case _shellActions.SWITCH_USER:
          _this.switchUser(event.channel.id);
          break;
        case _shellActions.CANCEL_USER_LOGIN:
          _this.cancelUserLogin();
          break;
        case _shellActions.GET_LOGGEDIN_USERS:
          _this.sendUsersDataToRenderer();
          break;
        case _shellActions.SEND_TO_MAIN:
          _this.sendToMainProcess(event);
          break;
        case _shellActions.VIEW_READY:
          _this.initializeView(view, opts);
          break;
        default:
          break;
      }
    });
  },


  /**
   * attachViewListener used to attach the dom ready listener for the webview.
   * @param {HTML~Node} view the webview for which it needs to be attached
   * @param {object} opts options
   */

  attachViewListener: function attachViewListener(view) {

    // Stops navigation inside webview.
    view.addEventListener('will-navigate', function (e) {
      e.preventDefault();
    });

    // Stops the programatical navigation.
    view.addEventListener('did-navigate-in-page', function (e) {
      e.preventDefault();
    });

    // Proxy the focus received by the shell to the view,
    // This is a hacky behaviour we are doing, (https://github.com/electron/electron/issues/5900#issuecomment-224174095)
    // Helps in getting the focus back to the view when navigated by Alt+Tab

    window.addEventListener('focus', function () {
      view.focus();
    });
  },


  /**
   * createView is responsible for creating a new webview element
   * and replace that with the existing webview element.
   */
  createView: function createView() {
    var newView = document.createElement('webview'),
        body = document.querySelector('body');
    body.replaceChild(newView, this.getView());
  },


  /**
   * Gets the webview node from the document
   * @function getView
   * @returns {HTMLNode} webview htmlnode.
   */
  getView: function getView() {
    return document.querySelector('webview');
  },


  /**
   * setViewAttributes
   * Attachs the default attributes needed for a view.
   * @param {HTML~NODE} view the webview HTML node.
   * @param {Object} opts  the options object which holds the partition id and type of the view
   * @param {string=requester} opts.type the type of the view.
   * @param {UUID} partitionId the partitionId for which the view belongs to.
   */

  setViewAttributes: function setViewAttributes(view, opts) {
    var type = opts.type || 'requester';

    // Make the view covers the entire window
    view.setAttribute('style', 'width: 100%; height: 100%');

    // Node integration should be on to access the node process.
    view.setAttribute('nodeintegration', true);

    // Web security for CORS
    view.setAttribute('disablewebsecurity', true);

    // If we are loading the webview in default partition, we don't need to provide the partition info
    if (opts.partitionId !== _shellConstants.DEFAULT_PARTITION) {
      view.setAttribute('partition', 'persist:' + opts.partitionId);
    }

    // Source should be set always at the end.
    view.setAttribute('src', _shellConstants.HTML_MAP[type]);
  },


  /**
   * sendUserDataToRenderer
   * Fires the updateLoggedinUsers event to the renderer.
   */
  sendUsersDataToRenderer: function sendUsersDataToRenderer() {

    var view = this.getView();

    if (_.isEmpty(view) || !_.isFunction(view.send)) {
      return;
    }
    view.send('electronWindowMessage', {
      name: 'updateLoggedinUsers',
      data: _.mapValues(this.controller.getUsers(), function (user) {
        return _.pick(user, ['id', 'name', 'email', 'username_email']);
      })
    });
  },


  /**
   * addNewUser
   * 1. Creates a new view
   * 2. loads the view in a new partition.
   */

  addNewUser: function addNewUser() {
    this.createView();
    this.loadView({
      partitionId: this.controller.getNewPartition(),
      newUser: true
    });
  },


  /**
   * loginUser
   * We need to do the following things to login an user.
   * 1. associate user and partitions
   * 2. send the user logged in information to renderer
   * 3. sets the current userid as the active user it.
   * @param {object} userData the userdata to which the partition needs to be logged in
   */

  loginUser: function loginUser(userData) {
    // Associate user and the partition.
    this.controller.associateUserAndPartition(userData, this.getPartition());

    // Send information to the renderer
    this.sendUsersDataToRenderer();

    // get the userId from the data.
    var userId = _shellUtils2.default.getUserIdfromData(userData);

    // Add to last_login_user
    this.meta.setLastActiveUser(userId);
  },


  /**
   * logoutUser
   * We need to do the following things to logout an user.
   * 1. dis-associate user from partition
   * 2. gets the next user to switch  and switch it if needed.
   * 3. sends the users information to the renderer.
   * @param {object} userData the userdata to which the partition needs to be logged out
   */

  logoutUser: function logoutUser(userData) {

    // dis-associate user and the partition
    this.controller.disAssociateUserAndPartition(userData);

    var userToSwitch = this.controller.getRecentUser();

    if (userToSwitch) {
      this.switchUser(userToSwitch);
    } else {

      // nothing can be done.
    }
    this.sendUsersDataToRenderer();
  },


  /**
   * switchUser
   * We need to do the following things to login an user.
   * 1. dis-associate user from partition
   * 2. gets the next user to switch  and switch it if needed.
   * 3. sends the users information to the renderer.
   * @param {string} userId the user to which we need to switch
   */

  switchUser: function switchUser(userId) {
    var partitionId = this.controller.getPartitionForUser(userId);

    // Bail out if,
    // 1. is not a logged in user
    // 2. Empty partitionId
    if (!_shellUtils2.default.isUserLoggedIn(userId) || _.isEmpty(partitionId)) {
      return;
    }

    // Creates a new Shell
    this.createView();

    // Load the view into the shell
    this.loadView({
      partitionId: partitionId,
      switchUser: true
    });

    // sets the last active users as the current switched user.
    this.meta.setLastActiveUser(userId);
  },


  /**
   * cancelUserLogin will take to the last login or the recent login user.
   */

  cancelUserLogin: function cancelUserLogin() {
    this.switchUser(this.meta.getLastActiveUser());
  },


  /**
   * loadViewAttributes is used to attach the attributes and listeners to the view.
   * @param {HTML~Node} view the webview to which the listeners and attach the attributes
   * @param {object} opts options for the view.
   */

  loadViewAttributes: function loadViewAttributes(view, opts) {
    this.attachViewListener(view, opts);
    this.attachShellIPCListeners(view, opts);
    this.setViewAttributes(view, opts);
    this.meta.setActivePartition(opts.partitionId);
  },


  /**
   * loads the view into the shell based on the type provided.
   * @function loadView
   * @param {object} opts - The options for the new window to be created
   * @param {string} opts.id -  The id of the window loaded into the view
   * @param {string} [opts.type=requester] - The type of the window to be loaded in the view
   * @param {object=} opts.testAttr - This will be passed to runner window to select the collection / folder
   */
  loadView: function loadView(opts) {
    var _this2 = this;

    opts.partitionId = opts.partitionId || this.getPartition();
    opts.type = opts.type || 'requester';

    var view = this.getView();
    if (opts.newUser) {
      this.cleanPartition(opts.partitionId, function () {
        _this2.loadViewAttributes(view, opts);
      });
    } else {
      this.loadViewAttributes(view, opts);
    }
  },


  /**
   * sendToMainProcess is used to send the information to the mainprocess from the view
   * @param {IPC~Event} event the ipc event received from the view
   */

  sendToMainProcess: function sendToMainProcess(event) {
    ipcRenderer.send.apply(ipcRenderer, [event.channel.name].concat((0, _toConsumableArray3.default)(event.args)));
  },
  initializeView: function initializeView(view, opts) {
    var type = opts.type;

    if (!opts.switchUser && !opts.newUser) {
      if (_shellConstants.WINDOW_EVENTS_MAP[type] === 'setWindowIds') {
        this.windowMessage = opts;
      }
    }

    view.send('electronWindowMessage', {
      name: _shellConstants.WINDOW_EVENTS_MAP[type],
      data: _.assign({}, opts.switchUser || opts.newUser ? this.windowMessage : opts, { partitionId: opts.partitionId })
    });

    if (type === 'runner') {
      view.send('setTestRunnerAttrs', opts.testAttr);
    } else {
      this.meta.setActivePartition(opts.partitionId);
      this.sendUsersDataToRenderer();
    }
  },


  /**
   * cleanPartition
   * wipes out
   *  1. clean local session in the partition
   *  2. clean cookies in cookies partition
   * in the storage.
   * @param {UUID} partitionId, the partition id for which the session needs to cleaned.
   * @param {function} cb, this will be called after the partion has been cleaned.
   */

  cleanPartition: function cleanPartition(partitionId, cb) {
    var _this3 = this;

    this.cleanSessionStorage(partitionId, function () {
      _this3.cleanCookiesStorage(partitionId, cb);
    });
  },


  /**
   * cleanSessionStorage
   * wipes out
   *  1. LocalStorage
   *  2. Indexed db
   * in the storage.
   * @param {UUID} partitionId, the partition id for which the session needs to cleaned.
   * @param {function} cb, this will be called after the partion has been cleaned.
   */

  cleanSessionStorage: function cleanSessionStorage(partitionId, cb) {
    var persistPartition = 'persist:' + partitionId;

    if (partitionId === _shellConstants.DEFAULT_PARTITION) {
      persistPartition = '';
    }

    // Gets the session for the partition provided
    var partitionSession = session.fromPartition(persistPartition);

    // clean and call the cb function.
    partitionSession.clearStorageData([_shellConstants.PARTITIONS_STORE.INDEXEDDB, _shellConstants.PARTITIONS_STORE.LOCALSTORAGE], cb);
  },


  /**
   * cleanCookiesStorage
   * wipes out the cookies store in the partition.
   * @param {UUID} partitionId, the partition id for which the session needs to cleaned.
   * @param {function} cb, this will be called after the partion has been cleaned.
   */

  cleanCookiesStorage: function cleanCookiesStorage(partitionId, cb) {
    var cookiePartition = '' + _shellConstants.DEFAULT_COOKIE_PARTITION + partitionId;

    if (partitionId === _shellConstants.DEFAULT_PARTITION) {
      cookiePartition = _shellConstants.DEFAULT_COOKIE_PARTITION;
    }

    // Gets the session for the partition provided
    var cookiesSession = __webpack_require__(39).remote.session.fromPartition(cookiePartition);

    // clean and call the cb function.
    cookiesSession.clearStorageData([_shellConstants.PARTITIONS_STORE.COOKIES], cb);
  },


  /**
   * toggleDevTools it is used to open / close the devtools of the current view.
   */
  toggleDevTools: function toggleDevTools() {
    var view = this.getView();
    if (view.isDevToolsOpened()) {
      view.closeDevTools();
    } else {
      view.openDevTools();
    }
  }
};

module.exports = sh;

/***/ }),

/***/ 2768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _users = __webpack_require__(2769);

var _users2 = _interopRequireDefault(_users);

var _partitions = __webpack_require__(2770);

var _partitions2 = _interopRequireDefault(_partitions);

var _shellUtils = __webpack_require__(1048);

var _shellUtils2 = _interopRequireDefault(_shellUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shellController = {

  /**
   * Holds the whole reference of the partitions.
   */
  partitions: _partitions2.default,

  /**
   * Holds the whole reference of the users.
   */
  users: _users2.default,

  /**
   * It is been called to initialize the partitions and users defaults from the localstorage
   */
  init: function init() {
    this.partitions.init();
    this.users.init();
    this.runIntegrity();
  },


  /**
   * runIntegrity will run on the data we have,
   * we are considering the partions as the source of truth here and removing the extra users
   * 1. gets the userId in partitions
   * 2. remove the other users from the users map.
   */
  runIntegrity: function runIntegrity() {

    // runs integrity
    var partitionsMap = this.partitions.getValue(),
        associatedUsers = _.map(_.values(partitionsMap), 'userId'),
        usersList = _.keys(this.users.getValue());

    this.users.removeUsers(_.difference(usersList, associatedUsers));
  },


  /**
   * associateUserAndPartition
   * This been used to do the following things.
   * 1. Add the user to the users dataset
   * 2. Associate partition to the user
   * 3. Associate user to the partition
   * @param {Object} userData the userData to be associated
   */

  associateUserAndPartition: function associateUserAndPartition(userData, partitionId) {
    var userId = _shellUtils2.default.getUserIdfromData(userData);

    // Bail out if,
    // 1. is not a logged in user
    // 2. Empty partitionId
    if (!_shellUtils2.default.isUserLoggedIn(userId) || _.isEmpty(partitionId)) {
      return;
    }

    // Add the user information first.
    this.users.addUser(userData);

    // Associate the parttion -> the user
    this.users.associatePartitionToUser(userId, partitionId);

    // Associate the user -> the partition
    this.partitions.associateUserToPartition(partitionId, userId);
  },


  /**
   * disAssociateUserAndPartition
   * This been used to do the following things.
   * 1. remove the user to the users dataset
   * 2. dis-associate partition to the user
   * 3. dis-associate user to the partition
   * @param {String} userId the user id for which the disassociation needs to be happen
   */

  disAssociateUserAndPartition: function disAssociateUserAndPartition(userData) {
    var userId = _shellUtils2.default.getUserIdfromData(userData),
        partitionId = this.getPartitionForUser(userId);

    // Bail out if,
    // 1. is not a logged in user
    // 2. Empty partitionId
    if (!_shellUtils2.default.isUserLoggedIn(userId) || _.isEmpty(partitionId)) {
      return;
    }

    // dis-associate the user -> the partition
    this.partitions.disAssociateUserToPartition(partitionId, userId);

    // remove the user information first.
    this.users.removeUser(userId);
  },


  /**
   * proxies the getNewPartition from the partitions module
   * @return {UUID} partition id
   */

  getNewPartition: function getNewPartition() {
    return this.partitions.getNewPartition();
  },


  /**
   * It gets the recent loggedin user from the users.
   * return {String=} userId of the recent user or null.
   */

  getRecentUser: function getRecentUser() {
    var usersMap = this.users.getValue(); // Get the update user value to switch to new user.

    // If the hash has users available to switch,
    if (!_.isEmpty(usersMap)) {
      return this.users.getRecentUser();
    }

    // if the map is empty, return null.
    return null;
  },


  /**
   * getUsers
   * Used to get the users from the cache
   * @return {Object} users object
   */

  getUsers: function getUsers() {
    return this.users.getValue();
  },


  /**
   * getPartitionForUser
   * It is used to get the partitionId associated with the user
   * @param {String} id the user_id for which the partition needs to be provided.
   * @return {UUID=} the uuid of the partition associated with the user, if no partition is provided it returns undefined.
   */

  getPartitionForUser: function getPartitionForUser(id) {
    return this.users.getPartitionForUser(id) || this.partitions.getNewPartition();
  }
};

module.exports = shellController;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 2769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _dbService = __webpack_require__(1603);

var _dbService2 = _interopRequireDefault(_dbService);

var _shellUtils = __webpack_require__(1048);

var _shellUtils2 = _interopRequireDefault(_shellUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DB_KEY = 'users';

var users = {

  /**
   * Initialize function which loads the users information from localStorage.
   */
  init: function init() {
    this.setValue(_dbService2.default.getData(DB_KEY));
  },


  /**
   * getValue
   * Getter function for the value property.
   * @return {Object} the localstorage value
   */
  getValue: function getValue() {
    return _dbService2.default.getData(DB_KEY);
  },


  /**
   * setValue
   * Setter function for the value property.
   * @param {Object} obj The object to be set to the value property.
   */
  setValue: function setValue(obj) {
    // Update the localStorage on the changes made.
    _dbService2.default.setData(DB_KEY, obj);
  },


  /**
   * associatePartitionToUser
   * @param {String} id the user id to which the partition needs to be associated
   * @param {UUID} partitionId the partitioon id which needs to be associated with the user
   */
  associatePartitionToUser: function associatePartitionToUser(id, partitionId) {
    var idStr = _.toString(id);

    // Bail out if the id or partitionId is not available.
    if (!_shellUtils2.default.isUserLoggedIn(idStr) || _.isEmpty(partitionId)) {
      return;
    }

    // Get the users available.
    var usersObj = this.getValue();

    // Associate the partitionId by adding partitionId property to user object.
    if (!_.isEmpty(usersObj[idStr])) {
      _.assign(usersObj[idStr], { partitionId: partitionId });
    }

    // updates the value
    this.setValue(usersObj);
  },


  /**
   * getPartitionForUser
   * It is used to get the partitionId associated with the user
   * @param {String} id the user_id for which the partition needs to be provided.
   * @return {UUID=} the uuid of the partition associated with the user, if no partition is provided it returns undefined.
   */

  getPartitionForUser: function getPartitionForUser(id) {
    var value = this.getValue();
    return _.get(value, [_.toString(id), 'partitionId']);
  },


  /**
   * getRecentUser
   * get the recently added user sorted using the lastUpdated time
   * @return {String} user_id of the user whom needs to be switched to.
   */
  getRecentUser: function getRecentUser() {
    var usersObj = this.getValue();
    return _.get(_.minBy(_.values(usersObj), function (user) {
      return user.lastUpdated;
    }), 'id');
  },


  /**
   * addUser
   * adds the user to the data set and also includes the lastUpdated time for it.
   * @param {Object} data the user data to be added with the hash
   */

  addUser: function addUser(data) {
    // Move user_id to id if the id is not available.
    // Add last updated time key also.
    _.assign(data, !_.has(data, 'id') ? { id: data.user_id } : {}, { lastUpdated: new Date() });

    // Get the users available.
    var usersObj = this.getValue();

    // adds the user from the users object.
    usersObj[data.id] = data;

    // updates the value
    this.setValue(usersObj);
  },


  /**
   * removeUser
   * Which ideally removes the user from the users list.
   * @param {String} id the user id to which the partition needs to be dis-associated
   */
  removeUser: function removeUser(id) {
    var idStr = _.toString(id);

    // Bail out if the id is not available.
    if (!_shellUtils2.default.isUserLoggedIn(idStr)) {
      return;
    }

    // Get the users available.
    var usersObj = this.getValue();

    // removes the user from the users object.
    usersObj = _.omit(usersObj, [idStr]);

    // updates the value
    this.setValue(usersObj);
  },


  /**
   * removeUsers
   * Which ideally removes the list of users from the users list.
   * @param {array} usersList the user id list which all to be removed.
   */

  removeUsers: function removeUsers(usersList) {
    // Bail out if the id is not available.
    if (_.isEmpty(usersList) || !_.isArray(usersList)) {
      return;
    }

    // Get the users available.
    var usersObj = this.getValue();

    // removes the user from the users object.
    usersObj = _.omit(usersObj, usersList);

    // updates the value
    this.setValue(usersObj);
  }
};

module.exports = users;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 2770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _dbService = __webpack_require__(1603);

var _dbService2 = _interopRequireDefault(_dbService);

var _shellUtils = __webpack_require__(1048);

var _shellUtils2 = _interopRequireDefault(_shellUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuidV4 = __webpack_require__(512);

var DEFAULT_PARTITION = 'default';

var DB_KEY = 'partitions';

var partitions = {

  /**
   * Initialize function which loads the partitions information from localStorage.
   */
  init: function init() {
    this.setValue(_dbService2.default.getData(DB_KEY));
  },


  /**
   * getValue
   * Getter function for the value property.
   * @return {Object} the cloned localstorage
   */
  getValue: function getValue() {
    return _dbService2.default.getData(DB_KEY);
  },


  /**
   * setValue
   * Setter function for the value property.
   * @param {Object} obj The object to be set to the value property.
   */
  setValue: function setValue(obj) {
    // Update the localStorage on the changes made.
    _dbService2.default.setData(DB_KEY, obj);
  },


  /**
   * getNewPartition
   * 1. Will check for any empty partition available
   * 2. If a empty partition available, it returns it
   * 3. Else it creates a new partitionId(UUID)
   * 4. Adds the entry in the localStorage
   * 5. send the ID for work.
   * @return {UUID} partitionId
   */
  getNewPartition: function getNewPartition() {
    var partitionsObj = this.getValue(),
        emptyPartition = _.findKey(partitionsObj, function (part) {
      return _.isEmpty(part.userId);
    });

    if (!_.isEmpty(emptyPartition)) {
      // returns an existing empty partition.
      return emptyPartition;
    }

    // Reaching here means there is no empty partitions available.
    // so, we are going to create one and adds to the storage.

    var newPartitionId = _.isEmpty(partitionsObj) ? DEFAULT_PARTITION : uuidV4();
    partitionsObj[newPartitionId] = { id: newPartitionId };

    // updates the value
    this.setValue(partitionsObj);

    // Returns the new partitionId
    return newPartitionId;
  },


  /**
   * associateUserToPartition is been used to associate an user id with a partition.
   * @param {String} id the UUID of the partition
   * @param {String} userId user id to which the partition to be associated.
   */
  associateUserToPartition: function associateUserToPartition(id, userId) {
    var userIdStr = _.toString(userId);

    // Bail out if the userId or id is not available.
    if (!_shellUtils2.default.isUserLoggedIn(userIdStr) || _.isEmpty(id)) {
      return;
    }

    // Get the partitions available.
    var partitionsObj = this.getValue();

    // Associate the userId by adding userId property to partition object.
    if (!_.isEmpty(partitionsObj[id])) {
      _.assign(partitionsObj[id], { userId: userIdStr });
    }

    // updates the value
    this.setValue(partitionsObj);
  },


  /**
   * disAssociateUserToPartition is been used to dis-associate an user id with a partition.
   * @param {UUID} id the UUID of the partition
   * @param {String} userId user id from which the partition to be dis-associated.
   */
  disAssociateUserToPartition: function disAssociateUserToPartition(id, userId) {
    var userIdStr = _.toString(userId);

    // Bail out if the userId or id is not available.
    if (!_shellUtils2.default.isUserLoggedIn(userIdStr) || _.isEmpty(id)) {
      return;
    }

    // Get the partitions from the localStorage using dbService.getData.
    var partitionsObj = this.getValue();

    // Dis-associate the userId by removing userId property from partition object.
    if (!_.isEmpty(partitionsObj[id])) {
      partitionsObj[id] = _.omit(partitionsObj[id], ['userId']);
    }

    // Updates the value
    this.setValue(partitionsObj);
  }
};

module.exports = partitions;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 2771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var shellMeta = {

  /**
   * lastActiveUser is the last successful logged in user in the application.
   */
  lastActiveUser: null,

  /**
   * activePartition is the current active partition in the system.
   */
  activePartition: null,

  /**
   * init, initialize function to load the data from the localstorage.
   */
  init: function init() {
    this.loadFromDb();
  },


  /**
   * loadFromDb, it loads the following properties from the localstorage
   * 1. lastActiveUser
   * 2. activePartition
   */

  loadFromDb: function loadFromDb() {
    this.lastActiveUser = this.dbService.get('lastActiveUser');
    this.activePartition = this.dbService.get('activePartition');
  },


  /**
   * getLastActiveUser
   * it returns the last active user in the application
   * @return {string=} This would return the last active user if available or else returns null.
   */

  getLastActiveUser: function getLastActiveUser() {
    return this.lastActiveUser;
  },


  /**
  * setLastActiveUser
  * it sets the last active user in the cache and in memory
  * @param {string} id, the user id to be stored as last active user
  */

  setLastActiveUser: function setLastActiveUser(id) {
    // Store in the local cache
    this.lastActiveUser = id;

    // updates the localstorage immediately.
    this.dbService.set('lastActiveUser', id);
  },


  /**
   * getActivePartition
   * it returns the active partition in the application
   * @return {string=} This would return the active partition
   */

  getActivePartition: function getActivePartition() {
    return this.activePartition;
  },


  /**
   * setActivePartition
   * it sets the current active partition in the cache and in memory
   * @param {string} id, the partition id which is currently active
   */
  setActivePartition: function setActivePartition(id) {
    // Store in the local cache
    this.activePartition = id;

    // updates immediately in the localStorage
    this.dbService.set('activePartition', id);
  },


  /**
   * dbService used to provide store and get data out of localStorage.
   */
  dbService: {

    /**
     * get the value of localStorage of a particular key
     * if it is available, it returns the value, else return null.
     * @param {string=} key the key of the data
     */

    get: function get(key) {
      var item = localStorage.getItem(key);
      if (_.isEmpty(item) || item === 'undefined') {
        return null;
      }
      return item;
    },


    /**
     * set the value to localStorage for a particular key
     */

    set: function set(key, value) {
      localStorage.setItem(key, value);
    }
  }
};

module.exports = shellMeta;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ })

},[2765]);