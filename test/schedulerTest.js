var scheduler = require('fuzzy-scheduler');
var moment = require('moment');

function fun1() {
    console.log('fun1');
}

function fun2(lmao) {
    console.log('fun2 ' + lmao);
}

function fun3(y, lmao) {
    console.log('fun3' + y + ' ' + lmao);
}

var now = moment();
var then = moment(now).add(30, 'm');

scheduler.do(fun1).count(3).between(now, then).done();
//scheduler.do(ayy, "lmao").between(now, then).done();
//scheduler.do(ayyy, "y", "lmao").done();
