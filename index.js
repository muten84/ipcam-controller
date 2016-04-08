var IPCamera = require("./src/SricamService.js");


//initialize camera
var config = {
  ip: "10.0.0.4",
  name: "Garden",
  type: "sricamAF004",
  user: "admin",
  pwd: "secret"
}

var camera = new IPCamera(config);

camera.step("moveLeft",3000).then(camera.step("moveRight", 3000).then(done));

function done(){
  console.log("done");
}
