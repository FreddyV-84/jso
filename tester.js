'use strict';

var x = 0 / 0;
// var x = "test";
// var x = 4 / 0;
// var x = 3;

console.log(x);

if (isFinite(x)) {
    console.log("isFinite: true");
} else {
    console.log("isFinite: false");
}

if (isNaN(x)) {
    console.log("isNaN: true");
}
else {
    console.log("isNaN: false");
}

// console.log((NaN == NaN ? "true" : "false"));