import './Main.scss';
import { useLocaleStorageType } from '../../hooks/useLocalStorage';
import { useDate } from '../../hooks/useDate';
import City from '../City/City';

interface propsType {
	state: useLocaleStorageType | undefined;
	setMain: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main: React.FC<propsType> = ({ state, setMain }) => {
	const { hour, minutes, day, dayNumber } = useDate();
	const cities = state?.map((item) => {
		let cityHour = hour + item.shift;
		if (hour + item.shift >= 24) {
			cityHour = -(24 - (hour + item.shift));
		} else if (hour + item.shift < 0) {
			cityHour = hour + item.shift + 24;
		}
		let dayOfTheWeek = day(parseInt(dayNumber));
		if (hour + item.shift >= 24) {
			dayOfTheWeek = day(parseInt(dayNumber) + 1);
		} else if (hour + item.shift < 0) {
			dayOfTheWeek = day(parseInt(dayNumber) - 1);
		}

		return (
			<City
				key={item.id}
				city={item.city}
				hour={cityHour}
				minutes={minutes}
				day={dayOfTheWeek}
			/>
		);
	});

	return (
		<main className='main'>
			{cities?.length ? (
				cities
			) : (
				<p className='main__no-cities'>Nie wybrano żadnego miasta</p>
			)}
			<button className='main__button' onClick={() => setMain(false)}>
				Wybierz miasta
			</button>
		</main>
	);
};

export default Main;
export {};
