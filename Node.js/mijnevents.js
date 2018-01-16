'use strict';

var events = require('events');
var eventsEmitter = new events.EventEmitter();

// event afvuren (= signaleren dat iets gebeurd is)
eventsEmitter.emit('brand');
// vermits er nog geen eventhandler aan het event 'brand' gekoppeld is, gebeurt er niets

// event afhandelen (= aangeven wat moet gebeuren als vanaf hier een bepaald event
// afgevuurd wordt)
eventsEmitter.on('brand', function(){
    console.log("bel de brandweer");
});

for(var i=1; i<6; i++){
    eventsEmitter.emit('brand');
}

eventsEmitter.on('brand', function(){
    console.log("sluit de ramen");
});
console.log("laatste emit");
eventsEmitter.emit('brand');

console.log("lang leve de muizen");
eventsEmitter.emit('muis');  // geen output; want er is geen eventhandler gekoppeld aan muis
eventsEmitter.on('muis', watAlsErEenMuisIs);
eventsEmitter.emit('muis');

function watAlsErEenMuisIs(){
    console.log("Spring zsm op de tafel!");
}