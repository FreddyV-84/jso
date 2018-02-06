/* ter kennismaking: interface, class */
function greeter(persoon) {
    return "Hello, " + persoon.voornaam + " " + persoon.naam;
}
var persoon = { voornaam: "Joske", naam: "Vermeulen" };
console.log(greeter(persoon));
var Student = /** @class */ (function () {
    /* public voor param in ctor zorgt ervoor dat autom. property met die naam gemaakt wordt */
    function Student(voornaam, middelNaam, naam) {
        this.voornaam = voornaam;
        this.middelNaam = middelNaam;
        this.naam = naam;
        this.volledigeNaam = voornaam + " " + middelNaam + " " + naam;
    }
    return Student;
}());
var student = new Student("Joske", "T.B.", "Vermeulen");
console.log(student.volledigeNaam);
console.log(greeter(student));
