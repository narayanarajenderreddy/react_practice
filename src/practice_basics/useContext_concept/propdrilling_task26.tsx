import {useState} from "react"

function Parent(){

    const[name,setName] = useState("react_practice")

    return(<>
    <h1>{name}</h1>
    <Child childname={name}/>
    </>)

    function Child({childname}) {
        return(<>
        <h1>child:{childname}</h1>
        <GrandChild childname={childname}/>
        </>
    )
    }

    function GrandChild({childname}) {
        return(<>
        <h1>GrandChild:{childname}</h1>
        </>)
    }


    
}

export default Parent;

