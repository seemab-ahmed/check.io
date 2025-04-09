'use client';

import Image from 'next/image';
import PricesBg from '@/app/images/prices-bg.svg';
import dottedBorder from '@/app/images/gradient-dotted-border.svg';

const OurPrices = () => {
  return (
    <section className="py-10 xl:py-16 relative">
      <div className="container">
        <div className="text-center mb-0 md:mb-10">
          <h2 className="text-3xl xl:text-[40px] font-semibold leading-tight text-customBlue mb-1 md:mb-6">
            <span className="text-customDarkGrayLight">Naše</span> ceny
          </h2>
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat py-20 xl:py-32 px-3 md:px-0"
          style={{ backgroundImage: `url(${PricesBg.src})` }}
        >
          <p className="text-base xl:text-lg font-normal leading-normal text-[#545454] text-center">
            Cena za používanie dochádzkového systému je 1€ bez DPH / zamestnanec
            / mesiac
          </p>
          <div className="max-w-[282px] w-full mx-auto flex items-center gap-3 my-8">
            <span className="text-[56px] font-semibold leading-none text-customPink">
              1€
            </span>
            <p className="text-base font-normal leading-normal text-[#545454]">
              / zamestnanec / mesiac bez DPH
            </p>
          </div>
          <p className="text-base xl:text-lg font-normal leading-normal text-[#545454] text-center max-w-[840px] w-full mx-auto">
            Platíte len za zamestnancov, ktorí evidujú dochádzku v kalendárnom
            mesiaci. Ak zamestnanec neevidoval dochádzku v kalendárnom mesiaci,
            nebude zahrnutá do fakturácie. Žiadne ďalšie náklady, žiadne
            záväzky. Spravodlivá fakturácia.
          </p>
        </div>
      </div>
      <Image
        src={dottedBorder}
        alt="border"
        className="absolute right-0 -bottom-[100px]"
        width={'100%'}
        height={'100%'}
      />
    </section>
  );
};

export default OurPrices;
