'use strict';

var key = require('readline-sync');

var naamBank, bedrag, renteBedrag, totaal;

naamBank = key.question("Geef de naam van een bank in: ");
bedrag = parseInt(key.question("Geef het bedrag in: "));

// de bank geeft 4% rente
renteBedrag = bedrag * 0.04;
totaal = bedrag + renteBedrag;

console.log("Bij Belfius bedraagt het rentebedrag EUR " + renteBedrag + ". Het totaalbedrag is EUR " + totaal + ".");