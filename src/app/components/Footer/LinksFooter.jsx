const LinksFooter = ({ link, children }) => {
  return (
    <a href={link} className="hover:text-ai mb-4 transition duration-300">
      {children}
    </a>
  );
};

export default LinksFooter;
