import {toStr} from '@writetome51/to-str';
import {not} from '@writetome51/not';


export function get_ymd_hms(date, time, options) {
	let ymdFn = get_ymd_local, hmsFn = get_hms_local;
	if (time === 'UTC') {
		ymdFn = get_ymd_UTC;
		hmsFn = get_hms_UTC;
	}
	return {ymd: ymdFn(date, options), hms: hmsFn(date)};
}


export function get_ymd_local(date, options) {
	let fnNames = {y: 'getFullYear', m: 'getMonth', d: 'getDate'};
	return get_ymd(date, fnNames, options);
}


export function get_hms_local(date) {
	return get_hms(date, {h: 'getHours', m: 'getMinutes', s: 'getSeconds'});
}


export function get_ymd_UTC(date, options) {
	let fnNames = {y: 'getUTCFullYear', m: 'getUTCMonth', d: 'getUTCDate'};
	return get_ymd(date, fnNames, options);
}


export function get_hms_UTC(date) {
	return get_hms(date, {h: 'getUTCHours', m: 'getUTCMinutes', s: 'getUTCSeconds'});
}


export function get_ymd(date, fnNames, options) {
	let {y, m, d} = fnNames;
	return getPreparedObject({
		y: () => {
			let s = toStr(date[y]());
			if (not(options.includeFullYear)) s = s.slice(2); // trims off first 2 digits
			return s;
		},
		m: () => toStr(date[m]() + 1),
		d: () => toStr(date[d]())
	});
}


export function get_hms(date, fnNames) {
	let {h, m, s} = fnNames;
	return getPreparedObject({
		h: () => toStr(date[h]()),
		m: () => toStr(date[m]()),
		s: () => toStr(date[s]())
	});
}


export function getPreparedObject(functionMap) {
	let obj = replaceFunctionsWithResults(functionMap);
	return ensureMoreThanOneDigitForEach(obj);


	function replaceFunctionsWithResults(functionMap) {
		let obj = {};
		for (let keys = Object.keys(functionMap), i = 0, length = keys.length; i < length; ++i) {
			obj[keys[i]] = functionMap[keys[i]]();
		}
		return obj;
	}
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
