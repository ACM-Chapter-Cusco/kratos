import Button from "@/app/components/common/Button";
import React from "react";

const Hero = () => {
  return (
    <div className="text-white-blue xs:h-[25rem] relative h-[17rem] w-full sm:h-[20rem] md:h-[32rem] xl:h-[50rem]">
      {/* <div className="to-[#26D0CE]-end =left-[5rem] absolute -top-[5rem] size-[18.5rem] rounded-full bg-gradient-to-r from-[#0A84FF] blur-[250px]"></div> */}
      <div className="absolute top-36 z-10 flex w-full justify-center sm:top-12 sm:justify-end">
        <img
          src="/images/cuscontest/pc-desktop.png"
          alt="pc"
          className="w-[90%] sm:mr-[2rem] sm:w-[85%]"
        />
      </div>
      {/* cirtcuits bg for mobile */}
      <div className="absolute top-5 right-0 left-0 w-full sm:hidden">
        <img
          src="/images/cuscontest/circuits.png"
          alt="circuits"
          className=""
        />
        <div className="from-blue-git absolute bottom-0 z-30 flex h-[20rem] w-full bg-gradient-to-t to-transparent"></div>
      </div>

      {/* cirtcuits bg for desktop and tablet */}
      <div className="absolute top-20 hidden w-full sm:block">
        <img
          src="/images/cuscontest/circuits-desktop.png"
          alt="circuits"
          className="h-auto w-full"
        />
        <div className="from-blue-git absolute bottom-0 z-30 flex h-[20rem] w-full bg-gradient-to-t to-transparent"></div>
        <div className="from-blue-git absolute -top-10 right-0 z-30 hidden h-full w-[20rem] bg-gradient-to-l to-transparent lg:flex"></div>
      </div>

      <div className="relative z-30 ml-4 flex flex-col items-start gap-y-[1.5rem] px-[1.12rem] lg:mt-[2rem] lg:gap-y-[2.5rem] xl:gap-y-[4.81rem]">
        <div className="">
          <h1 className="md:text-[3.5 rem] font-Opensans text-[2.5rem] font-[800] lg:text-[5rem]">
            CUS<span className="text-blue">CONTEST</span>
          </h1>
          <p className="mobile:block font-Inter text-p-lg hidden">
            Atrévete a mostrar que eres increíble <br />
            programando
          </p>
          <p className="mobile:hidden font-Inter text-p-lg block">
            Atrévete a mostrar que eres increíble programando
          </p>
        </div>
        {/* Boton */}
        <Button variant="outline">Inscribete</Button>
      </div>
    </div>
  );
};

export default Hero;
