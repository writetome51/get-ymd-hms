import {get_ymd_hms} from './privy.js';


export function get_ymd_hms_local(date, options = {includeFullYear: false} // if false, year has 2 digits
) {
	return get_ymd_hms(date, 'local', options);
}


export function get_ymd_hms_UTC(date, options = {includeFullYear: false} // if false, year has 2 digits
) {
	return get_ymd_hms(date, 'UTC', options);
}
