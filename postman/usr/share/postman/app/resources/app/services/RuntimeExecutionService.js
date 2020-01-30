var _ = require('lodash'),
    fs = require('fs'),

    postmanRuntime = require('postman-runtime'),
    { AuthLoader, authorizeRequest } = require('postman-runtime/lib/authorizer'),
    postmanCollectionSdk = require('postman-collection'),
    SerializedError = require('serialised-error'),

    CookieJar = require('./CookieJar'),
    getSystemProxy = require('../utils/getSystemProxy'),
    PostmanFs = require('../common/utils/postmanFs'),

    // Runner level options
    staticOptions = {
      host: {

        // FIXME: These options do not seem to be exists in postman-runtime
        // Investigate as to why they still exist and if not required them remove them
        // libraries to include sandbox legacy globals interface
        requires: ['lodash', 'crypto-all', 'tv4', 'xml2js', 'atob', 'btoa']
      }
    },

    defaultRunOptions = {

      // timeout
      timeout: {
        global: 0, // infinity
        request: 0, // infinity
        script: 0 // infinity
      },

      // stop execution if there are errors
      stopOnError: true,

      // disable setNextRequest
      disableSNR: true,

      // 1 iteration
      iterationCount: 1,

      requester: {

        // strict SSL verification
        strictSSL: true,

        // follow redirects by default
        followRedirects: true,

        // for insights in Console
        verbose: true
      },

      script: {
        // get logs as a serialized string to preserve rich types
        serializeLogs: true
      },

      // turn on system proxy by default
      useSystemProxy: true,

      // resolver to use for loading files
      fileResolver: fs
    },

    collectionRunner = new postmanRuntime.Runner(staticOptions),
    activeRuns = {};

/**
 *
 *
 * @param {*} executionId
 */
function disposeRun (executionId) {
  if (!executionId || !activeRuns[executionId]) {
    return;
  }

  activeRuns[executionId].host && activeRuns[executionId].host && activeRuns[executionId].host.dispose();
  activeRuns[executionId].aborter && activeRuns[executionId].aborter.abort();

  // dispose the reference
  activeRuns[executionId] = null;
}

/**
 *
 *
 */
function trackRun (executionId, run) {
  activeRuns[executionId] = run;
}

/**
 *
 *
 */
function addAborter (executionId, aborter) {
  activeRuns[executionId] && (activeRuns[executionId].aborter = aborter);
}

/**
 *
 *
 */
function removeAborter (executionId) {
  activeRuns[executionId] && (delete activeRuns[executionId].aborter);
}

/**
 * Sanitizes options to be sent to runtime. Mostly converting objects into SDK instances.
 *
 * @param {Object} rawOptions
 */
function sanitizeRunOptions (rawOptions) {
  if (!rawOptions) {
    return;
  }

  if (rawOptions.useSystemProxy) {
    rawOptions.systemProxy = getSystemProxy;
  }

  if (rawOptions.proxies) {
    rawOptions.proxies = new postmanCollectionSdk.ProxyConfigList({}, rawOptions.proxies);
  }

  rawOptions.certificates = new postmanCollectionSdk.CertificateList({}, rawOptions.certificates);
}

var RuntimeExecutionService = {
  startRun (info, collection, variables, options = {}) {
    var sdkCollection = new postmanCollectionSdk.Collection(collection),
      cookiePartitionId = options && options.cookiePartitionId,
      cookieJar = new CookieJar(cookiePartitionId, { programmaticAccess: options.cookieConfiguration }),
      finalOptions;

    _.set(options, ['requester', 'cookieJar'], cookieJar);


    // apply defaults
    finalOptions = _.defaultsDeep(options, defaultRunOptions);

    // sanitize
    sanitizeRunOptions(finalOptions);

    // fileResolver
    if (info.fileResolver) {
      let { workingDir, insecureFileRead, fileWhitelist } = info.fileResolver;

      finalOptions.fileResolver = new PostmanFs(workingDir, insecureFileRead, fileWhitelist);
    }

    // add variables
    variables.environment && (finalOptions.environment = new postmanCollectionSdk.VariableScope(variables.environment));
    variables.globals && (finalOptions.globals = new postmanCollectionSdk.VariableScope(variables.globals));

    collectionRunner.run(sdkCollection, finalOptions, function (err, run) {
      if (err) {
        pm.logger.error('RuntimeExecutionService~startRun - Error in starting the run', err);
        return;
      }

      trackRun(info.id, run);

      run.start({
        start (err) {
          pm.eventBus.channel('postman-runtime').publish({
            name: 'started',
            namespace: 'requestexecution',
            data: info
          });
        },

        console (cursor, level, ...param) {
          pm.eventBus.channel('postman-runtime').publish({
            name: 'log',
            namespace: 'console',
            data: {
              id: info.id,
              cursor: cursor,
              level: level,
              messages: param
            }
          });
        },

        beforeRequest (err, cursor, request, item, aborter) {
          addAborter(info.id, aborter);
        },

        exception (cursor, exception) {
          pm.eventBus.channel('postman-runtime').publish({
            name: 'exception',
            namespace: 'requestexecution',
            data: {
              id: info.id,
              error: new SerializedError(exception)
            }
          });

          pm.eventBus.channel('postman-runtime').publish({
            name: 'exception',
            namespace: 'console',
            data: {
              id: info.id,
              cursor: cursor,
              error: exception
            }
          });
        },

        assertion (cursor, assertions) {
          pm.eventBus.channel('postman-runtime').publish({
            name: 'assertionsReceived',
            namespace: 'requestexecution',
            data: {
              id: info.id,
              assertions: assertions
            }
          });
        },

        script (err, cursor, result, script, event) {
          if (err) {
            pm.eventBus.channel('postman-runtime').publish({
              name: 'error',
              namespace: 'requestexecution',
              data: {
                id: info.id,
                error: new SerializedError(err),
                phase: (event && event.listen) || 'script'
              }
            });

            return;
          }

          result.globals && pm.eventBus.channel('postman-runtime').publish({
            name: 'globalsUpdated',
            namespace: 'variableupdates',
            data: {
              id: info.id,
              globals: result.globals
            }
          });

          result.environment && pm.eventBus.channel('postman-runtime').publish({
            name: 'environmentUpdated',
            namespace: 'variableupdates',
            data: {
              id: info.id,
              environment: result.environment
            }
          });

          if (result.collectionVariables) {
            // update collectionVariables VariableScope's id to collection session id because
            // collection variables are stored as VariableList and sessions are not first class
            // citizen in runtime.
            info.collectionVariablesSessionId &&
              (result.collectionVariables.id = info.collectionVariablesSessionId);

            pm.eventBus.channel('postman-runtime').publish({
              name: 'collectionVariablesUpdated',
              namespace: 'variableupdates',
              data: {
                id: info.id,
                collectionVariables: result.collectionVariables
              }
            });
          }
        },

        request (err, cursor, response, request, item, cookies, history) {
          let consolePayload = {},
            requestJSON = request.toJSON();

          let executionData = _.get(history, 'execution.data');

          consolePayload.id = info.id;
          consolePayload.cursor = cursor;
          consolePayload.history = history;

          consolePayload.request = {
            url: request && request.url && request.url.toString(),
            method: requestJSON.method,
            headers: request && request.headers && request.headers.toJSON(),
            httpVersion: _.get(_.first(executionData), 'request.httpVersion', ''),
            body: requestJSON.body,
            certificate: requestJSON.certificate,
            proxy: requestJSON.proxy
          };

          if (response) {
            consolePayload.response = {
              responseTime: response.responseTime,
              code: response.code,
              headers: response.headers && response.headers.toJSON(),
              status: response.reason(),
              httpVersion: _.get(_.last(executionData), 'response.httpVersion', ''),
              body: response.text(),
              contentInfo: _.isFunction(response.contentInfo) && response.contentInfo()
            };
          }

          if (err) {
            consolePayload.error = err.message;
          }

          pm.eventBus.channel('postman-runtime').publish({
            name: 'net',
            namespace: 'console',
            data: consolePayload
          });
        },

        responseStart (err, cursor, response, request, item, cookies, history) {
          // send the actual request that was sent over network
          // always send request even if there is an error
          request && pm.eventBus.channel('postman-runtime').publish({
            name: 'requestDispatched',
            namespace: 'requestexecution',
            data: {
              id: info.id,
              request: request.toJSON(),
              requestSize: request.size()
            }
          });

          if (err) {
            pm.eventBus.channel('postman-runtime').publish({
              name: 'error',
              namespace: 'requestexecution',
              data: {
                id: info.id,
                error: new SerializedError(err),
                phase: 'request'
              }
            });

            return;
          }

          if (!response) {
            return;
          }

          // There is a possibility that there are redirects in that case we will have multiple
          // timings, the last timing is the one that we need.
          // NOTE: The timing information will be partial here, we can only get the full
          // after the completion of the request
          let timings = _.last(_.get(history, 'execution.data'));

          timings = timings && timings.timings;

          // send response meta data (We do not have the timing information here)
          // FUTURE: Add time some timing information here to start of
          pm.eventBus.channel('postman-runtime').publish({
            name: 'responseMetaReceived',
            namespace: 'requestexecution',
            data: {
              id: info.id,
              meta: {
                code: response.code,
                status: response.status,
                responseSize: response.size(),
                timingPhases: postmanCollectionSdk.Response.timingPhases(timings)
              }
            }
          });

         // Send headers from the response head
          response.headers && pm.eventBus.channel('postman-runtime').publish({
            name: 'responseHeadersReceived',
            namespace: 'requestexecution',
            data: {
              id: info.id,
              responseHeaders: response.headers.toJSON()
            }
          });

          if (postmanCollectionSdk.CookieList.isCookieList(cookies)) {
            cookies = cookies.toJSON();
          } else {
            cookies = Array.isArray(cookies) ? cookies : [];
          }

          /**
           * The `request` event is called after the `responseStart` so during this interval
           * there will be no cookies to be shown in the UI.
           */
          pm.eventBus.channel('postman-runtime').publish({
            name: 'cookiesReceived',
            namespace: 'requestexecution',
            data: {
              id: info.id,
              cookies: cookies
            }
          });
        },

        response (err, cursor, response, request, item, cookies, history) {
          removeAborter(info.id);

          if (err) {
            // send the actual request that was sent over network when there is an error as in such cases
            // responseStart would not have been fired
            request && pm.eventBus.channel('postman-runtime').publish({
              name: 'requestDispatched',
              namespace: 'requestexecution',
              data: {
                id: info.id,
                request: request.toJSON(),
                requestSize: request.size()
              }
            });

            pm.eventBus.channel('postman-runtime').publish({
              name: 'error',
              namespace: 'requestexecution',
              data: {
                id: info.id,
                error: new SerializedError(err),
                phase: 'request'
              }
            });

            return;
          }

          if (!response) {
            return;
          }

          // There is a posibility that there are redirects in that case we will have multiple
          // timings, the last timing is the one that we need.
          let timings = _.last(_.get(history, 'execution.data'));

          timings = timings && timings.timings;

          // Send final meta information data about the response. At this point we know everything
          // about the response
          pm.eventBus.channel('postman-runtime').publish({
            name: 'responseFinalized',
            namespace: 'requestexecution',
            data: {
              id: info.id,
              meta: {
                responseSize: response.size(),
                responseTime: response.responseTime,
                timingPhases: postmanCollectionSdk.Response.timingPhases(timings)
              },
              responseContentInfo: _.isFunction(response.contentInfo) && response.contentInfo()
            }
          });

          // TODO: Move task of response receiving to streaming model
          // Post that this callback will only signal the end of response
          pm.eventBus.channel('postman-runtime').publish({
            name: 'responseBodyReceived',
            namespace: 'requestexecution',
            data: {
              id: info.id,

              /**
               * WARN: At this point a copy of the stream is being made and persisted as a string.
               * This will cause 2x memory usage.
               * FUTURE: This is a trade-off that we need to accept at this moment as react could repeatedly
               * read this data
               */
              responseBody: response.text()
            }
          });

          // send body stream
          pm.eventBus.channel('postman-runtime').publish({
            name: 'responseBodyStreamReceived',
            namespace: 'requestexecution',
            data: {
              id: info.id,

              /**
               * Passing the stream directly to IPC instead of converting it to JSON.
               *
               * WARNING: Historically response.steam.toJSON() was being used as encoded body would
               * have prevent from getting access to the raw stream if we want to write to image
               * files etc, but the conversion of stream to a JSON resulted in nearly 15x increase on heapMemory
               * consumption, therefore DO NOT CONVERT stream to json
               */
              responseBodyStream: response.stream
            }
          });
        },

        item (err, cursor, item, visualizerData) {
          if (err) {
            /**
             * Note: The error is not being handled here because currently Runtime always sends
             * null for error in this callback.
             *
             * @todo: Review this decision of not handling the error if runtime decides to
             * send any errors in this callback
             */
            pm.logger.info('RuntimeExecutionService~Error in item callback', err);
            return;
          }

          if (visualizerData) {
            visualizerData.error &&
              (visualizerData.error = new SerializedError(visualizerData.error));

            pm.eventBus.channel('postman-runtime').publish({
              name: 'visualizerDataReceived',
              namespace: 'requestexecution',
              data: {
                id: info.id,
                visualizerData: visualizerData
              }
            });
          }
        },

        done (err) {
          pm.eventBus.channel('postman-runtime').publish({
            name: 'finished',
            namespace: 'requestexecution',
            data: {
              id: info.id,
              error: new SerializedError(err)
            }
          });

          disposeRun(info.id);
        }
      });
    });
  },

  initialize () {
    pm.eventBus.channel('postman-runtime').subscribe(function (message) {
      if (message.namespace === 'execution' && message.name === 'terminate') {
        disposeRun(message.data.execution);

        pm.eventBus.channel('postman-runtime').publish({
          name: 'terminated',
          namespace: 'requestexecution',
          data: { id: message.data.execution }
        });

        return;
      }

      if (message.name === 'execute') {
        RuntimeExecutionService.startRun(message.data.info, message.data.collection, message.data.variables, message.data.options);
        return;
      }

      if (message.name === 'loadAuthManifests') {
        let handlers = AuthLoader.handlers,
            authManifests = {};

        authManifests = Object.keys(handlers).reduce((acc, authType) => {
          acc[authType] = handlers[authType].manifest;
          return acc;
        }, {});

        pm.eventBus.channel('postman-runtime').publish({
          name: 'fetchedAuthHandlers',
          namespace: 'requestauth',
          data: { authManifests: authManifests }
        });
      }

      if (message.name === 'authorizeRequest') {
        let request = message.data && message.data.request,
            info = message.data && message.data.info,
            requestToAuthorize;

        try {
          requestToAuthorize = JSON.parse(request);
        }
        catch (e) {
          let error = e && (new SerializedError(e));

          pm.eventBus.channel('postman-runtime').publish({
            name: 'authorizedRequest',
            namespace: 'requestauth',
            data: { info, error: error }
          });
        }

        authorizeRequest(new postmanCollectionSdk.Request(requestToAuthorize), (err, authorizedRequest) => {
          if (err) {
            pm.eventBus.channel('postman-runtime').publish({
              name: 'authorizedRequest',
              namespace: 'requestauth',
              data: { info, error: err && (new SerializedError(err)) }
            });
          }

          pm.eventBus.channel('postman-runtime').publish({
            name: 'authorizedRequest',
            namespace: 'requestauth',
            data: { info, authorizedRequest: authorizedRequest.toJSON() }
          });
        });
      }

    });
    pm.logger.info('RuntimeExecutionService~initialized: Success');
  }
};

module.exports = RuntimeExecutionService;
