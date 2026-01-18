"use client";

import React, { useRef } from "react";
import WinnersWindowEffect from "./WinnersEditions";
import { useMotionValue, motion, useScroll, useTransform } from "framer-motion";
import WinnersEditions from "./WinnersEditions";
import { fadeIn, springDown } from "@/app/common/animations/entrances";
import { createDelayedVariant } from "@/app/common/animations/shared";

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
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="desktop:my-0 tablet:my-20 tablet:h-[32rem] desktop:h-[36rem] tablet:mb-40 desktop:mb-60 relative my-10 mb-16 h-[31rem] w-full"
    >
      {/* Title */}
      <div
        className="desktop:block lg-desktop:h-[135vh] desktop:h-[145vh] desktop:-top-100 lg-desktop:-top-125 absolute hidden w-full"
        ref={animationSectionRef}
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

      <div className="desktop:hidden block">
        <motion.p
          variants={createDelayedVariant(springDown, 1)}
          className="font-OpenSans text-white-blue text-h5 relative flex w-full justify-center font-extrabold"
          style={{
            zIndex: 1,
          }}
        >
          {" "}
          Salón de la <span className="text-blue">&nbsp;Fama</span>
        </motion.p>
      </div>

      <motion.div className="desktop:top-24 lg-desktop:top-30 tablet:top-24 absolute top-20 w-full overflow-hidden">
        <div className="desktop:block hidden h-[36rem] w-full">
          <WinnersEditions
            x={x}
            containerRef={containerRef}
            type="desktop"
            widthSize={-7500}
          />
        </div>
        <div className="desktop:hidden tablet:block hidden h-[32rem]">
          <WinnersEditions
            x={x}
            containerRef={containerRef}
            type="tablet"
            widthSize={-4900}
          />
        </div>
        <div className="tablet:hidden block h-[31rem]">
          <WinnersEditions
            x={x}
            containerRef={containerRef}
            type="mobile"
            widthSize={-4690}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Winners;
