'use strict';

var key = require('readline-sync');

var raamBreedte = parseInt(key.question("Wat is de raambreedte?"));

switch (true) {
    case raamBreedte <= 60:
        console.log("Kies voor gordijnen van 60cm breed.");
        break;
    case raamBreedte <= 90:
        console.log("Kies voor gordijnen van 90cm breed.");
        break;
    case raamBreedte <= 120:
        console.log("Kies voor gordijnen van 120cm breed.");
        break;
    case raamBreedte <= 150:
        console.log("Kies voor gordijnen van 150cm breed.");
        break;
    case raamBreedte <= 200:
        console.log("Kies voor gordijnen van 200cm.");
        break;
    default:
        console.log("geen gepaste gordijnen beschikbaar.");
}