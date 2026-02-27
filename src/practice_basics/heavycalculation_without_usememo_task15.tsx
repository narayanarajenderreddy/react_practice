import {useState} from "react";

function HeavyCalculation_withoutUseMemo(){
    const[count,setCount] = useState(0);
    const[text,setText] = useState("");

    function heavycalculation(num){
        console.log("heavy calculation started");
        let result = 0;
        for(let i=0;i>=5000000;i++){
            //result = result+num;
            result+=num;

        }
        return result;

    }

     const calculatedValue = heavycalculation(count);
    return (<>
    <h1>count:{count}</h1>
    <h1>calculated value:{calculatedValue}</h1>
    <button onClick= {()=>setCount(count+1)}>Increase Count</button>
    <input value = {text} onChange = {(e)=>setText(e.target.value)} placeholder="type something.."></input> 
    </>)

}

export default HeavyCalculation_withoutUseMemo;