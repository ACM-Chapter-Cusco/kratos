import React from 'react'
import { SectionsFooter } from './SectionsFooter'
import Image from 'next/image'
import SocialMediaFooter from './SocialMediaFooter'
import LinksFooter from './LinksFooter'

const Footer = () => {
  return (
    <footer className="flex justify-center bg-dark-1">
      <div className="h-auto w-[1400px] px-4 flex flex-col py-8 px-12 text-base text-white-azul gap-y-6" >
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-y-6 gap-x-4">
          <div className="flex flex-col items-center gap-y-4">
            <h3 className="text-base font-bold">ACM.Chapter.Cusco</h3>
            <SocialMediaFooter />
          </div>
          <SectionsFooter />

          <div className="flex">
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
        <div className="flex flex-row justify-center items-center gap-6">
          <LinksFooter link="#">Help</LinksFooter>
          <LinksFooter link="#">Terminos</LinksFooter>
          <LinksFooter link="#">Estatuto</LinksFooter>
        </div>
      </div>


    </footer>
  )
}

export default Footer