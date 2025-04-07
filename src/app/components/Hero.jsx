'use client';

import Image from 'next/image';
import checkedIcon from '@/app/images/pink-checked.svg';
import heroImg from '@/app/images/hero-img.png';

const heroFeatures = [
  "Možnosť GPS lokalizácie príletov a odletov",
  "Bez terminálov a čipových kariet",
  "Dostupná cena: 1€ / zamestnanec / mesiac",
  "Žiadne ďalšie náklady a poplatky, žiadny záväzok"
];

const Hero = () => {
  return (
    <section className="pt-[288px] pb-[128px] relative">
      <div className="w-[880px] h-[880px] bg-customLightBlue rounded-full absolute -right-[305px] -top-[270px] -z-[1]"></div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-semibold leading-tight text-customBlue mb-4">
              Checkio dochádzka s GPS lokalizácia za 1€ mesačne
            </h1>
            <p className="text-xl font-normal leading-normal text-customDarkGray mb-4">
              Zamestnanci zaznamenávajú dochádzku svojim mobilným telefónom
              skenovaním pracoviska QR kód. Manažér na nich sleduje a riadi
              dochádzku zamestnancov mobilu alebo vo webovom prehliadači v
              reálnom čase
            </p>
            <ul className="flex flex-col gap-3 mb-16">
              {heroFeatures.map((text, index) => (
                <li key={index} className="flex items-center gap-4 text-xl font-normal leading-normal text-customDarkGray">
                  <Image src={checkedIcon} alt="Checked icon" width={24} height={24} />
                  {text}
                </li>
              ))}
            </ul>
            <a href="#" className="btn">Získajte ukážku</a>
          </div>
          <div>
            <Image src={heroImg} alt="hero-img" width={'100%'} height={'100%'} priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;