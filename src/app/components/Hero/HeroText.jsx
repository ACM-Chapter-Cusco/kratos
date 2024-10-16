const HeroText = () => {
  return (
    <div className="flex flex-col lg:gap-y-3">
      <h2 className="font-sans text-5xl font-extrabold text-blue md:text-7xl xl:text-8xl">
        ACM &#123;
      </h2>
      <h2 className="text-3xl font-extrabold leading-tight text-white-azul md:text-6xl xl:text-[65px]">
        Chapter.Cusco
      </h2>
      <h2 className="flex items-center justify-end font-Play text-xl leading-tight text-white-azul md:text-3xl xl:text-[40px]">
        UNSAAC{" "}
        <span className="ml-2 flex items-center font-sans font-extrabold text-blue">
          &#125;
        </span>{" "}
      </h2>
    </div>
  );
};

export default HeroText;
