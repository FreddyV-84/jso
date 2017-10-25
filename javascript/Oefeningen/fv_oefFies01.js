'use strict';

var input = require('readline-sync');
var result;
var getal1, getal2, getal3;
var smurf = "smurf";

function max(x, y) {
    var r;
    var smurf = "smurfInFunctie";
    if (x > y)
        r = x;
    else
        r = y;

    console.log(smurf);
    return r;
}

var k = 500;
function argumentsTest(k)
{
    console.log("local k:              " + k);
    k++;
    console.log("local k incremented:  " + k);
}

console.log("global k:          " + k);
argumentsTest(k);
console.log("global k:          " + k);

/* getal1 = parseInt(input.question("Geef getal1 op: "));
getal2 = parseInt(input.question("Geef getal2 op: "));
getal3 = parseInt(input.question("Geef getal3 op: "));

result = max(getal1, getal2);
result = max(result, getal3);

console.log(result);
console.log(smurf); */


