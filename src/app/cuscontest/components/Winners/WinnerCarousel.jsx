import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WinnerItem from "./WinnerItem";

const WinnerCarousel = ({ winners }) => {
  const targetRef = useRef(null);
  const animationSectionRef = useRef(null);
  const containerRef = useRef(null);
  const dragX = useMotionValue(0);

  const { scrollYProgress: titleScrollProgress } = useScroll({
    target: animationSectionRef,
    offset: ["start", "end start"],
  });

  // Background WINNERS effect
  const titleScale = useTransform(titleScrollProgress, [0, 0.3, 1], [1, 5, 5]);
  const titleBackgroundOpacity = useTransform(
    titleScrollProgress,
    [0, 0.3, 0.8],
    [1, 0.05, 0.05],
  );

  // Dynamic drag constraints based on content
  const getDragConstraints = () => {
    return { left: -5000, right: 0 };
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      ref={targetRef}
      className="relative my-10 mb-16 h-[22rem] tablet:my-20 tablet:h-[24rem] tablet:mb-40 desktop:my-0 desktop:h-[28rem] desktop:mb-60 lg-desktop:h-[30rem] w-full"
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

      <motion.div className="absolute top-20 tablet:top-24 desktop:top-24 lg-desktop:top-30 w-full overflow-x-auto overflow-y-hidden">
        <div className="h-[22rem] tablet:h-[24rem] desktop:h-[28rem] lg-desktop:h-[30rem] w-full">
          <motion.div
            className="flex h-full cursor-grab gap-8 tablet:gap-12 desktop:gap-16"
            ref={containerRef}
            drag="x"
            dragConstraints={getDragConstraints()}
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
            <div className="w-4 tablet:w-6 desktop:w-10 h-full flex-shrink-0" />
            {winners.map((winner) => (
              <div key={winner.id} className="flex-shrink-0">
                <WinnerItem winner={winner} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WinnerCarousel;
