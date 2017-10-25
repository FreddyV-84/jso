'use strict';
var RATE = 40.3399;


function BEFNaarEuro(bef){
    return bef / RATE;
}

function EuroNaarBef(euro){
    return euro * RATE;
}

console.log(EuroNaarBef(100));

console.log(BEFNaarEuro(100));