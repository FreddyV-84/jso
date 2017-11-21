'use strict';

// ------------------------------------------------------------------
// GLOBAL VARIABLE DECLARATIONS & ASSIGNMENTS
// ------------------------------------------------------------------
var input = require("readline-sync");

var eenheden = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tientallen = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var honderdtallen = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var duizendtallen = ["", "M", "MM"];

var year, error;
const MAX_LENGTH = 4;


// ------------------------------------------------------------------
// SCRIPT LOGIC
// ------------------------------------------------------------------
// keep asking the user for the year until the input is valid
while (error !== false) {
    year = input.question("Geef een jaartal ]0 - 2100]: ");
    if (checkInput(year))
        console.log(error);
}

// calculate & render the Roman Number to the screen
console.log(year + " is in Romeinse cijfers " + decimalToRoman(year));


// ------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------
function checkInput(year) {
    error = false;

    if (isNaN(year)) {
        error = "De ingegeven waarde is geen getal.";
    } else {
        if (year <= 0) {
            error = "Het jaartal bevindt zich onder de ondergrens.";
        }
        if (year > 2100) {
            error = "Het jaartal bevindt zich boven de bovengrens.";
        }

    }

    return error;
}

function decimalToRoman(year) {
    var roman = "";
    var length = parseInt(year.length);
    var lengthInverse = length - MAX_LENGTH;

    // depending on the length:
    // start at the length position and fall through from the biggest to 
    // the smallest units and append the corresponding units to var roman
    switch (length) {
        case 4:
            roman += duizendtallen[year.charAt(0)];
        case 3:
            roman += honderdtallen[parseInt(year.charAt(1 + lengthInverse))];
        case 2:
            roman += tientallen[parseInt(year.charAt(2 + lengthInverse))];
        case 1:
            roman += eenheden[parseInt(year.charAt(3 + lengthInverse))];
    }

    return roman;
}