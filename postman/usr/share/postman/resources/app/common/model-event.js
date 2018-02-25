let _ = require('lodash');
let async = require('async');

/**
 *
 * @param {String} name
 * @param {String} namespace
 * @param {Object=} data
 * @param {Array[Object]} events
 * @param {Object=} meta
 */
let createEvent = function (name, namespace, data, events, meta) {

    // If the model or the actions are empty then it needs to error out.
    if (_.isEmpty(name) || _.isEmpty(namespace)) {
      throw new Error('ModelEvent: Cannot create event without name or namespace');
    }

    let event = { name, namespace };

    data && (event.data = data);
    events && (event.events = events);
    meta && (event.meta = meta);

    // returns the instruction POJO.
    return event;
  },

  /**
   *
   */
  getEventName = function (event) {
    return event && event.name;
  },

  getEventNamespace = function (event) {
    return event && event.namespace;
  },

  getEventData = function (event) {
    return event && event.data;
  },

  getEventMeta = function (event) {
    return event && event.meta;
  },

  getLowLevelEvents = function (event) {
    return event && event.events;
  },

  getActor = function (event) {
    return event && event.meta && event.meta.actor;
  },

  processEvent = function (event, allowedEvents, iteratee, callback) {
    // bail out
    if (!event || !iteratee) {
      return;
    }

    // bail out
    if (!allowedEvents) {
      callback(new Error('Could not find handlers dictionary to process events'));
    }

    let lowLevelEvents;

    // if there is a handler for the current event, process with it
    if (_.includes(allowedEvents, getEventName(event))) {
      (iteratee.length < 2) && console.warn('It looks like you are trying to pass a handler to processEvent without a callback.');

      return iteratee(event, callback);
    }

    lowLevelEvents = getLowLevelEvents(event);

    // otherwise try if the low level events can be handled
    async.mapSeries(lowLevelEvents, function (event, cb) {
      return processEvent(event, allowedEvents, iteratee, cb);
    }, callback);
  };


module.exports = {
  createEvent,
  getEventName,
  getEventData,
  getEventMeta,
  getEventNamespace,
  getLowLevelEvents,
  getActor,
  processEvent
};
