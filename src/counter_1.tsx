import {useState} from "react"
import Useeffect_task from "./assets/Useeffect_2";
import Settime from "./assets/timeinterval_3";

function Counter() {
 const [count,setCount] = useState(0);
 function increment(){
  setCount(prev => prev+1);

 }

 function decreament(){
      console.log(count)
  setCount(prev => prev-1);
 }


 function reset(){
    console.log(count)
  setCount(0);
 }
  
  

  return (
    <>
    <h1>{count}</h1>
    <button onClick  = {increment}>increment</button>
    <button onClick  = {decreament}>decrement</button>
    <button onClick  = {reset}>reset</button>
    {/* <Useeffect_task></Useeffect_task> */}
    <Settime></Settime>
    </>
  )
}
export default Counter
