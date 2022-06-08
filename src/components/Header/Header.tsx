import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<img className='header__logo' src='logo192.png' alt='' />
				<h1 className='header__title'>Czas na świecie</h1>
			</div>
		</header>
	);
};

export default Header;
export {};
