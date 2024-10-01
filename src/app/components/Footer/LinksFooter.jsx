const LinksFooter = ({ link, children }) => {
  return (
    <a href={link} className="mb-4" >
      {children}
    </a>
  )
}

export default LinksFooter