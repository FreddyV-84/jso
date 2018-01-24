'use strict';


$(function () {
    getCuisines();
    $('#selKitchens').on("change", selKitchens_changed);


    function selKitchens_changed() {
        var selectedCuisine = $('#selKitchens').val();
        getCuisine(selectedCuisine);
    }

    function getCuisine(cuisine) {
        $.ajax({
            url: "http://localhost:8888/restaurants/keukens/" + encodeURIComponent(cuisine),
            success: function (result) {
                emptyCuisineTable();
                fillCuisineTable(result);
            }
        });
    }

    function emptyCuisineTable() {
        $('#kitchens').empty();
    }

    function fillCuisineTable(result) {
        $.each(result, function (i, item) {
            $('<tr>').append(
                $('<td>').text(i + 1),
                $('<td>').text(item.name),
                $('<td>').text(item.address.street),
                $('<td>').text(item.borough),
                $('<td>').text(item.cuisine)
            ).appendTo('#kitchens');
        });
    }

    function getCuisines() {
        $.ajax({
            url: "http://localhost:8888/restaurants/keukens",
            success: function (result) {
                populateCuisinesList(JSON.parse(result));
                // show cuisines for first item in list
                selKitchens_changed();
            }
        });
    }

    function populateCuisinesList(result) {
        $.each(result, function (i, item) {
            $('<option>').val(item).text(item).appendTo('#selKitchens');
        });
    }

});