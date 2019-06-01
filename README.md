# getArray_yearMonthDay(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;includeFullYear? = false<br>): string[]

Returns array of strings representing current [year, month, day] (in that order).  
`includeFullYear`, if true, will show all 4 digits of the year.  
Example:  `['15', '02', '20']`  (for 2015, February, the 20th)

# getArray_hoursMinutesSeconds(): string[]

Returns array of strings representing current [hours, minutes, seconds] (in that order).  
Example:  `['16', '20', '20']`  (for 4:20pm and 20 seconds)

## Examples
```ts
getArray_yearMonthDay(true);
// -->  ['2015', '02', '20']

getArray_yearMonthDay();
// -->  ['15', '02', '20']

getArray_hoursMinutesSeconds();
// -->  ['19', '30', '43']
```

## Installation

`npm i @writetome51/get-array-year-month-day-hours-minutes-seconds`

## Loading
```ts
// if using TypeScript:
import { getArray_yearMonthDay, getArray_hoursMinutesSeconds } 
	from '@writetome51/get-array-year-month-day-hours-minutes-seconds';
	
// if using ES5 JavaScript:
var getArray_yearMonthDay =
	require('@writetome51/get-array-year-month-day-hours-minutes-seconds')
	.getArray_yearMonthDay;
	
var getArray_hoursMinutesSeconds =
	require('@writetome51/get-array-year-month-day-hours-minutes-seconds')
	.getArray_hoursMinutesSeconds;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
