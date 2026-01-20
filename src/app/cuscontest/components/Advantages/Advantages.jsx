import React from "react";
import AdvantagesScroll from "./AdvantagesScroll";
import AdvantagesDrag from "./AdvantagesDrag";

const cards = [
  {
    title: "Vives una experiencia increible con tu equipo",
    content:
      "La combinación del espíritu competitivo más el resolver los ejercicios con tu equipo hace que esta sea una experiencia inolvidable.",
    bgNumner: "/pages/cuscontest/advantages/card-1-number.webp",
    bgIcon: "/pages/cuscontest/advantages/card-1-icon.svg",
    bgImage: "/pages/cuscontest/advantages/card-1-bg.webp",
    id: 1,
  },
  {
    title: "Obtendras reconocimiento y premios",
    content:
      "Puedes quedar como una leyenda de la programación competitiva ante todos tus compañeros y además ganar premios muy geniales.",
    bgNumner: "/pages/cuscontest/advantages/card-2-number.webp",
    bgIcon: "/pages/cuscontest/advantages/card-2-icon.svg",
    bgImage: "/pages/cuscontest/advantages/card-2-bg.webp",
    id: 2,
  },
  {
    title: "Te abren oportunidades en tu carrera",
    content:
      "Demostraras tus  habilidades para resolver problemas ante posibles empleadores. Algunas empresas tech reclutan a los participantes habiles.",
    bgNumner: "/pages/cuscontest/advantages/card-3-number.webp",
    bgIcon: "/pages/cuscontest/advantages/card-3-icon.svg",
    bgImage: "/pages/cuscontest/advantages/card-3-bg.webp",
    id: 3,
  },
  {
    title: "Mejoras tu habilidad de resolucion de problemas",
    content:
      "Concursos como este desafían tus habilidades de resolución de problemas y algoritmos, lo que te ayuda a mejorar tu lógica y creatividad",
    bgNumner: "/pages/cuscontest/advantages/card-4-number.webp",
    bgIcon: "/pages/cuscontest/advantages/card-4-icon.svg",
    bgImage: "/pages/cuscontest/advantages/card-4-bg.webp",
    id: 4,
  },
  {
    title: "Practica para una futura entrevista tecnica",
    content:
      "Te prepararás para una entrevista técnica enfrentando problemas complejos bajo presión, similares a los que resolveras en el proceso de selección.",
    bgNumner: "/pages/cuscontest/advantages/card-5-number.webp",
    bgIcon: "/pages/cuscontest/advantages/card-5-icon.svg",
    bgImage: "/pages/cuscontest/advantages/card-5-bg.webp",
    id: 5,
  },
  {
    title: "Sales de tu zona de confort enfrentando un nuevo desafio",
    content:
      "Enfrentarte a un concurso de programación a pesar de no sentirte preparado se siente muy bien y te preparas mentalmente para el proximo.",
    bgNumner: "/pages/cuscontest/advantages/card-6-number.webp",
    bgIcon: "/pages/cuscontest/advantages/card-6-icon.svg",
    bgImage: "/pages/cuscontest/advantages/card-6-bg.webp",
    id: 6,
  },
];

const Advantages = () => {
  return (
    <>
      <div className="desktop:block hidden">
        <AdvantagesScroll cards={cards} />
      </div>
      <div className="desktop:hidden tablet:block hidden">
        <AdvantagesDrag cards={cards} dragConstraintLeft={-3700} />
      </div>
      <div className="tablet:hidden block">
        <AdvantagesDrag cards={cards} dragConstraintLeft={-2400} />
      </div>
    </>
  );
};

export default Advantages;
