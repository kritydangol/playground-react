import "./Tasks.css";

const Tasks = () => {
  const onClick = (e) => {
    console.log("")
  };
  return (
    <div>
      <input className="textbar taskbar" type="text" placeholder="Add Task" />
      <input
        onClick={onClick}
        className="button task-btn"
        type="submit"
        value="Add"
      />
    </div>
  );
};

export default Tasks;
