import Button from "@/app/components/common/Button";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[17rem] w-full text-white-azul xs:h-[25rem] sm:h-[20rem] md:h-[32rem] xl:h-screen">
      {/* <div className="to-[#26D0CE]-end =left-[5rem] absolute -top-[5rem] size-[18.5rem] rounded-full bg-gradient-to-r from-[#0A84FF] blur-[250px]"></div> */}
      <div className="absolute top-28 z-10 flex w-full justify-center sm:top-12 sm:justify-end">
        <img
          src="/images/cuscontest/pc-desktop.png"
          alt="pc"
          className="w-[90%] sm:mr-[2rem] sm:w-[85%]"
        />
      </div>
      <div className="absolute left-0 right-0 w-full sm:hidden">
        <img
          src="/images/cuscontest/circuits.png"
          alt="circuits"
          className=""
        />
        <div className="absolute bottom-0 z-30 flex h-[20rem] w-full bg-gradient-to-t from-azul-git to-transparent"></div>
      </div>
      <div className="absolute top-20 hidden w-full sm:block">
        <img
          src="/images/cuscontest/circuits-desktop.png"
          alt="circuits"
          className="h-auto w-full"
        />
        <div className="absolute bottom-0 z-30 flex h-[20rem] w-full bg-gradient-to-t from-azul-git to-transparent"></div>
      </div>

      <div className="relative z-50 ml-4 flex flex-col items-start gap-y-[1.5rem] px-[1.12rem] lg:mt-[2rem] lg:gap-y-[2.5rem] xl:gap-y-[4.81rem]">
        <div className="">
          <h1 className="md:text-[3.5 rem] font-Opensans text-[2.5rem] font-[800] lg:text-[5rem]">
            CUS<span className="text-blue">CONTEST</span>
          </h1>
          <p className="font-Inter text-[1rem] md:text-[1.3rem] lg:text-[1.87rem] lg:leading-9">
            Atrévete a mostrar que eres increíble <br /> programando
          </p>
        </div>
        {/* Boton */}
        <Button variant="outline">Inscribete</Button>
      </div>
    </div>
  );
};

export default Hero;
