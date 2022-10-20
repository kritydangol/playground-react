import "./Task.css";

const task = ({ task }) => {
  return (
    <div
      className={task.completed ? "center-div tasks done" : "center-div tasks"}
    >
      <div className={task.completed ? "task done" : "task"}>
        {task.text}
        <i class="fa fa-times delete" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default task;
