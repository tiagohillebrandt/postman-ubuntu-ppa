const appStatus = require('./AppStatus');

/**
 * This module is meant to listen for the event fired when the requester window is booted. This is
 * helpful for cases where we need the requester window to be completely booted before we do an action.
 *
 * When this module receives the event signifying that the requester has been booted, it tells the
 * AppStatus module that the requester has been initialized by calling the 'requesterBooted' function.
 */
module.exports = function () {
  let appEvents = pm.eventBus.channel('app-events');

  appEvents.subscribe((event = {}) => {
    if (event.name === 'booted' && event.namespace === 'requester') {
      appStatus.requesterBooted();
    }
  });
};
