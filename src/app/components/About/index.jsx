import React from "react";
import TextAbout from "./TextAbout";
import Imagery from "./Imagery";
import LeftLine from "../common/LeftLine";

const About = () => {
  return (
    <div className="my-20 box-border flex h-auto w-[90%] flex-col-reverse items-center justify-between lg:w-full lg:flex-row lg:items-stretch">
      <div className="hidden lg:block">
        <LeftLine color="0A84FF" />
      </div>

      <div className="ml-0 flex w-full flex-col items-center justify-center gap-10 lg:ml-[65px] lg:w-[32%]">
        {/* desktop title*/}
        <div className="hidden flex-col items-end lg:flex">
          <h3 className="font-Opensans text-[35px] font-extrabold leading-tight text-white-azul md:text-[40px]">
            <span className="text-blue">ACM.</span>Chapter.Cusco
          </h3>
          <h3 className="text-[30px] leading-tight text-blue">UNSAAC</h3>
        </div>

        <TextAbout />
      </div>
      <div className="flex w-full items-center justify-center py-4 md:p-0">
        <Imagery />
      </div>

      {/* mobile title */}
      <div className="mb-8 flex flex-col items-end lg:hidden">
        <h3 className="text-white-azulleading-tight font-Opensans text-[35px] font-extrabold md:text-[40px]">
          <span className="text-blue">ACM.</span>Chapter.Cusco
        </h3>
        <h3 className="text-[30px] leading-tight text-blue">UNSAAC</h3>
      </div>
    </div>
  );
};

export default About;
