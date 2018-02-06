interface Italk {
    speak(): string;
    shout(): string;

}

interface IDrawable {
    draw(): boolean;
}


class Player implements Italk, IDrawable {
    private lastName: string;
    private privateName: string = this.firstName + " Ridiculus " + this.lastName;
    public playerClass: PlayerClass;
    fullName: string;
    inventory: Array<string>;
    constructor(public firstName: string, lastName: string, className: string) {
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        this.playerClass = new PlayerClass(className);
    }
    speak(): string {
        return "--speak():    My name is " + this.fullName;
    }
    shout(): string {
        return "--shout():    Chaaargeeee";
    }
    private privateRender(): void {
        console.log("           player " + this.privateName + "is rendered");
    };
    draw(): boolean {
        console.log("--------Start draw method");
        this.privateRender();
        console.log("--------End draw method");
        return true;
    }
}

class PlayerClass {
    constructor(private _className: string) { };
    get className(): string {
        return this._className;
    }
}

let player: Player = new Player("Rombus", "Darathan", "Wizard");

console.log(player.fullName);
console.log(player.playerClass.className);
console.log(player.speak());
console.log(player.shout());
player.draw();