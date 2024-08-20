import {useEffect, useState} from "react";

function Timer() {
    const [time, setTime] = useState(10)
    useEffect(() => {
        const timeSetter = setInterval(() => setTime(prevState => prevState > 0 ? prevState - 1 : prevState), 1000);
        if (time===0){
            alert("Time's up!!!")
        }
        return () => {
            clearInterval(timeSetter)
        }
    }, [time]);

    return (
        <div>
            Count down from {time}
        </div>
    )
}

export default Timer