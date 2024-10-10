import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Subitems from "./Subitems";

const NavItem = ({ valor, subItems }) => {
  const [itemOpen, setItemOpen] = useState(false);

  return (
    <div className="relative">
      <a
        href="#"
        className="flex items-center justify-center gap-3 border-b-2 border-azul-git border-opacity-0 font-Opensans text-3xl text-white-azul transition duration-300 hover:border-blue hover:border-opacity-100 md:gap-1 md:text-xl"
        onClick={() => setItemOpen(!itemOpen)}
      >
        {valor}
        {subItems && itemOpen && <FaChevronUp size="12px" />}
        {subItems && !itemOpen && <FaChevronDown size="12px" />}
      </a>
      {itemOpen && subItems && (
        <>
          <Subitems opciones={subItems} isVisible={itemOpen} />
        </>
      )}
    </div>
  );
};

export default NavItem;
