// abstract class 'Figuur' ==> abstract: cannot make instances of 'Figuur', only of non-abstract subclasses
abstract class Figuur {
    constructor(public kleur: string) { } // explicit access modifier (public) before parameter 'kleur' in constructor creates property member 'kleur'
    public soort: string = null; // create public property member 'soort'
    abstract get omtrek(): number; // abstract getter member 'omtrek' must be implemented in subclasses
    abstract get oppervlakte(): number;
}

class Cirkel extends Figuur {
    constructor(kleur: string, public straal: number) {
        super(kleur);
        this.soort = "Cirkel";
    }

    public get omtrek(): number {
        return this.berekenOmtrek();
    }

    public get oppervlakte(): number {
        return this.berekenOppervlakte();
    }

    private berekenOmtrek(): number {
        return 2 * this.straal * Math.PI;
    }
    private berekenOppervlakte(): number {
        return this.straal * this.straal * Math.PI;
    }
}

class Rechthoek extends Figuur {
    constructor(kleur: string, public breedte: number, public hoogte: number) {
        super(kleur);
        this.soort = "Rechthoek";
    }

    public get omtrek(): number {
        return this.berekenOmtrek();
    }

    public get oppervlakte(): number {
        return this.berekenOppervlakte();
    }

    public berekenOmtrek(): number {
        return 2 * this.breedte + 2 * this.hoogte;
    }
    public berekenOppervlakte(): number {
        return this.breedte * this.hoogte;
    }
}

let figuren: Figuur[] = new Array<Figuur>();
figuren.push(new Cirkel("rood", 10));
figuren.push(new Rechthoek("blauw", 2, 3));
figuren.push(new Rechthoek("groen", 4, 5));
figuren.push(new Cirkel("geel", 1.5));
for (let figuur of figuren) {
    console.log("een %s met eigensch@ppen: ", figuur.soort);
    console.log("\tkleur: %s\tomtrek: %s\toppervlakte: %s", figuur.kleur,
        figuur.omtrek, figuur.oppervlakte);
}

// een cirkel met eigenschappen:
//         kleur: rood     omtrek: 62.83185307179586       oppervlakte: 314.1592653589793
// een rechthoek met eigenschappen:
//         kleur: blauw    omtrek: 10      oppervlakte: 6
// een rechthoek met eigenschappen:
//         kleur: groen    omtrek: 18      oppervlakte: 20
// een cirkel met eigenschappen:
//         kleur: geel     omtrek: 9.42477796076938        oppervlakte: 7.0685834705770345
