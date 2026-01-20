import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AcmTeams from "@/components/sections/AcmTeams";
import Events from "@/components/sections/Events";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/sections/Gallery";
import Leaders from "@/components/sections/Leaders";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <div className="bg-blue-git flex flex-col items-center">
          <Header delay={6.5} />
          <div className="flex w-full justify-center">
            <div className="w-pantalla flex h-auto flex-col items-center gap-10 overflow-hidden lg:pr-5">
              <Hero />
              <About />
              <Events />
              <AcmTeams />
              <Gallery />
              <Leaders />
            </div>
          </div>
        </div>
        <Footer />
      </ReactLenis>
    </>
  );
}
