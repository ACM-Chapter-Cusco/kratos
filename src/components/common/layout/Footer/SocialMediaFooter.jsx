import { FaFacebookSquare, FaGithubAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMediaFooter = () => {
  return (
    <div className="flex gap-x-8 md:gap-x-3">
      <a href="https://www.facebook.com/ACMUNSAAC">
        <FaFacebookSquare
          className="text-white-blue hover:text-blue transition duration-300"
          size="21px"
        />
      </a>
      {/* <a href="#">
        <FaInstagram
          className="text-white-blue transition duration-300 hover:text-icpc"
          size="21px"
        />
      </a> */}
      <a href="https://github.com/ACM-Chapter-Cusc">
        <FaGithubAlt
          className="text-white-blue hover:text-dev transition duration-300"
          size="21px"
        />
      </a>
      {/* <a href="#">
        <FaDiscord
          className="text-white-blue transition duration-300 hover:text-ai"
          size="21px"
        />
      </a> */}
      <a href="mailto:acmchaptercuscounsaac@gmail.com">
        <MdEmail
          className="text-white-blue hover:text-icpc transition duration-300"
          size="21px"
        />
      </a>
    </div>
  );
};

export default SocialMediaFooter;
