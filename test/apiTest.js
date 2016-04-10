var camera = require('../index.js');

var config = {
  ip: '127.0.0.1',
  name: "Camera",
  type: 'sricamAP004',
  user: 'admin',
  pwd: 'password',
  duration: 3000
}

camera.createCamera("test", "sricamAP004",config);
camera.moveLeftFor(500).then(function(){camera.moveRightFor(500)});
