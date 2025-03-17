"use client";

import { delay, motion } from "framer-motion";
import React from "react";
import H2 from "../common/H2";

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: 0.5,
    },
  },
};

// Variante para el primer contenedor de los líderes
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
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
  show: {
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
  show: {
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
  // Usamos un estado para controlar la animación del segundo grupo
  // const [animateSecond, setAnimateSecond] = React.useState(false);

  // // Activar la animación del segundo grupo después de un tiempo
  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setAnimateSecond(true);
  //   }, 2500); // 4 segundos después de montar el componente

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <motion.div initial="hidden" animate="show">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 1, once: false }}
        className="text-white-blue flex w-full justify-center pb-[100px]"
        variants={titleVariants}
      >
        <H2 title="Lideres" />
      </motion.div>
      <div className="relative h-[55rem] w-[85rem]">
        {/* background */}
        <div className="absolute flex w-full -translate-y-1/4 justify-center">
          <img src="/LOGO.svg" alt="logo" className="w-[80%]" />
        </div>

        {/* Primer grupo - Líderes principales */}
        <motion.div
          initial="hidden"
          className="relative h-90"
          variants={containerVariants}
          whileInView="show"
          viewport={{ amount: 0.5, once: false }}
        >
          {/* Presidente */}
          <motion.div
            variants={leaderVariants}
            className="absolute left-1/2 flex w-[12rem] -translate-x-1/2 flex-col items-center gap-y-[1.5rem]"
          >
            <div>
              <img
                src="/lideres/presidente.png"
                alt="lider"
                className="border-blue h-[8.875rem] w-[8.875rem] rounded-full border-5"
              />
            </div>
            <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
              <p className="text-p-sm">Gustavo Ochoa</p>
              <p className="text-p-xs">Presidente</p>
            </div>
          </motion.div>

          {/* Vicepresidenta */}
          <motion.div
            variants={leaderVariants}
            className="absolute left-1/2 flex w-[12rem] translate-x-[8.5rem] translate-y-[1.5rem] transform flex-col items-center gap-y-[1.5rem]"
          >
            <div>
              <img
                src="/lideres/vicepresidente.png"
                alt="lider"
                className="border-blue h-[8.875rem] w-[8.875rem] rounded-full border-5"
              />
            </div>
            <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
              <p className="text-p-sm">Vanessa Reynaga</p>
              <p className="text-p-xs">Vicepresidenta</p>
            </div>
          </motion.div>

          {/* Tesorero */}
          <motion.div
            variants={leaderVariants}
            className="absolute left-1/2 flex w-[12rem] -translate-x-[20.5rem] translate-y-[1.5rem] transform flex-col items-center gap-y-[1.5rem]"
          >
            <div>
              <img
                src="/lideres/tesorero.png"
                alt="lider"
                className="border-blue h-[8.875rem] w-[8.875rem] rounded-full border-5"
              />
            </div>
            <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
              <p className="text-p-sm">Milton Achahui</p>
              <p className="text-p-xs">Tesorero</p>
            </div>
          </motion.div>

          {/* Membresias */}
          <motion.div
            variants={leaderVariants}
            className="absolute left-1/2 flex w-[12rem] translate-x-[22.5rem] translate-y-[6.5rem] transform flex-col items-center gap-y-[1.5rem]"
          >
            <div>
              <img
                src="/lideres/membresias.png"
                alt="lider"
                className="border-blue h-[8.875rem] w-[8.875rem] rounded-full border-5"
              />
            </div>
            <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
              <p className="text-p-sm"> Wilger Aucapuri</p>
              <p className="text-p-xs">Memberships</p>
            </div>
          </motion.div>

          {/* Redes Sociales */}
          <motion.div
            variants={leaderVariants}
            className="absolute left-1/2 flex w-[12rem] -translate-x-[34.5rem] translate-y-[6.5rem] transform flex-col items-center gap-y-[1.5rem]"
          >
            <div>
              <img
                src="/lideres/social_media.png"
                alt="lider"
                className="border-blue h-[8.875rem] w-[8.875rem] rounded-full border-5"
              />
            </div>
            <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
              <p className="text-p-sm">Yerson Chirinos</p>
              <p className="text-p-xs">Redes Sociales</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Segundo grupo - Líderes de ramas */}
        <motion.div
          className="relative h-130"
          variants={secondContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: false }}
        >
          {/* acm.dev Lider */}
          <motion.div
            variants={leaderVariants}
            className="absolute left-1/2 flex w-[12rem] -translate-x-[20.5rem] transform flex-col items-center gap-y-[1.5rem]"
          >
            <div>
              <img
                src="/lideres/dev.png"
                alt="lider"
                className="border-dev h-[8.875rem] w-[8.875rem] rounded-full border-5"
              />
            </div>
            <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
              <p className="text-p-sm">Max</p>
              <p className="text-p-xs">acm.dev Lider</p>
            </div>
          </motion.div>

          {/* acm.icpc Lider */}
          <motion.div
            variants={leaderVariants}
            className="absolute left-1/2 flex w-[12rem] -translate-x-1/2 -translate-y-[3.3rem] flex-col items-center gap-y-[1.5rem]"
          >
            <div>
              <img
                src="/lideres/icpc.png"
                alt="lider"
                className="border-icpc h-[8.875rem] w-[8.875rem] rounded-full border-5"
              />
            </div>
            <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
              <p className="text-p-sm">Jhamsid Romero</p>
              <p className="text-p-xs">acm.icpc Lider</p>
            </div>
          </motion.div>

          {/* acm.ai Lider */}
          <motion.div
            variants={leaderVariants}
            className="absolute left-1/2 flex w-[12rem] translate-x-[8.5rem] transform flex-col items-center gap-y-[1.5rem]"
          >
            <div>
              <img
                src="/lideres/ai.png"
                alt="lider"
                className="border-ai h-[8.875rem] w-[8.875rem] rounded-full border-5"
              />
            </div>
            <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
              <p className="text-p-sm">Paul</p>
              <p className="text-p-xs">acm.ai Lider</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Leaders;
