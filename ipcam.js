#!/usr/bin/node

var camera=require('./src/actions.js')
var scheduler=require('./src/scheduler.js')
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
.option('-s, --schedule <schedule>', 'Schedule given action for n times during schedule times: for instance \'-s 30\' schedule for 1 time the given action from now to now+30 minutes')
.option('-c, --count <count>', 'Use it in combination with schedule to configure how many times during schedule time the given action should start: for instance -s 30 -c 3 schedule fo 3 times the given action during 30 minutes from now where now is the command start execution time')
.action(function(action){
  var user = program.user;
  var pwd = program.password;
  var cameraType = program.modelType;
  var ip = program.address;
  var duration = program.duration;
  var schedule = program.schedule;
  var count = program.count;
  console.log('camera: %s action: %s user: %s pwd: %s ip: %s, duration: %s, schedule: %s, count: %s',
  cameraType, action, user, pwd, ip, duration, schedule, count);
  var config = {
    ip: ip,
    name: "Camera",
    type: cameraType,
    user: user,
    pwd: pwd,
    duration: duration
  }
  camera.init(config);
  if(!schedule){
    doNow(action);
  }else{
    scheduleActionFor(action,schedule,count||1);
  }
})
.parse(process.argv);

function scheduleActionFor(action, during,times){
  console.log("scheduleActionFor: %s, %s, %s", action, during, times);
  var fun = null;
  switch (action) {
    case 'left':
      fun = camera.moveLeft;
      break;
    case 'right':
      fun = camera.moveRight;
      break;
    default:
      break;
  }
  scheduler.schedule(fun,during,times);
}

function doNow(action){
  console.log("doNow");
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
}
