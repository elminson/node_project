const logger = require('./logger');
const path = require('path');
logger.log("example");

var pathObje = path.parse(__filename);
console.log(pathObje);
