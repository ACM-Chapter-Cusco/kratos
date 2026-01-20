"use client";

import { motion } from "framer-motion";
import React from "react";
import H2 from "@/components/ui/H2";
import LeaderCard from "./LeaderCard";
import { leadersData } from "@/data/landingPage/leaders";
import { springDown } from "@/lib/animations/entrances";
import {
  createDelayedVariant,
  createStaggerContainer,
} from "@/lib/animations/shared";

const Leaders = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="flex flex-col items-center justify-center"
      >
        <motion.div
          className="text-white-blue flex w-full justify-center pb-[100px]"
          variants={createDelayedVariant(springDown, 0)}
          viewport={{ once: true, amount: 0.5 }}
        >
          <H2 title="Lideres" />
        </motion.div>
        {/* Desktop and tablet version */}
        <div className="relative hidden h-[55rem] w-[85rem] md:block">
          {/* background */}
          <div className="absolute flex w-full -translate-y-1/4 justify-center">
            <img src="/assets/icons/logo-acm-main.svg" alt="logo" className="md:w-[60%] xl:w-[80%]" />
          </div>

          {/* Primer grupo - Líderes principales */}
          <motion.div
            initial="hidden"
            className="relative h-90"
            variants={createStaggerContainer(0.5, 0.3, 0)}
            whileInView="visible"
            viewport={{ amount: 0.5, once: false }}
          >
            {leadersData.mainLeaders.map((leader, index) => {
              let className = "";
              if (index === 0) {
                className =
                  "absolute left-1/2 w-[8rem] -translate-x-1/2 xl:w-[12rem]";
              } else if (index === 1) {
                className =
                  "absolute left-1/2 translate-y-[1.5rem] w-[8rem] translate-x-[6.5rem] xl:w-[12rem] xl:translate-x-[8.5rem]";
              } else if (index === 2) {
                className =
                  "absolute left-1/2 translate-y-[1.5rem] w-[8rem] -translate-x-[14.5rem] xl:w-[12rem] xl:-translate-x-[20.5rem]";
              } else if (index === 3) {
                className =
                  "absolute left-1/2 translate-y-[6.5rem] w-[8rem] translate-x-[16rem] xl:w-[12rem] xl:translate-x-[22.5rem]";
              } else if (index === 4) {
                className =
                  "absolute left-1/2 translate-y-[6.5rem] w-[8rem] -translate-x-[24.5rem] xl:w-[12rem] xl:-translate-x-[34.5rem]";
              }
              return (
                <LeaderCard
                  key={leader.name}
                  leader={leader}
                  className={className}
                />
              );
            })}
          </motion.div>

          {/* Segundo grupo - Líderes de ramas */}
          <motion.div
            className="relative h-130"
            variants={createStaggerContainer(0.5, 0.5, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: false }}
          >
            {leadersData.branchLeaders.map((leader, index) => {
              let className = "";
              if (index === 0) {
                className =
                  "absolute left-1/2 w-[8rem] -translate-x-[14.5rem] -translate-y-[3.3rem] xl:w-[12rem] xl:-translate-x-[20.5rem] xl:-translate-y-[0rem]";
              } else if (index === 1) {
                className =
                  "absolute left-1/2 w-[12rem] -translate-x-1/2 -translate-y-[6.3rem] xl:-translate-y-[3.3rem]";
              } else if (index === 2) {
                className =
                  "absolute left-1/2 w-[8rem] translate-x-[6.5rem] -translate-y-[3.3rem] xl:w-[12rem] xl:translate-x-[8.5rem] xl:-translate-y-[0rem]";
              }
              return (
                <LeaderCard
                  key={leader.name}
                  leader={leader}
                  className={className}
                />
              );
            })}
          </motion.div>
        </div>

        {/* Mobile version */}
        <div className="relative w-[90%] md:hidden">
          {/* Primer grupo - Líderes principales */}
          <motion.div
            initial="hidden"
            className="relative flex w-full flex-wrap justify-center gap-6"
            variants={createStaggerContainer(0.5, 0.3, 0)}
            whileInView="visible"
            viewport={{ amount: 0.3, once: false }}
          >
            {leadersData.mainLeaders.map((leader) => (
              <LeaderCard
                key={leader.name}
                leader={leader}
                className="inline-flex w-[8rem]"
              />
            ))}
          </motion.div>

          {/* Segundo grupo - Líderes de ramas */}
          <motion.div
            initial="hidden"
            className="relative my-20 flex w-full flex-wrap justify-center gap-6"
            variants={createStaggerContainer(0.5, 0.3, 0)}
            whileInView="visible"
            viewport={{ amount: 0.5, once: false }}
          >
            {leadersData.branchLeaders.map((leader) => (
              <LeaderCard
                key={leader.name}
                leader={leader}
                className="inline-flex w-[8rem]"
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Leaders;
