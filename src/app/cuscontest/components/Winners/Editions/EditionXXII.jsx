import clsx from "clsx";
import WinnerCard from "../WinnerCard";

const EditionXXII = ({ dragX, type }) => {
  const winners = [
    {
      id: 1,
      edicion: "XXII",
      puesto: "1er Avanzado",
      equipo: "Te caigo con la gente seria",
      image: "/cuscontest/winners/xxii-1-a.png",
    },
    {
      id: 2,
      edicion: "XXII",
      puesto: "2do Avanzado",
      equipo: "Skueres Tristes",
      image: "/cuscontest/winners/xxii-2-a.png",
    },
    {
      id: 3,
      edicion: "XXII",
      puesto: "3er Avanzado",
      equipo: "404: TeamNotFound",
      image: "/cuscontest/winners/xxii-3-a.png",
    },
    {
      id: 4,
      edicion: "XXII",
      puesto: "1er Intermedio",
      equipo: "Deudores de Justi",
      image: "/cuscontest/winners/xxii-1-i.png",
    },
    {
      id: 5,
      edicion: "XXII",
      puesto: "2do Intermedio",
      equipo: "elUltimoCharDelTeclado",
      image: "/cuscontest/winners/xxii-2-i.png",
    },
    {
      id: 6,
      edicion: "XXII",
      puesto: "3er Intermedio",
      equipo: "(WA)witas",
      image: "/cuscontest/winners/xxii-3-i.png",
    },
    {
      id: 7,
      edicion: "XXII",
      puesto: "1er Principiante",
      equipo: "Pollitos",
      image: "/cuscontest/winners/xxii-1-b.png",
    },
    {
      id: 8,
      edicion: "XXII",
      puesto: "2do Principiante",
      equipo: "2 integrantes y medio",
      image: "/cuscontest/winners/xxii-2-b.png",
    },
    {
      id: 9,
      edicion: "XXII",
      puesto: "3er Principiante",
      equipo: "Un quispe Solitario",
      image: "/cuscontest/winners/xxii-3-b.png",
    },
  ];
 
  return (
    <div
      className={clsx(
        "relative ",
        type == "desktop" && "!w-[2900px] h-full",
        type == "mobile" && "!w-[1692px] h-full",
        type == "tablet" && "!w-[2030px] h-full",
      )}
    >
      <div className=" desktop:top-25 desktop:left-30 tablet:top-25 tablet:left-50 absolute top-25 left-20">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[0]}
          w={12}
          tabletW={12}
          desktopW={15.6}
          positionZ={type == "desktop" ? 1 : type == "tablet" ? 2 : 2.5}
          switchAtMiddle={true}
          type={type}
        />
      </div>
      <div className="desktop:top-0 desktop:left-100 tablet:top-0 tablet:left-90 absolute top-0 left-65">
        <WinnerCard
          dragX={dragX}
          winner={winners[1]}
          w={14}
          tabletW={16}
          desktopW={20}
          positionZ={type == "desktop" ? 2 : type == "tablet" ? 1.7 : 2}
          type={type}
        />
      </div>
      <div className="desktop:top-75 desktop:left-142 tablet:top-67 tablet:left-115 absolute top-60 left-85">
        <WinnerCard
          dragX={dragX}
          winner={winners[2]}
          w={14}
          tabletW={14}
          desktopW={18}
          positionZ={1}
          type={type}
        />
      </div>
      <div className="desktop:top-35 desktop:left-220 tablet:top-35 tablet:left-173 absolute top-35 left-137">
        <WinnerCard
          dragX={dragX}
          winner={winners[3]}
          w={15}
          tabletW={17}
          desktopW={22.5}
          positionZ={type != "desktop" ? 2.5 : 1}
          inverted={true}
          switchAtMiddle={true}
          type={type}
        />
      </div>
      <div className="desktop:top-0 desktop:left-320 tablet:top-0 tablet:left-234 absolute top-0 left-189">
        <WinnerCard
          dragX={dragX}
          winner={winners[4]}
          w={17}
          tabletW={19}
          desktopW={22.5}
          positionZ={type != "desktop" ? 2 : 2}
          type={type}
        />
      </div>
      <div className="desktop:top-75 desktop:left-370 tablet:top-65 tablet:left-255 absolute top-60 left-210">
        <WinnerCard
          dragX={dragX}
          winner={winners[5]}
          w={13}
          tabletW={13}
          desktopW={16.25}
          positionZ={1}
          type={type}
        />
      </div>
      <div className="desktop:top-43 desktop:left-445 tablet:top-33 tablet:left-315 absolute top-33 left-260">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[6]}
          w={14}
          tabletW={17}
          desktopW={20}
          positionZ={type != "desktop" ? 2.5 : 1}
          inverted={true}
          switchAtMiddle={true}
          type={type}
        />
      </div>
      <div className="desktop:top-5 desktop:left-540 tablet:top-5 tablet:left-380 absolute top-5 left-310">
        <WinnerCard
          dragX={dragX}
          winner={winners[7]}
          w={16}
          tabletW={16}
          desktopW={20}
          positionZ={type != "desktop" ? 1.7 : 3}
          type={type}
        />
      </div>
      <div className="desktop:top-24 desktop:left-632 tablet:top-28 tablet:left-447 absolute top-24 left-374">
        <WinnerCard
          dragX={dragX}
          winner={winners[8]}
          w={12.5}
          tabletW={12.5}
          desktopW={18.75}
          positionZ={type != "desktop" ? 1 : 2}
          type={type}
        />
      </div>
    </div>
  );
};

export default EditionXXII;
