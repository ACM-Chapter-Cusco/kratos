"use client";

import React from "react";
import Button from "@/components/common/layout/Header/Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations/entrances";
import {
  createStaggerContainer,
  createDelayedVariant,
} from "@/lib/animations/shared";

const TextAbout = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={createStaggerContainer(3, 1)}
      className="flex flex-col items-center gap-y-12"
    >
      <motion.p
        variants={fadeIn}
        className="font-Big text-white-blue/60 text-p font-Play"
      >
        Somos un círculo de estudios formado por estudiantes de la carrera de
        Ingeniería Informática y de Sistemas de la Universidad UNSAAC, que
        compartimos interés por la informática y la tecnología, y estamos
        dispuestos a fomentar esta pasión mediante eventos, competencias y
        muchas actividades más.{" "}
      </motion.p>
      <motion.div variants={createDelayedVariant(fadeIn, 5)}>
        <Button>More</Button>
      </motion.div>
    </motion.div>
  );
};

export default TextAbout;
