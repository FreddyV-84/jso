'use strict';

// =============================================================================================
//                                      BOILERPLATE CODE
// =============================================================================================
var events = require('events');

// ---------------------------------------------------------------------------------------------
// Rekening                                                             { FUNCTION CONSTRUCTOR }
// ---------------------------------------------------------------------------------------------
/** Represents a bank account
 * @param beginSaldo provide a decimal number */
// ---------------------------------------------------------------------------------------------
function Rekening(beginSaldo) {
    // properties
    this.beginSaldo = beginSaldo;

    // private members
    var saldo = this.beginSaldo; // private read only property member, cannot directly change beginSaldo
    var rekeningEventsEmitter = new events.EventEmitter();

    // methods
    this.getSaldo = function () {
        return saldo;
    }
    this.stortGeld = function (bedrag) {
        saldo += bedrag;
    }
    this.haalGeldAf = function (bedrag) {
        if (saldo - bedrag >= 0) {
            saldo -= bedrag;
        } else {
            // trigger/fire event saldo_negatief
            rekeningEventsEmitter.emit('saldo_negatief', this, "extra info als tweede parameter via emit");
        }
    }

    // method to register an event for Rekening
    this.on = function (eventName, eventHandler) {
        rekeningEventsEmitter.on(eventName, eventHandler);
    }
}

// ---------------------------------------------------------------------------------------------
// REKENING_ONSALDONEGATIEF                                           { EVENT HANDLER FUNCTION }
// ---------------------------------------------------------------------------------------------
/** Handles the event when saldo_negatief is triggered/fired */
// ---------------------------------------------------------------------------------------------
function rekening_onSaldoNegatief(src, tweedeParamText) {
    console.log("--- 1ste event handler (saldo_negatief): saldo ontoereikend! (Saldo bedraagt " + src.getSaldo() + ")");
    console.log("--- 1ste event handler (saldo_negatief): tweedeParamText: " + tweedeParamText);
}


// =============================================================================================
//                                  EXECUTION STARTPOINT OF OUR CODE
// =============================================================================================
var rekening = new Rekening(100);
// subscribe/register our newly created rekening object to it's event 'saldo_negatief'
rekening.on('saldo_negatief', rekening_onSaldoNegatief);
rekening.on('saldo_negatief', function () { // event handler function
    console.log("--- 2de  event handler (saldo_negatief): u kan geld storten via de stortGeld methode");
})

console.log("saldo na creatie: ", rekening.getSaldo());

var bedrag = 20;
rekening.stortGeld(bedrag);
console.log("saldo na storting van " + bedrag + ": " + rekening.getSaldo());

bedrag = 10;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van " + bedrag + ": " + rekening.getSaldo());

bedrag = 150;
rekening.haalGeldAf(bedrag); // this will trigger 
console.log("saldo na opname van " + bedrag + ": " + rekening.getSaldo());