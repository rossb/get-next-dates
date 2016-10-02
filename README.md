# get-next-dates

`GetNextDates(range[, startDate])`

Returns an array of Date objects to the specified length, representing the calendar dates following the Date object supplied.

If no date object is supplied, the current time is used as the start date. Range is required, and must be a positive integer. If an invalid range or date is given, an error is thrown.

## Install

```sh
$ npm install get-next-dates --save
```

## Usage

GetNextDates(range, startDate)

```js
const GetNextDates = require('get-next-dates');

let nextSevenDays = GetNextDates(7);
// Array of 7 Date objects starting at tomorrow

let millenium = new Date(2000, 0, 1, 0, 0, 0, 0);
let first100DaysOfCentury = GetNextDates(100, millenium);
// Array of 100 Date objects starting at the millenium
```
