import "./Task.css";

const task = ({ task, onDelete }) => {
  return (
    <div
      className={task.completed ? "center-div tasks done" : "center-div tasks"}
    >
      <div className={task.completed ? "task done" : "task"}>
        {task.text}
        <i
          className="fa fa-times delete"
          aria-hidden="true"
          onClick={() => onDelete(task.id)}
        ></i>
      </div>
    </div>
  );
};

export default task;
