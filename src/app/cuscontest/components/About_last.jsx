import Button from "@/app/components/common/Button";
import React from "react";

const About = () => {
  return (
    <div className="relative w-full max-lg:p-[1.25rem]">
      {/* contenido */}
      <div className="flex w-full flex-col gap-y-[2.87rem] text-[#646464] max-md:items-center md:w-[45%]">
        <h2 className="font-Opensans text-[1.62rem] font-[800] text-white max-md:text-center lg:text-[2.5rem]">
          ¿Que rayos es <span className="text-[#0A84FF]">Cuscontest</span>?
        </h2>
        <p className="text-[1rem] max-md:text-center lg:text-[1.625rem]">
          Lorem ipsum dolor sit amet consectetur. <br /> Egestas nec aliquet nec
          netus egestas blandit quis urna. Vitae aliquet in eu mattis nibh felis
          ultricies. Tortor gravida quis pharetra aenean faucibus fames ac.
          Augue ut sagittis tincidunt placerat bibendum ipsum.
        </p>
        <div className="font-Opensans font-[700]">
          <p className="text-[2rem] lg:text-[3rem]">Equipos</p>
          <div className="flex items-center gap-x-[1.56rem]">
            <p className="text-[4rem] leading-[3rem] lg:text-[6.25rem] lg:leading-[5rem]">
              50+
            </p>
            <p className="text-[1.375rem] text-[1.875rem] leading-[130%]">
              Compitiendo <br /> cada semestre
            </p>
          </div>
        </div>
        <Button variant="outline" className="px-[3rem] md:w-[23.3rem] lg:mt-5">
          Ver como participar
        </Button>
      </div>
      {/* Images */}
      <div className="absolute top-0 w-full">
        <img
          src="/images/cuscontest/about-1.png"
          alt="about-1"
          className="absolute right-0 w-[50%] rounded-xl"
        />
      </div>
      <div className="absolute top-96 w-full">
        <img
          src="/images/cuscontest/about-2.png"
          alt="about-1"
          className="absolute right-0 w-[50%] rounded-xl"
        />
      </div>
    </div>
  );
};

export default About;
