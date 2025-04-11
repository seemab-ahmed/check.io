'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import intraxIcon from '@/app/images/intrax.svg';
import silverStarIcon from '@/app/images/silver-star.svg';
import xboxIcon from '@/app/images/xbox.svg';
import slackIcon from '@/app/images/slack.svg';
import tinderIcon from '@/app/images/tinder.svg';
import forbesIcon from '@/app/images/forbes.svg';
import helekenIcon from '@/app/images/heleken.svg';

const brandIcons = [
  intraxIcon,
  silverStarIcon,
  xboxIcon,
  slackIcon,
  tinderIcon,
  forbesIcon,
  helekenIcon,
];

const BrandsLight = () => {
  return (
    <section className="bg-[#D3EDFC] py-12 relative">
      <div className="container">
        {/* Mobile Slider */}
        <div className="block xl:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
            }}
          >
            {brandIcons.map((icon, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <Image
                  src={icon}
                  alt={`Brand ${index + 1}`}
                  width={'100%'}
                  height={'100%'}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden xl:grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8">
          {brandIcons.map((icon, index) => (
            <div key={index} className="flex justify-center items-center  transform hover:scale-105 transition-all duration-300 ease-in-out">
              <Image
                src={icon}
                alt={`Brand ${index + 1}`}
                width={'100%'}
                height={'100%'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsLight;
