'use strict';

var input = require("readline-sync");

function Werknemer(naam) {
    this.naam = naam;
    this.werkUren = [0, 0, 0, 0, 0];
}
Werknemer.prototype.aantalOveruren = function () {
    var totaal = 0;
    for (var i = 0; i < this.werkUren.length; i++) {
        totaal += this.werkUren[i];
    }

    if (totaal < 37) {
        return "Minder dan 37 uur gewerkt";
    } else {
        return (totaal - 37).toFixed(2);
    }
};
Werknemer.prototype.wijzigWerkuren = function (dagNr, uren) {
    this.werkUren[dagNr] = uren;
};

var Jef = new Werknemer("Jef");
Jef.wijzigWerkuren(0, 7.4);
Jef.wijzigWerkuren(1, 7.4);
Jef.wijzigWerkuren(2, 7.4);
Jef.wijzigWerkuren(3, 7.4);
Jef.wijzigWerkuren(4, 7.4);

console.log(Jef.aantalOveruren());