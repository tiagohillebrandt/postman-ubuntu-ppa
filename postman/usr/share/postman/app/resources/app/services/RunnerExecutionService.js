var _ = require('lodash'),
  fs = require('fs'),
  ipcMain = require('electron').ipcMain,
  runtime = require('postman-runtime'),
  sdk = require('postman-collection'),
  SerializedError = require('serialised-error'),

  getSystemProxy = require('../utils/getSystemProxy'),
  CookieJar = require('./CookieJar'),
  PostmanFs = require('../common/utils/postmanFs');

const MAX_RESPONSE_SIZE = 300 * 1024;


/**
 * Pool of all existing runs within all windows
 *
 * @var {Object} runPool
 */
var runPool = {};

/**
 * Stringifies an error into a JSON string
 *
 *
 * @param {Error} error - Error object to be stringified
 *
 * @return {String} Stringified error
 */
function wrapError (error) {
  return error && new SerializedError(error);
}

/**
 * Disposes a run while making sure there are no pending callbacks.
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
 *
 * @param {Object} event                     - The IPC event that invoked this function
 * @param {UUID}   id                        - ID of the new run so it can be added to the run pool
 * @param {Object} defaultOptions             - Options for new Runner
 * @param {Object} runOptions                - Options for runtime's run function
 * @param {Object} meta                      - Extra data about the run, for example, certificates
 * @param {Collection~definition} collection - The collection to run
 */
function handleRunCreate (id, defaultOptions = {}, runOptions, meta = {}, collection) {
  var {
      cookiePartitionId,
      runWithEmptyCookieJar,
      saveCookiesAfterRun,
      cookieConfiguration,
      fileResolver
    } = meta,

    cookieJar = new CookieJar(cookiePartitionId, {
      readFromDB: !runWithEmptyCookieJar,
      writeToDB: false, // disabled writeToDB to avoid real-time updates
      programmaticAccess: cookieConfiguration
    });

  // Set the cookieJar
  _.set(runOptions, 'requester.cookieJar', cookieJar);


  // Set the fileResolver
  if (fileResolver) {
    let { workingDir, insecureFileRead, fileWhitelist } = fileResolver;

    runOptions.fileResolver = new PostmanFs(workingDir, insecureFileRead, fileWhitelist);
  } else {
    runOptions.fileResolver = fs;
  }

  // Set the system proxy
  if (runOptions.useSystemProxy) {
    runOptions.systemProxy = getSystemProxy;
  }

  // Set the proxies
  if (runOptions.proxies) {
    runOptions.proxies = new sdk.ProxyConfigList({}, runOptions.proxies);
  }

  // Set the certificate information
  runOptions.certificates = new sdk.CertificateList({}, meta.certificates);

  const runner = new runtime.Runner(defaultOptions);

  // create a run
  runner.run((new sdk.Collection(collection)), runOptions, (runCreateError, run) => {
    if (runCreateError) {
      this.send('$create', wrapError(runCreateError));

      return;
    }

    // add the run and sender to the pool for callbacks
    runPool[id] = { run, pendingCallbacks: 0 };

    // send success event
    this.send('$create');

    run.start({
      // Consumers: Runner
      start: (err, cursor) => {
        this.send('start', wrapError(err), cursor);
      },

      // Consumers: Runner
      beforeItem: (err, cursor, item) => {
        const itemObj = {
          id: item.id,
          name: item.name,
          request: {
            url: _.invoke(item, 'request.url.toString', ''),
            method: _.get(item, 'request.method', '')
          }
        };

        this.send('beforeItem', wrapError(err), cursor, itemObj);
      },

      // Consumers: Runner
      response: (err, cursor, response, request) => {
        const requestObj = {
          url: _.invoke(request, 'url.toString', ''),
          method: _.get(request, 'method', ''),
          headers: request.getHeaders({ enabled: false }),
          body: request.toJSON().body
        },
        responseObj = {};

        if (response) {
          Object.assign(responseObj, {
            code: response.code,
            headers: response.headers.toJSON(),
            responseSize: response.size(),
            responseTime: response.responseTime,
            status: response.status,
            body: (response.size().total < MAX_RESPONSE_SIZE) ? response.text() : { ___ignored___: 'Response body is too large' }
          });
        }

        this.send('response', wrapError(err), cursor, responseObj, requestObj);
      },

      // Consumers: Runner
      assertion: (cursor, assertion) => {
        this.send('assertion', cursor, assertion);
      },

      script: (err, cursor, { globals, environment, collectionVariables }, script, event) => {
        this.send('script', err, cursor, { globals, environment, collectionVariables }, _.get(event, 'listen'));
      },

      // Consumers: Runner
      done: (err, cursor) => {
        if (!(saveCookiesAfterRun && cookieJar && typeof cookieJar.updateStore === 'function')) {
          this.send('done', wrapError(err), cursor);

          return;
        }

        // TODO - DECIDE on what to do with cookies when there was an error in done
        cookieJar.updateStore(() => {
          this.send('done', wrapError(err), cursor);
        });
      },

      // Consumers: Console
      request: (err, cursor, response, request, item, cookies, history) => {
        let requestJSON = request.toJSON(),
            executionData = _.get(history, 'execution.data'),

          requestObj = {
            url: request && request.url && request.url.toString(),
            method: requestJSON.method,
            headers: request && request.headers && request.headers.toJSON(),
            httpVersion: _.get(_.first(executionData), 'request.httpVersion', ''),
            body: requestJSON.body,
            certificate: requestJSON.certificate,
            proxy: requestJSON.proxy
          },
          responseObj = (response) ? {
            responseTime: response.responseTime,
            code: response.code,
            headers: response.headers && response.headers.toJSON(),
            status: response.reason(),
            httpVersion: _.get(_.last(executionData), 'response.httpVersion', ''),
            body: response.text(),
            contentInfo: _.isFunction(response.contentInfo) && response.contentInfo()
          } : {};

        this.send('request', wrapError(err), cursor, responseObj, requestObj, history);
      },

      // Consumers: Console
      exception: (cursor, err) => {
        this.send('exception', cursor, wrapError(err));
      },

      // Consumers: Console
      console: (...args) => {
        this.send('console', ...args);
      },

      // Consumers: Aborter
      beforeRequest: (err, cursor, req, item, aborter) => {
        var currentRunData = runPool[id];

        // store aborter so this request could be aborted at later point
        currentRunData && (currentRunData.requestAborter = aborter);
      },

      // Consumers: Runner Operational
      pause: (err, cursor) => {
        this.send('pause', wrapError(err), cursor);
      },

      // Consumers: Runner Operational
      resume: (err, cursor) => {
        this.send('resume', wrapError(err), cursor);
      },

      // Consumers: Runner Operational
      stop: (err, ...args) => {
        this.send('stop', wrapError(err), ...args);
      },

      // Consumers: Runner Operational
      abort: (err, ...args) => {
        this.send('abort', wrapError(err), ...args);
      }
    });
  });
}

/**
 * Pauses a run, because of an IPC event from the renderer process
 *
 *
 * @param {Object} event - The IPC event that invoked this function
 * @param {UUID} id      - ID of the run that needs to be paused
 *
 * @listens IPC#RUNTIME_RUN_PAUSE
 */
function handleRunPause (id) {
  var run = runPool[id] && runPool[id].run;
  run && run.pause();
}

/**
 * Resumes a run, because of an IPC event from the renderer process
 *
 *
 * @param {Object} event - The IPC event that invoked this function
 * @param {UUID} id      - ID of the run that needs to be resumed
 *
 * @listens IPC#RUNTIME_RUN_RESUME
 */
function handleRunResume (id) {
  var run = runPool[id].run;
  run && run.resume();
}

/**
 * Stops a run, because of an IPC event from the renderer process.
 * Runtime cannot stop a paused run, so this resumes the run and stops it.
 *
 * @param {Object} event - The IPC event that invoked this function
 * @param {UUID} id      - ID of the run that needs to be stopped
 *
 * @listens IPC#RUNTIME_RUN_STOP
 */
function handleRunStop (id) {
  var run = runPool[id] && runPool[id].run;

  run && run.resume();
  run && run.abort();
}

/**
 * Disposes a run object, because of an IPC event from the renderer process
 *
 * @param {Object} event - The IPC event that invoked this function
 * @param {UUID} id      - ID of the run that needs to be stopped
 *
 * @listens IPC#RUNTIME_RUN_DISPOSE
 */
function handleRunDispose (id) {
  disposeRun(id);
}

/**
 * Handle the incoming message by calling the respective event handlers by type
 * note: The ipcRendererEvent is bound to the this of each handler so that
 *       this.send() API can be used if required
 *
 * @param {Object} event The IPC event that invoked this function
 * @param {String} type The type of the event that was emitted
 * @param {Array} args The arguments for the handler
 */
function _handleIncomingMessages (event, type, args) {
  const id = args[0],
    send = (type, ...args) => {
      try {
        event.sender.send('RUNNER_RESPONSE', type, [id, ...args]);
      } catch (err) {
        var runCache = runPool[id];

        // If the run cache does not exist then bail as there is nothing we can do about it.
        if (!runCache) {
          return;
        }

        // Stop and Dispose off the run as that reference window is gone
        handleRunStop(id);
        handleRunDispose(id);

        console.log('RunnerExecutionService~send : Cannot send message through to runner renderer, ', err.message);
      }
    };

  switch (type) {
    case 'create':
      handleRunCreate.apply({ send }, args);
      break;
    case 'pause':
      handleRunPause.apply({ send }, args);
      break;
    case 'resume':
      handleRunResume.apply({ send }, args);
      break;
    case 'stop':
      handleRunStop.apply({ send }, args);
      break;
    case 'dispose':
      handleRunDispose.apply({ send }, args);
      break;
    default:
      console.log('RunnerExecutionService~_handleIncomingMessage:',
        `Unknown message of type ${type} received`);
  }
}

/**
 * Setup a single incoming channel for runner that will be used to interact with
 * instance of the runner in the main process.
 */
function _setupRunnerBridge () {
  ipcMain.on('RUNNER_REQUEST', _handleIncomingMessages);
}

module.exports = _setupRunnerBridge;
