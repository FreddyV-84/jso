'use strict'
var input = require('readline-sync');

var graad;
var puntenStudent = input.question("Geef de punten van de student in (0 - 20):");


/* if(puntenStudent < 10)
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
    graad = "ongeldige score"; */

switch (true){
    case (puntenStudent >= 0 && puntenStudent < 10):
        graad = "onvoldoende";
        break;
    case (puntenStudent >= 10 && puntenStudent < 14):
        graad = "voldoende";
        break;
    case (puntenStudent >= 14 && puntenStudent < 16):
        graad = "onderscheiding";
        break;
    case (puntenStudent >= 16 && puntenStudent < 18):
        graad = "grote onderscheiding";
        break;
    case (puntenStudent <= 18 && puntenStudent <= 20):
        graad = "grootste onderscheiding";
        break;
    default:
        graad = "ongeldige score";
}

console.log(graad);