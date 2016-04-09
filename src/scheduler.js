var scheduler = require('fuzzy-scheduler');
var moment = require('moment');
var camera = require('./actions.js')

function schedule(action,during,times){
  var now = moment();
  var then = moment(now).add(during, 'm');
  scheduler.do(action).count(times).between(now, then).done();
}

module.exports = schedule;
