abstract class Werknemer {
    constructor(private _voornaam: string, private _familienaam: string, private _ssn) { };
    abstract get weekSalaris(): number;
    abstract get volledigeNaam(): string;
    get voornaam() {
        return this._voornaam;
    }
    get familienaam() {
        return this._familienaam;
    }
    get ssn() {
        return this._ssn;
    }
}

class vasteWerknemer extends Werknemer {
    private _weekSalaris = null;
    constructor(voornaam: string, familienaam: string, ssn: string, weekSalaris?: number) { super(voornaam, familienaam, ssn); }
    get volledigeNaam(): string {
        return this.familienaam + " " + this.voornaam;
    }
    get weekSalaris(): number {
        try {
            if (this._weekSalaris === null) {
                throw "weekSalaris is niet ingesteld, gebruik hiervoor stelHuidigWeekSalarisIn";
            }
            return this._weekSalaris;
        } catch (e) {
            console.log(e);
        }
    }

    stelHuidigWeekSalarisIn(weekSalaris: number) {
        if (weekSalaris > 0) {
            this._weekSalaris = weekSalaris;
        }
    }
}

class variabeleWerknemer extends Werknemer {
    private _huidigAantalGepresteerdeUrenDezeWeek = null;

    constructor(voornaam: string, familienaam: string, ssn: string, private _loonPerUur: number, huidigAantalGepresteerdeUrenDezeWeek?: number) {
        super(voornaam, familienaam, ssn);
        if (huidigAantalGepresteerdeUrenDezeWeek !== undefined)
            this._huidigAantalGepresteerdeUrenDezeWeek = huidigAantalGepresteerdeUrenDezeWeek;
    }
    get volledigeNaam(): string {
        return this.familienaam + " " + this.voornaam;
    }
    get weekSalaris(): number {
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
    }

    stelHuidigAantalGepresteerdeUrenDezeWeek(aantal: number) {
        if (aantal >= 0)
            this._huidigAantalGepresteerdeUrenDezeWeek = aantal;
    }
}

class vasteVerkoper extends Werknemer {
    private _huidigVerkoopsPercentage: number = null;
    private _huidigVerkoopCijfer: number = null;

    constructor(voornaam: string, familienaam: string, ssn: string, huidigVerkoopsPercentage?: number, huidigVerkoopCijfer?: number) {
        super(voornaam, familienaam, ssn);
        if (huidigVerkoopsPercentage !== undefined) {
            this._huidigVerkoopsPercentage = huidigVerkoopsPercentage;
        }
        if (huidigVerkoopCijfer !== undefined) {
            this._huidigVerkoopCijfer = huidigVerkoopCijfer;
        }
    }

    get volledigeNaam(): string {
        return this.familienaam + " " + this.voornaam;
    }
    get weekSalaris(): number {
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
    }

    stelHuidigVerkoopsPercentageIn(percentage: number) {
        this._huidigVerkoopsPercentage = percentage;
    }
    stelHuidigVerkoopCijferIn(bedrag: number) {
        if (bedrag > 0)
            this._huidigVerkoopCijfer = bedrag;
    }
}

class commissieVerkoper extends Werknemer {
    private _huidigVerkoopsPercentage: number = null;
    private _huidigVerkoopCijfer: number = null;
    private _basisWeekSalaris = null;

    constructor(voornaam: string, familienaam: string, ssn: string, basisWeekSalaris: number, huidigVerkoopsPercentage?: number, huidigVerkoopCijfer?: number) {
        super(voornaam, familienaam, ssn);
        this._basisWeekSalaris = basisWeekSalaris;
        if (huidigVerkoopsPercentage !== undefined) {
            this._huidigVerkoopsPercentage = huidigVerkoopsPercentage;
        }
        if (huidigVerkoopCijfer !== undefined) {
            this._huidigVerkoopCijfer = huidigVerkoopCijfer;
        }
    }

    get volledigeNaam(): string {
        return this.familienaam + " " + this.voornaam;
    }
    get weekSalaris(): number {
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
    }

    get basisWeekSalaris() {
        return this._basisWeekSalaris;
    }
    set basisWeekSalaris(bedrag: number) {
        if (bedrag > 0)
            this._basisWeekSalaris = bedrag;
    }

    stelHuidigVerkoopsPercentageIn(percentage: number) {
        this._huidigVerkoopsPercentage = percentage;
    }
    stelHuidigVerkoopCijferIn(bedrag: number) {
        if (bedrag > 0)
            this._huidigVerkoopCijfer = bedrag;
    }
}


let werknemers: Array<Werknemer> = new Array<Werknemer>(10);

let chloe = new vasteWerknemer("Chloé", "Claes", "88060244824");
let fre = new variabeleWerknemer("Frederik", "Verheecke", "84080605731", 10);
let belkin = new vasteVerkoper("Belkin", "Fahri", "89042394354");
let joris = new commissieVerkoper("Joris", "Heyens", "87092371442", 1300);


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
for (let werknemer of werknemers) {
    if (werknemer !== undefined) {
        console.log(padding_right(werknemer.weekSalaris.toString(), " ", 20) + "| " + padding_right(werknemer.volledigeNaam, " ", 30) + "|");
    }
}
console.log("-----------------------------------------------------");

for (let werknemer of werknemers) {
    if (werknemer instanceof commissieVerkoper) {
        let W: commissieVerkoper = werknemer as commissieVerkoper;
        W.basisWeekSalaris += W.basisWeekSalaris * 0.1;
    }
}
console.log("commissieVerkoper krijgt een verhoging van 10% op zijn basisSalaris");
console.log("-----------------------------------------------------");
for (let werknemer of werknemers) {
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