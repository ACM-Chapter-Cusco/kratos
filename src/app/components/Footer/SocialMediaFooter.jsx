import {
  FaFacebookSquare,
  FaInstagram,
  FaGithubAlt,
  FaDiscord,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMediaFooter = () => {
  return (
    <div className="flex gap-x-3">
      <a href="#">
        <FaFacebookSquare
          className="text-white-azul hover:text-blue transition duration-300 "
          size="21px"
        />
      </a>
      <a href="#">
        <FaInstagram
          className="text-white-azul hover:text-rojo transition duration-300"
          size="21px"
        />
      </a>
      <a href="#">
        <FaGithubAlt
          className="text-white-azul hover:text-verde transition duration-300"
          size="21px"
        />
      </a>
      <a href="#">
        <FaDiscord
          className="text-white-azul hover:text-cyan transition duration-300"
          size="21px"
        />
      </a>
      <a href="#">
        <MdEmail
          className="text-white-azul hover:text-rojo transition duration-300"
          size="21px"
        />
      </a>
    </div>
  )
}

export default SocialMediaFooter