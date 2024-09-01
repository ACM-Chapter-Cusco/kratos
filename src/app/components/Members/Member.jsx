import Image from "next/image";

export const Member = ({ name, position, img }) => {
  return (
    <div className="flex items-center gap-4 bg-[#0F1317] py-1 px-2 w-[286px] rounded-[8px] drop-shadow-[0_0_0.3rem_#000307] transition-all duration-300 hover:drop-shadow-[0_0_0.3rem_#0A84FF]">
      <div>
        <Image
          className="rounded-full border border-[#0A84FF] h-[50px] w-[50px] object-cover"
          src={img}
          alt={name + "-" + position}
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col items-left justify-between textleft">
        <p className="text-base">{name}</p>
        <span className="text-sm">{position}</span>
      </div>
    </div>
  )
}
