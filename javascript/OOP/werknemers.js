'use strict';

function Person(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
};
Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};
Person.prototype.toString = function () {
    return this.firstName + " " + this.lastName;
};

function Employee(lastName, firstName, salary) {
    Person.apply(this, arguments);
    this.salary = salary;
};
Employee.prototype = new Person();
Employee.prototype.toString = function () {
    return this.firstName + " " + this.lastName + ", heeft een loon van " + this.salary;
};

var persoon1 = new Person("Kapot", "Isabel");
console.log(persoon1.toString());
console.log(persoon1.getFullName());

var werknemer1 = new Employee("Stok", "Pol", 1234);
console.log(werknemer1.toString());
console.log(werknemer1.getFullName());

var werknemer2 = new Employee("Selie", "Peter", 2345);
werknemer2.getFullName = function () {
    return "met de groeten van " + this.firstName + " " + this.lastName;
};

console.log(werknemer2.toString());
console.log(werknemer2.getFullName());
