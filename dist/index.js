import {get_hms_local, get_hms_UTC, get_ymd_local, get_ymd_UTC} from './privy.js';


export function get_ymd_hms_local(
	date, options = {includeFullYear: false} // if false, year has 2 digits
) {
	return {ymd: get_ymd_local(date, options), hms: get_hms_local(date)};
}


export function get_ymd_hms_UTC(
	date, options = {includeFullYear: false} // if false, year has 2 digits
) {
	return {ymd: get_ymd_UTC(date, options), hms: get_hms_UTC(date)};
}
