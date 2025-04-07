'use client';

import Image from 'next/image';
import brandBg from '@/app/images/brands-bg.svg';

const GetStarted = () => {
  return (
    <section className="py-16 relative">
      <div className="container">
        <div
          className="bg-cover bg-center bg-no-repeat py-[136px] flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${brandBg.src})` }}
        >
          <h2 className="text-[40px] font-semibold leading-tight text-white mb-6">
            Začnite používať náš dochádzkový systém
          </h2>
          <p className="text-[28px] font-normal leading-normal text-white mb-10">
            Žiadne fixné poplatky. Spravodlivé účtovanie. Žiadne počiatočné
            investície.
          </p>
          <a href="#" className="btn">Začíname</a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
