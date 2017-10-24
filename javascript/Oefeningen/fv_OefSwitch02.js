'use strict'

var input = require('readline-sync');

var puntenStudent = input.question("Geef de punten van de student in (0 - 20):");
var graad;

if(puntenStudent < 10)
    graad = "onvoldoende";
else if(puntenStudent < 14)
    graad = "voldoende";
else if(puntenStudent < 16)
    graad = "onderscheiding";
else if(puntenStudent < 18)
    graad = "grote onderscheiding";
else if (puntenStudent <= 20)
    graad = "grootste onderscheiding";
else
    graad = "ongeldige score";

console.log(graad);