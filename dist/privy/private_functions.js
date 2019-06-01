"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function __ensureMoreThanOneDigitForEach(parts) {
    var results = [], i = -1;
    while (++i < parts.length)
        results.push(__ensureMoreThanOneDigit(parts[i]));
    return results;
}
exports.__ensureMoreThanOneDigitForEach = __ensureMoreThanOneDigitForEach;
function __ensureMoreThanOneDigit(str) {
    if (String(str).length === 1)
        str = ('0' + str);
    return str;
}
exports.__ensureMoreThanOneDigit = __ensureMoreThanOneDigit;
