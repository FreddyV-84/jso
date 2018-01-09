'use strict';

var events = require('events');

var eventsEmitter = new events.EventEmitter();

// landSiren class/template
function LandSiren() {
    this.activate = function () {
        setInterval(function () {
            console.log("Whieeeejoeeeeeeee")
        }, 1000);
    }
}

// TsunamiDetector class/template
function TsunamiDetector(name, location) {
    this.name = name;
    this.location = location;
}
TsunamiDetector.prototype.powerOn = function () {
    console.log("-------------------------------------------------------------------------------------");
    console.log("tsunamiDetector: " + this.name + " met locatie: " + this.location + "  ==> powered on");
    console.log("-------------------------------------------------------------------------------------");
    console.log("Listening for potential tsunami symptoms...")
    setTimeout(function () {
        console.log("   tsunamiDetected event triggered!");
        // trigger/fire event (signal something has happened, in this case, a tsunami is detected)
        eventsEmitter.emit('tsunamiDetected');
    }, 4000);
}

// handle tsunamiDetected event
eventsEmitter.on('tsunamiDetected', function () {
    console.log("   tsunamiDetected event handler started --------------------------------------------");
    console.log(" --> Activate the siren alarm...");
    console.log("-------------------------------------------------------------------------------------");
    console.log("EVACUATE");
    // sound the alarm
    setTimeout(function () {
        siren.activate();
    }, 1000);
})

// create landSiren
var siren = new LandSiren();

// create a TsunamiDetector
var V24Detector = new TsunamiDetector("Model V24", "Indische oceaan");
// power our V24Detector on so it will start scanning for tsunamis
V24Detector.powerOn();