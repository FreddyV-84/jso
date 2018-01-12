'use strict';

var events = require('events');
var eventsEmitter = new events.EventEmitter();


// handle tsunamiDetected event
eventsEmitter.on('tsunamiDetected', function (siren) {
    console.log("--------tsunamiDetected event handler started ----------------------------------------");
    console.log(" --> Activate the siren alarm...");
    console.log("-------------------------------------------------------------------------------------");
    console.log("EVACUATE");
    console.log(siren);
    // sound the alarm
    setTimeout(function () {
        siren.activate();
    }, 1000);
})

// TsunamiDetector class/template
function TsunamiDetector(name, location, siren) {
    this.name = name;
    this.location = location;
    this.siren = siren;
}
TsunamiDetector.prototype.powerOn = function () {
    console.log("-------------------------------------------------------------------------------------");
    console.log("tsunamiDetector: " + this.name + " met locatie: " + this.location + "  ==> powered on");
    console.log("-------------------------------------------------------------------------------------");
    console.log("Listening for potential tsunami symptoms...")
    setTimeout(function () {
        console.log("   tsunamiDetected event triggered!");
        // trigger/fire event (signal something has happened, in this case, a tsunami is detected)
        eventsEmitter.emit('tsunamiDetected', this.siren);
    }, 4000);
}

module.exports = TsunamiDetector;