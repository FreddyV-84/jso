'use strict';


var input = require("readline-sync");

// Een firma verkoopt gordijnen van 60 cm, 90 cm, 120 cm, 150 cm en 200 cm breed. 
// Schrijf een script waarbij de gebruiker de breedte van het raam ingeeft, 
// en waar de breedte van de smalste gordijnen die groot genoeg zijn wordt getoond. 
// Bijvoorbeeld: mijn raam meet 130 cm, dus ik heb gordijnen van 150 cm nodig.

var breedte, maat, gordijnMaten = [60, 90, 120, 150, 200];

breedte = input.question("Geef de breedte van het raam in (cm): ");

for (var i = 0; i < gordijnMaten.length; i++) {
    if (breedte <= gordijnMaten[i]) {
        maat = gordijnMaten[i];
        break; // gevonden dus stop maar met verder zoeken.
    }

}


console.log("U bent het beste af met gordijnen van " + maat + "cm.");