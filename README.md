# ipcam-controller

###Install:

npm install -g git+https://github.com/muten84/ipcam-controller.git

###Usage:

ipcam [options] action

  Where action can one of: left, right, up, down, left-up, left-down, right-up, right-down

  Options:

    -h, --help                   output usage information
    -u, --user <user>            The user to authenticate as
    -p, --password <password>    The user's password
    -a, --address <address>      The camera ip address
    -m, --modelType <modelType>  The camera model type (e.g.: sricamAF004)
    -d, --duration <duration>    The move duration in milliseconds

###Built in Model Types:
 - sricamAF004
