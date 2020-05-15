const moment = require('moment');

//Da la fecha actual
let ahora = moment();
console.log(ahora.toString());

//Darle formato a la fecha
let dateFormat = ahora.format('YYYY/MM/DD - HH:mm');
console.log(dateFormat);

//Documentacion: https://www.npmjs.com/package/moment
