const _ = require('lodash');

module.exports = {
  /**
   * @method getValue
   * @description It returns the value of the command line argument passed.
   * @returns String | Boolean
   */
  getValue: (argName) => {
    let value = '';
    _.forEach(process.argv.slice(1), (arg) => {
      if (arg === `--${argName}`) {
        value = true;
        return false;
      }
      else if (arg.startsWith(`--${argName}=`)) {
        let argArr = arg.split('=');
        if (argArr[1] !== '') {
          value = argArr.slice(1).join('=');
        }
        return false;
      }
    });
    return value;
  }
};
