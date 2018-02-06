/* type safe declaratie van variabelen */
var naam;
var getal;
var voorwaarde;
naam = "Joske";
naam = 100; // compileerfout
getal = 100;
getal = "Joske"; // compileerfout
getal = "123"; // compileerfout
voorwaarde = 1 < 10;
voorwaarde = "true"; // compileerfout
console.log(naam); // 100
console.log(getal); // 123
console.log(voorwaarde); // true
// generics
var stringArray = new Array();
stringArray[0] = "Jan";
stringArray[1] = 10; // compileerfout
console.log(stringArray);
// any
// => schakel typechecking uit ('opt-out' typechecking)
var onbekend;
onbekend = "Hallo";
onbekend = 10.2;
onbekend = Math.random() > 0.5;
console.log(onbekend);
// returntype van function aangeven
function willekeurigBericht() {
    var berichten = ["hallo", "nou moe", "en dan?", "boeit nie", "yeah"];
    var x = Math.floor(Math.random() * berichten.length);
    return berichten[x];
}
var bericht = willekeurigBericht();
console.log(bericht);
getal = willekeurigBericht(); // compileerfout
// function zonder return
// enkel undefined en null mogen toegekend worden aan een var van type void
function fieZonderReturn() {
    console.log("Dit is een functie zonder return statement");
}
var result = fieZonderReturn();
console.log(result); // undefined
