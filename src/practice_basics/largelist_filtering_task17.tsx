import {useState,useMemo} from "react";

function LargeListFiltering(){
const[search,setSearch] = useState("");
const[toggle,setToggle] = useState(false);
const users = Array.from({length:500},(_,i)=>({
    id:i,
    name:`User${i}`
}))


// const filteredusers = users.filter(user=>
//     user.name.toLowerCase().includes(search.toLowerCase())
// );

//if we dont use  usememo hook here for every toggle filter will run even search value is not changed.

const filteredusers  = useMemo(()=>{
    console.log("use memo filter running...")
   return  users.filter(user=>
    user.name.toLowerCase().includes(search.toLowerCase())
);
},[search])



    return(<>
      <h2>Large List Filter</h2>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search user..."
      />

      <button onClick={() => setToggle(prev => !prev)}>
        Toggle (Unrelated State)
      </button>

      <p>Toggle: {toggle.toString()}</p>

      <ul>
        {filteredusers.slice(0, 10).map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

    
    </>)

}

export default LargeListFiltering;
