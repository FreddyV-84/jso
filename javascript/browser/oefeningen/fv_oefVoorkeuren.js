'use strict';

var clrColorPicker = document.getElementById("clrColorPicker");
var selFontFamily = document.getElementById("selFontFamily");
var selImages = document.getElementById("selImages");

window.onload = function () {

    // set eventhandlers
    clrColorPicker.addEventListener("change", clrColorPickerChanged);
    selFontFamily.addEventListener("change", selFontStylesChanged);
    selImages.addEventListener("change", selImagesChanged);

    // load settings if available in localStorage
    if (localStorage.bgColor) {
        document.body.style.backgroundColor = localStorage.bgColor;
        clrColorPicker.value = localStorage.bgColor;
    } else {
        clrColorPicker.value = "#ffffff";
    }

    if (localStorage.fontFamily) {
        document.body.style.fontFamily = selFontFamily.options[localStorage.fontFamily].value;
        selFontFamily.selectedIndex = localStorage.fontFamily;
    }
    if (localStorage.image) {
        document.getElementById("beest").src = selImages.value;
        selImages.selectedIndex = localStorage.image;
    }
}

function clrColorPickerChanged() {
    // save value
    localStorage.setItem("bgColor", clrColorPicker.value);
    // set select value
    document.body.style.backgroundColor = clrColorPicker.value;
}

function selFontStylesChanged() {
    // save value
    localStorage.fontFamily = document.getElementById("selFontFamily").selectedIndex;
    // set select value
    document.body.style.fontFamily = selFontFamily.options[localStorage.fontFamily].value;
}

function selImagesChanged() {
    // save value
    localStorage.image = selImages.options[selImages.selectedIndex].value;
    // set select value
    document.getElementById("beest").src = localStorage.image;
}