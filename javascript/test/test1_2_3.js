'use strict';

var invoer = require('readline-sync');

var studiepunten, score;
var studiepuntenTotaal = 0, onvoldoendes = 0, gewogenGemiddelde = 0;
var herhaal;

do {
    studiepunten = parseFloat(invoer.question("Geef de studiepunten in: "));
    do {
        score = parseFloat(invoer.question("Geef de behaalde score in: "));
    } while (score < 0 || score > 20);

    if (score < 10) { onvoldoendes++; }

    gewogenGemiddelde += studiepunten * score;
    studiepuntenTotaal += studiepunten;

    herhaal = invoer.question("Wilt u nog een examen ingeven? (J: Ja|N: Nee)").toLowerCase();
} while (herhaal == 'j')

console.log("gewogen gemiddelde = %d", (gewogenGemiddelde / studiepuntenTotaal).toFixed(2));
console.log("aantal onvoldoendes = %d", onvoldoendes);