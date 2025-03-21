"use client";

import H2 from "../common/H2";
import LeftLine from "../common/LeftLine";
import Slider from "./Slider";
import { m, motion } from "framer-motion";

const lineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      delay: 0.5,
    },
  },
};

const sliderVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
};

const Events = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex h-screen w-full flex-col items-center justify-center gap-16"
    >
      <motion.div
        variants={titleVariants}
        className="text-white-blue flex w-full justify-center"
      >
        <H2 title="events" />
      </motion.div>

      <div className="my-2 flex w-full items-center justify-center lg:justify-between">
        <motion.div variants={lineVariants} className="hidden lg:block">
          <LeftLine color="0A84FF" />
        </motion.div>
        <motion.div
          variants={sliderVariants}
          className="flex w-[88%] flex-col items-center justify-center"
        >
          <Slider />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Events;
