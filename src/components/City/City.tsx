import './City.scss';

const City: React.FC<{city: string; hour: number, minutes: number}> = ({city, hour, minutes}) => {
    return(
        <div className="city">
            <h3 className="city__name">{city}</h3>
            <p className="city__time">{hour}:{minutes}</p>
        </div>
    )
}

export default City;
export{};