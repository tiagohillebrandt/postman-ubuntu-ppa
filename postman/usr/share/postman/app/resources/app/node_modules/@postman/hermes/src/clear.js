const { removeOnly } = require('./util'),

      INVALID_ARGUMENT_ERROR = 'INVALID_ARGUMENT_ERROR',
      DELETE_ERROR = 'DELETE_ERROR',
      CLEAR_COMPLETED = 'CLEAR_COMPLETED';

/**
 * Defines the basic properties needed for clearing a directory.
 * @typedef {object} clearInputData
 *
 * @property {String} directory the directory to clean
 *
 * @example
 * {
 *   appName: 'somePackage',
 *   directory: 'User/PathForExtractDirectory'
 * }
 *
 */

/**
 * @typedef {String} clearStatus
 * It holds the value of either one of
 * 'INVALID_ARGUMENT_ERROR', 'FILE_ACCESS_ERROR', 'CLEAR_COMPLETED'
 */

/**
 * @typedef clearInfo
 * The below object holds key properties defining the information for clearing process
 *
 * @property {clearStatus} status
 * @property {?Error} [error]
 *
 * @example
 * {
 *   status: 'CLEAR_COMPLETED',
 *   error: null
 * }
 */

/**
 * @typedef clearOutputData
 * All the properties present in the return value
 *
 * @extends clearInputData
 * @property {clearInfo} clearInfo
 *
 * @example
 * {
 *   appName: 'somePackage',
 *   directory: 'User/PathForExtractDirectory',
 *   clearInfo: {
 *     status: 'CLEAR_COMPLETED',
 *     error: null
 *   }
 * }
 *
 */

/**
 * @callback clearResponseCallback
 * @param {?Error} error
 * @param {clearOutputData} data
 *
 */

/**
 * @method clear
 * @description This will clear the given directory
 * leaving only the `app` directory and `appName` executable file
 * @param {clearInputData} clearInputData
 * @param {clearResponseCallback} callback
 * @throws {InvalidParamsException}
 */
function clear(clearInputData, callback) {
  if (!callback) {
    throw new Error('InvalidArgumentException: Hermes~clear - callback is a required parameter');
  }

  if (typeof callback !== 'function') {
    throw new Error('InvalidArgumentException: Hermes~clear - callback should be of type function');
  }

  const clearOutputData = Object.assign({}, clearInputData, {
    clearInfo: {
      status: null,
      error: null,
    },
  });

  if (!clearInputData) {
    const err = new Error('InvalidArgumentException: Hermes~clear - clearInputData is a required parameter');
    clearOutputData.clearInfo = { status: INVALID_ARGUMENT_ERROR, error: err };
    return callback(err, clearOutputData);
  }

  if (typeof clearInputData !== 'object' || Array.isArray(clearInputData)) {
    const err = new Error('InvalidArgumentException: Hermes~clear - clearInputData should be of type object');
    clearOutputData.clearInfo = { status: INVALID_ARGUMENT_ERROR, error: err };
    return callback(err, clearOutputData);
  }

  if (!clearInputData.directory) {
    const err = new Error('InvalidArgumentException: Hermes~clear - clearInputData.directory is a required field');
    clearOutputData.clearInfo = { status: INVALID_ARGUMENT_ERROR, error: err };
    return callback(err, clearOutputData);
  }

  if (typeof clearInputData.directory !== 'string') {
    const err = new Error('InvalidArgumentException: Hermes~clear - clearInputData.directory should be of type string');
    clearOutputData.clearInfo = { status: INVALID_ARGUMENT_ERROR, error: err };
    return callback(err, clearOutputData);
  }

  if (!clearInputData.appName) {
    const err = new Error('InvalidArgumentException: Hermes~clear - clearInputData.appName is a required field');
    clearOutputData.clearInfo = { status: INVALID_ARGUMENT_ERROR, error: err };
    return callback(err, clearOutputData);
  }

  if (typeof clearInputData.appName !== 'string') {
    const err = new Error('InvalidArgumentException: Hermes~clear - clearInputData.appName should be of type string');
    clearOutputData.clearInfo = { status: INVALID_ARGUMENT_ERROR, error: err };
    return callback(err, clearOutputData);
  }

  const directoryToClean = clearInputData.directory,
        { appName } = clearInputData,
        patterns = `${appName}-[0-9]*`, // delete only the ${appName}-${eid} and ${appName}-${eid}-old
        fileSystemModule = clearInputData.fileSystemModule || require('fs');

  return removeOnly({ rootDirectory: directoryToClean, patterns, fileSystemModule }, (err) => {
    if (err) {
      clearOutputData.clearInfo = { status: DELETE_ERROR, error: err };
      return callback(err, clearOutputData);
    }

    clearOutputData.clearInfo = { status: CLEAR_COMPLETED, error: null };
    return callback(null, clearOutputData);
  });
}

module.exports = clear;
