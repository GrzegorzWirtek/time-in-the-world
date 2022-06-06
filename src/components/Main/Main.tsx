import './Main.scss'
import { useLocaleStorageType } from '../../hooks/useLocalStorage';
import { useDate } from '../../hooks/useDate';
import City from '../City/City';

export interface propsType {
    state: useLocaleStorageType | undefined;
    setMain: React.Dispatch<React.SetStateAction<boolean>>
}

const Main:React.FC<propsType> = ({state, setMain}) => {
    const { hour, minutes } = useDate()
    const cities = state?.map(item=>{
        const cityHour = hour + item.shift <= 24 ? hour + item.shift : -(24 - (hour + item.shift))
        return <City key={item.id} city={item.city} hour={cityHour} minutes={minutes}/>     
    })

    return (
        <main className="main">
            {cities}
            <button className="main__button" onClick={() => setMain(false)}>Wybierz miasta</button>
        </main>
    )
}

export default Main;
export{};