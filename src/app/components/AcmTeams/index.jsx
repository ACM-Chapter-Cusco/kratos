"use client";

import H2 from "../common/H2";
import LeftLine from "../common/LeftLine";
import { BrainSvg } from "../Svgs/BrainSvg";
import { CupSvg } from "../Svgs/CupSvg";
import { PcSvg } from "../Svgs/PcSvg";
import { ArticlesTeams } from "./ArticlesTeams";
import { delay, motion, stagger } from "framer-motion";

const Teams = [
  {
    color: "dev",
    content: {
      title: "dev",
      info: "Subgrupo de ACM enfocado en el diseño y desarrollo web",
    },
    links: {
      code: "#",
      weebsite: "#",
    },
    svg: <PcSvg />,
  },
  {
    color: "ai",
    content: {
      title: "ai",
      info: "Subgrupo de ACM enfocado en inteligencia artificial",
    },
    links: {
      code: "#",
      weebsite: "#",
    },
    svg: <BrainSvg />,
  },
  {
    color: "icpc",
    content: {
      title: "icpc",
      info: "Subgrupo de ACM enfocado en programación competitiva",
    },
    links: {
      code: "#",
      weebsite: "#",
    },
    svg: <CupSvg />,
  },
];

const lineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      delay: 0.5,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 12,
      delay: custom * 0.5 + 2.5,
    },
  }),
};

const cardsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0,
      when: "beforeChildren",
      delay: 2,
    },
  },
};

const AcmTeams = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className="text-white-blue relative flex h-auto w-full flex-col items-center justify-around gap-16 py-20 lg:gap-0"
    >
      <motion.div
        variants={titleVariants}
        className="top-16 left-0 flex w-full justify-center lg:absolute"
      >
        <H2 title="teams" />
      </motion.div>
      <motion.div className="flex w-full items-center justify-between">
        <motion.div variants={lineVariants} className="hidden lg:block">
          <LeftLine color="0A84FF" />
        </motion.div>
        <motion.div
          variants={cardsVariants}
          className="flex w-full flex-col flex-wrap items-center justify-center gap-x-10 gap-y-10 md:w-auto md:flex-row md:px-10 lg:mr-10"
        >
          {Teams.map((team, index) => {
            return (
              // <motion.div
              //   key={index}
              //   variants={cardVariants}
              //   custom={index} // Pasa el índice como valor personalizado
              // >
              <ArticlesTeams
                color={team.color}
                content={team.content}
                links={team.links}
                key={index}
              >
                {team.svg}
              </ArticlesTeams>
              // </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AcmTeams;
