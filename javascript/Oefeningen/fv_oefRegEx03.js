'use strict';

var input = require('readline-sync');

var zin = input.question("Geef een zin in: ");

function naarAntwerpsRegEx(regex){
    return regex.replace(/h/gi, "");
}

function naarAntwerps(text) {
    var currentChar, newText = "";
    for (var i = 0; i < text.length; i++) {
        currentChar = text.charAt(i);
        if(currentChar == 'h')
            currentChar = '';
        newText += currentChar;
    }
    return newText;
}

function naarLimburgsRegEx(regex){
    return regex.replace(/([aeiou])/gi, "$1$1");
}

function naarLimburgs(text) {
    var currentChar, newText = "";
    for (var i = 0; i < text.length; i++) {
        currentChar = text.charAt(i);
        switch (currentChar) {
            case 'a':
                currentChar = 'aa';
                break;
            case 'e':
                currentChar = 'ee';
                break;
            case 'i':
                currentChar = 'ii';
                break;
            case 'o':
                currentChar = 'oo';
                break;
            case 'u':
                currentChar = 'uu';
                break;
        }
        newText += currentChar;
    }
    return newText;
}


console.log("oep zen Aantwerps: " + naarAntwerps(zin));
console.log("oep zen Aantwerps: " + naarAntwerpsRegEx(zin));

console.log("Hop zhin Leimbeurgs: " + naarLimburgs(zin));
console.log("Hop zhin Leimbeurgs: " + naarLimburgsRegEx(zin));
