import {useState,useEffect} from "react";

function Infinite_UseEffect (){
    console.log("component loaded");
    const[count,setCount] = useState(0);
    useEffect(()=>{
        setCount(count+1)
    },[count])
    return (<>
    <h1>{count}</h1>
    </>)
}

export default Infinite_UseEffect;