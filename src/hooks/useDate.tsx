import { useEffect, useState } from "react";
let INITIAL_DELAY = (60 - (new Date()).getSeconds()) * 1000;
let CONST_DELAY = 60000;

export const useDate = () => {
    const [date, setDate] = useState(new Date());
    const [delay, setDelay] = useState(INITIAL_DELAY);

    useEffect(()=>{
        const minutesInterval = setInterval(()=>{
            setDate(new Date())
            if(delay !== CONST_DELAY){
                setDelay(CONST_DELAY)
            }
        }, delay);     
        return () => clearInterval(minutesInterval);
    }, [delay]);

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDay();

    return {hour, minutes, seconds, day}
}
