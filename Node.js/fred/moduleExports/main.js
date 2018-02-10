'use strict';

var myModule = require('./myModule.js');
var myModule2 = require('./myModule2.js');

console.log(myModule.myProp); // string
console.log(myModule.myProp2); // number
console.log(myModule.myProp3); // object literal

console.log("------------------------------------------------");

console.log(myModule2.name);
console.log(myModule2.age);
console.log(myModule2.gender);

console.log(myModule2.occupation);