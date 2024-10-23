import React from "react";
import TextAbout from "./TextAbout";
import Imagery from "./Imagery";
import LeftLine from "../common/LeftLine";

const About = () => {
  return (
    <div className="flex  h-auto md:flex-row flex-col-reverse justify-between items-center md:items-stretch my-20 box-border">
      <LeftLine color='0A84FF' />

      <div className="md:w-[32%] flex items-center w-full">
        <TextAbout />
      </div>
      <div className="md:w-[50%] w-full h-[400px] md:h-auto py-4 md:p-0 flex items-center justify-center">
        <Imagery />
      </div>
    </div>
  );
};

export default About;
