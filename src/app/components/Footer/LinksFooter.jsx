const LinksFooter = ({ link, children }) => {
  return (
    <a href={link} className="mb-4 hover:text-cyan transition duration-300" >
      {children}
    </a>
  )
}

export default LinksFooter