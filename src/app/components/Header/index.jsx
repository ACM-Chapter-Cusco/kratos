"use client";

import DropdownMenu from "./DropdownMenu";
import Navbar from "./Navbar";
import Button from "./Button";
import Logo from "./Logo";

import styles from "./Header.module.css";

import { HiMenuAlt3 } from "react-icons/hi";
import { useState, useEffect } from "react";

import { AnimatePresence, motion, useScroll } from "framer-motion";

const navVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 6.5,
    },
  },
};

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    return scrollY.onChange((current) => {
      // Determinar si estamos haciendo scroll hacia arriba o hacia abajo
      if (current > lastScrollY && current > 150) {
        // Scrolling down & past threshold of 150px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(current);
    });
  }, [scrollY, lastScrollY]);

  const headerVariants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };

  return (
    <>
      {/* Navbar */}
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={headerVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`bg-blue-git/90 fixed top-0 z-50 flex w-full justify-center bg-clip-padding ${styles.blur_backdrop_filter}`}
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
                <HiMenuAlt3 className="text-white-blue mr-5 text-[40px]" />
              </button>
            </div>
          )}
        </div>
      </motion.div>

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
