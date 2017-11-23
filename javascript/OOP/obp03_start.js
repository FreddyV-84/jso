'use strict';

// Op post0: 
// Voor 18 uur: Tik Tak, Tussen 18 en 19 uur: Samson en Gert, Na 19 uur: K3 in het Sportpaleis
// Op post1:
// Voor 19 uur: sport, Tussen 19 en 20 uur: voetbal, Na 20 uur: sport


function TV2() {
    this.post = 0;
    this.uur = 18;
    this.getProgramma = function () {
        if (this.post === 0) {
            if (this.uur < 18) {
                return "Tik Tak";
            }
            if (this.uur >= 18 && this.uur <= 19) {
                return "Samson en Gert";
            }
            if (this.uur > 19) {
                return "K3 in het Sportpaleis";
            }
        }
        if (this.post === 1) {
            if (this.uur < 19 || this.uur > 20) {
                return "sport";
            }
            if (this.uur >= 19 && this.uur <= 20) {
                return "voetbal";
            }
        }
    };
}

var toetsenbord = require('readline-sync');

var tv = new TV2();
tv.post = 0;
tv.uur = 19;
var programma = tv.getProgramma();
console.log("Op post %d spelen ze om %d uur '%s'", tv.post, tv.uur, programma);