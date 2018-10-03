const os = require('os'),
      windowManager = require('./windowManager').windowManager,

      DARWIN = 'Darwin',
      POSTMAN = 'postman',
      POSTMAN_PROTOCOL = `${POSTMAN}://`;

/**
 * @method handleOpenUrl
 * @description This is used to open the url in requester window through window manager
 * @param {String} url
 */
function handleOpenUrl (url) {
  console.log(`ProtocolHandler~handleOpenUrl: ${url}`);
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
  argv.forEach((arg) => {
    arg.startsWith(POSTMAN_PROTOCOL) && handleOpenUrl(arg);
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
  console.log(`ProtocolHandler~handleOpenUrlForDarwin: ${url}`);
  handleOpenUrl(url);
}

/**
 * @method init
 * @description It initialized the handling needed for protocol handling.
 * @param {Object} app
 * @param {Function} [cb]
 * https://postmanlabs.atlassian.net/wiki/spaces/ENGINEERING/pages/757366824/How+Run+in+Postman+Protocol+handling+works+in+app
 */
function init (app) {
  processArg(process.argv);

  let isCustomProtocolAssigned = app.setAsDefaultProtocolClient(POSTMAN, process.execPath, process.argv);

  // For handling Darwin
  app.on('open-url', handleOpenUrlForDarwin);

  console.log(`ProtocolHandler~init: Setting custom protocol handling [status: ${isCustomProtocolAssigned}]`);
}

module.exports = { init, processArg };
