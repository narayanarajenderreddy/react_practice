import {useState} from "react"
import React  from "react";

const Child = React.memo(function Child(){
        console.log("Child rendered");
        return <button onClick =  {()=> console.log("child rendering") }>child demooo</button>
    })

function Parent_chid_reactmemo(){

    const[count,setCount] = useState(0);
    return (<>
    <h1>{count}</h1>
    <button onClick = {()=>setCount(prev => prev+1)}>Increase Count</button>
    <Child></Child>
    </>)

}

export default Parent_chid_reactmemo;