const moment = require('moment')
// moment().format()
// var date = new Date()
// var lo = moment(date).toISOString()
// console.log(lo)


let epoch = 1562127342123;
let result = moment.unix(1318781876,'X').utc();
console.log(result);

