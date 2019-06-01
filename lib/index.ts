import { not } from '@writetome51/not';
import { __ensureMoreThanOneDigitForEach } from './privy/private_functions';


// Returns array of strings representing current [year, month, day] (in that order).
// Example:  ['15', '02', '20']  (meaning 2015, February, the 20th)

export function getArray_yearMonthDay(includeFullYear = false): string[] {
	let date = new Date();

	let parts = [String(date.getFullYear()), String(date.getMonth() + 1), String(date.getDate())];
	if (not(includeFullYear)) parts[0] = parts[0].slice(2); // trims off first 2 digits.

	return __ensureMoreThanOneDigitForEach(parts);
}


// Returns array of strings representing current [hours, minutes, seconds] (in that order).
// Example:  ['16', '20', '20']  (meaning 4:20pm and 20 seconds)

export function getArray_hoursMinutesSeconds(): string[] {
	let date = new Date();

	let parts = [String(date.getHours()), String(date.getMinutes()), String(date.getSeconds())];
	return __ensureMoreThanOneDigitForEach(parts);
}
