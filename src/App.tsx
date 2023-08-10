import React from "react";
import "./App.css";
import InputField from "./components/inputField";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="heading">Tasks</h1>
      <InputField />
    </div>
  );
};

export default App;
