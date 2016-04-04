var ipcam = require('./ipcam');
var sricam_af004 = require('./sricamAF004');
var querystring = require ('querystring');
var requestor = require ('./requestor');

var host = {
		ip: '192.168.0.2'
	};

	var credentials = {
		login:"admin",
		pwd: "secret"
	};

ipcam.setup(
	{
		ip: '192.168.0.2'
	},
	{
		login: "admin",
		pwd: "troppsecret"

	}, sricam_af004);
var controller = ipcam.methods;
var protocol='http://';
var url = controller.decode('camera.control.ptz.stop', 'right',true);
console.log(url);

requestor.on('connection-error', function(err){
	console.log(err.code);
})
requestor.sendRequest(url,{
	callback: function(data){
		console.log("Response received: "+data);
	}
});
console.log("Request sent");
