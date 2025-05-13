"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Hero from "./components/Hero";
import SimulatorSection from "./components/SimulatorSection";
import About from "./components/About";
import Comp from "./components/Comp";
import FAQSection from "./components/FAQSection";

import { ReactLenis, useLenis } from "lenis/react";
import Advantages from "./components/Advantages/Advantages";
import Winners from "./components/Winners/Winners";
import { useScroll } from "framer-motion";

const CuscontestPage = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    // Calculate the width of the scrollbar
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    setScrollbarWidth(scrollbarWidth);

    // We can also set it as a CSS variable to use it in other places
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`,
    );
  }, []);

  return (
    <>
      <ReactLenis root>
        <div className="bg-blue-git flex min-h-screen flex-col items-center">
          <Header />
          <div className="flex w-full justify-center">
            <div className="max-w-pantalla lg mt-28 flex h-auto w-full flex-col items-center">
              <Hero />
              <SimulatorSection />
              <About />
              <Advantages />
              <Winners />
              <FAQSection />
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default CuscontestPage;
