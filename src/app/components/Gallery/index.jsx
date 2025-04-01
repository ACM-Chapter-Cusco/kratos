"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { delay, motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Gallery.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import H2 from "../common/H2";

import {
  titleVariants,
  contentVariants,
  extendVariant,
} from "@/lib/animations/textVariants";

const customContentVariants = extendVariant(contentVariants, {
  visible: {
    transition: {
      delay: 1.5,
    },
  },
});

const Gallery = () => {
  const arraySlides = [
    "/gallery/gallery1.png",
    "/gallery/gallery2.png",
    "/gallery/gallery3.png",
    "/gallery/gallery4.png",
    "/gallery/gallery5.png",
    "/gallery/gallery6.png",
    "/gallery/gallery7.png",
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className="mb-0 flex w-[100%] flex-col items-center gap-16 lg:mb-44"
    >
      <motion.div variants={titleVariants}>
        <H2 title="Galeria" />
      </motion.div>
      <motion.div variants={customContentVariants} className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {arraySlides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={slide} alt="slide" />
              </SwiperSlide>
            );
          })}
          <div className="swiper-pagination"></div>
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
