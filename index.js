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

var camera = new IPCamera(config);

function done(){
  console.log("done");
}

function moveLeft(){
  var promise = new Promise(function (resolve, reject) {
  camera.step("moveLeft",3000).then(resolve("ok"));
  });
  return promise;
}

function stopLeft(){
  var promise = new Promise(function (resolve, reject) {
  camera.step("stopLeft",3000).then(resolve("ok"));
  });
  return promise;
}

moveLeft().then(stopLeft).then(done);