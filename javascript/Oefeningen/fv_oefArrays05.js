'use strict';

var input = require("readline-sync");

var naam, lengte, lengteTotaal = 0, kleinste, kleinstePos, personen = [], lengtes = [];

for (var c = 1; c <= 9; c++) {
    naam = input.question("Naam van de " + c + "e persoon?: ");
    lengte = parseFloat(input.question("Wat is de lengte van " + naam + "?: "));

    if (c == 1){
        kleinste = lengte;
        kleinstePos = c;
    }

    personen[c] = naam;
    lengtes[c] = lengte;

    if (lengte < kleinste){
        kleinste = lengte;
        kleinstePos = c;
    }

    lengteTotaal += lengte;
}

console.log("De gemiddelde lengte is:   " + (lengteTotaal/lengtes.length).toFixed(2));
console.log("De kleinste persoon is:    " + personen[kleinstePos]);