import React from "react";
import contactImg from "../assets/images/contact-img.png";
import emailIcon from "../assets/images/email-icon.svg";
import passwordIcon from "../assets/images/password-icon.svg";

const ContactUs = () => {
  return (
    <section>
      <div className="container">
        <div className="p-1.5 rounded-[20px] bg-white">
          <div className="border-[2px] border-[#CEE8FF] rounded-[18px] bg-[#EBF5FF] py-8 px-16 grid grid-cols-2 gap-[70px]">
            <div>
              <img src={contactImg} alt="contact-img" />
            </div>
            <div>
              <div className="mb-10">
                <span className="h-[60px] max-w-fit flex items-center justify-center px-3 text-2xl font-medium text-customBlue rounded-[10px] bg-white border border-[#F3ECFF] mb-6">
                  REGISTRÁCIA
                </span>
                <h2 className="text-[40px] font-semibold leading-tight text-customDarkGrayLight mb-6">
                  Vyskúšajte 15 dní zadarmo
                </h2>
                <p className="max-w-[668px] w-full text-lg font-normal leading-normal text-customDarkGrayLight">
                  Vyskúšajte, aké jednoduché je vyriešiť evidenciu dochádzky vo
                  vašej firme. Cena za používanie dochádzkového systému je 1€
                  bez DPH /zamestnanec / mesiac.
                </p>
              </div>
              <form className="flex flex-col gap-4 mb-10">
                <input
                  type="email"
                  placeholder="Váš e-mail"
                  className="h-14 rounded-md bg-white bg-no-repeat border border-[#CEE8FF] py-3 px-14 block w-full"
                  style={{
                    backgroundImage: `url(${emailIcon})`,
                    backgroundPosition: `14px center`,
                  }}
                />
                <input
                  type="password"
                  placeholder="Vaše heslo"
                  className="h-14 rounded-md bg-white bg-no-repeat border border-[#CEE8FF] py-3 px-14 block w-full"
                  style={{
                    backgroundImage: `url(${passwordIcon})`,
                    backgroundPosition: `16px center`,
                  }}
                />
                <input
                  type="password"
                  placeholder="Opakujte heslo"
                  className="h-14 rounded-md bg-white bg-no-repeat border border-[#CEE8FF] py-3 px-14 block w-full"
                  style={{
                    backgroundImage: `url(${passwordIcon})`,
                    backgroundPosition: `16px center`,
                  }}
                />
              </form>
              <span className="text-xl font-medium leading-tight text-customDarkGrayLight mb-4">
                čo bude ďalej?
              </span>
              <ul className="list-disc pl-5 mb-4">
                <li className="text-lg font-normal leading-normal text-customDarkGrayLight">
                  Vytvoríte si profily svojich zamestnancov
                </li>
                <li className="text-lg font-normal leading-normal text-customDarkGrayLight">
                  Vygenerovaný QR kód si vytlačíte a umiestnite na pracovisko
                </li>
                <li className="text-lg font-normal leading-normal text-customDarkGrayLight">
                  Zamestnanci začnú zaznamenávať svoju dochádzku načítaním QR
                  kódu pomocou aplikácie v telefóne
                </li>
              </ul>
              <p className="text-lg font-normal leading-normal text-customBlue">
                *Po 15 dňoch sa môžete slobodne rozhodnúť, či chcete pokračovať
                v platenom režime. Ak sa nerozhodnete, nebudú vám účtované
                žiadne poplatky.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
