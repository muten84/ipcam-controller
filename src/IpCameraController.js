/**
* IPCamera controller API. To import them require('ipcam-controller')
* @module IpCameraController
* @author Luigi Bifulco
*/
var factory = require('./CameraFactory.js')
var Service = require('./CameraService.js')
var Scheduler = require('./scheduler.js')
var Types = require('./scheduler.js')
var Promise = require("promise");

/**
  @constructor
*/
function IpCameraController(){
  this.camera = null;
  this.service = null;
}

/**
* function to add a camera type, useful when you have to control a not builtin supported camera type
*
* @function
* @name addType
* @instance
* @argument {String} name the type camera name
* @argument {!Object} typeSpec the type camera object spec
*/
IpCameraController.prototype.addType = function(name,typeSpec){
  Types.addType(name,typeSpec);
}

/**
* function to create a camera configuration
*
* @function
* @name createCamera
* @instance
* @argument {String}name the camera name description
* @argument {!Object} type the type spec object of camera
* @argument {Object} config the configuration object
            ip: 'the camera ip address',
            name: "the camera description name",
            type: 'the camera model type key',
            user: 'username for login auth ip camera',
            pwd: 'password for loign auth ip camera',
            duration: 'default moves duration if no specified in function'
*/
IpCameraController.prototype.createCamera = function(name,type,config){
  if(this.camera!=null){
    throw new Error("camera just defined, create new controller if you want to use another camera");
  }
  var ip  = config.ip;
  var name = config.name;
  var type = config.type;
  var user = config.user;
  var auth = config.pwd;
  this.camera = factory.createCamera(name,type, { host:{ip: ip},
    credentials: {login: user, pwd: auth}});
    this.service = new Service({},this.camera);
  }

  /**
  * function to send a generic action, can be used after create camera is called
  *
  * @function
  * @name action
  * @instance
  * @argument {String} action action description, supported actions (moveLeft, moveUp, moveDown, moveUp)
  * @argument {number} duration move duration in milliseconds. After duration promise will be resolved.
  * @return {Promise} a Promise object on which can be invoked 'then' function to write after commands execution code
  */
  IpCameraController.prototype.action = function(action,duration){
    return Service.execute(this.service,action,duration);
  }

  /**
  * function to schedule a command associated to generic action @see {@link action}
  * @function
  * @name schedule
  * @instance
  * @argument {String} action action description, supported actions @see {@link action}
  * @argument {!number} when the date in minutes within the command will be executed
  * @argument {?number} times the number of times action will be executed within date, default to 1
  */
  IpCameraController.prototype.schedule = function(action,when,times){
    Scheduler.schedule(action,when,times);
  }

  /**
  * function to schedule the move left command
  * @function
  * @instance
  * @name moveLeftFor
  * @argument {!number} duration the duration in milliseconds of camera movement
  */
  IpCameraController.prototype.moveLeftFor = function(duration){
    var self = this;
    var promise = new Promise(function (resolve, reject) {
      self.action("moveLeft",duration).then(function(){
        console.log("done moveLefFor");
        self.action("stopLeft").then(function(){
          console.log("stopped...");
          resolve("stopped");
        });
      });
    });
    return promise;
  }

  /**
  * function to schedule the move right command
  * @function
  * @instance
  * @name moveRightFor
  * @argument {!number} duration the duration in milliseconds of camera movement
  */
  IpCameraController.prototype.moveRightFor = function(duration){
    var self = this;
    var promise = new Promise(function (resolve, reject) {
      self.action("moveRight",duration).then(function(){
        console.log("done moveRightFor");
        self.action("stopRight").then(function(){
          console.log("stopped...");
          resolve("stopped");
        });
      });
    });
    return promise;
  }

  /**
  * function to schedule the move up command
  * @function
  * @instance
  * @name moveUpFor
  * @argument {!number} duration the duration in milliseconds of camera movement
  */
  IpCameraController.prototype.moveUpFor = function(duration){
    var self = this;
    var promise = new Promise(function (resolve, reject) {
      self.action("moveUp",duration).then(function(){
        console.log("done moveUpFor");
        self.action("stopUp").then(function(){
          console.log("stopped...");
          resolve("stopped");
        });
      });
    });
    return promise;
  }

  /**
  * function to schedule the move down command
  * @function
  * @instance
  * @name moveDownFor
  * @argument {!number} duration the duration in milliseconds of camera movement
  */
  IpCameraController.prototype.moveDownFor = function(duration){
    var self = this;
    var promise = new Promise(function (resolve, reject) {
      self.action("moveDown",duration).then(function(){
        console.log("done moveDownFor");
        self.action("stopDown").then(function(){
          console.log("stopped...");
          resolve("stopped");
        });
      });
    });
    return promise;
  }

  module.exports = IpCameraController;
