'use strict';

var toetsenbord = require('readline-sync');

var aantalVakken = 2, // Rijen
  vak;
var puntenTabel = new Array(aantalVakken);

function leesTweeDimTabel(tabel, hoofding) {
  var rij, kol;
  for (rij = 0; rij < tabel.length; rij++) {
    for (kol = 0; kol < tabel[rij].length; kol++) {
      tabel[rij][kol] = parseInt(toetsenbord.question(hoofding + (rij + 1) + "(" + (kol + 1) + ") "));
    }
  }
}

function toonTweeDimTabel(tabel, hoofding) {
  var rij, kol, result = hoofding;
  for (rij = 0; rij < tabel.length; rij++) {
    result += "\n";
    for (kol = 0; kol < tabel[rij].length; kol++) {
      result += "\t" + tabel[rij][kol];
    }
  }
  console.log(result);
}

function maxAnn(tabel) {
  var max = tabel[0][0];
  for (var rij = 0; rij < tabel.length; rij++) {
    max = Math.max(...tabel[rij], max);
  }
  return max;
}

function maximum(tabel) {
  var max = 0;
  for (var rij = 0; rij < tabel.length; rij++) {
    for (var kol = 0; kol < tabel[rij].length; kol++) {
      if (tabel[rij][kol] > max)
        max = tabel[rij][kol];
    }
  }
  return max;
}

function maximumMathMax(tabel) {
  var max = [];
  for (var rij = 0; rij < tabel.length; rij++) {
    max[rij] = Math.max(...tabel[rij]);
  }
  return Math.max(...max);
}

function maximumMathMaxApply(tabel) {
  var conArr = [];
  for (var arr = 0; arr < tabel.length; arr++) {
    conArr = conArr.concat(tabel[arr]);
  }
  return Math.max.apply(Math, conArr);
}

/****** HOOFDPROGRAMMA ******/
// allocatie van kolommen van tabel
for (vak = 0; vak < aantalVakken; vak++) {
  puntenTabel[vak] = new Array(3); // Kolommen
}

leesTweeDimTabel(puntenTabel, "Geef punten voor vak ");
toonTweeDimTabel(puntenTabel, "Behaalde punten");

/* oefening: */
console.time("2for");
console.log("\nHet maximum = %d", maximum(puntenTabel));
console.timeEnd("2for");

console.time("math.max");
console.log("\nHet maximum = %d", maximumMathMax(puntenTabel));
console.timeEnd("math.max");

console.time("math.apply");
console.log("\nHet maximum = %d", maximumMathMaxApply(puntenTabel));
console.timeEnd("math.apply");

console.time("Ann");
console.log("\nHet maximum = %d", maxAnn(puntenTabel));
console.timeEnd("Ann");