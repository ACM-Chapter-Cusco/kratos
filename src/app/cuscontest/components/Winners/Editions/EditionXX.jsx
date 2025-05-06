import clsx from "clsx";
import WinnerCard from "../WinnerCard";

const EditionXX = ({ dragX, type }) => {
  const winners = [
    {
      id: 0,
      edicion: "XX",
      puesto: "1er Women",
      equipo: "La gata bajo la lluvia",
      image: "/cuscontest/winners/xx-1-w.png",
    },
    {
      id: 1,
      edicion: "XX",
      puesto: "2do Women",
      equipo: "QueenCard",
      image: "/cuscontest/winners/xx-2-w.png",
    },
    {
      id: 2,
      edicion: "XX",
      puesto: "1er Avanzado",
      equipo: "Watashi WA choudo nani ga",
      image: "/cuscontest/winners/xx-1-a.png",
    },
    {
      id: 3,
      edicion: "XX",
      puesto: "2do Avanzado",
      equipo: "Tres mochilas",
      image: "/cuscontest/winners/xx-2-a.png",
    },
    {
      id: 4,
      edicion: "XX",
      puesto: "3er Avanzado",
      equipo: "INF-ieles",
      image: "/cuscontest/winners/xx-3-a.png",
    },
    {
      id: 5,
      edicion: "XX",
      puesto: "1er Intermedio",
      equipo: "Articoders",
      image: "/cuscontest/winners/xx-1-i.png",
    },
    {
      id: 6,
      edicion: "XX",
      puesto: "2do Intermedio",
      equipo: "Net Team",
      image: "/cuscontest/winners/xx-2-i.png",
    },
    {
      id: 7,
      edicion: "XX",
      puesto: "3er Intermedio",
      equipo: "Print(Hello World)",
      image: "/cuscontest/winners/xx-3-i.png",
    },
    {
      id: 8,
      edicion: "XX",
      puesto: "1er Principiante",
      equipo: "CON MIEDO AL EXITO",
      image: "/cuscontest/winners/xx-1-b.png",
    },
    {
      id: 9,
      edicion: "XX",
      puesto: "2do Principiante",
      equipo: "cout Mi cerebro no compila",
      image: "/cuscontest/winners/xx-2-b.png",
    },
    {
      id: 10,
      edicion: "XX",
      puesto: "3er Principiante",
      equipo: "Choclitos asados",
      image: "/cuscontest/winners/xx-3-b.png",
    },
  ];

  return (
    <div
      className={clsx(
        "relative h-screen",
        type == "desktop" && "!w-[4000px]",
        type == "mobile" && "!w-[2150px]",
        type == "tablet" && "!w-[2250px]",
      )}
    >
      <div className="desktop:top-40 tablet:top-40 absolute top-40">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[0]}
          w={10}
          tabletW={10}
          desktopW={14}
          positionZ={type != "desktop" ? 2.5 : 1}
          // inverted={true}
          switchAtMiddle={true}
          type={type}
        />
      </div>
      <div className="desktop:top-25 desktop:left-80 tablet:top-25 tablet:left-45 absolute top-25 left-39">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={5}
          winner={winners[1]}
          w={12}
          tabletW={12}
          desktopW={16}
          positionZ={type != "desktop" ? 2 : 1.5}
          type={type}
        />
      </div>
      <div className="desktop:top-100 desktop:left-110 tablet:top-90 tablet:left-60 absolute top-90 left-40">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[2]}
          w={18}
          tabletW={18}
          desktopW={24}
          positionZ={type != "desktop" ? 3 : 2}
          // switchAtMiddle={true}
          type={type}
        />
      </div>
      <div className="desktop:top-60 desktop:left-215 tablet:top-60 tablet:left-132 absolute top-60 left-105">
        <WinnerCard
          dragX={dragX}
          clipPathValue={5}
          winner={winners[3]}
          w={14}
          tabletW={14}
          desktopW={18.5}
          positionZ={type != "desktop" ? 2 : 1}
          switchAtMiddle={true}
          type={type}
        />
      </div>
      <div className="desktop:top-25 desktop:left-300 tablet:top-35 tablet:left-196 absolute top-35 left-161">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={12}
          winner={winners[4]}
          w={14}
          tabletW={14}
          desktopW={17}
          positionZ={1}
          type={type}
        />
      </div>
      <div className="desktop:top-90 desktop:left-350 tablet:top-100 tablet:left-220 absolute top-100 left-180">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={5}
          winner={winners[5]}
          w={13}
          tabletW={13}
          desktopW={18}
          positionZ={type != "desktop" ? 3 : 1}
          type={type}
        />
      </div>
      <div className="desktop:top-70 desktop:left-440 tablet:top-70 tablet:left-275 absolute top-70 left-228">
        <WinnerCard
          dragX={dragX}
          winner={winners[6]}
          w={15}
          tabletW={15}
          desktopW={20}
          positionZ={type != "desktop" ? 2 : 1}
          switchAtMiddle={true}
          type={type}
        />
      </div>
      <div className="desktop:top-25 desktop:left-540 tablet:top-30 tablet:left-340 absolute top-40 left-288">
        <WinnerCard
          dragX={dragX}
          winner={winners[7]}
          w={12}
          tabletW={12}
          desktopW={15}
          positionZ={1}
          // switchAtMiddle={true}
          type={type}
        />
      </div>
      <div className="desktop:top-100 desktop:left-540 tablet:top-100 tablet:left-340 absolute top-110 left-280">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={15}
          winner={winners[8]}
          w={16}
          tabletW={16}
          desktopW={22}
          positionZ={type != "desktop" ? 3 : 1}
          type={type}
        />
      </div>

      <div className="desktop:top-75 desktop:left-642 tablet:top-80 tablet:left-405 absolute top-80 left-337">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={15}
          winner={winners[9]}
          w={15}
          tabletW={15}
          desktopW={19}
          positionZ={type != "desktop" ? 2 : 1}
          switchAtMiddle={true}
          type={type}
        />
      </div>

      <div className="desktop:top-50 desktop:left-730 tablet:top-50 tablet:left-470 absolute top-50 left-397">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={15}
          winner={winners[10]}
          w={12}
          tabletW={12}
          desktopW={17}
          positionZ={type != "desktop" ? 1 : 2}
          type={type}
        />
      </div>
    </div>
  );
};

export default EditionXX;
