import React, { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

const Subitems = ({ opciones, isVisible }) => {
  const ICONS = {
    trophy: (
      <FaTrophy className="group-hover:text-icpc transition duration-300 ease-in-out" />
    ),
    brain: (
      <FaBrain className="group-hover:text-ai transition duration-300 ease-in-out" />
    ),
    computer: (
      <FaLaptopCode className="group-hover:text-dev transition duration-300 ease-in-out" />
    ),
  };

  return (
    <div
      className={`transform transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } top-[30px] inline-block lg:absolute`}
    >
      <ul className="text-white-blue lg:border-dark-1 lg:bg-dark-2 mt-5 flex flex-col gap-y-2 p-2 lg:mt-0 lg:gap-y-0 lg:rounded-lg lg:border-[2px]">
        {opciones.map((opcion) => (
          <li key={opcion.valor}>
            <a
              href="#"
              style={{ minWidth: "min-content" }}
              className="group font-Opensans lg:border-dark-2 lg:hover:border-dark-1 flex items-center gap-x-3 px-3 py-1 text-[20px] lg:rounded-lg lg:border-[2px]"
            >
              {ICONS[opcion.icon]}
              <p>{opcion.valor}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subitems;
