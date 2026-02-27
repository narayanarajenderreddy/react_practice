import {useState,useEffect} from "react"

function ObjectDependencyTrap(){
    const[count,setCount] = useState(0);
   const userdetails = {
        "id":1,
        "name":"raja",
        "height":5.11
    };

    useEffect(()=>{
        console.log("Effect is running");
    },[userdetails])
    return (<>
    <h1>{count}</h1>
    <button onClick = {()=>setCount(count+1)}>Increase count</button>
    </>);
}

export default ObjectDependencyTrap;

//note:here when the state variable is change component will change even though userdetails state variable not changed.
//when the component run it will create new userdetails object with new reference
//because of this reason useeffect will run.

//if you dont want to create new object  reference for every render plz mention userdetails obj outside the function.