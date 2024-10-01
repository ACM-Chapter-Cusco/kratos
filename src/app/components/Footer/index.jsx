import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-center bg-dark-1">
      <div className="h-auto w-[1400px] px-4 flex flex-col py-8 px-12 text-base text-white-azul" >
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div>redes</div>

          <div>logo unsaac</div>

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