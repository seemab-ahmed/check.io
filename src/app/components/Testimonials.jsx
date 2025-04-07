"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
    description:
      "Aplikácia qrdochadzka.sk priniesla výraznú zmenu v našom hoteli...",
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
  {
    image: clientImg2,
    title: "Simona Hudáková",
    subTitle: "Owner",
    description: "Fifth testimonial for testing.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsCards.length - cardsPerPage : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % (testimonialsCards.length - cardsPerPage + 1)
    );
  };

  return (
    <section className="py-16">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col justify-center items-center mb-10">
          <span className="h-[60px] max-w-fit flex items-center justify-center px-3 text-2xl font-medium text-customBlue rounded-[10px] bg-white border border-[#F3ECFF] mb-6">
            Posudky
          </span>
          <h2 className="text-[40px] font-semibold leading-tight text-customDarkGrayLight">
            Príbehy používateľov
          </h2>
        </div>

        {/* Carousel */}
        <div className="p-1.5 rounded-[20px] bg-white overflow-hidden">
          <div className="border-[2px] border-[#CEE8FF] rounded-[18px] bg-[#EBF5FF] p-[26px] pb-[84px] overflow-hidden">
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex gap-10"
                animate={{ x: `-${currentIndex * (100 / cardsPerPage)}%` }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
                style={{ width: `${(testimonialsCards.length / cardsPerPage) * 100}%` }}
              >
                {testimonialsCards.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="w-1/3 shrink-0 bg-white rounded-xl p-1.5"
                  >
                    <div className="border border-[#C8E3FF] bg-white rounded-[10px] p-8 h-full transition-all duration-300">
                      <div className="flex items-center justify-between gap-5 mb-4">
                        <div className="flex items-center gap-5">
                          <figure>
                            <Image
                              src={item.image}
                              alt={item.title}
                              className="mx-auto rounded-full w-[70px] h-[70px] object-cover"
                              width={70}
                              height={70}
                            />
                          </figure>
                          <div className="max-w-[calc(100%-90px)]">
                            <h3 className="text-[22px] font-semibold text-[#2C2C2C]">
                              {item.title}
                            </h3>
                            <span className="text-lg font-medium text-customBlue leading-none">
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
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-3 rounded-[100px] max-w-[332px] w-full mx-auto bg-white -mt-14 flex items-center justify-between transition-all duration-300">
          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            className="w-[70px] h-[70px] rounded-full border border-[#CEE8FF] bg-[#EBF5FF] hover:bg-[#d7e9ff] flex justify-center items-center transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <Image src={arrowPrev} alt="Previous" width={20} height={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({
              length: testimonialsCards.length - cardsPerPage + 1,
            }).map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-customBlue" : "bg-[#CEE8FF]"
                }`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="w-[70px] h-[70px] rounded-full border border-[#CEE8FF] bg-[#EBF5FF] hover:bg-[#d7e9ff] flex justify-center items-center transition-all duration-300"
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
