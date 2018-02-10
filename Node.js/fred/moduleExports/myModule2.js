/*  In NodeJs bestaat impliciet een leeg object  exports
    module.exports is initieel een andere naam voor dat object
    (exports en module.exports verwijzen initieel naar hetzelfde object)
    var exports = module.exports = {}
*/

'use strict';

exports.myProp = "myPropValue";
exports.myProp2 = 33;
exports.myProp3 = {
    name: "fred",
    age: 33
};

// overwrite
module.exports = {
    name: "fred",
    age: 33,
    gender: "male"
};

// add extra property
exports = module.exports;
exports.occupation = "ninja";