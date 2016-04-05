var factory = require("./CameraFactory.js");
var Step = require("./Step.js");

function SricamService(config){
  var ip  = config.ip;
  var name = config.name;
  var type = config.type;
  var user = config.user;
  var auth = config.pwd;
  var camera = factory.createSingletonCamera(name,type,{
    host:{ip: ip},
    credentials: {login: user, pwd: auth}
  });
  this.camera =camera;
  console.log(camera);
}

SricamService.prototype.step = function(action,duration){
  var camera =this.camera;
  console.log("creating step: "+action+" - "+duration);
  var type = camera.getActionType(action);
  var val = camera.getActionValue(action);
  var url = camera.decode(type,val,false);
  var s = new Step(url,duration);
  return s.defer;
  //return Step.createStep(url,duration);
}

module.exports = SricamService;
