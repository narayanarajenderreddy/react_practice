import { useState,useEffect } from "react";

function Settime(){
    const [time,counttime] = useState(0);
    const [running,setRunning] = useState(false);

    useEffect(()=>{
        console.log("running:",running);
        let interval:any;
        if(running === true){
            interval = setInterval(()=>{
                counttime(prev => prev+1);
            },3000)
        }
        return () => {
            clearInterval(interval);
        };

    },[running]);

    useEffect(()=>{
        console.log("time updated:",time);

    },[time]);
    return (
        <>
        <h1>{time}</h1>
        <button onClick={()=>setRunning(true)}>Start</button>
        <button onClick={()=>setRunning(false)}>Stop</button>
        </>
    )
    
}

export default Settime