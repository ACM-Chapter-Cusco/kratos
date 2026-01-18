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
        "relative",
        type == "desktop" && "!w-[4000px] h-full",
        type == "mobile" && "!w-[2150px] h-full",
        type == "tablet" && "!w-[2250px] h-full",
      )}
    >
      <div className="desktop:top-15 tablet:top-15 absolute top-15">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[0]}
          w={10}
          tabletW={10}
          desktopW={14}
          positionZ={type != "desktop" ? 2.5 : 1}
          switchAtMiddle={true}
          type={type}
        />
      </div>
      <div className="desktop:top-0 desktop:left-80 tablet:top-0 tablet:left-45 absolute top-0 left-39">
        <WinnerCard
          dragX={dragX}
          winner={winners[1]}
          w={12}
          tabletW={12}
          desktopW={15}
          positionZ={type != "desktop" ? 2 : 1.5}
          type={type}
        />
      </div>
      <div className="desktop:top-69 desktop:left-120 tablet:top-65 tablet:left-60 absolute top-65 left-40">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[2]}
          w={18}
          tabletW={18}
          desktopW={22}
          positionZ={type != "desktop" ? 3 : 2}
          type={type}
        />
      </div>
      <div className="desktop:top-35 desktop:left-215 tablet:top-35 tablet:left-132 absolute top-35 left-105">
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
      <div className="desktop:top-0 desktop:left-300 tablet:top-0 tablet:left-193 absolute top-0 left-161">
        <WinnerCard
          dragX={dragX}
          winner={winners[4]}
          w={14}
          tabletW={14}
          desktopW={16}
          positionZ={1}
          type={type}
        />
      </div>
      <div className="desktop:top-57 desktop:left-360 tablet:top-60 tablet:left-225 absolute top-60 left-180">
        <WinnerCard
          dragX={dragX}
          winner={winners[5]}
          w={13}
          tabletW={13}
          desktopW={17}
          positionZ={type != "desktop" ? 2.5 : 1}
          type={type}
        />
      </div>
      <div className="desktop:top-35 desktop:left-450 tablet:top-45 tablet:left-275 absolute top-45 left-228">
        <WinnerCard
          dragX={dragX}
          winner={winners[6]}
          w={15}
          tabletW={15}
          desktopW={17}
          positionZ={type != "desktop" ? 2 : 1}
          switchAtMiddle={true}
          type={type}
        />
      </div>
      <div className="desktop:top-0 desktop:left-540 tablet:top-0 tablet:left-340 absolute top-0 left-288">
        <WinnerCard
          dragX={dragX}
          winner={winners[7]}
          w={12}
          tabletW={12}
          desktopW={14}
          positionZ={1}
          type={type}
        />
      </div>
      <div className="desktop:top-70 desktop:left-540 tablet:top-65 tablet:left-340 absolute top-63 left-280">
        <WinnerCard
          dragX={dragX}
          winner={winners[8]}
          w={16}
          tabletW={16}
          desktopW={18}
          positionZ={type != "desktop" ? 3 : 2}
          switchAtMiddle={true}
          type={type}
        />
      </div>

      <div className="desktop:top-50 desktop:left-642 tablet:top-55 tablet:left-405 absolute top-45 left-337">
        <WinnerCard
          dragX={dragX}
          winner={winners[9]}
          w={15}
          tabletW={15}
          desktopW={19}
          positionZ={type != "desktop" ? 2 : 1}
          switchAtMiddle={true}
          type={type}
        />
      </div>

      <div className="desktop:top-25 desktop:left-730 tablet:top-25 tablet:left-470 absolute top-15 left-397">
        <WinnerCard
          dragX={dragX}
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
