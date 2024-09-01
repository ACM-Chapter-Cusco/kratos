const HeroText = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-blue font-sans text-8xl font-extrabold">
        ACM &#123;
      </h2>
      <h2 className="text-white-azul font-extrabold text-[65px] leading-tight">
        Chapter.Cusco
      </h2>
      <h2 className="font-Play text-[40px] text-white-azul flex justify-end items-center leading-tight">
        UNSAAC{" "}
        <span className="text-blue font-sans font-extrabold flex items-center ml-2">
          &#125;
        </span>{" "}
      </h2>
    </div>
  );
};

export default HeroText;
