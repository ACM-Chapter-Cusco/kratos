import clsx from "clsx";
import WinnerCard from "../WinnerCard";

const EditionXXI = ({ dragX, justParallax }) => {
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
        "relative h-screen w-[2530px]",
        justParallax && "!w-[1850px]",
      )}
    >
      <div className="desktop:top-25 absolute top-25">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[0]}
          w={16}
          tabletW={20}
          desktopW={23.6}
          positionZ={justParallax ? 2.5 : 1}
          // inverted={true}
          // switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-110 desktop:left-30 absolute top-95 left-20">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={5}
          winner={winners[1]}
          w={12}
          tabletW={13}
          desktopW={14}
          positionZ={justParallax ? 1.7 : 1}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-70 desktop:left-110 absolute top-60 left-80">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[2]}
          w={12}
          tabletW={15.5}
          desktopW={17}
          positionZ={1}
          switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-25 desktop:left-190 absolute top-25 left-135">
        <WinnerCard
          dragX={dragX}
          clipPathValue={5}
          winner={winners[3]}
          w={18}
          tabletW={20.5}
          desktopW={22.5}
          positionZ={justParallax ? 3 : 1}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-105 desktop:left-200 absolute top-95 left-140">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={12}
          winner={winners[4]}
          w={14}
          tabletW={16}
          desktopW={17}
          positionZ={justParallax ? 2 : 1}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-48 desktop:left-290 absolute top-50 left-210">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={5}
          winner={winners[5]}
          w={15}
          tabletW={17}
          desktopW={18}
          positionZ={justParallax ? 1.5 : 1}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-70 desktop:left-375 absolute top-70 left-275">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[6]}
          w={15}
          tabletW={17.5}
          desktopW={20}
          positionZ={justParallax ? 3 : 1}
          switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-25 desktop:left-460 absolute top-35 left-335">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[7]}
          w={14}
          tabletW={17.5}
          desktopW={20}
          positionZ={2}
          // switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-60 desktop:left-542 absolute top-70 left-398">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={15}
          winner={winners[8]}
          w={12}
          tabletW={14.5}
          desktopW={17}
          positionZ={justParallax ? 1 : 3}
          justParallax={justParallax ? true : false}
        />
      </div>
    </div>
  );
};

export default EditionXXI;
