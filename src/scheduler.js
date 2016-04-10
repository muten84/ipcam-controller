var scheduler = require('fuzzy-scheduler');
var moment = require('moment');

function schedule(action,during,times){
  var now = moment();
  var then = moment(now).add(during, 'm');
  scheduler.do(action).count(times).between(now, then).done();
}
var obj = { schedule : schedule}
module.exports = obj;
