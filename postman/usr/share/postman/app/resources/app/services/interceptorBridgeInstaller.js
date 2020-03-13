/**
 *
 * @file it exposes APIs for in-app integration of Native app ~ Interceptor communication
 * Learn more: https://postmanlabs.atlassian.net/wiki/spaces/PRODOPS/pages/1647181956/APIs+for+in-app+installation+of+Interceptor+Bridge
 */
var async = require('async'),
  _ = require('lodash'),
  windowManager = require('./windowManager').windowManager,
  utils = require('../utils/interceptor/utils.js').utils,

  /**
   *
   * Added a debounce as `checkInstallationStatus` API is called by renderer process.
   * Multiple Postman windows can cause performance issue as this will be called once by each window.
   * Potential performance issue is reported for Windows as `checkInstallationStatusForWindows`
   * checks for registry key by spawning the registry console tool (cmd.exe)
   *
   * See GitHub Issue: https://github.com/postmanlabs/postman-app-support/issues/7925
   *
   */
  checkInstallationStatusForMacOSOnce = _.debounce(utils.checkInstallationStatusForMacOS, 3000),
  checkInstallationStatusForWindowsOnce = _.debounce(utils.checkInstallationStatusForWindows, 3000),
  checkInstallationStatusForLinuxOnce = _.debounce(utils.checkInstallationStatusForLinux, 3000);

exports.installer = {

  /**
   *
   * downloads node in `~/Downloads/` folder only for macOS
   * throws an error for Windows, Linux as Node installation is not required
   */
  installNode () {

    // required only for macOS
    if (utils.currentOS !== 'MACOS') {
      throw new Error('The current OS does not require Node installation');
    }

    // emitting `nodeInstallationStatusUpdate: downloadStarted` event
    windowManager.sendInternalMessage({
      'event': 'nodeInstallationStatusUpdate',
      'object': {
        status: 'downloadStarted'
      }
    });

    async.auto({
      // creates `~/Downloads` directory if not present
      downloadDirectoryPath: utils.createDownloadsDirectory,
      installationDependencies: utils.getNodeInstallerDependencies,
      nodeInstallerPath: ['downloadDirectoryPath', 'installationDependencies', utils.downloadNodeInstaller],
      installNode: ['nodeInstallerPath', 'installationDependencies', utils.initiateNodeInstallation]
    }, (err, res) => {
      if (err) {
        console.log('Error occurred while downloading Node installer', err);
        var errObj = {};
        errObj.status = 'error';
        errObj.errorMessage = err.message;
        if (err.type) {
          errObj.type = err.type;
        }
        if (err.subType) {
          errObj.subType = err.subType;
        }
        windowManager.sendInternalMessage({
          'event': 'nodeInstallationStatusUpdate',
          'object': errObj
        });
      }
    });
  },


  /**
   *
   * first fetches the JSON containing URLs (along with SHA256 hash) to download Interceptor dependencies,
   * 1. creates `~/.postman/InterceptorBridge` directory,
   * 2. puts the downloaded Interceptor Bridge at created directory,
   * 3. checks for node in case of macOS
   * 4. adds manifest at os-specific location
   * 5. adds registry key in case of windows
   *
   */
  installInterceptorBridge () {

    // sending an event to renderer
    windowManager.sendInternalMessage({
      'event': 'interceptorBridgeInstallationStatusUpdate',
      'object': {
        status: 'downloadStarted'
      }
    });

    async.auto({
      // fetches installation dependencies and emits event
      interceptorDependencies: utils.fetchInterceptorDependenciesManifest,
      interceptorBridgeDirectoryPath: utils.createPostmanInterceptorBridgeDirectory,
      nodeInstalledStatus: utils.checkNodeInstallationStatus,
      interceptorBridgeFilePath: ['interceptorDependencies', 'interceptorBridgeDirectoryPath', 'nodeInstalledStatus', utils.downloadInterceptorBridge],
      manifest: ['interceptorBridgeFilePath', utils.createManifest],
      manifestInstalled: ['manifest', utils.installManifest],
      registryKey: utils.addRegistryKey
    }, (err, res) => {
      if (err) {
        var errObj = {};
        errObj.status = 'error';
        errObj.errorMessage = err.message;

        // err.type can be 'download', 'installation', 'nodeRequired'
        if (err.type) {
          errObj.type = err.type;
        }

        // err.subType can be 'CHROME_NOT_INSTALLED', 'INTERNET_CONNECTIVITY', 'REGISTRY_ACCESS_NEEDED', 'FILE_PERMISSIONS_REQUIRED'
        if (err.subType) {
          errObj.subType = err.subType;
        }
        windowManager.sendInternalMessage({
          'event': 'interceptorBridgeInstallationStatusUpdate',
          'object': errObj
        });
        console.log('Error occurred while installing InterceptorBridge', err);
      }
      else {
        console.log('InterceptorBridge is installed successfully');
        windowManager.sendInternalMessage({
          'event': 'interceptorBridgeInstallationStatusUpdate',
          'object': {
            status: 'installationFinished'
          }
        });
      }
    });
  },

  /**
   *
   * Check for os-specific interceptor dependencies:
   * 1. the existence of Interceptor Bridge and Manifest at os-specific locations
   * 2. presence of node in case of macOS,
   * 3. registry key in case of windows
   *
   * Learn more: https://developer.chrome.com/extensions/nativeMessaging
   *
   */
  checkInstallationStatus () {
    switch (utils.currentOS) {
      case 'MACOS':
        checkInstallationStatusForMacOSOnce();
        break;
      case 'WINDOWS':
        checkInstallationStatusForWindowsOnce();
        break;
      case 'LINUX':
        checkInstallationStatusForLinuxOnce();
        break;
      default:
        console.log('Current OS is not supported');
        break;
    }
  },

  /**
   *
   * resets the interceptor bridge installation by removing its dependencies
   *
   * 1. removes `InterceptorBridge` directory
   * 2. removes manifest present at os-specific location
   * 3. removes registry key (only in case of windows)
   *
   */
  resetInstallation () {
    async.parallel({
      interceptorBridge: utils.removeInterceptorBridge,
      manifest: utils.removeManifest,
      registryKey: utils.removeRegistryKey
    }, (err, resetStatus) => {
      if (err) {
        windowManager.sendInternalMessage({
          'event': 'interceptorBridgeResetStatusUpdate',
          'object': {
            status: 'error',
            errorMessage: err.message
          }
        });
        console.log('Error occurred while resetting Interceptor Bridge: ', err);
      }
      else {
        var message = [];

        // checking if Interceptor Bridge is removed
        if (resetStatus.interceptorBridge.error) {
          message.push(resetStatus.interceptorBridge.message);
        }

        // checking if manifest is removed
        if (resetStatus.manifest.error) {
          message.push(resetStatus.manifest.message);
        }

        // checking if registry key is removed
        if (resetStatus.registryKey.error) {
          message.push(resetStatus.registryKey.message);
        }

        // sending message to renderer if anything couldn't be removed
        // asking users to remove manually
        if (message.length > 0) {
          windowManager.sendInternalMessage({
            'event': 'interceptorBridgeResetStatusUpdate',
            'object': {
              status: 'error',
              errorMessage: message.join('\n')
            }
          });
          console.log('Interceptor Bridge reset failed');
        }
        else {
          windowManager.sendInternalMessage({
            'event': 'interceptorBridgeResetStatusUpdate',
            'object': {
              status: 'success'
            }
          });
          console.log('Interceptor Bridge is reset successfully');
        }
      }
    });
  }
};
