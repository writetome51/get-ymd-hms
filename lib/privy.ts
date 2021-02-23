import { toStr } from '@writetome51/to-str';
import { not } from '@writetome51/not';


export function get_ymd(date, includeFullYear = false): { y: string, m: string, d: string } {
	let ymd = {
		y: toStr(date.getFullYear()), m: toStr(date.getMonth() + 1), d: toStr(date.getDate())
	};
	if (not(includeFullYear)) ymd['y'] = ymd['y'].slice(2); // trims off first 2 digits.

	return ensureMoreThanOneDigitForEach(ymd);
}


export function get_hms(date): { h: string, m: string, s: string } {
	let hms = {
		h: toStr(date.getHours()), m: toStr(date.getMinutes()), s: toStr(date.getSeconds())
	};
	return ensureMoreThanOneDigitForEach(hms);
}


export function ensureMoreThanOneDigitForEach(obj) {
	let keys = Object.keys(obj), i = -1, length = keys.length;
	while (++i < length) obj[keys[i]] = __ensureMoreThanOneDigit(obj[keys[i]]);
	return obj;


	function __ensureMoreThanOneDigit(str) {
		if (toStr(str).length === 1) str = ('0' + str);
		return str;
	}

}
