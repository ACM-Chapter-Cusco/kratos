import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const FAQIconAnimate = ({ isOpen }) => {
	return (
		<AnimatePresence mode="wait" initial={false}>
			{isOpen ? (
				<motion.div
					key="minus"
					initial={{ opacity: 0, rotate: -120 }}
					animate={{ opacity: 1, rotate: 0 }}
					exit={{ opacity: 0, rotate: 90 }}
					transition={{ duration: 0.3 }}
				>
					<FaMinus />
				</motion.div>
			) : (
				<motion.div
					key="plus"
					initial={{ opacity: 0, rotate: -120 }}
					animate={{ opacity: 1, rotate: 0 }}
					exit={{ opacity: 0, rotate: 90 }}
					transition={{ duration: 0.3 }}
				>
					<FaPlus />
				</motion.div>
			)}
		</AnimatePresence>
	);
};
