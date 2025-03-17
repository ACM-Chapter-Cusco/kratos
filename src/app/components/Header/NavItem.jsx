import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Subitems from "./Subitems";

const NavItem = ({ href, valor, subItems }) => {
  const [itemOpen, setItemOpen] = useState(false);

  return (
    <div className="relative">
      <a
        href={href}
        className="border-blue-git/0 font-Opensans text-white-blue hover:border-blue hover:border-opacity-100 flex items-center justify-center gap-3 border-b-2 text-3xl transition duration-300 md:gap-1 md:text-xl"
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
