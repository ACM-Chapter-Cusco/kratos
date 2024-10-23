import React from "react";
import Button from "../Header/Button";

const TextAbout = () => {
  return (
    <div className="flex flex-col items-center gap-y-12">
      <p className="font-Play text-lg leading-tight text-gris2 sm:text-2xl">
        Somos un circulo de estudios formado por estudiantes de la carrera de
        Ingeniería Informática y de Sistemas de la universidad UNSAAC que
        compartimos interes por la informatica y la tecnologia dispuestos a
        fomentar esta pasion mediante eventos, compentencias y muchas
        actividades mas.{" "}
      </p>
      <Button>More</Button>
    </div>
  );
};

export default TextAbout;
