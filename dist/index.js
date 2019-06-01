"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var not_1 = require("@writetome51/not");
var private_functions_1 = require("./privy/private_functions");
// Returns array of strings representing current [year, month, day] (in that order).
// Example:  ['15', '02', '20']  (meaning 2015, February, the 20th)
function getArray_yearMonthDay(includeFullYear) {
    if (includeFullYear === void 0) { includeFullYear = false; }
    var date = new Date();
    var parts = [String(date.getFullYear()), String(date.getMonth() + 1), String(date.getDate())];
    if (not_1.not(includeFullYear))
        parts[0] = parts[0].slice(2); // trims off first 2 digits.
    return private_functions_1.__ensureMoreThanOneDigitForEach(parts);
}
exports.getArray_yearMonthDay = getArray_yearMonthDay;
// Returns array of strings representing current [hours, minutes, seconds] (in that order).
// Example:  ['16', '20', '20']  (meaning 4:20pm and 20 seconds)
function getArray_hoursMinutesSeconds() {
    var date = new Date();
    var parts = [String(date.getHours()), String(date.getMinutes()), String(date.getSeconds())];
    return private_functions_1.__ensureMoreThanOneDigitForEach(parts);
}
exports.getArray_hoursMinutesSeconds = getArray_hoursMinutesSeconds;
