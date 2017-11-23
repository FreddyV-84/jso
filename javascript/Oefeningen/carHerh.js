'use strict';

let brands = ["Fiat", "Tesla", "Porsche"];
let models = [
    ["Panda", "Toro", "Argo", "Mobi"],
    ["Roadster", "S - 75D", "S-85D", "X"],
    ["Carrera 4", "Panamero"]
];
let colors = ["rood", "zwart", "donkerblauw", "wit"];

window.onload = function () {
    document.getElementById("btnDrive").onclick = drive;
    document.getElementById("selBrands").onchange = loadBrands;

    loadBrands(); // updates models as well
    loadColors();
};

function loadColors() {
    let selColors = document.getElementById("selColors");

    for (let i = 0; i < colors.length; i++) {
        let opt = document.createElement("option");
        opt.text = colors[i];
        selColors.add(opt);
    }
}

function loadBrands() {
    let selBrands = document.getElementById("selBrands");

    if (selBrands.options.length == brands.length) {

    } else {
        for (let opt in selBrands) {
            selBrands.remove(opt);
        }

        for (let i = 0; i < brands.length; i++) {
            let opt = document.createElement("option");
            opt.text = brands[i];
            selBrands.add(opt);
        }
    }

    loadModels(selBrands.selectedIndex);
}


function loadModels(brandIndex) {
    let selModels = document.getElementById("selModels");
    for (let opt in selModels) {
        selModels.remove(opt);
    }

    for (let i = 0; i < models[brandIndex].length; i++) {
        let opt = document.createElement("option");
        opt.text = models[brandIndex][i];
        selModels.add(opt);
    }
}

function drive() {
    let selBrandsIndex = document.getElementById("selBrands").selectedIndex;
    let selModelsIndex = document.getElementById("selModels").selectedIndex;
    let selColorsIndex = document.getElementById("selColors").selectedIndex;
    let txtConstructionYear = document.getElementById("txtConstructionYear").value;
    let chkCabrio = document.getElementById("chkCabrio").checked;
    let txtKmStand = document.getElementById("txtKmStand");
    let nbrDistance = document.getElementById("nbrDistance");

    document.getElementById("message").innerHTML = "<br>Merk: " + brands[selBrandsIndex] + 
    "<br>Model: " + models[selBrandsIndex][selModelsIndex] +
    "<br>Kleur: " + colors[selColorsIndex] +
    "<br>Bouwjaar: " + txtConstructionYear +
    "<br>Cabrio: " + (chkCabrio ? "Ja" : "Nee");

    // verhoog kmstand met opgegeven afstand
    txtKmStand.value = parseInt(txtKmStand.value) + parseInt(nbrDistance.value);
}