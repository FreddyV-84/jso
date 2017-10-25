'use strict';

var key = require('readline-sync');

var naamBank, bedrag, renteBedrag, totaal;

naamBank = key.question("Geef de naam van een bank in: ");
bedrag = parseInt(key.question("Geef het bedrag in: "));

if (naamBank.toUpperCase() == "KAUPTHING" && bedrag > 20000) {
    console.log(naamBank + " geeft maar 20000 EUR terug");
}
else {
    console.log(naamBank + " geeft EUR " + bedrag + " terug.");
}


