import React from "react";
import EditionXXII from "./Editions/EditionXXII";
import { motion } from "framer-motion";
import EditionXXI from "./Editions/EditionXXI";
import EditionXX from "./Editions/EditionXX";

const WinnersEditions = ({ x, containerRef, type, widthSize }) => {
  return (
    <>
      <motion.div
        className="flex w-full cursor-grab snap-x snap-mandatory"
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: widthSize, right: 0 }}
        style={{ x }}
        whileTap={{ cursor: "grabbing" }}
        dragTransition={{
          bounceStiffness: 100, // Aumentar para menor rebote
          bounceDamping: 50, // Aumentar para frenar más rápido
          power: 0.2, // Reducir para menos impulso (0-1)
          timeConstant: 300, // Reducir para que la inercia dure menos
          restDelta: 1, // Tolerancia más alta para detenerse antes
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
