const os = require('os'),
      _ = require('lodash'),
      exec = require('child_process').exec,
      windowManager = require('./windowManager').windowManager,
      { app } = require('electron'),

      DARWIN = 'Darwin',
      POSTMAN = 'postman',
      POSTMAN_PROTOCOL = `${POSTMAN}://`;

/**
 * @method handleOpenUrl
 * @description This is used to open the url in requester window through window manager
 * @param {String} url
 */
function handleOpenUrl (url) {
  pm.logger.info(`ProtocolHandler~handleOpenUrl: ${url}`);
  windowManager.initUrl = url;
  windowManager.openUrl(url);
}

/**
 * @method processArg
 * @description This will process the arguments provided to find the postman protocol init.
 * @param {Array<String>} argv
 */
function processArg (argv = []) {
  // Bail out for darwin as it will be handled on open-url event handling
  if (os.type() === DARWIN) {
    return;
  }

  // This would be linux or windows, since os.type() will have only 3 possible values
  // Electron will always append the latest argument at the end.
  // since, we attach the protocol handler with process.argv while doing app.setAsDefaultProtocolClient
  _.forEachRight(argv, (arg) => {
    if (arg.startsWith(POSTMAN_PROTOCOL)) {
      handleOpenUrl(arg);
      return false;
    }
  });
}

/**
 * @method handleOpenUrlForDarwin
 * @description This will handle the open-url event triggered in darwin
 * @param {Object} event
 * @param {String} url
 */
function handleOpenUrlForDarwin (event, url) {
  // https://electronjs.org/docs/api/app#event-open-url-macos
  // PreventDefault is needed if we are handling the event.
  event.preventDefault();
  pm.logger.info(`ProtocolHandler~handleOpenUrlForDarwin - Opened with url: ${url}`);
  handleOpenUrl(url);
}

/**
 * @method setDefaultProtocolClient
 * @description This method makes the Postman app as the default app for handling files with urls starting with postman://
 * @param {Array<String>} args
 */
function setDefaultProtocolClient (args) {
  let appName = app.getName();

  if (process.platform === 'linux') {
    // For handling Linux, we run the xdg-mime command manually instead of using the Electron api app.setAsDefaultProtocolClient.
    // This is because setAsDefaultProtocolClient uses xdg-settings to set the app as default. This led to the app being set as
    // default for html files as well.
    // Github issue - https://github.com/postmanlabs/postman-app-support/issues/5558

    // To check if the xdg-mime command registered the default correctly, we run the command 'xdg-mime query default x-scheme-handler/postman'.
    // If the output of this command is 'Postman.desktop', the handler registered correctly.
    exec(`xdg-mime default ${appName}.desktop x-scheme-handler/${POSTMAN}`, (error) => {
      if (error) {
        pm.logger.error(`ProtocolHandler~setDefaultProtocolClient: ${error.message}`);

        // Fallback in case xdg-mime gives an error
        app.setAsDefaultProtocolClient(POSTMAN, process.execPath, args);
      }
    });
  }
  else {
    let isCustomProtocolAssigned = app.setAsDefaultProtocolClient(POSTMAN, process.execPath, args);

    pm.logger.info(`ProtocolHandler~init - Success with status: ${isCustomProtocolAssigned}]`);
  }
}

/**
 * @method init
 * @description It initialized the handling needed for protocol handling.
 * @param {Function} [cb]
 * https://postmanlabs.atlassian.net/wiki/spaces/ENGINEERING/pages/757366824/How+Run+in+Postman+Protocol+handling+works+in+app
 */
function init () {
  let args = Array.from(process.argv);
  processArg(args);

  // For handling Darwin
  app.on('open-url', handleOpenUrlForDarwin);

  setDefaultProtocolClient(args);
}

module.exports = { init, processArg };
