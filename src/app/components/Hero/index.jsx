import React from "react";
import HeroText from "./HeroText";
import SocialMedia from "./SocialMedia";
import Image from "next/image";
import LeftLine from "../common/LeftLine";

import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="flex justify-between items-center my-10">
      {/* Redes sociales */}
      <LeftLine color="0A84FF" />

      {/* Parte principal */}
      <div className="flex justify-center items-center">
        <HeroText />
        <Image
          src="/acm-logo-img.svg"
          alt="Hero"
          width={290}
          height={290}
          className={`${style.glow} ml-8  transition-all duration-300`}
        />
      </div>
      {/* Redes sociales */}
      <SocialMedia />
    </div>
  );
};

export default Hero;
