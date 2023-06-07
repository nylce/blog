import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";


const NavBar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
  
    const location = useLocation();
  
    useEffect(() => {
      setExpandNavbar(false);
    }, [location]);
  
    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
        </button>
      </div>
      <div className="links">
        <h2 class="logo"> nylce. </h2>
        <Link to="/"> Home </Link>
        <Link to="/about-me"> About </Link>
        <Link to="/my-techstack"> TechStack </Link>
      
      </div>
      </div>
   
  );
}

export default NavBar;