import React from "react";
import HeroText from "./HeroText";
import SocialMedia from "./SocialMedia";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-between items-center my-10">
      {/* Redes sociales */}
      <Image
        src="/lateral-vertical-line.svg"
        alt="Line"
        width={140}
        height={450}
      />
      {/* Parte principal */}
      <div className="flex justify-center items-center">
        <HeroText />
        <Image
          src="/acm-logo-img.svg"
          alt="Hero"
          width={290}
          height={290}
          className="ml-8 glow transition-all duration-300"
        />
      </div>
      {/* Redes sociales */}
      <SocialMedia />
    </div>
  );
};

export default Hero;
