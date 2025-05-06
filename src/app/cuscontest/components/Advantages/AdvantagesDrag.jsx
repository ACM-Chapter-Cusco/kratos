"use client";
import H2 from "@/app/components/common/H2";
import {
  motion,
  MotionValue,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const AdvantagesDrag = ({ cards, dragConstraintLeft }) => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    setScrollbarWidth(scrollbarWidth);

    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`,
    );
  }, []);

  const containerRef = useRef(null);
  const x = useMotionValue(0);

  return (
    <section
      className="jmp-my-2xl-lg jmp-gap-y-sm-4xs relative flex flex-col overflow-visible bg-stone-950"
      style={{ width: `calc(100vw - ${scrollbarWidth}px)` }}
    >
      <motion.div
        className="z-20 flex justify-center bg-stone-950"
        style={{ width: `calc(100vw - ${scrollbarWidth}px)` }}
      >
        <h2 className="font-Opensans text-white-blue text-h5 text-center font-[800]">
          ¿Que ganas <span className="text-blue">Participando</span>?
        </h2>
      </motion.div>
      <div className="relative overflow-x-hidden">
        <div className="relative z-10 mt-10 mb-20 ml-10 flex h-full w-full items-center overflow-y-visible bg-stone-900">
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: dragConstraintLeft, right: 0 }}
            style={{ x }}
            whileTap={{ cursor: "grabbing" }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            className="tablet:pl-20 tablet:gap-40 mobile:flex hidden cursor-grab gap-20"
          >
            {cards.map((card) => {
              return <Card card={card} key={card.id} dragX={x} />;
            })}
          </motion.div>

          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: -1950, right: 0 }}
            style={{ x }}
            whileTap={{ cursor: "grabbing" }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            className="tablet:pl-20 tablet:gap-40 mobile:hidden flex cursor-grab gap-20"
          >
            {cards.map((card) => {
              return <Card card={card} key={card.id} dragX={x} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card, dragX }) => {
  const cardRef = useRef(null);
  const relativePosition = useMotionValue(0);

  useEffect(() => {
    const updatePosition = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const cardCenter = rect.left + rect.width / 2;
      const viewportCenter = viewportWidth / 2;

      // Valor normalizado entre -1 y 1 (0 es el centro)
      const position = (cardCenter - viewportCenter) / (viewportWidth / 2);
      relativePosition.set(position);
    };

    const unsubscribe = dragX.onChange(updatePosition);
    window.addEventListener("resize", updatePosition);
    updatePosition(); // Configura valor inicial

    return () => {
      unsubscribe();
      window.removeEventListener("resize", updatePosition);
    };
  }, [dragX, relativePosition]);

  const numberX = useTransform(relativePosition, [-1, 0, 1], [-25, 0, 25]);
  const iconX = useTransform(relativePosition, [-1, 0, 1], [-65, 0, 65]);
  const textX = useTransform(relativePosition, [-1, 0, 1], [-50, 0, 50]);
  const imageX = useTransform(relativePosition, [-1, 0, 1], [-100, 0, 100]);

  return (
    <motion.div
      ref={cardRef}
      className="tablet:h-[20rem] tablet:w-[36rem] relative z-20 h-[20rem] w-[80vw] rounded-[1.25rem] bg-[#0F1317]"
    >
      <motion.div
        style={{ x: textX }}
        className="tablet:mx-[4rem] tablet:mr-[8rem] z-20 mx-[1.5rem] mt-[3rem] flex flex-col gap-y-[1rem]"
      >
        <h3 className="text-h7 font-sans font-[700] text-[#1492FF]">
          {card.title}
        </h3>
        <p className="tablet:mr-36 font-Play text-p-sm leading-[150%] font-[400] text-[#A5B6CF]">
          {card.content}
        </p>
      </motion.div>
      <motion.img
        style={{ x: iconX }}
        className="absolute -top-10 right-6 w-[5rem]"
        src={card.bgIcon}
        alt="icon"
      />
      <motion.img
        style={{ x: imageX }}
        className="max-mobile:h-[8rem] mobile:w-[50%] tablet:w-[20rem] tablet:-bottom-8 tablet:-right-20 absolute right-6 -bottom-15 z-30 w-[12rem] rounded-2xl object-cover"
        src={card.bgImage}
        alt="icon"
      />
      <motion.img
        style={{ x: numberX }}
        className="absolute top-5 left-5 z-10 h-[5rem]"
        src={card.bgNumner}
        alt="icon"
      />
      <div className="bg-blue/10 absolute top-1/2 left-1/2 z-1 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-[32rem] blur-[45px]"></div>
    </motion.div>
  );
};

export default AdvantagesDrag;
