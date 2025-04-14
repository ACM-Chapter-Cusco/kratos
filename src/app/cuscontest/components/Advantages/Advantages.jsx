import React from "react";
import AdvantagesScroll from "./AdvantagesScroll";
import AdvantagesDrag from "./AdvantagesDrag";

const cards = [
  {
    title: "Vives una experiencia increible con tu equipo",
    content:
      "La combinación del espíritu competitivo más el resolver los ejercicios con tu equipo hace que esta sea una experiencia inolvidable.",
    bgNumner: "/cuscontest/card-1-number.png",
    bgIcon: "/cuscontest/card-1-icon.svg",
    bgImage: "/cuscontest/card-1-image.png",
    id: 1,
  },
  {
    title: "Obtendras reconocimiento y premios",
    content:
      "Puedes quedar como una leyenda de la programación competitiva ante todos tus compañeros y además ganar premios muy geniales.",
    bgNumner: "/cuscontest/card-2-number.png",
    bgIcon: "/cuscontest/card-2-icon.svg",
    bgImage: "/cuscontest/card-2-image.png",
    id: 2,
  },
  {
    title: "Te abren oportunidades en tu carrera",
    content:
      "Demostraras tus  habilidades para resolver problemas ante posibles empleadores. Algunas empresas tech reclutan a los participantes habiles.",
    bgNumner: "/cuscontest/card-3-number.png",
    bgIcon: "/cuscontest/card-3-icon.svg",
    bgImage: "/cuscontest/card-3-image.png",
    id: 3,
  },
  {
    title: "Mejoras tu habilidad de resolucion de problemas",
    content:
      "Concursos como este desafían tus habilidades de resolución de problemas y algoritmos, lo que te ayuda a mejorar tu lógica y creatividad",
    bgNumner: "/cuscontest/card-4-number.png",
    bgIcon: "/cuscontest/card-4-icon.svg",
    bgImage: "/cuscontest/card-4-image.png",
    id: 4,
  },
  {
    title: "Practica para una futura entrevista tecnica",
    content:
      "Te prepararás para una entrevista técnica enfrentando problemas complejos bajo presión, similares a los que resolveras en el proceso de selección.",
    bgNumner: "/cuscontest/card-5-number.png",
    bgIcon: "/cuscontest/card-5-icon.svg",
    bgImage: "/cuscontest/card-5-image.png",
    id: 5,
  },
  {
    title: "Sales de tu zona de confort enfrentando un nuevo desafio",
    content:
      "Enfrentarte a un concurso de programación a pesar de no sentirte preparado se siente muy bien y te preparas mentalmente para el proximo.",
    bgNumner: "/cuscontest/card-6-number.png",
    bgIcon: "/cuscontest/card-6-icon.svg",
    bgImage: "/cuscontest/card-6-image.png",
    id: 6,
  },
];

const Advantages = () => {
  return (
    <>
      <div className="desktop:block hidden">
        <AdvantagesScroll cards={cards} />
      </div>
      <div className="desktop:hidden block">
        <AdvantagesDrag cards={cards} />
      </div>
    </>
  );
};

export default Advantages;
