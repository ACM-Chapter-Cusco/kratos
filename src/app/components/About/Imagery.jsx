import Image from "next/image";
import React from "react";

const Imagery = () => {
  return (
    <div className="relative h-[400px] w-[400px] md:mb-10 md:h-[500px] md:w-[690px]">
      <Image
        src="/about/image5.svg"
        alt="Image1"
        width={98}
        height={98}
        className="absolute top-4 hidden scale-75 rounded-2xl shadow-2xl shadow-black transition-transform duration-300 ease-in-out hover:scale-100 md:left-12 md:top-20 md:block md:scale-100 md:hover:scale-125"
      />
      <Image
        src="/about/image2.svg"
        alt="Image1"
        width={172}
        height={172}
        className="absolute -left-6 top-40 scale-75 rounded-2xl shadow-2xl shadow-black transition-transform duration-300 hover:scale-100 md:left-24 md:top-60 md:scale-100 hover:md:scale-110"
      />
      <Image
        src="/about/image3.svg"
        alt="Image1"
        width={360}
        height={550}
        className="absolute -top-10 left-0 scale-75 rounded-2xl shadow-2xl shadow-black transition-transform duration-300 hover:scale-90 md:left-48 md:top-0 md:scale-100 hover:md:scale-105"
      />
      <Image
        src="/about/image4.svg"
        alt="Image1"
        width={60}
        height={60}
        className="absolute left-36 top-52 hidden scale-75 rounded-2xl shadow-2xl shadow-black transition-transform duration-300 hover:scale-125 md:left-80 md:top-80 md:block md:scale-100"
      />
      <Image
        src="/about/image1.svg"
        alt="Image1"
        width={280}
        height={280}
        className="absolute -right-9 top-32 scale-75 rounded-2xl shadow-2xl shadow-black transition-transform duration-300 hover:scale-110 md:left-[440px] md:top-56 md:scale-100 hover:md:scale-105"
      />
    </div>
  );
};

export default Imagery;
