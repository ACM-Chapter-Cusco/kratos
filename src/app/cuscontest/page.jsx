import React from "react";
import Header from "../components/Header";
import Hero from "./components/Hero";
import SimulatorSection from "./components/SimulatorSection";
import About from "./components/About";
import Comp from "./components/Comp";
import FAQSection from "./components/FAQSection";

import { ReactLenis, useLenis } from "lenis/react";
import Advantages from "./components/Advantages/Advantages";

const CuscontestPage = () => {
  return (
    <>
      <ReactLenis root>
        <div className="bg-blue-git flex min-h-screen flex-col items-center">
          <Header animationDelay={0} />
          <div className="flex w-full justify-center">
            <div className="w-pantalla lg mt-28 flex h-auto flex-col items-center gap-10">
              <Hero />
              <SimulatorSection />
              <About />
              <Advantages />
              <FAQSection />
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default CuscontestPage;
