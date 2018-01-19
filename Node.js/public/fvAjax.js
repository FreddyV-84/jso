'use strict';

window.onload = function () {
    plantenDataOphalen();
    onderwijsInstellingenDataOphalen();
}

function plantenDataOphalen() {
    var xmlHttp = false;
    try { // Firefox/Opera/Safari/IE7+
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try { // IE5
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try { // IE6
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Deze browser ondersteunt geen AJAX");
            }
        }
    }

    if (xmlHttp) {
        xmlHttp.open("GET", "http://localhost:1337/planten", true);
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var planten = JSON.parse(xmlHttp.responseText);
                var resultHTML = "";
                for (var i = 0; i < planten.length; i++) {
                    resultHTML += "<li>" + planten[i].PLANTENNAAM + "</li>";
                }
                document.getElementById("lstPlanten").innerHTML = resultHTML;
            }
        }
        xmlHttp.send();
    }
}

function onderwijsInstellingenDataOphalen() {
    var xmlHttp = false;
    try { // Firefox/Opera/Safari/IE7+
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try { // IE5
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try { // IE6
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Deze browser ondersteunt geen AJAX");
            }
        }
    }

    if (xmlHttp) {
        xmlHttp.open("GET", "http://datasets.antwerpen.be/v4/gis/volwassenonderwijs.json");
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var instellingen = JSON.parse(xmlHttp.responseText);
                var resultHTML = "";
                for (var i = 0; i < instellingen.data.length; i++) {
                    resultHTML += "<li>" + instellingen.data[i].naam + "</li>";
                }
                document.getElementById("lstInstellingen").innerHTML = resultHTML;
            }
        }
        xmlHttp.send();
    }
}