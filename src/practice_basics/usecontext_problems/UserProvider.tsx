import {useState} from "react";
import { UserContext } from "./usercontext";

function UserProvider({children}){
    console.log("provider_children:", children);

    const[user,setUser] = useState("raj");

    return (
        <UserContext.Provider value = {{user,setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;