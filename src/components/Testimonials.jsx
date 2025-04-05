import React from "react";
import clientImg1 from "../assets/images/client1.png";
import clientImg2 from "../assets/images/client2.png";
import clientImg3 from "../assets/images/client3.png";
import commaImg from "../assets/images/commas.svg";
import arrowPrev from "../assets/images/arrow-prev.svg";
import arrowNext from "../assets/images/arrow-next.svg";

const testimonialsCards = [
  {
    image: clientImg1,
    title: "Simona Hudáková",
    subTitle: "Manažérka hotela",
    description:
      "Aplikácia qrdochadzka.sk priniesla výraznú zmenu v našom hoteli. S jednoduchým používaním a rýchlym zavádzaním evidencie dochádzky sme získali efektívnejšiu kontrolu nad pracovníkmi v hoteli. Táto dochádzka sa stala neodmysliteľnou súčasťou našej prevádzky.",
  },
  {
    image: clientImg2,
    title: "Simona Hudáková",
    subTitle: "Majiteľ upratovacej",
    description:
      "Naša dochádzka bola po mnoho rokov evidovaná ručne, a to aj výpočet hodín dochádzky sme vykonávali manuálne. Po prechode na automatizovaný systém sme ušetrili veľké množstvo času a znížila sa chybovosť pri výpočte odpracovaných hodín.",
  },
  {
    image: clientImg3,
    title: "Simona Hudáková",
    subTitle: "Manažérka hotela",
    description:
      "Aplikácia qrdochadzka.sk sa stala nepostrádateľnou súčasťou našej lekárne. Pomáha nám udržať prehľad o dochádzke zamestnancov a to všetko s minimálnym úsilím. Dochádzka nám tiež eviduje aj dovolenky, služobné cesty atď. Je to pre nás skutočný časový zázrak.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col justify-center items-center mb-10">
          <span className="h-[60px] max-w-fit flex items-center justify-center px-3 text-2xl font-medium text-customBlue rounded-[10px] bg-white border border-[#F3ECFF] mb-6">
            Posudky
          </span>
          <h2 className="text-[40px] font-semibold leading-tight text-customDarkGrayLight">
            Príbehy používateľov
          </h2>
        </div>
        <div className="p-1.5 rounded-[20px] bg-white">
          <div className="grid grid-cols-3 gap-10 border-[2px] border-[#CEE8FF] rounded-[18px] bg-[#EBF5FF] p-[26px] pb-[84px]">
            {testimonialsCards.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-1.5">
                <div className="border border-[#C8E3FF] bg-white rounded-[10px] p-8 h-full">
                  <div className="flex items-center justify-between gap-5 mb-4">
                    <div className="flex items-center gap-5">
                      <figure>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="mx-auto rounded-full w-[70px] h-[70px] object-cover"
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
                    <img src={commaImg} alt="comma" />
                  </div>
                  <p className="text-base text-customBlue leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 rounded-[100px] max-w-[332px] w-full mx-auto bg-white -mt-14 flex items-center justify-between">
          <button className="w-[70px] h-[70px] rounded-full border border-[#CEE8FF] bg-[#EBF5FF] flex justify-center items-center">
            <img src={arrowPrev} alt="arrow" />
          </button>
          <div></div>
          <button className="w-[70px] h-[70px] rounded-full border border-[#CEE8FF] bg-[#EBF5FF] flex justify-center items-center">
            <img src={arrowNext} alt="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
