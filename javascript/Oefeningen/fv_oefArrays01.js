'use strict';

var input = require('readline-sync');

var naam = [];

for (var i = 0; i < 5; i++)
    naam[i] = input.question("naam?: ");

console.log(naam.toString());
naam.sort();
console.log(naam.toString());

