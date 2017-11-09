'use strict';

var input = require("readline-sync");

var positie, j = 1, index = 0, naam, namen = [];

for (var i = 1; i <= j; i++) {
    naam = input.question("Naam " + i + "?: ");
    namen[i - 1] = naam;
    if (i <= 10) {
        if (naam == "") {
            i--;
            console.log("U gaf niets in als naam!");
        }
    }

    if(i> 10 && naam == "")
        j--;
    j++; // ga altijd naar volgende
}

// while(naam != "" && namen.length < 10){
//     naam = input.question("Naam " + (index + 1) + "?: ");
//     namen[index] = naam;  
// }

positie = input.question("Positie?: ");
console.log(namen[positie - 1]);