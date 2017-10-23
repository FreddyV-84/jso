// Oefening 1
'use strict';

var readlineSync = require('readline-sync');

var getal1 = readlineSync.question('Type het eerste getal in:');
var getal2 = readlineSync.question('Type het tweede getal in:');

console.log('Het product van %s en %s is', getal1, getal2, parseInt(getal1) * parseInt(getal2)); // no conversion needed
console.log('Het product van %s en %s is', getal1, getal2, getal1 * getal2);
console.log('Het product van', getal1, 'en', getal2, 'is', getal1 * getal2);
console.log("som: %d", getal1 + getal2); // string concat
console.log('som: %s', getal1+getal2);  // string concat
