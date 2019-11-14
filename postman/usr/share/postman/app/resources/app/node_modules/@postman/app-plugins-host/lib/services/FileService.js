const fs = require('fs'),
      mkdirp = require('mkdirp'),
      path = require('path');

/**
 * Used to move source to destination
 *
 * @param  {String} source
 * @param  {String} destination
 *
 * @returns {Promise}
 */
function move (source, destination) {

  // create the directory if does not exist
  return mkdir(path.dirname(destination))

    // remove if there are additional files in that directory
    .then(() => {
      return remove(destination);
    })

    // move
    .then(() => {
      return rename(source, destination);
    });
}


/**
 * used to create directory
 *
 * @param  {String} source
 * @returns {Promise}
 */
function mkdir (source) {
  return new Promise((resolve, reject) => {
    mkdirp(source, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

/**
 * rename file at source to destination
 *
 * @param  {String} source
 * @param  {String} destination
 *
 * @returns {Promise}
 */
function rename (source, destination) {
  let startTime = Date.now(),
      timeLimit = 5000,
      retryInterval = 500;

  return new Promise((resolve, reject) => {

    function renameCb (err) {
      if (err && (err.code === 'EACCES' || err.code === 'EPERM') && (Date.now() - startTime < timeLimit)) {
        setTimeout(() => { fs.rename(source, destination, renameCb); }, retryInterval);
        return;
      }

      if (err) {
        return reject(err);
      }

      return resolve();
    }

    fs.rename(source, destination, renameCb);
  });
}

/**
 * Used to delete directory or file recursively
 *
 * @param  {String} source
 *
 * @returns {Promise}
 */
function remove (source) {
  return lstat(source)
    .then((stat) => {
      if (stat.isDirectory() && !stat.isSymbolicLink()) {
        return readdir(source)
          .then((children) => {
            return Promise.all(children.map((child) => { return remove(path.join(source, child)); }));
          })
          .then(() => {
            return rmdir(source);
          });
      }
      return unlink(source);

    })
    .catch((err) => {
      if (err && (err.code === 'ENOENT')) {
        return;
      }

      return Promise.reject(new Error(`FileService-remove: Could not remove files. ${err.message}`));
    });
}

/**
 * return fs lstat for file at a path
 *
 * @param  {String} path
 *
 * @returns {Promise}
 */
function lstat (path) {
  return new Promise((resolve, reject) => {
    fs.lstat(path, (err, stat) => {
      if (err) {
        return reject(err);
      }
      return resolve(stat);
    });
  });
}

/**
 * read directory
 *
 * @param  {String} path
 * @returns {Promise}
 */
function readdir (path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        return reject(err);
      }
      return resolve(files);
    });
  });
}

/**
 * Remove directory
 *
 * @param  {String} path
 *
 * @returns {Promise}
 */
function rmdir (path) {
  return new Promise((resolve, reject) => {
    fs.rmdir(path, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

/**
 * Remove a file
 *
 * @param  {String} path
 *
 * @returns {Promise}
 */
function unlink (path) {
  return new Promise((resolve, reject) => {
    fs.unlink(path, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

/**
 * Checks whether at the given path there is a file or not
 *
 * @param {String} path
 * @returns {Promise<Boolean>}
 */
function isFile (path) {
  return new Promise((resolve) => {
    fs.stat(path, (err, stats) => {
      err ? resolve(false) : resolve(Boolean(stats && stats.isFile()));
    });
  });
}

/**
 * Used to write data to a file path
 *
 * @param  {String} path
 * @param  {String} data
 *
 * @returns {Promise}
 */
function writeFile (path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      err ? reject(err) : resolve();
    });
  });
}

/**
 * Used to read file from a particular path
 *
 * @param  {String} path
 *
 * @returns {Promise}
 */
function readFile (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}

module.exports = {
  move,
  remove,
  isFile,
  writeFile,
  readFile
};
