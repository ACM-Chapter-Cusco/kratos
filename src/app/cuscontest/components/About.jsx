import Button from "@/app/components/common/Button";
import React from "react";

const About = () => {
  return (
    <>
      {/* Desktop */}
      <div className="text-gray relative flex w-full flex-col max-lg:p-[1.25rem] max-md:hidden sm:w-[640px] md:w-[768px] md:gap-y-5 lg:w-[1024px] lg:gap-y-10 xl:w-[1280px]">
        {/* Top part */}
        <div className="flex w-full items-stretch max-md:p-[1.25rem] md:gap-5 lg:gap-10">
          {/* content */}
          <div className="flex-1 md:space-y-[1.8rem] lg:space-y-[2.4rem]">
            <h2 className="font-Opensans text-white-blue text-h5 font-[800] max-md:text-center">
              ¿Que rayos es <span className="text-blue">Cuscontest</span>?
            </h2>
            <p className="text-p">
              Es un concurso de programación al estilo ICPC, donde equipos de
              hasta 3 personas tienen 5 horas para resolver una serie de
              problemas. Durante la competencia, los participantes ponen a
              prueba sus conocimientos en algoritmos y estructuras de datos,
              además de mostrar su trabajo en equipo.
            </p>
          </div>
          {/* image */}
          <div className="flex-1">
            <img
              src="/images/cuscontest/about-1.png"
              alt="about-1"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
        {/* Bottom part */}
        <div className="flex">
          {/* numbers */}
          <div className="font-Opensans flex flex-[0.42] flex-col justify-between font-[700] md:space-y-12 lg:space-y-16">
            <div className="space-y-2">
              <p className="text-[2rem] md:text-[1.6rem] lg:text-[2.5rem] xl:text-[3rem]">
                Equipos
              </p>
              <div className="flex items-center gap-x-[1.56rem]">
                <p className="text-[4rem] leading-[3rem] md:text-[3.5rem] lg:text-[5rem] lg:leading-[5rem] xl:text-[6.25rem]">
                  50+
                </p>
                <p className="text-[1.375rem] leading-[120%] md:text-[1.2rem] lg:text-[1.7rem] xl:text-[2rem]">
                  Compitiendo <br /> cada semestre
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="px-[3rem] md:w-[15.3rem] lg:mt-5 lg:w-[23rem]"
            >
              Ver como participar
            </Button>
          </div>
          {/* image */}
          <div className="flex-[0.45]">
            <img
              src="/images/cuscontest/about-2.png"
              alt="about-2"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="relative flex-[0.12] md:ml-10 lg:ml-10 xl:ml-16">
            <img
              src="/images/cuscontest/orange-ballom.svg"
              alt="about-3"
              className="absolute top-0 left-0 h-[40%]"
            />
            <img
              src="/images/cuscontest/green-ballom.svg"
              alt="about-3"
              className="absolute top-[40%] right-0 h-[30%]"
            />
            <img
              src="/images/cuscontest/pink-ballom.svg"
              alt="about-3"
              className="absolute bottom-0 left-8 h-[20%]"
            />
          </div>
        </div>

        {/* Ballom */}
        <div className="absolute h-full md:-top-2 md:left-[4.2rem] lg:-top-10 lg:left-[4rem] xl:left-[6rem]">
          <img
            src="/images/cuscontest/transparent-ballom.png"
            alt="about-4"
            className="md:h-[80%] lg:h-[94%]"
          />
        </div>
      </div>

      {/* mobile */}
      <div className="text-gray relative flex w-full flex-col max-lg:p-[1.25rem] sm:w-[640px] md:hidden md:w-[768px] md:gap-y-5 lg:w-[1024px] lg:gap-y-10 xl:w-[1280px]">
        {/* Top part */}
        <div className="flex w-full flex-col items-stretch gap-y-10 max-md:p-[1.25rem]">
          {/* content */}
          <div className="space-y-8">
            <h2 className="font-Opensans text-white-blue text-h5 font-[800] max-md:text-center">
              ¿Que rayos es <span className="text-blue">Cuscontest</span>?
            </h2>
            <p className="text-[1rem] max-md:text-center">
              Es un concurso de programación al estilo ICPC, donde equipos de
              hasta 3 personas tienen 5 horas para resolver una serie de
              problemas. Durante la competencia, los participantes ponen a
              prueba sus conocimientos en algoritmos y estructuras de datos,
              además de mostrar su trabajo en equipo
            </p>
          </div>
          {/* numbers */}
          <div className="font-Opensans flex w-full justify-center space-y-2 font-[700]">
            <div className="flex w-fit flex-col items-center">
              <p className="w-full text-start text-[2rem]">Equipos</p>
              <div className="flex items-center gap-x-[1.56rem]">
                <p className="text-[4rem] leading-[3rem]">50+</p>
                <p className="text-[1.375rem] leading-[120%]">
                  Compitiendo <br /> cada semestre
                </p>
              </div>
            </div>
          </div>
          {/* Bottom part */}
          <div className="flex w-full justify-center">
            <Button variant="outline" className="px-[3rem]">
              Ver como participar
            </Button>
          </div>

          <div className="flex">
            {/* image */}
            <div className="flex-1">
              <img
                src="/images/cuscontest/about-1.png"
                alt="about-1"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Ballom */}
        <div className="absolute left-1/2 h-full -translate-x-1/2 transform">
          <img
            src="/images/cuscontest/transparent-ballom.png"
            alt="about-4"
            className="max-md:w-[12rem]"
          />
        </div>
      </div>
    </>
  );
};

export default About;
