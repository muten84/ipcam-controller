var cameraInstance = null;
var CameraControl = require("./CameraControl.js");
var Utils = require("./utils.js");
var Types = require("./CameraType.js");


function checkBuiltinType(type){
  return Types.getCamera(type);
}

function checkSpec(type){
  var spec =  null;
  spec = checkBuiltinType(type);
  if(spec==null){
    try{
      spec = require(""+type);
    }
    catch(err){
      spec =null;
    }
    if(!spec){
      try{
        spec = require("./"+type+".js");
      }catch(err){
        spec = null;
      }
    }
  }
  if(spec===null || Utils.checkObjectProps(spec,"ptz")){
    throw new Error("camera type not valid");
  }
  return spec;
}

function createCamera(name,type,props){
  var spec = checkSpec(type);
  var camera =  new CameraControl(name);
  camera.setup(props.host,props.credentials,spec);
  return camera;
}

function createSingletonCamera(name, type, props){
  var spec = checkSpec(type);
  if(cameraInstance===null){
    cameraInstance = new CameraControl(name);
    cameraInstance.setup(props.host,props.credentials,spec);
  }
  return cameraInstance;
}

var o = {createSingletonCamera: createSingletonCamera}
module.exports = o;
