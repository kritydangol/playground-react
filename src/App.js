import { useState } from "react";
// import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
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

  return (
    <div className="App">
      <Navbar />
      <div className="container body center">
        <h2>Lets Get This &#127838;</h2>
        <Tasks tasks={tasks} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
