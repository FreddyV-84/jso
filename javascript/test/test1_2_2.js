'use strict';

var invoer = require('readline-sync');

var eenheid, toegelatenSnelheid, gemetenSnelheid;
var herhaal;

do {
    eenheid = leesEenheid();
    toegelatenSnelheid = invoer.question("Wat was de toegelaten snelheid in " + (eenheid == 'k' ? "km" : "mijlen") + "? :");
    gemetenSnelheid = invoer.question("Wat was de gemeten snelheid in " + (eenheid == 'k' ? "km" : "mijlen") + "? :");
    console.log(boeteBijSnelheidsovertreding(toegelatenSnelheid, gemetenSnelheid, eenheid));
    herhaal = invoer.question("Wil u nog een boete berekenen? (J: Ja|N: Nee)").toLowerCase();
} while (herhaal == 'j');



/** Geeft de afstand in km terug gegeven de afstand in mijlen */
function mijlenNaarKm(afstandInMijlen) {
    return afstandInMijlen * 0.62137; // 1 mijl is 1,609344 km
}

/** blijft invoer vragen tot de gebruiker 'k', 'K', 'm' of 'M' ingeeft en geeft dit terug */
function leesEenheid() {
    do {
        var karakter = invoer.question("Geef de snelheidseenheid in (K: km|M: mijlen): ").toLowerCase();

    } while (karakter != "k" && karakter != "m");

    return karakter;
}

/** Geeft een geldboete in euro terug (of de string "dagvaarding") gegeven de toegelaten snelheid, de gemeten snelheid en de eenheid (m = mijl/ k=km) */
function boeteBijSnelheidsovertreding(toegelatenSnelheid, gemetenSnelheid, eenheid) {
    if (eenheid == 'm' || eenheid == 'M') {
        toegelatenSnelheid = mijlenNaarKm(toegelatenSnelheid);
        gemetenSnelheid = mijlenNaarKm(gemetenSnelheid);
    }

    var overtredenSnelheid = gemetenSnelheid - toegelatenSnelheid;
    if (overtredenSnelheid > 0) {
        if (overtredenSnelheid <= 10) {
            return "€ " + (50).toFixed(2);
        }

        if (overtredenSnelheid <= 30) {
            return "€ " + (50 + 10 * (overtredenSnelheid - 10)).toFixed(2);
        }

        return "dagvaarding";
    }

    return "€ " + (0).toFixed(2);
}