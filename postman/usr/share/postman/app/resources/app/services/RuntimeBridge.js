var ipcMain = require('electron').ipcMain,
    runtime = require('postman-runtime'),
    { AuthLoader, authorizeRequest } = require('postman-runtime/lib/authorizer'),
    sdk = require('postman-collection'),
    _ = require('lodash'),
    SerializedError = require('serialised-error'),
    getSystemProxy = require('../utils/getSystemProxy'),
    cookieManagerInstance = require('./CookieManager'),
    fs = require('fs'),
    PostmanFs = require('../common/utils/postmanFs'),
    cookieIntegration = require('./RuntimeCookieIntegration'),
    putCookiesInTheJar = cookieIntegration.putCookiesInTheJar,
    addCookiesFromJarToCookieManager = cookieIntegration.addCookiesFromJarToCookieManager,
    { stringifyCookieObject, _parseCookieHeader } = require('../common/utils/cookie'),
    { ensureProperUrl, getURLProps } = require('../common/utils/url');

/**
 * A Postman SDK object
 *
 * @typedef {Object} SDKObject
 */

/**
 * JSON representation of a Postman SDK object
 *
 * @typedef {Object} SDKObject~definition
 */

/**
 * Pool of all existing runs
 *
 * @var {Object} NodeRuntimeBridge~runPool
 */
var runPool = {};

/**
 * Stringifies an error into a JSON string
 *
 * @function NodeRuntimeBridge~wrapError
 *
 * @param {Error} error - Error object to be stringified
 *
 * @return {String} Stringified error
 */
function wrapError (error) {
  return error && JSON.stringify(new SerializedError(error));
}

/**
 * Adds cookies from headers to cookieJar
 *
 * @function NodeRuntimeBridge~addCookiesFromHeaderToJar
 *
 * @param {string} cookiePartitionId cookie partition id
 * @param {CookieJar} cookieJar     - CookieJar instance where the cookies have to be moved
 * @param {Object[]} requestHeaders - Headers from a Request that will be analyzed
 * @param {URL} requestUrlValue     - URL of the request the headers belong to
 * @param {String} requestUrlHost   - Host of the request URL
*/
function addCookiesFromHeaderToJar (cookiePartitionId, cookieJar, requestHeaders, requestUrlValue, requestUrlHost) {
  var cookiesFromRequest;
  _.forEach(requestHeaders, (header) => {
    if (header && _.isString(header.key) && header.key.toLowerCase() === 'cookie') {
      try {
        cookiesFromRequest = _parseCookieHeader(requestUrlHost, header.value);
        _.forEach(cookiesFromRequest, (cookie) => {

          try {
            cookieJar.setCookie(stringifyCookieObject(cookie), requestUrlValue);
          }
          catch (e) {
            pm.logger.error('RuntimeBridge~addCookiesFromHeaderToJar - Error adding cookie to jar', e);
          }
        });
      }
      catch (e) {
        pm.logger.error('RuntimeBridge~addCookiesFromHeaderToJar - Error parsing cookie header', e);
      }
    }
  });
}

/**
 * Extracts headers from a request
 *
 * @function NodeRuntimeBridge~getHeadersFromRequest
 *
 * @param {Request} request - Request object to extract headers from
 *
 * @returns {Header~definition[]} Request headers
*/
function getHeadersFromRequest (request) {
  return _.reduce(request.header, (accumulator, header) => {
    accumulator.push({
      name: header.key,
      key: header.key,
      value: header.value,
      enabled: !_.get(header, 'disabled', false)
    });
    return accumulator;
  }, []);
}

/**
* Converts any Postman SDK object into a JSON, safely
*
* @function NodeRuntimeBridge~serializeSDKObject
*
* @param {?SDKObject} sdkObject - The SDK object to convert
*
* @returns {?SDKObject~definition} JSON representation of the Postman SDK object
*/
function serializeSDKObject (sdkObject) {
  if (_.isNil(sdkObject)) {
    return sdkObject;
  }

  if (_.isFunction(sdkObject.toJSON)) {
    return sdkObject.toJSON();
  }

  // malformed sdk object or not one
  return sdkObject;
}

/**
 * Disposes a run.
 * Also makes sure there are no pending callbacks.
 *
 * @function NodeRuntimeBridge~disposeRun
 *
 * @param {UUID} runId - ID of the run that needs to be disposed
 */
function disposeRun (runId) {
  var runCache = runPool[runId],
      run;
  if (!runCache) {
    return;
  }

  if (runCache.pendingCallbacks === 0) {
    run = runCache.run;
    run.host && _.isFunction(run.host.dispose) && run.host.dispose();
    delete runPool[runId];
    return;
  }

  setTimeout(disposeRun, 1000, runId);
}

/**
 * Starts a run because of an IPC event from the renderer process
 *
 * @function NodeRuntimeBridge~handleRunCreate
 *
 * @param {Object} event                     - The IPC event that invoked this function
 * @param {UUID} id                          - ID of the new run so it can be added to the run pool
 * @param {Object} options.runnerOptions     - Options for new Runner
 * @param {Object} runOptions                - Options for runtime's run function
 * @param {Object} runMetaData               - Extra data about the run, for example, certificates
 * @param {Collection~definition} collection - The collection to run
 */
function handleRunCreate (event, id, { runnerOptions = {}, fileResolver }, runOptions, runMetaData = {}, collection) {
  var options = _.clone(runnerOptions),
      cookiePartitionId = runMetaData.cookiePartitionId,
      runWithEmptyCookieJar = runMetaData.runWithEmptyCookieJar,
      saveCookiesAfterRun = runMetaData.saveCookiesAfterRun,
      cookieJar = require('./cookieJar').cookieJar.create(),
      runner, sender, sdkCollection;

  options.run = options.run || {};

  if (!runWithEmptyCookieJar) {
    // Add cookies from cookieManager to the cookieJar
    putCookiesInTheJar(cookiePartitionId, cookieManagerInstance, cookieJar);
  }

  _.set(runnerOptions, 'run.requester.cookieJar', cookieJar);


  // fileResolver
  if (fileResolver) {
    let { workingDir, insecureFileRead, fileWhitelist } = fileResolver;

    runOptions.fileResolver = new PostmanFs(workingDir, insecureFileRead, fileWhitelist);
  } else {
    runOptions.fileResolver = fs;
  }

  if (runOptions.useSystemProxy) {
    runOptions.systemProxy = getSystemProxy;
  }

  if (runOptions.proxies) {
    runOptions.proxies = new sdk.ProxyConfigList({}, runOptions.proxies);
  }

  runOptions.certificates = new sdk.CertificateList({}, runMetaData.certificates);

  runner = new (runtime.Runner)(options);
  sender = event.sender;
  sdkCollection = new sdk.Collection(collection);

  // create a run
  runner.run(sdkCollection, runOptions, (runCreateError, run) => {
    var transformedUrl;

    if (runCreateError) {
      sender.send(`RUNTIME_RUN_CREATE_ERROR_${id}`, wrapError(runCreateError));
    }

    // add the run and sender to the pool for callbacks
    runPool[id] = {
      run,
      sender,
      pendingCallbacks: 0
    };

    // send success event
    sender.send(`RUNTIME_RUN_CREATE_${id}`, id);

    run.start({
      // callback stubs
      // essentially they are proxies to the actual callback on render process

      start (err, cursor) {
        sender.send('RUNTIME_CALLBACK_START', id, wrapError(err), cursor);
      },

      io (err, cursor, trace, response, request, cookies) {
        sender.send('RUNTIME_CALLBACK_IO', id, wrapError(err), cursor, trace, serializeSDKObject(response), serializeSDKObject(request), cookies);
      },

      beforeIteration (err, cursor) {
        sender.send('RUNTIME_CALLBACK_BEFOREITERATION', id, wrapError(err), cursor);
      },

      beforeItem (err, cursor, item) {
        sender.send('RUNTIME_CALLBACK_BEFOREITEM', id, wrapError(err), cursor, serializeSDKObject(item));
      },

      beforePrerequest (err, cursor, events, item) {
        sender.send('RUNTIME_CALLBACK_BEFOREPREREQUEST', id, wrapError(err), cursor, JSON.stringify(events), serializeSDKObject(item));
      },

      prerequest (err, cursor, prResults, item) {
        sender.send('RUNTIME_CALLBACK_PREREQUEST', id, wrapError(err), cursor, JSON.stringify(prResults), serializeSDKObject(item));
      },

      beforeRequest (err, cursor, req, item, aborter) {
        var currentRunData = runPool[id],
            requestJson = req.toJSON(),
            requestUrlHost = req.url.getHost(),
            requestHeaders = getHeadersFromRequest(requestJson);

        // store aborter so this request could be aborted at later point
        currentRunData && (currentRunData.requestAborter = aborter);

        transformedUrl = req.url.getRemote();

        addCookiesFromHeaderToJar(cookiePartitionId, cookieJar, requestHeaders, requestJson.url, requestUrlHost);

        sender.send('RUNTIME_CALLBACK_BEFOREREQUEST', id, wrapError(err), cursor, serializeSDKObject(req), serializeSDKObject(item), aborter);
      },


      request (err, cursor, responseObj, requestObj, item, cookies) {
        sender.send('RUNTIME_CALLBACK_REQUEST', id, wrapError(err), cursor, serializeSDKObject(responseObj), serializeSDKObject(requestObj), serializeSDKObject(item), cookies);

        if (saveCookiesAfterRun) {
          // to make sure the run instance is not disposed before completing the callback
          runPool[id] && runPool[id].pendingCallbacks++;

          // Setting and deleting cookies
          // this flow is included for each request in a collection run.
          // need to evaluate whether using the same flow for both is justified
          addCookiesFromJarToCookieManager(cookiePartitionId, cookieJar, cookieManagerInstance, transformedUrl, (addCookiesError, cookies) => {
            // custom callback - not part of runtime - to handle cookies.
            // @todo remove after adding a cookie store to runtime
            sender.send('RUNTIME_CALLBACK_COOKIES', id, wrapError(addCookiesError), cookies);
            runPool[id] && runPool[id].pendingCallbacks--;
          });
        }
      },

      response (err, cursor, responseObj, requestObj, item, cookies) {
        sender.send('RUNTIME_CALLBACK_RESPONSE', id, wrapError(err), cursor, serializeSDKObject(responseObj), serializeSDKObject(requestObj), serializeSDKObject(item), cookies);
      },

      assertion (cursor, assertion) {
        sender.send('RUNTIME_CALLBACK_ASSERTION', id, cursor, JSON.stringify(assertion));
      },

      beforeTest (err, cursor, events, item) {
        sender.send('RUNTIME_CALLBACK_BEFORETEST', id, wrapError(err), cursor, JSON.stringify(events), serializeSDKObject(item));
      },

      test: (err, cursor, testResults, item) => {
        sender.send('RUNTIME_CALLBACK_TEST', id, wrapError(err), cursor, JSON.stringify(testResults), serializeSDKObject(item));
      },

      item (err, cursor, item) {
        sender.send('RUNTIME_CALLBACK_ITEM', id, wrapError(err), cursor, serializeSDKObject(item));
      },

      iteration (err, cursor) {
        sender.send('RUNTIME_CALLBACK_ITERATION', id, wrapError(err), cursor);
      },

      exception (cursor, err) {
        sender.send('RUNTIME_CALLBACK_EXCEPTION', id, cursor, wrapError(err));
      },

      console (...args) {
        sender.send('RUNTIME_CALLBACK_CONSOLE', id, ...args);
      },

      pause (err, cursor) {
        sender.send('RUNTIME_CALLBACK_PAUSE', id, wrapError(err), cursor);
      },

      resume (err, cursor) {
        sender.send('RUNTIME_CALLBACK_RESUME', id, wrapError(err), cursor);
      },

      error (err) {
        sender.send('RUNTIME_CALLBACK_ERROR', id, wrapError(err));
      },

      done (err, cursor) {
        sender.send('RUNTIME_CALLBACK_DONE', id, wrapError(err), cursor);
      },

      stop (err, ...args) {
        sender.send('RUNTIME_CALLBACK_STOP', id, wrapError(err), ...args);
      },

      abort (err, ...args) {
        sender.send('RUNTIME_CALLBACK_ABORT', id, wrapError(err), ...args);
      }
    });
  });
}

/**
 * Pauses a run, because of an IPC event from the renderer process
 *
 * @function NodeRuntimeBridge~handleRunPause
 *
 * @param {Object} event - The IPC event that invoked this function
 * @param {UUID} id      - ID of the run that needs to be paused
 *
 * @listens IPC#RUNTIME_RUN_PAUSE
 */
function handleRunPause (event, id) {
  var run = runPool[id].run;
  run && run.pause();
}

/**
 * Resumes a run, because of an IPC event from the renderer process
 *
 * @function NodeRuntimeBridge~handleRunResume
 *
 * @param {Object} event - The IPC event that invoked this function
 * @param {UUID} id      - ID of the run that needs to be resumed
 *
 * @listens IPC#RUNTIME_RUN_RESUME
 */
function handleRunResume (event, id) {
  var run = runPool[id].run;
  run && run.resume();
}

/**
 * Stops a run, because of an IPC event from the renderer process.
 * Runtime cannot stop a paused run, so this resumes the run and stops it.
 *
 * @function NodeRuntimeBridge~handleRunStop
 *
 * @param {Object} event - The IPC event that invoked this function
 * @param {UUID} id      - ID of the run that needs to be stopped
 *
 * @listens IPC#RUNTIME_RUN_STOP
 */
function handleRunStop (event, id) {
  var run = runPool[id].run;
  run && run.resume();
  run && run.abort();
}

/**
 * Stops a request in flight, because of an IPC event from the renderer process.
 * This is used in the main app to cancel a request.
 *
 * @function NodeRuntimeBridge~handleRunStopRequest
 *
 * @param {Object} event - The IPC event that invoked this function
 * @param {UUID} id      - ID of the run that has the request that needs to be stopped
 *
 * @listens IPC#RUNTIME_RUN_STOP_REQUEST
 */
function handleRunStopRequest (event, id) {
  var runData = runPool[id];

  if (!runData) {
    return;
  }

  // if there is a request in flight stop it
  if (runData.requestAborter) {
    // abort the request
    runData.requestAborter.abort();
  }

  // abort the run
  // runtime cannot stop runs if it is in paused state
  // so resume it and then stop it
  runData.run && runData.run.resume();
  runData.run && runData.run.abort();
}

/**
 * Disposes a run object, because of an IPC event from the renderer process
 *
 * @function NodeRuntimeBridge~handleRunDispose
 *
 * @param {Object} event - The IPC event that invoked this function
 * @param {UUID} id      - ID of the run that needs to be stopped
 *
 * @listens IPC#RUNTIME_RUN_DISPOSE
 */
function handleRunDispose (event, id) {
  disposeRun(id);
}

/**
 * Uses runtime to authorize the request and sends the result back to renderer.
 *
 * @param {Object} event - The IPC event that invoked this function
 * @param {UUID} id - ID to determine whom to reply to.
 * @param {Object} request - Postman SDK Request
 */
function handleAuthorizeRequest (event, id, request) {
  let requestToAuthorize;
  try {
    requestToAuthorize = JSON.parse(request);
  }
  catch (parseError) {
    event.sender.send(`RUNTIME_AUTHORIZE_REQUEST_${id}`, wrapError(parseError), null);
    return;
  }

  authorizeRequest(new sdk.Request(requestToAuthorize), (err, authorizedRequest) => {
    if (err) {
      event.sender.send(`RUNTIME_AUTHORIZE_REQUEST_${id}`, wrapError(err), null);
      return;
    }

    event.sender.send(`RUNTIME_AUTHORIZE_REQUEST_${id}`, null, JSON.stringify(authorizedRequest.toJSON()));
  });
}

/**
 * Returns the manifest for the given auth type.
 *
 * @param {Object} event - The IPC event that invoked this function
 * @param {UUID} id - ID to determine whom to reply to.
 * @param {String} authType - Authorization type
 */
function handleGetAuthHandlerManifest (event, id, authType) {
  event.sender.send(`RUNTIME_GET_AUTH_HANDLER_${id}`, null, JSON.stringify(AuthLoader.getHandler(authType).manifest));
}

/**
 * The RuntimeBridge instance for the main process
 *
 * @class NodeRuntimeBridge
 */

/**
 * Sets up the Node end of he RuntimeBridge by attaching listeners for IPC events.
 * This needs to be called only once when initializing the App.
 *
 * @function NodeRuntimeBridge~setupRuntimeBridge
 */
var setupRuntimeBridge = function () {
  ipcMain.on('RUNTIME_RUN_CREATE', handleRunCreate);
  ipcMain.on('RUNTIME_RUN_PAUSE', handleRunPause);
  ipcMain.on('RUNTIME_RUN_RESUME', handleRunResume);
  ipcMain.on('RUNTIME_RUN_STOP', handleRunStop);
  ipcMain.on('RUNTIME_RUN_STOP_REQUEST', handleRunStopRequest);
  ipcMain.on('RUNTIME_RUN_DISPOSE', handleRunDispose);
  ipcMain.on('RUNTIME_AUTHORIZE_REQUEST', handleAuthorizeRequest);
  ipcMain.on('RUNTIME_GET_AUTH_HANDLER', handleGetAuthHandlerManifest);
};

module.exports = setupRuntimeBridge;
