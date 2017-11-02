'use strict';

var input = require('readline-sync');

var zin = input.question("Geef een zin in: ");

function telWoorden(text) {
    var woorden = 0;
    var index, spatiePos = 0;

    do {
        spatiePos = text.indexOf(" ", index);
        woorden++;
        index = spatiePos + 1;
    } while (spatiePos != -1);
    return woorden;
}

const SPATIE = " ";
function aantalWoorden(zin, scheidingsteken = SPATIE) {
    var aantalSpaties = 0;
    var indexSpatie = zin.indexOf(scheidingsteken);
    while (indexSpatie > -1) {
        aantalSpaties++;
        indexSpatie = zin.indexOf(scheidingsteken, indexSpatie + 1);
    }
    return aantalSpaties + 1;
}

console.time("Fre");
console.log("Ingegeven tekst bevat " + telWoorden(zin) + " woorden");
console.timeEnd("Fre");

console.time("Ann");
console.log("Ingegeven tekst bevat " + aantalWoorden(zin) + " woorden");
console.timeEnd("Ann");