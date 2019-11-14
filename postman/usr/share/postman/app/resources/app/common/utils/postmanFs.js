const fs = require('fs'),
  path = require('path'),
  Readable = require('stream').Readable,
  util = require('util'),

  _ = require('lodash'),

  pathIsInside = require('./pathIsInside'),

  PPERM_ERR = 'PPERM: insecure file access outside working directory',
  FUNCTION = 'function',
  DEPRECATED_SYNC_WRITE_STREAM = 'SyncWriteStream',
  EXPERIMENTAL_PROMISE = 'promises',

  // Use simple character check instead of regex to prevent regex attack
  /**
   * Windows root directory can be of the following from
   *
   * | File System | Actual           | Modified          |
   * |-------------|------------------|-------------------|
   * | LFS (Local) | C:\Program       | /C:/Program       |
   * | UNC         | \\Server\Program | ///Server/Program |
   */
  isWindowsRoot = function (path) {
    const drive = path.charAt(1);

    return ((path.charAt(0) === '/') &&
      ((drive >= 'A' && drive <= 'Z') || (drive >= 'a' && drive <= 'z')) &&
      (path.charAt(2) === ':')) ||
      path.slice(0, 3) === '///'; // Modified UNC path
  };

/**
 * Postman file resolver wrapper over fs
 *
 * @param {String} workingDir
 * @param {Boolean=false} insecureFileRead
 * @param {String[]} fileWhitelist
 */
function PostmanFs (workingDir, insecureFileRead = false, fileWhitelist = []) {
    this._fs = fs;
    this._path = path;
    this.constants = this._fs.constants;

    this.workingDir = workingDir;
    this.insecureFileRead = insecureFileRead;
    this.fileWhitelist = fileWhitelist;

    this.isWindows = global.process.platform === 'win32';
}

/**
 * Private method to resole the path based based on working directory
 *
 * @param {String} relOrAbsPath - Relative or absolute path to resolve
 * @param {String[]} whiteList - A list of absolute path to whitelist
 *
 * @returns {String} The resolved path
 */
PostmanFs.prototype._resolve = function (relOrAbsPath, whiteList) {
  // Special handling for windows absolute paths to work cross platform
  this.isWindows && isWindowsRoot(relOrAbsPath) && (relOrAbsPath = relOrAbsPath.substring(1));

  // Resolve the path from the working directory. The file should always be resolved so that
  // cross os variations are mitigated
  let resolvedPath = this._path.resolve(this.workingDir, relOrAbsPath);

  // Check file is within working directory
  if (!this.insecureFileRead && // insecureFile read disabled
    !pathIsInside(resolvedPath, this.workingDir) && // File not inside working directory
    !_.includes(whiteList, resolvedPath)) { // File not in whitelist
      // Exit
      return;
  }

  return resolvedPath;
};

/**
 * Asynchronous path resolver function
 *
 * @param {String} relOrAbsPath - Relative or absolute path to resolve
 * @param {String|String[]} [whiteList] - A optional list of additional absolute path to whitelist
 * @param {Function} callback -
 */
PostmanFs.prototype.resolvePath = function (relOrAbsPath, whiteList, callback) {
  if (!callback && typeof whiteList === 'function') {
    callback = whiteList;
    whiteList = [];
  }

  let resolvedPath = this._resolve(relOrAbsPath, _.concat(this.fileWhitelist, whiteList));

  if (!resolvedPath) {
    return callback(new Error(PPERM_ERR));
  }

  return callback(null, resolvedPath);
};

/**
 * Synchronous path resolver function
 *
 * @param {String} relOrAbsPath - Relative or absolute path to resolve
 * @param {String|String[]} [whiteList] - A optional list of additional absolute path to whitelist
 *
 * @returns {String} The resolved path
 */
PostmanFs.prototype.resolvePathSync = function (relOrAbsPath, whiteList) {
  // Resolve the path from the working directory
  const resolvedPath = this._resolve(relOrAbsPath, _.concat(this.fileWhitelist, whiteList));

  if (!resolvedPath) {
    throw new Error(PPERM_ERR);
  }

  return resolvedPath;
};

// Attach all functions in fs to postman-fs
Object.getOwnPropertyNames(fs).map((prop) => {
  // Bail-out early to prevent fs module from logging warning for deprecated and experimental methods
  if (prop === DEPRECATED_SYNC_WRITE_STREAM || prop === EXPERIMENTAL_PROMISE || typeof fs[prop] !== FUNCTION) {
    return;
  }

  PostmanFs.prototype[prop] = fs[prop];
});

// Override the required functions
PostmanFs.prototype.stat = function (path, callback) {
  this.resolvePath(path, (err, resolvedPath) => {
    if (err) {
      return callback(err);
    }

    return this._fs.stat(resolvedPath, callback);
  });
};

PostmanFs.prototype.createReadStream = function (path, options) {
    try {
      return this._fs.createReadStream(this.resolvePathSync(path), options);
    } catch (err) {
      // Create a fake read steam that emits and error and
      const ErrorReadStream = function () {
        // Replicating behavior of fs module of disabling emitClose on destroy
        Readable.call(this, { emitClose: false });

        // Emit the error event with insure file access error
        this.emit('error', new Error(PPERM_ERR));

        // Options exists and disables autoClose then don't destroy
        (options && !options.autoClose) || this.destroy();
      };

      util.inherits(ErrorReadStream, Readable);

      return new ErrorReadStream();
    }
};

module.exports = PostmanFs;
