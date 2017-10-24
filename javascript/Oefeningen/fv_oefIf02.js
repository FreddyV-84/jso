// Oefening IF STATEMENT 2
'use strict';

var readlineSync = require('readline-sync');

var naam = readlineSync.question('Wat is je naam?');
var leeftijd = readlineSync.question("Wat is je leeftijd?");

if(leeftijd > 14)
    console.log("Sorry, deze pagina is enkel voor kinderen");
else
    console.log("Welkom", naam);
