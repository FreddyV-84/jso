'use strict';

var input = require('readline-sync');

var rijksregisterNummer = input.question("Geef een geldig rijksregisternummer in: ");

function getGender(rijksregisterNummer) {
    var genderDigit = rijksregisterNummer.slice(6, 9);

    if (genderDigit % 2 == 0) {
        return "vrouw";
    }
    else {
        return "man";
    }
}

function getAgeByRRN(rijksregisternummer) {
    var controlegetal = parseInt(rijksregisterNummer.slice(9, 11));
    var getal = parseInt(rijksregisternummer.slice(0, 9));
    var year = parseInt(rijksregisterNummer.slice(0, 2));
    var month = parseInt(rijksregisterNummer.slice(2, 4));
    var day = parseInt(rijksregisterNummer.slice(4, 6));

    var today = new Date();
    var birthday = new Date();

    if (controlegetal == 97 - (getal % 97))
        birthday.setFullYear(1900 + year, month - 1, day);
    else
        birthday.setFullYear(2000 + year, month - 1, day);

    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

// 84080605731 --> moi
// 14122908237 --> kindje van Irina
// 88060244824 --> Chloé
console.log("Geslacht:  " + getGender(rijksregisterNummer));
console.log("Leeftijd:  " + getAgeByRRN(rijksregisterNummer));