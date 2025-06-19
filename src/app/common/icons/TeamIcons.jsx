import { PcSvg } from "../Svgs/PcSvg";
import { BrainSvg } from "../Svgs/BrainSvg";
import { CupSvg } from "../Svgs/CupSvg";

export const getTeamIcon = (iconName) => {
  switch (iconName) {
    case "pc":
      return <PcSvg />;
    case "brain":
      return <BrainSvg />;
    case "cup":
      return <CupSvg />;
    default:
      return null;
  }
};
