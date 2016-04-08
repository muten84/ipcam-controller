var http = require ('http');
var EventEmitter = require ('events') .EventEmitter;
var app = new EventEmitter;

var sendRequest = function(id,url,props){
    var req = http.request (url, function (response) {

      // response
      response.setEncoding ('utf8');
      var data = '';

      response.on ('data', function (chunk) { data += chunk });
      response.on ('end', function () {

        if (typeof props.callback == 'function') {
          data = data.trim ();
          props.callback (data);
        }
      });
    });

    // fail
    req.on ('error', function (err) {
      app.emit ('connection-error', err);
    });

    // disconnect
    req.end ();
  };

app.sendRequest = sendRequest;


module.exports = app;
