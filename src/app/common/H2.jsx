const H2 = ({ title }) => {
  const textStart = `<`;
  const textEnd = "/>";
  return (
    <h2 className="font-Big text-white-blue text-h3 font-OpenSans font-extrabold">
      {textStart} <span className="text-blue">ACM</span>.{title} {textEnd}
    </h2>
  );
};

export default H2;
