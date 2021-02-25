import { HMS, YMD, YMD_HMS } from './types';
export declare function get_ymd_hms(date: Date, time: 'local' | 'UTC', options: any): YMD_HMS;
export declare function get_ymd_local(date: Date, options: any): YMD;
export declare function get_hms_local(date: Date): HMS;
export declare function get_ymd_UTC(date: Date, options: any): YMD;
export declare function get_hms_UTC(date: Date): HMS;
export declare function get_ymd(date: Date, fnNames: {
    y: string;
    m: string;
    d: string;
}, options: any): YMD;
export declare function get_hms(date: Date, fnNames: {
    h: string;
    m: string;
    s: string;
}): HMS;
export declare function getPreparedObject<T>(functionMap: {
    [key: string]: () => string;
}): T;
export declare function ensureMoreThanOneDigitForEach<T>(obj: T): T;
