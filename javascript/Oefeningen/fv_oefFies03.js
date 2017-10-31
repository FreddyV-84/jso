'use strict';

var input = require("readline-sync");
var getal;

/** Berekent het aantal graden celcius gegeven het aantal graden fahrenheit */
function celsius(fGraden) {
    return (5.0 / 9.0 * (fGraden - 32));
}

/** Berekent het aantal graden fahrenheit gegeven het aantal graden celsius */
function fahrenheit(cGraden) {
    return (9.0 / 5.0 * cGraden + 32);
}

getal = parseFloat(input.question("Geef een getal in: "));

console.log(getal + " graden fahrenheit = " + celsius(getal) + " graden celcius");
console.log(getal + " graden celsius = " + fahrenheit(getal) + " graden fahrenheit");