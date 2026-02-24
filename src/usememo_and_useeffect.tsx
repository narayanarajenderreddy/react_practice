import { useEffect,useMemo,useState } from "react";

function Testusememo_Useeffect(){

    const [count,setCount] = useState(0);

    const  doubled_value = useMemo(()=>{
        console.log("calculating doubled value");
        return count*2;   
    },[count]);

    useEffect(()=>{
        console.log("updated count value",count);
    },[count]);

    return (
        <>
        <h1>{doubled_value}</h1>
        <h1>{count}</h1>
        <button onClick = {()=>setCount(prev => prev+1)}>Increment</button>

        </>
    )
}

export default Testusememo_Useeffect