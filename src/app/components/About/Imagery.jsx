import Image from "next/image";
import React from "react";

const Imagery = () => {
  return (
    <div className="relative top-24">
      <Image
        src="/about/image1.svg"
        alt="Image1"
        width={98}
        height={98}
        className="absolute rounded-2xl shadow-2xl shadow-black top-12 left-12 hover:scale-125 transition-transform duration-300 ease-in-out"
      />
      <Image
        src="/about/image2.svg"
        alt="Image1"
        width={172}
        height={172}
        className="absolute rounded-2xl shadow-2xl shadow-black top-44 left-24 hover:scale-110 transition-transform duration-300"
      />
      <Image
        src="/about/image3.svg"
        alt="Image1"
        width={360}
        height={550}
        className="absolute rounded-2xl shadow-2xl shadow-black -top-4 left-48 hover:scale-105 transition-transform duration-300"
      />
      <Image
        src="/about/image4.svg"
        alt="Image1"
        width={60}
        height={60}
        className="absolute rounded-2xl shadow-2xl shadow-black top-72 left-80 hover:scale-125 transition-transform duration-300"
      />
      <Image
        src="/about/image5.svg"
        alt="Image1"
        width={182}
        height={182}
        className="absolute rounded-2xl shadow-2xl shadow-black top-56 left-[440px] hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
};

export default Imagery;
