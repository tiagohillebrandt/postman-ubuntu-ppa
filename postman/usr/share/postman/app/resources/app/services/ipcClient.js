var app = require('electron').app,
  windowManager = require('./windowManager').windowManager,
  appSettings = require('./appSettings').appSettings,
  ipc = require('node-ipc'),
  CryptoJS = require('crypto-js'),
  { getConfig } = require('./AppConfigService'),
  interceptorBridgeSocketName = getConfig('__WP_INTERCEPTOR_BRIDGE_SOCKET_NAME__'), // channel specific
  appVersion = app.getVersion();

// default encryption key for Postman
const POSTMAN_DEFAULT_KEY = 'postman_default_key',

// default payload used for key validation
DEFAULT_KEY_VALIDATION_PAYLOAD = {
  type: 'KEY_VALIDATION_STRING',
  message: 'Default key validation string'
};

// key (passphrase to be used for encryption/decryption)
var encryptionKey = POSTMAN_DEFAULT_KEY,

// true/false - boolean to store whether the postman app is connected to interceptor bridge or not
isClientConnected = false;

/**
 * @description it fetches the encryption key stored in appSettings and sets it in the global variable i.e. encryptionKey
 * if not found, sets the POSTMAN_DEFAULT_KEY as encryptionKey
 */
function initializeEncryptionKey () {
  appSettings.get('encryptionKeyForInterceptor', (err, encryptionKeyForInterceptor) => {
    if (err) {
      console.log('INTERCEPTOR CONNECTIVITY: Error getting encryption key', err);
    }
    else {
      if (!encryptionKeyForInterceptor) {
        encryptionKey = POSTMAN_DEFAULT_KEY;
      }
      else {
        encryptionKey = encryptionKeyForInterceptor;
      }
    }
  });
}

/**
 *
 * @param {string} data encrypted string
 * @description used to decrypt the string using encryption key stored as global variable
 */
function decrypt (data) {
  try {
    var bytes = CryptoJS.AES.decrypt(data, encryptionKey);
    var decryptedData;
    try {
      decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    }
    catch (err) {
      return {
        type: 'KEY_MISMATCH',
        data: {
          message: 'InterceptorBridge : keys are not same at interceptor and app'
        }
      };
    }
    return decryptedData;
  }
  catch (err) {
    console.log(err);
    return {
      type: 'KEY_MISMATCH',
      data: {
        message: 'InterceptorBridge : keys are not same at interceptor and app'
      }
    };
  }
}

/**
 *
 * @param {object} data payload to be encrypted
 * @description used to encrypt the payload using encryption key stored as global key
 */
function encrypt (data) {
  try {
    var encrypted = CryptoJS.AES.encrypt(data, encryptionKey);
    return encrypted.toString();
  }
  catch (err) {
    console.log(err);
    return {
      type: 'INVALID_KEY',
      data: {
        message: 'unable to encrypt, key might be invalid'
      }
    };
  }
}

/**
 *
 * @param {string} data encrypted payload
 * @description used to check whether the same key exists at App and Interceptor or not.
 * It validates the key by using encryption/decryption of same default payload at Interceptor and App
 * Interceptor encrypts a default paylaod using it's own key and sends it to app, app tries to decrypt it
 * if both are same, validation true otherwise false.
 */
function validateKey (data) {
  try {
    var decryptedData = JSON.parse(decrypt(data));
    return {
      type: 'KEY_VALIDATION_RESULT',
      data: {
        validation: (decryptedData.type === DEFAULT_KEY_VALIDATION_PAYLOAD.type
        && decryptedData.message === DEFAULT_KEY_VALIDATION_PAYLOAD.message
        )
      }
    };
  }
  catch (err) {
    return {
      type: 'KEY_VALIDATION_RESULT',
      data: {
        validation: false
      }
    };
  }
}

// encryption key is initialized once the main process of app loads
initializeEncryptionKey();

exports.ipcClient = {
  isClientConnected: false,

  initialize: function () {
    ipc.config.id = 'postmanClient';
    ipc.config.retry = 3000;
    ipc.config.silent = true;

    console.log('INTERCEPTOR CONNECTIVITY: Connecting to Interceptor Bridge');
    ipc.connectTo(interceptorBridgeSocketName, () => {
      console.log('InterceptorBridge: Trying to connect Native App IPC~Interceptor Bridge');
      ipc.of[interceptorBridgeSocketName].on('connect', () => {
        if (!isClientConnected) {
          console.log('InterceptorBridge: connected with postman app');
        }
        isClientConnected = true;
        var msg = {
          type: 'UPDATE_CONNECTION_STATUS',
          data: {
            connectedToPostman: true
          }
        };
        this.sendMessageToInterceptor('connection_established', msg);
        windowManager.sendInternalMessage({
          'event': 'updateInterceptorBridgeConnectionStatus',
          'object': msg
        });
      });

      ipc.of[interceptorBridgeSocketName].on('disconnect', function () {
        if (isClientConnected) {
          console.log('InterceptorBridge: disconnected from postman app');
        }
        isClientConnected = false;
        var msg = {
          type: 'UPDATE_CONNECTION_STATUS',
          data: {
            connectedToPostman: false
          }
        };
        windowManager.sendInternalMessage({
          'event': 'updateInterceptorBridgeConnectionStatus',
          'object': msg
        });
      });

      ipc.of[interceptorBridgeSocketName].on('forward_encrypted_msg_to_app', function (data) {
        var msg;
        try {
          var decryptedText = decrypt(data.payload);
          if (decryptedText.type === 'KEY_MISMATCH') {
            this.sendMessageToInterceptor('forwardMessageToInterceptor', decryptedText);
          }
          else {
            try {
              msg = JSON.parse(decryptedText);
            }
            catch (err) {
              msg = {
                type: 'KEY_MISMATCH',
                data: {
                  message: 'InterceptorBridge : keys are not same at interceptor and app'
                }
              };
            }
          }
        }
        catch (err) {
          msg = {
            type: 'KEY_MISMATCH',
            data: {
              message: 'InterceptorBridge : keys are not same at interceptor and app'
            }
          };
        }
        windowManager.sendInternalMessage({
          'event': 'interceptorResponse',
          'object': msg
        });
      });

      ipc.of[interceptorBridgeSocketName].on('forward_msg_to_app', (msg) => {
        if (msg.type === 'VALIDATE_KEY') {
          var keyValidationResult = validateKey(msg.data);
          this.sendMessageToInterceptor('forwardMessageToInterceptor', keyValidationResult);
          windowManager.sendInternalMessage({
            'event': 'interceptorResponse',
            'object': keyValidationResult
          });
        }
        else {
          windowManager.sendInternalMessage({
            'event': 'interceptorResponse',
            'object': msg
          });
        }
      });
    });
  },

  sendEncryptedMessageToInterceptor: function (message) {
    message.appVersion = appVersion;
    if (ipc && ipc.of && ipc.of[interceptorBridgeSocketName]) {
      ipc.of[interceptorBridgeSocketName].emit('forwardEncryptedMessageToInterceptor', {
        id: ipc.config.id,
        message: encrypt(JSON.stringify(message))
      });
    }
  },

  setEncryptionKeyForInterceptor: function (key) {
    // reinitializes the encryption key as new key will be stored in appSettings
    encryptionKey = key;
    appSettings.set('encryptionKeyForInterceptor', key, (err) => {
      console.log('INTERCEPTOR CONNECTIVITY: Error persisting encryption key', err);
    });
  },

  sendEncryptionKeyToRenderer: function () {
    var secretKey = {
      key: encryptionKey
    };
    windowManager.sendInternalMessage({
      'event': 'fetchEncryptionKey',
      'object': secretKey
    });
  },

  startKeyValidationFlow: function () {
    // encrypts default validation payload and sends it to interceptor
    // to check whether the same key exists at interceptor or not
    var encryptedData = encrypt(JSON.stringify(DEFAULT_KEY_VALIDATION_PAYLOAD));

    this.sendMessageToInterceptor('forwardMessageToInterceptor', {
      type: 'VALIDATE_KEY',
      data: encryptedData
    });
  },

  sendSyncDomainListToRenderer: function () {
    windowManager.sendInternalMessage({
      'event': 'getSyncDomainListForInterceptor'
    });
  },

  disconnect: function () {
    if (isClientConnected) {
      ipc.disconnect(interceptorBridgeSocketName);
      isClientConnected = false;
    }
  },

  sendMessageToInterceptor: function (event, message) {
    message.appVersion = appVersion; // current Postman app version
    ipc.of[interceptorBridgeSocketName].emit(event, {
      id: ipc.config.id,
      message
    });
  }
};
