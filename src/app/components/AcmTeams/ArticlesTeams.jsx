import { LinksTeams } from "./LinksTeams"
import { TitleTeams } from "./TitleTeams"

export const ArticlesTeams = ({ children, color, content, links }) => {
  const { title, info } = content
  return (
    <article
      className="acmTeams_hover font-Opensans text-white-azul flex flex-col justify-between items-ceter pt-[33px]  bg-[#0F1317] shadow h-[245px] w-[336px] rounded-xl py-[16px] px-[30px] relative drop-shadow-[0_0_0.3rem_#000307] transition-all duration-300"
      style={{ '--hover-color': `#${color}` }}
    >
      <TitleTeams color={color} title={title}>
        {children}
      </TitleTeams>
      <p className="text-center">
        {info}
      </p>

      <LinksTeams links={links} color={color} />
    </article>
  )
}
