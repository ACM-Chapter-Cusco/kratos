const H2 = ({ title }) => {
  const textStart = `<`;
  const textEnd = "/>";
  return (
    <h2 className="font-extrabold text-5xl mb-8 lg:mb-0 md:text-7xl " >{textStart} <span className="text-blue">ACM</span>.{title} {textEnd}</h2>
  )
}

export default H2;
