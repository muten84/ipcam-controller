var camera=require('./src/actions.js')


//initialize camera
var config = {
  ip: "10.0.0.4",
  name: "Garden",
  type: "sricamAF004",
  user: "admin",
  pwd: "manga123"
}

camera.init(config);
camera.moveRight().then(camera.stopRight);
