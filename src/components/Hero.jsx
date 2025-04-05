import React from "react";
import checkedIcon from "../assets/images/pink-checked.svg"; // Adjust path if necessary
import heroImg from "../assets/images/hero-img.png"; // Adjust path if necessary

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
              <li className="flex items-center gap-4 text-xl font-normal leading-normal text-customDarkGray">
                <img src={checkedIcon} alt="Checked icon" loading="lazy" />
                Možnosť GPS lokalizácie príletov a odletov
              </li>
              <li className="flex items-center gap-4 text-xl font-normal leading-normal text-customDarkGray">
                <img src={checkedIcon} alt="Checked icon" loading="lazy" />
                Bez terminálov a čipových kariet
              </li>
              <li className="flex items-center gap-4 text-xl font-normal leading-normal text-customDarkGray">
                <img src={checkedIcon} alt="Checked icon" loading="lazy" />
                Dostupná cena: 1€ / zamestnanec / mesiac
              </li>
              <li className="flex items-center gap-4 text-xl font-normal leading-normal text-customDarkGray">
                <img src={checkedIcon} alt="Checked icon" loading="lazy" />
                Žiadne ďalšie náklady a poplatky, žiadny záväzok
              </li>
            </ul>
            <a href="/" className="btn">Získajte ukážku</a>
          </div>
          <div>
            <img src={heroImg} alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
