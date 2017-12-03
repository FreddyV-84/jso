// ---------------------------------------------------------------------------------------------
// GAME21                                                         { GAME OBJECT INSTANCIATION  }
// ---------------------------------------------------------------------------------------------
// Create new Game object for our game called 21
// ---------------------------------------------------------------------------------------------
var game21 = new Game();

// ---------------------------------------------------------------------------------------------
// INIT                                                                         { FUNCTION }
// ---------------------------------------------------------------------------------------------
// init is called in the imageRepository.imageLoaded method, when all images are loaded
// this initializes our game and runs it
// ---------------------------------------------------------------------------------------------
function init() {
    if (game21.init())
        game21.start();
}

// ---------------------------------------------------------------------------------------------
// GAME                                                             { FUNCTION CONSTRUCTOR  }
// ---------------------------------------------------------------------------------------------
/** Game object definition with 2 methods: init & start */
// ---------------------------------------------------------------------------------------------
function Game() {
    this.init = function () {
        this.gameState = GameStates.init;
        // hide the loading screen because all the card images are loaded
        document.getElementById("loading").style.display = "none";

        // set up event handlers for user controls (buttons)
        document.getElementById("btnReveal").onclick = btnRevealClick;
        document.getElementById("btnRiffle").onclick = btnRiffleClick;
        document.getElementById("btnShuffle").onclick = btnShuffleClick;

        // create & initialize a new deck of cards
        this.deck = new Deck();
        this.deck.init(true);


        // Create DOM Elements for the deckSpaces
        this.tableFelt = document.getElementById("tableFelt");
        this.deckSpace = document.getElementById("deckSpace");
        this.stackSpace = document.getElementById("stackSpace");

        this.tableFelt.style.background = "url(images/tableFelt.jpg) 0 0 /100% 100% no-repeat rgb(4, 95, 65)";
        this.tableFelt.style.width = "500px";
        this.tableFelt.style.height = "500px";

        // TODO badge hoort eigenlijk bij klasse Deck
        // create html div element to represent the remainder of the cards
        var divNumberOfCards = document.createElement("div");
        divNumberOfCards.id = "badgeRemainingCards";
        divNumberOfCards.style.position = "relative";
        divNumberOfCards.style.left = "-17px";
        divNumberOfCards.style.top = "21px";
        divNumberOfCards.style.width = "30px";
        divNumberOfCards.style.height = "30px";
        divNumberOfCards.style.fontSize = "20px";
        divNumberOfCards.style.border = "2px solid #2e2204";
        divNumberOfCards.style.backgroundColor = "#cabc1f";
        divNumberOfCards.style.borderRadius = "18px";
        divNumberOfCards.style.padding = "0px";
        divNumberOfCards.style.lineHeight = "29px";

        divNumberOfCards.innerText = game21.deck.cards.length;

        this.deckSpace.appendChild(divNumberOfCards);

        // set game title
        document.getElementById("gameTitle").innerText = "Game: 21";

        // set width of all Card HTML Image Elements based on the Card instance width
        for (var i = 0; i < imageRepository.cardImages.length; i++) {
            imageRepository.cardImages[i].style.width = this.deck.cards[i].width;
            imageRepository.cardImages[i].style.margin = "8px";
            imageRepository.cardImages[i].style.borderRadius = "7px";
            imageRepository.cardImages[i].style.boxShadow = "black 1px 1px 3px 0px";
        }
        imageRepository.cardBack.style.width = this.deck.cards[0].width;
        imageRepository.cardBack.style.borderRadius = "4px";
        imageRepository.cardBack.style.boxShadow = "black 3px 3px 1px 1px"

        // show cardBack image in the deckspace
        deckSpace.appendChild(imageRepository.cardBack);


        return true;
    }
    // Start the game
    this.start = function () {
        this.gameState = GameStates.run;

        // enable user controls
        enableUserControls(true);

        // riffle the deck
        //this.deck.riffle();
    };
}

function enableUserControls(enabled) {
    if (enabled) {
        document.getElementById("btnRiffle").removeAttribute("disabled");
        document.getElementById("btnShuffle").removeAttribute("disabled");
        document.getElementById("btnReveal").removeAttribute("disabled");
    } else {
        document.getElementById("btnRiffle").setAttribute("disabled", "disabled");
        document.getElementById("btnShuffle").setAttribute("disabled", "disabled");
        document.getElementById("btnReveal").setAttribute("disabled", "disabled");
    }
}

function btnRiffleClick() {
    game21.deck.riffle();
}

function btnShuffleClick() {
    game21.deck.overhandShuffle(1);
}

function btnRevealClick() {
    // Move Card from deck.cards to deck.stack
    if (game21.deck.turnTopCard()) {
        // first Remove all HTML Image Elements so there will be only one card shown in the stack
        // while (stackSpace.childNodes.length > 0) {
        //     stackSpace.removeChild(stackSpace.childNodes[0]);
        // }
        // Append HTML Image Element based on top card in the deck.stack
        var turnedCardHtmlImageElement = game21.deck.stack[game21.deck.stack.length - 1].htmlImgElement;
        stackSpace.appendChild(turnedCardHtmlImageElement);

        document.getElementById("badgeRemainingCards").innerText = game21.deck.cards.length;

        // when the last card is turned
        if (game21.deck.cards.length === 0) {
            // clear the deckSpace
            while (deckSpace.childNodes.length > 0) {
                deckSpace.removeChild(deckSpace.childNodes[0]);
            }
        }
    }

}