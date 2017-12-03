'use strict';

const numberOfCards = 52; // global constant for the number of cards in a deck

// ---------------------------------------------------------------------------------------------
// Suits                                                        { OBJECT LITERAL | SINGLETON }
// ---------------------------------------------------------------------------------------------
/** Enumeration of suit names */
// ---------------------------------------------------------------------------------------------
let Suits = {
    Hearts: "Harten",
    Spades: "Schoppen",
    Diamonds: "Ruiten",
    Clubs: "Klaveren"
};

// ---------------------------------------------------------------------------------------------
// CARDVALUES21                                                 { OBJECT LITERAL | SINGLETON }
// ---------------------------------------------------------------------------------------------
/** Lookup object of card values & names for the game '21' */
// ---------------------------------------------------------------------------------------------
let CardValues21 = {
    Ace: [1, "aas"],
    Two: [2, "twee"],
    Three: [3, "drie"],
    Four: [4, "vier"],
    Five: [5, "vijf"],
    Six: [6, "zes"],
    Seven: [7, "zeven"],
    Eight: [8, "acht"],
    Nine: [9, "negen"],
    Ten: [10, "tien"],
    Jack: [11, "boer"],
    Queen: [12, "dame"],
    King: [13, "heer"]
};

// ---------------------------------------------------------------------------------------------
// GAMESTATES                                              { OBJECT LITERAL | SINGLETON }
// ---------------------------------------------------------------------------------------------
/** Lookup object of card values & names for the game '21' */
// ---------------------------------------------------------------------------------------------
let GameStates = {
    init: "init",
    run: "run",
    ended: "ended"
};