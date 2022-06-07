import './App.scss';
import { useLocalStorage, useLocaleStorageType } from './hooks/useLocalStorage';
import Fieldset from './components/Fieldset/Fieldset';
import Header from './components/Header/Header';
import { useState } from 'react';
import Main from './components/Main/Main';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';

function App() {
	const [state, setState] = useLocalStorage<useLocaleStorageType>(
		'selected-countries',
		[],
	);
	const [main, setMain] = useState(true);
	const [firstVisit, setFirstVisit] = useState(true);

	const personalised = main ? (
		<Main state={state} setMain={setMain} />
	) : (
		<Fieldset state={state} setState={setState} setMain={setMain} />
	);
	const content =
		state?.length || !firstVisit ? (
			personalised
		) : (
			<WelcomeScreen setMain={setMain} setFirstVisit={setFirstVisit} />
		);

	return (
		<div className='App'>
			<Header />
			{content}
		</div>
	);
}

export default App;
