"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FAQIconAnimate } from "./FAQIconAnimate";
import {
  fadeIn,
  springLeft,
  springRight,
} from "@/lib/animations/entrances";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={springRight}
      className="bg-dark-2 mb-4 rounded-xl p-[1.5rem] text-white"
    >
      <button
        type="button"
        aria-label="Toggle FAQ"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between text-left"
      >
        <span className="font-Opensans text-p-sm text-blue font-[800]">
          {question}
        </span>
        <span className="text-blue">
          <FAQIconAnimate isOpen={isOpen} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="text-gray text-p-xs pt-4">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;
