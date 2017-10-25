'use strict';

var toetsenbord = require('readline-sync');
var tekst = toetsenbord.question("Geef een tekst: ");
var teller = 0;
for (var i = 0; i < tekst.length; i++) {
    if (tekst.charAt(i) == 'i') teller++;
}
console.log("De letter \"i\" komt " + teller + " maal voor");
<<<<<<< HEAD
console.log('De letter "i" komt ' + teller + ' maal voor');
console.log("De letter \"i\" komt " + teller + " maal voor");
=======
console.log('De letter "i" komt ' + teller + " maal voor");
>>>>>>> b10e028d6cdb11cc1d7a1c6583fe4bded086da97
