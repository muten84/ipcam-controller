var Promise = require("promise");
var Utils = require("./utils.js");
var $http = require("./requestor.js");

function Step(url,duration){
  this.url=url;
  this.duration=duration;
}

Step.execute = function(step){
  var duration = step.duration;
  var url = step.url;

  var promise = new Promise(function (resolve, reject) {
    $http.on("connection-error", function(err){
      console.log("connection-error: "+err);
      reject(err);
    });
    var props = {encoding: "UTF-8", callback: function(data){
    var d = data;
      setTimeout(function(){
        console.log("resolve: "+d);
        resolve(d);
      }, duration);
    }}
    console.log("invoking url: "+url);
    $http.sendRequest("1",url, props);
  });
  return promise;
}

module.exports = Step;
