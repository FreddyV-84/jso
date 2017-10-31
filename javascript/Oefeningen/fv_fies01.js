'use strict';

var input = require('readline-sync');
var a, b, c;

/** Bereken de oppervlakte van een cirkel gegeven de straal r */
function oppCirkel(r) {
    return Math.PI * r * r;
}

/** Bereken de omtrek van een cirkel gegeven de straal r*/
function omtrekCirkel(r) {
    return 2 * Math.PI * r;
}

var radius = input.question("Geef de waarde voor de straal r in: ");

console.log("Oppervlakte: " + oppCirkel(radius));
console.log("Omtrek: " + omtrekCirkel(radius));