import {useState} from "react";

// var count = 0;

function ControlledForm(){
    const[formData,setFormData] = useState({
        name:"",
        email:"",
        password:""
    });


    function handleChange(event){
        console.log("event object",event.target);
        const{name,value} = event.target;
        setFormData(prev => ({
            ...prev,
            [name]:value
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);

    }

    return(<>
    <form onSubmit = {handleSubmit}>
        <input type = "text" name = "name" value = {formData.name} onChange = {handleChange} placeholder = "enter your name"/><br/>
        <input type = "email" name = "email" value = {formData.email} onChange = {handleChange} placeholder = "enter your email"/><br/>
        <input type = "password" name = "password" value = {formData.password} onChange = {handleChange} placeholder = "enter your password"/><br/>
        <button type = "submit">Submit</button>
    </form>
    </>);
}

export default ControlledForm;