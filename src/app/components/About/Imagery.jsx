import Image from "next/image";
import React from "react";

const Imagery = () => {
  return (
    <div className="relative w-[70%] md:w-full h-full">
      <Image
        src="/about/image1.svg"
        alt="Image1"
        width={98}
        height={98}
        className="scale-75 lg:scale-100 absolute rounded-2xl shadow-2xl shadow-black top-8 left-0 lg:top-20 lg:left-12 hover:scale-125 transition-transform duration-300 ease-in-out"
      />
      <Image
        src="/about/image2.svg"
        alt="Image1"
        width={172}
        height={172}
        className="scale-75 lg:scale-100 w-[130px] h-[130px]  absolute rounded-2xl shadow-2xl shadow-black top-40 left-4 lg:top-60 lg:left-24 hover:scale-110 transition-transform duration-300"
      />
      <Image
        src="/about/image3.svg"
        alt="Image1"
        width={360}
        height={550}
        className="scale-50 lg:scale-100 absolute rounded-2xl shadow-2xl shadow-black left-20 lg:top-20 lg:left-48 hover:scale-105 transition-transform duration-300"
      />
      <Image
        src="/about/image4.svg"
        alt="Image1"
        width={60}
        height={60}
        className="scale-75 lg:scale-100 absolute rounded-2xl shadow-2xl shadow-black top-52 left-36 lg:top-80 lg:left-80 hover:scale-125 transition-transform duration-300"
      />
      <Image
        src="/about/image5.svg"
        alt="Image1"
        width={182}
        height={182}
        className="scale-50 lg:scale-100 absolute rounded-2xl shadow-2xl shadow-black top-44 left-44 lg:top-56 lg:left-[440px] hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
};

export default Imagery;
