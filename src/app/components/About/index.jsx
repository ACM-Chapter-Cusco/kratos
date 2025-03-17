"use client";

import React, { Children } from "react";
import TextAbout from "./TextAbout";
import Imagery from "./Imagery";
import LeftLine from "../common/LeftLine";
import { motion } from "framer-motion";

// Definimos variantes que usan un valor custom para el delay
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      delay: 0.5 + custom * 1, // Multiplica por 1.5 para hacer más lenta la secuencia
    },
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0,
      staggerChildren: 1,
    },
  }),
};

// Animación específica para la línea con desplazamiento lateral
const lineVariants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      delay: 0.5 + custom * 1,
    },
  }),
};

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="my-20 box-border flex h-auto w-[90%] flex-col-reverse items-center justify-between lg:w-full lg:flex-row lg:items-stretch"
    >
      <motion.div
        variants={lineVariants}
        custom={0} // Primer elemento en aparecer
        className="hidden lg:block"
      >
        <LeftLine color="0A84FF" />
      </motion.div>

      <motion.div className="ml-0 flex w-full flex-col items-center justify-center gap-10 lg:ml-[65px] lg:w-[100%]">
        {/* desktop title - aparece segundo */}
        <motion.div
          variants={textVariants}
          custom={1} // Segundo elemento en aparecer
          className="hidden flex-col items-end lg:flex"
        >
          <h3 className="font-Opensans text-white-blue text-h5 font-extrabold">
            <motion.span
              className="text-blue inline-block"
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              ACM.
            </motion.span>
            Chapter.Cusco
          </h3>
          <h3 className="text-blue text-[30px] leading-tight">UNSAAC</h3>
        </motion.div>

        {/* TextAbout - aparece tercero */}
        <motion.div
          variants={fadeInVariants}
          custom={2} // Tercer elemento en aparecer
        >
          <TextAbout />
        </motion.div>
      </motion.div>

      {/* Imagery - aparece cuarto */}
      <motion.div
        variants={fadeInVariants}
        custom={3} // Suponiendo que este es el valor que ya estás usando
        className="flex w-full items-center justify-center py-4 md:p-0"
      >
        <Imagery />
      </motion.div>

      {/* mobile title - aparece último */}
      <motion.div
        variants={fadeInVariants}
        custom={1} // Quinto elemento en aparecer
        className="mb-8 flex flex-col items-end lg:hidden"
      >
        <h3 className="text-white-blue text-h2 font-extrabold">
          <motion.span
            className="text-blue inline-block"
            animate={{
              color: ["#0A84FF", "#0055ff", "#0A84FF"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            ACM.
          </motion.span>
          Chapter.Cusco
        </h3>
        <h3 className="text-blue text-[30px] leading-tight">UNSAAC</h3>
      </motion.div>
    </motion.div>
  );
};

export default About;
