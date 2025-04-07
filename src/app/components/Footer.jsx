'use client';

import Image from 'next/image';
import footerLogo from '@/app/images/footer-logo.svg';

const Footer = () => {
  return (
    <footer className="px-8 pt-20 pb-10">
      <div className="p-1.5 rounded-[20px] bg-white">
        <div className="border-[2px] border-[#CEE8FF] rounded-[18px] bg-customBlue py-[74px] px-5 flex flex-col justify-center items-center">
          <a href="#" className="mb-[55px]">
            <Image src={footerLogo} alt="Footer Logo" width={'100%'} height={'100%'} />
          </a>
          <p className="text-2xl font-medium leading-tight text-white mb-10">
            Podmienky používania | Ochrana osobných údajov | Zrušte odber
          </p>
          <form className="h-[54px] bg-white max-w-[730px] w-full rounded-md overflow-hidden relative mb-10">
            <input
              type="text"
              placeholder="Prihláste sa na odber noviniek"
              className="h-full block text-lg font-normal leading-none text-[#3F3F3F] placeholder:text-[#3F3F3F] outline-none w-full pl-5 pr-[300px]"
            />
            <input
              type="submit"
              value="Prihlásiť sa na odber"
              className="btn absolute right-0 top-0 rounded-md uppercase"
            />
          </form>
          <p className="text-xl font-normal leading-normal text-white mb-16">
            CloudApps | Štefánikova 61, 085 01 Bardejov, Slovak Republic |{' '}
            <a href="tel:+421908988301">+421 908 988 301</a> |{' '}
            <a href="mailto:podpora@qrdochadzka.sk">podpora@qrdochadzka.sk</a>
          </p>
          <p className="text-xl font-normal leading-normal text-white">
            <span>Copyright © 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
