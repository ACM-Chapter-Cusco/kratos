import clsx from "clsx";
import WinnerCard from "../WinnerCard";

const EditionXXI = ({ dragX, type }) => {
  const winners = [
    {
      id: 1,
      edicion: "XXI",
      puesto: "1er Avanzado",
      equipo: "Dos CIRILOS y un JUANITO",
      image: "/cuscontest/winners/xxi-1-a.png",
    },
    {
      id: 2,
      edicion: "XXI",
      puesto: "2do Avanzado",
      equipo: "<Cambiar nombre>",
      image: "/cuscontest/winners/xxi-2-a.png",
    },
    {
      id: 3,
      edicion: "XXI",
      puesto: "3er Avanzado",
      equipo: "Los cuchao y un mate",
      image: "/cuscontest/winners/xxi-3-a.png",
    },
    {
      id: 4,
      edicion: "XXI",
      puesto: "1er Intermedio",
      equipo: "PERUCAPIBES",
      image: "/cuscontest/winners/xxi-1-i.png",
    },
    {
      id: 5,
      edicion: "XXI",
      puesto: "2do Intermedio",
      equipo: "The +Z's",
      image: "/cuscontest/winners/xxi-2-i.png",
    },
    {
      id: 6,
      edicion: "XXI",
      puesto: "3er Intermedio",
      equipo: "Clay",
      image: "/cuscontest/winners/xxi-3-i.png",
    },
    {
      id: 7,
      edicion: "XXI",
      puesto: "1er Principiante",
      equipo: "Pollitos",
      image: "/cuscontest/winners/xxi-1-b.png",
    },
    {
      id: 8,
      edicion: "XXI",
      puesto: "2do Principiante",
      equipo: "runtime",
      image: "/cuscontest/winners/xxi-2-b.png",
    },
    {
      id: 9,
      edicion: "XXI",
      puesto: "3er Principiante",
      equipo: "Tarserolindo",
      image: "/cuscontest/winners/xxi-3-b.png",
    },
  ];

  return (
    <div
      className={clsx(
        "relative ",
        type == "desktop" && "!w-[2530px] h-full",
        type == "mobile" && "!w-[1600px] h-full",
        type == "tablet" && "!w-[1730px] h-full",
      )}
    >
      <div className="desktop:top-0 tablet:top-0 absolute top-0">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[0]}
          w={16}
          tabletW={18}
          desktopW={23.6}
          positionZ={type != "desktop" ? 2.5 : 1}
          type={type}
        />
      </div>
      <div className="desktop:top-85 desktop:left-30 tablet:top-70 tablet:left-14 absolute top-70 left-20">
        <WinnerCard
          dragX={dragX}
          winner={winners[1]}
          w={12}
          tabletW={14}
          desktopW={14}
          positionZ={type != "desktop" ? 1.7 : 1}
          type={type}
        />
      </div>
      <div className="desktop:top-45 desktop:left-110 tablet:top-35 tablet:left-75 absolute top-35 left-71">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[2]}
          w={12}
          tabletW={15}
          desktopW={17}
          positionZ={1}
          switchAtMiddle={true}
          type={type}
        />
      </div>
      <div className="desktop:top-0 desktop:left-190 tablet:top-0 tablet:left-145 absolute top-0 left-119">
        <WinnerCard
          dragX={dragX}
          clipPathValue={5}
          winner={winners[3]}
          w={18}
          tabletW={18}
          desktopW={22.5}
          positionZ={type != "desktop" ? 3 : 1}
          type={type}
        />
      </div>
      <div className="desktop:top-80 desktop:left-200 tablet:top-70 tablet:left-140 absolute top-70 left-130">
        <WinnerCard
          dragX={dragX}
          winner={winners[4]}
          w={14}
          tabletW={14}
          desktopW={17}
          positionZ={type != "desktop" ? 2 : 1}
          type={type}
        />
      </div>
      <div className="desktop:top-23 desktop:left-290 tablet:top-25 tablet:left-210 absolute top-25 left-185">
        <WinnerCard
          dragX={dragX}
          winner={winners[5]}
          w={15}
          tabletW={15}
          desktopW={18}
          positionZ={type == "desktop" ? 1 : type == "tablet" ? 2.5 : 1.5}
          type={type}
        />
      </div>
      <div className="desktop:top-45 desktop:left-375 tablet:top-45 tablet:left-260 absolute top-45 left-238">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[6]}
          w={15}
          tabletW={15}
          desktopW={20}
          positionZ={type != "desktop" ? 3 : 1}
          switchAtMiddle={true}
          type={type}
        />
      </div>
      <div className="desktop:top-0 desktop:left-460 tablet:top-10 tablet:left-319 absolute top-10 left-292">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[7]}
          w={14}
          tabletW={14}
          desktopW={20}
          positionZ={2}
          type={type}
        />
      </div>
      <div className="desktop:top-35 desktop:left-542 tablet:top-45 tablet:left-374 absolute top-45 left-347">
        <WinnerCard
          dragX={dragX}
          winner={winners[8]}
          w={12}
          tabletW={12}
          desktopW={17}
          positionZ={type == "desktop" ? 3 : type == "tablet" ? 1.5 : 1}
          type={type}
        />
      </div>
    </div>
  );
};

export default EditionXXI;
