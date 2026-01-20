import { PcSvg } from "./svgs/PcSvg";
import { BrainSvg } from "./svgs/BrainSvg";
import { CupSvg } from "./svgs/CupSvg";

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
