// Oefening 1 bis
'use strict';

var readlineSync = require('readline-sync');

var loon = readlineSync.question('Type het loon in:');
var loonsverhoging = readlineSync.question('Type de loonsverhoging in:');

console.log('Het basisloon (%s) plus de verhoging (%s) is', loon, loonsverhoging, parseFloat(loon) + parseFloat(loonsverhoging));

