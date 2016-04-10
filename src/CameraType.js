var cameraTypes = [];

function addCameraType(name,value){
  cameraTypes[name]=value;
}

function getCamera(type){
  for (var p in cameraTypes) {
    if(type===p){
      return cameraTypes[type];
    }
  }
  return null;
}


var exp{
 addCameraType: addCameraType,
 getCamera: getCamera
}

module.exports = exp;
