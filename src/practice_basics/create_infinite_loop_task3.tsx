import {useState} from "react";

function Infinite_Loop(){
    const[count,setCount] = useState(0);
    const inloop = () => {
        setInterval(()=>{
            setCount(count+1)
            console.log("continue loop:",count);
        },1000)
    }
    return (<>
    <h1>{count}</h1>
    <button onClick = {inloop}>continue_loop</button>
    </>)
}

export default Infinite_Loop