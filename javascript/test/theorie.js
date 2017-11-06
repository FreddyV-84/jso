'use strict';
var x;
var a = 11;

console.log(a + 1 + "2");   // 122
console.log("2" + 1 + a);   // 2111

// x = 6;
// x = 6/0;
// x = Infinity;
x = "6";


if (!isNaN(parseInt(x))) // parseInt is niet nodig. De functie isNaN gaat zelf de parameter impliciet trachten te converteren naar een getal
    console.log("x: " + x + " ==> is een getal of is oneindig");