import React from 'react'
import { SectionsFooter } from './SectionsFooter'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flex justify-center bg-dark-1">
      <div className="h-auto w-[1400px] px-4 flex flex-col py-8 px-12 text-base text-white-azul" >
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div>redes</div>
          <SectionsFooter />

          <div className="flex">
            <Image
              src="/unsaac_logo.png"
              alt="unsaac logo"
              width={80}
              height={80}
              className=""
            />
            <Image
              src="/info_logo.png"
              alt="informatica logo"
              width={80}
              height={80}
              className=""
            />

          </div>

        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a href="#">Help</a>
          <a href="#">Terminos</a>
          <a href="#">Estatuto</a>
        </div>
      </div>


    </footer>
  )
}

export default Footer