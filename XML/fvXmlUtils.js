function loadXMLDoc(filename, callBackXmlDocReady) {
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

// how to use:
// loadXMLDoc("doc.xml", xmlDocReady);
// function xmlDocReady(xml) {
//     var xmlDoc = xml.responseXML;
// }