import {useState,useEffect} from "react";

function Debounce(){
    const[search,setSearch] = useState("");
    const[debouncevalue,setDebouncevalue] = useState("");

    useEffect(()=>{
     const timer =  setInterval(()=>{
        setDebouncevalue(search)
        },500);
        return () => {
            clearTimeout(timer)
        };
    },[search]);

    useEffect(()=>{

        if(!debouncevalue) return;
        console.log("Api Call for:",debouncevalue); 

    },[debouncevalue]);
return(<>
<h1>{search}</h1>
<input value = {search} onChange={(e)=>setSearch(e.target.value)}/>
</>);

}

export default Debounce