'use strict';

var input = require('readline-sync');

var text = input.question("Geef een tekst in: ");

function verwisselGenH(text) {
    var currentChar, newText = "";
    for (var i = 0; i < text.length; i++) {
        currentChar = text.charAt(i);
        switch (currentChar) {
            case 'h':
                currentChar = 'g';
                break;
            case 'g':
                currentChar = 'h';
                break;
        }
        newText += currentChar;
    }
    return newText;
}

function verwisselGenHmetRegEx(text) {
    return text.replace(/g|h/g, function (match) { return (match == "g") ? "h" : "g"; });
}

console.log(verwisselGenH(text));
console.log(verwisselGenHmetRegEx(text));