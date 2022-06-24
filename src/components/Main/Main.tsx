import './Main.scss';
import { useLocaleStorageType } from '../../hooks/useLocalStorage';
import { useDate } from '../../hooks/useDate';
import City from '../City/City';
import { specifyHourAndDayNumber } from '../../functions/specifyHourAndDayNumber';

interface propsType {
	state: useLocaleStorageType | undefined;
	setMain: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main: React.FC<propsType> = ({ state, setMain }) => {
	const { hour, minutes, day, dayNumber } = useDate();

	const cities = state?.map((item) => {
		const { cityHour, currentDayNumber } = specifyHourAndDayNumber(
			item,
			hour,
			dayNumber,
		);
		const dayOfTheWeek = day(currentDayNumber);

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
