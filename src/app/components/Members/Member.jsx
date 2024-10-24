import Image from "next/image";
import H2 from "../common/H2";

export const Member = ({ name, position, img }) => {
  return (
    <div className="flex w-[286px] items-center gap-4 rounded-[8px] bg-[#0F1317] px-2 py-1 drop-shadow-[0_0_0.3rem_#000307] transition-all duration-300 hover:drop-shadow-[0_0_0.3rem_#0A84FF]">
      <div>
        <Image
          className="h-[50px] w-[50px] rounded-full border border-[#0A84FF] object-cover"
          src={img}
          alt={name + "-" + position}
          width={50}
          height={50}
        />
      </div>
      <div className="items-left textleft flex flex-col justify-between">
        <p className="text-base">{name}</p>
        <span className="text-sm">{position}</span>
      </div>
    </div>
  );
};
