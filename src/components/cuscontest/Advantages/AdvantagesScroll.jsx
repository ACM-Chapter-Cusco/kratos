"use client";
import { fadeIn, springDown } from "@/lib/animations/entrances";
import { createDelayedVariant } from "@/lib/animations/shared";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const AdvantagesScroll = ({ cards }) => {
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

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
  const titleOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      ref={targetRef}
      className="jmp-my-2xl-lg desktop:h-[1000vh] relative h-[1500vh] bg-stone-950"
      style={{ width: `calc(100vw - ${scrollbarWidth}px)` }}
    >
      <motion.div
        className="sticky top-20 z-20 flex justify-center bg-stone-950"
        style={{
          opacity: titleOpacity,
          width: `calc(100vw - ${scrollbarWidth}px)`,
        }}
      >
        <motion.h2
          variants={createDelayedVariant(springDown, 0.5)}
          className="font-Opensans text-white-blue text-h5 text-center font-[800]"
        >
          ¿Que ganas <span className="text-blue">Participando</span>?
        </motion.h2>
      </motion.div>
      <motion.div
        variants={createDelayedVariant(fadeIn, 1)}
        className="desktop:top-28 max-tablet:-top-[5%] lg-desktop:h-[80vh] sticky top-0 z-10 flex h-[100vh] w-full items-center overflow-hidden bg-stone-900"
      >
        <motion.div
          style={{ x }}
          className="tablet:pl-20 desktop:gap-50 flex gap-20"
        >
          {/* empty left space */}
          <div className="tablet:w-10 tablet:block hidden h-full"></div>

          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card.id}
                scrollYProgressParent={scrollYProgress}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const Card = ({ card, scrollYProgressParent }) => {
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

    const unsubscribe = scrollYProgressParent.onChange(updatePosition);
    window.addEventListener("resize", updatePosition);
    updatePosition(); // Call it once to set the initial value

    return () => {
      unsubscribe();
      window.removeEventListener("resize", updatePosition);
    };
  }, [scrollYProgressParent, relativePosition]);

  const numberX = useTransform(relativePosition, [-1, 0, 1], [-50, 0, 50]);
  const iconX = useTransform(relativePosition, [-1, 0, 1], [-125, 0, 125]);
  const textX = useTransform(relativePosition, [-1, 0, 1], [-100, 0, 100]);
  const imageX = useTransform(relativePosition, [-1, 0, 1], [-200, 0, 200]);

  return (
    <motion.div
      ref={cardRef}
      className="lg-desktop:h-[26rem] lg-desktop:w-[50rem] desktop:h-[24rem] desktop:w-[40rem] relative h-[18rem] rounded-[1.25rem] bg-[#0F1317]"
    >
      <motion.div
        style={{ x: textX }}
        className="desktop:mr-[12rem] lg-desktop:mr-[20rem] desktop:mt-[2rem] lg-desktop:mt-[4rem] desktop:gap-y-[2.5rem] desktop:ml-[4rem] max-desktop:mx-[1.5rem] z-20 mt-[3rem] flex flex-col gap-y-[1rem]"
      >
        <h3 className="text-h7 font-sans font-[700] text-[#1492FF]">
          {card.title}
        </h3>
        <p className="font-Play text-p-sm desktop:mr-30 leading-[150%] font-[400] text-[#A5B6CF]">
          {card.content}
        </p>
      </motion.div>
      <motion.img
        style={{ x: iconX }}
        className="desktop:w-[8rem] lg-desktop:w-[10rem] desktop:-top-12 lg-desktop:-top-20 lg-desktop:right-15 desktop:right-8 absolute -top-10 right-6 w-[5rem]"
        src={card.bgIcon}
        alt="icon"
      />
      <motion.img
        style={{ x: imageX }}
        className="desktop:w-[26rem] lg-desktop:w-[33rem] lg-desktop:-bottom-15 desktop:-bottom-8 desktop:-right-35 max-tablet:h-[8rem] absolute right-2 -bottom-15 z-30 w-[12rem] rounded-2xl object-cover"
        src={card.bgImage}
        alt="icon"
      />
      <motion.img
        style={{ x: numberX }}
        className="desktop:top-8 desktop:-left-17 desktop:h-[11.5rem] absolute top-5 left-5 z-10 h-[5rem]"
        src={card.bgNumner}
        alt="icon"
      />
      <div className="bg-blue/10 desktop:h-[14rem] desktop:w-[32rem] absolute top-1/2 left-1/2 z-1 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-[32rem] blur-[45px]"></div>
    </motion.div>
  );
};

export default AdvantagesScroll;
