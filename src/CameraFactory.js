var cameraInstance = null;
var CameraControl = require("./CameraControl.js");
var Utils = require("./utils.js");

function createSingletonCamera(name, type, props){
  var spec =  null;
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
  if(spec===null || Utils.checkObjectProps(spec,"ptz")){
    throw new Error("camera type not valid");
  }
  if(cameraInstance===null){
    cameraInstance = new CameraControl(name);
    cameraInstance.setup(props.host,props.credentials,spec);
  }
  return cameraInstance;
}

var o = {createSingletonCamera: createSingletonCamera}
module.exports = o;
