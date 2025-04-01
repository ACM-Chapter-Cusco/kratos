"use client";
import { LinksTeams } from "./LinksTeams";
import { TitleTeams } from "./TitleTeams";
import clsx from "clsx";
import { motion } from "framer-motion";

import style from "./AcmTeams.module.css";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ArticlesTeams = ({ children, color, content, links }) => {
  const { title, info } = content;
  return (
    <motion.article variants={itemVariants}>
      <div
        className={clsx(
          "items-ceter font-Opensans text-white-blue relative flex h-[245px] w-[336px] cursor-default flex-col justify-between rounded-xl bg-[#0F1317] px-[30px] py-[16px] pt-[33px] shadow drop-shadow-[0_0_0.3rem_#000307] transition-all duration-300 hover:-translate-y-[5px]",
          {
            "hover:drop-shadow-[0_0_0.7rem_var(--color-blue)]":
              color === "blue",
            "hover:drop-shadow-[0_0_0.7rem_var(--color-icpc)]":
              color === "icpc",
            "hover:drop-shadow-[0_0_0.7rem_var(--color-dev)]": color === "dev",
            "hover:drop-shadow-[0_0_0.7rem_var(--color-ai)]": color === "ai",
          },
        )}
      >
        <TitleTeams color={color} title={title}>
          {children}
        </TitleTeams>
        <p className="font-Play text-p-sm text-center">{info}</p>

        <LinksTeams links={links} color={color} />
      </div>
    </motion.article>
  );
};
