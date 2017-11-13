'use strict';

var magischVierkant = [
    [16, 3, 2, 13],
    [5, 10, 11, 8],
    [9, 6, 7, 12],
    [4, 15, 14, 1]
];
var ordinairVierkant = [
    [18, 3, 2, 13],
    [7, 10, 11, 8],
    [11, 6, 7, 12],
    [6, 15, 14, 1]
];

var simpelVierkant = [
    [3, 6, 1],
    [6, 1, 3],
    [5, 1, 4]
];

var rechthoek = [
    [17, 3, 2, 13],
    [5, 10, 11, 8],
    [9, 6, 7, 12]
];

function isVierkant(arr) {
    return arr.length == arr[0].length;
}

function isMagischVierkant(arr) {
    if (isVierkant(arr)) {
        // Zijn de rijen gelijk?
        var somTotalenRijen = [];
        
        
        // Zijn de kolommen gelijk?
        var somTotalenKolommen = [];


    }
}

console.log(isMagischVierkant(simpelVierkant));