"use client";

import DropdownMenu from "./DropdownMenu";
import Navbar from "./Navbar";
import Button from "./Button";
import Logo from "./Logo";

import styles from "./Header.module.css";

import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 z-50 flex w-full justify-center bg-azul-git bg-opacity-80 bg-clip-padding ${styles.blur_backdrop_filter}`}
      >
        {/* div to specify the width of the menu */}

        <div className="w-pantalla">
          {/* Nav on desktop */}
          <div className="hidden items-center justify-between p-3 py-8 lg:flex">
            <Logo />
            <Navbar />
            <Button type="secundary">Join</Button>
          </div>

          {/* Nav on mobile closed */}
          {!isToggleOpen && (
            <div className="flex w-full items-center justify-between p-3 py-8 lg:hidden">
              <Logo />
              <button onClick={() => setIsToggleOpen(true)}>
                <HiMenuAlt3 size="30px" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* displayed drop-down menu on mobile */}
      <AnimatePresence>
        {isToggleOpen && (
          <DropdownMenu closeToggle={() => setIsToggleOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
