var IPCamera = require('../index.js');

var config = {
  ip: 'cameraIp',
  name: "Camera",
  type: 'sricamAP004',
  user: 'admin',
  pwd: 'troppsecret',
  duration: 3000
}

var camera = new IPCamera();
camera.createCamera("test", "sricamAP004",config);
camera.moveLeftFor(500).then(function(){
	camera.moveRightFor(500);
});
