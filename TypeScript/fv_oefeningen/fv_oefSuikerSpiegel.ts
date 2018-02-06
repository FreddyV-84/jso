class SuikerSpiegel {
    private _date: Date;
    private _bloedsuikerWaarden: number[] = [];

    constructor(private _dag: number, private _maand: number, private _jaar: number) {
        this._date = new Date(_jaar, _maand, _dag);
    }

    public get date(): Date {
        return this._date;
    }

    public get aantalHypos(): number {
        let teller: number = 0;
        this._bloedsuikerWaarden.forEach(function (item, index) {
            if (item < 60) {
                teller++;
            }
        })
        return teller;
    }

    public get aantalHypers(): number {
        let teller: number = 0;
        this._bloedsuikerWaarden.forEach(function (item, index) {
            if (item > 250) {
                teller++;
            }
        })
        return teller;
    }

    public isHypo(index: number): boolean {
        if (this._bloedsuikerWaarden[index] < 60) {
            return true;
        } else {
            return false;
        }
    }

    public isHyper(index: number): boolean {
        if (this._bloedsuikerWaarden[index] > 250) {
            return true;
        } else {
            return false;
        }
    }

    public noteer(metingNr: number, waarde: number) {
        this._bloedsuikerWaarden[metingNr] = waarde;
    }

    public printAll(): string {
        let resultaat = "metingnummer   waarde\n";
        resultaat += "------------   ------\n";
        this._bloedsuikerWaarden.forEach(function (item, index) {
            resultaat += ("00" + index).slice(-2) + "              " + item + "\n";
        })
        return resultaat;
    }
}

let suikerSpiegelPieter = new SuikerSpiegel(24, 1, 2018);

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