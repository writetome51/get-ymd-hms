import { YMD_HMS } from './types';


export { YMD_HMS, YMD, HMS } from './types';


export declare function get_ymd_hms_local(
	date: Date, options?: { includeFullYear: boolean; }
): YMD_HMS;


export declare function get_ymd_hms_UTC(
	date: Date, options?: { includeFullYear: boolean; }
): YMD_HMS;
