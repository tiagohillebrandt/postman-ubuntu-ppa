var _ = require('lodash'),
    EventEmitter = require('events');

// INTERNAL CHANNEL INDENTIFIERS
var INTERNAL_CHANNEL_BROADCAST_MAIN = 'PM_EB_INT_BROADCAST_MAIN',
    INTERNAL_CHANNEL_BROADCAST_REND = 'PM_EB_INT_BROADCAST_REND';

/**
 * utility function to decide if current context is renderer or main process
 * 
 * @returns 
 */
function _isRenderer () {
  // renderer with nodeIntegration turned off
  if (!process) {
    return true;
  }

  // hack for process race condition in renderer processes
  if (process.browser) {
    return true;
  }

  // checking process.type
  return (process.type === 'renderer');
}

/**
 * constructs webcontents id
 * 
 * @param {any} webContents 
 * @returns 
 */
function getWebContentsId (webContents) {
  return 'renderer-' + webContents.id;
}

/**
 * broadcasts to bus (renderer)
 * 
 * @param {any} message 
 */
function _broadcastRenderer (message, options) {
  require('electron').ipcRenderer.send(INTERNAL_CHANNEL_BROADCAST_MAIN, message, options);
}

/**
 * broadcasts to bus (main)
 * 
 * @param {any} message 
 */
function _broadcastMain (message) {
  _sendToWebContents(message);
}

/**
 * broadcast the message to all renderers
 * 
 * @param {any} message 
 */
function _sendToWebContents (message) {
  var allWebContents = require('electron').webContents.getAllWebContents();
  _.chain(allWebContents)
    .filter(function (webContents) {
      return _.includes(['window', 'webview'], webContents.getType());
    })
    .forEach(function (webContents) {
      webContents.send(INTERNAL_CHANNEL_BROADCAST_REND, message);
    })
    .value();
}

/**
 * constructs broadcast message payload
 * 
 * @param {any} channel 
 * @param {any} payload 
 * @param {any} source 
 * @param {any} target 
 * @returns 
 */
function _constructMessage (channel, payload, source, target) {
  return {
    channel: channel,
    payload: payload,
    source: source,
    target: target
  };
}

/**
 * gets current context
 * 
 * @returns 
 */
function _getCurrentContext () {
  // renderer process - window or webview
  if (_isRenderer()) {
    var currentWebContents = require('electron').remote.getCurrentWebContents();
    return {
      type: currentWebContents.getType(),
      id: getWebContentsId(currentWebContents)
    };
  }

  // node process
  return {
    type: 'main',
    id: 'main-0'
  };
}

/**
 * Context specific node
 *
 * @param       {[type]} node [description]
 * @constructor
 */
function EventBus (_context) {
  var _emitter = new EventEmitter();

  // @todo use this to get around max listeners warning
  // _emitter.setMaxListeners();

  /**
   * publish to channel
   * 
   * @param {String} channel 
   * @param {any} payload 
   */
  function _publish (channel, payload, options = {}) {
    var message = _constructMessage(channel, payload, _context);
    if (_isRenderer()) {
      _broadcastRenderer(message, options);
    }
    else {
      // We need to dispatch event to the calling process as well.
      _dispatch(message);

      // If we specified only to main, then don't broadCastToRenders
      if (!options.onlyToMain) {
        _broadcastMain(message);
      }
    }
  }

  /**
   * subscribe to channel
   * 
   * @param {String} channel 
   * @param {any} payload 
   * @param {any} opts
   */
  function _subscribe (channel, listener, opts) {
    if (opts && opts.once) {
      _emitter.once(channel, listener);
    }
    else {
      _emitter.addListener(channel, listener);
    }
    return _unsubscribe.bind(this, channel, listener);
  }

  /**
   * unsubscribe to listener from channel
   * 
   * @param {String} channel 
   * @param {any} listener 
   */
  function _unsubscribe (channel, listener) {
    _emitter.removeListener(channel, listener);
  }

  /**
   * dispatch internal event to the channel
   * 
   * @param {any} message 
   */
  function _dispatch (message) {
    _emitter.emit(message.channel, message.payload);
  }

  /**
   * Attach internal listeners
   */
  (function _attachInternalEvents () {
    if (_isRenderer()) {
      require('electron').ipcRenderer
        .on(INTERNAL_CHANNEL_BROADCAST_REND, function (event, message) {
          _dispatch(message);
        });
    }
    else {
      require('electron').ipcMain
        .on(INTERNAL_CHANNEL_BROADCAST_MAIN, function (event, message, options) {
          _dispatch(message);
          if (!options.onlyToMain) {
            _broadcastMain(message);
          }
        });
    }
  })();

  this.channel = function (channel) {
    return {
      subscribe: _subscribe.bind(this, channel),
      publish: _publish.bind(this, channel)
    };
  };
}

module.exports = function initialize () {
  return (new EventBus(_getCurrentContext()));
};
