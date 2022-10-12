import { useState } from "react";
import "./Tasks.css";
import Input from "./Input/Input";

const Tasks = () => {

  const [tasks, setTasks]= useState([
    {
      id: 1,
      text: "Complete Learning React",
      completed: false,
    },
    {
      id: 2,
      text: "Get the Bread",
      completed: true,
    },
  ])

  return (
    <>
      <Input />
      {tasks.map((task) => (
        <div className="center-div tasks" key={task.id}>
          <p className="task">{task.text}</p>
        </div>
      ))}
    </>
  );
};

export default Tasks;
