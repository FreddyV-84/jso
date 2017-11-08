'use strict';


function copy(o) {
    var output, v, key;
    output = Array.isArray(o) ? [] : {};
    for (key in o) {
        v = o[key];
        output[key] = (typeof v === "object") ? copy(v) : v;
    }
    return output;
}

// There different types of randomness. Math.random gives you an uniform distribution of numbers.
// If you want different orders of magnitude, I would suggest using an exponential function to create what's called a power law distribution:
// number = Math.floor(Math.exp(Math.random()*Math.log(maxmimum-minimum+1)))+minimum
// This line should give you roughly the same number of 1-digit numbers as 2-digit numbers and as 3-digit numbers.
// There are also other distributions for random numbers like the normal distribution (also called Gaussian distribution).
function getRandom(min, max){
    //return Math.random(); // gives you an uniform distribution of numbers 
    // => not ideal for distribution on a long scale
    min--;
    return Math.floor(Math.exp(Math.random()*Math.log(max-min+1)))+min;
}