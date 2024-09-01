import Image from "next/image";
import React from "react";
import TextAbout from "./TextAbout";
import Imagery from "./Imagery";

const About = () => {
  return (
    <div className="flex justify-between items-stretch my-20">
      <Image
        src="/lateral-vertical-line.svg"
        alt="Line"
        width={140}
        height={450}
      />
      <div className="w-[32%] flex items-center">
        <TextAbout />
      </div>
      <div className="w-[50%]">
        <Imagery />
      </div>
    </div>
  );
};

export default About;
