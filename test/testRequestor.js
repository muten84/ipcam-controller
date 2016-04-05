var http = require('../src/requestor.js');

describe('test suite http requestor', function () {
  it('should emit a connection-error', function () {
    http.on("connection-error", function(err){

    })
    http.sendRequest("1","http://127.0.0.1/dummy", {encoding: 'UTF-8', callback:function(success){
      console.log("success");
    }});
  })
})
