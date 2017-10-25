'use strict';

var key = require('readline-sync');
var spaces, spacesLeft, spacesMiddle;
var bottom = "**";

var height = key.question("Geef de hoogte van het parallellogram in: ");
var topStars = "";
var bottomStars = "";

// ------------------------------------------------------------
// CALCULATE TOP STARS
// ------------------------------------------------------------
for (var i = 1; i <= height * 3; i++) {
    topStars += "*";
}
console.log(topStars); // Draw Top Line Stars

// ------------------------------------------------------------
// CALCULATE MIDDLE STARS
// ------------------------------------------------------------
for (var i = 1; i <= height - 2; i++) {
    spacesLeft = "";
    for (var j = 1; j <= i; j++) {
        spacesLeft += " ";
    }
    spacesMiddle = "";
    for (var j = 1; j <= height * 3 - 2; j++) {
        spacesMiddle += " ";
    }
    console.log(spacesLeft + "*" + spacesMiddle + "*"); // Draw Middle Line Stars
}

// ------------------------------------------------------------
// CALCULATE BOTTOM STARS
// ------------------------------------------------------------
for (var i = 1; i <= height - 1; i++) {
    bottomStars += " ";
}
console.log(bottomStars + topStars); // Draw Bottom Line Stars