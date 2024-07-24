import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
// import Navbar from "./Components/Navbar/Navbar";
import Resume from "./Components/Resume/Resume";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
