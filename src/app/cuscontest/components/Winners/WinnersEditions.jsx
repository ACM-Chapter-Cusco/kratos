import React from "react";
import EditionXXII from "./Editions/EditionXXII";
import { motion } from "framer-motion";
import EditionXXI from "./Editions/EditionXXI";
import EditionXX from "./Editions/EditionXX";

const WinnersEditions = ({ x, containerRef, type, widthSize }) => {
  return (
    <>
      <motion.div
        className="flex h-full w-full cursor-grab snap-x snap-mandatory"
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: widthSize, right: 0 }}
        style={{ x }}
        whileTap={{ cursor: "grabbing" }}
        dragTransition={{
          bounceStiffness: 100, // Increase for less bounce
          bounceDamping: 50, // Increase for faster damping
          power: 0.2, // Reduce for less impulse (0-1)
          timeConstant: 300, // Reduce for faster inertia
          restDelta: 1, // Higher tolerance for stopping before
        }}
      >
        <div className="snap-center">
          <EditionXXII dragX={x} type={type} />
        </div>
        <div className="snap-center">
          <EditionXXI dragX={x} type={type} />
        </div>
        <div className="snap-center">
          <EditionXX dragX={x} type={type} />
        </div>
      </motion.div>
    </>
  );
};

export default WinnersEditions;
