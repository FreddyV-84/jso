'use strict';

// var $ = require('jQuery');

$(function () {
    document.getElementById("btnGetData").addEventListener("click", getData);

    function getData() {
        $.ajax({
            url: "http://localhost:8888/restaurants/keukens",
            success: function (result) {
                populateList(JSON.parse(result));
            }
        });
    }

    function populateList(result) {
        $.each(result, function (i, item) {
            $('<option>').val(i).text(i + ". " + item).appendTo('#selKitchens');
        });
    }

});