'use strict';

var xhr = new XMLHttpRequest();

window.addEventListener("load", windowLoaded);

function windowLoaded() {
    loadSalesAsynchronous();
}

function loadSalesAsynchronous() {
    xhr.open('GET', 'sales.json', true);
    // xhr.open('GET', 'http://gumball.wickedlysmart.com', true);
    xhr.send('extra info');

    xhr.onload = function () {
        if (xhr.status === 200) {
            updateSales(JSON.parse(xhr.responseText));
        }
    }
}

function updateSales(responseObject) {
    var sales = document.getElementById("sales");
    var newContent = '';

    for (var i = 0; i < responseObject.length; i++) {
        newContent += '<div class="saleItem">';
        newContent += responseObject[i].name;
        newContent += ' sold ' + responseObject[i].sales + ' gumballs';
        newContent += '</div>'
    }

    sales.innerHTML = newContent;
}