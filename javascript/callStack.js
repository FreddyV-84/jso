'use strict';

function func1() {
    console.log("func1 execution");
    func2();
    return "func1 executed";
}
function func2() {
    console.log("func2 execution");
    func3();
    console.trace();
    return "func2 executed";
}
function func3() {
    console.log("func3 execution");
    return "func3 executed";
}

func1();