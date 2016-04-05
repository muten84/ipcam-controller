var cameraInstance = null;
var CameraControl = require("./CameraControl.js");

function createSingletonCamera(name, type, props){
  var spec = require("./"+type+".js");
  if(cameraInstance===null){
    cameraInstance = new CameraControl(name);
    cameraInstance.setup(props.host,props.credentials,spec);
  }
  return cameraInstance;
}

var o = {createSingletonCamera: createSingletonCamera}
module.exports = o;
