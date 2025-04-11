'use client';

import Image from 'next/image';
import checkedIcon from '@/app/images/pink-checked.svg';
import heroImg from '@/app/images/hero-img.png';
import AOSInit from './AOSInit';

const heroFeatures = [
  "Možnosť GPS lokalizácie príletov a odletov",
  "Bez terminálov a čipových kariet",
  "Dostupná cena: 1€ / zamestnanec / mesiac",
  "Žiadne ďalšie náklady a poplatky, žiadny záväzok"
];

const Hero = () => {
  return (
   <>
   <AOSInit />
    <section className="pt-40 xl:pt-[288px] pb-10 md:pb-20 xl:pb-[128px] relative">
      <div className="w-[880px] h-[880px] bg-customLightBlue rounded-full absolute -right-[305px] -top-[270px] -z-[1]"></div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl xl:text-5xl font-semibold leading-tight text-customBlue mb-4">
              Checkio dochádzka s GPS lokalizácia za 1€ mesačne
            </h1>
            <p className="text-base md:text-lg xl:text-xl font-normal leading-normal text-customDarkGray mb-4">
              Zamestnanci zaznamenávajú dochádzku svojim mobilným telefónom
              skenovaním pracoviska QR kód. Manažér na nich sleduje a riadi
              dochádzku zamestnancov mobilu alebo vo webovom prehliadači v
              reálnom čase
            </p>
            <ul className="flex flex-col gap-3 mb-10 xl:mb-16">
              {heroFeatures.map((text, index) => (
                <li key={index} className="flex items-center gap-4 text-sm md:text-lg xl:text-xl font-normal leading-normal text-customDarkGray">
                  <Image src={checkedIcon} alt="Checked icon" width={24} height={24} />
                  {text}
                </li>
              ))}
            </ul>
            <a href="#" className="btn text-sm md:text-xl h-10 md:h-11 ">Získajte ukážku</a>
          </div>
          <div data-aos="fade-left"  data-aos-duration="700">
            <Image src={heroImg} alt="hero-img" width={'100%'} height={'100%'} priority />
          </div>
        </div>
      </div>
    </section>
   </>
  );
};

export default Hero;