'use strict';

var input = require('readline-sync');
var worp;
var worpen = [0, 0, 0, 0, 0, 0];

for (var i = 1; i <= 6000; i++) {
    // gooi dobbelsteen
    // worp = parseInt((Math.random() * 6).toFixed(0));
    worp = getRandom(1, 6);
    //worp == 0 ? worp++ : null;

    worpen[worp - 1]++;
}

function getRandom(min=1, max=10) {
    // return Math.random(); // gives you an uniform distribution of numbers 
    // => not ideal for distribution on a long scale

    min--;
    return Math.floor(Math.exp(Math.random() * Math.log(max - min + 1))) + min;
}

console.log(getRandom(1, 6));

console.log("1 oog:     " + worpen[0]);
console.log("2 ogen:    " + worpen[1]);
console.log("3 ogen:    " + worpen[2]);
console.log("4 ogen:    " + worpen[3]);
console.log("5 ogen:    " + worpen[4]);
console.log("6 ogen:    " + worpen[5]);