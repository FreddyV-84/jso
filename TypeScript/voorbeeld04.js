// type assertions (type cast)
// type assertions vertellen de compiler dat hij de programmeur
// moet vertrouwen omdat die zeker is over het type van een var
// het heeft geen effect op de uitvoering, maar laat 
// juistere/meer gedetailleerde codecompletion toe
var smurf = "grote smurf"; // any => no typechecking on smurf
smurf = 10;
//var groteSmurf = smurf.toUpperCase(); // ok voor compiler
//console.log(groteSmurf); // kan fout lopen tijdens uitvoering
// type assertion - manier 1
var safeGroteSmurf = smurf.toUpperCase();
console.log(safeGroteSmurf);
// type assertion - manier 2
var safeGroteSmurf2 = smurf.toUpperCase();
console.log(safeGroteSmurf2);
