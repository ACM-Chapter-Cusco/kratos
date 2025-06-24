import Image from "next/image";

function ImageStyles({ src }) {
  return (
    <Image
      src={src}
      alt="image"
      width={800}
      height={800}
      className="max-lgddcdc:rounded-md h-full w-full rounded-xl object-cover brightness-90 contrast-150 saturate-150 transition-transform duration-300 ease-in-out hover:scale-105"
    />
  );
}

export function Seccion6Normal() {
  return (
    <div
      className="mx-auto flex h-auto w-full max-w-7xl flex-col items-center gap-7 p-4 max-lg:gap-5 max-md:hidden"
      id="seccion6"
    >
      {/* Seccion 1 - fila 1 */}
      <div
        className="mx-auto flex w-4/5 flex-row justify-center gap-6 max-lg:gap-4"
        id="row-1"
      >
        <div className="h-[16vw] w-[52%]" id="image-1">
          <ImageStyles src="/participar/Cuscontest01.jpg" />
        </div>
        <div className="h-[16vw] w-[34%]" id="image-2">
          <ImageStyles src="/participar/Cuscontest02.jpg" />
        </div>
      </div>
      {/* Seccion 2 - fila 2 */}
      <div
        className="mx-auto flex w-[95%] flex-row justify-end gap-5 max-lg:gap-3.5"
        id="row-2"
      >
        {/* Seccion 2 - fila 2 - columna 1 */}
        <div className="flex w-2/5 flex-col gap-6 max-lg:gap-4" id="col-1">
          {/* Seccion 2 - fila 2 - columna 1 - fila 1*/}
          <div className="flex w-full flex-row gap-5 max-lg:gap-3.5" id="row-1">
            <div className="h-[11vw] w-[55%]" id="image-1">
              <ImageStyles src="/participar/Cuscontest03.jpg" />
            </div>
            <div className="h-[11vw] w-[45%]" id="image-2">
              <ImageStyles src="/participar/Cuscontest04.jpg" />
            </div>
          </div>
          {/* Seccion 2 - fila 2 - columna 1 - fila 2*/}
          <div className="flex w-full justify-end" id="row-2">
            <div className="h-[14vw] w-4/5">
              <ImageStyles src="/participar/Cuscontest06.jpg" />
            </div>
          </div>
          <div
            className="flex w-full items-end justify-end pt-[1.9vw] max-xl:pt-[1.5]"
            id="row-2"
          >
            <span className="text-6xl font-extrabold text-[#A5B6CF] max-lg:text-5xl">
              DISFRUTA
            </span>
          </div>
        </div>
        {/* Seccion 2 - fila 2 - columna 2 */}
        <div className="flex w-[60%] flex-col gap-7 max-lg:gap-5" id="col-2">
          <div className="flex w-full justify-start" id="row-2">
            <div className="h-[21vw] w-full">
              <ImageStyles src="/participar/Cuscontest05.jpg" />
            </div>
          </div>
          <div className="flex flex-row gap-4 max-lg:gap-2.5" id="row-2">
            <div className="h-[12vw] w-[35%]" id="image-1">
              <ImageStyles src="/participar/Cuscontest07.jpg" />
            </div>
            <div className="h-[12vw] w-1/2" id="image-2">
              <ImageStyles src="/participar/Cuscontest08.jpg" />
            </div>
          </div>
        </div>
      </div>
      {/* Seccion 3 - fila 3 */}
      <div
        className="flex flex-col items-center leading-tight font-extrabold"
        id="row-3"
      >
        <p>
          <span className="inline-block rotate-[270deg] transform pl-1.5 text-5xl text-[#b8c6d9] max-lg:text-4xl">
            DE
          </span>
          <span className="text-7xl text-[#b8c6d9] max-lg:text-6xl">
            ESTA EMOCIONANTE{" "}
          </span>
        </p>
        <p className="text-[120px] text-[#0088ff] max-lg:text-8xl">
          EXPERIENCIA
        </p>
      </div>
    </div>
  );
}

export function Seccion6Mobile() {
  return (
    <div
      className="mx-auto flex h-auto w-full max-w-7xl items-center gap-7 p-4 md:hidden"
      id="seccion6"
    >
      <div className="flex h-auto w-full flex-col items-center justify-center gap-6">
        <div className="h-[36vw] w-4/5">
          <ImageStyles src="/participar/Cuscontest01.jpg" />
        </div>
        {/*Cuadrado*/}
        <div className="flex w-11/12 flex-row gap-6">
          <div className="flex w-[55%] flex-col gap-6">
            <div className="h-[30vw]">
              <ImageStyles src="/participar/Cuscontest02.jpg"></ImageStyles>
            </div>
            <div className="h-[25vw]">
              <ImageStyles src="/participar/Cuscontest06.jpg"></ImageStyles>
            </div>
          </div>
          <div className="flex w-2/5 flex-col gap-6">
            <div className="h-[22vw]">
              <ImageStyles src="/participar/Cuscontest03.jpg"></ImageStyles>
            </div>
            <div className="h-[33vw]">
              <ImageStyles src="/participar/Cuscontest04.jpg"></ImageStyles>
            </div>
          </div>
        </div>
        <div className="h-[36vh] w-11/12">
          <ImageStyles src="/participar/Cuscontest05.jpg" />
        </div>
        <div className="flex h-[20vh] w-4/5 flex-row gap-6">
          <div className="w-3/5">
            <ImageStyles src="/participar/Cuscontest06.jpg" />
          </div>
          <div className="w-2/5">
            <ImageStyles src="/participar/Cuscontest07.jpg" />
          </div>
        </div>
        <div className="flex w-4/5 flex-col items-center gap-2 text-gray-400">
          <div className="flex flex-row items-center justify-center">
            <div className="flex w-[58%] flex-col justify-center gap-1">
              <span className="text-3xl font-extrabold">DISFRUTA</span>
              <span className="text-3xl font-extrabold">DE ESTA</span>
            </div>
            {/* Right Section: Image */}
            <div className="h-[10vh] w-[32vw]">
              <ImageStyles src="/participar/Cuscontest08.jpg" />
            </div>
          </div>
          <div className="flex w-4/5 flex-col items-center">
            <span className="text-4xl font-extrabold">EMOCIONANTE</span>
            <span className="text-5xl font-extrabold text-[#0088ff]">
              EXPERIENCIA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Seccion6() {
  return (
    <div className="h-auto w-full py-10">
      <Seccion6Normal />
      <Seccion6Mobile />
    </div>
  );
}
