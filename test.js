var ipcam = require('./ipcam');
console.log(ipcam);
var host = {
		ip: '192.168.0.2',
		port: '81'
	};

	var credentials = {
		login:"admin",
		pwd: "secret"
	};
ipcam.setup(host,credentials);
var controller = ipcam.methods;
var protocol='http://';
var path = controller.decode('camera.control.ptz.move', 'right');
console.log(protocol+path);
