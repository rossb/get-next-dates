const GetMidnightDate = require('get-midnight-date');
const GetNextDate = require('get-next-date');

function GetNextDates(range, startDate) {

	let nextDates = [];
	let startDateObj;
	let nextDateObj;

	if (typeof range !== 'number' || range <= 0) {

		throw new Error('Invalid range supplied.')

	}

	startDateObj = (startDate === undefined)
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
