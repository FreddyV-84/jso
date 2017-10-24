// Oefening SWITCH STATEMENT 1
'use strict';

var readlineSync = require('readline-sync');

var getal1 = readlineSync.question('Geef getal 1 in:');
var getal2 = readlineSync.question("Geef getal 2 in:");
var operator = readlineSync.question("Geef één van volgende operatoren in (+,-,*,/):");

switch (operator) {
    case '+':
        console.log(parseInt(getal1) + parseInt(getal2));
        break;
    case '-':
        console.log(getal1 - getal2);
        break;
    case '*':
        console.log(getal1 * getal2);
        break;
    case '/':
        if(getal2 == 0)
            console.log("Kan niet delen door 0");
        else
            console.log(getal1 / getal2);
        break;
}
