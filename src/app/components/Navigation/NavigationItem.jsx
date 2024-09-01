import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import OptionsBoxNavItem from "./OptionsBoxNavItem";

const NavigationItem = ({ valor, subItems }) => {
  const [itemOpen, setItemOpen] = useState(false);

  return (
    <div className="relative ">
      <a
        href="#"
        className="flex text-xl font-Opensans items-center gap-1 text-white-azul border-b-2 border-azul-git border-opacity-0 hover:border-blue hover:border-opacity-100 transition duration-300"
        onClick={() => setItemOpen(!itemOpen)}
      >
        {valor}
        {subItems && itemOpen && <FaChevronUp size="12px" />}
        {subItems && !itemOpen && <FaChevronDown size="12px" />}
      </a>
      {subItems && (
        <OptionsBoxNavItem opciones={subItems} isVisible={itemOpen} />
      )}
    </div>
  );
};

export default NavigationItem;
