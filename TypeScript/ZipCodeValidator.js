"use strict";
exports.__esModule = true;
exports.numberRegexp = /^[0-9]{4}$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        if (exports.numberRegexp.test(s)) {
            var tmp = parseInt(s).toString(); // remove leading zeroes
            return tmp.length == 4;
        }
        return false;
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
