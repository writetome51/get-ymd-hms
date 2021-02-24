import { toStr } from '@writetome51/to-str';
import { not } from '@writetome51/not';


export function get_ymd(
	date: Date, options = {includeFullYear: false}
): { y: string, m: string, d: string } {
	let ymd = {
		y: toStr(date.getFullYear()), m: toStr(date.getMonth() + 1), d: toStr(date.getDate())
	};
	if (not(options.includeFullYear)) ymd['y'] = ymd['y'].slice(2); // trims off first 2 digits.

	return ensureMoreThanOneDigitForEach(ymd);
}


export function get_hms(date: Date): { h: string, m: string, s: string } {
	let hms = {
		h: toStr(date.getHours()), m: toStr(date.getMinutes()), s: toStr(date.getSeconds())
	};
	return ensureMoreThanOneDigitForEach(hms);
}


export function ensureMoreThanOneDigitForEach(obj) {
	for (let keys = Object.keys(obj), i = 0, length = keys.length; i < length; ++i) {
		obj[keys[i]] = ensureMoreThanOneDigit(obj[keys[i]]);
	}
	return obj;


	function ensureMoreThanOneDigit(str) {
		if (str.length === 1) str = ('0' + str);
		return str;
	}
}
