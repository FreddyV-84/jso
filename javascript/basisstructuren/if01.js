'use strict';

var datum = new Date();
var uur = datum.getHours();

var minuten = datum.getMinutes();
if (uur < 12) {
	console.log("Goedemorgen");		// if-block
} else {
	console.log("Goedenamiddag");	// else-block
}

if(uur >= 9 && uur <=12)
	console.log("de werkvoormiddag is bezig");

if(uur < 9 || uur > 18)
	console.log("Buiten de werkuren");

console.log("Het is " + uur + ":" + minuten + " uur.");
console.log(datum);