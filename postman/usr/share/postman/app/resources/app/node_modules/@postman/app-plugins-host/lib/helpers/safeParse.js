/**
 * @description parses the raw option provided safely
 * @param {String = '{}'} rawOptions
 * @return {Object}
 */
module.exports = function (rawOptions = '{}') {
  let optionsObj = {};
  try {
    optionsObj = JSON.parse(rawOptions);
  }
  catch (e) {
    pm.logger.error(new Error('Error in parsing options'), e);
  }

  return optionsObj;
};
