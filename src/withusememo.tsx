import {useState,useMemo} from "react"

function WithUseMemo(){
    console.log("component rendered");

    const[search, setSearch]  = useState("");
    const[toggle,SetToggle] = useState(false);

    const users = Array.from({length:1000},(_,i)=>({
        id:i,
        name:`User ${i}`
    }));

    const filterUsers = useMemo(()=>{
        console.log("filter running");
        return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

    },[search]);
    return (<>
    <h2>With useMemo</h2>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search user"
      />

      <button onClick={() => SetToggle(prev => !prev)}>
        Toggle (Unrelated State)
      </button>

      <p>Toggle State: {toggle.toString()}</p>

      <ul>
        {filterUsers.slice(0, 5).map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

    </>)

}

export default WithUseMemo;