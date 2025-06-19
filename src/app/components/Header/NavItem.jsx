import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Subitems from "./Subitems";

const NavItem = ({ href, valor, subItems }) => {
  const [itemOpen, setItemOpen] = useState(false);
  console.log("subItems qui", subItems);

  return (
    <div className="relative z-50">
      <a
        href={href}
        className="font-Opensans group text-white-blue flex cursor-pointer flex-col items-center justify-center gap-3 pb-2 text-3xl transition duration-300 md:gap-1 md:text-xl"
        onClick={(e) => {
          if (subItems) {
            e.preventDefault();
            setItemOpen(!itemOpen);
          }
        }}
      >
        <div className="flex items-center gap-3">
          {valor}
          {subItems && itemOpen && <FaChevronUp size="12px" />}
          {subItems && !itemOpen && <FaChevronDown size="12px" />}
        </div>
        <div className="bg-blue/0 group-hover:bg-blue hidden h-[4px] w-8 rounded-3xl transition duration-400 md:block" />
      </a>

      {subItems && itemOpen && (
        <Subitems opciones={subItems} isVisible={itemOpen} />
      )}
    </div>
  );
};

export default NavItem;
