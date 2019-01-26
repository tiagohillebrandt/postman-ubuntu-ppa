const path = require('path'),
      FileService = require('./FileService'),

      PLUGINS_DIRECTORY = 'plugins',
      USER_DATA_PATH = process.env.USER_DATA_PATH; // eslint-disable-line no-process-env

/**
 * Used to return package json file for a particular plugin version
 *
 * @param  {String} pluginId
 * @returns {Promise<Object>}
 *
 */
async function getPackageJSON (pluginId) {
  let logPrefix = 'PluginResolver~getPackageJSON',
      pluginPath = await getPluginPath(pluginId),
      packageJsonFilePath = path.resolve(pluginPath, 'package.json'),
      data = await FileService.readFile(packageJsonFilePath);

  try {
    return JSON.parse(data);
  }
  catch (err) {
    throw new Error(`${logPrefix}: Could not parse package.json for "${pluginId}",` +
      `packageJsonFilePath: "${packageJsonFilePath}", data: "${data}"`);
  }
}

/**
 * Used to get path for a particular plugin for the currently installed version
 * (not necessarily the latest; downgrading the app will downgrade the plugin as well)
 *
 * @param  {String} pluginId
 */
async function getPluginPath (pluginId) {
  let versionToUse = await getPluginCurrentVersion(pluginId);

  return path.resolve(getPluginsDirectory(), pluginId, versionToUse);
}

/**
 * Returns the currently installed version of a plugin
 *
 * @param {String} pluginId
 */
async function getPluginCurrentVersion (pluginId) {
  let logPrefix = 'PluginResolve~getPluginCurrentVersion',
      pluginParentDirectory = path.resolve(getPluginsDirectory(), pluginId),
      versionFilePath = path.resolve(pluginParentDirectory, 'version.json'),
      data;

  try {
    data = await FileService.readFile(versionFilePath);
  }
  catch (error) {
    // If the file does not exist then swallow the error
    if (error.code === 'ENOENT') {
      pm.logger.info('not exist', error);
      return null;
    }

    throw new Error(`${logPrefix}: Error while reading version.json file, ${error.message}`);
  }

  try {
    return JSON.parse(data).latest;
  }
  catch (e) {
    pm.logger.warn(`${logPrefix}: error while trying to parse version.json, data: ${data}`);
    return null;
  }
}

/**
 * Return path for where the plugins are installed
 *
 * @returns {String}
 *
 */
function getPluginsDirectory () {
  return path.resolve(USER_DATA_PATH, PLUGINS_DIRECTORY);
}

module.exports = {
  getPackageJSON,
  getPluginsDirectory,
  getPluginPath,
  getPluginCurrentVersion
};
