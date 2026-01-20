"use client";
import React, { useEffect, useState, useRef } from "react";
import { useMotionValue } from "framer-motion";
import Header from "@/components/common/layout/Header";
import Hero from "@/components/cuscontest/Hero";
import SimulatorSection from "@/components/cuscontest/SimulatorSection";
import About from "@/components/cuscontest/About";
import FAQSection from "@/components/cuscontest/FAQSection";

import { ReactLenis } from "lenis/react";
import Advantages from "@/components/cuscontest/Advantages/Advantages";
import WinnerCarousel from "@/components/cuscontest/Winners/WinnerCarousel";
import Footer from "@/components/common/layout/Footer";

const CuscontestPage = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const allWinners = [
    // Edition XXII - 2024
    { id: 1, edicion: "XXII", position: "1er", category: "Avanzado", equipo: "Te caigo con la gente seria", image: "/pages/cuscontest/winners/edition-22-advanced-1.webp", orientation: "vertical" },
    { id: 2, edicion: "XXII", position: "2do", category: "Avanzado", equipo: "Skueres Tristes", image: "/pages/cuscontest/winners/edition-22-advanced-2.webp", orientation: "horizontal" },
    { id: 3, edicion: "XXII", position: "3er", category: "Avanzado", equipo: "404: TeamNotFound", image: "/pages/cuscontest/winners/edition-22-advanced-3.webp", orientation: "horizontal" },
    { id: 4, edicion: "XXII", position: "1er", category: "Intermedio", equipo: "Deudores de Justi", image: "/pages/cuscontest/winners/edition-22-intermediate-1.webp", orientation: "horizontal" },
    { id: 5, edicion: "XXII", position: "2do", category: "Intermedio", equipo: "elUltimoCharDelTeclado", image: "/pages/cuscontest/winners/edition-22-intermediate-2.webp", orientation: "horizontal" },
    { id: 6, edicion: "XXII", position: "3er", category: "Intermedio", equipo: "(WA)witas", image: "/pages/cuscontest/winners/edition-22-intermediate-3.webp", orientation: "horizontal" },
    { id: 7, edicion: "XXII", position: "1er", category: "Principiante", equipo: "Pollitos", image: "/pages/cuscontest/winners/edition-22-beginner-1.webp", orientation: "horizontal" },
    { id: 8, edicion: "XXII", position: "2do", category: "Principiante", equipo: "2 integrantes y medio", image: "/pages/cuscontest/winners/edition-22-beginner-2.webp", orientation: "horizontal" },
    { id: 9, edicion: "XXII", position: "3er", category: "Principiante", equipo: "Un quispe Solitario", image: "/pages/cuscontest/winners/edition-22-beginner-3.webp", orientation: "horizontal" },
    
    // Edition XXI - 2023
    { id: 10, edicion: "XXI", position: "1er", category: "Avanzado", equipo: "Dos CIRILOS y un JUANITO", image: "/pages/cuscontest/winners/edition-21-advanced-1.webp", orientation: "horizontal" },
    { id: 11, edicion: "XXI", position: "2do", category: "Avanzado", equipo: "<Cambiar nombre>", image: "/pages/cuscontest/winners/edition-21-advanced-2.webp", orientation: "horizontal" },
    { id: 12, edicion: "XXI", position: "3er", category: "Avanzado", equipo: "Los cuchao y un mate", image: "/pages/cuscontest/winners/edition-21-advanced-3.webp", orientation: "horizontal" },
    { id: 13, edicion: "XXI", position: "1er", category: "Intermedio", equipo: "PERUCAPIBES", image: "/pages/cuscontest/winners/edition-21-intermediate-1.webp", orientation: "horizontal" },
    { id: 14, edicion: "XXI", position: "2do", category: "Intermedio", equipo: "The +Z's", image: "/pages/cuscontest/winners/edition-21-intermediate-2.webp", orientation: "horizontal" },
    { id: 15, edicion: "XXI", position: "3er", category: "Intermedio", equipo: "Clay", image: "/pages/cuscontest/winners/edition-21-intermediate-3.webp", orientation: "horizontal" },
    { id: 16, edicion: "XXI", position: "1er", category: "Principiante", equipo: "Pollitos", image: "/pages/cuscontest/winners/edition-21-beginner-1.webp", orientation: "horizontal" },
    { id: 17, edicion: "XXI", position: "2do", category: "Principiante", equipo: "runtime", image: "/pages/cuscontest/winners/edition-21-beginner-2.webp", orientation: "horizontal" },
    { id: 18, edicion: "XXI", position: "3er", category: "Principiante", equipo: "Tarserolindo", image: "/pages/cuscontest/winners/edition-21-beginner-3.webp", orientation: "horizontal" },
    
    // Edition XX - 2022
    { id: 19, edicion: "XX", position: "1er", category: "Women", equipo: "La gata bajo la lluvia", image: "/pages/cuscontest/winners/edition-20-winner-1.webp", orientation: "vertical" },
    { id: 20, edicion: "XX", position: "2do", category: "Women", equipo: "QueenCard", image: "/pages/cuscontest/winners/edition-20-winner-2.webp", orientation: "horizontal" },
    { id: 21, edicion: "XX", position: "1er", category: "Avanzado", equipo: "Watashi WA choudo nani ga", image: "/pages/cuscontest/winners/edition-20-advanced-1.webp", orientation: "horizontal" },
    { id: 22, edicion: "XX", position: "2do", category: "Avanzado", equipo: "Tres mochilas", image: "/pages/cuscontest/winners/edition-20-advanced-2.webp", orientation: "horizontal" },
    { id: 23, edicion: "XX", position: "3er", category: "Avanzado", equipo: "INF-ieles", image: "/pages/cuscontest/winners/edition-20-advanced-3.webp", orientation: "horizontal" },
    { id: 24, edicion: "XX", position: "1er", category: "Intermedio", equipo: "Articoders", image: "/pages/cuscontest/winners/edition-20-intermediate-1.webp", orientation: "horizontal" },
    { id: 25, edicion: "XX", position: "2do", category: "Intermedio", equipo: "Net Team", image: "/pages/cuscontest/winners/edition-20-intermediate-2.webp", orientation: "horizontal" },
    { id: 26, edicion: "XX", position: "3er", category: "Intermedio", equipo: "Print(Hello World)", image: "/pages/cuscontest/winners/edition-20-intermediate-3.webp", orientation: "horizontal" },
    { id: 27, edicion: "XX", position: "1er", category: "Principiante", equipo: "CON MIEDO AL EXITO", image: "/pages/cuscontest/winners/edition-20-beginner-1.webp", orientation: "horizontal" },
    { id: 28, edicion: "XX", position: "2do", category: "Principiante", equipo: "cout Mi cerebro no compila", image: "/pages/cuscontest/winners/edition-20-beginner-2.webp", orientation: "horizontal" },
    { id: 29, edicion: "XX", position: "3er", category: "Principiante", equipo: "Choclitos asados", image: "/pages/cuscontest/winners/edition-20-beginner-3.webp", orientation: "horizontal" },
  ];

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    setScrollbarWidth(scrollbarWidth);

    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`,
    );
  }, []);

  return (
    <>
      <ReactLenis root>
        <div className="bg-blue-git flex min-h-screen flex-col items-center">
          <Header delay={0} />
          <div className="flex w-full justify-center">
            <div className="max-w-pantalla lg mt-28 flex h-auto w-full flex-col items-center">
              <Hero />
              <SimulatorSection />
              <About />
              <Advantages />
              
              <WinnerCarousel
                winners={allWinners}
                dragX={x}
                containerRef={containerRef}
                widthSize={-2000}
              />
              
              <FAQSection />
            </div>
          </div>
        </div>
        <Footer />
      </ReactLenis>
    </>
  );
};

export default CuscontestPage;
