import React from "react";
import EditionXXII from "./Editions/EditionXXII";
import { motion } from "framer-motion";
import EditionXXI from "./Editions/EditionXXI";
import EditionXX from "./Editions/EditionXX";

const WinnersEditions = ({ x, containerRef, type, widthSize }) => {
  return (
    <motion.div
      className="flex h-full cursor-grab"
      ref={containerRef}
      drag="x"
      dragConstraints={{ left: widthSize, right: 0 }}
      style={{ x }}
      whileTap={{ cursor: "grabbing" }}
      dragTransition={{
        bounceStiffness: 100,
        bounceDamping: 50,
        power: 0.2,
        timeConstant: 300,
        restDelta: 1,
      }}
    >
      <div className="flex-shrink-0">
        <EditionXXII dragX={x} type={type} />
      </div>
      <div className="flex-shrink-0">
        <EditionXXI dragX={x} type={type} />
      </div>
      <div className="flex-shrink-0">
        <EditionXX dragX={x} type={type} />
      </div>
    </motion.div>
  );
};

export default WinnersEditions;
