'use client'
import { useEffect, useState } from 'react';
import brandBg from '@/app/images/brands-bg.svg';
const GetStarted = () => {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMdUp(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <section className="py-10 xl:py-16 relative">
      <div className="container">
        <div
          className="md:px-0 px-3 py-20 xl:py-[136px] flex flex-col justify-center items-center text-center xl:text-left text-white"
          style={{
            background: isMdUp
              ? `url(${brandBg.src}) center/cover no-repeat`
              : '#00427C', // Tailwind blue-700
          }}
        >
          <h2 className="text-2xl xl:text-[40px] font-semibold leading-tight mb-6">
            Začnite používať náš dochádzkový systém
          </h2>
          <p className="text-base md:text-2xl xl:text-[28px] font-normal leading-normal mb-10">
            Žiadne fixné poplatky. Spravodlivé účtovanie. Žiadne počiatočné
            investície.
          </p>
          <a href="#" className="btn text-sm h-10 md:h-11  md:text-xl">Začíname</a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;