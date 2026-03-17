import {useState} from "react";

function DynamicSkillForm(){

    const[name,setName] = useState("");
    const[skills,setSkills] = useState([""]);

    function handleSkillChange(index,value){
         console.log("index value",index);
        const updated_skills = [...skills];
        updated_skills[index] = value;
        setSkills(updated_skills);
    }

    function addSkill(){
        setSkills([...skills,""]);
    }

    function deleteSkill(index){
        const updatedskills = skills.filter((_,i) => i !== index);
        setSkills(updatedskills);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log({
            name,
            skills
        });

        // console.log("skills list",skills)
    }
    return(<>
    <form onSubmit={handleSubmit}>

      <h2>Dynamic Skills Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Skills</h3>

      {skills.map((skill, index) => (

        <div key={index}>

          <input
            type="text"
            value={skill}
            placeholder="Enter Skill"
            onChange={(e) =>
              handleSkillChange(index, e.target.value)
            }
          />

          <button
            type="button"
            onClick={() => deleteSkill(index)}
          >
            Delete
          </button>

        </div>

      ))}

      <button type="button" onClick={addSkill}>
        Add Skill
      </button>

      <br />

      <button type="submit">
        Submit
      </button>

    </form>
    
    </>)


}

export default DynamicSkillForm;