import {
  FaFacebookSquare,
  FaInstagram,
  FaGithubAlt,
  FaDiscord,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMediaFooter = () => {
  return (
    <div className="flex gap-x-8 md:gap-x-3">
      <a href="https://www.facebook.com/ACMUNSAAC">
        <FaFacebookSquare
          className="text-white-azul transition duration-300 hover:text-blue"
          size="21px"
        />
      </a>
      {/* <a href="#">
        <FaInstagram
          className="text-white-azul transition duration-300 hover:text-rojo"
          size="21px"
        />
      </a> */}
      <a href="https://github.com/ACM-Chapter-Cusc">
        <FaGithubAlt
          className="text-white-azul transition duration-300 hover:text-verde"
          size="21px"
        />
      </a>
      {/* <a href="#">
        <FaDiscord
          className="text-white-azul transition duration-300 hover:text-cyan"
          size="21px"
        />
      </a> */}
      <a href="mailto:acmchaptercuscounsaac@gmail.com">
        <MdEmail
          className="text-white-azul transition duration-300 hover:text-rojo"
          size="21px"
        />
      </a>
    </div>
  );
};

export default SocialMediaFooter;
