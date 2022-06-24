export const specifyHourAndDayNumber = (
	item: {
		id: number;
		city: string;
		shift: number;
	},
	hour: number,
	dayNumber: string,
) => {
	let cityHour = hour + item.shift;
	if (hour + item.shift >= 24) {
		cityHour = -(24 - (hour + item.shift));
	} else if (hour + item.shift < 0) {
		cityHour = hour + item.shift + 24;
	}
	let currentDayNumber = parseInt(dayNumber);
	if (hour + item.shift >= 24) {
		currentDayNumber = parseInt(dayNumber) + 1;
	} else if (hour + item.shift < 0) {
		currentDayNumber = parseInt(dayNumber) - 1;
	}

	return { cityHour, currentDayNumber };
};
