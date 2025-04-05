import React from "react";
import quickDetailImg from "../assets/images/action-detail-img.png";
import Step1 from "../assets/images/qa-step1.png";
import Step2 from "../assets/images/qa-step2.png";
import Step3 from "../assets/images/qa-step3.png";
import Step4 from "../assets/images/qa-step4.png";

const QuickActionSteps = () => {
  const steps = [
    {
      id: "01",
      title: "Zaregistrujte sa",
      description:
        "Ak chcete sledovať a spravovať dochádzku svojich zamestnancov nielen cez webový prehliadač, ale aj na mobilnom telefóne, stiahnite si do mobilu aplikáciu qrdochadzka.sk.",
      image: Step1,
    },
    {
      id: "02",
      title: "Vytvorte profil zamestnanca",
      description:
        "Vytvorte profily svojich zamestnancov. Zamestnanec dostane e-mailom pokyny, ako si mobil stiahnuť a ako sa prihlásiť do aplikácie na svojom mobilnom telefóne.",
      image: Step2,
    },
    {
      id: "03",
      title: "QR kód pracoviska",
      description:
        "Vytvorte si pracoviská / projekty, kde budete evidovať dochádzku. Vytlačte si vygenerovaný QR kód pracoviska a umiestnite ho.",
      image: Step3,
    },
    {
      id: "04",
      title: "Rekordná účasť",
      description:
        "Na evidenciu dochádzky zamestnanci využívajú aplikáciu qrdochadzka.sk, ktorú majú stiahnutú do mobilného telefónu.",
      image: Step4,
    },
  ];
  return (
    <section className="relative">
      <div className="container">
        <div className="grid grid-cols-2 gap-16 items-center">
          <img src={quickDetailImg} alt="detail-img" />
          <div>
            <span className="h-[60px] max-w-fit flex items-center justify-center px-3 text-2xl font-medium text-customBlue rounded-[10px] bg-white border border-[#F3ECFF] mb-6">
              Aktivácia
            </span>
            <h2 className="text-[40px] font-semibold leading-tight text-customDarkGrayLight">
              Rýchla <span className="text-customBlue">aktivácia</span> v 4
              krokoch
            </h2>
          </div>
        </div>
        <div className="p-1.5 rounded-[20px]">
          <div className="grid grid-cols-4 steps-detail-row items-start">
            {steps.map((item, index) => (
              <div className="step-card border-[2px] border-[#CEE8FF] rounded-[18px] bg-[#EBF5FF] p-[26px]">
                <div key={index} className="bg-white rounded-xl p-1.5">
                  <div className="border border-[#C8E3FF] bg-white rounded-[10px] p-4 h-full">
                    <figure className="mb-5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mx-auto"
                      />
                      <div className="p-1 w-10 h-10 bg-customBlue rounded-full mx-auto -mt-5">
                        <span className="text-base font-medium leading-none text-white flex justify-center items-center border border-[#00B6EF] rounded-full w-full h-full">
                          {item.id}
                        </span>
                      </div>
                    </figure>
                    <h3 className="text-[20px] font-semibold text-customBlue mb-2">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#6B6B6B] leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[180px] h-[180px] rounded-full bg-custom-gradient absolute -left-[120px] -bottom-[58px]"></div>
    </section>
  );
};

export default QuickActionSteps;
