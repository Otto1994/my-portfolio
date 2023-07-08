import React from "react";
import { MdSchool } from "react-icons/md";
import { EducationData } from "../Data/Data";

const Education = () => {
  return (
    <div id="Education">
      <div class="flex items-center justify-center flex-col p-4 h-full">
        <header data-aos="flip-down" class="text-center mx-auto mb-12 lg:px-20">
          <h2
           
            class="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300"
          >
            <span className="uppercase text-blue-600">Education </span>{" "}
          </h2>
          <div class="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
            <div class="flex-1 h-2 bg-blue-400"></div>
            <div class="flex-1 h-2 bg-blue-600"></div>
            <div class="flex-1 h-2 bg-blue-400"></div>
          </div>
        </header>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {EducationData.map((i) => {
            return (
              <div
              data-aos="zoom-in"   
      data-aos-offset='100'
                key={i.id}
                class="relative  transform transition duration-300 ease-in-out hover:-translate-y-2 bg-white py-6 px-2 rounded-3xl w-80 my-4 shadow-xl"
              >
                <div
                  class={` text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl ${i.couleur} left-4 -top-6`}
                >
                  <MdSchool size={35} />
                </div>
                <div class="mt-8">
                  <p class="text-xl font-semibold my-2 uppercase">{i.Nom}</p>
                  <div class="flex space-x-2 text-gray-400 text-sm ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p>{i.duree}</p>
                  </div>
                  <div class="flex  text-gray-400 items-center my-3 gap-2  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-xs w-72 text-left   ">
                      {i.etablisement}
                    </p>
                  </div>
                  <div class="border-t "></div>
                  <div class="flex flex-col  items-center">
                    <p class="font-semibold text-base mb-2 uppercase ">
                      Spécialité
                    </p>

                    <p class="font-normal text-base mb-2 text-gray-700 uppercase">
                      {i.specialite}
                    </p>
                  </div>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr class="h-[1px] my-6 bg-gray-200 border dark:bg-gray-700" />
    </div>
  );
};

export default Education;
