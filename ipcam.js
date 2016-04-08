#!/usr/bin/node

var camera=require('./src/actions.js')
var program = require('commander');


//initialize camera
//camera.moveRight().then(camera.stopRight);
//camera.moveLeft().then(camera.stopLeft);


program
.arguments('<action>')
.option('-u, --user <user>', 'The user to authenticate as')
.option('-p, --password <password>', 'The user\'s password')
.option('-a, --address <address>', 'The camera ip address')
.option('-m, --modelType <modelType>', 'The camera model type (e.g.: sricamAF004)')
.option('-d, --duration <duration>', 'The move duration in milliseconds')
.action(function(action){
  var user = program.user;
  var pwd = program.password;
  var cameraType = program.modelType;
  var ip = program.address;
  var duration = program.duration;
   console.log('camera: %s action: %s user: %s pwd: %s ip: %s, duration: %s',
        cameraType, action, user, pwd, ip, duration);
  var config = {
  ip: ip,
  name: "Camera",
  type: cameraType,
  user: user,
  pwd: pwd,
  duration: duration
  }
  camera.init(config);
  switch(action){
   case 'left':
    camera.moveLeft().then(camera.stopLeft);
    break;
   case 'right':
    camera.moveRight().then(camera.stopRight); 
    break;
   default:
    break; 
  }  
})
.parse(process.argv);
 