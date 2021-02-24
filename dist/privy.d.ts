import { HMS, YMD } from './types';
export declare function get_ymd_local(date: Date, options?: {
    includeFullYear: boolean;
}): YMD;
export declare function get_hms_local(date: Date): HMS;
export declare function get_ymd_UTC(date: Date, options?: {
    includeFullYear: boolean;
}): YMD;
export declare function get_hms_UTC(date: Date): HMS;
export declare function ensureMoreThanOneDigitForEach(obj: any): any;
