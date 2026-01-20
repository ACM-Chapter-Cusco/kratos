import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const WinnerItem = ({ winner, dragX }) => {
  const cardRef = useRef(null);
  const relativePosition = useMotionValue(0);

  useEffect(() => {
    const updatePosition = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const cardWidth = rect.left + rect.width / 2;
      const viewportCenter = viewportWidth / 2;

      const position = (cardWidth - viewportCenter) / (viewportWidth / 2);
      relativePosition.set(position);
    };

    const unsubscribe = dragX?.onChange(updatePosition);
    window.addEventListener("resize", updatePosition);
    updatePosition();

    return () => {
      unsubscribe?.();
      window.removeEventListener("resize", updatePosition);
    };
  }, [dragX, relativePosition]);

  // Parallax effects like advantages
  const numberX = useTransform(relativePosition, [-1, 0, 1], [-50, 0, 50]);
  const iconX = useTransform(relativePosition, [-1, 0, 1], [-125, 0, 125]);
  const textX = useTransform(relativePosition, [-1, 0, 1], [-100, 0, 100]);
  const imageX = useTransform(relativePosition, [-1, 0, 1], [-200, 0, 200]);

  return (
    <motion.div
      ref={cardRef}
      className="lg-desktop:h-[26rem] lg-desktop:w-[50rem] desktop:h-[24rem] desktop:w-[40rem] relative h-[18rem] w-[35rem] rounded-[1.25rem] bg-[#0F1317]"
    >
      <motion.div
        style={{ x: textX }}
        className="desktop:mr-[12rem] lg-desktop:mr-[20rem] desktop:mt-[2rem] lg-desktop:mt-[4rem] desktop:gap-y-[2.5rem] desktop:ml-[4rem] max-desktop:mx-[1.5rem] z-20 mt-[3rem] flex flex-col gap-y-[1rem]"
      >
        <p className="text-h2 font-OpenSans font-[800] text-[#1492FF] opacity-30">
          {winner.edicion}
        </p>
      </motion.div>
      
      {/* Position outside box (top right) - contained within card */}
      <motion.div
        style={{ x: iconX }}
        className="desktop:w-[6rem] lg-desktop:w-[8rem] desktop:top-2 lg-desktop:top-1 lg-desktop:right-4 desktop:right-2 absolute top-1 right-2 w-[4rem] flex flex-col items-center justify-center"
      >
        <span className="text-h7 font-OpenSans font-[800] text-[#1492FF]">{winner.position}</span>
        <span className="text-p-xs font-OpenSans font-[600] text-[#1492FF] opacity-70">{winner.category}</span>
      </motion.div>
      
      {/* Main photo - contained within card */}
      <motion.img
        style={{ x: imageX }}
        className="desktop:w-[20rem] desktop:h-[14rem] lg-desktop:w-[25rem] lg-desktop:h-[18rem] lg-desktop:bottom-2 desktop:bottom-2 desktop:right-2 absolute right-1 bottom-1 z-30 w-[10rem] h-[7rem] rounded-2xl object-cover"
        src={winner.image}
        alt={winner.equipo}
      />
      
      {/* Team name in background (top left) - using original WinnerCard styling */}
      <motion.div
        style={{ x: numberX }}
        className="desktop:top-4 desktop:left-4 desktop:h-[8rem] absolute top-2 left-2 z-10 h-[4rem] flex items-center justify-center"
      >
        <h3 className="font-Play text-p desktop:leading-7 desktop:mt-0 mt-2 leading-5 font-[700] break-words text-[#646464]">
          {winner.equipo}
        </h3>
      </motion.div>
      
      <div className="bg-blue/10 desktop:h-[14rem] desktop:w-[32rem] absolute top-1/2 left-1/2 z-1 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-[32rem] blur-[45px]"></div>
    </motion.div>
  );
};

export default WinnerItem;
