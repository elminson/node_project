const EventsEmiter = require('events');

var url = "http://elminsonlog.io/log";

class Logger extends EventsEmiter {
    log(message) {
        //Send http request
        console.log(message);
        this.emit('messageLogged', {id: 1, url: "http//"});

    }
}

module.exports = Logger;