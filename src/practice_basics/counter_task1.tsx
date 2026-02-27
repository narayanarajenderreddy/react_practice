import {useState,useRef} from "react";

function Counter () {
    const[count,setCount] = useState(0);
    const renderCount = useRef(0);


    function addcount() {
        console.log(count)
        setCount(prev => prev+1);
    }

    renderCount.current++;

    function decreasecount(){
        console.log(count)
        setCount(prev => prev-1);
    }

    function doubleincrement(){
        console.log(count)
        setCount(prev => prev+1);
        setCount(prev => prev+1);
    }

    function resetcount() {
        console.log(count)
        setCount(0);
    }
    return (
        <>
        <h1>count:{count}</h1>
        <h3>Render Count: {renderCount.current}</h3>
        <button onClick = {addcount}>increment</button>
        <button onClick = {doubleincrement}>doubeincrement</button>
        <button onClick = {decreasecount}>decrement</button>
        <button onClick = {resetcount}>Reset</button>
        </>
    )
}

export default Counter;