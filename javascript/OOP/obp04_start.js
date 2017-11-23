'use strict';

function Rekening(beginJaar, eindJaar, rente, startBedrag) {
    this.beginJaar = beginJaar;
    this.eindJaar = eindJaar;
    this.startBedrag = startBedrag;
    this.rente = rente;
}
Rekening.prototype.eindbedrag = function () {
    var eindBedrag = this.startBedrag;
    for (var y = this.beginJaar; y < this.eindJaar; y++) {
        eindBedrag += this.rente * eindBedrag / 100;
    }
    return eindBedrag.toFixed(2);
};

var rekening = new Rekening(2000, 2010, 4, 1000);
console.log("%d EUR belegd tegen %d%% in %d geeft in het jaar %d als eindbedrag %d",
    rekening.startBedrag, rekening.rente, rekening.beginJaar, rekening.eindJaar, rekening.eindbedrag());