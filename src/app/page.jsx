import Header from "@/components/common/layout/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import AcmTeams from "@/components/home/AcmTeams";
import Events from "@/components/home/Events";
import Footer from "@/components/common/layout/Footer";
import Gallery from "@/components/home/Gallery";
import Leaders from "@/components/home/Leaders";
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
