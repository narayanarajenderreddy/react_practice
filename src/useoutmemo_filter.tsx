import {useState} from "react";

function WithOutUsememoFilter(){

    console.log("component rendering");
    const[search,setSearch] = useState("");
    const[toggle,setToggle] = useState(false);

    const users = Array.from({length:1000},(_,i) => ({
        id:i,
        name:`User ${i}`
    }));
    // console.log("user lsit",users[0])

    console.log("fitering running...");
    console.log("Users length:", users.length);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

console.log("Filtered length:", filteredUsers.length);
    return(<>
    <h1>with out usememo</h1>
    <input value = {search} onChange = {(event) =>setSearch(event.target.value) } placeholder = "search user"/>
    <button onClick = {()=>setToggle(prev => !prev )}>Toggle(Unrelated State)</button>
    <p>Toggle State:{toggle.toString()}</p>
    <ul>{filteredUsers.slice(0,5).map(user => (
        <li key = {user.id}>{user.name}</li>
    ))}
    </ul>
    </>
    );
}

export default WithOutUsememoFilter