"use client";

import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import OptionsBoxNavItem from "./OptionsBoxNavItem";
import NavigationItem from "./NavigationItem";

const MainNavigation = () => {
  const [teamsOpen, setTeamsOpen] = useState(false);

  const navItems = [
    {
      id: 1,
      valor: "About",
    },
    {
      id: 2,
      valor: "Cuscontest",
    },
    {
      id: 3,
      valor: "Teams",
      subItems: [
        {
          icon: "computer",
          valor: "development",
        },
        {
          icon: "brain",
          valor: "investigation",
        },
        {
          icon: "trophy",
          valor: "programming",
        },
      ],
    },
    {
      id: 4,
      valor: "Events",
    },
    {
      id: 5,
      valor: "Repository",
    },
  ];

  return (
    <>
      <nav className="font-Inter flex gap-x-8">
        {navItems.map((item) => (
          <NavigationItem
            key={item.id}
            valor={item.valor}
            subItems={item.subItems}
          />
        ))}
      </nav>
    </>
  );
};

export default MainNavigation;
