import {useState,useEffect} from "react";

function Missing_Dependency(){
    const[search,setSearch] = useState("");
    const[result,setResult] = useState("");

    useEffect(()=>{
        console.log("use effect started")
        setResult(`your searched vaue=${search}`)

    },[search])
    //if i not mentioned search state value in dependency array always results will be empty.




    return(<>
    <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type something"
      />
      <p>{result}</p>

    
    </>)

}

export default Missing_Dependency;