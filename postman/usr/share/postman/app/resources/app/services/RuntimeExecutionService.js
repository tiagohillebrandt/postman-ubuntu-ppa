var _ = require('lodash'),
    fs = require('fs'),
    postmanRuntime = require('postman-runtime'),
    { AuthLoader, authorizeRequest } = require('postman-runtime/lib/authorizer'),
    postmanCollectionSdk = require('postman-collection'),
    cookieManager = require('./CookieManager'),
    CookieJar = require('./cookieJar').cookieJar,
    cookieIntegration = require('./RuntimeCookieIntegration'),
    putCookiesInJar = cookieIntegration.putCookiesInTheJar,
    addCookiesFromJarToCookieManager = cookieIntegration.addCookiesFromJarToCookieManager,
    collectionRunner = new postmanRuntime.Runner(),
    getSystemProxy = require('../utils/getSystemProxy'),
    SerializedError = require('serialised-error'),

    // Runner level options
    staticOptions = {
      host: {
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
        followRedirects: true
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
        cookieJar = CookieJar.create(),
        cookiePartitionId = options && options.cookiePartitionId,
        transformedUrl,
        finalOptions;

    // add cookies to the jar and set pass it in the options
    putCookiesInJar(cookiePartitionId, cookieManager, cookieJar);
    _.set(options, ['requester', 'cookieJar'], cookieJar);


    // apply defaults
    finalOptions = _.defaultsDeep(options, defaultRunOptions);

    // sanitize
    sanitizeRunOptions(finalOptions);


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
          transformedUrl = request.url;

          addAborter(info.id, aborter);

          let requestUrl = request.url && request.url.toString(),
              requestHeaders = request.headers && request.headers.toObject();

          pm.eventBus.channel('postman-runtime').publish({
            name: 'net',
            namespace: 'console',
            data: {
              id: info.id,

              cursor: cursor,

              request: {
                url: requestUrl,
                method: request.method,
                headers: requestHeaders
              }
            }
          });
        },

        io (err, cursor, trace, response, request) {
          let consolePayload = {},
            requestJSON;

          if (trace.type !== 'http' || !request) {
            return;
          }

          requestJSON = request.toJSON();

          consolePayload.request = {
            url: request && request.url && request.url.toString(),
            method: requestJSON.method,
            headers: request && request.headers && request.headers.toObject(),
            body: requestJSON.body,
            certificate: requestJSON.certificate,
            proxy: requestJSON.proxy
          };

          if (response) {
            consolePayload.response = {
              responseTime: response.responseTime,
              code: response.code,
              headers: response.headers && response.headers.toObject(),
              body: response.size().body / 1024 > 1024 ? 'Responses larger than 1MB are not shown' : response.text()
            };
          }

          consolePayload.id = info.id;
          consolePayload.cursor = cursor;

          if (err) {
            consolePayload.error = err.message;

            pm.eventBus.channel('postman-runtime').publish({
              name: 'netError',
              namespace: 'console',
              data: consolePayload
            });
          }
          else {
            pm.eventBus.channel('postman-runtime').publish({
              name: 'net',
              namespace: 'console',
              data: consolePayload
            });
          }
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
        },

        assertion (cursor, assertions) {
          // console.log('assertion', assertions);
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
        },

        response (err, cursor, response, request) {
          removeAborter(info.id);

          // send the actual request that was sent over network
          // always send request even if there is an error
          request && pm.eventBus.channel('postman-runtime').publish({
            name: 'requestDispatched',
            namespace: 'requestexecution',
            data: {
              id: info.id,
              request: request.toJSON()
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

          // send meta data
          pm.eventBus.channel('postman-runtime').publish({
            name: 'responseMetaReceived',
            namespace: 'requestexecution',
            data: {
              id: info.id,
              meta: {
                code: response.code,
                status: response.status,
                responseTime: response.responseTime,
                responseSize: response.size(),
                responseContentInfo: response.contentInfo()
              }
            }
          });

          // send headers
          response.headers && pm.eventBus.channel('postman-runtime').publish({
            name: 'responseHeadersReceived',
            namespace: 'requestexecution',
            data: {
              id: info.id,
              responseHeaders: response.headers.toJSON()
            }
          });

          // send body
          pm.eventBus.channel('postman-runtime').publish({
            name: 'responseBodyReceived',
            namespace: 'requestexecution',
            data: {
              id: info.id,

              // Passing down the encoded body will prevent from getting access to the raw stream if we want to write to image files etc.
              responseBody: response.stream.toJSON()
            }
          });

          addCookiesFromJarToCookieManager(cookiePartitionId, cookieJar, cookieManager, transformedUrl.getRemote(), (addCookiesError, cookies) => {
             // send cookies
             pm.eventBus.channel('postman-runtime').publish({
              name: 'cookiesReceived',
              namespace: 'requestexecution',
              data: {
                id: info.id,
                cookies: cookies
              }
            });
          });
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
