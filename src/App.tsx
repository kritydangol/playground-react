import React, { useState } from "react";
import "./App.css";
import InputField from "./components/inputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  return (
    <div className="App">
      <h1 className="heading">Tasks</h1>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
