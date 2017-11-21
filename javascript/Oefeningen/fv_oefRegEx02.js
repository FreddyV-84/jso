'use strict';

var input = require('readline-sync');

var zin = input.question("Geef een zin in: "); // "vervang meerdere spaties door één spatie"

zin = zin.replace(/  +/g," ");

console.log(zin);




