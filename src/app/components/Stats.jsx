'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import statsBg from '@/app/images/stats-bg.png';
import statsCardImg1 from '@/app/images/stat-img1.svg';
import statsCardImg2 from '@/app/images/stat-img2.svg';
import statsCardImg3 from '@/app/images/stat-img3.svg';
import statsCardImg4 from '@/app/images/stat-img4.svg';
import statsCardImg5 from '@/app/images/stat-img5.svg';

const statsData = [
  {
    icon: statsCardImg1,
    value: '250 000+',
    label: 'Registrovaná účasť',
  },
  {
    icon: statsCardImg2,
    value: '500+',
    label: 'Spokojní klienti',
  },
  {
    icon: statsCardImg3,
    value: '3,800+',
    label: 'zamestnancov',
  },
  {
    icon: statsCardImg4,
    value: '100%',
    label: 'Dostupnosť',
  },
  {
    icon: statsCardImg5,
    value: '24/7',
    label: 'Podpora',
  },
];

const Stats = () => {
  return (
    <section className="py-10 xl:py-[120px]">
      <div className="container">
        <div
          className="py-20 px-3 rounded-[18px] overflow-hidden relative"
          style={{ backgroundImage: `url(${statsBg.src})` }}
        >
          <div
            className="absolute left-0 top-0 w-full h-full"
            style={{ backgroundColor: `rgba(0, 66, 124, 0.86)` }}
          ></div>

          {/* Swiper Slider for Mobile & Tablet */}
          <div className="block xl:hidden relative z-[1]">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {statsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-center items-center text-center">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      className="mb-5"
                      width={'100%'}
                      height={'100%'}
                    />
                    <span className="text-3xl font-bold leading-tight text-white mb-4">
                      {item.value}
                    </span>
                    <span className="text-base font-normal leading-normal text-white">
                      {item.label}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Grid Layout for Desktop */}
          <div className="hidden xl:flex justify-between items-center gap-5 flex-wrap relative z-[1] max-w-[1320px] mx-auto w-full">
            {statsData.map((item, index) => (
              <div key={index} className="flex flex-col justify-center items-center text-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  className="mb-5"
                  width={'100%'}
                  height={'100%'}
                />
                <span className="text-3xl xl:text-[43px] font-bold leading-tight text-white mb-4">
                  {item.value}
                </span>
                <span className="text-base xl:text-xl font-normal leading-normal text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
