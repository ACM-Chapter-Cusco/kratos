"use client";

import React, { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Button from "@/components/ui/Button";
import { fadeIn, springDown } from "@/lib/animations/entrances";
import { motion } from "framer-motion";
import { createDelayedVariant } from "@/lib/animations/shared";
import { useRouter } from "next/navigation";

const Simulador = () => {
  const codeItems = [
    {
      id: 1,
      language: "Python",
      codeImage: "/pages/cuscontest/images/example-code-python.webp",
    },
    {
      id: 2,
      language: "C++",
      codeImage: "/pages/cuscontest/images/example-code-python.webp",
    },
    {
      id: 3,
      language: "Java",
      codeImage: "/pages/cuscontest/images/example-code-python.webp",
    },
  ];

  const [actualLanguage, setActualLanguage] = useState(codeItems[0].language);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="shadow-3xl flex h-auto w-[22rem] flex-col rounded-[0.625rem] bg-[#0F1317] text-[#95A8C1] opacity-90 shadow-black sm:w-[80%] md:h-[31.5rem] md:flex-row lg:w-[56rem]">
      {/* editor */}
      <div className="h-auto w-full border-b-2 border-[#292C2F] p-[1.37rem] md:h-full md:w-[60%] md:border-r-2 md:border-b-0">
        <div className="flex gap-x-[1.2rem]">
          {codeItems.map((item) => (
            <div
              onClick={() => {
                setActualLanguage(item.language);
              }}
              key={item.id}
              className={twMerge(
                clsx(
                  "flex h-[1.46rem] w-[4.84rem] cursor-pointer items-center justify-center rounded-lg border-2 border-[#1C2024] bg-transparent hover:bg-[#1C2024] md:h-[1.94rem] md:w-[6.375rem]",
                  actualLanguage == item.language && "bg-[#1C2024]",
                ),
              )}
            >
              <p className="font-Raleway text-[0.66rem] md:text-[0.75rem]">
                {item.language}
              </p>
            </div>
          ))}
        </div>
        <div className="my-[1.5rem] h-[0.125rem] w-full bg-[#1C2024]"></div>
        <div>
          <img
            src="/pages/cuscontest/images/example-code-python.webp"
            alt="code-python.webp"
            className="w-[19.5rem] md:w-[26.25rem]"
          />
        </div>
      </div>
      {/* result */}
      <div className="h-auto w-full bg-[#090E12] p-[1.37rem] pb-[3rem] max-md:rounded-b-xl md:h-full md:w-[40%] md:rounded-r-xl">
        {/* Button run */}
        <div
          className="flex w-full justify-start md:justify-end"
          onClick={() => setIsRunning(true)}
        >
          <div className="w-flull hover:bg-dev-600 text-white-blue flex cursor-pointer items-center gap-x-2 rounded-md bg-[#0AB764] px-[1.25rem] py-[0.2rem] transition-colors duration-300 hover:bg-[#0AB764]/50 md:rounded-xl md:py-[0.4rem]">
            <div className="flex size-[0.75rem] items-center justify-center rounded-full bg-[#fff]">
              <img src="/pages/cuscontest/images/icon-play.webp" alt="icon-play" />
            </div>
            <p className="font-Raleway text-[0.75rem] font-[700] text-[#fff]">
              Run
            </p>
          </div>
        </div>
        {/* line */}
        <div className="my-[1.3rem] h-[0.125rem] w-full bg-[#1C2024]"></div>
        {/* Result */}
        {isRunning && (
          <div className="font-Code flex flex-col gap-y-[0.7rem] text-[1rem] font-[600] md:text-[1.125rem]">
            <p className="text-dev-500">Finished in 6 ms:</p>
            <p>1 1 2 3 5 8 13 21 34 55</p>
          </div>
        )}
      </div>
    </div>
  );
};

const SimulatorSection = () => {
  const router = useRouter();

  const handleContestClick = () => {
    router.push('/contest');
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="jmp-my-2xl-lg z-40 flex w-full flex-col items-center justify-center gap-y-[2.44rem] lg:gap-y-[2.94rem]"
    >
      <motion.div variants={springDown}>
        <Simulador />
      </motion.div>
      <motion.div variants={createDelayedVariant(fadeIn, 1, 1)}>
        <Button variant="outline" action={handleContestClick}>Practica con problemas pasados</Button>
      </motion.div>
    </motion.div>
  );
};

export default SimulatorSection;
