import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import AcmTeams from "./components/AcmTeams";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Leaders from "./components/Leaders";
import PruebaAnimation from "./components/PruebaAnimation";

export default function Home() {
  return (
    <>
      {/*Header principal*/}

      <div className="bg-blue-git flex flex-col items-center">
        <Header />
        <div className="flex w-full justify-center">
          <div className="w-pantalla flex h-auto flex-col items-center gap-10 lg:pr-5">
            {/* <PruebaAnimation /> */}
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
    </>
  );
}
