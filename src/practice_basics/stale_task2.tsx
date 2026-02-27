import {useState} from "react"

function Staleexample(){
    const[count ,setCount] = useState(0);

    const increasewrong = ()=>{
        setCount(count+1);
        setCount(count+1);
    }

    const increasecorrect = () => {
        setCount(prev => prev +1);
        setCount(prev => prev +1);

    }
    return(
    <>
      <h2>Count: {count}</h2>
      <button onClick={increasewrong}>Increase Wrong</button>
      <button onClick={increasecorrect}>Increase Correct</button>
    

    </>)
}

export default Staleexample