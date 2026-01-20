import {
  createDelayedVariant,
  createStaggerContainer,
} from "@/lib/animations/shared";
import FAQItem from "./FAQItem";
import { motion } from "framer-motion";
import {
  springDown,
  staggerContainer,
} from "@/lib/animations/entrances";

const questionsItems = [
  {
    id: 1,
    question: "¿Cómo participo?",
    answer:
      "Forma un equipo de hasta tres integrantes, completa toda la información necesaria en el formulario a continuación (poner un link al form), paga la inscripción ¡y estarás listo para competir!",
  },
  {
    id: 2,
    question: "¿Dónde se llevará a cabo el concurso?",
    answer:
      "El concurso se llevará a cabo en los laboratorios de la Escuela Profesional de Ingeniería Informática y de Sistemas de la UNSAAC.",
  },
  {
    id: 3,
    question: "¿Qué tengo que llevar?",
    answer:
      "Puedes traer lápiz, papel y cualquier material impreso que necesites para desarrollar tus soluciones. Se te permite utilizar libros y material impreso durante la competencia.",
  },
  {
    id: 4,
    question: "¿Debo llevar mi laptop?",
    answer:
      "No es necesario. A cada equipo se le asignará una computadora, la cual estará configurada con todos los lenguajes de programación compatibles con el juez del concurso.",
  },
  {
    id: 5,
    question: "¿Qué no se me permite hacer?",
    answer:
      "No está permitido el uso de aparatos electrónicos, además, está completamente prohibido acceder a internet o cualquier otra red durante el concurso.",
  },
  {
    id: 6,
    question: "¿Hay requisitos previos para participar?",
    answer:
      "No hay requisitos formales, sólo el entusiasmo por competir. Sin embargo, es recomendable que al menos uno de los integrantes del equipo tenga conocimientos básicos de programación.",
  },
  {
    id: 7,
    question: "¿Cuánto tiempo se tarda en conocer los resultados?",
    answer:
      "La premiación se realiza apenas finaliza el concurso. Los puntajes detallados de cada equipo se publicarán aproximadamente una semana después.",
  },
  {
    id: 8,
    question: "¿Habrá refrigerios o descansos durante el concurso?",
    answer:
      "A las 2 horas y media de iniciado el concurso, se repartirá un refrigerio a cada integrante de los equipos.",
  },
  {
    id: 9,
    question:
      "¿Qué debo hacer si tengo un problema técnico durante la competencia?",
    answer:
      "Si enfrentas algún problema técnico, debes informar al encargado del salón, que puede ser un profesor o un estudiante ubicado en la parte frontal. Ellos notificarán al equipo de soporte para resolver el inconveniente lo más pronto posible.",
  },
];

const FAQSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto w-full max-w-[60.5rem] px-[1rem] py-[8rem]"
    >
      <motion.h2
        variants={createDelayedVariant(springDown, 0.5)}
        className="text-h5 text-white-blue font-Opensans mb-[4rem] text-center font-[800] text-white"
      >
        Preguntas <span className="text-blue">Frecuentes</span>
      </motion.h2>

      <motion.div variants={createStaggerContainer(0.3, 1.2)}>
        {questionsItems.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FAQSection;
