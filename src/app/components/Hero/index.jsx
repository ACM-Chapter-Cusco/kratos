"use client";
import React, { useEffect, useState } from "react";
import HeroText from "./HeroText";
import SocialMedia from "./SocialMedia";
import Image from "next/image";
import LeftLine from "../common/LeftLine";
import { delay, motion } from "framer-motion";
import clsx from "clsx";

import style from "./Hero.module.css";

const logoVariants = {
  hidden: {
    opacity: 0,
    scale: 1,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      delay: 0.1,
    },
  },
};

const socialVariants = {
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

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    const timerText = setTimeout(() => {
      setShowText(true);
    }, 2000);

    const timerSocial = setTimeout(() => {
      setShowSocial(true);
    }, 4000);

    return () => {
      clearTimeout(timerText);
      clearTimeout(timerSocial);
    };
  });

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="relative mt-5 flex h-[90vh] w-full flex-col items-center justify-center gap-10 pb-10 lg:flex-row lg:justify-between lg:gap-0"
    >
      {/* Redes sociales */}
      <motion.div variants={socialVariants} className="hidden lg:block">
        <LeftLine color="0A84FF" />
      </motion.div>

      {/* Parte principal */}
      <div className="flex w-full flex-col-reverse items-center justify-center gap-8 md:flex-row">
        <div className={clsx(!showText && "hidden")}>
          <HeroText />
        </div>
        <motion.div
          layout
          variants={logoVariants}
          className="h-[200px] w-[200px] xl:h-[290px] xl:w-[290px]"
        >
          <Image
            src="/acm-logo-img.svg"
            alt="Hero"
            width={290}
            height={290}
            className={`${style.glow} transition-all duration-300`}
          />
        </motion.div>
      </div>
      {/* Redes sociales */}
      <motion.div
        variants={socialVariants}
        className="absolute bottom-20 md:relative md:bottom-0"
      >
        <SocialMedia />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
