const GetMidnightDate = require('get-midnight-date');
const GetNextDate = require('get-next-date');
const IsValidDate = require('is-valid-date-object');

function GetNextDates(range, startDate) {

	let nextDates = [];

	if (typeof range !== 'number' || range <= 0) {

		throw new Error('Invalid range supplied (should be a positive integer).')

	}

  if (startDate !== undefined && !IsValidDate(startDate)) {

		throw new Error('Invalid date supplied (should be a Date object with a valid date value).')

  }

	let startDateObj = (startDate === undefined)
		? GetMidnightDate(new Date())
		: GetMidnightDate(startDate);

	while (range--) {

		nextDates.push(
			GetNextDate( (nextDates[nextDates.length - 1] || startDateObj) )
		);

	}

	return nextDates;

}

module.exports = GetNextDates;
