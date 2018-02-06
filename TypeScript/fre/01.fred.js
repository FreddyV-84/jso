class Player {
    constructor(firstName, lastName, className) {
        this.firstName = firstName;
        this.privateName = this.firstName + " Ridiculus " + this.lastName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        this.playerClass = new PlayerClass(className);
    }
    speak() {
        return "--speak():    My name is " + this.fullName;
    }
    shout() {
        return "--shout():    Chaaargeeee";
    }
    privateRender() {
        console.log("           player " + this.privateName + "is rendered");
    }
    ;
    draw() {
        console.log("--------Start draw method");
        this.privateRender();
        console.log("--------End draw method");
        return true;
    }
}
class PlayerClass {
    constructor(_className) {
        this._className = _className;
    }
    ;
    get className() {
        return this._className;
    }
}
let player = new Player("Rombus", "Darathan", "Wizard");
console.log(player.fullName);
console.log(player.playerClass.className);
console.log(player.speak());
console.log(player.shout());
player.draw();
