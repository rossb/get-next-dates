# get-next-dates

Takes a positive integer and Date object, and returns an array of length specified containing Date objects representing the following calendar days.

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
