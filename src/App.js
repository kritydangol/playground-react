// import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="">
        <Navbar />
        <div className="container body">
          <article>
            <h1>Lets Get This Bread </h1>
            <Tasks />
          </article>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
