import "./Task.css";

const task = ({ task, onDelete, onClick }) => {
  return (
    <div
      className={task.completed ? "center-div tasks done" : "center-div tasks"}
    >
      <div className={task.completed ? "task done" : "task"}>
        {task.text}
        <i
          className="fa fa-trash-o delete"
          aria-hidden="true"
          onClick={() => onDelete(task.id)}
        ></i>
        <i
          className="fa fa-check complete"
          aria-hidden="true"
          onClick={() => onClick(task.id)}
        ></i>
      </div>
    </div>
  );
};

export default task;
