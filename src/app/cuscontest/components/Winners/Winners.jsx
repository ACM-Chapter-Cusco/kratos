"use client";

import React, { useRef } from "react";
import WinnersWindowEffect from "./WinnersWindowEffect";
import { useMotionValue, motion } from "framer-motion";
import WinnersJustParallax from "./WinnersJustParallax";
import EditionXXII from "./Editions/EditionXXII";
import EditionXXI from "./Editions/EditionXXI";
import EditionXX from "./Editions/EditionXX";

const Winners = () => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  return (
    <div className="tablet:bg-blue desktop:bg-dev relative w-full overflow-x-hidden">
      <p className="font-OpenSans text-blue/5 absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] font-extrabold">
        WINNERS
      </p>
      <div className="desktop:block hidden">
        <WinnersWindowEffect x={x} containerRef={containerRef} />
      </div>
      <div className="desktop:hidden tablet:block hidden">
        <WinnersJustParallax x={x} containerRef={containerRef} />
      </div>
      <div className="tablet:hidden block">
        <WinnersJustParallax x={x} containerRef={containerRef} />
      </div>
    </div>
  );
};

export default Winners;
