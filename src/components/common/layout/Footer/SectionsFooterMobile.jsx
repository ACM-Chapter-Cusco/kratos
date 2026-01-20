"use client";

import React, { useState } from "react";
import LinksFooter from "./LinksFooter";
import TitlesFooter from "./TitlesFooter";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export const SectionsFooterMobile = () => {
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenEvents, setIsOpenEvents] = useState(false);
  const [isOpenTeams, setIsOpenTeams] = useState(false);

  const [isOpen, setIsOpen] = useState("none");

  const linksFooter = [
    {
      id: 1,
      name: "About",
      links: [
        { link: "#", title: "What is ACM?" },
        { link: "#", title: "Visión" },
        { link: "#", title: "Misión" },
        { link: "#", title: "Gallery" },
      ],
    },
    {
      id: 2,
      name: "Events",
      links: [
        { link: "#", title: "Cuscontest" },
        { link: "#", title: "Todos vuelven" },
        { link: "#", title: "Robótica" },
        { link: "#", title: "Icpc" },
      ],
    },
    {
      id: 3,
      name: "Teams",
      links: [
        { link: "#", title: "development" },
        { link: "#", title: "investigation" },
        { link: "#", title: "programming" },
        { link: "#", title: "members" },
      ],
    },
  ];

  const handleClick = (name) => {
    if (isOpen === "none") {
      setIsOpen(name);
    } else {
      if (isOpen !== name) {
        setIsOpen(name);
      } else {
        setIsOpen("none");
      }
    }
  };

  return (
    <div className="flex flex-col flex-wrap items-center justify-between gap-x-40 md:flex-row">
      {linksFooter.map((item) => (
        <div key={item.id} className="w-full">
          <div
            className="flex items-center justify-between border-t-2 border-gray-800 py-5"
            onClick={() => handleClick(item.name)}
          >
            <TitlesFooter title={item.name} />
            {isOpen === item.name && <FaChevronUp size="12px" />}
            {isOpen !== item.name && <FaChevronDown size="12px" />}
          </div>
          <div
            className={`flex flex-col items-center justify-start ${isOpen !== item.name && "hidden"} my-5`}
          >
            {item.links.map((link) => (
              <LinksFooter key={link.title} link={link.link}>
                {link.title}
              </LinksFooter>
            ))}
          </div>{" "}
        </div>
      ))}

      {/* <div>
        <div className="flex items-center gap-5">
          <TitlesFooter title="Teams" />
          {isOpenAbout && <FaChevronUp size="12px" />}
          {!isOpenAbout && <FaChevronDown size="12px" />}
        </div>
        <div
          className={`flex flex-col justify-start ${!isOpenTeams && "hidden"}`}
        >
          <LinksFooter link="#">development</LinksFooter>
          <LinksFooter link="#">investigation</LinksFooter>
          <LinksFooter link="#">programming</LinksFooter>{" "}
          <LinksFooter link="#">members</LinksFooter>{" "}
        </div>
      </div> */}
    </div>
  );
};
