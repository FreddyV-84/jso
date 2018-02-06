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
var Figuur = /** @class */ (function () {
    function Figuur(kleur) {
        this.kleur = kleur;
        this.soort = null;
    }
    return Figuur;
}());
var Cirkel = /** @class */ (function (_super) {
    __extends(Cirkel, _super);
    function Cirkel(kleur, straal) {
        var _this = _super.call(this, kleur) || this;
        _this.straal = straal;
        _this.soort = "Cirkel";
        return _this;
    }
    Object.defineProperty(Cirkel.prototype, "omtrek", {
        get: function () {
            return this.berekenOmtrek();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cirkel.prototype, "oppervlakte", {
        get: function () {
            return this.berekenOppervlakte();
        },
        enumerable: true,
        configurable: true
    });
    Cirkel.prototype.berekenOmtrek = function () {
        return 2 * this.straal * Math.PI;
    };
    Cirkel.prototype.berekenOppervlakte = function () {
        return this.straal * this.straal * Math.PI;
    };
    return Cirkel;
}(Figuur));
var Rechthoek = /** @class */ (function (_super) {
    __extends(Rechthoek, _super);
    function Rechthoek(kleur, breedte, hoogte) {
        var _this = _super.call(this, kleur) || this;
        _this.breedte = breedte;
        _this.hoogte = hoogte;
        _this.soort = "Rechthoek";
        return _this;
    }
    Object.defineProperty(Rechthoek.prototype, "omtrek", {
        get: function () {
            return this.berekenOmtrek();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rechthoek.prototype, "oppervlakte", {
        get: function () {
            return this.berekenOppervlakte();
        },
        enumerable: true,
        configurable: true
    });
    Rechthoek.prototype.berekenOmtrek = function () {
        return 2 * this.breedte + 2 * this.hoogte;
    };
    Rechthoek.prototype.berekenOppervlakte = function () {
        return this.breedte * this.hoogte;
    };
    return Rechthoek;
}(Figuur));
var figuren = new Array();
figuren.push(new Cirkel("rood", 10));
figuren.push(new Rechthoek("blauw", 2, 3));
figuren.push(new Rechthoek("groen", 4, 5));
figuren.push(new Cirkel("geel", 1.5));
for (var _i = 0, figuren_1 = figuren; _i < figuren_1.length; _i++) {
    var figuur = figuren_1[_i];
    console.log("een %s met eigenschappen: ", figuur.soort);
    console.log("\tkleur: %s\tomtrek: %s\toppervlakte: %s", figuur.kleur, figuur.omtrek, figuur.oppervlakte);
}
// een cirkel met eigenschappen:
//         kleur: rood     omtrek: 62.83185307179586       oppervlakte: 314.1592653589793
// een rechthoek met eigenschappen:
//         kleur: blauw    omtrek: 10      oppervlakte: 6
// een rechthoek met eigenschappen:
//         kleur: groen    omtrek: 18      oppervlakte: 20
// een cirkel met eigenschappen:
//         kleur: geel     omtrek: 9.42477796076938        oppervlakte: 7.0685834705770345
