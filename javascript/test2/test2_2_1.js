'use strict';

// ------------------------------------------------------------------
// GLOBAL VARIABLE DECLARATIONS & ASSIGNMENTS
// ------------------------------------------------------------------
const NUMBER_OF_QUESTIONS = 5;
var questions, answers, activeQuestion = 0;

questions = [
    "a",
    "b",
    "c",
    "d",
    "e"
];

answers = [
    "A",
    "B",
    "C",
    "D",
    "E"
];

// ------------------------------------------------------------------
// SCRIPT LOGIC
// ------------------------------------------------------------------
// set the button event handlers in the onload event handler
window.onload = function () {
    document.getElementById("btnActiveQuestion").onclick = setActiveQuestion;
    document.getElementById("btnAnswer").onclick = setAnswer;

    // set first time load question
    setActiveQuestion();
};


// ------------------------------------------------------------------
// EVENT HANDLER FUNCTIONS
// ------------------------------------------------------------------
function setActiveQuestion() {
    // clear any answer that is written out
    document.getElementById("txtAnswer").value = "";
    
    
    // generate random number from 0 to the numberOfQuestions
    // the tmp variable is used to compare the previously generated
    // number to avoid the same question two times in a row
    var tmp = 0;
    while(tmp === activeQuestion){
        tmp = Math.floor(Math.random() * NUMBER_OF_QUESTIONS);
    }
    activeQuestion = tmp;

    // render the question in the active question text input
    document.getElementById("txtQuestion").value = questions[activeQuestion];
}

function setAnswer() {
    // render the corresponding answer in the answer text input
    document.getElementById("txtAnswer").value = answers[activeQuestion];
}