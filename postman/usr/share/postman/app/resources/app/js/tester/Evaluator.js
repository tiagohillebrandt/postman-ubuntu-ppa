class Evaluator {
    constructor () {
        this.setupListener();
        this.shimWindowFunctions();
    }

    shimWindowFunctions () {
      window.open = function () {
        console.error('window.open is not allowed from script sandbox');
      };
    }

    setupListener () {
        var oldThis = this;
        var oldJsonParser = JSON.parse;
        console.fileLog = function (fileName, message) {
            console.log(fileName + ': ' + message);
        };

        window.addEventListener('message', function (event) {
            let source = event.source;

            var command = event.data.command;

            if (command === 'sandboxEchoText') {
                event.source.postMessage({
                    'type': 'sandboxEchoResponse',
                    'result': true
                }, event.origin);
                return;
            }

            // this is for the snippet generation
            if (command === 'getSnippet') {
                var requestJson = event.data.request;
                var snippetName = event.data.snippetName;
                var dataMode = event.data.dataMode;
                var options = event.data.options || {};
                try {
                    var gen = new requestSnippetGenerator.PostmanRequestSnippetGenerator(requestJson);
                    var snippet = gen[snippetName](options);
                    event.source.postMessage({
                        'type': 'snippet_generated',
                        'result': snippet,
                        'dataMode': dataMode
                    }, event.origin);
                }
                catch (e) {
                    console.log(e);
                    event.source.postMessage({
                        'type': 'snippet_error',
                        'errorMessage': e.message
                    }, event.origin);
                }
                return;
            }
        });
    }
}
