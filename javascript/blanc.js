'use strict';


(function (w) {
    var appName = "foo";
    var compileTime = new Date();

    w.printAppInfo = function () {
        return appName + ": " + compileTime;
    }
})(global); // global in node, window in browser

//console.log(printAppInfo());

var display = function (name) {
    console.log("Hello, " + name);
};

var displayArrow = name => console.log("Hello, " + name + " => Arrow Madness");

display("fred");
displayArrow("Fredje")