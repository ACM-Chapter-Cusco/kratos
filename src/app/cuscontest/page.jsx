import React from "react";
import Header from "../components/Header";
import Hero from "./components/Hero";
import SimulatorSection from "./components/SimulatorSection";
import About from "./components/About";
import Comp from "./components/Comp";

const CuscontestPage = () => {
  return (
    <>
      <div className="bg-blue-git flex min-h-screen flex-col items-center">
        <Header />
        <div className="flex w-full justify-center">
          <div className="w-pantalla lg mt-28 flex h-auto flex-col items-center gap-10">
            <Hero />
            <SimulatorSection />
            <About />

            {/* quitar este div */}
            {/* <div className="h-60 w-full bg-green-500"></div>
            <Comp /> */}
            <div className="h-32 w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CuscontestPage;
