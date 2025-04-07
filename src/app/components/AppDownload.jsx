"use client";

import Image from "next/image";
import appStoreBtn from "@/app/images/app-store.svg";
import playStoreBtn from "@/app/images/goggle-play.svg";
import iphoneImg from "@/app/images/iphone.png";

const AppDownload = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-2 gap-10 items-center max-w-[1024px] mx-auto w-full">
          <div>
            <h2 className="text-[40px] font-semibold leading-tight text-customDarkGrayLight mb-6">
              Vyskúšajte 15 dní zadarmo
            </h2>
            <p className="max-w-[668px] w-full text-lg font-normal leading-normal text-customDarkGrayLight mb-6">
              Vyskúšajte, aké jednoduché je vyriešiť evidenciu dochádzky vo
              vašej firme. Cena za používanie dochádzkového systému je 1€ bez
              DPH /zamestnanec / mesiac.
            </p>
            <div className="grid grid-cols-2 gap-5 max-w-[350px]">
              <Image
                src={appStoreBtn}
                alt="Logo"
                width={"100%"}
                height={"100%"}
              />
              <Image
                src={playStoreBtn}
                alt="Logo"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
          <div>
            <Image src={iphoneImg} alt="Logo" width={"100%"} height={"600"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
