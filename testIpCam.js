var ipcam = require('./ipcam');
var sricam_af004 = require('./sricamAF004');
var querystring = require ('querystring');
var requestor = require ('./requestor');

var host = {
		ip: '10.0.0.4'
	};

	var credentials = {
		login:"",
		pwd: ""
	};

ipcam.setup(
	{
		ip: '10.0.0.4'
	},
	{
		login: "admin",
		pwd: "manga123"

	}, sricam_af004);
var controller = ipcam.methods;
var protocol='http://';




function get(url,success,error){
	console.log("get from url: "+url);
	requestor.on('connection-error', function(err){
			console.log("error:  "+err);
			if(error){
				error(err);
			}
	});
	requestor.sendRequest('1',url,{
		callback: function(data){
			console.log("success:  "+data);
			if(success){
				success(data);
			}
		},
		encoding: 'UTF-8'
		});
}


function commandFor(start,stop,duration){
	console.log("send start url");
	get(start,
		function(data){
			console.log("prepare stop url");
			setTimeout(function(){get(stop)}, duration);
		},
		function(err){
			console.log("Error: "+err);
		}	
	)
}

var urlStart = controller.decode('camera.control.ptz.move', 'left',true);
var urlStop = controller.decode('camera.control.ptz.stop', 'left',true);
commandFor(urlStart,urlStop,3000);


