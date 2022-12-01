import { useState } from "react";
// import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Input from "./components/Tasks/Input/Input";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Complete Learning React",
      completed: false,
    },
    {
      id: 2,
      text: "Get the Bread",
      completed: false,
    },
    {
      id: 3,
      text: "Say Hello to the World",
      completed: true,
    },
  ]);

  // Delete Tasks

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    // console.log(id);
  };

  // Toggle completed
  const completed = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container body center">
        <h2>Lets Get This &#127838;</h2>

        <Input />

        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onClick={completed} />
        ) : (
          "Add Ingredients, Let's bake that bread."
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
