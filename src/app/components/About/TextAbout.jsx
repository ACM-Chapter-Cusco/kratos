import React from "react";
import Button from "../Header/Button";

const TextAbout = () => {
  return (
    <div className="flex flex-col items-center gap-y-12">
      <p className="font-Play text-lg text-gris2 sm:text-2xl lg:leading-tight">
        Somos un círculo de estudios formado por estudiantes de la carrera de
        Ingeniería Informática y de Sistemas de la Universidad UNSAAC, que
        compartimos interés por la informática y la tecnología, y estamos
        dispuestos a fomentar esta pasión mediante eventos, competencias y
        muchas actividades más.{" "}
      </p>
      <Button>More</Button>
    </div>
  );
};

export default TextAbout;
