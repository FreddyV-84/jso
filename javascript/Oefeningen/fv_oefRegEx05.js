'use strict';

var input = require('readline-sync');

var iban = input.question("Geef een IBAN in: "); // BEXX XXXX XXXX XXXX

function isIBANStructureValidated(iban) {
    var regex = new RegExp(/^BE\d{2} ?\d{4} ?\d{4} ?\d{4}$/, "i");
    return regex.test(iban);
}

function isIBANCompletlyValidated(iban) {
    if (isIBANStructureValidated(iban)) {
        // clear optional spaces
        iban = iban.replace(/ /g, "");

        var check1, check2;
        var identificationNumber = iban.substring(4);
        var numberA = identificationNumber.substr(0, 10);
        var numberB = identificationNumber + "111400";
        var controlNumberA = iban.substr(2, 2);
        var controlNumberB = parseInt(iban.slice(-2));
        var rest = parseInt(numberA % 97);

        check1 = check2 = false;

        console.log("identificationNumber:  " + identificationNumber);
        console.log("number:                " + numberA);
        console.log("controlNumbers:        " + controlNumberB);
        console.log("rest:                  " + rest);


        if (rest === 0) {
            check1 = 97 === controlNumberB;
        } else {
            check1 = rest === controlNumberB;
        }

        console.log("check1:                " + check1);
        console.log();


        // Biggest number in Javascript:      9007199254740991
        // Biggest account number:          999999999999111400
        var divi = numberB.substr(0, 3); // take first 3 numbers for manual division

        for (var d = 1; d <= 3; d++) { // repeat 3 times
            // take first 2 numbers
        }


        var modNumberB = numberB % 97;

        if (98 - modNumberB === controlNumberA) {
            check2 = true;
        }

        console.log("numberB:               " + numberB);
        console.log("numberB % 97:          " + modNumberB);
        console.log("98 - numberB % 97      " + (98 - modNumberB));
        console.log("controlNumber:         " + controlNumberA);
        console.log("check2:                " + check2);


        if (check1 && check2) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(isIBANCompletlyValidated(iban));