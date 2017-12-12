'use strict';

var xmlDoc;
var elements = [];
var currentQuestionCounter = 0;
var scores = [];
var currentScore = 0;
const countDownValue = 3;
var countDown = countDownValue;
var countDownInterval = null;
var startTime, endTime;
var realTimeInterval = null;
var frameTime;

window.onload = function () {
    loadXMLDoc("XML-bestanden/allelements.xml", xmlDocReady); // Load xml assync
}

// triggers when xml is loaded
function xmlDocReady(xml) {
    xmlDoc = xml.responseXML;
    initQuiz();
}

function initQuiz() {
    // initialize array with elements from xml document
    initElements();
    initScores();

    // configure event handler for the onclick event of the answer button on screen
    document.getElementById("btnAnswer").addEventListener("click", btnAnswerClicked);
    document.getElementById("txtAnswer").addEventListener("keydown", btnAnswerPressed);

    document.getElementById("btnTopScore").addEventListener("click", btnTopScoreClicked);

    document.getElementById("btnReset").addEventListener("click", btnResetClicked);

    document.getElementById("btnStart").addEventListener("click", btnStartClicked);
    document.getElementById("btnStart").focus();
}

function initScores() {
    if (localStorage.scores) {
        scores = JSON.parse(localStorage.getItem("scores"));
    }
}

function initElements() {
    var numberOfElements = xmlDoc.documentElement.children.length; // get number of ATOM elements

    var rand, name, symbol;
    var iteratorCounter = 0;

    // fill the elements array with 10 Element objects based on 10 random atom elements from the xml file
    for (var i = 0; i < 10; i++) {
        rand = Math.floor(Math.random() * numberOfElements);
        name = xmlDoc.getElementsByTagName("NAME")[rand];
        symbol = xmlDoc.getElementsByTagName("SYMBOL")[rand];
        elements[i] = new Element(rand, name.textContent, symbol.textContent);
    }

    // display first element name to the quizzer
    document.getElementById("display").innerText = "1. " + elements[0].name;
}

function btnStartClicked() {
    countDownInterval = setInterval(countDownFunc, 1000);
}

function countDownFunc() {
    document.getElementById("frameStart").style.display = "block";
    if (countDown > 0) {
        console.log(countDown);
        document.getElementById("frameStart").innerHTML = countDown;
        if (countDown === 1) {
            // start quiz
            startTime = Date.now();

            currentQuestionCounter = 0;
            currentScore = 0;

            frameTime = document.getElementById("frameTime");
            realTimeInterval = setInterval(displayTime, 1000);
        }
        countDown--;
    } else {
        clearInterval(countDownInterval);
        frameTime.style.display = "block";
        document.getElementById("frameStart").style.display = "none";
        document.getElementById("frameTopScore").style.display = "none";
        document.getElementById("frameResults").style.display = "none";
        document.getElementById("frameAnswers").style.display = "block";
        document.getElementById("txtAnswer").value = "";
        document.getElementById("txtAnswer").focus();


    }
}

function displayTime() {
    var milliseconds = Date.now() - startTime;
    var seconds = (milliseconds / 1000).toFixed();
    var secondsString = ('0' + seconds).slice(-2);

    var minutes = ((seconds / 60).toFixed()).slice(-2);

    frameTime.innerText = minutes + ":" + secondsString;
}

function btnResetClicked() {
    document.getElementById("frameAnswers").style.display = "none";
    document.getElementById("frameTime").style.display = "none";
    document.getElementById("frameResults").style.display = "none";
    document.getElementById("frameTopScore").style.display = "none";

    countDown = countDownValue;

    document.getElementById("frameStart").innerText = countDown;

    btnStartClicked();
}

function btnTopScoreClicked() {
    showTopScore(false);
}

function btnAnswerPressed(e) {
    if (e.keyCode == 13) {
        btnAnswerClicked();
    }
    return false; // prevent event bubbling
}

function btnAnswerClicked() {
    // 10 questions asked --> quiz is over
    if (currentQuestionCounter >= 9) {
        document.getElementById("frameTime").style.display = "none";
        endTime = Date.now();
        clearInterval(realTimeInterval);

        checkAnswer(document.getElementById("txtAnswer").value);
        var results = document.getElementById("frameResults");
        results.innerText = "U heeft " + currentScore + " van de " + elements.length + " vragen juist."
        results.style.display = "block";

        // hide frameAnswers
        document.getElementById("frameAnswers").style.display = "none";

        // save score and prompt for name after one second so the quizzer sees his victory message first
        setTimeout(saveScore, 1000);

        // reset currentQuestionCounter
        currentQuestionCounter = 0;

        document.getElementById("remarks").innerText = "";

        // show next question
        document.getElementById("display").innerText = "1. " + elements[currentQuestionCounter].name;

    } else {
        var answer = document.getElementById("txtAnswer");
        var remarks = document.getElementById("remarks");

        if (txtAnswer.value !== "") {
            checkAnswer(answer.value);
            // increment currentQuestionCounter
            currentQuestionCounter++;

            // clear answer textbox
            answer.value = "";
            answer.focus();
            // show next question
            document.getElementById("display").innerText = (currentQuestionCounter + 1) + ". " + elements[currentQuestionCounter].name;
        } else {
            alert("vul je antwoord in het antwoordvak in");
        }
    }
}

function showTopScore(showResetButton) {
    var topScore = document.getElementById("topScore");
    var topScoreHTML = "Top 3<table><tr><td>naam</td><td>score</td><td>datum</td></tr>";

    if (scores.length > 3) {
        for (var i = 0; i < 3; i++) {
            topScoreHTML += "<tr><td>" + scores[i].name + "</td><td>" + scores[i].score + "</td><td>" + scores[i].date + "</td></tr>";
        }
        topScoreHTML += "</table>";

        topScoreHTML += "<br>Overige<table><tr><td>naam</td><td>score</td><td>datum</td></tr>";
        for (var i = 3; i < scores.length; i++) {
            topScoreHTML += "<tr><td>" + scores[i].name + "</td><td>" + scores[i].score + "</td><td>" + scores[i].date + "</td></tr>";
        }
        topScoreHTML += "</table>";

    } else {
        for (var i = 0; i < scores.length; i++) {
            topScoreHTML += "<tr><td>" + scores[i].name + "</td><td>" + scores[i].score + "</td><td>" + scores[i].date + "</td></tr>";
        }
        topScoreHTML += "</table>";
    }

    topScore.innerHTML = topScoreHTML;

    if (showResetButton) {
        document.getElementById("btnReset").style.display = "inline-block";
    } else {
        document.getElementById("btnReset").style.display = "none";
    }
    document.getElementById("frameTopScore").style.display = "block";
}

function saveScore() {
    // ask name for topscore
    let name = prompt("Geef je naam in: ");

    let date = new Date();
    date = ('0' + date.getDate()).slice(-2) + "/" + ('0' + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();

    let elapsedTime = ((endTime - startTime) / 1000).toFixed();

    let score = new Score(name, currentScore, date, elapsedTime);
    // push score to scores array
    scores.push(score);

    // sort scores based on score
    scores.sort(sortScores);

    // push scores array to localStorage
    localStorage.setItem("scores", JSON.stringify(scores));

    // show topScore
    setTimeout(function () {
        document.getElementById("frameResults").style.display = "none";
        showTopScore(true);
        document.getElementById("btnReset").focus();
    }, 1000);
}

function sortScores(a, b) {
    return a.score < b.score;
}

function checkAnswer(answer) {
    var remarks = document.getElementById("remarks");
    if (answer.toLowerCase() === elements[currentQuestionCounter].symbol.toLowerCase()) {
        // show correct answer
        remarks.style.color = "Green";
        remarks.textContent = "correct: " + elements[currentQuestionCounter].name + " is afgekort " + elements[currentQuestionCounter].symbol;
        // increment current score
        currentScore++;
    } else {
        // show correct answer
        remarks.style.color = "Red";
        remarks.textContent = "fout: " + elements[currentQuestionCounter].name + " is afgekort " + elements[currentQuestionCounter].symbol;

    }
}

/** Element Function Constructor */
function Element(id, name, symbol) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
}

/** Score Function Constructor */
function Score(name, score, date, elapsedTime) {
    this.name = name;
    this.score = score;
    this.date = date;
    this.elapsedTime = elapsedTime;
}

function loadXMLDoc(filename, callBackXmlDocReady) {
    var xhttp;
    if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } else {
        xhttp = new XMLHttpRequest();
    }

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callBackXmlDocReady(this);
        }
    };
    xhttp.open("GET", filename, true);
    try {
        xhttp.responseType = "msxml-document";
    } catch (err) {} // Helping IE11
    xhttp.send("");
}