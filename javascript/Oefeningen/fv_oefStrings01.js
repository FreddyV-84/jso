'use strict';

var input = require('readline-sync');

var email = input.question("Geef je emailadres in: ");

while (email.indexOf("@", 0) == -1) {
    console.log("geen @ teken gevonden in %s", email);
    email = input.question("Geef je emailadres in: ");
}
console.log("@ teken gevonden in %s", email);