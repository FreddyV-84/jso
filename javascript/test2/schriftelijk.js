'use strict';

function modifyMember(table){
    // tabel is a copy of the reference address
    // it conceptually points to the same array in memory
    // therefore it is not a copy of the array
    table[2] = "koekoek"; // this will affect the array from the calling code
    // after this function ends, the table variable will conceptually gets garbage collected
}

var tb = ["een", "twee", "drie", "vier"];
modifyMember(tb); // composite object (array): REFERENCE is passed by value!!!
console.log(tb[2]);