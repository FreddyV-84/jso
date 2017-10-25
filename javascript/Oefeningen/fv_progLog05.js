'use strict';

var key = require('readline-sync');
var spaces;
var bottom = "**";

var length = key.question("Hoeveel sterretjes wil je in de gelijkbendige rechthoekzijde?: ");

// DRAW Top Star
console.log("*");

for (var i = 1; i < length - 1; i++) {
    spaces = ""; // reset spaces
    for (var j = 1; j < i; j++) {
        spaces += " ";
    }
    // DRAW Next Row
    console.log("*" + spaces + "*");

    // Append star to bottom row
    bottom += "*";
}
// DRAW Bottom Stars
console.log(bottom);

/* *
**
* *
*  *
*****
 */