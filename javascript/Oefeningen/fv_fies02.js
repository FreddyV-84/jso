'use strict';

var input = require('readline-sync');
var a, b;

/** Bereken de schuine zijde c van een rechthoekige driehoek volgens de stelling van Pythagoras gegeven a en b */
function berekenSchuineZijdeMetMathPOW(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

function berekenSchuineZijdeMetOperators(a, b) {
    return Math.sqrt(a * a + b * b);
}

var a = parseInt(input.question("Geef de lengte voor zijde a in: "));
var b = parseInt(input.question("Geef de lengte voor zijde b in: "));

console.time("berekenSchuineZijdeMetMathPOW");
console.log("Schuine Zijde c: " + berekenSchuineZijdeMetMathPOW(a, b));
console.timeEnd("berekenSchuineZijdeMetMathPOW");
console.log("");

console.time("berekenSchuineZijdeMetOperators");
console.log("Schuine Zijde c: " + berekenSchuineZijdeMetOperators(a, b));
console.timeEnd("berekenSchuineZijdeMetOperators");