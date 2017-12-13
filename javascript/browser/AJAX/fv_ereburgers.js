'use strict';

var page, numberOfRecords, hits;
var nbrRows;
var txtFilter;

window.onload = function () {
    txtFilter = document.getElementById("txtFilter");
    nbrRows = document.getElementById("nbrRows");
    nbrRows.selectedIndex = 1; // set number of rows to option 10
    nbrRows.addEventListener("change", function () {
        // reset page global
        page = 1;
        numberOfRecords = parseInt(nbrRows.options[nbrRows.selectedIndex].value);
        fetchDataAndUpdate(txtFilter.value, numberOfRecords, ((page - 1) * numberOfRecords), "date");
    })
    
    page = 1;
    numberOfRecords = parseInt(nbrRows.options[nbrRows.selectedIndex].value);
    fetchDataAndUpdate(txtFilter.value, numberOfRecords, ((page - 1) * numberOfRecords), "date");

    document.getElementById("btnNext").addEventListener("click", btnNextClicked);
    document.getElementById("btnPrevious").addEventListener("click", btnPreviousClicked);
    document.getElementById("btnFilter").addEventListener("click", btnFilterClicked);
    document.getElementById("txtFilter").addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            page = 1;
            fetchDataAndUpdate(txtFilter.value, numberOfRecords, ((page - 1) * numberOfRecords), "date");
        }
        return false;
    });
}

function fetchDataAndUpdate(q, rows, start, sort) {
    var url = "https://opendata.brussel.be/api/records/1.0/search/?dataset=ereburgers1" +
        "&q=" + q +
        "&rows=" + rows +
        "&start=" + start +
        "&sort=-" + sort;
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (responseAsJSON) {
        updateDOM(responseAsJSON);
    })
}

function updateDOM(responseJSON) {
    hits = parseInt(responseJSON.nhits);
    var dataBox = document.getElementById("dataBox");

    var tableElement = document.createElement("table");

    for (var i = 0; i < responseJSON.records.length; i++) {
        var row = tableElement.insertRow();
        row.insertCell(0).textContent = responseJSON.records[i].fields.nom;
        row.insertCell(1).textContent = responseJSON.records[i].fields.functie;
        row.insertCell(2).textContent = responseJSON.records[i].fields.date;
    }
    dataBox.textContent = "";
    dataBox.appendChild(tableElement);

    document.getElementById("pagination").textContent = "Pagina " + page + "/" + Math.ceil(hits / numberOfRecords);
    txtFilter.focus();
}

function btnFilterClicked() {
    document.getElementById("txtFilter");
    fetchDataAndUpdate(txtFilter.value, numberOfRecords, ((page - 1) * numberOfRecords), "date");
}

function btnNextClicked() {
    var numberOfPages = Math.ceil(hits / numberOfRecords);
    if (page < numberOfPages) {
        page++;

        fetchDataAndUpdate(txtFilter.value, numberOfRecords, ((page - 1) * numberOfRecords), "date");
    }
}

function btnPreviousClicked() {
    var numberOfPages = Math.ceil(hits / numberOfRecords);
    if (page > 1) {
        page--;

        fetchDataAndUpdate(txtFilter.value, numberOfRecords, ((page - 1) * numberOfRecords), "date");
    }
}