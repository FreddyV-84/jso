'use strict';

function TV() {
    this.post = 0;
    this.posten = [
        "K3 en de regenboogprinses",
        "België-Spanje",
        "Parijs-Tours",
        "Lotto uitslag"
    ]
    this.getProgramma = function () {
        if (this.post >= 0 && this.post < this.posten.length) {
            return this.posten[this.post];
        } else {
            return 'Ooit "FC De Kampioenen" gemist?';
        }
    };
}

var toetsenbord = require('readline-sync');

var tv = new TV();
tv.post = 2;
var programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
tv.post = parseInt(toetsenbord.question("Geef post: "));
programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);