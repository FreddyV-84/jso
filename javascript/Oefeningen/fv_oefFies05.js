'use strict';

function tekenLijn(length = 25, char = '=', centreerBreedte = 0) {
    var line = "";
    for (var i = 0; i < centreerBreedte; i++) {
        line += " ";
    }
    for (var i = 1; i <= length; i++) {
        line += char;
    }
    for (var i = 0; i < centreerBreedte; i++) {
        line += " ";
    }
    console.log(line);
}

function tekenDriehoek(base = 5, char = '=', omgekeerd = false) {
    switch (omgekeerd) {
        case true:
            for (var i = base; i >= 1; i--) {
                tekenLijn(i, char);
            }
            break;
        case false:
            for (var i = 1; i <= base; i++) {
                tekenLijn(i, char);
            }
            break;
        default:
            console.log("Error");

    }
}

function tekenKerstboom(size = 3, treeTrunkLength = 4, showFlowerPot = false) {
    size += 6;
    var naaldlengte = 1;
    for (var spatieLengte = size; spatieLengte > size - 7; spatieLengte--) {
        tekenLijn(naaldlengte, '*', spatieLengte);
        naaldlengte += 2;
    }

    var betaLine = "";
    for (var i = 1; i <= size - 7; i++)
        betaLine += " ";
    betaLine += "****B*E*T*A****";
    console.log(betaLine);

    naaldlengte = (size - (size - 7)) * 2 + 3; // 17
    for (var spatieLengte = size - 8; spatieLengte >= 0; spatieLengte--) {
        tekenLijn(naaldlengte, '*', spatieLengte);
        naaldlengte += 2;
    }

    for (var i = 1; i <= treeTrunkLength; i++)
        tekenLijn(3, '#', size - 1);

    if (showFlowerPot) {
        tekenLijn(5, '-', size - 2);
        var potLine ="";
        for(var i=1;i<=size-2;i++)
            potLine+=" ";
        potLine+="\\   /";    
        console.log(potLine);
        tekenLijn(3, '¨', size - 1);
    }
}

// function testfuncArgs(arg1) {
//     console.log("arg1: " + arg1);
//     console.log("arguments[0]: " + arguments[0]);
//     console.log("arguments[1]: " + arguments[1]);
//     console.log("arguments[2]: " + arguments[2]);
//     console.log("arguments[3]: " + arguments[3]);
// }

// tekenLijn();
// tekenLijn(10);
// tekenLijn(20, '*');

// tekenDriehoek();
// tekenDriehoek(8, '*');
// tekenDriehoek(6, 'x', true); // teken een omgekeerde driehoek

tekenKerstboom(5, 2, true);
tekenKerstboom();
tekenKerstboom(8,3, true);

//testfuncArgs("argument 1", "argument 2", "argument 3");