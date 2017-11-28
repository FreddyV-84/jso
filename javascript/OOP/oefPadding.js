'use strict';

Number.pad = function (number, size, char) {
    let result = "";
    if (number.toString().length < size) {
        for (let i = 0; i < (size - number.toString().length); i++) {
            result += char;
        }
        result += number;
    }
    return result;
}


var s = Number.pad(12, 8, '0');
console.log(s);