'use strict';

// strings zijn 'ummutable'
var s = "";

s = "Pandemonium"; // string literal
s.toUpperCase();
console.log(s);

s = s.toUpperCase();
console.log(s);

console.log("Het woord %s bestaat uit %d karakters.", s, s.length);

//literals verspreiden over meerdere lijnen
// manier 1: concateneren met + operator
var langeString = "dit is een lange " +
    "zin of zo lijkt " +
    "het toch.";

console.log(langeString);

// manier 2: backslach op einde van de lijn geeft aan dat stringliteral verder gaat op volgende lijn
langeString = "Jan, Piet, Joris \
 en Korneel, die hebben \
 baarden.";
console.log(langeString);

// escape characters
s = "zin1\nzin2";       // \n: new line
console.log(s);
s = "c:\temp";          // \t: tab
console.log(s);
s = "c:\\temp";         // \\: backslash
console.log(s);
s = "Zij zei:\"Hallo!\""; // \": double quote
console.log(s);
s = 'Zij zei:"Hallo!"';   // use single quotes to encapsulate double quotes
console.log(s);

// string object
var stringObject = new String(s);
console.log(stringObject);

// -------------------
// Strings vergelijken
// -------------------
if (s == stringObject) {                  // vergelijkt de inhoud van de strings
    console.log("s == stringObject");
}

if (s === stringObject) {                   // s is een primitief type, stringObject is een string object => verschillend type
    console.log("s === stringObject");
}

var w1 = "appel", w2 = "banaan";
if (w1 > w2) {                      // lexicographical comparison
    console.log("%s > %s", w1, w2);
}
else {
    console.log("%s < %s", w2, w1);
}

var result = w1.localeCompare(w2);
console.log(result);
if (result < 0) {
    console.log("result < 0: %s komt alfabetisch voor %s", w1, w2);
}
else if (result == 0) {
    console.log("result == 0: %s heeft dezelfde inhoud als %s", w1, w2);
}
else if (result > 0) {
    console.log("result > 0: %s komt alfabetisch voor %s", w2, w1);
}