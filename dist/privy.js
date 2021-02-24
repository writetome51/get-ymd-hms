import { toStr } from '@writetome51/to-str';
import { not } from '@writetome51/not';
export function get_ymd_hms(date, time, options = { includeFullYear: false }) {
    let ymdFn = get_ymd_local, hmsFn = get_hms_local;
    if (time === 'UTC') {
        ymdFn = get_ymd_UTC;
        hmsFn = get_hms_UTC;
    }
    return { ymd: ymdFn(date, options), hms: hmsFn(date) };
}
export function get_ymd_local(date, options = { includeFullYear: false }) {
    return get_ymd(date, { y: 'getFullYear', m: 'getMonth', d: 'getDate' }, // functions that get local time data.
    options);
}
export function get_hms_local(date) {
    return get_hms(date, { h: 'getHours', m: 'getMinutes', s: 'getSeconds' } // functions that get local time data.
    );
}
export function get_ymd_UTC(date, options = { includeFullYear: false }) {
    return get_ymd(date, { y: 'getUTCFullYear', m: 'getUTCMonth', d: 'getUTCDate' }, options);
}
export function get_hms_UTC(date) {
    return get_hms(date, { h: 'getUTCHours', m: 'getUTCMinutes', s: 'getUTCSeconds' });
}
export function get_ymd(date, fnNames, options = { includeFullYear: false }) {
    let { y, m, d } = fnNames;
    let ymd = {
        y: toStr(date[y]()),
        m: toStr(date[m]() + 1),
        d: toStr(date[d]())
    };
    if (not(options.includeFullYear))
        ymd['y'] = ymd['y'].slice(2); // trims off first 2 digits.
    return ensureMoreThanOneDigitForEach(ymd);
}
export function get_hms(date, fnNames) {
    let { h, m, s } = fnNames;
    let hms = {
        h: toStr(date[h]()),
        m: toStr(date[m]()),
        s: toStr(date[s]())
    };
    return ensureMoreThanOneDigitForEach(hms);
}
export function ensureMoreThanOneDigitForEach(obj) {
    for (let keys = Object.keys(obj), i = 0, length = keys.length; i < length; ++i) {
        obj[keys[i]] = ensureMoreThanOneDigit(obj[keys[i]]);
    }
    return obj;
    function ensureMoreThanOneDigit(str) {
        if (str.length === 1)
            str = ('0' + str);
        return str;
    }
}
