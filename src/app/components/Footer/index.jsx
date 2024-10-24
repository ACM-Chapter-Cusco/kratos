import React from "react";
import { SectionsFooter, SectionsFooterDesktop } from "./SectionsFooterDesktop";
import Image from "next/image";
import SocialMediaFooter from "./SocialMediaFooter";
import LinksFooter from "./LinksFooter";
import { SectionsFooterMobile } from "./SectionsFooterMobile";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-dark-1">
      <div className="flex h-auto w-[80%] flex-col gap-y-6 px-12 px-4 py-8 text-base text-white-azul md:w-[1400px]">
        <div className="mb-4 flex flex-col items-start justify-between gap-x-4 gap-y-6 md:flex-row md:items-center">
          <div className="flex flex-col items-start gap-y-10 md:gap-y-4">
            <h3 className="text-base font-bold">ACM.Chapter.Cusco</h3>
            <SocialMediaFooter />
          </div>

          <div className="hidden w-[50%] md:block">
            <SectionsFooterDesktop />
          </div>
          <div className="my-5 w-full md:my-0 md:hidden">
            <SectionsFooterMobile />
          </div>

          <div className="flex w-full justify-center md:w-auto">
            <Image
              src="/info_logo.png"
              alt="informatica logo"
              width={80}
              height={80}
              className=""
            />
            <Image
              src="/unsaac_logo.png"
              alt="unsaac logo"
              width={109}
              height={80}
              className=""
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-6">
          <LinksFooter link="#">Help</LinksFooter>
          <LinksFooter link="#">Terminos</LinksFooter>
          <LinksFooter link="#">Estatuto</LinksFooter>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
