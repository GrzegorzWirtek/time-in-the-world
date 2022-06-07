import { useEffect, useState } from 'react';
let INITIAL_DELAY = (60 - new Date().getSeconds()) * 1000;
let CONST_DELAY = 60000;

export const useDate = () => {
	const [date, setDate] = useState(new Date());
	const [delay, setDelay] = useState(INITIAL_DELAY);

	useEffect(() => {
		const minutesInterval = setInterval(() => {
			setDate(new Date());
			if (delay !== CONST_DELAY) {
				setDelay(CONST_DELAY);
			}
		}, delay);
		return () => clearInterval(minutesInterval);
	}, [delay]);

	const hour = date.getHours();
	const minutes =
		date.getMinutes() < 10
			? '0' + date.getMinutes()
			: date.getMinutes().toString();
	const dayNumber = date.getDay().toLocaleString();

	const day = (dNumber: number) => {
		switch (dNumber) {
			case 1:
				return 'pon.';
			case 2:
				return 'wt.';
			case 3:
				return 'śr.';
			case 4:
				return 'czw.';
			case 5:
				return 'pt.';
			case 6:
				return 'sob.';
			case 7:
				return 'niedz.';
			default:
				return '';
		}
	};

	return { hour, minutes, day, dayNumber };
};
