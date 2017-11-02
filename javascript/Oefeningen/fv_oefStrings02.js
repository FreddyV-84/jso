'use strict';

var input = require('readline-sync');

var woord = input.question("Geef een woord van minstens 14 karakters lang in: ");

while (woord.length < 14) {
    console.log(woord + " heeft maar een lengte van " + woord.length);
    woord = input.question("Geef een woord van minstens 14 karakters lang in: ");
}
console.log(woord + " heeft een lengte van " + woord.length);