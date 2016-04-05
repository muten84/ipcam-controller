var utils = {};

utils.isObject = function(o){
  //console.log("isObject: "+typeof o);
  var flag = (typeof o === 'object');
  //console.log(flag);
  return flag;
}

utils.isString = function(s){
  //console.log("isString: "+typeof s);
  var flag =  (typeof s ==='string');
  //console.log(flag);
  return flag;
}


utils.checkObjectProps = function(o, props){
  if(!utils.isObject(o)){ return false; }
  var check = true;
  for (var p in props) {
    if(!o.hasOwnProperty(props[p])){
      check = false;
      break;
    }
  }
  return check;
}

utils.getActionType = function(camera,key){
  return camera.getActionType(key);
}

utils.getActionValue = function(camera,key){
  return camera.getActionValue(key);
}

module.exports = utils;
