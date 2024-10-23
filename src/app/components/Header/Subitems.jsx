import React, { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

const Subitems = ({ opciones, isVisible }) => {
  const ICONS = {
    trophy: (
      <FaTrophy className="transition duration-300 ease-in-out group-hover:text-rojo" />
    ),
    brain: (
      <FaBrain className="transition duration-300 ease-in-out group-hover:text-cyan" />
    ),
    computer: (
      <FaLaptopCode className="transition duration-300 ease-in-out group-hover:text-verde" />
    ),
  };

  return (
    <div
      className={`transform transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } top-[30px] inline-block lg:absolute`}
    >
      <ul className="mt-5 flex flex-col gap-y-2 p-2 text-white-azul lg:mt-0 lg:gap-y-0 lg:rounded-lg lg:border-[2px] lg:border-dark-1 lg:bg-dark-2">
        {opciones.map((opcion) => (
          <li key={opcion.valor}>
            <a
              href="#"
              style={{ minWidth: "min-content" }}
              className="group flex items-center gap-x-3 px-3 py-1 font-Opensans text-[20px] lg:rounded-lg lg:border-[2px] lg:border-dark-2 lg:hover:border-dark-1"
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
