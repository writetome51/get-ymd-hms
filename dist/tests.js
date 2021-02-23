import {get_hms, get_ymd} from './privy.js';
import {get_ymd_hms} from './index.js';


let date = new Date();
let result = get_ymd(date);
let keysCombined = Object.keys(result).join('');
if (typeof result === 'object' && Object.keys(result).length === 3 && keysCombined === 'ymd') {
	console.log('test 1 passed');
} else console.log('test 1 FAILED');

let valuesCombined = result.y + result.m + result.d;
if (typeof valuesCombined === 'string' && valuesCombined.length === 6) {
	console.log('test 1A passed');
} else console.log('test 1A FAILED');


result = get_hms(date);
keysCombined = Object.keys(result).join('');
if (typeof result === 'object' && Object.keys(result).length === 3 && keysCombined === 'hms') {
	console.log('test 2 passed');
} else console.log('test 2 FAILED');

valuesCombined = result.h + result.m + result.s;
if (typeof valuesCombined === 'string' && valuesCombined.length === 6) {
	console.log('test 2A passed');
} else console.log('test 2A FAILED');


result = get_ymd(date, {includeFullYear:true});
if (result.y.length === 4 && typeof Number(result.y) === 'number' && isFinite(Number(result.y))) {
	console.log('test 3 passed');
} else console.log('test 3 FAILED');


result = get_ymd_hms({includeFullYear:true});
keysCombined = Object.keys(result).join('');

if (typeof result === 'object' && Object.keys(result).length === 2 && keysCombined === 'ymdhms') {
	console.log('test 4 passed');
} else console.log('test 4 FAILED');

if (result.ymd.y.length === 4) console.log('test 5 passed');
else console.log('test 5 FAILED');

valuesCombined = result.ymd.y + result.ymd.m + result.ymd.d +
	result.hms.h + result.hms.m + result.hms.s;
if (typeof valuesCombined === 'string' && valuesCombined.length === 14) {
	console.log('test 6 passed');
} else console.log('test 6 FAILED');



result = get_ymd_hms();
keysCombined = Object.keys(result).join('');

if (typeof result === 'object' && Object.keys(result).length === 2 && keysCombined === 'ymdhms') {
	console.log('test 7 passed');
} else console.log('test 7 FAILED');

if (result.ymd.y.length === 2) console.log('test 8 passed');
else console.log('test 8 FAILED');

valuesCombined = result.ymd.y + result.ymd.m + result.ymd.d +
	result.hms.h + result.hms.m + result.hms.s;
if (typeof valuesCombined === 'string' && valuesCombined.length === 12) {
	console.log('test 9 passed');
} else console.log('test 9 FAILED');


console.log(get_ymd_hms());
