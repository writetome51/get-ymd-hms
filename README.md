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
let date = new Date();

get_ymd_hms_UTC(date, {includeFullYear: true});
// -->  {ymd: {y: '2021', m: '02', d: '20'},  hms: {h: '20', m: '30', s: '30'}}
//       (2021, February 20th, 8:30pm and 30 seconds, UTC)

get_ymd_hms_local(date, {includeFullYear: true});
// -->  {ymd: {y: '2021', m: '02', d: '20'},  hms: {h: '13', m: '30', s: '30'}}
//       (2021, February 20th, 1:30pm and 30 seconds, 7 hours behind UTC)
```

## Installation

`npm i @writetome51/get-ymd-hms`

## Loading
```ts
import { get_ymd_hms_local, get_ymd_hms_UTC } from '@writetome51/get-ymd-hms';
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
