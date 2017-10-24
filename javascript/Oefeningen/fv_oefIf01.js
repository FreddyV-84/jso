// Oefening IF STATEMENT 1
'use strict';

var readlineSync = require('readline-sync');

var bedrag = readlineSync.question('Welk bedrag heb je op zak?');

if(bedrag > 5)
    console.log("Voor mij een ijsje met 3 bollen en slagroom aub");
else
    console.log("Ik zal wel ne platte water drinken!");
