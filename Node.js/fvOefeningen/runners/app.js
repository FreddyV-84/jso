$(function () {
    init();


    $('#sortTime').on('click', function () {
        var $tblAllTimes = $('#tblAllTimes').find('tbody');
        var $svg = $(this).find('[data-fa-i2svg]');
        if ($svg.hasClass('fa-sort-amount-down')) {
            getRunnerData("http://localhost:8888/runners/", -1, true, $tblAllTimes);
        } else {
            getRunnerData("http://localhost:8888/runners/", 1, true, $tblAllTimes);
        }
        $svg
            .toggleClass('fa-sort-amount-down')
            .toggleClass('fa-sort-amount-up');
    });



    // trigger male tab for first time population
    $('#maleTimes').trigger('click');


    function validateNewRunner() {
        console.log("validateNewRunner()");
        return {};
    }
    
    function addNewRunner() {
        console.log("addNewRunner()");
        
    }

    function getRunnerData(url, sortOrder, addGenderColumn, table) {
        $.ajax({
            url: url,
            data: {
                sortOrder: sortOrder
            },
            success: function (result) {
                table.empty();
                for (var r = 0; r < result.length; r++) {
                    var time = result[r].time;
                    table
                        .append($('<tr>')
                            .append($('<td>')
                                .text(result[r].lastName)
                            )
                            .append($('<td>')
                                .text(result[r].firstName)
                            )
                            .append(
                                addGenderColumn ? $('<td>').text(result[r].gender) : $()
                            )
                            .append($('<td>')
                                .text(time.hours + ":" + time.minutes + ":" + time.seconds)
                            )
                        );

                }
            }
        });
    }

    // ------------------------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------------------------
    function init() {
        var tabs = $(".tabs li a");

        tabs.click(function () {
            var content = this.hash.replace('/', '');
            tabs.removeClass("active");
            $(this).addClass("active");
            $("#content").find('div.content').hide();
            $(content).fadeIn(200);
        });

        $('#maleTimes').on("click", function () {
            var $tblMaleTimes = $('#tblMaleTimes').find('tbody');
            getRunnerData("http://localhost:8888/runners/male", 1, false, $tblMaleTimes);
        });

        $('#femaleTimes').on("click", function () {
            var $tblFemaleTimes = $('#tblFemaleTimes').find('tbody');
            getRunnerData("http://localhost:8888/runners/female", 1, false, $tblFemaleTimes);
        });

        $('#allTimes').on("click", function () {
            var $tblAllTimes = $('#tblAllTimes').find('tbody');
            getRunnerData("http://localhost:8888/runners/", 1, true, $tblAllTimes);
        });

        $("#frmAddRunner").submit(function (event) {
            console.log("submit triggered");
            
            // event.preventDefault();
            // var newRunnerData = validateNewRunner();
            // if (newRunnerData !== false) {
            //     addNewRunner(newRunnerData);
            // }
        });
    }

});