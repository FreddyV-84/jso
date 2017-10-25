'use strict';

var toetsenbord = require('readline-sync');
var getal = toetsenbord.question('Tik een getal in: ');

// wat doet onderstaand script?
// Faculteit berekening van getal (in de wiskunde wordt dit aangeduid met een uitroepteken)
var resultaat = 1;
for (var i = 2; i <= getal; i++) {
    resultaat *= i;
}

console.log(resultaat);

// function declaration/definition
function faculteit(x) {
    var result = 1;
    for(var j = 2; j <= x; j++)
    {
        result *= j;
    }

    return result;
}

function recursiveFaculty(number){
    
    }

// function call
resultaat = faculteit(getal);
console.log(resultaat);

console.log(faculteit(3));