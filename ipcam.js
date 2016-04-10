#!/usr/bin/node

var program = require('commander');
var IPCamera = require('./index.js');

program
.arguments('<action>')
.option('-u, --user <user>', 'The user to authenticate as')
.option('-p, --password <password>', 'The user\'s password')
.option('-a, --address <address>', 'The camera ip address')
.option('-m, --modelType <modelType>', 'The camera model type (e.g.: sricamAF004)')
.option('-d, --duration <duration>', 'The move duration in milliseconds')
.option('-s, --schedule <schedule>', 'Schedule given action for n times during schedule times: for instance \'-s 30\' schedule for 1 time the given action from now to now+30 minutes')
.option('-c, --count <count>', 'Use it in combination with schedule to configure how many times during schedule time the given action should start: for instance -s 30 -c 3 schedule fo 3 times the given action during 30 minutes from now where now is the command start execution time')
.option('-n --cameraName <cameraName>','The camera name identifier')
.action(function(action){
  var user = program.user;
  var pwd = program.password;
  var cameraType = program.modelType;
  var ip = program.address;
  var duration = program.duration;
  var schedule = program.schedule;
  var count = program.count;
  var name = program.name;
  console.log('camera: %s action: %s user: %s pwd: %s ip: %s, duration: %s, schedule: %s, count: %s',
  cameraType, action, user, pwd, ip, duration, schedule, count);
  var config = {
    ip: ip,
    name: name||"Camera",
    type: cameraType,
    user: user,
    pwd: pwd,
    duration: duration
  }
  var camera = new IPCamera();
  camera.createCamera(config.name,cameraType,config);
  if(!schedule){
    doNow(camera,action,duration);
  }else{
    scheduleActionFor(camera,action,duration,schedule,count||1);
  }
})
.parse(process.argv);

function scheduleActionFor(camera,action,duration,during,times){
  console.log("scheduleActionFor: %s, %s, %s", action, during, times);
  var fun = null;
  switch (action) {
    case 'left':
      fun = function(){camera.moveLeftFor(duration);}
      break;
    case 'right':
      fun = function(){camera.moveRightFor(duration);}
      break;
    default:
      break;
  }
  scheduler.schedule(fun,during,times);
}

function doNow(camera,action,duration){
  console.log("doNow");
  switch(action){
    case 'left':
      camera.moveLeftFor(duration);
      break;
    case 'right':
      camera.moveRightFor(duration);
      break;
    default:
      break;
  }
}
