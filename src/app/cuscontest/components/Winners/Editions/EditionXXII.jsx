import clsx from "clsx";
import WinnerCard from "../WinnerCard";

const EditionXXII = ({ dragX, justParallax }) => {
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
        "relative h-screen w-[2900px]",
        justParallax && "!w-[1970px]",
      )}
    >
      <div className="desktop:top-50 desktop:left-30 absolute top-50 left-20">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[0]}
          w={12}
          tabletW={13}
          desktopW={15.6}
          positionZ={1}
          // inverted={true}
          switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-25 desktop:left-100 absolute top-25 left-70">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={5}
          winner={winners[1]}
          w={14}
          tabletW={17}
          desktopW={20}
          positionZ={2}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-96 desktop:left-150 absolute top-85 left-95">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={20}
          winner={winners[2]}
          w={12.4}
          tabletW={13}
          desktopW={15.6}
          positionZ={1}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-60 desktop:left-220 absolute top-60 left-156">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={5}
          winner={winners[3]}
          w={15}
          tabletW={18.3}
          desktopW={22.5}
          positionZ={justParallax ? 2.5 : 1}
          inverted={true}
          switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-25 desktop:left-320 absolute top-25 left-220">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={12}
          winner={winners[4]}
          w={15}
          tabletW={18.3}
          desktopW={22.5}
          positionZ={justParallax ? 2 : 2}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-100 desktop:left-370 absolute top-85 left-240">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={5}
          winner={winners[5]}
          w={10.5}
          tabletW={13.2}
          desktopW={16.25}
          positionZ={1}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-68 desktop:left-445 absolute top-58 left-300">
        <WinnerCard
          dragX={dragX}
          clipPathValue={10}
          winner={winners[6]}
          w={14}
          tabletW={17}
          desktopW={20}
          positionZ={justParallax ? 2.5 : 1}
          inverted={true}
          switchAtMiddle={true}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-30 desktop:left-540 absolute top-30 left-365">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={10}
          winner={winners[7]}
          w={14}
          tabletW={17}
          desktopW={20}
          positionZ={justParallax ? 1.7 : 3}
          justParallax={justParallax ? true : false}
        />
      </div>
      <div className="desktop:top-49 desktop:left-632 absolute top-49 left-432">
        <WinnerCard
          dragX={dragX}
          // clipPathValue={15}
          winner={winners[8]}
          w={12.5}
          tabletW={15.3}
          desktopW={18.75}
          positionZ={justParallax ? 1 : 2}
          justParallax={justParallax ? true : false}
        />
      </div>
    </div>
  );
};

export default EditionXXII;
