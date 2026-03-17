import {useState} from "react";
import React  from "react";

const Child = React.memo(function Child(){
        console.log("Child rendered");
        return <h1> i am child component</h1>;
    })

function PreventChildRender(){
    const[count,setCount] = useState(0);

    // const Child = React.memo(function Child(){
    //     console.log("Child rendered");
    //     return <h1> i am child component</h1>;
    // })


    return(<>
    <h1>{count}</h1>
    <button onClick = {() => setCount(prev => prev+1)}>Increase Count</button>
    <Child></Child>
    </>)
}

export default PreventChildRender;

// note:if you dont want to render child component when the prent function loaded plz 
// add child component to outside parent Component.
// react memeo only prevents child render by checking refernece if any changes in props it will reload 
// child Component.

// we should not mention child in parent Component.