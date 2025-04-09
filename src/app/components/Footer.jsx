'use client';

import Image from 'next/image';
import footerLogo from '@/app/images/footer-logo.svg';

const Footer = () => {
  return (
    <footer className="px-5 md:px-8 pt-10 md:pt-20 pb-10">
      <div className="p-1.5 rounded-[20px] bg-white">
        <div className="border-[2px] border-[#CEE8FF] rounded-[18px] bg-customBlue py-10 md:py-[74px] px-5 flex flex-col justify-center items-center text-center md:text-left">
          <a href="#" className="mb-[55px]">
            <Image src={footerLogo} alt="Footer Logo" className='max-w-[180px] md:max-w-[313px]' width={'100%'} height={'100%'} />
          </a>
          <p className="text-base md:text-xl xl:text-2xl font-medium leading-tight text-white mb-10">
            Podmienky používania | Ochrana osobných údajov | Zrušte odber
          </p>
          <form className=" h-fullsm:flex sm:flex-col  sm:h-[54px] bg-white max-w-[730px] w-full rounded-md overflow-hidden relative mb-10">
            <input
              type="text"
              placeholder="Prihláste sa na odber noviniek"
              className="h-full block text-center text-x md:text-lg font-normal leading-none text-[#3F3F3F] placeholder:text-[#3F3F3F] outline-none w-full p-2 sm:pl-5 sm:pr-[300px]"
            />
            <input
              type="submit"
              value="Prihlásiť sa na odber"
              className="px-3 sm:px-[30px] btn text-base md:text-xl sm:absolute sm:right-0 sm:top-0 rounded-md uppercase w-full sm:max-w-max max-w-full"
            />
          </form>
          <p className=" text-center text-sm md:text-xl font-normal leading-normal text-white mb-10 md:mb-16 px-2 ">
            CloudApps | Štefánikova 61, 085 01 Bardejov, Slovak Republic |{' '}
            <a href="tel:+421908988301">+421 908 988 301</a> |{' '}
            <a href="mailto:podpora@qrdochadzka.sk">podpora@qrdochadzka.sk</a>
          </p>
          <p className="text-sm md:text-xl font-normal leading-normal text-white">
            <span>Copyright © 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
