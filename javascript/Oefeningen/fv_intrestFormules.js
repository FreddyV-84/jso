'use strict';

var input = require('readline-sync');

var startKapitaal = input.question("Geef het startkapitaal in: ");
var jaren = input.question("Geef het aantal jaren in: ");
var key, intrestVoetGewoon, intrestVoetSamengesteld;
var gewoneBerekening, samengesteldeBerekening;

do {

    intrestVoetGewoon = parseFloat(input.question("Geef de gewone intrestvoet in: "));
    intrestVoetSamengesteld = parseFloat(input.question("Geef de samengesteld intrestvoet in: "));

    if (jaren >= 5) {
        intrestVoetGewoon *= 0.01;
        intrestVoetSamengesteld *= 0.01;
    }

    // ‘gewoon’ systeem: 		gb = sk + j * sk * gi 
    // samengesteld systeem: 	sb = sk *(1 + si)j
    gewoneBerekening = startKapitaal + jaren * startKapitaal * intrestVoetGewoon;
    samengesteldeBerekening = startKapitaal * (1 + intrestVoetSamengesteld) * jaren;
    console.log("----------------------------------------------");
    console.log("Eindkapitaal met gewone intrest:               € " + gewoneBerekening);
    console.log("Eindkapitaal met samengestelde intrestvoet:    € " + samengesteldeBerekening);
    console.log("----------------------------------------------");
    if (gewoneBerekening > samengesteldeBerekening)
        console.log("De gewone rentevoet brengt meer op.");
    else if (gewoneBerekening < samengesteldeBerekening) {
        console.log("De samengestelde rentevoet brengt meer op.");
    } else {
        console.log("Beide formules brengen evenveel op.");
    }
    key = input.question("Doorgaan? (Y/N): ");
} while (key.indexOf('y') !== -1 || key.indexOf('Y') !== -1)