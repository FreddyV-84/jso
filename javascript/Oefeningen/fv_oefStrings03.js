'use strict';

var input = require('readline-sync');

var zin = input.question("Geef een zin in: "); // "Jan,die hier woont,is weg"

var index;
index = zin.indexOf(",", index);

while (index != -1) {
    zin = zin.slice(0, index + 1) + " " + zin.slice(index + 1);
    index += 2; // index opschuiven en de spatie erbij tellen
    index = zin.indexOf(",", index);
}

console.log(zin);




