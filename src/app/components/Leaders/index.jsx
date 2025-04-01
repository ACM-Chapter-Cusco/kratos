"use client";

import { delay, motion } from "framer-motion";
import React from "react";
import H2 from "../common/H2";
import { titleVariants } from "@/lib/animations/textVariants";

// Variante para el primer contenedor de los líderes
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Esto hace que los hijos aparezcan con un retraso de 0.5s entre ellos
      delayChildren: 0.3, // Espera 0.3s antes de comenzar a mostrar los hijos
      when: "beforeChildren", // Asegura que el contenedor se anime antes que los hijos
    },
  },
};

// Variante para el segundo contenedor (líderes de ramas)
const secondContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

// Variante para cada líder individual
const leaderVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1.2,
    },
  },
};

const Leaders = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="flex flex-col items-center justify-center"
      >
        <motion.div
          className="text-white-blue flex w-full justify-center pb-[100px]"
          variants={titleVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <H2 title="Lideres" />
        </motion.div>
        {/* Desktop and tablet version */}
        <div className="relative hidden h-[55rem] w-[85rem] md:block">
          {/* background */}
          <div className="absolute flex w-full -translate-y-1/4 justify-center">
            <img src="/LOGO.svg" alt="logo" className="md:w-[60%] xl:w-[80%]" />
          </div>

          {/* Primer grupo - Líderes principales */}
          <motion.div
            initial="hidden"
            className="relative h-90"
            variants={containerVariants}
            whileInView="visible"
            viewport={{ amount: 0.5, once: false }}
          >
            {/* Presidente */}
            <motion.div
              variants={leaderVariants}
              className="absolute flex flex-col items-center gap-y-[1.5rem] md:left-1/2 md:w-[8rem] md:-translate-x-1/2 xl:left-1/2 xl:w-[12rem] xl:-translate-x-1/2"
            >
              <div>
                <img
                  src="/lideres/presidente.png"
                  alt="lider"
                  className="border-blue rounded-full border-5 md:h-[7rem] md:w-[7rem] xl:h-[8.875rem] xl:w-[8.875rem]"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Patrick Pumacahua</p>
                <p className="text-p-xs">Presidente</p>
              </div>
            </motion.div>

            {/* Vicepresidente */}
            <motion.div
              variants={leaderVariants}
              className="absolute left-1/2 flex translate-y-[1.5rem] transform flex-col items-center gap-y-[1.5rem] md:w-[8rem] md:translate-x-[6.5rem] xl:w-[12rem] xl:translate-x-[8.5rem]"
            >
              <div>
                <img
                  src="/lideres/vicepresidente.png"
                  alt="lider"
                  className="border-blue rounded-full border-5 md:h-[7rem] md:w-[7rem] xl:h-[8.875rem] xl:w-[8.875rem]"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Max Toledo</p>
                <p className="text-p-xs">Vicepresidente</p>
              </div>
            </motion.div>

            {/* Tesorero */}
            <motion.div
              variants={leaderVariants}
              className="absolute left-1/2 flex translate-y-[1.5rem] transform flex-col items-center gap-y-[1.5rem] md:w-[8rem] md:-translate-x-[14.5rem] xl:w-[12rem] xl:-translate-x-[20.5rem]"
            >
              <div>
                <img
                  src="/lideres/tesorero.png"
                  alt="lider"
                  className="border-blue rounded-full border-5 md:h-[7rem] md:w-[7rem] xl:h-[8.875rem] xl:w-[8.875rem]"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Sandro Salluca</p>
                <p className="text-p-xs">Tesorero</p>
              </div>
            </motion.div>

            {/* Membresias */}
            <motion.div
              variants={leaderVariants}
              className="md:translate-x-[] absolute left-1/2 flex translate-y-[6.5rem] transform flex-col items-center gap-y-[1.5rem] md:w-[8rem] md:translate-x-[16rem] xl:w-[12rem] xl:translate-x-[22.5rem]"
            >
              <div>
                <img
                  src="/lideres/membresias.png"
                  alt="lider"
                  className="border-blue rounded-full border-5 md:h-[7rem] md:w-[7rem] xl:h-[8.875rem] xl:w-[8.875rem]"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center"> Wagner Florez</p>
                <p className="text-p-xs">Memberships</p>
              </div>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div
              variants={leaderVariants}
              className="absolute left-1/2 flex translate-y-[6.5rem] transform flex-col items-center gap-y-[1.5rem] md:w-[8rem] md:-translate-x-[24.5rem] xl:w-[12rem] xl:-translate-x-[34.5rem]"
            >
              <div>
                <img
                  src="/lideres/social_media.png"
                  alt="lider"
                  className="border-blue rounded-full border-5 md:h-[7rem] md:w-[7rem] xl:h-[8.875rem] xl:w-[8.875rem]"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Aracely Llancaya</p>
                <p className="text-p-xs">Redes Sociales</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Segundo grupo - Líderes de ramas */}
          <motion.div
            className="relative h-130"
            variants={secondContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: false }}
          >
            {/* acm.dev Lider */}
            <motion.div
              variants={leaderVariants}
              className="absolute left-1/2 flex transform flex-col items-center gap-y-[1.5rem] md:w-[8rem] md:-translate-x-[14.5rem] md:-translate-y-[3.3rem] xl:w-[12rem] xl:-translate-x-[20.5rem] xl:-translate-y-[0rem]"
            >
              <div>
                <img
                  src="/lideres/dev.png"
                  alt="lider"
                  className="border-dev rounded-full border-5 md:h-[7rem] md:w-[7rem] xl:h-[8.875rem] xl:w-[8.875rem]"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Max Toledo</p>
                <p className="text-p-xs">acm.dev Lider</p>
              </div>
            </motion.div>

            {/* acm.icpc Lider */}
            <motion.div
              variants={leaderVariants}
              className="absolute left-1/2 flex w-[12rem] -translate-x-1/2 flex-col items-center gap-y-[1.5rem] md:-translate-y-[6.3rem] xl:-translate-y-[3.3rem]"
            >
              <div>
                <img
                  src="/lideres/icpc.png"
                  alt="lider"
                  className="border-icpc rounded-full border-5 md:h-[7rem] md:w-[7rem] xl:h-[8.875rem] xl:w-[8.875rem]"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Piero Nieto</p>
                <p className="text-p-xs">acm.icpc Lider</p>
              </div>
            </motion.div>

            {/* acm.ai Lider */}
            <motion.div
              variants={leaderVariants}
              className="absolute left-1/2 flex transform flex-col items-center gap-y-[1.5rem] md:w-[8rem] md:translate-x-[6.5rem] md:-translate-y-[3.3rem] xl:w-[12rem] xl:translate-x-[8.5rem] xl:-translate-y-[0rem]"
            >
              <div>
                <img
                  src="/lideres/ai.png"
                  alt="lider"
                  className="border-ai rounded-full border-5 md:h-[7rem] md:w-[7rem] xl:h-[8.875rem] xl:w-[8.875rem]"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Paul Auccacusi</p>
                <p className="text-p-xs">acm.ai Lider</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile version */}
        <div className="relative w-[90%] md:hidden">
          {/* Primer grupo - Líderes principales */}
          <motion.div
            initial="hidden"
            className="relative flex w-full flex-wrap justify-center gap-6"
            variants={containerVariants}
            whileInView="visible"
            viewport={{ amount: 0.3, once: false }}
          >
            {/* Presidente */}
            <motion.div
              variants={leaderVariants}
              className="inline-flex w-[8rem] flex-col items-center gap-y-[1.5rem]"
            >
              <div>
                <img
                  src="/lideres/presidente.png"
                  alt="lider"
                  className="border-blue h-[7rem] w-[7rem] rounded-full border-5"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Patrick Pumacahua</p>
                <p className="text-p-xs">Presidente</p>
              </div>
            </motion.div>

            {/* Vicepresidente */}
            <motion.div
              variants={leaderVariants}
              className="flex inline-flex w-[8rem] flex-col items-center gap-y-[1.5rem]"
            >
              <div>
                <img
                  src="/lideres/vicepresidente.png"
                  alt="lider"
                  className="border-blue h-[7rem] w-[7rem] rounded-full border-5"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Max Toledo</p>
                <p className="text-p-xs">Vicepresidenta</p>
              </div>
            </motion.div>

            {/* Tesorero */}
            <motion.div
              variants={leaderVariants}
              className="flex inline-flex w-[8rem] flex-col items-center gap-y-[1.5rem]"
            >
              <div>
                <img
                  src="/lideres/tesorero.png"
                  alt="lider"
                  className="border-blue h-[7rem] w-[7rem] rounded-full border-5"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Sandro Salluca</p>
                <p className="text-p-xs">Tesorero</p>
              </div>
            </motion.div>

            {/* Membresias */}
            <motion.div
              variants={leaderVariants}
              className="flex inline-flex w-[8rem] flex-col items-center gap-y-[1.5rem]"
            >
              <div>
                <img
                  src="/lideres/membresias.png"
                  alt="lider"
                  className="border-blue h-[7rem] w-[7rem] rounded-full border-5"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center"> Wagner Florez</p>
                <p className="text-p-xs">Memberships</p>
              </div>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div
              variants={leaderVariants}
              className="flex inline-flex w-[8rem] flex-col items-center gap-y-[1.5rem]"
            >
              <div>
                <img
                  src="/lideres/social_media.png"
                  alt="lider"
                  className="border-blue h-[7rem] w-[7rem] rounded-full border-5"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Aracely Llancaya</p>
                <p className="text-p-xs">Redes Sociales</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Segundo grupo - Líderes de ramas */}
          <motion.div
            initial="hidden"
            className="relative my-20 flex w-full flex-wrap justify-center gap-6"
            variants={containerVariants}
            whileInView="visible"
            viewport={{ amount: 0.5, once: false }}
          >
            {/* acm.dev Lider */}
            <motion.div
              variants={leaderVariants}
              className="inline-flex w-[8rem] flex-col items-center gap-y-[1.5rem]"
            >
              <div>
                <img
                  src="/lideres/dev.png"
                  alt="lider"
                  className="border-dev h-[7rem] w-[7rem] rounded-full border-5"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Max Toledo</p>
                <p className="text-p-xs">acm.dev Lider</p>
              </div>
            </motion.div>

            {/* acm.icpc Lider */}
            <motion.div
              variants={leaderVariants}
              className="inline-flex w-[8rem] flex-col items-center gap-y-[1.5rem]"
            >
              <div>
                <img
                  src="/lideres/icpc.png"
                  alt="lider"
                  className="border-icpc h-[7rem] w-[7rem] rounded-full border-5"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Piero Nieto</p>
                <p className="text-p-xs">acm.icpc Lider</p>
              </div>
            </motion.div>

            {/* acm.ai Lider */}
            <motion.div
              variants={leaderVariants}
              className="inline-flex w-[8rem] flex-col items-center gap-y-[1.5rem]"
            >
              <div>
                <img
                  src="/lideres/ai.png"
                  alt="lider"
                  className="border-ai h-[7rem] w-[7rem] rounded-full border-5"
                />
              </div>
              <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
                <p className="text-p-sm text-center">Paul Auccacusi</p>
                <p className="text-p-xs">acm.ai Lider</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Leaders;
