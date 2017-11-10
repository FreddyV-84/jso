'use strict';

var input = require("readline-sync");

var getal, getallen = ["nul", "een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen"];

getal = input.question("Geef een getal in tussen 0 en 9 grenswaarden inclusief: ");

while(getal >= 0 && getal <= 9) {
    console.log(getallen[getal]);
    getal = input.question("Geef een getal in tussen 0 en 9 grenswaarden inclusief: ");
}
