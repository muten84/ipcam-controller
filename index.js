var factory = require('./src/CameraFactory.js')
var Service = require('./src/CameraService.js')
var Scheduler = require('./src/scheduler.js')
var Types = require('./src/scheduler.js')

function IpCameraController(){
  this.camera = null;
  this.service = null;
}

IpCameraController.prototype.addType = function(name,typeSpec){
  Types.addType(name,typeSpec);
}

IpCameraController.prototype.createCamera = function(name,type,config){
  this.camera = factory.createCamera(name,type,config);
  this.service = new Service(config);
}

IpCameraController.prototype.action = function(action,duration){
  Service.execute(this.service,action,duratin);
}

IpCameraController.prototype.schedule = function(action,when,times){
  Scheduler.schedule(action,when,times);
}

IpCameraController.prototype.moveLeftFor(duration){
  var self = this;
  var promise = new Promise(function (resolve, reject) {
    self.action("moveLeft",duration).then(resolve);
  });
  return promise;
}

IpCameraController.prototype.moveRightFor(duration){
  var self = this;
  var promise = new Promise(function (resolve, reject) {
    self.action("moveRight",duration).then(resolve);
  });
  return promise;
}

module.exports = new IpCameraController();
