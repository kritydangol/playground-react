import "./Input.css";

const Input = () => {
  const onClick = (e) => {
    console.log("clicked");
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

export default Input;
