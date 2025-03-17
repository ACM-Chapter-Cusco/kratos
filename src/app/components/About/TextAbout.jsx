"use client";

import React from "react";
import Button from "../Header/Button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 3,
    },
  },
};

const elementVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

const TextAbout = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center gap-y-12"
    >
      <motion.p
        variants={elementVariants}
        className="font-Big text-white-blue/60 text-p font-Play"
      >
        Somos un círculo de estudios formado por estudiantes de la carrera de
        Ingeniería Informática y de Sistemas de la Universidad UNSAAC, que
        compartimos interés por la informática y la tecnología, y estamos
        dispuestos a fomentar esta pasión mediante eventos, competencias y
        muchas actividades más.{" "}
      </motion.p>
      <motion.div variants={elementVariants}>
        <Button>More</Button>
      </motion.div>
    </motion.div>
  );
};

export default TextAbout;
