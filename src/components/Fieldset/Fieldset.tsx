import './Fieldset.scss';
import CITIES from '../../assets/cities';
import { useState } from 'react';
import { useLocaleStorageType } from '../../hooks/useLocalStorage';
import { useDate } from '../../hooks/useDate';

const TIMEOUT_DELAY = 1000;

interface propsType {
	state: useLocaleStorageType | undefined;
	setState: React.Dispatch<
		React.SetStateAction<useLocaleStorageType | undefined>
	>;
	setMain: React.Dispatch<React.SetStateAction<boolean>>;
}

const Fieldset: React.FC<propsType> = ({ state, setState, setMain }) => {
	const currentState = state ? state.map((item) => item.id) : [];
	const [checked, setChecked] = useState<number[]>(currentState);
	const [info, setInfo] = useState(false);
	const { hour, minutes, day, dayNumber } = useDate();

	const choosenCities = checked.map((item) => (
		<li key={item} className='fieldset__chosen-li'>
			{CITIES[item - 1].city}
		</li>
	));

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
		//ustalenie czy checkbox jest zaznaczony
		const index = checked.indexOf(id);
		//jeśli jest zaznaczony i tablica nie przekracza 5 dodaj zaznaczenie, w przeciwnym razie wyświetl info lub usuń
		if (index === -1) {
			if (checked.length < 5) {
				setChecked((prev) => [...prev, id]);
			} else {
				setInfo(true);
				setTimeout(() => {
					setInfo(false);
				}, TIMEOUT_DELAY);
			}
		} else {
			setChecked(checked.filter((item) => item !== id));
		}
	};

	const handleSubmit = () => {
		const checkedCities = CITIES.filter(
			(item) => checked.indexOf(item.id) !== -1,
		);
		setState(checkedCities);
		setMain(true);
	};

	const cities = CITIES.map((item) => {
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
			<div key={item.id} className='fieldset__wrapper'>
				<input
					className='fieldset__input'
					type='checkbox'
					id={item.city}
					onChange={(e) => handleChange(e, item.id)}
					checked={checked.includes(item.id) ? true : false}
				/>
				<label className='fieldset__label' htmlFor={item.city}>
					{item.city}
				</label>
				<p className='fieldset__time'>
					{cityHour}:{minutes}{' '}
					<span className='fieldset__day'>{dayOfTheWeek}</span>{' '}
				</p>
			</div>
		);
	});

	return (
		<fieldset className='fieldset'>
			{info && <p className='fieldset__info'>Wybrano maksymalną liczbę</p>}
			<p className='fieldset__title'>Wybierz do pięciu miast</p>
			{cities}
			<div className='fieldset__button-wrapper'>
				<button className='fieldset__button' onClick={handleSubmit}>
					Zatwierdź
				</button>
			</div>
			<ul className='fieldset__chosen'>{choosenCities}</ul>
		</fieldset>
	);
};

export default Fieldset;
export {};
