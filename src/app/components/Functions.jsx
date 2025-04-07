'use client';

import Image from 'next/image';
import simpleAttendance from '@/app/images/simple-attendance.svg';
import unlimitedWorkplaces from '@/app/images/unlimited-workplaces.svg';
import gpsTracking from '@/app/images/gps-tracking.svg';
import attendanceTracking from '@/app/images/attendance-tracking.svg';
import managerReport from '@/app/images/manager-report.svg';
import eventRecords from '@/app/images/event-records.svg';
import exportToExcel from '@/app/images/export-to-excel.svg';
import additionalFunctions from '@/app/images/additional-functions.svg';
import employeeOverview from '@/app/images/employee-overview.svg';

const features = [
  {
    title: "Jednoduchá evidencia dochádzky",
    description:
      "Zamestnanci majú vo svojom mobilnom telefóne nainštalovanú aplikáciu qrdochadzka.sk a pri príchode a odchode pomocou telefónu naskenujú QR kód pracoviska.",
    image: simpleAttendance,
  },
  {
    title: "Neobmedzený počet pracovísk",
    description:
      "Pre každé pracovisko alebo projekt si aplikácia vygeneruje vlastný QR kód, ktorý si vytlačíte a umiestnite na pracovisko, kde si ho zamestnanci naskenujú vlastným mobilným telefónom.",
    image: unlimitedWorkplaces,
  },
  {
    title: "Možnosť lokalizácie GPS",
    description:
      "Presná lokalizácia príchodov a odchodov zamestnancov. Ochrana pred prípadným podvodným zaznamenávaním dochádzky pomocou GPS lokalizačných služieb.",
    image: gpsTracking,
  },
  {
    title: "Sledovanie dochádzky",
    description:
      "Sledujte dochádzku zamestnancov v reálnom čase priamo vo svojom mobile alebo webovom prehliadači. Okamžitý prehľad o tom, kto je v práci, neskoro alebo už odišiel.",
    image: attendanceTracking,
  },
  {
    title: "Manažérsky výstup",
    description:
      "Záverečná správa poskytuje podrobný denný a mesačný prehľad o príchodoch a odchodoch zamestnancov z práce, ich odpracovaných hodinách, práci cez sviatky a víkendy.",
    image: managerReport,
  },
  {
    title: "Záznamy udalostí",
    description:
      "Evidencia práce, služobných ciest, home office, práceneschopnosti, dovolenky, ošetrenia člena rodiny a iných špeciálnych dochádzkových akcií.",
    image: eventRecords,
  },
  {
    title: "Export dochádzky do Excelu",
    description:
      "Export dochádzky do Excelu v súhrnnej a podrobnej forme vám poskytne potrebné prehľady a zostavy ako podklad pre mzdové účtovníctvo.",
    image: exportToExcel,
  },
  {
    title: "Doplnkové funkcie",
    description:
      "Zadarmo: Na požiadanie aktivujeme automatické odpočítanie obedňajšej prestávky, zaokrúhľovanie časov príchodu / odchodu, notifikácie zasielané emailom.",
    image: additionalFunctions,
  },
  {
    title: "Osobný prehľad pre zamestnanca",
    description:
      "Prehľadné denné a mesačné zobrazovanie dochádzky a iných udalostí na jeho osobnom účte v mobile.",
    image: employeeOverview,
  },
];

const Functions = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-semibold leading-tight text-customBlue mb-6">
            Funkcie dochádzky
          </h2>
          <p className="text-lg font-normal leading-normal text-customDarkGrayLight">
            Všetky funkcie, ktoré potrebujete pre dochádzkový systém
          </p>
        </div>
        <div className="p-1.5 rounded-[20px] bg-white">
          <div className="grid grid-cols-3 gap-8 border-[2px] border-[#CEE8FF] rounded-[18px] bg-[#EBF5FF] p-[26px]">
            {features.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-1.5">
                <div className="border border-[#C8E3FF] bg-white rounded-[10px] py-8 px-10 h-full">
                  <figure className="mb-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={70}
                      height={70}
                      className="mx-auto"
                    />
                  </figure>
                  <h3 className="text-[22px] font-semibold text-[#2C2C2C] mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#6B6B6B] leading-normal text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Functions;