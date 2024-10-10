import React from 'react'
import LinksFooter from './LinksFooter'
import TitlesFooter from './TitlesFooter'

export const SectionsFooter = () => {
  return (
    <div className="flex flex-col flex-wrap md:flex-row justify-between items-center gap-x-40 gap-y-6">
      <div>
        <TitlesFooter title="About" />
        <div className="flex flex-col justify-start">
          <LinksFooter link="#">What is ACM?</LinksFooter>
          <LinksFooter link="#">Visión</LinksFooter>
          <LinksFooter link="#">Misión</LinksFooter>
          <LinksFooter link="#">Gallery</LinksFooter>
        </div>
      </div>
      <div>
        <TitlesFooter title="Events" />
        <div className="flex flex-col">
          <LinksFooter link="#">Cuscontest</LinksFooter>
          <LinksFooter link="#">Todos vuelven</LinksFooter>
          <LinksFooter link="#">Robótica</LinksFooter>
          <LinksFooter link="#">Icpc</LinksFooter>
        </div>

      </div>
      <div>
        <TitlesFooter title="Teams" />
        <div className="flex flex-col">
          <LinksFooter link="#">development</LinksFooter>
          <LinksFooter link="#">investigation</LinksFooter>
          <LinksFooter link="#">programming</LinksFooter>
          <LinksFooter link="#">members</LinksFooter>
        </div>

      </div>
    </div>
  )
}
