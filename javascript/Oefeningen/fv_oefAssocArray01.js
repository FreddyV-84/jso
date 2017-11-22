'use strict';

var input = require("readline-sync");

var zin;
var aantalWoorden = 0,
    aantalKarakters = 0,
    woorden = [];
var woordLengte = 0,
    woord = null;

zin = input.question("Geef een zin in: ");

//aantalWoorden = zin.split(/\b\S+\b/g).length;
//aantalKarakters = zin.split(/\w/g).length;

for (var w = 0; w < zin.length; w++) {
    // is het volgende karakter een leesteken?
    if (/[ .,;?!]/.test(zin.charAt(w)) || w === zin.length - 1) {
        if (w === zin.length - 1 && !(/[ .,;?!]/.test(zin.charAt(w)))) {
            woordLengte++;
            woord = zin.substr(w - woordLengte + 1, woordLengte).toLowerCase();
            console.log(woord);
        } else {
            woord = zin.substr(w - woordLengte, woordLengte).toLowerCase();
        }
        if (woorden[woord] == null) {
            woorden[woord] = 1;
        } else {
            woorden[woord]++;
        }
        aantalWoorden++;
        woordLengte = 0; // reset woordLengte for next word encounter
    } else {
        woordLengte++;
        aantalKarakters++;
    }
}

console.log("aantal woorden:    " + aantalWoorden);
console.log("aantal karakters:  " + aantalKarakters);
console.log("overzicht:");
for (woord in woorden) {
    console.log(woord + ": " + woorden[woord]);
}