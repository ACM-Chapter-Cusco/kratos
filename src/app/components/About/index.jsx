import React from "react";
import TextAbout from "./TextAbout";
import Imagery from "./Imagery";
import LeftLine from "../common/LeftLine";

const About = () => {
  return (
    <div className="flex items-stretch justify-between">
      <LeftLine color="0A84FF" />

      <div className="flex w-[32%] items-center">
        <TextAbout />
      </div>
      <div className="w-[50%]">
        <Imagery />
      </div>
    </div>
  );
};

export default About;
