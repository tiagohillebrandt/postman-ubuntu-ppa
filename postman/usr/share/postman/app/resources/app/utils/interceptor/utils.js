const _ = require('lodash'),
  fs = require('fs'),
  async = require('async'),
  request = require('request'),
  https = require('https'),
  windowManager = require('../../services/windowManager').windowManager,
  { getConfig } = require('../../services/AppConfigService'),
  { shell } = require('electron'),
  sh = require('shelljs'),
  INTERCEPTOR_DEPENDENCIES_DOWNLOAD_URL = getConfig('__WP_INTERCEPTOR_DEPENDENCIES_DOWNLOAD_URL__'), // channel specific
  interceptorId = getConfig('__WP_INTERCEPTOR_APP_ID__'), // channel specific
  manifestFilename = getConfig('__WP_INTERCEPTOR_MANIFEST_FILENAME__'), // channel specific
  osTypes = { // allowed types of OS i.e. MACOS/LINUX/WINDOWS
    MACOS: 'MACOS',
    LINUX: 'LINUX',
    WINDOWS: 'WINDOWS'
  };

var interceptorDependenciesManifest,
  currentOS,
  self;

/**
 *
 * fixed os-specific path to native messaging host location where manifest is added,
 * in case of windows, the manifest file can be located anywhere in the file system.
 * the native messaging host must create a registry key.
 *
 * Learn more: https://developer.chrome.com/apps/nativeMessaging
 */
const nativeMessagingHosts = {
    MACOS: '/Library/Application Support/Google/Chrome/NativeMessagingHosts/',
    LINUX: '/.config/google-chrome/NativeMessagingHosts/',
    WINDOWS: 'HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts\\'
  },

  /**
   *
   * Categorizing the installation and download errors into four major sub types based on their resolution steps.
   *
   * Note: This will be used to map the manual resolution steps mentioned in troubleshooting doc
   * Link: https://go.pstmn.io/interceptor-installation-troubleshooting
   */
  errorSubTypes = {
    chromeNotInstalled: 'CHROME_NOT_INSTALLED',
    internetConnectivity: 'INTERNET_CONNECTIVITY',
    registryAccessNeeded: 'REGISTRY_ACCESS_NEEDED',
    permissionRequired: 'FILE_PERMISSIONS_REQUIRED'
  };

/**
 *
 * returns the current OS where process is running.
 * returns null if the  current OS is not present in osTypes
 * @returns {osTypes} returns either MACOS/LINUX/WINDOWS or null
 *
 */
function getCurrentOS () {
  switch (process.platform) {
    case 'darwin':
      return osTypes.MACOS;
    case 'win32':
    case 'win64':
      return osTypes.WINDOWS;
    case 'linux':
      return osTypes.LINUX;
    default:
      return null;
  }
}

currentOS = getCurrentOS();

self = exports.utils = {

  currentOS, // as it's used at other places

  /**
   *
   * returns current user's home directory
   */
  getUserHome: function () {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
  },

  /**
   *
   * used to fetch JSON containing platform specific URLs/Hashes to download Interceptor Dependencies
   * @param {Function} callback
   * @returns {Object} a JSON object containing platform specific URLs/Hashes to download Interceptor Dependencies
   */
  fetchInterceptorDependenciesManifest: function (callback) {
    request(INTERCEPTOR_DEPENDENCIES_DOWNLOAD_URL, function (error, response) {
      if (error) {
        pm.logger.error('Interceptor ~ Dependencies: Download failed', error);
        var err = new Error('Error occurred while downloading Interceptor Dependencies');
        err.type = 'download';
        err.subType = errorSubTypes.internetConnectivity;
        console.log('Error occurred while downloading Interceptor Dependencies: ', error);
        return callback(err);
      }
      try {
        interceptorDependenciesManifest = JSON.parse(response.body).platform[currentOS];
      }
      catch (err) {
        pm.logger.error('Interceptor ~ Dependencies: Unable to parse JSON', err);
        err.type = 'download';
        return callback(err);
      }
      return callback(null, interceptorDependenciesManifest);
    });
  },

  /**
   *
   * Compares the expected hash and computed hash for given file
   * used to check integrity for downloaded interceptor dependencies
   * returns true if expected and computed hash match otherwise false
   *
   * @param {String} expectedSHA256Hash hash received from Interceptor Bridge dependency JSON
   * @param {String} filePath path of file whose hash to be compared
   * @param {Function} callback
   * @returns {Boolean} true / false
   */
  compareSHA256Hash: function (expectedSHA256Hash, filePath, callback) {
    var computedSHA256Hash = require('crypto').createHash('sha256');
    try {
      var stream = fs.ReadStream(filePath);
    }
    catch (err) {
      console.log('Error occurred while creating stream');
      return callback(err);
    }

    stream.on('data', function (data) {
      computedSHA256Hash.update(data);
    });

    stream.on('end', function () {
      computedSHA256Hash = computedSHA256Hash.digest('hex');
      if (computedSHA256Hash === expectedSHA256Hash) {
        console.log('Computed hash is matched successfully');
        return callback(null, true);
      }
      else {
        console.log('Computed hash and expected hash are not same');
        return callback(null, false);
      }
    });

    stream.on('error', function (err) {
      console.log('Error occurred while generating hash using SHA256', err);
      return callback(new Error('Error occurred while generating hash'));
    });
  },

  /**
   *
   * creates `~/Downloads` directory if not present.
   * used in case of macOS while downloading Node installer
   * it gets downloaded in `~/Downloads` folder
   *
   * @param {Function} callback
   * @returns {String} absolute path to `Downloads` folder
   */
  createDownloadsDirectory: function (callback) {
    // Node installer will be downloaded at this path
    var directoryPath = self.getUserHome() + '/Downloads/';

    // creating `~/Downloads` folder, if it doesn't exist
    fs.stat(directoryPath, function (err) {
      if (err) {
        if (err.code === 'ENOENT') {
          // folder not found, need to create
          fs.mkdir(directoryPath, (err) => {
            if (err) {
              pm.logger.error('Interceptor ~ Node: Unable to create Downloads directory', err);
              err.type = 'installation';
              err.subType = errorSubTypes.permissionRequired;
              err.message = 'Error occurred in creating ~/Downloads folder';
              console.log('Error occurred in creating ~/Downloads folder');
              return callback(err);
            }
            return callback(null, directoryPath);
          });
        }
        else {
          pm.logger.error('Interceptor ~ Node: Unable to access Downloads directory', err);
          err.type = 'installation';
          err.subType = errorSubTypes.permissionRequired;
          err.message = 'Error occurred while checking existence of ~/Downloads folder';
          console.log('Error occurred while checking existence of ~/Downloads folder', err);
          return callback(err);
        }
      }
      else {
        // `~/Downloads` folder exists, checking for write access
        fs.access(directoryPath, fs.constants.W_OK, (err) => {
          if (err) {
            pm.logger.error('Interceptor ~ Node: Unable to access Downloads directory', err);
            console.log('Do not have write access for ~/Downloads folder');
            err.type = 'installation';
            err.subType = errorSubTypes.permissionRequired;
            err.message = 'Error occurred while accessing ~/Downloads folder';
            return callback(err);
          }
          else {
            return callback(null, directoryPath);
          }
        });
      }
    });
  },

  /**
   *
   * fetches JSON containing URLs (along with hashes) to download
   * Interceptor Dependencies if it's not already fetched
   * otherwise returns the node installer URLs and SHA256 hash
   * from already fetched Interceptor Dependencies manifest
   *
   * @param {Function} callback
   * @returns an object containing download URL and SHA256 hash for Node installer,
   * which is used to download node installer and check its integrity
   */
  getNodeInstallerDependencies: function (callback) {

    if (!interceptorDependenciesManifest) {
      self.fetchInterceptorDependenciesManifest((err, res) => {
        if (err) {
          return callback(err);
        }
        return callback(null, res.nodeInstaller);
      });
    }
    else {
      return callback(null, interceptorDependenciesManifest.nodeInstaller);
    }
  },

  /**
   *
   * It's called with node installer dependencies (i.e. url, sha256hash),
   * downloads the node installer at `~/Downloads` folder
   *
   * Note: In main, async v1.5.x uses callback as first argument
   *
   * @param {Function} callback
   * @param {Object} dependencies contains download URL and SHA256 hash for node installer
   * @returns {String} path to the downloaded node installer
   */
  downloadNodeInstaller: function (callback, dependencies) {
    // extracting the filename from URL
    var fileName = dependencies.installationDependencies.downloadURL.substring(dependencies.installationDependencies.downloadURL.lastIndexOf('/') + 1),
      file,
      filePath,
      req;
    if (!fileName) {
      fileName = 'node_installer.pkg'; // default filename
    }

    filePath = dependencies.downloadDirectoryPath + fileName;

    req = https.get(dependencies.installationDependencies.downloadURL, function (res) {
      console.log('Downloading Node installer...');
      if (res.statusCode === 200) {
        try {
          file = fs.createWriteStream(filePath);
          res.pipe(file);
        }
        catch (err) {
          pm.logger.error('Interceptor ~ Node: Unable to create write stream', err);
          err.type = 'installation';
          err.subType = errorSubTypes.permissionRequired;
          file.end();
          return callback(err);
        }
        file.on('finish', function () {
          console.log('Node is downloaded at location: ', filePath);
          file.end();
          return callback(null, filePath);
        });
      }
      else {
        file.end();
        pm.logger.error('Interceptor ~ Node: Download failed', res.statusCode);
        var err = new Error('Error occurred while downloading Node installer');
        err.type = 'download';
        err.subType = errorSubTypes.internetConnectivity;
        return callback(err);
      }
    });
    req.on('error', function (err) {
      pm.logger.error('Interceptor ~ Node: Download failed', err);
      console.log('Error occurred while downloading Node installer');
      err.type = 'download';
      err.subType = errorSubTypes.internetConnectivity;
      return callback(err);
    });
  },


  /**
   *
   * checks for integrity of node installer,
   * returns true if integrity check is success,
   * returns a `download` error if check fails and removes corrupted download
   *
   * @param {String} sha256hash expected hash received in interceptor dependencies manifest
   * @param {String} filePath path to the  node installer
   * @param {Function} callback
   */
  checkIntegrityForDownloadedNodeInstaller: function (sha256hash, filePath, callback) {
    try {
      self.compareSHA256Hash(sha256hash, filePath, (err, integrityCheckResult) => {
        if (err) {
          pm.logger.error('Interceptor ~ Node: Integrity check failed', err);
          err.type = 'download';
          console.log('The integrity check for the Node installer failed');
          return callback(err);
        }
        else if (integrityCheckResult) {
          console.log('Node Installer is downloaded successfully');
          return callback(null, true);
        }
        else if (!integrityCheckResult) {
          pm.logger.error('Interceptor ~ Node: Integrity check failed');
          var err = new Error('The integrity check for the Node installer failed');
          err.type = 'download';
          console.log('The integrity check for the Node installer failed');
          return self.removeCorruptedDependency(err, filePath, callback);
        }
      });
    }
    catch (err) {
      pm.logger.error('Interceptor ~ Node: Download failed', err);
      err.type = 'download';
      err.subType = errorSubTypes.internetConnectivity;
      console.log('Error occurred while downloading the Node installer');
      return callback(err);
    }
  },

  /**
   *
   * registers a listener to check for existence of node for 2 minutes in interval of 2 sec
   * emits an event `nodeInstallationStatusUpdate: installationFinished` (2 sec after the node is found)
   * to notify renderer whether installation is finished or not
   */
  registerCheckNodeInstallationStatusListener: function () {
    var checkNodeInstallationStatusInterval = setInterval(function () {

      // sending installation finished event after 2 sec of wait
      self.checkNodeInstallationStatus((err, res) => {
        if (res.installed) {
          setTimeout(function () {
            windowManager.sendInternalMessage({
              'event': 'nodeInstallationStatusUpdate',
              'object': {
                status: 'installationFinished'
              }
            });
          }, 2000);

          clearInterval(checkNodeInstallationStatusInterval);
          clearTimeout(checkNodeInstallationStatusTimeout);
        }
      });
    }, 2000);

    // wait for max 2 mins for users to install node
    var checkNodeInstallationStatusTimeout = setTimeout(function () {
      windowManager.sendInternalMessage({
        'event': 'nodeInstallationStatusUpdate',
        'object': {
          status: 'installationNotFinished'
        }
      });
      console.log('Node installation is not finished');
      clearInterval(checkNodeInstallationStatusInterval);
    }, 2 * 60 * 1000);
  },

  /**
   *
   * Initiates node installation by opening the node installer if integrity checks are passed,
   * otherwise returns an `installation` error.
   * it also registers a listener to check if the node installation is finished or not
   *
   * @param {Function} callback
   * @param {Object} dependencies contains node installation dependencies (url, sha256 hash) and path to downloaded node installer
   */
  initiateNodeInstallation: function (callback, dependencies) {
    self.checkIntegrityForDownloadedNodeInstaller(dependencies.installationDependencies.sha256hash, dependencies.nodeInstallerPath, (err, res) => {
      if (err) {
        return callback(err);
      }
      if (res) {
        try {
          // integrity checked passed, waiting for installation to be finished
          windowManager.sendInternalMessage({
            'event': 'nodeInstallationStatusUpdate',
            'object': {
              status: 'downloadFinished'
            }
          });

          // opens the node installer
          shell.openItem(dependencies.nodeInstallerPath);
        }
        catch (err) {
          pm.logger.error('Interceptor ~ Node: Installation failed', err);
          err.type = 'installation';
          err.subType = errorSubTypes.permissionRequired;
          return callback(err);
        }

        // registering a listener to check installation is finished or not
        self.registerCheckNodeInstallationStatusListener();
      }
      return callback(null);
    });
  },

  /**
   *
   * checks for presence of node at,
   *
   * 1. '/usr/local/bin/node'
   * 2. '/usr/local/node'
   * 3. nvm based location ($NVM_BIN)
   *
   * @param {Function} callback
   * @returns {Object} contains installed: T/F, path to node
   *
   */
  checkNodeInstallationStatus: function (callback) {
    var nodePaths = [
      '/usr/local/bin/node',
      '/usr/bin/node'
    ],
    nvmVersionsPath,
    foundNodePath,
    majorVersion,
    result = {
      installed: false
    };

    // check for non-nvm or symlinked node binaries
    for (var index = 0; index < nodePaths.length; index++) {
      if (fs.existsSync(nodePaths[index])) {
        result = {
          installed: true,
          path: nodePaths[index]
        };
        return callback(null, result);
      }
    }

    // node not found at hard-coded locations
    // check for HOME/.nvm
    nvmVersionsPath = self.getUserHome() + '/.nvm/versions/node';
    async.waterfall([
      // 1. look for all the version folders in the nvmVersionsPath directory
      async.apply(fs.readdir, nvmVersionsPath),

      // 2. look for a compatible version, return node binary path if found
      (directories, cb) => {
        _.each(directories, (nodeVersion) => {
          // checking if major version of node is >= 6
          majorVersion = parseInt(nodeVersion.substring(1, nodeVersion.indexOf('.')));
          if (!isNaN(majorVersion) && majorVersion >= 6) {
            foundNodePath = nvmVersionsPath + '/' + nodeVersion + '/bin/node';
            if (fs.existsSync(foundNodePath)) {
              return cb(null, foundNodePath);
            }
          }

          // not checking for the else clause
          // because some other version folder might have node
        });
        return cb('No node installation found in ' + nvmVersionsPath);
      }
    ], (err, nodePath) => {
      if (err) {
        // no compatible version of node found, or no nvm exists
        result = { installed: false };
      }
      else {
        // found an nvm node binary :)
        result = {
          installed: true,
          path: nodePath
        };
      }
      callback(null, result);
    });
  },

  /**
   *
   * creates `$HOME/.postman/InterceptorBridge` directory for macOS, Linux
   * `%USERPROFILE%/.postman/InterceptorBridge` for Windows if it doesn't exist
   * @param {Function} callback
   * @returns {String} returns path of created InterceptorBridge directory
   */
  createPostmanInterceptorBridgeDirectory: function (callback) {
    var path = self.getUserHome(),
    folderName = 'InterceptorBridge',
    errObj;

    if (currentOS === 'MACOS') {
      path += '/.postman/';
    }
    else if (currentOS === 'WINDOWS') {
      path += '\\.postman\\';
    }
    else if (currentOS === 'LINUX') {
      path += '/.postman/';
    }
    else {
      console.log('Current OS is not supported');
      pm.logger.error('Interceptor ~ Bridge: Unsupported OS type');
      errObj = new Error('Current OS is not supported');
      errObj.type = 'installation';
      return callback(errObj);
    }

    // .postman folder does not exist
    if (!fs.existsSync(path)) {
      // creating .postman folder
      fs.mkdir(path, (err) => {
        if (err) {
          console.log('Error occurred while creating .postman directory');
          pm.logger.error('Interceptor ~ Bridge: Unable to create .postman directory', err);
          errObj = new Error('Error occurred while creating .postman directory');
          errObj.type = 'installation';
          errObj.subType = errorSubTypes.permissionRequired;
          return callback(errObj);
        }

        // creating InterceptorBridge folder
        fs.mkdir(path + folderName, (err) => {
          if (err) {
            console.log('Error occurred while creating InterceptorBridge folder');
            pm.logger.error('Interceptor ~ Bridge: Unable to create InterceptorBridge folder', err);
            errObj = new Error('Error occurred while creating InterceptorBridge folder');
            errObj.type = 'installation';
            errObj.subType = errorSubTypes.permissionRequired;
            return callback(errObj);
          }

          return callback(null, require('path').join(path, folderName));
        });
      });
    }
    else {
      // .postman folder exists, checking for InterceptorBridge folder
      if (!fs.existsSync(path + folderName)) {
        // creating InterceptorBridge folder if it doesn't exists
        fs.mkdir(path + folderName, (err) => {
          if (err) {
            console.log('Error occurred while creating InterceptorBridge folder: ', err.message);
            pm.logger.error('Interceptor ~ Bridge: Unable to create InterceptorBridge folder', err);
            errObj = new Error('Error occurred while creating InterceptorBridge folder: ', err.message);
            errObj.type = 'installation';
            errObj.subType = errorSubTypes.permissionRequired;
            return callback(errObj);
          }
          return callback(null, require('path').join(path, folderName));
        });
      }
      else {
        // Interceptor Bridge exists
        return callback(null, require('path').join(path, folderName));
      }
    }
  },

  /**
   *
   * returns the filename of InterceptorBridge for different OS
   * MACOS/LINUX: 'InterceptorBridge'
   * WINDOWS: 'InterceptorBridge.exe'
   * returns null for any OS other than these three
   *
   */
  getInterceptorBridgeFileName: function () {
    switch (currentOS) {
      case 'MACOS':
        return 'InterceptorBridge';
      case 'WINDOWS':
        return 'InterceptorBridge.exe';
      case 'LINUX':
        return 'InterceptorBridge';
      default:
        return null;
    }
  },

  /**
   *
   * downloads Interceptor Bridge at given filePath
   * throws an error if node is not found (only in case of macOS)
   *
   * checks integrity of downloaded interceptor bridge,
   * throws an error if integrity checks fail
   * and removes the corrupted download
   *
   * @param {Function} callback
   * @param {Object} dependencies contains interceptor bridge dependencies (URLs, sha56hashes),
   * absolute path to Interceptor Bridge directory, nodeInstalled status(T/F, path to node binary),
   * @returns {String} absolute path to the downloaded interceptor bridge
   */
  downloadInterceptorBridge: function (callback, dependencies) {
    var fileName,
      filePath,
      macOSActualFilePath,
      file,
      errObj;

    // first checking for node as it's required to execute InterceptorBridge in case of macOS
    if (!dependencies.nodeInstalledStatus.installed && currentOS === 'MACOS') {
      errObj = new Error('Node is required to execute Interceptor Bridge');
      errObj.type = 'nodeRequired';
      return callback(errObj);
    }

    fileName = self.getInterceptorBridgeFileName();
    if (!fileName) {
      return callback(new Error('Current OS is not supported'));
    }

    // absolute path to the Interceptor Bridge
    filePath = dependencies.interceptorBridgeDirectoryPath + '/' + fileName;

    if (currentOS === 'MACOS') {
      // the bridge is a .js file
      // we're creating a template to which the shebang line needs to be prepended

      // this is where the new file needs to be saved (after adding the shebang line)
      macOSActualFilePath = filePath;

      // this is where the template file is saved
      filePath += '.template';
    }

    // checking if the Interceptor Bridge already exists
    if (fs.existsSync(filePath)) {
      try {
        // in windows, unable to overwrite the existing bridge
        fs.unlinkSync(filePath);
      }
      catch (err) {
        // close chrome, process is already opened, these errors are added troubleshooting doc
        console.log('InterceptorBridge already exists. Please delete ' + filePath);
        pm.logger.error('Interceptor ~ Bridge: Unable to delete existing Interceptor Bridge', err);
        errObj = new Error(err);
        errObj.type = 'installation';
        errObj.subType = errorSubTypes.permissionRequired;
        return callback(errObj);
      }
    }

    try {
      file = fs.createWriteStream(filePath);
    }
    catch (err) {
      console.log('Error occurred in creating write stream to ' + filePath);
      pm.logger.error('Interceptor ~ Bridge: Unable to create write stream', err);
      errObj = new Error('Error occurred in creating write stream to ' + filePath);
      errObj.type = 'installation';
      errObj.subType = errorSubTypes.permissionRequired;
      return callback(errObj);
    }

    // downloading interceptor bridge from given download url
    var req = https.get(dependencies.interceptorDependencies.interceptorBridge.downloadURL, function (res) {
      console.log('Downloading Interceptor Bridge...');
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', function () {
          file.end();

          // checking for integrity of downloaded Interceptor Bridge
          self.compareSHA256Hash(dependencies.interceptorDependencies.interceptorBridge.sha256hash, filePath, (err, integrityCheckResult) => {
            if (err) {
              pm.logger.error('Interceptor ~ Bridge: Integrity check failed', err);
              err.type = 'download';
              return callback(err);
            }
            if (integrityCheckResult) {
              console.log('Integrity checks for InterceptorBridge have passed successfully');
              if (currentOS === 'MACOS') {
                // adding shebang line is required only in case of MACOS
                self.addShebangLineToInterceptorBridge(dependencies.nodeInstalledStatus, filePath, macOSActualFilePath, (err, res) => {
                  if (err) {
                    return callback(err);
                  }

                  try {
                    // making it an executable
                    fs.chmodSync(macOSActualFilePath, 0o755);

                    // emitting `downloadFinished` event to the renderer
                    windowManager.sendInternalMessage({
                      'event': 'interceptorBridgeInstallationStatusUpdate',
                      'object': {
                        status: 'downloadFinished'
                      }
                    });
                    return callback(null, macOSActualFilePath);
                  }
                  catch (error) {
                    console.log('Something went wrong while modifying the permission of InterceptorBridge');
                    pm.logger.error('Interceptor ~ Bridge: Unable to modify the permission of Interceptor Bridge', error);
                    error.type = 'installation';
                    error.subType = errorSubTypes.permissionRequired;
                    return callback(error);
                  }

                });
              }
              else {
                try {
                  // making it an executable
                  fs.chmodSync(filePath, 0o755);

                  windowManager.sendInternalMessage({
                    'event': 'interceptorBridgeInstallationStatusUpdate',
                    'object': {
                      status: 'downloadFinished'
                    }
                  });
                  console.log('Interceptor Bridge is downloaded at location: ', filePath);
                  return callback(null, filePath);
                }
                catch (err) {
                  console.log('Something went wrong while modifying the permission of InterceptorBridge');
                  pm.logger.error('Interceptor ~ Bridge: Unable to modify the permission of Interceptor Bridge', err);
                  errObj = new Error('Something went wrong while modifying the permission of InterceptorBridge');
                  errObj.type = 'installation';
                  errObj.subType = errorSubTypes.permissionRequired;
                  return callback(errObj);
                }
              }
            }
            else {
              console.log('Integrity check for Interceptor Bridge failed');
              pm.logger.error('Interceptor ~ Bridge: Integrity check failed');
              errObj = new Error('Integrity check for Interceptor Bridge failed');
              errObj.type = 'download';
              return self.removeCorruptedDependency(errObj, filePath, callback);
            }
          });
        });
      }
      else {
        pm.logger.error('Interceptor ~ Bridge: Download failed', res.statusCode);
        errObj = new Error('Error occurred while downloading InterceptorBridge');
        errObj.type = 'download';
        errObj.subType = errorSubTypes.internetConnectivity;
        return callback(errObj);
      }
    });
    req.on('error', function (err) {
      console.log('Error occurred while downloading InterceptorBridge from given URL');
      pm.logger.error('Interceptor ~ Bridge: Download failed', err);
      errObj = new Error('Error occurred while downloading InterceptorBridge from given URL');
      errObj.type = 'download';
      errObj.subType = errorSubTypes.internetConnectivity;
      return callback(errObj);
    });
  },

  /**
   *
   * adds shebang line (path to node binary) in the beginning of Interceptor Bridge JS file
   * required only in case of macOS as the Interceptor Bridge uses machine's node to execute itself
   * See this at: https://postmanlabs.atlassian.net/wiki/spaces/PRODOPS/pages/1651216733/Notarization+of+Interceptor+Bridge
   *
   * @param {Object} nodeInstalledStatus contains node path, installed: T/F
   * @param {String} interceptorBridgeTemplatePath path to the Interceptor Bridge executable template (without the shebang)
   * @param {String} interceptorBridgePath path where the Interceptor Bridge executable is to be saved
   * @param {Function} callback
   * @returns true if shebang line is added successfully otherwise returns an installation error
   */
  addShebangLineToInterceptorBridge: function (nodeInstalledStatus, interceptorBridgeTemplatePath, interceptorBridgePath, callback) {
    if (nodeInstalledStatus.installed) {
      var shebangLine = '#!' + nodeInstalledStatus.path,
        readStream,
        writeStream,
        errObj;

      try {
        if (fs.existsSync(interceptorBridgePath)) {
          fs.unlinkSync(interceptorBridgePath);
        }
        readStream = fs.createReadStream(interceptorBridgeTemplatePath);
        writeStream = fs.createWriteStream(interceptorBridgePath);
      }
      catch (err) {
        console.log('Error occurred while creating streams');
        pm.logger.error('Interceptor ~ Bridge: Unable to add shebang line', err);
        errObj = new Error('Error occurred while creating streams');
        errObj.type = 'installation';
        errObj.subType = errorSubTypes.permissionRequired;
        return callback(errObj);
      }

      // adding shebang line at the beginning of file
      writeStream.write(shebangLine + '\n');

      readStream.on('data', (chunk) => {
        writeStream.write(chunk);
      });
      readStream.on('end', () => {
        readStream.destroy();
        writeStream.end();
        console.log('Interceptor Bridge is downloaded at location: ', interceptorBridgePath);
        return callback(null, true);
      });
      readStream.on('error', function (err) {
        console.log('Error occurred while reading stream', err);
        pm.logger.error('Interceptor ~ Bridge: Unable to add shebang line', err);
        errObj = new Error('Something went wrong while reading stream');
        errObj.type = 'installation';
        errObj.subType = errorSubTypes.permissionRequired;
        return callback(errObj);
      });
    }
    else {
      errObj = new Error('Node is required to execute Interceptor Bridge');
      errObj.type = 'nodeRequired';
      return callback(errObj);
    }
  },

  /**
   *
   * creates manifest with Interceptor chrome extension Id
   * and path to Interceptor Bridge.
   * Learn more: https://developer.chrome.com/apps/nativeMessaging
   *
   * @param {Function} callback
   * @param {Object} manifestDependencies contains path to Interceptor Bridge executable
   */
  createManifest: function (callback, manifestDependencies) {
    var manifest = {
      'name': manifestFilename,
      'description': 'Native Messaging Host for Postman Native App <> Interceptor Integration',
      'path': manifestDependencies.interceptorBridgeFilePath,
      'type': 'stdio',
      'allowed_origins': ['chrome-extension://' + interceptorId + '/']
    };
    console.log('Interceptor manifest being installed: ' + JSON.stringify(manifest, null, 2));
    return callback(null, manifest);
  },

  /**
   *
   * adds manifest at os-specific location:
   * MACOS: `~/Library/Application Support/Google/Chrome/NativeMessagingHosts/`,
   * LINUX: `~/.config/google-chrome/NativeMessagingHosts/`,
   * WINDOWS: `%USERPOFILE%\\.postman\\InterceptorBridge\\`
   *
   * Learn more: https://developer.chrome.com/apps/nativeMessaging
   *
   * @param {Function} callback
   * @param {Object} dependencies contains manifest dependencies
   * @returns true if installed else error
   */
  installManifest: function (callback, dependencies) {
    console.log('Installing manifest for Native App ~ Interceptor Integration');
    if (!currentOS) {
      return callback(new Error('Current OS not supported'));
    }

    var path = self.getUserHome();
    if (currentOS === 'MACOS') {
      path += nativeMessagingHosts.MACOS;
    }
    else if (currentOS === 'LINUX') {
      path += nativeMessagingHosts.LINUX;
    }
    else if (currentOS === 'WINDOWS') {
      path += '\\.postman\\InterceptorBridge\\';
    }
    else {
      return callback(new Error('Current OS: ' + currentOS + ' is not supported'));
    }

    path += dependencies.manifest.name + '.json';

    windowManager.sendInternalMessage({
      'event': 'interceptorBridgeInstallationStatusUpdate',
      'object': {
        status: 'installationStarted'
      }
    });

    try {
      fs.writeFileSync(path, JSON.stringify(dependencies.manifest, null, 2));
    }
    catch (err) {
      console.log(err);
      pm.logger.error('Interceptor ~ Bridge: Unable to add manifest', err);
      err.message = 'Error occurred while writing manifest';
      err.type = 'installation';
      if (err.code === 'ENOENT') {
        // NativeMessagingHosts folder is absent, chrome might not be installed
        err.subType = errorSubTypes.chromeNotInstalled;
      }
      else {
        // doesn't have required permission to add manifest
        err.subType = errorSubTypes.permissionRequired;
      }
      return callback(err);
    }
    windowManager.sendInternalMessage({
      'event': 'interceptorBridgeInstallationStatusUpdate',
      'object': {
        status: 'manifestAdded'
      }
    });
    console.log('Manifest installed to ' + path);
    return callback(null, true);
  },

  /**
   *
   * adds registry key (only in case of windows) at `HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts\\`
   * Learn more: https://developer.chrome.com/apps/nativeMessaging
   *
   * @param {Function} callback
   */
  addRegistryKey: function (callback) {

    // Adding registry key is only required for Windows
    if (currentOS === 'WINDOWS') {

      sh.exec('REG ADD "' + nativeMessagingHosts.WINDOWS + manifestFilename + '" /ve /t REG_SZ /d "%USERPROFILE%\\.postman\\InterceptorBridge\\' + manifestFilename + '.json" /f', function (code, stdout, stderr) {
        if (code !== 0) {
          pm.logger.error('Interceptor ~ Bridge: Unable to add registry key', stderr);
          var errObj = new Error('Error occurred while adding registry key: ', stderr);
          errObj.type = 'installation';
          errObj.subType = errorSubTypes.registryAccessNeeded;
          return callback(errObj);
        }
        else {
          windowManager.sendInternalMessage({
            'event': 'interceptorBridgeInstallationStatusUpdate',
            'object': {
              status: 'registryKeyAdded'
            }
          });
          console.log('Registry key is added successfully');
          return callback(null);
        }
      });
    }
    else {
      return callback(null);
    }
  },

  /**
   *
   * Checks for the existence of the manifest
   * @returns {boolean} T/F
   */
  checkManifestInstallation: function () {
    // path to manifest
    var path = self.getUserHome(),
      filename = manifestFilename + '.json';
      path += nativeMessagingHosts[currentOS];

    if (fs.existsSync(path + filename)) {
      return true;
    }
    else {
      return false;
    }
  },

  /**
   *
   * Checks for the presence of Interceptor bridge
   * by reading the path from the manifest
   *
   * @param {boolean} isManifestInstalled T/F
   * @param {Function} callback
   * @returns {Object} contains bridge, manifest installation status
   */
  checkInterceptorBridgeInstallation: function (isManifestInstalled, callback) {
    var path = self.getUserHome(),
      manifest,
      hostPath,
      installationStatus = {},
      filename = manifestFilename + '.json';

    if (currentOS === 'WINDOWS') {
      path += '/.postman/InterceptorBridge/'; // manifest's location for Windows
    }
    else {
      path += nativeMessagingHosts[currentOS]; // manifest's location for macOS, Linux
    }

    if (isManifestInstalled) {
      fs.readFile(path + filename, 'utf8', function (err, data) {
        if (err) {
          installationStatus.isManifestInstalled = false;
          installationStatus.isBridgeInstalled = false;
        }
        else {
          try {
            manifest = JSON.parse(data);
            installationStatus.isManifestInstalled = true;
            hostPath = manifest.path;

            if (fs.existsSync(hostPath)) {
              installationStatus.isBridgeInstalled = true;
            }
            else {
              installationStatus.isBridgeInstalled = false;
            }
          }
          catch (err) {
            installationStatus.isManifestInstalled = false;
            installationStatus.isBridgeInstalled = false;
            return callback(err);
          }
        }
        return callback(null, installationStatus);
      });
    }
    else {
      installationStatus.isBridgeInstalled = false;
      installationStatus.isManifestInstalled = false;
      return callback(null, installationStatus);
    }
  },


  /**
   *
   * checks installation status for Linux:
   * 1. manifest at location : `~/.config/google-chrome/NativeMessagingHosts/`
   * 2. interceptor bridge at `~/.postman/InterceptorBridge`
   */
  checkInstallationStatusForLinux: function () {
    var installationStatus = {},
    isManifestInstalled = self.checkManifestInstallation;

    self.checkInterceptorBridgeInstallation(isManifestInstalled, (err, res) => {
      if (err) {
        console.log('Error while checking the installation status', err);
      }
      else {
        installationStatus = {
          platformSpecific: {
            os: 'LINUX'
          },
          manifestAdded: res.isManifestInstalled,
          interceptorBridgeInstalled: res.isBridgeInstalled
        };

        windowManager.sendInternalMessage({
          'event': 'interceptorBridgeInstallationStatusResponse',
          'object': {
            'status': installationStatus
          }
        });
      }
    });
  },

  /**
   *
   * checks installation status for macOS:
   * 1. presence of node
   * 2. manifest at location : `~/Library/Application Support/Google/Chrome/NativeMessagingHosts`
   * 3. interceptor bridge at `~/.postman/InterceptorBridge`
   *
   */
  checkInstallationStatusForMacOS: function () {
    var installationStatus = {},
      isManifestInstalled = self.checkManifestInstallation();

    async.auto({
      nodeInstallation: self.checkNodeInstallationStatus,
      status: async.apply(self.checkInterceptorBridgeInstallation, isManifestInstalled)
    }, (err, res) => {
      if (err) {
        console.log('Error while checking the installation status:', err);
      }
      else {
        installationStatus = {
          platformSpecific: {
            nodeInstalled: res.nodeInstallation.installed,
            nodePath: res.nodeInstallation.path,
            os: 'MACOS'
          },
          manifestAdded: res.status.isManifestInstalled,
          interceptorBridgeInstalled: res.status.isBridgeInstalled
        };

        windowManager.sendInternalMessage({
          'event': 'interceptorBridgeInstallationStatusResponse',
          'object': {
            'status': installationStatus
          }
        });
      }
    });
  },

  /**
   *
   * checks installation status for Windows:
   * 1. registry key : `HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts\\`
   * 2. manifest at location : `%USERPROFILE%\\.postman\\InterceptorBridge\\`
   * 3. interceptor bridge at `%USERPROFILE%\\.postman\\InterceptorBridge\\`
   *
   */
  checkInstallationStatusForWindows: function () {
    var installationStatus = {};

    sh.exec('REG QUERY ' + nativeMessagingHosts.WINDOWS + manifestFilename, function (code, stdout, stderr) {
      if (code !== 0) {
        installationStatus.platformSpecific = {
          os: 'WINDOWS',
          registryKeyAdded: false
        };
        console.log('Error occurred while querying registry key: ', stderr);

        // we cannot check for presence of manifest and Interceptor Bridge
        installationStatus.manifestAdded = false;
        installationStatus.interceptorBridgeInstalled = false;
        windowManager.sendInternalMessage({
          'event': 'interceptorBridgeInstallationStatusResponse',
          'object': {
            'status': installationStatus
          }
        });
      }
      else {
        var regKey,
          pathToManifest;
        if (stdout) {

          /**
           * REG QUERY returns a string containing key and value(name, type, data) similar like below
           * so it's need to be sanitized
           *
           * HKEY_CURRENT_USER\Software\Google\Chrome\NativeMessagingHosts\com.postman.postmanapp
           * (Default)    REG_SZ    C:\Users\Postman\PostmanInterceptorBridge\com.postman.postmanapp.json
           *
           * Link : https://regex101.com/r/tX8vBa/1l
           *
           */

          var regKey = stdout.trim().split(' ');

          // removes new lines, carriage returns
          regKey = regKey.filter((key) => key.trim().replace('/\r?\n|\r/g', '').length !== 0);

          // as regKey contains key, name, type and data.
          pathToManifest = regKey[3];
          installationStatus.platformSpecific = {
            os: 'WINDOWS',
            registryKeyAdded: true
          };
          console.log('Native App ~ Interceptor: Registry key exists');
        }
        else {
          installationStatus.platformSpecific = {
            os: 'WINDOWS',
            registryKeyAdded: false
          };
        }
        if (pathToManifest && fs.existsSync(pathToManifest)) {
          self.checkInterceptorBridgeInstallation(true, (err, res) => {
            if (err) {
              console.log('Error while reading manifest: ', err);
            }
            else {
              installationStatus.manifestAdded = res.isManifestInstalled;
              installationStatus.interceptorBridgeInstalled = res.isBridgeInstalled;

              windowManager.sendInternalMessage({
                'event': 'interceptorBridgeInstallationStatusResponse',
                'object': {
                  'status': installationStatus
                }
              });
            }
          });
        }
        else {
          installationStatus.manifestAdded = false;
          installationStatus.interceptorBridgeInstalled = false;

          windowManager.sendInternalMessage({
            'event': 'interceptorBridgeInstallationStatusResponse',
            'object': {
              'status': installationStatus
            }
          });
        }
      }
    });
  },

  /**
   *
   * Recursively removes the files/folder inside `InterceptorBridge` directory.
   * 1. MacOS: `$HOME/.postman/InterceptorBridge`
   * 2. Linux: `$HOME/.postman/InterceptorBridge`
   * 3. Windows: `%USERPROFILE%/.postman/InterceptorBridge`
   *
   * `InterceptorBridge` folder should ideally contain:
   * 1. InterceptorBridge executable
   * 2. `logs/` folder
   * 3. InterceptorBridge.template (only in case of macOS)
   * 4. Manifest (only in case of Windows)
   *
   * @param {Function} callback
   *
   */
  removeInterceptorBridge: function (callback) {
    var interceptorBridgeDirectory = require('path').join(self.getUserHome(), '.postman', 'InterceptorBridge');
    sh.exec('rm -rf ' + interceptorBridgeDirectory, (code, stdout, stderr) => {
      if (code !== 0) {
        return callback(null, {
          error: true,
          message: `Could not remove "${interceptorBridgeDirectory}", please remove it manually`
        });
      }
      else {
        console.log(`${interceptorBridgeDirectory} is removed completely`);
        return callback(null, {
          error: false
        });
      }
    });
  },

  /**
   *
   * removes channel specific manifest (say `com.postman.postmanapp.dev.json`) present at os-specific location:
   * 1. MacOS: `/Library/Application Support/Google/Chrome/NativeMessagingHosts/`
   * 2. Linux: `/.config/google-chrome/NativeMessagingHosts/`
   *
   * Note: Removal of manifest is part of removal of Interceptor Bridge folder
   * as it's present in the same folder i.e. `%USERPROFILE/.postman/InterceptorBridge`
   *
   * @param {Function} callback
   */
  removeManifest: function (callback) {
    var pathToManifest;
    if (currentOS === 'MACOS' || currentOS === 'LINUX') {
      pathToManifest = self.getUserHome() + nativeMessagingHosts[currentOS] + manifestFilename + '.json';
      fs.unlink(pathToManifest, (err) => {
        if (err && err.code !== 'ENOENT') { // ENOENT: no such file or directory
          console.log('Error occurred while removing manifest: ', err);
          return callback(null, {
            error: true,
            message: `Error occurred while removing manifest at "${pathToManifest}", please remove it manually`
          });
        }
        else {
          console.log('Manifest is removed successfully');
          return callback(null, {
            error: false
          });
        }
      });
    }
    else {
      // currentOS === 'WINDOWS'
      return callback(null, {
        error: false
      });
    }
  },

  /**
   *
   * removes channel specific registry key (only in case of windows)
   * `HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts\\com.postman.postmanapp.json`
   *
   * @param {Function} callback
   */
  removeRegistryKey: function (callback) {
    // Removing registry key is only required for Windows
    if (currentOS === 'WINDOWS') {
      sh.exec('REG DELETE "' + nativeMessagingHosts.WINDOWS + manifestFilename + '.json" /f', (code, stdout, stderr) => {
        if (code !== 0) {
          console.log(`Error occurred while removing ${nativeMessagingHosts.WINDOWS + manifestFilename} key`);
          return callback(null, {
            error: true,
            message: `Could not remove registry key "${nativeMessagingHosts.WINDOWS + manifestFilename}", please remove it manually`
          });
        }
        else {
          console.log(`Registry key ${nativeMessagingHosts.WINDOWS + manifestFilename} is removed successfully`);
          return callback(null, {
            error: 'false'
          });
        }
      });
    }
    else {
      return callback(null, {
        error: false,
        message: 'The current OS does not support registry key'
      });
    }
  },

  /**
   *
   * removes the file at given path
   * called when integrity check fails, it removes the corrupted download
   *
   * @param {Object} errObj errObj.type === 'download'
   * @param {String} filePath absolute path to the file to be removed
   * @param {Function} callback
   */
  removeCorruptedDependency (errObj, filePath, callback) {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(`Error occurred while removing corrupted download at ${filePath} : ${err}`);
        return callback(errObj); // returning download error even if it's unable to remove
      }
      else {
        console.log(`Removed corrupted download at ${filePath}`);
        return callback(errObj);
      }
    });
  }
};
