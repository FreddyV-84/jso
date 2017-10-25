'use strict';

var key = require("readline-sync");

const kapitaal = 100;
var aandeelFortis = 3.75;
var gespendeerd = 0;
var aantalAandelen;

do {
    aantalAandelen = key.question("Hoeveel Fortis aandelen wenst u te kopen?");
    gespendeerd += aantalAandelen * aandeelFortis;

    console.log("U heeft al gekocht voor EUR " + gespendeerd + ".");
} while (gespendeerd < kapitaal);
console.log("Uw geld is op.");


