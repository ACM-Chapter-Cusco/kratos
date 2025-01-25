"use client";

import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import OptionsBoxNavItem from "./Subitems";
import NavItem from "./NavItem";

import navItems from "./navItems";

const Navbar = () => {
  const [teamsOpen, setTeamsOpen] = useState(false);

  return (
    <>
      <nav className="flex gap-x-8 font-Inter">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            href={item.href}
            valor={item.valor}
            subItems={item.subItems}
          />
        ))}
      </nav>
    </>
  );
};

export default Navbar;
