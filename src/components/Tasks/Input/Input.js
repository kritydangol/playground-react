import "./Input.css";
import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  const [complete, setComplete] = useState(false);

  return (
    <form>
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
        // onClick={onClick}
        className="button task-btn"
        type="submit"
        value="Add"
      />
    </form>
  );
};

export default Input;
