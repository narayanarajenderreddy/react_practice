import {useState,useEffect} from "react";

function RaceCondition(){
    const[search,setSearch] = useState("");
    const[result,setResult] = useState("");

    useEffect(() => {
    if (!search) return;

    const delay = Math.random() * 2000;

   const timer =  setTimeout(() => {
      setResult(`Result for: ${search}`);
      console.log("Fetched:", search);
    }, delay);

    return () => {
    clearTimeout(timer); // ✅ cancel previous timeout
  };

  }, [search]);
    
    return(<>

     <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type fast..."
      />
      <p>{result}</p>
    

    </>)
}

export default RaceCondition