'use strict';

// ------------------------------------------------------------------
// SCRIPT LOGIC
// ------------------------------------------------------------------
window.onload = function(){
    // set the eventhandler for the click event of the formbutton
    document.getElementById("btnVertaal").onclick = translate;
};

// ------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------
function translate(){
    var input = document.getElementById("txtInvoer").value;
    document.getElementById("txtVertaling").value = (pigLatin(input));
}

function pigLatin(sentence){
    // searchValue: (RegExp) globally case insensitive match the 
    // characters within the range a-z without 'p' starting with 
    // a word boundary anchor.
    // replaceValue: prefix those matches with  a 'p' character.
    return sentence.replace(/(\b[a-oq-z])/ig, "p$1");
}