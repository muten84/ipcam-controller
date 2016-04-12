# ipcam-controller

### Install

    npm install -g git+https://github.com/muten84/ipcam-controller.git

or from npm:

    npm install -g ipcam-controller

### Usage

    ipcam [options] action

  Where action can be one of: left, right, up, down, left-up, left-down, right-up, right-down

  Options:

    -h, --help                   output usage information
    -u, --user <user>            The user to authenticate as
    -p, --password <password>    The user's password
    -a, --address <address>      The camera ip address
    -m, --modelType <modelType>  The camera model type (e.g.: sricamAP004)
    -d, --duration <duration>    The move duration in milliseconds
    -s, --schedule <schedule>    Schedule given action with a fuzzy scheduler that execute command in a random moment within the scheduled date. The schedule parameter is in minutes, for instance -s 30 schedules action within 30 minutes it can be before but not after.
    -c, --count <count>          Use it in combination with schedule to tels the ipcam-controller how many times should schedule the given action. For instance -s 30 -c 3 will schedule for 3 times the given action and all executions will be made within 30 minutes.

### Built-in Camera Model Types
 - sricamAP004


## API and [Documentation](http://www.luigibifulco.it/projects/ipcam-controller/v1.0.x/)
The ipcam-controller module provides a library for javascript direct usage. The API are very simple. [Here](http://www.luigibifulco.it/projects/ipcam-controller/v1.0.x/) you can find the relative documentation about all exported methods. 
See examples below:

### Import
```javascript
    var IPCamera = require('ipcam-controller');
```
### Create and config a new camera
```javascript
    var camera = new IPCamera();
    var config = {
        ip: "127.0.0.1",
        name: "Camera",
        type: "sricamAP004",
        user: "admin",
        pwd: "troppsecret",
        duration: "3000" //default moves duration
    }
    camera.createCamera(config.name,config.type,config);
```
### Actions
Possible actions are: moveLeft, moveRight, moveUp, moveDown, every action need a duration after which the service launchs the relative stop command.
```javascript
    //move camera left direction and after 3 secs stop movement.
    camera.moveLeftFor(3000);
```
You can invoke a generic action without the relative stop command, in this way you can implement the after execution code in the then method because the generic action method return a promise.
```javascript
    //generic action return a promise after duration execution time
    function done(){
        //for sricam it is useful to stop movement
    }
    camera.action("moveLeft", 3000).then(done);
```
### Scheduler
With the schdule method you can schedule an action with a fuzzy scheduler, so the scheduled actions will not be predictable.
```javascript
    //schedule examples: schedule an amount of two moveLeft actions within next 5 minutes, so all moves will be executed within 5 minutes. Duration is the default move duration passed in the config object
    camera.schedule("moveLeft",5,2);
```

## Adding new camera types
You can add new camera type providing a spec object, you can provide your own calling the addType method before calling the createCamera method.
Here is the built-in spec object for sricamAP004 model:

```javascript
    var moveType = "camera.control.ptz.move";
    var stopType = "camera.control.ptz.stop";
    var velocityType = "camera.control.ptz.velocity";

    var sricam_ap004 = {
          auth : {
            userParam: "loginuse",
            passParam: "loginpas"
          },
          ptz : {
            velocity : {
              action: "camera_control.cgi",
              param: "100",
              slow: "1",
              mid: "5",
              fast: "10"
            },

            stop : {
              action: "decoder_control.cgi",
              paramName: "command",
              up: "3",
              down: "1",
              left: "5",
              right: "7"
            },

            move : {
              action: "decoder_control.cgi",
              paramName: "command",
              preset1: "31",
              preset2: "33",
              up: "0",
              down: "2",
              left: "6",
              right: "4"
            }
        },
        actions: [
          {
          key: "moveLeft",
          action:{
            type: moveType,
            value: "left"
          }},
          {
          key: "moveRight",
          action:{
            type: moveType,
            value: "right"
          }},
          {
          key: "stopLeft",
          action:{
            type: stopType,
            value: "left"
          }},
          {
          key: "stopRight",
          action:{
            type: stopType,
            value: "right"
          }}
          ]
      }

      module.exports = sricam_ap004;
```
