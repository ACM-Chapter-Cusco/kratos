import Header from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import AcmTeams from "./components/AcmTeams";
import MembersSection from "./components/Members";

export default function Home() {
  return (
    <>
      {/*Header principal*/}

      <div className="flex justify-center bg-azul-git">
        <div className="h-auto w-[1400px] px-4">
          <Header />
          <Hero />
          <About />
          <AcmTeams />
          <MembersSection />
        </div>
      </div>
    </>
  );
}
