"use client";

import { fadeIn, springDown } from "../../common/animations/entrances";
import {
  createDelayedVariant,
  createStaggerContainer,
  delays,
} from "../../common/animations/shared";
import H2 from "../../common/H2";
import LeftLine from "../../common/LeftLine";
import { ArticlesTeams } from "./ArticlesTeams";
import { motion } from "framer-motion";
import { teamsData } from "@/app/data/landingPage/teams";
import { getTeamIcon } from "@/app/common/icons/TeamIcons";

const AcmTeams = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className="text-white-blue relative flex h-auto w-full flex-col items-center justify-around gap-16 py-20 lg:gap-0"
    >
      <motion.div
        variants={createDelayedVariant(springDown, 0)}
        className="top-16 left-0 flex w-full justify-center lg:absolute"
      >
        <H2 title="teams" />
      </motion.div>
      <motion.div className="flex w-full items-center justify-between">
        <motion.div
          variants={createDelayedVariant(fadeIn, 0)}
          className="hidden lg:block"
        >
          <LeftLine color="0A84FF" />
        </motion.div>
        <motion.div
          variants={createStaggerContainer(0.5, 0.3, 0)}
          className="flex w-full flex-col flex-wrap items-center justify-center gap-x-10 gap-y-10 md:w-auto md:flex-row md:px-10 lg:mr-10"
        >
          {teamsData.map((team, index) => {
            return (
              <ArticlesTeams
                color={team.color}
                content={team.content}
                links={team.links}
                key={index}
              >
                {getTeamIcon(team.icon)}
              </ArticlesTeams>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AcmTeams;
