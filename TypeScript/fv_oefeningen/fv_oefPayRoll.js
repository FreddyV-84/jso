var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Werknemer = /** @class */ (function () {
    function Werknemer(_voornaam, _familienaam, _ssn) {
        this._voornaam = _voornaam;
        this._familienaam = _familienaam;
        this._ssn = _ssn;
    }
    ;
    Object.defineProperty(Werknemer.prototype, "voornaam", {
        get: function () {
            return this._voornaam;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Werknemer.prototype, "familienaam", {
        get: function () {
            return this._familienaam;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Werknemer.prototype, "ssn", {
        get: function () {
            return this._ssn;
        },
        enumerable: true,
        configurable: true
    });
    return Werknemer;
}());
var vasteWerknemer = /** @class */ (function (_super) {
    __extends(vasteWerknemer, _super);
    function vasteWerknemer(voornaam, familienaam, ssn, weekSalaris) {
        var _this = _super.call(this, voornaam, familienaam, ssn) || this;
        _this._weekSalaris = null;
        return _this;
    }
    Object.defineProperty(vasteWerknemer.prototype, "volledigeNaam", {
        get: function () {
            return this.familienaam + " " + this.voornaam;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(vasteWerknemer.prototype, "weekSalaris", {
        get: function () {
            try {
                if (this._weekSalaris === null) {
                    throw "weekSalaris is niet ingesteld, gebruik hiervoor stelHuidigWeekSalarisIn";
                }
                return this._weekSalaris;
            }
            catch (e) {
                console.log(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    vasteWerknemer.prototype.stelHuidigWeekSalarisIn = function (weekSalaris) {
        if (weekSalaris > 0) {
            this._weekSalaris = weekSalaris;
        }
    };
    return vasteWerknemer;
}(Werknemer));
var variabeleWerknemer = /** @class */ (function (_super) {
    __extends(variabeleWerknemer, _super);
    function variabeleWerknemer(voornaam, familienaam, ssn, _loonPerUur, huidigAantalGepresteerdeUrenDezeWeek) {
        var _this = _super.call(this, voornaam, familienaam, ssn) || this;
        _this._loonPerUur = _loonPerUur;
        _this._huidigAantalGepresteerdeUrenDezeWeek = null;
        if (huidigAantalGepresteerdeUrenDezeWeek !== undefined)
            _this._huidigAantalGepresteerdeUrenDezeWeek = huidigAantalGepresteerdeUrenDezeWeek;
        return _this;
    }
    Object.defineProperty(variabeleWerknemer.prototype, "volledigeNaam", {
        get: function () {
            return this.familienaam + " " + this.voornaam;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(variabeleWerknemer.prototype, "weekSalaris", {
        get: function () {
            try {
                if (this._huidigAantalGepresteerdeUrenDezeWeek === null) {
                    throw "huidigAantalGepresteerdeUrenDezeWeek niet ingesteld, gebruik hiervoor de methode stelHuidigAantalGepresteerdeUrenDezeWeek";
                }
                if (this._huidigAantalGepresteerdeUrenDezeWeek > 40) {
                    return this._loonPerUur * 40 + ((this._huidigAantalGepresteerdeUrenDezeWeek - 40) * (this._loonPerUur * 1.5));
                }
                else {
                    return this._huidigAantalGepresteerdeUrenDezeWeek * this._loonPerUur;
                }
            }
            catch (e) {
                console.log("erreeeur");
                console.log(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    variabeleWerknemer.prototype.stelHuidigAantalGepresteerdeUrenDezeWeek = function (aantal) {
        if (aantal >= 0)
            this._huidigAantalGepresteerdeUrenDezeWeek = aantal;
    };
    return variabeleWerknemer;
}(Werknemer));
var vasteVerkoper = /** @class */ (function (_super) {
    __extends(vasteVerkoper, _super);
    function vasteVerkoper(voornaam, familienaam, ssn, huidigVerkoopsPercentage, huidigVerkoopCijfer) {
        var _this = _super.call(this, voornaam, familienaam, ssn) || this;
        _this._huidigVerkoopsPercentage = null;
        _this._huidigVerkoopCijfer = null;
        if (huidigVerkoopsPercentage !== undefined) {
            _this._huidigVerkoopsPercentage = huidigVerkoopsPercentage;
        }
        if (huidigVerkoopCijfer !== undefined) {
            _this._huidigVerkoopCijfer = huidigVerkoopCijfer;
        }
        return _this;
    }
    Object.defineProperty(vasteVerkoper.prototype, "volledigeNaam", {
        get: function () {
            return this.familienaam + " " + this.voornaam;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(vasteVerkoper.prototype, "weekSalaris", {
        get: function () {
            try {
                if (this._huidigVerkoopCijfer === null) {
                    throw "Geen huidig verkoopcijfer ingesteld, gebruik hiervoor de methode stelHuidigVerkoopCijferIn";
                }
                if (this._huidigVerkoopsPercentage === null) {
                    throw "Geen huidig verkoopspercentage ingesteld, gebruik hiervoor de methode stelHuidigVerkoopsPercentageIn";
                }
                return ((this._huidigVerkoopCijfer * this._huidigVerkoopsPercentage) / 100);
            }
            catch (e) {
                console.error(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    vasteVerkoper.prototype.stelHuidigVerkoopsPercentageIn = function (percentage) {
        this._huidigVerkoopsPercentage = percentage;
    };
    vasteVerkoper.prototype.stelHuidigVerkoopCijferIn = function (bedrag) {
        if (bedrag > 0)
            this._huidigVerkoopCijfer = bedrag;
    };
    return vasteVerkoper;
}(Werknemer));
var commissieVerkoper = /** @class */ (function (_super) {
    __extends(commissieVerkoper, _super);
    function commissieVerkoper(voornaam, familienaam, ssn, basisWeekSalaris, huidigVerkoopsPercentage, huidigVerkoopCijfer) {
        var _this = _super.call(this, voornaam, familienaam, ssn) || this;
        _this._huidigVerkoopsPercentage = null;
        _this._huidigVerkoopCijfer = null;
        _this._basisWeekSalaris = null;
        _this._basisWeekSalaris = basisWeekSalaris;
        if (huidigVerkoopsPercentage !== undefined) {
            _this._huidigVerkoopsPercentage = huidigVerkoopsPercentage;
        }
        if (huidigVerkoopCijfer !== undefined) {
            _this._huidigVerkoopCijfer = huidigVerkoopCijfer;
        }
        return _this;
    }
    Object.defineProperty(commissieVerkoper.prototype, "volledigeNaam", {
        get: function () {
            return this.familienaam + " " + this.voornaam;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(commissieVerkoper.prototype, "weekSalaris", {
        get: function () {
            try {
                if (this._huidigVerkoopCijfer === null) {
                    throw "Geen huidig verkoopcijfer ingesteld, gebruik hiervoor de methode stelHuidigVerkoopCijferIn";
                }
                if (this._huidigVerkoopsPercentage === null) {
                    throw "Geen huidig verkoopspercentage ingesteld, gebruik hiervoor de methode stelHuidigVerkoopsPercentageIn";
                }
                return this._basisWeekSalaris + ((this._huidigVerkoopCijfer * this._huidigVerkoopsPercentage) / 100);
            }
            catch (e) {
                console.error(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(commissieVerkoper.prototype, "basisWeekSalaris", {
        get: function () {
            return this._basisWeekSalaris;
        },
        set: function (bedrag) {
            if (bedrag > 0)
                this._basisWeekSalaris = bedrag;
        },
        enumerable: true,
        configurable: true
    });
    commissieVerkoper.prototype.stelHuidigVerkoopsPercentageIn = function (percentage) {
        this._huidigVerkoopsPercentage = percentage;
    };
    commissieVerkoper.prototype.stelHuidigVerkoopCijferIn = function (bedrag) {
        if (bedrag > 0)
            this._huidigVerkoopCijfer = bedrag;
    };
    return commissieVerkoper;
}(Werknemer));
var werknemers = new Array(10);
var chloe = new vasteWerknemer("Chloé", "Claes", "88060244824");
var fre = new variabeleWerknemer("Frederik", "Verheecke", "84080605731", 10);
var belkin = new vasteVerkoper("Belkin", "Fahri", "89042394354");
var joris = new commissieVerkoper("Joris", "Heyens", "87092371442", 1300);
chloe.stelHuidigWeekSalarisIn(300);
fre.stelHuidigAantalGepresteerdeUrenDezeWeek(46);
belkin.stelHuidigVerkoopCijferIn(1400);
belkin.stelHuidigVerkoopsPercentageIn(80);
joris.stelHuidigVerkoopCijferIn(500);
joris.stelHuidigVerkoopsPercentageIn(30);
werknemers.push(chloe);
werknemers.push(fre);
werknemers.push(belkin);
werknemers.push(joris);
console.log("-----------------------------------------------------");
for (var _i = 0, werknemers_1 = werknemers; _i < werknemers_1.length; _i++) {
    var werknemer = werknemers_1[_i];
    if (werknemer !== undefined) {
        console.log(padding_right(werknemer.weekSalaris.toString(), " ", 20) + "| " + padding_right(werknemer.volledigeNaam, " ", 30) + "|");
    }
}
console.log("-----------------------------------------------------");
for (var _a = 0, werknemers_2 = werknemers; _a < werknemers_2.length; _a++) {
    var werknemer = werknemers_2[_a];
    if (werknemer instanceof commissieVerkoper) {
        var W = werknemer;
        W.basisWeekSalaris += W.basisWeekSalaris * 0.1;
    }
}
console.log("commissieVerkoper krijgt een verhoging van 10% op zijn basisSalaris");
console.log("-----------------------------------------------------");
for (var _b = 0, werknemers_3 = werknemers; _b < werknemers_3.length; _b++) {
    var werknemer = werknemers_3[_b];
    if (werknemer !== undefined) {
        console.log(padding_right(werknemer.weekSalaris.toString(), " ", 20) + "| " + padding_right(werknemer.volledigeNaam, " ", 30) + "|");
    }
}
console.log("-----------------------------------------------------");
// left padding s with c to a total of n chars
function padding_left(s, c, n) {
    if (!s || !c || s.length >= n) {
        return s;
    }
    var max = (n - s.length) / c.length;
    for (var i = 0; i < max; i++) {
        s = c + s;
    }
    return s;
}
// right padding s with c to a total of n chars
function padding_right(s, c, n) {
    if (!s || !c || s.length >= n) {
        return s;
    }
    var max = (n - s.length) / c.length;
    for (var i = 0; i < max; i++) {
        s += c;
    }
    return s;
}
