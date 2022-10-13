import './Task.css'

const task = ({ task }) => {
  return (
    <div
      className={task.completed ? "center-div tasks done" : "center-div tasks"}
    >
      <p className={task.completed ? "task done" : "task"}>
        {task.text}
        {/* My Task */}
      </p>
    </div>
  );
};

export default task;
