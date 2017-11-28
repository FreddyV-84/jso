'use strict';

// -------------------------------------------------------------------------------------
// Function Constructor: Person
// -------------------------------------------------------------------------------------
function Person(name){
    this.name = name
    this.sayHi = function(){
        return 'Hi, I am ' + this.name
    }
}

// -------------------------------------------------------------------------------------
// Function Constructor: Mammal
// -------------------------------------------------------------------------------------
function Mammal(name) {
    this.name = name;
}
Mammal.prototype.breathe = function (mode) {
    switch (mode) {
        case "idle":
            console.log(this.name + " is breathing relaxed");
            break;
        case "heavy":
            console.log(this.name + " is breathing heavy");
    }
};


// -------------------------------------------------------------------------------------
// Function Constructor: Cat : Mammal
// -------------------------------------------------------------------------------------
function Cat() {

}
Cat.prototype = new Mammal();
Cat.prototype.constructor = Cat;


// -------------------------------------------------------------------------------------
// Program Logic
// -------------------------------------------------------------------------------------
// let bob = new Person("Bob");
// console.log(bob.sayHi());

var mammal = new Mammal("Diego");
var cat = new Cat();
cat.name = "Garfield";

console.log(cat.__proto__);

// mammal.breathe("heavy");


// var bob = new Person('Bob')
// console.log("bob instanceof Person:     " + (bob instanceof Person));
// Person("Jeff");     // if you simply call this, it returns undefined and you pollute the global namespace with the variable name
// console.log(name);  // global variable window.name --> 'use strict' TypeError: Cannot set property 'name' of undefined

// var jeff = Person("Jeff");
// var jeffke = new Person("Jeffke");
// console.log(jeff);
// console.log(jeffke);
// console.log("jeff instanceof Person:     " + (jeff instanceof Person));


// console.log("Mammal Constructor: \n" + Mammal.prototype.constructor);
// console.log("Cat Constructor: \n" + Cat.prototype.constructor);
// console.log("prototype: " + (mammal.__proto__ === Mammal.prototype));
// console.log("prototype: " + (cat.__proto__ === Cat.prototype));
// console.log("instance: " + (cat instanceof Cat));

// console.log(cat.__proto__.__proto__.__proto__.constructor); // Cat > Mammal > Object
// console.log(Cat.prototype);

// console.log("breathe in cat: " + ('breathe' in cat));
// console.log(mammal.hasOwnProperty('breathe'));
// console.log(cat.hasOwnProperty('breathe'));

// var myArray = [4, 7, 2, 8, 4];
// console.log(Math.max.apply(Math, myArray));