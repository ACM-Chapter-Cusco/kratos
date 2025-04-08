"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const PruebaAnimation = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      {/* Utilizamos AnimatePresence para manejar la aparición/desaparición con animación */}
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "10rem" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue size-40"
          />
        )}
      </AnimatePresence>

      {/* El segundo div se animará automáticamente cuando su posición cambie */}
      <motion.div
        layout
        className="bg-dev size-40"
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 100,
        }}
      />
    </div>
  );
};

export default PruebaAnimation;
