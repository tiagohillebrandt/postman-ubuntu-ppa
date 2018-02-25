var Storage = require('electron-json-storage'),
    _ = require('lodash').noConflict();

const DB_KEY = 'settings';

exports.appSettings = {

  /**
   * getAll used to get the settings json
   * @param {function=} cb  the callback which will be called with the settings json
   */
  getAll (cb) {
    Storage.get(DB_KEY, (error, data) => {
      if (error) { console.error('Failed to get the installation id', error); }
      return cb && cb(error, data);
    });
  },

  /**
   * get used to get the  value of a key in settings json
   * @param {string=} key the key for the setting value to be returned
   * @param {function=} cb  the callback which will be called with the settings json
   */
  get (key, cb) {
    Storage.get(DB_KEY, (error, data) => {
      if (error) { console.error('Failed to get the installation id', error); }
      return cb && cb(error, _.get(data, key));
    });
  },

  /**
   * set used to set a setting in the settings json.
   * @param {String=} key  the key of the setting
   * @param {*} value the value that needs to be stored inside the settings json
   * @param {function} cb  the callback function which will be called after successful addition
   */

  set (key, value, cb) {
    // Gets the lastest existing settings from the storage
    this.getAll((err, data) => {
      if (!err) {

        // change the value for the specific key
        data[key] = value;

        // Sets up the data for you in the settings json
        Storage.set(DB_KEY, data, (error) => {
          if (error) { console.error('Failed to store installation id', error); }
          return cb && cb(error, data);
        });
      }
      else {
        if (err) { console.error('Failed to get the installation id', err); }
        return cb && cb(err, data);
      }
    });
  }
};
