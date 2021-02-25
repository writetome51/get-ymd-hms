import { toStr } from '@writetome51/to-str';
import { not } from '@writetome51/not';
import { HMS, YMD, YMD_HMS } from './types';


export function get_ymd_hms(date: Date,  time: 'local' | 'UTC',  options): YMD_HMS {
	let ymdFn = get_ymd_local, hmsFn = get_hms_local;
	if (time === 'UTC') {
		ymdFn = get_ymd_UTC;
		hmsFn = get_hms_UTC;
	}
	return {ymd: ymdFn(date, options), hms: hmsFn(date)};
}


export function get_ymd_local(date: Date, options): YMD {
	let fnNames = {y: 'getFullYear', m: 'getMonth', d: 'getDate'}; // functions that get local time.
	return get_ymd(date, fnNames, options);
}


export function get_hms_local(date: Date): HMS {
	let fnNames = {h: 'getHours', m: 'getMinutes', s: 'getSeconds'}; // functions that get local time.
	return get_hms(date, fnNames);
}


export function get_ymd_UTC(date: Date, options): YMD {
	let fnNames = {y: 'getUTCFullYear', m: 'getUTCMonth', d: 'getUTCDate'};
	return get_ymd(date, fnNames, options);
}


export function get_hms_UTC(date: Date): HMS {
	return get_hms(date, {h: 'getUTCHours', m: 'getUTCMinutes', s: 'getUTCSeconds'});
}


export function get_ymd(
	date: Date, fnNames: { y: string, m: string, d: string }, options
): YMD {
	let {y, m, d} = fnNames;

	return getPreparedObject({
		y: () => {
			let s = toStr(date[y]());
			if (not(options.includeFullYear)) s = s.slice(2); // trims off first 2 digits
			return s;
		},
		m: () => toStr(date[m]() + 1), // months are zero-indexed (January is 0)
		d: () => toStr(date[d]())
	});
}


export function get_hms(date: Date,  fnNames: { h: string, m: string, s: string } ): HMS {
	let {h, m, s} = fnNames;

	return getPreparedObject<HMS>({
		h: () => toStr(date[h]()),
		m: () => toStr(date[m]()),
		s: () => toStr(date[s]())
	});
}


export function getPreparedObject<T>(
	functionMap: { [key: string]: () => string }
): T {
	let obj: T = replaceFunctionsWithResults(functionMap);
	return ensureMoreThanOneDigitForEach(obj);


	function replaceFunctionsWithResults(functionMap): T {
		let obj: any = {};

		for (let keys = Object.keys(functionMap), i = 0, length = keys.length; i < length; ++i) {
			obj[keys[i]] = functionMap[keys[i]]();
		}
		return obj;
	}
}


export function ensureMoreThanOneDigitForEach<T>(obj: T): T {
	for (let keys = Object.keys(obj), i = 0, length = keys.length; i < length; ++i) {
		obj[keys[i]] = ensureMoreThanOneDigit(obj[keys[i]]);
	}
	return obj;


	function ensureMoreThanOneDigit(str) {
		if (str.length === 1) str = ('0' + str);
		return str;
	}
}
