'use strict';

var museums = [];
var tbodyMuseums;
var map;

function Museum(id, name, street, streetNr, postalCode, city, latLng) {
    this.id = id;
    this.name = name;
    this.street = street;
    this.streetNr = streetNr;
    this.postalCode = postalCode;
    this.city = city;
    this.latLng = latLng;
}
Museum.prototype.getFullAddress = function () {
    return (this.street + " " + this.streetNr + ", " + this.postalCode + " " + this.city);
}


function initMap() {
    tbodyMuseums = document.getElementById("tbodyMuseums");
    document.getElementById("cityHeader").onclick = function () {
        sortMuseums("city");
    };
    document.getElementById("museumHeader").onclick = function () {
        sortMuseums("museum");
    };
    document.getElementById("addressHeader").onclick = function () {
        sortMuseums("address");
    };

    map = new google.maps.Map(document.getElementById('mapAntwerp'), {
        center: {
            lat: 51.250356304114206,
            lng: 4.38653126454791
        },
        zoom: 10
    });

    var infoWindow = new google.maps.InfoWindow;

    // create antwerp musea markers
    downloadUrl('http://datasets.antwerpen.be/v4/gis/museumoverzicht.xml', function (data) {
        var xml = data.responseXML;
        var markers = xml.documentElement.getElementsByTagName('record');
        Array.prototype.forEach.call(markers, function (markerElem) {

            var id = markerElem.firstChild.firstChild.nodeValue;
            var name = markerElem.children[6].firstChild.nodeValue;
            var street = markerElem.children[7].textContent
            var streetNr = markerElem.children[8].textContent;
            var postalCode = markerElem.children[9].textContent;
            var city = markerElem.children[10].textContent;
            var point = new google.maps.LatLng(parseFloat(markerElem.children[1].textContent), parseFloat(markerElem.children[2].textContent));

            var museum = new Museum(id, name, street, streetNr, postalCode, city, point);
            museums.push(museum);


            // create table row and append it
            var tableRow = document.createElement("tr");
            tableRow.id = id;

            tableRow.onclick = function () {
                var selectedRow = document.getElementsByClassName("selectedRow");
                if (selectedRow.length > 0) {
                    selectedRow[0].removeAttribute("class");
                }
                this.setAttribute("class", "selectedRow");
                updateMapAntwerp(point);
            }

            var cellCity = tableRow.insertCell(0);
            cellCity.innerHTML = city;

            var cellMuseum = tableRow.insertCell(1);
            cellMuseum.innerHTML = name;

            var cellAddress = tableRow.insertCell(2);
            cellAddress.innerHTML = museum.getFullAddress();

            tbodyMuseums.appendChild(tableRow);


            var infowincontent = document.createElement('div');
            var strong = document.createElement('strong');
            strong.textContent = name
            infowincontent.appendChild(strong);
            infowincontent.appendChild(document.createElement('br'));

            var addressLine1 = document.createElement('text');
            addressLine1.textContent = street + streetNr;
            infowincontent.appendChild(addressLine1);
            infowincontent.appendChild(document.createElement('br'));

            var addressLine2 = document.createElement('text');
            addressLine2.textContent = postalCode + " " + city;
            infowincontent.appendChild(addressLine2);



            var marker = createMarker(point, name, 'A');
            marker.addListener('click', function () {
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, marker);
            });
        });
    });

}

// Adds a marker to the map.
function createMarker(position, title, label) {

    var marker = new google.maps.Marker({
        position: position,
        title: title,
        label: label,
        map: map
    });

    return marker;
}

function updateMapAntwerp(point) {
    map.panTo(point);
    map.setZoom(15);
}

function sortMuseums(sortColumn) {
    let sortAsc = null;

    var cityHeader = document.getElementById("cityHeader");
    var museumHeader = document.getElementById("museumHeader");
    var addressHeader = document.getElementById("addressHeader");

    switch (sortColumn) {
        case "city":
            if (cityHeader.className === "sortAsc") {
                sortAsc = false;
                cityHeader.className = "sortDes";
            } else {
                sortAsc = true;
                cityHeader.className = "sortAsc";
            }
            museums.className = addressHeader.className = "";

            museums.sort(function (a, b) {
                var nameA = a.city.toUpperCase(); // ignore upper and lowercase
                var nameB = b.city.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return sortAsc ? 1 : -1;
                }
                if (nameA > nameB) {
                    return sortAsc ? -1 : 1;
                }

                // names must be equal
                return 0;
            })
            break;
        case "museum":
            if (museumHeader.className === "sortAsc") {
                sortAsc = false;
                museumHeader.className = "sortDes";
            } else {
                sortAsc = true;
                museumHeader.className = "sortAsc";
            }
            cityHeader.className = addressHeader.className = "";

            museums.sort(function (a, b) {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return sortAsc ? 1 : -1;
                }
                if (nameA > nameB) {
                    return sortAsc ? -1 : 1;
                }

                // names must be equal
                return 0;
            })
            break;
        case "address":
            if (addressHeader.className === "sortAsc") {
                sortAsc = false;
                addressHeader.className = "sortDes";
            } else {
                sortAsc = true;
                addressHeader.className = "sortAsc";
            }
            museums.className = cityHeader.className = "";

            museums.sort(function (a, b) {
                var streetA = a.street.toUpperCase(); // ignore upper and lowercase
                var streetB = b.street.toUpperCase(); // ignore upper and lowercase
                var numberA = a.number;
                var numberB = b.number;
                var cityA = a.city;
                var cityB = b.city;

                if (streetA < streetB) {
                    return sortAsc ? 1 : -1;
                }
                if (streetA > streetB) {
                    return sortAsc ? -1 : 1;
                }

                // names must be equal
                return 0;
            })

            break;
    }

    //empty table
    tbodyMuseums.innerHTML = "";

    for (let i = 0; i < museums.length; i++) {
        // create table row and append it
        var tableRow = document.createElement("tr");
        tableRow.id = museums[i].id;

        tableRow.onclick = function () {
            var selectedRow = document.getElementsByClassName("selectedRow");
            if (selectedRow.length > 0) {
                selectedRow[0].removeAttribute("class");
            }
            this.setAttribute("class", "selectedRow");
            updateMapAntwerp(museums[i].latLng);
        }

        var cellCity = tableRow.insertCell(0);
        cellCity.innerHTML = museums[i].city;

        var cellMuseum = tableRow.insertCell(1);
        cellMuseum.innerHTML = museums[i].name;

        var cellAddress = tableRow.insertCell(2);
        cellAddress.innerHTML = museums[i].getFullAddress();

        tbodyMuseums.appendChild(tableRow);
    }
}

function downloadUrl(url, callback) {
    var request = window.ActiveXObject ?
        new ActiveXObject('Microsoft.XMLHTTP') :
        new XMLHttpRequest;

    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request, request.status);
        }
    };

    request.open('GET', url, true);
    request.send(null);
}

function doNothing() {}