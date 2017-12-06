'use strict';

var fruit = ["appel", "banaan", "druif"];

fruit.forEach(function (e, i, a) {
    console.log("element: " + e + ", index: " + i + ", alias: " + a);
})