const H2 = ({ title }) => {
  const textStart = `<`;
  const textEnd = '/>';
  return (
    <h2 className="font-extrabold text-7xl" >{textStart} <span className="text-blue">ACM</span>.{title} {textEnd}</h2>
  )
}

export default H2