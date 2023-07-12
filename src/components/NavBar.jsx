import React, { useEffect, useState } from "react";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
import LOGO from "../IMG/LOGO.svg";

export default function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 5 ? setIsActive(true) : setIsActive(false);
    });
  });
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className={`${
        isActive
          ? "bg-white dark:bg-gray-900 fixed w-full  top-0 left-0 border-b border-gray-200 dark:border-gray-600  backdrop-blur-3xl bg-white/80 "
          : " sticky top-0 left-0  w-full bg-white  dark:!bg-navy-900  "
      } w-full z-20 flex justify-between items-center `} >
 
<nav       className={` w-full `}  >
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-2 p-4">
  <a href="/my-portfolio" class="flex items-center">
<img src={LOGO} className="w-12   "   alt="" />  </a>
 

  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
   
      <li>
        <a onClick={() => scrollToSection("top")} class="block  cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Accueil</a>
      </li>
      <li>
        <a onClick={() => scrollToSection("Education")} class="block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Education</a>
      </li>
      <li>
        <a               onClick={() => scrollToSection("Compétences")}
 class="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Compétences</a>
      </li>
      <li>
        <a  onClick={() => scrollToSection("Projects")}  class="block py-2 pl-3 pr-4 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projets</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-blue-500" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-blue-500" />
          )}
        </button>
        {/* mobile nav - hidden on desktop */}
        

    </div>  
    <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          }  fixed z-10 top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
        >
             <div className=' bg-blue-700/100 w-full h-full'>
         <ul className='h-full flex flex-col justify-center items-center gap-y-8'>


     
      <li>
        <a  onClick={() => scrollToSection("top")} class="block py-2 pl-3 pr-4 text-white  cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Accueil</a>
      </li>
      <li>
        <a  onClick={() => scrollToSection("Education")}  class="block py-2 pl-3 pr-4  cursor-pointer text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Education</a>
      </li>
      <li>
        <a  onClick={() => scrollToSection("Compétences")}  class="block py-2 pl-3 pr-4  cursor-pointer text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Compétences</a>
      </li>
      <li>
        <a  onClick={() => scrollToSection("Projects")} class="block cursor-pointer py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projets</a>
      </li>

</ul> </div>
        </div> 
    </div>
   
    
  );
}