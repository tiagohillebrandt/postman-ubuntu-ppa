let ipc = require('electron').ipcMain,
    runtime = require('postman-runtime'),
    sdk = require('postman-collection'),
    SerializedError = require('serialised-error'),
    OAUTH2_GRANT_TYPE = {
      AUTHORIZATION_CODE: 'authorization_code',
      IMPLICIT: 'implicit',
      PASSWORD_CREDENTIALS: 'password_credentials',
      CLIENT_CREDENTIALS: 'client_credentials'
    },
    OAuth2WindowManager = require('./OAuth2WindowManager'),
    fs = require('fs'),
    getSystemProxy = require('../utils/getSystemProxy');

/**
 * Populating runOptions
 * @param {Object} runOptions
 * @param {Object} runMetaData
 */
  function populateRunOptions (runOptions, runMetaData) {
    runOptions.fileResolver = fs;

    if (runMetaData.useSystemProxy) {
      runOptions.systemProxy = getSystemProxy;
    }

    if (runMetaData.proxies) {
      runOptions.proxies = new sdk.ProxyConfigList({}, runMetaData.proxies);
    }

    runOptions.certificates = new sdk.CertificateList({}, runMetaData.certificates);

    runOptions.requester = runMetaData.requester;
  }

/**
 * This handles bulk of the OAuth 2.0 authentication flows. The end goal is to move this into postman-runtime
 *
 * @class OAuth2TokenRequester
 */
class OAuth2TokenRequester {
  constructor (options = {}) {
    this.runMetaData = options.runMetaData;
    this.log = options.log;
    this.windowManager = options.windowManager;
  }

  /**
   * Starts OAuth 2.0 token request flow. This may or may not involve opening the User Agent with the given url.
   *
   * @param {Object} params OAuth 2 definition
   * @param {Function} callback callback invoked with token success
   * @returns {undefined}
   */
  startTokenRequestFlow (params, callback) {
    switch (params.grant_type) {
      case OAUTH2_GRANT_TYPE.AUTHORIZATION_CODE:
        return this.handleAuthorizationCodeType(params, callback);
      case OAUTH2_GRANT_TYPE.IMPLICIT:
        return this.handleImplicitType(params, callback);
      case OAUTH2_GRANT_TYPE.PASSWORD_CREDENTIALS:
        return this.handlePasswordCredentialsType(params, callback);
      case OAUTH2_GRANT_TYPE.CLIENT_CREDENTIALS:
        return this.handleClientCredentialsType(params, callback);
      default:
        return callback && callback(new Error('Could not complete OAuth 2.0 token request, grant type is invalid'));
    }
  }

  /**
   * Adds client authentication to request.
   * If `client_authentication` is set to body, it is added to body, or as basic auth header if set to `header`.
   *
   * @param {SDKRequest} request request to authenticate
   * @param {Object} options has `client_authentication`, client_id` and `client_secret`
   */
  addClientAuthentication (request, options) {
    if (options.client_authentication === 'body') {
      request.body.urlencoded.populate([
        {
          key: 'client_id',
          value: options.client_id
        },
        {
          key: 'client_secret',
          value: options.client_secret
        }
      ]);
    }
    else {
      options.grant_type === OAUTH2_GRANT_TYPE.AUTHORIZATION_CODE &&
        request.body.urlencoded.add({
          key: 'client_id',
          value: options.client_id
        });

      request.auth = new sdk.RequestAuth({
        type: 'basic',
        basic: [
          {
            key: 'username',
            value: options.client_id
          },
          {
            key: 'password',
            value: options.client_secret
          }
        ]
      });
    }
  }

  /**
   * Returns a bootstrapped token request for OAuth 2.0. Has grant type added to body.
   *
   * @param {SDKUrl} url url for token request
   * @param {String} grantType grant type to be sent in payload
   *
   * @returns {SDKRequest} an sdk Request Object
   */
  getOAuth2TokenRequest (url, grantType) {
    return new sdk.Request({
      method: 'POST',
      url: url,
      header: [{
        key: 'Content-Type',
        value: 'application/x-www-form-urlencoded'
      }],
      body: {
        mode: 'urlencoded',
        urlencoded: [{
          key: 'grant_type',
          value: grantType
        }]
      }
    });
  }

  /**
   * Handles OAuth flow for authorization_code grant type. Involves opening auth url in a window.
   *
   * @see https://tools.ietf.org/html/rfc6749#section-4.1
   *
   * @param {Object} params auth definition
   * @param {Function} callback executed once token/error is received
   */
  handleAuthorizationCodeType (params, callback) {
    let authUrl = new sdk.Url(params.authorization_url);

    // add auth params for login window
    authUrl.addQueryParams([
      {
        key: 'response_type',
        value: 'code'
      },
      {
        key: 'state',
        value: encodeURIComponent(params.state)
      },
      {
        key: 'client_id',
        value: encodeURIComponent(params.client_id)
      },
      {
        key: 'scope',
        value: encodeURIComponent(params.scope)
      },
      {
        key: 'redirect_uri',
        value: encodeURIComponent(params.redirect_uri)
      }
    ]);

    // request window manager for login
    let authWindowManager = this.windowManager,
      options = {
        params: ['code'],
        uri: params.redirect_uri
      };

    authWindowManager && authWindowManager.startLoginWith(authUrl, options, (err, tokenParams) => {
      if (err) {
        if (!err.message || !err.name) {
          err = new Error(err.error_description || err.error || err.message || err);
        }

        callback(err, tokenParams);
        return;
      }

      let request = this.getOAuth2TokenRequest(params.access_token_url, OAUTH2_GRANT_TYPE.AUTHORIZATION_CODE);

      // add authorization code flow specific params
      request.body.urlencoded.populate([
        {
          key: 'code',
          value: tokenParams.code
        },
        {
          key: 'redirect_uri',
          value: params.redirect_uri
        }
      ]);

      // authenticate token request
      this.addClientAuthentication(request, params);

      // exchange authorization code for access token
      this.requestAccessToken({ request: request.toJSON() }, callback);
    });
  }

  /**
   * Handles OAuth 2.0 flow for implicit grant type. Involves user login on a window.
   *
   * @see https://tools.ietf.org/html/rfc6749#section-4.2
   *
   * @param {Object} params Auth definition
   * @param {Function} callback called once token/error is matched
   */
  handleImplicitType (params, callback) {
    let authUrl = new sdk.Url(params.authorization_url);

    authUrl.addQueryParams([
      {
        key: 'response_type',
        value: 'token'
      },
      {
        key: 'state',
        value: encodeURIComponent(params.state)
      },
      {
        key: 'client_id',
        value: encodeURIComponent(params.client_id)
      },
      {
        key: 'scope',
        value: encodeURIComponent(params.scope)
      },
      {
        key: 'redirect_uri',
        value: encodeURIComponent(params.redirect_uri)
      }
    ]);

    // request window manager to start auth login flow
    let authWindowManager = this.windowManager,
      options = {
        params: ['access_token'],
        uri: params.redirect_uri
      };

    authWindowManager && authWindowManager.startLoginWith(authUrl, options, (err, tokenParams) => {
      if (err) {
        if (!err.message || !err.name) {
          err = new Error(err.error_description || err.error || err.message || err);
        }

        callback(err, tokenParams);
        return;
      }

      // access_token is in the hash, no further request needed
      callback(null, tokenParams);
    });
  }

  /**
   * Handles OAuth 2.0 flow for password grant type. Does not involve user login flow.
   *
   * @see https://tools.ietf.org/html/rfc6749#section-4.3
   *
   * @param {Object} params auth definition params
   * @param {Function} callback called with the response of token request
   */
  handlePasswordCredentialsType (params, callback) {
    let request = this.getOAuth2TokenRequest(params.access_token_url, 'password');

    request.body.urlencoded.populate([
      {
        key: 'username',
        value: params.username
      },
      {
        key: 'password',
        value: params.password
      },
      {
        key: 'scope',
        value: params.scope
      }
    ]);

    // authenticate token request
    this.addClientAuthentication(request, params);

    // request token
    this.requestAccessToken({ request: request.toJSON() }, callback);
  }

  /**
   * Handles OAuth 2.0 flow for client credentials grant type. Does not involve user login flow.
   *
   * @see https://tools.ietf.org/html/rfc6749#section-4.4
   *
   * @param {Object} params auth definition
   * @param {Function} callback called with token request response
   */
  handleClientCredentialsType (params, callback) {
    let request = this.getOAuth2TokenRequest(params.access_token_url, OAUTH2_GRANT_TYPE.CLIENT_CREDENTIALS);

    request.body.urlencoded.add({
      key: 'scope',
      value: params.scope
    });

    // authenticate token request
    this.addClientAuthentication(request, params);

    // request token
    this.requestAccessToken({ request: request.toJSON() }, callback);
  }

  /**
   * Handles the request for a token using the token url. This is passed to `postman-runtime` so that user cookies
   * are not added to this request and client certificates can be attached.
   *
   * @param {SDKItem~definition} item item for token request
   * @param {Function} callback called with token response
   */
  requestAccessToken (item, callback) {
    let runner = new runtime.Runner({}),
        collectionDefinition = { item },
        collection = new sdk.Collection(collectionDefinition),
        runOptions = {};

    populateRunOptions(runOptions, this.runMetaData || {});
    pm.logger.info('OAuth2TokenRequester~requestAccessToken - Requesting OAuth 2.0 access token');
    runner.run(collection, runOptions, (err, run) => {
      if (err) {
        callback && callback(err);
        return;
      }
      run.start({
        // this is a hack to log token request to postman console
        // this needs to be more streamlined across request sending and OAuth 2 flows
        request: this.log,

        // we are only interested in the first response event, because there will be only one
        response: function (error, cursor, response) {
          if (error) {
            callback && callback(error);
            return;
          }

          let tokenResponse,
              errorInResponse,
              tokenError;

          // token response is a json
          try {
            tokenResponse = response.json();
          }

          // token response is query param string with `application/x-form-urlencoded`
          catch (e) {
            tokenResponse = sdk.QueryParam.parse(response.text());
            tokenResponse = new sdk.PropertyList(sdk.QueryParam, {}, tokenResponse).toObject();
          }

          // look for possible error properties
          // we do it for all response codes to make sure we extract error in 200 or 201 responses(who knows)
          if ((errorInResponse = tokenResponse.error_description || tokenResponse.error || tokenResponse.errors)) {
            tokenError = new Error('Cound not complete OAuth 2.0 token request');
            tokenResponse = errorInResponse; // send error response in the callback which will be shown to the user
          }

          // token request API is a failure with no extractable error, set a default message
          if (!tokenError && !(response.code === 200 || response.code === 201)) {
            tokenError = new Error('Could not complete OAuth 2.0 token request');
          }

          callback && callback(tokenError, tokenResponse);
        }
      });
    });
  }
}

module.exports = function () {
  /**
   * Listen to an event when the `Request Token` flow is initiated for OAuth 2.0
   *
   * @listens IPC#oauth2GetNewToken
   * @fires IPC#oauth2TokenRequestCallback
   */
  ipc.on('oauth2GetNewToken', function (event, params, runMetaData, contextOptions) {
    let windowManager = new OAuth2WindowManager({ cookiePartitionId: contextOptions.cookiePartitionId, strictSSL: contextOptions.strictSSL }),
        oAuth2TokenRequester = new OAuth2TokenRequester({
          runMetaData,

          // sends an IPC event for every OAuth 2.0 API response, so it can be logged in Postman Console
          log: function (err, cursor, response, request, _item, _cookies, history) {
            event.sender.send('oauth2TokenRequestResponse',
              err && JSON.stringify(new SerializedError(err)),
              cursor,
              response && response.toJSON(),
              request && request.toJSON(),
              history
            );
          },

          windowManager
        });
    oAuth2TokenRequester.startTokenRequestFlow(params, function (err, result) {
      err && pm.logger.warn('OAuth2TokenRequester~startTokenRequestFlow: Error while requesting token ', err);

      // @hack: the result of startTokenRequestFlow should have had a "name", but since different grantTypeHandlers
      // (in startTokenRequestFlow) handle this callback differently, the "name" param is not being returned as it is,
      // we add the name to the result in this callback itself to compensate for this.
      if (!err && result) {
        result.name = params.name;
      }

      event.sender.send('oauth2TokenRequestCallback', err && JSON.stringify(new SerializedError(err)), result && JSON.stringify(result));
    });
  });
};
