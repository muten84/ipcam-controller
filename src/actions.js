var IPCamera = require("./CameraService.js");
var Promise = require("promise");

var service = null;
var config = null;

function init(config){
   service = new IPCamera(config);
   config = config;
}

function moveLeftAndStop(){
  moveLeft().then(stopLeft);
}

function moveRightAndStop(){
  moveRight().then(stopRight);
}

function moveLeft(){
  var promise = new Promise(function (resolve, reject) {
  IPCamera.execute(service,"moveLeft").then(resolve);
  });
  return promise;
}

function moveRight(){
  var promise = new Promise(function (resolve, reject) {
  IPCamera.execute(service,"moveRight").then(resolve);
  });
  return promise;
}

function stopRight(){
  var promise = new Promise(function (resolve, reject) {
  IPCamera.execute(service,"stopRight").then(resolve);
  });
  return promise;
}

function stopLeft(){
  var promise = new Promise(function (resolve, reject) {
  IPCamera.execute(service,"stopLeft").then(resolve);
  });
  return promise;
}

function done(){
  console.log("done");
}

var exp = {
  init: init,
  moveLeft: moveLeft,
  moveRight: moveRight,
  stopRight: stopRight,
  stopLeft: stopLeft,
  moveLeftAndStop: moveLeftAndStop,
  moveRightAndStop: moveRightAndStop,
  done: done}

module.exports=exp;
