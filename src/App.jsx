import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/NavBar";
import Aos from "aos";
import {
  MdKeyboardArrowUp,
 
  MdSchool,
  MdSettingsSuggest,
} from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";

import "aos/dist/aos.css";
import { IconButton, Tooltip } from "@material-tailwind/react";
import Education from "./Views/Education";
import Hero from "./Views/Hero";
import Projects from "./Views/Projects";
import Competences from "./Views/Competences";

function ScrollRestoration() {

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return null;
}
function App() {
  const [darkmode, setDarkmode] = React.useState(false);

  Aos.init({
    duration: 1000,
    offset: 100,
  });
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App bg-white dark:bg-gray-900">
      {isActive ? (
        <div class="flex w-8  items-center justify-center flex-col fixed z-10 bottom-4 right-4 overflow-hidden bg-white border divide-x rounded-lg  dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
          <Tooltip content="Accueil" placement="left" className="bg-dark ">
            <IconButton
              variant="text"
              className="hover:bg-gray-600 "
              onClick={() => scrollToSection("top")}
            >
              <MdKeyboardArrowUp className="text-[#0033CC] dark:text-white  " size={25} />
            </IconButton>
          </Tooltip>
          <Tooltip content="Education" placement="left" className="bg-dark ">
            <IconButton
              variant="text"
              className="hover:bg-gray-600 "
              onClick={() => scrollToSection("Education")}
            >
              <MdSchool className="text-[#0033CC] dark:text-white  " size={25} />
            </IconButton>
          </Tooltip>
          <Tooltip content="Compétences" placement="left" className="bg-dark ">
            <IconButton
              variant="text"
              className="hover:bg-gray-600 "
              onClick={() => scrollToSection("Compétences")}
            >
              <MdSettingsSuggest className="text-[#0033CC] dark:text-white  " size={25} />
            </IconButton>
          </Tooltip>
          <Tooltip content="Projets" placement="left" className="bg-dark ">
            <IconButton
              variant="text"
              className="hover:bg-gray-600 "
              onClick={() => scrollToSection("Projects")}
            >
              <FaProjectDiagram className="text-[#0033CC] dark:text-white  " size={25} />
            </IconButton>
          </Tooltip>
       
      
        </div>
      ) : null}
      <ScrollRestoration />

      <Header setDarkmode={setDarkmode} darkmode={darkmode} />
      <Hero />
      <Education />
      <Competences />
      <Projects />
 

      <Footer setDarkmode={setDarkmode} darkmode={darkmode} />
    </div>
  );
}

export default App;
