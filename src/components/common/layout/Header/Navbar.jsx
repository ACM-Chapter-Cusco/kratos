"use client";

import React, { useState } from "react";
import NavItem from "./NavItem";

import navItems from "@/data/navItems";

const Navbar = () => {
  const [teamsOpen, setTeamsOpen] = useState(false);

  return (
    <>
      <nav className="font-Inter flex gap-x-8">
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
