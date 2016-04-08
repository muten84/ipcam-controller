var IPCamera = require("./src/SricamService.js");
var Promise = require("promise");


//initialize camera
var config = {
  ip: "10.0.0.4",
  name: "Garden",
  type: "sricamAF004",
  user: "admin",
  pwd: "manga123"
}

var service = new IPCamera(config);

function done(){
  console.log("done");
}

function moveLeft(){
  var promise = new Promise(function (resolve, reject) {
  IPCamera.execute(service,"moveLeft",3000).then(resolve);
  });
  return promise;
}

function stopLeft(){
  var promise = new Promise(function (resolve, reject) {
  IPCamera.execute(service,"stopLeft",3000).then(resolve);
  });
  return promise;
}

moveLeft().then(stopLeft).then(done);
