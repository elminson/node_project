const EventsEmiter = require('events');
const Logger = require('./logger');
const logger = new Logger();
//Register listener
logger.on('messageLogged', (arg) => {
    console.log('Listener caller', arg);
});

logger.log('message 123');