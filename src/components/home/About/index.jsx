"use client";

import React from "react";
import TextAbout from "./TextAbout";
import Imagery from "./Imagery";
import LeftLine from "@/components/common/elements/LeftLine";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations/entrances";
import {
  createDelayedVariant,
  createStaggerContainer,
  createSpringVariant,
} from "@/lib/animations/shared";
import { delays } from "@/lib/animations/shared";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="my-20 box-border flex h-auto w-[90%] flex-col-reverse items-center justify-between lg:w-full lg:flex-row lg:items-stretch"
    >
      <motion.div
        variants={createDelayedVariant(fadeIn, delays.medium, 1)}
        className="hidden lg:block"
      >
        <LeftLine color="0A84FF" />
      </motion.div>

      <motion.div
        variants={createStaggerContainer(1, 1.2)}
        className="ml-0 flex w-full flex-col items-center justify-center gap-10 lg:ml-[65px] lg:w-[100%]"
      >
        {/* desktop title - appears second */}
        <motion.div
          variants={fadeIn}
          className="hidden flex-col items-end lg:flex"
        >
          <h3 className="font-Opensans text-white-blue text-h5 font-extrabold">
            <motion.span
              className="text-blue inline-block"
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              ACM.
            </motion.span>
            Chapter.Cusco
          </h3>
          <h3 className="text-blue text-[30px] leading-tight">UNSAAC</h3>
        </motion.div>

        {/* TextAbout - appears third */}
        <motion.div variants={fadeIn}>
          <TextAbout />
        </motion.div>
      </motion.div>

      {/* Imagery - appears fourth */}
      <motion.div
        variants={fadeIn}
        className="flex w-full items-center justify-center py-4 md:p-0"
      >
        <Imagery />
      </motion.div>

      <motion.div
        variants={createSpringVariant({ y: 0 }, 70, 20)}
        className="mb-8 flex flex-col items-end lg:hidden"
      >
        <h3 className="text-white-blue text-h2 font-extrabold">
          <motion.span
            className="text-blue inline-block"
            animate={{
              color: ["#0A84FF", "#0055ff", "#0A84FF"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            ACM.
          </motion.span>
          Chapter.Cusco
        </h3>
        <h3 className="text-blue text-[30px] leading-tight">UNSAAC</h3>
      </motion.div>
    </motion.div>
  );
};

export default About;
