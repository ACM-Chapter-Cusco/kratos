import React from "react";

import navItems from "./navItems";
import Logo from "./Logo";
import styles from "./Header.module.css";

import { IoClose } from "react-icons/io5";
import Button from "./Button";

import { delay, motion, stagger } from "framer-motion";
import Link from "next/link";
import NavigationItem from "./NavItem";

// defining the variants for animations
const menuVars = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.3,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: [0.12, 0, 0.36, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const DropdownMenu = ({ closeToggle }) => {
  return (
    <motion.div
      className={`fixed z-[60] w-full origin-top shadow-xl lg:hidden ${styles.blur_backdrop_filter}`}
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={`rounded-b-3xl bg-azul-git pb-20 opacity-[0.98]`}>
        {/* logo y cerrar  */}
        <div className="flex items-center justify-between p-3 py-8">
          <Logo />
          <button onClick={closeToggle}>
            <IoClose size="40px" />
          </button>
        </div>

        <motion.div
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
          className="mt-9 flex flex-col items-center justify-center gap-y-10"
        >
          {/* opciones */}
          {navItems.map((item) => (
            <div className="overflow-hidden" key={item.id}>
              <MobileNavLink item={item} />
            </div>
          ))}

          {/* boton */}
          <div className="mt-8 w-[80%] overflow-hidden">
            <motion.div variants={mobileLinkVars}>
              <Button type="secundary" className="mx-auto w-full text-3xl">
                Join
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DropdownMenu;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.3,
    },
  },

  open: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const MobileNavLink = ({ item }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      // initial="initial"
      // animate="open"
      className="font-Inter text-3xl font-medium"
    >
      <NavigationItem valor={item.valor} subItems={item.subItems} />
    </motion.div>
  );
};
