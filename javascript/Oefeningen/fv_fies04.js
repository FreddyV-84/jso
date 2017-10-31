'use strict';

var input = require('readline-sync');
var jaar, schrikkeljaar, deelbaarDoor4, deelbaarDoor100, deelBaarDoor400;

/** Bereken of het gegeven jaar een schrikkeljaar is */
function isSchrikkeljaar(jaar) {
    // Een jaar is een schrikkeljaar als het deelbaar is door 4, 
    // maar niet deelbaar door 100.  
    // Het is toch een schrikkeljaar als het deelbaar is door 400.

    // deelbaar door 4?
    deelbaarDoor4 = jaar % 4 == 0;

    // deelbaar door 100?
    deelbaarDoor100 = jaar % 100 == 0;

    // deelbaar door 400?
    deelBaarDoor400 = jaar % 400 == 0;

    schrikkeljaar = false;
    if (deelbaarDoor4)
        schrikkeljaar = true;
    if (deelbaarDoor100)
        schrikkeljaar = false;
    if (deelBaarDoor400)
        schrikkeljaar = true;

    return schrikkeljaar;
}


jaar = parseInt(input.question("Geef het jaar in: "));

console.log(jaar + " is " + (isSchrikkeljaar(jaar) ? "een" : "geen") + " schrikkeljaar");