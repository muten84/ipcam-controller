var control = require('../src/CameraControl.js');
var sricam = require('../src/sricamAP004.js');
var Utils = require('../src/utils.js');

var camera  = new control();
camera.setup({ip: "127.0.0.1"}, {login:"admin", pwd:"secret"}, sricam);
var type = Utils.getActionType(camera,"zoomInStart");
var value = Utils.getActionValue(camera,"zoomInStart");
var url = camera.decode(type,value);
console.log(url);
var type = Utils.getActionType(camera,"moveUp");
var value = Utils.getActionValue(camera,"moveUp");
var url = camera.decode(type,value);
console.log(url);
var type = Utils.getActionType(camera,"moveDown");
var value = Utils.getActionValue(camera,"moveDown");
var url = camera.decode(type,value);
console.log(url);
