import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import AcmTeams from "./components/AcmTeams";
import MembersSection from "./components/Members";
import Events from "./components/Events";

export default function Home() {
  return (
    <>
      {/*Header principal*/}

      <div className="flex flex-col items-center bg-azul-git">
        <Header />
        <div className="max-w-pantalla h-auto pt-[112px]">
          {/* <Hero />
          <About />
          <Events />
          <AcmTeams />
          <MembersSection /> */}
        </div>
      </div>
    </>
  );
}
