'use strict';

var input = require('readline-sync');

var zin = input.question("Geef een zin in: "); // "zet een spatie na een komma indien nodig"

zin = zin.replace(/,\w/g,", ");

console.log(zin);




