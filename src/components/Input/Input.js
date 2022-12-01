import "./Input.css";
import { useState } from "react";

const Input = ({onAdd}) => {
  const [text, setText] = useState("");
  const [complete, setComplete] = useState(false);

  const onSubmit=(e)=>{
    e.preventDefault();

    if(!text){
      alert('Please add a task!')
      return
    }

    onAdd({text, complete})
    
    setText('')
    setComplete(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        className="textbar taskbar"
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* <input
        type="checkbox"
        value={complete}
        onChange={(e) => setComplete(e.currentTarget.checked)}
      /> */}
      <input
        className="button task-btn"
        type="submit"
        value="Add"
      />
    </form>
  );
};

export default Input;
