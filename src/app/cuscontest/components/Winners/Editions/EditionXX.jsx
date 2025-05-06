import clsx from "clsx";
import WinnerCard from "../WinnerCard";

const EditionXX = ({ dragX, justParallax }) => {
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
        "relative h-screen w-[4000px]",
        justParallax && "!w-[2150px]",
      )}
    >
      <div className="desktop:top-40 absolute top-40">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[0]}
          w={10}
          tabletW={12}
          desktopW={14}
          positionZ={justParallax ? 2.5 : 1}
          // inverted={true}
          switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-25 desktop:left-80 absolute top-25 left-45">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={5}
          winner={winners[1]}
          w={12}
          tabletW={14}
          desktopW={16}
          positionZ={justParallax ? 2 : 1.5}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-100 desktop:left-110 absolute top-90 left-60">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[2]}
          w={18}
          tabletW={21}
          desktopW={24}
          positionZ={justParallax ? 3 : 2}
          // switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-60 desktop:left-215 absolute top-60 left-132">
        <WinnerCard
          dragX={dragX}
          clipPathValue={5}
          winner={winners[3]}
          w={14}
          tabletW={16.2}
          desktopW={18.5}
          positionZ={justParallax ? 2 : 1}
          switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-25 desktop:left-300 absolute top-35 left-196">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={12}
          winner={winners[4]}
          w={14}
          tabletW={15}
          desktopW={17}
          positionZ={1}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-90 desktop:left-350 absolute top-100 left-220">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={5}
          winner={winners[5]}
          w={13}
          tabletW={15.5}
          desktopW={18}
          positionZ={justParallax ? 3 : 1}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-70 desktop:left-440 absolute top-70 left-275">
        <WinnerCard
          dragX={dragX}
          winner={winners[6]}
          w={15}
          tabletW={17.7}
          desktopW={20}
          positionZ={justParallax ? 2 : 1}
          switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-25 desktop:left-540 absolute top-40 left-340">
        <WinnerCard
          dragX={dragX}
          winner={winners[7]}
          w={12}
          tabletW={12.5}
          desktopW={15}
          positionZ={1}
          // switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-100 desktop:left-540 absolute top-110 left-340">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={15}
          winner={winners[8]}
          w={16}
          tabletW={18.5}
          desktopW={22}
          positionZ={justParallax ? 3 : 1}
          justParallax={justParallax ? true : false}
        />
      </div>

      <div className="desktop:top-75 desktop:left-642 absolute top-80 left-405">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={15}
          winner={winners[9]}
          w={15}
          tabletW={16}
          desktopW={19}
          positionZ={justParallax ? 2 : 1}
          switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>

      <div className="desktop:top-50 desktop:left-730 absolute top-50 left-470">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={15}
          winner={winners[10]}
          w={12}
          tabletW={14}
          desktopW={17}
          positionZ={justParallax ? 1 : 2}
          justParallax={justParallax ? true : false}
        />
      </div>
    </div>
  );
};

export default EditionXX;
