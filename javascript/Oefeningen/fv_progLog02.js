'use strict';

var key = require('readline-sync');

var naamBank, bedrag, renteBedrag, totaal;

naamBank = key.question("Geef de naam van een bank in: ");
bedrag = parseInt(key.question("Geef het bedrag in: "));

// de bank geeft 4% rente
renteBedrag = bedrag * 0.04;
totaal = bedrag + renteBedrag;

if (naamBank.toUpperCase() == "KAUPTHING") {
    console.log("U kunt voorlopig uw geld (" + bedrag + " EUR) niet opvragen");
}
else {
    console.log("Bij " + naamBank + " bedraagt het rentebedrag EUR " + renteBedrag + ". Het totaalbedrag is EUR " + totaal + ".");
}


