
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import MyTechstack from "./components/MyTechstack";

const App = () => {
  return (
    <div className="App">
  
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-techstack" element={<MyTechstack />} />
        </Routes>

    
    </div>
  );
}

export default App;