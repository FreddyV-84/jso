'use strict';

var toetsenbord = require('readline-sync');

var getal1, getal2, macht;

/* functiedefinities of -declaraties */
function berekenTweedeMacht(getal) {
    var resultaat;
    resultaat = getal * getal;
    return resultaat;
}

// functie om een machtsverheffing te berekenen
function berekenMacht(grondtal, exponent) {
    var resultaat = 1;

    for (var i = 1; i <= exponent; i++) {
        resultaat *= grondtal;
    }

    return resultaat;
}

// functies oproepen ("gebruiken")
/* getal1 = toetsenbord.question("Geef eerste getal: ");
macht = berekenTweedeMacht(getal1);
console.log("Het getal %d vermenigvuldigd met zichzelf is %d", getal1, macht);
getal2 = toetsenbord.question("Geef tweede getal: ");
macht = berekenTweedeMacht(getal2);
console.log("Het getal %d vermenigvuldigd met zichzelf is %d", getal2, macht); */

console.log(berekenMacht(2, 0));