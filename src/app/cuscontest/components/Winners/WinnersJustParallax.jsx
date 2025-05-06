import React from "react";
import EditionXXII from "./Editions/EditionXXII";
import { motion } from "framer-motion";
import EditionXXI from "./Editions/EditionXXI";
import EditionXX from "./Editions/EditionXX";

const WinnersJustParallax = ({ x, containerRef }) => {
  return (
    <>
      <motion.div
        className="flex w-full cursor-grab snap-x snap-mandatory"
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: -5550, right: 0 }}
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
          <EditionXXII dragX={x} justParallax={true} />
        </div>
        <div className="snap-center">
          <EditionXXI dragX={x} justParallax={true} />
        </div>
        <div className="snap-center">
          <EditionXX dragX={x} justParallax={true} />
        </div>
      </motion.div>
    </>
  );
};

export default WinnersJustParallax;
