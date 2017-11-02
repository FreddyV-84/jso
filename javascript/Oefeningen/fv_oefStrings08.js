'use strict';

var input = require('readline-sync');

var voornaam = input.question("Geef je voornaam: ");
var familienaam = input.question("Geef je familienaam: ");

function belgischeNaam(voornaam, familienaam) {
    return familienaam + ", " + voornaam;
}

function nederlandseNaam(voornaam, familienaam) {
    var splitPos, laatsteDeel, eersteDeel;
    // Van der Meulen
    // Jos
    // Meulen, Van der, Jos
    splitPos = familienaam.lastIndexOf(" ");
    if(splitPos == -1)
        return belgischeNaam(voornaam, familienaam);
        
    laatsteDeel = familienaam.slice(splitPos + 1);
    eersteDeel = familienaam.slice(0, splitPos);
    return laatsteDeel + ", " + eersteDeel + ", " + voornaam;
}



console.log(belgischeNaam(voornaam, familienaam));
console.log(nederlandseNaam(voornaam, familienaam));