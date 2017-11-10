'use strict';

var input = require("readline-sync");

var getal, getallen = [], output = [];

for(var i=0; i<10; i++){
    getal = parseInt(input.question("Geef getal " + (i + 1) + "/10: "));
    getallen[i] = getal;
    output[i] = isEven(getal)? "even" : "oneven";
}

function isEven(getal){
    return getal % 2 == 0;
}

for(var i=0; i<=10;i++){
    console.log(getallen[i] + " is " + output[i]);
}