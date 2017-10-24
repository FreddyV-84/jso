'use strict';

var key = require('readline-sync');

var startGetal;
var recipient;
var recipientSingular;
var consumption = "beer";
var invoer;
var total;

do {
    startGetal = key.question("Hoeveel consumpties?:");
    recipient = key.question("Wat is het meervoud van het recipiënt?:");
    recipientSingular = key.question("Wat is het enkelvoud van het recipiënt?");
    consumption = key.question("Wat is de consumptie?:");

    for (var i = startGetal; i >= 0; i--) {
        switch (i) {
            case 0:
                console.log("No more " + recipient + " of beer on the wall, no more " + recipient + " of beer.");
                console.log("Go to the store and buy some more, " + startGetal + " " + recipient + " of beer on the wall.");
                break;
            case 1:
                console.log(i + " " + recipientSingular + " of beer on the wall, " + i + " " + recipientSingular + " of beer.");
                console.log("Take one down and pass it around, " + "no more " + recipient + " of beer on the wall.");
                break;
            default:
                console.log(i + " " + recipient + " of beer on the wall, " + i + " " + recipient + " of beer.");
                console.log("Take one down and pass it around, " + (i - 1) + " " + recipient + " of beer on the wall.");

        }
        console.log("\n");
    }


    invoer = key.question("Wil je de liedtekst opnieuw genereren? (J/N)");
} while (invoer == 'j' || invoer == 'J');