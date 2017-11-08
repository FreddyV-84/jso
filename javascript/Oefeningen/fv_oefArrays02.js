'use strict';

var input = require('readline-sync');

var verkopers = ["Jan", "Piet", "Joris", "Corneel"];
var naam, omzet, omzetJan, omzetPiet, omzetJoris, omzetCorneel;
omzetJan = omzetPiet = omzetJoris = omzetCorneel = 0;

naam = input.question("Geef verkoper (" + verkopers.toString() + ") in: ");

// while (verkopers.includes(naam)) {
while (naam != "einde") {
    omzet = parseFloat(input.question("omzet: "));
    switch (naam) {
        case verkopers[0]: // Jan
            omzetJan += omzet;
            break;
        case verkopers[1]: // Piet
            omzetPiet += omzet;
            break;
        case verkopers[2]: // Joris
            omzetJoris += omzet;
            break;
        case verkopers[3]: // Corneel
            omzetCorneel += omzet;
            break;
    }
    naam = input.question("Geef verkoper (" + verkopers.toString() + ") in: ");
}

console.log("omzet Jan:     " + omzetJan);
console.log("omzet Piet:    " + omzetPiet);
console.log("omzet Joris:   " + omzetJoris);
console.log("omzet Corneel: " + omzetCorneel);