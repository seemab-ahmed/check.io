import Image from 'next/image';
import statsBg from '@/app/images/stats-bg.png';
import statsCardImg1 from '@/app/images/stat-img1.svg';
import statsCardImg2 from '@/app/images/stat-img2.svg';
import statsCardImg3 from '@/app/images/stat-img3.svg';
import statsCardImg4 from '@/app/images/stat-img4.svg';
import statsCardImg5 from '@/app/images/stat-img5.svg';

const Stats = () => {
  const statsData = [
    {
      icon: statsCardImg1,
      value: "250 000+",
      label: "Registrovaná účasť",
    },
    {
      icon: statsCardImg2,
      value: "500+",
      label: "Spokojní klienti",
    },
    {
      icon: statsCardImg3,
      value: "3,800+",
      label: "zamestnancov",
    },
    {
      icon: statsCardImg4,
      value: "100%",
      label: "Dostupnosť",
    },
    {
      icon: statsCardImg5,
      value: "24/7",
      label: "Podpora",
    },
  ];

  return (
    <section className="py-10 xl:py-[120px]">
      <div className="container">
        <div
          className="py-20 px-3  rounded-[18px] overflow-hidden relative"
          style={{ backgroundImage: `url(${statsBg})` }}
        >
          <div
            className="absolute left-0 top-0 w-full h-full"
            style={{ backgroundColor: `rgba(0, 66, 124, 0.86)` }}
          ></div>
          <div className="flex justify-between items-center gap-5 md:gap-0 flex-col md:flex-row flex-wrap relative z-[1] max-w-[1320px] mx-auto w-full">
            {statsData.map((item, index) => (
              <div key={index} className="flex flex-col justify-center items-center">
                <Image src={item.icon} alt={item.label} className="mb-5" width={'100%'} height={'100%'} />
                <span className="text-3xl xl:text-[43px] font-bold leading-tight text-white mb-4">{item.value}</span>
                <span className="text-base xl:text-xl font-normal leading-normal text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
