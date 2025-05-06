"use client";

import React, { useRef } from "react";
import WinnersWindowEffect from "./WinnersEditions";
import { useMotionValue, motion, useScroll, useTransform } from "framer-motion";
import WinnersEditions from "./WinnersEditions";

const Winners = ({ ref, scroll }) => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const titleScale = useTransform(scroll, [0, 0.5, 1], [1, 3, 3]);
  const titleOpacity = useTransform(scroll, [0, 0.5, 0.8], [1, 0.1, 0.1]);

  return (
    <section
      className="bg-dev/50 relative w-full"
      ref={ref}
      style={{ height: "160vh" }}
    >
      {/* <p className="font-OpenSans text-blue/5 absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] font-extrabold">
        WINNERS
      </p> */}
      <motion.div className="bg-icpc/50 sticky top-0 left-0 flex h-[100vh] w-full items-center justify-center">
        <motion.p
          className="font-OpenSans text-blue text-h3 absolute top-4/5 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold"
          style={{
            scale: titleScale,
            opacity: titleOpacity,
            zIndex: 1,
          }}
        >
          WINNERS
        </motion.p>
      </motion.div>
      <div className="bg-blue/50 sticky top-0 z-10 h-[80vh] w-full">
        <div className="relative h-full w-full overflow-hidden">
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
      </div>
    </section>
  );
};

export default Winners;
