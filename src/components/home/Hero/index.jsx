"use client";
import React, { useEffect, useState } from "react";
import HeroText from "./HeroText";
import SocialMedia from "./SocialMedia";
import Image from "next/image";
import LeftLine from "@/components/common/elements/LeftLine";
import { motion } from "framer-motion";
import clsx from "clsx";
import { fadeIn } from "@/lib/animations/entrances";
import { createDelayedVariant } from "@/lib/animations/shared";

import style from "./Hero.module.css";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timerText = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => {
      clearTimeout(timerText);
    };
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative mt-5 flex h-[90vh] w-full flex-col items-center justify-center gap-10 pb-10 lg:flex-row lg:justify-between lg:gap-0"
    >
      {/* Left Line */}
      <motion.div
        variants={createDelayedVariant(fadeIn, 6.5)}
        className="hidden lg:block"
      >
        <LeftLine color="0A84FF" />
      </motion.div>

      {/* Main Content */}
      <div className="flex w-full flex-col-reverse items-center justify-center gap-8 md:flex-row">
        <div className={clsx(!showText && "hidden")}>
          <HeroText />
        </div>
        <motion.div
          layout
          variants={createDelayedVariant(fadeIn, 0.1, 1.5)}
          className="h-[200px] w-[200px] xl:h-[290px] xl:w-[290px]"
        >
          <Image
            src="/assets/icons/logo-acm-hero.svg"
            alt="Hero"
            width={290}
            height={290}
            className={`${style.glow} transition-all duration-300`}
          />
        </motion.div>
      </div>
      {/* Social Media */}
      <motion.div
        variants={createDelayedVariant(fadeIn, 6.5)}
        className="absolute bottom-20 md:relative md:bottom-0"
      >
        <SocialMedia />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
