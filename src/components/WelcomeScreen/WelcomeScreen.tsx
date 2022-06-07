import './WelcomeScreen.scss';

interface propsType {
	setMain: React.Dispatch<React.SetStateAction<boolean>>;
	setFirstVisit: React.Dispatch<React.SetStateAction<boolean>>;
}

const WelcomeScreen: React.FC<propsType> = ({ setMain, setFirstVisit }) => {
	const handleClick = () => {
		setMain(false);
		setFirstVisit(false);
	};

	return (
		<article className='welcome'>
			<h2 className='welcome__title'>Wybierz interesujące Cię miasta</h2>
			<button className='welcome__button' onClick={handleClick}>
				Wybierz
			</button>
		</article>
	);
};

export default WelcomeScreen;
export {};
