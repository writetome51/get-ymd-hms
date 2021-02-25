# get_ymd_hms_local(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date: Date,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options? = {includeFullYear: false}<br>): YMD_HMS

Returns `date` as `YMD_HMS` in local time.

# get_ymd_hms_UTC(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date: Date,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options? = {includeFullYear: false}<br>): YMD_HMS

Returns `date` as `YMD_HMS` in UTC (same as GMT) time.

These types are part of the public API:

# YMD_HMS = {ymd: Y_M_D, hms: H_M_S}

# Y_M_D = {y: string, m: string, d: string}
Each string has 2 digits, except: `Y_M_D.y` will have 4 digits if `options.includeFullYear`  
is `true`.

# H_M_S = {h: string, m: string, s: string}
Each string has 2 digits.








## Examples
```ts
get_ymd_hms_local();
// -->  {ymd: {y: '15', m: '02', d: '20'}, hms: {h: '13', m: '30', s: '30'}}
//       (2015, February 20th, 1:30pm and 30 seconds)

get_ymd_hms_UTC({includeFullYear: true});
// -->  {ymd: {y: '2015', m: '02', d: '20'}, hms: {h: '13', m: '30', s: '30'}}
//       (2015, February 20th, 1:30pm and 30 seconds)
```

## Installation

`npm i @writetome51/get-ymd-hms`

## Loading
```ts
import { get_ymd_hms } from '@writetome51/get-ymd-hms';
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
