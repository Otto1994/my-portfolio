import { useEffect, useState } from "react";
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
import Feature from "./Views/Feature";
import Competences from "./Views/Competences";
import Slider from "./components/Carousel";

function ScrollRestoration() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return null;
}
function App() {
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
    <div className="App">
      {isActive ? (
        <div class="flex w-8  items-center justify-center flex-col fixed z-10 bottom-4 right-4 overflow-hidden bg-white border divide-x rounded-lg  dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
          <Tooltip content="Accueil" placement="left" className="bg-dark ">
            <IconButton
              variant="text"
              className="hover:bg-gray-600 "
              onClick={() => scrollToSection("top")}
            >
              <MdKeyboardArrowUp className="text-dark " size={25} />
            </IconButton>
          </Tooltip>
          <Tooltip content="Education" placement="left" className="bg-dark ">
            <IconButton
              variant="text"
              className="hover:bg-gray-600 "
              onClick={() => scrollToSection("Education")}
            >
              <MdSchool className="text-dark  " size={25} />
            </IconButton>
          </Tooltip>
          <Tooltip content="Compétences" placement="left" className="bg-dark ">
            <IconButton
              variant="text"
              className="hover:bg-gray-600 "
              onClick={() => scrollToSection("Compétences")}
            >
              <MdSettingsSuggest className="text-dark  " size={25} />
            </IconButton>
          </Tooltip>
          <Tooltip content="Projets" placement="left" className="bg-dark ">
            <IconButton
              variant="text"
              className="hover:bg-gray-600 "
              onClick={() => scrollToSection("Projects")}
            >
              <FaProjectDiagram className="text-dark  " size={25} />
            </IconButton>
          </Tooltip>
       
      
        </div>
      ) : null}
      <ScrollRestoration />

      <Header />
      <Hero />
      <Education />
      <Competences />
      <Projects />
      {/* <Slider /> */}

      <Footer />
    </div>
  );
}

export default App;
