'use strict';

var input = require("readline-sync");
var bovengrens, getal1, getal2, product;
var score = 0;

bovengrens = parseInt(input.question("Geef een bovengrens voor getal1: "));

for (var i = 1; i <= 10; i++) {
    getal1 = geefGetal(bovengrens);
    // bovengrens = parseInt(input.question("Geef een bovengrens voor getal2: "));
    getal2 = geefGetal(bovengrens);

    product = parseInt(input.question("Wat is het product van " + getal1 + " en " + getal2 + "?: "));

    // toonMeldingBijUitkomst(evalueerProduct(getal1, getal2, product));
    if (evalueerProduct(getal1, getal2, product)) {
        toonMeldingBijUitkomst(true);
        score++;
    }
    else {
        toonMeldingBijUitkomst(false);
    }
}

toonMeldingBijTotaal(score);

function toonMeldingBijTotaal(score) {
    switch (true) {
        case score < 5:
            console.log("onvoldoende");
            break;
        case score >= 5 && score <= 6:
            console.log("nog veel oefenen!");
            break;
        case score == 7:
            console.log("OK");
            break;
        case score == 8:
            console.log("een goede score!");
            break;
        case score == 9:
            console.log("heel goed");
            break;
        case score == 10:
            console.log("proficiat! uitstekend!");
            break;
        default:
            console.log("score onbekend");
    }
}

function toonMeldingBijUitkomst(toonMelding) {
    if (toonMelding) {
        console.log("Goed zo!");
    }
    else {
        console.log("Fout, het product van %d en %d is %d", getal1, getal2, (getal1 * getal2));
    }
}

function evalueerProduct(getal1, getal2, product) {
    if (getal1 * getal2 == product)
        return true;
    else
        return false;
}

function geefGetal(bovengrens) {
    var x = Math.random();
    x *= (bovengrens - 1);
    x = Math.floor(1 + x);
    return x;
}

