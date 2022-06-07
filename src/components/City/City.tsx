import './City.scss';

const City: React.FC<{
	city: string;
	hour: number;
	minutes: string;
	day: string;
}> = ({ city, hour, minutes, day }) => {
	return (
		<div className='city'>
			<h3 className='city__name'>{city}</h3>
			<p className='city__time'>
				{hour}:{minutes} <span className='city__day'>{day}</span>{' '}
			</p>
		</div>
	);
};

export default City;
export {};
