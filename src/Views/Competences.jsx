import React from "react";
import {

  FaProjectDiagram,
} from "react-icons/fa";
import {  BiLogoAdobe   } from "react-icons/bi";
import { competencesDev, competencesGestion, competencesLinguestique } from "../Data/Data";
import { MdOutlineLanguage } from "react-icons/md";

const Competences = () => {
  return (
    <div id="Compétences">
      <div class="flex items-center justify-center flex-col p-4 h-full">
        <header   data-aos="flip-down" class="text-center mx-auto mb-2 lg:px-20">
          <h2
          
            class="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300"
          >
            <span className="uppercase text-blue-600  dark:text-white">Compétences </span>{" "}
          </h2>
          <div class="flex w-32 mt-1 mb-2 overflow-hidden rounded md:mx-auto md:mb-2">
            <div class="flex-1 h-2 bg-blue-400"></div>
            <div class="flex-1 h-2 bg-blue-600"></div>
            <div class="flex-1 h-2 bg-blue-400"></div>
          </div>
        </header>
        <h1 className="text-xl text-blue-600 dark:text-white font-light uppercase mt-5">Compétences en développement</h1>

        <div class="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-2 w-full lg:grid-cols-2 xl:grid-cols-2">
       {competencesDev.map((i)=>{
        return(   <div key={i.id} data-aos="fade-up"   
        data-aos-offset='100'  class=" w-full mx-auto">
              <div class="relative group">
                <div class="relative px-7 py-6 bg-white dark:bg-blue-700 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  {i.icon}
  
                  <div class="space-y-2 w-full">
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium uppercase text-blue-700 dark:text-white">
                        {i.Nom}
                      </span>
                      <span class="text-sm font-medium text-blue-700 dark:text-white">
                        {i.pourcentage}%
                      </span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <hr class={`bg-blue-600 h-2.5 rounded-full dark:bg-white `} width={`${i.pourcentage}%`}/>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>)
       })}
       
          </div>

          <h1 className="text-xl text-blue-600 font-light dark:text-white uppercase mt-5">Modélisation & Conception & Gestion de projet</h1>
        <div class="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-2 w-full lg:grid-cols-2 xl:grid-cols-2">

        {competencesGestion.map((i)=>{
          return( <div  key={i.id} data-aos="fade-up"   
      data-aos-offset='100'  class=" w-full mx-auto">
            <div class="relative group">
              <div class="relative px-7 py-6 bg-white dark:bg-blue-700  ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <FaProjectDiagram class="w-8 h-8 text-purple-600 dark:text-white" />
                <div class="space-y-2 w-full">
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-medium text-blue-700 dark:text-white">
                      {i.Nom}
                    </span>
                    <span class="text-sm font-medium text-blue-700 dark:text-white">
                    {i.pourcentage}%
                    </span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <hr class={`bg-blue-600 h-2.5 rounded-full dark:bg-white `} width={`${i.pourcentage}%`}/>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>)
        }) }
         
        </div>


       
        <h1 className="text-xl text-blue-600 dark:text-white font-light uppercase mt-5">Design</h1>
        <div class="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-1 w-full lg:grid-cols-1 xl:grid-cols-1">

         
          <div data-aos="fade-up"   
      data-aos-offset='100'  class=" w-full mx-auto">
            <div class="relative group">
              <div class="relative px-7 py-6  bg-white dark:bg-blue-700  ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <BiLogoAdobe class="w-8 h-8 text-purple-600  dark:text-white" />
                <div class="space-y-2 w-full">
                  <div class="flex justify-between mb-1">
                    <span class="text-base  font-medium text-blue-700 dark:text-white">
                      ADOBE(Photoshop, Illustrator, FIGMA, CANVA,Indesign )
                    </span>
                    <span class="text-sm font-medium text-blue-700 dark:text-white">
                      55%
                    </span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-600 h-2.5 rounded-full dark:bg-white w-[55%]"></div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <h1 className="text-xl text-blue-600 font-light dark:text-white uppercase mt-5">Compétences linguistique</h1>
        <div class="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-2 w-full lg:grid-cols-2 xl:grid-cols-2">

        {competencesLinguestique.map((i)=>{
          return( <div  key={i.id} data-aos="fade-up"   
      data-aos-offset='100'  class=" w-full mx-auto">
            <div class="relative group">
              <div class="relative flex items-center  px-7 py-6 bg-white dark:bg-blue-700  ring-1 ring-gray-900/5 rounded-lg leading-none   space-x-6">
                <MdOutlineLanguage class="w-8 h-8 text-purple-600 dark:text-white" />
                <div class="space-y-2 w-full">
                  <div class="flex  flex-col mb-1">
                    <span class="text-lg uppercase font-bold  text-blue-700 dark:text-white">
                      {i.Nom}
                    </span>
                    <span class="text-sm font-medium text-blue-700 dark:text-white">
                    {i.pourcentage}
                    </span>
                  </div>
              
                </div>
              </div>
            </div>
          </div>)
        }) }
         
        </div>
      <hr class="h-[1px] my-6 bg-gray-200 border dark:bg-gray-700" />
    </div>
  );
};

export default Competences;
