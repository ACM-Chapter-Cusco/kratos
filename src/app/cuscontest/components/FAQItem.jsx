"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FAQIconAnimate } from "./FAQIconAnimate";

const FAQItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="bg-dark-2 rounded-xl p-[1.5rem] text-white mb-4">
			<button
				type="button"
				aria-label="Toggle FAQ"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex justify-between items-center text-left cursor-pointer"
			>
				<span className="font-Opensans font-[800] text-[1.25rem] text-blue">
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
						<div className="pt-4 text-gray text-[1rem]">{answer}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FAQItem;
