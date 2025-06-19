"use client";

import H2 from "../../common/H2";
import LeftLine from "../../common/LeftLine";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { createDelayedVariant } from "../../common/animations/shared";
import { fadeIn, springDown } from "../../common/animations/entrances";
import { delays } from "../../common/animations/shared";

const Events = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex h-screen w-full flex-col items-center justify-center gap-16"
    >
      <motion.div
        variants={createDelayedVariant(springDown, delays.medium)}
        className="text-white-blue flex w-full justify-center"
      >
        <H2 title="events" />
      </motion.div>

      <div className="my-2 flex w-full items-center justify-center lg:justify-between">
        <motion.div
          variants={createDelayedVariant(fadeIn, delays.long, 1)}
          className="hidden lg:block"
        >
          <LeftLine color="0A84FF" />
        </motion.div>
        <motion.div
          variants={createDelayedVariant(fadeIn, 2, 1)}
          className="flex w-[88%] flex-col items-center justify-center"
        >
          <Slider />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Events;
