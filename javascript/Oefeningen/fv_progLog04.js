'use strict';

var key = require('readline-sync');
var spaces;

var length = key.question("Hoeveel sterretjes wil je dat er getekend worden?: ");

for (var row = 1; row <= length; row++) {
    spaces = ""; // reset spaces
    for (var s = 1; s < row; s++) {
        spaces += " ";
    }
    console.log(spaces + "*");
}


