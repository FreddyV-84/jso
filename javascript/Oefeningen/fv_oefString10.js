'use strict';

var input = require('readline-sync');

function isArmStrongNumber(number) {
    var sum = 0;
    var length = number.toString().length;
    var power = length;
    var n;

    for (var pos = 0; pos < length; pos++) {
        n = number.toString().charAt(pos);
        sum += Math.pow(n, power);
    }
    return number == sum;
}

for (var i = 1; i <= 10000; i++) {
    if (isArmStrongNumber(i)) {
        console.log(i);
    }
}
