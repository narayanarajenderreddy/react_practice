import {useContext} from "react"
import { UserContext } from "./usercontext"


function Profile(){
    const{setUser} = useContext(UserContext);
    console.log("profile rendered");

    return (<>
    <button onClick = {() =>setUser("rajender") }>Change User</button>
    </>)

}

export default Profile;