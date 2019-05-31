/**
 * The object below provides the basic configurations needed to pass to the init function
 * @typedef initInputData
 *
 * @property {String} packageName the package name for which the init generates the execution id.
 *
 * @example
 * {
 *    packageName: 'blah'
 * }
 */

/**
 * The below object provides the information available in the initOutputData.
 * @typedef initOutputData
 *
 * @extends initInputData
 *
 * @property {String} eID the unique id generated with the combination of packageName and timestamp.
 *
 * @example
 * {
 *    packageName: 'blah',
 *    eID: 'blah-1522229136510'
 * }
 */

/**
 * @method init
 * @description It will be used to generate the eID (Execution ID)
 *              This eID(execution ID) will be used for the other processes in the module.
 * @param {initInputData} initInputData
 * @throws InvalidArgumentException
 * @returns {initOutputData}
 */
module.exports = function init(initInputData) {
  // Bail out if the updateInfo is empty
  if (!initInputData) {
    throw new Error('InvalidArgumentException: Hermes~init - initInputData should not be empty');
  }

  // Bail out if the updateInfo is not an object
  if (typeof initInputData !== 'object' || Array.isArray(initInputData)) {
    throw new Error('InvalidArgumentException: Hermes~init - initInputData should be of type object');
  }

  if (typeof initInputData.packageName !== 'string') {
    throw new Error('InvalidArgumentException: Hermes~init - initInputData.packageName should be of type string');
  }

  // Bail out if the updateInfo.packageName is empty
  if (!initInputData.packageName.trim()) {
    throw new Error('InvalidArgumentException: Hermes~init - initInputData.packageName should not be empty');
  }

  // Reaching here ensure that updateInfo.packageName is available and it is a string.
  // Note:
  // 1. Don't want to mutate the existing updateInfo.
  // 2. Don't want to separate out eId generation yet, will do when we need it in more places.
  return Object.assign({}, initInputData, { eID: `${initInputData.packageName}-${Date.now()}` });
};
