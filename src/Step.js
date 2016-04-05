var Promise = require("promise");
var Utils = require("./utils.js");
var $http = require("./requestor.js");

function Step(url,duration){
  this.url=url;
  this.duration=duration;
}

Step.prototype.defer = function(){
  var duration = this.duration;
  var promise = new Promise(function (resolve, reject) {
    $http.on("connection-error", function(err){
      reject(err);
    });
    var props = {encoding: "UTF-8", callback: function(data){
      setTimeout(function(){resolve(data)}, duration);
    }}
    $http.sendRequest(url, props);
  });
  return promise;
}

// function createStep(url,duration){
//   return new Step(url,duration).defer;
// }

// var o = {createStep:createStep, Step: Step }
module.exports = Step;
