import React from "react";
import TextAbout from "./TextAbout";
import Imagery from "./Imagery";
import LeftLine from "../common/LeftLine";

const About = () => {
  return (
    <div className="flex justify-between items-stretch my-20">
      <LeftLine color='0A84FF' />

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
