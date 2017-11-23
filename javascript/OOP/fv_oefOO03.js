'use strict';

var input = require("readline-sync");

var tankBeurten = [],
    totaalInhoud = 0,
    totaalAfstand = 0;

function TankBeurt() {
    this.inhoud;
    this.afstand;
}

for (var t = 0; t < 5; t++) {
    var tmpTB = new TankBeurt();

    tmpTB.inhoud = parseInt(input.question("Tankbeurt" + (t + 1) + " - inhoud: "));
    tmpTB.afstand = parseInt(input.question("Tankbeurt" + (t + 1) + " - afstand: "));

    totaalInhoud += tmpTB.inhoud;
    totaalAfstand += tmpTB.afstand;
    
    tankBeurten.push(tmpTB);
}

console.log("totaalInhoud: " + totaalInhoud);
console.log("totaalAfstand: " + totaalAfstand);
console.log("Het verbruik per 100km is " + ((totaalInhoud / totaalAfstand) * 100).toFixed(2));