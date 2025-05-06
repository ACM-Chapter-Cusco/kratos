"use client";

import React, { useRef } from "react";
import WinnersWindowEffect from "./WinnersEditions";
import { useMotionValue, motion, useScroll, useTransform } from "framer-motion";
import WinnersEditions from "./WinnersEditions";

const Winners = ({ ref, scroll }) => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const animationSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: animationSectionRef,
    offset: ["start", "end start"],
  });

  const titleScale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 5, 5]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8],
    [1, 0.05, 0.05],
  );

  return (
    <section className="relative h-screen w-full">
      {/* <p className="font-OpenSans text-blue/5 absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] font-extrabold">
        WINNERS
      </p> */}
      <div
        className="absolute -top-150 w-full"
        ref={animationSectionRef}
        style={{ height: "145vh" }}
      >
        <motion.div className="sticky top-0 left-0 flex h-[100vh] w-full items-center justify-center">
          <motion.p
            className="font-OpenSans text-blue text-h5 absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold"
            style={{
              scale: titleScale,
              opacity: titleOpacity,
              zIndex: 1,
            }}
          >
            WINNERS
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute top-0 h-full w-full overflow-hidden">
        <div className="desktop:block hidden">
          <WinnersEditions
            x={x}
            containerRef={containerRef}
            type="desktop"
            widthSize={-7500}
          />
        </div>
        <div className="desktop:hidden tablet:block hidden">
          <WinnersEditions
            x={x}
            containerRef={containerRef}
            type="tablet"
            widthSize={-4750}
          />
        </div>
        <div className="tablet:hidden block">
          <WinnersEditions
            x={x}
            containerRef={containerRef}
            type="mobile"
            widthSize={-4690}
          />
        </div>
      </div>
    </section>
  );
};

export default Winners;
