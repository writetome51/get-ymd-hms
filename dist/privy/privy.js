import {toStr} from '@writetome51/to-str';
import {not} from '@writetome51/not';
import {noValue} from '@writetome51/has-value-no-value';


export function get_ymd_hms(date, time, options) {
	let ymdFn = get_ymd_local, hmsFn = get_hms_local;
	if (time === 'UTC') {
		ymdFn = get_ymd_UTC;
		hmsFn = get_hms_UTC;
	}
	return {ymd: ymdFn(date, options), hms: hmsFn(date)};
}


export function get_ymd_local(date, options) {
	return get_ymd(date, {y: 'getFullYear', m: 'getMonth', d: 'getDate'}, options);
}


export function get_ymd_UTC(date, options) {
	return get_ymd(date, {y: 'getUTCFullYear', m: 'getUTCMonth', d: 'getUTCDate'}, options);
}


export function get_hms_local(date) {
	return get_hms(date, {h: 'getHours', m: 'getMinutes', s: 'getSeconds'});
}


export function get_hms_UTC(date) {
	return get_hms(date, {h: 'getUTCHours', m: 'getUTCMinutes', s: 'getUTCSeconds'});
}


export function get_ymd(date, fnNames, options) {
	let {y, m, d} = fnNames;
	return getPreparedObject(undefined, undefined, {
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
	return getPreparedObject(fnNames, date);
}


export function getPreparedObject(fnNames, date, functionMap) {
	if (noValue(functionMap)) functionMap = getDefault_functionMap(fnNames, date);
	let obj = replaceFunctionsWithResults(functionMap);
	return assureMoreThanOneDigitForEach(obj);


	function getDefault_functionMap(fnNames, date) {
		functionMap = {};
		for (let keys = Object.keys(fnNames), i = 0, length = keys.length; i < length; ++i) {
			let key = keys[i], fnName = fnNames[key];
			functionMap[key] = () => toStr(date[fnName]());
		}
		return functionMap;
	}


	function replaceFunctionsWithResults(functionMap) {
		let obj = {};
		for (let keys = Object.keys(functionMap), i = 0, length = keys.length; i < length; ++i) {
			obj[keys[i]] = functionMap[keys[i]]();
		}
		return obj;
	}
}


export function assureMoreThanOneDigitForEach(obj) {
	for (let keys = Object.keys(obj), i = 0, length = keys.length; i < length; ++i) {
		obj[keys[i]] = assureMoreThanOneDigit(obj[keys[i]]);
	}
	return obj;


	function assureMoreThanOneDigit(str) {
		return (str.length === 1) ? ('0' + str) : str;
	}
}
