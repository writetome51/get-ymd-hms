# get_ymd_hms(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date: Date,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options? = {includeFullYear: false}<br>): {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ymd: {y: string, m: string, d: string},<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hms: {h: string, m: string, s: string}<br>&nbsp;&nbsp;&nbsp;} 

Returns `date` as `{ymd: {y, m, d}, hms: {h, m, s}}`, with each value having 2 digits  
(if `options.includeFullYear` is `true`, `ymd.y` will have 4.)


## Examples
```ts
get_ymd_hms();
// -->  {ymd: {y: '15', m: '02', d: '20'}, hms: {h: '13', m: '30', s: '30'}}
//       (2015, February 20th, 1:30pm and 30 seconds)

get_ymd_hms({includeFullYear: true});
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
