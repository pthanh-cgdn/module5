import {useState} from "react";

function Counter(){
    const [num,setNum] = useState(0)
    const add = ()=>{
        setNum(prevState => prevState+1)
    }

    return (
        <div>
            Count: {num}
            <button onClick={add}>Add</button>
        </div>
    )
}

export default Counter