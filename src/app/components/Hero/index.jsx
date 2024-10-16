import React from "react";
import HeroText from "./HeroText";
import SocialMedia from "./SocialMedia";
import Image from "next/image";
import LeftLine from "../common/LeftLine";

import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="relative mt-5 flex h-screen w-full flex-col items-center justify-center gap-10 pb-10 lg:flex-row lg:justify-between lg:gap-0">
      {/* Redes sociales */}
      <div className="hidden lg:block">
        <LeftLine color="0A84FF" />
      </div>

      {/* Parte principal */}
      <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row">
        <HeroText />
        <div className="h-[200px] w-[200px] xl:h-[290px] xl:w-[290px]">
          <Image
            src="/acm-logo-img.svg"
            alt="Hero"
            width={290}
            height={290}
            className={`${style.glow} transition-all duration-300`}
          />
        </div>
      </div>
      {/* Redes sociales */}
      <div className="absolute bottom-10 md:relative md:bottom-0">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Hero;
