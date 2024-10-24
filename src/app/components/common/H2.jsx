const H2 = ({ title }) => {
  const textStart = `<`;
  const textEnd = "/>";
  return (
    <h2 className="text text-4xl font-extrabold text-white-azul md:text-5xl lg:text-6xl">
      {textStart} <span className="text-blue">ACM</span>.{title} {textEnd}
    </h2>
  );
};

export default H2;
