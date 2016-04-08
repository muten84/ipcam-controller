var Promise = require("promise");

function Step(url,duration){
  this.url=url;
  this.duration=duration;
  console.log(this.url+" - "+this.duration);
}

function doWork(url, callback){
  console.log("invoking url: "+url);
  callback("ok");
}



Step.execute = function(step){
  console.log(step.url+" - "+step.duration);
  var aduration = step.duration;
  var aurl = step.url;
  var promise = new Promise(function (resolve, reject) {
    doWork(aurl, function(data){
      setTimeout(resolve,aduration);
    });
  });
  return promise;
}

console.log("step creating");
var step = new Step("url", 3000);
console.log("deferring creating");
s = Step.execute;

Step.execute(step).then(function(){
  console.log("then done");
})
