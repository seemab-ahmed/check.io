"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

import clientImg1 from "@/app/images/client1.png";
import clientImg2 from "@/app/images/client2.png";
import clientImg3 from "@/app/images/client3.png";
import commaImg from "@/app/images/commas.svg";
import arrowPrev from "@/app/images/arrow-prev.svg";
import arrowNext from "@/app/images/arrow-next.svg";

const testimonialsCards = [
  {
    image: clientImg1,
    title: "Simona Hudáková",
    subTitle: "Manažérka hotela",
    description: "Aplikácia qrdochadzka.sk priniesla výraznú zmenu v našom hoteli...",
  },
  {
    image: clientImg2,
    title: "Simona Hudáková",
    subTitle: "Majiteľ upratovacej",
    description: "Naša dochádzka bola po mnoho rokov evidovaná ručne...",
  },
  {
    image: clientImg3,
    title: "Simona Hudáková",
    subTitle: "Manažérka hotela",
    description: "Aplikácia qrdochadzka.sk sa stala nepostrádateľnou súčasťou...",
  },
  {
    image: clientImg1,
    title: "Simona Hudáková",
    subTitle: "Test repeat",
    description: "Another testimonial to show movement",
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section className="py-10 xl:py-16">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col justify-center items-center mb-10">
          <span className="h-10 md:h-[60px] max-w-fit flex items-center justify-center px-3 text-base md:text-2xl font-medium text-customBlue rounded-[10px] bg-white border border-[#F3ECFF] mb-6">
            Posudky
          </span>
          <h2 className="text-3xl xl:text-[40px] font-semibold leading-tight text-customDarkGrayLight">
            Príbehy používateľov
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="p-1.5 rounded-[20px] bg-white overflow-hidden">
          <div className="border-[2px] border-[#CEE8FF] rounded-[18px] bg-[#EBF5FF] p-[26px] pb-[84px] overflow-hidden">
            <Swiper
              modules={[Navigation]}
              loop={true}
              slidesPerView={1}
              spaceBetween={20}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setCurrentIndex(swiper.realIndex);
              }}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.realIndex);
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!overflow-visible"
            >
              {testimonialsCards.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full shrink-0 bg-white rounded-xl p-1.5">
                    <div className="border border-[#C8E3FF] bg-white rounded-[10px] p-3 md:p-8 h-full transition-all duration-300">
                      <div className="flex items-center justify-between gap-5 mb-4">
                        <div className="flex-col md:flex-row flex md:items-center gap-2 md:gap-5">
                          <figure>
                            <Image
                              src={item.image}
                              alt={item.title}
                              className="mx-auto rounded-full w-10 md:w-[70px] h-10 md:h-[70px] object-cover"
                              width="100"
                              height="100"
                            />
                          </figure>
                          <div className="max-w-[calc(100%-10px)] md:max-w-[calc(100%-90px)]">
                            <h3 className="text-base md:text-xl xl:text-[22px] font-semibold text-[#2C2C2C]">
                              {item.title}
                            </h3>
                            <span className="text-sm md:text-base lg:text-lg font-medium text-customBlue leading-none">
                              {item.subTitle}
                            </span>
                          </div>
                        </div>
                        <Image src={commaImg} alt="Comma" width={20} height={20} />
                      </div>
                      <p className="text-base text-customBlue leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-3 rounded-[100px] max-w-[280px] md:max-w-[332px] w-full mx-auto bg-white -mt-10 md:-mt-14 flex items-center justify-between transition-all duration-300">
          <button
            onClick={handlePrev}
            className="w-10 md:w-[70px] h-10 md:h-[70px] rounded-full border border-[#CEE8FF] bg-[#EBF5FF] hover:bg-[#d7e9ff] flex justify-center items-center transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <Image src={arrowPrev} alt="Previous" width={20} height={20} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: testimonialsCards.length }).map((_, i) => (
              <span
                key={i}
                className={`w-7 h-1 rounded-lg transition-all duration-300 ${
                  i === currentIndex ? "bg-customBlue" : "bg-[#DE4278]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 md:w-[70px] h-10 md:h-[70px] rounded-full border border-[#CEE8FF] bg-[#EBF5FF] hover:bg-[#d7e9ff] flex justify-center items-center transition-all duration-300"
            aria-label="Next testimonial"
          >
            <Image src={arrowNext} alt="Next" width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
