/* super, abstract class */

abstract class Animal {
    constructor(public name: string) { }
    move(distanceInMeters: number = 0) {
        console.log('%s moved %dm.', this.name, distanceInMeters);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

// let sam: Animal = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);

// let tim: Animal = 
//    new Animal("Timmy the dangerous ('all animals are dangerous')");  // compileerfout;
// want je kunt geen instantie van een abstracte klasse maken

let animals: Animal[] = [];
animals.push(new Horse("Paardje"));
animals.push(new Horse("Hupje"));
animals.push(new Snake("Bijterke"));
animals.push(new Snake("Gladius"));
animals.push(new Snake("Slimmerus"));
animals.push(new Horse("Black Beauty"));

for (let i = 0; i < animals.length; i++) {
    animals[i].move();
}