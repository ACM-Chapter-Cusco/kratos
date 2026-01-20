import React from "react";
import { FaFacebookSquare, FaGithubAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="mr-5 flex gap-7 lg:flex-col">
      <a href="https://www.facebook.com/ACMUNSAAC">
        <FaFacebookSquare
          className="text-white-blue hover:text-blue transition duration-300"
          size="24px"
        />
      </a>
      {/* <a href="#">
        <FaInstagram
          className="text-white-blue transition duration-300 hover:text-icpc"
          size="24px"
        />
      </a> */}
      <a href="https://github.com/ACM-Chapter-Cusco">
        <FaGithubAlt
          className="text-white-blue hover:text-dev transition duration-300"
          size="24px"
        />
      </a>
      {/* <a href="#">
        <FaDiscord
          className="text-white-blue transition duration-300 hover:text-ai"
          size="24px"
        />
      </a> */}
      <a href="mailto:acmchaptercuscounsaac@gmail.com">
        <MdEmail
          className="text-white-blue hover:text-icpc transition duration-300"
          size="24px"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
