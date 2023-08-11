import React from "react";

const InputField = () => {
  return (
    <form className="input">
      <input
        type="input"
        id="a"
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
