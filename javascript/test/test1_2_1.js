'use strict';

tekenGetallenPiramide(5);


/** Geeft een string terug gegeven een lengte en een karakter */
function maakString(lengte, karakter = " ") {
    var lijn = "";
    for (var i = 1; i <= lengte; i++) {
        lijn += karakter;
    }
    return lijn;
}

/** Tekent een piramide op het scherm gegeven een hoogte */
function tekenGetallenPiramide(hoogte) {
    var spaties = hoogte;
    for (var i = 1; i <= hoogte; i++) {
        console.log(maakString(--spaties) + maakString(i * 2 - 1, i));
    }
}
