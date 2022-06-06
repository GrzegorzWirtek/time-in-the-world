import './App.css';
import { useLocalStorage, useLocaleStorageType } from './hooks/useLocalStorage'
import Fieldset from './components/Fieldset/Fieldset';
import Header from './components/Header/Header';
import { useState } from 'react';
import Main from './components/Main/Main';

function App() {
  const [state, setState] =  useLocalStorage<useLocaleStorageType>('selected-countries', []);
  const [main, setMain] = useState(false)

  return (
    <div className="App">
      <Header/>
        {main? <Main state={state} setMain={setMain}/> : <Fieldset state={state} setState={setState} setMain={setMain}/>}
    </div>
  );
}

export default App;
