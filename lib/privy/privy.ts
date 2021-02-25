import { toStr } from '@writetome51/to-str';
import { not } from '@writetome51/not';
import { H_M_S, Y_M_D, YMD_HMS } from './types';
import { noValue } from '@writetome51/has-value-no-value';


export function get_ymd_hms(date: Date,  time: 'local' | 'UTC',  options): YMD_HMS {
	let ymdFn = get_ymd_local, hmsFn = get_hms_local;
	if (time === 'UTC') {
		ymdFn = get_ymd_UTC;
		hmsFn = get_hms_UTC;
	}
	return {ymd: ymdFn(date, options), hms: hmsFn(date)};
}


export function get_ymd_local(date: Date, options): Y_M_D {
	return get_ymd(date, {y: 'getFullYear', m: 'getMonth', d: 'getDate'}, options);
}


export function get_ymd_UTC(date: Date, options): Y_M_D {
	return get_ymd(date, {y: 'getUTCFullYear', m: 'getUTCMonth', d: 'getUTCDate'}, options);
}


export function get_hms_local(date: Date): H_M_S {
	return get_hms(date, {h: 'getHours', m: 'getMinutes', s: 'getSeconds'});
}


export function get_hms_UTC(date: Date): H_M_S {
	return get_hms(date, {h: 'getUTCHours', m: 'getUTCMinutes', s: 'getUTCSeconds'});
}


export function get_ymd(
	date: Date,  fnNames: { y: string, m: string, d: string },  options: {includeFullYear: boolean}
): Y_M_D {
	let {y, m, d} = fnNames;

	return getPreparedObject(undefined, undefined, {
		y: () => {
			let s = toStr(date[y]());
			if (not(options.includeFullYear)) s = s.slice(2); // trims off first 2 digits
			return s;
		},
		m: () => toStr(date[m]() + 1), // months are zero-indexed.  This fixes that.
		d: () => toStr(date[d]())
	});
}


export function get_hms(date: Date,  fnNames: { h: string, m: string, s: string } ): H_M_S {
	return getPreparedObject(fnNames, date);
}


export function getPreparedObject<T>(
	fnNames: { [p: string]: string },
	date: Date,
	functionMap?: { [p: string]: () => string }, // Must have same keys as `fnNames`
): T {
	if (noValue(functionMap)) functionMap = getDefault_functionMap(fnNames, date);
	let obj: T = replaceFunctionsWithResults(functionMap);
	return assureMoreThanOneDigitForEach(obj);


	function getDefault_functionMap(fnNames, date) {
		functionMap = {};

		for (let keys = Object.keys(fnNames), i = 0, length = keys.length; i < length; ++i) {
			let key = keys[i], fnName = fnNames[key];
			functionMap[key] = () => toStr(date[fnName]());
		}
		return functionMap;
	}

	function replaceFunctionsWithResults(functionMap): T {
		let obj: any = {};

		for (let keys = Object.keys(functionMap), i = 0, length = keys.length;  i < length;  ++i) {
			obj[keys[i]] = functionMap[keys[i]]();
		}
		return obj;
	}
}


export function assureMoreThanOneDigitForEach<T>(obj: T): T {
	for (let keys = Object.keys(obj), i = 0, length = keys.length;  i < length;  ++i) {
		obj[keys[i]] = assureMoreThanOneDigit(obj[keys[i]]);
	}
	return obj;

	function assureMoreThanOneDigit(str) {
		return (str.length === 1)? ('0' + str): str;
	}
}
