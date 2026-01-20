import { CodeSvg } from "@/lib/icons/svgs/CodeSvg";
import { PeopleSvg } from "@/lib/icons/svgs/PeopleSvg";

export const LinksTeams = ({ color, links }) => {
  const { code, website } = links;
  return (
    <div className="flex items-center justify-between">
      <a href={code}>
        <PeopleSvg color={color} />
      </a>
      <a href={website}>
        <CodeSvg color={color} />
      </a>
    </div>
  );
};
