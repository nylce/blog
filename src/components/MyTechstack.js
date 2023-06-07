import React from "react";
import userData from "./data";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin  } from 'react-icons/fa';

export default function MyTechstack() {
  return (
    <section>
       
            <h5 class="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h5>
            <div class="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                class="box"
              />
              
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                class="box"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                class="box"
              />
             
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                class="box"
              />
              <img
                src="https://avatars.githubusercontent.com/u/4542585?s=200&v=4"
                class="box"
              />
            </div>
             {/* Social Links */}
           
            <div class="sociallinks">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <h1 class="slink">   <FaFacebook /> </h1>
                </a>
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                   <h1 class="slink"> <FaTwitter /></h1>
                 
                </a>
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
            <h1 class="slink"> <FaGithub /></h1>
                </a>
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <h1 class="slink"> <FaLinkedin /></h1> 
                </a>
                <a
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                > <h1 class="slink"> <FaInstagram /> </h1>
                </a>
    </div>
   
        
    </section>
  );
}