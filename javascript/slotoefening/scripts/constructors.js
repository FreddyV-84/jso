// ---------------------------------------------------------------------------------------------
// CARD                                                             { FUNCTION CONSTRUCTOR }
// ---------------------------------------------------------------------------------------------
/** Represents one playing card
 * @param cardValue provide a property from object CardValues
 * @param suit provide a property from object Suits */
// ---------------------------------------------------------------------------------------------
function Card(cardValue, suit, width, htmlImgElement) {
    this.cardValue = cardValue;
    this.suit = suit;
    this.width = width;
    this.htmlImgElement = htmlImgElement;
};
/** returns the spoken card name as a string */
Card.prototype.getCardName = function () {
    return Suits[this.suit] + " " + CardValues21[this.cardValue][1];
};

// ---------------------------------------------------------------------------------------------
// DECK                                                             { FUNCTION CONSTRUCTOR }
// ---------------------------------------------------------------------------------------------
/** Represents a deck of cards */
// ---------------------------------------------------------------------------------------------
function Deck() {
    this.cards = []; // property cards holds our Card objects
    this.stack = []; // property representing the cards that are removed from the deck
    this.isFaceDown = true; // property saying if the cards are stacked face down or face up
}
/** Initializes the deck of cards.
 * @param isFaceDown if set to true: 
 * the deck is placed face down so the player cannot see the card values */
Deck.prototype.init = function (isFaceDown) {
    this.isFaceDown = isFaceDown;
    // create & load all cards in cards array
    var cardIndex = 0;
    for (var suit in Suits) {
        for (var cardValue in CardValues21) {
            this.cards[cardIndex] = new Card(cardValue, suit, "60px", imageRepository.cardImages[cardIndex]);
            cardIndex++;
        }
    }
};
/** Shuffle the cards
 * @param numberOfTimes number of times the deck of cards is shuffled
 */
Deck.prototype.overhandShuffle = function (numberOfTimes) {
    // overhand shuffle s times
    for (var s = 1; s <= numberOfTimes; s++) {
        // randomly pick a stack of the deck (around half the cards of the deck)
        var deckThird = Math.floor(this.cards.length / 3) * 2;
        var deckTenth = Math.floor(this.cards.length / 10);
        var randomStackThickness = Math.floor(deckTenth + Math.random() * deckThird);
        // remove this pack of cards at the beginning of the deck and insert them at the end
        // REVERSE: this.cards.unshift(...this.cards.splice(-randomStackThickness,randomStackThickness));
        this.cards.push(...this.cards.splice(0, randomStackThickness));
    }
};
/** Riffles the cards. This results in a randomly reorder of the cards */
Deck.prototype.riffle = function () {
    for (var i = this.cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
    }
};

/** Get the top card and put it on the stack 
 * returns false when the deck stack is finished
 */
Deck.prototype.turnTopCard = function () {
    //only if there is a card left
    if (this.cards.length > 0) {
        if (this.isFaceDown) {
            // deck is face down so remove a card from the beginning of the array and put it on the stack
            this.stack.push(this.cards.splice(0, 1)[0]);
        } else {
            // deck is face up so remove a card from the end of the array and put it on the stack
            this.stack.push(this.cards.pop());
        }
        return true;
    } else {
        return false;
    }
};
Deck.prototype.turnDeck = function () {
    this.isFaceDown ? this.isFaceDown = false : this.isFaceDown = true;
};

// ---------------------------------------------------------------------------------------------
// IMAGEREPOSITORY                                                      { SINGLETON OBJECT }
// ---------------------------------------------------------------------------------------------
/** object that hold all our images for the cards so images
 * are only ever created once. */
// ---------------------------------------------------------------------------------------------
var imageRepository = new function () {
    // Define images
    this.cardImages = [];
    this.cardBack = new Image();
    this.tableFelt = new Image();

    for (var i = 0; i < numberOfCards; i++) {
        this.cardImages[i] = new Image();
    }

    // Set images src, order is used in Deck.init method when creating the Card instances
    for (var i = 0; i <= 12; i++) {
        this.cardImages[i].src = "images/" + (i + 1) + "h.png";
        this.cardImages[i + 13].src = "images/" + (i + 1) + "s.png";
        this.cardImages[i + 26].src = "images/" + (i + 1) + "d.png";
        this.cardImages[i + 39].src = "images/" + (i + 1) + "c.png";
    }
    this.cardBack.src = "images/cardback.png";
    this.tableFelt.src = "images/tableFelt.jpg";

    // Ensure all images have loaded before starting our card game(s)
    var numImages = 54;
    var numLoaded = 0;
    var loadingDiv = document.getElementById("loading");

    function imageLoaded() {
        numLoaded++;
        loadingDiv.innerText = "Loading asset " + numLoaded + "/" + numImages;
        if (numLoaded === numImages) {
            window.init(); // when all images are loaded, call window.init
        }
    }

    // set the eventHandler for the onload event on every cardImage
    for (var i = 0; i < numberOfCards; i++) {
        // DEBUG console.log("this.cardImages[" + i + "]: " + this.cardImages[i] + ".... src: " + this.cardImages[i].src);
        this.cardImages[i].onload = imageLoaded;
    }
    this.cardBack.onload = imageLoaded();
    this.tableFelt.onload = imageLoaded();
}