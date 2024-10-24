import React from "react";
import LinksFooter from "./LinksFooter";
import TitlesFooter from "./TitlesFooter";

export const SectionsFooterDesktop = () => {
  return (
    <div className="flex items-center justify-between md:flex-row">
      <div>
        <TitlesFooter title="About" />
        <div className="mt-8 flex flex-col justify-start">
          <LinksFooter link="#">What is ACM?</LinksFooter>
          <LinksFooter link="#">Visión</LinksFooter>
          <LinksFooter link="#">Misión</LinksFooter>
          <LinksFooter link="#">Gallery</LinksFooter>
        </div>
      </div>
      <div>
        <TitlesFooter title="Events" />
        <div className="mt-8 flex flex-col">
          <LinksFooter link="#">Cuscontest</LinksFooter>
          <LinksFooter link="#">Todos vuelven</LinksFooter>
          <LinksFooter link="#">Robótica</LinksFooter>
          <LinksFooter link="#">Icpc</LinksFooter>
        </div>
      </div>
      <div>
        <TitlesFooter title="Teams" />
        <div className="mt-8 flex flex-col">
          <LinksFooter link="#">development</LinksFooter>
          <LinksFooter link="#">investigation</LinksFooter>
          <LinksFooter link="#">programming</LinksFooter>
          <LinksFooter link="#">members</LinksFooter>
        </div>
      </div>
    </div>
  );
};
