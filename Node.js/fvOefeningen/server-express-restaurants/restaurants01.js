'use strict';

// var $ = require('jQuery');

$(function () {
    document.getElementById("btnGetData").addEventListener("click", getData);

    function getData() {
        $.ajax({
            url: "http://localhost:8888/restaurants",
            success: function (result) {
                populateTable(JSON.parse(result));
            }
        });
    }

    function populateTable(result) {
        $.each(result, function (i, item) {
            $('<tr>').append(
                $('<td>').text(i+1),
                $('<td>').text(item.name),
                $('<td>').text(item.address.street),
                $('<td>').text(item.borough),
                $('<td>').text(item.cuisine)
            ).appendTo('#restoTable');
        });
    }

});