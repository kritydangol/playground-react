import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="inputField"
        placeholder="Enter a Task"
      />
      <button className="inputBtn" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
