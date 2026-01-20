import { motion } from "framer-motion";
import { combineVariants } from "@/lib/animations/shared";
import { scaleUp, springUp } from "@/lib/animations/entrances";

const LeaderCard = ({ leader, className = "" }) => {
  return (
    <motion.div
      variants={combineVariants(springUp, scaleUp)}
      className={`flex flex-col items-center gap-y-[1.5rem] ${className}`}
    >
      <div>
        <img
          src={leader.image}
          alt={leader.name}
          className={`${leader.borderClass} rounded-full border-5 md:h-[7rem] md:w-[7rem] xl:h-[8.875rem] xl:w-[8.875rem]`}
        />
      </div>
      <div className="text-white-blue font-Raleway flex flex-col items-center space-y-[0.31rem]">
        <p className="text-p-sm text-center">{leader.name}</p>
        <p className="text-p-xs">{leader.role}</p>
      </div>
    </motion.div>
  );
};

export default LeaderCard;
