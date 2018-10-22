var HttpProxy = require('http-proxy'),
    path = require('path'),
    http = require('http'),
    https = require('https'),
    net = require('net'),
    fs = require('fs'),
    urlParser = require('url');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var regex_hostport = /^([^:]+)(:([0-9]+))?$/;

/**
 * @description It returns the host and port from the host string
 * @return {Array}
 */
function getHostPortFromString (hostString, defaultPort) {
  var host = hostString;
  var port = defaultPort;

  var result = regex_hostport.exec(hostString);
  if (result != null) {
    host = result[1];
    if (result[2] != null) {
      port = result[3];
    }
  }

  return ([host, port]);
}


exports.electronProxy = {
  proxy: null,
  proxy_s: null,
  proxyServer: null,
  proxyServer_s: null,
  lastHttpsUrl: null,
  startProxy: function (port, proxyClosedCallback, capturedRequestCallback) {
    try {
      var oldThis = this;
      this.proxy = HttpProxy.createProxyServer({
        secure: false,
        ssl: {
          key: fs.readFileSync(path.resolve(__dirname, '../certificates/proxy.key'), 'utf8'),
          cert: fs.readFileSync(path.resolve(__dirname, '../certificates/proxy.crt'), 'utf8')
        }
      });
      this.proxy_s = HttpProxy.createProxyServer({
        secure: false,
        ssl: {
          key: fs.readFileSync(path.resolve(__dirname, '../certificates/proxy.key'), 'utf8'),
          cert: fs.readFileSync(path.resolve(__dirname, '../certificates/proxy.crt'), 'utf8')
        }
      });

      this.proxy.on('error', function (err, req, res) {
        res.end('Something went wrong. And we are reporting a custom error message.');
        pm.logger.error('electronProxy - Error proxying http', err);
      });

      this.proxy.on('close', function (e) {
        pm.logger.info('electronProxy - Shut down http proxy');
        proxyClosedCallback();
      });

      this.proxy_s.on('error', function (err, req, res) {
        res.end('Something went wrong. And we are reporting a custom error message.');
        pm.logger.error('electronProxy - Error proxying https', err);
      });

      this.proxy_s.on('close', function (e) {
        pm.logger.info('electronProxy - Shut down https proxy');
        proxyClosedCallback();
      });


      this.proxyServer = http.createServer(function (req, res) {
        var urlParts = urlParser.parse(req.url, true);
        var target1 = urlParts.protocol + '//' + urlParts.host;
        try {
          var queryData = '';
          if (req.method === 'POST' || req.method === 'PUT') {
            req.on('data', function (data) {
              queryData += data;
              if (queryData.length > 1e6) {
                queryData = '';
              }
              capturedRequestCallback(req.url, req.method, req.headers, queryData);
            });
          } else {
            capturedRequestCallback(req.url, req.method, req.headers);
          }
          oldThis.proxy.web(req, res, { target: target1 });
        }
        catch (e) {
          pm.logger.error('electronProxy - Error proxying', e);
        }
      });

      try {
        this.proxyServer.listen(port);
      }
      catch (e) {
        pm.logger.error('electronProxy - Error in starting proxy', e);
      }
      this.proxyServer.addListener(
        'connect',
        function (request, socketRequest, bodyhead) {
          var url = request.url;
          oldThis.lastHttpsUrl = url;
          var httpVersion = request.httpVersion;
          var hostport = getHostPortFromString(url, 443);
          hostport[0] = 'localhost';
          hostport[1] = 8443;
          var proxySocket = new net.Socket();

          proxySocket.connect(
            parseInt(hostport[1]), hostport[0],
            function () {
              proxySocket.write(bodyhead);
              socketRequest.write('HTTP/' + httpVersion + ' 200 Connection established\r\n\r\n');
            }
          );

          proxySocket.on('data', function (chunk) {
            socketRequest.write(chunk);
          });

          proxySocket.on('end', function () {
            socketRequest.end();
          });

          socketRequest.on('data', function (chunk) {
            proxySocket.write(chunk);
          });

          socketRequest.on('end', function () {
            proxySocket.end();
          });

          proxySocket.on('error', function (err) {
            socketRequest.write('HTTP/' + httpVersion + '500Connectionerror\r\n\r\n');
            socketRequest.end();
          });

          socketRequest.on('error', function (err) {
            proxySocket.end();
          });
        });

        this.proxyServer_s = https.createServer({
          key: fs.readFileSync(path.resolve(__dirname, '../certificates/key.pem'), 'utf8'),
          cert: fs.readFileSync(path.resolve(__dirname, '../certificates/cert.pem'), 'utf8')
        }, function (req, res) {
          if (req.url[0] == '/') {
            req.url = 'https://' + req.socket.servername + req.url;
          }
          var urlParts = urlParser.parse(req.url, true);
          var target1 = urlParts.protocol + '//' + urlParts.host;
          try {
            var queryData = '';
            if (req.method === 'POST' || req.method === 'PUT') {
              req.on('data', function (data) {
                queryData += data;
                if (queryData.length > 1e6) {
                  queryData = '';
                }
                capturedRequestCallback(req.url, req.method, req.headers, queryData);
              });
            } else {
              capturedRequestCallback(req.url, req.method, req.headers);
            }
            oldThis.proxy_s.web(req, res, { target: target1 });
          }
          catch (e) {
            pm.logger.error('electronProxy - Error in https proxy: ', e);
          }
        });
        var a = this.proxyServer_s.listen(8443, function (err) {
          if (err) { pm.logger.error('electronProxy - Error creating https proxy ' + err); }
        }
      );
      return 0;
    }
    catch (e) {
      pm.logger.error('electronProxy - Error listening to Port: ', e);
      return -1;
    }
  },

  stopProxy: function () {
    var proxy = this.proxy;
    var proxy_s = this.proxy_s;
    var proxyServer = this.proxyServer;
    var proxyServer_s = this.proxyServer_s;
    if (proxy) { proxy.close(); }
    if (proxy_s) { proxy_s.close(); }
    if (proxyServer) { proxyServer.close(); }
    if (proxyServer_s) { proxyServer_s.close(); }
  }
};
