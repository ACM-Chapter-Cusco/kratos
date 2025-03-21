"use client";

import React from "react";
import Button from "../Header/Button";
import { delay, motion, stagger } from "framer-motion";

const textAndButtonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 3,
      delayChildren: 1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 5,
    },
  },
};

const TextAbout = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textAndButtonVariants}
      className="flex flex-col items-center gap-y-12"
    >
      <motion.p
        variants={textVariants}
        className="font-Big text-white-blue/60 text-p font-Play"
      >
        Somos un círculo de estudios formado por estudiantes de la carrera de
        Ingeniería Informática y de Sistemas de la Universidad UNSAAC, que
        compartimos interés por la informática y la tecnología, y estamos
        dispuestos a fomentar esta pasión mediante eventos, competencias y
        muchas actividades más.{" "}
      </motion.p>
      <motion.div variants={buttonVariants}>
        <Button>More</Button>
      </motion.div>
    </motion.div>
  );
};

export default TextAbout;
