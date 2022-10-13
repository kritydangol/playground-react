import "./Tasks.css";
import Task from "./Task/Task";
import Input from "./Input/Input";

const Tasks = ({ tasks }) => {
  return (
    <>
      <Input />

      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
