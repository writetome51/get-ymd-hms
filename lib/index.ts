import { get_hms, get_ymd } from './privy';


export function get_ymd_hms(
	options = {includeFullYear: false} // if false, year has 2 digits
): {
	ymd: { y: string, m: string, d: string },
	hms: { h: string, m: string, s: string }
} {
	let date = new Date(); // gets user machine's local date and time.

	return {ymd: get_ymd(date, options), hms: get_hms(date)};
}

