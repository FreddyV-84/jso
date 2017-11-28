'use strict';

function Hond(naam, ras, gewicht) {
    this.naam = naam;
    this.ras = ras;
    this.gewicht = gewicht;
}
Hond.prototype.blaf = function () {
    if (this.gewicht < 10) {
        return "kefkefkefkefkef";
    } else {
        if (this.gewicht > 30) {
            return "WOEFWOEF";
        } else {
            return "waf";
        }
    }
};

function ShowHond(naam, ras, gewicht, aantalPrijzen) {
    //Hond.apply(this, arguments);          // calling base constructor
    Hond.call(this, naam, ras, gewicht);    // calling base constructor
    this.aantalPrijzen = aantalPrijzen;
};
ShowHond.prototype = new Hond();
ShowHond.prototype.paradeer = function (wijze) {
    switch (wijze) {
        case "trappelen":
            console.log(this.naam + " is bezig met trappelen");
            break;
        case "trippelen":
            console.log(this.naam + " is bezig met trippelen");
            break;
    }
};
ShowHond.prototype.winShow = function () {
    this.aantalPrijzen++;
};

var scotty = new ShowHond("Scotty", "Schotse terrier", 15, 0);
var beatrice = new ShowHond("Beatrice", "dwergkeeshond", 5, 3);
// showhonden kunnen alles wat gewone honden kunnen:
console.log(scotty.blaf());
// showhonden kunnen meer dan gewone honden:
scotty.paradeer("trappelen");
beatrice.paradeer("trippelen");

console.log(scotty.naam, " heeft al ", scotty.aantalPrijzen, " show(s) gewonnen.");
console.log(beatrice.naam, " heeft al ", beatrice.aantalPrijzen, " show(s) gewonnen.");
scotty.winShow();
console.log("Nu heeft ", scotty.naam, " ", scotty.aantalPrijzen, " show(s) gewonnen.");
console.log("Nu heeft ", beatrice.naam, " ", beatrice.aantalPrijzen, " show(s) gewonnen.");

/*  UITVOER:
waf
Scotty  is bezig met  trappelen
Beatrice  is bezig met  trippelen
Scotty  heeft al  0  show(s) gewonnen.
Beatrice  heeft al  3  show(s) gewonnen.
Nu heeft  Scotty   1  show(s) gewonnen.
Nu heeft  Beatrice   3  show(s) gewonnen.
*/