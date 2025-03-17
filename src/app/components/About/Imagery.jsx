"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Variante para el contenedor con un retraso inicial significativo
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 3.5, // Espera 3 segundos antes de animar a los hijos
      staggerChildren: 0.5, // Medio segundo entre cada imagen
    },
  },
};

// Variantes mejoradas para las imágenes individuales
const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8, // Comienza un poco más pequeña
  },
  visible: {
    opacity: 1,
    scale: 1, // Tamaño final normal
    transition: {
      // Configuración cuidadosa para una animación suave
      type: "spring",
      stiffness: 100, // Rigidez moderada
      damping: 15, // Amortiguación suficiente para evitar rebote excesivo
      mass: 1, // Masa estándar
      duration: 0.7, // Duración fija para un control preciso
      ease: "easeOut", // Curva de aceleración suave
    },
  },
};

const Imagery = () => {
  return (
    <motion.div
      variants={containerVariants}
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
            src="/about/image5.svg"
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
            src="/about/image2.svg"
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
            src="/about/image3.svg"
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
            src="/about/image1.svg"
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
