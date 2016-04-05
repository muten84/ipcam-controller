var Service = require("./src/SricamService.js");


//initialize camera
var config = {
  ip: "10.0.0.4",
  name: "Garden",
  type: "sricamAF004",
  user: "admin",
  pwd: "secret"
}

var s = new Service(config);

//example for move left for 3 secs and move right for 3 secs
execute(s.step("moveLeft",3000)).then(function(){
  console.log("ok")
});

function execute(fun){
  return fun();
}
