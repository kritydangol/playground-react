// import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container body center">
        <h2>Lets Get This &#127838;</h2>
        <Tasks />
      </div>
      <Footer />
    </div>
  );
}

export default App;
