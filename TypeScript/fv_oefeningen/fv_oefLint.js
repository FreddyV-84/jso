/** Klasse om een lint met een bepaalde kleur en lengte te representeren
 * @param kleur kleur van het lint
 * @param _lengte initiele lengte van het lint
 * */
var Lint = /** @class */ (function () {
    function Lint(_kleur, _lengte) {
        this._kleur = _kleur;
        this._lengte = _lengte;
    }
    ;
    Object.defineProperty(Lint.prototype, "kleur", {
        // Property Members
        get: function () {
            return this._kleur;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lint.prototype, "lengte", {
        get: function () {
            return this._lengte;
        },
        enumerable: true,
        configurable: true
    });
    // Method Members
    Lint.prototype.verkort = function (lengte, aantalStukken) {
        if (aantalStukken === void 0) { aantalStukken = 1; }
        if (lengte > 0) {
            var totaleVerkorting = lengte * aantalStukken;
            if (totaleVerkorting < this._lengte) {
                this._lengte -= lengte * aantalStukken;
                console.log("Het lint is verkort met " + totaleVerkorting + " en meet nu " + this._lengte);
            }
            else {
                console.log("Het lint is niet lang genoeg om er" + (aantalStukken > 1 ? aantalStukken + " stukken" : " één stuk") + " van " + lengte + " af te snijden");
            }
        }
    };
    Lint.prototype.berekenAantalStukken = function (lengte) {
        if (lengte > 1) {
            return Math.floor(this._lengte / lengte);
        }
    };
    return Lint;
}());
var sierLintA = new Lint("rood", 12);
console.log("sierLintA is " + sierLintA.kleur + " van kleur en heeft een lengte van " + sierLintA.lengte);
console.log("bereken 4: " + sierLintA.berekenAantalStukken(4));
console.log("bereken 5: " + sierLintA.berekenAantalStukken(5));
// sierLintA.verkort(5);
// sierLintA.verkort(30);
// sierLintA.verkort(11);
