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
        var block = "";
        for (var i = 0; i < result.length; i++) {
            block += "<p>" + result[i].name + "</p>";
        }
        $('#dataBlock').html(block);
    }

});