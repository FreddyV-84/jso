'use strict';

var key = require("readline-sync");

const kapitaal = 100;
var aandeelFortis = 3.75;
var gespendeerd = 0;
var aantalAandelen;
var totaalAantalAandelen = 0;

do {
    aantalAandelen = parseInt(key.question("Hoeveel Fortis aandelen wenst u te kopen?"));
    totaalAantalAandelen += aantalAandelen;
    gespendeerd += aantalAandelen * aandeelFortis;

    console.log("U heeft al gekocht voor EUR " + gespendeerd + ".");
    console.log("De huidige waarde van uw portefeuille is EUR",totaalAantalAandelen * aandeelFortis);
    aandeelFortis -= 0.1;
} while (gespendeerd < kapitaal);
console.log("Uw geld is op.");


