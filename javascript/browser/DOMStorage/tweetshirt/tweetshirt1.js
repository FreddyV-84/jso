'use strict';

var presetsArray = [];

var bgColor;
var fgColor;
var shapeColor;
var shape;
var tweets;
var presets;

window.onload = function () {
	bgColor = document.getElementById("backgroundColor");
	fgColor = document.getElementById("foregroundColor");
	shapeColor = document.getElementById("shapeColor");
	shape = document.getElementById("shape");
	tweets = document.getElementById("tweets");
	presets = document.getElementById("presets");

	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;

	document.getElementById("saveButton").addEventListener("click", saveButtonClicked);
	document.getElementById("removeButton").addEventListener('click', removeButtonClicked);
	document.getElementById("presets").addEventListener("change", presetsChanged);

	document.getElementById("shape").addEventListener("change", shapeChanged);

	document.getElementById("tweets").addEventListener("change", updateSettings);
	document.getElementById("backgroundColor").addEventListener("change", updateSettings);
	document.getElementById("foregroundColor").addEventListener("change", updateSettings);
	document.getElementById("shapeColor").addEventListener("change", updateSettings);
	document.getElementById("textSize").addEventListener("change", updateSettings);

	loadSettings();
	// Easter Egg ;-)
	makeImage();
	shapeChanged();
	loadPresets();
	// setInterval(previewHandler, 1000 / 5);
	previewHandler();
}

function removeButtonClicked() {
	if (presets.selectedIndex !== -1) {
		// remove in DOM
		var selOption = presets[presets.selectedIndex];
		presets.removeChild(selOption);

		// remove in array and update localStorage
		presetsArray.splice(presets.selectedIndex, 1);
		localStorage.presets = presetsArray;

		loadPresets();
	}
}

function loadPresets() {
	if (localStorage.presets) {
		presetsArray = JSON.parse(localStorage.presets);
	} else {
		presetsArray = [];
	}

	while (presets.options.length > 0) {
		presets.removeChild(presets.childNodes[0]);
	}
	for (var p = 0; p < presetsArray.length; p++) {
		var el = document.createElement("option");
		el.text = "preset " + p;
		presets.appendChild(el);
	}
}

function saveButtonClicked() {
	var obj = {
		bgColor: bgColor.value,
		fgColor: fgColor.value,
		shapeColor: shapeColor.value,
		shapeIndex: shape.selectedIndex,
		tweetIndex: tweets.selectedIndex
	}

	if (presetsArray.length > 0) {
		var found = false;
		var propsValueNumberOfEquals;
		for (var i in presetsArray) {
			var propsValueNumberOfEquals = 0;
			if (presetsArray[i]["bgColor"] === obj.bgColor) {
				propsValueNumberOfEquals++;
			}
			if (presetsArray[i]["fgColor"] === obj.fgColor) {
				propsValueNumberOfEquals++;
			}
			if (presetsArray[i]["shapeColor"] === obj.shapeColor) {
				propsValueNumberOfEquals++;
			}
			if (presetsArray[i]["shapeIndex"] === obj.shapeIndex) {
				propsValueNumberOfEquals++;
			}
			if (presetsArray[i]["tweetIndex"] === obj.tweetIndex) {
				propsValueNumberOfEquals++;
			}
			if (propsValueNumberOfEquals === 5) {
				found = true;
			}
		}
	}

	if (found) {
		alert("preset already exists (preset" + findIndex + ")");
	} else {
		presetsArray.push(obj);
		localStorage.presets = JSON.stringify(presetsArray);
		loadPresets();
	}
}

function objectPropInArray(list, prop, val) {
	if (list.length > 0) {
		for (i in list) {
			if (list[i][prop] === val) {
				return true;
			}
		}
	}
	return false;
}

function presetsChanged() {
	var obj = null;
	if (presets.selectedIndex !== -1) { // if preset selected
		obj = presetsArray[presets.selectedIndex];
		bgColor.value = obj.bgColor;
		fgColor.value = obj.fgColor;
		shapeColor.value = obj.shapeColor;
		shape.selectedIndex = obj.shapeIndex;
		tweets.selectedIndex = obj.tweetIndex;
		updateSettings();
	} else {
		alert("no preset selected");
	}

}

function loadSettings() {
	if (localStorage.backgroundColor) {
		// set
		bgColor.value = localStorage.backgroundColor;

	} else {
		bgColor.value = "#000000"; // default
	}

	if (localStorage.foregroundColor) {
		// set
		fgColor.value = localStorage.foregroundColor;
	} else {
		fgColor.value = "#ffffff"; // default
	}

	if (localStorage.shapeColor) {
		// set
		shapeColor.value = localStorage.shapeColor;
	} else {
		shapeColor.value = "#000000"; // default
	}

	if (localStorage.shape) {
		shape.selectedIndex = localStorage.shape;
	} else {
		shape.selectedIndex = 0;
	}

	if (localStorage.tweet) {
		tweets.selectedIndex = localStorage.tweet;
	} else {
		tweets.selectedIndex = 0;
	}
	previewHandler();


}

function updateSettings() {
	// set or overwrite
	localStorage.backgroundColor = bgColor.value;
	// set or overwrite
	localStorage.foregroundColor = fgColor.value;
	// set or overwrite
	localStorage.shapeColor = shapeColor.value;
	// set or overwrite shape selected index
	localStorage.shape = shape.selectedIndex;
	// set or overwrite tweets selected index
	localStorage.tweet = tweets.selectedIndex;

	previewHandler();
}

function shapeChanged() {
	if (shape.selectedIndex > 0) {
		shapeColor.style.display = "inline-block";
	} else {
		shapeColor.style.display = "none";
	}
	updateSettings();
}

// TODO
function drawShape(canvas, context, drawHandler) {
	// ...
}

function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");
	// there's no 3D canvas yet; this is to make code futureproof

	fillBackgroundColor(canvas, context);

	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;
	var color = document.getElementById("shapeColor").value;

	if (shape == "squares") {
		for (var squares = 0; squares < 20; squares++) {
			drawSquare(canvas, context, color);
		}
	} else if (shape == "circles") {
		for (var circles = 0; circles < 20; circles++) {
			drawCircle(canvas, context, color);
		}
	}
	drawText(canvas, context, document.getElementById("textSize").value);
	drawBird(canvas, context);
}

// This is where we'll set the background color
function fillBackgroundColor(canvas, context) {
	context.fillStyle = bgColor.value;
	context.fillRect(0, 0, canvas.width, canvas.height);

}

// Draws a square at a random location
function drawSquare(canvas, context, color) {
	var w = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.fillStyle = color;
	context.fillRect(x, y, w, w);
}

// Draws a circle at a random location
function drawCircle(canvas, context, color) {
	var radius = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.beginPath();
	context.arc(x, y, radius, 0, degreesToRadians(360), true);

	context.fillStyle = color;
	context.fill();
}

// draws all the text, including the tweet
function drawText(canvas, context, textSize) {
	context.fillStyle = fgColor.value;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);


	// draw the tweet!
	var tweet = tweets.options[tweets.selectedIndex].value;
	context.font = "italic " + textSize + "px serif";
	context.textAlign = "center";
	context.fillText(tweet, Math.floor(canvas.width / 2), 100);

	// If you want to try splitIntoLines to 
	// handle longer tweets, uncomment this code
	// and replace the context.fillText line above
	/*
		if (tweet.length > 60) {
			var tweetLines = splitIntoLines(tweet);
			for (var i = 0; i < tweetLines.length; i++) {
				context.fillText(tweetLines[i], 30, 70+(i*25));
			}
		}
		else {
			context.fillText(tweet, 30, 100);
		}
	*/

	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!",
		canvas.width - 20, canvas.height - 40);
}

// draws the twitter bird image
function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "images/twitterBird.png";
	// images don't always load immediatly, so we make sure the image is fully loaded before we draw it:
	twitterBird.onload = function () {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};

}

function degreesToRadians(degrees) {
	return (degrees * Math.PI) / 180;
}


function updateTweets(tweets) {
	var tweetsSelection = document.getElementById("tweets");

	// add all tweets to the tweets menu
	for (var i = 0; i < tweets.length; i++) {
		var tweet = tweets[i];

		// create option
		var option = document.createElement("option");
		option.text = tweet.text;

		// strip any quotes out of the tweet so they don't mess up our option
		option.value = tweet.text.replace("\"", "'");

		// add option to select
		tweetsSelection.options.add(option);
	}
	// make sure the top tweet is selected
	tweetsSelection.selectedIndex = 0;
}


// Splits one long string into multiple lines of 
// no more than 60 characters each. Returns an
// array of the lines.
function splitIntoLines(str) {
	var strs = new Array();
	var space = str.indexOf(' ', 60);
	strs[0] = str.substring(0, space);
	strs[1] = str.substring(space + 1);
	if (strs[1].length > 60) {
		space = strs[1].indexOf(' ', 60);
		strs[1] = strs[1].substring(space + 1);
		strs[2] = strs[1].substring(0, space);
	}
	return strs;
}

// Easter Egg
function makeImage() {
	var canvas = document.getElementById("tshirtCanvas");
	canvas.onclick = function () {
		window.open(canvas.toDataURL('image/png'), '_blank');
	};
}