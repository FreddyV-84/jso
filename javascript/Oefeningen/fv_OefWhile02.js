'use strict'

var invoer = require('readline-sync');


var getalA = parseInt(invoer.question("Geef een getal A in."));
var getalB = parseInt(invoer.question("Geef een getal A in."));
var ggd = 0;

while (getalA != getalB) {
    if (getalA > getalB)
        getalA -= getalB;
    else
        getalB -= getalA;
}

console.log("De grootste gemene deler is %d",getalA);