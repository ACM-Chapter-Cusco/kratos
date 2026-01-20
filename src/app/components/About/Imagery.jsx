"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  imageryVariants,
  imageVariants,
} from "../../common/animations/variants";

const Imagery = () => {
  return (
    <motion.div
      variants={imageryVariants}
      className="relative h-[350px] w-full md:mb-10 md:h-[500px] md:w-[690px]"
    >
      {/* Primera imagen */}
      <motion.div
        variants={imageVariants}
        className="absolute top-4 hidden h-[98px] w-[98px] md:top-20 md:left-12 md:block"
      >
        {/* Div hijo con las transiciones CSS */}
        <div className="relative h-full w-full scale-75 rounded-2xl shadow-2xl shadow-black transition-transform duration-300 ease-in-out hover:scale-100 md:scale-100 md:hover:scale-125">
          <Image
            src="/pages/home/icons/illustration-about-05.svg"
            alt="Image0"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
      </motion.div>

      {/* Segunda imagen */}
      <motion.div
        variants={imageVariants}
        className="absolute top-25 -left-6 h-[172px] w-[172px] md:top-60 md:left-24"
      >
        {/* Div hijo con las transiciones CSS */}
        <div className="relative h-full w-full scale-60 rounded-2xl shadow-2xl shadow-black transition-transform duration-300 ease-in-out hover:scale-100 md:scale-100 hover:md:scale-110">
          <Image
            src="/pages/home/icons/illustration-about-02.svg"
            alt="Image1"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
      </motion.div>

      {/* Tercera imagen */}
      <motion.div
        variants={imageVariants}
        className="absolute -top-10 left-0 h-[300px] w-[400px] md:top-0 md:left-48"
      >
        {/* Div hijo con las transiciones CSS */}
        <div className="relative h-full w-full scale-60 shadow-2xl shadow-black transition-transform duration-300 ease-in-out hover:scale-90 md:scale-100 hover:md:scale-105">
          <Image
            src="/pages/home/icons/illustration-about-03.svg"
            alt="Image2"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
      </motion.div>

      {/* Cuarta imagen */}
      <motion.div
        variants={imageVariants}
        className="absolute top-20 -right-9 h-[280px] w-[280px] md:top-56 md:left-[400px]"
      >
        {/* Div hijo con las transiciones CSS */}
        <div className="relative h-full w-full scale-60 rounded-2xl shadow-2xl shadow-black transition-transform duration-300 ease-in-out hover:scale-90 md:scale-100 hover:md:scale-105">
          <Image
            src="/pages/home/icons/illustration-about-01.svg"
            alt="Image3"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Imagery;
