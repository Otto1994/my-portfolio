import React from 'react'
import { ProjectData } from '../Data/Data'
import Slider from '../components/Carousel'

const Projects = () => {
  return (
    <div id='Projects'>
<div class="flex items-center justify-center flex-col p-4 h-full mb-16">
<header class="text-center mx-auto  lg:px-20">

             
             <h2  data-aos="flip-down" class="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
 <span className='uppercase text-blue-600'>Projets </span>               </h2>
             <div class="flex w-32 mt-1 mb-2 overflow-hidden rounded md:mx-auto md:mb-2">
                 <div class="flex-1 h-2 bg-blue-400">
                 </div>
                 <div class="flex-1 h-2 bg-blue-600">
                 </div>
                 <div class="flex-1 h-2 bg-blue-400">
                 </div>
             </div>
 
        </header>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
   


   

     
{ProjectData.map((i)=>{
  return(    <div key={i.id} data-aos="zoom-in"   
  data-aos-offset='100'  class="w-80 mt-4 m-auto lg:mt-16 max-w-sm ">
<Slider data={i.images} /> 
    <div class="bg-white shadow-2xl rounded-b-3xl h-40 w-80">
      <h2 class="text-center text-gray-800 text-2xl font-bold uppercase pt-2">{i.Nom}</h2>
      <div class="w-5/6 m-auto">
        <p class="text-justify text-xs text-gray-500 mt-1 h-16">{i.desc}</p>
      </div>
   
      <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-2  p-1 hover:bg-indigo-500 rounded-lg  text-white text-center shadow-xl shadow-bg-blue-700">
        <span class="lg:text-base text-base font-bold my-2 mb-2">{i.type}</span>
      </div>
     
    </div></div>)
})}
      
    </div>
   
</div></div>
  )
}

export default Projects