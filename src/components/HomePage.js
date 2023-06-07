// import React from "react";

// const HomePage = () => {
//     return (

// <>
//     <h1>Hello, Welcome to my blog</h1>

//     <p>
//         djkshjksdskjdkls
//     </p>
    
    
//     </>

//     )
// }

// export default HomePage;

import React from "react";
import "./Home.css";
import logo from "./pic.jpg";


const HomePage = () => {
  return (
    
<div class="welcome"><h4>Hi.</h4> 
    <div class="home" >
          
    <img src={logo} alt="logo" class="img"
          />
    
 
    </div>
    </div>


  );
}

export default HomePage;