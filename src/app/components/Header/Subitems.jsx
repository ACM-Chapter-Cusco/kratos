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
      } top-[30px] inline-block md:absolute`}
    >
      <ul className="mt-5 flex flex-col gap-y-2 p-2 text-white-azul md:mt-0 md:gap-y-0 md:rounded-lg md:border-[2px] md:border-dark-1 md:bg-dark-2">
        {opciones.map((opcion) => (
          <li key={opcion.valor}>
            <a
              href="#"
              style={{ minWidth: "min-content" }}
              className="group flex items-center gap-x-3 px-3 py-1 font-Opensans text-[20px] md:rounded-md md:border-[2px] md:border-dark-2 md:hover:border-dark-1"
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
