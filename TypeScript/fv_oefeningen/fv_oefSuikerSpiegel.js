var SuikerSpiegel = /** @class */ (function () {
    function SuikerSpiegel(_dag, _maand, _jaar) {
        this._dag = _dag;
        this._maand = _maand;
        this._jaar = _jaar;
        this._bloedsuikerWaarden = [];
        this._date = new Date(_jaar, _maand, _dag);
    }
    Object.defineProperty(SuikerSpiegel.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuikerSpiegel.prototype, "aantalHypos", {
        get: function () {
            var teller = 0;
            this._bloedsuikerWaarden.forEach(function (item, index) {
                if (item < 60) {
                    teller++;
                }
            });
            return teller;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuikerSpiegel.prototype, "aantalHypers", {
        get: function () {
            var teller = 0;
            this._bloedsuikerWaarden.forEach(function (item, index) {
                if (item > 250) {
                    teller++;
                }
            });
            return teller;
        },
        enumerable: true,
        configurable: true
    });
    SuikerSpiegel.prototype.isHypo = function (index) {
        if (this._bloedsuikerWaarden[index] < 60) {
            return true;
        }
        else {
            return false;
        }
    };
    SuikerSpiegel.prototype.isHyper = function (index) {
        if (this._bloedsuikerWaarden[index] > 250) {
            return true;
        }
        else {
            return false;
        }
    };
    SuikerSpiegel.prototype.noteer = function (metingNr, waarde) {
        this._bloedsuikerWaarden[metingNr] = waarde;
    };
    SuikerSpiegel.prototype.printAll = function () {
        var resultaat = "metingnummer   waarde\n";
        resultaat += "------------   ------\n";
        this._bloedsuikerWaarden.forEach(function (item, index) {
            resultaat += ("00" + index).slice(-2) + "              " + item + "\n";
        });
        return resultaat;
    };
    return SuikerSpiegel;
}());
var suikerSpiegelPieter = new SuikerSpiegel(24, 1, 2018);
suikerSpiegelPieter.noteer(0, 70);
suikerSpiegelPieter.noteer(1, 57);
suikerSpiegelPieter.noteer(2, 80);
suikerSpiegelPieter.noteer(3, 60);
suikerSpiegelPieter.noteer(4, 276);
suikerSpiegelPieter.noteer(5, 240);
suikerSpiegelPieter.noteer(6, 156);
suikerSpiegelPieter.noteer(7, 98);
suikerSpiegelPieter.noteer(9, 69);
suikerSpiegelPieter.noteer(10, 58);
console.log("____________________________________");
console.log("\nsuikerspiegel van Pieter op " + suikerSpiegelPieter.date.toLocaleDateString("nl-BE") + "\n");
console.log("¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯");
console.log(suikerSpiegelPieter.printAll());
console.log("isHyper(4): " + suikerSpiegelPieter.isHyper(4));
console.log("isHyper(9): " + suikerSpiegelPieter.isHyper(9));
console.log("isHypo(3): " + suikerSpiegelPieter.isHypo(3));
console.log("isHypo(10): " + suikerSpiegelPieter.isHypo(10));
console.log("aantal hypers: " + suikerSpiegelPieter.aantalHypers);
console.log("aantal hypos: " + suikerSpiegelPieter.aantalHypos);
