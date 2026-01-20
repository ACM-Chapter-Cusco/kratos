import Button from "@/components/common/elements/Button";
import React from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  springLeft,
  springRight,
} from "@/lib/animations/entrances";
import {
  createDelayedVariant,
  createStaggerContainer,
} from "@/lib/animations/shared";

// var contentVariants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//       // delay: 0.5,
//     },
//   },
// };

// var itemVariants = {
//   hidden: {
//     opacity: 0,
//     x: -100,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

var imageVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      duration: 0.5,
      // delay: 0.5,
    },
  },
};

// var buttonVariants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       delay: 1.3,
//     },
//   },
// };

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="text-white-blue xs:h-[25rem] relative h-[17rem] w-full sm:h-[20rem] md:h-[32rem] xl:h-[50rem]"
    >
      <motion.div variants={springRight} className="relative">
        <div className="absolute top-36 z-10 flex w-full justify-center sm:top-12 sm:justify-end">
          <img
            src="/pages/cuscontest/images/hero-computer-desktop.webp"
            alt="pc"
            className="w-[90%] sm:mr-[2rem] sm:w-[85%]"
          />
        </div>
        {/* cirtcuits bg for mobile */}
        <div className="absolute top-5 right-0 left-0 w-full sm:hidden">
          <img
            src="/pages/cuscontest/images/background-circuits-mobile.webp"
            alt="circuits"
            className=""
          />
          <div className="from-blue-git absolute bottom-0 z-30 flex h-[20rem] w-full bg-gradient-to-t to-transparent"></div>
        </div>

        {/* cirtcuits bg for desktop and tablet */}
        <div className="absolute top-20 hidden w-full sm:block">
          <img
            src="/pages/cuscontest/images/background-circuits-desktop.webp"
            alt="circuits"
            className="h-auto w-full"
          />
          <div className="from-blue-git absolute bottom-0 z-30 flex h-[20rem] w-full bg-gradient-to-t to-transparent"></div>
          <div className="from-blue-git absolute -top-10 right-0 z-30 hidden h-full w-[20rem] bg-gradient-to-l to-transparent lg:flex"></div>
        </div>
      </motion.div>

      <div className="relative z-30 ml-4 flex flex-col items-start gap-y-[1.5rem] px-[1.12rem] lg:mt-[2rem] lg:gap-y-[2.5rem] xl:gap-y-[4.81rem]">
        <motion.div variants={createStaggerContainer(0.5, 0, 1)}>
          <motion.h1
            variants={fadeIn}
            className="md:text-[3.5 rem] font-Opensans text-[2.5rem] font-[800] lg:text-[5rem]"
          >
            CUS<span className="text-blue">CONTEST</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="mobile:block font-Inter text-p-lg hidden"
          >
            Atrévete a mostrar que eres increíble <br />
            programando
          </motion.p>
          <motion.p
            variants={fadeIn}
            className="mobile:hidden font-Inter text-p-lg block"
          >
            Atrévete a mostrar que eres increíble programando
          </motion.p>
        </motion.div>
        {/* Boton */}
        <motion.div variants={createDelayedVariant(fadeIn, 2.5, 1)}>
          <Button variant="outline">Inscribete</Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
