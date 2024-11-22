import React from "react";
import Header from "../components/Header";
import Hero from "./components/Hero";

const CuscontestPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-azul-git">
        <Header />
        <div className="flex w-full justify-center">
          <div className="w-pantalla lg mt-28 flex h-auto flex-col items-center gap-10">
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
};

export default CuscontestPage;
