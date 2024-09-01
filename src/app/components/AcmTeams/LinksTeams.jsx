import { CodeSvg } from "../Svgs/CodeSvg"
import { PeopleSvg } from "../Svgs/PeopleSvg"

export const LinksTeams = ({ color, links }) => {
  const { code, website } = links
  return (
    <div className="flex items-center justify-between">
      <a href={code}>
        <PeopleSvg color={color} />
      </a>
      <a href={website}>
        <CodeSvg color={color} />
      </a>
    </div>
  )
}
