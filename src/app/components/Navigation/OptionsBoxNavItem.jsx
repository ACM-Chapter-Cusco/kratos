import React, { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

const OptionsBoxNavItem = ({ opciones, isVisible }) => {
  const ICONS = {
    trophy: (
      <FaTrophy className="group-hover:text-rojo transition ease-in-out duration-300" />
    ),
    brain: (
      <FaBrain className="group-hover:text-cyan transition ease-in-out duration-300" />
    ),
    computer: (
      <FaLaptopCode className="group-hover:text-verde transition ease-in-out duration-300" />
    ),
  };

  return (
    <div
      className={`transition-opacity duration-700 transform ${
        isVisible ? "opacity-100" : "opacity-0"
      } inline-block absolute top-[30px]`}
    >
      <nav className="rounded-lg bg-dark-2 border-[2px] border-dark-1 text-white-azul flex flex-col p-2">
        {opciones.map((opcion) => (
          <a
            href="#"
            key={opcion}
            style={{ minWidth: "min-content" }}
            className="group px-3 py-1 text-[20px] font-Opensans rounded-md border-[2px] border-dark-2 hover:border-dark-1 gap-x-3 flex items-center"
          >
            {ICONS[opcion.icon]}
            <p>{opcion.valor}</p>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default OptionsBoxNavItem;
