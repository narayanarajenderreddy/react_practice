import {useState} from "react";

function DynamicForm(){
    const[phones,setPhones] = useState([{
        number:""
    }]);

    function handleChange(index,value){
        const updatedphones = [...phones];
        updatedphones[index].number = value;
        setPhones(updatedphones);
    }

    function addPhone(){
        setPhones([
            ...phones,
            {number:""}
        ]);
    }


    function deletePhone(index){
        const updatedphones = phones.filter((_,i) => i !== index);
        setPhones(updatedphones);

    }   
    
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(phones);
    }

    return(
    <>
        <form onSubmit = {handleSubmit}>

            {phones.map((phone, index) => (

                <div key={index}>

                <input
                    type="text"
                    placeholder="Enter mobile number"
                    value={phone.number}
                    onChange={(e) =>
                    handleChange(index, e.target.value)
                    }
                />

                <button type="button" onClick={() => deletePhone(index)}>
                    Delete
                </button>

                </div>

            ))}

            <button type="button" onClick={addPhone}>
                Add Number
            </button>

            <button type="submit">
                Submit
            </button>
        </form>
    </>);
}


export default DynamicForm;