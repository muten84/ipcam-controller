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
    -m, --modelType <modelType>  The camera model type (e.g.: sricamAF004)
    -d, --duration <duration>    The move duration in milliseconds
    -s, --schedule <schedule>    Schedule given action with a fuzzy scheduler that execute command in a random moment within the scheduled date. The schedule parameter is in minutes, for instance -s 30 schedules action within 30 minutes it can be before but not after.
    -c, --count <count>          Use it in combination with schedule to tels the ipcam-controller how many times should schedule the given action. For instance -s 30 -c 3 will schedule for 3 times the given action and all executions will be made within 30 minutes.

###Built in Model Types:
 - sricamAP004
