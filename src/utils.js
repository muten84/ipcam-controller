var utils = {};

utils.isObject = function(o){
  console.log("isObject: "+typeof o);
  var flag = (typeof o === 'object');
  console.log(flag);
  return flag;
}

utils.isString = function(s){
  console.log("isString: "+typeof s);
  var flag =  (typeof s ==='string');
  console.log(flag);
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
  console.log("getActionType: "+camera);
  actions = camera.actions;
  var type = "";
  actions.forEach(function(act){
    if(act.key===key){
      type=act.action.type;
    }
  });
  return type;
}

utils.getActionValue = function(camera,key){
  console.log("getActionType: "+camera.actions);
  actions = camera.actions;
  var type = "";
  actions.forEach(function(act){
    if(act.key===key){
      type=act.action.value;
    }
  });
  return type;
}


module.exports = utils;
