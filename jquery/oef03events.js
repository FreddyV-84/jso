'use strict';

// $(document).ready(function () { //voor oudere mensen
//     console.log("test");
// });

// $(function () { //aangeraden voor jonge, hippe mensen
//     console.log("test2");
// });

$(() => { //aangeraden voor jonge, hippe mensen die willen opscheppen
    // $(':submit', '#frm').click(function (e) {
    //     e.preventDefault();
    //     console.log(":submit, #frm");
    //     console.log(this);
    // });

    // $('#frm input').click(function (e) {
    //     e.preventDefault();
    //     console.log(".click");
    //     console.log(this);
    // });

    $('#frm input').on("click", function (e) {
        let txtSearch = $('#txtSearch');
        if (txtSearch.val() === "") {
            e.preventDefault();
            $('label[for="txtSearch"]').css('color', '#87aae2');
            $('#error').html('<em>Geef een zoekterm in</em>');
        }

        // franstalige websites in Nederland
        if ($('#selLanguage').val() === "lang_fr" && $('#selCountry').val() === "countryNL") {
            e.preventDefault();
            $('label[for="selLanguage"]').css('color', '#87aae2');
            $('label[for="selCountry"]').css('color', '#87aae2');
            $('#error').html('<em>U tracht een franstalige website in Nederland te zoeken</em>');
        }

        e.preventDefault();
        $('#selLanguage option:eq(1)').text('sjakamakka');
        $('#selLanguage option:first').text('updated');
        $('#selLanguage option:even').text('updated');
        $('#selLanguage option:contains("updated")').text('updatedContains');

    });
});