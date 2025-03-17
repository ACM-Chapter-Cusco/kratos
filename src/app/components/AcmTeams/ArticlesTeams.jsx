import { LinksTeams } from "./LinksTeams";
import { TitleTeams } from "./TitleTeams";
import clsx from "clsx";

import style from "./AcmTeams.module.css";

export const ArticlesTeams = ({ children, color, content, links }) => {
  const { title, info } = content;
  return (
    <article
      className={clsx(
        "items-ceter font-Opensans text-white-blue relative flex h-[245px] w-[336px] cursor-default flex-col justify-between rounded-xl bg-[#0F1317] px-[30px] py-[16px] pt-[33px] shadow drop-shadow-[0_0_0.3rem_#000307] transition-all duration-300 hover:-translate-y-[5px]",
        {
          "hover:drop-shadow-[0_0_0.7rem_var(--color-blue)]": color === "blue",
          "hover:drop-shadow-[0_0_0.7rem_var(--color-icpc)]": color === "icpc",
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
    </article>
  );
};
