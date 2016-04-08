var factory = require("./CameraFactory.js");
var Step = require("./Step.js");

var api = {
 createCamera: function(name, type, props){
   return factory.createSingletonCamera(name,type,props); 
 },
 
 //TODO
 
}

module.exports = api;