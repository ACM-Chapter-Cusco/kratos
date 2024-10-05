"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Gallery.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Gallery = () => {
  const arraySlides = [
    "https://image.tmdb.org/t/p/w1280/9TFSqghEHrlBMRR63yTx80Orxva.jpg",
    "https://www.themoviedb.org/t/p/w1280/8PYqGSd8MOm5ce8io4qNSAiSExW.jpg",
    "https://www.themoviedb.org/t/p/w1280/6QR2FOCQr41gSduN70WulRIhJb7.jpg",
    "https://www.themoviedb.org/t/p/w1280/e5ZqqPlhKstzB4geibpZh38w7Pq.jpg",
    "https://www.themoviedb.org/t/p/w1280/ynqqkPy8RiawjGtWFIsF9pmYZtJ.jpg",
    "https://www.themoviedb.org/t/p/w1280/kWJw7dCWHcfMLr0irTHAPIKrJ4I.jpg",
    "https://www.themoviedb.org/t/p/w1280/X9iFHeIYgfqoZImvdidx8b9v4R.jpg",
  ];
  return (
    <div className="container">
      <h1 className="heading">Event Section</h1>
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
    </div>
  );
};

export default Gallery;
