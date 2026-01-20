import React from "react";
import { FaTrophy } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

const Subitems = ({ opciones, isVisible }) => {
  const getNavIcon = (iconName) => {
    switch (iconName) {
      case "trophy":
        return (
          <FaTrophy className="group-hover:text-icpc transition duration-300 ease-in-out" />
        );
      case "brain":
        return (
          <FaBrain className="group-hover:text-ai transition duration-300 ease-in-out" />
        );
      case "computer":
        return (
          <FaLaptopCode className="group-hover:text-dev transition duration-300 ease-in-out" />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative top-full left-0 w-48 rounded-md py-2 shadow-xl transition-all duration-300 md:absolute md:bg-[#0F1317] ${
        isVisible
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible -translate-y-2 opacity-0"
      }`}
    >
      {opciones.map((opcion, index) => (
        <a
          key={index}
          href={opcion.href}
          className="text-white-blue group mx-2 flex items-center gap-2 rounded-lg px-4 py-2 max-md:text-lg md:hover:bg-[#1a1f24]"
        >
          {getNavIcon(opcion.icon)}
          <span>{opcion.valor}</span>
        </a>
      ))}
    </div>
  );
};

export default Subitems;
