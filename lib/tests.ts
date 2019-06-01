import { getArray_hoursMinutesSeconds, getArray_yearMonthDay } from './index';


let result = getArray_yearMonthDay();
if (Array.isArray(result) && result.length === 3) console.log('test 1 passed');
else console.log('test 1 FAILED');

if (result[0].length === 2 && result[1].length === 2 && result[2].length === 2)
	console.log('test 2 passed');
else console.log('test 2 FAILED');


if (isFinite(Number(result[0])) && isFinite(Number(result[1])) && isFinite(Number(result[2])))
	console.log('test 2A passed');
else console.log('test 2A FAILED');


result = getArray_yearMonthDay(true);

if (Array.isArray(result) && result.length === 3) console.log('test 3 passed');
else console.log('test 3 FAILED');

if (result[0].length === 4 && result[1].length === 2 && result[2].length === 2)
	console.log('test 4 passed');
else console.log('test 4 FAILED');

if (isFinite(Number(result[0])) && isFinite(Number(result[1])) && isFinite(Number(result[2])))
	console.log('test 4A passed');
else console.log('test 4A FAILED');


result = getArray_hoursMinutesSeconds();
if (Array.isArray(result) && result.length === 3) console.log('test 5 passed');
else console.log('test 5 FAILED');

if (result[0].length === 2 && result[1].length === 2 && result[2].length === 2)
	console.log('test 6 passed');
else console.log('test 6 FAILED');


if (isFinite(Number(result[0])) && isFinite(Number(result[1])) && isFinite(Number(result[2])))
	console.log('test 6A passed');
else console.log('test 6A FAILED');
