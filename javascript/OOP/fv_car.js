'use strict';

// --------------------------------------------------------------------------------------
// SINGLETON: Object Literal
// --------------------------------------------------------------------------------------
// --> Only one instance of this object can ever exist
// Syntax: var obj = {};
var mercedes = {
    brand: "Mercedes",
    model: "CLA",
    color: "Brown",
}

// --------------------------------------------------------------------------------------
// SINGLETON: Constructor Function
// --------------------------------------------------------------------------------------
// --> Only one instance of this (constructor function) object can ever exist
// Syntax: var obj = new function () {};
var licensePlate = new function () {
    this.plates = [];
    var generateLicensePlate = function () {
        var plate = "";
        plate += String.fromCharCode((Math.floor(Math.random() * 25) + 65));
        plate += String.fromCharCode((Math.floor(Math.random() * 25) + 65));
        plate += String.fromCharCode((Math.floor(Math.random() * 25) + 65));
        plate += "-";
        plate += Math.floor(Math.random() * 9) + 1;
        plate += Math.floor(Math.random() * 9) + 1;
        plate += Math.floor(Math.random() * 9) + 1;
        return plate;
    };

    this.GetNewLicensePlate = function () {
        // check if plate already exists
        var newPlate;
        var found = false;
        do {
            newPlate = generateLicensePlate();
            found = false;
            for (var p = 0; p < this.plates.length; p++) {
                if (this.plates[p] === newPlate) {
                    found = true;
                }
            }
        } while (found)
        // add new plate to the collection
        this.plates.push(newPlate);
        return newPlate;
    }
    this.print = function () {
        console.log("Assigned License Plates:");
        for (var p = 0; p < this.plates.length; p++) {
            console.log("[ " + this.plates[p] + " ]");
        }
    }
}

// --------------------------------------------------------------------------------------
// 'CLASS' DEFINITION: Constructor Function
// --------------------------------------------------------------------------------------
// --> Class Definition Simulation --> there's no such thing as a class in JavaScript!!!
// --> Multiple Instances can be created
// Syntax:  function Class() {
//              this.property;
//              this.method1 = function(){};
//          };
//          Class.prototype.method2 = function() {...};
function Car() {
    this.brand = "x";
    this.model = "x";
    this.color = "x";
    this.cabrio = false;
    this.isDriving = false;
    this.licensePlate = null;
}
// Add methods via prototype property to avoid recreation 
// of the function every time a new object is created
// If you can calculate somthing --> create method instead of property
Car.prototype.init = function (brand, model, color, cabrio) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.cabrio = cabrio;
};
Car.prototype.drive = function () {
    this.isDriving = true;
};
Car.prototype.stop = function () {
    this.isDriving = false;
};
Car.prototype.print = function () {
    console.log("Brand: " + this.brand +
        "\nModel: " + this.model +
        "\nColor: " + this.color +
        "\nCabrio: " + (this.cabrio ? "Ja" : "Nee") +
        "\nLicense plate: " + this.licensePlate +
        "\nisDriving: " + (this.isDriving ? "Ja" : "Nee") +
        "\n");
};
Car.prototype.assignUniqueLicensePlate = function () {
    this.licensePlate = licensePlate.GetNewLicensePlate();
};


var fiatCar = new Car();
var teslaCar = new Car();

fiatCar.init("Fiat", "Fiesta", "Black", false);
teslaCar.init("Tesla", "S 75D", "Black", false);

teslaCar.assignUniqueLicensePlate();
teslaCar.assignUniqueLicensePlate();
teslaCar.drive();

fiatCar.print();
teslaCar.print();

licensePlate.print();

// var license = new licensePlate(); // TypeError: licensePlate is not a constructor