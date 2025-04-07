'use client';

import Image from 'next/image';
import intraxIcon from '@/app/images/intrax.svg';
import silverStarIcon from '@/app/images/silver-star.svg';
import xboxIcon from '@/app/images/xbox.svg';
import slackIcon from '@/app/images/slack.svg';
import tinderIcon from '@/app/images/tinder.svg';
import forbesIcon from '@/app/images/forbes.svg';
import helekenIcon from '@/app/images/heleken.svg';
import brandBg from '@/app/images/brands-bg.svg';
import dottedBorder from '@/app/images/gradient-dotted-border.svg';

const brandIcons = [
  intraxIcon,
  silverStarIcon,
  xboxIcon,
  slackIcon,
  tinderIcon,
  forbesIcon,
  helekenIcon,
];

const Brands = () => {
  return (
    <section
      className="bg-cover bg-center py-[188px] relative"
      style={{ backgroundImage: `url(${brandBg.src})` }}
    >
      <div className="absolute right-0 -top-[72px] z-10">
        <Image
          src={dottedBorder}
          alt="Dotted border"
          width={'100%'}
          height={'100%'}
        />
      </div>

      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8">
          {brandIcons.map((icon, index) => (
            <div key={index} className="flex justify-center items-center">
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

      <div className="w-[180px] h-[180px] rounded-full bg-custom-gradient absolute -left-[70px] -bottom-[58px] z-10"></div>
    </section>
  );
};

export default Brands;
