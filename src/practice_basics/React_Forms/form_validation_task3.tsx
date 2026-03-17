import {useState} from "react";

function Formvalidation(){

    const[formData,setFormDate] = useState([{
        name:"",
        email:"",
        password:""
    }]);

    const[errors,setErrors] = useState({});

    function handleChange(event){
        const{name,value} = event.target;
        setFormDate(prev => ({
            ...prev,
            [name]:value

        }));

    }


    function validate(){
        const newErrors = {};

        if(!formData.name){
            newErrors.name = "Name is required";

        }
        if(!formData.email.includes("@")){
            newErrors.email = "Invalid email format";

        }

        if(formData.password.length<6){
            newErrors.password = "password must be 6 characters"
        }

        return newErrors;
    }


    function handleSubmit(e){
        e.preventDefault()
        const validationErrors = validate()
        console.log("validation errors:",validationErrors)
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        }else{
            console.log("Form submitted:",formData);
            setErrors({});

        }
    }
    return(<>

    <form onSubmit={handleSubmit}>

      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <p>{errors.name}</p>
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>
      </div>

      <button type="submit">Submit</button>

    </form>
    </>)
}

export default Formvalidation;