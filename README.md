# getYearMonthDayIDs(includeFullYear? = false): string[]

Returns array of strings representing current [year, month, day] (in that order).
Example:  ['15', '02', '20']  (meaning 2015, February, the 20th)

# getHoursMinutesSeconds(): string[]

Returns array of strings representing current [hours, minutes, seconds] (in that order).
Example:  ['16', '20', '20']  (meaning 4:20pm and 20 seconds)

## Examples
```ts
getYearMonthDayIDs(true);
// -->  ['2015', '02', '20']

getYearMonthDayIDs();
// -->  ['15', '02', '20']

getHoursMinutesSeconds();
// -->  ['19', '30', '43']
```

## Installation

`npm install @writetome51/get-year-month-day-hours-minutes-seconds`

## Loading
```ts
// if using TypeScript:
import { getYearMonthDayIDs, getHoursMinutesSeconds } 
	from '@writetome51/get-year-month-day-hours-minutes-seconds';
// if using ES5 JavaScript:
var  getHoursMinutesSeconds =
	require('@writetome51/get-year-month-day-hours-minutes-seconds')
	.getHoursMinutesSeconds;
var  getYearMonthDayIDs =
	require('@writetome51/get-year-month-day-hours-minutes-seconds')
	.getYearMonthDayIDs;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
