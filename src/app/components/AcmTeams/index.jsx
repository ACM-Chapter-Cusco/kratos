import H2 from "../common/H2"
import { BrainSvg } from "../Svgs/BrainSvg"
import { CupSvg } from "../Svgs/CupSvg"
import { PcSvg } from "../Svgs/PcSvg"
import { ArticlesTeams } from "./ArticlesTeams"

const Teams = [
  {
    color: "A6FF00",
    content: {
      title: "dev",
      info: "Subgrupo de ACM que se enfoca en el desarrollo de software web"
    },
    links: {
      code: "#",
      weebsite: "#"
    },
    svg: <PcSvg />
  },
  {
    color: "00FFF6",
    content: {
      title: "inv",
      info: "Subgrupo de ACM que se enfoca en el desarrollo de software web"
    },
    links: {
      code: "#",
      weebsite: "#"
    },
    svg: <BrainSvg />
  },
  {
    color: "FA114F",
    content: {
      title: "icpc",
      info: "Subgrupo de ACM que se enfoca en el desarrollo de software web"
    },
    links: {
      code: "#",
      weebsite: "#"
    },
    svg: <CupSvg />
  }
]


const AcmTeams = () => {
  return (
    <section className="h-auto md:h-[90vh] w-auto flex flex-col items-center justify-around py-20 md:mx-28 text-white-azul">
      <H2 title="teams" />
      <div className="w-full flex flex-wrap flex-col md:flex-row justify-between items-center gap-x-2 gap-y-6">
        {Teams.map((team, index) => {
          return (
            <ArticlesTeams key={index} color={team.color} content={team.content} links={team.links}>
              {team.svg}
            </ArticlesTeams>
          )
        })
        }
      </div>

    </section>
  )
}

export default AcmTeams;