'use strict';

var input = require("readline-sync");

function Fortis() {
    this.koersen = [];
};
Fortis.prototype.voegKoersToe = function (koers) {
    this.koersen.push(koers);
};
Fortis.prototype.geefMaxCoupon = function () {
    var som4Koersen = 0,
        result = 10;
    for (var k = 0; k < 4; k++) {
        som4Koersen += this.koersen[k];
    }

    result -= (som4Koersen / 4);

    return result.toFixed(2);
};


var fortis = new Fortis();
fortis.voegKoersToe(2);
fortis.voegKoersToe(1.75);
fortis.voegKoersToe(1.85);
fortis.voegKoersToe(2.01);
fortis.voegKoersToe(3);

console.log("De maximale waarde van een coupon is " + fortis.geefMaxCoupon());