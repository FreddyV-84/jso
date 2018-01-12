'use strict';

var events = require('events');
var LandSiren = require('./fvSiren.js');
var TsunamiDetector = require('./fvTsunamiDetector');


// create landSiren
var siren = new LandSiren();

// create a TsunamiDetector
var V24Detector = new TsunamiDetector("Model V24", "Indische oceaan", siren);
// power our V24Detector on so it will start scanning for tsunamis
V24Detector.powerOn();