'use strict';

// een functie zonder expliciete return
function tekenHuisje() {
    console.log("   *");
    console.log("  * *");
    console.log(" *   *");
    console.log("*******");
    console.log("*     *");
    console.log("*     *");
    console.log("*******");
    // hier staat impliciet    return undefined;
}

tekenHuisje();
tekenVierkant(4);
tekenVierkant(5);
tekenVierkant(6);

// klassikale oef.:
// schrijf een functie om een vierkant met doorgegeven
// zijde te tekenen

function tekenVierkant(zijde) {
    var rij;
    for (var i = 1; i <= zijde; i++) {
        rij = "";
        for (var j = 1; j <= zijde; j++) {
            rij += "X ";
        }
        console.log(rij);
    }
}