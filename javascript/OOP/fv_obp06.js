'use strict';

var input = require("readline-sync");

function Begroting() {
    this.inkomsten = [];
    this.uitgaven = [];
};
Begroting.prototype.voegUitgaveToe = function (waarde) {
    this.uitgaven.push(waarde);
};
Begroting.prototype.voegInkomstToe = function (waarde) {
    this.inkomsten.push(waarde);
};
Begroting.prototype.presenteerBegroting = function () {
    var somUitgaven = 0;
    var sominkomsten = 0;
    var result = "";
    result += "Uitgaven: ";
    for (var i = 0; i < this.uitgaven.length; i++) {
        somUitgaven += this.uitgaven[i];
        result += "\n-" + this.uitgaven[i];
    }

    result += "\nInkomsten: ";
    for (var i = 0; i < this.inkomsten.length; i++) {
        sominkomsten += this.inkomsten[i];
        result += "\n" + this.inkomsten[i];
    }

    if (somUitgaven > sominkomsten) {
        result += "\n" + (somUitgaven - sominkomsten);
    }

    result += "\nDe begroting is in evenwicht.";

    return result;
};


var begrotingBelgie = new Begroting();

begrotingBelgie.voegUitgaveToe(5000);
begrotingBelgie.voegUitgaveToe(6000);
begrotingBelgie.voegInkomstToe(4000);
begrotingBelgie.voegUitgaveToe(7000);
begrotingBelgie.voegInkomstToe(3000);

console.log(begrotingBelgie.presenteerBegroting());