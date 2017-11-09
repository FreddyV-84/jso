'use strict';

var number;

for (var i = 0; i < 50000; i++) {
    number = Math.floor((1 + Math.random() * 6));
    //Math.floor(1 + Math.random() * 6)
    if (number == 7)
        console.log(number);

}