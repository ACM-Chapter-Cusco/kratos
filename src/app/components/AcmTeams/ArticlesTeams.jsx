import { LinksTeams } from "./LinksTeams";
import { TitleTeams } from "./TitleTeams";

import style from "./AcmTeams.module.css";

export const ArticlesTeams = ({ children, color, content, links }) => {
  const { title, info } = content;
  return (
    <article
      className={`${style.acmTeams_hover} items-ceter relative flex h-[245px] w-[336px] flex-col justify-between rounded-xl bg-[#0F1317] px-[30px] py-[16px] pt-[33px] font-Opensans text-white-azul shadow drop-shadow-[0_0_0.3rem_#000307] transition-all duration-300`}
      style={{ "--hover-color": `#${color}` }}
    >
      <TitleTeams color={color} title={title}>
        {children}
      </TitleTeams>
      <p className="text-center font-Play text-lg">{info}</p>

      <LinksTeams links={links} color={color} />
    </article>
  );
};
