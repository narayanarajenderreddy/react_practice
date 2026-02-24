import { useState} from "react";

function Todolist(){
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if(task.trim() === "")
            return ;
        const newTask = {
            id:Date.now(),
            name:task
        };

        setTasks(prev => [...prev,newTask]);
        setTask("");
    };

    const deleteTask = (id) => {
    setTasks(prev => prev.filter(item => item.id !== id));
  };

    return (
    <>
      <h2>Todo List</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <h4>Total Tasks: {tasks.length}</h4>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(item => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => deleteTask(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
    
}

export default Todolist