'use strict'

var invoer = require('readline-sync');


var geslacht = invoer.question("Geef het geslacht in:");
var leeftijd;
var jongeMannen, plus25Mannen,jongeVrouwen, plus25Vrouwen;

jongeMannen = plus25Mannen = jongeVrouwen = plus25Vrouwen = 0;

while (geslacht == 'm' || geslacht == 'v') {
    leeftijd = parseInt(invoer.question("Geef de leeftijd in:"));

    switch (true) {
        case geslacht == 'm' && leeftijd < 25:
            jongeMannen++;
            break;
        case geslacht == 'm' && leeftijd >= 25:
            plus25Mannen++;
            break;
        case geslacht == 'v' && leeftijd < 25:
            jongeVrouwen++;
            break;
        case geslacht == 'v' && leeftijd >= 25:
            plus25Vrouwen++;
            break;
        default:
            console.log("Something horribly unexpected happened here...")
    }
    geslacht = invoer.question("Geef het geslacht in:");
}

console.log("\t|---------------|---------------|")
console.log("\t|       <25     |      >=25     |");
console.log("===========|===============|===============|")
console.log("mannen     |       %d       |        %d      |", jongeMannen, plus25Mannen);
console.log("-----------|---------------|---------------|")
console.log("vrouwen    |       %d       |        %d      |", jongeVrouwen, plus25Vrouwen);
console.log("___________|_______________|_______________|")


// Escape Characters
// \t    tab
// \n   newline