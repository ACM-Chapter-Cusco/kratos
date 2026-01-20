import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Subitems from "./Subitems";

const NavItem = ({ href, valor, subItems }) => {
  const [itemOpen, setItemOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = (e) => {
    if (subItems) {
      e.preventDefault();
      setItemOpen(!itemOpen);
    } else if (pathname === href) {
      e.preventDefault();
    }
  };

  const content = (
    <>
      {valor}
      {subItems && itemOpen && <FaChevronUp size="12px" />}
      {subItems && !itemOpen && <FaChevronDown size="12px" />}
    </>
  );

  return (
    <div className="relative">
      {subItems || href === "#" ? (
        <span
          className="border-blue-git/0 font-Opensans text-white-blue hover:border-blue hover:border-opacity-100 flex cursor-pointer items-center justify-center gap-3 border-b-2 text-3xl transition duration-300 md:gap-1 md:text-xl"
          onClick={handleClick}
        >
          {content}
        </span>
      ) : (
        <Link
          href={href}
          className="border-blue-git/0 font-Opensans text-white-blue hover:border-blue hover:border-opacity-100 flex cursor-pointer items-center justify-center gap-3 border-b-2 text-3xl transition duration-300 md:gap-1 md:text-xl"
          onClick={handleClick}
        >
          {content}
        </Link>
      )}
      {itemOpen && subItems && (
        <Subitems opciones={subItems} isVisible={itemOpen} />
      )}
    </div>
  );
};

export default NavItem;
