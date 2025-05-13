"use client";
import clsx from "clsx";
import {
  useMotionValue,
  useTransform,
  motion,
  useMotionTemplate,
  useVelocity,
  useSpring,
} from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const WinnerCard = ({
  winner,
  w,
  tabletW,
  desktopW,
  dragX,
  clipPathValue = 3,
  inverted = false,
  positionZ = 0,
  switchAtMiddle = false,
  type = "tablet" || "mobile" || "desktop",
}) => {
  const justParallax = type == "desktop" ? false : true;
  const [currentWidth, setCurrentWidth] = useState(w);
  const contentPaddingLeft = justParallax
    ? 1.2 + "rem"
    : clipPathValue / 10 + 1 + "rem";
  const width = currentWidth + "rem";
  const cardRef = useRef(null);
  const relativePosition = useMotionValue(0);

  // Position smoothed to avoid sudden movements
  const smoothPosition = useSpring(relativePosition, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const updateWidth = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth >= 1440) {
        setCurrentWidth(desktopW || w);
      } else if (viewportWidth >= 834) {
        setCurrentWidth(tabletW || w);
      } else {
        setCurrentWidth(w);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [w, tabletW, desktopW]);

  useEffect(() => {
    const updatePosition = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const cardCenter = rect.left + rect.width / 2;
      const viewportCenter = viewportWidth / 2;

      // Normalize value between -1 and 1 (0 is the center)
      const position = (cardCenter - viewportCenter) / (viewportWidth / 2);
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

  let clipPath = useMotionTemplate`polygon(10% 0%, 90% 0%, 90% 100%, 10% 100%)`;

  var position = 0;
  if (type == "desktop") {
    position = useTransform(
      relativePosition,
      [-1, 0, 1],
      [-positionZ * 40, 0, positionZ * 40],
    );
  } else if (type == "mobile") {
    position = useTransform(
      relativePosition,
      [-2, 0, 2],
      [-positionZ * 40, 0, positionZ * 40],
    );
  } else {
    position = useTransform(
      relativePosition,
      [-2, 0, 2],
      [-positionZ * 100, 0, positionZ * 100],
    );
  }

  if (!justParallax) {
    const offsetInverted = useTransform(smoothPosition, [-1, 0, 1], [8, 0, -8]);
    const offsetNormal = useTransform(smoothPosition, [-1, 0, 1], [-8, 0, 8]);
    let offset = offsetNormal;

    if (switchAtMiddle) {
      offset = useTransform(
        smoothPosition,
        [-1, -0.5, 0, 0.5, 1],
        [8, 1, -2, -4, 0],
      );
    } else {
      offset = inverted ? offsetInverted : offsetNormal;
    }

    const leftClip = useTransform(offset, (value) => clipPathValue + value);
    const rightClip = useTransform(
      offset,
      (value) => 100 - clipPathValue + value,
    );

    const movingClipPath = useMotionTemplate`polygon(${leftClip}% 0%, ${rightClip}% 0%, ${rightClip}% 100%, ${leftClip}% 100%)`;
    const defaultClipPath = useMotionTemplate`polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`;

    clipPath = clipPathValue == 0 ? defaultClipPath : movingClipPath;
  }

  return (
    <motion.div
      className={clsx("flex flex-col gap-y-2")}
      style={{ width: `calc(${width} + 2rem)`, x: position }}
      ref={cardRef}
    >
      <div className="relative mr-[2rem] overflow-hidden">
        <motion.img
          style={{
            position: "relative",
            clipPath,
            width: width,
          }}
          src={winner.image}
          alt="winner"
          className={clsx("block w-full", justParallax && "rounded-xl")}
        />
      </div>
      <div
        className="w-full -space-y-1"
        style={{ paddingLeft: contentPaddingLeft }}
      >
        <div className="relative">
          <p className="text-h5 tablet:text-h5 text-blue/20 font-OpenSans font-[800]">
            {winner.edicion}
          </p>
          <p className="font-Play text-p-xs desktop:bottom-1 absolute bottom-0 left-5 font-[700] text-[#646464]">
            {winner.puesto}
          </p>
        </div>
        <h3 className="font-Play text-p desktop:leading-7 desktop:mt-0 mt-2 leading-5 font-[700] break-words text-[#646464]">
          {winner.equipo}
        </h3>
      </div>
    </motion.div>
  );
};

export default WinnerCard;
