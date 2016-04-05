//var http = require ('http');
var querystring = require ('querystring');
var Utils = require('./utils.js');

function CameraControl(id){
  this.camera = {};
  this.camera.id=id;
}

CameraControl.prototype.setup = function(host, credentials, controlSpec){
  /*check host param*/
  //console.log(host);
  if(Utils.isString(host)){
    //console.log("host is string")
    this.camera.host={ip: host};
  }
  else if(!Utils.isObject(host)){
    throw new Error("if not a string host should be an object");
  }
  else if(Utils.checkObjectProps(host,["ip"])){
    //console.log("host is object but not has own property set")
    this.camera.host=host;
  } else{
    this.camera.host = null;
    throw new Error("invalid host object! define it with {ip: <ip camera>, port: <port> }. Hint port is optional default 80");
  }

  /*check credentials param*/
  if(Utils.isString(credentials)){
    var auth = credentials.split(":");
    var creds = {login: auth[0], pwd: auth[1]};
    this.camera.credentials =cred;
  }else if(Utils.checkObjectProps(credentials,["login","pwd"])){
    this.camera.credentials=credentials;
  }else{
    this.camera.credentials = null;
    throw new Error("invalid credentials object! Define it with {login: <camera user login>, port: <camera pwd login> }.");
  }
  /*check controlSpec param*/
  if(!Utils.isObject(controlSpec)){
    throw new Error("invalid control spec object! Hint: try to use a define preset such as the sricamAF004");
  }

  this.camera.control=controlSpec;
};

CameraControl.prototype.getCamera = function(){
  return this.camera;
}

CameraControl.prototype.decode = function(action,value,basicAuth){
  //console.log(action+" - "+value+" - "+basicAuth);
  var protocol= "http://";
  var user=this.camera.credentials.login;
  var pwd=this.camera.credentials.pwd;
  if(basicAuth){
    protocol+=user+":"+pwd+"@";
  }
  var host = ""+this.camera.host.ip;
  if(this.camera.host.port){
    host+=":"+this.camera.host.port;
  }
  var path = eval("this."+action+".action");
  var params = {};
  var name = eval("this."+action+".paramName");
  var val = eval("this."+action+"."+value);
  //console.log(name);
  //console.log(val);
  params[name]=val;
  params[this.camera.control.auth.userParam]=user;
  params[this.camera.control.auth.passParam]=pwd;
  var query = querystring.stringify(params);
  return protocol+host+"/"+path+"?"+query;
}

CameraControl.prototype.getActionType = function(key){
  var actions = this.camera.control.actions;
  var type = "";
  actions.forEach(function(act){
    if(act.key===key){
      type=act.action.type;
    }
  });
  return type;
}

CameraControl.prototype.getActionValue = function(key){
  var actions = this.camera.control.actions;
  var val = "";
  actions.forEach(function(act){
    if(act.key===key){
      val=act.action.value;
    }
  });
  return val;
}

module.exports = CameraControl;
