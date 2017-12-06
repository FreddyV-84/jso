'use strict';

var postItsArray = [];

window.onload = function () {
    document.getElementById("imgNewNote").addEventListener("click", imgNewNote_Clicked);

    // load postIts saved in localStorage & append them to the ul
    var lsPostIts = JSON.parse(localStorage.getItem("postIts"));
    if (lsPostIts !== null) {
        for (var i = 0; i < lsPostIts.length; i++) {
            document.getElementById("postIts").appendChild(createPostIt(lsPostIts[i].noteTitle, lsPostIts[i].noteContent));
        }
    }
}

function imgNewNote_Clicked() {
    document.getElementById("postIts").appendChild(createPostIt("title", ""));
    var noteTitles = document.getElementsByClassName("noteTitle");
    noteTitles[noteTitles.length - 1].select();
}

function createPostIt(title, content) {
    var postIt = document.createElement("li");
    var imgXTag = document.createElement("img");
    var aTag = document.createElement("a");
    var divTag = document.createElement("div");
    var noteTitle = document.createElement("textarea");
    var noteContent = document.createElement("textarea");

    imgXTag.src = "images/close.png";
    imgXTag.addEventListener("click", function () {
        // remove object from array & localStorage
        var liIndex = getElementIndex(this.parentElement.parentElement.parentElement);
        postItsArray.splice(liIndex, 1);
        localStorage.setItem("postIts", JSON.stringify(postItsArray));

        // remove li html element
        this.parentElement.parentElement.parentElement.remove();
    });
    noteTitle.addEventListener("blur", saveBlurredNote);
    noteContent.addEventListener("blur", saveBlurredNote);


    noteTitle.className = "noteTitle";
    noteTitle.innerText = title;
    noteContent.className = "noteContent";
    noteContent.innerText = content;

    divTag.appendChild(noteTitle);
    divTag.appendChild(imgXTag);
    divTag.appendChild(noteContent);
    aTag.appendChild(divTag);
    postIt.appendChild(aTag);


    var postItObj = {
        noteTitle: noteTitle.innerText,
        noteContent: noteContent.innerText
    };

    // add to array
    postItsArray.push(postItObj);
    // save in localStorage
    localStorage.setItem("postIts", JSON.stringify(postItsArray));

    return postIt;
}

function saveBlurredNote() {
    // edit object in array &  save localStorage
    var liIndex = getElementIndex(this.parentElement.parentElement.parentElement);
    if (this.className === "noteTitle") {
        postItsArray[liIndex].noteTitle = this.value;
    } else {
        postItsArray[liIndex].noteContent = this.value;
    }
    localStorage.setItem("postIts", JSON.stringify(postItsArray));
}

function getNodeIndex(node) {
    var index = 0;
    while ((node = node.previousSibling)) {
        if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
            index++;
        }
    }
    return index;
}

function getElementIndex(node) {
    var index = 0;
    while ((node = node.previousElementSibling)) {
        index++;
    }
    return index;
}