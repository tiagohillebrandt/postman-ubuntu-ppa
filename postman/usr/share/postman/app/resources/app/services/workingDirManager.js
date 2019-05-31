const fs = require('fs'),
  os = require('os'),
  path = require('path'),

  async = require('async'),
  mkdirp = require('mkdirp'),

  homeDir = os.homedir(),
  defaultWorkingDir = path.join(homeDir, 'Postman', 'files'),

  createDefaultDir = function (cb) {
    async.series([
      // Check if workingDir already exists
      (next) => {
        fs.stat(defaultWorkingDir, (err) => {
          // `ENOENT: no such file or directory` error message. Most likely the case.
          if (err && err.code === 'ENOENT') {
              return next();
          }

          // The directory exists or some other problem, bail out
          return next(new Error('default working directory already exists'));
        });
      },

      // Check we have write access to homeDir
      (next) => {
        fs.access(homeDir, fs.constants.W_OK, (err) => {
          if (err) {
            // No write access to home directory
            return next(err);
          }

          return next();
        });
      },

      // Create the default working directory
      (next) => {
        // Node version < 10 does't support creating directory recursively, hence using external
        // library
        mkdirp(defaultWorkingDir, next);

        // @todo Use fs.mkdir when node version >=10
        // fs.mkdir(defaultWorkingDir, { recursive: true }, next);
      }
    ], cb);
  };

module.exports = { createDefaultDir };
