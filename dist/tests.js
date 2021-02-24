import {get_hms_local, get_ymd_local} from './privy.js';
import {get_ymd_hms_local, get_ymd_hms_UTC} from './index.js';

// Tests 1 thru 3 cover functions in ./privy

let date = new Date();
let result = get_ymd_local(date);
let keysCombined = Object.keys(result).join('');
if (typeof result === 'object' && Object.keys(result).length === 3 && keysCombined === 'ymd') {
	console.log('test 1 passed');
} else console.log('test 1 FAILED');

let valuesCombined = result.y + result.m + result.d;
if (typeof valuesCombined === 'string' && valuesCombined.length === 6) {
	console.log('test 1A passed');
} else console.log('test 1A FAILED');


result = get_hms_local(date);
keysCombined = Object.keys(result).join('');
if (typeof result === 'object' && Object.keys(result).length === 3 && keysCombined === 'hms') {
	console.log('test 2 passed');
} else console.log('test 2 FAILED');

valuesCombined = result.h + result.m + result.s;
if (typeof valuesCombined === 'string' && valuesCombined.length === 6) {
	console.log('test 2A passed');
} else console.log('test 2A FAILED');


result = get_ymd_local(date, {includeFullYear:true});
if (result.y.length === 4 && typeof Number(result.y) === 'number' && isFinite(Number(result.y))) {
	console.log('test 3 passed');
} else console.log('test 3 FAILED');


// These tests cover the main function:

let local = get_ymd_hms_local(date, {includeFullYear:true});
keysCombined = Object.keys(local).join('');

if (typeof local === 'object' && Object.keys(local).length === 2 && keysCombined === 'ymdhms') {
	console.log('test 4 passed');
} else console.log('test 4 FAILED');

if (local.ymd.y.length === 4) console.log('test 5 passed');
else console.log('test 5 FAILED');

valuesCombined = local.ymd.y + local.ymd.m + local.ymd.d +
	local.hms.h + local.hms.m + local.hms.s;
if (typeof valuesCombined === 'string' && valuesCombined.length === 14) {
	console.log('test 6 passed');
} else console.log('test 6 FAILED');


local = get_ymd_hms_local(date);
keysCombined = Object.keys(local).join('');

if (typeof local === 'object' && Object.keys(local).length === 2 && keysCombined === 'ymdhms') {
	console.log('test 7 passed');
} else console.log('test 7 FAILED');

if (local.ymd.y.length === 2) console.log('test 8 passed');
else console.log('test 8 FAILED');

valuesCombined = local.ymd.y + local.ymd.m + local.ymd.d +
	local.hms.h + local.hms.m + local.hms.s;
if (typeof valuesCombined === 'string' && valuesCombined.length === 12) {
	console.log('test 9 passed');
} else console.log('test 9 FAILED');


console.log(get_ymd_hms_local(date));
console.log(get_ymd_hms_UTC(date));
