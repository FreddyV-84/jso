/* class met accessors (getter en setter) */
var BankrekeningMetProp = /** @class */ (function () {
    function BankrekeningMetProp(nummer, houder, _saldo) {
        if (houder === void 0) { houder = ""; }
        if (_saldo === void 0) { _saldo = 0; }
        this.nummer = nummer;
        this.houder = houder;
        this._saldo = _saldo;
    }
    BankrekeningMetProp.prototype.toString = function () {
        return "het saldo van rekening " + this.nummer + " is " + this._saldo;
    };
    Object.defineProperty(BankrekeningMetProp.prototype, "saldo", {
        // getters en setters laten toe om
        // bij gebruik/oproep te doen alsof saldo een membervar is
        // get => opvragen v.d. prop mogelijk
        get: function () {
            return this._saldo;
        },
        // set => toekennen aan prop mogelijk
        // de parameter van de setter stelt de waarde voor die men probeert toe te kennen
        // (i.e. rechterkant van toekenning)
        // in een setter kun je controleren of de nieuwe waarde geldig is
        // alvorens ze toe te kennen aan de membervar
        set: function (nieuwSaldo) {
            if (nieuwSaldo > 0) {
                this._saldo = nieuwSaldo;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BankrekeningMetProp.prototype, "saldoInJeDromen", {
        get: function () {
            return this._saldo * 1000000;
        },
        enumerable: true,
        configurable: true
    });
    BankrekeningMetProp.prototype.stort = function (bedrag) {
        this._saldo += bedrag;
    };
    BankrekeningMetProp.prototype.haalAf = function (bedrag) {
        this._saldo -= bedrag;
    };
    return BankrekeningMetProp;
}());
var rekening = new BankrekeningMetProp("0001", "Joske", 500);
console.log("rekening van Joske na creatie:");
console.log(rekening.toString());
// opvragen via getter:
console.log("saldo van de rekening na creatie: %s", rekening.saldo);
// wijzigen via setter:
rekening.saldo = 1000; // nu wel ok
rekening.houder = "Joske Vermeulen";
console.log("rekening na wijziging van props:");
console.log(rekening);
rekening.stort(1000);
console.log("rekening na storting:");
console.log(rekening);
console.log("saldo van de rekening in je dromen: %s", rekening.saldoInJeDromen);
// rekening.saldoInJeDromen = 1000000;  // compileerfout; want er is geen setter gedefinieerd voor saldoInJeDromen
