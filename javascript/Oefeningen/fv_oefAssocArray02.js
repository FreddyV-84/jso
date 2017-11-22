'use strict';

var input = require("readline-sync");
var gemeenteNaam, postnummer;
var gemeentes = [];

gemeenteNaam = input.question("Geef een gemeente in: ");

while (gemeenteNaam != "stop") {
    if (gemeentes[gemeenteNaam.toLowerCase()] == null) {
        postnummer = input.question("Geef het postnummer van " + gemeenteNaam + ": ");
        gemeentes[gemeenteNaam.toLowerCase()] = postnummer;
    } else {
        console.log("Het postnummer van " + gemeenteNaam + " is " + gemeentes[gemeenteNaam.toLowerCase()]);
    }

    gemeenteNaam = input.question("Geef een gemeente in: ");
}