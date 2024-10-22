"use client";

import React, { useRef, useState } from "react";
import sty from "./Events.module.css";
import Image from "next/image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const dataEvents = [
  {
    id: 0,
    title: "Cuscontest",
    description:
      "dolor sit amet consectetur adipisicing elit. Ducimus veniam nihil distinctio iure quidem a, culpa mollitia odio blanditiis modi soluta consequuntur obcaecati asperiores dolore explicabo libero hic, veritatis itaque",
    img: "/events/img1.svg",
  },
  {
    id: 1,
    title: "Todos vuelven",
    description:
      "dolor sit amet consectetur adipisicing elit. Ducimus veniam nihil distinctio iure quidem a, culpa mollitia odio blanditiis modi soluta consequuntur obcaecati asperiores dolore explicabo libero hic, veritatis itaque",
    img: "/events/img2.svg",
  },
  {
    id: 2,
    title: "Induccion al cachimbo",
    description:
      "dolor sit amet consectetur adipisicing elit. Ducimus veniam nihil distinctio iure quidem a, culpa mollitia odio blanditiis modi soluta consequuntur obcaecati asperiores dolore explicabo libero hic, veritatis itaque",
    img: "/events/img3.svg",
  },
  {
    id: 3,
    title: "Cuscontest",
    description:
      "dolor sit amet consectetur adipisicing elit. Ducimus veniam nihil distinctio iure quidem a, culpa mollitia odio blanditiis modi soluta consequuntur obcaecati asperiores dolore explicabo libero hic, veritatis itaque",
    img: "/events/img1.svg",
  },
  {
    id: 4,
    title: "Todos vuelven",
    description:
      "dolor sit amet consectetur adipisicing elit. Ducimus veniam nihil distinctio iure quidem a, culpa mollitia odio blanditiis modi soluta consequuntur obcaecati asperiores dolore explicabo libero hic, veritatis itaque",
    img: "/events/img2.svg",
  },
  {
    id: 5,
    title: "Induccion al cachimbo",
    description:
      "dolor sit amet consectetur adipisicing elit. Ducimus veniam nihil distinctio iure quidem a, culpa mollitia odio blanditiis modi soluta consequuntur obcaecati asperiores dolore explicabo libero hic, veritatis itaque",
    img: "/events/img3.svg",
  },
  {
    id: 6,
    title: "Cuscontest",
    description:
      "dolor sit amet consectetur adipisicing elit. Ducimus veniam nihil distinctio iure quidem a, culpa mollitia odio blanditiis modi soluta consequuntur obcaecati asperiores dolore explicabo libero hic, veritatis itaque",
    img: "/events/img1.svg",
  },
  {
    id: 7,
    title: "Todos vuelven",
    description:
      "dolor sit amet consectetur adipisicing elit. Ducimus veniam nihil distinctio iure quidem a, culpa mollitia odio blanditiis modi soluta consequuntur obcaecati asperiores dolore explicabo libero hic, veritatis itaque",
    img: "/events/img2.svg",
  },
  {
    id: 8,
    title: "Induccion al cachimbo",
    description:
      "dolor sit amet consectetur adipisicing elit. Ducimus veniam nihil distinctio iure quidem a, culpa mollitia odio blanditiis modi soluta consequuntur obcaecati asperiores dolore explicabo libero hic, veritatis itaque",
    img: "/events/img3.svg",
  },
];
const Slider = () => {
  const backgroundsRef = useRef(null);
  const cardsRef = useRef(null);
  const [itemActive, setItemActive] = useState(2);
  const countItems = dataEvents.length;

  const goNextItem = () => {
    const backgrounds = backgroundsRef.current;
    const cards = cardsRef.current;

    setItemActive((itemActive) => (itemActive + 1) % countItems);

    if (backgrounds && cards) {
      const itemsCards = cards.querySelectorAll(".cards .item");
      cards.append(itemsCards[0]);

      setTimeout(() => {
        const itemsbackgrounds =
          backgrounds.querySelectorAll(".backgrounds .item");
        backgrounds.append(itemsbackgrounds[0]);
      }, 370);
    }
  };

  const goBackItem = () => {
    const backgrounds = backgroundsRef.current;
    const cards = cardsRef.current;

    setItemActive((itemActive) => (itemActive - 1) % countItems);

    if (backgrounds && cards) {
      const itemsCards = cards.querySelectorAll(".cards .item");
      cards.prepend(itemsCards[itemsCards.length - 1]);

      setTimeout(() => {
        const itemsbackgrounds =
          backgrounds.querySelectorAll(".backgrounds .item");
        backgrounds.prepend(itemsbackgrounds[itemsbackgrounds.length - 1]);
      }, 370);
    }
  };

  const handleCardsClick = (index) => {
    let valorMovimiento;
    if (index >= itemActive) {
      valorMovimiento = index - itemActive;
    } else {
      valorMovimiento =
        index === 0 ? countItems - itemActive : countItems + 1 - itemActive;
    }

    for (let i = 0; i < valorMovimiento; i++) {
      goNextItem();
    }
  };

  return (
    <div className={`${sty.slider} bg-azul-git`}>
      <div className={`backgrounds ${sty.backgrounds}`} ref={backgroundsRef}>
        {dataEvents.map((event, index) => (
          <div
            className={`item ${sty.item} ${
              index === itemActive ? sty.active : ""
            }`}
            key={event.id}
          >
            {/* IMAGEN DE FONDO */}
            <div className="relative right-0 h-[30%] w-[100%] md:absolute md:h-full md:w-[60%]">
              <Image
                src={event.img}
                alt={event.title}
                fill="true"
                className={`${sty.img} rounded-2xl bg-gradient-to-r from-azul-git md:rounded-r-3xl`}
              />
              {/* gradient for the background */}
              <div className="hidden md:block">
                <div className="absolute inset-0 rounded-r-xl bg-gradient-to-r from-azul-git" />
              </div>
            </div>

            <div
              className={`${sty.content} relative z-10 mt-10 flex w-[100%] flex-col gap-y-3 md:absolute md:ml-10 md:mt-0 md:w-[50%] md:gap-y-6 xl:w-[60%]`}
            >
              <h2 className="font-Opensans text-3xl font-extrabold uppercase text-blue sm:text-4xl">
                {event.title}
              </h2>
              <p className="font-Play text-lg text-white-azul sm:text-2xl">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={`${sty.arrows} flex gap-x-4`}>
        <button
          className="flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-white-azul font-mono text-2xl text-black transition duration-200 hover:scale-110"
          onClick={goBackItem}
        >
          <FaArrowLeft />
        </button>
        <button
          className="flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-white-azul font-mono text-2xl text-black transition duration-200 hover:scale-110"
          onClick={goNextItem}
        >
          <FaArrowRight />
        </button>
      </div>
      <div
        className={`cards hidden md:block ${sty.cards} absolute bottom-[0] left-0 z-20 h-[250px] w-full`}
        ref={cardsRef}
      >
        {dataEvents.map((event, index) => (
          <div
            className={`item ${
              sty.item
            } absolute inline-block h-[150px] w-[120px] cursor-pointer transition duration-200 ${
              index === itemActive ? sty.active : ""
            } `}
            key={event.id}
            onClick={() => handleCardsClick(index)}
          >
            <div className="absolute h-[150px] w-[120px] overflow-hidden rounded-xl">
              <Image
                src={event.img}
                alt={event.title}
                fill="true"
                className={`${sty.img}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black" />
            </div>
            <h3
              className={`${sty.content} text-xs font-bold uppercase text-white`}
            >
              {event.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
