// import './App.css';
// import {Routes, Route} from 'react-router-dom';
// import HomePage from './components/HomePage';
// import AboutMe from './components/AboutMe';
// import MyTechstack from './components/MyTechstack';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about-me" element={<AboutMe />} />
//         <Route path="/my-techstack" element={<MyTechstack />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import NavBar from './components/NavBar';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// import HomePage from "./components/HomePage";
// import AboutMe from "./components/AboutMe";
// import MyTechstack from "./components/MyTechstack";

// const App = () => {
//   return (
//     <>
    
   
//       <NavBar />
//       <Router> 
//       <Switch>
//   <Route path='/' component={HomePage} exact> <HomePage /> </Route>
//   <Route path='/AboutMe' component={AboutMe} exact> <AboutMe /> </Route>
//   <Route path='/MyTechstack' component={MyTechstack} exact> <MyTechstack /> </Route>

//   </Switch>

//     </Router>


//     </>
//   )
// }

// export default App;

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