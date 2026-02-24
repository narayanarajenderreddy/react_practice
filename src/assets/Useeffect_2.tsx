import { useState,useEffect } from "react";

function Useeffect_task (){

    const[count,Setcount] = useState(0);
    useEffect(()=>{
        console.log("loading after component")
    })

    useEffect(()=>{
        console.log("when the state variable  is loaded")
    },[count])

    useEffect(()=>{
        console.log("single time loading because we are givin empty dependency")
    },[])

    console.log("this is  from direct componenet to check which one is  loading first")
    return (
        <>
        <h1>{count}</h1>
        <button onClick = {()=>{Setcount(prev => prev+1)}}>increment</button>
        </>
    )
}

export default Useeffect_task;