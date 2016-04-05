//var http = require ('http');
var querystring = require ('querystring');

var camera = {};
var control = {};
camera.setup = function(host, credentials, controlSpec){
    camera.host=host;
    camera.credentials=credentials;
    camera.control=controlSpec
}

  var methods = function(){
		// var hP = 0;
    //
		// function ptzStop(stop, value){
		// 	cmd = "command=";
		// 	if(value === "right"){
		// 		cmd+=stop.right;
		// 	}
		// 	else if(value === "left"){
		// 		cmd+=stop.left;
		// 	}
		// 	else if(value === "up"){
		// 		cmd+=stop.up;
		// 	}
		// 	else if(value === "down"){
		// 		cmd+=stop.down;
		// 	}
		// 	cmd+="&onestep=0";
		// 	return cmd;
		// }
    //
		// function ptzMove(move, value){
		// 	cmd = "command=";
		// 	if(value === "right"){
		// 		cmd+=move.right;
		// 	}
		// 	else if(value === "left"){
		// 		cmd+=move.left;
		// 	}
		// 	else if(value === "up"){
		// 		cmd+=move.up;
		// 	}
		// 	else if(value === "down"){
		// 		cmd+=move.down;
		// 	}
		// 	else if(value === "preset1"){
		// 		cmd+=move.preset1+"&sit="+move.preset1;
		// 	}
		// 	else if(value === "preset2"){
		// 		cmd+=move.preset2+"&sit="+move.preset2;
		// 	}
		// 	cmd+="&onestep=0";
		// 	return cmd;
		// }
    //
		// function ptzVelocity(velocity, value){
		// 	cmd ="param="+velocity.param+"&";
		// 	if(value === 'slow'){
		// 		cmd+= "value="+velocity.slow;
		// 	}
		// 	else if(value === 'mid'){
		// 		cmd+= "value="+velocity.mid;
		// 	}
		// 	else if(value === 'fast'){
		// 		cmd+= "value="+velocity.fast;
		// 	}
		// 	return cmd;
		// }

    var _decode = function(action,value,basicAuth){
      console.log(action+" - "+value+" - "+basicAuth);
       var protocol= "http://";
       var user=camera.credentials.login;
       var pwd=camera.credentials.pwd;
       if(basicAuth){
         protocol+=user+":"+pwd+"@";
       }
       var host = ""+camera.host.ip;
       if(camera.host.port){
         host+=":"+camera.host.port;
       }
       var path = eval(action+".action");
       var params = {};
       var name = eval(action+".paramName");
       var val = eval(""+action+"."+value);
       console.log(name);
       console.log(val);
       params[name]=val;
       params[camera.control.auth.userParam]=user;
       params[camera.control.auth.passParam]=pwd;
       var query = querystring.stringify(params);
       return protocol+host+"/"+path+"?"+query;
    }

		// var __decode =  function(action, value){
		// 	var url = ""+camera.host.ip+":"+camera.host.port+"/";
		// 	var credentials = "loginuse="+camera.credentials.login+"&loginpas="+camera.credentials.pwd;
		// 	if(action === 'camera.control.ptz.velocity'){
		// 		url+= camera.control.ptz.velocity.action+"?"+credentials+"&";
		// 		url+= ptzVelocity(eval(action), value);
		// 	}
		// 	else if(action === 'camera.control.ptz.move'){
		// 		url+= camera.control.ptz.move.action+"?"+credentials+"&";
		// 		url+= ptzMove(eval(action), value);
		// 	}
		// 	else if(action === 'camera.control.ptz.stop'){
		// 		url+= camera.control.ptz.stop.action+"?"+credentials+"&";
		// 		url+= ptzStop(eval(action), value);
		// 	}
		// 	return url;
		// }
		var o = {};
		o.decode = _decode;
		return o;
	}();

  camera.control=control;
  camera.methods=methods;
  module.exports = camera;
