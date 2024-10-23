import H2 from "../common/H2";
import LeftLine from "../common/LeftLine";
import { BrainSvg } from "../Svgs/BrainSvg";
import { CupSvg } from "../Svgs/CupSvg";
import { PcSvg } from "../Svgs/PcSvg";
import { ArticlesTeams } from "./ArticlesTeams";

const Teams = [
  {
    color: "A6FF00",
    content: {
      title: "dev",
      info: "Subgrupo de ACM que se enfoca en el desarrollo de software web",
    },
    links: {
      code: "#",
      weebsite: "#",
    },
    svg: <PcSvg />,
  },
  {
    color: "00FFF6",
    content: {
      title: "inv",
      info: "Subgrupo de ACM que se enfoca en el desarrollo de software web",
    },
    links: {
      code: "#",
      weebsite: "#",
    },
    svg: <BrainSvg />,
  },
  {
    color: "FA114F",
    content: {
      title: "icpc",
      info: "Subgrupo de ACM que se enfoca en el desarrollo de software web",
    },
    links: {
      code: "#",
      weebsite: "#",
    },
    svg: <CupSvg />,
  },
];

const AcmTeams = () => {
  return (
    <section className="flex h-auto w-full flex-col items-center justify-around gap-16 py-20 text-white-azul md:h-[90vh] lg:gap-0">
      <H2 title="teams" />
      <div className="flex w-full items-center justify-between">
        <div className="hidden lg:block">
          <LeftLine color="0A84FF" />
        </div>
        <div className="flex w-full flex-col flex-wrap items-center justify-center gap-x-10 gap-y-10 md:w-auto md:flex-row md:px-10 lg:mr-10">
          {Teams.map((team, index) => {
            return (
              <ArticlesTeams
                key={index}
                color={team.color}
                content={team.content}
                links={team.links}
              >
                {team.svg}
              </ArticlesTeams>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcmTeams;
