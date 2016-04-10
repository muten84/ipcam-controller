# ipcam-controller

###Install:

    npm install -g git+https://github.com/muten84/ipcam-controller.git
    
or from npm:

    npm install -g ipcam-controller

###Usage:

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

###Built in Model Types:
 - sricamAP004


##API:
The ipcam-controller module provides a library for javascript direct usage. The API are very simple. See examples below:

    var IPCamera = require('ipcam-controller');
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
    //move camera left direction and after 3 secs stop movement.
    camera.moveLeftFor(3000);
    //generic action return a promise after duration execution time
    function done(){
        //for sricam it is usfule to stop movement
    }
    camera.action("moveLeft", 3000).then(done);
    //schedule examples: schedule an amount of two moveLeft actions within next 5 minutes, so all moves will be executed within 5 minutes. Duration is the default move duration passed in the config object 
    camera.schedule("moveLeft",5,2);
    
