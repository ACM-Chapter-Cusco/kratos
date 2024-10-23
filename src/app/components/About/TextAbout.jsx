import React from "react";
import Button from "../Header/Button";

const TextAbout = () => {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <div className="flex flex-col items-end ">
        <h3 className="text-[35px]  md:text-[40px]  font-extrabold font-Opensans leading-tight">
          <span className="text-blue">ACM.</span>Chapter.Cusco
        </h3>
        <h3 className="text-[30px] leading-tight text-blue">UNSAAC</h3>
      </div>
      <p className="font-Play text-[26px] leading-tight text-gris2">
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
