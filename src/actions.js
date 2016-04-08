var IPCamera = require("./SricamService.js");
var Promise = require("promise");

var service = null;

function init(config){
   service = new IPCamera(config);
}

function moveLeft(){
  var promise = new Promise(function (resolve, reject) {
  IPCamera.execute(service,"moveLeft",3000).then(resolve);
  });
  return promise;
}

function moveRight(){
  var promise = new Promise(function (resolve, reject) {
  IPCamera.execute(service,"moveRight",3000).then(resolve);
  });
  return promise;
}

function stopRight(){
  var promise = new Promise(function (resolve, reject) {
  IPCamera.execute(service,"stopRight",3000).then(resolve);
  });
  return promise;
}

function stopLeft(){
  var promise = new Promise(function (resolve, reject) {
  IPCamera.execute(service,"stopLeft",3000).then(resolve);
  });
  return promise;
}

function done(){
  console.log("done");
}

var exp = {init,moveLeft,stopLeft,done}

module.exports=exp;
