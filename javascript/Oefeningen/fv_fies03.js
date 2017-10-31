'use strict';

var input = require('readline-sync');
var a, b, c;

/** Bereken de discriminant van een tweedegraadsvergelijking gegeven a, b en c */
function calculateQuadraticPolynomial(a, b, c) {
    return b * b - 4 * a * c;
}

/** Bereken het aantal nulpunten van een tweedegraadsvergelijking gegeven a, b en c */
function calculateNumberOfZeroDivisors(a, b, c) {
    var discriminant = calculateQuadraticPolynomial(a, b, c);
    switch (true) {
        case discriminant < 0:
            return 0;
            break;
        case discriminant == 0:
            return 1;
            break;
        case discriminant > 0:
            return 2;
            break;
    }
}

a = input.question("Geef de waarde voor a in: ");
b = input.question("Geef de waarde voor b in: ");
c = input.question("Geef de waarde voor c in: ");

console.log("Discriminant: " + calculateQuadraticPolynomial(a, b, c));
console.log("Aantal nulpunten: " + calculateNumberOfZeroDivisors(a,b,c));