'use strict';

var input = require('readline-sync');

var woord = input.question("Geef een woord in: ");

function isPalindroomArray(woord) {
    // vb kok, lepel, koortsmeetsysteemstrook
    return (woord == woord.split('').reverse().join('')) ? true : false;
}

function isPalindroom(woord) {
    var omgekeerd = "";
    for (var i = woord.length - 1; i >= 0; i--) {
        omgekeerd += woord.charAt(i);
    }

    return (woord == omgekeerd) ? true : false;
}

console.time("metArray");
console.log(woord + " is " + (isPalindroomArray(woord) ? "een" : "geen") + " palindroom.");
console.timeEnd("metArray");

console.time("metFor");
console.log(woord + " is " + (isPalindroom(woord) ? "een" : "geen") + " palindroom.");
console.timeEnd("metFor");
