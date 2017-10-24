'use strict'

var invoer = require('readline-sync');

var som = 0;
var aantal = 0;


var getal = parseInt(invoer.question("Geef een getal in."));

while (getal >= 0) {
    getal = parseInt(invoer.question("Geef nog een getal in."));

    som += getal;
    aantal++;
}

if (aantal > 0)
    console.log("Het gemiddelde van ingegeven getallen is %d", som / aantal);
else
    console.log("Er zijn geen getallen ingevoerd.");