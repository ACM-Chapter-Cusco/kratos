import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import AcmTeams from "./components/AcmTeams";
import MembersSection from "./components/Members";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <>
      {/*Header principal*/}

      <div className="flex flex-col items-center bg-azul-git">
        <Header />
        <div className="flex w-full justify-center">
          <div className="w-pantalla flex h-auto flex-col items-center gap-10 lg:pr-5">
            <Hero />
            <About />
            <Events />
            <AcmTeams />
            <Gallery />
            <MembersSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
