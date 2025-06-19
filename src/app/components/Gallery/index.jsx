"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import H2 from "../../common/H2";
import { fadeIn, springDown } from "../../common/animations/entrances";
import { createDelayedVariant, delays } from "../../common/animations/shared";
import { galleryData } from "@/app/data/landingPage/gallery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Gallery.css";

const Gallery = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className="mb-0 flex w-[100%] flex-col items-center gap-16 lg:mb-44"
    >
      <motion.div variants={createDelayedVariant(springDown, delays.short)}>
        <H2 title="Galeria" />
      </motion.div>
      <motion.div
        variants={createDelayedVariant(fadeIn, delays.long)}
        className="container"
      >
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
          {galleryData.images.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
