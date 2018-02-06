// een niet-abstracte klasse die een interface implementeert moet 
// alle velden en methode uit de interface bezitten
var LaatsteWilsbeschikking = /** @class */ (function () {
    function LaatsteWilsbeschikking(id, voornaam, naam, crematie, plechtigheid, rustplaats) {
        this.id = id;
        this.voornaam = voornaam;
        this.naam = naam;
        this.crematie = crematie;
        this.plechtigheid = plechtigheid;
        this.rustplaats = rustplaats;
        this.registratieDatum = new Date();
    }
    LaatsteWilsbeschikking.prototype.registreer = function () {
        // output om didactische reden ;-)
        console.log("registratie van de laatstewilsbeschikking van %s %s", this.voornaam, this.naam);
        console.log("(id: %s, na de %s volgt een %s.  Laatste rustplaats: %s)", this.id, this.plechtigheid, this.verwerking, this.rustplaats);
    };
    Object.defineProperty(LaatsteWilsbeschikking.prototype, "verwerking", {
        get: function () {
            return this.crematie ? "crematie" : "begrafenis";
        },
        enumerable: true,
        configurable: true
    });
    return LaatsteWilsbeschikking;
}());
var ZonnepanelenInstallatie = /** @class */ (function () {
    function ZonnepanelenInstallatie(aantalPanelen, adres) {
        this.aantalPanelen = aantalPanelen;
        this.adres = adres;
        this.registratieDatum = new Date();
        ZonnepanelenInstallatie.teller++;
        this.id = "ZP" + ZonnepanelenInstallatie.teller;
    }
    ZonnepanelenInstallatie.prototype.registreer = function () {
        // output om didactische reden ;-)
        console.log("Wij hebben de aanvraag tot registratie van %s zonnepanelen op het adres %s goed ontvangen.", this.aantalPanelen, this.adres);
        console.log("Vermeld bij elke communicatie referentienr %s aub", this.id);
    };
    ZonnepanelenInstallatie.teller = 0;
    return ZonnepanelenInstallatie;
}());
var AdresWijziging = /** @class */ (function () {
    function AdresWijziging(rijksregisternr, oudAdres, nieuwAdres, dag, maand, jaar) {
        this.rijksregisternr = rijksregisternr;
        this.oudAdres = oudAdres;
        this.nieuwAdres = nieuwAdres;
        this.registratieDatum = new Date(jaar, maand - 1, dag);
        console.log(this.registratieDatum);
        this.id = Math.floor(Math.random() * 10000000).toString();
    }
    AdresWijziging.prototype.registreer = function () {
        // output om didactische reden ;-)
        console.log("Op %s is de persoon met rijksregisternr %s verhuisd van %s naar %s", this.registratieDatum.toLocaleDateString("nl-BE"), this.rijksregisternr, this.oudAdres, this.nieuwAdres);
    };
    return AdresWijziging;
}());
var registraties = new Array();
registraties.push(new LaatsteWilsbeschikking("1234567", "Pierre", "Dooie", false, "RK woord- en communiedienst", "familiegraf op het Schoonselhof"));
registraties.push(new ZonnepanelenInstallatie(9, "Zonneplein 123, Zonnewende"));
registraties.push(new AdresWijziging("89122839857", "Gemeenteplein 13", "Nieuwstraat 56A", 31, 1, 2018));
for (var _i = 0, registraties_1 = registraties; _i < registraties_1.length; _i++) {
    var registratie = registraties_1[_i];
    console.log("\n*** Bezig met verwerking van " + registratie.id + " ***");
    registratie.registreer();
}
