import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { fadeIn, springDown } from "@/app/common/animations/entrances";
import { createDelayedVariant } from "@/app/common/animations/shared";
import WinnerItem from "./WinnerItem";

const WinnerCarousel = ({ winners }) => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const targetRef = useRef(null);
  const animationSectionRef = useRef(null);
  const containerRef = useRef(null);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const width = window.innerWidth - document.documentElement.clientWidth;
    setScrollbarWidth(width);
  }, []);

  const { scrollYProgress: titleScrollProgress } = useScroll({
    target: animationSectionRef,
    offset: ["start", "end start"],
  });

  // Background WINNERS effect - exact same as original
  const titleScale = useTransform(titleScrollProgress, [0, 0.3, 1], [1, 5, 5]);
  const titleBackgroundOpacity = useTransform(
    titleScrollProgress,
    [0, 0.3, 0.8],
    [1, 0.05, 0.05],
  );

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      ref={targetRef}
      className="desktop:my-0 tablet:my-20 tablet:h-[32rem] desktop:h-[36rem] tablet:mb-40 desktop:mb-60 relative my-10 mb-16 h-[31rem] w-full"
    >
      {/* Background WINNERS text effect */}
      <div
        className="desktop:block lg-desktop:h-[135vh] desktop:h-[145vh] desktop:-top-100 lg-desktop:-top-125 absolute hidden w-full"
        ref={animationSectionRef}
      >
        <motion.div className="sticky top-0 left-0 flex h-[100vh] w-full items-center justify-center">
          <motion.p
            className="font-OpenSans text-blue text-h5 absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold"
            style={{
              scale: titleScale,
              opacity: titleBackgroundOpacity,
              zIndex: 1,
            }}
          >
            WINNERS
          </motion.p>
        </motion.div>
      </div>

      <motion.div className="desktop:top-24 lg-desktop:top-30 tablet:top-24 absolute top-20 w-full overflow-x-auto overflow-y-hidden">
        <div className="desktop:block hidden h-[36rem] w-full">
          <motion.div
            className="flex h-full cursor-grab gap-32 desktop:gap-60"
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: -8000, right: 0 }}
            style={{ x: dragX }}
            whileTap={{ cursor: "grabbing" }}
            dragTransition={{
              bounceStiffness: 100,
              bounceDamping: 50,
              power: 0.2,
              timeConstant: 300,
              restDelta: 1,
            }}
          >
            <div className="hidden tablet:block tablet:w-10 h-full" />
            {winners.map((winner) => (
              <WinnerItem
                key={winner.id}
                winner={winner}
                dragX={dragX}
              />
            ))}
          </motion.div>
        </div>
        <div className="desktop:hidden tablet:block hidden h-[32rem] w-full">
          <motion.div
            className="flex h-full cursor-grab gap-32"
            drag="x"
            dragConstraints={{ left: -6000, right: 0 }}
            style={{ x: dragX }}
            whileTap={{ cursor: "grabbing" }}
          >
            {winners.map((winner) => (
              <WinnerItem
                key={winner.id}
                winner={winner}
                dragX={dragX}
              />
            ))}
          </motion.div>
        </div>
        <div className="tablet:hidden block h-[31rem] w-full">
          <motion.div
            className="flex h-full cursor-grab gap-32"
            drag="x"
            dragConstraints={{ left: -5000, right: 0 }}
            style={{ x: dragX }}
            whileTap={{ cursor: "grabbing" }}
          >
            {winners.map((winner) => (
              <WinnerItem
                key={winner.id}
                winner={winner}
                dragX={dragX}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WinnerCarousel;
