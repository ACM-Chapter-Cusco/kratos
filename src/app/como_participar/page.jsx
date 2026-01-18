import React from "react";
import Header from "../components/Header";
import ParticipationSteps from "./components/ParticipationSteps";

const ParticipationPage = () => {
  const participationSteps = [
    {
      id: "01",
      title: "Inscribe a tu equipo",
      duration: "Del 10 al 30 de Noviembre",
      buttonText: "Inscríbete",
      buttonLink: "#",
      hasVideo: true,
      imageSrc: "/participar/participar1.jpg",
    },
    {
      id: "02",
      title: "Practica",
      duration: "Hasta el día del concurso",
      description:
        "Refuerza tu capacidad de resolución y algorítmica con problemas de cuscontest anteriores",
      buttonText: "Practica con problemas pasados",
      buttonLink: "#",
      hasVideo: false,
      imageSrc: "/images/cuscontest/code-python.png",
    },
    {
      id: "03",
      duration: "El día del evento antes de concursar",
      title: "Recibe tu fotocheck",
      hasVideo: false,
      imageSrc: "/participar/cardParticipation.png",
    },
    {
      id: "04",
      duration: "Antes de iniciar el concurso",
      title: "Ingresa a la plataforma",
      description: "Ingresar el nombre de usuario y contraseña respectivos",
      hasVideo: false,
      imageSrc: "/participar/participar2.jpg",
    },
    {
      id: "05",
      duration: "Durante el concurso",
      title: "Manda la solución de un problema",
      hasVideo: false,
      imageSrc: "/participar/participar2.jpg",
    },
    {
      id: "06",
      duration: "después de terminar el concurso",
      title: "Preparate para recibir tu premio",
      description:
        "Ve al evento de premiación para ser reconocido por haber quedado entre los mejores 3 equipos de tu categoría, pero si no, aun puedes participar del emocionante sorteo de muchisimos regalos geniales.",
      hasVideo: false,
    },
  ];

  return (
    <div className="bg-blue-git flex min-h-screen flex-col items-center">
      <Header delay={0} />
      <main className="flex w-full justify-center">
        <section className="mt-28 flex h-auto w-full flex-col items-center gap-10">
          <div className="container mx-auto px-4">
            <h1 className="text-white-blue mb-12 text-center text-4xl font-bold md:text-5xl">
              Cómo <span className="text-blue">participar</span>
            </h1>
            <ParticipationSteps steps={participationSteps} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ParticipationPage;
