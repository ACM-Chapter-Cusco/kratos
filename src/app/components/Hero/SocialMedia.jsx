import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithubAlt,
  FaDiscord,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="mr-5 flex gap-7 lg:flex-col">
      <a href="https://www.facebook.com/ACMUNSAAC">
        <FaFacebookSquare
          className="text-white-azul transition duration-300 hover:text-blue"
          size="24px"
        />
      </a>
      {/* <a href="#">
        <FaInstagram
          className="text-white-azul transition duration-300 hover:text-rojo"
          size="24px"
        />
      </a> */}
      <a href="https://github.com/ACM-Chapter-Cusco">
        <FaGithubAlt
          className="text-white-azul transition duration-300 hover:text-verde"
          size="24px"
        />
      </a>
      {/* <a href="#">
        <FaDiscord
          className="text-white-azul transition duration-300 hover:text-cyan"
          size="24px"
        />
      </a> */}
      <a href="mailto:acmchaptercuscounsaac@gmail.com">
        <MdEmail
          className="text-white-azul transition duration-300 hover:text-rojo"
          size="24px"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
