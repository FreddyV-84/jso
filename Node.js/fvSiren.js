'use strict';

// landSiren class/template
function LandSiren() {
    this.activate = function () {
        setInterval(function () {
            console.log("Whieeeejoeeeeeeee")
        }, 1000);
    }
}

module.exports = LandSiren;