import {useState,useMemo} from  "react";
import { UserContext } from "./userContext";

function UserProvider({children}){

    const [user,setUser] = useState("rajender");

    const value = useMemo(()=>{
        return{user,setUser};

    },[user])

    console.log("user provider rendered");
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider;