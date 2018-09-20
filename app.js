const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
//logger.log("example");
///var pathObje = path.parse(__filename);
//console.log(pathObje);

// var totalm = os.totalmem();
// var freemem = os.freemem();
// console.log("Total totalmtotalm " + totalm + "\n");
// console.log("Total freemem " + freemem + "\n");
// console.log(`Total freemem ${totalm} `);
// console.log(`Total freemem ${freemem} `);

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err);
    else console.log(files);
});
