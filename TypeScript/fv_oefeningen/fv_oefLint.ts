
/** Klasse om een lint met een bepaalde kleur en lengte te representeren
 * @param kleur kleur van het lint
 * @param _lengte initiele lengte van het lint
 * */
class Lint {
    constructor(private _kleur: string, private _lengte: number) { };
    // Property Members
    get kleur(): string {
        return this._kleur;
    }

    get lengte(): number {
        return this._lengte;
    }

    // Method Members
    verkort(lengte: number, aantalStukken: number = 1): void {
        if (lengte > 0) {
            let totaleVerkorting = lengte * aantalStukken;
            if (totaleVerkorting < this._lengte) {
                this._lengte -= lengte * aantalStukken;
                console.log("Het lint is verkort met " + totaleVerkorting + " en meet nu " + this._lengte);
            }
            else {
                console.log("Het lint is niet lang genoeg om er" + (aantalStukken > 1 ? aantalStukken + " stukken" : " één stuk") + " van " + lengte + " af te snijden");
            }
        }
    }
    berekenAantalStukken(lengte: number): number {
        if (lengte > 1) {
            return Math.floor(this._lengte / lengte);
        }
    }
}

let sierLintA = new Lint("rood", 12);
console.log("sierLintA is " + sierLintA.kleur + " van kleur en heeft een lengte van " + sierLintA.lengte);
console.log("bereken 4: " + sierLintA.berekenAantalStukken(4));
console.log("bereken 5: " + sierLintA.berekenAantalStukken(5));
// sierLintA.verkort(5);
// sierLintA.verkort(30);
// sierLintA.verkort(11);