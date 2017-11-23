'use strict';

function Radio() {
    this.volume = 10;
    this.text = "LALALA";
}
Radio.prototype.getMuziek = function () {
    if (this.volume < 0) {
        this.text = "lalala";
    } else {
        this.text = "LALALA";
    }
    return this.text;
};

var toetsenbord = require('readline-sync');

var radio = new Radio();
radio.volume = 1;
var tekstLuid = radio.getMuziek();
console.log("Bij luid volume klinkt de radio als %s", tekstLuid);
radio.volume = -1;
console.log("Bij stil volume klinkt de radio als %s", radio.getMuziek());
var volume = parseInt(toetsenbord.question("Geef volume: "));
radio.volume = volume;
console.log("Bij dit volume klinkt de radio als %s", radio.getMuziek());

